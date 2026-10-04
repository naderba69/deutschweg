#!/usr/bin/env node
/* Deutschweg — the B2 timed-writing measure.
 *
 * §12.1 fixes the shape of the Schreiben module: 75 minutes, Task 1 an opinion
 * text of ≥150 words (60 points), Task 2 a message of ≥100 words (40 points),
 * and a missed content point can zero the whole task. §13.3's writing track
 * promises twenty timed writings before B2. This tool counts what exists, prints
 * the table, and gates against `tools/b2-writing-floor.json` — the measured
 * value of the last accepted run, which may only rise (`--write-floor`).
 *
 *   node tools/measure-b2-writing.js
 *   node tools/measure-b2-writing.js --write-floor
 */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const FLOOR_FILE = path.join(__dirname, 'b2-writing-floor.json');
const WRITE = process.argv.includes('--write-floor');

const win = {};
['web/data/writing-b2.js', 'web/data/inventory.js']
  .forEach(f => new Function('window', fs.readFileSync(path.join(root, f), 'utf8'))(win));
const B2 = win.DW_WRITING_BANK.B2;
const MAP = (win.DW_WRITING && win.DW_WRITING.B2) || null;
const tasks = B2.tasks;
const words = s => String(s || '').trim().split(/\s+/).filter(Boolean).length;

const measured = {
  tasks: tasks.length,
  minutes: Math.min.apply(null, tasks.map(t => t.minutes)),
  minWords1: Math.min.apply(null, tasks.map(t => t.task1.minWords)),
  minWords2: Math.min.apply(null, tasks.map(t => t.task2.minWords)),
  pointsPerTask: Math.min.apply(null, tasks.map(t => Math.min(t.task1.points.length, t.task2.points.length))),
  kinds: new Set(tasks.map(t => t.task1.kind + ' / ' + t.task2.kind)).size
};

console.log('\nB2 timed writings — ' + tasks.length + ' writings of ' + B2.minutes + ' minutes' +
  ' (Task 1 ≥' + B2.task1.minWords + ' words · Task 2 ≥' + B2.task2.minWords + ' words)');
tasks.forEach(t => console.log('  ' + t.id + '  ' + String(t.type).padEnd(24) + t.title +
  '  · T1 ' + t.task1.kind + ' (' + t.task1.points.length + ' points) · T2 ' + t.task2.kind +
  ' (' + t.task2.points.length + ' points)'));

let fail = 0;
function gate(name, now, floor) {
  const ok = now >= floor;
  if (!ok) fail += 1;
  console.log('  ' + (ok ? '✓' : '✗') + ' ' + name + ': ' + now + ' (floor ' + floor + ')');
}
function must(name, ok, why) {
  if (!ok) fail += 1;
  console.log('  ' + (ok ? '✓' : '✗') + ' ' + name + (ok || !why ? '' : ' — ' + why));
}

const FLOOR = fs.existsSync(FLOOR_FILE)
  ? JSON.parse(fs.readFileSync(FLOOR_FILE, 'utf8'))
  : Object.assign({}, measured);

console.log('\nwriting gate  (floor = last accepted run · a ratchet, never lowered)');
gate('timed writings', measured.tasks, FLOOR.tasks);
gate('minutes per writing', measured.minutes, FLOOR.minutes);
gate('Task 1 minimum words', measured.minWords1, FLOOR.minWords1);
gate('Task 2 minimum words', measured.minWords2, FLOOR.minWords2);
gate('content points per task', measured.pointsPerTask, FLOOR.pointsPerTask);
gate('distinct task-1/task-2 kind pairs', measured.kinds, FLOOR.kinds);

const AR = /[\u0600-\u06FF]/;
const ids = tasks.map(t => t.id);
must('ids are unique and sequential (b2-s01 …)', ids.length === new Set(ids).size &&
  ids.every((id, i) => id === 'b2-s' + String(i + 1).padStart(2, '0')));
must('every writing carries the four rubric axes',
  tasks.every(t => JSON.stringify(t.axes) === JSON.stringify(B2.axes)));
must('every situation and task prompt is German and short',
  tasks.every(t => t.situation && !AR.test(t.situation) && words(t.situation) <= 60) &&
  tasks.every(t => !AR.test(t.task1.prompt) && !AR.test(t.task2.prompt) &&
    words(t.task1.prompt) <= 30 && words(t.task2.prompt) <= 30));
must('every content point is German and short',
  tasks.every(t => t.task1.points.concat(t.task2.points).every(p => p && !AR.test(p) && words(p) <= 10)));
must('no two writings share a title',
  new Set(tasks.map(t => t.title)).size === tasks.length);
must('the map names what exists (DW_WRITING.B2): ' + (MAP ? MAP.timed + ' × ' + MAP.minutes + ' min' : 'no map entry'),
  !!MAP && MAP.timed === tasks.length && MAP.minutes === B2.minutes &&
  MAP.task1Min === B2.task1.minWords && MAP.task2Min === B2.task2.minWords &&
  JSON.stringify(MAP.axes) === JSON.stringify(B2.axes), JSON.stringify(MAP));

if (WRITE) {
  const raised = {};
  Object.keys(FLOOR).forEach(k => { raised[k] = Math.max(FLOOR[k], measured[k] || 0); });
  fs.writeFileSync(FLOOR_FILE, JSON.stringify(raised, null, 2) + '\n');
  console.log('\n  wrote ' + path.relative(root, FLOOR_FILE) + ' ' + JSON.stringify(raised));
}
process.exit(fail ? 1 : 0);

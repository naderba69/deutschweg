#!/usr/bin/env node
/* Deutschweg — the B2 speaking measure.
 *
 * §12.1: Sprechen is ~15 minutes plus 15 minutes of preparation — a short
 * presentation (~4 minutes) with partner questions, then a discussion (~5
 * minutes). §12.2 gives the six axes, and the engine scores only a real
 * recording: no recording, no score. §13.3's speaking track promises recorded
 * discussions for B2. This tool counts what exists, prints the table, and gates
 * against `tools/b2-speaking-floor.json` (a ratchet; `--write-floor` raises it).
 *
 *   node tools/measure-b2-speaking.js
 *   node tools/measure-b2-speaking.js --write-floor
 */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const FLOOR_FILE = path.join(__dirname, 'b2-speaking-floor.json');
const WRITE = process.argv.includes('--write-floor');

const win = {};
['web/data/speaking-b2.js', 'web/data/inventory.js']
  .forEach(f => new Function('window', fs.readFileSync(path.join(root, f), 'utf8'))(win));
const B2 = win.DW_SPEAKING_BANK.B2;
const MAP = (win.DW_SPEAKING && win.DW_SPEAKING.B2) || null;
const tasks = B2.tasks;
const words = s => String(s || '').trim().split(/\s+/).filter(Boolean).length;

const measured = {
  tasks: tasks.length,
  prepMinutes: B2.prepMinutes,
  minutes: B2.minutes,
  presentationSeconds: Math.min.apply(null, tasks.map(t => t.presentation.seconds)),
  discussionSeconds: Math.min.apply(null, tasks.map(t => t.discussion.seconds)),
  pointsPerPart: Math.min.apply(null, tasks.map(t => Math.min(t.presentation.points.length, t.discussion.points.length))),
  axes: B2.axes.length
};

console.log('\nB2 recorded discussions — ' + tasks.length + ' discussions' +
  ' (' + B2.prepMinutes + ' min preparation · ' + B2.minutes + ' min exam)');
tasks.forEach(t => console.log('  ' + t.id + '  ' + String(t.title).padEnd(20) +
  ' · presentation ' + Math.round(t.presentation.seconds / 60) + ' min (' + t.presentation.points.length +
  ' points) · discussion ' + Math.round(t.discussion.seconds / 60) + ' min (' + t.discussion.points.length + ' points)'));

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

console.log('\nspeaking gate  (floor = last accepted run · a ratchet, never lowered)');
gate('recorded discussions', measured.tasks, FLOOR.tasks);
gate('preparation minutes', measured.prepMinutes, FLOOR.prepMinutes);
gate('exam minutes', measured.minutes, FLOOR.minutes);
gate('presentation seconds', measured.presentationSeconds, FLOOR.presentationSeconds);
gate('discussion seconds', measured.discussionSeconds, FLOOR.discussionSeconds);
gate('content points per part', measured.pointsPerPart, FLOOR.pointsPerPart);
gate('axes (the six of §12.2)', measured.axes, FLOOR.axes);

const AR = /[\u0600-\u06FF]/;
const ids = tasks.map(t => t.id);
must('ids are unique and sequential (b2-d01 …)',
  ids.length === new Set(ids).size && ids.every((id, i) => id === 'b2-d' + String(i + 1).padStart(2, '0')));
must('every discussion carries the six axes in order',
  tasks.every(t => JSON.stringify(t.axes) === JSON.stringify(B2.axes)));
must('every situation, input, topic and prompt is German and short', tasks.every(t =>
  t.situation && !AR.test(t.situation) && words(t.situation) <= 50 &&
  t.input && !AR.test(t.input) && words(t.input) <= 45 &&
  !AR.test(t.presentation.topic) && words(t.presentation.topic) <= 25 &&
  !AR.test(t.discussion.prompt) && words(t.discussion.prompt) <= 25));
must('every content point is German and short', tasks.every(t =>
  t.presentation.points.concat(t.discussion.points).every(p => p && !AR.test(p) && words(p) <= 12)));
must('no two discussions share a title', new Set(tasks.map(t => t.title)).size === tasks.length);
must('every discussion has an input to work from (the exam hands one out)',
  tasks.every(t => !!t.input));
must('the map names what exists (DW_SPEAKING.B2): ' + (MAP ? MAP.recorded + ' recordings' : 'no map entry'),
  !!MAP && MAP.recorded === tasks.length && MAP.minutes === B2.minutes && MAP.prepMinutes === B2.prepMinutes &&
  MAP.axes === B2.axes.length, JSON.stringify(MAP));

if (WRITE) {
  const raised = {};
  Object.keys(FLOOR).forEach(k => { raised[k] = Math.max(FLOOR[k], measured[k] || 0); });
  fs.writeFileSync(FLOOR_FILE, JSON.stringify(raised, null, 2) + '\n');
  console.log('\n  wrote ' + path.relative(root, FLOOR_FILE) + ' ' + JSON.stringify(raised));
}
process.exit(fail ? 1 : 0);

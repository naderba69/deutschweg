#!/usr/bin/env node
/* Deutschweg — the listening-ladder measure.
 *
 * R5 (unannounced listening) can only be measured if the ladder has enough
 * items per level, and the ladder is content, not code: each item is a script,
 * two questions and the level's target. This tool counts what exists, prints
 * the table, and gates against `tools/ladder-floor.json` — the measured value
 * of the last accepted run, which may only rise (`--write-floor`).
 *
 *   node tools/measure-ladder.js
 *   node tools/measure-ladder.js --write-floor
 */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const FLOOR_FILE = path.join(__dirname, 'ladder-floor.json');
const WRITE = process.argv.includes('--write-floor');

const win = {};
new Function('window', fs.readFileSync(path.join(root, 'web/data/ladder.js'), 'utf8'))(win);
const items = (win.DW_LADDER && win.DW_LADDER.items) || [];

const LEVELS = ['A1', 'A2', 'B1', 'B2'];
const levels = {};
LEVELS.forEach(lv => {
  const mine = items.filter(i => i.level === lv);
  levels[lv] = {
    audio: mine.filter(i => i.audio !== false).length,
    print: mine.filter(i => i.audio === false).length,
    r5: mine.filter(i => i.r5 !== false).length
  };
});
const measured = {
  total: items.length,
  audio: items.filter(i => i.audio !== false).length,
  A1: levels.A1.audio, A2: levels.A2.audio, B1: levels.B1.audio, B2: levels.B2.audio
};
const FLOOR = fs.existsSync(FLOOR_FILE)
  ? JSON.parse(fs.readFileSync(FLOOR_FILE, 'utf8'))
  : Object.assign({}, measured);

console.log('\nListening ladder — ' + items.length + ' items, ' + measured.audio + ' with audio');
LEVELS.forEach(lv => {
  const mine = items.filter(i => i.level === lv);
  console.log('  ' + lv + '  ' + mine.length + ' items · ' + levels[lv].audio + ' audio · ' +
    'targets ' + [...new Set(mine.map(i => i.target))].join(',') + ' · kinds ' +
    [...new Set(mine.map(i => i.kind))].join(' / '));
});

let fail = 0;
function gate(name, now, floor) {
  const ok = now >= floor;
  if (!ok) fail += 1;
  console.log('  ' + (ok ? '✓' : '✗') + ' ' + name + ': ' + now + ' (floor ' + floor + ')');
}
console.log('\nladder gate  (floor = last accepted run · a ratchet, never lowered)');
LEVELS.forEach(lv => gate(lv + ' audio items', levels[lv].audio, FLOOR[lv]));
gate('all items', measured.total, FLOOR.total);
gate('items with audio', measured.audio, FLOOR.audio);

const audioQ = items.filter(i => i.audio !== false);
const badQ = audioQ.filter(i => !Array.isArray(i.questions) || i.questions.length !== 2);
if (badQ.length) { fail += 1; console.log('  ✗ every audio item carries two questions — bad: ' + badQ.map(i => i.id).join(', ')); }
else console.log('  ✓ every audio item carries two questions');
const badKey = audioQ.filter(i => (i.questions || []).some(q => !q.key || !(q.options || []).includes(q.key)));
if (badKey.length) { fail += 1; console.log('  ✗ every key is one of its own options — bad: ' + badKey.map(i => i.id).join(', ')); }
else console.log('  ✓ every key is one of its own options');
const printOnly = items.filter(i => i.audio === false);
const badPrint = printOnly.filter(i => i.r5 !== false);
if (badPrint.length) { fail += 1; console.log('  ✗ print-only items stay out of R5 — bad: ' + badPrint.map(i => i.id).join(', ')); }
else console.log('  ✓ print-only items stay out of R5 (' + printOnly.length + ')');

if (WRITE) {
  const raised = {};
  Object.keys(FLOOR).forEach(k => { raised[k] = Math.max(FLOOR[k], measured[k] || 0); });
  fs.writeFileSync(FLOOR_FILE, JSON.stringify(raised, null, 2) + '\n');
  console.log('\n  wrote ' + path.relative(root, FLOOR_FILE) + ' ' + JSON.stringify(raised));
}
process.exit(fail ? 1 : 0);

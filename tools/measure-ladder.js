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
const words = s => String(s || '').trim().split(/\s+/).filter(Boolean).length;
const levels = {};
LEVELS.forEach(lv => {
  const mine = items.filter(i => i.level === lv);
  /* Length is content, not decoration: R5 measures unannounced listening, and a
     nine-word script is a vocabulary card read aloud. The shortest audio script of
     every level is therefore a measured number with its own ratchet, exactly like
     the shortest text of a level in tools/measure-reading-levels.js. */
  const lens = mine.filter(i => i.audio !== false).map(i => words(i.script)).sort((a, b) => a - b);
  levels[lv] = {
    audio: mine.filter(i => i.audio !== false).length,
    print: mine.filter(i => i.audio === false).length,
    r5: mine.filter(i => i.r5 !== false).length,
    shortest: lens.length ? lens[0] : 0,
    median: lens.length ? lens[Math.floor(lens.length / 2)] : 0,
    words: lens.reduce((n, w) => n + w, 0)
  };
});
const measured = {
  total: items.length,
  audio: items.filter(i => i.audio !== false).length,
  A1: levels.A1.audio, A2: levels.A2.audio, B1: levels.B1.audio, B2: levels.B2.audio,
  A1Words: levels.A1.words, A1Shortest: levels.A1.shortest,
  A2Words: levels.A2.words, A2Shortest: levels.A2.shortest,
  B1Words: levels.B1.words, B1Shortest: levels.B1.shortest,
  B2Words: levels.B2.words, B2Shortest: levels.B2.shortest
};
const FLOOR = fs.existsSync(FLOOR_FILE)
  ? JSON.parse(fs.readFileSync(FLOOR_FILE, 'utf8'))
  : Object.assign({}, measured);

console.log('\nListening ladder — ' + items.length + ' items, ' + measured.audio + ' with audio');
LEVELS.forEach(lv => {
  const mine = items.filter(i => i.level === lv);
  const len = levels[lv];
  console.log('  ' + lv + '  ' + mine.length + ' items · ' + len.audio + ' audio · ' +
    len.shortest + '-' + Math.max.apply(null, mine.filter(i => i.audio !== false).map(i => words(i.script))) +
    'w (median ' + len.median + ') · targets ' + [...new Set(mine.map(i => i.target))].join(',') + ' · kinds ' +
    [...new Set(mine.map(i => i.kind))].join(' / '));
});

let fail = 0;
function gate(name, now, floor) {
  const ok = now >= floor;
  if (!ok) fail += 1;
  console.log('  ' + (ok ? '✓' : '✗') + ' ' + name + ': ' + now + ' (floor ' + floor + ')');
}
console.log('\nladder gate  (floor = last accepted run · a ratchet, never lowered)');
LEVELS.forEach(lv => {
  gate(lv + ' audio items', levels[lv].audio, FLOOR[lv]);
  gate(lv + ' shortest audio script (words)', levels[lv].shortest, FLOOR[lv + 'Shortest'] || 0);
  gate(lv + ' audio script words', levels[lv].words, FLOOR[lv + 'Words'] || 0);
});

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
  /* a failing run must not lower the floor: the ratchet is the whole point of the file */
  if (fail) {
    console.log('\n  refused: ' + fail + ' gate' + (fail === 1 ? '' : 's') + ' failed — the floor is not lowered');
    process.exit(1);
  }
  const raised = {};
  Object.keys(FLOOR).forEach(k => { raised[k] = Math.max(FLOOR[k], measured[k] || 0); });
  Object.keys(measured).forEach(k => {
    if (/Shortest$|Words$/.test(k)) raised[k] = Math.max(FLOOR[k] || 0, measured[k]);
  });
  fs.writeFileSync(FLOOR_FILE, JSON.stringify(raised, null, 2) + '\n');
  console.log('\n  wrote ' + path.relative(root, FLOOR_FILE) + ' ' + JSON.stringify(raised));
}
process.exit(fail ? 1 : 0);

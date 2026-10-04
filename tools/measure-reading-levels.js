#!/usr/bin/env node
/* Deutschweg — the graded-reader measure, all four levels.
 *
 * §13.3 promises extensive reading the learner can do without a dictionary:
 * 98% of the words known. That promise was measured for B2 only
 * (tools/measure-b2-reading.js); this tool applies the same rule to the whole
 * library — the ten A1 texts, the thirty A2 texts, the sixty B1 texts and the
 * twenty-six B2 texts — and gates each level against a floor that is the
 * measured value of the last accepted run. The floor may only rise.
 *
 * "Known" is defined once, in tools/known.js: the lessons of every level up to
 * the one being measured, their declared material, the 100 chunks, and the
 * library of the levels below. A text is never evidence for itself — otherwise
 * the measure would prove only that a text agrees with itself.
 *
 *   node tools/measure-reading-levels.js
 *   node tools/measure-reading-levels.js --write-floor
 */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const FLOOR_FILE = path.join(__dirname, 'reading-levels-floor.json');
const WRITE = process.argv.includes('--write-floor');
const TARGET = 980;                     /* §13.3: 98%, in permille */
const LEVELS = ['A1', 'A2', 'B1', 'B2'];

const K = require('./known');

const win = {};
['web/data/inventory.js', 'web/data/chunks.js', 'web/data/syllabus.js', 'web/data/a0-u1-l1.js',
  'web/data/catalog.js', 'web/data/library.js', 'web/data/comprehension.js']
  .forEach(f => new Function('window', fs.readFileSync(path.join(root, f), 'utf8'))(win));

const FLOOR = fs.existsSync(FLOOR_FILE) ? JSON.parse(fs.readFileSync(FLOOR_FILE, 'utf8')) : {};

const texts = K.libraryTexts(win.DW_LIBRARY);
console.log('graded readers — ' + texts.length + ' texts · the §13.3 rule: 98% of the words known');

const measured = {};
let fail = 0;
const worst = {};

LEVELS.forEach(lv => {
  const set = K.knownWords(win, { upto: lv });
  const rows = texts.filter(t => t.level === lv).map(t => {
    const c = K.coverage(set, t.body);
    return { id: t.id, title: t.title, tokens: c.tokens, unknown: c.unknown, ratio: c.ratio, q: t.questions };
  }).sort((a, b) => a.ratio - b.ratio || a.id.localeCompare(b.id));
  const tokens = rows.reduce((n, r) => n + r.tokens, 0);
  const low = rows.length ? Math.floor(rows[0].ratio * 1000) : 1000;
  const under = rows.filter(r => r.ratio * 1000 < TARGET);
  measured[lv] = { texts: rows.length, tokens: tokens, lowestPermille: low, under: under.length };
  worst[lv] = rows.slice(0, 5);
  console.log('\n' + lv + ' — ' + rows.length + ' texts · ' + tokens + ' words · lowest ' +
    (Math.round(rows[0].ratio * 1000) / 10) + '% · under ' + TARGET / 10 + '%: ' + under.length);
  worst[lv].forEach(r => console.log('  ' + r.id.padEnd(9) + (Math.round(r.ratio * 1000) / 10).toFixed(1).padStart(6) + '%  ' +
    'unknown ' + String(r.unknown.length).padStart(3) + ' / ' + String(r.tokens).padStart(4) +
    (r.unknown.length ? '  [' + r.unknown.slice(0, 10).join(' ') + ']' : '')));
});

console.log('\nthe 98% rule (§13.3) — texts below 98%: ' + LEVELS.reduce((n, lv) => n + measured[lv].under, 0));

function gate(name, now, floor) {
  const ok = now >= floor;
  if (!ok) fail += 1;
  console.log('  ' + (ok ? '✓' : '✗') + ' ' + name + ': ' + now + ' (floor ' + floor + ')');
}
console.log('\nreading-levels gate  (floor = last accepted run · a ratchet, never lowered)');
LEVELS.forEach(lv => {
  const f = FLOOR[lv] || { texts: 0, lowestPermille: 0 };
  gate(lv + ' texts', measured[lv].texts, f.texts);
  gate(lv + ' lowest coverage (‰)', measured[lv].lowestPermille, f.lowestPermille);
  const ok = measured[lv].lowestPermille >= TARGET;
  console.log('  ' + (ok ? '✓' : '✗') + ' the 98% rule on ' + lv + ': lowest ' +
    (measured[lv].lowestPermille / 10) + '% (target 98%)');
  if (!ok) fail += 1;
});

const noQ = texts.filter(t => t.questions < 2);
if (noQ.length) { fail += 1; console.log('  ✗ every text carries two questions — bad: ' + noQ.map(t => t.id).join(', ')); }
else console.log('  ✓ every text carries two questions');

if (WRITE) {
  const raised = {};
  LEVELS.forEach(lv => {
    const f = FLOOR[lv] || { texts: 0, lowestPermille: 0 };
    raised[lv] = {
      texts: Math.max(f.texts, measured[lv].texts),
      lowestPermille: Math.max(f.lowestPermille, measured[lv].lowestPermille)
    };
  });
  fs.writeFileSync(FLOOR_FILE, JSON.stringify(raised, null, 2) + '\n');
  console.log('\n  wrote ' + path.relative(root, FLOOR_FILE) + ' ' + JSON.stringify(raised));
}
process.exit(fail ? 1 : 0);

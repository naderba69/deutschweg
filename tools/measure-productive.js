#!/usr/bin/env node
/* Deutschweg — the productive column, measured.
 *
 * PROMPT §? R6 targets productive words **cumulatively**: A1 300 · A2 700 ·
 * B1 1,400 · B2 2,600, plus **100 chunks per level**. The map declares a
 * productive count per lesson (3,157 over all levels), and R6 counts cards whose
 * productive direction reached Leitner box ≥ 3.
 *
 * A target that no card can ever reach is a defect, not a target — that is how
 * the mock-exam gate was found. This tool measures the card pool the authored
 * content can actually introduce: the words of every compiled Wortschatz step
 * (the path web/app.js opens when the step is answered) and the material words of
 * a workshop. B2's productive declaration of 1,200 cannot be filled by its 800
 * authored words alone; per route C (DECISIONS-PENDING item 20) the verified
 * material column is the reserve, and the tool prints both parts rather than
 * hiding the difference.
 *
 *   node tools/measure-productive.js
 *   node tools/measure-productive.js --write-floor
 */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const FLOOR_FILE = path.join(__dirname, 'productive-floor.json');
const WRITE = process.argv.includes('--write-floor');
const LEVELS = ['A0', 'A1', 'A2', 'B1', 'B2'];

/* R6 productive targets, cumulative (PROMPT §?): the last level listed decides. */
const TARGET = { A1: 300, A2: 700, B1: 1400, B2: 2600 };
const CHUNK_TARGET = 100;

const win = {};
['web/data/inventory.js', 'web/data/chunks.js', 'web/data/syllabus.js', 'web/data/catalog.js']
  .forEach(f => new Function('window', fs.readFileSync(path.join(root, f), 'utf8'))(win));
const S = win.DW_SYLLABUS;
const L = win.DW_LESSONS;
const CHUNKS = win.DW_CHUNKS || {};

const FLOOR = fs.existsSync(FLOOR_FILE) ? JSON.parse(fs.readFileSync(FLOOR_FILE, 'utf8')) : {};

const declared = {}, cards = {}, material = {}, chunks = {}, lessons = {};
S.lessons.forEach(row => {
  declared[row.level] = declared[row.level] || { receptive: 0, productive: 0 };
  declared[row.level].receptive += (row.words && row.words.receptive) || 0;
  declared[row.level].productive += (row.words && row.words.productive) || 0;
});
Object.keys(L).forEach(id => {
  const lesson = L[id];
  const lv = lesson.level;
  lessons[lv] = (lessons[lv] || 0) + 1;
  cards[lv] = cards[lv] || new Set();
  (lesson.schritte || []).forEach(st => {
    (st.wortschatz || []).forEach(x => { if (x && x.de && x.ar) cards[lv].add(x.de); });
  });
  material[lv] = (material[lv] || new Set());
  (lesson.material || []).forEach(w => material[lv].add(w));
});
LEVELS.forEach(lv => {
  cards[lv] = cards[lv] || new Set();
  material[lv] = material[lv] || new Set();
  chunks[lv] = (CHUNKS[lv] || []).length;
});

const cum = (lv, field) => LEVELS.slice(0, LEVELS.indexOf(lv) + 1)
  .reduce((n, l) => n + (field === 'cards' ? cards[l].size : (field === 'declared' ? declared[l].productive : material[l].size)), 0);

console.log('productive column — the card pool every level can actually introduce');
console.log('level  lessons  cardWords  material  declaredProd  cumulativeCards  target  chunks');
LEVELS.forEach(lv => {
  const c = cum(lv, 'cards'), t = TARGET[lv];
  console.log('  ' + lv.padEnd(5) + String(lessons[lv] || 0).padStart(6) + String(cards[lv].size).padStart(10) +
    String(material[lv].size).padStart(10) + String(declared[lv].productive).padStart(14) +
    String(c).padStart(16) + String(t || '').padStart(8) + String(chunks[lv]).padStart(8) +
    (t ? (c >= t ? '  ✓' : '  ✗') : ''));
});

let fail = 0;
function gate(name, now, floor) {
  const ok = now >= floor;
  if (!ok) fail += 1;
  console.log('  ' + (ok ? '✓' : '✗') + ' ' + name + ': ' + now + ' (floor ' + floor + ')');
}
console.log('\nproductive gate  (floor = last accepted run · a ratchet, never lowered)');
LEVELS.forEach(lv => {
  const f = (FLOOR[lv] || {});
  const own = cards[lv].size + (lv === 'B2' ? material[lv].size : 0);
  const note = lv === 'B2' ? ' (authored ' + cards[lv].size + ' + material ' + material[lv].size + ')' : '';
  if (own < declared[lv].productive) {
    fail += 1;
    console.log('  ✗ ' + lv + ' can introduce ' + own + ' words' + note + ', but declares ' + declared[lv].productive + ' productive');
  } else {
    console.log('  ✓ ' + lv + ' can introduce ' + own + ' words' + note + ' for a declaration of ' + declared[lv].productive);
  }
  if (TARGET[lv]) gate(lv + ' cumulative cards (R6 target)', cum(lv, 'cards'), Math.min(TARGET[lv], f.cumulative || 0));
  gate(lv + ' chunks', chunks[lv], Math.min(CHUNK_TARGET, f.chunks || 0));
  const bad = (CHUNKS[lv] || []).filter(c => !c || !c.de || !c.ar);
  if (bad.length) { fail += 1; console.log('  ✗ ' + lv + ' has a chunk without German or Arabic'); }
});

if (WRITE) {
  const raised = {};
  LEVELS.forEach(lv => {
    const f = FLOOR[lv] || {};
    raised[lv] = {
      cards: Math.max(f.cards || 0, cards[lv].size),
      cumulative: Math.max(f.cumulative || 0, cum(lv, 'cards')),
      chunks: Math.max(f.chunks || 0, chunks[lv])
    };
  });
  fs.writeFileSync(FLOOR_FILE, JSON.stringify(raised, null, 2) + '\n');
  console.log('\n  wrote ' + path.relative(root, FLOOR_FILE) + ' ' + JSON.stringify(raised));
}
process.exit(fail ? 1 : 0);

#!/usr/bin/env node
/* Deutschweg — the B2 mock-paper measure.
 *
 * §12.1 fixes the shape of the two receptive modules of the exam:
 *
 *   Lesen  65 min · 5 parts · 30 items  (9 · 6 · 6 · 6 · 3)
 *   Hören  40 min · 4 parts · 30 items  (10 · 6 · 6 · 8)
 *
 * and §12.5 forbids claiming an official paper. This tool counts the paper that
 * exists — parts, items, minutes, and **the German words the learner actually
 * has to read or hear** — prints the table, and gates against
 * `tools/b2-exam-floor.json`, the measured value of the last accepted run,
 * which may only rise (`--write-floor`).
 *
 *   node tools/measure-b2-exam.js
 *   node tools/measure-b2-exam.js --write-floor
 */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const FLOOR_FILE = path.join(__dirname, 'b2-exam-floor.json');
const WRITE = process.argv.includes('--write-floor');

const win = {};
['web/data/exam-b2.js', 'web/data/inventory.js']
  .forEach(f => new Function('window', fs.readFileSync(path.join(root, f), 'utf8'))(win));
const BANK = win.DW_EXAM_BANK && win.DW_EXAM_BANK.B2;
const MAP = (win.DW_EXAM && win.DW_EXAM.B2) || null;

const words = s => String(s || '').trim().split(/\s+/).filter(Boolean).length;

function materialWords(material) {
  if (!material) return 0;
  let n = 0;
  if (material.title) n += words(material.title);
  if (material.prompt) n += words(material.prompt);
  if (material.body) n += words(material.body);
  (material.texts || []).forEach(t => { n += words(t.text); });
  (material.sections || []).forEach(s => { n += words(s.n) + words(s.text); });
  (material.scripts || []).forEach(s => { n += words(s.text); });
  (material.options || []).forEach(o => { n += words(o); });
  return n;
}

function moduleRows(id) {
  const m = BANK && BANK[id];
  if (!m) return { id: id, parts: 0, items: 0, minutes: 0, words: 0, perPart: [], rows: [] };
  const rows = m.parts.map(p => ({ n: p.n, kind: p.kind, items: p.items.length, minutes: p.minutes, words: materialWords(p.material) }));
  return {
    id: id, parts: m.parts.length, items: rows.reduce((s, r) => s + r.items, 0),
    minutes: m.minutes, words: rows.reduce((s, r) => s + r.words, 0),
    perPart: rows.map(r => r.items), rows: rows
  };
}

const lesen = moduleRows('lesen');
const hoeren = moduleRows('hoeren');

console.log('\nB2 mock paper — original texts in the exam\'s own shape (never claimed as a Goethe paper)');
['lesen', 'hoeren'].forEach(id => {
  const m = id === 'lesen' ? lesen : hoeren;
  console.log('\n  ' + id.toUpperCase() + '  ' + m.parts + ' Teile · ' + m.items + ' items · ' + m.minutes +
    ' min · ' + m.words + ' words of material');
  m.rows.forEach(r => console.log('    Teil ' + r.n + '  ' + String(r.items).padStart(2) + ' items · ' +
    String(r.minutes).padStart(2) + ' min · ' + String(r.words).padStart(4) + ' w · ' + r.kind));
});
if (!hoeren.items) console.log('\n  HÖREN is not written yet — the level\'s paper is half a paper.');

const allItems = []
  .concat(((BANK && BANK.lesen && BANK.lesen.parts) || []).reduce((a, p) => a.concat(p.items), []))
  .concat(((BANK && BANK.hoeren && BANK.hoeren.parts) || []).reduce((a, p) => a.concat(p.items), []));
const measured = {
  lesenParts: lesen.parts, lesenItems: lesen.items, lesenMinutes: lesen.minutes, lesenWords: lesen.words,
  hoerenParts: hoeren.parts, hoerenItems: hoeren.items, hoerenMinutes: hoeren.minutes, hoerenWords: hoeren.words,
  totalItems: allItems.length,
  optionsMin: allItems.length ? Math.min.apply(null, allItems.map(i => (i.options || []).length)) : 0
};

const FLOOR = fs.existsSync(FLOOR_FILE)
  ? JSON.parse(fs.readFileSync(FLOOR_FILE, 'utf8'))
  : Object.assign({}, measured);

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

console.log('\npaper gate  (floor = last accepted run · a ratchet, never lowered)');
gate('Lesen parts', measured.lesenParts, FLOOR.lesenParts);
gate('Lesen items', measured.lesenItems, FLOOR.lesenItems);
gate('Lesen minutes', measured.lesenMinutes, FLOOR.lesenMinutes);
gate('Lesen words of material', measured.lesenWords, FLOOR.lesenWords);
gate('Hören parts', measured.hoerenParts, FLOOR.hoerenParts);
gate('Hören items', measured.hoerenItems, FLOOR.hoerenItems);
gate('Hören minutes', measured.hoerenMinutes, FLOOR.hoerenMinutes);
gate('Hören words of material', measured.hoerenWords, FLOOR.hoerenWords);
gate('items with a key', measured.totalItems, FLOOR.totalItems);
gate('options per item (the smallest)', measured.optionsMin, FLOOR.optionsMin);

const AR = /[\u0600-\u06FF]/;
const ids = allItems.map(i => i.id);
must('item ids are unique', ids.length === new Set(ids).size);
must('every item\'s key is one of its own options',
  allItems.every(i => i.prompt && (i.options || []).includes(i.key)),
  allItems.filter(i => !(i.options || []).includes(i.key)).map(i => i.id).join(', '));
must('no option is repeated inside one item',
  allItems.every(i => new Set(i.options).size === i.options.length));
must('every prompt is German', allItems.every(i => i.prompt && !AR.test(i.prompt)));
must('the paper is declared unofficial and says so',
  !!BANK && BANK.official === false && !!BANK.note && BANK.lesen.official === false);
must('the official Lesen split (9 · 6 · 6 · 6 · 3)',
  JSON.stringify(measured.lesenItems ? lesen.perPart : []) === JSON.stringify([9, 6, 6, 6, 3]) || measured.lesenItems === 0,
  JSON.stringify(lesen.perPart));
must('the official Hören split (10 · 6 · 6 · 8)',
  JSON.stringify(measured.hoerenItems ? hoeren.perPart : []) === JSON.stringify([10, 6, 6, 8]) || measured.hoerenItems === 0,
  JSON.stringify(hoeren.perPart));
must('the map names the paper (DW_EXAM.B2): ' + (MAP ? MAP.lesenItems + ' + ' + MAP.hoerenItems + ' items' : 'no map entry'),
  !!MAP && MAP.lesenParts === lesen.parts && MAP.lesenItems === lesen.items &&
  MAP.hoerenParts === hoeren.parts && MAP.hoerenItems === hoeren.items, JSON.stringify(MAP));

if (WRITE) {
  /* a failing run must not lower the floor: the ratchet is the whole point of the file */
  if (fail) {
    console.log('\n  refused: ' + fail + ' gate' + (fail === 1 ? '' : 's') + ' failed — the floor is not lowered');
    process.exit(1);
  }
  const raised = {};
  Object.keys(FLOOR).forEach(k => { raised[k] = Math.max(FLOOR[k], measured[k] || 0); });
  fs.writeFileSync(FLOOR_FILE, JSON.stringify(raised, null, 2) + '\n');
  console.log('\n  wrote ' + path.relative(root, FLOOR_FILE) + ' ' + JSON.stringify(raised));
}
process.exit(fail ? 1 : 0);

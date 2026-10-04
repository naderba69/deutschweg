#!/usr/bin/env node
/* Deutschweg — the B2 vocabulary measure.
 *
 * B2 has no Goethe list of its own: its 1,800 declared receptive words are the
 * level's own material, and route C (DECISIONS-PENDING item 20) splits every
 * workshop's 90 into **40 authored list items + 50 material words** the
 * workshop's German text must actually contain.
 *
 * The 40 is not a preference, it is the ratified template's ceiling:
 * §8.1's band is 24–36 steps, a compiled B2 workshop spends 26 of them on the
 * non-Wortschatz stages, and §8.3 allows 2–4 words per Wortschatz step —
 * 10 × 4 = 40 words, times twenty workshops = 800. The authored column is at
 * its top; this tool exists so that claim is measured, not asserted.
 *
 *   node tools/measure-b2-vocab.js
 *   node tools/measure-b2-vocab.js --write-floor
 *
 * The floor file records the last accepted run and may only rise.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { fold, hasWord, collectGerman } = require('./material');

const root = path.resolve(__dirname, '..');
const FLOOR_FILE = path.join(__dirname, 'b2-vocab-floor.json');
const WRITE = process.argv.includes('--write-floor');

const CORE = w => String(w).replace(/^(der|die|das)\s+/i, '').split(/\s+/).pop();
const AR = /[\u0600-\u06FF]/;

const VOCAB = require('./vocab-b2.js');
const SPECS = require('./specs-b2.js').reduce((m, s) => { m[s.id] = s; return m; }, {});
const win = {};
new Function('window', fs.readFileSync(path.join(root, 'web/data/catalog.js'), 'utf8'))(win);
const CAT = win.DW_LESSONS || {};

/* Per-workshop rows, in workshop order. */
const rows = Object.keys(VOCAB).sort().map(id => {
  const row = VOCAB[id];
  const items = row.items || [];
  const material = row.material || [];
  const compiled = CAT[id];
  const german = (compiled ? collectGerman(compiled) : collectGerman(SPECS[id] || {})).map(fold);
  const source = compiled ? 'catalog' : 'spec';
  const cores = {};
  items.forEach(it => { cores[fold(CORE(it[0]))] = true; });
  const carried = material.filter(w => hasWord(CORE(w), german));
  const dup = material.filter(w => cores[fold(CORE(w))]);
  return { id, spec: SPECS[id], items, material, carried, dup, source,
           tricks: (row.tricks || []).length };
});

const syl = {};
['inventory.js', 'chunks.js', 'syllabus.js'].forEach(name => {
  new Function('window', fs.readFileSync(path.join(root, 'web/data', name), 'utf8'))(syl);
});
const declaredPerRow = {};
(syl.DW_SYLLABUS.lessons || []).forEach(l => {
  if (l.words && l.words.receptive) declaredPerRow[l.id] = l.words.receptive;
});

console.log('\nB2 vocabulary measure — ' + rows.length + ' workshops · route C (40 authored + 50 material = 90 declared)');
rows.forEach(r => {
  const okMat = r.carried.length === r.material.length && r.dup.length === 0;
  console.log('  ' + r.id + ' ' + String((r.spec && r.spec.de) || '').padEnd(18) +
    String(r.items.length).padStart(3) + ' authored · ' + String(r.carried.length).padStart(2) + '/' +
    String(r.material.length).padStart(2) + ' material ' + (okMat ? '✓' : '✗') + ' · ' +
    r.tricks + ' tricks · declared ' + (declaredPerRow[r.id] || '?') +
    (r.source === 'spec' ? ' (checked against the spec: no compiled body)' : ''));
});

const authored = rows.reduce((s, r) => s + r.items.length, 0);
const material = rows.reduce((s, r) => s + r.carried.length, 0);
const declared = rows.reduce((s, r) => s + (declaredPerRow[r.id] || 0), 0);
const tricks = rows.reduce((s, r) => s + r.tricks, 0);
const perAuthored = { min: Math.min(...rows.map(r => r.items.length)), max: Math.max(...rows.map(r => r.items.length)) };
const perMaterial = { min: Math.min(...rows.map(r => r.material.length)), max: Math.max(...rows.map(r => r.material.length)) };
const seen = {}, shared = [];
rows.forEach(r => r.material.forEach(w => {
  const k = fold(CORE(w));
  if (seen[k] && seen[k] !== r.id) { if (shared.indexOf(k) < 0) shared.push(k); }
  seen[k] = r.id;
}));

const measuredTotal = authored + material;
console.log('\n  level: authored ' + authored + '/' + declared + ' (' + Math.round(authored / declared * 100) + '%)' +
  ' · + verified material ' + material + ' → measured ' + measuredTotal + '/' + declared + ' (' +
  Math.round(measuredTotal / declared * 100) + '%) · ' + rows.length + ' workshops · ' + tricks + ' tricks');
console.log('  the authored column is at the template ceiling: 36 steps − 26 non-Wortschatz = 10 Wortschatz × 4 words = 40/workshop');
console.log('  material words serving more than one workshop (per-workshop allowance, counted per workshop): ' + shared.length +
  ' → distinct material words: ' + Object.keys(seen).length);

const measured = { workshops: rows.length, authoredTotal: authored, materialTotal: material,
  measuredTotal: measuredTotal, authoredPerWorkshop: perAuthored.min,
  materialPerWorkshop: perMaterial.min, tricks: tricks, declared: declared };
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
console.log('\nB2 vocabulary gate  (floor = last accepted run · a ratchet, never lowered)');
gate('workshops', measured.workshops, FLOOR.workshops);
gate('authored items per workshop', measured.authoredPerWorkshop, FLOOR.authoredPerWorkshop);
gate('authored items (the level)', measured.authoredTotal, FLOOR.authoredTotal);
gate('material words per workshop', measured.materialPerWorkshop, FLOOR.materialPerWorkshop);
gate('material words verified (the level)', measured.materialTotal, FLOOR.materialTotal);
gate('the level measured (authored + verified material)', measured.measuredTotal, FLOOR.measuredTotal);
gate('tricks', measured.tricks, FLOOR.tricks);
gate('declared receptive words', measured.declared, FLOOR.declared);
must('every workshop is exactly 40 authored + 50 material = its declared 90',
  rows.every(r => r.items.length === 40 && r.material.length === 50 && declaredPerRow[r.id] === 90),
  rows.filter(r => !(r.items.length === 40 && r.material.length === 50 && declaredPerRow[r.id] === 90)).map(r => r.id).join(', '));
must('every material word is carried by the German the learner reads',
  rows.every(r => r.carried.length === r.material.length),
  rows.filter(r => r.carried.length !== r.material.length).map(r => r.id).join(', '));
must('no material word duplicates an authored headword of its own workshop',
  rows.every(r => r.dup.length === 0),
  rows.filter(r => r.dup.length).map(r => r.id + ':' + r.dup.join('/')).join(' '));
must('no authored headword repeats inside a workshop',
  rows.every(r => { const s = {}; return r.items.every(it => { const k = fold(CORE(it[0])); if (s[k]) return false; s[k] = 1; return true; }); }),
  rows.filter(r => { const s = {}; return !r.items.every(it => { const k = fold(CORE(it[0])); if (s[k]) return false; s[k] = 1; return true; }); }).map(r => r.id).join(', '));
must('exactly 3 tricks per workshop, each with a German anchor',
  rows.every(r => r.tricks === 3) &&
  rows.every(r => (VOCAB[r.id].tricks || []).every(t => t.trick && t.wie && t.warum && t.anchor && !AR.test(t.anchor))),
  rows.filter(r => r.tricks !== 3).map(r => r.id).join(', '));
must('the authored column never exceeds the template ceiling (800)',
  authored <= 800, 'authored ' + authored + ' — the band does not carry more');

if (WRITE) {
  const raised = {};
  Object.keys(FLOOR).forEach(k => { raised[k] = Math.max(FLOOR[k], measured[k] || 0); });
  fs.writeFileSync(FLOOR_FILE, JSON.stringify(raised, null, 2) + '\n');
  console.log('\n  wrote ' + path.relative(root, FLOOR_FILE) + ' ' + JSON.stringify(raised));
}
process.exit(fail ? 1 : 0);

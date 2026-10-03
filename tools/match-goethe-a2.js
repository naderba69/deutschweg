#!/usr/bin/env node
/* Deutschweg — Goethe A2 word-list matcher (PRODUCTION: after B2, before the A2 claim).
 *
 * What it answers: how much of the official Goethe-Zertifikat A2 Wortliste does
 * the app's A2 band actually carry, and which entries does it miss?
 *
 * Exactly the A1 matcher's design (tools/match-goethe-a1.js), one level up, so
 * the two reports can be read side by side.
 *
 * The official list is a copyrighted Goethe-Institut publication and is NOT
 * committed to this repository (decision: DECISIONS-PENDING.md). This tool reads
 * a plain one-headword-per-line transcription from outside the repo:
 *
 *     GOETHE_A2_LIST=/path/to/a2_headwords.txt \
 *     GOETHE_A2_GROUPS=/path/to/a2_groups.txt \
 *     node tools/match-goethe-a2.js [--write-gap]
 *
 * Defaults point at ../goethe/ next to the repository. The transcription is
 * typed from the official PDF (Goethe-Zertifikat A2 Wortliste, © 2016
 * Goethe-Institut), which the PDF's own text layer renders as a two-column
 * table; headwords merged into one line there are split again by hand, and the
 * caveat that this is a re-typed transcription (not the PDF itself) is printed
 * with every report.
 *
 * Two measures, both printed so neither can hide the other:
 *   headword — the entry is one of the authored words of the A2 lexical layer
 *   material — the entry appears anywhere in A2 lessons or A2 reading texts
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const LIST = process.env.GOETHE_A2_LIST || path.resolve(root, '..', 'goethe', 'a2_headwords.txt');
const GROUPS = process.env.GOETHE_A2_GROUPS || path.resolve(root, '..', 'goethe', 'a2_groups.txt');
const WRITE_GAP = process.argv.includes('--write-gap');

/* Floors are the measured values of the last accepted run. They may only rise. */
/* Two numbers, two jobs:  (four measures: alphabetical headword, alphabetical +
   groups headword, alphabetical + groups met in material, groups met)
   FLOOR — the measured values of the last accepted run; a run that falls under
           one of them is a regression and fails.
   GOAL  — the production target, printed next to it. It does not fail the run;
           the gap is produced away workshop by workshop, like A1's was, and the
           floor rises with it.
   First measured run, 2026-10-03 (cumulative A0+A1+A2 band): headword 61%,
   material 75%, groups 65% — against the re-typed transcription. */
const FLOOR = { headword: 0.610, allHeadword: 0.585, material: 0.796, groups: 0.799 };
/* Rounded down from the measured values of the last accepted run:
   0.6105 / 0.5857 / 0.7262 / 0.6460 on 2026-10-03 (first run), raised to the
   second run 0.7960 / 0.7993 after the four new A2 reading texts. Floors may
   only rise. */
const GOAL = { headword: 0.80, material: 1.0, groups: 1.0 };

const win = {};
new Function('window', fs.readFileSync(path.join(root, 'web/data/a0-u1-l1.js'), 'utf8'))(win);
new Function('window', fs.readFileSync(path.join(root, 'web/data/catalog.js'), 'utf8'))(win);
new Function('window', fs.readFileSync(path.join(root, 'web/data/library.js'), 'utf8'))(win);
new Function('window', fs.readFileSync(path.join(root, 'web/data/comprehension.js'), 'utf8'))(win);

const FOLD = s => String(s).normalize('NFC').toLowerCase().replace(/ß/g, 'ss').replace(/-/g, '');
const STRIP = s => s.replace(/^(der|die|das)\s+/, '').replace(/^sich\s+/, '')
  .replace(/\(.*?\)/g, ' ').replace(/\s+/g, ' ').trim();
const stem = w => { const f = FOLD(w); return f.replace(/(ern|eln|en|em|er|es|et|te|st|e|n|s|t)$/, '') || f; };
const STOP = new Set(['und', 'oder', 'aber', 'der', 'die', 'das', 'ein', 'eine', 'einen', 'einem', 'einer',
  'ist', 'sind', 'bin', 'bist', 'seid', 'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'man', 'zu', 'in',
  'im', 'am', 'an', 'auf', 'mit', 'für', 'von', 'bei', 'nach', 'aus', 'als', 'auch', 'nicht', 'kein',
  'keine', 'keinen', 'sehr', 'so', 'nur', 'noch', 'schon', 'dann', 'doch', 'mal', 'bitte', 'ja', 'nein',
  'wie', 'was', 'wer', 'wo', 'wann', 'warum', 'dass', 'wenn', 'ob', 'zum', 'zur']);

const textParts = [];
function tokensOf(value, out) {
  if (value == null) return out;
  if (typeof value === 'string') {
    textParts.push(FOLD(value));
    FOLD(value).split(/[^\p{L}]+/u).forEach(w => { if (w.length > 1) out.add(w); });
    return out;
  }
  if (Array.isArray(value)) { value.forEach(v => tokensOf(v, out)); return out; }
  if (typeof value === 'object') { Object.values(value).forEach(v => tokensOf(v, out)); return out; }
  return out;
}

const lessons = Object.values(win.DW_LESSONS || {});
const a2Band = lessons.filter(l => l.level === 'A2');
/* The official A2 Wortliste carries the A1 vocabulary inside it ("ab, aber,
   als, auch"), so a learner who has finished A1 has already met part of it.
   Two cumulative measures are therefore printed: what the A2 band alone
   carries, and what A0+A1+A2 carry together. The gate reads the cumulative
   one — that is the learner's real position at the end of A2. */
const LEVELS = { a2: ['A2'], cumulative: ['A0', 'A1', 'A2'] };
if (!a2Band.length) { console.error('no A2 lessons found — did the catalog load?'); process.exit(1); }

function setsFor(levels) {
  const band = lessons.filter(l => levels.includes(l.level));
  const heads = new Set(), headStems = new Set();
  band.forEach(l => (l.wortschatz || []).forEach(it => {
    const h = STRIP(FOLD(it.de));
    heads.add(h); headStems.add(stem(h));
    String(it.de).split(/\s+/).forEach(w => { if (w.length > 2) { heads.add(FOLD(w)); headStems.add(stem(w)); } });
  }));
  const material = new Set(), materialStems = new Set();
  band.forEach(l => {
    tokensOf(l.wortschatz || [], material);
    tokensOf(l.schritte || [], material);
    tokensOf(l.title || {}, material);
  });
  /* The reading texts of the band's own levels are material the learner meets,
     exactly as in the A1 run — and in the cumulative band, A1's texts count too. */
  const lib = win.DW_LIBRARY || {};
  levels.forEach(lv => tokensOf(lib[lv] || [], material));
  material.forEach(w => materialStems.add(stem(w)));
  return { heads, headStems, material, materialStems };
}
const BAND = {
  a2: setsFor(LEVELS.a2),
  cumulative: setsFor(LEVELS.cumulative)
};
const materialText = textParts.join(' ');
if (!BAND.a2.material.size) { console.error('no material tokens — check the data files'); process.exit(1); }

function classify(entry, which) {
  const { heads, headStems, material, materialStems } = BAND[which];
  const phrase = STRIP(FOLD(entry));
  const words = phrase.split(/\s+/).filter(w => w.length > 2 && !STOP.has(w));
  const key = words.length ? words[words.length - 1] : phrase;
  const hit = (set, stemSet) => set.has(phrase) || set.has(key) || stemSet.has(stem(key));
  const parts = phrase.split(/\s+/);
  const content = parts.filter(w => w.length > 2);
  const inHead = hit(heads, headStems) ||
    (words.length > 1 && words.some(w => heads.has(w) || headStems.has(stem(w))));
  const met = material.has(phrase) || materialStems.has(stem(key)) ||
    (phrase.includes(' ') && materialText.includes(phrase)) ||
    (content.length > 0 && content.every(w => material.has(w) || materialStems.has(stem(w))));
  return { entry, inHead, met };
}

function readList(file, what) {
  if (!fs.existsSync(file)) {
    console.error('missing ' + what + ': ' + file);
    console.error('The official list is not in the repository (it is copyrighted).');
    console.error('Point GOETHE_A2_LIST / GOETHE_A2_GROUPS at a transcription, or see the header of this file.');
    process.exit(2);
  }
  return fs.readFileSync(file, 'utf8').split('\n')
    .map(s => s.replace(/^#.*$/, '').trim()).filter(Boolean);
}

function report(entries, label, which) {
  const rows = entries.map(e => classify(e, which));
  const head = rows.filter(r => r.inHead), met = rows.filter(r => r.met);
  console.log('\n' + label);
  console.log('  entries                          ' + rows.length);
  console.log('  authored headword                ' + head.length + '  (' + Math.round(head.length / rows.length * 100) + '%)');
  console.log('  met anywhere in A2 material      ' + met.length + '  (' + Math.round(met.length / rows.length * 100) + '%)');
  console.log('  not met at all                   ' + (rows.length - met.length) + '  (' + Math.round((rows.length - met.length) / rows.length * 100) + '%)');
  const missing = rows.filter(r => !r.met).map(r => r.entry);
  const byLetter = {};
  rows.forEach(r => {
    const c = STRIP(r.entry)[0].toUpperCase();
    byLetter[c] = byLetter[c] || [0, 0];
    byLetter[c][1]++;
    if (r.met) byLetter[c][0]++;
  });
  console.log('  per letter                       ' + Object.keys(byLetter).sort()
    .map(c => c + ' ' + byLetter[c][0] + '/' + byLetter[c][1]).join(' · '));
  return { rows, missing };
}

const A2_ENTRIES = readList(LIST, 'A2 list transcription');
const A2_GROUPS = readList(GROUPS, 'A2 word-group transcription');

const main = report(A2_ENTRIES, 'Goethe A2 alphabetical list vs the Deutschweg A2 band alone', 'a2');
const cum = report(A2_ENTRIES, 'Goethe A2 alphabetical list vs the whole A0+A1+A2 band (cumulative)', 'cumulative');
const groups = report(A2_GROUPS, 'Goethe A2 word groups (days, months, numbers, measures) vs the cumulative band', 'cumulative');

const headRatio = cum.rows.filter(r => r.inHead).length / cum.rows.length;
const metRatio = (cum.rows.filter(r => r.met).length + groups.rows.filter(r => r.met).length) /
  (cum.rows.length + groups.rows.length);

if (WRITE_GAP) {
  const lines = cum.rows.concat(groups.rows).filter(r => !r.met)
    .map(r => (r.inHead ? 'headword ' : '         ') + r.entry);
  const head = '# Recorded gap: Goethe A2 entries the app does not carry yet.\n' +
    '# Generated by tools/match-goethe-a2.js --write-gap on ' + new Date().toISOString().slice(0, 10) + '.\n' +
    '# Two measures: authored headword (in a word list) and material (met in an A2 lesson or A2 reading text).\n' +
    '# An entry marked "headword" is in a word list but never met in a sentence — that is a defect to fix.\n' +
    '# Counted against the re-typed transcription of the official PDF, not against the PDF itself.\n';
  fs.writeFileSync(path.join(root, 'tools/goethe-a2-gap.txt'), head + lines.join('\n') + '\n');
  console.log('\nwrote tools/goethe-a2-gap.txt (' + lines.length + ' entries)');
}

let failed = 0;
const pct = v => Math.round(v * 100) + '%';
const headAll = (cum.rows.filter(r => r.inHead).length + groups.rows.filter(r => r.inHead).length) /
  (cum.rows.length + groups.rows.length);
const groupRatio = groups.rows.filter(r => r.met).length / groups.rows.length;
function gate(name, value, floor, goal) {
  const ok = value >= floor;
  const goalNote = value >= goal ? 'goal ' + pct(goal) + ' met'
    : 'goal ' + pct(goal) + ' — gap ' + pct(goal - value) + ' still to produce';
  console.log('  ' + (ok ? '✓' : '✗') + ' ' + name + ': ' + pct(value) +
    ' (floor ' + pct(floor) + ', ' + goalNote + ')');
  if (!ok) failed++;
}
console.log('\ncoverage gate  (floor = last accepted run · goal = production target)');
if (process.env.SHOW_RAW) {
  console.log('  raw ' + JSON.stringify({ headRatio: +headRatio.toFixed(4), headAll: +headAll.toFixed(4),
    metRatio: +metRatio.toFixed(4), groupRatio: +groupRatio.toFixed(4) }));
}
gate('main list as headword', headRatio, FLOOR.headword, GOAL.headword);
gate('main list + groups as headword', headAll, FLOOR.allHeadword, GOAL.headword);
gate('main list + groups met in material', metRatio, FLOOR.material, GOAL.material);
gate('word groups met in material', groupRatio, FLOOR.groups, GOAL.groups);
process.exit(failed ? 1 : 0);

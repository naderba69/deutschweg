#!/usr/bin/env node
/* Deutschweg — Goethe A1 word-list matcher (PRODUCTION: «قبل إغلاق A1»).
 *
 * What it answers: how much of the official Goethe-Zertifikat A1 Start Deutsch 1
 * Wortliste does the app's A1 band actually carry, and which entries does it miss?
 *
 * The official list is a copyrighted Goethe-Institut publication and is NOT
 * committed to this repository (decision: DECISIONS-PENDING.md). This tool reads a
 * plain one-headword-per-line transcription from outside the repo:
 *
 *     GOETHE_A1_LIST=/path/to/a1_headwords.txt \
 *     GOETHE_A1_GROUPS=/path/to/a1_groups.txt \
 *     node tools/match-goethe-a1.js
 *
 * Defaults point at ../goethe/ next to the repository. To rebuild the
 * transcription from the official PDF: `pdftotext -layout A1_SD1_Wortliste.pdf -`
 * and keep the alphabetical list only. The counts printed here are measured
 * against that transcription, not against the PDF's own "circa 650" claim.
 *
 * Two measures, both printed so neither can hide the other:
 *   headword — the entry is one of the authored words of the A0/A1 lexical layer
 *   material — the entry appears anywhere in A0/A1 lessons or A1 reading texts
 *
 * Writes tools/goethe-a1-gap.txt (the recorded gap) when --write-gap is passed,
 * and exits non-zero when coverage falls under the floor kept in this file.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const LIST = process.env.GOETHE_A1_LIST || path.resolve(root, '..', 'goethe', 'a1_headwords.txt');
const GROUPS = process.env.GOETHE_A1_GROUPS || path.resolve(root, '..', 'goethe', 'a1_groups.txt');
const WRITE_GAP = process.argv.includes('--write-gap');

/* Floors are the measured values of the last accepted run. They may only rise. */
const FLOOR = { headword: 0.80, material: 1.0, groups: 1.0 };

const win = {};
new Function('window', fs.readFileSync(path.join(root, 'web/data/a0-u1-l1.js'), 'utf8'))(win);
new Function('window', fs.readFileSync(path.join(root, 'web/data/catalog.js'), 'utf8'))(win);
new Function('window', fs.readFileSync(path.join(root, 'web/data/library.js'), 'utf8'))(win);
new Function('window', fs.readFileSync(path.join(root, 'web/data/comprehension.js'), 'utf8'))(win);

/* Hyphens are folded away in one place so that E-Mail, S-Bahn and Café are
   one token on both sides of the comparison — the earlier split hid them. */
const FOLD = s => String(s).normalize('NFC').toLowerCase().replace(/ß/g, 'ss').replace(/-/g, '');
const STRIP = s => s.replace(/^(der|die|das)\s+/, '').replace(/^sich\s+/, '')
  .replace(/\(.*?\)/g, ' ').replace(/\s+/g, ' ').trim();
/* German inflection folding, deliberately blunt: a family match is a receptive
   match ("the learner meets the word"), never a productive claim. */
const stem = w => { const f = FOLD(w); return f.replace(/(ern|eln|en|em|er|es|et|te|st|e|n|s|t)$/, '') || f; };
const STOP = new Set(['und', 'oder', 'aber', 'der', 'die', 'das', 'ein', 'eine', 'einen', 'einem', 'einer',
  'ist', 'sind', 'bin', 'bist', 'seid', 'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'man', 'zu', 'in',
  'im', 'am', 'an', 'auf', 'mit', 'für', 'von', 'bei', 'nach', 'aus', 'als', 'auch', 'nicht', 'kein',
  'keine', 'keinen', 'sehr', 'so', 'nur', 'noch', 'schon', 'dann', 'doch', 'mal', 'bitte', 'ja', 'nein',
  'wie', 'was', 'wer', 'wo', 'wann', 'warum', 'dass', 'wenn', 'ob', 'zum', 'zur']);

function tokensOf(value, out) {
  if (value == null) return out;
  if (typeof value === 'string') {
    textParts.push(FOLD(value));
    /* fold first, then split: otherwise E-Mail splits into e + mail on this
       side while the headword is folded to email on the other. */
    FOLD(value).split(/[^\p{L}]+/u).forEach(w => { if (w.length > 1) out.add(w); });
    return out;
  }
  if (Array.isArray(value)) { value.forEach(v => tokensOf(v, out)); return out; }
  if (typeof value === 'object') { Object.values(value).forEach(v => tokensOf(v, out)); return out; }
  return out;
}

const lessons = Object.values(win.DW_LESSONS || {});
const band = lessons.filter(l => l.level === 'A0' || l.level === 'A1');
if (!band.length) { console.error('no A0/A1 lessons found — did the catalog load?'); process.exit(1); }

const heads = new Set(), headStems = new Set();
band.forEach(l => (l.wortschatz || []).forEach(it => {
  const h = STRIP(FOLD(it.de));
  heads.add(h); headStems.add(stem(h));
  String(it.de).split(/\s+/).forEach(w => { if (w.length > 2) { heads.add(FOLD(w)); headStems.add(stem(w)); } });
}));

const material = new Set(), materialStems = new Set();
const textParts = [];
band.forEach(l => {
  tokensOf(l.wortschatz || [], material);
  tokensOf(l.schritte || [], material);
  tokensOf(l.title || {}, material);
});
/* reading library and comprehension: A1 texts are material the learner meets */
const lib = win.DW_LIBRARY || win.DW_READING || null;
tokensOf(lib === null ? [] : lib, material);
const comp = win.DW_COMPREHENSION || win.DW_COMP_QUESTIONS || null;
tokensOf(comp === null ? [] : comp, material);
material.forEach(w => materialStems.add(stem(w)));
const materialText = textParts.join(' ');
if (!material.size) { console.error('no material tokens — check the data files'); process.exit(1); }

function classify(entry) {
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
    console.error('Point GOETHE_A1_LIST / GOETHE_A1_GROUPS at a transcription, or see the header of this file.');
    process.exit(2);
  }
  return fs.readFileSync(file, 'utf8').split('\n').map(s => s.trim()).filter(Boolean);
}

function report(entries, label) {
  const rows = entries.map(classify);
  const head = rows.filter(r => r.inHead), met = rows.filter(r => r.met);
  console.log('\n' + label);
  console.log('  entries                          ' + rows.length);
  console.log('  authored headword                ' + head.length + '  (' + Math.round(head.length / rows.length * 100) + '%)');
  console.log('  met anywhere in A0/A1 material   ' + met.length + '  (' + Math.round(met.length / rows.length * 100) + '%)');
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

const main = report(readList(LIST, 'A1 list transcription'), 'Goethe A1 alphabetical list vs the Deutschweg A0+A1 band');
const groups = report(readList(GROUPS, 'A1 word-group transcription'), 'Goethe A1 word groups (numbers, days, months, colours, measures)');

const headRatio = main.rows.filter(r => r.inHead).length / main.rows.length;
const metRatio = (main.rows.filter(r => r.met).length + groups.rows.filter(r => r.met).length) /
  (main.rows.length + groups.rows.length);

if (WRITE_GAP) {
  const lines = main.rows.concat(groups.rows).filter(r => !r.met)
    .map(r => (r.inHead ? 'headword ' : '         ') + r.entry);
  const head = '# Recorded gap: Goethe A1 entries the app does not carry yet.\n' +
    '# Generated by tools/match-goethe-a1.js --write-gap on ' + new Date().toISOString().slice(0, 10) + '.\n' +
    '# Two measures: authored headword (in a word list) and material (met in a lesson or A1 reading text).\n' +
    '# An entry marked "headword" is in a word list but never met in a sentence — that is a defect to fix.\n';
  fs.writeFileSync(path.join(root, 'tools/goethe-a1-gap.txt'), head + lines.join('\n') + '\n');
  console.log('\nwrote tools/goethe-a1-gap.txt (' + lines.length + ' entries)');
}

let failed = 0;
const gate = (name, value, floor) => {
  const ok = value >= floor;
  console.log('  ' + (ok ? '✓' : '✗') + ' ' + name + ': ' + Math.round(value * 100) + '% (floor ' + Math.round(floor * 100) + '%)');
  if (!ok) failed++;
};
console.log('\ncoverage gate');
gate('main list as headword', headRatio, FLOOR.headword);
gate('main list + groups met in material', metRatio, FLOOR.material);
gate('word groups met in material', groups.rows.filter(r => r.met).length / groups.rows.length, FLOOR.groups);
process.exit(failed ? 1 : 0);

#!/usr/bin/env node
/* Deutschweg — the corpus lexicon, and the promise that it never shrinks.
 *
 * The levels are coupled: tools/known.js defines "known" as everything the app has
 * already shown the learner, so the reading library of a lower level is part of the
 * word stock of every level above it. That coupling bit once, silently: two words
 * (*einziehen*, *viermal*) were taken out of two A2 texts to lift those texts to
 * 100%, and B1 fell from 98.1% to 97.4% — a level was damaged by an edit to the
 * level below it, and nothing in the repo said so.
 *
 * The lesson language is coupled the same way: the Goethe matchers count an entry as
 * *met* when it appears anywhere in the A0..B1 lessons or reading texts, so a word
 * removed from a carrier text can quietly un-meet a certified entry.
 *
 * So the lexicon is a measured artifact. `--write-floor` records the distinct tokens
 * of the whole German corpus (compiled lessons + reading library, function words
 * included) and the totals; every later run diffs against it and **fails on the
 * first token that disappeared**, printing it by name. Adding words never fails.
 * A deliberate removal goes through `--accept-lost <word,word>` and is written into
 * the floor file as an accepted loss, so it stays visible instead of becoming a
 * silence.
 *
 *   node tools/measure-corpus.js
 *   node tools/measure-corpus.js --write-floor
 *   node tools/measure-corpus.js --accept-lost einziehen,viermal --write-floor
 */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const FLOOR_FILE = path.join(__dirname, 'corpus-floor.json');
const WRITE = process.argv.includes('--write-floor');
const ACCEPT = (() => {
  const i = process.argv.indexOf('--accept-lost');
  if (i < 0 || !process.argv[i + 1]) return [];
  return process.argv[i + 1].split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
})();

const { fold, collectGerman } = require('./material');
const K = require('./known');

const win = {};
['web/data/a0-u1-l1.js', 'web/data/catalog.js', 'web/data/library.js', 'web/data/comprehension.js']
  .forEach(f => new Function('window', fs.readFileSync(path.join(root, f), 'utf8'))(win));

const strings = [];
Object.keys(win.DW_LESSONS || {}).forEach(id => collectGerman(win.DW_LESSONS[id]).forEach(s => strings.push(s)));
K.libraryTexts(win.DW_LIBRARY).forEach(t => strings.push(t.body));
/* The English-free rule of the whole app: every string counted here is German the
   learner has been shown. Arabic never reaches collectGerman, but a stray Arabic or
   Latin string in a German field would, so it is reported rather than counted. */
const ARABIC = /[\u0600-\u06FF]/;
const strange = strings.filter(s => ARABIC.test(s));

const tokens = [];
strings.forEach(s => fold(s).split(' ').forEach(w => { if (w.length > 1) tokens.push(w); }));
const lexicon = {};
tokens.forEach(w => { lexicon[w] = (lexicon[w] || 0) + 1; });
const distinct = Object.keys(lexicon).sort();

const FLOOR = fs.existsSync(FLOOR_FILE) ? JSON.parse(fs.readFileSync(FLOOR_FILE, 'utf8')) : null;
const accepted = new Set((FLOOR && FLOOR.accepted || []).concat(ACCEPT));
const lost = FLOOR ? Object.keys(FLOOR.lexicon || {})
  .filter(w => !lexicon[w] && !accepted.has(w)) : [];
const gained = FLOOR ? distinct.filter(w => !FLOOR.lexicon[w]).length : distinct.length;

console.log('the German corpus — every string the learner has been shown');
console.log('  lessons: ' + Object.keys(win.DW_LESSONS || {}).length +
  ' · reading texts: ' + K.libraryTexts(win.DW_LIBRARY).length +
  ' · distinct tokens: ' + distinct.length + ' · running words: ' + tokens.length);
if (strange.length) {
  console.log('  ✗ ' + strange.length + ' German strings carry Arabic characters (the app shows German there)');
} else {
  console.log('  ✓ no German string carries Arabic characters');
}

let fail = 0;
if (!FLOOR) {
  console.log('\n  no floor yet — this run defines it; write it with --write-floor');
} else {
  console.log('\ncorpus gate  (the lexicon never shrinks: a level is coupled to the levels below it)');
  const ok = lost.length === 0;
  if (!ok) fail += 1;
  console.log('  ' + (ok ? '✓' : '✗') + ' no token lost: ' + lost.length +
    (lost.length ? ' — ' + lost.slice(0, 40).join(' ') + (lost.length > 40 ? ' …' : '') : ''));
  console.log('  · tokens gained since the floor: ' + gained);
  const f = FLOOR.totals || {};
  console.log('  ' + (distinct.length >= (f.distinct || 0) ? '✓' : '✗') + ' distinct tokens: ' +
    distinct.length + ' (floor ' + (f.distinct || 0) + ')');
  if (distinct.length < (f.distinct || 0)) fail += 1;
  console.log('  ' + (tokens.length >= (f.running || 0) ? '✓' : '✗') + ' running words: ' +
    tokens.length + ' (floor ' + (f.running || 0) + ')');
  if (tokens.length < (f.running || 0)) fail += 1;
  if ((FLOOR.accepted || []).length) {
    console.log('  · accepted losses on record: ' + FLOOR.accepted.join(' '));
  }
  if (strange.length) fail += 1;
}

if (WRITE) {
  const next = {
    totals: { distinct: distinct.length, running: tokens.length },
    accepted: Array.from(accepted).sort(),
    lexicon: {}
  };
  distinct.forEach(w => { next.lexicon[w] = lexicon[w]; });
  fs.writeFileSync(FLOOR_FILE, JSON.stringify(next, null, 0) + '\n');
  console.log('\n  wrote ' + path.relative(root, FLOOR_FILE) + ' (' + distinct.length + ' tokens)');
}
process.exit(fail ? 1 : 0);

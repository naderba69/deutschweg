#!/usr/bin/env node
/* Deutschweg — the B2 reading measure.
 *
 * B2 has no Goethe word list, so the level's own measure is what it carries: the
 * twenty opinion articles and the six-chapter novella. This tool counts the words
 * the learner actually reads and the questions each text carries, prints the
 * table, and gates against a floor that is the measured value of the last
 * accepted run. The floor may only rise (`--write-floor` rewrites it after a run
 * that measured higher).
 *
 *   node tools/measure-b2-reading.js
 *   node tools/measure-b2-reading.js --write-floor
 */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const FLOOR_FILE = path.join(__dirname, 'b2-reading-floor.json');
const WRITE = process.argv.includes('--write-floor');

const { fold, stem } = require('./material');

const win = {};
['web/data/library.js', 'web/data/comprehension.js', 'web/data/inventory.js',
  'web/data/catalog.js', 'web/data/chunks.js']
  .forEach(f => new Function('window', fs.readFileSync(path.join(root, f), 'utf8'))(win));

/* §13.3: "98% comprehension, no dictionary" during extensive reading. That is a
   claim about words, so it is measured: every token of every text is looked up
   against the words the learner has been taught up to B2 — the authored headwords
   of all levels, the B2 material words, the chunks — with the same stemming the
   material measure uses. Unknown tokens are printed, most frequent first. */
const CORE = w => String(w).replace(/^(der|die|das)\s+/i, '').split(/\s+/).pop();
const KNOWN = (() => {
  const set = new Set();
  const add = w => {
    const f = core(w);
    if (!f) return;
    const parts = fold(f).split(' ');
    parts.forEach((p, i) => {
      set.add(p);
      if (i === parts.length - 1) { set.add(stem(p)); set.add(stem(p).replace(/e$/, '')); }
    });
  };
  const core = w => fold(CORE(w)).replace(/[-–—]/g, '').trim();
  const { collectGerman } = require('./material');
  Object.keys((win.DW_LESSONS || {})).forEach(id => {
    const L = win.DW_LESSONS[id];
    (L.wortschatz || []).forEach(it => add(it.de != null ? it.de : it[0]));
    (L.material || []).forEach(add);
    /* Everything the app has already shown this learner below B2 — the German of
       the compiled lessons of A0, A1, A2 and B1, and every B1 reading text. A word
       that appeared there has been read once, and that is what "known" means here. */
    collectGerman(L.schritte || L).forEach(str => fold(str).split(' ').forEach(w => {
      if (w.length > 2) { set.add(w); set.add(stem(w)); }
    }));
  });
  const lib = win.DW_LIBRARY || {};
  ['A1', 'A2', 'B1'].forEach(lv => {
    const node = lib[lv] || {};
    const texts = [].concat(node.texts || [], node.readers || []);
    texts.forEach(t => fold(t.body || '').split(' ').forEach(w => { if (w.length > 2) { set.add(w); set.add(stem(w)); } }));
  });
  const vocab = require('./vocab-b2.js');
  Object.keys(vocab).forEach(id => { (vocab[id].items || []).forEach(it => add(it[0])); (vocab[id].material || []).forEach(add); });
  const chunks = win.DW_CHUNKS || {};
  Object.keys(chunks).forEach(lv => (chunks[lv] || []).forEach(c => {
    const t = typeof c === 'string' ? c : (c.de || c.text || '');
    fold(t).split(' ').forEach(w => { set.add(w); set.add(stem(w)); });
  }));
  return set;
})();
const STOP = new Set(['und', 'oder', 'aber', 'denn', 'dass', 'wenn', 'als', 'wie', 'auch', 'nicht', 'nur', 'noch', 'schon',
  'sehr', 'mehr', 'viel', 'viele', 'ein', 'eine', 'einen', 'einem', 'einer', 'eines', 'der', 'die', 'das', 'den', 'dem', 'des',
  'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'man', 'mich', 'dich', 'sich', 'uns', 'euch', 'mein', 'dein', 'sein', 'unser',
  'ist', 'sind', 'war', 'waren', 'sein', 'hat', 'haben', 'hatte', 'hatten', 'wird', 'werden', 'wurde', 'wurden', 'kann', 'können',
  'muss', 'müssen', 'soll', 'sollen', 'will', 'wollen', 'darf', 'dürfen', 'mag', 'mögen', 'in', 'im', 'an', 'am', 'auf', 'aus',
  'bei', 'mit', 'von', 'vor', 'für', 'zu', 'zum', 'zur', 'um', 'über', 'unter', 'durch', 'gegen', 'ohne', 'nach', 'seit', 'bis',
  'zwischen', 'hinter', 'neben', 'ohne', 'trotz', 'wegen', 'ja', 'nein', 'hier', 'da', 'dort', 'dann', 'doch', 'eben', 'mal']);
function unknownWords(text) {
  const toks = fold(text).split(' ').filter(w => w.length > 2 && !STOP.has(w));
  const out = [];
  toks.forEach(t => {
    if (KNOWN.has(t) || KNOWN.has(stem(t)) || KNOWN.has(t.replace(/e$/, ''))) return;
    out.push(t);
  });
  return { tokens: toks.length, unknown: out };
}
const B2 = win.DW_LIBRARY.B2;
/* The map (DW_READING) names the texts the level promises; the library is what
   exists. Titles are compared in order, so the reading list in the UI and the
   row in the map cannot drift apart. */
const MAP = (win.DW_READING && win.DW_READING.B2) || {};
const words = s => String(s).trim().split(/\s+/).filter(Boolean).length;

const articles = (B2.articles || []).map(a => ({
  id: a.id, title: a.title, words: words(a.body), questions: (a.questions || []).length
}));
const chapters = ((B2.novel && B2.novel.chapters) || []).map(c => ({
  id: c.id || ('novelle-' + c.n), title: c.title, words: words(c.body), questions: (c.questions || []).length
}));

const measured = {
  article: articles.length ? Math.min.apply(null, articles.map(a => a.words)) : 0,
  chapter: chapters.length ? Math.min.apply(null, chapters.map(c => c.words)) : 0,
  articlesTotal: articles.reduce((s, a) => s + a.words, 0),
  novelTotal: chapters.reduce((s, c) => s + c.words, 0)
};
const FLOOR = fs.existsSync(FLOOR_FILE)
  ? JSON.parse(fs.readFileSync(FLOOR_FILE, 'utf8'))
  : Object.assign({}, measured);

console.log('\nB2 reading measure — ' + articles.length + ' articles · ' + chapters.length + ' novel chapters');
articles.forEach(a => console.log('  ' + a.id.padEnd(7) + String(a.words).padStart(4) + 'w  ' + a.questions + 'Q  ' + a.title));
chapters.forEach(c => console.log('  ' + c.id.padEnd(10) + String(c.words).padStart(4) + 'w  ' + c.questions + 'Q  ' + c.title));
console.log('  articles total ' + measured.articlesTotal + 'w · novella total ' + measured.novelTotal + 'w');

/* the 98% rule of §13.3, measured per text */
const all = articles.concat(chapters);
const cov = all.map(t => {
  const text = t.words >= 0 ? null : null;
  return null;
});
const covRows = [];
let covMin = 1;
const freqAll = {};
[...(B2.articles || []), ...(((B2.novel && B2.novel.chapters) || []))].forEach(node => {
  const r = unknownWords(node.body || '');
  const known = r.tokens - r.unknown.length;
  const ratio = r.tokens ? known / r.tokens : 1;
  covMin = Math.min(covMin, ratio);
  r.unknown.forEach(w => { freqAll[w] = (freqAll[w] || 0) + 1; });
  covRows.push({ id: node.id, tokens: r.tokens, unknown: r.unknown, ratio: ratio, node: node });
});
const sorted = covRows.slice().sort((a, b) => a.ratio - b.ratio);
sorted.forEach(r => console.log('  ' + String(r.id).padEnd(10) + (Math.round(r.ratio * 1000) / 10).toFixed(1).padStart(5) + '%  ' +
  'unknown ' + String(r.unknown.length).padStart(3) + ' / ' + String(r.tokens).padStart(4)));
const topUnknown = Object.entries(freqAll).sort((a, b) => b[1] - a[1]).slice(0, 25)
  .map(([w, n]) => w + '×' + n).join(' · ');
console.log('  the 98% rule (§13.3): lowest coverage ' + (Math.round(covMin * 1000) / 10) + '% — the texts the learner reads');
console.log('  most frequent unknown words: ' + topUnknown.slice(0, 400));
console.log('  lowest text (' + sorted[0].id + '), unknown: ' + sorted[0].unknown.slice(0, 24).join(' '));

let fail = 0;
function gate(name, now, floor) {
  const ok = now >= floor;
  if (!ok) fail += 1;
  console.log('  ' + (ok ? '✓' : '✗') + ' ' + name + ': ' + now + ' (floor ' + floor + ')');
}
console.log('\nreading gate  (floor = last accepted run · a ratchet, never lowered)');
gate('shortest article', measured.article, FLOOR.article);
gate('shortest novel chapter', measured.chapter, FLOOR.chapter);
gate('articles total words', measured.articlesTotal, FLOOR.articlesTotal);
gate('novella total words', measured.novelTotal, FLOOR.novelTotal);
const qBad = articles.concat(chapters).filter(t => t.questions !== 2);
if (qBad.length) { fail += 1; console.log('  ✗ every text carries two questions — bad: ' + qBad.map(t => t.id).join(', ')); }
else console.log('  ✓ every text carries two questions');
const artRows = covRows.filter(r => /^b2-a\d+$/.test(r.id));
const chRows = covRows.filter(r => /^novelle-\d+$/.test(r.id));
const lo = rows => rows.length ? Math.min.apply(null, rows.map(r => r.ratio)) : 1;
const artLow = lo(artRows), chLow = lo(chRows);
gate('coverage of the known words, lowest article (‰)', Math.floor(artLow * 1000), FLOOR.articlesLowestPermille || 0);
gate('coverage of the known words, lowest chapter (‰)', Math.floor(chLow * 1000), FLOOR.chaptersLowestPermille || 0);
console.log('  ' + (artLow >= 0.98 ? '✓' : '·') + ' the 98% rule (§13.3) on the articles: lowest ' +
  (Math.round(artLow * 1000) / 10) + '% (target 98%)');
console.log('  ' + (chLow >= 0.98 ? '✓' : '·') + ' the 98% rule (§13.3) on the novella: lowest ' +
  (Math.round(chLow * 1000) / 10) + '% (target 98%)');
const mapArticles = (MAP.articles || []);
const mapNovel = MAP.novel || '';
const titles = articles.map(a => a.title);
const mapOk = mapArticles.length === titles.length && mapArticles.every((t, i) => t === titles[i]);
if (mapOk) console.log('  ✓ DW_READING names all ' + titles.length + ' articles, in the library\'s order');
else {
  fail += 1;
  console.log('  ✗ DW_READING B2 articles differ from the library');
  titles.forEach((t, i) => { if (mapArticles[i] !== t) console.log('      ' + (i + 1) + ': map "' + (mapArticles[i] || '—') + '" vs library "' + t + '"'); });
  for (let i = titles.length; i < mapArticles.length; i++) console.log('      ' + (i + 1) + ': map "' + mapArticles[i] + '" has no library text');
}
if (mapNovel === (B2.novel && B2.novel.title)) console.log('  ✓ DW_READING names the novella (' + mapNovel + ')');
else { fail += 1; console.log('  ✗ DW_READING novella "' + mapNovel + '" vs library "' + (B2.novel && B2.novel.title) + '"'); }

if (WRITE) {
  /* a failing run must not lower the floor: the ratchet is the whole point of the file */
  if (fail) {
    console.log('\n  refused: ' + fail + ' gate' + (fail === 1 ? '' : 's') + ' failed — the floor is not lowered');
    process.exit(1);
  }
  const raised = {
    article: Math.max(FLOOR.article, measured.article),
    chapter: Math.max(FLOOR.chapter, measured.chapter),
    articlesTotal: Math.max(FLOOR.articlesTotal, measured.articlesTotal),
    novelTotal: Math.max(FLOOR.novelTotal, measured.novelTotal),
    articlesLowestPermille: Math.max(FLOOR.articlesLowestPermille || 0, Math.floor(artLow * 1000)),
    chaptersLowestPermille: Math.max(FLOOR.chaptersLowestPermille || 0, Math.floor(chLow * 1000))
  };
  fs.writeFileSync(FLOOR_FILE, JSON.stringify(raised, null, 2) + '\n');
  console.log('\n  wrote ' + path.relative(root, FLOOR_FILE) + ' ' + JSON.stringify(raised));
}
process.exit(fail ? 1 : 0);

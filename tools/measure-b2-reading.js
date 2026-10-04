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

const win = {};
['web/data/library.js', 'web/data/comprehension.js', 'web/data/inventory.js']
  .forEach(f => new Function('window', fs.readFileSync(path.join(root, f), 'utf8'))(win));
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
  const raised = {
    article: Math.max(FLOOR.article, measured.article),
    chapter: Math.max(FLOOR.chapter, measured.chapter),
    articlesTotal: Math.max(FLOOR.articlesTotal, measured.articlesTotal),
    novelTotal: Math.max(FLOOR.novelTotal, measured.novelTotal)
  };
  fs.writeFileSync(FLOOR_FILE, JSON.stringify(raised, null, 2) + '\n');
  console.log('\n  wrote ' + path.relative(root, FLOOR_FILE) + ' ' + JSON.stringify(raised));
}
process.exit(fail ? 1 : 0);

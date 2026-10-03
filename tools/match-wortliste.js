#!/usr/bin/env node
/* Match the authored word lists against an official word list the owner
   provides as a plain text file (one entry per line, e.g. exported from the
   Goethe Wortliste PDF). The list itself is not part of this repository and
   is never written into it (see .gitignore: wortlisten/). The script prints a
   measurement; it does not change any row, and nothing is claimed from it.

   node tools/match-wortliste.js A1 wortlisten/goethe-a1.txt
   node tools/match-wortliste.js B1 wortlisten/goethe-b1.txt --cumulative   (A0–B1 lists together)
*/
const fs = require('fs');
const path = require('path');
const [level, file, ...flags] = process.argv.slice(2);
if (!level || !file) { console.error('usage: node tools/match-wortliste.js <A1|A2|B1|B2> <list.txt> [--cumulative] [--show=40]'); process.exit(2); }
const cumulative = flags.includes('--cumulative');
const show = Number((flags.find(f => f.startsWith('--show=')) || '--show=40').split('=')[1]);
const root = path.join(__dirname, '..');
const cat = {};
new Function('window', fs.readFileSync(path.join(root, 'web/data/catalog.js'), 'utf8'))(cat);
const order = ['A0', 'A1', 'A2', 'B1', 'B2'];
const levels = cumulative ? order.slice(0, order.indexOf(level) + 1) : [level];

/* normalisation: lower case, no articles, no plural/genitive notation, no brackets */
const norm = s => String(s).toLowerCase()
  .replace(/\(.*?\)/g, ' ')
  .replace(/\b(der|die|das|ein|eine|sich|etw\.?|jmdn?\.?|jemanden|jemandem)\b/g, ' ')
  .replace(/[,;/].*$/, ' ')           /* "Haus, Häuser" → "haus" */
  .replace(/[-‐–—…·"'„“]+/g, ' ')
  .replace(/[^\p{L}\s]/gu, ' ')
  .trim().split(/\s+/).filter(Boolean);

const ours = new Map();  /* normalised key → headword */
Object.values(cat.DW_LESSONS || {}).forEach(L => {
  if (!levels.includes(L.level)) return;
  (L.wortschatz || []).forEach(it => {
    const toks = norm(it.de);
    if (!toks.length) return;
    ours.set(toks.join(' '), it.de);
    if (toks.length > 1) toks.forEach(t => { if (t.length > 3 && !ours.has(t)) ours.set(t, it.de); });
  });
});

const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/).map(l => l.trim()).filter(l => l && !/^#/.test(l));
const entries = new Map();
lines.forEach(l => { const toks = norm(l); if (toks.length) entries.set(toks.join(' '), l); });

const matched = [], missing = [];
entries.forEach((raw, key) => {
  if (ours.has(key) || key.split(' ').some(t => t.length > 3 && ours.has(t))) matched.push(raw); else missing.push(raw);
});
const extra = [...ours.keys()].filter(k => !entries.has(k) && !k.split(' ').some(t => entries.has(t)));

console.log(`list entries: ${entries.size} (${lines.length} lines) · authored headwords compared: ${ours.size} (${levels.join('+')})`);
console.log(`matched: ${matched.length} (${Math.round(100 * matched.length / Math.max(1, entries.size))}% of the list) · not in our lists: ${missing.length} · ours not in the list: ${extra.length}`);
console.log('— not in our lists (first ' + show + ') —');
console.log(missing.slice(0, show).join(' | '));
console.log('— ours, not in the list (first ' + show + ') —');
console.log(extra.slice(0, show).map(k => ours.get(k)).join(' | '));
console.log('\nThis is a measurement of surface headwords against a file the owner supplied. Coverage of an official list is not claimed by this output.');

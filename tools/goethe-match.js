#!/usr/bin/env node
/* Deutschweg — the corpus logic the Goethe word-list matchers share.
 *
 * Extracted from tools/match-goethe-a2.js when the A2 tool grew a promotion
 * file and the B1 tool is on the way: folding, stemming, the entry-variant
 * reader that handles the list's own notation (der/das Club/Klub, die (E-)Mail,
 * Lieblings-, usw.), and the classifier that answers the two questions every
 * matcher asks — is this entry an authored headword, and is it met in material.
 *
 * The numbers of a matcher must not change because this file was extracted:
 * the code below is the A2 tool's code, moved, not rewritten.
 */
const fs = require('fs');
const path = require('path');

const FOLD = s => String(s).normalize('NFC').toLowerCase().replace(/ß/g, 'ss').replace(/-/g, '');
const STRIP = s => s.replace(/^(der|die|das)\s+/, '').replace(/^sich\s+/, '')
  .replace(/\(.*?\)/g, ' ').replace(/\s+/g, ' ').trim();
const stem = w => { const f = FOLD(w); return f.replace(/(ern|eln|en|em|er|es|et|te|st|e|n|s|t)$/, '') || f; };
const STOP = new Set(['und', 'oder', 'aber', 'der', 'die', 'das', 'ein', 'eine', 'einen', 'einem', 'einer',
  'ist', 'sind', 'bin', 'bist', 'seid', 'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'man', 'zu', 'in',
  'im', 'am', 'an', 'auf', 'mit', 'für', 'von', 'bei', 'nach', 'aus', 'als', 'auch', 'nicht', 'kein',
  'keine', 'keinen', 'sehr', 'so', 'nur', 'noch', 'schon', 'dann', 'doch', 'mal', 'bitte', 'ja', 'nein',
  'wie', 'was', 'wer', 'wo', 'wann', 'warum', 'dass', 'wenn', 'ob', 'zum', 'zur']);

/* The four data files the app ships. */
function loadCorpus(root) {
  const win = {};
  ['web/data/a0-u1-l1.js', 'web/data/catalog.js', 'web/data/library.js', 'web/data/comprehension.js']
    .forEach(f => new Function('window', fs.readFileSync(path.join(root, f), 'utf8'))(win));
  return win;
}

/* One official entry can stand for several headwords, and a transcription
   keeps the list's own notation: "der/das Club/Klub", "die (E-)Mail",
   "Lieblings-", "mal/das Mal". Reading only the raw line made those entries
   miss although the app carried the word. Every variant is tried:
     article cluster × word variants, the bare word, the parentheses inlined,
     a trailing dot dropped, dots spaced, and a trailing hyphen read as a
     prefix (Lieblings- → Lieblingsplatz). */
function entryPhrases(entry) {
  const out = [];
  const push = v => { const t = String(v).trim(); if (t && out.indexOf(t) < 0) out.push(t); };
  [entry, String(entry).replace(/\(([^)]*)\)/g, '$1')].forEach(raw => {
    push(raw);
    push(String(raw).replace(/\.$/, ''));
    push(String(raw).replace(/\.(?!\s)/g, '. ').trim());
    const m = /^((?:der|die|das)(?:\/(?:der|die|das))*)\s+(.*)$/i.exec(raw.trim());
    let arts = [''], rest = raw;
    if (m) { arts = m[1].split('/'); rest = m[2]; }
    const words = rest.split('/').map(x => x.trim()).filter(Boolean);
    if (words.length > 1 || arts.length > 1) {
      arts.forEach(a => words.forEach(w => push((a ? a + ' ' : '') + w)));
      words.forEach(w => push(w));
    }
  });
  return out;
}

function collectTokens(value, out, textParts) {
  if (value == null) return out;
  if (typeof value === 'string') {
    textParts.push(FOLD(value));
    FOLD(value).split(/[^\p{L}]+/u).forEach(w => { if (w.length > 1) out.add(w); });
    return out;
  }
  if (Array.isArray(value)) { value.forEach(v => collectTokens(v, out, textParts)); return out; }
  if (typeof value === 'object') { Object.values(value).forEach(v => collectTokens(v, out, textParts)); return out; }
  return out;
}

/* One band per measure the tool prints. A band is a set of levels: the A2
   matcher reads the A2 band alone and the cumulative A0+A1+A2 band, because
   the official A2 list carries the A1 vocabulary inside it. */
function buildBands(win, levelSets) {
  const lessons = Object.values(win.DW_LESSONS || {});
  const textParts = [];
  const bands = {};
  Object.keys(levelSets).forEach(name => {
    const levels = levelSets[name];
    const band = lessons.filter(l => levels.includes(l.level));
    const heads = new Set(), headStems = new Set();
    band.forEach(l => (l.wortschatz || []).forEach(it => {
      const h = STRIP(FOLD(it.de));
      heads.add(h); headStems.add(stem(h));
      String(it.de).split(/\s+/).forEach(w => { if (w.length > 2) { heads.add(FOLD(w)); headStems.add(stem(w)); } });
    }));
    const material = new Set(), materialStems = new Set();
    band.forEach(l => {
      collectTokens(l.wortschatz || [], material, textParts);
      collectTokens(l.schritte || [], material, textParts);
      collectTokens(l.title || {}, material, textParts);
    });
    /* The reading texts of the band's own levels are material the learner meets. */
    const lib = win.DW_LIBRARY || {};
    levels.forEach(lv => collectTokens(lib[lv] || [], material, textParts));
    material.forEach(w => materialStems.add(stem(w)));
    bands[name] = { levels, heads, headStems, material, materialStems, lessons: band };
  });
  return { bands, materialText: textParts.join(' '), lessons };
}

function makeClassify(band, materialText) {
  const { heads, headStems, material, materialStems } = band;
  return function classify(entry) {
    let inHead = false, met = false;
    entryPhrases(entry).forEach(raw => {
      if (inHead && met) return;
      const phrase = STRIP(FOLD(raw));
      if (!phrase) return;
      const words = phrase.split(/\s+/).filter(w => w.length > 2 && !STOP.has(w));
      const key = words.length ? words[words.length - 1] : phrase;
      const hit = (set, stemSet) => set.has(phrase) || set.has(key) || stemSet.has(stem(key));
      const parts = phrase.split(/\s+/);
      const content = parts.filter(w => w.length > 2);
      if (!inHead && (hit(heads, headStems) ||
        (words.length > 1 && words.some(w => heads.has(w) || headStems.has(stem(w)))))) inHead = true;
      if (!met && (material.has(phrase) || materialStems.has(stem(key)) ||
        (phrase.includes(' ') && materialText.includes(phrase)) ||
        (content.length > 0 && content.every(w => material.has(w) || materialStems.has(stem(w)))))) met = true;
      if (raw.trim().endsWith('-')) {
        const pfx = FOLD(raw.trim().slice(0, -1)).replace(/\s+/g, '');
        if (pfx) {
          if (!inHead && [...heads].some(w => w.startsWith(pfx))) inHead = true;
          if (!met && [...material].some(w => w.startsWith(pfx))) met = true;
        }
      }
    });
    return { entry, inHead, met };
  };
}

module.exports = { FOLD, STRIP, stem, STOP, loadCorpus, entryPhrases, collectTokens, buildBands, makeClassify };

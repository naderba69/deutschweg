/* Deutschweg — the material measure, shared by the compiler and the audit.

   Route C (DECISIONS-PENDING item 20): a B2 workshop declares 90 receptive
   words, of which 40 are authored as full list items inside the 24–36 step
   band and the rest are `material` words the workshop's German text must
   actually contain. This module is the one implementation of "the text
   contains that word", so the compiler and the audit can never disagree.

   Design notes, learned the hard way in the A1 match:
   - fold BEFORE splitting, with a Unicode-aware class, so E-Mail / Café /
     Österreich survive;
   - a hyphenless variant is tried as well (Schlüsselwort ↔ Schlüssel-Wort);
   - a stem is tried (longest suffix first) so an inflected token counts:
     "auf zwei Ebenen" meets die Ebene;
   - the article may inflect, so callers pass the core (CORE()).
*/

const ARABIC = /[\u0600-\u06FF]/;

const fold = t => String(t).toLowerCase().replace(/[^\p{L}]+/gu, ' ').replace(/\s+/g, ' ').trim();
const foldNoHyphen = t => fold(String(t).replace(/[-–—]/g, ''));

/* Longest-suffix-first, the same stemmer tools/match-goethe-a1.js uses. */
const SUFFIX = ['ungen', 'ung', 'en', 'em', 'er', 'es', 'e', 'n', 's', 'te', 't', 'st'];
function stem(w) {
  for (const suf of SUFFIX) {
    if (w.length - suf.length >= 3 && w.endsWith(suf)) return w.slice(0, -suf.length);
  }
  return w;
}
const stemText = t => t.split(' ').map(stem).join(' ');
const escape = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function hasWord(word, texts) {
  const w = fold(word);
  if (!w) return false;
  const variants = [w, foldNoHyphen(word), stem(w), stem(foldNoHyphen(word))]
    .filter((v, i, a) => v && a.indexOf(v) === i);
  return variants.some(p => {
    const re = new RegExp('(^|[^\\p{L}])' + escape(p) + '([^\\p{L}]|$)', 'u');
    return texts.some(t => re.test(t) || re.test(stemText(t)));
  });
}

/* Every German string the learner reads. Arabic-bearing strings are dropped,
   not stripped, so a word cannot be "found" inside an Arabic sentence. */
function collectGerman(node, out) {
  out = out || [];
  if (typeof node === 'string') {
    if (node && !ARABIC.test(node)) out.push(node);
    return out;
  }
  if (Array.isArray(node)) { node.forEach(x => collectGerman(x, out)); return out; }
  if (node && typeof node === 'object') { Object.values(node).forEach(x => collectGerman(x, out)); return out; }
  return out;
}

module.exports = { ARABIC, fold, foldNoHyphen, stem, stemText, hasWord, collectGerman, escape };

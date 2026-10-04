/* Deutschweg — "what has this learner been taught", in one place.
 *
 * §13.3 promises extensive reading at **98% comprehension, no dictionary**. That is
 * a claim about words, so it needs one definition of "known", used by every
 * measure that checks the claim — never two that can drift apart.
 *
 * Known = the authored headwords of every level, the material words the workshops
 * declare, the 100 chunks per level, **and every German string of every compiled
 * lesson and of the reading library** (a word the app has already shown the
 * learner has been read once). Matching uses the same stemmer as the material
 * measure, so "auf zwei Ebenen" meets *die Ebene* here too.
 */
'use strict';
const { fold, stem, collectGerman } = require('./material');

const STOP = new Set(['und', 'oder', 'aber', 'denn', 'dass', 'wenn', 'als', 'wie', 'auch', 'nicht', 'nur', 'noch', 'schon',
  'sehr', 'mehr', 'viel', 'viele', 'ein', 'eine', 'einen', 'einem', 'einer', 'eines', 'der', 'die', 'das', 'den', 'dem', 'des',
  'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'man', 'mich', 'dich', 'sich', 'uns', 'euch', 'mein', 'dein', 'sein', 'unser',
  'ist', 'sind', 'war', 'waren', 'sein', 'hat', 'haben', 'hatte', 'hatten', 'wird', 'werden', 'wurde', 'wurden', 'kann', 'können',
  'muss', 'müssen', 'soll', 'sollen', 'will', 'wollen', 'darf', 'dürfen', 'mag', 'mögen', 'in', 'im', 'an', 'am', 'auf', 'aus',
  'bei', 'mit', 'von', 'vor', 'für', 'zu', 'zum', 'zur', 'um', 'über', 'unter', 'durch', 'gegen', 'ohne', 'nach', 'seit', 'bis',
  'zwischen', 'hinter', 'neben', 'trotz', 'wegen', 'ja', 'nein', 'hier', 'da', 'dort', 'dann', 'doch', 'eben', 'mal']);

const CORE = w => String(w).replace(/^(der|die|das)\s+/i, '').split(/\s+/).pop();

/* Every text of the library, whatever shape its level uses. `questions` is the
   number of checkable questions the text carries (2 is the rule). */
function libraryTexts(lib) {
  const out = [];
  const row = (level, t, id) => ({
    level: level, id: id || t.id, title: t.title, body: t.body,
    questions: (t.questions || []).length
  });
  ['A1', 'A2'].forEach(lv => {
    const node = lib[lv];
    (Array.isArray(node) ? node : []).forEach(t => { if (t && t.body) out.push(row(lv, t)); });
  });
  const b1 = ((lib.B1 || {}).texts) || [];
  b1.forEach(t => { if (t && t.body) out.push(row('B1', t)); });
  const b2 = lib.B2 || {};
  (b2.articles || []).forEach(t => { if (t && t.body) out.push(row('B2', t)); });
  (((b2.novel || {}).chapters) || []).forEach(t => { if (t && t.body) out.push(row('B2', t, 'novelle-' + t.n)); });
  return out;
}

/* The levels in the order the learner walks them. */
const LEVELS = ['A0', 'A1', 'A2', 'B1', 'B2'];

/* The known set of everything the app has taught **up to a level**, in library
   order. `upto` models the learner's trajectory: at B1 they have had A0–B1
   lessons, and the reading library of the levels below (A1 and A2 here) — but
   never the texts of the level being measured, so a text can never be its own
   evidence. */
function knownWords(win, opts) {
  opts = opts || {};
  const upto = opts.upto || 'B2';
  const uptoIdx = LEVELS.indexOf(upto);
  if (uptoIdx < 0) throw new Error('unknown level: ' + upto);
  const set = new Set();
  const add = w => {
    const parts = fold(CORE(w)).split(' ');
    parts.forEach((p, i) => {
      if (!p) return;
      set.add(p);
      if (i === parts.length - 1) { set.add(stem(p)); set.add(stem(p).replace(/e$/, '')); }
    });
  };
  Object.keys(win.DW_LESSONS || {}).forEach(id => {
    const L = win.DW_LESSONS[id];
    if (LEVELS.indexOf(L.level) > uptoIdx) return;
    (L.wortschatz || []).forEach(it => add(it.de != null ? it.de : it[0]));
    (L.material || []).forEach(add);
    collectGerman(L.schritte || L).forEach(str => fold(str).split(' ').forEach(w => {
      if (w.length > 2) { set.add(w); set.add(stem(w)); }
    }));
  });
  const lib = win.DW_LIBRARY || {};
  libraryTexts(lib).forEach(t => {
    const idx = LEVELS.indexOf(t.level);
    if (idx < 0 || idx >= uptoIdx) return;   /* only the levels already read */
    fold(t.body).split(' ').forEach(w => { if (w.length > 2) { set.add(w); set.add(stem(w)); } });
  });
  const chunks = win.DW_CHUNKS || {};
  Object.keys(chunks).forEach(lv => (chunks[lv] || []).forEach(c => {
    const t = typeof c === 'string' ? c : (c.de || c.text || '');
    fold(t).split(' ').forEach(w => { set.add(w); set.add(stem(w)); });
  }));
  return set;
}

/* Forms the material stemmer cannot reach, because German changes the stem of a
   strong verb: schreiben → geschrieben, nehmen → genommen, fallen → ausfiel.
   The table is deliberately small and explicit — it lists the forms that really
   occur in the library, and a form only counts when its infinitive is known. */
const IRREG = {
  ausfiel: 'ausfallen', ausgefiel: 'ausfallen', eingebrochen: 'einbrechen', eingezogen: 'einziehen',
  festgehalten: 'festhalten', geflohen: 'fliehen', gefüttert: 'füttern', gehalten: 'halten',
  geliebt: 'lieben', geläutet: 'läuten', genommen: 'nehmen', geschrieben: 'schreiben',
  geworfen: 'werfen', aufgenommen: 'aufnehmen', aufgeschrieben: 'aufschreiben', stiehlt: 'stehlen',
  versprochen: 'versprechen', verziehen: 'verzeihen', vorliest: 'vorlesen', zweifle: 'zweifeln',
  hinaufgehe: 'hinaufgehen', berechnete: 'berechnen', wollte: 'wollen', sollte: 'sollen',
  kaputtgegangen: 'kaputtgehen', angeschnallt: 'anschnallen', auszuhalten: 'aushalten',
  weiterbringt: 'weiterbringen', schmückt: 'schmücken', verordnet: 'verordnen', anfasst: 'anfassen'
};

/* Every stem a token may answer to. The material stemmer strips one suffix; a
   second pass reaches begleitet → begleit, and the zu-infinitive and the
   ge-infix of a separable verb (ein-ge-setzt → einsetzen) are unwound first. */
function stems(w) {
  const out = new Set([w, stem(w), stem(w).replace(/e$/, '')]);
  const zu = w.replace(/([a-zäöüß]{3,})zu([a-zäöüß]{3,})/, '$1$2');
  if (zu !== w) { out.add(zu); out.add(stem(zu)); }
  const ge = w.match(/^([a-zäöüß]+)ge([a-zäöüß]{2,})(|t|en|et)$/);
  if (ge) { const base = ge[1] + ge[2] + 'en'; out.add(base); out.add(stem(base)); }
  [w, stem(w)].forEach(t => { const two = stem(t); out.add(two); out.add(two.replace(/e$/, '')); });
  return out;
}
function tokenise(text) {
  return fold(text).split(' ').filter(w => w.length > 2 && !STOP.has(w));
}
function isKnown(set, w) {
  const hit = t => set.has(t) || set.has(stem(t)) || set.has(t.replace(/e$/, ''));
  for (const s of stems(w)) if (hit(s)) return true;
  if (IRREG[w]) return hit(IRREG[w]);
  return false;
}
function coverage(set, text) {
  const tokens = tokenise(text);
  const unknown = tokens.filter(w => !isKnown(set, w));
  return { tokens: tokens.length, unknown: unknown, ratio: tokens.length ? (tokens.length - unknown.length) / tokens.length : 1 };
}

module.exports = { LEVELS, STOP, CORE, IRREG, stems, knownWords, libraryTexts, tokenise, isKnown, coverage };

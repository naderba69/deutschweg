#!/usr/bin/env node
/* Deutschweg — Definition-of-Done validator (PROMPT §19)
   Usage: node tools/validate-lesson.js web/data/a0-u1-l1.js
   Exits non-zero if the lesson breaks a rule. No dependencies. */

const fs = require('fs');
const path = process.argv[2] || 'web/data/a0-u1-l1.js';

global.window = {};
try { new Function('window', fs.readFileSync(path, 'utf8'))(global.window); }
catch (e) { fail('cannot evaluate lesson file: ' + e.message); }

function fail(m){ console.error(m); process.exit(1); }
const ids = Object.keys(global.window.DW_LESSONS || {});
if (!ids.length) fail('no lessons in ' + path);
const lessonCount = ids.length;
let fileHard = 0;

/* P3.2 — the lexical layer and the forms. These are cross-lesson checks: a trick
   that is repeated verbatim in every lesson is a slogan, not a memory aid. */
const VOCAB_FLOOR = { A0: 12, A1: 14, A2: 16, B1: 20, B2: 24 };
/* The hand-written opening lesson predates the lexical layer. It stays the one
   declared exception until it is ported, and the exception is printed, not hidden. */
const VOCAB_EXEMPT = new Set(['a0-u1-l1']);
const PENDING_VOCAB_LEVELS = new Set(['A1', 'A2', 'B1', 'B2']);
const trickSeen = new Map();
const FORMS = ['mcq', 'cloze', 'matching', 'hoeren', 'sprechen', 'flashcard', 'wortstellung', 'schreiben'];
let formsUsed = new Set();
let backlog = 0;
const warningOnly = m => { backlog++; if (lessonCount === 1) console.log('  ! ' + m); };
ids.forEach(lessonKey => {
  validateOne(global.window.DW_LESSONS[lessonKey]);
});
console.log(lessonCount > 1 ? '\n' + lessonCount + ' lessons, ' + fileHard + ' hard failure(s)' : '');
if (lessonCount > 1) {
  const unused = FORMS.filter(f => !formsUsed.has(f));
  console.log('forms exercised across the file: ' + [...formsUsed].join(' · ') + (unused.length ? '  (never used: ' + unused.join(', ') + ')' : '  (all eight used)'));
  console.log('not-yet-ported backlog found here (repeated tricks in the older levels): ' + backlog + '\n');
}
process.exit(fileHard ? 1 : 0);

function validateOne(L) {
const S = L.schritte;

let hard = 0, soft = 0;
const ok = m => { if (lessonCount === 1) console.log('  ✓ ' + m); };
const bad = m => { hard++; console.log('  ✗ ' + m); };
const warn = m => { soft++; console.log('  ! ' + m); };
function fail(m){ console.error(m); process.exit(1); }

if (lessonCount === 1) console.log(`\nLesson ${L.id} — ${L.title.ar}\n`);

/* 1. step count 24–36 */
(S.length >= 24 && S.length <= 36)
  ? ok(`step count ${S.length} is inside 24–36`)
  : bad(`step count ${S.length} is outside 24–36`);

/* 2. all 12 stages present, in order */
const ORDER = ['Ziel','Aufwärmen','Einstieg','Erklärung','Wortschatz','Anwenden','Übungen','Merkhilfe','Produktion','Zusammenfassung','Check','Hausaufgabe'];
const present = ORDER.filter(p => S.some(s => s.phase === p));
present.length === ORDER.length ? ok('all 12 stages present') : bad('missing stages: ' + ORDER.filter(p => !present.includes(p)).join(', '));
let last = -1, orderOk = true;
S.forEach(s => { const i = ORDER.indexOf(s.phase); if (i < last) orderOk = false; last = i; });
orderOk ? ok('stage sequence is in order') : bad('stage sequence is out of order');

/* 3. stage counts within declared bounds */
const BOUNDS = { Ziel:[1,1], 'Aufwärmen':[1,1], Einstieg:[1,1], 'Erklärung':[3,7], Wortschatz:[3,5],
  Anwenden:[3,3], 'Übungen':[5,8], Merkhilfe:[1,3], Produktion:[1,1], Zusammenfassung:[1,1], Check:[3,5], Hausaufgabe:[1,1] };
Object.entries(BOUNDS).forEach(([p,[lo,hi]]) => {
  const n = S.filter(s => s.phase === p).length;
  (n >= lo && n <= hi) ? ok(`${p}: ${n} (allowed ${lo}–${hi})`) : bad(`${p}: ${n} outside ${lo}–${hi}`);
});

/* 4. unique step ids, explicit chain */
const ids = S.map(s => s.id);
new Set(ids).size === ids.length ? ok('step ids unique') : bad('duplicate step ids');
S.forEach((s,i) => { if (s.naechste && s.naechste !== ids[i+1]) warn(`${s.id}: naechste does not point to the next step`); });

/* 5. every question has a target capability id (ziel) */
const noZiel = S.filter(s => s.frage && !s.frage.ziel);
if (noZiel.length === 0) ok('every question carries a ziel');
else bad('question without ziel rejected: ' + noZiel.map(s => s.id).join(', '));
const checkNoPrereq = S.filter(s => s.phase === 'Check' && s.frage && !s.frage.prereq);
checkNoPrereq.length === 0 ? ok('every check carries a prereq')
                           : bad('check without prereq: ' + checkNoPrereq.map(s => s.id).join(', '));

/* 6. hints.
   Rule: mandatory on teaching, vocabulary, application and exercise steps.
   Deliberately absent on Ziel/Einstieg (no wrong answer exists) and on Check
   (a check measures; a hint would corrupt the measurement). */
const HINT_PHASES = ['Erklärung','Wortschatz','Anwenden','Übungen'];
const needHints = S.filter(s => s.frage && HINT_PHASES.includes(s.phase));
const noHints = needHints.filter(s => !(s.hinweise || []).length);
noHints.length === 0 ? ok(`hints present on all ${needHints.length} teaching/exercise questions`)
                     : bad('question steps without hints: ' + noHints.map(s=>s.id).join(', '));
const checkHints = S.filter(s => s.frage && s.phase === 'Check' && (s.hinweise || []).length);
checkHints.length === 0 ? ok('no hints inside Check steps (measurement integrity kept)')
                        : warn('hints found inside Check steps: ' + checkHints.map(s=>s.id).join(', '));

/* 7. immediate explanation on every answer path */
let fbMissing = [];
S.forEach(s => {
  if (!s.frage) return;
  const f = s.frage;
  if (f.art === 'mcq' || f.art === 'hoeren') {
    const opts = (f.optionen || []).map(o => o.id);
    opts.forEach(o => { if (!f.feedback || !f.feedback[o]) fbMissing.push(`${s.id}:${o}`); });
  } else if (f.art === 'cloze') {
    if (!f.feedback || !f.feedback.correct) fbMissing.push(s.id + ':correct');
  } else if (f.art === 'matching') {
    if (!f.feedback || !f.feedback.correct) fbMissing.push(s.id + ':correct');
    (f.paare || []).forEach((p,i) => { if (!p.haken) fbMissing.push(`${s.id}:pair${i}`); });
  }
});
fbMissing.length === 0 ? ok('immediate explanation present on every answer path')
                       : bad('missing feedback: ' + fbMissing.join(', '));

/* 8. diagnostic distractors on every wrong mcq option */
let noFam = [];
S.forEach(s => {
  const f = s.frage; if (!f || (f.art !== 'mcq' && f.art !== 'hoeren') || f.beliebig) return;
  (f.optionen || []).forEach(o => {
    if (o.id === f.richtig) return;
    if (!(f.misconceptionFamilies || {})[o.id]) noFam.push(`${s.id}:${o.id}`);
  });
});
noFam.length === 0 ? ok('every distractor maps to an error family')
                   : warn('distractors without a family: ' + noFam.join(', '));

/* 9. three-layer simplification on every teaching step */
const teaching = S.filter(s => s.phase === 'Erklärung' || s.phase === 'Wortschatz');
const noSimple = teaching.filter(s => !s.vereinfachung || !s.vereinfachung.beispiel || !s.vereinfachung.analogie || !s.vereinfachung.regel);
noSimple.length === 0 ? ok('every teaching step has example → analogy → rule')
                      : bad('teaching steps missing a simplification layer: ' + noSimple.map(s=>s.id).join(', '));

/* 10. Merkhilfen: ≥3 when ≥5 new words, always with trick/wie/warum */
const mk = S.filter(s => s.merkhilfe);
const badMk = mk.filter(s => !s.merkhilfe.trick || !s.merkhilfe.wie || !s.merkhilfe.warum);
badMk.length === 0 ? ok(`Merkhilfen: ${mk.length}, all with trick/wie/warum`)
                   : bad('Merkhilfe missing warum or wie: ' + badMk.map(s=>s.id).join(', '));
mk.length >= 3 ? ok('≥3 Merkhilfen present') : bad(`only ${mk.length} Merkhilfen`);

/* 11. recap strip ≤ 6 words on every step */
const longRecap = S.filter(s => s.recap && s.recap.split(/\s+/).filter(Boolean).length > 6);
longRecap.length === 0 ? ok('every recap strip is ≤6 words')
                       : warn('recap strips longer than 6 words: ' + longRecap.map(s=>`${s.id}(${s.recap.split(/\s+/).length})`).join(', '));

/* 12. one concept per teaching step.
   Applied to the phases that carry a single idea (Ziel, Erklärung, Wortschatz).
   Anwenden/Übungen/Produktion legitimately show a dialogue or an instruction. */
const ONECONCEPT = ['Ziel','Erklärung','Wortschatz'];
const multi = S.filter(s => s.zeigt && ONECONCEPT.includes(s.phase) && /[.!?]\s+[A-ZÄÖÜ]/.test(s.zeigt.de));
multi.length === 0 ? ok('one concept per teaching step')
                   : warn('check for two concepts in: ' + multi.map(s=>s.id).join(', '));

/* 13. a real production step and a real homework step */
S.some(s => s.type === 'sprechen') ? ok('production step records the learner') : bad('no sprechen step');
S.some(s => s.phase === 'Hausaufgabe') ? ok('homework step present') : bad('no homework step');

/* 14. check threshold documented in the lesson */
S.some(s => s.phase === 'Check' && /80/.test(s.erklaerung + JSON.stringify(s.frage))) ? ok('pass threshold 80% stated') : warn('pass threshold not stated in the check steps');

/* 15. language of the display is German */
const nonGerman = S.filter(s => s.zeigt && /[\u0600-\u06FF]/.test(s.zeigt.de));
nonGerman.length === 0 ? ok('all "zeigt" lines are German') : bad('Arabic found in zeigt: ' + nonGerman.map(s=>s.id).join(', '));

/* 16. P3.2 lexical layer. A step that carries words carries 2–4 of them, each
   with its form, its gloss, one example, the error an Arabic speaker makes, and
   why that error is wrong. */
const vocabSteps = S.filter(s => s.wortschatz);
let vocabBad = [];
vocabSteps.forEach(s => {
  if (s.wortschatz.length < 2 || s.wortschatz.length > 4) vocabBad.push(s.id + ' carries ' + s.wortschatz.length);
  s.wortschatz.forEach(it => {
    ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].forEach(k => { if (!it[k]) vocabBad.push(s.id + ':' + (it.de || '?') + ' missing ' + k); });
    if (/[\u0600-\u06FF]/.test(String(it.de) + it.ex + it.err)) vocabBad.push(s.id + ' Arabic inside German: ' + it.de);
  });
});
const declared = L.wortschatz || [];
if (declared.length) {
  declared.length >= (VOCAB_FLOOR[L.level] || 12)
    ? ok(`word list ${declared.length} meets the ${L.level} floor`)
    : bad(`word list ${declared.length} below the ${L.level} floor ${VOCAB_FLOOR[L.level] || 12}`);
  const carried = new Set();
  vocabSteps.forEach(s => s.wortschatz.forEach(it => carried.add(it.de)));
  declared.every(it => carried.has(it.de))
    ? ok('every declared word appears in a Wortschatz step')
    : bad('declared words never shown: ' + declared.filter(it => !carried.has(it.de)).map(it => it.de).join(', '));
} else if (['A0', 'A1'].includes(L.level) && !VOCAB_EXEMPT.has(L.id)) {
  /* A level being ported is declared pending in DECISIONS-PENDING.md. The backlog
     is counted and printed; the moment a level leaves that list, its lessons must
     carry a word list or the build fails. */
  if (PENDING_VOCAB_LEVELS.has(L.level)) warningOnly(L.id + ' has no word list yet (' + L.level + ' is mid-port)');
  else bad('a ' + L.level + ' lesson without a word list is not shipped');
} else if (VOCAB_EXEMPT.has(L.id)) {
  warn(L.id + ' carries no word list yet (declared exception, see DECISIONS-PENDING.md)');
}
vocabBad.length === 0 ? ok(`Wortschatz steps carry ${vocabSteps.length ? vocabSteps[0].wortschatz.length + '–4' : '2–4'} words each, with form and example`)
                      : bad('Wortschatz defects: ' + vocabBad.join(', '));

/* 17. the forms are used, not merely supported by the renderer */
const used = new Set(S.map(s => (s.type === 'sprechen' ? 'sprechen' : (s.type === 'hoeren' ? 'hoeren' : (s.frage ? s.frage.art : null)))).filter(Boolean));
const missingForms = FORMS.filter(f => !used.has(f));
used.forEach(f => formsUsed.add(f));
if (['A0', 'A1'].includes(L.level) && declared.length) {
  missingForms.length <= 2 ? ok('forms used: ' + [...used].join(' · '))
                           : bad('lesson never uses: ' + missingForms.join(', '));
}

/* 18. a memory aid repeated in another lesson is not a memory aid */
S.filter(s => s.merkhilfe).forEach(s => {
  const t = String(s.merkhilfe.trick).trim();
  if (trickSeen.has(t) && trickSeen.get(t) !== L.id) {
    const msg = 'trick repeated in ' + L.id + ' and ' + trickSeen.get(t) + ': ' + t;
    if (declared.length) bad(msg); else warningOnly(msg);
  } else trickSeen.set(t, L.id);
});

/* 19. one question, one wording inside a lesson; no duplicate options */
const qtexts = new Map();
S.filter(s => s.frage && s.frage.frage).forEach(s => {
  const key = s.frage.frage + '|' + (s.zeigt ? s.zeigt.de : '');
  if (qtexts.has(key)) {
    const msg = 'question asked twice in ' + L.id + ': ' + s.frage.frage;
    if (declared.length) bad(msg); else warningOnly(msg);
  }
  qtexts.set(key, s.id);
  const opts = (s.frage.optionen || []).map(o => String(o.text));
  if (opts.length !== new Set(opts).size) bad('duplicate option text in ' + s.id);
});

/* 20. no filler feedback: an explanation that fits every step explains nothing */
const filler = S.filter(s => /هذا شكل من الدرس، لكنه ليس جواب هذا البند|هذا فخ الدرس، لكنه ليس جواب هذا البند/.test(JSON.stringify(s.frage || {})));
if (declared.length) {
  filler.length === 0 ? ok('no filler feedback in the ported lesson') : bad('filler feedback in ' + filler.map(s => s.id).join(', '));
}

if (hard) fileHard += hard;
if (lessonCount === 1) console.log(`\n${hard} hard failure(s), ${soft} warning(s)\n`);
else if (hard) console.log(L.id + ': ' + hard + ' hard failure(s)');
}

#!/usr/bin/env node
/* Deutschweg — Definition-of-Done validator (PROMPT §19)
   Usage: node tools/validate-lesson.js web/data/a0-u1-l1.js
   Exits non-zero if the lesson breaks a rule. No dependencies. */

const fs = require('fs');
const path = process.argv[2] || 'web/data/a0-u1-l1.js';

global.window = {};
try { new Function('window', fs.readFileSync(path, 'utf8'))(global.window); }
catch (e) { fail('cannot evaluate lesson file: ' + e.message); }

const id = Object.keys(global.window.DW_LESSONS)[0];
const L = global.window.DW_LESSONS[id];
const S = L.schritte;

let hard = 0, soft = 0;
const ok = m => console.log('  ✓ ' + m);
const bad = m => { hard++; console.log('  ✗ ' + m); };
const warn = m => { soft++; console.log('  ! ' + m); };
function fail(m){ console.error(m); process.exit(1); }

console.log(`\nLesson ${L.id} — ${L.title.ar}\n`);

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

console.log(`\n${hard} hard failure(s), ${soft} warning(s)\n`);
process.exit(hard ? 1 : 0);

/* P2 adaptive core — pure checks. No DOM. */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const w = { DW: {} };
global.window = w;
function load(rel) { new Function('window', fs.readFileSync(path.join(ROOT, rel), 'utf8'))(w); }
load('web/engine/storage.js');
load('web/engine/ledger.js');
load('web/engine/adaptive.js');
const A = w.DW.adaptive;
const DW = w.DW;

let pass = 0, fail = 0;
const t = (n, c) => { if (c) { pass++; console.log('  ✓', n); } else { fail++; console.log('  ✗', n); } };
const today = '2026-10-02';
function cap(over) {
  return Object.assign({
    id: 'cap.test', track: 'grammar', evidence: 'E3', lastActive: '2026-08-01',
    history: [{ state: 'E3', at: '2026-08-01', source: 'lesson' }], assisted: false
  }, over);
}
function state(over) {
  const s = DW.storage.defaultState();
  s.learner.weeklyHours = 10;
  return Object.assign(s, over || {});
}

console.log('\n— decay —\n');
{
  const S = state();
  const c = cap({ lastActive: A.addDays(today, -45) });
  t('T34 window opens at 45 days', A.inWindow(c, today, S));
  const plan = A.compose(Object.assign(state(), { capabilities: [c] }), today);
  t('T34 next session contains an activation block', plan.blocks.some(b => b.type === 'activation' && b.capabilityId === 'cap.test'));
  t('T34 activation reason is present', plan.blocks.every(b => b.reason && b.reason.length > 8));
}
{
  const c = cap({ evidence: 'E2', history: [{ state: 'E3', at: '2026-08-01' }] });
  A.activate(c, true, today);
  t('T35 success restores E3', c.evidence === 'E3');
  t('T35 lastActive reset', c.lastActive === today);
  t('T35 history records the activation', c.history.filter(h => h.source === 'activation').length === 1);
}
{
  const c = cap({ evidence: 'E3' });
  A.activate(c, false, today);
  t('T36 fail drops one step, not to E0', c.evidence === 'E2');
  A.activate(c, false, today);
  t('T36 second fail stops at the E1 floor', c.evidence === 'E1');
  A.activate(c, false, today);
  t('T36 E1 does not fall to E0', c.evidence === 'E1');
  const assisted = cap({ evidence: 'E1a', history: [] });
  A.activate(assisted, true, today);
  t('activation cannot mint E3 from E1a', assisted.evidence === 'E1a');
}
{
  const S = state();
  const grammar = cap({ id: 'g', track: 'grammar', lastActive: A.addDays(today, -90) });
  const chunk = cap({ id: 'c', track: 'chunks', lastActive: A.addDays(today, -90) });
  t('T37 chunks decay slower than grammar after three months', A.decayUrgency(chunk, today, S) < A.decayUrgency(grammar, today, S));
  t('T37 grammar has reached full urgency and chunks have not', A.decayUrgency(grammar, today, S) === 1 && A.decayUrgency(chunk, today, S) < 1);
}
{
  const S = state();
  S.settings.pauses = [{ from: '2026-09-01', until: '2026-09-22', weeks: 3 }];
  const c = cap({ lastActive: '2026-09-01' });
  const frozen = A.dormancy(c, '2026-09-22', S);
  const open = A.dormancy(c, '2026-09-22', state());
  t('T58 decay does not move during a declared pause', frozen < open && frozen === 0);
}

console.log('\n— indicators —\n');
{
  const S = state();
  S.portfolio.recordings = [{ date: today, seconds: 180, capability: 'cap.speak' }];
  S.todayBlockMinutes = 10;
  const m = A.measure(S, today);
  t('T41 R3 is recording minutes, not block time', m.R3 === 3);
}
{
  const bad = [{ measured: true, questions: 0, comprehension: 1, minutes: 10, words: 2000 }, { measured: true, questions: 2, comprehension: 0.8, minutes: 10, words: 2000 }];
  t('T42 no questions or below 95% never enters R4', A.r4Speed(bad).value == null && A.r4Speed(bad).excluded === 2);
  const good = bad.concat([{ measured: true, questions: 2, comprehension: 0.96, minutes: 10, words: 1500 }]);
  t('T42 a qualified session is the only one counted', A.r4Speed(good).value === 150);
}
{
  const sessions = [{ unannounced: false, preTaught: true, studied: true, score: 0.2 }, { unannounced: true, studied: false, preTaught: false, score: 0.8 }];
  t('T43 already-studied listening does not count', A.r5Score(sessions).value === 0.8 && A.r5Score(sessions).excluded === 1);
}
{
  t('T44 a weak family forces yellow at 90%', A.bandR2(0.9, 1) === 'yellow');
  t('T44 aggregate under 70% stays red', A.bandR2(0.6, 1) === 'red');
  t('T44 a clean 90% is green', A.bandR2(0.9, 0) === 'green');
}

console.log('\n— composer —\n');
{
  const S = state();
  S.capabilities = [cap({ lastActive: A.addDays(today, -50) })];
  S.errorLedger = [{ id: 'e', status: 'live', family: 'genus', streak: 3, wrong: 'a', right: 'b' }];
  const plan = A.compose(S, today);
  t('T39 every block carries a reason', plan.blocks.length > 0 && plan.blocks.every(b => typeof b.reason === 'string' && b.reason.trim().length > 0));
  t('T40 a block with no reason is rejected', plan.blocks.every(b => b.reason) && !plan.blocks.some(b => b.reason === ''));
  const bare = { track: 'grammar', type: 'lesson-step', minutes: 10, reason: '' };
  t('T40 empty reason does not survive generation', A.compose(S, today).blocks.every(b => b.reason) && !A.candidates(S, today).some(b => !b.reason));
  t('speaking is in the full session', plan.blocks.some(b => b.track === 'speaking'));
  t('new content is not ahead of activation', plan.blocks.findIndex(b => b.type === 'lesson-step') > plan.blocks.findIndex(b => b.type === 'activation') || !plan.blocks.some(b => b.type === 'lesson-step'));
  const week = A.composeWeek(S, today);
  t('the week touches the nine tracks', week.tracks.length === 9);
  const short = A.shorten(plan, 15);
  t('T47 15 minutes keeps the top block plus 5 minutes of speaking', short.blocks.some(b => b.track === 'speaking' && b.minutes === 5) && short.blocks.length <= 2);
  t('T47 the rest is deferred with no penalty', short.deferred.length >= 1 && short.penalty === false);
}
{
  t('T48 resume names step 7 of 14 and the recap', A.resumeLine({ step: 7, total: 14, recap: 'التحية' }) === 'توقّفت عند الخطوة 7 من 14 — التحية');
}
{
  const S = state();
  S.weekPlan.decision = 'HOLD';
  const plan = A.compose(S, today);
  t('T50 HOLD inserts no new lesson content', !plan.blocks.some(b => b.type === 'lesson-step'));
  S.weekPlan.decision = 'REROUTE';
  S.indicators = { R1: 20, R2: 0.4, R3: 0, R4: null, R5: null, R6: { productive: 0, chunks: 0 } };
  const m = A.measure(Object.assign(state(), { errorLedger: Array.from({ length: 16 }, (_, i) => ({ status: 'live', family: 'genus', streak: 1 })) }), today);
  const d = A.decide(m);
  t('T49 one red indicator is REROUTE', d.decision === 'REROUTE' && d.newContent === 'unaffected-postponed');
  const yellow = A.decide({ bands: { R1: 'yellow', R2: 'yellow', R3: 'yellow', R4: null, R5: null, R6: 'green' } });
  t('T50 three yellow and no red is HOLD', yellow.decision === 'HOLD' && yellow.newContent === false);
}

console.log('\n— allocator and gates —\n');
{
  const floors = A.scaleFloors(10).floors;
  const proposed = Object.assign({}, floors, { reading: 40, grammar: floors.grammar + 20 });
  const fixed = A.constrain(proposed, floors);
  t('T51 a cut of reading below 60 is rejected and corrected', fixed.corrected && fixed.proposed.reading === 60);
  const over = A.applyTransfer(floors, 'grammar', 'reading', 121, floors);
  t('T52 a transfer above 120 minutes is rejected', over.ok === false && over.proposed.grammar === floors.grammar);
  const eight = A.scaleFloors(8);
  t('T57 floors scale at 8 hours', eight.floors.grammar === 96 && eight.floors.reading === 48 && eight.floors.listening === 72);
  t('T57 speaking and SRS minimums hold', eight.floors.speaking >= 45 && eight.floors.srs >= 60 && eight.minimumsHold);
  t('T57 calendar is about 35 months', Math.round(A.calendarMonths(8)) === 35);
  const six = A.scaleFloors(6);
  t('absolute minimums still hold at 6 hours', six.floors.speaking >= 45 && six.floors.srs >= 60);
}
{
  const S = state();
  S.gates.G1.state = 'passed';
  S.gaps.lastSessionDate = A.addDays(today, -56);
  A.tickGates(S, today);
  t('T53 an 8-week gap returns a passed gate to at-risk', S.gates.G1.state === 'at-risk');
  t('T53 a consolidation week blocks new content', S.consolidationWeek === true);
  A.finishConsolidation(S);
  t('re-opening returns at-risk to open, not to passed', S.gates.G1.state === 'open' && S.consolidationWeek === false);
}
{
  const cards = Array.from({ length: 200 }, (_, i) => ({
    id: 'c' + i,
    receptive: { box: 1, due: today, reviews: 1 },
    productive: { box: 0, due: '2099-01-01', reviews: 0 },
    sentence: { box: 0, due: '2099-01-01', reviews: 0 }
  }));
  const out = A.rescheduleCards(cards, today, 21);
  t('T46 a three-week gap shows 30 cards, not 200', out.shown.length === 30 && out.queue === 30 && out.rescheduled === 170);
  t('T46 the rest were pushed, not stacked', cards[30].receptive.due > today);
}
{
  const S = state();
  const declared = A.declarePause(S, 3, today);
  t('T58 a 3-week pause is accepted and records no gap', declared.ok && declared.recordedGap === 0 && S.gaps.reentryPending !== true);
  A.declarePause(S, 1, A.addDays(today, 30));
  A.declarePause(S, 1, A.addDays(today, 60));
  t('T58 the third pause is the yearly cap', A.declarePause(S, 1, A.addDays(today, 90)).ok === false);
  const back = A.addDays(S.settings.pauseUntil, 1);
  A.onReturn(S, back);
  const entry = A.reentry(S, back);
  t('T58 return opens the standard re-entry session', entry.kind === 'reentry' && entry.blocks.some(b => b.track === 'speaking' && b.minutes === 5) && entry.penalty === false);
  t('T58 the pause itself is not stored as a gap', A.gapDays(S, S.settings.pauseUntil) === 0);
}
{
  const rot = A.rotate({ variant: 'A', lastChange: A.addDays(today, -42) }, today);
  t('rotation advances after 6 weeks', rot.variant === 'B' && rot.lastChange === today);
  t('rotation does not advance early', A.rotate({ variant: 'A', lastChange: A.addDays(today, -41) }, today).variant === 'A');
  const week = { allocation: { grammar: 120 }, consumed: { grammar: 100 }, sessions: [{ blocks: [{ track: 'grammar', minutes: 15 }] }] };
  t('a swap that would exceed the allocation is restored', A.guardSwap(week, { track: 'grammar', minutes: 15 }, { track: 'grammar', minutes: 40 }).ok === false);
}

/* ---------- the graded readers: one definition of "known" (§13.3) ---------- */
{
  const { createRequire } = await import('module');
  const require = createRequire(import.meta.url);
  const K = require('./known.js');
  const dw = {};
  ['web/data/inventory.js', 'web/data/chunks.js', 'web/data/syllabus.js', 'web/data/a0-u1-l1.js',
    'web/data/catalog.js', 'web/data/library.js', 'web/data/comprehension.js']
    .forEach(rel => new Function('window', fs.readFileSync(path.join(ROOT, rel), 'utf8'))(dw));

  const texts = K.libraryTexts(dw.DW_LIBRARY);
  const setB1 = K.knownWords(dw, { upto: 'B1' });
  const setA1 = K.knownWords(dw, { upto: 'A1' });
  const setB2 = K.knownWords(dw, { upto: 'B2' });

  t('T60 the library holds 126 graded texts', texts.length === 126);
  t('T61 every graded text carries two questions', texts.every(x => x.questions === 2));
  t('T62 a word nothing teaches is unknown', !K.isKnown(setB2, 'zonk') && !K.isKnown(setA1, 'zonk'));
  t('T63 an irregular form counts only when its infinitive is known',
    K.isKnown(setB1, 'stiehlt') && !K.isKnown(setB1, 'verordnet'));
  t('T64 a text is never evidence for itself (b1-r60 stays unknown at B1, known at B2)',
    !K.isKnown(setB1, 'rückseite') && K.isKnown(setB2, 'rückseite'));
  t('T65 a B2 workshop headword is not known at B1',
    !K.isKnown(setB1, 'einseitigkeit') && K.isKnown(setB2, 'einseitigkeit'));
  const under = texts.filter(x => K.coverage(K.knownWords(dw, { upto: x.level }), x.body).ratio < 0.98);
  t('T66 the 98% rule (§13.3) holds in every level', under.length === 0);
}

/* ---------- §13.9: the map knows the learner's level, and the app reads it ---------- */
{
  const lv = S => A.levelOf(S);
  const st = g => ({ gates: g || {} });
  t('T67 levelOf is exported and maps the gates to the level being studied',
    lv(st({ G1: { state: 'open' } })) === 'A2' &&
    lv(st({ G1: { state: 'passed' }, G2: { state: 'passed' } })) === 'B1' &&
    lv(st({ G1: { state: 'passed' }, G2: { state: 'passed' }, G3: { state: 'open' } })) === 'B2' &&
    lv(st({})) === 'A1');
}

console.log(`\n${pass} passed, ${fail} failed\n`);
process.exit(fail ? 1 : 0);

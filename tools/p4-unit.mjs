import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const w = { DW: {} };
global.window = w;
new Function('window', fs.readFileSync(path.join(ROOT, 'web/engine/exam.js'), 'utf8'))(w);
new Function('window', fs.readFileSync(path.join(ROOT, 'web/engine/generator.js'), 'utf8'))(w);
new Function('window', fs.readFileSync(path.join(ROOT, 'web/engine/tracks.js'), 'utf8'))(w);
const E = w.DW.exam;
const G = w.DW.generator;
let pass = 0, fail = 0;
const t = (n, c) => { if (c) { pass++; console.log('  ✓', n); } else { fail++; console.log('  ✗', n); } };

const zero = E.schreibenTask([{ id: 'inhalt', score: 0 }, { id: 'aufbau', score: 5 }]);
t('a zero axis zeroes the writing task', zero.score === 0 && zero.zeroed);
const kept = E.schreibenTask([{ id: 'inhalt', score: 4 }, { id: 'aufbau', score: 3 }]);
t('writing score is the axis sum when none is zero', kept.score === 7 && !kept.zeroed);
const gate = E.noCompensation([
  { id: 'lesen', score: 80 }, { id: 'hoeren', score: 50 }, { id: 'schreiben', score: 90 }, { id: 'sprechen', score: 70 }
]);
t('no compensation: one module under 60 fails the exam', !gate.pass && gate.failed.length === 1 && gate.compensation === false);
t('telc needs both written and oral bars', E.telcPass(140, 50) && !E.telcPass(140, 40));
const closed = E.readiness({ errorLedger: [{ status: 'live' }], exam: { mocks: [] }, portfolio: { mastery: [] } });
t('readiness stays closed when any condition fails', !closed.open);
const open = E.readiness({
  errorLedger: [],
  exam: { mocks: [{ full: true, modules: ['lesen', 'hoeren', 'schreiben', 'sprechen'].map(id => ({ id, score: 70 })) }] },
  portfolio: {
    recordings: [
      { tag: 'discussion', seconds: 1200, longPause: false },
      { tag: 'novel-summary', seconds: 200 }
    ],
    texts: [{ tag: 'essay', words: 420, minutes: 40, contentPoints: 4, clauseTypes: 3, errors: 2 }],
    listening: [{ podcast: true, unannounced: true, preTaught: false, studied: false, general: 0.8, detail: 0.6 }],
    reading: [1, 2, 3, 4, 5, 6].map(n => ({ novel: true, chapter: n, comprehension: 1, questions: 2 }))
  }
});
t('readiness opens only from evidence, not a self-click', open.open && open.masteryCount === 4);
const clicked = E.readiness({
  errorLedger: [],
  exam: { mocks: [{ full: true, modules: ['lesen', 'hoeren', 'schreiben', 'sprechen'].map(id => ({ id, score: 70 })) }] },
  portfolio: { mastery: E.MASTERY.map(id => ({ id, achieved: true })) }
});
t('a self-clicked mastery list does not open the gate', !clicked.open);
t('taper forbids new grammar inside 14 days', E.taper(3).active && E.taper(3).newGrammar === false);
t('taper is off before the window', !E.taper(20).active);
const cmp = E.compareRecordings([{ date: '2026-01-01', id: 'a' }, { date: '2026-09-01', id: 'b' }]);
t('portfolio compares oldest with newest', cmp.ready && cmp.oldest.id === 'a' && cmp.newest.id === 'b');
const bad = G.instance([{ de: 'Ich bin hier.', why: '', cap: 'x' }], 0);
t('generator refuses an instance without a rationale', bad === null);
const good = G.instance([{ de: 'Ich bin hier.', key: 'Ich bin hier.', why: 'bin مع ich', cap: 'cap.test', lessonId: 'a0' }], 0);
t('generator instance has key, rationale, and capability', good && good.key && good.rationale && good.capabilityId);
const late = E.scorePaper([{ id: 'a', key: 'x' }, { id: 'b', key: 'y' }], { a: 'x' }, { late: { b: true } });
t('a late mock item is wrong', late.score === 50 && late.misses.length === 1);
const claimed = E.scorePaper([{ id: 'a', key: 'x' }], { a: 'x' }, { wouldHaveKnown: { a: true } });
t('I would have known does not score', claimed.score === 0);
t('no exam date means no taper', !E.taper(null).active);
const fast = w.DW.tracks.readingSession({ id: 't', questions: [{ prompt: 'q', key: 'a' }, { prompt: 'r', key: 'b' }], words: 20 }, { q: 'a', r: 'b' }, 1000);
t('a reading glance does not enter R4', fast.measured === false && fast.counted === false);
const weak = w.DW.tracks.readingSession({ id: 't', questions: [{ prompt: 'q', key: 'a' }, { prompt: 'r', key: 'b' }], words: 40 }, { q: 'a', r: 'no' }, 20000);
t('reading under 95% is stored out of R4', weak.measured && !weak.counted);
const heard = w.DW.tracks.listeningSession({ id: 'h', audio: true, r5: true, questions: [{ prompt: 'q', key: 'a' }], target: 0.8 }, { q: 'a' }, { audioPlayed: true, studied: true });
t('already heard listening does not enter R5', heard.score === 1 && !heard.counted);
const order = G.wortstellung([{ de: 'Ich bin hier.', key: 'Ich bin hier.', why: 'bin مع ich', cap: 'cap.test' }], 0);
t('wortstellung instance keeps its key', order && order.key === 'Ich bin hier');

/* ---------- §12.4 mock protocol: a module is not a mock ---------- */
{
  const S = { exam: {}, portfolio: { recordings: [] }, errorLedger: [] };
  const r0 = E.recordMockModule(S, 'lesen', 80);
  t('a module result outside a session is not a mock', r0.recorded === false && (S.exam.mocks || []).length === 0);
  const started = E.startMock(S, 1);
  t('starting mock 1 opens a session', started.started === true && S.exam.mockSession.n === 1);
  const off = E.startMock({ exam: {} }, 9);
  t('the protocol has eight mocks, not nine', off.started === false);
  const a = E.recordMockModule(S, 'lesen', 80);
  const b = E.recordMockModule(S, 'hoeren', 82);
  const c = E.recordMockModule(S, 'schreiben', 65);
  t('three of four modules do not make a mock yet',
    a.recorded && b.recorded && c.recorded && !a.full && !b.full && !c.full && (S.exam.mocks || []).length === 0);
  const unknown = E.recordMockModule(S, 'lesen-und-hoeren', 50);
  t('an unknown module is refused', unknown.recorded === false);
  const d = E.recordMockModule(S, 'sprechen', 70);
  t('the fourth module closes the mock as full', d.recorded && d.full === true && S.exam.mocks.length === 1);
  t('the full record carries the four sections', (d.mock.modules || []).length === 4 && d.mock.official === false);
  t('the session is closed after the mock', S.exam.mockSession === null);
  t('mockState reports one full mock of eight', (() => { const st = E.mockState(S);
    return st.fullMocks === 1 && st.plan.length === 8 && st.plan.filter(p => p.done).length === 1; })());
  const g = E.readiness(S);
  t('readiness still needs mastery evidence, not only the mock', !g.modulesOk === false && g.open === false && g.masteryOk === false);
  /* with the mastery evidence present, the gate opens — which it could not before,
     because no full mock could be produced by the app. */
  S.portfolio = {
    recordings: [{ tag: 'discussion', seconds: 1200, longPause: false },
      { tag: 'novel-summary', seconds: 200 }],
    texts: [{ tag: 'essay', words: 420, minutes: 40, contentPoints: 4, clauseTypes: 3, errors: 2 }],
    listening: [{ podcast: true, unannounced: true, preTaught: false, studied: false, general: 0.8, detail: 0.6 }],
    reading: [1, 2, 3, 4, 5, 6].map(n => ({ novel: true, chapter: n, comprehension: 1, questions: 2 }))
  };
  const open2 = E.readiness(S);
  t('a full mock the app can produce now opens the readiness gate: ' + open2.masteryCount + ' / 6 capabilities',
    open2.modulesOk === true && open2.masteryCount >= 4 && open2.open === true);
  /* a module under the bar keeps it closed even with everything else in place */
  const S2 = { exam: {}, portfolio: S.portfolio, errorLedger: [] };
  E.startMock(S2, 2);
  E.recordMockModule(S2, 'lesen', 80);
  E.recordMockModule(S2, 'hoeren', 80);
  E.recordMockModule(S2, 'schreiben', 55);
  E.recordMockModule(S2, 'sprechen', 80);
  t('one module under 65 keeps the gate closed', E.readiness(S2).open === false && E.readiness(S2).modulesOk === false);
}

/* ---------- §7 R6: a harvested material word is a card, and it says so ---------- */
{
  const w2 = { DW: { today: () => '2026-10-04', plusDays: () => '2026-10-04', persist: () => {} } };
  w2.DW.session = { S: { srs: { cards: [] } } };
  new Function('window', fs.readFileSync(path.join(ROOT, 'web/engine/practice.js'), 'utf8'))(w2);
  const win = w2;
  const P = win.DW.practice;
  P.introduce([{ de: 'das Schlüsselwort', ar: 'الكلمة المفتاحية', example: 'Ich markiere jedes Schlüsselwort.',
    level: 'B2', material: true, source: 'b2-w01' }]);
  P.introduce([{ de: 'der Tisch', ar: 'الطاولة', level: 'A1' }]);
  const cards = win.DW.session.S.srs.cards;
  const mat = cards.filter(c => c.material)[0];
  const plain = cards.filter(c => c.de === 'der Tisch')[0];
  t('a material card carries its flag and its source lesson', !!mat && mat.source === 'b2-w01' && mat.level === 'B2');
  t('a lesson card is not material and has no source', !!plain && plain.material === false && plain.source === null);
  t('introducing the same material word twice writes one card',
    (() => { P.introduce([{ de: 'das Schlüsselwort', ar: 'الكلمة المفتاحية', material: true }]); return win.DW.session.S.srs.cards.filter(c => c.de === 'das Schlüsselwort').length === 1; })());
}

/* ---------- §12.5: the recorders write exactly what the gate reads ---------- */
{
  const w2 = { DW: {} };
  const load = rel => new Function('window', fs.readFileSync(path.join(ROOT, rel), 'utf8'))(w2);
  ['web/data/inventory.js', 'web/data/chunks.js', 'web/data/syllabus.js', 'web/data/catalog.js',
    'web/data/library.js', 'web/data/comprehension.js', 'web/data/ladder.js', 'web/data/mastery-b2.js'].forEach(load);
  ['web/engine/tracks.js', 'web/engine/mastery.js', 'web/engine/exam.js'].forEach(load);
  const T = w2.DW.tracks, M = w2.DW.mastery, E2 = w2.DW.exam;
  const answers = qs => { const a = {}; (qs || []).forEach(q => { a[q.prompt] = q.key; }); return a; };
  const portfolio = { recordings: [], texts: [], listening: [], reading: [] };
  const byKind = k => M.list().filter(x => x.kind === k)[0];

  w2.DW_LIBRARY.B2.novel.chapters.forEach(ch => {
    portfolio.reading.push(T.readingSession(ch, answers(ch.questions), 150000));
  });
  const pod = w2.DW_LADDER.items.filter(i => i.podcast && i.level === 'B2')[0];
  portfolio.listening.push(T.listeningSession(pod, answers(pod.questions),
    { audioPlayed: true, studied: false, preTaught: false, transcriptBefore: false }));
  portfolio.recordings.push(M.speakingSession(byKind('novel-summary'), 210, { noNotes: true }));
  portfolio.recordings.push(M.speakingSession(byKind('discussion'), 1260, {}));
  portfolio.recordings.push(M.speakingSession(byKind('explain-rule'), 96, { noNotes: true }));
  portfolio.texts.push(M.writingSession(byKind('essay'),
    new Array(420).fill('Wort').join(' ') + ' weil dass obwohl ', 40 * 60000,
    { points: byKind('essay').points, errors: 3 }));
  portfolio.texts.push(M.writingSession(byKind('formal-letter'),
    new Array(120).fill('Wort').join(' ') + ' weil dass ', 20 * 60000,
    { points: byKind('formal-letter').points, errors: 2, purpose: 'achieved',
      axes: { inhalt: 2, aufbau: 2, ausdruck: 2, korrektheit: 2 } }));

  const ev = E2.masteryEvidence({ portfolio: portfolio });
  t('the six §12.5 evidences are producible by the recorders the app calls', Object.keys(ev).every(k => ev[k] === true), JSON.stringify(ev));
  t('a summary outside three to four minutes does not count',
    E2.masteryEvidence({ portfolio: { recordings: [M.speakingSession(byKind('novel-summary'), 120, { noNotes: true })], texts: [], listening: [], reading: portfolio.reading } }).novel === false);
  t('an explain-rule recording that used notes does not count',
    E2.masteryEvidence({ portfolio: { recordings: [M.speakingSession(byKind('explain-rule'), 120, {})], texts: [], listening: [], reading: [] } })['explain-rule'] === false);
  t('a twenty-minute discussion with a long pause does not count',
    E2.masteryEvidence({ portfolio: { recordings: [M.speakingSession(byKind('discussion'), 1260, { longPause: true })], texts: [], listening: [], reading: [] } }).discussion20 === false);
  const S2 = {
    exam: { mocks: [{ n: 1, full: true, official: false, modules: [{ id: 'lesen', score: 80 }, { id: 'hoeren', score: 80 }, { id: 'schreiben', score: 70 }, { id: 'sprechen', score: 70 }] }] },
    errorLedger: [], portfolio: portfolio
  };
  const g = E2.readiness(S2);
  t('with a full mock and the recorded evidences the readiness gate opens', g.open === true, JSON.stringify({ open: g.open, masteryCount: g.masteryCount }));
}

console.log('\n' + pass + ' passed, ' + fail + ' failed\n');
process.exit(fail ? 1 : 0);

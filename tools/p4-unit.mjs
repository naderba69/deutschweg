import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const w = { DW: {} };
global.window = w;
new Function('window', fs.readFileSync(path.join(ROOT, 'web/engine/exam.js'), 'utf8'))(w);
new Function('window', fs.readFileSync(path.join(ROOT, 'web/engine/generator.js'), 'utf8'))(w);
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
  portfolio: { mastery: E.MASTERY.slice(0, 4).map(id => ({ id, achieved: true })) }
});
t('readiness opens only when all three conditions hold', open.open && open.masteryCount === 4);
t('taper forbids new grammar inside 14 days', E.taper(3).active && E.taper(3).newGrammar === false);
t('taper is off before the window', !E.taper(20).active);
const cmp = E.compareRecordings([{ date: '2026-01-01', id: 'a' }, { date: '2026-09-01', id: 'b' }]);
t('portfolio compares oldest with newest', cmp.ready && cmp.oldest.id === 'a' && cmp.newest.id === 'b');
const bad = G.instance([{ de: 'Ich bin hier.', why: '', cap: 'x' }], 0);
t('generator refuses an instance without a rationale', bad === null);
const good = G.instance([{ de: 'Ich bin hier.', key: 'Ich bin hier.', why: 'bin مع ich', cap: 'cap.test', lessonId: 'a0' }], 0);
t('generator instance has key, rationale, and capability', good && good.key && good.rationale && good.capabilityId);

console.log('\n' + pass + ' passed, ' + fail + ' failed\n');
process.exit(fail ? 1 : 0);

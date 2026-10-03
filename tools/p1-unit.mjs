/* Pure checks: ledger rules, 30-pattern checker, wortstellung scorer.
   No DOM. Run: node tools/p1-unit.mjs */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const w = { DW: {} };
global.window = w;
function load(rel) { new Function('window', fs.readFileSync(path.join(ROOT, rel), 'utf8'))(w); }
load('web/engine/storage.js');
load('web/engine/ledger.js');
load('web/engine/checker.js');

const DW = w.DW;
let pass = 0, fail = 0;
const t = (n, c) => { if (c) { pass++; console.log('  ✓', n); } else { fail++; console.log('  ✗', n); } };

console.log('\n— checker —\n');
t('exactly 30 patterns', DW.checker.PATTERNS.length === 30);
t('ids unique', new Set(DW.checker.PATTERNS.map(p => p.id)).size === 30);
const families = new Set(DW.ledger.FAMILIES);
t('every pattern family is one of the 14', DW.checker.PATTERNS.every(p => families.has(p.family)));

const clean = [
  'Ich heiße Mohamed.',
  'Ich bin seit drei Jahren hier.',
  'Ich bleibe, weil ich müde bin.',
  'Ich bleibe, weil ich heute keine Zeit habe.',
  'Guten Morgen, Anna!',
  'Das Mädchen trinkt Wasser.',
  'Ich habe heute keine Zeit.',
  'Ich gehe mit dem Vater.',
  'Das Geschenk ist für den Vater.',
  'Wie heißt du?',
  'Gute Nacht!',
  'Guten Abend!',
  'Siehe z.B. etwas anderes.',
  'Er sagte, er habe Zeit.',
  'Ich weiß, wie du heißt.',
  'Wir gehen mit uns.',
  'Ich trinke Wasser mit den Freunden.',
  'Tschüss, bis morgen!',
  'Mein Name ist Sara.',
  'Die Straße ist lang.',
  'Das Mädchen liest.',
  'Es gibt den Mann.',
  'Ich muss lernen.',
  'Ich möchte Wasser.'
];
clean.forEach(s => {
  const hits = DW.checker.check(s);
  t('clean: ' + s, hits.length === 0);
  if (hits.length) console.log('     ', hits.map(h => h.id + ':' + h.snippet).join(' | '));
});

function has(text, id) { return DW.checker.check(text).some(h => h.id === id); }
t('seit drei Jahre', has('Ich bin seit drei Jahre hier.', 'praep.seit.temporal'));
t('missing comma only when verb is already final', has('Ich bleibe weil ich müde bin.', 'orth.comma.sub') && !has('Ich bleibe weil ich müde bin.', 'syntax.sub.verb.final'));
t('comma + verb-final', has('Ich bleibe weil ich bin müde.', 'orth.comma.sub') && has('Ich bleibe weil ich bin müde.', 'syntax.sub.verb.final'));
t('der Mädchen', has('der Mädchen spielt.', 'genus.impossible'));
t('ich hat', has('ich hat Zeit.', 'konj.ich.third'));
t('Strasse', has('Die Strasse ist lang.', 'orth.ss.for.sz'));
t('Madchen', has('Das Madchen liest.', 'orth.umlaut.missing'));
t('ein schöne', has('ein schöne Frau.', 'dekl.ein.adje'));
t('Guten Nacht', has('Guten Nacht!', 'dekl.guten.nacht'));
t('V2 adverb', has('Ich heute gehe nach Hause.', 'syntax.v2.adverb'));
t('Wie du heißt', has('Wie du heißt?', 'wortstellung.wfrage'));
t('mit mich', has('Komm mit mich.', 'kasus.mit.acc'));
t('muß', has('Ich muß gehen.', 'orth.sz.for.ss'));
t('zwei Kind', has('zwei Kind spielen.', 'plural.cardinal'));
t('es gibt dem', has('es gibt dem Mann etwas.', 'kasus.esgibt'));
t('für dem', has('für dem Vater', 'praep.acc.article'));
t('mit die', has('mit die Frau', 'praep.dative.article'));
t('vor drei Tage', has('vor drei Tage', 'praep.vor.temporal'));
t('wir hat', has('wir hat Zeit.', 'konj.wir.third'));
t('ß start', has('ßuper', 'orth.sz.initial'));
t('ich heißen', has('Ich heißen Mohamed.', 'konj.ich.inf'));
t('framing names the limit', /الثلاثين/.test(DW.checker.framing(1)) && /لم أفحصه/.test(DW.checker.framing(1)) && /وجدتُ 1/.test(DW.checker.framing(1)));

console.log('\n— ledger —\n');
DW.session.S = DW.storage.defaultState();
DW.persist = () => {};
const a = DW.ledger.log({ wrong: 'ڤاتر', right: 'فاتر', family: 'aussprache', source: 'lesson' });
const b = DW.ledger.log({ wrong: 'ڤاتر', right: 'فاتر', family: 'aussprache', source: 'lesson' });
t('duplicate increments streak, no second line', a.id === b.id && b.streak === 1 && DW.session.S.errorLedger.length === 1);
t('new error is watched, not live', a.status === 'watched' && DW.session.S.indicators.R1 === 0);

DW.ledger.review(a.id, false);
t('one failed review does not promote', a.status === 'watched' && a.failStreak === 1);
DW.clock.offset = 2 * 86400000;
DW.ledger.review(a.id, false);
t('two consecutive failed reviews promote to live', a.status === 'live' && DW.session.S.indicators.R1 === 1);

const c = DW.ledger.log({ wrong: 'واسر', right: 'ڤاسر', family: 'aussprache', source: 'lesson' });
t('same family+source merges into one line with examples', DW.session.S.errorLedger.filter(e => e.family === 'aussprache' && e.source === 'lesson').length === 1);
t('merged line keeps up to 3 examples', (c.examples || []).length >= 1 && (c.examples || []).length <= 3);

DW.session.S = DW.storage.defaultState();
const d = DW.ledger.log({ wrong: 'Jahre', right: 'Jahren', family: 'präposition', source: 'writing' });
d.status = 'live';
d.intervalIndex = 4;
d.due = DW.today();
DW.ledger.recomputeR1();
t('seeded live counts in R1', DW.session.S.indicators.R1 === 1);
DW.ledger.review(d.id, true);
t('one clean review at 45 days does not retire', d.status === 'live' && d.cleanAt45 === 1);
DW.clock.offset += 46 * 86400000;
d.due = DW.today();
DW.ledger.review(d.id, true);
t('second clean review at 45 days retires and leaves R1', d.status === 'retired' && DW.session.S.indicators.R1 === 0);

const zip = DW.storage.zipStore([{ name: 'state.json', data: new TextEncoder().encode('{"ok":1}') }]);
t('zip starts with PK local header', zip[0] === 0x50 && zip[1] === 0x4b && zip[2] === 0x03 && zip[3] === 0x04);
t('zip contains the filename', new TextDecoder().decode(zip).includes('state.json'));

load('web/data/bank.js');
const dup = DW.BANK.aussprache.filter(ex => {
  const texts = ex.optionen.map(o => o.text);
  return new Set(texts).size !== texts.length;
});
t('no pronunciation item repeats an option, including the right answer', dup.length === 0);
t('drill bank has 25 measurable items after the practice five', DW.BANK.drillItems('aussprache').length >= 25);

load('web/engine/renderers.js');
const orderItem = {
  tokens: ['weil', 'ich', 'habe', 'heute', 'keine', 'Zeit'],
  correct: ['weil', 'ich', 'heute', 'keine', 'Zeit', 'habe'],
  clause: 'sub', finite: 'habe', rightBracket: ['habe'],
  fields: { vorfeld: [], lsk: ['weil'], mittelfeld: ['ich', 'heute', 'keine', 'Zeit'], rsk: ['habe'], nachfeld: [] }
};
const half = DW.order.score(orderItem, ['weil', 'ich', 'habe', 'heute', 'keine', 'Zeit']);
t('wortstellung canonical example is half credit', half.credit === 0.5 && half.failed === 2);
t('feedback names Mittelfeld only at that failure', /Mittelfeld/.test(half.message) && !/Vorfeld/.test(half.message));
const full = DW.order.score(orderItem, orderItem.correct);
t('correct order is full credit', full.credit === 1 && full.failed === null);
const buried = DW.order.score(orderItem, ['weil', 'ich', 'heute', 'habe', 'keine', 'Zeit']);
t('verb buried in the Mittelfeld fails level 1', buried.credit === 0 && buried.failed === 1);

/* The level-1 rule must read the declared Vorfeld, not token index 1: "Das Buch"
   is one constituent written in two tokens. The old rule marked that sentence
   wrong and logged a false error against the learner. */
const mainItem = {
  tokens: ['Das', 'Buch', 'liegt', 'auf', 'dem', 'Tisch'],
  correct: ['Das', 'Buch', 'liegt', 'auf', 'dem', 'Tisch'],
  clause: 'main', finite: 'liegt',
  fields: { vorfeld: ['Das', 'Buch'], lsk: ['liegt'], mittelfeld: ['auf', 'dem', 'Tisch'], rsk: [], nachfeld: [] }
};
const mainFull = DW.order.score(mainItem, mainItem.correct);
t('a two-token Vorfeld still scores full credit', mainFull.credit === 1);
const mainMoved = DW.order.score(mainItem, ['Buch', 'Das', 'liegt', 'auf', 'dem', 'Tisch']);
t('and a Vorfeld whose inside order is broken loses credit at level 4',
  mainMoved.credit === 0.875 && mainMoved.failed === 4);

/* Two clauses with the same subject: the second "Ich" must keep its own field. */
const twoClauses = {
  tokens: ['Ich', 'möchte', 'einen', 'Kaffee', 'Ich', 'will', 'schlafen'],
  correct: ['Ich', 'möchte', 'einen', 'Kaffee', 'Ich', 'will', 'schlafen'],
  clause: 'main', finite: 'möchte',
  fields: { vorfeld: ['Ich'], lsk: ['möchte'], mittelfeld: ['einen', 'Kaffee', 'Ich', 'will', 'schlafen'], rsk: [], nachfeld: [] }
};
const twice = DW.order.score(twoClauses, twoClauses.correct);
t('a repeated token does not borrow the other occurrence\'s field', twice.credit === 1);

console.log(`\n${pass} passed, ${fail} failed\n`);
process.exit(fail ? 1 : 0);

/* P3.2 — the lexical layer. Black box where it matters: a real word table in a
   real DOM, the three forms that no lesson used before, and the coverage gate. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { createRequire } from 'module';
/* p3-unit.mjs is an ES module; the tools it reads (the vocab layer, the floor
   files) are CommonJS. */
const require = createRequire(import.meta.url);

const ROOT = '/home/user/deutschweg';
const FILES = [
  'engine/storage.js', 'engine/ledger.js', 'engine/checker.js', 'engine/renderers.js',
  'engine/practice.js', 'engine/adaptive.js', 'engine/tracks.js', 'engine/exam.js',
  'engine/generator.js', 'data/inventory.js', 'data/chunks.js', 'data/syllabus.js',
  'data/bank.js', 'data/a0-u1-l1.js', 'data/catalog.js', 'data/library.js',
  'data/comprehension.js', 'data/ladder.js', 'data/writing-b2.js', 'data/speaking-b2.js', 'data/exam-b2.js', 'app.js'
];
const html = fs.readFileSync(ROOT + '/web/index.html', 'utf8').replace(/<script src="[^"]+"><\/script>/g, '');
function boot() {
  const dom = new JSDOM(html, { runScripts: 'outside-only', url: 'https://localhost/', pretendToBeVisual: true });
  FILES.forEach(f => dom.window.eval(fs.readFileSync(ROOT + '/web/' + f, 'utf8')));
  dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
  return dom;
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
let pass = 0, fail = 0;
const t = (n, c, why) => { if (c) { pass++; console.log('  ✓', n); } else { fail++; console.log('  ✗', n, why ? '— ' + why : ''); } };
function clickText(win, text) {
  const b = [...win.document.querySelectorAll('button')].find(x => x.textContent.trim() === text);
  if (!b) throw new Error('missing button: ' + text);
  b.click();
  return b;
}

const A0 = ['a0-u1-l2', 'a0-u1-l3', 'a0-u1-l4', 'a0-u1-l5', 'a0-u1-l6'];
const FORMS = ['mcq', 'cloze', 'matching', 'hoeren', 'sprechen', 'flashcard', 'wortstellung', 'schreiben'];

console.log('\n— P3.2 lexical layer —\n');

/* ---------- the data itself ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  let floorOk = true, itemsOk = true, formsInA0 = new Set();
  A0.forEach(id => {
    const lesson = L[id];
    const wl = lesson.wortschatz || [];
    if (wl.length < 12) floorOk = false;
    wl.forEach(it => {
      if (!it.de || !it.pl || !it.ar || !it.ex || !it.err || !it.why || !it.fam) itemsOk = false;
    });
    lesson.schritte.forEach(st => {
      if (st.frage) formsInA0.add(st.type === 'hoeren' ? 'hoeren' : st.frage.art);
      if (st.type === 'sprechen') formsInA0.add('sprechen');
    });
    t(id + ': ' + lesson.schritte.filter(s => s.wortschatz).length + ' Wortschatz steps carry the list',
      lesson.schritte.filter(s => s.wortschatz).length >= 3);
  });
  t('every A0 lesson carries at least 12 words, complete to the last field', floorOk && itemsOk);
  t('A0 alone exercises all eight forms: ' + [...formsInA0].sort().join(' · '), FORMS.every(f => formsInA0.has(f)));

  const tricks = [];
  Object.values(L).forEach(l => l.schritte.forEach(s => { if (s.merkhilfe) tricks.push(s.merkhilfe.trick); }));
  const a0Tricks = [];
  A0.forEach(id => L[id].schritte.forEach(s => { if (s.merkhilfe) a0Tricks.push(s.merkhilfe.trick); }));
  t('A0 tricks: 15, all distinct', a0Tricks.length === 15 && new Set(a0Tricks).size === 15);

  const cov = win.DW_COVERAGE || [];
  const a0 = cov.find(c => c.level === 'A0');
  t('coverage table published: A0 ' + a0.items + '/' + a0.declared + ' (' + Math.round(a0.ratio * 100) + '%)', a0 && a0.ratio >= 0.8);

  const cards = win.DW_STEP_CARDS || {};
  const cardKeys = Object.keys(cards);
  t('step cards built for the flashcard steps: ' + cardKeys.length, cardKeys.length >= 5 && Object.values(cards).every(v => v[0].de && v[0].ar && v[0].level));
}

/* ---------- A1 — the second slice of the lexical layer ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  const rows = win.DW_SYLLABUS.lessons.filter(l => l.level === 'A1');
  let floorOk = true, itemsOk = true, stepsOk = true, ownOk = true;
  rows.forEach(row => {
    const lesson = L[row.id];
    const wl = lesson.wortschatz || [];
    if (wl.length < 14) floorOk = false;
    if (wl.length < Math.min(14, row.words.receptive)) ownOk = false;
    if (lesson.schritte.filter(s => s.wortschatz).length < 3) stepsOk = false;
    wl.forEach(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].forEach(k => { if (!it[k]) itemsOk = false; }));
  });
  t('A1: all ' + rows.length + ' lessons carry a word list on the 14-word floor', floorOk);
  t('A1: every item is complete to the last field', itemsOk);
  t('A1: every lesson has at least 3 Wortschatz steps', stepsOk);
  t('A1: every row meets the smaller of the floor and its own declared count', ownOk);

  const a1Tricks = [], a0Tricks = [];
  rows.forEach(row => L[row.id].schritte.forEach(s => { if (s.merkhilfe) a1Tricks.push(s.merkhilfe.trick); }));
  A0.concat(['a0-u1-l1']).forEach(id => (L[id] ? L[id].schritte : []).forEach(s => { if (s.merkhilfe) a0Tricks.push(s.merkhilfe.trick); }));
  t('A1 tricks: ' + a1Tricks.length + ', all distinct and none borrowed from A0',
    a1Tricks.length === rows.length * 3 && new Set(a1Tricks).size === a1Tricks.length && !a1Tricks.some(x => a0Tricks.includes(x)));

  const cov = (win.DW_COVERAGE || []).find(c => c.level === 'A1');
  t('coverage table published: A1 ' + cov.items + '/' + cov.declared + ' (' + Math.round(cov.ratio * 100) + '%)',
    cov && cov.ratio >= 0.8);
}

/* ---------- the word table in the DOM, the missing forms, the cards ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  const id = A0[4]; /* a0-u1-l6 */
  const lesson = L[id];
  /* open the last lesson of A0: everything before it is done, with evidence */
  const order = win.DW_SYLLABUS.lessons.map(l => l.id);
  const before = order.slice(0, order.indexOf(id));
  const S = win.DW.session.S;
  S.progress = before.map(x => ({ lessonId: x, state: 'completed' }));
  S.capabilities = before.map(x => ({ id: 'cap.' + x + '.core', evidence: 'E1', lastActive: '2026-10-02', history: [] }));
  S.capabilities.push({ id: 'cap.a0.sprechen.greeting20', evidence: 'E1', lastActive: '2026-10-02', history: [] });
  win.go('lesson');

  const steps = lesson.schritte;
  const showStep = i => {
    const p = (win.DW.session.S.progress || []).find(x => x.lessonId === id) || { lessonId: id, state: 'in_progress' };
    p.completedSteps = steps.slice(0, i).map(s => s.id);
    p.lastStepId = steps[i].id;
    const rest = (win.DW.session.S.progress || []).filter(x => x.lessonId !== id);
    win.DW.session.S.progress = rest.concat([p]);
    win.go('lesson');
  };
  const stepIndex = fn => steps.findIndex(fn);

  const wIdx = stepIndex(s => s.wortschatz && s.frage && s.frage.art === 'flashcard');
  showStep(wIdx);
  const rows = [...win.document.querySelectorAll('.vocab-row')];
  t('the word table renders a row per word', rows.length === steps[wIdx].wortschatz.length && rows.length >= 2);
  t('a row shows the German headword with its article and plural', /^(der|die|das)\s/.test(rows[0].querySelector('.vocab-de').textContent));
  t('a row shows the Arabic gloss', rows[0].querySelector('.vocab-ar').textContent.trim().length > 1);
  t('a row has a listen button', !!rows[0].querySelector('.vocab-say'));
  rows[0].querySelector('.vocab-toggle').click();
  t('the example and the usual error open on demand',
    rows[0].querySelector('.vocab-ex').textContent.length > 3 &&
    rows[0].querySelector('.vocab-err').textContent.indexOf('✗') === 0 &&
    rows[0].querySelector('.vocab-why').textContent.length > 3);
  t('the flashcard direction is receptive (German → Arabic)', win.document.querySelector('.fc').textContent.trim() === steps[wIdx].frage.de);
  clickText(win, 'أعرف');
  const cards = win.DW.session.S.srs.cards || [];
  const introduced = cards.find(c => c.de === steps[wIdx].frage.de);
  t('the word entered the review queue with its level', !!introduced && introduced.level === 'A0');
  t('next is enabled after the card', !win.document.querySelector('#next').disabled);

  const oIdx = stepIndex(s => s.frage && s.frage.art === 'wortstellung');
  showStep(oIdx);
  const want = steps[oIdx].frage.correct;
  want.forEach(w => {
    const b = [...win.document.querySelectorAll('.pool .token')].find(x => x.textContent === w);
    b.click();
  });
  clickText(win, 'تحقّق');
  const orderBox = win.document.querySelector('#q');
  t('word order: the built sentence is judged correct', !!win.document.querySelector('.layer.good'),
    orderBox ? orderBox.textContent.slice(0, 160) : 'no exercise box');
  if (!win.document.querySelector('.layer.good')) console.log('    DEBUG order:', JSON.stringify({ want: want, shown: win.document.querySelector('#q').textContent.slice(0, 200) }));

  const cIdx = stepIndex(s => s.frage && s.frage.art === 'cloze' && s.phase === 'Übungen');
  showStep(cIdx);
  const shown = [...win.document.querySelectorAll('.card .zeigt')].some(n => n.textContent.indexOf('____') >= 0);
  t('the cloze shows the sentence with a visible gap', shown);
  win.document.querySelector('.inp').value = steps[cIdx].frage.antworten[0];
  clickText(win, 'تحقّق');
  t('the cloze accepts the word and explains why', !!win.document.querySelector('.layer.good'));

  const wIdx2 = stepIndex(s => s.frage && s.frage.art === 'schreiben');
  showStep(wIdx2);
  const area = win.document.querySelector('textarea.write');
  t('writing opens a text area with a word floor', !!area && /الحد الأدنى/.test(win.document.body.textContent));
  area.value = 'ich heiße Sara. Ich komme aus Tunesien. Ich wohne in Sousse. Ich lerne die Zahl.';
  clickText(win, 'احفظ وافحص');
  const out = win.document.querySelector('.checker-out');
  t('writing runs the 30-pattern check and states its limit',
    !!out && /حدّ الفحص/.test(out.textContent) && !/صحّحتُ|corrected/.test(out.textContent));
  t('the writing check names the rule it found', /orth\.sentence\.lower|orth\.noun\.lower|Ich/.test(out.textContent));

  const iIdx = stepIndex(s => s.frage && s.frage.art === 'matching' && s.phase === 'Wortschatz');
  showStep(iIdx);
  const cols = [...win.document.querySelectorAll('.mcol')];
  let ok = cols.length === 2;
  for (let g = 0; g < 12; g++) {
    const left = [...cols[0].children].find(x => !x.classList.contains('done'));
    if (!left) break;
    left.click();
    const pair = steps[iIdx].frage.paare.find(p => p.links === left.textContent);
    const right = [...cols[1].children].find(r => r.textContent === pair.rechts && !r.classList.contains('done'));
    if (!right) { ok = false; break; }
    right.click();
  }
  t('matching pairs the word list with its glosses', ok && !!win.document.querySelector('.layer.good'));
}

/* ---------- the engine still answers honestly after the new forms ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  const id = A0[0];
  const lesson = L[id];
  const steps = lesson.schritte;
  const order = win.DW_SYLLABUS.lessons.map(l => l.id);
  const before = order.slice(0, order.indexOf(id));
  const S = win.DW.session.S;
  S.progress = before.map(x => ({ lessonId: x, state: 'completed' }));
  S.capabilities = before.map(x => ({ id: 'cap.' + x + '.core', evidence: 'E1', lastActive: '2026-10-02', history: [] }))
    .concat([{ id: 'cap.a0.sprechen.greeting20', evidence: 'E1', lastActive: '2026-10-02', history: [] }]);
  win.go('lesson');

  const idx = steps.findIndex(s => s.frage && s.frage.art === 'flashcard');
  const p = { lessonId: id, state: 'in_progress', completedSteps: steps.slice(0, idx).map(s => s.id), lastStepId: steps[idx].id };
  win.DW.session.S.progress = S.progress.filter(x => x.lessonId !== id).concat([p]);
  win.go('lesson');
  clickText(win, 'لا أعرف');
  const st = win.DW.session.S;
  t('a missed card lands in the ledger as a live error, not as a silent pass',
    (st.errorLedger || []).length === 1 && st.errorLedger[0].status === 'watched');
  t('a missed card never claims E1', !(st.capabilities || []).some(c => c.id.indexOf(id) === 0 && c.evidence === 'E1' && /flashcard/.test(c.id)));
  t('the miss is explained in Arabic', /الجواب والمثال|نسيان/.test(win.document.body.textContent));
}

/* ---------- A2 — the third slice of the lexical layer ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  const rows = win.DW_SYLLABUS.lessons.filter(l => l.level === 'A2');
  let floorOk = true, itemsOk = true, stepsOk = true, ownOk = true, countOk = true;
  rows.forEach(row => {
    const lesson = L[row.id];
    const wl = lesson.wortschatz || [];
    if (wl.length < 16) floorOk = false;
    if (wl.length < Math.min(16, row.words.receptive)) ownOk = false;
    if (wl.length !== row.words.receptive) countOk = false;
    if (lesson.schritte.filter(s => s.wortschatz).length < 3) stepsOk = false;
    wl.forEach(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].forEach(k => { if (!it[k]) itemsOk = false; }));
  });
  t('A2: all ' + rows.length + ' lessons carry a word list on the 16-word floor', floorOk);
  t('A2: every item is complete to the last field', itemsOk);
  t('A2: every lesson has at least 3 Wortschatz steps', stepsOk);
  t('A2: every row meets the smaller of the floor and its own declared count', ownOk);
  t('A2: every row matches its own declared count exactly', countOk);

  const a2Tricks = [], olderTricks = [];
  rows.forEach(row => L[row.id].schritte.forEach(s => { if (s.merkhilfe) a2Tricks.push(s.merkhilfe.trick); }));
  win.DW_SYLLABUS.lessons.filter(l => l.level === 'A0' || l.level === 'A1')
    .concat([{ id: 'a0-u1-l1' }])
    .forEach(row => (L[row.id] ? L[row.id].schritte : []).forEach(s => { if (s.merkhilfe) olderTricks.push(s.merkhilfe.trick); }));
  t('A2 tricks: ' + a2Tricks.length + ', all distinct and none borrowed from A0/A1',
    a2Tricks.length === rows.length * 3 && new Set(a2Tricks).size === a2Tricks.length && !a2Tricks.some(x => olderTricks.includes(x)));

  const cov = (win.DW_COVERAGE || []).find(c => c.level === 'A2');
  t('coverage table published: A2 ' + cov.items + '/' + cov.declared + ' (' + Math.round(cov.ratio * 100) + '%)',
    cov && cov.ratio >= 0.8);
}

/* ---------- B1 — the fourth slice of the lexical layer ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  const rows = win.DW_SYLLABUS.lessons.filter(l => l.level === 'B1');
  const ported = rows.filter(r => (L[r.id].wortschatz || []).length > 0);
  let itemsOk = true, stepsOk = true, countOk = true, tricksOk = true;
  ported.forEach(row => {
    const lesson = L[row.id];
    const wl = lesson.wortschatz || [];
    /* The map row declares its own count (unit 10 reads 37 and 36), and the compiler
       balances the list at most four words per step, so the step count is derived. */
    if (wl.length !== (row.words ? row.words.receptive : 40)) countOk = false;
    if (lesson.schritte.filter(s => s.wortschatz).length !== Math.ceil(wl.length / 4)) stepsOk = false;
    wl.forEach(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].forEach(k => { if (!it[k]) itemsOk = false; }));
    const tr = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe.trick);
    if (tr.length < 3 || new Set(tr).size !== tr.length) tricksOk = false;
  });
  t('B1: all ' + rows.length + ' lessons carry the lexical layer', ported.length === rows.length);
  t('B1: every ported item is complete to the last field', itemsOk);
  t('B1: every ported lesson carries exactly its declared words', countOk);
  t('B1: every ported lesson splits them over at most four words per step', stepsOk);
  t('B1: every ported lesson carries distinct Merkhilfen', tricksOk);

  const cov = (win.DW_COVERAGE || []).find(c => c.level === 'B1');
  t('coverage table published: B1 ' + cov.items + '/' + cov.declared + ' (' + Math.round(cov.ratio * 100) + '%)',
    cov && cov.ratio >= 0.8);
}

/* ---------- B2 vocabulary — route (C)'s two measures, against the floor ---------- */
{
  const { window: win } = boot();
  const floor = JSON.parse(fs.readFileSync(ROOT + '/tools/b2-vocab-floor.json', 'utf8'));
  const VOCAB = require('./vocab-b2.js');
  const ids = Object.keys(VOCAB).sort();
  const B2 = win.DW_LIBRARY && win.DW_LIBRARY.B2;
  const declared = {};
  (win.DW_SYLLABUS.lessons || []).forEach(l => { if (l.words && l.words.receptive) declared[l.id] = l.words.receptive; });
  const authored = ids.reduce((s, id) => s + (VOCAB[id].items || []).length, 0);
  const material = ids.reduce((s, id) => s + (VOCAB[id].material || []).length, 0);
  const tricks = ids.reduce((s, id) => s + (VOCAB[id].tricks || []).length, 0);
  const perRowOk = ids.every(id => (VOCAB[id].items || []).length === floor.authoredPerWorkshop &&
    (VOCAB[id].material || []).length === floor.materialPerWorkshop &&
    declared[id] === (VOCAB[id].items || []).length + (VOCAB[id].material || []).length);
  t('B2 vocab: ' + ids.length + ' workshops, floor ' + floor.workshops, ids.length >= floor.workshops);
  t('B2 vocab: authored ' + authored + ', floor ' + floor.authoredTotal, authored >= floor.authoredTotal);
  t('B2 vocab: verified material words ' + material + ', floor ' + floor.materialTotal, material >= floor.materialTotal);
  t('B2 vocab: level measured ' + (authored + material) + ', floor ' + floor.measuredTotal,
    authored + material >= floor.measuredTotal);
  t('B2 vocab: every workshop is 40 authored + 50 material = its declared 90', perRowOk);
  t('B2 vocab: the authored column is at the template ceiling, not below it (' + floor.authoredPerWorkshop + '/workshop)',
    ids.every(id => (VOCAB[id].items || []).length >= floor.authoredPerWorkshop));
  t('B2 vocab: each workshop carries 3 tricks with a German anchor', ids.every(id =>
    (VOCAB[id].tricks || []).length === 3 &&
    VOCAB[id].tricks.every(tr => tr.trick && tr.wie && tr.warum && tr.anchor && !/[\u0600-\u06FF]/.test(tr.anchor))));
  t('B2 vocab: the level is wired into the compiled catalogue',
    !!(B2 && B2.articles) && ids.every(id => !!win.DW_LESSONS[id]) && tricks >= floor.tricks * ids.length / 20 - 0.5);
}

/* ---------- B2 reading — the level's own material measure ---------- */
{
  const { window: win } = boot();
  const B2 = win.DW_LIBRARY.B2;
  const floor = JSON.parse(fs.readFileSync(ROOT + '/tools/b2-reading-floor.json', 'utf8'));
  const wc = s => String(s).trim().split(/\s+/).filter(Boolean).length;
  const arts = B2.articles || [];
  const chs = (B2.novel && B2.novel.chapters) || [];
  const shortest = (list) => list.length ? Math.min.apply(null, list.map(x => wc(x.body))) : 0;
  const total = (list) => list.reduce((s, x) => s + wc(x.body), 0);
  t('B2 reading: 20 articles and a six-chapter novella', arts.length === 20 && chs.length === 6);
  t('B2 reading: every text carries exactly two questions',
    arts.concat(chs).every(x => (x.questions || []).length === 2));
  t('B2 reading: shortest article ' + shortest(arts) + ' words, floor ' + floor.article,
    arts.every(a => wc(a.body) >= floor.article));
  t('B2 reading: shortest chapter ' + shortest(chs) + ' words, floor ' + floor.chapter,
    chs.every(c => wc(c.body) >= floor.chapter));
  t('B2 reading: articles total ' + total(arts) + ' words, floor ' + floor.articlesTotal,
    total(arts) >= floor.articlesTotal);
  t('B2 reading: novella total ' + total(chs) + ' words, floor ' + floor.novelTotal,
    total(chs) >= floor.novelTotal);
  /* §13.3's 98% rule has one implementation — tools/measure-b2-reading.js — and it
     runs inside npm test before this file. What is checked here is that the floor
     file still carries the coverage keys, so the measure cannot lose them quietly. */
  t('B2 reading: the floor records the 98% rule (articles ' + (floor.articlesLowestPermille / 10) +
    '% · novella ' + (floor.chaptersLowestPermille / 10) + '%)',
    Number.isFinite(floor.articlesLowestPermille) && Number.isFinite(floor.chaptersLowestPermille) &&
    floor.articlesLowestPermille > 0 && floor.chaptersLowestPermille > 0);
}

/* ---------- the B2 mock paper — real parts, official split, scored in the DOM ---------- */
{
  const { window: win } = boot();
  const floor = JSON.parse(fs.readFileSync(ROOT + '/tools/b2-exam-floor.json', 'utf8'));
  const bank = win.DW_EXAM_BANK && win.DW_EXAM_BANK.B2;
  const map = win.DW_EXAM && win.DW_EXAM.B2;
  const parts = (id) => (bank && bank[id] && bank[id].parts) || [];
  const itemsOf = (id) => parts(id).reduce((a, p) => a.concat(p.items), []);
  const lesen = itemsOf('lesen'), hoeren = itemsOf('hoeren');
  const AR = /[\u0600-\u06FF]/;
  t('paper: the page loads the bank (data/exam-b2.js)',
    fs.readFileSync(ROOT + '/web/index.html', 'utf8').includes('data/exam-b2.js'));
  t('paper: Lesen ' + parts('lesen').length + ' Teile · ' + lesen.length + ' items, floor ' +
    floor.lesenItems, parts('lesen').length >= floor.lesenParts && lesen.length >= floor.lesenItems);
  t('paper: Hören ' + parts('hoeren').length + ' Teile · ' + hoeren.length + ' items, floor ' +
    floor.hoerenItems, parts('hoeren').length >= floor.hoerenParts && hoeren.length >= floor.hoerenItems);
  t('paper: the official splits (9 · 6 · 6 · 6 · 3) and (10 · 6 · 6 · 8)',
    JSON.stringify(parts('lesen').map(p => p.items.length)) === JSON.stringify([9, 6, 6, 6, 3]) &&
    JSON.stringify(parts('hoeren').map(p => p.items.length)) === JSON.stringify([10, 6, 6, 8]));
  t('paper: every item has a German prompt and its key among its options',
    lesen.concat(hoeren).every(i => i.prompt && !AR.test(i.prompt) && (i.options || []).includes(i.key)));
  t('paper: declared unofficial — never presented as a Goethe paper',
    bank.official === false && !!bank.note && bank.lesen.official === false && bank.hoeren.official === false);
  t('paper: the map (DW_EXAM.B2) names the parts and items',
    !!map && map.lesenItems === lesen.length && map.hoerenItems === hoeren.length &&
    map.lesenParts === parts('lesen').length && map.hoerenParts === parts('hoeren').length);

  /* run it in the DOM: the paper must offer the first part's material and score */
  win.DW.go('exam');
  const start = Array.from(win.document.querySelectorAll('button'))
    .filter(b => b.textContent.trim() === 'قراءة 65 د')[0];
  let ran = false, sawMaterial = false;
  if (start) {
    start.click();
    const view = win.document.querySelector('#view');
    const text = view ? view.textContent : '';
    sawMaterial = text.indexOf('Zuordnung') >= 0 && text.indexOf('Marlene') >= 0 && text.indexOf('9 · 6 · 6 · 6 · 3') >= 0;
    /* answer one item: the first option button of the first item */
    const opt = Array.from(view.querySelectorAll('button')).filter(b => /^a Marlene$/.test(b.textContent.trim()))[0];
    ran = !!opt;
    if (opt) opt.click();
  }
  t('paper: the exam view runs it — part header, material and items', ran && sawMaterial);
  win.DW.go('home');
}

/* ---------- B2 timed writings — the exam's shape, against the floor ---------- */
{
  const { window: win } = boot();
  const floor = JSON.parse(fs.readFileSync(ROOT + '/tools/b2-writing-floor.json', 'utf8'));
  const bank = win.DW_WRITING_BANK && win.DW_WRITING_BANK.B2;
  const map = win.DW_WRITING && win.DW_WRITING.B2;
  const tasks = (bank && bank.tasks) || [];
  const words = s => String(s || '').trim().split(/\s+/).filter(Boolean).length;
  const AR = /[\u0600-\u06FF]/;
  t('writing: the page loads the bank (data/writing-b2.js)',
    fs.readFileSync(ROOT + '/web/index.html', 'utf8').includes('data/writing-b2.js'));
  t('writing: ' + tasks.length + ' timed writings, floor ' + floor.tasks, tasks.length >= floor.tasks);
  t('writing: ' + bank.minutes + ' minutes, floor ' + floor.minutes, bank.minutes >= floor.minutes);
  t('writing: Task 1 ≥' + bank.task1.minWords + ' words, Task 2 ≥' + bank.task2.minWords,
    bank.task1.minWords >= floor.minWords1 && bank.task2.minWords >= floor.minWords2);
  t('writing: ' + floor.pointsPerTask + ' content points per task, every task',
    tasks.every(t2 => t2.task1.points.length >= floor.pointsPerTask && t2.task2.points.length >= floor.pointsPerTask));
  t('writing: every situation and prompt is German', tasks.every(t2 =>
    t2.situation && !AR.test(t2.situation) && !AR.test(t2.task1.prompt) && !AR.test(t2.task2.prompt) &&
    words(t2.situation) <= 60));
  t('writing: the four rubric axes on every writing',
    tasks.every(t2 => JSON.stringify(t2.axes) === JSON.stringify(bank.axes)));
  t('writing: the map (DW_WRITING.B2) names what exists',
    !!map && map.timed === tasks.length && map.minutes === bank.minutes);
}

/* ---------- B2 recorded discussions — the exam's shape, against the floor ---------- */
{
  const { window: win } = boot();
  const floor = JSON.parse(fs.readFileSync(ROOT + '/tools/b2-speaking-floor.json', 'utf8'));
  const bank = win.DW_SPEAKING_BANK && win.DW_SPEAKING_BANK.B2;
  const map = win.DW_SPEAKING && win.DW_SPEAKING.B2;
  const tasks = (bank && bank.tasks) || [];
  const words = s => String(s || '').trim().split(/\s+/).filter(Boolean).length;
  const AR = /[\u0600-\u06FF]/;
  t('speaking: the page loads the bank (data/speaking-b2.js)',
    fs.readFileSync(ROOT + '/web/index.html', 'utf8').includes('data/speaking-b2.js'));
  t('speaking: ' + tasks.length + ' recorded discussions, floor ' + floor.tasks, tasks.length >= floor.tasks);
  t('speaking: ' + bank.prepMinutes + ' min preparation + ' + bank.minutes + ' min exam',
    bank.prepMinutes >= floor.prepMinutes && bank.minutes >= floor.minutes);
  t('speaking: presentation 4 min, discussion 5 min',
    tasks.every(t2 => t2.presentation.seconds >= floor.presentationSeconds &&
      t2.discussion.seconds >= floor.discussionSeconds));
  t('speaking: ' + floor.pointsPerPart + ' points in each part, every task',
    tasks.every(t2 => t2.presentation.points.length >= floor.pointsPerPart &&
      t2.discussion.points.length >= floor.pointsPerPart));
  t('speaking: the six axes on every discussion',
    tasks.every(t2 => JSON.stringify(t2.axes) === JSON.stringify(bank.axes)) && bank.axes.length === floor.axes);
  t('speaking: every situation, input, topic and prompt is German and short', tasks.every(t2 =>
    t2.situation && !AR.test(t2.situation) && words(t2.situation) <= 50 &&
    t2.input && !AR.test(t2.input) && words(t2.input) <= 45 &&
    !AR.test(t2.presentation.topic) && words(t2.presentation.topic) <= 25 &&
    !AR.test(t2.discussion.prompt) && words(t2.discussion.prompt) <= 25));
  t('speaking: the map (DW_SPEAKING.B2) names what exists',
    !!map && map.recorded === tasks.length && map.axes === bank.axes.length);
}

/* ---------- the listening ladder — R5's content ---------- */
{
  const { window: win } = boot();
  const items = (win.DW_LADDER && win.DW_LADDER.items) || [];
  const floor = JSON.parse(fs.readFileSync(ROOT + '/tools/ladder-floor.json', 'utf8'));
  const audio = items.filter(i => i.audio !== false);
  const printOnly = items.filter(i => i.audio === false);
  const per = lv => audio.filter(i => i.level === lv).length;
  t('ladder: ' + audio.length + ' audio items, floor ' + floor.audio, audio.length >= floor.audio);
  ['A1', 'A2', 'B1', 'B2'].forEach(lv =>
    t('ladder: ' + lv + ' ' + per(lv) + ' audio items, floor ' + floor[lv], per(lv) >= floor[lv]));
  t('ladder: every audio item carries two questions with a key inside its options',
    audio.every(i => (i.questions || []).length === 2 &&
      i.questions.every(q => (q.options || []).includes(q.key))));
  t('ladder: the dialect item stays print-only and out of R5 (' + printOnly.length + ')',
    printOnly.length > 0 && printOnly.every(i => i.r5 === false));
  t('ladder: the audio warning is present', !!(win.DW_LADDER.voice && win.DW_LADDER.not));
}

/* ---------- B2 — the workshops, route (C)'s two measures ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  const rows = win.DW_SYLLABUS.lessons.filter(l => l.level === 'B2');
  const ported = rows.filter(r => (L[r.id].wortschatz || []).length > 0);
  let itemsOk = true, countOk = true, materialOk = true, stepsOk = true, tricksOk = true,
      sumsOk = true, noDupOk = true;
  const allTricks = [];
  ported.forEach(row => {
    const lesson = L[row.id];
    const wl = lesson.wortschatz || [];
    const mat = lesson.material || [];
    if (wl.length !== 40) countOk = false;
    if (mat.length !== 50) materialOk = false;
    /* route (C): the authored 40 + the 50 material words are exactly the 90
       the map row declares — never 89, never 91. */
    if (row.words && wl.length + mat.length !== row.words.receptive) sumsOk = false;
    if (lesson.schritte.length < 24 || lesson.schritte.length > 36) stepsOk = false;
    if (lesson.schritte.filter(s => s.wortschatz).length !== 10) stepsOk = false;
    wl.forEach(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam', 'blank'].forEach(k => {
      if (!it[k]) itemsOk = false;
    }));
    /* a material word must not be one of the workshop's own 40 headwords:
       the row would then pay twice for one word. */
    const cores = new Set(wl.map(it => String(it.de).replace(/^(der|die|das)\s+/i, '').split(/\s+/).pop().toLowerCase()));
    mat.forEach(w => {
      const core = String(w).replace(/^(der|die|das)\s+/i, '').split(/\s+/).pop().toLowerCase();
      if (cores.has(core)) noDupOk = false;
    });
    const tr = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe.trick);
    if (tr.length !== 3 || new Set(tr).size !== tr.length) tricksOk = false;
    allTricks.push.apply(allTricks, tr);
  });
  t('B2: all ' + rows.length + ' workshops carry the lexical layer', ported.length === rows.length && rows.length === 20);
  t('B2: every authored item is complete to the last field, blank included', itemsOk);
  t('B2: every workshop carries exactly its 40 authored words', countOk);
  t('B2: every workshop carries exactly its 50 verified material words', materialOk);
  t('B2: authored 40 + material 50 equals the row\'s declared 90', sumsOk);
  t('B2: a material word is never one of the same workshop\'s headwords', noDupOk);
  t('B2: every workshop stays inside the 24–36 step window with 10 Wortschatz steps', stepsOk);
  t('B2: ' + allTricks.length + ' Merkhilfen across the level, all distinct', new Set(allTricks).size === allTricks.length);
  t('B2: every workshop carries three distinct Merkhilfen', tricksOk);

  const cov = (win.DW_COVERAGE || []).find(c => c.level === 'B2');
  t('coverage table published: B2 ' + cov.items + '/' + cov.declared + ' authored (' +
    Math.round(cov.ratio * 100) + '%) · material ' + cov.material + ' (' + Math.round(cov.materialRatio * 100) + '%)',
    cov && cov.materialRatio >= 0.8 && cov.material === cov.declared);
}

console.log('\n' + pass + ' passed, ' + fail + ' failed\n');
process.exit(fail ? 1 : 0);

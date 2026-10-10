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
  'engine/practice.js', 'engine/adaptive.js', 'engine/tracks.js', 'engine/mastery.js', 'engine/exam.js',
  'engine/generator.js', 'data/inventory.js', 'data/chunks.js', 'data/syllabus.js',
  'data/bank.js', 'data/a0-u1-l1.js', 'data/catalog.js', 'data/library.js',
  'data/comprehension.js', 'data/ladder.js', 'data/mastery-b2.js', 'data/writing-b2.js', 'data/speaking-b2.js', 'data/exam-b2.js', 'app.js'
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

/* ---------- A1 reading questions — keys must be grounded in their source text ---------- */
{
  const { window: win } = boot();
  const texts = Object.fromEntries(win.DW_LIBRARY.A1.map(x => [x.id, x]));
  const q = (id, n) => texts[id].questions[n];
  t('A1 a1-r2 asks the price actually stated for coffee',
    q('a1-r2', 1).prompt.includes('سعر القهوة') && q('a1-r2', 1).key === '2 يورو' &&
      texts['a1-r2'].body.includes('Ein Kaffee kostet zwei Euro'));
  t('A1 a1-r3 asks for the party day stated by the invitation',
    q('a1-r3', 1).prompt.includes('متى الحفل') && q('a1-r3', 1).key === 'السبت' &&
      texts['a1-r3'].body.includes('Am Samstag mache ich eine laute Party.'));
  t('A1 a1-r7 asks what the speaker buys before the party',
    q('a1-r7', 1).prompt.includes('المتكلم') && q('a1-r7', 1).key === 'ماء' &&
      texts['a1-r7'].body.includes('Ich kaufe noch Wasser'));
  t('A1 a1-r8 questions match the first action and final drink',
    q('a1-r8', 0).prompt.includes('تغسل أولًا') && q('a1-r8', 0).key === 'الخضار' &&
      q('a1-r8', 1).prompt.includes('في نهاية النص') && q('a1-r8', 1).key === 'الماء' &&
      texts['a1-r8'].body.includes('Zuerst wasche ich das ganze Gemüse') && texts['a1-r8'].body.includes('kaltes Wasser'));
  t('A1 a1-r9 asks for the work bus time stated in the schedule',
    q('a1-r9', 0).prompt.includes('حافلة العمل') && q('a1-r9', 0).key === 'السابعة' &&
      texts['a1-r9'].body.startsWith('Der Bus kommt um sieben Uhr'));
  t('A1 a1-r10 verifies the explicit bed-rest duration',
    q('a1-r10', 1).prompt.includes('كم يومًا') && q('a1-r10', 1).key === 'يومان' &&
      texts['a1-r10'].body.includes('Bleiben Sie zwei Tage'));
}

/* ---------- the mock protocol in the UI — a session the learner can open ---------- */
{
  const { window: win } = boot();
  win.DW.go('exam');
  const view = win.document.querySelector('#view');
  const texts = Array.from(view.querySelectorAll('.meta')).map(x => x.textContent);
  t('mock: the exam view states the protocol (0 full mocks of 8)',
    texts.some(x => x.indexOf('0 محاكاة كاملة من 8') >= 0) && texts.some(x => x.indexOf('لا جلسة مفتوحة') >= 0));
  t('mock: the eight planned mocks are listed with their months and purposes',
    texts.filter(x => /^محاكاة \d+ · شهر \d+/.test(x)).length === 8);
  const start = Array.from(view.querySelectorAll('button'))
    .filter(b => b.textContent.trim() === 'ابدأ محاكاة كاملة 1')[0];
  t('mock: the view offers starting mock 1', !!start);
  if (start) start.click();
  const after = Array.from(win.document.querySelector('#view').querySelectorAll('.meta')).map(x => x.textContent);
  t('mock: starting it opens a session with the four sections missing',
    after.some(x => x.indexOf('جلسة 1 مفتوحة') >= 0) &&
    after.some(x => x.indexOf('قراءة (الورقة) · سماع (الورقة) · كتابة (بنك الكتابة) · تحدّث (تسجيل)') >= 0));
  const close = Array.from(win.document.querySelector('#view').querySelectorAll('button'))
    .filter(b => b.textContent.trim() === 'أغلق جلسة المحاكاة 1 بلا محاكاة')[0];
  t('mock: an open session can be closed without claiming a mock', !!close);
  if (close) close.click();
  const back = Array.from(win.document.querySelector('#view').querySelectorAll('.meta')).map(x => x.textContent);
  t('mock: closing it leaves zero full mocks',
    back.some(x => x.indexOf('0 محاكاة كاملة من 8') >= 0) && back.some(x => x.indexOf('لا جلسة مفتوحة') >= 0));
  win.DW.go('home');
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
  clickText(win, 'سماع');
  const visibleClips = [...win.document.querySelectorAll('#view button')]
    .filter(b => /^(A1|A2|B1|B2) ·/.test(b.textContent.trim()));
  t('listening screen opens from the learner home screen and lists the clips',
    visibleClips.length === items.length);
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

/* ---------- learner routes and evidence feedback ---------- */
{
  const { window: win } = boot();
  clickText(win, 'سماع');
  const audioButtons = [...win.document.querySelectorAll('#view button')]
    .filter(b => /^A1 ·/.test(b.textContent.trim()));
  t('the home listening control opens its ladder screen', audioButtons.length === 8);
  audioButtons[0].click();
  win.SpeechSynthesisUtterance = function (text) { this.text = text; };
  win.speechSynthesis = { cancel() {}, speak(u) { if (u.onend) u.onend(); } };
  const play = [...win.document.querySelectorAll('#view button')].find(b => b.textContent.trim() === 'تشغيل مرة');
  play.click();
  t('a listening clip can be played only once per attempt', play.disabled === true);
  [...win.document.querySelectorAll('#view button')].find(b => b.textContent.trim() === 'neun').click();
  [...win.document.querySelectorAll('#view button')].find(b => b.textContent.trim() === 'acht').click();
  clickText(win, 'سلّم');
  t('listening feedback shows the correct answer', /الإجابة الصحيحة: acht/.test(win.document.querySelector('#view').textContent));
}
{
  const { window: win } = boot();
  clickText(win, 'قراءة');
  const level = win.document.querySelector('#view select[aria-label="مستوى القراءة"]');
  let graded = [...win.document.querySelectorAll('#view button')].filter(b => /^A1 ·/.test(b.textContent.trim()));
  t('reading opens at the learner level instead of listing all 136 texts', !!level && level.value === 'A1' && graded.length === 20);
  level.value = 'B2';
  level.dispatchEvent(new win.Event('change'));
  graded = [...win.document.querySelectorAll('#view button')].filter(b => /^B2 ·/.test(b.textContent.trim()));
  t('the reading list can be filtered to B2', graded.length === 26);
  level.value = 'A1';
  level.dispatchEvent(new win.Event('change'));
  clickText(win, 'A1 · بطاقة الفندق');
  [...win.document.querySelectorAll('#view button')].find(b => b.textContent.trim() === 'Anna').click();
  [...win.document.querySelectorAll('#view button')].find(b => b.textContent.trim() === 'ثلاث').click();
  clickText(win, 'سلّم السؤالين');
  t('reading feedback names the right answer after a miss', /الإجابة الصحيحة: Sara/.test(win.document.querySelector('#view').textContent));
}
{
  const { window: win } = boot();
  const rows = win.DW_LIBRARY.A1;
  const byId = id => rows.find(x => x.id === id);
  t('A1 café question asks a value stated by the source', /Kaffee kostet zwei Euro/.test(byId('a1-r2').body) && byId('a1-r2').questions[1].key === '2 يورو');
  t('A1 party question follows the Saturday invitation', /Am Samstag mache ich eine laute Party/.test(byId('a1-r3').body) && byId('a1-r3').questions[1].key === 'السبت');
  t('A1 recipe questions follow the first action and evening drink', byId('a1-r8').questions[0].key === 'الخضار' && byId('a1-r8').questions[1].key === 'الماء');
  t('A1 bed-rest question is answered explicitly', /Bleiben Sie zwei Tage/.test(byId('a1-r10').body) && byId('a1-r10').questions[1].key === 'يومان');
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

/* ---------- §13.9 reaches the learner: chunks per level, false friends, pronunciation ---------- */
{
  const { window: win } = boot();
  const syl = win.DW_SYLLABUS;
  const at = level => { win.DW.session.S.gates.G1 = { state: 'passed' }; win.DW.session.S.gates.G2 = { state: 'passed' }; win.DW.session.S.gates.G3 = { state: level === 'B2' ? 'open' : 'locked' }; };
  const texts = () => win.document.querySelector('#view').textContent;

  at('B1');
  win.DW.go('chunks');
  t('map: the chunk drill states the learner\'s level (B1, not A1)',
    texts().indexOf('مئة قالب لكل مستوى، وهذه قوالب B1') >= 0);
  const b1 = texts().indexOf(syl.chunks.B1[0].ar) >= 0;
  const a1 = texts().indexOf(syl.chunks.A1[0].ar) >= 0;
  t('map: it drills the B1 list (' + syl.chunks.B1[0].ar.slice(0, 24) + '…) and not A1\'s', b1 && !a1);

  win.DW.go('falsefriends');
  const ff = texts();
  t('map: the false-friend screen lists B1 items (' + (syl.falseFriends.B1[0].de) + ' ≠ ' + syl.falseFriends.B1[0].other + ')',
    ff.indexOf(syl.falseFriends.B1[0].de + ' ≠ ' + syl.falseFriends.B1[0].other) >= 0 && ff.indexOf('أصدقاء كذّابون · B1') >= 0);
  t('map: every listed false friend carries its Arabic interference line',
    syl.falseFriends.B1.every(f => ff.indexOf(f.ar) >= 0));

  win.DW.go('pronunciation');
  const pr = texts();
  t('map: the pronunciation screen lists the §13.7 items of the level (' + syl.pronunciation.B1.length + ')',
    pr.indexOf('النطق · B1') >= 0 && syl.pronunciation.B1.every(x => pr.indexOf(x) >= 0));

  at('B2');
  win.DW.go('chunks');
  const b2 = texts();
  t('map: at B2 the drill switches to the B2 list (' + syl.chunks.B2[0].ar.slice(0, 24) + '…)',
    b2.indexOf(syl.chunks.B2[0].ar) >= 0 && b2.indexOf(syl.chunks.B1[0].ar) < 0);

  /* the composer names the same level in the block's reason */
  win.DW.session.S.learner.weeklyHours = 10;
  const day = win.DW.adaptive.compose(win.DW.session.S, win.DW.today());
  const ch = (day.blocks || []).filter(b => b.track === 'chunks')[0];
  t('map: the session composer\'s chunk block names B2 too',
    !!ch && ch.reason.indexOf('قالب B2') >= 0, ch && ch.reason);
  win.DW.go('home');
}

/* ---------- the productive column: the step's words and a hit chunk enter the queue ---------- */
{
  const { window: win } = boot();
  const id = 'a1-u1-l1';
  const lesson = win.DW_LESSONS[id];
  const order = win.DW_SYLLABUS.lessons.map(l => l.id);
  const before = order.slice(0, order.indexOf(id));
  const S = win.DW.session.S;
  S.progress = before.map(x => ({ lessonId: x, state: 'completed' }));
  S.capabilities = before.map(x => ({ id: 'cap.' + x + '.core', evidence: 'E1', lastActive: '2026-10-02', history: [] }));
  const steps = lesson.schritte;
  const wStep = steps.filter(st => st.wortschatz && st.wortschatz.length && st.frage && st.frage.art !== 'flashcard')[0]
    || steps.filter(st => st.wortschatz && st.wortschatz.length)[0];
  const p = { lessonId: id, state: 'in_progress', completedSteps: steps.slice(0, steps.indexOf(wStep)).map(x => x.id), lastStepId: wStep.id };
  S.progress = S.progress.filter(x => x.lessonId !== id).concat([p]);
  win.go('lesson');
  /* answer the step for real, so the path under test is the app's, not the test's */
  const f = wStep.frage;
  let answered = false;
  if (f && f.art === 'cloze') {
    win.document.querySelector('.inp').value = f.antworten[0];
    const ok = [...win.document.querySelectorAll('button')].find(x => x.textContent.trim() === 'تحقّق');
    if (ok) { ok.click(); answered = !!win.document.querySelector('.layer.good'); }
  } else if (f && f.art === 'mcq') {
    const right = (f.optionen || []).find(o => o.id === f.richtig);
    const b = [...win.document.querySelectorAll('button')].find(x => right && x.textContent.trim() === right.text);
    if (b) b.click();
    const ok = [...win.document.querySelectorAll('button')].find(x => x.textContent.trim() === 'تحقّق');
    if (ok) { ok.click(); answered = !!win.document.querySelector('.layer.good'); }
  }
  t('productive: the Wortschatz step was answered correctly through the lesson screen', answered, 'step ' + wStep.id + ' art ' + (f && f.art));
  const cards = win.DW.session.S.srs.cards || [];
  const words = wStep.wortschatz.map(x => x.de);
  t('productive: the whole Wortschatz step entered the queue (' + words.length + ' words)',
    words.every(d => cards.some(c => c.de === d)));
  const one = cards.filter(c => c.de === words[0])[0];
  t('productive: each card carries its own receptive and productive schedules',
    !!one && !!one.receptive && !!one.productive && one.receptive.due !== one.productive.due && one.level === lesson.level);
  t('productive: the flashcard word is not the only card of the step',
    cards.filter(c => words.indexOf(c.de) >= 0).length === words.length);
  win.go('home');
}
{
  const { window: win } = boot();
  const S = win.DW.session.S;
  S.gates.G1 = { state: 'passed' }; S.gates.G2 = { state: 'passed' };
  win.DW.go('chunks');
  const chunk = win.DW_SYLLABUS.chunks.B1[0];
  const input = win.document.querySelector('#view input');
  input.value = chunk.de;
  const btn = [...win.document.querySelectorAll('#view button')].find(b => b.textContent.trim() === 'سجّل');
  btn.click();
  const cards = win.DW.session.S.srs.cards || [];
  const card = cards.filter(c => c.de === chunk.de)[0];
  t('productive: a chunk hit inside the time becomes a chunk card of its level',
    !!card && card.chunk === true && card.level === 'B1' && !!card.productive);
  t('productive: the chunk log records the level with the attempt',
    (S.chunksLog || []).some(x => x.de === chunk.de && x.level === 'B1' && x.counted === true));
  win.DW.go('home');
}

/* ---------- §12.5: the mastery tasks are on a screen, and the essay lands in the portfolio ---------- */
{
  const { window: win } = boot();
  win.DW.go('mastery');
  const view = win.document.querySelector('#view');
  const text = () => win.document.querySelector('#view').textContent;
  t('mastery: the screen names §12.5 and counts the six evidences',
    text().indexOf('الشواهد الستة لجهوزية §12.5') >= 0 && text().indexOf('0 / 6') >= 0);
  t('mastery: all five tasks are listed',
    win.DW.mastery.list().every(t2 => text().indexOf(t2.title) >= 0));
  t('mastery: the six evidences are listed with their names',
    ['مناقشة 20 دقيقة', 'مقال 400 كلمة', 'بودكاست بلا نص', 'النوفيلة: ستة فصول + ملخّص', 'رسالة رسمية', 'شرح قاعدة بلا ملاحظات']
      .every(n => text().indexOf(n) >= 0));

  const areas = Array.from(win.document.querySelectorAll('#view textarea.write'));
  t('mastery: the two written tasks open a writing area', areas.length === 2);
  const essay = areas[0];
  const block = 'Der Verkehr in der Stadt wächst, weil die Bevölkerung wächst. Ich finde, dass ein kostenloser Bus sinnvoll ist, obwohl die Kosten hoch sind. Ein Argument dafür ist der Platz: Wer den Bus nimmt, braucht kein Auto. ';
  essay.value = new Array(12).fill(block).join('');
  const panel = essay.parentNode;
  const counter = () => panel.textContent;
  essay.dispatchEvent(new win.Event('input'));
  t('mastery: the word count and the clause types are live (400+ words)',
    /الكلمات: 432 \/ الحد 400/.test(counter()) && /أنواع الجمل التابعة: 3/.test(counter()));
  const points = Array.from(panel.querySelectorAll('button')).filter(b => b.textContent.indexOf('غطّيتها: ') === 0);
  t('mastery: the essay lists its four content points', points.length === 4);
  points.forEach(b => b.click());
  const save = Array.from(panel.querySelectorAll('button')).filter(b => b.textContent.trim() === 'سجّل الكتابة في المحفظة')[0];
  t('mastery: the essay can be written into the portfolio', !!save);
  if (save) save.click();
  const rec = (win.DW.session.S.portfolio.texts || []).filter(x => x.tag === 'essay')[0];
  t('mastery: the record carries tag, words, content points, clause types and the checker count',
    !!rec && rec.words === 432 && rec.contentPoints === 4 && rec.clauseTypes === 3 && typeof rec.errors === 'number' && typeof rec.minutes === 'number');
  t('mastery: the gate reads the recorded essay as an evidence',
    win.DW.exam.masteryEvidence(win.DW.session.S).essay400 === true);
  t('mastery: the task list marks the essay done, and the screen counts one evidence',
    win.DW.mastery.state(win.DW.session.S.portfolio).filter(x => x.kind === 'essay')[0].done === true &&
    win.document.querySelector('#view').textContent.indexOf('1 / 6') >= 0);
  win.DW.go('home');
}

/* ---------- §7 R6: the material column has a path into the queue ---------- */
{
  const { window: win } = boot();
  const text = () => win.document.querySelector('#view').textContent;
  win.DW.go('harvest');
  t('harvest: before a lesson is done, the screen names the lessons that carry material',
    text().indexOf('أنهِ درسًا يحمل مادة') >= 0 && text().indexOf('R6') >= 0);

  const S = win.DW.session.S;
  const all = Object.keys(win.DW_LESSONS).filter(id => (win.DW_LESSONS[id].material || []).length);
  t('harvest: the material column exists somewhere (B2 workshops)', all.length >= 20);
  S.progress = (S.progress || []).concat([{ lessonId: 'b2-w01', state: 'completed', completedSteps: [] }]);
  win.DW.go('harvest');
  const lesson = win.DW_LESSONS['b2-w01'];
  t('harvest: the completed lesson appears with its full word count (0 / ' + lesson.material.length + ')',
    text().indexOf(lesson.title.ar) >= 0 && text().indexOf('0 / ' + lesson.material.length + ' محصودة') >= 0);
  const chips = () => [...win.document.querySelectorAll('#view button')].filter(b => b.getAttribute('dir') === 'ltr');
  t('harvest: every material word of the lesson is a chip', chips().length >= lesson.material.length);
  t('harvest: the chips carry the German words themselves',
    lesson.material.slice(0, 5).every(w => chips().some(b => b.textContent.trim() === w)));

  const target = lesson.material[0];
  chips().filter(b => b.textContent.trim() === target)[0].click();
  const input = win.document.querySelector('#view input.meaning');
  t('harvest: a chip opens the meaning field, and the word is shown with its sentence', !!input &&
    text().indexOf(target) >= 0);
  const saveBtn = [...win.document.querySelectorAll('#view button')].filter(b => b.textContent.trim() === 'احفظ البطاقة')[0];
  t('harvest: the card can be saved', !!saveBtn);
  saveBtn.click();
  t('harvest: an empty meaning does not write a card',
    !(win.DW.session.S.srs.cards || []).some(c => c.material));
  input.value = 'المعنى الذي كتبه المتعلم';
  saveBtn.click();
  const card = (win.DW.session.S.srs.cards || []).filter(c => c.material)[0];
  t('harvest: the card carries the word, the learner\'s meaning, the lesson level and its source',
    !!card && card.de === target && card.ar === 'المعنى الذي كتبه المتعلم' &&
    card.level === 'B2' && card.source === 'b2-w01');
  t('harvest: the card is a normal non-chunk card at box 0 in both directions',
    !!card && card.chunk === false && card.receptive.box === 0 && card.productive.box === 0);
  const gates = win.DW.session.S.gates || {};
  gates.G1 = { state: 'passed' }; gates.G2 = { state: 'passed' }; gates.G3 = { state: 'open' };
  win.DW.session.S.gates = gates;
  const r6 = win.DW.adaptive.measure(win.DW.session.S);
  t('harvest: R6 does not count it yet, at B2\'s real target — the box, not the harvest, is the measure',
    r6.R6.productive === 0 && r6.R6Detail.target === 2600 && r6.R6Detail.chunks === 0);
  t('harvest: the counter moves to 1 / ' + lesson.material.length + ' and the chip is done',
    win.document.querySelector('#view').textContent.indexOf('1 / ' + lesson.material.length + ' محصودة') >= 0 &&
    [...win.document.querySelectorAll('#view button')].filter(b => b.getAttribute('dir') === 'ltr' && b.disabled).length >= 1);
  t('harvest: the example sentence carrying the word is found in the lesson\'s own German',
    typeof card.example === 'string' && card.example.toLowerCase().indexOf('schlüsselwort') >= 0,
    card.example);
  win.DW.go('home');
}

/* ---------- §12.4/§12.5: one session, four modules, and the gate sees a full mock ---------- */
{
  const { window: win } = boot();
  const S = win.DW.session.S;
  const src = fs.readFileSync(ROOT + '/web/app.js', 'utf8');
  const calls = (src.match(/storeModule\(/g) || []).length;
  const papers = ['قراءة 65 د', 'سماع 40 د'].every(run => src.indexOf(run) >= 0);
  t('mock: each module reaches the recorder from its own screen (four call sites + two paper runners)',
    calls === 5 /* four calls and the definition */ && papers &&
    src.indexOf("storeModule('schreiben'") >= 0 && src.indexOf("storeModule('sprechen'") >= 0,
    'calls ' + calls);

  win.DW.go('exam');
  const start = Array.from(win.document.querySelectorAll('button'))
    .filter(b => b.textContent.trim() === 'ابدأ محاكاة كاملة 1')[0];
  t('mock: the exam view opens a full-mock session', !!start);
  if (start) start.click();
  win.DW.storeModule('lesen', 80, false);
  win.DW.storeModule('hoeren', 72, false);
  const third = win.DW.session.S.exam.mockSession;
  t('mock: three modules leave the session open with one missing',
    !!third && third.modules.schreiben == null && third.modules.sprechen == null);
  win.DW.storeModule('schreiben', 66, false);
  win.DW.storeModule('sprechen', 70, false);
  t('mock: the fourth module closes the session and writes one full record',
    win.DW.session.S.exam.mockSession === null &&
    (win.DW.session.S.exam.mocks || []).filter(m => m.full).length === 1 &&
    (win.DW.session.S.exam.mocks || [])[0].modules.length === 4);
  win.DW.go('exam');
  const texts = () => Array.from(win.document.querySelectorAll('#view *')).map(n => n.textContent);
  t('mock: the view counts one full mock and no open session',
    texts().some(x => x.indexOf('1 محاكاة كاملة من 8') >= 0) &&
    texts().some(x => x.indexOf('جلسة 1 مفتوحة') < 0));
  const gate = win.DW.exam.readiness(win.DW.session.S);
  t('mock: the gate reads the full mock as its module condition',
    gate.modulesOk === true && gate.evidence && Object.keys(gate.evidence).length === 6);
  t('mock: a module under the bar would keep it closed',
    win.DW.exam.readiness({ exam: { mocks: [{ full: true, modules: [
      { id: 'lesen', score: 80 }, { id: 'hoeren', score: 80 }, { id: 'schreiben', score: 64 }, { id: 'sprechen', score: 80 }] }] },
      errorLedger: [] }).modulesOk === false);
  t('mock: 61 in the last section is under the 65 bar — the run above proves the gate reads scores, not attendance',
    win.DW.exam.readiness({ exam: { mocks: [{ full: true, modules: [
      { id: 'lesen', score: 80 }, { id: 'hoeren', score: 72 }, { id: 'schreiben', score: 66 }, { id: 'sprechen', score: 61 }] }] },
      errorLedger: [] }).modulesOk === false);
  win.DW.go('home');
}

/* ---------- the offline cache lists what the shell loads ---------- */

/* The production rule is explicit: every web change raises the app's memory so the
   browser is not stuck on the old version. That only works if the precache list is
   complete — a file the shell loads but the cache never lists is fetched once and
   then frozen at whatever version the learner happened to install. Both halves are
   checked here: the shell's own script list, and that the cache name is versioned. */
{
  const sw = fs.readFileSync(ROOT + '/web/sw.js', 'utf8');
  const index = fs.readFileSync(ROOT + '/web/index.html', 'utf8');
  const listed = new Set([...sw.matchAll(/'([^']+)'/g)].map(m => m[1])
    .filter(x => x.endsWith('.js') || x.endsWith('.css') || x.endsWith('.png') ||
                 x.endsWith('.mp3') || x.endsWith('.webmanifest') || x.endsWith('.svg') ||
                 x === './' || x === 'index.html'));
  const shell = [...index.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
  const missing = shell.filter(f => !listed.has(f));
  t('cache: every script the shell loads is in the offline cache list',
    missing.length === 0, missing.join(' '));
  const dead = [...listed].filter(f => f !== './' && !fs.existsSync(ROOT + '/web/' + f));
  t('cache: every listed asset exists on disk', dead.length === 0, dead.join(' '));
  const m = sw.match(/const CACHE = 'deutschweg-v(\d+)'/);
  t('cache: the app memory is versioned (deutschweg-v<n>)', !!m && Number(m[1]) >= 10);
}

/* ---------- a failing run never lowers a floor ---------- */

/* The floor files are ratchets. Every measure may raise its own with --write-floor,
   but a run that failed a gate must not write: otherwise one red run silently
   rewrites the reference to the broken state and the next green run proves nothing.
   This is not theory — it happened in this repository. The check reads the eight
   measures and insists on the refusal guard ahead of the write. */
{
  const measures = fs.readdirSync(ROOT + '/tools').filter(f => /^measure-.*\.js$/.test(f));
  const unguarded = measures.filter(f => {
    const src = fs.readFileSync(ROOT + '/tools/' + f, 'utf8');
    const i = src.indexOf('if (WRITE) {');
    if (i < 0) return true;
    return !/if \(fail\) \{[\s\S]{0,160}?refused:/.test(src.slice(i, i + 400));
  });
  t('floors: every measure refuses to write a floor from a failing run (' + measures.length + ' measures)',
    measures.length >= 8 && unguarded.length === 0, unguarded.join(' '));
}

console.log('\n' + pass + ' passed, ' + fail + ' failed\n');
process.exit(fail ? 1 : 0);

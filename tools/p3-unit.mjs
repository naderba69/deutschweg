/* P3.2 — the lexical layer. Black box where it matters: a real word table in a
   real DOM, the three forms that no lesson used before, and the coverage gate. */
import { JSDOM } from 'jsdom';
import fs from 'fs';

const ROOT = '/home/user/deutschweg';
const FILES = [
  'engine/storage.js', 'engine/ledger.js', 'engine/checker.js', 'engine/renderers.js',
  'engine/practice.js', 'engine/adaptive.js', 'engine/tracks.js', 'engine/exam.js',
  'engine/generator.js', 'data/inventory.js', 'data/chunks.js', 'data/syllabus.js',
  'data/bank.js', 'data/a0-u1-l1.js', 'data/catalog.js', 'data/library.js',
  'data/comprehension.js', 'data/ladder.js', 'app.js'
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

/* ---------- every ported A1 and B1 lesson, through the real DOM ----------
   Authored levels declare two order sentences and a writing task per row;
   the writing floor is 30 words at A1 (Start Deutsch 1 Teil 2) and 50 at B1. */
[['A1', 30], ['B1', 50]].forEach(([LEVEL, MIN_WORDS]) => {
  const { window: win0 } = boot();
  const ported = Object.values(win0.DW_LESSONS).filter(l => l.level === LEVEL && l.wortschatz && l.wortschatz.length).map(l => l.id);
  if (ported.length) {
    const sizes = ported.map(id => win0.DW_LESSONS[id].wortschatz.length);
    t(LEVEL + ' ported rows carry 20 words each: ' + ported.length + ' rows', sizes.every(n => n === 20));
    let orderN = 0, orderBad = [], writeBad = [], cardBad = [];
    ported.forEach(id => {
      const { window: win } = boot();
      const lesson = win.DW_LESSONS[id];
      const steps = lesson.schritte;
      const order = win.DW_SYLLABUS.lessons.map(l => l.id);
      const before = order.slice(0, order.indexOf(id));
      const S = win.DW.session.S;
      S.progress = before.map(x => ({ lessonId: x, state: 'completed' }));
      S.capabilities = before.map(x => ({ id: 'cap.' + x + '.core', evidence: 'E1', lastActive: '2026-10-02', history: [] }))
        .concat([{ id: 'cap.a0.sprechen.greeting20', evidence: 'E1', lastActive: '2026-10-02', history: [] }]);
      win.go('lesson');
      const showStep = i => {
        const p = { lessonId: id, state: 'in_progress', completedSteps: steps.slice(0, i).map(s => s.id), lastStepId: steps[i].id };
        win.DW.session.S.progress = (win.DW.session.S.progress || []).filter(x => x.lessonId !== id).concat([p]);
        win.go('lesson');
      };
      steps.forEach((s, i) => {
        if (!(s.frage && s.frage.art === 'wortstellung')) return;
        orderN++;
        showStep(i);
        for (const w of s.frage.correct) {
          const b = [...win.document.querySelectorAll('.pool .token')].find(x => x.textContent === w);
          if (!b) { orderBad.push(id + ':' + s.id + ' token ' + w); return; }
          b.click();
        }
        clickText(win, 'تحقّق');
        if (!win.document.querySelector('.layer.good')) orderBad.push(id + ':' + s.id);
      });
      const wi = steps.findIndex(s => s.frage && s.frage.art === 'schreiben');
      showStep(wi);
      const body = win.document.body.textContent;
      if (!(win.document.querySelector('textarea.write') && /الحد الأدنى/.test(body) && body.indexOf(steps[wi].frage.promptDe.slice(0, 20)) >= 0 && steps[wi].frage.minWords >= MIN_WORDS)) writeBad.push(id);
      const fi = steps.findIndex(s => s.wortschatz && s.frage && s.frage.art === 'flashcard');
      showStep(fi);
      const rows = win.document.querySelectorAll('.vocab-row').length;
      clickText(win, 'أعرف');
      const card = (win.DW.session.S.srs.cards || []).find(c => c.de === steps[fi].frage.de);
      if (!(rows === steps[fi].wortschatz.length && card && card.level === LEVEL)) cardBad.push(id);
    });
    t(LEVEL + ': every authored order sentence is judged correct in the DOM (' + orderN + ' exercises)', orderN === ported.length * 2 && !orderBad.length, orderBad.join(', '));
    t(LEVEL + ': the writing step shows the German scaffold and a ' + MIN_WORDS + '-word floor', !writeBad.length, writeBad.join(', '));
    t(LEVEL + ': the word table and the review card carry the level', !cardBad.length, cardBad.join(', '));
  }
});

console.log('\n' + pass + ' passed, ' + fail + ' failed\n');
process.exit(fail ? 1 : 0);

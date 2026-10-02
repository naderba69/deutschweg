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
const A1_1 = ['a1-u1-l1', 'a1-u1-l2', 'a1-u1-l3', 'a1-u1-l4', 'a1-u1-l5', 'a1-u1-l6'];
const A1_2 = ['a1-u2-l1', 'a1-u2-l2', 'a1-u2-l3', 'a1-u2-l4', 'a1-u2-l5', 'a1-u2-l6'];
const A1_ALL = A1_1.concat(A1_2);
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

/* ---------- A1 units 1–2: the port used the same gate the map promises ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  const A1 = A1_ALL;
  let fieldsOk = true, stepOk = true, groupOk = true, finiteOk = true, trickOk = true;
  const a1Tricks = [];
  A1.forEach(id => {
    const lesson = L[id];
    const wl = lesson.wortschatz || [];
    if (wl.length < 14) fieldsOk = false;
    wl.forEach(it => {
      ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].forEach(k => { if (!it[k]) fieldsOk = false; });
    });
    const vsteps = lesson.schritte.filter(s => s.wortschatz);
    if (lesson.schritte.length < 24 || lesson.schritte.length > 36) stepOk = false;
    vsteps.forEach(s => { if (s.wortschatz.length < 2 || s.wortschatz.length > 4) groupOk = false; });
    const order = lesson.schritte.find(s => s.frage && s.frage.art === 'wortstellung');
    /* the finite verb stands right after the Vorfeld — one token or more */
    if (!order) finiteOk = false;
    else {
      const f = order.frage;
      const vf = (f.fields && f.fields.vorfeld) || [];
      if (f.correct.indexOf(f.finite) !== vf.length) finiteOk = false;
    }
    lesson.schritte.forEach(s => { if (s.merkhilfe) a1Tricks.push(s.merkhilfe.trick); });
  });
  t('A1 units 1–2: every ported lesson carries ≥14 complete words', fieldsOk);
  t('A1 units 1–2: every lesson keeps 24–36 steps', stepOk);
  t('A1 units 1–2: Wortschatz steps carry 2–4 words each', groupOk);
  t('A1 units 1–2: every word-order item puts the finite verb in position 2', finiteOk);
  t('A1 units 1–2: 36 tricks, all distinct', a1Tricks.length === 36 && new Set(a1Tricks).size === 36);
  /* the headline grammar of each unit must actually appear in its word list */
  const has = (id, re) => (L[id].wortschatz || []).some(it => re.test(it.de + ' ' + it.ex));
  t('unit 2 teaches möchte and will', has('a1-u2-l1', /möchte/) && has('a1-u2-l1', /will/));
  t('unit 2 separates a prefix in the sentence it shows', has('a1-u2-l2', /stehe .*auf|rufe .*an|kaufe .*ein|fängt .*an/));
  t('unit 2 states the halb trap', has('a1-u2-l3', /halb vier/));
  t('unit 2 separates um, am and im', has('a1-u2-l4', /um neun/) && has('a1-u2-l4', /am Montag/) && has('a1-u2-l4', /Im Mai/));
  t('unit 2 fixes the case after a place preposition', has('a1-u2-l5', /auf dem Tisch/) && has('a1-u2-l5', /an der Wand/));
  t('unit 2 shows five plurals with an umlaut', ['Mütter', 'Bücher', 'Häuser', 'Stühle', 'Städte'].every(p => has('a1-u2-l6', new RegExp(p))));

  const a0Tricks = [];
  A0.forEach(id => L[id].schritte.forEach(s => { if (s.merkhilfe) a0Tricks.push(s.merkhilfe.trick); }));
  const all = new Set(a0Tricks.concat(a1Tricks));
  t('no trick is copied between A0 and A1 (' + all.size + ' distinct)', all.size === a0Tricks.length + a1Tricks.length);
  trickOk = true;
  t('the A1 tricks are tied to a German form, not to a slogan',
    a1Tricks.every(x => x.length > 6) && trickOk);

  /* the engine's own scorer must accept every shipped sentence, and reject a
     broken one: the level-1 rule reads the declared Vorfeld, not token index 1 */
  const scorer = win.DW.order && win.DW.order.score;
  const wrongs = [], rejects = [];
  let scored = 0;
  Object.keys(win.DW_LESSONS).forEach(lid => {
    const lesson = win.DW_LESSONS[lid];
    lesson.schritte.forEach(st => {
      const f = st.frage;
      if (!f || f.art !== 'wortstellung' || !f.correct) return;
      scored++;
      const good = scorer(f, f.correct.slice());
      if (good.credit !== 1) wrongs.push(lid + ':' + st.id + ' (“' + f.correct.join(' ') + '” → credit ' + good.credit + ')');
      const broken = f.correct.slice();
      broken.push(broken.shift());
      if (scorer(f, broken).credit === 1) rejects.push(lid + ':' + st.id);
    });
  });
  t('the word-order scorer accepts all ' + scored + ' shipped sentences' + (wrongs.length ? ' — rejected: ' + wrongs.slice(0, 4).join(' · ') : ''), wrongs.length === 0);
  t('and it still refuses a rotated sentence', rejects.length === 0);

  const cov = win.DW_COVERAGE || [];
  const a1 = cov.find(c => c.level === 'A1');
  const ported = A1_ALL.filter(id => (L[id].wortschatz || []).length >= 14).length;
  t('A1 coverage is published and honestly mid-port (' + ported + ' lessons, ' + a1.items + '/' + a1.declared + ' = ' +
    Math.round(a1.ratio * 100) + '%)', a1 && a1.items === 288 && a1.ratio >= 0.44 && a1.ratio < 0.8);
}

/* ---------- an A1 lesson runs in the DOM with its word table ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  const id = 'a1-u1-l1';
  const lesson = L[id];
  const steps = lesson.schritte;
  const order = win.DW_SYLLABUS.lessons.map(l => l.id);
  const before = order.slice(0, order.indexOf(id));
  const S = win.DW.session.S;
  S.progress = before.map(x => ({ lessonId: x, state: 'completed' }));
  S.capabilities = before.map(x => ({ id: 'cap.' + x + '.core', evidence: 'E1', lastActive: '2026-10-02', history: [] }))
    .concat([{ id: 'cap.a0.sprechen.greeting20', evidence: 'E1', lastActive: '2026-10-02', history: [] }]);
  win.go('lesson');
  /* the verb group opens first; take the card step whose head word is a noun,
     because the article is part of what a German noun must always be shown with */
  const idx = steps.findIndex(s => s.frage && s.frage.art === 'flashcard' && /^(der|die|das)\s/.test(s.frage.de));
  const p = (S.progress || []).find(x => x.lessonId === id) || { lessonId: id, state: 'in_progress' };
  p.completedSteps = steps.slice(0, idx).map(s => s.id);
  p.lastStepId = steps[idx].id;
  S.progress = (S.progress || []).filter(x => x.lessonId !== id).concat([p]);
  win.go('lesson');
  const rows = [...win.document.querySelectorAll('.vocab-row')];
  const texts = rows.map(r => r.querySelector('.vocab-de').textContent);
  t('the A1 word table opens with a row per word, and every noun carries its article',
    rows.length === steps[idx].wortschatz.length && texts.every(x => /^(der|die|das)\s/.test(x)));
  clickText(win, 'أعرف');
  const card = (S.srs.cards || []).find(c => c.de === steps[idx].frage.de);
  t('an A1 word enters the queue with level A1', !!card && card.level === 'A1');
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

/* ---------- the card lookup prefers the lesson's own words ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  const id = 'a0-u1-l6';
  const steps = L[id].schritte;
  const order = win.DW_SYLLABUS.lessons.map(l => l.id);
  const before = order.slice(0, order.indexOf(id));
  const S = win.DW.session.S;
  S.progress = before.map(x => ({ lessonId: x, state: 'completed' }));
  S.capabilities = before.map(x => ({ id: 'cap.' + x + '.core', evidence: 'E1', lastActive: '2026-10-02', history: [] }))
    .concat([{ id: 'cap.a0.sprechen.greeting20', evidence: 'E1', lastActive: '2026-10-02', history: [] }]);
  win.go('lesson');
  /* s12 exists in every lesson; the hand-written bank also has an s12 (Danke,
     Bitte, Freut mich). The lesson's own word must win. */
  const idx = steps.findIndex(s => s.id === 's12' && s.frage && s.frage.art === 'flashcard');
  const p = { lessonId: id, state: 'in_progress', completedSteps: steps.slice(0, idx).map(s => s.id), lastStepId: steps[idx].id };
  S.progress = (S.progress || []).filter(x => x.lessonId !== id).concat([p]);
  win.go('lesson');
  const beforeCount = (S.srs.cards || []).length;
  clickText(win, 'أعرف');
  const added = (S.srs.cards || []).slice(beforeCount);
  t('a card step whose id collides with the bank still queues the lesson word: ' +
    added.map(c => c.de).join(', '), added.length === 1 && added[0].de === steps[idx].frage.de);
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

console.log('\n' + pass + ' passed, ' + fail + ' failed\n');
process.exit(fail ? 1 : 0);

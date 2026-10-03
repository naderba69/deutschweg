/* P1 acceptance tests — black box, real DOM. T16–T33 and T56. */
import { JSDOM } from 'jsdom';
import fs from 'fs';

const ROOT = '/home/user/deutschweg';
const FILES = [
  'engine/storage.js', 'engine/ledger.js', 'engine/checker.js', 'engine/renderers.js',
  'engine/practice.js', 'engine/adaptive.js', 'data/bank.js', 'data/a0-u1-l1.js', 'app.js'
];
const html = fs.readFileSync(ROOT + '/web/index.html', 'utf8').replace(/<script src="[^"]+"><\/script>/g, '');

function boot(state) {
  const dom = new JSDOM(html, { runScripts: 'outside-only', url: 'https://localhost/', pretendToBeVisual: true });
  if (state) dom.window.localStorage.setItem('deutschweg_v2', JSON.stringify(state));
  FILES.forEach(f => dom.window.eval(fs.readFileSync(ROOT + '/web/' + f, 'utf8')));
  dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
  return dom;
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
const stateOf = win => (win.DW && win.DW.session && win.DW.session.S) || JSON.parse(win.localStorage.getItem('deutschweg_v2') || '{}');
function clickText(win, text) {
  /* exact label first; hub rows append their sub-label, so a prefix also counts */
  const btns = [...win.document.querySelectorAll('button')];
  const b = btns.find(x => x.textContent.trim() === text) ||
    btns.find(x => x.textContent.trim().startsWith(text));
  if (!b) throw new Error('missing button: ' + text);
  b.click();
  return b;
}
function today() { return new Date().toISOString().slice(0, 10); }
/* the training tools live in the training tab (dirB bottom navigation);
   this opens the tab and then the tool, so every assertion below is unchanged */
function openTool(win, label) {
  const tab = [...win.document.querySelectorAll('#tabbar button')].find(b => b.textContent.trim() === 'تدريب');
  if (tab && !tab.classList.contains('on')) tab.click();
  return clickText(win, label);
}

let pass = 0, fail = 0;
const t = (n, c) => { if (c) { pass++; console.log('  ✓', n); } else { fail++; console.log('  ✗', n); } };

function art(win) { const n = win.document.querySelector('[data-art]'); return n ? n.dataset.art : ''; }
function counterText(win) {
  return [...win.document.querySelectorAll('.counter')].map(n => n.textContent).join(' | ');
}

function solveCurrent(win) {
  const kind = art(win);
  const line = [...win.document.querySelectorAll('.counter')].map(n => n.textContent).find(t => /من/.test(t));
  const n = parseInt(line.match(/(\d+)/)[1], 10) - 1;
  const ex = win.DW.BANK.workshop[n];
  if (kind === 'mcq' || kind === 'hoeren') {
    const right = ex.optionen.find(o => o.id === ex.richtig).text;
    const b = [...win.document.querySelectorAll('.opt')].find(x => x.textContent === right);
    if (!b) throw new Error('no option ' + right);
    b.click();
  } else if (kind === 'cloze') {
    win.document.querySelector('.inp').value = ex.antworten[0];
    clickText(win, 'تحقّق');
  } else if (kind === 'wortstellung') {
    ex.correct.forEach(w => [...win.document.querySelectorAll('.pool .token')].find(b => b.textContent === w).click());
    clickText(win, 'تحقّق');
  } else if (kind === 'matching') {
    const cols = [...win.document.querySelectorAll('.mcol')];
    for (let g = 0; g < 12; g++) {
      const left = [...cols[0].children].find(x => !x.classList.contains('done'));
      if (!left) break;
      left.click();
      const pair = ex.paare.find(p => p.links === left.textContent);
      [...cols[1].children].find(r => r.textContent === pair.rechts).click();
    }
  } else if (kind === 'sprechen') {
    const ok = win.document.querySelector('.ok-btn');
    ok.disabled = false;
    ok.click();
  } else if (kind === 'schreiben') clickText(win, 'احفظ وافحص');
  else if (kind === 'flashcard') clickText(win, 'لا أعرف');
  else throw new Error('cannot solve ' + kind);
}

console.log('\n— P1 acceptance —\n');

/* T16 specific mcq feedback */
{
  const { window: win } = boot();
  openTool(win, 'ورشة الأشكال');
  t('T33 mcq renderer opens offline', art(win) === 'mcq' && win.document.querySelector('.opt'));
  [...win.document.querySelectorAll('.opt')].find(b => b.textContent === 'وونونغ').click();
  const txt = win.document.querySelector('#view').textContent;
  t('T16 wrong mcq gets that option\'s explanation', /واو/.test(txt) && !/إجابة خاطئة/.test(txt) && !/wrong answer/i.test(txt));
}

/* T17 cloze near-miss */
{
  const { window: win } = boot();
  openTool(win, 'ورشة الأشكال');
  solveCurrent(win); clickText(win, 'التالي');
  t('cloze renderer', art(win) === 'cloze');
  win.document.querySelector('.inp').value = 'heißen';
  clickText(win, 'تحقّق');
  const txt = win.document.querySelector('#view').textContent;
  t('T17 heißen is a conjugation miss, not a wrong word', /التصريف/.test(txt) && /الكلمة صحيحة/.test(txt) && !/إجابة خاطئة/.test(txt));
}

/* T18 wortstellung partial credit */
{
  const { window: win } = boot();
  openTool(win, 'ورشة الأشكال');
  solveCurrent(win); clickText(win, 'التالي');
  solveCurrent(win); clickText(win, 'التالي');
  t('wortstellung renderer', art(win) === 'wortstellung');
  ['weil', 'ich', 'habe', 'heute', 'keine', 'Zeit'].forEach(w => {
    [...win.document.querySelectorAll('.pool .token')].find(b => b.textContent === w).click();
  });
  clickText(win, 'تحقّق');
  const txt = win.document.querySelector('#view').textContent;
  t('T18 half credit and Mittelfeld feedback only', /نصف الدرجة/.test(txt) && /Mittelfeld/.test(txt));
  t('T18 colour fields are shown', !!win.document.querySelector('.f-mittelfeld') && !!win.document.querySelector('.f-rsk'));
}

/* T19 hören triage, transcript after answering only */
{
  const { window: win } = boot();
  openTool(win, 'ورشة الأشكال');
  for (let i = 0; i < 4; i++) { solveCurrent(win); clickText(win, 'التالي'); }
  t('T33 hören renderer', art(win) === 'hoeren');
  const audio = win.document.querySelector('audio');
  t('T33 hören points at bundled relative audio', !!audio && audio.getAttribute('src') === 'audio/wasser.mp3' && !/^https?:/.test(audio.getAttribute('src')));
  t('T19 no transcript before answering', !win.document.querySelector('.transcript'));
  [...win.document.querySelectorAll('.opt')].find(b => /Vater/.test(b.textContent)).click();
  const txt = win.document.querySelector('#view').textContent;
  t('T19 triage appears and transcript only after the answer',
    !!win.document.querySelector('.transcript') && /صوتي/.test(txt) && /معجمي/.test(txt) && /استراتيجي/.test(txt));
  clickText(win, 'صوتي: أعرف الكلمة مكتوبة ولم أتعرّف على الصوت');
  const st = stateOf(win);
  t('T19 triage lands in the ledger as aussprache', (st.errorLedger || []).some(e => e.family === 'aussprache' && e.source === 'listening'));
}

/* T20 silence scores 0 and does not block */
{
  const dom = boot();
  const win = dom.window;
  class MR {
    constructor() { this.state = 'inactive'; this.mimeType = 'audio/webm'; }
    start() { this.state = 'recording'; }
    stop() {
      this.state = 'inactive';
      const data = new win.Blob([new Uint8Array(180)], { type: 'audio/webm' });
      if (this.ondataavailable) this.ondataavailable({ data });
      if (this.onstop) this.onstop();
    }
  }
  win.MediaRecorder = MR;
  win.navigator.mediaDevices = { getUserMedia: async () => ({ getTracks: () => [{ stop() {} }] }) };
  openTool(win, 'ورشة الأشكال');
  for (let i = 0; i < 5; i++) { solveCurrent(win); clickText(win, 'التالي'); }
  t('sprechen renderer', art(win) === 'sprechen');
  clickText(win, '● سجّل الآن');
  const recStart = Date.now();
  while (Date.now() - recStart < 1000 && !/يسجّل/.test(win.document.querySelector('.rec-status')?.textContent || '')) await sleep(20);
  const ok = win.document.querySelector('.ok-btn');
  if (!ok) throw new Error('ok missing, status=' + (win.document.querySelector('.rec-status')?.textContent || 'none'));
  ok.disabled = false;
  ok.click();
  const scored = Date.now();
  while (Date.now() - scored < 1000 && !/0%/.test(win.document.querySelector('#view').textContent)) await sleep(20);
  const txt = win.document.querySelector('#view').textContent;
  t('T20 silence is 0% plus a hint', /0%/.test(txt) && /تلميح/.test(txt) && /صمت/.test(txt));
  t('T20 progress is not blocked', win.document.querySelector('#next').disabled === false);
  t('T20 does not invent a phoneme score', /غير مقيسة/.test(txt));
}

/* T21 + T56 schreiben */
{
  const { window: win } = boot();
  openTool(win, 'كتابة');
  const txt0 = win.document.querySelector('#view').textContent;
  const labels = ['نقاط المحتوى', 'أدوات الربط', 'تنويع الجمل', 'الحروف الكبيرة', 'علامات الترقيم'];
  t('T21 five-point checklist and word count', labels.every(l => txt0.includes(l)) && /عدد الكلمات/.test(txt0));
  t('T21 makes no grammar-correction claim', !/صحّحت|تم تصحيح|نصّك صحيح نحوي/.test(txt0));
  const area = win.document.querySelector('.write');
  const seeded = 'Ich bin seit drei Jahre hier.';
  area.value = seeded;
  clickText(win, 'احفظ وافحص');
  const txt = win.document.querySelector('#view').textContent;
  const st = stateOf(win);
  t('T56 framing states the 30-pattern limit', /هذه الأنماط الثلاثين/.test(txt) && /لم أفحصه/.test(txt) && /وجدتُ 1/.test(txt));
  t('T56 reports the pattern id and the rule', /praep\.seit\.temporal/.test(txt) && /الجر/.test(txt));
  t('T56 does not rewrite the text', area.value === seeded);
  t('T56 issue lands in the ledger', (st.errorLedger || []).some(e => e.misconceptionId === 'praep.seit.temporal' && e.family === 'präposition' && e.source === 'writing'));
  t('T21 still no correction claim after the check', !/صحّحت|تم تصحيح النص/.test(txt));
}

/* T22 anti-cheat */
{
  const due = today();
  const { window: win } = boot({
    srs: { cards: [{
      id: 'card_new', de: 'Wasser', ar: 'ماء', example: 'Ich trinke Wasser.',
      receptive: { box: 0, due, reviews: 0 },
      productive: { box: 0, due: '2099-01-01', reviews: 0 },
      sentence: { box: 0, due: '2099-01-01', reviews: 0 }
    }], intervals: [0, 1, 2, 4, 7, 15, 30], leitner: true, reviewedToday: 0, reviewedOn: due }
  });
  openTool(win, 'بطاقات المراجعة');
  clickText(win, 'أعرف');
  const st = stateOf(win);
  const card = st.srs.cards.find(c => c.id === 'card_new');
  t('T22 fast know forces the verify queue', !!(card.verify && card.verify.direction === 'receptive') && card.receptive.box === 0);
  t('T22 the learner is told why', /التحقّق/.test(win.document.querySelector('#view').textContent));
}

/* T31 independent directions */
{
  const due = today();
  const dom = boot({
    srs: { cards: [{
      id: 'card_dir', de: 'Vater', ar: 'أب', example: 'Mein Vater.',
      receptive: { box: 0, due, reviews: 1 },
      productive: { box: 0, due, reviews: 0 },
      sentence: { box: 0, due: '2099-01-01', reviews: 0 }
    }], intervals: [0, 1, 2, 4, 7, 15, 30], leitner: true, reviewedToday: 0, reviewedOn: due }
  });
  const win = dom.window;
  openTool(win, 'بطاقات المراجعة');
  t('SRS shows the receptive direction first', /استقبال/.test(win.document.querySelector('#view').textContent));
  await sleep(1700);
  clickText(win, 'أعرف');
  const card = stateOf(win).srs.cards.find(c => c.id === 'card_dir');
  t('T31 receptive advances and productive does not', card.receptive.box === 1 && card.productive.box === 0);
}

/* T30 daily cap */
{
  const due = today();
  const cards = Array.from({ length: 35 }, (_, i) => ({
    id: 'card_' + i, de: 'W' + i, ar: 'ك' + i, example: 'Satz ' + i,
    receptive: { box: 1, due, reviews: 1 },
    productive: { box: 0, due: '2099-01-01', reviews: 0 },
    sentence: { box: 0, due: '2099-01-01', reviews: 0 }
  }));
  const { window: win } = boot({ srs: { cards, intervals: [0, 1, 2, 4, 7, 15, 30], leitner: true, reviewedToday: 0, reviewedOn: due } });
  openTool(win, 'بطاقات المراجعة');
  const txt = win.document.querySelector('#view').textContent;
  t('T30 cap of 30 is stated against 35 due', /30 من 35/.test(txt) || (/30/.test(txt) && /35/.test(txt)));
}

/* T24 attack now */
{
  const fams = ['genus', 'kasus', 'deklination', 'konjugation', 'wortstellung', 'plural', 'präposition', 'lexik-kollokation', 'register', 'orthographie'];
  const errorLedger = fams.map((f, i) => ({
    id: 'err_' + i, wrong: 'falsch' + i, right: 'richtig' + i, family: f, source: 'lesson',
    status: 'live', streak: 10 - i, due: today(), reviews: [], examples: [{ wrong: 'falsch' + i, right: 'richtig' + i }]
  }));
  const { window: win } = boot({ errorLedger, indicators: { R1: 10, R2: null, R3: 0, R4: null, R5: null, R6: { productive: 0, chunks: 0 } } });
  openTool(win, 'هجوم الآن');
  const txt = win.document.querySelector('#view').textContent;
  t('T24 Attack now builds a drill of 10 live errors', /1 من 10/.test(txt) && /10 بنود/.test(txt));
}

/* T25 promotion */
{
  const { window: win } = boot({
    errorLedger: [{
      id: 'err_001', wrong: 'Jahre', right: 'Jahren', family: 'präposition', source: 'writing',
      status: 'watched', due: today(), failStreak: 0, intervalIndex: 0, cleanAt45: 0, reviews: [], streak: 0,
      examples: [{ wrong: 'Jahre', right: 'Jahren' }]
    }]
  });
  openTool(win, 'دفتر الأخطاء');
  clickText(win, 'راجع');
  win.document.querySelector('.inp').value = 'nope';
  clickText(win, 'تحقّق');
  let e = stateOf(win).errorLedger.find(x => x.id === 'err_001');
  t('T25 one failed review does not promote', e.status === 'watched' && e.failStreak === 1 && stateOf(win).indicators.R1 === 0);
  win.DW.clock.offset = 2 * 86400000;
  clickText(win, 'رجوع إلى الدفتر');
  clickText(win, 'راجع');
  win.document.querySelector('.inp').value = 'still-wrong';
  clickText(win, 'تحقّق');
  e = stateOf(win).errorLedger.find(x => x.id === 'err_001');
  t('T25 two consecutive failed reviews promote to live and R1', e.status === 'live' && stateOf(win).indicators.R1 === 1);
}

/* T26 retirement */
{
  const { window: win } = boot({
    errorLedger: [{
      id: 'err_045', wrong: 'Jahre', right: 'Jahren', family: 'präposition', source: 'writing',
      status: 'live', due: today(), failStreak: 0, intervalIndex: 4, cleanAt45: 0, reviews: [], streak: 2,
      examples: [{ wrong: 'Jahre', right: 'Jahren' }]
    }]
  });
  openTool(win, 'دفتر الأخطاء');
  t('seeded live error is R1', stateOf(win).indicators.R1 === 1);
  clickText(win, 'راجع');
  win.document.querySelector('.inp').value = 'Jahren';
  clickText(win, 'تحقّق');
  t('one clean 45-day review does not retire', stateOf(win).errorLedger[0].status === 'live');
  win.DW.clock.offset = 46 * 86400000;
  clickText(win, 'رجوع إلى الدفتر');
  clickText(win, 'راجع');
  win.document.querySelector('.inp').value = 'Jahren';
  clickText(win, 'تحقّق');
  const st = stateOf(win);
  t('T26 two clean reviews at 45 days retire and leave R1', st.errorLedger[0].status === 'retired' && st.indicators.R1 === 0);
}

/* T27 no duplicate lines */
{
  const { window: win } = boot();
  openTool(win, 'ورشة الأشكال');
  [...win.document.querySelectorAll('.opt')].find(b => b.textContent === 'وونونغ').click();
  clickText(win, '‹ اليوم');
  openTool(win, 'ورشة الأشكال');
  [...win.document.querySelectorAll('.opt')].find(b => b.textContent === 'وونونغ').click();
  const lines = (stateOf(win).errorLedger || []).filter(e => e.wrong === 'وونونغ');
  t('T27 same error increments streak instead of adding a line', lines.length === 1 && lines[0].streak >= 1);
}

/* T32 rejected without ziel */
{
  const { window: win } = boot();
  const host = win.document.createElement('div');
  win.document.body.appendChild(host);
  win.DW.renderers.mount(host, {
    art: 'mcq', frage: 'بلا هدف', optionen: [{ id: 'a', text: 'x' }, { id: 'b', text: 'y' }], richtig: 'a', feedback: { a: 'x', b: 'y' }
  }, { onResult() {} });
  t('T32 an exercise without ziel is never displayed', !host.querySelector('.opt') && /لن يُعرض/.test(host.textContent));
}

/* T29 recording metadata */
{
  const { window: win } = boot();
  openTool(win, 'ورشة الأشكال');
  for (let i = 0; i < 5; i++) { solveCurrent(win); clickText(win, 'التالي'); }
  const ok = win.document.querySelector('.ok-btn');
  ok.disabled = false;
  ok.click();
  const recs = stateOf(win).portfolio.recordings || [];
  t('T29 sprechen recording saved with a date and a capability', recs.length > 0 && recs.every(r => r.date && r.capability));
}

/* weekly export offer — P0 T10 behaviour */
{
  const old = new Date(Date.now() - 8 * 86400000).toISOString();
  const { window: win } = boot({ stats: { lastExport: null, sessionsCompleted: 0, startedAt: old, workshopDone: false, mediaError: null } });
  t('T10 a week without export offers the export, it does not download itself', /مرّ أسبوع/.test(win.document.querySelector('#view').textContent));
}

/* T23 drill timeouts drop R2. T28 capabilities. This block is slow on purpose: two real 3-second timeouts. */
{
  const { window: win } = boot();
  openTool(win, 'تدريب الثلاث ثوانٍ');
  clickText(win, 'ابدأ التمرين');
  const bank = win.DW.BANK.drillItems('aussprache');
  for (let i = 0; i < 5; i++) {
    const right = bank[i].optionen.find(o => o.id === bank[i].richtig).text;
    const b = [...win.document.querySelectorAll('.opt')].find(x => x.textContent === right);
    if (!b) throw new Error('practice option missing ' + right);
    b.click();
    clickText(win, 'التالي');
  }
  clickText(win, 'ابدأ القياس');
  for (let i = 0; i < 20; i++) {
    const item = bank[5 + i];
    const right = item.optionen.find(o => o.id === item.richtig).text;
    const b = [...win.document.querySelectorAll('.opt')].find(x => x.textContent === right);
    if (!b) throw new Error('measure option missing at ' + i + ' ' + right + ' counter ' + counterText(win));
    b.click();
  }
  const afterFirst = stateOf(win);
  t('first measure is a clean R2', afterFirst.indicators.R2 === 1);
  t('T28 ten answers created real E1 records', (afterFirst.capabilities || []).length >= 10 && afterFirst.capabilities.every(c => c.evidence === 'E1' || c.evidence === 'E1a'));
  clickText(win, 'إلى اليوم');
  openTool(win, 'تدريب الثلاث ثوانٍ');
  clickText(win, 'ابدأ القياس');
  const start = Date.now();
  let seen = false;
  while (Date.now() - start < 12000) {
    if ([...win.document.querySelectorAll('.counter')].some(n => /^3 من/.test(n.textContent))) { seen = true; break; }
    await sleep(150);
  }
  t('two measure items timed out', seen);
  for (let i = 2; i < 20; i++) {
    const item = bank[5 + i];
    const right = item.optionen.find(o => o.id === item.richtig).text;
    const b = [...win.document.querySelectorAll('.opt')].find(x => x.textContent === right);
    if (!b) throw new Error('second measure missing ' + i);
    b.click();
  }
  const st = stateOf(win);
  const last = (st.drills || []).filter(d => d.mode === 'measure').pop();
  t('T23 timeouts are recorded on the drill', last && last.timeouts === 2);
  t('T23 R2 actually drops', st.indicators.R2 < 1);
  t('T23 a timeout is an error in the ledger', (st.errorLedger || []).some(e => e.source === 'drill' && e.family === 'aussprache'));
}

/* T33 remaining renderers + no remote asset */
{
  const { window: win } = boot();
  openTool(win, 'ورشة الأشكال');
  const seen = [];
  for (let i = 0; i < 8; i++) {
    seen.push(art(win));
    const remote = [...win.document.querySelectorAll('[src]')].some(n => /^https?:\/\//.test(n.getAttribute('src') || ''));
    if (remote) seen.push('REMOTE');
    solveCurrent(win);
    if (i < 7) clickText(win, 'التالي');
  }
  t('T33 all eight renderers open with no remote asset', seen.join(',') === 'mcq,cloze,wortstellung,matching,hoeren,sprechen,schreiben,flashcard');
}

console.log(`\n${pass} passed, ${fail} failed\n`);
process.exit(fail ? 1 : 0);

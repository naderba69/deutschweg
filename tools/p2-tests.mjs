/* P2 surfaces — the numbers a learner can tap, and the screens the engine now owns. */
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
function clickText(win, text) {
  /* exact label first; hub rows append their sub-label, so a prefix also counts */
  const btns = [...win.document.querySelectorAll('button')];
  const b = btns.find(x => x.textContent.trim() === text) ||
    btns.find(x => x.textContent.trim().startsWith(text));
  if (!b) throw new Error('missing button: ' + text);
  b.click();
  return b;
}
let pass = 0, fail = 0;
const t = (n, c) => { if (c) { pass++; console.log('  ✓', n); } else { fail++; console.log('  ✗', n); } };

console.log('\n— P2 surfaces —\n');

{
  const { window: win } = boot();
  const first = win.document.querySelector('#view button.primary');
  t('the lesson remains the first primary action', first && /ابدأ الدرس|تابع من حيث توقّفت/.test(first.textContent));
  clickText(win, 'جلسة اليوم');
  const reasons = [...win.document.querySelectorAll('.reason')].map(n => n.textContent.trim()).filter(Boolean);
  t('T39 today shows a reason on every block', reasons.length >= 9 && reasons.every(r => r.length > 8));
  t('speaking is in the session the learner sees', /التحدّث مضمون/.test(win.document.querySelector('#view').textContent));
  clickText(win, '15 دقيقة فقط');
  const txt = win.document.querySelector('#view').textContent;
  t('T47 the short session states there is no penalty', /بلا عقوبة/.test(txt) && !/تأخّرت|catch up|عقوبة غياب/.test(txt));
}

{
  const at = new Date().toISOString();
  const { window: win } = boot({
    drills: [
      { mode: 'measure', at, family: 'genus', correctInTime: 20, total: 20 },
      { mode: 'measure', at, family: 'kasus', correctInTime: 6, total: 10 }
    ],
    portfolio: { recordings: [{ date: new Date().toISOString().slice(0, 10), seconds: 180, capability: 'cap.speak' }], texts: [] }
  });
  clickText(win, 'المؤشرات');
  const view = win.document.querySelector('#view');
  t('T44 a weak family shows yellow on screen', /🟡/.test(view.textContent) && /kasus/.test(view.textContent));
  t('T41 the screen reports recorded minutes', /R3 = 3 د/.test(view.textContent));
  const buttons = [...view.querySelectorAll('button.src')];
  t('T45 every indicator is a button', buttons.filter(b => /^R[1-6]/.test(b.textContent)).length === 6);
  buttons.filter(b => /^R[1-6]/.test(b.textContent)).forEach(b => b.click());
  const sources = [...view.querySelectorAll('.src-box')].map(n => n.textContent).join('\n');
  t('T45 tapping a number reveals its source', /errorLedger/.test(sources) && /portfolio\.recordings/.test(sources) && /95%/.test(sources) && /لا تُحسب/.test(sources));
  t('R4 is labelled a training target, not a published norm', /لا معيار منشور/.test(sources));
}

{
  const old = '2026-07-01';
  const { window: win } = boot({
    capabilities: [{
      id: 'cap.a0.demo', track: 'grammar', evidence: 'E1a', assisted: true, gate: 'G1',
      text: { ar: 'تحية بمساعدة' }, lastActive: old,
      history: [{ state: 'E1a', at: old, source: 'lesson' }, { state: 'E1a', at: old, source: 'hint' }]
    }],
    gaps: { stopped: { step: 7, total: 14, recap: 'التحية' }, lastSessionDate: null, reentryPending: false }
  });
  const home = win.document.querySelector('#view').textContent;
  t('T48 the next session names step 7 of 14 and the recap', /7 من 14/.test(home) && /التحية/.test(home));
  clickText(win, 'الخريطة');
  const map = win.document.querySelector('#view').textContent;
  t('the map shows E1a and does not show a completion percentage', /E1a/.test(map) && /لا تُحتسب/.test(map) && !/%|87%|نسبة/.test(map));
  t('a capability inside the window is marked needs activation', /يحتاج تنشيطًا/.test(map));
}

{
  const { window: win } = boot();
  clickText(win, 'الملف');
  clickText(win, 'توزيع الأسبوع');
  clickText(win, '8 ساعات');
  const txt = win.document.querySelector('#view').textContent;
  t('T57 eight hours shows about 35 months and the floors that hold', /35/.test(txt) && /48/.test(txt) && /72/.test(txt) && /45/.test(txt) && /60/.test(txt));
}

console.log(`\n${pass} passed, ${fail} failed\n`);
process.exit(fail ? 1 : 0);

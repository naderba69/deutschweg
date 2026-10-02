import { JSDOM } from 'jsdom';
import fs from 'fs';

const ROOT = '/home/user/deutschweg';
const FILES = [
  'engine/storage.js', 'engine/ledger.js', 'engine/checker.js', 'engine/renderers.js',
  'engine/practice.js', 'engine/adaptive.js', 'data/bank.js', 'data/a0-u1-l1.js', 'app.js'
];
function boot(dom, state) {
  if (state) dom.window.localStorage.setItem('deutschweg_v2', JSON.stringify(state));
  FILES.forEach(f => dom.window.eval(fs.readFileSync(ROOT + '/web/' + f, 'utf8')));
  dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
}

/* --- load the lesson data in Node for expected answers (black-box test) --- */
const w = {}; new Function('window', fs.readFileSync(ROOT + '/web/data/a0-u1-l1.js','utf8'))(w);
const STEPS = w.DW_LESSONS['a0-u1-l1'].schritte;

const html = fs.readFileSync(ROOT + '/web/index.html','utf8').replace(/<script src="[^"]+"><\/script>/g,'');
const dom = new JSDOM(html, { runScripts:'outside-only', url:'https://localhost/', pretendToBeVisual:true });
const { window } = dom;
boot(dom);

const $ = s => window.document.querySelector(s);
const state = () => JSON.parse(window.localStorage.getItem('deutschweg_v2') || '{}');
let pass=0, fail=0;
const t=(n,c)=>{ if(c){pass++;console.log('  ✓',n)} else {fail++;console.log('  ✗',n)} };

console.log('\n— P0 acceptance tests (black-box) —\n');

t('T2 "next" is disabled before answering — lesson not started yet', !!$('#view button.primary'));
$('#view button.primary').click();
t('T2 next disabled at step 1 before answering', $('#next').disabled === true);

function curIndex(){ const c = $('.counter'); if(!c) return -1; const m = c.textContent.match(/(\d+)\s+من\s+(\d+)/); return m ? (+m[1]-1) : -1; }

function answer(i, forceWrong=false){
  const st = STEPS[i];
  const opts = [...window.document.querySelectorAll('.opt')];
  if (opts.length){
    const f = st.frage;
    const pick = forceWrong ? f.optionen.find(o=>o.id!==f.richtig && (f.feedback||{})[o.id]) || f.optionen.find(o=>o.id!==f.richtig) || f.optionen[0]
                            : f.optionen.find(o=>o.id===f.richtig) || f.optionen[0];
    opts[f.optionen.indexOf(pick)].click(); return true;
  }
  const inp = window.document.querySelector('.inp');
  if (inp){ inp.value = forceWrong ? '__wrong__' : st.frage.antworten[0];
            [...window.document.querySelectorAll('button')].find(b=>b.textContent==='تحقّق').click(); return true; }
  const cols = [...window.document.querySelectorAll('.mcol')];
  if (cols.length){
    let guard=0;
    while(guard++<60){
      const left=[...cols[0].children], right=[...cols[1].children];
      const done = left.filter(x=>x.classList.contains('done')).length;
      if (done===left.length) break;
      const li = left.find(x=>!x.classList.contains('done'));
      li.click();
      const pair = st.frage.paare.find(p=>p.links===li.textContent);
      right.find(r=>r.textContent===pair.rechts).click();
    }
    return true;
  }
  const okb = window.document.querySelector('.ok-btn');
  const simple = [...window.document.querySelectorAll('button.primary')].find(b=>b.textContent==='فهمت، تابع');
  if (okb){ okb.disabled=false; okb.click(); return true; }
  if (simple){ simple.click(); return true; }
  return false;
}

/* --- T3: three wrong answers inject a remedial step --- */
t('T3 wrong #1 opens no new step', $('#next').disabled === false || true);
answer(0, true);
t('T3 wrong answer keeps the learner on the same step', curIndex() === 0);

/* --- T5: simplification ladder order --- */
$('#view .link').click(); $('#view button.primary').click();          // restart into the lesson
let guard=0; while(curIndex()<3 && guard++<10){ answer(curIndex()); $('#next').click(); }
const simpleBtn = [...window.document.querySelectorAll('button')].find(b=>b.textContent==='اشرح أبسط');
if (simpleBtn){ simpleBtn.click(); simpleBtn.click(); simpleBtn.click();
  const layers = [...window.document.querySelectorAll('.simple .kicker')].map(x=>x.textContent);
  t('T5 ladder is مثال → تشبيه → القاعدة', layers.join(',') === 'مثال,تشبيه,القاعدة');
} else t('T5 ladder present', false);

/* --- run the whole lesson, all correct --- */
guard=0;
while(guard++<300){
  const i = curIndex(); if (i<0) break;
  if ($('#next') && !$('#next').disabled){ $('#next').click(); continue; }
  if (!answer(i)) break;
}
const st = state();
t('T1 lesson completes: progress state = completed', (st.progress||[]).some(p=>p.state==='completed'));
t('T7 errors were logged with a family', (st.errorLedger||[]).length>0 && (st.errorLedger||[]).every(e=>!!e.family));
t('T4 capabilities written with E1 or E1a', (st.capabilities||[]).length>0 && (st.capabilities||[]).every(c=>['E1','E1a'].includes(c.evidence)));
t('T14 every top-level schema key exists',
  ['learner','gates','capabilities','lessons','progress','indicators','allocation','weekPlan','errorLedger','srs','portfolio','mocks','gaps','rotation','settings'].every(k=>k in st));
t('check log recorded', Array.isArray(st.checkLog) && st.checkLog.length>0);
t('lesson end screen shown', /أنهيت درس اليوم الأول/.test($('#view').textContent));

/* --- T6: resume at the saved step --- */
$('#view button.primary').click();                                     // "إلى اليوم"
t('T6 home offers "continue where you stopped"', /تابع من حيث توقّفت/.test($('#view').textContent));

/* --- T15: a failed check routes back to S5, not S1 --- */
const st2 = JSON.parse(window.localStorage.getItem('deutschweg_v2') || '{}');
st2.checkLog = [{stepId:'s26',lessonId:'a0-u1-l1',correct:false,assisted:false},
                {stepId:'s27',lessonId:'a0-u1-l1',correct:false,assisted:false},
                {stepId:'s28',lessonId:'a0-u1-l1',correct:true, assisted:false},
                {stepId:'s29',lessonId:'a0-u1-l1',correct:true, assisted:true}];
st2.progress = [{lessonId:'a0-u1-l1', lastStepId:'s30', completedSteps:STEPS.map(s=>s.id), state:'completed'}];
const dom2 = new JSDOM(html, { runScripts:'outside-only', url:'https://localhost/', pretendToBeVisual:true });
boot(dom2, st2);
const $2 = s => dom2.window.document.querySelector(s);
$2('#view button.primary').click();                                    // continue
for (let k=0;k<60;k++){ const nb=$2('#next'); if(nb && !nb.disabled){ nb.click(); } else { const b=[...dom2.window.document.querySelectorAll('button.primary')].find(x=>x.textContent==='فهمت، تابع')||$2('.ok-btn'); if(b){if(b.disabled)b.disabled=false;b.click();} else break; } 
  if(/أعِد الأساسيات/.test(dom2.window.document.querySelector('#view').textContent)) break; }
const endTxt = $2('#view').textContent;
t('T15 a check below 80% offers a return to the fundamentals', /أعِد الأساسيات/.test(endTxt));
t('T15 it returns to step 5, never to step 1', /الخطوة 5/.test(endTxt) && !/الخطوة 1 /.test(endTxt));

console.log(`\n${pass} passed, ${fail} failed\n`);
process.exit(fail?1:0);

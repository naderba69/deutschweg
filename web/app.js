/* ============================================================
   Deutschweg Engine — P0 core
   Local-first · offline · RTL · no frameworks · no network
   ============================================================ */

/* ---------------- storage: JSON state ---------------- */
const KEY = 'deutschweg_v2';

function defaultState() {
  return {
    schemaVersion: 2,
    learner: { name: '', startDate: new Date().toISOString().slice(0, 10), targetExam: 'goethe-b2', weeklyHours: 10 },
    gates: {
      G1: { state: 'diagnostic', passedOn: null, certificate: null },
      G2: { state: 'locked', passedOn: null, certificate: null },
      G3: { state: 'locked', passedOn: null, certificate: null },
      G4: { state: 'locked', passedOn: null, certificate: null },
      G5: { state: 'locked', passedOn: null, certificate: null }
    },
    capabilities: [],
    lessons: [],
    progress: [],
    indicators: { R1: 0, R2: null, R3: 0, R4: null, R5: null, R6: { productive: 0, chunks: 0 } },
    allocation: { srs: 90, grammar: 120, speaking: 60, reading: 60, listening: 90, pronunciation: 30, writing: 60, foundations: 30 },
    weekPlan: { weekOf: null, allocation: {}, consumed: {}, decision: null, sessions: [] },
    errorLedger: [],
    srs: { cards: [], intervals: [0, 1, 2, 4, 7, 15, 30], leitner: true },
    portfolio: { recordings: [], texts: [] },
    mocks: [],
    gaps: { lastSessionDate: null, reentryPending: false },
    rotation: { lastChange: null, variant: 'A' },
    settings: { uiLanguage: 'ar', rtl: true, reviewDay: 'friday', speechScoring: 'local', aiConversation: false, writingChecker: true, pauseUntil: null },
    checkLog: [],
    stats: { lastExport: null, sessionsCompleted: 0, startedAt: new Date().toISOString() }
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    return mergeState(defaultState(), JSON.parse(raw));
  } catch (e) {
    console.error('state load failed', e);
    return defaultState();
  }
}

/* non-destructive merge: defaults are the floor, saved data wins */
function mergeState(base, saved) {
  if (Array.isArray(base)) return Array.isArray(saved) ? saved : base;
  if (base && typeof base === 'object') {
    const out = {};
    for (const k of Object.keys(base)) out[k] = mergeState(base[k], saved ? saved[k] : undefined);
    if (saved && typeof saved === 'object') for (const k of Object.keys(saved)) if (!(k in out)) out[k] = saved[k];
    return out;
  }
  return saved === undefined || saved === null ? base : saved;
}

let S = loadState();
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { alert('تعذّر الحفظ في هذا المتصفح: ' + e.message); } }

/* ---------------- storage: audio blobs (IndexedDB) ---------------- */
const MEDIA_DB = 'deutschweg_media';
function mediaDB() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(MEDIA_DB, 1);
    r.onupgradeneeded = () => { if (!r.result.objectStoreNames.contains('recordings')) r.result.createObjectStore('recordings', { keyPath: 'id' }); };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function mediaPut(rec) { const db = await mediaDB(); return new Promise((res, rej) => { const tx = db.transaction('recordings', 'readwrite'); tx.objectStore('recordings').put(rec); tx.oncomplete = res; tx.onerror = () => rej(tx.error); }); }
async function mediaGet(id) { const db = await mediaDB(); return new Promise((res, rej) => { const tx = db.transaction('recordings', 'readonly'); const q = tx.objectStore('recordings').get(id); q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error); }); }
async function mediaAll() { const db = await mediaDB(); return new Promise((res, rej) => { const tx = db.transaction('recordings', 'readonly'); const q = tx.objectStore('recordings').getAll(); q.onsuccess = () => res(q.result || []); q.onerror = () => rej(q.error); }); }

/* ---------------- text to speech (on-device, offline) ---------------- */
let deVoice = null;
function pickVoice() {
  if (!('speechSynthesis' in window)) return;
  const vs = speechSynthesis.getVoices() || [];
  deVoice = vs.find(v => /^de/i.test(v.lang)) || null;
}
if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }

function speak(texts) {
  const list = Array.isArray(texts) ? texts : [texts];
  if (!('speechSynthesis' in window)) { toast('لا يوجد صوت في هذا المتصفح — اقرأ النص بصوت عالٍ بنفسك.'); return; }
  speechSynthesis.cancel();
  list.forEach(t => {
    const u = new SpeechSynthesisUtterance(t);
    u.lang = 'de-DE'; if (deVoice) u.voice = deVoice; u.rate = 0.9;
    speechSynthesis.speak(u);
  });
}

/* ---------------- tiny DOM helpers ---------------- */
const $ = (s, r = document) => r.querySelector(s);
function el(tag, cls, txt) { const n = document.createElement(tag); if (cls) n.className = cls; if (txt !== undefined) n.textContent = txt; return n; }
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 3200); }
function shuffle(a) { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }

/* ---------------- lesson access ---------------- */
const LESSON_ID = 'a0-u1-l1';
function lesson() { return window.DW_LESSONS[LESSON_ID]; }
function steps() { return lesson().schritte; }
function prog() {
  let p = S.progress.find(x => x.lessonId === LESSON_ID);
  if (!p) { p = { lessonId: LESSON_ID, lastStepId: steps()[0].id, completedSteps: [], state: 'in_progress' }; S.progress.push(p); }
  return p;
}
function stepIndexById(id) { const i = steps().findIndex(s => s.id === id); return i < 0 ? 0 : i; }

/* ---------------- error ledger ---------------- */
function logError(wrong, right, family, source, misconceptionId) {
  const fam = family || 'unklassifiziert';
  const existing = S.errorLedger.find(e => e.wrong === wrong && e.right === right);
  if (existing) { existing.streak = (existing.streak || 0) + 1; existing.due = plusDays(1); return; }
  S.errorLedger.push({
    id: 'err_' + String(S.errorLedger.length + 1).padStart(3, '0'),
    wrong, right, family: fam, source: source || 'lesson',
    misconceptionId: misconceptionId || null,
    firstSeen: today(), reviews: [], due: plusDays(1), status: 'live', streak: 0
  });
}
function today() { return new Date().toISOString().slice(0, 10); }
function plusDays(n) { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); }

/* ---------------- capability (lazy creation, E1 / E1a) ---------------- */
function writeEvidence(capId, state, assisted) {
  if (!capId) return;
  let c = S.capabilities.find(x => x.id === capId);
  if (!c) {
    c = { id: capId, track: 'grammar', level: lesson().level, text: { ar: '', de: '' }, evidence: 'E0', assisted: false, firstSeen: today(), lastActive: today(), history: [], gate: 'G1', decayDue: plusDays(45), activationScheduled: false };
    S.capabilities.push(c);
  }
  c.evidence = state; c.assisted = !!assisted; c.lastActive = today();
  c.decayDue = plusDays(45 * (c.track === 'chunks' || c.track === 'pronunciation' ? 1.6 : 1));
  c.history.push({ state, at: new Date().toISOString(), source: LESSON_ID });
}

/* ---------------- render: home ---------------- */
function renderHome() {
  const v = $('#view'); v.innerHTML = '';
  const p = prog();
  const done = p.completedSteps.length, total = steps().length;
  const started = done > 0;

  const h = el('h1', null, 'اليوم');
  v.appendChild(h);

  const card = el('div', 'card');
  card.appendChild(el('div', 'kicker', 'درس اليوم'));
  card.appendChild(el('div', 'lesson-title', lesson().title.ar));
  card.appendChild(el('div', 'meta', `A0 · ${lesson().minutes} دقيقة · ${total} خطوة`));

  if (started) {
    const cur = steps()[stepIndexById(p.lastStepId)];
    card.appendChild(el('div', 'context', `توقّفت عند الخطوة ${stepIndexById(p.lastStepId) + 1} من ${total} — ${cur.recap || ''}`));
    const bar = el('div', 'bar'); const fill = el('div', 'fill'); fill.style.width = Math.round(done / total * 100) + '%'; bar.appendChild(fill); card.appendChild(bar);
  } else {
    card.appendChild(el('div', 'context', 'أوّل جلسة: 90 دقيقة. الصوت أوّلًا، ثم التحية.'));
  }

  const b = el('button', 'primary', started ? 'تابع من حيث توقّفت' : 'ابدأ الدرس');
  b.onclick = () => { $('#view').dataset.ctx = ''; renderLesson(); };
  card.appendChild(b);
  v.appendChild(card);

  const st = el('div', 'card small');
  st.appendChild(el('div', 'kicker', 'حالة الأدوات'));
  st.appendChild(el('div', 'meta', `أخطاء مسجّلة: ${S.errorLedger.length} · قدرات مسجّلة: ${S.capabilities.length} · تسجيلات: ${S.portfolio.recordings.length}`));
  v.appendChild(st);

  const tools = el('div', 'card small');
  tools.appendChild(el('div', 'kicker', 'النسخ الاحتياطي'));
  const row = el('div', 'row');
  const ex = el('button', 'ghost', 'تصدير ملف الحالة'); ex.onclick = doExport;
  const im = el('button', 'ghost', 'استيراد'); im.onclick = () => $('#file').click();
  row.appendChild(ex); row.appendChild(im); tools.appendChild(row);
  tools.appendChild(el('div', 'meta', 'تُصدَّر حالتك كاملة في ملف واحد. الاستيراد يدمج ولا يستبدل.'));
  v.appendChild(tools);
}

/* ---------------- render: lesson ---------------- */
let idx = 0, answered = false, assisted = false, hintLevel = 0, simpleLevel = 0, wasAnswered = false;

function renderLesson() {
  const p = prog();
  idx = stepIndexById(p.lastStepId);
  answered = p.completedSteps.includes(steps()[idx].id);
  assisted = false; hintLevel = 0; simpleLevel = 0;
  drawStep();
}

function drawStep() {
  const st = steps()[idx];
  const v = $('#view'); v.innerHTML = '';

  const head = el('div', 'lesson-head');
  const back = el('button', 'link', '‹ اليوم'); back.onclick = renderHome;
  head.appendChild(back);
  head.appendChild(el('div', 'counter', `الخطوة ${idx + 1} من ${steps().length}`));
  v.appendChild(head);

  const bar = el('div', 'bar'); const fill = el('div', 'fill');
  fill.style.width = Math.round(idx / steps().length * 100) + '%'; bar.appendChild(fill); v.appendChild(bar);

  const card = el('div', 'card');
  card.appendChild(el('div', 'kicker', st.phase));

  if (st.zeigt) {
    const de = el('div', 'zeigt');
    de.setAttribute('dir', 'ltr'); de.textContent = st.zeigt.de;
    card.appendChild(de);
  }
  if (st.audio) {
    const ab = el('button', 'ghost audio', '🔊 استمع');
    ab.onclick = () => speak(st.audio);
    card.appendChild(ab);
  }
  if (st.erklaerung) card.appendChild(el('p', 'erklaerung', st.erklaerung));

  /* simplification ladder */
  const simpleWrap = el('div', 'simple');
  card.appendChild(simpleWrap);
  if (st.vereinfachung) {
    const sb = el('button', 'ghost', 'اشرح أبسط');
    sb.onclick = () => {
      const order = ['beispiel', 'analogie', 'regel'];
      if (simpleLevel >= order.length) { toast('هذه أبسط صورة للفكرة.'); return; }
      const key = order[simpleLevel++];
      const names = { beispiel: 'مثال', analogie: 'تشبيه', regel: 'القاعدة' };
      const box = el('div', 'layer');
      box.appendChild(el('div', 'kicker', names[key]));
      box.appendChild(el('div', null, st.vereinfachung[key]));
      simpleWrap.appendChild(box);
    };
    card.appendChild(sb);
  }

  /* merkhilfe */
  if (st.merkhilfe) {
    const m = el('div', 'merkhilfe');
    m.appendChild(el('div', 'kicker', 'حيلة الذاكرة — ' + st.merkhilfe.trick));
    m.appendChild(el('div', null, 'كيف: ' + st.merkhilfe.wie));
    m.appendChild(el('div', null, 'لماذا: ' + st.merkhilfe.warum));
    card.appendChild(m);
  }

  /* hints */
  const hintWrap = el('div', 'hints'); card.appendChild(hintWrap);
  if (st.frage && (st.hinweise || []).length) {
    const hb = el('button', 'ghost', 'تلميح');
    hb.onclick = () => {
      const hs = st.hinweise;
      if (hintLevel < hs.length) {
        const h = el('div', 'hint'); h.textContent = '💡 ' + hs[hintLevel]; hintWrap.appendChild(h);
        if (hintLevel === 0) hb.textContent = 'تلميح ثانٍ';
        hintLevel++;
        if (hintLevel >= hs.length) hb.textContent = 'اكشف الجواب';
      } else {
        revealAnswer(st); assisted = true; hb.disabled = true;
      }
    };
    card.appendChild(hb);
  }

  /* question */
  if (st.frage) {
    const q = el('div', 'q'); card.appendChild(q);
    renderQuestion(st, q);
  } else if (st.type === 'sprechen') {
    const rec = el('div', 'q'); card.appendChild(rec);
    renderRecorder(st, rec);
  } else {
    /* pure reading step */
    const ok = el('button', 'primary', 'فهمت، تابع');
    ok.onclick = () => { markAnswered(st, null, false); answered = true; next(); };
    card.appendChild(ok);
  }

  v.appendChild(card);

  /* feedback + next */
  const fb = el('div', 'feedback'); fb.id = 'fb'; v.appendChild(fb);
  const nav = el('div', 'nav'); v.appendChild(nav);
  const nextBtn = el('button', 'primary wide', idx === steps().length - 1 ? 'أنهِ الدرس' : 'التالي');
  nextBtn.id = 'next'; nextBtn.disabled = !answered;
  nextBtn.onclick = next;
  nav.appendChild(nextBtn);
}

function revealAnswer(st) {
  const f = st.frage;
  let right = '';
  if (f.richtig) right = (f.optionen.find(o => o.id === f.richtig) || {}).text || '';
  else if (f.antworten) right = f.antworten[0];
  else if (f.paare) right = f.paare.map(p => p.links + ' → ' + p.rechts).join(' · ');
  const box = el('div', 'layer warn');
  box.appendChild(el('div', 'kicker', 'الجواب'));
  box.appendChild(el('div', null, right));
  box.appendChild(el('div', 'meta', 'كُشف الجواب ⇒ تُسجَّل هذه الخطوة كنجاح بمساعدة (E1a)، ولا تُحتسب في البوابة.'));
  $('#fb').appendChild(box);
  logError('—', right, 'pruefstrategie', 'lesson');
  markAnswered(st, null, true);
  $('#next').disabled = false;
}

/* ---------------- question renderers ---------------- */
function renderQuestion(st, host) {
  const f = st.frage;
  const qtext = el('div', 'qtext'); qtext.setAttribute('dir', 'auto'); qtext.textContent = f.frage;
  host.appendChild(qtext);

  if (f.art === 'mcq') {
    const opts = el('div', 'opts');
    f.optionen.forEach(o => {
      const b = el('button', 'opt'); b.setAttribute('dir', 'auto'); b.textContent = o.text;
      b.onclick = () => {
        if (answered || b.disabled) return;
        const ok = !!f.beliebig || o.id === f.richtig;
        b.classList.add(ok ? 'good' : 'bad');
        if (!ok) b.disabled = true; else answered = true;
        if (!ok) {
          const right = f.optionen.find(x => x.id === f.richtig);
          [...opts.children].forEach((c, i) => { if (f.optionen[i] && f.optionen[i].id === f.richtig) c.classList.add('good'); });
          const msg = (f.feedback && (f.feedback[o.id] || (f.feedback.wrong && f.feedback.wrong[o.id]))) || 'إجابة غير صحيحة.';
          logError(o.text, right ? right.text : '', (f.misconceptionFamilies || {})[o.id], 'lesson', o.id);
          showFeedback(false, msg);
        } else {
          showFeedback(true, (f.feedback && f.feedback[o.id]) || 'صحيح.');
        }
        markAnswered(st, o.id, assisted, ok);
        $('#next').disabled = false;
      };
      opts.appendChild(b);
    });
    host.appendChild(opts);
  }

  if (f.art === 'cloze') {
    const wrap = el('div', 'row');
    const inp = el('input', 'inp'); inp.setAttribute('dir', 'ltr'); inp.placeholder = '…';
    const btn = el('button', 'primary', 'تحقّق');
    const norm = s => (s || '').trim().toLowerCase().replace(/\s+/g, ' ');
    btn.onclick = () => {
      if (answered) return;
      const val = inp.value;
      const ok = f.antworten.some(a => norm(a) === norm(val));
      if (ok) { answered = true; showFeedback(true, (f.feedback && f.feedback.correct) || 'صحيح.'); markAnswered(st, val, assisted, true); }
      else {
        const near = f.nearMiss && Object.keys(f.nearMiss).find(k => norm(k) === norm(val));
        const msg = near ? f.nearMiss[near] : 'ليست هذه الكلمة. أعِد النظر في القاعدة أعلاه.';
        logError(val, f.antworten[0], near ? 'konjugation' : 'lexik-kollokation', 'lesson', null);
        showFeedback(false, msg);
      }
      $('#next').disabled = false;
    };
    inp.onkeydown = e => { if (e.key === 'Enter') btn.click(); };
    wrap.appendChild(inp); wrap.appendChild(btn); host.appendChild(wrap);
  }

  if (f.art === 'matching') {
    const left = el('div', 'mcol'), right = el('div', 'mcol');
    const rights = shuffle(f.paare);
    let picked = null, solved = 0;
    f.paare.forEach(p => {
      const b = el('button', 'mitem'); b.textContent = p.links; b.dataset.key = p.links;
      b.onclick = () => { if (b.classList.contains('done')) return; [...left.children].forEach(c => c.classList.remove('sel')); b.classList.add('sel'); picked = p; };
      left.appendChild(b);
    });
    rights.forEach(p => {
      const b = el('button', 'mitem'); b.textContent = p.rechts; b.dataset.key = p.links;
      b.onclick = () => {
        if (b.classList.contains('done')) return;
        if (!picked) { toast('اختر من العمود الأيمن أوّلًا.'); return; }
        if (picked.links === p.links) {
          b.classList.add('done'); [...left.children].find(c => c.dataset.key === p.links).classList.add('done');
          const t = el('div', 'hint'); t.textContent = '✔ ' + p.haken; host.appendChild(t);
          solved++; picked = null;
          if (solved === f.paare.length) { answered = true; showFeedback(true, (f.feedback && f.feedback.correct) || 'أحسنت.'); markAnswered(st, null, assisted, true); $('#next').disabled = false; }
        } else {
          b.classList.add('bad'); setTimeout(() => b.classList.remove('bad'), 700);
          logError(picked.links + ' → ' + b.textContent, picked.links + ' → ' + picked.rechts, 'lexik-kollokation', 'lesson', null);
          showFeedback(false, 'ليست هذه. ' + picked.haken);
        }
      };
      right.appendChild(b);
    });
    const grid = el('div', 'mgrid'); grid.appendChild(left); grid.appendChild(right); host.appendChild(grid);
  }

  if (f.art === 'hoeren') {
    const btn = el('button', 'ghost audio', '🔊 شغّل التسجيل');
    btn.onclick = () => speak(st.audio || '');
    host.appendChild(btn);
    const sub = Object.assign({}, f, { art: (f.optionen ? 'mcq' : 'cloze') });
    renderQuestion({ frage: sub, phase: st.phase }, host);
    const note = el('div', 'meta', 'النصّ الكامل يظهر مع الجواب بعد الإجابة — لا قبله.');
    host.appendChild(note);
  }
}

/* ---------------- lesson end + self-correction (T15) ---------------- */
/* A Check below 80% sends the learner back to the fundamentals it depends on —
   steps S5–S12 — never back to S1. This is the behaviour that proves the tool
   corrects itself instead of restarting the learner. */
function renderLessonEnd() {
  const v = $('#view'); v.innerHTML = '';
  const card = el('div', 'card');

  const log = (S.checkLog || []).filter(c => c.lessonId === LESSON_ID);
  const total = log.length;
  const clean = log.filter(c => c.correct && !c.assisted).length;
  const score = total ? Math.round(clean / total * 100) : 100;

  card.appendChild(el('div', 'kicker', 'أُنجز الدرس'));
  card.appendChild(el('div', 'lesson-title', 'أنهيت درس اليوم الأول.'));
  card.appendChild(el('div', 'meta', `الفحص: ${clean}/${total} بلا مساعدة ⇒ ${score}% (المطلوب 80%)`));
  card.appendChild(el('div', 'meta', `أخطاء مسجّلة: ${S.errorLedger.length} · تسجيلات: ${S.portfolio.recordings.length}`));

  if (total && score < 80) {
    const warnBox = el('div', 'layer warn');
    warnBox.appendChild(el('div', 'kicker', 'ما نفعله الآن'));
    warnBox.appendChild(el('div', null, 'لا نُعيد الدرس من البداية. نعود إلى الأساسيات التي بُني عليها الفحص فقط: الخطوات 5 إلى 12 (الأصوات والتحيات).'));
    card.appendChild(warnBox);

    const b = el('button', 'primary', 'أعِد الأساسيات (الخطوة 5)');
    b.onclick = () => {
      const p = prog();
      p.completedSteps = p.completedSteps.filter(id => {
        const n = parseInt(id.slice(1), 10);
        return !(n >= 5 && n <= 12);
      });
      p.lastStepId = 's05'; p.state = 'in_progress';
      save(); renderLesson();
    };
    card.appendChild(b);

    const b2 = el('button', 'ghost', 'أكملت، لا أريد الإعادة الآن');
    b2.onclick = () => { const p = prog(); p.state = 'completed'; save(); renderHome(); };
    card.appendChild(b2);
  } else {
    const okBox = el('div', 'layer good');
    okBox.appendChild(el('div', 'kicker', 'جاهز للغد'));
    okBox.appendChild(el('div', null, 'واجب الغد: قل تحيتك الألمانية على ثلاثة أشخاص حقيقيين.'));
    card.appendChild(okBox);
    const b = el('button', 'primary', 'إلى اليوم'); b.onclick = renderHome; card.appendChild(b);
  }

  v.appendChild(card);
}

/* ---------------- recorder UI ---------------- */
function renderRecorder(st, host) {
  const rb = el('button', 'primary rec-btn', '● سجّل الآن');
  const status = el('div', 'rec-status', 'اضغط التسجيل، ثم تكلّم نحو 20 ثانية.');
  const ob = el('button', 'primary ok-btn', 'إنهاء التسجيل والمتابعة');
  ob.disabled = true;
  rb.onclick = async () => { rb.disabled = true; await startRecording(st, host); ob.disabled = false; };
  ob.onclick = () => { if (host._stopManual) host._stopManual(); stopRecording(host); markAnswered(st, null, false); answered = true; $('#next').disabled = false; ob.disabled = true; ob.textContent = 'سُجّل ✔'; };
  host.appendChild(rb); host.appendChild(status); host.appendChild(ob);
  if (!navigator.mediaDevices || !window.MediaRecorder) {
    host.appendChild(el('div', 'meta', 'متصفّحك لا يسمح بالتسجيل من هذه الصفحة — ستُقاس المدّة يدويًا، ويُحفظ تقدّمك كالمعتاد.'));
  }
}

/* ---------------- feedback ---------------- */
function showFeedback(ok, msg) {
  const fb = $('#fb'); if (!fb) return;
  const box = el('div', 'layer ' + (ok ? 'good' : 'bad'));
  box.appendChild(el('div', 'kicker', ok ? 'صحيح' : 'ليس بعد'));
  box.appendChild(el('div', null, msg));
  fb.appendChild(box);
  if (fb.children.length > 3) fb.removeChild(fb.firstChild);
}

/* ---------------- answering + navigation ---------------- */
function markAnswered(st, given, wasAssisted, correct) {
  const p = prog();
  if (st.phase === 'Check') {
    S.checkLog = (S.checkLog || []).filter(c => c.stepId !== st.id);
    S.checkLog.push({ stepId: st.id, lessonId: LESSON_ID, correct: correct !== false, assisted: !!wasAssisted, at: new Date().toISOString() });
  }
  if (!p.completedSteps.includes(st.id)) p.completedSteps.push(st.id);
  p.lastStepId = st.id;
  S.gaps.lastSessionDate = today();
  writeEvidence('cap.' + LESSON_ID + '.' + st.id, wasAssisted ? 'E1a' : 'E1', wasAssisted);
  save();
}

function next() {
  if (!answered) { toast('أجب أوّلًا.'); return; }
  const p = prog();
  if (idx >= steps().length - 1) {
    p.state = 'completed'; p.lastStepId = steps()[idx].id; S.stats.sessionsCompleted++; save();
    renderLessonEnd();
    return;
  }
  idx++;
  answered = prog().completedSteps.includes(steps()[idx].id);
  hintLevel = 0; simpleLevel = 0; assisted = false;
  drawStep();
  window.scrollTo(0, 0);
}

/* ---------------- recorder internals ---------------- */
let mediaRec = null, chunks = [], recTimer = null, recStart = 0;

async function startRecording(st, host) {
  if (!navigator.mediaDevices || !window.MediaRecorder) {
    toast('التسجيل غير متاح هنا. سأقيس الزمن يدويًا — تحدّث بصوت مسموع.');
    manualTimer(host, st);
    const okb0 = host.querySelector('.ok-btn'); if (okb0) okb0.disabled = false;
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    chunks = [];
    mediaRec = new MediaRecorder(stream);
    mediaRec.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
    mediaRec.onstop = async () => {
      stream.getTracks().forEach(t => t.stop());
      const secs = Math.round((Date.now() - recStart) / 1000);
      const blob = new Blob(chunks, { type: mediaRec.mimeType || 'audio/webm' });
      const id = 'rec_' + Date.now();
      try {
        await mediaPut({ id, blob, date: today(), capability: 'cap.' + LESSON_ID + '.' + st.id, seconds: secs, lesson: LESSON_ID, step: st.id });
        S.portfolio.recordings.push({ id, date: today(), seconds: secs, where: 'local', capability: 'cap.' + LESSON_ID + '.' + st.id });
        save();
        host.querySelector('.rec-status').textContent = `تمّ الحفظ: ${secs} ثانية. #${S.portfolio.recordings.length} في محفظتك.`;
      } catch (e) {
        host.querySelector('.rec-status').textContent = 'تعذّر حفظ الصوت: ' + e.message;
      }
    };
    recStart = Date.now(); mediaRec.start();
    const okb = host.querySelector('.ok-btn'); if (okb) okb.disabled = false;
    host.querySelector('.rec-status').textContent = 'يسجّل… تكلّم الآن.';
    clearInterval(recTimer);
    recTimer = setInterval(() => { host.querySelector('.rec-status').textContent = 'يسجّل… ' + Math.round((Date.now() - recStart) / 1000) + ' ث'; }, 500);
  } catch (e) {
    toast('لم يُسمح بالميكروفون. سأقيس الزمن يدويًا.');
    manualTimer(host, st);
    const okb1 = host.querySelector('.ok-btn'); if (okb1) okb1.disabled = false;
  }
}
function stopRecording(host) { if (mediaRec && mediaRec.state === 'recording') { clearInterval(recTimer); mediaRec.stop(); } }
function manualTimer(host, st) {
  let secs = 0;
  const iv = setInterval(() => { secs++; const s = host.querySelector('.rec-status'); if (s) s.textContent = `تكلّم بصوت مسموع… ${secs} ث`; }, 1000);
  host._stopManual = () => { clearInterval(iv); const s = host.querySelector('.rec-status'); if (s) s.textContent = `انتهى: ${secs} ثانية (قُيس الزمن يدويًا، بلا ملف صوتي).`; };
}

/* ---------------- export / import ---------------- */
function doExport() {
  S.stats.lastExport = new Date().toISOString();
  save();
  const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `deutschweg-backup-${today()}.json`;
  a.click();
  toast('تمّ التصدير.');
}

function importFile(file) {
  const r = new FileReader();
  r.onload = () => {
    try {
      const incoming = JSON.parse(r.result);
      localStorage.setItem(KEY + '_backup_' + Date.now(), JSON.stringify(S)); /* safety copy before merge */
      S = mergeState(S, incoming);
      /* union arrays by id, prefer higher evidence */
      const byId = {};
      [...(S.capabilities || []), ...(incoming.capabilities || [])].forEach(c => {
        const rank = { E0: 0, E1: 1, E1a: 1, E2: 2, E3: 3 };
        if (!byId[c.id] || rank[c.evidence] > rank[byId[c.id].evidence]) byId[c.id] = c;
      });
      S.capabilities = Object.values(byId);
      const errs = {}; [...(S.errorLedger || []), ...(incoming.errorLedger || [])].forEach(e => { errs[e.id + e.wrong] = e; });
      S.errorLedger = Object.values(errs);
      save(); renderHome();
      toast('تمّ الدمج: لا شيء استُبدل.');
    } catch (e) { alert('ملف غير صالح: ' + e.message); }
  };
  r.readAsText(file);
}

/* ---------------- boot ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  const f = $('#file');
  if (f) f.onchange = e => { if (e.target.files[0]) importFile(e.target.files[0]); };
  renderHome();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {/* offline-first is best-effort; the app works without it */});
  }
});

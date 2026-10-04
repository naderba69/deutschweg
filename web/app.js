/* ============================================================
   Deutschweg — shell, lesson loop, portfolio, backup.
   Exercise types live in engine/renderers.js. P1 instruments
   live in engine/practice.js. Storage never bypasses engine/storage.js.
   ============================================================ */

let S = DW.session.S = DW.storage.load();
function save() { DW.storage.save(S); }
DW.persist = save;
DW.ledger.recomputeR1();

const RANK = { E0: 0, E1a: 1, E1: 2, E2: 3, E3: 4 };
DW.caps = {
  write(id, state, assisted, textAr, track) {
    if (!id) return;
    let c = S.capabilities.find(x => x.id === id);
    if (!c) {
      c = {
        id, track: track || 'grammar', level: 'A0',
        text: { ar: textAr || '', de: '' },
        evidence: 'E0', assisted: false,
        firstSeen: DW.today(), lastActive: DW.today(),
        history: [], gate: 'G1', decayDue: DW.plusDays(45), activationScheduled: false
      };
      S.capabilities.push(c);
    }
    if ((RANK[state] || 0) >= (RANK[c.evidence] || 0)) {
      c.evidence = state;
      c.assisted = !!assisted;
    }
    c.lastActive = DW.today();
    c.decayDue = DW.plusDays(45 * (c.track === 'chunks' || c.track === 'pronunciation' ? 1.6 : 1));
    if (textAr && !c.text.ar) c.text.ar = textAr;
    c.history.push({ state, at: new Date().toISOString(), source: id });
  }
};

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
  list.filter(Boolean).forEach(t => {
    const u = new SpeechSynthesisUtterance(t);
    u.lang = 'de-DE';
    if (deVoice) u.voice = deVoice;
    u.rate = 0.9;
    speechSynthesis.speak(u);
  });
}
DW.speak = speak;

const $ = (s, r = document) => r.querySelector(s);
function el(tag, cls, txt) { const n = document.createElement(tag); if (cls) n.className = cls; if (txt !== undefined) n.textContent = txt; return n; }
function toast(msg) { const t = $('#toast'); if (!t) return; t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 3200); }
DW.toast = toast;

let forcedLessonId = null;
function lessonId() {
  if (forcedLessonId && window.DW_LESSONS && window.DW_LESSONS[forcedLessonId]) return forcedLessonId;
  const lessons = window.DW_LESSONS || {};
  if (window.DW_SYLLABUS && typeof window.DW_SYLLABUS.next === 'function') {
    const nxt = window.DW_SYLLABUS.next(S);
    if (nxt && !nxt.blocked && nxt.status === 'authored' && lessons[nxt.id]) return nxt.id;
    const open = (S.progress || []).find(p => p.state !== 'completed' && lessons[p.lessonId]);
    if (open) return open.lessonId;
  }
  return lessons['a0-u1-l1'] ? 'a0-u1-l1' : (Object.keys(lessons)[0] || 'a0-u1-l1');
}
function lesson() { return window.DW_LESSONS[lessonId()]; }
function steps() { return lesson().schritte; }
function prog() {
  let p = S.progress.find(x => x.lessonId === lessonId());
  if (!p) { p = { lessonId: lessonId(), lastStepId: steps()[0].id, completedSteps: [], state: 'in_progress' }; S.progress.push(p); }
  return p;
}
function stepIndexById(id) { const i = steps().findIndex(s => s.id === id); return i < 0 ? 0 : i; }
function capIdOf(st) { return (st.frage && st.frage.ziel) || st.ziel || ('cap.' + lessonId() + '.' + st.id); }

function exportDue() {
  const ref = S.stats.lastExport || S.stats.startedAt;
  if (!ref) return false;
  return DW.now().getTime() - new Date(ref).getTime() >= 7 * 86400000;
}
function dueCardCount() {
  const today = DW.today();
  return (S.srs.cards || []).filter(c => ['receptive', 'productive', 'sentence'].some(d => c[d] && c[d].due && c[d].due <= today)).length;
}

/* ---------------- navigation ---------------- */
let timers = [];
function clearTimers() { timers.forEach(clearInterval); timers.forEach(clearTimeout); timers = []; }
function go(name) {
  clearTimers();
  if (name === 'home') { forcedLessonId = null; renderHome(); }
  else if (name === 'lesson') renderLesson();
  else if (name === 'ledger') DW.practice.openLedger($('#view'));
  else if (name === 'attack') DW.practice.openAttack($('#view'));
  else if (name === 'drill') DW.practice.openDrill($('#view'));
  else if (name === 'srs') DW.practice.openSrs($('#view'));
  else if (name === 'write') DW.practice.openWrite($('#view'));
  else if (name === 'workshop') DW.practice.openWorkshop($('#view'));
  else if (name === 'portfolio') renderPortfolio();
  else if (name === 'today') renderToday();
  else if (name === 'indicators') renderIndicators();
  else if (name === 'map') renderMap();
  else if (name === 'week') renderWeek();
  else if (name === 'pause') renderPause();
  else if (name === 'activation') renderActivation();
  else if (name === 'reading') renderReading();
  else if (name === 'generate') renderGenerate();
  else if (name === 'chunks') renderChunks();
  else if (name === 'exam') renderExam();
}
DW.go = go;

function renderHome() {
  clearTimers();
  const v = $('#view');
  v.innerHTML = '';
  v.appendChild(el('h1', null, 'اليوم'));

  if (exportDue()) {
    const ban = el('div', 'card small');
    ban.appendChild(el('div', 'kicker', 'نسخ احتياطي'));
    ban.appendChild(el('div', null, 'مرّ أسبوع على آخر نسخة. التصدير معروض الآن، ولا يُنزَّل بصمت.'));
    const ex = el('button', 'ghost', 'تصدير ملف الحالة');
    ex.type = 'button';
    ex.onclick = doExport;
    ban.appendChild(ex);
    v.appendChild(ban);
  }

  const p = prog();
  const done = p.completedSteps.length;
  const total = steps().length;
  const started = done > 0;
  const card = el('div', 'card');
  card.appendChild(el('div', 'kicker', 'درس اليوم'));
  card.appendChild(el('div', 'lesson-title', lesson().title.ar));
  card.appendChild(el('div', 'meta', (lesson().level || 'A0') + ' · ' + lesson().minutes + ' دقيقة · ' + total + ' خطوة'));
  if (p.state === 'completed') card.appendChild(el('div', 'meta', 'أُنجز هذا الدرس. إعادته ليست تقدّمًا.'));
  if (started) {
    const cur = steps()[stepIndexById(p.lastStepId)];
    card.appendChild(el('div', 'context', 'توقّفت عند الخطوة ' + (stepIndexById(p.lastStepId) + 1) + ' من ' + total + ' — ' + (cur.recap || '')));
  } else {
    card.appendChild(el('div', 'context', lessonId() === 'a0-u1-l1'
      ? 'أوّل جلسة: الصوت أوّلًا، ثم التحية. التالي لا يتحرك قبل الإجابة.'
      : 'التالي لا يتحرك قبل الإجابة. هذا هو الدرس الذي تسمح به الخريطة.'));
  }
  const b = el('button', 'primary', started ? 'تابع من حيث توقّفت' : 'ابدأ الدرس');
  b.type = 'button';
  b.onclick = () => { $('#view').dataset.ctx = ''; renderLesson(); };
  card.appendChild(b);
  if (S.gaps && S.gaps.stopped) card.appendChild(el('div', 'context resume', DW.adaptive.resumeLine(S.gaps.stopped)));
  v.appendChild(card);

  if (DW.adaptive) {
    const todayCard = el('div', 'card small');
    todayCard.appendChild(el('div', 'kicker', 'جلسة اليوم'));
    const plan = DW.adaptive.compose(S, DW.today());
    todayCard.appendChild(sourceBtn(plan.blocks.length + ' كتل · ' + plan.minutes + ' دقيقة', 'عدد الكتل ومجموع دقائقها من adaptive.compose. كل كتلة تحمل سببًا في شاشة الجلسة. المصدر: جلسة اليوم.'));
    const openToday = el('button', 'ghost', 'جلسة اليوم');
    openToday.type = 'button';
    openToday.onclick = () => go('today');
    todayCard.appendChild(openToday);
    v.appendChild(todayCard);
  }

  const live = S.errorLedger.filter(e => e.status === 'live').length;
  const watched = S.errorLedger.filter(e => e.status === 'watched').length;
  const due = dueCardCount();
  let rec = 'workshop';
  let why = 'ثمانية أشكال للخطأ. تعلّم الشكل قبل أن يقيسه المحرّك.';
  if (live) { rec = 'attack'; why = 'دين حيّ: ' + live + '. الهجوم يسبق المحتوى الجديد.'; }
  else if (due) { rec = 'srs'; why = 'بطاقات مستحقّة: ' + due + '. السقف 30 حتى لا تبتلع الجلسة.'; }
  else if (S.stats.workshopDone) { rec = 'drill'; why = 'قياس التلقائية بعد تمرين، لا قبله.'; }

  const recCard = el('div', 'card small recommend');
  recCard.appendChild(el('div', 'kicker', 'تقترح الأداة'));
  recCard.appendChild(el('div', 'reason', why));
  const rb = el('button', 'ghost', { attack: 'هجوم الآن', srs: 'بطاقات المراجعة', workshop: 'ورشة الأشكال', drill: 'تدريب الثلاث ثوانٍ' }[rec]);
  rb.type = 'button';
  rb.onclick = () => go(rec);
  recCard.appendChild(rb);
  v.appendChild(recCard);

  const tools = el('div', 'card small');
  tools.appendChild(el('div', 'kicker', 'أدوات التصحيح'));
  const row = el('div', 'row');
  [
    ['دفتر الأخطاء', 'ledger'],
    ['بطاقات المراجعة', 'srs'],
    ['تدريب الثلاث ثوانٍ', 'drill'],
    ['كتابة', 'write'],
    ['ورشة الأشكال', 'workshop'],
    ['المحفظة', 'portfolio'],
    ['المؤشرات', 'indicators'],
    ['خريطة القدرات', 'map'],
    ['توزيع الأسبوع', 'week'],
    ['قراءة', 'reading'],
    ['سماع', 'listening'],
    ['مولّد', 'generate'],
    ['قوالب', 'chunks'],
    ['الامتحان', 'exam']
  ].forEach(([label, name]) => {
    const g = el('button', 'ghost', label);
    g.type = 'button';
    g.onclick = () => go(name);
    row.appendChild(g);
  });
  tools.appendChild(row);
  v.appendChild(tools);

  const stc = el('div', 'card small');
  stc.appendChild(el('div', 'kicker', 'حالة الأدوات'));
  const src = el('button', 'src', 'دين حيّ R1: ' + live + ' · تحت المراقبة: ' + watched);
  src.type = 'button';
  src.onclick = () => {
    const box = el('div', 'layer src-box', 'R1 = أسطر errorLedger ذات الحالة live فقط. تحت المراقبة ليست دينًا. المتقاعد لا يُحسب. المصدر: errorLedger.');
    src.after(box);
  };
  stc.appendChild(src);
  stc.appendChild(sourceBtn('قدرات مسجّلة: ' + S.capabilities.length + ' · تسجيلات: ' + S.portfolio.recordings.length, 'عدد capabilities[] وعدد portfolio.recordings. ليست نسبة إتمام. المصدر: الحالتان في deutschweg_v2.'));
  v.appendChild(stc);

  const bak = el('div', 'card small');
  bak.appendChild(el('div', 'kicker', 'النسخ الاحتياطي'));
  const brow = el('div', 'row');
  const ex = el('button', 'ghost', 'تصدير ملف الحالة');
  ex.type = 'button';
  ex.onclick = doExport;
  const im = el('button', 'ghost', 'استيراد');
  im.type = 'button';
  im.onclick = () => $('#file').click();
  const full = el('button', 'ghost', 'نسخة كاملة');
  full.type = 'button';
  full.onclick = doFullBackup;
  brow.appendChild(ex); brow.appendChild(im); brow.appendChild(full);
  bak.appendChild(brow);
  bak.appendChild(el('div', 'meta', 'التصدير حالة JSON. النسخة الكاملة حالة وصوت، بلا ضغط خارجي. الاستيراد يدمج ولا يستبدل.'));
  v.appendChild(bak);
}

/* ---------------- lesson ---------------- */
let idx = 0, answered = false, assisted = false, hintLevel = 0, simpleLevel = 0;
let wrongCounts = {};
let escStreak = 0;
let armNext = false;
let epoch = 0;

function renderLesson() {
  const p = prog();
  idx = stepIndexById(p.lastStepId);
  answered = p.completedSteps.includes(steps()[idx].id);
  assisted = false;
  hintLevel = 0;
  simpleLevel = 0;
  drawStep();
}

function exerciseFromStep(st) {
  if (st.type === 'sprechen') {
    return {
      art: 'sprechen', stable: true,
      ziel: st.ziel || capIdOf(st),
      familie: 'aussprache',
      prompt: st.erklaerung,
      promptDe: st.zeigt && st.zeigt.de,
      targetSeconds: 20
    };
  }
  if (!st.frage) return null;
  const f = st.frage;
  const art = st.type === 'hoeren' ? 'hoeren' : f.art;
  return {
    art, stable: true,
    /* the forms that were never used in a lesson before P3.2 */
    de: f.de, ar: f.ar, example: f.example, direction: f.direction, note: f.note,
    tokens: f.tokens, correct: f.correct, finite: f.finite, fields: f.fields, clause: f.clause, rightBracket: f.rightBracket,
    prompt: f.prompt, promptDe: f.promptDe, points: f.points, minWords: f.minWords,
    ziel: f.ziel,
    familie: (f.misconceptionFamilies && Object.values(f.misconceptionFamilies)[0]) || 'lexik-kollokation',
    frage: f.frage,
    optionen: f.optionen,
    richtig: f.richtig,
    beliebig: f.beliebig,
    feedback: f.feedback,
    misconceptionFamilies: f.misconceptionFamilies,
    antworten: f.antworten,
    nearMiss: f.nearMiss,
    nearFamily: 'konjugation',
    paare: f.paare,
    audio: st.audio,
    audioSrc: st.audioSrc || (Array.isArray(st.audio) && st.audio.length === 1 && st.audio[0] === 'Wasser' ? 'audio/wasser.mp3' : null),
    transcript: st.transcript || (art === 'hoeren' && Array.isArray(st.audio) ? st.audio.join(' · ') : null),
    highlight: st.highlight || (Array.isArray(st.audio) && st.audio.length === 1 ? st.audio[0] : null),
    hideTranscript: art === 'hoeren' && st.phase !== 'Anwenden'
  };
}

function vocabTable(items) {
  /* The word list of the step: word with its article, plural, Arabic gloss,
     one example, and the error an Arabic speaker usually makes. Never a bare list. */
  const box = el('div', 'vocab');
  box.appendChild(el('div', 'kicker', 'كلمات الخطوة (' + items.length + ')'));
  items.forEach(it => {
    const row = el('div', 'vocab-row');
    const head = el('div', 'vocab-head');
    const de = el('span', 'vocab-de');
    de.setAttribute('dir', 'ltr');
    de.textContent = it.de + (it.pl && it.pl !== '—' ? ' · ' + it.pl : '');
    head.appendChild(de);
    const sp = el('button', 'ghost vocab-say', '🔊');
    sp.type = 'button';
    sp.setAttribute('aria-label', 'اسمع ' + it.de);
    sp.onclick = () => speak([it.de]);
    head.appendChild(sp);
    row.appendChild(head);
    row.appendChild(el('div', 'vocab-ar', it.ar));
    const more = el('button', 'link vocab-toggle', 'مثال والخطأ الشائع');
    more.type = 'button';
    let open = false;
    const body = el('div', 'vocab-body');
    const ex = el('div', 'vocab-ex', it.ex);
    ex.setAttribute('dir', 'ltr');
    body.appendChild(ex);
    const err = el('div', 'vocab-err');
    err.setAttribute('dir', 'ltr');
    err.textContent = '✗ ' + it.err;
    body.appendChild(err);
    body.appendChild(el('div', 'vocab-why', it.why));
    body.style.display = 'none';
    more.onclick = () => {
      open = !open;
      body.style.display = open ? '' : 'none';
      more.textContent = open ? 'أخفِ المثال' : 'مثال والخطأ الشائع';
    };
    row.appendChild(more);
    row.appendChild(body);
    box.appendChild(row);
  });
  return box;
}

function drawStep() {
  clearTimers();
  const my = ++epoch;
  const st = steps()[idx];
  const p = prog();
  p.lastStepId = st.id;
  save();
  const v = $('#view');
  v.innerHTML = '';
  const head = el('div', 'lesson-head');
  const back = el('button', 'link', '‹ اليوم');
  back.type = 'button';
  back.onclick = renderHome;
  head.appendChild(back);
  head.appendChild(el('div', 'counter', 'الخطوة ' + (idx + 1) + ' من ' + steps().length));
  v.appendChild(head);
  const bar = el('div', 'bar');
  const fill = el('div', 'fill');
  fill.style.width = Math.round(idx / steps().length * 100) + '%';
  bar.appendChild(fill);
  v.appendChild(bar);

  const card = el('div', 'card');
  card.appendChild(el('div', 'kicker', st.phase));
  if (st.recap) card.appendChild(el('div', 'context', st.recap));
  if (st.zeigt) {
    const de = el('div', 'zeigt');
    de.setAttribute('dir', 'ltr');
    de.textContent = st.zeigt.de;
    card.appendChild(de);
  }
  const useHoren = st.type === 'hoeren' && st.frage;
  if (st.audio && !useHoren && st.type !== 'sprechen') {
    const ab = el('button', 'ghost audio', '🔊 استمع');
    ab.type = 'button';
    ab.onclick = () => speak(st.audio);
    card.appendChild(ab);
  }
  if (st.frage && st.frage.zeigt) {
    const qde = el('div', 'zeigt');
    qde.setAttribute('dir', 'ltr');
    qde.textContent = st.frage.zeigt;
    card.appendChild(qde);
  }
  if (st.wortschatz && st.wortschatz.length) card.appendChild(vocabTable(st.wortschatz));
  if (st.erklaerung) card.appendChild(el('p', 'erklaerung', st.erklaerung));

  const simpleWrap = el('div', 'simple');
  card.appendChild(simpleWrap);
  if (st.vereinfachung) {
    const sb = el('button', 'ghost', 'اشرح أبسط');
    sb.type = 'button';
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
  if (st.merkhilfe) {
    const m = el('div', 'merkhilfe');
    m.appendChild(el('div', 'kicker', 'حيلة الذاكرة — ' + st.merkhilfe.trick));
    m.appendChild(el('div', null, 'كيف: ' + st.merkhilfe.wie));
    m.appendChild(el('div', null, 'لماذا: ' + st.merkhilfe.warum));
    card.appendChild(m);
  }
  const hintWrap = el('div', 'hints');
  card.appendChild(hintWrap);
  if (st.frage && st.phase !== 'Check' && (st.hinweise || []).length) {
    const hb = el('button', 'ghost', 'تلميح');
    hb.type = 'button';
    hb.onclick = () => {
      assisted = true;
      const hs = st.hinweise;
      if (hintLevel < hs.length) {
        const h = el('div', 'hint');
        h.textContent = '💡 ' + hs[hintLevel];
        hintWrap.appendChild(h);
        if (hintLevel === 0) hb.textContent = 'تلميح ثانٍ';
        hintLevel++;
        if (hintLevel >= hs.length) hb.textContent = 'اكشف الجواب';
      } else {
        revealAnswer(st);
        hb.disabled = true;
      }
    };
    card.appendChild(hb);
  }

  const q = el('div', 'q');
  q.id = 'q';
  const ex = exerciseFromStep(st);
  if (ex) {
    card.appendChild(q);
    DW.renderers.mount(q, ex, {
      speak,
      locked: () => answered,
      revealOnWrong: st.phase === 'Check',
      assisted: () => assisted,
      onResult: r => handleResult(st, r)
    });
  } else {
    const ok = el('button', 'primary', 'فهمت، تابع');
    ok.type = 'button';
    ok.onclick = () => { markAnswered(st, null, false, true); answered = true; next(); };
    card.appendChild(ok);
  }
  if (armNext && st.frage && st.phase !== 'Check') {
    armNext = false;
    const t = el('div', 'timer', 'تصعيد: 12 ثانية. ثلاث إجابات بلا مساعدة.');
    card.appendChild(t);
    let left = 12;
    const id = setInterval(() => {
      if (my !== epoch) { clearInterval(id); return; }
      left -= 1;
      if (left <= 0) {
        clearInterval(id);
        assisted = true;
        t.textContent = 'انتهى وقت التصعيد. ما بعده يُسجَّل بمساعدة إن أُجيب الآن.';
      } else t.textContent = 'تصعيد: ' + left + ' ثانية.';
    }, 1000);
    timers.push(id);
  }
  v.appendChild(card);
  const fb = el('div', 'feedback');
  fb.id = 'fb';
  v.appendChild(fb);
  const nav = el('div', 'nav');
  const nextBtn = el('button', 'primary wide', idx === steps().length - 1 ? 'أنهِ الدرس' : 'التالي');
  nextBtn.type = 'button';
  nextBtn.id = 'next';
  nextBtn.disabled = !answered;
  nextBtn.onclick = next;
  nav.appendChild(nextBtn);
  v.appendChild(nav);
}

function handleResult(st, r) {
  const isCheck = st.phase === 'Check';
  if (r.recording) {
    saveRecording(st, r);
    markAnswered(st, null, !!r.silence, true);
    answered = true;
    const nb = $('#next');
    if (nb) nb.disabled = false;
    showFeedback(!r.silence, r.message || 'سُجّل.');
    return;
  }
  if (r.triaged && !r.correct) {
    DW.ledger.log({ wrong: r.wrong || r.given || '—', right: r.right || '', family: r.family, source: 'listening', misconceptionId: r.misconceptionId });
    assisted = true;
    answered = true;
    const nb = $('#next');
    if (nb) nb.disabled = false;
    showFeedback(false, r.message || 'صُنّف الخطأ.');
    save();
    return;
  }
  if (!r.correct) {
    DW.ledger.log({
      wrong: r.wrong || r.given || '—',
      right: r.right || '',
      family: r.family,
      source: 'lesson',
      misconceptionId: r.misconceptionId || null
    });
    showFeedback(false, r.message || 'ليس بعد.');
    if (isCheck) {
      markAnswered(st, r.given, false, false);
      answered = true;
      $('#next').disabled = false;
      return;
    }
    escStreak = 0;
    wrongCounts[st.id] = (wrongCounts[st.id] || 0) + 1;
    const art = st.frage && st.frage.art;
    if (wrongCounts[st.id] >= 3 && (art === 'mcq' || art === 'cloze') && !$('#remedial')) injectRemedial(st);
    return;
  }
  const wasAssisted = assisted || !!r.assisted;
  markAnswered(st, r.given, wasAssisted, true);
  answered = true;
  const nb = $('#next');
  if (nb) nb.disabled = false;
  showFeedback(true, (r.message || 'صحيح.') + (wasAssisted ? ' سُجّل E1a، ولا يُحتسب في البوابة.' : ' سُجّل E1. لم يُثبت تحت الضغط بعد.'));
  if (!wasAssisted) escStreak++;
  else escStreak = 0;
  if (escStreak >= 3) armNext = true;
  if (DW.BANK.STEP_CARDS[st.id]) DW.practice.introduce(DW.BANK.STEP_CARDS[st.id]);
  else if (window.DW_STEP_CARDS && window.DW_STEP_CARDS[lessonId() + ':' + st.id]) DW.practice.introduce(window.DW_STEP_CARDS[lessonId() + ':' + st.id]);
}

function injectRemedial(st) {
  assisted = true;
  const f = st.frage;
  let ex = null;
  if (f.optionen && f.richtig) {
    const right = f.optionen.find(o => o.id === f.richtig);
    const wrong = f.optionen.find(o => o.id !== f.richtig);
    ex = {
      art: 'mcq', stable: true, ziel: f.ziel || capIdOf(st), familie: 'pruefstrategie',
      frage: 'خطوة أسهل: أيّهما الصحيح؟',
      optionen: [right, wrong].filter(Boolean),
      richtig: f.richtig,
      feedback: f.feedback || {}
    };
  } else if (f.antworten) {
    const ans = f.antworten[0];
    ex = {
      art: 'mcq', stable: true, ziel: f.ziel || capIdOf(st), familie: 'pruefstrategie',
      frage: 'خطوة أسهل: اختر الكلمة.',
      optionen: [{ id: 'a', text: ans }, { id: 'b', text: ans.length > 2 ? ans.slice(0, -1) : '—' }],
      richtig: 'a',
      feedback: { a: 'هذه الكلمة. النجاح هنا بمساعدة.', b: 'ناقصة. انظر إلى الكلمة كاملة.' }
    };
  }
  if (!ex) return;
  const box = el('div', 'layer warn');
  box.id = 'remedial';
  box.appendChild(el('div', 'kicker', 'خطوة علاجية'));
  box.appendChild(el('div', null, 'نفس القدرة، بشكل أسهل. النجاح هنا E1a، ولا يُحتسب في البوابة.'));
  const host = el('div');
  box.appendChild(host);
  $('#fb').appendChild(box);
  document.querySelectorAll('#q .opt, #q .inp, #q button').forEach(n => { n.disabled = true; });
  DW.renderers.mount(host, ex, {
    onResult(r) {
      if (!r.correct) return;
      markAnswered(st, r.given, true, true);
      answered = true;
      $('#next').disabled = false;
      showFeedback(true, 'أُزيل العائق. سُجّل E1a.');
    }
  });
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
  DW.ledger.log({ wrong: '—', right, family: 'pruefstrategie', source: 'lesson' });
  assisted = true;
  markAnswered(st, null, true, true);
  answered = true;
  $('#next').disabled = false;
}

function showFeedback(ok, msg) {
  const fb = $('#fb');
  if (!fb) return;
  const box = el('div', 'layer ' + (ok ? 'good' : 'bad'));
  box.appendChild(el('div', 'kicker', ok ? 'صحيح' : 'ليس بعد'));
  box.appendChild(el('div', null, msg));
  fb.appendChild(box);
  if (fb.children.length > 4) fb.removeChild(fb.firstChild);
}

function markAnswered(st, given, wasAssisted, correct) {
  const p = prog();
  if (st.phase === 'Check') {
    S.checkLog = (S.checkLog || []).filter(c => c.stepId !== st.id);
    S.checkLog.push({ stepId: st.id, lessonId: lessonId(), correct: correct !== false, assisted: !!wasAssisted, at: new Date().toISOString() });
  }
  if (st.phase === 'Check' || correct !== false) {
    if (!p.completedSteps.includes(st.id)) p.completedSteps.push(st.id);
  }
  p.lastStepId = st.id;
  S.gaps.lastSessionDate = DW.today();
  if (correct !== false) DW.caps.write(capIdOf(st), wasAssisted ? 'E1a' : 'E1', wasAssisted, '', st.type === 'sprechen' ? 'pronunciation' : 'grammar');
  save();
}

function saveRecording(st, r) {
  const id = 'rec_' + Date.now();
  S.portfolio.recordings.push({
    id, date: DW.today(), seconds: r.seconds || 0, where: r.where || 'manual',
    capability: capIdOf(st), lesson: lessonId(), step: st.id, score: r.score, silence: !!r.silence
  });
  if (r.blob) {
    DW.storage.mediaPut({ id, blob: r.blob, date: DW.today(), capability: capIdOf(st), seconds: r.seconds || 0, lesson: lessonId(), step: st.id }).catch(e => {
      S.stats.mediaError = 'تعذّر حفظ الصوت: ' + e.message;
      toast('تعذّر حفظ الصوت. الحالة النصية سليمة. ' + e.message);
    });
  }
  save();
}

function next() {
  if (!answered) { toast('أجب أوّلًا.'); return; }
  const p = prog();
  if (idx >= steps().length - 1) {
    p.state = 'completed';
    p.lastStepId = steps()[idx].id;
    S.stats.sessionsCompleted++;
    save();
    renderLessonEnd();
    return;
  }
  idx++;
  answered = prog().completedSteps.includes(steps()[idx].id);
  hintLevel = 0;
  simpleLevel = 0;
  assisted = false;
  drawStep();
  window.scrollTo(0, 0);
}

function renderLessonEnd() {
  clearTimers();
  const v = $('#view');
  v.innerHTML = '';
  const card = el('div', 'card');
  const log = (S.checkLog || []).filter(c => c.lessonId === lessonId());
  const total = log.length;
  const clean = log.filter(c => c.correct && !c.assisted).length;
  const score = total ? Math.round(clean / total * 100) : 100;
  if (score >= 80) DW.caps.write('cap.' + lessonId() + '.core', 'E1', false, lesson().title.ar, 'grammar');
  card.appendChild(el('div', 'kicker', 'أُنجز الدرس'));
  card.appendChild(el('div', 'lesson-title', lessonId() === 'a0-u1-l1' ? 'أنهيت درس اليوم الأول.' : 'أنهيت: ' + lesson().title.ar));
  card.appendChild(el('div', 'meta', 'الفحص: ' + clean + '/' + total + ' بلا مساعدة ⇒ ' + score + '% (المطلوب 80%)'));
  card.appendChild(el('div', 'meta', 'أخطاء مسجّلة: ' + S.errorLedger.length + ' · تسجيلات: ' + S.portfolio.recordings.length));
  if (total && score < 80) {
    const warnBox = el('div', 'layer warn');
    warnBox.appendChild(el('div', 'kicker', 'ما نفعله الآن'));
    warnBox.appendChild(el('div', null, 'لا نُعيد الدرس من البداية. نعود إلى الأساسيات التي بُني عليها الفحص فقط: الخطوات 5 إلى 12 (الأصوات والتحيات).'));
    card.appendChild(warnBox);
    const b = el('button', 'primary', lessonId() === 'a0-u1-l1' ? 'أعِد الأساسيات (الخطوة 5)' : 'أعِد الأساسيات');
    b.type = 'button';
    b.onclick = () => {
      const pr = prog();
      const backTo = lessonId() === 'a0-u1-l1' ? 5 : 4;
      const backUntil = lessonId() === 'a0-u1-l1' ? 12 : 11;
      pr.completedSteps = pr.completedSteps.filter(id => {
        const n = parseInt(id.slice(1), 10);
        return !(n >= backTo && n <= backUntil);
      });
      pr.lastStepId = lessonId() === 'a0-u1-l1' ? 's05' : 's04';
      pr.state = 'in_progress';
      save();
      renderLesson();
    };
    card.appendChild(b);
    const b2 = el('button', 'ghost', 'أكملت، لا أريد الإعادة الآن');
    b2.type = 'button';
    b2.onclick = () => { prog().state = 'completed'; save(); renderHome(); };
    card.appendChild(b2);
  } else {
    const okBox = el('div', 'layer good');
    okBox.appendChild(el('div', 'kicker', 'جاهز للغد'));
    okBox.appendChild(el('div', null, 'واجب الغد: قل تحيتك الألمانية على ثلاثة أشخاص حقيقيين.'));
    card.appendChild(okBox);
    const b = el('button', 'primary', 'إلى اليوم');
    b.type = 'button';
    b.onclick = renderHome;
    card.appendChild(b);
  }
  v.appendChild(card);
}

/* ---------------- portfolio ---------------- */
function pruneRecordings() {
  const recs = S.portfolio.recordings || [];
  if (recs.length < 2) return [];
  const first = recs.slice().sort((a, b) => String(a.date).localeCompare(String(b.date)))[0];
  const best = {};
  recs.forEach(r => {
    const k = r.capability || r.id;
    if (!best[k] || (r.score || 0) >= (best[k].score || 0)) best[k] = r;
  });
  const cutoff = DW.plusDays(-90);
  const removed = [];
  S.portfolio.recordings = recs.filter(r => {
    const keep = r.mock || r.date >= cutoff || r.id === first.id || best[r.capability || r.id] === r;
    if (!keep) removed.push(r);
    return keep;
  });
  if (removed.length) save();
  return removed;
}

function renderPortfolio() {
  const removed = pruneRecordings();
  const v = $('#view');
  v.innerHTML = '';
  const head = el('div', 'lesson-head');
  const back = el('button', 'link', '‹ اليوم');
  back.type = 'button';
  back.onclick = renderHome;
  head.appendChild(back);
  head.appendChild(el('div', 'counter', 'المحفظة'));
  v.appendChild(head);
  v.appendChild(el('div', 'reason', 'نحتفظ بتسجيلات الأسبوع، وبأول تسجيل، وبأفضل تسجيل لكل قدرة، وبتسجيلات المحاكاة. ما عدا ذلك يُحذف بعد 90 يومًا. الحذف ظاهر، لا صامت.'));
  if (removed.length) v.appendChild(el('div', 'layer warn', 'حُذف الآن ' + removed.length + ' تسجيلًا أقدم من 90 يومًا، وفق السياسة أعلاه.'));
  if (S.stats.mediaError) v.appendChild(el('div', 'layer bad', S.stats.mediaError + ' الحالة النصية سليمة.'));
  const recs = S.portfolio.recordings || [];
  if (!recs.length) v.appendChild(el('div', 'card', 'لا تسجيل بعد. أول تسجيل هو نقطة البداية، لا امتحان.'));
  if (recs.length >= 2 && DW.exam) {
    const cmp = DW.exam.compareRecordings(recs);
    v.appendChild(el('div', 'meta', cmp.reason + (cmp.ready ? ' أقدم: ' + cmp.oldest.date + ' · أحدث: ' + cmp.newest.date + '.' : '')));
  }
  if (DW.exam) {
    const evidence = DW.exam.masteryEvidence(S);
    DW.exam.MASTERY.forEach(id => {
      v.appendChild(el('div', 'meta', id + ': ' + (evidence[id] ? 'شاهد مطابق' : 'لا شاهد بعد. لا زر «أنجزت».')));
    });
  }
  recs.slice().reverse().forEach(r => {
    const card = el('div', 'card small');
    card.appendChild(el('div', 'meta', r.date + ' · ' + (r.seconds || 0) + ' ث · ' + (r.where || 'local') + (r.silence ? ' · صمت' : '')));
    card.appendChild(el('div', 'meta', r.capability || ''));
    if (r.where === 'local') {
      const play = el('button', 'ghost', '▶ استمع');
      play.type = 'button';
      play.onclick = async () => {
        try {
          const row = await DW.storage.mediaGet(r.id);
          if (!row || !row.blob) { toast('لا ملف لهذا التسجيل.'); return; }
          const url = URL.createObjectURL(row.blob);
          const audio = el('audio');
          audio.controls = true;
          audio.src = url;
          card.appendChild(audio);
          audio.play();
        } catch (e) { toast('تعذّر فتح الصوت: ' + e.message); }
      };
      card.appendChild(play);
    } else card.appendChild(el('div', 'meta', 'بلا ملف صوتي. المدّة قِيست يدويًا.'));
    v.appendChild(card);
  });
  (S.portfolio.texts || []).slice().reverse().forEach(t => {
    const card = el('div', 'card small');
    card.appendChild(el('div', 'kicker', 'نص · ' + t.date));
    const de = el('div', 'zeigt');
    de.setAttribute('dir', 'ltr');
    de.textContent = t.text;
    card.appendChild(de);
    v.appendChild(card);
  });
}

/* ---------------- backup ---------------- */
function download(filename, blob) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}
function doExport() {
  S.stats.lastExport = new Date().toISOString();
  save();
  download('deutschweg-backup-' + DW.today() + '.json', new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' }));
  toast('تمّ التصدير.');
}
async function doFullBackup() {
  const files = [{ name: 'state.json', data: new TextEncoder().encode(JSON.stringify(S, null, 2)) }];
  let audioN = 0;
  let mediaNote = '';
  try {
    const recs = await DW.storage.mediaAll();
    for (const r of recs) {
      if (!r.blob) continue;
      const buf = new Uint8Array(await r.blob.arrayBuffer());
      files.push({ name: 'audio/' + r.id + '.webm', data: buf });
      audioN++;
    }
  } catch (e) {
    mediaNote = ' تعذّر قراءة الصوت: ' + e.message;
    S.stats.mediaError = mediaNote;
  }
  const zip = DW.storage.zipStore(files);
  download('deutschweg-full-' + DW.today() + '.zip', new Blob([zip], { type: 'application/zip' }));
  toast(audioN ? ('النسخة فيها الحالة و' + audioN + ' تسجيلًا.') : ('النسخة فيها الحالة فقط. لا تسجيلات صوتية.' + mediaNote));
}
function importFile(file) {
  const r = new FileReader();
  r.onload = () => {
    try {
      const incoming = JSON.parse(r.result);
      DW.storage.keepSafety(S);
      S = DW.session.S = DW.storage.mergeState(S, incoming);
      const byId = {};
      [...(S.capabilities || []), ...(incoming.capabilities || [])].forEach(c => {
        if (!c || !c.id) return;
        if (!byId[c.id] || (RANK[c.evidence] || 0) > (RANK[byId[c.id].evidence] || 0)) byId[c.id] = c;
      });
      S.capabilities = Object.values(byId);
      const errs = {};
      [...(S.errorLedger || []), ...(incoming.errorLedger || [])].forEach(e => { if (e) errs[e.id + '|' + e.wrong] = e; });
      S.errorLedger = Object.values(errs);
      const cards = {};
      [...((S.srs && S.srs.cards) || []), ...((incoming.srs && incoming.srs.cards) || [])].forEach(c => { if (c && c.id) cards[c.id] = c; });
      S.srs.cards = Object.values(cards);
      DW.ledger.recomputeR1();
      save();
      renderHome();
      toast('تمّ الدمج: لا شيء استُبدل.');
    } catch (e) { alert('ملف غير صالح: ' + e.message); }
  };
  r.readAsText(file);
}

let booted = false;
function sourceBtn(label, explanation) {
  const b = el('button', 'src', label);
  b.type = 'button';
  b.onclick = () => {
    const open = b.nextSibling && b.nextSibling.classList && b.nextSibling.classList.contains('src-box');
    if (open) { b.nextSibling.remove(); return; }
    b.after(el('div', 'layer src-box', explanation));
  };
  return b;
}
function screenBack(title) {
  const v = $('#view');
  v.innerHTML = '';
  const head = el('div', 'lesson-head');
  const back = el('button', 'link', '‹ اليوم');
  back.type = 'button';
  back.onclick = renderHome;
  head.appendChild(back);
  head.appendChild(el('div', 'counter', title));
  v.appendChild(head);
  return v;
}
function renderToday(mode) {
  const v = screenBack('جلسة اليوم');
  const today = DW.today();
  if (S.rotation) S.rotation = DW.adaptive.rotate(S.rotation, today);
  const gap = DW.adaptive.gapDays(S, today);
  if (gap > 7 && !(S.gaps && S.gaps.rescheduledOn === today)) {
    const cards = (S.srs && S.srs.cards) || [];
    const out = DW.adaptive.rescheduleCards(cards, today, gap);
    S.gaps = S.gaps || {};
    S.gaps.rescheduledOn = today;
    S.gaps.lastRescheduled = out.rescheduled;
    save();
  }
  DW.adaptive.onReturn(S, today);
  const reenter = S.gaps && S.gaps.reentryPending && gap >= 14;
  let plan = reenter ? DW.adaptive.reentry(S, today) : DW.adaptive.compose(S, today);
  if (mode === 'short') plan = DW.adaptive.shorten(plan, 15);
  v.appendChild(el('div', 'reason', reenter ? 'مرحبًا بعودتك. هذه حيث توقّفت. لا تعويض ولا طابور.' : 'كل كتلة بسبب. المحتوى الجديد آخر ما يُدرج.'));
  if (S.gaps && S.gaps.stopped) v.appendChild(el('div', 'context resume', DW.adaptive.resumeLine(S.gaps.stopped)));
  const rot = DW.adaptive.ROTATION[(S.rotation && S.rotation.variant) || 'A'];
  v.appendChild(sourceBtn('الشكل ' + ((S.rotation && S.rotation.variant) || 'A'), 'التدوير كل 6 أسابيع: قراءة ' + rot.reading + ' · تحدّث ' + rot.speaking + ' · سماع ' + rot.listening + ' · كتابة ' + rot.writing + '. المصدر: rotation.'));
  plan.blocks.forEach(b => {
    const card = el('div', 'card small');
    card.appendChild(el('div', 'kicker', b.track + ' · ' + b.minutes + ' د'));
    card.appendChild(el('div', 'reason', b.reason));
    const open = el('button', 'ghost', 'افتح الكتلة');
    open.type = 'button';
    open.onclick = () => openBlock(b);
    card.appendChild(open);
    v.appendChild(card);
  });
  if (plan.withheld) v.appendChild(el('div', 'reason', plan.withheld.reason));
  if (plan.taper) v.appendChild(el('div', 'layer warn', plan.taper));
  if (mode === 'short') v.appendChild(el('div', 'meta', 'أُجّل الباقي بلا عقوبة. الجلسة القصيرة نجاح.'));
  const short = el('button', 'ghost', '15 دقيقة فقط');
  short.type = 'button';
  short.onclick = () => renderToday('short');
  v.appendChild(short);
  save();
}
function openBlock(b) {
  if (b.type === 'lesson-step') {
    if (b.lessonId && window.DW_LESSONS && window.DW_LESSONS[b.lessonId]) forcedLessonId = b.lessonId;
    go('lesson');
    return;
  }
  const map = {
    speaking: 'portfolio', srs: 'srs', 'review-error': 'attack', 'drill-3s': 'drill',
    grammar: 'drill', writing: 'write', pronunciation: 'drill',
    activation: 'activation', reading: 'reading', listening: 'listening', chunks: 'chunks'
  };
  if (map[b.type]) { go(map[b.type]); return; }
  const v = screenBack(b.track);
  v.appendChild(el('div', 'reason', b.reason));
  if (b.track === 'reading' || b.track === 'listening') {
    v.appendChild(el('div', 'meta', 'هذه الحصة لها شاشة. لا تقدير ذاتي يدخل R4 أو R5.'));
  } else if (b.track === 'chunks') {
    const n = (window.DW_SYLLABUS && DW_SYLLABUS.chunks && DW_SYLLABUS.chunks.A1) ? DW_SYLLABUS.chunks.A1.length : 0;
    v.appendChild(el('div', 'meta', n
      ? 'الخريطة فيها ' + n + ' قالبًا. الحفر الزمني لا يلوّن R6.'
      : 'مئة قالب لكل مستوى لم تُؤلَّف بعد. لا تمرين مختلق، ولا دليل مختلق.'));
  } else {
    v.appendChild(el('div', 'meta', 'هذه الحصة محجوزة للحد الأسبوعي. لا علامة يدوية.'));
  }
}
function renderActivation() {
  const v = screenBack('تنشيط');
  const today = DW.today();
  const due = (S.capabilities || []).filter(c => DW.adaptive.inWindow(c, today, S));
  v.appendChild(el('div', 'reason', 'التنشيط استرجاع، لا زر «تعلّمت». النجاح يعيد E3 فقط إن كان الضغط قد ثُبت من قبل. E1a لا يصعد.'));
  if (!due.length) { v.appendChild(el('div', 'meta', 'لا قدرة داخل نافذة 45 يومًا.')); return; }
  due.forEach(c => {
    const card = el('div', 'card small');
    card.appendChild(el('div', 'kicker', DW.adaptive.evidenceLabel(c.evidence)));
    card.appendChild(el('div', 'meta', (c.text && c.text.ar) || c.id));
    card.appendChild(el('div', 'meta', 'يحتاج تنشيطًا. آخر نشاط ' + c.lastActive + '.'));
    const fail = el('button', 'ghost', 'لم أسترجعه');
    fail.type = 'button';
    fail.onclick = () => { DW.adaptive.activate(c, false, today); save(); renderActivation(); };
    card.appendChild(fail);
    const goLesson = el('button', 'ghost', 'أثبته في التمرين');
    goLesson.type = 'button';
    goLesson.onclick = () => go('lesson');
    card.appendChild(goLesson);
    v.appendChild(card);
  });
}
function renderIndicators() {
  const v = screenBack('المؤشرات');
  const today = DW.today();
  const m = DW.adaptive.measure(S, today);
  S.indicators.R1 = m.R1;
  S.indicators.R2 = m.R2;
  S.indicators.R3 = m.R3;
  S.indicators.R4 = m.R4;
  S.indicators.R5 = m.R5;
  S.indicators.R6 = m.R6;
  S.indicators.R2Weak = m.R2Weak;
  const mark = { green: '🟢', yellow: '🟡', red: '🔴' };
  const rows = [
    ['R1', m.R1, 'R1 = عدد أسطر errorLedger ذات الحالة live. الاتجاه من indicatorLog. أقل من نقطتين = اتجاه غير معروف. المصدر: errorLedger.'],
    ['R2', m.R2 == null ? 'غير مقيس' : Math.round(m.R2 * 100) + '%', 'R2 = الصحيح خلال 3 ثوانٍ ÷ الكل، آخر 5 قياسات أو 14 يومًا، لكل عائلة ثم مجموعًا. عائلة تحت 70% تُظهر 🟡 ولو كان المجموع 90%. الضعيف: ' + (m.R2Weak.join(', ') || 'لا شيء') + '.'],
    ['R3', Math.round(m.R3) + ' د', 'R3 = مجموع ثواني portfolio.recordings في آخر 7 أيام ÷ 60. ليس وقت الكتلة. 3 دقائق مسجّلة داخل كتلة من 10 = 3.'],
    ['R4', m.R4 == null ? 'غير مقيس' : Math.round(m.R4) + ' كلمة/د', 'R4 = وسيط آخر 5 جلسات فيها سؤالان على الأقل وفهم ≥ 95%. 170 هدف تدريب لا معيار منشور. بلا أسئلة أو تحت 95% لا يدخل.'],
    ['R5', m.R5 == null ? 'غير مقيس' : Math.round(m.R5 * 100) + '%', 'R5 = متوسط آخر 5 جلسات سماع غير معلنة. المادة المدروسة مسبقًا لا تُحسب.'],
    ['R6', m.R6.productive + ' / ' + m.R6Detail.target, 'R6 الإنتاجي = بطاقات الاتجاه الإنتاجي في صندوق ≥ 3. الهدف لمستوى ' + m.level + ' هو ' + m.R6Detail.target + '. القوالب ' + m.R6.chunks + ' / 100، ولا تُدمج.']
  ];
  rows.forEach(([id, value, src]) => {
    const band = m.bands[id];
    const dir = m.direction[id] || 'unknown';
    const arrow = dir === 'up' ? '↑' : dir === 'down' ? '↓' : dir === 'flat' ? 'ثابت' : 'اتجاه غير معروف';
    v.appendChild(sourceBtn(id + ' = ' + value + (band ? ' ' + mark[band] : '') + ' ' + arrow, src));
  });
  if (m.R2Weak.length) v.appendChild(el('div', 'layer warn', '🟡 عائلة تحت 70%: ' + m.R2Weak.join(', ') + '. لا يُخفيها المجموع.'));
  v.appendChild(el('div', 'meta', 'لا نقاط ولا شارات. الرقم بلا مصدر لا يُعرض.'));
  save();
}
function renderMap() {
  const v = screenBack('خريطة القدرات');
  v.appendChild(el('div', 'reason', 'البوابة تُفتح بأضعف مهارة، وبـ E3 فقط. E1 لم يُثبت. E1a ظاهر ولا يُحتسب.'));
  const caps = S.capabilities || [];
  if (!caps.length) v.appendChild(el('div', 'meta', 'لا قدرة مسجّلة بعد. الخريطة لا تعرض دروسًا مكتملة.'));
  const byGate = {};
  caps.forEach(c => { const g = c.gate || 'G1'; (byGate[g] = byGate[g] || []).push(c); });
  Object.keys(byGate).forEach(g => {
    v.appendChild(el('h2', 'section', g + ' · ' + ((S.gates[g] && S.gates[g].state) || 'locked')));
    byGate[g].forEach(c => {
      const card = el('div', 'card small');
      const label = DW.adaptive.evidenceLabel(c.evidence);
      const line = el('div', c.evidence === 'E1a' ? 'e1a' : 'meta', label);
      card.appendChild(line);
      card.appendChild(el('div', null, (c.text && c.text.ar) || c.id));
      if (DW.adaptive.inWindow(c, DW.today(), S)) card.appendChild(el('div', 'needs', 'يحتاج تنشيطًا'));
      card.appendChild(sourceBtn('السجل', 'المصدر: capabilities[].history. عدد الأدلّة: ' + ((c.history || []).length) + '. المسار: ' + DW.adaptive.trackOf(c) + '.'));
      v.appendChild(card);
    });
  });
}
function renderWeek() {
  const v = screenBack('توزيع الأسبوع');
  const hours = (S.learner && S.learner.weeklyHours) || 10;
  const scaled = DW.adaptive.scaleFloors(hours);
  const months = DW.adaptive.calendarMonths(hours);
  const m = DW.adaptive.measure(S, DW.today());
  const decision = DW.adaptive.decide(m);
  v.appendChild(sourceBtn('القرار: ' + decision.decision, 'صفر أحمر و≤2 أصفر = GO. ثلاثة أصفر بلا أحمر = HOLD بلا محتوى جديد. أحمر واحد أو أكثر = REROUTE ويُؤجَّل الجديد في المسارات غير المصابة. المصدر: مؤشرات R1–R6.'));
  v.appendChild(sourceBtn(hours + ' ساعات ← حوالي ' + Math.round(months) + ' شهرًا', 'الأشهر = 1210 ÷ (ساعات الأسبوع × 4.33). الساعات ثابتة. المصدر: learner.weeklyHours.'));
  v.appendChild(el('div', 'meta', scaled.minimumsHold ? 'حد التحدث ' + scaled.floors.speaking + ' ولا ينزل تحت 45. حد البطاقات ' + scaled.floors.srs + ' ولا ينزل تحت 60.' : 'الميزانية عند الحد الأدنى للمنهج. مدّد التقويم، لا تضغط المنهج.'));
  if (scaled.lowerBound) v.appendChild(el('div', 'layer warn', 'الميزانية عند الحد الأدنى. الحل الصادق تقويم أطول، لا منهج مضغوط.'));
  const floors = el('div', 'card small');
  floors.appendChild(el('div', 'kicker', 'الحدود'));
  Object.keys(scaled.floors).forEach(k => floors.appendChild(sourceBtn(k + ' ' + scaled.floors[k], 'حد ' + k + ' بعد التحجيم على ' + hours + ' ساعات. 10% من الأسبوع غير موزَّع (' + scaled.unallocated + ' د). المصدر: §7.5.')));
  v.appendChild(floors);
  const row = el('div', 'row');
  [6, 8, 10, 12].forEach(h => {
    const b = el('button', 'ghost', h + ' ساعات');
    b.type = 'button';
    b.onclick = () => { S.learner.weeklyHours = h; S.allocation = DW.adaptive.scaleFloors(h).floors; save(); renderWeek(); };
    row.appendChild(b);
  });
  v.appendChild(row);
  const ratify = el('button', 'ghost', 'أثبّت القرار');
  ratify.type = 'button';
  ratify.onclick = () => {
    S.weekPlan = S.weekPlan || {};
    S.weekPlan.decision = decision.decision;
    S.weekPlan.weekOf = DW.today();
    S.weekPlan.allocation = DW.adaptive.scaleFloors(S.learner.weeklyHours).floors;
    save();
    renderWeek();
  };
  v.appendChild(ratify);
  const pause = el('button', 'ghost', 'أعلن وقفة');
  pause.type = 'button';
  pause.onclick = () => renderPause();
  v.appendChild(pause);
}
function renderPause() {
  const v = screenBack('وقفة معلنة');
  v.appendChild(el('div', 'reason', 'حتى 3 أسابيع، و3 مرات في السنة. أثناءها لا يتدلّى شيء، ولا تُحسب فجوة. أول جلسة بعدها عودة قصيرة بلا عقوبة.'));
  [1, 2, 3].forEach(w => {
    const b = el('button', 'ghost', w + ' أسابيع');
    b.type = 'button';
    b.onclick = () => {
      const out = DW.adaptive.declarePause(S, w, DW.today());
      save();
      v.appendChild(el('div', out.ok ? 'layer good' : 'layer bad', out.ok ? 'وُقفت حتى ' + out.until + '. لا فجوة مسجّلة.' : out.reason));
    };
    v.appendChild(b);
  });
}

function readingNodes() {
  const lib = window.DW_LIBRARY || {};
  const novel = lib.B2 && lib.B2.novel ? lib.B2.novel.chapters.map(ch => Object.assign({ novel: true }, ch)) : [];
  return [].concat(lib.A1 || [], lib.A2 || [], (lib.B1 && lib.B1.texts) || [], (lib.B2 && lib.B2.articles) || [], novel);
}
function openReading(item) {
  const v = screenBack('قراءة موسّعة');
  v.appendChild(el('div', 'reason', 'لا قاموس في هذه الشاشة. سؤالان يقيسان ما سُئل، لا 98% من الكلمات. تحت 95% أو أسرع من 5 ثوانٍ لا يدخل R4.'));
  const started = Date.now();
  const body = el('div', 'zeigt');
  body.setAttribute('dir', 'ltr');
  body.textContent = item.body;
  v.appendChild(body);
  const picked = {};
  (item.questions || []).slice(0, 2).forEach(q => {
    const card = el('div', 'card small');
    card.appendChild(el('div', null, q.prompt));
    q.options.forEach(opt => {
      const b = el('button', 'ghost', opt);
      b.type = 'button';
      b.onclick = () => { picked[q.prompt] = opt; };
      card.appendChild(b);
    });
    v.appendChild(card);
  });
  const done = el('button', 'ghost', 'سلّم السؤالين');
  done.type = 'button';
  done.onclick = () => {
    const session = DW.tracks.readingSession(item, picked, Date.now() - started);
    session.date = DW.today();
    session.novel = !!item.novel;
    session.chapter = item.novel ? item.n : null;
    S.portfolio.reading = S.portfolio.reading || [];
    S.portfolio.reading.push(session);
    save();
    v.appendChild(el('div', session.counted ? 'layer good' : 'layer warn', session.reason));
  };
  v.appendChild(done);
}
function renderReading() {
  const v = screenBack('قراءة موسّعة');
  v.appendChild(el('div', 'reason', 'لا قاموس هنا. إن احتجته، هذا النص ليس لهذه الجلسة. لا تقدير ذاتي يدخل R4.'));
  const nodes = readingNodes().filter(item => item.questions && item.questions.length >= 2);
  if (!nodes.length || !DW.tracks) { v.appendChild(el('div', 'meta', 'لا نص بسؤالين. لا قياس.')); return; }
  nodes.forEach(item => {
    const b = el('button', 'ghost', (item.level || 'B2') + ' · ' + item.title);
    b.type = 'button';
    b.onclick = () => openReading(item);
    v.appendChild(b);
  });
  const mag = window.DW_LIBRARY && DW_LIBRARY.B1 && DW_LIBRARY.B1.magazine;
  if (mag) v.appendChild(el('div', 'meta', 'المجلة للقراءة المتصلة. قياسها في نصوصها العشرة، لا في اللصق.'));
}
function knownLessonWords() {
  const done = new Set((S.progress || []).filter(p => p.state === 'completed').map(p => p.lessonId));
  const words = new Set();
  Object.keys(window.DW_LESSONS || {}).forEach(id => {
    if (!done.has(id)) return;
    (window.DW_LESSONS[id].schritte || []).forEach(st => {
      const de = st.zeigt && st.zeigt.de;
      if (!de || !DW.tracks) return;
      DW.tracks.contentWords(de).forEach(w => words.add(w));
    });
  });
  return words;
}
function speakGerman(text, rate, done) {
  if (!window.speechSynthesis || !text) { done(false); return; }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'de-DE';
  u.rate = rate || 0.9;
  u.onend = () => done(true);
  u.onerror = () => done(false);
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}
function openListening(item) {
  const v = screenBack('سماع');
  const ladder = window.DW_LADDER || {};
  v.appendChild(el('div', 'reason', ladder.not || 'صوت الجهاز ليس تسجيلًا بشريًا.'));
  if (item.audio === false) {
    v.appendChild(el('div', 'layer warn', item.note));
    return;
  }
  let played = false;
  const play = el('button', 'ghost', 'تشغيل مرة');
  play.type = 'button';
  play.onclick = () => speakGerman(item.script, item.level === 'A1' ? 0.8 : item.level === 'B2' ? 1 : 0.9, ok => {
    played = !!ok;
    v.appendChild(el('div', 'meta', ok ? 'انتهى التشغيل. النص ما زال مخفيًا.' : 'لا صوت على هذا الجهاز. لا درجة.'));
  });
  v.appendChild(play);
  const picked = {};
  (item.questions || []).forEach(q => {
    const card = el('div', 'card small');
    card.appendChild(el('div', null, q.prompt));
    q.options.forEach(opt => {
      const b = el('button', 'ghost', opt);
      b.type = 'button';
      b.onclick = () => { picked[q.prompt] = opt; };
      card.appendChild(b);
    });
    v.appendChild(card);
  });
  const done = el('button', 'ghost', 'سلّم');
  done.type = 'button';
  done.onclick = () => {
    const studied = (S.portfolio.listening || []).some(s => s.itemId === item.id);
    const session = DW.tracks.listeningSession(item, picked, {
      audioPlayed: played,
      studied: studied,
      preTaught: DW.tracks.isPreTaught(item.script, knownLessonWords()),
      transcriptBefore: false
    });
    session.date = DW.today();
    S.portfolio.listening = S.portfolio.listening || [];
    if (session.score != null) S.portfolio.listening.push(session);
    save();
    v.appendChild(el('div', session.counted ? 'layer good' : 'layer warn', session.reason));
    const script = el('div', 'zeigt');
    script.setAttribute('dir', 'ltr');
    script.textContent = item.script;
    v.appendChild(script);
  };
  v.appendChild(done);
}
function renderListening() {
  const v = screenBack('سماع');
  const ladder = window.DW_LADDER;
  if (!ladder) { v.appendChild(el('div', 'meta', 'السلّم غير محمّل.')); return; }
  v.appendChild(el('div', 'reason', ladder.not));
  ladder.items.forEach(item => {
    const b = el('button', 'ghost', item.level + ' · ' + item.kind + ' · ' + item.title);
    b.type = 'button';
    b.onclick = () => openListening(item);
    v.appendChild(b);
  });
}
function renderGenerate() {
  const v = screenBack('مولّد');
  const bank = window.DW_SENTENCES || [];
  v.appendChild(el('div', 'reason', 'كل نسخة لها مفتاح وتفسير ورابط قدرة. النسخة لا تدّعي أن البنك كامل.'));
  if (!bank.length || !DW.generator) { v.appendChild(el('div', 'meta', 'البنك غير محمّل.')); return; }
  S.exam = S.exam || {};
  const types = [['فراغ', 'cloze'], ['ترتيب', 'wortstellung'], ['اختيار', 'mcq'], ['مقابلة', 'matching']];
  types.forEach(pair => {
    const b = el('button', 'ghost', pair[0]);
    b.type = 'button';
    b.onclick = () => { S.exam.genType = pair[1]; renderGenerate(); };
    v.appendChild(b);
  });
  const type = S.exam.genType || 'cloze';
  const idx = S.exam.genIndex || 0;
  const item = type === 'wortstellung' ? DW.generator.wortstellung(bank, idx)
    : type === 'mcq' ? DW.generator.mcq(bank, idx)
    : type === 'matching' ? DW.generator.matching(bank, idx)
    : DW.generator.instance(bank, idx);
  if (!item) { v.appendChild(el('div', 'meta', 'لا نسخة بلا مفتاح.')); return; }
  const line = el('div', 'zeigt');
  line.setAttribute('dir', 'ltr');
  line.textContent = type === 'wortstellung' ? item.prompt.join(' · ') : type === 'matching' ? item.pairs.map(p => p.links).join(' / ') : item.prompt;
  v.appendChild(line);
  v.appendChild(el('div', 'meta', item.capabilityId));
  const input = el('input');
  input.type = 'text';
  input.setAttribute('dir', 'ltr');
  v.appendChild(input);
  if (type === 'mcq') {
    item.options.forEach(opt => {
      const b = el('button', 'ghost', opt);
      b.type = 'button';
      b.onclick = () => { input.value = opt; };
      v.appendChild(b);
    });
  }
  const expected = type === 'wortstellung' ? item.key : type === 'matching' ? item.pairs[0].rechts : item.key;
  const b = el('button', 'ghost', 'افحص');
  b.type = 'button';
  b.onclick = () => {
    const ok = String(input.value || '').trim() === expected;
    v.appendChild(el('div', ok ? 'layer good' : 'layer bad', ok ? item.rationale : 'المفتاح: ' + expected + ' — ' + item.rationale));
    if (!ok) DW.ledger.log({ wrong: input.value || '—', right: expected, family: 'lexik-kollokation', source: 'generator' });
    S.exam.genIndex = idx + 1;
    save();
  };
  v.appendChild(b);
}
function renderChunks() {
  const v = screenBack('قوالب');
  const chunks = (window.DW_SYLLABUS && DW_SYLLABUS.chunks && DW_SYLLABUS.chunks.A1) || [];
  v.appendChild(el('div', 'reason', 'حفر زمني. الإجابة خارج الوقت خطأ. هذا لا يلوّن R6 ولا يدّعي صندوقًا.'));
  if (!chunks.length) { v.appendChild(el('div', 'meta', 'لا قوالب.')); return; }
  S.exam = S.exam || {};
  const item = chunks[(S.exam.chunkIndex || 0) % chunks.length];
  v.appendChild(el('div', null, item.ar));
  const input = el('input');
  input.type = 'text';
  input.setAttribute('dir', 'ltr');
  v.appendChild(input);
  let expired = false;
  const timer = setTimeout(() => { expired = true; v.appendChild(el('div', 'meta', 'انتهى الوقت. الإجابة الآن لا تُحتسب.')); }, 12000);
  timers.push(timer);
  const b = el('button', 'ghost', 'سجّل');
  b.type = 'button';
  b.onclick = () => {
    clearTimeout(timer);
    const match = String(input.value || '').trim() === item.de;
    const counted = match && !expired;
    S.chunksLog = S.chunksLog || [];
    S.chunksLog.push({ de: item.de, counted: counted, at: new Date().toISOString() });
    S.exam.chunkIndex = (S.exam.chunkIndex || 0) + 1;
    save();
    v.appendChild(el('div', counted ? 'layer good' : 'layer bad', counted ? 'داخل الوقت.' : 'لا يُحتسب. المفتاح: ' + item.de));
  };
  v.appendChild(b);
}
/* The bank paper: real parts, each with its material and its items, instead of
   thirty items pulled from the reading library. Used when web/data/exam-b2.js is
   loaded; the item-pool paper below stays as the fallback. */
function runBankPaper(moduleId) {
  const bank = window.DW_EXAM_BANK && DW_EXAM_BANK.B2;
  const mod = bank && bank[moduleId];
  if (!mod || !mod.parts || !mod.parts.length) return false;
  const v = screenBack(moduleId === 'lesen' ? 'قراءة الامتحان' : 'سماع الامتحان');
  const total = mod.parts.reduce((s, p) => s + p.items.length, 0);
  v.appendChild(el('div', 'reason', (bank.note || '') + ' — ' + mod.parts.length + ' Teile · ' + total +
    ' بندًا · ' + mod.minutes + ' دقيقة. انتهى الوقت = خطأ. لا زر «كنت سأعرف».'));
  const mini = mod.parts.map(p => p.items.length).join(' · ');
  v.appendChild(el('div', 'meta', 'توزيع البنود على الأجزاء: ' + mini + ' (شكل الامتحان).'));
  const started = Date.now();
  const clock = el('div', 'timer', mod.minutes + ':00');
  v.appendChild(clock);
  const host = el('div');
  v.appendChild(host);
  const answers = {};
  const all = [];
  mod.parts.forEach(p => p.items.forEach(it => all.push(it)));
  let pi = 0, ii = 0, closed = false, heard = {};
  function finish(timedOut) {
    if (closed) return;
    closed = true;
    clearInterval(tick);
    const late = {};
    if (timedOut) all.forEach(it => { if (!answers[it.id]) late[it.id] = true; });
    const out = DW.exam.scorePaper(all, answers, { late: late });
    out.misses.forEach(m => DW.ledger.log({ wrong: m.wrong, right: m.right, family: m.family, source: 'exam' }));
    storeModule(moduleId, out.score, false);
    host.innerHTML = '';
    host.appendChild(el('div', 'layer warn', out.reason + ' ' + out.score + '/100 (' + out.correct + '/' + out.total + ')'));
    if (mockNote()) host.appendChild(el('div', 'meta', mockNote()));
  }
  function material(node) {
    const box = el('div', 'zeigt');
    box.setAttribute('dir', 'ltr');
    if (node.title) box.appendChild(el('div', 'counter', node.title));
    if (node.body) String(node.body).split(/\n\n/).forEach(par => box.appendChild(el('div', null, par)));
    (node.texts || []).forEach(t => {
      const one = el('div', null, '');
      if (t.name) one.appendChild(el('div', 'counter', t.name));
      one.appendChild(el('div', null, t.text));
      box.appendChild(one);
    });
    (node.sections || []).forEach(s => box.appendChild(el('div', null, s.n + ' ' + s.text)));
    (node.scripts || []).forEach(sc => {
      const play = el('button', 'ghost', '▶ ' + (sc.title || 'النص'));
      play.type = 'button';
      play.onclick = () => {
        if (heard[sc.id]) { play.disabled = true; play.textContent = (sc.title || 'النص') + ' — سُمع'; return; }
        speakGerman(sc.text, 0.95, ok => {
          if (!ok) { host.appendChild(el('div', 'meta', 'لا صوت. البند بلا تشغيل يُسلَّم خطأ إن تُرك.')); return; }
          heard[sc.id] = true;
          play.textContent = (sc.title || 'النص') + ' — سُمع';
          play.disabled = true;
        });
      };
      box.appendChild(play);
    });
    host.appendChild(box);
  }
  function draw() {
    if (pi >= mod.parts.length) { finish(false); return; }
    const p = mod.parts[pi];
    if (ii === 0) {
      host.innerHTML = '';
      host.appendChild(el('div', 'counter', 'Teil ' + p.n + ' / ' + mod.parts.length + ' — ' + p.kind + ' (' + p.minutes + ' د)'));
      if (p.material) material(p.material);
      host.appendChild(el('div', 'meta', 'Teil ' + p.n + ': ' + p.items.length + ' بندًا.'));
    }
    if (ii >= p.items.length) { pi += 1; ii = 0; draw(); return; }
    const item = p.items[ii];
    const box = el('div');
    box.appendChild(el('div', 'counter', (all.indexOf(item) + 1) + ' / ' + all.length));
    box.appendChild(el('div', null, item.prompt));
    const opts = el('div', 'row');
    item.options.forEach(opt => {
      const b = el('button', 'ghost', opt);
      b.type = 'button';
      b.onclick = () => { answers[item.id] = opt; ii += 1; draw(); };
      opts.appendChild(b);
    });
    box.appendChild(opts);
    host.appendChild(box);
  }
  const tick = setInterval(() => {
    const left = mod.minutes * 60 - (Date.now() - started) / 1000;
    clock.textContent = left > 0 ? Math.ceil(left / 60) + ' د' : '0';
    if (left <= 0) finish(true);
  }, 1000);
  timers.push(tick);
  draw();
  return true;
}
function paperFor(moduleId) {
  if (moduleId === 'lesen') {
    const lib = window.DW_LIBRARY || {};
    const nodes = [].concat((lib.B1 && lib.B1.texts) || [], (lib.B2 && lib.B2.articles) || []);
    return DW.exam.flattenQuestions(nodes, 'lesen', 30);
  }
  const clips = ((window.DW_LADDER && DW_LADDER.items) || []).filter(it => it.audio !== false);
  return DW.exam.flattenQuestions(clips, 'hoeren', 30);
}
function storeModule(moduleId, score, protocol) {
  S.exam = S.exam || {};
  S.exam.modules = S.exam.modules || {};
  S.exam.modules[moduleId] = { id: moduleId, score: score, at: new Date().toISOString(), official: false, protocol: !!protocol };
  S.mocks = S.mocks || [];
  S.mocks.push(S.exam.modules[moduleId]);
  /* §12.4: while a mock session is open, a finished module joins it. The full
     record is pushed only when all four sections are in — that record is what
     the readiness gate reads. */
  const into = DW.exam.recordMockModule(S, moduleId, score);
  lastMockRecord = into.recorded ? into : null;
  save();
}
let lastMockRecord = null;
/* The learner should see what a finished module did to the mock session, not
   discover it on the next screen. */
function mockNote() { return lastMockRecord ? lastMockRecord.reason : ''; }
function runPaper(moduleId) {
  if (runBankPaper(moduleId)) return;
  const items = paperFor(moduleId);
  const v = screenBack(moduleId === 'lesen' ? 'قراءة الامتحان' : 'سماع الامتحان');
  if (!items) { v.appendChild(el('div', 'meta', 'لا ثلاثون بندًا بمفتاح. لا درجة.')); return; }
  v.appendChild(el('div', 'reason', 'ثلاثون بندًا أصليًا بوقت القسم. ليست الأجزاء الرسمية، وليست ورقة غوته. انتهى الوقت = خطأ. لا زر «كنت سأعرف».'));
  const minutes = moduleId === 'lesen' ? 65 : 40;
  const started = Date.now();
  const clock = el('div', 'timer', minutes + ':00');
  v.appendChild(clock);
  const answers = {};
  let i = 0;
  let closed = false;
  const host = el('div');
  v.appendChild(host);
  function finish(timedOut) {
    if (closed) return;
    closed = true;
    clearInterval(tick);
    const late = {};
    if (timedOut) items.forEach(it => { if (!answers[it.id]) late[it.id] = true; });
    const out = DW.exam.scorePaper(items, answers, { late: late });
    out.misses.forEach(m => DW.ledger.log({ wrong: m.wrong, right: m.right, family: m.family, source: 'exam' }));
    storeModule(moduleId, out.score, false);
    host.innerHTML = '';
    host.appendChild(el('div', 'layer warn', out.reason + ' ' + out.score + '/100'));
    if (mockNote()) host.appendChild(el('div', 'meta', mockNote()));
  }
  function draw() {
    if (i >= items.length) { finish(false); return; }
    host.innerHTML = '';
    const item = items[i];
    host.appendChild(el('div', 'counter', (i + 1) + ' / ' + items.length));
    if (item.context) {
      const body = el('div', 'zeigt');
      body.setAttribute('dir', 'ltr');
      body.textContent = item.context;
      host.appendChild(body);
    }
    if (item.script) {
      const play = el('button', 'ghost', 'تشغيل مرة');
      play.type = 'button';
      play.onclick = () => speakGerman(item.script, 0.95, ok => {
        if (!ok) host.appendChild(el('div', 'meta', 'لا صوت. البند بلا تشغيل يُسلَّم خطأ إن تُرك.'));
      });
      host.appendChild(play);
    }
    host.appendChild(el('div', null, item.prompt));
    item.options.forEach(opt => {
      const b = el('button', 'ghost', opt);
      b.type = 'button';
      b.onclick = () => { answers[item.id] = opt; i++; draw(); };
      host.appendChild(b);
    });
  }
  const tick = setInterval(() => {
    const left = minutes * 60 - (Date.now() - started) / 1000;
    clock.textContent = left > 0 ? Math.ceil(left / 60) + ' د' : '0';
    if (left <= 0) finish(true);
  }, 1000);
  timers.push(tick);
  draw();
}
function renderExam() {
  const v = screenBack('الامتحان');
  S.exam = S.exam || {};
  const gate = DW.exam.readiness(S);
  const days = DW.exam.daysUntil(S.settings.examDate, DW.today());
  const taper = DW.exam.taper(days);
  const month = DW.exam.teachingMonth(S.learner.startDate, DW.today(), S.learner.weeklyHours);
  const slot = DW.exam.protocolSlot(month);
  v.appendChild(el('div', 'reason', 'لا درجة رسمية. لا تعويض بين الأقسام. «كنت سأعرف» لا يُحتسب. البوابة لا تحجز موعدًا.'));
  v.appendChild(el('div', 'meta', gate.reason + ' دين حيّ: ' + gate.debt + '. شواهد إتقان: ' + gate.masteryCount + ' / 6.'));
  v.appendChild(el('div', 'meta', taper.reason));
  v.appendChild(el('div', 'meta', 'شهر تعليمي تقريبي: ' + month.toFixed(1) + '. ' + slot.reason));
  const date = document.createElement('input');
  date.type = 'date';
  date.value = S.settings.examDate || '';
  date.onchange = () => { S.settings.examDate = date.value || null; save(); renderExam(); };
  v.appendChild(date);
  [['قراءة 65 د', 'lesen'], ['سماع 40 د', 'hoeren']].forEach(pair => {
    const b = el('button', 'ghost', pair[0]);
    b.type = 'button';
    b.onclick = () => runPaper(pair[1]);
    v.appendChild(b);
  });
  /* ---------- §12.4 mock protocol ---------- */
  const mock = DW.exam.mockState(S);
  v.appendChild(el('div', 'meta', 'بروتوكول المحاكاة: ' + mock.fullMocks + ' محاكاة كاملة من 8. ' +
    (mock.open ? 'جلسة ' + mock.n + ' مفتوحة — ينقص: ' + (mock.missing.join('، ') || 'لا شيء') : 'لا جلسة مفتوحة.')));
  mock.plan.forEach(row => {
    v.appendChild(el('div', 'meta', 'محاكاة ' + row.n + ' · شهر ' + row.month + ' · ' + row.purpose + (row.done ? ' ✓' : '')));
  });
  if (mock.open) {
    const line = el('div', 'meta', 'أكمل الأقسام الأربعة في هذه الجلسة: قراءة (الورقة) · سماع (الورقة) · كتابة (بنك الكتابة) · تحدّث (تسجيل).');
    v.appendChild(line);
    const cancel = el('button', 'ghost', 'أغلق جلسة المحاكاة ' + mock.n + ' بلا محاكاة');
    cancel.type = 'button';
    cancel.onclick = () => { S.exam.mockSession = null; save(); renderExam(); };
    v.appendChild(cancel);
  } else {
    const start = el('button', 'ghost', 'ابدأ محاكاة كاملة ' + (mock.fullMocks + 1));
    start.type = 'button';
    start.onclick = () => {
      const r = DW.exam.startMock(S, mock.fullMocks + 1);
      S.exam.mockSessionNote = r.reason;
      save();
      renderExam();
    };
    v.appendChild(start);
  }
  const bank = window.DW_WRITING_BANK && DW_WRITING_BANK.B2;
  if (bank && bank.tasks.length) {
    const pick = document.createElement('select');
    bank.tasks.forEach(t => {
      const o = document.createElement('option');
      o.value = t.id;
      o.textContent = t.n + '. ' + t.title + ' — ' + t.type;
      pick.appendChild(o);
    });
    const detail = el('div', 'meta', '');
    const draw = () => {
      const t = bank.tasks.filter(x => x.id === pick.value)[0] || bank.tasks[0];
      detail.textContent = t.situation + ' — مهمة 1: ' + t.task1.prompt + ' (' + t.task1.minWords +
        ' كلمة: ' + t.task1.points.join(' · ') + ') — مهمة 2: ' + t.task2.prompt + ' (' +
        t.task2.minWords + ' كلمة: ' + t.task2.points.join(' · ') + ') — الوقت ' + t.minutes + ' دقيقة.';
    };
    pick.onchange = draw;
    draw();
    v.appendChild(el('div', 'meta', 'كتابة موقوتة من بنك B2 — اختر الموضوع:'));
    v.appendChild(pick);
    v.appendChild(detail);
  }
  const axes = [['المحتوى', 'inhalt'], ['البناء', 'aufbau'], ['التعبير', 'ausdruck'], ['الصحة', 'korrektheit']];
  const t1 = {};
  const t2 = {};
  function axisRow(store, label) {
    const row = el('div', 'row');
    row.appendChild(el('span', null, label));
    [0, 5, 10, 15].forEach(n => {
      const b = el('button', 'ghost', String(n));
      b.type = 'button';
      b.onclick = () => { store[label] = n; };
      row.appendChild(b);
    });
    v.appendChild(row);
  }
  v.appendChild(el('div', 'meta', 'مهمة 1: 150 كلمة على الأقل، أربعة محاور. صفر على محور يصفر المهمة. نقطة محتوى غير مؤكدة تصفرها.'));
  axes.forEach(pair => axisRow(t1, pair[0]));
  v.appendChild(el('div', 'meta', 'مهمة 2: 100 كلمة على الأقل.'));
  axes.forEach(pair => axisRow(t2, pair[0]));
  const w1 = document.createElement('textarea');
  const w2 = document.createElement('textarea');
  w1.setAttribute('dir', 'ltr');
  w2.setAttribute('dir', 'ltr');
  v.appendChild(w1);
  v.appendChild(w2);
  const missed = { t1: true, t2: true };
  [['المهمة 1: كل نقاط المحتوى مغطاة', 't1'], ['المهمة 2: كل نقاط المحتوى مغطاة', 't2']].forEach(pair => {
    const b = el('button', 'ghost', pair[0]);
    b.type = 'button';
    b.onclick = () => { missed[pair[1]] = false; b.textContent = pair[0] + ' — أُكّدت'; };
    v.appendChild(b);
  });
  const write = el('button', 'ghost', 'احسب الكتابة');
  write.type = 'button';
  write.onclick = () => {
    const words = node => String(node.value || '').trim().split(/\s+/).filter(Boolean).length;
    const asAxes = store => axes.map(pair => ({ id: pair[1], score: store[pair[0]] || 0 }));
    const out = DW.exam.schreibenModule(
      { words: words(w1), minWords: 150, missedContent: missed.t1, axes: asAxes(t1) },
      { words: words(w2), minWords: 100, missedContent: missed.t2, axes: asAxes(t2) }
    );
    storeModule('schreiben', out.score, false);
    v.appendChild(el('div', 'layer warn', out.reason + ' ' + out.score + '/100'));
    if (mockNote()) v.appendChild(el('div', 'meta', mockNote()));
  };
  v.appendChild(write);
  const speakBank = window.DW_SPEAKING_BANK && DW_SPEAKING_BANK.B2;
  if (speakBank && speakBank.tasks.length) {
    const pick = document.createElement('select');
    speakBank.tasks.forEach(t => {
      const o = document.createElement('option');
      o.value = t.id;
      o.textContent = t.n + '. ' + t.title;
      pick.appendChild(o);
    });
    const detail = el('div', 'meta', '');
    const draw = () => {
      const t = speakBank.tasks.filter(x => x.id === pick.value)[0] || speakBank.tasks[0];
      detail.textContent = t.situation + ' — المدخل: ' + t.input + ' — العرض (' +
        Math.round(t.presentation.seconds / 60) + ' د): ' + t.presentation.topic + ' [' +
        t.presentation.points.join(' · ') + '] — النقاش (' + Math.round(t.discussion.seconds / 60) +
        ' د): ' + t.discussion.prompt + ' [' + t.discussion.points.join(' · ') + '] — التحضير ' +
        t.prepMinutes + ' دقيقة.';
    };
    pick.onchange = draw;
    draw();
    v.appendChild(el('div', 'meta', 'مناقشة مسجّلة من بنك B2 — اختر الموضوع:'));
    v.appendChild(pick);
    v.appendChild(detail);
  }
  v.appendChild(el('div', 'meta', 'التحدّث: ستة محاور. النطق = هل أعاق الفهم؟ لا درجة بلا تسجيل.'));
  const speakAxes = {};
  ['الاكتمال', 'التفاعل', 'الترابط', 'المدى', 'الصحة', 'إعاقة الفهم'].forEach(name => {
    const row = el('div', 'row');
    row.appendChild(el('span', null, name));
    [0, 1, 2, 3].forEach(n => {
      const b = el('button', 'ghost', String(n));
      b.type = 'button';
      b.onclick = () => { speakAxes[name] = n; };
      row.appendChild(b);
    });
    v.appendChild(row);
  });
  let speakSeconds = 0;
  let media = null;
  const rec = el('button', 'ghost', 'سجّل التحدّث');
  rec.type = 'button';
  rec.onclick = async () => {
    if (media && media.state === 'recording') { media.stop(); return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) {
      v.appendChild(el('div', 'meta', 'لا مسجّل على هذا الجهاز. لا درجة تحدّث.'));
      return;
    }
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    media = new MediaRecorder(stream);
    const chunks = [];
    const t0 = Date.now();
    media.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    media.onstop = () => {
      speakSeconds = (Date.now() - t0) / 1000;
      stream.getTracks().forEach(t => t.stop());
      const id = 'mock_' + Date.now();
      S.portfolio.recordings.push({ id: id, date: DW.today(), seconds: speakSeconds, where: 'local', capability: 'exam.sprechen', tag: 'exam' });
      DW.storage.mediaPut({ id: id, blob: new Blob(chunks), date: DW.today(), capability: 'exam.sprechen', seconds: speakSeconds }).catch(() => {});
      save();
      rec.textContent = 'سجّل التحدّث';
      v.appendChild(el('div', 'meta', 'سُجّل ' + Math.round(speakSeconds) + ' ث. المدة ليست درجة.'));
      if (mockNote()) v.appendChild(el('div', 'meta', mockNote()));
    };
    media.start();
    rec.textContent = 'أوقف التسجيل';
  };
  v.appendChild(rec);
  const speak = el('button', 'ghost', 'احسب التحدّث');
  speak.type = 'button';
  speak.onclick = () => {
    const out = DW.exam.sprechenModule(
      Object.keys(speakAxes).map(name => ({ id: name, score: speakAxes[name], max: 3 })),
      { seconds: speakSeconds }
    );
    if (out.score == null) { v.appendChild(el('div', 'layer bad', out.reason)); return; }
    storeModule('sprechen', out.score, false);
    v.appendChild(el('div', 'layer warn', out.reason + ' ' + out.score + '/100'));
  };
  v.appendChild(speak);
  const seal = el('button', 'ghost', 'اختم محاكاة كاملة');
  seal.type = 'button';
  seal.onclick = () => {
    if (month < 26) {
      v.appendChild(el('div', 'layer bad', slot.reason));
      return;
    }
    const mods = ['lesen', 'hoeren', 'schreiben', 'sprechen'].map(id => S.exam.modules && S.exam.modules[id]).filter(Boolean);
    if (mods.length < 4) { v.appendChild(el('div', 'meta', 'أربعة أقسام في الجلسة نفسها لازمة. هذه ليست محاكاة كاملة.')); return; }
    S.exam.mocks = S.exam.mocks || [];
    S.exam.mocks.push({ full: true, at: new Date().toISOString(), modules: mods, official: false });
    save();
    v.appendChild(el('div', 'meta', DW.exam.readiness(S).reason));
  };
  v.appendChild(seal);
  const set = el('button', 'ghost', S.settings.targetExam === 'telc-b2' ? 'الهدف الآن telc' : 'الهدف الآن Goethe');
  set.type = 'button';
  set.onclick = () => {
    S.settings.targetExam = S.settings.targetExam === 'telc-b2' ? 'goethe-b2' : 'telc-b2';
    save();
    renderExam();
  };
  v.appendChild(set);
  if (S.settings.targetExam === 'telc-b2') {
    v.appendChild(el('div', 'meta', 'telc: النجاح 135/225 كتابة و45/75 شفهي، كل منهما مستقل. رسالة نصف رسمية لا تقل عن 150 كلمة. هذه الشاشة لا تحوّل رسالة إلى 225.'));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (booted) return;
  booted = true;
  const f = $('#file');
  if (f) f.onchange = e => { if (e.target.files[0]) importFile(e.target.files[0]); };
  renderHome();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});

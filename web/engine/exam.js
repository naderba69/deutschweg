/* Deutschweg — P4 exam engine (PROMPT §12). Scores are self-scored against axes.
   The engine never promises an official grade and never compensates between modules. */
(function (DW) {
  const GOETHE = {
    id: 'goethe-b2',
    modules: [
      { id: 'lesen', minutes: 65, points: 100, pass: 60 },
      { id: 'hoeren', minutes: 40, points: 100, pass: 60 },
      { id: 'schreiben', minutes: 75, points: 100, pass: 60 },
      { id: 'sprechen', minutes: 15, points: 100, pass: 60 }
    ],
    schreibenAxes: ['inhalt', 'aufbau', 'ausdruck', 'korrektheit'],
    sprechenAxes: ['vollstaendigkeit', 'interaktion', 'zusammenhang', 'ausdruck', 'korrektheit', 'aussprache']
  };
  const TELC = {
    id: 'telc-b2',
    writtenMax: 225,
    oralMax: 75,
    writtenPass: 135,
    oralPass: 45
  };
  const MOCKS = [
    { n: 1, month: 26, form: 'module', purpose: 'خط أساس' },
    { n: 2, month: 26, form: 'module', purpose: 'أضعف قسم' },
    { n: 3, month: 27, form: 'written', purpose: 'تحمل' },
    { n: 4, month: 27, form: 'written', purpose: 'وقت' },
    { n: 5, month: 27, form: 'full-speaking', purpose: 'تحدّث مسجّل' },
    { n: 6, month: 28, form: 'full-speaking', purpose: 'محاور التحدّث' },
    { n: 7, month: 29, form: 'real', purpose: 'محاكاة بلا هاتف' },
    { n: 8, month: 29, form: 'exam', purpose: 'الامتحان' }
  ];
  const MASTERY = ['discussion20', 'essay400', 'podcast', 'novel', 'formal-letter', 'explain-rule'];

  function targetOf(S) {
    return (S && S.settings && S.settings.targetExam) === 'telc-b2' ? TELC : GOETHE;
  }
  function schreibenTask(axes) {
    const zero = (axes || []).some(a => !a || a.score === 0);
    if (zero) return { score: 0, zeroed: true, reason: 'صفر على محور يصفر المهمة كلها.' };
    const sum = (axes || []).reduce((s, a) => s + (Number(a.score) || 0), 0);
    return { score: sum, zeroed: false, reason: 'المجموع من محاور الروبرك، لا درجة رسمية.' };
  }
  function moduleScore(points, missedContent) {
    if (missedContent) return { score: 0, reason: 'نقطة محتوى ناقصة تكلّف المهمة، لا نقطة واحدة.' };
    const n = Math.max(0, Math.min(100, Number(points) || 0));
    return { score: n, reason: 'درجة قسم من 100. لا تعويض من قسم آخر.' };
  }
  function noCompensation(modules) {
    const list = modules || [];
    const failed = list.filter(m => (Number(m.score) || 0) < 60).map(m => m.id);
    return { pass: failed.length === 0 && list.length === 4, failed: failed, compensation: false };
  }
  function telcPass(written, oral) {
    return (Number(written) || 0) >= 135 && (Number(oral) || 0) >= 45;
  }
  function readiness(S) {
    const mocks = ((S && S.exam && S.exam.mocks) || []).filter(m => m && m.full);
    const last = mocks[mocks.length - 1];
    const modulesOk = !!(last && ['lesen', 'hoeren', 'schreiben', 'sprechen'].every(id => {
      const row = (last.modules || []).find(x => x.id === id);
      return row && row.score >= 65;
    }));
    const debt = ((S && S.errorLedger) || []).filter(e => e.status === 'live').length;
    const debtOk = debt <= 8;
    const evidence = masteryEvidence(S);
    const masteryCount = MASTERY.filter(id => evidence[id]).length;
    const masteryOk = masteryCount >= 4;
    const open = modulesOk && debtOk && masteryOk;
    return {
      open: open,
      modulesOk: modulesOk,
      debtOk: debtOk,
      debt: debt,
      masteryOk: masteryOk,
      masteryCount: masteryCount,
      evidence: evidence,
      reason: open ? 'الشروط الثلاثة معًا. هذا لا يحجز موعدًا.' : 'البوابة مغلقة. شرط ناقص.'
    };
  }
  function taper(daysLeft) {
    if (daysLeft === null || daysLeft === undefined || daysLeft === '') {
      return { active: false, newGrammar: true, newVocabulary: true, examDay: false, focus: [], reason: 'لا موعد، فلا تخفيف.' };
    }
    const n = Number(daysLeft);
    const active = Number.isFinite(n) && n >= 0 && n <= 14;
    return {
      active: active,
      newGrammar: !active,
      newVocabulary: n !== 0,
      examDay: n === 0,
      focus: active ? ['دفتر الأخطاء', 'قوالب', '3 محاكاكات', 'نوم'] : [],
      reason: active ? (n === 0 ? 'يوم الامتحان: قوالب ودفتر أخطاء فقط. لا مفردات جديدة.' : 'تخفيف 14 يومًا مفروض. لا نحو جديد.') : 'التخفيف لم يبدأ.'
    };
  }
  function daysUntil(date, today) {
    if (!date || !today) return null;
    const a = Date.parse(today + 'T12:00:00Z');
    const b = Date.parse(date + 'T12:00:00Z');
    if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
    return Math.round((b - a) / 86400000);
  }
  function teachingMonth(start, today, weeklyHours) {
    const delta = daysUntil(start, today);
    if (delta === null || delta > 0) return 0;
    return (-delta / 30.436) * ((Number(weeklyHours) || 10) / 10);
  }
  function protocolSlot(month) {
    const m = Number(month) || 0;
    if (m < 26) return { n: null, reason: 'بروتوكول المحاكاة يبدأ في الشهر 26 عند خط الأساس. درجة التدريب قبل ذلك ليست محاكاة البروتوكول.' };
    const due = MOCKS.filter(row => row.n < 8 && m + 0.01 >= row.month);
    const row = due[due.length - 1];
    return { n: row ? row.n : null, reason: row ? 'موضع البروتوكول الآن: محاكاة ' + row.n + '. ' + row.purpose : 'خارج البروتوكول.' };
  }
  function scorePaper(items, answers, opts) {
    opts = opts || {};
    const list = (items || []).filter(item => item && item.key);
    if (!list.length) return { score: null, official: false, reason: 'لا بنود، لا درجة.' };
    let correct = 0;
    const misses = [];
    list.forEach(item => {
      const given = answers ? answers[item.id] : undefined;
      const late = !!(opts.timedOut || (opts.late && opts.late[item.id]));
      const claimed = opts.wouldHaveKnown && opts.wouldHaveKnown[item.id];
      const ok = !late && !claimed && given === item.key;
      if (ok) correct++;
      else misses.push({ id: item.id, right: item.key, wrong: given || '—', late: late, family: item.family || 'pruefstrategie' });
    });
    return {
      score: Math.round(correct / list.length * 100),
      correct: correct,
      total: list.length,
      misses: misses,
      official: false,
      reason: 'درجة قسم من 100 على بنود أصلية. ليست ورقة غوته. المتأخر و«كنت سأعرف» لا يُحتسبان.'
    };
  }
  function schreibenModule(task1, task2) {
    function one(task, max) {
      if (!task || (task.words || 0) < (task.minWords || 0)) return { score: 0, zeroed: true, reason: 'تحت حد الكلمات. لا درجة جزئية على الطول.' };
      if (task.missedContent) return { score: 0, zeroed: true, reason: 'نقطة محتوى ناقصة تصفر المهمة.' };
      const axes = task.axes || [];
      if (!axes.length || axes.some(a => !a || Number(a.score) === 0)) return { score: 0, zeroed: true, reason: 'صفر على محور يصفر المهمة.' };
      const sum = axes.reduce((s, a) => s + (Number(a.score) || 0), 0);
      return { score: Math.min(max, sum), zeroed: false, reason: 'من محاور الروبرك، لا درجة رسمية.' };
    }
    const a = one(task1, 60);
    const b = one(task2, 40);
    return { score: a.score + b.score, tasks: [a, b], official: false, reason: 'المهمة 1 من 60 والمهمة 2 من 40. ليست درجة غوته.' };
  }
  function sprechenModule(axes, recording) {
    if (!recording || !(Number(recording.seconds) > 0)) return { score: null, official: false, reason: 'لا تسجيل، لا درجة تحدّث.' };
    const list = axes || [];
    if (list.length < 6) return { score: null, official: false, reason: 'المحاور الستة لازمة. النطق يُسأل: هل أعاق الفهم؟ لا: هل زالت اللكنة؟' };
    const sum = list.reduce((s, a) => s + (Number(a.score) || 0), 0);
    const max = list.reduce((s, a) => s + (Number(a.max) || 3), 0);
    return { score: max ? Math.round(sum / max * 100) : null, official: false, reason: 'درجة ذاتية على المحاور. ليست درجة رسمية.' };
  }
  function masteryEvidence(S) {
    const P = (S && S.portfolio) || {};
    const recs = P.recordings || [];
    const texts = P.texts || [];
    const listening = P.listening || [];
    const reading = P.reading || [];
    const chapters = new Set(reading.filter(s => s && s.novel && s.comprehension >= 0.95 && s.questions >= 2).map(s => s.chapter));
    return {
      discussion20: recs.some(r => r && r.tag === 'discussion' && Number(r.seconds) >= 1200 && r.longPause !== true),
      essay400: texts.some(t => t && t.tag === 'essay' && t.words >= 400 && t.minutes <= 45 && t.contentPoints >= 4 && t.clauseTypes >= 3 && Number(t.errors) <= 6),
      podcast: listening.some(s => s && s.podcast === true && s.unannounced && !s.preTaught && !s.studied && s.general >= 0.7 && s.detail >= 0.5),
      novel: chapters.size >= 6 && recs.some(r => r && r.tag === 'novel-summary' && r.seconds >= 180 && r.seconds <= 240),
      'formal-letter': texts.some(t => t && t.tag === 'formal-letter' && t.words >= 100 && t.purpose === 'achieved' && t.zeroAxis !== true),
      'explain-rule': recs.some(r => r && r.tag === 'explain-rule' && r.seconds >= 90 && r.notes === false)
    };
  }
  function flattenQuestions(nodes, moduleId, limit) {
    const items = [];
    (nodes || []).forEach(node => {
      (node.questions || []).forEach((q, i) => {
        if (items.length >= limit) return;
        if (!q || !q.key || !(q.options || []).includes(q.key)) return;
        items.push({
          id: node.id + '-' + i,
          module: moduleId,
          prompt: q.prompt,
          context: moduleId === 'lesen' ? node.body : null,
          audioId: moduleId === 'hoeren' ? node.id : null,
          script: moduleId === 'hoeren' ? node.script : null,
          options: q.options,
          key: q.key,
          family: 'pruefstrategie'
        });
      });
    });
    return items.length >= limit ? items.slice(0, limit) : null;
  }
  function compareRecordings(recordings) {
    const list = (recordings || []).filter(r => r && r.date).slice().sort((a, b) => String(a.date).localeCompare(String(b.date)));
    if (list.length < 2) return { ready: false, reason: 'تسجيلان مؤرّخان لازمان. لا مقارنة بواحد.' };
    return { ready: true, oldest: list[0], newest: list[list.length - 1], reason: 'الأقدم مقابل الأحدث. ليس متوسطًا.' };
  }

  DW.exam = {
    GOETHE: GOETHE, TELC: TELC, MOCKS: MOCKS, MASTERY: MASTERY,
    targetOf: targetOf, schreibenTask: schreibenTask, moduleScore: moduleScore,
    noCompensation: noCompensation, telcPass: telcPass, readiness: readiness,
    taper: taper, daysUntil: daysUntil, teachingMonth: teachingMonth, protocolSlot: protocolSlot,
    scorePaper: scorePaper, schreibenModule: schreibenModule, sprechenModule: sprechenModule,
    masteryEvidence: masteryEvidence, flattenQuestions: flattenQuestions,
    compareRecordings: compareRecordings
  };
})(typeof window !== 'undefined' ? (window.DW = window.DW || {}) : global.DW = global.DW || {});

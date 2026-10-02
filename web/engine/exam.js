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
    const done = new Set(((S && S.portfolio && S.portfolio.mastery) || []).filter(m => m && m.achieved).map(m => m.id));
    const masteryOk = MASTERY.filter(id => done.has(id)).length >= 4;
    const open = modulesOk && debtOk && masteryOk;
    return {
      open: open,
      modulesOk: modulesOk,
      debtOk: debtOk,
      debt: debt,
      masteryOk: masteryOk,
      masteryCount: MASTERY.filter(id => done.has(id)).length,
      reason: open ? 'الشروط الثلاثة معًا. هذا لا يحجز موعدًا.' : 'البوابة مغلقة. شرط ناقص.'
    };
  }
  function taper(daysLeft) {
    const n = Number(daysLeft);
    const active = n >= 0 && n <= 14;
    return {
      active: active,
      newGrammar: false,
      newVocabulary: n === 0 ? false : !active,
      focus: active ? ['دفتر الأخطاء', 'قوالب', '3 محاكاكات', 'نوم'] : [],
      reason: active ? 'تخفيف 14 يومًا مفروض. لا نحو جديد.' : 'التخفيف لم يبدأ.'
    };
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
    taper: taper, compareRecordings: compareRecordings
  };
})(typeof window !== 'undefined' ? (window.DW = window.DW || {}) : global.DW = global.DW || {});

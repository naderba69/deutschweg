/* Deutschweg — error ledger (PROMPT §10).
   Pre-debt status "watched" is required by the promotion rule:
   an error becomes live (and enters R1) only after two consecutive failed reviews.
   The schema example lists live|retired; watched is the state before promotion. */
(function (DW) {
  const FAMILIES = [
    'genus', 'kasus', 'deklination', 'konjugation', 'wortstellung', 'plural',
    'präposition', 'lexik-kollokation', 'register', 'falser-freund',
    'orthographie', 'aussprache', 'hoerstrategie', 'pruefstrategie'
  ];
  const FAMILY_AR = {
    genus: 'الجنس',
    kasus: 'الحالة',
    deklination: 'التصريف الاسمي',
    konjugation: 'تصريف الفعل',
    wortstellung: 'ترتيب الكلمات',
    plural: 'الجمع',
    präposition: 'حرف الجر',
    'lexik-kollokation': 'المفردات والتلازم',
    register: 'المقام',
    'falser-freund': 'الصديق الكاذب',
    orthographie: 'الإملاء',
    aussprache: 'النطق',
    hoerstrategie: 'استراتيجية السماع',
    pruefstrategie: 'استراتيجية الفحص',
    unklassifiziert: 'غير مصنّف'
  };
  const INTERVALS = [1, 3, 7, 21, 45];

  function S() { return DW.session.S; }
  function persist() { if (typeof DW.persist === 'function') DW.persist(); }
  function norm(s) { return String(s == null ? '' : s).trim().replace(/\s+/g, ' '); }
  function familyAr(id) { return FAMILY_AR[id] || id || 'غير مصنّف'; }

  function recomputeR1() {
    const st = S();
    if (!st) return 0;
    const live = (st.errorLedger || []).filter(e => e.status === 'live').length;
    st.indicators = st.indicators || {};
    st.indicators.R1 = live;
    const t = DW.today();
    st.indicatorLog = st.indicatorLog || [];
    const row = { date: t, R1: live, R2: st.indicators.R2 };
    const last = st.indicatorLog[st.indicatorLog.length - 1];
    if (!last || last.date !== t) st.indicatorLog.push(row);
    else Object.assign(last, row);
    return live;
  }

  function nextId() {
    const n = (S().errorLedger || []).reduce((m, e) => Math.max(m, parseInt(String(e.id || '').split('_')[1], 10) || 0), 0) + 1;
    return 'err_' + String(n).padStart(3, '0');
  }

  function log(partial) {
    const st = S();
    const family = FAMILIES.includes(partial.family) ? partial.family : (partial.family || 'unklassifiziert');
    const source = partial.source || 'lesson';
    const wrong = norm(partial.wrong);
    const right = norm(partial.right);
    const today = DW.today();

    const dup = (st.errorLedger || []).find(e => norm(e.wrong) === wrong && norm(e.right) === right);
    if (dup) {
      dup.streak = (dup.streak || 0) + 1;
      dup.lastSeen = today;
      if (dup.status === 'retired') {
        dup.status = 'watched';
        dup.failStreak = 0;
        dup.cleanAt45 = 0;
        dup.intervalIndex = 0;
        dup.due = DW.plusDays(1);
        dup.reactivated = today;
      }
      recomputeR1();
      persist();
      return dup;
    }

    const siblings = (st.errorLedger || []).filter(e => e.family === family && e.source === source && e.status !== 'retired');
    if (siblings.length >= 1) {
      const host = siblings[0];
      host.examples = host.examples || [{ wrong: host.wrong, right: host.right }];
      if (!host.examples.some(ex => norm(ex.wrong) === wrong && norm(ex.right) === right)) {
        host.examples.unshift({ wrong, right });
      }
      siblings.slice(1).forEach(s => {
        (s.examples || [{ wrong: s.wrong, right: s.right }]).forEach(ex => {
          if (!host.examples.some(h => norm(h.wrong) === norm(ex.wrong) && norm(h.right) === norm(ex.right))) host.examples.unshift(ex);
        });
        st.errorLedger = st.errorLedger.filter(e => e.id !== s.id);
      });
      host.examples = host.examples.slice(0, 3);
      host.wrong = wrong;
      host.right = right;
      host.streak = (host.streak || 0) + 1;
      host.lastSeen = today;
      if (partial.misconceptionId) host.misconceptionId = partial.misconceptionId;
      recomputeR1();
      persist();
      return host;
    }

    const entry = {
      id: nextId(),
      wrong, right, family, source,
      misconceptionId: partial.misconceptionId || null,
      firstSeen: today,
      lastSeen: today,
      reviews: [],
      due: DW.plusDays(1),
      status: 'watched',
      streak: 0,
      failStreak: 0,
      cleanAt45: 0,
      intervalIndex: 0,
      examples: [{ wrong, right }]
    };
    st.errorLedger.push(entry);
    recomputeR1();
    persist();
    return entry;
  }

  /* A scheduled review. correct=false twice in a row promotes to live.
     Two clean reviews completed at the 45-day interval retire the line. */
  function review(id, correct) {
    const st = S();
    const entry = (st.errorLedger || []).find(e => e.id === id);
    if (!entry || entry.status === 'retired') return null;
    const today = DW.today();
    entry.reviews = entry.reviews || [];
    entry.reviews.push(today);
    entry.lastSeen = today;
    const completed = INTERVALS[Math.min(entry.intervalIndex || 0, INTERVALS.length - 1)];
    if (!correct) {
      entry.failStreak = (entry.failStreak || 0) + 1;
      entry.cleanAt45 = 0;
      entry.streak = (entry.streak || 0) + 1;
      if (entry.failStreak >= 2) entry.status = 'live';
      entry.intervalIndex = 0;
      entry.due = DW.plusDays(1);
    } else {
      entry.failStreak = 0;
      if (completed === 45) entry.cleanAt45 = (entry.cleanAt45 || 0) + 1;
      else entry.cleanAt45 = 0;
      if ((entry.cleanAt45 || 0) >= 2) {
        entry.status = 'retired';
        entry.due = null;
        entry.retiredOn = today;
      } else {
        entry.intervalIndex = Math.min((entry.intervalIndex || 0) + 1, INTERVALS.length - 1);
        entry.due = DW.plusDays(INTERVALS[entry.intervalIndex]);
      }
    }
    const r1 = recomputeR1();
    persist();
    return { entry, promoted: entry.status === 'live' && !correct && entry.failStreak >= 2, retired: entry.status === 'retired', r1 };
  }

  function live() { return (S().errorLedger || []).filter(e => e.status === 'live'); }
  function watched() { return (S().errorLedger || []).filter(e => e.status === 'watched'); }
  function retired() { return (S().errorLedger || []).filter(e => e.status === 'retired'); }
  function isDue(e) { return e && e.status !== 'retired' && e.due && e.due <= DW.today(); }

  DW.ledger = {
    FAMILIES, FAMILY_AR, INTERVALS, familyAr, log, review, live, watched, retired, isDue, recomputeR1
  };
})(window.DW = window.DW || {});

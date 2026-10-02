/* Deutschweg — P2 adaptive core (PROMPT §7, §14, D5–D8, D13, D15).
   Pure where it can be: the UI calls these functions, it does not reimplement them.
   A missing reason rejects a block. A missing measurement stays null. Nothing is invented. */
(function (DW) {
  const TRACKS = ['grammar', 'pronunciation', 'srs', 'chunks', 'reading', 'listening', 'writing', 'speaking', 'foundations'];
  const BASE_FLOORS = { srs: 90, grammar: 120, speaking: 60, reading: 60, listening: 90, pronunciation: 30, writing: 60, foundations: 30 };
  const ABS_MIN = { speaking: 45, srs: 60 };
  const GATE_HOURS = { G1: 280, G2: 540, G3: 890, G4: 1090, G5: 1210 };
  const GATE_ORDER = ['G1', 'G2', 'G3', 'G4', 'G5'];
  const PRODUCTIVE = { A1: 300, A2: 700, B1: 1400, B2: 2600 };
  const VARIANTS = ['A', 'B', 'C'];
  const ROTATION = {
    A: { reading: 'قارئ متدرّج', speaking: 'تسجيل فردي', listening: 'Langsam', writing: 'جمل يومية' },
    B: { reading: 'مجلة مبسّطة', speaking: 'محاكاة حوار', listening: 'بودكاست بطيء', writing: 'فقرة' },
    C: { reading: 'عناوين ومقالات قصيرة', speaking: 'مكالمة تاندَم', listening: 'مقطع أصيل مع تعليق', writing: 'رسالة' }
  };
  const FAMILY_TRACK = {
    aussprache: 'pronunciation', hoerstrategie: 'listening', orthographie: 'writing',
    genus: 'grammar', kasus: 'grammar', deklination: 'grammar', konjugation: 'grammar',
    wortstellung: 'grammar', plural: 'grammar', präposition: 'grammar', register: 'grammar',
    'lexik-kollokation': 'srs', 'falser-freund': 'srs', pruefstrategie: 'foundations'
  };

  function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
  function addDays(dateStr, n) {
    const d = new Date(String(dateStr).slice(0, 10) + 'T12:00:00Z');
    d.setUTCDate(d.getUTCDate() + n);
    return d.toISOString().slice(0, 10);
  }
  function daysBetween(a, b) {
    if (!a || !b) return 0;
    const ms = new Date(String(b).slice(0, 10) + 'T12:00:00Z') - new Date(String(a).slice(0, 10) + 'T12:00:00Z');
    return Math.round(ms / 86400000);
  }
  function overlapDays(a0, a1, b0, b1) {
    const s = a0 > b0 ? a0 : b0;
    const e = a1 < b1 ? a1 : b1;
    if (e <= s) return 0;
    return daysBetween(s, e);
  }
  function trackOf(cap) {
    const t = cap && cap.track;
    if (t === 'vocabulary') return 'srs';
    if (TRACKS.indexOf(t) >= 0) return t;
    return FAMILY_TRACK[t] || 'grammar';
  }
  function speedOf(cap) {
    const t = trackOf(cap);
    return (t === 'chunks' || t === 'pronunciation') ? 0.6 : 1;
  }
  function pausesOf(S) { return (S.settings && S.settings.pauses) || S.pauses || []; }
  function frozenDays(cap, today, S) {
    const from = cap.lastActive || today;
    let n = 0;
    pausesOf(S).forEach(p => { if (p && p.from && p.until) n += overlapDays(from, today, p.from, p.until); });
    return n;
  }
  function dormancy(cap, today, S) {
    const raw = daysBetween(cap.lastActive, today);
    const paused = S ? frozenDays(cap, today, S) : 0;
    return Math.max(0, raw - paused) * speedOf(cap);
  }
  function decayUrgency(cap, today, S) {
    if (!cap || !cap.lastActive || cap.evidence === 'E0' || !cap.evidence) return 0;
    return clamp((dormancy(cap, today, S) - 45) / 30, 0, 1);
  }
  function inWindow(cap, today, S) {
    if (!cap || !cap.evidence || cap.evidence === 'E0') return false;
    return dormancy(cap, today, S) >= 45;
  }

  function dropOne(state) {
    if (state === 'E3') return 'E2';
    if (state === 'E2') return 'E1';
    if (state === 'E1' || state === 'E1a') return state;
    return 'E1';
  }
  function activate(cap, success, today) {
    const before = cap.evidence;
    if (success) {
      const hadPressure = before === 'E3' || before === 'E2' || (cap.history || []).some(h => h.state === 'E3' || h.state === 'E2');
      if (hadPressure && before !== 'E1a') cap.evidence = 'E3';
      cap.lastActive = today;
      cap.decayDue = addDays(today, Math.round(45 / speedOf(cap)));
      cap.activationScheduled = false;
      cap.activationDue = null;
    } else {
      cap.evidence = dropOne(before);
      cap.activationDue = addDays(today, 3);
      cap.activationScheduled = true;
    }
    cap.history = cap.history || [];
    cap.history.push({ state: cap.evidence, at: today, source: 'activation', result: success ? 'success' : 'fail', before: before });
    return cap;
  }

  function scaleFloors(hours) {
    const h = clamp(Number(hours) || 10, 6, 12);
    const floors = {};
    Object.keys(BASE_FLOORS).forEach(k => { floors[k] = Math.round(BASE_FLOORS[k] * (h / 10)); });
    floors.speaking = Math.max(floors.speaking, ABS_MIN.speaking);
    floors.srs = Math.max(floors.srs, ABS_MIN.srs);
    const budget = h * 60;
    const floorSum = Object.keys(floors).reduce((s, k) => s + floors[k], 0);
    const slack = budget - floorSum;
    return {
      hours: h, floors: floors, budget: budget, floorSum: floorSum, slack: slack,
      unallocated: Math.round(budget * 0.1),
      lowerBound: slack / budget < 0.05,
      minimumsHold: floors.speaking >= 45 && floors.srs >= 60
    };
  }
  function calendarMonths(hours) {
    const h = clamp(Number(hours) || 10, 6, 12);
    return 1210 / (h * 4.33);
  }
  function sessionCount(hours) {
    const h = clamp(Number(hours) || 10, 6, 12);
    if (h >= 11) return 7;
    if (h <= 8) return 5;
    return 6;
  }

  function gapDays(S, today) {
    const last = S.gaps && S.gaps.lastSessionDate;
    if (!last) return 0;
    let days = daysBetween(last, today);
    pausesOf(S).forEach(p => { if (p && p.from && p.until) days -= overlapDays(last, today, p.from, p.until); });
    return Math.max(0, days);
  }
  function declarePause(S, weeks, today) {
    const w = Number(weeks) || 0;
    if (w < 1 || w > 3) return { ok: false, reason: 'الوقفة من أسبوع إلى ثلاثة. لا أكثر.' };
    const year = String(today).slice(0, 4);
    const used = pausesOf(S).filter(p => p.from && String(p.from).slice(0, 4) === year).length;
    if (used >= 3) return { ok: false, reason: 'ثلاث وقفات هذا العام. لا رابعة.' };
    const until = addDays(today, w * 7);
    S.settings = S.settings || {};
    S.settings.pauses = pausesOf(S).slice();
    S.settings.pauses.push({ from: today, until: until, weeks: w });
    S.settings.pauseUntil = until;
    if (S.gaps) S.gaps.reentryPending = false;
    return { ok: true, until: until, recordedGap: 0 };
  }
  function pauseCovers(S, today) {
    const until = S.settings && S.settings.pauseUntil;
    return !!(until && today <= until);
  }
  function onReturn(S, today) {
    const until = S.settings && S.settings.pauseUntil;
    if (until && today > until && !(S.gaps && S.gaps.pauseReturnHandled === until)) {
      S.gaps = S.gaps || {};
      S.gaps.reentryPending = true;
      S.gaps.reentryReason = 'pause';
      S.gaps.pauseReturnHandled = until;
      S.gaps.recordedGap = gapDays(S, today);
    }
    return S.gaps && S.gaps.recordedGap || 0;
  }

  function rescheduleCards(cards, today, gap) {
    const list = cards || [];
    const due = list.filter(c => ['receptive', 'productive', 'sentence'].some(d => c[d] && c[d].due && c[d].due <= today));
    if (gap <= 7) return { shown: due, rescheduled: 0, queue: due.length };
    const shown = due.slice(0, 30);
    const rest = due.slice(30);
    rest.forEach((c, i) => {
      ['receptive', 'productive', 'sentence'].forEach(d => {
        if (c[d] && c[d].due && c[d].due <= today) c[d].due = addDays(today, 1 + Math.floor(i / 10));
      });
    });
    return { shown: shown, rescheduled: rest.length, queue: shown.length };
  }

  function directionOf(log, key) {
    const pts = (log || []).filter(x => x && x[key] !== undefined && x[key] !== null);
    if (pts.length < 2) return 'unknown';
    const a = pts[0][key], b = pts[pts.length - 1][key];
    if (typeof a === 'object' || typeof b === 'object') return 'unknown';
    if (b < a) return 'down';
    if (b > a) return 'up';
    return 'flat';
  }

  function r2FromDrills(drills, today) {
    const now = new Date(today + 'T12:00:00Z').getTime();
    const measures = (drills || []).filter(d => d && d.mode === 'measure' && (now - new Date(d.at).getTime()) <= 14 * 86400000);
    const last = measures.slice(-5);
    if (!last.length) return { value: null, families: {}, weak: [] };
    const by = {};
    last.forEach(d => {
      const f = d.family || 'mix';
      by[f] = by[f] || { ok: 0, n: 0 };
      by[f].ok += d.correctInTime || 0;
      by[f].n += d.total || 0;
    });
    let ok = 0, n = 0;
    Object.keys(by).forEach(k => { ok += by[k].ok; n += by[k].n; });
    const weak = Object.keys(by).filter(k => by[k].n && by[k].ok / by[k].n < 0.7);
    return { value: n ? ok / n : null, families: by, weak: weak };
  }
  function bandR2(aggregate, weakCount) {
    if (aggregate == null) return null;
    let band = aggregate < 0.7 ? 'red' : aggregate < 0.85 ? 'yellow' : 'green';
    if (weakCount && band === 'green') band = 'yellow';
    return band;
  }
  function r3Minutes(recordings, today) {
    const cutoff = addDays(today, -7);
    return (recordings || []).filter(r => r && r.date && r.date > cutoff && r.date <= today)
      .reduce((s, r) => s + (Number(r.seconds) || 0), 0) / 60;
  }
  function median(nums) {
    if (!nums.length) return null;
    const a = nums.slice().sort((x, y) => x - y);
    const m = Math.floor(a.length / 2);
    return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2;
  }
  function r4Speed(sessions) {
    const valid = (sessions || []).filter(s => s && s.measured && s.questions >= 2 && s.comprehension >= 0.95 && s.minutes > 0);
    const last = valid.slice(-5);
    return { value: median(last.map(s => s.words / s.minutes)), counted: last.length, excluded: (sessions || []).length - valid.length };
  }
  function r5Score(sessions) {
    const fresh = (sessions || []).filter(s => s && s.unannounced && !s.preTaught && !s.studied && typeof s.score === 'number');
    const last = fresh.slice(-5);
    if (!last.length) return { value: null, counted: 0, excluded: (sessions || []).length };
    return { value: last.reduce((s, x) => s + x.score, 0) / last.length, counted: last.length, excluded: (sessions || []).length - fresh.length };
  }
  function levelOf(S) {
    const g = S.gates || {};
    if (g.G4 && (g.G4.state === 'passed' || g.G4.state === 'open' || g.G4.state === 'at-risk')) return 'B2';
    if (g.G3 && (g.G3.state === 'passed' || g.G3.state === 'open' || g.G3.state === 'at-risk')) return 'B2';
    if (g.G2 && (g.G2.state === 'passed' || g.G2.state === 'open')) return 'B1';
    if (g.G1 && (g.G1.state === 'passed' || g.G1.state === 'open')) return 'A2';
    return 'A1';
  }
  function r6Count(cards, level) {
    const list = cards || [];
    const productive = list.filter(c => c && !c.chunk && c.productive && c.productive.box >= 3).length;
    const chunks = list.filter(c => c && c.chunk && c.productive && c.productive.box >= 3).length;
    const target = PRODUCTIVE[level] || 300;
    return { productive: productive, chunks: chunks, target: target, chunkTarget: 100, ratio: target ? productive / target : 0 };
  }

  function measure(S, today) {
    today = today || (DW.today ? DW.today() : new Date().toISOString().slice(0, 10));
    const live = (S.errorLedger || []).filter(e => e.status === 'live').length;
    const r2 = r2FromDrills(S.drills, today);
    const r3 = r3Minutes((S.portfolio && S.portfolio.recordings) || [], today);
    const r4 = r4Speed((S.portfolio && S.portfolio.reading) || []);
    const r5 = r5Score((S.portfolio && S.portfolio.listening) || []);
    const level = levelOf(S);
    const r6 = r6Count((S.srs && S.srs.cards) || [], level);
    const log = S.indicatorLog || [];
    const dir = {
      R1: directionOf(log, 'R1'), R2: directionOf(log, 'R2'), R3: directionOf(log, 'R3'),
      R4: directionOf(log, 'R4'), R5: directionOf(log, 'R5')
    };
    const bands = {
      R1: bandR1(live, dir.R1),
      R2: bandR2(r2.value, r2.weak.length),
      R3: r3 >= 60 ? 'green' : r3 >= 30 ? 'yellow' : 'red',
      R4: r4.value == null ? null : r4.value >= 170 ? 'green' : r4.value >= 130 ? 'yellow' : 'red',
      R5: r5.value == null ? null : r5.value >= 0.7 ? 'green' : r5.value >= 0.5 ? 'yellow' : 'red',
      R6: r6.ratio >= 1 ? 'green' : r6.ratio >= 0.85 ? 'yellow' : 'red'
    };
    return {
      R1: live, R2: r2.value, R2Families: r2.families, R2Weak: r2.weak,
      R3: r3, R4: r4.value, R4Detail: r4, R5: r5.value, R5Detail: r5,
      R6: { productive: r6.productive, chunks: r6.chunks }, R6Detail: r6,
      bands: bands, direction: dir, level: level, today: today
    };
  }
  function bandR1(value, dir) {
    if (dir === 'unknown') return value >= 15 ? 'red' : value >= 9 ? 'yellow' : 'green';
    if (value >= 15 || dir === 'flat') return 'red';
    if (value <= 8 && dir === 'down') return 'green';
    if (value <= 8) return 'yellow';
    return 'yellow';
  }

  function deficits(m) {
    const d = {};
    d.grammar = m.R2 == null ? null : clamp((0.85 - m.R2) / (0.85 - 0.70), 0, 1);
    d.speaking = clamp((60 - m.R3) / (60 - 30), 0, 1);
    d.reading = m.R4 == null ? null : clamp((170 - m.R4) / (170 - 130), 0, 1);
    d.listening = m.R5 == null ? null : clamp((0.70 - m.R5) / (0.70 - 0.50), 0, 1);
    d.srs = clamp((1 - (m.R6Detail ? m.R6Detail.ratio : 0)) / (1 - 0.85), 0, 1);
    d.pronunciation = null;
    d.writing = null;
    d.foundations = null;
    d.chunks = null;
    return d;
  }
  function knownDeficits(d) {
    const out = {};
    Object.keys(d).forEach(k => { if (d[k] != null) out[k] = d[k]; });
    return out;
  }

  function decide(m) {
    const bands = m.bands || {};
    const keys = ['R1', 'R2', 'R3', 'R4', 'R5', 'R6'];
    const red = keys.filter(k => bands[k] === 'red');
    const yellow = keys.filter(k => bands[k] === 'yellow');
    if (red.length) return { decision: 'REROUTE', red: red, yellow: yellow, newContent: 'unaffected-postponed' };
    if (yellow.length >= 3) return { decision: 'HOLD', red: red, yellow: yellow, newContent: false };
    return { decision: 'GO', red: red, yellow: yellow, newContent: true };
  }

  function propose(current, m, hours) {
    const scaled = scaleFloors(hours);
    const base = Object.assign({}, scaled.floors, current || {});
    const d = knownDeficits(deficits(m));
    const names = Object.keys(d);
    if (!names.length) return { proposed: base, transfer: 0, from: null, to: null, rejected: false, scaled: scaled };
    const weakest = names.slice().sort((a, b) => d[b] - d[a])[0];
    const strongest = names.slice().sort((a, b) => d[a] - d[b])[0];
    let transfer = Math.min(120, d[weakest] * 120, scaled.budget * 0.2);
    transfer = Math.round(transfer);
    if (weakest === strongest || transfer <= 0) return { proposed: base, transfer: 0, from: strongest, to: weakest, rejected: false, scaled: scaled };
    const proposed = Object.assign({}, base);
    const floor = scaled.floors[strongest] || 0;
    if (proposed[strongest] - transfer < floor) transfer = Math.max(0, proposed[strongest] - floor);
    proposed[strongest] -= transfer;
    proposed[weakest] += transfer;
    return { proposed: proposed, transfer: transfer, from: strongest, to: weakest, rejected: false, scaled: scaled };
  }
  function constrain(proposed, floors, attempted) {
    const out = Object.assign({}, proposed);
    const notes = [];
    if (attempted && attempted.minutes > 120) {
      return { ok: false, proposed: proposed, reason: 'نقل فوق 120 دقيقة مرفوض.', corrected: false };
    }
    Object.keys(floors).forEach(k => {
      if (out[k] != null && out[k] < floors[k]) {
        notes.push(k);
        out[k] = floors[k];
      }
    });
    return { ok: notes.length === 0, proposed: out, corrected: notes.length > 0, restored: notes, reason: notes.length ? 'القطع تحت الحد رُفض وأُعيد الأصل. المسارات: ' + notes.join(', ') + '.' : 'الحدود ثابتة.' };
  }
  function applyTransfer(allocation, from, to, minutes, floors) {
    if (minutes > 120) return { ok: false, proposed: allocation, reason: 'النقل فوق 120 دقيقة مرفوض.' };
    const next = Object.assign({}, allocation);
    next[from] = (next[from] || 0) - minutes;
    next[to] = (next[to] || 0) + minutes;
    if (floors[from] != null && next[from] < floors[from]) {
      return { ok: false, corrected: true, proposed: allocation, reason: 'القطع تحت حد ' + from + ' مرفوض. أُعيد الأصل.' };
    }
    return { ok: true, proposed: next, reason: 'نقل ' + minutes + ' من ' + from + ' إلى ' + to + '.' };
  }
  function confirmException(S, track, minutes, today) {
    if (track === 'speaking' || track === 'srs') return { ok: false, reason: 'التحدّث والبطاقات لا استثناء لهما.' };
    const floors = scaleFloors(S.learner.weeklyHours).floors;
    if (minutes < floors[track] * 0.5) return { ok: false, reason: 'تحت 50% من الحد مرفوض.' };
    const hist = (S.weekPlan && S.weekPlan.exceptions) || [];
    const recent = hist.filter(x => x.track === track && daysBetween(x.weekOf, today) < 21);
    if (recent.length >= 2) return { ok: false, reason: 'أسبوعان متتاليان تحت الحد هما الحد الأقصى.' };
    return { ok: true, reason: 'استثناء مؤكَّد من المتعلم، لا أكثر من أسبوعين، ولا تحت النصف.' };
  }

  function familyRanks(S) {
    const counts = {};
    (S.errorLedger || []).filter(e => e.status === 'live').forEach(e => { counts[e.family] = (counts[e.family] || 0) + (e.streak || 1); });
    return Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
  }
  function floorAtRisk(track, S, today) {
    const hours = (S.learner && S.learner.weeklyHours) || 10;
    const floors = scaleFloors(hours).floors;
    const floor = floors[track];
    if (!floor) return false;
    const consumed = (S.weekPlan && S.weekPlan.consumed && S.weekPlan.consumed[track]) || 0;
    const left = Math.max(1, sessionCount(hours) - ((S.weekPlan && S.weekPlan.sessionsDone) || 0));
    const typical = { speaking: 8, srs: 10, grammar: 15, reading: 15, listening: 12, writing: 12, pronunciation: 4, foundations: 3, chunks: 5 }[track] || 8;
    return (floor - consumed) > (left - 1) * typical;
  }

  function block(partial) {
    if (!partial || !partial.reason || !String(partial.reason).trim()) return null;
    return {
      track: partial.track,
      type: partial.type,
      minutes: partial.minutes,
      capabilityId: partial.capabilityId || null,
      priority: partial.score || 0,
      score: partial.score || 0,
      reason: String(partial.reason).trim(),
      lastActive: partial.lastActive || null,
      decayUrgency: partial.decayUrgency || 0
    };
  }
  function scoreOf(b, ctx) {
    return 15 * (b.decayUrgency || 0)
      + 12 * (b.gateRequired ? 1 : 0)
      + 10 * ((b.daysOverdue || 0) / 7)
      + 8 * (b.familyWeight || 0)
      + 6 * (b.deficit || 0)
      + 5 * (b.floorAtRisk ? 1 : 0);
  }

  function candidates(S, today) {
    const m = measure(S, today);
    const decision = (S.weekPlan && S.weekPlan.decision) || decide(m).decision;
    const ranks = familyRanks(S);
    const defs = deficits(m);
    const variant = (S.rotation && S.rotation.variant) || 'A';
    const rot = ROTATION[variant] || ROTATION.A;
    const out = [];
    (S.capabilities || []).forEach(cap => {
      if (!inWindow(cap, today, S)) return;
      const u = decayUrgency(cap, today, S);
      const scored = {
        track: trackOf(cap), type: 'activation', minutes: u >= 1 ? 5 : 4,
        capabilityId: cap.id, decayUrgency: u, lastActive: cap.lastActive,
        reason: 'يحتاج تنشيطًا. آخر نشاط ' + cap.lastActive + '. الإلحاح ' + u.toFixed(2) + '. ليست خسارة، هي ساعة.'
      };
      scored.score = scoreOf(scored);
      out.push(scored);
    });
    if (ranks.length) {
      const top = ranks[0];
      const weight = ranks.length;
      const b = {
        track: FAMILY_TRACK[top] || 'grammar', type: 'review-error', minutes: 8,
        familyWeight: weight, daysOverdue: 0,
        reason: 'عائلة حيّة في الصدارة: ' + top + '. الهجوم يسبق المحتوى الجديد. المصدر: errorLedger live.'
      };
      b.score = scoreOf(b);
      out.push(b);
    }
    const due = ((S.srs && S.srs.cards) || []).filter(c => ['receptive', 'productive', 'sentence'].some(d => c[d] && c[d].due && c[d].due <= today));
    const floors = scaleFloors((S.learner && S.learner.weeklyHours) || 10).floors;
    const shares = [
      ['grammar', m.R2Weak.length ? 'drill-3s' : 'grammar', 10, m.R2Weak.length ? 'عائلة تحت 70%: ' + m.R2Weak.join(', ') + '. المتوسط لا يُخفيها.' : 'حصة النحو من حد ' + floors.grammar + ' دقيقة. R2 ' + (m.R2 == null ? 'غير مقيس، فلا يُلوَّن' : Math.round(m.R2 * 100) + '%') + '.'],
      ['srs', 'srs', due.length ? Math.min(15, Math.max(5, Math.ceil(Math.min(due.length, 30) / 3))) : 8, due.length ? 'بطاقات مستحقّة: ' + due.length + '. السقف 30. الفجوة لا تكدّس الطابور.' : 'حصة البطاقات من حد ' + floors.srs + ' دقيقة. لا بطاقة مستحقّة اليوم، والوقت يبقى محجوزًا حتى لا يُبتلع الحد.'],
      ['speaking', 'speaking', 8, 'التحدّث مضمون في كل جلسة. R3 = ' + Math.round(m.R3) + ' دقيقة مسجّلة في 7 أيام، لا وقت الكتلة. الشكل: ' + rot.speaking + '.'],
      ['reading', 'reading', 10, 'حد القراءة ' + floors.reading + ' دقيقة في الأسبوع. R4 غير المقيس لا يُعدّ أخضرًا. الشكل: ' + rot.reading + '.'],
      ['listening', 'listening', 10, 'حد السماع ' + floors.listening + ' دقيقة. R5 لا يُحسب على مادة مدروسة. الشكل: ' + rot.listening + '.'],
      ['writing', 'writing', 8, 'حصة الكتابة من حد ' + floors.writing + '. الشكل هذا الأسبوع: ' + rot.writing + '. الفاحص لا يدّعي تصحيح النص.'],
      ['pronunciation', 'pronunciation', 4, 'حصة النطق من حد ' + floors.pronunciation + '. البنك الموجود أصوات A0، لا المنهج الكامل.'],
      ['foundations', 'foundations', 3, 'أساسات يومية: الحرف الكبير وß والفاصلة. 3 دقائق من حد ' + floors.foundations + '.'],
      ['chunks', 'chunks', 5, 'مسار القوالب. مئة عبارة لكل مستوى تُؤلَّف في مرحلة المحتوى. لا تمرين مختلق.']
    ];
    shares.forEach(function (row) {
      const b = {
        track: row[0], type: row[1], minutes: row[2], reason: row[3],
        deficit: defs[row[0]] || 0, floorAtRisk: floorAtRisk(row[0], S, today) ? 1 : 0,
        daysOverdue: row[0] === 'srs' && gapDays(S, today) > 7 ? gapDays(S, today) : 0
      };
      b.score = scoreOf(b);
      out.push(b);
    });
    const lessonOpen = !((S.progress || []).some(p => p.lessonId === 'a0-u1-l1' && p.state === 'completed'));
    const hold = decision === 'HOLD' || S.consolidationWeek;
    const rerouteBlocksGrammar = decision === 'REROUTE' && (m.bands.R2 === 'red' || m.bands.R1 === 'red');
    if (lessonOpen && !hold && (decision !== 'REROUTE' || rerouteBlocksGrammar)) {
      const b = {
        track: 'grammar', type: 'lesson-step', minutes: 20, gateRequired: 1,
        reason: 'محتوى جديد، وآخر ما يُدرج. البوابة لا تُفتح بـ E1. القرار ' + decision + ' يسمح به بعد الحدود والتحدّث.'
      };
      b.score = scoreOf(b);
      out.push(b);
    }
    return out.map(block).filter(Boolean);
  }

  function diversify(list) {
    const out = [];
    const rest = list.slice();
    while (rest.length) {
      let pick = 0;
      if (out.length >= 2 && out[out.length - 1].track === out[out.length - 2].track) {
        const other = rest.findIndex(b => b.track !== out[out.length - 1].track);
        if (other >= 0) pick = other;
      }
      out.push(rest.splice(pick, 1)[0]);
    }
    return out;
  }
  function compose(S, today, opts) {
    opts = opts || {};
    const budget = opts.minutes || 90;
    const raw = candidates(S, today).filter(b => b && b.reason);
    raw.sort((a, b) => b.score - a.score || String(a.lastActive || '9999').localeCompare(String(b.lastActive || '9999')));
    const lesson = raw.filter(b => b.type === 'lesson-step');
    const forced = raw.filter(b => b.type === 'activation');
    const rest = raw.filter(b => b.type !== 'lesson-step' && b.type !== 'activation');
    const chosen = forced.slice();
    let used = forced.reduce((s, b) => s + b.minutes, 0);
    rest.forEach(b => {
      if (used + b.minutes <= budget + 15) { chosen.push(b); used += b.minutes; }
    });
    if (!chosen.some(b => b.track === 'speaking')) {
      const speak = rest.find(b => b.track === 'speaking') || block({
        track: 'speaking', type: 'speaking', minutes: 8, score: 5,
        reason: 'التحدّث مضمون في كل جلسة، حتى لو لم يصعد في الترتيب.'
      });
      chosen.unshift(speak);
      used += speak.minutes;
    }
    TRACKS.forEach(t => {
      if (t === 'chunks' && !floorAtRisk(t, S, today) && !chosen.some(b => b.track === t)) return;
      if (floorAtRisk(t, S, today) && !chosen.some(b => b.track === t)) {
        const extra = rest.find(b => b.track === t);
        if (extra) { chosen.push(extra); used += extra.minutes; }
      }
    });
    const decision = (S.weekPlan && S.weekPlan.decision) || decide(measure(S, today)).decision;
    const rulesOk = chosen.some(b => b.track === 'speaking') && chosen.every(b => b.reason);
    if (rulesOk && lesson.length && decision !== 'HOLD' && !S.consolidationWeek && used + lesson[0].minutes <= budget + 15) {
      chosen.push(lesson[0]);
    }
    const ordered = diversify(chosen);
    const rejected = raw.filter(b => !b.reason);
    return { blocks: ordered, minutes: ordered.reduce((s, b) => s + b.minutes, 0), decision: decision, rejected: rejected.length };
  }
  function shorten(plan, minutes) {
    const blocks = (plan.blocks || plan).slice().sort((a, b) => b.score - a.score);
    const top = blocks[0];
    const speakSrc = blocks.find(b => b.track === 'speaking') || {
      track: 'speaking', type: 'speaking', minutes: 5, score: 0,
      reason: 'خمس دقائق تحدّث في الجلسة القصيرة. هذا قرار ثابت، لا عقوبة.'
    };
    const speak = Object.assign({}, speakSrc, { minutes: 5, reason: speakSrc.reason });
    let chosen;
    if (!top) chosen = [speak];
    else if (top.track === 'speaking') chosen = [Object.assign({}, top, { minutes: 5 })];
    else chosen = [Object.assign({}, top, { minutes: Math.min(top.minutes, (minutes || 15) - 5) }), speak];
    const ids = chosen.map(b => b.type + ':' + b.track);
    const deferred = blocks.filter(b => ids.indexOf(b.type + ':' + b.track) < 0);
    return { blocks: chosen, deferred: deferred, penalty: false, minutes: chosen.reduce((s, b) => s + b.minutes, 0) };
  }
  function reentry(S, today) {
    const plan = compose(S, today, { minutes: 30 });
    const act = plan.blocks.find(b => b.type === 'activation') || block({
      track: 'grammar', type: 'activation', minutes: 4, decayUrgency: 1,
      reason: 'تنشيط أعلى إلحاح في جلسة العودة. لا عبارة «تأخّرت».'
    });
    const review = plan.blocks.find(b => b.type === 'review-error') || block({
      track: 'grammar', type: 'review-error', minutes: 8,
      reason: 'مراجعة خطأ واحد في العودة. لا تعويض ولا طابور.'
    });
    const speak = block({ track: 'speaking', type: 'speaking', minutes: 5, reason: 'خمس دقائق تحدّث في العودة. لا عقوبة غياب.' });
    const srs = block({ track: 'srs', type: 'srs', minutes: 8, reason: 'عشر بطاقات فقط في العودة، لا الطابور كله.' });
    return { blocks: [act, review, speak, srs].filter(Boolean), minutes: 30, penalty: false, kind: 'reentry' };
  }
  function composeWeek(S, today) {
    const hours = (S.learner && S.learner.weeklyHours) || 10;
    const n = sessionCount(hours);
    const scaled = scaleFloors(hours);
    const sessions = [];
    for (let i = 0; i < n; i++) {
      const day = compose(S, today, { minutes: hours >= 10 ? 100 : 90 });
      sessions.push({ day: i + 1, blocks: day.blocks, minutes: day.minutes });
    }
    const seen = {};
    sessions.forEach(s => s.blocks.forEach(b => { seen[b.track] = true; }));
    return { sessions: sessions, tracks: Object.keys(seen), floors: scaled.floors, count: n };
  }
  function guardSwap(week, removeBlock, addBlock) {
    const alloc = week.allocation || {};
    const consumed = week.consumed || {};
    const track = addBlock.track;
    const planned = (week.sessions || []).reduce((s, sess) => s + (sess.blocks || []).filter(b => b.track === track).reduce((a, b) => a + b.minutes, 0), 0);
    const removed = removeBlock && removeBlock.track === track ? removeBlock.minutes : 0;
    const next = (consumed[track] || 0) + planned - removed + addBlock.minutes;
    if (alloc[track] != null && next > alloc[track]) return { ok: false, restored: removeBlock, reason: 'المستهلك مع المخطَّط يتجاوز توزيع ' + track + '.' };
    return { ok: true };
  }

  function resumeLine(cursor) {
    if (!cursor || !cursor.step || !cursor.total) return '';
    return 'توقّفت عند الخطوة ' + cursor.step + ' من ' + cursor.total + ' — ' + (cursor.recap || 'هذا ملخصها.');
  }
  function rotate(rotation, today) {
    const cur = rotation || { variant: 'A', lastChange: null };
    if (!cur.lastChange) return { variant: cur.variant || 'A', lastChange: today };
    if (daysBetween(cur.lastChange, today) < 42) return cur;
    const i = Math.max(0, VARIANTS.indexOf(cur.variant));
    return { variant: VARIANTS[(i + 1) % 3], lastChange: today };
  }
  function tickGates(S, today) {
    const gap = gapDays(S, today);
    const hours = ((S.stats && S.stats.studiedMinutes) || 0) / 60;
    GATE_ORDER.forEach((id, i) => {
      const g = S.gates[id];
      if (!g) return;
      if (g.state === 'passed' && gap >= 56) {
        g.state = 'at-risk';
        g.atRiskOn = today;
        S.consolidationWeek = true;
      }
      const prev = i === 0 ? null : S.gates[GATE_ORDER[i - 1]];
      const prevOk = i === 0 || (prev && (prev.state === 'passed' || prev.state === 'at-risk' || prev.state === 'open'));
      if (g.state === 'locked' && hours >= GATE_HOURS[id] && prevOk) g.state = 'diagnostic';
    });
    return { gap: gap, consolidation: !!S.consolidationWeek };
  }
  function finishConsolidation(S) {
    S.consolidationWeek = false;
    GATE_ORDER.forEach(id => {
      if (S.gates[id] && S.gates[id].state === 'at-risk') S.gates[id].state = 'open';
    });
    return S.gates;
  }

  function evidenceLabel(state) {
    if (state === 'E3') return 'E3 تحت الضغط';
    if (state === 'E2') return 'E2 بعد فاصل';
    if (state === 'E1') return 'E1 لم يُثبت بعد';
    if (state === 'E1a') return 'E1a بمساعدة — لا تُحتسب في البوابة';
    return 'E0 لم يبدأ';
  }

  DW.adaptive = {
    TRACKS: TRACKS, BASE_FLOORS: BASE_FLOORS, ROTATION: ROTATION, GATE_HOURS: GATE_HOURS,
    addDays: addDays, daysBetween: daysBetween, trackOf: trackOf, speedOf: speedOf,
    dormancy: dormancy, decayUrgency: decayUrgency, inWindow: inWindow, activate: activate, dropOne: dropOne,
    scaleFloors: scaleFloors, calendarMonths: calendarMonths, sessionCount: sessionCount,
    gapDays: gapDays, declarePause: declarePause, pauseCovers: pauseCovers, onReturn: onReturn,
    rescheduleCards: rescheduleCards, measure: measure, bandR2: bandR2, bandR1: bandR1,
    r3Minutes: r3Minutes, r4Speed: r4Speed, r5Score: r5Score, decide: decide, propose: propose,
    constrain: constrain, applyTransfer: applyTransfer, confirmException: confirmException,
    compose: compose, shorten: shorten, reentry: reentry, composeWeek: composeWeek, guardSwap: guardSwap,
    resumeLine: resumeLine, rotate: rotate, tickGates: tickGates, finishConsolidation: finishConsolidation,
    evidenceLabel: evidenceLabel, candidates: candidates
  };
})(window.DW = window.DW || {});

/* Deutschweg — P1 instruments: ledger, attack, 3-second drill, SRS, writing, workshop.
   The engine chooses the family and the reason. The learner does not pick a lesson. */
(function (DW) {
  function el(tag, cls, txt) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt !== undefined && txt !== null) n.textContent = txt;
    return n;
  }
  function S() { return DW.session.S; }
  function persist() { if (DW.persist) DW.persist(); }
  function goHome() { if (DW.go) DW.go('home'); }

  function shell(view, title) {
    view.innerHTML = '';
    const head = el('div', 'lesson-head');
    const back = el('button', 'link', '‹ اليوم');
    back.type = 'button';
    back.onclick = goHome;
    head.appendChild(back);
    head.appendChild(el('div', 'counter', title));
    view.appendChild(head);
    return view;
  }
  function reason(view, text) {
    const r = el('div', 'reason', text);
    view.appendChild(r);
    return r;
  }
  function sourceButton(label, explanation) {
    const b = el('button', 'src', label);
    b.type = 'button';
    b.onclick = () => {
      const open = b.nextSibling && b.nextSibling.classList && b.nextSibling.classList.contains('src-box');
      if (open) { b.nextSibling.remove(); return; }
      const box = el('div', 'layer src-box', explanation);
      b.after(box);
    };
    return b;
  }

  function sourceOf(ex, result) {
    if (result && result.timeout) return 'drill';
    if (ex && ex.source) return ex.source;
    if (ex && ex.art === 'hoeren') return 'listening';
    if (ex && ex.art === 'sprechen') return 'speaking';
    if (ex && ex.art === 'schreiben') return 'writing';
    return 'lesson';
  }
  function commit(ex, result) {
    const st = S();
    const assisted = !!(result.assisted || result.silence);
    if (result.hits && result.hits.length) {
      result.hits.forEach(h => DW.ledger.log({
        wrong: h.snippet, right: h.expect || h.rule, family: h.family, source: 'writing', misconceptionId: h.id
      }));
    } else if (result.correct === false && (result.wrong || result.timeout)) {
      DW.ledger.log({
        wrong: result.wrong || '—',
        right: result.right || '',
        family: result.family,
        source: sourceOf(ex, result),
        misconceptionId: result.misconceptionId || null
      });
    }
    if (result.correct && ex.ziel && DW.caps) {
      DW.caps.write(ex.ziel, assisted ? 'E1a' : 'E1', assisted, ex.zielAr, ex.familie);
    }
    if (result.writing && result.text && result.text.trim()) {
      st.portfolio.texts.push({ date: DW.today(), text: result.text, ziel: ex.ziel, words: result.text.trim().split(/\s+/).length });
    }
    if (result.recording) {
      const id = 'rec_' + Date.now();
      st.portfolio.recordings.push({
        id, date: DW.today(), seconds: result.seconds || 0, where: result.where || 'manual',
        capability: ex.ziel, score: result.score, silence: !!result.silence
      });
      if (result.blob && DW.storage.mediaPut) {
        DW.storage.mediaPut({ id, blob: result.blob, date: DW.today(), capability: ex.ziel, seconds: result.seconds || 0 }).catch(e => {
          st.stats.mediaError = 'تعذّر حفظ الصوت في IndexedDB: ' + e.message;
        });
      }
    }
    persist();
  }

  function recomputeR2() {
    const st = S();
    const now = DW.now().getTime();
    const measures = (st.drills || []).filter(d => d.mode === 'measure' && (now - new Date(d.at).getTime()) <= 14 * 86400000);
    const last = measures.slice(-5);
    if (!last.length) { st.indicators.R2 = null; st.indicators.R2Weak = []; return null; }
    const by = {};
    last.forEach(d => {
      const f = d.family || 'mix';
      by[f] = by[f] || { ok: 0, n: 0 };
      by[f].ok += d.correctInTime;
      by[f].n += d.total;
    });
    let ok = 0, n = 0;
    Object.keys(by).forEach(k => { ok += by[k].ok; n += by[k].n; });
    st.indicators.R2 = n ? ok / n : null;
    st.indicators.R2Families = by;
    st.indicators.R2Weak = Object.keys(by).filter(k => by[k].n && by[k].ok / by[k].n < 0.7);
    DW.ledger.recomputeR1();
    return st.indicators.R2;
  }

  function pickFamily() {
    const st = S();
    const weak = (st.indicators.R2Weak || []).find(f => DW.BANK.drillItems(f).length >= 25);
    if (weak) return { family: weak, why: 'هذه العائلة تحت 70% في القياس. المتوسط لا يُخفيها.' };
    const counts = {};
    DW.ledger.live().forEach(e => { counts[e.family] = (counts[e.family] || 0) + (e.streak || 1); });
    const top = Object.keys(counts).sort((a, b) => counts[b] - counts[a]).find(f => DW.BANK.drillItems(f).length >= 25);
    if (top) return { family: top, why: 'أكثر عائلة حيّة في الدفتر، وفي البنك ما يكفي لقياسها.' };
    return { family: 'aussprache', why: 'لا قياس بعد. النطق هو أساس A0. القياس 20 بندًا غير مكررة من بنك النطق، بعد تمرين من 5.' };
  }

  /* ---------- ledger screen ---------- */
  function openLedger(view) {
    shell(view, 'دفتر الأخطاء');
    const st = S();
    DW.ledger.recomputeR1();
    const r1 = st.indicators.R1 || 0;
    reason(view, 'الدفتر منهج، لا أرشيف. الحيّ فقط هو الدين. المتقاعد لا يُحسب.');
    view.appendChild(sourceButton('R1 = ' + r1, 'R1 = عدد الأسطر التي حالتها live في errorLedger. تحت المراقبة والمتقاعد لا يدخلان. القيمة الآن ' + r1 + '.'));
    const log = (st.indicatorLog || []).filter(x => x.R1 !== undefined).slice(-8);
    if (log.length < 2) view.appendChild(el('div', 'meta', 'اتجاه R1 غير معروف بعد. السهم يحتاج يومين على الأقل. لا سهم مُختلق.'));
    else {
      const a = log[0].R1, b = log[log.length - 1].R1;
      view.appendChild(el('div', 'meta', 'اتجاه 8 أسابيع كحد: ' + (b < a ? '↓ ينخفض' : b > a ? '↑ يرتفع' : 'ثابت') + ' (' + a + ' → ' + b + ').'));
    }
    const attack = el('button', 'primary', 'هجوم الآن');
    attack.type = 'button';
    attack.id = 'attack';
    if (!DW.ledger.live().length) {
      attack.disabled = true;
      view.appendChild(el('div', 'meta', 'لا دين حيّ. الهجوم لا يُختلق من فراغ.'));
    }
    attack.onclick = () => openAttack(view);
    view.appendChild(attack);

    function group(title, rows, extra) {
      if (!rows.length) return;
      view.appendChild(el('h2', 'section', title));
      const by = {};
      rows.forEach(e => { (by[e.family] = by[e.family] || []).push(e); });
      Object.keys(by).sort((a, b) => by[b].length - by[a].length).forEach(fam => {
        view.appendChild(el('div', 'kicker', DW.ledger.familyAr(fam) + ' · ' + by[fam].length));
        by[fam].sort((a, b) => (b.streak || 0) - (a.streak || 0)).forEach(e => {
          const card = el('div', 'card small');
          const de = el('div', 'zeigt');
          de.setAttribute('dir', 'ltr');
          de.textContent = e.wrong + ' → ' + e.right;
          card.appendChild(de);
          card.appendChild(el('div', 'meta', 'آخر ظهور: ' + (e.lastSeen || e.firstSeen) + ' · المراجعة القادمة: ' + (e.due || '—') + ' · التكرار: ' + (e.streak || 0)));
          if (extra) extra(card, e);
          view.appendChild(card);
        });
      });
    }
    group('دين حيّ', DW.ledger.live(), (card, e) => {
      if (!DW.ledger.isDue(e)) return;
      const b = el('button', 'ghost', 'راجع');
      b.type = 'button';
      b.onclick = () => openReview(view, e);
      card.appendChild(b);
    });
    group('تحت المراقبة — ليست دينًا بعد', DW.ledger.watched(), (card, e) => {
      card.appendChild(el('div', 'meta', 'يصير دينًا إن فشل في مراجعتين مجدولتين متتاليتين.'));
      if (!DW.ledger.isDue(e)) return;
      const b = el('button', 'ghost', 'راجع');
      b.type = 'button';
      b.onclick = () => openReview(view, e);
      card.appendChild(b);
    });
    const ret = DW.ledger.retired();
    if (ret.length) {
      const det = el('details', 'card small');
      const sum = el('summary', null, 'متقاعد (' + ret.length + ') — ليس دينًا');
      det.appendChild(sum);
      ret.forEach(e => det.appendChild(el('div', 'meta', e.wrong + ' → ' + e.right)));
      view.appendChild(det);
    }
    if (!st.errorLedger.length) view.appendChild(el('div', 'meta', 'الدفتر فارغ. الخطأ الأول يُرصد ولا يُحسب دينًا.'));
  }

  function openReview(view, entry) {
    shell(view, 'مراجعة مجدولة');
    reason(view, 'هذه مراجعة الفاصل، لا هجومًا. النجاح هنا يحرّك الفاصل. الفشلان المتتاليان يصنعان دينًا.');
    const card = el('div', 'card');
    card.appendChild(el('div', 'kicker', DW.ledger.familyAr(entry.family)));
    const de = el('div', 'zeigt');
    de.setAttribute('dir', 'ltr');
    de.textContent = entry.wrong;
    card.appendChild(de);
    card.appendChild(el('div', 'qtext', 'اكتب الصواب.'));
    const inp = el('input', 'inp');
    inp.setAttribute('dir', 'ltr');
    inp.setAttribute('lang', 'de');
    inp.setAttribute('spellcheck', 'false');
    const btn = el('button', 'primary', 'تحقّق');
    btn.type = 'button';
    btn.onclick = () => {
      const val = inp.value.trim().replace(/\s+/g, ' ');
      const right = String(entry.right || '').trim().replace(/\s+/g, ' ');
      let correct = val === right;
      let msg = correct ? 'مراجعة نظيفة.' : 'ليست هذه الصيغة.';
      if (!correct && val.toLowerCase() === right.toLowerCase()) {
        correct = false;
        msg = 'الحروف صحيحة، والإملاء الكبير غير صحيح. الأسماء كبيرة.';
      }
      const out = DW.ledger.review(entry.id, correct);
      const box = el('div', 'layer ' + (correct ? 'good' : 'bad'));
      box.appendChild(el('div', null, msg));
      if (out && out.promoted) box.appendChild(el('div', null, 'هذا الخطأ عاد في مراجعتين متتاليتين. صار دينًا، ودخل R1.'));
      if (out && out.retired) box.appendChild(el('div', null, 'مراجعتان نظيفتان على فاصل 45 يومًا. خرج من الدين وبقي في الإحصاء.'));
      if (!correct && !out.promoted) box.appendChild(el('div', null, 'ليس دينًا بعد إن كانت هذه المراجعة الأولى الفاشلة.'));
      card.appendChild(box);
      const back = el('button', 'ghost', 'رجوع إلى الدفتر');
      back.type = 'button';
      back.onclick = () => openLedger(view);
      card.appendChild(back);
      btn.disabled = true;
    };
    card.appendChild(inp);
    card.appendChild(btn);
    view.appendChild(card);
  }

  function attackItems() {
    const live = DW.ledger.live().slice().sort((a, b) => (b.streak || 0) - (a.streak || 0) || (b.examples || []).length - (a.examples || []).length);
    const items = [];
    live.forEach(e => {
      const examples = (e.examples && e.examples.length) ? e.examples : [{ wrong: e.wrong, right: e.right }];
      examples.forEach(ex => {
        if (items.length >= 10) return;
        items.push({
          art: 'cloze',
          ziel: 'cap.review.' + e.family,
          zielAr: 'تصحيح خطأ حيّ من عائلة ' + DW.ledger.familyAr(e.family),
          familie: e.family,
          source: 'drill',
          frage: 'اكتب الصواب بدلًا من: ' + ex.wrong,
          antworten: [ex.right],
          feedback: { correct: 'هذا التصحيح. العائلة: ' + DW.ledger.familyAr(e.family) + '.' },
          fromLedger: e.id
        });
      });
    });
    return items.slice(0, 10);
  }

  function openAttack(view) {
    const items = attackItems();
    shell(view, 'هجوم الآن');
    if (!items.length) {
      reason(view, 'لا أخطاء حيّة. لن أولّد هجومًا من لا شيء.');
      return;
    }
    reason(view, items.length + ' بنود من الأخطاء الحيّة، الأكثر تكرارًا أولًا. الهجوم تمرين. التقاعد لا يتم إلا بمراجعتين على فاصل 45 يومًا.');
    view.appendChild(sourceButton('عدد البنود: ' + items.length, 'المصدر: أسطر errorLedger ذات الحالة live، مرتبة حسب streak، وبحد 10.'));
    let i = 0;
    const host = el('div', 'card');
    const counter = el('div', 'counter', '');
    view.appendChild(counter);
    view.appendChild(host);
    const next = el('button', 'primary wide', 'التالي');
    next.type = 'button';
    next.id = 'next';
    next.disabled = true;
    function draw() {
      if (i >= items.length) {
        host.innerHTML = '';
        host.appendChild(el('div', 'lesson-title', 'انتهى الهجوم.'));
        host.appendChild(el('div', 'meta', 'أُنجز ' + items.length + ' من ' + items.length + '. ما زال الخطأ حيًا حتى تنجح مراجعتاه الطويلتان.'));
        next.textContent = 'إلى الدفتر';
        next.disabled = false;
        next.onclick = () => openLedger(view);
        return;
      }
      counter.textContent = (i + 1) + ' من ' + items.length;
      next.disabled = true;
      const ex = items[i];
      DW.renderers.mount(host, ex, {
        onResult(r) {
          commit(ex, r);
          const box = el('div', 'layer ' + (r.correct ? 'good' : 'bad'));
          box.appendChild(el('div', 'kicker', r.correct ? 'صحيح' : 'ليس بعد'));
          box.appendChild(el('div', null, r.message || ''));
          host.appendChild(box);
          next.disabled = false;
        }
      });
    }
    next.onclick = () => { i++; draw(); };
    view.appendChild(next);
    draw();
  }

  /* ---------- 3-second drill ---------- */
  function openDrill(view) {
    const picked = pickFamily();
    const all = DW.BANK.drillItems(picked.family);
    shell(view, 'تدريب الثلاث ثوانٍ');
    reason(view, picked.why + ' لا قياس قبل تمرين.');
    view.appendChild(el('div', 'meta', 'العائلة: ' + DW.ledger.familyAr(picked.family) + '.'));
    const st = S();
    const practiced = st.drill && st.drill.family === picked.family && st.drill.practicedOn === DW.today();
    const startP = el('button', 'primary', 'ابدأ التمرين');
    const startM = el('button', 'primary', 'ابدأ القياس');
    startP.type = 'button';
    startM.type = 'button';
    startM.disabled = !practiced;
    if (!practiced) view.appendChild(el('div', 'meta', 'القياس مقفل حتى تنهي تمرين اليوم لهذه العائلة.'));
    startP.onclick = () => runSet(view, all.slice(0, 5), picked.family, 'practice');
    startM.onclick = () => runSet(view, all.slice(5, 25), picked.family, 'measure');
    view.appendChild(startP);
    view.appendChild(startM);
    if (window.DW_SENTENCES && DW.generator) {
      const generated = window.DW_SENTENCES.slice(0, 8).map((row, i) => DW.generator.asCloze(DW.generator.instance(window.DW_SENTENCES, i))).filter(Boolean);
      if (generated.length) {
        const g = el('button', 'ghost', 'قياس من المولّد');
        g.type = 'button';
        g.onclick = () => runSet(view, generated, 'lexik-kollokation', 'measure');
        view.appendChild(g);
        view.appendChild(el('div', 'meta', 'النسخ المولَّدة لها مفتاح. المهلة خطأ. هذا لا يستبدل بنك العائلة.'));
      }
    }
  }

  function runSet(view, items, family, mode) {
    shell(view, mode === 'measure' ? 'قياس 3 ثوانٍ' : 'تمرين بلا مؤقت');
    reason(view, mode === 'measure'
      ? 'انتهى الوقت = خطأ حقيقي، لا «كنت سأعرف». البند لا يتكرر داخل الجلسة.'
      : 'هذا تمرين. لا يدخل في R2. القياس بعده.');
    let i = 0;
    let correctInTime = 0;
    let timeouts = 0;
    const host = el('div', 'card');
    const counter = el('div', 'counter', '');
    const clock = el('div', 'timer', '');
    clock.id = 'clock';
    view.appendChild(counter);
    if (mode === 'measure') view.appendChild(clock);
    view.appendChild(host);
    const next = el('button', 'primary wide', 'التالي');
    next.type = 'button';
    next.id = 'next';
    next.disabled = true;
    view.appendChild(next);
    let timer = null;
    let epoch = 0;
    function clearTimer() { if (timer) clearInterval(timer); timer = null; }
    function draw() {
      clearTimer();
      const my = ++epoch;
      if (i >= items.length) return finish();
      counter.textContent = (i + 1) + ' من ' + items.length;
      next.disabled = true;
      next.onclick = () => { i++; draw(); };
      const ex = items[i];
      let answered = false;
      const goNext = (r) => {
        if (answered || my !== epoch) return;
        answered = true;
        clearTimer();
        if (r.timeout) timeouts++;
        if (r.correct && !r.timeout) correctInTime++;
        commit(Object.assign({}, ex, { source: 'drill' }), r);
        if (mode === 'measure' || r.timeout) { i++; draw(); return; }
        const box = el('div', 'layer ' + (r.correct ? 'good' : 'bad'));
        box.appendChild(el('div', null, r.message || (r.correct ? 'صحيح.' : 'ليس بعد.')));
        host.appendChild(box);
        next.disabled = false;
      };
      DW.renderers.mount(host, ex, {
        locked: () => answered,
        onResult(r) { goNext(r); }
      });
      if (mode === 'measure') {
        const started = Date.now();
        clock.textContent = '3.0';
        timer = setInterval(() => {
          const left = Math.max(0, 3 - (Date.now() - started) / 1000);
          clock.textContent = left.toFixed(1);
          if (left <= 0) {
            goNext({
              correct: false, timeout: true, wrong: '—',
              right: ex.rightText || (ex.antworten || [])[0] || '',
              family, message: 'انتهى الوقت. هذا خطأ، لا تأجيل.'
            });
          }
        }, 100);
      }
    }
    function finish() {
      clearTimer();
      host.innerHTML = '';
      next.remove();
      if (mode === 'practice') {
        const st = S();
        st.drill = { family, practicedOn: DW.today() };
        persist();
        host.appendChild(el('div', 'lesson-title', 'التمرين تم.'));
        host.appendChild(el('div', null, 'الآن يجوز القياس. R2 لا يُحسب من التمرين.'));
        const b = el('button', 'primary', 'ابدأ القياس');
        b.type = 'button';
        b.onclick = () => runSet(view, DW.BANK.drillItems(family).slice(5, 25), family, 'measure');
        host.appendChild(b);
        return;
      }
      const st = S();
      st.drills = st.drills || [];
      st.drills.push({
        at: DW.now().toISOString(), mode: 'measure', family,
        total: items.length, correctInTime, timeouts
      });
      const before = st.indicators.R2;
      const r2 = recomputeR2();
      persist();
      host.appendChild(el('div', 'kicker', 'نتيجة القياس'));
      host.appendChild(sourceButton(
        'R2 = ' + (r2 == null ? '—' : Math.round(r2 * 100) + '%'),
        'R2 = الصحيح خلال 3 ثوانٍ ÷ الكل، على آخر 5 قياسات أو 14 يومًا، لكل عائلة ثم مجموعًا. هذه الجلسة: ' + correctInTime + ' / ' + items.length + '. المهلات: ' + timeouts + '. القيمة السابقة: ' + (before == null ? 'لا شيء' : Math.round(before * 100) + '%') + '.'
      ));
      if ((st.indicators.R2Weak || []).length) {
        host.appendChild(el('div', 'layer warn', 'عائلة تحت 70%: ' + st.indicators.R2Weak.map(DW.ledger.familyAr).join('، ') + '. تظهر صفراء حتى لو كان المجموع أعلى.'));
      }
      host.appendChild(el('div', 'meta', 'المهلة خطأ مُسجَّل في الدفتر بعائلة البند. «كنت سأعرف» لا تُحتسب.'));
      const b = el('button', 'ghost', 'إلى اليوم');
      b.type = 'button';
      b.onclick = goHome;
      host.appendChild(b);
    }
    draw();
  }

  /* ---------- SRS ---------- */
  function resetDaily() {
    const st = S();
    st.srs = st.srs || { cards: [], intervals: [0, 1, 2, 4, 7, 15, 30], leitner: true, reviewedToday: 0, reviewedOn: null };
    if (st.srs.reviewedOn !== DW.today()) {
      st.srs.reviewedOn = DW.today();
      st.srs.reviewedToday = 0;
    }
  }
  function presentations() {
    resetDaily();
    const st = S();
    const today = DW.today();
    const out = [];
    (st.srs.cards || []).forEach(c => {
      ['receptive', 'productive', 'sentence'].forEach(d => {
        if (c[d] && c[d].due && c[d].due <= today) out.push({ card: c, direction: d });
      });
    });
    out.sort((a, b) => {
      const av = a.card.verify && a.card.verify.openId !== st.srs.openId ? 0 : 1;
      const bv = b.card.verify && b.card.verify.openId !== st.srs.openId ? 0 : 1;
      return av - bv;
    });
    const remaining = Math.max(0, 30 - (st.srs.reviewedToday || 0));
    return { total: out.length, queue: out.slice(0, remaining) };
  }
  function recomputeR6() {
    const cards = S().srs.cards || [];
    S().indicators.R6 = {
      productive: cards.filter(c => c.productive && c.productive.box >= 3).length,
      chunks: cards.filter(c => c.chunk && c.productive && c.productive.box >= 3).length
    };
  }
  function introduce(list) {
    const st = S();
    st.srs.cards = st.srs.cards || [];
    (list || []).forEach(raw => {
      const id = 'card_' + raw.de;
      if (st.srs.cards.some(c => c.id === id)) return;
      st.srs.cards.push({
        id, de: raw.de, ar: raw.ar, example: raw.example || '', chunk: !!raw.chunk, level: raw.level || 'A0',
        /* §7 R6 counts every non-chunk card, so a word the learner harvests out of
           a lesson's material column is a card like any other. The flag is kept so
           the pool can be audited: B2 declares 1,200 productive words of which 920
           are material — the reserve only exists once these cards exist. */
        material: !!raw.material, source: raw.source || null,
        addedOn: DW.today(),
        receptive: { box: 0, due: DW.plusDays(1), reviews: 0 },
        productive: { box: 0, due: DW.plusDays(2), reviews: 0 },
        sentence: { box: 0, due: DW.plusDays(3), reviews: 0 }
      });
    });
    persist();
  }

  function openSrs(view) {
    const st = S();
    st.srs.openId = Date.now();
    const snap = presentations();
    shell(view, 'بطاقات المراجعة');
    reason(view, 'اتجاهان مستقلان: التعرّف لا يُقدّم الإنتاج. السقف 30 حتى لا تبتلع البطاقة الجلسة.');
    view.appendChild(sourceButton(
      snap.total > 30 ? ('ستُعرض 30 من ' + snap.total) : ('مستحقّة: ' + snap.total),
      'السقف 30 بطاقة في اليوم. المستحق الآن ' + snap.total + '. الباقي يبقى مستحقًا ولا يُكدَّس فوق السقف. المصدر: srs.cards[].due.'
    ));
    view.appendChild(sourceButton(
      'إنتاج في الصندوق 3+: ' + ((st.indicators.R6 && st.indicators.R6.productive) || 0),
      'R6 الإنتاجي = بطاقات الاتجاه الإنتاجي في صندوق لايتنر ≥ 3. القوالب تُحسب وحدها ولا تُدمج. المصدر: srs.cards.'
    ));
    if (!snap.queue.length) {
      view.appendChild(el('div', 'card', 'لا بطاقة مستحقّة اليوم. البطاقة الجديدة تُراجع بعد يوم على الأقل من تعلّمها.'));
      return;
    }
    if (snap.total > snap.queue.length) {
      view.appendChild(el('div', 'meta', 'الباقي ' + (snap.total - snap.queue.length) + ' يبقى مستحقًا. لا طابور عقوبة.'));
    }
    let i = 0;
    const host = el('div', 'card');
    view.appendChild(host);
    function draw() {
      if (i >= snap.queue.length || (st.srs.reviewedToday || 0) >= 30) {
        host.innerHTML = '';
        host.appendChild(el('div', 'lesson-title', 'انتهى سقف اليوم.'));
        host.appendChild(el('div', 'meta', 'رُاجع ' + (st.srs.reviewedToday || 0) + '. السقف 30.'));
        return;
      }
      const slot = snap.queue[i];
      const card = slot.card;
      const direction = slot.direction;
      const verify = card.verify && card.verify.direction === direction && card.verify.openId !== st.srs.openId;
      if (verify) {
        host.innerHTML = '';
        host.appendChild(el('div', 'kicker', 'طابور التحقّق'));
        host.appendChild(el('div', null, 'هذه البطاقة دُفعت إلى التحقّق لأن «أعرف» جاءت أسرع من 1.5 ثانية. اكتب الجواب.'));
        const face = el('div', 'fc');
        face.setAttribute('dir', direction === 'productive' ? 'rtl' : 'ltr');
        face.textContent = direction === 'productive' ? card.ar : card.de;
        host.appendChild(face);
        const inp = el('input', 'inp');
        inp.setAttribute('dir', 'ltr');
        inp.setAttribute('spellcheck', 'false');
        const btn = el('button', 'primary', 'تحقّق');
        btn.type = 'button';
        btn.onclick = () => {
          const expect = direction === 'receptive' ? card.ar : card.de;
          const ok = inp.value.trim() === expect.trim();
          if (!ok) {
            host.appendChild(el('div', 'layer bad', 'ليست هذه. التحقّق يبقى.'));
            return;
          }
          delete card.verify;
          card[direction].reviews = (card[direction].reviews || 0) + 1;
          card[direction].box = Math.min((card[direction].box || 0) + 1, (st.srs.intervals.length - 1));
          card[direction].due = DW.plusDays(st.srs.intervals[card[direction].box]);
          st.srs.reviewedToday = (st.srs.reviewedToday || 0) + 1;
          recomputeR6();
          persist();
          i++;
          draw();
        };
        host.appendChild(inp);
        host.appendChild(btn);
        return;
      }
      const ex = {
        art: 'flashcard', ziel: 'cap.srs.' + card.id + '.' + direction,
        zielAr: (direction === 'productive' ? 'إنتاج ' : 'تعرّف ') + card.de,
        familie: 'lexik-kollokation', direction,
        de: card.de, ar: card.ar, example: card.example, lapses: card[direction].lapses || 0
      };
      DW.renderers.mount(host, ex, {
        onResult(r) {
          const sched = card[direction];
          const isNew = (sched.box || 0) === 0 && !(sched.reviews > 0);
          if (r.know && isNew && r.ms < 1500) {
            card.verify = { direction, since: DW.today(), openId: st.srs.openId, reason: 'know-too-fast' };
            st.srs.reviewedToday = (st.srs.reviewedToday || 0) + 1;
            persist();
            host.appendChild(el('div', 'layer warn', 'ضغطتَ «أعرف» في أقل من ثانية ونصف على بطاقة جديدة. أُجبرت على طابور التحقّق في الجلسة القادمة. لم يتقدّم الصندوق.'));
            const cont = el('button', 'ghost', 'التالي');
            cont.type = 'button';
            cont.onclick = () => { i++; draw(); };
            host.appendChild(cont);
            return;
          }
          const intervals = st.srs.intervals || [0, 1, 2, 4, 7, 15, 30];
          if (r.know) {
            sched.box = Math.min((sched.box || 0) + 1, intervals.length - 1);
            sched.due = DW.plusDays(intervals[sched.box]);
            sched.reviews = (sched.reviews || 0) + 1;
            if (DW.caps) DW.caps.write(ex.ziel, 'E1', false, ex.zielAr, 'vocabulary');
          } else {
            sched.box = 0;
            sched.due = DW.plusDays(1);
            sched.lapses = (sched.lapses || 0) + 1;
            sched.reviews = (sched.reviews || 0) + 1;
            DW.ledger.log({ wrong: card.de, right: card.ar, family: 'lexik-kollokation', source: 'drill', misconceptionId: 'srs-lapse' });
          }
          st.srs.reviewedToday = (st.srs.reviewedToday || 0) + 1;
          recomputeR6();
          persist();
          i++;
          draw();
        }
      });
    }
    draw();
  }

  function openWrite(view) {
    shell(view, 'كتابة');
    reason(view, 'الكتابة ربع الامتحان. قائمة من خمس نقاط تعدّها أنت، وفحص لثلاثين نمطًا لا يدّعي الكمال.');
    const host = el('div', 'card');
    view.appendChild(host);
    const ex = DW.BANK.workshop.find(x => x.art === 'schreiben');
    DW.renderers.mount(host, ex, { onResult(r) { commit(ex, r); } });
  }

  function openWorkshop(view) {
    const items = DW.BANK.workshop;
    shell(view, 'ورشة الأشكال');
    reason(view, 'ثمانية أشكال للخطأ، ولكل شكل تفسيره. الورشة تعلّمك الشكل قبل أن يقيسه المحرّك.');
    let i = 0;
    const counter = el('div', 'counter', '');
    const host = el('div', 'card');
    const next = el('button', 'primary wide', 'التالي');
    next.type = 'button';
    next.id = 'next';
    next.disabled = true;
    view.appendChild(counter);
    view.appendChild(host);
    view.appendChild(next);
    function draw() {
      if (i >= items.length) {
        S().stats.workshopDone = true;
        persist();
        host.innerHTML = '';
        counter.textContent = 'تمت الورشة';
        host.appendChild(el('div', null, 'الأشكال الثمانية تعمل على هذا الجهاز. العودة إلى ما تقترحه الأداة.'));
        next.textContent = 'إلى اليوم';
        next.disabled = false;
        next.onclick = goHome;
        return;
      }
      counter.textContent = 'البند ' + (i + 1) + ' من ' + items.length;
      next.disabled = true;
      const ex = items[i];
      DW.renderers.mount(host, ex, {
        speak: DW.speak,
        onResult(r) {
          if (ex.art === 'flashcard' && r.know && r.ms < 1500) {
            host.appendChild(el('div', 'layer warn', 'أسرع من 1.5 ثانية. في البطاقة الحقيقية يذهب هذا إلى طابور التحقّق.'));
          }
          if (ex.art === 'flashcard') introduce([{ de: ex.de, ar: ex.ar, example: ex.example, chunk: false }]);
          commit(ex, r);
          if (r.message && ex.art !== 'schreiben' && ex.art !== 'sprechen') {
            host.appendChild(el('div', 'layer ' + (r.correct ? 'good' : 'bad'), r.message));
          }
          const resolved = r.correct || r.recording || r.writing || r.partial != null || r.know != null || ex.art === 'mcq' || ex.art === 'cloze' || r.triaged;
          if (r.correct) host.appendChild(el('div', 'meta', r.assisted || r.silence ? 'سُجّل E1a. لا يُحتسب في البوابة.' : 'سُجّل E1. صحيح الآن داخل التمرين، ولم يُثبت تحت الضغط.'));
          if (resolved) next.disabled = false;
        }
      });
    }
    next.onclick = () => { i++; draw(); };
    draw();
  }

  DW.practice = { openLedger, openAttack, openDrill, openSrs, openWrite, openWorkshop, introduce, commit, recomputeR2, attackItems };
})(window.DW = window.DW || {});

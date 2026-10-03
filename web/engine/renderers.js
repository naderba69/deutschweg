/* Deutschweg — eight exercise renderers (PROMPT §9.2).
   Lesson steps and drills share this code. No generic "wrong answer". */
(function (DW) {
  function el(tag, cls, txt) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt !== undefined && txt !== null) n.textContent = txt;
    return n;
  }
  function shuffle(a) {
    const b = a.slice();
    for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  }
  function norm(s) { return String(s || '').trim().toLowerCase().replace(/\s+/g, ' '); }
  function locked(ctx) { return ctx && ctx.locked && ctx.locked(); }
  function famOf(ex, id) {
    return (ex.misconceptionFamilies || {})[id] || ex.familie || ex.family || null;
  }
  function wrongText(ex, id) {
    const f = ex.feedback || {};
    if (f[id]) return f[id];
    if (f.wrong && f.wrong[id]) return f.wrong[id];
    const fam = famOf(ex, id);
    if (fam && DW.ledger) return 'هذا الخيار من عائلة «' + DW.ledger.familyAr(fam) + '». ليس الجواب الذي يقيس القدرة.';
    return 'هذا الخيار لا يقيس القدرة المطلوبة في هذا البند.';
  }
  function rightText(ex) {
    const f = ex.feedback || {};
    if (f.correct) return f.correct;
    if (ex.richtig && f[ex.richtig]) return f[ex.richtig];
    return 'صحيح.';
  }

  const FIELD_AR = {
    vorfeld: 'Vorfeld',
    lsk: 'linke Satzklammer',
    mittelfeld: 'Mittelfeld',
    rsk: 'rechte Satzklammer',
    nachfeld: 'Nachfeld'
  };

  function scoreOrder(item, given) {
    const finite = item.finite;
    const clause = item.clause || 'main';
    const fields = item.fields || {};
    const finIdx = given.indexOf(finite);
    const levels = [];
    let l1 = false;
    /* Level 1 is "does the finite verb stand in the left bracket?", and the left
       bracket sits after the Vorfeld. The Vorfeld is a constituent, not a token:
       in "Das Buch liegt auf dem Tisch" it is two tokens. Reading the declared
       Vorfeld is the only correct test — assuming index 1 marks a perfectly
       built sentence wrong and logs a false error against the learner. When an
       item declares no fields (older workshop items) the single-token case is
       the fallback. */
    const vorfeldLen = Array.isArray(fields.vorfeld) ? fields.vorfeld.length : 1;
    if (clause === 'main') l1 = finIdx === vorfeldLen;
    else l1 = finIdx === given.length - 1 || finIdx === 2;
    levels.push({ id: 1, name: 'موضع الفعل', pass: l1 });
    if (!l1) {
      return {
        credit: 0, failed: 1, levels,
        message: 'الفعل ليس في الموضع الثاني للجملة. بعد المكوّن الأول (Vorfeld) يأتي الفعل المصرّف مباشرة، سواء كان المكوّن كلمة واحدة («Ich») أو أكثر («Das Buch»). وبعد weil أو dass أو wenn أو obwohl يكون الفعل في الآخر.'
      };
    }
    let l2 = true;
    let l2msg = '';
    if (clause === 'sub') {
      l2 = finIdx === given.length - 1;
      l2msg = 'الفعل شقّ الحقل الأوسط (Mittelfeld). بعد weil يبقى Mittelfeld متّصلًا، والفعل في آخر الجملة.';
    } else {
      const rb = item.rightBracket || [];
      if (rb.length) {
        l2 = given.slice(given.length - rb.length).join(' ') === rb.join(' ');
        l2msg = 'القوس الأيمن ليس في آخر الجملة. الجزء غير المصرّف يبقى في النهاية.';
      }
    }
    levels.push({ id: 2, name: 'القوس الجُملي', pass: l2 });
    if (!l2) return { credit: 0.5, failed: 2, levels, message: l2msg };

    /* Field attribution must survive a repeated token. Two clauses can both
       start with "Ich", and mapping fields by token text would then read the
       first "Ich" as Mittelfeld and mark a correct sentence wrong. Each token is
       therefore matched to its own occurrence in the canonical sentence. */
    const FIELD_ORDER = ['vorfeld', 'lsk', 'mittelfeld', 'rsk', 'nachfeld'];
    const canon = [];
    FIELD_ORDER.forEach(name => (fields[name] || []).forEach(t => canon.push({ t: t, f: name })));
    const rank = {}, occ = {};
    canon.forEach((slot, i) => {
      if (rank[slot.f] === undefined) rank[slot.f] = FIELD_ORDER.indexOf(slot.f);
      const k = occ[slot.t] || 0;
      occ[slot.t] = k + 1;
      slot.key = slot.t + '#' + k;
    });
    const byKey = {};
    canon.forEach(slot => { byKey[slot.key] = slot; });
    const seen = {};
    const mapped = given.map(t => {
      const k = seen[t] || 0;
      seen[t] = k + 1;
      return byKey[t + '#' + k] || null;
    });
    let l3 = true;
    let lastRank = -1;
    mapped.forEach(slot => {
      if (!slot) { l3 = false; return; }
      if (rank[slot.f] < lastRank) l3 = false;
      lastRank = rank[slot.f];
    });
    FIELD_ORDER.forEach(name => {
      const expect = (fields[name] || []).slice().sort().join('|');
      const got = given.filter((t, i) => mapped[i] && mapped[i].f === name).sort().join('|');
      if (expect !== got) l3 = false;
    });
    levels.push({ id: 3, name: 'ترتيب الحقول', pass: l3 });
    if (!l3) {
      return { credit: 0.75, failed: 3, levels, message: 'ترتيب الحقول غير سليم: Vorfeld ثم القوس الأيسر ثم Mittelfeld ثم القوس الأيمن ثم Nachfeld.' };
    }
    let l4 = true;
    FIELD_ORDER.forEach(name => {
      const expect = (fields[name] || []).join('|');
      const got = given.filter((t, i) => mapped[i] && mapped[i].f === name).join('|');
      if (expect !== got) l4 = false;
    });
    levels.push({ id: 4, name: 'الترتيب داخل الحقل', pass: l4 });
    if (!l4) {
      return { credit: 0.875, failed: 4, levels, message: 'الحقول صحيحة، لكن الترتيب داخل الحقل ليس الترتيب المطلوب.' };
    }
    return { credit: 1, failed: null, levels, message: (item.feedback && item.feedback.correct) || 'الترتيب كامل.' };
  }

  function paintFields(item) {
    const fields = item.fields || {};
    /* same occurrence rule as the scorer: a token that appears twice must be
       coloured after its own place in the sentence, not after its text */
    const queue = {};
    ['vorfeld', 'lsk', 'mittelfeld', 'rsk', 'nachfeld'].forEach(name => { queue[name] = (fields[name] || []).slice(); });
    const wrap = el('div', 'fields');
    wrap.setAttribute('dir', 'ltr');
    (item.correct || []).forEach(tok => {
      let name = 'mittelfeld';
      const order = ['vorfeld', 'lsk', 'mittelfeld', 'rsk', 'nachfeld'];
      for (let i = 0; i < order.length; i++) {
        if (queue[order[i]].length && queue[order[i]][0] === tok) {
          queue[order[i]].shift();
          name = order[i];
          break;
        }
      }
      const s = el('span', 'chip f-' + name, tok);
      wrap.appendChild(s);
    });
    const legend = el('div', 'legend');
    ['vorfeld', 'lsk', 'mittelfeld', 'rsk', 'nachfeld'].forEach(name => {
      if (!(fields[name] || []).length && name !== 'mittelfeld') return;
      const s = el('span', 'chip f-' + name, FIELD_AR[name]);
      legend.appendChild(s);
    });
    const box = el('div');
    box.appendChild(el('div', 'kicker', 'الجملة بالحقول'));
    box.appendChild(wrap);
    box.appendChild(legend);
    return box;
  }

  function creditLabel(credit) {
    if (credit === 1) return 'درجة كاملة';
    if (credit === 0.5) return 'نصف الدرجة';
    if (credit === 0.75) return 'ثلاثة أرباع';
    if (credit === 0) return 'بلا درجة على البنية';
    return 'درجة جزئية';
  }

  function mountMcq(host, ex, ctx) {
    const q = el('div', 'qtext');
    q.setAttribute('dir', 'auto');
    q.textContent = ex.frage || '';
    host.appendChild(q);
    const opts = el('div', 'opts');
    const list = ex.stable ? (ex.optionen || []).slice() : shuffle(ex.optionen || []);
    let done = false;
    list.forEach(o => {
      const b = el('button', 'opt');
      b.type = 'button';
      b.setAttribute('dir', 'auto');
      b.textContent = o.text;
      b.onclick = () => {
        if (done || locked(ctx) || b.disabled) return;
        const ok = !!ex.beliebig || o.id === ex.richtig;
        b.classList.add(ok ? 'good' : 'bad');
        if (!ok) b.disabled = true;
        else { done = true; [...opts.children].forEach(c => { c.disabled = true; }); }
        if (!ok && ctx.revealOnWrong) {
          list.forEach((opt, i) => { if (opt.id === ex.richtig) opts.children[i].classList.add('good'); });
        }
        const right = (ex.optionen || []).find(x => x.id === ex.richtig);
        ctx.onResult({
          correct: ok,
          given: o.text,
          wrong: ok ? null : o.text,
          right: right ? right.text : '',
          family: ok ? ex.familie : famOf(ex, o.id),
          misconceptionId: ok ? null : o.id,
          message: ok ? rightText(ex) : wrongText(ex, o.id)
        });
      };
      opts.appendChild(b);
    });
    host.appendChild(opts);
  }

  function judgeCloze(ex, val) {
    const answers = ex.antworten || [];
    if (answers.some(a => norm(a) === norm(val))) return { ok: true, message: (ex.feedback && ex.feedback.correct) || 'صحيح.', family: ex.familie };
    const nearKey = ex.nearMiss && Object.keys(ex.nearMiss).find(k => norm(k) === norm(val));
    if (nearKey) {
      return { ok: false, kind: 'near', message: ex.nearMiss[nearKey], family: ex.nearFamily || 'konjugation' };
    }
    const stem = norm(answers[0] || '');
    if (stem.length >= 4 && norm(val).length >= 3 && (norm(val).startsWith(stem.slice(0, 3)) || stem.startsWith(norm(val).slice(0, 3)))) {
      return { ok: false, kind: 'near', message: 'الكلمة صحيحة، والشكل غير صحيح: التصريف أو الحالة أو الزمن. ليست كلمة خاطئة.', family: ex.nearFamily || 'konjugation' };
    }
    return { ok: false, kind: 'wrong', message: (ex.feedback && ex.feedback.wrongWord) || 'هذه ليست الكلمة المطلوبة في هذا الفراغ.', family: ex.familie || 'lexik-kollokation' };
  }

  function mountCloze(host, ex, ctx) {
    const q = el('div', 'qtext');
    q.setAttribute('dir', 'auto');
    q.textContent = ex.frage || '';
    host.appendChild(q);
    const gaps = ex.gaps || [{ antworten: ex.antworten, nearMiss: ex.nearMiss }];
    const inputs = [];
    gaps.forEach(() => {
      const inp = el('input', 'inp');
      inp.setAttribute('dir', 'ltr');
      inp.setAttribute('lang', 'de');
      inp.setAttribute('autocomplete', 'off');
      inp.setAttribute('autocapitalize', 'off');
      inp.setAttribute('spellcheck', 'false');
      inp.placeholder = '…';
      inputs.push(inp);
    });
    const wrap = el('div', 'row');
    inputs.forEach(inp => wrap.appendChild(inp));
    const btn = el('button', 'primary', 'تحقّق');
    btn.type = 'button';
    let done = false;
    const submit = () => {
      if (done || locked(ctx)) return;
      const val = inputs.map(i => i.value).join(' ').trim();
      const judged = gaps.length === 1 ? judgeCloze(ex, inputs[0].value) : judgeCloze({ antworten: [gaps.map((g, i) => (g.antworten || [])[0]).join(' ')], feedback: ex.feedback, familie: ex.familie }, val);
      if (judged.ok) done = true;
      ctx.onResult({
        correct: judged.ok,
        given: val,
        wrong: judged.ok ? null : val,
        right: (ex.antworten || [])[0] || '',
        family: judged.family,
        kind: judged.kind || null,
        message: judged.message
      });
    };
    btn.onclick = submit;
    inputs.forEach(inp => { inp.onkeydown = e => { if (e.key === 'Enter') submit(); }; });
    wrap.appendChild(btn);
    host.appendChild(wrap);
  }

  function mountOrder(host, ex, ctx) {
    const q = el('div', 'qtext');
    q.setAttribute('dir', 'auto');
    q.textContent = ex.frage || 'رتّب الكلمات.';
    host.appendChild(q);
    const built = el('div', 'built');
    built.setAttribute('dir', 'ltr');
    const pool = el('div', 'pool');
    pool.setAttribute('dir', 'ltr');
    const given = [];
    let bank = shuffle(ex.tokens || []);
    if (bank.join(' ') === (ex.correct || []).join(' ') && bank.length > 1) bank = bank.reverse();
    function paint() {
      built.innerHTML = '';
      pool.innerHTML = '';
      given.forEach((tok, i) => {
        const b = el('button', 'token placed', tok);
        b.type = 'button';
        b.onclick = () => { if (locked(ctx)) return; given.splice(i, 1); bank.push(tok); paint(); };
        built.appendChild(b);
      });
      if (!given.length) built.appendChild(el('span', 'meta', '…'));
      bank.forEach((tok, i) => {
        const b = el('button', 'token', tok);
        b.type = 'button';
        b.onclick = () => { if (locked(ctx)) return; bank.splice(i, 1); given.push(tok); paint(); };
        pool.appendChild(b);
      });
      btn.disabled = bank.length !== 0;
    }
    const btn = el('button', 'primary', 'تحقّق');
    btn.type = 'button';
    btn.disabled = true;
    let done = false;
    btn.onclick = () => {
      if (done || locked(ctx)) return;
      done = true;
      const scored = scoreOrder(ex, given.slice());
      const box = el('div', 'layer ' + (scored.credit === 1 ? 'good' : 'warn'));
      box.appendChild(el('div', 'kicker', creditLabel(scored.credit)));
      box.appendChild(el('div', null, scored.message));
      box.appendChild(paintFields(ex));
      host.appendChild(box);
      ctx.onResult({
        correct: scored.credit === 1,
        partial: scored.credit,
        given: given.join(' '),
        wrong: scored.credit === 1 ? null : given.join(' '),
        right: (ex.correct || []).join(' '),
        family: ex.familie || 'wortstellung',
        message: scored.message,
        creditLabel: creditLabel(scored.credit)
      });
    };
    host.appendChild(built);
    host.appendChild(pool);
    host.appendChild(btn);
    paint();
  }

  function mountMatching(host, ex, ctx) {
    const q = el('div', 'qtext');
    q.setAttribute('dir', 'auto');
    q.textContent = ex.frage || '';
    host.appendChild(q);
    const left = el('div', 'mcol');
    const right = el('div', 'mcol');
    const rights = shuffle(ex.paare || []);
    let picked = null;
    let solved = 0;
    (ex.paare || []).forEach(p => {
      const b = el('button', 'mitem');
      b.type = 'button';
      b.textContent = p.links;
      b.dataset.key = p.links;
      b.onclick = () => {
        if (b.classList.contains('done') || locked(ctx)) return;
        [...left.children].forEach(c => c.classList.remove('sel'));
        b.classList.add('sel');
        picked = p;
      };
      left.appendChild(b);
    });
    rights.forEach(p => {
      const b = el('button', 'mitem');
      b.type = 'button';
      b.textContent = p.rechts;
      b.dataset.key = p.links;
      b.onclick = () => {
        if (b.classList.contains('done') || locked(ctx)) return;
        if (!picked) { if (DW.toast) DW.toast('اختر من العمود الأول.'); return; }
        if (picked.links === p.links) {
          b.classList.add('done');
          [...left.children].find(c => c.dataset.key === p.links).classList.add('done');
          const t = el('div', 'hint');
          t.textContent = '✔ ' + (p.haken || '');
          host.appendChild(t);
          solved++;
          picked = null;
          if (solved === ex.paare.length) {
            ctx.onResult({
              correct: true,
              family: ex.familie,
              message: (ex.feedback && ex.feedback.correct) || 'أحسنت.',
              right: ex.paare.map(x => x.links + ' → ' + x.rechts).join(' · ')
            });
          }
        } else {
          b.classList.add('bad');
          setTimeout(() => b.classList.remove('bad'), 700);
          const falle = p.falle || picked.falle || ('ليست هذه. ' + (picked.haken || ''));
          ctx.onResult({
            correct: false,
            wrong: picked.links + ' → ' + b.textContent,
            right: picked.links + ' → ' + picked.rechts,
            family: ex.familie || 'lexik-kollokation',
            message: 'الخدعة: ' + falle
          });
        }
      };
      right.appendChild(b);
    });
    const grid = el('div', 'mgrid');
    grid.appendChild(left);
    grid.appendChild(right);
    host.appendChild(grid);
  }

  function mountHoeren(host, ex, ctx) {
    host.appendChild(el('div', 'meta', 'لا نص قبل الإجابة. استمع، ثم أجب.'));
    if (ex.audioSrc) {
      const audio = el('audio');
      audio.setAttribute('src', ex.audioSrc);
      audio.setAttribute('preload', 'none');
      audio.controls = true;
      host.appendChild(audio);
    }
    const play = el('button', 'ghost audio', ex.audioSrc ? '🔊 المرجع المضمّن' : '🔊 استمع');
    play.type = 'button';
    play.onclick = () => {
      const audio = host.querySelector('audio');
      if (audio && audio.src) {
        const p = audio.play();
        if (p && p.catch) p.catch(() => {
          if (DW.toast) DW.toast('ملف المرجع غير موجود على الجهاز. أستخدم صوت الجهاز. هذا ليس مرجعًا بشريًا.');
          if (ctx.speak) ctx.speak(ex.audio || ex.transcript || '');
        });
        return;
      }
      if (ctx.speak) ctx.speak(ex.audio || '');
      else if (DW.toast) DW.toast('لا صوت في هذا المتصفح.');
    };
    host.appendChild(play);
    const inner = Object.assign({}, ex, { art: ex.optionen ? 'mcq' : 'cloze' });
    const box = el('div');
    host.appendChild(box);
    const orig = ctx.onResult;
    ctx.onResult = function (r) {
      if (!host.querySelector('.transcript') && ex.transcript) {
        const tr = el('div', 'transcript');
        tr.setAttribute('dir', 'ltr');
        const raw = ex.transcript;
        const hi = ex.highlight;
        if (hi && raw.indexOf(hi) >= 0) {
          tr.appendChild(document.createTextNode(raw.slice(0, raw.indexOf(hi))));
          tr.appendChild(el('mark', null, hi));
          tr.appendChild(document.createTextNode(raw.slice(raw.indexOf(hi) + hi.length)));
        } else tr.textContent = raw;
        host.appendChild(tr);
      }
      if (!r.correct && !r.triaged) {
        const tri = el('div', 'triage');
        tri.appendChild(el('div', 'kicker', 'من أين جاء الخطأ؟'));
        const choices = [
          ['phonetic', 'صوتي: أعرف الكلمة مكتوبة ولم أتعرّف على الصوت', 'aussprache', 'المسار: نطق. أعد الصوت وحده خمس مرات، ثم الكلمة.'],
          ['lexical', 'معجمي: الكلمة ليست في رصيدي', 'lexik-kollokation', 'المسار: بطاقة. الكلمة تدخل المراجعة، لا درس النطق.'],
          ['strategic', 'استراتيجي: أعرف الكلمة والصوت وفاتتني في السياق', 'hoerstrategie', 'المسار: توقّع. قبل التشغيل القادم، خمّن 20 ثانية ماذا ستسمع.']
        ];
        choices.forEach(([key, label, family, next]) => {
          const b = el('button', 'ghost triage-btn', label);
          b.type = 'button';
          b.onclick = () => {
            tri.querySelectorAll('button').forEach(x => { x.disabled = true; });
            host.appendChild(el('div', 'hint', next));
            orig({ correct: false, triaged: true, wrong: r.wrong || r.given, right: r.right, family, misconceptionId: key, message: r.message + ' ' + next, given: r.given });
          };
          tri.appendChild(b);
        });
        host.appendChild(tri);
        return;
      }
      orig(r);
    };
    (inner.art === 'cloze' ? mountCloze : mountMcq)(box, inner, ctx);
  }

  async function silenceRatio(blob) {
    if (!blob || blob.size < 1200) return 1;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return 0;
    try {
      const ctx = new Ctx();
      const buf = await blob.arrayBuffer();
      const audio = await ctx.decodeAudioData(buf);
      const data = audio.getChannelData(0);
      let silent = 0;
      const frame = 2048;
      let frames = 0;
      for (let i = 0; i < data.length; i += frame) {
        let sum = 0;
        const end = Math.min(i + frame, data.length);
        for (let j = i; j < end; j++) sum += data[j] * data[j];
        if (Math.sqrt(sum / frame) < 0.01) silent++;
        frames++;
      }
      if (ctx.close) ctx.close();
      return frames ? silent / frames : 1;
    } catch (e) {
      return blob.size < 1200 ? 1 : 0;
    }
  }

  async function scoreSpeech(blob, seconds, target) {
    if (!blob) return { score: null, unverified: true, silence: false, duration: seconds || 0, target, phoneme: null };
    const ratio = await silenceRatio(blob);
    const silent = ratio >= 0.85;
    if (silent) return { score: 0, silence: true, silenceRatio: ratio, duration: seconds || 0, target, phoneme: null };
    const dur = target ? Math.min(1, (seconds || 0) / target) : 1;
    return { score: Math.round(100 * dur * (1 - Math.min(1, ratio))) / 100, silence: false, silenceRatio: ratio, duration: seconds || 0, target, phoneme: null };
  }

  function mountSprechen(host, ex, ctx) {
    const q = el('div', 'qtext');
    q.setAttribute('dir', 'auto');
    q.textContent = ex.prompt || 'تكلّم.';
    host.appendChild(q);
    if (ex.promptDe) {
      const de = el('div', 'zeigt');
      de.setAttribute('dir', 'ltr');
      de.textContent = ex.promptDe;
      host.appendChild(de);
    }
    const rec = el('button', 'primary rec-btn', '● سجّل الآن');
    rec.type = 'button';
    const status = el('div', 'rec-status', 'اضغط التسجيل، ثم تكلّم. الهدف ' + (ex.targetSeconds || 20) + ' ثانية.');
    const ok = el('button', 'primary ok-btn', 'إنهاء التسجيل والمتابعة');
    ok.type = 'button';
    ok.disabled = true;
    let mediaRec = null;
    let chunks = [];
    let recTimer = null;
    let recStart = 0;
    let stopped = false;

    function finish(score, where, blob) {
      if (stopped) return;
      stopped = true;
      ok.disabled = true;
      const silent = score && score.silence;
      const weak = score && score.score !== null && score.score < 0.5;
      if (silent) {
        status.textContent = 'الدرجة 0%. تلميح: الصمت لا يُحتسب. تكلّم جملة كاملة بصوت مسموع. التقدّم غير محجوب.';
      } else if (score && score.unverified) {
        status.textContent = 'لا ملف صوتي، فلا درجة. المدّة قِيست يدويًا. هذا ليس صفرًا صامتًا — هذا غياب ملف.';
      } else if (weak) {
        status.textContent = 'الدرجة ' + Math.round(score.score * 100) + '%. تلميح: اقترب من مدة الهدف، وقل جملة لا كلمة. التقدّم غير محجوب.';
      } else if (score) {
        status.textContent = 'الدرجة ' + Math.round((score.score || 0) * 100) + '%. القياس: المدة والصمت فقط.';
      }
      const note = el('div', 'meta', 'مطابقة الأصوات غير مقيسة على هذا الجهاز. لن أختلق لها درجة.');
      host.appendChild(note);
      ctx.onResult({
        correct: true,
        assisted: !!silent,
        silence: !!silent,
        score: score ? score.score : null,
        seconds: score ? score.duration : 0,
        where: where || 'manual',
        blob: blob || null,
        family: ex.familie || 'aussprache',
        message: status.textContent,
        recording: true
      });
    }

    async function start() {
      rec.disabled = true;
      ok.disabled = false;
      if (!navigator.mediaDevices || !window.MediaRecorder) {
        status.textContent = 'التسجيل غير متاح هنا. سأقيس الزمن يدويًا — تحدّث بصوت مسموع.';
        recStart = Date.now();
        recTimer = setInterval(() => { status.textContent = 'تكلّم بصوت مسموع… ' + Math.round((Date.now() - recStart) / 1000) + ' ث'; }, 500);
        host._stopManual = () => clearInterval(recTimer);
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        chunks = [];
        mediaRec = new MediaRecorder(stream);
        mediaRec.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
        mediaRec.onstop = async () => {
          stream.getTracks().forEach(t => t.stop());
          const secs = Math.round((Date.now() - recStart) / 1000);
          const blob = new Blob(chunks, { type: mediaRec.mimeType || 'audio/webm' });
          const score = await scoreSpeech(blob, secs, ex.targetSeconds || 20);
          finish(score, 'local', blob);
        };
        recStart = Date.now();
        mediaRec.start();
        status.textContent = 'يسجّل… تكلّم الآن.';
        recTimer = setInterval(() => { status.textContent = 'يسجّل… ' + Math.round((Date.now() - recStart) / 1000) + ' ث'; }, 500);
      } catch (e) {
        status.textContent = 'لم يُسمح بالميكروفون. سأقيس الزمن يدويًا.';
        recStart = Date.now();
        host._stopManual = () => {};
      }
    }

    rec.onclick = start;
    ok.onclick = () => {
      if (host._stopManual) host._stopManual();
      clearInterval(recTimer);
      if (mediaRec && mediaRec.state === 'recording') { mediaRec.stop(); return; }
      const secs = recStart ? Math.round((Date.now() - recStart) / 1000) : 0;
      finish({ score: null, unverified: true, duration: secs, phoneme: null }, 'manual', null);
    };
    host.appendChild(rec);
    host.appendChild(status);
    host.appendChild(ok);
    if (!navigator.mediaDevices || !window.MediaRecorder) {
      host.appendChild(el('div', 'meta', 'متصفّحك لا يسمح بالتسجيل من هذه الصفحة — ستُقاس المدّة يدويًا، ويُحفظ تقدّمك كالمعتاد.'));
    }
  }

  function wordCount(s) { return String(s || '').trim().split(/\s+/).filter(Boolean).length; }

  function mountSchreiben(host, ex, ctx) {
    host.appendChild(el('div', 'qtext', ex.prompt || 'اكتب.'));
    if (ex.promptDe) {
      const de = el('div', 'zeigt');
      de.setAttribute('dir', 'ltr');
      de.textContent = ex.promptDe;
      host.appendChild(de);
    }
    if (ex.points) {
      const ul = el('div', 'meta', 'نقاط المحتوى: ' + ex.points.join(' · '));
      host.appendChild(ul);
    }
    const area = el('textarea', 'write');
    area.setAttribute('dir', 'ltr');
    area.setAttribute('lang', 'de');
    area.setAttribute('spellcheck', 'false');
    area.setAttribute('autocapitalize', 'off');
    host.appendChild(area);
    const count = el('div', 'meta', 'عدد الكلمات: 0');
    const min = el('div', 'meta', 'الحد الأدنى: ' + (ex.minWords || 0) + ' كلمات');
    const clock = el('div', 'meta timer', 'الوقت: 0:00');
    host.appendChild(count);
    host.appendChild(min);
    host.appendChild(clock);
    const started = Date.now();
    const iv = setInterval(() => {
      const s = Math.round((Date.now() - started) / 1000);
      clock.textContent = 'الوقت: ' + Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
    }, 500);
    host._clear = () => clearInterval(iv);
    area.oninput = () => { count.textContent = 'عدد الكلمات: ' + wordCount(area.value); };
    const list = el('div', 'checks');
    list.appendChild(el('div', 'kicker', 'قائمة تطبقها أنت'));
    ['نقاط المحتوى', 'أدوات الربط', 'تنويع الجمل', 'الحروف الكبيرة', 'علامات الترقيم'].forEach(label => {
      const row = el('label', 'checkline');
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      row.appendChild(cb);
      row.appendChild(document.createTextNode(' ' + label));
      list.appendChild(row);
    });
    host.appendChild(list);
    host.appendChild(el('div', 'meta', 'القائمة تقييمك أنت. الفحص الآلي لا يعيد كتابة نصّك، ولا يدّعي أنه صحّحه.'));
    const btn = el('button', 'primary', 'احفظ وافحص');
    btn.type = 'button';
    const out = el('div', 'checker-out');
    btn.onclick = () => {
      const text = area.value;
      count.textContent = 'عدد الكلمات: ' + wordCount(text);
      const hits = (DW.checker && DW.checker.check(text)) || [];
      out.innerHTML = '';
      const frame = el('div', 'layer warn');
      frame.appendChild(el('div', 'kicker', 'حدّ الفحص'));
      frame.appendChild(el('div', null, DW.checker.framing(hits.length)));
      frame.appendChild(el('div', 'meta', 'لا أعيد كتابة نصّك. التصحيح بيدك.'));
      out.appendChild(frame);
      hits.forEach(h => {
        const row = el('div', 'layer bad');
        const id = el('div', 'kicker');
        id.setAttribute('dir', 'ltr');
        id.textContent = h.id;
        row.appendChild(id);
        row.appendChild(el('div', null, h.rule));
        const sn = el('div', 'meta');
        sn.setAttribute('dir', 'ltr');
        sn.textContent = h.snippet + (h.expect ? ' → ' + h.expect : '');
        row.appendChild(sn);
        out.appendChild(row);
      });
      if (!hits.length) out.appendChild(el('div', 'meta', 'لم يظهر نمط من الثلاثين. هذا ليس حكمًا بأن النص سليم.'));
      ctx.onResult({
        correct: wordCount(text) >= (ex.minWords || 1) && hits.length === 0,
        assisted: hits.length > 0,
        text,
        hits,
        family: (hits[0] && hits[0].family) || ex.familie,
        message: DW.checker.framing(hits.length),
        writing: true
      });
    };
    host.appendChild(btn);
    host.appendChild(out);
  }

  function mountFlashcard(host, ex, ctx) {
    const dir = ex.direction || 'receptive';
    const names = { receptive: 'استقبال: ألماني → عربي', productive: 'إنتاج: عربي → ألماني', sentence: 'إكمال جملة' };
    host.appendChild(el('div', 'kicker', names[dir] || dir));
    if (ex.note) host.appendChild(el('div', 'meta', ex.note));
    const front = el('div', 'fc');
    front.setAttribute('dir', dir === 'productive' ? 'rtl' : 'ltr');
    let face = ex.de;
    if (dir === 'productive') face = ex.ar;
    if (dir === 'sentence') face = (ex.example || ex.de || '').replace(ex.de, '____');
    front.textContent = face;
    host.appendChild(front);
    const shown = Date.now();
    const row = el('div', 'row');
    const know = el('button', 'primary', 'أعرف');
    const dont = el('button', 'ghost', 'لا أعرف');
    know.type = 'button';
    dont.type = 'button';
    let done = false;
    function reveal(first) {
      const back = el('div', 'layer');
      const ans = el('div', 'zeigt');
      ans.setAttribute('dir', 'ltr');
      ans.textContent = dir === 'receptive' ? ex.ar : ex.de;
      back.appendChild(ans);
      if (ex.example) {
        const eg = el('div', 'meta');
        eg.setAttribute('dir', 'ltr');
        eg.textContent = ex.example;
        back.appendChild(eg);
      }
      back.appendChild(el('div', null, first ? 'هذا نسيان أول.' : 'هذا نسيان متكرر.'));
      host.appendChild(back);
    }
    know.onclick = () => {
      if (done || locked(ctx)) return;
      done = true;
      const ms = Date.now() - shown;
      ctx.onResult({ know: true, ms, correct: true, given: 'know', family: ex.familie, direction: dir });
    };
    dont.onclick = () => {
      if (done || locked(ctx)) return;
      done = true;
      reveal(!(ex.lapses > 0));
      ctx.onResult({ know: false, ms: Date.now() - shown, correct: false, given: 'dont', wrong: ex.de, right: ex.ar, family: ex.familie || 'lexik-kollokation', direction: dir, message: 'لا أعرف. الجواب والمثال أعلاه.' });
    };
    row.appendChild(know);
    row.appendChild(dont);
    host.appendChild(row);
  }

  const renderers = {
    mcq: mountMcq,
    cloze: mountCloze,
    wortstellung: mountOrder,
    matching: mountMatching,
    hoeren: mountHoeren,
    sprechen: mountSprechen,
    schreiben: mountSchreiben,
    flashcard: mountFlashcard
  };

  DW.order = { score: scoreOrder, creditLabel };
  DW.speechScore = scoreSpeech;
  DW.el = el;
  DW.renderers = {
    arts: Object.keys(renderers),
    judgeCloze,
    mount(host, ex, ctx) {
      host.innerHTML = '';
      host.dataset.art = ex && ex.art ? ex.art : '';
      if (!ex || !ex.ziel) {
        host.appendChild(el('div', 'layer warn', 'هذا التمرين بلا هدف (ziel). لن يُعرض.'));
        return null;
      }
      if (!renderers[ex.art]) {
        host.appendChild(el('div', 'layer bad', 'نوع غير معروف، ولن يُعرض: ' + ex.art));
        return null;
      }
      if (ex.zielAr) {
        const src = el('button', 'src', 'يقيس: ' + ex.zielAr);
        src.type = 'button';
        src.onclick = () => {
          const box = host.querySelector('.ziel-src') || el('div', 'layer ziel-src');
          box.textContent = 'المصدر: ' + ex.ziel + (ex.familie ? ' · العائلة: ' + (DW.ledger ? DW.ledger.familyAr(ex.familie) : ex.familie) : '');
          if (!box.parentNode) host.insertBefore(box, host.firstChild.nextSibling);
        };
        host.appendChild(src);
      }
      renderers[ex.art](host, ex, ctx || { onResult() {} });
      return host;
    }
  };
})(window.DW = window.DW || {});

/* Reading and listening measurement. No self-report enters R4 or R5. */
(function (DW) {
  const STOP = new Set(['und', 'oder', 'aber', 'dass', 'nicht', 'eine', 'einer', 'einem', 'einen', 'der', 'die', 'das', 'den', 'dem', 'des', 'ich', 'sie', 'wir', 'ist', 'sind', 'hat', 'haben', 'mit', 'von', 'auf', 'aus', 'bei', 'nach', 'vor', 'zum', 'zur', 'ein', 'für']);

  function contentWords(script) {
    return String(script || '').toLowerCase().replace(/[^a-zäöüß\s]/g, ' ').split(/\s+/).filter(w => w.length > 3 && !STOP.has(w));
  }
  function preTaughtRatio(script, knownWords) {
    const words = contentWords(script);
    if (!words.length) return 0;
    const known = knownWords || new Set();
    const hit = words.filter(w => known.has(w)).length;
    return hit / words.length;
  }
  function isPreTaught(script, knownWords) {
    return preTaughtRatio(script, knownWords) >= 0.8;
  }
  function readingSession(text, answers, elapsedMs) {
    const asked = ((text && text.questions) || []).slice(0, 2);
    if (asked.length < 2) return { measured: false, counted: false, reason: 'أقل من سؤالين. لا يدخل R4.' };
    let correct = 0;
    asked.forEach(q => { if (answers && answers[q.prompt] === q.key) correct++; });
    const comprehension = correct / asked.length;
    const ms = Number(elapsedMs);
    const minutes = ms / 60000;
    const fast = !(ms >= 5000);
    const words = text.words || String(text.body || '').split(/\s+/).filter(Boolean).length;
    const measured = !fast && minutes > 0;
    const counted = measured && comprehension >= 0.95;
    return {
      textId: text.id,
      words: words,
      minutes: minutes,
      questions: asked.length,
      comprehension: comprehension,
      measured: measured,
      counted: counted,
      reason: counted
        ? 'دخلت R4. هذا فهم السؤالين، لا 98% من كلمات النص.'
        : (fast ? 'أقل من 5 ثوانٍ. لا قياس.' : 'تحت 95%. الجلسة تُحفظ ولا تدخل R4.')
    };
  }
  function listeningSession(item, answers, opts) {
    opts = opts || {};
    if (!item || item.r5 === false || item.audio === false) {
      return { counted: false, score: null, reason: item && item.note ? item.note : 'ليس سماعًا. لا يدخل R5.' };
    }
    if (!opts.audioPlayed) return { counted: false, score: null, unannounced: true, reason: 'لا تشغيل، لا درجة.' };
    const qs = item.questions || [];
    if (!qs.length) return { counted: false, score: null, reason: 'لا سؤال، لا درجة.' };
    let correct = 0;
    qs.forEach(q => { if (answers && answers[q.prompt] === q.key) correct++; });
    const score = correct / qs.length;
    const studied = !!opts.studied;
    const preTaught = !!opts.preTaught;
    const unannounced = !opts.transcriptBefore;
    const counted = unannounced && !preTaught && !studied;
    let reason = 'تدخل R5. هدف المستوى ليس درجتك.';
    if (!unannounced) reason = 'النص ظهر قبل الجواب. لا يدخل R5.';
    else if (studied) reason = 'سُمع هذا البند من قبل. تدريب فقط، لا R5.';
    else if (preTaught) reason = 'ثمانون بالمئة من كلماته في دروس أُنجزت. تدريب فقط، لا R5.';
    return {
      itemId: item.id,
      score: score,
      unannounced: unannounced,
      preTaught: preTaught,
      studied: studied,
      counted: counted,
      questions: qs.length,
      reason: reason
    };
  }

  DW.tracks = {
    contentWords: contentWords,
    preTaughtRatio: preTaughtRatio,
    isPreTaught: isPreTaught,
    readingSession: readingSession,
    listeningSession: listeningSession
  };
})(typeof window !== 'undefined' ? (window.DW = window.DW || {}) : global.DW = global.DW || {});

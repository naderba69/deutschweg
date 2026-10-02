/* Procedural instances from the sentence bank. No instance without key, rationale, and capability. */
(function (DW) {
  function instance(bank, index) {
    const list = bank || [];
    if (!list.length) return null;
    const item = list[Math.abs(index || 0) % list.length];
    if (!item || !item.key || !item.why || !item.cap) return null;
    const words = String(item.de).split(/\s+/);
    const blankAt = Math.min(words.length - 1, 1);
    const answer = words[blankAt];
    const prompt = words.slice();
    prompt[blankAt] = '____';
    return {
      prompt: prompt.join(' '),
      key: answer,
      full: item.key,
      rationale: item.why,
      capabilityId: item.cap,
      lessonId: item.lessonId
    };
  }
  function pick(bank, index) {
    const list = bank || [];
    if (!list.length) return null;
    const item = list[Math.abs(index || 0) % list.length];
    if (!item || !item.key || !item.why || !item.cap) return null;
    return item;
  }
  function wortstellung(bank, index) {
    const item = pick(bank, index);
    if (!item) return null;
    const words = String(item.de).replace(/[?!.]/g, '').split(/\s+/).filter(Boolean);
    if (words.length < 3) return null;
    const shuffled = words.slice();
    shuffled.unshift(shuffled.pop());
    if (shuffled.join(' ') === words.join(' ')) return null;
    return { type: 'wortstellung', prompt: shuffled, key: words.join(' '), rationale: item.why, capabilityId: item.cap, lessonId: item.lessonId };
  }
  function mcq(bank, index) {
    const item = pick(bank, index);
    const other = pick(bank, (index || 0) + 3);
    if (!item || !other) return null;
    const words = String(item.de).replace(/[?!.]/g, '').split(/\s+/).filter(Boolean);
    if (words.length < 2) return null;
    const answer = words[1];
    const distractor = String(other.de).replace(/[?!.]/g, '').split(/\s+/).filter(Boolean)[1];
    if (!answer || !distractor || distractor === answer) return null;
    const prompt = words.slice();
    prompt[1] = '____';
    return { type: 'mcq', prompt: prompt.join(' '), options: [answer, distractor], key: answer, rationale: item.why, capabilityId: item.cap, lessonId: item.lessonId };
  }
  function matching(bank, index) {
    const a = pick(bank, index);
    const b = pick(bank, (index || 0) + 1);
    if (!a || !b || a.de === b.de || a.why === b.why) return null;
    return {
      type: 'matching',
      pairs: [{ links: a.de, rechts: a.why }, { links: b.de, rechts: b.why }],
      key: [a.why, b.why],
      rationale: a.why,
      capabilityId: a.cap,
      lessonId: a.lessonId
    };
  }
  function asCloze(item) {
    if (!item) return null;
    return {
      art: 'cloze',
      ziel: item.capabilityId,
      frage: item.prompt,
      antworten: [item.key],
      familie: 'lexik-kollokation',
      feedback: { correct: item.rationale }
    };
  }
  DW.generator = { instance: instance, wortstellung: wortstellung, mcq: mcq, matching: matching, asCloze: asCloze };
})(typeof window !== 'undefined' ? (window.DW = window.DW || {}) : global.DW = global.DW || {});

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
  DW.generator = { instance: instance };
})(typeof window !== 'undefined' ? (window.DW = window.DW || {}) : global.DW = global.DW || {});

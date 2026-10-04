/* Deutschweg — the §12.5 mastery recorders.
 *
 * The readiness gate is honest only if the learner can produce what it reads.
 * Two of the six evidences come from the reading and listening recorders
 * (DW.tracks); the other four — the novella summary, the twenty-minute
 * discussion, the essay and the formal letter, and the rule explained without
 * notes — come from here. A recorder writes what the session actually was: the
 * seconds the microphone ran, the words in the text, the minutes the clock ran,
 * the clause types and the errors the bounded checker found. What it cannot know
 * (whether a content point was covered, whether the letter's purpose was
 * achieved, how the four axes score) is ticked by the learner, and the record
 * says so — nothing here claims to correct a text.
 */
(function (DW) {
  /* The subordinate-clause openers the bounded checker can see. A text with three
     different ones has three clause types; the counter never guesses. */
  const CLAUSE = ['dass', 'weil', 'obwohl', 'wenn', 'als', 'damit', 'während', 'ob', 'seitdem',
    'nachdem', 'bevor', 'sodass', 'so dass', 'falls', 'indem', 'da', 'wohingegen', 'sobald'];

  function clauseTypes(text) {
    const body = ' ' + String(text || '').toLowerCase().replace(/[^a-zäöüß\s]/g, ' ').replace(/\s+/g, ' ') + ' ';
    return CLAUSE.filter(c => body.indexOf(' ' + c + ' ') >= 0).length;
  }

  function list() {
    const M = (typeof window !== 'undefined' && window.DW_MASTERY && window.DW_MASTERY.B2) || null;
    return (M && M.tasks) || [];
  }
  function task(id) {
    return list().filter(t => t.id === id)[0] || null;
  }
  function today() {
    return (DW.today && DW.today()) || new Date().toISOString().slice(0, 10);
  }

  /* A written task: the clock, the words, the points the learner ticked, the
     clause types and the errors the checker found. `counted` is the task's own
     floor (words and minutes), not the readiness floor — §12.5 reads the record. */
  function writingSession(t, text, elapsedMs, opts) {
    opts = opts || {};
    const body = String(text || '').trim();
    const words = body ? body.split(/\s+/).filter(Boolean).length : 0;
    const minutes = Math.round(((Number(elapsedMs) || 0) / 60000) * 10) / 10;
    const errors = Number(opts.errors != null ? opts.errors : ((opts.check && opts.check.errors) || 0));
    const axes = opts.axes || null;
    const zeroAxis = !!(axes && Object.keys(axes).some(k => Number(axes[k]) === 0));
    const points = Array.isArray(opts.points) ? opts.points.filter(Boolean).length : 0;
    const floorWords = Number(t.minWords) || 0;
    const cap = t.minutes != null ? Number(t.minutes) : null;
    return {
      tag: t.tag, taskId: t.id, kind: t.kind, date: today(),
      words: words, minutes: minutes, contentPoints: points,
      clauseTypes: clauseTypes(body), errors: errors,
      purpose: opts.purpose || null, zeroAxis: zeroAxis, axes: axes,
      measured: words > 0 && minutes > 0,
      counted: words >= floorWords && (!cap || minutes <= cap)
    };
  }

  /* A spoken task: the seconds the recorder ran, whether a long pause broke it,
     and whether notes were used — a task that forbids notes says so, and the
     learner's confirmation is what the record keeps. */
  function speakingSession(t, seconds, opts) {
    opts = opts || {};
    const secs = Math.round(Number(seconds) || 0);
    const range = t.seconds || [0, null];
    const low = Number(range[0]) || 0;
    const high = range[1] == null ? null : Number(range[1]);
    const usedNotes = t.notes === false ? !opts.noNotes : opts.notes === true;
    return {
      tag: t.tag, taskId: t.id, kind: t.kind, date: today(),
      seconds: secs, longPause: opts.longPause === true, notes: usedNotes,
      measured: secs > 0,
      counted: secs >= low && (!high || secs <= high)
    };
  }

  /* What is still missing for §12.5 — read from the portfolio, never guessed. */
  function state(portfolio) {
    const P = portfolio || {};
    const recs = P.recordings || [];
    const texts = P.texts || [];
    const has = t => t.kind === 'essay' || t.kind === 'formal-letter'
      ? texts.some(x => x && x.tag === t.tag)
      : recs.some(r => r && r.tag === t.tag);
    return list().map(t => ({
      id: t.id, kind: t.kind, tag: t.tag, title: t.title,
      done: has(t), floor: t.minWords ? t.minWords + ' كلمة' : (t.seconds ? t.seconds[0] + ' ث' : '')
    }));
  }

  DW.mastery = {
    list: list, task: task, clauseTypes: clauseTypes,
    writingSession: writingSession, speakingSession: speakingSession, state: state
  };
})(typeof window !== 'undefined' ? (window.DW = window.DW || {}) : global.DW = global.DW || {});

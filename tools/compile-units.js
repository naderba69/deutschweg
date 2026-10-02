#!/usr/bin/env node
/* Builds web/data/catalog.js from lesson specs. Each lesson is a real 29-step
   lesson, not a title. Arabic never enters zeigt.de. */
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const specs = []
  .concat(require('./specs-a0a1'))
  .concat(require('./specs-a2'))
  .concat(require('./specs-b1'))
  .concat(require('./specs-b2'));

const FAM = new Set([
  'genus', 'kasus', 'deklination', 'konjugation', 'wortstellung', 'plural',
  'präposition', 'lexik-kollokation', 'register', 'falser-freund',
  'orthographie', 'aussprache', 'hoerstrategie', 'pruefstrategie'
]);

/* P3.2 lexical layer. A lesson with an entry here is built by lessonOfVocab:
   five Wortschatz steps carrying the real word list, and the forms the older
   generator never used (flashcard, word order, writing). */
const VOCAB = require('./vocab-a0a1');
const VOCAB_FLOOR = { A0: 12, A1: 14, A2: 16, B1: 20, B2: 24 };
const CORE = w => String(w).replace(/^(der|die|das)\s+/i, '').split(/\s+/).pop();
const AR = /[\u0600-\u06FF]/;

function die(m) { console.error(m); process.exit(1); }
let currentId = '';
function words(s) { return String(s || '').split(/\s+/).filter(Boolean); }
function whyFor(spec, de) {
  const bare = String(de).replace(/[.!?]+$/g, '');
  const lex = spec.lex.find(l => bare.indexOf(String(l[0]).replace(/[.!?]+$/g, '')) >= 0);
  if (lex) return lex[3];
  const fact = spec.facts.find(f => bare.indexOf(f[0]) >= 0);
  if (fact) return fact[1];
  return spec.goalAr;
}
function js(v) { return JSON.stringify(v); }

function mcq(seed, rightText, wrongs) {
  /* A distractor that repeats the right answer (or another distractor) is not a
     distractor. Spec collisions exist, so drop the copy and say so. */
  const seen = new Set([String(rightText)]);
  const kept = [];
  wrongs.forEach(w => {
    if (seen.has(String(w[0]))) { console.log('  note: dropped duplicate distractor in ' + currentId + ': ' + w[0]); return; }
    seen.add(String(w[0]));
    kept.push(w);
  });
  if (!kept.length) die(currentId + ' has no usable distractor for: ' + rightText);
  const items = [{ text: rightText, ok: true }].concat(kept.map(w => ({
    text: w[0], ok: false, fam: w[1], why: w[2]
  })));
  const shift = seed % items.length;
  const ordered = items.slice(shift).concat(items.slice(0, shift));
  const ids = ['a', 'b', 'c', 'd'];
  const texts = ordered.map(item => item.text);
  if (new Set(texts).size !== texts.length) die(currentId + ' duplicate option text: ' + texts.join(' | '));
  const optionen = ordered.map((item, i) => ({ id: ids[i], text: item.text }));
  const richtig = optionen[ordered.findIndex(item => item.ok)].id;
  const feedback = {};
  const families = {};
  ordered.forEach((item, i) => {
    const id = ids[i];
    feedback[id] = item.ok ? 'صحيح. هذا هو الشكل الذي يقيسه هذا البند.' : item.why;
    if (!item.ok) families[id] = item.fam;
  });
  return { optionen, richtig, feedback, misconceptionFamilies: families };
}

function lessonOf(spec, index) {
  currentId = spec.id;
  const need = ['id', 'level', 'ar', 'de', 'fam', 'goalDe', 'goalAr', 'facts', 'lex', 'model', 'say', 'hwDe', 'hwAr'];
  need.forEach(k => { if (!spec[k]) die(spec.id + ' missing ' + k); });
  if (!FAM.has(spec.fam)) die(spec.id + ' bad family ' + spec.fam);
  if (spec.facts.length !== 4) die(spec.id + ' needs 4 facts');
  if (spec.lex.length !== 4) die(spec.id + ' needs 4 lex items');
  spec.lex.forEach(l => {
    if (l.length < 5) die(spec.id + ' lex item needs a blank: ' + l[0]);
    if (l[0].indexOf(l[4]) < 0) die(spec.id + ' blank not in sentence: ' + l[4] + ' / ' + l[0]);
  });
  [spec.goalDe, spec.model, spec.say, spec.hwDe].concat(spec.facts.map(f => f[0]), spec.lex.map(l => l[0])).forEach(de => {
    if (AR.test(de)) die(spec.id + ' Arabic in German field: ' + de);
  });
  const fam = spec.fam;
  const cap = n => 'cap.' + spec.id + '.s' + String(n).padStart(2, '0');
  const steps = [];
  function push(st) {
    if (st.zeigt && AR.test(st.zeigt.de)) die(spec.id + ' Arabic in zeigt ' + st.id);
    if (st.recap && words(st.recap).length > 6) die(spec.id + ' recap too long ' + st.id + ' ' + st.recap);
    if (st.zeigt && ['Ziel', 'Erklärung', 'Wortschatz'].includes(st.phase) && /[.!?]\s+[A-ZÄÖÜ]/.test(st.zeigt.de)) {
      die(spec.id + ' two concepts in ' + st.id);
    }
    steps.push(st);
  }
  const g = mcq(1, spec.goalAr, [
    ['إنهاء المستوى هذا الأسبوع', 'register', 'الهدف أضيق من المستوى. اليوم قدرة واحدة.'],
    ['حفظ قائمة بلا جملة', 'lexik-kollokation', 'الكلمة تدخل في جملة، لا في قائمة.']
  ]);
  push({
    id: 's01', phase: 'Ziel', type: 'mcq',
    zeigt: { de: spec.goalDe },
    erklaerung: spec.goalAr,
    recap: 'هدف هذا الدرس فقط',
    frage: Object.assign({ ziel: cap(1), art: 'mcq', frage: 'ماذا ستستطيع في نهاية هذا الدرس؟' }, g)
  });
  const heard = spec.lex[0][0];
  const h = mcq(2, heard, spec.lex.slice(1, 3).map(l => [l[0], 'hoerstrategie', 'هذه جملة من الدرس، لكنها ليست التي سمعتها أولًا.']));
  push({
    id: 's02', phase: 'Aufwärmen', type: 'hoeren',
    zeigt: { de: 'Hör zu' },
    audio: spec.lex.map(l => l[0]),
    erklaerung: 'استمع قبل أن تقرأ. المطلوب تمييز الجملة لا ترجمتها.',
    recap: 'اسمع قبل أن تقرأ',
    hinweise: ['الجملة الأولى هي المفتاح.', 'لا تختر الترجمة. اختر ما سمعت.'],
    frage: Object.assign({ ziel: cap(2), art: 'hoeren', frage: 'أي جملة سمعتها أولًا؟' }, h)
  });
  const hookOpts = spec.facts.slice(0, 3).map(f => f[0]);
  push({
    id: 's03', phase: 'Einstieg', type: 'mcq',
    zeigt: { de: spec.de },
    erklaerung: 'قبل الشرح: أي شكل تتوقع أنه سيخدعك؟ التوقّع ليس درجة.',
    recap: 'توقّع الخدعة قبل الشرح',
    frage: {
      ziel: cap(3), art: 'mcq', beliebig: true,
      frage: 'أي شكل تتوقع أن يخطئك؟',
      optionen: hookOpts.map((text, i) => ({ id: ['a', 'b', 'c'][i], text: text })),
      feedback: { a: 'سنفحص هذا التوقع في التمارين.', b: 'سنفحص هذا التوقع في التمارين.', c: 'سنفحص هذا التوقع في التمارين.' }
    }
  });
  spec.facts.forEach((f, i) => {
    const n = 4 + i;
    const q = mcq(n, f[0], [[f[3], fam, f[4]], [spec.facts[(i + 1) % 4][0], fam, 'هذا شكل من الدرس، لكنه ليس جواب هذا البند.']]);
    push({
      id: 's0' + n, phase: 'Erklärung', type: 'mcq',
      zeigt: { de: f[0] },
      erklaerung: f[1],
      recap: words(f[0]).slice(0, 4).join(' '),
      vereinfachung: { beispiel: f[0], analogie: f[1], regel: f[2] },
      hinweise: ['انظر إلى الشكل الألماني لا إلى عادتك.', f[2]],
      frage: Object.assign({ ziel: cap(n), art: 'mcq', frage: 'أي شكل يطابق القاعدة التي قرأتها؟' }, q)
    });
  });
  spec.lex.forEach((l, i) => {
    const n = 8 + i;
    const blank = l[4];
    const shown = l[0].replace(blank, '____');
    if (shown === l[0]) die(spec.id + ' blank not found in ' + l[0] + ' / ' + blank);
    if (i < 2) {
      push({
        id: 's' + String(n).padStart(2, '0'), phase: 'Wortschatz', type: 'cloze',
        zeigt: { de: shown },
        erklaerung: l[1],
        recap: words(l[0]).slice(0, 4).join(' '),
        vereinfachung: { beispiel: l[0], analogie: l[1], regel: l[3] },
        hinweise: ['الفراغ كلمة واحدة من الجملة.', l[3]],
        frage: {
          ziel: cap(n), art: 'cloze', frage: 'أكمل الفراغ بالكلمة التي تجعل الجملة صحيحة.',
          antworten: [blank],
          nearMiss: { [l[2].split(' ')[0]]: l[3] },
          feedback: { correct: l[3] }
        }
      });
    } else {
      const q = mcq(n, l[0], [[l[2], fam, l[3]], [spec.lex[(i + 1) % 4][0], fam, 'جملة من الدرس، لكن السؤال عن الجملة المعروضة.']]);
      push({
        id: 's' + String(n).padStart(2, '0'), phase: 'Wortschatz', type: 'mcq',
        zeigt: { de: l[0] },
        erklaerung: l[1],
        recap: words(l[0]).slice(0, 4).join(' '),
        vereinfachung: { beispiel: l[0], analogie: l[1], regel: l[3] },
        hinweise: ['الجملة الصحيحة واحدة.', l[3]],
        frage: Object.assign({ ziel: cap(n), art: 'mcq', frage: 'أي جملة صحيحة هنا؟' }, q)
      });
    }
  });
  push({
    id: 's12', phase: 'Anwenden', type: 'matching',
    zeigt: { de: spec.model },
    erklaerung: 'هذا النموذج. اربطه بمعناه قبل أن تغيّره.',
    recap: 'النموذج قبل التغيير',
    hinweise: ['لا تخترع جملة قبل أن تربط النموذج.', spec.goalAr],
    frage: {
      ziel: cap(12), art: 'matching', frage: 'صِل كل جملة بمعناها.',
      paare: spec.lex.slice(0, 3).map(l => ({ links: l[0], rechts: l[1], haken: l[3] })),
      feedback: { correct: 'النموذج مربوط. الآن يمكن تقليده.' }
    }
  });
  push({
    id: 's13', phase: 'Anwenden', type: 'cloze',
    zeigt: { de: spec.lex[0][0].replace(spec.lex[0][4], '____') },
    erklaerung: 'قلّد النموذج. الفراغ هو الكلمة التي تغيّر المعنى إن أخطأتها.',
    recap: 'تقليد النموذج',
    hinweise: ['الجملة هي جملة النموذج.', spec.lex[0][3]],
    frage: {
      ziel: cap(13), art: 'cloze', frage: 'أكمل كما في النموذج.',
      antworten: [spec.lex[0][4]],
      nearMiss: { [spec.lex[0][2].split(' ')[0]]: spec.lex[0][3] },
      feedback: { correct: spec.lex[0][3] }
    }
  });
  const tr = mcq(14, spec.say, [[spec.facts[0][3], fam, spec.facts[0][4]], [spec.lex[1][2], fam, spec.lex[1][3]]]);
  push({
    id: 's14', phase: 'Anwenden', type: 'mcq',
    zeigt: { de: spec.say },
    erklaerung: 'حوّل النموذج إلى جملة تقولها أنت. ليست ترجمة حرفية.',
    recap: 'تحويل لا ترجمة',
    hinweise: ['الجملة الألمانية جاهزة في السطر.', spec.facts[0][2]],
    frage: Object.assign({ ziel: cap(14), art: 'mcq', frage: 'أي جملة هي التحويل الصحيح؟' }, tr)
  });
  for (let i = 0; i < 5; i++) {
    const n = 15 + i;
    const src = i < 4 ? spec.facts[i] : spec.lex[0];
    const bad = i < 4 ? src[3] : src[2];
    const why = i < 4 ? src[4] : src[3];
    const right = i < 4 ? src[0] : src[0];
    const q = mcq(n, right, [[bad, fam, why], [spec.lex[(i + 1) % 4][2], fam, 'هذا فخ الدرس، لكنه ليس جواب هذا البند.']]);
    push({
      id: 's' + n, phase: 'Übungen', type: 'mcq',
      zeigt: { de: right },
      erklaerung: i < 4 ? src[1] : src[1],
      recap: 'تمرين ' + (i + 1),
      hinweise: ['احذف الشكل الذي تعرفه من لغة أخرى.', why],
      frage: Object.assign({ ziel: cap(n), art: 'mcq', frage: 'اختر الشكل الذي يُنتج الجملة الصحيحة.' }, q)
    });
  }
  const tricks = [
    [spec.facts[0][0], 'قلها مع الجملة لا وحدها.', spec.facts[0][4]],
    [spec.lex[0][4], 'هذه الكلمة هي التي ينكسر المعنى عندها.', spec.lex[0][3]],
    [spec.say, 'جملة الإنتاج هي عقد الدرس.', spec.goalAr]
  ];
  tricks.forEach((t, i) => {
    const n = 20 + i;
    push({
      id: 's' + n, phase: 'Merkhilfe', type: 'mcq',
      zeigt: { de: AR.test(t[0]) ? spec.facts[0][0] : t[0] },
      erklaerung: t[1],
      recap: 'حيلة ' + (i + 1),
      merkhilfe: { trick: t[0], wie: t[1], warum: t[2] },
      frage: Object.assign({
        ziel: cap(n), art: 'mcq', frage: 'أي سطر هو حيلة هذا الدرس؟'
      }, mcq(n, AR.test(t[0]) ? spec.facts[0][0] : t[0], [
        [spec.facts[0][3], fam, 'هذا هو الفخ، لا الحيلة.'],
        [spec.lex[1][2], fam, 'هذا خطأ شائع، لا أداة تذكّر.']
      ]))
    });
  });
  push({
    id: 's23', phase: 'Produktion', type: 'sprechen',
    zeigt: { de: spec.say },
    erklaerung: 'سجّل عشرين ثانية: ' + spec.say,
    recap: 'تسجيل عشرين ثانية',
    ziel: 'cap.' + spec.id + '.speak'
  });
  push({
    id: 's24', phase: 'Zusammenfassung', type: 'verstehen',
    zeigt: { de: spec.facts[0][0] },
    erklaerung: spec.facts[0][2],
    recap: words(spec.facts[0][0]).slice(0, 6).join(' ')
  });
  const checks = [
    { right: spec.facts[0][0], bad: spec.facts[0][3], why: spec.facts[0][4] },
    { right: spec.facts[1][0], bad: spec.facts[1][3], why: spec.facts[1][4] },
    { right: spec.lex[2][0], bad: spec.lex[2][2], why: spec.lex[2][3] },
    { right: spec.lex[3][0], bad: spec.lex[3][2], why: spec.lex[3][3] }
  ];
  checks.forEach((src, i) => {
    const n = 25 + i;
    const q = mcq(n, src.right, [[src.bad, fam, src.why]]);
    const st = {
      id: 's' + n, phase: 'Check', type: 'mcq',
      zeigt: { de: 'Check ' + (i + 1) },
      erklaerung: i === 0 ? 'فحص. النجاح 80٪ بلا مساعدة.' : 'البند يقيس ما شُرح، لا ما خُمّن.',
      recap: 'فحص ' + (i + 1),
      frage: Object.assign({
        ziel: cap(n), prereq: cap(4 + (i % 4)), art: 'mcq', frage: 'أي شكل صحيح؟'
      }, q)
    };
    push(st);
  });
  push({
    id: 's29', phase: 'Hausaufgabe', type: 'verstehen',
    zeigt: { de: spec.hwDe },
    erklaerung: spec.hwAr,
    recap: 'واجب اليوم التالي'
  });
  if (steps.length !== 29) die(spec.id + ' step count ' + steps.length);
  return {
    id: spec.id,
    level: spec.level,
    unit: spec.unit || 'u1',
    kind: spec.kind || 'lesson',
    title: { ar: spec.ar, de: spec.de },
    minutes: spec.level === 'B2' ? 80 : 70,
    schritte: steps
  };
}

/* ---------- P3.2 builder: a lesson that carries a real word list ---------- */
function blankOut(sentence, core) {
  /* Unicode-aware boundaries: \b is ASCII-only and would miss Österreich. */
  const esc = core.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp('(^|[^\\p{L}])(' + esc + ')(?=[^\\p{L}]|$)', 'iu');
  const m = sentence.match(re);
  if (!m) return null;
  const start = m.index + m[1].length;
  const hit = m[2];
  return {
    shown: sentence.slice(0, start) + '____' + sentence.slice(start + hit.length),
    answer: hit
  };
}

const FINITE = /^(ist|sind|bin|bist|seid|heißt|heiße|kommt|komme|wohnt|wohne|spricht|spreche|lerne|lernt|arbeite|arbeitet|geht|gehe|kostet|beginnt|bleibe|stehe|frühstücke|fährt|lebt|hat|habe|antwortet|antworte|fragt|frage|möchte|kann|muss|will|darf|mag|holt|kauf)$/i;

/* The order exercise is scored on four levels, and level 1 needs the finite
   verb, level 3 the fields. Without them the engine could only say "wrong",
   so a sentence without a finite verb is refused rather than shipped blind. */
function orderFrage(sentence, frageText) {
  const toks = String(sentence).split(/\s+/).filter(Boolean);
  const finite = toks.find(t => FINITE.test(t.replace(/[.,!?;:]+$/, '')));
  if (!finite) return null;
  const i = toks.indexOf(finite);
  return {
    art: 'wortstellung', frage: frageText, tokens: toks, correct: toks, finite: finite,
    fields: { vorfeld: toks.slice(0, i), lsk: [finite], mittelfeld: toks.slice(i + 1) },
    familie: 'wortstellung'
  };
}
function orderSource(spec, items, skip) {
  const pool = [spec.say, spec.model].concat(items.map(it => it.ex));
  for (const cand of pool) {
    if (skip && skip.indexOf(cand) >= 0) continue;
    const f = orderFrage(cand, 'rtb');
    if (f) return f;
  }
  return null;
}

function lessonOfVocab(spec, vocabRow) {
  currentId = spec.id;
  const items = vocabRow.items.map(r => ({
    de: r[0], pl: r[1], ar: r[2], ex: r[3], err: r[4], why: r[5], fam: r[6],
    /* r[7] is the surface form to blank when the example inflects the headword
       (heißen → heißt). Without it the core of the headword is used. */
    blank: r[7] || CORE(r[0])
  }));
  const floor = VOCAB_FLOOR[spec.level] || 12;
  if (items.length < floor) die(spec.id + ' vocab ' + items.length + ' below the ' + spec.level + ' floor ' + floor);
  if (items.length > 20) die(spec.id + ' vocab ' + items.length + ' exceeds what 5 Wortschatz steps can carry');
  items.forEach(it => {
    if (!FAM.has(it.fam)) die(spec.id + ' bad vocab family ' + it.fam);
    if (AR.test(it.de) || AR.test(it.ex) || AR.test(it.err)) die(spec.id + ' Arabic inside German vocab: ' + it.de);
    if (!it.ar || !it.why || !it.pl) die(spec.id + ' vocab item incomplete: ' + it.de);
    if (!blankOut(it.ex, it.blank)) die(spec.id + ' blank ' + it.blank + ' not found in: ' + it.ex);
  });
  if (!vocabRow.tricks || vocabRow.tricks.length !== 3) die(spec.id + ' needs exactly 3 tricks');
  vocabRow.tricks.forEach(t => {
    if (!t.trick || !t.wie || !t.warum || !t.anchor) die(spec.id + ' trick incomplete');
    if (AR.test(t.anchor)) die(spec.id + ' trick anchor must be German');
  });

  const fam = spec.fam;
  const cap = n => 'cap.' + spec.id + '.s' + String(n).padStart(2, '0');
  const steps = [];
  const named = {};
  let n = 0;
  function push(key, st) {
    n += 1;
    st.id = 's' + String(n).padStart(2, '0');
    if (st.zeigt && AR.test(st.zeigt.de)) die(spec.id + ' Arabic in zeigt ' + st.id);
    if (st.recap && words(st.recap).length > 6) die(spec.id + ' recap too long ' + st.id);
    if (st.zeigt && ['Ziel', 'Erklärung', 'Wortschatz'].includes(st.phase) && /[.!?]\s+[A-ZÄÖÜ]/.test(st.zeigt.de)) {
      die(spec.id + ' two concepts in ' + st.id);
    }
    if (key) named[key] = cap(n);
    steps.push(st);
  }

  /* Ziel, Aufwärmen, Einstieg — unchanged in shape, better feedback */
  push('ziel', {
    phase: 'Ziel', type: 'mcq',
    zeigt: { de: spec.goalDe },
    erklaerung: spec.goalAr,
    recap: 'هدف هذا الدرس فقط',
    frage: Object.assign({ ziel: cap(n + 1), art: 'mcq', frage: 'ماذا ستستطيع في نهاية هذا الدرس؟' },
      mcq(1, spec.goalAr, [
        ['إنهاء المستوى هذا الأسبوع', 'register', 'الهدف أضيق من المستوى. اليوم قدرة واحدة.'],
        ['حفظ الكلمات بلا جملة', 'lexik-kollokation', 'الكلمة تُحفظ داخل جملتها، لا في قائمة.']
      ]))
  });
  const heard = spec.lex[0][0];
  push('hoeren', {
    phase: 'Aufwärmen', type: 'hoeren',
    zeigt: { de: 'Hör zu' },
    audio: spec.lex.map(l => l[0]),
    erklaerung: 'استمع قبل أن تقرأ. المطلوب تمييز الجملة لا ترجمتها.',
    recap: 'اسمع قبل أن تقرأ',
    hinweise: ['الجملة الأولى هي المفتاح.', 'لا تختر الترجمة. اختر ما سمعت.'],
    frage: Object.assign({ ziel: cap(n + 1), art: 'hoeren', frage: 'أي جملة سمعتها أولًا؟' },
      mcq(2, heard, spec.lex.slice(1, 3).map(l => [l[0], 'hoerstrategie',
        'الجملة «' + l[0] + '» من الدرس، لكنها ليست الأولى التي سمعتها. أنصت إلى أول كلمة قبل أن تختار.'])))
  });
  push('einstieg', {
    phase: 'Einstieg', type: 'mcq',
    zeigt: { de: spec.de },
    erklaerung: 'قبل الشرح: ما الكلمة التي تتوقع أن تخدعك؟ التوقّع ليس درجة.',
    recap: 'توقّع الخدعة قبل الشرح',
    frage: {
      ziel: cap(n + 1), art: 'mcq', beliebig: true,
      frage: 'أي كلمة تتوقع أن تخطئك في هذا الدرس؟',
      optionen: items.slice(0, 3).map((it, i) => ({ id: ['a', 'b', 'c'][i], text: it.de })),
      feedback: {
        a: 'سنفحص هذا التوقع في التمارين.',
        b: 'سنفحص هذا التوقع في التمارين.',
        c: 'سنفحص هذا التوقع في التمارين.'
      }
    }
  });

  /* Erklärung ×4 from the lesson facts */
  spec.facts.forEach((f, i) => {
    const other = spec.facts[(i + 1) % 4];
    const q = mcq(4 + i, f[0], [[f[3], fam, f[4]],
      [other[0], fam, 'الجملة سليمة، لكنها تخصّ: ' + other[1] + '. البند هنا يسأل عن: ' + f[2] + '.']]);
    push(null, {
      phase: 'Erklärung', type: 'mcq',
      zeigt: { de: f[0] },
      erklaerung: f[1],
      recap: words(f[0]).slice(0, 4).join(' '),
      vereinfachung: { beispiel: f[0], analogie: f[1], regel: f[2] },
      hinweise: ['انظر إلى الشكل الألماني لا إلى عادتك.', f[2]],
      frage: Object.assign({ ziel: cap(n + 1), art: 'mcq', frage: 'أي شكل يطابق القاعدة التي قرأتها؟' }, q)
    });
  });

  /* Wortschatz: the real word list, 2–4 words per step, each word in a sentence.
     The forms rotate so the list is met four different ways, never as a list. */
  const size = Math.max(2, Math.min(4, Math.ceil(items.length / 5)));
  const groups = [];
  for (let i = 0; i < items.length; i += size) groups.push(items.slice(i, i + size));
  groups.forEach((group, gi) => {
    const form = gi % 4;
    const anchor = group[Math.min(1, group.length - 1)];
    let st;
    if (form === 0) {
      st = {
        phase: 'Wortschatz', type: 'mcq',
        zeigt: { de: group[0].de },
        wortschatz: group,
        erklaerung: 'بطاقة استقبال: ترى الألمانية وتستدعي معناها. لا تكشف الجواب قبل أن تحاول.',
        recap: words(group[0].de).slice(0, 4).join(' '),
        vereinfachung: { beispiel: group[0].ex, analogie: group[0].ar, regel: group[0].why },
        hinweise: ['حاول قبل الكشف. التعرّف السريع الخاطئ لا يبني شيئًا.', group[0].why],
        frage: {
          ziel: cap(n + 1), art: 'flashcard', direction: 'receptive',
          de: group[0].de, ar: group[0].ar, example: group[0].ex, familie: group[0].fam,
          frage: 'اقلب البطاقة: ما معنى «' + group[0].de + '»؟'
        }
      };
    } else if (form === 1) {
      const b = blankOut(anchor.ex, anchor.blank);
      st = {
        phase: 'Wortschatz', type: 'cloze',
        zeigt: { de: anchor.de },
        wortschatz: group,
        erklaerung: 'الكلمة داخل جملتها. الفراغ يُقاس على الاستعمال لا على الحفظ.',
        recap: words(anchor.de).slice(0, 4).join(' '),
        vereinfachung: { beispiel: anchor.ex, analogie: anchor.ar, regel: anchor.why },
        hinweise: ['اقرأ الجملة كاملة قبل الاختيار.', anchor.why],
        frage: {
          ziel: cap(n + 1), art: 'cloze', frage: 'أكمل الفراغ بالكلمة الصحيحة من المجموعة.',
          zeigt: b.shown, antworten: [b.answer, anchor.blank, anchor.de],
          nearMiss: { [String(anchor.err).split(/\s+/).slice(-2)[0]]: anchor.why },
          feedback: { correct: anchor.why }
        }
      };
    } else if (form === 2) {
      st = {
        phase: 'Wortschatz', type: 'matching',
        zeigt: { de: group[0].de },
        wortschatz: group,
        erklaerung: 'صِل الكلمة بمعناها. الصلة الخاطئة تكشف الخلط قبل أن يثبت.',
        recap: words(group[0].de).slice(0, 4).join(' '),
        vereinfachung: { beispiel: group[0].ex, analogie: group[0].ar, regel: group[0].why },
        hinweise: ['العدد نفسه في العمودين.', group[0].why],
        frage: {
          ziel: cap(n + 1), art: 'matching', frage: 'صِل كل كلمة بمعناها.',
          paare: group.map(it => ({ links: it.de, rechts: it.ar, haken: it.why })),
          feedback: { correct: 'الكلمات مربوطة. الآن تُستعمل في جملة.' }
        }
      };
    } else {
      const target = group[group.length - 1];
      st = {
        phase: 'Wortschatz', type: 'mcq',
        zeigt: { de: target.de },
        wortschatz: group,
        erklaerung: 'أي جملة استعملت الكلمة استعمالًا سليمًا؟ الخطأ هنا في الجملة لا في المعنى.',
        recap: words(target.de).slice(0, 4).join(' '),
        vereinfachung: { beispiel: target.ex, analogie: target.ar, regel: target.why },
        hinweise: ['قارن موضع الكلمة وأداتها، لا معناها فقط.', target.why],
        frage: Object.assign({
          ziel: cap(n + 1), art: 'mcq',
          frage: 'أي جملة صحيحة تمامًا؟'
        }, mcq(20 + gi, target.ex, group.filter(it => it !== target).map(it => [it.err, it.fam, it.why])))
      };
    }
    push('w' + gi, st);
  });

  /* Anwenden ×3: model → imitate → transform */
  push('model', {
    phase: 'Anwenden', type: 'matching',
    zeigt: { de: spec.model },
    erklaerung: 'هذا النموذج. اربطه بمعناه قبل أن تغيّره.',
    recap: 'النموذج قبل التغيير',
    hinweise: ['لا تخترع جملة قبل أن تربط النموذج.', spec.goalAr],
    frage: {
      ziel: cap(n + 1), art: 'matching', frage: 'صِل كل جملة بمعناها.',
      paare: spec.lex.slice(0, Math.min(3, spec.lex.length)).map(l => ({ links: l[0], rechts: l[1], haken: l[3] })),
      feedback: { correct: 'النموذج مربوط. الآن يمكن تقليده.' }
    }
  });
  push('imitate', {
    phase: 'Anwenden', type: 'cloze',
    zeigt: { de: spec.lex[0][0].replace(spec.lex[0][4], '____') },
    erklaerung: 'قلّد النموذج. الفراغ هو الكلمة التي تنكسر الجملة بدونها.',
    recap: 'تقليد النموذج',
    hinweise: ['الجملة هي جملة النموذج.', spec.lex[0][3]],
    frage: {
      ziel: cap(n + 1), art: 'cloze', frage: 'أكمل كما في النموذج.',
      antworten: [spec.lex[0][4]],
      nearMiss: { [spec.lex[0][2].split(' ')[0]]: spec.lex[0][3] },
      feedback: { correct: spec.lex[0][3] }
    }
  });
  push('transform', {
    phase: 'Anwenden', type: 'mcq',
    zeigt: { de: spec.say },
    erklaerung: 'حوّل النموذج إلى جملة تقولها أنت. ليست ترجمة حرفية.',
    recap: 'تحويل لا ترجمة',
    hinweise: ['الجملة الألمانية جاهزة في السطر.', spec.facts[0][2]],
    frage: Object.assign({ ziel: cap(n + 1), art: 'mcq', frage: 'أي جملة هي التحويل الصحيح؟' },
      mcq(14, spec.say, [[spec.facts[0][3], fam, spec.facts[0][4]], [spec.lex[1][2], fam, spec.lex[1][3]]]))
  });

  /* Übungen ×6: two facts, a cloze from the word list, word order, writing, one more fact */
  [0, 1].forEach(i => {
    const f = spec.facts[i];
    push(null, {
      phase: 'Übungen', type: 'mcq',
      zeigt: { de: f[0] },
      erklaerung: f[1],
      recap: 'تمرين ' + (i + 1),
      hinweise: ['احذف الشكل الذي تعرفه من لغة أخرى.', f[4]],
      frage: Object.assign({ ziel: cap(n + 1), art: 'mcq', frage: 'اختر الشكل الذي يُنتج الجملة الصحيحة.' },
        mcq(15 + i, f[0], [[f[3], fam, f[4]],
          [spec.lex[(i + 1) % 4][2], fam, 'هذا فخ معروف في الدرس، لكنه لا يجيب هذا البند: البند يقيس «' + f[2] + '».']]))
    });
  });
  const drillItem = items[items.length - 1];
  {
    const b = blankOut(drillItem.ex, drillItem.blank);
    push('clozeDrill', {
      phase: 'Übungen', type: 'cloze',
      zeigt: { de: drillItem.de },
      erklaerung: 'الكلمة الأخيرة في القائمة، داخل جملتها.',
      recap: 'تمرين ٣',
      hinweise: ['الكلمة من قائمة اليوم.', drillItem.why],
      frage: {
        ziel: cap(n + 1), art: 'cloze', frage: 'أكمل الجملة بالكلمة الصحيحة.',
        zeigt: b.shown,
        antworten: [b.answer, drillItem.blank, drillItem.de],
        nearMiss: { [String(drillItem.err).split(/\s+/).slice(-2)[0]]: drillItem.why },
        feedback: { correct: drillItem.why }
      }
    });
  }
  const order = orderSource(spec, items);
  if (!order) die(spec.id + ' has no sentence with a finite verb for the order exercise');
  push('order', {
    phase: 'Übungen', type: 'mcq',
    zeigt: { de: order.correct.join(' ') },
    erklaerung: 'رتّب الكلمات. الفعل المصرّف ثانٍ في الجملة الرئيسية، وليس الترتيب العربي.',
    recap: 'تمرين ٤',
    hinweise: ['ابحث عن الفعل أولًا ثم ضعه في الموضع الثاني.', 'الفاعل يلي الفعل غالبًا هنا.'],
    frage: Object.assign({ ziel: cap(n + 1) }, order)
  });
  {
    push('writing', {
      phase: 'Übungen', type: 'mcq',
      zeigt: { de: 'Schreiben' },
      erklaerung: 'اكتب أربع جمل عن نفسك بالكلمات الجديدة. الفحص يسمّي حدّه ولا يعيد كتابة نصّك.',
      recap: 'تمرين ٥: كتابة',
      hinweise: ['ابدأ بجملة النموذج ثم غيّر الاسم والبلد.', 'استعمل كلمتين على الأقل من قائمة اليوم.'],
      frage: {
        ziel: cap(n + 1), art: 'schreiben', familie: 'wortstellung',
        prompt: 'اكتب أربع جمل قصيرة: من أنت، من أين، أين تسكن، وكلمة تعلّمتها اليوم.',
        promptDe: 'Ich heiße … · Ich komme aus … · Ich wohne in … · Ich lerne ' + items[0].de + '.',
        points: ['الاسم', 'البلد أو المدينة', 'كلمة من قائمة اليوم'],
        minWords: 20,
        frage: 'اكتب أربع جمل عن نفسك.'
      }
    });
  }
  {
    const f = spec.facts[2];
    push(null, {
      phase: 'Übungen', type: 'mcq',
      zeigt: { de: f[0] },
      erklaerung: f[1],
      recap: 'تمرين ٦',
      hinweise: ['احذف الشكل الذي تعرفه من لغة أخرى.', f[4]],
      frage: Object.assign({ ziel: cap(n + 1), art: 'mcq', frage: 'اختر الشكل الذي يُنتج الجملة الصحيحة.' },
        mcq(17, f[0], [[f[3], fam, f[4]],
          [spec.lex[2][2], fam, 'هذا فخ معروف في الدرس، لكنه لا يجيب هذا البند: البند يقيس «' + f[2] + '».']]))
    });
  }

  /* Merkhilfe ×3: tied to the form of this lesson, never a repeated slogan */
  vocabRow.tricks.forEach((t, i) => {
    push(null, {
      phase: 'Merkhilfe', type: 'mcq',
      zeigt: { de: t.anchor },
      erklaerung: t.wie,
      recap: 'حيلة ' + (i + 1),
      merkhilfe: { trick: t.trick, wie: t.wie, warum: t.warum },
      hinweise: ['الحيلة تُستعمل في الجملة لا في القائمة.', t.warum],
      frage: Object.assign({
        ziel: cap(n + 1), art: 'mcq', frage: 'أي صيغة تُثبّتها هذه الحيلة؟'
      }, mcq(21 + i, t.anchor, [
        [items[0].err, items[0].fam, items[0].why],
        [spec.facts[3][3], fam, spec.facts[3][4]]
      ]))
    });
  });

  push('sprachen', {
    phase: 'Produktion', type: 'sprechen',
    zeigt: { de: spec.say },
    erklaerung: 'سجّل عشرين ثانية: ' + spec.say,
    recap: 'تسجيل عشرين ثانية',
    ziel: 'cap.' + spec.id + '.speak'
  });
  push(null, {
    phase: 'Zusammenfassung', type: 'verstehen',
    zeigt: { de: spec.facts[0][0] },
    erklaerung: spec.facts[0][2],
    recap: words(spec.facts[0][0]).slice(0, 6).join(' ')
  });

  /* Check ×4. No hints inside a check: a hint would corrupt the measurement.
     No writing inside a check either: the learner grades the checklist himself. */
  const checkPlan = [
    { right: spec.facts[3][0], bad: spec.facts[3][3], why: spec.facts[3][4], prereq: cap(7) },
    { right: items[items.length - 1].ex, bad: items[items.length - 1].err, why: items[items.length - 1].why, prereq: named['w0'], cloze: items[items.length - 1] },
    { right: null, bad: null, why: null, prereq: named['order'] },
    { right: items[0].ex, bad: items[0].err, why: items[0].why, prereq: named['model'] }
  ];
  checkPlan.forEach((src, i) => {
    let st;
    if (i === 2) {
      const checkOrder = orderSource(spec, items, [order.correct.join(' ')]);
      if (!checkOrder) die(spec.id + ' has no second sentence for the check');
      st = {
        phase: 'Check', type: 'mcq',
        zeigt: { de: 'Check ' + (i + 1) },
        erklaerung: i === 0 ? 'فحص. النجاح 80٪ بلا مساعدة.' : 'البند يقيس ما شُرح، لا ما خُمّن.',
        recap: 'فحص ' + (i + 1),
        frage: Object.assign({ ziel: cap(n + 1), prereq: src.prereq, frage: 'رتّب الجملة بلا مساعدة.' }, checkOrder)
      };
    } else if (i === 1) {
      const b = blankOut(src.cloze.ex, src.cloze.blank);
      st = {
        phase: 'Check', type: 'mcq',
        zeigt: { de: 'Check ' + (i + 1) },
        erklaerung: i === 0 ? 'فحص. النجاح 80٪ بلا مساعدة.' : 'البند يقيس ما شُرح، لا ما خُمّن.',
        recap: 'فحص ' + (i + 1),
        frage: {
          ziel: cap(n + 1), prereq: src.prereq, art: 'cloze', frage: 'أكمل الفراغ بلا مساعدة.',
          zeigt: b.shown, antworten: [b.answer, src.cloze.blank, src.cloze.de],
          nearMiss: { [String(src.cloze.err).split(/\s+/).slice(-2)[0]]: src.cloze.why },
          feedback: { correct: src.cloze.why }
        }
      };
    } else {
      st = {
        phase: 'Check', type: 'mcq',
        zeigt: { de: 'Check ' + (i + 1) },
        erklaerung: i === 0 ? 'فحص. النجاح 80٪ بلا مساعدة.' : 'البند يقيس ما شُرح، لا ما خُمّن.',
        recap: 'فحص ' + (i + 1),
        frage: Object.assign({
          ziel: cap(n + 1), prereq: src.prereq, art: 'mcq', frage: 'أي جملة صحيحة بلا مساعدة؟'
        }, mcq(25 + i, src.right, [[src.bad, items[0].fam, src.why]]))
      };
    }
    push(null, st);
  });

  push(null, {
    phase: 'Hausaufgabe', type: 'verstehen',
    zeigt: { de: spec.hwDe },
    erklaerung: spec.hwAr,
    recap: 'واجب اليوم التالي'
  });

  if (steps.length < 24 || steps.length > 36) die(spec.id + ' step count ' + steps.length);
  return {
    id: spec.id,
    level: spec.level,
    unit: spec.unit || 'u1',
    kind: spec.kind || 'lesson',
    title: { ar: spec.ar, de: spec.de },
    minutes: spec.level === 'B2' ? 80 : 70,
    wortschatz: items,
    schritte: steps
  };
}

const lessons = {};
const bank = [];
const stepCards = {};
const wortschatzByLesson = {};
const coverage = {};
const genericFeedback = [];
const GENERIC = /هذا شكل من الدرس|جملة من الدرس، لكن|هذا فخ الدرس، لكنه ليس جواب هذا البند/;
specs.forEach((spec, i) => {
  if (lessons[spec.id]) die('duplicate spec ' + spec.id);
  const vocabRow = VOCAB[spec.id];
  lessons[spec.id] = vocabRow ? lessonOfVocab(spec, vocabRow) : lessonOf(spec, i);
  [spec.model, spec.say].concat(spec.lex.map(l => l[0])).forEach(de => {
    bank.push({
      de: de,
      key: de,
      why: whyFor(spec, de),
      cap: 'cap.' + spec.id + '.core',
      lessonId: spec.id
    });
  });
  if (vocabRow) {
    wortschatzByLesson[spec.id] = lessons[spec.id].wortschatz;
    coverage[spec.level] = (coverage[spec.level] || 0) + vocabRow.items.length;
    lessons[spec.id].schritte.forEach(st => {
      if (st.frage && st.frage.art === 'flashcard') {
        stepCards[spec.id + ':' + st.id] = [{
          de: st.frage.de, ar: st.frage.ar, example: st.frage.example, level: spec.level
        }];
      }
      const txt = JSON.stringify(st.frage || {}) + (st.erklaerung || '');
      if (GENERIC.test(txt)) genericFeedback.push(spec.id + ':' + st.id);
    });
  }
});

const ids = Object.keys(lessons);
console.log('compiled lessons', ids.length, 'sentences', bank.length);
if (ids.length !== 119) die('expected 119 lessons, got ' + ids.length);
if (bank.length < 500 || bank.length > 800) die('sentence bank ' + bank.length + ' outside 500–800');

/* P3.2 coverage against the map's own declared receptive targets. The map row
   is the promise; the authored word list is what exists. Both are printed so
   the gap cannot be hidden. */
const SYL = (() => {
  const w = {};
  new Function('window', fs.readFileSync(path.join(root, 'web/data/syllabus.js'), 'utf8'))(w);
  return w.DW_SYLLABUS;
})();
const declared = {};
SYL.lessons.forEach(l => { declared[l.level] = (declared[l.level] || 0) + ((l.words && l.words.receptive) || 0); });
const report = Object.keys(declared).map(level => {
  const have = coverage[level] || 0;
  const want = declared[level] || 0;
  return { level, items: have, declared: want, ratio: want ? have / want : 0 };
});
report.forEach(r => {
  console.log('  ' + r.level + ': ' + r.items + ' authored items vs ' + r.declared +
    ' declared receptive (' + Math.round(r.ratio * 100) + '%)');
});
console.log('  generic feedback lines left in the ported levels:', genericFeedback.length);

const body = '/* Generated by tools/compile-units.js. Edit the specs, not this file. */\n'
  + '(function (root) {\n'
  + '  root.DW_LESSONS = root.DW_LESSONS || {};\n'
  + '  const all = ' + js(lessons) + ';\n'
  + '  Object.keys(all).forEach(function (id) { root.DW_LESSONS[id] = all[id]; });\n'
  + '  root.DW_SENTENCES = ' + js(bank) + ';\n'
  + '  root.DW_STEP_CARDS = ' + js(stepCards) + ';\n'
  + '  root.DW_WORTSCHATZ = ' + js(wortschatzByLesson) + ';\n'
  + '  root.DW_COVERAGE = ' + js(report) + ';\n'
  + '})(typeof window !== "undefined" ? window : global);\n';
fs.writeFileSync(path.join(root, 'web/data/catalog.js'), body);
console.log('wrote web/data/catalog.js');

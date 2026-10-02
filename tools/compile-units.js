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
const AR = /[\u0600-\u06FF]/;

function die(m) { console.error(m); process.exit(1); }
let currentId = '';
function words(s) { return String(s || '').split(/\s+/).filter(Boolean); }
function js(v) { return JSON.stringify(v); }

function mcq(seed, rightText, wrongs) {
  const items = [{ text: rightText, ok: true }].concat(wrongs.map(w => ({
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

const lessons = {};
const bank = [];
specs.forEach((spec, i) => {
  if (lessons[spec.id]) die('duplicate spec ' + spec.id);
  lessons[spec.id] = lessonOf(spec, i);
  [spec.model, spec.say].concat(spec.lex.map(l => l[0])).forEach((de, n) => {
    bank.push({
      de: de,
      key: de,
      why: n < 2 ? spec.facts[0][4] : spec.lex[n - 2][3],
      cap: 'cap.' + spec.id + '.core',
      lessonId: spec.id
    });
  });
});

const ids = Object.keys(lessons);
console.log('compiled lessons', ids.length, 'sentences', bank.length);
if (ids.length !== 119) die('expected 119 lessons, got ' + ids.length);
if (bank.length < 500 || bank.length > 800) die('sentence bank ' + bank.length + ' outside 500–800');

const body = '/* Generated by tools/compile-units.js. Edit the specs, not this file. */\n'
  + '(function (root) {\n'
  + '  root.DW_LESSONS = root.DW_LESSONS || {};\n'
  + '  const all = ' + js(lessons) + ';\n'
  + '  Object.keys(all).forEach(function (id) { root.DW_LESSONS[id] = all[id]; });\n'
  + '  root.DW_SENTENCES = ' + js(bank) + ';\n'
  + '})(typeof window !== "undefined" ? window : global);\n';
fs.writeFileSync(path.join(root, 'web/data/catalog.js'), body);
console.log('wrote web/data/catalog.js');

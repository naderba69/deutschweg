/* P3.2 — the lexical layer. Black box where it matters: a real word table in a
   real DOM, the three forms that no lesson used before, and the coverage gate. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { createRequire } from 'module';
/* p3-unit.mjs is an ES module; the tools it reads (the vocab layer, the floor
   files) are CommonJS. */
const require = createRequire(import.meta.url);

const ROOT = '/home/user/deutschweg';
const FILES = [
  'engine/storage.js', 'engine/ledger.js', 'engine/checker.js', 'engine/renderers.js',
  'engine/practice.js', 'engine/adaptive.js', 'engine/tracks.js', 'engine/mastery.js', 'engine/exam.js',
  'engine/generator.js', 'data/inventory.js', 'data/chunks.js', 'data/syllabus.js',
  'data/bank.js', 'data/a0-u1-l1.js', 'data/catalog.js', 'data/library.js',
  'data/comprehension.js', 'data/ladder.js', 'data/mastery-b2.js', 'data/writing-b2.js', 'data/speaking-b2.js', 'data/exam-b2.js', 'app.js'
];
const html = fs.readFileSync(ROOT + '/web/index.html', 'utf8').replace(/<script src="[^"]+"><\/script>/g, '');
function boot() {
  const dom = new JSDOM(html, { runScripts: 'outside-only', url: 'https://localhost/', pretendToBeVisual: true });
  FILES.forEach(f => dom.window.eval(fs.readFileSync(ROOT + '/web/' + f, 'utf8')));
  dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
  return dom;
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
let pass = 0, fail = 0;
const t = (n, c, why) => { if (c) { pass++; console.log('  ✓', n); } else { fail++; console.log('  ✗', n, why ? '— ' + why : ''); } };
function clickText(win, text) {
  const b = [...win.document.querySelectorAll('button')].find(x => x.textContent.trim() === text);
  if (!b) throw new Error('missing button: ' + text);
  b.click();
  return b;
}

const A0 = ['a0-u1-l2', 'a0-u1-l3', 'a0-u1-l4', 'a0-u1-l5', 'a0-u1-l6'];
const FORMS = ['mcq', 'cloze', 'matching', 'hoeren', 'sprechen', 'flashcard', 'wortstellung', 'schreiben'];

console.log('\n— P3.2 lexical layer —\n');

/* ---------- the data itself ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  let floorOk = true, itemsOk = true, formsInA0 = new Set();
  A0.forEach(id => {
    const lesson = L[id];
    const wl = lesson.wortschatz || [];
    if (wl.length < 12) floorOk = false;
    wl.forEach(it => {
      if (!it.de || !it.pl || !it.ar || !it.ex || !it.err || !it.why || !it.fam) itemsOk = false;
    });
    lesson.schritte.forEach(st => {
      if (st.frage) formsInA0.add(st.type === 'hoeren' ? 'hoeren' : st.frage.art);
      if (st.type === 'sprechen') formsInA0.add('sprechen');
    });
    t(id + ': ' + lesson.schritte.filter(s => s.wortschatz).length + ' Wortschatz steps carry the list',
      lesson.schritte.filter(s => s.wortschatz).length >= 3);
  });
  t('every A0 lesson carries at least 12 words, complete to the last field', floorOk && itemsOk);
  t('A0 alone exercises all eight forms: ' + [...formsInA0].sort().join(' · '), FORMS.every(f => formsInA0.has(f)));

  const tricks = [];
  Object.values(L).forEach(l => l.schritte.forEach(s => { if (s.merkhilfe) tricks.push(s.merkhilfe.trick); }));
  const a0Tricks = [];
  A0.forEach(id => L[id].schritte.forEach(s => { if (s.merkhilfe) a0Tricks.push(s.merkhilfe.trick); }));
  t('A0 tricks: 15, all distinct', a0Tricks.length === 15 && new Set(a0Tricks).size === 15);

  const cov = win.DW_COVERAGE || [];
  const a0 = cov.find(c => c.level === 'A0');
  t('coverage table published: A0 ' + a0.items + '/' + a0.declared + ' (' + Math.round(a0.ratio * 100) + '%)', a0 && a0.ratio >= 0.8);

  const cards = win.DW_STEP_CARDS || {};
  const cardKeys = Object.keys(cards);
  t('step cards built for the flashcard steps: ' + cardKeys.length, cardKeys.length >= 5 && Object.values(cards).every(v => v[0].de && v[0].ar && v[0].level));
}

/* ---------- audited hand-written opening lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a0-u1-l1'];
  const vocabSteps = lesson.schritte.filter(s => s.phase === 'Wortschatz' && s.wortschatz);
  t('Corpus lesson a0-u1-l1 carries a complete 12-item lexical layer in four three-item Wortschatz groups',
    lesson.wortschatz.length === 12 &&
      vocabSteps.length === 4 &&
      vocabSteps.every(s => s.wortschatz.length === 3) &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])));
  const source = fs.readFileSync(ROOT + '/web/data/a0-u1-l1.js', 'utf8');
  t('Corpus lesson a0-u1-l1 teaches qualified V and ch pronunciation instead of false universal or reversed rules',
    source.includes('V = /f/ in Vater') &&
      source.includes('Video قد يُنطق فيها v مثل /v/') &&
      source.includes('صوت خلفي أقوى بعد a وo وu وau مثل Buch') &&
      source.includes('صوت أمامي رخو بعد e وi وä وö وü مثل ich') &&
      source.includes('في Vogel الحرف g هو /g/، وليس صوت الغين'));
  const germanLearnerStrings = lesson.schritte.flatMap(s => [s.zeigt && s.zeigt.de, ...(s.audio || [])]).filter(Boolean);
  t('Corpus lesson a0-u1-l1 keeps German learner strings free of Arabic script and removes the impossible every-word promise',
    germanLearnerStrings.every(x => !/[\u0600-\u06FF]/.test(x)) &&
      !source.includes('du liest jedes deutsche Wort richtig vor') &&
      source.includes('liest geübte deutsche Wörter mit den Lautregeln vor'));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  t('Corpus lesson a0-u1-l1 makes the stated 80 percent attainable with four of five checks and supplies a real flashcard plus homework fallback',
    checks.length === 5 &&
      checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس تساوي 80%') &&
      lesson.schritte.some(s => s.frage && s.frage.art === 'flashcard' && s.frage.de === 'Danke') &&
      lesson.schritte.find(s => s.phase === 'Hausaufgabe').erklaerung.includes('وإن لم يتوفر الموقف'));
}

/* ---------- audited A0 numbers and spelling lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a0-u1-l2'];
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  t('Corpus lesson a0-u1-l2 removes false usage claims and carries corrected weak-noun, clock-time and number examples',
    byWord.zwei.ex.includes('zwei Züge') && byWord.zwei.ex.includes('zwei Kaffees') &&
      byWord.sechs.ex === 'Sechs Kinder spielen.' &&
      byWord.buchstabieren.why.includes('Ihren Namen') &&
      byWord.fünfzehn.err === 'Der Zug fährt in fünfzehn Uhr.' &&
      byWord.vierzig.ex === 'Zwanzig plus zwanzig ist vierzig.' &&
      lesson.wortschatz.filter(it => it.de === 'zwanzig').length === 1);
  const allArabic = lesson.schritte.map(s => [s.erklaerung, ...(s.hinweise || [])].join(' ')).join(' ');
  t('Corpus lesson a0-u1-l2 states a bounded 0–20 goal and treats A wie Anna as optional clarification, not the only way to spell',
    lesson.schritte[0].zeigt.de.includes('von null bis zwanzig') &&
      lesson.schritte[5].erklaerung.includes('يمكن توضيح الحرف') &&
      lesson.schritte[5].vereinfachung.regel.includes('يجوز قول اسم الحرف وحده') &&
      !allArabic.includes('كل حرف يُقرن باسم واضح'));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  t('Corpus lesson a0-u1-l2 makes 80 percent exactly four of five and links every check to direct prior support',
    checks.length === 5 &&
      checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => s.frage && /^cap\.a0-u1-l2\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[4].frage.optionen.some(o => o.text === 'A wie Anna.'));
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const order = lesson.schritte.find(s => s.phase === 'Übungen' && s.frage && s.frage.art === 'wortstellung');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a0-u1-l2 aligns writing, speaking, summary, order work and homework with numbers plus spelling',
    writing.frage.prompt.includes('تهجّ اسمك') && writing.frage.minWords === 12 &&
      order.frage.correct.join(' ') === 'Ich bin zwanzig Jahre alt.' &&
      summary.zeigt.de.includes('A wie Anna') &&
      homework.zeigt.de === 'Zähle morgen laut von null bis zwanzig und buchstabiere deinen Namen.' &&
      lesson.schritte.find(s => s.phase === 'Produktion').erklaerung.includes('ثم اسمك، ثم تهجّه'));
}

/* ---------- audited A0 sein and heißen lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a0-u1-l3'];
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a0-u1-l3 teaches the real du form of heißen and removes the false a-to-ä mnemonic',
    byWord.heißen.why.includes('صيغة du هي heißt بحرف t') &&
      tricks.some(x => x.wie.includes('heißen ← du heißt') && x.warum.includes('s أو ß أو x أو z')) &&
      !tricks.some(x => x.trick.includes('a يصير ä') || x.wie.includes('fahren ← du fährst')));
  t('Corpus lesson a0-u1-l3 uses unambiguous plural, first-name, surname, age and place examples',
    byWord['sie sind'].ex.includes('Die Studenten') &&
      byWord['der Vorname'].err === 'Mein Vorname sind Sara.' &&
      byWord['der Nachname'].err === 'Meine Nachname ist Müller.' &&
      byWord['das Alter'].ex === 'Im Formular steht mein Alter.' &&
      byWord.wohnen.why.includes('in Sousse'));
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a0-u1-l3 aligns its bounded goal, writing, speaking, summary and fallback homework with sein plus heißen',
    lesson.schritte[0].zeigt.de.includes('mit den Verben sein und heißen') &&
      writing.frage.points.join(' ').includes('du bist') && writing.frage.minWords === 12 &&
      summary.zeigt.de.includes('ich heiße') &&
      lesson.schritte.find(s => s.phase === 'Produktion').erklaerung.includes('Wie heißt du?') &&
      homework.zeigt.de.includes('Ohne Gespräch: Schreib den Satz.'));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const orderChecks = checks.filter(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a0-u1-l3 makes 80 percent four of five with direct support and a single-sentence order check',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a0-u1-l3\.s\d+$/.test(s.frage.prereq || '')) &&
      orderChecks.length === 1 && orderChecks[0].frage.correct.join(' ') === 'Wie heißt du?' &&
      checks[4].frage.optionen.some(o => o.text === 'Du bist hier.'));
}

/* ---------- audited A0 countries and languages lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a0-u1-l4'];
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a0-u1-l4 corrects Ö, country articles, Tunis/Tunesien and language-article claims',
    byWord['Österreich'].why.includes('حرف Ö') &&
      byWord['die Schweiz'].why.includes('اسم بلد مؤنث') &&
      byWord.Tunesien.err === 'Ich komme aus der Tunesien.' &&
      byWord.Arabisch.why.includes('في هذا التركيب') &&
      byWord['die Hauptstadt'].why.includes('كلمة مركبة واحدة'));
  t('Corpus lesson a0-u1-l4 replaces false ending and blanket preposition mnemonics with contextual rules',
    tricks.some(x => x.wie.includes('die Niederlande') && x.warum.includes('لا تستنتج الأداة')) &&
      tricks.some(x => x.trick.includes('von للعودة من عند شخص')) &&
      tricks.some(x => x.trick.includes('بعد sprechen وlernen')) &&
      !tricks.some(x => x.wie.includes('كلها تنتهي بصوت')));
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a0-u1-l4 aligns goal, writing, speaking, summary and fallback homework with origin plus languages',
    lesson.schritte[0].zeigt.de.includes('sagst du, woher') &&
      writing.frage.points.includes('kommen aus') && writing.frage.minWords === 16 &&
      summary.zeigt.de.includes('Ich spreche') &&
      lesson.schritte.find(s => s.phase === 'Produktion').erklaerung.includes('ما اللغة التي تتكلمها') &&
      homework.zeigt.de.includes('Ohne Gespräch: Schreib zwei Sätze.'));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a0-u1-l4 makes 80 percent four of five with direct support and a one-sentence order check',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a0-u1-l4\.s\d+$/.test(s.frage.prereq || '')) &&
      orderCheck.frage.correct.join(' ') === 'Woher kommst du?' &&
      checks[4].frage.optionen.some(o => o.text === 'Ich spreche Arabisch.'));
}

/* ---------- audited A0 family and grammatical gender lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a0-u1-l5'];
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a0-u1-l5 uses a grammatical goal and accurate article guidance for four family members',
    lesson.schritte[0].zeigt.de === 'Am Ende nennst du vier Familienmitglieder mit dem richtigen Artikel' &&
      lesson.schritte[3].vereinfachung.regel === 'احفظ der مع Vater' &&
      lesson.schritte[5].vereinfachung.regel.includes('جنس الاسم النحوي'));
  t('Corpus lesson a0-u1-l5 corrects Großeltern, singular Onkel agreement and compound/Eltern mnemonics',
    byWord['die Großeltern'].ar.includes('الأجداد') &&
      byWord['der Onkel'].err === 'Mein Onkel wohnen in Berlin.' &&
      tricks.some(x => x.trick === 'رأس الاسم المركب في آخره' && x.wie.includes('الأداة والجمع يتبعان Mutter')) &&
      tricks.some(x => x.trick === 'Eltern اسم جمع' && x.wie.includes('ein Elternteil')) &&
      !tricks.some(x => x.warum.includes('الطريق الوحيد')));
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a0-u1-l5 aligns writing, speaking, summary and fallback homework with family articles',
    writing.frage.points.includes('صيغة جمع واحدة') && writing.frage.minWords === 16 &&
      summary.zeigt.de.includes('das Kind') &&
      lesson.schritte.find(s => s.phase === 'Produktion').erklaerung.includes('أربعة من أفراد العائلة') &&
      homework.zeigt.de.includes('Ohne Gespräch: Schreib die vier Wortgruppen.'));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a0-u1-l5 makes 80 percent four of five with direct support and a one-sentence order check',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a0-u1-l5\.s\d+$/.test(s.frage.prereq || '')) &&
      orderCheck.frage.correct.join(' ') === 'Das ist meine Familie.' &&
      checks[4].frage.optionen.some(o => o.text === 'Das ist das Kind.'));
}

/* ---------- audited A0 questions and answers lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a0-u1-l6'];
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a0-u1-l6 distinguishes a whole W-question phrase from one word and teaches verb-first yes/no order',
    lesson.schritte[3].vereinfachung.regel.includes('Wie المفردة') &&
      lesson.schritte.find(s => s.phase === 'Übungen' && s.frage && s.frage.art === 'wortstellung').erklaerung.includes('الفعل المصرف أولًا') &&
      lesson.schritte[5].vereinfachung.regel.includes('الفعل ثم الفاعل'));
  t('Corpus lesson a0-u1-l6 corrects wie, mit dem Verb, antworten and all three question mnemonics',
    byWord.wie.err === 'Wie du gehst?' &&
      byWord['die Ja/Nein-Frage'].why.includes('mit dem Verb') &&
      byWord.antworten.why.includes('auf + Akkusativ') &&
      tricks.some(x => x.trick === 'خريطة المكان والزمان') &&
      tricks.some(x => x.trick === 'بعد عبارة السؤال يأتي الفعل' && x.wie.includes('أكثر من كلمة')) &&
      tricks.find(x => x.trick === 'wann للسؤال وwenn للشرط').wie.startsWith('Wann'));
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a0-u1-l6 aligns writing, speaking, summary and fallback homework with both question types',
    writing.frage.points.includes('سؤال نعم/لا يبدأ بالفعل') && writing.frage.minWords === 12 &&
      summary.zeigt.de.includes('Bist du hier?') &&
      lesson.schritte.find(s => s.phase === 'Produktion').erklaerung.includes('ثم سؤال نعم/لا') &&
      homework.zeigt.de.includes('Ohne Gespräch: Schreib beide Fragen.'));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a0-u1-l6 makes 80 percent four of five with direct support and a one-sentence order check',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a0-u1-l6\.s\d+$/.test(s.frage.prereq || '')) &&
      orderCheck.frage.correct.join(' ') === 'Wie heißt du?' &&
      checks[4].frage.optionen.some(o => o.text === 'Wie viele Kinder hast du?'));
}

/* ---------- audited A1 regular-present lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u1-l1'];
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u1-l1 teaches the four regular present endings instead of claiming ich has no ending',
    lesson.schritte[0].zeigt.de.includes('ich, du, er/sie/es und wir') &&
      lesson.schritte[3].vereinfachung.regel.includes('تنتهي غالبًا بـ-e') &&
      lesson.schritte[6].vereinfachung.regel.includes('تنتهي بـ-en') &&
      !tricks.some(x => x.trick.includes('ich بلا نهاية')));
  t('Corpus lesson a1-u1-l1 qualifies infinitive-shaped wir and stem-changing strong verbs while correcting gehen and essen guidance',
    tricks.some(x => x.trick === 'wir يطابق المصدر كتابةً' && x.warum.includes('لا يعني غياب التصريف')) &&
      tricks.some(x => x.trick === 'بعض الأفعال القوية تغيّر الحركة' && x.warum.includes('لا تعمم')) &&
      byWord.gehen.why.includes('في عبارة الذهاب إلى العمل') &&
      byWord.essen.err === 'Er esst Brot mit Käse.');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u1-l1 aligns writing, speaking, summary, word order and homework with all four target persons',
    writing.frage.points.join(' ').includes('wir: -en') && writing.frage.minWords === 16 &&
      summary.zeigt.de.includes('du wohnst') && summary.zeigt.de.includes('wir wohnen') &&
      lesson.schritte.find(s => s.phase === 'Produktion').erklaerung.includes('أربع جمل قصيرة') &&
      lesson.schritte.find(s => s.phase === 'Übungen' && s.frage && s.frage.art === 'wortstellung').frage.correct.join(' ') === 'Du lernst Deutsch.' &&
      homework.zeigt.de.includes('ich, du, er oder sie und wir'));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u1-l1 makes 80 percent four of five with direct support and a one-sentence order check',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u1-l1\.s\d+$/.test(s.frage.prereq || '')) &&
      orderCheck.frage.correct.join(' ') === 'Ich wohne in Sousse.' &&
      checks[4].frage.optionen.some(o => o.text === 'Du lernst Deutsch.'));
}

/* ---------- audited A1 nicht/kein lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u1-l2'];
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u1-l2 distinguishes action, predicative-adjective and noun negation with inflected kein forms',
    lesson.schritte[0].zeigt.de.includes('eine Handlung, eine Eigenschaft und ein Nomen') &&
      lesson.schritte[3].zeigt.de === 'Ich trinke nicht.' &&
      lesson.schritte[4].zeigt.de === 'Das ist nicht teuer.' &&
      lesson.schritte[5].zeigt.de === 'Ich habe keinen Kaffee.' &&
      lesson.schritte[6].zeigt.de === 'Ich habe keine Zeit.');
  t('Corpus lesson a1-u1-l2 qualifies nicht placement and kein noun scope instead of teaching absolute position rules',
    tricks.some(x => x.trick === 'موضع nicht يتبع نطاق النفي' && x.warum.includes('لا توجد قاعدة «دائمًا في الآخر»')) &&
      tricks.some(x => x.trick.includes('kein للاسم النكرة هنا') && x.warum.includes('اسمًا نكرةً أو بلا أداة')) &&
      byWord.verstehen.err === 'Ich nicht verstehe die Frage.' &&
      byWord.verstehen.why.includes('عند نفي الفهم كله') &&
      byWord['der Tee'].why.includes('في النفي المحايد'));
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u1-l2 aligns writing, speaking, summary, word order and homework with both negators',
    writing.frage.points.includes('فعل مع nicht') && writing.frage.points.includes('اسم مع keinen') && writing.frage.minWords === 16 &&
      lesson.schritte.find(s => s.phase === 'Produktion').erklaerung.includes('جملتين بـnicht') &&
      summary.zeigt.de.includes('nicht teuer') && summary.zeigt.de.includes('keinen Kaffee') &&
      lesson.schritte.find(s => s.phase === 'Übungen' && s.frage && s.frage.art === 'wortstellung').frage.correct.join(' ') === 'Das ist nicht teuer.' &&
      homework.zeigt.de.includes('zwei Sätze mit nicht') && homework.zeigt.de.includes('zwei mit einer Form von kein'));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  t('Corpus lesson a1-u1-l2 makes 80 percent four of five with direct support and focused negation checks',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u1-l2\.s\d+$/.test(s.frage.prereq || '')) &&
      orderCheck.frage.correct.join(' ') === 'Ich habe keinen Kaffee.' &&
      clozeCheck.frage.zeigt === 'Ich trinke ____.' && clozeCheck.frage.nearMiss.kein &&
      checks[4].frage.optionen.some(o => o.text === 'Das ist nicht teuer.'));
}

/* ---------- audited A1 accusative-article lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u1-l3'];
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u1-l3 teaches the bounded den, das, die and einen accusative article forms in full sentences',
    lesson.title.de === 'Artikel im Akkusativ' &&
      lesson.schritte[0].zeigt.de.includes('die Artikelformen den, das, die und einen') &&
      lesson.schritte[3].zeigt.de === 'Ich sehe den Mann.' &&
      lesson.schritte[4].zeigt.de === 'Ich trinke das Wasser.' &&
      lesson.schritte[5].zeigt.de === 'Ich kaufe die Jacke.' &&
      lesson.schritte[6].zeigt.de === 'Ich habe einen Termin.');
  t('Corpus lesson a1-u1-l3 qualifies definite and indefinite changes without claiming the article is the only object marker',
    tricks.some(x => x.trick === 'في أدوات التعريف تتغير der وحدها' && x.wie.includes('der → den') && x.warum.includes('خاص بأدوات التعريف')) &&
      tricks.some(x => x.trick === 'ein تصير einen مع المذكر المنصوب' && x.wie.includes('einen Kuchen')) &&
      tricks.some(x => x.trick === 'حدّد الفاعل ثم المفعول به' && x.warum.includes('ليست الأداة العلامة الوحيدة')) &&
      byWord['der Schlüssel'].why.includes('في هذا المثال') && byWord['die Schuhe'].ar === 'الأحذية');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const order = lesson.schritte.find(s => s.phase === 'Übungen' && s.frage && s.frage.art === 'wortstellung');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u1-l3 aligns imitation, writing, speaking, summary, word order and homework with the four article forms',
    lesson.schritte.find(s => s.id === 's16').frage.nearMiss.der &&
      lesson.schritte.find(s => s.id === 's17').zeigt.de === 'Ich habe einen Termin.' &&
      writing.frage.familie === 'kasus' && writing.frage.points.length === 4 && writing.frage.minWords === 16 &&
      writing.frage.frage === 'اكتب أربع جمل بمفعول به.' && writing.hinweise[0].includes('فعلًا متعديًا') &&
      order.frage.correct.join(' ') === 'Ich habe einen Termin.' && order.hinweise[1].includes('einen Termin') &&
      lesson.schritte.find(s => s.phase === 'Produktion').erklaerung.includes('den وdas وdie وeinen') &&
      summary.zeigt.de.includes('die (feminin/Plural)') && homework.zeigt.de.includes('„einen“'));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  t('Corpus lesson a1-u1-l3 makes 80 percent four of five with direct support and one-sentence article checks',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u1-l3\.s\d+$/.test(s.frage.prereq || '')) &&
      orderCheck.frage.correct.join(' ') === 'Ich sehe den Mann.' &&
      clozeCheck.frage.zeigt === 'Ich nehme ____ Bluse.' && clozeCheck.frage.nearMiss.den &&
      checks[4].frage.optionen.some(o => o.text === 'Ich trinke das Wasser.'));
}

/* ---------- A1 — the second slice of the lexical layer ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  const rows = win.DW_SYLLABUS.lessons.filter(l => l.level === 'A1');
  let floorOk = true, itemsOk = true, stepsOk = true, ownOk = true;
  rows.forEach(row => {
    const lesson = L[row.id];
    const wl = lesson.wortschatz || [];
    if (wl.length < 14) floorOk = false;
    if (wl.length < Math.min(14, row.words.receptive)) ownOk = false;
    if (lesson.schritte.filter(s => s.wortschatz).length < 3) stepsOk = false;
    wl.forEach(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].forEach(k => { if (!it[k]) itemsOk = false; }));
  });
  t('A1: all ' + rows.length + ' lessons carry a word list on the 14-word floor', floorOk);
  t('A1: every item is complete to the last field', itemsOk);
  t('A1: every lesson has at least 3 Wortschatz steps', stepsOk);
  t('A1: every row meets the smaller of the floor and its own declared count', ownOk);

  const a1Tricks = [], a0Tricks = [];
  rows.forEach(row => L[row.id].schritte.forEach(s => { if (s.merkhilfe) a1Tricks.push(s.merkhilfe.trick); }));
  A0.concat(['a0-u1-l1']).forEach(id => (L[id] ? L[id].schritte : []).forEach(s => { if (s.merkhilfe) a0Tricks.push(s.merkhilfe.trick); }));
  t('A1 tricks: ' + a1Tricks.length + ', all distinct and none borrowed from A0',
    a1Tricks.length === rows.length * 3 && new Set(a1Tricks).size === a1Tricks.length && !a1Tricks.some(x => a0Tricks.includes(x)));

  const cov = (win.DW_COVERAGE || []).find(c => c.level === 'A1');
  t('coverage table published: A1 ' + cov.items + '/' + cov.declared + ' (' + Math.round(cov.ratio * 100) + '%)',
    cov && cov.ratio >= 0.8);
}

/* ---------- the word table in the DOM, the missing forms, the cards ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  const id = A0[4]; /* a0-u1-l6 */
  const lesson = L[id];
  /* open the last lesson of A0: everything before it is done, with evidence */
  const order = win.DW_SYLLABUS.lessons.map(l => l.id);
  const before = order.slice(0, order.indexOf(id));
  const S = win.DW.session.S;
  S.progress = before.map(x => ({ lessonId: x, state: 'completed' }));
  S.capabilities = before.map(x => ({ id: 'cap.' + x + '.core', evidence: 'E1', lastActive: '2026-10-02', history: [] }));
  S.capabilities.push({ id: 'cap.a0.sprechen.greeting20', evidence: 'E1', lastActive: '2026-10-02', history: [] });
  win.go('lesson');

  const steps = lesson.schritte;
  const showStep = i => {
    const p = (win.DW.session.S.progress || []).find(x => x.lessonId === id) || { lessonId: id, state: 'in_progress' };
    p.completedSteps = steps.slice(0, i).map(s => s.id);
    p.lastStepId = steps[i].id;
    const rest = (win.DW.session.S.progress || []).filter(x => x.lessonId !== id);
    win.DW.session.S.progress = rest.concat([p]);
    win.go('lesson');
  };
  const stepIndex = fn => steps.findIndex(fn);

  const wIdx = stepIndex(s => s.wortschatz && s.frage && s.frage.art === 'flashcard');
  showStep(wIdx);
  const rows = [...win.document.querySelectorAll('.vocab-row')];
  t('the word table renders a row per word', rows.length === steps[wIdx].wortschatz.length && rows.length >= 2);
  t('a row shows the German headword with its article and plural', /^(der|die|das)\s/.test(rows[0].querySelector('.vocab-de').textContent));
  t('a row shows the Arabic gloss', rows[0].querySelector('.vocab-ar').textContent.trim().length > 1);
  t('a row has a listen button', !!rows[0].querySelector('.vocab-say'));
  rows[0].querySelector('.vocab-toggle').click();
  t('the example and the usual error open on demand',
    rows[0].querySelector('.vocab-ex').textContent.length > 3 &&
    rows[0].querySelector('.vocab-err').textContent.indexOf('✗') === 0 &&
    rows[0].querySelector('.vocab-why').textContent.length > 3);
  t('the flashcard direction is receptive (German → Arabic)', win.document.querySelector('.fc').textContent.trim() === steps[wIdx].frage.de);
  clickText(win, 'أعرف');
  const cards = win.DW.session.S.srs.cards || [];
  const introduced = cards.find(c => c.de === steps[wIdx].frage.de);
  t('the word entered the review queue with its level', !!introduced && introduced.level === 'A0');
  t('next is enabled after the card', !win.document.querySelector('#next').disabled);

  const oIdx = stepIndex(s => s.frage && s.frage.art === 'wortstellung');
  showStep(oIdx);
  const want = steps[oIdx].frage.correct;
  want.forEach(w => {
    const b = [...win.document.querySelectorAll('.pool .token')].find(x => x.textContent === w);
    b.click();
  });
  clickText(win, 'تحقّق');
  const orderBox = win.document.querySelector('#q');
  t('word order: the built sentence is judged correct', !!win.document.querySelector('.layer.good'),
    orderBox ? orderBox.textContent.slice(0, 160) : 'no exercise box');
  if (!win.document.querySelector('.layer.good')) console.log('    DEBUG order:', JSON.stringify({ want: want, shown: win.document.querySelector('#q').textContent.slice(0, 200) }));

  const cIdx = stepIndex(s => s.frage && s.frage.art === 'cloze' && s.phase === 'Übungen');
  showStep(cIdx);
  const shown = [...win.document.querySelectorAll('.card .zeigt')].some(n => n.textContent.indexOf('____') >= 0);
  t('the cloze shows the sentence with a visible gap', shown);
  win.document.querySelector('.inp').value = steps[cIdx].frage.antworten[0];
  clickText(win, 'تحقّق');
  t('the cloze accepts the word and explains why', !!win.document.querySelector('.layer.good'));

  const wIdx2 = stepIndex(s => s.frage && s.frage.art === 'schreiben');
  showStep(wIdx2);
  const area = win.document.querySelector('textarea.write');
  t('writing opens a text area with a word floor', !!area && /الحد الأدنى/.test(win.document.body.textContent));
  area.value = 'ich heiße Sara. Ich komme aus Tunesien. Ich wohne in Sousse. Ich lerne die Zahl.';
  clickText(win, 'احفظ وافحص');
  const out = win.document.querySelector('.checker-out');
  t('writing runs the 30-pattern check and states its limit',
    !!out && /حدّ الفحص/.test(out.textContent) && !/صحّحتُ|corrected/.test(out.textContent));
  t('the writing check names the rule it found', /orth\.sentence\.lower|orth\.noun\.lower|Ich/.test(out.textContent));

  const iIdx = stepIndex(s => s.frage && s.frage.art === 'matching' && s.phase === 'Wortschatz');
  showStep(iIdx);
  const cols = [...win.document.querySelectorAll('.mcol')];
  let ok = cols.length === 2;
  for (let g = 0; g < 12; g++) {
    const left = [...cols[0].children].find(x => !x.classList.contains('done'));
    if (!left) break;
    left.click();
    const pair = steps[iIdx].frage.paare.find(p => p.links === left.textContent);
    const right = [...cols[1].children].find(r => r.textContent === pair.rechts && !r.classList.contains('done'));
    if (!right) { ok = false; break; }
    right.click();
  }
  t('matching pairs the word list with its glosses', ok && !!win.document.querySelector('.layer.good'));
}

/* ---------- the engine still answers honestly after the new forms ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  const id = A0[0];
  const lesson = L[id];
  const steps = lesson.schritte;
  const order = win.DW_SYLLABUS.lessons.map(l => l.id);
  const before = order.slice(0, order.indexOf(id));
  const S = win.DW.session.S;
  S.progress = before.map(x => ({ lessonId: x, state: 'completed' }));
  S.capabilities = before.map(x => ({ id: 'cap.' + x + '.core', evidence: 'E1', lastActive: '2026-10-02', history: [] }))
    .concat([{ id: 'cap.a0.sprechen.greeting20', evidence: 'E1', lastActive: '2026-10-02', history: [] }]);
  win.go('lesson');

  const idx = steps.findIndex(s => s.frage && s.frage.art === 'flashcard');
  const p = { lessonId: id, state: 'in_progress', completedSteps: steps.slice(0, idx).map(s => s.id), lastStepId: steps[idx].id };
  win.DW.session.S.progress = S.progress.filter(x => x.lessonId !== id).concat([p]);
  win.go('lesson');
  clickText(win, 'لا أعرف');
  const st = win.DW.session.S;
  t('a missed card lands in the ledger as a live error, not as a silent pass',
    (st.errorLedger || []).length === 1 && st.errorLedger[0].status === 'watched');
  t('a missed card never claims E1', !(st.capabilities || []).some(c => c.id.indexOf(id) === 0 && c.evidence === 'E1' && /flashcard/.test(c.id)));
  t('the miss is explained in Arabic', /الجواب والمثال|نسيان/.test(win.document.body.textContent));
}

/* ---------- A2 — the third slice of the lexical layer ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  const rows = win.DW_SYLLABUS.lessons.filter(l => l.level === 'A2');
  let floorOk = true, itemsOk = true, stepsOk = true, ownOk = true, countOk = true;
  rows.forEach(row => {
    const lesson = L[row.id];
    const wl = lesson.wortschatz || [];
    if (wl.length < 16) floorOk = false;
    if (wl.length < Math.min(16, row.words.receptive)) ownOk = false;
    if (wl.length !== row.words.receptive) countOk = false;
    if (lesson.schritte.filter(s => s.wortschatz).length < 3) stepsOk = false;
    wl.forEach(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].forEach(k => { if (!it[k]) itemsOk = false; }));
  });
  t('A2: all ' + rows.length + ' lessons carry a word list on the 16-word floor', floorOk);
  t('A2: every item is complete to the last field', itemsOk);
  t('A2: every lesson has at least 3 Wortschatz steps', stepsOk);
  t('A2: every row meets the smaller of the floor and its own declared count', ownOk);
  t('A2: every row matches its own declared count exactly', countOk);

  const a2Tricks = [], olderTricks = [];
  rows.forEach(row => L[row.id].schritte.forEach(s => { if (s.merkhilfe) a2Tricks.push(s.merkhilfe.trick); }));
  win.DW_SYLLABUS.lessons.filter(l => l.level === 'A0' || l.level === 'A1')
    .concat([{ id: 'a0-u1-l1' }])
    .forEach(row => (L[row.id] ? L[row.id].schritte : []).forEach(s => { if (s.merkhilfe) olderTricks.push(s.merkhilfe.trick); }));
  t('A2 tricks: ' + a2Tricks.length + ', all distinct and none borrowed from A0/A1',
    a2Tricks.length === rows.length * 3 && new Set(a2Tricks).size === a2Tricks.length && !a2Tricks.some(x => olderTricks.includes(x)));

  const cov = (win.DW_COVERAGE || []).find(c => c.level === 'A2');
  t('coverage table published: A2 ' + cov.items + '/' + cov.declared + ' (' + Math.round(cov.ratio * 100) + '%)',
    cov && cov.ratio >= 0.8);
}

/* ---------- B1 — the fourth slice of the lexical layer ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  const rows = win.DW_SYLLABUS.lessons.filter(l => l.level === 'B1');
  const ported = rows.filter(r => (L[r.id].wortschatz || []).length > 0);
  let itemsOk = true, stepsOk = true, countOk = true, tricksOk = true;
  ported.forEach(row => {
    const lesson = L[row.id];
    const wl = lesson.wortschatz || [];
    /* The map row declares its own count (unit 10 reads 37 and 36), and the compiler
       balances the list at most four words per step, so the step count is derived. */
    if (wl.length !== (row.words ? row.words.receptive : 40)) countOk = false;
    if (lesson.schritte.filter(s => s.wortschatz).length !== Math.ceil(wl.length / 4)) stepsOk = false;
    wl.forEach(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].forEach(k => { if (!it[k]) itemsOk = false; }));
    const tr = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe.trick);
    if (tr.length < 3 || new Set(tr).size !== tr.length) tricksOk = false;
  });
  t('B1: all ' + rows.length + ' lessons carry the lexical layer', ported.length === rows.length);
  t('B1: every ported item is complete to the last field', itemsOk);
  t('B1: every ported lesson carries exactly its declared words', countOk);
  t('B1: every ported lesson splits them over at most four words per step', stepsOk);
  t('B1: every ported lesson carries distinct Merkhilfen', tricksOk);

  const cov = (win.DW_COVERAGE || []).find(c => c.level === 'B1');
  t('coverage table published: B1 ' + cov.items + '/' + cov.declared + ' (' + Math.round(cov.ratio * 100) + '%)',
    cov && cov.ratio >= 0.8);
}

/* ---------- B2 vocabulary — route (C)'s two measures, against the floor ---------- */
{
  const { window: win } = boot();
  const floor = JSON.parse(fs.readFileSync(ROOT + '/tools/b2-vocab-floor.json', 'utf8'));
  const VOCAB = require('./vocab-b2.js');
  const ids = Object.keys(VOCAB).sort();
  const B2 = win.DW_LIBRARY && win.DW_LIBRARY.B2;
  const declared = {};
  (win.DW_SYLLABUS.lessons || []).forEach(l => { if (l.words && l.words.receptive) declared[l.id] = l.words.receptive; });
  const authored = ids.reduce((s, id) => s + (VOCAB[id].items || []).length, 0);
  const material = ids.reduce((s, id) => s + (VOCAB[id].material || []).length, 0);
  const tricks = ids.reduce((s, id) => s + (VOCAB[id].tricks || []).length, 0);
  const perRowOk = ids.every(id => (VOCAB[id].items || []).length === floor.authoredPerWorkshop &&
    (VOCAB[id].material || []).length === floor.materialPerWorkshop &&
    declared[id] === (VOCAB[id].items || []).length + (VOCAB[id].material || []).length);
  t('B2 vocab: ' + ids.length + ' workshops, floor ' + floor.workshops, ids.length >= floor.workshops);
  t('B2 vocab: authored ' + authored + ', floor ' + floor.authoredTotal, authored >= floor.authoredTotal);
  t('B2 vocab: verified material words ' + material + ', floor ' + floor.materialTotal, material >= floor.materialTotal);
  t('B2 vocab: level measured ' + (authored + material) + ', floor ' + floor.measuredTotal,
    authored + material >= floor.measuredTotal);
  t('B2 vocab: every workshop is 40 authored + 50 material = its declared 90', perRowOk);
  t('B2 vocab: the authored column is at the template ceiling, not below it (' + floor.authoredPerWorkshop + '/workshop)',
    ids.every(id => (VOCAB[id].items || []).length >= floor.authoredPerWorkshop));
  t('B2 vocab: each workshop carries 3 tricks with a German anchor', ids.every(id =>
    (VOCAB[id].tricks || []).length === 3 &&
    VOCAB[id].tricks.every(tr => tr.trick && tr.wie && tr.warum && tr.anchor && !/[\u0600-\u06FF]/.test(tr.anchor))));
  t('B2 vocab: the level is wired into the compiled catalogue',
    !!(B2 && B2.articles) && ids.every(id => !!win.DW_LESSONS[id]) && tricks >= floor.tricks * ids.length / 20 - 0.5);
}

/* ---------- B2 reading — the level's own material measure ---------- */
{
  const { window: win } = boot();
  const B2 = win.DW_LIBRARY.B2;
  const floor = JSON.parse(fs.readFileSync(ROOT + '/tools/b2-reading-floor.json', 'utf8'));
  const wc = s => String(s).trim().split(/\s+/).filter(Boolean).length;
  const arts = B2.articles || [];
  const chs = (B2.novel && B2.novel.chapters) || [];
  const shortest = (list) => list.length ? Math.min.apply(null, list.map(x => wc(x.body))) : 0;
  const total = (list) => list.reduce((s, x) => s + wc(x.body), 0);
  t('B2 reading: 20 articles and a six-chapter novella', arts.length === 20 && chs.length === 6);
  t('B2 reading: every text carries exactly two questions',
    arts.concat(chs).every(x => (x.questions || []).length === 2));
  t('B2 reading: shortest article ' + shortest(arts) + ' words, floor ' + floor.article,
    arts.every(a => wc(a.body) >= floor.article));
  t('B2 reading: shortest chapter ' + shortest(chs) + ' words, floor ' + floor.chapter,
    chs.every(c => wc(c.body) >= floor.chapter));
  t('B2 reading: articles total ' + total(arts) + ' words, floor ' + floor.articlesTotal,
    total(arts) >= floor.articlesTotal);
  t('B2 reading: novella total ' + total(chs) + ' words, floor ' + floor.novelTotal,
    total(chs) >= floor.novelTotal);
  /* §13.3's 98% rule has one implementation — tools/measure-b2-reading.js — and it
     runs inside npm test before this file. What is checked here is that the floor
     file still carries the coverage keys, so the measure cannot lose them quietly. */
  t('B2 reading: the floor records the 98% rule (articles ' + (floor.articlesLowestPermille / 10) +
    '% · novella ' + (floor.chaptersLowestPermille / 10) + '%)',
    Number.isFinite(floor.articlesLowestPermille) && Number.isFinite(floor.chaptersLowestPermille) &&
    floor.articlesLowestPermille > 0 && floor.chaptersLowestPermille > 0);
}

/* ---------- A1 reading questions — keys must be grounded in their source text ---------- */
{
  const { window: win } = boot();
  const texts = Object.fromEntries(win.DW_LIBRARY.A1.map(x => [x.id, x]));
  const q = (id, n) => texts[id].questions[n];
  t('A1 a1-r2 asks the price actually stated for coffee',
    q('a1-r2', 1).prompt.includes('سعر القهوة') && q('a1-r2', 1).key === '2 يورو' &&
      texts['a1-r2'].body.includes('Ein Kaffee kostet zwei Euro'));
  t('A1 a1-r3 asks for the party day stated by the invitation',
    q('a1-r3', 1).prompt.includes('متى الحفل') && q('a1-r3', 1).key === 'السبت' &&
      texts['a1-r3'].body.includes('Am Samstag mache ich eine laute Party.'));
  t('A1 a1-r7 asks what the speaker buys before the party',
    q('a1-r7', 1).prompt.includes('المتكلم') && q('a1-r7', 1).key === 'ماء' &&
      texts['a1-r7'].body.includes('Ich kaufe noch Wasser'));
  t('A1 a1-r7 closes the invitation after all of its follow-up text',
    texts['a1-r7'].body.endsWith('Beim nächsten Mal laden wir auch die netten Nachbarn wieder ein. Viele Grüße, Sara und Ben.') &&
      texts['a1-r7'].body.indexOf('Viele Grüße, Sara und Ben.') === texts['a1-r7'].body.lastIndexOf('Viele Grüße, Sara und Ben.'));
  t('A1 a1-r7 asks for the Saturday party day stated in the invitation',
    q('a1-r7', 0).prompt.includes('متى الاحتفال') && q('a1-r7', 0).key === 'السبت' &&
      texts['a1-r7'].body.includes('am Samstag feiern wir meinen Geburtstag'));
  t('A1 a1-r8 questions match the first action and evening drink',
    q('a1-r8', 0).prompt.includes('تغسل أولًا') && q('a1-r8', 0).key === 'الخضار' &&
      q('a1-r8', 1).prompt.includes('في المساء') && q('a1-r8', 1).key === 'الماء' &&
      texts['a1-r8'].body.includes('Zuerst wasche ich das ganze Gemüse') &&
      texts['a1-r8'].body.includes('Am Abend trinke ich noch ein gutes Glas kaltes Wasser'));
  t('A1 a1-r9 asks for the work bus time stated in the schedule',
    q('a1-r9', 0).prompt.includes('حافلة العمل') && q('a1-r9', 0).key === 'السابعة' &&
      texts['a1-r9'].body.startsWith('Der Bus kommt um sieben Uhr'));
  t('A1 a1-r9 softens the absolute bus claim while keeping Monday’s bus trip possible',
    texts['a1-r9'].body.includes('Der Bus am Morgen ist oft voll, deshalb nehme ich lieber den Zug') &&
      texts['a1-r9'].body.includes('Am Montag fahre ich mit dem Bus zur Arbeit'));
  t('A1 a1-r9 duration question matches the stated twenty-minute journey',
    q('a1-r9', 1).prompt.includes('كم تستغرق الرحلة') && q('a1-r9', 1).key === 'عشرون دقيقة' &&
      texts['a1-r9'].body.includes('Die Fahrt dauert zwanzig Minuten'));
  t('A1 a1-r10 verifies the explicit bed-rest duration',
    q('a1-r10', 1).prompt.includes('كم يومًا') && q('a1-r10', 1).key === 'يومان' &&
      texts['a1-r10'].body.includes('Bleiben Sie zwei Tage'));
  t('A1 a1-r10 illness question matches the stated fever and illness',
    q('a1-r10', 0).prompt === 'ما حالها؟' && q('a1-r10', 0).key === 'مريضة' &&
      texts['a1-r10'].body.includes('ich bin krank') && texts['a1-r10'].body.includes('Ich habe Fieber'));
  t('A1 a1-r10 closes the email after its recovery timeline',
    texts['a1-r10'].body.endsWith('Am Montag bin ich dann wirklich wieder ganz früh im Kurs. Vielen Dank und viele Grüße, Sara.') &&
      texts['a1-r10'].body.indexOf('Vielen Dank und viele Grüße, Sara.') === texts['a1-r10'].body.lastIndexOf('Vielen Dank und viele Grüße, Sara.'));
  t('A1 a1-r11 asks where she shops and for the total purchase price',
    q('a1-r11', 0).key === 'في السوق' && texts['a1-r11'].body.includes('auf den vollen Markt') &&
      q('a1-r11', 1).prompt === 'كم ثمن المشتريات؟' && q('a1-r11', 1).key === 'اثنا عشر يورو' &&
      texts['a1-r11'].body.includes('Zusammen macht das zwölf Euro'));
  t('A1 a1-r11 states a twenty-euro note and consistent eight-euro change',
    texts['a1-r11'].body.includes('mit einem alten Zwanzig-Euro-Schein und bekomme acht Euro zurück') && 12 + 8 === 20);
  t('A1 a1-r12 commute question matches the stated bus journey',
    q('a1-r12', 0).prompt.includes('كيف يذهب إلى العمل') && q('a1-r12', 0).key === 'بالباص' &&
      texts['a1-r12'].body.includes('mit dem alten Bus'));
  t('A1 a1-r12 workday question matches Friday ending at three',
    q('a1-r12', 1).prompt.includes('حتى الثالثة') && q('a1-r12', 1).key === 'الجمعة' &&
      texts['a1-r12'].body.includes('Am Freitag arbeite ich nur bis drei Uhr'));
  t('A1 a1-r13 half-hour walk question matches the spring routine',
    q('a1-r13', 0).prompt.includes('يمشي كل يوم نصف ساعة') && q('a1-r13', 0).key === 'في الربيع' &&
      texts['a1-r13'].body.includes('Im Frühling gehe ich allein jeden Tag eine halbe Stunde zu Fuß'));
  t('A1 a1-r13 January travel question matches the southern destination',
    q('a1-r13', 1).prompt.includes('في يناير') && q('a1-r13', 1).key === 'إلى الجنوب' &&
      texts['a1-r13'].body.includes('Im Januar fahre ich in den Süden'));
  t('A1 a1-r14 doctor question matches fever and sore throat',
    q('a1-r14', 0).prompt.includes('ماذا يقول للطبيب') && q('a1-r14', 0).key === 'الحمّى والحلق' &&
      texts['a1-r14'].body.includes('Was fehlt Ihnen?') &&
      texts['a1-r14'].body.includes('Ich habe Fieber und mein armer Hals tut weh'));
  t('A1 a1-r14 pill-frequency question matches three times a day',
    q('a1-r14', 1).prompt.includes('كم مرة يأخذ الحبوب') && q('a1-r14', 1).key === 'ثلاث مرات' &&
      texts['a1-r14'].body.includes('nehmen Sie die Tabletten dreimal am Tag'));
  t('A1 a1-r15 weekend-visit question matches Sunday',
    q('a1-r15', 0).prompt.includes('متى يزور الأهل') && q('a1-r15', 0).key === 'الأحد' &&
      texts['a1-r15'].body.includes('Am Sonntag besuchen wir meine lieben Eltern'));
  t('A1 a1-r15 film question specifies Saturday evening',
    q('a1-r15', 1).prompt === 'ماذا يشاهد مساء السبت؟' && q('a1-r15', 1).key === 'فيلمًا' &&
      texts['a1-r15'].body.indexOf('Am Samstag') < texts['a1-r15'].body.indexOf('Am Abend sehen wir einen neuen Film') &&
      texts['a1-r15'].body.indexOf('Am Abend sehen wir einen neuen Film') < texts['a1-r15'].body.indexOf('Am Sonntag besuchen wir meine lieben Eltern'));
  t('A1 a1-r16 winter-evening question distinguishes the bus from the bicycle',
    q('a1-r16', 0).prompt === 'كيف يعود مساءً في الشتاء؟' && q('a1-r16', 0).key === 'بالباص' &&
      texts['a1-r16'].body.includes('Am Abend fahre ich mit dem Fahrrad') &&
      texts['a1-r16'].body.includes('Im Winter nehme ich den Bus, auch am Abend, weil es heute zu kalt ist'));
  t('A1 a1-r16 monthly-pass question matches Friday',
    q('a1-r16', 1).prompt.includes('متى يشتري بطاقة الشهر') && q('a1-r16', 1).key === 'الجمعة' &&
      texts['a1-r16'].body.includes('Am Freitag kaufe ich eine günstige Karte für den Monat'));
  t('A1 a1-r17 course-days question matches Monday and Wednesday',
    q('a1-r17', 0).key === 'الاثنين والأربعاء' &&
      texts['a1-r17'].body.includes('Der Kurs ist am Montag und am Mittwoch, von sechs Uhr bis halb acht'));
  t('A1 a1-r17 after-course question matches homework together',
    q('a1-r17', 1).key === 'الواجبات مع زملاء' &&
      texts['a1-r17'].body.includes('Nach dem kurzen Kurs machen wir oft die langen Hausaufgaben zusammen in einem alten Café'));
  t('A1 a1-r18 upstairs-family question matches the neighbors',
    q('a1-r18', 0).key === 'عائلة بأطفال' &&
      texts['a1-r18'].body.includes('Die junge Familie oben hat zwei Kinder, sie sind sechs und neun Jahre alt'));
  t('A1 a1-r18 summer question matches the shared courtyard meal',
    q('a1-r18', 1).key === 'يأكلون في الحوش معًا' &&
      texts['a1-r18'].body.includes('Im Sommer essen wir im Hof zusammen'));
  t('A1 a1-r18 ends with a clear, grammatical neighbor sentence',
    texts['a1-r18'].body.includes('Jeder passt auch immer besser auf das Haus auf') &&
      texts['a1-r18'].body.includes('die Nachbarn helfen zusammen') &&
      !texts['a1-r18'].body.includes('einfach immer zusammen wirklich ganz viel besser'));
  t('A1 a1-r19 age question matches thirty',
    q('a1-r19', 0).key === 'ثلاثون' && texts['a1-r19'].body.includes('Sie wird dreißig'));
  t('A1 a1-r19 cake question matches the brother bringing it',
    q('a1-r19', 1).key === 'أخوه' && texts['a1-r19'].body.includes('Mein Bruder bringt einen großen Kuchen mit'));
  t('A1 a1-r20 identifies the red shirt before the family comment',
    texts['a1-r20'].body.includes('Die Verkäuferin bringt ein anderes rotes Hemd') &&
      texts['a1-r20'].body.includes('Das rote Hemd ist schön'));
  t('A1 a1-r20 shirt-size question matches the first shirt',
    q('a1-r20', 0).key === 'صغير جدًا' && texts['a1-r20'].body.includes('Das bequeme Hemd ist zu klein'));
  t('A1 a1-r20 payment question matches paying by card',
    q('a1-r20', 1).key === 'بالبطاقة' && texts['a1-r20'].body.includes('Kann ich mit Karte bezahlen?') &&
      texts['a1-r20'].body.includes('Ich bezahle und bekomme einen echten Beleg'));
  t('A1 a1-r20 pants reference keeps feminine pronouns',
    texts['a1-r20'].body.includes('Sie ist nicht perfekt, aber sie passt') &&
      !texts['a1-r20'].body.includes('Es ist nicht perfekt, aber es passt'));
  const a2Texts = Object.fromEntries(win.DW_LIBRARY.A2.map(x => [x.id, x]));
  const a2q = (id, n) => a2Texts[id].questions[n];
  const known = require(ROOT + '/tools/known.js');
  const a2Known = known.knownWords(win, { upto: 'A2' });
  t('Corpus A2 a2-r1 travel-day question matches Friday in Berlin',
    a2q('a2-r1', 0).prompt === 'في أي يوم سافر إلى برلين؟' && a2q('a2-r1', 0).key === 'الجمعة' &&
      a2Texts['a2-r1'].body.includes('Ich bin am Freitag mit dem schnellen Zug nach Berlin gefahren'));
  t('Corpus A2 a2-r1 journey-duration question matches three hours',
    a2q('a2-r1', 1).prompt === 'كم استغرقت الرحلة؟' && a2q('a2-r1', 1).key === 'ثلاث ساعات' &&
      a2Texts['a2-r1'].body.includes('Die ganze Fahrt hat drei lange Stunden gedauert'));
  t('Corpus A2 a2-r2 symptom question matches the stated cough and headache',
    a2q('a2-r2', 0).prompt === 'ما الأعراض التي يذكرها النص؟' && a2q('a2-r2', 0).key === 'السعال والصداع' &&
      a2Texts['a2-r2'].body.includes('Husten') && a2Texts['a2-r2'].body.includes('mein Kopf tut weh'));
  t('Corpus A2 a2-r3 Saturday destination question matches the seaside trip',
    a2q('a2-r3', 0).key === 'إلى البحر' && a2Texts['a2-r3'].body.includes('Am Samstag sind wir ans schöne Meer gefahren'));
  t('Corpus A2 a2-r3 Sunday question matches staying at home',
    a2q('a2-r3', 1).key === 'في البيت' && a2Texts['a2-r3'].body.includes('Am Sonntag sind wir zu Hause geblieben'));
  t('Corpus A2 a2-r4 office-time question matches eight o’clock',
    a2q('a2-r4', 0).prompt === 'متى يجب أن تكون في المكتب؟' && a2q('a2-r4', 0).key === 'الثامنة' &&
      a2Texts['a2-r4'].body.includes('um acht Uhr im ruhigen Büro sein'));
  t('Corpus A2 a2-r4 difficulty question matches work being not difficult',
    a2q('a2-r4', 1).prompt === 'كيف تصف صعوبة العمل؟' && a2q('a2-r4', 1).key === 'ليس صعبًا' &&
      a2Texts['a2-r4'].body.includes('Die Arbeit ist wirklich nicht schwer'));
  t('Corpus A2 a2-r5 apartment-floor question matches the third floor',
    a2q('a2-r5', 0).prompt === 'في أي طابق تقع الشقة؟' && a2q('a2-r5', 0).key === 'الثالث' &&
      a2Texts['a2-r5'].body.includes('Sie ist im dritten Stock'));
  t('Corpus A2 a2-r5 neighbor question matches quiet and friendly',
    a2q('a2-r5', 1).prompt === 'كيف الجيران؟' && a2q('a2-r5', 1).key === 'هادئون وودودون' &&
      a2Texts['a2-r5'].body.includes('Die Nachbarn sind ruhig und freundlich'));
  t('Corpus A2 a2-r6 party-day question matches the Saturday event',
    a2q('a2-r6', 0).prompt === 'متى الحفل؟' && a2q('a2-r6', 0).key === 'السبت' &&
      a2Texts['a2-r6'].body.startsWith('Letzten Samstag ist meine Schwester dreißig Jahre alt geworden'));
  t('Corpus A2 a2-r6 surprise question matches the sister not knowing',
    a2q('a2-r6', 1).prompt === 'هل تعرف الأخت عن الحفل؟' && a2q('a2-r6', 1).key === 'لا' &&
      a2Texts['a2-r6'].body.includes('Meine Schwester wusste nichts. Wir haben es ihr nicht gesagt'));
  t('Corpus A2 a2-r6 corrects the photo collocation and keeps the event retrospective',
    a2Texts['a2-r6'].body.includes('Danach haben wir Fotos gemacht') &&
      !a2Texts['a2-r6'].body.includes('Danach schreiben wir Fotos') &&
      a2Texts['a2-r6'].body.startsWith('Letzten Samstag ist meine Schwester'));
  t('Corpus A2 a2-r7 asks what the speaker took instead of the bicycle',
    a2q('a2-r7', 0).prompt === 'ماذا أخذ المتكلم بدلًا من الدراجة إلى العمل؟' &&
      a2q('a2-r7', 0).key === 'الحافلة القديمة' &&
      a2Texts['a2-r7'].body.includes('mit dem schnellen Fahrrad zur Arbeit fahren, aber ich habe den alten Bus genommen'));
  t('Corpus A2 a2-r7 asks when they planned the park walk',
    a2q('a2-r7', 1).prompt === 'متى أرادوا الذهاب إلى الحديقة؟' &&
      a2q('a2-r7', 1).key === 'في اليوم التالي' &&
      a2Texts['a2-r7'].body.includes('Am nächsten Tag sollte die Sonne wieder scheinen. Dann wollten wir in den Park gehen'));
  t('Corpus A2 a2-r7 keeps the rain timeline retrospective and links the forecast to day four',
    a2Texts['a2-r7'].body.startsWith('Es hat schon drei Tage geregnet') &&
      a2Texts['a2-r7'].body.includes('Am vierten Tag ist der starke Regen weniger geworden') &&
      !a2Texts['a2-r7'].body.includes('Morgen soll die Sonne wieder scheinen'));
  t('Corpus A2 a2-r8 location question matches the bag left under the train seat',
    a2q('a2-r8', 0).prompt === 'أين ترك الحقيبة؟' && a2q('a2-r8', 0).key === 'تحت المقعد' &&
      a2Texts['a2-r8'].body.includes('unter dem engen Sitz gelassen'));
  t('Corpus A2 a2-r8 asks what happened without inventing the finder’s gender',
    a2q('a2-r8', 1).prompt === 'ما الذي حدث للحقيبة بعد أن فقدها؟' &&
      a2q('a2-r8', 1).key === 'عثر عليها شخص' &&
      a2Texts['a2-r8'].body.includes('dass jemand die schwarze Tasche gefunden hat'));
  t('Corpus A2 a2-r9 course-start question matches six o’clock',
    a2q('a2-r9', 0).prompt === 'متى تبدأ الدورة؟' && a2q('a2-r9', 0).key === 'السادسة' &&
      a2Texts['a2-r9'].body.includes('Der Kurs beginnt um sechs Uhr'));
  t('Corpus A2 a2-r9 does not infer total understanding from understanding more',
    a2q('a2-r9', 1).prompt === 'هل تفهم كل شيء؟' && a2q('a2-r9', 1).key === 'النص لا يقول' &&
      a2Texts['a2-r9'].body.includes('ich verstehe jetzt viel mehr als am Anfang'));
  t('Corpus A2 a2-r9 replaces the impossible blank page with a readable whole page',
    a2Texts['a2-r9'].body.includes('jeden Abend eine ganze Seite') &&
      !a2Texts['a2-r9'].body.includes('jeden Abend eine leere Seite'));
  t('Corpus A2 a2-r10 market question names all four regular purchases',
    a2q('a2-r10', 0).prompt === 'ما الأشياء الأربعة التي تشتريها عادةً من السوق؟' &&
      a2q('a2-r10', 0).key === 'فواكه وخضارًا وخبزًا وجبنًا' &&
      a2q('a2-r10', 0).options[0] === a2q('a2-r10', 0).key &&
      a2Texts['a2-r10'].body.includes('Dort kaufe ich Obst, Gemüse, Brot und Käse'));
  t('Corpus A2 a2-r10 asks about the completed card payment and states the amount once',
    a2q('a2-r10', 1).prompt === 'بماذا دفعت؟' && a2q('a2-r10', 1).key === 'بالبطاقة' &&
      a2Texts['a2-r10'].body.includes('Ich habe mit Karte bezahlt. Das waren genau zehn Euro.') &&
      !a2Texts['a2-r10'].body.includes('Ich habe mit Karte bezahlt und zehn Euro bezahlt'));
  t('Corpus A2 a2-r10 keeps the noon return and lunch in a consistent past sequence',
    a2Texts['a2-r10'].body.includes('Um zwölf Uhr bin ich wieder nach Hause gekommen und habe das leckere Mittagessen gemacht') &&
      !a2Texts['a2-r10'].body.includes('Um zwölf Uhr bin ich wieder zu Hause und koche'));
  t('Corpus A2 a2-r10 distinguishes the last Tuesday, next Tuesday, next Monday, and next Saturday',
    a2Texts['a2-r10'].body.includes('Brot für den nächsten Montag') &&
      a2Texts['a2-r10'].body.includes('Letzten Dienstag habe ich auf dem Markt frischen Fisch gekauft') &&
      a2Texts['a2-r10'].body.includes('Der Markt ist nächsten Dienstag wieder offen') &&
      a2Texts['a2-r10'].body.includes('Nächsten Samstag gehe ich wieder hin') &&
      a2Texts['a2-r10'].body.includes('Und dann probiere ich auch endlich'));
  t('Corpus A2 a2-r11 first-call question asks for the conversation partner, not who initiated it',
    a2q('a2-r11', 0).prompt === 'مع من كانت المكالمة الأولى؟' &&
      a2q('a2-r11', 0).key === 'أختي الصغرى' &&
      a2Texts['a2-r11'].body.includes('Beim ersten Mal war es meine kleine Schwester'));
  t('Corpus A2 a2-r11 location question identifies the husband who was not at home',
    a2q('a2-r11', 1).prompt === 'أين كان زوجي عندما لم يسمع الهاتف؟' &&
      a2q('a2-r11', 1).key === 'لم يكن في البيت' &&
      a2Texts['a2-r11'].body.includes('Er war nicht zu Hause und hat sein Telefon nicht gehört'));
  t('Corpus A2 a2-r11 marks the meeting as today after yesterday’s calls and tomorrow’s plan',
    a2Texts['a2-r11'].body.includes('Gestern habe ich drei Mal telefoniert') &&
      a2Texts['a2-r11'].body.includes('gefragt, ob sie morgen Zeit hat') &&
      a2Texts['a2-r11'].body.includes('Wir treffen uns im vollen Café. Heute um vier Uhr bin ich ins alte Café gegangen'));
  t('Corpus A2 a2-r12 asks which present she bought for her friend, not every purchase',
    a2q('a2-r12', 0).prompt === 'ما الهدية التي اشترتها لصديقتها؟' &&
      a2q('a2-r12', 0).key === 'كتابًا' &&
      a2Texts['a2-r12'].body.includes('ein interessantes Buch gekauft') &&
      a2Texts['a2-r12'].body.includes('Ich habe noch einen frischen Kuchen gekauft'));
  t('Corpus A2 a2-r12 identifies the friend as the book recipient, not a sister',
    a2q('a2-r12', 1).prompt === 'لمن اشترت الكتاب؟' &&
      a2q('a2-r12', 1).key === 'لصديقتها' && a2q('a2-r12', 1).options.includes('لصديقتها') &&
      a2Texts['a2-r12'].body.includes('das ich ihr gekauft habe') &&
      !a2q('a2-r12', 1).key.includes('أخت'));
  t('Corpus A2 a2-r12 clarifies wrapping, the Saturday plan, and the gift references',
    a2Texts['a2-r12'].body.includes('das schwere Buch schön als Geschenk eingepackt') &&
      a2Texts['a2-r12'].body.includes('Am Samstag wollte ich mit dem Bus zu ihr fahren') &&
      a2Texts['a2-r12'].body.includes('Am Samstag bin ich mit dem Bus zu meiner Freundin gefahren') &&
      a2Texts['a2-r12'].body.includes('an das neue Buch gedacht, das ich ihr gekauft habe') &&
      a2Texts['a2-r12'].body.includes('Das Geschenk für meinen Vater war nicht groß') &&
      !a2Texts['a2-r12'].body.includes('Am Samstag fahren wir mit dem Bus zu ihr') &&
      !a2Texts['a2-r12'].body.includes('das schwere Buch in ein Papier gemacht'));
  t('Corpus A2 a2-r13 volume request matches the quoted neighbor dialogue',
    a2q('a2-r13', 0).prompt === 'ماذا قالت؟' &&
      a2q('a2-r13', 0).key === 'هل يمكنكم خفض الصوت؟' &&
      a2Texts['a2-r13'].body.includes('Bitte nicht so laut'));
  t('Corpus A2 a2-r13 apology answer matches the neighbor response',
    a2q('a2-r13', 1).prompt === 'ماذا فعل الجار؟' && a2q('a2-r13', 1).key === 'اعتذر' &&
      a2Texts['a2-r13'].body.includes('Er hat sich entschuldigt'));
  t('Corpus A2 a2-r13 clarifies the later Friday and fixes the shopping phrase',
    a2Texts['a2-r13'].body.indexOf('Am Freitag war es wieder laut') <
      a2Texts['a2-r13'].body.indexOf('Am Sonntag habe ich eine kurze Nachricht geschrieben') &&
      a2Texts['a2-r13'].body.indexOf('Am Sonntag habe ich eine kurze Nachricht geschrieben') <
      a2Texts['a2-r13'].body.indexOf('Am Montag habe ich mit ihm gesprochen') &&
      a2Texts['a2-r13'].body.indexOf('Am Montag habe ich mit ihm gesprochen') <
      a2Texts['a2-r13'].body.indexOf('Am nächsten Freitag hat er mich zum Kaffee eingeladen') &&
      a2Texts['a2-r13'].body.includes('Auch heute helfen wir uns wieder beim Einkauf, und das machen wir sehr gern') &&
      !a2Texts['a2-r13'].body.includes('Am Freitag hat er mich zum starken Kaffee eingeladen') &&
      !a2Texts['a2-r13'].body.includes('zusammen mit dem Einkauf'));
  t('Corpus A2 a2-r14 identifies the invalid ticket as the problem',
    a2q('a2-r14', 0).prompt === 'ما الخطأ؟' && a2q('a2-r14', 0).key === 'تذكرة خاطئة' &&
      a2Texts['a2-r14'].body.includes('dass die Karte nicht gilt'));
  t('Corpus A2 a2-r14 question asks for the supported pre-trip ticket check',
    a2q('a2-r14', 1).prompt === 'ماذا ينبغي أن تفعل قبل الرحلة؟' &&
      a2q('a2-r14', 1).key === 'تتحقق من التذكرة جيدًا' &&
      a2q('a2-r14', 1).options[0] === a2q('a2-r14', 1).key &&
      a2Texts['a2-r14'].body.includes('vor der Reise immer zwei Minuten Zeit nehmen muss'));
  t('Corpus A2 a2-r14 clarifies the plan-to-past timeline and the changed choice',
    a2Texts['a2-r14'].body.includes('In der nächsten Woche wollte ich die Karte im Internet kaufen') &&
      a2Texts['a2-r14'].body.includes('Am Dienstag bin ich aber zum kleinen Schalter gegangen') &&
      a2Texts['a2-r14'].body.includes('Am Samstag bin ich mit der richtigen Karte nach Frankfurt gefahren') &&
      !a2Texts['a2-r14'].body.includes('In der nächsten Woche kaufe ich die Karte'));
  t('Corpus A2 a2-r15 first-washed question matches the vegetables',
    a2q('a2-r15', 0).prompt === 'ماذا غسلت أولًا؟' && a2q('a2-r15', 0).key === 'الخضار' &&
      a2Texts['a2-r15'].body.includes('Zuerst habe ich das bunte Gemüse gewaschen'));
  t('Corpus A2 a2-r15 asks what the daughter said and matches the stated praise',
    a2q('a2-r15', 1).prompt === 'ماذا قالت الابنة عن الطعام؟' &&
      a2q('a2-r15', 1).key === 'كان جيدًا جدًا' &&
      a2Texts['a2-r15'].body.includes('Meine Tochter hat gesagt, dass das Essen sehr gut war'));
  t('Corpus A2 a2-r15 completes the pot sentence and removes the odd table adjective',
    a2Texts['a2-r15'].body.includes('Dann habe ich das Öl und das grüne Gemüse in einen tiefen Topf getan') &&
      a2Texts['a2-r15'].body.includes('die sauberen Teller auf den Tisch gestellt. Danach haben wir zusammen gegessen') &&
      !a2Texts['a2-r15'].body.includes('und das grüne Gemüse dazu.') &&
      !a2Texts['a2-r15'].body.includes('auf den ruhigen Tisch'));
  t('Corpus A2 a2-r16 arrival-time question matches the first guests at four',
    a2q('a2-r16', 0).prompt === 'متى وصل أول الضيوف؟' &&
      a2q('a2-r16', 0).key === 'الساعة الرابعة' &&
      a2Texts['a2-r16'].body.includes('Um vier Uhr sind die ersten Gäste gekommen'));
  t('Corpus A2 a2-r16 mother-brings question distinguishes drinks from the narrator’s cake',
    a2q('a2-r16', 1).prompt === 'ماذا أحضرت الأم؟' &&
      a2q('a2-r16', 1).key === 'المشروبات' &&
      a2Texts['a2-r16'].body.includes('Meine Mutter hat Getränke mitgebracht') &&
      a2Texts['a2-r16'].body.includes('Ich habe am Morgen einen süßen Kuchen und einen gesunden Salat gemacht'));
  t('Corpus A2 a2-r16 orders the past photo album before the next-year plan',
    a2Texts['a2-r16'].body.includes('aus den letzten Fotos ein schönes Buch gemacht') &&
      a2Texts['a2-r16'].body.indexOf('Im Herbst haben wir aus den letzten Fotos') <
        a2Texts['a2-r16'].body.indexOf('Nächstes Jahr feiern wir wieder bei uns') &&
      a2Texts['a2-r16'].body.includes('Die kleinen Kinder haben alle gern auf dem Boden gespielt') &&
      !a2Texts['a2-r16'].body.includes('auf dem ruhigen Boden') &&
      !a2Texts['a2-r16'].body.includes('die letzten Fotos in ein schönes Buch'));
  t('Corpus A2 a2-r17 asks what was closed and matches the closed street',
    a2q('a2-r17', 0).prompt === 'ما الذي أُغلق؟' &&
      a2q('a2-r17', 0).key === 'الشارع' &&
      a2q('a2-r17', 0).options.includes(a2q('a2-r17', 0).key) &&
      a2Texts['a2-r17'].title === 'Die gesperrte Straße' &&
      a2Texts['a2-r17'].body.includes('die ganze Straße gesperrt'));
  t('Corpus A2 a2-r17 asks for the narrator’s Monday wait, not an unspecified plural',
    a2q('a2-r17', 1).prompt === 'كم دقيقة انتظر الراوي يوم الاثنين؟' &&
      a2q('a2-r17', 1).key === 'عشر دقائق' &&
      a2Texts['a2-r17'].body.includes('Am Montag habe ich einfach zehn Minuten gewartet'));
  t('Corpus A2 a2-r17 separates the two Mondays, keeps one park route, and repairs the final subordinate clause',
    a2Texts['a2-r17'].body.indexOf('Am Montag habe ich einfach zehn Minuten gewartet') <
      a2Texts['a2-r17'].body.indexOf('Am Dienstag habe ich einen anderen Weg genommen') &&
      a2Texts['a2-r17'].body.indexOf('Am Dienstag habe ich einen anderen Weg genommen') <
        a2Texts['a2-r17'].body.indexOf('Seit Mittwoch komme ich wieder pünktlich') &&
      a2Texts['a2-r17'].body.indexOf('Seit Mittwoch komme ich wieder pünktlich') <
        a2Texts['a2-r17'].body.indexOf('Am nächsten Montag habe ich einen anderen Weg genommen') &&
      a2Texts['a2-r17'].body.indexOf('Am nächsten Montag habe ich einen anderen Weg genommen') <
        a2Texts['a2-r17'].body.indexOf('Am Mittwoch hat mein netter Kollege mir einen kleinen Weg hinter dem schönen Park gezeigt') &&
      a2Texts['a2-r17'].body.includes('Meine Kollegen haben mir gesagt, dass ein kleiner Weg hinter dem schönen Park offen ist') &&
      a2Texts['a2-r17'].body.includes('Der Weg hinter dem schönen Park ist ganz kurz') &&
      a2Texts['a2-r17'].body.includes('Sonst nehme ich immer den Bus') &&
      a2Texts['a2-r17'].body.includes('Bis der neue wichtige Vertrag endlich kommt, läuft die Suche weiter'));
  t('Corpus A2 a2-r18 dog-description question matches the friendly dog',
    a2q('a2-r18', 0).prompt === 'كيف الكلب؟' &&
      a2q('a2-r18', 0).key === 'ودود' &&
      a2Texts['a2-r18'].body.includes('Er ist schon alt und sehr freundlich'));
  t('Corpus A2 a2-r18 asks what the daughter gives the dog after play',
    a2q('a2-r18', 1).prompt === 'ماذا تعطي الابنة للكلب بعد اللعب؟' &&
      a2q('a2-r18', 1).key === 'ماء' &&
      a2Texts['a2-r18'].body.includes('Danach gibt sie ihm kaltes Wasser'));
  t('Corpus A2 a2-r18 states the daughter’s reduced fear naturally and uses ans Wasser',
    a2Texts['a2-r18'].body.includes('Jetzt hat sie keine Angst vor Hunden mehr') &&
      a2Texts['a2-r18'].body.includes('Am Wochenende gehen wir alle zusammen ans Wasser') &&
      !a2Texts['a2-r18'].body.includes('keine echte Angst') &&
      !a2Texts['a2-r18'].body.includes('an das Wasser'));
  t('Corpus A2 a2-r19 result question matches the two errors in the returned test',
    a2q('a2-r19', 0).prompt === 'هل كان كل شيء صحيحًا؟' &&
      a2q('a2-r19', 0).key === 'لا' &&
      a2Texts['a2-r19'].body.includes('Ich hatte 18 von 20 Punkten') &&
      a2Texts['a2-r19'].body.includes('Die zwei Fehler waren in der Grammatik'));
  t('Corpus A2 a2-r19 asks how the narrator handles mistakes and matches the notebook review',
    a2q('a2-r19', 1).prompt === 'كيف تتعامل الراوية مع الأخطاء؟' &&
      a2q('a2-r19', 1).key === 'تدوّنها في دفترها وتراجعها' &&
      a2Texts['a2-r19'].body.includes('Ich habe sie in mein Heft geschrieben und am Abend noch einmal geübt'));
  t('Corpus A2 a2-r19 removes duplicate test/evening sentences and clarifies its time limit',
    a2Texts['a2-r19'].body.includes('nur eine Stunde Zeit für den Test') &&
      a2Texts['a2-r19'].body.includes('Am Abend habe ich die Grammatik noch einmal geübt') &&
      a2Texts['a2-r19'].body.includes('Bis zum Test lese ich jeden Tag einen Text') &&
      a2Texts['a2-r19'].body.includes('So lerne ich die neuen Wörter und schreibe sie in mein Heft') &&
      !a2Texts['a2-r19'].body.includes('kurze Stunde Zeit') &&
      !a2Texts['a2-r19'].body.includes('In zwei Wochen schreiben wir wieder einen Test') &&
      !a2Texts['a2-r19'].body.includes('Am Abend habe ich die Wörter in mein Heft geschrieben und die Fehler noch einmal gemacht'));
  t('Corpus A2 a2-r20 lost-key question matches the opening event',
    a2q('a2-r20', 0).prompt === 'ماذا ضاع؟' &&
      a2q('a2-r20', 0).key === 'المفتاح' &&
      a2Texts['a2-r20'].body.includes('meinen alten Schlüssel verloren'));
  t('Corpus A2 a2-r20 second-key question matches the sister’s spare',
    a2q('a2-r20', 1).prompt === 'من يملك مفتاحًا ثانيًا؟' &&
      a2q('a2-r20', 1).key === 'الأخت' &&
      a2Texts['a2-r20'].body.includes('meine Schwester einen zweiten Schlüssel'));
  t('Corpus A2 a2-r20 places the three new keys after the Tuesday copies and before Saturday exchange',
    a2Texts['a2-r20'].body.indexOf('Am Montag habe ich einen neuen Schlüssel machen lassen') <
      a2Texts['a2-r20'].body.indexOf('Am Dienstag habe ich einen neuen Schlüssel für meine Schwester machen lassen') &&
      a2Texts['a2-r20'].body.indexOf('Am Dienstag habe ich einen neuen Schlüssel für meine Schwester machen lassen') <
        a2Texts['a2-r20'].body.indexOf('Jetzt gibt es drei neue Schlüssel') &&
      a2Texts['a2-r20'].body.indexOf('Jetzt gibt es drei neue Schlüssel') <
        a2Texts['a2-r20'].body.indexOf('Am Samstag habe ich meiner Schwester den neuen Schlüssel gegeben') &&
      a2Texts['a2-r20'].body.includes('Jetzt habe ich genug Schlüssel') &&
      !a2Texts['a2-r20'].body.includes('Jetzt habe ich drei neue Schlüssel'));
  t('Corpus A2 a2-r21 workshop-repair answer matches the machine named in the text',
    a2q('a2-r21', 0).prompt === 'ماذا تُصلح الورشة؟' &&
      a2q('a2-r21', 0).key === 'Die Maschine' &&
      a2Texts['a2-r21'].body.includes('repariert die alte Maschine'));
  t('Corpus A2 a2-r21 saving question matches the affordable furniture',
    a2q('a2-r21', 1).prompt === 'ماذا نشتري لأننا نريد التوفير؟' &&
      a2q('a2-r21', 1).key === 'preiswerte Möbel' &&
      a2Texts['a2-r21'].body.includes('deshalb kaufen wir preiswerte Möbel'));
  t('Corpus A2 a2-r21 resolves household logic and preserves the existing corpus-floor token',
    a2Texts['a2-r21'].body.includes('Im Haushalt gibt es viel zu tun') &&
      a2Texts['a2-r21'].body.includes('Ich wasche das schmutzige Geschirr und stelle es in den leeren Schrank') &&
      a2Texts['a2-r21'].body.includes('im Juni wollen wir einziehen'));
  t('Corpus A2 a2-r21 clarifies the warm workshop, break, and Friday cash count',
    a2Texts['a2-r21'].body.includes('aber sie ist meistens warm') &&
      a2Texts['a2-r21'].body.includes('eine kurze Pause') &&
      a2Texts['a2-r21'].body.includes('Dann zählen wir alle das Geld für die ganze Woche') &&
      !a2Texts['a2-r21'].body.includes('rechnen wir alle wirklich zusammen die ganze Woche'));
  t('Corpus A2 a2-r22 bakery question matches the baker and his opening time',
    a2q('a2-r22', 0).key === 'der Bäcker' &&
      a2Texts['a2-r22'].body.includes('Der Bäcker öffnet um fünf') &&
      a2Texts['a2-r22'].body.includes('Der Bäcker verkauft morgens frisches Brot'));
  t('Corpus A2 a2-r22 rehearsal question matches the musicians in the cellar',
    a2q('a2-r22', 1).key === 'im Keller' &&
      a2Texts['a2-r22'].body.includes('Im dunklen Keller proben ein junger Musiker und eine freundliche Sängerin'));
  t('Corpus A2 a2-r22 corrects the profession wording and avoids the cook/cooks tautology',
    a2Texts['a2-r22'].body.includes('In unserer Straße wohnen viele Menschen. Sie haben verschiedene Berufe') &&
      !a2Texts['a2-r22'].body.includes('wohnen viele Berufe') &&
      a2Texts['a2-r22'].body.includes('Der Koch arbeitet im neuen Lokal') &&
      !a2Texts['a2-r22'].body.includes('Der Koch kocht'));
  t('Corpus A2 a2-r22 removes conflicting bakery hours and repeated family-return event',
    a2Texts['a2-r22'].body.includes('Der Bäcker öffnet um fünf') &&
      !a2Texts['a2-r22'].body.includes('öffnet schon um sechs') &&
      a2Texts['a2-r22'].body.indexOf('Am Nachmittag machen die Kinder ihre Hausaufgaben') <
        a2Texts['a2-r22'].body.indexOf('Die Eltern sind dann noch bei der Arbeit') &&
      a2Texts['a2-r22'].body.indexOf('Die Eltern sind dann noch bei der Arbeit') <
        a2Texts['a2-r22'].body.indexOf('Am Abend kommen die Eltern müde von der Arbeit') &&
      !a2Texts['a2-r22'].body.includes('Die Eltern kommen dann alle müde nach Hause'));
  t('Corpus A2 a2-r23 subject question matches the morning timetable',
    a2q('a2-r23', 0).key === 'Kunst' &&
      a2q('a2-r23', 0).prompt === 'ما المادة التي يدرسها بعد الإنجليزية؟' &&
      a2Texts['a2-r23'].body.includes('Am Morgen habe ich Englisch, danach Kunst und Sport'));
  t('Corpus A2 a2-r23 trip-money question is supported by the teacher sentence',
    a2q('a2-r23', 1).key === 'der Lehrer' &&
      a2Texts['a2-r23'].body.includes('Der Lehrer sammelt dann das Geld für die Reise'));
  t('Corpus A2 a2-r23 distinguishes the old two-hour schedule from the March plan',
    a2Texts['a2-r23'].body.includes('Jetzt lerne ich am Morgen eine halbe Stunde und am Abend lese ich nur') &&
      a2Texts['a2-r23'].body.includes('Vor dem März lernte ich jeden Abend zwei Stunden') &&
      a2Texts['a2-r23'].body.includes('Den neuen Plan halte ich bis zum Sommer ein') &&
      !a2Texts['a2-r23'].body.includes('Jetzt lerne ich wirklich jeden Abend zwei Stunden'));
  t('Corpus A2 a2-r23 separates the exam plans and closes without redundant emphasis',
    a2Texts['a2-r23'].body.includes('Ich will die wichtige Prüfung im Sommer machen. Danach habe ich endlich viel mehr Zeit') &&
      !a2Texts['a2-r23'].body.includes('die schwere wichtige Prüfung') &&
      a2Texts['a2-r23'].body.includes('Auf die Ferien freue ich mich schon'));
  t('Corpus A2 a2-r24 bed-reading question matches the E-Book detail',
    a2q('a2-r24', 0).key === 'ein E-Book' &&
      a2Texts['a2-r24'].body.includes('ein E-Book lese ich abends im warmen Bett'));
  t('Corpus A2 a2-r24 password question matches the explicit length statement',
    a2q('a2-r24', 1).key === 'dass sie lang ist' &&
      a2Texts['a2-r24'].body.includes('Mein Passwort ist lang, das ist wichtig'));
  t('Corpus A2 a2-r25 daytime-temperature question matches the stated 25 degrees',
    a2q('a2-r25', 0).key === '25 Grad' &&
      a2Texts['a2-r25'].body.includes('Am Tag sind es 25 Grad'));
  t('Corpus A2 a2-r25 morning-job question matches the mail-delivery sentence',
    a2q('a2-r25', 1).key === 'die Post austragen' &&
      a2Texts['a2-r25'].body.includes('jeden Morgen die Post austragen'));
  t('Corpus A2 a2-r25 mountain ending states the children’s wish and the family’s response clearly',
    a2Texts['a2-r25'].body.includes('Und die Kinder wollen natürlich noch weiter, aber wir sagen ihnen einfach Nein und gehen zurück') &&
      !a2Texts['a2-r25'].body.includes('noch immer so weiter'));
  t('Corpus A2 a2-r26 necessary-programs question matches the text',
    a2q('a2-r26', 0).key === 'einige Programme' &&
      a2Texts['a2-r26'].body.includes('einige Programme waren notwendig'));
  t('Corpus A2 a2-r26 WC question matches the office location',
    a2q('a2-r26', 1).key === 'im Büro' &&
      a2Texts['a2-r26'].body.includes('Das WC im modernen Büro'));
  t('Corpus A2 a2-r26 separates the noise problem from the desk need',
    a2Texts['a2-r26'].body.includes('Überall ist Lärm, das muss ich unbedingt ändern. Außerdem brauche ich einen größeren Tisch') &&
      !a2Texts['a2-r26'].body.includes('sonst brauche ich einen größeren Tisch'));
  t('Corpus A2 a2-r27 sofa-description question matches the stated adjective',
    a2q('a2-r27', 0).key === 'furchtbar' &&
      a2Texts['a2-r27'].body.includes('das lange Sofa ist furchtbar'));
  t('Corpus A2 a2-r27 daily-break question is stated explicitly',
    a2q('a2-r27', 1).key === 'dreißig Minuten' &&
      a2Texts['a2-r27'].body.includes('Jeden Tag mache ich mindestens dreißig Minuten Pause'));
  t('Corpus A2 a2-r27 farewell appears after the reading, not in its middle',
    !a2Texts['a2-r27'].body.includes('Tschüs, bis morgen! Am Abend') &&
      a2Texts['a2-r27'].body.endsWith('Ich bin wirklich zufrieden mit meinem Zimmer. Tschüs, bis morgen!'));
  t('Corpus A2 a2-r27 uses the correct plural adjective ending',
    a2Texts['a2-r27'].body.includes('meine vielen Bücher stehen in der Nähe') &&
      !a2Texts['a2-r27'].body.includes('meine viele Bücher'));
  t('Corpus A2 a2-r28 reading-frequency answer is stated explicitly',
    a2q('a2-r28', 0).key === 'viermal' &&
      a2Texts['a2-r28'].body.includes('Ich lese viermal in der Woche'));
  t('Corpus A2 a2-r28 residence question matches the location statement',
    a2q('a2-r28', 1).key === 'außerhalb der Stadt' &&
      a2Texts['a2-r28'].body.includes('Ich wohne außerhalb der Stadt'));
  t('Corpus A2 a2-r28 preserves its historic unique corpus token',
    a2Texts['a2-r28'].body.includes('Ich lese viermal in der Woche') &&
      !a2Texts['a2-r28'].body.includes('Ich lese vier Mal in der Woche'));
  t('A2 recognizes viermal from the already-taught numeral and frequency particle',
    a2Known.has('vier') && a2Known.has('mal') && known.isKnown(a2Known, 'viermal') &&
      known.coverage(a2Known, a2Texts['a2-r28'].body).unknown.length === 0);
  t('frequency-compound recognition requires both components to be known',
    !known.isKnown(new Set(['vier']), 'viermal') && !known.isKnown(new Set(['mal']), 'viermal') &&
      known.isKnown(new Set(['vier', 'mal']), 'viermal'));
  t('Corpus A2 a2-r29 festival-start question matches Thursday',
    a2q('a2-r29', 0).key === 'am Donnerstag' &&
      a2Texts['a2-r29'].body.startsWith('Am Donnerstag beginnt unser Fest'));
  t('Corpus A2 a2-r29 fatigue question asks what is possible and matches the modal detail',
    a2q('a2-r29', 1).prompt === 'ماذا يمكن أن يفعل من يتعب؟' &&
      a2q('a2-r29', 1).key === 'er kann früher nach Hause zurückgehen' &&
      a2q('a2-r29', 1).options.includes(a2q('a2-r29', 1).key) &&
      a2Texts['a2-r29'].body.includes('Wer müde ist, kann früher nach Hause zurückgehen'));
  t('Corpus A2 a2-r29 compares the walking and bus trips idiomatically',
    a2Texts['a2-r29'].body.includes('denn zu Fuß ist es kürzer als mit dem Bus') &&
      !a2Texts['a2-r29'].body.includes('zurücklaufen ist kürzer als der Bus'));
  t('Corpus A2 a2-r29 remains fully known at A2 after the clarification',
    known.coverage(a2Known, a2Texts['a2-r29'].body).unknown.length === 0);
  t('Corpus A2 a2-r30 scholarship place/title align and the A2 text has no unknown words',
    a2Texts['a2-r30'].title === 'عام في فرايبورغ' &&
      a2Texts['a2-r30'].body.includes('ein Jahr in Freiburg') &&
      win.DW_CHUNKS.A2.some(c => c.de === 'Wir sind nach Freiburg gefahren.') &&
      known.isKnown(a2Known, 'freiburg') &&
      known.coverage(a2Known, a2Texts['a2-r30'].body).unknown.length === 0);
  t('Corpus A2 a2-r30 university and post-course questions match explicit details',
    a2q('a2-r30', 0).key === 'eine Übersetzung und eine Erlaubnis' &&
      a2q('a2-r30', 0).options.includes(a2q('a2-r30', 0).key) &&
      a2Texts['a2-r30'].body.includes('genaue Übersetzung ihrer Zeugnisse') &&
      a2Texts['a2-r30'].body.includes('Erlaubnis für den Kurs') &&
      a2q('a2-r30', 1).key === 'fit' &&
      a2Texts['a2-r30'].body.includes('Nach dem Kurs ist sie fit'));
  t('Corpus A2 a2-r30 completes the grandmother piano relative clause and clarifies the umbrella pocket',
    a2Texts['a2-r30'].body.includes('Das schwarze Klavier kommt aus der Wohnung, die ihre Großmutter gemietet hat') &&
      a2Texts['a2-r30'].body.includes('ihr Regenschirm steckt immer in der Tasche ihres dunklen Mantels') &&
      !a2Texts['a2-r30'].body.includes('wo ihre alte Großmutter gemietet hat'));
  t('Corpus A2 a2-r30 keeps Sara in third person and removes repetition in the study/music ending',
    a2Texts['a2-r30'].body.includes('Sie lernt im leeren Zug und ist den ganzen Tag unterwegs') &&
      a2Texts['a2-r30'].body.includes('Sie übt jedes Stück einzeln') &&
      a2Texts['a2-r30'].body.includes('Ihr Nachbar findet den Witz lustig') &&
      !a2Texts['a2-r30'].body.includes('lustigen Witz witzig') &&
      !a2Texts['a2-r30'].body.includes('Sie lernt unterwegs im leeren Zug') &&
      a2Texts['a2-r30'].body.includes('Sara und ihr Nachbar machen das Zimmer zusammen schön') &&
      a2Texts['a2-r30'].body.includes('hören beide neue Musik') &&
      a2Texts['a2-r30'].body.includes('für beide ein kleines Zuhause') &&
      !/\b(?:ich|wir|unser)\b/i.test(a2Texts['a2-r30'].body.slice(a2Texts['a2-r30'].body.indexOf('Die Wohnung ist alt'))));
  const b1Texts = Object.fromEntries(win.DW_LIBRARY.B1.texts.map(x => [x.id, x]));
  const b1q = (id, n) => b1Texts[id].questions[n];
  const b1Known = known.knownWords(win, { upto: 'B1' });
  t('Corpus B1 b1-r1 has 231 measured words and no unknown B1 tokens',
    b1Texts['b1-r1'].title === 'Arbeit und Zeit' &&
      b1Texts['b1-r1'].body.trim().split(/\s+/).length === 231 &&
      known.coverage(b1Known, b1Texts['b1-r1'].body).unknown.length === 0);
  t('Corpus B1 b1-r1 compromise question matches four workdays and Friday learning',
    b1q('b1-r1', 0).prompt === 'ما الحل الذي يختاره؟' &&
      b1q('b1-r1', 0).key === 'أربعة أيام عمل والخامس للتعلّم' &&
      b1q('b1-r1', 0).options.includes(b1q('b1-r1', 0).key) &&
      b1Texts['b1-r1'].body.includes('Zum Beispiel arbeite ich nur vier Tage und lerne am Freitag'));
  t('Corpus B1 b1-r1 missing-money question matches the explicit trade-off',
    b1q('b1-r1', 1).prompt === 'ماذا ينقص الأسبوع القصير؟' &&
      b1q('b1-r1', 1).key === 'المال' &&
      b1q('b1-r1', 1).options.includes(b1q('b1-r1', 1).key) &&
      b1Texts['b1-r1'].body.startsWith('Einerseits spart die kurze Woche Zeit, andererseits fehlt dann Geld'));
  t('Corpus B1 b1-r2 has 231 measured words and no unknown B1 tokens',
    b1Texts['b1-r2'].title === 'Stadt ohne Auto' &&
      b1Texts['b1-r2'].body.trim().split(/\s+/).length === 231 &&
      known.coverage(b1Known, b1Texts['b1-r2'].body).unknown.length === 0);
  t('Corpus B1 b1-r2 advantage question matches the stated quiet',
    b1q('b1-r2', 0).prompt === 'ما ميزة المدينة بلا سيارة؟' &&
      b1q('b1-r2', 0).key === 'الهدوء' &&
      b1q('b1-r2', 0).options.includes(b1q('b1-r2', 0).key) &&
      b1Texts['b1-r2'].body.includes('Der Vorteil ist die Ruhe'));
  t('Corpus B1 b1-r2 limit question matches where no bus runs',
    b1q('b1-r2', 1).prompt === 'أين الحد؟' &&
      b1q('b1-r2', 1).key === 'حيث لا حافلة' &&
      b1q('b1-r2', 1).options.includes(b1q('b1-r2', 1).key) &&
      b1Texts['b1-r2'].body.includes('Die Grenze ist der Ort, an dem kein Bus fährt'));
  t('Corpus B1 b1-r3 has 231 measured words, no unknown B1 tokens, and idiomatic phrasing',
    b1Texts['b1-r3'].title === 'Spät lernen' &&
      b1Texts['b1-r3'].body.trim().split(/\s+/).length === 231 &&
      known.coverage(b1Known, b1Texts['b1-r3'].body).unknown.length === 0 &&
      b1Texts['b1-r3'].body.includes('Ich habe es zwei Wochen lang immer wieder versucht'));
  t('Corpus B1 b1-r3 purpose question uses the explicit not-stated option',
    b1q('b1-r3', 0).prompt === 'لماذا تتعلّم؟' &&
      b1q('b1-r3', 0).key === 'النص لا يقول' &&
      b1q('b1-r3', 0).options.includes(b1q('b1-r3', 0).key));
  t('Corpus B1 b1-r3 evening question matches the stated evening activity',
    b1q('b1-r3', 1).prompt === 'ما الذي يفعله الراوي في المساء؟' &&
      b1q('b1-r3', 1).key === 'يقرأ أو يستمع إلى تقرير قصير' &&
      b1q('b1-r3', 1).options.includes(b1q('b1-r3', 1).key) &&
      b1Texts['b1-r3'].body.includes('Am Abend lese ich nur, oder ich höre einen kurzen Bericht'));
  t('Corpus B1 b1-r4 has 231 measured words and no unknown B1 tokens',
    b1Texts['b1-r4'].title === 'Die Versicherung' &&
      b1Texts['b1-r4'].body.trim().split(/\s+/).length === 231 &&
      known.coverage(b1Known, b1Texts['b1-r4'].body).unknown.length === 0);
  t('Corpus B1 b1-r4 amount question matches the stated initial shortfall',
    b1q('b1-r4', 0).prompt === 'كيف كان المبلغ في البداية مقارنةً بالفاتورة؟' &&
      b1q('b1-r4', 0).key === 'كان أقل منها' &&
      b1q('b1-r4', 0).options.includes(b1q('b1-r4', 0).key) &&
      b1Texts['b1-r4'].body.includes('Der Betrag war niedriger als die Rechnung'));
  t('Corpus B1 b1-r4 inquiry question matches the stated written request',
    b1q('b1-r4', 1).prompt === 'كيف قدّم الراوي الاستفسار؟' &&
      b1q('b1-r4', 1).key === 'كتابيًا' &&
      b1q('b1-r4', 1).options.includes(b1q('b1-r4', 1).key) &&
      b1Texts['b1-r4'].body.includes('Ich habe die Anfrage schriftlich gestellt'));
  t('Corpus B1 b1-r5 has 231 measured words and no unknown B1 tokens',
    b1Texts['b1-r5'].title === 'Kaufen oder warten' &&
      b1Texts['b1-r5'].body.trim().split(/\s+/).length === 231 &&
      known.coverage(b1Known, b1Texts['b1-r5'].body).unknown.length === 0);
  t('Corpus B1 b1-r5 purchase timing matches the stated one-week wait',
    b1q('b1-r5', 0).prompt === 'متى يشتري الراوي ما يحتاج إليه؟' &&
      b1q('b1-r5', 0).key === 'بعد أسبوع' &&
      b1q('b1-r5', 0).options.includes(b1q('b1-r5', 0).key) &&
      b1Texts['b1-r5'].body.includes('kaufe ich es erst nach genau einer Woche'));
  t('Corpus B1 b1-r5 non-deferrable-items question matches the explicit list',
    b1q('b1-r5', 1).prompt === 'ما الذي لا يمكن تأجيله؟' &&
      b1q('b1-r5', 1).key === 'الأدوية والإيجار والكهرباء' &&
      b1q('b1-r5', 1).options.includes(b1q('b1-r5', 1).key) &&
      b1Texts['b1-r5'].body.includes('Medikamente, Miete und Strom kann man nicht verschieben'));
  t('Corpus B1 b1-r6 has 231 measured words, no unknown B1 tokens, and consistent club size',
    b1Texts['b1-r6'].title === 'Der Verein' &&
      b1Texts['b1-r6'].body.trim().split(/\s+/).length === 231 &&
      known.coverage(b1Known, b1Texts['b1-r6'].body).unknown.length === 0 &&
      b1Texts['b1-r6'].body.includes('in einem kleinen Verein') &&
      b1Texts['b1-r6'].body.includes('Im kleinen Verein spreche ich mehr Deutsch') &&
      !b1Texts['b1-r6'].body.includes('Im großen Verein spreche ich mehr Deutsch'));
  t('Corpus B1 b1-r6 experience question matches the personal account',
    b1q('b1-r6', 0).prompt === 'من أين المثال؟' &&
      b1q('b1-r6', 0).key === 'من تجربته' &&
      b1q('b1-r6', 0).options.includes(b1q('b1-r6', 0).key) &&
      b1Texts['b1-r6'].body.startsWith('Seit einem Jahr bin ich in einem kleinen Verein'));
  t('Corpus B1 b1-r6 weekly-frequency question matches twice per week',
    b1q('b1-r6', 1).prompt === 'كم مرة يتدرب الراوي في الأسبوع؟' &&
      b1q('b1-r6', 1).key === 'مرتين' &&
      b1q('b1-r6', 1).options.includes(b1q('b1-r6', 1).key) &&
      b1Texts['b1-r6'].body.startsWith('Seit einem Jahr bin ich in einem kleinen Verein und trainiere dort zweimal pro Woche'));
  t('Corpus B1 b1-r7 has 231 measured words and no unknown B1 tokens',
    b1Texts['b1-r7'].title === 'Zwei Züge' &&
      b1Texts['b1-r7'].body.trim().split(/\s+/).length === 231 &&
      known.coverage(b1Known, b1Texts['b1-r7'].body).unknown.length === 0);
  t('Corpus B1 b1-r7 important-morning appointment question matches the first train',
    b1q('b1-r7', 0).prompt === 'أي قطار يختار الراوي إذا كان لديه موعد مهم صباحًا؟' &&
      b1q('b1-r7', 0).key === 'القطار الأول' &&
      b1q('b1-r7', 0).options.includes(b1q('b1-r7', 0).key) &&
      b1Texts['b1-r7'].body.includes('Wenn ich einen wichtigen Termin am Morgen habe, nehme ich den ersten'));
  t('Corpus B1 b1-r7 connection-check question matches the evening',
    b1q('b1-r7', 1).prompt === 'متى يفحص الراوي مسار الرحلة؟' &&
      b1q('b1-r7', 1).key === 'في المساء' &&
      b1q('b1-r7', 1).options.includes(b1q('b1-r7', 1).key) &&
      b1Texts['b1-r7'].body.includes('Seitdem schaue ich am Abend in die neue App und prüfe die Verbindung'));
  t('Corpus B1 b1-r8 has 231 measured words and no unknown B1 tokens',
    b1Texts['b1-r8'].title === 'Nachricht und Meinung' &&
      b1Texts['b1-r8'].body.trim().split(/\s+/).length === 231 &&
      known.coverage(b1Known, b1Texts['b1-r8'].body).unknown.length === 0);
  t('Corpus B1 b1-r8 source question matches the speaker omission',
    b1q('b1-r8', 0).prompt === 'ما الذي لم يوضحه المتحدث؟' &&
      b1q('b1-r8', 0).key === 'مصدر الرقم' &&
      b1q('b1-r8', 0).options.includes(b1q('b1-r8', 0).key) &&
      b1Texts['b1-r8'].body.includes('Der Sprecher hat eine genaue Zahl genannt, aber die Quelle nicht erklärt'));
  t('Corpus B1 b1-r8 verification questions match the stated checklist',
    b1q('b1-r8', 1).prompt === 'ما الأسئلة التي يطرحها الراوي قبل أن ينقل خبرًا؟' &&
      b1q('b1-r8', 1).key === 'من قاله، وما مصدره، وهل ينقصه رقم واضح' &&
      b1q('b1-r8', 1).options.includes(b1q('b1-r8', 1).key) &&
      b1Texts['b1-r8'].body.includes('Wer sagt es, woher weiß er es, und fehlt eine klare Zahl?'));
  t('Corpus B1 b1-r9 has 231 measured words and no unknown B1 tokens',
    b1Texts['b1-r9'].title === 'Die Beschwerde' &&
      b1Texts['b1-r9'].body.trim().split(/\s+/).length === 231 &&
      known.coverage(b1Known, b1Texts['b1-r9'].body).unknown.length === 0);
  t('Corpus B1 b1-r9 consequence question names the missed appointment',
    b1q('b1-r9', 0).prompt === 'ما المشكلة التي سببتها الشحنة المتأخرة؟' &&
      b1q('b1-r9', 0).key === 'موعد فائت' &&
      b1q('b1-r9', 0).options.includes(b1q('b1-r9', 0).key) &&
      b1Texts['b1-r9'].body.includes('die Folge war ein verpasster Termin'));
  t('Corpus B1 b1-r9 complaint advice is internally consistent and thanks phrasing is clear',
    b1Texts['b1-r9'].body.includes('Wer schreit, bekommt selten eine nette Antwort') &&
      b1Texts['b1-r9'].body.includes('Wer am Telefon laut wird, erreicht selten etwas') &&
      b1Texts['b1-r9'].body.includes('Ein kurzes Danke muss nicht sein, hilft aber beim nächsten Kontakt wirklich sehr'));
  t('Corpus B1 b1-r10 has 231 measured words and no unknown B1 tokens',
    b1Texts['b1-r10'].title === 'Zwei Wege' &&
      b1Texts['b1-r10'].body.trim().split(/\s+/).length === 231 &&
      known.coverage(b1Known, b1Texts['b1-r10'].body).unknown.length === 0);
  t('Corpus B1 b1-r10 slow-course question matches the comparison',
    b1q('b1-r10', 0).prompt === 'أي الطريقين أبطأ؟' &&
      b1q('b1-r10', 0).key === 'الدورة' &&
      b1q('b1-r10', 0).options.includes(b1q('b1-r10', 0).key) &&
      b1Texts['b1-r10'].body.includes('Der Kurs gibt Struktur und Hilfe, aber er ist langsam') &&
      b1Texts['b1-r10'].body.includes('Wer allein lernt, ist schnell'));
  t('Corpus B1 b1-r10 learning-review question matches the Sunday recording',
    b1q('b1-r10', 1).prompt === 'كيف يتابع الراوي ما تعلّمه؟' &&
      b1q('b1-r10', 1).key === 'بتسجيل قصير يستمع إليه يوم الأحد' &&
      b1q('b1-r10', 1).options.includes(b1q('b1-r10', 1).key) &&
      b1Texts['b1-r10'].body.includes('die hole ich mir mit einer kurzen Aufnahme am Sonntag') &&
      b1Texts['b1-r10'].body.includes('Diese halbe Stunde ist nicht leicht, aber sie zeigt mir, was ich wirklich gelernt habe'));
  t('Corpus B1 b1-r11 has 232 measured words and no unknown B1 tokens',
    b1Texts['b1-r11'].title === 'شقة جديدة وساحتها' &&
      b1Texts['b1-r11'].body.trim().split(/\s+/).length === 232 &&
      known.coverage(b1Known, b1Texts['b1-r11'].body).unknown.length === 0);
  t('Corpus B1 b1-r11 old-apartment question matches furnished',
    b1q('b1-r11', 0).prompt === 'كيف كانت الشقة القديمة؟' &&
      b1q('b1-r11', 0).key === 'مفروشة' &&
      b1q('b1-r11', 0).options.includes(b1q('b1-r11', 0).key) &&
      b1Texts['b1-r11'].body.includes('Die alte war möbliert'));
  t('Corpus B1 b1-r11 caretaker question matches the bicycle storage detail',
    b1q('b1-r11', 1).prompt === 'من يشرح مكان مخزن الدراجات؟' &&
      b1q('b1-r11', 1).key === 'مديرة البيت' &&
      b1q('b1-r11', 1).options.includes(b1q('b1-r11', 1).key) &&
      b1Texts['b1-r11'].body.includes('Die Hausmeisterin zeigt uns den großen Kasten für die Fahrräder'));
  t('Corpus B1 b1-r12 has 243 measured words and no unknown B1 tokens',
    b1Texts['b1-r12'].title === 'Bewerbung und erste Woche im Betrieb' &&
      b1Texts['b1-r12'].body.trim().split(/\s+/).length === 243 &&
      known.coverage(b1Known, b1Texts['b1-r12'].body).unknown.length === 0);
  t('Corpus B1 b1-r12 keeps payroll tax apart from VAT on a customer invoice',
    b1Texts['b1-r12'].body.includes('Beim ersten Gehalt berechnete das Büro die Steuer falsch') &&
      b1Texts['b1-r12'].body.includes('den Rest meines Gehalts') &&
      b1Texts['b1-r12'].body.includes('Auf ihrer Rechnung steht die Mehrwertsteuer'));
  t('Corpus B1 b1-r12 connects the insurance card with registration and explanation',
    b1Texts['b1-r12'].body.includes('begleitet sie bei der Anmeldung und erklärt ihnen die Versichertenkarte') &&
      b1Texts['b1-r12'].body.includes('die jeder benötigt'));
  t('Corpus B1 b1-r12 both comprehension questions are supported by the narrative',
    b1q('b1-r12', 0).prompt === 'ماذا تطلب الشركة؟' &&
      b1q('b1-r12', 0).key === 'تصريح عمل ودبلومًا' &&
      b1q('b1-r12', 0).options.includes(b1q('b1-r12', 0).key) &&
      b1Texts['b1-r12'].body.includes('eine alte Arbeitserlaubnis und ein echtes Diplom') &&
      b1q('b1-r12', 1).prompt === 'ماذا أرسلت في ملف الطلب؟' &&
      b1q('b1-r12', 1).key === 'شهادات' &&
      b1q('b1-r12', 1).options.includes(b1q('b1-r12', 1).key) &&
      b1Texts['b1-r12'].body.includes('Mappe mit Zeugnissen'));
  t('Corpus B1 b1-r13 has 233 measured words and no unknown B1 tokens',
    b1Texts['b1-r13'].title === 'Beim Arzt und danach' &&
      b1Texts['b1-r13'].body.trim().split(/\s+/).length === 233 &&
      known.coverage(b1Known, b1Texts['b1-r13'].body).unknown.length === 0);
  t('Corpus B1 b1-r13 uses natural phrasing for symptoms, prevention, and the daily routine',
    b1Texts['b1-r13'].body.includes('dann tun mein Knie und die Muskeln im ganzen Rücken sehr weh') &&
      b1Texts['b1-r13'].body.includes('Im Herbst bekomme ich beim Arzt eine Spritze gegen die Grippe') &&
      b1Texts['b1-r13'].body.includes('Wenn ich putze, läuft mir die Nase, denn Staub in der Wohnung ist ein echtes Problem') &&
      b1Texts['b1-r13'].body.includes('Während einer Schwangerschaft sind regelmäßige Kontrollen beim Arzt wichtig') &&
      b1Texts['b1-r13'].body.includes('wenn ich mich gut fühle') &&
      b1Texts['b1-r13'].body.includes('inzwischen ein fester Teil meines Tages'));
  t('Corpus B1 b1-r13 first-symptom question points to the explicitly named cold symptom',
    b1q('b1-r13', 0).prompt === 'ما أول عرض يذكره الراوي؟' &&
      b1q('b1-r13', 0).key === 'رشح' &&
      b1q('b1-r13', 0).options.includes(b1q('b1-r13', 0).key) &&
      b1Texts['b1-r13'].body.includes('Zuerst ist es nur ein Schnupfen'));
  t('Corpus B1 b1-r13 prescription question matches the painkiller',
    b1q('b1-r13', 1).prompt === 'ماذا وصف الطبيب؟' &&
      b1q('b1-r13', 1).key === 'مسكّنًا' &&
      b1q('b1-r13', 1).options.includes(b1q('b1-r13', 1).key) &&
      b1Texts['b1-r13'].body.includes('verschreibt ein Schmerzmittel'));
  t('Corpus B1 b1-r14 has 236 measured words and no unknown B1 tokens',
    b1Texts['b1-r14'].title === 'Unterwegs in der Stadt' &&
      b1Texts['b1-r14'].body.trim().split(/\s+/).length === 236 &&
      known.coverage(b1Known, b1Texts['b1-r14'].body).unknown.length === 0);
  t('Corpus B1 b1-r14 keeps the tram signs and next-day plan coherent',
    b1Texts['b1-r14'].body.includes('obwohl sie heute voll ist. Das grüne Schild zum Notausgang zeigt nach hinten') &&
      b1Texts['b1-r14'].body.includes('So bleibt mein Kopf frei, und der Rest kann ruhig bis morgen warten') &&
      b1Texts['b1-r14'].body.includes('Am nächsten Morgen ist die Liste wieder voll') &&
      !b1Texts['b1-r14'].body.includes('der Korb schon wieder ganz leer'));
  t('Corpus B1 b1-r14 braking question matches the crossing pedestrian',
    b1q('b1-r14', 0).prompt === 'لماذا يفرمل الراوي؟' &&
      b1q('b1-r14', 0).key === 'لأن أحد المشاة يعبر' &&
      b1q('b1-r14', 0).options.includes(b1q('b1-r14', 0).key) &&
      b1Texts['b1-r14'].body.includes('Ich bremse, weil ein Fußgänger über die Einbahnstraße geht'));
  t('Corpus B1 b1-r14 emergency-exit question names the sign that points backward',
    b1q('b1-r14', 1).prompt === 'إلى أين تشير لافتة مخرج الطوارئ؟' &&
      b1q('b1-r14', 1).key === 'إلى الخلف' &&
      b1q('b1-r14', 1).options.includes(b1q('b1-r14', 1).key) &&
      b1Texts['b1-r14'].body.includes('Das grüne Schild zum Notausgang zeigt nach hinten'));
  t('Corpus B1 b1-r15 has 237 measured words and no unknown B1 tokens',
    b1Texts['b1-r15'].title === 'Einkaufen und kochen' &&
      b1Texts['b1-r15'].body.trim().split(/\s+/).length === 237 &&
      known.coverage(b1Known, b1Texts['b1-r15'].body).unknown.length === 0);
  t('Corpus B1 b1-r15 explains regional food words and keeps the leftovers consistent',
    b1Texts['b1-r15'].body.includes('Karotten, die man auch Möhren nennt') &&
      b1Texts['b1-r15'].body.includes('stelle die Pfanne mit dem Poulet danach in den Backofen') &&
      b1Texts['b1-r15'].body.includes('Der Erdapfel aus dem eigenen Garten ist kleiner, schmeckt aber besser') &&
      b1Texts['b1-r15'].body.includes('Den ganzen Rest friere ich für Montag ein, damit ich dann nicht kochen muss') &&
      !b1Texts['b1-r15'].body.includes('essen wir zusammen den ganzen Rest und ich friere einen Teil ein'));
  t('Corpus B1 b1-r15 replacement-purchase question matches the chicken',
    b1q('b1-r15', 0).prompt === 'ماذا اشترى بدل اللحم المفروم؟' &&
      b1q('b1-r15', 0).key === 'دجاجًا' &&
      b1q('b1-r15', 0).options.includes(b1q('b1-r15', 0).key) &&
      b1Texts['b1-r15'].body.includes('kein Hackfleisch mehr, also kaufe ich Poulet'));
  t('Corpus B1 b1-r15 tip question names the snack bar and matches no tip',
    b1q('b1-r15', 1).prompt === 'كم إكرامية ترك في محل الوجبات الخفيفة؟' &&
      b1q('b1-r15', 1).key === 'لا شيء' &&
      b1q('b1-r15', 1).options.includes(b1q('b1-r15', 1).key) &&
      b1Texts['b1-r15'].body.includes('Im Imbiss an der Ecke') &&
      b1Texts['b1-r15'].body.includes('gebe kein Trinkgeld'));
  t('Corpus B1 b1-r16 has 237 measured words and no unknown B1 tokens',
    b1Texts['b1-r16'].title === 'Gewitter über dem Hügel' &&
      b1Texts['b1-r16'].body.trim().split(/\s+/).length === 237 &&
      known.coverage(b1Known, b1Texts['b1-r16'].body).unknown.length === 0);
  t('Corpus B1 b1-r16 keeps the storm, roof check, and aftermath coherent',
    b1Texts['b1-r16'].body.includes('dass sich die alten Fenster bewegen') &&
      b1Texts['b1-r16'].body.includes('im Frühling sicher wieder ein starkes Gewitter gibt') &&
      b1Texts['b1-r16'].body.includes('das helle Dach vorher prüfen soll') &&
      b1Texts['b1-r16'].body.includes('einen festen Termin für den nächsten Herbst') &&
      b1Texts['b1-r16'].body.includes('Die kurze Zeit der Ruhe direkt nach dem schweren Gewitter'));
  t('Corpus B1 b1-r16 opening-weather question matches the July heat',
    b1q('b1-r16', 0).prompt === 'كيف كان الطقس في بداية النص؟' &&
      b1q('b1-r16', 0).key === 'حرارة شديدة' &&
      b1q('b1-r16', 0).options.includes(b1q('b1-r16', 0).key) &&
      b1Texts['b1-r16'].body.startsWith('Im Juli ist die große Hitze kaum auszuhalten'));
  t('Corpus B1 b1-r16 fruit question matches the poisonous fruit',
    b1q('b1-r16', 1).prompt === 'لماذا لا تؤكل ثمار شجرة الجار؟' &&
      b1q('b1-r16', 1).key === 'الثمار سامة' &&
      b1q('b1-r16', 1).options.includes(b1q('b1-r16', 1).key) &&
      b1Texts['b1-r16'].body.includes('seine Früchte sind rot, aber giftig'));
  t('Corpus B1 b1-r17 has 238 measured words and no unknown B1 tokens',
    b1Texts['b1-r17'].title === 'Am Bankschalter' &&
      b1Texts['b1-r17'].body.trim().split(/\s+/).length === 238 &&
      known.coverage(b1Known, b1Texts['b1-r17'].body).unknown.length === 0);
  t('Corpus B1 b1-r17 distinguishes regional ATM terms, the card, and the branch visit',
    b1Texts['b1-r17'].body.includes('In der Schweiz heißt der Geldautomat Bancomat') &&
      b1Texts['b1-r17'].body.includes('ein österreichischer Geldautomat heißt Bankomat') &&
      b1Texts['b1-r17'].body.includes('Meine Bank nennt die EC-Karte offiziell eine moderne Chipkarte') &&
      b1Texts['b1-r17'].body.includes('prüfe ich zuerst online, was fehlt') &&
      b1Texts['b1-r17'].body.includes('wenn ich dort wirklich etwas abgeben muss'));
  t('Corpus B1 b1-r17 cause question matches the old defective card',
    b1q('b1-r17', 0).prompt === 'ما سبب المشكلة في النهاية؟' &&
      b1q('b1-r17', 0).key === 'البطاقة القديمة المعطوبة' &&
      b1q('b1-r17', 0).options.includes(b1q('b1-r17', 0).key) &&
      b1Texts['b1-r17'].body.includes('die alte, defekte Karte als Ursache'));
  t('Corpus B1 b1-r17 Friday question matches the new card',
    b1q('b1-r17', 1).prompt === 'ما الذي ينتظره الراوي حتى الجمعة؟' &&
      b1q('b1-r17', 1).key === 'بطاقة جديدة' &&
      b1q('b1-r17', 1).options.includes(b1q('b1-r17', 1).key) &&
      b1Texts['b1-r17'].body.includes('Spätestens am Freitag soll die neue da sein'));
  t('Corpus B1 b1-r18 has 237 measured words and no unknown B1 tokens',
    b1Texts['b1-r18'].title === 'Computer, Netz und Büro' &&
      b1Texts['b1-r18'].body.trim().split(/\s+/).length === 237 &&
      known.coverage(b1Known, b1Texts['b1-r18'].body).unknown.length === 0);
  t('Corpus B1 b1-r18 keeps shutdown, messages, and digital filing coherent',
    b1Texts['b1-r18'].body.includes('Bevor ich den Computer herunterfahre, speichere ich alles') &&
      b1Texts['b1-r18'].body.includes('wegen eines technischen Problems nicht zu verstehen') &&
      b1Texts['b1-r18'].body.includes('eine neue Struktur für die digitalen Ordner erstellt') &&
      b1Texts['b1-r18'].body.includes('jeder Ordner gehört zu einem klaren Thema') &&
      b1Texts['b1-r18'].body.includes('unsere Arbeit im Büro geht deutlich schneller'));
  t('Corpus B1 b1-r18 social-network question matches the slow network',
    b1q('b1-r18', 0).prompt === 'ما مشكلة الشبكة الاجتماعية؟' &&
      b1q('b1-r18', 0).key === 'بطيئة' &&
      b1q('b1-r18', 0).options.includes(b1q('b1-r18', 0).key) &&
      b1Texts['b1-r18'].body.includes('das soziale Netzwerk ist wieder langsam'));
  t('Corpus B1 b1-r18 photo question matches the creative colleague',
    b1q('b1-r18', 1).prompt === 'من يلتقط صور التقرير الأخير؟' &&
      b1q('b1-r18', 1).key === 'زميل مبدع' &&
      b1q('b1-r18', 1).options.includes(b1q('b1-r18', 1).key) &&
      b1Texts['b1-r18'].body.includes('Die Fotos für den letzten Bericht macht ein junger Kollege, weil er kreativ ist'));
  t('Corpus B1 b1-r19 has 242 measured words and no unknown B1 tokens',
    b1Texts['b1-r19'].title === 'Brief an die Versicherung' &&
      b1Texts['b1-r19'].body.trim().split(/\s+/).length === 242 &&
      known.coverage(b1Known, b1Texts['b1-r19'].body).unknown.length === 0);
  t('Corpus B1 b1-r19 keeps the insurance letter and follow-up coherent',
    b1Texts['b1-r19'].body.includes('weil sich meine Daten geändert haben') &&
      b1Texts['b1-r19'].body.includes('Ihr Büro hat dafür wahrscheinlich alte Angaben eingesetzt') &&
      b1Texts['b1-r19'].body.includes('dass meine neuen Daten aufgenommen werden') &&
      b1Texts['b1-r19'].body.includes('welche sind für die Entsorgung bestimmt') &&
      !b1Texts['b1-r19'].body.includes('ein Grundstück bekommen'));
  t('Corpus B1 b1-r19 reason-for-writing question matches the changed data',
    b1q('b1-r19', 0).prompt === 'لماذا كتب إلى شركة التأمين؟' &&
      b1q('b1-r19', 0).key === 'تغيّرت بياناته' &&
      b1q('b1-r19', 0).options.includes(b1q('b1-r19', 0).key) &&
      b1Texts['b1-r19'].body.includes('weil sich meine Daten geändert haben'));
  t('Corpus B1 b1-r19 high-amount question matches the old-data calculation',
    b1q('b1-r19', 1).prompt === 'لماذا كان المبلغ مرتفعًا؟' &&
      b1q('b1-r19', 1).key === 'استُخدمت بيانات قديمة' &&
      b1q('b1-r19', 1).options.includes(b1q('b1-r19', 1).key) &&
      b1Texts['b1-r19'].body.includes('hatte den Beitrag mit alten Daten berechnet'));
  t('Corpus B1 b1-r20 has 252 measured words and no unknown B1 tokens',
    b1Texts['b1-r20'].title === 'Auf dem Land' &&
      b1Texts['b1-r20'].body.trim().split(/\s+/).length === 252 &&
      known.coverage(b1Known, b1Texts['b1-r20'].body).unknown.length === 0);
  t('Corpus B1 b1-r20 keeps rural life, transport, and the move coherent',
    b1Texts['b1-r20'].body.includes('Seit zwei Jahren wohnen wir auf dem Land') &&
      b1Texts['b1-r20'].body.includes('die alte Heizung verbraucht viel Energie') &&
      b1Texts['b1-r20'].body.includes('dass der lange Weg in die Stadt sie nicht mehr stört') &&
      b1Texts['b1-r20'].body.includes('Im Winter fährt der Bus nur selten') &&
      b1Texts['b1-r20'].body.includes('Für die Kinder war der Umzug deshalb die richtige Entscheidung'));
  t('Corpus B1 b1-r20 original-house question matches the former storage building',
    b1q('b1-r20', 0).prompt === 'ماذا كان البيت في الأصل؟' &&
      b1q('b1-r20', 0).key === 'مخزنًا' &&
      b1q('b1-r20', 0).options.includes(b1q('b1-r20', 0).key) &&
      b1Texts['b1-r20'].body.includes('Das kleine Haus war ursprünglich ein altes Lager'));
  t('Corpus B1 b1-r20 living-alone question matches possible loneliness',
    b1q('b1-r20', 1).prompt === 'ماذا قد يحدث لمن يعيش وحده؟' &&
      b1q('b1-r20', 1).key === 'قد يشعر بالوحدة' &&
      b1q('b1-r20', 1).options.includes(b1q('b1-r20', 1).key) &&
      b1Texts['b1-r20'].body.includes('Wer allein lebt, kann sich leicht einsam fühlen'));
  t('Corpus B1 b1-r21 has 246 measured words and no unknown B1 tokens',
    b1Texts['b1-r21'].title === 'Strom und Wärme' &&
      b1Texts['b1-r21'].body.trim().split(/\s+/).length === 246 &&
      known.coverage(b1Known, b1Texts['b1-r21'].body).unknown.length === 0);
  t('Corpus B1 b1-r21 keeps heating, costs, and saving measures coherent',
    b1Texts['b1-r21'].body.includes('Wenn wir weniger heizen, sparen wir wirklich Energie und Geld') &&
      b1Texts['b1-r21'].body.includes('Jeden Monat schreiben wir den Verbrauch auf') &&
      b1Texts['b1-r21'].body.includes('Verbote allein reichen jedoch nicht') &&
      b1Texts['b1-r21'].body.includes('Lampen ausgetauscht, die weniger Strom brauchen') &&
      b1Texts['b1-r21'].body.includes('die alte Heizung prüfen lassen'));
  t('Corpus B1 b1-r21 reduced-heating question matches energy and money savings',
    b1q('b1-r21', 0).prompt === 'ماذا تقول الكاتبة عن خفض التدفئة؟' &&
      b1q('b1-r21', 0).key === 'يوفّر الطاقة والمال' &&
      b1q('b1-r21', 0).options.includes(b1q('b1-r21', 0).key) &&
      b1Texts['b1-r21'].body.includes('weniger heizen, sparen wir wirklich Energie und Geld'));
  t('Corpus B1 b1-r21 ban-only question matches the need for financial help',
    b1q('b1-r21', 1).prompt === 'ما رأيها في المنع وحده؟' &&
      b1q('b1-r21', 1).key === 'لا يكفي' &&
      b1q('b1-r21', 1).options.includes(b1q('b1-r21', 1).key) &&
      b1Texts['b1-r21'].body.includes('Verbote allein reichen jedoch nicht'));
  t('Corpus B1 b1-r22 has 253 measured words and no unknown B1 tokens',
    b1Texts['b1-r22'].title === 'Ausbildung in Zahlen' &&
      b1Texts['b1-r22'].body.trim().split(/\s+/).length === 253 &&
      known.coverage(b1Known, b1Texts['b1-r22'].body).unknown.length === 0);
  t('Corpus B1 b1-r22 keeps training, practice, and course evaluation coherent',
    b1Texts['b1-r22'].body.includes('ob der Beruf und die tägliche Arbeit zu ihm passen') &&
      b1Texts['b1-r22'].body.includes('Wenn Betreuer fehlen, behindert das die Ausbildung') &&
      b1Texts['b1-r22'].body.includes('Klar ist jedenfalls: Ein Abschluss ohne Praxis hilft später wenig') &&
      b1Texts['b1-r22'].body.includes('welche Themen verstanden waren und wo Fragen blieben') &&
      b1Texts['b1-r22'].body.includes('Eine lange, langweilige Wiederholung ist nicht nötig'));
  t('Corpus B1 b1-r22 activity-to-profession question matches the first research task',
    b1q('b1-r22', 0).prompt === 'ما الذي يجب تحديده أولًا؟' &&
      b1q('b1-r22', 0).key === 'أي نشاط يناسب أي مهنة' &&
      b1q('b1-r22', 0).options.includes(b1q('b1-r22', 0).key) &&
      b1Texts['b1-r22'].body.includes('welche Tätigkeit zu welchem Beruf passt'));
  t('Corpus B1 b1-r22 weekly-writing question matches the short report',
    b1q('b1-r22', 1).prompt === 'ماذا يكتبون كل أسبوع؟' &&
      b1q('b1-r22', 1).key === 'تقرير قصير' &&
      b1q('b1-r22', 1).options.includes(b1q('b1-r22', 1).key) &&
      b1Texts['b1-r22'].body.includes('jede Woche einen kurzen Bericht'));
  t('Corpus B1 b1-r23 has 257 measured words and no unknown B1 tokens',
    b1Texts['b1-r23'].title === 'Wohnungssuche mit Hindernissen' &&
      b1Texts['b1-r23'].body.trim().split(/\s+/).length === 257 &&
      known.coverage(b1Known, b1Texts['b1-r23'].body).unknown.length === 0);
  t('Corpus B1 b1-r23 keeps both rejected offers and the final home coherent',
    b1Texts['b1-r23'].body.includes('Fotos künstlich heller gemacht worden waren') &&
      b1Texts['b1-r23'].body.includes('Der Bau war also illegal') &&
      b1Texts['b1-r23'].body.includes('Diesmal waren alle Unterlagen vollständig') &&
      b1Texts['b1-r23'].body.includes('den schlanken Baum in der Mitte des Hofes') &&
      b1Texts['b1-r23'].body.includes('trotz der schwierigen Suche die richtige Entscheidung'));
  t('Corpus B1 b1-r23 image question matches the artificially brightened photos',
    b1q('b1-r23', 0).prompt === 'كيف عُدّلت صور الإعلان الأول؟' &&
      b1q('b1-r23', 0).key === 'جُعلت أكثر سطوعًا بصورة مصطنعة' &&
      b1q('b1-r23', 0).options.includes(b1q('b1-r23', 0).key) &&
      b1Texts['b1-r23'].body.includes('Fotos künstlich heller gemacht worden waren'));
  t('Corpus B1 b1-r23 second-offer question matches the illegal construction',
    b1q('b1-r23', 1).prompt === 'لماذا لم يوقّعوا عقد العرض الثاني؟' &&
      b1q('b1-r23', 1).key === 'لأن جزءًا من البناء كان غير قانوني' &&
      b1q('b1-r23', 1).options.includes(b1q('b1-r23', 1).key) &&
      b1Texts['b1-r23'].body.includes('keine Erlaubnis') &&
      b1Texts['b1-r23'].body.includes('Der Bau war also illegal'));
  t('Corpus B1 b1-r24 has 261 measured words and no unknown B1 tokens',
    b1Texts['b1-r24'].title === 'Das große Spiel' &&
      b1Texts['b1-r24'].body.trim().split(/\s+/).length === 261 &&
      known.coverage(b1Known, b1Texts['b1-r24'].body).unknown.length === 0);
  t('Corpus B1 b1-r24 keeps the match, fan reaction, and training coherent',
    b1Texts['b1-r24'].body.includes('keine Mannschaft nutzte sie') &&
      b1Texts['b1-r24'].body.includes('traf während des Spiels schwierige Entscheidungen') &&
      b1Texts['b1-r24'].body.includes('Niemand feierte einen Sieg') &&
      b1Texts['b1-r24'].body.includes('Dann klatschten die treuen Fans') &&
      b1Texts['b1-r24'].body.includes('ruhige Gespräche und weiteres Üben seien besser als Schimpfen'));
  t('Corpus B1 b1-r24 result question matches the draw',
    b1q('b1-r24', 0).prompt === 'بأي نتيجة انتهت المباراة؟' &&
      b1q('b1-r24', 0).key === 'بالتعادل' &&
      b1q('b1-r24', 0).options.includes(b1q('b1-r24', 0).key) &&
      b1Texts['b1-r24'].body.includes('Ergebnis bis zum Schluss unentschieden'));
  t('Corpus B1 b1-r24 support question matches the coach statement',
    b1q('b1-r24', 1).prompt === 'كيف وصف المدرّب دعم الجهات السياسية للرياضة؟' &&
      b1q('b1-r24', 1).key === 'بأنه ضعيف' &&
      b1q('b1-r24', 1).options.includes(b1q('b1-r24', 1).key) &&
      b1Texts['b1-r24'].body.includes('von der Politik aber nur schwach unterstützt'));
  t('Corpus B1 b1-r25 has 266 measured words and only the retained Streifen token unknown',
    b1Texts['b1-r25'].title === 'Ein Wochenende an der Küste' &&
      b1Texts['b1-r25'].body.trim().split(/\s+/).length === 266 &&
      known.coverage(b1Known, b1Texts['b1-r25'].body).unknown.length === 1 &&
      known.coverage(b1Known, b1Texts['b1-r25'].body).unknown[0] === 'streifen');
  t('Corpus B1 b1-r25 keeps the coast trip, stay, activities, and return coherent',
    b1Texts['b1-r25'].body.includes('mit dem Zug an die Ostsee') &&
      b1Texts['b1-r25'].body.includes('erklärte den Weg vom Bahnhof zur Wohnung') &&
      b1Texts['b1-r25'].body.includes('einen langen Spaziergang am Strand') &&
      b1Texts['b1-r25'].body.includes('Auf der Rückfahrt planten wir'));
  t('Corpus B1 b1-r25 travel question matches the train journey to the Baltic coast',
    b1q('b1-r25', 0).prompt === 'بأي وسيلة سافر الراوي ومن معه إلى ساحل بحر البلطيق؟' &&
      b1q('b1-r25', 0).key === 'بالقطار' &&
      b1q('b1-r25', 0).options.includes(b1q('b1-r25', 0).key) &&
      b1Texts['b1-r25'].body.includes('mit dem Zug an die Ostsee'));
  t('Corpus B1 b1-r25 forgotten-item question matches the lighter needed for the candle',
    b1q('b1-r25', 1).prompt === 'ما الشيء الذي نسوه في المنزل واحتاجوا إليه للشمعة؟' &&
      b1q('b1-r25', 1).key === 'الولّاعة' &&
      b1q('b1-r25', 1).options.includes(b1q('b1-r25', 1).key) &&
      b1Texts['b1-r25'].body.includes('Feuerzeug, aber unseres hatten wir zu Hause vergessen'));
  t('Corpus B1 b1-r26 has 259 measured words and no unknown B1 tokens',
    b1Texts['b1-r26'].title === 'Der Dienstag' &&
      b1Texts['b1-r26'].body.trim().split(/\s+/).length === 259 &&
      known.coverage(b1Known, b1Texts['b1-r26'].body).unknown.length === 0);
  t('Corpus B1 b1-r26 keeps waste collection, the leak, repair, and chore plan coherent',
    b1Texts['b1-r26'].body.includes('Müllabfuhr jeden Dienstag früh') &&
      b1Texts['b1-r26'].body.includes('Unter der Spüle läuft Wasser aus einem Rohr') &&
      b1Texts['b1-r26'].body.includes('Der Handwerker ersetzt das Rohr') &&
      b1Texts['b1-r26'].body.includes('schreiben wir einen neuen Plan für den Haushalt'));
  t('Corpus B1 b1-r26 collection-day question matches the early Tuesday pickup',
    b1q('b1-r26', 0).prompt === 'في أي يوم تأتي شاحنة جمع النفايات مبكرًا؟' &&
      b1q('b1-r26', 0).key === 'الثلاثاء' &&
      b1q('b1-r26', 0).options.includes(b1q('b1-r26', 0).key) &&
      b1Texts['b1-r26'].body.includes('Müllabfuhr jeden Dienstag früh'));
  t('Corpus B1 b1-r26 repair question matches the pipe under the sink',
    b1q('b1-r26', 1).prompt === 'ما الذي استبدله فنّي الصيانة؟' &&
      b1q('b1-r26', 1).key === 'الأنبوب تحت المغسلة' &&
      b1q('b1-r26', 1).options.includes(b1q('b1-r26', 1).key) &&
      b1Texts['b1-r26'].body.includes('Unter der Spüle läuft Wasser aus einem Rohr') &&
      b1Texts['b1-r26'].body.includes('Der Handwerker ersetzt das Rohr'));
  t('Corpus B1 b1-r27 has 261 measured words and no unknown B1 tokens',
    b1Texts['b1-r27'].title === 'Musik im Dorf' &&
      b1Texts['b1-r27'].body.trim().split(/\s+/).length === 261 &&
      known.coverage(b1Known, b1Texts['b1-r27'].body).unknown.length === 0);
  t('Corpus B1 b1-r27 keeps the move, festival, performance, and belonging coherent',
    b1Texts['b1-r27'].body.includes('lange in der Stadt gelebt') &&
      b1Texts['b1-r27'].body.includes('beim Aufbau zu helfen') &&
      b1Texts['b1-r27'].body.includes('Die Leiterin des Orchesters begrüßte alle kurz') &&
      b1Texts['b1-r27'].body.includes('Das Dorf ist für mich jetzt weniger fremd'));
  t('Corpus B1 b1-r27 flute question matches the young village musician',
    b1q('b1-r27', 0).prompt === 'من عزف الناي في الحفل؟' &&
      b1q('b1-r27', 0).key === 'امرأة شابة من القرية' &&
      b1q('b1-r27', 0).options.includes(b1q('b1-r27', 0).key) &&
      b1Texts['b1-r27'].body.includes('Eine junge Frau aus dem Dorf spielte Flöte'));
  t('Corpus B1 b1-r27 mood question matches the narrator homesickness',
    b1q('b1-r27', 1).prompt === 'لماذا كان مزاج الراوي سيئًا في بداية الحفل؟' &&
      b1q('b1-r27', 1).key === 'لأنه كان يحنّ إلى المدينة' &&
      b1q('b1-r27', 1).options.includes(b1q('b1-r27', 1).key) &&
      b1Texts['b1-r27'].body.includes('weil ich Heimweh nach der Stadt hatte'));
  t('Corpus B1 b1-r28 has 263 measured words and only the retained nachholen token unknown',
    b1Texts['b1-r28'].title === 'Sprachkurs und ein Brief' &&
      b1Texts['b1-r28'].body.trim().split(/\s+/).length === 263 &&
      known.coverage(b1Known, b1Texts['b1-r28'].body).unknown.length === 1 &&
      known.coverage(b1Known, b1Texts['b1-r28'].body).unknown[0] === 'nachholen');
  t('Corpus B1 b1-r28 keeps the course, book replacement, practice, and letter coherent',
    b1Texts['b1-r28'].body.includes('einen Intensivkurs für Deutsch als Zweitsprache') &&
      b1Texts['b1-r28'].body.includes('mehrere Seiten ihres Buches fehlten') &&
      b1Texts['b1-r28'].body.includes('während ich unser Gespräch aufnehme') &&
      b1Texts['b1-r28'].body.includes('schrieb sie der Kursleiterin einen kurzen Brief'));
  t('Corpus B1 b1-r28 course question matches the intensive German course',
    b1q('b1-r28', 0).prompt === 'ما نوع دورة اللغة الألمانية التي تحضرها صديقة الراوي؟' &&
      b1q('b1-r28', 0).key === 'دورة مكثّفة' &&
      b1q('b1-r28', 0).options.includes(b1q('b1-r28', 0).key) &&
      b1Texts['b1-r28'].body.includes('einen Intensivkurs für Deutsch als Zweitsprache'));
  t('Corpus B1 b1-r28 replacement question matches the book with missing pages',
    b1q('b1-r28', 1).prompt === 'ماذا طلبت الصديقة بعدما اكتشفت أن صفحات من كتابها مفقودة؟' &&
      b1q('b1-r28', 1).key === 'كتابًا بديلًا' &&
      b1q('b1-r28', 1).options.includes(b1q('b1-r28', 1).key) &&
      b1Texts['b1-r28'].body.includes('mehrere Seiten ihres Buches fehlten') &&
      b1Texts['b1-r28'].body.includes('verlangte Ersatz'));
  t('Corpus B1 b1-r29 has 264 measured words and no unknown B1 tokens',
    b1Texts['b1-r29'].title === 'Beim Einzug' &&
      b1Texts['b1-r29'].body.trim().split(/\s+/).length === 264 &&
      known.coverage(b1Known, b1Texts['b1-r29'].body).unknown.length === 0);
  t('Corpus B1 b1-r29 keeps the move, unpacking, repairs, and finishing work coherent',
    b1Texts['b1-r29'].body.includes('neue Wohnung in der dritten Etage') &&
      b1Texts['b1-r29'].body.includes('tragen wir die Möbel in die richtigen Zimmer') &&
      b1Texts['b1-r29'].body.includes('Die eckige Kommode steht schief') &&
      b1Texts['b1-r29'].body.includes('befestigen wir die Regale sicher an der Wand'));
  t('Corpus B1 b1-r29 floor question matches the third-floor apartment',
    b1q('b1-r29', 0).prompt === 'في أي طابق تقع الشقة الجديدة؟' &&
      b1q('b1-r29', 0).key === 'الثالث' &&
      b1q('b1-r29', 0).options.includes(b1q('b1-r29', 0).key) &&
      b1Texts['b1-r29'].body.includes('Wohnung in der dritten Etage'));
  t('Corpus B1 b1-r29 waste question matches the sack of packaging remains',
    b1q('b1-r29', 1).prompt === 'ماذا حمل الراوي إلى حاوية النفايات في الفناء؟' &&
      b1q('b1-r29', 1).key === 'كيسًا كبيرًا فيه بقايا مواد التغليف' &&
      b1q('b1-r29', 1).options.includes(b1q('b1-r29', 1).key) &&
      b1Texts['b1-r29'].body.includes('Reste der Verpackungen in einen großen Sack') &&
      b1Texts['b1-r29'].body.includes('bringe ihn zur Mülltonne im Hof'));
  t('Corpus B1 b1-r30 has 292 measured words and only the retained Vegetarierin token unknown',
    b1Texts['b1-r30'].title === 'Auf dem Markt und in der Küche' &&
      b1Texts['b1-r30'].body.trim().split(/\s+/).length === 292 &&
      known.coverage(b1Known, b1Texts['b1-r30'].body).unknown.length === 1 &&
      known.coverage(b1Known, b1Texts['b1-r30'].body).unknown[0] === 'vegetarierin');
  t('Corpus B1 b1-r30 keeps the market, regional terms, cooking, and snack times coherent',
    b1Texts['b1-r30'].body.includes('in Österreich Paradeiser heißt') &&
      b1Texts['b1-r30'].body.includes('nennt die Pilze Schwammerl') &&
      b1Texts['b1-r30'].body.includes('die Pause am Vormittag Znüni und die am Nachmittag Zvieri') &&
      b1Texts['b1-r30'].body.includes('während ich die Soße mische und probiere'));
  t('Corpus B1 b1-r30 Paradeiser question matches the Austrian word for tomato',
    b1q('b1-r30', 0).prompt === 'ماذا تعني كلمة Paradeiser في النمسا؟' &&
      b1q('b1-r30', 0).key === 'البندورة' &&
      b1q('b1-r30', 0).options.includes(b1q('b1-r30', 0).key) &&
      b1Texts['b1-r30'].body.includes('eine Tomate in Österreich Paradeiser heißt'));
  t('Corpus B1 b1-r30 Henderl question matches the vegetarian sister',
    b1q('b1-r30', 1).prompt === 'لماذا ترك الراوي الـHenderl ولم يشتره؟' &&
      b1q('b1-r30', 1).key === 'لأن أخته لا تأكل اللحم' &&
      b1q('b1-r30', 1).options.includes(b1q('b1-r30', 1).key) &&
      b1Texts['b1-r30'].body.includes('nennt es Henderl') &&
      b1Texts['b1-r30'].body.includes('Meine Schwester isst kein Fleisch, deshalb lasse ich es liegen'));
  t('Corpus B1 b1-r31 has 312 measured words and only the retained Nachbardorf token unknown',
    b1Texts['b1-r31'].title === 'Unser Verein' &&
      b1Texts['b1-r31'].body.trim().split(/\s+/).length === 312 &&
      known.coverage(b1Known, b1Texts['b1-r31'].body).unknown.length === 1 &&
      known.coverage(b1Known, b1Texts['b1-r31'].body).unknown[0] === 'nachbardorf');
  t('Corpus B1 b1-r31 keeps the match, training, annual programme, and volunteer work coherent',
    b1Texts['b1-r31'].body.includes('Beim letzten Spiel war das Stadion voll') &&
      b1Texts['b1-r31'].body.includes('beginnt jedes Training mit Gymnastik und einem langsamen Lauf') &&
      b1Texts['b1-r31'].body.includes('Im Winter gehen einige Gruppen zum Schwimmen ins Hallenbad') &&
      b1Texts['b1-r31'].body.includes('hängt die neue Tür wieder ein'));
  t('Corpus B1 b1-r31 spectator question matches the last match attendance',
    b1q('b1-r31', 0).prompt === 'كم مشاهدًا حضروا المباراة الأخيرة؟' &&
      b1q('b1-r31', 0).key === 'ألفان' &&
      b1q('b1-r31', 0).options.includes(b1q('b1-r31', 0).key) &&
      b1Texts['b1-r31'].body.includes('Zweitausend Zuschauer'));
  t('Corpus B1 b1-r31 winter question matches the club groups at the indoor pool',
    b1q('b1-r31', 1).prompt === 'إلى أين تذهب بعض مجموعات النادي في الشتاء؟' &&
      b1q('b1-r31', 1).key === 'إلى المسبح المغطّى' &&
      b1q('b1-r31', 1).options.includes(b1q('b1-r31', 1).key) &&
      b1Texts['b1-r31'].body.includes('Im Winter gehen einige Gruppen zum Schwimmen ins Hallenbad'));
  t('Corpus B1 b1-r32 has 323 measured words and only the retained Regenwasser token unknown',
    b1Texts['b1-r32'].title === 'In der Stadt unterwegs' &&
      b1Texts['b1-r32'].body.trim().split(/\s+/).length === 323 &&
      known.coverage(b1Known, b1Texts['b1-r32'].body).unknown.length === 1 &&
      known.coverage(b1Known, b1Texts['b1-r32'].body).unknown[0] === 'regenwasser');
  t('Corpus B1 b1-r32 keeps arrival, regional terms, the bicycle tour, and return coherent',
    b1Texts['b1-r32'].body.includes('Nach der Landung des Flugzeugs organisiert meine Freundin den Transport') &&
      b1Texts['b1-r32'].body.includes('Ein Velo ist ein Fahrrad, und Trottoir bedeutet Gehsteig') &&
      b1Texts['b1-r32'].body.includes('zwei Velos für eine Rundfahrt quer durch die Stadt') &&
      b1Texts['b1-r32'].body.includes('Unsere Rückkehr am Sonntag ist mit dem direkten Zug geplant'));
  t('Corpus B1 b1-r32 Trottoir question matches the Swiss word for pavement',
    b1q('b1-r32', 0).prompt === 'ماذا تعني كلمة Trottoir في سويسرا؟' &&
      b1q('b1-r32', 0).key === 'الرصيف' &&
      b1q('b1-r32', 0).options.includes(b1q('b1-r32', 0).key) &&
      b1Texts['b1-r32'].body.includes('Trottoir bedeutet Gehsteig'));
  t('Corpus B1 b1-r32 luggage question matches the narrator carrying one light backpack',
    b1q('b1-r32', 1).prompt === 'ما الأمتعة التي ينقلها الراوي بنفسه؟' &&
      b1q('b1-r32', 1).key === 'حقيبة ظهر خفيفة فقط' &&
      b1q('b1-r32', 1).options.includes(b1q('b1-r32', 1).key) &&
      b1Texts['b1-r32'].body.includes('Ich transportiere selbst nur einen leichten Rucksack'));
  t('Corpus B1 b1-r33 has 322 measured words and no unknown B1 tokens',
    b1Texts['b1-r33'].title === 'Krank und wieder gesund' &&
      b1Texts['b1-r33'].body.trim().split(/\s+/).length === 322 &&
      known.coverage(b1Known, b1Texts['b1-r33'].body).unknown.length === 0);
  t('Corpus B1 b1-r33 keeps the infection, emergency delay, hospital care, and recovery coherent',
    b1Texts['b1-r33'].body.includes('Ich bekam eine Infektion mit einem Virus') &&
      b1Texts['b1-r33'].body.includes('Wegen des Einsatzes begann mein Termin später') &&
      b1Texts['b1-r33'].body.includes('Die Klinik verpflegt alle Patienten') &&
      b1Texts['b1-r33'].body.includes('Meine Nachbarin hat ebenfalls mit kurzen Spaziergängen angefangen'));
  t('Corpus B1 b1-r33 delay question matches the emergency after the traffic accident',
    b1q('b1-r33', 0).prompt === 'لماذا بدأ موعد الراوي في المستشفى متأخرًا؟' &&
      b1q('b1-r33', 0).key === 'بسبب حالة طوارئ بعد حادث مروري' &&
      b1q('b1-r33', 0).options.includes(b1q('b1-r33', 0).key) &&
      b1Texts['b1-r33'].body.includes('Nach einem schweren Verkehrsunfall') &&
      b1Texts['b1-r33'].body.includes('Wegen des Einsatzes begann mein Termin später'));
  t('Corpus B1 b1-r33 addiction question matches the neighbour’s therapy and controlled medicine',
    b1q('b1-r33', 1).prompt === 'كيف تعالج الجارة إدمانها للأقراص؟' &&
      b1q('b1-r33', 1).key === 'تخضع للعلاج وتأخذ فقط الدواء الذي يختاره الطبيب' &&
      b1q('b1-r33', 1).options.includes(b1q('b1-r33', 1).key) &&
      b1Texts['b1-r33'].body.includes('Nun macht sie eine Therapie und nimmt nur noch die Medizin, die der Arzt für sie auswählt'));
  t('Corpus B1 b1-r34 has 311 measured words and no unknown B1 tokens',
    b1Texts['b1-r34'].title === 'Industrie und Institut' &&
      b1Texts['b1-r34'].body.trim().split(/\s+/).length === 311 &&
      known.coverage(b1Known, b1Texts['b1-r34'].body).unknown.length === 0);
  t('Corpus B1 b1-r34 keeps the institute course, factory project, office work, and next step coherent',
    b1Texts['b1-r34'].body.includes('besuche am Institut einen Kurs über moderne Produktion') &&
      b1Texts['b1-r34'].body.includes('ein neues Modell für eine Maschine entwickelt') &&
      b1Texts['b1-r34'].body.includes('Die Dateien liegen auf einem gemeinsamen Laufwerk') &&
      b1Texts['b1-r34'].body.includes('Nach dem Praktikum bekam ich einen Vertrag'));
  t('Corpus B1 b1-r34 success question matches the supervisor’s communication factor',
    b1q('b1-r34', 0).prompt === 'ما العامل الذي يقول المشرف إنه يحسم نجاح المشروع؟' &&
      b1q('b1-r34', 0).key === 'التواصل الجيد' &&
      b1q('b1-r34', 0).options.includes(b1q('b1-r34', 0).key) &&
      b1Texts['b1-r34'].body.includes('gute Kommunikation über den Erfolg des Projekts entscheidet'));
  t('Corpus B1 b1-r34 internship question matches the six-week factory placement guaranteed by the contract',
    b1q('b1-r34', 1).prompt === 'ما الذي يضمنه العقد لكل طالب في الدورة؟' &&
      b1q('b1-r34', 1).key === 'تدريبًا عمليًا لمدة ستة أسابيع في المصنع' &&
      b1q('b1-r34', 1).options.includes(b1q('b1-r34', 1).key) &&
      b1Texts['b1-r34'].body.includes('garantiert jedem Studenten im Kurs ein Praktikum für sechs Wochen in der Fabrik'));
  t('Corpus B1 b1-r35 has 327 measured words and no unknown B1 tokens',
    b1Texts['b1-r35'].title === 'Schule und Lernen' &&
      b1Texts['b1-r35'].body.trim().split(/\s+/).length === 327 &&
      known.coverage(b1Known, b1Texts['b1-r35'].body).unknown.length === 0);
  t('Corpus B1 b1-r35 keeps the upcoming test, study plan, course content, and practice coherent',
    b1Texts['b1-r35'].body.includes('In vier Wochen schreiben wir eine Klassenarbeit') &&
      b1Texts['b1-r35'].body.includes('Für Deutsch habe ich einen festen Plan') &&
      b1Texts['b1-r35'].body.includes('Die Schule braucht außerdem mehr Nachwuchs in technischen Berufen') &&
      b1Texts['b1-r35'].body.includes('Jeden Freitag üben wir für die Klassenarbeit'));
  t('Corpus B1 b1-r35 dictionary question matches underlining the rule and writing an example',
    b1q('b1-r35', 0).prompt === 'ماذا يفعل الراوي بعد البحث عن كلمة جديدة في المعجم؟' &&
      b1q('b1-r35', 0).key === 'يضع خطًا تحت القاعدة ويكتب مثالًا' &&
      b1q('b1-r35', 0).options.includes(b1q('b1-r35', 0).key) &&
      b1Texts['b1-r35'].body.includes('Danach unterstreiche ich die Regel und schreibe ein Beispiel'));
  t('Corpus B1 b1-r35 introduction question matches the professor writing the topic introduction',
    b1q('b1-r35', 1).prompt === 'من كتب مقدمة موضوع الدورة؟' &&
      b1q('b1-r35', 1).key === 'الأستاذة' &&
      b1q('b1-r35', 1).options.includes(b1q('b1-r35', 1).key) &&
      b1Texts['b1-r35'].body.includes('Die Professorin hat die Einführung in unser Thema selbst geschrieben'));
  t('Corpus B1 b1-r36 has 324 measured words and no unknown B1 tokens',
    b1Texts['b1-r36'].title === 'Gefühle und Miteinander' &&
      b1Texts['b1-r36'].body.trim().split(/\s+/).length === 324 &&
      known.coverage(b1Known, b1Texts['b1-r36'].body).unknown.length === 0);
  t('Corpus B1 b1-r36 keeps the delivery, move planning, conflict, and reconciliation coherent',
    b1Texts['b1-r36'].body.includes('weil die letzte Lieferung wieder fehlte') &&
      b1Texts['b1-r36'].body.includes('Der Streik der Fahrer hat die ganze Versammlung verschoben') &&
      b1Texts['b1-r36'].body.includes('Am nächsten Tag verteilten die Helfer dort ihre Aufgaben') &&
      b1Texts['b1-r36'].body.includes('Sie hat mir verziehen'));
  t('Corpus B1 b1-r36 embarrassment question matches forgetting the customer’s full name',
    b1q('b1-r36', 0).prompt === 'لماذا شعر الراوي بالحرج أمام الزبونة؟' &&
      b1q('b1-r36', 0).key === 'لأنه نسي اسم الزبونة الكامل' &&
      b1q('b1-r36', 0).options.includes(b1q('b1-r36', 0).key) &&
      b1Texts['b1-r36'].body.includes('ich hatte ihren vollen Namen vergessen'));
  t('Corpus B1 b1-r36 forgiveness question matches the sister forgiving the narrator',
    b1q('b1-r36', 1).prompt === 'ماذا فعلت أخت الراوي بعد أن اعتذر إليها؟' &&
      b1q('b1-r36', 1).key === 'سامحت الراوي' &&
      b1q('b1-r36', 1).options.includes(b1q('b1-r36', 1).key) &&
      b1Texts['b1-r36'].body.includes('Danach habe ich mich bei ihr entschuldigt') &&
      b1Texts['b1-r36'].body.includes('Sie hat mir verziehen'));
  t('Corpus B1 b1-r37 has 301 measured words and only the retained Staatsangehörigkeit token unknown',
    b1Texts['b1-r37'].title === 'Bei der Behörde' &&
      b1Texts['b1-r37'].body.trim().split(/\s+/).length === 301 &&
      known.coverage(b1Known, b1Texts['b1-r37'].body).unknown.length === 1 &&
      known.coverage(b1Known, b1Texts['b1-r37'].body).unknown[0] === 'staatsangehörigkeit');
  t('Corpus B1 b1-r37 keeps the office internship, three cases, and six-week decision coherent',
    b1Texts['b1-r37'].body.includes('bei einem Praktikum eine Beamtin auf dem Amt') &&
      b1Texts['b1-r37'].body.includes('Der erste Termin gehört einer alten Dame') &&
      b1Texts['b1-r37'].body.includes('Die Geburt meines Neffen ist noch nicht eingetragen') &&
      b1Texts['b1-r37'].body.includes('dass die strenge Prüfung etwa sechs Wochen dauert'));
  t('Corpus B1 b1-r37 details question matches the elderly woman’s residence and civil status',
    b1q('b1-r37', 0).prompt === 'ما المعلومتان اللتان تطلبهما الموظفة من السيدة المسنّة؟' &&
      b1q('b1-r37', 0).key === 'محل الإقامة والحالة المدنية' &&
      b1q('b1-r37', 0).options.includes(b1q('b1-r37', 0).key) &&
      b1Texts['b1-r37'].body.includes('Die Beamtin verlangt Wohnsitz und Zivilstand'));
  t('Corpus B1 b1-r37 registration question matches the missing original consular document',
    b1q('b1-r37', 1).prompt === 'لماذا لم تُسجَّل ولادة ابن أخت الراوي بعد؟' &&
      b1q('b1-r37', 1).key === 'لأن وثيقة القنصلية الأصلية لم تصل بعد' &&
      b1q('b1-r37', 1).options.includes(b1q('b1-r37', 1).key) &&
      b1Texts['b1-r37'].body.includes('weil eine Urkunde des Konsulats fehlt') &&
      b1Texts['b1-r37'].body.includes('das Original kommt als Einschreiben per Post'));
  t('Corpus B1 b1-r38 has 300 measured words and no unknown B1 tokens',
    b1Texts['b1-r38'].title === 'Feste im Dorf' &&
      b1Texts['b1-r38'].body.trim().split(/\s+/).length === 300 &&
      known.coverage(b1Known, b1Texts['b1-r38'].body).unknown.length === 0);
  t('Corpus B1 b1-r38 keeps the February festival, historical programme, local businesses, and annual planning coherent',
    b1Texts['b1-r38'].body.includes('Im Feber feiern wir in unserem Dorf Fasching') &&
      b1Texts['b1-r38'].body.includes('Das Mädchen spielt eine Heldin von der Burg') &&
      b1Texts['b1-r38'].body.includes('der halbe Ort lebt vom Tourismus') &&
      b1Texts['b1-r38'].body.includes('verteilen wir die Termine gemeinsam auf die Monate'));
  t('Corpus B1 b1-r38 costume question matches the neighbour sewing a costume for her daughter',
    b1q('b1-r38', 0).prompt === 'ماذا تخيط الجارة؟' &&
      b1q('b1-r38', 0).key === 'زيًّا تنكريًّا' &&
      b1q('b1-r38', 0).options.includes(b1q('b1-r38', 0).key) &&
      b1Texts['b1-r38'].body.includes('Die Nachbarin näht ein buntes Kostüm für ihre Tochter'));
  t('Corpus B1 b1-r38 letters question matches the old village woman’s historical reading',
    b1q('b1-r38', 1).prompt === 'من يقرأ الرسائل التاريخية؟' &&
      b1q('b1-r38', 1).key === 'امرأة من القرية' &&
      b1q('b1-r38', 1).options.includes(b1q('b1-r38', 1).key) &&
      b1Texts['b1-r38'].body.includes('Eine alte Frau aus dem Dorf liest historische Briefe'));
  t('Corpus B1 b1-r39 has 327 measured words and no unknown B1 tokens',
    b1Texts['b1-r39'].title === 'Tiere, Wetter und Natur' &&
      b1Texts['b1-r39'].body.trim().split(/\s+/).length === 327 &&
      known.coverage(b1Known, b1Texts['b1-r39'].body).unknown.length === 0);
  t('Corpus B1 b1-r39 keeps the country stay, storm preparation, garden work, cleanup, and return coherent',
    b1Texts['b1-r39'].body.includes('Am Wochenende fahren wir aufs Land') &&
      b1Texts['b1-r39'].body.includes('Nach einer Katastrophe im letzten Jahr haben wir das Haus stärker gebaut') &&
      b1Texts['b1-r39'].body.includes('Unter einem Stein liegt außerdem ein alter Zünder') &&
      b1Texts['b1-r39'].body.includes('Im Sommer fahren wir wieder aufs Land'));
  t('Corpus B1 b1-r39 cat question asks for quantity and matches the cat eating little each morning',
    b1q('b1-r39', 0).prompt === 'كم تأكل القطة كل صباح؟' &&
      b1q('b1-r39', 0).key === 'قليلًا' &&
      b1q('b1-r39', 0).options.includes(b1q('b1-r39', 0).key) &&
      b1Texts['b1-r39'].body.includes('Jeden Morgen will sie gefüttert werden. Sie frisst wenig'));
  t('Corpus B1 b1-r39 snake question matches its disappearance in the tall grass',
    b1q('b1-r39', 1).prompt === 'أين تختفي الأفعى عندما تقترب الأسرة؟' &&
      b1q('b1-r39', 1).key === 'في العشب الطويل' &&
      b1q('b1-r39', 1).options.includes(b1q('b1-r39', 1).key) &&
      b1Texts['b1-r39'].body.includes('verschwindet sie sofort im hohen Gras'));
  t('Corpus B1 b1-r40 has 334 measured words and no unknown B1 tokens',
    b1Texts['b1-r40'].title === 'Das Radio' &&
      b1Texts['b1-r40'].body.trim().split(/\s+/).length === 334 &&
      known.coverage(b1Known, b1Texts['b1-r40'].body).unknown.length === 0);
  t('Corpus B1 b1-r40 keeps the language routine, city programme, audience, newsroom cooperation, and follow-up coherent',
    b1Texts['b1-r40'].body.includes('Ich höre jeden Abend eine halbe Stunde') &&
      b1Texts['b1-r40'].body.includes('Eine Reporterin interviewt einen Spezialisten für den Bau') &&
      b1Texts['b1-r40'].body.includes('Der Sender arbeitet bei dieser Sendung mit einer Zeitung zusammen') &&
      b1Texts['b1-r40'].body.includes('Am Abend höre ich die Sendung noch einmal'));
  t('Corpus B1 b1-r40 medium question matches the narrator using radio most',
    b1q('b1-r40', 0).prompt === 'ما الوسيلة التي يستخدمها أكثر؟' &&
      b1q('b1-r40', 0).key === 'الراديو' &&
      b1q('b1-r40', 0).options.includes(b1q('b1-r40', 0).key) &&
      b1Texts['b1-r40'].body.includes('Das Medium, das ich am meisten nutze, ist das Radio'));
  t('Corpus B1 b1-r40 live-translation question matches the specialist’s translator colleague',
    b1q('b1-r40', 1).prompt === 'من تترجم مباشرة؟' &&
      b1q('b1-r40', 1).key === 'مترجمة' &&
      b1q('b1-r40', 1).options.includes(b1q('b1-r40', 1).key) &&
      b1Texts['b1-r40'].body.includes('seine Kollegin, eine Übersetzerin, seine Antworten live'));
  t('Corpus B1 b1-r41 has 333 measured words and no unknown B1 tokens',
    b1Texts['b1-r41'].title === 'Arbeit gesucht' &&
      b1Texts['b1-r41'].body.trim().split(/\s+/).length === 333 &&
      known.coverage(b1Known, b1Texts['b1-r41'].body).unknown.length === 0);
  t('Corpus B1 b1-r41 keeps the job search, company, application, interview, contract, and summer work coherent',
    b1Texts['b1-r41'].body.includes('Eine Firma für Möbel sucht eine Aushilfe für den Sommer') &&
      b1Texts['b1-r41'].body.includes('Nachdem ich zwei ausgewählt habe') &&
      b1Texts['b1-r41'].body.includes('Eine Anwältin prüft ihn') &&
      b1Texts['b1-r41'].body.includes('Im Sommer beginne ich die Arbeit im Büro am Markt'));
  t('Corpus B1 b1-r41 advertisement question matches the summer assistant position',
    b1q('b1-r41', 0).prompt === 'ما المطلوب في الإعلان؟' &&
      b1q('b1-r41', 0).key === 'مساعدة صيفية' &&
      b1q('b1-r41', 0).options.includes(b1q('b1-r41', 0).key) &&
      b1Texts['b1-r41'].body.includes('sucht eine Aushilfe für den Sommer'));
  t('Corpus B1 b1-r41 contract question matches the lawyer’s review',
    b1q('b1-r41', 1).prompt === 'من يفحص العقد؟' &&
      b1q('b1-r41', 1).key === 'المحامية' &&
      b1q('b1-r41', 1).options.includes(b1q('b1-r41', 1).key) &&
      b1Texts['b1-r41'].body.includes('Eine Anwältin prüft ihn, bevor ich ihn annehme'));
  t('Corpus B1 b1-r42 has 306 measured words and no unknown B1 tokens',
    b1Texts['b1-r42'].title === 'Sicherheit in der Stadt' &&
      b1Texts['b1-r42'].body.trim().split(/\s+/).length === 306 &&
      known.coverage(b1Known, b1Texts['b1-r42'].body).unknown.length === 0);
  t('Corpus B1 b1-r42 keeps the break-ins, escape, police case, house rules, and neighbourhood watch coherent',
    b1Texts['b1-r42'].body.includes('im letzten Winter zweimal eingebrochen worden') &&
      b1Texts['b1-r42'].body.includes('Bei der Flucht wurde ein fremder Radfahrer überfahren') &&
      b1Texts['b1-r42'].body.includes('Nach einigen Tagen konnte die Polizei') &&
      b1Texts['b1-r42'].body.includes('Wir haben für das Haus eine Liste gemacht'));
  t('Corpus B1 b1-r42 entry question matches the second break-in through the open balcony',
    b1q('b1-r42', 0).prompt === 'كيف دخل اللص المنزل في المرة الثانية؟' &&
      b1q('b1-r42', 0).key === 'عبر الشرفة المفتوحة' &&
      b1q('b1-r42', 0).options.includes(b1q('b1-r42', 0).key) &&
      b1Texts['b1-r42'].body.includes('Beim zweiten kam er am frühen Morgen über einen offenen Balkon'));
  t('Corpus B1 b1-r42 court question matches both suspects being convicted after proceedings',
    b1q('b1-r42', 1).prompt === 'ماذا فعلت المحكمة بالمشتبه بهما بعد الإجراءات؟' &&
      b1q('b1-r42', 1).key === 'حكمت عليهما' &&
      b1q('b1-r42', 1).options.includes(b1q('b1-r42', 1).key) &&
      b1Texts['b1-r42'].body.includes('Nach dem Verfahren konnte das Gericht beide verurteilen'));
  t('Corpus B1 b1-r43 has 336 measured words and no unknown B1 tokens',
    b1Texts['b1-r43'].title === 'Alt werden in der Stadt' &&
      b1Texts['b1-r43'].body.trim().split(/\s+/).length === 336 &&
      known.coverage(b1Known, b1Texts['b1-r43'].body).unknown.length === 0);
  t('Corpus B1 b1-r43 keeps the move, support network, autonomy, visit routine, and continued connection coherent',
    b1Texts['b1-r43'].body.includes('Die Treppe in ihrem alten Haus war zu steil') &&
      b1Texts['b1-r43'].body.includes('sie entscheidet selbst über ihren Tag') &&
      b1Texts['b1-r43'].body.includes('Jeden Morgen geht sie zehn Minuten an die frische Luft') &&
      b1Texts['b1-r43'].body.includes('bleibt jedoch mit ihren Nachbarn'));
  t('Corpus B1 b1-r43 move question matches the steep stairs in the old house',
    b1q('b1-r43', 0).prompt === 'لماذا انتقلت الجدة من بيتها القديم؟' &&
      b1q('b1-r43', 0).key === 'لأن الدرج كان شديد الانحدار' &&
      b1q('b1-r43', 0).options.includes(b1q('b1-r43', 0).key) &&
      b1Texts['b1-r43'].body.includes('Die Treppe in ihrem alten Haus war zu steil'));
  t('Corpus B1 b1-r43 acceptance question matches prolonged reflection helping more than advice',
    b1q('b1-r43', 1).prompt === 'ما الذي ساعدها على قبول الانتقال أكثر من أي نصيحة؟' &&
      b1q('b1-r43', 1).key === 'التفكير الطويل في التغيير' &&
      b1q('b1-r43', 1).options.includes(b1q('b1-r43', 1).key) &&
      b1Texts['b1-r43'].body.includes('dachte sie lange über die große Änderung ihres Lebens nach') &&
      b1Texts['b1-r43'].body.includes('Dieses Nachdenken half ihr mehr als jeder Ratschlag'));
  t('Corpus B1 b1-r44 has 335 measured words and no unknown B1 tokens',
    b1Texts['b1-r44'].title === 'Am Samstag' &&
      b1Texts['b1-r44'].body.trim().split(/\s+/).length === 335 &&
      known.coverage(b1Known, b1Texts['b1-r44'].body).unknown.length === 0);
  t('Corpus B1 b1-r44 keeps cleaning, safe repair, cooking, invoice, gifts, planning, and Sunday visit coherent',
    b1Texts['b1-r44'].body.includes('bereiten meine Frau und ich die Wohnung') &&
      b1Texts['b1-r44'].body.includes('der alte Stecker des Geräts kaputtgegangen') &&
      b1Texts['b1-r44'].body.includes('Die Frist für die Zahlung steht fest') &&
      b1Texts['b1-r44'].body.includes('Am Sonntag kann die Familie kommen'));
  t('Corpus B1 b1-r44 broken-item question matches the device plug during cleaning',
    b1q('b1-r44', 0).prompt === 'ما الذي انكسر أثناء التنظيف؟' &&
      b1q('b1-r44', 0).key === 'القابس' &&
      b1q('b1-r44', 0).options.includes(b1q('b1-r44', 0).key) &&
      b1Texts['b1-r44'].body.includes('der alte Stecker des Geräts kaputtgegangen'));
  t('Corpus B1 b1-r44 invoice question matches the Monday payment deadline',
    b1q('b1-r44', 1).prompt === 'ما آخر موعد لدفع الفاتورة؟' &&
      b1q('b1-r44', 1).key === 'يوم الاثنين' &&
      b1q('b1-r44', 1).options.includes(b1q('b1-r44', 1).key) &&
      b1Texts['b1-r44'].body.includes('spätestens am Montag bezahlen'));
  t('Corpus B1 b1-r45 has 320 measured words and no unknown B1 tokens',
    b1Texts['b1-r45'].title === 'Aufräumen am Samstag' &&
      b1Texts['b1-r45'].body.trim().split(/\s+/).length === 320 &&
      known.coverage(b1Known, b1Texts['b1-r45'].body).unknown.length === 0);
  t('Corpus B1 b1-r45 keeps Friday planning, Saturday sorting, found objects, donation, and one clean ending coherent',
    b1Texts['b1-r45'].body.includes('Schon am Freitag schreiben wir eine Liste') &&
      b1Texts['b1-r45'].body.includes('Dinge, die noch gut sind') &&
      b1Texts['b1-r45'].body.includes('im Fundbüro abgegeben') &&
      b1Texts['b1-r45'].body.includes('bleibt der Sonntag frei'));
  t('Corpus B1 b1-r45 reuse question matches giving good unneeded items to a family-aid group',
    b1q('b1-r45', 0).prompt === 'ماذا تفعل الأسرة بالأشياء الجيدة التي لم تعد تحتاجها؟' &&
      b1q('b1-r45', 0).key === 'تعطيها لجهة تساعد الأسر' &&
      b1q('b1-r45', 0).options.includes(b1q('b1-r45', 0).key) &&
      b1Texts['b1-r45'].body.includes('Andere Kleidungsstücke geben wir einer Gruppe, die Familien hilft'));
  t('Corpus B1 b1-r45 bag question matches the narrator collecting it from lost property',
    b1q('b1-r45', 1).prompt === 'أين وُجدت حقيبة الراوي المفقودة؟' &&
      b1q('b1-r45', 1).key === 'في مكتب المفقودات' &&
      b1q('b1-r45', 1).options.includes(b1q('b1-r45', 1).key) &&
      b1Texts['b1-r45'].body.includes('im Fundbüro abgegeben'));
  t('Corpus B1 b1-r46 has 318 measured words and only its preserved bargeldlos token unknown at B1',
    b1Texts['b1-r46'].title === 'Am Geldautomaten' &&
      b1Texts['b1-r46'].body.trim().split(/\s+/).length === 318 &&
      JSON.stringify(known.coverage(b1Known, b1Texts['b1-r46'].body).unknown) === JSON.stringify(['bargeldlos']));
  t('Corpus B1 b1-r46 keeps the cash deposit, rent costs, fee choice, account check, correction, and filing coherent',
    b1Texts['b1-r46'].body.includes('Dieses Geld fehlt noch für die Miete') &&
      b1Texts['b1-r46'].body.includes('mit einer normalen Überweisung') &&
      b1Texts['b1-r46'].body.includes('Der Betrag und die Nummer sind richtig, aber das Datum ist falsch') &&
      b1Texts['b1-r46'].body.includes('Bestätigung der Bank für das vergangene Jahr'));
  t('Corpus B1 b1-r46 deposit question matches the three hundred francs paid into the account',
    b1q('b1-r46', 0).prompt === 'كم يودع الراوي نقدًا في حسابه؟' &&
      b1q('b1-r46', 0).key === 'ثلاث مئة فرنك' &&
      b1q('b1-r46', 0).options.includes(b1q('b1-r46', 0).key) &&
      b1Texts['b1-r46'].body.includes('dreihundert Franken auf mein Konto einzahlen'));
  t('Corpus B1 b1-r46 cashless-payment question matches maintaining the full overview',
    b1q('b1-r46', 1).prompt === 'لماذا يبدو الدفع بلا نقد أفضل للراوي؟' &&
      b1q('b1-r46', 1).key === 'لأنه يحتفظ بالنظرة الشاملة' &&
      b1q('b1-r46', 1).options.includes(b1q('b1-r46', 1).key) &&
      b1Texts['b1-r46'].body.includes('weil ich dabei den vollen Überblick behalte'));
  t('Corpus B1 b1-r47 has 319 measured words and no unknown B1 tokens',
    b1Texts['b1-r47'].title === 'Die neue Stelle' &&
      b1Texts['b1-r47'].body.trim().split(/\s+/).length === 319 &&
      known.coverage(b1Known, b1Texts['b1-r47'].body).unknown.length === 0);
  t('Corpus B1 b1-r47 keeps expansion, works-council review, conditions, training, and the narrator’s first week coherent',
    b1Texts['b1-r47'].body.includes('will im Herbst zehn neue Leute einstellen') &&
      b1Texts['b1-r47'].body.includes('spricht die Firma mit dem Betriebsrat über die Personalie') &&
      b1Texts['b1-r47'].body.includes('Am folgenden Montag beginnt die Schulung') &&
      b1Texts['b1-r47'].body.includes('In einem Monat möchte ich mehr Verantwortung tragen'));
  t('Corpus B1 b1-r47 hiring question matches ten new employees in autumn',
    b1q('b1-r47', 0).prompt === 'كم شخصًا ستعيّن الشركة في الخريف؟' &&
      b1q('b1-r47', 0).key === 'عشرة' &&
      b1q('b1-r47', 0).options.includes(b1q('b1-r47', 0).key) &&
      b1Texts['b1-r47'].body.includes('will im Herbst zehn neue Leute einstellen'));
  t('Corpus B1 b1-r47 training question matches the following Monday',
    b1q('b1-r47', 1).prompt === 'متى تبدأ الدورة؟' &&
      b1q('b1-r47', 1).key === 'الإثنين التالي' &&
      b1q('b1-r47', 1).options.includes(b1q('b1-r47', 1).key) &&
      b1Texts['b1-r47'].body.includes('Am folgenden Montag beginnt die Schulung'));
  t('Corpus B1 b1-r48 has 345 measured words and no unknown B1 tokens',
    b1Texts['b1-r48'].title === 'Beschwerde im Geschäft' &&
      b1Texts['b1-r48'].body.trim().split(/\s+/).length === 345 &&
      known.coverage(b1Known, b1Texts['b1-r48'].body).unknown.length === 0);
  t('Corpus B1 b1-r48 keeps pickup, empty box, receipt check, complaint, replacement, and filing coherent',
    b1Texts['b1-r48'].body.includes('öffne ich den Karton noch im Geschäft') &&
      b1Texts['b1-r48'].body.includes('Er gilt hier als Rechnung') &&
      b1Texts['b1-r48'].body.includes('ein vollständiges Gerät') &&
      b1Texts['b1-r48'].body.includes('Die Rechnung lege ich in meinen Ordner'));
  t('Corpus B1 b1-r48 empty-box question matches the box opened in the shop',
    b1q('b1-r48', 0).prompt === 'ماذا يجد الراوي عندما يفتح العلبة في المتجر؟' &&
      b1q('b1-r48', 0).key === 'أن العلبة فارغة' &&
      b1q('b1-r48', 0).options.includes(b1q('b1-r48', 0).key) &&
      b1Texts['b1-r48'].body.includes('Zu meiner Überraschung ist er ganz leer'));
  t('Corpus B1 b1-r48 exchange question matches the required receipt used as the invoice',
    b1q('b1-r48', 1).prompt === 'ما الذي يلزم للاستبدال؟' &&
      b1q('b1-r48', 1).key === 'الفاتورة' &&
      b1q('b1-r48', 1).options.includes(b1q('b1-r48', 1).key) &&
      b1Texts['b1-r48'].body.includes('für einen Umtausch die Rechnung nötig ist'));
  t('Corpus B1 b1-r49 has 334 measured words and only its preserved weiterbringt token unknown at B1',
    b1Texts['b1-r49'].title === 'Lernen mit Methode' &&
      b1Texts['b1-r49'].body.trim().split(/\s+/).length === 334 &&
      JSON.stringify(known.coverage(b1Known, b1Texts['b1-r49'].body).unknown) === JSON.stringify(['weiterbringt']));
  t('Corpus B1 b1-r49 keeps time limits, the weekly method, testing, adjustment, and six-month progress coherent',
    b1Texts['b1-r49'].body.includes('jeden Abend nur zwei Stunden Zeit') &&
      b1Texts['b1-r49'].body.includes('Freitags macht sie einen kleinen Test') &&
      b1Texts['b1-r49'].body.includes('ändert nur eine kleine Sache') &&
      b1Texts['b1-r49'].body.includes('Nach einem halben Jahr'));
  t('Corpus B1 b1-r49 study-time question matches the two hours available each evening',
    b1q('b1-r49', 0).prompt === 'كم ساعة تستطيع المتعلمة الدراسة كل مساء؟' &&
      b1q('b1-r49', 0).key === 'ساعتين' &&
      b1q('b1-r49', 0).options.includes(b1q('b1-r49', 0).key) &&
      b1Texts['b1-r49'].body.includes('jeden Abend nur zwei Stunden Zeit'));
  t('Corpus B1 b1-r49 challenge question matches time rather than grammar',
    b1q('b1-r49', 1).prompt === 'ما التحدي الحقيقي عندها؟' &&
      b1q('b1-r49', 1).key === 'الوقت' &&
      b1q('b1-r49', 1).options.includes(b1q('b1-r49', 1).key) &&
      b1Texts['b1-r49'].body.includes('nicht die Grammatik, sondern die Zeit'));
  t('Corpus B1 b1-r50 has 355 measured words and no unknown B1 tokens',
    b1Texts['b1-r50'].title === 'Nach dem Streit' &&
      b1Texts['b1-r50'].body.trim().split(/\s+/).length === 355 &&
      known.coverage(b1Known, b1Texts['b1-r50'].body).unknown.length === 0);
  t('Corpus B1 b1-r50 keeps the purchase conflict, cooling-off period, apologies, money plan, and reconciliation coherent',
    b1Texts['b1-r50'].body.includes('von unserem gemeinsamen Geld einen neuen Lautsprecher gekauft') &&
      b1Texts['b1-r50'].body.includes('bis zum nächsten Tag zu warten') &&
      b1Texts['b1-r50'].body.includes('Dann konnten wir einander verzeihen') &&
      b1Texts['b1-r50'].body.includes('Größere Einkäufe besprechen wir'));
  t('Corpus B1 b1-r50 forgiveness question matches the partners forgiving each other after apologising',
    b1q('b1-r50', 0).prompt === 'ماذا يفعل الشريكان بعد أن يعتذرا؟' &&
      b1q('b1-r50', 0).key === 'ينبغي أن يسامح كلٌّ الآخر' &&
      b1q('b1-r50', 0).options.includes(b1q('b1-r50', 0).key) &&
      b1Texts['b1-r50'].body.includes('Dann konnten wir einander verzeihen'));
  t('Corpus B1 b1-r50 kiss question matches acceptance expressed more strongly than words',
    b1q('b1-r50', 1).prompt === 'ماذا تعني القُبلة بحسب النص؟' &&
      b1q('b1-r50', 1).key === 'أكثر من ألف كلمة' &&
      b1q('b1-r50', 1).options.includes(b1q('b1-r50', 1).key) &&
      b1Texts['b1-r50'].body.includes('sagte der Kuss mehr als tausend Wörter'));
  t('Corpus B1 b1-r51 has 344 measured words and only its preserved Anwohner token unknown at B1',
    b1Texts['b1-r51'].title === 'Die Nachbarin verschwindet' &&
      b1Texts['b1-r51'].body.trim().split(/\s+/).length === 344 &&
      JSON.stringify(known.coverage(b1Known, b1Texts['b1-r51'].body).unknown) === JSON.stringify(['anwohner']));
  t('Corpus B1 b1-r51 keeps concern, the earlier burglary, separation support, safety notice, letter, and contact coherent',
    b1Texts['b1-r51'].body.includes('Seit Montag ist unsere Nachbarin nicht mehr zu Hause') &&
      b1Texts['b1-r51'].body.includes('glaubte die Polizei nicht, dass der alte Fall') &&
      b1Texts['b1-r51'].body.includes('Die Polizei machte nicht öffentlich, wo die Familie war') &&
      b1Texts['b1-r51'].body.includes('Nach einer Woche kam ein kurzer Brief'));
  t('Corpus B1 b1-r51 police question matches officers asking residents about the missing neighbour',
    b1q('b1-r51', 0).prompt === 'عن من تسأل الشرطة سكان المبنى؟' &&
      b1q('b1-r51', 0).key === 'الجارة' &&
      b1q('b1-r51', 0).options.includes(b1q('b1-r51', 0).key) &&
      b1Texts['b1-r51'].body.includes('fragte im Haus nach ihr'));
  t('Corpus B1 b1-r51 location question matches the new home at the edge of town',
    b1q('b1-r51', 1).prompt === 'أين تسكن الجارة الآن؟' &&
      b1q('b1-r51', 1).key === 'عند أطراف المدينة' &&
      b1q('b1-r51', 1).options.includes(b1q('b1-r51', 1).key) &&
      b1Texts['b1-r51'].body.includes('am Rand der Stadt'));
  t('Corpus B1 b1-r52 has 366 measured words and no unknown B1 tokens',
    b1Texts['b1-r52'].title === 'Im Badezimmer' &&
      b1Texts['b1-r52'].body.trim().split(/\s+/).length === 366 &&
      known.coverage(b1Known, b1Texts['b1-r52'].body).unknown.length === 0);
  t('Corpus B1 b1-r52 keeps the morning observation, care advice, final bathroom work, safety, and completion coherent',
    b1Texts['b1-r52'].body.includes('Auf der Brust entdeckt sie einen kleinen roten Fleck') &&
      b1Texts['b1-r52'].body.includes('gehen wir in die Drogerie') &&
      b1Texts['b1-r52'].body.includes('Auf dem Boden darf kein Wasser bleiben') &&
      b1Texts['b1-r52'].body.includes('nach drei Wochen wirklich alles fertig'));
  t('Corpus B1 b1-r52 observation question matches the wife’s chest spot and lip wound in the mirror',
    b1q('b1-r52', 0).prompt === 'ماذا تلاحظ الزوجة في المرآة صباحًا؟' &&
      b1q('b1-r52', 0).key === 'بقعة على الصدر وجُرح على الشفة' &&
      b1q('b1-r52', 0).options.includes(b1q('b1-r52', 0).key) &&
      b1Texts['b1-r52'].body.includes('auf ihrer Lippe ist eine offene Wunde'));
  t('Corpus B1 b1-r52 shop question matches the wife buying cream and a vitamin',
    b1q('b1-r52', 1).prompt === 'ماذا تشتري الزوجة من متجر المستحضرات؟' &&
      b1q('b1-r52', 1).key === 'كريمًا وفيتامينًا' &&
      b1q('b1-r52', 1).options.includes(b1q('b1-r52', 1).key) &&
      b1Texts['b1-r52'].body.includes('kauft sie eine Creme für die Lippe und ein Vitamin'));
  t('Corpus B1 b1-r53 has 344 measured words and no unknown B1 tokens',
    b1Texts['b1-r53'].title === 'Am Flughafen' &&
      b1Texts['b1-r53'].body.trim().split(/\s+/).length === 344 &&
      known.coverage(b1Known, b1Texts['b1-r53'].body).unknown.length === 0);
  t('Corpus B1 b1-r53 keeps packing, check-in, security, boarding, flight, landing, luggage, and hotel arrival coherent',
    b1Texts['b1-r53'].body.includes('Am Abend vor der Reise packe ich') &&
      b1Texts['b1-r53'].body.includes('Um zehn Uhr beginnt das Einsteigen') &&
      b1Texts['b1-r53'].body.includes('Tatsächlich landen wir kurz vor acht') &&
      b1Texts['b1-r53'].body.includes('am späten Abend kommen wir im Hotel an'));
  t('Corpus B1 b1-r53 seat-belt question matches fastening belts before take-off',
    b1q('b1-r53', 0).prompt === 'ماذا يجب على المسافرين أن يفعلوا قبل الإقلاع؟' &&
      b1q('b1-r53', 0).key === 'يربطوا الأحزمة' &&
      b1q('b1-r53', 0).options.includes(b1q('b1-r53', 0).key) &&
      b1Texts['b1-r53'].body.includes('müssen wir uns anschnallen'));
  t('Corpus B1 b1-r53 landing question matches the expected eight o’clock arrival',
    b1q('b1-r53', 1).prompt === 'متى يُتوقع هبوط الطائرة؟' &&
      b1q('b1-r53', 1).key === 'الثامنة' &&
      b1q('b1-r53', 1).options.includes(b1q('b1-r53', 1).key) &&
      b1Texts['b1-r53'].body.includes('Voraussichtlich landen wir um acht Uhr am Abend'));
  t('Corpus B1 b1-r54 has 376 measured words and no unknown B1 tokens',
    b1Texts['b1-r54'].title === 'Die neue Nachbarin' &&
      b1Texts['b1-r54'].body.trim().split(/\s+/).length === 376 &&
      known.coverage(b1Known, b1Texts['b1-r54'].body).unknown.length === 0);
  t('Corpus B1 b1-r54 keeps arrival, unfair judgement, work explanation, mutual help, festival, and apology coherent',
    b1Texts['b1-r54'].body.includes('Vor zwei Monaten ist eine neue Familie') &&
      b1Texts['b1-r54'].body.includes('Dieses Urteil finde ich unfair') &&
      b1Texts['b1-r54'].body.includes('Bald helfen wir einander') &&
      b1Texts['b1-r54'].body.includes('entschuldigt sich bei ihm'));
  t('Corpus B1 b1-r54 parents question matches the migrant mother and father who moved in',
    b1q('b1-r54', 0).prompt === 'من هما الوالدان اللذان انتقلا إلى البيت؟' &&
      b1q('b1-r54', 0).key === 'مهاجر ومهاجرة' &&
      b1q('b1-r54', 0).options.includes(b1q('b1-r54', 0).key) &&
      b1Texts['b1-r54'].body.includes('als Migrant und Migrantin'));
  t('Corpus B1 b1-r54 father question matches his frequent absence for driving work',
    b1q('b1-r54', 1).prompt === 'لماذا يكون الأب غالبًا خارج المنزل؟' &&
      b1q('b1-r54', 1).key === 'لأنه يعمل سائقًا' &&
      b1q('b1-r54', 1).options.includes(b1q('b1-r54', 1).key) &&
      b1Texts['b1-r54'].body.includes('der Vater als Fahrer arbeitet'));
  t('Corpus B1 b1-r55 has 367 measured words and no unknown B1 tokens',
    b1Texts['b1-r55'].title === 'Einkaufen und kochen' &&
      b1Texts['b1-r55'].body.trim().split(/\s+/).length === 367 &&
      known.coverage(b1Known, b1Texts['b1-r55'].body).unknown.length === 0);
  t('Corpus B1 b1-r55 keeps Wednesday shopping, Saturday choices, cooking, shared cleanup, leftovers, and planning coherent',
    b1Texts['b1-r55'].body.includes('Jeden Mittwoch gehe ich nach der Arbeit auf den Markt') &&
      b1Texts['b1-r55'].body.includes('Für gutes Faschiertes reicht Salz') &&
      b1Texts['b1-r55'].body.includes('Niemand soll danach allein abwaschen') &&
      b1Texts['b1-r55'].body.includes('kommt am Sonntag in die Pfanne'));
  t('Corpus B1 b1-r55 Wednesday question matches the carrot and cream purchase',
    b1q('b1-r55', 0).prompt === 'ماذا يشتري الراوي كل يوم أربعاء؟' &&
      b1q('b1-r55', 0).key === 'جزرة وقشدة' &&
      b1q('b1-r55', 0).options.includes(b1q('b1-r55', 0).key) &&
      b1Texts['b1-r55'].body.includes('eine dicke Karotte und frische Schlagsahne'));
  t('Corpus B1 b1-r55 food-choice question matches the preference for an organic product',
    b1q('b1-r55', 1).prompt === 'أي نوع من المنتجات الغذائية يفضله الراوي؟' &&
      b1q('b1-r55', 1).key === 'أن يكون بيولوجيًا' &&
      b1q('b1-r55', 1).options.includes(b1q('b1-r55', 1).key) &&
      b1Texts['b1-r55'].body.includes('wähle ich ein biologisches Produkt'));
  t('Corpus B1 b1-r56 has 398 measured words and no unknown B1 tokens',
    b1Texts['b1-r56'].title === 'Beim Sportfest' &&
      b1Texts['b1-r56'].body.trim().split(/\s+/).length === 398 &&
      known.coverage(b1Known, b1Texts['b1-r56'].body).unknown.length === 0);
  t('Corpus B1 b1-r56 keeps setup, events, safety, weather plan, awards, feedback, and repetition coherent',
    b1Texts['b1-r56'].body.includes('messen bei den Rennen die genaue Zeit') &&
      b1Texts['b1-r56'].body.includes('mit leichten Bällen') &&
      b1Texts['b1-r56'].body.includes('gehen alle in das Gebäude') &&
      b1Texts['b1-r56'].body.includes('was wir im nächsten Jahr anders machen sollen'));
  t('Corpus B1 b1-r56 timing question matches the two club specialists',
    b1q('b1-r56', 0).prompt === 'من يقيس الوقت في السباقات؟' &&
      b1q('b1-r56', 0).key === 'الخبير والخبيرة' &&
      b1q('b1-r56', 0).options.includes(b1q('b1-r56', 0).key) &&
      b1Texts['b1-r56'].body.includes('Ein Spezialist und eine Spezialistin'));
  t('Corpus B1 b1-r56 hail question matches everyone moving into the building',
    b1q('b1-r56', 1).prompt === 'ماذا يفعل الجميع إذا بدأ البَرَد؟' &&
      b1q('b1-r56', 1).key === 'يدخلون إلى المبنى' &&
      b1q('b1-r56', 1).options.includes(b1q('b1-r56', 1).key) &&
      b1Texts['b1-r56'].body.includes('gehen alle in das Gebäude'));
  t('Corpus B1 b1-r57 has 398 measured words and no unknown B1 tokens',
    b1Texts['b1-r57'].title === 'Wege in der Stadt' &&
      b1Texts['b1-r57'].body.trim().split(/\s+/).length === 398 &&
      known.coverage(b1Known, b1Texts['b1-r57'].body).unknown.length === 0);
  t('Corpus B1 b1-r57 keeps the commute, class walk, path conflict, castle rehearsal, repair, and return coherent',
    b1Texts['b1-r57'].body.includes('Ich arbeite an einer Schule') &&
      b1Texts['b1-r57'].body.includes('begleitet meine Klasse mich') &&
      b1Texts['b1-r57'].body.includes('Raum für unsere Probe') &&
      b1Texts['b1-r57'].body.includes('Nach der Probe gehen wir'));
  t('Corpus B1 b1-r57 uphill-route question matches the castle',
    b1q('b1-r57', 0).prompt === 'إلى أين يصعد الطريق؟' &&
      b1q('b1-r57', 0).key === 'إلى القلعة' &&
      b1q('b1-r57', 0).options.includes(b1q('b1-r57', 0).key) &&
      b1Texts['b1-r57'].body.includes('rauf bis zum Schloss'));
  t('Corpus B1 b1-r57 class question matches performing a play at the castle',
    b1q('b1-r57', 1).prompt === 'ماذا يريد صف الراوي أن يقدّم في القلعة؟' &&
      b1q('b1-r57', 1).key === 'أن يقدّم مسرحية' &&
      b1q('b1-r57', 1).options.includes(b1q('b1-r57', 1).key) &&
      b1Texts['b1-r57'].body.includes('ein kleines Stück aufführen'));
  t('Corpus B1 b1-r58 has 432 measured words and no unknown B1 tokens',
    b1Texts['b1-r58'].title === 'Alt und jung' &&
      b1Texts['b1-r58'].body.trim().split(/\s+/).length === 432 &&
      known.coverage(b1Known, b1Texts['b1-r58'].body).unknown.length === 0);
  t('Corpus B1 b1-r58 keeps intergenerational living, reciprocal help, house rules, research, and the shared plan coherent',
    b1Texts['b1-r58'].body.includes('Haus der Generationen') &&
      b1Texts['b1-r58'].body.includes('Die Jungen lernen von den Alten') &&
      b1Texts['b1-r58'].body.includes('für alle dieselbe Regel') &&
      b1Texts['b1-r58'].body.includes('gemeinsamen Plan an der Tür'));
  t('Corpus B1 b1-r58 grandmother question is directly supported by the senior-home opening',
    b1q('b1-r58', 0).prompt === 'أين تسكن الجدة؟' &&
      b1q('b1-r58', 0).key === 'في دار المسنّين' &&
      b1q('b1-r58', 0).options.includes(b1q('b1-r58', 0).key) &&
      b1Texts['b1-r58'].body.startsWith('Meine Großmutter wohnt seit einem Monat im neuen Altenheim'));
  t('Corpus B1 b1-r58 value question is directly supported by the grandmother quote',
    b1q('b1-r58', 1).prompt === 'ما الذي لا قيمة له وحده؟' &&
      b1q('b1-r58', 1).key === 'المال' &&
      b1q('b1-r58', 1).options.includes(b1q('b1-r58', 1).key) &&
      b1Texts['b1-r58'].body.includes('Geld allein ist wertlos'));
  t('Corpus B1 b1-r59 has 428 measured words and no unknown B1 tokens',
    b1Texts['b1-r59'].title === 'Kunst und Presse' &&
      b1Texts['b1-r59'].body.trim().split(/\s+/).length === 428 &&
      known.coverage(b1Known, b1Texts['b1-r59'].body).unknown.length === 0);
  t('Corpus B1 b1-r59 keeps the joint exhibition, newspaper coverage, opening, school project, and follow-up coherent',
    b1Texts['b1-r59'].body.includes('Eine Malerin und eine Schriftstellerin') &&
      b1Texts['b1-r59'].body.includes('im Forum der Zeitung') &&
      b1Texts['b1-r59'].body.includes('Die Bilder bleiben zwei ganze Wochen hängen') &&
      b1Texts['b1-r59'].body.includes('noch mehr Klassen teilnehmen'));
  t('Corpus B1 b1-r59 city representative question matches the funding application',
    b1q('b1-r59', 0).prompt === 'ماذا تعلن ممثلة المدينة؟' &&
      b1q('b1-r59', 0).key === 'أنها ستطلب مزيدًا من المال للمشروع' &&
      b1q('b1-r59', 0).options.includes(b1q('b1-r59', 0).key) &&
      b1Texts['b1-r59'].body.includes('mehr Geld für das Projekt mit der Schule zu beantragen'));
  t('Corpus B1 b1-r59 publication question matches the newspaper forum',
    b1q('b1-r59', 1).prompt === 'أين نُشر الخبر؟' &&
      b1q('b1-r59', 1).key === 'في منتدى الصحيفة' &&
      b1q('b1-r59', 1).options.includes(b1q('b1-r59', 1).key) &&
      b1Texts['b1-r59'].body.includes('Neuigkeit über die Ausstellung steht seit Montag im Forum der Zeitung'));
  t('Corpus B1 b1-r60 has 466 measured words and keeps its single inherited B1 unknown above 98 percent',
    b1Texts['b1-r60'].title === 'Auf dem Amt' &&
      b1Texts['b1-r60'].body.trim().split(/\s+/).length === 466 &&
      known.coverage(b1Known, b1Texts['b1-r60'].body).unknown.join(' ') === 'rückseite' &&
      known.coverage(b1Known, b1Texts['b1-r60'].body).ratio >= 0.98);
  t('Corpus B1 b1-r60 keeps the newcomer family, three appointments, municipal services, and document lesson coherent',
    b1Texts['b1-r60'].body.includes('Als Neuzuzüger') &&
      b1Texts['b1-r60'].body.includes('einen Termin am Montag') &&
      b1Texts['b1-r60'].body.includes('Am Donnerstag komme ich wegen der Schule') &&
      b1Texts['b1-r60'].body.includes('Insgesamt war ich also dreimal auf dem Amt'));
  t('Corpus B1 b1-r60 advance-notice question matches making an appointment',
    b1q('b1-r60', 0).prompt === 'ماذا ينبغي أن يفعل المرء قبل الزيارة؟' &&
      b1q('b1-r60', 0).key === 'أن يُعلن عنها مسبقًا' &&
      b1q('b1-r60', 0).options.includes(b1q('b1-r60', 0).key) &&
      b1Texts['b1-r60'].body.includes('Vor dem ersten Besuch soll man einen Termin ankündigen'));
  t('Corpus B1 b1-r60 organization question matches the half-hour saving',
    b1q('b1-r60', 1).prompt === 'ما الذي يوفر نصف ساعة عند الشبّاك؟' &&
      b1q('b1-r60', 1).key === 'ترتيب الأوراق في البيت' &&
      b1q('b1-r60', 1).options.includes(b1q('b1-r60', 1).key) &&
      b1Texts['b1-r60'].body.includes('Wer seine Papiere schon zu Hause ordnet, spart am Schalter leicht eine halbe Stunde'));
  const b2Articles = Object.fromEntries(win.DW_LIBRARY.B2.articles.map(x => [x.id, x]));
  const b2q = (id, n) => b2Articles[id].questions[n];
  const b2Known = known.knownWords(win, { upto: 'B2' });
  t('Corpus B2 b2-a1 has 393 measured words and no unknown B2 tokens',
    b2Articles['b2-a1'].title === 'العمل عن بعد' &&
      b2Articles['b2-a1'].body.trim().split(/\s+/).length === 393 &&
      known.coverage(b2Known, b2Articles['b2-a1'].body).unknown.length === 0);
  t('Corpus B2 b2-a1 develops remote-work benefits, risks, a team rule, measured results, exceptions, and limits coherently',
    b2Articles['b2-a1'].body.includes('mehr Freiheit') &&
      b2Articles['b2-a1'].body.includes('bestimmte gemeinsame Zeiten vereinbart') &&
      b2Articles['b2-a1'].body.includes('Nach einem Monat haben wir gemeinsam geprüft') &&
      b2Articles['b2-a1'].body.includes('Das beweist nicht, dass dieselbe Lösung überall funktioniert'));
  t('Corpus B2 b2-a1 remote-work-rule question matches defined working times',
    b2q('b2-a1', 0).prompt === 'متى تنجح قاعدة العمل عن بعد؟' &&
      b2q('b2-a1', 0).key === 'حين يحدد الفريق أوقات العمل' &&
      b2q('b2-a1', 0).options.includes(b2q('b2-a1', 0).key) &&
      b2Articles['b2-a1'].body.includes('einen festen Anfang, ein festes Ende und Ausnahmen klar festlegt'));
  t('Corpus B2 b2-a1 missing-rule question matches freedom becoming control',
    b2q('b2-a1', 1).prompt === 'إلى ماذا تتحول الحرية عند غياب القاعدة؟' &&
      b2q('b2-a1', 1).key === 'إلى رقابة' &&
      b2q('b2-a1', 1).options.includes(b2q('b2-a1', 1).key) &&
      b2Articles['b2-a1'].body.includes('Dann wird aus der versprochenen Freiheit leicht eine neue Form der Kontrolle'));
  t('Corpus B2 b2-a2 has 399 measured words and no unknown B2 tokens',
    b2Articles['b2-a2'].title === 'الإيجار' &&
      b2Articles['b2-a2'].body.trim().split(/\s+/).length === 399 &&
      known.coverage(b2Known, b2Articles['b2-a2'].body).unknown.length === 0);
  t('Corpus B2 b2-a2 separates measured rent changes, scope, possible explanations, personal cases, and policy evidence coherently',
    b2Articles['b2-a2'].body.includes('Der Vergleich zeigt einen Anstieg') &&
      b2Articles['b2-a2'].body.includes('Neue Verträge sagen wenig darüber aus') &&
      b2Articles['b2-a2'].body.includes('Unsere beiden Erfahrungen widersprechen dem Bericht nicht') &&
      b2Articles['b2-a2'].body.includes('Für politische Entscheidungen reicht die Meldung allein ebenfalls nicht'));
  t('Corpus B2 b2-a2 comparison question distinguishes the increase from its cause',
    b2q('b2-a2', 0).prompt === 'ماذا تُظهر المقارنة بالعام السابق؟' &&
      b2q('b2-a2', 0).key === 'الارتفاع، لا سببه' &&
      b2q('b2-a2', 0).options.includes(b2q('b2-a2', 0).key) &&
      b2Articles['b2-a2'].body.includes('nicht automatisch, warum die Wohnungen teurer geworden sind'));
  t('Corpus B2 b2-a2 report-cause question matches the explicit evidence limit',
    b2q('b2-a2', 1).prompt === 'هل يذكر التقرير سبب الارتفاع؟' &&
      b2q('b2-a2', 1).key === 'لا' &&
      b2q('b2-a2', 1).options.includes(b2q('b2-a2', 1).key) &&
      b2Articles['b2-a2'].body.includes('der Bericht untersucht sie nicht'));
  t('Corpus B2 b2-a3 has 479 measured words and no unknown B2 tokens',
    b2Articles['b2-a3'].title === 'الهجرة اليومية' &&
      b2Articles['b2-a3'].body.trim().split(/\s+/).length === 479 &&
      known.coverage(b2Known, b2Articles['b2-a3'].body).unknown.length === 0);
  t('Corpus B2 b2-a3 connects commuting costs, the brother case, transport, work organization, occupational limits, and evaluation coherently',
    b2Articles['b2-a3'].body.includes('eigentliche Preis jedoch aus Zeit') &&
      b2Articles['b2-a3'].body.includes('Mein Bruder kennt diese Rechnung') &&
      b2Articles['b2-a3'].body.includes('Die Planung des Verkehrs') &&
      b2Articles['b2-a3'].body.includes('Natürlich lassen sich diese Lösungen nicht auf alle Berufe übertragen') &&
      b2Articles['b2-a3'].body.includes('Auch die Wirkung einer Maßnahme muss genauer geprüft werden'));
  t('Corpus B2 b2-a3 invisible-cost question matches lost commuting time',
    b2q('b2-a3', 0).prompt === 'ما الثمن الذي لا يظهر في الإحصاء الرسمي؟' &&
      b2q('b2-a3', 0).key === 'الوقت الضائع في التنقّل' &&
      b2q('b2-a3', 0).options.includes(b2q('b2-a3', 0).key) &&
      b2Articles['b2-a3'].body.includes('In keiner offiziellen Statistik steht'));
  t('Corpus B2 b2-a3 brother-trip question matches two home-office days',
    b2q('b2-a3', 1).prompt === 'ما الذي خفّض عدد رحلات أخ الراوي؟' &&
      b2q('b2-a3', 1).key === 'السماح له بالعمل من المنزل يومين' &&
      b2q('b2-a3', 1).options.includes(b2q('b2-a3', 1).key) &&
      b2Articles['b2-a3'].body.includes('zwei Tage Homeoffice pro Woche erlaubt'));
  t('Corpus B2 b2-a4 has 454 measured words and no unknown B2 tokens',
    b2Articles['b2-a4'].title === 'المدرسة والرقمنة' &&
      b2Articles['b2-a4'].body.trim().split(/\s+/).length === 454 &&
      known.coverage(b2Known, b2Articles['b2-a4'].body).unknown.length === 0);
  t('Corpus B2 b2-a4 connects teaching goals, classroom uses, fair financing, teacher preparation, and evaluation coherently',
    b2Articles['b2-a4'].body.includes('ersetzt keine Lehrkraft') &&
      b2Articles['b2-a4'].body.includes('ein konkretes Ziel nennen') &&
      b2Articles['b2-a4'].body.includes('eine gemeinsame Finanzierung finden') &&
      b2Articles['b2-a4'].body.includes('Ebenso wichtig ist die Fortbildung') &&
      b2Articles['b2-a4'].body.includes('ein Datum für die Auswertung'));
  t('Corpus B2 b2-a4 replacement question matches the teacher-responsibility argument',
    b2q('b2-a4', 0).prompt === 'هل الجهاز يحل محل المعلّم؟' &&
      b2q('b2-a4', 0).key === 'لا' &&
      b2q('b2-a4', 0).options.includes(b2q('b2-a4', 0).key) &&
      b2Articles['b2-a4'].body.startsWith('Ein digitales Gerät ersetzt keine Lehrkraft'));
  t('Corpus B2 b2-a4 purchase question matches the explicit payer question',
    b2q('b2-a4', 1).prompt === 'ما السؤال الذي يجب طرحه عند شراء الأجهزة؟' &&
      b2q('b2-a4', 1).key === 'من يدفع؟' &&
      b2q('b2-a4', 1).options.includes(b2q('b2-a4', 1).key) &&
      b2Articles['b2-a4'].body.includes('Zur Entscheidung gehört außerdem die Frage: Wer zahlt?'));
  t('Corpus B2 b2-a5 has 449 measured words and no unknown B2 tokens',
    b2Articles['b2-a5'].title === 'الصحة والوقاية' &&
      b2Articles['b2-a5'].body.trim().split(/\s+/).length === 449 &&
      known.coverage(b2Known, b2Articles['b2-a5'].body).unknown.length === 0);
  t('Corpus B2 b2-a5 connects individualized advice, insurance terms, a January checklist, an appointment case, and access limits coherently',
    b2Articles['b2-a5'].body.includes('bespreche ich mit meiner Ärztin') &&
      b2Articles['b2-a5'].body.includes('Vorsorge und Nachsorge sind dabei nicht dasselbe') &&
      b2Articles['b2-a5'].body.includes('Im Januar nehme ich mir deshalb') &&
      b2Articles['b2-a5'].body.includes('Im vergangenen Jahr hat dieser Ablauf') &&
      b2Articles['b2-a5'].body.includes('Ein Datum allein löst jedoch nicht jedes Problem'));
  t('Corpus B2 b2-a5 January-note question matches examination, last appointment, and responsible party',
    b2q('b2-a5', 0).prompt === 'ما المعلومات الثلاث التي يدوّنها الراوي في يناير؟' &&
      b2q('b2-a5', 0).key === 'الفحص الموصى به وموعده الأخير والجهة المسؤولة' &&
      b2q('b2-a5', 0).options.includes(b2q('b2-a5', 0).key) &&
      b2Articles['b2-a5'].body.includes('Welche Untersuchung wurde empfohlen? Wann war der letzte Termin? Wer ist für die Kosten und die Anmeldung zuständig?'));
  t('Corpus B2 b2-a5 practical-plan question matches appointment, costs, and responsible office',
    b2q('b2-a5', 1).prompt === 'ما الذي يحوّل النية إلى خطة عملية؟' &&
      b2q('b2-a5', 1).key === 'موعد وتكاليف وجهة مسؤولة' &&
      b2q('b2-a5', 1).options.includes(b2q('b2-a5', 1).key) &&
      b2Articles['b2-a5'].body.includes('einen Termin, mögliche Kosten und die zuständige Stelle'));
  t('Corpus B2 b2-a6 has 496 measured words and no unknown B2 tokens',
    b2Articles['b2-a6'].title === 'الاستهلاك' &&
      b2Articles['b2-a6'].body.trim().split(/\s+/).length === 496 &&
      known.coverage(b2Known, b2Articles['b2-a6'].body).unknown.length === 0);
  t('Corpus B2 b2-a6 connects lifetime costs, evidence limits, comparison work, a repair case, environmental trade-offs, and producer responsibility coherently',
    b2Articles['b2-a6'].body.includes('über die ganze Zeit der Nutzung') &&
      b2Articles['b2-a6'].body.includes('Auch der Beleg beantwortet diese Frage nicht') &&
      b2Articles['b2-a6'].body.includes('Dieser Vergleich bedeutet Arbeit') &&
      b2Articles['b2-a6'].body.includes('Vor jeder Reparatur') &&
      b2Articles['b2-a6'].body.includes('Auch die Umwelt gehört zur Rechnung') &&
      b2Articles['b2-a6'].body.includes('Verantwortung trägt aber nicht nur der einzelne Käufer'));
  t('Corpus B2 b2-a6 receipt question distinguishes payment evidence from product quality',
    b2q('b2-a6', 0).prompt === 'ماذا يثبت الإيصال؟' &&
      b2q('b2-a6', 0).key === 'أن الثمن دُفع، لا جودة المنتج' &&
      b2q('b2-a6', 0).options.includes(b2q('b2-a6', 0).key) &&
      b2Articles['b2-a6'].body.includes('Er beweist nur, wann und zu welchem Preis jemand etwas gekauft hat'));
  t('Corpus B2 b2-a6 cheap-device question matches early failure and later repair or replacement costs',
    b2q('b2-a6', 1).prompt === 'متى قد يصبح الجهاز الرخيص أعلى كلفة؟' &&
      b2q('b2-a6', 1).key === 'إذا تعطّل سريعًا واحتاج إلى إصلاح أو استبدال' &&
      b2q('b2-a6', 1).options.includes(b2q('b2-a6', 1).key) &&
      b2Articles['b2-a6'].body.includes('später teuer werden, wenn ein Produkt schnell kaputtgeht'));
  t('Corpus B2 b2-a7 has 482 measured words and no unknown B2 tokens',
    b2Articles['b2-a7'].title === 'النقل' &&
      b2Articles['b2-a7'].body.trim().split(/\s+/).length === 482 &&
      known.coverage(b2Known, b2Articles['b2-a7'].body).unknown.length === 0);
  t('Corpus B2 b2-a7 connects service times, disruption alternatives, work organization, a frequent-bus case, fair policy, evaluation, and trust coherently',
    b2Articles['b2-a7'].body.includes('zu den Zeiten fahren') &&
      b2Articles['b2-a7'].body.includes('Alternative bei einer Störung') &&
      b2Articles['b2-a7'].body.includes('Nicht jede Lösung gehört allein zum Verkehr') &&
      b2Articles['b2-a7'].body.includes('alle zehn Minuten') &&
      b2Articles['b2-a7'].body.includes('in der richtigen Reihenfolge') &&
      b2Articles['b2-a7'].body.includes('Gute Planung braucht außerdem klare Daten'));
  t('Corpus B2 b2-a7 trust question matches a missing alternative during disruption',
    b2q('b2-a7', 0).prompt === 'ما الذي يفقد الناس الثقة بنظام النقل؟' &&
      b2q('b2-a7', 0).key === 'غياب بديل عند تعطّل الخط' &&
      b2q('b2-a7', 0).options.includes(b2q('b2-a7', 0).key) &&
      b2Articles['b2-a7'].body.includes('weil Menschen ihm nach mehreren Störungen nicht mehr vertrauen'));
  t('Corpus B2 b2-a7 car question matches the ten-minute evening bus service',
    b2q('b2-a7', 1).prompt === 'لماذا لم يحتج الراوي إلى سيارته ثلاث سنوات؟' &&
      b2q('b2-a7', 1).key === 'لأن الحافلة كانت تأتي كل عشر دقائق حتى المساء' &&
      b2q('b2-a7', 1).options.includes(b2q('b2-a7', 1).key) &&
      b2Articles['b2-a7'].body.includes('Der Bus kam am Tag alle zehn Minuten und fuhr auch am Abend'));
  t('Corpus B2 b2-a8 has 464 measured words and no unknown B2 tokens',
    b2Articles['b2-a8'].title === 'الطاقة' &&
      b2Articles['b2-a8'].body.trim().split(/\s+/).length === 464 &&
      known.coverage(b2Known, b2Articles['b2-a8'].body).unknown.length === 0);
  t('Corpus B2 b2-a8 connects failed all-at-once change, measured habits, causal limits, structural responsibility, and ordered decisions coherently',
    b2Articles['b2-a8'].body.includes('dreißig Dinge gleichzeitig ändern') &&
      b2Articles['b2-a8'].body.includes('notierten wir jeden Monat, was das Gerät für den Verbrauch zeigte') &&
      b2Articles['b2-a8'].body.includes('keinen sicheren Beweis für ihre Ursache') &&
      b2Articles['b2-a8'].body.includes('Verantwortung liegt daher auch bei Eigentümern') &&
      b2Articles['b2-a8'].body.includes('erwartete Kosten, möglicher Nutzen, Aufwand und zuständige Person'));
  t('Corpus B2 b2-a8 description question matches energy saving as an everyday habit',
    b2q('b2-a8', 0).prompt === 'كيف يصف النص توفير الطاقة في الحياة اليومية؟' &&
      b2q('b2-a8', 0).key === 'عادة يومية لا عملًا بطوليًا' &&
      b2q('b2-a8', 0).options.includes(b2q('b2-a8', 0).key) &&
      b2Articles['b2-a8'].body.startsWith('Energie zu sparen ist im Alltag eine Gewohnheit, keine große Tat'));
  t('Corpus B2 b2-a8 first-change question matches lowering bedroom heating one level',
    b2q('b2-a8', 1).prompt === 'ما أول تغيير طبّقته الأسرة؟' &&
      b2q('b2-a8', 1).key === 'خفض التدفئة في غرفة النوم درجة واحدة' &&
      b2q('b2-a8', 1).options.includes(b2q('b2-a8', 1).key) &&
      b2Articles['b2-a8'].body.includes('Im Schlafzimmer stellten wir die Heizung eine Stufe niedriger'));
  t('Corpus B2 b2-a9 has 477 measured words and no unknown B2 tokens',
    b2Articles['b2-a9'].title === 'العنوان' &&
      b2Articles['b2-a9'].body.trim().split(/\s+/).length === 477 &&
      known.coverage(b2Known, b2Articles['b2-a9'].body).unknown.length === 0);
  t('Corpus B2 b2-a9 connects headline strength, correlation limits, the source chain, verification, a concrete case, and shared responsibility coherently',
    b2Articles['b2-a9'].body.includes('schwachen Zusammenhang') &&
      b2Articles['b2-a9'].body.includes('Zwischen Zusammenhang und Ursache') &&
      b2Articles['b2-a9'].body.includes('Auf jeder Stufe') &&
      b2Articles['b2-a9'].body.includes('Vor einigen Monaten las ich einen Titel') &&
      b2Articles['b2-a9'].body.includes('Verantwortung nicht allein bei den Lesern'));
  t('Corpus B2 b2-a9 headline question matches evidence stronger than the study',
    b2q('b2-a9', 0).prompt === 'ما مشكلة العنوان في المثال؟' &&
      b2q('b2-a9', 0).key === 'يقدّم دليلًا أقوى مما وجدته الدراسة' &&
      b2q('b2-a9', 0).options.includes(b2q('b2-a9', 0).key) &&
      b2Articles['b2-a9'].body.includes('Der Titel war nicht vollständig falsch, aber deutlich stärker als die Quelle'));
  t('Corpus B2 b2-a9 platform-post question matches opening the original source',
    b2q('b2-a9', 1).prompt === 'ما الذي ينبغي فتحه بدل الاكتفاء بمنشور المنصة؟' &&
      b2q('b2-a9', 1).key === 'المصدر الأصلي' &&
      b2q('b2-a9', 1).options.includes(b2q('b2-a9', 1).key) &&
      b2Articles['b2-a9'].body.includes('einen direkten Link dorthin anbieten'));
  t('Corpus B2 b2-a10 has 495 measured words and no unknown B2 tokens',
    b2Articles['b2-a10'].title === 'التطوع' &&
      b2Articles['b2-a10'].body.trim().split(/\s+/).length === 495 &&
      known.coverage(b2Known, b2Articles['b2-a10'].body).unknown.length === 0);
  t('Corpus B2 b2-a10 connects time limits, a concrete planning change, resilient knowledge, fair limits, and evaluation coherently',
    b2Articles['b2-a10'].body.includes('genug freie Zeit da ist') &&
      b2Articles['b2-a10'].body.includes('Wir teilten den Tag in Abschnitte von jeweils zwei Stunden') &&
      b2Articles['b2-a10'].body.includes('Wissen soll im Verein bleiben') &&
      b2Articles['b2-a10'].body.includes('niemanden unter Druck setzen') &&
      b2Articles['b2-a10'].body.includes('ob Aufgaben zuverlässig erledigt werden'));
  t('Corpus B2 b2-a10 old-request question matches the unclear two-hours-or-whole-day duration',
    b2q('b2-a10', 0).prompt === 'ما الذي لم يكن واضحًا في الطلب القديم؟' &&
      b2q('b2-a10', 0).key === 'هل كانت المساعدة لساعتين أم ليوم كامل' &&
      b2q('b2-a10', 0).options.includes(b2q('b2-a10', 0).key) &&
      b2Articles['b2-a10'].body.includes('ob damit zwei Stunden oder der ganze Tag gemeint waren'));
  t('Corpus B2 b2-a10 backup-person question matches taking over during illness',
    b2q('b2-a10', 1).prompt === 'لماذا يعيّن النادي شخصًا ثانيًا للمهام المهمة؟' &&
      b2q('b2-a10', 1).key === 'ليتولى المهمة إذا مرض شخص' &&
      b2q('b2-a10', 1).options.includes(b2q('b2-a10', 1).key) &&
      b2Articles['b2-a10'].body.includes('eine zweite Person, die übernehmen kann, falls jemand krank wird'));
  t('Corpus B2 b2-a11 has 516 measured words and no unknown B2 tokens',
    b2Articles['b2-a11'].title === 'السياحة' &&
      b2Articles['b2-a11'].body.trim().split(/\s+/).length === 516 &&
      known.coverage(b2Known, b2Articles['b2-a11'].body).unknown.length === 0);
  t('Corpus B2 b2-a11 connects differentiated demand, causal limits, targeted rules, shared costs, and review coherently',
    b2Articles['b2-a11'].body.includes('Besucher ohne Übernachtung') &&
      b2Articles['b2-a11'].body.includes('Sie beweist aber nicht, dass der Tourismus allein') &&
      b2Articles['b2-a11'].body.includes('bevor man eine einzige Ursache nennt') &&
      b2Articles['b2-a11'].body.includes('zusätzliche Reinigung und mehr Busse in der Saison') &&
      b2Articles['b2-a11'].body.includes('nach einem festgelegten Zeitraum geprüft werden'));
  t('Corpus B2 b2-a11 apartment question matches a changed street without citywide single-cause proof',
    b2q('b2-a11', 0).prompt === 'ماذا تثبت ملاحظة الشقق الثلاث وحدها؟' &&
      b2q('b2-a11', 0).key === 'أن الشارع تغيّر، لا أن السياحة وحدها رفعت إيجارات المدينة' &&
      b2q('b2-a11', 0).options.includes(b2q('b2-a11', 0).key) &&
      b2Articles['b2-a11'].body.includes('Diese Beobachtung zeigt, dass sich die Straße verändert hat'));
  t('Corpus B2 b2-a11 overnight-fee question matches seasonal cleaning and bus service',
    b2q('b2-a11', 1).prompt === 'فيمَ يقترح النص استخدام جزء من رسم المبيت؟' &&
      b2q('b2-a11', 1).key === 'في تنظيف إضافي وحافلات أكثر في الموسم' &&
      b2q('b2-a11', 1).options.includes(b2q('b2-a11', 1).key) &&
      b2Articles['b2-a11'].body.includes('zusätzliche Reinigung und mehr Busse in der Saison finanzieren'));
  t('Corpus B2 b2-a12 has 524 measured words and no unknown B2 tokens',
    b2Articles['b2-a12'].title === 'اللغة في العمل' &&
      b2Articles['b2-a12'].body.trim().split(/\s+/).length === 524 &&
      known.coverage(b2Known, b2Articles['b2-a12'].body).unknown.length === 0);
  t('Corpus B2 b2-a12 connects certificate limits, role-specific language, a fair work sample, onboarding, and follow-up coherently',
    b2Articles['b2-a12'].body.includes('unter festgelegten Bedingungen') &&
      b2Articles['b2-a12'].body.includes('hängt von der Stelle ab') &&
      b2Articles['b2-a12'].body.includes('alle dieselbe Aufgabe und fünf Minuten Vorbereitung') &&
      b2Articles['b2-a12'].body.includes('Die Verantwortung für Sprache endet nicht mit der Einstellung') &&
      b2Articles['b2-a12'].body.includes('Nach einigen Wochen sollte geprüft werden'));
  t('Corpus B2 b2-a12 certificate question matches language tasks under specified conditions',
    b2q('b2-a12', 0).prompt === 'ماذا تُثبت الشهادة وفق النص؟' &&
      b2q('b2-a12', 0).key === 'أن صاحبها أنجز مهام لغوية في شروط محددة' &&
      b2q('b2-a12', 0).options.includes(b2q('b2-a12', 0).key) &&
      b2Articles['b2-a12'].body.includes('bestimmte Aufgaben in einer Sprache lösen konnte'));
  t('Corpus B2 b2-a12 common-task question matches comparable answers without confusing speed and experience',
    b2q('b2-a12', 1).prompt === 'لماذا يحصل جميع المتقدمين على المهمة نفسها ووقت للتحضير؟' &&
      b2q('b2-a12', 1).key === 'لتصبح الإجابات قابلة للمقارنة ولا تُخلط سرعة الكلام بالخبرة' &&
      b2q('b2-a12', 1).options.includes(b2q('b2-a12', 1).key) &&
      b2Articles['b2-a12'].body.includes('schnelles Sprechen wurde leicht mit beruflicher Erfahrung verwechselt'));
  t('Corpus B2 b2-a13 has 504 measured words and no unknown B2 tokens',
    b2Articles['b2-a13'].title === 'الهدر' &&
      b2Articles['b2-a13'].body.trim().split(/\s+/).length === 504 &&
      known.coverage(b2Known, b2Articles['b2-a13'].body).unknown.length === 0);
  t('Corpus B2 b2-a13 connects measurement with causes, targeted household action, safety, shared responsibility, and review coherently',
    b2Articles['b2-a13'].body.includes('warum etwas im Müll lag') &&
      b2Articles['b2-a13'].body.includes('wählten zwei häufige Ursachen') &&
      b2Articles['b2-a13'].body.includes('bleibt die Sicherheit wichtiger') &&
      b2Articles['b2-a13'].body.includes('Hersteller entscheiden jedoch über Material') &&
      b2Articles['b2-a13'].body.includes('Vergleich über mehrere Wochen'));
  t('Corpus B2 b2-a13 reason question matches different causes needing different measures',
    b2q('b2-a13', 0).prompt === 'لماذا يسجّل النص سبب الهدر إلى جانب الكمية؟' &&
      b2q('b2-a13', 0).key === 'لأن الأسباب المختلفة تحتاج حلولًا مختلفة' &&
      b2q('b2-a13', 0).options.includes(b2q('b2-a13', 0).key) &&
      b2Articles['b2-a13'].body.includes('brauchen eine andere Lösung als zu große Portionen'));
  t('Corpus B2 b2-a13 food-safety question matches not eating spoiled food to improve a number',
    b2q('b2-a13', 1).prompt === 'ما الذي لا ينبغي فعله لمجرد تصغير الرقم؟' &&
      b2q('b2-a13', 1).key === 'أكل طعام لم يعد صالحًا' &&
      b2q('b2-a13', 1).options.includes(b2q('b2-a13', 1).key) &&
      b2Articles['b2-a13'].body.includes('wird nicht gegessen, nur damit die Zahl kleiner wirkt'));
  t('Corpus B2 b2-a14 has 551 measured words and no unknown B2 tokens',
    b2Articles['b2-a14'].title === 'الرياضة والمال' &&
      b2Articles['b2-a14'].body.trim().split(/\s+/).length === 551 &&
      known.coverage(b2Known, b2Articles['b2-a14'].body).unknown.length === 0);
  t('Corpus B2 b2-a14 connects full participation costs, confidential support, transparent finances, sponsor conditions, a hall decision, review, and volunteer time coherently',
    b2Articles['b2-a14'].body.includes('gesamten Kosten der Teilnahme') &&
      b2Articles['b2-a14'].body.includes('muss seine Lage nicht vor der Gruppe erklären') &&
      b2Articles['b2-a14'].body.includes('warum er sich verändert') &&
      b2Articles['b2-a14'].body.includes('ob das Angebot zu den Werten des Vereins passt') &&
      b2Articles['b2-a14'].body.includes('Nach sechs Monaten wurde geprüft') &&
      b2Articles['b2-a14'].body.includes('wo zu viel Arbeit von wenigen Personen abhängt'));
  t('Corpus B2 b2-a14 registration question matches disclosure of regular and possible additional costs',
    b2q('b2-a14', 0).prompt === 'ماذا ينبغي للنادي أن يوضّح قبل التسجيل؟' &&
      b2q('b2-a14', 0).key === 'التكاليف المنتظمة والإضافية المحتملة' &&
      b2q('b2-a14', 0).options.includes(b2q('b2-a14', 0).key) &&
      b2Articles['b2-a14'].body.includes('regelmäßige und mögliche weitere Kosten erklären'));
  t('Corpus B2 b2-a14 sponsor question matches checking the offer against club values',
    b2q('b2-a14', 1).prompt === 'ما الذي يفحصه الأعضاء قبل قبول مال شركة؟' &&
      b2q('b2-a14', 1).key === 'مدى توافق العرض مع قيم النادي' &&
      b2q('b2-a14', 1).options.includes(b2q('b2-a14', 1).key) &&
      b2Articles['b2-a14'].body.includes('ob das Angebot zu den Werten des Vereins passt'));
  t('Corpus B2 b2-a15 has 593 measured words and no unknown B2 tokens',
    b2Articles['b2-a15'].title === 'الدعم الثقافي' &&
      b2Articles['b2-a15'].body.trim().split(/\s+/).length === 593 &&
      known.coverage(b2Known, b2Articles['b2-a15'].body).unknown.length === 0);
  t('Corpus B2 b2-a15 connects artistic purpose, eligible costs, application and receipt timing, a concrete theatre plan, review, partial funding, and evidence coherently',
    b2Articles['b2-a15'].body.includes('Gute Kunst und ordentliche Unterlagen ersetzen einander nicht') &&
      b2Articles['b2-a15'].body.includes('Vor dem Kauf eines Geräts gibt es noch keinen Beleg') &&
      b2Articles['b2-a15'].body.includes('zwölf Workshops für Jugendliche') &&
      b2Articles['b2-a15'].body.includes('Er garantierte jedoch keine Förderung') &&
      b2Articles['b2-a15'].body.includes('zehn statt zwölf Workshops') &&
      b2Articles['b2-a15'].body.includes('Zahlen allein zeigen allerdings nicht'));
  t('Corpus B2 b2-a15 device-price question matches using the price in an offer before purchase',
    b2q('b2-a15', 0).prompt === 'إلى ماذا يستند تقدير ثمن الجهاز قبل شرائه؟' &&
      b2q('b2-a15', 0).key === 'إلى السعر المذكور في عرض' &&
      b2q('b2-a15', 0).options.includes(b2q('b2-a15', 0).key) &&
      b2Articles['b2-a15'].body.includes('zum Beispiel den Preis aus einem Angebot'));
  t('Corpus B2 b2-a15 calendar question matches the remaining substantive and comparative funding review',
    b2q('b2-a15', 1).prompt === 'لماذا لا يضمن التقويم الحصول على الدعم؟' &&
      b2q('b2-a15', 1).key === 'لأن القرار يعتمد أيضًا على أهداف المشروع وكلفته ومقارنته بطلبات أخرى' &&
      b2q('b2-a15', 1).options.includes(b2q('b2-a15', 1).key) &&
      b2Articles['b2-a15'].body.includes('ob das Projekt die veröffentlichten Ziele erfüllte') &&
      b2Articles['b2-a15'].body.includes('im Vergleich zu anderen Anträgen bewertet wurde'));
  t('Corpus B2 b2-a16 has 639 measured words and no unknown B2 tokens',
    b2Articles['b2-a16'].title === 'الجيران' &&
      b2Articles['b2-a16'].body.trim().split(/\s+/).length === 639 &&
      known.coverage(b2Known, b2Articles['b2-a16'].body).unknown.length === 0);
  t('Corpus B2 b2-a16 connects observation and judgment, uncertain sound sources, written rules, a two-source case, a reviewed agreement, escalation, and safety coherently',
    b2Articles['b2-a16'].body.includes('diese Ebenen zu trennen') &&
      b2Articles['b2-a16'].body.includes('Wer die Quelle nicht sicher kennt') &&
      b2Articles['b2-a16'].body.includes('geschriebenen Regeln des Hauses') &&
      b2Articles['b2-a16'].body.includes('zwei verschiedene Ursachen vermischt') &&
      b2Articles['b2-a16'].body.includes('Nach zwei Wochen wollten wir noch einmal miteinander sprechen') &&
      b2Articles['b2-a16'].body.includes('Bei Drohungen, Gewalt oder einer direkten Gefahr'));
  t('Corpus B2 b2-a16 source question matches sound possibly coming from another place',
    b2q('b2-a16', 0).prompt === 'لماذا لا ينبغي توجيه اتهام فوري إلى جار بعينه؟' &&
      b2q('b2-a16', 0).key === 'لأن مصدر الصوت قد يكون من مكان آخر' &&
      b2q('b2-a16', 0).options.includes(b2q('b2-a16', 0).key) &&
      b2Articles['b2-a16'].body.includes('kann wie Lärm aus der Wohnung nebenan klingen'));
  t('Corpus B2 b2-a16 safety question matches threats, violence, or direct danger preceding a door discussion',
    b2q('b2-a16', 1).prompt === 'متى لا يلزم بدء الأمر بنقاش مباشر عند الباب؟' &&
      b2q('b2-a16', 1).key === 'عند وجود تهديد أو عنف أو خطر مباشر' &&
      b2q('b2-a16', 1).options.includes(b2q('b2-a16', 1).key) &&
      b2Articles['b2-a16'].body.includes('muss niemand zuerst an einer offenen Tür diskutieren'));
  t('Corpus B2 b2-a17 has 706 measured words and no unknown B2 tokens',
    b2Articles['b2-a17'].title === 'الشاشة' &&
      b2Articles['b2-a17'].body.trim().split(/\s+/).length === 706 &&
      known.coverage(b2Known, b2Articles['b2-a17'].body).unknown.length === 0);
  t('Corpus B2 b2-a17 connects measurement limits, context, correlation, categorized self-observation, a bounded experiment, review, privacy, and shared responsibility coherently',
    b2Articles['b2-a17'].body.includes('Manche Angaben stammen aus einer Befragung') &&
      b2Articles['b2-a17'].body.includes('Inhalt, Zweck, Tageszeit und Situation') &&
      b2Articles['b2-a17'].body.includes('Auch ein Zusammenhang beweist noch keine Ursache') &&
      b2Articles['b2-a17'].body.includes('Nachrichten, Fahrpläne, Arbeit, Videos, Spiele oder Lesen') &&
      b2Articles['b2-a17'].body.includes('Für zwei Wochen stellte ich nach 22 Uhr') &&
      b2Articles['b2-a17'].body.includes('Verantwortung liegt schließlich nicht nur bei einzelnen Nutzern'));
  t('Corpus B2 b2-a17 total-duration question matches use differing by content, purpose, time, and context',
    b2q('b2-a17', 0).prompt === 'لماذا لا تكفي المدة الإجمالية وحدها للحكم على الاستخدام؟' &&
      b2q('b2-a17', 0).key === 'لأن الاستخدام يختلف باختلاف المحتوى والغرض والوقت والسياق' &&
      b2q('b2-a17', 0).options.includes(b2q('b2-a17', 0).key) &&
      b2Articles['b2-a17'].body.includes('Inhalt, Zweck, Tageszeit und Situation unterscheiden sich jedoch'));
  t('Corpus B2 b2-a17 experiment question matches disabling game notices and leaving the phone in the kitchen while reading',
    b2q('b2-a17', 1).prompt === 'ما التغيير الذي اختبره الراوي لمدة أسبوعين؟' &&
      b2q('b2-a17', 1).key === 'إيقاف إشعارات الألعاب بعد العاشرة وترك الهاتف في المطبخ أثناء القراءة' &&
      b2q('b2-a17', 1).options.includes(b2q('b2-a17', 1).key) &&
      b2Articles['b2-a17'].body.includes('die Mitteilungen der Spiele ab und ließ das Telefon beim Lesen in der Küche'));
  t('Corpus B2 b2-a18 has 684 measured words and no unknown B2 tokens',
    b2Articles['b2-a18'].title === 'التقاعد' &&
      b2Articles['b2-a18'].body.trim().split(/\s+/).length === 684 &&
      known.coverage(b2Known, b2Articles['b2-a18'].body).unknown.length === 0);
  t('Corpus B2 b2-a18 connects distinct work and pension dates, annual costs, three scenarios, cautious assumptions, financial and social preparation, review, and personal advice coherently',
    b2Articles['b2-a18'].body.includes('Wann endet die regelmäßige Arbeit, und wann beginnt die gesetzliche Rente?') &&
      b2Articles['b2-a18'].body.includes('die Ausgaben eines ganzen Jahres') &&
      b2Articles['b2-a18'].body.includes('Ein kleiner Rechner zeigte mir drei Möglichkeiten') &&
      b2Articles['b2-a18'].body.includes('mit den gleichen vorsichtigen Annahmen') &&
      b2Articles['b2-a18'].body.includes('was ich danach tun könnte') &&
      b2Articles['b2-a18'].body.includes('Allgemeine Beispiele ersetzen keine persönliche Auskunft'));
  t('Corpus B2 b2-a18 date-separation question matches possible months without employment income',
    b2q('b2-a18', 0).prompt === 'لماذا يفصل الراوي بين نهاية العمل وبداية المعاش القانوني؟' &&
      b2q('b2-a18', 0).key === 'لأن أشهرًا قد تمر بلا دخل من العمل' &&
      b2q('b2-a18', 0).options.includes(b2q('b2-a18', 0).key) &&
      b2Articles['b2-a18'].body.includes('mögliche Monate ohne Einkommen aus der Arbeit'));
  t('Corpus B2 b2-a18 insufficient-savings question matches working longer or reducing hours first',
    b2q('b2-a18', 1).prompt === 'ماذا سيفعل الراوي إذا لم يكف المال الإضافي في الموعد المتفق عليه؟' &&
      b2q('b2-a18', 1).key === 'سيعمل مدة أطول أو يخفض ساعات العمل أولًا' &&
      b2q('b2-a18', 1).options.includes(b2q('b2-a18', 1).key) &&
      b2Articles['b2-a18'].body.includes('arbeite ich länger oder reduziere zunächst nur die Stunden'));
  t('Corpus B2 b2-a19 has 716 measured words and no unknown B2 tokens',
    b2Articles['b2-a19'].title === 'القرية والمدينة' &&
      b2Articles['b2-a19'].body.trim().split(/\s+/).length === 716 &&
      known.coverage(b2Known, b2Articles['b2-a19'].body).unknown.length === 0);
  t('Corpus B2 b2-a19 connects a household-specific comparison, full costs, time, services, emergency planning, a route test, social ties, a conditional move, review, and shared responsibility coherently',
    b2Articles['b2-a19'].body.includes('einen bestimmten Haushalt, einen bestimmten Ort und einen bestimmten Zeitraum') &&
      b2Articles['b2-a19'].body.includes('Kosten für Fahrten, Wege, Heizung, notwendige Reparaturen') &&
      b2Articles['b2-a19'].body.includes('In einer zweiten Spalte stand die Zeit') &&
      b2Articles['b2-a19'].body.includes('sollte sich die Familie jedoch nicht auf einen freundlichen Nachbarn verlassen') &&
      b2Articles['b2-a19'].body.includes('nur drei Minuten Zeit zum Umsteigen') &&
      b2Articles['b2-a19'].body.includes('Nähe entsteht nicht automatisch durch wenige Häuser') &&
      b2Articles['b2-a19'].body.includes('Auch die Verwaltungen in Dörfern und Städten tragen Verantwortung'));
  t('Corpus B2 b2-a19 low-rent question matches transport, heating, repair, and travel-time costs',
    b2q('b2-a19', 0).prompt === 'لماذا لا تكفي أجرة القرية المنخفضة للمقارنة؟' &&
      b2q('b2-a19', 0).key === 'لأن تكاليف النقل والتدفئة والإصلاح ووقت الطريق تؤثر أيضًا' &&
      b2q('b2-a19', 0).options.includes(b2q('b2-a19', 0).key) &&
      b2Articles['b2-a19'].body.includes('Sie sagt aber noch nichts über Kosten für Fahrten, Wege, Heizung, notwendige Reparaturen'));
  t('Corpus B2 b2-a19 delayed-move question matches written confirmation of two home-working days',
    b2q('b2-a19', 1).prompt === 'لماذا انتظرت الأسرة قبل الانتقال؟' &&
      b2q('b2-a19', 1).key === 'حتى يؤكد صاحب عمل الزوج خطيًا يومي العمل من المنزل' &&
      b2q('b2-a19', 1).options.includes(b2q('b2-a19', 1).key) &&
      b2Articles['b2-a19'].body.includes('bis der Arbeitgeber ihres Mannes die zwei Tage Arbeit zu Hause schriftlich bestätigt hatte'));
  t('Corpus B2 b2-a20 has 726 measured words and no unknown B2 tokens',
    b2Articles['b2-a20'].title === 'العدل في الامتحان' &&
      b2Articles['b2-a20'].body.trim().split(/\s+/).length === 726 &&
      known.coverage(b2Known, b2Articles['b2-a20'].body).unknown.length === 0);
  t('Corpus B2 b2-a20 connects score models to purpose, a concrete result, transparent criteria and review, justified adjustments, diagnostic practice, and examination review coherently',
    b2Articles['b2-a20'].body.includes('Es gibt dafür verschiedene Modelle') &&
      b2Articles['b2-a20'].body.includes('Die Regel muss also zum Zweck passen') &&
      b2Articles['b2-a20'].body.includes('61 im Schreiben und 74 im Sprechen') &&
      b2Articles['b2-a20'].body.includes('Inhalt, Aufbau, Wortwahl und Grammatik') &&
      b2Articles['b2-a20'].body.includes('wegen einer nachgewiesenen Einschränkung') &&
      b2Articles['b2-a20'].body.includes('Ich hatte die Aufgabe nicht vollständig beantwortet') &&
      b2Articles['b2-a20'].body.includes('Auch die Schule muss ihre Prüfung prüfen'));
  t('Corpus B2 b2-a20 result question matches 61 in writing against a 65-point module minimum',
    b2q('b2-a20', 0).prompt === 'لماذا لم يحقق الراوي الهدف رغم تجاوز متوسطه 70 نقطة؟' &&
      b2q('b2-a20', 0).key === 'لأن الكتابة حصلت على 61 والمطلوب 65 في كل قسم' &&
      b2q('b2-a20', 0).options.includes(b2q('b2-a20', 0).key) &&
      b2Articles['b2-a20'].body.includes('In jedem der vier Module waren mindestens 65 Punkte nötig'));
  t('Corpus B2 b2-a20 training question matches two timed texts weekly, criteria review, and feedback',
    b2q('b2-a20', 1).prompt === 'كيف غيّر الراوي تدريبه مدة ستة أسابيع؟' &&
      b2q('b2-a20', 1).key === 'كتب نصين أسبوعيًا تحت ضغط الوقت وراجع المعايير وتلقى تعليقًا' &&
      b2q('b2-a20', 1).options.includes(b2q('b2-a20', 1).key) &&
      b2Articles['b2-a20'].body.includes('Sechs Wochen lang schrieb ich zweimal pro Woche einen Text unter Zeitdruck'));
  const b2Chapters = Object.fromEntries(win.DW_LIBRARY.B2.novel.chapters.map(x => ['novelle-' + x.n, x]));
  const b2cq = (id, n) => b2Chapters[id].questions[n];
  t('Corpus B2 novelle-1 has 695 measured words and no unknown B2 tokens',
    b2Chapters['novelle-1'].title === 'الوصول' &&
      b2Chapters['novelle-1'].body.trim().split(/\s+/).length === 695 &&
      known.coverage(b2Known, b2Chapters['novelle-1'].body).unknown.length === 0);
  t('Corpus B2 novelle-1 connects the delayed arrival, promised but missing key, unanswered contact, Leila clue, safe overnight choice, written record, and next-morning return into novelle-2 coherently',
    b2Chapters['novelle-1'].body.includes('Der Zug hatte zwei Stunden Verspätung') &&
      b2Chapters['novelle-1'].body.includes('der Schlüssel unter einem flachen Stein neben der Tür') &&
      b2Chapters['novelle-1'].body.includes('Vielleicht habe Leila') &&
      b2Chapters['novelle-1'].body.includes('Sie entschied sich daher für eine Nacht in der Pension') &&
      b2Chapters['novelle-1'].body.includes('Um sieben klopfe ich wieder') &&
      b2Chapters['novelle-2'].body.startsWith('Am nächsten Morgen stand Sara kurz vor sieben wieder vor dem Haus'));
  t('Corpus B2 novelle-1 entry question matches the promised key missing under the flat stone',
    b2cq('novelle-1', 0).prompt === 'لماذا لم تستطع سارة دخول الشقة عند وصولها؟' &&
      b2cq('novelle-1', 0).key === 'لأن المفتاح الموعود لم يكن تحت الحجر المسطح' &&
      b2cq('novelle-1', 0).options.includes(b2cq('novelle-1', 0).key) &&
      b2Chapters['novelle-1'].body.includes('Unter keinem lag ein Schlüssel'));
  t('Corpus B2 novelle-1 pension question matches no entry, no reply, and refusing to wait outside overnight',
    b2cq('novelle-1', 1).prompt === 'لماذا اختارت قضاء ليلة في النُزل؟' &&
      b2cq('novelle-1', 1).key === 'لأنها لم تدخل الشقة ولم يصل رد ولم ترد الانتظار خارجًا' &&
      b2cq('novelle-1', 1).options.includes(b2cq('novelle-1', 1).key) &&
      b2Chapters['novelle-1'].body.includes('weder vor der Tür schlafen noch allein bis zum Morgen durch die Straßen gehen'));
  t('Corpus B2 novelle-2 has 704 measured words and no unknown B2 tokens',
    b2Chapters['novelle-2'].title === 'الجارة' &&
      b2Chapters['novelle-2'].body.trim().split(/\s+/).length === 704 &&
      known.coverage(b2Known, b2Chapters['novelle-2'].body).unknown.length === 0);
  t('Corpus B2 novelle-2 connects Leila and the spare key, documented room defects, a temporary water repair, the four-word calendar clue, an honest letter, water storage, and course preparation into novelle-3 coherently',
    b2Chapters['novelle-2'].body.includes('Der Vermieter hatte ihr, bevor er aus der Stadt fuhr, einen zweiten Schlüssel gegeben') &&
      b2Chapters['novelle-2'].body.includes('fotografierte die beiden Mängel') &&
      b2Chapters['novelle-2'].body.includes('Für eine Reparatur am Rohr') &&
      b2Chapters['novelle-2'].body.includes('Dort standen vier Wörter') &&
      b2Chapters['novelle-2'].body.includes('ohne Klage, aber genau') &&
      b2Chapters['novelle-2'].body.includes('stellte den Wecker auf halb sieben') &&
      b2Chapters['novelle-3'].body.startsWith('Der Kurs begann um acht'));
  t('Corpus B2 novelle-2 spare-key question matches Leila in the floor above',
    b2cq('novelle-2', 0).prompt === 'أين كان المفتاح الثاني؟' &&
      b2cq('novelle-2', 0).key === 'عند ليلى في الطابق الأعلى' &&
      b2cq('novelle-2', 0).options.includes(b2cq('novelle-2', 0).key) &&
      b2Chapters['novelle-2'].body.includes('Leila und wohnte im Stock über der Wohnung'));
  t('Corpus B2 novelle-2 water question matches the pipe repair until evening',
    b2cq('novelle-2', 1).prompt === 'لماذا لم يكن الماء متاحًا حتى المساء؟' &&
      b2cq('novelle-2', 1).key === 'بسبب إصلاح في الأنبوب' &&
      b2cq('novelle-2', 1).options.includes(b2cq('novelle-2', 1).key) &&
      b2Chapters['novelle-2'].body.includes('Für eine Reparatur am Rohr gab es an diesem Tag bis zum Abend kein Wasser'));
  t('Corpus B2 novelle-3 has 808 measured words and no unknown B2 tokens',
    b2Chapters['novelle-3'].title === 'العمل' &&
      b2Chapters['novelle-3'].body.trim().split(/\s+/).length === 808 &&
      known.coverage(b2Known, b2Chapters['novelle-3'].body).unknown.length === 0);
  t('Corpus B2 novelle-3 connects the first course day, a transparent application and contract, the four-evening plan, Leila hike, calendar boundary, and original-paper task into novelle-4 coherently',
    b2Chapters['novelle-3'].body.startsWith('Der Kurs begann um acht') &&
      b2Chapters['novelle-3'].body.includes('Lehrerin prüfte mit ihr, ob alle Informationen klar waren, änderte aber nicht Saras Sätze') &&
      b2Chapters['novelle-3'].body.includes('Bevor Sara unterschrieb, las sie Arbeitszeit, Lohn und Pausen noch einmal') &&
      b2Chapters['novelle-3'].body.includes('vier Abende zum Lernen') &&
      b2Chapters['novelle-3'].body.includes('Über den Hügeln lag grauer, dichter Nebel') &&
      b2Chapters['novelle-3'].body.includes('erst den Kalender ansehen, dann antworten') &&
      b2Chapters['novelle-3'].body.includes('Nur die Originale fehlten noch') &&
      b2Chapters['novelle-4'].body.startsWith('Am Donnerstag kam die Lieferung zu spät'));
  t('Corpus B2 novelle-3 study-evening question matches four evenings, not seven',
    b2cq('novelle-3', 0).prompt === 'كم أمسيةً خصصت سارة لمراجعة دروسها؟' &&
      b2cq('novelle-3', 0).key === 'أربع أمسيات' &&
      b2cq('novelle-3', 0).options.includes(b2cq('novelle-3', 0).key) &&
      b2Chapters['novelle-3'].body.includes('vier Abende zum Lernen'));
  t('Corpus B2 novelle-3 calendar question matches the rule added after Saturday work',
    b2cq('novelle-3', 1).prompt === 'ما القاعدة التي أضافتها بعد عمل يوم السبت؟' &&
      b2cq('novelle-3', 1).key === 'أن تنظر في التقويم قبل الإجابة' &&
      b2cq('novelle-3', 1).options.includes(b2cq('novelle-3', 1).key) &&
      b2Chapters['novelle-3'].body.includes('Deshalb ergänzte sie eine Regel: erst den Kalender ansehen, dann antworten'));
  t('Corpus B2 novelle-4 has 734 measured words and no unknown B2 tokens',
    b2Chapters['novelle-4'].title === 'الخطأ' &&
      b2Chapters['novelle-4'].body.trim().split(/\s+/).length === 734 &&
      known.coverage(b2Known, b2Chapters['novelle-4'].body).unknown.length === 0);
  t('Corpus B2 novelle-4 turns the delayed Sfax originals into a documented deadline response, confirmed Monday appointment, process diagnosis, new buffer rules, and verified second case',
    b2Chapters['novelle-4'].body.startsWith('Am Donnerstag kam die Lieferung zu spät') &&
      b2Chapters['novelle-4'].body.includes('Der Wagen mit den Originalen stand noch in Sfax') &&
      b2Chapters['novelle-4'].body.includes('Erstens nannte sie die Tatsache') &&
      b2Chapters['novelle-4'].body.includes('Montag, acht Uhr dreißig') &&
      b2Chapters['novelle-4'].body.includes('Der Fehler war, dass die Originale erst am Morgen des Termins beim Amt kommen sollten') &&
      b2Chapters['novelle-4'].body.includes('Zwischen Lieferung und Termin war kein freier Tag') &&
      b2Chapters['novelle-4'].body.includes('Diesmal fragte Sara zwei Tage vorher nach'));
  t('Corpus B2 novelle-4 missed-appointment question matches the originals remaining in Sfax',
    b2cq('novelle-4', 0).prompt === 'لماذا تعذر إنجاز موعد الخميس؟' &&
      b2cq('novelle-4', 0).key === 'لأن الأوراق الأصلية بقيت في صفاقس' &&
      b2cq('novelle-4', 0).options.includes(b2cq('novelle-4', 0).key) &&
      b2Chapters['novelle-4'].body.includes('Der Wagen mit den Originalen stand noch in Sfax'));
  t('Corpus B2 novelle-4 replacement-appointment question matches Monday at eight thirty',
    b2cq('novelle-4', 1).prompt === 'متى كان الموعد البديل المؤكد؟' &&
      b2cq('novelle-4', 1).key === 'الاثنين عند الثامنة والنصف' &&
      b2cq('novelle-4', 1).options.includes(b2cq('novelle-4', 1).key) &&
      b2Chapters['novelle-4'].body.includes('Montag, acht Uhr dreißig'));
  t('Corpus B2 novelle-5 has 793 measured words, an explicit rear roof below no upper room, and no unknown B2 tokens',
    b2Chapters['novelle-5'].title === 'المطر' &&
      b2Chapters['novelle-5'].body.trim().split(/\s+/).length === 793 &&
      b2Chapters['novelle-5'].body.includes('Über dem Schlafzimmer lag nicht Leilas Wohnung, sondern nur das flache Dach zum Hof') &&
      known.coverage(b2Known, b2Chapters['novelle-5'].body).unknown.length === 0);
  t('Corpus B2 novelle-5 turns the three-day rain and roof leak into a safe documented plan, written permission, temporary cover, landlord-funded repair, rain check, and March-to-May continuity',
    b2Chapters['novelle-5'].body.startsWith('Im Winter regnete es drei graue Tage fast ohne Pause') &&
      b2Chapters['novelle-5'].body.includes('zog das Bett von der Wand weg und nahm die Lampe aus der Nähe') &&
      b2Chapters['novelle-5'].body.includes('machten einen Plan') &&
      b2Chapters['novelle-5'].body.includes('Als Sara die schriftliche Erlaubnis hatte') &&
      b2Chapters['novelle-5'].body.includes('Für den Moment deckte er die Stelle sicher ab') &&
      b2Chapters['novelle-5'].body.includes('dass er die gesamten Kosten übernahm') &&
      b2Chapters['novelle-5'].body.includes('Alles blieb trocken') &&
      b2Chapters['novelle-5'].body.includes('Im März öffnete Sara morgens wieder länger das Fenster') &&
      b2Chapters['novelle-6'].body.startsWith('Im Mai fiel morgens helles Licht durch das Fenster'));
  t('Corpus B2 novelle-5 wet-roof question matches the explicit safety reason',
    b2cq('novelle-5', 0).prompt === 'لماذا لم تصعد سارة وليلى إلى السطح أثناء المطر القوي؟' &&
      b2cq('novelle-5', 0).key === 'لأن السطح المبلل لم يكن آمنًا' &&
      b2cq('novelle-5', 0).options.includes(b2cq('novelle-5', 0).key) &&
      b2Chapters['novelle-5'].body.includes('weil es bei starkem Regen nicht sicher war'));
  t('Corpus B2 novelle-5 repair-cost question matches the landlord paying the full amount',
    b2cq('novelle-5', 1).prompt === 'من تحمّل تكلفة إصلاح السطح كاملة؟' &&
      b2cq('novelle-5', 1).key === 'المالك' &&
      b2cq('novelle-5', 1).options.includes(b2cq('novelle-5', 1).key) &&
      b2Chapters['novelle-5'].body.includes('dass er die gesamten Kosten übernahm'));
  t('Corpus B2 novelle-6 has 804 measured words and no unknown B2 tokens',
    b2Chapters['novelle-6'].title === 'القرار' &&
      b2Chapters['novelle-6'].body.trim().split(/\s+/).length === 804 &&
      known.coverage(b2Known, b2Chapters['novelle-6'].body).unknown.length === 0);
  t('Corpus B2 novelle-6 closes the calendar clue, exam, fixed-term work and housing decisions, inspected upper room, documented key handover, and precise letter home',
    b2Chapters['novelle-6'].body.includes('Für den, der bleibt') &&
      b2Chapters['novelle-6'].body.includes('teilte eine Seite in vier Bereiche: Kurs, Arbeit, Wohnung und Geld') &&
      b2Chapters['novelle-6'].body.includes('Eine Woche später kam das Ergebnis: bestanden') &&
      b2Chapters['novelle-6'].body.includes('einen Vertrag bis Ende Januar') &&
      b2Chapters['novelle-6'].body.includes('Sie prüfte Wasser, Licht, Fenster und Tür') &&
      b2Chapters['novelle-6'].body.includes('Den alten Schlüssel gab sie Leila gegen eine kurze Bestätigung') &&
      b2Chapters['novelle-6'].body.endsWith('Im Hof hörte sie bekannte Stimmen, aber aus einer neuen Richtung.'));
  t('Corpus B2 novelle-6 six-month question matches the passed exam, work contract, and inspected room',
    b2cq('novelle-6', 0).prompt === 'لماذا قررت سارة البقاء ستة أشهر أخرى؟' &&
      b2cq('novelle-6', 0).key === 'لأنها نجحت ولديها عقد عمل وغرفة مفحوصة' &&
      b2cq('novelle-6', 0).options.includes(b2cq('novelle-6', 0).key) &&
      b2Chapters['novelle-6'].body.includes('Die Prüfung ist bestanden. Ich arbeite bis Januar weiter. Ich bleibe noch sechs Monate in Sousse'));
  t('Corpus B2 novelle-6 old-key question matches the documented handover to Leila',
    b2cq('novelle-6', 1).prompt === 'ماذا فعلت بالمفتاح القديم عند الانتقال؟' &&
      b2cq('novelle-6', 1).key === 'أعادته إلى ليلى مقابل تأكيد' &&
      b2cq('novelle-6', 1).options.includes(b2cq('novelle-6', 1).key) &&
      b2Chapters['novelle-6'].body.includes('Den alten Schlüssel gab sie Leila gegen eine kurze Bestätigung'));
  const r1Order = [
    'Ich wohne in Berlin und mache heute Urlaub in einer anderen Stadt.',
    'Ich suche ein bequemes Zimmer im ersten Stock.',
    'Das Zimmer soll sauber und ruhig sein.',
    'Am Morgen trinke ich Kaffee, dann gehe ich in die Stadt.',
    'Ich möchte zwei Nächte in der Stadt bleiben und dann nach Hause fahren.',
    'Am Abend komme ich ins schöne Hotel',
    'Die Frau sagt ja und ich nehme das leere Zimmer für zwei Nächte.',
    'Nach zwei Nächten nehme ich meinen schweren Koffer',
    'Der Zug fährt dann um genau sechzehn Uhr.'
  ].map(part => texts['a1-r1'].body.indexOf(part));
  t('A1 a1-r1 keeps its two-night hotel trip in chronological order',
    r1Order.every((pos, i) => pos >= 0 && (i === 0 || pos > r1Order[i - 1])) &&
      q('a1-r1', 1).key === 'ليلتان');
  t('A1 a1-r16 makes the bus-stop route and full walking option clear',
    texts['a1-r16'].body.includes('bis zum kleinen Bahnhof') &&
      texts['a1-r16'].body.includes('Vom kleinen Bahnhof sind es noch ganze zehn Minuten zu Fuß') &&
      texts['a1-r16'].body.includes('Den ganzen Weg zu Fuß gehe ich nur bei gutem Wetter') &&
      texts['a1-r16'].body.includes('Am Abend fahre ich mit dem Fahrrad'));
  t('A1 a1-r4 move-in respects the advertised Monday availability',
    texts['a1-r4'].body.includes('Zimmer frei ab Montag') &&
      texts['a1-r4'].body.indexOf('Am Montag bringe ich meine Sachen') >
        texts['a1-r4'].body.indexOf('bekomme den eigenen Schlüssel'));
  t('A1 a1-r5 treats today’s ten-minute delay as an exception',
    texts['a1-r5'].body.includes('Der Zug hat heute zehn Minuten Verspätung') &&
      texts['a1-r5'].body.includes('Der Zug fährt oft pünktlich um acht Uhr ab') &&
      q('a1-r5', 1).key === 'نعم');
  t('A1 a1-r6 ends its note after the farewell and signature',
    texts['a1-r6'].body.endsWith('Am Abend rufe ich dich dann sicher wieder an. Bis später! Sara.') &&
      texts['a1-r6'].body.indexOf('Bis später! Sara.') === texts['a1-r6'].body.lastIndexOf('Bis später! Sara.'));
  t('A1 a1-r6 questions match the course and bread stated in the note',
    q('a1-r6', 0).prompt.includes('أين هي الآن') && q('a1-r6', 0).key === 'في الدورة' &&
      texts['a1-r6'].body.includes('ich bin im Kurs') &&
      q('a1-r6', 1).prompt.includes('على الطاولة') && q('a1-r6', 1).key === 'خبز' &&
      texts['a1-r6'].body.includes('Brot, Käse und Obst auf dem alten Tisch'));
}

/* ---------- the mock protocol in the UI — a session the learner can open ---------- */
{
  const { window: win } = boot();
  win.DW.go('exam');
  const view = win.document.querySelector('#view');
  const texts = Array.from(view.querySelectorAll('.meta')).map(x => x.textContent);
  t('mock: the exam view states the protocol (0 full mocks of 8)',
    texts.some(x => x.indexOf('0 محاكاة كاملة من 8') >= 0) && texts.some(x => x.indexOf('لا جلسة مفتوحة') >= 0));
  t('mock: the eight planned mocks are listed with their months and purposes',
    texts.filter(x => /^محاكاة \d+ · شهر \d+/.test(x)).length === 8);
  const start = Array.from(view.querySelectorAll('button'))
    .filter(b => b.textContent.trim() === 'ابدأ محاكاة كاملة 1')[0];
  t('mock: the view offers starting mock 1', !!start);
  if (start) start.click();
  const after = Array.from(win.document.querySelector('#view').querySelectorAll('.meta')).map(x => x.textContent);
  t('mock: starting it opens a session with the four sections missing',
    after.some(x => x.indexOf('جلسة 1 مفتوحة') >= 0) &&
    after.some(x => x.indexOf('قراءة (الورقة) · سماع (الورقة) · كتابة (بنك الكتابة) · تحدّث (تسجيل)') >= 0));
  const close = Array.from(win.document.querySelector('#view').querySelectorAll('button'))
    .filter(b => b.textContent.trim() === 'أغلق جلسة المحاكاة 1 بلا محاكاة')[0];
  t('mock: an open session can be closed without claiming a mock', !!close);
  if (close) close.click();
  const back = Array.from(win.document.querySelector('#view').querySelectorAll('.meta')).map(x => x.textContent);
  t('mock: closing it leaves zero full mocks',
    back.some(x => x.indexOf('0 محاكاة كاملة من 8') >= 0) && back.some(x => x.indexOf('لا جلسة مفتوحة') >= 0));
  win.DW.go('home');
}

/* ---------- the B2 mock paper — real parts, official split, scored in the DOM ---------- */
{
  const { window: win } = boot();
  const floor = JSON.parse(fs.readFileSync(ROOT + '/tools/b2-exam-floor.json', 'utf8'));
  const bank = win.DW_EXAM_BANK && win.DW_EXAM_BANK.B2;
  const map = win.DW_EXAM && win.DW_EXAM.B2;
  const parts = (id) => (bank && bank[id] && bank[id].parts) || [];
  const itemsOf = (id) => parts(id).reduce((a, p) => a.concat(p.items), []);
  const lesen = itemsOf('lesen'), hoeren = itemsOf('hoeren');
  const AR = /[\u0600-\u06FF]/;
  t('paper: the page loads the bank (data/exam-b2.js)',
    fs.readFileSync(ROOT + '/web/index.html', 'utf8').includes('data/exam-b2.js'));
  t('paper: Lesen ' + parts('lesen').length + ' Teile · ' + lesen.length + ' items, floor ' +
    floor.lesenItems, parts('lesen').length >= floor.lesenParts && lesen.length >= floor.lesenItems);
  t('paper: Hören ' + parts('hoeren').length + ' Teile · ' + hoeren.length + ' items, floor ' +
    floor.hoerenItems, parts('hoeren').length >= floor.hoerenParts && hoeren.length >= floor.hoerenItems);
  t('paper: the official splits (9 · 6 · 6 · 6 · 3) and (10 · 6 · 6 · 8)',
    JSON.stringify(parts('lesen').map(p => p.items.length)) === JSON.stringify([9, 6, 6, 6, 3]) &&
    JSON.stringify(parts('hoeren').map(p => p.items.length)) === JSON.stringify([10, 6, 6, 8]));
  t('paper: every item has a German prompt and its key among its options',
    lesen.concat(hoeren).every(i => i.prompt && !AR.test(i.prompt) && (i.options || []).includes(i.key)));
  t('paper: declared unofficial — never presented as a Goethe paper',
    bank.official === false && !!bank.note && bank.lesen.official === false && bank.hoeren.official === false);
  t('paper: the map (DW_EXAM.B2) names the parts and items',
    !!map && map.lesenItems === lesen.length && map.hoerenItems === hoeren.length &&
    map.lesenParts === parts('lesen').length && map.hoerenParts === parts('hoeren').length);

  /* run it in the DOM: the paper must offer the first part's material and score */
  win.DW.go('exam');
  const start = Array.from(win.document.querySelectorAll('button'))
    .filter(b => b.textContent.trim() === 'قراءة 65 د')[0];
  let ran = false, sawMaterial = false;
  if (start) {
    start.click();
    const view = win.document.querySelector('#view');
    const text = view ? view.textContent : '';
    sawMaterial = text.indexOf('Zuordnung') >= 0 && text.indexOf('Marlene') >= 0 && text.indexOf('9 · 6 · 6 · 6 · 3') >= 0;
    /* answer one item: the first option button of the first item */
    const opt = Array.from(view.querySelectorAll('button')).filter(b => /^a Marlene$/.test(b.textContent.trim()))[0];
    ran = !!opt;
    if (opt) opt.click();
  }
  t('paper: the exam view runs it — part header, material and items', ran && sawMaterial);
  win.DW.go('home');
}

/* ---------- B2 timed writings — the exam's shape, against the floor ---------- */
{
  const { window: win } = boot();
  const floor = JSON.parse(fs.readFileSync(ROOT + '/tools/b2-writing-floor.json', 'utf8'));
  const bank = win.DW_WRITING_BANK && win.DW_WRITING_BANK.B2;
  const map = win.DW_WRITING && win.DW_WRITING.B2;
  const tasks = (bank && bank.tasks) || [];
  const words = s => String(s || '').trim().split(/\s+/).filter(Boolean).length;
  const AR = /[\u0600-\u06FF]/;
  t('writing: the page loads the bank (data/writing-b2.js)',
    fs.readFileSync(ROOT + '/web/index.html', 'utf8').includes('data/writing-b2.js'));
  t('writing: ' + tasks.length + ' timed writings, floor ' + floor.tasks, tasks.length >= floor.tasks);
  t('writing: ' + bank.minutes + ' minutes, floor ' + floor.minutes, bank.minutes >= floor.minutes);
  t('writing: Task 1 ≥' + bank.task1.minWords + ' words, Task 2 ≥' + bank.task2.minWords,
    bank.task1.minWords >= floor.minWords1 && bank.task2.minWords >= floor.minWords2);
  t('writing: ' + floor.pointsPerTask + ' content points per task, every task',
    tasks.every(t2 => t2.task1.points.length >= floor.pointsPerTask && t2.task2.points.length >= floor.pointsPerTask));
  t('writing: every situation and prompt is German', tasks.every(t2 =>
    t2.situation && !AR.test(t2.situation) && !AR.test(t2.task1.prompt) && !AR.test(t2.task2.prompt) &&
    words(t2.situation) <= 60));
  t('writing: the four rubric axes on every writing',
    tasks.every(t2 => JSON.stringify(t2.axes) === JSON.stringify(bank.axes)));
  t('writing: the map (DW_WRITING.B2) names what exists',
    !!map && map.timed === tasks.length && map.minutes === bank.minutes);
}

/* ---------- B2 recorded discussions — the exam's shape, against the floor ---------- */
{
  const { window: win } = boot();
  const floor = JSON.parse(fs.readFileSync(ROOT + '/tools/b2-speaking-floor.json', 'utf8'));
  const bank = win.DW_SPEAKING_BANK && win.DW_SPEAKING_BANK.B2;
  const map = win.DW_SPEAKING && win.DW_SPEAKING.B2;
  const tasks = (bank && bank.tasks) || [];
  const words = s => String(s || '').trim().split(/\s+/).filter(Boolean).length;
  const AR = /[\u0600-\u06FF]/;
  t('speaking: the page loads the bank (data/speaking-b2.js)',
    fs.readFileSync(ROOT + '/web/index.html', 'utf8').includes('data/speaking-b2.js'));
  t('speaking: ' + tasks.length + ' recorded discussions, floor ' + floor.tasks, tasks.length >= floor.tasks);
  t('speaking: ' + bank.prepMinutes + ' min preparation + ' + bank.minutes + ' min exam',
    bank.prepMinutes >= floor.prepMinutes && bank.minutes >= floor.minutes);
  t('speaking: presentation 4 min, discussion 5 min',
    tasks.every(t2 => t2.presentation.seconds >= floor.presentationSeconds &&
      t2.discussion.seconds >= floor.discussionSeconds));
  t('speaking: ' + floor.pointsPerPart + ' points in each part, every task',
    tasks.every(t2 => t2.presentation.points.length >= floor.pointsPerPart &&
      t2.discussion.points.length >= floor.pointsPerPart));
  t('speaking: the six axes on every discussion',
    tasks.every(t2 => JSON.stringify(t2.axes) === JSON.stringify(bank.axes)) && bank.axes.length === floor.axes);
  t('speaking: every situation, input, topic and prompt is German and short', tasks.every(t2 =>
    t2.situation && !AR.test(t2.situation) && words(t2.situation) <= 50 &&
    t2.input && !AR.test(t2.input) && words(t2.input) <= 45 &&
    !AR.test(t2.presentation.topic) && words(t2.presentation.topic) <= 25 &&
    !AR.test(t2.discussion.prompt) && words(t2.discussion.prompt) <= 25));
  t('speaking: the map (DW_SPEAKING.B2) names what exists',
    !!map && map.recorded === tasks.length && map.axes === bank.axes.length);
}

/* ---------- the listening ladder — R5's content ---------- */
{
  const { window: win } = boot();
  const items = (win.DW_LADDER && win.DW_LADDER.items) || [];
  const floor = JSON.parse(fs.readFileSync(ROOT + '/tools/ladder-floor.json', 'utf8'));
  const audio = items.filter(i => i.audio !== false);
  const printOnly = items.filter(i => i.audio === false);
  clickText(win, 'سماع');
  const visibleClips = [...win.document.querySelectorAll('#view button')]
    .filter(b => /^(A1|A2|B1|B2) ·/.test(b.textContent.trim()));
  t('listening screen opens from the learner home screen and lists the clips',
    visibleClips.length === items.length);
  const per = lv => audio.filter(i => i.level === lv).length;
  t('ladder: ' + audio.length + ' audio items, floor ' + floor.audio, audio.length >= floor.audio);
  ['A1', 'A2', 'B1', 'B2'].forEach(lv =>
    t('ladder: ' + lv + ' ' + per(lv) + ' audio items, floor ' + floor[lv], per(lv) >= floor[lv]));
  t('ladder: every audio item carries two questions with a key inside its options',
    audio.every(i => (i.questions || []).length === 2 &&
      i.questions.every(q => (q.options || []).includes(q.key))));
  t('ladder: the dialect item stays print-only and out of R5 (' + printOnly.length + ')',
    printOnly.length > 0 && printOnly.every(i => i.r5 === false));
  t('ladder: the audio warning is present', !!(win.DW_LADDER.voice && win.DW_LADDER.not));
}

/* ---------- learner routes and evidence feedback ---------- */
{
  const { window: win } = boot();
  clickText(win, 'سماع');
  const audioButtons = [...win.document.querySelectorAll('#view button')]
    .filter(b => /^A1 ·/.test(b.textContent.trim()));
  t('the home listening control opens its ladder screen', audioButtons.length === 8);
  audioButtons[0].click();
  win.SpeechSynthesisUtterance = function (text) { this.text = text; };
  win.speechSynthesis = { cancel() {}, speak(u) { if (u.onend) u.onend(); } };
  const play = [...win.document.querySelectorAll('#view button')].find(b => b.textContent.trim() === 'تشغيل مرة');
  play.click();
  t('a listening clip can be played only once per attempt', play.disabled === true);
  [...win.document.querySelectorAll('#view button')].find(b => b.textContent.trim() === 'neun').click();
  [...win.document.querySelectorAll('#view button')].find(b => b.textContent.trim() === 'acht').click();
  clickText(win, 'سلّم');
  t('listening feedback shows the correct answer', /الإجابة الصحيحة: acht/.test(win.document.querySelector('#view').textContent));
}
{
  const { window: win } = boot();
  clickText(win, 'قراءة');
  const level = win.document.querySelector('#view select[aria-label="مستوى القراءة"]');
  let graded = [...win.document.querySelectorAll('#view button')].filter(b => /^A1 ·/.test(b.textContent.trim()));
  t('reading opens at the learner level instead of listing all 136 texts', !!level && level.value === 'A1' && graded.length === 20);
  level.value = 'B2';
  level.dispatchEvent(new win.Event('change'));
  graded = [...win.document.querySelectorAll('#view button')].filter(b => /^B2 ·/.test(b.textContent.trim()));
  t('the reading list can be filtered to B2', graded.length === 26);
  level.value = 'A1';
  level.dispatchEvent(new win.Event('change'));
  clickText(win, 'A1 · بطاقة الفندق');
  [...win.document.querySelectorAll('#view button')].find(b => b.textContent.trim() === 'Anna').click();
  [...win.document.querySelectorAll('#view button')].find(b => b.textContent.trim() === 'ثلاث').click();
  clickText(win, 'سلّم السؤالين');
  t('reading feedback names the right answer after a miss', /الإجابة الصحيحة: Sara/.test(win.document.querySelector('#view').textContent));
}
{
  const { window: win } = boot();
  const rows = win.DW_LIBRARY.A1;
  const byId = id => rows.find(x => x.id === id);
  t('A1 café question asks a value stated by the source', /Kaffee kostet zwei Euro/.test(byId('a1-r2').body) && byId('a1-r2').questions[1].key === '2 يورو');
  t('A1 party question follows the Saturday invitation', /Am Samstag mache ich eine laute Party/.test(byId('a1-r3').body) && byId('a1-r3').questions[1].key === 'السبت');
  t('A1 recipe questions follow the first action and evening drink', byId('a1-r8').questions[0].key === 'الخضار' && byId('a1-r8').questions[1].key === 'الماء');
  t('A1 bed-rest question is answered explicitly', /Bleiben Sie zwei Tage/.test(byId('a1-r10').body) && byId('a1-r10').questions[1].key === 'يومان');
}

/* ---------- B2 — the workshops, route (C)'s two measures ---------- */
{
  const { window: win } = boot();
  const L = win.DW_LESSONS;
  const rows = win.DW_SYLLABUS.lessons.filter(l => l.level === 'B2');
  const ported = rows.filter(r => (L[r.id].wortschatz || []).length > 0);
  let itemsOk = true, countOk = true, materialOk = true, stepsOk = true, tricksOk = true,
      sumsOk = true, noDupOk = true;
  const allTricks = [];
  ported.forEach(row => {
    const lesson = L[row.id];
    const wl = lesson.wortschatz || [];
    const mat = lesson.material || [];
    if (wl.length !== 40) countOk = false;
    if (mat.length !== 50) materialOk = false;
    /* route (C): the authored 40 + the 50 material words are exactly the 90
       the map row declares — never 89, never 91. */
    if (row.words && wl.length + mat.length !== row.words.receptive) sumsOk = false;
    if (lesson.schritte.length < 24 || lesson.schritte.length > 36) stepsOk = false;
    if (lesson.schritte.filter(s => s.wortschatz).length !== 10) stepsOk = false;
    wl.forEach(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam', 'blank'].forEach(k => {
      if (!it[k]) itemsOk = false;
    }));
    /* a material word must not be one of the workshop's own 40 headwords:
       the row would then pay twice for one word. */
    const cores = new Set(wl.map(it => String(it.de).replace(/^(der|die|das)\s+/i, '').split(/\s+/).pop().toLowerCase()));
    mat.forEach(w => {
      const core = String(w).replace(/^(der|die|das)\s+/i, '').split(/\s+/).pop().toLowerCase();
      if (cores.has(core)) noDupOk = false;
    });
    const tr = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe.trick);
    if (tr.length !== 3 || new Set(tr).size !== tr.length) tricksOk = false;
    allTricks.push.apply(allTricks, tr);
  });
  t('B2: all ' + rows.length + ' workshops carry the lexical layer', ported.length === rows.length && rows.length === 20);
  t('B2: every authored item is complete to the last field, blank included', itemsOk);
  t('B2: every workshop carries exactly its 40 authored words', countOk);
  t('B2: every workshop carries exactly its 50 verified material words', materialOk);
  t('B2: authored 40 + material 50 equals the row\'s declared 90', sumsOk);
  t('B2: a material word is never one of the same workshop\'s headwords', noDupOk);
  t('B2: every workshop stays inside the 24–36 step window with 10 Wortschatz steps', stepsOk);
  t('B2: ' + allTricks.length + ' Merkhilfen across the level, all distinct', new Set(allTricks).size === allTricks.length);
  t('B2: every workshop carries three distinct Merkhilfen', tricksOk);

  const cov = (win.DW_COVERAGE || []).find(c => c.level === 'B2');
  t('coverage table published: B2 ' + cov.items + '/' + cov.declared + ' authored (' +
    Math.round(cov.ratio * 100) + '%) · material ' + cov.material + ' (' + Math.round(cov.materialRatio * 100) + '%)',
    cov && cov.materialRatio >= 0.8 && cov.material === cov.declared);
}

/* ---------- §13.9 reaches the learner: chunks per level, false friends, pronunciation ---------- */
{
  const { window: win } = boot();
  const syl = win.DW_SYLLABUS;
  const at = level => { win.DW.session.S.gates.G1 = { state: 'passed' }; win.DW.session.S.gates.G2 = { state: 'passed' }; win.DW.session.S.gates.G3 = { state: level === 'B2' ? 'open' : 'locked' }; };
  const texts = () => win.document.querySelector('#view').textContent;

  at('B1');
  win.DW.go('chunks');
  t('map: the chunk drill states the learner\'s level (B1, not A1)',
    texts().indexOf('مئة قالب لكل مستوى، وهذه قوالب B1') >= 0);
  const b1 = texts().indexOf(syl.chunks.B1[0].ar) >= 0;
  const a1 = texts().indexOf(syl.chunks.A1[0].ar) >= 0;
  t('map: it drills the B1 list (' + syl.chunks.B1[0].ar.slice(0, 24) + '…) and not A1\'s', b1 && !a1);

  win.DW.go('falsefriends');
  const ff = texts();
  t('map: the false-friend screen lists B1 items (' + (syl.falseFriends.B1[0].de) + ' ≠ ' + syl.falseFriends.B1[0].other + ')',
    ff.indexOf(syl.falseFriends.B1[0].de + ' ≠ ' + syl.falseFriends.B1[0].other) >= 0 && ff.indexOf('أصدقاء كذّابون · B1') >= 0);
  t('map: every listed false friend carries its Arabic interference line',
    syl.falseFriends.B1.every(f => ff.indexOf(f.ar) >= 0));

  win.DW.go('pronunciation');
  const pr = texts();
  t('map: the pronunciation screen lists the §13.7 items of the level (' + syl.pronunciation.B1.length + ')',
    pr.indexOf('النطق · B1') >= 0 && syl.pronunciation.B1.every(x => pr.indexOf(x) >= 0));

  at('B2');
  win.DW.go('chunks');
  const b2 = texts();
  t('map: at B2 the drill switches to the B2 list (' + syl.chunks.B2[0].ar.slice(0, 24) + '…)',
    b2.indexOf(syl.chunks.B2[0].ar) >= 0 && b2.indexOf(syl.chunks.B1[0].ar) < 0);

  /* the composer names the same level in the block's reason */
  win.DW.session.S.learner.weeklyHours = 10;
  const day = win.DW.adaptive.compose(win.DW.session.S, win.DW.today());
  const ch = (day.blocks || []).filter(b => b.track === 'chunks')[0];
  t('map: the session composer\'s chunk block names B2 too',
    !!ch && ch.reason.indexOf('قالب B2') >= 0, ch && ch.reason);
  win.DW.go('home');
}

/* ---------- the productive column: the step's words and a hit chunk enter the queue ---------- */
{
  const { window: win } = boot();
  const id = 'a1-u1-l1';
  const lesson = win.DW_LESSONS[id];
  const order = win.DW_SYLLABUS.lessons.map(l => l.id);
  const before = order.slice(0, order.indexOf(id));
  const S = win.DW.session.S;
  S.progress = before.map(x => ({ lessonId: x, state: 'completed' }));
  S.capabilities = before.map(x => ({ id: 'cap.' + x + '.core', evidence: 'E1', lastActive: '2026-10-02', history: [] }));
  const steps = lesson.schritte;
  const wStep = steps.filter(st => st.wortschatz && st.wortschatz.length && st.frage && st.frage.art !== 'flashcard')[0]
    || steps.filter(st => st.wortschatz && st.wortschatz.length)[0];
  const p = { lessonId: id, state: 'in_progress', completedSteps: steps.slice(0, steps.indexOf(wStep)).map(x => x.id), lastStepId: wStep.id };
  S.progress = S.progress.filter(x => x.lessonId !== id).concat([p]);
  win.go('lesson');
  /* answer the step for real, so the path under test is the app's, not the test's */
  const f = wStep.frage;
  let answered = false;
  if (f && f.art === 'cloze') {
    win.document.querySelector('.inp').value = f.antworten[0];
    const ok = [...win.document.querySelectorAll('button')].find(x => x.textContent.trim() === 'تحقّق');
    if (ok) { ok.click(); answered = !!win.document.querySelector('.layer.good'); }
  } else if (f && f.art === 'mcq') {
    const right = (f.optionen || []).find(o => o.id === f.richtig);
    const b = [...win.document.querySelectorAll('button')].find(x => right && x.textContent.trim() === right.text);
    if (b) b.click();
    const ok = [...win.document.querySelectorAll('button')].find(x => x.textContent.trim() === 'تحقّق');
    if (ok) { ok.click(); answered = !!win.document.querySelector('.layer.good'); }
  }
  t('productive: the Wortschatz step was answered correctly through the lesson screen', answered, 'step ' + wStep.id + ' art ' + (f && f.art));
  const cards = win.DW.session.S.srs.cards || [];
  const words = wStep.wortschatz.map(x => x.de);
  t('productive: the whole Wortschatz step entered the queue (' + words.length + ' words)',
    words.every(d => cards.some(c => c.de === d)));
  const one = cards.filter(c => c.de === words[0])[0];
  t('productive: each card carries its own receptive and productive schedules',
    !!one && !!one.receptive && !!one.productive && one.receptive.due !== one.productive.due && one.level === lesson.level);
  t('productive: the flashcard word is not the only card of the step',
    cards.filter(c => words.indexOf(c.de) >= 0).length === words.length);
  win.go('home');
}
{
  const { window: win } = boot();
  const S = win.DW.session.S;
  S.gates.G1 = { state: 'passed' }; S.gates.G2 = { state: 'passed' };
  win.DW.go('chunks');
  const chunk = win.DW_SYLLABUS.chunks.B1[0];
  const input = win.document.querySelector('#view input');
  input.value = chunk.de;
  const btn = [...win.document.querySelectorAll('#view button')].find(b => b.textContent.trim() === 'سجّل');
  btn.click();
  const cards = win.DW.session.S.srs.cards || [];
  const card = cards.filter(c => c.de === chunk.de)[0];
  t('productive: a chunk hit inside the time becomes a chunk card of its level',
    !!card && card.chunk === true && card.level === 'B1' && !!card.productive);
  t('productive: the chunk log records the level with the attempt',
    (S.chunksLog || []).some(x => x.de === chunk.de && x.level === 'B1' && x.counted === true));
  win.DW.go('home');
}

/* ---------- §12.5: the mastery tasks are on a screen, and the essay lands in the portfolio ---------- */
{
  const { window: win } = boot();
  win.DW.go('mastery');
  const view = win.document.querySelector('#view');
  const text = () => win.document.querySelector('#view').textContent;
  t('mastery: the screen names §12.5 and counts the six evidences',
    text().indexOf('الشواهد الستة لجهوزية §12.5') >= 0 && text().indexOf('0 / 6') >= 0);
  t('mastery: all five tasks are listed',
    win.DW.mastery.list().every(t2 => text().indexOf(t2.title) >= 0));
  t('mastery: the six evidences are listed with their names',
    ['مناقشة 20 دقيقة', 'مقال 400 كلمة', 'بودكاست بلا نص', 'النوفيلة: ستة فصول + ملخّص', 'رسالة رسمية', 'شرح قاعدة بلا ملاحظات']
      .every(n => text().indexOf(n) >= 0));

  const areas = Array.from(win.document.querySelectorAll('#view textarea.write'));
  t('mastery: the two written tasks open a writing area', areas.length === 2);
  const essay = areas[0];
  const block = 'Der Verkehr in der Stadt wächst, weil die Bevölkerung wächst. Ich finde, dass ein kostenloser Bus sinnvoll ist, obwohl die Kosten hoch sind. Ein Argument dafür ist der Platz: Wer den Bus nimmt, braucht kein Auto. ';
  essay.value = new Array(12).fill(block).join('');
  const panel = essay.parentNode;
  const counter = () => panel.textContent;
  essay.dispatchEvent(new win.Event('input'));
  t('mastery: the word count and the clause types are live (400+ words)',
    /الكلمات: 432 \/ الحد 400/.test(counter()) && /أنواع الجمل التابعة: 3/.test(counter()));
  const points = Array.from(panel.querySelectorAll('button')).filter(b => b.textContent.indexOf('غطّيتها: ') === 0);
  t('mastery: the essay lists its four content points', points.length === 4);
  points.forEach(b => b.click());
  const save = Array.from(panel.querySelectorAll('button')).filter(b => b.textContent.trim() === 'سجّل الكتابة في المحفظة')[0];
  t('mastery: the essay can be written into the portfolio', !!save);
  if (save) save.click();
  const rec = (win.DW.session.S.portfolio.texts || []).filter(x => x.tag === 'essay')[0];
  t('mastery: the record carries tag, words, content points, clause types and the checker count',
    !!rec && rec.words === 432 && rec.contentPoints === 4 && rec.clauseTypes === 3 && typeof rec.errors === 'number' && typeof rec.minutes === 'number');
  t('mastery: the gate reads the recorded essay as an evidence',
    win.DW.exam.masteryEvidence(win.DW.session.S).essay400 === true);
  t('mastery: the task list marks the essay done, and the screen counts one evidence',
    win.DW.mastery.state(win.DW.session.S.portfolio).filter(x => x.kind === 'essay')[0].done === true &&
    win.document.querySelector('#view').textContent.indexOf('1 / 6') >= 0);
  win.DW.go('home');
}

/* ---------- §7 R6: the material column has a path into the queue ---------- */
{
  const { window: win } = boot();
  const text = () => win.document.querySelector('#view').textContent;
  win.DW.go('harvest');
  t('harvest: before a lesson is done, the screen names the lessons that carry material',
    text().indexOf('أنهِ درسًا يحمل مادة') >= 0 && text().indexOf('R6') >= 0);

  const S = win.DW.session.S;
  const all = Object.keys(win.DW_LESSONS).filter(id => (win.DW_LESSONS[id].material || []).length);
  t('harvest: the material column exists somewhere (B2 workshops)', all.length >= 20);
  S.progress = (S.progress || []).concat([{ lessonId: 'b2-w01', state: 'completed', completedSteps: [] }]);
  win.DW.go('harvest');
  const lesson = win.DW_LESSONS['b2-w01'];
  t('harvest: the completed lesson appears with its full word count (0 / ' + lesson.material.length + ')',
    text().indexOf(lesson.title.ar) >= 0 && text().indexOf('0 / ' + lesson.material.length + ' محصودة') >= 0);
  const chips = () => [...win.document.querySelectorAll('#view button')].filter(b => b.getAttribute('dir') === 'ltr');
  t('harvest: every material word of the lesson is a chip', chips().length >= lesson.material.length);
  t('harvest: the chips carry the German words themselves',
    lesson.material.slice(0, 5).every(w => chips().some(b => b.textContent.trim() === w)));

  const target = lesson.material[0];
  chips().filter(b => b.textContent.trim() === target)[0].click();
  const input = win.document.querySelector('#view input.meaning');
  t('harvest: a chip opens the meaning field, and the word is shown with its sentence', !!input &&
    text().indexOf(target) >= 0);
  const saveBtn = [...win.document.querySelectorAll('#view button')].filter(b => b.textContent.trim() === 'احفظ البطاقة')[0];
  t('harvest: the card can be saved', !!saveBtn);
  saveBtn.click();
  t('harvest: an empty meaning does not write a card',
    !(win.DW.session.S.srs.cards || []).some(c => c.material));
  input.value = 'المعنى الذي كتبه المتعلم';
  saveBtn.click();
  const card = (win.DW.session.S.srs.cards || []).filter(c => c.material)[0];
  t('harvest: the card carries the word, the learner\'s meaning, the lesson level and its source',
    !!card && card.de === target && card.ar === 'المعنى الذي كتبه المتعلم' &&
    card.level === 'B2' && card.source === 'b2-w01');
  t('harvest: the card is a normal non-chunk card at box 0 in both directions',
    !!card && card.chunk === false && card.receptive.box === 0 && card.productive.box === 0);
  const gates = win.DW.session.S.gates || {};
  gates.G1 = { state: 'passed' }; gates.G2 = { state: 'passed' }; gates.G3 = { state: 'open' };
  win.DW.session.S.gates = gates;
  const r6 = win.DW.adaptive.measure(win.DW.session.S);
  t('harvest: R6 does not count it yet, at B2\'s real target — the box, not the harvest, is the measure',
    r6.R6.productive === 0 && r6.R6Detail.target === 2600 && r6.R6Detail.chunks === 0);
  t('harvest: the counter moves to 1 / ' + lesson.material.length + ' and the chip is done',
    win.document.querySelector('#view').textContent.indexOf('1 / ' + lesson.material.length + ' محصودة') >= 0 &&
    [...win.document.querySelectorAll('#view button')].filter(b => b.getAttribute('dir') === 'ltr' && b.disabled).length >= 1);
  t('harvest: the example sentence carrying the word is found in the lesson\'s own German',
    typeof card.example === 'string' && card.example.toLowerCase().indexOf('schlüsselwort') >= 0,
    card.example);
  win.DW.go('home');
}

/* ---------- §12.4/§12.5: one session, four modules, and the gate sees a full mock ---------- */
{
  const { window: win } = boot();
  const S = win.DW.session.S;
  const src = fs.readFileSync(ROOT + '/web/app.js', 'utf8');
  const calls = (src.match(/storeModule\(/g) || []).length;
  const papers = ['قراءة 65 د', 'سماع 40 د'].every(run => src.indexOf(run) >= 0);
  t('mock: each module reaches the recorder from its own screen (four call sites + two paper runners)',
    calls === 5 /* four calls and the definition */ && papers &&
    src.indexOf("storeModule('schreiben'") >= 0 && src.indexOf("storeModule('sprechen'") >= 0,
    'calls ' + calls);

  win.DW.go('exam');
  const start = Array.from(win.document.querySelectorAll('button'))
    .filter(b => b.textContent.trim() === 'ابدأ محاكاة كاملة 1')[0];
  t('mock: the exam view opens a full-mock session', !!start);
  if (start) start.click();
  win.DW.storeModule('lesen', 80, false);
  win.DW.storeModule('hoeren', 72, false);
  const third = win.DW.session.S.exam.mockSession;
  t('mock: three modules leave the session open with one missing',
    !!third && third.modules.schreiben == null && third.modules.sprechen == null);
  win.DW.storeModule('schreiben', 66, false);
  win.DW.storeModule('sprechen', 70, false);
  t('mock: the fourth module closes the session and writes one full record',
    win.DW.session.S.exam.mockSession === null &&
    (win.DW.session.S.exam.mocks || []).filter(m => m.full).length === 1 &&
    (win.DW.session.S.exam.mocks || [])[0].modules.length === 4);
  win.DW.go('exam');
  const texts = () => Array.from(win.document.querySelectorAll('#view *')).map(n => n.textContent);
  t('mock: the view counts one full mock and no open session',
    texts().some(x => x.indexOf('1 محاكاة كاملة من 8') >= 0) &&
    texts().some(x => x.indexOf('جلسة 1 مفتوحة') < 0));
  const gate = win.DW.exam.readiness(win.DW.session.S);
  t('mock: the gate reads the full mock as its module condition',
    gate.modulesOk === true && gate.evidence && Object.keys(gate.evidence).length === 6);
  t('mock: a module under the bar would keep it closed',
    win.DW.exam.readiness({ exam: { mocks: [{ full: true, modules: [
      { id: 'lesen', score: 80 }, { id: 'hoeren', score: 80 }, { id: 'schreiben', score: 64 }, { id: 'sprechen', score: 80 }] }] },
      errorLedger: [] }).modulesOk === false);
  t('mock: 61 in the last section is under the 65 bar — the run above proves the gate reads scores, not attendance',
    win.DW.exam.readiness({ exam: { mocks: [{ full: true, modules: [
      { id: 'lesen', score: 80 }, { id: 'hoeren', score: 72 }, { id: 'schreiben', score: 66 }, { id: 'sprechen', score: 61 }] }] },
      errorLedger: [] }).modulesOk === false);
  win.DW.go('home');
}

/* ---------- the offline cache lists what the shell loads ---------- */

/* The production rule is explicit: every web change raises the app's memory so the
   browser is not stuck on the old version. That only works if the precache list is
   complete — a file the shell loads but the cache never lists is fetched once and
   then frozen at whatever version the learner happened to install. Both halves are
   checked here: the shell's own script list, and that the cache name is versioned. */
{
  const sw = fs.readFileSync(ROOT + '/web/sw.js', 'utf8');
  const index = fs.readFileSync(ROOT + '/web/index.html', 'utf8');
  const listed = new Set([...sw.matchAll(/'([^']+)'/g)].map(m => m[1])
    .filter(x => x.endsWith('.js') || x.endsWith('.css') || x.endsWith('.png') ||
                 x.endsWith('.mp3') || x.endsWith('.webmanifest') || x.endsWith('.svg') ||
                 x === './' || x === 'index.html'));
  const shell = [...index.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
  const missing = shell.filter(f => !listed.has(f));
  t('cache: every script the shell loads is in the offline cache list',
    missing.length === 0, missing.join(' '));
  const dead = [...listed].filter(f => f !== './' && !fs.existsSync(ROOT + '/web/' + f));
  t('cache: every listed asset exists on disk', dead.length === 0, dead.join(' '));
  const m = sw.match(/const CACHE = 'deutschweg-v(\d+)'/);
  t('cache: the app memory is versioned (deutschweg-v<n>)', !!m && Number(m[1]) >= 10);
}

/* ---------- a failing run never lowers a floor ---------- */

/* The floor files are ratchets. Every measure may raise its own with --write-floor,
   but a run that failed a gate must not write: otherwise one red run silently
   rewrites the reference to the broken state and the next green run proves nothing.
   This is not theory — it happened in this repository. The check reads the eight
   measures and insists on the refusal guard ahead of the write. */
{
  const measures = fs.readdirSync(ROOT + '/tools').filter(f => /^measure-.*\.js$/.test(f));
  const unguarded = measures.filter(f => {
    const src = fs.readFileSync(ROOT + '/tools/' + f, 'utf8');
    const i = src.indexOf('if (WRITE) {');
    if (i < 0) return true;
    return !/if \(fail\) \{[\s\S]{0,160}?refused:/.test(src.slice(i, i + 400));
  });
  t('floors: every measure refuses to write a floor from a failing run (' + measures.length + ' measures)',
    measures.length >= 8 && unguarded.length === 0, unguarded.join(' '));
}

console.log('\n' + pass + ' passed, ' + fail + ' failed\n');
process.exit(fail ? 1 : 0);

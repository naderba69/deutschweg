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

/* ---------- audited A1 accusative-pronoun lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u1-l4'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = ['mich', 'dich', 'ihn', 'sie', 'es', 'uns', 'euch'];
  t('Corpus lesson a1-u1-l4 teaches all seven accusative pronouns through complete sentence contrasts',
    lesson.title.de === 'Pronomen im Akkusativ' && row.title.de === lesson.title.de &&
      row.title.ar === lesson.title.ar && targets.every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      ['Siehst du mich?', 'Ich sehe dich.', 'Ich sehe ihn.', 'Ich sehe sie.']
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      byWord.es.ex === 'Das Geschenk ist hier. Ich habe es.' && byWord.uns.ex === 'Besuchst du uns?' &&
      byWord.euch.ex === 'Ich rufe euch an.');
  t('Corpus lesson a1-u1-l4 removes invented and falsely rejected forms and gives accurate lexical guidance',
    !JSON.stringify(lesson).includes('ihra') &&
      byWord.abholen.ar === 'يأتي ليأخذ · يصطحب' &&
      byWord.bezahlen.err === 'Ich bezahle zu dem Essen.' && byWord.bezahlen.why.includes('Ich bezahle für das Essen') &&
      byWord.sehen.err === 'Sehen du mich?' && byWord.morgen.err === 'Ich morgen besuche dich.' &&
      tricks[0].wie.includes('ich → mich') && tricks[0].wie.includes('ihr → euch') && !tricks[0].wie.includes('←'));
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const order = lesson.schritte.find(s => s.phase === 'Übungen' && s.frage && s.frage.art === 'wortstellung');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u1-l4 aligns writing, speaking, summary, order and homework with the seven pronouns',
    JSON.stringify(writing.frage.points) === JSON.stringify(targets) && writing.frage.minWords === 21 &&
      targets.every(x => writing.frage.prompt.includes(x) && speaking.erklaerung.includes(x) &&
        summary.zeigt.de.includes(x) && homework.zeigt.de.includes(x)) &&
      summary.recap === 'سبعة ضمائر نصب في جمل كاملة' &&
      order.frage.correct.join(' ') === 'Ich sehe dich.' && order.frage.finite === 'sehe' &&
      order.frage.correct.filter(x => /[.!?]$/.test(x)).length === 1);
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  t('Corpus lesson a1-u1-l4 makes 80 percent four of five with five directly supported pronoun checks',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u1-l4\.s\d+$/.test(s.frage.prereq || '')) &&
      orderCheck.frage.correct.join(' ') === 'Ich sehe ihn.' && orderCheck.frage.finite === 'sehe' &&
      clozeCheck.frage.zeigt === 'Ich rufe ____ an.' && clozeCheck.frage.antworten.includes('euch') &&
      checks[4].frage.optionen.some(o => o.text === 'Besuchst du uns?'));
}

/* ---------- audited A1 possessive-article lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u1-l5'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u1-l5 teaches bounded possessive forms through complete nominative, accusative and formal sentences',
    lesson.title.de === 'Possessivartikel' && lesson.title.ar === 'أدوات الملكية' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      ['mein', 'meine', 'meinen', 'Ihr', 'Ihre'].every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      ['Das ist mein Bruder.', 'Das ist meine Schwester.', 'Ich sehe meinen Bruder.', 'Wie ist Ihre Nummer?']
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  t('Corpus lesson a1-u1-l5 distinguishes possessor stems, noun endings and formal capitalization without rejecting grammatical lowercase ihre',
    byWord['mein Vater'].pl === 'meine Väter' && byWord['meine Mutter'].pl === 'meine Mütter' &&
      byWord['ihre Tochter'].ex === 'Ich kenne ihre Tochter.' &&
      byWord['Ihre Nummer'].err === 'Wie ist Sie Nummer?' &&
      byWord['Ihre Nummer'].why.includes('ihre بحرف صغير') && byWord['Ihre Nummer'].why.includes('ليست خطأً نحويًا') &&
      tricks[0].trick === 'الجذر للمالك والنهاية للاسم' && tricks[0].wie.includes('ich → mein') &&
      tricks[1].wie === 'Das ist mein Bruder. → Ich sehe meinen Bruder.' && !tricks[1].wie.includes('←') &&
      tricks[2].warum.includes('ihre الصغيرة'));
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const order = lesson.schritte.find(s => s.phase === 'Übungen' && s.frage && s.frage.art === 'wortstellung');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  const targets = ['mein', 'meine', 'meinen', 'Ihr', 'Ihre'];
  t('Corpus lesson a1-u1-l5 aligns imitation, writing, speaking, summary, one-sentence order and homework with the target forms',
    lesson.schritte.find(s => s.id === 's15').zeigt.de === 'Das ist meine Schwester.' &&
      imitate.frage.nearMiss.meinen && writing.frage.familie === 'deklination' &&
      writing.frage.points.length === 6 && writing.frage.minWords === 24 &&
      targets.every(x => writing.frage.prompt.includes(x) && speaking.erklaerung.includes(x) &&
        summary.zeigt.de.includes(x) && homework.zeigt.de.includes(x)) &&
      order.frage.frage === 'رتّب الكلمات لتكوين جملة صحيحة.' &&
      order.frage.correct.join(' ') === 'Ich sehe meinen Bruder.' && order.frage.finite === 'sehe' &&
      order.frage.correct.filter(x => /[.!?]$/.test(x)).length === 1 &&
      summary.recap === 'المالك أولًا ثم الجنس والحالة');
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  t('Corpus lesson a1-u1-l5 makes 80 percent four of five with five directly supported checks covering all target forms',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u1-l5\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === 'Wie ist Ihre Nummer?') &&
      clozeCheck.frage.zeigt === '____ Freundin kommt aus Berlin.' && clozeCheck.frage.nearMiss.Mein &&
      orderCheck.frage.frage === 'رتّب الكلمات لتكوين جملة صحيحة.' &&
      orderCheck.frage.correct.join(' ') === 'Ihr Termin ist um zehn.' && orderCheck.frage.finite === 'ist' &&
      checks[3].frage.optionen.some(o => o.text === 'Das ist mein Bruder.') &&
      checks[4].frage.optionen.some(o => o.text === 'Ich sehe meinen Bruder.'));
}

/* ---------- audited A1 modal-verb lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u1-l6'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u1-l6 states a measurable kann, kannst, muss and yes/no-question goal through complete sentences',
    lesson.title.de === 'können und müssen' && lesson.title.ar === 'أستطيع ويجب عليّ' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      ['ich kann', 'du kannst', 'ich muss', 'Kannst du'].every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      ['Ich kann schwimmen.', 'Du kannst bleiben.', 'Ich muss lernen.', 'Sie muss heute arbeiten.']
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  t('Corpus lesson a1-u1-l6 teaches one conjugated modal plus a bare final infinitive without false bicycle, computer or genug claims',
    byWord.können.err === 'Ich kann schwimme.' && byWord.müssen.err === 'Ich muss lerne.' &&
      byWord.mitkommen.fam === 'konjugation' &&
      byWord['das Fahrrad'].why.includes('mit dem Fahrrad') &&
      byWord['der Computer'].why.includes('auf dem Computer') &&
      byWord.genug.err === 'Ich habe genug nicht Zeit.' &&
      tricks[0].trick === 'الفعل الناقص يحمل التصريف والمصدر يقف في الآخر' &&
      tricks[0].warum.includes('الفعل الثاني فيبقى مصدرًا') &&
      tricks[1].warum.includes('القدرة والواجب والإذن') &&
      tricks[2].trick.includes('الفعل المصرف أولًا'));
  const model = lesson.schritte.find(s => s.id === 's15');
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const transform = lesson.schritte.find(s => s.id === 's17');
  const cloze = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u1-l6 aligns model, imitation, transformation, cloze, writing, speaking, summary, order and homework',
    model.zeigt.de === 'Ich kann schwimmen.' && imitate.frage.nearMiss.kannst &&
      transform.hinweise[1].includes('muss') && transform.hinweise[1].includes('lernen') &&
      cloze.frage.zeigt === 'Ich muss eine E-Mail ____.' && cloze.frage.nearMiss.schreibe &&
      writing.frage.familie === 'konjugation' && writing.frage.points.length === 6 && writing.frage.minWords === 20 &&
      ['ich kann', 'du kannst', 'ich muss', 'kannst du'].every(x =>
        writing.frage.promptDe.toLowerCase().includes(x) && speaking.erklaerung.toLowerCase().includes(x) &&
        summary.zeigt.de.toLowerCase().includes(x) && homework.zeigt.de.toLowerCase().includes(x)) &&
      order.frage.frage === 'رتّب الكلمات لتكوين جملة صحيحة.' &&
      order.frage.correct.join(' ') === 'Ich muss heute lernen.' && order.frage.finite === 'muss' &&
      order.frage.correct.filter(x => /[.!?]$/.test(x)).length === 1);
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u1-l6 makes 80 percent four of five with five directly supported checks of modal form and sentence frame',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u1-l6\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === 'Sie muss heute arbeiten.') &&
      clozeCheck.frage.zeigt === 'Ich muss eine E-Mail ____.' && clozeCheck.frage.nearMiss.schreibe &&
      orderCheck.frage.correct.join(' ') === 'Kannst du mitkommen?' &&
      orderCheck.frage.finite === 'Kannst' && orderCheck.frage.verbFirst === true &&
      checks[3].frage.optionen.some(o => o.text === 'Ich kann schwimmen.') &&
      checks[4].frage.optionen.some(o => o.text === 'Ich muss lernen.'));
}

/* ---------- audited A1 wishes and polite-requests lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u2-l1'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u2-l1 states a measurable will, willst, möchte and formal Möchten Sie goal through complete sentences',
    lesson.title.de === 'wollen und möchten' && lesson.title.ar === 'أريد وأود' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      ['will/willst', 'möchte/Möchten Sie'].every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      ['Ich will zu Hause bleiben.', 'Ich möchte zahlen.', 'Du willst heute kochen.', 'Möchten Sie etwas trinken?']
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  t('Corpus lesson a1-u2-l1 qualifies register and preserves valid gern, lieber, home-direction and quantity contrasts',
    byWord.möchten.pl === 'möchte · möchtest; mochte = Präteritum von mögen' &&
      byWord.gern.why.includes('Gern trinke ich Kaffee.') &&
      byWord.lieber.why.includes('Lieber trinke ich Tee.') &&
      byWord['nach Hause'].err === 'Ich will in Hause gehen.' &&
      byWord['nach Hause'].why.includes('zu Hause') &&
      byWord.lecker.why.includes('ist sehr lecker') && byWord.lecker.why.includes('schmeckt sehr lecker') &&
      tricks[0].warum.includes('will فصيغة نحوية') && tricks[0].warum.includes('möchte عادةً ألطف') &&
      tricks[1].wie.includes('Du möchtest zahlen.') && !tricks[1].warum.includes('möchtenst') &&
      tricks[2].trick.includes('لا نضع von'));
  const model = lesson.schritte.find(s => s.id === 's15');
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const transform = lesson.schritte.find(s => s.id === 's17');
  const cloze = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  const targets = ['ich will', 'du willst', 'ich möchte', 'möchten sie'];
  t('Corpus lesson a1-u2-l1 aligns model, imitation, transformation, cloze, writing, speaking, summary, order and homework',
    model.zeigt.de === 'Ich will zu Hause bleiben.' && imitate.frage.nearMiss.willst &&
      transform.hinweise[1].includes('Ich möchte zahlen') &&
      cloze.frage.zeigt === 'Wir möchten ____.' && cloze.frage.nearMiss.bestellt &&
      writing.frage.familie === 'register' && writing.frage.points.length === 6 && writing.frage.minWords === 24 &&
      targets.every(x => writing.frage.promptDe.toLowerCase().includes(x) &&
        speaking.erklaerung.toLowerCase().includes(x) && summary.zeigt.de.toLowerCase().includes(x) &&
        homework.zeigt.de.toLowerCase().includes(x)) &&
      order.frage.frage === 'رتّب الكلمات لتكوين جملة صحيحة.' &&
      order.frage.correct.join(' ') === 'Ich möchte einen Kaffee.' && order.frage.finite === 'möchte' &&
      order.frage.correct.filter(x => /[.!?]$/.test(x)).length === 1);
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u2-l1 makes 80 percent four of five while testing forms, sentence frame and polite register directly',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u2-l1\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.misconceptionFamilies.a === 'konjugation' &&
      clozeCheck.frage.zeigt === 'Wir möchten ____.' && clozeCheck.frage.nearMiss.bestellt &&
      orderCheck.frage.frage !== 'rtb' && orderCheck.frage.correct.join(' ') === 'Du willst heute kochen.' &&
      orderCheck.frage.finite === 'willst' && orderCheck.frage.verbFirst === false &&
      checks[3].frage.optionen.some(o => o.text === 'Ich will zu Hause bleiben.') &&
      checks[4].frage.frage.includes('بأدب') && checks[4].frage.optionen.some(o => o.text === 'Ich möchte zahlen.') &&
      checks[4].frage.feedback.a.includes('جملة نحوية'));
}

/* ---------- audited A1 separable-verbs lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u2-l2'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u2-l2 states a bounded main-clause and modal-infinitive goal through complete sentences',
    lesson.title.de === 'Trennbare Verben' && lesson.title.ar === 'الأفعال المنفصلة' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      ['aufstehen', 'anrufen', 'einkaufen', 'ungetrennten Infinitiv'].every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      ['Ich stehe um sieben auf.', 'Du rufst mich an.', 'Um acht stehe ich auf.', 'Ich muss um sieben aufstehen.']
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  t('Corpus lesson a1-u2-l2 teaches the finite stem, final prefix and joined infinitive without broad prefix or L1 claims',
    byWord.vorbeikommen.err === 'Kommst du morgen vorbeikommst?' &&
      byWord.vorbeikommen.why.includes('بلا فعل مصرف ثانٍ') &&
      byWord.einkaufen.why.includes('هذه الجملة الرئيسية') && byWord.aufhören.why.includes('هذه الجملة الرئيسية') &&
      tricks[0].wie === 'aufstehen → Ich stehe um sieben auf.' && !tricks[0].wie.includes('←') &&
      tricks[0].warum.includes('الموضع الثاني') && tricks[0].warum.includes('في النهاية') &&
      tricks[1].trick === 'احفظ كل فعل منفصل مع جملة نموذجية' &&
      tricks[1].wie.includes('Ich rufe dich an.') && tricks[1].wie.includes('Wir kaufen ein.') &&
      tricks[2].trick.includes('الوقت أولًا') && tricks[2].warum.includes('الفعل المصرف ثانيًا'));
  const model = lesson.schritte.find(s => s.id === 's15');
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const transform = lesson.schritte.find(s => s.id === 's17');
  const cloze = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  const targets = ['aufstehen', 'anrufen', 'einkaufen'];
  t('Corpus lesson a1-u2-l2 aligns model, imitation, transformation, cloze, writing, speaking, summary, order and homework',
    model.zeigt.de === 'Ich stehe um sieben auf.' && imitate.frage.nearMiss.aufstehe &&
      transform.hinweise[1].includes('rufst') && transform.hinweise[1].includes('an') &&
      cloze.frage.zeigt === 'Wir kaufen im Supermarkt ____.' && cloze.frage.nearMiss.einkaufen &&
      !cloze.frage.antworten.includes('einkaufen') && !win.DW.renderers.judgeCloze(cloze.frage, 'einkaufen').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      writing.frage.familie === 'wortstellung' && writing.frage.points.length === 6 && writing.frage.minWords === 28 &&
      ['Ich stehe um sieben auf.', 'Du rufst mich an.', 'Wir kaufen im Supermarkt ein.', 'Ich muss um sieben aufstehen.']
        .every(x => writing.frage.promptDe.includes(x)) &&
      targets.every(x => writing.erklaerung.includes(x) && speaking.erklaerung.includes(x) &&
        homework.zeigt.de.includes(x)) &&
      summary.zeigt.de.includes('Ich stehe auf.') && summary.zeigt.de.includes('Ich muss aufstehen.') &&
      order.frage.frage === 'رتّب الكلمات لتكوين جملة صحيحة.' &&
      order.frage.correct.join(' ') === 'Um acht stehe ich auf.' && order.frage.finite === 'stehe' &&
      order.frage.rightBracket.join(' ') === 'auf.' && order.frage.fields.rsk.join(' ') === 'auf.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Um', 'acht', 'stehe', 'auf.', 'ich']).failed === 2 &&
      order.frage.correct.filter(x => /[.!?]$/.test(x)).length === 1);
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u2-l2 makes 80 percent four of five across separation, joined infinitive, V2 and final-prefix checks',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u2-l2\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === 'Ich muss um sieben aufstehen.') &&
      clozeCheck.frage.zeigt === 'Wir kaufen im Supermarkt ____.' && clozeCheck.frage.nearMiss.einkaufen &&
      !clozeCheck.frage.antworten.includes('einkaufen') &&
      orderCheck.frage.frage !== 'rtb' && orderCheck.frage.correct.join(' ') === 'Du rufst mich an.' &&
      orderCheck.frage.finite === 'rufst' && orderCheck.frage.verbFirst === false &&
      orderCheck.frage.rightBracket.join(' ') === 'an.' && orderCheck.frage.fields.rsk.join(' ') === 'an.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Ich stehe um sieben auf.') &&
      checks[4].frage.optionen.some(o => o.text === 'Um acht stehe ich auf.'));
}

/* ---------- audited A1 clock-time lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u2-l3'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u2-l3 states a bounded clock-time and appointment goal through complete German sentences',
    lesson.title.de === 'Uhrzeit' && lesson.title.ar === 'الساعة' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      ['3:00', '3:15', '3:30', '3:45', 'erfragst den Kursbeginn', 'antwortest mit einer Uhrzeit']
        .every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      ['Es ist drei Uhr.', 'Es ist Viertel nach drei.', 'Es ist halb vier.', 'Um wie viel Uhr beginnt der Kurs?']
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u2-l3 distinguishes Uhr, duration, quarters, half and appointment um without English or broad L1 shortcuts',
    lesson.wortschatz.length === 28 && byWord['die Uhr'].why.includes('Stunde') &&
      byWord['die Uhrzeit'].ex === 'Ich notiere die Uhrzeit.' &&
      byWord.warten.err === 'Ich warte zehn Minute.' && byWord.warten.fam === 'plural' &&
      byWord.um.ex === 'Der Kurs beginnt um acht Uhr.' &&
      tricks[0].trick === 'Uhr لوقت الساعة وStunde للمدة' &&
      tricks[1].trick === 'بعد halb نذكر الساعة القادمة' && tricks[1].warum.includes('vier في المثالين') &&
      tricks[2].trick === 'موعد الساعة المحدد يأتي مع um' && tricks[2].warum.includes('Um wie viel Uhr?') &&
      !/(^|\W)(hour|quarter|past)(\W|$)/i.test(lessonText) &&
      !lessonText.includes('العربية تستعمل') && !lessonText.includes('الوقت يأخذ um دائمًا'));
  const model = lesson.schritte.find(s => s.id === 's15');
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const transform = lesson.schritte.find(s => s.id === 's17');
  const cloze = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u2-l3 aligns model, strict cloze, six-part writing, speaking, summary, multiword-question order and homework',
    model.zeigt.de === 'Es ist drei Uhr.' && imitate.frage.nearMiss.Stunde &&
      transform.zeigt.de === 'Es ist halb vier.' && transform.hinweise[1].includes('3:30') &&
      cloze.frage.zeigt === 'Es ist ____ vor vier.' && cloze.frage.antworten.length === 1 &&
      cloze.frage.antworten[0] === 'Viertel' && cloze.frage.nearMiss.halb &&
      !win.DW.renderers.judgeCloze(cloze.frage, 'halb').ok &&
      lesson.schritte.find(s => s.id === 's13').frage.nearMiss.Daten &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      writing.frage.points.length === 6 && writing.frage.minWords === 28 &&
      ['drei Uhr', 'Viertel nach drei', 'halb vier', 'Viertel vor vier',
        'Um wie viel Uhr beginnt der Kurs?', 'Der Kurs beginnt um acht Uhr.']
        .every(x => writing.frage.promptDe.includes(x)) &&
      ['3:00', '3:15', '3:30', '3:45'].every(x => speaking.erklaerung.includes(x) && summary.zeigt.de.includes(x)) &&
      homework.zeigt.de.includes('Um wie viel Uhr beginnt der Kurs?') &&
      order.frage.frage !== 'rtb' && order.frage.correct.join(' ') === 'Um wie viel Uhr beginnt der Kurs?' &&
      order.frage.finite === 'beginnt' && order.frage.fields.vorfeld.join(' ') === 'Um wie viel Uhr' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Um', 'wie', 'viel', 'Uhr', 'der', 'Kurs?', 'beginnt']).failed === 1);
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  const halfBad = checks[4].frage.optionen.find(o => o.text === 'Es ist halb drei.');
  t('Corpus lesson a1-u2-l3 makes 80 percent four of five measurable across appointment, quarter-to, quarter-past, full-hour and 3:30 forms',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u2-l3\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === 'Um wie viel Uhr beginnt der Kurs?') &&
      clozeCheck.frage.zeigt === 'Es ist ____ vor vier.' && clozeCheck.frage.antworten.join(' ') === 'Viertel' &&
      orderCheck.frage.correct.join(' ') === 'Es ist Viertel nach drei.' && orderCheck.frage.finite === 'ist' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Es ist drei Uhr.') &&
      checks[4].frage.frage === 'أي صيغة تعني 3:30؟' &&
      checks[4].frage.optionen.some(o => o.text === 'Es ist halb vier.') &&
      halfBad && checks[4].frage.feedback[halfBad.id].includes('2:30'));
}

/* ---------- audited A1 temporal-prepositions lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u2-l4'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u2-l4 states five bounded temporal frames and teaches them through complete German sentences',
    lesson.title.de === 'Temporale Präpositionen' && lesson.title.ar === 'حروف الجر الزمنية' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      ['um acht Uhr', 'am Montag', 'am Abend', 'im Mai', 'im Sommer', 'vollständigen Sätzen']
        .every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      ['Der Kurs beginnt um acht Uhr.', 'Der Kurs beginnt am Montag.',
        'Der Kurs beginnt im Mai.', 'Am Abend lerne ich Deutsch.']
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u2-l4 keeps weekdays, months, seasons, day parts and temporal exceptions accurate without broad shortcuts',
    lesson.wortschatz.length === 28 && byWord['der Samstag'].pl === 'die Samstage' &&
      byWord['der Samstag'].why.includes('Sonnabend') &&
      byWord['der Sonntag'].ex === 'Am Sonntag ist die Bank geschlossen.' &&
      byWord['der Mittag'].ex === 'Zu Mittag esse ich in der Kantine.' &&
      byWord['die Nacht'].ex === 'In der Nacht schlafe ich.' &&
      byWord.geöffnet.ex === 'Das Geschäft ist am Montag geöffnet.' &&
      byWord.frei.ar.includes('في إجازة') && byWord.regnen.ar === 'يهطل المطر' &&
      tricks[0].trick === 'اربط كل إطار زمني بحرفه' &&
      tricks[1].trick === 'احفظ am مع اليوم وجزء اليوم' &&
      tricks[2].trick === 'احفظ im مع الشهر والفصل' &&
      !lessonText.includes('قاعدة واحدة تجمع ثلاثة حروف') &&
      !lessonText.includes('من يفكّك am') && !lessonText.includes('العربية'));
  const model = lesson.schritte.find(s => s.id === 's15');
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const transform = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u2-l4 aligns strict cloze, multiword temporal order, five-part writing, speaking, summary and homework',
    model.zeigt.de === 'Der Kurs beginnt am Montag um acht Uhr.' &&
      imitate.frage.antworten.join(' ') === 'um' && imitate.frage.nearMiss.am &&
      transform.zeigt.de === 'Im Mai beginnt der Kurs.' && transform.hinweise[1].includes('im Mai') &&
      drill.frage.zeigt === '____ Mai ist es warm.' && drill.frage.antworten.join(' ') === 'Im' &&
      drill.frage.nearMiss.Am && !win.DW.renderers.judgeCloze(drill.frage, 'Am').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === 'Am Montag beginnt der Kurs um acht Uhr.' &&
      order.frage.finite === 'beginnt' && order.frage.fields.vorfeld.join(' ') === 'Am Montag' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Am', 'Montag', 'der', 'Kurs', 'beginnt', 'um', 'acht', 'Uhr.']).failed === 1 &&
      writing.frage.points.length === 5 && writing.frage.minWords === 24 &&
      ['um acht Uhr', 'am Montag', 'am Abend', 'im Mai', 'im Sommer'].every(x =>
        [writing.frage.promptDe, speaking.erklaerung, summary.zeigt.de, homework.zeigt.de]
          .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u2-l4 makes 80 percent four of five measurable across evening, month, season, weekday and clock time',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u2-l4\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === 'Am Abend lerne ich Deutsch.') &&
      clozeCheck.frage.zeigt === '____ Mai ist es warm.' &&
      clozeCheck.frage.antworten.join(' ') === 'Im' && clozeCheck.frage.nearMiss.Am &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Am').ok &&
      orderCheck.frage.correct.join(' ') === 'Im Sommer ist es warm.' && orderCheck.frage.finite === 'ist' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Im Sommer' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Im', 'Sommer', 'es', 'ist', 'warm.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Am Montag habe ich frei.') &&
      checks[4].frage.optionen.some(o => o.text === 'Der Kurs beginnt um acht Uhr.'));
}

/* ---------- audited A1 local-prepositions lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u2-l5'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u2-l5 states five bounded static-location frames and teaches them through complete German sentences',
    lesson.title.de === 'Lokale Präpositionen' && lesson.title.ar === 'حروف الجر المكانية' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      ['Ortsangaben', 'in der Stadt', 'an der Wand', 'auf dem Tisch',
        'neben der Bank', 'neben dem Bett', 'vollständigen Sätzen']
        .every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      ['Ich wohne in der Stadt.', 'Das Bild hängt an der Wand.',
        'Das Buch liegt auf dem Tisch.', 'Die Apotheke ist neben der Bank.']
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u2-l5 keeps static location, dative forms and spatial vocabulary accurate without English or a broad Wo shortcut',
    lesson.wortschatz.length === 28 &&
      byWord['zwischen den Stühlen'].err === 'Der Tisch steht zwischen die Stühle.' &&
      byWord['die Straße'].err === 'Die Straße ist zweihundert Meter lange.' &&
      byWord['die Straße'].fam === 'deklination' && byWord['die Post'].ar === 'مكتب البريد' &&
      byWord.hängen.ar === 'يكون معلّقًا' && byWord.stehen.ar.includes('يكون موضوعًا') &&
      byWord['der Kühlschrank'].why.includes('im هو in dem') &&
      tricks[0].trick === 'اربط Wo? بالفعل الساكن والعبارة الكاملة' &&
      tricks[0].warum.includes('لا نعمم الداتيف') &&
      tricks[1].trick.includes('den للجمع') && tricks[2].trick === 'احفظ الفعل مع موضعه' &&
      !/(^|\W)next(\W|$)/i.test(lessonText) &&
      !lessonText.includes('على سطحها') && !lessonText.includes('بالداتيف دائمًا'));
  const model = lesson.schritte.find(s => s.id === 's15');
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const transform = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u2-l5 aligns strict dative cloze, multiword local order, five-part writing, speaking, summary and homework',
    model.zeigt.de === 'Das Buch liegt auf dem Tisch.' &&
      imitate.frage.antworten.join(' ') === 'in' && imitate.frage.nearMiss.auf &&
      transform.zeigt.de === 'Das Bild hängt an der Wand.' && transform.hinweise[1].includes('an der Wand') &&
      drill.frage.zeigt === 'Das Buch liegt auf ____ Tisch.' &&
      drill.frage.antworten.join(' ') === 'dem' && drill.frage.nearMiss.den &&
      !win.DW.renderers.judgeCloze(drill.frage, 'den').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === 'Auf dem Tisch liegt das Buch.' &&
      order.frage.finite === 'liegt' && order.frage.fields.vorfeld.join(' ') === 'Auf dem Tisch' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Auf', 'dem', 'Tisch', 'das', 'Buch.', 'liegt']).failed === 1 &&
      writing.frage.points.length === 5 && writing.frage.minWords === 27 &&
      ['in der Stadt', 'an der Wand', 'auf dem Tisch', 'neben der Bank', 'neben dem Bett'].every(x =>
        [writing.frage.promptDe, speaking.erklaerung, summary.zeigt.de, homework.zeigt.de]
          .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u2-l5 makes 80 percent four of five measurable across neben der, auf dem, an der, in der and neben dem',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u2-l5\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === 'Die Apotheke ist neben der Bank.') &&
      clozeCheck.frage.zeigt === 'Das Buch liegt auf ____ Tisch.' &&
      clozeCheck.frage.antworten.join(' ') === 'dem' && clozeCheck.frage.nearMiss.den &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'den').ok &&
      orderCheck.frage.correct.join(' ') === 'An der Wand hängt das Bild.' &&
      orderCheck.frage.finite === 'hängt' && orderCheck.frage.fields.vorfeld.join(' ') === 'An der Wand' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['An', 'der', 'Wand', 'das', 'Bild.', 'hängt']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Ich wohne in der Stadt.') &&
      checks[4].frage.optionen.some(o => o.text === 'Die Lampe steht neben dem Bett.'));
}

/* ---------- audited A1 plural lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u2-l6'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u2-l6 states five bounded plural patterns and teaches them through complete German sentences',
    lesson.title.de === 'Plural' && lesson.title.ar === 'الجمع' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      ['fünf Pluralmuster', 'Tage', 'Kinder', 'Mütter', 'Autos', 'Tomaten', 'vollständigen Sätzen']
        .every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      ['Der Kurs dauert zwei Tage.', 'Zwei Kinder spielen im Garten.',
        'Zwei Mütter warten vor der Schule.', 'Vor dem Haus stehen zwei Autos.']
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u2-l6 keeps all 28 plural pairs and Arabic meanings accurate without predictive ending or umlaut shortcuts',
    lesson.wortschatz.length === 28 && byWord['der Rücken'].ex === 'Drei Rücken sind auf dem Foto zu sehen.' &&
      byWord['der Rücken'].err === 'Drei Rücken ist auf dem Foto zu sehen.' &&
      byWord['der Rücken'].why.includes('بالشكل نفسه') && byWord['der Rücken'].why.includes('drei مع sind') &&
      byWord['das Hemd'].err === 'Die Hemd sind blau.' && byWord['das Hemd'].fam === 'plural' &&
      byWord['der Rock'].ar === 'التنورة' && byWord['das T-Shirt'].ar === 'القميص ذو الأكمام القصيرة' &&
      byWord['die Kartoffel'].ar === 'حبة البطاطا' && byWord['die Tomate'].ar === 'حبة الطماطم' &&
      byWord['die Banane'].ar === 'الموزة' && byWord['die Orange'].ar === 'البرتقالة' &&
      byWord['der Hund'].err === 'Die Hund sind schwarz und bellen laut.' &&
      tricks[0].trick === 'صنّف النهاية ولا تخمّن بها' && tricks[0].wie.includes('-n/-en') &&
      tricks[0].warum.includes('لا تختار جمع كلمة جديدة') &&
      tricks[1].warum.includes('لا تفترض أن كل كلمة') &&
      tricks[2].trick === 'لاحظ -n و-en مع أمثلة محددة' &&
      !lessonText.includes('خمس نهايات تكفي') && !lessonText.includes('المؤنث يأخذ -n أو -en'));
  const model = lesson.schritte.find(s => s.id === 's15');
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const transform = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  const targets = ['Tage', 'Kinder', 'Mütter', 'Autos', 'Tomaten'];
  t('Corpus lesson a1-u2-l6 aligns strict plural clozes, multiword order, five-part writing, speaking, summary and homework',
    model.zeigt.de === 'Zwei Kinder spielen im Garten.' &&
      imitate.frage.antworten.join(' ') === 'Tage' && imitate.frage.nearMiss.Tags &&
      transform.zeigt.de === 'Zwei Mütter warten vor der Schule.' && transform.hinweise[1].includes('Mütter') &&
      drill.frage.zeigt === 'Zwei ____ liegen auf dem Tisch.' &&
      drill.frage.antworten.join(' ') === 'Tomaten' && drill.frage.nearMiss.Tomate &&
      !win.DW.renderers.judgeCloze(drill.frage, 'Tomate').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === 'Vor dem Haus stehen zwei Autos.' &&
      order.frage.finite === 'stehen' && order.frage.fields.vorfeld.join(' ') === 'Vor dem Haus' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Vor', 'dem', 'Haus', 'zwei', 'Autos.', 'stehen']).failed === 1 &&
      writing.frage.points.join(' ') === targets.join(' ') && writing.frage.minWords === 28 &&
      targets.every(x => [writing.frage.promptDe, speaking.erklaerung, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u2-l6 makes 80 percent four of five measurable across Autos, Tomaten, Kinder and Tage, Häuser and Mütter',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u2-l6\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === 'Vor dem Haus stehen zwei Autos.') &&
      clozeCheck.frage.zeigt === 'Zwei ____ liegen auf dem Tisch.' &&
      clozeCheck.frage.antworten.join(' ') === 'Tomaten' && clozeCheck.frage.nearMiss.Tomate &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Tomate').ok &&
      orderCheck.frage.correct.join(' ') === 'Zwei Kinder bleiben zwei Tage in der Stadt.' &&
      orderCheck.frage.finite === 'bleiben' && orderCheck.frage.fields.vorfeld.join(' ') === 'Zwei Kinder' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Zwei', 'Kinder', 'zwei', 'Tage', 'bleiben', 'in', 'der', 'Stadt.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Zwei Häuser sind alt.') &&
      checks[4].frage.optionen.some(o => o.text === 'Zwei Mütter warten vor der Schule.'));
}

/* ---------- audited A1 restaurant-food lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u3-l1'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u3-l1 states five bounded restaurant frames and teaches them through complete German utterances',
    lesson.title.de === 'Essen' && lesson.title.ar === 'الطعام' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      ['fünf vollständige', 'Ich möchte bestellen', 'die Speisekarte', 'den Salat',
        'einen Kaffee ohne Zucker', 'die Rechnung']
        .every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      ['Ich möchte bestellen.', 'Ich möchte die Speisekarte, bitte.',
        'Ich nehme den Salat.', 'Ich möchte einen Kaffee ohne Zucker, bitte.']
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u3-l1 keeps all 28 food entries, Arabic meanings, gender and quantity guidance accurate without English or ending shortcuts',
    lesson.wortschatz.length === 28 &&
      byWord['die Speisekarte'].ex === 'Ich möchte die Speisekarte, bitte.' &&
      byWord['das Hähnchen'].why.includes('لاحقة تصغير') &&
      byWord['der Salat'].blank === 'den' && byWord['der Salat'].fam === 'kasus' &&
      byWord['das Salz'].err === 'Ich brauche zweihundert Salz Gramm.' &&
      byWord['der Zucker'].err === 'Ich brauche ein Zucker Pfund.' &&
      byWord['die Wurst'].ar === 'السجق' && byWord['die Birne'].ar === 'حبة الكمثرى' &&
      byWord['die Zitrone'].ar === 'حبة الليمون' && byWord['die Zwiebel'].ar === 'حبة البصل' &&
      byWord['das Müsli'].pl === 'die Müslis' && byWord['der Joghurt'].ar === 'الزبادي' &&
      byWord['der Joghurt'].why.includes('الصيغة الإقليمية das Joghurt') &&
      byWord.frühstücken.why.includes('نحذف -en') && byWord.frühstücken.why.includes('نضيف -e') &&
      tricks[0].trick === 'احفظ الأداة مع اسم الطعام' && tricks[0].warum.includes('لا تكشف نهاية الاسم') &&
      tricks[1].wie === 'der Löffel · die Gabel · das Messer.' &&
      tricks[2].wie.includes('das Abendessen') && tricks[2].warum.includes('الجزء الأخير') &&
      !/(^|\W)(Bill|Menu)(\W|$)/.test(lessonText) && !lessonText.includes('will خشن') &&
      !lessonText.includes('الجنس يتبع النهاية'));
  const model = lesson.schritte.find(s => s.id === 's15');
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const transform = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  const targets = ['bestellen', 'Speisekarte', 'Salat', 'Kaffee ohne Zucker', 'Rechnung'];
  t('Corpus lesson a1-u3-l1 aligns strict restaurant clozes, one-sentence order, five-part writing, speaking, summary and homework',
    model.zeigt.de === 'Ich möchte die Speisekarte, bitte.' &&
      imitate.frage.antworten.join(' ') === 'möchte' && imitate.frage.nearMiss.bestelle &&
      transform.zeigt.de === 'Ich möchte einen Kaffee ohne Zucker, bitte.' &&
      transform.hinweise[1].includes('ohne Zucker') &&
      drill.frage.zeigt === 'Ich nehme ____ Salat.' &&
      drill.frage.antworten.join(' ') === 'den' && drill.frage.nearMiss.der &&
      !win.DW.renderers.judgeCloze(drill.frage, 'der').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === 'Ich nehme den Salat.' &&
      order.frage.finite === 'nehme' && order.frage.fields.vorfeld.join(' ') === 'Ich' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Ich', 'den', 'Salat.', 'nehme']).failed === 1 &&
      writing.frage.points.join(' ') === 'bestellen Speisekarte den Salat Kaffee ohne Zucker Rechnung' &&
      writing.frage.minWords === 24 &&
      targets.every(x => [writing.frage.promptDe, speaking.erklaerung, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u3-l1 makes 80 percent four of five measurable across coffee, salad, bill, menu and ordering',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u3-l1\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === 'Ich möchte einen Kaffee ohne Zucker, bitte.') &&
      clozeCheck.frage.zeigt === 'Ich nehme ____ Salat.' &&
      clozeCheck.frage.antworten.join(' ') === 'den' && clozeCheck.frage.nearMiss.der &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'der').ok &&
      orderCheck.frage.correct.join(' ') === 'Ich möchte die Rechnung, bitte.' &&
      orderCheck.frage.finite === 'möchte' && orderCheck.frage.fields.vorfeld.join(' ') === 'Ich' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Ich', 'die', 'Rechnung,', 'möchte', 'bitte.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Ich möchte die Speisekarte, bitte.') &&
      checks[4].frage.optionen.some(o => o.text === 'Ich möchte bestellen.'));
}

/* ---------- audited A1 shopping lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u3-l2'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u3-l2 states five bounded shopping utterances and teaches them through complete German sentences',
    lesson.title.de === 'Einkaufen' && lesson.title.ar === 'التسوق' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      ['fünf vollständige Äußerungen', 'Was kostet das?', 'Das macht zehn Euro.',
        'Das ist mir zu teuer.', 'Haben Sie das in Größe M?', 'Darf ich das anprobieren?']
        .every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      ['Was kostet das?', 'Das macht zehn Euro.',
        'Haben Sie das in Größe M?', 'Das ist mir zu teuer.']
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u3-l2 keeps all 28 shopping entries, Arabic meanings, price forms and regional plural guidance accurate without English shortcuts',
    lesson.wortschatz.length === 28 &&
      byWord['das Geschäft'].ex === 'Im Geschäft frage ich: Was kostet das?' &&
      byWord['der Markt'].err === 'Ich kaufe auf den Markt ein Kilo Tomaten.' &&
      byWord['der Preis'].ex === 'Auf dem Preisschild steht der Preis.' &&
      byWord['der Euro'].why.includes('zehn Euro') &&
      byWord['der Cent'].pl.includes('die Cent') && byWord['der Cent'].pl.includes('die Cents') &&
      byWord['der Cent'].why.includes('غالبًا fünfzig Cent') && byWord['der Cent'].why.includes('Cents أيضًا') &&
      byWord['die Kasse'].ar === 'صندوق الدفع' && byWord['die Kasse'].ex.includes('Wechselgeld') &&
      byWord['die Tüte'].ex.includes('Tragetasche') && byWord['die Größe'].ex === 'Haben Sie das in Größe M?' &&
      byWord.anprobieren.ar === 'يجرّب (ملابس)' && byWord.passen.err === 'Die Hose passt mich.' &&
      byWord['der Einkaufswagen'].err === 'Das Einkaufswagen ist voll.' &&
      byWord['der Gürtel'].why.includes('وجمعه die Gürtel') &&
      tricks[0].wie === 'Was + kostet + das? = Was kostet das?' &&
      tricks[1].wie === 'in Größe M · Kleidergröße M.' &&
      tricks[2].wie.includes('Das ist mir zu teuer') && tricks[2].warum.includes('mich') &&
      !['What ', ' too ', ' big', ' size ', ' ten Euro'].some(x => lessonText.includes(x)) &&
      !lessonText.includes('Cent لا تُجمع بـ s'));
  const model = lesson.schritte.find(s => s.id === 's15');
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const transform = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  const targets = ['kostet', 'zehn Euro', 'zu teuer', 'Größe M', 'anprobieren'];
  t('Corpus lesson a1-u3-l2 aligns strict shopping clozes, one-question order, five-part writing, speaking, summary and homework',
    model.zeigt.de === 'Was kostet das?' &&
      imitate.frage.antworten.join(' ') === 'kostet' && imitate.frage.nearMiss.kosten &&
      transform.zeigt.de === 'Darf ich das anprobieren?' && transform.hinweise[1].includes('anprobieren') &&
      drill.frage.zeigt === 'Haben Sie das in ____ M?' &&
      drill.frage.antworten.join(' ') === 'Größe' && drill.frage.nearMiss.Größen &&
      !win.DW.renderers.judgeCloze(drill.frage, 'Größen').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === 'Was kostet das?' &&
      order.frage.finite === 'kostet' && order.frage.fields.vorfeld.join(' ') === 'Was' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Was', 'das?', 'kostet']).failed === 1 &&
      writing.frage.points.join(' ') === 'kostet zehn Euro mir zu teuer Größe M anprobieren' &&
      writing.frage.minWords === 23 &&
      targets.every(x => [writing.frage.promptDe, speaking.erklaerung, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u3-l2 makes 80 percent four of five measurable across price, total, cost, size and trying on',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u3-l2\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === 'Das ist mir zu teuer.') &&
      clozeCheck.frage.zeigt === 'Haben Sie das in ____ M?' &&
      clozeCheck.frage.antworten.join(' ') === 'Größe' && clozeCheck.frage.nearMiss.Größen &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Größen').ok &&
      orderCheck.frage.correct.join(' ') === 'Darf ich das anprobieren?' &&
      orderCheck.frage.finite === 'Darf' && orderCheck.frage.verbFirst === true &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Ich', 'Darf', 'das', 'anprobieren?']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Im Geschäft frage ich: Was kostet das?') &&
      checks[4].frage.optionen.some(o => o.text === 'Das macht zehn Euro.'));
}

/* ---------- audited A1 daily-routine lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u3-l3'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u3-l3 states five bounded daily-routine sentences and teaches each as complete German',
    lesson.title.de === 'Tagesablauf' && lesson.title.ar === 'الروتين اليومي' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      ['fünf vollständigen Sätzen', 'Zuerst stehe ich um sieben Uhr auf.',
        'Dann putze ich die Zähne.', 'Danach fahre ich mit der U-Bahn zur Arbeit.',
        'Nach der Arbeit ruhe ich mich aus.', 'Zum Schluss gehe ich schlafen.']
        .every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      ['Zuerst stehe ich um sieben Uhr auf.', 'Dann putze ich die Zähne.',
        'Zum Schluss gehe ich schlafen.', 'Danach fahre ich mit der U-Bahn zur Arbeit.']
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u3-l3 keeps all 28 routine entries, reflexive forms, standard variants and Arabic meanings accurate without English shortcuts',
    lesson.wortschatz.length === 28 &&
      byWord.zuerst.ex === 'Zuerst stehe ich um sieben Uhr auf.' &&
      byWord.dann.err === 'Dann ich putze die Zähne.' &&
      byWord.losgehen.pl === 'geht los · ging los' && byWord.losgehen.blank === 'los' &&
      byWord['die Zähne putzen'].pl === 'putzt die Zähne · putzte die Zähne' &&
      byWord['sich freuen'].why.includes('sich auf etwas freuen') &&
      byWord['die U-Bahn'].ex === 'Danach fahre ich mit der U-Bahn zur Arbeit.' &&
      byWord['zu Fuß'].ar === 'سيرًا على الأقدام' &&
      byWord['sich setzen'].err === 'Ich setzt mich an den Tisch.' &&
      byWord['schlafen gehen'].pl === 'geht schlafen · ging schlafen' &&
      byWord.sauber.err === 'Mein Zimmer ist sauberes.' &&
      byWord.backen.pl === 'bäckt/backt · backte/buk' &&
      byWord['das Radio'].why.includes('إقليميًا صيغة der Radio') &&
      tricks[0].wie === 'zuerst → dann → danach → zum Schluss.' &&
      tricks[1].wie === 'Um acht | gehe | ich | los.' &&
      tricks[2].wie === 'Nach der Arbeit | ruhe | ich mich | aus.' &&
      !['First stehe', 'first stehe', 'After das', 'after das',
        'At the', 'at the', '"rtb"'].some(x => lessonText.includes(x)));
  const model = lesson.schritte.find(s => s.id === 's15');
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const transform = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  const markers = ['Zuerst', 'Dann', 'Danach', 'Nach der Arbeit', 'Zum Schluss'];
  t('Corpus lesson a1-u3-l3 aligns strict routine clozes, one-sentence order, five-part writing, speaking, summary and homework',
    model.zeigt.de === 'Zuerst stehe ich um sieben Uhr auf. Dann putze ich die Zähne.' &&
      imitate.frage.antworten.join(' ') === 'Zuerst' && imitate.frage.nearMiss.Zuerste &&
      transform.zeigt.de === 'Danach fahre ich mit der U-Bahn zur Arbeit.' &&
      transform.hinweise[1].includes('der U-Bahn') &&
      drill.frage.zeigt === 'Nach der Arbeit ____ ich mich aus.' &&
      drill.frage.antworten.join(' ') === 'ruhe' && drill.frage.nearMiss.ruhen &&
      !win.DW.renderers.judgeCloze(drill.frage, 'ruhen').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === 'Zuerst stehe ich um sieben Uhr auf.' &&
      order.frage.finite === 'stehe' && order.frage.fields.vorfeld.join(' ') === 'Zuerst' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Zuerst', 'ich', 'stehe', 'um', 'sieben', 'Uhr', 'auf.']).failed === 1 &&
      writing.frage.points.join(' | ') === 'Zuerst | Dann | Danach | Nach der Arbeit | Zum Schluss' &&
      writing.frage.minWords === 31 &&
      markers.every(x => [writing.frage.promptDe, speaking.erklaerung, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u3-l3 makes 80 percent four of five measurable across the five ordered routine stages',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u3-l3\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === 'Danach fahre ich mit der U-Bahn zur Arbeit.') &&
      clozeCheck.frage.zeigt === 'Nach der Arbeit ____ ich mich aus.' &&
      clozeCheck.frage.antworten.join(' ') === 'ruhe' && clozeCheck.frage.nearMiss.ruhen &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'ruhen').ok &&
      orderCheck.frage.correct.join(' ') === 'Zum Schluss gehe ich schlafen.' &&
      orderCheck.frage.finite === 'gehe' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Zum Schluss' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Zum', 'Schluss', 'ich', 'gehe', 'schlafen.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Zuerst stehe ich um sieben Uhr auf.') &&
      checks[4].frage.optionen.some(o => o.text === 'Dann putze ich die Zähne.'));
}

/* ---------- audited A1 Perfekt-with-haben lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u3-l4'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u3-l4 states five bounded Perfekt sentences and teaches regular, strong and -ieren participles in complete German',
    lesson.title.de === 'Perfekt mit haben' && lesson.title.ar === 'الماضي مع haben' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      ['fünf vollständige Sätze', 'Ich habe die Hausaufgabe gemacht.',
        'Ich habe Deutsch gelernt.', 'Ich habe den Film gesehen.',
        'Ich habe lange telefoniert.', 'Hast du die Musik gehört?']
        .every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      ['Ich habe die Hausaufgabe gemacht.', 'Ich habe Deutsch gelernt.',
        'Ich habe den Film gesehen.', 'Ich habe lange telefoniert.']
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u3-l4 keeps all 28 Perfekt entries, Arabic meanings, inseparable prefixes and accepted strong forms accurate without false auxiliary rules',
    lesson.wortschatz.length === 28 &&
      byWord.haben.ex === 'Ich habe die Hausaufgabe gemacht.' &&
      byWord.haben.why.includes('machen يصوغ Perfekt مع haben') &&
      !lessonText.includes('أفعال الحركة وحدها تأخذ sein') &&
      byWord.gemacht.err === 'Ich habe die Hausaufgabe machen.' &&
      byWord.gesehen.err === 'Ich habe den Film geseht.' &&
      byWord.gehört.ex === 'Hast du die Musik gehört?' &&
      byWord.getrunken.err === 'Ich habe Tee getrinkt.' &&
      byWord.telefoniert.err === 'Ich habe lange getelefoniert.' &&
      byWord.probiert.err === 'Ich habe den Kuchen geprobiert.' &&
      byWord.besucht.why.includes('be- تمنع ge-') &&
      byWord.erzählt.why.includes('er- تمنع ge-') &&
      byWord['letzte Woche'].why.includes('بالمفرد') &&
      byWord['noch nie'].ar === 'لم ... قط' &&
      byWord.zuletzt.ex === 'Zuletzt habe ich ferngesehen.' &&
      tricks[0].wie === 'Ich | habe | die Hausaufgabe | gemacht.' &&
      tricks[1].wie.includes('telefonieren → telefoniert') &&
      tricks[2].wie.includes('trinken → getrunken') && tricks[2].warum.includes('بعضها') &&
      !['proben? لا', '"rtb"'].some(x => lessonText.includes(x)));
  const model = lesson.schritte.find(s => s.id === 's15');
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const transform = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  const targets = ['Hausaufgabe gemacht', 'Deutsch gelernt', 'Film gesehen',
    'lange telefoniert', 'Musik gehört'];
  t('Corpus lesson a1-u3-l4 aligns strict participle clozes, one-sentence order, five-part writing, speaking, summary and homework',
    model.zeigt.de === 'Ich habe die Hausaufgabe gemacht.' &&
      imitate.frage.antworten.join(' ') === 'gemacht' && imitate.frage.nearMiss.machen &&
      transform.zeigt.de === 'Hast du die Musik gehört?' && transform.hinweise[1].includes('gehört') &&
      drill.frage.zeigt === 'Ich habe den Film ____.' &&
      drill.frage.antworten.join(' ') === 'gesehen' && drill.frage.nearMiss.geseht &&
      !win.DW.renderers.judgeCloze(drill.frage, 'geseht').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === 'Ich habe die Hausaufgabe gemacht.' &&
      order.frage.finite === 'habe' && order.frage.fields.vorfeld.join(' ') === 'Ich' &&
      order.frage.fields.rsk.join(' ') === 'gemacht.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Ich', 'die', 'Hausaufgabe', 'habe', 'gemacht.']).failed === 1 &&
      writing.frage.points.join(' | ') ===
        'Hausaufgabe gemacht | Deutsch gelernt | Film gesehen | lange telefoniert | Musik gehört' &&
      writing.frage.minWords === 25 &&
      targets.every(x => [writing.frage.promptDe, speaking.erklaerung, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u3-l4 makes 80 percent four of five measurable across gemacht, gelernt, gesehen, telefoniert and gehört',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u3-l4\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === 'Ich habe lange telefoniert.') &&
      clozeCheck.frage.zeigt === 'Ich habe den Film ____.' &&
      clozeCheck.frage.antworten.join(' ') === 'gesehen' && clozeCheck.frage.nearMiss.geseht &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'geseht').ok &&
      orderCheck.frage.correct.join(' ') === 'Hast du die Musik gehört?' &&
      orderCheck.frage.finite === 'Hast' && orderCheck.frage.verbFirst === true &&
      orderCheck.frage.fields.rsk.join(' ') === 'gehört?' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Du', 'Hast', 'die', 'Musik', 'gehört?']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Ich habe die Hausaufgabe gemacht.') &&
      checks[4].frage.optionen.some(o => o.text === 'Ich habe Deutsch gelernt.'));
}

/* ---------- audited A1 Perfekt-with-sein lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u3-l5'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  t('Corpus lesson a1-u3-l5 states five bounded Perfekt-with-sein sentences and teaches them as complete German',
    lesson.title.de === 'Perfekt mit sein' && lesson.title.ar === 'الماضي مع sein' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      ['fünf vollständige Sätze', 'Ich bin nach Hause gegangen.',
        'Ich bin zu Hause geblieben.', 'Er ist spät gekommen.',
        'Wir sind nach Berlin gefahren.', 'Was ist passiert?']
        .every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      ['Ich bin nach Hause gegangen.', 'Ich bin zu Hause geblieben.',
        'Wir sind nach Berlin gefahren.', 'Was ist passiert?']
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u3-l5 keeps all 28 travel entries, Arabic meanings and verb-specific auxiliary choices accurate without a blanket movement rule',
    lesson.wortschatz.length === 28 &&
      byWord.sein.ex === 'Ich bin nach Hause gegangen.' &&
      byWord.gegangen.err === 'Ich habe nach Hause gegangen.' &&
      byWord.gekommen.ex === 'Er ist spät gekommen.' &&
      byWord.gefahren.why.includes('عندما يدل fahren على الانتقال') &&
      byWord.geblieben.why.includes('bin geblieben') &&
      byWord.gewesen.ex === 'Bist du schon in Berlin gewesen?' &&
      byWord.aufgestanden.why.includes('aufstehen يصوغ Perfekt مع sein') &&
      byWord.umgezogen.why.includes('بمعنى الانتقال إلى مسكن جديد') &&
      byWord.passiert.ex === 'Was ist passiert?' &&
      byWord.gefallen.ex === 'Der Film hat mir gefallen.' &&
      byWord['das Flugzeug'].why.includes('بلا مفعول') &&
      byWord['die Fahrt'].why.includes('hat gedauert') &&
      byWord['das Hotel'].why.includes('Hotel بالمفرد') &&
      byWord['das Taxi'].ar === 'سيارة الأجرة' &&
      tricks[0].wie.includes('fahren → bin gefahren') && tricks[0].warum.includes('هذه الأفعال المحددة') &&
      tricks[1].wie.includes('werden → ist geworden') &&
      tricks[2].wie === 'Ich bin gefahren · Die Fahrt hat gedauert · Ich habe geschlafen.' &&
      !['الحركة تأخذ sein لا haben', '"rtb"'].some(x => lessonText.includes(x)));
  const model = lesson.schritte.find(s => s.id === 's15');
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const transform = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  const targets = ['nach Hause gegangen', 'zu Hause geblieben', 'spät gekommen',
    'nach Berlin gefahren', 'Was ist passiert'];
  t('Corpus lesson a1-u3-l5 aligns strict participle clozes, one-sentence order, five-part writing, speaking, summary and homework',
    model.zeigt.de === 'Ich bin nach Hause gegangen.' &&
      imitate.frage.antworten.join(' ') === 'gegangen' && imitate.frage.nearMiss.gehen &&
      transform.zeigt.de === 'Er ist spät gekommen.' && transform.hinweise[1].includes('gekommen') &&
      drill.frage.zeigt === 'Wir sind nach Berlin ____.' &&
      drill.frage.antworten.join(' ') === 'gefahren' && drill.frage.nearMiss.gefahrt &&
      !win.DW.renderers.judgeCloze(drill.frage, 'gefahrt').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === 'Ich bin nach Hause gegangen.' &&
      order.frage.finite === 'bin' && order.frage.fields.vorfeld.join(' ') === 'Ich' &&
      order.frage.fields.rsk.join(' ') === 'gegangen.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Ich', 'nach', 'Hause', 'bin', 'gegangen.']).failed === 1 &&
      writing.frage.points.join(' | ') ===
        'nach Hause gegangen | zu Hause geblieben | spät gekommen | nach Berlin gefahren | Was ist passiert' &&
      writing.frage.minWords === 25 &&
      targets.every(x => [writing.frage.promptDe, speaking.erklaerung, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u3-l5 makes 80 percent four of five measurable across gegangen, geblieben, gekommen, gefahren and passiert',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u3-l5\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === 'Was ist passiert?') &&
      clozeCheck.frage.zeigt === 'Wir sind nach Berlin ____.' &&
      clozeCheck.frage.antworten.join(' ') === 'gefahren' && clozeCheck.frage.nearMiss.gefahrt &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'gefahrt').ok &&
      orderCheck.frage.correct.join(' ') === 'Er ist spät gekommen.' &&
      orderCheck.frage.finite === 'ist' && orderCheck.frage.verbFirst === false &&
      orderCheck.frage.fields.rsk.join(' ') === 'gekommen.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Er', 'spät', 'ist', 'gekommen.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Ich bin nach Hause gegangen.') &&
      checks[4].frage.optionen.some(o => o.text === 'Ich bin zu Hause geblieben.'));
}

/* ---------- audited A1 appointments lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u3-l6'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = ['Ich möchte einen Termin machen.', 'Passt Ihnen Dienstag um zehn Uhr?',
    'Das passt mir.', 'Können wir den Termin verschieben?',
    'Das tut mir leid, ich muss den Termin absagen.'];
  t('Corpus lesson a1-u3-l6 states five bounded appointment utterances and teaches each as complete German',
    lesson.title.de === 'Termine' && lesson.title.ar === 'المواعيد' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.grammar.item === 'طلب موعد وقبوله وتأجيله وإلغاؤه' &&
      lesson.schritte[0].zeigt.de.includes('fünf vollständige Äußerungen') &&
      targets.every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      targets.every(x => lesson.schritte.some(s => s.zeigt && s.zeigt.de === x)));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u3-l6 keeps all 28 appointment entries, Arabic meanings, cases and separable verbs accurate without English shortcuts or a false proposal error',
    lesson.wortschatz.length === 28 &&
      byWord['einen Termin machen'].ex === 'Ich möchte einen Termin machen.' &&
      byWord.vorschlagen.ex === 'Ich schlage Dienstag vor.' &&
      byWord.vorschlagen.why.includes('الفعل منفصل') &&
      byWord.verschieben.err === 'Können wir den Termin verschiebe?' &&
      byWord.absagen.ex.includes('den Termin absagen') &&
      byWord['die Verabredung'].ar === 'الموعد الشخصي' &&
      byWord['das tut mir leid'].why.includes('الداتيف') &&
      byWord['sich treffen'].ex === 'Wir treffen uns um acht Uhr.' &&
      byWord['Wie wäre es mit'].ex === 'Wie wäre es mit einem Termin am Dienstag?' &&
      byWord['Wie wäre es mit'].err === 'Wie wäre es mit einen Termin am Dienstag?' &&
      byWord['Wie wäre es mit'].why.includes('الداتيف') &&
      tricks[0].wie.includes('den Termin verschieben') && tricks[0].wie.includes('den Termin absagen') &&
      tricks[1].wie.includes('Das passt mir.') && tricks[1].warum.includes('Ihnen وmir') &&
      tricks[2].wie.includes('Vormittags habe ich') &&
      !['appointment', 'suggestion', 'reschedule', '"rtb"'].some(x => lessonText.includes(x)));
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  const points = ['einen Termin machen', 'Passt Ihnen', 'Das passt mir',
    'Termin verschieben', 'Termin absagen'];
  t('Corpus lesson a1-u3-l6 aligns strict clozes, one-question order, five-part writing, speaking, summary and homework',
    imitate.frage.antworten.join(' ') === 'machen' && imitate.frage.nearMiss.mache &&
      drill.frage.zeigt === 'Können wir den Termin ____?' &&
      drill.frage.antworten.join(' ') === 'verschieben' && drill.frage.nearMiss.verschiebe &&
      !win.DW.renderers.judgeCloze(drill.frage, 'verschiebe').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === 'Können wir den Termin verschieben?' &&
      order.frage.finite === 'Können' && order.frage.verbFirst === true &&
      order.frage.fields.vorfeld.length === 0 && order.frage.fields.lsk.join(' ') === 'Können' &&
      order.frage.fields.rsk.join(' ') === 'verschieben?' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Wir', 'können', 'den', 'Termin', 'verschieben?']).failed === 1 &&
      writing.frage.points.join(' | ') === points.join(' | ') && writing.frage.minWords === 29 &&
      points.every(x => [writing.frage.promptDe, speaking.erklaerung, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u3-l6 makes 80 percent four of five measurable across cancellation, postponement, suitability, request and acceptance',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u3-l6\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) &&
      clozeCheck.frage.antworten.join(' ') === 'verschieben' && clozeCheck.frage.nearMiss.verschiebe &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'verschiebe').ok &&
      orderCheck.frage.correct.join(' ') === 'Passt Ihnen Dienstag um zehn Uhr?' &&
      orderCheck.frage.finite === 'Passt' && orderCheck.frage.verbFirst === true &&
      orderCheck.frage.fields.vorfeld.length === 0 && orderCheck.frage.fields.lsk.join(' ') === 'Passt' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Dienstag', 'passt', 'Ihnen', 'um', 'zehn', 'Uhr?']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) &&
      checks[4].frage.optionen.some(o => o.text === targets[2]));
}

/* ---------- audited A1 housing lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u4-l1'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = ['Unsere Wohnung ist klein.', 'Das Wohnzimmer ist hell.',
    'Es gibt ein Bett im Schlafzimmer.', 'Wir wohnen im Erdgeschoss.',
    'Die Wohnung hat sechzig Quadratmeter Wohnfläche.'];
  t('Corpus lesson a1-u4-l1 states five bounded housing sentences and teaches each as complete German',
    lesson.title.de === 'Wohnen' && lesson.title.ar === 'السكن' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.grammar.item === 'وصف الشقة والغرف والطابق والمساحة' &&
      lesson.schritte[0].zeigt.de.includes('fünf vollständige Sätze') &&
      targets.every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      targets.slice(0, 4).every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      byWord['der Quadratmeter'].ex === targets[4]);
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u4-l1 keeps all 28 housing entries, Arabic meanings, compound gender and measurement guidance accurate without English shortcuts or false blanket rules',
    lesson.wortschatz.length === 28 &&
      byWord['die Wohnung'].ex === targets[0] &&
      byWord['das Schlafzimmer'].ex === targets[2] &&
      byWord['das Wohnzimmer'].ex === targets[1] &&
      byWord['die Möbel'].ar === 'قطع الأثاث' && byWord['die Möbel'].why.includes('كلمة جمع') &&
      byWord.gemütlich.ex === 'Die Wohnung ist sehr gemütlich.' &&
      byWord.umziehen.why.includes('ينفصل الفعل') &&
      byWord.mieten.why.includes('بلا für') &&
      byWord['die Decke'].why.includes('سقف الغرفة') &&
      byWord['das Holz'].why.includes('أنواع أو قطع') &&
      byWord['der Quadratmeter'].why.includes('جمع Quadratmeter يبقى بلا تغيير') &&
      tricks[0].wie.includes('das Schlafzimmer') && tricks[0].warum.includes('الجزء الأخير Zimmer') &&
      tricks[1].wie.includes('ist klein') && tricks[1].wie.includes('ist hell') &&
      tricks[2].wie === 'ein Quadratmeter · sechzig Quadratmeter.' &&
      ![' there ', ' has ', ' small ', ' floor ', ' zero ', '"rtb"',
        'العربية لا تُصرّف الصفة', 'الوحدات لا تُجمع بـ s'].some(x => lessonText.toLowerCase().includes(x.toLowerCase())));
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  const points = ['unsere Wohnung ist klein', 'das Wohnzimmer ist hell',
    'ein Bett im Schlafzimmer', 'im Erdgeschoss', 'sechzig Quadratmeter Wohnfläche'];
  t('Corpus lesson a1-u4-l1 aligns strict clozes, one-sentence existence order, five-part writing, speaking, summary and homework',
    imitate.frage.antworten.join(' ') === 'klein' && imitate.frage.nearMiss.kleine &&
      drill.frage.zeigt === 'Die Wohnung hat sechzig ____ Wohnfläche.' &&
      drill.frage.antworten.join(' ') === 'Quadratmeter' && drill.frage.nearMiss.Quadratmeters &&
      !win.DW.renderers.judgeCloze(drill.frage, 'Quadratmeters').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'gibt' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Es' &&
      order.frage.fields.lsk.join(' ') === 'gibt' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Es', 'ein', 'Bett', 'gibt', 'im', 'Schlafzimmer.']).failed === 1 &&
      writing.frage.points.join(' | ') === points.join(' | ') && writing.frage.minWords === 24 &&
      points.every(x => [writing.frage.promptDe, speaking.erklaerung, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u4-l1 makes 80 percent four of five measurable across floor, area, furniture, apartment and living-room descriptions',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u4-l1\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.misconceptionFamilies.a === 'präposition' &&
      clozeCheck.frage.antworten.join(' ') === 'Quadratmeter' &&
      clozeCheck.frage.nearMiss.Quadratmeters &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Quadratmeters').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'gibt' &&
      orderCheck.frage.verbFirst === false && orderCheck.frage.fields.vorfeld.join(' ') === 'Es' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Es', 'ein', 'Bett', 'gibt', 'im', 'Schlafzimmer.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) &&
      checks[4].frage.optionen.some(o => o.text === targets[1]));
}

/* ---------- audited A1 medical lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u4-l2'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = ['Mir tut der Kopf weh.', 'Ich habe Schmerzen.',
    'Ich habe eine Erkältung.', 'Ich brauche einen Termin.',
    'Mir geht es besser.'];
  t('Corpus lesson a1-u4-l2 states five bounded medical sentences and teaches the four prerequisite facts as complete German',
    lesson.title.de === 'Beim Arzt' && lesson.title.ar === 'عند الطبيب' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.grammar.item === 'وصف الأعراض وطلب موعد وذكر التحسن' &&
      lesson.schritte.length === 34 && lesson.schritte[0].zeigt.de.includes('fünf vollständige Sätze') &&
      targets.every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      targets.slice(0, 4).every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      byWord.besser.ex === targets[4]);
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u4-l2 keeps all 28 medical entries, precise Arabic, isolated corrections and three usable medical mnemonics without the former English mixtures',
    lesson.wortschatz.length === 28 &&
      byWord['der Hals'].ar === 'الحلق / العنق' &&
      byWord['die Schmerzen'].ex === targets[1] && byWord['die Schmerzen'].err === 'Ich habe Schmerze.' &&
      byWord['die Schmerzen'].why.includes('المفرد هو der Schmerz') &&
      byWord['die Erkältung'].ex === targets[2] && byWord['die Erkältung'].why.includes('مؤنث') &&
      byWord.wehtun.ex === 'Beim Arztbesuch sage ich, wo es wehtut.' &&
      byWord.wehtun.why.includes('الجملة الثانوية') && byWord['die Praxis'].ex.includes('Wartezimmer') &&
      byWord['der Husten'].why.includes('Ich habe Husten') &&
      byWord['das Fieber'].why.includes('Ich habe Fieber') &&
      byWord.besser.why.includes('لا نحذف es') &&
      tricks.length === 3 && tricks[0].wie.includes('Mir tut der Bauch weh.') &&
      tricks[1].wie.includes(targets[1]) && tricks[1].wie.includes(targets[2]) &&
      tricks[2].wie.includes(targets[4]) && tricks[2].warum.includes('تبقى es') &&
      !['I have pain', 'Ich habe pain', 'I need', 'Ich need', 'by the Arzt', 'by dem Arzt', '"rtb"']
        .some(x => lessonText.toLowerCase().includes(x.toLowerCase())));
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  const points = targets.map(x => x.slice(0, -1));
  t('Corpus lesson a1-u4-l2 aligns strict clozes, one pain-sentence order, five-part writing, speaking, summary and homework',
    imitate.frage.antworten.join(' ') === 'Mir' && imitate.frage.nearMiss.Mich &&
      drill.frage.zeigt === 'Ich habe ____.' &&
      drill.frage.antworten.join(' ') === 'Schmerzen' && drill.frage.nearMiss.Schmerze &&
      !win.DW.renderers.judgeCloze(drill.frage, 'Schmerze').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[0] && order.frage.finite === 'tut' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Mir' &&
      order.frage.fields.lsk.join(' ') === 'tut' && order.frage.fields.rsk.join(' ') === 'weh.' &&
      order.frage.rightBracket.join(' ') === 'weh.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Mir', 'der', 'Kopf', 'tut', 'weh.']).failed === 1 &&
      writing.frage.points.join(' | ') === points.join(' | ') && writing.frage.minWords === 20 &&
      points.every(x => [writing.frage.promptDe, speaking.erklaerung, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u4-l2 makes 80 percent four of five measurable across appointment, pain plural, cold, pain dative and improvement expression',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u4-l2\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.misconceptionFamilies.a === 'kasus' &&
      clozeCheck.frage.antworten.join(' ') === 'Schmerzen' && clozeCheck.frage.nearMiss.Schmerze &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Schmerze').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'habe' &&
      orderCheck.frage.verbFirst === false && orderCheck.frage.fields.vorfeld.join(' ') === 'Ich' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Ich', 'eine', 'Erkältung.', 'habe']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) &&
      checks[3].frage.misconceptionFamilies.b === 'kasus' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) &&
      checks[4].frage.misconceptionFamilies.a === 'wortstellung');
}

/* ---------- audited A1 directions lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u4-l3'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = ['Gehen Sie geradeaus.', 'Biegen Sie an der Ampel links ab.',
    'Nehmen Sie die erste Straße rechts.', 'Überqueren Sie die Brücke.',
    'Die Apotheke ist auf der linken Seite.'];
  t('Corpus lesson a1-u4-l3 states five bounded direction sentences and teaches the four prerequisite facts as complete German',
    lesson.title.de === 'Wegbeschreibung' && lesson.title.ar === 'وصف الطريق' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.grammar.item === 'إرشادات الطريق وتحديد جهة المكان' &&
      lesson.schritte.length === 34 && lesson.schritte[0].zeigt.de.includes('fünf vollständige Sätze') &&
      targets.every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      targets.slice(0, 4).every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      byWord['die Seite'].ex === targets[4]);
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u4-l3 keeps all 28 direction entries, precise Arabic, isolated corrections and three usable route mnemonics without the former English mixtures',
    lesson.wortschatz.length === 28 &&
      byWord.links.ex === targets[1] && byWord.rechts.ex === targets[2] &&
      byWord['die Ampel'].why.includes('an der Ampel') &&
      byWord['das Rathaus'].ar === 'مبنى البلدية / دار البلدية' &&
      byWord.gegenüber.ex === 'Die Post ist gegenüber der Bank.' &&
      byWord.gegenüber.why.includes('الداتيف') &&
      byWord.weit.ex === 'Der Bahnhof ist nicht weit entfernt, sondern nur einen Kilometer.' &&
      byWord.nah.why.includes('bei der Bank') &&
      byWord.abbiegen.why.includes('ab في النهاية') &&
      byWord['das Schild'].why.includes('الترس') &&
      byWord.laufen.ar.includes('يمشي') && byWord.laufen.ar.includes('يركض') &&
      tricks.length === 3 && tricks[0].wie.includes(targets[2]) &&
      tricks[1].wie.includes(targets[1]) && tricks[1].warum.includes('فعل منفصل') &&
      tricks[2].wie.includes('auf der rechten Seite') && tricks[2].warum.includes('النهاية -en') &&
      !['Gehen Sie straight', 'Dann left', 'Die first Straße', 'Until zur Ampel',
        'Dann links.', 'Die erste Straße.', 'Bis zur Ampel.', '"rtb"']
        .some(x => lessonText.toLowerCase().includes(x.toLowerCase())));
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  const points = targets.map(x => x.slice(0, -1));
  t('Corpus lesson a1-u4-l3 aligns strict clozes, one location-sentence order, five-part writing, speaking, summary and homework',
    imitate.frage.antworten.join(' ') === 'geradeaus' && imitate.frage.nearMiss['gerade aus'] &&
      drill.frage.zeigt === 'Nehmen Sie die ____ Straße rechts.' &&
      drill.frage.antworten.join(' ') === 'erste' && drill.frage.nearMiss.erst &&
      !win.DW.renderers.judgeCloze(drill.frage, 'erst').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[4] && order.frage.finite === 'ist' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Die Apotheke' &&
      order.frage.fields.lsk.join(' ') === 'ist' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Die', 'Apotheke', 'auf', 'der', 'linken', 'Seite.', 'ist']).failed === 1 &&
      writing.frage.points.join(' | ') === points.join(' | ') && writing.frage.minWords === 27 &&
      points.every(x => [writing.frage.promptDe, speaking.erklaerung, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u4-l3 makes 80 percent four of five measurable across bridge, first street, pharmacy side, straight ahead and left turn',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u4-l3\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.misconceptionFamilies.a === 'kasus' &&
      clozeCheck.frage.antworten.join(' ') === 'erste' && clozeCheck.frage.nearMiss.erst &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'erst').ok &&
      orderCheck.frage.correct.join(' ') === targets[4] && orderCheck.frage.finite === 'ist' &&
      orderCheck.frage.verbFirst === false && orderCheck.frage.fields.vorfeld.join(' ') === 'Die Apotheke' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Die', 'Apotheke', 'auf', 'der', 'linken', 'Seite.', 'ist']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) &&
      checks[3].frage.misconceptionFamilies.b === 'orthographie' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) &&
      checks[4].frage.misconceptionFamilies.a === 'wortstellung');
}

/* ---------- audited A1 short-message lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u4-l4'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = ['Liebe Anna, ich komme später.', 'Ich komme später.',
    'Kannst du morgen kommen?', 'Ich warte auf deine Antwort.'];
  const closing = 'Viele Grüße\nSara';
  t('Corpus lesson a1-u4-l4 states five bounded message elements and teaches directly supported salutation, information, question and closing forms',
    lesson.title.de === 'Kurze Nachricht' && lesson.title.ar === 'رسالة قصيرة' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.grammar.item === 'رسالة ودية بنداء ومعلومة وسؤال وختام' &&
      lesson.schritte.length === 34 && lesson.schritte[0].zeigt.de.includes('fünf Teilen') &&
      targets.every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      lesson.schritte[0].zeigt.de.includes('„Viele Grüße“ mit deinem Namen darunter') &&
      targets.slice(0, 3).every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte[6].zeigt.de === closing);
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u4-l4 keeps all 28 reviewed entries, qualified E-Mail gender, exact collocations, unambiguous corrections and three usable message mnemonics',
    lesson.wortschatz.length === 28 &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      byWord.Liebe.ex === targets[0] && byWord.Liebe.err.startsWith('Lieber Anna') &&
      byWord['viele Grüße'].ex === closing && byWord['viele Grüße'].err === 'Viele Grüße, Sara.' &&
      byWord['viele Grüße'].why.includes('لا نضع فاصلة') &&
      byWord['warten auf'].ex === targets[3] && byWord['warten auf'].blank === 'auf' &&
      byWord['danke für'].ex === 'Danke für deine Nachricht.' &&
      byWord['die E-Mail'].why.includes('المعياري في ألمانيا') &&
      byWord['die E-Mail'].why.includes('المحايد إقليميًا') &&
      byWord['die E-Mail'].err === 'Ich schreibe einen E-Mail.' &&
      byWord.grüßen.ex === 'Grüß deine Familie von mir.' && byWord.grüßen.err === 'Grüßen deine Familie von mir.' &&
      !lessonText.includes('Grüß du deine Familie') &&
      tricks.length === 3 && tricks[0].wie.includes(targets[0]) &&
      tricks[1].wie.includes(targets[2]) && tricks[2].wie.includes(closing));
  const imitate = lesson.schritte.find(s => s.id === 's16');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  const css = fs.readFileSync(ROOT + '/web/styles.css', 'utf8');
  t('Corpus lesson a1-u4-l4 aligns strict clozes, one modal-question order, 17-word writing, speaking, summary, homework and visible closing line breaks',
    imitate.frage.antworten.join(' ') === 'Liebe' && imitate.frage.nearMiss.Lieber &&
      drill.frage.zeigt === 'Ich warte ____ deine Antwort.' &&
      drill.frage.antworten.join(' ') === 'auf' && drill.frage.nearMiss['für'] &&
      !win.DW.renderers.judgeCloze(drill.frage, 'für').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'Kannst' &&
      order.frage.verbFirst === true && order.frage.fields.vorfeld.length === 0 &&
      order.frage.fields.lsk.join(' ') === 'Kannst' && order.frage.fields.rsk.join(' ') === 'kommen?' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['du', 'Kannst', 'morgen', 'kommen?']).failed === 1 &&
      writing.frage.minWords === 17 && writing.frage.points.length === 5 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      [writing.frage.promptDe, summary.zeigt.de].every(text => text.includes(closing)) &&
      homework.zeigt.de.includes('Viele Grüße\n[dein Name]') &&
      ['Liebe Anna', 'ich komme später', 'Kannst du morgen kommen', 'Ich warte auf deine Antwort', 'Viele Grüße']
        .every(x => speaking.erklaerung.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))) &&
      /\.zeigt\s*\{[^}]*white-space:pre-line/s.test(css) &&
      /\.opt\s*\{[^}]*white-space:pre-line/s.test(css) &&
      css.includes('.vocab-ex { direction: ltr; unicode-bidi: isolate; white-space: pre-line; }'));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u4-l4 makes 80 percent four of five measurable across closing layout, warten auf, modal question, salutation and information order',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u4-l4\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === closing) &&
      checks[0].frage.optionen.some(o => o.text === 'Viele Grüße, Sara.') &&
      checks[0].frage.misconceptionFamilies.a === 'orthographie' &&
      clozeCheck.frage.antworten.join(' ') === 'auf' && clozeCheck.frage.nearMiss['für'] &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'für').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'Kannst' &&
      orderCheck.frage.verbFirst === true && orderCheck.frage.fields.vorfeld.length === 0 &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['du', 'Kannst', 'morgen', 'kommen?']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) &&
      checks[3].frage.misconceptionFamilies.b === 'deklination' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) &&
      checks[4].frage.misconceptionFamilies.a === 'wortstellung');
}

/* ---------- audited A1 review lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u4-l5'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = ['Ich sehe den Mann.', 'Ich bin zwanzig Jahre alt.',
    'Ich bin nach Hause gegangen.', 'Dann lerne ich Deutsch.',
    'Das Buch liegt auf dem Tisch.'];
  t('Corpus lesson a1-u4-l5 bounds its A1 review to five corrected sentences and teaches the four prerequisite facts as complete German',
    lesson.title.de === 'Wiederholung A1' && lesson.title.ar === 'مراجعة A1' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.grammar.item === 'تصحيح الحالة والعمر والماضي وترتيب الفعل والمكان' &&
      lesson.schritte.length === 32 && lesson.schritte[0].zeigt.de.includes('fünf typische A1-Sätze') &&
      targets.every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      [targets[0], targets[1], targets[2], targets[4]]
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u4-l5 keeps all 20 reviewed entries, contextual rules, isolated corrections and three usable review mnemonics',
    lesson.wortschatz.length === 20 &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      byWord['der · den'].ex === targets[0] && byWord['der · den'].why.includes('مفعول به مذكر') &&
      byWord['das Alter mit sein'].ex === targets[1] &&
      byWord['das Alter mit sein'].err === 'Ich habe zwanzig Jahre alt.' &&
      byWord['nicht teuer · kein Geld'].why.includes('في هذين المثالين') &&
      byWord['keinen Kaffee'].err === 'Ich trinke kein Kaffee.' &&
      byWord['gegangen mit sein'].ex === targets[2] &&
      byWord['gegangen mit sein'].why.includes('تستعمل bin، لا habe') &&
      byWord['dann + Verb'].ex === targets[3] && byWord['dann + Verb'].why.includes('الحقل الأول') &&
      byWord['auf dem Tisch'].ex === targets[4] && byWord['auf dem Tisch'].why.includes('موقع الكتاب') &&
      byWord['mich · dich'].ex === 'Siehst du mich? Ja, ich sehe dich.' &&
      byWord['mir tut weh'].err === 'Mich tut der Kopf weh.' &&
      tricks.length === 3 && tricks[0].wie.includes('einen Termin') &&
      tricks[1].wie.includes('bin geblieben') && tricks[1].warum.includes('ولا تكفي قاعدة عامة عن الحركة') &&
      tricks[2].wie.includes(targets[3]) &&
      !lessonText.includes('gehen حركة: bin') && !lessonText.includes('سؤال واحد يحل اختيار المساعد'));
  const imitate = lesson.schritte.find(s => s.id === 's14');
  const drill = lesson.schritte.find(s => s.id === 's18');
  const order = lesson.schritte.find(s => s.id === 's19');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u4-l5 aligns strict clozes, one Dann sentence, 24-word correction writing, speaking, summary and homework',
    imitate.frage.antworten.join(' ') === 'den' && imitate.frage.nearMiss.der &&
      drill.frage.zeigt === 'Ich ____ nach Hause gegangen.' &&
      drill.frage.antworten.join(' ') === 'bin' && drill.frage.nearMiss.habe &&
      !win.DW.renderers.judgeCloze(drill.frage, 'habe').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[3] && order.frage.finite === 'lerne' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Dann' &&
      order.frage.fields.lsk.join(' ') === 'lerne' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Dann', 'ich', 'lerne', 'Deutsch.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 24 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      ['Ich sehe den Mann', 'Ich bin zwanzig Jahre alt', 'Ich bin nach Hause gegangen',
        'Dann lerne ich Deutsch', 'Das Buch liegt auf dem Tisch']
        .every(x => speaking.erklaerung.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u4-l5 makes 80 percent four of five measurable across location, Perfekt, V2, masculine accusative and age',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u4-l5\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) &&
      checks[0].frage.misconceptionFamilies.a === 'kasus' &&
      clozeCheck.frage.antworten.join(' ') === 'bin' && clozeCheck.frage.nearMiss.habe &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'habe').ok &&
      orderCheck.frage.correct.join(' ') === targets[3] && orderCheck.frage.finite === 'lerne' &&
      orderCheck.frage.verbFirst === false && orderCheck.frage.fields.vorfeld.join(' ') === 'Dann' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Dann', 'ich', 'lerne', 'Deutsch.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) &&
      checks[3].frage.misconceptionFamilies.b === 'kasus' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) &&
      checks[4].frage.misconceptionFamilies.a === 'lexik-kollokation');
}

/* ---------- audited A1 exam-format lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u4-l6'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Die Prüfung umfasst Hören, Lesen, Schreiben und Sprechen.',
    'Zum Bestehen braucht man insgesamt mindestens sechzig Punkte.',
    'Manche Hörtexte hören Sie einmal, andere zweimal.',
    'Bei der Prüfung buchstabieren Sie Ihren Namen.',
    'Die schriftliche Prüfung dauert fünfundsechzig Minuten.'
  ];
  t('Corpus lesson a1-u4-l6 bounds Start Deutsch 1 to five accurate format sentences and four directly taught facts',
    lesson.title.de === 'Prüfungsform A1' && lesson.title.ar === 'شكل امتحان A1' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.grammar.item === 'مجالات Start Deutsch 1 ومجموع النجاح والسماع والمدة والتهجئة' &&
      lesson.schritte.length === 31 && lesson.wortschatz.length === 14 &&
      lesson.schritte[0].zeigt.de.includes('vier Bereiche') &&
      lesson.schritte[0].zeigt.de.includes('Gesamtpunktzahl') &&
      lesson.schritte[0].zeigt.de.includes('Wiederholungen im Hören') &&
      lesson.schritte[0].zeigt.de.includes('Dauer der schriftlichen Prüfung') &&
      [targets[0], targets[1], targets[2], targets[4]]
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u4-l6 reviews all 14 entries and three mnemonics with the total score, part-specific listening and published durations instead of false module compensation',
    lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      byWord['das Hören'].ex === targets[2] && byWord['das Hören'].fam === 'hoerstrategie' &&
      byWord['das Lesen'].ex === 'Das Lesen dauert fünfundzwanzig Minuten.' &&
      byWord['das Schreiben'].ex === 'Das Schreiben dauert zwanzig Minuten.' &&
      byWord['das Sprechen'].ex === 'Das Sprechen dauert etwa fünfzehn Minuten.' &&
      byWord['der Punkt'].ex === targets[1] &&
      byWord['der Punkt'].err === 'Man braucht sechzig Punkte in jedem Teil.' &&
      byWord.bestehen.pl.includes('hat bestanden') && byWord.bestehen.why.includes('من المجموع') &&
      byWord.buchstabieren.ex === targets[3] && byWord.buchstabieren.why.includes('الامتحان الشفوي') &&
      byWord['die Aufgabe'].err === 'Lesen Sie zuerst der Aufgabe.' &&
      byWord['das Ergebnis'].why.includes('اسم محايد') &&
      byWord.schriftlich.ex === targets[4] && byWord.schriftlich.blank === 'schriftliche' &&
      byWord['der Ausweis'].ex === 'Bringen Sie Ihren Ausweis mit.' &&
      tricks.length === 3 && tricks[0].wie === 'Hören · Lesen · Schreiben · Sprechen' &&
      tricks[1].wie === 'mindestens 60 Punkte insgesamt' && tricks[1].warum.includes('من 100') &&
      tricks[2].wie.includes('einmal') && tricks[2].wie.includes('zweimal') &&
      !lessonText.includes('kein Ausgleich') && !lessonText.includes('Ein Teil rettet den anderen nicht') &&
      !lessonText.includes('Hören einmal'));
  const imitate = lesson.schritte.find(s => s.id === 's13');
  const drill = lesson.schritte.find(s => s.id === 's17');
  const order = lesson.schritte.find(s => s.id === 's18');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u4-l6 aligns strict clozes, one valid V2 spelling sentence, 37-word writing, speaking, summary and homework',
    imitate.frage.antworten.join(' ') === 'umfasst' && imitate.frage.nearMiss.hat &&
      drill.frage.zeigt === 'Zum Bestehen braucht man insgesamt mindestens sechzig ____.' &&
      drill.frage.antworten.join(' ') === 'Punkte' && drill.frage.nearMiss.Punkt &&
      !win.DW.renderers.judgeCloze(drill.frage, 'Punkt').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[3] && order.frage.finite === 'buchstabieren' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Bei der Prüfung' &&
      order.frage.fields.lsk.join(' ') === 'buchstabieren' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Bei', 'der', 'Prüfung', 'Sie', 'buchstabieren', 'Ihren', 'Namen.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 37 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/\.$/, '')).every(x =>
        speaking.erklaerung.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u4-l6 makes 80 percent four of five measurable across duration, total points, spelling, listening repetitions and exam areas',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u4-l6\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) &&
      checks[0].frage.misconceptionFamilies.a === 'pruefstrategie' &&
      clozeCheck.frage.zeigt === 'Zum Bestehen braucht man insgesamt mindestens sechzig ____.' &&
      clozeCheck.frage.antworten.join(' ') === 'Punkte' && clozeCheck.frage.nearMiss.Punkt &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Punkt').ok &&
      orderCheck.frage.correct.join(' ') === targets[3] && orderCheck.frage.finite === 'buchstabieren' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Bei der Prüfung' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Bei', 'der', 'Prüfung', 'Sie', 'buchstabieren', 'Ihren', 'Namen.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[2]) &&
      checks[3].frage.misconceptionFamilies.b === 'hoerstrategie' &&
      checks[4].frage.optionen.some(o => o.text === targets[0]) &&
      checks[4].frage.misconceptionFamilies.a === 'pruefstrategie');
}

/* ---------- audited A1 post-and-telephone lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u5-l1'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Auf dem Umschlag stehen Absender und Empfänger.',
    'Wie lautet Ihre Postleitzahl?',
    'Wie lautet die Vorwahl von München?',
    'Sprechen Sie bitte auf den Anrufbeantworter.',
    'Am Telefon sage ich „Auf Wiederhören“.'
  ];
  t('Corpus lesson a1-u5-l1 bounds post and telephone to five complete sentences and four directly taught facts',
    lesson.title.de === 'Post und Telefon' && lesson.title.ar === 'البريد والهاتف' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.grammar.item === 'بيانات المظروف والرمز البريدي ومفتاح الاتصال والرسالة الهاتفية' &&
      lesson.schritte.length === 34 && lesson.wortschatz.length === 28 &&
      lesson.schritte[0].zeigt.de.includes('beschriftest du einen Umschlag') &&
      lesson.schritte[0].zeigt.de.includes('Postleitzahl und Vorwahl') &&
      lesson.schritte[0].zeigt.de.includes('telefonische Nachricht') &&
      [targets[0], targets[1], targets[2], targets[4]]
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u5-l1 reviews all 28 entries and three corrected mnemonics without false postal layout, separable-verb, Internet or telephone absolutes',
    lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      byWord['der Anrufbeantworter'].ex === targets[3] && byWord['der Anrufbeantworter'].fam === 'kasus' &&
      byWord['der Absender'].ex === targets[0] && byWord['der Absender'].err.includes('steht Absender') &&
      byWord['die Postleitzahl'].ex === targets[1] && byWord['die Postleitzahl'].why.includes('Ihre') &&
      byWord['die Vorwahl'].ex === targets[2] && byWord['die Vorwahl'].why.includes('مؤنث') &&
      byWord['die Ansage'].ex.includes('Anrufbeantworter') && byWord['die Durchsage'].ex.includes('Bahnhof') &&
      byWord['das Internet'].ex === 'Das findest du im Internet.' && byWord['das Internet'].why.includes('in dem') &&
      byWord.anklicken.ex === 'Da musst du dieses Wort anklicken.' && byWord.anklicken.why.includes('بعد musst') &&
      byWord.abgeben.ex === 'Ich muss meine Schlüssel abgeben.' && byWord['das Wiederhören'].ex === targets[4] &&
      byWord['die Welt'].err === 'Es gibt viele Probleme auf die Welt.' &&
      tricks.length === 3 && tricks[0].wie.includes('musst das Wort anklicken') &&
      tricks[0].wie.includes('muss den Schlüssel abgeben') &&
      tricks[1].wie.includes('Am Telefon: Auf Wiederhören') &&
      tricks[1].wie.includes('Beim persönlichen Abschied: Auf Wiedersehen') &&
      tricks[2].wie.includes('der Schreiber') && tricks[2].wie.includes('der Beantworter') &&
      tricks[2].wie.includes('die Zahl') &&
      !lessonText.includes('der Absender steht oben') && !lessonText.includes('anklicken am Ende') &&
      !lessonText.includes('Auf Wiederhören sagt man nur ins Telefon') &&
      !lessonText.includes('Das findest du in dem Internet.') && !lessonText.includes('(der Antworter)'));
  const imitate = lesson.schritte.find(s => s.phase === 'Anwenden' && s.frage && s.frage.art === 'cloze');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u5-l1 aligns strict clozes, valid V2 envelope order, 29-word writing, speaking, summary and homework',
    imitate.frage.antworten.join(' ') === 'stehen' && imitate.frage.nearMiss.steht &&
      drill.frage.zeigt === 'Wie lautet Ihre ____?' &&
      drill.frage.antworten.join(' ') === 'Postleitzahl' && drill.frage.nearMiss.Postleitzahle &&
      !win.DW.renderers.judgeCloze(drill.frage, 'Postleitzahle').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[0] && order.frage.finite === 'stehen' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Auf dem Umschlag' &&
      order.frage.fields.lsk.join(' ') === 'stehen' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Auf', 'dem', 'Umschlag', 'Absender', 'und', 'Empfänger.', 'stehen']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 29 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[„“.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[„“.?]/g, '').toLocaleLowerCase('de')
          .includes(x.toLocaleLowerCase('de'))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u5-l1 makes 80 percent four of five measurable across telephone closing, postal code, envelope labels, answering machine and area code',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u5-l1\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) &&
      checks[0].frage.misconceptionFamilies.a === 'register' &&
      clozeCheck.frage.zeigt === 'Wie lautet Ihre ____?' &&
      clozeCheck.frage.antworten.join(' ') === 'Postleitzahl' && clozeCheck.frage.nearMiss.Postleitzahle &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Postleitzahle').ok &&
      orderCheck.frage.correct.join(' ') === targets[0] && orderCheck.frage.finite === 'stehen' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Auf dem Umschlag' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Auf', 'dem', 'Umschlag', 'Absender', 'und', 'Empfänger.', 'stehen']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[3]) &&
      checks[3].frage.misconceptionFamilies.b === 'kasus' &&
      checks[4].frage.optionen.some(o => o.text === targets[2]) &&
      checks[4].frage.misconceptionFamilies.a === 'genus');
}

/* ---------- audited A1 bank-and-work lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u5-l2'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich arbeite bei einer Firma.',
    'Ich gehe zum Schalter drei.',
    'Wir überweisen das Geld auf Ihr Konto.',
    'Füllen Sie bitte dieses Formular aus.',
    'Die Praxis ist morgen ab acht Uhr geöffnet.'
  ];
  t('Corpus lesson a1-u5-l2 bounds bank and work to five complete sentences and four directly taught facts',
    lesson.title.de === 'Bank und Arbeit' && lesson.title.ar === 'المصرف والعمل' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.grammar.item === 'جهة العمل والشبّاك والتحويل والاستمارة ووقت الفتح' &&
      lesson.schritte.length === 34 && lesson.wortschatz.length === 28 &&
      lesson.schritte[0].zeigt.de.includes('nennst du deinen Arbeitgeber') &&
      lesson.schritte[0].zeigt.de.includes('gehst zum Schalter') &&
      lesson.schritte[0].zeigt.de.includes('überweist Geld') &&
      lesson.schritte[0].zeigt.de.includes('füllst ein Formular aus') &&
      lesson.schritte[0].zeigt.de.includes('verstehst Öffnungszeiten') &&
      [targets[0], targets[1], targets[2], targets[4]]
        .every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u5-l2 reviews all 28 entries and three corrected mnemonics without rejecting valid company, seit or full-article contexts',
    lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      byWord['das Konto'].ex === targets[2] && byWord['das Konto'].err.includes('in Ihr Konto') &&
      byWord['der Automat'].ex.includes('am Automaten') && byWord['der Automat'].ex.includes('aussehen') &&
      byWord['der Automat'].why.includes('مذكر ضعيف') && byWord.ausfüllen.ex === targets[3] &&
      byWord.ausfüllen.err.endsWith('Formular an.') &&
      byWord['der Schalter'].ex === 'Gehen Sie bitte zum Schalter drei.' &&
      byWord['der Schalter'].err === 'Gehen Sie bitte zur Schalter drei.' &&
      byWord['der Beamte'].ex.includes('den Beamten') && byWord['der Beamte'].why.includes('مذكر ضعيف') &&
      byWord['die Papiere'].err.includes('Ihren Papiere') &&
      byWord['das Praktikum'].ex.includes('bei Siemens') && byWord['das Praktikum'].err.includes('zu Siemens') &&
      byWord['die Praxis'].ex.startsWith(targets[4]) && byWord['die Praxis'].ex.includes('ist sie offen') &&
      byWord['die Praxis'].err.includes('morgen seit') && byWord['die Firma'].ex === targets[0] &&
      byWord['die Firma'].why.includes('داتيف') &&
      byWord['der Arbeitsplatz'].ex === 'An meinem Arbeitsplatz fehlt ein Drucker.' &&
      byWord['die Anmeldung'].ex.includes('erledigst') && byWord['der Partner'].ex.includes('Partnerin') &&
      byWord['die Party'].ex.includes('lustig') && byWord.arbeitslos.ex.includes('selbstständig') &&
      byWord['der Verkäufer'].ex === 'Der Verkäufer arbeitet im Kaufhaus.' &&
      tricks.length === 3 && tricks[0].wie.includes('angekreuzt') && tricks[0].wie.includes('angemeldet') &&
      tricks[0].wie.includes('ausgefüllt') && tricks[1].wie.includes('bei einer Firma arbeiten') &&
      tricks[1].warum.includes('in der Firma') && tricks[1].warum.includes('لا يُرفض مطلقًا') &&
      tricks[2].wie.includes('zum Schalter (zu dem)') && tricks[2].wie.includes('zur Bäckerei (zu der)') &&
      tricks[2].warum.includes('فتبقيان صحيحتين') &&
      !lessonText.includes('bei لا in مع جهة العمل') && !lessonText.includes('zu dem Schalter drei') &&
      !lessonText.includes('Die Praxis ist seit acht Uhr geöffnet.') && !lessonText.includes('Was für ein Pech') &&
      !lessonText.includes('Mein Bruder ist selbstständig') && !lessonText.includes('Das ist normal'));
  const imitate = lesson.schritte.find(s => s.phase === 'Anwenden' && s.frage && s.frage.art === 'cloze');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u5-l2 aligns strict clozes, valid V2 counter order, 32-word writing, speaking, summary and homework',
    imitate.zeigt.de === 'Ich arbeite bei ____ Firma.' &&
      imitate.frage.antworten.join(' ') === 'einer' && imitate.frage.nearMiss.eine &&
      drill.frage.zeigt === 'Füllen Sie bitte dieses Formular ____.' &&
      drill.frage.antworten.join(' ') === 'aus' && drill.frage.nearMiss.an &&
      !win.DW.renderers.judgeCloze(drill.frage, 'an').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[1] && order.frage.finite === 'gehe' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Ich' &&
      order.frage.fields.lsk.join(' ') === 'gehe' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Ich', 'zum', 'Schalter', 'drei.', 'gehe']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 32 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de')
          .includes(x.toLocaleLowerCase('de'))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u5-l2 makes 80 percent four of five measurable across future opening, form prefix, counter destination, transfer and employer case',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u5-l2\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) &&
      checks[0].frage.misconceptionFamilies.a === 'präposition' &&
      clozeCheck.frage.zeigt === 'Füllen Sie bitte dieses Formular ____.' &&
      clozeCheck.frage.antworten.join(' ') === 'aus' && clozeCheck.frage.nearMiss.an &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'an').ok &&
      orderCheck.frage.correct.join(' ') === targets[1] && orderCheck.frage.finite === 'gehe' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Ich' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Ich', 'zum', 'Schalter', 'drei.', 'gehe']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[2]) &&
      checks[3].frage.misconceptionFamilies.b === 'präposition' &&
      checks[4].frage.optionen.some(o => o.text === targets[0]) &&
      checks[4].frage.misconceptionFamilies.a === 'kasus');
}

/* ---------- audited A1 school-and-documents lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u5-l3'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich bin in Tunis geboren.',
    'Bei „Familienstand“ kreuzen Sie „ledig“ an.',
    'Die kleine Laura geht in den Kindergarten.',
    'Wie lautet das Geburtsjahr Ihres Sohnes?',
    'Schreiben Sie Ihren Geburtsort in das Formular.'
  ];
  t('Corpus lesson a1-u5-l3 bounds school and documents to five complete sentences and four directly taught facts',
    lesson.title.de === 'Schule und Papiere' && lesson.title.ar === 'المدرسة والوثائق' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.grammar.item === 'مكان الميلاد والحالة العائلية والروضة وسنة الميلاد والاستمارة' &&
      lesson.schritte.length === 34 && lesson.wortschatz.length === 28 &&
      lesson.schritte[0].zeigt.de.includes('nennst du Geburtsort und Familienstand') &&
      lesson.schritte[0].zeigt.de.includes('fragst nach dem Geburtsjahr') &&
      lesson.schritte[0].zeigt.de.includes('sprichst über den Kindergarten') &&
      targets.slice(0, 4).every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u5-l3 reviews all 28 entries and three corrected mnemonics without rejecting valid von, unter or full-article contexts',
    lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      byWord['der Kindergarten'].ex === targets[2] && byWord['der Kindergarten'].err.includes('in die Kindergarten') &&
      byWord['der Student'].ex.includes('dem Studenten') && byWord['der Student'].why.includes('مذكر ضعيف') &&
      byWord['das Studium'].ex.includes('in Mainz') && byWord.kennenlernen.ex === 'Wir möchten Sie kennenlernen.' &&
      byWord.kennenlernen.err.includes('kennenzulernen') &&
      byWord['die Führung'].ex.includes('durch das Haus') && byWord['die Führung'].err.includes('durch dem Haus') &&
      byWord.männlich.ar === 'ذكر' && byWord.weiblich.ar === 'أنثى' &&
      byWord['der Jugendliche'].ex.includes('moderne Kleidung') &&
      byWord['der Familienname'].err.startsWith('Meine Familienname') &&
      byWord['der Familienstand'].ex === targets[1] && byWord['der Familienstand'].err.endsWith('auf.') &&
      byWord.verheiratet.ex.includes('bin verheiratet') && byWord.verheiratet.err.includes('habe verheiratet') &&
      byWord.heiraten.ex.includes('im Mai in Polen') && byWord['die Hochzeit'].err.includes('waren') &&
      byWord['das Geburtsjahr'].ex === targets[3] &&
      byWord['der Geburtsort'].ex === targets[4] && byWord['der Geburtsort'].err.includes('Ihr Geburtsort') &&
      byWord['der Raum'].ex === 'Der Unterricht ist in Raum 332.' &&
      tricks.length === 3 && tricks[0].wie.includes('Bei „Familienstand“') &&
      tricks[0].warum.includes('unter „Familienstand“') && tricks[0].warum.includes('قاعدة وحيدة') &&
      tricks[1].wie.includes('Ihres Sohnes') && tricks[1].warum.includes('von Ihrem Sohn') &&
      tricks[1].warum.includes('صحيحة أيضًا') && tricks[2].wie.includes('bin in Tunis geboren') &&
      tricks[2].wie.includes('ist gestorben') && tricks[2].warum.includes('Perfekt') &&
      !lessonText.includes('عبارة ثابتة في كل استمارة ألمانية') &&
      !lessonText.includes('الوثيقة الرسمية تفضّل Genitiv على von') &&
      !lessonText.includes('Schreiben Sie Ihren Geburtsort auf das Formular.') &&
      !lessonText.includes('Der Unterricht ist in dem Raum 332.') &&
      !lessonText.includes('Ich bin Student in Mainz.') &&
      !lessonText.includes('Die Hochzeit war sehr schön gemacht.') &&
      !lessonText.includes('Meine Oma ist schon tot gemacht.'));
  const imitate = lesson.schritte.find(s => s.phase === 'Anwenden' && s.frage && s.frage.art === 'cloze');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u5-l3 aligns strict clozes, birth-sentence order, 31-word writing, speaking, summary and homework',
    imitate.zeigt.de === 'Ich ____ in Tunis geboren.' &&
      imitate.frage.antworten.join(' ') === 'bin' && imitate.frage.nearMiss.habe &&
      drill.frage.zeigt === 'Bei „Familienstand“ kreuzen Sie „ledig“ ____.' &&
      drill.frage.antworten.join(' ') === 'an' && drill.frage.nearMiss.auf &&
      !win.DW.renderers.judgeCloze(drill.frage, 'auf').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[0] && order.frage.finite === 'bin' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Ich' &&
      order.frage.fields.lsk.join(' ') === 'bin' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Ich', 'in', 'Tunis', 'bin', 'geboren.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 31 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de')
          .includes(x.toLocaleLowerCase('de'))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u5-l3 makes 80 percent four of five measurable across genitive, form prefix, birth order, kindergarten case and birthplace case',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u5-l3\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.misconceptionFamilies.a === 'kasus' &&
      clozeCheck.frage.zeigt === 'Bei „Familienstand“ kreuzen Sie „ledig“ ____.' &&
      clozeCheck.frage.antworten.join(' ') === 'an' && clozeCheck.frage.nearMiss.auf &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'auf').ok &&
      orderCheck.frage.correct.join(' ') === targets[0] && orderCheck.frage.finite === 'bin' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Ich' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Ich', 'in', 'Tunis', 'bin', 'geboren.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[2]) &&
      checks[3].frage.misconceptionFamilies.b === 'kasus' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) &&
      checks[4].frage.misconceptionFamilies.a === 'kasus');
}

/* ---------- audited A1 home-and-neighborhood lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u5-l4'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Wir haben ein Apartment gemietet und sind sehr zufrieden.',
    'In unserer Küche fehlt noch der Herd.',
    'Am Kiosk bekommen Sie Zeitungen.',
    'Wir sehen heute Abend im Kino einen Film.',
    'Am Wochenende haben wir mehrere Gäste.'
  ];
  const taughtFacts = [targets[0], targets[1], targets[4], targets[2]];
  t('Corpus lesson a1-u5-l4 bounds home and neighborhood to five complete sentences and four directly taught facts',
    lesson.title.de === 'Zuhause und Nachbarschaft' && lesson.title.ar === 'البيت والجوار' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'السكن والجوار' &&
      row.grammar.item === 'الشقة والموقد والكشك والسينما والضيوف' &&
      lesson.schritte.length === 34 && lesson.wortschatz.length === 28 &&
      ['Apartment', 'Herd', 'Kiosk', 'Kino', 'Gästen'].every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u5-l4 reviews all 28 entries and three qualified mnemonics without artificial appended-pronoun errors or false article and destination absolutes',
    lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      byWord['das Apartment'].ex === targets[0] && byWord['das Apartment'].err.includes('gemietet gemacht') &&
      byWord['der Herd'].ex === targets[1] && byWord['der Herd'].err.includes('die Herd') &&
      byWord['die Halle'].ex === 'Wir treffen uns in Halle B.' && byWord['die Halle'].why.includes('عادةً') &&
      byWord['die Hausfrau'].ex.includes('kauft heute Lebensmittel ein') &&
      byWord['die Heimat'].ex.includes('aus der Schweiz') && byWord['das Feuer'].err.startsWith('Der Feuer') &&
      byWord['der Blick'].ex.startsWith('Vom Hotel aus') &&
      byWord['das Doppelzimmer'].err.includes('eine Einzelzimmer') &&
      byWord['das Einzelzimmer'].err.includes('eine Einzelzimmer') &&
      byWord['die Halbpension'].ex.includes('mit Halbpension') && byWord['die Halbpension'].why.includes('الداتيف') &&
      byWord['die Toilette'].err.startsWith('Wo sind') && byWord['der Kiosk'].ex.startsWith(targets[2]) &&
      byWord['der Ausgang'].err === 'Wo sind der Ausgang?' && byWord.Achtung.de === 'Achtung' &&
      byWord.daneben.why.includes('اسمًا أو ضميرًا') && byWord.dorthin.ex.includes('dorthin stellen') &&
      byWord['draußen'].err.includes('in draußen') && byWord['die Flasche'].err.includes('Flaschen') &&
      byWord['die Kreditkarte'].err.endsWith('zahle?') && byWord['die Zigarette'].ex.includes('Zigaretten') &&
      byWord['die Lebensmittel'].ex.includes('im Supermarkt') && byWord['der Eintritt'].ex.includes('kostet fünf Euro') &&
      byWord['das Kino'].ex === targets[3] && byWord['die Disco'].why.includes('zu يحتاج أداة') &&
      byWord['die Gruppe'].ex.includes('um 16 Uhr') && byWord['das Thema'].ex.includes('über das Thema') &&
      byWord['die Maschine'].ex.includes('nicht sehr breit') && byWord['der Gast'].ex === targets[4] &&
      tricks.length === 3 && tricks[0].wie.includes('steht oft kein Artikel') &&
      tricks[0].warum.includes('in der großen Halle') && tricks[1].wie.includes('dorthin') &&
      tricks[2].wie.includes('Am Kiosk') && tricks[2].wie.includes('Im Kino') &&
      tricks[2].warum.includes('beim Kiosk') && tricks[2].warum.includes('ins Kino') &&
      tricks[2].warum.includes('zur Disco') &&
      !lessonText.includes('die Halle B خطأ') && !lessonText.includes('الأداة الزائدة تربك السامع') &&
      !lessonText.includes('أماكن الشراء الصغيرة لها حروفها') &&
      !lessonText.includes('Toilette es') && !lessonText.includes('Ausgang es') &&
      !lessonText.includes('Kreditkarte zahlen es'));
  const imitate = lesson.schritte.find(s => s.phase === 'Anwenden' && s.frage && s.frage.art === 'cloze');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u5-l4 aligns strict clozes, kitchen order, 35-word writing, speaking, summary and homework',
    imitate.zeigt.de === 'Wir haben ein ____ gemietet und sind sehr zufrieden.' &&
      imitate.frage.antworten.join(' ') === 'Apartment' && imitate.frage.nearMiss.Apartments &&
      drill.frage.zeigt === 'Am Wochenende haben wir mehrere ____.' &&
      drill.frage.antworten.join(' ') === 'Gäste' && drill.frage.nearMiss.Gast &&
      !win.DW.renderers.judgeCloze(drill.frage, 'Gast').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[1] && order.frage.finite === 'fehlt' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'In unserer Küche' &&
      order.frage.fields.lsk.join(' ') === 'fehlt' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['In', 'der', 'Küche', 'noch', 'fehlt', 'der', 'Herd.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 35 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de')
          .includes(x.toLocaleLowerCase('de'))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u5-l4 makes 80 percent four of five measurable across kiosk, guests, stove, apartment and cinema',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u5-l4\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[2]) &&
      checks[0].frage.misconceptionFamilies.a === 'präposition' &&
      clozeCheck.frage.zeigt === 'Am Wochenende haben wir mehrere ____.' &&
      clozeCheck.frage.antworten.join(' ') === 'Gäste' && clozeCheck.frage.nearMiss.Gast &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Gast').ok &&
      orderCheck.frage.correct.join(' ') === targets[1] && orderCheck.frage.finite === 'fehlt' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'In unserer Küche' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['In', 'der', 'Küche', 'noch', 'fehlt', 'der', 'Herd.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) &&
      checks[3].frage.misconceptionFamilies.b === 'lexik-kollokation' &&
      checks[4].frage.optionen.some(o => o.text === targets[3]) &&
      checks[4].frage.misconceptionFamilies.a === 'präposition');
}

/* ---------- audited A1 travel-and-transport lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u5-l5'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Der Zug fährt um zwölf Uhr ab.',
    'Auf welchem Bahnsteig fährt der Zug ab?',
    'Die Ankunft ist um dreizehn Uhr.',
    'Wir müssen noch durch den Zoll.',
    'Ich möchte gern den Dom besichtigen.'
  ];
  const taughtFacts = [targets[0], targets[1], targets[4], targets[2]];
  t('Corpus lesson a1-u5-l5 bounds travel and transport to five complete sentences and four directly taught facts',
    lesson.title.de === 'Reisen und Verkehr' && lesson.title.ar === 'السفر والمواصلات' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'السفر' &&
      row.grammar.item === 'الانطلاق والرصيف والوصول والجمارك وزيارة المعالم' &&
      lesson.schritte.length === 34 && lesson.wortschatz.length === 28 &&
      ['Abfahrt', 'Ankunft', 'Bahnsteig', 'Zoll', 'Besichtigung']
        .every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u5-l5 reviews all 28 entries and three qualified mnemonics without false mitbringen, besuchen, wind-direction or haltet rejections',
    lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      byWord.abfahren.ex === targets[0] && byWord.abfahren.err.includes('abfährt') &&
      byWord['die Abfahrt'].ex.includes('Vor der Abfahrt') && byWord.abfliegen.err === 'Wann du fliegst ab?' &&
      byWord['der Abflug'].ex.includes('um 11.20 Uhr') && byWord['die Ankunft'].ex === targets[2] &&
      byWord['der Bahnsteig'].ex.startsWith(targets[1]) && byWord['der Bahnsteig'].err.includes('Bahnsteigs') &&
      byWord['die S-Bahn'].err.includes('den S-Bahn') && byWord['die Straßenbahn'].err.startsWith('Wo die') &&
      byWord['die Autobahn'].ex.includes('zur Autobahn') && byWord['der Lkw'].err.startsWith('Diese Lkw') &&
      byWord['das Ticket'].ex.startsWith('Wie viel kostet') && byWord['der Ausflug'].ex.includes('Heidelberg') &&
      byWord['die Reise'].ex.includes('nach Österreich') && byWord['das Reisebüro'].ex.includes('im Reisebüro') &&
      byWord['der Reiseführer'].ex.includes('einen Reiseführer für Berlin') &&
      byWord.übernachten.err.endsWith('übernachtet.') && byWord['der Zoll'].ex === targets[3] &&
      byWord['das Gepäck'].ex === 'Nehmen Sie Ihr Gepäck bitte mit.' &&
      byWord['die Sehenswürdigkeit'].ex.includes('In Frankfurt') &&
      byWord.besichtigen.ex === targets[4] && byWord.besichtigen.err.endsWith('besichtige.') &&
      byWord['die Sonne'].err.includes('ist scheinen') && byWord['der Wind'].ex.includes('aus Osten') &&
      byWord.scheinen.err.includes('scheinen die Sonne') && byWord['das Schwimmbad'].ex.includes('ins Schwimmbad') &&
      byWord['der See'].ex.includes('zum Starnberger See') && byWord.wandern.ex.includes('Meistens') &&
      byWord.halten.why.includes('haltet فهي صيغة ihr') && byWord.Grad.err.endsWith('Grade.') &&
      tricks.length === 3 && tricks[0].wie.includes('muss abfahren') &&
      tricks[0].warum.includes('die Abfahrt') && tricks[1].wie.includes('zum Bahnhof mit') &&
      tricks[1].warum.includes('منظور المتكلم') && tricks[2].wie.includes('Auch einen Dom kann man besuchen') &&
      tricks[2].warum.includes('لا نرفضه مطلقًا') &&
      !/[\u0600-\u06FF]/.test(tricks.map(x => x.wie).join(' ')) &&
      !lessonText.includes('Wollen Sie Ihr Gepäck mitbringen?') &&
      !lessonText.includes('Ich möchte gern den Dom besuchen.') &&
      !lessonText.includes('Der Wind kommt von Osten.') &&
      !lessonText.includes('Dieser Lkw ist sehr groß gemacht.') &&
      !lessonText.includes('Die Sonne scheint heute ist.') &&
      !lessonText.includes('Du kannst bei mir übernachten bleiben.'));
  const imitate = lesson.schritte.find(s => s.phase === 'Anwenden' && s.frage && s.frage.art === 'cloze');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u5-l5 aligns strict clozes, platform-question order, 32-word writing, speaking, summary and homework',
    imitate.zeigt.de === 'Der Zug fährt um zwölf Uhr ____.' &&
      imitate.frage.antworten.join(' ') === 'ab' && imitate.frage.nearMiss.an &&
      drill.frage.zeigt === 'Wir müssen noch durch den ____.' &&
      drill.frage.antworten.join(' ') === 'Zoll' && drill.frage.nearMiss.Zolls &&
      !win.DW.renderers.judgeCloze(drill.frage, 'Zolls').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[1] && order.frage.finite === 'fährt' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Auf welchem Bahnsteig' &&
      order.frage.fields.lsk.join(' ') === 'fährt' && order.frage.fields.rsk.join(' ') === 'ab?' &&
      order.frage.rightBracket.join(' ') === 'ab?' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Auf', 'welchem', 'Bahnsteig', 'der', 'Zug', 'fährt', 'ab?']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 32 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de')
          .includes(x.toLocaleLowerCase('de'))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u5-l5 makes 80 percent four of five measurable across arrival, customs, platform, departure and sightseeing',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u5-l5\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[2]) &&
      checks[0].frage.misconceptionFamilies.a === 'präposition' &&
      clozeCheck.frage.zeigt === 'Wir müssen noch durch den ____.' &&
      clozeCheck.frage.antworten.join(' ') === 'Zoll' && clozeCheck.frage.nearMiss.Zolls &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Zolls').ok &&
      orderCheck.frage.correct.join(' ') === targets[1] && orderCheck.frage.finite === 'fährt' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Auf welchem Bahnsteig' &&
      orderCheck.frage.fields.rsk.join(' ') === 'ab?' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Auf', 'welchem', 'Bahnsteig', 'der', 'Zug', 'fährt', 'ab?']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) &&
      checks[3].frage.misconceptionFamilies.b === 'wortstellung' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) &&
      checks[4].frage.misconceptionFamilies.a === 'konjugation');
}

/* ---------- audited A1 word-list review lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a1-u5-l6'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich gratuliere dir zum Geburtstag.',
    'Die Farbe gefällt mir gut.',
    'Ich mache in meiner Freizeit viel Sport.',
    'Darf ich Sie um etwas bitten?',
    'Die Eltern kümmern sich um ihre Kinder.'
  ];
  const taughtFacts = [targets[0], targets[1], targets[2], targets[4]];
  t('Corpus lesson a1-u5-l6 bounds the A1 word-list review to five complete sentences and four directly taught facts',
    lesson.title.de === 'Wortliste A1' && lesson.title.ar === 'مراجعة مفردات A1' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'المراجعة' &&
      row.grammar.item === 'التهنئة والإعجاب والرياضة والطلب والعناية' &&
      lesson.schritte.length === 34 && lesson.wortschatz.length === 28 &&
      ['gratulieren', 'gefallen', 'Sport', 'bitten', 'kümmern']
        .every(x => lesson.schritte[0].zeigt.de.includes(x)) &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x));
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a1-u5-l6 reviews all 28 entries and three qualified mnemonics without appended-pronoun errors or false feeling-verb, Sport and breakfast absolutes',
    lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      byWord['der Sport'].ex === targets[2] && byWord['der Sport'].err.includes('viele Sport') &&
      byWord['das Restaurant'].ex.includes('Hähnchen mit Pommes frites') &&
      byWord['das Lokal'].err.includes('eine neue Lokal') && byWord['der Schinken'].err.includes('ein Schinken') &&
      byWord['das Brötchen'].ex.startsWith('Zum Frühstück') && byWord['das Café'].err.includes('in Café') &&
      byWord['der Appetit'].err === 'Gute Appetit!' && byWord.grillen.ex.startsWith('Heute grillen wir') &&
      byWord['die Polizei'].err.includes('der Polizei') && byWord['das Hobby'].err.startsWith('Mein Hobbys') &&
      byWord['die Freizeit'].ex.includes('Zurzeit') && byWord['der Mund'].ex === 'Öffnen Sie den Mund.' &&
      byWord['das Haar'].err.includes('langer Haare') && byWord['die Farbe'].ex === targets[1] &&
      byWord.verboten.err.startsWith('Hier sind') && byWord.erlauben.ex.startsWith('Der Arzt erlaubt mir') &&
      byWord.empfehlen.err.includes('mich empfehlen') && byWord.bitten.ex === targets[3] &&
      byWord['die Entschuldigung'].err.startsWith('Entschuldigungen') &&
      byWord['der Erwachsene'].err.endsWith('für Erwachsen.') && byWord['das Lied'].err.endsWith('hören.') &&
      byWord.lachen.err === 'Die Kinder lacht viel.' &&
      byWord['der Glückwunsch'].err.startsWith('Herzliche Glückwunsch') &&
      byWord.gratulieren.ex === targets[0] && byWord['das Glück'].err === 'Viele Glück!' &&
      byWord['der Lieblingsfilm'].err.startsWith('Meine Lieblingsfilm') &&
      byWord['sich kümmern'].ex === targets[4] && byWord['das Ausland'].ex === 'Fahren Sie ins Ausland?' &&
      tricks.length === 3 && tricks[0].wie.includes('Nicht dich und nicht mich') &&
      tricks[0].warum.includes('لا نعمّم') && tricks[1].wie.includes('Ich spiele Fußball') &&
      tricks[1].warum.includes('für das Frühstück') && tricks[2].wie.startsWith(targets[4]) &&
      !/[\u0600-\u06FF]/.test(tricks.map(x => x.wie).join(' ')) &&
      !lessonText.includes('Restaurant es') && !lessonText.includes('Appetit dir es') &&
      !lessonText.includes('empfehlen es') && !lessonText.includes('gern viel machen') &&
      !lessonText.includes('den „Schwarze Augen“ es') &&
      !lessonText.includes('أفعال المشاعر تأخذ Dativ') &&
      !lessonText.includes('الرياضة تُصنع بـ machen لا تُلعب بـ spielen'));
  const imitate = lesson.schritte.find(s => s.phase === 'Anwenden' && s.frage && s.frage.art === 'cloze');
  const drill = lesson.schritte.find(s => s.id === 's20');
  const order = lesson.schritte.find(s => s.id === 's21');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a1-u5-l6 aligns strict clozes, congratulation order, 30-word writing, speaking, summary and homework',
    imitate.zeigt.de === 'Ich gratuliere ____ zum Geburtstag.' &&
      imitate.frage.antworten.join(' ') === 'dir' && imitate.frage.nearMiss.dich &&
      drill.frage.zeigt === 'Darf ich Sie um etwas ____?' &&
      drill.frage.antworten.join(' ') === 'bitten' && drill.frage.nearMiss.bittet &&
      !win.DW.renderers.judgeCloze(drill.frage, 'bittet').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[0] && order.frage.finite === 'gratuliere' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Ich' &&
      order.frage.fields.lsk.join(' ') === 'gratuliere' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Ich', 'dir', 'gratuliere', 'zum', 'Geburtstag.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 30 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de')
          .includes(x.toLocaleLowerCase('de'))));
  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a1-u5-l6 makes 80 percent four of five measurable across care, request, congratulation, Sport and gefallen',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks.every(s => /^cap\.a1-u5-l6\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) &&
      checks[0].frage.misconceptionFamilies.a === 'präposition' &&
      clozeCheck.frage.zeigt === 'Darf ich Sie um etwas ____?' &&
      clozeCheck.frage.antworten.join(' ') === 'bitten' && clozeCheck.frage.nearMiss.bittet &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'bittet').ok &&
      orderCheck.frage.correct.join(' ') === targets[0] && orderCheck.frage.finite === 'gratuliere' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Ich' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Ich', 'dir', 'gratuliere', 'zum', 'Geburtstag.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[2]) &&
      checks[3].frage.misconceptionFamilies.b === 'deklination' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) &&
      checks[4].frage.misconceptionFamilies.a === 'kasus');
}

/* ---------- audited A2 Dativ lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u1-l1'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich helfe dem Nachbarn im Garten.',
    'Ich danke der Lehrerin für ihre Hilfe.',
    'Ich gebe dem Kind ein Buch.',
    'Die Wohnung gefällt den Kindern.',
    'Ich fahre mit dem Bus zur Arbeit.'
  ];
  const taughtFacts = [targets[0], targets[1], targets[2], targets[3]];
  t('Corpus lesson a2-u1-l1 bounds Dativ to five complete targets and four directly taught article facts',
    lesson.title.de === 'Dativ' && lesson.title.ar === 'حالة الداتيف' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الإعطاء' &&
      row.grammar.item === 'المذكر والمؤنث والمحايد والجمع وحرف mit' &&
      lesson.schritte.length === 35 && lesson.wortschatz.length === 32 &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte[0].erklaerung.includes('خمس جمل داتيف كاملة'));

  const expectedWords = [
    'helfen', 'danken', 'gefallen', 'gehören', 'der Nachbar', 'die Nachbarin', 'der Kollege',
    'mit dem Bus', 'nach dem Essen', 'seit einem Jahr', 'von der Arbeit', 'zu dem Termin',
    'bei der Firma', 'aus der Schweiz', 'gegenüber', 'die Möglichkeit', 'der Termin',
    'die Antwort', 'das Ergebnis', 'der Kunde', 'die Firma', 'der Kollege aus Tunis',
    'die Lehrerin', 'der Chef', 'das Geschenk', 'die Wohnung', 'liefern', 'nennen',
    'beschreiben', 'der Comic', 'die Notiz', 'das Paar'
  ];
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u1-l1 reviews all 32 entries and three precise mnemonics without ambiguous den or artificial falsch examples',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord.helfen.ex === targets[0] && byWord.helfen.err.includes('die Nachbarn') &&
      byWord.danken.ex === 'Ich danke der Nachbarin.' && byWord.gefallen.ex.includes('meiner Frau') &&
      byWord.gehören.ar === 'يخصّ/يعود إلى' && byWord['der Nachbar'].err.includes('dem Nachbar') &&
      byWord['die Nachbarin'].err.includes('die Nachbarin') &&
      byWord['der Kollege'].err.includes('dem Kollege') && byWord['mit dem Bus'].ex === targets[4] &&
      byWord['nach dem Essen'].ex.startsWith('Nach dem Essen') &&
      byWord['seit einem Jahr'].ex.includes('seit einem Jahr') &&
      byWord['von der Arbeit'].ex.includes('von der Arbeit') &&
      byWord['zu dem Termin'].why.includes('zum') && byWord['bei der Firma'].ex.includes('Firma Huber') &&
      byWord['aus der Schweiz'].ex.includes('aus der Schweiz') &&
      byWord.gegenüber.ex.includes('gegenüber dem Bahnhof') &&
      byWord['die Möglichkeit'].ex.includes('gefällt dem Chef') &&
      byWord['der Termin'].ex === 'Der Termin passt der Kundin gut.' &&
      byWord['der Termin'].err === 'Der Termin passt die Kundin gut.' &&
      byWord['die Antwort'].ex.includes('gefällt der Kundin') &&
      byWord['das Ergebnis'].ex.includes('der Gruppe') && byWord['der Kunde'].err.includes('dem Kunde') &&
      byWord['die Firma'].ex.includes('der Firma') && byWord['der Kollege aus Tunis'].err.includes('hilft mich') &&
      byWord['die Lehrerin'].ex === targets[1] && byWord['der Chef'].ex.includes('dem Chef') &&
      byWord['das Geschenk'].ex.includes('gefällt der Familie') && byWord['die Wohnung'].ex === targets[3] &&
      byWord.liefern.ex.includes('liefert mir') && byWord.nennen.ex.includes('mir den Namen') &&
      byWord.beschreiben.ex.includes('Sie mir bitte') && byWord['der Comic'].ar === 'القصة المصوّرة' &&
      byWord['die Notiz'].ex.includes('gehört meiner Schwester') && byWord['das Paar'].ex.includes('dem Paar') &&
      tricks.length === 3 && tricks[0].trick.includes('dem للمذكر والمحايد') &&
      tricks[0].warum.includes('إذا أمكن') && tricks[1].trick.includes('ثمانية حروف جرّ') &&
      tricks[1].wie.includes('gegenüber dem Bahnhof') && tricks[1].warum.includes('zum') &&
      tricks[2].trick.includes('helfen') && tricks[2].warum.includes('هذه الأفعال الأربعة') &&
      !lessonText.includes('den Mann geben falsch') && !lessonText.includes('die Frau helfen falsch') &&
      !lessonText.includes('das Kind geben als Dativ') && !lessonText.includes('Ich sage dem Termin ab.') &&
      !lessonText.includes('سبعة حروف'));

  const imitate = lesson.schritte.find(s => s.id === 's17');
  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u1-l1 aligns strict clozes, simple object order, 31-word writing, speaking, summary and homework',
    wordCloze1.frage.zeigt === 'Ich danke der ____.' &&
      wordCloze1.frage.antworten.join(' ') === 'Nachbarin' && wordCloze1.frage.nearMiss.Nachbarinnen &&
      !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Nachbarinnen').ok &&
      wordCloze2.frage.zeigt === 'Der Kollege aus Tunis hilft ____ oft.' &&
      wordCloze2.frage.antworten.join(' ') === 'mir' && wordCloze2.frage.nearMiss.mich &&
      !win.DW.renderers.judgeCloze(wordCloze2.frage, 'mich').ok &&
      imitate.zeigt.de === 'Ich helfe ____ Nachbarn im Garten.' &&
      imitate.frage.antworten.join(' ') === 'dem' && imitate.frage.nearMiss.die &&
      drill.frage.zeigt === 'Ich fahre mit ____ Bus zur Arbeit.' &&
      drill.frage.antworten.join(' ') === 'dem' && drill.frage.nearMiss.der &&
      !win.DW.renderers.judgeCloze(drill.frage, 'der').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'gebe' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Ich' &&
      order.frage.fields.lsk.join(' ') === 'gebe' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Ich', 'dem', 'Kind', 'gebe', 'ein', 'Buch.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 31 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de')
          .includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u1-l1 makes 80 percent four of five measurable across plural, mit, neuter, masculine and feminine Dativ',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u1-l1\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.misconceptionFamilies.a === 'kasus' &&
      clozeCheck.frage.zeigt === 'Ich fahre mit ____ Bus zur Arbeit.' &&
      clozeCheck.frage.antworten.join(' ') === 'dem' && clozeCheck.frage.nearMiss.der &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'der').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'gebe' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Ich' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Ich', 'dem', 'Kind', 'gebe', 'ein', 'Buch.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) &&
      checks[3].frage.misconceptionFamilies.b === 'kasus' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) &&
      checks[4].frage.misconceptionFamilies.a === 'kasus');
}

/* ---------- audited A2 Dativ-verb lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u1-l2'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Kannst du mir bitte helfen?',
    'Ich gebe dir das Buch.',
    'Das Buch gehört mir.',
    'Der Termin passt mir gut.',
    'Wir zeigen dem Kunden die Ware.'
  ];
  const taughtFacts = [targets[0], targets[2], targets[4], targets[3]];
  t('Corpus lesson a2-u1-l2 bounds Dativ verbs to five complete targets and four directly taught patterns',
    lesson.title.de === 'Verben mit Dativ' && lesson.title.ar === 'أفعال مع الداتيف' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'المساعدة' &&
      row.grammar.item === 'helfen وgeben وgehören وpassen وzeigen' &&
      lesson.schritte.length === 35 && lesson.wortschatz.length === 31 &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte[0].erklaerung.includes('خمسة أفعال مع الداتيف'));

  const expectedWords = [
    'geben', 'schenken', 'zeigen', 'bringen', 'empfehlen', 'erklären', 'wünschen', 'schicken',
    'leihen', 'verbieten', 'erlauben', 'antworten', 'folgen', 'passen', 'schmecken', 'wehtun',
    'leidtun', 'fehlen', 'zustimmen', 'der Kunde', 'die Kundin', 'der Chef', 'die Sekretärin',
    'der Onkel', 'die Tante', 'die Gäste', 'auspacken', 'austauschen', 'das Gerät', 'die Kunst',
    'der Laptop'
  ];
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u1-l2 reviews all 31 entries and three qualified mnemonics without false fixed-order, movement or closed-class claims',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord.geben.ex === targets[1] && byWord.schenken.ex.includes('ihr eine Blume') &&
      byWord.zeigen.ex === 'Zeig mir bitte den Weg.' && byWord.bringen.ex.includes('dir einen Kaffee') &&
      byWord.empfehlen.ar === 'يوصي بـ' && byWord.erklären.ex === 'Er erklärt mir die Regel.' &&
      byWord.wünschen.ex.includes('dir viel Glück') && byWord.schicken.ex.includes('meiner Schwester') &&
      byWord.leihen.ex.includes('mir zehn Euro') && byWord.verbieten.ex.includes('mir das Rauchen') &&
      byWord.erlauben.ex.includes('dem Kind eine Pause') && byWord.antworten.ex.startsWith('Antworte mir') &&
      byWord.folgen.pl.endsWith('ist gefolgt') && byWord.passen.ex === targets[3] &&
      byWord.schmecken.ex.includes('schmeckt dem Kind') && byWord.wehtun.pl.endsWith('hat wehgetan') &&
      byWord.leidtun.pl.endsWith('hat leidgetan') && byWord.fehlen.err.startsWith('Mich fehlt') &&
      byWord.fehlen.why.includes('Ich fehle heute im Kurs') &&
      byWord.zustimmen.ex.includes('stimme dir zu') && byWord['der Kunde'].ex === targets[4] &&
      byWord['der Kunde'].err.includes('dem Kunde') && byWord['die Kundin'].ex.includes('der Kundin') &&
      byWord['der Chef'].ex.includes('dem Chef') && byWord['die Sekretärin'].ex.includes('der Sekretärin') &&
      byWord['der Onkel'].ex.includes('dem Onkel') && byWord['die Tante'].ex.includes('der Tante') &&
      byWord['die Gäste'].ex.includes('den Gästen') && byWord.auspacken.ar === 'يفكّ التغليف' &&
      byWord.austauschen.ar === 'يتبادل/يستبدل' && byWord['das Gerät'].err.includes('dem Nachbar') &&
      byWord['die Kunst'].ex.includes('gefällt meiner Mutter') && byWord['der Laptop'].ex.includes('gehört mir') &&
      tricks.length === 3 && tricks[0].trick.includes('المستلم داتيف والشيء نصب') &&
      tricks[0].wie.includes('Geben hat zwei Objekte') && tricks[0].wie.includes('heißen Dativverben') &&
      tricks[0].warum.includes('ليس ترتيبًا ثابتًا مطلقًا') && tricks[1].trick.includes('wehtun') &&
      tricks[1].wie.includes('Ich fehle heute im Kurs') && tricks[1].warum.includes('بدل تعميم القاعدة') &&
      tricks[2].trick.includes('dem Kunden') &&
      tricks[2].warum.includes('يتغير الاسم نفسه') &&
      !lessonText.includes('helfen plus Dativ') && !lessonText.includes('den Mann helfen') &&
      !lessonText.includes('Das Buch gehört der Mann falsch') && !lessonText.includes('Person vor Sache.') &&
      !lessonText.includes('الفعل يتحرك بـ sein') && !lessonText.includes('هذه مجموعة مغلقة'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u1-l2 aligns strict clozes, simple ownership order, 25-word writing, speaking, summary and homework',
    wordCloze1.frage.zeigt === 'Er erklärt ____ die Regel.' &&
      wordCloze1.frage.antworten.join(' ') === 'mir' && wordCloze1.frage.nearMiss.mich &&
      !win.DW.renderers.judgeCloze(wordCloze1.frage, 'mich').ok &&
      wordCloze2.frage.zeigt === 'Ich zeige dem ____ den Bericht.' &&
      wordCloze2.frage.antworten.join(' ') === 'Chef' && wordCloze2.frage.nearMiss.Chefs &&
      !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Chefs').ok &&
      imitate.zeigt.de === 'Ich gebe ____ das Buch.' &&
      imitate.frage.antworten.join(' ') === 'dir' && imitate.frage.nearMiss.dich &&
      !win.DW.renderers.judgeCloze(imitate.frage, 'dich').ok &&
      drill.frage.zeigt === 'Wir zeigen dem ____ die Ware.' &&
      drill.frage.antworten.join(' ') === 'Kunden' && drill.frage.nearMiss.Kunde &&
      !win.DW.renderers.judgeCloze(drill.frage, 'Kunde').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'gehört' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Das Buch' &&
      order.frage.fields.lsk.join(' ') === 'gehört' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Das', 'gehört', 'Buch', 'mir.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 25 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de')
          .includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u1-l2 makes 80 percent four of five measurable across passen, Kunden, gehören, geben and helfen',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u1-l2\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.misconceptionFamilies.a === 'kasus' &&
      clozeCheck.frage.zeigt === 'Wir zeigen dem ____ die Ware.' &&
      clozeCheck.frage.antworten.join(' ') === 'Kunden' && clozeCheck.frage.nearMiss.Kunde &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Kunde').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'gehört' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Das Buch' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Das', 'gehört', 'Buch', 'mir.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[1]) &&
      checks[3].frage.misconceptionFamilies.b === 'kasus' &&
      checks[4].frage.optionen.some(o => o.text === targets[0]) &&
      checks[4].frage.misconceptionFamilies.a === 'kasus');
}

/* ---------- audited A2 two-way-preposition lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u1-l3'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Das Bild hängt an der Wand.',
    'Ich hänge das Bild an die Wand.',
    'Das Buch liegt auf dem Tisch.',
    'Ich lege das Buch auf den Tisch.',
    'Ich stelle die Bücher ins Regal.'
  ];
  const taughtFacts = [targets[0], targets[1], targets[3], targets[4]];
  t('Corpus lesson a2-u1-l3 bounds two-way prepositions to five complete place and destination targets',
    lesson.title.de === 'Wechselpräpositionen' && lesson.title.ar === 'حروف الجرّ ثنائية الحالة' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'المكان والوجهة' &&
      row.grammar.item === 'Wo + Dativ وWohin + Akkusativ مع an وauf وin' &&
      lesson.schritte.length === 35 && lesson.wortschatz.length === 31 &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte[0].erklaerung.includes('الداتيف للمكان ومع النصب للوجهة'));

  const expectedWords = [
    'an der Wand', 'an die Wand', 'auf dem Tisch', 'auf den Tisch', 'in der Küche',
    'in die Küche', 'über dem Bett', 'unter dem Tisch', 'vor der Tür', 'hinter dem Haus',
    'neben dem Sofa', 'zwischen den Stühlen', 'hängen', 'legen', 'liegen', 'stellen', 'stehen',
    'setzen', 'sitzen', 'stecken', 'der Schrank', 'das Regal', 'der Teppich', 'die Ecke',
    'der Balkon', 'der Boden', 'drinnen', 'nebenan', 'die Postkarte', 'die Schere', 'das Tablet'
  ];
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u1-l3 reviews all 31 entries and three precise mnemonics without the false motion rule, case table contradiction or artificial nebenan error',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['an der Wand'].ex === targets[0] &&
      byWord['an die Wand'].ex === 'Wohin hängst du das Bild? – Ich hänge es an die Wand.' &&
      byWord['an die Wand'].err === 'Wohin hängst du das Bild? – Ich hänge es an der Wand.' &&
      byWord['auf dem Tisch'].ex.includes('liegt auf dem Tisch') &&
      byWord['auf den Tisch'].ex.includes('lege den Schlüssel auf den Tisch') &&
      byWord['in der Küche'].ex === 'Wir essen in der Küche.' &&
      byWord['in die Küche'].err.startsWith('Wohin gehst du?') &&
      byWord['in die Küche'].why.includes('in der Küche فتصف مكان الحركة') &&
      byWord['über dem Bett'].ex.includes('hängt über dem Bett') &&
      byWord['unter dem Tisch'].ex.includes('steht unter dem Tisch') &&
      byWord['vor der Tür'].ex.includes('steht vor der Tür') &&
      byWord['hinter dem Haus'].ex.includes('ist hinter dem Haus') &&
      byWord['neben dem Sofa'].ex.includes('steht neben dem Sofa') &&
      byWord['zwischen den Stühlen'].ex.includes('liegt zwischen den Stühlen') &&
      byWord.hängen.pl.endsWith('hat gehangen') && byWord.legen.ar === 'يضع أفقيًا' &&
      byWord.liegen.ex === targets[2] && byWord.stellen.err.includes('in der Kühlschrank') &&
      byWord.stehen.ex.includes('steht im Kühlschrank') && byWord.setzen.ex.includes('auf den Stuhl') &&
      byWord.sitzen.ex.includes('auf dem Stuhl') && byWord.stecken.ex.includes('steckt in der Tür') &&
      byWord['der Schrank'].why.includes('داخل الخزانة') && byWord['das Regal'].ex === targets[4] &&
      byWord['der Teppich'].ex.includes('liegt auf dem Boden') && byWord['die Ecke'].ex.includes('in der Ecke') &&
      byWord['der Balkon'].ex.includes('auf dem Balkon') && byWord['der Boden'].ex.includes('auf dem Boden') &&
      byWord.drinnen.ex.startsWith('Bei Regen') && byWord.nebenan.ex === 'Der Nachbar wohnt nebenan.' &&
      byWord.nebenan.err === 'Der Nachbar wohnt neben an.' &&
      byWord['die Postkarte'].ar === 'البطاقة البريدية' && byWord['die Schere'].ex.includes('auf dem Tisch') &&
      byWord['das Tablet'].ex === 'Das Tablet liegt neben dem Sofa.' &&
      tricks.length === 3 && tricks[0].trick.includes('حروف الجرّ ثنائية الحالة') &&
      tricks[0].warum.includes('يخص حروف الجرّ ثنائية الحالة') &&
      tricks[1].trick.includes('لا الحركة وحدها') && tricks[1].wie.includes('Bewegung, aber Wo') &&
      tricks[1].warum.includes('وجود الحركة وحده لا يحدد الحالة') &&
      tricks[2].trick.includes('am وim للداتيف') && tricks[2].wie.includes('in das = ins') &&
      tricks[2].warum.includes('den فقد يكون مذكر النصب أو جمع الداتيف') &&
      !lessonText.includes('الفعل المتحرك يأخذ نصبًا والساكن داتيفًا') &&
      !lessonText.includes('في الداتيف: dem · der · dem · den') &&
      !lessonText.includes('السكون في الشهر') && !lessonText.includes('فالتاء نصب') &&
      !lessonText.includes('hilft immer an') &&
      !lessonText.includes('Ich hänge das Bild an der Wand.') &&
      !lessonText.includes('Ich lege das Buch auf dem Tisch.'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u1-l3 aligns strict clozes, one destination order, 32-word writing, speaking, summary and homework',
    wordCloze1.frage.zeigt === 'Ich gehe in ____ Küche.' &&
      wordCloze1.frage.antworten.join(' ') === 'die' && wordCloze1.frage.nearMiss.der &&
      !win.DW.renderers.judgeCloze(wordCloze1.frage, 'der').ok &&
      wordCloze2.frage.zeigt === 'Ich stelle die Bücher ins ____.' &&
      wordCloze2.frage.antworten.join(' ') === 'Regal' && wordCloze2.frage.nearMiss.Regale &&
      !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Regale').ok &&
      imitate.zeigt.de === 'Das Bild hängt an ____ Wand.' &&
      imitate.frage.antworten.join(' ') === 'der' && imitate.frage.nearMiss.die &&
      !win.DW.renderers.judgeCloze(imitate.frage, 'die').ok &&
      drill.frage.zeigt === 'Wohin hängst du das Bild? – Ich hänge es an ____ Wand.' &&
      drill.frage.antworten.join(' ') === 'die' && drill.frage.nearMiss.der &&
      !win.DW.renderers.judgeCloze(drill.frage, 'der').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[3] && order.frage.finite === 'lege' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Ich' &&
      order.frage.fields.lsk.join(' ') === 'lege' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Ich', 'das', 'Buch', 'lege', 'auf', 'den', 'Tisch.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 32 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de')
          .includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u1-l3 makes 80 percent four of five measurable across ins Regal, an die, auf den, an der and auf dem',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u1-l3\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) &&
      checks[0].frage.optionen.some(o => o.text === 'Ich stelle die Bücher in den Regal.') &&
      checks[0].frage.misconceptionFamilies.a === 'präposition' &&
      clozeCheck.frage.zeigt === 'Wohin hängst du das Bild? – Ich hänge es an ____ Wand.' &&
      clozeCheck.frage.antworten.join(' ') === 'die' && clozeCheck.frage.nearMiss.der &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'der').ok &&
      orderCheck.frage.correct.join(' ') === targets[3] && orderCheck.frage.finite === 'lege' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Ich' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Ich', 'das', 'Buch', 'lege', 'auf', 'den', 'Tisch.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) &&
      checks[3].frage.misconceptionFamilies.b === 'präposition' &&
      checks[4].frage.optionen.some(o => o.text === targets[2]) &&
      checks[4].frage.misconceptionFamilies.a === 'präposition');
}

/* ---------- audited A2 weil and denn lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u1-l4'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich komme nicht, weil ich krank bin.',
    'Ich lerne viel, weil die Prüfung morgen ist.',
    'Er kommt früher, weil er pünktlich sein will.',
    'Der Bus kommt später, weil ein Verkehrsunfall passiert ist.',
    'Ich komme nicht, denn ich bin krank.'
  ];
  const taughtFacts = [targets[0], targets[1], targets[3], targets[4]];
  t('Corpus lesson a2-u1-l4 bounds reason clauses to five complete weil and denn targets',
    lesson.title.de === 'Gründe mit weil' && lesson.title.ar === 'التعليل بـ weil' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'السبب' &&
      row.grammar.item === 'weil: الفعل المصرف في النهاية · denn: ترتيب جملة رئيسية · deshalb: بعدها الفعل المصرف مباشرة' &&
      lesson.schritte.length === 35 && lesson.wortschatz.length === 31 &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte[0].zeigt.de.includes('finiten Verb am Ende') &&
      lesson.schritte[0].zeigt.de.includes('denn und deshalb mit Verbzweitstellung'));

  const expectedWords = [
    'weil', 'denn', 'die Prüfung', 'der Verkehr', 'die Miete', 'der Lärm', 'das Wetter',
    'der Termin', 'die Erkältung', 'gefährlich', 'wichtig', 'pünktlich', 'bequem', 'ruhig',
    'sauber', 'günstig', 'die Sprache', 'die Arbeit', 'der Preis', 'das Zimmer',
    'der Unterricht', 'die Nachricht', 'das Geld', 'die Familie', 'der Verkehrsunfall',
    'die Kinderbetreuung', 'meistens', 'endlich', 'stressig', 'der Stress', 'die Ruhe'
  ];
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u1-l4 reviews all 31 entries and three precise mnemonics without word salad or L1 generalizations',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord.weil.ex === targets[0] && byWord.weil.why.includes('الفعل المصرف bin') &&
      byWord.denn.ex === targets[4] && byWord.denn.ar.includes('ترتيب الجملة الرئيسية') &&
      byWord['die Prüfung'].ex === targets[1] && byWord['der Verkehr'].ex.includes('weil viel Verkehr ist') &&
      byWord['die Miete'].ex.includes('Miete zu hoch ist') && byWord['der Lärm'].ex.includes('draußen viel Lärm ist') &&
      byWord['das Wetter'].ex.includes('Wetter schlecht ist') && byWord['der Termin'].ex.includes('sage den Termin ab') &&
      byWord['die Erkältung'].ex.includes('eine Erkältung habe') && byWord.gefährlich.ex.includes('gefährlich ist') &&
      byWord.wichtig.ex.includes('Sache wichtig ist') && byWord.pünktlich.ex === targets[2] &&
      byWord.pünktlich.ar.includes('في الموعد') && byWord.bequem.ex.includes('bequem ist') &&
      byWord.ruhig.ex.includes('Straße ruhig ist') && byWord.sauber.ex.includes('sie sauber ist') &&
      byWord.günstig.ar === 'مناسب السعر/زهيد' && byWord.günstig.ex.includes('Ticket') &&
      byWord['die Sprache'].ex.includes('Sprache für die Arbeit brauche') &&
      byWord['die Arbeit'].ex.includes('viel Arbeit hat') && byWord['der Preis'].ex.includes('Handy nicht') &&
      byWord['das Zimmer'].ex.includes('es hell ist') && byWord['der Unterricht'].ex.includes('um acht beginnt') &&
      byWord['die Nachricht'].ar === 'الخبر/الرسالة' && byWord['die Nachricht'].ex.includes('freut sich') &&
      byWord['das Geld'].ex.includes('das Geld braucht') && byWord['die Familie'].ex.includes('große Wohnung') &&
      byWord['der Verkehrsunfall'].ex === targets[3] && byWord['die Kinderbetreuung'].ex.includes('keine Kinderbetreuung hat') &&
      byWord.meistens.ex.includes('weil ich kein Auto habe') && byWord.endlich.ex === 'Endlich sind die Ferien da!' &&
      byWord.stressig.ex.includes('Woche stressig ist') && byWord['der Stress'].ex.includes('morgen eine Prüfung hat') &&
      byWord['die Ruhe'].ex.includes('morgen früh aufstehe') &&
      tricks.length === 3 && tricks[0].trick.includes('weil: الفعل المصرف في النهاية') &&
      tricks[0].trick.includes('denn: ترتيب جملة رئيسية') &&
      tricks[0].trick.includes('deshalb: بعدها الفعل المصرف مباشرة') &&
      tricks[0].wie.includes('deshalb komme ich nicht') &&
      tricks[1].wie.includes('arbeiten muss') && tricks[1].wie.includes('gelernt habe') &&
      tricks[1].wie.includes('passiert ist') && tricks[1].wie.includes('sein will') &&
      tricks[2].trick.includes('قبل جملة weil اللاحقة فاصلة') && tricks[2].wie.includes('Warum') &&
      tricks[2].warum.includes('Weil بحرف كبير') &&
      !lessonText.includes('العربية تصل السبب بلا ترتيب') &&
      !lessonText.includes('العربية تبدأ بالحكم ثم تشرح') &&
      !lessonText.includes('المساعد ثم... لا') &&
      !lessonText.includes('weil ich habe gelernt falsch gestellt') &&
      !lessonText.includes('deshalb bleibt V2') && !lessonText.includes('kein Verbzweit'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u1-l4 aligns strict clozes, one Perfekt order, 39-word writing, speaking, summary and homework',
    wordCloze1.frage.zeigt === 'Ich kann nicht schlafen, weil draußen viel ____ ist.' &&
      wordCloze1.frage.antworten.join(' ') === 'Lärm' && wordCloze1.frage.nearMiss.Lärme &&
      !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Lärme').ok &&
      wordCloze2.frage.zeigt === 'Sie freut sich, weil die ____ gut ist.' &&
      wordCloze2.frage.antworten.join(' ') === 'Nachricht' && wordCloze2.frage.nearMiss.Nachrichten &&
      !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Nachrichten').ok &&
      imitate.zeigt.de === 'Ich komme nicht, weil ich krank ____.' &&
      imitate.frage.antworten.join(' ') === 'bin' && imitate.frage.nearMiss.ist &&
      !win.DW.renderers.judgeCloze(imitate.frage, 'ist').ok &&
      drill.frage.zeigt === 'Er kommt früher, weil er ____ sein will.' &&
      drill.frage.antworten.join(' ') === 'pünktlich' && drill.frage.nearMiss.pünktliche &&
      !win.DW.renderers.judgeCloze(drill.frage, 'pünktliche').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[3] && order.frage.finite === 'kommt' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Der Bus' &&
      order.frage.fields.lsk.join(' ') === 'kommt' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Der', 'Bus', 'später,', 'weil', 'ein', 'Verkehrsunfall', 'passiert', 'ist.', 'kommt']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 39 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de')
          .includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u1-l4 makes 80 percent four of five measurable across denn, pünktlich, Perfekt, bin and morgen ist',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u1-l4\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) &&
      checks[0].frage.optionen.some(o => o.text === 'Ich komme nicht, denn ich krank bin.') &&
      checks[0].frage.misconceptionFamilies.a === 'wortstellung' &&
      clozeCheck.frage.zeigt === 'Er kommt früher, weil er ____ sein will.' &&
      clozeCheck.frage.antworten.join(' ') === 'pünktlich' && clozeCheck.frage.nearMiss.pünktliche &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'pünktliche').ok &&
      orderCheck.frage.correct.join(' ') === targets[3] && orderCheck.frage.finite === 'kommt' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Der Bus' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Der', 'Bus', 'später,', 'weil', 'ein', 'Verkehrsunfall', 'passiert', 'ist.', 'kommt']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) &&
      checks[3].frage.misconceptionFamilies.b === 'wortstellung' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) &&
      checks[4].frage.misconceptionFamilies.a === 'wortstellung');
}

/* ---------- audited A2 dass lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u1-l5'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich denke, dass die Idee gut ist.',
    'Ich weiß, dass der Termin morgen ist.',
    'Er meint, dass wir warten sollen.',
    'Sie sagt, dass sie die Rechnung bezahlt hat.',
    'Ich hoffe, dass du morgen anrufst.'
  ];
  const taughtFacts = [targets[0], targets[1], targets[3], targets[4]];
  t('Corpus lesson a2-u1-l5 bounds dass clauses to five complete simple, modal, Perfekt and separable-verb targets',
    lesson.title.de === 'Aussagen mit dass' && lesson.title.ar === 'نقل الأقوال والأفكار بـ dass' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الأقوال والأفكار' &&
      row.grammar.item === 'dass: الفعل المصرف في النهاية مع modal وPerfekt والفعل المنفصل' &&
      lesson.schritte.length === 35 && lesson.wortschatz.length === 31 &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte[0].zeigt.de === 'Am Ende leitest du einen dass-Satz ein und stellst das finite Verb ans Ende');

  const expectedWords = [
    'dass', 'denken', 'glauben', 'hoffen', 'sagen', 'wissen', 'finden', 'meinen',
    'die Meinung', 'die Nachricht', 'die Wahrheit', 'die Idee', 'die Chance',
    'das Gefühl', 'der Grund', 'das Angebot', 'die Rechnung', 'die Entscheidung',
    'das Problem', 'die Lösung', 'der Kollege', 'die Wohnung', 'das Wetter',
    'die Zeit', 'die Sprache', 'der Kurs', 'jemand', 'anders', 'die Sache',
    'das Ziel', 'der Service'
  ];
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u1-l5 reviews all 31 entries and three precise mnemonics without English contamination or false subordinate-clause generalizations',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord.dass.ex === targets[0] && byWord.dass.ar === 'أنّ/أن' &&
      byWord.denken.ex === targets[0] && byWord.glauben.ex.includes('dass sie recht hat') &&
      byWord.hoffen.ex === targets[4] && byWord.hoffen.why.includes('anrufst في النهاية') &&
      byWord.sagen.ex === targets[3] && byWord.wissen.ex === 'Ich weiß genau, dass der Termin morgen ist.' &&
      byWord.finden.ex.includes('Wohnung zu klein ist') && byWord.meinen.ex === targets[2] &&
      byWord.meinen.why.includes('warten قبل الفعل المصرف sollen') &&
      byWord['die Meinung'].ex.includes('Plan zu teuer ist') &&
      byWord['die Nachricht'].ar === 'الخبر/الرسالة' && byWord['die Nachricht'].ex.includes('Kurs ausfällt') &&
      byWord['die Wahrheit'].ex.includes('die Wahrheit sagt') && byWord['die Idee'].ex.includes('gute Idee hat') &&
      byWord['die Chance'].ex.includes('noch eine Chance haben') &&
      byWord['das Gefühl'].ex === 'Ich habe das Gefühl, dass etwas nicht stimmt.' &&
      byWord['der Grund'].ex.includes('einen guten Grund hat') && byWord['das Angebot'].ex.includes('Angebot günstig ist') &&
      byWord['die Rechnung'].ex === targets[3] && byWord['die Entscheidung'].ex.includes('Entscheidung richtig ist') &&
      byWord['das Problem'].ex.includes('Problem ernst ist') && byWord['die Lösung'].ex.includes('Lösung einfach ist') &&
      byWord['der Kollege'].ex.includes('Kollege heute fehlt') && byWord['die Wohnung'].ex.includes('Wohnung noch frei ist') &&
      byWord['das Wetter'].ex.includes('Wetter morgen besser ist') && byWord['die Zeit'].ex.includes('wenig Zeit haben') &&
      byWord['die Sprache'].ex.includes('Sprache schön klingt') && byWord['der Kurs'].ex.includes('Kurs im Mai beginnt') &&
      byWord.jemand.ex.includes('jemand an der Tür wartet') && byWord.anders.ex.includes('anders denkt') &&
      byWord['die Sache'].ex.includes('Sache wichtig ist') && byWord['das Ziel'].ex.includes('Ziel wichtig ist') &&
      byWord['der Service'].ex.includes('Service gut funktioniert') &&
      tricks.length === 3 && tricks[0].trick.includes('فاصلة، ثم الفعل المصرف في النهاية') &&
      tricks[0].wie.includes(targets[0]) && tricks[0].wie.includes(targets[4]) &&
      tricks[1].trick.includes('modal وPerfekt') && tricks[1].wie.includes(targets[2]) && tricks[1].wie.includes(targets[3]) &&
      tricks[1].warum.includes('المصدر قبل الفعل الناقص المصرف') &&
      tricks[1].warum.includes('اسم المفعول قبل الفعل المساعد المصرف') &&
      tricks[2].trick === 'dass ليست das وليست ob' && tricks[2].wie.includes('dass das stimmt') &&
      tricks[2].wie.includes('ob er kommt') && tricks[2].warum.includes('سؤال نعم/لا غير مباشر') &&
      !lessonText.includes('كل الجمل الثانوية تدفع الفعل إلى النهاية') &&
      !lessonText.includes('العربية تصل الرأي') && !lessonText.includes('kein dass-Satz als Frage') &&
      !lessonText.includes('dass لا تبني سؤالًا') && !lessonText.includes('I think that') &&
      !lessonText.includes('that das') && !lessonText.includes('richtig gestellt falsch') &&
      !lessonText.includes('kommst heute vor dem Verb') && !lessonText.includes('ohne Komma'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u1-l5 aligns strict clozes, one Perfekt order, 34-word writing, speaking, summary and homework',
    wordCloze1.frage.zeigt === 'Ich ____ genau, dass der Termin morgen ist.' &&
      wordCloze1.frage.antworten.join(' ') === 'weiß' && wordCloze1.frage.nearMiss.wissen &&
      !win.DW.renderers.judgeCloze(wordCloze1.frage, 'wissen').ok &&
      wordCloze2.frage.zeigt === 'Sie sagt, dass die ____ noch frei ist.' &&
      wordCloze2.frage.antworten.join(' ') === 'Wohnung' && wordCloze2.frage.nearMiss.Wohnungen &&
      !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Wohnungen').ok &&
      imitate.zeigt.de === 'Ich denke, dass die Idee gut ____.' &&
      imitate.frage.antworten.join(' ') === 'ist' && imitate.frage.nearMiss.sind &&
      !win.DW.renderers.judgeCloze(imitate.frage, 'sind').ok &&
      drill.frage.zeigt === 'Er ____, dass wir warten sollen.' &&
      drill.frage.antworten.join(' ') === 'meint' && drill.frage.nearMiss.meinen &&
      !win.DW.renderers.judgeCloze(drill.frage, 'meinen').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[3] && order.frage.finite === 'sagt,' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Sie' &&
      order.frage.fields.lsk.join(' ') === 'sagt,' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Sie', 'dass', 'sie', 'die', 'Rechnung', 'bezahlt', 'hat.', 'sagt,']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 34 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de')
          .includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u1-l5 makes 80 percent four of five measurable across anrufst, meint, Perfekt order, gut ist and morgen ist',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u1-l5\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) &&
      checks[0].frage.optionen.some(o => o.text === 'Ich hoffe, dass du rufst morgen an.') &&
      checks[0].frage.misconceptionFamilies.a === 'wortstellung' &&
      clozeCheck.frage.zeigt === 'Er ____, dass wir warten sollen.' &&
      clozeCheck.frage.antworten.join(' ') === 'meint' && clozeCheck.frage.nearMiss.meinen &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'meinen').ok &&
      orderCheck.frage.correct.join(' ') === targets[3] && orderCheck.frage.finite === 'sagt,' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Sie' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Sie', 'dass', 'sie', 'die', 'Rechnung', 'bezahlt', 'hat.', 'sagt,']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) &&
      checks[3].frage.misconceptionFamilies.b === 'wortstellung' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) &&
      checks[4].frage.misconceptionFamilies.a === 'wortstellung');
}

/* ---------- audited A2 wenn lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u1-l6'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Wenn ich Zeit habe, rufe ich dich an.',
    'Wenn es regnet, nehme ich den Bus.',
    'Wenn du Lust hast, können wir ins Kino gehen.',
    'Wenn ich alle Hausaufgaben gemacht habe, spiele ich.',
    'Ich fahre mit dem Rad, wenn die Fahrkarte teuer ist.'
  ];
  const taughtFacts = [targets[0], targets[1], targets[2], targets[3]];
  t('Corpus lesson a2-u1-l6 bounds wenn conditions to five complete simple, modal, Perfekt and main-clause-first targets',
    lesson.title.de === 'Bedingungen mit wenn' && lesson.title.ar === 'الشرط بـ wenn' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الشروط والنتائج' &&
      row.grammar.item === 'wenn: الفعل النهائي · بعد جملة wenn المتقدمة يأتي فعل الجملة الرئيسية ثم الفاعل · modal وPerfekt' &&
      lesson.schritte.length === 35 && lesson.wortschatz.length === 30 &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte[0].zeigt.de === 'Am Ende bildest du fünf vollständige wenn-Sätze mit korrekter Verbstellung');

  const expectedWords = [
    'wenn', 'als', 'ob', 'regnen', 'die Zeit', 'die Lust', 'die Ferien',
    'der Besuch', 'das Wochenende', 'die Kraft', 'die Geduld', 'klappen',
    'fertig', 'müde', 'die Sonne', 'der Regen', 'die Erkältung', 'der Arzt',
    'die Apotheke', 'der Kühlschrank', 'die Hausaufgabe', 'der Unterricht',
    'die Fahrkarte', 'das Geschenk', 'die Nachricht', 'der Kaffee', 'erst',
    'sonnig', 'weich', 'pro'
  ];
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u1-l6 reviews all 30 entries and three precise mnemonics without if contamination or false ob and pro absolutes',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord.wenn.ex === targets[1] && byWord.wenn.ar.includes('للشرط أو التكرار') &&
      byWord.als.ex === 'Als ich klein war, wohnten wir in Tunis.' && byWord.als.why.includes('فترة ماضية واحدة') &&
      byWord.ob.ex === 'Ich weiß nicht, ob die Apotheke offen ist.' && byWord.ob.why.includes('نعم أو لا') &&
      byWord.regnen.ex === targets[1] && byWord['die Zeit'].ex === targets[0] &&
      byWord['die Lust'].ex.includes('große Lust auf einen Film') && byWord['die Ferien'].ex.includes('fahren wir ans Meer') &&
      byWord['der Besuch'].ex.includes('koche ich Kaffee') && byWord['das Wochenende'].ex.includes('schlafe ich länger') &&
      byWord['die Kraft'].ex.includes('genug Kraft habe') && byWord['die Geduld'].ex.includes('Schritt für Schritt') &&
      byWord.klappen.ex.includes('kommen wir pünktlich an') && byWord.fertig.ex.includes('fertig bin') &&
      byWord.müde.ex.includes('wenn ich müde bin') && byWord['die Sonne'].ex.includes('sitzen wir draußen') &&
      byWord['der Regen'].ex.includes('gehen wir spazieren') && byWord['die Erkältung'].ex.includes('vorbei ist') &&
      byWord['der Arzt'].ex.includes('untersucht er mich') && byWord['die Apotheke'].ex.includes('offen ist') &&
      byWord['der Kühlschrank'].ex.includes('leer ist') && byWord['die Hausaufgabe'].ex === targets[3] &&
      byWord['der Unterricht'].ex.includes('fahre ich nach Hause') && byWord['die Fahrkarte'].ex === targets[4] &&
      byWord['das Geschenk'].ex.includes('freut sich das Kind') && byWord['die Nachricht'].ex.includes('antworte ich sofort') &&
      byWord['der Kaffee'].ex.includes('rufe ich dich an') && byWord.erst.ex.startsWith('Erst wenn') &&
      byWord.sonnig.ex.includes('sonnig ist') && byWord.weich.ex.includes('weich ist') &&
      byWord.pro.ex === 'Die Fahrkarte kostet zehn Euro pro Person.' &&
      tricks.length === 3 && tricks[0].trick.includes('wenn للشرط أو التكرار') &&
      tricks[0].trick.includes('als لمرة أو فترة واحدة في الماضي') && tricks[0].wie.includes('Als ich klein war') &&
      tricks[1].trick.includes('فعل نهائي') && tricks[1].wie.includes(targets[0]) && tricks[1].wie.includes(targets[1]) &&
      tricks[1].warum.includes('تشغل الخانة الأولى كلها') && tricks[1].warum.includes('nehme ich') &&
      tricks[2].trick.includes('wenn للشرط') && tricks[2].trick.includes('wann للسؤال عن الوقت') &&
      tricks[2].trick.includes('ob لسؤال نعم/لا غير المباشر') && tricks[2].wie.includes('oder nicht') &&
      !lessonText.includes('If ich') && !lessonText.includes('ob لا تحتاج oder') &&
      !lessonText.includes('pro يريد داتيف') && !lessonText.includes('Wenn der Kaffee fertig ist, rufe ich dich.') &&
      !lessonText.includes('Wenn ich kann heute vor kann'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u1-l6 aligns strict clozes, one complete wenn order, 42-word writing, speaking, summary and homework',
    wordCloze1.frage.zeigt === 'Wenn du große ____ auf einen Film hast, können wir ins Kino gehen.' &&
      wordCloze1.frage.antworten.join(' ') === 'Lust' && wordCloze1.frage.nearMiss.Laune &&
      !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Laune').ok &&
      wordCloze2.frage.zeigt === 'Wenn der ____ endet, fahre ich nach Hause.' &&
      wordCloze2.frage.antworten.join(' ') === 'Unterricht' && wordCloze2.frage.nearMiss.Unterrichten &&
      !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Unterrichten').ok &&
      imitate.zeigt.de === 'Wenn ich Zeit ____, rufe ich dich an.' &&
      imitate.frage.antworten.join(' ') === 'habe' && imitate.frage.nearMiss.hast &&
      !win.DW.renderers.judgeCloze(imitate.frage, 'hast').ok &&
      drill.frage.zeigt === 'Wenn ich alle ____ gemacht habe, spiele ich.' &&
      drill.frage.antworten.join(' ') === 'Hausaufgaben' && drill.frage.nearMiss.Hausaufgabe &&
      !win.DW.renderers.judgeCloze(drill.frage, 'Hausaufgabe').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[4] && order.frage.finite === 'fahre' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Ich' &&
      order.frage.fields.lsk.join(' ') === 'fahre' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Ich', 'mit', 'dem', 'Rad,', 'wenn', 'die', 'Fahrkarte', 'teuer', 'ist.', 'fahre']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 42 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de')
          .includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u1-l6 makes 80 percent four of five measurable across Perfekt, Hausaufgaben, complete order, nehme ich and rufe ich',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u1-l6\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text === 'Wenn ich alle Hausaufgaben habe gemacht, spiele ich.') &&
      checks[0].frage.misconceptionFamilies.a === 'wortstellung' &&
      clozeCheck.frage.zeigt === 'Wenn ich alle ____ gemacht habe, spiele ich.' &&
      clozeCheck.frage.antworten.join(' ') === 'Hausaufgaben' && clozeCheck.frage.nearMiss.Hausaufgabe &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Hausaufgabe').ok &&
      orderCheck.frage.correct.join(' ') === targets[4] && orderCheck.frage.finite === 'fahre' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Ich' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Ich', 'mit', 'dem', 'Rad,', 'wenn', 'die', 'Fahrkarte', 'teuer', 'ist.', 'fahre']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[1]) &&
      checks[3].frage.misconceptionFamilies.b === 'wortstellung' &&
      checks[4].frage.optionen.some(o => o.text === targets[0]) &&
      checks[4].frage.misconceptionFamilies.a === 'wortstellung');
}

/* ---------- audited A2 comparative lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u2-l1'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Der Zug ist schneller als der Bus.',
    'Die neue Wohnung ist heller als die alte.',
    'Dieses Brot schmeckt besser als das andere.',
    'Ich trinke lieber Tee als Kaffee.',
    'Mein Zimmer ist so groß wie dein Zimmer.'
  ];
  const taughtFacts = [targets[0], targets[2], targets[3], targets[4]];
  t('Corpus lesson a2-u2-l1 bounds comparison and equality to five complete regular, irregular, preference and so-wie targets',
    lesson.title.de === 'Vergleiche mit als und wie' && lesson.title.ar === 'المقارنة بـ als وwie' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'المقارنة والتساوي' &&
      row.grammar.item === 'Komparativ + als · so + Grundform + wie · besser/mehr/lieber' &&
      lesson.schritte.length === 36 && lesson.wortschatz.length === 33 &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte[0].zeigt.de === 'Am Ende formulierst du fünf vollständige Vergleiche mit als und wie');

  const expectedWords = [
    'schneller', 'billiger', 'größer', 'älter', 'jünger', 'länger', 'teurer',
    'besser', 'mehr', 'weniger', 'lieber', 'die Größe', 'der Vorteil',
    'der Nachteil', 'bequemer', 'ruhiger', 'sauberer', 'günstiger',
    'interessanter', 'schöner', 'als', 'wie', 'so … wie', 'die Wohnung',
    'der Preis', 'die Zeit', 'eng', 'nett', 'der Zentimeter', 'das Kilogramm',
    'preiswert', 'praktisch', 'toll'
  ];
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u2-l1 reviews all 33 entries and three precise mnemonics without an automatic-er rule or awkward inventory comparisons',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord.schneller.ex === targets[0] && byWord.billiger.ex.includes('Café am Bahnhof') &&
      byWord.größer.ex.includes('größer als meins') && byWord.älter.ex.includes('älter als ich') &&
      byWord.jünger.ex.includes('jünger als seine Frau') && byWord.länger.ex === 'Die Fahrt dauert länger als geplant.' &&
      byWord.teurer.ex.includes('Wohnung ist teurer als') && byWord.besser.ex === targets[2] &&
      byWord.mehr.ex === 'Heute habe ich mehr Zeit als gestern.' && byWord.weniger.ex.includes('weniger Arbeit als') &&
      byWord.lieber.ex === targets[3] && byWord['die Größe'].ex.includes('in einer größeren Größe') &&
      byWord['der Vorteil'].ex.includes('mehr Vorteile als Nachteile') &&
      byWord['der Nachteil'].ex.includes('weniger Nachteile als') &&
      byWord.bequemer.ex.includes('bequemer als der Stuhl') && byWord.ruhiger.ex.includes('ruhiger als die Hauptstraße') &&
      byWord.sauberer.ex.includes('sauberer als das andere') && byWord.günstiger.ex.includes('günstiger als das Taxi') &&
      byWord.interessanter.ex.includes('interessanter als der Film') && byWord.schöner.ex.includes('schöner als der Parkplatz') &&
      byWord.als.ex === targets[0] && byWord.wie.ex === targets[4] && byWord['so … wie'].ex === targets[4] &&
      byWord['die Wohnung'].ex === targets[1] && byWord['der Preis'].ex.includes('Preis im Internet') &&
      byWord['die Zeit'].ex.includes('weniger freie Zeit als') && byWord.eng.ex.includes('enger als das Wohnzimmer') &&
      byWord.nett.ex.includes('netter als der alte') && byWord['der Zentimeter'].ex.includes('zwei Zentimeter breiter als') &&
      byWord['das Kilogramm'].ex.includes('ein Kilogramm schwerer als') &&
      byWord.preiswert.ex.includes('preiswerter als das am Bahnhof') && byWord.preiswert.ar.includes('زهيد الثمن') &&
      byWord.praktisch.ex.includes('praktischer als eine Tasche') && byWord.toll.ex.includes('toller als erwartet') &&
      tricks.length === 3 && tricks[0].trick.includes('صيغة المقارنة + als') &&
      tricks[0].trick.includes('so + الصفة الأصلية + wie') && tricks[0].wie.includes(targets[0]) && tricks[0].wie.includes(targets[4]) &&
      tricks[0].warum.includes('درجتين مختلفتين هنا') && tricks[0].warum.includes('من دون صيغة المقارنة') &&
      tricks[1].trick.includes('غالبًا بـ-er') && tricks[1].wie.includes('groß → größer') &&
      tricks[1].wie.includes('hoch → höher') && tricks[1].warum.includes('ليست إضافة er آلية دائمًا') &&
      tricks[2].trick.includes('gut → besser') && tricks[2].trick.includes('viel → mehr') &&
      tricks[2].trick.includes('gern → lieber') && tricks[2].warum.includes('ليست gerner') &&
      !lessonText.includes('الـ er في النهاية تعني «أكثر»') &&
      !lessonText.includes('Der Vorteil ist größer als der Preis.') &&
      !lessonText.includes('Der Balkon ist schöner als das Fenster.') &&
      !lessonText.includes('Die Zeit ist knapper als im Sommer.'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's18');
  const drill = lesson.schritte.find(s => s.id === 's22');
  const order = lesson.schritte.find(s => s.id === 's23');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u2-l1 aligns strict clozes, one complete comparison order, 36-word writing, speaking, summary and homework',
    wordCloze1.frage.zeigt === 'Die Fahrt dauert ____ als geplant.' &&
      wordCloze1.frage.antworten.join(' ') === 'länger' && wordCloze1.frage.nearMiss.lange &&
      !win.DW.renderers.judgeCloze(wordCloze1.frage, 'lange').ok &&
      wordCloze2.frage.zeigt === 'Mein Zimmer ist so groß ____ dein Zimmer.' &&
      wordCloze2.frage.antworten.join(' ') === 'wie' && wordCloze2.frage.nearMiss.als &&
      !win.DW.renderers.judgeCloze(wordCloze2.frage, 'als').ok &&
      imitate.zeigt.de === 'Der Zug ist ____ als der Bus.' &&
      imitate.frage.antworten.join(' ') === 'schneller' && imitate.frage.nearMiss.schnell &&
      !win.DW.renderers.judgeCloze(imitate.frage, 'schnell').ok &&
      drill.frage.zeigt === 'Ich trinke ____ Tee als Kaffee.' &&
      drill.frage.antworten.join(' ') === 'lieber' && drill.frage.nearMiss.gerner &&
      !win.DW.renderers.judgeCloze(drill.frage, 'gerner').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 &&
        !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[1] && order.frage.finite === 'ist' &&
      order.frage.verbFirst === false && order.frage.fields.vorfeld.join(' ') === 'Die neue Wohnung' &&
      order.frage.fields.lsk.join(' ') === 'ist' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage,
        ['Die', 'neue', 'Wohnung', 'heller', 'als', 'die', 'alte.', 'ist']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 36 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de')
          .includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u2-l1 makes 80 percent four of five measurable across so-wie, lieber, full order, schneller als and besser',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u2-l1\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) &&
      checks[0].frage.optionen.some(o => o.text === 'Mein Zimmer ist so groß als dein Zimmer.') &&
      checks[0].frage.misconceptionFamilies.a === 'deklination' &&
      clozeCheck.frage.zeigt === 'Ich trinke ____ Tee als Kaffee.' &&
      clozeCheck.frage.antworten.join(' ') === 'lieber' && clozeCheck.frage.nearMiss.gerner &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'gerner').ok &&
      orderCheck.frage.correct.join(' ') === targets[1] && orderCheck.frage.finite === 'ist' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Die neue Wohnung' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage,
        ['Die', 'neue', 'Wohnung', 'heller', 'als', 'die', 'alte.', 'ist']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) &&
      checks[3].frage.misconceptionFamilies.b === 'deklination' &&
      checks[4].frage.optionen.some(o => o.text === targets[2]) &&
      checks[4].frage.misconceptionFamilies.a === 'deklination');
}

/* ---------- audited A2 superlative lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u2-l2'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Der ICE fährt am schnellsten.',
    'Dieses Brot schmeckt am besten.',
    'Ich trinke am liebsten Tee.',
    'Das Hotel hier ist am teuersten.',
    'Das ist der beste Film des Jahres.'
  ];
  const taughtFacts = [targets[0], targets[1], targets[2], targets[4]];
  t('Corpus lesson a2-u2-l2 bounds superlatives to five complete am, irregular and before-noun targets',
    lesson.title.de === 'Superlativ mit am und vor Nomen' && lesson.title.ar === 'التفضيل مع am وقبل الاسم' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar && row.theme === 'التفضيل' &&
      row.grammar.item === 'am + -(e)sten · der/die/das + Superlativ قبل الاسم · am besten/am meisten/am liebsten' &&
      lesson.schritte.length === 35 && lesson.wortschatz.length === 29 &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte[0].zeigt.de === 'Am Ende formulierst du fünf vollständige Superlative mit am oder vor einem Nomen');

  const expectedWords = [
    'am schnellsten', 'am billigsten', 'am besten', 'am liebsten', 'am meisten',
    'am größten', 'der beste', 'die schönste', 'das größte', 'der schnellste',
    'die teuerste', 'der letzte', 'die erste', 'die Meinung', 'der Erfolg',
    'die Gesundheit', 'die Erfahrung', 'der Kaffee', 'das Essen', 'die Stadt',
    'der Weg', 'die Arbeit', 'das Hotel', 'der Monat', 'die Uhr', 'die Regel',
    'süß', 'sauer', 'scharf'
  ];
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u2-l2 reviews all 29 entries and three precise mnemonics without a fixed-sten rule or artificial trailing-word errors',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['am schnellsten'].ex === targets[0] && byWord['am billigsten'].ex.includes('Discounter') &&
      byWord['am besten'].ex === targets[1] && byWord['am liebsten'].ex === targets[2] &&
      byWord['am meisten'].ex.includes('Von allen Kollegen') && byWord['am größten'].ex.includes('Von allen Zimmern') &&
      byWord['der beste'].ex === targets[4] && byWord['die schönste'].ex.includes('die schönste Stadt') &&
      byWord['das größte'].ex.includes('Das größte Problem') && byWord['der schnellste'].ex.includes('den schnellsten Zug') &&
      byWord['die teuerste'].ex.includes('die teuerste Uhr') && byWord['der letzte'].ex.includes('Der letzte Bus') &&
      byWord['die erste'].ex.includes('Die erste Stunde') && byWord['die Meinung'].ex.includes('Meiner Meinung nach') &&
      byWord['der Erfolg'].ex.includes('der wichtigste') && byWord['die Gesundheit'].ex.includes('am wichtigsten') &&
      byWord['die Erfahrung'].ex.includes('die meiste Erfahrung') && byWord['der Kaffee'].ex.includes('am besten') &&
      byWord['das Essen'].ex.includes('Essen am besten') && byWord['die Stadt'].ex.includes('die schönste Stadt') &&
      byWord['der Weg'].ex.includes('am kürzesten') && byWord['die Arbeit'].ex.includes('am schwersten') &&
      byWord['das Hotel'].ex === targets[3] && byWord['der Monat'].ex.includes('der wärmste Monat') &&
      byWord['die Uhr'].ex.includes('die teuerste im Geschäft') && byWord['die Regel'].ex.includes('am schwierigsten') &&
      byWord.süß.ex.includes('am süßesten') && byWord.sauer.ex.includes('am sauersten') &&
      byWord.scharf.ex.includes('am schärfsten') &&
      tricks.length === 3 && tricks[0].trick.includes('يأتي غالبًا am + -(e)sten') &&
      tricks[0].wie.includes('am schnellsten') && tricks[0].wie.includes('am süßesten') &&
      tricks[0].warum.includes('ليست sten آليًا دائمًا') &&
      tricks[1].trick.includes('قبل الاسم') && tricks[1].wie.includes('der beste Film') &&
      tricks[1].wie.includes('den schnellsten Zug') && tricks[1].warum.includes('الجنس والحالة') &&
      tricks[2].trick.includes('gut – besser – am besten') && tricks[2].trick.includes('viel – mehr – am meisten') &&
      tricks[2].trick.includes('gern – lieber – am liebsten') &&
      !lessonText.includes('اللاحقة en ثابتة مع am') && !lessonText.includes('لا the größte') &&
      !lessonText.includes('Stadt es') && !lessonText.includes('Problem ist die Zeit es') &&
      !lessonText.includes('schnellste Weg Weg') && !lessonText.includes('am höchste Berg'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u2-l2 aligns strict clozes, one complete hotel order, 28-word writing, speaking, summary and homework',
    wordCloze1.frage.zeigt === 'Von allen Zimmern ist dieses am ____.' &&
      wordCloze1.frage.antworten.join(' ') === 'größten' && wordCloze1.frage.nearMiss.großsten &&
      !win.DW.renderers.judgeCloze(wordCloze1.frage, 'großsten').ok &&
      wordCloze2.frage.zeigt === 'Von allen Aufgaben ist diese ____ am schwersten.' &&
      wordCloze2.frage.antworten.join(' ') === 'Arbeit' && wordCloze2.frage.nearMiss.Arbeiten &&
      !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Arbeiten').ok &&
      imitate.zeigt.de === 'Der ICE fährt am ____.' && imitate.frage.antworten.join(' ') === 'schnellsten' &&
      imitate.frage.nearMiss.schnellste && !win.DW.renderers.judgeCloze(imitate.frage, 'schnellste').ok &&
      drill.frage.zeigt === 'Die Soße ist am ____.' && drill.frage.antworten.join(' ') === 'schärfsten' &&
      drill.frage.nearMiss.scharfsten && !win.DW.renderers.judgeCloze(drill.frage, 'scharfsten').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[3] && order.frage.finite === 'ist' &&
      order.frage.fields.vorfeld.join(' ') === 'Das Hotel hier' && order.frage.fields.lsk.join(' ') === 'ist' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Das', 'Hotel', 'hier', 'am', 'teuersten.', 'ist']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 28 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u2-l2 makes 80 percent four of five measurable across der beste, schärfsten, full order, schnellsten and besten',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u2-l2\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) &&
      checks[0].frage.optionen.some(o => o.text === 'Das ist am beste Film des Jahres.') &&
      checks[0].frage.misconceptionFamilies.a === 'deklination' &&
      clozeCheck.frage.antworten.join(' ') === 'schärfsten' && clozeCheck.frage.nearMiss.scharfsten &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'scharfsten').ok &&
      orderCheck.frage.correct.join(' ') === targets[3] && orderCheck.frage.finite === 'ist' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Das Hotel hier' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Das', 'Hotel', 'hier', 'am', 'teuersten.', 'ist']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'deklination' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) && checks[4].frage.misconceptionFamilies.a === 'deklination');
}

/* ---------- audited A2 nominative adjective-ending lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u2-l3'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Der neue Kollege kommt aus Berlin.',
    'Die kleinen Kinder spielen draußen.',
    'Er ist ein guter Freund.',
    'Das ist eine gute Idee.',
    'Das ist ein kleines Kind.'
  ];
  const taughtFacts = [targets[0], targets[1], targets[2], targets[4]];
  t('Corpus lesson a2-u2-l3 bounds nominative adjective endings to five complete definite, plural and ein-word targets',
    lesson.title.de === 'Adjektivendungen im Nominativ' && lesson.title.ar === 'نهايات الصفة في حالة الرفع' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar && row.theme === 'وصف الأشخاص والأشياء' &&
      row.grammar.item === 'der/die/das: -e مفرد و-en جمع · ein: -er/-e/-es · الصفة الخبرية بلا نهاية' &&
      lesson.schritte.length === 35 && lesson.wortschatz.length === 31 &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte[0].zeigt.de === 'Am Ende verwendest du fünf Nominativgruppen mit den richtigen Adjektivendungen');

  const expectedWords = [
    'der neue Kollege', 'die kleine Wohnung', 'das große Haus', 'die alten Häuser',
    'ein guter Freund', 'eine gute Idee', 'ein kleines Kind', 'keine freie Zeit',
    'mein alter Nachbar', 'der rote Pullover', 'die blaue Jacke', 'das weiße Hemd',
    'die schwarzen Schuhe', 'der freundliche Verkäufer', 'die ruhige Straße',
    'das billige Hotel', 'die frische Milch', 'der warme Tee', 'das kalte Wasser',
    'die leere Flasche', 'der neue Job', 'die letzte Chance', 'das erste Mal',
    'die kleinen Kinder', 'der gute Preis', 'die grüne Lampe', 'echt', 'leer',
    'offen', 'reich', 'voll'
  ];
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u2-l3 reviews all 31 entries and three precise mnemonics without confusing ein with no article or attributive with predicative endings',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['der neue Kollege'].ex === targets[0] && byWord['die kleine Wohnung'].ex.includes('kleine Wohnung') &&
      byWord['das große Haus'].ex.includes('große Haus') && byWord['die alten Häuser'].ex.includes('alten Häuser') &&
      byWord['ein guter Freund'].ex === targets[2] && byWord['eine gute Idee'].ex === targets[3] &&
      byWord['ein kleines Kind'].ex === targets[4] && byWord['keine freie Zeit'].ex.startsWith('Keine freie Zeit') &&
      byWord['mein alter Nachbar'].ex.includes('alter Nachbar') && byWord['der rote Pullover'].ex.includes('rote Pullover') &&
      byWord['die blaue Jacke'].ex.includes('blaue Jacke') && byWord['das weiße Hemd'].ex.includes('weiße Hemd') &&
      byWord['die schwarzen Schuhe'].ex.includes('schwarzen Schuhe') &&
      byWord['der freundliche Verkäufer'].ex.includes('freundliche Verkäufer') &&
      byWord['die ruhige Straße'].ex.includes('ruhige Straße') && byWord['das billige Hotel'].ex.includes('billige Hotel') &&
      byWord['die frische Milch'].ex.includes('frische Milch') && byWord['der warme Tee'].ex.includes('warme Tee') &&
      byWord['das kalte Wasser'].ex.includes('kalte Wasser') && byWord['die leere Flasche'].ex.includes('leere Flasche') &&
      byWord['der neue Job'].ex.includes('neue Job') && byWord['die letzte Chance'].ex.includes('letzte Chance') &&
      byWord['das erste Mal'].ex.includes('erste Mal') && byWord['die kleinen Kinder'].ex === targets[1] &&
      byWord['der gute Preis'].ex === 'Der gute Preis überzeugt ihn.' && byWord['die grüne Lampe'].ex.includes('grüne Lampe') &&
      byWord.echt.ex.includes('eine echte Perle') && byWord.leer.ex === 'Die Wohnung ist noch leer.' &&
      byWord.offen.ex.includes('offene Laden') && byWord.reich.ex.includes('reiche Mann') && byWord.voll.ex.includes('volle Flasche') &&
      tricks.length === 3 && tricks[0].trick.includes('-e للمفرد و-en للجمع') &&
      tricks[0].wie.includes('der neue Kollege') && tricks[0].wie.includes('die alten Häuser') &&
      tricks[1].trick.includes('مع ein/eine') && tricks[1].wie.includes('ein guter Freund') &&
      tricks[1].wie.includes('ein kleines Kind') && tricks[1].warum.includes('-er أو -es') &&
      tricks[2].trick.includes('بعد sein تبقى بلا نهاية') && tricks[2].wie.includes('Die Wohnung ist leer') &&
      tricks[2].wie.includes('Der Laden ist offen') &&
      !lessonText.includes('بلا أداة تعريف يأخذ الوصف') &&
      !lessonText.includes('قاعدة واحدة تحل أغلب الصفات') &&
      !lessonText.includes('e في المفرد، en في الجمع والنصب'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u2-l3 aligns strict clozes, one complete eine order, 26-word writing, speaking, summary and homework',
    wordCloze1.frage.zeigt === 'Das ist eine ____ Idee.' && wordCloze1.frage.antworten.join(' ') === 'gute' &&
      wordCloze1.frage.nearMiss.guter && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'guter').ok &&
      wordCloze2.frage.zeigt === 'Das ist die ____ Chance.' && wordCloze2.frage.antworten.join(' ') === 'letzte' &&
      wordCloze2.frage.nearMiss.letzt && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'letzt').ok &&
      imitate.zeigt.de === 'Der ____ Kollege kommt aus Berlin.' && imitate.frage.antworten.join(' ') === 'neue' &&
      imitate.frage.nearMiss.neuer && !win.DW.renderers.judgeCloze(imitate.frage, 'neuer').ok &&
      drill.frage.zeigt === 'Er ist ein ____ Freund.' && drill.frage.antworten.join(' ') === 'guter' &&
      drill.frage.nearMiss.gute && !win.DW.renderers.judgeCloze(drill.frage, 'gute').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[3] && order.frage.finite === 'ist' &&
      order.frage.fields.vorfeld.join(' ') === 'Das' && order.frage.fields.lsk.join(' ') === 'ist' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Das', 'eine', 'gute', 'Idee.', 'ist']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 26 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u2-l3 makes 80 percent four of five measurable across kleines, guter, full order, neue and kleinen',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u2-l3\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) &&
      checks[0].frage.optionen.some(o => o.text === 'Das ist ein kleine Kind.') &&
      checks[0].frage.misconceptionFamilies.a === 'deklination' &&
      clozeCheck.frage.antworten.join(' ') === 'guter' && clozeCheck.frage.nearMiss.gute &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'gute').ok &&
      orderCheck.frage.correct.join(' ') === targets[3] && orderCheck.frage.finite === 'ist' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Das' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Das', 'eine', 'gute', 'Idee.', 'ist']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'deklination' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) && checks[4].frage.misconceptionFamilies.a === 'deklination');
}

/* ---------- audited A2 accusative adjective-ending lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u2-l4'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich kenne den neuen Kollegen.',
    'Wir mieten die kleine Wohnung.',
    'Wir kaufen das große Haus.',
    'Ich sehe die alten Häuser.',
    'Ich habe einen guten Freund.'
  ];
  const taughtFacts = targets.slice(0, 4);
  t('Corpus lesson a2-u2-l4 bounds accusative adjective endings to five complete masculine, feminine, neuter and plural targets',
    lesson.title.de === 'Adjektivendungen im Akkusativ' && lesson.title.ar === 'نهايات الصفة في حالة النصب' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar && row.theme === 'وصف الأشخاص والأشياء' &&
      row.grammar.item === 'den/einen: -en · die/das مفرد: -e · die جمع: -en · ein محايد: -es' &&
      lesson.schritte.length === 35 && lesson.wortschatz.length === 31 &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte[0].zeigt.de === 'Am Ende verwendest du fünf vollständige Akkusativgruppen mit den richtigen Adjektivendungen');

  const expectedWords = [
    'den neuen Kollegen', 'die kleine Wohnung', 'das große Haus', 'die alten Häuser',
    'einen guten Freund', 'eine gute Idee', 'ein kleines Kind', 'keinen freien Tag',
    'meinen alten Nachbarn', 'den roten Pullover', 'die blaue Jacke', 'das weiße Hemd',
    'die schwarzen Schuhe', 'den freundlichen Verkäufer', 'die ruhige Straße',
    'das billige Hotel', 'die frische Milch', 'den warmen Tee', 'das kalte Wasser',
    'die leere Flasche', 'den neuen Job', 'die letzte Chance', 'das erste Mal',
    'die kleinen Kinder', 'den guten Preis', 'die grüne Lampe', 'ganz', 'freiwillig',
    'wahr', 'typisch', 'traurig'
  ];
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u2-l4 reviews all 31 entries and three bounded mnemonics without treating every accusative form alike',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && it.fam === 'deklination' && !it.err.includes('falsch')) &&
      byWord['den neuen Kollegen'].ex === targets[0] && byWord['die kleine Wohnung'].ex === targets[1] &&
      byWord['das große Haus'].ex === targets[2] && byWord['die alten Häuser'].ex === targets[3] &&
      byWord['einen guten Freund'].ex === targets[4] && byWord['eine gute Idee'].ex.includes('eine gute Idee') &&
      byWord['ein kleines Kind'].ex.includes('ein kleines Kind') && byWord['keinen freien Tag'].ex.includes('keinen freien Tag') &&
      byWord['meinen alten Nachbarn'].why.includes('Nachbarn') && byWord['den roten Pullover'].ex.includes('den roten Pullover') &&
      byWord['die blaue Jacke'].ex.includes('die blaue Jacke') && byWord['das weiße Hemd'].ex.includes('das weiße Hemd') &&
      byWord['die schwarzen Schuhe'].ex.includes('die schwarzen Schuhe') &&
      byWord['den freundlichen Verkäufer'].ex.includes('den freundlichen Verkäufer') &&
      byWord['die ruhige Straße'].ex.includes('die ruhige Straße') && byWord['das billige Hotel'].ex.includes('das billige Hotel') &&
      byWord['die frische Milch'].ex.includes('die frische Milch') && byWord['den warmen Tee'].ex.includes('den warmen Tee') &&
      byWord['das kalte Wasser'].ex.includes('das kalte Wasser') && byWord['die leere Flasche'].ex.includes('die leere Flasche') &&
      byWord['den neuen Job'].ex.includes('den neuen Job') && byWord['die letzte Chance'].ex.includes('die letzte Chance') &&
      byWord['das erste Mal'].ex.includes('das erste Mal') && byWord['die kleinen Kinder'].ex.includes('die kleinen Kinder') &&
      byWord['den guten Preis'].ex.includes('den guten Preis') && byWord['die grüne Lampe'].ex.includes('die grüne Lampe') &&
      byWord.ganz.ex.includes('den ganzen Tag') && byWord.freiwillig.ex.includes('einen freiwilligen Kurs') &&
      byWord.wahr.ex.includes('die wahre Geschichte') && byWord.typisch.ex === 'Er stellt eine typische Frage.' &&
      byWord.traurig.ex === 'Ich erlebe einen traurigen Moment.' &&
      tricks.length === 3 && tricks[0].trick.includes('den/einen') && tricks[0].wie.includes('den neuen Kollegen') &&
      tricks[0].wie.includes('einen guten Freund') && tricks[0].warum.includes('der neue') &&
      tricks[1].trick.includes('die kleine') && tricks[1].trick.includes('das große') && tricks[1].trick.includes('die alten') &&
      tricks[1].warum.includes('المؤنث والمحايد المفردان') && tricks[1].warum.includes('الجمع') &&
      tricks[2].trick.includes('كلمات ein') && tricks[2].wie.includes('eine gute Idee') && tricks[2].wie.includes('ein kleines Kind') &&
      tricks[2].warum.includes('المذكر einen') && tricks[2].warum.includes('المحايد ein') &&
      !lessonText.includes('يتغيّر المذكر وحده') && !lessonText.includes('die وdas لا تتغيّران في النصب'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u2-l4 aligns strict clozes, one complete einen order, 25-word writing, speaking, summary and homework',
    wordCloze1.frage.zeigt === 'Ich habe eine ____ Idee.' && wordCloze1.frage.antworten.join(' ') === 'gute' &&
      wordCloze1.frage.nearMiss.guten && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'guten').ok &&
      wordCloze2.frage.zeigt === 'Ich nutze die ____ Chance.' && wordCloze2.frage.antworten.join(' ') === 'letzte' &&
      wordCloze2.frage.nearMiss.letzten && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'letzten').ok &&
      imitate.zeigt.de === 'Ich kenne den ____ Kollegen.' && imitate.frage.antworten.join(' ') === 'neuen' &&
      imitate.frage.nearMiss.neue && !win.DW.renderers.judgeCloze(imitate.frage, 'neue').ok &&
      drill.frage.zeigt === 'Wir kaufen das ____ Haus.' && drill.frage.antworten.join(' ') === 'große' &&
      drill.frage.nearMiss.großen && !win.DW.renderers.judgeCloze(drill.frage, 'großen').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[4] && order.frage.finite === 'habe' &&
      order.frage.fields.vorfeld.join(' ') === 'Ich' && order.frage.fields.lsk.join(' ') === 'habe' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Ich', 'einen', 'guten', 'Freund.', 'habe']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 25 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u2-l4 makes 80 percent four of five measurable across alten, große, full order, neuen and kleine',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u2-l4\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text === 'Ich sehe die alte Häuser.') &&
      checks[0].frage.misconceptionFamilies.a === 'deklination' &&
      clozeCheck.frage.antworten.join(' ') === 'große' && clozeCheck.frage.nearMiss.großen &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'großen').ok &&
      orderCheck.frage.correct.join(' ') === targets[4] && orderCheck.frage.finite === 'habe' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Ich' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Ich', 'einen', 'guten', 'Freund.', 'habe']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'deklination' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) && checks[4].frage.misconceptionFamilies.a === 'deklination');
}

/* ---------- audited A2 reflexive-verb lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u2-l5'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich wasche mich jeden Morgen.',
    'Ich wasche mir die Hände.',
    'Wir treffen uns um sechs.',
    'Ich ziehe mich schnell an.',
    'Ich freue mich auf den Urlaub.'
  ];
  const taughtFacts = targets.slice(0, 4);
  t('Corpus lesson a2-u2-l5 bounds reflexive pronouns to five complete accusative, dative, wir, separable and fixed-preposition targets',
    lesson.title.de === 'Reflexivverben' && lesson.title.ar === 'الأفعال الانعكاسية' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar && row.theme === 'العناية والروتين الشخصي' &&
      row.grammar.item === 'Reflexivpronomen: mich/dich/sich/uns · Akkusativ مقابل Dativ مع جزء الجسم · أفعال منفصلة وحروف ثابتة' &&
      lesson.schritte.length === 35 && lesson.wortschatz.length === 31 &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte[0].zeigt.de === 'Am Ende verwendest du fünf vollständige Sätze mit reflexiven Pronomen im Akkusativ oder Dativ');

  const expectedWords = [
    'sich freuen', 'sich interessieren', 'sich ärgern', 'sich erinnern',
    'sich entscheiden', 'sich treffen', 'sich setzen', 'sich waschen',
    'sich anziehen', 'sich ausruhen', 'sich beeilen', 'sich langweilen',
    'sich vorstellen', 'sich kümmern', 'sich verabreden', 'sich umziehen',
    'sich fühlen', 'sich verletzen', 'sich unterhalten', 'sich gewöhnen',
    'die Freizeit', 'die Musik', 'der Sport', 'der Termin', 'die Nachricht',
    'der Urlaub', 'sich ändern', 'lassen', 'die Wäsche', 'packen', 'der Topf'
  ];
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u2-l5 reviews all 31 entries and three precise mnemonics without rejecting valid non-reflexive meanings or confusing mich with mir',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['sich freuen'].ex === targets[4] && byWord['sich freuen'].why.includes('auf den Urlaub') &&
      byWord['sich interessieren'].ex.includes('mich für Musik') && byWord['sich ärgern'].ex.includes('sich über den Lärm') &&
      byWord['sich erinnern'].ex.includes('mich an den Tag') && byWord['sich entscheiden'].ex.includes('uns für den Zug') &&
      byWord['sich treffen'].ex === targets[2] && byWord['sich setzen'].ex === 'Setz dich bitte hierhin.' &&
      byWord['sich waschen'].ex === targets[1] && byWord['sich waschen'].why.includes('die Hände') &&
      byWord['sich anziehen'].ex === targets[3] && byWord['sich ausruhen'].ex.includes('ruhe ich mich aus') &&
      byWord['sich beeilen'].ex.startsWith('Beeil dich') && byWord['sich langweilen'].ex.includes('langweilen sich') &&
      byWord['sich vorstellen'].err === 'Darf ich mir vorstellen?' && byWord['sich kümmern'].ex.includes('mich um die Kinder') &&
      byWord['sich verabreden'].ex.includes('verabreden uns') && byWord['sich umziehen'].err === 'Ich ziehe mir um.' &&
      byWord['sich umziehen'].why.includes('Ich ziehe um') && byWord['sich fühlen'].ex.includes('fühle mich gut') &&
      byWord['sich verletzen'].ex.includes('hat sich beim Sport verletzt') && byWord['sich unterhalten'].ex.includes('uns über den Film') &&
      byWord['sich gewöhnen'].ex.includes('mich an das Wetter') && byWord['die Freizeit'].ex.includes('interessiere ich mich') &&
      byWord['die Musik'].ex.includes('mich für Musik') && byWord['der Sport'].ex.includes('sich für Sport') &&
      byWord['der Termin'].ex === 'Wir treffen uns vor dem Termin.' && byWord['die Nachricht'].why.includes('خبر وصل') &&
      byWord['der Urlaub'].why.includes('عطلة قادمة') && byWord['sich ändern'].ex.includes('ändert sich') &&
      byWord.lassen.ex === 'Lass dich nicht ärgern!' && byWord['die Wäsche'].ex.includes('meine Wäsche') &&
      byWord.packen.ex.includes('mir den Rucksack') && byWord['der Topf'].ex.includes('mir im Topf eine Suppe') &&
      tricks.length === 3 && tricks[0].trick.includes('ich mich') && tricks[0].trick.includes('wir uns') &&
      tricks[0].wie.includes('Du freust dich') && tricks[0].warum.includes('لا نستعمل sich مع ich أو wir') &&
      tricks[1].trick.includes('mich') && tricks[1].trick.includes('mir') && tricks[1].wie.includes('die Hände') &&
      tricks[1].warum.includes('المفعول به في النصب') && tricks[2].trick.includes('sich freuen auf') &&
      tricks[2].trick.includes('sich interessieren für') && tricks[2].trick.includes('sich gewöhnen an') &&
      !lesson.wortschatz.some(it => it.err === 'Ich ziehe um.') && !lessonText.includes('Wir treffen uns für den Termin.'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u2-l5 aligns strict uns, mich and mir clozes, one complete wir order, 26-word writing, speaking, summary and homework',
    wordCloze1.frage.zeigt === 'Wir treffen ____ um sechs.' && wordCloze1.frage.antworten.join(' ') === 'uns' &&
      wordCloze1.frage.nearMiss.sich && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'sich').ok &&
      wordCloze2.frage.zeigt === 'Ich interessiere ____ für Musik.' && wordCloze2.frage.antworten.join(' ') === 'mich' &&
      wordCloze2.frage.nearMiss.mir && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'mir').ok &&
      imitate.zeigt.de === 'Ich wasche ____ jeden Morgen.' && imitate.frage.antworten.join(' ') === 'mich' &&
      imitate.frage.nearMiss.mir && !win.DW.renderers.judgeCloze(imitate.frage, 'mir').ok &&
      drill.frage.zeigt === 'Ich wasche ____ die Hände.' && drill.frage.antworten.join(' ') === 'mir' &&
      drill.frage.nearMiss.mich && !win.DW.renderers.judgeCloze(drill.frage, 'mich').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'treffen' &&
      order.frage.fields.vorfeld.join(' ') === 'Wir' && order.frage.fields.lsk.join(' ') === 'treffen' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Wir', 'uns', 'um', 'sechs.', 'treffen']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 26 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u2-l5 makes 80 percent four of five measurable across separable order, mir, full wir order, freuen auf and mich',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u2-l5\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text === 'Ich ziehe schnell mich an.') &&
      checks[0].frage.misconceptionFamilies.a === 'wortstellung' &&
      clozeCheck.frage.antworten.join(' ') === 'mir' && clozeCheck.frage.nearMiss.mich &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'mich').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'treffen' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Wir' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Wir', 'uns', 'um', 'sechs.', 'treffen']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[4]) && checks[3].frage.misconceptionFamilies.b === 'präposition' &&
      checks[4].frage.optionen.some(o => o.text === targets[0]) && checks[4].frage.misconceptionFamilies.a === 'kasus');
}

/* ---------- audited A2 Präteritum lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u2-l6'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Gestern war ich krank.',
    'Du warst zu Hause.',
    'Wir waren im Kino.',
    'Ich hatte keine Zeit.',
    'Wir hatten viel Arbeit.'
  ];
  const taughtFacts = targets.slice(0, 4);
  t('Corpus lesson a2-u2-l6 bounds the Präteritum of sein and haben to five complete war, warst, waren, hatte and hatten targets',
    lesson.title.de === 'Präteritum von sein und haben' && lesson.title.ar === 'ماضي sein وhaben البسيط' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar && row.theme === 'ذكريات وأحوال في الماضي' &&
      row.grammar.item === 'sein: war/warst/waren · haben: hatte/hatten · عبارة زمنية في الموقع الأول ثم الفعل المصرف' &&
      lesson.schritte.length === 35 && lesson.wortschatz.length === 30 &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte[0].zeigt.de === 'Am Ende verwendest du war, warst, waren, hatte und hatten in fünf vollständigen Sätzen');

  const expectedWords = [
    'war', 'waren', 'hatte', 'hatten', 'die Kindheit', 'gestern', 'früher', 'das Wetter',
    'die Zeit', 'der Hunger', 'der Durst', 'die Angst', 'müde', 'glücklich', 'krank',
    'der Geburtstag', 'die Schule', 'der Lehrer', 'die Arbeit', 'der Ort', 'die Wohnung',
    'das Meer', 'der Besuch', 'die Reise', 'der Kaffee', 'die Stadt', 'der Babysitter',
    'vorher', 'vorbei', 'manchmal'
  ];
  t('Corpus lesson a2-u2-l6 reviews all 30 entries and three precise mnemonics without rejecting grammatical Perfekt alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord.war.ex === targets[0] && byWord.war.err === 'Gestern ich war krank.' && byWord.war.why.includes('الموقع الثاني') &&
      byWord.waren.ex === targets[2] && byWord.waren.err === 'Wir war im Kino.' &&
      byWord.hatte.ex === targets[3] && byWord.hatte.err === 'Ich hatten keine Zeit.' &&
      byWord.hatten.ex === targets[4] && byWord.hatten.err === 'Wir hatte viel Arbeit.' &&
      byWord['die Kindheit'].ex.includes('Kindheit war schön') && byWord.gestern.ex === 'Gestern war Freitag, heute ist Samstag.' &&
      byWord.früher.ex === 'Früher waren wir oft am Meer.' && byWord['das Wetter'].err === 'Das Wetter hatte kalt.' &&
      byWord['die Zeit'].pl === 'die Zeiten' && byWord['die Zeit'].ex === 'Ich hatte wenig Zeit.' &&
      byWord['der Hunger'].ex.includes('hatten großen Hunger') && byWord['der Durst'].ex === 'Ich hatte Durst.' &&
      byWord['die Angst'].ex === 'Als Kind hatte ich Angst.' && byWord.müde.ex === 'Nach der Arbeit war ich müde.' &&
      byWord.glücklich.ex === 'Sie war sehr glücklich.' && byWord.krank.ex === 'Letzte Woche war ich krank.' &&
      byWord['der Geburtstag'].ex.includes('war am Montag') && byWord['die Schule'].ex === 'Die Schule war klein.' &&
      byWord['der Lehrer'].ex === 'Der Lehrer war streng.' && byWord['die Arbeit'].ex === 'Die Arbeit war schwer.' &&
      byWord['der Ort'].ex === 'Der Ort war ruhig.' && byWord['die Wohnung'].ex.includes('war klein, aber schön') &&
      byWord['das Meer'].ex === 'Das Meer war kalt.' && byWord['das Meer'].why.includes('المفرد Meer') &&
      byWord['der Besuch'].ex === 'Der Besuch war kurz.' && byWord['die Reise'].ex === 'Die Reise war anstrengend.' &&
      byWord['der Kaffee'].ex === 'Der Kaffee war heiß.' && byWord['die Stadt'].ex === 'Die Stadt war voll.' &&
      byWord['der Babysitter'].ex === 'Als Kind hatte ich einen Babysitter.' && byWord.vorher.ex === 'Vorher war ich im Kino.' &&
      byWord.vorbei.ex === 'Als ich kam, war das Fest schon vorbei.' &&
      byWord.manchmal.ex === 'Manchmal war ich traurig, aber meistens war ich glücklich.' &&
      !lesson.wortschatz.some(it => it.err.includes('gewesen') || it.err.includes('gehabt')) &&
      tricks.length === 3 && tricks[0].trick.includes('ich war') && tricks[0].trick.includes('du warst') &&
      tricks[0].trick.includes('wir waren') && tricks[0].trick.includes('ich hatte') && tricks[0].trick.includes('wir hatten') &&
      tricks[0].warum.includes('bin gewesen') && tricks[0].warum.includes('صحيح أيضًا') &&
      tricks[1].trick.includes('صفة أو مكان مع sein') && tricks[1].trick.includes('Hunger') && tricks[1].trick.includes('Zeit') &&
      tricks[1].wie.includes('war müde') && tricks[1].wie.includes('hatte Hunger') &&
      tricks[2].trick.includes('الموقع الثاني') && tricks[2].wie.includes('Als Kind hatte ich Angst') &&
      tricks[2].warum.includes('الموقع الأول كله'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u2-l6 aligns strict Gestern, Meer, war and hatten clozes, one complete waren order and 20-word production',
    wordCloze1.frage.zeigt === '____ war Freitag, heute ist Samstag.' && wordCloze1.frage.antworten.join(' ') === 'Gestern' &&
      wordCloze1.frage.nearMiss.Heute && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Heute').ok &&
      wordCloze2.frage.zeigt === 'Das ____ war kalt.' && wordCloze2.frage.antworten.join(' ') === 'Meer' &&
      wordCloze2.frage.nearMiss.Meere && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Meere').ok &&
      imitate.zeigt.de === 'Gestern ____ ich krank.' && imitate.frage.antworten.join(' ') === 'war' &&
      imitate.frage.nearMiss.hatte && !win.DW.renderers.judgeCloze(imitate.frage, 'hatte').ok &&
      drill.frage.zeigt === 'Wir ____ viel Arbeit.' && drill.frage.antworten.join(' ') === 'hatten' &&
      drill.frage.nearMiss.hatte && !win.DW.renderers.judgeCloze(drill.frage, 'hatte').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'waren' &&
      order.frage.fields.vorfeld.join(' ') === 'Wir' && order.frage.fields.lsk.join(' ') === 'waren' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Wir', 'im', 'Kino.', 'waren']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 20 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u2-l6 makes 80 percent four of five measurable across hatte, hatten, full waren order, war plus V2 and warst',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u2-l6\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'konjugation' &&
      clozeCheck.frage.antworten.join(' ') === 'hatten' && clozeCheck.frage.nearMiss.hatte &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'hatte').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'waren' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Wir' && orderCheck.frage.fields.lsk.join(' ') === 'waren' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Wir', 'im', 'Kino.', 'waren']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'wortstellung' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) && checks[4].frage.misconceptionFamilies.a === 'konjugation');
}

/* ---------- audited A2 polite Konjunktiv II lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u3-l1'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich würde gern einen Tisch reservieren.',
    'Würden Sie das bitte wiederholen?',
    'Könnten Sie bitte einen Arzt rufen?',
    'Hätten Sie noch ein Zimmer frei?',
    'Das wäre sehr nett von Ihnen.'
  ];
  const taughtFacts = targets.slice(0, 4);
  t('Corpus lesson a2-u3-l1 bounds polite Konjunktiv II to five complete würde, würden, könnten, hätten and wäre targets',
    lesson.title.de === 'Höfliche Bitten mit Konjunktiv II' &&
      lesson.title.ar === 'الطلبات المهذّبة بصيغة Konjunktiv II' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar && row.theme === 'الطلبات المهذّبة والخدمات' &&
      row.grammar.item === 'würde + Infinitiv · Würden/Könnten/Hätten Sie …? · Das wäre …' &&
      lesson.schritte.length === 35 && lesson.wortschatz.length === 29 &&
      taughtFacts.every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte[0].zeigt.de === 'Am Ende verwendest du fünf höfliche Sätze mit würde, würden, könnten, hätten und wäre');

  const expectedWords = [
    'würde', 'ich würde gern', 'könnten Sie', 'hätten Sie', 'wäre', 'die Bitte', 'die Frage', 'der Wunsch',
    'höflich', 'die Hilfe', 'um Hilfe bitten', 'sich bedanken', 'mitkommen', 'vorbeikommen', 'mitbringen',
    'das Geschenk', 'die Einladung', 'das Angebot', 'die Meinung', 'der Termin', 'die Rechnung',
    'die Möglichkeit', 'das Problem', 'die Lösung', 'der Vorschlag', 'der Kaffee', 'reservieren', 'rufen', 'tauschen'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u3-l1 reviews all 29 entries and three precise mnemonics without rejecting grammatical direct indicative requests',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord.würde.ex === targets[0] && byWord.würde.pl.includes('würdest') && byWord.würde.err.includes('reservierte') &&
      byWord['ich würde gern'].ex === 'Ich würde gern einen Kaffee trinken.' &&
      byWord['könnten Sie'].ex === targets[2] && byWord['könnten Sie'].err.startsWith('Könntest Sie') &&
      byWord['hätten Sie'].ex === targets[3] && byWord['hätten Sie'].err.startsWith('Hätte Sie') &&
      byWord.wäre.ex === targets[4] && byWord.wäre.err.startsWith('Das wären') &&
      byWord['die Bitte'].ex === 'Ich hätte eine Bitte.' && byWord['die Bitte'].why.includes('مؤنث') &&
      byWord['die Frage'].ex === 'Ich hätte eine Frage.' && byWord['der Wunsch'].ex.includes('wäre ein ruhiges Zimmer') &&
      byWord.höflich.ex === 'Eine höfliche Frage öffnet so manche Türe.' &&
      byWord['die Hilfe'].ex.includes('um Hilfe bitten') && byWord['um Hilfe bitten'].ex.includes('gern um Hilfe bitten') &&
      byWord['sich bedanken'].ex === 'Ich würde mich gern bedanken.' && byWord['sich bedanken'].err.includes('mir') &&
      byWord.mitkommen.ex === 'Würdest du mitkommen?' && byWord.mitkommen.err.endsWith('kommen mit?') &&
      byWord.vorbeikommen.ex.includes('gern vorbeikommen') && byWord.vorbeikommen.err.includes('kommen vorbei') &&
      byWord.mitbringen.ex.includes('einen Salat mitbringen') && byWord.mitbringen.err.includes('bringen mit') &&
      byWord['das Geschenk'].ex.includes('Geschenk kaufen') && byWord['die Einladung'].ex.includes('Einladung gern annehmen') &&
      byWord['das Angebot'].ex.includes('Angebot prüfen') && byWord['die Meinung'].ex.includes('Meinung ändern') &&
      byWord['der Termin'].ex.includes('Termin verschieben') && byWord['die Rechnung'].ex.includes('Rechnung gern prüfen') &&
      byWord['die Möglichkeit'].ex === 'Ich würde jede Möglichkeit nutzen.' &&
      byWord['das Problem'].ex.includes('Problem sofort lösen') && byWord['die Lösung'].ex.includes('andere Lösung suchen') &&
      byWord['der Vorschlag'].ex === 'Ich hätte einen Vorschlag.' && byWord['der Kaffee'].ex.includes('Kaffee bestellen') &&
      byWord.reservieren.ex === targets[0] && byWord.rufen.ex === targets[2] &&
      byWord.tauschen.ex === 'Ich würde den Sitzplatz gern mit dir tauschen.' &&
      !errors.includes('Können Sie mir bitte helfen?') && !errors.includes('Haben Sie noch ein Zimmer frei?') &&
      !errors.includes('Ich habe eine Frage.') && tricks.length === 3 &&
      tricks[0].trick.includes('المصدر في النهاية من دون zu') && tricks[0].wie.includes('Ich reserviere einen Tisch') &&
      tricks[0].wie.includes('Einladung gern annehmen') && tricks[0].warum.includes('الأفعال المنفصلة كلمة واحدة') &&
      tricks[1].trick.includes('Würden/Könnten/Hätten + Sie') && tricks[1].wie.includes(targets[1]) &&
      tricks[1].wie.includes(targets[2]) && tricks[1].wie.includes(targets[3]) && tricks[1].warum.includes('سؤال نعم/لا') &&
      tricks[2].trick.includes('Indikativ قد تبقى صحيحة') && tricks[2].wie.includes('Können Sie mir helfen?') &&
      tricks[2].wie.includes('Ich habe eine Frage') && tricks[2].warum.includes('صحيحتين نحويًا'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u3-l1 aligns strict Bitte, Möglichkeit, würde and rufen clozes, a real verb-first bracket and 29-word production',
    wordCloze1.frage.zeigt === 'Ich hätte eine ____.' && wordCloze1.frage.antworten.join(' ') === 'Bitte' &&
      wordCloze1.frage.nearMiss.Bitten && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Bitten').ok &&
      wordCloze2.frage.zeigt === 'Ich würde jede ____ nutzen.' && wordCloze2.frage.antworten.join(' ') === 'Möglichkeit' &&
      wordCloze2.frage.nearMiss.Möglichkeiten && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Möglichkeiten').ok &&
      imitate.zeigt.de === 'Ich ____ gern einen Tisch reservieren.' && imitate.frage.antworten.join(' ') === 'würde' &&
      imitate.frage.nearMiss.würdest && !win.DW.renderers.judgeCloze(imitate.frage, 'würdest').ok &&
      drill.frage.zeigt === 'Könnten Sie bitte einen Arzt ____?' && drill.frage.antworten.join(' ') === 'rufen' &&
      drill.frage.nearMiss.rufst && !win.DW.renderers.judgeCloze(drill.frage, 'rufst').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[1] && order.frage.finite === 'Würden' && order.frage.verbFirst === true &&
      order.frage.fields.vorfeld.length === 0 && order.frage.fields.lsk.join(' ') === 'Würden' &&
      order.frage.fields.mittelfeld.join(' ') === 'Sie das bitte' && order.frage.fields.rsk.join(' ') === 'wiederholen?' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Sie', 'Würden', 'das', 'bitte', 'wiederholen?']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 29 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u3-l1 makes 80 percent four of five measurable across hätten, rufen, full Würden order, würde plus infinitive and wäre',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u3-l1\.s\d+$/.test(s.frage.prereq || '')) &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'konjugation' &&
      clozeCheck.frage.antworten.join(' ') === 'rufen' && clozeCheck.frage.nearMiss.rufst &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'rufst').ok &&
      orderCheck.frage.correct.join(' ') === targets[1] && orderCheck.frage.finite === 'Würden' &&
      orderCheck.frage.verbFirst === true && orderCheck.frage.fields.vorfeld.length === 0 &&
      orderCheck.frage.fields.rsk.join(' ') === 'wiederholen?' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Sie', 'Würden', 'das', 'bitte', 'wiederholen?']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'konjugation' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) && checks[4].frage.misconceptionFamilies.a === 'konjugation');
}

/* ---------- audited A2 fixed-preposition lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u3-l2'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich warte auf den Bus.',
    'Ich denke oft an meine Familie.',
    'Wir sprechen über den Film.',
    'Wir freuen uns auf den Urlaub.',
    'Ich nehme am Kurs teil.'
  ];
  t('Corpus lesson a2-u3-l2 bounds fixed prepositions to five complete warten, denken, sprechen, freuen and teilnehmen targets',
    lesson.title.de === 'Verben mit festen Präpositionen' &&
      lesson.title.ar === 'أفعال مع حروف جر ثابتة' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'التواصل والاهتمامات والمشاركة' &&
      row.grammar.item === 'warten auf + Akk. · denken an + Akk. · sprechen über + Akk. · sich freuen auf + Akk. · teilnehmen an + Dat.' &&
      lesson.schritte.length === 35 && lesson.wortschatz.length === 31 &&
      targets.slice(0, 4).every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte.find(s => s.id === 's18').zeigt.de === targets[4] &&
      lesson.schritte[0].zeigt.de === 'Am Ende verwendest du fünf Verben mit ihrer festen Präposition in vollständigen Sätzen');

  const expectedWords = [
    'warten auf', 'denken an', 'sprechen über', 'sich freuen auf', 'sich interessieren für', 'helfen bei',
    'achten auf', 'bitten um', 'antworten auf', 'gehören zu', 'teilnehmen an', 'sich beschweren über',
    'träumen von', 'schreiben an', 'sich vorbereiten auf', 'sich verabschieden von', 'die Prüfung',
    'die Kollegen', 'der Kurs', 'die Arbeit', 'der Lärm', 'die Reise', 'das Gespräch', 'die Familie',
    'der Urlaub', 'das Wetter', 'dabei', 'darauf', 'reden', 'ziehen', 'bauen'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u3-l2 reviews all 31 entries and three nuanced mnemonics without rejecting valid alternative frames or meanings',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['warten auf'].ex === targets[0] && byWord['denken an'].ex === targets[1] &&
      byWord['sprechen über'].ex === targets[2] && byWord['sich freuen auf'].ex === targets[3] &&
      byWord['teilnehmen an'].ex === targets[4] && byWord['teilnehmen an'].why.includes('am اختصار an dem') &&
      byWord['sich interessieren für'].pl.includes('hat sich interessiert') &&
      byWord['sich beschweren über'].pl.includes('hat sich beschwert') &&
      byWord['sich vorbereiten auf'].pl.includes('hat sich vorbereitet') &&
      byWord['sich verabschieden von'].pl.includes('hat sich verabschiedet') &&
      byWord['achten auf'].de === 'achten auf' && byWord['die Kollegen'].why.includes('النصب') &&
      byWord['schreiben an'].why.includes('Ich schreibe meiner Schwester') &&
      byWord.bauen.why.includes('ein Haus bauen') &&
      !errors.includes('Ich denke über das Problem nach.') && !errors.includes('Wir sprechen zu diesem Punkt.') &&
      !errors.includes('Ich freue mich über die Nachricht.') && !errors.includes('Ich schreibe meiner Schwester.') &&
      !errors.includes('Sie bauen ein Haus.') && tricks.length === 3 &&
      tricks[0].trick.includes('الفعل والحرف كوحدة') && tricks[0].wie.includes('Der Frame lautet: denken an + Akkusativ.') &&
      tricks[1].trick.includes('الحالة تخص هذا التركيب') && tricks[1].wie.includes('am Kurs') &&
      tricks[1].warum.includes('استعمال مكاني') &&
      tricks[2].trick.includes('sprechen über موضوعًا / mit شخص') &&
      tricks[2].trick.includes('sich freuen auf القادم / über الحاصل') &&
      tricks[2].wie.includes('Ich spreche mit meiner Schwester.') &&
      tricks[2].wie.includes('Ich freue mich über die Nachricht.') && tricks[2].warum.includes('صحيحة في سياقاتها'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u3-l2 aligns strict bei, Reise, auf and am clozes, full sprechen order and 27-word production',
    wordCloze1.frage.zeigt === 'Ich helfe ____ der Arbeit.' && wordCloze1.frage.antworten.join(' ') === 'bei' &&
      wordCloze1.frage.nearMiss.an && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'an').ok &&
      wordCloze2.frage.zeigt === 'Sie träumt von einer ____.' && wordCloze2.frage.antworten.join(' ') === 'Reise' &&
      wordCloze2.frage.nearMiss.Reisen && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Reisen').ok &&
      imitate.zeigt.de === 'Ich warte ____ den Bus.' && imitate.frage.antworten.join(' ') === 'auf' &&
      imitate.frage.nearMiss.für && !win.DW.renderers.judgeCloze(imitate.frage, 'für').ok &&
      drill.frage.zeigt === 'Ich nehme ____ Kurs teil.' && drill.frage.antworten.join(' ') === 'am' &&
      drill.frage.nearMiss['auf dem'] && !win.DW.renderers.judgeCloze(drill.frage, 'auf dem').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'sprechen' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Wir' && order.frage.fields.lsk.join(' ') === 'sprechen' &&
      order.frage.fields.mittelfeld.join(' ') === 'über den Film.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Wir', 'über', 'den', 'Film.', 'sprechen']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 27 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u3-l2 makes 80 percent four of five independent across freuen, teilnehmen, sprechen, warten and denken',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u3-l2\.s\d+$/.test(s.frage.prereq || '')) &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'präposition' &&
      clozeCheck.frage.antworten.join(' ') === 'am' && clozeCheck.frage.nearMiss['auf dem'] &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'auf dem').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'sprechen' &&
      orderCheck.frage.verbFirst === false && orderCheck.frage.fields.vorfeld.join(' ') === 'Wir' &&
      orderCheck.frage.fields.mittelfeld.join(' ') === 'über den Film.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Wir', 'über', 'den', 'Film.', 'sprechen']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'präposition' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) && checks[4].frage.misconceptionFamilies.a === 'präposition');
}

/* ---------- audited A2 genitive lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u3-l3'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Annas Tasche ist hier.',
    "Das ist Max' Fahrrad.",
    'Das Auto meines Vaters steht hier.',
    'Die Namen der Gäste stehen hier.',
    'Wegen des Regens bleiben wir hier.'
  ];
  t('Corpus lesson a2-u3-l3 bounds genitive ownership and prepositions to five complete name, noun and wegen targets',
    lesson.title.de === 'Genitiv bei Besitz und Präpositionen' &&
      lesson.title.ar === 'حالة Genitiv للملكية ومع حروف الجر' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الملكية والانتماء وحروف الجر' &&
      row.grammar.item === 'Namen + -s / Apostroph nach s-Laut · des/meines + -(e)s · der/meiner · wegen/während/trotz/statt + Genitiv' &&
      lesson.schritte.length === 35 && lesson.wortschatz.length === 29 &&
      targets.slice(0, 4).every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte.find(s => s.id === 's18').zeigt.de === targets[4] &&
      lesson.schritte[0].zeigt.de === 'Am Ende verwendest du fünf vollständige Genitivsätze mit Namen, Nomen und Präpositionen');

  const expectedWords = [
    'das Auto meines Vaters', 'die Tasche meiner Mutter', 'das Zimmer des Kindes', 'die Namen der Gäste',
    'wegen des Regens', 'während der Arbeit', 'trotz des Wetters', 'statt des Autos', 'der Name',
    'die Adresse', 'die Farbe', 'der Preis', 'die Nummer', 'die Tür', 'das Ende', 'der Anfang',
    'die Meinung', 'der Chef', 'die Eltern', 'der Bruder', 'die Schwester', 'der Freund', 'das Büro',
    'die Straße', 'die Wohnung', 'der Kollege', 'die Vermieterin', 'die Studentin', 'die Rentnerin'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u3-l3 reviews all 29 entries and three nuanced mnemonics without rejecting von or colloquial dative alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['das Auto meines Vaters'].ex === targets[2] && byWord['das Auto meines Vaters'].err.includes('meines Vater') &&
      byWord['die Tasche meiner Mutter'].err.includes('meiner Mutters') &&
      byWord['das Zimmer des Kindes'].why.includes('des Kindes') && byWord['die Namen der Gäste'].ex === targets[3] &&
      byWord['wegen des Regens'].ex === targets[4] && byWord['wegen des Regens'].why.includes('الصيغة المعيارية') &&
      byWord['während der Arbeit'].err.includes('des Arbeit') && byWord['trotz des Wetters'].err.includes('des Wetter') &&
      byWord['statt des Autos'].ex === 'Statt des Autos nehme ich das Fahrrad.' &&
      byWord['die Nummer'].err.includes('des Kunde') && byWord['die Nummer'].why.includes('اسم مذكر ضعيف') &&
      byWord['der Kollege'].err.includes('des Kollege') && byWord['der Kollege'].why.includes('اسم مذكر ضعيف') &&
      byWord['die Eltern'].why.includes('جمع') && byWord['die Straße'].why.includes('مؤنث') &&
      !errors.includes('Das ist das Auto von meinem Vater.') && !errors.includes('Wegen dem Regen bleiben wir hier.') &&
      !errors.includes('Die Tasche von Anna ist hier.') && tricks.length === 3 &&
      tricks[0].trick.includes('بعد صوت s') && tricks[0].wie.includes(targets[0]) && tricks[0].wie.includes(targets[1]) &&
      tricks[0].wie.includes('Annas Tasche hat keinen Apostroph.') && tricks[0].wie.includes('nicht Schluessel') &&
      tricks[0].warum.includes('von مع الداتيف') &&
      tricks[1].trick.includes('des/meines + -(e)s') && tricks[1].wie.includes('das Büro des Kollegen') &&
      tricks[1].warum.includes('des Kollegen') && tricks[1].warum.includes('des Kunden') &&
      tricks[2].trick.includes('Genitiv المعياري') && tricks[2].wie.includes('Das Auto von meinem Vater ist ebenfalls richtig.') &&
      tricks[2].warum.includes('لا نرفضها مطلقًا'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u3-l3 aligns strict Arbeit, Freundes, Annas and Regens clozes, full Max order and 26-word production',
    wordCloze1.frage.zeigt === 'Während der ____ telefoniere ich nicht.' && wordCloze1.frage.antworten.join(' ') === 'Arbeit' &&
      wordCloze1.frage.nearMiss.Arbeiten && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Arbeiten').ok &&
      wordCloze2.frage.zeigt === 'Das Auto meines ____ ist schnell.' && wordCloze2.frage.antworten.join(' ') === 'Freundes' &&
      wordCloze2.frage.nearMiss.Freund && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Freund').ok &&
      imitate.zeigt.de === '____ Tasche ist hier.' && imitate.frage.antworten.join(' ') === 'Annas' &&
      imitate.frage.nearMiss.Anna && !win.DW.renderers.judgeCloze(imitate.frage, 'Anna').ok &&
      drill.frage.zeigt === 'Wegen des ____ bleiben wir hier.' && drill.frage.antworten.join(' ') === 'Regens' &&
      drill.frage.nearMiss.Regen && !win.DW.renderers.judgeCloze(drill.frage, 'Regen').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[1] && order.frage.finite === 'ist' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Das' && order.frage.fields.lsk.join(' ') === 'ist' &&
      order.frage.fields.mittelfeld.join(' ') === "Max' Fahrrad." &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Das', "Max'", 'Fahrrad.', 'ist']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 26 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[.?]/g, '').toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u3-l3 makes 80 percent four of five independent across plural, wegen, Max, Vaters and Annas genitives',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u3-l3\.s\d+$/.test(s.frage.prereq || '')) &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'kasus' &&
      clozeCheck.frage.antworten.join(' ') === 'Regens' && clozeCheck.frage.nearMiss.Regen &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Regen').ok &&
      orderCheck.frage.correct.join(' ') === targets[1] && orderCheck.frage.finite === 'ist' &&
      orderCheck.frage.verbFirst === false && orderCheck.frage.fields.vorfeld.join(' ') === 'Das' &&
      orderCheck.frage.fields.mittelfeld.join(' ') === "Max' Fahrrad." &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Das', "Max'", 'Fahrrad.', 'ist']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[2]) && checks[3].frage.misconceptionFamilies.b === 'kasus' &&
      checks[4].frage.optionen.some(o => o.text === targets[0]) && checks[4].frage.misconceptionFamilies.a === 'deklination');
}

/* ---------- audited A2 travel lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u3-l4'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Die Reise nach Berlin war lang.',
    'Ich möchte eine Fahrkarte nach Berlin, bitte.',
    'Der Zug hat zwanzig Minuten Verspätung.',
    'In Frankfurt müssen wir umsteigen.',
    'Ich habe ein Einzelzimmer gebucht.'
  ];
  t('Corpus lesson a2-u3-l4 bounds tickets, delays, changing trains and accommodation to five complete travel targets',
    lesson.title.de === 'Reisen: Fahrkarte, Umsteigen und Unterkunft' &&
      lesson.title.ar === 'السفر: التذكرة وتغيير القطار والإقامة' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'السفر والمواصلات والإقامة' &&
      row.grammar.item === 'Fahrkarte/Ticket · hin und zurück · Verspätung haben · müssen + umsteigen · ein Zimmer buchen' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 35 &&
      lesson.schritte.find(s => s.id === 's04').zeigt.de === targets[1] &&
      lesson.schritte.find(s => s.id === 's05').zeigt.de === 'Ich möchte hin und zurück fahren.' &&
      lesson.schritte.find(s => s.id === 's06').zeigt.de === targets[2] &&
      lesson.schritte.find(s => s.id === 's07').zeigt.de === targets[3] &&
      lesson.schritte.find(s => s.id === 's08').wortschatz.some(it => it.ex === targets[0]) &&
      lesson.schritte.find(s => s.id === 's19').zeigt.de === targets[4] &&
      lesson.schritte[0].zeigt.de === 'Am Ende verwendest du fünf vollständige Reisesätze für Fahrkarte, Verspätung, Umsteigen und Unterkunft');

  const expectedWords = [
    'die Reise', 'buchen', 'die Buchung', 'der Koffer', 'das Gepäck', 'der Flughafen', 'der Flug',
    'die Verspätung', 'das Gleis', 'die Fahrkarte', 'umsteigen', 'einsteigen', 'aussteigen',
    'die Unterkunft', 'die Jugendherberge', 'das Einzelzimmer', 'die Rezeption', 'der Schlüssel',
    'die Grenze', 'der Zoll', 'die Sehenswürdigkeit', 'die Stadtführung', 'das Souvenir',
    'die Landschaft', 'der Ausflug', 'die Erinnerung', 'der Rappen', 'der Kredit', 'das Rad',
    'der Reifen', 'her', 'hin', 'unterwegs', 'vorne', 'dorther'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u3-l4 reviews all 35 entries and three nuanced mnemonics without rejecting valid travel alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['die Reise'].ex === targets[0] && byWord['die Verspätung'].ex === targets[2] &&
      byWord['die Verspätung'].why.includes('صيغة ماضٍ صحيحة') &&
      byWord['die Unterkunft'].why.includes('ist sauber gewesen صحيحة أيضًا') &&
      byWord['das Gleis'].pl === 'die Gleise' && byWord['das Gleis'].ex === 'Der Zug fährt von Gleis drei ab.' &&
      byWord['die Fahrkarte'].ex === targets[1] && byWord.umsteigen.ex === targets[3] &&
      byWord.einsteigen.ex === 'Steigen Sie bitte ein!' && byWord.einsteigen.why.includes('البادئة ein في النهاية') &&
      byWord['das Einzelzimmer'].ex === targets[4] &&
      byWord['der Flughafen'].why.includes('zu dem صحيحة أيضًا') &&
      byWord['die Sehenswürdigkeit'].ex === 'Wir besichtigen die Sehenswürdigkeiten.' &&
      byWord.her.why.includes('نحو المتكلم') && byWord.hin.ar.includes('بعيدًا عن المتكلم') &&
      !errors.includes('Wir fahren zu dem Flughafen.') &&
      !errors.includes('Der Zug hat zwanzig Minuten Verspätung gehabt.') &&
      !errors.includes('Die Unterkunft ist sauber gewesen.') &&
      !errors.includes('Wir besuchen die Sehenswürdigkeiten.') &&
      tricks.length === 3 && tricks[0].wie.includes('müssen wir umsteigen') &&
      tricks[0].wie.includes('Steigen Sie bitte ein!') &&
      tricks[1].wie.includes('Fahrkarte und Ticket sind beide richtig.') &&
      tricks[1].warum.includes('zu dem Flughafen') && tricks[1].wie.includes('hin und zurück') &&
      tricks[1].wie.includes('hängt von Richtung und Standpunkt ab') && tricks[1].warum.includes('وجهة نظر المتكلم') &&
      tricks[2].wie.includes('Wir können die Sehenswürdigkeiten auch besuchen.') &&
      tricks[2].wie.includes('Wir können auch ein Museum besuchen.') && tricks[2].warum.includes('ليس خطأً مع الأماكن') &&
      !['der Gleis', 'الأمر المنفصل يبقى قطعة واحدة', 'besichtigen للمعالم وbesuchen للأشخاص'].some(x => lessonText.includes(x)));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's18');
  const drill = lesson.schritte.find(s => s.id === 's22');
  const order = lesson.schritte.find(s => s.id === 's23');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u3-l4 aligns strict Flughafen, Stadtführung, Fahrkarte and Einzelzimmer clozes, full ticket order and 29-word production',
    wordCloze1.frage.zeigt === 'Wir fahren zum ____.' && wordCloze1.frage.antworten.join(' ') === 'Flughafen' &&
      wordCloze1.frage.nearMiss.Flughäfen && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Flughäfen').ok &&
      wordCloze2.frage.zeigt === 'Die ____ beginnt um zehn.' && wordCloze2.frage.antworten.join(' ') === 'Stadtführung' &&
      wordCloze2.frage.nearMiss.Stadtführungen && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Stadtführungen').ok &&
      imitate.zeigt.de === 'Ich möchte eine ____ nach Berlin, bitte.' && imitate.frage.antworten.join(' ') === 'Fahrkarte' &&
      imitate.frage.nearMiss.Fahrkarten && !win.DW.renderers.judgeCloze(imitate.frage, 'Fahrkarten').ok &&
      drill.frage.zeigt === 'Ich habe ein ____ gebucht.' && drill.frage.antworten.join(' ') === 'Einzelzimmer' &&
      drill.frage.nearMiss.Einzelzimmern && !win.DW.renderers.judgeCloze(drill.frage, 'Einzelzimmern').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[1] && order.frage.finite === 'möchte' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Ich' && order.frage.fields.lsk.join(' ') === 'möchte' &&
      order.frage.fields.mittelfeld.join(' ') === 'eine Fahrkarte nach Berlin, bitte.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Ich', 'eine', 'Fahrkarte', 'möchte', 'nach', 'Berlin,', 'bitte.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 29 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[,.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[,.?]/g, '').toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u3-l4 makes 80 percent four of five independent across umsteigen, Einzelzimmer, ticket order, Reise and delay',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u3-l4\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u3-l4.s07 | cap.a2-u3-l4.s22 | cap.a2-u3-l4.s23 | cap.a2-u3-l4.s08 | cap.a2-u3-l4.s06' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'konjugation' &&
      clozeCheck.frage.zeigt === 'Ich habe ein ____ gebucht.' && clozeCheck.frage.antworten.join(' ') === 'Einzelzimmer' &&
      clozeCheck.frage.nearMiss.Einzelzimmern && !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Einzelzimmern').ok &&
      orderCheck.frage.correct.join(' ') === targets[1] && orderCheck.frage.finite === 'möchte' &&
      orderCheck.frage.verbFirst === false && orderCheck.frage.fields.vorfeld.join(' ') === 'Ich' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Ich', 'eine', 'Fahrkarte', 'möchte', 'nach', 'Berlin,', 'bitte.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'deklination' &&
      checks[4].frage.optionen.some(o => o.text === targets[2]) && checks[4].frage.misconceptionFamilies.a === 'plural');
}

/* ---------- audited A2 health lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u3-l5'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Mir ist schlecht und ich habe Fieber.',
    'Ich brauche einen Termin beim Arzt.',
    'Die Praxis ist heute geschlossen.',
    'Nehmen Sie die Tabletten dreimal täglich.',
    'Ich fühle mich schon besser.'
  ];
  t('Corpus lesson a2-u3-l5 bounds symptoms, an appointment, practice hours, medication and recovery to five complete health targets',
    lesson.title.de === 'Gesundheit: Beschwerden, Arzttermin und Medikamente' &&
      lesson.title.ar === 'الصحة: الأعراض وموعد الطبيب والأدوية' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الصحة والرعاية الطبية' &&
      row.grammar.item === 'Mir ist schlecht · Fieber haben · einen Termin beim Arzt brauchen · dreimal täglich · sich besser fühlen' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 35 && lesson.wortschatz.length === 31 &&
      targets.slice(0, 3).every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte.find(s => s.id === 's07').zeigt.de === targets[4] &&
      lesson.schritte.find(s => s.id === 's09').wortschatz.some(it => it.ex === targets[3]) &&
      lesson.schritte[0].zeigt.de ===
        'Am Ende verwendest du fünf vollständige Gesundheitssätze für Beschwerden, Arzttermin, Praxiszeiten, Medikamenteneinnahme und Besserung');

  const expectedWords = [
    'die Praxis', 'der Termin', 'die Gesundheit', 'die Sprechstunde', 'die Schmerzen', 'die Tablette',
    'das Rezept', 'die Apotheke', 'das Medikament', 'die Untersuchung', 'untersuchen',
    'die Krankenkasse', 'die Behandlung', 'der Patient', 'die Krankenschwester', 'das Krankenhaus',
    'der Notarzt', 'die Verletzung', 'wehtun', 'das Fieber', 'der Husten', 'die Erkältung',
    'sich erholen', 'die Diät', 'das Sprechzimmer', 'die Schmerztablette', 'schwach', 'weinen',
    'stören', 'die Grippe', 'fit'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u3-l5 reviews all 31 entries and three nuanced mnemonics without rejecting valid medical alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['die Praxis'].ex === targets[2] && byWord['die Praxis'].why.includes('hat heute geschlossen') &&
      byWord['der Termin'].ex === targets[1] && byWord['der Termin'].why.includes('bei der Ärztin') &&
      byWord['die Sprechstunde'].ar.includes('استقبال المرضى') && byWord['die Tablette'].ex === targets[3] &&
      byWord['die Apotheke'].why.includes('Ich gehe in die Apotheke') &&
      byWord['die Krankenkasse'].ex === 'Die Krankenkasse bezahlt die Behandlung.' &&
      byWord['die Krankenkasse'].why.includes('zahlt für die Behandlung') &&
      byWord['die Behandlung'].why.includes('ist erfolgreich gewesen صحيحة أيضًا') &&
      byWord['der Notarzt'].why.includes('nach zehn Minuten') && byWord['der Notarzt'].why.includes('السياق') &&
      byWord.wehtun.ex === 'Mir tut der Rücken weh.' && byWord.wehtun.pl.includes('hat wehgetan') &&
      byWord['der Husten'].ex === 'Mein Husten ist besser geworden.' &&
      !errors.includes('Die Krankenkasse bezahlt die Behandlung immer.') &&
      !errors.includes('Die Behandlung ist erfolgreich gewesen.') &&
      !errors.includes('Der Notarzt kommt nach zehn Minuten.') &&
      !errors.includes('Der Husten ist besser geblieben.') &&
      tricks.length === 3 && tricks[0].wie.includes('Mir ist schlecht.') && tricks[0].wie.includes('Ich bin krank.') &&
      tricks[0].warum.includes('sein أو haben') && tricks[1].wie.includes('Ich gehe zum Arzt.') &&
      tricks[1].wie.includes('Wir fahren ins Krankenhaus.') && tricks[1].warum.includes('لا نرفض الصيغة الأخرى') &&
      tricks[2].wie.includes('Auch „Die Praxis hat heute geschlossen.“ ist üblich.') &&
      tricks[2].wie.includes('richtig ist Maßangaben') &&
      !['Die Praxis ist closed', 'beim Arzt هو التركيب الثابت', '"rtb"'].some(x => lessonText.includes(x)));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u3-l5 aligns strict Tabletten, Erkältung, schlecht and Termin clozes, a formal imperative order and 30-word production',
    wordCloze1.frage.zeigt === 'Nehmen Sie die ____ dreimal täglich.' && wordCloze1.frage.antworten.join(' ') === 'Tabletten' &&
      wordCloze1.frage.nearMiss.Tablette && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Tablette').ok &&
      wordCloze2.frage.zeigt === 'Ich habe eine ____.' && wordCloze2.frage.antworten.join(' ') === 'Erkältung' &&
      wordCloze2.frage.nearMiss.Erkältungen && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Erkältungen').ok &&
      imitate.zeigt.de === 'Mir ist ____.' && imitate.frage.antworten.join(' ') === 'schlecht' &&
      imitate.frage.nearMiss.schlechte && !win.DW.renderers.judgeCloze(imitate.frage, 'schlechte').ok &&
      drill.frage.zeigt === 'Ich brauche einen ____ beim Arzt.' && drill.frage.antworten.join(' ') === 'Termin' &&
      drill.frage.nearMiss.Termine && !win.DW.renderers.judgeCloze(drill.frage, 'Termine').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[3] && order.frage.finite === 'Nehmen' && order.frage.verbFirst === true &&
      order.frage.fields.vorfeld.length === 0 && order.frage.fields.lsk.join(' ') === 'Nehmen' &&
      order.frage.fields.mittelfeld.join(' ') === 'Sie die Tabletten dreimal täglich.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Sie', 'Nehmen', 'die', 'Tabletten', 'dreimal', 'täglich.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 30 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[,.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[,.?]/g, '').toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u3-l5 makes 80 percent four of five independent across recovery, appointment, medication, practice and symptoms',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u3-l5\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u3-l5.s07 | cap.a2-u3-l5.s21 | cap.a2-u3-l5.s22 | cap.a2-u3-l5.s08 | cap.a2-u3-l5.s04' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) && checks[0].frage.misconceptionFamilies.a === 'kasus' &&
      clozeCheck.frage.antworten.join(' ') === 'Termin' && clozeCheck.frage.nearMiss.Termine &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Termine').ok &&
      orderCheck.frage.correct.join(' ') === targets[3] && orderCheck.frage.finite === 'Nehmen' &&
      orderCheck.frage.verbFirst === true && orderCheck.frage.fields.vorfeld.length === 0 &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Sie', 'Nehmen', 'die', 'Tabletten', 'dreimal', 'täglich.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[2]) && checks[3].frage.misconceptionFamilies.b === 'orthographie' &&
      checks[4].frage.optionen.some(o => o.text === targets[0]) && checks[4].frage.misconceptionFamilies.a === 'konjugation');
}

/* ---------- audited A2 work and application lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u3-l6'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich suche eine Stelle in Teilzeit.',
    'Ich schreibe eine Bewerbung und schicke meinen Lebenslauf mit.',
    'Das Vorstellungsgespräch ist morgen um zehn Uhr.',
    'Ich arbeite bei einer Firma in der Abteilung Verkauf.',
    'Meine Arbeitszeit ist von neun bis fünf.'
  ];
  t('Corpus lesson a2-u3-l6 bounds job search, application, interview, workplace and hours to five complete work targets',
    lesson.title.de === 'Arbeit: Stellensuche, Bewerbung und Arbeitszeit' &&
      lesson.title.ar === 'العمل: البحث عن وظيفة والتقديم وساعات الدوام' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'العمل والتقديم والتوظيف' &&
      row.grammar.item === 'eine Stelle in Teilzeit suchen · eine Bewerbung schreiben · den Lebenslauf mitschicken · um zehn Uhr · bei einer Firma/in der Abteilung · von … bis' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 35 && lesson.wortschatz.length === 31 &&
      targets.slice(0, 4).every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte.find(s => s.id === 's18').zeigt.de === targets[4] &&
      lesson.schritte.find(s => s.id === 's10').wortschatz.some(it => it.ex === targets[4]) &&
      lesson.schritte[0].zeigt.de ===
        'Am Ende verwendest du fünf vollständige Sätze für Stellensuche, Bewerbung, Vorstellungsgespräch, Arbeitsplatz und Arbeitszeit');

  const expectedWords = [
    'die Bewerbung', 'der Lebenslauf', 'das Vorstellungsgespräch', 'die Stelle', 'die Erfahrung',
    'die Ausbildung', 'das Gehalt', 'der Vertrag', 'die Kündigung', 'die Arbeitszeit',
    'der Arbeitgeber', 'der Arbeitnehmer', 'die Überstunde', 'der Urlaub', 'die Kollegin', 'der Chef',
    'die Abteilung', 'die Sitzung', 'die Aufgabe', 'die Beratung', 'der Kunde', 'das Praktikum',
    'das Zeugnis', 'die Bewerbungsfrist', 'die Teilzeit', 'die Vollzeit', 'dringend', 'die Datei',
    'die Werkstatt', 'online', 'das Passwort'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u3-l6 reviews all 31 entries and three nuanced mnemonics without rejecting valid work alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['die Bewerbung'].ex === targets[1] && byWord['der Lebenslauf'].why.includes('meinen Lebenslauf') &&
      byWord['das Vorstellungsgespräch'].ex === targets[2] && byWord['die Stelle'].ex === targets[0] &&
      byWord['die Ausbildung'].why.includes('ist in Tunis gewesen') &&
      byWord['die Kündigung'].ar.includes('إنهاء عقد العمل') && byWord['die Kündigung'].ex.includes('reicht') &&
      byWord['die Arbeitszeit'].ex === targets[4] && byWord['der Arbeitgeber'].why.includes('bezahlt das Gehalt') &&
      byWord['der Arbeitnehmer'].why.includes('Recht haben') && byWord['der Chef'].why.includes('Der Chef kocht') &&
      byWord['die Abteilung'].ex === targets[3] && byWord['die Abteilung'].why.includes('اتجاه') &&
      byWord['der Kunde'].err === 'Der Kunde anruft jeden Tag.' && byWord['das Praktikum'].why.includes('in einer Firma') &&
      byWord['das Zeugnis'].pl === 'die Zeugnisse' && byWord['die Werkstatt'].why.includes('Ich fahre in die Werkstatt') &&
      !errors.includes('Meine Ausbildung ist in Tunis gewesen.') &&
      !errors.includes('Der Arbeitgeber bezahlt das Gehalt immer.') &&
      !errors.includes('Der Arbeitnehmer hat Recht.') && !errors.includes('Der Chef kocht immer.') &&
      !errors.includes('Ich mache ein Praktikum in einer Firma.') &&
      tricks.length === 3 && tricks[0].wie.includes('Auch „Ich suche einen Job in Teilzeit.“') &&
      tricks[0].wie.includes('„Ich arbeite halbtags.“ sind richtig.') &&
      tricks[0].wie.includes('Auch „Ich arbeite in einer Firma.“ ist richtig.') &&
      tricks[0].wie.includes('Ich wechsle morgen in die Abteilung Verkauf.') &&
      tricks[0].warum.includes('Stelle وJob كلمتان صحيحتان') && tricks[1].wie.includes(targets[2]) &&
      tricks[1].wie.includes(targets[4]) && tricks[1].wie.includes('In zehn Minuten beginnt das Gespräch.') &&
      tricks[1].warum.includes('لا ينبغي رفضها') && tricks[2].wie.includes(targets[1]) &&
      tricks[2].wie.includes('meine Zeugnisse') && tricks[2].warum.includes('meinen Lebenslauf') &&
      !['ich suche einen Job als einzige Form', 'zahlen تكفي', 'عند الشركة: bei'].some(x => lessonText.includes(x)));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u3-l6 aligns strict Ausbildung, Praktikum, Teilzeit and Arbeitszeit clozes, interview order and 38-word production',
    wordCloze1.frage.zeigt === 'Meine ____ dauert drei Jahre.' && wordCloze1.frage.antworten.join(' ') === 'Ausbildung' &&
      wordCloze1.frage.nearMiss.Ausbildungen && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Ausbildungen').ok &&
      wordCloze2.frage.zeigt === 'Ich mache ein ____ bei einer Firma.' && wordCloze2.frage.antworten.join(' ') === 'Praktikum' &&
      wordCloze2.frage.nearMiss.Praktika && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Praktika').ok &&
      imitate.zeigt.de === 'Ich suche eine Stelle in ____.' && imitate.frage.antworten.join(' ') === 'Teilzeit' &&
      imitate.frage.nearMiss.Vollzeit && !win.DW.renderers.judgeCloze(imitate.frage, 'Vollzeit').ok &&
      drill.frage.zeigt === 'Meine ____ ist von neun bis fünf.' && drill.frage.antworten.join(' ') === 'Arbeitszeit' &&
      drill.frage.nearMiss.Arbeitszeiten && !win.DW.renderers.judgeCloze(drill.frage, 'Arbeitszeiten').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'ist' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Das Vorstellungsgespräch' && order.frage.fields.lsk.join(' ') === 'ist' &&
      order.frage.fields.mittelfeld.join(' ') === 'morgen um zehn Uhr.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Das', 'Vorstellungsgespräch', 'morgen', 'um', 'zehn', 'Uhr.', 'ist']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 38 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[,.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[,.?]/g, '').toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u3-l6 makes 80 percent four of five independent across workplace, hours, interview, application and job search',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u3-l6\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u3-l6.s07 | cap.a2-u3-l6.s21 | cap.a2-u3-l6.s22 | cap.a2-u3-l6.s08 | cap.a2-u3-l6.s18' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'kasus' &&
      clozeCheck.frage.zeigt === 'Meine ____ ist von neun bis fünf.' && clozeCheck.frage.antworten.join(' ') === 'Arbeitszeit' &&
      clozeCheck.frage.nearMiss.Arbeitszeiten && !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Arbeitszeiten').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'ist' &&
      orderCheck.frage.verbFirst === false && orderCheck.frage.fields.vorfeld.join(' ') === 'Das Vorstellungsgespräch' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Das', 'Vorstellungsgespräch', 'morgen', 'um', 'zehn', 'Uhr.', 'ist']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[1]) && checks[3].frage.misconceptionFamilies.b === 'genus' &&
      checks[4].frage.optionen.some(o => o.text === targets[0]) && checks[4].frage.misconceptionFamilies.a === 'genus');
}

/* ---------- audited A2 study and course lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u4-l1'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Mein Kurs beginnt im September.',
    'Der Unterricht beginnt um acht Uhr.',
    'Ich schreibe die Hausaufgaben ins Heft.',
    'Können Sie die Regel bitte noch einmal erklären?',
    'Ich habe die Prüfung bestanden.'
  ];
  t('Corpus lesson a2-u4-l1 bounds course start, class time, homework, a clarification request and exam result to five study targets',
    lesson.title.de === 'Lernen: Kurs, Unterricht, Hausaufgaben und Prüfung' &&
      lesson.title.ar === 'الدراسة: الدورة والدرس والواجب والامتحان' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الدراسة وتنظيم الدورة والتقييم' &&
      row.grammar.item === 'im September · um acht Uhr · ins/in das Heft · Können Sie … erklären? · eine Prüfung bestehen' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 36 &&
      targets.slice(0, 4).every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte.find(s => s.id === 's19').zeigt.de === targets[4] &&
      lesson.schritte.find(s => s.id === 's09').wortschatz.some(it => it.ex === targets[4]) &&
      lesson.schritte[0].zeigt.de ===
        'Am Ende verwendest du fünf vollständige Sätze zu Kursbeginn, Unterrichtszeit, Hausaufgaben, einer Bitte und einem Prüfungsergebnis');

  const expectedWords = [
    'der Kurs', 'die Hausaufgabe', 'die Schule', 'der Unterricht', 'das Fach', 'die Prüfung',
    'die Note', 'bestehen', 'durchfallen', 'der Lehrer', 'die Klasse', 'der Schüler', 'das Studium',
    'die Universität', 'die Sprache', 'die Grammatik', 'das Wörterbuch', 'die Übung', 'wiederholen',
    'erklären', 'die Regel', 'das Heft', 'das Beispiel', 'die Aufgabe', 'die Anmeldung',
    'das Zeugnis', 'der Stundenplan', 'kontrollieren', 'notieren', 'das Quiz', 'das Rätsel',
    'die Erlaubnis', 'die Kenntnis', 'das Stipendium', 'die Übersetzung', 'einzeln'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u4-l1 reviews all 36 entries and three nuanced mnemonics without rejecting valid study alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['der Kurs'].ex === targets[0] && byWord['die Hausaufgabe'].ex === targets[2] &&
      byWord['der Unterricht'].ex === targets[1] && byWord['die Prüfung'].ex === targets[4] &&
      byWord['die Prüfung'].why.includes('ist einfach gewesen صحيحة') &&
      byWord['die Note'].why.includes('bekommen') && byWord.bestehen.pl.includes('hat bestanden') &&
      byWord.durchfallen.ex === 'Er ist bei der Prüfung durchgefallen.' &&
      byWord['die Universität'].why.includes('داخل مبنى الجامعة') && byWord['die Übung'].why.includes('leicht gemacht') &&
      byWord.erklären.ex === targets[3] && byWord.erklären.why.includes('nochmal') &&
      byWord['das Heft'].why.includes('in das Heft صحيحة أيضًا') &&
      byWord['der Stundenplan'].why.includes('Ich hänge den Stundenplan an die Wand') &&
      byWord.kontrollieren.why.includes('auf Fehler kontrollieren') &&
      byWord['die Kenntnis'].why.includes('المفرد Kenntnis') && byWord['die Übersetzung'].why.includes('von den Zeugnissen') &&
      !errors.includes('Die Prüfung ist einfach gewesen.') && !errors.includes('Sie studiert in der Universität.') &&
      !errors.includes('Die Übung ist leicht gemacht.') && !errors.includes('Die Aufgabe ist zu schwer gemacht.') &&
      !errors.includes('Ich schreibe die Wörter in dem Heft.') && !errors.includes('Der Stundenplan hängt in der Wand.') &&
      tricks.length === 3 && tricks[0].wie.includes(targets[0]) && tricks[0].wie.includes(targets[1]) &&
      tricks[0].wie.includes('„in der Universität“ kann einen Ort im Gebäude beschreiben.') &&
      tricks[0].warum.includes('لا نرفض in der Universität') && tricks[1].wie.includes(targets[2]) &&
      tricks[1].wie.includes('In das Heft ist ebenfalls richtig.') && tricks[1].wie.includes(targets[3]) &&
      tricks[1].wie.includes('Course, Homework, Break und understand sind englische Wörter') &&
      tricks[1].warum.includes('nochmal') && tricks[2].wie.includes(targets[4]) &&
      tricks[2].wie.includes('Die Prüfung ist einfach gewesen.') && tricks[2].warum.includes('لا يُرفض') &&
      !['der Course', 'die Homework', 'die Break', 'ich understand das nicht'].some(x => lessonText.includes(x)));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's18');
  const drill = lesson.schritte.find(s => s.id === 's22');
  const order = lesson.schritte.find(s => s.id === 's23');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u4-l1 aligns strict Prüfung, Heft, Kurs and Hausaufgaben clozes, class-time order and 30-word production',
    wordCloze1.frage.zeigt === 'Ich habe die ____ bestanden.' && wordCloze1.frage.antworten.join(' ') === 'Prüfung' &&
      wordCloze1.frage.nearMiss.Prüfungen && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Prüfungen').ok &&
      wordCloze2.frage.zeigt === 'Ich schreibe die Hausaufgaben ins ____.' && wordCloze2.frage.antworten.join(' ') === 'Heft' &&
      wordCloze2.frage.nearMiss.Hefte && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Hefte').ok &&
      imitate.zeigt.de === 'Mein ____ beginnt im September.' && imitate.frage.antworten.join(' ') === 'Kurs' &&
      imitate.frage.nearMiss.Kurse && !win.DW.renderers.judgeCloze(imitate.frage, 'Kurse').ok &&
      drill.frage.zeigt === 'Ich schreibe die ____ ins Heft.' && drill.frage.antworten.join(' ') === 'Hausaufgaben' &&
      drill.frage.nearMiss.Hausaufgabe && !win.DW.renderers.judgeCloze(drill.frage, 'Hausaufgabe').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[1] && order.frage.finite === 'beginnt' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Der Unterricht' && order.frage.fields.lsk.join(' ') === 'beginnt' &&
      order.frage.fields.mittelfeld.join(' ') === 'um acht Uhr.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Der', 'Unterricht', 'um', 'acht', 'Uhr.', 'beginnt']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 30 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[,.?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[,.?]/g, '').toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u4-l1 makes 80 percent four of five independent across clarification, homework, class time, course start and exam result',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u4-l1\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u4-l1.s07 | cap.a2-u4-l1.s22 | cap.a2-u4-l1.s23 | cap.a2-u4-l1.s08 | cap.a2-u4-l1.s09' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'konjugation' &&
      clozeCheck.frage.zeigt === 'Ich schreibe die ____ ins Heft.' && clozeCheck.frage.antworten.join(' ') === 'Hausaufgaben' &&
      clozeCheck.frage.nearMiss.Hausaufgabe && !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Hausaufgabe').ok &&
      orderCheck.frage.correct.join(' ') === targets[1] && orderCheck.frage.finite === 'beginnt' &&
      orderCheck.frage.verbFirst === false && orderCheck.frage.fields.vorfeld.join(' ') === 'Der Unterricht' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Der', 'Unterricht', 'um', 'acht', 'Uhr.', 'beginnt']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'präposition' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) && checks[4].frage.misconceptionFamilies.a === 'konjugation');
}

/* ---------- audited A2 celebration and invitation lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u4-l2'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Herzlichen Glückwunsch zum Geburtstag!',
    'Ich lade dich am Samstag zu meiner Feier ein.',
    'Ich nehme die Einladung gern an.',
    'Leider kann ich am Samstag nicht kommen.',
    'Die Feier beginnt um sieben Uhr.'
  ];
  t('Corpus lesson a2-u4-l2 bounds congratulations, invitation, acceptance, refusal and party time to five celebration targets',
    lesson.title.de === 'Feste: gratulieren, einladen und antworten' &&
      lesson.title.ar === 'المناسبات: التهنئة والدعوة والرد' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'المناسبات والدعوات والاحتفال' &&
      row.grammar.item === 'Herzlichen Glückwunsch · lade … ein · nehme … an · Leider kann ich nicht · um sieben Uhr' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 33 &&
      targets.slice(0, 4).every((x, i) => lesson.schritte[i + 3].zeigt.de === x) &&
      lesson.schritte.find(s => s.id === 's19').zeigt.de === targets[4] &&
      lesson.schritte.find(s => s.id === 's08').wortschatz.some(it => it.ex === targets[4]) &&
      lesson.schritte[0].zeigt.de ===
        'Am Ende gratulierst du, lädst zu einer Feier ein und verwendest fünf vollständige Sätze zum Gratulieren, Einladen, Zusagen, Absagen und Nennen der Uhrzeit');

  const expectedWords = [
    'der Glückwunsch', 'einladen', 'die Einladung', 'die Feier', 'das Fest', 'der Geburtstag',
    'feiern', 'die Hochzeit', 'Weihnachten', 'Ostern', 'Neujahr', 'gratulieren', 'das Geschenk',
    'schenken', 'die Blume', 'die Karte', 'die Torte', 'der Kuchen', 'die Kerze', 'das Lied',
    'tanzen', 'der Gast', 'die Dekoration', 'das Brautpaar', 'der Jahrestag', 'das Feuerwerk',
    'der Ball', 'der Spaß', 'singen', 'die Süßigkeit', 'das Klavier', 'der Witz', 'witzig'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u4-l2 reviews all 33 entries and three nuanced mnemonics without rejecting valid celebration alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['der Glückwunsch'].ex === targets[0] && byWord.einladen.ex === targets[1] &&
      byWord['die Einladung'].ex === targets[2] && byWord['die Feier'].ex === targets[4] &&
      byWord['die Hochzeit'].why.includes('ist schön gewesen صحيحة') &&
      byWord.Weihnachten.de === 'Weihnachten' && byWord.Ostern.de === 'Ostern' && byWord.Neujahr.de === 'Neujahr' &&
      byWord.Weihnachten.why.includes('an Weihnachten') && byWord.Ostern.why.includes('an Ostern') &&
      byWord.Neujahr.why.includes('an Neujahr') && byWord['die Torte'].why.includes('süß gemacht') &&
      byWord.tanzen.why.includes('bis zur Mitternacht') && byWord['die Dekoration'].why.includes('bunt gemacht') &&
      byWord['der Ball'].ex === 'Am Samstag findet ein Ball im Schloss statt.' &&
      byWord['der Ball'].why.includes('in dem Schloss صحيحة أيضًا') && byWord.singen.why.includes('für den Geburtstag') &&
      !errors.includes('Die Hochzeit ist schön gewesen.') && !errors.includes('Die Torte ist süß gemacht.') &&
      !errors.includes('Die Dekoration ist bunt gemacht.') && !errors.includes('Wir tanzen bis die Mitternacht.') &&
      !errors.includes('Am Samstag ist ein Ball in dem Schloss statt.') &&
      tricks.length === 3 && tricks[0].wie.includes(targets[1]) && tricks[0].wie.includes(targets[2]) &&
      tricks[0].wie.includes(targets[3]) && tricks[0].wie.includes('Ich kann leider nicht kommen.') &&
      tricks[0].wie.includes('Sorry, ich kann nicht kommen.') && tricks[0].warum.includes('لا نرفض Sorry') &&
      tricks[1].wie.includes(targets[0]) && tricks[1].wie.includes('Happy Birthday!') &&
      tricks[1].warum.includes('بديل شائع') && tricks[2].wie.includes('Zu Weihnachten') &&
      tricks[2].wie.includes('an Weihnachten') && tricks[2].wie.includes(targets[4]) &&
      tricks[2].warum.includes('بلا أداة') &&
      !['das Weihnachten', 'das Ostern', 'das Neujahr', 'happy Geburtstag', 'sorry, ich kann nicht kommen so'].some(x => lessonText.includes(x)));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's18');
  const drill = lesson.schritte.find(s => s.id === 's22');
  const order = lesson.schritte.find(s => s.id === 's23');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u4-l2 aligns strict Geburtstag, Gäste, Glückwunsch and Einladung clozes, separable invitation order and 32-word production',
    wordCloze1.frage.zeigt === 'Herzlichen Glückwunsch zum ____!' && wordCloze1.frage.antworten.join(' ') === 'Geburtstag' &&
      wordCloze1.frage.nearMiss.Geburtstage && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Geburtstage').ok &&
      wordCloze2.frage.zeigt === 'Die ____ kommen um acht Uhr.' && wordCloze2.frage.antworten.join(' ') === 'Gäste' &&
      wordCloze2.frage.nearMiss.Gast && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Gast').ok &&
      imitate.zeigt.de === 'Herzlichen ____ zum Geburtstag!' && imitate.frage.antworten.join(' ') === 'Glückwunsch' &&
      imitate.frage.nearMiss.Glückwünsche && !win.DW.renderers.judgeCloze(imitate.frage, 'Glückwünsche').ok &&
      drill.frage.zeigt === 'Ich nehme die ____ gern an.' && drill.frage.antworten.join(' ') === 'Einladung' &&
      drill.frage.nearMiss.Einladungen && !win.DW.renderers.judgeCloze(drill.frage, 'Einladungen').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[1] && order.frage.finite === 'lade' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Ich' && order.frage.fields.lsk.join(' ') === 'lade' &&
      order.frage.fields.mittelfeld.join(' ') === 'dich am Samstag zu meiner Feier' &&
      order.frage.fields.rsk.join(' ') === 'ein.' && order.frage.rightBracket.join(' ') === 'ein.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Ich', 'ein.', 'lade', 'dich', 'am', 'Samstag', 'zu', 'meiner', 'Feier']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 32 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[,.!?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[,.!?]/g, '').toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u4-l2 makes 80 percent four of five independent across refusal, acceptance, invitation, congratulations and party time',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u4-l2\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u4-l2.s07 | cap.a2-u4-l2.s22 | cap.a2-u4-l2.s23 | cap.a2-u4-l2.s08 | cap.a2-u4-l2.s19' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'wortstellung' &&
      clozeCheck.frage.zeigt === 'Ich nehme die ____ gern an.' && clozeCheck.frage.antworten.join(' ') === 'Einladung' &&
      clozeCheck.frage.nearMiss.Einladungen && !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Einladungen').ok &&
      orderCheck.frage.correct.join(' ') === targets[1] && orderCheck.frage.finite === 'lade' &&
      orderCheck.frage.verbFirst === false && orderCheck.frage.fields.rsk.join(' ') === 'ein.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Ich', 'ein.', 'lade', 'dich', 'am', 'Samstag', 'zu', 'meiner', 'Feier']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'deklination' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) && checks[4].frage.misconceptionFamilies.a === 'präposition');
}

/* ---------- audited A2 clothing fit and exchange lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u4-l3'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich ziehe heute die blaue Jacke an.',
    'Die Hose passt mir gut.',
    'Welche Größe haben Sie?',
    'Kann ich das Hemd anprobieren?',
    'Ich möchte die Jacke bitte umtauschen.'
  ];
  t('Corpus lesson a2-u4-l3 bounds dressing, fit, size, trying on and exchange to five clothing-store targets',
    lesson.title.de === 'Kleidung: Passform, Anprobe und Umtausch' &&
      lesson.title.ar === 'الملابس: المقاس والقياس والاستبدال' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الملابس والتسوق في متجر الأزياء' &&
      row.grammar.item === 'ziehe … an · passt mir · Welche Größe …? · anprobieren · umtauschen' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 35 && lesson.wortschatz.length === 31 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === [targets[0], targets[1], targets[2], targets[4]][i]) &&
      lesson.schritte.find(s => s.id === 's18').zeigt.de === targets[3] &&
      lesson.schritte[0].zeigt.de ===
        'Am Ende beschreibst du Kleidung mit fünf vollständigen Sätzen zum Anziehen, zur Passform, zur Größe, zum Anprobieren und zum Umtauschen');

  const expectedWords = [
    'passen', 'anziehen', 'die Größe', 'anprobieren', 'die Kleidung', 'die Hose', 'ausziehen',
    'das Hemd', 'der Rock', 'die Jacke', 'der Mantel', 'der Schuh', 'die Socke', 'der Pullover',
    'das T-Shirt', 'der Gürtel', 'die Tasche', 'die Mode', 'der Verkäufer', 'die Umkleidekabine',
    'das Sonderangebot', 'der Preis', 'umtauschen', 'zurückgeben', 'die Kasse', 'die Quittung',
    'das Kaufhaus', 'die Reinigung', 'tragen', 'schneiden', 'das Händetuch'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u4-l3 reviews all 31 entries and three nuanced mnemonics without rejecting valid clothing alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord.passen.ex === targets[1] && byWord.anziehen.ex === targets[0] &&
      byWord['die Größe'].ex === targets[2] && byWord.anprobieren.ex === targets[3] &&
      byWord.umtauschen.ex === targets[4] && byWord.anprobieren.why.includes('probieren أوسع معنى') &&
      byWord['der Mantel'].why.includes('warm gemacht قد تكون صحيحة') &&
      byWord['die Socke'].why.includes('bunt gemacht ممكنة') &&
      byWord['der Gürtel'].why.includes('zu dem Rock صحيحة أيضًا') &&
      byWord['die Kasse'].why.includes('in der Kasse فتعني داخل صندوق النقود') &&
      byWord['das Kaufhaus'].why.includes('In dem Kaufhaus صحيحة أيضًا') &&
      byWord['die Reinigung'].why.includes('in der Reinigung تصف مكانًا') &&
      byWord['das Händetuch'].why.includes('das Handtuch') &&
      !errors.includes('Ich brauche die Größe achtunddreißig.') &&
      !errors.includes('Kann ich das Hemd probieren?') &&
      !errors.includes('Die Jacke ist warm gemacht.') && !errors.includes('Der Mantel ist teuer gemacht.') &&
      tricks.length === 3 && tricks[0].wie.includes(targets[0]) && tricks[0].wie.includes(targets[3]) &&
      tricks[0].wie.includes(targets[4].replace(' bitte', '')) && tricks[0].warum.includes('was du anhast') &&
      tricks[1].wie.includes(targets[1]) && tricks[1].wie.includes('Der Rock steht dir gut.') &&
      tricks[1].warum.includes('Die Hose passt gut') && tricks[2].wie.includes(targets[2]) &&
      tricks[2].wie.includes('Ich brauche Größe achtunddreißig.') &&
      tricks[2].wie.includes('Ich brauche die Größe achtunddreißig.') &&
      tricks[2].warum.includes('Pants') && tricks[2].warum.includes('Size') && tricks[2].warum.includes('suits') &&
      !['die Pants', 'die Size', 'Das Kleid suits dir'].some(x => errors.includes(x)) &&
      lessonText.includes('Pants') && lessonText.includes('Size') && lessonText.includes('suits'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u4-l3 aligns strict Hose, Preis, an and anprobieren clozes, separable order and 27-word production',
    wordCloze1.frage.zeigt === 'Die ____ passt mir gut.' && wordCloze1.frage.antworten.join(' ') === 'Hose' &&
      wordCloze1.frage.nearMiss.Hosen && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Hosen').ok &&
      wordCloze2.frage.zeigt === 'Der ____ ist reduziert.' && wordCloze2.frage.antworten.join(' ') === 'Preis' &&
      wordCloze2.frage.nearMiss.Preise && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Preise').ok &&
      imitate.zeigt.de === 'Ich ziehe heute die blaue Jacke ____.' && imitate.frage.antworten.join(' ') === 'an' &&
      imitate.frage.nearMiss.anziehen && !win.DW.renderers.judgeCloze(imitate.frage, 'anziehen').ok &&
      drill.frage.zeigt === 'Kann ich das Hemd ____?' && drill.frage.antworten.join(' ') === 'anprobieren' &&
      drill.frage.nearMiss.anprobiere && !win.DW.renderers.judgeCloze(drill.frage, 'anprobiere').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[0] && order.frage.finite === 'ziehe' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Ich' && order.frage.fields.lsk.join(' ') === 'ziehe' &&
      order.frage.fields.mittelfeld.join(' ') === 'heute die blaue Jacke' &&
      order.frage.fields.rsk.join(' ') === 'an.' && order.frage.rightBracket.join(' ') === 'an.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Ich', 'an.', 'ziehe', 'heute', 'die', 'blaue', 'Jacke']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 27 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[,.!?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[,.!?]/g, '').toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u4-l3 makes 80 percent four of five independent across exchange, trying on, dressing, fit and size',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u4-l3\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u4-l3.s07 | cap.a2-u4-l3.s21 | cap.a2-u4-l3.s22 | cap.a2-u4-l3.s08 | cap.a2-u4-l3.s06' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) && checks[0].frage.misconceptionFamilies.a === 'wortstellung' &&
      clozeCheck.frage.zeigt === 'Kann ich das Hemd ____?' && clozeCheck.frage.antworten.join(' ') === 'anprobieren' &&
      clozeCheck.frage.nearMiss.anprobiere && !win.DW.renderers.judgeCloze(clozeCheck.frage, 'anprobiere').ok &&
      orderCheck.frage.correct.join(' ') === targets[0] && orderCheck.frage.finite === 'ziehe' &&
      orderCheck.frage.verbFirst === false && orderCheck.frage.fields.rsk.join(' ') === 'an.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Ich', 'an.', 'ziehe', 'heute', 'die', 'blaue', 'Jacke']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[1]) && checks[3].frage.misconceptionFamilies.b === 'kasus' &&
      checks[4].frage.optionen.some(o => o.text === targets[2]) && checks[4].frage.misconceptionFamilies.a === 'deklination');
}

/* ---------- audited A2 weather description and forecast lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u4-l4'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Heute ist es bewölkt und windig.',
    'Es regnet seit dem Morgen.',
    'Im Sommer ist es oft heiß.',
    'Die Temperatur liegt bei zwanzig Grad.',
    'Der Wetterbericht sagt für morgen Regen voraus.'
  ];
  t('Corpus lesson a2-u4-l4 bounds condition, duration, season, temperature and forecast to five complete weather targets',
    lesson.title.de === 'Wetter: Zustand, Dauer, Temperatur und Vorhersage' &&
      lesson.title.ar === 'الطقس: الحالة والمدة والحرارة والتوقع' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الطقس والفصول والتوقعات' &&
      row.grammar.item === 'bewölkt und windig · seit dem Morgen · im Sommer · bei zwanzig Grad · sagt … voraus' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 33 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === [targets[0], targets[1], targets[2], targets[4]][i]) &&
      lesson.schritte.find(s => s.id === 's19').zeigt.de === targets[3] &&
      lesson.schritte[0].zeigt.de ===
        'Am Ende verwendest du fünf vollständige Wettersätze für Zustand, Dauer, Jahreszeit, Temperatur und Vorhersage');

  const expectedWords = [
    'heiß', 'das Wetter', 'der Wetterbericht', 'bewölkt', 'warm', 'die Sonne', 'der Regen',
    'der Schnee', 'der Wind', 'die Wolke', 'der Nebel', 'das Gewitter', 'der Sturm',
    'die Temperatur', 'kühl', 'der Grad', 'kalt', 'trocken', 'feucht', 'der Schirm',
    'die Regenjacke', 'die Jahreszeit', 'der Herbst', 'der Winter', 'schneien',
    'der Wetterumschwung', 'die Vorhersage', 'fallen', 'der Müll', 'der Wald',
    'der Vogel', 'die Pflanze', 'windig'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u4-l4 reviews all 33 entries and three nuanced mnemonics without rejecting valid weather alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord.heiß.ex === targets[2] && byWord['der Wetterbericht'].ex === targets[4] &&
      byWord.bewölkt.ex === targets[0] && byWord['die Temperatur'].ex === targets[3] &&
      byWord['der Grad'].ex === targets[3] && byWord['der Wetterbericht'].why.includes('sagt Regen vorher') &&
      byWord['der Regen'].why.includes('im Regen صحيحة') && byWord['der Schnee'].why.includes('der Schnee صحيح') &&
      byWord['der Wind'].why.includes('von Westen') && byWord['der Wind'].why.includes('aus dem Westen') &&
      byWord['der Nebel'].why.includes('im Nebel صحيحة') && byWord['der Sturm'].why.includes('ist stark gewesen صحيحة') &&
      byWord['der Grad'].why.includes('Grade جمع صحيح') && byWord['die Temperatur'].why.includes('Temperatur aktiv steigern') &&
      byWord.trocken.why.includes('trocken gemacht قد تصح') &&
      byWord.feucht.why.includes('feucht gemacht قد تصح') &&
      byWord['die Regenjacke'].why.includes('Nimm die Regenjacke! فصحيحة') &&
      byWord['die Vorhersage'].why.includes('gut gemacht صحيحة') && byWord.fallen.why.includes('fallen … runter') &&
      byWord['der Wald'].why.includes('in dem Wald') &&
      !['Der Wetterbericht sagt Regen vorher.', 'Im Winter liegt der Schnee.', 'Der Wind kommt von Westen.',
        'Der Sturm ist stark gewesen.', 'Die Straße ist trocken gemacht.', 'Die Luft ist feucht gemacht.',
        'Nimm die Regenjacke!', 'Die Vorhersage ist gut gemacht.', 'Im Herbst fallen die Blätter runter.']
        .some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes(targets[0]) && tricks[0].wie.includes('Morgen soll es schneien.') &&
      tricks[0].wie.includes('It regnet') && tricks[0].wie.includes('es ist cloudy') &&
      tricks[0].warum.includes('لا نخلط it أو cloudy') && tricks[1].wie.includes(targets[2].replace('oft ', '')) &&
      tricks[1].wie.includes('Im Nebel fahre ich langsam.') && tricks[1].wie.includes('Es regnet seit Stunden.') &&
      tricks[1].wie.includes('since Stunden') && tricks[2].wie.includes(targets[3]) && tricks[2].wie.includes(targets[4]) &&
      tricks[2].wie.includes('Die Sonne steigert die Temperatur.') && tricks[2].wie.includes('sagt Regen vorher') &&
      tricks[2].wie.includes('der Schnee liegt auf den Straßen') &&
      lessonText.includes('It regnet') && lessonText.includes('cloudy') && lessonText.includes('since Stunden'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's18');
  const drill = lesson.schritte.find(s => s.id === 's22');
  const order = lesson.schritte.find(s => s.id === 's23');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u4-l4 aligns strict Sonne, Jahreszeit and bewölkt clozes, V2 duration order and 30-word production',
    wordCloze1.frage.zeigt === 'Die ____ scheint den ganzen Tag.' && wordCloze1.frage.antworten.join(' ') === 'Sonne' &&
      wordCloze1.frage.nearMiss.Sonnen && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Sonnen').ok &&
      wordCloze2.frage.zeigt === 'Der Herbst ist meine liebste ____.' &&
      wordCloze2.frage.antworten.join(' ') === 'Jahreszeit' && wordCloze2.frage.nearMiss.Jahreszeiten &&
      !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Jahreszeiten').ok &&
      imitate.zeigt.de === 'Heute ist es ____ und windig.' && imitate.frage.antworten.join(' ') === 'bewölkt' &&
      imitate.frage.nearMiss.bewölkte && !win.DW.renderers.judgeCloze(imitate.frage, 'bewölkte').ok &&
      drill.frage.zeigt === 'Heute ist es ____ und windig.' && drill.frage.antworten.join(' ') === 'bewölkt' &&
      drill.frage.nearMiss.bewölkte && !win.DW.renderers.judgeCloze(drill.frage, 'bewölkte').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[1] && order.frage.finite === 'regnet' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Es' && order.frage.fields.lsk.join(' ') === 'regnet' &&
      order.frage.fields.mittelfeld.join(' ') === 'seit dem Morgen.' && !order.frage.fields.rsk && !order.frage.rightBracket &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Es', 'seit', 'dem', 'Morgen.', 'regnet']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 30 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de]
        .every(text => text.toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de')))) &&
      targets.map(x => x.replace(/[,.!?]/g, '')).every(x =>
        speaking.erklaerung.replace(/[,.!?]/g, '').toLocaleLowerCase('de').includes(x.toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u4-l4 makes 80 percent four of five independent across forecast, condition, duration, season and temperature',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u4-l4\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u4-l4.s07 | cap.a2-u4-l4.s22 | cap.a2-u4-l4.s23 | cap.a2-u4-l4.s08 | cap.a2-u4-l4.s19' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) && checks[0].frage.misconceptionFamilies.a === 'wortstellung' &&
      clozeCheck.frage.zeigt === 'Heute ist es ____ und windig.' && clozeCheck.frage.antworten.join(' ') === 'bewölkt' &&
      clozeCheck.frage.nearMiss.bewölkte && !win.DW.renderers.judgeCloze(clozeCheck.frage, 'bewölkte').ok &&
      orderCheck.frage.correct.join(' ') === targets[1] && orderCheck.frage.finite === 'regnet' &&
      orderCheck.frage.verbFirst === false && !orderCheck.frage.fields.rsk && !orderCheck.frage.rightBracket &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Es', 'seit', 'dem', 'Morgen.', 'regnet']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[2]) && checks[3].frage.misconceptionFamilies.b === 'deklination' &&
      checks[4].frage.optionen.some(o => o.text === targets[3]) && checks[4].frage.misconceptionFamilies.a === 'präposition');
}

/* ---------- audited A2 invitation response and follow-up lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u4-l5'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Vielen Dank für die Einladung!',
    'Ich sage für Samstag gern zu.',
    'Leider muss ich absagen, weil ich arbeiten muss.',
    'Um wie viel Uhr beginnt die Feier?',
    'Was soll ich zur Feier mitbringen?'
  ];
  t('Corpus lesson a2-u4-l5 bounds an invitation reply to thanks, acceptance, reasoned refusal and two detail questions',
    lesson.title.de === 'Einladung: zusagen, absagen und nachfragen' &&
      lesson.title.ar === 'الدعوة: القبول والاعتذار والاستفسار' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الرد على الدعوة وتفاصيل المناسبة' &&
      row.grammar.item === 'Danke für … · sage … zu · muss … absagen, weil … · um wie viel Uhr · mitbringen' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 35 && lesson.wortschatz.length === 29 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === targets[i]) &&
      lesson.schritte.find(s => s.id === 's18').zeigt.de === targets[4] &&
      lesson.schritte[0].zeigt.de ===
        'Am Ende beantwortest du eine Einladung mit Dank, Zusage, begründeter Absage und zwei Rückfragen');

  const expectedWords = [
    'die Einladung', 'annehmen', 'ablehnen', 'absagen', 'zusagen', 'die Zusage', 'die Absage',
    'der Gastgeber', 'die Uhrzeit', 'der Ort', 'um wie viel Uhr', 'mitbringen', 'mitkommen',
    'sich freuen auf', 'die Vorfreude', 'höflich', 'unhöflich', 'antworten', 'die Frist',
    'der Kalender', 'das Geschenk', 'die Blumen', 'die Kleidung', 'der Anlass', 'die Tischkarte',
    'die Dankeskarte', 'der Teller', 'das Theater', 'der Volleyball'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  const lessonText = JSON.stringify(lesson);
  t('Corpus lesson a2-u4-l5 reviews all 29 entries and three nuanced mnemonics without rejecting valid invitation alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['die Einladung'].ex === targets[0] && byWord.zusagen.ex === targets[1] &&
      byWord.absagen.ex === targets[2] && byWord['um wie viel Uhr'].ex === targets[3] &&
      byWord.mitbringen.ex === targets[4] && byWord['der Volleyball'].pl === 'die Volleybälle' &&
      byWord.annehmen.why.includes('Ich nehme die Einladung') &&
      byWord['die Zusage'].why.includes('Die Zusage ist schnell gekommen صحيحة') &&
      byWord['die Absage'].why.includes('Die Absage ist höflich gewesen صحيحة') &&
      byWord['die Uhrzeit'].why.includes('auf der Karte') && byWord['der Ort'].why.includes('auf der Karte') &&
      byWord.mitkommen.why.includes('Kommst du? فسؤال صحيح') &&
      byWord['der Kalender'].why.includes('in dem Kalender') && byWord['die Blumen'].why.includes('Ich bringe Blumen') &&
      byWord['das Theater'].why.includes('zum Theater') && byWord['der Volleyball'].why.includes('Volleybälle') &&
      !['Ich nehme die Einladung.', 'Die Zusage ist schnell gekommen.', 'Die Absage ist höflich gewesen.',
        'Kommst du?', 'Ich schreibe es in dem Kalender.', 'Ich bringe Blumen.'].some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('Du nimmst die Einladung an.') &&
      tricks[0].wie.includes(targets[1]) && tricks[0].wie.includes('Ich habe bereits zugesagt.') &&
      tricks[0].warum.includes('بعد modal') && tricks[0].warum.includes('Perfekt') &&
      tricks[1].wie.includes(targets[0]) && tricks[1].wie.includes('Ja, gern.') && tricks[1].wie.includes('Ja, gerne.') &&
      tricks[1].wie.includes(targets[2]) && tricks[1].wie.includes('zu antworten') &&
      tricks[1].wie.includes('Do you come mit?') && tricks[1].wie.includes('yes, please') &&
      tricks[1].wie.includes('sorry') && tricks[1].wie.includes('thanks for invite') &&
      tricks[1].warum.includes('لا نضع الإنجليزية') && tricks[2].wie.includes(targets[3]) &&
      tricks[2].wie.includes(targets[4]) && tricks[2].wie.includes('am zehnten Mai') &&
      tricks[2].wie.includes('Volleybälle, nicht Volleyballs') &&
      lessonText.includes('Sprachmischungen oder unvollständige Antworten'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u4-l5 aligns strict Zusage, Blumen, Einladung and absagen clozes, separable acceptance order and 32-word production',
    wordCloze1.frage.zeigt === 'Ich freue mich über deine ____.' && wordCloze1.frage.antworten.join(' ') === 'Zusage' &&
      wordCloze1.frage.nearMiss.Zusagen && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Zusagen').ok &&
      wordCloze2.frage.zeigt === 'Ich bringe ____ mit.' && wordCloze2.frage.antworten.join(' ') === 'Blumen' &&
      wordCloze2.frage.nearMiss.Blume && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Blume').ok &&
      imitate.zeigt.de === 'Vielen Dank für die ____!' && imitate.frage.antworten.join(' ') === 'Einladung' &&
      imitate.frage.nearMiss.Einladungen && !win.DW.renderers.judgeCloze(imitate.frage, 'Einladungen').ok &&
      drill.frage.zeigt === 'Leider muss ich ____, weil ich arbeiten muss.' && drill.frage.antworten.join(' ') === 'absagen' &&
      drill.frage.nearMiss.absage && !win.DW.renderers.judgeCloze(drill.frage, 'absage').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[1] && order.frage.finite === 'sage' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Ich' && order.frage.fields.lsk.join(' ') === 'sage' &&
      order.frage.fields.mittelfeld.join(' ') === 'für Samstag gern' && order.frage.fields.rsk.join(' ') === 'zu.' &&
      order.frage.rightBracket.join(' ') === 'zu.' && win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Ich', 'für', 'Samstag', 'gern', 'sage', 'zu.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 32 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text =>
        text.replace(/[,.!?]/g, '').toLocaleLowerCase('de').includes(x.replace(/[,.!?]/g, '').toLocaleLowerCase('de')))) &&
      targets.every(x => speaking.erklaerung.replace(/[,.!?]/g, '').toLocaleLowerCase('de')
        .includes(x.replace(/[,.!?]/g, '').toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u4-l5 makes 80 percent four of five independent across time, refusal, acceptance, thanks and bringing',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u4-l5\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u4-l5.s07 | cap.a2-u4-l5.s21 | cap.a2-u4-l5.s22 | cap.a2-u4-l5.s08 | cap.a2-u4-l5.s18' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'präposition' &&
      clozeCheck.frage.zeigt === 'Leider muss ich ____, weil ich arbeiten muss.' &&
      clozeCheck.frage.antworten.join(' ') === 'absagen' && clozeCheck.frage.nearMiss.absage &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'absage').ok &&
      orderCheck.frage.correct.join(' ') === targets[1] && orderCheck.frage.finite === 'sage' &&
      orderCheck.frage.verbFirst === false && orderCheck.frage.fields.rsk.join(' ') === 'zu.' &&
      orderCheck.frage.rightBracket.join(' ') === 'zu.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Ich', 'für', 'Samstag', 'gern', 'sage', 'zu.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'kasus' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) && checks[4].frage.misconceptionFamilies.a === 'wortstellung');
}

/* ---------- audited A2 problem reporting, repair, blocking and apology lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u4-l6'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Mein Handy funktioniert nicht.',
    'Ich habe meinen Schlüssel verloren.',
    'Können Sie das Fahrrad reparieren?',
    'Ich lasse meine Karte sperren.',
    'Das tut mir leid.'
  ];
  t('Corpus lesson a2-u4-l6 bounds problem handling to malfunction, loss, repair, card blocking and apology',
    lesson.title.de === 'Probleme: Defekt, Verlust und Entschuldigung' &&
      lesson.title.ar === 'المشكلات: العطل والفقدان والاعتذار' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'حل المشكلات والأشياء المفقودة' &&
      row.grammar.item === 'funktioniert nicht · habe … verloren · Können Sie … reparieren? · lasse … sperren · tut mir leid' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 35 && lesson.wortschatz.length === 31 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === [targets[0], targets[1], targets[2], targets[4]][i]) &&
      lesson.schritte.find(s => s.id === 's18').zeigt.de === targets[3] &&
      lesson.schritte[0].zeigt.de ===
        'Am Ende meldest du einen Defekt oder Verlust, bittest um eine Reparatur, lässt eine Karte sperren und entschuldigst dich');

  const expectedWords = [
    'verlieren', 'kaputt', 'reparieren', 'die Reparatur', 'finden', 'verloren', 'suchen',
    'die Brille', 'das Portemonnaie', 'die Bank anrufen', 'sperren', 'der Diebstahl',
    'die Polizei', 'melden', 'der Verlust', 'die Versicherung', 'der Schaden', 'die Schuld',
    'leidtun', 'der Fehler', 'korrigieren', 'die Entschuldigung', 'das Missverständnis',
    'die Lösung', 'der Kundendienst', 'die Beschwerde', 'das Ding', 'das Geschirr',
    'austragen', 'der Basketball', 'sogar'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u4-l6 reviews all 31 entries and three nuanced mnemonics without rejecting valid problem alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord.verlieren.ex === targets[1] && byWord.verlieren.why.includes('Mein Schlüssel ist verloren gegangen') &&
      byWord.verlieren.why.includes('lost') && byWord.kaputt.why.includes('kaputt gemacht') && byWord.kaputt.why.includes('works') &&
      byWord.reparieren.why.includes('reparieren lassen') && byWord.reparieren.why.includes('fixen') &&
      byWord['die Reparatur'].why.includes('Euros') && byWord.finden.pl === 'findet · fand · hat gefunden' &&
      byWord.verloren.ex === 'Mein Schlüssel ist verloren gegangen.' &&
      byWord.suchen.why.includes('Ich suche nach meiner Brille') && byWord['die Brille'].why.includes('auf den Tisch') &&
      byWord['das Portemonnaie'].why.includes('ist verloren gegangen') &&
      byWord['die Bank anrufen'].pl === 'ruft an · rief an · hat angerufen' &&
      byWord.sperren.ex === targets[3] && byWord.sperren.why.includes('lasse die Karte gesperrt') &&
      byWord['der Diebstahl'].why.includes('bei der Polizei melden') &&
      byWord['die Polizei'].why.includes('bei der Polizei anrufen') &&
      byWord['die Versicherung'].why.includes('bezahlt den Schaden') && byWord['der Schaden'].why.includes('klein') &&
      byWord['die Schuld'].why.includes('Ich bin nicht schuld') &&
      byWord['der Kundendienst'].why.includes('hilft weiter من دون') &&
      byWord.austragen.why.includes('weil der Bote die Post austrägt') &&
      byWord['der Basketball'].pl === 'die Basketbälle' && byWord['der Basketball'].why.includes('mit dem Basketball') &&
      !['Mein Handy ist kaputt gemacht.', 'Ich habe den Schlüssel gefunden gehabt.',
        'Ich suche nach meiner Brille.', 'Ich lasse meine Karte gesperrt.',
        'Die Versicherung bezahlt den Schaden.', 'Ich bin nicht schuld.',
        'Der Kundendienst hilft weiter.', 'weil der Bote die Post austrägt'].some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes(targets[1]) &&
      tricks[0].wie.includes('Mein Schlüssel ist verloren gegangen.') &&
      tricks[0].warum.includes('haben') && tricks[0].warum.includes('sein') && tricks[0].warum.includes('كلاهما صحيح') &&
      tricks[0].wie.includes('Ich habe ihn lost') && tricks[1].wie.includes('Ich suche meine Brille.') && tricks[1].wie.includes('Ich suche nach meiner Brille.') &&
      tricks[1].wie.includes('Ich melde den Verlust bei der Polizei.') && tricks[1].wie.includes('Ich rufe die Bank an.') &&
      tricks[1].warum.includes('nach + Dativ') && tricks[2].wie.includes(targets[3]) &&
      tricks[2].wie.includes('Ich lasse das Auto reparieren.') &&
      tricks[2].wie.includes('Ich lasse meine Karte gesperrt') && tricks[2].wie.includes('Können Sie das fixen?') &&
      tricks[2].wie.includes('Mein Handy works nicht') && tricks[2].warum.includes('بلا zu'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u4-l6 aligns strict loss, apology, malfunction and blocking clozes, modal repair order and 23-word production',
    wordCloze1.frage.zeigt === 'Mein Schlüssel ist ____ gegangen.' && wordCloze1.frage.antworten.join(' ') === 'verloren' &&
      wordCloze1.frage.nearMiss.verlorene && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'verlorene').ok &&
      wordCloze2.frage.zeigt === 'Ich schreibe eine ____.' && wordCloze2.frage.antworten.join(' ') === 'Entschuldigung' &&
      wordCloze2.frage.nearMiss.Entschuldigungen && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Entschuldigungen').ok &&
      imitate.zeigt.de === 'Mein Handy ____ nicht.' && imitate.frage.antworten.join(' ') === 'funktioniert' &&
      imitate.frage.nearMiss.funktionieren && !win.DW.renderers.judgeCloze(imitate.frage, 'funktionieren').ok &&
      drill.frage.zeigt === 'Ich lasse meine Karte ____.' && drill.frage.antworten.join(' ') === 'sperren' &&
      drill.frage.nearMiss['zu sperren'] && !win.DW.renderers.judgeCloze(drill.frage, 'zu sperren').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'Können' && order.frage.verbFirst === true &&
      order.frage.fields.vorfeld.length === 0 && order.frage.fields.lsk.join(' ') === 'Können' &&
      order.frage.fields.mittelfeld.join(' ') === 'Sie das Fahrrad' && order.frage.fields.rsk.join(' ') === 'reparieren?' &&
      order.frage.rightBracket.join(' ') === 'reparieren?' && win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Sie', 'Können', 'das', 'Fahrrad', 'reparieren?']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 23 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text =>
        text.replace(/[,.!?]/g, '').toLocaleLowerCase('de').includes(x.replace(/[,.!?]/g, '').toLocaleLowerCase('de')))) &&
      targets.every(x => speaking.erklaerung.replace(/[,.!?]/g, '').toLocaleLowerCase('de')
        .includes(x.replace(/[,.!?]/g, '').toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u4-l6 makes 80 percent four of five independent across apology, blocking, repair, loss and malfunction',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u4-l6\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u4-l6.s07 | cap.a2-u4-l6.s21 | cap.a2-u4-l6.s22 | cap.a2-u4-l6.s08 | cap.a2-u4-l6.s04' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) && checks[0].frage.misconceptionFamilies.a === 'kasus' &&
      clozeCheck.frage.zeigt === 'Ich lasse meine Karte ____.' &&
      clozeCheck.frage.antworten.join(' ') === 'sperren' && clozeCheck.frage.nearMiss['zu sperren'] &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'zu sperren').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'Können' &&
      orderCheck.frage.verbFirst === true && orderCheck.frage.fields.rsk.join(' ') === 'reparieren?' &&
      orderCheck.frage.rightBracket.join(' ') === 'reparieren?' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Sie', 'Können', 'das', 'Fahrrad', 'reparieren?']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[1]) && checks[3].frage.misconceptionFamilies.b === 'konjugation' &&
      checks[4].frage.optionen.some(o => o.text === targets[0]) && checks[4].frage.misconceptionFamilies.a === 'wortstellung');
}
/* ---------- audited A2 ordered Perfekt narrative lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u5-l1'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Zuerst bin ich früh aufgestanden.',
    'Dann habe ich gefrühstückt.',
    'Danach bin ich zur Arbeit gefahren.',
    'Plötzlich hat es stark geregnet.',
    'Zum Schluss bin ich nach Hause zurückgekommen.'
  ];
  t('Corpus lesson a2-u5-l1 bounds a past narrative to five ordered Perfekt events with haben and sein',
    lesson.title.de === 'Vergangenheit erzählen: Reihenfolge und Perfekt' &&
      lesson.title.ar === 'سرد الماضي: الترتيب وPerfekt' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'سرد أحداث الماضي بترتيب واضح' &&
      row.grammar.item === 'zuerst/dann/danach/plötzlich/zum Schluss · Perfekt مع haben أو sein · الفعل في الموضع الثاني' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 35 && lesson.wortschatz.length === 31 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === [targets[0], targets[1], targets[2], targets[4]][i]) &&
      lesson.schritte.find(s => s.id === 's18').zeigt.de === targets[3] &&
      lesson.schritte[0].zeigt.de ===
        'Am Ende erzählst du fünf vergangene Ereignisse in einer klaren Reihenfolge mit Perfekt');

  const expectedWords = [
    'zuerst', 'erzählen', 'die Geschichte', 'spannend', 'passieren', 'danach', 'plötzlich',
    'zum Schluss', 'das Erlebnis', 'die Erinnerung', 'die Kindheit', 'damals', 'neulich',
    'letztes Jahr', 'der Unfall', 'die Panne', 'das Glück', 'erleben', 'der Zufall',
    'die Reise', 'der Abschied', 'die Begegnung', 'das Gefühl', 'die Angst', 'aufgeregt',
    'ruhig', 'der Club', 'ausgehen', 'vergessen', 'zurückgehen', 'zurückkommen'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u5-l1 reviews all 31 entries and three nuanced mnemonics without rejecting valid past and contextual alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord.zuerst.ex === targets[0] && byWord.danach.ex === targets[2] &&
      byWord.plötzlich.ex === targets[3] && byWord['zum Schluss'].ex === targets[4] &&
      byWord.erzählen.why.includes('jemandem etwas erzählen') &&
      byWord['die Geschichte'].why.includes('ist spannend gewesen') &&
      byWord.spannend.pl === 'spannender · am spannendsten' && byWord.spannend.why.includes('spannend gemacht') &&
      byWord['das Erlebnis'].why.includes('ist toll gewesen') &&
      byWord['die Erinnerung'].why.includes('eine gute Erinnerung') &&
      byWord['der Unfall'].why.includes('ist auf der Autobahn gewesen') &&
      byWord['die Reise'].why.includes('ist lang gewesen') &&
      byWord['der Abschied'].why.includes('ist traurig gewesen') &&
      byWord['die Begegnung'].why.includes('ist zufällig gewesen') &&
      byWord['die Angst'].why.includes('Ich war ängstlich') &&
      byWord.aufgeregt.why.includes('Ich habe mich sehr aufgeregt') &&
      byWord.ruhig.pl === 'ruhiger · am ruhigsten' && byWord.ruhig.why.includes('du للتوكيد') &&
      byWord['der Club'].why.includes('in den Club') && byWord.ausgehen.why.includes('weil wir ausgehen') &&
      byWord.zurückgehen.why.includes('nach Hause اتجاه وzu Hause مكان') &&
      byWord.zurückkommen.why.includes('Ich komme zurück') &&
      !['Die Geschichte ist spannend gewesen.', 'Der Film war spannend gemacht.',
        'Das Erlebnis ist toll gewesen.', 'Ich habe eine gute Erinnerung.',
        'Der Unfall ist auf der Autobahn gewesen.', 'Die Reise ist lang gewesen.',
        'Der Abschied ist traurig gewesen.', 'Die Begegnung ist zufällig gewesen.',
        'Ich war ängstlich.', 'Ich habe mich sehr aufgeregt.', 'Bleib ruhig, du!',
        'Früher gingen wir oft in den Club.', 'weil wir ausgehen'].some(x => errors.includes(x)) &&
      tricks.length === 3 && targets.every(x => tricks[0].wie.includes(x)) &&
      tricks[0].warum.includes('الموضع الثاني') && tricks[1].wie.includes('Ich bin aufgestanden.') &&
      tricks[1].wie.includes('Ich habe gefrühstückt.') && tricks[1].wie.includes('Es hat geregnet.') &&
      tricks[1].wie.includes('Ich habe das Auto gefahren') && tricks[1].warum.includes('متعديًا') &&
      tricks[2].wie.includes('Die Geschichte ist spannend gewesen') &&
      tricks[2].wie.includes('Ich war aufgeregt.') && tricks[2].wie.includes('Ich hatte Angst.') &&
      tricks[2].wie.includes('Wir hatten Glück.') && tricks[2].wie.includes('Ich hatte ein gutes Gefühl.') &&
      tricks[2].warum.includes('gewesen صحيحة'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u5-l1 aligns strict sequence, encounter, participle and sudden-event clozes, Perfekt order and 27-word production',
    wordCloze1.frage.zeigt === '____ bin ich zur Arbeit gefahren.' && wordCloze1.frage.antworten.join(' ') === 'Danach' &&
      wordCloze1.frage.nearMiss.Danache && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Danache').ok &&
      wordCloze2.frage.zeigt === 'Die ____ war zufällig.' && wordCloze2.frage.antworten.join(' ') === 'Begegnung' &&
      wordCloze2.frage.nearMiss.Begegnungen && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Begegnungen').ok &&
      imitate.zeigt.de === 'Zuerst bin ich früh ____.' && imitate.frage.antworten.join(' ') === 'aufgestanden' &&
      imitate.frage.nearMiss.aufgestandet && !win.DW.renderers.judgeCloze(imitate.frage, 'aufgestandet').ok &&
      drill.frage.zeigt === '____ hat es stark geregnet.' && drill.frage.antworten.join(' ') === 'Plötzlich' &&
      drill.frage.nearMiss.Plötzliche && !win.DW.renderers.judgeCloze(drill.frage, 'Plötzliche').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'bin' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Danach' && order.frage.fields.lsk.join(' ') === 'bin' &&
      order.frage.fields.mittelfeld.join(' ') === 'ich zur Arbeit' && order.frage.fields.rsk.join(' ') === 'gefahren.' &&
      order.frage.rightBracket.join(' ') === 'gefahren.' && win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Danach', 'ich', 'bin', 'zur', 'Arbeit', 'gefahren.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 27 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text =>
        text.replace(/[,.!?]/g, '').toLocaleLowerCase('de').includes(x.replace(/[,.!?]/g, '').toLocaleLowerCase('de')))) &&
      targets.every(x => speaking.erklaerung.replace(/[,.!?]/g, '').toLocaleLowerCase('de')
        .includes(x.replace(/[,.!?]/g, '').toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u5-l1 makes 80 percent four of five independent across conclusion, sudden event, commute, start and breakfast',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u5-l1\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u5-l1.s07 | cap.a2-u5-l1.s21 | cap.a2-u5-l1.s22 | cap.a2-u5-l1.s08 | cap.a2-u5-l1.s05' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) && checks[0].frage.misconceptionFamilies.a === 'konjugation' &&
      clozeCheck.frage.zeigt === '____ hat es stark geregnet.' &&
      clozeCheck.frage.antworten.join(' ') === 'Plötzlich' && clozeCheck.frage.nearMiss.Plötzliche &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Plötzliche').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'bin' &&
      orderCheck.frage.verbFirst === false && orderCheck.frage.fields.rsk.join(' ') === 'gefahren.' &&
      orderCheck.frage.rightBracket.join(' ') === 'gefahren.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Danach', 'ich', 'bin', 'zur', 'Arbeit', 'gefahren.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'wortstellung' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) && checks[4].frage.misconceptionFamilies.a === 'konjugation');
}
/* ---------- audited A2 opinion, weighing, agreement and disagreement lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u5-l2'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Meiner Meinung nach ist der Plan sinnvoll.',
    'Der Plan ist einerseits praktisch, andererseits teuer.',
    'Trotzdem bin ich dafür.',
    'Da stimme ich dir zu.',
    'Ich muss dir leider widersprechen.'
  ];
  t('Corpus lesson a2-u5-l2 bounds opinion, weighing, stance, agreement and disagreement to five complete sentences',
    lesson.title.de === 'Meinung äußern: abwägen, zustimmen und widersprechen' &&
      lesson.title.ar === 'التعبير عن الرأي: الموازنة والموافقة والاعتراض' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'التعبير عن الرأي والموازنة بين الحجج' &&
      row.grammar.item === 'meiner Meinung nach + V2 · einerseits … andererseits · trotzdem + V2 · zustimmen/widersprechen + Dat.' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 36 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === [targets[0], targets[1], targets[3], targets[2]][i]) &&
      lesson.schritte.find(s => s.id === 's19').zeigt.de === targets[4] &&
      lesson.schritte[0].zeigt.de ===
        'Am Ende äußerst du deine Meinung, wägst Vorteile und Nachteile ab und stimmst zu oder widersprichst');

  const expectedWords = [
    'die Meinung', 'meiner Meinung nach', 'ich finde', 'ich glaube', 'zustimmen', 'widersprechen',
    'recht haben', 'der Vorteil', 'der Nachteil', 'einerseits', 'andererseits', 'obwohl',
    'trotzdem', 'deshalb', 'vielleicht', 'das Argument', 'die Diskussion', 'diskutieren',
    'das Thema', 'die Erfahrung', 'der Grund', 'vergleichen', 'die Wahl', 'wählen',
    'sinnvoll', 'unsinnig', 'genau', 'privat', 'selbst', 'streng', 'dafür', 'dagegen',
    'darüber', 'egal', 'aufregen', 'streiten'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u5-l2 reviews all 36 entries and three nuanced mnemonics without rejecting valid contextual alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['die Meinung'].ex === targets[0] &&
      byWord['meiner Meinung nach'].why.includes('nach meiner Meinung gefragt') &&
      byWord['ich finde'].ex === 'Ich finde den Plan praktisch.' &&
      byWord['ich glaube'].ex === 'Ich glaube, dass der Plan funktioniert.' &&
      byWord.zustimmen.ex === targets[3] && byWord.widersprechen.ex === targets[4] &&
      byWord['recht haben'].why.includes('Recht haben') &&
      byWord['der Vorteil'].ex.includes('dass der Plan Zeit spart') &&
      byWord['der Nachteil'].ex.includes('dass der Plan teuer ist') &&
      byWord.einerseits.ex === targets[1] && byWord.einerseits.why.includes('Einerseits ist der Plan praktisch') &&
      byWord.obwohl.ex === 'Obwohl der Plan teuer ist, bin ich dafür.' && byWord.trotzdem.ex === targets[2] &&
      byWord['die Diskussion'].why.includes('ist lang gewesen') &&
      byWord.diskutieren.why.includes('den Plan diskutieren') &&
      byWord['das Thema'].why.includes('interessant gemacht') &&
      byWord.vergleichen.why.includes('mit einem anderen vergleichen') &&
      byWord['die Wahl'].why.includes('die Wahl schwer gemacht') &&
      byWord.sinnvoll.why.includes('sinnvoll gemacht') &&
      byWord.selbst.why.includes('Ich helfe mir selbst') &&
      byWord.dagegen.why.includes('gegen den Plan') && byWord.darüber.why.includes('Wir sprechen über das') &&
      byWord.aufregen.why.includes('Das regt mich auf') &&
      byWord.streiten.why.includes('um Geld streiten') && byWord.streiten.why.includes('mit jemandem streiten') &&
      !['Nach meiner Meinung gefragt', 'Du hast Recht.', 'Die Diskussion ist lang gewesen.',
        'Wir diskutieren den Plan.', 'Jemand hat das Thema interessant gemacht.',
        'Ich vergleiche einen Plan mit einem anderen.', 'Jemand hat mir die Wahl schwer gemacht.',
        'Der Plan wurde sinnvoll gemacht.', 'Ich helfe mir selbst.', 'Ich bin gegen den Plan.',
        'Wir sprechen über das.', 'Das regt mich auf.', 'Wir streiten um Geld.',
        'Ich streite mit jemandem.'].some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes(targets[0]) && tricks[0].wie.includes('Ich finde den Plan praktisch.') &&
      tricks[0].warum.includes('ist مباشرة') && tricks[1].wie.includes(targets[1]) && tricks[1].wie.includes(targets[2]) &&
      tricks[1].warum.includes('bin بعده مباشرة') && tricks[2].wie.includes(targets[3]) && tricks[2].wie.includes(targets[4]) &&
      tricks[2].warum.includes('الداتيف dir'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's18');
  const drill = lesson.schritte.find(s => s.id === 's22');
  const order = lesson.schritte.find(s => s.id === 's23');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u5-l2 aligns strict modal, comparison, opinion and separable-prefix clozes, exact weighing order and 29-word production',
    wordCloze1.frage.zeigt === 'Ich muss dir leider ____.' && wordCloze1.frage.antworten.join(' ') === 'widersprechen' &&
      wordCloze1.frage.nearMiss.widerspricht && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'widerspricht').ok &&
      wordCloze2.frage.zeigt === '____ die beiden Pläne!' && wordCloze2.frage.antworten.join(' ') === 'Vergleiche' &&
      wordCloze2.frage.nearMiss.vergleichst && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'vergleichst').ok &&
      imitate.zeigt.de === 'Meiner ____ nach ist der Plan sinnvoll.' && imitate.frage.antworten.join(' ') === 'Meinung' &&
      imitate.frage.nearMiss.Meinunge && !win.DW.renderers.judgeCloze(imitate.frage, 'Meinunge').ok &&
      drill.frage.zeigt === 'Da stimme ich dir ____.' && drill.frage.antworten.join(' ') === 'zu' &&
      drill.frage.nearMiss.zustimmen && !win.DW.renderers.judgeCloze(drill.frage, 'zustimmen').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[1] && order.frage.finite === 'ist' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Der Plan' && order.frage.fields.lsk.join(' ') === 'ist' &&
      order.frage.fields.mittelfeld.join(' ') === 'einerseits praktisch, andererseits teuer.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Der', 'Plan', 'einerseits', 'ist', 'praktisch,', 'andererseits', 'teuer.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 29 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text =>
        text.replace(/[,.!?]/g, '').toLocaleLowerCase('de').includes(x.replace(/[,.!?]/g, '').toLocaleLowerCase('de')))) &&
      targets.every(x => speaking.erklaerung.replace(/[,.!?]/g, '').toLocaleLowerCase('de')
        .includes(x.replace(/[,.!?]/g, '').toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u5-l2 makes 80 percent four of five independent across stance, agreement, weighing, opinion and disagreement',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u5-l2\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u5-l2.s07 | cap.a2-u5-l2.s22 | cap.a2-u5-l2.s23 | cap.a2-u5-l2.s08 | cap.a2-u5-l2.s19' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[2]) && checks[0].frage.misconceptionFamilies.a === 'wortstellung' &&
      clozeCheck.frage.zeigt === 'Da stimme ich dir ____.' && clozeCheck.frage.antworten.join(' ') === 'zu' &&
      clozeCheck.frage.nearMiss.zustimmen && !win.DW.renderers.judgeCloze(clozeCheck.frage, 'zustimmen').ok &&
      orderCheck.frage.correct.join(' ') === targets[1] && orderCheck.frage.finite === 'ist' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Der Plan' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Der', 'Plan', 'einerseits', 'ist', 'praktisch,', 'andererseits', 'teuer.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'wortstellung' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) && checks[4].frage.misconceptionFamilies.a === 'kasus');
}
/* ---------- audited A2 formal email lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u5-l3'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Sehr geehrte Damen und Herren,',
    'ich schreibe Ihnen wegen eines Termins.',
    'Könnten Sie mir bitte einen neuen Termin geben?',
    'Vielen Dank für Ihre Antwort.',
    'Mit freundlichen Grüßen\nSara Ben Ali'
  ];
  t('Corpus lesson a2-u5-l3 bounds a formal email to salutation, reason, request, thanks, closing and signature',
    lesson.title.de === 'Formelle E-Mail: Anrede, Bitte und Gruß' &&
      lesson.title.ar === 'البريد الإلكتروني الرسمي: النداء والطلب والختام' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'كتابة بريد إلكتروني رسمي' &&
      row.grammar.item === 'Sehr geehrte …, · Ihnen/Ihre · wegen + Genitiv · Könnten Sie …? · Mit freundlichen Grüßen' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 35 && lesson.wortschatz.length === 31 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === targets[i]) &&
      lesson.schritte.find(s => s.id === 's18').zeigt.de === targets[2] &&
      lesson.schritte[0].zeigt.de ===
        'Am Ende schreibst du eine formelle E-Mail mit Anrede, Bitte, Dank, Gruß und Unterschrift');

  const expectedWords = [
    'Sehr geehrte Damen und Herren', 'der Brief', 'die Anrede', 'der Gruß', 'der Betreff',
    'die Unterschrift', 'unterschreiben', 'die Bewerbung', 'formell', 'informell',
    'Mit freundlichen Grüßen', 'Liebe', 'Lieber', 'der Absender', 'der Empfänger',
    'die Anlage', 'der Lebenslauf', 'das Zeugnis', 'die Bitte', 'der Dank',
    'sich bedanken', 'die Information', 'die Antwort', 'die Frist', 'die Post',
    'die E-Mail', 'der Kontakt', 'sparen', 'schaffen', 'die Bohne', 'paar'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u5-l3 reviews all 31 entries and three nuanced mnemonics without rejecting valid registers or contextual alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['Sehr geehrte Damen und Herren'].ex === targets[0] &&
      byWord['der Brief'].ex === 'Ich schreibe einen formellen Brief.' &&
      byWord['die Anrede'].why.includes('am Anfang') && byWord['der Gruß'].ex === 'Viele Grüße aus Tunis!' &&
      byWord['der Betreff'].ex === 'Im Betreff steht der Termin.' &&
      byWord['die Unterschrift'].ex === 'Unter dem Brief steht meine Unterschrift.' &&
      byWord.unterschreiben.why.includes('المصدر unterschreiben ثم Sie') &&
      byWord['die Bewerbung'].why.includes('per E-Mail أو per Post') &&
      byWord.formell.why.includes('formell formuliert') && byWord.informell.ex.includes('informelle E-Mail') &&
      byWord['Mit freundlichen Grüßen'].ex === targets[4] && byWord['Mit freundlichen Grüßen'].why.includes('لا فاصلة') &&
      byWord.Liebe.why.includes('شخص مقرّب') && byWord.Lieber.ex.startsWith('Lieber Tom,') &&
      byWord['der Absender'].why.includes('die Absenderin') && byWord['der Empfänger'].why.includes('die Empfängerin') &&
      byWord['die Anlage'].why.includes('Die Anlage schicke ich فجملة صحيحة') &&
      byWord['der Lebenslauf'].ex === 'Ich lege den Lebenslauf bei.' &&
      byWord['das Zeugnis'].ex === 'Das Zeugnis ist eine Anlage.' && byWord['die Bitte'].ex.includes('eine Bitte') &&
      byWord['der Dank'].ex === targets[3] && byWord['sich bedanken'].ex === 'Ich bedanke mich für Ihre Antwort.' &&
      byWord['die Information'].ex === 'Könnten Sie mir bitte eine Information schicken?' &&
      byWord['die Antwort'].why.includes('auf + Akkusativ') && byWord['die Frist'].ex.endsWith('am Freitag.') &&
      byWord['die Post'].ex.includes('mit der Post') && byWord['die E-Mail'].ex.includes('an die Firma') &&
      byWord['der Kontakt'].ex.includes('Kontaktdaten') && byWord.sparen.why.includes('auf ein neues Fahrrad sparen') &&
      byWord.schaffen.why.includes('Geschäft') && byWord['die Bohne'].ex.startsWith('Die Bohnen') &&
      byWord.paar.why.includes('ein Paar') &&
      !['Liebe Sara, ich hoffe, es geht dir gut.', 'Lieber Tom, vielen Dank für deine Nachricht.',
        'Die Anlage schicke ich.', 'Ich spare auf ein neues Fahrrad.',
        'Die E-Mail ist formell formuliert.', 'Ich schicke meine Bewerbung per Post.'].some(x => errors.includes(x)) &&
      lesson.schritte.find(s => s.id === 's05').frage.feedback.c.includes('wegen einem Termin') &&
      tricks.length === 3 && tricks[0].wie.includes(targets[0]) && tricks[0].wie.includes('Mit freundlichen Grüßen') &&
      tricks[0].warum.includes('بلا فاصلة') && tricks[1].wie.includes(targets[1]) && tricks[1].wie.includes(targets[2]) &&
      tricks[1].wie.includes(targets[3]) && tricks[1].warum.includes('Genitiv') &&
      tricks[2].wie.includes('Die Anlage schicke ich mit.') && tricks[2].wie.includes('Ich lege den Lebenslauf bei.'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u5-l3 aligns strict signature, information, salutation and closing clozes, modal order and 30-word production',
    wordCloze1.frage.zeigt === 'Unter dem Brief steht meine ____.' && wordCloze1.frage.antworten.join(' ') === 'Unterschrift' &&
      wordCloze1.frage.nearMiss.Unterschriften && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Unterschriften').ok &&
      wordCloze2.frage.zeigt === 'Könnten Sie mir bitte eine ____ schicken?' && wordCloze2.frage.antworten.join(' ') === 'Information' &&
      wordCloze2.frage.nearMiss.Informationen && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Informationen').ok &&
      imitate.zeigt.de === 'Sehr geehrte Damen und ____,' && imitate.frage.antworten.join(' ') === 'Herren' &&
      imitate.frage.nearMiss.Herr && !win.DW.renderers.judgeCloze(imitate.frage, 'Herr').ok &&
      drill.frage.zeigt === 'Mit ____ Grüßen\nSara Ben Ali' && drill.frage.antworten.join(' ') === 'freundlichen' &&
      drill.frage.nearMiss.freundliche && !win.DW.renderers.judgeCloze(drill.frage, 'freundliche').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'Könnten' && order.frage.verbFirst === true &&
      order.frage.fields.vorfeld.length === 0 && order.frage.fields.lsk.join(' ') === 'Könnten' &&
      order.frage.fields.mittelfeld.join(' ') === 'Sie mir bitte einen neuen Termin' && order.frage.fields.rsk.join(' ') === 'geben?' &&
      order.frage.rightBracket.join(' ') === 'geben?' && win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Sie', 'Könnten', 'mir', 'bitte', 'einen', 'neuen', 'Termin', 'geben?']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 30 &&
      targets.slice(0, 4).every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text =>
        text.replace(/[,.!?]/g, '').toLocaleLowerCase('de').includes(x.replace(/[,.!?]/g, '').toLocaleLowerCase('de')))) &&
      [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de, speaking.erklaerung].every(text =>
        text.includes('Mit freundlichen Grüßen') && text.includes('Sara Ben Ali')) &&
      targets.slice(0, 4).every(x => speaking.erklaerung.replace(/[,.!?]/g, '').toLocaleLowerCase('de')
        .includes(x.replace(/[,.!?]/g, '').toLocaleLowerCase('de'))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u5-l3 makes 80 percent four of five independent across thanks, closing, request, salutation and reason',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u5-l3\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u5-l3.s07 | cap.a2-u5-l3.s21 | cap.a2-u5-l3.s22 | cap.a2-u5-l3.s08 | cap.a2-u5-l3.s05' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'deklination' &&
      clozeCheck.frage.zeigt === 'Mit ____ Grüßen\nSara Ben Ali' && clozeCheck.frage.antworten.join(' ') === 'freundlichen' &&
      clozeCheck.frage.nearMiss.freundliche && !win.DW.renderers.judgeCloze(clozeCheck.frage, 'freundliche').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'Könnten' &&
      orderCheck.frage.verbFirst === true && orderCheck.frage.fields.rsk.join(' ') === 'geben?' &&
      orderCheck.frage.rightBracket.join(' ') === 'geben?' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Sie', 'Könnten', 'mir', 'bitte', 'einen', 'neuen', 'Termin', 'geben?']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'deklination' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) && checks[4].frage.misconceptionFamilies.a === 'kasus');
}
/* ---------- audited A2 formal telephone lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u5-l4'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Guten Tag, Sara Ben Ali am Apparat.',
    'Könnte ich bitte Herrn Bauer sprechen?',
    'Herr Bauer ist gerade nicht da.',
    'Kann ich ihm etwas ausrichten?',
    'Ja, ich bitte um einen Rückruf.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson a2-u5-l4 bounds a formal call to identification, requested person, absence, message and callback',
    lesson.title.de === 'Formelles Telefonat: nach einer Person fragen und um Rückruf bitten' &&
      lesson.title.ar === 'مكالمة رسمية: طلب شخص وطلب إعادة الاتصال' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'إجراء مكالمة رسمية وطلب إعادة الاتصال' &&
      row.grammar.item === 'am Apparat · Könnte ich bitte Herrn … sprechen? · nicht da · jemandem etwas ausrichten · um Rückruf bitten' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 34 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende führst du ein formelles Telefongespräch, fragst nach Herrn Bauer und bittest um einen Rückruf' &&
      lesson.schritte.find(s => s.id === 's17').zeigt.de === targets[0] + ' ' + targets[1]);

  const expectedWords = [
    'der Apparat', 'das Telefon', 'anrufen', 'zurückrufen', 'das Handy', 'die Nummer',
    'die Vorwahl', 'die Nachricht', 'der Anrufbeantworter', 'erreichen', 'besetzt', 'die Leitung',
    'sich melden', 'warten', 'der Moment', 'verbinden', 'die Durchwahl', 'das Gespräch',
    'die Rechnung', 'der Vertrag', 'die Auskunft', 'die Warteschleife', 'kostenlos',
    'sich entschuldigen', 'die Störung', 'der Rückruf', 'die SMS', 'das Mobiltelefon',
    'die Homepage', 'herunterladen', 'surfen', 'planen', 'die Person', 'die Mail'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u5-l4 reviews all 34 entries and three nuanced mnemonics while retaining valid telephone and contextual alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['der Apparat'].ex === targets[0] && byWord['der Apparat'].why.includes('Hier spricht Sara Ben Ali') &&
      byWord['das Telefon'].ex === 'Das Telefon klingelt.' && byWord.anrufen.ex.endsWith('später an.') &&
      byWord.anrufen.why.includes('jemanden rufen') && byWord.zurückrufen.ex.includes('ruft Sie morgen zurück') &&
      byWord['das Handy'].why.includes('Mein Handy ist aus') && byWord['die Nummer'].why.includes('الداتيف: mir') &&
      byWord['die Vorwahl'].why.includes('für Tunis') && byWord['die Nachricht'].why.includes('غير منفصل') &&
      byWord['der Anrufbeantworter'].ex.includes('auf den Anrufbeantworter') &&
      byWord.erreichen.why.includes('النصب: ihn') && byWord.besetzt.ex === 'Die Leitung ist besetzt.' &&
      byWord['die Leitung'].why.includes('جودة الاتصال ضعيفة') && byWord['sich melden'].ex.includes('melde mich') &&
      byWord.warten.ex === 'Bitte warten Sie einen Moment.' && byWord['der Moment'].ex === 'Einen Moment, bitte.' &&
      byWord.verbinden.ex === 'Ich verbinde Sie mit Herrn Bauer.' && byWord['die Durchwahl'].ex.includes('Ihre Durchwahl') &&
      byWord['das Gespräch'].why.includes('ist kurz gewesen') && byWord['die Rechnung'].why.includes('mit der Post') &&
      byWord['der Vertrag'].why.includes('für ein Jahr') && byWord['die Auskunft'].ex === 'Die Auskunft ist kostenlos.' &&
      byWord['die Warteschleife'].ex === 'Ich bin in der Warteschleife.' &&
      byWord['die Warteschleife'].why.includes('Ich hänge in der Warteschleife') &&
      byWord.kostenlos.why.includes('الصفة الخبرية') && byWord['sich entschuldigen'].ex.includes('entschuldige mich') &&
      byWord['die Störung'].ex === 'Entschuldigung für die Störung.' &&
      byWord['der Rückruf'].ex === targets[4] && byWord['der Rückruf'].why.includes('um etwas bitten') &&
      byWord['die SMS'].ex.startsWith('Schick mir') && byWord['das Mobiltelefon'].why.includes('Handy') &&
      byWord['die Homepage'].ex.startsWith('Auf der Homepage') && byWord.herunterladen.why.includes('lade … runter') &&
      byWord.surfen.ex === 'Ich surfe im Internet.' && byWord.planen.why.includes('eine Reise in Wien') &&
      byWord['die Person'].why.includes('Person مؤنث') && byWord['die Mail'].why.includes('E-Mail') &&
      !['Hier spricht Sara Ben Ali.', 'Ich rufe Herrn Bauer.', 'Mein Handy ist aus.',
        'Die Vorwahl für Tunis ist 71.', 'Das Gespräch ist kurz gewesen.',
        'Die Rechnung kommt mit der Post.', 'Der Vertrag läuft für ein Jahr.',
        'Ich hänge in der Warteschleife.', 'Schick mir bitte eine SMS.',
        'Ich lade die Datei runter.', 'Wir planen eine Reise in Wien.'].some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes(targets[0]) && tricks[0].wie.includes(targets[1]) &&
      tricks[0].warum.includes('Hier spricht') && tricks[0].warum.includes('Herr') &&
      tricks[1].wie.includes(targets[2]) && tricks[1].wie.includes(targets[3]) && tricks[1].warum.includes('داتيف') &&
      tricks[2].wie.includes(targets[4]) && tricks[2].wie.includes('ruft Sie morgen zurück') &&
      tricks[2].warum.includes('um einen Rückruf bitten'));

  const numberCloze = lesson.schritte.find(s => s.id === 's09');
  const holdCloze = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's18');
  const callbackCloze = lesson.schritte.find(s => s.id === 's22');
  const order = lesson.schritte.find(s => s.id === 's23');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u5-l4 aligns strict number, hold, identification and callback clozes, modal order and 30-word role production',
    numberCloze.frage.zeigt === 'Können Sie mir Ihre ____ geben?' && numberCloze.frage.antworten.join(' ') === 'Nummer' &&
      numberCloze.frage.nearMiss.Nummern && !win.DW.renderers.judgeCloze(numberCloze.frage, 'Nummern').ok &&
      holdCloze.frage.zeigt === 'Ich bin in der ____.' && holdCloze.frage.antworten.join(' ') === 'Warteschleife' &&
      holdCloze.frage.nearMiss.Warteschleifen && !win.DW.renderers.judgeCloze(holdCloze.frage, 'Warteschleifen').ok &&
      imitate.zeigt.de === 'Guten Tag, Sara Ben Ali am ____.' && imitate.frage.antworten.join(' ') === 'Apparat' &&
      imitate.frage.nearMiss.Apparaten && !win.DW.renderers.judgeCloze(imitate.frage, 'Apparaten').ok &&
      callbackCloze.frage.zeigt === 'Ja, ich bitte um einen ____.' && callbackCloze.frage.antworten.join(' ') === 'Rückruf' &&
      callbackCloze.frage.nearMiss.Rückrufe && !win.DW.renderers.judgeCloze(callbackCloze.frage, 'Rückrufe').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[3] && order.frage.finite === 'Kann' && order.frage.verbFirst === true &&
      order.frage.fields.vorfeld.length === 0 && order.frage.fields.lsk.join(' ') === 'Kann' &&
      order.frage.fields.mittelfeld.join(' ') === 'ich ihm etwas' && order.frage.fields.rsk.join(' ') === 'ausrichten?' &&
      order.frage.rightBracket.join(' ') === 'ausrichten?' && win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Ich', 'Kann', 'ihm', 'etwas', 'ausrichten?']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 30 &&
      targets.join(' ').split(/\s+/).length === 30 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u5-l4 makes 80 percent four of five independent across message, callback, requested person, identification and absence',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u5-l4\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u5-l4.s07 | cap.a2-u5-l4.s22 | cap.a2-u5-l4.s23 | cap.a2-u5-l4.s08 | cap.a2-u5-l4.s06' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'kasus' &&
      clozeCheck.frage.zeigt === 'Ja, ich bitte um einen ____.' && clozeCheck.frage.antworten.join(' ') === 'Rückruf' &&
      clozeCheck.frage.nearMiss.Rückrufe && !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Rückrufe').ok &&
      orderCheck.frage.correct.join(' ') === targets[1] && orderCheck.frage.finite === 'Könnte' &&
      orderCheck.frage.verbFirst === true && orderCheck.frage.fields.mittelfeld.join(' ') === 'ich bitte Herrn Bauer' &&
      orderCheck.frage.fields.rsk.join(' ') === 'sprechen?' && orderCheck.frage.rightBracket.join(' ') === 'sprechen?' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Ich', 'Könnte', 'bitte', 'Herrn', 'Bauer', 'sprechen?']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'präposition' &&
      checks[4].frage.optionen.some(o => o.text === targets[2]) && checks[4].frage.misconceptionFamilies.a === 'konjugation');
}
/* ---------- audited A2 five-target grammar review ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u5-l5'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich bleibe zu Hause, weil ich krank bin.',
    'Ich helfe dem Mann.',
    'Gestern bin ich nach Hause gegangen.',
    'Ich lege das Buch auf den Tisch.',
    'Der Wind ist stärker als gestern.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson a2-u5-l5 precisely scopes five A2 targets: subordinate order, helfen plus dative, sein-Perfekt, directional auf and comparison',
    lesson.title.de === 'A2-Grammatiktraining: Satzbau, Fälle, Perfekt und Vergleich' &&
      lesson.title.ar === 'تدريب قواعد A2: ترتيب الجملة والحالات وPerfekt والمقارنة' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'تصحيح خمس قواعد أساسية في A2' &&
      row.grammar.item === 'weil + Verb am Ende · helfen + Dativ · sein + gegangen · auf + Akk. bei Richtung · Komparativ + als' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 35 && lesson.wortschatz.length === 31 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === targets[i]) &&
      lesson.schritte.find(s => s.id === 's21').frage.zeigt === 'Der Wind ist ____ als gestern.' &&
      lesson.schritte[0].zeigt.de === 'Am Ende korrigierst du fünf A2-Sätze zu Satzbau, Kasus, Perfekt und Vergleich' &&
      lesson.schritte.find(s => s.id === 's17').zeigt.de === 'Ich bleibe zu Hause, weil ich krank ____.' &&
      lesson.schritte.find(s => s.id === 's18').zeigt.de === targets[1]);

  const expectedWords = [
    'der Dativ', 'der Akkusativ', 'die Präposition', 'der Nebensatz', 'das Verb',
    'die Endung', 'der Artikel', 'das Adjektiv', 'die Vergangenheit', 'das Perfekt',
    'das Präteritum', 'der Komparativ', 'der Superlativ', 'die Konjunktion', 'der Satz',
    'die Bedeutung', 'das Beispiel', 'die Regel', 'der Fehler', 'korrigieren', 'wiederholen',
    'die Übung', 'die Wiederholung', 'üben', 'nützlich', 'die Prüfung', 'das E-Book',
    'der Blog', 'stark', 'das Produkt', 'die Qualität'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u5-l5 reviews all 31 entries and three nuanced mnemonics, fixes der Dativ and retains valid contextual alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch')) &&
      byWord['der Dativ'].ex === targets[1] && byWord['der Dativ'].err === 'Ich helfe den Mann.' &&
      byWord['der Dativ'].why.includes('der Dativ لا das Dativ') &&
      byWord['der Akkusativ'].why.includes('für يأخذ Akkusativ') &&
      byWord['der Nebensatz'].why.includes('الجملة الثانوية مع weil') &&
      byWord['das Verb'].why.includes('الموضع الثاني') && byWord['das Adjektiv'].why.includes('بلا نهاية') &&
      byWord['das Perfekt'].why.includes('فعل مساعد وPartizip II') &&
      byWord['das Präteritum'].why.includes('sein وhaben') &&
      byWord['der Komparativ'].why.includes('-er وals') && byWord['der Superlativ'].ex.includes('Am stärksten') &&
      byWord['die Konjunktion'].why.includes('weil') && byWord.wiederholen.ex === 'Wiederholen Sie bitte die Regel.' &&
      byWord['die Übung'].why.includes('Die Übung ist nützlich gewesen') &&
      byWord['die Prüfung'].why.includes('in der nächsten Woche') &&
      byWord['das E-Book'].why.includes('in dem Zug') && byWord['der Blog'].why.includes('ein Blog für Reisende') &&
      byWord.stark.ex === targets[4] && byWord.stark.why.includes('مع als') &&
      !['Das Buch liegt auf dem Tisch.', 'Die Übung ist nützlich gewesen.',
        'Die Prüfung ist in der nächsten Woche.', 'Ich lese ein E-Book in dem Zug.',
        'Sie schreibt einen Blog für Reisende.'].some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes(targets[1]) && tricks[0].wie.includes(targets[3]) &&
      tricks[0].warum.includes('Dativ') && tricks[0].warum.includes('Akkusativ') &&
      tricks[1].wie.includes(targets[0]) && tricks[1].wie.includes(targets[2]) &&
      tricks[1].warum.includes('bin … gegangen') && tricks[2].wie.includes(targets[4]) &&
      tricks[2].warum.includes('stärker مع als'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u5-l5 aligns strict inflection and clause clozes, explicit Perfekt order and a 31-word five-target production',
    wordCloze1.frage.zeigt === 'Das Adjektiv bekommt hier die ____ -en.' &&
      wordCloze1.frage.antworten.join(' ') === 'Endung' && wordCloze1.frage.nearMiss.Endungen &&
      !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Endungen').ok &&
      wordCloze2.frage.zeigt === 'Diese ____ ist nützlich.' &&
      wordCloze2.frage.antworten.join(' ') === 'Übung' && wordCloze2.frage.nearMiss['Übungen'] &&
      !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Übungen').ok &&
      imitate.frage.antworten.join(' ') === 'bin' && imitate.frage.nearMiss.ist &&
      !win.DW.renderers.judgeCloze(imitate.frage, 'ist').ok &&
      drill.frage.zeigt === 'Der Wind ist ____ als gestern.' && drill.frage.antworten.join(' ') === 'stärker' &&
      drill.frage.nearMiss.stärkere && !win.DW.renderers.judgeCloze(drill.frage, 'stärkere').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'bin' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Gestern' && order.frage.fields.lsk.join(' ') === 'bin' &&
      order.frage.fields.mittelfeld.join(' ') === 'ich nach Hause' && order.frage.fields.rsk.join(' ') === 'gegangen.' &&
      order.frage.rightBracket.join(' ') === 'gegangen.' && win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Gestern', 'ich', 'bin', 'nach', 'Hause', 'gegangen.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 31 &&
      targets.join(' ').split(/\s+/).length === 31 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u5-l5 makes 80 percent four of five, independently checking direction, comparison, Perfekt, helfen plus dative and weil order',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u5-l5\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u5-l5.s07 | cap.a2-u5-l5.s21 | cap.a2-u5-l5.s22 | cap.a2-u5-l5.s08 | cap.a2-u5-l5.s04' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'kasus' &&
      clozeCheck.frage.zeigt === 'Der Wind ist ____ als gestern.' && clozeCheck.frage.antworten.join(' ') === 'stärker' &&
      clozeCheck.frage.nearMiss.stärkere && !win.DW.renderers.judgeCloze(clozeCheck.frage, 'stärkere').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'bin' &&
      orderCheck.frage.verbFirst === false && orderCheck.frage.fields.lsk.join(' ') === 'bin' &&
      orderCheck.frage.fields.rsk.join(' ') === 'gegangen.' && orderCheck.frage.rightBracket.join(' ') === 'gegangen.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Gestern', 'ich', 'bin', 'nach', 'Hause', 'gegangen.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[1]) &&
      checks[3].frage.optionen.some(o => o.text === 'Ich helfe den Mann.') &&
      checks[3].frage.misconceptionFamilies.b === 'kasus' &&
      checks[4].frage.optionen.some(o => o.text === targets[0]) && checks[4].frage.misconceptionFamilies.a === 'wortstellung');
}
/* ---------- audited A2 adult exam-format lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u5-l6'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Die Prüfung hat vier Teile: Lesen, Hören, Schreiben und Sprechen.',
    'Für die schriftliche Prüfung hat man insgesamt etwa neunzig Minuten.',
    'Im Hören hören Sie die Texte in Teil zwei einmal und sonst zweimal.',
    'Zum Bestehen braucht man insgesamt mindestens sechzig Punkte, davon mindestens fünfundvierzig schriftlich und mindestens fünfzehn mündlich.',
    'Das Sprechen findet in der Regel zu zweit statt.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson a2-u5-l6 precisely scopes the adult Goethe A2 parts, written duration, listening repeats, dual pass thresholds and pair speaking',
    lesson.title.de === 'Goethe-Zertifikat A2 für Erwachsene: Teile, Dauer und Bestehensregeln' &&
      lesson.title.ar === 'شهادة Goethe A2 للبالغين: الأقسام والمدة وقواعد النجاح' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'بنية امتحان Goethe A2 للبالغين وقواعد النجاح' &&
      row.grammar.item === 'vier Prüfungsteile · schriftlich ca. 90 Min. · Hören: Teil 2 einmal, sonst zweimal · 60/100 + 45/75 schriftlich + 15/25 mündlich · Sprechen zu zweit' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 35 && lesson.wortschatz.length === 30 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === [targets[0], targets[1], targets[2], targets[4]][i]) &&
      lesson.schritte.find(s => s.id === 's21').frage.zeigt.includes('mindestens sechzig ____') &&
      lesson.schritte[0].zeigt.de === 'Am Ende erklärst du fünf Fakten zu Teilen, Dauer, Hören, Punkten und Sprechen' &&
      lesson.schritte.find(s => s.id === 's17').zeigt.de === 'Die Prüfung hat vier ____: Lesen, Hören, Schreiben und Sprechen.' &&
      lesson.schritte.find(s => s.id === 's18').zeigt.de === targets[4]);

  const expectedWords = [
    'der Teil', 'die Aufgabe', 'das Hören', 'das Lesen', 'das Schreiben', 'das Sprechen',
    'mündlich', 'schriftlich', 'bestehen', 'das Prozent', 'die Note', 'das Ergebnis',
    'der Punkt', 'der Antwortbogen', 'ankreuzen', 'die Zeit', 'die Uhr', 'die Anweisung',
    'das Beispiel', 'die Lösung', 'richtig', 'falsch', 'die Wiederholung', 'die Prüfungsangst',
    'die Vorbereitung', 'der Erfolg', 'prüfen', 'renovieren', 'raus', 'zurücklaufen'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u5-l6 reviews all 30 entries and three nuanced mnemonics, replacing false independent-module and blanket-listening claims',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err && !it.err.includes('falsch gemacht')) &&
      byWord['der Teil'].ex === targets[0] && byWord['der Teil'].why.includes('أربعة Module مستقلة') &&
      byWord['die Aufgabe'].why.includes('die Aufgabe') && byWord['das Hören'].ex === targets[2] &&
      byWord['das Hören'].fam === 'hoerstrategie' && byWord['das Lesen'].ex.includes('dreißig Minuten') &&
      byWord['das Schreiben'].ex === 'Das Schreiben dauert dreißig Minuten.' &&
      byWord['das Sprechen'].ex === targets[4] && byWord.mündlich.why.includes('15 من 25') &&
      byWord.schriftlich.why.includes('75 نقطة') && byWord.bestehen.why.includes('muss man') &&
      byWord['das Prozent'].why.includes('الحدين الكتابي والشفهي') &&
      byWord['die Note'].ex === 'Eine Gesamtnote allein zeigt die drei Mindestgrenzen nicht.' &&
      byWord['die Note'].why.includes('im أو auf dem Zeugnis') &&
      byWord['das Ergebnis'].ex.includes('Punktzahl') && byWord['der Punkt'].ex === targets[3] &&
      byWord['der Punkt'].why.includes('60/100') && byWord['der Punkt'].why.includes('45/75') && byWord['der Punkt'].why.includes('15/25') &&
      byWord['der Antwortbogen'].ex === 'Füllen Sie den Antwortbogen aus.' &&
      byWord.ankreuzen.ex === 'Kreuzen Sie die richtige Antwort an.' && byWord['die Zeit'].why.includes('المفرد') &&
      byWord['die Uhr'].ex.includes('auf die Uhr') && byWord['die Anweisung'].err.includes('den Anweisung') &&
      byWord['das Beispiel'].why.includes('محايد') && byWord['die Lösung'].why.includes('dem Lösungsschlüssel') &&
      byWord.richtig.ex === 'Nur eine Antwort ist richtig.' && byWord.falsch.ex === 'Diese Antwort ist falsch.' &&
      byWord['die Wiederholung'].ex === 'Nur in Teil zwei gibt es keine Wiederholung.' &&
      byWord['die Prüfungsangst'].ex.includes('hilft eine gute Vorbereitung') &&
      byWord['die Vorbereitung'].ex.includes('Modellsatz') && byWord['der Erfolg'].ex.includes('zum Erfolg') &&
      byWord.prüfen.ex === 'Prüfen Sie am Ende den Antwortbogen.' &&
      byWord.renovieren.why.includes('wir يأخذ renovieren') && byWord.raus.why.includes('hinaus أو heraus') &&
      byWord.zurücklaufen.pl.includes('ist zurückgelaufen') &&
      !['Die Note steht auf dem Zeugnis.', 'Das Sprechen findet in der Regel zu zweit statt.',
        'Im Hören hören Sie die Texte in Teil zwei einmal und sonst zweimal.'].some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('Lesen · Hören · Schreiben = schriftlich') &&
      tricks[0].warum.includes('75 نقطة') && tricks[0].warum.includes('25 نقطة') &&
      tricks[1].wie.includes('60/100') && tricks[1].wie.includes('45/75') && tricks[1].wie.includes('15/25') &&
      tricks[1].warum.includes('لا يكفي مجموع 60 وحده') && tricks[2].wie.includes('Teil zwei: einmal') &&
      tricks[2].wie.includes('die anderen Teile: zweimal'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const imitate = lesson.schritte.find(s => s.id === 's17');
  const drill = lesson.schritte.find(s => s.id === 's21');
  const order = lesson.schritte.find(s => s.id === 's22');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u5-l6 aligns strict format clozes, explicit written-duration order and a 58-word five-fact production',
    wordCloze1.frage.zeigt === 'Das ____ findet in der Regel zu zweit statt.' &&
      wordCloze1.frage.antworten.join(' ') === 'Sprechen' && wordCloze1.frage.nearMiss.Schreiben &&
      !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Schreiben').ok &&
      wordCloze2.frage.zeigt === 'Diese Antwort ist ____.' && wordCloze2.frage.antworten.join(' ') === 'falsch' &&
      wordCloze2.frage.nearMiss.falsche && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'falsche').ok &&
      imitate.frage.antworten.join(' ') === 'Teile' && imitate.frage.nearMiss.Module &&
      !win.DW.renderers.judgeCloze(imitate.frage, 'Module').ok &&
      drill.frage.zeigt === 'Zum Bestehen braucht man insgesamt mindestens sechzig ____, davon mindestens fünfundvierzig schriftlich und mindestens fünfzehn mündlich.' &&
      drill.frage.antworten.join(' ') === 'Punkte' && drill.frage.nearMiss.Punkt &&
      !win.DW.renderers.judgeCloze(drill.frage, 'Punkt').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[1] && order.frage.finite === 'hat' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Für die schriftliche Prüfung' && order.frage.fields.lsk.join(' ') === 'hat' &&
      order.frage.fields.mittelfeld.join(' ') === 'man insgesamt etwa neunzig Minuten.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Für', 'die', 'schriftliche', 'Prüfung', 'man', 'hat', 'insgesamt', 'etwa', 'neunzig', 'Minuten.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 58 &&
      targets.join(' ').split(/\s+/).length === 58 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u5-l6 makes 80 percent four of five, independently checking pair speaking, thresholds, duration, four parts and listening repeats',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u5-l6\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u5-l6.s07 | cap.a2-u5-l6.s21 | cap.a2-u5-l6.s22 | cap.a2-u5-l6.s08 | cap.a2-u5-l6.s06' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[4]) && checks[0].frage.misconceptionFamilies.a === 'pruefstrategie' &&
      clozeCheck.frage.zeigt.includes('mindestens sechzig ____') && clozeCheck.frage.antworten.join(' ') === 'Punkte' &&
      clozeCheck.frage.nearMiss.Punkt && !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Punkt').ok &&
      orderCheck.frage.correct.join(' ') === targets[1] && orderCheck.frage.finite === 'hat' &&
      orderCheck.frage.verbFirst === false && orderCheck.frage.fields.vorfeld.join(' ') === 'Für die schriftliche Prüfung' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Für', 'die', 'schriftliche', 'Prüfung', 'man', 'hat', 'insgesamt', 'etwa', 'neunzig', 'Minuten.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'pruefstrategie' &&
      checks[4].frage.optionen.some(o => o.text === targets[2]) && checks[4].frage.misconceptionFamilies.a === 'hoerstrategie');
}
/* ---------- audited A2 body, clothing and care lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u6-l1'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Wasch dir bitte das Gesicht!',
    'Die Jeans passt mir nicht.',
    'Er trägt heute einen Anzug.',
    'Ich suche eine Creme für die Hände.',
    'Rauchen ist schädlich für die Gesundheit.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson a2-u6-l1 precisely scopes body, clothing and care through body-part dative, passen dative, clothing accusative and für',
    lesson.title.de === 'Körper, Kleidung und Pflege' && lesson.title.ar === 'الجسم والملابس والعناية' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'التحدث عن الجسم والملابس والعناية' &&
      row.grammar.item === 'sich (Dat.) das Gesicht waschen · passen + Dat. · einen Anzug tragen · für + Akk. · schädlich für' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende benutzt du Alltagswörter in fünf Sätzen über Körper, Kleidung und Pflege' &&
      lesson.schritte.find(s => s.id === 's19').zeigt.de === 'Wasch ____ bitte das Gesicht!' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'das Blatt', 'die Geldbörse', 'das Gesicht', 'die Jeans', 'die Kamera', 'die Kette',
    'die Kosmetik', 'die Lüge', 'lügen', 'die Mailbox', 'die E-Mail', 'das Parfüm',
    'das Poster', 'der Ring', 'das Stockwerk', 'die Tafel', 'das Taschengeld', 'der Zettel',
    'einpacken', 'herstellen', 'wechseln', 'der Anzug', 'dick', 'dünn', 'blond', 'die Creme',
    'das Mittel', 'die Krankheit', 'der Körper', 'schädlich', 'schwanger', 'die Ahnung',
    'merken', 'aufpassen', 'die Menge', 'hässlich', 'vorsichtig', 'notwendig', 'super', 'direkt'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u6-l1 reviews all 40 entries and three nuanced mnemonics without rejecting valid regional, register or contextual alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord['das Blatt'].why.includes('Papierblatt') && byWord['die Geldbörse'].why.includes('liegt') &&
      byWord['das Gesicht'].ex === targets[0] && byWord['das Gesicht'].why.includes('dir للداتيف') &&
      byWord['die Jeans'].ex === targets[1] && byWord['die Jeans'].why.includes('passen') &&
      byWord['die Kamera'].why.includes('die Kamera') && byWord['die Kette'].ex === 'Die Kette ist aus Gold.' &&
      byWord['die Kosmetik'].err === 'Kosmetik kaufen ich im Erdgeschoss.' && byWord['die Lüge'].why.includes('eine Lüge') &&
      byWord.lügen.why.includes('المصدر lügen') && byWord['die Mailbox'].ex.includes('auf die Mailbox') &&
      byWord['die E-Mail'].why.includes('das E-Mail') && byWord['die E-Mail'].err.includes('dich') &&
      byWord['das Parfüm'].why.includes('das Parfüm') && byWord['das Poster'].why.includes('hängt') &&
      byWord['der Ring'].ex === 'Ich habe meinen Ring verloren.' && byWord['das Stockwerk'].why.includes('dritten') &&
      byWord['die Tafel'].ex.includes('an die Tafel') && byWord['das Taschengeld'].why.includes('wie viel') &&
      byWord['der Zettel'].why.includes('einen Zettel') && byWord.einpacken.why.includes('Pack … ein') &&
      byWord.herstellen.why.includes('stellen … her') && byWord.wechseln.why.includes('ändern يعني') &&
      byWord['der Anzug'].ex === targets[2] && byWord.dick.ex === 'Ich bin zu dick.' &&
      byWord.dünn.ex === 'Er ist groß und dünn.' && byWord.blond.ex === 'Lisa hat blonde Haare.' &&
      byWord['die Creme'].ex === targets[3] && byWord['das Mittel'].why.includes('bei لوصف الاستعمال') &&
      byWord['die Krankheit'].why.includes('welche Krankheit') &&
      byWord['der Körper'].why.includes('meinen Körper') && byWord.schädlich.ex === targets[4] &&
      byWord.schwanger.ex === 'Lena ist schwanger.' && byWord['die Ahnung'].err === 'Ich hatte keinen Ahnung.' &&
      byWord.merken.why.includes('الداتيف: mir') && byWord.aufpassen.why.includes('passt … auf') &&
      byWord['die Menge'].why.includes('eine Menge an Zeit') && byWord.hässlich.why.includes('hässliche Sofa') &&
      byWord.vorsichtig.why.includes('mit + Dativ') && byWord.notwendig.why.includes('بلا نهاية') &&
      byWord.super.err === 'Dein Kleid sind super!' && byWord.direkt.ex === 'Tragen Sie die Creme direkt auf die Haut auf.' &&
      !['Ich bin zu fett.', 'Er ist groß und schwach.', 'Ich habe keine Ahnung gehabt.',
        'Ich schreibe dir ein E-Mail.', 'Wir haben noch eine Menge an Zeit.'].some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie === targets[0] && tricks[0].warum.includes('dir للداتيف') &&
      tricks[1].wie.includes('passt mir') && tricks[1].wie.includes('einen Anzug') &&
      tricks[1].warum.includes('الداتيف') && tricks[1].warum.includes('النصب') &&
      tricks[2].wie.includes('für die Hände') && tricks[2].wie.includes('für die Gesundheit'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u6-l1 aligns strict vocabulary and case clozes, explicit Anzug order and a 28-word five-target production',
    wordCloze1.frage.zeigt === 'Die ____ ist aus Gold.' && wordCloze1.frage.antworten.join(' ') === 'Kette' &&
      wordCloze1.frage.nearMiss.Ketten && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Ketten').ok &&
      wordCloze2.frage.zeigt === 'Er trägt heute einen ____.' && wordCloze2.frage.antworten.join(' ') === 'Anzug' &&
      wordCloze2.frage.nearMiss.Anzüge && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Anzüge').ok &&
      wordCloze3.frage.zeigt === 'Für den Antrag ist eine Unterschrift ____.' &&
      wordCloze3.frage.antworten.join(' ') === 'notwendig' && wordCloze3.frage.nearMiss.notwendige &&
      !win.DW.renderers.judgeCloze(wordCloze3.frage, 'notwendige').ok &&
      imitate.frage.antworten.join(' ') === 'dir' && imitate.frage.nearMiss.dich &&
      !win.DW.renderers.judgeCloze(imitate.frage, 'dich').ok &&
      drill.frage.zeigt === 'Rauchen ist ____ für die Gesundheit.' && drill.frage.antworten.join(' ') === 'schädlich' &&
      drill.frage.nearMiss.schädliche && !win.DW.renderers.judgeCloze(drill.frage, 'schädliche').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'trägt' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Er' && order.frage.fields.lsk.join(' ') === 'trägt' &&
      order.frage.fields.mittelfeld.join(' ') === 'heute einen Anzug.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Er', 'heute', 'trägt', 'einen', 'Anzug.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 28 &&
      targets.join(' ').split(/\s+/).length === 28 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u6-l1 makes 80 percent four of five, independently checking für, schädlich, Anzug, body-part dative and passen dative',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u6-l1\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u6-l1.s07 | cap.a2-u6-l1.s23 | cap.a2-u6-l1.s24 | cap.a2-u6-l1.s08 | cap.a2-u6-l1.s05' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'präposition' &&
      clozeCheck.frage.zeigt === 'Rauchen ist ____ für die Gesundheit.' &&
      clozeCheck.frage.antworten.join(' ') === 'schädlich' && clozeCheck.frage.nearMiss.schädliche &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'schädliche').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'trägt' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Er' && orderCheck.frage.fields.lsk.join(' ') === 'trägt' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Er', 'heute', 'trägt', 'einen', 'Anzug.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'kasus' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) && checks[4].frage.misconceptionFamilies.a === 'kasus');
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

/* ---------- audited A2 food, music and leisure lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u6-l2'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ein Glas Mineralwasser, bitte!',
    'Ich nehme eine kleine Portion Eis.',
    'Er spielt in einer Band.',
    'Für das Konzert gibt es noch Karten.',
    'In der Bibliothek darf man nicht laut sprechen.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson a2-u6-l2 precisely scopes ordering and leisure through quantity, Portion gender, location dative, für accusative and modal order',
    lesson.title.de === 'Essen, Musik und Freizeit' && lesson.title.ar === 'الطعام والموسيقى ووقت الفراغ' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الطلب والحديث عن أنشطة وقت الفراغ' &&
      row.grammar.item === 'Mengenangabe ohne von · eine kleine Portion · in + Dat. am Ort · für + Akk. · Modalverb + Infinitiv' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende benutzt du fünf Sätze, wenn du bestellst und über Musik und Freizeit sprichst' &&
      lesson.schritte.find(s => s.id === 's19').zeigt.de === 'Ein Glas ____, bitte!' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'das Mineralwasser', 'die Portion', 'der Rest', 'das Gericht', 'der Hamburger', 'die Pizza',
    'die Schokolade', 'die Süßigkeiten', 'das Schwein', 'das Rind', 'fett', 'braten',
    'die Cafeteria', 'das Festival', 'die Band', 'das Konzert', 'die Gitarre', 'das Instrument',
    'romantisch', 'die Rose', 'der Star', 'die Kultur', 'die Bibliothek', 'der Krimi', 'basteln',
    'zeichnen', 'sammeln', 'das Plakat', 'der Zirkus', 'der Zoo', 'die Ausstellung', 'das Schloss',
    'der Rundgang', 'komisch', 'schrecklich', 'einige', 'verschieden', 'außer', 'sonst', 'total'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u6-l2 reviews all 40 entries and three nuanced mnemonics without rejecting valid specific, directional or stylistic alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord['das Mineralwasser'].ex === targets[0] && byWord['das Mineralwasser'].why.includes('بلا von') &&
      byWord['die Portion'].ex === targets[1] && byWord['die Portion'].why.includes('eine kleine Portion') &&
      byWord['der Rest'].why.includes('لا نضيف') && byWord['das Gericht'].why.includes('ein Gericht') &&
      byWord['der Hamburger'].ex === 'Ich nehme einen Hamburger ohne Salat.' &&
      byWord['die Pizza'].why.includes('المفرد المؤنث') && byWord['die Schokolade'].err === 'Julia lieben Schokolade.' &&
      byWord['die Süßigkeiten'].err === 'Ich mag keinen Süßigkeiten.' &&
      byWord['das Schwein'].ex === 'Schweinefleisch kommt von einem Schwein.' &&
      byWord['das Schwein'].err === 'Schweinefleisch kommt von ein Schwein.' && byWord['das Rind'].why.includes('von dem') &&
      byWord.fett.err === 'Die Wurst sind mir zu fett.' && byWord.braten.why.includes('فلا نضيف machen') &&
      byWord['die Cafeteria'].ex.includes('in die Cafeteria') && byWord['die Cafeteria'].err.includes('in den Cafeteria') &&
      byWord['das Festival'].err.includes('sind ein Festival') &&
      byWord['die Band'].ex === targets[2] && byWord['das Konzert'].ex === targets[3] &&
      byWord['die Gitarre'].why.includes('المصدر spielen') && byWord['das Instrument'].why.includes('المفرد Instrument') &&
      byWord.romantisch.why.includes('Romantik فاسم') && byWord['die Rose'].why.includes('الجمع Rosen') &&
      byWord['der Star'].err === 'Diese Sängerin sind ein Star.' &&
      byWord['die Kultur'].err === 'Kulturen ist für Jana ein wichtiges Thema.' && byWord['die Kultur'].why.includes('Kultur مفرد') &&
      byWord['die Bibliothek'].ex === targets[4] && byWord['die Bibliothek'].err.includes('In den Bibliothek') &&
      byWord['der Krimi'].why.includes('الجمع Krimis') && byWord.basteln.why.includes('فلا نضيف gemacht') &&
      byWord.zeichnen.err === 'Er zeichnet gern Tieren.' && byWord.sammeln.err === 'Peter sammeln Briefmarken.' &&
      byWord['das Plakat'].why.includes('ein Plakat') && byWord['der Zirkus'].ex.includes('viele Menschen') &&
      byWord['der Zoo'].ex === 'Wir besuchen am Sonntag den Zoo.' &&
      byWord['die Ausstellung'].err.includes('in den Ausstellung') && byWord['die Ausstellung'].why.includes('zur Ausstellung') &&
      byWord['das Schloss'].why.includes('ein Schloss') && byWord['der Rundgang'].why.includes('beginnt') &&
      byWord.komisch.err === 'Das Essen schmeckt komische.' && byWord.komisch.why.includes('بلا نهاية') &&
      byWord.schrecklich.err === 'Ich finde den Film schreckliche.' &&
      byWord.einige.why.includes('الجمع Gäste') && byWord.verschieden.pl === '—' &&
      byWord.außer.why.includes('تستثني Tom') && byWord.sonst.why.includes('الموضع الثاني') &&
      byWord.total.why.includes('دارجة نسبيًا') &&
      !['Julia liebt eine Schokolade.', 'Ich mag keine Süßigkeit.', 'Ich esse kein Schwein.',
        'Die Wurst ist mir zu dick.', 'Diese Sängerin ist ein Stern.', 'Jana interessiert sich für die Kultur.',
        'Er malt gern Tiere mit Stift.', 'Peter sammelt die Briefmarken zusammen.',
        'Gehen wir morgen zu der Ausstellung?', 'Ich finde den Film schrecklich gut.',
        'Iss jetzt, oder wird es kalt.'].some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('Glas Mineralwasser') && tricks[0].wie.includes('Portion Eis') &&
      tricks[1].wie.includes('in einer Band') && tricks[1].wie.includes('in der Bibliothek') &&
      tricks[1].wie.includes('in die Cafeteria') && tricks[2].wie === targets[3] &&
      tricks[2].warum.includes('für') && tricks[2].warum.includes('das Konzert'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u6-l2 aligns strict vocabulary and quantity clozes, explicit Band order and a 30-word five-target production',
    wordCloze1.frage.zeigt === 'Ich nehme eine ____ mit viel Käse.' && wordCloze1.frage.antworten.join(' ') === 'Pizza' &&
      wordCloze1.frage.nearMiss.Pizzas && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Pizzas').ok &&
      wordCloze2.frage.zeigt === '____ ist für Jana ein wichtiges Thema.' && wordCloze2.frage.antworten.join(' ') === 'Kultur' &&
      wordCloze2.frage.nearMiss.Kulturen && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Kulturen').ok &&
      wordCloze3.frage.zeigt === '____ Tom kommen alle.' && wordCloze3.frage.antworten.join(' ') === 'Außer' &&
      wordCloze3.frage.nearMiss.Sonst && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'Sonst').ok &&
      imitate.frage.antworten.join(' ') === 'Mineralwasser' && imitate.frage.nearMiss['von Mineralwasser'] &&
      !win.DW.renderers.judgeCloze(imitate.frage, 'von Mineralwasser').ok &&
      drill.frage.zeigt === 'In der ____ darf man nicht laut sprechen.' && drill.frage.antworten.join(' ') === 'Bibliothek' &&
      drill.frage.nearMiss.Bibliotheken && !win.DW.renderers.judgeCloze(drill.frage, 'Bibliotheken').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'spielt' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Er' && order.frage.fields.lsk.join(' ') === 'spielt' &&
      order.frage.fields.mittelfeld.join(' ') === 'in einer Band.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Er', 'in', 'einer', 'Band.', 'spielt']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 30 &&
      targets.join(' ').split(/\s+/).length === 30 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u6-l2 makes 80 percent four of five, independently checking für, Bibliothek, Band, quantity and Portion gender',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u6-l2\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u6-l2.s07 | cap.a2-u6-l2.s23 | cap.a2-u6-l2.s24 | cap.a2-u6-l2.s08 | cap.a2-u6-l2.s05' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'kasus' &&
      clozeCheck.frage.zeigt === 'In der ____ darf man nicht laut sprechen.' &&
      clozeCheck.frage.antworten.join(' ') === 'Bibliothek' && clozeCheck.frage.nearMiss.Bibliotheken &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Bibliotheken').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'spielt' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Er' && orderCheck.frage.fields.lsk.join(' ') === 'spielt' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Er', 'in', 'einer', 'Band.', 'spielt']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'lexik-kollokation' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) && checks[4].frage.misconceptionFamilies.a === 'genus');
}

/* ---------- audited A2 sport, nature and safety lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u6-l3'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich spiele gern Tennis.',
    'Das Training ist auf dem Sportplatz.',
    'Am Wochenende jogge ich mit meinem Team im Park.',
    'Im Urlaub schlafe ich in einem Zelt auf einer Insel.',
    'Bei Nebel sollte man nicht im Fluss schwimmen.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson a2-u6-l3 precisely scopes sport, nature locations and safety through articleless sport, location dative, V2 and modal order',
    lesson.title.de === 'Sport und Natur: Aktivitäten und Sicherheit' &&
      lesson.title.ar === 'الرياضة والطبيعة: الأنشطة والسلامة' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الرياضة والأماكن في الطبيعة والسلامة' &&
      row.grammar.item === 'Sportart ohne Artikel · in/auf + Dat. am Ort · V2 nach Zeitangabe · Modalverb + Infinitiv' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende benutzt du fünf Sätze über Sport, Orte in der Natur und Sicherheit' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'joggen', 'reiten', 'das Pferd', 'der Ski', 'das Tennis', 'das Team', 'die Mannschaft', 'der Verein',
    'der Wettbewerb', 'das Training', 'trainieren', 'sportlich', 'der Sportplatz', 'der Spaziergang',
    'die Natur', 'natürlich', 'der Strand', 'der Fluss', 'die Insel', 'das Zelt', 'der Rucksack',
    'der Stiefel', 'tief', 'neblig', 'der Himmel', 'sterben', 'der Traum', 'der Fan', 'aufregend',
    'aktiv', 'fleißig', 'klug', 'intelligent', 'nervös', 'sympathisch', 'überall', 'rund',
    'mindestens', 'wenigstens', 'nirgends'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u6-l3 reviews all 40 entries and three bounded mnemonics without rejecting valid specific, emphatic or pluperfect alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord.joggen.ex === targets[2] && byWord.joggen.why.includes('الموضع الثاني') &&
      byWord.reiten.ex.includes('reiten lernen') && byWord.reiten.err.includes('reitest lernen') &&
      byWord['das Pferd'].err.startsWith('Amira sieht eine Pferd') && byWord['der Ski'].pl.includes('Skier') &&
      byWord['der Ski'].why.includes('Ski fahren') && byWord['das Tennis'].ex === targets[0] &&
      byWord['das Team'].err.includes('in einer Team') && byWord['die Mannschaft'].err.includes('trainieren') &&
      byWord['der Verein'].why.includes('in dem Verein') && byWord['der Wettbewerb'].why.includes('an einem Wettbewerb') &&
      byWord['das Training'].err.includes('Training beginnen') && byWord.trainieren.ex === 'Wir trainieren einmal pro Woche.' &&
      byWord.sportlich.err === 'Steffi sind sehr sportlich.' && byWord['der Sportplatz'].ex === targets[1] &&
      byWord['der Spaziergang'].why.includes('mache في الموضع الثاني') && byWord['die Natur'].why.includes('in der Natur') &&
      byWord.natürlich.err === 'Natürlich wir helfen dir.' && byWord['der Strand'].why.includes('an dem Strand') &&
      byWord['der Fluss'].ex === targets[4] && byWord['die Insel'].ex === targets[3] &&
      byWord['das Zelt'].why.includes('in einem Zelt') && byWord['der Rucksack'].ex.includes('mitgehen') &&
      byWord['der Rucksack'].why.includes('mitnehmen في المصدر') && byWord['der Stiefel'].why.includes('die roten Stiefel') &&
      byWord.tief.err.includes('Rhein sind') && byWord.neblig.ex === 'Heute Morgen ist es neblig.' &&
      byWord['der Himmel'].pl === 'die Himmel' &&
      byWord.sterben.why.includes('ist gestorben') && byWord['der Traum'].err.includes('Berge sind') &&
      byWord['der Fan'].why.includes('ein großer Fan') && byWord.aufregend.err.endsWith('aufregende.') &&
      byWord.aktiv.err === 'Peter sind im Verein sehr aktiv.' && byWord.fleißig.err.includes('Ibrahim trainieren') &&
      byWord.klug.ex.includes('bei Nebel zu Hause zu bleiben') && byWord.intelligent.err === 'Einstein waren sehr intelligent.' &&
      byWord.nervös.ex === 'Vor dem Wettbewerb ist Lea nervös.' && byWord.sympathisch.ar.includes('محبوب') &&
      byWord.überall.why.includes('liegt في الموضع الثاني') && byWord.rund.why.includes('rund um den See') &&
      byWord.mindestens.err.includes('mindestens von dreimal') && byWord.wenigstens.why.includes('schwimme قبل ich') &&
      byWord.nirgends.ar.includes('لا مكان') && byWord.nirgends.err === 'Nirgends es ist so ruhig wie hier.' &&
      !['Möchtest du fahren lernen?', 'Amira liebt die Pferde.', 'Die Kinder machen einen Wettbewerb zusammen.',
        'Ich nehme lieber einen Rucksack mit mir.', 'Die letzte Woche war sehr aufregend gewesen.',
        'Das ist klug für dich.', 'Einstein war sehr intelligent gewesen.'].some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie === 'Tennis spielen · Ski fahren' &&
      tricks[0].warum.includes('بلا أداة') && tricks[1].wie.includes('auf dem Sportplatz') &&
      tricks[1].wie.includes('am Strand') && tricks[1].wie.includes('im Fluss') &&
      tricks[1].wie.includes('auf einer Insel') && tricks[2].wie === targets[4] &&
      tricks[2].warum.includes('sollte') && tricks[2].warum.includes('schwimmen'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u6-l3 aligns five strict clozes, explicit weekend V2 order and a 37-word five-target production',
    wordCloze1.frage.zeigt === 'Ich arbeite gern in einem ____.' && wordCloze1.frage.antworten.join(' ') === 'Team' &&
      wordCloze1.frage.nearMiss.Teams && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Teams').ok &&
      wordCloze2.frage.zeigt === 'Wie viel kosten die roten ____?' && wordCloze2.frage.antworten.join(' ') === 'Stiefel' &&
      wordCloze2.frage.nearMiss.Stiefeln && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Stiefeln').ok &&
      wordCloze3.frage.zeigt === 'Trainiere ____ dreimal pro Woche.' && wordCloze3.frage.antworten.join(' ') === 'mindestens' &&
      wordCloze3.frage.nearMiss['mindestens von'] && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'mindestens von').ok &&
      imitate.frage.antworten.join(' ') === 'Tennis' && imitate.frage.nearMiss['einen Tennis'] &&
      !win.DW.renderers.judgeCloze(imitate.frage, 'einen Tennis').ok &&
      drill.frage.zeigt === 'Bei Nebel sollte man nicht im ____ schwimmen.' && drill.frage.antworten.join(' ') === 'Fluss' &&
      drill.frage.nearMiss.Flüsse && !win.DW.renderers.judgeCloze(drill.frage, 'Flüsse').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'jogge' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Am Wochenende' && order.frage.fields.lsk.join(' ') === 'jogge' &&
      order.frage.fields.mittelfeld.join(' ') === 'ich mit meinem Team im Park.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Am', 'Wochenende', 'ich', 'jogge', 'mit', 'meinem', 'Team', 'im', 'Park.']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 37 &&
      targets.join(' ').split(/\s+/).length === 37 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u6-l3 makes 80 percent four of five, independently checking Insel, Fluss, weekend V2, Tennis and Sportplatz',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u6-l3\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u6-l3.s07 | cap.a2-u6-l3.s23 | cap.a2-u6-l3.s24 | cap.a2-u6-l3.s09 | cap.a2-u6-l3.s05' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'genus' &&
      clozeCheck.frage.zeigt === 'Bei Nebel sollte man nicht im ____ schwimmen.' &&
      clozeCheck.frage.antworten.join(' ') === 'Fluss' && clozeCheck.frage.nearMiss.Flüsse &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Flüsse').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'jogge' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Am Wochenende' && orderCheck.frage.fields.lsk.join(' ') === 'jogge' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Am', 'Wochenende', 'ich', 'jogge', 'mit', 'meinem', 'Team', 'im', 'Park.']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'konjugation' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) && checks[4].frage.misconceptionFamilies.a === 'kasus');
}

/* ---------- audited A2 travel, traffic and return lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u6-l4'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Wir fahren mit dem Schiff nach Köln.',
    'Oskar fährt mit dem Motorroller zur Arbeit.',
    'Eine Touristin fragt nach dem Weg.',
    'Ich habe den Zug verpasst.',
    'Wann fahrt ihr nach Hause zurück?'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson a2-u6-l4 precisely scopes travel and traffic through transport, destinations, directions, Perfekt and the return bracket',
    lesson.title.de === 'Reisen und Verkehr: Verkehrsmittel, Weg und Rückfahrt' &&
      lesson.title.ar === 'السفر والمرور: وسائل النقل والطريق والعودة' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'وسائل النقل والسؤال عن الطريق والعودة' &&
      row.grammar.item === 'mit + Dat. beim Verkehrsmittel · nach/zu bei Zielen · fragen nach + Dat. · Perfekt · trennbares Verb' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende benutzt du fünf Sätze über Verkehrsmittel, Wege und die Rückfahrt' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'der Fotoapparat', 'fotografieren', 'der Führerschein', 'die Fundsachen', 'der Fahrplan',
    'die Ermäßigung', 'das Einkaufszentrum', 'der Motor', 'der Motorroller', 'das Schiff',
    'der Stadtplan', 'die Tour', 'der Tourist', 'die Touristin', 'das Verkehrsmittel', 'verreisen',
    'verpassen', 'unternehmen', 'der Flohmarkt', 'stattfinden', 'Karneval', 'Silvester', 'nachts',
    'der Werktag', 'der Rentner', 'der Tipp', 'raten', 'schimpfen', 'Luxemburg', 'der Luxemburger',
    'die Luxemburgerin', 'luxemburgisch', 'der Europäer', 'die Europäerin', 'europäisch', 'drüben',
    'außerhalb', 'vorwärts', 'wahrscheinlich', 'zurückfahren'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u6-l4 reviews all 40 entries and three bounded mnemonics without rejecting valid full, directional or regional alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord['der Fotoapparat'].err.includes('ein Fotoapparat') && byWord.fotografieren.ex.startsWith('In Köln fotografiere') &&
      byWord['der Führerschein'].ex.includes('Führerscheinprüfung') && byWord['die Fundsachen'].why.includes('bei den Fundsachen') &&
      byWord['der Fahrplan'].err.startsWith('Die neue Fahrplan') && byWord['die Ermäßigung'].err.includes('einen Ermäßigung') &&
      byWord['das Einkaufszentrum'].why.includes('in das Einkaufszentrum') && byWord['der Motor'].err.includes('Busse') &&
      byWord['der Motorroller'].ex === targets[1] && byWord['das Schiff'].ex === targets[0] &&
      byWord['der Stadtplan'].err.includes('ein Stadtplan') && byWord['die Tour'].why.includes('in den Bergen') &&
      byWord['der Tourist'].pl === 'die Touristen' && byWord['die Touristin'].ex === targets[2] &&
      byWord['das Verkehrsmittel'].why.includes('welches Verkehrsmittel') && byWord.verreisen.err.includes('In dem Ferien') &&
      byWord.verpassen.ex === targets[3] && byWord.unternehmen.why.includes('لا نضيف إليه machen') &&
      byWord['der Flohmarkt'].why.includes('auf den Flohmarkt') && byWord.stattfinden.err.includes('stattfindet') &&
      byWord.Karneval.err.includes('feiert viele Menschen') && byWord.Silvester.err === 'Silvester wir feiern zu Hause.' &&
      byWord.nachts.why.includes('الموضع الثاني') && byWord['der Werktag'].ex.includes('an Werktagen') &&
      byWord['der Rentner'].why.includes('بلا einen') && byWord['der Tipp'].why.includes('Tipp geben') &&
      byWord.raten.err.includes('Sie mich') && byWord.schimpfen.why.includes('über die Verspätung') &&
      byWord.Luxemburg.ex.includes('grenzt an Deutschland und Belgien') && byWord['der Luxemburger'].err.includes('helfen') &&
      byWord['die Luxemburgerin'].err.includes('erklären') && byWord.luxemburgisch.ex.includes('Luxemburgisch und Deutsch') &&
      byWord['der Europäer'].ex.includes('in Brüssel') && byWord['der Europäer'].err.includes('arbeitet') &&
      byWord['die Europäerin'].err.includes('sind Europäerin') &&
      byWord.europäisch.ex.includes('europäisches Land') && byWord.drüben.err === 'Drüben die Haltestelle ist.' &&
      byWord.außerhalb.why.includes('außerhalb von der Stadt') && byWord.vorwärts.err.includes('Bus fahren') &&
      byWord.wahrscheinlich.ex.includes('wenn ihr zurückfahrt') && byWord.wahrscheinlich.err.startsWith('Wahrscheinlich es regnet') &&
      byWord.zurückfahren.ex === targets[4] &&
      !['Ich mache gern Fotos.', 'Wir fahren mit dem Schiff zu einem Hafen.', 'Oskar fährt zu der Arbeit.',
        'Wir fahren durch die Berge.', 'Verreist ihr in die Ferien?', 'In der Nacht ist es hier ruhig.',
        'Er ist ein Europäer.', 'Sie ist eine Europäerin.', 'Wir wohnen außerhalb von der Stadt.',
        'Der Zug fährt zurück.'].some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie === 'mit dem Schiff · mit dem Motorroller' &&
      tricks[0].warum.includes('بعد mit') && tricks[1].wie === 'nach Köln · zur Arbeit · nach Hause' &&
      tricks[1].warum.includes('zu der') && tricks[2].wie.includes('habe den Zug verpasst') &&
      tricks[2].wie.includes('fahrt ihr nach Hause zurück') && tricks[2].warum.includes('في النهاية'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u6-l4 aligns five strict clozes, explicit return order and a 31-word five-target production',
    wordCloze1.frage.zeigt === 'Für Gruppen gibt es eine ____.' && wordCloze1.frage.antworten.join(' ') === 'Ermäßigung' &&
      wordCloze1.frage.nearMiss.Ermäßigungen && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Ermäßigungen').ok &&
      wordCloze2.frage.zeigt === '____ feiern wir zu Hause.' && wordCloze2.frage.antworten.join(' ') === 'Silvester' &&
      wordCloze2.frage.nearMiss.Silvestern && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Silvestern').ok &&
      wordCloze3.frage.zeigt === 'Der Bus fährt langsam ____.' && wordCloze3.frage.antworten.join(' ') === 'vorwärts' &&
      wordCloze3.frage.nearMiss.vorwärtst && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'vorwärtst').ok &&
      imitate.zeigt.de === 'Wir fahren mit dem ____ nach Köln.' && imitate.frage.antworten.join(' ') === 'Schiff' &&
      imitate.frage.nearMiss.Schiffes && !win.DW.renderers.judgeCloze(imitate.frage, 'Schiffes').ok &&
      drill.frage.zeigt === 'Oskar fährt mit dem ____ zur Arbeit.' && drill.frage.antworten.join(' ') === 'Motorroller' &&
      drill.frage.nearMiss.Motorrollers && !win.DW.renderers.judgeCloze(drill.frage, 'Motorrollers').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[4] && order.frage.finite === 'fahrt' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Wann' && order.frage.fields.lsk.join(' ') === 'fahrt' &&
      order.frage.fields.mittelfeld.join(' ') === 'ihr nach Hause zurück?' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Wann', 'ihr', 'fahrt', 'nach', 'Hause', 'zurück?']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 31 &&
      targets.join(' ').split(/\s+/).length === 31 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u6-l4 makes 80 percent four of five, independently checking Zug, Motorroller, return order, Schiff and asking the way',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u6-l4\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u6-l4.s07 | cap.a2-u6-l4.s23 | cap.a2-u6-l4.s24 | cap.a2-u6-l4.s10 | cap.a2-u6-l4.s06' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'konjugation' &&
      clozeCheck.frage.zeigt === 'Oskar fährt mit dem ____ zur Arbeit.' &&
      clozeCheck.frage.antworten.join(' ') === 'Motorroller' && clozeCheck.frage.nearMiss.Motorrollers &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Motorrollers').ok &&
      orderCheck.frage.correct.join(' ') === targets[4] && orderCheck.frage.finite === 'fahrt' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Wann' && orderCheck.frage.fields.lsk.join(' ') === 'fahrt' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Wann', 'ihr', 'fahrt', 'nach', 'Hause', 'zurück?']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) && checks[3].frage.misconceptionFamilies.b === 'kasus' &&
      checks[4].frage.optionen.some(o => o.text === targets[2]) && checks[4].frage.misconceptionFamilies.a === 'präposition');
}

/* ---------- audited A2 application, appointment and response lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u6-l5'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich informiere mich über die Stelle.',
    'Ich bewerbe mich um eine Stelle.',
    'Können Sie meine Frage beantworten?',
    'Ich bekomme nächste Woche Bescheid.',
    'Können wir einen Termin vereinbaren?'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson a2-u6-l5 precisely scopes office communication through information, application, a question, response and appointment',
    lesson.title.de === 'Arbeit und Büro: Bewerbung, Termin und Rückmeldung' &&
      lesson.title.ar === 'العمل والمكتب: التقديم والموعد والرد' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'التقديم إلى وظيفة وتنظيم الموعد وتلقي الرد' &&
      row.grammar.item === 'sich informieren über + Akk. · sich bewerben um + Akk. · beantworten + Akk. · Bescheid bekommen · Modalverb + Infinitiv' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende benutzt du fünf Sätze für Bewerbung, Termin und Rückmeldung' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'abschließen', 'beantworten', 'beenden', 'begründen', 'beraten', 'berichten', 'der Bescheid',
    'sich bewerben', 'die Chefin', 'kündigen', 'der Mitarbeiter', 'das Programm', 'das Projekt',
    'der Workshop', 'rechnen', 'die Reihe', 'organisieren', 'die Situation', 'der Unterschied',
    'versuchen', 'vereinbaren', 'die Veranstaltung', 'sich eintragen', 'sich informieren',
    'die Schülerin', 'die Baustelle', 'der Titel', 'das Interview', 'die Sendung', 'aktuell',
    'chatten', 'die Webseite', 'übersetzen', 'zuhören', 'das Interesse', 'unbedingt', 'eigentlich',
    'außerdem', 'deutlich', 'schwierig'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u6-l5 reviews all 40 entries and three bounded mnemonics without rejecting valid alternative frames or meanings',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord.abschließen.err.endsWith('abschließen.') && byWord.beantworten.ex === targets[2] &&
      byWord.beantworten.why.includes('antworten') && byWord.beenden.err.endsWith('beendet.') &&
      byWord.begründen.err.includes('über Ihre Entscheidung') && byWord.beraten.err.includes('einem neuen Mitarbeiter') &&
      byWord.berichten.ex === 'Die Chefin berichtet über das Projekt.' && byWord['der Bescheid'].ex === targets[3] &&
      byWord['sich bewerben'].ex === targets[1] && byWord['sich bewerben'].why.includes('für أيضًا') &&
      byWord['die Chefin'].err.startsWith('Der Chefin') && byWord.kündigen.ex.includes('Arbeitsvertrag gekündigt') &&
      byWord['der Mitarbeiter'].err.includes('sieben Mitarbeitern') && byWord['das Programm'].err.startsWith('Die Programm') &&
      byWord['das Projekt'].why.includes('an einem neuen Projekt') && byWord['der Workshop'].err.includes('ein Workshop') &&
      byWord.rechnen.ex.startsWith('Sarah muss') && byWord.rechnen.err.endsWith('rechnet.') &&
      byWord['die Reihe'].why.includes('in der dritten Reihe') &&
      byWord.organisieren.ex === 'Wir organisieren einen Workshop.' && byWord['die Situation'].err.includes('diesen Situation') &&
      byWord['der Unterschied'].why.includes('zwischen den beiden Kursen') && byWord.versuchen.ex.includes('zu übersetzen') &&
      byWord.vereinbaren.ex === targets[4] && byWord['die Veranstaltung'].err.includes('einen Veranstaltung') &&
      byWord['sich eintragen'].why.includes('sich بعد Sie') && byWord['sich informieren'].ex === targets[0] &&
      byWord['die Schülerin'].err.startsWith('Ein Schülerin') && byWord['die Baustelle'].err.includes('ein großer Baustelle') &&
      byWord['der Titel'].why.includes('den Titel') && byWord['das Interview'].ex.includes('Interview später anhören') &&
      byWord['die Sendung'].err.includes('für Jugendlichen') && byWord.aktuell.err.includes('das aktuell Kinoprogramm') &&
      byWord.chatten.why.includes('mit seinen Kollegen') && byWord['die Webseite'].why.includes('auf der Webseite') &&
      byWord.übersetzen.err.endsWith('übersetzt?') && byWord.zuhören.why.includes('der Chefin') &&
      byWord['das Interesse'].why.includes('an der Stelle') && byWord.unbedingt.err.endsWith('anrufst.') &&
      byWord.eigentlich.err === 'Eigentlich ich arbeite am Sonntag.' && byWord.außerdem.err.includes('die Firma organisiert') &&
      byWord.deutlich.err.endsWith('deutliche.') && byWord.schwierig.err.includes('schwierig Aufgabe') &&
      !['Ich informiere über die Stelle.', 'Ich bewerbe mich für eine Stelle.',
        'Können Sie auf meine Frage antworten?', 'Ich erhalte nächste Woche einen Bescheid.',
        'Wir machen ein Projekt für unsere Stadt.', 'Was ist der Unterschied von A zu B?',
        'Im Radio kommt ein Interview von dem Sänger.', 'Sie informiert die Bewerber über die Stelle.'].some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('sich über die Stelle informieren') &&
      tricks[0].wie.includes('sich um eine Stelle bewerben') && tricks[0].warum.includes('النصب') &&
      tricks[1].wie === 'eine Frage beantworten · Bescheid bekommen · einen Termin vereinbaren' &&
      tricks[1].warum.includes('بلا فعل زائد') && tricks[2].wie.includes('Können Sie … beantworten?') &&
      tricks[2].wie.includes('Können wir … vereinbaren?') && tricks[2].warum.includes('في النهاية'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u6-l5 aligns five strict clozes, explicit modal question order and a 27-word five-target production',
    wordCloze1.frage.zeigt === 'Die Chefin ____ über das Projekt.' && wordCloze1.frage.antworten.join(' ') === 'berichtet' &&
      wordCloze1.frage.nearMiss.berichten && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'berichten').ok &&
      wordCloze2.frage.zeigt === 'Am Freitag gibt es eine ____ im Büro.' && wordCloze2.frage.antworten.join(' ') === 'Veranstaltung' &&
      wordCloze2.frage.nearMiss.Veranstaltungen && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Veranstaltungen').ok &&
      wordCloze3.frage.zeigt === '____ organisiert die Firma einen Workshop.' && wordCloze3.frage.antworten.join(' ') === 'Außerdem' &&
      wordCloze3.frage.nearMiss.Außer && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'Außer').ok &&
      imitate.zeigt.de === 'Ich ____ mich über die Stelle.' && imitate.frage.antworten.join(' ') === 'informiere' &&
      imitate.frage.nearMiss.informieren && !win.DW.renderers.judgeCloze(imitate.frage, 'informieren').ok &&
      drill.frage.zeigt === 'Ich ____ mich um eine Stelle.' && drill.frage.antworten.join(' ') === 'bewerbe' &&
      drill.frage.nearMiss.bewerben && !win.DW.renderers.judgeCloze(drill.frage, 'bewerben').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[4] && order.frage.finite === 'Können' && order.frage.verbFirst === true &&
      order.frage.fields.vorfeld.length === 0 && order.frage.fields.lsk.join(' ') === 'Können' &&
      order.frage.fields.mittelfeld.join(' ') === 'wir einen Termin vereinbaren?' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Wir', 'Können', 'einen', 'Termin', 'vereinbaren?']).failed === 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 27 &&
      targets.join(' ').split(/\s+/).length === 27 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u6-l5 makes 80 percent four of five, independently checking Bescheid, Bewerbung, appointment order, beantworten and informieren',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u6-l5\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u6-l5.s07 | cap.a2-u6-l5.s23 | cap.a2-u6-l5.s24 | cap.a2-u6-l5.s08 | cap.a2-u6-l5.s04' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'lexik-kollokation' &&
      clozeCheck.frage.zeigt === 'Ich ____ mich um eine Stelle.' && clozeCheck.frage.antworten.join(' ') === 'bewerbe' &&
      clozeCheck.frage.nearMiss.bewerben && !win.DW.renderers.judgeCloze(clozeCheck.frage, 'bewerben').ok &&
      orderCheck.frage.correct.join(' ') === targets[4] && orderCheck.frage.finite === 'Können' && orderCheck.frage.verbFirst === true &&
      orderCheck.frage.fields.vorfeld.length === 0 && orderCheck.frage.fields.lsk.join(' ') === 'Können' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Wir', 'Können', 'einen', 'Termin', 'vereinbaren?']).failed === 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[2]) && checks[3].frage.misconceptionFamilies.b === 'lexik-kollokation' &&
      checks[4].frage.optionen.some(o => o.text === targets[0]) && checks[4].frage.misconceptionFamilies.a === 'kasus');
}

/* ---------- audited A2 people, family and feelings lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['a2-u6-l6'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Er ist Angestellter bei einer Bank.',
    'Sie ist Österreicherin und wohnt in Wien.',
    'Thomas Müller ist ein berühmter Fußballspieler.',
    'Meine Eltern sind geschieden.',
    'Ich bin froh, dass du kommen kannst.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson a2-u6-l6 precisely scopes describing people through profession, origin, an attributed person, family status and feeling',
    lesson.title.de === 'Menschen beschreiben: Beruf, Herkunft, Familie und Gefühle' &&
      lesson.title.ar === 'وصف الناس: المهنة والأصل والعائلة والمشاعر' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'وصف المهنة والأصل والعائلة والمشاعر' &&
      row.grammar.item === 'Beruf/Herkunft ohne Artikel · substantiviertes Adjektiv · Adjektivendung -er · sein + Adjektiv · dass + Verb am Ende' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende benutzt du fünf Sätze über Beruf, Herkunft, Familie und Gefühle' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'ansehen', 'ausgeben', 'aussprechen', 'das Gegenteil', 'besonders', 'beliebt', 'berühmt', 'froh',
    'fantastisch', 'faul', 'lila', 'rosa', 'geschieden', 'der Cousin', 'die Cousine', 'der Enkel',
    'die Enkelin', 'der Angestellte', 'die Angestellte', 'der Auszubildende', 'die Auszubildende',
    'der Autor', 'der Friseur', 'die Handwerkerin', 'der Hausmann', 'der Mechaniker', 'das Model',
    'die Musikerin', 'der Sänger', 'die Österreicherin', 'österreichisch', 'die Schweizerin',
    'schweizerisch', 'tschüs', 'sich verlieben', 'langweilig', 'furchtbar', 'blöd', 'dumm', 'wurscht'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson a2-u6-l6 reviews all 40 entries and three bounded mnemonics without rejecting valid comparisons, meanings or article variants',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord.ansehen.why.includes('بلا zu') && byWord.ausgeben.ex.endsWith('Bücher ausgibt.') &&
      byWord.ausgeben.err.endsWith('Bücher gibt aus.') && byWord.aussprechen.ex === 'Wie spricht man das Wort aus?' &&
      byWord['das Gegenteil'].why.includes('von + Dativ') &&
      byWord.besonders.err.includes('besondere günstig') && byWord.beliebt.why.includes('bei vielen Menschen') &&
      byWord.berühmt.ex === targets[2] && byWord.froh.ex === targets[4] &&
      byWord.fantastisch.why.includes('sieht … aus') && byWord.faul.err === 'Heute wir sind faul.' &&
      byWord.lila.err.includes('lilas Kleid') && byWord.rosa.err.includes('rosas Bluse') &&
      byWord.geschieden.ex === targets[3] && byWord['der Cousin'].err.includes('Cousin wohnen') &&
      byWord['die Cousine'].err.includes('Cousine kommen') && byWord['der Enkel'].err.includes('Enkel sind') &&
      byWord['die Enkelin'].why.includes('der Großmutter') && byWord['der Angestellte'].ex === targets[0] &&
      byWord['die Angestellte'].ex === 'Sie ist Angestellte bei einer Bank.' &&
      byWord['der Auszubildende'].err.includes('Auszubildende lernen') &&
      byWord['die Auszubildende'].err.includes('Auszubildende arbeiten') &&
      byWord['der Autor'].err.startsWith('Der Autoren') && byWord['der Friseur'].err.includes('Friseur schneiden') &&
      byWord['die Handwerkerin'].err.includes('Handwerkerin bauen') && byWord['der Hausmann'].err.includes('kümmert um') &&
      byWord['der Mechaniker'].why.includes('den Motor') && byWord['das Model'].why.includes('wie ein Model') &&
      byWord['die Musikerin'].err.includes('Musikerin spielen') && byWord['der Sänger'].err.includes('Sänger singen') &&
      byWord['die Österreicherin'].ex === targets[1] && byWord.österreichisch.err.includes('österreichisch Spezialität') &&
      byWord['die Schweizerin'].err.includes('Nachbarin sind') && byWord.schweizerisch.ex.includes('schweizerischer Käse') &&
      byWord.tschüs.ex.includes('Beim Abschied') && byWord['sich verlieben'].why.includes('in jemanden verlieben') &&
      byWord.langweilig.ex.startsWith('Mir ist') && byWord.langweilig.why.includes('ich bin langweilig') &&
      byWord.furchtbar.err.includes('furchtbare langweilig') && byWord.blöd.err.includes('blöd Idee') &&
      byWord.dumm.err.endsWith('von ich.') && byWord.wurscht.why.includes(' المعياري egal') &&
      !['Sie arbeitet wie ein Model.', 'Die Musikerin spielt die Geige gut.',
        'Der Sänger singt in dem Konzert mit.', 'Sie ist eine Österreicherin.',
        'Unsere Nachbarin ist eine Schweizerin.', 'Ich bin langweilig.',
        'Das war dumm für mich.', 'Die Wand ist eine rosa Farbe.'].some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('Er ist Angestellter.') &&
      tricks[0].wie.includes('Sie ist Österreicherin.') && tricks[0].warum.includes('للجنس') &&
      tricks[1].wie === 'Angestellter · ein berühmter Fußballspieler' && tricks[1].warum.includes('-er') &&
      tricks[2].wie.includes('sind geschieden') && tricks[2].wie.includes('dass du kommen kannst') &&
      tricks[2].warum.includes('في النهاية'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson a2-u6-l6 aligns five strict clozes, explicit dass-clause order and a 30-word five-target production',
    wordCloze1.frage.zeigt === 'Fußball ist bei vielen Menschen ____.' && wordCloze1.frage.antworten.join(' ') === 'beliebt' &&
      wordCloze1.frage.nearMiss.beliebte && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'beliebte').ok &&
      wordCloze2.frage.zeigt === 'Der ____ liest aus seinem Buch.' && wordCloze2.frage.antworten.join(' ') === 'Autor' &&
      wordCloze2.frage.nearMiss.Autoren && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Autoren').ok &&
      wordCloze3.frage.zeigt === 'Das ist eine ____ Idee.' && wordCloze3.frage.antworten.join(' ') === 'blöde' &&
      wordCloze3.frage.nearMiss.blöd && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'blöd').ok &&
      imitate.zeigt.de === 'Er ist ____ bei einer Bank.' && imitate.frage.antworten.join(' ') === 'Angestellter' &&
      imitate.frage.nearMiss.Angestellte && !win.DW.renderers.judgeCloze(imitate.frage, 'Angestellte').ok &&
      drill.frage.zeigt === 'Sie ist ____ und wohnt in Wien.' && drill.frage.antworten.join(' ') === 'Österreicherin' &&
      drill.frage.nearMiss.Österreicher && !win.DW.renderers.judgeCloze(drill.frage, 'Österreicher').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[4] && order.frage.finite === 'bin' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Ich' && order.frage.fields.lsk.join(' ') === 'bin' &&
      order.frage.fields.mittelfeld.join(' ') === 'froh, dass du kommen kannst.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Ich', 'bin', 'froh,', 'dass', 'du', 'kannst.', 'kommen']).failed === 4 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 30 &&
      targets.join(' ').split(/\s+/).length === 30 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson a2-u6-l6 makes 80 percent four of five, independently checking geschieden, Österreicherin, dass order, berühmter and Angestellter',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.a2-u6-l6\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.a2-u6-l6.s07 | cap.a2-u6-l6.s23 | cap.a2-u6-l6.s24 | cap.a2-u6-l6.s09 | cap.a2-u6-l6.s04' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'konjugation' &&
      clozeCheck.frage.zeigt === 'Sie ist ____ und wohnt in Wien.' &&
      clozeCheck.frage.antworten.join(' ') === 'Österreicherin' && clozeCheck.frage.nearMiss.Österreicher &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Österreicher').ok &&
      orderCheck.frage.correct.join(' ') === targets[4] && orderCheck.frage.finite === 'bin' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Ich' && orderCheck.frage.fields.lsk.join(' ') === 'bin' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Ich', 'bin', 'froh,', 'dass', 'du', 'kannst.', 'kommen']).failed === 4 &&
      checks[3].frage.optionen.some(o => o.text === targets[2]) && checks[3].frage.misconceptionFamilies.b === 'deklination' &&
      checks[4].frage.optionen.some(o => o.text === targets[0]) && checks[4].frage.misconceptionFamilies.a === 'deklination');
}


/* ---------- audited B1 Vorgangspassiv lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['b1-u1-l1'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Die Straße wird repariert.',
    'Das Haus wurde verkauft.',
    'Die Schuhe werden in Italien hergestellt.',
    'Der Brief wird von Anna geschrieben.',
    'Die Brücke ist im letzten Jahr gebaut worden.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson b1-u1-l1 precisely scopes Vorgangspassiv in present, preterite and perfect across five complete targets',
    lesson.title.de === 'Vorgangspassiv: Präsens, Präteritum und Perfekt' &&
      lesson.title.ar === 'المبني للمجهول الحدثي: الحاضر والماضي البسيط والماضي المركّب' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'وصف العمليات من دون إبراز الفاعل' &&
      row.grammar.item === 'werden + Partizip II · wurde · ist … worden · von + Dativ' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende bildest du fünf vollständige Sätze im Vorgangspassiv' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'reparieren', 'bauen', 'produzieren', 'verkaufen', 'liefern', 'bestellen', 'prüfen', 'verbieten',
    'erlauben', 'öffnen', 'schließen', 'entwickeln', 'herstellen', 'informieren', 'bezahlen', 'der Bau',
    'die Reparatur', 'die Produktion', 'der Verkauf', 'die Lieferung', 'die Bestellung', 'die Prüfung',
    'das Verbot', 'die Erlaubnis', 'die Einladung', 'die Information', 'die Zahlung', 'die Rechnung',
    'der Auftrag', 'der Vertrag', 'die Ware', 'das Werk', 'der Antrag', 'die Anmeldung', 'das Ergebnis',
    'der Vorgang', 'die Ursache', 'von', 'durch', 'worden'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u1-l1 reviews all 40 entries and three bounded mnemonics without rejecting valid state, agent or genitive alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord.reparieren.ex.includes('gerade repariert') && byWord.bauen.err.endsWith('bauen.') &&
      byWord.produzieren.ex.includes('Fahrräder werden') && byWord.verkaufen.ex.includes('wurde gestern verkauft') &&
      byWord.liefern.err.includes('Pakete wird') && byWord.bestellen.err.endsWith('bestellen.') &&
      byWord.prüfen.err.endsWith('prüfen.') && byWord.verbieten.ex.includes('Rauchen wurde') &&
      byWord.erlauben.ex.includes('für das Fest erlaubt') && byWord.öffnen.err.endsWith('geöffnen.') &&
      byWord.schließen.ex.includes('acht Uhr geschlossen') && byWord.entwickeln.ex.includes('von zwei Studenten entwickelt') &&
      byWord.herstellen.ex === targets[2] && byWord.informieren.err.includes('Kunden wird') &&
      byWord.bezahlen.err.endsWith('bezahlen.') && byWord['der Bau'].err.includes('zwei Jahren') &&
      byWord['die Reparatur'].err.includes('viele Geld') && byWord['die Produktion'].why.includes('بلا حرف جر') &&
      byWord['der Verkauf'].why.includes('am Montag') && byWord['die Lieferung'].why.includes('لا نحتاج حرف جر') &&
      byWord['die Bestellung'].err.includes('Bestellung sind') && byWord['die Prüfung'].err.includes('des Antrag') &&
      byWord['das Verbot'].err.includes('seit den Januar') && byWord['die Erlaubnis'].err.endsWith('erteilen.') &&
      byWord['die Einladung'].err.endsWith('verschicken.') && byWord['die Information'].err.includes('Informationen wird') &&
      byWord['die Zahlung'].ex.includes('per Überweisung ausgeführt') && byWord['die Rechnung'].err.endsWith('bezahlen.') &&
      byWord['der Auftrag'].err.endsWith('bearbeiten.') && byWord['der Vertrag'].err.endsWith('unterschreiben.') &&
      byWord['die Ware'].err.endsWith('verpacken.') && byWord['das Werk'].err.endsWith('modernisieren.') &&
      byWord['der Antrag'].err.endsWith('stellen.') && byWord['die Anmeldung'].err.endsWith('erwarten.') &&
      byWord['das Ergebnis'].ex.endsWith('bekannt gegeben.') && byWord['das Ergebnis'].err.includes('bekanntgeben oder bekanntgegeben') &&
      byWord['das Ergebnis'].why.includes('ككلمتين') && byWord['der Vorgang'].err.endsWith('dokumentieren.') &&
      byWord['die Ursache'].err.endsWith('finden.') && byWord.von.ex === targets[3] &&
      byWord.durch.err.includes('durch dem Hochwasser') && byWord.worden.ex === targets[4] &&
      !['Die Straße ist repariert.', 'Die Prüfung von dem Antrag dauert drei Wochen.',
        'Das Buch wurde mit einem Lehrer geschrieben.', 'Der Brief wird mit Anna geschrieben.',
        'Die Stadt wurde von dem Hochwasser zerstört.'].some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('wird repariert') && tricks[0].wie.includes('ist repariert') &&
      tricks[0].warum.includes('الجملتان صحيحتان') && tricks[1].wie.includes('ist gebaut worden') &&
      tricks[1].warum.includes('لا geworden') && tricks[2].wie === 'von Anna (Agens) · durch das Hochwasser (Ursache)' &&
      tricks[2].warum.includes('Dativ') && tricks[2].warum.includes('Akkusativ'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u1-l1 aligns five strict clozes, the perfect passive bracket and a 28-word five-target production',
    wordCloze1.frage.zeigt === 'Das Buch wurde online ____.' && wordCloze1.frage.antworten.join(' ') === 'bestellt' &&
      wordCloze1.frage.nearMiss.bestellen && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'bestellen').ok &&
      wordCloze2.frage.zeigt === 'Die ____ des Antrags dauert drei Wochen.' && wordCloze2.frage.antworten.join(' ') === 'Prüfung' &&
      wordCloze2.frage.nearMiss.Prüfen && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Prüfen').ok &&
      wordCloze3.frage.zeigt === 'Der Brief wird ____ Anna geschrieben.' && wordCloze3.frage.antworten.join(' ') === 'von' &&
      wordCloze3.frage.nearMiss.vom && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'vom').ok &&
      imitate.zeigt.de === 'Die Straße ____ repariert.' && imitate.frage.antworten.join(' ') === 'wird' &&
      imitate.frage.nearMiss.werden && !win.DW.renderers.judgeCloze(imitate.frage, 'werden').ok &&
      drill.frage.zeigt === 'Die Brücke ist im letzten Jahr gebaut ____.' && drill.frage.antworten.join(' ') === 'worden' &&
      drill.frage.nearMiss.geworden && !win.DW.renderers.judgeCloze(drill.frage, 'geworden').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[4] && order.frage.finite === 'ist' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Die Brücke' && order.frage.fields.lsk.join(' ') === 'ist' &&
      order.frage.fields.mittelfeld.join(' ') === 'im letzten Jahr' && order.frage.fields.rsk.join(' ') === 'gebaut worden.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Die', 'Brücke', 'ist', 'gebaut', 'im', 'letzten', 'Jahr', 'worden.']).failed === 2 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 28 &&
      targets.join(' ').split(/\s+/).length === 28 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u1-l1 makes 80 percent four of five, independently checking von Anna, worden, perfect order, repariert and wurde verkauft',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.b1-u1-l1\.s\d+$/.test(s.frage.prereq || '')) &&
      checks.every(s => !s.hinweise) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u1-l1.s07 | cap.b1-u1-l1.s23 | cap.b1-u1-l1.s24 | cap.b1-u1-l1.s08 | cap.b1-u1-l1.s05' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text === 'Der Brief wird vom Anna geschrieben.') &&
      checks[0].frage.misconceptionFamilies.a === 'präposition' &&
      clozeCheck.frage.zeigt === 'Die Brücke ist im letzten Jahr gebaut ____.' &&
      clozeCheck.frage.antworten.join(' ') === 'worden' && clozeCheck.frage.nearMiss.geworden &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'geworden').ok &&
      orderCheck.frage.correct.join(' ') === targets[4] && orderCheck.frage.finite === 'ist' &&
      orderCheck.frage.fields.rsk.join(' ') === 'gebaut worden.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Die', 'Brücke', 'ist', 'gebaut', 'im', 'letzten', 'Jahr', 'worden.']).failed === 2 &&
      checks[3].frage.optionen.some(o => o.text === 'Die Straße wird gerade repariert.') &&
      checks[3].frage.misconceptionFamilies.b === 'konjugation' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) && checks[4].frage.misconceptionFamilies.a === 'konjugation');
}


/* ---------- audited B1 relative-clause lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['b1-u1-l2'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich habe einen Nachbarn, der dort wohnt.',
    'Das Buch, das ich lese, ist neu.',
    'Der Kurs, den ich besuche, ist voll.',
    'Die Frau, der ich heute helfe, ist nett.',
    'Die Stelle, für die ich mich beworben habe, ist besetzt.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson b1-u1-l2 precisely scopes relative clauses by gender, case, preposition and verb-final order across five targets',
    lesson.title.de === 'Relativsätze: Kasus, Präpositionen und Verbendstellung' &&
      lesson.title.ar === 'جمل الصلة: الحالة وحرف الجر والفعل في النهاية' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'وصف الأشخاص والأشياء بدقة' &&
      row.grammar.item === 'Relativpronomen nach Genus und Kasus · Präposition + Relativpronomen · Verb am Ende' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((s, i) => s.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende bildest du fünf vollständige Relativsätze mit passendem Pronomen' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'der', 'die', 'das', 'den', 'dem', 'deren', 'dessen', 'wo', 'was', 'derjenige',
    'der Kollege', 'die Kollegin', 'der Nachbar', 'die Nachbarschaft', 'das Unternehmen',
    'die Abteilung', 'die Stelle', 'die Karriere', 'die Ausbildung', 'die Weiterbildung',
    'die Fähigkeit', 'die Kenntnis', 'der Vorteil', 'der Nachteil', 'die Bedingung',
    'die Möglichkeit', 'die Gelegenheit', 'der Zusammenhang', 'die Beziehung', 'der Eindruck',
    'der Standpunkt', 'die Kritik', 'der Zweifel', 'das Ziel', 'die Folge', 'der Anlass',
    'die Absicht', 'der Wunsch', 'die Erwartung', 'der Unterschied'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u1-l2 reviews all 40 entries and three bounded mnemonics without rejecting valid payment, place or extraposition alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord.der.ex === targets[0] && byWord.der.err.includes('der wohnt dort') &&
      byWord.die.err.includes('der ich kenne') && byWord.das.ex === targets[1] && byWord.den.ex === targets[2] &&
      byWord.dem.why.includes('Dativ') && byWord.deren.ex.includes('deren Chef') && byWord.dessen.ex.includes('dessen Buch') &&
      byWord.wo.ex.startsWith('Dort, wo') && byWord.was.ex === 'Alles, was du sagst, ist richtig.' &&
      byWord.derjenige.err.includes('der zuerst kommen') && byWord['der Kollege'].err.includes('der kommt aus Berlin') &&
      byWord['die Kollegin'].err.includes('leitet sie') && byWord['der Nachbar'].why.includes('Dativ') &&
      byWord['die Nachbarschaft'].err.includes('alle helfen') && byWord['das Unternehmen'].err.includes('baut es') &&
      byWord['die Abteilung'].ex.includes('in der ich arbeite') && byWord['die Stelle'].ex === targets[4] &&
      byWord['die Karriere'].err.includes('der sie plant') && byWord['die Ausbildung'].err.includes('er hat gemacht') &&
      byWord['die Weiterbildung'].ex === 'Die Firma bezahlt die Weiterbildung.' &&
      byWord['die Weiterbildung'].err.includes('bezahlt der Weiterbildung') &&
      byWord['die Fähigkeit'].why.includes('مفعول به') && byWord['die Kenntnis'].ex.startsWith('Gute Deutschkenntnisse') &&
      byWord['der Vorteil'].ex.includes('niedrige Preis') && byWord['der Nachteil'].ex.includes('lange Fahrt') &&
      byWord['die Bedingung'].ex.includes('unter denen') && byWord['die Möglichkeit'].err.includes('bietet sie') &&
      byWord['die Gelegenheit'].ex.startsWith('Bei dieser Gelegenheit') && byWord['der Zusammenhang'].err.includes('der du beschreibst') &&
      byWord['die Beziehung'].err.includes('Themen bestehen') && byWord['der Eindruck'].err.includes('der ich hatte') &&
      byWord['der Standpunkt'].err.includes('der sie vertritt') && byWord['die Kritik'].err.includes('er hat geäußert') &&
      byWord['der Zweifel'].err.includes('der sie hat') && byWord['das Ziel'].err.includes('erreichen es') &&
      byWord['die Folge'].ex.endsWith('sind ernst.') && byWord['der Anlass'].ex.includes('zu dem wir uns treffen') &&
      byWord['die Absicht'].ex.includes('hinter dem Plan steht') && byWord['der Wunsch'].err.includes('der sie äußert') &&
      byWord['die Erwartung'].err.includes('den man an mich hat') && byWord['der Unterschied'].err.includes('der man sieht') &&
      !['Die Firma zahlt für die Weiterbildung.', 'Die Stadt, wo ich geboren bin, liegt am Meer.',
        'Die Erwartungen, die man hat an mich, sind hoch.'].some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('den ich besuche') && tricks[0].wie.includes('dem ich helfe') &&
      tricks[0].wie.includes('deren Chef') && tricks[0].warum.includes('Akkusativ') && tricks[0].warum.includes('Dativ') &&
      tricks[1].wie.includes('beworben habe') && tricks[1].wie.includes('worin die Briefe liegen') && tricks[1].warum.includes('يغلقه') &&
      tricks[2].wie === 'Alles, was du sagst, ist richtig.' && tricks[2].warum.includes('اسم محدد'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u1-l2 aligns five strict clozes, an explicit relative-clause bracket and a 39-word five-target production',
    wordCloze1.frage.zeigt === 'Die Firma, ____ Chef krank ist, schließt heute.' && wordCloze1.frage.antworten.join(' ') === 'deren' &&
      wordCloze1.frage.nearMiss.dessen && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'dessen').ok &&
      wordCloze2.frage.zeigt === 'Gute ____ sind im Beruf wichtig.' && wordCloze2.frage.antworten.join(' ') === 'Deutschkenntnisse' &&
      wordCloze2.frage.nearMiss.Deutschkenntnis && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Deutschkenntnis').ok &&
      wordCloze3.frage.zeigt === 'Der ____, den sie äußert, ist verständlich.' && wordCloze3.frage.antworten.join(' ') === 'Wunsch' &&
      wordCloze3.frage.nearMiss.Wünsche && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'Wünsche').ok &&
      imitate.zeigt.de === 'Ich habe einen Nachbarn, ____ dort wohnt.' && imitate.frage.antworten.join(' ') === 'der' &&
      imitate.frage.nearMiss.den && !win.DW.renderers.judgeCloze(imitate.frage, 'den').ok &&
      drill.frage.zeigt === 'Der Kurs, ____ ich besuche, ist voll.' && drill.frage.antworten.join(' ') === 'den' &&
      drill.frage.nearMiss.der && !win.DW.renderers.judgeCloze(drill.frage, 'der').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.correct.join(' ') === targets[0] && order.frage.finite === 'habe' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Ich' && order.frage.fields.lsk.join(' ') === 'habe' &&
      order.frage.fields.mittelfeld.join(' ') === 'einen Nachbarn, der dort' && order.frage.fields.rsk.join(' ') === 'wohnt.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Ich', 'habe', 'einen', 'Nachbarn,', 'der', 'wohnt.', 'dort']).failed === 2 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 39 &&
      targets.join(' ').split(/\s+/).length === 39 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u1-l2 makes 80 percent four of five, independently checking dative der, accusative den, relative order, deren and neuter das',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.b1-u1-l2\.s\d+$/.test(s.frage.prereq || '')) && checks.every(s => !s.hinweise) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u1-l2.s07 | cap.b1-u1-l2.s23 | cap.b1-u1-l2.s24 | cap.b1-u1-l2.s09 | cap.b1-u1-l2.s05' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) && checks[0].frage.misconceptionFamilies.a === 'kasus' &&
      clozeCheck.frage.zeigt === 'Der Kurs, ____ ich besuche, ist voll.' && clozeCheck.frage.antworten.join(' ') === 'den' &&
      clozeCheck.frage.nearMiss.der && !win.DW.renderers.judgeCloze(clozeCheck.frage, 'der').ok &&
      orderCheck.frage.correct.join(' ') === targets[0] && orderCheck.frage.finite === 'habe' &&
      orderCheck.frage.fields.rsk.join(' ') === 'wohnt.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Ich', 'habe', 'einen', 'Nachbarn,', 'der', 'wohnt.', 'dort']).failed === 2 &&
      checks[3].frage.optionen.some(o => o.text === 'Die Firma, deren Chef krank ist, schließt heute.') &&
      checks[3].frage.misconceptionFamilies.b === 'kasus' &&
      checks[4].frage.optionen.some(o => o.text === targets[1]) && checks[4].frage.misconceptionFamilies.a === 'kasus');
}


/* ---------- audited B1 concessive-clause lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['b1-u1-l3'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Obwohl es regnet, gehe ich spazieren.',
    'Ich gehe spazieren, obwohl es regnet.',
    'Obwohl ich heute arbeiten muss, komme ich später mit.',
    'Obwohl er wenig geschlafen hat, ist er pünktlich gekommen.',
    'Es regnet, trotzdem gehe ich spazieren.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson b1-u1-l3 precisely scopes obwohl verb-final order, fronted-clause inversion and the trotzdem V2 contrast across five targets',
    lesson.title.de === 'Konzessivsätze mit obwohl: Verbendstellung und Hauptsatzinversion' &&
      lesson.title.ar === 'جمل التنازل مع obwohl: الفعل في النهاية وقلب الجملة الرئيسية' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'التعبير عن تناقض بين ظرف ونتيجة' &&
      row.grammar.item === 'obwohl + Verb am Ende · vorangestellter Nebensatz + Verb zuerst · trotzdem/allerdings + V2 · trotz + Genitiv · zwar … aber / einerseits … andererseits' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende bildest du fünf vollständige Gegensätze mit obwohl und trotzdem' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'obwohl', 'obgleich', 'trotzdem', 'trotz', 'zwar', 'allerdings', 'widersprechen', 'zustimmen',
    'ablehnen', 'akzeptieren', 'bezweifeln', 'begründen', 'kritisieren', 'verteidigen', 'verzichten',
    'sich bemühen', 'berücksichtigen', 'einwenden', 'der Widerspruch', 'der Einwand', 'die Begründung',
    'die Ausnahme', 'die Regel', 'die Schwierigkeit', 'die Mühe', 'der Aufwand', 'das Risiko',
    'die Gefahr', 'der Mut', 'die Geduld', 'das Interesse', 'die Rücksicht', 'die Kritik', 'der Zweifel',
    'die Meinung', 'die Ansicht', 'der Grund', 'die Folge', 'der Zweck', 'andererseits'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u1-l3 reviews all 40 entries and three bounded mnemonics without rejecting grammatical dative, ellipsis or viewpoint alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord.obwohl.ex === targets[1] && byWord.obwohl.err.includes('obwohl regnet es') &&
      byWord.obgleich.err.includes('er arbeitete weiter') && byWord.trotzdem.ex === targets[4] &&
      byWord.trotzdem.why.includes('الموضع الثاني') && byWord.trotz.err.includes('des Regen') &&
      byWord.zwar.ex.includes('Zwar ist der Kurs') && byWord.allerdings.err.includes('allerdings er ist') &&
      byWord.widersprechen.why.includes('Dativ') && byWord.zustimmen.why.includes('Dativ') &&
      byWord.ablehnen.ex.includes('lehnt den Vorschlag ab') && byWord.akzeptieren.why.includes('Akkusativ') &&
      byWord.bezweifeln.why.includes('zweifeln') && byWord.begründen.why.includes('Akkusativ') &&
      byWord.kritisieren.err.includes('dem Plan') && byWord.verteidigen.err.includes('ihrer Meinung') &&
      byWord.verzichten.ex.includes('auf das Auto') && byWord['sich bemühen'].why.includes('um + Akkusativ') &&
      byWord.berücksichtigen.err.includes('deiner Erfahrung') && byWord.einwenden.err.includes('Plan ist teuer') &&
      byWord['der Widerspruch'].ex.includes('in deiner Aussage') && byWord['der Einwand'].why.includes('gegen') &&
      byWord['die Begründung'].ex.includes('für die Entscheidung') && byWord['die Ausnahme'].ex.includes('von der Regel') &&
      byWord['die Regel'].ex.startsWith('In der Regel') && byWord['die Schwierigkeit'].why.includes('mit') &&
      byWord['die Mühe'].ex === 'Er gibt sich viel Mühe.' && byWord['der Aufwand'].ex.includes('größer als') &&
      byWord['das Risiko'].ex.includes('Trotz des Risikos') && byWord['die Gefahr'].why.includes('Partizip II') &&
      byWord['der Mut'].ex === 'Dazu braucht man Mut.' && byWord['die Geduld'].why.includes('الموضع الثاني') &&
      byWord['das Interesse'].ex.includes('an der Stelle') && byWord['die Rücksicht'].why.includes('Rücksicht nehmen auf') &&
      byWord['die Kritik'].pl === 'die Kritiken' && byWord['die Kritik'].ex.includes('Kritik am Plan') &&
      byWord['der Zweifel'].why.includes('Dativ') && byWord['die Meinung'].ex.includes('anderer Meinung bin') &&
      byWord['die Ansicht'].ex.startsWith('Meiner Ansicht nach') && byWord['der Grund'].ex.startsWith('Aus welchem Grund') &&
      byWord['die Folge'].err.includes('eine Folgen') && byWord['der Zweck'].ex.startsWith('Zu diesem Zweck') &&
      byWord.andererseits.ex === 'Einerseits ist es teuer, andererseits ist es bequem.' &&
      !['Trotz dem Regen sind wir gefahren.', 'Einerseits ist es teuer, andererseits bequem.',
        'Nach meiner Ansicht ist das falsch.', 'Wir nehmen Rücksicht auf den Nachbarn.'].some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('obwohl es regnet') && tricks[0].wie.includes('trotzdem gehe ich') &&
      tricks[0].warum.includes('الموضع الثاني') && tricks[1].wie === targets[0] && tricks[1].warum.includes('gehe ثم ich') &&
      tricks[2].wie.includes('arbeiten muss') && tricks[2].wie.includes('geschlafen hat') &&
      tricks[2].warum.includes('لا muss arbeiten ولا hat geschlafen'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u1-l3 aligns five strict learning clozes, an explicit fronted subordinate clause and a 36-word five-target production',
    wordCloze1.frage.zeigt === 'Der Kurs ist teuer, ____ ist er gut.' && wordCloze1.frage.antworten.join(' ') === 'allerdings' &&
      wordCloze1.frage.nearMiss.obwohl && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'obwohl').ok &&
      wordCloze2.frage.zeigt === 'Das ist eine ____ von der Regel.' && wordCloze2.frage.antworten.join(' ') === 'Ausnahme' &&
      wordCloze2.frage.nearMiss.Ausnahmen && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Ausnahmen').ok &&
      wordCloze3.frage.zeigt === 'Das ist eine ____ der Entscheidung.' && wordCloze3.frage.antworten.join(' ') === 'Folge' &&
      wordCloze3.frage.nearMiss.Folgen && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'Folgen').ok &&
      imitate.zeigt.de === 'Obwohl es regnet, ____ ich spazieren.' && imitate.frage.antworten.join(' ') === 'gehe' &&
      imitate.frage.nearMiss.trotzdem && !win.DW.renderers.judgeCloze(imitate.frage, 'trotzdem').ok &&
      drill.frage.zeigt === 'Es regnet, ____ gehe ich spazieren.' && drill.frage.antworten.join(' ') === 'trotzdem' &&
      drill.frage.nearMiss.obwohl && !win.DW.renderers.judgeCloze(drill.frage, 'obwohl').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.frage === 'رتّب جملة التنازل مع وضع regnet قبل الفاصلة وgehe بعدها.' &&
      order.frage.correct.join(' ') === targets[0] && order.frage.finite === 'gehe' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Obwohl es regnet,' && order.frage.fields.lsk.join(' ') === 'gehe' &&
      order.frage.fields.mittelfeld.join(' ') === 'ich spazieren.' && !order.frage.fields.rsk &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Obwohl', 'es', 'regnet,', 'ich', 'gehe', 'spazieren.']).credit < 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 36 &&
      targets.join(' ').split(/\s+/).length === 36 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u1-l3 makes 80 percent four of five, independently checking perfect, trotzdem, inversion, final regnet and modal order',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.b1-u1-l3\.s\d+$/.test(s.frage.prereq || '')) && checks.every(s => !s.hinweise) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u1-l3.s07 | cap.b1-u1-l3.s23 | cap.b1-u1-l3.s24 | cap.b1-u1-l3.s08 | cap.b1-u1-l3.s06' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text.includes('wenig hat geschlafen')) &&
      Object.values(checks[0].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      clozeCheck.frage.zeigt === 'Es regnet, ____ gehe ich spazieren.' &&
      clozeCheck.frage.antworten.join(' ') === 'trotzdem' && clozeCheck.frage.nearMiss.obwohl &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'obwohl').ok &&
      orderCheck.frage.correct.join(' ') === targets[0] && orderCheck.frage.finite === 'gehe' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Obwohl es regnet,' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Obwohl', 'es', 'regnet,', 'ich', 'gehe', 'spazieren.']).credit < 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[1]) &&
      checks[3].frage.optionen.some(o => o.text.includes('obwohl regnet es')) &&
      Object.values(checks[3].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      checks[4].frage.optionen.some(o => o.text === targets[2]) &&
      checks[4].frage.optionen.some(o => o.text.includes('heute muss arbeiten')) &&
      Object.values(checks[4].frage.misconceptionFamilies).join(' ') === 'wortstellung');
}


/* ---------- audited B1 cause-and-result connector lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['b1-u1-l4'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich war krank, deshalb bin ich zu Hause geblieben.',
    'Der Zug fiel aus, deswegen kam ich später.',
    'Es regnete stark, daher blieben wir im Hotel.',
    'Ich bleibe zu Hause, denn ich bin krank.',
    'Ich bleibe zu Hause, weil ich krank bin.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson b1-u1-l4 precisely scopes result-adverb inversion, denn without inversion and verb-final weil across five targets',
    lesson.title.de === 'Folge und Grund: Verbstellung mit deshalb, denn und weil' &&
      lesson.title.ar === 'النتيجة والسبب: موضع الفعل مع deshalb وdenn وweil' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'ربط السبب بالنتيجة والتعليل' &&
      row.grammar.item === 'deshalb/deswegen/daher/folglich + V2 · denn في الموضع صفر بلا قلب · weil + Verb am Ende' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende verbindest du Ursache und Folge in fünf vollständigen Sätzen' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'deshalb', 'deswegen', 'daher', 'folglich', 'also', 'denn', 'verursachen', 'bewirken',
    'verhindern', 'vermeiden', 'reduzieren', 'verringern', 'erweitern', 'verbessern', 'verändern',
    'ermöglichen', 'abhängen', 'beitragen', 'die Folge', 'die Wirkung', 'die Ursache', 'der Effekt',
    'die Konsequenz', 'der Einfluss', 'die Maßnahme', 'der Plan', 'der Beschluss', 'die Entscheidung',
    'die Entwicklung', 'die Veränderung', 'die Verbesserung', 'die Erweiterung', 'der Zusammenhang',
    'die Auswirkung', 'der Vorteil', 'der Nachteil', 'die Lösung', 'das Problem', 'die Schwierigkeit',
    'der Zweck'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u1-l4 reviews all 40 entries and three bounded mnemonics without rejecting grammatical perfect or von-dative alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord.deshalb.ex === targets[0] && byWord.deswegen.ex === targets[1] &&
      byWord.daher.ex === targets[2] && byWord.denn.ex === targets[3] &&
      byWord.denn.err.includes('denn bin ich') && byWord.denn.why.includes('الموضع صفر') &&
      byWord['die Folge'].why.includes('Nominativ') && !byWord['die Folge'].why.includes('einen langen') &&
      byWord['die Wirkung'].err.includes('des Medikament ist') &&
      byWord['der Effekt'].err.startsWith('Das Effekt') &&
      byWord['der Beschluss'].ar !== byWord['die Entscheidung'].ar &&
      byWord['die Entwicklung'].err.includes('von die Stadt') &&
      byWord['die Veränderung'].err.includes('betrifft allen') &&
      byWord['die Auswirkung'].err.includes('schwer abschätzen') &&
      byWord['das Problem'].err.includes('lässt sich zu lösen') &&
      byWord['abhängen'].ex.includes('hängt von der Qualität ab') &&
      byWord['der Zweck'].ex.includes('heiligt') &&
      !['Die Entscheidung ist richtig gewesen.', 'Die Verbesserung ist nötig gewesen.',
        'Die Entwicklung von der Stadt ist schnell.', 'Die Wirkung von dem Medikament ist stark.']
        .some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].trick.includes('والفعل ثانيًا') &&
      tricks[0].wie.includes(targets[0]) && tricks[0].wie.includes(targets[1]) &&
      tricks[1].wie.includes('Einfluss auf die Entscheidung') &&
      tricks[2].trick.includes('اسم النتيجة') && !tricks[2].trick.includes('اسم المفعول'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u1-l4 aligns five strict learning clozes, an explicit result-clause field order and a 41-word five-target production',
    wordCloze1.frage.zeigt === 'Ich bleibe zu Hause, ____ ich bin krank.' && wordCloze1.frage.antworten.join(' ') === 'denn' &&
      wordCloze1.frage.nearMiss.weil && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'weil').ok &&
      wordCloze2.frage.zeigt === 'Der ____ war sofort sichtbar.' && wordCloze2.frage.antworten.join(' ') === 'Effekt' &&
      wordCloze2.frage.nearMiss.Effekte && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Effekte').ok &&
      wordCloze3.frage.zeigt === 'Das ____ lässt sich lösen.' && wordCloze3.frage.antworten.join(' ') === 'Problem' &&
      wordCloze3.frage.nearMiss.Probleme && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'Probleme').ok &&
      imitate.zeigt.de === 'Ich war krank, deshalb ____ ich zu Hause geblieben.' && imitate.frage.antworten.join(' ') === 'bin' &&
      imitate.frage.nearMiss.ich && !win.DW.renderers.judgeCloze(imitate.frage, 'ich').ok &&
      drill.frage.zeigt === 'Der Zug fiel aus, ____ kam ich später.' && drill.frage.antworten.join(' ') === 'deswegen' &&
      drill.frage.nearMiss.weil && !win.DW.renderers.judgeCloze(drill.frage, 'weil').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.frage === 'رتّب الجملة واضعًا bin بعد Deshalb مباشرة وgeblieben. في النهاية.' &&
      order.frage.correct.join(' ') === 'Deshalb bin ich zu Hause geblieben.' && order.frage.finite === 'bin' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Deshalb' && order.frage.fields.lsk.join(' ') === 'bin' &&
      order.frage.fields.mittelfeld.join(' ') === 'ich zu Hause' && order.frage.fields.rsk.join(' ') === 'geblieben.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Deshalb', 'ich', 'bin', 'zu', 'Hause', 'geblieben.']).credit < 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 41 &&
      targets.join(' ').split(/\s+/).length === 41 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u1-l4 makes 80 percent four of five, independently checking denn, deswegen, result order, deshalb perfect and verb-final weil',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.b1-u1-l4\.s\d+$/.test(s.frage.prereq || '')) && checks.every(s => !s.hinweise) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u1-l4.s07 | cap.b1-u1-l4.s23 | cap.b1-u1-l4.s24 | cap.b1-u1-l4.s08 | cap.b1-u1-l4.s20' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text.includes('denn bin ich')) &&
      Object.values(checks[0].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      clozeCheck.frage.zeigt === 'Der Zug fiel aus, ____ kam ich später.' &&
      clozeCheck.frage.antworten.join(' ') === 'deswegen' && clozeCheck.frage.nearMiss.weil &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'weil').ok &&
      orderCheck.frage.correct.join(' ') === 'Deshalb bin ich zu Hause geblieben.' && orderCheck.frage.finite === 'bin' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Deshalb' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Deshalb', 'ich', 'bin', 'zu', 'Hause', 'geblieben.']).credit < 1 &&
      checks[3].frage.optionen.some(o => o.text === targets[0]) &&
      checks[3].frage.optionen.some(o => o.text.includes('deshalb ich bin')) &&
      Object.values(checks[3].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) &&
      checks[4].frage.optionen.some(o => o.text.includes('weil ich bin krank')) &&
      Object.values(checks[4].frage.misconceptionFamilies).join(' ') === 'wortstellung');
}


/* ---------- audited B1 purpose-clause lesson ---------- */
{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['b1-u1-l5'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich lerne Deutsch, um in Deutschland zu arbeiten.',
    'Sie spricht langsam, damit alle sie verstehen.',
    'Ich spare Geld, damit meine Tochter studieren kann.',
    'Ich fahre früh los, um pünktlich anzukommen.',
    'Um gesund zu bleiben, mache ich jeden Tag Sport.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson b1-u1-l5 precisely scopes um zu with same subject, verb-final damit and the zu-infix across five targets',
    lesson.title.de === 'Finalsätze mit um … zu und damit: gleiches oder neues Subjekt' &&
      lesson.title.ar === 'جمل الغاية مع um … zu وdamit: الفاعل نفسه أو فاعل جديد' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'التعبير عن الغاية والهدف' &&
      row.grammar.item === 'um … zu bei gleichem Subjekt · damit + Verb am Ende bei neuem Subjekt · zu im trennbaren Verb · vorangestellte Finalangabe + V2' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende bildest du fünf vollständige Finalsätze mit um … zu und damit' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'damit', 'um', 'erreichen', 'ermöglichen', 'erleichtern', 'unterstützen', 'fördern', 'verstärken',
    'sparen', 'verdienen', 'investieren', 'organisieren', 'vorbereiten', 'sich interessieren', 'helfen',
    'dienen', 'nutzen', 'vermeiden', 'das Ziel', 'der Zweck', 'die Absicht', 'das Motiv', 'der Grund',
    'die Begründung', 'die Folge', 'die Maßnahme', 'die Möglichkeit', 'die Gelegenheit', 'die Aufgabe',
    'das Verbot', 'die Erlaubnis', 'die Übung', 'die Geduld', 'die Zeit', 'das Geld', 'der Kontakt',
    'das Ergebnis', 'die Gesundheit', 'die Umwelt', 'die Prüfung'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u1-l5 reviews all 40 entries and three bounded mnemonics without rejecting grammatical ohne-article or von-dative alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord.damit.ex.includes('die Prüfung bestehe') && byWord.um.ex.includes('in Berlin zu studieren') &&
      byWord['ermöglichen'].why.includes('ein sicheres Sprechen') &&
      byWord['der Zweck'].err.includes('von die Reise') && byWord['der Zweck'].why.includes('von der Reise') &&
      byWord['die Begründung'].why.includes('ohne eine Begründung') &&
      byWord['die Erlaubnis'].err.includes('nicht zu fahren') &&
      byWord['die Maßnahme'].ex.includes('eine Maßnahme, um Strom zu sparen') &&
      byWord['die Gesundheit'].ex.includes('Um gesund zu bleiben') &&
      !['Ohne eine Begründung akzeptiere ich das nicht.', 'Ohne die Erlaubnis darfst du nicht fahren.',
        'Der Zweck von der Reise ist ein Termin.', 'Ich habe keine Zeit zu warten.']
        .some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('um zu bestehen') && tricks[0].warum.includes('وحدة الفاعل') &&
      tricks[1].wie.includes('anzukommen') && tricks[2].trick.includes('الفاصلة'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u1-l5 aligns five strict learning clozes, an explicit final-infinitive bracket and a 39-word five-target production',
    wordCloze1.frage.zeigt === 'Die Firma ____ ihre Mitarbeiter.' && wordCloze1.frage.antworten.join(' ') === 'unterstützt' &&
      wordCloze1.frage.nearMiss['unterstützen'] && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'unterstützen').ok &&
      wordCloze2.frage.zeigt === 'Das ____ ist unklar.' && wordCloze2.frage.antworten.join(' ') === 'Motiv' &&
      wordCloze2.frage.nearMiss.Motive && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Motive').ok &&
      wordCloze3.frage.zeigt === 'Um gesund zu ____, bewegt er sich täglich.' && wordCloze3.frage.antworten.join(' ') === 'bleiben' &&
      wordCloze3.frage.nearMiss.bleibt && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'bleibt').ok &&
      imitate.zeigt.de === 'Ich lerne Deutsch, um in Deutschland ____ arbeiten.' && imitate.frage.antworten.join(' ') === 'zu' &&
      imitate.frage.nearMiss.to && !win.DW.renderers.judgeCloze(imitate.frage, 'to').ok &&
      drill.frage.zeigt === 'Ich lerne Deutsch, ____ in Berlin zu studieren.' && drill.frage.antworten.join(' ') === 'um' &&
      drill.frage.nearMiss.damit && !win.DW.renderers.judgeCloze(drill.frage, 'damit').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.frage === 'رتّب الجملة واضعًا lerne بعد Ich وzu arbeiten. في النهاية.' &&
      order.frage.correct.join(' ') === targets[0] && order.frage.finite === 'lerne' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Ich' && order.frage.fields.lsk.join(' ') === 'lerne' &&
      order.frage.fields.mittelfeld.join(' ') === 'Deutsch, um in Deutschland' && order.frage.fields.rsk.join(' ') === 'zu arbeiten.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Ich', 'Deutsch,', 'lerne', 'um', 'in', 'Deutschland', 'zu', 'arbeiten.']).credit < 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 39 &&
      targets.join(' ').split(/\s+/).length === 39 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u1-l5 makes 80 percent four of five, independently checking zu-infix, um, bracket order, verb-final damit and fronted inversion',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.b1-u1-l5\.s\d+$/.test(s.frage.prereq || '')) && checks.every(s => !s.hinweise) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u1-l5.s07 | cap.b1-u1-l5.s23 | cap.b1-u1-l5.s24 | cap.b1-u1-l5.s08 | cap.b1-u1-l5.s20' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text.includes('zu ankommen')) &&
      Object.values(checks[0].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      clozeCheck.frage.zeigt === 'Ich lerne Deutsch, ____ in Berlin zu studieren.' &&
      clozeCheck.frage.antworten.join(' ') === 'um' && clozeCheck.frage.nearMiss.damit &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'damit').ok &&
      orderCheck.frage.correct.join(' ') === targets[0] && orderCheck.frage.finite === 'lerne' &&
      orderCheck.frage.fields.rsk.join(' ') === 'zu arbeiten.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Ich', 'Deutsch,', 'lerne', 'um', 'in', 'Deutschland', 'zu', 'arbeiten.']).credit < 1 &&
      checks[3].frage.optionen.some(o => o.text.includes('die Prüfung bestehe')) &&
      checks[3].frage.optionen.some(o => o.text.includes('bestehe die Prüfung')) &&
      Object.values(checks[3].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) &&
      checks[4].frage.optionen.some(o => o.text.includes('bleiben, ich mache')) &&
      Object.values(checks[4].frage.misconceptionFamilies).join(' ') === 'wortstellung');
}

{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['b1-u1-l6'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich versuche jeden Tag Deutsch zu lernen.',
    'Es ist wichtig, pünktlich zu sein.',
    'Ich habe Lust, ins Kino zu gehen.',
    'Ich muss heute länger arbeiten.',
    'Ich habe vor, meine Freunde einzuladen.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson b1-u1-l6 precisely scopes the zu-infinitive after verbs, es-ist adjectives and nouns, its separable infix and the modal exception across five targets',
    lesson.title.de === 'Infinitiv mit zu nach Verb, Adjektiv und Nomen — und kein zu nach Modalverben' &&
      lesson.title.ar === 'المصدر مع zu بعد الفعل والصفة والاسم — وبلا zu بعد الأفعال الناقصة' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'النية والرغبة والتقييم' &&
      row.grammar.item === 'zu-Infinitiv nach Verben · es ist + Adjektiv + zu · Nomen + zu · zu im trennbaren Verb · kein zu nach Modalverben' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende bildest du vier Sätze mit dem zu-Infinitiv und einen Modalsatz ohne zu' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'anfangen', 'aufhören', 'versuchen', 'vergessen', 'vorhaben', 'planen', 'beschließen', 'hoffen',
    'scheinen', 'pflegen', 'beabsichtigen', 'erwarten', 'bitten', 'empfehlen', 'verbieten', 'erlauben',
    'die Absicht', 'die Möglichkeit', 'die Gelegenheit', 'die Hoffnung', 'die Angst', 'die Lust',
    'die Pflicht', 'das Recht', 'der Wunsch', 'der Plan', 'die Aufgabe', 'die Schwierigkeit',
    'wichtig', 'nötig', 'möglich', 'schwierig', 'leicht', 'sinnvoll', 'verboten', 'erlaubt',
    'bereit', 'froh', 'stolz', 'gewohnt'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u1-l6 reviews all 40 entries and three bounded mnemonics without rejecting comma-free zu-infinitive groups as errors',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord.anfangen.err === 'Ich fange an, Deutsch lernen.' &&
      byWord.anfangen.why.includes('لا حذف الفاصلة') &&
      byWord.vorhaben.err === 'Ich habe vor, umziehen.' && byWord.vorhaben.why.includes('umzuziehen') &&
      byWord.pflegen.ar === 'من عادته أن يفعل' && byWord.pflegen.why.includes('الاعتياد') &&
      byWord['der Plan'].ex.includes('ein Haus zu bauen') &&
      byWord['die Aufgabe'].ex.includes('alles zu prüfen') &&
      byWord['die Schwierigkeit'].ex.includes('ehrlich zu antworten') &&
      byWord.empfehlen.ex.includes('empfehle dir') && byWord['stolz'].ex.includes('geschafft zu haben') &&
      !['Ich fange an Deutsch zu lernen.', 'Er hört auf zu rauchen.', 'Ich versuche früher zu kommen.',
        'Vergiss nicht die Tür zu schließen!', 'Ich habe vor umzuziehen.']
        .some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('früher zu kommen') && tricks[0].warum.includes('تحتاج zu') &&
      tricks[1].wie.includes('ehrlich zu sein') && tricks[2].wie.includes('anzufangen'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u1-l6 aligns five strict learning clozes, an explicit final zu-infinitive bracket and a 31-word five-target production',
    wordCloze1.frage.zeigt === 'Wir ____, im Sommer zu reisen.' && wordCloze1.frage.antworten.join(' ') === 'planen' &&
      wordCloze1.frage.nearMiss.plant && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'plant').ok &&
      wordCloze2.frage.zeigt === 'Ich habe ____, ins Kino zu gehen.' && wordCloze2.frage.antworten.join(' ') === 'Lust' &&
      wordCloze2.frage.nearMiss.Lusten && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Lusten').ok &&
      wordCloze3.frage.zeigt === 'Ich bin ____, dich zu sehen.' && wordCloze3.frage.antworten.join(' ') === 'froh' &&
      wordCloze3.frage.nearMiss.frohe && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'frohe').ok &&
      imitate.zeigt.de === 'Ich versuche jeden Tag Deutsch ____ lernen.' && imitate.frage.antworten.join(' ') === 'zu' &&
      imitate.frage.nearMiss.to && !win.DW.renderers.judgeCloze(imitate.frage, 'to').ok &&
      drill.frage.zeigt === 'Es besteht die Möglichkeit zu ____.' && drill.frage.antworten.join(' ') === 'wechseln' &&
      drill.frage.nearMiss.wechselt && !win.DW.renderers.judgeCloze(drill.frage, 'wechselt').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.frage === 'رتّب الجملة واضعًا versuche بعد Ich وzu lernen. في النهاية.' &&
      order.frage.correct.join(' ') === targets[0] && order.frage.finite === 'versuche' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Ich' && order.frage.fields.lsk.join(' ') === 'versuche' &&
      order.frage.fields.mittelfeld.join(' ') === 'jeden Tag Deutsch' && order.frage.fields.rsk.join(' ') === 'zu lernen.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Ich', 'jeden', 'Tag', 'versuche', 'Deutsch', 'zu', 'lernen.']).credit < 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 31 &&
      targets.join(' ').split(/\s+/).length === 31 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u1-l6 makes 80 percent four of five, independently checking the modal exception, noun-zu cloze, bracket order, es-ist adjective and zu-infix',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.b1-u1-l6\.s\d+$/.test(s.frage.prereq || '')) && checks.every(s => !s.hinweise) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u1-l6.s07 | cap.b1-u1-l6.s23 | cap.b1-u1-l6.s24 | cap.b1-u1-l6.s16 | cap.b1-u1-l6.s20' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text.includes('länger zu arbeiten')) &&
      Object.values(checks[0].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      clozeCheck.frage.zeigt === 'Es besteht die Möglichkeit zu ____.' &&
      clozeCheck.frage.antworten.join(' ') === 'wechseln' && clozeCheck.frage.nearMiss.wechselt &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'wechselt').ok &&
      orderCheck.frage.correct.join(' ') === targets[0] && orderCheck.frage.finite === 'versuche' &&
      orderCheck.frage.fields.rsk.join(' ') === 'zu lernen.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Ich', 'jeden', 'Tag', 'versuche', 'Deutsch', 'zu', 'lernen.']).credit < 1 &&
      checks[3].frage.optionen.some(o => o.text.includes('verboten, hier zu rauchen')) &&
      checks[3].frage.optionen.some(o => o.text.includes('verboten hier rauchen')) &&
      Object.values(checks[3].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) &&
      checks[4].frage.optionen.some(o => o.text.includes('zu einladen')) &&
      Object.values(checks[4].frage.misconceptionFamilies).join(' ') === 'wortstellung');
}

{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['b1-u1-l7'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich würde dich besuchen, wenn ich mehr Zeit hätte.',
    'Wenn ich reich wäre, würde ich ein Haus kaufen.',
    'Ich würde lieber zu Hause bleiben.',
    'Könntest du mir bitte das Fenster öffnen?',
    'Wenn ich reich wäre, reiste ich viel.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson b1-u1-l7 precisely scopes irrealis with hätte and wäre verb-final, würde answers, polite könnte and the short form reiste across five targets',
    lesson.title.de === 'Irrealis mit Konjunktiv II: hätte, wäre, würde und höfliches könnte' &&
      lesson.title.ar === 'الخيال الشرطي (Irrealis) مع hätte وwäre وwürde — والطلب المهذب' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الأمنيات والشروط غير الواقعية' &&
      row.grammar.item === 'irrealer wenn-Satz mit hätte/wäre am Ende · Antwort mit würde + Infinitiv und Inversion · würde lieber · höfliches könnte · Kurzform reiste' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende bildest du vier irreale Sätze mit hätte, wäre und würde und eine höfliche Bitte mit könntest' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'wäre', 'hätte', 'würde', 'könnte', 'müsste', 'dürfte', 'sollte', 'wollte', 'wenn', 'anstatt',
    'sonst', 'beinahe', 'fast', 'eigentlich', 'lieber', 'kaum', 'die Bedingung', 'die Möglichkeit',
    'der Wunsch', 'die Hoffnung', 'der Traum', 'die Wirklichkeit', 'die Realität', 'der Vorschlag',
    'der Rat', 'das Bedauern', 'die Entschuldigung', 'die Ausrede', 'die Vernunft', 'die Fantasie',
    'die Vorstellung', 'die Alternative', 'die Chance', 'die Warnung', 'die Verantwortung',
    'die Freiheit', 'der Erfolg', 'das Pech', 'die Schuld', 'die Sorge'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u1-l7 reviews all 40 entries and three bounded mnemonics without manufactured gewesen or gemacht appendages and without rejecting grammatical alternatives',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord.würde.err.includes('helfen würde') &&
      byWord['die Entschuldigung'].err === 'Ohne Entschuldigung ich gehe nicht.' &&
      byWord['die Entschuldigung'].why.includes('ohne eine Entschuldigung') &&
      byWord.fast.err === 'Ich hätte fast vergessen, dich anrufen.' &&
      byWord['die Chance'].err === 'Du hätte eine Chance gehabt.' &&
      byWord['die Wirklichkeit'].why.includes('in Realität') &&
      byWord['das Pech'].why.includes('Glück') &&
      byWord.wenn.err.includes('sein würde') &&
      !['Kannst du mir bitte helfen gewesen?', 'Ich muss früher aufstehen gewesen.',
        'Du sollst mehr schlafen gewesen.', 'Das darf stimmen gewesen.',
        'Es gibt noch eine Möglichkeit gewesen.', 'Er hätte kaum Zeit gehabt gemacht.',
        'Die Realität sieht anders aus gemacht.', 'Am Ende siegte die Vernunft gemacht.',
        'Ohne eine Entschuldigung gehe ich nicht.', 'Ich würde gern mit dem Zug fahren.',
        'Das ist mein Traum geworden.', 'Ich werde dir gern helfen.',
        'Ich hätte fast vergessen dich anzurufen.']
        .some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('wäre ich gekommen') && tricks[0].warum.includes('تفرّق') &&
      tricks[1].wie.includes('als ob er alles wüsste') && tricks[2].wie.includes('hätte mehr lernen sollen'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u1-l7 aligns five strict learning clozes, an explicit würde-to-hätte bracket and a 38-word five-target production',
    wordCloze1.frage.zeigt === 'Das ____ stimmen.' && wordCloze1.frage.antworten.join(' ') === 'dürfte' &&
      wordCloze1.frage.nearMiss.darf && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'darf').ok &&
      wordCloze2.frage.zeigt === 'In ____ ist alles anders.' && wordCloze2.frage.antworten.join(' ') === 'Wirklichkeit' &&
      wordCloze2.frage.nearMiss['Realität'] && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Realität').ok &&
      wordCloze3.frage.zeigt === 'So ein ____ hätte ich nicht erwartet.' && wordCloze3.frage.antworten.join(' ') === 'Pech' &&
      wordCloze3.frage.nearMiss['Glück'] && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'Glück').ok &&
      imitate.zeigt.de === 'Ich würde dich besuchen, wenn ich mehr Zeit ____.' && imitate.frage.antworten.join(' ') === 'hätte' &&
      imitate.frage.nearMiss.habe && !win.DW.renderers.judgeCloze(imitate.frage, 'habe').ok &&
      drill.frage.zeigt === 'Wenn ich Zeit ____, käme ich mit.' && drill.frage.antworten.join(' ') === 'hätte' &&
      drill.frage.nearMiss.habe && !win.DW.renderers.judgeCloze(drill.frage, 'habe').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.frage === 'رتّب الجملة واضعًا würde بعد Ich وhätte. في النهاية.' &&
      order.frage.correct.join(' ') === targets[0] && order.frage.finite === 'würde' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Ich' && order.frage.fields.lsk.join(' ') === 'würde' &&
      order.frage.fields.mittelfeld.join(' ') === 'dich besuchen, wenn ich mehr Zeit' && order.frage.fields.rsk.join(' ') === 'hätte.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Ich', 'dich', 'würde', 'besuchen,', 'wenn', 'ich', 'mehr', 'Zeit', 'hätte.']).credit < 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 38 &&
      targets.join(' ').split(/\s+/).length === 38 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u1-l7 makes 80 percent four of five, independently checking polite könnte, hätte cloze, bracket order, wenn without double würde and fronted-condition inversion',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.b1-u1-l7\.s\d+$/.test(s.frage.prereq || '')) && checks.every(s => !s.hinweise) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u1-l7.s07 | cap.b1-u1-l7.s23 | cap.b1-u1-l7.s24 | cap.b1-u1-l7.s10 | cap.b1-u1-l7.s20' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text.includes('Fenster öffnest')) &&
      Object.values(checks[0].frage.misconceptionFamilies).join(' ') === 'konjugation' &&
      clozeCheck.frage.zeigt === 'Wenn ich Zeit ____, käme ich mit.' &&
      clozeCheck.frage.antworten.join(' ') === 'hätte' && clozeCheck.frage.nearMiss.habe &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'habe').ok &&
      orderCheck.frage.correct.join(' ') === targets[0] && orderCheck.frage.finite === 'würde' &&
      orderCheck.frage.fields.rsk.join(' ') === 'hätte.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Ich', 'dich', 'würde', 'besuchen,', 'wenn', 'ich', 'mehr', 'Zeit', 'hätte.']).credit < 1 &&
      checks[3].frage.optionen.some(o => o.text.includes('Wenn ich du wäre')) &&
      checks[3].frage.optionen.some(o => o.text.includes('sein würde')) &&
      Object.values(checks[3].frage.misconceptionFamilies).join(' ') === 'konjugation' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) &&
      checks[4].frage.optionen.some(o => o.text.includes('wäre, ich reiste')) &&
      Object.values(checks[4].frage.misconceptionFamilies).join(' ') === 'wortstellung');
}

{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['b1-u1-l8'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Der Student lernt jeden Tag Deutsch.',
    'Ich sehe den Studenten jeden Tag.',
    'Ich muss dem Studenten helfen.',
    'Das Buch des Studenten liegt hier.',
    'Ich danke dem Herrn für die Hilfe.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson b1-u1-l8 precisely scopes n-declension with a bare nominative, -en in accusative dative and genitive and the single-n Herrn across five targets',
    lesson.title.de === 'n-Deklination: -en nach den, dem und des — nur der Nominativ ohne Endung' &&
      lesson.title.ar === 'تصريف n: النهاية en مع den وdem وdes — والرفع وحده بلا نهاية' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الناس والمهن والحيوانات' &&
      row.grammar.item === 'schwache Maskulina: Nominativ ohne Endung · Akkusativ/Dativ/Genitiv mit -en · der Herr mit -n · das Herz als Ausnahme' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende bildest du fünf Sätze mit n-Nomen in allen vier Fällen — und den Herrn mit einem n' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'der Junge', 'der Herr', 'der Mensch', 'der Student', 'der Journalist', 'der Präsident',
    'der Name', 'der Gedanke', 'der Wille', 'der Friede', 'der Buchstabe', 'der Funke',
    'der Glaube', 'der Nachkomme', 'der Bauer', 'der Zeuge', 'der Experte', 'der Kunde',
    'der Patient', 'der Polizist', 'der Tourist', 'der Philosoph', 'der Kollege', 'der Nachbar',
    'der Löwe', 'der Bär', 'der Affe', 'der Hase', 'der Riese', 'der Kamerad', 'der Soldat',
    'der Demokrat', 'der Diplomat', 'der Fotograf', 'der Architekt', 'der Assistent',
    'der Praktikant', 'der Doktorand', 'das Herz', 'der Vetter'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u1-l8 reviews all 40 entries and three bounded mnemonics without manufactured es-appendages and keeps Vetter outside the n-class',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord['der Mensch'].ex === 'Wir helfen dem Menschen.' && byWord['der Mensch'].err === 'Wir helfen dem Mensch.' &&
      byWord['der Journalist'].ex.includes('fragt den Journalisten') &&
      byWord['der Funke'].err === 'Der Funken sprang über.' &&
      byWord['der Nachkomme'].err === 'Die Nachkomme leben in Deutschland.' &&
      byWord['der Herr'].ex.includes('dem Herrn') &&
      byWord['das Herz'].why.includes('dem Herzen') &&
      byWord['der Vetter'].err.includes('meinen Vettern') && byWord['der Vetter'].why.includes('ليس من أسماء n') &&
      !errors.some(e => e.endsWith(' es.')) &&
      !['Wir helfen den Menschen es.', 'Ich besuche meinen Vetter in Sfax es.',
        'Der Journalist fragt den Politiker es.']
        .some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('des Kollegen') &&
      tricks[1].wie.includes('Ich sehe den Jungen') &&
      tricks[2].wie.includes('dem Herzen zu') && tricks[2].warum.includes('des Herzens'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u1-l8 aligns five strict learning clozes, an explicit muss-to-helfen bracket around dem Studenten and a 30-word five-target production',
    wordCloze1.frage.zeigt === 'Wir wählen den ____.' && wordCloze1.frage.antworten.join(' ') === 'Präsidenten' &&
      wordCloze1.frage.nearMiss['Präsident'] && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Präsident').ok &&
      wordCloze2.frage.zeigt === 'Ich lese den ____ gern.' && wordCloze2.frage.antworten.join(' ') === 'Philosophen' &&
      wordCloze2.frage.nearMiss.Philosoph && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Philosoph').ok &&
      wordCloze3.frage.zeigt === 'Der ____ schreibt an seiner Arbeit.' && wordCloze3.frage.antworten.join(' ') === 'Doktorand' &&
      wordCloze3.frage.nearMiss.Doktoranden && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'Doktoranden').ok &&
      imitate.zeigt.de === 'Der ____ lernt jeden Tag Deutsch.' && imitate.frage.antworten.join(' ') === 'Student' &&
      imitate.frage.nearMiss.Studenten && !win.DW.renderers.judgeCloze(imitate.frage, 'Studenten').ok &&
      drill.frage.zeigt === 'Der ____ sprang über.' && drill.frage.antworten.join(' ') === 'Funke' &&
      drill.frage.nearMiss.Funken && !win.DW.renderers.judgeCloze(drill.frage, 'Funken').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.frage === 'رتّب الجملة واضعًا muss بعد Ich وhelfen. في النهاية.' &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'muss' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Ich' && order.frage.fields.lsk.join(' ') === 'muss' &&
      order.frage.fields.mittelfeld.join(' ') === 'dem Studenten' && order.frage.fields.rsk.join(' ') === 'helfen.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Ich', 'dem', 'Studenten', 'muss', 'helfen.']).credit < 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 30 &&
      targets.join(' ').split(/\s+/).length === 30 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u1-l8 makes 80 percent four of five, independently checking genitive des Studenten, bare-nominative cloze, dative bracket order, accusative den Namen and single-n Herrn',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.b1-u1-l8\.s\d+$/.test(s.frage.prereq || '')) && checks.every(s => !s.hinweise) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u1-l8.s07 | cap.b1-u1-l8.s23 | cap.b1-u1-l8.s24 | cap.b1-u1-l8.s09 | cap.b1-u1-l8.s20' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text.includes('des Student liegt')) &&
      Object.values(checks[0].frage.misconceptionFamilies).join(' ') === 'deklination' &&
      clozeCheck.frage.zeigt === 'Der ____ sprang über.' &&
      clozeCheck.frage.antworten.join(' ') === 'Funke' && clozeCheck.frage.nearMiss.Funken &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Funken').ok &&
      orderCheck.frage.correct.join(' ') === targets[2] && orderCheck.frage.finite === 'muss' &&
      orderCheck.frage.fields.rsk.join(' ') === 'helfen.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Ich', 'dem', 'Studenten', 'muss', 'helfen.']).credit < 1 &&
      checks[3].frage.optionen.some(o => o.text.includes('den Namen vergessen')) &&
      checks[3].frage.optionen.some(o => o.text.includes('den Name vergessen')) &&
      Object.values(checks[3].frage.misconceptionFamilies).join(' ') === 'deklination' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) &&
      checks[4].frage.optionen.some(o => o.text.includes('dem Herren')) &&
      Object.values(checks[4].frage.misconceptionFamilies).join(' ') === 'deklination');
}

{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['b1-u2-l1'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich werde die Aufgabe morgen erledigen.',
    'Es wird morgen den ganzen Tag regnen.',
    'Sie wird dich heute Abend anrufen.',
    'Wirst du mir morgen helfen?',
    'Nächstes Jahr werden wir nach Deutschland reisen.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson b1-u2-l1 precisely scopes Futur I with werden second, infinitive final, es wird predictions, unsplit separable infinitive, wirst questions and time-first inversion across five targets',
    lesson.title.de === 'Futur I mit werden: Pläne, Versprechen und Vorhersagen' &&
      lesson.title.ar === 'المستقبل الأول مع werden: الخطط والوعود والتوقعات' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الخطط والتوقعات للمستقبل' &&
      row.grammar.item === 'werden + Infinitiv am Satzende · Vorhersage mit es wird (nicht will) · trennbarer Infinitiv ungeteilt · Frage mit wirst · Inversion nach vorangestellter Zeit' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende bildest du fünf Sätze im Futur I mit werden — als Plan, Vorhersage und Frage' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'werden', 'die Zukunft', 'die Prognose', 'die Vorhersage', 'der Fortschritt', 'die Technik',
    'die Technologie', 'die Wissenschaft', 'die Forschung', 'der Trend', 'die Tendenz', 'die Statistik',
    'die Zahl', 'der Anteil', 'das Wachstum', 'der Rückgang', 'der Anstieg', 'die Bevölkerung',
    'die Generation', 'die Rente', 'das Einkommen', 'der Arbeitsplatz', 'die Digitalisierung',
    'die Automatisierung', 'der Roboter', 'die Maschine', 'der Klimawandel', 'die Energie',
    'die Solarenergie', 'das Elektroauto', 'die Batterie', 'die Erfindung', 'der Erfinder',
    'die Erwartung', 'die Aussicht', 'die Unsicherheit', 'die Sicherheit', 'der Wandel',
    'die Welt', 'die Natur'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u2-l1 reviews all 40 entries and three bounded mnemonics without manufactured es or gemacht appendages and without rejecting grammatical von-dative genitive paraphrases',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord.werden.err === 'Morgen es wird regnen.' &&
      byWord['der Anteil'].err.includes('von die Frauen') && byWord['der Anteil'].why.includes('von den Frauen') &&
      byWord['die Solarenergie'].err.includes('hat billiger geworden') &&
      byWord['die Erfindung'].err.includes('die Welt verändern') &&
      byWord['der Erfinder'].err.includes('berühmt geworden') &&
      byWord['der Arbeitsplatz'].err.includes('wird verschwinden') &&
      byWord['die Batterie'].err.includes('haltet lange') &&
      !errors.some(e => e.endsWith(' es.')) && !errors.some(e => e.endsWith(' gemacht.')) &&
      !['Der Anteil von den Frauen steigt.', 'Der Anstieg von den Preisen ist deutlich.',
        'Das Einkommen von der Familie sinkt.', 'Diese Erfindung hat die Welt verändert gehabt.']
        .some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('Morgen regnet es') && tricks[0].warum.includes('زائدة') &&
      tricks[1].wie.includes('Anteil der Frauen steigt') && tricks[2].wie.includes('dürfte morgen regnen'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u2-l1 aligns five strict learning clozes, an explicit werde-to-erledigen bracket and a 31-word five-target production',
    wordCloze1.frage.zeigt === 'Die ____ hilft uns täglich.' && wordCloze1.frage.antworten.join(' ') === 'Technik' &&
      wordCloze1.frage.nearMiss.Techniken && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Techniken').ok &&
      wordCloze2.frage.zeigt === 'Viele ____ werden verschwinden.' && wordCloze2.frage.antworten.join(' ') === 'Arbeitsplätze' &&
      wordCloze2.frage.nearMiss.Arbeitsplatz && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Arbeitsplatz').ok &&
      wordCloze3.frage.zeigt === 'Der ____ braucht Zeit.' && wordCloze3.frage.antworten.join(' ') === 'Wandel' &&
      wordCloze3.frage.nearMiss.Wandeln && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'Wandeln').ok &&
      imitate.zeigt.de === 'Ich ____ die Aufgabe morgen erledigen.' && imitate.frage.antworten.join(' ') === 'werde' &&
      imitate.frage.nearMiss.will && !win.DW.renderers.judgeCloze(imitate.frage, 'will').ok &&
      drill.frage.zeigt === 'Morgen ____ es regnen.' && drill.frage.antworten.join(' ') === 'wird' &&
      drill.frage.nearMiss.will && !win.DW.renderers.judgeCloze(drill.frage, 'will').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.frage === 'رتّب الجملة واضعًا werde بعد Ich وerledigen. في النهاية.' &&
      order.frage.correct.join(' ') === targets[0] && order.frage.finite === 'werde' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Ich' && order.frage.fields.lsk.join(' ') === 'werde' &&
      order.frage.fields.mittelfeld.join(' ') === 'die Aufgabe morgen' && order.frage.fields.rsk.join(' ') === 'erledigen.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Ich', 'die', 'Aufgabe', 'werde', 'morgen', 'erledigen.']).credit < 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 31 &&
      targets.join(' ').split(/\s+/).length === 31 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u2-l1 makes 80 percent four of five, independently checking wirst questions, es wird cloze, bracket order, in-der-Zukunft case and time-first inversion',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.b1-u2-l1\.s\d+$/.test(s.frage.prereq || '')) && checks.every(s => !s.hinweise) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u2-l1.s07 | cap.b1-u2-l1.s23 | cap.b1-u2-l1.s24 | cap.b1-u2-l1.s08 | cap.b1-u2-l1.s20' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text.includes('morgen hilfst')) &&
      Object.values(checks[0].frage.misconceptionFamilies).join(' ') === 'konjugation' &&
      clozeCheck.frage.zeigt === 'Morgen ____ es regnen.' &&
      clozeCheck.frage.antworten.join(' ') === 'wird' && clozeCheck.frage.nearMiss.will &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'will').ok &&
      orderCheck.frage.correct.join(' ') === targets[0] && orderCheck.frage.finite === 'werde' &&
      orderCheck.frage.fields.rsk.join(' ') === 'erledigen.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Ich', 'die', 'Aufgabe', 'werde', 'morgen', 'erledigen.']).credit < 1 &&
      checks[3].frage.optionen.some(o => o.text.includes('In der Zukunft arbeiten wir anders')) &&
      checks[3].frage.optionen.some(o => o.text.includes('In die Zukunft arbeiten')) &&
      Object.values(checks[3].frage.misconceptionFamilies).join(' ') === 'kasus' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) &&
      checks[4].frage.optionen.some(o => o.text.includes('Nächstes Jahr wir werden')) &&
      Object.values(checks[4].frage.misconceptionFamilies).join(' ') === 'wortstellung');
}


{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['b1-u2-l2'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Früher lebte eine alte Frau in einem kleinen Dorf.',
    'Neben ihrem Haus gab es einen großen Garten.',
    'Jeden Morgen ging sie in den Garten.',
    'Eines Tages kam ein fremder Mann und bat um Brot.',
    'Am Ende blieb er den ganzen Winter im Dorf.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson b1-u2-l2 precisely scopes narrative Praeteritum with weak -te forms, strong vowel changes, es gab plus accusative and time-first inversion across five targets',
    lesson.title.de === 'Präteritum erzählen: schwache -te-Formen und starke Verben (ging, kam, blieb)' &&
      lesson.title.ar === 'سرد الماضي بـPräteritum: صيغة -te والأفعال القوية ging وkam وblieb' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'حكاية قصيرة في الماضي' &&
      row.grammar.item === 'schwach -te (lebte) · stark: ging/kam/sprach/bat/blieb · es gab + Akkusativ · Erzählkette und Inversion nach Zeitangabe · Modalverben konnte/musste/durfte ohne ge-' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende erzählst du eine kurze Geschichte in fünf Sätzen im Präteritum' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'gab', 'ging', 'kam', 'sah', 'nahm', 'sprach', 'fand', 'blieb', 'hieß', 'bat', 'rief', 'hielt',
    'lag', 'stand', 'trat', 'trug', 'wusste', 'konnte', 'musste', 'durfte', 'begann', 'endete',
    'dauerte', 'geschah', 'ereignete sich', 'der Anfang', 'das Ende', 'der Höhepunkt',
    'die Handlung', 'die Figur', 'der Held', 'die Erzählung', 'der Roman', 'der Autor',
    'die Szene', 'die Spannung', 'der Konflikt', 'die Moral', 'der Erzähler', 'das Kapitel'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u2-l2 reviews all 40 entries and three bounded mnemonics without rejecting grammatical Perfekt forms, keeping only genuine strong-form, auxiliary and agreement errors',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord.gab.err === 'Er gebte mir das Buch zurück.' &&
      byWord.sprach.err === 'Er sprechte leise mit dem Arzt.' &&
      byWord.bat.err === 'Er bittete mich um Hilfe.' &&
      byWord.ging.why.includes('ist gegangen') && byWord.kam.why.includes('ist gekommen') &&
      byWord.blieb.why.includes('ist geblieben') && byWord.geschah.why.includes('ist geschehen') &&
      byWord['der Held'].err.includes('von die Geschichte') &&
      !errors.some(e => e.endsWith(' es.')) && !errors.some(e => e.endsWith(' gemacht.')) &&
      !['Sie hat den Zug nach Berlin genommen.', 'Er hat leise mit dem Arzt gesprochen.',
        'Niemand hat die Antwort gewusst.', 'Der Held von der Geschichte ist ein Kind.',
        'Die Moral von der Geschichte ist klar.']
        .some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('Er kam an, sah sie und blieb stehen.') &&
      tricks[1].wie.includes('Er konnte nicht kommen.') && tricks[2].wie.includes('am Ende siegte die Vernunft'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u2-l2 aligns five strict learning clozes, sound inversion fields and a 43-word five-target production',
    wordCloze1.frage.zeigt === 'Er ____ leise mit dem Arzt.' && wordCloze1.frage.antworten.join(' ') === 'sprach' &&
      wordCloze1.frage.nearMiss.sprechte && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'sprechte').ok &&
      wordCloze2.frage.zeigt === 'Die Reise ____ in Sfax.' && wordCloze2.frage.antworten.join(' ') === 'endete' &&
      wordCloze2.frage.nearMiss.endet && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'endet').ok &&
      wordCloze3.frage.zeigt === 'Die ____ der Geschichte ist klar.' && wordCloze3.frage.antworten.join(' ') === 'Moral' &&
      wordCloze3.frage.nearMiss.Moralen && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'Moralen').ok &&
      imitate.zeigt.de === 'Früher ____ eine alte Frau in einem kleinen Dorf.' && imitate.frage.antworten.join(' ') === 'lebte' &&
      imitate.frage.nearMiss.lebt && !win.DW.renderers.judgeCloze(imitate.frage, 'lebt').ok &&
      drill.frage.zeigt === 'Sie ____ langsam nach Hause.' && drill.frage.antworten.join(' ') === 'ging' &&
      drill.frage.nearMiss.gehte && !win.DW.renderers.judgeCloze(drill.frage, 'gehte').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.frage === 'رتّب الجملة واضعًا Früher أولًا وlebte في الموضع الثاني.' &&
      order.frage.correct.join(' ') === 'Früher lebte sie in einem kleinen Dorf.' && order.frage.finite === 'lebte' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Früher' && order.frage.fields.lsk.join(' ') === 'lebte' &&
      order.frage.fields.mittelfeld.join(' ') === 'sie in einem kleinen Dorf.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Früher', 'sie', 'lebte', 'in', 'einem', 'kleinen', 'Dorf.']).credit < 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 43 &&
      targets.join(' ').split(/\s+/).length === 43 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u2-l2 makes 80 percent four of five, independently checking bat chain, ging cloze, inversion order, geschah auxiliary and closing inversion',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.b1-u2-l2\.s\d+$/.test(s.frage.prereq || '')) && checks.every(s => !s.hinweise) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u2-l2.s07 | cap.b1-u2-l2.s23 | cap.b1-u2-l2.s24 | cap.b1-u2-l2.s13 | cap.b1-u2-l2.s20' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text.includes('und bittete um Brot')) &&
      Object.values(checks[0].frage.misconceptionFamilies).join(' ') === 'konjugation' &&
      clozeCheck.frage.zeigt === 'Sie ____ langsam nach Hause.' &&
      clozeCheck.frage.antworten.join(' ') === 'ging' && clozeCheck.frage.nearMiss.gehte &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'gehte').ok &&
      orderCheck.frage.correct.join(' ') === 'Später arbeitete sie im Garten.' && orderCheck.frage.finite === 'arbeitete' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Später' && orderCheck.frage.fields.lsk.join(' ') === 'arbeitete' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Später', 'sie', 'arbeitete', 'im', 'Garten.']).credit < 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Was geschah danach?') &&
      checks[3].frage.optionen.some(o => o.text === 'Was hat danach geschehen?') &&
      Object.values(checks[3].frage.misconceptionFamilies).join(' ') === 'konjugation' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) &&
      checks[4].frage.optionen.some(o => o.text.includes('Am Ende er blieb')) &&
      Object.values(checks[4].frage.misconceptionFamilies).join(' ') === 'wortstellung');
}


{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['b1-u2-l3'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Das Auto des Mannes ist neu.',
    'Die Tasche der Frau ist schwer.',
    'Wegen des Wetters bleiben wir zu Hause.',
    'Trotz des Regens gehen wir spazieren.',
    'Die Hälfte der Arbeit ist schon fertig.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson b1-u2-l3 precisely scopes Genitiv with des plus noun ending for masculine and neuter, bare der for feminine and plural, wegen and trotz plus Genitiv and quantity nouns across five targets',
    lesson.title.de === 'Genitiv: des Mannes, der Frau – Zugehörigkeit mit wegen und trotz' &&
      lesson.title.ar === 'الإضافة (Genitiv): des Mannes وder Frau — والانتماء مع wegen وtrotz' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الملكية والانتماء والسبب' &&
      row.grammar.item === 'Maskulin/Neutrum: des + -(e)s (des Mannes, des Hauses) · Feminin/Plural: der ohne Endung (der Frau) · wegen/trotz + Genitiv · Mengenwörter (die Hälfte, ein Drittel) + Genitiv · in der Nähe des' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende bildest du Genitivformen: des Mannes, der Frau, wegen des Wetters und trotz des Regens' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'der Besitzer', 'der Eigentümer', 'die Bedeutung', 'der Wert', 'die Qualität', 'die Menge',
    'die Hälfte', 'das Drittel', 'der Teil', 'die Mehrheit', 'die Minderheit', 'der Rest',
    'die Summe', 'der Preis', 'die Kosten', 'der Gewinn', 'der Verlust', 'die Schulden',
    'das Eigentum', 'der Beginn', 'die Mitte', 'die Nähe', 'die Ferne', 'die Grenze',
    'der Rand', 'die Seite', 'die Richtung', 'der Zweck', 'die Ursache', 'die Folge',
    'die Absicht', 'der Grund', 'das Ziel', 'die Meinung', 'die Aufgabe', 'das Ergebnis',
    'die Entscheidung', 'die Entwicklung', 'die Verantwortung', 'der Vorteil'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u2-l3 reviews all 40 entries and three bounded mnemonics without rejecting grammatical von-dative paraphrases, keeping only missing genitive endings and wrong case after von as errors',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord['der Besitzer'].err === 'Der Besitzer des Haus wohnt in Berlin.' &&
      byWord['die Bedeutung'].err === 'Die Bedeutung des Wort ist wichtig.' &&
      byWord['der Preis'].err.includes('von das Auto') && byWord['der Preis'].why.includes('des Autos') &&
      byWord['das Ergebnis'].err.includes('der Prüfungs') &&
      byWord['die Hälfte'].err.includes('von die Arbeit') &&
      byWord['das Drittel'].why.includes('von den Schülern') &&
      !['Der Besitzer von dem Haus wohnt in Berlin.', 'Die Entwicklung von der Stadt ist schnell.',
        'Ein Drittel von den Schülern fehlt.', 'Der Preis von dem Auto ist gefallen.',
        'Die Hälfte von der Arbeit ist fertig.', 'Die Bedeutung von dem Wort ist wichtig.']
        .some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('Der Preis des Autos') &&
      tricks[1].warum.includes('der Fraus') && tricks[2].wie.includes('Ein Drittel der Schüler fehlt.'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u2-l3 aligns five strict genitive clozes, sound inversion fields and a 32-word five-target production',
    wordCloze1.frage.zeigt === 'Die Menge des ____ reicht nicht.' && wordCloze1.frage.antworten.join(' ') === 'Wassers' &&
      wordCloze1.frage.nearMiss.Wasser && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Wasser').ok &&
      wordCloze2.frage.zeigt === 'In der Nähe des ____ gibt es Cafés.' && wordCloze2.frage.antworten.join(' ') === 'Bahnhofs' &&
      wordCloze2.frage.nearMiss.Bahnhof && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Bahnhof').ok &&
      wordCloze3.frage.zeigt === 'Die Entwicklung der ____ ist schnell.' && wordCloze3.frage.antworten.join(' ') === 'Stadt' &&
      wordCloze3.frage.nearMiss.Stadts && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'Stadts').ok &&
      imitate.zeigt.de === 'Das Auto des ____ ist neu.' && imitate.frage.antworten.join(' ') === 'Mannes' &&
      imitate.frage.nearMiss.Mann && !win.DW.renderers.judgeCloze(imitate.frage, 'Mann').ok &&
      drill.frage.zeigt === 'Der Besitzer des ____ wohnt in Berlin.' && drill.frage.antworten.join(' ') === 'Hauses' &&
      drill.frage.nearMiss.Haus && !win.DW.renderers.judgeCloze(drill.frage, 'Haus').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.frage === 'رتّب الجملة واضعًا Wegen des Wetters أولًا وbleiben في الموضع الثاني.' &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'bleiben' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Wegen des Wetters' && order.frage.fields.lsk.join(' ') === 'bleiben' &&
      order.frage.fields.mittelfeld.join(' ') === 'wir zu Hause.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Wegen', 'des', 'Wetters', 'wir', 'bleiben', 'zu', 'Hause.']).credit < 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 32 &&
      targets.join(' ').split(/\s+/).length === 32 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u2-l3 makes 80 percent four of five, independently checking trotz ending, Hauses cloze, inversion order with right bracket, von case and quantity genitive',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.b1-u2-l3\.s\d+$/.test(s.frage.prereq || '')) && checks.every(s => !s.hinweise) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u2-l3.s07 | cap.b1-u2-l3.s23 | cap.b1-u2-l3.s24 | cap.b1-u2-l3.s11 | cap.b1-u2-l3.s20' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text.includes('Trotz des Regen gehen')) &&
      Object.values(checks[0].frage.misconceptionFamilies).join(' ') === 'kasus' &&
      clozeCheck.frage.zeigt === 'Der Besitzer des ____ wohnt in Berlin.' &&
      clozeCheck.frage.antworten.join(' ') === 'Hauses' && clozeCheck.frage.nearMiss.Haus &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Haus').ok &&
      orderCheck.frage.correct.join(' ') === targets[3] && orderCheck.frage.finite === 'gehen' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Trotz des Regens' && orderCheck.frage.fields.lsk.join(' ') === 'gehen' &&
      orderCheck.frage.fields.rsk.join(' ') === 'spazieren.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Trotz', 'des', 'Regens', 'wir', 'gehen', 'spazieren.']).credit < 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Der Preis des Autos ist gefallen.') &&
      checks[3].frage.optionen.some(o => o.text === 'Der Preis von das Auto ist gefallen.') &&
      Object.values(checks[3].frage.misconceptionFamilies).join(' ') === 'kasus' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) &&
      checks[4].frage.optionen.some(o => o.text.includes('Die Hälfte von die Arbeit')) &&
      Object.values(checks[4].frage.misconceptionFamilies).join(' ') === 'kasus');
}


{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['b1-u2-l4'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Der gute Plan überzeugt den Chef.',
    'Ein guter Plan fehlt uns noch.',
    'Er kauft den teuren Wagen morgen.',
    'Mit gutem Plan starten wir.',
    'Die neuen Studenten lernen sehr schnell.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson b1-u2-l4 precisely scopes adjective endings after der, ein and without article across weak, mixed and strong patterns in five targets',
    lesson.title.de === 'Adjektivdeklination: Endungen nach der, ein und ohne Artikel' &&
      lesson.title.ar === 'تصريف الصفة: النهايات بعد der وein وبلا أداة — gute وguter وgutem' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الوصف الدقيق' &&
      row.grammar.item === 'schwach nach der/die/das: -e (der gute) und -en (den teuren) · gemischt nach ein: guter/gutes · stark ohne Artikel: gutem im Dativ · Plural nach die immer -en' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende setzt du die Adjektivendung nach der, ein und ohne Artikel richtig' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'neu', 'alt', 'jung', 'groß', 'klein', 'gut', 'schlecht', 'teuer', 'billig', 'lang',
    'kurz', 'hoch', 'tief', 'breit', 'schmal', 'schön', 'hässlich', 'sauber', 'schmutzig',
    'ruhig', 'laut', 'freundlich', 'höflich', 'ehrlich', 'fleißig', 'faul', 'klug', 'dumm',
    'stark', 'schwach', 'reich', 'arm', 'gesund', 'krank', 'glücklich', 'traurig',
    'wichtig', 'sicher', 'gefährlich', 'bequem'
  ];
  t('Corpus lesson b1-u2-l4 reviews all 40 adjective entries and three bounded mnemonics, keeping the bare undeclined adjective as the genuine error form throughout',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      lesson.wortschatz.every(it => !it.ex.includes(' ' + it.de + ' ') || it.de === 'neu') &&
      byWord.neu.err === 'Ich kaufe den neu Wagen.' &&
      byWord.groß.ex === 'Er wohnt in einem großen Haus.' && byWord.groß.err === 'Er wohnt in einem groß Haus.' &&
      byWord.hoch.ex === 'Der hohe Turm ist alt.' && byWord.hoch.why.includes('hohe') &&
      byWord.schmutzig.why.includes('schmutzige') &&
      byWord.gesund.ex === 'Gesunde Ernährung ist wichtig.' &&
      byWord.schlecht.ex === 'Bei schlechtem Wetter bleiben wir hier.' &&
      tricks.length === 3 && tricks[0].trick.includes('der/die/das') && tricks[0].wie.includes('dem alten Mann') &&
      tricks[1].wie.includes('ein neues Auto') && tricks[2].wie.includes('Gesunde Ernährung ist wichtig.'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u2-l4 aligns five strict ending clozes, sound order fields and a 29-word five-target production',
    wordCloze1.frage.zeigt === 'Das ist ein ____ Zeichen.' && wordCloze1.frage.antworten.join(' ') === 'gutes' &&
      wordCloze1.frage.nearMiss.gute && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'gute').ok &&
      wordCloze2.frage.zeigt === 'Die ____ Bedienung gefällt mir.' && wordCloze2.frage.antworten.join(' ') === 'freundliche' &&
      wordCloze2.frage.nearMiss.freundlichen && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'freundlichen').ok &&
      wordCloze3.frage.zeigt === 'Ein ____ Weg ist besser.' && wordCloze3.frage.antworten.join(' ') === 'sicherer' &&
      wordCloze3.frage.nearMiss.sichere && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'sichere').ok &&
      imitate.zeigt.de === 'Der ____ Plan überzeugt den Chef.' && imitate.frage.antworten.join(' ') === 'gute' &&
      imitate.frage.nearMiss.guter && !win.DW.renderers.judgeCloze(imitate.frage, 'guter').ok &&
      drill.frage.zeigt === 'Bei ____ Wetter bleiben wir hier.' && drill.frage.antworten.join(' ') === 'schlechtem' &&
      drill.frage.nearMiss.schlechten && !win.DW.renderers.judgeCloze(drill.frage, 'schlechten').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.frage === 'رتّب الجملة واضعًا Mit gutem Plan أولًا وstarten في الموضع الثاني.' &&
      order.frage.correct.join(' ') === targets[3] && order.frage.finite === 'starten' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Mit gutem Plan' && order.frage.fields.lsk.join(' ') === 'starten' &&
      order.frage.fields.mittelfeld.join(' ') === 'wir.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Mit', 'gutem', 'Plan', 'wir.', 'starten']).credit < 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 29 &&
      targets.join(' ').split(/\s+/).length === 29 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u2-l4 makes 80 percent four of five, independently checking strong dative phrase, schlechtem cloze, inversion order, einem grossen case and plural weak ending',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.b1-u2-l4\.s\d+$/.test(s.frage.prereq || '')) && checks.every(s => !s.hinweise) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u2-l4.s07 | cap.b1-u2-l4.s23 | cap.b1-u2-l4.s24 | cap.b1-u2-l4.s08 | cap.b1-u2-l4.s20' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text.includes('Mit guten Plan starten')) &&
      Object.values(checks[0].frage.misconceptionFamilies).join(' ') === 'deklination' &&
      clozeCheck.frage.zeigt === 'Bei ____ Wetter bleiben wir hier.' &&
      clozeCheck.frage.antworten.join(' ') === 'schlechtem' && clozeCheck.frage.nearMiss.schlechten &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'schlechten').ok &&
      orderCheck.frage.correct.join(' ') === 'Morgen kaufen wir den teuren Wagen.' && orderCheck.frage.finite === 'kaufen' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Morgen' && orderCheck.frage.fields.lsk.join(' ') === 'kaufen' &&
      orderCheck.frage.fields.mittelfeld.join(' ') === 'wir den teuren Wagen.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Morgen', 'wir', 'kaufen', 'den', 'teuren', 'Wagen.']).credit < 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Er wohnt in einem großen Haus.') &&
      checks[3].frage.optionen.some(o => o.text === 'Er wohnt in einem groß Haus.') &&
      Object.values(checks[3].frage.misconceptionFamilies).join(' ') === 'deklination' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) &&
      checks[4].frage.optionen.some(o => o.text.includes('Die neue Studenten lernen')) &&
      Object.values(checks[4].frage.misconceptionFamilies).join(' ') === 'deklination');
}


{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['b1-u2-l5'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Als ich klein war, lebte ich in Tunis.',
    'Als sie gestern ankam, regnete es stark.',
    'Wenn ich Zeit habe, rufe ich dich an.',
    'Ich bleibe zu Hause, wenn ich krank bin.',
    'Ich weiß nicht, wann der Zug ankommt.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson b1-u2-l5 precisely scopes als for single past events, wenn for repetition and present, verb-final subordinate clauses and wann questions across five targets',
    lesson.title.de === 'Als oder wenn? Einmal damals oder jedes Mal' &&
      lesson.title.ar === 'als أم wenn؟ مرة في الماضي أو كل مرة' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'أحداث الماضي والعادات' &&
      row.grammar.item === 'als für einmal Vergangenes (Als ich klein war) · wenn wiederholt, Gegenwart und Zukunft · Verb am Ende im Nebensatz (ankam, bin) · Inversion nach vorangestelltem Nebensatz · wann als Fragewort' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende wählst du als für einmal Vergangenheit und wenn für Wiederholung, mit dem Verb am Satzende' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'als', 'wenn', 'wann', 'sobald', 'bevor', 'nachdem', 'während', 'seitdem', 'solange',
    'ehe', 'bis', 'falls', 'sofern', 'sowie', 'der Zeitraum', 'der Zeitpunkt', 'der Augenblick',
    'das Jahrzehnt', 'das Jahrhundert', 'die Dauer', 'die Gewohnheit', 'die Routine',
    'der Alltag', 'das Ereignis', 'der Vorfall', 'die Jugend', 'das Alter', 'der Werdegang',
    'vergehen', 'dauern', 'stattfinden', 'sich erinnern', 'sich gewöhnen', 'verpassen',
    'rechtzeitig', 'pünktlich', 'kürzlich', 'regelmäßig', 'allmählich', 'gelegentlich'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u2-l5 reviews all 40 entries and three bounded mnemonics without manufactured es or gemacht appendages and without rejecting the grammatical von-dative paraphrase',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord.als.err === 'Wenn ich klein war, wohnten wir in Nabeul.' &&
      byWord.bevor.err === 'Bevor ich gehe, ich räume auf.' &&
      byWord.nachdem.why.includes('Plusquamperfekt') &&
      byWord['die Dauer'].err === 'Die Dauer des Kurs beträgt sechs Monate.' &&
      byWord['der Vorfall'].err === 'Der Vorfall ereignet sich gestern.' &&
      !errors.some(e => e.endsWith(' es.')) && !errors.some(e => e.endsWith(' gemacht.')) &&
      !['Die Dauer von dem Kurs beträgt sechs Monate.', 'Der Vorfall hat sich nachts ereignet gehabt.']
        .some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('Als ich in Tunis war, regnete es täglich.') &&
      tricks[1].wie.includes('Als ich klein war, wohnten wir in Nabeul.') &&
      tricks[2].wie.includes('Nachdem ich gegessen hatte, ging ich los.'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u2-l5 aligns five strict learning clozes, sound fronted-clause order fields and a 38-word five-target production',
    wordCloze1.frage.zeigt === '____ ich gegessen hatte, ging ich los.' && wordCloze1.frage.antworten.join(' ') === 'Nachdem' &&
      wordCloze1.frage.nearMiss.Nach && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'Nach').ok &&
      wordCloze2.frage.zeigt === 'Die tägliche ____ hilft mir.' && wordCloze2.frage.antworten.join(' ') === 'Routine' &&
      wordCloze2.frage.nearMiss.Routinen && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Routinen').ok &&
      wordCloze3.frage.zeigt === 'Ich übe ____.' && wordCloze3.frage.antworten.join(' ') === 'regelmäßig' &&
      wordCloze3.frage.nearMiss['regelmäßigen'] && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'regelmäßigen').ok &&
      imitate.zeigt.de === '____ ich klein war, lebte ich in Tunis.' && imitate.frage.antworten.join(' ') === 'Als' &&
      imitate.frage.nearMiss.Wenn && !win.DW.renderers.judgeCloze(imitate.frage, 'Wenn').ok &&
      drill.frage.zeigt === '____ ich klein war, wohnten wir in Nabeul.' && drill.frage.antworten.join(' ') === 'Als' &&
      drill.frage.nearMiss.Wenn && !win.DW.renderers.judgeCloze(drill.frage, 'Wenn').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.frage === 'رتّب الجملة واضعًا جملة Als أولًا وlebten بعد الفاصلة مباشرة.' &&
      order.frage.correct.join(' ') === 'Als ich klein war, lebten wir in Tunis.' && order.frage.finite === 'lebten' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Als ich klein war,' && order.frage.fields.lsk.join(' ') === 'lebten' &&
      order.frage.fields.mittelfeld.join(' ') === 'wir in Tunis.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Als', 'ich', 'klein', 'war,', 'wir', 'lebten', 'in', 'Tunis.']).credit < 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 38 &&
      targets.join(' ').split(/\s+/).length === 38 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u2-l5 makes 80 percent four of five, independently checking verb-final wenn clause, Als cloze, fronted-clause order, bevor inversion and wann question word',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.b1-u2-l5\.s\d+$/.test(s.frage.prereq || '')) && checks.every(s => !s.hinweise) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u2-l5.s07 | cap.b1-u2-l5.s23 | cap.b1-u2-l5.s24 | cap.b1-u2-l5.s09 | cap.b1-u2-l5.s20' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text.includes('wenn ich bin krank')) &&
      Object.values(checks[0].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      clozeCheck.frage.zeigt === '____ ich klein war, wohnten wir in Nabeul.' &&
      clozeCheck.frage.antworten.join(' ') === 'Als' && clozeCheck.frage.nearMiss.Wenn &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'Wenn').ok &&
      orderCheck.frage.correct.join(' ') === targets[1] && orderCheck.frage.finite === 'regnete' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Als sie gestern ankam,' && orderCheck.frage.fields.lsk.join(' ') === 'regnete' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Als', 'sie', 'gestern', 'ankam,', 'es', 'regnete', 'stark.']).credit < 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Bevor ich gehe, räume ich auf.') &&
      checks[3].frage.optionen.some(o => o.text === 'Bevor ich gehe, ich räume auf.') &&
      Object.values(checks[3].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) &&
      checks[4].frage.optionen.some(o => o.text.includes('als der Zug ankommt')) &&
      Object.values(checks[4].frage.misconceptionFamilies).join(' ') === 'wortstellung');
}


{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['b1-u2-l6'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Ich weiß nicht, ob er heute kommt.',
    'Sie fragt, wann der Kurs beginnt.',
    'Kannst du mir sagen, wo der Bahnhof ist?',
    'Er will wissen, wie viel das Ticket kostet.',
    'Ich habe vergessen, wo ich geparkt habe.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson b1-u2-l6 precisely scopes indirect questions with ob for yes-no questions, retained W-words and verb-final order across five targets',
    lesson.title.de === 'Indirekte Fragen: ob und W-Wörter mit Verb am Ende' &&
      lesson.title.ar === 'السؤال غير المباشر: ob وأدوات السؤال مع فعل في النهاية' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'الاستفسار والنقل' &&
      row.grammar.item === 'Ja/Nein-Frage mit ob · W-Frage bleibt (wann, wo, wie viel) · Verb am Ende statt Verbzweit · Komma davor · höflich: Kannst du mir sagen, …?' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende verwandelst du Fragen in indirekte Fragen mit ob oder W-Wort und Verb am Ende' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'ob', 'wer', 'was', 'wann', 'wo', 'wie', 'warum', 'wieso', 'weshalb', 'welcher',
    'wie viel', 'wie lange', 'wie oft', 'wohin', 'woher', 'womit', 'woran', 'fragen',
    'sich erkundigen', 'nachfragen', 'anfragen', 'wissen wollen', 'ahnen', 'vermuten',
    'erklären', 'mitteilen', 'berichten', 'antworten', 'erwidern', 'bestätigen', 'verneinen',
    'klären', 'die Frage', 'das Rätsel', 'das Geheimnis', 'die Neugier', 'der Hinweis',
    'die Erklärung', 'die Umfrage', 'die Auskunft'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u2-l6 reviews all 40 entries and three bounded mnemonics without manufactured es or gemacht appendages, keeping verb-second order after ob and W-words as the genuine error',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord.ob.err === 'Ich weiß nicht, ob kommt er.' &&
      byWord.warum.err === 'Sie fragt, warum komme ich zu spät.' &&
      byWord.welcher.err === 'Ich weiß nicht, welcher Zug ist schneller.' &&
      byWord['wissen wollen'].err === 'Sie will wissen, ob kommen wir.' &&
      byWord.bestätigen.err === 'Er bestätigt, dass kommt er.' &&
      !['Sie will wissen, ob wir kommen es.', 'Er bestätigt, dass er kommt es.',
        'Der Lehrer erklärt, wie es funktioniert es.', 'Das Rätsel bleibt ungelöst gemacht.',
        'Die Auskunft erhalten Sie am Schalter es.']
        .some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('Ich weiß nicht, ob er kommt.') &&
      tricks[1].wie.includes('Ich weiß nicht, woran es liegt.') &&
      tricks[2].wie.includes('Können Sie mir sagen, wann der Kurs beginnt?'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u2-l6 aligns five strict learning clozes, sound fronted-question order fields and a 36-word five-target production',
    wordCloze1.frage.zeigt === 'Er erklärt, ____ die Maschine funktioniert.' && wordCloze1.frage.antworten.join(' ') === 'wie' &&
      wordCloze1.frage.nearMiss.was && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'was').ok &&
      wordCloze2.frage.zeigt === 'Sie will ____, ob wir kommen.' && wordCloze2.frage.antworten.join(' ') === 'wissen' &&
      wordCloze2.frage.nearMiss['weiß'] && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'weiß').ok &&
      wordCloze3.frage.zeigt === 'Seine ____ war verständlich.' && wordCloze3.frage.antworten.join(' ') === 'Erklärung' &&
      wordCloze3.frage.nearMiss['Erklärungen'] && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'Erklärungen').ok &&
      imitate.zeigt.de === 'Ich weiß nicht, ob er heute ____.' && imitate.frage.antworten.join(' ') === 'kommt' &&
      imitate.frage.nearMiss.kommen && !win.DW.renderers.judgeCloze(imitate.frage, 'kommen').ok &&
      drill.frage.zeigt === 'Können Sie mir sagen, ____ der Kurs beginnt?' && drill.frage.antworten.join(' ') === 'wann' &&
      drill.frage.nearMiss.wenn && !win.DW.renderers.judgeCloze(drill.frage, 'wenn').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.frage === 'رتّب الجملة واضعًا سؤال Wann أولًا وsagt بعد الفاصلة مباشرة.' &&
      order.frage.correct.join(' ') === 'Wann er gestern kam, sagt sie nicht.' && order.frage.finite === 'sagt' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Wann er gestern kam,' && order.frage.fields.lsk.join(' ') === 'sagt' &&
      order.frage.fields.mittelfeld.join(' ') === 'sie nicht.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Wann', 'er', 'gestern', 'kam,', 'sie', 'sagt', 'nicht.']).credit < 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 36 &&
      targets.join(' ').split(/\s+/).length === 36 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u2-l6 makes 80 percent four of five, independently checking wie viel order, wann cloze, fronted ob-clause order, warum order and Perfekt verb-final order',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.b1-u2-l6\.s\d+$/.test(s.frage.prereq || '')) && checks.every(s => !s.hinweise) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u2-l6.s07 | cap.b1-u2-l6.s23 | cap.b1-u2-l6.s24 | cap.b1-u2-l6.s09 | cap.b1-u2-l6.s20' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text.includes('wie viel kostet das Ticket')) &&
      Object.values(checks[0].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      clozeCheck.frage.zeigt === 'Können Sie mir sagen, ____ der Kurs beginnt?' &&
      clozeCheck.frage.antworten.join(' ') === 'wann' && clozeCheck.frage.nearMiss.wenn &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'wenn').ok &&
      orderCheck.frage.correct.join(' ') === 'Ob sie morgen bleibt, sagt er heute.' && orderCheck.frage.finite === 'sagt' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Ob sie morgen bleibt,' && orderCheck.frage.fields.lsk.join(' ') === 'sagt' &&
      orderCheck.frage.fields.mittelfeld.join(' ') === 'er heute.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Ob', 'sie', 'morgen', 'bleibt,', 'er', 'sagt', 'heute.']).credit < 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Sie fragt, warum ich zu spät komme.') &&
      checks[3].frage.optionen.some(o => o.text === 'Sie fragt, warum komme ich zu spät.') &&
      Object.values(checks[3].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) &&
      checks[4].frage.optionen.some(o => o.text.includes('wo habe ich geparkt')) &&
      Object.values(checks[4].frage.misconceptionFamilies).join(' ') === 'wortstellung');
}


{
  const { window: win } = boot();
  const lesson = win.DW_LESSONS['b1-u2-l7'];
  const row = win.DW_SYLLABUS.lessons.find(it => it.id === lesson.id);
  const byWord = Object.fromEntries(lesson.wortschatz.map(it => [it.de, it]));
  const tricks = lesson.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets = [
    'Er könnte noch unterwegs sein.',
    'Sie ist wohl schon zu Hause.',
    'Vielleicht kommt er morgen später.',
    'Wahrscheinlich regnet es morgen den ganzen Tag.',
    'Ich vermute, dass sie den Zug verpasst hat.'
  ];
  const norm = text => text.replace(/[,.!?·:]/g, '').toLocaleLowerCase('de');
  t('Corpus lesson b1-u2-l7 precisely scopes graded supposition with koennte plus infinitive, mid-field wohl, fronted adverbs with inversion and a dass clause across five targets',
    lesson.title.de === 'Vermutung: könnte, wohl, vielleicht — Sicherheit stufen' &&
      lesson.title.ar === 'الظن والاحتمال: könnte وwohl وvielleicht — درجات اليقين' &&
      row.title.de === lesson.title.de && row.title.ar === lesson.title.ar &&
      row.theme === 'درجات اليقين والتوقع' &&
      row.grammar.item === 'könnte + Infinitiv am Ende (Möglichkeit) · wohl im Mittelfeld nach dem Verb · Vielleicht/Wahrscheinlich vorangestellt mit Inversion · ich vermute, dass … mit Verbende' &&
      row.grammar.method === 'explicit' && lesson.schritte.length === 36 && lesson.wortschatz.length === 40 &&
      lesson.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targets[i]) &&
      lesson.schritte[0].zeigt.de === 'Am Ende drückst du eine Vermutung in Stufen aus: könnte, wohl, vielleicht und wahrscheinlich' &&
      lesson.schritte.find(s => s.id === 's20').zeigt.de === targets[4]);

  const expectedWords = [
    'vermuten', 'annehmen', 'schätzen', 'bezweifeln', 'befürchten', 'erwarten', 'vielleicht',
    'möglicherweise', 'vermutlich', 'wahrscheinlich', 'unwahrscheinlich', 'offenbar',
    'anscheinend', 'scheinbar', 'angeblich', 'tatsächlich', 'wirklich', 'kaum', 'sicherlich',
    'bestimmt', 'zweifellos', 'die Vermutung', 'die Annahme', 'der Verdacht', 'die Ahnung',
    'die Wahrscheinlichkeit', 'die Befürchtung', 'der Schein', 'die Sicherheit', 'die Gewissheit',
    'die Unsicherheit', 'der Zweifel', 'die Skepsis', 'das Vorurteil', 'die Tatsache',
    'der Irrtum', 'das Gerücht', 'die Quelle', 'der Beweis', 'die Schlussfolgerung'
  ];
  const errors = lesson.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u2-l7 reviews all 40 entries and three bounded mnemonics without manufactured appendages, keeping inversion and verb-final supposition frames as the genuine error axes',
    Object.keys(byWord).join(' | ') === expectedWords.join(' | ') &&
      lesson.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson.wortschatz.every(it => it.ex !== it.err) &&
      byWord.vermuten.err === 'Ich vermute, dass er ist zu Hause.' &&
      byWord.annehmen.err === 'Ich nehme an, dass kommt sie.' &&
      byWord.vielleicht.err === 'Vielleicht er kommt später.' &&
      byWord.vermutlich.err === 'Vermutlich er hat den Zug verpasst.' &&
      byWord['das Gerücht'].err === 'Das Gerücht verbreitet sich gestern schnell.' &&
      !['Ich schätze, wir sind zwanzig Leute es.', 'Das ist unwahrscheinlich gemacht.',
        'Meine Vermutung war richtig gemacht.', 'Das Gerücht hat sich schnell verbreitet gehabt.',
        'Die Quelle ist nicht bekannt gemacht.', 'Der Zweifel bleibt es.']
        .some(x => errors.includes(x)) &&
      tricks.length === 3 && tricks[0].wie.includes('Vermutlich kommt sie.') &&
      tricks[1].wie.includes('Ich nehme an, dass sie kommt.') &&
      tricks[2].wie.includes('Angeblich war er krank.'));

  const wordCloze1 = lesson.schritte.find(s => s.id === 's09');
  const wordCloze2 = lesson.schritte.find(s => s.id === 's13');
  const wordCloze3 = lesson.schritte.find(s => s.id === 's17');
  const imitate = lesson.schritte.find(s => s.id === 's19');
  const drill = lesson.schritte.find(s => s.id === 's23');
  const order = lesson.schritte.find(s => s.id === 's24');
  const writing = lesson.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking = lesson.schritte.find(s => s.phase === 'Produktion');
  const summary = lesson.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework = lesson.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u2-l7 aligns five strict learning clozes, sound inversion order fields and a 31-word five-target production',
    wordCloze1.frage.zeigt === 'Wir ____, dass die Preise steigen.' && wordCloze1.frage.antworten.join(' ') === 'erwarten' &&
      wordCloze1.frage.nearMiss.erwartet && !win.DW.renderers.judgeCloze(wordCloze1.frage, 'erwartet').ok &&
      wordCloze2.frage.zeigt === 'Meine ____ war richtig.' && wordCloze2.frage.antworten.join(' ') === 'Vermutung' &&
      wordCloze2.frage.nearMiss.Vermutungen && !win.DW.renderers.judgeCloze(wordCloze2.frage, 'Vermutungen').ok &&
      wordCloze3.frage.zeigt === 'Die ____ ist nicht bekannt.' && wordCloze3.frage.antworten.join(' ') === 'Quelle' &&
      wordCloze3.frage.nearMiss.Quellen && !win.DW.renderers.judgeCloze(wordCloze3.frage, 'Quellen').ok &&
      imitate.zeigt.de === 'Er ____ noch unterwegs sein.' && imitate.frage.antworten.join(' ') === 'könnte' &&
      imitate.frage.nearMiss['können'] && !win.DW.renderers.judgeCloze(imitate.frage, 'können').ok &&
      drill.frage.zeigt === 'Ich ____, dass er zu Hause ist.' && drill.frage.antworten.join(' ') === 'vermute' &&
      drill.frage.nearMiss.vermutet && !win.DW.renderers.judgeCloze(drill.frage, 'vermutet').ok &&
      lesson.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order.frage.frage === 'رتّب الجملة واضعًا Vielleicht أولًا وkommt في الموضع الثاني.' &&
      order.frage.correct.join(' ') === targets[2] && order.frage.finite === 'kommt' && order.frage.verbFirst === false &&
      order.frage.fields.vorfeld.join(' ') === 'Vielleicht' && order.frage.fields.lsk.join(' ') === 'kommt' &&
      order.frage.fields.mittelfeld.join(' ') === 'er morgen später.' &&
      win.DW.order.score(order.frage, order.frage.correct).credit === 1 &&
      win.DW.order.score(order.frage, ['Vielleicht', 'er', 'kommt', 'morgen', 'später.']).credit < 1 &&
      writing.frage.points.join(' | ') === targets.join(' | ') && writing.frage.minWords === 31 &&
      targets.join(' ').split(/\s+/).length === 31 &&
      targets.every(x => [writing.frage.promptDe, summary.zeigt.de, homework.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets.every(x => norm(speaking.erklaerung).includes(norm(x))));

  const checks = lesson.schritte.filter(s => s.phase === 'Check');
  const clozeCheck = checks.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck = checks.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u2-l7 makes 80 percent four of five, independently checking probable inversion, vermute cloze, fronted-adverb order, vermutlich inversion and dass verb-final order',
    checks.length === 5 && checks[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks.every(s => /^cap\.b1-u2-l7\.s\d+$/.test(s.frage.prereq || '')) && checks.every(s => !s.hinweise) &&
      checks.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u2-l7.s07 | cap.b1-u2-l7.s23 | cap.b1-u2-l7.s24 | cap.b1-u2-l7.s10 | cap.b1-u2-l7.s20' &&
      new Set(checks.map(s => s.frage.prereq)).size === 5 &&
      checks[0].frage.optionen.some(o => o.text === targets[3]) &&
      checks[0].frage.optionen.some(o => o.text.includes('Wahrscheinlich es regnet')) &&
      Object.values(checks[0].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      clozeCheck.frage.zeigt === 'Ich ____, dass er zu Hause ist.' &&
      clozeCheck.frage.antworten.join(' ') === 'vermute' && clozeCheck.frage.nearMiss.vermutet &&
      !win.DW.renderers.judgeCloze(clozeCheck.frage, 'vermutet').ok &&
      orderCheck.frage.correct.join(' ') === targets[3] && orderCheck.frage.finite === 'regnet' &&
      orderCheck.frage.fields.vorfeld.join(' ') === 'Wahrscheinlich' && orderCheck.frage.fields.lsk.join(' ') === 'regnet' &&
      orderCheck.frage.fields.mittelfeld.join(' ') === 'es morgen den ganzen Tag.' &&
      win.DW.order.score(orderCheck.frage, orderCheck.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck.frage, ['Wahrscheinlich', 'es', 'regnet', 'morgen', 'den', 'ganzen', 'Tag.']).credit < 1 &&
      checks[3].frage.optionen.some(o => o.text === 'Vermutlich hat er den Zug verpasst.') &&
      checks[3].frage.optionen.some(o => o.text === 'Vermutlich er hat den Zug verpasst.') &&
      Object.values(checks[3].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      checks[4].frage.optionen.some(o => o.text === targets[4]) &&
      checks[4].frage.optionen.some(o => o.text.includes('dass sie hat den Zug verpasst')) &&
      Object.values(checks[4].frage.misconceptionFamilies).join(' ') === 'wortstellung');

  const lesson8 = win.DW_LESSONS['b1-u2-l8'];
  const row8 = win.DW_SYLLABUS.lessons.find(it => it.id === lesson8.id);
  const byWord8 = Object.fromEntries(lesson8.wortschatz.map(it => [it.de, it]));
  const tricks8 = lesson8.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targets8 = [
    'Die Grafik zeigt die Zahl der Gäste pro Monat.',
    'Die Preise sind deutlich gestiegen.',
    'Im Vergleich zum Vorjahr ist die Zahl kleiner.',
    'Der Anteil der Frauen macht vierzig Prozent aus.',
    'Die Quelle nennt keine Ursache für den Rückgang.'
  ];
  t('Corpus lesson b1-u2-l8 precisely scopes chart description with genitive topic, sein-change verbs, comparison phrase, share with ausmachen and source discipline across five targets',
    lesson8.title.de === 'Statistik beschreiben: Zahl, Anstieg und Vergleich' &&
      lesson8.title.ar === 'وصف الإحصاء: الرقم والارتفاع والمقارنة' &&
      row8.title.de === lesson8.title.de && row8.title.ar === lesson8.title.ar &&
      row8.theme === 'الرسوم والأرقام' &&
      row8.grammar.item === 'Grafik nennen: die Zahl der Gäste (Genitiv) · gestiegen/gesunken mit sein · im Vergleich zum Vorjahr + Komparativ · Anteil macht … Prozent aus · keine Ursache ohne Quelle' &&
      row8.grammar.method === 'explicit' && lesson8.schritte.length === 36 && lesson8.wortschatz.length === 40 &&
      lesson8.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lesson8.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targets8[i]) &&
      lesson8.schritte[0].zeigt.de === 'Am Ende beschreibst du eine Statistik in fünf Sätzen, ohne eine Ursache zu erfinden' &&
      lesson8.schritte.find(s => s.id === 's20').zeigt.de === targets8[4]);

  const expectedWords8 = [
    'die Grafik', 'das Diagramm', 'die Tabelle', 'die Abbildung', 'die Achse', 'die Säule',
    'der Balken', 'die Kurve', 'der Prozentsatz', 'der Durchschnitt', 'das Verhältnis',
    'der Vergleich', 'die Erhebung', 'die Auswertung', 'die Quelle', 'die Steigerung',
    'der Zuwachs', 'die Abnahme', 'der Rückgang', 'das Maximum', 'das Minimum', 'der Anteil',
    'die Mehrheit', 'die Minderheit', 'steigen', 'sinken', 'zunehmen', 'abnehmen', 'betragen',
    'ausmachen', 'entsprechen', 'sich verdoppeln', 'sich halbieren', 'konstant', 'leicht',
    'deutlich', 'erheblich', 'im Vergleich zu', 'gegenüber', 'durchschnittlich'
  ];
  const errors8 = lesson8.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u2-l8 reviews all 40 entries and three bounded mnemonics without grammatical von-dative or manufactured appendages, keeping auxiliary choice and separable ausmachen as the genuine error axes',
    Object.keys(byWord8).join(' | ') === expectedWords8.join(' | ') &&
      lesson8.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lesson8.wortschatz.every(it => it.ex !== it.err) &&
      byWord8['die Grafik'].err === 'Die Grafik zeigt die Entwicklung von die Preise.' &&
      byWord8['der Anteil'].err === 'Der Anteil von die Frauen wächst.' &&
      byWord8.steigen.err === 'Die Preise haben stark gestiegen.' &&
      byWord8.sinken.err === 'Die Zahl hat leicht gesunken.' &&
      byWord8.ausmachen.err === 'Der Anteil macht zwanzig Prozent.' &&
      byWord8.durchschnittlich.err === 'Durchschnittlich es kommen täglich hundert Gäste.' &&
      !['Die Grafik zeigt die Entwicklung von den Preisen.', 'Der Anteil von den Frauen wächst.',
        'Der Prozentsatz ist gesunken gemacht.', 'Die Auswertung läuft noch es.',
        'Als Quelle nennt der Text das Statistikamt es.', 'Der Zuwachs ist deutlich gemacht.',
        'Die Mehrheit hat zugestimmt gehabt.', 'Eine Minderheit hat abgelehnt gehabt.',
        'Im Vergleich mit 2024 ist die Zahl kleiner.', 'Die Zahl bleibt konstant gemacht.',
        'Der Unterschied ist deutlich gemacht.', 'Durchschnittlich kommen hundert Gäste täglich es.']
        .some(x => errors8.includes(x)) &&
      tricks8.length === 3 && tricks8[0].wie.includes('Die Preise sind gestiegen.') &&
      tricks8[1].wie.includes('Gegenüber dem Vorjahr') &&
      tricks8[2].wie.includes('Die Summe beträgt tausend Euro.'));

  const wordClozeA8 = lesson8.schritte.find(s => s.id === 's09');
  const wordClozeB8 = lesson8.schritte.find(s => s.id === 's13');
  const wordClozeC8 = lesson8.schritte.find(s => s.id === 's17');
  const imitate8 = lesson8.schritte.find(s => s.id === 's19');
  const drill8 = lesson8.schritte.find(s => s.id === 's23');
  const order8 = lesson8.schritte.find(s => s.id === 's24');
  const writing8 = lesson8.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speaking8 = lesson8.schritte.find(s => s.phase === 'Produktion');
  const summary8 = lesson8.schritte.find(s => s.phase === 'Zusammenfassung');
  const homework8 = lesson8.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u2-l8 aligns five strict learning clozes, sound fronted-comparison order fields and a 38-word five-target production',
    wordClozeA8.frage.zeigt === 'Die blaue ____ zeigt 2025.' && wordClozeA8.frage.antworten.join(' ') === 'Säule' &&
      wordClozeA8.frage.nearMiss['Säulen'] && !win.DW.renderers.judgeCloze(wordClozeA8.frage, 'Säulen').ok &&
      wordClozeB8.frage.zeigt === 'Der ____ der Frauen wächst.' && wordClozeB8.frage.antworten.join(' ') === 'Anteil' &&
      wordClozeB8.frage.nearMiss.Anteile && !win.DW.renderers.judgeCloze(wordClozeB8.frage, 'Anteile').ok &&
      wordClozeC8.frage.zeigt === 'Im ____ zu 2024 ist die Zahl kleiner.' && wordClozeC8.frage.antworten.join(' ') === 'Vergleich' &&
      wordClozeC8.frage.nearMiss.Vergleiche && !win.DW.renderers.judgeCloze(wordClozeC8.frage, 'Vergleiche').ok &&
      imitate8.zeigt.de === 'Die Grafik ____ die Zahl der Gäste pro Monat.' && imitate8.frage.antworten.join(' ') === 'zeigt' &&
      imitate8.frage.nearMiss.zeigen && !win.DW.renderers.judgeCloze(imitate8.frage, 'zeigen').ok &&
      drill8.frage.zeigt === 'Die Preise sind stark ____.' && drill8.frage.antworten.join(' ') === 'gestiegen' &&
      drill8.frage.nearMiss.steigt && !win.DW.renderers.judgeCloze(drill8.frage, 'steigt').ok &&
      lesson8.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      order8.frage.frage === 'رتّب الجملة واضعًا Im Vergleich zum Vorjahr أولًا والفعل في الموضع الثاني قبل الفاعل.' &&
      order8.frage.correct.join(' ') === targets8[2] && order8.frage.finite === 'ist' && order8.frage.verbFirst === false &&
      order8.frage.fields.vorfeld.join(' ') === 'Im Vergleich zum Vorjahr' && order8.frage.fields.lsk.join(' ') === 'ist' &&
      order8.frage.fields.mittelfeld.join(' ') === 'die Zahl kleiner.' &&
      win.DW.order.score(order8.frage, order8.frage.correct).credit === 1 &&
      win.DW.order.score(order8.frage, ['Im', 'Vergleich', 'zum', 'Vorjahr', 'die', 'Zahl', 'ist', 'kleiner.']).credit < 1 &&
      writing8.frage.points.join(' | ') === targets8.join(' | ') && writing8.frage.minWords === 38 &&
      targets8.join(' ').split(/\s+/).length === 38 &&
      targets8.every(x => [writing8.frage.promptDe, summary8.zeigt.de, homework8.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targets8.every(x => norm(speaking8.erklaerung).includes(norm(x))));

  const checks8 = lesson8.schritte.filter(s => s.phase === 'Check');
  const clozeCheck8 = checks8.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheck8 = checks8.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u2-l8 makes 80 percent four of five, independently checking separable ausmachen, gestiegen cloze, comparison past order, gesunken auxiliary and source accusative',
    checks8.length === 5 && checks8[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checks8[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checks8.every(s => /^cap\.b1-u2-l8\.s\d+$/.test(s.frage.prereq || '')) && checks8.every(s => !s.hinweise) &&
      checks8.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u2-l8.s07 | cap.b1-u2-l8.s23 | cap.b1-u2-l8.s24 | cap.b1-u2-l8.s14 | cap.b1-u2-l8.s20' &&
      new Set(checks8.map(s => s.frage.prereq)).size === 5 &&
      checks8[0].frage.optionen.some(o => o.text === targets8[3]) &&
      checks8[0].frage.optionen.some(o => o.text === 'Der Anteil der Frauen macht vierzig Prozent.') &&
      Object.values(checks8[0].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      clozeCheck8.frage.zeigt === 'Die Preise sind stark ____.' &&
      clozeCheck8.frage.antworten.join(' ') === 'gestiegen' && clozeCheck8.frage.nearMiss.steigt &&
      !win.DW.renderers.judgeCloze(clozeCheck8.frage, 'steigt').ok &&
      orderCheck8.frage.correct.join(' ') === 'Im Vergleich zum Vorjahr stiegen die Preise leicht.' && orderCheck8.frage.finite === 'stiegen' &&
      orderCheck8.frage.fields.vorfeld.join(' ') === 'Im Vergleich zum Vorjahr' && orderCheck8.frage.fields.lsk.join(' ') === 'stiegen' &&
      orderCheck8.frage.fields.mittelfeld.join(' ') === 'die Preise leicht.' &&
      win.DW.order.score(orderCheck8.frage, orderCheck8.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheck8.frage, ['Im', 'Vergleich', 'zum', 'Vorjahr', 'die', 'Preise', 'stiegen', 'leicht.']).credit < 1 &&
      checks8[3].frage.optionen.some(o => o.text === 'Die Zahl ist leicht gesunken.') &&
      checks8[3].frage.optionen.some(o => o.text === 'Die Zahl hat leicht gesunken.') &&
      Object.values(checks8[3].frage.misconceptionFamilies).join(' ') === 'konjugation' &&
      checks8[4].frage.optionen.some(o => o.text === targets8[4]) &&
      checks8[4].frage.optionen.some(o => o.text === 'Die Quelle nennt keine Ursache für der Rückgang.') &&
      Object.values(checks8[4].frage.misconceptionFamilies).join(' ') === 'kasus');


  const lessonB1 = win.DW_LESSONS['b1-u3-l1'];
  const rowB1 = win.DW_SYLLABUS.lessons.find(it => it.id === lessonB1.id);
  const byWordB1 = Object.fromEntries(lessonB1.wortschatz.map(it => [it.de, it]));
  const tricksB1 = lessonB1.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targetsB1 = [
    'Sehr geehrte Damen und Herren, ich bewerbe mich um die Stelle.',
    'Anbei sende ich Ihnen meinen Lebenslauf.',
    'Ich bringe fünf Jahre Erfahrung mit.',
    'Gern stelle ich mich in einem Gespräch vor.',
    'Über eine Einladung zum Gespräch würde ich mich freuen.'
  ];
  t('Corpus lesson b1-u3-l1 precisely scopes the application template with formal greeting, um-frame, attachment inversion, separable experience verbs and polite closing across five targets',
    lessonB1.title.de === 'Bewerbung schreiben: Anrede, Anhang und Schlusssatz' &&
      lessonB1.title.ar === 'كتابة طلب العمل: التحية والمرفق وجملة الختام' &&
      rowB1.title.de === lessonB1.title.de && rowB1.title.ar === lessonB1.title.ar &&
      rowB1.theme === 'طلب التوظيف الرسمي' &&
      rowB1.grammar.item === 'Sehr geehrte + Komma + Kleinschreibung · sich bewerben um + Akkusativ · Anbei sende ich Ihnen … (Inversion) · mitbringen / sich vorstellen getrennt am Satzende · Über … würde ich mich freuen' &&
      rowB1.grammar.method === 'explicit' && lessonB1.schritte.length === 36 && lessonB1.wortschatz.length === 40 &&
      lessonB1.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lessonB1.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targetsB1[i]) &&
      lessonB1.schritte[0].zeigt.de === 'Am Ende schreibst du eine Bewerbung in fünf Sätzen: Anrede, Anlage, Erfahrung, Vorstellung und Schlusssatz' &&
      lessonB1.schritte.find(s => s.id === 's20').zeigt.de === targetsB1[4]);

  const expectedWordsB1 = [
    'sich bewerben', 'die Bewerbung', 'das Bewerbungsschreiben', 'der Lebenslauf',
    'das Anschreiben', 'das Zeugnis', 'die Stelle', 'der Arbeitsplatz', 'die Anzeige',
    'die Ausschreibung', 'die Voraussetzung', 'die Anforderung', 'die Erfahrung',
    'die Kenntnis', 'die Qualifikation', 'die Ausbildung', 'das Studium',
    'die Berufserfahrung', 'die Motivation', 'die Stärke', 'die Schwäche',
    'die Teamfähigkeit', 'die Zuverlässigkeit', 'die Flexibilität', 'der Arbeitgeber',
    'der Arbeitnehmer', 'der Chef', 'die Geschäftsleitung', 'die Abteilung',
    'das Vorstellungsgespräch', 'das Gehalt', 'der Lohn', 'die Kündigung', 'der Vertrag',
    'die Probezeit', 'sich vorstellen', 'einladen', 'absagen', 'zusagen', 'überzeugen'
  ];
  const errorsB1 = lessonB1.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u3-l1 reviews all 40 entries and three bounded mnemonics without twenty-two manufactured es or gemacht appendages, keeping agreement case and separable participles as the genuine error axes',
    Object.keys(byWordB1).join(' | ') === expectedWordsB1.join(' | ') &&
      lessonB1.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lessonB1.wortschatz.every(it => it.ex !== it.err) &&
      byWordB1['die Bewerbung'].err === 'Meine Bewerbung sind schon raus.' &&
      byWordB1['der Lebenslauf'].err === 'Der Lebenslauf musst lückenlos sein.' &&
      byWordB1['die Voraussetzung'].err === 'Die Voraussetzung ist ein Führerscheins.' &&
      byWordB1['der Arbeitgeber'].err === 'Der Arbeitgeber zahlen die Versicherung.' &&
      byWordB1.einladen.err === 'Die Firma hat mich zum Gespräch geladen ein.' &&
      byWordB1['sich vorstellen'].err === 'Im Gespräch stelle ich mich kurz.' &&
      byWordB1['sich bewerben'].err === 'Ich bewerbe mich für eine Stelle als Koch.' &&
      !['Meine Bewerbung ist schon raus es.', 'Das Bewerbungsschreiben ist zu lang gemacht.',
        'Der Lebenslauf muss lückenlos gemacht sein.', 'Die Zeugnisse liegen bei es.',
        'Der Arbeitsplatz ist gut erreichbar gemacht.', 'Die Voraussetzung ist ein Führerschein gemacht.',
        'Die Anforderungen sind hoch gemacht.', 'Seine Qualifikation passt genau es.',
        'Berufserfahrung ist mir wichtig gemacht.', 'Meine Motivation ist die Sprache gemacht.',
        'Meine Stärke ist die Geduld gemacht.', 'Über Schwächen spricht man ungern es.',
        'Teamfähigkeit wird vorausgesetzt gemacht.', 'Zuverlässigkeit ist hier Pflicht gemacht.',
        'Flexibilität wird erwartet gemacht.', 'Der Arbeitgeber zahlt für die Versicherung.',
        'Die Arbeitnehmer fordern mehr Lohn es.', 'Der Chef liest jede Bewerbung es.',
        'Die Geschäftsleitung entscheidet morgen es.', 'Das Vorstellungsgespräch war anstrengend gemacht.',
        'Das Gehalt ist verhandelbar gemacht.', 'Die Kündigung kam überraschend gemacht.',
        'Der Vertrag läuft unbefristet es.']
        .some(x => errorsB1.includes(x)) &&
      tricksB1.length === 3 && tricksB1[0].trick.includes('die Bewerbungsunterlagen gehören dazu') &&
      tricksB1[1].wie.includes('Sehr geehrte Frau Müller') &&
      tricksB1[2].wie.includes('Die Firma hat mich eingeladen.'));

  const wordClozeAB1 = lessonB1.schritte.find(s => s.id === 's09');
  const wordClozeBB1 = lessonB1.schritte.find(s => s.id === 's13');
  const wordClozeCB1 = lessonB1.schritte.find(s => s.id === 's17');
  const imitateB1 = lessonB1.schritte.find(s => s.id === 's19');
  const drillB1 = lessonB1.schritte.find(s => s.id === 's23');
  const orderB1 = lessonB1.schritte.find(s => s.id === 's24');
  const writingB1 = lessonB1.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speakingB1 = lessonB1.schritte.find(s => s.phase === 'Produktion');
  const summaryB1 = lessonB1.schritte.find(s => s.phase === 'Zusammenfassung');
  const homeworkB1 = lessonB1.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u3-l1 aligns five strict learning clozes, sound fronted-attachment order fields and a 40-word five-target production',
    wordClozeAB1.frage.zeigt === 'Die ____ liegen bei.' && wordClozeAB1.frage.antworten.join(' ') === 'Zeugnisse' &&
      wordClozeAB1.frage.nearMiss.Zeugnis && !win.DW.renderers.judgeCloze(wordClozeAB1.frage, 'Zeugnis').ok &&
      wordClozeBB1.frage.zeigt === '____ wird vorausgesetzt.' && wordClozeBB1.frage.antworten.join(' ') === 'Teamfähigkeit' &&
      wordClozeBB1.frage.nearMiss.Teamfähigkeiten && !win.DW.renderers.judgeCloze(wordClozeBB1.frage, 'Teamfähigkeiten').ok &&
      wordClozeCB1.frage.zeigt === 'Er hat den Termin ____.' && wordClozeCB1.frage.antworten.join(' ') === 'abgesagt' &&
      wordClozeCB1.frage.nearMiss.sagen && !win.DW.renderers.judgeCloze(wordClozeCB1.frage, 'sagen').ok &&
      imitateB1.zeigt.de === 'Sehr geehrte Damen und Herren, ich ____ mich um die Stelle.' && imitateB1.frage.antworten.join(' ') === 'bewerbe' &&
      imitateB1.frage.nearMiss.bewerben && !win.DW.renderers.judgeCloze(imitateB1.frage, 'bewerben').ok &&
      drillB1.frage.zeigt === 'Sie hat sofort ____.' && drillB1.frage.antworten.join(' ') === 'zugesagt' &&
      drillB1.frage.nearMiss.sagen && !win.DW.renderers.judgeCloze(drillB1.frage, 'sagen').ok &&
      lessonB1.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      orderB1.frage.frage === 'رتّب الجملة واضعًا الظرف أولًا والفعل في الموضع الثاني قبل الفاعل.' &&
      orderB1.frage.correct.join(' ') === targetsB1[1] && orderB1.frage.finite === 'sende' && orderB1.frage.verbFirst === false &&
      orderB1.frage.fields.vorfeld.join(' ') === 'Anbei' && orderB1.frage.fields.lsk.join(' ') === 'sende' &&
      orderB1.frage.fields.mittelfeld.join(' ') === 'ich Ihnen meinen Lebenslauf.' &&
      win.DW.order.score(orderB1.frage, orderB1.frage.correct).credit === 1 &&
      win.DW.order.score(orderB1.frage, ['Anbei', 'ich', 'sende', 'Ihnen', 'meinen', 'Lebenslauf.']).credit < 1 &&
      writingB1.frage.points.join(' | ') === targetsB1.join(' | ') && writingB1.frage.minWords === 40 &&
      targetsB1.join(' ').split(/\s+/).length === 40 &&
      targetsB1.every(x => [writingB1.frage.promptDe, summaryB1.zeigt.de, homeworkB1.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targetsB1.every(x => norm(speakingB1.erklaerung).includes(norm(x))));

  const checksB1 = lessonB1.schritte.filter(s => s.phase === 'Check');
  const clozeCheckB1 = checksB1.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheckB1 = checksB1.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u3-l1 makes 80 percent four of five, independently checking separable vorstellen, zugesagt cloze, fronted adverb order with vor bracket, perfect participle and closing verb-second',
    checksB1.length === 5 && checksB1[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checksB1[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checksB1.every(s => /^cap\.b1-u3-l1\.s\d+$/.test(s.frage.prereq || '')) && checksB1.every(s => !s.hinweise) &&
      checksB1.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u3-l1.s07 | cap.b1-u3-l1.s23 | cap.b1-u3-l1.s24 | cap.b1-u3-l1.s17 | cap.b1-u3-l1.s20' &&
      new Set(checksB1.map(s => s.frage.prereq)).size === 5 &&
      checksB1[0].frage.optionen.some(o => o.text === targetsB1[3]) &&
      checksB1[0].frage.optionen.some(o => o.text === 'Gern stelle ich mich in einem Gespräch.') &&
      Object.values(checksB1[0].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      clozeCheckB1.frage.zeigt === 'Sie hat sofort ____.' &&
      clozeCheckB1.frage.antworten.join(' ') === 'zugesagt' && clozeCheckB1.frage.nearMiss.sagen &&
      !win.DW.renderers.judgeCloze(clozeCheckB1.frage, 'sagen').ok &&
      orderCheckB1.frage.correct.join(' ') === targetsB1[3] && orderCheckB1.frage.finite === 'stelle' &&
      orderCheckB1.frage.fields.vorfeld.join(' ') === 'Gern' && orderCheckB1.frage.fields.lsk.join(' ') === 'stelle' &&
      orderCheckB1.frage.fields.mittelfeld.join(' ') === 'ich mich in einem Gespräch' &&
      orderCheckB1.frage.fields.rsk.join(' ') === 'vor.' &&
      win.DW.order.score(orderCheckB1.frage, orderCheckB1.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheckB1.frage, ['Gern', 'ich', 'stelle', 'mich', 'in', 'einem', 'Gespräch', 'vor.']).credit < 1 &&
      checksB1[3].frage.optionen.some(o => o.text === 'Seine Erfahrung hat uns überzeugt.') &&
      checksB1[3].frage.optionen.some(o => o.text === 'Seine Erfahrung hat uns überzeugen.') &&
      Object.values(checksB1[3].frage.misconceptionFamilies).join(' ') === 'konjugation' &&
      checksB1[4].frage.optionen.some(o => o.text === targetsB1[4]) &&
      checksB1[4].frage.optionen.some(o => o.text === 'Über eine Einladung zum Gespräch ich würde mich freuen.') &&
      Object.values(checksB1[4].frage.misconceptionFamilies).join(' ') === 'wortstellung');


  const lessonB2 = win.DW_LESSONS['b1-u3-l2'];
  const rowB2 = win.DW_SYLLABUS.lessons.find(it => it.id === lessonB2.id);
  const byWordB2 = Object.fromEntries(lessonB2.wortschatz.map(it => [it.de, it]));
  const tricksB2 = lessonB2.schritte.filter(s => s.merkhilfe).map(s => s.merkhilfe);
  const targetsB2 = [
    'Ich beschwere mich über die späte Lieferung.',
    'Die Ware kam zwei Wochen zu spät.',
    'Ich bitte Sie um eine Rückerstattung.',
    'Bitte prüfen Sie den Fall noch einmal.',
    'Ich setze Ihnen eine Frist von zwei Wochen.'
  ];
  t('Corpus lesson b1-u3-l2 precisely scopes the formal complaint with fixed prepositions, dated fact, polite request, formal imperative and deadline across five targets',
    lessonB2.title.de === 'Beschwerde: beschweren über, Tatsache und Bitte um' &&
      lessonB2.title.ar === 'الشكوى الرسمية: الشكوى بالحرف والواقعة والمطلب' &&
      rowB2.title.de === lessonB2.title.de && rowB2.title.ar === lessonB2.title.ar &&
      rowB2.theme === 'خدمة العملاء والشكوى' &&
      rowB2.grammar.item === 'sich beschweren über + Akkusativ · zwei Wochen zu spät (Maß) · bitten Sie um + Akkusativ · prüfen Sie (Höflichkeitsbefehl) · eine Frist von zwei Wochen setzen' &&
      rowB2.grammar.method === 'explicit' && lessonB2.schritte.length === 36 && lessonB2.wortschatz.length === 40 &&
      lessonB2.schritte.filter(s => s.phase === 'Übungen').length === 5 &&
      lessonB2.schritte.slice(3, 7).every((step, i) => step.zeigt.de === targetsB2[i]) &&
      lessonB2.schritte[0].zeigt.de === 'Am Ende schreibst du eine sachliche Beschwerde in fünf Sätzen: Grund, Tatsache, Bitte, Prüfung und Frist' &&
      lessonB2.schritte.find(s => s.id === 's20').zeigt.de === targetsB2[4]);

  const expectedWordsB2 = [
    'sich beschweren', 'die Beschwerde', 'die Reklamation', 'reklamieren', 'beanstanden',
    'sich ärgern', 'der Ärger', 'die Unzufriedenheit', 'die Enttäuschung',
    'das Missverständnis', 'der Mangel', 'der Fehler', 'der Schaden', 'die Lieferung',
    'die Frist', 'die Garantie', 'die Gewährleistung', 'der Umtausch', 'umtauschen',
    'zurückgeben', 'erstatten', 'die Rückerstattung', 'der Betrag', 'die Rechnung',
    'die Gutschrift', 'der Kunde', 'der Kundendienst', 'die Hotline', 'die Antwort',
    'die Entschuldigung', 'sich entschuldigen', 'die Ursache', 'beheben', 'lösen',
    'klären', 'prüfen', 'die Forderung', 'fordern', 'die Frist setzen', 'der Anwalt'
  ];
  const errorsB2 = lessonB2.wortschatz.map(it => it.err);
  t('Corpus lesson b1-u3-l2 reviews all 40 entries and three bounded mnemonics without manufactured appendages or grammatical von-dative and duration foils, keeping agreement and case as the genuine error axes',
    Object.keys(byWordB2).join(' | ') === expectedWordsB2.join(' | ') &&
      lessonB2.wortschatz.every(it => ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].every(k => it[k])) &&
      lessonB2.wortschatz.every(it => it.ex !== it.err) &&
      byWordB2['sich beschweren'].err === 'Ich beschwere mich für den Lärm.' &&
      byWordB2['die Unzufriedenheit'].err === 'Die Unzufriedenheit von die Kunden wächst.' &&
      byWordB2['die Garantie'].err === 'Die Garantie gelten zwei Jahre.' &&
      byWordB2['die Frist'].err === 'Die Frist ist ablaufen.' &&
      byWordB2['die Ursache'].err === 'Die Ursache war ein Computerfehlers.' &&
      byWordB2['der Anwalt'].err === 'Wenn nichts passiert, ich gehe zum Anwalt.' &&
      !['Die Reklamation ist berechtigt gemacht.', 'Der Ärger war schnell vorbei gemacht.',
        'Die Enttäuschung war groß gemacht.', 'Da liegt ein Missverständnis vor es.',
        'Die Lieferung kam zu spät es.', 'Der Umtausch ist kostenlos gemacht.',
        'Die Rechnung ist falsch gemacht.', 'Der Kunde hat immer recht es.',
        'Der Kundendienst ist schwer erreichbar gemacht.', 'Die Hotline ist rund um die Uhr offen es.',
        'Die Ursache war ein Computerfehler gemacht.', 'Wir beheben den Fehler sofort gemacht.',
        'Wir klären den Fall heute es.', 'Die Forderung ist berechtigt gemacht.',
        'Die Unzufriedenheit von den Kunden wächst.', 'Die Garantie gilt für zwei Jahre.']
        .some(x => errorsB2.includes(x)) &&
      tricksB2.length === 3 && tricksB2[0].wie.includes('Ich setze eine Frist von zwei Wochen.') &&
      tricksB2[1].wie.includes('Ich bitte um Entschuldigung.') &&
      tricksB2[2].wie.includes('Wir erstatten Ihnen den Betrag.'));

  const wordClozeAB2 = lessonB2.schritte.find(s => s.id === 's09');
  const wordClozeBB2 = lessonB2.schritte.find(s => s.id === 's13');
  const wordClozeCB2 = lessonB2.schritte.find(s => s.id === 's17');
  const imitateB2 = lessonB2.schritte.find(s => s.id === 's19');
  const drillB2 = lessonB2.schritte.find(s => s.id === 's23');
  const orderB2 = lessonB2.schritte.find(s => s.id === 's24');
  const writingB2 = lessonB2.schritte.find(s => s.frage && s.frage.art === 'schreiben');
  const speakingB2 = lessonB2.schritte.find(s => s.phase === 'Produktion');
  const summaryB2 = lessonB2.schritte.find(s => s.phase === 'Zusammenfassung');
  const homeworkB2 = lessonB2.schritte.find(s => s.phase === 'Hausaufgabe');
  t('Corpus lesson b1-u3-l2 aligns five strict learning clozes, sound formal-imperative order fields and a 35-word five-target production',
    wordClozeAB2.frage.zeigt === 'Ich ____ mich über den Fehler.' && wordClozeAB2.frage.antworten.join(' ') === 'ärgere' &&
      wordClozeAB2.frage.nearMiss['ärgert'] && !win.DW.renderers.judgeCloze(wordClozeAB2.frage, 'ärgert').ok &&
      wordClozeBB2.frage.zeigt === 'Die ____ dauert eine Woche.' && wordClozeBB2.frage.antworten.join(' ') === 'Rückerstattung' &&
      wordClozeBB2.frage.nearMiss.Rückerstattungen && !win.DW.renderers.judgeCloze(wordClozeBB2.frage, 'Rückerstattungen').ok &&
      wordClozeCB2.frage.zeigt === 'Wir ____ eine Rückerstattung.' && wordClozeCB2.frage.antworten.join(' ') === 'fordern' &&
      wordClozeCB2.frage.nearMiss.fordert && !win.DW.renderers.judgeCloze(wordClozeCB2.frage, 'fordert').ok &&
      imitateB2.zeigt.de === 'Ich ____ mich über die späte Lieferung.' && imitateB2.frage.antworten.join(' ') === 'beschwere' &&
      imitateB2.frage.nearMiss.beschwerst && !win.DW.renderers.judgeCloze(imitateB2.frage, 'beschwerst').ok &&
      drillB2.frage.zeigt === 'Die Firma ____ sich für den Fehler.' && drillB2.frage.antworten.join(' ') === 'entschuldigt' &&
      drillB2.frage.nearMiss.entschuldigen && !win.DW.renderers.judgeCloze(drillB2.frage, 'entschuldigen').ok &&
      lessonB2.schritte.filter(s => s.frage && s.frage.art === 'cloze').every(s =>
        s.frage.antworten.length === 1 && !s.frage.antworten.some(a => Object.keys(s.frage.nearMiss || {}).includes(a))) &&
      orderB2.frage.frage === 'رتّب الجملة واضعًا الظرف أولًا والفعل في الموضع الثاني قبل الفاعل.' &&
      orderB2.frage.correct.join(' ') === targetsB2[3] && orderB2.frage.finite === 'prüfen' && orderB2.frage.verbFirst === false &&
      orderB2.frage.fields.vorfeld.join(' ') === 'Bitte' && orderB2.frage.fields.lsk.join(' ') === 'prüfen' &&
      orderB2.frage.fields.mittelfeld.join(' ') === 'Sie den Fall noch einmal.' &&
      win.DW.order.score(orderB2.frage, orderB2.frage.correct).credit === 1 &&
      win.DW.order.score(orderB2.frage, ['Bitte', 'Sie', 'prüfen', 'den', 'Fall', 'noch', 'einmal.']).credit < 1 &&
      writingB2.frage.points.join(' | ') === targetsB2.join(' | ') && writingB2.frage.minWords === 35 &&
      targetsB2.join(' ').split(/\s+/).length === 35 &&
      targetsB2.every(x => [writingB2.frage.promptDe, summaryB2.zeigt.de, homeworkB2.zeigt.de].every(text => norm(text).includes(norm(x)))) &&
      targetsB2.every(x => norm(speakingB2.erklaerung).includes(norm(x))));

  const checksB2 = lessonB2.schritte.filter(s => s.phase === 'Check');
  const clozeCheckB2 = checksB2.find(s => s.frage && s.frage.art === 'cloze');
  const orderCheckB2 = checksB2.find(s => s.frage && s.frage.art === 'wortstellung');
  t('Corpus lesson b1-u3-l2 makes 80 percent four of five, independently checking formal imperative, entschuldigt cloze, reflexive complaint order, deadline item and own deadline preposition',
    checksB2.length === 5 && checksB2[0].erklaerung.includes('أربع إجابات صحيحة من خمس (80٪)') &&
      checksB2[4].erklaerung.includes('أربع إجابات صحيحة من خمس مساوية لـ80٪') &&
      checksB2.every(s => /^cap\.b1-u3-l2\.s\d+$/.test(s.frage.prereq || '')) && checksB2.every(s => !s.hinweise) &&
      checksB2.map(s => s.frage.prereq).join(' | ') ===
        'cap.b1-u3-l2.s07 | cap.b1-u3-l2.s23 | cap.b1-u3-l2.s24 | cap.b1-u3-l2.s17 | cap.b1-u3-l2.s20' &&
      new Set(checksB2.map(s => s.frage.prereq)).size === 5 &&
      checksB2[0].frage.optionen.some(o => o.text === targetsB2[3]) &&
      checksB2[0].frage.optionen.some(o => o.text === 'Bitte Sie prüfen den Fall noch einmal.') &&
      Object.values(checksB2[0].frage.misconceptionFamilies).join(' ') === 'wortstellung' &&
      clozeCheckB2.frage.zeigt === 'Die Firma ____ sich für den Fehler.' &&
      clozeCheckB2.frage.antworten.join(' ') === 'entschuldigt' && clozeCheckB2.frage.nearMiss.entschuldigen &&
      !win.DW.renderers.judgeCloze(clozeCheckB2.frage, 'entschuldigen').ok &&
      orderCheckB2.frage.correct.join(' ') === targetsB2[0] && orderCheckB2.frage.finite === 'beschwere' &&
      orderCheckB2.frage.fields.vorfeld.join(' ') === 'Ich' && orderCheckB2.frage.fields.lsk.join(' ') === 'beschwere' &&
      orderCheckB2.frage.fields.mittelfeld.join(' ') === 'mich über die späte Lieferung.' &&
      win.DW.order.score(orderCheckB2.frage, orderCheckB2.frage.correct).credit === 1 &&
      win.DW.order.score(orderCheckB2.frage, ['Ich', 'mich', 'beschwere', 'über', 'die', 'späte', 'Lieferung.']).credit < 1 &&
      checksB2[3].frage.optionen.some(o => o.text === 'Wir setzen Ihnen eine Frist von zwei Wochen.') &&
      checksB2[3].frage.optionen.some(o => o.text === 'Wir setzen Ihnen eine Frist für zwei Wochen.') &&
      Object.values(checksB2[3].frage.misconceptionFamilies).join(' ') === 'präposition' &&
      checksB2[4].frage.optionen.some(o => o.text === targetsB2[4]) &&
      checksB2[4].frage.optionen.some(o => o.text === 'Ich setze Ihnen eine Frist für zwei Wochen.') &&
      Object.values(checksB2[4].frage.misconceptionFamilies).join(' ') === 'präposition');

}

console.log('\n' + pass + ' passed, ' + fail + ' failed\n');
process.exit(fail ? 1 : 0);

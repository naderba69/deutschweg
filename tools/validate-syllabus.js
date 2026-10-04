#!/usr/bin/env node
/* Syllabus-map gate (PROMPT §13.9). No lesson may be authored before this passes. */
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const w = {};
['inventory.js', 'chunks.js', 'syllabus.js'].forEach(name => {
  new Function('window', fs.readFileSync(path.join(root, 'web/data', name), 'utf8'))(w);
});
const S = w.DW_SYLLABUS;
let hard = 0;
const ok = m => console.log('  ✓ ' + m);
const bad = m => { hard++; console.log('  ✗ ' + m); };

const lessons = S.lessons;
const ids = lessons.map(l => l.id);
ids.length === new Set(ids).size ? ok('lesson ids unique') : bad('duplicate lesson id');

const byLevel = {};
lessons.forEach(l => { byLevel[l.level] = (byLevel[l.level] || 0) + 1; });
/* Map size. Amendment A2-GOETHE (DECISIONS-PENDING.md item 22): A2 grows from
   30 to 36 lessons — one six-lesson unit whose words are the entries of the
   official Goethe A2 list the app lacked (tools/goethe-a2-gap.txt). The other
   levels are untouched, so this number is edited only by an explicit amendment. */
/* Amendment B1-L2 (DECISIONS-PENDING.md item 25): the B1 match put 219 entries in
   the promotion pool (met in material, named by no list) and a B1 lesson holds 40
   words, so B1 grows by one six-lesson unit: 40 -> 46 lessons.
   Amendment B1-L3 (item 27): the material step grew the pool to 371 and one unit
   holds 240 slots, so B1 grows by a second six-lesson unit: 46 -> 52 lessons. */
const expect = { A0: 6, A1: 30, A2: 36, B1: 71, B2: 20 };
Object.keys(expect).forEach(k => {
  byLevel[k] === expect[k] ? ok(k + ' count ' + expect[k]) : bad(k + ' count ' + byLevel[k] + ' expected ' + expect[k]);
});
(byLevel.A0 + byLevel.A1 === 36) ? ok('A0+A1 is 36 lessons') : bad('A0+A1 is 36 as declared');
lessons.filter(l => l.level === 'B2').every(l => l.kind === 'workshop')
  ? ok('B2 is workshops, not lessons')
  : bad('a B2 row is not a workshop');

const introduced = {};
lessons.forEach(l => (l.introduces || []).forEach(id => {
  if (introduced[id]) bad('capability id reused: ' + id);
  introduced[id] = l.id;
}));
ok('capability ids collected: ' + Object.keys(introduced).length);

let cycle = false;
const seen = new Set();
const stack = new Set();
function walk(id) {
  if (stack.has(id)) { cycle = true; return; }
  if (seen.has(id)) return;
  seen.add(id);
  stack.add(id);
  const lesson = lessons.find(l => l.id === id);
  (lesson.prereqs || []).forEach(pid => {
    if (!introduced[pid]) bad('missing prerequisite capability: ' + pid + ' required by ' + id);
    const owner = lessons.find(l => (l.introduces || []).includes(pid));
    if (owner) walk(owner.id);
  });
  stack.delete(id);
}
lessons.forEach(l => walk(l.id));
cycle ? bad('prerequisite cycle') : ok('prerequisite graph is acyclic');

function sum(level, field) {
  return lessons.filter(l => l.level === level).reduce((s, l) => s + (l.words[field] || 0), 0);
}
/* R6 bands, and the one amendment that moves them. Amendment A2-GOETHE: the
   six new A2 lessons name 6 × 35 = 210 words the official A2 list carries and
   the map did not, so the cumulative A2 ceiling moves 1600 → 1810 and every
   later ceiling moves with it, because the bands are cumulative. No floor moves
   down: 1200 / 2400 / 4000 are the numbers that were there before. */
const A2_GOETHE_SHIFT = 403;
/* The same amendment moves the productive ceiling: each new row declares 4
   productive words less than an old row, 6 × 13 = 78 in all. The six rows then
   grew from 35 to 40 words each (the compiler's ceiling, amendment A2-GOETHE-2),
   which is 30 more receptive in the same shift. */
const A2_GOETHE_SHIFT_PROD = 78;
/* Amendment B1-L2: six new B1 lessons, each declaring the same 40 receptive and
   17 productive words as every other B1 row, so the B1 ceiling moves by 6 x 40 =
   240 and the productive ceiling by 6 x 17 = 102. Every later ceiling moves with
   them, because the bands are cumulative. No floor moves down. */
const B1_GOETHE_SHIFT = 240;
const B1_GOETHE_SHIFT_PROD = 102;
/* Amendment B1-L3: six more B1 lessons, again 40 receptive and 17 productive each,
   so the cumulative B1 ceiling moves by another 240 / 102. No floor moves down. */
const B1_GOETHE_SHIFT_3 = 240;
const B1_GOETHE_SHIFT_PROD_3 = 102;
/* Amendment B1-L4: unit 8 carries the next 240 pool entries, again six lessons of
   40 receptive / 17 productive, so the cumulative B1 ceiling moves by 240 / 102 more. */
const B1_GOETHE_SHIFT_4 = 240;
const B1_GOETHE_SHIFT_PROD_4 = 102;
/* Amendment B1-L5: unit 9 carries 240 more pool entries, same shape (240 / 102). */
const B1_GOETHE_SHIFT_5 = 240;
const B1_GOETHE_SHIFT_PROD_5 = 102;
/* Amendment B1-L6: unit 10 names the last 253 entries of the Goethe B1 pool; its seven
   lessons declare their own counts (37 + 6 x 36 receptive, 15 productive each), so the
   cumulative B1 ceiling moves by exactly 253 / 105. */
const B1_GOETHE_SHIFT_6 = 253;
const B1_GOETHE_SHIFT_PROD_6 = 105;
/* Amendment A2-GOETHE-4: the DWDS-index harvest (letters A–N then O–Z) added 93 more
   items to the same ten lessons, and each row declares its own receptive count, so the
   shift that keeps the A2 ceiling honest grows by 115 (288 → 403, the 21 rows the r30 reading carries included). */
const a1Rec = sum('A0', 'receptive') + sum('A1', 'receptive');
const a1Prod = sum('A0', 'productive') + sum('A1', 'productive');
a1Rec <= 800 && a1Rec >= 600 ? ok('A1 receptive ' + a1Rec + ' inside the 800') : bad('A1 receptive ' + a1Rec);
a1Prod <= 300 && a1Prod >= 200 ? ok('A1 productive ' + a1Prod + ' inside the 300') : bad('A1 productive ' + a1Prod);
const a2Rec = a1Rec + sum('A2', 'receptive');
const a2Prod = a1Prod + sum('A2', 'productive');
a2Rec <= 1600 + A2_GOETHE_SHIFT && a2Rec >= 1200 ? ok('A2 receptive ' + a2Rec + ' inside ' + (1600 + A2_GOETHE_SHIFT)) : bad('A2 receptive ' + a2Rec);
a2Prod <= 700 + A2_GOETHE_SHIFT_PROD && a2Prod >= 500 ? ok('A2 productive ' + a2Prod) : bad('A2 productive ' + a2Prod);
const b1Rec = a2Rec + sum('B1', 'receptive');
const b1Prod = a2Prod + sum('B1', 'productive');
b1Rec <= 3200 + A2_GOETHE_SHIFT + B1_GOETHE_SHIFT + B1_GOETHE_SHIFT_3 + B1_GOETHE_SHIFT_4 + B1_GOETHE_SHIFT_5 + B1_GOETHE_SHIFT_6 && b1Rec >= 2400 ? ok('B1 receptive ' + b1Rec + ' inside ' + (3200 + A2_GOETHE_SHIFT + B1_GOETHE_SHIFT + B1_GOETHE_SHIFT_3 + B1_GOETHE_SHIFT_4 + B1_GOETHE_SHIFT_5 + B1_GOETHE_SHIFT_6)) : bad('B1 receptive ' + b1Rec);
b1Prod <= 1400 + A2_GOETHE_SHIFT_PROD + B1_GOETHE_SHIFT_PROD + B1_GOETHE_SHIFT_PROD_3 + B1_GOETHE_SHIFT_PROD_4 + B1_GOETHE_SHIFT_PROD_5 + B1_GOETHE_SHIFT_PROD_6 && b1Prod >= 1000 ? ok('B1 productive ' + b1Prod) : bad('B1 productive ' + b1Prod);
const b2Rec = b1Rec + sum('B2', 'receptive');
const b2Prod = b1Prod + sum('B2', 'productive');
b2Rec <= 5000 + A2_GOETHE_SHIFT + B1_GOETHE_SHIFT + B1_GOETHE_SHIFT_3 + B1_GOETHE_SHIFT_4 + B1_GOETHE_SHIFT_5 + B1_GOETHE_SHIFT_6 && b2Rec >= 4000 ? ok('B2 receptive ' + b2Rec + ' inside ' + (5000 + A2_GOETHE_SHIFT + B1_GOETHE_SHIFT + B1_GOETHE_SHIFT_3 + B1_GOETHE_SHIFT_4 + B1_GOETHE_SHIFT_5 + B1_GOETHE_SHIFT_6)) : bad('B2 receptive ' + b2Rec);
b2Prod <= 2600 + A2_GOETHE_SHIFT_PROD + B1_GOETHE_SHIFT_PROD + B1_GOETHE_SHIFT_PROD_3 + B1_GOETHE_SHIFT_PROD_4 + B1_GOETHE_SHIFT_PROD_5 + B1_GOETHE_SHIFT_PROD_6 && b2Prod >= 2000 ? ok('B2 productive ' + b2Prod) : bad('B2 productive ' + b2Prod);

lessons.every(l => l.theme && l.words && l.grammar && l.grammar.method && (l.grammar.method === 'inductive' || l.grammar.method === 'explicit'))
  ? ok('every row has one theme and a tagged grammar item')
  : bad('a row is missing theme or grammar method');

['A1', 'A2', 'B1', 'B2'].forEach(level => {
  const n = (S.chunks[level] || []).length;
  n === 100 ? ok(level + ' chunks 100') : bad(level + ' chunks ' + n);
  const ff = (S.falseFriends[level] || []).length;
  ff >= 20 && ff <= 30 ? ok(level + ' false friends ' + ff) : bad(level + ' false friends ' + ff);
});
const read = S.reading;
/* A1 grew from the map's ten short texts to twenty: the level the learner spends the most
   time at is the one that needs the most to read. The count is measured against the library,
   not asserted — a text that exists without a row here, or a row without a text, fails. */
read.A1.length === 20 ? ok('A1 reading 20') : bad('A1 reading ' + read.A1.length);
/* 20 long-standing A2 texts, the 9 the Goethe match added (a2-r21 … r29), and r30 which carries
   the words the harvest showed the material did not have yet. */
read.A2.length === 30 ? ok('A2 reading 30') : bad('A2 reading ' + read.A2.length);
/* Amendment B1-L2's material step: the B1 match recorded 950 entries the corpus did
   not carry, so 14 new B1 texts were written to carry them in context (b1-r11 … b1-r24).
   The count moves with the library, and the texts are counted, not asserted. */
read.B1.texts.length === 60 && read.B1.magazine ? ok('B1 reading 60 + magazine') : bad('B1 reading ' + read.B1.texts.length);
read.B2.novel && read.B2.articles.length === 20 ? ok('B2 novel slot + 20 articles') : bad('B2 reading');
['A1', 'A2', 'B1', 'B2'].forEach(level => {
  const item = S.listening[level];
  item && item.target ? ok(level + ' listening target ' + item.target) : bad(level + ' listening');
});
['A1', 'A2', 'B1', 'B2'].every(level => (S.pronunciation[level] || []).length >= 3)
  ? ok('pronunciation items on every level')
  : bad('pronunciation syllabus incomplete');

/* P3.2 coverage gate. The map row declares how many receptive items a level
   promises; the authored word lists are what exists. A level that has started
   the lexical layer must reach 80% of its own declaration. A level at 0% is
   either not started (printed) or a listed exception.

   B2 uses the two-measure design the owner chose (DECISIONS-PENDING item 20,
   route C): 40 words authored as full list items inside the 24-36 step band,
   plus the remainder declared as `material` words that the workshop's German
   text must contain. The gate for B2 therefore reads the material measure —
   but only material words the compiler verified against the lesson's own
   German strings count, and the authored column is printed beside it so the
   difference between the two cannot be hidden. Nothing here lowers a number:
   the material measure is checked at the same 80%. */
{
  const cat = {};
  new Function('window', fs.readFileSync(path.join(root, 'web/data/catalog.js'), 'utf8'))(cat);
  const floors = { A0: 12, A1: 14, A2: 16, B1: 20, B2: 24 };
  const have = {}, declaredN = {}, ported = {};
  Object.keys(cat.DW_LESSONS || {}).forEach(id => {
    const L = cat.DW_LESSONS[id];
    const wl = L.wortschatz || [];
    have[L.level] = (have[L.level] || 0) + wl.length;
    if (wl.length) ported[L.level] = (ported[L.level] || 0) + 1;
    if (wl.length && wl.length < (floors[L.level] || 12)) bad('word list below the floor in ' + id);
  });
  lessons.forEach(l => { declaredN[l.level] = (declaredN[l.level] || 0) + ((l.words && l.words.receptive) || 0); });
  /* the compiler publishes the verified material measure per level */
  const materialN = {};
  (cat.DW_COVERAGE || []).forEach(c => { materialN[c.level] = c.material || 0; });
  console.log('  — lexical coverage (authored items vs the map declaration) —');
  Object.keys(declaredN).forEach(level => {
    const h = have[level] || 0, d = declaredN[level] || 0;
    const met = materialN[level] || 0;
    const ratio = d ? h / d : 0;
    const mRatio = d ? met / d : 0;
    const two = level === 'B2';
    const gated = two ? mRatio : ratio;
    console.log('    ' + level + ': ' + h + '/' + d + ' (' + Math.round(ratio * 100) + '%)' +
      (two ? ' · material ' + met + '/' + d + ' (' + Math.round(mRatio * 100) + '%)' : '') +
      ' · ' + (ported[level] || 0) + ' lessons ported');
    if (gated > 0 && gated < 0.8) bad(level + ' lexical coverage ' + Math.round(gated * 100) + '% is below the 80% gate once started');
  });
  (have.A0 || 0) >= Math.round(0.8 * (declaredN.A0 || 0))
    ? ok('A0 lexical coverage meets the 80% gate')
    : bad('A0 lexical coverage below the gate');
}

['a0-u1-l1.js', 'catalog.js'].forEach(name => {
  new Function('window', fs.readFileSync(path.join(root, 'web/data', name), 'utf8'))(w);
});
const bodies = Object.keys(w.DW_LESSONS || {});
const authored = lessons.filter(l => l.status === 'authored').map(l => l.id);
authored.length === lessons.length
  ? ok('every map row has status authored')
  : bad('a row is still mapped');
authored.every(id => bodies.includes(id)) && bodies.every(id => authored.includes(id))
  ? ok('every authored row has a body, and every body has a row')
  : bad('lesson bodies and map rows diverged');

w.DW = w.DW || {};
['storage.js', 'ledger.js', 'exam.js', 'adaptive.js'].forEach(name => {
  new Function('window', fs.readFileSync(path.join(root, 'web/engine', name), 'utf8'))(w);
});
const A = w.DW.adaptive;
const today = '2026-10-02';
function empty() {
  const s = w.DW.storage.defaultState();
  s.learner.weeklyHours = 10;
  s.weekPlan = { decision: 'GO' };
  return s;
}
{
  const plan = A.compose(empty(), today, { minutes: 200 });
  const step = plan.blocks.find(b => b.type === 'lesson-step');
  step && step.lessonId === 'a0-u1-l1' && !plan.withheld
    ? ok('composer offers only the authored opening lesson')
    : bad('opening lesson was not offered');
}
{
  const S = empty();
  S.progress = [{ lessonId: 'a0-u1-l1', state: 'completed' }];
  const plan = A.compose(S, today);
  !plan.blocks.some(b => b.type === 'lesson-step') && plan.withheld && plan.withheld.lessonId === 'a0-u1-l2'
    ? ok('composer refuses the next row when its prerequisite is unmet')
    : bad('unmet prerequisite was not refused');
}
{
  const S = empty();
  S.progress = [{ lessonId: 'a0-u1-l1', state: 'completed' }];
  S.capabilities = [{ id: 'cap.a0.sprechen.greeting20', evidence: 'E1a', lastActive: today, history: [] }];
  const plan = A.compose(S, today);
  !plan.blocks.some(b => b.type === 'lesson-step')
    ? ok('E1a does not satisfy a lesson prerequisite')
    : bad('E1a opened a lesson');
}
{
  const S = empty();
  S.progress = [{ lessonId: 'a0-u1-l1', state: 'completed' }];
  S.capabilities = [{ id: 'cap.a0.sprechen.greeting20', evidence: 'E1', lastActive: today, history: [] }];
  const plan = A.compose(S, today, { minutes: 200 });
  const nxt = S && w.DW_SYLLABUS.next(S);
  const step = plan.blocks.find(b => b.type === 'lesson-step');
  nxt && nxt.id === 'a0-u1-l2' && nxt.status === 'authored' && step && step.lessonId === 'a0-u1-l2' && !plan.withheld
    ? ok('a met prerequisite opens the authored next lesson')
    : bad('the authored next lesson was not opened');
}
{
  const real = w.DW_SYLLABUS.next;
  w.DW_SYLLABUS.next = function () { return { id: 'fake-row', status: 'mapped', prereqs: [] }; };
  const plan = A.compose(empty(), today, { minutes: 200 });
  w.DW_SYLLABUS.next = real;
  !plan.blocks.some(b => b.type === 'lesson-step') && plan.withheld && /لم يُؤلَّف/.test(plan.withheld.reason)
    ? ok('a mapped row is still refused')
    : bad('a mapped row was opened');
}
{
  const S = empty();
  S.progress = [{ lessonId: 'a0-u1-l1', state: 'completed' }];
  S.capabilities = [{ id: 'cap.a0.sprechen.greeting20', evidence: 'E1', lastActive: today, history: [] }];
  S.settings.examDate = '2026-10-10';
  const plan = A.compose(S, today, { minutes: 200 });
  !plan.blocks.some(b => b.type === 'lesson-step') && plan.taper
    ? ok('taper withholds new grammar')
    : bad('taper still opened a lesson');
}

console.log(hard ? '\n' + hard + ' hard failure(s)\n' : '\nsyllabus map valid\n');
process.exit(hard ? 1 : 0);

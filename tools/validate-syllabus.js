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
const expect = { A0: 6, A1: 24, A2: 30, B1: 40, B2: 20 };
Object.keys(expect).forEach(k => {
  byLevel[k] === expect[k] ? ok(k + ' count ' + expect[k]) : bad(k + ' count ' + byLevel[k] + ' expected ' + expect[k]);
});
(byLevel.A0 + byLevel.A1 === 30) ? ok('A0+A1 is 30 lessons') : bad('A0+A1 is not 30');
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
const a1Rec = sum('A0', 'receptive') + sum('A1', 'receptive');
const a1Prod = sum('A0', 'productive') + sum('A1', 'productive');
a1Rec <= 800 && a1Rec >= 600 ? ok('A1 receptive ' + a1Rec + ' inside the 800') : bad('A1 receptive ' + a1Rec);
a1Prod <= 300 && a1Prod >= 200 ? ok('A1 productive ' + a1Prod + ' inside the 300') : bad('A1 productive ' + a1Prod);
const a2Rec = a1Rec + sum('A2', 'receptive');
const a2Prod = a1Prod + sum('A2', 'productive');
a2Rec <= 1600 && a2Rec >= 1200 ? ok('A2 receptive ' + a2Rec) : bad('A2 receptive ' + a2Rec);
a2Prod <= 700 && a2Prod >= 500 ? ok('A2 productive ' + a2Prod) : bad('A2 productive ' + a2Prod);
const b1Rec = a2Rec + sum('B1', 'receptive');
const b1Prod = a2Prod + sum('B1', 'productive');
b1Rec <= 3200 && b1Rec >= 2400 ? ok('B1 receptive ' + b1Rec) : bad('B1 receptive ' + b1Rec);
b1Prod <= 1400 && b1Prod >= 1000 ? ok('B1 productive ' + b1Prod) : bad('B1 productive ' + b1Prod);
const b2Rec = b1Rec + sum('B2', 'receptive');
const b2Prod = b1Prod + sum('B2', 'productive');
b2Rec <= 5000 && b2Rec >= 4000 ? ok('B2 receptive ' + b2Rec) : bad('B2 receptive ' + b2Rec);
b2Prod <= 2600 && b2Prod >= 2000 ? ok('B2 productive ' + b2Prod) : bad('B2 productive ' + b2Prod);

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
read.A1.length === 10 ? ok('A1 reading 10') : bad('A1 reading');
read.A2.length === 20 ? ok('A2 reading 20') : bad('A2 reading');
read.B1.texts.length === 10 && read.B1.magazine ? ok('B1 reading 10 + magazine') : bad('B1 reading');
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
   either not started (printed) or a listed exception. */
{
  const cat = {};
  new Function('window', fs.readFileSync(path.join(root, 'web/data/catalog.js'), 'utf8'))(cat);
  const floors = { A0: 12, A1: 14, A2: 16, B1: 20, B2: 20 };
  /* B2 rows are workshops (decision 18): the 90 receptive items a row declares are
     the workshop's text exposure, the authored list is a glossary of 20. The
     80% lexical gate is not applied to B2; it is printed and never delivered. */
  const WORKSHOP = new Set(['B2']);
  const have = {}, declaredN = {}, ported = {}, rowsN = {}, shippedDeclared = {};
  const portedIds = new Set();
  const seenWords = {};
  Object.keys(cat.DW_LESSONS || {}).forEach(id => {
    const L = cat.DW_LESSONS[id];
    const wl = L.wortschatz || [];
    have[L.level] = (have[L.level] || 0) + wl.length;
    if (wl.length) { ported[L.level] = (ported[L.level] || 0) + 1; portedIds.add(id); }
    if (wl.length && wl.length < (floors[L.level] || 12)) bad('word list below the floor in ' + id);
    /* a word counted twice inside one level is counted once here, and flagged */
    seenWords[L.level] = seenWords[L.level] || new Map();
    wl.forEach(it => {
      if (seenWords[L.level].has(it.de)) bad('headword counted twice in ' + L.level + ': ' + it.de + ' (' + seenWords[L.level].get(it.de) + ', ' + id + ')');
      else seenWords[L.level].set(it.de, id);
    });
  });
  lessons.forEach(l => {
    const rec = (l.words && l.words.receptive) || 0;
    declaredN[l.level] = (declaredN[l.level] || 0) + rec;
    rowsN[l.level] = (rowsN[l.level] || 0) + 1;
    if (portedIds.has(l.id)) {
      shippedDeclared[l.level] = (shippedDeclared[l.level] || 0) + rec;
      /* a ported row must carry at least 80% of its own declaration */
      const wl = (cat.DW_LESSONS[l.id].wortschatz || []).length;
      if (l.level !== 'B2' && rec && wl < Math.round(0.8 * rec)) bad(l.id + ' carries ' + wl + ' words against a row declaration of ' + rec);
    }
  });
  console.log('  — lexical coverage (authored items vs the map declaration) —');
  Object.keys(declaredN).forEach(level => {
    const h = have[level] || 0, d = declaredN[level] || 0, sd = shippedDeclared[level] || 0;
    const ratio = d ? h / d : 0;
    const shipped = sd ? h / sd : 0;
    const p = ported[level] || 0, r = rowsN[level] || 0;
    console.log('    ' + level + ': ' + h + '/' + d + ' (' + Math.round(ratio * 100) + '%) · ' + p + '/' + r + ' lessons ported' +
      (p ? ' · shipped rows ' + Math.round(shipped * 100) + '%' : '') + (ratio >= 0.8 ? ' · delivered' : ' · not delivered'));
    /* Unit-by-unit production: what is shipped must be honest to its rows at
       every push, and a level is only delivered when the whole of it reaches
       80%. A finished level below 80% fails. */
    if (WORKSHOP.has(level)) { if (p) console.log('    ' + level + ': workshop glossary — the lexical gate is not applied (decision 18); not delivered'); return; }
    if (p && shipped < 0.8) bad(level + ' shipped rows at ' + Math.round(shipped * 100) + '% are below the 80% gate');
    if (p && p === r && ratio < 0.8) bad(level + ' is fully ported but its coverage ' + Math.round(ratio * 100) + '% is below the 80% gate');
  });
  (have.A0 || 0) >= Math.round(0.8 * (declaredN.A0 || 0))
    ? ok('A0 lexical coverage meets the 80% gate')
    : bad('A0 lexical coverage below the gate');
}

/* Reading texts against the authored word lists (R4 readiness, PRODUCTION.md):
   a text is extensive reading only at ~98% known words. The known forms of a
   level are every surface form shown in the lessons up to that level —
   headwords, form columns and example sentences. Printed, not gated: the
   number is a measurement for the owner, not a claim. */
{
  const cat = {};
  new Function('window', fs.readFileSync(path.join(root, 'web/data/catalog.js'), 'utf8'))(cat);
  const order = ['A0', 'A1', 'A2', 'B1', 'B2'];
  const strip = t => String(t).toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
  const formsByLevel = {};
  /* the hand-written opening lesson has no word list; its German lines count as A0 forms */
  {
    const first = {};
    new Function('window', fs.readFileSync(path.join(root, 'web/data/a0-u1-l1.js'), 'utf8'))(first);
    const L1 = (first.DW_LESSONS || {})['a0-u1-l1'];
    const set = formsByLevel.A0 = new Set();
    const skip = new Set(['id', 'type', 'phase', 'art', 'ziel', 'prereq', 'familie', 'direction']);
    const walk = o => {
      if (!o) return;
      if (typeof o === 'string') { if (!/[\u0600-\u06FF]/.test(o)) o.split(/\s+/).map(strip).filter(Boolean).forEach(x => set.add(x)); return; }
      if (Array.isArray(o)) return o.forEach(walk);
      if (typeof o === 'object') Object.keys(o).forEach(k => { if (!skip.has(k)) walk(o[k]); });
    };
    if (L1) walk(L1.schritte);
  }
  Object.values(cat.DW_LESSONS || {}).forEach(L => {
    const set = formsByLevel[L.level] = formsByLevel[L.level] || new Set();
    (L.wortschatz || []).forEach(it => {
      [it.de, it.pl, it.ex].forEach(f => String(f || '').split(/\s+/).map(strip).filter(Boolean).forEach(w => set.add(w)));
    });
  });
  const known = level => {
    const out = new Set();
    order.slice(0, order.indexOf(level) + 1).forEach(l => (formsByLevel[l] || new Set()).forEach(w => out.add(w)));
    return out;
  };
  const lib = {};
  new Function('window', fs.readFileSync(path.join(root, 'web/data/library.js'), 'utf8'))(lib);
  const library = lib.DW_LIBRARY || {};
  /* dialogues: forms known up to the lesson they follow, in map order */
  {
    const dl = {};
    new Function('window', fs.readFileSync(path.join(root, 'web/data/dialogues.js'), 'utf8'))(dl);
    const dialogues = dl.DW_DIALOGUES || [];
    const mapOrder = lessons.map(l => l.id);
    const upTo = id => {
      const v = new Set(formsByLevel.A0 || []);
      mapOrder.slice(0, mapOrder.indexOf(id) + 1).forEach(lid => {
        const L = cat.DW_LESSONS[lid];
        ((L && L.wortschatz) || []).forEach(it => [it.de, it.pl, it.ex].forEach(f => String(f || '').split(/\s+/).map(strip).filter(Boolean).forEach(w => v.add(w))));
      });
      return v;
    };
    const low = []; let tok = 0, hit = 0;
    dialogues.forEach(d => {
      const v = upTo(d.after);
      const words = d.lines.map(l => l[1]).join(' ').split(/\s+/).map(strip).filter(x => x && !/^\d+$/.test(x));
      const h = words.filter(x => v.has(x)).length;
      tok += words.length; hit += h;
      if (words.length && h / words.length < 0.98) low.push(d.id + ' ' + Math.round(100 * h / words.length) + '%');
      if (!(d.questions && d.questions.length >= 2)) low.push(d.id + ' needs two questions');
    });
    if (dialogues.length) console.log('    dialogues: ' + dialogues.length + ' · known-form coverage up to their lesson ' + Math.round(100 * hit / tok) + '%' + (low.length ? ' · below 98%: ' + low.join(', ') : ' · all at or above 98%'));
  }
  ['A1', 'A2', 'B1'].forEach(level => {
    const texts = Array.isArray(library[level]) ? library[level] : ((library[level] && library[level].texts) || []);
    if (!texts.length) return;
    const vocab = known(level);
    if (!vocab.size) return;
    let tok = 0, hit = 0; const low = [];
    texts.forEach(t => {
      const words = String(t.body || '').split(/\s+/).map(strip).filter(x => x && !/^\d+$/.test(x));
      const h = words.filter(x => vocab.has(x)).length;
      tok += words.length; hit += h;
      if (words.length && h / words.length < 0.98) low.push(t.id + ' ' + Math.round(100 * h / words.length) + '%');
    });
    console.log('    reading ' + level + ': ' + texts.length + ' texts · known-form coverage ' + (tok ? Math.round(100 * hit / tok) : 0) + '%' +
      (low.length ? ' · below 98%: ' + low.join(', ') : ' · all texts at or above 98%'));
  });
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

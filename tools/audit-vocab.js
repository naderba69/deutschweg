/* Deutschweg — audit a lexical-layer module before the compiler sees it.
 *
 *   node tools/audit-vocab.js tools/vocab-b1-u1a.js tools/vocab-b1-u1b.js
 *
 * The same rules the compiler enforces, plus the ones only a human would
 * otherwise eyeball: Arabic leaking into German fields, duplicate headwords,
 * blank cores that do not occur, tricks repeated against any older level.
 * Exits non-zero on the first problem group so it can run in CI.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const { fold, hasWord, collectGerman } = require('./material');

/* The specs, so an unwired workshop's material words can be checked against
   the German it will actually show — the compiler's own rule, applied early. */
const SPECS = (() => {
  const all = [];
  for (const f of ['specs-a0a1.js', 'specs-a2.js', 'specs-b1.js', 'specs-b2.js']) {
    const p = path.join(__dirname, f);
    if (fs.existsSync(p)) all.push(...require(p));
  }
  const byId = {};
  all.forEach(s => { byId[s.id] = s; });
  return byId;
})();

const FAM = new Set(['konjugation', 'wortstellung', 'kasus', 'genus', 'plural',
  'präposition', 'deklination', 'lexik-kollokation', 'falser-freund', 'register',
  'orthographie']);
const AR = /[\u0600-\u06FF]/;
const VOCAB_FLOOR = { A0: 12, A1: 14, A2: 16, B1: 20, B2: 24 };
const VOCAB_CEIL = 40;

/* blankOut, byte for byte as the compiler does it (Unicode-aware boundaries). */
function blankOut(sentence, core) {
  const esc = core.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp('(^|[^\\p{L}])(' + esc + ')(?=[^\\p{L}]|$)', 'iu');
  const m = sentence.match(re);
  return m ? true : false;
}
const CORE = w => String(w).replace(/^(der|die|das)\s+/i, '').split(/\s+/).pop();

const argv = process.argv.slice(2);
const itemsIdx = argv.indexOf('--expect-items');
const EXPECT_ITEMS = itemsIdx >= 0 ? Number(argv[itemsIdx + 1]) : 0;
const matIdx = argv.indexOf('--expect-material');
const EXPECT_MATERIAL = matIdx >= 0 ? Number(argv[matIdx + 1]) : 0;
const expectIdx = argv.indexOf('--expect');
const EXPECT = expectIdx >= 0 ? Number(argv[expectIdx + 1]) : 0;
const skip = new Set([expectIdx, expectIdx + 1, itemsIdx, itemsIdx + 1, matIdx, matIdx + 1].filter(i => i >= 0));
const files = argv.filter((a, i) => !skip.has(i));
if (!files.length) { console.log('usage: node tools/audit-vocab.js [--expect N] <module.js> …'); process.exit(2); }

/* Load what is being audited first, so a module that a level already aggregates
   is not compared against itself. */
const audited = files.map(f => [f, require(path.resolve(f))]);
const auditedIds = new Set();
audited.forEach(([, mod]) => Object.keys(mod).forEach(id => auditedIds.add(id)));

const older = [];
for (const f of ['vocab-a0a1.js', 'vocab-a1.js', 'vocab-a2.js']) {
  const p = path.join(__dirname, f);
  if (!fs.existsSync(p)) continue;
  const mod = require(p);
  Object.entries(mod).forEach(([id, row]) => {
    if (!auditedIds.has(id)) (row.tricks || []).forEach(t => older.push(t.trick));
  });
}

let problems = 0;
const bad = m => { problems += 1; console.log('  ✗ ' + m); };

const seenWords = new Map();
const seenTricks = new Set(older);
let totalRows = 0, totalLessons = 0;

for (const [file, mod] of audited) {
  const ids = Object.keys(mod);
  console.log('\n' + file + ' — ' + ids.length + ' lesson(s)');
  for (const id of ids) {
    totalLessons += 1;
    const row = mod[id];
    const level = (id.match(/^(a0|a1|a2|b1|b2)/i) || [, 'a1'])[1].toUpperCase();
    const floor = VOCAB_FLOOR[level] || 12;

    if (!row || !Array.isArray(row.items)) { bad(id + ': no items array'); continue; }
    if (row.items.length < floor) bad(id + ': ' + row.items.length + ' items below the ' + level + ' floor ' + floor);
    if (row.items.length > VOCAB_CEIL) bad(id + ': ' + row.items.length + ' items above the ceiling ' + VOCAB_CEIL);
    if (EXPECT && row.items.length !== EXPECT) bad(id + ': ' + row.items.length + ' items, expected exactly ' + EXPECT);
    if (!row.tricks || row.tricks.length !== 3) bad(id + ': needs exactly 3 tricks, has ' + ((row.tricks || []).length));

    (row.tricks || []).forEach((t, i) => {
      if (!t.trick || !t.wie || !t.warum || !t.anchor) bad(id + ' trick ' + (i + 1) + ': incomplete');
      else {
        if (AR.test(t.anchor)) bad(id + ' trick ' + (i + 1) + ': Arabic anchor');
        if (seenTricks.has(t.trick)) bad(id + ' trick ' + (i + 1) + ': trick repeats an older level — ' + t.trick.slice(0, 40));
        seenTricks.add(t.trick);
      }
    });

    if (Array.isArray(row.material) && row.material.length) {
      const cores = new Set(row.items.map(it => fold(String(it[0]).replace(/^(der|die|das)\s+/i, '').split(/\s+/).pop()).replace(/\s+/g, ' ')));
      row.material.forEach(w => {
        const core = String(w).replace(/^(der|die|das)\s+/i, '').split(/\s+/).pop();
        if (cores.has(fold(core).replace(/\s+/g, ' '))) bad(id + ': material word duplicates an authored headword — ' + w);
      });
    }
    if (EXPECT_ITEMS && row.items.length !== EXPECT_ITEMS) bad(id + ': ' + row.items.length + ' items, expected exactly ' + EXPECT_ITEMS);
    if (EXPECT_MATERIAL && (!Array.isArray(row.material) || row.material.length !== EXPECT_MATERIAL)) {
      bad(id + ': ' + ((row.material || []).length) + ' material words, expected exactly ' + EXPECT_MATERIAL);
    }
    if (Array.isArray(row.material) && row.material.length) {
      const spec = SPECS[id];
      if (!spec) bad(id + ': has material words but no spec to check them against');
      else {
        const german = collectGerman([spec.model, spec.say, spec.hwDe, spec.de,
          (spec.lex || []).map(l => [l[0], l[2], l[3]])]);
        row.items.forEach(it => german.push(it[3], it[4]));
        const folded = german.map(fold);
        row.material.forEach(w => {
          const core = String(w).replace(/^(der|die|das)\s+/i, '').split(/\s+/).pop();
          if (!hasWord(core, folded)) bad(id + ': material word not carried by the text — ' + w);
        });
      }
    }

    row.items.forEach((r, i) => {
      totalRows += 1;
      const where = id + ' #' + (i + 1) + ' (' + (r[0] || '?') + ')';
      if (r.length < 7) { bad(where + ': fewer than 7 fields'); return; }
      const [de, pl, ar, ex, err, why, fam, blank] = r;
      ['de', 'pl', 'ar', 'ex', 'err', 'why', 'fam'].forEach((k, j) => { if (!r[j]) bad(where + ': empty ' + k); });
      if (AR.test(de) || AR.test(ex) || AR.test(err)) bad(where + ': Arabic inside a German field');
      if (!FAM.has(fam)) bad(where + ': unknown family ' + fam);
      if (AR.test(de) === false) {
        const key = String(de).toLowerCase();
        if (seenWords.has(key) && seenWords.get(key) !== id) console.log('  · ' + where + ': headword also in ' + seenWords.get(key));
        if (!seenWords.has(key)) seenWords.set(key, id);
      }
      const core = blank || CORE(de);
      if (!blankOut(ex, core)) bad(where + ': blank "' + core + '" not found in: ' + ex);
      /* The audit cannot judge German, but it can catch the one shape of that
         failure that is mechanical: the field that must hold the correct
         sentence holding exactly the wrong variant instead. */
      if (String(ex).trim() === String(err).trim()) {
        bad(where + ': the example and its wrong variant are identical — ' + ex);
      }
    });
  }
}

console.log('\n' + totalRows + ' rows · ' + totalLessons + ' lessons · ' + problems + ' problem(s)');
process.exit(problems ? 1 : 0);

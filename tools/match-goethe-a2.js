#!/usr/bin/env node
/* Deutschweg — Goethe A2 word-list matcher (PRODUCTION: after B2, before the A2 claim).
 *
 * What it answers: how much of the official Goethe-Zertifikat A2 Wortliste does
 * the app's A2 band actually carry, and which entries does it miss?
 *
 * Exactly the A1 matcher's design (tools/match-goethe-a1.js), one level up, so
 * the two reports can be read side by side.
 *
 * The official list is a copyrighted Goethe-Institut publication and is NOT
 * committed to this repository (decision: DECISIONS-PENDING.md). This tool reads
 * a plain one-headword-per-line transcription from outside the repo:
 *
 *     GOETHE_A2_LIST=/path/to/a2_headwords.txt \
 *     GOETHE_A2_GROUPS=/path/to/a2_groups.txt \
 *     node tools/match-goethe-a2.js [--write-gap]
 *
 * Defaults point at ../goethe/ next to the repository. The transcription is
 * typed from the official PDF (Goethe-Zertifikat A2 Wortliste, © 2016
 * Goethe-Institut), which the PDF's own text layer renders as a two-column
 * table; headwords merged into one line there are split again by hand, and the
 * caveat that this is a re-typed transcription (not the PDF itself) is printed
 * with every report.
 *
 * Two measures, both printed so neither can hide the other:
 *   headword — the entry is one of the authored words of the A2 lexical layer
 *   material — the entry appears anywhere in A2 lessons or A2 reading texts
 */
const fs = require('fs');
const path = require('path');
const { FOLD, STRIP, stem, loadCorpus, entryPhrases, buildBands, makeClassify } = require('./goethe-match');

const root = path.resolve(__dirname, '..');
const LIST = process.env.GOETHE_A2_LIST || path.resolve(root, '..', 'goethe', 'a2_headwords.txt');
const GROUPS = process.env.GOETHE_A2_GROUPS || path.resolve(root, '..', 'goethe', 'a2_groups.txt');
const WRITE_GAP = process.argv.includes('--write-gap');

/* Floors are the measured values of the last accepted run. They may only rise. */
/* Two numbers, two jobs:  (four measures: alphabetical headword, alphabetical +
   groups headword, alphabetical + groups met in material, groups met)
   FLOOR — the measured values of the last accepted run; a run that falls under
           one of them is a regression and fails.
   GOAL  — the production target, printed next to it. It does not fail the run;
           the gap is produced away workshop by workshop, like A1's was, and the
           floor rises with it.
   First measured run, 2026-10-03 (cumulative A0+A1+A2 band): headword 61%,
   material 75%, groups 65% — against the re-typed transcription.
   Run 3 (2026-10-04) is derived rather than read from the PDF: see the block
   before the gap path for why, and what it can and cannot claim. */
const FLOOR = { headword: 0.805, allHeadword: 0.767, material: 1.0, groups: 1.0 };
/* Rounded down from the measured values of the last accepted run:
   run 1, 2026-10-03: 0.6105 / 0.5857 / 0.7262 / 0.6460
   run 2, 2026-10-03: 0.7960 / 0.7993 after the four new A2 reading texts
   run 3, 2026-10-04 (derived — no transcription in this sandbox, so the totals
   come from the committed gap file plus run 2's recorded baseline):
     0.7772 / 0.7453 / 1.0000 / 1.0000
   run 4, 2026-10-04 (derived, plus 31 verified promotions): 0.8053 / 0.7678 /
     1.0000 / 1.0000
   The two material measures are at their ceiling: every entry of the
   transcription is now met somewhere in A2 material. Floors may only rise. */
const GOAL = { headword: 0.80, material: 1.0, groups: 1.0 };

const win = loadCorpus(root);

const lessons = Object.values(win.DW_LESSONS || {});
const a2Band = lessons.filter(l => l.level === 'A2');
/* The official A2 Wortliste carries the A1 vocabulary inside it ("ab, aber,
   als, auch"), so a learner who has finished A1 has already met part of it.
   Two cumulative measures are therefore printed: what the A2 band alone
   carries, and what A0+A1+A2 carry together. The gate reads the cumulative
   one — that is the learner's real position at the end of A2. */
const LEVELS = { a2: ['A2'], cumulative: ['A0', 'A1', 'A2'] };
if (!a2Band.length) { console.error('no A2 lessons found — did the catalog load?'); process.exit(1); }

const { bands, materialText } = buildBands(win, LEVELS);
const BAND = { a2: bands.a2, cumulative: bands.cumulative };
if (!BAND.a2.material.size) { console.error('no material tokens — check the data files'); process.exit(1); }

const classifiers = { a2: makeClassify(BAND.a2, materialText), cumulative: makeClassify(BAND.cumulative, materialText) };
function classify(entry, which) { return classifiers[which](entry); }

/* One official entry can stand for several headwords, and the transcription
   keeps the list's own notation: "der/das Club/Klub", "die (E-)Mail",
   "Lieblings-", "mal/das Mal". Reading only the raw line made those entries
   miss although the app carried the word. Every variant is tried:
     article cluster × word variants, the bare word, the parentheses inlined,
     and a trailing hyphen read as a prefix (Lieblings- → Lieblingsplatz). */
function readList(file, what) {
  if (!fs.existsSync(file)) {
    console.error('missing ' + what + ': ' + file);
    console.error('The official list is not in the repository (it is copyrighted).');
    console.error('Point GOETHE_A2_LIST / GOETHE_A2_GROUPS at a transcription, or see the header of this file.');
    process.exit(2);
  }
  return fs.readFileSync(file, 'utf8').split('\n')
    .map(s => s.replace(/^#.*$/, '').trim()).filter(Boolean);
}

function report(entries, label, which) {
  const rows = entries.map(e => classify(e, which));
  const head = rows.filter(r => r.inHead), met = rows.filter(r => r.met);
  console.log('\n' + label);
  console.log('  entries                          ' + rows.length);
  console.log('  authored headword                ' + head.length + '  (' + Math.round(head.length / rows.length * 100) + '%)');
  console.log('  met anywhere in A2 material      ' + met.length + '  (' + Math.round(met.length / rows.length * 100) + '%)');
  console.log('  not met at all                   ' + (rows.length - met.length) + '  (' + Math.round((rows.length - met.length) / rows.length * 100) + '%)');
  const missing = rows.filter(r => !r.met).map(r => r.entry);
  const byLetter = {};
  rows.forEach(r => {
    const c = STRIP(r.entry)[0].toUpperCase();
    byLetter[c] = byLetter[c] || [0, 0];
    byLetter[c][1]++;
    if (r.met) byLetter[c][0]++;
  });
  console.log('  per letter                       ' + Object.keys(byLetter).sort()
    .map(c => c + ' ' + byLetter[c][0] + '/' + byLetter[c][1]).join(' · '));
  return { rows, missing };
}

/* ---------------------------------------------------------------------------
   Derived gap run. The transcription lives outside the repository (the official
   list is copyrighted) and the sandbox does not keep files outside the repo
   between sessions, so the full run is impossible until the list is typed again.
   The committed gap file is enough to measure the next step exactly, because it
   lists every entry the last full run did not meet and the corpus only grows: an
   entry once met stays met, and an entry once authored stays authored. The
   totals of that run are recorded here, the report says the numbers are derived
   rather than read from the PDF, and the full run stays the measurement of
   record the moment a transcription is available.
   Last full run: 2026-10-03, second run (0.6105 / 0.5864 / 0.7961 / 0.7993). */
const GAP_FILE = path.join(root, 'tools', 'goethe-a2-gap.txt');
/* The promotion file: entries that were met in material and named in no word list, now
   authored. The derived run cannot see them — the gap file only ever held entries that
   were NOT met, and the baseline header records totals, not identities — so the file
   carries the identities and the tool verifies each one against the corpus before it
   counts. Unverified lines are printed and dropped, never counted. */
const PROMOTED_FILE = path.join(root, 'tools', 'goethe-a2-promoted.txt');
function readPromoted() {
  const out = { list: [], group: [] };
  if (!fs.existsSync(PROMOTED_FILE)) return out;
  fs.readFileSync(PROMOTED_FILE, 'utf8').split('\n').forEach(line => {
    const t = line.trim();
    if (!t || t.startsWith('#')) return;
    const m = /^(list|group)\s+(.+)$/.exec(t);
    if (!m) { console.log('  ! promoted line not readable: ' + t); return; }
    out[m[1] === 'list' ? 'list' : 'group'].push(m[2].trim());
  });
  return out;
}
/* Verify a promotion: both measures must hold, or the line counts for nothing. */
function verifyPromoted(entries, which) {
  const ok = [], bad = [];
  entries.forEach(e => {
    const c = classify(e, which);
    (c.inHead && c.met ? ok : bad).push({ entry: e, c });
  });
  return { ok, bad };
}
/* The baseline is read from the gap file's own header, so the file and the
   numbers it implies can never drift apart. RUN2 is the fallback for a gap file
   written before the header carried the baseline (the file at 4e2ef79). */
const RUN2 = { alpha: 1104, alphaAuthored: 674, alphaMet: 878, groups: 274, groupsAuthored: 134, groupsMet: 219 };
function baselineFrom(text, kind, fallback) {
  const re = new RegExp('^#\\s*baseline ' + kind + ':\\s*(\\d+)\\s+total,\\s*(\\d+)\\s+as headword,\\s*(\\d+)\\s+met\\s*$', 'mi');
  const m = re.exec(text);
  if (!m) return fallback;
  const o = { total: +m[1], head: +m[2], met: +m[3] };
  if (kind === 'list') return { alpha: o.total, alphaAuthored: o.head, alphaMet: o.met };
  return { groups: o.total, groupsAuthored: o.head, groupsMet: o.met };
}
function baselineLines(b) {
  return '# baseline list: ' + b.alpha + ' total, ' + b.alphaAuthored + ' as headword, ' + b.alphaMet + ' met\n' +
    '# baseline groups: ' + b.groups + ' total, ' + b.groupsAuthored + ' as headword, ' + b.groupsMet + ' met\n';
}

function gateLines(o) {
  let failed = 0;
  const pct = v => Math.round(v * 100) + '%';
  function gate(name, value, floor, goal) {
    const ok = value >= floor;
    const goalNote = value >= goal ? 'goal ' + pct(goal) + ' met'
      : 'goal ' + pct(goal) + ' — gap ' + pct(goal - value) + ' still to produce';
    console.log('  ' + (ok ? '✓' : '✗') + ' ' + name + ': ' + pct(value) +
      ' (floor ' + pct(floor) + ', ' + goalNote + ')');
    if (!ok) failed++;
  }
  console.log('\ncoverage gate  (floor = last accepted run · goal = production target)');
  if (process.env.SHOW_RAW) {
    console.log('  raw ' + JSON.stringify({ headRatio: +o.headRatio.toFixed(4), headAll: +o.headAll.toFixed(4),
      metRatio: +o.metRatio.toFixed(4), groupRatio: +o.groupRatio.toFixed(4) }));
  }
  gate('main list as headword', o.headRatio, FLOOR.headword, GOAL.headword);
  gate('main list + groups as headword', o.headAll, FLOOR.allHeadword, GOAL.headword);
  gate('main list + groups met in material', o.metRatio, FLOOR.material, GOAL.material);
  gate('word groups met in material', o.groupRatio, FLOOR.groups, GOAL.groups);
  return failed;
}

const HAVE_LIST = fs.existsSync(LIST) && fs.existsSync(GROUPS);
if (!HAVE_LIST && process.argv.includes('--require-transcription')) {
  console.error('missing A2 list transcription: ' + LIST + ' / ' + GROUPS);
  console.error('--require-transcription was given, so the derived run is refused.');
  process.exit(2);
}
if (!HAVE_LIST) {
  /* Gap file format: header comments, the alphabetical gap, the marker comment,
     then the word-group gap. A "headword " prefix means: in a word list, but
     never met in a sentence. */
  if (!fs.existsSync(GAP_FILE)) {
    console.error('missing ' + GAP_FILE + ' and the transcription — nothing to measure against.');
    process.exit(2);
  }
  const alpha = [], groups = [];
  const gapText = fs.readFileSync(GAP_FILE, 'utf8');
  const BASE = Object.assign({}, RUN2,
    baselineFrom(gapText, 'list', null) || {},
    baselineFrom(gapText, 'groups', null) || {});
  let section = alpha, marked = false;
  gapText.split('\n').forEach(line => {
    if (/^#\s*word groups/i.test(line)) { section = groups; marked = true; return; }
    if (/^#/.test(line) || !line.trim()) return;
    const m = /^headword\s+(.*)$/.exec(line.trim());
    section.push({ entry: m ? m[1] : line.trim(), wasHead: !!m, section: section === groups ? 'groups' : 'list' });
  });
  if (!marked) {
    /* Older gap files carry no marker; the group section starts at the entry the
       alphabetical list ends with. */
    const cut = alpha.findIndex(r => r.entry === 'ca.');
    if (cut < 0) { console.error('cannot split the gap file into list and groups'); process.exit(2); }
    alpha.slice(cut).forEach(r => { r.section = 'groups'; groups.push(r); });
    alpha.length = cut;
  }
  console.log('\nGoethe A2 match — DERIVED run (no transcription in this sandbox)');
  console.log('  source: tools/goethe-a2-gap.txt + its recorded baseline (' +
    BASE.alpha + ' + ' + BASE.groups + ' entries)');
  console.log('  exact for this corpus: the gap file is the set the last run missed and the corpus only grows.');
  console.log('  the full run returns as soon as a transcription is present (GOETHE_A2_LIST / GOETHE_A2_GROUPS).');
  const aRows = alpha.map(r => ({ entry: r.entry, wasHead: r.wasHead, c: classify(r.entry, 'cumulative') }));
  const gRows = groups.map(r => ({ entry: r.entry, wasHead: r.wasHead, c: classify(r.entry, 'cumulative') }));
  const promoted = readPromoted();
  const promotedList = verifyPromoted(promoted.list, 'cumulative');
  const promotedGroup = verifyPromoted(promoted.group, 'cumulative');
  const promotedOpen = new Set(alpha.concat(groups).map(r => r.entry));
  [promotedList, promotedGroup].forEach(v => v.bad.forEach(b => {
    console.log('  ! promoted entry not verified (' +
      (b.c.inHead ? 'met' : 'authored') + ' side missing): ' + b.entry);
  }));
  [promotedList, promotedGroup].forEach(v => v.ok.forEach(o => {
    if (promotedOpen.has(o.entry)) console.log('  ! promoted entry is still in the open gap: ' + o.entry);
  }));
  const alphaHead = BASE.alphaAuthored + aRows.filter(r => r.c.inHead).length + promotedList.ok.length;
  const alphaMet = BASE.alphaMet + aRows.filter(r => r.c.met).length;
  const groupsHead = BASE.groupsAuthored + gRows.filter(r => r.c.inHead).length + promotedGroup.ok.length;
  const groupsMet = BASE.groupsMet + gRows.filter(r => r.c.met).length;
  console.log('  promoted file        ' + (promotedList.ok.length + promotedGroup.ok.length) + ' entries verified as authored and met (' +
    promotedList.ok.length + ' list · ' + promotedGroup.ok.length + ' groups)'
    + (promotedList.bad.length + promotedGroup.bad.length ? ' · ' + (promotedList.bad.length + promotedGroup.bad.length) + ' unverified' : ''));
  console.log('  alphabetical list      ' + alphaHead + '/' + BASE.alpha + ' as headword · ' +
    alphaMet + '/' + BASE.alpha + ' met · ' + (BASE.alpha - alphaMet) + ' still open');
  console.log('  word groups            ' + groupsHead + '/' + BASE.groups + ' as headword · ' +
    groupsMet + '/' + BASE.groups + ' met · ' + (BASE.groups - groupsMet) + ' still open');
  console.log('  corpus gained from the gap: ' + aRows.filter(r => r.c.met).length + ' list entries and ' +
    gRows.filter(r => r.c.met).length + ' group entries');
  const stillOpen = aRows.concat(gRows).filter(r => !r.c.met);
  stillOpen.forEach(r => { if (r.wasHead && !r.c.met) console.log('  ! headword but never met: ' + r.entry); });
  if (WRITE_GAP) {
    /* The baseline is by definition the run's totals WITHOUT the promotion file:
       the promotions are recorded in their own file and added back on every
       derived run. Writing the raw totals here would count them twice on the
       next run. */
    const head = '# Recorded gap: Goethe A2 entries the app does not carry yet.\n' +
      '# Generated by tools/match-goethe-a2.js --write-gap on ' + new Date().toISOString().slice(0, 10) + '.\n' +
      '# Two measures: authored headword (in a word list) and material (met in an A2 lesson or A2 reading text).\n' +
      '# An entry marked "headword" is in a word list but never met in a sentence — that is a defect to fix.\n' +
      '# Derived run: the transcription was not present, so the baseline below is the previous run plus\n' +
      '# what this corpus closed. Counted against the re-typed transcription of the official PDF, not the PDF.\n' +
      baselineLines({ alpha: BASE.alpha, alphaAuthored: alphaHead - promotedList.ok.length, alphaMet: alphaMet,
        groups: BASE.groups, groupsAuthored: groupsHead - promotedGroup.ok.length, groupsMet: groupsMet })
      + '# baseline = the run without the promotion file; tools/goethe-a2-promoted.txt is added back per run.\n';
    const line = r => (r.c.inHead ? 'headword ' : '         ') + r.entry;
    const listOpen = stillOpen.filter(r => r.section !== 'groups').map(line);
    const groupOpen = stillOpen.filter(r => r.section === 'groups').map(line);
    fs.writeFileSync(GAP_FILE, head + listOpen.join('\n') + '\n# word groups below this line\n' +
      groupOpen.join('\n') + '\n');
    console.log('\nwrote tools/goethe-a2-gap.txt (' + stillOpen.length + ' entries)');
  }
  const failed = gateLines({
    headRatio: alphaHead / BASE.alpha,
    headAll: (alphaHead + groupsHead) / (BASE.alpha + BASE.groups),
    metRatio: (alphaMet + groupsMet) / (BASE.alpha + BASE.groups),
    groupRatio: groupsMet / BASE.groups
  });
  process.exit(failed ? 1 : 0);
}

const alsoPromoted = readPromoted();
const A2_ENTRIES = readList(LIST, 'A2 list transcription');
const A2_GROUPS = readList(GROUPS, 'A2 word-group transcription');

/* A promotion is a line in the promotion file; the full run counts it through the
   transcription, so the file's job here is to prove it belongs to the list at all. */
{
  const transcript = new Set(A2_ENTRIES.concat(A2_GROUPS).map(e => FOLD(String(e).trim())));
  const all = alsoPromoted.list.concat(alsoPromoted.group);
  const outside = all.filter(e => {
    const variants = entryPhrases(e).map(v => FOLD(String(v).trim()));
    return !variants.some(v => transcript.has(v));
  });
  console.log('\npromotion file: ' + all.length + ' entries, ' + (all.length - outside.length) +
    ' found in the transcription' + (outside.length ? ', NOT in it: ' + outside.join(' · ') : ''));
}

const main = report(A2_ENTRIES, 'Goethe A2 alphabetical list vs the Deutschweg A2 band alone', 'a2');
const cum = report(A2_ENTRIES, 'Goethe A2 alphabetical list vs the whole A0+A1+A2 band (cumulative)', 'cumulative');
const groups = report(A2_GROUPS, 'Goethe A2 word groups (days, months, numbers, measures) vs the cumulative band', 'cumulative');

const headRatio = cum.rows.filter(r => r.inHead).length / cum.rows.length;
const metRatio = (cum.rows.filter(r => r.met).length + groups.rows.filter(r => r.met).length) /
  (cum.rows.length + groups.rows.length);

if (WRITE_GAP) {
  const listLines = cum.rows.filter(r => !r.met).map(r => (r.inHead ? 'headword ' : '         ') + r.entry);
  const groupLines = groups.rows.filter(r => !r.met).map(r => (r.inHead ? 'headword ' : '         ') + r.entry);
  const lines = listLines.concat(groupLines);
  const head = '# Recorded gap: Goethe A2 entries the app does not carry yet.\n' +
    '# Generated by tools/match-goethe-a2.js --write-gap on ' + new Date().toISOString().slice(0, 10) + '.\n' +
    '# Two measures: authored headword (in a word list) and material (met in an A2 lesson or A2 reading text).\n' +
    '# An entry marked "headword" is in a word list but never met in a sentence — that is a defect to fix.\n' +
    '# Counted against the re-typed transcription of the official PDF, not against the PDF itself.\n' +
    baselineLines({ alpha: A2_ENTRIES.length,
      alphaAuthored: cum.rows.filter(r => r.inHead).length - verifyPromoted(alsoPromoted.list, 'cumulative').ok.length,
      alphaMet: cum.rows.filter(r => r.met).length,
      groups: A2_GROUPS.length,
      groupsAuthored: groups.rows.filter(r => r.inHead).length - verifyPromoted(alsoPromoted.group, 'cumulative').ok.length,
      groupsMet: groups.rows.filter(r => r.met).length })
    + '# baseline = the run without the promotion file; tools/goethe-a2-promoted.txt is added back per run.\n'
    + '# word groups below this line\n';
  fs.writeFileSync(path.join(root, 'tools/goethe-a2-gap.txt'),
    head + listLines.join('\n') + '\n' + groupLines.join('\n') + '\n');
  console.log('\nwrote tools/goethe-a2-gap.txt (' + lines.length + ' entries)');
}

const failed = gateLines({
  headRatio: headRatio,
  headAll: (cum.rows.filter(r => r.inHead).length + groups.rows.filter(r => r.inHead).length) /
    (cum.rows.length + groups.rows.length),
  metRatio: metRatio,
  groupRatio: groups.rows.filter(r => r.met).length / groups.rows.length
});
process.exit(failed ? 1 : 0);

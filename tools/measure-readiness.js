#!/usr/bin/env node
/* Deutschweg — is the §12.5 readiness gate reachable at all?
 *
 * The mock protocol round showed the pattern: a gate that reads a record the app
 * can never write is closed mathematically, however well the learner studies.
 * `DW.exam.masteryEvidence(S)` reads six evidences out of the portfolio:
 *
 *   discussion20   a recording tagged discussion, >= 20 minutes, no long pause
 *   essay400       a text tagged essay: >= 400 words, <= 45 minutes, >= 4 content
 *                  points, >= 3 clause types, <= 6 errors
 *   podcast        an unannounced, unstudied listening session with a gist and a
 *                  detail score
 *   novel          six novel chapters read at >= 95%, plus a 3–4 minute summary
 *   formal-letter  a text tagged formal-letter: >= 100 words, purpose achieved,
 *                  no zero axis
 *   explain-rule   a recording tagged explain-rule, >= 90 seconds, without notes
 *
 * This tool walks each one through the engine's own recorders — the same
 * functions the screens call — and reports which evidences the app can produce
 * today. The floor is the number of producible evidences of the last accepted
 * run: a ratchet, never lowered. A round that closes one raises it.
 *
 *   node tools/measure-readiness.js
 *   node tools/measure-readiness.js --write-floor
 */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const FLOOR_FILE = path.join(__dirname, 'readiness-floor.json');
const WRITE = process.argv.includes('--write-floor');

const FLOOR = fs.existsSync(FLOOR_FILE) ? JSON.parse(fs.readFileSync(FLOOR_FILE, 'utf8')) : { evidences: 0 };

const win = { DW: {} };
const load = rel => new Function('window', fs.readFileSync(path.join(root, rel), 'utf8'))(win);
/* data first, then the engines whose recorders this tool exercises */
['web/data/inventory.js', 'web/data/chunks.js', 'web/data/syllabus.js', 'web/data/catalog.js',
  'web/data/library.js', 'web/data/comprehension.js', 'web/data/ladder.js', 'web/data/mastery-b2.js']
  .forEach(load);
['web/engine/tracks.js', 'web/engine/mastery.js', 'web/engine/exam.js'].forEach(load);

const DW = win.DW;
const lib = win.DW_LIBRARY;
const chapters = lib.B2.novel.chapters;
const ladder = win.DW_LADDER.items;

function answersOf(qs) {
  const a = {};
  qs.forEach(q => { a[q.prompt] = q.key; });
  return a;
}
const portfolio = { recordings: [], texts: [], listening: [], reading: [] };

/* novel chapters — the reading recorder must say which chapter it was */
if (DW.tracks && DW.tracks.readingSession) {
  chapters.forEach(ch => {
    const qs = ch.questions || [];
    const s = DW.tracks.readingSession(ch, answersOf(qs), 150000);
    portfolio.reading.push(s);
  });
}

/* a podcast — a monologue, unannounced, unstudied, gist first, detail second */
const podcast = ladder.filter(i => i.podcast && i.level === 'B2')[0] || ladder.filter(i => i.podcast)[0];
if (podcast && DW.tracks && DW.tracks.listeningSession) {
  const s = DW.tracks.listeningSession(podcast, answersOf(podcast.questions || []), {
    audioPlayed: true, studied: false, preTaught: false, transcriptBefore: false
  });
  portfolio.listening.push(s);
}

/* the spoken mastery tasks — the recorder the screen calls on stop */
const say = (kind, seconds, opts) => {
  const t = DW.mastery.list().filter(x => x.kind === kind)[0];
  if (t) portfolio.recordings.push(DW.mastery.speakingSession(t, seconds, opts || {}));
};
say('novel-summary', 210, { noNotes: true });
say('discussion', 1260, { longPause: false });
say('explain-rule', 96, { noNotes: true });

/* the written mastery tasks — the recorder the writing screen calls on submit */
const essayWords = 420;
const essay = DW.mastery.list().filter(x => x.kind === 'essay')[0];
if (essay) {
  portfolio.texts.push(DW.mastery.writingSession(essay,
    new Array(essayWords).fill('Wort').join(' ') + ' , weil dass obwohl indem ',
    41 * 60000, { points: essay.points, errors: 4 }));
}
const letter = DW.mastery.list().filter(x => x.kind === 'formal-letter')[0];
if (letter) {
  portfolio.texts.push(DW.mastery.writingSession(letter,
    new Array(130).fill('Wort').join(' ') + ' , weil dass ',
    22 * 60000, { points: letter.points, errors: 3, purpose: 'achieved',
      axes: { inhalt: 2, aufbau: 2, ausdruck: 2, korrektheit: 2 } }));
}

/* what is still open, judged by the evidence the gate itself reads */
const open = [];
if (!portfolio.recordings.some(r => r.tag === 'discussion' && Number(r.seconds) >= 1200)) open.push('discussion20');
if (!portfolio.texts.some(t => t.tag === 'essay')) open.push('essay400');
if (!portfolio.recordings.some(r => r.tag === 'novel-summary')) open.push('novel-summary');
if (!portfolio.texts.some(t => t.tag === 'formal-letter')) open.push('formal-letter');
if (!portfolio.recordings.some(r => r.tag === 'explain-rule')) open.push('explain-rule');

const evidence = DW.exam.masteryEvidence({ portfolio: portfolio });
const names = ['discussion20', 'essay400', 'podcast', 'novel', 'formal-letter', 'explain-rule'];
const need = {
  discussion20: 'تسجيل موسوم discussion بطول 20 دقيقة بلا وقفة طويلة',
  essay400: 'نص موسوم essay: 400 كلمة · ≤45 دقيقة · 4 نقاط محتوى · 3 أنواع جمل · ≤6 أخطاء',
  podcast: 'جلسة سماع غير معلنة وغير مدروسة: سؤال فكرة + سؤال تفصيل',
  novel: 'ستة فصول عند ≥95% + تسجيل ملخّص 3–4 دقائق',
  'formal-letter': 'رسالة رسمية: 100 كلمة · الغرض محقَّق · لا محور صفرًا',
  'explain-rule': 'تسجيل شرح قاعدة ≥90 ثانية بلا ملاحظات'
};

console.log('§12.5 mastery evidence — can the app produce it?');
let produced = 0;
names.forEach(n => {
  const ok = evidence[n] === true;
  if (ok) produced += 1;
  console.log('  ' + (ok ? '✓' : '·') + ' ' + n.padEnd(15) + (ok ? 'producible' : 'OPEN — ' + need[n]));
});
console.log('\n  producible evidences: ' + produced + ' / 6');
if (open.length) console.log('  the recorder paths still missing: ' + open.join(' · '));
if (podcast) console.log('  the podcast item used here: ' + podcast.id + ' (' + podcast.level + ' · ' + podcast.kind + ' · gist ' + podcast.gist + ')');
console.log('  novel chapters the reading recorder identified: ' +
  new Set(portfolio.reading.filter(s => s && s.novel).map(s => s.chapter)).size + ' / ' + chapters.length);

let fail = 0;
console.log('\nreadiness-reachability gate  (floor = last accepted run · a ratchet, never lowered)');
if (produced < (FLOOR.evidences || 0)) fail += 1;
console.log('  ' + (produced >= (FLOOR.evidences || 0) ? '✓' : '✗') + ' producible evidences: ' + produced +
  ' (floor ' + (FLOOR.evidences || 0) + ')');

if (WRITE) {
  /* a failing run must not lower the floor: the ratchet is the whole point of the file */
  if (fail) {
    console.log('\n  refused: ' + fail + ' gate' + (fail === 1 ? '' : 's') + ' failed — the floor is not lowered');
    process.exit(1);
  }
  const raised = { evidences: Math.max(FLOOR.evidences || 0, produced) };
  fs.writeFileSync(FLOOR_FILE, JSON.stringify(raised, null, 2) + '\n');
  console.log('\n  wrote ' + path.relative(root, FLOOR_FILE) + ' ' + JSON.stringify(raised));
}
process.exit(fail ? 1 : 0);

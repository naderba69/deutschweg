# tools — checks that keep the build honest

## `validate-lesson.js`
Checks a lesson file against the Definition of Done (PROMPT §19): stage counts,
hint rules, immediate explanations, diagnostic distractors, simplification layers,
Merkhilfen, recap length, one-concept-per-step, and that all displayed lines are German.

```
node tools/validate-lesson.js web/data/a0-u1-l1.js
```

Exit code is non-zero on any hard failure — so it can gate a commit.

Also (P3.2): a lesson that carries a word list must use at least six of the
eight forms, no memory trick may repeat verbatim across lessons, and every
word-order exercise must score its own correct answer as full credit and
carry a real Arabic task line.

## `validate-syllabus.js`

Checks the map before any further lesson is authored: unique ids, acyclic
prerequisites, counts inside §13, and that the composer refuses an unmet
prerequisite and an unauthored row.

Lexical coverage gate (P3.2): per level it prints `authored / declared` (the
level's coverage; *delivered* at ≥ 80%) and `shipped rows` (authored against
what the ported rows declare; must be ≥ 80% at every push). A ported row must
carry ≥ 80% of its own declaration, a headword may not be counted twice in a
level, and a fully ported level below 80% fails.

## `compile-units.js`

Builds `web/data/catalog.js` from `specs-*.js` plus the lexical layer in
`vocab-*.js` (one file per production unit: `vocab-a0a1.js` for A0, `vocab-a1-02.js` … for A1, `vocab-b1-11.js` … for B1). A vocab row carries 12–20 items
`[headword, plural/forms, gloss, example, typical error, why, family, blank?]`,
three tricks, and — from A1 — two annotated order sentences
(`'Vorfeld | finite | Mittelfeld | rechte Klammer | Nachfeld'`, or
`{ satz: 'weil | ich müde | bin.', clause: 'sub' }`) and a writing prompt.

```
node tools/validate-syllabus.js
```

## `p0-tests.mjs`
Black-box acceptance tests for P0, run in a real DOM (jsdom). They drive the
interface the way a learner does and read the result from `localStorage`.

Needs jsdom once: `npm i jsdom` (not a runtime dependency of the app).

```
node tools/p0-tests.mjs
```

Covers: next disabled until answered · a wrong answer does not advance ·
the simplification ladder order · the lesson completes · errors reach the ledger
with a family · capabilities are written as E1/E1a · the full schema is present ·
resume · and T15 (a check below 80% returns to step 5, never to step 1).

## `p1-unit.mjs`
No DOM. The 30-pattern checker (including clean sentences that must not fire),
the ledger promote / retire / merge rules, and the wortstellung partial-credit
scorer.

```
node tools/p1-unit.mjs
```

## `p1-tests.mjs`
Black-box P1 acceptance in jsdom: the eight renderers, specific explanations,
hören triage, silence scoring, the writing checklist and its 30-pattern limit,
ledger promotion and retirement, Attack now, the 3-second drill including real
timeouts, SRS anti-cheat / cap / independent directions, and rejection of an
exercise with no `ziel`.

```
node tools/p1-tests.mjs
```

The measure-timeout case waits on a real 3-second clock. The file exits non-zero
on any failure.

## `p2-unit.mjs`
No DOM. Decay, activation, the six indicators, the composer, the allocator,
gates, pause, card reschedule, and the 6-week rotation.

## `p2-tests.mjs`
The learner-facing surfaces: a reason on every block, the 15-minute session,
tappable indicator sources, the capability map without a completion percentage,
and the scaled 8-hour calendar.

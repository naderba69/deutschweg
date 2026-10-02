# tools — checks that keep the build honest

## `validate-lesson.js`
Checks a lesson file against the Definition of Done (PROMPT §19): stage counts,
hint rules, immediate explanations, diagnostic distractors, simplification layers,
Merkhilfen, recap length, one-concept-per-step, and that all displayed lines are German.

```
node tools/validate-lesson.js web/data/a0-u1-l1.js
```

Exit code is non-zero on any hard failure — so it can gate a commit.

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

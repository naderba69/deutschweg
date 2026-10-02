# THE PROMPT — "Deutschweg Engine"

**A local-first, adaptive, offline-capable web application that steers one learner from A0 to B2 in German, delivering both a Goethe‑Zertifikat B2 pass and genuine mastery of the language.**

This document is complete and self-contained. It contains every requirement, number, rule, data structure, test and acceptance criterion needed to build the product. Nothing needs to be looked up elsewhere. Do not assume any unstated requirement; do not add unstated features.

Language of this prompt: **English**. Language of the product's UI and pedagogy: **Arabic (RTL)**. Language of the learning content: **German**.

---

## 1. ROLE & MANDATE

You are simultaneously a senior full-stack engineer (offline-first web applications, state machines, data modelling, mobile-first RTL interfaces) and a German pedagogy specialist with 30 years of academic teaching experience. You are the sole responsible lead for this project.

You own the architecture, the pedagogy, the data model and the sequencing. You decide, you record the decision, you keep building. Do not ask the learner to make pedagogical choices. Do not defer design decisions back to them. Do not expand scope. Build exactly what is specified, in the order specified.

**Deliverable:** a working, offline-first, phone-friendly web application — a *steering instrument*, not a course player.

---

## 2. MISSION & SUCCESS CRITERIA

Carry one learner from A0 to B2 in German across 30 months and deliver, simultaneously:

| Outcome | Definition | Measured by |
|---|---|---|
| **Certificate** | Goethe‑Zertifikat B2 — 60/100 in each of Lesen, Hören, Schreiben, Sprechen; no compensation between modules | the exam |
| **Mastery** | Automaticity: no item in the B2 repertoire requires conscious construction under time pressure (the 3-second rule) | the readiness engine |

The project is done when **both** are true. A certificate without mastery is a product failure, and so is mastery without the certificate.

**Planned load:** 1,210 hours across four quarterly cycles (see §6.3), inside a realistic envelope of 1,100–1,300 hours. At 10 h/week over 30 months, roughly 1,300 hours are available, so the plan carries about 90 hours of deliberate slack. Cycle hours include instruction, review, consolidation and exam preparation.

---

## 3. PRODUCT CONSTITUTION

Two sentences govern the entire product. No requirement anywhere in this document may contradict them.

**1. "The project is a tool that steers my study path."**
The learner never chooses the next lesson. The engine composes every daily session and justifies every block in it. A block with no stated reason is a defect.

**2. "Progress is dynamic and interactive."**
Progress is not a stored number that only grows. It is a live state computed from evidence, error debt and six indicators — and it is allowed to move downwards, honestly.

---

## 4. LEARNER PROFILE (fixed — do not generalise)

Arabic-speaking (Tunisian) adult, fluent in French, self-studying with no teacher, phone-first, in Msaken/Sousse, Tunisia. Approximately 10 hours per week, ~1.5 h/day. Zero network during study; network only for optional backup. Exam centres available: Sousse (Getusion / telc‑ADMISSION) and Tunis (Goethe‑Institut).

Pedagogical consequences that are **requirements, not notes**:

- **French is an asset and a hazard.** Cognates (Information, Kultur, Universität, national, Profession, Musik) are free vocabulary and must be actively exploited by the engine. False friends (bekommen ≠ devenir, eventuell ≠ éventuel, Konkurrenz ≠ concours, Präsident ≠ présent) must be drilled explicitly — 20–30 false friends per level.
- **Arabic has no grammatical gender, no cases, and no capitalised nouns.** These three are the hardest areas for this learner and must never be treated as "just more grammar".
- **Arabic has phonemic long vowels.** Vowel length is therefore an advantage; vowel quality and the sounds /ü, ö, ch, r/ are the difficulty.
- Arabic RTL interface, Arabic pedagogy and explanations, German learning content.

---

## 5. NON-NEGOTIABLES

1. **Local-first.** All state in localStorage under one versioned key. No account, no server, no login, no telemetry, no analytics.
2. **Zero network during study.** The app must be fully functional with the network switched off. The only network feature is an explicitly optional backup sync.
3. **Zero data loss.** Automatic weekly JSON export. Import merges, never overwrites. Schema migration is a merge, not a replace.
4. **Progressive disclosure.** Nothing is shown all at once.
5. **One template for every lesson, A0 through B2.** No bespoke per-level layouts.
6. **One concept per step.** Two teachable ideas in one step is a bug.
7. **No volume-rewarding gamification.** No streaks-as-shame, no points for time spent, no leaderboards. Progress is measured by evidence.
8. **Arabic UI, German content.**
9. **No visual theatre.** No simulated classroom, no blackboard, no decorative teacher avatar. The lesson is a method, not a scene. Visuals only where they carry information (declension tables, colour-coded sentence fields).
10. **Mobile-first RTL**, working on a mid-range Android phone.

---

## 6. ARCHITECTURE

### 6.1 Nine parallel tracks (+1 optional)

Nine tracks advance in parallel every week; every session touches several of them. There is no "finish unit 3 then start unit 4".

| # | Track | Core requirement |
|---|---|---|
| T1 | Grammar | Inductive for concrete patterns; explicit instruction + drilling for abstract systems |
| T2 | Pronunciation | A real syllabus with weekly recording against a model |
| T3 | Vocabulary | Receptive and productive, SRS in both directions |
| T4 | Chunks | 100 whole phrases per level, drilled under time pressure |
| T5 | Extensive reading | Volume at 98% comprehension, no dictionary |
| T6 | Graded listening | A published ladder with declared comprehension targets |
| T7 | Writing | From 5 daily sentences to timed B2 exam texts |
| T8 | Speaking | From 5 min aloud daily to a 20-minute spontaneous discussion |
| T9 | Foundations / spelling / Landeskunde / self-management | Capitals, ß/ss, commas, institutions, bureaucracy, media |
| T10 | AI conversation (optional, off by default) | Structurally inert — see decision D3 |

**Induction rule (mandatory):** use inductive discovery for concrete patterns (plurals, prepositions, gender suffixes, regular conjugation, common verb frames); use explicit instruction plus drilling for abstract systems (Konjunktiv II, Passiv, Satzstellung, Adjektivdeklination, Relativsätze, Konnektoren). Blanket induction is a pedagogical error and is prohibited.

**Track 10 — AI conversation (decision D3):** included as an optional module, disabled by default, network-gated, and structurally subordinate: no capability may require it to reach E3; no gate may depend on it; no readiness indicator may be computed from it. Labelled in the UI as supplementary practice outside the certified path.

### 6.2 Five gates

G1 A1 (month 7) · G2 A2 (month 13) · G3 B1 (month 21) · G4 B2-readiness (months 26–27) · G5 B2 exam (months 28–30).

Gate states: `locked → diagnostic → open → at-risk → passed`.

**Gate rule (min-max):** a gate opens and closes on the learner's **weakest** skill, never the strongest — because the exam grades four modules independently with no compensation.

### 6.3 Four quarterly cycles

| Cycle | Level | Months | Hours | Ends with |
|---|---|---|---|---|
| Q1 | A0 + A1 | 1–7 | 280 | Goethe A1 certificate + a 60-second video artefact |
| Q2 | A2 | 8–13 | 260 | Goethe A2 certificate + a 3-minute presentation |
| Q3 | B1 | 14–21 | 350 | Goethe B1 certificate + a debate |
| Q4 | B2 | 22–30 | 320 | Goethe B2 certificate |
| | | **30** | **1,210** | |

**Cycle rule:** each cycle is 80% competence / 20% exam technique. The last 8 weeks of every cycle are exam-only; the first 4 weeks are diagnostic + consolidation. Every cycle ends in a certificate **and** a tangible artefact (video, presentation, debate) — that is the retention mechanism, not decoration.

---

## 7. THE DYNAMIC ENGINE

Five cooperating subsystems. This is the product.

### 7.1 Capability & Evidence model — the atom of progress

```
Capability = "I can <X> in <context Y> to <accuracy Z>"
```

| State | Meaning | Earned by |
|---|---|---|
| E0 | not started | — |
| E1 | correct now, inside the lesson | an unassisted correct answer |
| E1a | correct with assistance (after a hint or an injected remedial step) | an assisted correct answer |
| E2 | correct after ≥7 days, unprompted | a spaced retrieval check |
| E3 | correct under pressure: timed, inside connected speech/writing, or in a mock | timed production or simulation |

Rules:

- Only **E3** opens a gate. **E1 alone is displayed as "not yet proven".**
- **E1a never counts toward a gate.** This is the single most important honesty rule in the product.
- Progress is `count(capabilities at E3 required for the gate) / count(required)`, shown as a **capability map** (Gate → Capability → Evidence), never as a percentage of lessons completed. A "87% of lessons done" display is a bug.
- No manual "mark as learned". Learning is demonstrated, not labelled.

### 7.2 Decay — the clock that makes progress honest

Memory fades; an instrument that shows frozen mastery lies.

| Rule | Value |
|---|---|
| Dormancy threshold | 45 days with no activity on that capability |
| Drop | exactly one step (E3 → E2), never to E0 |
| Decay floor | E1 (the lesson itself remains) |
| Recovery | one successful activation block restores E3 immediately |
| Decay speed | chunks and pronunciation decay slower than grammar tables |
| Wording | "needs activation" — never "you lost it" |
| Portfolio | historical recordings are evidence of trajectory, not of current state |

```
decayUrgency(cap) = clamp( (daysSince(lastActive) − 45) / 30 , 0 , 1 )
decayDue         = lastActive + 45 days
```

- `decayUrgency = 0` → nothing happens.
- `0 < urgency < 1` → an activation block (3–5 min) is inserted into the next session.
- `urgency = 1` → top priority in the ordering, before any new content.
- Successful activation → E3 restored immediately, `lastActive` reset.
- Failed activation → E3 → E2 (one step only), rescheduled after 3 days.
- Multiplier: chunks and pronunciation × 0.6 (slower); grammar tables × 1.0.

### 7.3 Session Composer — what the learner studies today

The engine composes a ~90-minute session from blocks tagged `{track, capabilityId, blockType, minutes, priority, reason}`.

**Block library**

| Type | Track | Minutes | Emitted when |
|---|---|---|---|
| activation | any | 3–5 | a capability entered its decay window |
| review-error | any | 5–10 | a live error family exists (the "Attack now" action) |
| drill-3s | grammar | 5 | R2 below target, or a family under 70% |
| srs | vocabulary | 5–15 | cards are due (cap 30/day) |
| lesson-step | any | 10–40 | a new capability is required for a gate |
| reading | extensive reading | 10–20 | R4 below target |
| listening | graded listening | 10–15 | R5 below target |
| speaking | speaking | 5–10 | R3 below target |
| writing | writing | 10–20 | per the writing schedule |
| pronunciation | pronunciation | 3–5 | per the weekly pronunciation syllabus |
| foundations | foundations | 3 | daily — spelling and Landeskunde |
| chunks | chunks | 5 | 100 phrases per level under time pressure |

**Priority function (deterministic and explainable)**

```
score(block) =
     15 × decayUrgency                       # decay outranks everything
 +   12 × isGateRequired && evidence < E3    # gate requirements
 +   10 × (daysOverdue / 7)                  # spaced-retrieval urgency
 +    8 × errorFamilyRank                    # rank 1..n of live families
 +    6 × indicatorDeficit                   # (green − actual)/(green − red), clamped 0..1
 +    5 × floorAtRisk                        # 1 if this track's weekly floor is at risk
```

`indicatorDeficit` per track derives from its reference indicator: speaking→R3 · listening→R5 · reading→R4 · pronunciation→the pronunciation syllabus · vocabulary→R6 · grammar→R2.

Tie-breakers: (1) the capability least recently active among equals; (2) track rotation — the same track may not appear three times consecutively.

**Session assembly**

1. Sort all available blocks descending by score.
2. Take from the top until roughly 90 minutes are filled.
3. Protect the floors: if the remaining week cannot cover a track's floor, insert a block from that track immediately.
4. Guarantee speaking: every session contains a speaking block of ≥5 minutes — including the 15-minute session (decision D8).
5. Variety: no more than two consecutive blocks from the same track.
6. New content last: a `lesson-step` block is only inserted if steps 1–5 are satisfied.
7. Write a one-line reason for every inserted block.

**Week plan, not day plan**

The composer produces a weekly plan (5 sessions of ~90 minutes plus a lighter weekend session) at the moment the allocation is ratified, then re-evaluates daily:

| Allowed daily without re-ratification | Requires re-ratification |
|---|---|
| swapping a block for one of equal or higher priority | changing a track's weekly signature |
| inserting an emergency activation block | dropping a floor below 50% (decision D6) |
| deleting a block whose capability was delayed | changing the target gate |

**Weekly guard:** any swap must keep `consumed + planned ≤ allocation` for every track. If it would breach, the swap is rejected and the original block is restored.

**Shortened and abandoned sessions**

- *Shortened* (learner taps "15 minutes only"): re-order instantly so the highest-priority block fits **plus a 5-minute speaking block**; defer the rest. No penalty, no "catch up".
- *Abandoned*: persist the exact block and step. The next session opens with a context line: "you stopped at step 7 of 14 — here is its recap."

**Resume after a gap — no guilt, no backlog**

Due-card rule: if more than a week has passed, due cards are **never stacked**. Show 30 only; the rest have their due dates pushed (rescheduled), never accumulated.

Re-entry session (maximum 30 minutes, when gap ≥ 14 days):

1. one activation block (highest `decayUrgency`),
2. one error-review block,
3. one 5-minute speaking block,
4. 10 SRS cards only,
5. then return to the normal plan in the next session.

`reentryPending` is cleared after the first full session. There is no screen saying "you are 12 days behind" — only: "welcome back, this is where you stopped."

### 7.4 Readiness indicators — the six numbers, computed exactly

| # | Indicator | Source | Computation |
|---|---|---|---|
| R1 | Error debt | errorLedger | `count(status == "live")` |
| R2 | Automaticity | drill-3s | correct-within-3s ÷ total, over the last 5 drills or 14 days · per family first, then aggregated |
| R3 | Speaking minutes | portfolio.recordings[] | sum of **actual recording durations** in the last 7 days — not block time |
| R4 | Reading speed | reading sessions | words ÷ minutes, with ≥95% comprehension (two questions after each text) · median of the last 5 sessions |
| R5 | Unannounced listening | listening sessions | percentage on material whose vocabulary was **not** pre-taught · average of the last 5 |
| R6 | Productive lexicon + chunks | srs + chunks | productive-direction cards in Leitner box ≥3, plus mastered chunks |

**Bands:**

| # | 🟢 | 🟡 | 🔴 |
|---|---|---|---|
| R1 | ≤8 and falling | 9–14 | ≥15 or flat |
| R2 | ≥85% | 70–84% | <70% |
| R3 | ≥60 min | 30–59 | <30 |
| R4 | ≥170 wpm | 130–169 | <130 |
| R5 | ≥70% | 50–69% | <50% |
| R6 | ≥ target | 85–99% | <85% |

(R4's 170 wpm is a **training target, not a published norm** — label it as such in the UI.)

**R6 targets** — productive words: A1 300 · A2 700 · B1 1,400 · B2 2,600, plus 100 chunks per level. Receptive targets (tracked separately, never merged): A1 800 · A2 1,600 · B1 3,200 · B2 5,000.

**Measurement rules:**

- R3 measures **output, not attendance**. Three minutes recorded inside a ten-minute block ⇒ R3 = 3.
- R4 is not counted without comprehension. A reading session with no questions or below 95% does not enter the computation.
- R5 is measured on **new material only**. Listening to something already studied does not count.
- R2 never hides a weak family. One family below 70% shows R2 as 🟡 even if the aggregate is 90%.
- Each indicator displays its **direction of travel** (↑↓ over 8 weeks) next to the number — direction matters more than the value.

The 3-second rule is the operational definition of mastery: anything not produced within roughly 3 seconds is not mastered and is recorded as weakness, not as "covered".

### 7.5 The Allocator — the weekly operations room

Once a week (default Friday, configurable), a 60-minute ritual:

| Step | Minutes | What happens |
|---|---|---|
| 1. Measure | 10 | recompute R1–R6 |
| 2. Classify | 5 | 🟢 / 🟡 / 🔴 per indicator |
| 3. Propose | 15 | the algorithm below |
| 4. Decide | 10 | GO / HOLD / REROUTE per the rules below |
| 5. Ratify | 20 | the learner confirms or edits; then the week plan is built |

**Proposal algorithm:**

```
for each track: deficit = (green − actual) / (green − red), clamped 0..1
strongest = the track with the highest normalised indicator
weakest   = the track with the highest deficit

transfer = min(120 minutes, deficit_weakest × 120)      # at most two hours
cut      = transfer taken from the strongest track, never below its floor

proposed[weakest] += transfer
proposed[strongest] −= transfer

then correct so that: all floors hold; 0.5 hour stays unallocated;
the D6 exception is not breached (at most two consecutive weeks,
never below 50% of floor, with explicit learner confirmation).
```

**Hard floors (weekly minutes):**

| Track | Floor |
|---|---|
| SRS / vocabulary | 90 |
| Grammar | 120 |
| Speaking | 60 |
| Extensive reading | 60 |
| Listening | 90 |
| Pronunciation | 30 |
| Writing | 60 |
| Foundations / spelling | 30 |

Floors total **9.5 of the 10 hours**, leaving 0.5 hour deliberately unallocated for recovery and rotation.

**Narrow exception (decision D6):** one track may drop below its floor for at most two consecutive weeks, never below 50% of floor, and only with explicit learner confirmation. Speaking and SRS are exempt from the exception.
*Rationale:* this prevents the classic self-study collapse — discovering weak grammar and converting everything into grammar, which kills speaking and listening — while permitting genuine recovery weeks.

**Decision rules:**

| State | Decision | Behaviour |
|---|---|---|
| zero 🔴 and ≤2 🟡 | **GO** | continue the plan |
| zero 🔴 and ≥3 🟡 | **HOLD** | hold the level for one more week — no new content |
| one or more 🔴 | **REROUTE** | redistribute and postpone new content in unaffected tracks |

HOLD and REROUTE are not punishments — they are what the tool does when the data says that continuing would build on sand.

### 7.6 The steering loop

```
measure R1–R6 → classify → propose allocation → GO/HOLD/REROUTE
   → learner ratifies → composer builds each day → new evidence → back to measure
```

- The engine decides alone: block order · difficulty escalation · remedial-step injection · activation scheduling · review content.
- The learner ratifies: the weekly allocation · exam booking (G5) · level-goal change · enabling any network feature.

---

## 8. THE LESSON ENGINE

### 8.1 Universal template (all levels, no exceptions)

A Lesson is an ordered array of **20–35 Steps**. A Step carries exactly **one concept**.

```json
{
  "id": "s07",
  "type": "erklaerung | wortschatz | anwenden | uebung | merkhilfe | produktion | zusammenfassung | check | hausaufgabe",
  "zeigt": "the single thing shown (German)",
  "erklaerung": "Arabic explanation, professional register, sentences ≤15 words",
  "vereinfachung": { "beispiel": "...", "analogie": "...", "regel": "..." },
  "tiefe": "optional depth layer for advanced learners",
  "audio": "optional German audio reference",
  "hinweise": ["hint 1", "hint 2 → answer"],
  "frage": {
    "type": "mcq|cloze|wortstellung|matching|hoeren|sprechen|schreiben|flashcard",
    "ziel": "capability id this measures",
    "prereq": "capability id assumed mastered",
    "misconceptions": [],
    "feedback": { "correct": "...", "wrong": {} }
  },
  "naechste": "id of the next step"
}
```

Data contract: `lessons[].schritte: Step[]`.

### 8.2 The mandatory four-beat cycle

**present → explain → simplify → ask.**

- Next is **disabled until the learner answers**. No skipping, no deferral.
- Per-step controls: 🔊 listen · explain more simply · another example · hint (ladder 1 → 2 → answer) · repeat · "I understand".
- Three-layer simplification, in order: مثال (example) → analogy → قاعدة (rule).
- **20-second rule:** a step a fresh learner cannot understand in 20 seconds is defective and must be rewritten. This is a Definition-of-Done gate.

### 8.3 The unified 12-stage sequence (every lesson, every level)

| Stage | Count |
|---|---|
| Ziel (goal) | 1 |
| Aufwärmen (warm-up) | 1 |
| Einstieg (entry hook) | 1 |
| Erklärung (explanation) | 3–7 |
| Wortschatz (2–4 words in sentences, never isolated lists) | 3–5 |
| Anwenden (model → imitate → transform) | 3 |
| Übungen (one exercise per step, immediate explanation on every answer) | 5–8 |
| Merkhilfe (memory trick) | 1–2 |
| Produktion (the learner produces something real) | 1 |
| Zusammenfassung (recap strip ≤6 words) | 1 |
| Check (70% current + 30% review, 80% to pass) | 3–5 |
| Hausaufgabe | 1 |

### 8.4 Teacher persona

- Learner-facing sentences ≤15 words.
- Warm, direct, never condescending. On a near-miss: "close — try again."
- Every wrong answer gets an immediate Arabic explanation of **why it is wrong**, not merely what is right.
- **≥3 Merkhilfen** per lesson whenever ≥5 new words appear. Each is `{trick, wie, warum}` with **warum mandatory**. Types: colour · sound · frame · kinetic · story · mimicry.

### 8.5 The step loop (interactive engine)

```
present → explain → simplify ladder (example → analogy → rule)
   → ask
        ├─ correct on first attempt ──────────► advance (E1) → auto-escalate?
        ├─ wrong #1 → hint 1 ─────────────────► re-ask
        ├─ wrong #2 → hint 2 + simpler layer ─► re-ask
        ├─ wrong #3 → 🔴 inject a remedial micro-step (same capability, easier form)
        └─ correct after any assistance ───────► recorded as E1a (assisted)
```

- **Remedial micro-step:** generated from the same capability in an easier form (a single word instead of a sentence, simple instead of complex, two options instead of four). Purpose: remove the barrier at the earliest opportunity, not to punish.
- **Auto-escalation:** three consecutive unassisted correct answers ⇒ either tighten the constraint (shorter timer, longer context, free production instead of multiple choice) or move to the Produktion step. The learner must never be left in comfortable ease.
- Immediate explanation is mandatory on **every** answer.
- Immediate error capture with mandatory family classification.

### 8.6 Resume

Persist the last unfinished step per lesson; resume there with the recap strip restored (≤6 words) and a progress indicator ("step 7 of 14").

---

## 9. THE EXERCISE ENGINE

### 9.1 General contract

Every exercise carries: `ziel` (the capability it measures — **mandatory**), `prereq` (what is assumed mastered — mandatory for checks), `misconceptions[]` (each wrong option or pattern mapped to a named misconception with a family), `feedback.correct`, `feedback.wrong[optionId]`, and `evidence` (E1 or E1a).

**There is no generic "wrong answer" feedback. Every error receives a specific explanation of why it is wrong.**

### 9.2 The eight renderers

**mcq** — question plus four options. Every distractor is a named misconception.

| Distractor | Misconception | Family |
|---|---|---|
| der Zeit (for die) | "masculine assumed from French le temps" | falser-freund |
| ich hat (for ich habe) | "strong-verb pattern applied to a weak verb" | konjugation |
| weil ich bin müde | "verb position in the subordinate clause forgotten" | wortstellung |
| seit drei Jahre | "declension after the preposition forgotten" | präposition |
| ein schöne Frau | "wrong adjective ending" | deklination |
| Danke, bitte (as a reply to thanks) | "function of the word confused" | register |

**cloze** — a sentence with 1–3 gaps. Exact match after trimming, case-insensitive. Each gap has a `nearMiss` set: the right word in the wrong context. Feedback must distinguish *"the word is right, the case/tense/government is wrong"* from *"the word is wrong"*. Example: `Ich ____ Mohamed.` → `heiße` is correct, `heißen` is a near-miss (a conjugation error that needs a lesson, not a hint).

**wortstellung** — the learner orders 5–9 tokens. Scored by priority, **not all-or-nothing**: ① verb position (V2 / clause edge) ② Satzklammer ③ field order ④ order within the field. Partial credit at each level; the correct sentence is then shown with colour-coded fields (Vorfeld · linke Satzklammer · Mittelfeld · rechte Satzklammer · Nachfeld). Example: `weil ich habe heute keine Zeit` succeeds at ① and fails at ② — half credit and feedback about the Mittelfeld only.

**matching** — two columns, 4–6 pairs. Every potential wrong pair must share **one feature** with the right pair (same register, same time of day, same case) so matching cannot be done by intuition. Feedback names the shared feature that deceived the learner.

**hören** — audio plus question, fully offline (bundled audio per decision D2). No transcript before answering. After answering, the full transcript appears with the answer and the key phrase highlighted. **Mandatory failure triage:**

- *phonetic* — the learner knows the word written but did not recognise the sound → pronunciation track plus isolated sound repetition
- *lexical* — the word is not in the repertoire → SRS plus returning it to a sentence
- *strategic* — the word and sound are known but were missed in context → pre-listening prediction training (use the 20 seconds before playback)

Without this triage, all listening errors receive the same treatment — which is wrong in two thirds of cases.

**sprechen** — instructions, timer, record button. **Local heuristic scoring only** (decision D1): duration versus target · silence ratio · phoneme-pattern match against a reference · 0% on silence. A weak score triggers a hint, never a block. Every recording is saved to `portfolio.recordings[]` with its date and capability.

**schreiben** — instructions, minimum word count, timer. **No automatic grammar correction and no claim of one.** The engine provides a 5-point checklist the learner applies themselves: ① content points ② connectors ③ sentence variety ④ capitalisation ⑤ punctuation — plus the word count. Complementary pattern "find the error": a sentence containing one deliberate error that the learner must locate and fix. Texts are saved to the portfolio.

**flashcard** — two independently scheduled directions, receptive (DE→AR) and productive (AR→DE), plus a third type: sentence completion. Self-assessment "know / don't know". Anti-cheating: pressing "know" in under 1.5 seconds on a new card forces it into a mandatory "verify" queue in the next session. On "don't know": the answer, an example sentence, and whether this is a first or repeated forgetting.

### 9.3 Procedural generator

A generator producing unlimited instances from:

- a **sentence bank of 500–800 sentences**, tagged by level, grammar point, vocabulary and chunk; and
- templates: cloze, wortstellung, matching, MCQ with distractor rules.

Every generated instance carries its answer key, its diagnostic-distractor rationale, and its capability link. Generated instances feed the 3-second drill.

---

## 10. THE ERROR ENGINE

### 10.1 Fourteen families

`genus · kasus · deklination · konjugation · wortstellung · plural · präposition · lexik-kollokation · register · falser-freund · orthographie · aussprache · hoerstrategie · pruefstrategie`

**Never treat an error before classifying its family** — misclassification wastes hours.

### 10.2 Error Ledger

```json
{
  "id": "err_014",
  "wrong": "Ich bin seit drei Jahre hier.",
  "right": "Ich bin seit drei Jahren hier.",
  "family": "präposition",
  "source": "lesson|drill|mock|writing|speaking|listening",
  "misconceptionId": "präp.seit.akk",
  "firstSeen": "2026-10-03",
  "reviews": ["2026-10-04","2026-10-06"],
  "due": "2026-10-10",
  "status": "live|retired",
  "streak": 0
}
```

| Rule | Detail |
|---|---|
| Weighted review | 1 day → 3 → 7 → 21 → 45 |
| Promotion to debt | the error recurring on two consecutive scheduled reviews ⇒ `live` (drives R1) |
| Retirement | two clean reviews at the 45-day interval ⇒ `retired` (kept for statistics, excluded from debt) |
| Merging | two errors of the same family and source ⇒ merged into one line with three examples — the ledger must not grow without bound |
| No duplication | a new error matching a live one ⇒ increment `streak`, do not add a line |
| Display | live errors only by default; retired entries collapsed |

### 10.3 The error-debt screen

Shows: the live-error count (this is R1) · grouping by family, ordered by frequency · each line with wrong/right/last date/next review · the trend of R1 over 8 weeks · and a button **"Attack now"** that generates a drill of 10 live errors (most frequent first).

"Attack now" is the most important button in this phase — it turns the ledger into an active syllabus rather than a passive log.

---

## 11. AUTOMATICITY DRILL & SRS

### 11.1 The 3-second drill (measures R2)

| Item | Spec |
|---|---|
| Two modes | practice (untimed) → then measure (timed) |
| Size | 20 items from one family |
| Timer | 3 seconds per item, visible |
| Advance | on answer or on timeout |
| Timeout = an error | recorded with its family |
| Result | percentage of items answered correctly within 3 seconds — this is R2 |

Rules: never measure before practising · 3 seconds is generous (a known form takes under a second) · R2 is computed **per family** and then aggregated — a weak family must never be hidden inside a strong average · timeouts are real errors with no exceptions · 20 non-repeating items per session.

This drill is the only mechanism that exposes "knowledge without automaticity".

### 11.2 SRS

| Item | Spec |
|---|---|
| Intervals | `[0, 1, 2, 4, 7, 15, 30]` days (Leitner) |
| Directions | receptive and productive on **separate** schedules; sentence completion on a third |
| Daily cap | 30 cards per day — SRS must not swallow the 90-minute weekly floor |
| Anti-cheating | "know" in under 1.5 s on a new card ⇒ forced "verify" queue next session |
| No same-session preview | a new card is never shown in the session that introduced it — at least one day apart |

Why two independent schedules: a learner who recognises 3,000 words and produces 400 is at A2, not B1. A single schedule hides this completely.

---

## 12. THE EXAM ENGINE

### 12.1 Goethe‑Zertifikat B2 (default target)

| Module | Time | Shape | Points | Pass |
|---|---|---|---|---|
| Lesen | 65 min | 5 parts · 30 items (forums, press, opinion texts, a formal regulation text) | 100 | 60 |
| Hören | ~40 min | 4 parts · 30 items (everyday talk and announcements, an interview, a multi-speaker discussion, a lecture) | 100 | 60 |
| Schreiben | 75 min | Task 1: opinion/forum post ≥150 words (~50 min, 60 pts) · Task 2: personal/formal message ≥100 words (~25 min, 40 pts) | 100 | 60 |
| Sprechen | ~15 min (+15 prep) | a short presentation (~4 min) plus partner questions, then a discussion with the partner (~5 min) | 100 | 60 |

Three facts the engine must encode and teach:

1. **No compensation between modules** — 60 in each.
2. **Modules are retakable individually** — a "secure one module and leave it" strategy is valid and must be supported by the mock protocol.
3. In Schreiben, **a zero on any rubric criterion zeroes the whole task.** Missing one content point can cost the entire task, not one point.

### 12.2 Official rubric axes — every training hour must point at one

**Schreiben (4 axes):**

- I. *Inhaltliche Vollständigkeit* — all content points addressed, with an introduction and a conclusion.
- II. *Textaufbau + Kohärenz* — clear paragraphs; connectors (zunächst, allerdings, deshalb, zusammenfassend).
- III. *Ausdrucksfähigkeit* — lexical range and control. B2 upgrades: entscheidend not wichtig, zunehmend not immer mehr, hinsichtlich not über; plus Nomen‑Verb‑Verbindungen.
- IV. *Korrektheit* — morphology, syntax, orthography and punctuation; Konjunktiv II, Passiv, Relativsätze.

**Sprechen (6 axes):** completeness and elaboration · interaction · connected speech and pace · expressive range · linguistic correctness · pronunciation.

Encode in the UI: pronunciation is judged only on *"does it impede understanding?"* — hours belong in pace and interaction, not accent elimination.

### 12.3 telc B2 (available in Sousse) — selectable target (decision D4)

300 points: written 225 (75%) — Leseverstehen plus Sprachbausteine (90 minutes shared, 75+30), Hörverstehen (~20 minutes, 75, each text played once), Schriftlicher Ausdruck (30 minutes, 45, a half-formal letter of ≥150 words: an inquiry or a complaint); oral 75 (25%) — presentation, discussion, joint problem-solving, 15 minutes plus 20 minutes preparation. Pass = 135/225 written **AND** 45/75 oral, independently. Letter criteria: I. handling the writing occasion · II. communicative achievement · III. formal correctness.

`targetExam` is a learner setting (goethe-b2 default, telc-b2 selectable); the exam engine adapts item formats, timings and rubric axes to the selection.

### 12.4 Mock-exam protocol — 8 mocks across Q4

| # | Timing | Form | Purpose |
|---|---|---|---|
| 1–2 | month 26 | one module at a time | baseline; expose the weakest module |
| 3–4 | month 27 | full written (180 min) | stamina and time management |
| 5–6 | months 27–28 | full plus recorded Sprechen | score Sprechen against the six axes |
| 7 | month 29 | full under real conditions (morning, no phone, no pausing) | final simulation |
| 8 | months 29–30 | the exam | — |

Real timing, real silence. Self-grading against the official rubric axes, with the engine computing a module score out of 100. **"I would have known it" does not count** — if it was not done in time, it is an error and it is logged.

### 12.5 Exam-readiness gate (G5) — all three, or do not book

1. A full mock at **≥65/100 in every module** (margin above 60, because exam day is worse than a practice day).
2. **Error debt ≤8** and stable or falling.
3. **≥4 of the 6 mastery capabilities** achieved and documented in the portfolio.

The six mastery capabilities (beyond the exam):

1. a 20-minute spontaneous discussion, arguing and responding without pauses longer than 5 seconds;
2. a 400-word argumentative essay in 45 minutes — 4 content points, 3 subordinate-clause types, ≤6 errors;
3. ≥70% general and ≥50% detail comprehension of an unannounced native podcast;
4. reading a full novel without a dictionary and summarising it aloud in 3 minutes;
5. writing a real formal letter that achieves its purpose;
6. explaining a German grammar rule to someone else in Arabic, without notes.

### 12.6 The 14-day taper

Halve new input. Convert hours to: error ledger + chunks + 3 full mocks + sleep and energy. Never start a new grammar topic in the last two weeks. Exam day: no new vocabulary — review writing templates and chunks only.

---

## 13. TRACK SPECIFICATIONS

### 13.1 Vocabulary — the split is never merged

| Level | Receptive | Productive |
|---|---|---|
| A1 | 800 | 300 |
| A2 | 1,600 | 700 |
| B1 | 3,200 | 1,400 |
| B2 | 5,000 | 2,600 |

Plus 100 chunks per level. A learner who recognises 3,000 words and produces 400 is at A2, not B1 — the UI must say so.

### 13.2 Chunks

100 whole phrases per level, memorised as units, drilled under time pressure. Fluency leverage per hour exceeds rare grammar; the composer weights chunks accordingly.

### 13.3 Extensive reading

A1: 10 short texts · A2: 20 graded readers · B1: 10 longer texts plus a simplified magazine · B2: one full novel plus 20 opinion articles. Rule: **98% comprehension, no dictionary** during extensive reading. The UI must actively hide the dictionary affordance in extensive-reading mode.

### 13.4 Listening ladder

A1 numbers, orders, slow dialogues 80% · A2 DW Langsam news 75% · B1 Slow German 70% · B2 interviews, lectures, dialects 65%.

### 13.5 Writing

Daily 5–10 sentences from A1 · weekly 80–150 words from A2 · 20 timed writings (75 min) before B2 · text types: Erörterung / Beschwerdebrief / Zusammenfassung.

### 13.6 Speaking

Daily 5 minutes aloud from A1 · a weekly 60–90 second recording from A2 · monthly Tandem/italki from A2 · 15 recorded discussions plus partner practice for B2 Sprechen.

### 13.7 Pronunciation syllabus

- **A1** — vowel length, helper letters, ei / ie / eu / ch / sch
- **A2** — ä ö ü, both ch variants, r, Auslautverhärtung
- **B1** — glottal stop, word stress, sentence melody, shadowing
- **B2** — dialects (Austrian / Swiss / Bavarian) for listening discrimination

### 13.8 Foundations / spelling / Landeskunde

Capitals, ß/ss, comma rules — 3 minutes daily. Landeskunde: institutions, bureaucracy (Anmeldung, Versicherung), etiquette, media, contemporary history.

---

## 14. RETENTION DESIGN

- Quarterly cycles ending in a certificate **and** a tangible artefact.
- **15-minute minimum day.** A 15-minute session is a success. The UI must never display a broken streak. A shortened session always contains a speaking block of at least 5 minutes (decision D8) — speaking is the first skill to die in self-study.
- **No-guilt resume.** Returning after a gap restores context and offers a shortened re-entry session — never a catch-up penalty.
- **Activity change every 6 weeks** to prevent habituation. `rotation.variant` cycles A / B / C:

| Track | Variant A | Variant B | Variant C |
|---|---|---|---|
| reading | graded reader | simplified magazine | short articles and headlines |
| speaking | solo recording | dialogue simulation | Tandem call |
| listening | Langsam | slow podcast | authentic clip with commentary |
| writing | daily sentences | a paragraph | a letter |

- **Social element from A2, not B1:** a free Tandem partner, optional.
- **Progress portfolio:** earliest versus latest recording, playable side by side — the strongest available motivation mechanism, and mandatory.
- Mandatory weekly automatic export plus optional free GitHub‑Gist sync. Migration v1 → v2 merges.

---

## 15. DATA MODEL & STORAGE

```json
{
  "schemaVersion": 2,
  "learner": { "name": "...", "startDate": "...", "targetExam": "goethe-b2", "weeklyHours": 10 },
  "gates": {
    "G1": { "state": "locked|diagnostic|open|at-risk|passed", "passedOn": null, "certificate": null },
    "G2": { "state": "locked", "passedOn": null, "certificate": null },
    "G3": { "state": "locked", "passedOn": null, "certificate": null },
    "G4": { "state": "locked", "passedOn": null, "certificate": null },
    "G5": { "state": "locked", "passedOn": null, "certificate": null }
  },
  "capabilities": [
    {
      "id": "cap.konjunktiv2.irreal.e3",
      "track": "grammar",
      "level": "B1",
      "text": { "ar": "...", "de": "..." },
      "evidence": "E0|E1|E1a|E2|E3",
      "assisted": false,
      "firstSeen": "2026-09-28",
      "lastActive": "2026-10-03",
      "history": [ { "state": "E1", "at": "2026-09-28", "source": "a0-u1-l1" } ],
      "gate": "G3",
      "decayDue": "2026-11-17",
      "activationScheduled": false
    }
  ],
  "lessons": [
    { "id": "a0-u1-l1", "level": "A0", "unit": "u1", "title": "...", "schritte": [] }
  ],
  "progress": [
    { "lessonId": "a0-u1-l1", "lastStepId": "s07", "completedSteps": ["s01","s02"], "state": "in_progress|completed" }
  ],
  "indicators": {
    "R1": 6, "R2": 0.88, "R3": 45, "R4": 150, "R5": 0.55,
    "R6": { "productive": 640, "chunks": 40 }
  },
  "allocation": { "srs": 90, "grammar": 120, "speaking": 60, "reading": 60, "listening": 90, "pronunciation": 30, "writing": 60, "foundations": 30 },
  "weekPlan": {
    "weekOf": "2026-10-05",
    "allocation": {},
    "consumed":  { "srs": 0, "grammar": 0, "speaking": 0, "reading": 0, "listening": 0, "pronunciation": 0, "writing": 0, "foundations": 0 },
    "decision": "GO|HOLD|REROUTE",
    "sessions": [ { "day": "mon", "blocks": [] } ]
  },
  "errorLedger": [],
  "srs": { "cards": [], "intervals": [0,1,2,4,7,15,30], "leitner": true },
  "portfolio": { "recordings": [], "texts": [] },
  "mocks": [],
  "gaps": { "lastSessionDate": "2026-10-03", "reentryPending": false },
  "rotation": { "lastChange": "2026-08-15", "variant": "A" },
  "settings": { "uiLanguage": "ar", "rtl": true, "reviewDay": "friday", "speechScoring": "local", "aiConversation": false }
}
```

**Storage rules:**

- Key: `deutschweg_v2`. All reads and writes pass through a single storage layer; nothing writes to localStorage directly.
- Export = that object as a downloadable `.json`, automatically at least weekly.
- Import = deep merge by id, preferring the higher evidence state, unioning arrays. Never destructive. A timestamped backup is written to localStorage before any import.
- Migration v1 → v2 = merge, not replace; anything not understood is preserved verbatim under a legacy key.
- Every field that later phases use is created empty from day one. No field is ever deleted.

---

## 16. UI SURFACES

| Surface | Shows | Never shows |
|---|---|---|
| Today | the session plan, the reason for each block, in-block progress | a browsable lesson list |
| Step | one concept, the explanation, the hint ladder, the question | more than one concept |
| Capability map | Gate → Capability → evidence state, plus "needs activation" markers | a completion percentage |
| Indicators | R1–R6 with bands and direction of travel (↑↓) | points or rewards |
| Error debt | live families, review history, "Attack now" | dead historical errors as if current |
| Portfolio | the learner's own recordings and texts, oldest versus newest, side by side | comparison against other people |
| Exam | the eight mock results and the three-condition readiness gate | any promise of passing |

**Display rule:** every number on screen must be explainable in one tap ("where did this come from?"). A number without a source is a defect.

---

## 17. HONESTY RULES (violating any one rejects the release)

1. No number on screen without a traceable source.
2. Assisted success is labelled assisted and excluded from gate counting.
3. Decay is displayed, not hidden.
4. "I would have known it" does not count.
5. No manual marking, no skipping.
6. Indicators are measured on new, unannounced material, never on prepared material.
7. Every block states its reason.
8. The tool never promises success — it shows readiness.

---

## 18. ANTI-GOALS (do not build)

A simulated classroom or blackboard · a linear course browser · streaks, points, badges, leaderboards · accounts, servers, logins, default sync, analytics · a percentage-complete display · network-dependent core features · a "B2 in 6 months" promise.

---

## 19. DEFINITION OF DONE

**A lesson is done when:** all 12 stages are present · 20–35 steps · one concept per step · next disabled until answered · three-layer simplification present · hint ladder 1→2→answer · ≥3 Merkhilfen with mandatory warum when ≥5 new words · every exercise tied to a ziel · every check tied to a prereq · immediate explanation on every answer · every error auto-logged with a family · the 20-second rule passes · recap strip ≤6 words · Hausaufgabe present.

**A release is done when:** it works fully offline · RTL on a mid-range Android phone · zero network calls during study · export/import round-trips without loss · migration from v1 merges · all 8 exercise renderers function · the Session Composer can explain every block it chose · the Allocator cannot breach a floor (except the decision-D6 exception) · no screen shows an untraceable number.

**The project is done when:** the learner passes Goethe B2 and ≥4 of the 6 mastery capabilities are documented in the portfolio.

---

## 20. BUILD ORDER

Build strictly in this order. Ship something usable at the end of every phase. Do not start the next phase until the current phase's exit criteria are met. Do not expand scope.

### Phase P0 — Skeleton (the step engine)

**Deliverables:** the complete data model of §15 · the storage layer · export/import with merge · the RTL Arabic shell (offline, mobile-first) · the lesson renderer with step gating and the four-beat cycle · the hint ladder · remedial-step injection · auto-escalation · immediate explanations · error capture into the ledger · resume at the last unfinished step · recap strip ≤6 words plus "step 7 of 14" · one complete real A0 lesson running end to end.

**The reference lesson `a0-u1-l1`** — A0, 90 minutes, 29 steps, all 12 stages:

| Steps | Stage | Content |
|---|---|---|
| S1 | Ziel | "By the end of this lesson you will say your first German greeting and read any German word aloud correctly." |
| S2 | Aufwärmen | listen to four greetings; how many did you hear? |
| S3 | Einstieg | "Three letters will deceive you today: W · V · Z" |
| S4 | Erklärung 1 | the 26 letters plus ä ö ü ß, with Mädchen / schön / über / Straße |
| S5 | Erklärung 2 | the deceptive trio: w=/v/ · v=/f/ · z=/ts/ (Wasser / Vater / Zeit) |
| S6 | Erklärung 3 | ei ≠ ie: nein versus die |
| S7 | Erklärung 4 | eu / ch / sch — heute / ich / Buch / Schule |
| S8 | Erklärung 5 | long versus short vowel: Mitte versus Miete; Arabic long vowels are an advantage |
| S9 | Wortschatz 1 | Guten Morgen / Tag / Abend in sentences |
| S10 | Wortschatz 2 | Auf Wiedersehen / Gute Nacht / Tschüss — register, not meaning |
| S11 | Wortschatz 3 | the golden frame: Ich heiße … / Wie heißt du? |
| S12 | Wortschatz 4 | Danke / Bitte / Freut mich |
| S13–S15 | Anwenden | model (a full five-line dialogue) → imitate (aloud, twice) → transform (swap name, time, register) |
| S16–S20 | Übungen | mcq · cloze · matching · hören · cloze |
| S21–S23 | Merkhilfe | frame "the deceptive triangle" · sound "ei before ie" · story "Gut and his coat" — each with trick / wie / warum |
| S24 | Produktion | record 20 seconds: greeting + name + one question (the first portfolio entry) |
| S25 | Zusammenfassung | recap strip ≤6 words: "W=V · V=F · Z=TS · gut + time" |
| S26–S29 | Check | 4 items (100% current content on day one; the 70/30 rule starts at lesson two); 80% to pass, otherwise return to S5–S12, not to S1 |
| S30 | Hausaufgabe | greet three real people tomorrow; record one sentence |

**P0 acceptance tests (manual):**

| # | Test | Expected |
|---|---|---|
| T1 | open with the network off | fully functional, zero console errors |
| T2 | press "next" without answering | nothing moves |
| T3 | answer wrong three times | a remedial micro-step is injected automatically |
| T4 | reveal the answer | `assisted: true` in the stored state |
| T5 | press "explain more simply" three times | example → analogy → rule, in that order |
| T6 | close at step 7 | on return: "step 7 of 29" plus the recap strip |
| T7 | err deliberately in S5 | a line appears in errorLedger with family `aussprache` |
| T8 | finish, export, wipe storage, import | everything returns, nothing lost |
| T9 | export two different files, import both | union, not replacement — no duplicates, no loss |
| T10 | wait ≥7 days (or fake the date) | automatic export is offered |
| T11 | open on a real mid-range Android phone | correct RTL, no horizontal scroll, readable type |
| T12 | read every step aloud | no step exceeds 20 seconds |
| T13 | three consecutive unassisted correct answers | escalation: a tighter timer or a move to a Produktion step |
| T14 | inspect `localStorage.deutschweg_v2` | every key of §15 is present, empty where required |
| T15 | finish the Check below 80% | returns to S5–S12, not to S1 |

**T15 is the most important test in P0** — it proves the tool corrects itself instead of restarting the learner.

**P0 exit criteria:** the lesson runs S1→S30 without interruption on a real device, offline · every §8 requirement is met · T1–T15 pass · the full schema is present · export/import merges · zero network calls during study · T15 passes.

### Phase P1 — Exercise & correction engine

**Deliverables:** all eight renderers of §9.2 · diagnostic distractors · immediate per-error explanations · the Error Ledger of §10.2 with weighted review, promotion, retirement and merging · the error-debt screen with "Attack now" · the 3-second drill of §11.1 · SRS of §11.2 with two independent directions · capability records created lazily from every exercise's `ziel` · recordings captured into the portfolio.

**P1 acceptance tests:**

| # | Test | Expected |
|---|---|---|
| T16 | answer an mcq wrongly | feedback specific to that option, not generic |
| T17 | type `heißen` for `heiße` in cloze | "the word is right, the conjugation is wrong" — not "wrong answer" |
| T18 | order a sentence partially wrong | partial credit plus feedback on the level that failed only |
| T19 | err in hören | the three-way triage appears; the transcript appears only after answering |
| T20 | record 10 seconds of silence in sprechen | 0% plus a hint, progress is not blocked |
| T21 | write text in schreiben | a 5-point checklist plus word count, no claim of grammar correction |
| T22 | press "know" in under a second on a new card | the card is forced into the "verify" queue |
| T23 | let two items time out in the drill | timeouts are logged as errors and R2 actually drops |
| T24 | press "Attack now" | a drill of 10 live errors is generated |
| T25 | err the same error twice in consecutive reviews | it is promoted to live and appears in R1 |
| T26 | two clean reviews at 45 days | it is retired and excluded from R1 |
| T27 | inspect errorLedger | no duplicate lines for the same error — streak increments |
| T28 | inspect `capabilities[]` after 10 answers | real records created lazily with E1/E1a states |
| T29 | inspect `portfolio.recordings[]` | S24 and sprechen recordings saved with dates |
| T30 | reach 35 due SRS cards in a day | the cap of 30 prevents SRS from swallowing the session |
| T31 | succeed on a receptive card | its direction advances; the productive direction does not |
| T32 | an exercise without `ziel` | rejected in authoring, never displayed |
| T33 | disable the network and open every renderer | all eight work — including hören with bundled audio |

**P1 exit criteria:** all eight renderers work offline (T33) · every error produces a specific explanation (T16–T19) · the ledger writes, promotes, retires and merges correctly (T25–T27) · the drill works in both modes with timeouts logged (T23) · SRS runs two independent schedules with anti-cheating (T22, T30, T31) · `capabilities[]` holds real evidence (T28) · schreiben makes no correction claim (T21) · every exercise carries `ziel` (T32).

### Phase P2 — Adaptive core

**Deliverables:** the capability and evidence model with decay · SRS scheduling wired to the composer · the Session Composer with the seven selection rules and per-block reasons · readiness indicators R1–R6 · the Allocator with floors, the 0.5 h slack, the D6 exception and the GO/HOLD/REROUTE decision · the capability-map UI · the shortened-session and no-guilt-resume behaviour · the gate state machine with at-risk and re-opening · the week plan with the consumed guard · the 6-week activity rotation.

**P2 acceptance tests:**

| # | Test | Expected |
|---|---|---|
| T34 | a capability entered its 45-day window | an activation block appears in the next session |
| T35 | successful activation | E3 restored immediately, `lastActive` reset |
| T36 | failed activation | it drops one step only (E3→E2), not to E0 |
| T37 | a three-month gap | chunk capabilities decay slower than grammar capabilities |
| T38 | inspect `capabilities[]` after a week of use | real records with states and multiple pieces of evidence |
| T39 | every block in today's plan | carries at least one line of reason |
| T40 | a block with no reason | rejected in generation |
| T41 | R3 | measures recording duration, not block time — 3 minutes recorded in a 10-minute block ⇒ R3 = 3 |
| T42 | R4 | a reading session with no questions or below 95% comprehension does not enter the computation |
| T43 | R5 | listening to already-studied material does not count |
| T44 | R2 | one family below 70% shows 🟡 even if the aggregate is 90% |
| T45 | every number on screen | tapping it reveals its source |
| T46 | a three-week gap then return | 30 cards only are shown, the rest are rescheduled — no queue of 200 |
| T47 | a "15 minutes only" session | the highest-priority block plus 5 minutes of speaking, the rest deferred with no penalty |
| T48 | close a session at step 7 | the next session: "step 7 of 14" plus a recap |
| T49 | one 🔴 indicator | the decision is REROUTE and new content is postponed in unaffected tracks |
| T50 | three 🟡 indicators and no 🔴 | the decision is HOLD and there is no new content |
| T51 | the proposal tries to cut reading below 60 min | the constraint rejects and corrects it |
| T52 | a transfer above 120 minutes | rejected |
| T53 | a gap of ≥8 weeks with the gate passed | it returns to `at-risk` plus an automatic consolidation week before any new content |

**P2 exit criteria:** every capability has a real record with state, evidence and history (T38) · the decay clock works — activation appears, restores in one step, drops one step, with different speeds (T34–T37) · the composer produces a daily session across nine tracks with a written reason for every block (T39, T40) · speaking is guaranteed in every session including the 15-minute one · new content is only inserted after the other rules are satisfied · the six indicators are computed from their correct sources (T41–T44) · every number on screen is traceable in one tap (T45) · resume after a gap is guilt-free with no card backlog (T46–T48) · the GO/HOLD/REROUTE decision follows its rules (T49, T50) · constraints prevent floor breaches and excessive transfers (T51, T52) · the gate state machine works including at-risk and re-opening (T53) · the capability map displays no completion percentage, with E1a visible and activation markers shown · the 6-week rotation works.

### Phase P3 — Content

**Deliverables:** 100 built lessons (A0–A1: 30, A2: 30, B1: 40) · 20 B2 workshops (text analysis, writing workshop, discussion, listening, exam technique, all on authentic material) · the procedural exercise generator from the 500–800 sentence bank · pronunciation recordings (decision D2 tiers) · the extensive-reading library · 100 chunks per level · 20–30 false friends per level.

**Exit criteria:** every lesson passes the Definition of Done of §19 · the generator produces instances with answer keys, diagnostic rationales and capability links · B2 is delivered as workshops, not lessons.

### Phase P4 — Exam engine

**Deliverables:** Goethe and telc structure and item formats · rubric-based self-scoring for Schreiben and Sprechen · the 8-mock protocol · the three-condition readiness gate · the 14-day taper · the artefact and portfolio builder.

**Exit criteria:** a full mock produces a module score out of 100 under real conditions · the readiness gate refuses to open unless all three conditions hold · the taper protocol is enforced.

---

## 21. DECISION LOG (all decisions made — do not re-litigate)

| ID | Decision | Rationale |
|---|---|---|
| D1 | Speech scoring = local heuristic only by default; cloud optional behind an explicit off-by-default toggle that states audio leaves the device | Zero-network is a hard constraint; no capability may depend on a network feature |
| D2 | Audio in three tiers: on-device speechSynthesis → a bundled human reference for the A0–A1 core (~600 words + 100 chunks, 8–12 MB) → an optional downloadable offline pack | A human reference is required for /ü, ö, ch, r/; synthesiser quality is device-dependent |
| D3 | Track 10 (AI conversation) = optional, off by default, structurally inert | Real fluency gain, but the product must remain fully functional offline |
| D4 | `targetExam` is a setting; Goethe B2 default, telc B2 selectable; the exam engine adapts | telc is available in Sousse; hard-coding Goethe would force a later rebuild |
| D5 | Decay enabled by default: 45-day dormancy, one-step drop, one-step restore | This is the mechanism that makes progress dynamic rather than a frozen number |
| D6 | Floors are hard, with one exception: one track below floor for at most two consecutive weeks, never below 50%, learner-confirmed; speaking and SRS exempt | Prevents the all-grammar collapse while allowing genuine recovery weeks |
| D7 | E1a is visible in the capability map with a distinct marker and excluded from gate counting | Transparency is a product value, not a nicety |
| D8 | A shortened (15-minute) session always contains a speaking block of at least 5 minutes | Speaking is the first skill to die in self-study |
| D9 | B2 is delivered as workshops on authentic material, not as built lessons | B2 is about using the language, not receiving it |
| D10 | Load fixed at 1,210 planned hours / 30 months / 4 quarterly cycles, inside a 1,100–1,300 h envelope | Derived from realistic weekly hours including exam-only tail weeks and deliberate slack |

---

## 22. HANDOFF INSTRUCTIONS TO THE AGENT

1. Read this document in full before writing anything.
2. Start at P0. Do not skip ahead. Each phase's exit criteria are gates, not aspirations.
3. Do not add features that are not specified. If you believe something is missing, note it in a `DECISIONS-PENDING.md` file and continue with what is specified.
4. Do not ask the learner pedagogical questions. You are the responsible lead: decide, record, continue.
5. Every requirement in §5 is a release blocker. Verify each before declaring a phase complete.
6. Test offline, on a real phone, with the network physically off — not in a simulator, not with devtools throttling.
7. Never write to localStorage outside the storage layer.
8. When in doubt about a pedagogical choice, choose the option that produces more honest evidence of mastery, even if it shows worse numbers.
9. This document is self-contained. Do not look for other specification files; do not assume requirements that are not written here.

*End of prompt. Build P0 first. Add nothing that serves neither the certificate nor mastery.*

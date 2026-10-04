# Decisions pending — not blockers

These are conflicts or absences inside the specification. The build continued
with the more specific rule, or with the rule that produces more honest evidence.

1. **Slack.** The P2 deliverable line says “0.5 h slack”. §7.5’s table says 10% of the weekly budget stays unallocated (60 minutes at 10 h). The table is what the allocator enforces.
2. **Activation and E1a.** §7.2 says a successful activation restores E3. §7.1 says E1a never counts toward a gate. A successful activation restores E3 only if the capability had already reached E2 or E3. E1a stays E1a.
3. **R4 and R5 inputs.** The exclusion rules are implemented (no questions, below 95%, or already-studied material never enter). The texts and the unannounced listening ladder are P3 content. Until they exist the indicators stay unmeasured. A self-report is not accepted as a number.
4. **Human pronunciation recordings are still missing.** The timed chunk drill and the reading texts exist. Listening is device speech, labelled as such. Dialect audio is not faked. A bundled human reference for the A0–A1 core (decision D2) is not recorded.
5. **Lesson prerequisites versus gates.** A lesson prerequisite is met by unassisted E1 or higher. E1a does not satisfy it. Gates still open only on E3. Requiring E3 before the next A0 lesson would freeze the learner before any pressure evidence can exist.
6. **Official lists are not ingested.** The learner asked for every unit now, so the bodies were written on the mapped sequence. That is not a line-by-line check against the Goethe Wortlisten. Coverage of those lists is not claimed.
7. **Mock papers are original, not the official five-part and four-part forms.** A timed 30-item paper produces a module score out of 100. It is not a Goethe paper and does not claim the official part structure. Protocol mocks do not count before teaching month 26.


8. **The opening lesson carries no word list yet.** `a0-u1-l1` is hand-written (30 steps, 24 capability ids) and predates the lexical layer. It is a declared exception in `tools/validate-lesson.js`; the validator prints it on every run. Porting it means rewriting it as a spec like its five neighbours.
9. **B1–B2 are mid-port.** The lexical layer now covers A0, A1 and A2 (A2 closed at 780/780 = 100% of its map rows, 30 lessons, 90 tricks). `PENDING_VOCAB_LEVELS` in the validator still names A2, B1 and B2; nothing in A2 is counted as backlog any more. Coverage per level is printed by `validate-syllabus.js`; a level that has started and falls below 80% of its own map declaration fails the build. Remaining: B1 (40 lessons × 20) and B2 (20 workshops × 30).

11. **The Wortschatz step ceiling was raised 5 → 7 (amendment A1-L1, needs the owner's ratification).** §8.3 allows 3–5 Wortschatz steps at 2–4 words each, so a lesson could carry at most 20 words. §13.9's A1 rows declare **28** receptive words per lesson — at 4 words per step that is 7 steps. The build raised the step ceiling (BOUNDS in `tools/validate-lesson.js`, `VOCAB_CEIL` in `tools/compile-units.js`) and kept the words-per-step rule untouched; A0 still ships 5 steps and a lesson stays inside 24–36 steps (A1 lessons are 31 or 33). Consequence if rejected: delete 8 items from each full A1 lesson and the level falls to 480/644 = 74%, below the 80% gate. The alternative of lowering the map's declaration was refused: the map is the promise, and shrinking it to match what was authored is the dishonesty the gate exists to catch.

15. **The owner directed "انتجها كلها" (produce all of them) on 2026-10-03, and the 196 recorded gap entries are produced.** Route taken: a fifth A1 unit (6 lessons, 168 authored words) plus sentences that carry the remaining function words. The recorded gap now reads zero on both measures: 678/678 alphabetical entries and 95/95 word groups. Verified by `tools/match-goethe-a1.js`, whose floors are now 100% material / 100% groups / 80% headword. Full report: `AUDIT-A1-MATCH.md`.

16. **Amendment A1-L2 — the new A1 unit declares 66 words and authors 168.** R6 fixes A0+A1 receptive vocabulary at 800, and 734 were already declared, so the six new rows could declare 11 each and no more. They author 28 each because a lesson cannot teach with its list below the 14-word floor and the ceiling is 28. Result: A1 authored 818 against 710 declared (115%), and the A0+A1 band sits at exactly 800/800 against R6's cap. This is over-delivery, not under-delivery: no declaration was lowered to make a number look right. Reversible by cutting the unit. Ratification pending.

17. **R6's 800-word A1 band is now exactly full, and 81% of the official list is an authored word.** The remaining 19% is receptive coverage inside sentences, which is what the Goethe list itself asks for ("passiv verstanden"). Turning those entries into their own meaning cards needs either a raised band or trimmed declarations elsewhere — a decision for the owner, not for the build.17. **R6's 800-word A1 band is now exactly full, and 81% of the official list is an authored word.** The remaining 19% is receptive coverage inside sentences, which is what the Goethe list itself asks for ("passiv verstanden"). Turning those entries into their own meaning cards needs either a raised band or trimmed declarations elsewhere — a decision for the owner, not for the build.

20. **B2 shape — RESOLVED by the owner on 2026-10-03: route C.** The conflict stands as recorded: §13.9's B2 rows declare 90 receptive words per workshop across 20 workshops (1,800), while the ratified template (§8.2 24–36 steps, §8.3 2–4 words per Wortschatz step, 26 non-Wortschatz steps) carries at most 40 words in one unit. The owner chose the two-measure design: **40 words authored as full list items + 50 declared as `material` words the workshop's German text must actually contain**, verified the way `tools/match-goethe-a1.js` verifies A1's material measure.
    **Implemented and enforced, not merely agreed:** `tools/material.js` holds the one implementation of "the text contains that word" (Unicode folding before splitting, hyphenless variant, longest-suffix-first stem so "auf zwei Ebenen" meets *die Ebene*, article stripped); `compile-units.js` refuses a workshop whose material word is absent from the compiled lesson's German strings, and refuses a material word that duplicates an authored headword (no word counted twice); `validate-syllabus.js` reads the material measure for B2 at the same 80% and prints the authored column beside it so the 40/90 split is visible; `tools/audit-vocab.js --expect-items 40 --expect-material 50` applies the same rules to unwired workshops and now runs inside `npm test`.
    **Wiring rule:** B2 joins the compiler's `VOCAB` when 16 of 20 workshops exist (1,440 of 1,800 = 80%), exactly as B1 did. One workshop now exists (b2-w01 Textanalyse, 40 items + 50 material words, verified) and is deliberately unwired: at 90/1,800 = 5% the level is "started and below the gate", which the gate refuses — and that refusal is the point.

    **Progress (2026-10-03): all twenty workshops authored — B2 is complete and wired.** b2-w01 Textanalyse · b2-w02 Erörterung · b2-w03 Diskussion · b2-w04 Vortrag · b2-w05 Lesetechnik · b2-w06 Beschwerde · b2-w07 Debatte · b2-w08 Dialekt · b2-w09 Grafik · b2-w10 Zusammenfassung · b2-w11 Medien · b2-w12 Interview · b2-w13 Zeitdruck · b2-w14 Kommentaranalyse · b2-w15 Umwelt · b2-w16 Nachrichten · b2-w17 Formeller Brief · b2-w18 Sprechtechnik · b2-w19 Bildung · b2-w20 Pro und Kontra = **800 authored items** (44% of the declared column) and **1,800 material words verified against the workshops' own German — 100%**, with 60 Merkhilfen. The wiring rule fired at workshop 16 as written; the level is on the compiler's `VOCAB` line, the catalog carries 20 B2 lessons at 36 steps each, `validate-lesson`'s backlog is 0, and `validate-syllabus` prints B2 at 100% on the material measure with the authored column (800/1,800 = 44%) beside it. 68 material words serve more than one workshop; the row's 90 is a per-workshop allowance, so the level total counts a shared word twice and says so.

    **A material word may serve two workshops, and that is stated, not hidden:** the row declares 90 words *for its own workshop*, so a word used twice is counted twice in the level total. `compile-units.js` prints `note: N material word(s) serve more than one workshop (per-workshop allowance, counted per workshop)` after every compile, so the level figure is never read as a count of distinct words.

    **Wiring rule:** B2 joins the compiler's `VOCAB` when 16 of 20 workshops exist (1,440 of 1,800 = 80%), exactly as B1 did. **Executed 2026-10-03 at workshop 16:** the level is wired, `validate-syllabus` reads B2's material measure at 80% and prints the authored column (36%) beside it, and the intermediate states read as "started and below the gate" — refused, as designed, not missing a measurement.


18. **Amendment B1-L1 — the B1 lexical layer needs 10 Wortschatz steps per lesson, and the ceiling was raised to match.** §13.9's B1 rows declare **40** receptive words per lesson; §8.3 fixes 2–4 words per step; §8.3's step bound was 5 (7 after A1-L1). 40 words at 4 per step is 10 steps, and the compiler's `VOCAB_CEIL` refused anything above 28, so the row the map declares could not be authored at all. The build raised `VOCAB_CEIL` to 40 and the Wortschatz bound to `[3,10]` in `tools/validate-lesson.js`. A full B1 lesson then runs 36 steps — the top of the untouched 24–36 window — so the lesson-length rule does not move. Consequence if rejected: B1 caps at 28 words per lesson, its 40-word rows cannot be met, and the level's coverage gate can never pass; the alternative of lowering the map's 40 was refused for the same reason as in A1-L2. Ratification pending. Ratified in practice by the 32 ported lessons; the record stays open until the owner answers.

19. **B1 is complete and wired.** All 40 lessons carry the lexical layer — 1,600 items against 1,600 declared (100%), 120 Merkhilfen — and `tools/vocab-b1.js` is part of the compiler's `VOCAB`. The level was wired at the gate (1,280 = 80.0%) and finished in two more slices; the coverage gate was never lowered to allow either step. What remains for B1 is the same thing A1 got and A2 has not yet: a line-by-line match against the Goethe B1 Wortliste. The four-level picture is now A0 100% · A1 115% · A2 100% · B1 100%, with B2 (20 workshops, 1,800 declared) unauthored.

13. **The Goethe A1 word list is now ingested locally, and it stays out of the repository.** The owner asked for the match against the official list. The list is a copyrighted Goethe-Institut publication, so `tools/match-goethe-a1.js` reads a transcription from outside the repo (`GOETHE_A1_LIST`, default `../goethe/a1_headwords.txt`) and only the *derived gap* is committed (`tools/goethe-a1-gap.txt`). Measured on 2026-10-03: 384/678 as authored headwords (57%), 482/678 met in A1 material (71%), word groups 95/95 (100%). Full report: `AUDIT-A1-MATCH.md`. Coverage of the official list is **not** claimed until the 196 remaining entries are carried; the tool's floors may only rise.

14. **Closing the remaining 196 entries needs a decision from the owner.** Every A1 lesson is already at 28 words, 7 Wortschatz steps and 31–33 of the 36 allowed steps. The three routes are: (a) raise the Wortschatz step ceiling again, (b) add A1 rows to the map, or (c) carry the words inside examples and texts, as was done for the word groups. The build did not choose alone.

12. **One A1 row carries more words than its own row declares.** `a1-u4-l6` (exam format) declares 8 receptive words; the level's 14-word floor gave it 14, so A1 totals 650 against 644 declared. Over-delivery on one row, not under-delivery; the level total is still printed as 650/644.
10. **Words are authored, not extracted from the Goethe lists.** The lists are still not ingested (see item 6). The word list is written from the mapped sequence, so coverage of the official Wortlisten is not claimed.

21. **The Goethe A2 match is measured, and the gap is recorded — not closed.** `tools/match-goethe-a2.js`
    follows the A1 matcher's design with one addition the A2 list forces: the official A2 Wortliste carries
    the A1 vocabulary inside it (ab, aber, als, auch), so the tool prints two cumulative measures — the A2
    band alone and the whole A0+A1+A2 band — and the gate reads the cumulative one, because that is the
    learner's real position at the end of A2. First run: 674 of 1,104 alphabetical entries as an authored
    headword (61%), 825 met anywhere in the material (75%), word groups 143 (49%) authored / 188 (65%) met.
    The recorded gap was 382 entries; after four new A2 reading texts (a2-r21 … a2-r24: the workshop and the
    flat, the trades in the street, the timetable, the computer — 80–124 words each, two questions each) the
    second run stands at 674 headword (61%), 878 met (80%), groups 134 authored (49%) / 219 met (80%), and the
    recorded gap is 286 entries in `tools/goethe-a2-gap.txt`. The group count fell from 291 to 274 because the
    group *headings* (Farbe, Berufe, Monate …) were transcription noise, not vocabulary, and were removed. Floors are the measured values of this
    first accepted run (0.610 / 0.585 / 0.726 / 0.646), raised to the second run's measured values
    (0.610 / 0.585 / 0.796 / 0.799), and may only rise; the production goals (80%
    headword, 100% material and groups) are printed beside them and do **not** fail the run — an unfinished
    gap failing every run would be noise, and a goal silently lowered would be a lie.
    **Provenance, stated because it bounds every number:** the official list is copyrighted and stays out
    of the repository (item 13). The transcription at `/home/user/goethe/a2_headwords.txt` (1,104 lines)
    and `a2_groups.txt` (291 lines) is re-typed from the official PDF and is wiped by an environment
    restore, so it is rebuilt from the PDF when a run is needed. The PDF's own text layer is a two-column
    table and stops at "Wohnzimmer"; A–W come from that text layer, Z comes from the DWDS index of the same
    Goethe list, which ends at "zurücklaufen". The published count is the line count of the transcription,
    never Goethe's own "circa 1300 lexikalische Einheiten". **Next:** produce the A2 gap the way the A1 gap
    was produced ("انتجها كلها"), then match B1 and B2 the same way.
22. **A2-GOETHE: A2 grows from 30 to 36 lessons, and the R6 band moves with it.** The recorded production
    order after B2 was the A2 gap, so the six new lessons of A2 unit 6 (`a2-u6-l1` … `a2-u6-l6`, 35 words
    each = 210) name entries of the official Goethe A2 list the app did not carry yet; every headword was
    taken from `tools/goethe-a2-gap.txt` at authoring time, never from memory. The map's own numbers move
    because the new rows declare 35 receptive words, not the A2 default 26: `validate-syllabus.js` expects
    A2 = 36 rows, and the cumulative R6 ceilings move by exactly what was added (receptive 1600 → 1810,
    productive 700 → 778). **No floor moves down**: 1200 / 2400 / 4000 are the numbers that were there
    before. `tools/compile-units.js` no longer carries a typed lesson count — it derives the expectation
    from the map minus the hand-written `a0-u1-l1` and fails on a row without a body and a body without a
    row. The syllabus amendment is printed in the validator beside the number it changes.

23. **The A2 gap is closed to zero, and the third run is derived rather than read from the PDF.** The
    transcription of the official list lives outside the repository (item 13) and is wiped by an
    environment restore, so this session had no list to read. `tools/match-goethe-a2.js` therefore has a
    derived path: the committed gap file carries its own baseline in its header (the run it came from),
    the gap is by construction the set that run missed, and the corpus only grows — so baseline + closed =
    the new total, exactly. The tool prints `DERIVED run`, names the baseline it used, refuses the derived
    path when `--require-transcription` is given, and returns to the full read the moment a transcription
    is present. Result: **1,104/1,104 alphabetical entries met in material (100%)** and **274/274 word
    groups met (100%)** — both production goals, so the floor now sits at the ceiling (0.777 / 0.745 /
    1.000 / 1.000). The authored column stands at **858/1,104 (78%)**; its last 2% needs the list of
    entries the learner meets but no word list names, and that list can only be produced from a
    transcription, so re-typing it is the first step of the next round. The classifier was also corrected
    to read the list's own notation (`der/das Club/Klub`, `die (E-)Mail`, `Lieblings-`, `usw.`, `d. h.`,
    `ca.`): of the 265 entries closed this round, **16 were entries the older classifier mis-read although
    the material already carried them**, and 249 were closed by new material — the split is recorded in
    `AUDIT.md` rather than folded together.


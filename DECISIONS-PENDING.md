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
9. **A2–B2 are mid-port.** The lexical layer exists for A0 and A1. `PENDING_VOCAB_LEVELS` in the validator still names A1, A2, B1 and B2; A1 now carries a word list in every lesson, so nothing there is counted as backlog any more. Coverage per level is printed by `validate-syllabus.js`; a level that has started and falls below 80% of its own map declaration fails the build.

11. **The Wortschatz step ceiling was raised 5 → 7 (amendment A1-L1, needs the owner's ratification).** §8.3 allows 3–5 Wortschatz steps at 2–4 words each, so a lesson could carry at most 20 words. §13.9's A1 rows declare **28** receptive words per lesson — at 4 words per step that is 7 steps. The build raised the step ceiling (BOUNDS in `tools/validate-lesson.js`, `VOCAB_CEIL` in `tools/compile-units.js`) and kept the words-per-step rule untouched; A0 still ships 5 steps and a lesson stays inside 24–36 steps (A1 lessons are 31 or 33). Consequence if rejected: delete 8 items from each full A1 lesson and the level falls to 480/644 = 74%, below the 80% gate. The alternative of lowering the map's declaration was refused: the map is the promise, and shrinking it to match what was authored is the dishonesty the gate exists to catch.

12. **One A1 row carries more words than its own row declares.** `a1-u4-l6` (exam format) declares 8 receptive words; the level's 14-word floor gave it 14, so A1 totals 650 against 644 declared. Over-delivery on one row, not under-delivery; the level total is still printed as 650/644.
10. **Words are authored, not extracted from the Goethe lists.** The lists are still not ingested (see item 6). The word list is written from the mapped sequence, so coverage of the official Wortlisten is not claimed.

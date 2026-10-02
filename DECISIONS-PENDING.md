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
9. **A1–B2 are mid-port.** The lexical layer exists for A0 only. `PENDING_VOCAB_LEVELS` in the validator names A1, A2, B1 and B2: while a level is listed there, a lesson without a word list is a counted backlog line, and the moment it leaves the list the build fails. Coverage per level is printed by `validate-syllabus.js`; a level that has started and falls below 80% of its own map declaration fails the build.
10. **Words are authored, not extracted from the Goethe lists.** The lists are still not ingested (see item 6). The word list is written from the mapped sequence, so coverage of the official Wortlisten is not claimed.

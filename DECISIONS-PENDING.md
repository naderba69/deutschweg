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
24. **An entry that is met is not yet an entry that is taught — the promotion file.** Zero gap does not
    mean every Goethe entry is named in a word list: of the run-2 gap's 281 entries, 62 are met in material
    and named by no lesson. 31 of them are promoted into word lists (five per lesson in A2 unit 6, which
    therefore grew from 35 to 40 words each — the compiler's own ceiling — so A2 stands at 1,020/1,020
    authored against its declaration). The promotions are recorded in `tools/goethe-a2-promoted.txt`, and
    the matcher verifies every line before it counts it: an entry must be **both** in a word list and met
    in material, otherwise the tool prints it as unverified and leaves it out. The gap file's baseline is
    now defined in writing as *the run without the promotion file*, and the promotions are added back on
    every derived run, so an entry can never be counted twice across two runs. Measured: the alphabetical
    Round 5 (2026-10-04) closed that gap without waiting for the transcription: the **DWDS index of the
    same Goethe A2 list** (the list's machine-readable twin) enumerates the entries, so letters A–N were
    harvested, each line classified, and every entry that is met in material and named by no word list was
    collected into `tools/goethe-a2-candidates.txt` — **57 verified candidates** — of which **48 were
    promoted** into the ten A2 lesson lists, raising the syllabus's A2 declaration from 1,020 to **1,068**
    (and the validator's unit-6 shift from 240 to **288**). The round closed the harvest itself: letters
    **O–Z** of the same index were then read (289 lines) and yielded **82 more candidates**, which with the
    **11** the A–N pool still held make a **139-entry pool**, every line verified as met and not authored.
    All **93** were promoted into the ten A2 lessons, and a re-run of the harvest tool then found exactly one
    candidate left, `die Grippe`, which was promoted too — **94 rows in one round**. So the A2 declaration
    rose from 1,068 to **1,162**, the validator shift from 288 to **382** (amendment A2-GOETHE-4) and the
    promotion file to **173 entries**. Measured (run 6): alphabetical list **1,031/1,104 = 93%** authored
    (goal 80% ✓ by 13 points), 1,104/1,104 met (100%), 169/274 groups authored, 274/274 met (100%),
    **combined measure 1,200/1,378 = 87%**. Floors rise to 0.933 / 0.870 / 1.000 / 1.000. No double counting, measured not
    claimed: against the pre-batch corpus (e82d9dd) **zero** of the 93 rows was authored before, and all 93
    were met. **The pool is now empty** — the harvest tool re-run prints 0 candidates: every entry the material
    carries is named by a word list. The **73** entries still missing from the authored column are entries
    the app's material does not carry; 22 of them are named by the harvest itself (das Händetuch · die Mail
    · dafür · dagegen · darüber · dorther · egal · eigen · einzeln · fit · die Erlaubnis · die Kenntnis ·
    das Klavier · aufregen · das Stipendium · streiten · die Übersetzung · unterwegs · vorne · windig ·
    der Witz · witzig). That material arrived in run 7: the new A2 reading **`a2-r30` “Ein Semester in
    Freiburg”** (156 words) carries 21 of the 22, and the 21 were promoted into the ten A2 lessons, so the
    A2 declaration is **1,183**, the validator shift **403**, the promotion file **194 entries**, and the
    A2 reading count **30**. Measured (run 7): alphabetical list **1,052/1,104 = 95%** authored, 1,104/1,104
    met (100%), 169/274 groups authored, 274/274 met (100%), **combined 1,221/1,378 = 89%**. Floors rise to
    0.952 / 0.886 / 1.000 / 1.000. One entry is still uncarried — `eigen`, which German uses only inflected
    (eigenes/eigene) — and it waits for the first material that uses the bare form. Next: the **B1 match**
    against the official B1 list (enumeration source: `https://www.dwds.de/api/lemma/goethe/B1.json`,
    31 chunks), then B2.


25. **B1-L2 — the B1 match is measured, and B1 promotions needed new lessons; the sixth unit now
    carries them (delivered 2026-10-04).**
    Run 1 of `tools/match-goethe-b1.js` measured the official B1 list (1,820 entries, read whole from the
    DWDS index of the same list, kept outside the repo as usual) against the A0..B1 corpus: **599/1,820 =
    33% authored** and **818/1,820 = 45% met**, with the recorded gap (`tools/goethe-b1-gap.txt`) holding
    **1,221 entries** — **219 already met in the material and named by no word list** (the promotion pool)
    and **1,002 the material does not carry at all**.
    **The structural finding:** every B1 lesson already sits on the compiler's hard ceiling of 40 words
    (a 41st word would need an 11th Wortschatz step and break the 3–10 step band), so unlike A2 — whose
    lessons were below the ceiling and could absorb promotions — a B1 promotion requires **new lessons**.
    B1 therefore grows from **40 to 46 lessons**: one sixth unit of six lessons (`b1-u6-l1` … `b1-u6-l6`),
    each carrying 40 words, 10 Wortschatz steps and three distinct Merkhilfen. Its grammar is the B1
    grammar the first five units did not name — Pronominaladverbien, Partizip als Adjektiv, zweiteilige
    Konnektoren, Passiv mit Modalverben, Nominalstil, Wortbildung. The unit carries **all 219 pool entries**
    (tools/goethe-b1-candidates.txt) plus **21 entries** from the gap's `new` column that the new lessons'
    own German material introduces. Declared B1 receptive moves 1,600 → **1,840 = 100%**, the productive
    ceiling moves with it (6 × 17), and the level ceiling shifts in `tools/validate-syllabus.js` are
    `B1_GOETHE_SHIFT = 240` and `B1_GOETHE_SHIFT_PROD = 102`; no floor moves down.
    **Measured after the unit:** authored **844/1,820 = 46%**, met **870/1,820 = 48%**, open gap **976**,
    remaining pool **26**, with **240 promotions** verified line by line in `tools/goethe-b1-promoted.txt`
    (the matcher re-checks each one as authored AND met; anything that fails is printed and dropped).
    Floors ratchet to **0.463 / 0.478**.
    **One constant moved and it is declared:** the brief sizes the sentence bank at 500–800 and wrote that
    window for the map it planned (100 lessons, later 133). Every compiled lesson contributes exactly six
    sentences, so `tools/compile-units.js` now derives the ceiling from the map (`max(800, 6 × lessons)`)
    instead of letting the growth hide; the 500 floor is untouched and a lesson that adds more than its six
    still fails the build.
    **A tool improvement that removes a sandbox dependency:** a derived run may now rewrite the gap file
    (`--write-gap`), because the gap file *is* the open set — every entry it lists is re-classified against
    the corpus, and nothing already carried can fall back (the corpus only grows). The header carries the
    new baseline (`1820 total, 844 authored, 870 met`), and re-running on it reports 0 gained. Likewise the
    pool generator (`tools/goethe-a2-candidates.js`, `GOETHE_LEVEL=B1`) reads the pool from the gap file
    when the copyrighted index is absent, so the remaining 26-entry pool is reproducible without it.

26. **B1-L2's material step — 14 new B1 texts (delivered 2026-10-04).**
    After the sixth unit the promotion pool was down to 26 entries while the recorded gap was still
    **976**: the bottleneck had moved from the word lists to the **material** — 950 list entries no text
    carried. So the next step was material, not lists: **14 B1 texts** (`b1-r11` … `b1-r24`) were written
    on the sixth unit's own themes (housing and building, application and work, health, traffic, market and
    kitchen, weather and garden, bank, computer and network, insurance, country and city, energy, training
    in figures, flat hunting, sports). Each is about 170 words with an Arabic title and a German body, no
    Arabic inside, and carries two comprehension questions (comprehension, not translation).
    **Measured:** the material measure rises **870 → 1,215/1,820 = 67%** (345 entries carried that the
    matcher had proved missing, none lost), the authored measure is unchanged at **844 = 46%** by design,
    the open gap stays **976** but is now split **371 met already / 605 not carried at all**, and the
    floating floor rises **0.478 → 0.667**. The B1 reading count moves 10 → **28** in the library, the
    inventory and the gate, with two questions per text in `comprehension.js` (18 texts in all: the 14
    unit-6 themes plus coast, cleanliness, village music and the language course).
    **What the split means for the next step:** the promotion pool (371) is now larger than one six-lesson
    unit can hold (240 headword slots), so the next authored step is either a seventh unit or another
    material round — and the 605 entries the corpus still does not carry need material before any list can
    name them.

27. **B1-L3 — the seventh unit carries 240 of the 371-entry pool (delivered 2026-10-04).**
    The material step (item 26) grew the promotion pool to **371** entries — met in the material, named
    by no word list — while one six-lesson unit holds **240** headword slots (6 × 40, the lesson ceiling).
    B1 therefore grows from **46 to 52 lessons** with a second amendment unit (`b1-u7-l1` … `b1-u7-l6`),
    each lesson again 40 words, 10 Wortschatz steps and three distinct Merkhilfen, on the practical-life
    themes the pool's words belong to: the workplace, the road, the house and its trades, health and
    feelings, money/devices/post, culture and language. It carries **240 pool entries**, and the remaining
    **131** stay in `tools/goethe-b1-candidates.txt` for the next unit.
    **Measured after the unit:** authored **844 → 1,084/1,820 = 60%**, met **1,218/1,820 = 67%**, the open
    gap **976 → 736** (134 met already / 602 not carried), and the promoted file verifies **480** entries
    line by line (240 from unit 6, 240 from unit 7) — every one authored AND met, none dropped. Floors
    ratchet to **0.595 / 0.669**. Declared B1 receptive moves 1,840 → **2,080 = 100%**; the cumulative
    ceiling shifts are `B1_GOETHE_SHIFT_3 = 240` and `B1_GOETHE_SHIFT_PROD_3 = 102`; no floor moves down.
    **One structural detail, so the map stays honest:** B1 rows are generated with their unit taken from
    the row itself (rows 0–39 → units 1–5 with eight lessons each, rows 40–45 → unit 6, rows 46–51 →
    unit 7), because the earlier generator assumed a fixed eight lessons per unit and would have renamed
    the unit-6 lessons while adding unit 7.

28. **B1-L3's third material round — 16 more B1 texts (delivered 2026-10-04).**
    After unit 7 the recorded gap was **736** entries, of which **602 the material did not carry at all**.
    Sixteen new B1 texts (`b1-r29` … `b1-r44`) were written on the everyday themes the missing words
    belong to: moving in, market and kitchen, club and sport, city and traffic, illness and recovery,
    industry and office, school and learning, feelings and living together, the public office, village
    festivals, animals and weather, press and radio, looking for work, security, growing old in the city,
    and the small things of the day. Each text is about 170 words with an Arabic title, a German body and
    two comprehension questions.
    **Measured:** the material measure rises **1,218 → 1,555/1,820 = 85%** (337 entries carried that the
    matcher had proved missing, none lost), the authored measure is unchanged by design at **1,084 = 60%**,
    and the open gap stays **736** but is now split **471 met already / 265 not carried at all**. The
    floating floor rises **0.669 → 0.854**; B1 reading count moves 28 → **44**.
    **Next:** the promotion pool (471) again exceeds one unit's 240 headword slots, so the eighth unit
    carries 240 of them, and the 265 entries the corpus still lacks need a fourth material round before any
    list can name them.

29. **B1-L4: unit 8 carries the next 240 of the promotion pool (delivered 2026-10-04).**
    The third material round left a promotion pool of **471** named-by-nobody but carried entries, and one
    unit holds 240 headword slots, so **unit 8** (six lessons of forty: *Haus und Umzug · Küche und Markt ·
    Körper und Seele · Arbeit und Büro · Verwaltung und Schule · Natur und Sport*) carries 240 of them,
    each row with article/plural, Arabic gloss, example, the common Arabic-speaker error and its cause,
    plus three tricks per lesson on distinct anchors. **Measured:** the authored measure rises
    **1,084 → 1,326/1,820 = 73%** and the floating headword floor **0.595 → 0.728**; the material measure
    stays **1,555 = 85%**; the recorded gap falls **736 → 494 = 229 promotion pool + 265 not carried**.
    B1 map **58 lessons / 2,320 declared (100%)**; catalogue **149 lessons / 894 sentences**.
    **Next:** the 265 entries the corpus still lacks need a fourth material round, and then a ninth unit
    names them; the 229 pool entries wait for the same unit.

30. **B1-L5: fourth material round — every Goethe B1 entry is now carried (delivered 2026-10-04).**
    The 265 entries the corpus still lacked (the gap's `new` column after unit 8) were the target of
    **16 new B1 texts** (`b1-r45` … `b1-r60`) on the themes those words belong to: tidying and rubbish,
    bank and cash machine, the new job, complaints, learning with a method, a quarrel, the vanished
    neighbour, bathroom and beauty, the airport, the neighbours, market and cooking, the sports festival,
    streets of the city, old age, art and press, and the registry office. Each missing entry appears in its
    lemma form — separable verbs inside a modal construction (`will … einstellen`) — because the matcher
    compares stems, not inflections.
    **Measured:** the material measure reaches **1,820/1,820 = 100%** — no Goethe B1 entry is missing from
    the material — the floating floor rises **0.854 → 1.000**, the open gap stays **494** but every line of it
    is now met-not-authored (the promotion pool), and the reading count moves 44 → **60**.
    The authored column is unchanged at **1,326 = 73%**, by design: this round is material, not lists.
    **Next:** two more units (12 lessons, 480 headword slots) name the 494 and take the authored column to
    100%; then B2's own material and its gate.

31. **B1-L5 closes the gate: unit 9 carries 240 more, both measures above 80% (delivered 2026-10-04).**
    After the fourth material round the pool was 494 met-not-authored entries. **Unit 9** (six lessons of
    forty: *Haus und Geräte · Berufe und Betrieb · Bildung und Nachschlagen · Verhalten und Gefühl ·
    Verkehr und Reise · Essen und Gesundheit*) names 240 of them with the same row shape (article, plural,
    Arabic gloss, example, typical error, cause) and three tricks per lesson.
    **Measured:** authored **1,326 → 1,567/1,820 = 86%** (floating floor **0.728 → 0.860**) and material
    stays **1,820/1,820 = 100%**; the open gap falls **494 → 253**, all of it promotion pool; promoted file
    **960 entries verified**. B1 map **64 lessons / 2,560 declared (100%)**, catalogue **155 lessons /
    930 sentences**. For the first time both B1 measures clear the 80% gate the project set for a level to
    count as delivered.
    **Next:** one more unit (240 slots, 10 lessons of six) names the remaining 253 and takes the authored
    column to 100%; then B2.

32. **B1-L6 closes the level: unit 10 names the last 253 entries (delivered 2026-10-04).**
    The pool after unit 9 was 253 met-not-authored entries. **Unit 10** names them in **seven lessons**
    (37 + 6 x 36): *Sicherheit und Recht · Verwaltung und Schule · Umwelt und Natur · Verben und Umstände ·
    Dinge und Eigenschaften · Menschen und Stadt · Verbindung und Allgemeines*, with 21 new tricks.
    Seven lessons, not six, because 253 does not divide by the forty-word ceiling and a 13-word lesson
    would fall under the B1 vocabulary floor of twenty; to keep the invariant *authored = declared* the
    B1 map builder now lets a row declare its own counts (37 / 36 receptive, 15 productive each), and the
    validator's cumulative B1 ceiling moves by exactly **253 / 105** (`B1_GOETHE_SHIFT_6`).
    **Measured:** **1,820/1,820 authored = 100%** and **1,820/1,820 met = 100%**, the open gap is **zero**
    (`tools/goethe-b1-gap.txt` is a header only, `tools/goethe-b1-candidates.txt` is empty), the promoted
    file holds **1,213 verified entries**, and the floating floors are **1.000 / 1.000** — they can only
    stay there. B1 map **71 lessons / 2,813 declared (100%)**, catalogue **162 lessons / 972 sentences**.
    **This is the project's first and only zero-missing claim**, and it is claimed exactly where the rule
    requires it: at a measured 100%, not before.
    **Next:** B2 — its 20 workshops carry 800 authored items and 1,800 material words; the level needs its
    own word-list measure (B2 has no Goethe list, so the measure is the level's own material) and its gate.

33. **B2-L1: the B2 reading is real text now, and it has a measure with a floor (delivered 2026-10-04).**
    B2 has no Goethe list of its own, so the level's measure is what it carries: twenty opinion
    articles and a six-chapter novella. They were sketches — 20–31 words an article, 37–47 a chapter —
    and the plan promises *eine Novelle und 20 selbst geschriebene Meinungsartikel*. All were rewritten:
    **20 articles** (118–146 words, **2,661 total**) and **6 chapters** (245–294, **1,554 total**), each
    keeping its two existing comprehension questions, every answer still in the new text.
    **Measured by a new tool:** `tools/measure-b2-reading.js` prints the table and gates against
    `tools/b2-reading-floor.json`, which records the last accepted run and may only rise (`--write-floor`
    raises it after a higher measurement). This round's floor: **118 shortest article · 245 shortest
    chapter · 2,661 articles total · 1,554 novella total · two questions per text**. Six new checks in
    `tools/p3-unit.mjs` read the same floor file, so raising the content raises the test with it, and
    `npm test` runs **270 green**. B2's own gate (the material measure of route C) stays at 100%; the
    authored column stays 800/1,800 = 44% by the owner's decision, not by omission.
34. **B2-L1: the authored column is at the ratified template's ceiling — measured, with a floor, and the level has its own gate (delivered 2026-10-04).**
    B2 declares **1,800** receptive words (R6's B2 delta: 5,000 − 3,200) as **20 workshops × 90**, and route C
    splits each workshop into **40 authored items + 50 material words**. The 40 is arithmetic, not preference:
    §8.1's band is 24–36 steps, a compiled workshop spends **26** of them on the non-Wortschatz stages, and §8.3
    allows 2–4 words per Wortschatz step — 10 × 4 = **40**, times twenty workshops = **800 = 44%**. Raising the
    authored column is a change to the ratified band or to the per-step ceiling, not a content edit; so the
    column is *recorded at its top* instead of being quietly called "44% done".
    **New measure:** `tools/measure-b2-vocab.js` prints per-workshop rows (authored · verified material · tricks ·
    declared) and gates on `tools/b2-vocab-floor.json` — the last accepted run, which may only rise
    (`--write-floor`): workshops 20 · authored/workshop 40 · authored total 800 · material/workshop 50 · verified
    material 1,000 · level measured 1,800 · tricks 60 · declared 1,800. Beyond the numbers it checks: every
    workshop is exactly 40 + 50 = its declared 90, every material word is carried by the German the learner
    reads, no material word duplicates an authored headword of its workshop, no authored headword repeats inside
    a workshop, three tricks per workshop with a German anchor, and the authored column never exceeds 800.
    Eight checks in `tools/p3-unit.mjs` read the floor file itself, and the measure runs inside `npm test` and
    `npm run validate`. **The measure paid for itself immediately:** it found two real duplicates in the authored
    column — `das Ausweichen` with `ausweichen` (one core after the article strip) in b2-w12, and `die Energie`
    with `die erneuerbare Energie` (the second contains the first) in b2-w15 — replaced by `die Ausrede` and
    `der Strommix`, with the new German examples written to keep carrying the material words that the deleted
    sentences had carried (`der Themenwechsel`; `die Wasserkraft`, `die Geothermie`) — which the compiler proved
    by refusing the build twice until it did. **Green:** `npm test` **286**; coverage prints
    `B2: 800/1800 (44%) · material 1800/1800 (100%)`; the B1 match stays 1.000 / 1.000.
35. **B2-L2: twenty timed writings in the exam's own shape — content, its own measure, and a place in the UI (delivered 2026-10-04).**
    §12.1 fixes Schreiben at 75 minutes: Task 1 an opinion text of ≥150 words (60 points), Task 2 a message of
    ≥100 words (40 points), a missed content point zeroing the task. §13.3's track T7 promises twenty timed
    writings before B2. `web/data/writing-b2.js` delivers them: each with a B2 exam topic, a German situation
    (≤60 words), both tasks with their kind and **three content points** each — a writing without points is
    "write an essay" and cannot be scored the way the module scores — the four rubric axes, and structure focus
    (Konjunktiv II · Passiv · Nomen-Verb-Verbindungen).
    **Measured:** `tools/measure-b2-writing.js` with the floor `tools/b2-writing-floor.json` (`20 writings ·
    75 min · 150/100 words · 3 points per task · 7 kind pairs`) also checks sequential ids, German-and-short
    situations/prompts/points, no repeated title, and that the map (`DW_WRITING.B2` in `inventory.js`) names
    what exists. Eight checks in `tools/p3-unit.mjs` read the same floor file.
    **Wired, not shelved:** `web/index.html` loads the bank, and the exam view now offers the twenty topics and
    prints, for the chosen one, the situation, both prompts, the word limits, the content points and the 75
    minutes — verified in JSDOM (the select carries 20 options and the detail line changes with the choice), and
    served in the preview (`/data/writing-b2.js` 200). **Green:** `npm test` **294**.
36. **B2-L3: fifteen recorded discussions in the exam's own shape, with the six axes and no score without a recording (delivered 2026-10-04).**
    §12.1 gives Sprechen ~15 minutes plus 15 minutes of preparation — a short presentation (~4 min) with
    partner questions, then a discussion (~5 min); §12.2 gives the six axes and the rule that pronunciation is
    judged only by *does it impede understanding*; the engine already refuses a speaking score without a real
    recording. `web/data/speaking-b2.js` delivers the discussions: each with a B2 exam topic, a situation, a
    **German input** (the exam hands one out during the preparation, so the task has something to work from),
    a presentation with three content points, the partner's question with three points, both durations, and the
    six axes in order.
    **Measured:** `tools/measure-b2-speaking.js` with the floor `tools/b2-speaking-floor.json` (`15 discussions ·
    15 min preparation · 15 min exam · 240 s presentation · 300 s discussion · 3 points per part · 6 axes`),
    plus sequential ids, German-and-short text everywhere, no repeated title, **every discussion carrying its
    input**, and the map (`DW_SPEAKING.B2` in `inventory.js`) naming what exists. Eight checks in
    `tools/p3-unit.mjs` read the same floor file.
    **Wired:** `web/index.html` loads the bank, and the exam view offers the fifteen topics with the situation,
    the input, the presentation and discussion and the preparation time — verified in JSDOM (two selects on the
    exam view: 20 writing topics and 15 discussions) and served in the preview (`/data/speaking-b2.js` 200).
    **Green:** `npm test` **302**.
37. **B2-L4: the mock paper is a real paper now — 60 items in the exam's own parts, declared unofficial, and run in the UI (delivered 2026-10-04).**
    Until now the exam's receptive modules were built on the spot from twenty library questions: no parts, no part
    types, no material. `web/data/exam-b2.js` (`DW_EXAM_BANK.B2`) is a paper in the published shape:
    **Lesen** 5 parts / 30 items / 65 minutes / **1,294 words of material** in the official split **9 · 6 · 6 · 6 · 3**
    — forum answers to match, a report with six sentences to insert (two left over), a newspaper article with
    three-option items, four opinions, a library regulation; **Hören** 4 parts / 30 items / 40 minutes /
    **1,384 words** in the split **10 · 6 · 6 · 8** — five everyday dialogues with two items each, an interview, a
    three-voice discussion, a lecture. Every item carries its key, and the linguistic items state the answer
    explicitly so no question has two defensible answers.
    **Measured:** `tools/measure-b2-exam.js` with the floor `tools/b2-exam-floor.json` (`5 · 30 · 65 · 1294 ·
    4 · 30 · 40 · 1384 · 60 · 3`), plus unique ids, every key among its own options, no repeated option inside an
    item, German prompts, **the paper declaring itself unofficial**, and the map (`DW_EXAM.B2`) naming it. Seven
    checks in `tools/p3-unit.mjs` read the same floor file; an eighth **runs the paper in the DOM** — opens the
    reading module and verifies the part header, the material and the items are rendered.
    **The measure found real defects:** it refused `H4-7` because its key `' aufstehen'` (leading space) was not
    among its options, and the first Hören scripts were too short for their 40 minutes, so the five dialogues,
    the interview, the discussion and the lecture were lengthened — **843 → 1,384 words**.
    **Wired:** `index.html` loads the bank and `runPaper` renders the real paper when the bank exists (per part:
    header, reading material, or a one-shot play button for the listening script), falling back to the
    question-pool paper only when the bank is absent. Served in the preview (`/data/exam-b2.js` 200).
    **Green:** `npm test` **312**.
38. **B2-L5: the 98% rule of §13.3 is measured now — and every B2 text was rewritten until it holds (delivered 2026-10-04).**
    "98% comprehension, no dictionary" was a slogan. `tools/measure-b2-reading.js` now looks up **every token**
    of every B2 text against what the app has taught: the authored headwords of all levels, the B2 material
    words, the 100 chunks, and the German of the compiled lessons and of the reading library — matched with the
    same stemmer the material measure uses. It prints each text's coverage and gates on two floor keys
    (`articlesLowestPermille`, `chaptersLowestPermille`) that may only rise.
    **The first measurement found the rule broken:** articles sat between **87.9%** and 100%, the six novella
    chapters between **91.0%** and **94.4%**. The tool printed the unknown words by name, which is what made the
    fix possible (*Pendler · Klassenzimmer · Waschmaschine · Ersatzteile · Fahrradweg · Sponsor · Zuschuss ·
    Vorsatz · Ausstieg · unangenehm · Matte · Schwelle · Dachdecker · Pfützen · Innentasche* …).
    **99 positions were rewritten** — **54 in the twenty articles** (*Pendler* → "Menschen, die jeden Tag zur
    Arbeit fahren" → then "diese Menschen"; *Klassenzimmer* → "Unterricht"; *Waschmaschine* → "eine teure Maschine
    für den Haushalt"; *Zuschuss* → "ein Antrag auf Geld"; *dreiundsechzig* → "63"; sentences rebuilt for
    *behaftet · wegwünschen · übersieht · aufhängte · anstrich*) and **45 in the six novella chapters** (chapter 1:
    *Dienstagabend · Altstadt · Tor · brannte · Matte · Schwelle · Hintertür · schüttelte*; 2: *Schlafanzug ·
    hinauf · Drama · zuckte · abkochen · bereithalten · roch · davor*; 3: *Klassenzimmer · tippte · sortierte ·
    Fracht · Liefertermin · verschluckte · strich · Rückweg*; 4: *Lastwagen · Lieferpapiere · ausgefallen ·
    einreichen · Montagmorgen · Schimpfwort · zitterte · Innentasche*; 5: *Abflüsse · Pfützen · tropfte · Gefäß ·
    Dachdecker · Provisorium · glänzte · Laterne · Tor*; 6: *Wasserleitung · Geräusche · dadurch · ausbaute ·
    strich*). **Result: all 26 texts at 100%**, the coverage floors 1000/909 → **1000/1000**, the novella
    1,554 → **1,610 words**. Chapter 6 fell to 244 words in the first pass — under the 254 floor — so a sentence
    was added instead of lowering the floor. The comprehension questions were not touched: the substitutions
    preserve the meaning their answers depend on. **Green:** `npm test` **311**.
39. **B2-L6: the mock protocol exists now — and with it the readiness gate can open (delivered 2026-10-04).**
    §12.5 opens readiness on three conditions together: a **full** mock with all four modules ≥65, live error debt
    ≤8, and four mastery evidences. The engine has always read `mocks` for `full: true` — and nothing in the
    application could write such a record: every section was stored alone (`storeModule` pushes `{id, score, at}`
    into `S.mocks`). The gate was therefore unreachable by construction, and the old `p4-unit.mjs` tests hid it by
    fabricating the full record by hand.
    **The protocol, engine and UI:** `DW.exam.startMock(S, n)` opens a session with the number from `MOCKS` (the
    eight with their months and purposes — baseline · weakest module · stamina · time · recorded speaking ·
    speaking axes · no-phone simulation · the exam); the ninth number is refused. `DW.exam.recordMockModule(S, id,
    score)` joins a section to it, refuses an unknown section or a result without a score, and **writes the mock
    record only when all four sections are in** — then it pushes `{n, full: true, modules: [...]}`, marks it
    unofficial, and closes the session. Three of four is not a mock. The exam view shows "n full mocks of 8", lists
    the eight with their months and purposes, offers starting a session or closing it without claiming a mock, and
    prints what is still missing after every section; every existing section path (the reading and listening papers,
    the writing bank, the speaking recording) now flows through `storeModule` into the session, so the mock is
    completed by ordinary use rather than from a hidden screen.
    **Tests:** 16 new checks in `tools/p4-unit.mjs` — a module result outside a session is not a mock, the ninth
    number is refused, three of four does not close the mock, an unknown section is refused, the fourth closes it
    with the four sections and `official: false`, the session is emptied, `mockState` counts 1 of 8, and **the
    readiness gate opens** once the four mastery evidences are present — the case that was impossible before. Six
    more checks in `tools/p3-unit.mjs` run the exam view in the DOM: it states the state, lists the eight, starts a
    session, and closes it leaving zero mocks. **Green:** `npm test` **329**.

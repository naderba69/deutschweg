/* Deutschweg — B1 lexical layer, unit 1 (part a): b1-u1-l1 … b1-u1-l3.
   40 items per lesson, the count the B1 rows declare (amendment B1-L1).

   NOT WIRED YET, on purpose: `validate-syllabus.js` fails any level that has
   started and sits under 80% of its own declaration, and B1 declares 1,600
   items. These files join `VOCAB` in `compile-units.js` (through a new
   `tools/vocab-b1.js`) only when 1,280 items — 32 of the 40 lessons — exist.
   Until then they are audited with:
       node tools/audit-vocab.js tools/vocab-b1-u1a.js tools/vocab-b1-u1b.js */

module.exports = {

  'b1-u1-l1': {
    items: [
      ['reparieren', 'repariert · reparierte · hat repariert', 'يُصلح', 'Die Straße wird repariert.', 'Die Straße wird reparieren.', 'بعد wird يأتي اسم المفعول، لا المصدر.', 'konjugation', 'repariert'],
      ['bauen', 'baut · baute · hat gebaut', 'يبني', 'Das Haus wird gebaut.', 'Das Haus wird bauen.', 'Partizip II بعد werden.', 'konjugation', 'gebaut'],
      ['produzieren', 'produziert · produzierte · hat produziert', 'ينتج', 'Das Auto wird in Deutschland produziert.', 'Das Auto wird in Deutschland produzieren.', 'Partizip II بعد werden.', 'konjugation', 'produziert'],
      ['verkaufen', 'verkauft · verkaufte · hat verkauft', 'يبيع', 'Die Wohnung wurde schnell verkauft.', 'Die Wohnung wurde schnell verkaufen.', 'الماضي wurde + Partizip II.', 'konjugation', 'verkauft'],
      ['liefern', 'liefert · lieferte · hat geliefert', 'يسلّم البضاعة', 'Die Ware wird morgen geliefert.', 'Die Ware wird morgen liefern.', 'Partizip II بعد werden.', 'konjugation', 'geliefert'],
      ['bestellen', 'bestellt · bestellte · hat bestellt', 'يطلب', 'Das Buch wurde online bestellt.', 'Das Buch wurde online bestellen.', 'الماضي wurde + Partizip II.', 'konjugation', 'bestellt'],
      ['prüfen', 'prüft · prüfte · hat geprüft', 'يفحص', 'Der Antrag wird gründlich geprüft.', 'Der Antrag wird gründlich prüfen.', 'Partizip II بعد werden.', 'konjugation', 'geprüft'],
      ['verbieten', 'verbietet · verbot · hat verboten', 'يمنع', 'Rauchen wird hier verboten.', 'Rauchen wird hier verbieten.', 'Partizip II بعد werden.', 'konjugation', 'verboten'],
      ['erlauben', 'erlaubt · erlaubte · hat erlaubt', 'يسمح', 'Parken wird hier nicht erlaubt.', 'Parken wird hier nicht erlauben.', 'Partizip II بعد werden.', 'konjugation', 'erlaubt'],
      ['öffnen', 'öffnet · öffnete · hat geöffnet', 'يفتح', 'Das Museum wird um neun geöffnet.', 'Das Museum wird um neun geöffnen.', 'Partizip II: geöffnet بلا نون ثانية.', 'konjugation', 'geöffnet'],
      ['schließen', 'schließt · schloss · hat geschlossen', 'يغلق', 'Die Bibliothek wird um acht geschlossen.', 'Die Bibliothek wird um acht schließen.', 'Partizip II بعد werden.', 'konjugation', 'geschlossen'],
      ['entwickeln', 'entwickelt · entwickelte · hat entwickelt', 'يطوّر', 'Das Programm wurde von zwei Studenten entwickelt.', 'Das Programm wurde mit zwei Studenten entwickelt.', 'الفاعل مع von لا mit.', 'präposition', 'entwickelt'],
      ['herstellen', 'stellt her · stellte her · hat hergestellt', 'يصنع', 'Die Schuhe werden in Italien hergestellt.', 'Die Schuhe werden in Italien herstellen.', 'الفعل المنفصل: hergestellt.', 'konjugation', 'hergestellt'],
      ['informieren', 'informiert · informierte · hat informiert', 'يُخبر', 'Die Kunden werden per E-Mail informiert.', 'Die Kunden werden per E-Mail informieren.', 'Partizip II بعد werden.', 'konjugation', 'informiert'],
      ['bezahlen', 'bezahlt · bezahlte · hat bezahlt', 'يدفع', 'Die Rechnung wird am Freitag bezahlt.', 'Die Rechnung wird am Freitag bezahlen.', 'Partizip II بعد werden.', 'konjugation', 'bezahlt'],
      ['der Bau', 'die Bauten', 'البناء', 'Der Bau dauert zwei Jahre.', 'Der Bau dauert für zwei Jahre.', 'المدة بلا حرف جر.', 'präposition', 'Bau'],
      ['die Reparatur', 'die Reparaturen', 'التصليح', 'Die Reparatur kostet viel Geld.', 'Die Reparatur kostet viel Gelder.', 'Geld هنا بلا جمع.', 'plural', 'Reparatur'],
      ['die Produktion', 'die Produktionen', 'الإنتاج', 'Die Produktion läuft Tag und Nacht.', 'Die Produktion läuft in Tag und Nacht.', 'بلا حرف جر.', 'präposition', 'Produktion'],
      ['der Verkauf', 'die Verkäufe', 'البيع', 'Der Verkauf beginnt am Montag.', 'Der Verkauf beginnt in Montag.', 'اليوم مع am.', 'präposition', 'Verkauf'],
      ['die Lieferung', 'die Lieferungen', 'التسليم', 'Die Lieferung kommt nächste Woche.', 'Die Lieferung kommt in nächste Woche.', 'الزمن الممتد بلا حرف جر.', 'präposition', 'Lieferung'],
      ['die Bestellung', 'die Bestellungen', 'الطلب', 'Die Bestellung ist schon unterwegs.', 'Die Bestellung ist schon in Weg.', 'unterwegs بلا حرف جر.', 'präposition', 'Bestellung'],
      ['die Prüfung', 'die Prüfungen', 'الفحص', 'Die Prüfung des Antrags dauert drei Wochen.', 'Die Prüfung von dem Antrag dauert drei Wochen.', 'في الأسلوب الرفيع: المضاف إليه (des Antrags).', 'kasus', 'Prüfung'],
      ['das Verbot', 'die Verbote', 'المنع', 'Das Verbot gilt seit Januar.', 'Das Verbot gilt von Januar.', 'منذ: seit لا von.', 'präposition', 'Verbot'],
      ['die Erlaubnis', 'die Erlaubnisse', 'الإذن', 'Die Erlaubnis wird schriftlich erteilt.', 'Die Erlaubnis wird schriftlich erteilen.', 'المجهول: erteilt.', 'konjugation', 'erteilt'],
      ['die Einladung', 'die Einladungen', 'الدعوة', 'Die Einladung wurde gestern verschickt.', 'Die Einladung wurde gestern verschicken.', 'المجهول: verschickt.', 'konjugation', 'verschickt'],
      ['die Information', 'die Informationen', 'المعلومة', 'Die Informationen werden online veröffentlicht.', 'Die Informationen werden online veröffentlichen.', 'المجهول: veröffentlicht.', 'konjugation', 'veröffentlicht'],
      ['die Zahlung', 'die Zahlungen', 'الدفع', 'Die Zahlung wird per Überweisung gemacht.', 'Die Zahlung wird mit Überweisung gemacht.', 'الوسيلة: per.', 'präposition', 'Zahlung'],
      ['die Rechnung', 'die Rechnungen', 'الفاتورة', 'Die Rechnung wird sofort bezahlt.', 'Die Rechnung wird sofort bezahlen.', 'المجهول: bezahlt.', 'konjugation', 'bezahlt'],
      ['der Auftrag', 'die Aufträge', 'التكليف', 'Der Auftrag wird sorgfältig bearbeitet.', 'Der Auftrag wird sorgfältig bearbeiten.', 'المجهول: bearbeitet.', 'konjugation', 'bearbeitet'],
      ['der Vertrag', 'die Verträge', 'العقد', 'Der Vertrag wird morgen unterschrieben.', 'Der Vertrag wird morgen unterschreiben.', 'المجهول: unterschrieben.', 'konjugation', 'unterschrieben'],
      ['die Ware', 'die Waren', 'البضاعة', 'Die Ware wird sorgfältig verpackt.', 'Die Ware wird sorgfältig verpacken.', 'المجهول: verpackt.', 'konjugation', 'verpackt'],
      ['das Werk', 'die Werke', 'المصنع', 'Das Werk wird dieses Jahr modernisiert.', 'Das Werk wird dieses Jahr modernisieren.', 'المجهول: modernisiert.', 'konjugation', 'modernisiert'],
      ['der Antrag', 'die Anträge', 'الطلب الرسمي', 'Der Antrag wird online gestellt.', 'Der Antrag wird online stellen.', 'المجهول: gestellt.', 'konjugation', 'gestellt'],
      ['die Anmeldung', 'die Anmeldungen', 'التسجيل', 'Die Anmeldung wird bis Freitag erwartet.', 'Die Anmeldung wird bis Freitag erwarten.', 'المجهول: erwartet.', 'konjugation', 'erwartet'],
      ['das Ergebnis', 'die Ergebnisse', 'النتيجة', 'Das Ergebnis wird morgen bekanntgegeben.', 'Das Ergebnis wird morgen bekanntgeben.', 'المجهول: bekanntgegeben.', 'konjugation', 'bekanntgegeben'],
      ['der Vorgang', 'die Vorgänge', 'الإجراء', 'Der Vorgang wird genau dokumentiert.', 'Der Vorgang wird genau dokumentieren.', 'المجهول: dokumentiert.', 'konjugation', 'dokumentiert'],
      ['die Ursache', 'die Ursachen', 'السبب', 'Die Ursache wurde schnell gefunden.', 'Die Ursache wurde schnell finden.', 'المجهول: gefunden.', 'konjugation', 'gefunden'],
      ['von', '—', 'من (الفاعل)', 'Das Buch wurde von einem Lehrer geschrieben.', 'Das Buch wurde mit einem Lehrer geschrieben.', 'الفاعل العاقل مع von.', 'präposition', 'von'],
      ['durch', '—', 'بواسطة', 'Die Stadt wurde durch das Hochwasser zerstört.', 'Die Stadt wurde von dem Hochwasser zerstört.', 'القوة الطبيعية مع durch.', 'präposition', 'durch'],
      ['worden', '—', 'تُستعمل في مجهول الماضي المركّب', 'Die Brücke ist neu gebaut worden.', 'Die Brücke ist neu gebaut geworden.', 'في المجهول: worden لا geworden.', 'konjugation', 'worden']
    ],
    tricks: [
      { trick: 'المجهول = werden + اسم المفعول، والحالة تبقى وصفًا', wie: 'Die Straße wird repariert. · Die Straße ist repariert (Zustand).', warum: 'العربية تقول «يُرمَّم» بفعل واحد، فالناطق ينسى اسم المفعول أو يستعمل sein للحدث.', anchor: 'repariert' },
      { trick: 'الفاعل مع von والوسيلة مع durch', wie: 'Der Brief wird von Anna geschrieben. · Die Stadt wird durch das Wasser zerstört.', warum: 'العربية تستعمل «بـ» للحالتين، فتصبح von وdurch واحدة في ذهن المتعلم.', anchor: 'von' },
      { trick: 'der Bau · die Reparatur · die Lieferung — الاسم المصدري يقصر الجملة', wie: 'Die Reparatur kostet viel. · Die Lieferung kommt morgen.', warum: 'الألمانية الإدارية تكتب بالأسماء، والعربية تميل إلى الفعل، فيطول التعبير بلا داعٍ.', anchor: 'die Reparatur' }
    ]
  },

  'b1-u1-l2': {
    items: [
      ['der', '—', 'الذي (مذكر)', 'Der Mann, der dort wohnt, ist mein Nachbar.', 'Der Mann, der wohnt dort, ist mein Nachbar.', 'في جملة الصلة الفعل في النهاية.', 'wortstellung', 'der'],
      ['die', '—', 'التي', 'Die Frau, die ich kenne, arbeitet hier.', 'Die Frau, die kenne ich, arbeitet hier.', 'الفعل في نهاية الصلة.', 'wortstellung', 'die'],
      ['das', '—', 'الذي (محايد)', 'Das Buch, das ich lese, ist neu.', 'Das Buch, was ich lese, ist neu.', 'للمحايد das لا was.', 'kasus', 'das'],
      ['den', '—', 'الذي (مفعول)', 'Der Kurs, den ich besuche, ist voll.', 'Der Kurs, der ich besuche, ist voll.', 'المفعول المذكر: den.', 'kasus', 'den'],
      ['dem', '—', 'الذي (داتيف)', 'Der Kollege, dem ich helfen soll, ist neu.', 'Der Kollege, den ich helfen soll, ist neu.', 'helfen يطلب داتيف.', 'kasus', 'dem'],
      ['deren', '—', 'التي (ملكية، مؤنث وجمع)', 'Die Firma, deren Chef krank ist, schließt heute.', 'Die Firma, dessen Chef krank ist, schließt heute.', 'المؤنث والجمع: deren.', 'kasus', 'deren'],
      ['dessen', '—', 'الذي (ملكية، مذكر ومحايد)', 'Der Autor, dessen Buch bekannt ist, kommt nach Tunis.', 'Der Autor, deren Buch bekannt ist, kommt nach Tunis.', 'المذكر: dessen.', 'kasus', 'dessen'],
      ['wo', '—', 'حيث', 'Die Stadt, wo ich geboren bin, liegt am Meer.', 'Die Stadt, wo ich bin geboren, liegt am Meer.', 'bin في نهاية الصلة.', 'wortstellung', 'wo'],
      ['was', '—', 'ما (بعد alles وetwas)', 'Alles, was du sagst, ist richtig.', 'Alles, das du sagst, ist richtig.', 'بعد alles وetwas وnichts: was.', 'kasus', 'was'],
      ['derjenige', '—', 'ذاك الذي', 'Derjenige, der zuerst kommt, wählt.', 'Derjenige, der kommt zuerst, wählt.', 'الفعل في نهاية الصلة.', 'wortstellung', 'Derjenige'],
      ['der Kollege', 'die Kollegen', 'الزميل', 'Mein Kollege, der aus Berlin kommt, bleibt bis Freitag.', 'Mein Kollege, der kommt aus Berlin, bleibt bis Freitag.', 'الفعل في النهاية.', 'wortstellung', 'Kollege'],
      ['die Kollegin', 'die Kolleginnen', 'الزميلة', 'Die Kollegin, die das Projekt leitet, ist heute nicht da.', 'Die Kollegin, die das Projekt leitet sie, ist heute nicht da.', 'لا ضمير زائد.', 'wortstellung', 'Kollegin'],
      ['der Nachbar', 'die Nachbarn', 'الجار', 'Der Nachbar, dem ich den Schlüssel gebe, ist im Urlaub.', 'Der Nachbar, den ich den Schlüssel gebe, ist im Urlaub.', 'geben يطلب داتيفًا للشخص.', 'kasus', 'Nachbar'],
      ['die Nachbarschaft', 'die Nachbarschaften', 'الجوار', 'In unserer Nachbarschaft helfen alle einander.', 'In unserer Nachbarschaft alle helfen einander.', 'الفعل ثانٍ بعد الظرف.', 'wortstellung', 'Nachbarschaft'],
      ['das Unternehmen', 'die Unternehmen', 'الشركة', 'Das Unternehmen, das Autos baut, stellt Leute ein.', 'Das Unternehmen, das Autos baut es, stellt Leute ein.', 'لا ضمير زائد.', 'wortstellung', 'Unternehmen'],
      ['die Abteilung', 'die Abteilungen', 'القسم', 'Die Abteilung, in der ich arbeite, ist klein.', 'Die Abteilung, in die ich arbeite, ist klein.', 'الوجود في: in der.', 'kasus', 'Abteilung'],
      ['die Stelle', 'die Stellen', 'الوظيفة', 'Die Stelle, für die ich mich beworben habe, ist besetzt.', 'Die Stelle, für der ich mich beworben habe, ist besetzt.', 'für + نصب: die.', 'kasus', 'Stelle'],
      ['die Karriere', 'die Karrieren', 'المسار المهني', 'Sie hat eine gute Karriere gemacht.', 'Sie hat eine gute Karriere gemacht es.', 'لا ضمير زائد.', 'wortstellung', 'Karriere'],
      ['die Ausbildung', 'die Ausbildungen', 'التكوين', 'Die Ausbildung, die er gemacht hat, dauert drei Jahre.', 'Die Ausbildung, die er gemacht hat sie, dauert drei Jahre.', 'لا ضمير زائد.', 'wortstellung', 'Ausbildung'],
      ['die Weiterbildung', 'die Weiterbildungen', 'التكوين المستمر', 'Die Firma zahlt die Weiterbildung.', 'Die Firma zahlt für die Weiterbildung.', 'zahlen يأخذ مفعولين بلا حرف جر.', 'kasus', 'Weiterbildung'],
      ['die Fähigkeit', 'die Fähigkeiten', 'القدرة', 'Diese Fähigkeit, die er hat, ist selten.', 'Diese Fähigkeit, die er hat sie, ist selten.', 'لا ضمير زائد.', 'wortstellung', 'Fähigkeit'],
      ['die Kenntnis', 'die Kenntnisse', 'المعرفة', 'Gute Deutschkenntnisse sind im Beruf wichtig.', 'Gute Deutschkenntnis sind im Beruf wichtig.', 'الجمع: Kenntnisse.', 'plural', 'Deutschkenntnisse'],
      ['der Vorteil', 'die Vorteile', 'الميزة', 'Der Vorteil, den ich sehe, ist der Preis.', 'Der Vorteil, der ich sehe, ist der Preis.', 'المفعول den.', 'kasus', 'Vorteil'],
      ['der Nachteil', 'die Nachteile', 'العيب', 'Der Nachteil, den die Stelle hat, ist die Lage.', 'Der Nachteil, der die Stelle hat, ist die Lage.', 'المفعول den.', 'kasus', 'Nachteil'],
      ['die Bedingung', 'die Bedingungen', 'الشرط', 'Die Bedingungen, unter denen wir arbeiten, sind gut.', 'Die Bedingungen, unter die wir arbeiten, sind gut.', 'الظرف الثابت: unter denen.', 'kasus', 'Bedingungen'],
      ['die Möglichkeit', 'die Möglichkeiten', 'الإمكانية', 'Die Möglichkeit, die sich bietet, ist gut.', 'Die Möglichkeit, die sich bietet sie, ist gut.', 'لا ضمير زائد.', 'wortstellung', 'Möglichkeit'],
      ['die Gelegenheit', 'die Gelegenheiten', 'الفرصة', 'Die Gelegenheit, bei der wir uns trafen, war wichtig.', 'Die Gelegenheit, bei die wir uns trafen, war wichtig.', 'bei + داتيف: der.', 'kasus', 'Gelegenheit'],
      ['der Zusammenhang', 'die Zusammenhänge', 'الصلة', 'Der Zusammenhang, den du beschreibst, ist klar.', 'Der Zusammenhang, der du beschreibst, ist klar.', 'المفعول den.', 'kasus', 'Zusammenhang'],
      ['die Beziehung', 'die Beziehungen', 'العلاقة', 'Die Beziehung, die sie hat, ist eng.', 'Die Beziehung, die sie hat sie, ist eng.', 'لا ضمير زائد.', 'wortstellung', 'Beziehung'],
      ['der Eindruck', 'die Eindrücke', 'الانطباع', 'Der Eindruck, den ich hatte, war falsch.', 'Der Eindruck, der ich hatte, war falsch.', 'المفعول den.', 'kasus', 'Eindruck'],
      ['der Standpunkt', 'die Standpunkte', 'الموقف', 'Der Standpunkt, den sie vertritt, ist bekannt.', 'Der Standpunkt, der sie vertritt, ist bekannt.', 'المفعول den.', 'kasus', 'Standpunkt'],
      ['die Kritik', 'die Kritiken', 'النقد', 'Die Kritik, die er geäußert hat, war berechtigt.', 'Die Kritik, die er hat geäußert, war berechtigt.', 'الفعل المساعد الأخير في الصلة.', 'wortstellung', 'Kritik'],
      ['der Zweifel', 'die Zweifel', 'الشك', 'Der Zweifel, den sie hat, ist verständlich.', 'Der Zweifel, der sie hat, ist verständlich.', 'المفعول den.', 'kasus', 'Zweifel'],
      ['das Ziel', 'die Ziele', 'الهدف', 'Das Ziel, das wir erreichen wollen, ist klar.', 'Das Ziel, das wir erreichen es wollen, ist klar.', 'لا ضمير زائد.', 'wortstellung', 'Ziel'],
      ['die Folge', 'die Folgen', 'النتيجة', 'Die Folgen, die daraus entstehen, sind schwer.', 'Die Folgen, die daraus entstehen sie, sind schwer.', 'لا ضمير زائد.', 'wortstellung', 'Folgen'],
      ['der Anlass', 'die Anlässe', 'المناسبة', 'Der Anlass, aus dem wir uns treffen, ist ein Fest.', 'Der Anlass, aus der wir uns treffen, ist ein Fest.', 'aus + داتيف: dem.', 'kasus', 'Anlass'],
      ['die Absicht', 'die Absichten', 'القصد', 'Die Absicht, die er hatte, war gut.', 'Die Absicht, die er hatte sie, war gut.', 'لا ضمير زائد.', 'wortstellung', 'Absicht'],
      ['der Wunsch', 'die Wünsche', 'الرغبة', 'Der Wunsch, den sie äußert, ist verständlich.', 'Der Wunsch, der sie äußert, ist verständlich.', 'المفعول den.', 'kasus', 'Wunsch'],
      ['die Erwartung', 'die Erwartungen', 'التوقع', 'Die Erwartungen, die man an mich hat, sind hoch.', 'Die Erwartungen, die man hat an mich, sind hoch.', 'الفعل في النهاية.', 'wortstellung', 'Erwartungen'],
      ['der Unterschied', 'die Unterschiede', 'الفرق', 'Der Unterschied, den man sieht, ist groß.', 'Der Unterschied, der man sieht, ist groß.', 'man مفعول: den.', 'kasus', 'Unterschied']
    ],
    tricks: [
      { trick: 'حالة أداة الصلة تأتي من دورها في الجملة الصغيرة، لا من الكلمة الموصوفة', wie: 'Der Kurs, den ich besuche (Akk.) · der Kollege, dem ich helfe (Dat.) · die Firma, deren Chef (Gen.)', warum: 'العربية تصل الوصف بلا حالة، فالناطق يأخذ «der» دائمًا فيخطئ في den/dem/deren.', anchor: 'den' },
      { trick: 'الفعل داخل الصلة يعود إلى النهاية دائمًا', wie: 'Der Mann, der dort wohnt, … · Die Stelle, für die ich mich beworben habe, …', warum: 'الجملة العربية الوصفية تبقى على ترتيبها، فالترتيب الألماني يُنسى بعد الفاصلة.', anchor: 'worin' },
      { trick: 'بعد alles · etwas · nichts · vieles تأتي was لا das', wie: 'Alles, was du sagst, ist richtig. · Das ist etwas, was mir gefällt.', warum: 'العربية تقول «كل ما» ولا فرق عندها بين das وwas.', anchor: 'was' }
    ]
  },

  'b1-u1-l3': {
    items: [
      ['obwohl', '—', 'رغم أنّ', 'Obwohl es regnete, sind wir gefahren.', 'Obwohl es regnete, wir sind gefahren.', 'بعد obwohl الفعل في نهاية الجزء الثاني.', 'wortstellung', 'Obwohl'],
      ['obgleich', '—', 'مع أنّ (فصيحة)', 'Obgleich er müde war, arbeitete er weiter.', 'Obgleich er müde war, er arbeitete weiter.', 'الفعل ثانٍ في الجملة الرئيسية.', 'wortstellung', 'Obgleich'],
      ['trotzdem', '—', 'رغم ذلك', 'Es regnete, trotzdem sind wir gefahren.', 'Es regnete, trotzdem wir sind gefahren.', 'trotzdem ظرف والفعل ثانٍ بعده.', 'wortstellung', 'trotzdem'],
      ['trotz', '—', 'رغم (مع مضاف إليه)', 'Trotz des Regens sind wir gefahren.', 'Trotz dem Regen sind wir gefahren.', 'trotz + مضاف إليه: des Regens.', 'kasus', 'Trotz'],
      ['zwar', '—', 'صحيح أنّ', 'Zwar ist es teuer, aber es lohnt sich.', 'Zwar es ist teuer, aber es lohnt sich.', 'zwar في الأول ⟹ الفعل ثانٍ.', 'wortstellung', 'Zwar'],
      ['allerdings', '—', 'لكن', 'Es ist teuer, allerdings lohnt es sich.', 'Es ist teuer, allerdings es lohnt sich.', 'الفعل ثانٍ بعد allerdings.', 'wortstellung', 'allerdings'],
      ['widersprechen', 'widerspricht · widersprach · hat widersprochen', 'يعترض', 'Ich muss dir leider widersprechen.', 'Ich muss dich leider widersprechen.', 'الفعل يطلب داتيف: dir.', 'kasus', 'widersprechen'],
      ['zustimmen', 'stimmt zu · stimmte zu · hat zugestimmt', 'يوافق', 'Er stimmt meinem Vorschlag zu.', 'Er stimmt meinen Vorschlag zu.', 'zustimmen + داتيف.', 'kasus', 'stimmt'],
      ['ablehnen', 'lehnt ab · lehnte ab · hat abgelehnt', 'يرفض', 'Sie lehnt den Vorschlag ab.', 'Sie lehnt den Vorschlag.', 'الفعل المنفصل: ab في النهاية.', 'wortstellung', 'ab'],
      ['akzeptieren', 'akzeptiert · akzeptierte · hat akzeptiert', 'يقبل', 'Wir akzeptieren die Bedingungen.', 'Wir akzeptieren zu die Bedingungen.', 'بلا حرف جر.', 'kasus', 'akzeptieren'],
      ['bezweifeln', 'bezweifelt · bezweifelte · hat bezweifelt', 'يشكّ في', 'Ich bezweifle diese Zahl.', 'Ich bezweifle an dieser Zahl.', 'بلا حرف جر.', 'kasus', 'bezweifle'],
      ['begründen', 'begründet · begründete · hat begründet', 'يعلّل', 'Kannst du deine Meinung begründen?', 'Kannst du deine Meinung begründen für?', 'بلا حرف جر.', 'kasus', 'begründen'],
      ['kritisieren', 'kritisiert · kritisierte · hat kritisiert', 'ينقد', 'Die Zeitung kritisiert den Plan.', 'Die Zeitung kritisiert über den Plan.', 'بلا حرف جر.', 'kasus', 'kritisiert'],
      ['verteidigen', 'verteidigt · verteidigte · hat verteidigt', 'يدافع عن', 'Sie verteidigt ihre Meinung ruhig.', 'Sie verteidigt für ihre Meinung.', 'بلا حرف جر.', 'kasus', 'verteidigt'],
      ['verzichten', 'verzichtet · verzichtete · hat verzichtet', 'يتنازل عن', 'Er verzichtet auf das Auto.', 'Er verzichtet das Auto.', 'verzichten يحتاج auf.', 'präposition', 'verzichtet'],
      ['sich bemühen', 'bemüht sich · bemühte sich · hat sich bemüht', 'يجتهد', 'Er bemüht sich um eine bessere Stelle.', 'Er bemüht sich für eine bessere Stelle.', 'um لا für.', 'präposition', 'bemüht'],
      ['berücksichtigen', 'berücksichtigt · berücksichtigte · hat berücksichtigt', 'يراعي', 'Wir berücksichtigen deine Erfahrung.', 'Wir berücksichtigen von deiner Erfahrung.', 'بلا حرف جر.', 'kasus', 'berücksichtigen'],
      ['einwenden', 'wendet ein · wandte ein · hat eingewandt', 'يعترض قائلًا', 'Er wendet ein, dass der Plan teuer ist.', 'Er wendet ein, dass der Plan ist teuer.', 'الفعل في نهاية جملة dass.', 'wortstellung', 'ein'],
      ['der Widerspruch', 'die Widersprüche', 'التناقض', 'Da ist ein Widerspruch in deiner Aussage.', 'Da ist ein Widerspruch über deiner Aussage.', 'في: in.', 'präposition', 'Widerspruch'],
      ['der Einwand', 'die Einwände', 'الاعتراض', 'Sein Einwand ist berechtigt.', 'Sein Einwand ist berechtigt gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Einwand'],
      ['die Begründung', 'die Begründungen', 'التعليل', 'Die Begründung fehlt in deiner Bewerbung.', 'Die Begründung fehlt in deine Bewerbung.', 'في: in + داتيف.', 'kasus', 'Begründung'],
      ['die Ausnahme', 'die Ausnahmen', 'الاستثناء', 'Diese Regel hat eine Ausnahme.', 'Diese Regel hat ein Ausnahme.', 'مؤنث: eine.', 'genus', 'Ausnahme'],
      ['die Regel', 'die Regeln', 'القاعدة', 'In der Regel beginnt der Kurs um acht.', 'In der Regel beginnt der Kurs in acht.', 'الساعة: um.', 'präposition', 'Regel'],
      ['die Schwierigkeit', 'die Schwierigkeiten', 'الصعوبة', 'Die Schwierigkeit liegt in der Zeit.', 'Die Schwierigkeit liegt in die Zeit.', 'في: in + داتيف.', 'kasus', 'Schwierigkeit'],
      ['die Mühe', 'die Mühen', 'الجهد', 'Es war viel Mühe, aber es hat sich gelohnt.', 'Es war viel Mühe gemacht.', 'الصيغة تكفي.', 'lexik-kollokation', 'Mühe'],
      ['der Aufwand', '—', 'الكلفة والجهد', 'Der Aufwand ist zu groß.', 'Der Aufwand ist zu groß gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Aufwand'],
      ['das Risiko', 'die Risiken', 'الخطر', 'Das Risiko ist mir zu hoch.', 'Das Risiko ist mir zu hoch es.', 'لا ضمير زائد.', 'wortstellung', 'Risiko'],
      ['die Gefahr', 'die Gefahren', 'الخطر المحدق', 'Die Gefahr wird oft unterschätzt.', 'Die Gefahr wird oft unterschätzen.', 'المجهول: unterschätzt.', 'konjugation', 'unterschätzt'],
      ['der Mut', '—', 'الشجاعة', 'Dazu gehört Mut.', 'Dazu gehört ein Mut.', 'Mut بلا أداة هنا.', 'genus', 'Mut'],
      ['die Geduld', '—', 'الصبر', 'Mit Geduld schaffst du das.', 'Mit Geduld du schaffst das.', 'الفعل ثانٍ بعد الظرف.', 'wortstellung', 'Geduld'],
      ['das Interesse', 'die Interessen', 'الاهتمام', 'Ich habe Interesse an der Stelle.', 'Ich habe Interesse für die Stelle.', 'an لا für.', 'präposition', 'Interesse'],
      ['die Rücksicht', '—', 'المراعاة', 'Wir nehmen Rücksicht auf die Nachbarn.', 'Wir nehmen Rücksicht für die Nachbarn.', 'auf لا für.', 'präposition', 'Rücksicht'],
      ['die Kritik', 'die Kritikpunkte', 'النقد', 'Seine Kritik war sachlich.', 'Seine Kritik war sachlich gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Kritik'],
      ['der Zweifel', 'die Zweifel', 'الشك', 'Ich habe Zweifel an dem Plan.', 'Ich habe Zweifel für den Plan.', 'an لا für.', 'präposition', 'Zweifel'],
      ['die Meinung', 'die Meinungen', 'الرأي', 'Meine Meinung ist anders.', 'Meine Meinung ist anders gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Meinung'],
      ['die Ansicht', 'die Ansichten', 'الرؤية', 'Meiner Ansicht nach ist das falsch.', 'In meiner Ansicht ist das falsch.', 'الصيغة الثابتة: meiner Ansicht nach.', 'register', 'Ansicht'],
      ['der Grund', 'die Gründe', 'السبب', 'Aus welchem Grund kommst du nicht?', 'Für welchen Grund kommst du nicht?', 'aus لا für.', 'präposition', 'Grund'],
      ['die Folge', 'die Folgen', 'التبعة', 'Die Folgen sind nicht absehbar.', 'Die Folgen sind nicht absehbar gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Folgen'],
      ['der Zweck', 'die Zwecke', 'الغرض', 'Der Zweck ist klar.', 'Der Zweck ist klar gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Zweck'],
      ['andererseits', '—', 'من ناحية أخرى', 'Einerseits ist es teuer, andererseits bequem.', 'Einerseits ist es teuer, andererseits es ist bequem.', 'الفعل ثانٍ بعد andererseits.', 'wortstellung', 'andererseits']
    ],
    tricks: [
      { trick: 'obwohl تدفع الفعل للنهاية، وtrotzdem تتركه ثانيًا', wie: 'Obwohl es regnete, sind wir gefahren. · Es regnete, trotzdem sind wir gefahren.', warum: 'الفكرتان متقابلتان في العربية، فيستعمل المتعلم الرابطين بالترتيب نفسه.', anchor: 'obwohl' },
      { trick: 'trotz مع مضاف إليه، وtrotzdem ظرف مستقل', wie: 'Trotz des Regens … · trotzdem sind wir gefahren.', warum: 'كلمة واحدة تفرّق بين تركيبين، والعربية تستعمل «رغم» للحالتين.', anchor: 'trotz' },
      { trick: 'zwar … aber · einerseits … andererseits — التقييد الزوجي', wie: 'Zwar ist es teuer, aber es lohnt sich. · Einerseits … andererseits …', warum: 'الكتابة B1 تُقاس على الربط المزدوج، والعربية تكتفي بـ«لكن».', anchor: 'zwar' }
    ]
  }

};

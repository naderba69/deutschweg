/* Deutschweg — B2 lexical layer, workshop 6: b2-w06 Beschwerdebrief (ورشة كتابة: شكوى).
   Route C: 40 authored items + 50 material words = the 90 the row declares.
   A complaint is a document, not a mood: the words here are the ones a German
   business letter needs — and the ones that keep it from becoming a scene. */

module.exports = {

  'b2-w06': {
    items: [
      ['die Beschwerde', 'die Beschwerden', 'الشكوى', 'Die Beschwerde beginnt mit der Kundennummer des Absenders.', 'Die Beschwerde beginnt mit die Kundennummer.', 'mit + داتيف.', 'kasus', 'Beschwerde'],
      ['der Beschwerdebrief', 'die Beschwerdebriefe', 'خطاب الشكوى', 'Jeder Beschwerdebrief ist ein Geschäftsbrief für die Beschwerdeabteilung.', 'Das Beschwerdebrief folgt demselben Aufbau.', 'مذكر: der.', 'genus', 'Beschwerdebrief'],
      ['die Reklamation', 'die Reklamationen', 'المطالبة', 'Die Reklamation betrifft eine Fehllieferung, nicht die Teillieferung.', 'Die Reklamation betrifft ein Teillieferung.', 'مؤنث نصب: eine.', 'deklination', 'Reklamation'],
      ['die Lieferung', 'die Lieferungen', 'التسليم', 'Die Lieferung kam zwei Tage zu spät; die Lieferfrist war vier Tage.', 'Die Lieferung kamen zwei Tage zu spät.', 'المفرد: kam.', 'konjugation', 'Lieferung'],
      ['die Bestellung', 'die Bestellungen', 'الطلب', 'Die Bestellung vom dritten Mai fehlt bisher; der Empfänger wartet.', 'Die Bestellung von dem dritten Mai fehlt bisher.', 'التاريخ بالـ Genitiv.', 'kasus', 'Bestellung'],
      ['die Bestellnummer', 'die Bestellnummern', 'رقم الطلب', 'Die Bestellnummer steht im Betreff, die Sendungsnummer darunter.', 'Die Bestellnummer stehen in der Betreffzeile.', 'المفرد: steht.', 'konjugation', 'Bestellnummer'],
      ['die Rechnung', 'die Rechnungen', 'الفاتورة', 'Die Rechnung stimmt nicht mit der Auftragsbestätigung und der Vertragsnummer überein.', 'Die Rechnung stimmt nicht mit die Auftragsbestätigung überein.', 'mit + داتيف.', 'kasus', 'Rechnung'],
      ['der Betrag', 'die Beträge', 'المبلغ', 'Der Betrag wurde doppelt abgebucht.', 'Der Betrag wurden doppelt abgebucht.', 'المفرد: wurde.', 'konjugation', 'Betrag'],
      ['die Abbuchung', 'die Abbuchungen', 'الخصم', 'Die Abbuchung erfolgte am Versanddatum; die Paketverfolgung zeigt nichts.', 'Die Abbuchung erfolgten am Versanddatum.', 'المفرد: erfolgte.', 'konjugation', 'Abbuchung'],
      ['die Gutschrift', 'die Gutschriften', 'الإشعار الدائن', 'Eine Gutschrift über den Betrag fehlt noch.', 'Ein Gutschrift über den Betrag fehlt noch.', 'مؤنث: eine.', 'genus', 'Gutschrift'],
      ['der Mangel', 'die Mängel', 'العيب', 'Der Mangel betrifft die Verpackung.', 'Der Mangel betrifft der Verpackung.', 'المفعول نصب: die Verpackung.', 'kasus', 'Mangel'],
      ['die Verpackung', 'die Verpackungen', 'التغليف', 'Die Verpackung war beschädigt.', 'Die Verpackung waren beschädigt.', 'المفرد: war.', 'konjugation', 'Verpackung'],
      ['die Beschädigung', 'die Beschädigungen', 'التلف', 'Die Beschädigung ist auf dem Beweisfoto zu sehen und fällt unter die Gewährleistung.', 'Die Beschädigung ist auf das Beweisfoto zu sehen.', 'auf + داتيف.', 'kasus', 'Beschädigung'],
      ['die Frist', 'die Fristen', 'المهلة', 'Die Frist zur Antwort beträgt zwei Wochen.', 'Die Frist zur Antwort betragen zwei Wochen.', 'المفرد: beträgt.', 'konjugation', 'Frist'],
      ['die Rücksendung', 'die Rücksendungen', 'الإعادة', 'Das Rücksendung kostet nichts, das Widerrufsrecht gilt vierzehn Tage.', 'Das Rücksendung kostet nichts.', 'مؤنث: die.', 'genus', 'Rücksendung'],
      ['das Rücksendeetikett', 'die Rücksendeetiketten', 'ملصق الإعادة', 'Das Rücksendeetikett liegt der Sendung bei.', 'Das Rücksendeetikett liegen der Sendung bei.', 'المفرد: liegt.', 'konjugation', 'Rücksendeetikett'],
      ['der Ersatz', '—', 'البديل', 'Ich bitte um Ersatz oder um eine Gutschrift.', 'Ich bitte für Ersatz oder um eine Gutschrift.', 'bitten um + نصب.', 'präposition', 'Ersatz'],
      ['die Erstattung', 'die Erstattungen', 'الاسترداد', 'Die Erstattung soll auf mein Konto, eine Entschädigung erwarte ich nicht.', 'Die Erstattung soll in mein Konto.', 'auf ein Konto.', 'präposition', 'Erstattung'],
      ['die Forderung', 'die Forderungen', 'المطالبة', 'Die Forderung ist berechtigt, auch nach Verzug bleibt der Ton ruhig.', 'Die Forderung sind berechtigt, der Ton bleibt ruhig.', 'المفرد: ist.', 'konjugation', 'Forderung'],
      ['die Nachfrist', 'die Nachfristen', 'مهلة إضافية', 'Nach Ablauf der Nachfrist setze ich eine neue Antwortfrist.', 'Nach Ablauf von der Nachfrist behalte ich mir Schritte vor.', 'Genitiv: der Nachfrist.', 'kasus', 'Nachfrist'],
      ['die Fristsetzung', '—', 'تحديد المهلة', 'Die Fristsetzung steht am Ende des Schreibens; Rücksprache ist möglich.', 'Die Fristsetzung stehen am Ende des Schreibens.', 'المفرد: steht.', 'konjugation', 'Fristsetzung'],
      ['der Sachverhalt', 'die Sachverhalte', 'الوقائع', 'Das Sachverhalt steht im ersten Absatz der Mängelrüge.', 'Das Sachverhalt steht im ersten Absatz.', 'مذكر: der.', 'genus', 'Sachverhalt'],
      ['die Tatsache', 'die Tatsachen', 'الواقعة', 'Eine Tatsache braucht kein Urteil.', 'Ein Tatsache braucht kein Urteil.', 'مؤنث: eine.', 'genus', 'Tatsache'],
      ['die Konsequenz', 'die Konsequenzen', 'النتيجة', 'Die Konsequenz war ein verpasster Termin.', 'Die Konsequenz waren ein verpasster Termin.', 'المفرد: war.', 'konjugation', 'Konsequenz'],
      ['die Bitte', 'die Bitten', 'الرجاء', 'Die Bitte steht in einem eigenen Satz und rettet die Geschäftsbeziehung.', 'Die Bitte steht in ein eigenen Satz.', 'in + داتيف: einem.', 'deklination', 'Bitte'],
      ['die Aufforderung', 'die Aufforderungen', 'المطالبة الحازمة', 'Die Aufforderung ist höflich, aber klar; eine Zusage oder Absage erwarte ich.', 'Die Aufforderung sind höflich, aber klar.', 'المفرد: ist.', 'konjugation', 'Aufforderung'],
      ['der Ton', '—', 'النبرة', 'Der Ton bleibt sachlich, auch wenn es nervt.', 'Die Ton bleibt sachlich, auch wenn es nervt.', 'مذكر: der.', 'genus', 'Ton'],
      ['die Verbindlichkeit', 'die Verbindlichkeiten', 'اللياقة الملزمة', 'Verbindlichkeit ersetzt keine Frist.', 'Verbindlichkeit ersetzt keine Frist, gell?', '«gell» عامية لا تصلح لخطاب رسمي.', 'register', 'Verbindlichkeit'],
      ['die Anrede', 'die Anreden', 'صيغة المخاطبة', 'Die Anrede lautet: Sehr geehrte Sachbearbeiterin, sehr geehrter Sachbearbeiter.', 'Die Anrede lauten: Sehr geehrte Damen und Herren.', 'المفرد: lautet.', 'konjugation', 'Anrede'],
      ['die Grußformel', 'die Grußformeln', 'التحية الختامية', 'Die Grußformel bleibt kurz; die Zusendung der Kopie folgt.', 'Die Grußformel bleibt kurz und freundlich gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Grußformel'],
      ['die Unterschrift', 'die Unterschriften', 'التوقيع', 'Die Unterschrift fehlt nie in einem formellen Schreiben.', 'Die Unterschrift fehlen nie in einem formellen Schreiben.', 'المفرد: fehlt.', 'konjugation', 'Unterschrift'],
      ['der Anhang', 'die Anhänge', 'المرفق', 'Der Anhang enthält das Beweisfoto und die Forderung auf Schadenersatz.', 'Der Anhang enthalten das Beweisfoto und die Quittung.', 'المفرد: enthält.', 'konjugation', 'Anhang'],
      ['die Kopie', 'die Kopien', 'النسخة', 'Die Kopie von der Quittung und der Kassenbon liegen bei.', 'Die Kopie von der Rechnung liegt bei.', 'Genitiv أدقّ: der Rechnung.', 'kasus', 'Kopie'],
      ['die Referenz', 'die Referenzen', 'المرجع', 'Ohne Referenz bearbeiten die Firma nichts; ohne Lösung gibt es keine Kundenzufriedenheit und keine Weiterempfehlung.', 'Ohne Referenz bearbeiten die Firma nichts.', 'المفرد: bearbeitet.', 'konjugation', 'Referenz'],
      ['die Bearbeitung', 'die Bearbeitungen', 'المعالجة', 'Das Bearbeitung dauert zwei Wochen; ein Aktenzeichen fehlt.', 'Das Bearbeitung dauert zwei Wochen.', 'مؤنث: die.', 'genus', 'Bearbeitung'],
      ['der Eingang', 'die Eingänge', 'ورود الخطاب', 'Der Eingang der Beschwerde wird bestätigt; die Bearbeitungszeit bleibt offen.', 'Der Eingang von der Beschwerde wird bestätigt.', 'Genitiv: der Beschwerde.', 'kasus', 'Eingang'],
      ['die Auskunft', 'die Auskünfte', 'الإفادة', 'Eine Auskunft innerhalb von zwei Wochen ist üblich, auch auf dem Postweg; sonst folgt das Schlichtungsverfahren.', 'Eine Auskunft in zwei Wochen ist üblich.', 'innerhalb + Genitiv.', 'präposition', 'Auskunft'],
      ['die Lösung', 'die Lösungen', 'الحل', 'Ich bitte um eine Lösung, nicht für eine Entschuldigung; die Weiterempfehlung steht auf dem Spiel.', 'Ich bitte um eine Lösung, nicht für eine Entschuldigung.', 'bitten um.', 'präposition', 'Lösung'],
      ['die Entschuldigung', 'die Entschuldigungen', 'الاعتذار', 'Eine Entschuldigung ohne Lösung hilft nicht; die Zufriedenheit bleibt offen.', 'Eine Entschuldigung ohne ein Lösung hilft nicht.', 'بعد ohne بلا أداة.', 'kasus', 'Entschuldigung'],
      ['der Vorgang', 'die Vorgänge', 'المعاملة', 'Der Vorgang schildere ich kurz, denn die Verbraucherzentrale liest mit.', 'Der Vorgang schildere ich kurz es.', 'لا ضمير زائد.', 'wortstellung', 'Vorgang']
    ],
    material: [
      'das Schreiben', 'der Geschäftsbrief', 'die Geschäftsbeziehung', 'der Empfänger',
      'der Absender', 'die Absenderadresse', 'die Empfängeradresse', 'die Betreffzeile',
      'der Betreff', 'das Datum', 'die Kundennummer', 'die Vertragsnummer',
      'die Lieferadresse', 'die Sendungsnummer', 'die Paketverfolgung', 'das Versanddatum',
      'die Teillieferung', 'die Fehllieferung', 'die Falschlieferung', 'die Nachlieferung',
      'der Umtausch', 'das Widerrufsrecht', 'die Gewährleistung', 'die Mängelrüge',
      'das Beweisfoto', 'die Quittung', 'der Kassenbon', 'die Auftragsbestätigung',
      'die Zahlungsfrist', 'die Mahnung', 'der Verzug', 'die Entschädigung',
      'der Schadenersatz', 'das Aktenzeichen', 'die Bearbeitungszeit', 'die Antwortfrist',
      'der Postweg', 'die Zusendung', 'die Zusage', 'die Absage',
      'die Zufriedenheit', 'die Kundenzufriedenheit', 'die Weiterempfehlung', 'die Beschwerdeabteilung',
      'der Sachbearbeiter', 'die Sachbearbeiterin', 'das Schlichtungsverfahren', 'die Verbraucherzentrale',
      'die Lieferfrist', 'die Rücksprache'
    ],
    tricks: [
      { trick: 'الشكوى وثيقة: Tatsache — Folge — Bitte، في هذا الترتيب', wie: 'Die Lieferung kam zu spät. Die Folge war ein verpasster Termin. Ich bitte um eine neue Lieferung.', warum: 'الغاضب يبدأ بالحكم، والموظف لا يعالج إلا واقعة لها رقم.', anchor: 'Die Folge war' },
      { trick: 'لا تصف الشخص: صف المبلغ والموعد', wie: 'Der Betrag wurde doppelt abgebucht, nicht: Sie sind unfähig.', warum: 'الحكم على الشخص يُقفل المعالجة؛ الرقم يفتحها.', anchor: 'doppelt abgebucht' },
      { trick: 'اطلب بديلًا محددًا: Ersatz، Gutschrift، Nachlieferung — وسمِّ المهلة', wie: 'Ich bitte um Ersatz bis zum 20. Mai.', warum: 'طلب بلا موعد ولا بديل يبقى بلا نتيجة.', anchor: 'eine Nachfrist' }
    ]
  }

};

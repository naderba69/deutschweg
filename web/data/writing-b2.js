/* Deutschweg — B2 timed writings (PROMPT §13.3 track T7, §12.1 Schreiben).
 *
 * Twenty writings of the exam's own shape: **75 minutes**, Task 1 an opinion
 * text (Forumsbeitrag / Kommentar / Erörterung) of **at least 150 words**, Task 2
 * a message (formal or personal) of **at least 100 words**. Each task names its
 * **content points** — the engine zeroes a task whose content point is missed,
 * exactly as §12.1 states — and the four rubric axes apply (inhalt · aufbau ·
 * ausdruck · korrektheit).
 *
 * The topics are the B2 exam topic list: work, housing, mobility, education,
 * health, consumption, media, volunteering, tourism, culture, neighbours,
 * screen time, retirement, village and city, fairness.
 * The topics are the level's own material, so the tasks are original.
 * The map (DW_WRITING, in inventory.js) declares the promise; this file is the
 * content, the same way DW_READING declares the reading and DW_LIBRARY carries it.
 */
(function (root) {
  function T(id, type, title, situation, t1, t2, focus) {
    return {
      id: id, n: Number(id.slice(4, 6)), type: type, title: title, minutes: 75,
      situation: situation, task1: t1, task2: t2, focus: focus,
      axes: ['inhalt', 'aufbau', 'ausdruck', 'korrektheit']
    };
  }
  function A(kind, prompt, minWords, points) {
    return { kind: kind, prompt: prompt, minWords: minWords, points: points };
  }

  const tasks = [
    T('b2-s01', 'منشور منتدى ورسالة رسمية', 'العمل من البيت',
      'In Ihrem Kurs wird über Homeoffice diskutiert. Ein Teilnehmer schreibt, ohne Büro könne niemand arbeiten.',
      A('Forumsbeitrag', 'Nehmen Sie Stellung: Wie wirkt Homeoffice auf Arbeit und Alltag?',
        150, ['die eigene Position in einem Satz', 'ein Argument mit Beispiel', 'einen Einwand entkräften']),
      A('formelle Nachricht', 'Bitten Sie Ihre Vorgesetzte um feste Homeoffice-Tage und begründen Sie kurz.',
        100, ['die Bitte nennen', 'zwei Gründe ordnen', 'einen Vorschlag zur Umsetzung']),
      ['Konjunktiv II: wäre, hätte', 'Nomen-Verb-Verbindung: eine Regel treffen']),

    T('b2-s02', 'تعليق ورسالة رسمية', 'الإيجار في المدينة',
      'Die Mieten steigen, und in der Zeitung steht dazu eine Zahl ohne Begründung.',
      A('Kommentar', 'Schreiben Sie einen Kommentar zur Meldung: Nennen Sie Zahl und Deutung getrennt.',
        150, ['die Zahl aus der Meldung', 'eine Ursache mit Vorsicht', 'eine Folgerung für Mieter']),
      A('formelle Nachricht', 'Bitten Sie den Vermieter um eine Erklärung der letzten Nebenkostenabrechnung.',
        100, ['die Abrechnung benennen', 'eine konkrete Frage', 'eine Frist setzen']),
      ['Passiv: wird angehoben', 'Konjunktiv II der Höflichkeit: könnten Sie']),

    T('b2-s03', 'منشور منتدى وبريد إلكتروني', 'الطريق إلى العمل',
      'Ein Magazin berichtet: Immer mehr Menschen pendeln über eine Stunde pro Tag.',
      A('Forumsbeitrag', 'Ist das eine private Entscheidung oder eine Aufgabe der Städte?',
        150, ['die Frage beantworten', 'zwei Beispiele gegenüberstellen', 'ein Fazit ziehen']),
      A('formelle Nachricht', 'Schreiben Sie an den Verkehrsbetrieb: Der frühe Zug fällt oft aus.',
        100, ['die Linie und die Zeit nennen', 'die Folge für Sie schildern', 'um eine Antwort bitten']),
      ['Vergleich: während, im Gegensatz dazu', 'Passiv mit Modalverb: gestrichen werden muss']),

    T('b2-s04', 'مقال حجاجي ورسالة رسمية', 'الرقمنة في المدرسة',
      'Ihre Stadt will Tablets in allen Schulen einführen. Die Kosten sind noch offen.',
      A('Erörterung', 'Erörtern Sie: Ersetzen Geräte die Lehrkraft oder unterstützen sie sie?',
        150, ['eine These formulieren', 'ein Argument mit Beleg', 'einen Gegeneinwand widerlegen']),
      A('formelle Nachricht', 'Schreiben Sie an die Schulleitung: Fragen Sie nach Fortbildung und Budget.',
        100, ['zwei Fragen stellen', 'einen Grund für Ihre Fragen', 'um eine kurze Antwort bitten']),
      ['Konjunktiv II: Es wäre sinnvoll', 'Relativsatz: die Geräte, die …']),

    T('b2-s05', 'منشور منتدى ورسالة رسمية', 'الوقاية الصحية',
      'In einer Gruppe wird gefragt, ob Vorsorgeuntersuchungen Pflicht sein sollten.',
      A('Forumsbeitrag', 'Sagen Sie Ihre Meinung: Pflicht oder freie Entscheidung?',
        150, ['eine Position nennen', 'ein Argument mit Beispiel', 'eine Bedingung einräumen']),
      A('formelle Nachricht', 'Fragen Sie bei der Krankenkasse nach der Kostenübernahme einer Vorsorge.',
        100, ['die Untersuchung nennen', 'die Frage zur Kostenübernahme', 'um eine schriftliche Antwort bitten']),
      ['Nomen-Verb-Verbindung: eine Frage stellen', 'Passiv: wird übernommen']),

    T('b2-s06', 'مقال حجاجي وشكوى', 'الاستهلاك والهدر',
      'Eine Sendung zeigt, wie viel Essen und Plastik jede Woche im Müll landet.',
      A('Erörterung', 'Erörtern Sie: Muss der Handel weniger wegwerfen oder der Kunde weniger kaufen?',
        150, ['die These nennen', 'zwei Argumente ordnen', 'eine Maßnahme vorschlagen']),
      A('Beschwerde', 'Schreiben Sie an einen Versandhandel: Die Ware kam beschädigt und zu spät.',
        100, ['den Vorgang sachlich schildern', 'eine Lösung fordern', 'eine Frist nennen']),
      ['Verknüpfung: zunächst, allerdings, deshalb', 'Passiv: wurde geliefert']),

    T('b2-s07', 'منشور منتدى وبريد إلكتروني', 'النقل العام في المدينة',
      'Die Gemeinde will eine Buslinie streichen und dafür Radwege bauen.',
      A('Forumsbeitrag', 'Wie beurteilen Sie den Plan? Nennen Sie Vorteile und Kosten.',
        150, ['den Plan zusammenfassen', 'einen Vorteil und einen Nachteil', 'eine Alternative nennen']),
      A('formelle Nachricht', 'Schreiben Sie an die Gemeinde: Bitten Sie um eine zweite Verbindung.',
        100, ['die Strecke nennen', 'die Folge für Anwohner', 'einen konkreten Vorschlag']),
      ['Passiv mit Modalverb: gestrichen werden soll', 'Konditional: falls, sofern']),

    T('b2-s08', 'تعليق ورسالة رسمية', 'الطاقة في البيت',
      'Die Heizkosten steigen, und die Hausverwaltung kündigt höhere Abschläge an.',
      A('Kommentar', 'Schreiben Sie einen Kommentar: Sparen ist Gewohnheit, keine Heldentat.',
        150, ['den Anlass nennen', 'eine Maßnahme beschreiben', 'eine Wirkung belegen']),
      A('formelle Nachricht', 'Bitten Sie die Hausverwaltung um eine Prüfung der Heizungsanlage.',
        100, ['die Beschwerde sachlich', 'die eigene Beobachtung', 'um einen Termin bitten']),
      ['Nomen-Verb-Verbindung: eine Prüfung veranlassen', 'Vergleich: weniger … als']),

    T('b2-s09', 'مقال حجاجي ورسالة شخصية', 'العناوين والإعلام',
      'Eine Überschrift verspricht mehr, als die Untersuchung belegt.',
      A('Erörterung', 'Erörtern Sie: Wie soll man mit Zahlen in Schlagzeilen umgehen?',
        150, ['die Behauptung prüfen', 'ein Beispiel mit Quelle', 'eine Regel für Leser']),
      A('persönliche Nachricht', 'Schreiben Sie einer Freundin: Warum Sie die Meldung nicht geteilt haben.',
        100, ['den Anlass nennen', 'die Prüfung erklären', 'eine Bitte um Meinung']),
      ['Relativsatz: die Zahl, die genannt wird', 'Konjunktiv I: sie behaupte']),

    T('b2-s10', 'منشور منتدى ورسالة رسمية', 'التطوع في الحي',
      'Ein Verein sucht Helfer, aber die Zeit der Mitglieder ist knapp.',
      A('Forumsbeitrag', 'Wie kann ein Verein Aufgaben verteilen, ohne wenige zu überlasten?',
        150, ['das Problem benennen', 'einen Vorschlag begründen', 'eine Grenze einräumen']),
      A('formelle Nachricht', 'Schreiben Sie an den Verein: Sie helfen mit, aber nur an zwei Abenden.',
        100, ['das Angebot nennen', 'die zeitliche Grenze', 'eine Absprache vorschlagen']),
      ['Nomen-Verb-Verbindung: eine Aufgabe übernehmen', 'Konzessiv: obwohl, dennoch']),

    T('b2-s11', 'مقال حجاجي وشكوى', 'السياحة والمدينة',
      'Eine Stadt lebt vom Besuch und leidet unter ihm: Mieten, Müll, Lärm.',
      A('Erörterung', 'Erörtern Sie: Wie viel Tourismus verträgt eine Stadt?',
        150, ['die beiden Seiten nennen', 'ein Beispiel mit Folge', 'ein Urteil begründen']),
      A('Beschwerde', 'Schreiben Sie an ein Hotel: Das Zimmer war trotz Zusage laut.',
        100, ['die Zusage zitieren', 'die Störung schildern', 'eine Entschädigung fordern']),
      ['Verknüpfung: einerseits, andererseits', 'Passiv: wurde zugesagt']),

    T('b2-s12', 'منشور منتدى ورسالة رسمية', 'اللغة في العمل',
      'Eine Firma verlangt ein Zertifikat, obwohl die Bewerber im Alltag bestehen müssen.',
      A('Forumsbeitrag', 'Ist ein Zertifikat der richtige Beweis für Sprachfähigkeit?',
        150, ['die Frage beantworten', 'ein Gegenbeispiel', 'eine Alternative vorschlagen']),
      A('formelle Nachricht', 'Schreiben Sie an die Personalabteilung: Fragen Sie nach dem Verfahren.',
        100, ['die Stelle nennen', 'zwei sachliche Fragen', 'um eine Rückmeldung bitten']),
      ['Nomen-Verb-Verbindung: eine Frage klären', 'Passiv: wird verlangt']),

    T('b2-s13', 'تعليق ورسالة رسمية', 'الطعام والهدر',
      'Ein Bericht zeigt: Ein Drittel der Lebensmittel wird weggeworfen.',
      A('Kommentar', 'Schreiben Sie einen Kommentar mit einer Maßnahme für den Alltag.',
        150, ['die Zahl nennen', 'eine Ursache beschreiben', 'eine Maßnahme begründen']),
      A('formelle Nachricht', 'Schreiben Sie an einen Supermarkt: Bitten Sie um kleinere Packungen.',
        100, ['den Vorschlag nennen', 'einen Grund anführen', 'eine Antwort erbitten']),
      ['Vergleich: statt, anstatt', 'Konjunktiv II: könnte, würde']),

    T('b2-s14', 'منشور منتدى وبريد إلكتروني', 'الرياضة والمال',
      'Ein Verein erhöht den Beitrag. Manche Familien können nicht mehr zahlen.',
      A('Forumsbeitrag', 'Sollte Sport für Kinder kostenlos sein? Wer trägt die Kosten?',
        150, ['die Position nennen', 'ein Argument mit Beispiel', 'eine Lösung vorschlagen']),
      A('formelle Nachricht', 'Schreiben Sie an den Verein: Fragen Sie nach einer Ermäßigung.',
        100, ['die Lage schildern', 'die Frage stellen', 'um eine vertrauliche Antwort bitten']),
      ['Konjunktiv II: wäre, könnte', 'Nomen-Verb-Verbindung: einen Antrag stellen']),

    T('b2-s15', 'مقال حجاجي ورسالة رسمية', 'الدعم الثقافي',
      'Ein kleines Theater beantragt einen Zuschuss und hat die Frist fast verpasst.',
      A('Erörterung', 'Erörtern Sie: Warum soll eine Stadt Kultur fördern?',
        150, ['ein Argument nennen', 'ein Beispiel mit Wirkung', 'einen Einwand entkräften']),
      A('formelle Nachricht', 'Schreiben Sie an die Stiftung: Fragen Sie nach einer Fristverlängerung.',
        100, ['den Antrag benennen', 'den Grund für die Verspätung', 'eine klare Bitte']),
      ['Verknüpfung: daher, infolgedessen', 'Passiv: gefördert wird']),

    T('b2-s16', 'منشور منتدى وشكوى', 'الجيران والضوضاء',
      'Seit Wochen ist die Musik aus der Wohnung über Ihnen bis Mitternacht zu hören.',
      A('Forumsbeitrag', 'Wie geht man mit Lärm um, ohne den Streit zu vergrößern?',
        150, ['das Vorgehen beschreiben', 'ein Beispiel nennen', 'eine Grenze setzen']),
      A('Beschwerde', 'Schreiben Sie an die Hausverwaltung: Schildern Sie die Störung mit Zeiten.',
        100, ['Zeit und Dauer nennen', 'die bisherigen Schritte', 'eine Lösung fordern']),
      ['Relativsatz: die Wohnung, aus der …', 'Passiv: wurde gebeten']),

    T('b2-s17', 'مقال حجاجي ورسالة شخصية', 'الوقت أمام الشاشة',
      'Eine Studie nennt nur die Zahl der Stunden, nicht die Wirkung.',
      A('Erörterung', 'Erörtern Sie: Was sagt eine Stundenzahl über den Alltag aus?',
        150, ['die Grenze der Zahl erklären', 'ein Beispiel gegenüberstellen', 'eine Folgerung ziehen']),
      A('persönliche Nachricht', 'Schreiben Sie Ihrem Bruder: Schlagen Sie einen Bildschirm-freien Abend vor.',
        100, ['den Vorschlag nennen', 'einen Grund dafür', 'eine Zeit festlegen']),
      ['Konjunktiv II: Es wäre besser', 'Vergleich: genauso … wie']),

    T('b2-s18', 'تعليق ورسالة رسمية', 'التقاعد المبكر',
      'Früher aufzuhören kostet Beitrag: Die Rechnung hängt am Einkommen.',
      A('Kommentar', 'Schreiben Sie einen Kommentar: Was kostet ein früher Ausstieg wirklich?',
        150, ['die Rechnung beschreiben', 'ein Beispiel mit Zahlenbezug', 'eine Empfehlung geben']),
      A('formelle Nachricht', 'Schreiben Sie an eine Beratungsstelle: Bitten Sie um einen Termin.',
        100, ['die Frage stellen', 'die eigene Lage kurz', 'einen Terminvorschlag']),
      ['Nomen-Verb-Verbindung: eine Entscheidung treffen', 'Konditional: wenn … , dann …']),

    T('b2-s19', 'منشور منتدى ورسالة شخصية', 'القرية والمدينة',
      'Ihre Familie überlegt, aufs Dorf zu ziehen, weil die Miete dort niedriger ist.',
      A('Forumsbeitrag', 'Was spricht für das Dorf, was für die Stadt? Wiegen Sie ab.',
        150, ['zwei Vorteile vergleichen', 'einen Nachteil abwägen', 'eine Entscheidungshilfe geben']),
      A('persönliche Nachricht', 'Schreiben Sie Ihrer Familie: Was Sie abwägen und was Sie brauchen.',
        100, ['die Abwägung nennen', 'eine Bedingung', 'eine Bitte um Antwort']),
      ['Vergleich: im Vergleich zu … , dagegen …', 'Konjunktiv II: müsste, bräuchte']),

    T('b2-s20', 'مقال حجاجي ورسالة رسمية', 'العدل في الامتحان',
      'Ein Modul rettet das andere nicht: Wer in einem Teil schwach bleibt, besteht nicht.',
      A('Erörterung', 'Erörtern Sie: Ist diese Regel gerecht? Was hilft einem schwachen Kandidaten?',
        150, ['die Regel darstellen', 'ein Pro und ein Contra', 'ein Fazit ziehen']),
      A('formelle Nachricht', 'Schreiben Sie an die Prüfungsstelle: Fragen Sie nach der Bewertung.',
        100, ['die Frage sachlich', 'der eigene Fall kurz', 'um eine schriftliche Auskunft bitten']),
      ['Konjunktiv II: Hätte ich früher geübt …', 'Passiv: wird bewertet'])
  ];

  root.DW_WRITING_BANK = root.DW_WRITING_BANK || {};
  root.DW_WRITING_BANK.B2 = {
    level: 'B2',
    minutes: 75,
    axes: ['inhalt', 'aufbau', 'ausdruck', 'korrektheit'],
    task1: { kind: 'Meinungstext', minWords: 150, minutes: 50 },
    task2: { kind: 'Nachricht', minWords: 100, minutes: 25 },
    tasks: tasks
  };
})(typeof window !== 'undefined' ? window : global);

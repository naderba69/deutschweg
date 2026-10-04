/* Deutschweg — B2 recorded discussions (PROMPT §13.3 track T6, §12.1 Sprechen).
 *
 * Fifteen discussions in the exam's own shape: **15 minutes of preparation**,
 * then a short presentation (**~4 minutes**) with partner questions, then a
 * discussion with the partner (**~5 minutes**). Each task names the input it
 * works from — a short German text or a set of figures, because the exam hands
 * one out during the preparation — the presentation's content points, the
 * partner's question, and the discussion's points.
 *
 * The six axes of §12.2 apply (completeness · interaction · connected speech ·
 * range · correctness · *does pronunciation impede understanding?*), and the
 * engine scores only a real recording: no recording, no score.
 *
 * The map (DW_SPEAKING, in inventory.js) declares the promise; this file is the
 * content, the same way DW_WRITING declares the writing and DW_WRITING_BANK
 * carries it.
 */
(function (root) {
  function D(id, title, situation, input, pres, disc) {
    return {
      id: id, n: Number(id.slice(4, 6)), title: title, situation: situation, input: input,
      prepMinutes: 15, minutes: 15,
      presentation: pres, discussion: disc, axes: ['inhalt', 'interaktion', 'fluss', 'spanne', 'korrektheit', 'verstaendlichkeit']
    };
  }
  function P(topic, points, seconds) { return { topic: topic, points: points, seconds: seconds }; }

  const tasks = [
    D('b2-d01', 'العمل من البيت',
      'Ihr Kurs diskutiert Homeoffice. Sie präsentieren zuerst, dann fragt Ihr Partner.',
      'Vier von fünf Beschäftigten nennen Homeoffice als Vorteil. Die Hälfte klagt über fehlende Grenzen zum Feierabend.',
      P('Stellen Sie die Lage dar und nennen Sie zwei Regeln für gutes Homeoffice.',
        ['eine Zahl aus dem Text', 'zwei Regeln mit Begründung', 'eine Grenze des Modells'], 240),
      { prompt: 'Ihr Partner sagt: Ohne Büro sinkt die Leistung. Antworten Sie mit einer Bedingung.',
        points: ['auf den Einwand eingehen', 'eine Bedingung nennen', 'das eigene Fazit'], seconds: 300 }),

    D('b2-d02', 'الإيجار في المدينة',
      'Ein Ausschuss berät über Mieten. Sie sprechen für die Mieter einer Straße.',
      'Die Mieten stiegen in fünf Jahren um ein Viertel. Die Löhne stiegen langsamer.',
      P('Erklären Sie die Entwicklung und schlagen Sie eine Maßnahme vor.',
        ['die Zahl einordnen', 'eine Ursache nennen', 'eine Maßnahme mit Folge'], 240),
      { prompt: 'Ihr Partner hält Mietpreisbremsen für wirkungslos. Wie antworten Sie?',
        points: ['den Einwand aufnehmen', 'ein Beispiel anführen', 'ein gemeinsames Fazit'], seconds: 300 }),

    D('b2-d03', 'الطريق إلى العمل',
      'Ihre Gemeinde plant, den frühen Bus zu streichen. Sie werden angehört.',
      'Der erste Bus fährt um 5:40 Uhr und ist zu 80 Prozent besetzt. Gestrichen wird er wegen der Kosten.',
      P('Präsentieren Sie die Lage der Pendler und zwei Alternativen.',
        ['wer betroffen ist', 'zwei Alternativen', 'die Kosten der Alternativen'], 240),
      { prompt: 'Ihr Partner fragt, warum die Gemeinde nicht einfach mehr zahlt. Antworten Sie.',
        points: ['die Grenze des Budgets', 'eine Priorität setzen', 'einen Kompromiss'], seconds: 300 }),

    D('b2-d04', 'الرقمنة في المدرسة',
      'Ein Elternabend zum Thema Tablets. Sie präsentieren die Studie der Stadt.',
      'In zwölf Schulen wurden Tablets eingeführt; sechs berichten von besserer Übung, drei von mehr Ablenkung.',
      P('Präsentieren Sie die Ergebnisse und zwei Bedingungen für den Einsatz.',
        ['zwei Zahlen nennen', 'zwei Bedingungen', 'eine offene Frage'], 240),
      { prompt: 'Ihr Partner meint, Geräte ersetzten keine Lehrkraft. Stimmen Sie zu?',
        points: ['zustimmen und ergänzen', 'ein Beispiel', 'eine Grenze'], seconds: 300 }),

    D('b2-d05', 'الوقاية الصحية',
      'Eine Praxis lädt zum Gespräch über Vorsorge ein. Sie stellen das Programm vor.',
      'Nur jeder dritte Erwachsene nimmt eine Vorsorgeuntersuchung wahr. Die Wartezeit beträgt vier Wochen.',
      P('Stellen Sie das Programm vor und nennen Sie zwei Hindernisse.',
        ['das Ziel des Programms', 'zwei Hindernisse', 'eine Lösung'], 240),
      { prompt: 'Ihr Partner sagt, Vorsorge sei Privatsache. Wie erwidern Sie?',
        points: ['die Gegenposition', 'ein Argument mit Folge', 'eine Einigung'], seconds: 300 }),

    D('b2-d06', 'الاستهلاك والهدر',
      'Ihr Verein startet eine Aktion gegen Wegwerfen. Sie eröffnen den Abend.',
      'Pro Kopf werden im Jahr 78 Kilogramm Lebensmittel weggeworfen. Ein Drittel wäre noch genießbar.',
      P('Präsentieren Sie die Aktion und zwei Schritte für den Alltag.',
        ['die Zahl nennen', 'zwei Schritte', 'was die Aktion verlangt'], 240),
      { prompt: 'Ihr Partner hält Aufklärung für wirkungslos. Was entgegnen Sie?',
        points: ['den Einwand achten', 'eine konkrete Wirkung', 'ein gemeinsames Vorgehen'], seconds: 300 }),

    D('b2-d07', 'النقل العام',
      'Die Stadt will eine Buslinie durch Radwege ersetzen. Sie nehmen Stellung.',
      'Die Linie 4 befördert 1.200 Fahrgäste am Tag. Der Radweg kostet einmalig 400.000 Euro.',
      P('Vergleichen Sie die beiden Wege und nennen Sie eine Entscheidungshilfe.',
        ['beide Zahlen nutzen', 'einen Vorteil und einen Nachteil', 'eine Empfehlung'], 240),
      { prompt: 'Ihr Partner will beides gleichzeitig. Ist das möglich?',
        points: ['die Bedingung prüfen', 'eine Reihenfolge', 'ein Fazit'], seconds: 300 }),

    D('b2-d08', 'الطاقة في البيت',
      'Eine Hausverwaltung informiert über höhere Abschläge. Sie sprechen für die Bewohner.',
      'Die Abschläge steigen um 22 Prozent. Ein Teil der Häuser ist ungedämmt.',
      P('Erklären Sie die Erhöhung und schlagen Sie zwei Maßnahmen vor.',
        ['die Ursache benennen', 'zwei Maßnahmen', 'wer sie zahlen sollte'], 240),
      { prompt: 'Ihr Partner fragt, ob Dämmen oder Heizen zuerst kommt. Wie ordnen Sie?',
        points: ['eine Reihenfolge', 'eine Begründung', 'ein Zugeständnis'], seconds: 300 }),

    D('b2-d09', 'العناوين والإعلام',
      'Ein Medienabend fragt: Wie prüft man eine Zahl in der Schlagzeile?',
      'Eine Schlagzeile nennt ein Risiko, das die Studie nur als Zusammenhang beschreibt.',
      P('Zeigen Sie an einem Beispiel, wie man eine Zahl prüft.',
        ['die Schlagzeile zitieren', 'die Prüfung in drei Schritten', 'eine Regel für Leser'], 240),
      { prompt: 'Ihr Partner sagt, Prüfen sei Sache der Journalisten. Antworten Sie.',
        points: ['den Einwand aufnehmen', 'einen eigenen Beitrag', 'ein Ergebnis'], seconds: 300 }),

    D('b2-d10', 'التطوع في الحي',
      'Ein Verein sucht Helfer. Sie stellen das Halbjahresprogramm vor.',
      'Der Verein hat 60 Mitglieder und 5 Helfer. Zwei Feste liegen im selben Monat.',
      P('Präsentieren Sie das Programm und zwei Wege zur Verteilung.',
        ['die Zahlen nennen', 'zwei Wege', 'die Grenze der Zeit'], 240),
      { prompt: 'Ihr Partner findet, wer zahlt, muss nicht helfen. Was erwidern Sie?',
        points: ['die Position verstehen', 'ein Gegenbeispiel', 'einen Kompromiss'], seconds: 300 }),

    D('b2-d11', 'السياحة والمدينة',
      'Ihr Viertel wird im Sommer sehr voll. Sie präsentieren im Bürgerhaus.',
      'Im Sommer steigen die Besucherzahlen um 40 Prozent; gleichzeitig steigen die Mieten im Viertel.',
      P('Präsentieren Sie die beiden Seiten und einen Vorschlag.',
        ['beide Entwicklungen', 'ein Beispiel mit Folge', 'einen Vorschlag'], 240),
      { prompt: 'Ihr Partner sagt, Tourismus fülle nur die Kassen. Antworten Sie.',
        points: ['die Aussage prüfen', 'eine andere Kostenart', 'ein Fazit'], seconds: 300 }),

    D('b2-d12', 'اللغة في العمل',
      'Ein Bewerbungsforum. Sie zeigen, was Zertifikate belegen und was nicht.',
      'Zwei von drei Betrieben verlangen ein Zertifikat, prüfen aber im Vorstellungsgespräch selbst.',
      P('Stellen Sie die Lage dar und nennen Sie zwei andere Nachweise.',
        ['die Zahlen', 'zwei Nachweise', 'was das für Bewerber heißt'], 240),
      { prompt: 'Ihr Partner fragt: Ist das Zertifikat damit nutzlos? Antworten Sie.',
        points: ['das Zertifikat einordnen', 'eine Alternative', 'ein gemeinsam Fazit'], seconds: 300 }),

    D('b2-d13', 'الرياضة والمال',
      'Eine Elternversammlung im Sportverein. Sie stellen die Beitragsordnung vor.',
      'Der Beitrag steigt um 3 Euro im Monat. Zehn Familien haben um Hilfe gebeten.',
      P('Erklären Sie die Erhöhung und zwei Wege zur Unterstützung.',
        ['die Gründe', 'zwei Wege', 'was der Verein braucht'], 240),
      { prompt: 'Ihr Partner sagt, Sport dürfe nichts kosten. Wie antworten Sie?',
        points: ['die Kosten benennen', 'eine Grenze', 'eine gemeinsame Lösung'], seconds: 300 }),

    D('b2-d14', 'القرية والمدينة',
      'Ein Umzug steht in Ihrer Familie zur Debatte. Sie präsentieren die Abwägung.',
      'Im Dorf ist die Miete halb so hoch. Der Weg zum Krankenhaus dauert nachts 35 Minuten länger.',
      P('Wägen Sie beide Orte ab und geben Sie eine Entscheidungshilfe.',
        ['zwei Vorteile', 'zwei Nachteile', 'eine Entscheidungshilfe'], 240),
      { prompt: 'Ihr Partner fragt nach dem Notfall. Was ändert Ihre Abwägung?',
        points: ['die Bedeutung des Notfalls', 'eine Vorkehrung', 'ein Fazit'], seconds: 300 }),

    D('b2-d15', 'العدل في الامتحان',
      'Ein Kursabend vor der Prüfung. Sie erklären die Bewertungsregeln.',
      'Ein Modul rettet kein anderes: Wer in einem Teil unter 60 Punkten bleibt, besteht nicht.',
      P('Erklären Sie die Regel und zwei Wege, sie zu bestehen.',
        ['die Regel in zwei Sätzen', 'zwei Wege', 'was ein schwacher Teil braucht'], 240),
      { prompt: 'Ihr Partner hält die Regel für ungerecht. Wie gehen Sie damit um?',
        points: ['den Einwand anerkennen', 'die Begründung der Regel', 'ein eigenes Fazit'], seconds: 300 })
  ];

  root.DW_SPEAKING_BANK = root.DW_SPEAKING_BANK || {};
  root.DW_SPEAKING_BANK.B2 = {
    level: 'B2',
    prepMinutes: 15,
    minutes: 15,
    axes: ['inhalt', 'interaktion', 'fluss', 'spanne', 'korrektheit', 'verstaendlichkeit'],
    presentation: { seconds: 240 },
    discussion: { seconds: 300 },
    tasks: tasks
  };
})(typeof window !== 'undefined' ? window : global);

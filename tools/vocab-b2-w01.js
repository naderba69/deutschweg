/* Deutschweg — B2 lexical layer, workshop 1: b2-w01 Textanalyse.

   Route C of DECISIONS-PENDING item 20 (the owner's choice): a B2 workshop
   declares 90 receptive words. 40 are authored here as full list items — the
   most the 24–36 step template can carry at 2–4 words per Wortschatz step —
   and the remaining 50 are declared in `material`: bare headwords the
   workshop's German text must actually contain.

   The compiler enforces both halves: every material word is looked up in the
   German strings of the compiled lesson, and a material word that duplicates
   an authored headword is refused (no word is counted twice). The coverage
   gate reads 40 + 50 = 90 against the row's declaration. */

module.exports = {

  'b2-w01': {
    items: [
      ['analysieren', 'analysiert · analysierte · hat analysiert', 'يحلّل', 'Ich analysiere das Gedicht und markiere jedes Schlüsselwort.', 'Ich analysiere über das Gedicht.', 'بلا حرف جر.', 'kasus', 'analysiere'],
      ['die Analyse', 'die Analysen', 'التحليل', 'Die Analyse des Romans beginnt mit dem Aufbau.', 'Die Analyse von dem Roman beginnt mit dem Aufbau.', 'Genitiv أفضل: des Romans.', 'kasus', 'Analyse'],
      ['die Deutung', 'die Deutungen', 'التأويل', 'Die Deutung stützt sich auf eine Textstelle.', 'Die Deutung stützt sich auf ein Textstelle.', 'مؤنث نصب: eine.', 'genus', 'Deutung'],
      ['deuten', 'deutet · deutete · hat gedeutet', 'يؤوّل', 'Ich deute die Szene anders als mein Nachbar.', 'Ich deute die Szene anders wie mein Nachbar.', 'المقارنة: als لا wie.', 'kasus', 'deute'],
      ['die Beschreibung', 'die Beschreibungen', 'الوصف', 'Die Beschreibung bleibt neutral und wertet nicht.', 'Die Beschreibung bleibt neutral und wertet.', 'النفي: nicht.', 'wortstellung', 'Beschreibung'],
      ['beschreiben', 'beschreibt · beschrieb · hat beschrieben', 'يصف', 'Beschreibe zuerst den Kontext und dann die Wirkung.', 'Beschreibe zuerst den Kontext und dann die Wirkung du.', 'التعليمة بلا ضمير.', 'wortstellung', 'Beschreibe'],
      ['der Beleg', 'die Belege', 'الدليل النصي', 'Als Beleg dient der Verweis auf die Fußnote.', 'Als Beleg dient der Verweis zu der Fußnote.', 'auf لا zu.', 'präposition', 'Beleg'],
      ['belegen', 'belegt · belegte · hat belegt', 'يستشهد بـ', 'Diese Stelle belegt die Behauptung.', 'Diese Stelle belegt für die Behauptung.', 'بلا حرف جر.', 'kasus', 'belegt'],
      ['das Zitat', 'die Zitate', 'الاقتباس', 'Das Zitat stammt aus dem Dialog.', 'Das Zitat stammt von dem Dialog.', 'aus لا von (المصدر).', 'präposition', 'Zitat'],
      ['zitieren', 'zitiert · zitierte · hat zitiert', 'يقتبس', 'Ich zitiere den Monolog aus der Kurzgeschichte.', 'Ich zitiere von dem Monolog.', 'بلا حرف جر.', 'kasus', 'zitiere'],
      ['die Stelle', 'die Stellen', 'الموضع', 'Die Stelle wirkt wie eine Anspielung.', 'Die Stelle wirkt wie ein Anspielung.', 'مؤنث: eine.', 'genus', 'Stelle'],
      ['der Abschnitt', 'die Abschnitte', 'المقطع', 'Der Abschnitt endet mit einer Steigerung, die als Überleitung wirkt.', 'Der Abschnitt endet mit ein Steigerung.', 'mit + داتيف: einer.', 'kasus', 'Abschnitt'],
      ['der Absatz', 'die Absätze', 'الفقرة', 'Der Absatz bildet einen Sinnabschnitt.', 'Der Absatz bildet ein Sinnabschnitt.', 'مذكر نصب: einen.', 'genus', 'Absatz'],
      ['die Zeile', 'die Zeilen', 'السطر', 'Diese Zeile trägt einen bitteren Unterton.', 'Diese Zeile trägt ein bitteren Unterton.', 'مذكر نصب: einen.', 'kasus', 'Zeile'],
      ['der Zusammenhang', 'die Zusammenhänge', 'الترابط', 'Der Zusammenhang zwischen den Ebenen bleibt offen.', 'Der Zusammenhang zwischen die Ebenen bleibt offen.', 'zwischen + داتيف: den.', 'kasus', 'Zusammenhang'],
      ['die Aussage', 'die Aussagen', 'المضمون', 'Die Aussage der Erzählung bleibt zweideutig.', 'Die Aussage von der Erzählung bleibt zweideutig.', 'Genitiv أفضل.', 'kasus', 'Aussage'],
      ['die Wertung', 'die Wertungen', 'التقييم', 'Die Wertung des Erzählers ist kaum versteckt.', 'Die Wertung von dem Erzähler ist kaum versteckt.', 'Genitiv أفضل.', 'kasus', 'Wertung'],
      ['werten', 'wertet · wertete · hat gewertet', 'يقيّم', 'Ich werte diese Gegenüberstellung als Kritik.', 'Ich werte diese Gegenüberstellung für Kritik.', 'als لا für.', 'präposition', 'werte'],
      ['die Tatsache', 'die Tatsachen', 'الواقعة', 'Diese Tatsache stützt die Beweisführung.', 'Diese Tatsache stützt für die Beweisführung.', 'بلا حرف جر.', 'kasus', 'Tatsache'],
      ['die Schlussfolgerung', 'die Schlussfolgerungen', 'الاستنتاج', 'Die Schlussfolgerung kommt vor dem Wendepunkt.', 'Die Schlussfolgerung kommt vor der Wendepunkt.', 'مذكر داتيف: dem.', 'kasus', 'Schlussfolgerung'],
      ['schließen', 'schließt · schloss · hat geschlossen', 'يستنتج', 'Aus dem Höhepunkt schließe ich nichts.', 'Aus dem Höhepunkt schließe ich nichts es.', 'لا ضمير زائد.', 'wortstellung', 'schließe'],
      ['die Struktur', 'die Strukturen', 'البنية', 'Die Struktur folgt einer klaren Rhetorik.', 'Die Struktur folgt ein klaren Rhetorik.', 'داتيف: einer.', 'kasus', 'Struktur'],
      ['die Einleitung', 'die Einleitungen', 'المقدمة', 'Die Einleitung nennt die Gattung und die Epoche.', 'Die Einleitung nennt die Gattung und die Epoche es.', 'لا ضمير زائد.', 'wortstellung', 'Einleitung'],
      ['der Hauptteil', 'die Hauptteile', 'المتن', 'Im Hauptteil steht die Argumentation der Erörterung.', 'In Hauptteil steht die Argumentation.', 'im.', 'präposition', 'Hauptteil'],
      ['der Schluss', 'die Schlüsse', 'الخاتمة', 'Der Schluss enthält ein kurzes Fazit und eine Kernaussage.', 'Der Schluss enthält ein kurzes Fazit es.', 'لا ضمير زائد.', 'wortstellung', 'Schluss'],
      ['die Wirkung', 'die Wirkungen', 'الأثر', 'Die Wirkung entsteht aus dem Gefühl, nicht aus der Erfahrung.', 'Die Wirkung entsteht von dem Gefühl.', 'aus لا von.', 'präposition', 'Wirkung'],
      ['die Absicht', 'die Absichten', 'القصد', 'Die Absicht des Textes ist ein Appell an die Vernunft.', 'Die Absicht des Textes ist ein Appell für die Vernunft.', 'an لا für.', 'präposition', 'Absicht'],
      ['der Adressat', 'die Adressaten', 'المتلقّي', 'Der Adressat ist eine klare Zielgruppe.', 'Der Adressat ist ein klare Zielgruppe.', 'مؤنث: eine.', 'genus', 'Adressat'],
      ['die Perspektive', 'die Perspektiven', 'المنظور', 'Die Perspektive wechselt in jedem Kapitel.', 'Die Perspektive wechselt in jede Kapitel.', 'في: in + داتيف.', 'kasus', 'Perspektive'],
      ['der Erzähler', 'die Erzähler', 'الراوي', 'Der Erzähler bleibt distanziert.', 'Der Erzähler bleibt distanziert gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Erzähler'],
      ['die Figur', 'die Figuren', 'الشخصية', 'Die Figur verkörpert ein Leitmotiv.', 'Die Figur verkörpert ein Leitmotiv es.', 'لا ضمير زائد.', 'wortstellung', 'Figur'],
      ['das Motiv', 'die Motive', 'الدافع الفني', 'Das Motiv kehrt als Wiederholung wieder.', 'Das Motiv kehrt als Wiederholung.', 'المنفصل: wieder.', 'wortstellung', 'wieder'],
      ['die Metapher', 'die Metaphern', 'الاستعارة', 'Die Metapher ist die häufigste Sprachfigur und trägt die Symbolik.', 'Die Metapher ist der häufigste Sprachfigur.', 'مؤنث: die.', 'genus', 'Metapher'],
      ['die Ironie', 'die Ironien', 'السخرية', 'Die Ironie entlarvt die Verallgemeinerung, der Gegensatz bleibt unausgesprochen.', 'Die Ironie entlarvt für die Verallgemeinerung.', 'بلا حرف جر.', 'kasus', 'Ironie'],
      ['der Widerspruch', 'die Widersprüche', 'التناقض', 'Der Widerspruch schwächt die Schlüssigkeit.', 'Der Widerspruch schwächt für die Schlüssigkeit.', 'بلا حرف جر.', 'kasus', 'Widerspruch'],
      ['der Beweis', 'die Beweise', 'البرهان', 'Als Beweis dient ein Beispiel aus dem Alltag.', 'Als Beweis dient ein Beispiel von dem Alltag.', 'aus لا von.', 'präposition', 'Beweis'],
      ['die Begründung', 'die Begründungen', 'التعليل', 'Die Begründung wahrt die Nachvollziehbarkeit.', 'Die Begründung wahrt für die Nachvollziehbarkeit.', 'بلا حرف جر.', 'kasus', 'Begründung'],
      ['die These', 'die Thesen', 'الأطروحة', 'Die These stützt sich auf eine Statistik.', 'Die These stützt sich auf ein Statistik.', 'مؤنث: eine.', 'genus', 'These'],
      ['die Wortwahl', 'die Wortwahlen', 'اختيار الكلمات', 'Die Wortwahl verrät eine Erzählhaltung.', 'Die Wortwahl verrät ein Erzählhaltung.', 'مؤنث: eine.', 'genus', 'Wortwahl'],
      ['der Stil', 'die Stile', 'الأسلوب', 'Der Stil wirkt ruhig, fast ohne Emotion.', 'Der Stil wirkt ruhig, fast ohne die Emotion.', 'بعد ohne بلا أداة.', 'kasus', 'Stil']
    ],
    material: [
      'das Schlüsselwort', 'die Überleitung', 'die Anspielung', 'der Unterton',
      'die Gegenüberstellung', 'das Fazit', 'der Aufbau', 'der Kontext',
      'die Ebene', 'die Rhetorik', 'die Argumentation', 'die Erörterung',
      'die Gattung', 'die Epoche', 'das Gedicht', 'die Erzählung',
      'der Roman', 'die Kurzgeschichte', 'die Szene', 'der Dialog',
      'der Monolog', 'der Höhepunkt', 'der Wendepunkt', 'die Behauptung',
      'die Beweisführung', 'die Schlüssigkeit', 'die Nachvollziehbarkeit',
      'der Sinnabschnitt', 'die Kernaussage', 'die Textstelle', 'der Verweis',
      'die Fußnote', 'die Symbolik', 'das Leitmotiv', 'die Erzählhaltung',
      'die Sprachfigur', 'die Wiederholung', 'die Steigerung', 'der Gegensatz',
      'die Verallgemeinerung', 'das Beispiel', 'die Statistik', 'die Erfahrung',
      'die Vernunft', 'das Gefühl', 'die Emotion', 'der Appell',
      'die Zielgruppe', 'das Kapitel', 'die Textanalyse'
    ],
    tricks: [
      { trick: 'وصف أولًا ثم تأويل: zuerst beschreiben, dann deuten', wie: 'Zuerst beschreibe ich den Abschnitt, dann deute ich die Stelle.', warum: 'الحكم قبل الوصف يُفقد النص، والعربية تبدأ بالانطباع ثم تبحث عن الشاهد.', anchor: 'beschreiben' },
      { trick: 'كل تأويل يحتاج موضعًا: die Deutung stützt sich auf eine Textstelle', wie: 'Die Deutung stützt sich auf eine Textstelle, nicht auf den ganzen Text.', warum: 'الشاهد المحدَّد هو ما يميّز التحليل عن الرأي، والموضع يُذكر بسطر أو فقرة.', anchor: 'die Deutung' },
      { trick: 'لا تخترع سببًا لم يقله النص: die Quelle nennt keine Ursache', wie: 'Die Quelle nennt keine Ursache, also schreibe ich keine.', warum: 'إضافة نية لم يذكرها النص تُعدّ خطأً في B2، والنص الصامت جزء من القراءة.', anchor: 'die Quelle' }
    ]
  }

};

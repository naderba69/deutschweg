/* Deutschweg — B2 lexical layer, workshop 2: b2-w02 Erörterung (ورشة كتابة: موقف).
   Route C: 40 authored items + 50 material words = the 90 the row declares.
   The audit checks every material word against this workshop's German text. */

module.exports = {

  'b2-w02': {
    items: [
      ['erörtern', 'erörtert · erörterte · hat erörtert', 'يناقش بالحجة', 'Wir erörtern die Frage, ob Homeoffice sinnvoll ist.', 'Wir erörtern über die Frage, ob Homeoffice sinnvoll ist.', 'بلا حرف جر.', 'kasus', 'erörtern'],
      ['die Erörterung', 'die Erörterungen', 'المقال الحجاجي', 'Die Erörterung verlangt eine klare Gliederung.', 'Die Erörterung verlangt ein klare Gliederung.', 'مؤنث نصب: eine.', 'genus', 'Erörterung'],
      ['die Gliederung', 'die Gliederungen', 'التقسيم', 'Die Gliederung gibt dem Text Aufbau und klaren Satzbau.', 'Die Gliederung steht in dem ersten Satz.', 'vor لا in (الترتيب).', 'präposition', 'Gliederung'],
      ['die These', 'die Thesen', 'الأطروحة', 'Die These ist die Kernaussage der Einleitung.', 'Die These steht in die Einleitung.', 'in + داتيف.', 'kasus', 'These'],
      ['das Argument', 'die Argumente', 'الحجة', 'Ein Argument ohne Statistik bleibt schwach.', 'Ein Argument ohne ein Beispiel wirkt schwach.', 'بعد ohne بلا أداة.', 'kasus', 'Argument'],
      ['das Beispiel', 'die Beispiele', 'المثال', 'Das Beispiel trägt die Beweisführung, ersetzt sie aber nicht.', 'Das Beispiel macht die Argumentation konkret es.', 'لا ضمير زائد.', 'wortstellung', 'Beispiel'],
      ['der Beleg', 'die Belege', 'الدليل', 'Ohne Beleg bleibt die Behauptung leer.', 'Ohne ein Beleg bleibt die Behauptung leer.', 'بعد ohne بلا أداة.', 'kasus', 'Beleg'],
      ['die Behauptung', 'die Behauptungen', 'الادّعاء', 'Ohne Beleg bleibt die Behauptung eine Verallgemeinerung.', 'Ein Behauptung ersetzt kein Argument.', 'مؤنث: eine.', 'genus', 'Behauptung'],
      ['die Begründung', 'die Begründungen', 'التعليل', 'Die Begründung zeigt die Kausalität des Arguments.', 'Die Begründung folgt direkt in die These.', 'auf + نصب.', 'präposition', 'Begründung'],
      ['begründen', 'begründet · begründete · hat begründet', 'يعلّل', 'Begründe deine Meinung mit zwei Gründen!', 'Begründe deine Meinung mit zwei Gründen du!', 'التعليمة بلا ضمير.', 'wortstellung', 'Begründe'],
      ['der Grund', 'die Gründe', 'السبب', 'Für jeden Grund brauchst du ein Beispiel.', 'Für jeden Grund brauchst du ein Beispiel es.', 'لا ضمير زائد.', 'wortstellung', 'Grund'],
      ['der Vorteil', 'die Vorteile', 'الميزة', 'Die Gewichtung zeigt, welcher Vorteil wirklich zählt.', 'Ein Vorteil ist die gesparte Fahrzeit es.', 'لا ضمير زائد.', 'wortstellung', 'Vorteil'],
      ['der Nachteil', 'die Nachteile', 'العيب', 'Der größte Nachteil ist der Schwerpunkt der Kritik.', 'Der größte Nachteil ist die Isolation gemacht.', 'الصيغة تكفي.', 'lexik-kollokation', 'Nachteil'],
      ['der Aspekt', 'die Aspekte', 'الجانب', 'Zwei Aspekte stehen im Gegensatz zueinander.', 'Du musst beide Aspekte betrachten du.', 'لا ضمير زائد.', 'wortstellung', 'Aspekte'],
      ['betrachten', 'betrachtet · betrachtete · hat betrachtet', 'يعاين', 'Betrachte die Argumentationskette von Anfang an!', 'Betrachte das Problem von zwei Seiten du!', 'التعليمة بلا ضمير.', 'wortstellung', 'Betrachte'],
      ['abwägen', 'wägt ab · wog ab · hat abgewogen', 'يوازن', 'Man muss die Vor- und Nachteile abwägen.', 'Man muss die Vor- und Nachteile wägen.', 'المنفصل: ab.', 'wortstellung', 'abwägen'],
      ['die Abwägung', 'die Abwägungen', 'الموازنة', 'Der Zweck der Abwägung ist ein klares Urteil.', 'Die Abwägung führt zu einem klaren Urteil.', 'zu + داتيف: einem.', 'kasus', 'Abwägung'],
      ['das Urteil', 'die Urteile', 'الحكم', 'Das Urteil hängt von der Nachvollziehbarkeit ab.', 'Das Urteil steht in Ende der Erörterung.', 'am Ende.', 'präposition', 'Urteil'],
      ['die Schlussfolgerung', 'die Schlussfolgerungen', 'الاستنتاج', 'Die Schlussfolgerung prüft die Schlüssigkeit der Argumente.', 'Die Schlussfolgerung fasst die Argumente.', 'مركّبة: Schluss + Folgerung.', 'wortstellung', 'Schlussfolgerung'],
      ['zusammenfassen', 'fasst zusammen · fasste zusammen · hat zusammengefasst', 'يلخّص', 'Fasse deine These am Schluss zusammen!', 'Fasse deine These am Schluss du zusammen!', 'التعليمة بلا ضمير.', 'wortstellung', 'zusammen'],
      ['die Einleitung', 'die Einleitungen', 'المقدمة', 'Die Einleitung weckt Interesse am Thema.', 'Die Einleitung weckt Interesse für das Thema.', 'an لا für.', 'präposition', 'Einleitung'],
      ['der Hauptteil', 'die Hauptteile', 'المتن', 'Im Hauptteil stehen Pro-Argumente und Contra-Argumente.', 'In Hauptteil stehen die Argumente.', 'im.', 'präposition', 'Hauptteil'],
      ['der Schluss', 'die Schlüsse', 'الخاتمة', 'Der Schluss wiederholt nicht die Einleitung.', 'Der Schluss wiederholt nicht die Einleitung es.', 'لا ضمير زائد.', 'wortstellung', 'Schluss'],
      ['der Übergang', 'die Übergänge', 'الانتقال', 'Ein guter Übergang verbindet die Absätze ohne Zwischenüberschrift.', 'Ein guter Übergang verbindet die Absatz.', 'الجمع: Absätze.', 'plural', 'Übergang'],
      ['die Stellungnahme', 'die Stellungnahmen', 'بيان الموقف', 'Die Stellungnahme verrät Ironie und Unterton.', 'Die Stellungnahme vertritt nur ein Seite.', 'مؤنث: eine.', 'genus', 'Stellungnahme'],
      ['das Fazit', 'die Fazits', 'الخلاصة', 'Das Fazit darf keinen Kompromiss erfinden.', 'Das Fazit darf keine neue Argumente bringen.', 'الجمع نصب: keine neuen.', 'kasus', 'Fazit'],
      ['die Meinung', 'die Meinungen', 'الرأي', 'Deine Meinung ist eine Tendenz, kein Beleg.', 'Meine Meinung stützt sich auf Erfahrung es.', 'لا ضمير زائد.', 'wortstellung', 'Meinung'],
      ['die Gegenposition', 'die Gegenpositionen', 'الموقف المضاد', 'Die Gegenüberstellung lässt die Gegenposition zu Wort kommen.', 'Die Gegenposition hat auch gut Gründe.', 'الجمع نصب: gute.', 'kasus', 'Gegenposition'],
      ['widersprechen', 'widerspricht · widersprach · hat widersprochen', 'يعترض', 'Dieser Autor widerspricht der Mehrheit.', 'Dieser Autor widerspricht die Mehrheit.', 'داتيف: der Mehrheit.', 'kasus', 'widerspricht'],
      ['zustimmen', 'stimmt zu · stimmte zu · hat zugestimmt', 'يوافق', 'Ich stimme dem Autor zu, doch ein Konsens fehlt.', 'Ich stimme den Autor in einem Punkt zu.', 'داتيف: dem Autor.', 'kasus', 'stimme'],
      ['überzeugen', 'überzeugt · überzeugte · hat überzeugt', 'يقنع', 'Ein Beispiel überzeugt mehr als ein Satz.', 'Ein Beispiel überzeugt mehr wie ein Satz.', 'أفعل: als.', 'kasus', 'überzeugt'],
      ['überzeugend', '—', 'مقنع', 'Eine Wertung ist erst mit Beleg überzeugend.', 'Deine Argumentation ist überzeugend gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'überzeugend'],
      ['nachvollziehbar', '—', 'مفهوم ومتّسق', 'Der Gedanke ist gut nachvollziehbar.', 'Der Gedanke ist gut nachvollziehbar gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'nachvollziehbar'],
      ['der Widerspruch', 'die Widersprüche', 'التناقض', 'Ein Widerspruch entlarvt jedes Vorurteil.', 'Ein Widerspruch schwächt jeden Text es.', 'لا ضمير زائد.', 'wortstellung', 'Widerspruch'],
      ['schlüssig', '—', 'متماسك', 'Die Argumentation muss schlüssig sein.', 'Die Argumentation muss schlüssig gemacht sein.', 'الصفة تكفي.', 'lexik-kollokation', 'schlüssig'],
      ['die Reihenfolge', 'die Reihenfolgen', 'الترتيب', 'Die Reihenfolge der Argumente zeigt die Priorität.', 'Die Reihenfolge von den Argumenten ist wichtig.', 'Genitiv أفضل.', 'kasus', 'Reihenfolge'],
      ['das Fazit ziehen', 'zieht · zog · hat gezogen', 'يستخلص', 'Am Ende ziehe ich ein Fazit, die Korrektur kommt danach.', 'Am Ende ich ziehe ein klares Fazit.', 'الفعل ثانٍ بعد الظرف.', 'wortstellung', 'ziehe'],
      ['die Wortwahl', 'die Wortwahlen', 'اختيار الكلمات', 'Eine sachliche Wortwahl nimmt die Kritik ernst.', 'Eine sachlich Wortwahl wirkt glaubwürdig.', 'الصفة: sachliche.', 'deklination', 'Wortwahl'],
      ['der Adressat', 'die Adressaten', 'المتلقّي', 'Der Adressat bestimmt den Ton.', 'Der Adressat bestimmt der Ton.', 'المفعول نصب: den Ton.', 'kasus', 'Adressat'],
      ['die Redemittel', '—', 'العبارات الجاهزة', 'Redemittel für die Einräumung heißen: zwar … aber.', 'Redemittel erleichtern für den Einstieg.', 'بلا حرف جر.', 'kasus', 'Redemittel']
    ],
    material: [
      'der Aufbau', 'der Kontext', 'die Kernaussage', 'die Schlüssigkeit',
      'die Nachvollziehbarkeit', 'die Beweisführung', 'die Gegenüberstellung', 'der Gegensatz',
      'die Priorität', 'die Gewichtung', 'der Schwerpunkt', 'die Tendenz',
      'die Differenzierung', 'die Pauschalisierung', 'die Verallgemeinerung', 'das Vorurteil',
      'der Konsens', 'der Kompromiss', 'die Kritik', 'die Wertung',
      'die Objektivität', 'die Subjektivität', 'die Ironie', 'der Unterton',
      'die Zwischenüberschrift', 'die Verknüpfung', 'das Bindewort', 'die Satzverbindung',
      'die Kausalität', 'der Zweck', 'die Bedingung', 'die Einräumung',
      'der Einwand', 'die Widerlegung', 'die Entkräftung', 'der Belegtext',
      'die Statistik', 'die Studie', 'das Zitat', 'die Quelle',
      'die Fußnote', 'das Literaturverzeichnis', 'die Korrektur', 'die Überarbeitung',
      'die Pro-Argumente', 'die Contra-Argumente', 'die Argumentationskette', 'die Absätze',
      'der Satzbau', 'die Argumentation'
    ],
    tricks: [
      { trick: 'البناء الثلاثي: Einleitung mit These · Hauptteil mit Argumenten · Schluss mit Fazit', wie: 'In der Einleitung steht die These, im Hauptteil folgen die Argumente, im Schluss ziehe ich das Fazit.', warum: 'المقال العربي يبني الحجة بالمقابلة والاستطراد، والألمانية تُقيَّم على التسلسل المعلن.', anchor: 'die Erörterung' },
      { trick: 'كل حجة: Behauptung — Begründung — Beispiel — Beleg', wie: 'Behauptung, Begründung, Beispiel, Beleg: vier Sätze, ein Argument.', warum: 'الحجة بلا شاهد تُعدّ رأيًا، والترتيب الرباعي هو ما يميّز B2 عن B1.', anchor: 'das Argument' },
      { trick: 'اعترض ثم ردّ: Zwar … aber · Der Einwand ist berechtigt, jedoch …', wie: 'Zwar ist der Einwand berechtigt, jedoch überzeugt er mich nicht.', warum: 'ذكر الرأي المخالف ثم ردّه يقوّي النص، والعربية تحذفه فتبدو الحجة أحادية.', anchor: 'der Einwand' }
    ]
  }

};

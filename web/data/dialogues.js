/* Dialogues per level, placed after a lesson in the map: every line uses only
   forms the learner has met up to that lesson (≥ 98%, measured by
   tools/validate-syllabus.js). Two checkable questions each, like the texts.
   Authored, not copied. */
(function (root) {
  const D = [
  {
    "id": "a1-d1",
    "level": "A1",
    "after": "a1-u2-l6",
    "title": "Im Kurs und am Telefon",
    "lines": [
      [
        "Sara",
        "Guten Tag! Ich heiße Sara. Und du?"
      ],
      [
        "Ali",
        "Guten Tag, ich bin Ali. Ich komme aus Sousse. Woher kommst du?"
      ],
      [
        "Sara",
        "Ich komme aus Tunis. Ich wohne jetzt in Berlin. Wohnst du hier?"
      ],
      [
        "Ali",
        "Nein, ich wohne in Wien. Ich lerne Deutsch, und ich arbeite im Hotel."
      ],
      [
        "Sara",
        "Was machst du am Montag?"
      ],
      [
        "Ali",
        "Am Montag arbeite ich von acht bis vier. Und du? Arbeitest du?"
      ],
      [
        "Sara",
        "Nein, ich lerne nur. Ich muss viel lernen. Hast du einen Bruder?"
      ],
      [
        "Ali",
        "Ich habe eine Schwester. Sie wohnt in Berlin, und ich sehe sie oft."
      ],
      [
        "Sara",
        "Kannst du am Samstag kommen? Wir gehen ins Kino. Der Film beginnt um drei."
      ],
      [
        "Ali",
        "Um drei? Das passt. Wo treffen wir uns?"
      ],
      [
        "Sara",
        "Vor dem Kino. Das Kino ist neben der Post."
      ],
      [
        "Ali",
        "Gut. Ich komme mit dem Bus. Der Bus kommt um halb drei."
      ],
      [
        "Sara",
        "Bis Samstag!"
      ],
      [
        "Ali",
        "Bis Samstag. Tschüss!"
      ]
    ],
    "questions": [
      [
        "من أين علي؟",
        [
          "من سوسة",
          "من تونس",
          "من برلين"
        ],
        "من سوسة"
      ],
      [
        "أين يعمل علي؟",
        [
          "في فندق",
          "في مدرسة",
          "لا يعمل"
        ],
        "في فندق"
      ]
    ]
  },
  {
    "id": "a1-d2",
    "level": "A1",
    "after": "a1-u3-l6",
    "title": "Im Restaurant",
    "lines": [
      [
        "Kellner",
        "Guten Abend! Die Speisekarte, bitte. Möchten Sie etwas trinken?"
      ],
      [
        "Sara",
        "Ein Wasser, bitte. Und ich nehme den Salat mit Hähnchen."
      ],
      [
        "Ali",
        "Für mich den Fisch mit Reis, bitte. Und einen Tee."
      ],
      [
        "Kellner",
        "Gern. Das dauert zwanzig Minuten."
      ],
      [
        "Ali",
        "Sara, was hast du gestern gemacht?"
      ],
      [
        "Sara",
        "Ich habe gearbeitet, und dann habe ich meine Mutter angerufen. Am Abend habe ich einen Film gesehen. Und du?"
      ],
      [
        "Ali",
        "Ich bin nach Wien gefahren. Mein Bruder hat Geburtstag gehabt. Wir haben zusammen gegessen."
      ],
      [
        "Kellner",
        "Der Salat und der Fisch. Guten Appetit!"
      ],
      [
        "Sara",
        "Danke. Das schmeckt mir gut."
      ],
      [
        "Ali",
        "Mir schmeckt der Fisch gut. Passt dir Dienstag für den Kurs? Ich muss den Termin verschieben."
      ],
      [
        "Sara",
        "Dienstag passt mir. Ich trage ihn in den Kalender ein."
      ],
      [
        "Kellner",
        "Zusammen oder getrennt?"
      ],
      [
        "Ali",
        "Getrennt, bitte. Das Trinkgeld ist für Sie."
      ]
    ],
    "questions": [
      [
        "ماذا تأكل سارة؟",
        [
          "سلطة بالدجاج",
          "سمكًا بالأرز",
          "حساءً"
        ],
        "سلطة بالدجاج"
      ],
      [
        "كيف يدفعان؟",
        [
          "منفصلين",
          "معًا",
          "لا يدفعان"
        ],
        "منفصلين"
      ]
    ]
  },
  {
    "id": "a1-d3",
    "level": "A1",
    "after": "a1-u4-l6",
    "title": "Beim Arzt und der Weg zur Apotheke",
    "lines": [
      [
        "Ärztin",
        "Guten Tag, Frau Ben Ali. Was tut Ihnen weh?"
      ],
      [
        "Sara",
        "Mir tut der Kopf weh, und ich habe Fieber. Ich bin krank."
      ],
      [
        "Ärztin",
        "Haben Sie Husten?"
      ],
      [
        "Sara",
        "Husten habe ich, und mein Hals tut weh. Ich bin sehr müde."
      ],
      [
        "Ärztin",
        "Das ist eine Erkältung. Nehmen Sie zwei Tabletten am Tag und ruhen Sie sich aus. Brauchen Sie eine Krankmeldung?"
      ],
      [
        "Sara",
        "Eine Krankmeldung, bitte, für die Schule. Wie komme ich zur Apotheke?"
      ],
      [
        "Ärztin",
        "Gehen Sie geradeaus bis zur Ampel, dann links. Die Apotheke ist neben der Bank."
      ],
      [
        "Sara",
        "Ist es weit?"
      ],
      [
        "Ärztin",
        "Nein, fünf Minuten. Trinken Sie viel Tee und bleiben Sie zu Hause. Gute Besserung!"
      ],
      [
        "Sara",
        "Danke! Auf Wiedersehen!"
      ],
      [
        "Ärztin",
        "Auf Wiedersehen, Frau Ben Ali. Und schreiben Sie eine Nachricht an die Schule."
      ]
    ],
    "questions": [
      [
        "ماذا يؤلم سارة؟",
        [
          "الرأس والحلق",
          "الظهر",
          "اليد"
        ],
        "الرأس والحلق"
      ],
      [
        "أين الصيدلية؟",
        [
          "بجانب المصرف",
          "بجانب المحطة",
          "في المدرسة"
        ],
        "بجانب المصرف"
      ]
    ]
  },
  {
    "id": "a2-d1",
    "level": "A2",
    "after": "a2-u2-l6",
    "title": "Hilfe beim Umzug",
    "lines": [
      [
        "Leila",
        "Hallo Ali, kannst du mir am Samstag helfen? Ich ziehe um."
      ],
      [
        "Ali",
        "Natürlich helfe ich dir. Wo ist die neue Wohnung?"
      ],
      [
        "Leila",
        "In der Hauptstraße. Sie gehört einer Freundin von meiner Mutter."
      ],
      [
        "Ali",
        "Und wann komme ich?"
      ],
      [
        "Leila",
        "Um neun, wenn das geht. Mein Bruder bringt ein Auto mit, weil wir viele Kartons haben."
      ],
      [
        "Ali",
        "Gut. Ich gebe dir meinen Tisch. Ich brauche ihn nicht mehr."
      ],
      [
        "Leila",
        "Danke dir! Ich stelle ihn in die Küche, neben das Fenster."
      ],
      [
        "Ali",
        "Ich glaube, dass der Tisch zu groß für die Küche ist. Stell ihn lieber ins Wohnzimmer."
      ],
      [
        "Leila",
        "Das stimmt. Ich lege die Bücher auf den Tisch, und das Bild kommt an die Wand."
      ],
      [
        "Ali",
        "Wenn wir fertig sind, essen wir zusammen Pizza. Ich lade dich ein."
      ],
      [
        "Leila",
        "Das ist nett. Ich freue mich, dass du kommst. Bis Samstag!"
      ]
    ],
    "questions": [
      [
        "لماذا تحتاج ليلى مساعدة؟",
        [
          "لأنها تنتقل",
          "لأنها مريضة",
          "لأنها تدرس"
        ],
        "لأنها تنتقل"
      ],
      [
        "ماذا يعطيها علي؟",
        [
          "طاولة",
          "سيارة",
          "كتبًا"
        ],
        "طاولة"
      ]
    ]
  },
  {
    "id": "a2-d2",
    "level": "A2",
    "after": "a2-u4-l6",
    "title": "Nach dem Urlaub und die Einladung",
    "lines": [
      [
        "Anna",
        "Hallo Sara! Wie war dein Urlaub?"
      ],
      [
        "Sara",
        "Toll! Wir waren am Meer. Das Wetter war besser als hier, jeden Tag sonnig."
      ],
      [
        "Anna",
        "Wart ihr im Hotel?"
      ],
      [
        "Sara",
        "Nein, in einer Pension. Sie war kleiner als ein Hotel und billiger. Am Morgen bin ich geschwommen, danach habe ich auf dem Balkon gelesen."
      ],
      [
        "Anna",
        "Das ist schön. Ich hatte keine Zeit für Urlaub. Ich hatte zu viel Arbeit."
      ],
      [
        "Sara",
        "Dann bist du müde. Du musst eine Pause machen. Kommst du am Samstag zu unserer Grillparty?"
      ],
      [
        "Anna",
        "Vielen Dank für die Einladung! Sehr gern. Wann geht es los?"
      ],
      [
        "Sara",
        "Um sechs. Soll ich dich abholen? Es ist windig, und vielleicht regnet es."
      ],
      [
        "Anna",
        "Nein, danke, ich komme mit dem Bus. Soll ich etwas mitbringen? Eine Torte?"
      ],
      [
        "Sara",
        "Eine Torte ist super. Zieh eine warme Jacke an, abends wird es kalt."
      ],
      [
        "Anna",
        "Gut. Dein neues Kleid steht dir übrigens sehr gut."
      ],
      [
        "Sara",
        "Danke, das war ein Geschenk von meiner Schwester. Bis Samstag!"
      ]
    ],
    "questions": [
      [
        "أين نامت سارة في العطلة؟",
        [
          "في نُزُل",
          "في فندق",
          "عند أختها"
        ],
        "في نُزُل"
      ],
      [
        "ماذا تُحضر آنا إلى الحفلة؟",
        [
          "تورتة",
          "سلطة",
          "لا شيء"
        ],
        "تورتة"
      ]
    ]
  },
  {
    "id": "a2-d3",
    "level": "A2",
    "after": "a2-u5-l6",
    "title": "Am Telefon mit der Firma",
    "lines": [
      [
        "Herr Braun",
        "Firma Keller, Braun am Apparat. Guten Tag."
      ],
      [
        "Sara",
        "Guten Tag, hier ist Sara Ben Ali. Ich habe Ihnen wegen meiner Rechnung geschrieben, und ich habe keine Antwort bekommen."
      ],
      [
        "Herr Braun",
        "Einen Moment, bitte. Ich verbinde Sie mit Frau Keller."
      ],
      [
        "Frau Keller",
        "Keller. Guten Tag, Frau Ben Ali. Was kann ich für Sie machen?"
      ],
      [
        "Sara",
        "Ich habe am Montag eine Mahnung bekommen. Ich habe die Rechnung schon gezahlt."
      ],
      [
        "Frau Keller",
        "Das tut mir leid. Haben Sie eine Kopie?"
      ],
      [
        "Sara",
        "Eine Kopie habe ich. Ich schicke sie Ihnen heute als E-Mail. Könnten Sie mir dann eine Bestätigung schicken?"
      ],
      [
        "Frau Keller",
        "Natürlich. Sie bekommen die Bestätigung bis Freitag."
      ],
      [
        "Sara",
        "Vielen Dank. Ehrlich gesagt war das ziemlich unpraktisch für mich."
      ],
      [
        "Frau Keller",
        "Das verstehe ich. Entschuldigen Sie bitte den Fehler."
      ],
      [
        "Sara",
        "In Ordnung. Auf Wiederhören!"
      ],
      [
        "Frau Keller",
        "Auf Wiederhören, Frau Ben Ali."
      ]
    ],
    "questions": [
      [
        "لماذا تتصل سارة؟",
        [
          "بسبب تذكير بالدفع",
          "بسبب موعد",
          "بسبب هدية"
        ],
        "بسبب تذكير بالدفع"
      ],
      [
        "ماذا تطلب سارة؟",
        [
          "تأكيدًا",
          "خصمًا",
          "موعدًا"
        ],
        "تأكيدًا"
      ]
    ]
  },
  {
    "id": "b1-d1",
    "level": "B1",
    "after": "b1-u2-l8",
    "title": "Im Büro: Der Plan für die Woche",
    "lines": [
      [
        "Herr Braun",
        "Frau Ben Ali, die Lieferung wurde gestern geliefert, aber die Rechnung wurde noch nicht bezahlt. Können Sie das heute erledigen?"
      ],
      [
        "Sara",
        "Natürlich, obwohl ich heute viel zu tun habe. Ich versuche, es bis zwölf zu schaffen."
      ],
      [
        "Herr Braun",
        "Danke. Der Kunde, der gestern angerufen hat, möchte außerdem einen Termin."
      ],
      [
        "Sara",
        "Der Kunde aus Sfax? Ich rufe ihn an, damit wir den Termin vereinbaren. Passt Freitag?"
      ],
      [
        "Herr Braun",
        "Freitag passt. Trotzdem brauchen wir die Rechnung vor dem Termin."
      ],
      [
        "Sara",
        "Ich habe vor, sie morgen zu schicken. Wenn der Kunde früher kommen möchte, sage ich Ihnen Bescheid."
      ],
      [
        "Herr Braun",
        "Gut. Noch etwas: Die Werkstatt hat gefragt, ob das Gerät repariert werden muss."
      ],
      [
        "Sara",
        "Es ist kaputt. Ich würde den Handwerker heute bestellen."
      ],
      [
        "Herr Braun",
        "Gut. Wenn ich mehr Zeit hätte, würde ich das machen."
      ],
      [
        "Sara",
        "Kein Problem, ich werde das erledigen. Dann bis später."
      ]
    ],
    "questions": [
      [
        "ماذا يجب أن تنجز سارة اليوم؟",
        [
          "دفع الفاتورة",
          "إصلاح الجهاز",
          "السفر إلى صفاقس"
        ],
        "دفع الفاتورة"
      ],
      [
        "متى موعد الزبون؟",
        [
          "الجمعة",
          "الاثنين",
          "غدًا"
        ],
        "الجمعة"
      ]
    ]
  },
  {
    "id": "b1-d2",
    "level": "B1",
    "after": "b1-u4-l8",
    "title": "Diskussion: Ehrenamt neben dem Studium?",
    "lines": [
      [
        "Ali",
        "Meiner Meinung nach sollte jeder Student ehrenamtlich arbeiten. Zum Beispiel im Verein, so wie ich."
      ],
      [
        "Leila",
        "Da stimme ich dir teilweise zu. Erstens kostet das Zeit, zweitens brauchen viele Studenten Geld."
      ],
      [
        "Ali",
        "Das überzeugt mich nicht ganz. Aus eigener Erfahrung weiß ich, dass man das schaffen kann."
      ],
      [
        "Leila",
        "Da bin ich anderer Meinung. Als ich halbtags gearbeitet habe, hatte ich keine Zeit mehr zum Lernen."
      ],
      [
        "Ali",
        "Ich möchte ausreden: Ich meine nicht zehn Stunden pro Woche, sondern zwei."
      ],
      [
        "Leila",
        "Zwei Stunden sind in Ordnung. Können wir uns darauf einigen?"
      ],
      [
        "Ali",
        "Gut. Und wer keine Zeit hat, für den ist das auch in Ordnung."
      ],
      [
        "Leila",
        "Genau. Kurz gesagt: Ehrenamt ist sinnvoll, aber freiwillig."
      ],
      [
        "Ali",
        "Darüber hinaus lernt man im Verein Leute kennen. Das habe ich selbst erlebt."
      ],
      [
        "Leila",
        "Gutes Argument. Ich komme nächste Woche mit, um es zu sehen."
      ]
    ],
    "questions": [
      [
        "على ماذا يتفقان في النهاية؟",
        [
          "ساعتان أسبوعيًا",
          "عشر ساعات",
          "لا تطوع"
        ],
        "ساعتان أسبوعيًا"
      ],
      [
        "لماذا كانت ليلى ضد التطوع أولًا؟",
        [
          "الوقت والمال",
          "المسافة",
          "الصحة"
        ],
        "الوقت والمال"
      ]
    ]
  },
  {
    "id": "b1-d3",
    "level": "B1",
    "after": "b1-u5-l8",
    "title": "Vor der Prüfung: Ein Gespräch mit der Lehrerin",
    "lines": [
      [
        "Sara",
        "Könnten Sie mir sagen, wie die Prüfung funktioniert?"
      ],
      [
        "Lehrerin",
        "Gern. Es gibt vier Module, und jedes wird einzeln bewertet. Ein Modul rettet das andere nicht."
      ],
      [
        "Sara",
        "Das heißt, ich sollte mich auf das Modul konzentrieren, das schwach ist?"
      ],
      [
        "Lehrerin",
        "Genau. Welche Teilprüfung ist das bei Ihnen?"
      ],
      [
        "Sara",
        "Vermutlich das Schreiben. Es ist schwer für mich, die Inhaltspunkte in der Zeit zu schaffen."
      ],
      [
        "Lehrerin",
        "Dann schreiben Sie jede Woche einen Text und achten Sie zuerst auf die Form, danach auf die Fehler."
      ],
      [
        "Sara",
        "Wäre es möglich, dass Sie meine Texte korrigieren?"
      ],
      [
        "Lehrerin",
        "Natürlich. Schicken Sie sie mir, sobald sie fertig sind. Im Sprechen müssen Sie außerdem über die Gegenposition sprechen."
      ],
      [
        "Sara",
        "Ich räume ein, dass das schwer für mich ist. Ich sage oft nur meine eigene Meinung."
      ],
      [
        "Lehrerin",
        "Üben Sie das im Kurs. Je mehr Sie es machen, desto leichter wird es."
      ],
      [
        "Sara",
        "Vielen Dank für Ihre Hilfe. Ich fühle mich jetzt besser vorbereitet."
      ]
    ],
    "questions": [
      [
        "كم وحدة في امتحان B1؟",
        [
          "أربع",
          "ثلاث",
          "خمس"
        ],
        "أربع"
      ],
      [
        "ما الوحدة الأضعف عند سارة؟",
        [
          "الكتابة",
          "الاستماع",
          "القراءة"
        ],
        "الكتابة"
      ]
    ]
  }
];
  const items = D.map(d => ({
    id: d.id, level: d.level, after: d.after, title: d.title, dialog: true,
    lines: d.lines,
    body: d.lines.map(l => l[0] + ": " + l[1]).join("\n"),
    words: d.lines.map(l => l[1]).join(" ").split(/\s+/).filter(Boolean).length,
    questions: d.questions.map(q => ({ prompt: q[0], options: q[1], key: q[2] }))
  }));
  const lib = root.DW_LIBRARY;
  if (lib) lib.dialogues = items;
  root.DW_DIALOGUES = items;
})(typeof window !== "undefined" ? window : global);

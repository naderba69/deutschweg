/* Deutschweg — P3.5 lexical layer, A2 unit 4 (part a): a2-u4-l1 … a2-u4-l3.
   Schule, Feste, Kleidung. 26 items per lesson. */

module.exports = {

  'a2-u4-l1': {
    items: [
      ['die Schule', 'die Schulen', 'المدرسة', 'Die Schule beginnt um acht.', 'Die Schule beginnt in acht.', 'الساعة: um.', 'präposition', 'Schule'],
      ['der Unterricht', '—', 'الدرس', 'Der Unterricht dauert neunzig Minuten.', 'Der Unterricht dauert neunzig Minute.', 'الجمع: Minuten.', 'plural', 'Unterricht'],
      ['das Fach', 'die Fächer', 'المادة الدراسية', 'Mein bestes Fach ist Deutsch.', 'Mein beste Fach ist Deutsch.', 'الوصف مع mein: bestes.', 'deklination', 'Fach'],
      ['die Note', 'die Noten', 'العلامة', 'Ich habe eine gute Note bekommen.', 'Ich habe eine gute Note geworden.', 'الاستلام: bekommen.', 'falser-freund', 'Note'],
      ['die Prüfung', 'die Prüfungen', 'الامتحان', 'Die Prüfung war einfach.', 'Die Prüfung ist einfach gewesen.', 'الماضي: war.', 'konjugation', 'Prüfung'],
      ['bestehen', 'besteht · bestand · hat bestanden', 'ينجح في', 'Ich habe die Prüfung bestanden.', 'Ich habe die Prüfung bestanden gemacht.', 'بestehen فعل كامل.', 'lexik-kollokation', 'bestanden'],
      ['durchfallen', 'fällt durch · fiel durch · ist durchgefallen', 'يرسب', 'Er ist in der Prüfung durchgefallen.', 'Er hat in der Prüfung durchgefallen.', 'durchfallen مع sein.', 'konjugation', 'durchgefallen'],
      ['die Hausaufgabe', 'die Hausaufgaben', 'الواجب المنزلي', 'Die Hausaufgaben sind schwer.', 'Die Hausaufgabe sind schwer.', 'الجمع مع الفعل جمعًا.', 'plural', 'Hausaufgaben'],
      ['der Lehrer', 'die Lehrer', 'المعلم', 'Der Lehrer erklärt die Grammatik.', 'Der Lehrer erklärt die Grammatik es.', 'لا ضمير.', 'wortstellung', 'Lehrer'],
      ['die Klasse', 'die Klassen', 'الصف', 'Meine Klasse hat zwanzig Schüler.', 'Meine Klasse hat zwanzig Schüler Leute.', 'Schüler تكفي.', 'plural', 'Klasse'],
      ['der Schüler', 'die Schüler', 'التلميذ', 'Der Schüler liest laut.', 'Der Schüler liest laut es.', 'لا ضمير.', 'wortstellung', 'Schüler'],
      ['das Studium', '—', 'الدراسة الجامعية', 'Das Studium dauert vier Jahre.', 'Das Studium dauert vier Jahr.', 'الجمع: Jahre.', 'plural', 'Studium'],
      ['die Universität', 'die Universitäten', 'الجامعة', 'Sie studiert an der Universität.', 'Sie studiert in der Universität.', 'في الجامعة: an der.', 'präposition', 'Universität'],
      ['die Sprache', 'die Sprachen', 'اللغة', 'Ich lerne zwei Sprachen.', 'Ich lerne zwei Sprache.', 'الجمع: Sprachen.', 'plural', 'Sprachen'],
      ['die Grammatik', 'die Grammatiken', 'القواعد', 'Die Grammatik ist wichtig.', 'Die Grammatik ist wichtig es.', 'لا ضمير.', 'wortstellung', 'Grammatik'],
      ['das Wörterbuch', 'die Wörterbücher', 'القاموس', 'Ich brauche ein Wörterbuch.', 'Ich brauche eine Wörterbuch.', 'Buch محايد فالمركّب محايد.', 'genus', 'Wörterbuch'],
      ['die Übung', 'die Übungen', 'التمرين', 'Die Übung ist leicht.', 'Die Übung ist leicht gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Übung'],
      ['wiederholen', 'wiederholt · wiederholte · hat wiederholt', 'يكرّر', 'Können Sie das bitte wiederholen?', 'Können Sie das bitte wiederholen es?', 'لا ضمير.', 'wortstellung', 'wiederholen'],
      ['erklären', 'erklärt · erklärte · hat erklärt', 'يشرح', 'Der Lehrer erklärt die Regel noch einmal.', 'Der Lehrer erklärt die Regel noch ein Mal.', 'einmal كلمة واحدة.', 'orthographie', 'erklärt'],
      ['die Regel', 'die Regeln', 'القاعدة', 'Diese Regel ist einfach.', 'Diese Regel ist einfach gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Regel'],
      ['das Beispiel', 'die Beispiele', 'المثال', 'Gib mir bitte ein Beispiel.', 'Gib mir bitte eine Beispiel.', 'Beispiel محايد: ein.', 'genus', 'Beispiel'],
      ['die Aufgabe', 'die Aufgaben', 'المهمة', 'Die Aufgabe ist zu schwer.', 'Die Aufgabe ist zu schwer gemacht.', 'zu schwer تكفي.', 'lexik-kollokation', 'Aufgabe'],
      ['der Kurs', 'die Kurse', 'الدورة', 'Der Kurs beginnt im September.', 'Der Kurs beginnt in September.', 'الشهر: im.', 'präposition', 'Kurs'],
      ['die Anmeldung', 'die Anmeldungen', 'التسجيل', 'Die Anmeldung ist online möglich.', 'Die Anmeldung ist online möglich es.', 'لا ضمير.', 'wortstellung', 'Anmeldung'],
      ['das Zeugnis', 'die Zeugnisse', 'الشهادة', 'Das Zeugnis liegt zu Hause.', 'Das Zeugnis liegt in Hause.', 'في البيت: zu Hause.', 'präposition', 'Zeugnis'],
      ['der Stundenplan', 'die Stundenpläne', 'الجدول الدراسي', 'Der Stundenplan hängt an der Wand.', 'Der Stundenplan hängt in der Wand.', 'على الجدار: an der Wand.', 'präposition', 'Stundenplan'],
      ['das Heft', 'die Hefte', 'الدفتر', 'Ich schreibe die Wörter ins Heft.', 'Ich schreibe die Wörter in dem Heft.', 'الاتجاه: ins Heft.', 'präposition', 'Heft'],
      ['kontrollieren', 'kontrolliert · kontrollierte · hat kontrolliert', 'يتحقق من', 'Der Lehrer kontrolliert die Hausaufgaben.', 'Der Lehrer kontrolliert auf die Hausaufgaben.', 'kontrollieren بلا حرف.', 'lexik-kollokation', 'kontrolliert'],
    ],
    tricks: [
      { trick: 'في الجامعة an der Universität، وفي المدرسة in der Schule', wie: 'Sie studiert an der Universität. Die Kinder sind in der Schule.', warum: 'المؤسسة التعليمية العليا تأخذ an، والعربية تقول «في» في الحالتين.', anchor: 'die Universität' },
      { trick: 'bekommen لا werden: العلامة تُستلَم', wie: 'Ich habe eine gute Note bekommen. Ich bekomme ein Zeugnis.', warum: 'العربية تقول «أخذت علامة» أو «صار عندي»، وwerden تعني «يصير» لا «يستلم».', anchor: 'die Note' },
      { trick: 'النجاح والرسوب: bestehen · durchfallen', wie: 'Ich habe die Prüfung bestanden. Er ist durchgefallen.', warum: 'زوج متقابل يُختبر في A2، وفعل الرسوب يتحرك بـ sein لا haben.', anchor: 'bestehen' }
    ]
  },

  'a2-u4-l2': {
    items: [
      ['das Fest', 'die Feste', 'العيد', 'Das Fest dauert drei Tage.', 'Das Fest dauert drei Tag.', 'الجمع: Tage.', 'plural', 'Fest'],
      ['feiern', 'feiert · feierte · hat gefeiert', 'يحتفل', 'Wir feiern heute meinen Geburtstag.', 'Wir feiern heute mein Geburtstag.', 'المفعول نصب: meinen.', 'kasus', 'feiern'],
      ['der Geburtstag', 'die Geburtstage', 'عيد الميلاد', 'Mein Geburtstag ist am Freitag.', 'Mein Geburtstag ist in Freitag.', 'اليوم: am.', 'präposition', 'Geburtstag'],
      ['die Hochzeit', 'die Hochzeiten', 'الزفاف', 'Die Hochzeit war schön.', 'Die Hochzeit ist schön gewesen.', 'الماضي: war.', 'konjugation', 'Hochzeit'],
      ['das Weihnachten', '—', 'عيد الميلاد المسيحي', 'Zu Weihnachten sind wir zu Hause.', 'In Weihnachten sind wir zu Hause.', 'في المناسبة: zu.', 'präposition', 'Weihnachten'],
      ['das Ostern', '—', 'عيد الفصح', 'Zu Ostern besuchen wir die Familie.', 'In Ostern besuchen wir die Familie.', 'zu للمناسبة.', 'präposition', 'Ostern'],
      ['das Neujahr', '—', 'رأس السنة', 'Zu Neujahr wünschen wir Glück.', 'In Neujahr wünschen wir Glück.', 'zu.', 'präposition', 'Neujahr'],
      ['gratulieren', 'gratuliert · gratulierte · hat gratuliert', 'يهنّئ', 'Ich gratuliere dir zum Geburtstag.', 'Ich gratuliere dich zum Geburtstag.', 'dativ: dir.', 'kasus', 'gratuliere'],
      ['der Glückwunsch', 'die Glückwünsche', 'التهنئة', 'Herzlichen Glückwunsch!', 'Herzliche Glückwunsch!', 'النصب: Herzlichen.', 'kasus', 'Glückwunsch'],
      ['das Geschenk', 'die Geschenke', 'الهدية', 'Das Geschenk gefällt ihm.', 'Das Geschenk gefällt ihn.', 'gefallen داتيف: ihm.', 'kasus', 'Geschenk'],
      ['schenken', 'schenkt · schenkte · hat geschenkt', 'يهدي', 'Ich schenke ihr Blumen.', 'Ich schenke sie Blumen.', 'dativ: ihr.', 'kasus', 'schenke'],
      ['die Blume', 'die Blumen', 'الزهرة', 'Ich kaufe eine Blume für die Mutter.', 'Ich kaufe ein Blume für die Mutter.', 'Blume مؤنث: eine.', 'genus', 'Blume'],
      ['die Karte', 'die Karten', 'البطاقة', 'Ich schreibe eine Karte.', 'Ich schreibe ein Karte.', 'Karte مؤنث: eine.', 'genus', 'Karte'],
      ['die Torte', 'die Torten', 'الكعكة', 'Die Torte ist süß.', 'Die Torte ist süß gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Torte'],
      ['der Kuchen', 'die Kuchen', 'الكيك', 'Der Kuchen schmeckt gut.', 'Der Kuchen schmeckt gut es.', 'لا ضمير.', 'wortstellung', 'Kuchen'],
      ['die Kerze', 'die Kerzen', 'الشمعة', 'Die Kerzen brennen.', 'Die Kerze brennen.', 'الجمع: Kerzen.', 'plural', 'Kerzen'],
      ['das Lied', 'die Lieder', 'الأغنية', 'Wir singen ein Lied.', 'Wir singen eine Lied.', 'Lied محايد: ein.', 'genus', 'Lied'],
      ['tanzen', 'tanzt · tanzte · hat getanzt', 'يرقص', 'Wir tanzen bis Mitternacht.', 'Wir tanzen bis die Mitternacht.', 'بلا أداة.', 'kasus', 'tanzen'],
      ['die Einladung', 'die Einladungen', 'الدعوة', 'Danke für die Einladung!', 'Danke für der Einladung!', 'für يأخذ نصبًا: die.', 'kasus', 'Einladung'],
      ['einladen', 'lädt ein · lud ein · hat eingeladen', 'يدعو', 'Ich lade dich zum Essen ein.', 'Ich lade dich zum Essen.', 'المنفصل يحتاج ein.', 'wortstellung', 'ein'],
      ['die Feier', 'die Feiern', 'الحفل', 'Die Feier beginnt um sieben.', 'Die Feier beginnt in sieben.', 'الساعة: um.', 'präposition', 'Feier'],
      ['die Dekoration', 'die Dekorationen', 'الزينة', 'Die Dekoration ist bunt.', 'Die Dekoration ist bunt gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Dekoration'],
      ['der Gast', 'die Gäste', 'الضيف', 'Die Gäste kommen um acht.', 'Die Gast kommt um acht.', 'الجمع: Gäste.', 'plural', 'Gäste'],
      ['das Brautpaar', 'die Brautpaare', 'العروسان', 'Das Brautpaar tanzt.', 'Die Brautpaar tanzt.', 'Paar محايد: das.', 'genus', 'Brautpaar'],
      ['der Jahrestag', 'die Jahrestage', 'ذكرى سنوية', 'Der Jahrestag ist im Juni.', 'Der Jahrestag ist in Juni.', 'الشهر: im.', 'präposition', 'Jahrestag'],
      ['das Feuerwerk', 'die Feuerwerke', 'الألعاب النارية', 'Das Feuerwerk beginnt um zehn.', 'Das Feuerwerk beginnt in zehn.', 'الساعة: um.', 'präposition', 'Feuerwerk'],
      ['der Ball', 'die Bälle', 'الحفل الراقص، الكرة', 'Am Samstag ist ein Ball im Schloss.', 'Am Samstag ist ein Ball in dem Schloss statt.', 'بلا statt زائدة.', 'lexik-kollokation', 'Ball'],
    ],
    tricks: [
      { trick: 'المناسبات مع zu: zu Weihnachten · zu Ostern · zu Neujahr', wie: 'Zu Weihnachten sind wir zu Hause. Zu Ostern besuchen wir die Familie.', warum: 'العربية تقول «في العيد»، والألمانية تستعمل zu للمناسبة وin للمكان.', anchor: 'das Weihnachten' },
      { trick: 'التهنئة والإهداء يحتاجان داتيف', wie: 'Ich gratuliere dir. Ich schenke ihr Blumen. Herzlichen Glückwunsch!', warum: 'الفعل مع الشخص داتيف، والعربية تعطي المفعول مباشرة بلا وسيط.', anchor: 'gratulieren' },
      { trick: 'einladen فعل منفصل: ich lade dich ein', wie: 'Ich lade dich zum Essen ein. Er lädt seine Freunde ein.', warum: 'العربية تقول «أدعوك للعشاء» بفعل واحد، والألمانية تفصل ein في النهاية.', anchor: 'einladen' }
    ]
  },

  'a2-u4-l3': {
    items: [
      ['die Kleidung', '—', 'الملابس', 'Die Kleidung ist im Schrank.', 'Die Kleidung sind im Schrank.', 'Kleidung مفرد.', 'plural', 'Kleidung'],
      ['anziehen', 'zieht an · zog an · hat angezogen', 'يلبس', 'Ich ziehe die Jacke an.', 'Ich ziehe die Jacke.', 'المنفصل يحتاج an.', 'wortstellung', 'an'],
      ['ausziehen', 'zieht aus · zog aus · hat ausgezogen', 'يخلع', 'Zieh die Schuhe aus!', 'Zieh die Schuhe!', 'المنفصل: aus.', 'wortstellung', 'aus'],
      ['anprobieren', 'probiert an · probierte an · hat anprobiert', 'يقيس (ملابس)', 'Kann ich das Hemd anprobieren?', 'Kann ich das Hemd probieren?', 'anprobieren للملابس، وprobieren للتذوق.', 'falser-freund', 'anprobieren'],
      ['passen', 'passt · passte · hat gepasst', 'يناسب المقاس', 'Die Hose passt mir gut.', 'Die Hose passt mich gut.', 'passen داتيف: mir.', 'kasus', 'passt'],
      ['die Größe', 'die Größen', 'المقاس', 'Ich brauche Größe achtunddreißig.', 'Ich brauche die Größe achtunddreißig.', 'المقاس بلا أداة.', 'kasus', 'Größe'],
      ['die Hose', 'die Hosen', 'البنطال', 'Die Hose ist zu lang.', 'Die Hose ist zu lange.', 'الوصف: lang.', 'deklination', 'Hose'],
      ['das Hemd', 'die Hemden', 'القميص', 'Das Hemd ist blau.', 'Die Hemd ist blau.', 'Hemd محايد: das.', 'genus', 'Hemd'],
      ['der Rock', 'die Röcke', 'التنورة', 'Der Rock gefällt mir.', 'Die Rock gefällt mir.', 'Rock مذكر: der.', 'genus', 'Rock'],
      ['die Jacke', 'die Jacken', 'الجاكيت', 'Die Jacke ist warm.', 'Die Jacke ist warm gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Jacke'],
      ['der Mantel', 'die Mäntel', 'المعطف', 'Der Mantel ist teuer.', 'Der Mantel ist teuer gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Mantel'],
      ['der Schuh', 'die Schuhe', 'الحذاء', 'Die Schuhe sind neu.', 'Der Schuhe sind neu.', 'الجمع: die Schuhe.', 'plural', 'Schuhe'],
      ['die Socke', 'die Socken', 'الجورب', 'Die Socken sind bunt.', 'Die Socke sind bunt.', 'الجمع: Socken.', 'plural', 'Socken'],
      ['der Pullover', 'die Pullover', 'الكنزة', 'Der Pullover ist zu groß.', 'Der Pullover ist zu große.', 'الوصف: groß.', 'deklination', 'Pullover'],
      ['das T-Shirt', 'die T-Shirts', 'تي شيرت', 'Das T-Shirt kostet zehn Euro.', 'Der T-Shirt kostet zehn Euro.', 'Shirt محايد: das.', 'genus', 'T-Shirt'],
      ['der Gürtel', 'die Gürtel', 'الحزام', 'Der Gürtel passt zum Rock.', 'Der Gürtel passt zu der Rock.', 'zu dem = zum.', 'präposition', 'Gürtel'],
      ['die Tasche', 'die Taschen', 'الحقيبة', 'Die Tasche gehört mir.', 'Die Tasche gehört mich.', 'gehören داتيف: mir.', 'kasus', 'Tasche'],
      ['die Mode', '—', 'الموضة', 'Die Mode ändert sich schnell.', 'Die Mode ändert schnell.', 'sich ändern انعكاسي.', 'konjugation', 'Mode'],
      ['der Verkäufer', 'die Verkäufer', 'البائع', 'Der Verkäufer hilft mir.', 'Der Verkäufer hilft mich.', 'helfen داتيف.', 'kasus', 'Verkäufer'],
      ['die Umkleidekabine', 'die Umkleidekabinen', 'غرفة القياس', 'Die Umkleidekabine ist dort hinten.', 'Die Umkleidekabine ist dort hinten es.', 'لا ضمير.', 'wortstellung', 'Umkleidekabine'],
      ['das Sonderangebot', 'die Sonderangebote', 'عرض خاص', 'Das Sonderangebot gilt nur heute.', 'Das Sonderangebot gilt nur heute es.', 'لا ضمير.', 'wortstellung', 'Sonderangebot'],
      ['der Preis', 'die Preise', 'الثمن', 'Der Preis ist reduziert.', 'Der Preis ist reduzieren.', 'اسم المفعول: reduziert.', 'konjugation', 'Preis'],
      ['umtauschen', 'tauscht um · tauschte um · hat umgetauscht', 'يستبدل', 'Kann ich die Hose umtauschen?', 'Kann ich die Hose tauschen um?', 'المنفصل كلمة واحدة.', 'wortstellung', 'umtauschen'],
      ['zurückgeben', 'gibt zurück · gab zurück · hat zurückgegeben', 'يعيد', 'Ich gebe die Jacke zurück.', 'Ich gebe zurück die Jacke.', 'المنفصل في النهاية.', 'wortstellung', 'zurück'],
      ['die Kasse', 'die Kassen', 'صندوق الدفع', 'Bitte zahlen Sie an der Kasse.', 'Bitte zahlen Sie in der Kasse.', 'عند الصندوق: an der Kasse.', 'präposition', 'Kasse'],
      ['die Quittung', 'die Quittungen', 'الوصل', 'Bitte geben Sie mir die Quittung.', 'Bitte geben Sie mir der Quittung.', 'المفعول نصب: die.', 'kasus', 'Quittung'],
      ['das Kaufhaus', 'die Kaufhäuser', 'المتجر الكبير', 'Im Kaufhaus kaufe ich neue Kleidung.', 'In dem Kaufhaus kaufe ich neue Kleidung gehen.', 'بلا gehen.', 'lexik-kollokation', 'Kaufhaus'],
    ],
    tricks: [
      { trick: 'anziehen/ausziehen منفصلان: an في النهاية', wie: 'Ich ziehe die Jacke an. Zieh die Schuhe aus!', warum: 'العربية تستعمل فعلًا واحدًا، وإسقاط an أو aus يجعل الجملة ناقصة.', anchor: 'anziehen' },
      { trick: 'passen وgehören وhelfen تأخذ داتيف', wie: 'Die Hose passt mir. Die Tasche gehört mir. Der Verkäufer hilft mir.', warum: 'العربية تصل الفعل بالمفعول مباشرة، فالضمير الألماني يحتاج mir لا mich.', anchor: 'passen' },
      { trick: 'anprobieren للملابس وprobieren للطعام', wie: 'Ich probiere das Hemd an. Ich probiere den Kuchen.', warum: 'البادئة an هنا تحمل معنى «للقياس»، والعربية تستعمل «يقيس» و«يتذوق» بفعلين مختلفين.', anchor: 'anprobieren' }
    ]
  }

};

/* Deutschweg — P3.5 lexical layer, A2 unit 4 (part a): a2-u4-l1 … a2-u4-l3.
   Schule, Feste, Kleidung. 26 items per lesson. */

module.exports = {

  'a2-u4-l1': {
    items: [
      ['der Kurs', 'die Kurse', 'الدورة التعليمية', 'Mein Kurs beginnt im September.', 'Mein Kurs beginnt in September.', 'مع اسم الشهر نقول im September.', 'präposition', 'Kurs'],
      ['die Hausaufgabe', 'die Hausaufgaben', 'الواجب المنزلي', 'Ich schreibe die Hausaufgaben ins Heft.', 'Ich schreibe der Hausaufgaben ins Heft.', 'Hausaufgaben مفعول به جمع هنا؛ نقول die Hausaufgaben.', 'kasus', 'Hausaufgaben'],
      ['die Schule', 'die Schulen', 'المدرسة', 'Die Schule beginnt um acht Uhr.', 'Die Schule beginnt an acht Uhr.', 'مع الساعة المحددة نقول um acht Uhr.', 'präposition', 'Schule'],
      ['der Unterricht', '—', 'الدرس / الحصة', 'Der Unterricht beginnt um acht Uhr.', 'Der Unterricht beginnen um acht Uhr.', 'Unterricht مفرد؛ نقول beginnt.', 'konjugation', 'Unterricht'],
      ['das Fach', 'die Fächer', 'المادة الدراسية', 'Mein bestes Fach ist Deutsch.', 'Mein beste Fach ist Deutsch.', 'بعد mein ومع Fach المحايد نقول bestes.', 'deklination', 'Fach'],
      ['die Prüfung', 'die Prüfungen', 'الامتحان', 'Ich habe die Prüfung bestanden.', 'Ich habe der Prüfung bestanden.', 'bestehen يأخذ مفعولًا مباشرًا هنا: die Prüfung. وصيغة Die Prüfung ist einfach gewesen صحيحة في Perfekt.', 'kasus', 'Prüfung'],
      ['die Note', 'die Noten', 'العلامة / الدرجة', 'Ich habe eine gute Note bekommen.', 'Ich habe eine gute Note geworden.', 'bekommen تعني الحصول على شيء، أما werden فتعني أن يصير الشيء أو الشخص شيئًا آخر.', 'falser-freund', 'Note'],
      ['bestehen', 'besteht · bestand · hat bestanden', 'ينجح في', 'Sie hat die Prüfung bestanden.', 'Sie ist die Prüfung bestanden.', 'في Perfekt يأتي bestehen هنا مع haben: hat bestanden.', 'konjugation', 'bestanden'],
      ['durchfallen', 'fällt durch · fiel durch · ist durchgefallen', 'يرسب', 'Er ist bei der Prüfung durchgefallen.', 'Er hat bei der Prüfung durchgefallen.', 'في Perfekt يأتي durchfallen مع sein: ist durchgefallen.', 'konjugation', 'durchgefallen'],
      ['der Lehrer', 'die Lehrer', 'المعلم', 'Der Lehrer erklärt die Grammatik.', 'Der Lehrer erklären die Grammatik.', 'Lehrer مفرد؛ نقول erklärt.', 'konjugation', 'Lehrer'],
      ['die Klasse', 'die Klassen', 'الصف', 'Meine Klasse hat zwanzig Schüler.', 'Meine Klasse haben zwanzig Schüler.', 'Klasse مفرد؛ نقول hat.', 'konjugation', 'Klasse'],
      ['der Schüler', 'die Schüler', 'التلميذ', 'Der Schüler liest laut.', 'Der Schüler lesen laut.', 'Schüler مفرد؛ نقول liest.', 'konjugation', 'Schüler'],
      ['das Studium', '—', 'الدراسة الجامعية', 'Das Studium dauert vier Jahre.', 'Das Studium dauert vier Jahr.', 'بعد vier نستخدم الجمع Jahre.', 'plural', 'Studium'],
      ['die Universität', 'die Universitäten', 'الجامعة', 'Sie studiert an der Universität.', 'Sie studiert an die Universität.', 'للدراسة في المؤسسة نقول an der Universität. أما in der Universität فقد تصف الوجود داخل مبنى الجامعة.', 'präposition', 'Universität'],
      ['die Sprache', 'die Sprachen', 'اللغة', 'Ich lerne zwei Sprachen.', 'Ich lerne zwei Sprache.', 'بعد zwei نستخدم الجمع Sprachen.', 'plural', 'Sprachen'],
      ['die Grammatik', 'die Grammatiken', 'القواعد / النحو', 'Die deutsche Grammatik ist wichtig.', 'Der deutsche Grammatik ist wichtig.', 'Grammatik مؤنث؛ نقول die deutsche Grammatik.', 'genus', 'Grammatik'],
      ['das Wörterbuch', 'die Wörterbücher', 'القاموس', 'Ich brauche ein Wörterbuch.', 'Ich brauche eine Wörterbuch.', 'Wörterbuch محايد؛ نقول ein Wörterbuch.', 'genus', 'Wörterbuch'],
      ['die Übung', 'die Übungen', 'التمرين', 'Die Übung ist leicht.', 'Die Übung sind leicht.', 'Übung مفرد؛ نقول ist. وصيغة leicht gemacht ممكنة بمعنى جُعلت سهلة.', 'konjugation', 'Übung'],
      ['wiederholen', 'wiederholt · wiederholte · hat wiederholt', 'يكرّر', 'Können Sie das bitte wiederholen?', 'Können Sie das bitte wiederholt?', 'بعد Können نستخدم المصدر wiederholen.', 'konjugation', 'wiederholen'],
      ['erklären', 'erklärt · erklärte · hat erklärt', 'يشرح', 'Können Sie die Regel bitte noch einmal erklären?', 'Können Sie die Regel bitte noch einmal erklärt?', 'بعد Können نستخدم المصدر erklären؛ ونكتب noch einmal كلمتين، كما تصح الكتابة nochmal في الاستعمال غير الرسمي.', 'konjugation', 'erklären'],
      ['die Regel', 'die Regeln', 'القاعدة', 'Diese Regel ist einfach.', 'Dieser Regel ist einfach.', 'Regel مؤنث وفي حالة الرفع هنا؛ نقول diese Regel.', 'deklination', 'Regel'],
      ['das Heft', 'die Hefte', 'الدفتر', 'Ich schreibe die Hausaufgaben ins Heft.', 'Ich schreibe die Hausaufgaben in den Heft.', 'Heft محايد؛ ins اختصار in das. وصيغة in das Heft صحيحة أيضًا.', 'kasus', 'Heft'],
      ['das Beispiel', 'die Beispiele', 'المثال', 'Können Sie mir bitte ein Beispiel geben?', 'Können Sie mir bitte eine Beispiel geben?', 'Beispiel محايد؛ نقول ein Beispiel.', 'genus', 'Beispiel'],
      ['die Aufgabe', 'die Aufgaben', 'المهمة / التمرين', 'Die Aufgabe ist zu schwer.', 'Der Aufgabe ist zu schwer.', 'Aufgabe مؤنث؛ نقول die Aufgabe. وصيغة schwer gemacht ممكنة بمعنى جُعلت صعبة.', 'genus', 'Aufgabe'],
      ['die Anmeldung', 'die Anmeldungen', 'التسجيل', 'Die Anmeldung ist online möglich.', 'Der Anmeldung ist online möglich.', 'Anmeldung مؤنث؛ نقول die Anmeldung.', 'genus', 'Anmeldung'],
      ['das Zeugnis', 'die Zeugnisse', 'الشهادة / كشف الدرجات', 'Das Zeugnis liegt zu Hause.', 'Das Zeugnis liegt in Hause.', 'التعبير الثابت للمكان هو zu Hause.', 'präposition', 'Zeugnis'],
      ['der Stundenplan', 'die Stundenpläne', 'الجدول الدراسي', 'Der Stundenplan hängt an der Wand.', 'Der Stundenplan hängt an die Wand.', 'مع الموقع الثابت نقول an der Wand؛ ومع الحركة نقول Ich hänge den Stundenplan an die Wand.', 'präposition', 'Stundenplan'],
      ['kontrollieren', 'kontrolliert · kontrollierte · hat kontrolliert', 'يتحقق من / يراجع', 'Der Lehrer kontrolliert die Hausaufgaben.', 'Der Lehrer kontrolliert auf die Hausaufgaben.', 'هنا يأتي kontrollieren مع المفعول المباشر بلا حرف؛ وقد يأتي auf في تركيب آخر مثل auf Fehler kontrollieren.', 'lexik-kollokation', 'kontrolliert'],
      ['notieren', 'notiert · notierte · hat notiert', 'يدوّن', 'Notieren Sie bitte die Hausaufgabe!', 'Notiert Sie bitte die Hausaufgabe!', 'في الأمر الرسمي نقول Notieren Sie.', 'konjugation', 'notieren'],
      ['das Quiz', 'die Quiz', 'الاختبار القصير / المسابقة', 'Das Quiz beginnt um acht Uhr.', 'Die Quiz beginnt um acht Uhr.', 'Quiz محايد؛ نقول das Quiz.', 'genus', 'Quiz'],
      ['das Rätsel', 'die Rätsel', 'اللغز', 'Das Rätsel ist schwer.', 'Der Rätsel ist schwer.', 'Rätsel محايد؛ نقول das Rätsel.', 'genus', 'Rätsel'],
      ['die Erlaubnis', 'die Erlaubnisse', 'الإذن', 'Die Erlaubnis der Eltern fehlt noch.', 'Der Erlaubnis der Eltern fehlt noch.', 'Erlaubnis مؤنث؛ نقول die Erlaubnis.', 'genus', 'Erlaubnis'],
      ['die Kenntnis', 'die Kenntnisse', 'المعرفة', 'Sie hat gute Kenntnisse in Deutsch.', 'Sie hat gute Kenntnis in Deutsch.', 'في هذا التركيب نستعمل الجمع Kenntnisse؛ ويمكن أن يأتي المفرد Kenntnis في تراكيب أخرى.', 'plural', 'Kenntnisse'],
      ['das Stipendium', 'die Stipendien', 'المنحة الدراسية', 'Sie bekommt ein Stipendium für ein Jahr.', 'Sie bekommt eine Stipendium für ein Jahr.', 'Stipendium محايد؛ نقول ein Stipendium.', 'genus', 'Stipendium'],
      ['die Übersetzung', 'die Übersetzungen', 'الترجمة', 'Die Übersetzung der Zeugnisse fehlt.', 'Die Übersetzung von die Zeugnisse fehlt.', 'هنا نقول der Zeugnisse في Genitiv؛ وتصح أيضًا von den Zeugnissen.', 'kasus', 'Übersetzung'],
      ['einzeln', '—', 'واحدًا واحدًا / كلٌ على حدة', 'Lies jede Frage einzeln.', 'Lies jede Frage einzelne.', 'تأتي einzeln هنا ظرفًا بلا نهاية.', 'deklination', 'einzeln'],
    ],
    tricks: [
      { trick: 'المؤسسة والوقت: an der Universität · im September · um acht Uhr', wie: 'Sie studiert an der Universität. Die Kinder sind in der Schule. Mein Kurs beginnt im September. Der Unterricht beginnt um acht Uhr. Auch „in der Universität“ kann einen Ort im Gebäude beschreiben.', warum: 'an der Universität هو الاستعمال المؤسسي للدراسة، وin der Schule يصف المكان؛ im مع الشهر وum مع الساعة، ولا نرفض in der Universität حين يكون المقصود داخل المبنى.', anchor: 'die Universität' },
      { trick: 'العمل داخل الحصة: ins Heft · noch einmal erklären · wiederholen', wie: 'Ich schreibe die Hausaufgaben ins Heft. In das Heft ist ebenfalls richtig. Können Sie die Regel bitte noch einmal erklären? Können Sie das bitte wiederholen? Course, Homework, Break und understand sind englische Wörter; auf Deutsch sagen wir Kurs, Hausaufgaben, Pause und verstehen.', warum: 'ins هو اختصار in das لا بديلًا إلزاميًا عنه؛ وبعد Können يأتي المصدر في النهاية. وتصح nochmal في الاستعمال غير الرسمي، بينما noch einmal محايدة وواضحة.', anchor: 'das Heft' },
      { trick: 'نتيجة الامتحان: eine Note bekommen · bestehen · durchfallen', wie: 'Ich habe eine gute Note bekommen. Ich habe die Prüfung bestanden. Er ist bei der Prüfung durchgefallen. Auch „Die Prüfung ist einfach gewesen.“ ist richtig.', warum: 'bekommen يعني يستلم لا يصير؛ bestehen يأتي هنا مع haben، وdurchfallen مع sein، وPerfekt بـist … gewesen صحيح ولا يُرفض.', anchor: 'die Prüfung' }
    ],
    strictClozeAnswers: true,
    wordClozeNearMisses: {
      'die Prüfung': 'Prüfungen',
      'das Heft': 'Hefte'
    },
    clozeItemIndex: 1,
    clozeNearMiss: 'Hausaufgabe',
    extraCheck: {
      right: 'Ich habe die Prüfung bestanden.',
      bad: 'Ich bin die Prüfung bestanden.',
      family: 'konjugation',
      why: 'في Perfekt نقول Ich habe die Prüfung bestanden.',
      prereq: 'cap.a2-u4-l1.s09'
    }
  },

  'a2-u4-l2': {
    items: [
      ['der Glückwunsch', 'die Glückwünsche', 'التهنئة', 'Herzlichen Glückwunsch zum Geburtstag!', 'Herzliche Glückwunsch zum Geburtstag!', 'في العبارة الثابتة نقول Herzlichen Glückwunsch zum Geburtstag.', 'deklination', 'Glückwunsch'],
      ['einladen', 'lädt ein · lud ein · hat eingeladen', 'يدعو', 'Ich lade dich am Samstag zu meiner Feier ein.', 'Ich einlade dich am Samstag zu meiner Feier.', 'في الجملة الرئيسية ينفصل einladen: lade … ein.', 'wortstellung', 'ein'],
      ['die Einladung', 'die Einladungen', 'الدعوة', 'Ich nehme die Einladung gern an.', 'Ich annehme die Einladung gern.', 'في الجملة الرئيسية ينفصل annehmen: nehme … an.', 'wortstellung', 'Einladung'],
      ['die Feier', 'die Feiern', 'الحفل / الاحتفال', 'Die Feier beginnt um sieben Uhr.', 'Die Feier beginnt an sieben Uhr.', 'مع وقت الساعة المحدد نقول um sieben Uhr.', 'präposition', 'Feier'],
      ['das Fest', 'die Feste', 'العيد / الاحتفال', 'Das Fest dauert drei Tage.', 'Das Fest dauert drei Tag.', 'بعد drei نستخدم الجمع Tage.', 'plural', 'Fest'],
      ['der Geburtstag', 'die Geburtstage', 'عيد الميلاد', 'Herzlichen Glückwunsch zum Geburtstag!', 'Herzlichen Glückwunsch zu Geburtstag!', 'التركيب الثابت هو zum Geburtstag، أي zu dem Geburtstag.', 'präposition', 'Geburtstag'],
      ['feiern', 'feiert · feierte · hat gefeiert', 'يحتفل', 'Wir feiern heute meinen Geburtstag.', 'Wir feiern heute mein Geburtstag.', 'Geburtstag مفعول به مذكر هنا؛ نقول meinen Geburtstag.', 'kasus', 'feiern'],
      ['die Hochzeit', 'die Hochzeiten', 'حفل الزفاف', 'Die Hochzeit war schön.', 'Die Hochzeit waren schön.', 'Hochzeit مفرد؛ نقول war. وصيغة ist schön gewesen صحيحة أيضًا في Perfekt.', 'konjugation', 'Hochzeit'],
      ['Weihnachten', '—', 'عيد الميلاد المسيحي', 'Zu Weihnachten sind wir zu Hause.', 'In Weihnachten sind wir zu Hause.', 'نقول zu Weihnachten، كما أن an Weihnachten مستعملة أيضًا؛ ويأتي اسم المناسبة هنا بلا أداة.', 'präposition', 'Weihnachten'],
      ['Ostern', '—', 'عيد الفصح', 'Zu Ostern besuchen wir die Familie.', 'In Ostern besuchen wir die Familie.', 'نقول zu Ostern، وتصح أيضًا an Ostern بحسب المنطقة والسياق؛ ويأتي الاسم هنا بلا أداة.', 'präposition', 'Ostern'],
      ['Neujahr', '—', 'رأس السنة / يوم السنة الجديدة', 'Zu Neujahr wünschen wir viel Glück.', 'In Neujahr wünschen wir viel Glück.', 'نقول zu Neujahr، وتستعمل أيضًا an Neujahr؛ ويأتي الاسم هنا بلا أداة.', 'präposition', 'Neujahr'],
      ['gratulieren', 'gratuliert · gratulierte · hat gratuliert', 'يهنّئ', 'Ich gratuliere dir zum Geburtstag.', 'Ich gratuliere dich zum Geburtstag.', 'الشخص يأتي مع gratulieren في الداتيف: dir.', 'kasus', 'gratuliere'],
      ['das Geschenk', 'die Geschenke', 'الهدية', 'Das Geschenk gefällt ihm.', 'Das Geschenk gefällt ihn.', 'الشخص الذي يعجبه الشيء يأتي في الداتيف: ihm.', 'kasus', 'Geschenk'],
      ['schenken', 'schenkt · schenkte · hat geschenkt', 'يهدي', 'Ich schenke ihr Blumen.', 'Ich schenke sie Blumen.', 'الشخص المستفيد يأتي هنا في الداتيف: ihr.', 'kasus', 'schenke'],
      ['die Blume', 'die Blumen', 'الزهرة', 'Ich kaufe meiner Mutter eine Blume.', 'Ich kaufe meiner Mutter ein Blume.', 'Blume مؤنث؛ نقول eine Blume.', 'genus', 'Blume'],
      ['die Karte', 'die Karten', 'البطاقة', 'Ich schreibe eine Karte.', 'Ich schreibe ein Karte.', 'Karte مؤنث؛ نقول eine Karte.', 'genus', 'Karte'],
      ['die Torte', 'die Torten', 'الكعكة المزينة', 'Die Torte ist süß.', 'Der Torte ist süß.', 'Torte مؤنث؛ نقول die Torte. وصيغة süß gemacht ممكنة في سياق إعدادها.', 'genus', 'Torte'],
      ['der Kuchen', 'die Kuchen', 'الكعك / قالب الكعك', 'Der Kuchen schmeckt gut.', 'Der Kuchen schmecken gut.', 'Kuchen مفرد؛ نقول schmeckt.', 'konjugation', 'Kuchen'],
      ['die Kerze', 'die Kerzen', 'الشمعة', 'Die Kerzen brennen.', 'Die Kerze brennen.', 'Kerzen جمع؛ نقول Die Kerzen brennen.', 'plural', 'Kerzen'],
      ['das Lied', 'die Lieder', 'الأغنية', 'Wir singen ein Lied.', 'Wir singen eine Lied.', 'Lied محايد؛ نقول ein Lied.', 'genus', 'Lied'],
      ['tanzen', 'tanzt · tanzte · hat getanzt', 'يرقص', 'Wir tanzen bis Mitternacht.', 'Wir tanzen bis der Mitternacht.', 'نقول bis Mitternacht بلا أداة، كما تصح bis zur Mitternacht بحسب المعنى.', 'kasus', 'tanzen'],
      ['der Gast', 'die Gäste', 'الضيف', 'Die Gäste kommen um acht Uhr.', 'Der Gäste kommen um acht Uhr.', 'Gäste جمع؛ نقول die Gäste.', 'plural', 'Gäste'],
      ['die Dekoration', 'die Dekorationen', 'الزينة', 'Die Dekoration ist bunt.', 'Die Dekoration sind bunt.', 'Dekoration مفرد؛ نقول ist. وصيغة bunt gemacht ممكنة بمعنى جُعلت ملوّنة.', 'konjugation', 'Dekoration'],
      ['das Brautpaar', 'die Brautpaare', 'العروسان / الزوجان في الزفاف', 'Das Brautpaar tanzt.', 'Das Brautpaar tanzen.', 'Brautpaar مفرد محايد؛ نقول das Brautpaar tanzt.', 'konjugation', 'Brautpaar'],
      ['der Jahrestag', 'die Jahrestage', 'الذكرى السنوية', 'Der Jahrestag ist im Juni.', 'Der Jahrestag ist in Juni.', 'مع اسم الشهر نقول im Juni.', 'präposition', 'Jahrestag'],
      ['das Feuerwerk', 'die Feuerwerke', 'الألعاب النارية / عرض الألعاب النارية', 'Das Feuerwerk beginnt um zehn Uhr.', 'Das Feuerwerk beginnt an zehn Uhr.', 'مع وقت الساعة المحدد نقول um zehn Uhr.', 'präposition', 'Feuerwerk'],
      ['der Ball', 'die Bälle', 'الحفل الراقص / الكرة', 'Am Samstag findet ein Ball im Schloss statt.', 'Am Samstag finden ein Ball im Schloss statt.', 'Ball مفرد؛ نقول findet … statt. وin dem Schloss صحيحة أيضًا بدل im Schloss.', 'konjugation', 'Ball'],
      ['der Spaß', 'die Späße', 'المرح / المتعة', 'Der Spaß gehört zum Fest.', 'Die Spaß gehört zum Fest.', 'Spaß مذكر؛ نقول der Spaß.', 'genus', 'Spaß'],
      ['singen', 'singt · sang · hat gesungen', 'يغني', 'Wir singen ein Lied zum Geburtstag.', 'Wir singen ein Lied zu den Geburtstag.', 'نقول zum Geburtstag؛ وقد تكون für den Geburtstag صحيحة إذا كان المقصود أن الأغنية مخصّصة له.', 'präposition', 'singen'],
      ['die Süßigkeit', 'die Süßigkeiten', 'قطعة الحلوى / الحلوى', 'Die Süßigkeit schmeckt den Kindern.', 'Die Süßigkeit schmeckt die Kinder.', 'الشخص الذي يستطيب الشيء يأتي مع schmecken في الداتيف: den Kindern.', 'kasus', 'Süßigkeit'],
      ['das Klavier', 'die Klaviere', 'البيانو', 'Das Klavier steht am Fenster.', 'Der Klavier steht am Fenster.', 'Klavier محايد؛ نقول das Klavier.', 'genus', 'Klavier'],
      ['der Witz', 'die Witze', 'النكتة', 'Der Witz war wirklich gut.', 'Die Witz war wirklich gut.', 'Witz مذكر؛ نقول der Witz.', 'genus', 'Witz'],
      ['witzig', 'witziger · am witzigsten', 'مضحك', 'Der Film war witzig.', 'Der Film war witzige.', 'بعد war تأتي الصفة الخبرية بلا نهاية: witzig.', 'deklination', 'witzig'],
    ],
    tricks: [
      { trick: 'الدعوة والرد: lade … ein · nehme … an · kann nicht kommen', wie: 'Ich lade dich am Samstag zu meiner Feier ein. Ich nehme die Einladung gern an. Leider kann ich am Samstag nicht kommen. Auch „Ich kann leider nicht kommen.“ ist richtig. „Sorry, ich kann nicht kommen.“ ist umgangssprachlich möglich.', warum: 'einladen وannehmen فعلان منفصلان؛ القبول يحتاج an، والاعتذار يمكن أن يبدأ بـLeider أو يضعها بعد الفعل. ولا نرفض Sorry في الكلام الدارج، لكن الهدف هنا محايد.', anchor: 'einladen' },
      { trick: 'التهنئة والإهداء: Herzlichen Glückwunsch · dir gratulieren · ihr schenken', wie: 'Herzlichen Glückwunsch zum Geburtstag! Ich gratuliere dir. Ich schenke ihr Blumen. Auch „Happy Birthday!“ ist im Deutschen gebräuchlich.', warum: 'التهنئة لها عبارة ثابتة، والشخص مع gratulieren ومع المستفيد من schenken يأتي في الداتيف؛ وHappy Birthday بديل شائع لا خطأ مطلق.', anchor: 'gratulieren' },
      { trick: 'موعد المناسبة: zu/an Weihnachten · am Samstag · um sieben Uhr · im Juni', wie: 'Zu Weihnachten und an Weihnachten sind beide möglich. Wir feiern am Samstag. Die Feier beginnt um sieben Uhr. Der Jahrestag ist im Juni.', warum: 'zu/an يأتيان مع المناسبة بحسب الاستعمال، وam مع يوم الأسبوع، وum مع الساعة، وim مع الشهر؛ Weihnachten وOstern وNeujahr تأتي هنا بلا أداة.', anchor: 'Weihnachten' }
    ],
    strictClozeAnswers: true,
    wordClozeNearMisses: {
      'der Geburtstag': 'Geburtstage',
      'der Gast': 'Gast'
    },
    clozeItemIndex: 2,
    clozeNearMiss: 'Einladungen',
    extraCheck: {
      right: 'Die Feier beginnt um sieben Uhr.',
      bad: 'Die Feier beginnt an sieben Uhr.',
      family: 'präposition',
      why: 'مع وقت الساعة المحدد نقول um sieben Uhr.',
      prereq: 'cap.a2-u4-l2.s19'
    }
  },

  'a2-u4-l3': {
    items: [
      ['passen', 'passt · passte · hat gepasst', 'يناسب المقاس', 'Die Hose passt mir gut.', 'Die Hose passt mich gut.', 'الشخص مع passen يأتي في الداتيف: mir.', 'kasus', 'passt'],
      ['anziehen', 'zieht an · zog an · hat angezogen', 'يلبس / يرتدي', 'Ich ziehe heute die blaue Jacke an.', 'Ich anziehe heute die blaue Jacke.', 'في الجملة الرئيسية ينفصل anziehen: ziehe … an.', 'wortstellung', 'an'],
      ['die Größe', 'die Größen', 'المقاس / الحجم', 'Welche Größe haben Sie?', 'Welchen Größe haben Sie?', 'Größe مؤنث؛ نقول Welche Größe.', 'deklination', 'Größe'],
      ['anprobieren', 'probiert an · probierte an · hat anprobiert', 'يقيس قطعة ملابس', 'Kann ich das Hemd anprobieren?', 'Kann ich das Hemd anprobiere?', 'بعد kann يأتي المصدر anprobieren كاملًا؛ وprobieren أوسع معنى وقد يختلف استعماله بحسب المنطقة.', 'konjugation', 'anprobieren'],
      ['die Kleidung', '—', 'الملابس', 'Die Kleidung hängt im Schrank.', 'Die Kleidung hängen im Schrank.', 'Kleidung اسم جمعي يُستعمل هنا مفردًا: hängt.', 'konjugation', 'Kleidung'],
      ['die Hose', 'die Hosen', 'البنطال', 'Die Hose passt mir gut.', 'Die Hose passt mich gut.', 'الشخص الذي يناسبه المقاس يأتي في الداتيف: mir.', 'kasus', 'Hose'],
      ['ausziehen', 'zieht aus · zog aus · hat ausgezogen', 'يخلع', 'Ich ziehe die Schuhe aus.', 'Ich ausziehe die Schuhe.', 'في الجملة الرئيسية ينفصل ausziehen: ziehe … aus.', 'wortstellung', 'aus'],
      ['das Hemd', 'die Hemden', 'القميص', 'Kann ich das Hemd anprobieren?', 'Kann ich den Hemd anprobieren?', 'Hemd محايد، وفي النصب نقول das Hemd.', 'genus', 'Hemd'],
      ['der Rock', 'die Röcke', 'التنورة', 'Der rote Rock steht dir gut.', 'Die rote Rock steht dir gut.', 'Rock مذكر؛ نقول der Rock. وstehen بهذا المعنى يأخذ الداتيف dir.', 'genus', 'Rock'],
      ['die Jacke', 'die Jacken', 'السترة / الجاكيت', 'Die blaue Jacke steht dir gut.', 'Der blaue Jacke steht dir gut.', 'Jacke مؤنث؛ نقول die blaue Jacke.', 'genus', 'Jacke'],
      ['der Mantel', 'die Mäntel', 'المعطف', 'Der Mantel hält mich warm.', 'Die Mantel hält mich warm.', 'Mantel مذكر؛ نقول der Mantel. وwarm gemacht قد تكون صحيحة في سياق سببي مختلف.', 'genus', 'Mantel'],
      ['der Schuh', 'die Schuhe', 'الحذاء', 'Die Schuhe sind neu.', 'Der Schuhe sind neu.', 'Schuhe جمع؛ نقول die Schuhe sind.', 'plural', 'Schuhe'],
      ['die Socke', 'die Socken', 'الجورب', 'Die Socken sind bunt.', 'Die Socke sind bunt.', 'Socken جمع؛ نقول Die Socken sind. وbunt gemacht ممكنة في سياق سببي.', 'plural', 'Socken'],
      ['der Pullover', 'die Pullover', 'الكنزة / السترة الصوفية', 'Der Pullover ist zu groß.', 'Der Pullover ist zu große.', 'بعد ist تأتي الصفة الخبرية بلا نهاية: zu groß.', 'deklination', 'Pullover'],
      ['das T-Shirt', 'die T-Shirts', 'القميص القصير', 'Das T-Shirt kostet zehn Euro.', 'Der T-Shirt kostet zehn Euro.', 'T-Shirt محايد؛ نقول das T-Shirt.', 'genus', 'T-Shirt'],
      ['der Gürtel', 'die Gürtel', 'الحزام', 'Der Gürtel passt zum Rock.', 'Der Gürtel passt zur Rock.', 'Rock مذكر؛ نقول zum Rock، وzu dem Rock صحيحة أيضًا بلا اختصار.', 'präposition', 'Gürtel'],
      ['die Tasche', 'die Taschen', 'الحقيبة', 'Die Tasche gehört mir.', 'Die Tasche gehört mich.', 'المالك مع gehören يأتي في الداتيف: mir.', 'kasus', 'Tasche'],
      ['die Mode', '—', 'الموضة', 'Die Mode ändert sich schnell.', 'Die Mode ändert schnell.', 'عندما تتغير الموضة نفسها نستعمل sich ändern.', 'konjugation', 'Mode'],
      ['der Verkäufer', 'die Verkäufer', 'البائع', 'Der Verkäufer hilft mir.', 'Der Verkäufer hilft mich.', 'الشخص مع helfen يأتي في الداتيف: mir.', 'kasus', 'Verkäufer'],
      ['die Umkleidekabine', 'die Umkleidekabinen', 'غرفة القياس', 'Die Umkleidekabine ist dort hinten.', 'Die Umkleidekabine sind dort hinten.', 'Umkleidekabine مفرد؛ نقول ist.', 'konjugation', 'Umkleidekabine'],
      ['das Sonderangebot', 'die Sonderangebote', 'العرض الخاص', 'Das Sonderangebot gilt nur heute.', 'Das Sonderangebot gelten nur heute.', 'Sonderangebot مفرد؛ نقول gilt.', 'konjugation', 'Sonderangebot'],
      ['der Preis', 'die Preise', 'السعر', 'Der Preis ist reduziert.', 'Der Preise ist reduziert.', 'Preis مفرد مذكر؛ نقول der Preis.', 'plural', 'Preis'],
      ['umtauschen', 'tauscht um · tauschte um · hat umgetauscht', 'يستبدل', 'Ich möchte die Jacke bitte umtauschen.', 'Ich möchte die Jacke bitte tausche um.', 'بعد möchte يأتي المصدر umtauschen كلمة واحدة في نهاية الجملة.', 'wortstellung', 'umtauschen'],
      ['zurückgeben', 'gibt zurück · gab zurück · hat zurückgegeben', 'يعيد السلعة', 'Ich gebe die Jacke zurück.', 'Ich zurückgebe die Jacke.', 'في الجملة الرئيسية ينفصل zurückgeben: gebe … zurück؛ أما umtauschen فيعني الاستبدال.', 'wortstellung', 'zurück'],
      ['die Kasse', 'die Kassen', 'صندوق الدفع', 'Bitte zahlen Sie an der Kasse.', 'Bitte zahlen Sie an die Kasse.', 'موضع الدفع هو an der Kasse؛ أما in der Kasse فتعني داخل صندوق النقود في سياق آخر.', 'präposition', 'Kasse'],
      ['die Quittung', 'die Quittungen', 'الإيصال', 'Bitte geben Sie mir die Quittung.', 'Bitte geben Sie mir der Quittung.', 'Quittung مفعول به مؤنث في النصب: die Quittung.', 'kasus', 'Quittung'],
      ['das Kaufhaus', 'die Kaufhäuser', 'المتجر الكبير', 'Im Kaufhaus kaufe ich neue Kleidung.', 'Im Kaufhaus kaufe ich neues Kleidung.', 'Kleidung مؤنث ومفعول به هنا: neue Kleidung. وIn dem Kaufhaus صحيحة أيضًا بدل Im Kaufhaus.', 'deklination', 'Kaufhaus'],
      ['die Reinigung', 'die Reinigungen', 'محل التنظيف الجاف / التنظيف', 'Ich bringe den Mantel in die Reinigung.', 'Ich bringe den Mantel in der Reinigung.', 'مع bringen إلى وجهة نقول in die Reinigung؛ وin der Reinigung تصف مكانًا لا هذه الوجهة.', 'präposition', 'Reinigung'],
      ['tragen', 'trägt · trug · hat getragen', 'يلبس / يحمل', 'Sie trägt heute einen roten Rock.', 'Sie trägt heute ein roten Rock.', 'بعد einen تأخذ الصفة النهاية -en: einen roten Rock.', 'deklination', 'trägt'],
      ['schneiden', 'schneidet · schnitt · hat geschnitten', 'يقص', 'Ich schneide mir die Haare kurz.', 'Ich schneide mich die Haare kurz.', 'مع جزء الجسم نقول mir في الداتيف وdie Haare مفعولًا به.', 'kasus', 'schneide'],
      ['das Händetuch', 'die Händetücher', 'منشفة اليد', 'Das Händetuch hängt neben dem Waschbecken.', 'Der Händetuch hängt neben dem Waschbecken.', 'المركب المنتهي بـTuch محايد؛ نقول das Händetuch، وكذلك das Handtuch.', 'genus', 'Händetuch'],
    ],
    tricks: [
      { trick: 'الفعل المنفصل في الجملة، والمصدر متصل بعد modal', wie: 'Ich ziehe heute die blaue Jacke an. Zieh bitte die Schuhe aus! Kann ich das Hemd anprobieren? Ich möchte die Jacke umtauschen. Ich sehe, was du heute anhast.', warum: 'في الجملة الرئيسية ينفصل an/aus/zurück، لكن المصدر بعد kann أو möchte يبقى كلمة واحدة. anziehen هو فعل اللبس، أما was du anhast فيصف ما ترتديه الآن.', anchor: 'anziehen' },
      { trick: 'المقاس والملكية والمساعدة تحتاج داتيف', wie: 'Die Hose passt mir gut. Der Rock steht dir gut. Die Tasche gehört mir. Der Verkäufer hilft mir.', warum: 'الشخص يأتي مع passen وstehen بهذا المعنى وgehören وhelfen في الداتيف؛ وقد نقول Die Hose passt gut بلا ذكر الشخص إذا كان واضحًا.', anchor: 'passen' },
      { trick: 'في المتجر: Größe وHose هما اللفظان المحايدان', wie: 'Welche Größe haben Sie? Ich brauche Größe achtunddreißig. Auch „Ich brauche die Größe achtunddreißig.“ ist möglich. Pants und Size sind Modewörter; „Das suits dir“ ist hingegen ein Sprachmix.', warum: 'Pants وSize قد تظهران كألفاظ دخيلة في سياقات الموضة، فلا نعدهما خطأ مطلقًا، لكنهما لا تستبدلان Hose وGröße في كل سياق. ولا نخلط الفعل الإنجليزي suits داخل الجملة الألمانية.', anchor: 'die Größe' }
    ],
    strictClozeAnswers: true,
    wordClozeNearMisses: {
      'die Hose': 'Hosen',
      'der Preis': 'Preise'
    },
    clozeItemIndex: 3,
    clozeNearMiss: 'anprobiere',
    extraCheck: {
      right: 'Welche Größe haben Sie?',
      bad: 'Welchen Größe haben Sie?',
      family: 'deklination',
      why: 'Größe مؤنث؛ نقول Welche Größe.',
      prereq: 'cap.a2-u4-l3.s06'
    }
  }

};

/* Deutschweg — P3.4 lexical layer, A1 unit 5 (part a): a1-u5-l1 … a1-u5-l3.
   This unit exists to carry the entries of the official Goethe A1 list that the
   first four A1 units left out — post and telephone, bank and office, school and
   papers. Same row shape as tools/vocab-a0a1.js. The compiler refuses a row whose
   example does not contain the blankable core, so every example carries it. */

module.exports = {

  'a1-u5-l1': {
    items: [
      ['der Anrufbeantworter', 'die Anrufbeantworter', 'جهاز الرد الآلي', 'Sprechen Sie bitte auf den Anrufbeantworter.', 'Sprechen Sie bitte auf dem Anrufbeantworter.', 'الرسالة تتجه إلى التسجيل على الجهاز؛ لذلك نقول auf den.', 'kasus', 'Anrufbeantworter'],
      ['der Absender', 'die Absender', 'المُرسِل', 'Auf dem Umschlag stehen Absender und Empfänger.', 'Auf dem Umschlag steht Absender und Empfänger.', 'مع اسمين موصولين بـ und يأتي الفعل في الجمع: stehen.', 'konjugation', 'Absender'],
      ['der Empfänger', 'die Empfänger', 'المُرسَل إليه', 'Auf dem Umschlag stehen Absender und Empfänger. Der Empfänger ist ein Bekannter von mir.', 'Auf dem Umschlag stehen Absender und Empfang.', 'Empfänger هو المرسل إليه، أما Empfang فمعناه الاستقبال.', 'falser-freund', 'Empfänger'],
      ['die Postleitzahl', 'die Postleitzahlen', 'الرمز البريدي', 'Wie lautet Ihre Postleitzahl?', 'Wie lautet Ihr Postleitzahl?', 'Postleitzahl مؤنث، لذلك نقول Ihre Postleitzahl.', 'deklination', 'Postleitzahl'],
      ['die Vorwahl', 'die Vorwahlen', 'مفتاح الاتصال', 'Wie lautet die Vorwahl von München?', 'Wie lautet der Vorwahl von München?', 'Vorwahl اسم مؤنث: die Vorwahl.', 'genus', 'Vorwahl'],
      ['das Fax', 'die Faxe', 'الفاكس', 'Ich habe es eilig; schicken Sie mir bitte schnell ein Fax.', 'Ich habe es eilig; schicken Sie mich bitte schnell ein Fax.', 'المستفيد يأتي في الداتيف: mir، لا mich.', 'kasus', 'Fax'],
      ['die E-Mail', 'die E-Mails', 'البريد الإلكتروني', 'Ich habe Ihre E-Mail nicht bekommen.', 'Ich habe Ihre E-Mail nicht geworden.', 'الاستلام يُعبّر عنه بـ bekommen، لا werden.', 'falser-freund', 'E-Mail'],
      ['die Anzeige', 'die Anzeigen', 'الإعلان المكتوب', 'In der Anzeige steht: Die Wohnung kostet circa 400 Euro.', 'In der Anzeige stehen: Die Wohnung kostet circa 400 Euro.', 'Anzeige مفرد، لذلك نقول steht.', 'konjugation', 'Anzeige'],
      ['die Ansage', 'die Ansagen', 'الرسالة الصوتية المسجّلة', 'Auf dem Anrufbeantworter höre ich eine Ansage.', 'Auf dem Anrufbeantworter höre ich einen Ansage.', 'Ansage مؤنث؛ في النصب نقول eine Ansage.', 'genus', 'Ansage'],
      ['die Durchsage', 'die Durchsagen', 'النداء عبر مكبّر الصوت', 'Ich habe die Durchsage am Bahnhof verstanden.', 'Ich habe die Durchsage am Bahnhof versteht.', 'في Perfekt نحتاج Partizip II: verstanden.', 'konjugation', 'Durchsage'],
      ['der Anschluss', 'die Anschlüsse', 'وصلة المواصلات أو الاتصال', 'In Mannheim haben Sie einen Anschluss nach Stuttgart.', 'In Mannheim haben Sie ein Anschluss nach Stuttgart.', 'Anschluss مذكر في النصب: einen Anschluss.', 'kasus', 'Anschluss'],
      ['die Auskunft', 'die Auskünfte', 'المعلومة أو الاستعلام', 'Können Sie mir eine Auskunft geben?', 'Können Sie mir eine Auskunft machen?', 'التركيب الطبيعي هو eine Auskunft geben.', 'lexik-kollokation', 'Auskunft'],
      ['die Information', 'die Informationen', 'المعلومة أو مكتب المعلومات', 'An der Information frage ich: Wo kann ich ausländisches Geld wechseln?', 'An die Information frage ich: Wo kann ich ausländisches Geld wechseln?', 'عند مكتب المعلومات نقول an der Information.', 'kasus', 'Information'],
      ['international', '—', 'دولي', 'Unser Kurs ist international; hier lernen viele Ausländer Deutsch.', 'Unser Kurs ist internationalisch; hier lernen viele Ausländer Deutsch.', 'الصفة الصحيحة هي international بلا لاحقة إضافية.', 'deklination', 'international'],
      ['das Internet', '—', 'الإنترنت', 'Das findest du im Internet.', 'Das findest du in Internet.', 'في هذا التعبير المعتاد نقول im Internet؛ وim اختصار in dem.', 'präposition', 'Internet'],
      ['die CD', 'die CDs', 'القرص المدمج', 'Bring bitte deine Lieblings-CD mit.', 'Bring bitte deine Lieblings-CD mit du.', 'الأمر مع du لا يضيف الضمير بعد الفعل.', 'wortstellung', 'CD'],
      ['der Kugelschreiber', 'die Kugelschreiber', 'قلم الحبر', 'Hast du einen Kugelschreiber für mich?', 'Hast du ein Kugelschreiber für mich?', 'Kugelschreiber مذكر في النصب: einen.', 'genus', 'Kugelschreiber'],
      ['der Bleistift', 'die Bleistifte', 'قلم الرصاص', 'Hier ist ein Bleistift; die Aufgabe ist einfach.', 'Hier ist eine Bleistift; die Aufgabe ist einfach.', 'Bleistift مذكر: ein Bleistift.', 'genus', 'Bleistift'],
      ['der Bogen', 'die Bögen', 'الورقة أو الاستمارة', 'Bitte nehmen Sie einen Bogen Papier.', 'Bitte nehmen Sie ein Bogen Papier.', 'Bogen مذكر في النصب: einen Bogen.', 'genus', 'Bogen'],
      ['drucken', 'druckt · druckte · hat gedruckt', 'يطبع', 'Drucke bitte das Formular für mich.', 'Drucke bitte das Formular für mich du.', 'الأمر مع du لا يحتاج ضميرًا ظاهرًا.', 'wortstellung', 'Drucke'],
      ['der Drucker', 'die Drucker', 'الطابعة', 'Mein Drucker ist kaputt.', 'Mein Drucker hat kaputt.', 'مع الصفة kaputt نستعمل هنا sein: ist kaputt.', 'lexik-kollokation', 'Drucker'],
      ['drücken', 'drückt · drückte · hat gedrückt', 'يضغط', 'Drück also hier, dann kannst du den Computer anmachen.', 'Drück also hier, dann du kannst den Computer anmachen.', 'بعد dann يأتي الفعل المصرّف قبل الفاعل: kannst du.', 'wortstellung', 'Drück'],
      ['anklicken', 'klickt an · klickte an · hat angeklickt', 'ينقر على', 'Da musst du dieses Wort anklicken.', 'Da musst du dieses Wort klicken an.', 'بعد musst يأتي المصدر المتصل anklicken في آخر الجملة.', 'wortstellung', 'anklicken'],
      ['kriegen', 'kriegt · kriegte · hat gekriegt', 'يحصل على', 'Ich kriege 15 Euro pro Stunde.', 'Ich kriege 15 Euro pro Stunden.', 'مع المعدل المفرد نقول pro Stunde.', 'plural', 'kriege'],
      ['abgeben', 'gibt ab · gab ab · hat abgegeben', 'يسلّم', 'Ich muss meine Schlüssel abgeben.', 'Ich muss meine Schlüssel geben ab.', 'بعد muss يأتي المصدر المتصل abgeben في النهاية.', 'wortstellung', 'abgeben'],
      ['willkommen', '—', 'مرحبًا بك', 'Herzlich willkommen in Berlin!', 'Herzlich willkommen nach Berlin!', 'مع willkommen والمكان نقول هنا in Berlin.', 'präposition', 'willkommen'],
      ['das Wiederhören', '—', 'إلى اللقاء في المكالمة', 'Am Telefon sage ich „Auf Wiederhören“.', 'Am Telefon sage ich „Auf Wiedersehen“.', 'في نهاية المكالمة نقول Auf Wiederhören؛ وعند اللقاء نقول Auf Wiedersehen.', 'register', 'Wiederhören'],
      ['die Welt', 'die Welten', 'العالم', 'Es gibt viele Probleme auf der Welt.', 'Es gibt viele Probleme auf die Welt.', 'للموقع في هذا التعبير نقول auf der Welt.', 'kasus', 'Welt']
    ],
    strictClozeAnswers: true,
    wordClozeNearMisses: { 'das Fax': 'Faxe', 'drücken': 'Drückst' },
    clozeItemIndex: 3,
    clozeNearMiss: 'Postleitzahle',
    extraCheck: {
      right: 'Wie lautet die Vorwahl von München?',
      bad: 'Wie lautet der Vorwahl von München?',
      why: 'Vorwahl اسم مؤنث: die Vorwahl.',
      family: 'genus',
      prereq: 'cap.a1-u5-l1.s06',
      frage: 'أي سؤال يستعمل أداة Vorwahl الصحيحة؟'
    },
    tricks: [
      { trick: 'بعد الفعل الناقص يبقى مصدر الفعل المنفصل متصلًا', wie: 'Du musst das Wort anklicken. Ich muss den Schlüssel abgeben.', warum: 'بعد müssen يأتي المصدر في النهاية بصيغته المتصلة: anklicken وabgeben، لا klicken an وgeben ab.', anchor: 'anklicken' },
      { trick: 'في المكالمة Wiederhören، وفي اللقاء Wiedersehen', wie: 'Am Telefon: Auf Wiederhören. Beim persönlichen Abschied: Auf Wiedersehen.', warum: 'اختَر التحية بحسب الوسيلة: السماع في المكالمة، والرؤية عند اللقاء وجهًا لوجه.', anchor: 'das Wiederhören' },
      { trick: 'جنس الاسم المركب يتبع الاسم الأخير', wie: 'der Kugelschreiber ← der Schreiber · der Anrufbeantworter ← der Beantworter · die Postleitzahl ← die Zahl', warum: 'آخر اسم في المركب يحدد الأداة: der مع Schreiber وBeantworter، وdie مع Zahl.', anchor: 'der Kugelschreiber' }
    ]
  },

  'a1-u5-l2': {
    items: [
      ['das Konto', 'die Konten', 'الحساب المصرفي', 'Das Geld überweisen wir auf Ihr Konto.', 'Das Geld überweisen wir in Ihr Konto.', 'إلى الحساب: auf das Konto.', 'präposition', 'Konto'],
      ['überweisen', 'überweist · überwies · hat überwiesen', 'يحوّل ماليًا', 'Sie können das Geld auch überweisen.', 'Sie können das Geld auch überweisen machen.', 'überweisen فعل كامل بلا machen.', 'lexik-kollokation', 'überweisen'],
      ['der Automat', 'die Automaten', 'الآلة الذاتية', 'Die Fahrkarten gibt es nur am Automaten.', 'Die Fahrkarten gibt es nur in dem Automat.', 'عند الآلة: am Automaten.', 'präposition', 'Automaten'],
      ['automatisch', '—', 'آليًا', 'Das geht automatisch.', 'Das geht automatisch machen.', 'automatisch حال يكفي.', 'lexik-kollokation'],
      ['ausfüllen', 'füllt aus · füllte aus · hat ausgefüllt', 'يملأ الاستمارة', 'Füllen Sie bitte dieses Formular aus.', 'Füllen Sie bitte dieses Formular.', 'المنفصل يحتاج aus في النهاية.', 'wortstellung', 'aus'],
      ['das Formular', 'die Formulare', 'الاستمارة', 'Sie müssen dieses Formular ausfüllen.', 'Sie müssen diese Formular ausfüllen.', 'Formular محايد: dieses.', 'genus', 'Formular'],
      ['der Schalter', 'die Schalter', 'الشبّاك', 'Gehen Sie bitte zum Schalter drei.', 'Gehen Sie bitte zu dem Schalter drei.', 'الشائع: zum Schalter.', 'präposition', 'Schalter'],
      ['der Beamte', 'die Beamten', 'الموظف الرسمي', 'Fragen Sie die Beamtin an Schalter acht.', 'Fragen Sie der Beamtin an Schalter acht.', 'المفعول المباشر في النصب: die Beamtin.', 'kasus', 'Beamtin'],
      ['die Anmeldung', 'die Anmeldungen', 'التسجيل', 'Eine Anmeldung für diesen Kurs ist nicht mehr möglich.', 'Eine Anmeldung für diesem Kurs ist nicht mehr möglich.', 'für يأخذ النصب: diesen Kurs.', 'kasus', 'Anmeldung'],
      ['sich anmelden', 'meldet sich an · meldete sich an · hat sich angemeldet', 'يسجّل نفسه', 'Wo kann ich mich anmelden? Ich möchte auch mitmachen.', 'Wo kann ich anmelden mich?', 'الضمير المتصل بالفعل المنفصل: mich anmelden.', 'wortstellung', 'anmelden'],
      ['ankreuzen', 'kreuzt an · kreuzte an · hat angekreuzt', 'يعلّم في المربع', 'Kreuzen Sie bitte „weiblich“ an.', 'Kreuzen Sie bitte „weiblich“.', 'المنفصل يحتاج an في النهاية.', 'wortstellung', 'an'],
      ['gültig', '—', 'ساري المفعول', 'Der Pass ist nicht mehr gültig. Was für ein Pech!', 'Der Pass ist nicht mehr gültig machen.', 'gültig صفة مع sein.', 'lexik-kollokation'],
      ['die Papiere', '—', 'الأوراق الرسمية', 'Haben Sie Ihre Papiere dabei?', 'Haben Sie Ihre Papiere mit?', 'المصطلح: dabei haben.', 'lexik-kollokation', 'Papiere'],
      ['bar', '—', 'نقدًا', 'Muss ich bar zahlen?', 'Muss ich mit bar zahlen?', 'bar حال بلا حرف جر.', 'lexik-kollokation'],
      ['die Bäckerei', 'die Bäckereien', 'المخبز', 'Ich gehe schnell zur Bäckerei, sie muss bald schließen.', 'Ich gehe schnell nach Bäckerei.', 'إلى المخبز: zur Bäckerei.', 'präposition', 'Bäckerei'],
      ['die Dame', 'die Damen', 'السيدة', 'Sehr geehrte Damen und Herren! Darf ich mich vorstellen?', 'Sehr geehrte Damen und Herren es!', 'النداء الرسمي ينتهي عند Herren.', 'register', 'Damen'],
      ['der Partner', 'die Partner', 'الشريك', 'Sie ist meine Partnerin.', 'Sie ist mein Partnerin.', 'Partnerin مؤنث: meine.', 'genus', 'Partnerin'],
      ['die Party', 'die Partys', 'الحفلة', 'Heute Abend machen wir eine Party. Das wird lustig.', 'Heute Abend machen wir ein Party.', 'Party مؤنث: eine.', 'genus', 'Party'],
      ['das Praktikum', 'die Praktika', 'التدريب العملي', 'Ich mache ein Praktikum bei Siemens.', 'Ich mache ein Praktikum in Siemens.', 'العمل عند شركة: bei.', 'präposition', 'Praktikum'],
      ['die Praxis', 'die Praxen', 'عيادة الطبيب', 'Die Praxis ist ab acht Uhr geöffnet.', 'Die Praxis ist seit acht Uhr geöffnet.', 'البداية من ساعة: ab.', 'präposition', 'Praxis'],
      ['der Prospekt', 'die Prospekte', 'الكتيّب الدعائي', 'Schicken Sie mir bitte einen Prospekt. Wie soll das Zimmer aussehen?', 'Schicken Sie mir bitte ein Prospekt.', 'Prospekt مذكر: einen.', 'genus', 'Prospekt'],
      ['die Rezeption', 'die Rezeptionen', 'مكتب الاستقبال', 'Fragen Sie bitte an der Rezeption.', 'Fragen Sie bitte in der Rezeption.', 'عند الاستقبال: an der Rezeption.', 'präposition'],
      ['die Firma', 'die Firmen', 'الشركة', 'Er arbeitet bei einer anderen Firma.', 'Er arbeitet in einer anderen Firma.', 'العمل عند شركة: bei.', 'präposition', 'Firma'],
      ['der Arbeitsplatz', 'die Arbeitsplätze', 'مكان العمل', 'An meinem Arbeitsplatz fehlt ein Drucker. Mein Bruder ist selbstständig.', 'In meinem Arbeitsplatz fehlt ein Drucker.', 'في مكان العمل: an meinem Arbeitsplatz.', 'präposition', 'Arbeitsplatz'],
      ['arbeitslos', '—', 'عاطل عن العمل', 'Viele Leute sind schon lange arbeitslos.', 'Viele Leute sind schon lange arbeitslos gemacht.', 'arbeitslos صفة مع sein.', 'lexik-kollokation'],
      ['verdienen', 'verdient · verdiente · hat verdient', 'يكسب', 'Ich verdiene 1.500 Euro im Monat. Das ist normal.', 'Ich verdiene 1.500 Euro für Monat.', 'شهريًا: im Monat.', 'präposition', 'verdiene'],
      ['der Verkäufer', 'die Verkäufer', 'البائع', 'Meine Mutter ist Verkäuferin im Kaufhaus.', 'Meine Mutter ist Verkäufer in Kaufhaus.', 'المؤنث Verkäuferin، والمكان im Kaufhaus.', 'register', 'Verkäuferin'],
      ['verkaufen', 'verkauft · verkaufte · hat verkauft', 'يبيع', 'Er verkauft sein altes Auto.', 'Er verkauft sein Auto alt.', 'الصفة قبل الاسم: altes Auto.', 'deklination', 'verkauft']
    ],
    tricks: [
      { trick: 'المنفصل في الماضي المركّب يلتصق في الوسط: an-ge-kreuzt', wie: 'ankreuzen · anmelden · ausfüllen: Ich habe angekreuzt. Ich habe mich angemeldet. Ich habe ausgefüllt.', warum: 'في الماضي المركّب يدخل ge داخل الفعل المنفصل، وهي علامة الماضي التي يبحث عنها المصحّح.', anchor: 'ankreuzen' },
      { trick: 'bei للشركة، an للشبّاك والاستقبال', wie: 'bei Siemens arbeiten · am Schalter fragen · an der Rezeption fragen.', warum: 'الخدمات لها حروف ثابتة، واستعمال in مكان an يجعل الجملة مفهومة لكن غير ألمانية.', anchor: 'die Rezeption' },
      { trick: 'zum وzur اختصار zu dem وzu der', wie: 'zum Schalter (der) · zur Bäckerei (die) · zum Praktikum (das).', warum: 'zu dem تُدمج في zum، والتلفّظ بالدمج الكامل هو ما يميّز المستوى A1 الجيد.', anchor: 'der Schalter' }
    ]
  },

  'a1-u5-l3': {
    items: [
      ['der Kindergarten', 'die Kindergärten', 'الروضة', 'Die kleine Laura geht in den Kindergarten.', 'Die kleine Laura geht in die Kindergarten.', 'إلى المؤسسة: in den.', 'kasus', 'Kindergarten'],
      ['der Schüler', 'die Schüler', 'التلميذ', 'In meinem Kurs sind fünf Schüler.', 'In meinem Kurs sind fünf Schüler Leute.', 'Schüler جمع يكفي.', 'plural', 'Schüler'],
      ['der Student', 'die Studenten', 'الطالب الجامعي', 'Ich bin Studentin in Mainz.', 'Ich bin Student in Mainz.', 'المتحدثة أنثى: Studentin.', 'register', 'Studentin'],
      ['das Studium', '—', 'الدراسة الجامعية', 'Das Studium beginnt im Oktober.', 'Das Studium beginnt in Oktober.', 'الشهر يأخذ im.', 'präposition', 'Studium'],
      ['kennenlernen', 'lernt kennen · lernte kennen · hat kennengelernt', 'يتعرّف على', 'Wir möchten Sie kennenlernen.', 'Wir möchten Sie kennen lernen du.', 'المنفصل في النهاية قطعة واحدة: kennenlernen.', 'wortstellung', 'kennenlernen'],
      ['die Führung', 'die Führungen', 'الجولة المرشدة', 'Die Führung durch das Haus beginnt um drei.', 'Die Führung für das Haus beginnt um drei.', 'عبر البيت: durch das Haus.', 'präposition', 'Führung'],
      ['kulturell', '—', 'ثقافي', 'Ich bin kulturell interessiert.', 'Ich bin kulturellisch interessiert.', 'الصفة بلا لاحقة زائدة: kulturell.', 'deklination'],
      ['die Ordnung', 'die Ordnungen', 'الترتيب', 'Das ist in Ordnung. So machen wir es.', 'Das ist in die Ordnung.', 'المصطلح: in Ordnung.', 'lexik-kollokation', 'Ordnung'],
      ['männlich', '—', 'ذكوري', 'Kreuzen Sie „männlich“ an.', 'Kreuzen Sie „männlich an“.', 'علامة التنصيص تُغلق قبل an.', 'orthographie'],
      ['weiblich', '—', 'أنثوي', 'Kreuzen Sie „weiblich“ oder „männlich“ an.', 'Kreuzen Sie weiblich oder männlich.', 'الاستمارة تطلب an في النهاية.', 'lexik-kollokation'],
      ['der Jugendliche', 'die Jugendlichen', 'الشاب', 'Viele Jugendliche kaufen gern ein. Sie mögen moderne Kleidung.', 'Viele Jugendlich kaufen gern ein.', 'الصفة المستعملة اسمًا تُصرَّف: Jugendliche.', 'deklination', 'Jugendliche'],
      ['das Baby', 'die Babys', 'الرضيع', 'Mein Kind ist noch ein Baby.', 'Mein Kind ist noch ein Babys.', 'المفرد بلا s: ein Baby.', 'plural', 'Baby'],
      ['der Familienname', 'die Familiennamen', 'اسم العائلة', 'Mein Familienname ist Schmidt.', 'Mein Familienname ist Schmidt es.', 'الجملة تنتهي عند الاسم.', 'wortstellung', 'Familienname'],
      ['der Familienstand', '—', 'الحالة العائلية', 'Bei „Familienstand“ kreuzen Sie „ledig“ an.', 'In „Familienstand“ kreuzen Sie „ledig“ an.', 'في الاستمارة: bei.', 'präposition', 'Familienstand'],
      ['ledig', '—', 'أعزب', 'Sind Sie verheiratet? – Nein, ledig.', 'Sind Sie verheiratet? – Nein, ein ledig.', 'ledig صفة بلا أداة.', 'deklination'],
      ['verheiratet', '—', 'متزوج', 'Ich bin verheiratet und habe zwei Kinder.', 'Ich bin verheiratet mit zwei Kinder.', 'verheiratet يكفي بلا mit.', 'lexik-kollokation'],
      ['das Gewicht', 'die Gewichte', 'الوزن', 'Bei „Gewicht“ schreibst du 62 Kilo.', 'Bei „Gewicht“ schreibst du 62 Kilo es.', 'لا ضمير بعد الكيلو.', 'wortstellung', 'Gewicht'],
      ['die Ehefrau', 'die Ehefrauen', 'الزوجة', 'Das ist meine Ehefrau.', 'Das ist mein Ehefrau.', 'Frau مؤنث: meine.', 'genus', 'Ehefrau'],
      ['der Ehemann', 'die Ehemänner', 'الزوج', 'Das ist mein Ehemann.', 'Das ist meine Ehemann.', 'Mann مذكر: mein.', 'genus', 'Ehemann'],
      ['heiraten', 'heiratet · heiratete · hat geheiratet', 'يتزوّج', 'Meine Schwester heiratet im Mai. Der Verwandte aus Polen kommt auch.', 'Meine Schwester heiratet mit Mai.', 'الشهر يأخذ im.', 'präposition', 'heiratet'],
      ['die Hochzeit', 'die Hochzeiten', 'الزفاف', 'Die Hochzeit war sehr schön.', 'Die Hochzeit war sehr schön gemacht.', 'الصفة تكفي بعد sein.', 'lexik-kollokation', 'Hochzeit'],
      ['gestorben', '—', 'متوفّى', 'Meine Großmutter ist gestorben.', 'Meine Großmutter hat gestorben.', 'الموت بـ sein: ist gestorben.', 'konjugation'],
      ['geboren', '—', 'مولود', 'Ich bin in Tunis geboren.', 'Ich habe in Tunis geboren.', 'الميلاد بـ sein.', 'konjugation'],
      ['das Geburtsjahr', 'die Geburtsjahre', 'سنة الميلاد', 'Das Geburtsjahr Ihres Sohnes, bitte?', 'Das Geburtsjahr von Ihrem Sohn, bitte?', 'الإضافة بـ Genitiv: Ihres Sohnes.', 'kasus', 'Geburtsjahr'],
      ['der Geburtsort', 'die Geburtsorte', 'مكان الميلاد', 'Schreiben Sie Ihren Geburtsort auf das Formular.', 'Schreiben Sie Ihren Geburtsort in das Formular.', 'على الاستمارة: auf das Formular.', 'präposition', 'Geburtsort'],
      ['die Oma', 'die Omas', 'الجدّة', 'Meine Oma ist schon tot.', 'Meine Oma ist schon tot gemacht.', 'tot صفة مع sein.', 'lexik-kollokation', 'Oma'],
      ['der Opa', 'die Opas', 'الجدّ', 'Mein Opa heißt Hans.', 'Mein Opa ruft Hans.', '«يُدعى» مع heißen لا rufen.', 'lexik-kollokation', 'Opa'],
      ['der Raum', 'die Räume', 'القاعة', 'Der Unterricht ist in Raum 332.', 'Der Unterricht ist in dem Raum 332.', 'أرقام القاعات بلا أداة: in Raum 332.', 'präposition', 'Raum']
    ],
    tricks: [
      { trick: 'الاستمارة تسأل بـ bei: bei „Familienstand“', wie: 'Bei „Familienstand“ kreuzen Sie „ledig“ an. Bei „Gewicht“ schreibst du 62 Kilo.', warum: 'الوثيقة الرسمية تسأل عن البند بـ bei، وهي عبارة ثابتة في كل استمارة ألمانية.', anchor: 'der Familienstand' },
      { trick: 'الإضافة في الاستمارة تُصرَّف: Ihres Sohnes', wie: 'das Geburtsjahr Ihres Sohnes · der Name meiner Tochter.', warum: 'الوثيقة الرسمية تفضّل Genitiv على von، والعربية تعبّر بالإضافة فتفلت الصيغة.', anchor: 'das Geburtsjahr' },
      { trick: 'sein مع geboren وgestorben لا haben', wie: 'Ich bin in Tunis geboren. Sie ist gestorben. Beides mit sein.', warum: 'الميلاد والموت حدثان يُصاغان بـ sein، وhaben هنا أثر مباشر من العربية.', anchor: 'geboren' }
    ]
  }

};

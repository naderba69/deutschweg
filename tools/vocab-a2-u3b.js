/* Deutschweg — P3.5 lexical layer, A2 unit 3 (part b): a2-u3-l4 … a2-u3-l6.
   Reisen, Gesundheit, Arbeit. 31–35 items per lesson. */

module.exports = {

  'a2-u3-l4': {
    items: [
      ['die Reise', 'die Reisen', 'الرحلة', 'Die Reise nach Berlin war lang.', 'Die Reise nach Berlin war lange.', 'بعد war تأتي الصفة الخبرية هنا بلا نهاية: lang.', 'deklination', 'Reise'],
      ['buchen', 'bucht · buchte · hat gebucht', 'يحجز', 'Ich habe ein Hotel gebucht.', 'Ich habe ein Hotel buchen.', 'في Perfekt نحتاج اسم المفعول gebucht.', 'konjugation', 'gebucht'],
      ['die Buchung', 'die Buchungen', 'الحجز', 'Die Buchung ist bestätigt.', 'Die Buchung sind bestätigt.', 'Buchung مفرد؛ نقول ist bestätigt.', 'konjugation', 'Buchung'],
      ['der Koffer', 'die Koffer', 'الحقيبة', 'Mein Koffer ist zu schwer.', 'Mein Koffer sind zu schwer.', 'Koffer هنا مفرد؛ نقول ist.', 'konjugation', 'Koffer'],
      ['das Gepäck', '—', 'الأمتعة', 'Das Gepäck steht am Eingang.', 'Die Gepäck steht am Eingang.', 'Gepäck اسم محايد: das Gepäck.', 'genus', 'Gepäck'],
      ['der Flughafen', 'die Flughäfen', 'المطار', 'Wir fahren zum Flughafen.', 'Wir fahren zur Flughafen.', 'Flughafen مذكر؛ zum اختصار zu dem. وصيغة zu dem صحيحة أيضًا.', 'präposition', 'Flughafen'],
      ['der Flug', 'die Flüge', 'الرحلة الجوية', 'Der Flug dauert zwei Stunden.', 'Der Flug dauert zwei Stunde.', 'بعد العدد نستخدم الجمع Stunden.', 'plural', 'Flug'],
      ['die Verspätung', 'die Verspätungen', 'التأخير', 'Der Zug hat zwanzig Minuten Verspätung.', 'Der Zug hat zwanzig Minute Verspätung.', 'بعد zwanzig نستخدم الجمع Minuten. أما Der Zug hat Verspätung gehabt فصيغة ماضٍ صحيحة في سياقها.', 'plural', 'Verspätung'],
      ['das Gleis', 'die Gleise', 'الرصيف / مسار القطار', 'Der Zug fährt von Gleis drei ab.', 'Der Zug fährt aus Gleis drei ab.', 'عند ذكر رصيف الانطلاق نقول von Gleis drei.', 'präposition', 'Gleis'],
      ['die Fahrkarte', 'die Fahrkarten', 'التذكرة', 'Ich möchte eine Fahrkarte nach Berlin, bitte.', 'Ich möchte einen Fahrkarte nach Berlin, bitte.', 'Fahrkarte مؤنث؛ نقول eine Fahrkarte.', 'genus', 'Fahrkarte'],
      ['umsteigen', 'steigt um · stieg um · ist umgestiegen', 'يغيّر وسيلة النقل', 'In Frankfurt müssen wir umsteigen.', 'In Frankfurt müssen wir umgestiegen.', 'بعد müssen يأتي المصدر المتصل umsteigen.', 'konjugation', 'umsteigen'],
      ['einsteigen', 'steigt ein · stieg ein · ist eingestiegen', 'يركب / يصعد', 'Steigen Sie bitte ein!', 'Bitte einsteigen Sie!', 'في الأمر الرسمي يأتي الفعل أولًا والبادئة ein في النهاية.', 'wortstellung', 'ein'],
      ['aussteigen', 'steigt aus · stieg aus · ist ausgestiegen', 'ينزل', 'Wir steigen an der Haltestelle aus.', 'Wir steigen an der Haltestelle.', 'في الجملة الرئيسية يحتاج الفعل المنفصل إلى aus في النهاية.', 'wortstellung', 'aus'],
      ['die Unterkunft', 'die Unterkünfte', 'مكان الإقامة', 'Die Unterkunft war sauber.', 'Die Unterkunft waren sauber.', 'Unterkunft مفرد؛ نقول war. وصيغة Die Unterkunft ist sauber gewesen صحيحة أيضًا عند استعمال Perfekt.', 'konjugation', 'Unterkunft'],
      ['die Jugendherberge', 'die Jugendherbergen', 'بيت الشباب', 'Wir schlafen in einer Jugendherberge.', 'Wir schlafen in ein Jugendherberge.', 'المكان مع الاسم المؤنث يأتي هنا في الداتيف: in einer.', 'kasus', 'Jugendherberge'],
      ['das Einzelzimmer', 'die Einzelzimmer', 'غرفة فردية', 'Ich habe ein Einzelzimmer gebucht.', 'Ich habe eine Einzelzimmer gebucht.', 'Zimmer محايد؛ نقول ein Einzelzimmer.', 'genus', 'Einzelzimmer'],
      ['die Rezeption', 'die Rezeptionen', 'مكتب الاستقبال', 'Fragen Sie bitte an der Rezeption.', 'Fragen Sie bitte an die Rezeption.', 'للسؤال عند مكتب الاستقبال نقول an der Rezeption.', 'kasus', 'Rezeption'],
      ['der Schlüssel', 'die Schlüssel', 'المفتاح', 'Geben Sie den Schlüssel bitte zurück.', 'Geben Sie der Schlüssel bitte zurück.', 'Schlüssel مذكر وهو هنا مفعول به: den Schlüssel.', 'kasus', 'Schlüssel'],
      ['die Grenze', 'die Grenzen', 'الحدود', 'An der Grenze werden die Pässe kontrolliert.', 'An die Grenze werden die Pässe kontrolliert.', 'المكان الساكن يأتي هنا في الداتيف: an der Grenze.', 'kasus', 'Grenze'],
      ['der Zoll', 'die Zölle', 'الجمارك / الديوانة', 'Beim Zoll müssen wir warten.', 'Bei der Zoll müssen wir warten.', 'Zoll مذكر؛ beim اختصار bei dem.', 'präposition', 'Zoll'],
      ['die Sehenswürdigkeit', 'die Sehenswürdigkeiten', 'المعلم السياحي', 'Wir besichtigen die Sehenswürdigkeiten.', 'Wir besichtigen den Sehenswürdigkeiten.', 'Sehenswürdigkeiten جمع في النصب هنا: die Sehenswürdigkeiten.', 'kasus', 'Sehenswürdigkeiten'],
      ['die Stadtführung', 'die Stadtführungen', 'جولة في المدينة', 'Die Stadtführung beginnt um zehn.', 'Die Stadtführung beginnt an zehn.', 'مع وقت الساعة نقول um zehn.', 'präposition', 'Stadtführung'],
      ['das Souvenir', 'die Souvenirs', 'التذكار', 'Ich kaufe ein Souvenir für dich.', 'Ich kaufe ein Souvenir zu dich.', 'للدلالة على المستفيد نقول für dich.', 'präposition', 'Souvenir'],
      ['die Landschaft', 'die Landschaften', 'المنظر الطبيعي / الطبيعة', 'Die Landschaft ist wunderschön.', 'Die Landschaft ist wunderschöne.', 'بعد ist تأتي الصفة الخبرية بلا نهاية: wunderschön.', 'deklination', 'Landschaft'],
      ['der Ausflug', 'die Ausflüge', 'النزهة / الرحلة القصيرة', 'Wir machen einen Ausflug.', 'Wir machen ein Ausflug.', 'Ausflug مذكر وهو مفعول به: einen Ausflug.', 'genus', 'Ausflug'],
      ['die Erinnerung', 'die Erinnerungen', 'الذكرى', 'Diese Reise bleibt eine schöne Erinnerung.', 'Diese Reise bleibt einen schöne Erinnerung.', 'بعد bleiben تأتي هنا eine schöne Erinnerung.', 'kasus', 'Erinnerung'],
      ['der Rappen', 'die Rappen', 'الرابن (جزء من الفرنك السويسري)', 'Ein Kaffee kostet fünf Franken und achtzig Rappen.', 'Ein Kaffee kostet fünf Franken und achtzig Rappe.', 'بعد achtzig نستخدم الجمع Rappen.', 'plural', 'Rappen'],
      ['der Kredit', 'die Kredite', 'القرض', 'Für das Auto nehmen wir einen Kredit auf.', 'Für das Auto nehmen wir ein Kredit auf.', 'Kredit مذكر وهو مفعول به: einen Kredit.', 'genus', 'Kredit'],
      ['das Rad', 'die Räder', 'الدراجة / العجلة', 'Ich fahre mit dem Rad zur Arbeit.', 'Ich fahre mit das Rad zur Arbeit.', 'mit يأخذ الداتيف: mit dem Rad.', 'präposition', 'Rad'],
      ['der Reifen', 'die Reifen', 'الإطار', 'Der Reifen ist platt.', 'Der Reifen sind platt.', 'Reifen هنا مفرد؛ نقول ist.', 'konjugation', 'Reifen'],
      ['her', '—', 'إلى هنا / نحو المتكلم', 'Komm bitte zu mir her!', 'Komm bitte zu ich her!', 'بعد zu نستخدم الداتيف: zu mir؛ وher يعبّر عن الاتجاه نحو المتكلم.', 'kasus', 'her'],
      ['hin', '—', 'إلى هناك / بعيدًا عن المتكلم', 'Wann fährst du hin?', 'Wann fährst du in hin?', 'hin ظرف اتجاه ولا يحتاج in قبله.', 'lexik-kollokation', 'hin'],
      ['unterwegs', '—', 'في الطريق', 'Ich bin heute den ganzen Tag unterwegs.', 'Ich bin heute den ganzen Tag in unterwegs.', 'unterwegs ظرف يأتي هنا بلا حرف جر.', 'lexik-kollokation', 'unterwegs'],
      ['vorne', '—', 'في المقدمة', 'Vorne ist noch ein Platz frei.', 'Vor ist noch ein Platz frei.', 'للمكان في المقدمة نقول vorne، لا vor وحدها.', 'lexik-kollokation', 'vorne'],
      ['dorther', '—', 'من هناك', 'Der Wind kommt dorther.', 'Der Wind kommt dorther von.', 'dorther يدل على المصدر «من هناك» ولا يحتاج von إضافية.', 'lexik-kollokation', 'dorther'],
    ],
    tricks: [
      { trick: 'الفعل المنفصل ينفصل في الجملة الرئيسية، لكنه يبقى متصلًا بعد الفعل الناقص', wie: 'Wir steigen in Frankfurt um. In Frankfurt müssen wir umsteigen. Steigen Sie bitte ein! Wir steigen am Hauptbahnhof aus. Change ist ein englisches Wort; auf Deutsch sagen wir umsteigen.', warum: 'مع müssen نستخدم المصدر umsteigen، أما من دون فعل ناقص فتذهب البادئة إلى نهاية الجملة.', anchor: 'umsteigen' },
      { trick: 'في السفر اختر العبارة والحرف بحسب الموقف: Fahrkarte/Ticket · von Gleis · an der Rezeption · beim Zoll', wie: 'Fahrkarte und Ticket sind beide richtig. Ich möchte eine Fahrkarte nach Berlin, bitte. Der Zug fährt von Gleis drei ab. Wir warten am Gleis. Fragen Sie bitte an der Rezeption. Du reservierst oder buchst ein Zimmer. Beim Zoll müssen wir warten. Go, return und late sind englische Wörter; auf Deutsch sagen wir hin und zurück und Verspätung. Ob her oder hin passt, hängt von Richtung und Standpunkt ab.', warum: 'لا نرفض Ticket ولا zu dem Flughafen؛ المطلوب تركيب ألماني كامل بدل خلط كلمات إنجليزية داخل الجملة. واختيار her أو hin يعتمد على الاتجاه ووجهة نظر المتكلم.', anchor: 'die Rezeption' },
      { trick: 'besichtigen يركّز على مشاهدة المكان، وbesuchen أوسع ويمكن أن يأتي مع الأشخاص والأماكن', wie: 'Wir besichtigen die Sehenswürdigkeiten. Wir können die Sehenswürdigkeiten auch besuchen. Wir besuchen unsere Freunde. Wir können auch ein Museum besuchen.', warum: 'besuchen ليس خطأً مع الأماكن؛ لكن besichtigen يوضح أن الهدف هو المشاهدة والتجول داخل المعلم.', anchor: 'die Sehenswürdigkeit' }
    ],
    strictClozeAnswers: true,
    wordClozeNearMisses: {
      'der Flughafen': 'Flughäfen',
      'die Stadtführung': 'Stadtführungen'
    },
    clozeItemIndex: 15,
    clozeNearMiss: 'Einzelzimmern',
    extraCheck: {
      right: 'Der Zug hat zwanzig Minuten Verspätung.',
      bad: 'Der Zug hat zwanzig Minute Verspätung.',
      family: 'plural',
      why: 'بعد zwanzig نستخدم الجمع Minuten.',
      prereq: 'cap.a2-u3-l4.s06'
    }
  },

  'a2-u3-l5': {
    items: [
      ['die Praxis', 'die Praxen', 'العيادة', 'Die Praxis ist heute geschlossen.', 'Die Praxis ist heute geschließen.', 'اسم المفعول الصحيح هو geschlossen. وتقال أيضًا Die Praxis hat heute geschlossen.', 'orthographie', 'Praxis'],
      ['der Termin', 'die Termine', 'الموعد', 'Ich brauche einen Termin beim Arzt.', 'Ich brauche einen Termin bei der Arzt.', 'Arzt مذكر؛ beim اختصار bei dem. ومع Ärztin نقول bei der Ärztin.', 'präposition', 'Termin'],
      ['die Gesundheit', '—', 'الصحة', 'Die Gesundheit ist wichtiger als das Geld.', 'Die Gesundheit ist wichtiger wie das Geld.', 'في الألمانية المعيارية تأتي المقارنة هنا مع als.', 'lexik-kollokation', 'Gesundheit'],
      ['die Sprechstunde', 'die Sprechstunden', 'ساعات استقبال المرضى / وقت الاستشارة', 'Die Sprechstunde ist von acht bis zwölf.', 'Die Sprechstunde ist in acht bis zwölf.', 'للفترة ذات البداية والنهاية نقول von acht bis zwölf.', 'präposition', 'Sprechstunde'],
      ['die Schmerzen', '—', 'الآلام', 'Ich habe starke Schmerzen.', 'Ich habe starke Schmerze.', 'صيغة الجمع المستعملة هنا هي Schmerzen.', 'plural', 'Schmerzen'],
      ['die Tablette', 'die Tabletten', 'قرص الدواء', 'Nehmen Sie die Tabletten dreimal täglich.', 'Nehmen Sie die Tabletten dreimal Tag.', 'لبيان المعدل اليومي نقول dreimal täglich.', 'lexik-kollokation', 'Tabletten'],
      ['das Rezept', 'die Rezepte', 'الوصفة الطبية', 'Der Arzt schreibt ein Rezept.', 'Der Arzt schreibt eine Rezept.', 'Rezept محايد؛ نقول ein Rezept.', 'genus', 'Rezept'],
      ['die Apotheke', 'die Apotheken', 'الصيدلية', 'In der Apotheke bekommt man Medikamente.', 'In die Apotheke bekommt man Medikamente.', 'المكان الساكن يأتي مع الداتيف: in der Apotheke. أما الاتجاه فمثل Ich gehe in die Apotheke.', 'kasus', 'Apotheke'],
      ['das Medikament', 'die Medikamente', 'الدواء', 'Das Medikament hilft schnell.', 'Die Medikament hilft schnell.', 'Medikament محايد؛ نقول das Medikament.', 'genus', 'Medikament'],
      ['die Untersuchung', 'die Untersuchungen', 'الفحص الطبي', 'Die Untersuchung dauert zehn Minuten.', 'Die Untersuchung dauert zehn Minute.', 'بعد zehn نستخدم الجمع Minuten.', 'plural', 'Untersuchung'],
      ['untersuchen', 'untersucht · untersuchte · hat untersucht', 'يفحص', 'Der Arzt untersucht den Patienten.', 'Der Arzt untersucht dem Patienten.', 'Patient مفعول به مباشر هنا؛ نقول den Patienten.', 'kasus', 'untersucht'],
      ['die Krankenkasse', 'die Krankenkassen', 'صندوق التأمين الصحي', 'Die Krankenkasse bezahlt die Behandlung.', 'Die Krankenkasse bezahlen die Behandlung.', 'Krankenkasse مفرد؛ نقول bezahlt. وتصح أيضًا صيغة Die Krankenkasse zahlt für die Behandlung.', 'konjugation', 'Krankenkasse'],
      ['die Behandlung', 'die Behandlungen', 'العلاج', 'Die Behandlung war erfolgreich.', 'Die Behandlung waren erfolgreich.', 'Behandlung مفرد؛ نقول war. وصيغة ist erfolgreich gewesen صحيحة أيضًا في Perfekt.', 'konjugation', 'Behandlung'],
      ['der Patient', 'die Patienten', 'المريض', 'Der Patient wartet im Sprechzimmer.', 'Der Patient wartet in das Sprechzimmer.', 'مع الانتظار داخل الغرفة نقول im Sprechzimmer؛ أما in das فيدل على اتجاه في سياق آخر.', 'präposition', 'Patient'],
      ['die Krankenschwester', 'die Krankenschwestern', 'الممرضة', 'Die Krankenschwester kommt gleich.', 'Die Krankenschwester kommen gleich.', 'Krankenschwester مفرد؛ نقول kommt.', 'konjugation', 'Krankenschwester'],
      ['das Krankenhaus', 'die Krankenhäuser', 'المستشفى', 'Er liegt im Krankenhaus.', 'Er liegt in Krankenhaus.', 'للمكان نقول im Krankenhaus، أي in dem Krankenhaus.', 'präposition', 'Krankenhaus'],
      ['der Notarzt', 'die Notärzte', 'طبيب الطوارئ', 'Der Notarzt kommt in zehn Minuten.', 'Der Notarzt kommt in zehn Minute.', 'بعد zehn نستخدم الجمع Minuten. ويمكن أن تأتي nach zehn Minuten بحسب نقطة القياس والسياق.', 'plural', 'Notarzt'],
      ['die Verletzung', 'die Verletzungen', 'الإصابة', 'Die Verletzung ist nicht schlimm.', 'Die Verletzung ist nicht schlimme.', 'بعد ist تأتي الصفة الخبرية بلا نهاية: schlimm.', 'deklination', 'Verletzung'],
      ['wehtun', 'tut weh · tat weh · hat wehgetan', 'يؤلم', 'Mir tut der Rücken weh.', 'Mich tut der Rücken weh.', 'الشخص المتألم يأتي هنا في الداتيف: mir. واسم المفعول من tun وحده هو getan، أما مع wehtun فنكتب wehgetan كلمة واحدة.', 'kasus', 'weh'],
      ['das Fieber', '—', 'الحمى', 'Ich habe Fieber.', 'Ich bin Fieber.', 'مع Fieber نستعمل haben: Ich habe Fieber.', 'konjugation', 'Fieber'],
      ['der Husten', '—', 'السعال', 'Mein Husten ist besser geworden.', 'Mein Husten hat besser geworden.', 'werden يصوغ Perfekt هنا مع sein: ist besser geworden.', 'konjugation', 'Husten'],
      ['die Erkältung', 'die Erkältungen', 'الزكام / نزلة البرد', 'Ich habe eine Erkältung.', 'Ich bin eine Erkältung.', 'مع Erkältung نقول eine Erkältung haben.', 'lexik-kollokation', 'Erkältung'],
      ['sich erholen', 'erholt sich · erholte sich · hat sich erholt', 'يتعافى', 'Er erholt sich schnell.', 'Er erholt schnell.', 'الفعل sich erholen انعكاسي ويحتاج sich مع er.', 'kasus', 'erholt'],
      ['die Diät', 'die Diäten', 'الحمية الغذائية', 'Der Arzt empfiehlt eine Diät.', 'Der Arzt empfiehlt ein Diät.', 'Diät مؤنث؛ نقول eine Diät.', 'genus', 'Diät'],
      ['das Sprechzimmer', 'die Sprechzimmer', 'غرفة الكشف / الاستشارة', 'Bitte warten Sie im Sprechzimmer.', 'Bitte warten Sie in Sprechzimmer.', 'للمكان داخل الغرفة نقول im Sprechzimmer.', 'präposition', 'Sprechzimmer'],
      ['die Schmerztablette', 'die Schmerztabletten', 'قرص مسكّن للألم', 'Die Schmerztablette hilft sofort.', 'Die Schmerztablette helfen sofort.', 'Schmerztablette مفرد؛ نقول hilft.', 'konjugation', 'Schmerztablette'],
      ['schwach', 'schwächer · am schwächsten', 'ضعيف', 'Nach der Grippe fühlte ich mich schwach.', 'Nach der Grippe fühlte ich mich schwache.', 'بعد fühlte تأتي الصفة الخبرية هنا بلا نهاية: schwach.', 'deklination', 'schwach'],
      ['weinen', 'weint · weinte · hat geweint', 'يبكي', 'Das Kind weint, weil es sich verletzt hat.', 'Das Kind weint, weil es hat sich verletzt.', 'في جملة weil يأتي الفعل المصرف في النهاية: sich verletzt hat.', 'wortstellung', 'weint'],
      ['stören', 'stört · störte · hat gestört', 'يزعج', 'Bitte stören Sie mich nicht!', 'Bitte stören Sie mir nicht!', 'stören يأخذ مفعولًا مباشرًا هنا: mich.', 'kasus', 'stören'],
      ['die Grippe', '—', 'الإنفلونزا', 'Ich habe die Grippe und bleibe im Bett.', 'Ich habe der Grippe und bleibe im Bett.', 'Grippe مؤنث وهي مفعول به هنا: die Grippe.', 'kasus', 'Grippe'],
      ['fit', 'fitter · am fittesten', 'بصحة جيدة / نشيط', 'Nach dem Sport bin ich fit.', 'Nach dem Sport bin ich fitt.', 'الصفة fit تنتهي بحرف t واحد.', 'orthographie', 'fit'],
    ],
    tricks: [
      { trick: 'اختر إطار العرض نفسه: Mir ist schlecht، لكن Ich habe Fieber وIch bin krank', wie: 'Ein Symptom beschreibe ich so: Mir ist schlecht. Ich habe Fieber. Ich habe Husten. Ich habe starke Schmerzen. Ich habe eine Erkältung. Ich bin krank. Das kann wehtun. Mir tut der Rücken weh. Das Partizip von tun ist getan; das Partizip von wehtun ist wehgetan.', warum: 'لا توجد قاعدة واحدة لكل الأعراض؛ احفظ كل اسم أو صفة داخل جملته مع sein أو haben.', anchor: 'das Fieber' },
      { trick: 'فرّق بين المكان والاتجاه: beim Arzt · in der/in die Apotheke · im/ins Krankenhaus', wie: 'Ich bin beim Arzt. Ich gehe zum Arzt. Ich bin in der Apotheke. Ich gehe in die Apotheke. Er liegt im Krankenhaus. Wir fahren ins Krankenhaus.', warum: 'bei يصف الوجود عند الطبيب، وin مع الداتيف للمكان ومع النصب للاتجاه؛ لذلك لا نرفض الصيغة الأخرى خارج سياقها.', anchor: 'die Apotheke' },
      { trick: 'الجرعة والفترة: dreimal täglich · von acht bis zwölf · geschlossen', wie: 'Nehmen Sie die Tabletten dreimal täglich. Die Sprechstunde ist von acht bis zwölf. Die Praxis ist heute geschlossen. Auch „Die Praxis hat heute geschlossen.“ ist üblich. Closed ist Englisch; auf Deutsch sagen wir geschlossen. Die Schreibweise Massangaben ist falsch; richtig ist Maßangaben.', warum: 'dreimal täglich يذكر معدل الجرعة، وvon … bis يحدد فترة، وgeschlossen يصف أن العيادة غير مفتوحة.', anchor: 'die Tablette' }
    ],
    strictClozeAnswers: true,
    wordClozeNearMisses: {
      'die Tablette': 'Tablette',
      'die Erkältung': 'Erkältungen'
    },
    clozeItemIndex: 1,
    clozeNearMiss: 'Termine',
    extraCheck: {
      right: 'Mir ist schlecht und ich habe Fieber.',
      bad: 'Mir bin schlecht und ich bin Fieber.',
      family: 'konjugation',
      why: 'نقول Mir ist schlecht وich habe Fieber.',
      prereq: 'cap.a2-u3-l5.s04'
    }
  },

  'a2-u3-l6': {
    items: [
      ['die Bewerbung', 'die Bewerbungen', 'طلب التوظيف', 'Ich schreibe eine Bewerbung.', 'Ich schreibe ein Bewerbung.', 'Bewerbung مؤنث: eine.', 'genus', 'Bewerbung'],
      ['der Lebenslauf', 'die Lebensläufe', 'السيرة الذاتية', 'Der Lebenslauf muss kurz sein.', 'Der Lebenslauf muss kurz sein es.', 'لا ضمير.', 'wortstellung', 'Lebenslauf'],
      ['das Vorstellungsgespräch', 'die Vorstellungsgespräche', 'مقابلة العمل', 'Das Vorstellungsgespräch ist morgen.', 'Das Vorstellungsgespräch ist morgen es.', 'الجملة تنتهي.', 'wortstellung', 'Vorstellungsgespräch'],
      ['die Stelle', 'die Stellen', 'الوظيفة', 'Ich suche eine neue Stelle.', 'Ich suche ein neue Stelle.', 'Stelle مؤنث: eine.', 'genus', 'Stelle'],
      ['die Erfahrung', 'die Erfahrungen', 'الخبرة', 'Ich habe drei Jahre Erfahrung.', 'Ich habe drei Jahre Erfahrungen.', 'Erfahrung مفرد مع المدة.', 'plural', 'Erfahrung'],
      ['die Ausbildung', 'die Ausbildungen', 'التكوين المهني', 'Meine Ausbildung war in Tunis.', 'Meine Ausbildung ist in Tunis gewesen.', 'الماضي: war.', 'konjugation', 'Ausbildung'],
      ['das Gehalt', 'die Gehälter', 'الراتب', 'Das Gehalt ist gut.', 'Die Gehalt ist gut.', 'Gehalt محايد: das.', 'genus', 'Gehalt'],
      ['der Vertrag', 'die Verträge', 'العقد', 'Ich unterschreibe den Vertrag.', 'Ich unterschreibe dem Vertrag.', 'المفعول نصب: den.', 'kasus', 'Vertrag'],
      ['die Kündigung', 'die Kündigungen', 'الاستقالة', 'Er hat die Kündigung geschrieben.', 'Er hat die Kündigung geschreiben.', 'اسم المفعول: geschrieben.', 'konjugation', 'Kündigung'],
      ['die Arbeitszeit', 'die Arbeitszeiten', 'وقت العمل', 'Die Arbeitszeit ist von neun bis fünf.', 'Die Arbeitszeit ist in neun bis fünf.', 'من إلى: von … bis.', 'präposition', 'Arbeitszeit'],
      ['der Arbeitgeber', 'die Arbeitgeber', 'صاحب العمل', 'Der Arbeitgeber zahlt das Gehalt.', 'Der Arbeitgeber bezahlt das Gehalt immer.', 'zahlen تكفي.', 'lexik-kollokation', 'Arbeitgeber'],
      ['der Arbeitnehmer', 'die Arbeitnehmer', 'العامل', 'Der Arbeitnehmer hat Rechte.', 'Der Arbeitnehmer hat Recht.', 'الجمع Rechte.', 'lexik-kollokation', 'Arbeitnehmer'],
      ['die Überstunde', 'die Überstunden', 'ساعة إضافية', 'Ich mache viele Überstunden.', 'Ich mache viele Überstunde.', 'الجمع: Überstunden.', 'plural', 'Überstunden'],
      ['der Urlaub', 'die Urlaube', 'العطلة', 'Ich nehme im August Urlaub.', 'Ich nehme in August Urlaub.', 'الشهر: im.', 'präposition', 'Urlaub'],
      ['die Kollegin', 'die Kolleginnen', 'الزميلة', 'Die Kollegin hilft mir.', 'Die Kollegin hilft mich.', 'helfen داتيف: mir.', 'kasus', 'Kollegin'],
      ['der Chef', 'die Chefs', 'المدير', 'Der Chef kommt später.', 'Der Chef kommt später es.', 'لا ضمير.', 'wortstellung', 'Chef'],
      ['die Abteilung', 'die Abteilungen', 'القسم', 'Ich arbeite in der Abteilung für Verkauf.', 'Ich arbeite in die Abteilung für Verkauf.', 'المكان: in der.', 'kasus', 'Abteilung'],
      ['die Sitzung', 'die Sitzungen', 'الاجتماع', 'Die Sitzung beginnt um zehn.', 'Die Sitzung beginnt in zehn.', 'الساعة: um.', 'präposition', 'Sitzung'],
      ['die Aufgabe', 'die Aufgaben', 'المهمة', 'Meine Aufgabe ist die Beratung.', 'Meine Aufgabe ist die Beratung es.', 'لا ضمير.', 'wortstellung', 'Aufgabe'],
      ['die Beratung', 'die Beratungen', 'الاستشارة', 'Die Beratung dauert eine Stunde.', 'Die Beratung dauert eine Stunden.', 'بعد eine: Stunde مفرد.', 'plural', 'Beratung'],
      ['der Kunde', 'die Kunden', 'العميل', 'Der Kunde ruft jeden Tag an.', 'Der Kunde ruft jeden Tag.', 'المنفصل يحتاج an.', 'wortstellung', 'an'],
      ['das Praktikum', 'die Praktika', 'التدريب', 'Ich mache ein Praktikum bei einer Firma.', 'Ich mache ein Praktikum in einer Firma.', 'عند الشركة: bei.', 'präposition', 'Praktikum'],
      ['die Zeugnisse', '—', 'الشهادات', 'Ich schicke die Zeugnisse mit.', 'Ich schicke die Zeugnisse.', 'المنفصل: mit.', 'wortstellung', 'mit'],
      ['die Bewerbungsfrist', 'die Bewerbungsfristen', 'أجل الترشح', 'Die Bewerbungsfrist endet am Freitag.', 'Die Bewerbungsfrist endet in Freitag.', 'اليوم: am.', 'präposition', 'Bewerbungsfrist'],
      ['die Teilzeit', '—', 'دوام جزئي', 'Ich arbeite in Teilzeit.', 'Ich arbeite in die Teilzeit.', 'التركيب الثابت: in Teilzeit.', 'lexik-kollokation', 'Teilzeit'],
      ['die Vollzeit', '—', 'دوام كامل', 'Er sucht eine Stelle in Vollzeit.', 'Er sucht eine Stelle in die Vollzeit.', 'in Vollzeit ثابت.', 'lexik-kollokation', 'Vollzeit'],
      ['dringend', 'dringender · am dringendsten', 'عاجل', 'Das ist eine dringende Aufgabe.', 'Das ist eine dringend Aufgabe.', 'الصفة قبل الاسم: dringende.', 'deklination', 'dringende'],
      ['die Datei', 'die Dateien', 'الملف', 'Bitte schicken Sie mir die Datei.', 'Bitte schicken Sie mir das Datei.', 'Datei مؤنث: die.', 'genus', 'Datei'],
      ['die Werkstatt', 'die Werkstätten', 'الورشة', 'Das Auto ist in der Werkstatt.', 'Das Auto ist in die Werkstatt.', 'مكان ساكن: in der Werkstatt.', 'präposition', 'Werkstatt'],
      ['online', '—', 'على الإنترنت', 'Ich bin den ganzen Tag online.', 'Ich bin den ganzen Tag im Online.', 'online صفة بلا أداة.', 'lexik-kollokation', 'online'],
      ['das Passwort', 'die Passwörter', 'كلمة المرور', 'Ich habe mein Passwort vergessen.', 'Ich habe meinen Passwort vergessen.', 'محايد: mein Passwort.', 'genus', 'Passwort'],
    ],
    tricks: [
      { trick: 'في العمل: bei einer Firma · in der Abteilung · in Teilzeit', wie: 'Ich arbeite bei einer Firma in der Abteilung Verkauf. Ich arbeite in Teilzeit.', warum: 'العربية تقول «أعمل في شركة» بـ«في» واحدة، فالألمانية تفرّق بين الجهة والقسم ونمط الدوام.', anchor: 'die Abteilung' },
      { trick: 'von … bis للوقت اليومي: von neun bis fünf', wie: 'Die Arbeitszeit ist von neun bis fünf. Die Sprechstunde ist von acht bis zwölf.', warum: 'صيغة ثابتة تُستعمل في العمل والطب معًا، والعربية تقول «من التاسعة إلى الخامسة» بلا حرف ثابت.', anchor: 'die Arbeitszeit' },
      { trick: 'الوثائق الرسمية: Bewerbung · Lebenslauf · Zeugnisse', wie: 'Ich schreibe eine Bewerbung und schicke den Lebenslauf mit.', warum: 'ملف التوظيف الألماني له أسماء ثابتة، ومعرفتها نصف الطريق إلى المقابلة.', anchor: 'die Bewerbung' }
    ]
  }

};

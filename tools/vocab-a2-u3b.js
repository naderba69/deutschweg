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
      ['die Bewerbung', 'die Bewerbungen', 'طلب التوظيف', 'Ich schreibe eine Bewerbung und schicke meinen Lebenslauf mit.', 'Ich schreibe ein Bewerbung und schicke meinen Lebenslauf mit.', 'Bewerbung مؤنث؛ نقول eine Bewerbung.', 'genus', 'Bewerbung'],
      ['der Lebenslauf', 'die Lebensläufe', 'السيرة الذاتية', 'Ich schicke meinen Lebenslauf mit.', 'Ich schicke mein Lebenslauf mit.', 'Lebenslauf مذكر وهو مفعول به هنا؛ نقول meinen Lebenslauf.', 'kasus', 'Lebenslauf'],
      ['das Vorstellungsgespräch', 'die Vorstellungsgespräche', 'مقابلة العمل', 'Das Vorstellungsgespräch ist morgen um zehn Uhr.', 'Das Vorstellungsgespräch ist morgen um zehn Uhren.', 'بعد العدد الدال على الساعة نستخدم المفرد Uhr.', 'plural', 'Vorstellungsgespräch'],
      ['die Stelle', 'die Stellen', 'الوظيفة الشاغرة', 'Ich suche eine Stelle in Teilzeit.', 'Ich suche einen Stelle in Teilzeit.', 'Stelle مؤنث؛ نقول eine Stelle.', 'genus', 'Stelle'],
      ['die Erfahrung', 'die Erfahrungen', 'الخبرة', 'Ich habe drei Jahre Erfahrung im Verkauf.', 'Ich habe drei Jahr Erfahrung im Verkauf.', 'بعد drei نستخدم الجمع Jahre؛ وتأتي Erfahrung غالبًا مفردة عند ذكر مدة الخبرة.', 'plural', 'Erfahrung'],
      ['die Ausbildung', 'die Ausbildungen', 'التكوين المهني', 'Meine Ausbildung dauert drei Jahre.', 'Meine Ausbildung dauern drei Jahre.', 'Ausbildung مفرد؛ نقول dauert. وتصح صيغة Meine Ausbildung ist in Tunis gewesen في سياق الماضي.', 'konjugation', 'Ausbildung'],
      ['das Gehalt', 'die Gehälter', 'الراتب', 'Das Gehalt ist gut.', 'Die Gehalt ist gut.', 'Gehalt محايد؛ نقول das Gehalt.', 'genus', 'Gehalt'],
      ['der Vertrag', 'die Verträge', 'العقد', 'Ich unterschreibe den Vertrag.', 'Ich unterschreibe dem Vertrag.', 'unterschreiben يأخذ مفعولًا مباشرًا هنا: den Vertrag.', 'kasus', 'Vertrag'],
      ['die Kündigung', 'die Kündigungen', 'إشعار إنهاء عقد العمل / الاستقالة', 'Sie reicht ihre Kündigung ein.', 'Sie einreicht ihre Kündigung.', 'في الجملة الرئيسية ينفصل einreichen: reicht … ein. والصيغة geschreiben خطأ إملائي؛ الصحيح geschrieben.', 'wortstellung', 'Kündigung'],
      ['die Arbeitszeit', 'die Arbeitszeiten', 'ساعات العمل / وقت العمل', 'Meine Arbeitszeit ist von neun bis fünf.', 'Meine Arbeitszeit ist in neun bis fünf.', 'للفترة ذات البداية والنهاية نقول von neun bis fünf.', 'präposition', 'Arbeitszeit'],
      ['der Arbeitgeber', 'die Arbeitgeber', 'صاحب العمل', 'Mein Arbeitgeber zahlt das Gehalt pünktlich.', 'Mein Arbeitgeber zahlen das Gehalt pünktlich.', 'Arbeitgeber مفرد؛ نقول zahlt. ويصح أيضًا bezahlt das Gehalt.', 'konjugation', 'Arbeitgeber'],
      ['der Arbeitnehmer', 'die Arbeitnehmer', 'الموظف / العامل', 'Der Arbeitnehmer hat Rechte.', 'Der Arbeitnehmer haben Rechte.', 'Arbeitnehmer مفرد؛ نقول hat. أما Recht haben فتعني أن يكون المرء محقًا.', 'konjugation', 'Arbeitnehmer'],
      ['die Überstunde', 'die Überstunden', 'ساعة عمل إضافية', 'Ich mache heute zwei Überstunden.', 'Ich mache heute zwei Überstunde.', 'بعد zwei نستخدم الجمع Überstunden.', 'plural', 'Überstunden'],
      ['der Urlaub', 'die Urlaube', 'الإجازة', 'Ich nehme im August Urlaub.', 'Ich nehme in August Urlaub.', 'مع اسم الشهر نقول im August.', 'präposition', 'Urlaub'],
      ['die Kollegin', 'die Kolleginnen', 'الزميلة', 'Die Kollegin hilft mir.', 'Die Kollegin hilft mich.', 'helfen يأخذ الداتيف: mir.', 'kasus', 'Kollegin'],
      ['der Chef', 'die Chefs', 'المدير / الرئيس في العمل', 'Mein Chef kommt später.', 'Meine Chef kommt später.', 'Chef مذكر؛ نقول mein Chef. وجملة Der Chef kocht صحيحة إذا كان المدير يطبخ فعلًا.', 'genus', 'Chef'],
      ['die Abteilung', 'die Abteilungen', 'القسم', 'Ich arbeite bei einer Firma in der Abteilung Verkauf.', 'Ich arbeite bei einer Firma in die Abteilung Verkauf.', 'للمكان نقول in der Abteilung؛ أما in die Abteilung فيدل على اتجاه مع فعل مناسب.', 'kasus', 'Abteilung'],
      ['die Sitzung', 'die Sitzungen', 'الاجتماع', 'Die Sitzung beginnt um zehn Uhr.', 'Die Sitzung beginnt an zehn Uhr.', 'مع وقت الساعة المحدد نقول um zehn Uhr.', 'präposition', 'Sitzung'],
      ['die Aufgabe', 'die Aufgaben', 'المهمة', 'Meine Aufgabe ist die Beratung der Kunden.', 'Meine Aufgabe sind die Beratung der Kunden.', 'Aufgabe مفرد؛ نقول ist.', 'konjugation', 'Aufgabe'],
      ['die Beratung', 'die Beratungen', 'الاستشارة', 'Die Beratung dauert eine Stunde.', 'Die Beratung dauert eine Stunden.', 'بعد eine نستخدم المفرد Stunde.', 'plural', 'Beratung'],
      ['der Kunde', 'die Kunden', 'العميل', 'Der Kunde ruft jeden Tag an.', 'Der Kunde anruft jeden Tag.', 'في الجملة الرئيسية ينفصل anrufen: ruft … an.', 'wortstellung', 'an'],
      ['das Praktikum', 'die Praktika', 'التدريب العملي', 'Ich mache ein Praktikum bei einer Firma.', 'Ich mache ein Praktikum bei eine Firma.', 'bei يأخذ الداتيف: bei einer Firma. وتصح أيضًا in einer Firma بحسب زاوية الوصف.', 'kasus', 'Praktikum'],
      ['das Zeugnis', 'die Zeugnisse', 'الشهادة / كشف الدرجات', 'Ich schicke meine Zeugnisse mit.', 'Ich schicke meine Zeugnissen mit.', 'Zeugnisse جمع في النصب هنا بلا n إضافية.', 'plural', 'Zeugnisse'],
      ['die Bewerbungsfrist', 'die Bewerbungsfristen', 'الموعد النهائي للتقديم', 'Die Bewerbungsfrist endet am Freitag.', 'Die Bewerbungsfrist endet in Freitag.', 'مع يوم الأسبوع نقول am Freitag.', 'präposition', 'Bewerbungsfrist'],
      ['die Teilzeit', '—', 'الدوام الجزئي', 'Ich suche eine Stelle in Teilzeit.', 'Ich suche eine Stelle in eine Teilzeit.', 'نقول in Teilzeit بلا أداة.', 'lexik-kollokation', 'Teilzeit'],
      ['die Vollzeit', '—', 'الدوام الكامل', 'Er sucht eine Stelle in Vollzeit.', 'Er sucht eine Stelle in eine Vollzeit.', 'نقول in Vollzeit بلا أداة.', 'lexik-kollokation', 'Vollzeit'],
      ['dringend', 'dringender · am dringendsten', 'عاجل', 'Das ist eine dringende Aufgabe.', 'Das ist eine dringend Aufgabe.', 'قبل الاسم المؤنث مع eine نحتاج النهاية: dringende.', 'deklination', 'dringende'],
      ['die Datei', 'die Dateien', 'الملف الرقمي', 'Bitte schicken Sie mir die Datei.', 'Bitte schicken Sie mir das Datei.', 'Datei مؤنث؛ نقول die Datei.', 'genus', 'Datei'],
      ['die Werkstatt', 'die Werkstätten', 'الورشة', 'Das Auto ist in der Werkstatt.', 'Das Auto ist in die Werkstatt.', 'مع الوجود في المكان نقول in der Werkstatt؛ وللاتجاه يمكن أن نقول Ich fahre in die Werkstatt.', 'präposition', 'Werkstatt'],
      ['online', '—', 'متصل بالإنترنت / على الإنترنت', 'Ich bin den ganzen Tag online.', 'Ich bin den ganzen Tag im Online.', 'online تأتي هنا بلا أداة.', 'lexik-kollokation', 'online'],
      ['das Passwort', 'die Passwörter', 'كلمة المرور', 'Ich habe mein Passwort vergessen.', 'Ich habe meinen Passwort vergessen.', 'Passwort محايد؛ نقول mein Passwort.', 'genus', 'Passwort'],
    ],
    tricks: [
      { trick: 'الوظيفة ومكان العمل: Stelle in Teilzeit · bei einer Firma · in der Abteilung', wie: 'Ich suche eine Stelle in Teilzeit. Auch „Ich suche einen Job in Teilzeit.“ und „Ich arbeite halbtags.“ sind richtig. Ich arbeite bei einer Firma in der Abteilung Verkauf. Auch „Ich arbeite in einer Firma.“ ist richtig. Ich wechsle morgen in die Abteilung Verkauf. In neutralem Deutsch sagen wir: „Die Arbeit macht Spaß.“ Das Substantiv Fun kommt umgangssprachlich vor, ist hier aber nicht das neutrale Ziel.', warum: 'Stelle وJob كلمتان صحيحتان للوظيفة بحسب السياق؛ bei einer Firma يبرز جهة العمل، وin einer Firma صيغة صحيحة أيضًا؛ مع arbeite نصف المكان بالداتيف in der Abteilung، ومع حركة الانتقال يمكن أن نقول in die Abteilung.', anchor: 'die Abteilung' },
      { trick: 'نقطة زمنية أم فترة: um zehn Uhr · von neun bis fünf', wie: 'Das Vorstellungsgespräch ist morgen um zehn Uhr. Meine Arbeitszeit ist von neun bis fünf. In zehn Minuten beginnt das Gespräch.', warum: 'um يحدد ساعة، وvon … bis يحدد فترة؛ أما in zehn Minuten فتعني بعد عشر دقائق ولا ينبغي رفضها خارج سياق الساعة.', anchor: 'die Arbeitszeit' },
      { trick: 'ملف التقديم: Bewerbung · Lebenslauf · Zeugnisse', wie: 'Ich schreibe eine Bewerbung und schicke meinen Lebenslauf mit. Ich schicke auch meine Zeugnisse mit. Die Schreibweise geschreiben ist falsch; richtig ist geschrieben.', warum: 'Bewerbung هي رسالة أو طلب التوظيف، وLebenslauf مذكر في النصب: meinen Lebenslauf، وZeugnisse جمع: meine Zeugnisse.', anchor: 'die Bewerbung' }
    ],
    strictClozeAnswers: true,
    wordClozeNearMisses: {
      'die Ausbildung': 'Ausbildungen',
      'das Praktikum': 'Praktika'
    },
    clozeItemIndex: 9,
    clozeNearMiss: 'Arbeitszeiten',
    extraCheck: {
      right: 'Ich suche eine Stelle in Teilzeit.',
      bad: 'Ich suche einen Stelle in Teilzeit.',
      family: 'genus',
      why: 'Stelle مؤنث؛ نقول eine Stelle in Teilzeit.',
      prereq: 'cap.a2-u3-l6.s18'
    }
  }

};

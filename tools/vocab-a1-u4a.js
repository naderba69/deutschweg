/* Deutschweg — P3.2 lexical layer, A1 unit 4 (part a): a1-u4-l1 … a1-u4-l3. */

module.exports = {

  'a1-u4-l1': {
    items: [
      ['die Wohnung', 'die Wohnungen', 'الشقة', 'Unsere Wohnung ist klein.', 'Unser Wohnung ist klein.', 'Wohnung مؤنث: unsere.', 'deklination'],
      ['das Schlafzimmer', 'die Schlafzimmer', 'غرفة النوم', 'Das Schlafzimmer ist ruhig.', 'Der Schlafzimmer ist ruhig.', 'Zimmer محايد، فالمركّب محايد.', 'genus'],
      ['das Wohnzimmer', 'die Wohnzimmer', 'غرفة الجلوس', 'Das Wohnzimmer ist groß.', 'Der Wohnzimmer ist groß.', 'Zimmer محايد: das.', 'genus'],
      ['das Erdgeschoss', 'die Erdgeschosse', 'الطابق الأرضي', 'Wir wohnen im Erdgeschoss.', 'Wir wohnen in Erdgeschoss.', 'in + dem = im.', 'präposition'],
      ['die Miete', 'die Mieten', 'الإيجار', 'Die Miete ist hoch.', 'Der Miete ist hoch.', 'Miete مؤنث: die.', 'genus'],
      ['der Vermieter', 'die Vermieter', 'المالك المؤجّر', 'Der Vermieter kommt heute.', 'Die Vermieter kommt heute.', 'Vermieter مذكر: der.', 'genus'],
      ['die Möbel', '—', 'الأثاث', 'Die Möbel sind neu.', 'Die Möbel ist neu.', 'Möbel جمع، والفعل جمع: sind.', 'plural'],
      ['der Teppich', 'die Teppiche', 'السجادة', 'Der Teppich ist weich.', 'Die Teppich ist weich.', 'Teppich مذكر: der.', 'genus'],
      ['die Heizung', 'die Heizungen', 'التدفئة', 'Die Heizung ist an.', 'Der Heizung ist an.', 'Heizung مؤنث: die.', 'genus'],
      ['gemütlich', '—', 'مريح · دافئ الجو', 'Die Wohnung ist gemütlich.', 'Die Wohnung ist gemütlich sehr.', 'sehr قبل الصفة.', 'wortstellung'],
      ['hell', '—', 'مضيء', 'Das Zimmer ist hell.', 'Das Zimmer ist helle.', 'بعد sein تأتي الصفة بلا نهاية.', 'deklination'],
      ['dunkel', '—', 'معتم', 'Der Keller ist dunkel.', 'Der Keller ist dunkle.', 'الصفة بعد sein بلا نهاية.', 'deklination'],
      ['ruhig', '—', 'هادئ', 'Die Straße ist ruhig.', 'Die Straße ist ruhige.', 'ruhig بلا -e بعد sein.', 'deklination'],
      ['laut', '—', 'صاخب', 'Die Nachbarn sind laut.', 'Die Nachbarn sind laute.', 'الجمع مع sein: laut بلا نهاية.', 'deklination'],
      ['neu', '—', 'جديد', 'Die Küche ist neu.', 'Die Küche ist neue.', 'الصفة بعد sein بلا نهاية.', 'deklination'],
      ['alt', '—', 'قديم', 'Das Haus ist alt.', 'Das Haus ist alte.', 'alt بلا -e بعد sein.', 'deklination'],
      ['der Keller', 'die Keller', 'القبو', 'Der Keller ist trocken.', 'Die Keller ist trocken.', 'Keller مذكر: der.', 'genus'],
      ['der Aufzug', 'die Aufzüge', 'المصعد', 'Der Aufzug ist kaputt.', 'Die Aufzug ist kaputt.', 'Aufzug مذكر: der.', 'genus'],
      ['die Treppe', 'die Treppen', 'السلّم', 'Die Treppe ist steil.', 'Der Treppe ist steil.', 'Treppe مؤنث: die.', 'genus'],
      ['der Nachbar', 'die Nachbarn', 'الجار', 'Mein Nachbar ist freundlich.', 'Meine Nachbar ist freundlich.', 'Nachbar مذكر: mein.', 'genus'],
      ['umziehen', 'zieht um · zog um', 'ينتقل سكنًا', 'Wir ziehen im Mai um.', 'Wir umziehen im Mai.', 'الفصل: ziehen … um.', 'wortstellung', 'um'],
      ['mieten', 'mietet · mietete', 'يستأجر', 'Wir mieten eine Wohnung.', 'Wir mieten für eine Wohnung.', 'mieten تأخذ مفعولًا بلا حرف جر.', 'präposition'],
      ['die Adresse', 'die Adressen', 'العنوان', 'Meine Adresse ist neu.', 'Mein Adresse ist neu.', 'Adresse مؤنث: meine.', 'deklination'],
      ['der Umzug', 'die Umzüge', 'الانتقال', 'Der Umzug war stressig.', 'Die Umzug war stressig.', 'Zug مذكر، فالمركّب مذكر.', 'genus'],
      ['die Decke', 'die Decken', 'السقف', 'Die Decke ist weiß.', 'Der Decke ist weiß.', 'Decke مؤنث: die.', 'genus'],
      ['der Boden', 'die Böden', 'الأرضية', 'Der Boden ist aus Holz.', 'Der Boden ist von Holz.', 'المادة تأخذ aus: aus Holz.', 'präposition'],
      ['das Holz', 'die Hölzer', 'الخشب', 'Das Holz ist warm.', 'Der Holz ist warm.', 'Holz محايد: das.', 'genus'],
      ['der Quadratmeter', 'die Quadratmeter', 'المتر المربع', 'Die Wohnung hat sechzig Quadratmeter.', 'Die Wohnung hat sechzig Quadratmeters.', 'الأجنبي في الوحدات بلا s.', 'plural']
    ],
    tricks: [
      { trick: 'المركّب يورّث جنسه من آخره', wie: 'das Schlafzimmer · das Wohnzimmer: Zimmer محايد دائمًا.', warum: 'الجزء الأخير هو الذي يحكم الجنس، وقراءة المركّب من آخره تكفي.', anchor: 'Das Schlafzimmer ist ruhig.' },
      { trick: 'الصفة بعد sein بلا نهاية', wie: 'Das Zimmer ist hell. — لا helle.', warum: 'العربية لا تُصرّف الصفة، فإضافة -e بعد sein خطأ لا يسمعه المتعلم.', anchor: 'Das Zimmer ist hell.' },
      { trick: 'الوحدات لا تُجمع بـ s', wie: 'sechzig Quadratmeter · zehn Euro.', warum: 'الوحدات في العقود والأسعار ثابتة، وزيادة s تُسمع خطأ في كل عقد سكن.', anchor: 'Die Wohnung hat sechzig Quadratmeter.' }
    ]
  },

  'a1-u4-l2': {
    items: [
      ['der Kopf', 'die Köpfe', 'الرأس', 'Mir tut der Kopf weh.', 'Ich tut der Kopf weh.', 'المتألم في الداتيف: Mir.', 'kasus'],
      ['der Bauch', 'die Bäuche', 'البطن', 'Mir tut der Bauch weh.', 'Mir tut der Bauch weht.', 'wehtun: الفعل weh لا weht.', 'konjugation'],
      ['der Hals', 'die Hälse', 'الرقبة', 'Mein Hals tut weh.', 'Ich habe Hals Schmerzen.', 'المركّب كلمة واحدة: Halsschmerzen.', 'orthographie'],
      ['der Rücken', 'die Rücken', 'الظهر', 'Mein Rücken tut weh.', 'Meine Rücken tut weh.', 'Rücken مذكر: mein.', 'genus'],
      ['der Arm', 'die Arme', 'الذراع', 'Mein Arm tut weh.', 'Meine Arm tut weh.', 'Arm مذكر: mein.', 'genus'],
      ['das Bein', 'die Beine', 'الساق', 'Mein Bein tut weh.', 'Meine Bein tut weh.', 'Bein محايد: mein.', 'genus'],
      ['der Magen', 'die Mägen', 'المعدة', 'Mein Magen tut weh.', 'Meine Magen tut weh.', 'Magen مذكر: mein.', 'genus'],
      ['die Hand', 'die Hände', 'اليد', 'Meine Hand tut weh.', 'Mein Hand tut weh.', 'Hand مؤنث: meine.', 'deklination'],
      ['der Finger', 'die Finger', 'الإصبع', 'Mein Finger tut weh.', 'Meine Finger tut weh.', 'المفرد مذكر: mein Finger.', 'genus'],
      ['die Nase', 'die Nasen', 'الأنف', 'Meine Nase läuft.', 'Mein Nase läuft.', 'Nase مؤنث: meine.', 'deklination'],
      ['wehtun', 'tut weh · tat weh', 'يؤلم', 'Wo tut es weh?', 'Wo tut es wehtun?', 'المصدر wehtun، وفي الجملة tut … weh.', 'konjugation', 'weh'],
      ['krank', '—', 'مريض', 'Ich bin krank.', 'Ich habe krank.', 'الحال مع sein لا مع haben.', 'konjugation'],
      ['gesund', '—', 'معافى', 'Ich bin wieder gesund.', 'Ich habe gesund.', 'gesund صفة حال مع sein.', 'konjugation'],
      ['die Erkältung', 'die Erkältungen', 'الزكام', 'Ich habe eine Erkältung.', 'Ich habe ein Erkältung.', 'Erkältung مؤنث: eine.', 'genus'],
      ['der Husten', '—', 'الكحّة', 'Ich habe Husten.', 'Ich habe eine Husten.', 'Husten مذكر بلا أداة في هذا التركيب.', 'genus'],
      ['das Fieber', '—', 'الحمّى', 'Ich habe Fieber.', 'Ich habe eine Fieber.', 'Fieber محايد وبلا أداة هنا.', 'genus'],
      ['die Schmerzen', '—', 'الآلام', 'Ich habe Schmerzen.', 'Ich habe Schmerze.', 'الجمع Schmerzen بلا e أخيرة.', 'plural'],
      ['die Tablette', 'die Tabletten', 'الحبّة', 'Nehmen Sie zwei Tabletten.', 'Nehmen Sie zwei Tablette.', 'بعد العدد جمع: Tabletten.', 'plural', 'Tabletten'],
      ['das Rezept', 'die Rezepte', 'الوصفة الطبية', 'Der Arzt schreibt ein Rezept.', 'Der Arzt schreibt einen Rezept.', 'Rezept محايد: ein.', 'kasus'],
      ['die Praxis', 'die Praxen', 'العيادة', 'Die Praxis ist am Montag zu.', 'Der Praxis ist am Montag zu.', 'Praxis مؤنث: die.', 'genus'],
      ['das Pflaster', 'die Pflaster', 'اللاصقة الطبية', 'Das Pflaster klebt gut.', 'Der Pflaster klebt gut.', 'Pflaster محايد: das.', 'genus'],
      ['die Salbe', 'die Salben', 'المرهم', 'Die Salbe hilft schnell.', 'Der Salbe hilft schnell.', 'Salbe مؤنث: die.', 'genus'],
      ['messen', 'misst · maß', 'يقيس', 'Der Arzt misst den Blutdruck.', 'Der Arzt messt den Blutdruck.', 'مessen ← er misst.', 'konjugation', 'misst'],
      ['untersuchen', 'untersucht · untersuchte', 'يفحص', 'Der Arzt untersucht mich.', 'Der Arzt untersucht ich.', 'المفعول ضمير نصب: mich.', 'kasus', 'untersucht'],
      ['sich fühlen', 'fühlt sich · fühlte sich', 'يشعر', 'Ich fühle mich müde.', 'Ich fühle mir müde.', 'fühlen يحتاج mich.', 'kasus', 'fühle'],
      ['schlimm', '—', 'سيّئ · خطير', 'Das ist nicht schlimm.', 'Das ist nicht schlimme.', 'الصفة بعد nicht بلا نهاية.', 'deklination'],
      ['besser', '—', 'أفضل', 'Mir geht es besser.', 'Mir geht besser.', 'es لا تُحذف: es geht mir.', 'kasus'],
      ['hoffentlich', '—', 'عسى أن', 'Hoffentlich geht es dir besser.', 'Hoffentlich dir geht es besser.', 'الفعل ثانٍ بعد hoffentlich.', 'wortstellung']
    ],
    tricks: [
      { trick: 'الألم يُقال بـ wehtun مع mir', wie: 'Mir tut der Kopf weh.', warum: 'العربية تقول «رأسي يؤلمني»، والألمانية تقدّم المتألم في الداتيف: mir.', anchor: 'Mir tut der Kopf weh.' },
      { trick: 'الجسم من فوق إلى تحت', wie: 'Kopf · Hals · Rücken · Bauch · Arm · Bein.', warum: 'قائمة مرتّبة تُستدعى في العيادة بالترتيب نفسه بلا بحث.', anchor: 'Der Hals tut weh.' },
      { trick: 'في العيادة: Was fehlt Ihnen? ثم Mir tut … weh', wie: 'السؤال بـ Ihnen، والجواب يبدأ بـ Mir.', warum: 'الزوج محفوظ كما هو، وتغيير أحد طرفيه يجعل الجواب غير ألماني.', anchor: 'Was fehlt Ihnen?' }
    ]
  },

  'a1-u4-l3': {
    items: [
      ['geradeaus', '—', 'إلى الأمام مباشرة', 'Gehen Sie geradeaus.', 'Gehen Sie gerade aus.', 'geradeaus كلمة واحدة.', 'orthographie'],
      ['links', '—', 'يسارًا', 'Dann links.', 'Gehen Sie in links.', 'links ظرف بلا حرف جر.', 'präposition'],
      ['rechts', '—', 'يمينًا', 'Die Bank ist rechts.', 'Die Bank ist in rechts.', 'rechts بلا حرف جر.', 'präposition'],
      ['die Ampel', 'die Ampeln', 'إشارة المرور', 'Bis zur Ampel.', 'Bis die Ampel.', 'bis zu + داتيف: zur Ampel.', 'kasus'],
      ['die Kreuzung', 'die Kreuzungen', 'التقاطع', 'An der Kreuzung links.', 'An die Kreuzung links.', 'الموقع يأخذ الداتيف: an der.', 'kasus'],
      ['die Kirche', 'die Kirchen', 'الكنيسة', 'Die Kirche ist im Westen.', 'Die Kirche ist in Westen.', 'الجهة تأخذ im.', 'präposition'],
      ['das Rathaus', 'die Rathäuser', 'البلدية', 'Das Rathaus liegt im Norden der Stadt.', 'Das Rathaus liegt in Norden der Stadt.', 'الجهة تأخذ im: im Norden.', 'präposition'],
      ['der Marktplatz', 'die Marktplätze', 'ساحة السوق', 'Der Marktplatz ist groß.', 'Die Marktplatz ist groß.', 'Platz مذكر، فالمركّب مذكر.', 'genus'],
      ['das Museum', 'die Museen', 'المتحف', 'Das Museum ist im Süden der Stadt.', 'Das Museum ist in Süden der Stadt.', 'الجهة تأخذ im.', 'präposition'],
      ['der Park', 'die Parks', 'الحديقة العامة', 'Der Park liegt im Osten der Stadt.', 'Der Park liegt in Osten der Stadt.', 'الجهة تأخذ im.', 'präposition'],
      ['die Brücke', 'die Brücken', 'الجسر', 'Die Brücke ist alt.', 'Der Brücke ist alt.', 'Brücke مؤنث: die.', 'genus'],
      ['das Café', 'die Cafés', 'المقهى', 'Das Café ist neu.', 'Der Café ist neu.', 'Café محايد: das.', 'genus'],
      ['gegenüber', '—', 'في الجهة المقابلة', 'Die Post ist gegenüber.', 'Die Post ist gegen.', 'gegenüber ظرف بلا حرف جر.', 'präposition'],
      ['in der Nähe', '—', 'بالقرب', 'Die Bank ist in der Nähe.', 'Die Bank ist in die Nähe.', 'in der Nähe تعبير ثابت بالداتيف.', 'kasus', 'der'],
      ['weit', '—', 'بعيد', 'Der Bahnhof ist zwei Kilometer weit.', 'Der Bahnhof ist zwei Kilometer weite.', 'weit بعد المسافة بلا نهاية.', 'deklination'],
      ['nah', '—', 'قريب', 'Die Apotheke ist nah.', 'Die Apotheke ist nah von hier.', 'nah ظرف بلا von.', 'präposition'],
      ['abbiegen', 'biegt ab · bog ab', 'ينعطف', 'Biegen Sie rechts ab.', 'Biegen Sie ab rechts.', 'ab في آخر الجملة.', 'wortstellung', 'ab'],
      ['überqueren', 'überquert · überquerte', 'يعبر', 'Überqueren Sie die Straße.', 'Überqueren Sie der Straße.', 'überqueren تأخذ النصب: die Straße.', 'kasus'],
      ['die Richtung', 'die Richtungen', 'الاتجاه', 'Welche Richtung ist richtig?', 'Welcher Richtung ist richtig?', 'Richtung مؤنث: welche.', 'genus'],
      ['die erste Straße', '—', 'الشارع الأول', 'Nehmen Sie die erste Straße.', 'Nehmen Sie die erst Straße.', 'الصفة بعد die تأخذ -e: erste.', 'deklination', 'erste'],
      ['die zweite Straße', '—', 'الشارع الثاني', 'Dann die zweite Straße links.', 'Dann die zwei Straße links.', 'الترتيب zweite لا zwei.', 'deklination', 'zweite'],
      ['die Seite', 'die Seiten', 'الجهة', 'Auf der linken Seite.', 'Auf der linke Seite.', 'الصفة تأخذ -en في الداتيف مع der.', 'deklination'],
      ['laufen', 'läuft · lief', 'يمشي', 'Laufen Sie bis zur Ampel.', 'Laufen Sie bis die Ampel.', 'bis zu + داتيف.', 'kasus', 'Laufen'],
      ['der Weg', 'die Wege', 'الطريق', 'Der Weg ist kurz.', 'Die Weg ist kurz.', 'Weg مذكر: der.', 'genus'],
      ['das Zentrum', 'die Zentren', 'المركز', 'Das Zentrum ist dort.', 'Der Zentrum ist dort.', 'Zentrum محايد: das.', 'genus'],
      ['das Schild', 'die Schilder', 'اللافتة', 'Das Schild zeigt nach rechts.', 'Der Schild zeigt nach rechts.', 'Schild محايد: das.', 'genus'],
      ['die Nummer', 'die Nummern', 'الرقم', 'Welche Nummer hat der Bus?', 'Welcher Nummer hat der Bus?', 'Nummer مؤنث: welche.', 'genus'],
      ['der Eingang', 'die Eingänge', 'المدخل', 'Der Eingang ist dort.', 'Die Eingang ist dort.', 'Gang مذكر، فالمركّب مذكر.', 'genus']
    ],
    tricks: [
      { trick: 'links وrechts جواب كامل وحدهما', wie: 'Dann links. · Die Bank ist rechts.', warum: 'الكلمة وحدها تكفي، والبحث عن حرف جر قبلها هو الخطأ الأول.', anchor: 'Dann links.' },
      { trick: 'الوصف يبدأ بالفعل في صيغة الاحترام', wie: 'Gehen Sie geradeaus. · Biegen Sie rechts ab.', warum: 'الفعل أولًا في هذه الصيغة، والعربية تقدّم «أنت» فيختل الترتيب.', anchor: 'Gehen Sie geradeaus.' },
      { trick: 'حتى المرجع: bis zur Ampel', wie: 'Bis zur Ampel. — لا bis die Ampel.', warum: 'bis + zu + داتيف، وصيغتها المدمجة zur هي التي تُنسى.', anchor: 'Bis zur Ampel.' }
    ]
  }

};

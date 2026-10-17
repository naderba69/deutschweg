/* Deutschweg — P3.5 lexical layer, A2 unit 2 (part a): a2-u2-l1 … a2-u2-l3.
   Komparativ, Superlativ, Adjektivendungen im Nominativ. 26 items per lesson. */

module.exports = {

  'a2-u2-l1': {
    items: [
      ['schneller', '—', 'أسرع', 'Der Zug ist schneller als der Bus.', 'Der Zug ist schneller wie der Bus.', 'عند اختلاف الدرجتين نقول schneller als لا schneller wie.', 'deklination', 'schneller'],
      ['billiger', '—', 'أرخص', 'Das Café am Bahnhof ist billiger als das Restaurant.', 'Das Café am Bahnhof ist billiger wie das Restaurant.', 'صيغة المقارنة مع اختلاف الدرجتين تتبعها als.', 'deklination', 'billiger'],
      ['größer', '—', 'أكبر/أطول', 'Dein Zimmer ist größer als meins.', 'Dein Zimmer ist größer wie meins.', 'نقول größer als عند اختلاف الحجم.', 'deklination', 'größer'],
      ['älter', '—', 'أكبر سنًا/أقدم', 'Meine Schwester ist älter als ich.', 'Meine Schwester ist älter wie ich.', 'نقول älter als عند اختلاف العمر.', 'deklination', 'älter'],
      ['jünger', '—', 'أصغر سنًا/أحدث', 'Er ist jünger als seine Frau.', 'Er ist jünger wie seine Frau.', 'نقول jünger als عند اختلاف العمر.', 'deklination', 'jünger'],
      ['länger', '—', 'أطول مدةً أو طولًا', 'Die Fahrt dauert länger als geplant.', 'Die Fahrt dauert lange als geplant.', 'قبل als نحتاج هنا صيغة المقارنة länger، لا الصفة الأصلية lange.', 'deklination', 'länger'],
      ['teurer', '—', 'أغلى', 'Die neue Wohnung ist teurer als die alte.', 'Die neue Wohnung ist teurer wie die alte.', 'نقول teurer als عند اختلاف السعر.', 'deklination', 'teurer'],
      ['besser', '—', 'أفضل', 'Dieses Brot schmeckt besser als das andere.', 'Dieses Brot schmeckt guter als das andere.', 'صيغة المقارنة من gut هي besser.', 'deklination', 'besser'],
      ['mehr', '—', 'أكثر', 'Heute habe ich mehr Zeit als gestern.', 'Heute habe ich vieler Zeit als gestern.', 'صيغة المقارنة الدالة على الزيادة هي mehr، لا vieler.', 'deklination', 'mehr'],
      ['weniger', '—', 'أقل', 'Heute habe ich weniger Arbeit als gestern.', 'Heute habe ich wenige Arbeit als gestern.', 'للمقارنة في الكمية نقول weniger Arbeit.', 'deklination', 'weniger'],
      ['lieber', '—', 'بشكل أكثر تفضيلًا/أفضّل', 'Ich trinke lieber Tee als Kaffee.', 'Ich trinke gerner Tee als Kaffee.', 'صيغة المفاضلة من gern هي lieber.', 'deklination', 'lieber'],
      ['die Größe', 'die Größen', 'المقاس/الحجم', 'Das Hemd gibt es auch in einer größeren Größe.', 'Das Hemd gibt es auch in eine größeren Größe.', 'للدلالة على المقاس المتاح نقول in einer größeren Größe بالداتيف.', 'kasus', 'Größe'],
      ['der Vorteil', 'die Vorteile', 'الميزة', 'Dieses Hotel hat mehr Vorteile als Nachteile.', 'Dieses Hotel hat mehr Vorteile wie Nachteile.', 'عند مقارنة العدد نقول mehr … als.', 'deklination', 'Vorteile'],
      ['der Nachteil', 'die Nachteile', 'العيب/الجانب السلبي', 'Dieses Angebot hat weniger Nachteile als das andere.', 'Dieses Angebot hat weniger Nachteil als das andere.', 'بعد weniger يمكن أن يأتي هنا جمع معدود: Nachteile.', 'plural', 'Nachteile'],
      ['bequemer', '—', 'أكثر راحة', 'Der Sessel ist bequemer als der Stuhl.', 'Der Sessel ist bequemer wie der Stuhl.', 'نقول bequemer als عند اختلاف الراحة.', 'deklination', 'bequemer'],
      ['ruhiger', '—', 'أهدأ', 'Die Nebenstraße ist ruhiger als die Hauptstraße.', 'Die Nebenstraße ist ruhiger wie die Hauptstraße.', 'نقول ruhiger als عند اختلاف الهدوء.', 'deklination', 'ruhiger'],
      ['sauberer', '—', 'أنظف', 'Das Zimmer ist sauberer als das andere.', 'Das Zimmer ist sauberer wie das andere.', 'نقول sauberer als عند اختلاف النظافة.', 'deklination', 'sauberer'],
      ['günstiger', '—', 'أوفر/أرخص', 'Der Bus ist günstiger als das Taxi.', 'Der Bus ist günstiger wie das Taxi.', 'نقول günstiger als عند اختلاف السعر.', 'deklination', 'günstiger'],
      ['interessanter', '—', 'أكثر تشويقًا', 'Das Buch ist interessanter als der Film.', 'Das Buch ist interessanter wie der Film.', 'نقول interessanter als عند اختلاف درجة التشويق.', 'deklination', 'interessanter'],
      ['schöner', '—', 'أجمل', 'Der Park ist schöner als der Parkplatz.', 'Der Park ist schöner wie der Parkplatz.', 'نقول schöner als عند اختلاف الجمال.', 'deklination', 'schöner'],
      ['als', '—', 'من (بعد صيغة المقارنة)', 'Der Zug ist schneller als der Bus.', 'Der Zug ist schneller wie der Bus.', 'بعد صيغة المقارنة نستعمل als لبيان الاختلاف.', 'deklination', 'als'],
      ['wie', '—', 'مثل/كما (للتساوي)', 'Mein Zimmer ist so groß wie dein Zimmer.', 'Mein Zimmer ist so groß als dein Zimmer.', 'للتساوي نستعمل so مع الصفة الأصلية وwie.', 'deklination', 'wie'],
      ['so … wie', '—', 'بقدر … / مثل', 'Mein Zimmer ist so groß wie dein Zimmer.', 'Mein Zimmer ist größer wie dein Zimmer.', 'التساوي هو so + الصفة الأصلية + wie.', 'deklination', 'wie'],
      ['die Wohnung', 'die Wohnungen', 'الشقة', 'Die neue Wohnung ist heller als die alte.', 'Die neue Wohnung ist heller wie die alte.', 'نقول heller als عند اختلاف درجة الإضاءة.', 'deklination', 'Wohnung'],
      ['der Preis', 'die Preise', 'السعر', 'Der Preis im Laden ist höher als der Preis im Internet.', 'Der Preis im Laden ist höher wie der Preis im Internet.', 'نقول höher als عند اختلاف السعر.', 'deklination', 'Preis'],
      ['die Zeit', 'die Zeiten', 'الوقت', 'Im Winter habe ich weniger freie Zeit als im Sommer.', 'Im Winter habe ich wenige freie Zeit als im Sommer.', 'للمقارنة في كمية الوقت نقول weniger Zeit.', 'deklination', 'Zeit'],
      ['eng', 'enger · am engsten', 'ضيّق', 'Der Flur ist enger als das Wohnzimmer.', 'Der Flur ist eng als das Wohnzimmer.', 'صيغة المقارنة من eng هي enger.', 'deklination', 'enger'],
      ['nett', 'netter · am nettesten', 'لطيف', 'Der neue Nachbar ist netter als der alte.', 'Der neue Nachbar ist nett als der alte.', 'صيغة المقارنة من nett هي netter.', 'deklination', 'netter'],
      ['der Zentimeter', 'die Zentimeter', 'السنتيمتر', 'Der Koffer ist zwei Zentimeter breiter als erlaubt.', 'Der Koffer ist zwei Zentimeter breit als erlaubt.', 'بعد مقدار الفرق نحتاج صيغة المقارنة: zwei Zentimeter breiter.', 'lexik-kollokation', 'Zentimeter'],
      ['das Kilogramm', 'die Kilogramm', 'الكيلوغرام', 'Mein Koffer ist ein Kilogramm schwerer als deiner.', 'Mein Koffer ist ein Kilogramm schwerer wie deiner.', 'نقول schwerer als عند اختلاف الوزن.', 'lexik-kollokation', 'Kilogramm'],
      ['preiswert', 'preiswerter · am preiswertesten', 'مناسب السعر/زهيد الثمن', 'Dieses Café ist preiswerter als das am Bahnhof.', 'Dieses Café ist preiswert als das am Bahnhof.', 'صيغة المقارنة من preiswert هي preiswerter.', 'deklination', 'preiswerter'],
      ['praktisch', 'praktischer · am praktischsten', 'عملي', 'Ein Rucksack ist praktischer als eine Tasche.', 'Ein Rucksack ist praktisch als eine Tasche.', 'صيغة المقارنة من praktisch هي praktischer.', 'deklination', 'praktischer'],
      ['toll', 'toller · am tollsten', 'رائع', 'Das Konzert war toller als erwartet.', 'Das Konzert war toll als erwartet.', 'صيغة المقارنة من toll هي toller.', 'deklination', 'toller'],
    ],
    tricks: [
      { trick: 'صيغة المقارنة + als للاختلاف، وso + الصفة الأصلية + wie للتساوي', wie: 'Der Zug ist schneller als der Bus. · Mein Zimmer ist so groß wie dein Zimmer.', warum: 'als تربط درجتين مختلفتين هنا؛ أما التساوي فيُبنى بـ so … wie من دون صيغة المقارنة.', anchor: 'als' },
      { trick: 'تُبنى الصيغة المنتظمة غالبًا بـ-er، وقد يتغير حرف العلة أو شكل الكلمة', wie: 'schnell → schneller · groß → größer · teuer → teurer · knapp → knapper · hoch → höher.', warum: 'ليست إضافة er آلية دائمًا؛ بعض الكلمات تأخذ Umlaut أو يتغير رسمها، لذلك تُراجع الصيغة كاملة.', anchor: 'schneller' },
      { trick: 'ثلاث صيغ شائعة غير منتظمة: gut → besser · viel → mehr · gern → lieber', wie: 'besser als das andere · mehr Zeit als gestern · lieber Tee als Kaffee.', warum: 'besser وmehr لا تُبنيان بإضافة er، وlieber هي صيغة المفاضلة من gern وليست gerner.', anchor: 'besser' }
    ],
    strictClozeAnswers: true,
    wordClozeNearMisses: {
      'länger': 'lange',
      'wie': 'als'
    },
    clozeItemIndex: 10,
    clozeNearMiss: 'gerner',
    extraCheck: {
      right: 'Dieses Brot schmeckt besser als das andere.',
      bad: 'Dieses Brot schmeckt guter als das andere.',
      why: 'صيغة المقارنة من gut هي besser، وتتبعها als عند الاختلاف.',
      family: 'deklination',
      prereq: 'cap.a2-u2-l1.s05',
      frage: 'أي جملة تستعمل صيغة المقارنة الصحيحة من gut؟'
    }
  },

  'a2-u2-l2': {
    items: [
      ['am schnellsten', '—', 'بأعلى سرعة/الأسرع', 'Der ICE fährt am schnellsten.', 'Der ICE fährt am schnellste.', 'بعد am نحتاج صيغة التفضيل schnellsten.', 'deklination', 'schnellsten'],
      ['am billigsten', '—', 'بأرخص سعر', 'Im Discounter kauft man am billigsten.', 'Im Discounter kauft man am billigste.', 'بعد am نحتاج billigsten.', 'deklination', 'billigsten'],
      ['am besten', '—', 'بأفضل صورة/الأفضل', 'Dieses Brot schmeckt am besten.', 'Dieses Brot schmeckt am gutsten.', 'صيغة التفضيل من gut هي am besten.', 'deklination', 'besten'],
      ['am liebsten', '—', 'بأكبر تفضيل/أفضّل أكثر', 'Ich trinke am liebsten Tee.', 'Ich trinke am gernsten Tee.', 'صيغة التفضيل من gern هي am liebsten.', 'deklination', 'liebsten'],
      ['am meisten', '—', 'أكثر من الجميع', 'Von allen Kollegen arbeitet er am meisten.', 'Von allen Kollegen arbeitet er am meiste.', 'بعد am نحتاج meisten.', 'deklination', 'meisten'],
      ['am größten', '—', 'الأكبر حجمًا', 'Von allen Zimmern ist dieses am größten.', 'Von allen Zimmern ist dieses am großsten.', 'groß يأخذ Umlaut في التفضيل: am größten.', 'orthographie', 'größten'],
      ['der beste', '—', 'الأفضل قبل اسم مذكر', 'Das ist der beste Film des Jahres.', 'Das ist der bester Film des Jahres.', 'مع der في الرفع نقول der beste Film.', 'deklination', 'beste'],
      ['die schönste', '—', 'الأجمل قبل اسم مؤنث', 'Tunis ist für mich die schönste Stadt.', 'Tunis ist für mich der schönste Stadt.', 'Stadt مؤنث؛ نقول die schönste Stadt.', 'deklination', 'schönste'],
      ['das größte', '—', 'الأكبر قبل اسم محايد', 'Das größte Problem ist die Zeit.', 'Der größte Problem ist die Zeit.', 'Problem محايد؛ نقول das größte Problem.', 'deklination', 'größte'],
      ['der schnellste', '—', 'الأسرع قبل اسم مذكر', 'Er nimmt den schnellsten Zug.', 'Er nimmt den schnellste Zug.', 'في النصب المذكر نقول den schnellsten Zug.', 'deklination', 'schnellsten'],
      ['die teuerste', '—', 'الأغلى قبل اسم مؤنث', 'Das ist die teuerste Uhr im Laden.', 'Das ist der teuerste Uhr im Laden.', 'Uhr مؤنث؛ نقول die teuerste Uhr.', 'deklination', 'teuerste'],
      ['der letzte', '—', 'الأخير', 'Der letzte Bus fährt um elf.', 'Die letzte Bus fährt um elf.', 'Bus مذكر؛ نقول der letzte Bus.', 'deklination', 'letzte'],
      ['die erste', '—', 'الأولى', 'Die erste Stunde beginnt um acht.', 'Der erste Stunde beginnt um acht.', 'Stunde مؤنث؛ نقول die erste Stunde.', 'deklination', 'erste'],
      ['die Meinung', 'die Meinungen', 'الرأي', 'Meiner Meinung nach ist das die beste Lösung.', 'Meine Meinung nach ist das die beste Lösung.', 'العبارة الثابتة هي meiner Meinung nach.', 'register', 'Meinung'],
      ['der Erfolg', 'die Erfolge', 'النجاح', 'Dieser Erfolg ist für mich der wichtigste.', 'Dieser Erfolg ist für mich am wichtigste.', 'مع der المستعمل بدل الاسم نقول der wichtigste.', 'deklination', 'Erfolg'],
      ['die Gesundheit', '—', 'الصحة', 'Gesundheit ist für mich am wichtigsten.', 'Gesundheit ist für mich am wichtigste.', 'بعد am نحتاج wichtigsten.', 'deklination', 'Gesundheit'],
      ['die Erfahrung', 'die Erfahrungen', 'الخبرة', 'Sie hat von uns allen die meiste Erfahrung.', 'Sie hat von uns allen die meisten Erfahrung.', 'Erfahrung مفرد مؤنث؛ نقول die meiste Erfahrung.', 'deklination', 'Erfahrung'],
      ['der Kaffee', '—', 'القهوة', 'Dieser Kaffee schmeckt mir am besten.', 'Dieser Kaffee schmeckt mir am beste.', 'بعد am نحتاج besten.', 'deklination', 'Kaffee'],
      ['das Essen', '—', 'الطعام', 'In diesem Restaurant schmeckt das Essen am besten.', 'In diesem Restaurant schmeckt das Essen am beste.', 'بعد am نحتاج besten.', 'deklination', 'Essen'],
      ['die Stadt', 'die Städte', 'المدينة', 'Tunis ist für mich die schönste Stadt.', 'Tunis ist für mich der schönste Stadt.', 'Stadt مؤنث؛ نقول die schönste Stadt.', 'deklination', 'Stadt'],
      ['der Weg', 'die Wege', 'الطريق', 'Dieser Weg ist von allen am kürzesten.', 'Dieser Weg ist von allen am kürzeste.', 'بعد am نحتاج kürzesten.', 'deklination', 'Weg'],
      ['die Arbeit', 'die Arbeiten', 'العمل/المهمة', 'Von allen Aufgaben ist diese Arbeit am schwersten.', 'Von allen Aufgaben ist diese Arbeiten am schwersten.', 'بعد diese المفردة نحتاج Arbeit لا Arbeiten.', 'plural', 'Arbeit'],
      ['das Hotel', 'die Hotels', 'الفندق', 'Das Hotel hier ist am teuersten.', 'Das Hotel hier ist am teuerste.', 'بعد am نحتاج teuersten.', 'deklination', 'Hotel'],
      ['der Monat', 'die Monate', 'الشهر', 'Der Juli ist der wärmste Monat.', 'Der Juli ist der wärmsten Monat.', 'مع der في الرفع نقول der wärmste Monat.', 'deklination', 'Monat'],
      ['die Uhr', 'die Uhren', 'الساعة (الآلة)', 'Diese Uhr ist die teuerste im Geschäft.', 'Diese Uhr ist die teuersten im Geschäft.', 'الصيغة المؤنثة المستعملة بدل الاسم هي die teuerste.', 'deklination', 'Uhr'],
      ['die Regel', 'die Regeln', 'القاعدة', 'Diese Regel ist am schwierigsten.', 'Diese Regel ist am schwierigste.', 'بعد am نحتاج schwierigsten.', 'deklination', 'Regel'],
      ['süß', 'süßer · am süßesten', 'حلو', 'Von den drei Kuchen ist dieser am süßesten.', 'Von den drei Kuchen ist dieser am süßsten.', 'صيغة التفضيل القياسية هنا هي am süßesten.', 'deklination', 'süßesten'],
      ['sauer', 'saurer · am sauersten', 'حامض', 'Die Zitrone ist am sauersten.', 'Die Zitrone ist am sauerste.', 'بعد am نحتاج sauersten.', 'deklination', 'sauersten'],
      ['scharf', 'schärfer · am schärfsten', 'حار/حاد', 'Die Soße ist am schärfsten.', 'Die Soße ist am scharfsten.', 'scharf يأخذ Umlaut في التفضيل: am schärfsten.', 'orthographie', 'schärfsten'],
    ],
    tricks: [
      { trick: 'في الاستعمال الخبري أو الظرفي يأتي غالبًا am + -(e)sten', wie: '-sten ist nur ein Teil der Form: am schnellsten · am teuersten · am süßesten.', warum: 'النهاية ليست sten آليًا دائمًا؛ بعض الكلمات تحتاج esten أو Umlaut، لذلك تُحفظ الصيغة الكاملة.', anchor: 'am schnellsten' },
      { trick: 'قبل الاسم يأتي التفضيل من دون am وبنهاية توافق الجنس والحالة', wie: 'der beste Film · der höchste Berg · die schwerste Aufgabe · der süßeste Kuchen · den schnellsten Zug.', warum: 'الصيغة قبل الاسم تتصرف كصفة؛ لذلك تتغير النهاية بحسب الجنس والحالة، ولا تكفي قاعدة e واحدة لكل الحالات.', anchor: 'der beste' },
      { trick: 'سلاسل شائعة غير منتظمة: gut – besser – am besten؛ viel – mehr – am meisten؛ gern – lieber – am liebsten', wie: 'Dieses Brot schmeckt am besten. · Er arbeitet am meisten. · Ich trinke am liebsten Tee.', warum: 'هذه الصيغ لا تُبنى من الأصل بإضافة st فقط، فتُحفظ كسلاسل كاملة.', anchor: 'am besten' }
    ],
    strictClozeAnswers: true,
    wordClozeNearMisses: {
      'am größten': 'großsten',
      'die Arbeit': 'Arbeiten'
    },
    clozeItemIndex: 28,
    clozeNearMiss: 'scharfsten',
    extraCheck: {
      right: 'Dieses Brot schmeckt am besten.',
      bad: 'Dieses Brot schmeckt am gutsten.',
      why: 'صيغة التفضيل من gut هي am besten.',
      family: 'deklination',
      prereq: 'cap.a2-u2-l2.s05',
      frage: 'أي جملة تستعمل صيغة التفضيل الصحيحة من gut؟'
    }
  },

  'a2-u2-l3': {
    items: [
      ['der neue Kollege', '—', 'الزميل الجديد', 'Der neue Kollege kommt aus Berlin.', 'Der neuer Kollege kommt aus Berlin.', 'بعد der في الرفع نقول neue.', 'deklination', 'neue'],
      ['die kleine Wohnung', '—', 'الشقة الصغيرة', 'Die kleine Wohnung ist frei.', 'Die kleinen Wohnung ist frei.', 'بعد die للمفرد المؤنث في الرفع نقول kleine.', 'deklination', 'kleine'],
      ['das große Haus', '—', 'البيت الكبير', 'Das große Haus gehört uns.', 'Das großes Haus gehört uns.', 'بعد das في الرفع نقول große.', 'deklination', 'große'],
      ['die alten Häuser', '—', 'البيوت القديمة', 'Die alten Häuser sind teuer.', 'Die alte Häuser sind teuer.', 'مع die للجمع في الرفع نقول alten.', 'deklination', 'alten'],
      ['ein guter Freund', '—', 'صديق جيد', 'Er ist ein guter Freund.', 'Er ist ein gute Freund.', 'في الرفع المذكر مع ein نقول guter.', 'deklination', 'guter'],
      ['eine gute Idee', '—', 'فكرة جيدة', 'Das ist eine gute Idee.', 'Das ist eine guter Idee.', 'في الرفع المؤنث مع eine نقول gute.', 'deklination', 'gute'],
      ['ein kleines Kind', '—', 'طفل صغير', 'Das ist ein kleines Kind.', 'Das ist ein kleine Kind.', 'في الرفع المحايد مع ein نقول kleines.', 'deklination', 'kleines'],
      ['keine freie Zeit', '—', 'لا وقت فراغ', 'Keine freie Zeit ist für viele Menschen ein Problem.', 'Keine freien Zeit ist für viele Menschen ein Problem.', 'في الرفع المؤنث مع keine نقول freie Zeit.', 'deklination', 'freie'],
      ['mein alter Nachbar', '—', 'جاري القديم/المسن', 'Mein alter Nachbar hilft mir.', 'Mein alte Nachbar hilft mir.', 'في الرفع المذكر مع mein نقول alter.', 'deklination', 'alter'],
      ['der rote Pullover', '—', 'الكنزة الحمراء', 'Der rote Pullover gefällt mir.', 'Der roter Pullover gefällt mir.', 'بعد der في الرفع نقول rote.', 'deklination', 'rote'],
      ['die blaue Jacke', '—', 'السترة الزرقاء', 'Die blaue Jacke ist warm.', 'Die blauen Jacke ist warm.', 'بعد die للمفرد المؤنث نقول blaue.', 'deklination', 'blaue'],
      ['das weiße Hemd', '—', 'القميص الأبيض', 'Das weiße Hemd ist neu.', 'Das weißes Hemd ist neu.', 'بعد das في الرفع نقول weiße.', 'deklination', 'weiße'],
      ['die schwarzen Schuhe', '—', 'الأحذية السوداء', 'Die schwarzen Schuhe sind teuer.', 'Die schwarze Schuhe sind teuer.', 'مع die للجمع نقول schwarzen.', 'deklination', 'schwarzen'],
      ['der freundliche Verkäufer', '—', 'البائع الودود', 'Der freundliche Verkäufer hilft uns.', 'Der freundlicher Verkäufer hilft uns.', 'بعد der في الرفع نقول freundliche.', 'deklination', 'freundliche'],
      ['die ruhige Straße', '—', 'الشارع الهادئ', 'Die ruhige Straße gefällt mir.', 'Die ruhigen Straße gefällt mir.', 'بعد die للمفرد المؤنث نقول ruhige.', 'deklination', 'ruhige'],
      ['das billige Hotel', '—', 'الفندق الرخيص', 'Das billige Hotel ist sauber.', 'Das billiges Hotel ist sauber.', 'بعد das في الرفع نقول billige.', 'deklination', 'billige'],
      ['die frische Milch', '—', 'الحليب الطازج', 'Die frische Milch steht im Kühlschrank.', 'Die frischen Milch steht im Kühlschrank.', 'بعد die للمفرد المؤنث نقول frische.', 'deklination', 'frische'],
      ['der warme Tee', '—', 'الشاي الدافئ', 'Der warme Tee tut gut.', 'Der warmer Tee tut gut.', 'بعد der في الرفع نقول warme.', 'deklination', 'warme'],
      ['das kalte Wasser', '—', 'الماء البارد', 'Das kalte Wasser steht im Kühlschrank.', 'Das kaltes Wasser steht im Kühlschrank.', 'بعد das في الرفع نقول kalte.', 'deklination', 'kalte'],
      ['die leere Flasche', '—', 'القارورة الفارغة', 'Die leere Flasche steht auf dem Tisch.', 'Die leeren Flasche steht auf dem Tisch.', 'بعد die للمفرد المؤنث نقول leere.', 'deklination', 'leere'],
      ['der neue Job', '—', 'العمل الجديد', 'Der neue Job ist anstrengend.', 'Der neuer Job ist anstrengend.', 'بعد der في الرفع نقول neue.', 'deklination', 'neue'],
      ['die letzte Chance', '—', 'الفرصة الأخيرة', 'Das ist die letzte Chance.', 'Das ist die letzt Chance.', 'بعد die للمفرد المؤنث نقول letzte.', 'deklination', 'letzte'],
      ['das erste Mal', '—', 'المرة الأولى', 'Das ist das erste Mal in Berlin.', 'Das ist das erstes Mal in Berlin.', 'بعد das في الرفع نقول erste.', 'deklination', 'erste'],
      ['die kleinen Kinder', '—', 'الأطفال الصغار', 'Die kleinen Kinder spielen draußen.', 'Die kleine Kinder spielen draußen.', 'مع die للجمع نقول kleinen.', 'deklination', 'kleinen'],
      ['der gute Preis', '—', 'السعر الجيد', 'Der gute Preis überzeugt ihn.', 'Der guter Preis überzeugt ihn.', 'بعد der في الرفع نقول gute.', 'deklination', 'gute'],
      ['die grüne Lampe', '—', 'المصباح الأخضر', 'Die grüne Lampe ist schön.', 'Die grünen Lampe ist schön.', 'بعد die للمفرد المؤنث نقول grüne.', 'deklination', 'grüne'],
      ['echt', '—', 'حقيقي/أصيل', 'Das ist eine echte Perle.', 'Das ist eine echten Perle.', 'في الرفع المؤنث مع eine نقول echte.', 'deklination', 'echte'],
      ['leer', '—', 'فارغ', 'Die Wohnung ist noch leer.', 'Die Wohnung ist noch leere.', 'بعد sein تبقى الصفة الخبرية بلا نهاية: leer.', 'deklination', 'leer'],
      ['offen', '—', 'مفتوح', 'Der offene Laden ist hell.', 'Der offener Laden ist hell.', 'بعد der في الرفع نقول offene.', 'deklination', 'offene'],
      ['reich', '—', 'غني', 'Der reiche Mann hat ein Haus.', 'Der reicher Mann hat ein Haus.', 'بعد der في الرفع نقول reiche.', 'deklination', 'reiche'],
      ['voll', '—', 'ممتلئ', 'Die volle Flasche steht dort.', 'Die vollen Flasche steht dort.', 'بعد die للمفرد المؤنث نقول volle.', 'deklination', 'volle'],
    ],
    tricks: [
      { trick: 'مع أداة التعريف في الرفع: -e للمفرد و-en للجمع', wie: 'der neue Kollege · die kleine Wohnung · das große Haus · die alten Häuser.', warum: 'الأداة تُظهر الجنس في المفرد فتأخذ الصفة -e؛ ومع جمع die تأخذ الصفة -en.', anchor: 'der neue Kollege' },
      { trick: 'مع ein/eine في الرفع تحمل الصفة العلامة غير الظاهرة', wie: 'ein guter Freund · eine gute Idee · ein kleines Kind.', warum: 'ein لا يُظهر علامة المذكر أو المحايد؛ لذلك تظهر -er أو -es على الصفة، بينما المؤنث مع eine يأخذ -e.', anchor: 'ein guter Freund' },
      { trick: 'الصفة قبل الاسم تأخذ نهاية، وبعد sein تبقى بلا نهاية', wie: 'die leere Wohnung · Die Wohnung ist leer. · der offene Laden · Der Laden ist offen.', warum: 'الصفة النعتية تسبق الاسم فتُصرّف؛ أما الصفة الخبرية بعد sein فلا تأخذ نهاية.', anchor: 'leer' }
    ],
    strictClozeAnswers: true,
    wordClozeNearMisses: {
      'eine gute Idee': 'guter',
      'die letzte Chance': 'letzt'
    },
    clozeItemIndex: 4,
    clozeNearMiss: 'gute',
    extraCheck: {
      right: 'Die kleinen Kinder spielen draußen.',
      bad: 'Die kleine Kinder spielen draußen.',
      why: 'مع die للجمع في الرفع نقول kleinen Kinder.',
      family: 'deklination',
      prereq: 'cap.a2-u2-l3.s05',
      frage: 'أي جملة تستعمل نهاية جمع الرفع الصحيحة؟'
    }
  }

};

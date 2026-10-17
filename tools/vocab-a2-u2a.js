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
      ['am schnellsten', '—', 'الأسرع', 'Der ICE fährt am schnellsten.', 'Der ICE fährt am schnellste.', 'التفضيل مع am يأخذ en.', 'deklination', 'schnellsten'],
      ['am billigsten', '—', 'الأرخص', 'Im Discounter kauft man am billigsten.', 'Im Discounter kauft man am billigste.', 'am + en.', 'deklination', 'billigsten'],
      ['am besten', '—', 'الأفضل', 'Dieses Brot schmeckt am besten.', 'Dieses Brot schmeckt am beste.', 'gut → am besten.', 'deklination', 'besten'],
      ['am liebsten', '—', 'الأكثر تفضيلًا', 'Ich trinke am liebsten Tee.', 'Ich trinke am liebste Tee.', 'gern → am liebsten.', 'deklination', 'liebsten'],
      ['am meisten', '—', 'الأكثر', 'Er arbeitet am meisten.', 'Er arbeitet am meiste.', 'viel → am meisten.', 'deklination', 'meisten'],
      ['am größten', '—', 'الأكبر', 'Das ist das größte Zimmer, es ist am größten.', 'Es ist am größte.', 'am + en في التفضيل.', 'deklination', 'größten'],
      ['der beste', '—', 'الأفضل', 'Das ist der beste Film des Jahres.', 'Das ist der bester Film des Jahres.', 'التفضيل مع الأداة التعريف يأخذ e.', 'deklination', 'beste'],
      ['die schönste', '—', 'الأجمل', 'Das ist die schönste Stadt.', 'Das ist die schönste Stadt es.', 'لا ضمير بعد الاسم.', 'deklination', 'schönste'],
      ['das größte', '—', 'الأكبر', 'Das größte Problem ist die Zeit.', 'Das größte Problem ist die Zeit es.', 'الجملة تنتهي عند الخبر.', 'deklination', 'größte'],
      ['der schnellste', '—', 'الأسرع', 'Er nimmt den schnellsten Zug.', 'Er nimmt den schnellste Zug.', 'الوصف في النصب مع الأداة: en.', 'deklination', 'schnellsten'],
      ['die teuerste', '—', 'الأغلى', 'Das ist die teuerste Uhr im Laden.', 'Das ist die teuerste Uhr in Laden.', 'في المتجر: im Laden.', 'präposition', 'teuerste'],
      ['der letzte', '—', 'الأخير', 'Der letzte Bus fährt um elf.', 'Der letzte Bus fährt in elf.', 'الساعة: um elf.', 'präposition', 'letzte'],
      ['die erste', '—', 'الأولى', 'Die erste Stunde beginnt um acht.', 'Die erste Stunde beginnt in acht.', 'الساعة: um acht.', 'präposition', 'erste'],
      ['die Meinung', 'die Meinungen', 'الرأي', 'Meiner Meinung nach ist das am besten.', 'Nach meiner Meinung ist das am besser.', 'العبارة الثابتة: meiner Meinung nach.', 'register', 'Meinung'],
      ['der Erfolg', 'die Erfolge', 'النجاح', 'Der Erfolg ist am wichtigsten.', 'Der Erfolg ist am wichtigste.', 'am wichtigsten.', 'deklination', 'wichtigsten'],
      ['die Gesundheit', '—', 'الصحة', 'Die Gesundheit ist am wichtigsten.', 'Die Gesundheit ist am wichtigste.', 'التفضيل: am wichtigsten.', 'deklination', 'Gesundheit'],
      ['die Erfahrung', 'die Erfahrungen', 'الخبرة', 'Er hat die meiste Erfahrung.', 'Er hat die meiste Erfahrung es.', 'لا ضمير زائد.', 'deklination', 'Erfahrung'],
      ['der Kaffee', '—', 'القهوة', 'Der Kaffee hier ist am besten.', 'Der Kaffee hier ist am beste.', 'am besten.', 'deklination', 'Kaffee'],
      ['das Essen', '—', 'الطعام', 'Im Lokal ist das Essen am teuersten.', 'Im Lokal ist das Essen am teuerste.', 'am teuersten.', 'deklination', 'Essen'],
      ['die Stadt', 'die Städte', 'المدينة', 'Tunis ist die schönste Stadt für mich.', 'Tunis ist die schönste Stadt für mich es.', 'لا ضمير.', 'deklination', 'Stadt'],
      ['der Weg', 'die Wege', 'الطريق', 'Der Weg über die Autobahn ist der schnellste.', 'Der Weg über die Autobahn ist der schnellste Weg Weg.', 'الجملة تنتهي عند الوصف.', 'deklination', 'schnellste'],
      ['die Arbeit', 'die Arbeiten', 'العمل', 'Diese Arbeit ist am schwersten.', 'Diese Arbeit ist am schwerste.', 'am schwersten.', 'deklination', 'schwersten'],
      ['das Hotel', 'die Hotels', 'الفندق', 'Das Hotel am Meer ist am teuersten.', 'Das Hotel am Meer ist am teuerste.', 'am teuersten.', 'deklination', 'teuersten'],
      ['der Monat', 'die Monate', 'الشهر', 'Der Juli ist der wärmste Monat.', 'Der Juli ist der wärmste Monat es.', 'لا ضمير.', 'deklination', 'wärmste'],
      ['die Uhr', 'die Uhren', 'الساعة (آلة)', 'Die Uhr war die teuerste im Geschäft.', 'Die Uhr war die teuerste in Geschäft.', 'في المتجر: im Geschäft.', 'präposition', 'Uhr'],
      ['die Regel', 'die Regeln', 'القاعدة', 'Diese Regel ist am schwierigsten.', 'Diese Regel ist am schwierigste.', 'am + en.', 'deklination', 'schwierigsten'],
      ['süß', 'süßer · am süßesten', 'حلو', 'Der Kuchen ist am süßesten.', 'Der Kuchen ist am süßeste.', 'التفضيل: am …esten.', 'deklination', 'süßesten'],
      ['sauer', 'saurer · am sauersten', 'حامض', 'Die Zitrone ist am sauersten.', 'Die Zitrone ist am sauerste.', 'التفضيل: am …sten.', 'deklination', 'sauersten'],
      ['scharf', 'schärfer · am schärfsten', 'حار/حاد', 'Die Soße ist am schärfsten.', 'Die Soße ist am scharfsten.', 'التفضيل مع umlaut: schärfsten.', 'orthographie', 'schärfsten'],
    ],
    tricks: [
      { trick: 'am + en في التفضيل المطلق', wie: 'am schnellsten · am besten · am liebsten · am meisten.', warum: 'اللاحقة en ثابتة مع am، وإسقاطها خطأ يسمعه الألماني فورًا.', anchor: 'am schnellsten' },
      { trick: 'مع der/die/das يأتي التفضيل بلا am', wie: 'der beste Film · die schönste Stadt · das größte Problem.', warum: 'العربية تقول «الأفضل» في الحالتين، فالألمانية تفرّق بين الوصف المطلق والوصف المضاف.', anchor: 'der beste' },
      { trick: 'gut → besser → am besten، gern → lieber → am liebsten', wie: 'Es schmeckt besser. Es schmeckt am besten. Ich trinke gern Tee. Am liebsten Kaffee.', warum: 'هذه السلسلة تُستعمل يوميًا ولا تتبع القاعدة، فتُحفظ كوحدة واحدة.', anchor: 'gern' }
    ]
  },

  'a2-u2-l3': {
    items: [
      ['der neue Kollege', '—', 'الزميل الجديد', 'Der neue Kollege kommt aus Berlin.', 'Der neu Kollege kommt aus Berlin.', 'مع الأداة التعريف: neue.', 'deklination', 'neue'],
      ['die kleine Wohnung', '—', 'الشقة الصغيرة', 'Die kleine Wohnung ist frei.', 'Die klein Wohnung ist frei.', 'الوصف يأخذ e مع die.', 'deklination', 'kleine'],
      ['das große Haus', '—', 'البيت الكبير', 'Das große Haus gehört uns.', 'Das groß Haus gehört uns.', 'e مع das.', 'deklination', 'große'],
      ['die alten Häuser', '—', 'البيوت القديمة', 'Die alten Häuser sind teuer.', 'Die alt Häuser sind teuer.', 'الجمع مع die: alten.', 'deklination', 'alten'],
      ['ein guter Freund', '—', 'صديق جيد', 'Er ist ein guter Freund.', 'Er ist ein gute Freund.', 'بلا أداة تعريف: er في الرفع.', 'deklination', 'guter'],
      ['eine gute Idee', '—', 'فكرة جيدة', 'Das ist eine gute Idee.', 'Das ist eine gut Idee.', 'e مع eine.', 'deklination', 'gute'],
      ['ein kleines Kind', '—', 'طفل صغير', 'Das ist ein kleines Kind.', 'Das ist ein klein Kind.', 'es مع ein المحايد.', 'deklination', 'kleines'],
      ['keine freie Zeit', '—', 'لا وقت فراغ', 'Ich habe keine freie Zeit.', 'Ich habe keine frei Zeit.', 'e مع keine.', 'deklination', 'freie'],
      ['mein alter Nachbar', '—', 'جاري القديم', 'Mein alter Nachbar hilft mir.', 'Mein alte Nachbar hilft mir.', 'er مع mein في الرفع.', 'deklination', 'alter'],
      ['der rote Pullover', '—', 'الكنزة الحمراء', 'Der rote Pullover gefällt mir.', 'Der rot Pullover gefällt mir.', 'e مع der.', 'deklination', 'rote'],
      ['die blaue Jacke', '—', 'الجاكيت الأزرق', 'Die blaue Jacke ist warm.', 'Die blau Jacke ist warm.', 'e مع die.', 'deklination', 'blaue'],
      ['das weiße Hemd', '—', 'القميص الأبيض', 'Das weiße Hemd ist neu.', 'Das weiß Hemd ist neu.', 'e مع das.', 'deklination', 'weiße'],
      ['die schwarzen Schuhe', '—', 'الأحذية السوداء', 'Die schwarzen Schuhe sind teuer.', 'Die schwarz Schuhe sind teuer.', 'الجمع: en.', 'deklination', 'schwarzen'],
      ['der freundliche Verkäufer', '—', 'البائع الودود', 'Der freundliche Verkäufer hilft uns.', 'Der freundlich Verkäufer hilft uns.', 'e مع der.', 'deklination', 'freundliche'],
      ['die ruhige Straße', '—', 'الشارع الهادئ', 'Die ruhige Straße gefällt mir.', 'Die ruhig Straße gefällt mir.', 'e مع die.', 'deklination', 'ruhige'],
      ['das billige Hotel', '—', 'الفندق الرخيص', 'Das billige Hotel ist sauber.', 'Das billig Hotel ist sauber.', 'e مع das.', 'deklination', 'billige'],
      ['die frische Milch', '—', 'الحليب الطازج', 'Die frische Milch steht im Kühlschrank.', 'Die frisch Milch steht im Kühlschrank.', 'e مع die.', 'deklination', 'frische'],
      ['der warme Tee', '—', 'الشاي الساخن', 'Der warme Tee tut gut.', 'Der warm Tee tut gut.', 'e مع der.', 'deklination', 'warme'],
      ['das kalte Wasser', '—', 'الماء البارد', 'Das kalte Wasser ist im Kühlschrank.', 'Das kalt Wasser ist im Kühlschrank.', 'e مع das.', 'deklination', 'kalte'],
      ['die leere Flasche', '—', 'القنينة الفارغة', 'Die leere Flasche steht auf dem Tisch.', 'Die leer Flasche steht auf dem Tisch.', 'e مع die.', 'deklination', 'leere'],
      ['der neue Job', '—', 'العمل الجديد', 'Der neue Job ist anstrengend.', 'Der neu Job ist anstrengend.', 'e مع der.', 'deklination', 'neue'],
      ['die letzte Chance', '—', 'الفرصة الأخيرة', 'Das ist die letzte Chance.', 'Das ist die letzt Chance.', 'e مع die.', 'deklination', 'letzte'],
      ['das erste Mal', '—', 'المرة الأولى', 'Das ist das erste Mal in Berlin.', 'Das ist das erst Mal in Berlin.', 'e مع das.', 'deklination', 'erste'],
      ['die kleinen Kinder', '—', 'الأطفال الصغار', 'Die kleinen Kinder spielen draußen.', 'Die klein Kinder spielen draußen.', 'الجمع en.', 'deklination', 'kleinen'],
      ['der gute Preis', '—', 'الثمن الجيد', 'Der gute Preis gefällt ihm.', 'Der gut Preis gefällt ihm.', 'e مع der.', 'deklination', 'gute'],
      ['die grüne Lampe', '—', 'المصباح الأخضر', 'Die grüne Lampe ist schön.', 'Die grün Lampe ist schön.', 'e مع die.', 'deklination', 'grüne'],
      ['echt', '—', 'حقيقي', 'Das ist eine echte Perle.', 'Das ist eine echt Perle.', 'الصفة قبل الاسم: echte.', 'deklination', 'echte'],
      ['leer', '—', 'فارغ', 'Die Wohnung ist noch leer.', 'Die Wohnung ist noch leere.', 'في الخبر تبقى الصفة بلا نهاية.', 'deklination', 'leer'],
      ['offen', '—', 'مفتوح', 'Der offene Laden ist hell.', 'Der offen Laden ist hell.', 'الصفة قبل الاسم: offene.', 'deklination', 'offene'],
      ['reich', '—', 'غني', 'Der reiche Mann hat ein Haus.', 'Der reich Mann hat ein Haus.', 'e مع der: reiche.', 'deklination', 'reiche'],
      ['voll', '—', 'ممتلئ', 'Die volle Flasche steht dort.', 'Die voll Flasche steht dort.', 'e مع die: volle.', 'deklination', 'volle'],
    ],
    tricks: [
      { trick: 'بعد der/die/das الجمع تأخذ الوصف en والجمع', wie: 'die alten Häuser · die kleinen Kinder · die schwarzen Schuhe.', warum: 'العربية تضع الصفة بعد الاسم بلا علامة، فالمتعلم ينسى أن الجمع يطلب en.', anchor: 'die alten Häuser' },
      { trick: 'بلا أداة تعريف يأخذ الوصف علامة الأداة الغائبة', wie: 'ein guter Freund (er) · eine gute Idee (e) · ein kleines Kind (es).', warum: 'العلامة في الوصف تعرّف الجنس عندما تغيب الأداة، وهي فكرة غائبة عن العربية تمامًا.', anchor: 'ein guter Freund' },
      { trick: 'أداة التعريف تكتفي بـe في المفرد ثم en', wie: 'der neue Kollege · die kleine Wohnung · das große Haus · die neuen Kollegen.', warum: 'قاعدة واحدة تحل أغلب الصفات: e في المفرد، en في الجمع والنصب.', anchor: 'der neue Kollege' }
    ]
  }

};

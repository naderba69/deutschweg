/* Deutschweg — P3.2 lexical layer, A1 unit 3 (part a): a1-u3-l1 … a1-u3-l3. */

module.exports = {

  'a1-u3-l1': {
    items: [
      ['die Speisekarte', 'die Speisekarten', 'قائمة الطعام', 'Die Speisekarte, bitte.', 'Der Speisekarte, bitte.', 'Karte مؤنث، فالمركّب مؤنث: die Speisekarte.', 'genus'],
      ['das Abendessen', 'die Abendessen', 'العشاء', 'Das Abendessen ist fertig.', 'Der Abendessen ist fertig.', 'Essen محايد، فالمركّب محايد: das.', 'genus'],
      ['die Butter', '—', 'الزبدة', 'Die Butter ist im Kühlschrank.', 'Der Butter ist im Kühlschrank.', 'Butter مؤنث: die.', 'genus'],
      ['der Käse', 'die Käse', 'الجبن', 'Der Käse ist frisch.', 'Die Käse ist frisch.', 'Käse مذكر: der.', 'genus'],
      ['die Wurst', 'die Würste', 'المرتديلا', 'Die Wurst schmeckt gut.', 'Der Wurst schmeckt gut.', 'Wurst مؤنث: die.', 'genus'],
      ['das Hähnchen', 'die Hähnchen', 'الدجاج', 'Das Hähnchen ist lecker.', 'Der Hähnchen ist lecker.', 'ما ينتهي بـ -chen محايد: das.', 'genus'],
      ['der Fisch', 'die Fische', 'السمك', 'Der Fisch ist frisch.', 'Die Fisch ist frisch.', 'Fisch مذكر: der.', 'genus'],
      ['der Reis', '—', 'الأرز', 'Der Reis ist trocken.', 'Das Reis ist trocken.', 'Reis مذكر: der.', 'genus'],
      ['die Nudel', 'die Nudeln', 'المعكرونة', 'Die Nudeln sind heiß.', 'Die Nudel sind heiß.', 'الجمع Nudeln هو الذي يوافق الفعل.', 'plural', 'Nudeln'],
      ['der Salat', 'die Salate', 'السلطة', 'Der Salat ist frisch.', 'Die Salat ist frisch.', 'Salat مذكر: der.', 'genus'],
      ['das Gemüse', 'die Gemüse', 'الخضار', 'Das Gemüse ist gesund.', 'Der Gemüse ist gesund.', 'Gemüse محايد: das.', 'genus'],
      ['das Obst', '—', 'الفاكهة', 'Das Obst ist süß.', 'Die Obst ist süß.', 'Obst محايد: das.', 'genus'],
      ['die Birne', 'die Birnen', 'الكمثرى', 'Die Birne ist reif.', 'Der Birne ist reif.', 'Birne مؤنث: die.', 'genus'],
      ['die Zitrone', 'die Zitronen', 'الليمون', 'Die Zitrone ist sauer.', 'Der Zitrone ist sauer.', 'Zitrone مؤنث: die.', 'genus'],
      ['die Zwiebel', 'die Zwiebeln', 'البصل', 'Die Zwiebel ist stark.', 'Der Zwiebel ist stark.', 'Zwiebel مؤنث: die.', 'genus'],
      ['das Salz', '—', 'الملح', 'Ich brauche zweihundert Gramm Salz.', 'Ich brauche zweihundert Gramm Salz du.', 'المقدار يسبق المادة: Gramm Salz.', 'wortstellung', 'Salz'],
      ['der Zucker', '—', 'السكر', 'Ein Pfund Zucker, bitte.', 'Ein Pfund Zucker bitte du.', 'الطلب بلا ضمير: Ein Pfund Zucker, bitte.', 'wortstellung', 'Zucker'],
      ['der Pfeffer', '—', 'الفلفل', 'Der Pfeffer ist scharf.', 'Das Pfeffer ist scharf.', 'Pfeffer مذكر: der.', 'genus'],
      ['das Öl', 'die Öle', 'الزيت', 'Das Öl ist teuer.', 'Der Öl ist teuer.', 'Öl محايد: das.', 'genus'],
      ['das Eis', '—', 'المثلّجات', 'Das Eis ist kalt.', 'Der Eis ist kalt.', 'Eis محايد: das.', 'genus'],
      ['der Honig', '—', 'العسل', 'Der Honig ist süß.', 'Die Honig ist süß.', 'Honig مذكر: der.', 'genus'],
      ['die Marmelade', 'die Marmeladen', 'المربّى', 'Die Marmelade ist rot.', 'Der Marmelade ist rot.', 'Marmelade مؤنث: die.', 'genus'],
      ['das Müsli', '—', 'الموسلي', 'Das Müsli ist gesund.', 'Der Müsli ist gesund.', 'Müsli محايد: das.', 'genus'],
      ['der Joghurt', 'die Joghurts', 'اللبن', 'Der Joghurt ist frisch.', 'Die Joghurt ist frisch.', 'Joghurt مذكر: der.', 'genus'],
      ['die Gabel', 'die Gabeln', 'الشوكة', 'Die Gabel liegt links.', 'Der Gabel liegt links.', 'Gabel مؤنث: die.', 'genus'],
      ['das Messer', 'die Messer', 'السكين', 'Das Messer ist scharf.', 'Der Messer ist scharf.', 'Messer محايد: das.', 'genus'],
      ['der Löffel', 'die Löffel', 'الملعقة', 'Der Löffel ist klein.', 'Die Löffel ist klein.', 'Löffel مذكر: der.', 'genus'],
      ['frühstücken', 'frühstückt · frühstückte', 'يتناول الفطور', 'Ich frühstücke um acht.', 'Ich frühstücken um acht.', 'مع ich يسقط n: ich frühstücke.', 'konjugation', 'frühstücke']
    ],
    tricks: [
      { trick: 'في المطبخ الجنس يتبع النهاية', wie: 'die Butter · die Wurst · die Marmelade: ما ينتهي بـ -e غالبًا مؤنث.', warum: 'حفظ النهاية كعائلة يعطي الجنس بلا قاموس، والباقي يُحفظ معه.', anchor: 'Die Butter ist im Kühlschrank.' },
      { trick: 'أدوات المائدة ثلاثة', wie: 'der Löffel · die Gabel · das Messer: ذكر · مؤنث · محايد.', warum: 'ثلاثة أسماء من طبق واحد بثلاث أدوات، وهي أسرع صورة تثبّت الأداة.', anchor: 'Die Gabel liegt links.' },
      { trick: 'Speisekarte تُقرأ من آخرها', wie: 'die Speise + die Karte = die Speisekarte.', warum: 'الجنس يتبع الجزء الأخير، فقراءة المركّب من آخره تكشف أداته.', anchor: 'Die Speisekarte, bitte.' }
    ]
  },

  'a1-u3-l2': {
    items: [
      ['das Geschäft', 'die Geschäfte', 'المتجر', 'Das Geschäft ist heute zu.', 'Der Geschäft ist heute zu.', 'Geschäft محايد: das.', 'genus'],
      ['der Laden', 'die Läden', 'الدكان', 'Der Laden ist klein.', 'Die Laden ist klein.', 'Laden مذكر: der.', 'genus'],
      ['der Markt', 'die Märkte', 'السوق', 'Auf dem Markt kaufe ich ein Kilo Tomaten.', 'Auf dem Markt kaufe ich ein Kilo Tomate.', 'بعد الكيلو يأتي الجمع: Tomaten.', 'plural', 'Markt'],
      ['der Preis', 'die Preise', 'السعر', 'Der Preis ist hoch.', 'Die Preis ist hoch.', 'Preis مذكر: der.', 'genus'],
      ['der Euro', 'die Euro', 'اليورو', 'Zehn Prozent von zehn Euro sind ein Euro.', 'Zehn Prozent von zehn Euro ist ein Euro.', 'المجموع يأخذ الفعل جمعًا هنا.', 'konjugation', 'Euro'],
      ['der Cent', 'die Cent', 'السنت', 'Fünfzig Cent, bitte.', 'Fünfzig Cents, bitte.', 'Cent لا تُجمع بـ s في المعيار.', 'plural'],
      ['die Kasse', 'die Kassen', 'الصندوق', 'Die Kasse ist dort.', 'Der Kasse ist dort.', 'Kasse مؤنث: die.', 'genus'],
      ['die Quittung', 'die Quittungen', 'الإيصال', 'Die Quittung, bitte.', 'Der Quittung, bitte.', 'Quittung مؤنث: die.', 'genus'],
      ['der Korb', 'die Körbe', 'السلّة', 'Der Korb ist voll.', 'Die Korb ist voll.', 'Korb مذكر: der.', 'genus'],
      ['die Tüte', 'die Tüten', 'الكيس', 'Die Tüte kostet zehn Cent.', 'Der Tüte kostet zehn Cent.', 'Tüte مؤنث: die.', 'genus'],
      ['die Größe', 'die Größen', 'المقاس', 'Welche Größe brauchen Sie?', 'Welcher Größe brauchen Sie?', 'Größe مؤنث: welche.', 'genus'],
      ['das Sonderangebot', 'die Sonderangebote', 'العرض الخاص', 'Das Sonderangebot ist günstig.', 'Der Sonderangebot ist günstig.', 'Angebot محايد، فالمركّب محايد.', 'genus'],
      ['günstig', '—', 'بسعر مناسب', 'Das ist sehr günstig.', 'Das ist günstig sehr.', 'sehr يسبق الصفة.', 'wortstellung'],
      ['kosten', 'kostet · kostete', 'يُكلّف', 'Was kostet ein Liter Milch?', 'Was kostet ein Liter Milch es?', 'السؤال ينتهي بعد المفعول.', 'wortstellung', 'kostet'],
      ['anprobieren', 'probiert an · probierte an', 'يقيس', 'Darf ich das anprobieren?', 'Darf ich das anprobiere?', 'بعد darf مصدر: anprobieren.', 'konjugation'],
      ['passen', 'passt · passte', 'يناسب', 'Die Hose passt mir.', 'Die Hose passt mich.', 'passen تأخذ داتيف: mir.', 'kasus', 'passt'],
      ['der Kunde', 'die Kunden', 'الزبون', 'Der Kunde fragt nach dem Preis.', 'Der Kunde fragt für den Preis.', 'fragen nach بمعنى يستفسر عن.', 'präposition'],
      ['die Verkäuferin', 'die Verkäuferinnen', 'البائعة', 'Die Verkäuferin hilft mir.', 'Der Verkäuferin hilft mir.', 'Verkäuferin مؤنث: die.', 'genus'],
      ['der Einkaufswagen', 'die Einkaufswagen', 'عربة التسوّق', 'Der Einkaufswagen ist voll.', 'Die Einkaufswagen ist voll.', 'Wagen مذكر، فالمركّب مذكر.', 'genus'],
      ['der Schuh', 'die Schuhe', 'الحذاء', 'Der Schuh ist zu klein.', 'Die Schuh ist zu klein.', 'Schuh مذكر: der.', 'genus'],
      ['die Mütze', 'die Mützen', 'القبعة', 'Die Mütze ist warm.', 'Der Mütze ist warm.', 'Mütze مؤنث: die.', 'genus'],
      ['der Gürtel', 'die Gürtel', 'الحزام', 'Der Gürtel ist braun.', 'Die Gürtel ist braun.', 'Gürtel مذكر: der.', 'genus'],
      ['die Seife', 'die Seifen', 'الصابون', 'Die Seife riecht gut.', 'Der Seife riecht gut.', 'Seife مؤنث: die.', 'genus'],
      ['die Zahnbürste', 'die Zahnbürsten', 'فرشاة الأسنان', 'Die Zahnbürste ist neu.', 'Der Zahnbürste ist neu.', 'Bürste مؤنث، فالمركّب مؤنث.', 'genus'],
      ['die Batterie', 'die Batterien', 'البطارية', 'Die Batterie ist leer.', 'Der Batterie ist leer.', 'Batterie مؤنث: die.', 'genus'],
      ['das Papier', 'die Papiere', 'الورق', 'Das Papier ist weiß.', 'Der Papier ist weiß.', 'Papier محايد: das.', 'genus'],
      ['die Zeitschrift', 'die Zeitschriften', 'المجلة', 'Die Zeitschrift kostet vier Euro.', 'Der Zeitschrift kostet vier Euro.', 'Schrift مؤنث، فالمركّب مؤنث.', 'genus'],
      ['das Wörterbuch', 'die Wörterbücher', 'القاموس', 'Das Wörterbuch ist teuer.', 'Der Wörterbuch ist teuer.', 'Buch محايد، فالمركّب محايد.', 'genus']
    ],
    tricks: [
      { trick: 'kosten يسأل عن السعر وحده', wie: 'Was kostet das? · Das kostet zehn Euro.', warum: 'العربية تقول «بكم هذا؟»، والألمانية تسأل بالفعل مباشرة بلا حرف جر.', anchor: 'Was kostet das?' },
      { trick: 'Größe سؤال ثانٍ في المتجر', wie: 'Welche Größe brauchen Sie? — Größe مؤنث: welche.', warum: 'المقاس يأتي بعد السعر، والخطأ في أداته يبدّل السؤال كله.', anchor: 'Welche Größe brauchen Sie?' },
      { trick: 'passen تأخذ mir لا mich', wie: 'Die Hose passt mir. · Das passt mir nicht.', warum: 'passen من أفعال الداتيف، والخطأ فيه يسمعه البائع فورًا.', anchor: 'Die Hose passt mir.' }
    ]
  },

  'a1-u3-l3': {
    items: [
      ['zuerst', '—', 'أولًا', 'Zuerst stehe ich auf.', 'Zuerst ich stehe auf.', 'بعد zuerst يبقى الفعل ثانيًا.', 'wortstellung'],
      ['dann', '—', 'ثم', 'Dann frühstücke ich.', 'Dann ich frühstücke.', 'dann تزيح الفاعل إلى ما بعد الفعل.', 'wortstellung'],
      ['danach', '—', 'بعد ذلك', 'Danach lerne ich.', 'Danach ich lerne.', 'الفعل ثانٍ بعد danach.', 'wortstellung'],
      ['zum Schluss', '—', 'في الختام', 'Zum Schluss schlafe ich.', 'Zum Schluss ich schlafe.', 'الظرف الأول والفعل ثانٍ.', 'wortstellung', 'Schluss'],
      ['duschen', 'duscht · duschte', 'يستحمّ', 'Ich dusche um sechs.', 'Ich duschen um sechs.', 'مع ich يسقط n: ich dusche.', 'konjugation', 'dusche'],
      ['losgehen', 'geht los · ging los', 'ينطلق', 'Ich gehe um acht los.', 'Ich losgehe um acht.', 'البادئة los في آخر الجملة.', 'wortstellung', 'los'],
      ['die Zähne putzen', '—', 'ينظّف الأسنان', 'Ich putze die Zähne.', 'Ich putze mich die Zähne.', 'putzen die Zähne بلا ضمير انعكاسي.', 'kasus', 'putze'],
      ['das Bett', 'die Betten', 'السرير', 'Ich gehe ins Bett.', 'Ich gehe in Bett.', 'in + das = ins.', 'präposition'],
      ['die Dusche', 'die Duschen', 'الدشّ', 'Die Dusche ist klein.', 'Der Dusche ist klein.', 'Dusche مؤنث: die.', 'genus'],
      ['der Feierabend', 'die Feierabende', 'نهاية الدوام', 'Um sechs habe ich Feierabend.', 'Um sechs ich habe Feierabend.', 'الظرف الأول والفعل ثانٍ.', 'wortstellung'],
      ['die Mittagspause', 'die Mittagspausen', 'استراحة الظهر', 'In der Mittagspause esse ich.', 'In die Mittagspause esse ich.', 'الزمن يأخذ الداتيف: in der.', 'kasus'],
      ['sich waschen', 'wäscht sich · wusch sich', 'يغتسل', 'Ich wasche mich.', 'Ich wasche mir.', 'waschen الانعكاسي يأخذ mich.', 'kasus', 'wasche'],
      ['sich beeilen', 'beeilt sich · beeilte sich', 'يُسرع', 'Ich beeile mich.', 'Ich beeile mir.', 'beeilen يأخذ الضمير mich.', 'kasus', 'beeile'],
      ['sich freuen', 'freut sich · freute sich', 'يفرح', 'Ich freue mich auf den Abend.', 'Ich freue mich für den Abend.', 'freuen auf للانتظار.', 'präposition', 'freue'],
      ['die U-Bahn', 'die U-Bahnen', 'مترو الأنفاق', 'Ich fahre mit der U-Bahn.', 'Ich fahre mit die U-Bahn.', 'mit تأخذ داتيف: mit der.', 'kasus'],
      ['zu Fuß', '—', 'سيرًا على القدم', 'Ich gehe zu Fuß.', 'Ich gehe mit Fuß.', 'zu Fuß تعبير ثابت بلا mit.', 'präposition', 'Fuß'],
      ['sich setzen', 'setzt sich · setzte sich', 'يجلس', 'Ich setze mich an den Tisch.', 'Ich setze mich auf dem Tisch.', 'الحركة إلى المكان تأخذ النصب: an den Tisch.', 'kasus', 'setze'],
      ['wach', '—', 'مستيقظ', 'Ich bin schon wach.', 'Ich bin wach schon.', 'schon قبل الصفة.', 'wortstellung'],
      ['die Kleidung', '—', 'الملابس', 'Die Kleidung ist bequem.', 'Der Kleidung ist bequem.', 'Kleidung مؤنث: die.', 'genus'],
      ['das Handtuch', 'die Handtücher', 'المنشفة', 'Das Handtuch ist nass.', 'Der Handtuch ist nass.', 'Tuch محايد، فالمركّب محايد.', 'genus'],
      ['schlafen gehen', '—', 'يذهب للنوم', 'Ich gehe schlafen.', 'Ich gehe zu schlafen.', 'gehen schlafen بلا zu.', 'präposition', 'schlafen'],
      ['sauber', '—', 'نظيف', 'Mein Zimmer ist sauber.', 'Meine Zimmer ist sauber.', 'Zimmer محايد: mein.', 'genus'],
      ['schmutzig', '—', 'متّسخ', 'Die Küche ist schmutzig.', 'Der Küche ist schmutzig.', 'Küche مؤنث: die.', 'genus'],
      ['backen', 'bäckt · backte', 'يخبز', 'Ich backe am Wochenende.', 'Ich backe in Wochenende.', 'نهاية الأسبوع تأخذ am.', 'präposition', 'backe'],
      ['spazieren gehen', '—', 'يتنزّه', 'Wir gehen spazieren.', 'Wir gehen zu spazieren.', 'gehen spazieren بلا zu.', 'präposition', 'spazieren'],
      ['der Einkauf', 'die Einkäufe', 'التسوّق', 'Der Einkauf dauert lange.', 'Die Einkauf dauert lange.', 'Kauf مذكر، فالمركّب مذكر.', 'genus'],
      ['das Radio', 'die Radios', 'المذياع', 'Das Radio läuft.', 'Der Radio läuft.', 'Radio محايد: das.', 'genus'],
      ['sich ausruhen', 'ruht sich aus · ruhte sich aus', 'يستريح', 'Nach der Arbeit ruhe ich mich aus.', 'Nach der Arbeit ich ruhe mich aus.', 'بعد الظرف يبقى الفعل ثانيًا.', 'wortstellung', 'ruhe']
    ],
    tricks: [
      { trick: 'zuerst · dann · danach · zum Schluss هي العمود', wie: 'Zuerst stehe ich auf. Dann frühstücke ich.', warum: 'بعد كل كلمة ترتيب ينقلب الفاعل والفعل، وهو موضع الخطأ الأول في السرد.', anchor: 'Zuerst stehe ich auf.' },
      { trick: 'الروتين اليومي يعلّم الأفعال المنفصلة', wie: 'aufstehen · anziehen · einkaufen · aufräumen.', warum: 'الروتين يعيدها كل صباح، فتُحفظ بالفعل لا بالقاعدة.', anchor: 'Abends sehe ich fern.' },
      { trick: 'الظرف يفتح الجملة والفعل يبقى ثانيًا', wie: 'Morgens lerne ich. · Am Abend sehe ich fern.', warum: 'الظرف الأول لا يملك الجملة بل يزيح الفاعل بعده؛ قاعدة الموضع الثاني.', anchor: 'Morgens lerne ich.' }
    ]
  }

};

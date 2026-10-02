function U(id, level, ar, de, fam, goalDe, goalAr, facts, lex, model, say, hwDe, hwAr) {
  return { id, level, ar, de, fam, goalDe, goalAr, facts, lex, model, say, hwDe, hwAr };
}
module.exports = [
  U('b1-u1-l1', 'B1', 'المبني للمجهول', 'Passiv', 'konjugation',
    'Am Ende bildest du das Vorgangspassiv mit werden',
    'في النهاية تبني المبني للمجهول بـ werden.',
    [
      ['wird repariert', 'المجهول werden لا sein دائمًا', 'sein يصف الحالة', 'ist repariert als Vorgang', 'هذا حالة لا حدث'],
      ['wurde verkauft', 'الماضي wurde', 'war verkauft حالة', 'war verkauft als Vorgang', 'الحدث wurde'],
      ['das Haus wird gebaut', 'الفاعل يمكن أن يغيب', 'man bleibt nicht Pflicht', 'man baut immer statt Passiv', 'المجهول خيار'],
      ['von dem Team', 'الفاعل إن ذُكر مع von', 'durch للوسيلة غالبًا', 'mit dem Team als Agens falsch', 'الفاعل von']
    ],
    [
      ['Die Straße wird repariert.', 'الشارع يُرمم', 'Die Straße ist repariert als Vorgang', 'الحدث wird', 'wird'],
      ['Das Haus wurde verkauft.', 'بيع البيت', 'Das Haus war verkauft als Vorgang', 'الحدث wurde', 'wurde'],
      ['Das wird hier recycelt.', 'هذا يُعاد تدويره هنا', 'Man recycelt das immer nur so', 'المجهول wird', 'recycelt'],
      ['Der Brief wird von Anna geschrieben.', 'الرسالة تكتبها آنا', 'Der Brief wird mit Anna geschrieben', 'الفاعل von', 'von']
    ],
    'Die Straße wird repariert. Das Haus wurde verkauft.',
    'Die Straße wird repariert.',
    'Bilde morgen wird und wurde.',
    'غدًا كوّن wird وwurde.'),

  U('b1-u1-l2', 'B1', 'جملة الصلة', 'Relativsatz', 'wortstellung',
    'Am Ende bildest du einen Relativsatz mit Verb am Ende',
    'في النهاية تبني جملة صلة والفعل في الآخر.',
    [
      ['der dort wohnt', 'الصلة والفعل آخرًا', 'der wohnt dort خطأ في الصلة', 'der wohnt dort', 'الفعل ليس ثانيًا'],
      ['die Frau, der ich helfe', 'الداتيف der للمرأة', 'die ich helfe إذا كان helfen', 'die Frau, die ich helfe', 'helfen داتيف'],
      ['das Buch, das ich lese', 'المحايد das', 'das Buch, die ich lese خطأ', 'das Buch, die ich lese', 'الأداة das'],
      ['Komma Pflicht', 'الفاصلة قبل الصلة', 'بلا فاصلة يضيع الحد', 'der Mann der dort wohnt ohne Komma', 'الفاصلة لازمة']
    ],
    [
      ['Der Mann, der dort wohnt, heißt Ali.', 'الرجل الذي يسكن هناك اسمه علي', 'Der Mann, der wohnt dort, heißt Ali', 'wohnt في الآخر', 'wohnt'],
      ['Die Frau, der ich helfe, ist nett.', 'المرأة التي أساعدها لطيفة', 'Die Frau, die ich helfe, ist nett', 'helfen مع der', 'der'],
      ['Das Buch, das ich lese, ist neu.', 'الكتاب الذي أقرأه جديد', 'Das Buch, die ich lese, ist neu', 'المحايد das', 'das'],
      ['Der Kurs, den ich besuche, ist voll.', 'الدورة التي أحضرها ممتلئة', 'Der Kurs, der ich besuche, ist voll', 'المفعول den', 'den']
    ],
    'Der Mann, der dort wohnt, heißt Ali.',
    'Das Buch, das ich lese, ist neu.',
    'Schreibe morgen einen Relativsatz.',
    'غدًا اكتب جملة صلة.'),

  U('b1-u1-l3', 'B1', 'رغم أن', 'obwohl', 'wortstellung',
    'Am Ende stellst du das Verb nach obwohl an das Ende',
    'في النهاية تضع الفعل آخرًا بعد obwohl.',
    [
      ['obwohl plus Ende', 'obwohl يرسل الفعل إلى الآخر', 'obwohl es regnet ich gehe خطأ الترتيب', 'obwohl es regnet, ich gehe', 'بعد تقدم obwohl الفعل أول الرئيسية'],
      ['Gegensatz', 'obwohl للتنازل لا للسبب', 'weil لا تحمل التنازل', 'weil es regnet, gehe ich trotzdem als obwohl', 'التنازل obwohl'],
      ['kein trotz dass', 'لا trotz dass', 'obwohl هي الأداة', 'trotz dass es regnet', 'trotz dass ليست الأداة'],
      ['Hauptsatz V2 oder Verb-erst', 'إن تقدم obwohl فالفعل أول الرئيسية', 'الضمير لا يسبق الفعل', 'Obwohl es regnet, ich gehe', 'الفعل أولًا']
    ],
    [
      ['Obwohl es regnet, gehe ich.', 'رغم المطر أذهب', 'Obwohl es regnet, wir bleiben sitzen', 'gehe أول الرئيسية', 'gehe'],
      ['Obwohl ich müde bin, lerne ich.', 'رغم التعب أدرس', 'Obwohl ich bin müde, lerne ich', 'bin في الآخر', 'bin'],
      ['Ich gehe, obwohl es regnet.', 'أذهب رغم المطر', 'Ich gehe, weil es regnet als Gegensatz', 'التنازل obwohl', 'obwohl'],
      ['Obwohl sie wenig Zeit hat, hilft sie.', 'رغم ضيق الوقت تساعد', 'Trotz dass sie wenig Zeit hat, hilft sie', 'الأداة obwohl', 'Obwohl']
    ],
    'Obwohl es regnet, gehe ich.',
    'Obwohl ich müde bin, lerne ich.',
    'Schreibe morgen einen obwohl-Satz.',
    'غدًا اكتب جملة obwohl.'),

  U('b1-u1-l4', 'B1', 'مع ذلك', 'trotzdem', 'wortstellung',
    'Am Ende benutzt du trotzdem mit Verbzweit',
    'في النهاية تستعمل trotzdem والفعل ثانيًا.',
    [
      ['trotzdem plus V2', 'trotzdem لا ترسل الفعل إلى الآخر', 'trotzdem ich gehe خطأ', 'trotzdem ich gehe', 'الفعل ثاني'],
      ['obwohl ist anders', 'obwohl آخرًا وtrotzdem ثانيًا', 'لا تُنسخ القاعدة', 'trotzdem ich müde bin', 'هذا ترتيب obwohl'],
      ['Punkt oder Komma', 'جملة جديدة ممكنة', 'الرابط لا يبتلع الفعل', 'Es regnet, trotzdem gehe ich richtig mit V2', 'الشكل سليم إن بقي الفعل ثانيًا'],
      ['dennoch ähnlich', 'dennoch أيضًا V2', 'لا نهاية الجملة', 'dennoch ich bleibe', 'الفعل ثاني']
    ],
    [
      ['Es regnet, trotzdem gehe ich.', 'تمطر ومع ذلك أذهب', 'Es regnet, trotzdem ich gehe', 'gehe ثانيًا', 'gehe'],
      ['Ich bin müde, trotzdem lerne ich.', 'أنا متعب ومع ذلك أدرس', 'Ich bin müde, trotzdem ich lerne', 'lerne ثانيًا', 'lerne'],
      ['Der Kurs ist teuer, trotzdem buche ich.', 'الدورة غالية ومع ذلك أحجز', 'Der Kurs ist teuer, trotzdem ich buche', 'buche ثانيًا', 'buche'],
      ['Es ist spät, dennoch bleibe ich.', 'الوقت متأخر ومع ذلك أبقى', 'Es ist spät, dennoch ich bleibe', 'bleibe ثانيًا', 'bleibe']
    ],
    'Es regnet. Trotzdem gehe ich.',
    'Trotzdem lerne ich.',
    'Schreibe morgen trotzdem mit V2.',
    'غدًا اكتب trotzdem والفعل ثانيًا.'),

  U('b1-u1-l5', 'B1', 'لكي', 'damit und um zu', 'wortstellung',
    'Am Ende unterscheidest du damit und um zu',
    'في النهاية تفرّق بين damit وum zu.',
    [
      ['damit neuer Subjekt', 'damit إذا تغيّر الفاعل', 'um zu لا يحتمل فاعلًا ثانيًا', 'um zu sie versteht', 'فاعل ثانٍ يحتاج damit'],
      ['um zu gleicher Subjekt', 'um zu إذا بقي الفاعل', 'damit ممكن لكن um zu أخف', 'damit ich arbeite ich selbst umständlich', 'الفاعل نفسه um zu'],
      ['zu plus Infinitiv', 'zu قبل المصدر', 'لا to', 'um to arbeiten', 'to إنجليزية'],
      ['damit Verb am Ende', 'بعد damit الفعل آخرًا', 'لا V2', 'damit sie versteht mich vor dem Verb', 'versteht آخرًا']
    ],
    [
      ['Ich lerne Deutsch, damit ich arbeiten kann.', 'أتعلم الألمانية كي أستطيع العمل', 'Ich lerne Deutsch, um zu sie arbeitet', 'فاعل ثانٍ damit', 'damit'],
      ['Ich lerne Deutsch, um zu arbeiten.', 'أتعلم الألمانية لكي أعمل', 'Ich lerne Deutsch, um to arbeiten', 'zu لا to', 'zu'],
      ['Sie spricht laut, damit er sie hört.', 'تتكلم بصوت عالٍ كي يسمعها', 'Sie spricht laut, um zu er hört', 'فاعل ثانٍ damit', 'hört'],
      ['Ich spare, um zu reisen.', 'أوفّر لكي أسافر', 'Ich spare, damit ich reise als einzige Form hier', 'الفاعل نفسه um zu', 'um']
    ],
    'Ich lerne Deutsch, um zu arbeiten.',
    'Ich lerne Deutsch, damit ich arbeiten kann.',
    'Bilde morgen damit und um zu.',
    'غدًا كوّن damit وum zu.'),

  U('b1-u1-l6', 'B1', 'المصدر مع zu', 'Infinitiv mit zu', 'wortstellung',
    'Am Ende benutzt du zu vor dem Infinitiv',
    'في النهاية تستعمل zu قبل المصدر.',
    [
      ['vorhaben zu', 'vorhaben يأخذ zu', 'بلا zu ناقص', 'ich habe vor umziehen', 'zu مفقود'],
      ['zu am Ende', 'zu والمصدر آخرًا', 'لا في الوسط بلا داعٍ', 'ich habe zu vor umziehen falsch', 'المصدر آخرًا'],
      ['trennbar: einzuladen', 'zu داخل الفعل المنفصل', 'لا zu einladen', 'ich habe vor zu einladen', 'zu داخل الكلمة'],
      ['kein zu nach Modal', 'بعد الفعل الناقص بلا zu', 'ich muss zu gehen خطأ', 'ich muss zu gehen', 'بعد muss بلا zu']
    ],
    [
      ['Ich habe vor, umzuziehen.', 'أنوي الانتقال', 'Ich habe vor umziehen', 'zu داخل umziehen', 'umzuziehen'],
      ['Ich versuche, pünktlich zu sein.', 'أحاول أن أكون في الوقت', 'Ich versuche, pünktlich sein', 'zu مفقود', 'zu'],
      ['Es ist wichtig, das zu sagen.', 'من المهم قول هذا', 'Es ist wichtig, das sagen', 'zu مفقود', 'zu'],
      ['Ich muss gehen.', 'يجب أن أذهب', 'Ich muss zu gehen', 'بعد muss بلا zu', 'muss']
    ],
    'Ich habe vor, umzuziehen.',
    'Ich versuche, pünktlich zu sein.',
    'Bilde morgen zwei Sätze mit zu.',
    'غدًا كوّن جملتين مع zu.'),

  U('b1-u1-l7', 'B1', 'لو كان', 'Irrealis', 'konjugation',
    'Am Ende bildest du einen irrealen wenn-Satz',
    'في النهاية تبني جملة لو غير واقعية.',
    [
      ['wenn ich Zeit hätte', 'غير الواقع hätte', 'habe يجعله واقعًا', 'wenn ich Zeit habe, käme ich als Irreal gemischt', 'الخيال hätte'],
      ['käme ich', 'الجواب Konjunktiv', 'komme يبقى واقعًا', 'dann komme ich sicher', 'الخيال käme'],
      ['wäre schön', 'wäre للحالة', 'ist واقع', 'es ist schön, wenn ich Zeit hätte gemischt', 'الخيال wäre'],
      ['kein would', 'would ليست الصيغة', 'würde أو الشكل الخاص', 'ich would kommen', 'would إنجليزية']
    ],
    [
      ['Wenn ich Zeit hätte, käme ich.', 'لو كان عندي وقت لجئت', 'Wenn ich Zeit habe, komme ich sicher', 'الخيال hätte', 'hätte'],
      ['Es wäre schön.', 'سيكون جميلًا', 'Es ist schön als Irreal', 'الخيال wäre', 'wäre'],
      ['Ich würde bleiben.', 'لبقيت', 'Ich would bleiben', 'would ليست الصيغة', 'würde'],
      ['Wenn ich reich wäre, reiste ich.', 'لو كنت غنيًا لسافرت', 'Wenn ich reich bin, reiste ich', 'الخيال wäre', 'wäre']
    ],
    'Wenn ich Zeit hätte, käme ich.',
    'Es wäre schön.',
    'Bilde morgen einen irrealen Satz.',
    'غدًا كوّن جملة خيال.'),

  U('b1-u1-l8', 'B1', 'تصريف n', 'n-Deklination', 'deklination',
    'Am Ende markierst du den Studenten im Dativ und Akkusativ',
    'في النهاية تعلّم Student في الداتيف والنصب.',
    [
      ['den Studenten', 'النصب en', 'den Student ناقص', 'den Student', 'النهاية en'],
      ['dem Studenten', 'الداتيف en أيضًا', 'dem Student ناقص', 'dem Student', 'en في الداتيف'],
      ['der Student', 'الرفع بلا en', 'der Studenten im Nominativ falsch', 'der Studenten wartet', 'الرفع Student'],
      ['der Name', 'Name من العائلة نفسها', 'den Name ناقص', 'den Name', 'النصب Namen']
    ],
    [
      ['Ich sehe den Studenten.', 'أرى الطالب', 'Ich sehe den Student', 'النصب Studenten', 'Studenten'],
      ['Ich helfe dem Studenten.', 'أساعد الطالب', 'Ich helfe dem Student', 'الداتيف Studenten', 'Studenten'],
      ['Der Student wartet.', 'الطالب ينتظر', 'Der Studenten wartet', 'الرفع Student', 'Student'],
      ['Ich kenne den Namen.', 'أعرف الاسم', 'Ich kenne den Name', 'النصب Namen', 'Namen']
    ],
    'Der Student wartet. Ich sehe den Studenten.',
    'Ich helfe dem Studenten.',
    'Bilde morgen Nominativ und Akkusativ.',
    'غدًا كوّن الرفع والنصب.'),

  U('b1-u2-l1', 'B1', 'المستقبل', 'Futur', 'konjugation',
    'Am Ende sagst du eine feste Absicht mit werden',
    'في النهاية تقول قصدًا ثابتًا مع werden.',
    [
      ['ich werde', 'werden للقصد أو المستقبل', 'will أضعف للخطة المحايدة', 'ich will das morgen erledigen als Plan neutral', 'الخطة werde'],
      ['Infinitiv am Ende', 'المصدر آخرًا', 'لا بعد werde مباشرة إن طال المفعول', 'ich werde erledigen das morgen', 'das يتقدم'],
      ['kein will als Futur', 'will رغبة لا زمن', 'لا تُستعمل لكل مستقبل', 'morgen will die Straße repariert', 'المجهول المستقبل wird'],
      ['es wird regnen', 'التوقع wird', 'لا it will rain', 'es will regnen', 'will ليست التوقع']
    ],
    [
      ['Ich werde das morgen erledigen.', 'سأنهي هذا غدًا', 'Ich werde erledigen das morgen', 'المصدر آخرًا', 'erledigen'],
      ['Es wird regnen.', 'ستمطر', 'Es will regnen', 'التوقع wird', 'wird'],
      ['Wir werden pünktlich sein.', 'سنكون في الوقت', 'Wir werden sein pünktlich', 'sein آخرًا', 'sein'],
      ['Sie wird anrufen.', 'ستتصل', 'Sie will anrufen als Futur', 'المستقبل wird', 'wird']
    ],
    'Ich werde das morgen erledigen.',
    'Es wird regnen.',
    'Sage morgen zwei Sätze mit werden.',
    'غدًا قل جملتين مع werden.'),

  U('b1-u2-l2', 'B1', 'سرد الماضي', 'Präteritum erzählen', 'konjugation',
    'Am Ende erzählst du eine kurze Geschichte im Präteritum',
    'في النهاية تحكي حكاية قصيرة في الماضي السردي.',
    [
      ['lebte', 'السرد يعيش lebte', 'Perfekt للحوار والماضي السردي للخلفية', 'hat gelebt als Erzählung allein', 'السرد lebte'],
      ['ging', 'gehen السردي ging', 'bin gegangen حوار', 'ist gegangen als Romanzeile', 'السرد ging'],
      ['es gab', 'الوجود gab', 'hat gegeben أقل سردًا هنا', 'es hat gegeben ein Haus', 'السرد gab'],
      ['die Kette', 'الجمل تتصل بلا deshalb في كل سطر', 'لا تكرار الرابط', 'deshalb deshalb ging sie', 'الرابط مرة لا في كل جملة']
    ],
    [
      ['Früher lebte sie auf dem Land.', 'سابقًا كانت تعيش في الريف', 'Früher hat sie auf dem Land gelebt als Erzählung', 'السرد lebte', 'lebte'],
      ['Sie ging jeden Tag zur Schule.', 'كانت تذهب كل يوم إلى المدرسة', 'Sie ist jeden Tag gegangen als Erzählung', 'السرد ging', 'ging'],
      ['Es gab ein kleines Haus.', 'كان هناك بيت صغير', 'Es hat gegeben ein kleines Haus', 'السرد gab', 'gab'],
      ['Dann kam der Winter.', 'ثم جاء الشتاء', 'Dann ist der Winter gekommen als Erzählung', 'السرد kam', 'kam']
    ],
    'Früher lebte sie auf dem Land. Es gab ein kleines Haus.',
    'Früher lebte sie auf dem Land.',
    'Erzähle morgen vier kurze Präteritum-Sätze.',
    'غدًا احكِ أربع جمل ماضٍ سردي.'),

  U('b1-u2-l3', 'B1', 'الإضافة', 'Genitiv', 'deklination',
    'Am Ende benutzt du wegen des und trotz des',
    'في النهاية تستعمل wegen des وtrotz des.',
    [
      ['wegen des Wetters', 'wegen يأخذ الإضافة', 'wegen dem مسموع لا هذا الدرس', 'wegen dem Wetter', 'الدرس des'],
      ['trotz des Regens', 'trotz كذلك', 'trotz dem ليس هدف الدرس', 'trotz dem Regen', 'الدرس des'],
      ['des Mannes', 'المذكر es', 'des Mann ناقص', 'des Mann', 'النهاية es'],
      ['der Frau', 'المؤنث der في الإضافة', 'die Frau bleibt nicht', 'wegen die Frau', 'الإضافة der']
    ],
    [
      ['Wegen des Wetters bleiben wir.', 'بسبب الطقس نبقى', 'Wegen dem Wetter bleiben wir', 'الدرس des', 'des'],
      ['Trotz des Regens gehen wir.', 'رغم المطر نذهب', 'Trotz dem Regen gehen wir', 'الدرس des', 'des'],
      ['Das Auto des Mannes ist neu.', 'سيارة الرجل جديدة', 'Das Auto des Mann ist neu', 'النهاية es', 'Mannes'],
      ['Die Tasche der Frau ist schwer.', 'حقيبة المرأة ثقيلة', 'Die Tasche die Frau ist schwer', 'الإضافة der', 'der']
    ],
    'Wegen des Wetters bleiben wir.',
    'Trotz des Regens gehen wir.',
    'Bilde morgen wegen des und trotz des.',
    'غدًا كوّن wegen des وtrotz des.'),

  U('b1-u2-l4', 'B1', 'الصفة كاملة', 'Adjektivdeklination', 'deklination',
    'Am Ende setzt du die Endung nach der, ein und ohne Artikel',
    'في النهاية تضع النهاية بعد der وein وبلا أداة.',
    [
      ['der gute Plan', 'بعد der النهاية e', 'der guter Plan خطأ', 'der guter Plan', 'بعد der: e'],
      ['ein guter Plan', 'بعد ein النهاية er', 'ein gute Plan خطأ', 'ein gute Plan', 'بعد ein: er'],
      ['guter Plan', 'بلا أداة er', 'gute Plan بلا أداة خطأ في المذكر', 'gute Plan ohne Artikel', 'بلا أداة guter'],
      ['mit gutem Plan', 'بعد mit الداتيف em', 'mit guter Plan خطأ', 'mit guter Plan', 'الداتيف gutem']
    ],
    [
      ['Der gute Plan überzeugt.', 'الخطة الجيدة تقنع', 'Der guter Plan überzeugt', 'بعد der: gute', 'gute'],
      ['Ein guter Plan fehlt.', 'تنقص خطة جيدة', 'Ein gute Plan fehlt', 'بعد ein: guter', 'guter'],
      ['Guter Plan, schlechte Zeit.', 'خطة جيدة ووقت سيئ', 'Gute Plan, schlechte Zeit', 'بلا أداة Guter', 'Guter'],
      ['Mit gutem Plan starten wir.', 'نبدأ بخطة جيدة', 'Mit guter Plan starten wir', 'الداتيف gutem', 'gutem']
    ],
    'Der gute Plan überzeugt. Ein guter Plan fehlt.',
    'Mit gutem Plan starten wir.',
    'Schreibe morgen drei Endungen.',
    'غدًا اكتب ثلاث نهايات.'),

  U('b1-u2-l5', 'B1', 'als وwenn', 'als und wenn', 'wortstellung',
    'Am Ende unterscheidest du als einmal und wenn wiederholt',
    'في النهاية تفرّق بين مرة واحدة وتكرار.',
    [
      ['als einmal', 'als للمرة في الماضي', 'wenn هنا خطأ', 'wenn ich klein war einmal', 'المرة als'],
      ['wenn wiederholt', 'wenn للتكرار أو الحاضر', 'als لا للحاضر', 'als ich krank bin', 'الحاضر wenn'],
      ['Verb am Ende', 'كلاهما يرسل الفعل إلى الآخر', 'als ich war klein خطأ', 'als ich war klein', 'war آخرًا'],
      ['wann ist Frage', 'wann سؤال لا سرد', 'لا تخلط', 'wann ich klein war, lebte ich', 'السرد als']
    ],
    [
      ['Als ich klein war, lebte ich hier.', 'عندما كنت صغيرًا عشت هنا', 'Wenn ich klein war, lebte ich hier einmal', 'المرة als', 'Als'],
      ['Wenn ich krank bin, bleibe ich.', 'كلما مرضت أبقى', 'Als ich krank bin, bleibe ich', 'التكرار wenn', 'Wenn'],
      ['Als sie ankam, regnete es.', 'عندما وصلت أمطرت', 'Als sie ankam es regnete ohne Komma und Ende', 'الترتيب والفاصلة', 'ankam'],
      ['Wenn er Zeit hat, ruft er an.', 'كلما كان عنده وقت يتصل', 'Wann er Zeit hat, ruft er an', 'التكرار wenn', 'Wenn']
    ],
    'Als ich klein war, lebte ich hier.',
    'Wenn ich krank bin, bleibe ich.',
    'Bilde morgen als und wenn.',
    'غدًا كوّن als وwenn.'),

  U('b1-u2-l6', 'B1', 'السؤال غير المباشر', 'Indirekte Frage', 'wortstellung',
    'Am Ende stellst du eine indirekte Frage mit Verb am Ende',
    'في النهاية تبني سؤالًا غير مباشر والفعل في الآخر.',
    [
      ['ob am Ende', 'ob للسؤال بلا أداة', 'الفعل آخرًا', 'ob er kommt heute vor kommt', 'kommt آخرًا'],
      ['kein Verbzweit', 'بعد ob لا V2', 'ob kommt er خطأ', 'ich weiß nicht, ob kommt er', 'الضمير قبل الفعل'],
      ['W-Wort bleibt', 'أداة السؤال تبقى والفعل آخرًا', 'wie heißt er في النقل يتغير الترتيب', 'ich weiß nicht, wie heißt er', 'heißt آخرًا'],
      ['Komma', 'الفاصلة قبل السؤال غير المباشر', 'بلاها يضيع الحد', 'ich weiß nicht ob er kommt', 'الفاصلة لازمة']
    ],
    [
      ['Ich weiß nicht, ob er kommt.', 'لا أعرف إن كان سيأتي', 'Ich weiß nicht, ob kommt er', 'kommt آخرًا', 'kommt'],
      ['Ich weiß nicht, wie er heißt.', 'لا أعرف ما اسمه', 'Ich weiß nicht, wie heißt er', 'heißt آخرًا', 'heißt'],
      ['Sie fragt, wann der Zug fährt.', 'تسأل متى يتحرك القطار', 'Sie fragt, wann fährt der Zug', 'fährt آخرًا', 'fährt'],
      ['Kannst du sagen, wo er wohnt?', 'هل تقول أين يسكن؟', 'Kannst du sagen, wo wohnt er?', 'wohnt آخرًا', 'wohnt']
    ],
    'Ich weiß nicht, ob er kommt.',
    'Ich weiß nicht, wie er heißt.',
    'Bilde morgen ob und wie indirekt.',
    'غدًا كوّن ob وwie غير مباشرين.'),

  U('b1-u2-l7', 'B1', 'الظن', 'Vermutung', 'register',
    'Am Ende markierst du eine Vermutung mit könnte oder wohl',
    'في النهاية تعلّم الظن بـ könnte أو wohl.',
    [
      ['könnte', 'könnte ظن لا حقيقة', 'ist يغلق الظن', 'er ist sicher unterwegs als Vermutung', 'اليقين ليس ظنًا'],
      ['wohl', 'wohl تخفف الجملة', 'بلاها تصبح خبرًا', 'er ist unterwegs als sichere Nachricht', 'wohl تحمي الظن'],
      ['vielleicht', 'vielleicht ممكن', 'لا maybe', 'maybe er kommt', 'maybe إنجليزية'],
      ['ich bin nicht sicher', 'حد الظن يُقال', 'لا أدّعِ المعرفة', 'ich weiß es genau obwohl nicht', 'الحد جزء من الصدق']
    ],
    [
      ['Er könnte unterwegs sein.', 'ربما هو في الطريق', 'Er ist sicher unterwegs', 'الظن könnte', 'könnte'],
      ['Sie ist wohl zu Hause.', 'أغلب الظن أنها في البيت', 'Sie ist zu Hause als Tatsache hier', 'wohl يحفظ الظن', 'wohl'],
      ['Vielleicht kommt er später.', 'ربما يأتي لاحقًا', 'Maybe kommt er später', 'vielleicht لا maybe', 'Vielleicht'],
      ['Ich bin nicht sicher.', 'لست متأكدًا', 'Ich weiß es genau', 'الحد ليس يقينًا', 'sicher']
    ],
    'Er könnte unterwegs sein. Ich bin nicht sicher.',
    'Ich bin nicht sicher.',
    'Sage morgen eine Vermutung mit könnte.',
    'غدًا قل ظنًا مع könnte.'),

  U('b1-u2-l8', 'B1', 'قراءة رقم', 'Statistik', 'pruefstrategie',
    'Am Ende beschreibst du eine Zahl bevor du sie deutest',
    'في النهاية تصف الرقم قبل أن تؤوّله.',
    [
      ['die Zahl ist gestiegen', 'الارتفاع gestiegen', 'لا went up', 'die Zahl went up', 'went إنجليزية'],
      ['im Vergleich', 'المقارنة im Vergleich', 'لا compared to خليط', 'compared zum Vorjahr', 'compared إنجليزية'],
      ['zuerst beschreiben', 'الوصف قبل الرأي', 'الرأي أولًا يخسر المهمة', 'ich finde die Zahl schlecht zuerst', 'الوصف أولًا'],
      ['keine Ursache ohne Quelle', 'السبب لا يُخترع', 'الرسم لا يقول السبب وحده', 'die Grafik beweist die Ursache', 'لا سبب بلا مصدر']
    ],
    [
      ['Die Zahl ist gestiegen.', 'ارتفع الرقم', 'Die Zahl went up', 'الارتفاع gestiegen', 'gestiegen'],
      ['Im Vergleich zum Vorjahr.', 'مقارنة بالعام السابق', 'Compared zum Vorjahr', 'المقارنة Im Vergleich', 'Vergleich'],
      ['Zuerst beschreibe ich die Zahl.', 'أولًا أصف الرقم', 'Zuerst sage ich meine Meinung', 'الوصف قبل الرأي', 'Zuerst'],
      ['Die Quelle nennt keine Ursache.', 'المصدر لا يذكر سببًا', 'Die Grafik beweist die Ursache', 'لا سبب بلا مصدر', 'Ursache']
    ],
    'Die Zahl ist gestiegen. Die Quelle nennt keine Ursache.',
    'Zuerst beschreibe ich die Zahl.',
    'Beschreibe morgen eine Zahl ohne Ursache.',
    'غدًا صف رقمًا بلا سبب.'),

  U('b1-u3-l1', 'B1', 'طلب عمل', 'Bewerbung', 'register',
    'Am Ende nennst du die Stelle und den Anhang',
    'في النهاية تسمّي الوظيفة والمرفق.',
    [
      ['ich bewerbe mich', 'الطلب sich bewerben', 'لا I apply', 'ich apply mich', 'apply إنجليزية'],
      ['um die Stelle', 'um لا für في هذا الإطار', 'für die Stelle أضعف هنا', 'ich bewerbe mich für die Stelle', 'الإطار um'],
      ['anbei', 'المرفق anbei', 'لا attached خليط', 'attached ist der Lebenslauf', 'attached إنجليزية'],
      ['Sehr geehrte', 'التحية الرسمية', 'Hallo an die Firma falsch', 'Hallo Firma', 'المقام Sehr geehrte']
    ],
    [
      ['Ich bewerbe mich um die Stelle.', 'أتقدم إلى الوظيفة', 'Ich bewerbe mich für die Stelle', 'الإطار um', 'um'],
      ['Anbei sende ich meinen Lebenslauf.', 'أرفق سيرتي', 'Attached sende ich meinen Lebenslauf', 'المرفق Anbei', 'Anbei'],
      ['Sehr geehrte Damen und Herren,', 'السادة المحترمون', 'Hallo Firma,', 'التحية الرسمية', 'geehrte'],
      ['Mit freundlichen Grüßen', 'مع التحية', 'Viele Grüße an die Firma', 'الختام الرسمي', 'freundlichen']
    ],
    'Ich bewerbe mich um die Stelle. Anbei der Lebenslauf.',
    'Ich bewerbe mich um die Stelle.',
    'Schreibe morgen Anrede und um die Stelle.',
    'غدًا اكتب التحية وum die Stelle.'),

  U('b1-u3-l2', 'B1', 'شكوى', 'Beschwerde', 'register',
    'Am Ende bittest du um eine Lösung ohne Beleidigung',
    'في النهاية تطلب حلًا بلا إهانة.',
    [
      ['ich möchte mich beschweren', 'الشكوى إطار', 'لا you are bad', 'Sie sind schlecht', 'الإهانة ليست شكوى'],
      ['die Lieferung kam zu spät', 'الواقعة أولًا', 'الرأي قبل الواقعة يضعف', 'ich finde Sie unfähig zuerst', 'الواقعة أولًا'],
      ['ich bitte um eine Lösung', 'الطلب bitten um', 'لا I demand', 'ich demand eine Lösung', 'demand إنجليزية'],
      ['der Ton bleibt sachlich', 'النبرة موضوعية', 'الصراخ لا يرفع الدرجة', 'das ist eine Frechheit als einziger Satz', 'النبرة جزء من المهمة']
    ],
    [
      ['Ich möchte mich beschweren.', 'أود أن أشتكي', 'Sie sind schlecht', 'الشكوى إطار لا إهانة', 'beschweren'],
      ['Die Lieferung kam zu spät.', 'وصل التسليم متأخرًا', 'Ich finde Sie unfähig', 'الواقعة أولًا', 'spät'],
      ['Ich bitte um eine Lösung.', 'أطلب حلًا', 'Ich demand eine Lösung', 'الطلب bitte um', 'bitte'],
      ['Der Ton bleibt sachlich.', 'النبرة تبقى موضوعية', 'Das ist eine Frechheit', 'النبرة جزء من الشكوى', 'sachlich']
    ],
    'Die Lieferung kam zu spät. Ich bitte um eine Lösung.',
    'Ich bitte um eine Lösung.',
    'Schreibe morgen Tatsache und Bitte.',
    'غدًا اكتب واقعة وطلبًا.'),

  U('b1-u3-l3', 'B1', 'البيئة', 'Umwelt', 'lexik-kollokation',
    'Am Ende nennst du eine Gewohnheit und eine Folge',
    'في النهاية تسمّي عادة ونتيجة.',
    [
      ['Müll trennen', 'الفرز trennen', 'لا sort the trash خليط', 'den Müll sorten', 'sorten ليست الفعل'],
      ['sparen', 'التوفير sparen', 'لا save money خليط', 'Geld saven', 'saven ليست الفعل'],
      ['wegwerfen', 'الرمي wegwerfen', 'لا throw away', 'wegthrowen', 'الفعل wegwerfen'],
      ['die Folge', 'النتيجة تُقال بعد العادة', 'لا قفز إلى الشعار', 'die Umwelt ist wichtig ohne Folge', 'النتيجة مطلوبة']
    ],
    [
      ['Wir trennen den Müll.', 'نفرز النفايات', 'Wir sorten den Müll', 'الفرز trennen', 'trennen'],
      ['Wir sparen Energie.', 'نوفّر الطاقة', 'Wir saven Energie', 'التوفير sparen', 'sparen'],
      ['Man sollte weniger wegwerfen.', 'ينبغي أن نرمِ أقل', 'Man sollte weniger throwen', 'الرمي wegwerfen', 'wegwerfen'],
      ['Die Folge ist weniger Müll.', 'النتيجة نفايات أقل', 'Die Umwelt ist wichtig nur so', 'النتيجة مطلوبة', 'Folge']
    ],
    'Wir trennen den Müll. Die Folge ist weniger Abfall.',
    'Wir sparen Energie.',
    'Sage morgen Gewohnheit und Folge.',
    'غدًا قل عادة ونتيجة.'),

  U('b1-u3-l4', 'B1', 'الإعلام', 'Medien', 'pruefstrategie',
    'Am Ende trennst du Nachricht und Meinung',
    'في النهاية تفصل الخبر عن الرأي.',
    [
      ['der Autor meint', 'الرأي يُنسب', 'لا النص يقول كحقيقة إن كان رأيًا', 'der Text beweist die Meinung', 'الرأي ليس برهانًا'],
      ['die Schlagzeile', 'العنوان قد يعد بأكثر', 'لا تصدق العنوان وحده', 'die Schlagzeile ist der Text', 'العنوان ليس النص'],
      ['zusammenfassen', 'التلخيص قبل الحكم', 'الحكم أولًا يضيع المهمة', 'ich urteile vor der Zusammenfassung', 'التلخيص أولًا'],
      ['Quelle nennen', 'المصدر يُذكر', 'بلا مصدر لا قوة', 'ich habe das irgendwo gelesen', 'المصدر محدد']
    ],
    [
      ['Der Autor meint, dass das riskant ist.', 'يرى الكاتب أن هذا خطر', 'Der Text beweist die Meinung', 'الرأي يُنسب', 'meint'],
      ['Die Schlagzeile ist nicht der Text.', 'العنوان ليس النص', 'Die Schlagzeile ist der ganze Text', 'العنوان وعد لا نص', 'Schlagzeile'],
      ['Zuerst fasse ich zusammen.', 'أولًا ألخص', 'Zuerst urteile ich', 'التلخيص قبل الحكم', 'Zuerst'],
      ['Die Quelle heißt nicht irgendwo.', 'المصدر ليس مكانًا مبهمًا', 'Ich habe das irgendwo gelesen', 'المصدر محدد', 'Quelle']
    ],
    'Zuerst fasse ich zusammen. Der Autor meint, dass das riskant ist.',
    'Die Schlagzeile ist nicht der Text.',
    'Trenne morgen eine Tatsache von einer Meinung.',
    'غدًا افصل واقعة عن رأي.'),

  U('b1-u3-l5', 'B1', 'التكوين', 'Ausbildung', 'lexik-kollokation',
    'Am Ende vergleichst du zwei Wege',
    'في النهاية تقارن مسارين.',
    [
      ['die Ausbildung', 'التكوين Ausbildung', 'لا formation خليط', 'die Formation', 'Formation ليست الكلمة'],
      ['das Studium', 'الدراسة الجامعية Studium', 'لا study كاسم وحيد', 'das Study', 'Study إنجليزية'],
      ['einerseits', 'من جهة einerseits', 'لا on one hand خليط', 'on one hand das Studium', 'on one hand إنجليزية'],
      ['andererseits', 'من جهة أخرى', 'لا but also كرابط وحيد', 'but also die Ausbildung', 'but إنجليزية']
    ],
    [
      ['Die Ausbildung dauert drei Jahre.', 'التكوين يستغرق ثلاث سنوات', 'Die Formation dauert drei Jahre', 'الكلمة Ausbildung', 'Ausbildung'],
      ['Das Studium ist länger.', 'الدراسة الجامعية أطول', 'Das Study ist länger', 'الكلمة Studium', 'Studium'],
      ['Einerseits ist die Ausbildung praktisch.', 'من جهة التكوين عملي', 'On one hand ist sie praktisch', 'الرابط Einerseits', 'Einerseits'],
      ['Andererseits fehlt die Zeit.', 'من جهة أخرى الوقت ناقص', 'But also fehlt die Zeit', 'الرابط Andererseits', 'Andererseits']
    ],
    'Einerseits ist die Ausbildung praktisch. Andererseits fehlt die Zeit.',
    'Die Ausbildung dauert drei Jahre.',
    'Vergleiche morgen zwei Wege.',
    'غدًا قارن مسارين.'),

  U('b1-u3-l6', 'B1', 'المدينة', 'Stadt', 'lexik-kollokation',
    'Am Ende nennst du einen Vorteil und einen Nachteil',
    'في النهاية تسمّي حسنة ومساوئ.',
    [
      ['der Vorteil', 'الحسنة Vorteil', 'لا advantage ككلمة', 'der Advantage', 'Advantage إنجليزية'],
      ['der Nachteil', 'المساوئ Nachteil', 'لا disadvantage', 'der Disadvantage', 'Disadvantage إنجليزية'],
      ['die Lage', 'الموقع Lage', 'لا location ككلمة وحيدة', 'die Location ist gut', 'Location إنجليزية'],
      ['der Lärm', 'الضجيج Lärm', 'لا noise', 'der Noise', 'Noise إنجليزية']
    ],
    [
      ['Der Vorteil ist die Lage.', 'الحسنة هي الموقع', 'Der Advantage ist die Lage', 'الحسنة Vorteil', 'Vorteil'],
      ['Der Nachteil ist der Lärm.', 'المساوئ هي الضجيج', 'Der Disadvantage ist der Lärm', 'المساوئ Nachteil', 'Nachteil'],
      ['Die Lage ist ruhig.', 'الموقع هادئ', 'Die Location ist ruhig', 'الموقع Lage', 'Lage'],
      ['Der Lärm stört mich.', 'الضجيج يزعجني', 'Der Noise stört mich', 'الضجيج Lärm', 'Lärm']
    ],
    'Der Vorteil ist die Lage. Der Nachteil ist der Lärm.',
    'Der Nachteil ist der Lärm.',
    'Nenne morgen Vorteil und Nachteil.',
    'غدًا سمِّ حسنة ومساوئ.'),

  U('b1-u3-l7', 'B1', 'التأمين', 'Versicherung', 'lexik-kollokation',
    'Am Ende sagst du Anmeldung und Versicherung in einem Satz',
    'في النهاية تقول التسجيل والتأمين في جملة.',
    [
      ['die Anmeldung', 'التسجيل Anmeldung', 'لا registration خليط', 'die Registration', 'Registration إنجليزية'],
      ['die Versicherung', 'التأمين Versicherung', 'لا insurance ككلمة وحيدة', 'die Insurance', 'Insurance إنجليزية'],
      ['das Formular', 'الاستمارة Formular', 'لا form ككلمة وحيدة', 'das Form', 'Form إنجليزية'],
      ['unvollständig', 'الناقص unvollständig', 'لا not complete خليط', 'das Formular ist not complete', 'not إنجليزية']
    ],
    [
      ['Ich habe mich angemeldet.', 'سجّلت نفسي', 'Ich habe die Registration gemacht', 'التسجيل angemeldet', 'angemeldet'],
      ['Die Versicherung übernimmt das.', 'التأمين يتحمل هذا', 'Die Insurance übernimmt das', 'التأمين Versicherung', 'Versicherung'],
      ['Das Formular ist unvollständig.', 'الاستمارة ناقصة', 'Das Formular ist not complete', 'الناقص unvollständig', 'unvollständig'],
      ['Bitte füllen Sie das aus.', 'املأوا هذا من فضلكم', 'Bitte fillen Sie das', 'التعبئة ausfüllen', 'aus']
    ],
    'Ich habe mich angemeldet. Die Versicherung übernimmt das.',
    'Das Formular ist unvollständig.',
    'Sage morgen Anmeldung und Formular.',
    'غدًا قل التسجيل والاستمارة.'),

  U('b1-u3-l8', 'B1', 'الاستهلاك', 'Konsum', 'lexik-kollokation',
    'Am Ende begründest du eine Kaufentscheidung',
    'في النهاية تعلّل قرار شراء.',
    [
      ['sich leisten', 'القدرة المادية sich leisten', 'لا can buy كإطار', 'ich can das leisten', 'can إنجليزية'],
      ['es lohnt sich', 'يستحق es lohnt sich', 'لا it is worth خليط', 'es ist worth', 'worth إنجليزية'],
      ['der Beleg', 'الإيصال Beleg', 'لا receipt ككلمة وحيدة', 'der Receipt', 'Receipt إنجليزية'],
      ['nicht nur sondern auch', 'التوسيع ليس فقط بل أيضًا', 'لا not only خليط', 'not only der Preis', 'not only إنجليزية']
    ],
    [
      ['Ich kann mir das leisten.', 'أقدر على هذا ماديًا', 'Ich can mir das leisten', 'القدرة leisten', 'leisten'],
      ['Es lohnt sich nicht.', 'هذا لا يستحق', 'Es ist worth nicht', 'الإطار lohnt sich', 'lohnt'],
      ['Haben Sie einen Beleg?', 'هل عندكم إيصال؟', 'Haben Sie einen Receipt?', 'الإيصال Beleg', 'Beleg'],
      ['Nicht nur der Preis zählt.', 'ليس السعر وحده', 'Not only der Preis zählt', 'الإطار Nicht nur', 'nur']
    ],
    'Ich kann mir das leisten. Nicht nur der Preis zählt.',
    'Haben Sie einen Beleg?',
    'Begründe morgen einen Kauf in zwei Sätzen.',
    'غدًا علّل شراءً في جملتين.'),

  U('b1-u4-l1', 'B1', 'التطوع', 'Ehrenamt', 'lexik-kollokation',
    'Am Ende beschreibst du eine Erfahrung',
    'في النهاية تصف تجربة.',
    [
      ['ehrenamtlich', 'التطوع ehrenamtlich', 'لا volunteer كصفة وحيدة', 'ich arbeite volunteer', 'volunteer إنجليزية'],
      ['der Verein', 'الجمعية Verein', 'لا club ككلمة وحيدة هنا', 'der Club als einzige Form', 'الدرس Verein'],
      ['aus eigener Erfahrung', 'من التجربة إطار', 'لا from my experience خليط', 'from meiner Erfahrung', 'from إنجليزية'],
      ['das habe ich erlebt', 'العام erlebt', 'لا I lived this خليط', 'ich lived das', 'lived إنجليزية']
    ],
    [
      ['Ich arbeite ehrenamtlich.', 'أعمل تطوعًا', 'Ich arbeite volunteer', 'التطوع ehrenamtlich', 'ehrenamtlich'],
      ['Der Verein sucht Hilfe.', 'الجمعية تبحث عن مساعدة', 'Der Club sucht Hilfe als einzige Form', 'الجمعية Verein', 'Verein'],
      ['Aus eigener Erfahrung sage ich das.', 'أقول هذا من تجربتي', 'From meiner Erfahrung sage ich das', 'الإطار Aus eigener Erfahrung', 'Erfahrung'],
      ['Das habe ich selbst erlebt.', 'عشت هذا بنفسي', 'Ich lived das selbst', 'التجربة erlebt', 'erlebt']
    ],
    'Ich arbeite ehrenamtlich. Das habe ich selbst erlebt.',
    'Aus eigener Erfahrung sage ich das.',
    'Beschreibe morgen eine Erfahrung in zwei Sätzen.',
    'غدًا صف تجربة في جملتين.'),

  U('b1-u4-l2', 'B1', 'رحلة معقدة', 'Reiseplanung', 'lexik-kollokation',
    'Am Ende nennst du einen Plan und eine Alternative',
    'في النهاية تسمّي خطة وبديلًا.',
    [
      ['der Plan', 'الخطة أولًا', 'البديل بلا خطة فراغ', 'nur die Alternative ohne Plan', 'الخطة أولًا'],
      ['falls', 'البديل falls', 'لا if', 'if der Zug ausfällt', 'if إنجليزية'],
      ['ausfallen', 'الإلغاء ausfallen', 'لا cancel خليط', 'der Zug cancelt', 'cancelt ليست الفعل'],
      ['wir brauchen eine Alternative', 'البديل يُسمّى', 'لا we need another', 'wir need eine Alternative', 'need إنجليزية']
    ],
    [
      ['Der Plan ist der frühe Zug.', 'الخطة هي القطار المبكر', 'Nur die Alternative ohne Plan', 'الخطة أولًا', 'Plan'],
      ['Falls der Zug ausfällt, nehmen wir den Bus.', 'إن أُلغي القطار نأخذ الحافلة', 'If der Zug ausfällt, nehmen wir den Bus', 'falls لا if', 'Falls'],
      ['Der Zug kann ausfallen.', 'قد يُلغى القطار', 'Der Zug kann canceln', 'الإلغاء ausfallen', 'ausfallen'],
      ['Wir brauchen eine Alternative.', 'نحتاج بديلًا', 'Wir need eine Alternative', 'الحاجة brauchen', 'brauchen']
    ],
    'Der Plan ist der frühe Zug. Falls er ausfällt, nehmen wir den Bus.',
    'Wir brauchen eine Alternative.',
    'Nenne morgen Plan und Alternative.',
    'غدًا سمِّ خطة وبديلًا.'),

  U('b1-u4-l3', 'B1', 'تعليل الرأي', 'Meinung begründen', 'pruefstrategie',
    'Am Ende stützt du eine Meinung mit einem Beispiel',
    'في النهاية تسند رأيًا بمثال.',
    [
      ['Meinung dann Beispiel', 'الرأي بلا مثال ضعيف', 'المثال بلا رأي ضائع', 'nur ein Beispiel ohne Meinung', 'الرأي أولًا'],
      ['zum Beispiel', 'المثال zum Beispiel', 'لا for example خليط', 'for example in Tunesien', 'for example إنجليزية'],
      ['das überzeugt mich nicht', 'الرفض يعلّل', 'لا I disagree فقط', 'ich disagree', 'disagree إنجليزية'],
      ['zwei Gründe', 'سببان يكفيان', 'خمسة أسباب تضيّع الوقت', 'fünf Gründe ohne Ende', 'سببان حد الدرس']
    ],
    [
      ['Ich finde das riskant.', 'أجد هذا خطرًا', 'Ich disagree nur so', 'الرأي finde', 'finde'],
      ['Zum Beispiel in Tunesien.', 'على سبيل المثال في تونس', 'For example in Tunesien', 'المثال Zum Beispiel', 'Beispiel'],
      ['Das überzeugt mich nicht.', 'هذا لا يقنعني', 'Ich disagree', 'الرفض جملة ألمانية', 'überzeugt'],
      ['Erstens die Kosten.', 'أولًا الكلفة', 'Fünf Gründe ohne Ende', 'سببان يكفيان', 'Erstens']
    ],
    'Ich finde das riskant. Zum Beispiel die Kosten.',
    'Das überzeugt mich nicht.',
    'Begründe morgen eine Meinung mit einem Beispiel.',
    'غدًا علّل رأيًا بمثال.'),

  U('b1-u4-l4', 'B1', 'التلخيص', 'Zusammenfassung', 'pruefstrategie',
    'Am Ende fasst du einen Absatz in zwei Sätzen zusammen',
    'في النهاية تلخص فقرة في جملتين.',
    [
      ['kurz gesagt', 'التلخيص kurz gesagt', 'لا in short خليط', 'in short das Thema', 'in short إنجليزية'],
      ['mit anderen Worten', 'الإعادة بأدوات أخرى', 'لا نفس الجمل', 'dieselben Sätze noch einmal', 'التلخيص ليس نسخًا'],
      ['das heißt', 'المعنى das heißt', 'لا that means خليط', 'that means die Folge', 'that means إنجليزية'],
      ['keine neue Meinung', 'التلخيص لا يضيف رأيًا', 'الرأي مهمة أخرى', 'meiner Meinung nach im Summary', 'التلخيص بلا حكم جديد']
    ],
    [
      ['Kurz gesagt, der Text warnt.', 'باختصار النص يحذّر', 'In short der Text warnt', 'الإطار Kurz gesagt', 'Kurz'],
      ['Mit anderen Worten, die Zeit fehlt.', 'بعبارة أخرى الوقت ناقص', 'Dieselben Sätze noch einmal', 'التلخيص ليس نسخًا', 'anderen'],
      ['Das heißt, wir brauchen einen Plan.', 'هذا يعني أننا نحتاج خطة', 'That means wir brauchen einen Plan', 'الإطار Das heißt', 'heißt'],
      ['Ich füge keine neue Meinung hinzu.', 'لا أضيف رأيًا جديدًا', 'Meiner Meinung nach ist das schlecht im Summary', 'التلخيص بلا حكم جديد', 'keine']
    ],
    'Kurz gesagt, der Text warnt. Das heißt, wir brauchen einen Plan.',
    'Kurz gesagt, der Text warnt.',
    'Fasse morgen einen Absatz in zwei Sätzen zusammen.',
    'غدًا لخّص فقرة في جملتين.'),

  U('b1-u4-l5', 'B1', 'الحوار', 'Diskussion', 'register',
    'Am Ende stimmst du teilweise zu und widersprichst',
    'في النهاية توافق جزئيًا وتعارض.',
    [
      ['teilweise', 'الموافقة الجزئية', 'لا كل شيء أو لا شيء', 'ich stimme allem zu', 'الجزئي أدق'],
      ['da bin ich anderer Meinung', 'المعارضة إطار', 'لا you are wrong', 'du liegst immer falsch', 'الإهانة ليست حجة'],
      ['einen Kompromiss finden', 'الوسط finden', 'لا middle خليط', 'wir finden die middle', 'middle إنجليزية'],
      ['lassen Sie mich ausreden', 'إكمال الكلام حق', 'المقاطعة ليست قوة', 'ich unterbreche immer', 'الإكمال أولى']
    ],
    [
      ['Da stimme ich teilweise zu.', 'أوافق على هذا جزئيًا', 'Ich stimme allem zu', 'الجزئي أدق', 'teilweise'],
      ['Da bin ich anderer Meinung.', 'أنا على رأي آخر', 'Du liegst immer falsch', 'المعارضة بلا إهانة', 'anderer'],
      ['Können wir einen Kompromiss finden?', 'هل نجد حلًا وسطًا؟', 'Können wir die middle finden?', 'الوسط Kompromiss', 'Kompromiss'],
      ['Lassen Sie mich ausreden.', 'دعوني أكمل', 'Ich unterbreche immer', 'الإكمال أولى', 'ausreden']
    ],
    'Da stimme ich teilweise zu. Da bin ich anderer Meinung.',
    'Lassen Sie mich ausreden.',
    'Übe morgen Zustimmung und Widerspruch.',
    'غدًا تدرّب على الموافقة والمعارضة.'),

  U('b1-u4-l6', 'B1', 'الرسالة الرسمية', 'Formeller Brief', 'register',
    'Am Ende schreibst du Anrede, Anliegen und Gruß',
    'في النهاية تكتب تحية وطلبًا وختامًا.',
    [
      ['Sehr geehrte Frau', 'التحية الرسمية', 'Liebe Frau ans Amt falsch', 'Liebe Frau Amt', 'المقام Sehr geehrte'],
      ['das Anliegen in einem Satz', 'الطلب واضح', 'المقدمة الطويلة تضيّع', 'drei Absätze vor dem Anliegen', 'الطلب مبكرًا'],
      ['ich bitte Sie', 'الطلب bitte', 'لا I want you', 'ich want Sie', 'want إنجليزية'],
      ['Mit freundlichen Grüßen', 'الختام الرسمي', 'Tschüss ans Amt falsch', 'Tschüss, das Amt', 'الختام الرسمي']
    ],
    [
      ['Sehr geehrte Frau Berg,', 'السيدة بيرغ المحترمة', 'Liebe Frau Berg vom Amt,', 'الرسمي Sehr geehrte', 'geehrte'],
      ['Ich bitte Sie um einen neuen Termin.', 'أطلب منكم موعدًا جديدًا', 'Ich want Sie um einen Termin', 'الطلب bitte', 'bitte'],
      ['Das Anliegen steht im ersten Satz.', 'الطلب في الجملة الأولى', 'Drei Absätze vor dem Anliegen', 'الطلب مبكرًا', 'Anliegen'],
      ['Mit freundlichen Grüßen', 'مع التحية', 'Tschüss, das Amt', 'الختام الرسمي', 'Grüßen']
    ],
    'Sehr geehrte Frau Berg, ich bitte Sie um einen neuen Termin.',
    'Ich bitte Sie um einen neuen Termin.',
    'Schreibe morgen Anrede, Bitte und Gruß.',
    'غدًا اكتب تحية وطلبًا وختامًا.'),

  U('b1-u4-l7', 'B1', 'عرض', 'Präsentation', 'pruefstrategie',
    'Am Ende gliederst du drei Minuten',
    'في النهاية تقسّم ثلاث دقائق.',
    [
      ['drei Teile', 'مقدمة ومتن وخاتمة', 'لا خمس مقدمات', 'fünf Einleitungen', 'ثلاثة أجزاء'],
      ['die Zeit nennen', 'الوقت يُحترم', 'عشر دقائق ليست ثلاثًا', 'ich rede zehn Minuten', 'الحد ثلاث'],
      ['ein Beispiel', 'مثال واحد يكفي', 'خمسة أمثلة تضيّع الخاتمة', 'fünf Beispiele ohne Schluss', 'مثال ثم خاتمة'],
      ['Gibt es Fragen', 'الختام يفتح السؤال', 'لا انقطاع بلا خاتمة', 'ich stoppe ohne Schluss', 'الخاتمة لازمة']
    ],
    [
      ['Einleitung, Hauptteil, Schluss.', 'مقدمة ومتن وخاتمة', 'Fünf Einleitungen', 'ثلاثة أجزاء', 'Schluss'],
      ['Ich habe drei Minuten.', 'عندي ثلاث دقائق', 'Ich rede zehn Minuten', 'الحد ثلاث', 'drei'],
      ['Ein Beispiel reicht.', 'مثال واحد يكفي', 'Fünf Beispiele ohne Schluss', 'مثال ثم خاتمة', 'Beispiel'],
      ['Gibt es dazu Fragen?', 'هل هناك أسئلة؟', 'Ich stoppe ohne Schluss', 'الخاتمة قبل السؤال', 'Fragen']
    ],
    'Einleitung, Hauptteil, Schluss. Ich habe drei Minuten.',
    'Ich habe drei Minuten.',
    'Gliedere morgen eine Drei-Minuten-Rede.',
    'غدًا قسّم حديثًا من ثلاث دقائق.'),

  U('b1-u4-l8', 'B1', 'الاستماع لمقابلة', 'Interview', 'hoerstrategie',
    'Am Ende fängst du eine Haltung nicht nur ein Wort',
    'في النهاية تلتقط موقفًا لا كلمة فقط.',
    [
      ['die Haltung', 'الموقف أهم من كلمة غريبة', 'الكلمة المجهولة لا توقف الكل', 'ein unbekanntes Wort stoppt mich', 'الموقف أولًا'],
      ['vor dem zweiten Hören', 'السؤال يُقرأ قبل الإعادة', 'لا سمع بلا سؤال', 'ich höre ohne Frage', 'السؤال قبل الإعادة'],
      ['nicht das Gefühl', 'الإحساس ليس جوابًا', 'السؤال يحدد', 'ich antworte nach Gefühl', 'السؤال لا الإحساس'],
      ['eine Notiz', 'ملاحظة قصيرة', 'لا جملة كاملة أثناء الصوت', 'ich schreibe alles mit', 'ملاحظة لا نسخ']
    ],
    [
      ['Ich suche die Haltung.', 'أبحث عن الموقف', 'Ein unbekanntes Wort stoppt mich', 'الموقف أهم من كلمة', 'Haltung'],
      ['Ich lese die Frage vor dem zweiten Hören.', 'أقرأ السؤال قبل السماع الثاني', 'Ich höre ohne Frage', 'السؤال قبل الإعادة', 'vor'],
      ['Ich prüfe die Frage, nicht das Gefühl.', 'أفحص السؤال لا الإحساس', 'Ich antworte nach Gefühl', 'السؤال لا الإحساس', 'Frage'],
      ['Ich notiere ein Wort.', 'أدوّن كلمة', 'Ich schreibe alles mit', 'ملاحظة لا نسخ', 'notiere']
    ],
    'Ich lese die Frage vor dem zweiten Hören.',
    'Ich suche die Haltung.',
    'Höre morgen einmal und notiere die Haltung.',
    'غدًا استمع مرة ودوّن الموقف.'),

  U('b1-u5-l1', 'B1', 'نص رأي', 'Kommentar', 'pruefstrategie',
    'Am Ende trennst du Tatsache und Wertung',
    'في النهاية تفصل الواقعة عن التقييم.',
    [
      ['Tatsache', 'الواقعة تُثبت', 'التقييم لا يُثبتها', 'die Wertung ist eine Tatsache', 'التقييم ليس واقعة'],
      ['Wertung', 'التقييم يُنسب', 'لا يُقدَّم كخبر', 'der Autor berichtet seine Wertung als Fakt', 'التقييم رأي'],
      ['der Titel', 'العنوان قد يبالغ', 'لا تغنِ عن النص', 'der Titel reicht', 'العنوان لا يكفي'],
      ['ein Beleg', 'الشاهد يقوّي', 'بلا شاهد يبقى الادعاء ضعيفًا', 'ohne Beleg ist es stark', 'بلا شاهد لا قوة']
    ],
    [
      ['Das ist eine Tatsache.', 'هذه واقعة', 'Die Wertung ist eine Tatsache', 'التقييم ليس واقعة', 'Tatsache'],
      ['Das ist eine Wertung.', 'هذا تقييم', 'Der Autor berichtet die Wertung als Fakt', 'التقييم رأي', 'Wertung'],
      ['Der Titel reicht nicht.', 'العنوان لا يكفي', 'Der Titel reicht', 'العنوان وعد', 'nicht'],
      ['Ohne Beleg bleibt es schwach.', 'بلا شاهد يبقى ضعيفًا', 'Ohne Beleg ist es stark', 'الشاهد يقوّي', 'Beleg']
    ],
    'Das ist eine Wertung. Ohne Beleg bleibt es schwach.',
    'Der Titel reicht nicht.',
    'Markiere morgen eine Tatsache und eine Wertung.',
    'غدًا علّم واقعة وتقييمًا.'),

  U('b1-u5-l2', 'B1', 'شرط مهذب', 'Höfliche Bedingung', 'register',
    'Am Ende verbindest du wenn mit würde',
    'في النهاية تربط wenn بـ würde.',
    [
      ['wenn plus würde', 'الشرط المهذب', 'will أقسى', 'wenn Sie wollen, machen Sie das sofort hart', 'المهذب würde'],
      ['würde am Ende des Hauptsatzes', 'المصدر آخرًا', 'لا بعد würde إن طال المفعول بلا ترتيب', 'ich würde machen das', 'المصدر آخرًا'],
      ['Könnten Sie', 'السؤال المهذب', 'Kannst Sie خطأ مقام', 'Kannst Sie das tun', 'الرسمي könnten'],
      ['kein Befehl', 'الشرط ليس أمرًا', 'الأمر يكسر المقام', 'Machen Sie das sofort als Bitte', 'الطلب شرط مهذب']
    ],
    [
      ['Wenn Sie Zeit hätten, würden Sie bleiben.', 'لو كان عندكم وقت لبقيتم', 'Wenn Sie wollen, machen Sie das sofort', 'المهذب würde', 'würden'],
      ['Ich würde das später machen.', 'سأفعل هذا لاحقًا بأدب', 'Ich würde machen das später', 'المصدر آخرًا', 'machen'],
      ['Könnten Sie das prüfen?', 'هل تستطيعون فحص هذا؟', 'Kannst Sie das prüfen?', 'الرسمي könnten', 'Könnten'],
      ['Das ist eine Bitte, kein Befehl.', 'هذا طلب لا أمر', 'Machen Sie das sofort', 'الأمر ليس الطلب', 'Bitte']
    ],
    'Wenn Sie Zeit hätten, würden Sie bleiben.',
    'Könnten Sie das prüfen?',
    'Bilde morgen wenn und würde.',
    'غدًا كوّن wenn وwürde.'),

  U('b1-u5-l3', 'B1', 'مقارنة أنظمة', 'Vergleich', 'pruefstrategie',
    'Am Ende vergleichst du mit einer Grenze',
    'في النهاية تقارن بحد.',
    [
      ['im Vergleich zu', 'المقارنة إطار', 'لا compared to', 'compared to Tunesien', 'compared إنجليزية'],
      ['nicht alles gleich', 'التشابه ليس تطابقًا', 'كل شيء نفسه كسل', 'alles ist gleich', 'الحد يحمي المقارنة'],
      ['ein Punkt', 'نقطة واحدة تكفي', 'عشر نقاط تضيّع', 'zehn Unterschiede ohne Satz', 'نقطة ثم جملة'],
      ['die Grenze nennen', 'أين تتوقف المقارنة', 'بلا حد تصبح دعوى', 'der Vergleich gilt für alles', 'الحد لازم']
    ],
    [
      ['Im Vergleich zu Tunesien ist das anders.', 'مقارنة بتونس هذا مختلف', 'Compared to Tunesien ist das anders', 'الإطار Im Vergleich', 'Vergleich'],
      ['Nicht alles ist gleich.', 'ليس كل شيء متشابهًا', 'Alles ist gleich', 'الحد يحمي المقارنة', 'gleich'],
      ['Ein Punkt reicht.', 'نقطة واحدة تكفي', 'Zehn Unterschiede ohne Satz', 'نقطة ثم جملة', 'Punkt'],
      ['Die Grenze ist das Alter.', 'الحد هو العمر', 'Der Vergleich gilt für alles', 'الحد لازم', 'Grenze']
    ],
    'Im Vergleich zu Tunesien ist das anders. Die Grenze ist das Alter.',
    'Nicht alles ist gleich.',
    'Vergleiche morgen mit einer Grenze.',
    'غدًا قارن مع حد.'),

  U('b1-u5-l4', 'B1', 'مشكلة عمل', 'Arbeitsproblem', 'pruefstrategie',
    'Am Ende schlägst du eine Lösung vor',
    'في النهاية تقترح حلًا.',
    [
      ['das Problem zuerst', 'المشكلة قبل الحل', 'الحل بلا مشكلة فراغ', 'nur die Lösung ohne Problem', 'المشكلة أولًا'],
      ['ich schlage vor', 'الاقتراح schlagen vor', 'لا I suggest خليط', 'ich suggest eine Lösung', 'suggest إنجليزية'],
      ['die Verantwortung', 'المسؤولية تُسمّى', 'لا إلقاء بلا جملة', 'das ist nicht meine Schuld nur so', 'المسؤولية جملة'],
      ['eine Alternative', 'بديل واحد يكفي', 'ثلاثة بلا قرار تضيّع', 'drei Ideen ohne Wahl', 'بديل ثم قرار']
    ],
    [
      ['Das Problem ist die Frist.', 'المشكلة هي الأجل', 'Nur die Lösung ohne Problem', 'المشكلة أولًا', 'Problem'],
      ['Ich schlage vor, dass wir warten.', 'أقترح أن ننتظر', 'Ich suggest, dass wir warten', 'الاقتراح schlage vor', 'schlage'],
      ['Ich übernehme die Verantwortung.', 'أتحمل المسؤولية', 'Das ist nicht meine Schuld nur so', 'المسؤولية جملة', 'Verantwortung'],
      ['Wir brauchen eine Alternative.', 'نحتاج بديلًا', 'Drei Ideen ohne Wahl', 'بديل ثم قرار', 'Alternative']
    ],
    'Das Problem ist die Frist. Ich schlage vor, dass wir warten.',
    'Ich schlage vor, dass wir warten.',
    'Nenne morgen Problem und Lösung.',
    'غدًا سمِّ مشكلة وحلًا.'),

  U('b1-u5-l5', 'B1', 'صحة عامة', 'Gesundheitssystem', 'lexik-kollokation',
    'Am Ende sagst du Termin und Versicherung in einem Zusammenhang',
    'في النهاية تقول الموعد والتأمين في سياق واحد.',
    [
      ['der Termin', 'الموعد أولًا', 'لا date ككلمة وحيدة', 'der Date', 'Date إنجليزية'],
      ['die Versicherung', 'التأمين يُذكر مع الموعد', 'لا insurance', 'die Insurance zahlt', 'Insurance إنجليزية'],
      ['die Praxis', 'العيادة Praxis', 'لا clinic ككلمة وحيدة', 'die Clinic', 'Clinic إنجليزية'],
      ['ich warte auf eine Antwort', 'الانتظار auf', 'warten für خطأ', 'ich warte für eine Antwort', 'الحرف auf']
    ],
    [
      ['Ich habe einen Termin.', 'عندي موعد', 'Ich habe einen Date', 'الموعد Termin', 'Termin'],
      ['Die Versicherung übernimmt das.', 'التأمين يتحمل هذا', 'Die Insurance übernimmt das', 'التأمين Versicherung', 'Versicherung'],
      ['Die Praxis ist geschlossen.', 'العيادة مغلقة', 'Die Clinic ist geschlossen', 'العيادة Praxis', 'Praxis'],
      ['Ich warte auf eine Antwort.', 'أنتظر جوابًا', 'Ich warte für eine Antwort', 'الانتظار auf', 'auf']
    ],
    'Ich habe einen Termin. Die Versicherung übernimmt das.',
    'Ich warte auf eine Antwort.',
    'Sage morgen Termin und Versicherung.',
    'غدًا قل الموعد والتأمين.'),

  U('b1-u5-l6', 'B1', 'مراجعة B1', 'Wiederholung B1', 'pruefstrategie',
    'Am Ende reparierst du Passiv, obwohl und Relativsatz',
    'في النهاية تُصلح المجهول وobwohl وجملة الصلة.',
    [
      ['werden nicht sein', 'الحدث wird', 'ist حالة', 'die Straße ist repariert als Vorgang', 'المساعد خطأ'],
      ['obwohl am Ende', 'بعد obwohl الفعل آخرًا', 'V2 خطأ', 'obwohl ich gehe trotzdem', 'الترتيب خطأ'],
      ['Relativsatz am Ende', 'الصلة والفعل آخرًا', 'der wohnt dort خطأ', 'der Mann, der wohnt dort', 'الترتيب خطأ'],
      ['damit nicht um zu', 'فاعل ثانٍ damit', 'um zu لا يحتمل فاعلًا جديدًا', 'um zu sie versteht', 'الأداة خطأ']
    ],
    [
      ['Die Straße wird repariert.', 'الشارع يُرمم', 'Die Straße ist repariert als Vorgang', 'الحدث wird', 'wird'],
      ['Obwohl es regnet, gehe ich.', 'رغم المطر أذهب', 'Obwohl es regnet, ich gehe', 'gehe أول الرئيسية', 'gehe'],
      ['Der Mann, der dort wohnt, heißt Ali.', 'الرجل الذي يسكن هناك اسمه علي', 'Der Mann, der wohnt dort, heißt Ali', 'wohnt آخرًا', 'wohnt'],
      ['Ich erkläre es, damit sie es versteht.', 'أشرحه كي تفهمه', 'Ich erkläre es, um zu sie versteht', 'فاعل ثانٍ damit', 'damit']
    ],
    'Obwohl es regnet, gehe ich. Die Straße wird repariert.',
    'Die Straße wird repariert.',
    'Korrigiere morgen obwohl und einen Relativsatz.',
    'غدًا صحّح obwohl وجملة صلة.'),

  U('b1-u5-l7', 'B1', 'شكل امتحان B1', 'Prüfungsform B1', 'pruefstrategie',
    'Am Ende kennst du die Form und schreibst keinen Ausgleich',
    'في النهاية تعرف الشكل ولا تعوّض بين الأقسام.',
    [
      ['vier Module', 'أربعة أقسام', 'لا درجة كلية تنقذ', 'eine Note rettet alle', 'لا إنقاذ'],
      ['Schreiben hat Punkte', 'نقاط المحتوى تُغطى كلها', 'نقطة ناقصة قد تكلف المهمة', 'ein Punkt fehlt und ist egal', 'النقطة ليست تافهة'],
      ['Sprechen ist zu zweit', 'التحدث مع شريك', 'لا مونولوج فقط', 'ich rede allein die ganze Zeit', 'الشريك جزء من المهمة'],
      ['die Zeit ist fest', 'الوقت لا يُمدد', 'لا خمس دقائق إضافية', 'ich nehme extra Zeit', 'الوقت حد']
    ],
    [
      ['Ein Modul rettet das andere nicht.', 'قسم لا ينقذ الآخر', 'Eine Note rettet alle', 'لا تعويض', 'nicht'],
      ['Jeder Inhaltspunkt zählt.', 'كل نقطة محتوى تُحسب', 'Ein Punkt fehlt und ist egal', 'النقطة ليست تافهة', 'zählt'],
      ['Sprechen ist auch zu zweit.', 'التحدث مع شريك أيضًا', 'Ich rede allein die ganze Zeit', 'الشريك جزء من القسم', 'zweit'],
      ['Die Zeit wird nicht verlängert.', 'الوقت لا يُمدد', 'Ich nehme extra Zeit', 'الوقت حد', 'verlängert']
    ],
    'Vier Module. Kein Ausgleich. Jeder Inhaltspunkt zählt.',
    'Ein Modul rettet das andere nicht.',
    'Sage morgen die Ausgleich-Regel.',
    'غدًا قل قاعدة عدم التعويض.'),

  U('b1-u5-l8', 'B1', 'جسر إلى B2', 'Übergang', 'pruefstrategie',
    'Am Ende sagst du was für B2 noch nicht reicht',
    'في النهاية تقول ما لا يكفي لـ B2.',
    [
      ['ein Argument reicht nicht', 'B2 يريد حجة ومثالًا وحدًا', 'رأي بلا سند لا يكفي', 'ich finde das gut reicht', 'السند ناقص'],
      ['Beschreibung vor Deutung', 'الوصف قبل التأويل', 'الرأي أولًا يخسر الرسم', 'ich deute bevor ich beschreibe', 'الوصف أولًا'],
      ['die Gegenposition', 'الموقف المقابل يُذكر', 'التجاهل ليس قوة', 'ich ignoriere die andere Seite', 'المقابل جزء من الحجة'],
      ['kein Absolut', 'دائمًا وأبدًا تضعف', 'الحد أقوى', 'das ist immer so', 'المطلق ضعيف']
    ],
    [
      ['Ein Argument braucht ein Beispiel.', 'الحجة تحتاج مثالًا', 'Ich finde das gut reicht', 'السند ناقص', 'Beispiel'],
      ['Zuerst beschreibe ich.', 'أولًا أصف', 'Ich deute bevor ich beschreibe', 'الوصف قبل التأويل', 'Zuerst'],
      ['Ich nenne die Gegenposition.', 'أذكر الموقف المقابل', 'Ich ignoriere die andere Seite', 'المقابل جزء من الحجة', 'Gegenposition'],
      ['Immer und nie sind schwach.', 'دائمًا وأبدًا ضعيفان', 'Das ist immer so', 'المطلق ضعيف', 'schwach']
    ],
    'Ein Argument braucht ein Beispiel. Immer und nie sind schwach.',
    'Ich nenne die Gegenposition.',
    'Sage morgen was für B2 noch fehlt.',
    'غدًا قل ما ينقص لـ B2.')
];

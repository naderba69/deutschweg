function U(id, level, ar, de, fam, goalDe, goalAr, facts, lex, model, say, hwDe, hwAr, options) {
  return Object.assign({ id, level, ar, de, fam, goalDe, goalAr, facts, lex, model, say, hwDe, hwAr }, options || {});
}
module.exports = [
  U('b1-u1-l1', 'B1', 'المبني للمجهول الحدثي: الحاضر والماضي البسيط والماضي المركّب', 'Vorgangspassiv: Präsens, Präteritum und Perfekt', 'konjugation',
    'Am Ende bildest du fünf vollständige Sätze im Vorgangspassiv',
    'في النهاية تكوّن خمس جمل كاملة في المبني للمجهول الحدثي.',
    [
      ['Die Straße wird repariert.', 'تصف حدثًا جاريًا في الحاضر مع مفرد', 'في الحاضر نصرف werden ثم نضع Partizip II في النهاية: wird repariert', 'Die Straße wird reparieren.', 'بعد wird نحتاج Partizip II: repariert لا المصدر reparieren'],
      ['Das Haus wurde verkauft.', 'تنقل حدث البيع إلى الماضي البسيط', 'في الماضي البسيط يصبح wird هو wurde ويبقى Partizip II في النهاية', 'Das Haus wurde verkaufen.', 'بعد wurde نحتاج Partizip II: verkauft لا المصدر verkaufen'],
      ['Die Schuhe werden in Italien hergestellt.', 'تطابق werden مع الجمع وتغلق الجملة باسم المفعول', 'الفاعل النحوي Die Schuhe جمع، لذلك نقول werden؛ hergestellt يأتي في النهاية', 'Die Schuhe wird in Italien hergestellt.', 'Die Schuhe جمع، لذلك نستخدم werden لا wird'],
      ['Der Brief wird von Anna geschrieben.', 'تذكر الفاعل الحقيقي مع von عند الحاجة', 'في هذا النموذج يأتي الفاعل Anna بعد von، ثم يغلق geschrieben إطار الجملة', 'Der Brief wird vom Anna geschrieben.', 'مع الاسم Anna بلا أداة نقول von Anna، لا vom Anna']
    ],
    [
      ['Die Straße wird repariert.', 'يتم إصلاح الشارع', 'Die Straße wird reparieren.', 'مع Die Straße المفرد نقول wird، وبعده يأتي Partizip II repariert', 'wird'],
      ['Das Haus wurde verkauft.', 'تم بيع البيت', 'Das Haus wurde verkaufen.', 'بعد wurde يأتي Partizip II verkauft', 'wurde'],
      ['Die Schuhe werden in Italien hergestellt.', 'تُصنع الأحذية في إيطاليا', 'Die Schuhe wird in Italien hergestellt.', 'Die Schuhe جمع، لذلك نستخدم werden', 'werden'],
      ['Der Brief wird von Anna geschrieben.', 'تكتب آنا الرسالة بصيغة المجهول', 'Der Brief wird von Anna schreiben.', 'بعد wird يأتي geschrieben، والفاعل هنا مع von', 'von']
    ],
    'Die Straße wird repariert.', 'Die Brücke ist im letzten Jahr gebaut worden.',
    'Wiederhole morgen die fünf Sätze: Die Straße wird repariert. Das Haus wurde verkauft. Die Schuhe werden in Italien hergestellt. Der Brief wird von Anna geschrieben. Die Brücke ist im letzten Jahr gebaut worden.',
    'غدًا راجع جمل المبني للمجهول الخمس في الحاضر والماضي البسيط والماضي المركّب.',
    {
      factFamilies: ['konjugation', 'konjugation', 'konjugation', 'präposition'],
      imitateNearMiss: 'werden',
      transformHint: 'في Perfekt للمجهول نستعمل sein المصرف مع Partizip II ثم worden.',
      orderSentence: 'Die Brücke ist im letzten Jahr gebaut worden.',
      orderRightBracket: ['gebaut', 'worden.'],
      checkOrderSentence: 'Die Brücke ist im letzten Jahr gebaut worden.',
      checkOrderRightBracket: ['gebaut', 'worden.'],
      orderAr: 'رتّب Perfekt للمجهول: sein المصرف في موضع الفعل، ثم Partizip II وworden في نهاية الجملة.',
      orderHints: ['ابدأ بالفاعل Die Brücke ثم ist.', 'أغلق الجملة بالقوس gebaut worden.'],
      writing: {
        zeigt: 'Fünf Passivsätze',
        erklaerung: 'اكتب خمس جمل كاملة: حاضر مفرد، وماضٍ بسيط، وحاضر جمع، وفاعل مع von، وماضٍ مركّب مع worden.',
        hinweise: ['ابدأ بالأسماء الخمسة المعطاة.', 'راجع الفعل المصرّف وPartizip II في كل جملة.'],
        prompt: 'اكتب الجمل الخمس المستهدفة من الذاكرة باستعمال بدايات الجمل المعطاة.',
        promptDe: 'Die Straße wird repariert. · Das Haus wurde verkauft. · Die Schuhe werden in Italien hergestellt. · Der Brief wird von Anna geschrieben. · Die Brücke ist im letzten Jahr gebaut worden.',
        points: ['Die Straße wird repariert.', 'Das Haus wurde verkauft.', 'Die Schuhe werden in Italien hergestellt.', 'Der Brief wird von Anna geschrieben.', 'Die Brücke ist im letzten Jahr gebaut worden.'],
        minWords: 28,
        frage: 'اكتب جمل المبني للمجهول الخمس كاملة.'
      },
      speakAr: 'سجّل عشرين ثانية وقل الجمل الخمس: Die Straße wird repariert. Das Haus wurde verkauft. Die Schuhe werden in Italien hergestellt. Der Brief wird von Anna geschrieben. Die Brücke ist im letzten Jahr gebaut worden.',
      summaryDe: 'Die Straße wird repariert. Das Haus wurde verkauft. Die Schuhe werden in Italien hergestellt. Der Brief wird von Anna geschrieben. Die Brücke ist im letzten Jahr gebaut worden.',
      summaryAr: 'Vorgangspassiv يستعمل werden المصرف مع Partizip II؛ وفي Perfekt نستعمل sein + Partizip II + worden.',
      summaryRecap: 'werden أو wurde ثم Partizip II',
      hwHintDe: 'Prüfe: wird/werden · wurde · ist … worden.'
    }),

  U('b1-u1-l2', 'B1', 'جمل الصلة: الحالة وحرف الجر والفعل في النهاية', 'Relativsätze: Kasus, Präpositionen und Verbendstellung', 'wortstellung',
    'Am Ende bildest du fünf vollständige Relativsätze mit passendem Pronomen',
    'في النهاية تكوّن خمس جمل صلة كاملة بضمير مناسب وفعل في النهاية.',
    [
      ['Ich habe einen Nachbarn, der dort wohnt.', 'تستعمل der فاعلًا داخل جملة الصلة', 'Nachbar يحدد المذكر، ودور الضمير كفاعل يحدد Nominativ der؛ والفعل wohnt في النهاية', 'Ich habe einen Nachbarn, der dort wohnt er.', 'لا نضيف er بعد ضمير الصلة der، والفعل wohnt يبقى في النهاية'],
      ['Das Buch, das ich lese, ist neu.', 'تستعمل das مفعولًا به يعود على اسم محايد', 'Buch محايد، والضمير مفعول به داخل الصلة، لذلك يبقى Akkusativ das', 'Das Buch, die ich lese, ist neu.', 'Buch محايد، لذلك نستخدم das لا die'],
      ['Der Kurs, den ich besuche, ist voll.', 'تستعمل den لأن الضمير مفعول مذكر', 'Kurs مذكر، وbesuchen يحتاج مفعولًا به، لذلك نختار Akkusativ den', 'Der Kurs, der ich besuche, ist voll.', 'داخل الصلة أزور الدورة؛ لذلك نحتاج den في النصب لا der'],
      ['Die Frau, der ich heute helfe, ist nett.', 'تستعمل der لأن helfen يطلب الداتيف', 'Frau مؤنث، ودورها بعد helfen هو Dativ، لذلك تكون أداة الصلة der', 'Die Frau, die ich heute helfe, ist nett.', 'helfen يطلب Dativ؛ المؤنث في الداتيف der لا die']
    ],
    [
      ['Ich habe einen Nachbarn, der dort wohnt.', 'لدي جار يسكن هناك', 'Ich habe einen Nachbarn, der wohnt dort.', 'Nachbarn مذكر، والضمير فاعل: der؛ ثم يأتي wohnt في النهاية', 'der'],
      ['Das Buch, das ich lese, ist neu.', 'الكتاب الذي أقرأه جديد', 'Das Buch, die ich lese, ist neu.', 'Buch محايد، لذلك نستخدم das', 'das'],
      ['Der Kurs, den ich besuche, ist voll.', 'الدورة التي أحضرها ممتلئة', 'Der Kurs, der ich besuche, ist voll.', 'besuchen يحتاج مفعولًا مذكرًا: den', 'den'],
      ['Die Frau, der ich heute helfe, ist nett.', 'المرأة التي أساعدها لطيفة', 'Die Frau, die ich heute helfe, ist nett.', 'helfen يطلب الداتيف: der', 'der']
    ],
    'Ich habe einen Nachbarn, der dort wohnt.',
    'Die Stelle, für die ich mich beworben habe, ist besetzt.',
    'Wiederhole morgen die fünf Sätze: Ich habe einen Nachbarn, der dort wohnt. Das Buch, das ich lese, ist neu. Der Kurs, den ich besuche, ist voll. Die Frau, der ich heute helfe, ist nett. Die Stelle, für die ich mich beworben habe, ist besetzt.',
    'غدًا راجع جمل الصلة الخمس مع der وdas وden وder وfür die.',
    {
      factFamilies: ['wortstellung', 'kasus', 'kasus', 'kasus'],
      imitateNearMiss: 'den',
      transformHint: 'بعد حرف الجر für نختار die للنصب، وفي Perfekt يأتي habe في نهاية جملة الصلة.',
      orderSentence: 'Ich habe einen Nachbarn, der dort wohnt.',
      orderRightBracket: ['wohnt.'],
      checkOrderSentence: 'Ich habe einen Nachbarn, der dort wohnt.',
      checkOrderRightBracket: ['wohnt.'],
      orderAr: 'رتّب الجملة الرئيسية ثم جملة الصلة؛ ضمير الصلة der يفتح الجزء التابع وwohnt يغلقه.',
      orderHints: ['ضع habe في موضع الفعل في الجملة الرئيسية.', 'اترك wohnt في نهاية جملة الصلة بعد der dort.'],
      writing: {
        zeigt: 'Fünf Relativsätze',
        erklaerung: 'اكتب خمس جمل صلة كاملة: der في الرفع، وdas وden في النصب، وder في الداتيف، وfür die بعد حرف الجر.',
        hinweise: ['حدّد جنس الاسم أولًا ثم دور الضمير داخل جملة الصلة.', 'ضع الفعل المصرف في نهاية جملة الصلة قبل الفاصلة التالية أو النقطة.'],
        prompt: 'اكتب جمل الصلة الخمس المستهدفة من الذاكرة باستعمال الضمائر المعطاة.',
        promptDe: 'Ich habe einen Nachbarn, der dort wohnt. · Das Buch, das ich lese, ist neu. · Der Kurs, den ich besuche, ist voll. · Die Frau, der ich heute helfe, ist nett. · Die Stelle, für die ich mich beworben habe, ist besetzt.',
        points: ['Ich habe einen Nachbarn, der dort wohnt.', 'Das Buch, das ich lese, ist neu.', 'Der Kurs, den ich besuche, ist voll.', 'Die Frau, der ich heute helfe, ist nett.', 'Die Stelle, für die ich mich beworben habe, ist besetzt.'],
        minWords: 39,
        frage: 'اكتب جمل الصلة الخمس كاملة.'
      },
      speakAr: 'سجّل عشرين ثانية وقل الجمل الخمس: Ich habe einen Nachbarn, der dort wohnt. Das Buch, das ich lese, ist neu. Der Kurs, den ich besuche, ist voll. Die Frau, der ich heute helfe, ist nett. Die Stelle, für die ich mich beworben habe, ist besetzt.',
      summaryDe: 'Ich habe einen Nachbarn, der dort wohnt. Das Buch, das ich lese, ist neu. Der Kurs, den ich besuche, ist voll. Die Frau, der ich heute helfe, ist nett. Die Stelle, für die ich mich beworben habe, ist besetzt.',
      summaryAr: 'جنس الاسم يحدد أساس ضمير الصلة، ودوره داخل الجملة التابعة يحدد الحالة؛ والفعل المصرف يأتي في النهاية.',
      summaryRecap: 'الجنس والدور ثم الفعل أخيرًا',
      hwHintDe: 'Prüfe: der · das · den · der · für die.'
    }),

  U('b1-u1-l3', 'B1', 'جمل التنازل مع obwohl: الفعل في النهاية وقلب الجملة الرئيسية', 'Konzessivsätze mit obwohl: Verbendstellung und Hauptsatzinversion', 'wortstellung',
    'Am Ende bildest du fünf vollständige Gegensätze mit obwohl und trotzdem',
    'في النهاية تكوّن خمس جمل تنازل كاملة باستعمال obwohl وtrotzdem وترتيب صحيح.',
    [
      ['Obwohl es regnet, gehe ich spazieren.', 'تقدّم جملة obwohl يجعل الفعل المصرف في نهايتها، ثم يبدأ الفعل الجملة الرئيسية', 'regnet يغلق الجملة التابعة، وgehe يأتي مباشرة بعد الفاصلة لأن الجملة التابعة تشغل الموضع الأول', 'Obwohl es regnet, ich gehe spazieren.', 'بعد جملة obwohl المتقدمة تبدأ الجملة الرئيسية بالفعل gehe لا بالضمير ich'],
      ['Ich gehe spazieren, obwohl es regnet.', 'إذا جاءت جملة obwohl بعد الرئيسية بقي فعلها المصرف في النهاية', 'الجملة الرئيسية مستقلة أولًا، ثم تُغلق الجملة التابعة بالفعل regnet', 'Ich gehe spazieren, obwohl regnet es.', 'بعد obwohl يأتي الفاعل es قبل الفعل المصرف النهائي regnet'],
      ['Obwohl ich heute arbeiten muss, komme ich später mit.', 'مع الفعل الناقص يأتي المصدر قبله ويغلق الفعل الناقص الجملة التابعة', 'في جملة obwohl نقول arbeiten muss، وبعد الفاصلة يبدأ الفعل komme الجملة الرئيسية', 'Obwohl ich heute muss arbeiten, komme ich später mit.', 'في الجملة التابعة يأتي المصدر arbeiten قبل الفعل المصرف muss في النهاية'],
      ['Obwohl er wenig geschlafen hat, ist er pünktlich gekommen.', 'في Perfekt يأتي Partizip II ثم الفعل المساعد في نهاية جملة obwohl', 'geschlafen hat يغلق الجملة التابعة، وبعدها تبدأ الرئيسية بالفعل المساعد ist', 'Obwohl er wenig hat geschlafen, ist er pünktlich gekommen.', 'في جملة obwohl يأتي geschlafen قبل الفعل المساعد النهائي hat']
    ],
    [
      ['Obwohl es regnet, gehe ich spazieren.', 'رغم أن المطر يهطل، أذهب للتنزه', 'Obwohl es regnet, ich gehe spazieren.', 'بعد الجملة التابعة المتقدمة يأتي gehe قبل ich', 'gehe'],
      ['Ich gehe spazieren, obwohl es regnet.', 'أذهب للتنزه رغم أن المطر يهطل', 'Ich gehe spazieren, obwohl regnet es.', 'في جملة obwohl يأتي regnet في النهاية', 'regnet'],
      ['Obwohl ich heute arbeiten muss, komme ich später mit.', 'رغم أن عليّ العمل اليوم، سأنضم إليكم لاحقًا', 'Obwohl ich heute muss arbeiten, komme ich später mit.', 'في التابعة نقول arbeiten muss', 'muss'],
      ['Obwohl er wenig geschlafen hat, ist er pünktlich gekommen.', 'رغم أنه نام قليلًا، وصل في الوقت', 'Obwohl er wenig hat geschlafen, ist er pünktlich gekommen.', 'في التابعة نقول geschlafen hat', 'hat']
    ],
    'Obwohl es regnet, gehe ich spazieren.',
    'Es regnet, trotzdem gehe ich spazieren.',
    'Wiederhole morgen die fünf Sätze: Obwohl es regnet, gehe ich spazieren. Ich gehe spazieren, obwohl es regnet. Obwohl ich heute arbeiten muss, komme ich später mit. Obwohl er wenig geschlafen hat, ist er pünktlich gekommen. Es regnet, trotzdem gehe ich spazieren.',
    'غدًا راجع الجمل الخمس وقارن الفعل النهائي بعد obwohl بالفعل الثاني بعد trotzdem.',
    {
      factFamilies: ['wortstellung', 'wortstellung', 'wortstellung', 'wortstellung'],
      imitateNearMiss: 'trotzdem',
      transformHint: 'obwohl تفتح جملة تابعة وفعلها في النهاية، أما trotzdem فهو ظرف ويأتي بعده الفعل في الموضع الثاني.',
      orderSentence: 'Obwohl es regnet, gehe ich spazieren.',
      checkOrderSentence: 'Obwohl es regnet, gehe ich spazieren.',
      orderAr: 'رتّب جملة obwohl أولًا، ثم ابدأ الجملة الرئيسية بالفعل gehe مباشرة بعد الفاصلة.',
      orderPromptAr: 'رتّب جملة التنازل مع وضع regnet قبل الفاصلة وgehe بعدها.',
      orderHints: ['اترك regnet في نهاية الجملة التابعة قبل الفاصلة.', 'بعد الفاصلة ضع gehe قبل ich لأن التابعة شغلت الموضع الأول.'],
      writing: {
        zeigt: 'Fünf Konzessivsätze',
        erklaerung: 'اكتب الجمل الخمس كاملة: جملة obwohl متقدمة، وأخرى متأخرة، وجملة مع modal، وجملة في Perfekt، ثم جملة trotzdem مع V2.',
        hinweise: ['ضع الفعل المصرف في نهاية كل جملة تبدأ بـobwohl.', 'إذا تقدمت التابعة فابدأ الرئيسية بالفعل؛ وبعد trotzdem اجعل الفعل ثانيًا.'],
        prompt: 'اكتب جمل التنازل الخمس المستهدفة من الذاكرة مع الحفاظ على ترتيب الأفعال.',
        promptDe: 'Obwohl es regnet, gehe ich spazieren. · Ich gehe spazieren, obwohl es regnet. · Obwohl ich heute arbeiten muss, komme ich später mit. · Obwohl er wenig geschlafen hat, ist er pünktlich gekommen. · Es regnet, trotzdem gehe ich spazieren.',
        points: ['Obwohl es regnet, gehe ich spazieren.', 'Ich gehe spazieren, obwohl es regnet.', 'Obwohl ich heute arbeiten muss, komme ich später mit.', 'Obwohl er wenig geschlafen hat, ist er pünktlich gekommen.', 'Es regnet, trotzdem gehe ich spazieren.'],
        minWords: 36,
        frage: 'اكتب جمل التنازل الخمس كاملة.'
      },
      speakAr: 'سجّل عشرين ثانية وقل الجمل الخمس: Obwohl es regnet, gehe ich spazieren. Ich gehe spazieren, obwohl es regnet. Obwohl ich heute arbeiten muss, komme ich später mit. Obwohl er wenig geschlafen hat, ist er pünktlich gekommen. Es regnet, trotzdem gehe ich spazieren.',
      summaryDe: 'Obwohl es regnet, gehe ich spazieren. Ich gehe spazieren, obwohl es regnet. Obwohl ich heute arbeiten muss, komme ich später mit. Obwohl er wenig geschlafen hat, ist er pünktlich gekommen. Es regnet, trotzdem gehe ich spazieren.',
      summaryAr: 'obwohl تجعل الفعل المصرف في نهاية التابعة؛ وإذا تقدمت التابعة بدأت الرئيسية بالفعل. trotzdem وallerdings يحافظان على V2، وtrotz يتبعه اسم، وفي نماذجنا تربط الروابط الزوجية جملتين رئيسيتين وتحافظ كل منهما على V2.',
      summaryRecap: 'obwohl أخيرًا، trotzdem ثانيًا',
      hwHintDe: 'Prüfe: regnet, gehe · regnet · arbeiten muss, komme · geschlafen hat, ist · trotzdem gehe.'
    }),

  U('b1-u1-l4', 'B1', 'النتيجة والسبب: موضع الفعل مع deshalb وdenn وweil', 'Folge und Grund: Verbstellung mit deshalb, denn und weil', 'wortstellung',
    'Am Ende verbindest du Ursache und Folge in fünf vollständigen Sätzen',
    'في النهاية تصل السبب بالنتيجة في خمس جمل كاملة مع deshalb وdeswegen وdaher وdenn وweil وترتيب صحيح للفعل.',
    [
      ['Ich war krank, deshalb bin ich zu Hause geblieben.', 'تصل سببًا (المرض) بنتيجة (البقاء في المنزل) مع deshalb وتقلب الفاعل بعد الفعل', 'deshalb ظرف نتيجة يشغل الموضع الأول في جملته؛ فيأتي الفعل المصرف bin ثانيًا، والفاعل ich بعده، وPartizip II هو geblieben في النهاية', 'Ich war krank, deshalb ich bin zu Hause geblieben.', 'بعد deshalb يأتي الفعل المصرف bin في الموضع الثاني قبل الفاعل ich، لا بعد الفاعل'],
      ['Der Zug fiel aus, deswegen kam ich später.', 'تصل إلغاء القطار بنتيجته في الماضي البسيط مع deswegen', 'deswegen مرادف كتابي لـdeshalb: الموضع الأول، ثم kam ثانيًا، ثم الفاعل ich', 'Der Zug fiel aus, deswegen ich kam später.', 'بعد deswegen يأتي kam قبل الفاعل ich'],
      ['Es regnete stark, daher blieben wir im Hotel.', 'تصل المطر الشديد بنتيجته مع daher وفعل جمع في الماضي', 'daher أيضًا ظرف نتيجة في الموضع الأول؛ الفعل blieben ثانٍ والفاعل الجمع wir بعده', 'Es regnete stark, daher wir blieben im Hotel.', 'بعد daher يأتي blieben قبل wir، لأن الظرف شغل الموضع الأول'],
      ['Ich bleibe zu Hause, denn ich bin krank.', 'تعلّل البقاء في المنزل بـdenn دون تغيير ترتيب الفاعل والفعل', 'denn رابط تعليل في الموضع صفر: لا يُحسب موضعًا، فتبقى الجملة بعده جملة رئيسية بترتيبها العادي ich bin', 'Ich bleibe zu Hause, denn bin ich krank.', 'denn لا يقلب الترتيب كما تفعل deshalb؛ نقول denn ich bin krank']
    ],
    [
      ['Ich war krank, deshalb bin ich zu Hause geblieben.', 'كنت مريضًا، لذلك بقيت في المنزل', 'Ich war krank, deshalb ich bin zu Hause geblieben.', 'بعد deshalb يأتي bin قبل ich', 'bin'],
      ['Der Zug fiel aus, deswegen kam ich später.', 'أُلغيت رحلة القطار، لهذا السبب تأخرت', 'Der Zug fiel aus, deswegen ich kam später.', 'بعد deswegen يأتي kam قبل ich', 'kam'],
      ['Es regnete stark, daher blieben wir im Hotel.', 'أمطرت بشدة، لذلك بقينا في الفندق', 'Es regnete stark, daher wir blieben im Hotel.', 'بعد daher يأتي blieben قبل wir', 'blieben'],
      ['Ich bleibe zu Hause, denn ich bin krank.', 'أبقى في المنزل لأنني مريض', 'Ich bleibe zu Hause, denn bin ich krank.', 'بعد denn يبقى ich قبل bin بلا قلب', 'ich']
    ],
    'Ich war krank, deshalb bin ich zu Hause geblieben.',
    'Ich bleibe zu Hause, weil ich krank bin.',
    'Wiederhole morgen die fünf Sätze: Ich war krank, deshalb bin ich zu Hause geblieben. Der Zug fiel aus, deswegen kam ich später. Es regnete stark, daher blieben wir im Hotel. Ich bleibe zu Hause, denn ich bin krank. Ich bleibe zu Hause, weil ich krank bin.',
    'غدًا راجع الجمل الخمس وقارن موضع الفعل بعد deshalb وdenn وweil.',
    {
      factFamilies: ['wortstellung', 'wortstellung', 'wortstellung', 'wortstellung'],
      imitateNearMiss: 'ich',
      transformHint: 'denn في الموضع صفر فيبقى ترتيب الجملة الرئيسية (denn ich bin …)، أما weil فيرسل الفعل المصرف إلى النهاية (weil ich krank bin).',
      orderSentence: 'Deshalb bin ich zu Hause geblieben.',
      orderRightBracket: ['geblieben.'],
      checkOrderSentence: 'Deshalb bin ich zu Hause geblieben.',
      checkOrderRightBracket: ['geblieben.'],
      orderAr: 'رتّب جملة النتيجة: Deshalb أولًا، ثم الفعل المصرف bin، ثم الفاعل، وgeblieben في النهاية.',
      orderPromptAr: 'رتّب الجملة واضعًا bin بعد Deshalb مباشرة وgeblieben. في النهاية.',
      orderHints: ['ضع bin مباشرة بعد Deshalb لأن الظرف شغل الموضع الأول.', 'أغلق الجملة باسم المفعول geblieben.'],
      writing: {
        zeigt: 'Fünf Sätze mit Folge und Grund',
        erklaerung: 'اكتب الجمل الخمس كاملة: نتيجة مع deshalb، وأخرى مع deswegen، وثالثة مع daher، ثم تعليل مع denn بلا قلب، وأخيرًا weil مع الفعل في النهاية.',
        hinweise: ['بعد ظرف النتيجة ضع الفعل المصرف قبل الفاعل.', 'بعد denn أبقِ الفاعل قبل الفعل، وبعد weil أرسل الفعل إلى النهاية.'],
        prompt: 'اكتب الجمل الخمس المستهدفة من الذاكرة مع الحفاظ على موضع الفعل الصحيح في كل واحدة.',
        promptDe: 'Ich war krank, deshalb bin ich zu Hause geblieben. · Der Zug fiel aus, deswegen kam ich später. · Es regnete stark, daher blieben wir im Hotel. · Ich bleibe zu Hause, denn ich bin krank. · Ich bleibe zu Hause, weil ich krank bin.',
        points: ['Ich war krank, deshalb bin ich zu Hause geblieben.', 'Der Zug fiel aus, deswegen kam ich später.', 'Es regnete stark, daher blieben wir im Hotel.', 'Ich bleibe zu Hause, denn ich bin krank.', 'Ich bleibe zu Hause, weil ich krank bin.'],
        minWords: 41,
        frage: 'اكتب جمل النتيجة والسبب الخمس كاملة.'
      },
      speakAr: 'سجّل عشرين ثانية وقل الجمل الخمس: Ich war krank, deshalb bin ich zu Hause geblieben. Der Zug fiel aus, deswegen kam ich später. Es regnete stark, daher blieben wir im Hotel. Ich bleibe zu Hause, denn ich bin krank. Ich bleibe zu Hause, weil ich krank bin.',
      summaryDe: 'Ich war krank, deshalb bin ich zu Hause geblieben. Der Zug fiel aus, deswegen kam ich später. Es regnete stark, daher blieben wir im Hotel. Ich bleibe zu Hause, denn ich bin krank. Ich bleibe zu Hause, weil ich krank bin.',
      summaryAr: 'ظروف النتيجة deshalb وdeswegen وdaher وfolglich تحتل الموضع الأول فيأتي الفعل المصرف ثانيًا والفاعل بعده. denn في الموضع صفر فلا يقلب الترتيب، وweil يرسل الفعل المصرف إلى نهاية جملته.',
      summaryRecap: 'deshalb ثانيًا، denn صفر، weil أخيرًا',
      hwHintDe: 'Prüfe: deshalb bin · deswegen kam · daher blieben · denn ich bin · weil … bin.'
    }),

  U('b1-u1-l5', 'B1', 'جمل الغاية مع um … zu وdamit: الفاعل نفسه أو فاعل جديد', 'Finalsätze mit um … zu und damit: gleiches oder neues Subjekt', 'wortstellung',
    'Am Ende bildest du fünf vollständige Finalsätze mit um … zu und damit',
    'في النهاية تكوّن خمس جمل غاية كاملة مع um … zu وdamit بحسب الفاعل وبترتيب صحيح.',
    [
      ['Ich lerne Deutsch, um in Deutschland zu arbeiten.', 'تعبّر عن غايتك أنت من تعلم الألمانية مع um … zu', 'عندما يكون فاعل الجملة الرئيسية وفاعل الغاية شخصًا واحدًا نستعمل um ثم مصدرًا مع zu في النهاية', 'Ich lerne Deutsch, um in Deutschland arbeiten.', 'في تركيب um … zu لا بد من zu قبل المصدر arbeiten'],
      ['Sie spricht langsam, damit alle sie verstehen.', 'تعبّر عن غاية تخص أشخاصًا آخرين مع damit', 'عندما يختلف فاعل الغاية (alle) عن فاعل الرئيسية (sie) نستعمل damit مع جملة كاملة فعلها المصرف verstehen في النهاية', 'Sie spricht langsam, damit alle verstehen sie.', 'بعد damit يأتي الفعل المصرف verstehen في النهاية، بعد المفعول sie'],
      ['Ich spare Geld, damit meine Tochter studieren kann.', 'تضع المصدر قبل الفعل الناقص داخل جملة damit', 'في جملة damit مع فعل ناقص يأتي المصدر studieren قبل الفعل المصرف kann في النهاية', 'Ich spare Geld, damit meine Tochter kann studieren.', 'في الجملة التابعة نقول studieren kann، لا kann studieren'],
      ['Ich fahre früh los, um pünktlich anzukommen.', 'تدخل zu داخل مصدر فعل منفصل', 'مع الفعل المنفصل ankommen تدخل zu بين البادئة والجذر فتصير anzukommen، وبادئة الفعل في الرئيسية losfahren تذهب إلى النهاية', 'Ich fahre früh los, um pünktlich zu ankommen.', 'الصيغة الصحيحة anzukommen: zu بين an وkommen، لا قبل الفعل كاملًا']
    ],
    [
      ['Ich lerne Deutsch, um in Deutschland zu arbeiten.', 'أتعلم الألمانية لكي أعمل في ألمانيا', 'Ich lerne Deutsch, um in Deutschland arbeiten.', 'الفاعل نفسه: um … zu، وzu قبل arbeiten', 'zu'],
      ['Sie spricht langsam, damit alle sie verstehen.', 'تتكلم ببطء كي يفهمها الجميع', 'Sie spricht langsam, damit alle verstehen sie.', 'فاعل الغاية مختلف (alle): damit والفعل أخيرًا', 'verstehen'],
      ['Ich spare Geld, damit meine Tochter studieren kann.', 'أوفّر المال كي تستطيع ابنتي الدراسة', 'Ich spare Geld, damit meine Tochter kann studieren.', 'داخل damit نقول studieren kann', 'kann'],
      ['Ich fahre früh los, um pünktlich anzukommen.', 'أنطلق مبكرًا لكي أصل في الوقت', 'Ich fahre früh los, um pünktlich zu ankommen.', 'zu داخل الفعل المنفصل: anzukommen', 'anzukommen']
    ],
    'Ich lerne Deutsch, um in Deutschland zu arbeiten.',
    'Um gesund zu bleiben, mache ich jeden Tag Sport.',
    'Wiederhole morgen die fünf Sätze: Ich lerne Deutsch, um in Deutschland zu arbeiten. Sie spricht langsam, damit alle sie verstehen. Ich spare Geld, damit meine Tochter studieren kann. Ich fahre früh los, um pünktlich anzukommen. Um gesund zu bleiben, mache ich jeden Tag Sport.',
    'غدًا راجع الجمل الخمس وحدّد في كل واحدة هل فاعل الغاية هو نفسه أم شخص مختلف.',
    {
      factFamilies: ['wortstellung', 'wortstellung', 'wortstellung', 'wortstellung'],
      imitateNearMiss: 'to',
      transformHint: 'إذا تقدمت مجموعة um … zu شغلت الموضع الأول، فيبدأ الفعل المصرف الجملة الرئيسية قبل الفاعل: mache ich.',
      orderSentence: 'Ich lerne Deutsch, um in Deutschland zu arbeiten.',
      orderRightBracket: ['zu', 'arbeiten.'],
      checkOrderSentence: 'Ich lerne Deutsch, um in Deutschland zu arbeiten.',
      checkOrderRightBracket: ['zu', 'arbeiten.'],
      orderAr: 'رتّب الجملة الرئيسية أولًا بالفعل lerne ثانيًا، ثم أكمل مجموعة الغاية واجعل zu arbeiten في النهاية.',
      orderPromptAr: 'رتّب الجملة واضعًا lerne بعد Ich وzu arbeiten. في النهاية.',
      orderHints: ['ضع lerne في الموضع الثاني من الجملة الرئيسية.', 'أغلق مجموعة الغاية بالمصدر مع zu: zu arbeiten.'],
      writing: {
        zeigt: 'Fünf Finalsätze',
        erklaerung: 'اكتب خمس جمل غاية كاملة: um … zu مع فاعل واحد، وdamit مع فاعل مختلف، وdamit مع فعل ناقص، ومصدر فعل منفصل zu داخله، وجملة غاية متقدمة.',
        hinweise: ['حدّد فاعل الغاية أولًا: هو نفسه فاعل الرئيسية أم شخص آخر؟', 'ضع الفاصلة قبل um وdamit، وzu قبل المصدر أو داخله مع الفعل المنفصل.'],
        prompt: 'اكتب جمل الغاية الخمس المستهدفة من الذاكرة مع اختيار الرابط الصحيح وترتيب الأفعال.',
        promptDe: 'Ich lerne Deutsch, um in Deutschland zu arbeiten. · Sie spricht langsam, damit alle sie verstehen. · Ich spare Geld, damit meine Tochter studieren kann. · Ich fahre früh los, um pünktlich anzukommen. · Um gesund zu bleiben, mache ich jeden Tag Sport.',
        points: ['Ich lerne Deutsch, um in Deutschland zu arbeiten.', 'Sie spricht langsam, damit alle sie verstehen.', 'Ich spare Geld, damit meine Tochter studieren kann.', 'Ich fahre früh los, um pünktlich anzukommen.', 'Um gesund zu bleiben, mache ich jeden Tag Sport.'],
        minWords: 39,
        frage: 'اكتب جمل الغاية الخمس كاملة.'
      },
      speakAr: 'سجّل عشرين ثانية وقل الجمل الخمس: Ich lerne Deutsch, um in Deutschland zu arbeiten. Sie spricht langsam, damit alle sie verstehen. Ich spare Geld, damit meine Tochter studieren kann. Ich fahre früh los, um pünktlich anzukommen. Um gesund zu bleiben, mache ich jeden Tag Sport.',
      summaryDe: 'Ich lerne Deutsch, um in Deutschland zu arbeiten. Sie spricht langsam, damit alle sie verstehen. Ich spare Geld, damit meine Tochter studieren kann. Ich fahre früh los, um pünktlich anzukommen. Um gesund zu bleiben, mache ich jeden Tag Sport.',
      summaryAr: 'um … zu عندما يكون الفاعل واحدًا، وdamit مع جملة كاملة فعلها المصرف أخير عندما يختلف الفاعل؛ وzu تدخل داخل الفعل المنفصل (anzukommen)، والفاصلة قبل um وdamit لازمة.',
      summaryRecap: 'نفس الفاعل um zu، غيره damit',
      hwHintDe: 'Prüfe: gleicher Handelnder → um … zu arbeiten · neuer Handelnder → damit … verstehen · studieren kann · anzukommen. Damit mit gleichem Subjekt ist möglich, aber oft umständlich.'
    }),

  U('b1-u1-l6', 'B1', 'المصدر مع zu بعد الفعل والصفة والاسم — وبلا zu بعد الأفعال الناقصة', 'Infinitiv mit zu nach Verb, Adjektiv und Nomen — und kein zu nach Modalverben', 'wortstellung',
    'Am Ende bildest du vier Sätze mit dem zu-Infinitiv und einen Modalsatz ohne zu',
    'في النهاية تكوّن أربع جمل بالمصدر مع zu وجملة بفعل ناقص بلا zu، بترتيب صحيح.',
    [
      ['Ich versuche jeden Tag Deutsch zu lernen.', 'تعبّر عن محاولتك تعلّم الألمانية كل يوم', 'أفعال مثل versuchen وvergessen وhoffen تأخذ فعلًا ثانيًا في صيغة zu + مصدر، وتقف مجموعة المصدر في نهاية الجملة', 'Ich versuche jeden Tag Deutsch lernen.', 'بعد versuchen نحتاج zu قبل المصدر: Deutsch zu lernen'],
      ['Es ist wichtig, pünktlich zu sein.', 'تقيّم الالتزام بالموعد مع es ist', 'مع es ist والصفة (wichtig و nötig و verboten) يأتي الفعل في صيغة zu + مصدر؛ والمصدر من sein هو sein لا صيغة مصرفة', 'Es ist wichtig, pünktlich sein.', 'بعد الصفة مع es ist يلزم zu: pünktlich zu sein'],
      ['Ich habe Lust, ins Kino zu gehen.', 'تعبّر عن رغبتك في الذهاب إلى السينما', 'أسماء مثل die Lust وdie Absicht وdie Gelegenheit يتبعها مصدر مع zu يبيّن مضمون الرغبة أو الفرصة', 'Ich habe Lust ins Kino gehen.', 'بعد الاسم Lust يلزم zu قبل المصدر: ins Kino zu gehen'],
      ['Ich muss heute länger arbeiten.', 'تعبّر عن واجبك أن تعمل اليوم وقتًا أطول', 'بعد الأفعال الناقصة (müssen و können و dürfen و wollen) يأتي المصدر في نهاية الجملة بلا zu أبدًا', 'Ich muss heute länger zu arbeiten.', 'بعد muss لا توجد zu: الصيغة الصحيحة länger arbeiten، على عكس to في الإنجليزية']
    ],
    [
      ['Ich versuche jeden Tag Deutsch zu lernen.', 'أحاول أن أتعلم الألمانية كل يوم', 'Ich versuche jeden Tag Deutsch lernen.', 'بعد versuchen لا يقف المصدر وحده: zu lernen في النهاية', 'zu'],
      ['Es ist wichtig, pünktlich zu sein.', 'من المهم أن أكون في الموعد', 'Es ist wichtig, pünktlich sein.', 'مع es ist والصفة: zu sein، والمصدر من sein هو sein', 'sein'],
      ['Ich habe Lust, ins Kino zu gehen.', 'أرغب في الذهاب إلى السينما', 'Ich habe Lust ins Kino gehen.', 'الاسم Lust يشرحه مصدر مع zu: ins Kino zu gehen', 'gehen'],
      ['Ich muss heute länger arbeiten.', 'يجب أن أعمل اليوم وقتًا أطول', 'Ich muss heute länger zu arbeiten.', 'بعد muss يأتي المصدر arbeiten بلا zu، رغم to في الإنجليزية', 'arbeiten']
    ],
    'Ich versuche jeden Tag Deutsch zu lernen.',
    'Ich habe vor, meine Freunde einzuladen.',
    'Wiederhole morgen die fünf Sätze: Ich versuche jeden Tag Deutsch zu lernen. Es ist wichtig, pünktlich zu sein. Ich habe Lust, ins Kino zu gehen. Ich muss heute länger arbeiten. Ich habe vor, meine Freunde einzuladen.',
    'غدًا راجع الجمل الخمس وعلّم موضع zu في كل جملة، ولماذا تغيب بعد muss.',
    {
      factFamilies: ['wortstellung', 'wortstellung', 'wortstellung', 'wortstellung'],
      imitateNearMiss: 'to',
      transformHint: 'إذا صار الفعل المنفصل einladen مصدرًا مع zu دخلت zu داخل الكلمة بين البادئة ein والجذر laden: einzuladen؛ الشكل zu einladen خطأ.',
      orderSentence: 'Ich versuche jeden Tag Deutsch zu lernen.',
      orderRightBracket: ['zu', 'lernen.'],
      checkOrderSentence: 'Ich versuche jeden Tag Deutsch zu lernen.',
      checkOrderRightBracket: ['zu', 'lernen.'],
      orderAr: 'رتّب الجملة الرئيسية بالفعل versuche ثانيًا، ثم أكمل مجموعة المصدر واجعل zu lernen في النهاية.',
      orderPromptAr: 'رتّب الجملة واضعًا versuche بعد Ich وzu lernen. في النهاية.',
      orderHints: ['ضع versuche في الموضع الثاني بعد Ich.', 'أغلق الجملة بالمصدر مع zu: zu lernen.'],
      writing: {
        zeigt: 'Fünf Sätze: vier mit zu, einer ohne',
        erklaerung: 'اكتب خمس جمل كاملة: فعل مع zu، وes ist مع صفة، واسم مع zu، وفعل ناقص بلا zu، وفعل منفصل تدخل zu داخله.',
        hinweise: ['اسأل أولًا: ما الذي يفتح مجموعة المصدر هنا — فعل مثل versuchen، أم es ist مع صفة، أم اسم مثل Lust؟', 'ضع zu قبل المصدر في نهاية الجملة، وداخله مع الفعل المنفصل، ولا تضعها بعد muss.'],
        prompt: 'اكتب الجمل الخمس المستهدفة من الذاكرة مع وضع zu في موضعها أو حذفها بعد الفعل الناقص.',
        promptDe: 'Ich versuche jeden Tag Deutsch zu lernen. · Es ist wichtig, pünktlich zu sein. · Ich habe Lust, ins Kino zu gehen. · Ich muss heute länger arbeiten. · Ich habe vor, meine Freunde einzuladen.',
        points: ['Ich versuche jeden Tag Deutsch zu lernen.', 'Es ist wichtig, pünktlich zu sein.', 'Ich habe Lust, ins Kino zu gehen.', 'Ich muss heute länger arbeiten.', 'Ich habe vor, meine Freunde einzuladen.'],
        minWords: 31,
        frage: 'اكتب الجمل الخمس كاملة.'
      },
      speakAr: 'سجّل عشرين ثانية وقل الجمل الخمس: Ich versuche jeden Tag Deutsch zu lernen. Es ist wichtig, pünktlich zu sein. Ich habe Lust, ins Kino zu gehen. Ich muss heute länger arbeiten. Ich habe vor, meine Freunde einzuladen.',
      summaryDe: 'Ich versuche jeden Tag Deutsch zu lernen. Es ist wichtig, pünktlich zu sein. Ich habe Lust, ins Kino zu gehen. Ich muss heute länger arbeiten. Ich habe vor, meine Freunde einzuladen.',
      summaryAr: 'المصدر مع zu في نهاية الجملة بعد أفعال مثل versuchen، وبعد es ist مع الصفات، وبعد أسماء مثل Lust؛ تدخل zu داخل الفعل المنفصل (einzuladen)، وتغيب تمامًا بعد muss.',
      summaryRecap: 'zu في النهاية، ولا بعد muss',
      hwHintDe: 'Prüfe: Verb, Adjektiv oder Nomen davor → zu + Infinitiv am Ende. Ist das Verb trennbar, steht zu innen: einzuladen. Nach einem Modal wie muss fehlt zu ganz.'
    }),

  U('b1-u1-l7', 'B1', 'الخيال الشرطي (Irrealis) مع hätte وwäre وwürde — والطلب المهذب', 'Irrealis mit Konjunktiv II: hätte, wäre, würde und höfliches könnte', 'konjugation',
    'Am Ende bildest du vier irreale Sätze mit hätte, wäre und würde und eine höfliche Bitte mit könntest',
    'في النهاية تكوّن أربع جمل خيال شرطية بـhätte وwäre وwürde وطلبًا مهذبًا بـkönntest.',
    [
      ['Ich würde dich besuchen, wenn ich mehr Zeit hätte.', 'تعبّر عن زيارة تتمنى لو كان عندك وقت أكثر', 'في الشرط غير الواقعي نضع hätte (صيغة الخيال من haben) في نهاية جملة wenn، والجواب في الرئيسية würde + مصدر', 'Ich würde dich besuchen, wenn ich mehr Zeit habe.', 'مع habe يصير الشرط واقعيًا ويناقض würde الافتراضية؛ للخيال hätte في نهاية جملة wenn'],
      ['Wenn ich reich wäre, würde ich ein Haus kaufen.', 'تتخيّل نفسك غنيًا تشتري بيتًا', 'مع sein صيغة الخيال wäre في نهاية جملة wenn، وإذا تقدمت جملة الشرط بدأ الجواب بـwürde قبل الفاعل ich', 'Wenn ich reich bin, würde ich ein Haus kaufen.', 'bin صيغة الواقع وتناقض würde الافتراضية؛ صيغة الخيال من sein هي wäre'],
      ['Ich würde lieber zu Hause bleiben.', 'تعبّر عن تفضيلك البقاء في البيت', 'würde + lieber تعبّر عن تفضيل: würde في الموضع الثاني، وlieber بعده، والمصدر bleiben في النهاية', 'Ich würde lieber zu Hause bleibt.', 'بعد würde يأتي المصدر bleiben لا الصيغة المصرفة bleibt'],
      ['Könntest du mir bitte das Fenster öffnen?', 'تطلب بأدب فتح النافذة', 'الطلب المهذب يبدأ بـkönntest (صيغة الخيال من können) ويغلق بالمصدر öffnen قبل علامة الاستفهام', 'Könntest du mir bitte das Fenster öffnest?', 'بعد könntest لا يُصرَّف الفعل الثاني بل يبقى مصدرًا: das Fenster öffnen']
    ],
    [
      ['Ich würde dich besuchen, wenn ich mehr Zeit hätte.', 'لزرتك لو كان عندي وقت أكثر', 'Ich würde dich besuchen, wenn ich mehr Zeit habe.', 'في جملة wenn غير الواقعية: hätte في النهاية، لا habe', 'hätte'],
      ['Wenn ich reich wäre, würde ich ein Haus kaufen.', 'لو كنت غنيًا لاشتريت بيتًا', 'Wenn ich reich bin, würde ich ein Haus kaufen.', 'صيغة الخيال من sein هي wäre، والجواب المتأخر يبدأ بـwürde قبل ich', 'wäre'],
      ['Ich würde lieber zu Hause bleiben.', 'أفضّل أن أبقى في البيت', 'Ich would lieber zu Hause bleiben.', 'would إنجليزية؛ الألمانية: würde في الموضع الثاني والمصدر في النهاية', 'würde'],
      ['Könntest du mir bitte das Fenster öffnen?', 'هلّا فتحت لي النافذة من فضلك؟', 'Könntest du mir bitte das Fenster öffnest?', 'الطلب المهذب: Könntest في البداية والمصدر öffnen في النهاية', 'öffnen']
    ],
    'Ich würde dich besuchen, wenn ich mehr Zeit hätte.',
    'Wenn ich reich wäre, reiste ich viel.',
    'Wiederhole morgen die fünf irrealen Sätze: Ich würde dich besuchen, wenn ich mehr Zeit hätte. Wenn ich reich wäre, würde ich ein Haus kaufen. Ich würde lieber zu Hause bleiben. Könntest du mir bitte das Fenster öffnen? Wenn ich reich wäre, reiste ich viel.',
    'غدًا راجع الجمل الخمس وميّز في كل شرط هل هو ممكن حقًا أم خيال مع hätte وwäre.',
    {
      factFamilies: ['konjugation', 'konjugation', 'konjugation', 'konjugation'],
      imitateNearMiss: 'habe',
      transformHint: 'لبعض الأفعال الشائعة صيغة خيال قصيرة بدل würde + مصدر: reiste (من reisen) وkäme وwüsste؛ وتبقى جملة الجواب تبدأ بالفعل بعد جملة wenn المتقدمة: reiste ich.',
      orderSentence: 'Ich würde dich besuchen, wenn ich mehr Zeit hätte.',
      orderRightBracket: ['hätte.'],
      checkOrderSentence: 'Ich würde dich besuchen, wenn ich mehr Zeit hätte.',
      checkOrderRightBracket: ['hätte.'],
      orderAr: 'رتّب الجملة الرئيسية بالفعل würde ثانيًا والمصدر besuchen قبل الفاصلة، وأنهِ جملة wenn بـhätte.',
      orderPromptAr: 'رتّب الجملة واضعًا würde بعد Ich وhätte. في النهاية.',
      orderHints: ['ضع würde في الموضع الثاني والمصدر besuchen قبل الفاصلة.', 'أغلق جملة الشرط بصيغة الخيال hätte. في آخر الجملة كلها.'],
      writing: {
        zeigt: 'Fünf Sätze: viermal Irrealis, einmal Bitte',
        erklaerung: 'اكتب خمس جمل كاملة: شرط خيالي بـhätte، وشرط متقدم بـwäre وجواب بـwürde قبل الفاعل، وتفضيل بـwürde lieber، وطلب مهذب بـkönntest، وصيغة قصيرة reiste بعد شرط متقدم.',
        hinweise: ['قرّر أولًا: هل الوضع ممكن حقًا (habe وbin) أم خيال (hätte وwäre)؟ لا تخلط الصيغتين في الجملة الواحدة.', 'في جملة wenn يذهب hätte وwäre إلى النهاية، وفي الجواب يبدأ würde أو reiste قبل الفاعل إذا تقدم الشرط.'],
        prompt: 'اكتب الجمل الخمس المستهدفة من الذاكرة مع صيغ الخيال الصحيحة وترتيب الأفعال.',
        promptDe: 'Ich würde dich besuchen, wenn ich mehr Zeit hätte. · Wenn ich reich wäre, würde ich ein Haus kaufen. · Ich würde lieber zu Hause bleiben. · Könntest du mir bitte das Fenster öffnen? · Wenn ich reich wäre, reiste ich viel.',
        points: ['Ich würde dich besuchen, wenn ich mehr Zeit hätte.', 'Wenn ich reich wäre, würde ich ein Haus kaufen.', 'Ich würde lieber zu Hause bleiben.', 'Könntest du mir bitte das Fenster öffnen?', 'Wenn ich reich wäre, reiste ich viel.'],
        minWords: 38,
        frage: 'اكتب الجمل الخمس كاملة.'
      },
      speakAr: 'سجّل عشرين ثانية وقل الجمل الخمس: Ich würde dich besuchen, wenn ich mehr Zeit hätte. Wenn ich reich wäre, würde ich ein Haus kaufen. Ich würde lieber zu Hause bleiben. Könntest du mir bitte das Fenster öffnen? Wenn ich reich wäre, reiste ich viel.',
      summaryDe: 'Ich würde dich besuchen, wenn ich mehr Zeit hätte. Wenn ich reich wäre, würde ich ein Haus kaufen. Ich würde lieber zu Hause bleiben. Könntest du mir bitte das Fenster öffnen? Wenn ich reich wäre, reiste ich viel.',
      summaryAr: 'للخيال: hätte من haben وwäre من sein في نهاية جملة wenn، والجواب würde + مصدر؛ وإذا تقدم الشرط بدأ الجواب بالفعل (würde ich وreiste ich)، وkönntest تجعل الطلب مهذبًا.',
      summaryRecap: 'الخيال: hätte وwäre وwürde',
      hwHintDe: 'Prüfe: real möglich → habe/bin · irreal → hätte/wäre am Ende des wenn-Satzes, Antwort mit würde. Nie gemischt: „habe … würde“ in einem Satz geht nicht. Kurzformen: käme · wüsste · gäbe · reiste statt würde + Infinitiv.'
    }),

  U('b1-u1-l8', 'B1', 'تصريف n: النهاية en مع den وdem وdes — والرفع وحده بلا نهاية', 'n-Deklination: -en nach den, dem und des — nur der Nominativ ohne Endung', 'deklination',
    'Am Ende bildest du fünf Sätze mit n-Nomen in allen vier Fällen — und den Herrn mit einem n',
    'في النهاية تكوّن خمس جمل بأسماء n في الحالات الأربع، ومع Herrn بنون واحدة.',
    [
      ['Der Student lernt jeden Tag Deutsch.', 'تتحدث عن الطالب فاعلًا في الجملة', 'أسماء n المذكرة تبقى في الرفع (Nominativ) بلا نهاية: der Student؛ النهاية en لا تظهر إلا في بقية الحالات', 'Der Studenten lernt jeden Tag Deutsch.', 'الطالب هنا فاعل في الرفع: der Student؛ صيغة Studenten للنصب والداتيف والملكية'],
      ['Ich sehe den Studenten jeden Tag.', 'تقول إنك ترى الطالب كل يوم', 'في النصب (Akkusativ) يأخذ اسم n النهاية en: den Studenten — وهكذا den Jungen وden Kollegen وden Kunden', 'Ich sehe den Student jeden Tag.', 'المفعول به في النصب يحتاج النهاية: den Studenten لا den Student'],
      ['Ich muss dem Studenten helfen.', 'تقول إنك مضطر لمساعدة الطالب', 'في الداتيف (Dativ) أيضًا en: dem Studenten؛ والفعل helfen يطلب الداتيف أصلًا', 'Ich muss dem Student helfen.', 'بعد dem تبقى النهاية en: dem Studenten'],
      ['Das Buch des Studenten liegt hier.', 'تقول إن كتاب الطالب موجود هنا', 'في الملكية (Genitiv) أيضًا en: des Studenten — فصيغة واحدة بـen للنصب والداتيف والملكية', 'Das Buch des Student liegt hier.', 'بعد أداة الملكية des أيضًا: des Studenten']
    ],
    [
      ['Der Student lernt jeden Tag Deutsch.', 'يتعلم الطالب الألمانية كل يوم', 'Der Studenten lernt jeden Tag Deutsch.', 'في الرفع يبقى اسم n بلا نهاية: der Student', 'Student'],
      ['Ich sehe den Studenten jeden Tag.', 'أرى الطالب كل يوم', 'Ich sehe den Student jeden Tag.', 'في النصب يأخذ اسم n النهاية en: den Studenten', 'Studenten'],
      ['Ich muss dem Studenten helfen.', 'يجب أن أساعد الطالب', 'Ich muss dem Student helfen.', 'في الداتيف أيضًا en: dem Studenten، وhelfen يطلب الداتيف', 'Studenten'],
      ['Das Buch des Studenten liegt hier.', 'كتاب الطالب موجود هنا', 'Das Buch des Student liegt hier.', 'في الملكية أيضًا en: des Studenten', 'Studenten']
    ],
    'Der Student lernt jeden Tag Deutsch.',
    'Ich danke dem Herrn für die Hilfe.',
    'Wiederhole morgen die fünf Sätze: Der Student lernt jeden Tag Deutsch. Ich sehe den Studenten jeden Tag. Ich muss dem Studenten helfen. Das Buch des Studenten liegt hier. Ich danke dem Herrn für die Hilfe.',
    'غدًا راجع الجمل الخمس وسمِّ حالة اسم n في كل واحدة: رفع أم نصب أم داتيف أم ملكية.',
    {
      factFamilies: ['deklination', 'deklination', 'deklination', 'deklination'],
      imitateNearMiss: 'Studenten',
      transformHint: 'der Herr لا يأخذ en كاملة بل n واحدة في كل الحالات ما عدا الرفع: den Herrn وdem Herrn وdes Herrn؛ الشكل Herren بالمفرد خطأ (هو جمع مع die).',
      orderSentence: 'Ich muss dem Studenten helfen.',
      orderRightBracket: ['helfen.'],
      checkOrderSentence: 'Ich muss dem Studenten helfen.',
      checkOrderRightBracket: ['helfen.'],
      orderAr: 'رتّب الجملة واضعًا muss ثانيًا والمصدر helfen في النهاية، وعبارة الداتيف dem Studenten بينهما.',
      orderPromptAr: 'رتّب الجملة واضعًا muss بعد Ich وhelfen. في النهاية.',
      orderHints: ['ضع muss في الموضع الثاني وhelfen. في النهاية.', 'عبارة الداتيف كاملة النهاية: dem Studenten.'],
      writing: {
        zeigt: 'Fünf Sätze, vier Fälle',
        erklaerung: 'اكتب خمس جمل كاملة: طالب فاعل بلا نهاية، وطالب مفعول به بـen، وطالب في الداتيف بـen، وكتاب طالب في الملكية بـen، وسيد في الداتيف بنون واحدة.',
        hinweise: ['حدّد وظيفة الاسم أولًا: فاعل (رفع) أم مفعول مباشر (نصب) أم بعد helfen أو حرف داتيف أم ملكية بعد des؟', 'القاعدة العملية: en في كل الحالات ما عدا الرفع، وHerrn بنون واحدة دائمًا خارج الرفع.'],
        prompt: 'اكتب الجمل الخمس المستهدفة من الذاكرة مع نهاية اسم n المناسبة لكل حالة.',
        promptDe: 'Der Student lernt jeden Tag Deutsch. · Ich sehe den Studenten jeden Tag. · Ich muss dem Studenten helfen. · Das Buch des Studenten liegt hier. · Ich danke dem Herrn für die Hilfe.',
        points: ['Der Student lernt jeden Tag Deutsch.', 'Ich sehe den Studenten jeden Tag.', 'Ich muss dem Studenten helfen.', 'Das Buch des Studenten liegt hier.', 'Ich danke dem Herrn für die Hilfe.'],
        minWords: 30,
        frage: 'اكتب الجمل الخمس كاملة.'
      },
      speakAr: 'سجّل عشرين ثانية وقل الجمل الخمس: Der Student lernt jeden Tag Deutsch. Ich sehe den Studenten jeden Tag. Ich muss dem Studenten helfen. Das Buch des Studenten liegt hier. Ich danke dem Herrn für die Hilfe.',
      summaryDe: 'Der Student lernt jeden Tag Deutsch. Ich sehe den Studenten jeden Tag. Ich muss dem Studenten helfen. Das Buch des Studenten liegt hier. Ich danke dem Herrn für die Hilfe.',
      summaryAr: 'أسماء n (der Student وder Kollege وder Junge وder Kunde…) بلا نهاية في الرفع فقط، وبـen في النصب والداتيف والملكية: den وdem وdes Studenten — أما der Herr فيأخذ n واحدة: dem Herrn.',
      summaryRecap: 'الرفع وحده بلا en',
      hwHintDe: 'Prüfe den Fall: Nominativ → der Student ohne Endung · Akkusativ, Dativ, Genitiv → den/dem/des Studenten. Nur der Herr hat ein n: dem Herrn. Und das Herz: dem Herzen, aber das Herz.'
    }),

  U('b1-u2-l1', 'B1', 'المستقبل الأول مع werden: الخطط والوعود والتوقعات', 'Futur I mit werden: Pläne, Versprechen und Vorhersagen', 'konjugation',
    'Am Ende bildest du fünf Sätze im Futur I mit werden — als Plan, Vorhersage und Frage',
    'في النهاية تكوّن خمس جمل في المستقبل الأول مع werden: خطة وتوقعًا ووعدًا وسؤالًا.',
    [
      ['Ich werde die Aufgabe morgen erledigen.', 'تعبّر عن خطتك لإنهاء المهمة غدًا', 'المستقبل الأول: صيغة werden في الموضع الثاني (werde) والمصدر erledigen في نهاية الجملة بعد المفعول والزمان', 'Ich werde erledigen die Aufgabe morgen.', 'المصدر لا يأتي بعد werde مباشرة؛ مكانه نهاية الجملة: die Aufgabe morgen erledigen'],
      ['Es wird morgen den ganzen Tag regnen.', 'تتوقّع مطرًا طوال الغد', 'للتوقعات والطقس نستعمل es wird + مصدر؛ will تعبّر عن إرادة شخص ولا تناسب السماء', 'Es will morgen den ganzen Tag regnen.', 'للطقس: es wird regnen؛ will إنجليزية الأصل هنا (it will) وليست الصيغة الألمانية'],
      ['Sie wird dich heute Abend anrufen.', 'تعد بأنها ستتصل بك هذا المساء', 'المصدر المنفصل يبقى كتلة واحدة في نهاية الجملة: anrufen؛ الانفصال يحدث مع الفعل المصرف فقط (ruft … an)', 'Sie wird dich heute Abend rufen an.', 'المصدر لا ينفصل: الصيغة anrufen كاملة في النهاية'],
      ['Wirst du mir morgen helfen?', 'تسأل بأدب عن مساعدة غدًا', 'سؤال المستقبل يبدأ بـwirst (صيغة du من werden) ويغلق بالمصدر helfen قبل علامة الاستفهام', 'Wirst du mir morgen hilfst?', 'بعد wirst لا يُصرَّف الفعل الثاني بل يبقى مصدرًا: helfen']
    ],
    [
      ['Ich werde die Aufgabe morgen erledigen.', 'سأنهي المهمة غدًا', 'Ich werde erledigen die Aufgabe morgen.', 'werden في الموضع الثاني والمصدر erledigen في النهاية', 'werde'],
      ['Es wird morgen den ganzen Tag regnen.', 'ستمطر غدًا طوال اليوم', 'Es will morgen den ganzen Tag regnen.', 'توقع الطقس بـes wird لا بـwill', 'wird'],
      ['Sie wird dich heute Abend anrufen.', 'ستتصل بك هذا المساء', 'Sie wird dich heute Abend rufen an.', 'المصدر المنفصل يبقى موحدًا في النهاية: anrufen', 'anrufen'],
      ['Wirst du mir morgen helfen?', 'هل ستساعدني غدًا؟', 'Wirst du mir morgen hilfst?', 'السؤال يبدأ بـWirst وينتهي بالمصدر helfen', 'helfen']
    ],
    'Ich werde die Aufgabe morgen erledigen.',
    'Nächstes Jahr werden wir nach Deutschland reisen.',
    'Wiederhole morgen die fünf Sätze: Ich werde die Aufgabe morgen erledigen. Es wird morgen den ganzen Tag regnen. Sie wird dich heute Abend anrufen. Wirst du mir morgen helfen? Nächstes Jahr werden wir nach Deutschland reisen.',
    'غدًا راجع الجمل الخمس وتحقّق في كل واحدة من صيغة werden في موضعها والمصدر في النهاية.',
    {
      factFamilies: ['konjugation', 'konjugation', 'konjugation', 'konjugation'],
      imitateNearMiss: 'will',
      transformHint: 'إذا بدأت الجملة بعبارة زمنية مثل Nächstes Jahr شغلت الموضع الأول، فيأتي الفعل المساعد werden ثانيًا قبل الفاعل: werden wir.',
      orderSentence: 'Ich werde die Aufgabe morgen erledigen.',
      orderRightBracket: ['erledigen.'],
      checkOrderSentence: 'Ich werde die Aufgabe morgen erledigen.',
      checkOrderRightBracket: ['erledigen.'],
      orderAr: 'رتّب الجملة واضعًا werde ثانيًا والمصدر erledigen في النهاية بعد المفعول والزمان.',
      orderPromptAr: 'رتّب الجملة واضعًا werde بعد Ich وerledigen. في النهاية.',
      orderHints: ['ضع werde في الموضع الثاني بعد Ich.', 'أغلق الجملة بالمصدر وحده: erledigen.'],
      writing: {
        zeigt: 'Fünf Sätze im Futur I',
        erklaerung: 'اكتب خمس جمل كاملة في المستقبل الأول: خطة بمصدر نهائي، وتوقع طقس مع es wird، ووعد بمصدر منفصل موحّد، وسؤال يبدأ بـWirst، وجملة بعبارة زمنية متقدمة مع القلب.',
        hinweise: ['اختر صيغة werden بحسب الفاعل: werde (ich) وwirst (du) وwird (er/sie/es) وwerden (wir/sie).', 'المصدر دائمًا في نهاية الجملة — حتى المنفصل منه يبقى كتلة واحدة: anrufen.'],
        prompt: 'اكتب الجمل الخمس المستهدفة من الذاكرة مع صيغة werden الصحيحة والمصدر في النهاية.',
        promptDe: 'Ich werde die Aufgabe morgen erledigen. · Es wird morgen den ganzen Tag regnen. · Sie wird dich heute Abend anrufen. · Wirst du mir morgen helfen? · Nächstes Jahr werden wir nach Deutschland reisen.',
        points: ['Ich werde die Aufgabe morgen erledigen.', 'Es wird morgen den ganzen Tag regnen.', 'Sie wird dich heute Abend anrufen.', 'Wirst du mir morgen helfen?', 'Nächstes Jahr werden wir nach Deutschland reisen.'],
        minWords: 31,
        frage: 'اكتب الجمل الخمس كاملة.'
      },
      speakAr: 'سجّل عشرين ثانية وقل الجمل الخمس: Ich werde die Aufgabe morgen erledigen. Es wird morgen den ganzen Tag regnen. Sie wird dich heute Abend anrufen. Wirst du mir morgen helfen? Nächstes Jahr werden wir nach Deutschland reisen.',
      summaryDe: 'Ich werde die Aufgabe morgen erledigen. Es wird morgen den ganzen Tag regnen. Sie wird dich heute Abend anrufen. Wirst du mir morgen helfen? Nächstes Jahr werden wir nach Deutschland reisen.',
      summaryAr: 'المستقبل الأول = werden مصرّفة في الموضع الثاني + مصدر في نهاية الجملة؛ للتوقع es wird (لا will)، والمصدر المنفصل لا ينقسم (anrufen)، والسؤال يبدأ بـWirst، وبعد عبارة زمنية متقدمة يسبق werden الفاعل.',
      summaryRecap: 'werden ثانيًا والمصدر أخيرًا',
      hwHintDe: 'Prüfe: Futur heißt werden in Position zwei und der Infinitiv ganz am Ende — auch trennbar in einem Stück: anrufen. Wetter: es wird, nicht es will.'
    }),

  U('b1-u2-l2', 'B1', 'سرد الماضي بـPräteritum: صيغة -te والأفعال القوية ging وkam وblieb', 'Präteritum erzählen: schwache -te-Formen und starke Verben (ging, kam, blieb)', 'konjugation',
    'Am Ende erzählst du eine kurze Geschichte in fünf Sätzen im Präteritum',
    'في النهاية تحكي حكاية قصيرة من خمس جمل في الماضي السردي.',
    [
      ['Früher lebte eine alte Frau in einem kleinen Dorf.', 'تبدأ حكايتك بامرأة عاشت سابقًا في قرية صغيرة', 'الأفعال المنتظمة في الماضي السردي تنتهي بـ-te: lebte؛ وبعد ظرف الافتتاح Früher يأتي الفعل في الموضع الثاني قبل الفاعل', 'Früher lebt eine alte Frau in einem kleinen Dorf.', 'حكاية عن زمن مضى تحتاج lebte لا lebt الحاضرة'],
      ['Neben ihrem Haus gab es einen großen Garten.', 'تصف ما كان موجودًا بجانب بيتها', 'للوجود في الماضي: es gab + مفعول في النصب (einen großen Garten)؛ وgab هي صيغة الماضي من geben', 'Neben ihrem Haus gab es ein großer Garten.', 'بعد es gab يأتي الاسم في النصب: einen großen Garten لا ein großer Garten'],
      ['Jeden Morgen ging sie in den Garten.', 'تصف عادة المرأة كل صباح', 'الأفعال القوية تتغير حركتها في الماضي: gehen تصبح ging؛ وبعد العبارة الزمنية يأتي الفعل قبل الفاعل (ging sie)', 'Jeden Morgen gehte sie in den Garten.', 'لا توجد صيغة gehte؛ ماضي gehen هو ging'],
      ['Eines Tages kam ein fremder Mann und bat um Brot.', 'تروي ذروة الحكاية: رجل غريب جاء وطلب خبزًا', 'في سلسلة الأحداث تتوالى أفعال قوية بصيغ خاصة: kommen → kam وbitten → bat، والفعل الثاني يشارك الأول فاعلَه بلا فاعل جديد', 'Eines Tages kam ein fremder Mann und bittete um Brot.', 'bitten في الماضي bat لا bittete']
    ],
    [
      ['Früher lebte eine alte Frau in einem kleinen Dorf.', 'سابقًا عاشت امرأة عجوز في قرية صغيرة', 'Früher lebt eine alte Frau in einem kleinen Dorf.', 'بعد Früher فعل السرد lebte في الموضع الثاني قبل الفاعل', 'lebte'],
      ['Neben ihrem Haus gab es einen großen Garten.', 'بجانب بيتها كانت حديقة كبيرة', 'Neben ihrem Haus gab es ein großer Garten.', 'es gab يتبعها اسم في النصب: einen großen Garten', 'gab'],
      ['Jeden Morgen ging sie in den Garten.', 'كل صباح كانت تذهب إلى الحديقة', 'Jeden Morgen gehte sie in den Garten.', 'ماضي gehen هو ging لا صيغة مصنوعة gehte', 'ging'],
      ['Eines Tages kam ein fremder Mann und bat um Brot.', 'ذات يوم جاء رجل غريب وطلب خبزًا', 'Eines Tages kam ein fremder Mann und bittete um Brot.', 'فعلان قويان في السلسلة: kam وbat', 'bat']
    ],
    'Früher lebte eine alte Frau in einem kleinen Dorf.',
    'Am Ende blieb er den ganzen Winter im Dorf.',
    'Wiederhole morgen die Geschichte: Früher lebte eine alte Frau in einem kleinen Dorf. Neben ihrem Haus gab es einen großen Garten. Jeden Morgen ging sie in den Garten. Eines Tages kam ein fremder Mann und bat um Brot. Am Ende blieb er den ganzen Winter im Dorf.',
    'غدًا أعد حكاية المرأة العجوز كاملة ولاحظ صيغة الماضي في كل فعل.',
    {
      factFamilies: ['konjugation', 'konjugation', 'konjugation', 'konjugation'],
      imitateNearMiss: 'lebt',
      transformHint: 'في جملة الختام أيضًا تشغل Am Ende الموضع الأول فيأتي فعل الماضي blieb قبل الفاعل er؛ وصيغة blieb من bleiben قوية بلا ge- ولا مساعد.',
      orderSentence: 'Früher lebte sie in einem kleinen Dorf.',
      checkOrderSentence: 'Später arbeitete sie im Garten.',
      orderAr: 'رتّب مطلع الحكاية: ظرف الافتتاح Früher أولًا ثم فعل الماضي lebte قبل الفاعل sie.',
      orderPromptAr: 'رتّب الجملة واضعًا Früher أولًا وlebte في الموضع الثاني.',
      orderHints: ['العبارة الزمنية Früher تشغل الموضع الأول.', 'فعل الماضي lebte في الموضع الثاني قبل الفاعل sie.'],
      writing: {
        zeigt: 'Eine Geschichte in fünf Sätzen',
        erklaerung: 'اكتب حكاية المرأة العجوز في خمس جمل كاملة بالماضي السردي: مطلع مع lebte بعد Früher، ووصف وجود مع es gab، وعادة مع ging، وذروة مع kam وbat، وختام مع blieb بعد Am Ende.',
        hinweise: ['أبقِ الزمن واحدًا في الحكاية كلها: Präteritum بلا خلط بالماضي التام (hat ge-…) أو بالحاضر.', 'صيغ قوية تُحفظ كما هي: ging وkam وbat وblieb — لا تصنع gehte أو bittete.'],
        prompt: 'اكتب جمل الحكاية الخمس المستهدفة من الذاكرة مع صيغة الماضي الصحيحة لكل فعل.',
        promptDe: 'Früher lebte eine alte Frau in einem kleinen Dorf. · Neben ihrem Haus gab es einen großen Garten. · Jeden Morgen ging sie in den Garten. · Eines Tages kam ein fremder Mann und bat um Brot. · Am Ende blieb er den ganzen Winter im Dorf.',
        points: ['Früher lebte eine alte Frau in einem kleinen Dorf.', 'Neben ihrem Haus gab es einen großen Garten.', 'Jeden Morgen ging sie in den Garten.', 'Eines Tages kam ein fremder Mann und bat um Brot.', 'Am Ende blieb er den ganzen Winter im Dorf.'],
        minWords: 43,
        frage: 'اكتب جمل الحكاية الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية واحكِ القصة كاملة: Früher lebte eine alte Frau in einem kleinen Dorf. Neben ihrem Haus gab es einen großen Garten. Jeden Morgen ging sie in den Garten. Eines Tages kam ein fremder Mann und bat um Brot. Am Ende blieb er den ganzen Winter im Dorf.',
      summaryDe: 'Früher lebte eine alte Frau in einem kleinen Dorf. Neben ihrem Haus gab es einen großen Garten. Jeden Morgen ging sie in den Garten. Eines Tages kam ein fremder Mann und bat um Brot. Am Ende blieb er den ganzen Winter im Dorf.',
      summaryAr: 'السرد بالماضي Präteritum: المنتظم ينتهي بـ-te (lebte)، والقوي تتغير حركته (ging وkam وsprach وbat وblieb)، والوجود بـes gab + نصب، وبعد عبارة زمنية متقدمة يأتي الفعل قبل الفاعل.',
      summaryRecap: 'قصة بالماضي: lebte، ging، blieb',
      hwHintDe: 'Lies die Geschichte wie eine Romanzeile am Stück: lebte · gab es · ging · kam · bat · blieb. Nicht mit Perfekt mischen: „hat hier gelebt", „hat begonnen" oder „hat geendet" gehört ins Gespräch, nicht in die Erzählung.'
    }),

  U('b1-u2-l3', 'B1', 'الإضافة (Genitiv): des Mannes وder Frau — والانتماء مع wegen وtrotz', 'Genitiv: des Mannes, der Frau – Zugehörigkeit mit wegen und trotz', 'kasus',
    'Am Ende bildest du Genitivformen: des Mannes, der Frau, wegen des Wetters und trotz des Regens',
    'في النهاية تكوّن صيغ الإضافة: des Mannes وder Frau وwegen des Wetters وtrotz des Regens.',
    [
      ['Das Auto des Mannes ist neu.', 'تصف سيارة الرجل الجديدة', 'إضافة المذكر: الأداة des ونهاية -(e)s على الاسم نفسه: des Mannes', 'Das Auto des Mann ist neu.', 'علامة الإضافة للمذكر مزدوجة: des Mannes لا des Mann'],
      ['Die Tasche der Frau ist schwer.', 'تصف حقيبة المرأة الثقيلة', 'إضافة المؤنث: der ويبقى الاسم بلا أي نهاية: der Frau', 'Die Tasche der Fraus ist schwer.', 'لا -s مع المؤنث: der Frau لا der Fraus'],
      ['Wegen des Wetters bleiben wir zu Hause.', 'تشرح لماذا تبقون في البيت', 'wegen في الألمانية المكتوبة تأخذ Genitiv: wegen des Wetters؛ والعبارة المتقدمة تجعل الفعل bleiben في الموضع الثاني قبل الفاعل', 'Wegen die Wetter bleiben wir zu Hause.', 'بعد wegen لا يأتي الرفع die Wetter؛ المكتوب القياسي Genitiv: des Wetters'],
      ['Trotz des Regens gehen wir spazieren.', 'تروي نزهة رغم المطر', 'trotz كذلك تأخذ Genitiv في الكتابة: trotz des Regens بنهاية -s على الاسم Regen', 'Trotz des Regen gehen wir spazieren.', 'الاسم بعد des يحتاج نهايته: Regens لا Regen']
    ],
    [
      ['Das Auto des Mannes ist neu.', 'سيارة الرجل جديدة', 'Das Auto des Mann ist neu.', 'إضافة المذكر: des Mannes بنهاية -es على الاسم', 'Mannes'],
      ['Die Tasche der Frau ist schwer.', 'حقيبة المرأة ثقيلة', 'Die Tasche der Fraus ist schwer.', 'إضافة المؤنث: der Frau بلا نهاية', 'Frau'],
      ['Wegen des Wetters bleiben wir zu Hause.', 'بسبب الطقس نبقى في البيت', 'Wegen die Wetter bleiben wir zu Hause.', 'wegen + Genitiv: des Wetters والفعل ثانٍ', 'des'],
      ['Trotz des Regens gehen wir spazieren.', 'رغم المطر نخرج للنزهة', 'Trotz des Regen gehen wir spazieren.', 'trotz + Genitiv: des Regens', 'Regens']
    ],
    'Das Auto des Mannes ist neu.',
    'Die Hälfte der Arbeit ist schon fertig.',
    'Wiederhole morgen die fünf Sätze: Das Auto des Mannes ist neu. Die Tasche der Frau ist schwer. Wegen des Wetters bleiben wir zu Hause. Trotz des Regens gehen wir spazieren. Die Hälfte der Arbeit ist schon fertig.',
    'غدًا أعد الجمل الخمس ولاحظ علامة الإضافة في كل اسم.',
    {
      factFamilies: ['kasus', 'kasus', 'kasus', 'kasus'],
      imitateNearMiss: 'Mann',
      transformHint: 'في جملة الختام أيضًا يأتي Genitiv بعد أسماء الكم مباشرة بلا «من»: Die Hälfte der Arbeit؛ والفعل ist يوافق Hälfte المفردة.',
      orderSentence: 'Wegen des Wetters bleiben wir zu Hause.',
      checkOrderSentence: 'Trotz des Regens gehen wir spazieren.',
      checkOrderRightBracket: ['spazieren.'],
      orderAr: 'رتّب جملة السبب: عبارة Wegen des Wetters أولًا ثم الفعل bleiben في الموضع الثاني قبل الفاعل wir.',
      orderPromptAr: 'رتّب الجملة واضعًا Wegen des Wetters أولًا وbleiben في الموضع الثاني.',
      orderHints: ['عبارة السبب Wegen des Wetters تشغل الموضع الأول.', 'الفعل bleiben في الموضع الثاني قبل الفاعل wir.'],
      writing: {
        zeigt: 'Fünf Sätze mit Genitiv',
        erklaerung: 'اكتب الجمل الخمس كاملة: إضافة مذكر مع des Mannes، وإضافة مؤنث مع der Frau، وسبب مع wegen des Wetters، وتنازل مع trotz des Regens، وكمية مع Die Hälfte der Arbeit.',
        hinweise: ['المذكر والمحايد: des + نهاية (e)s على الاسم (des Mannes لا des Mann).', 'المؤنث والجمع: der فقط بلا نهاية على الاسم (der Frau لا der Fraus).'],
        prompt: 'اكتب جمل الإضافة الخمس المستهدفة من الذاكرة مع علامة Genitiv الصحيحة في كل اسم.',
        promptDe: 'Das Auto des Mannes ist neu. · Die Tasche der Frau ist schwer. · Wegen des Wetters bleiben wir zu Hause. · Trotz des Regens gehen wir spazieren. · Die Hälfte der Arbeit ist schon fertig.',
        points: ['Das Auto des Mannes ist neu.', 'Die Tasche der Frau ist schwer.', 'Wegen des Wetters bleiben wir zu Hause.', 'Trotz des Regens gehen wir spazieren.', 'Die Hälfte der Arbeit ist schon fertig.'],
        minWords: 32,
        frage: 'اكتب جمل الإضافة الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Das Auto des Mannes ist neu. Die Tasche der Frau ist schwer. Wegen des Wetters bleiben wir zu Hause. Trotz des Regens gehen wir spazieren. Die Hälfte der Arbeit ist schon fertig.',
      summaryDe: 'Das Auto des Mannes ist neu. Die Tasche der Frau ist schwer. Wegen des Wetters bleiben wir zu Hause. Trotz des Regens gehen wir spazieren. Die Hälfte der Arbeit ist schon fertig.',
      summaryAr: 'الإضافة Genitiv: المذكر والمحايد des + نهاية (e)s على الاسم (des Mannes)، والمؤنث والجمع der بلا نهاية (der Frau)، وحرفا wegen وtrotz يأخذان Genitiv في الكتابة، وأسماء الكم مثله (die Hälfte der Arbeit).',
      summaryRecap: 'Genitiv: des Mannes وder Frau',
      hwHintDe: 'Merke die Kette des/der + Name: des Mannes, des Hauses, der Frau. Mengenwörter stehen mit Genitiv: „Ein Drittel der Schüler fehlt"; gesprochen hört man auch „von den Schülern", geschrieben bleibt der Genitiv.'
    }),

  U('b1-u2-l4', 'B1', 'تصريف الصفة: النهايات بعد der وein وبلا أداة — gute وguter وgutem', 'Adjektivdeklination: Endungen nach der, ein und ohne Artikel', 'deklination',
    'Am Ende setzt du die Adjektivendung nach der, ein und ohne Artikel richtig',
    'في النهاية تضع نهاية الصفة صحيحة بعد der وein وبلا أداة.',
    [
      ['Der gute Plan überzeugt den Chef.', 'تصف خطة جيدة مقنعة', 'بعد أداة التعريف der تأخذ الصفة النهاية الضعيفة -e في رفع المذكر: der gute Plan لأن العلامة على الأداة', 'Der guter Plan überzeugt den Chef.', 'بعد der لا تجيء النهاية القوية: gute لا guter'],
      ['Ein guter Plan fehlt uns noch.', 'تقول إن الخطة الجيدة لا تزال ناقصة', 'بعد ein في رفع المذكر لا تحمل الأداة علامة، فالصفة تظهرها: ein guter Plan بـ-er', 'Ein gute Plan fehlt uns noch.', 'بعد ein في رفع المذكر: guter لا gute'],
      ['Er kauft den teuren Wagen morgen.', 'تروي شراءه السيارة الغالية غدًا', 'في نصب المذكر بعد den تأخذ الصفة النهاية الضعيفة -en: den teuren Wagen', 'Er kauft den teure Wagen morgen.', 'بعد den: teuren لا teure'],
      ['Mit gutem Plan starten wir.', 'تعلن البدء بخطة جيدة', 'بلا أداة بعد mit (داتيف) تحمل الصفة علامة الداتيف القوية كاملة: mit gutem Plan بـ-em', 'Mit guten Plan starten wir.', 'بلا أداة في الداتيف: gutem لا guten']
    ],
    [
      ['Der gute Plan überzeugt den Chef.', 'الخطة الجيدة تقنع المدير', 'Der guter Plan überzeugt den Chef.', 'بعد der النهاية الضعيفة: gute', 'gute'],
      ['Ein guter Plan fehlt uns noch.', 'ما زالت تنقصنا خطة جيدة', 'Ein gute Plan fehlt uns noch.', 'بعد ein في رفع المذكر: guter', 'guter'],
      ['Er kauft den teuren Wagen morgen.', 'يشتري السيارة الغالية غدًا', 'Er kauft den teure Wagen morgen.', 'بعد den في النصب: teuren', 'teuren'],
      ['Mit gutem Plan starten wir.', 'نبدأ بخطة جيدة', 'Mit guten Plan starten wir.', 'بلا أداة في الداتيف: gutem', 'gutem']
    ],
    'Der gute Plan überzeugt den Chef.',
    'Die neuen Studenten lernen sehr schnell.',
    'Wiederhole morgen die fünf Sätze: Der gute Plan überzeugt den Chef. Ein guter Plan fehlt uns noch. Er kauft den teuren Wagen morgen. Mit gutem Plan starten wir. Die neuen Studenten lernen sehr schnell.',
    'غدًا أعد الجمل الخمس وانطق نهاية كل صفة بوضوح.',
    {
      factFamilies: ['deklination', 'deklination', 'deklination', 'deklination'],
      imitateNearMiss: 'guter',
      transformHint: 'في جملة الختام أيضًا تحكم الأداة die مع الجمع النهاية الضعيفة -en دائمًا: die neuen Studenten.',
      orderSentence: 'Mit gutem Plan starten wir.',
      checkOrderSentence: 'Morgen kaufen wir den teuren Wagen.',
      orderAr: 'رتّب جملة البدء: عبارة Mit gutem Plan أولًا ثم الفعل starten في الموضع الثاني قبل الفاعل wir.',
      orderPromptAr: 'رتّب الجملة واضعًا Mit gutem Plan أولًا وstarten في الموضع الثاني.',
      orderHints: ['عبارة الأداة Mit gutem Plan تشغل الموضع الأول ونهايتها -em.', 'الفعل starten في الموضع الثاني قبل الفاعل wir.'],
      writing: {
        zeigt: 'Fünf Sätze mit Adjektivendungen',
        erklaerung: 'اكتب الجمل الخمس كاملة بنهاياتها: der gute في رفع المذكر، وein guter بعد الأداة النكرة، وden teuren في النصب، وmit gutem في الداتيف بلا أداة، وdie neuen مع الجمع.',
        hinweise: ['اسأل أولًا: ما قبلك — der أم ein أم لا شيء؟ الأداة تقرر النهاية.', 'لا تترك صفة نعتيّة بلا نهاية أبدًا؛ العارية (der gut Plan) خطأ دائمًا.'],
        prompt: 'اكتب الجمل الخمس المستهدفة من الذاكرة مع نهاية الصفة الصحيحة في كل موضع.',
        promptDe: 'Der gute Plan überzeugt den Chef. · Ein guter Plan fehlt uns noch. · Er kauft den teuren Wagen morgen. · Mit gutem Plan starten wir. · Die neuen Studenten lernen sehr schnell.',
        points: ['Der gute Plan überzeugt den Chef.', 'Ein guter Plan fehlt uns noch.', 'Er kauft den teuren Wagen morgen.', 'Mit gutem Plan starten wir.', 'Die neuen Studenten lernen sehr schnell.'],
        minWords: 29,
        frage: 'اكتب جمل الصفة الخمس كاملة بنهاياتها.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Der gute Plan überzeugt den Chef. Ein guter Plan fehlt uns noch. Er kauft den teuren Wagen morgen. Mit gutem Plan starten wir. Die neuen Studenten lernen sehr schnell.',
      summaryDe: 'Der gute Plan überzeugt den Chef. Ein guter Plan fehlt uns noch. Er kauft den teuren Wagen morgen. Mit gutem Plan starten wir. Die neuen Studenten lernen sehr schnell.',
      summaryAr: 'تصريف الصفة: بعد der/die/das النهاية الضعيفة (-e في رفع المفرد ونصب المؤنث والمحايد، و-en في غير ذلك والجمع)، وبعد ein تظهر الصفة العلامة الغائبة (guter وgutes)، وبلا أداة تحمل الصفة العلامة كاملة (gutem في الداتيف).',
      summaryRecap: 'نهايات الصفة: gute، guter، gutem',
      hwHintDe: 'Die Kette: der gute Plan · ein guter Plan · den teuren Wagen · mit gutem Plan — guter Plan, schlechte Zeit. Nach der steht -e oder -en, nach ein zeigt das Adjektiv den Kasus (-er, -es), ohne Artikel trägt es alles allein (-em im Dativ).'
    }),

  U('b1-u2-l5', 'B1', 'als أم wenn؟ مرة في الماضي أو كل مرة', 'Als oder wenn? Einmal damals oder jedes Mal', 'wortstellung',
    'Am Ende wählst du als für einmal Vergangenheit und wenn für Wiederholung, mit dem Verb am Satzende',
    'في النهاية تختار als لحدث ماضٍ واحد وwenn للتكرار، مع فعل أخير في الجملة الثانوية.',
    [
      ['Als ich klein war, lebte ich in Tunis.', 'تحكي أين عشت في طفولتك الماضية', 'als لفترة أو حدث واحد منتهٍ في الماضي؛ والفعل الرئيسي lebte يأتي مباشرة بعد الجملة الثانوية قبل الفاعل', 'Wenn ich klein war, lebte ich in Tunis.', 'طفولتك فترة واحدة ماضية: als لا wenn'],
      ['Als sie gestern ankam, regnete es stark.', 'تروي حدثًا واحدًا حدث أمس', 'في جملة als يقف الفعل أخيرًا ويلتصق المنفصل: ankam في نهاية الجملة الثانوية', 'Als sie gestern kam an, regnete es stark.', 'الفعل المنفصل يلتصق في نهاية الثانوية: ankam لا kam an'],
      ['Wenn ich Zeit habe, rufe ich dich an.', 'تعد بالاتصال عند توفر الوقت', 'wenn للحاضر والمستقبل ولكل مرة؛ وبعد الجملة الثانوية المتقدمة يأتي فعل الرئيسية rufe قبل الفاعل', 'Als ich Zeit habe, rufe ich dich an.', 'als للماضي فقط؛ هنا حاضر ومستقبل: wenn'],
      ['Ich bleibe zu Hause, wenn ich krank bin.', 'تصف عادتك عن المرض', 'wenn للمتكرر؛ وحين تأتي الجملة الثانوية ثانية يقف فعلها bin أخيرًا وتبقى الرئيسية بترتيبها', 'Ich bleibe zu Hause, wenn ich bin krank.', 'في جملة wenn الفعل أخيرًا: wenn ich krank bin']
    ],
    [
      ['Als ich klein war, lebte ich in Tunis.', 'عندما كنت صغيرًا عشت في تونس', 'Wenn ich klein war, lebte ich in Tunis.', 'حدث ماضٍ واحد: als والفعل الرئيسي قبل الفاعل', 'Als'],
      ['Als sie gestern ankam, regnete es stark.', 'عندما وصلت أمس أمطرت بشدة', 'Als sie gestern kam an, regnete es stark.', 'الفعل أخيرًا في الثانوية والمنفصل ملتصق: ankam', 'ankam'],
      ['Wenn ich Zeit habe, rufe ich dich an.', 'عندما يكون عندي وقت أتصل بك', 'Als ich Zeit habe, rufe ich dich an.', 'حاضر ومستقبل: wenn وفعل الرئيسية ثانٍ', 'Wenn'],
      ['Ich bleibe zu Hause, wenn ich krank bin.', 'أبقى في البيت كلما مرضت', 'Ich bleibe zu Hause, wenn ich bin krank.', 'فعل الجملة الثانوية أخيرًا: krank bin', 'bin']
    ],
    'Als ich klein war, lebte ich in Tunis.',
    'Ich weiß nicht, wann der Zug ankommt.',
    'Wiederhole morgen die fünf Sätze: Als ich klein war, lebte ich in Tunis. Als sie gestern ankam, regnete es stark. Wenn ich Zeit habe, rufe ich dich an. Ich bleibe zu Hause, wenn ich krank bin. Ich weiß nicht, wann der Zug ankommt.',
    'غدًا أعد الجمل الخمس ولاحظ موضع الفعل في كل جملة ثانوية.',
    {
      factFamilies: ['wortstellung', 'wortstellung', 'wortstellung', 'wortstellung'],
      imitateNearMiss: 'Wenn',
      transformHint: 'في جملة الختام wann كلمة سؤال عن الوقت داخل جملة ثانوية يقف فعلها أخيرًا: wann der Zug ankommt؛ ليست أداة سرد ماضٍ مثل als.',
      orderSentence: 'Als ich klein war, lebten wir in Tunis.',
      checkOrderSentence: 'Als sie gestern ankam, regnete es stark.',
      orderAr: 'رتّب جملة الطفولة: جملة als كاملة أولًا بفعلها war أخيرًا، ثم الفعل الرئيسي lebten قبل الفاعل wir.',
      orderPromptAr: 'رتّب الجملة واضعًا جملة Als أولًا وlebten بعد الفاصلة مباشرة.',
      orderHints: ['جملة als الثانوية تشغل الموضع الأول وفعلها war في نهايتها.', 'بعد الفاصلة يبدأ الرئيسي بالفعل lebten قبل الفاعل wir.'],
      writing: {
        zeigt: 'Fünf Sätze mit als, wenn und wann',
        erklaerung: 'اكتب الجمل الخمس كاملة: طفولة واحدة مع Als وlebte، وحدث أمس مع ankam أخيرًا، ووعد مع Wenn وrufe، وعادة مع wenn في الآخر وbin أخيرًا، وسؤال غير مباشر مع wann.',
        hinweise: ['اسأل أولًا: مرة واحدة في الماضي (als) أم كل مرة/حاضر/مستقبل (wenn)؟', 'فعل الجملة الثانوية أخيرًا دائمًا، والمنفصل ملتصق: ankam لا kam an.'],
        prompt: 'اكتب الجمل الخمس المستهدفة من الذاكرة مع الأداة الصحيحة وفعل أخير في كل جملة ثانوية.',
        promptDe: 'Als ich klein war, lebte ich in Tunis. · Als sie gestern ankam, regnete es stark. · Wenn ich Zeit habe, rufe ich dich an. · Ich bleibe zu Hause, wenn ich krank bin. · Ich weiß nicht, wann der Zug ankommt.',
        points: ['Als ich klein war, lebte ich in Tunis.', 'Als sie gestern ankam, regnete es stark.', 'Wenn ich Zeit habe, rufe ich dich an.', 'Ich bleibe zu Hause, wenn ich krank bin.', 'Ich weiß nicht, wann der Zug ankommt.'],
        minWords: 38,
        frage: 'اكتب جمل als وwenn الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Als ich klein war, lebte ich in Tunis. Als sie gestern ankam, regnete es stark. Wenn ich Zeit habe, rufe ich dich an. Ich bleibe zu Hause, wenn ich krank bin. Ich weiß nicht, wann der Zug ankommt.',
      summaryDe: 'Als ich klein war, lebte ich in Tunis. Als sie gestern ankam, regnete es stark. Wenn ich Zeit habe, rufe ich dich an. Ich bleibe zu Hause, wenn ich krank bin. Ich weiß nicht, wann der Zug ankommt.',
      summaryAr: 'als لحدث أو فترة واحدة منتهية في الماضي، وwenn للحاضر والمستقبل ولكل مرة؛ في الجملة الثانوية يقف الفعل أخيرًا (والمنفصل ملتصق)، وإن تقدّمت الثانوية بدأ الرئيسي بفعله قبل الفاعل؛ وwann سؤال عن الوقت.',
      summaryRecap: 'als للماضي وwenn للتكرار',
      hwHintDe: 'Die Kette: Als ich klein war, lebte ich … (einmal, Vergangenheit) · Wenn ich Zeit habe, rufe ich an (jedes Mal) · Ich weiß nicht, wann … (Frage). Im Nebensatz steht das Verb am Ende: ankam, bin.'
    }),

  U('b1-u2-l6', 'B1', 'السؤال غير المباشر: ob وأدوات السؤال مع فعل في النهاية', 'Indirekte Fragen: ob und W-Wörter mit Verb am Ende', 'wortstellung',
    'Am Ende verwandelst du Fragen in indirekte Fragen mit ob oder W-Wort und Verb am Ende',
    'في النهاية تحوّل الأسئلة إلى غير مباشرة مع ob أو أداة سؤال وفعل في النهاية.',
    [
      ['Ich weiß nicht, ob er heute kommt.', 'تنقل سؤال نعم/لا عن مجيئه', 'سؤال بلا أداة استفهام يبدأ بـob بعد الفاصلة، ويقف الفعل kommt في نهاية الجملة الثانوية لا ثانيًا كما في السؤال المباشر', 'Ich weiß nicht, ob kommt er heute.', 'بعد ob لا قلب: الفاعل قبل الفعل الأخير (ob er … kommt)'],
      ['Sie fragt, wann der Kurs beginnt.', 'تنقل سؤالها عن وقت بداية الدورة', 'أداة السؤال wann تبقى في أول الجملة الثانوية والفعل beginnt يتأخر إلى النهاية', 'Sie fragt, wann beginnt der Kurs.', 'في النقل لا يقف الفعل ثانيًا: wann der Kurs beginnt'],
      ['Kannst du mir sagen, wo der Bahnhof ist?', 'تسأل بلطف عن مكان المحطة', 'السؤال المهذب بسؤال رئيسي وسؤال منقول: wo تبقى والفعل ist أخيرًا، وعلامة الاستفهام للجملة الرئيسة', 'Kannst du mir sagen, wo ist der Bahnhof?', 'حتى بعد سؤال مهذب: wo der Bahnhof ist بالفعل أخيرًا'],
      ['Er will wissen, wie viel das Ticket kostet.', 'تنقل رغبته في معرفة السعر', 'wie viel أداة السؤال عن الكم تبقى وبعدها الفاعل فالفعل kostet في النهاية', 'Er will wissen, wie viel kostet das Ticket.', 'بعد wie viel: الفاعل das Ticket ثم kostet أخيرًا']
    ],
    [
      ['Ich weiß nicht, ob er heute kommt.', 'لا أعرف إن كان سيأتي اليوم', 'Ich weiß nicht, ob kommt er heute.', 'ob ثم الفاعل فالفعل في النهاية: kommt', 'kommt'],
      ['Sie fragt, wann der Kurs beginnt.', 'تسأل متى تبدأ الدورة', 'Sie fragt, wann beginnt der Kurs.', 'wann تبقى والفعل أخيرًا: beginnt', 'beginnt'],
      ['Kannst du mir sagen, wo der Bahnhof ist?', 'هل تقول لي أين المحطة؟', 'Kannst du mir sagen, wo ist der Bahnhof?', 'في السؤال المنقول: ist في النهاية', 'ist'],
      ['Er will wissen, wie viel das Ticket kostet.', 'يريد أن يعرف كم ثمن التذكرة', 'Er will wissen, wie viel kostet das Ticket.', 'بعد wie viel: kostet في النهاية', 'kostet']
    ],
    'Ich weiß nicht, ob er heute kommt.',
    'Ich habe vergessen, wo ich geparkt habe.',
    'Wiederhole morgen die fünf Sätze: Ich weiß nicht, ob er heute kommt. Sie fragt, wann der Kurs beginnt. Kannst du mir sagen, wo der Bahnhof ist? Er will wissen, wie viel das Ticket kostet. Ich habe vergessen, wo ich geparkt habe.',
    'غدًا أعد الجمل الخمس ولاحظ الفعل الأخير في كل سؤال منقول.',
    {
      factFamilies: ['wortstellung', 'wortstellung', 'wortstellung', 'wortstellung'],
      imitateNearMiss: 'kommen',
      transformHint: 'في جملة الختام أيضًا يقف فعل السؤال المنقول أخيرًا: wo ich geparkt habe — اسم المفعول قبل المساعد habe في النهاية.',
      orderSentence: 'Wann er gestern kam, sagt sie nicht.',
      checkOrderSentence: 'Ob sie morgen bleibt, sagt er heute.',
      orderAr: 'رتّب الجملة: سؤال منقول متقدم بفعله kam أخيرًا في جزئه، ثم الفعل الرئيسي sagt بعد الفاصلة.',
      orderPromptAr: 'رتّب الجملة واضعًا سؤال Wann أولًا وsagt بعد الفاصلة مباشرة.',
      orderHints: ['الجملة الثانوية Wann er gestern kam تشغل الموضع الأول كله.', 'الفعل الرئيسي sagt يأتي مباشرة بعد الفاصلة قبل الفاعل sie.'],
      writing: {
        zeigt: 'Fünf indirekte Fragen',
        erklaerung: 'اكتب الجمل الخمس كاملة: سؤال نعم/لا منقول بـob والفعل kommt أخيرًا، وسؤال مع wann وbeginnt أخيرًا، وسؤال مهذب عن المكان مع ist أخيرًا، وسؤال سعر مع wie viel وkostet أخيرًا، وسؤال منقول مع geparkt habe.',
        hinweise: ['لا أداة في السؤال الأصلي؟ ضع ob. توجد أداة (wann وwo وwie viel)؟ أبقِها.', 'انقل ترتيب الجملة لا السؤال: فاعل ثم بقية ثم الفعل في النهاية، ولا تنسَ الفاصلة قبل الجزء المنقول.'],
        prompt: 'اكتب الأسئلة المنقولة الخمسة المستهدفة من الذاكرة مع الفعل الأخير في كل جزء ثانوي.',
        promptDe: 'Ich weiß nicht, ob er heute kommt. · Sie fragt, wann der Kurs beginnt. · Kannst du mir sagen, wo der Bahnhof ist? · Er will wissen, wie viel das Ticket kostet. · Ich habe vergessen, wo ich geparkt habe.',
        points: ['Ich weiß nicht, ob er heute kommt.', 'Sie fragt, wann der Kurs beginnt.', 'Kannst du mir sagen, wo der Bahnhof ist?', 'Er will wissen, wie viel das Ticket kostet.', 'Ich habe vergessen, wo ich geparkt habe.'],
        minWords: 36,
        frage: 'اكتب الأسئلة غير المباشرة الخمسة كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Ich weiß nicht, ob er heute kommt. Sie fragt, wann der Kurs beginnt. Kannst du mir sagen, wo der Bahnhof ist? Er will wissen, wie viel das Ticket kostet. Ich habe vergessen, wo ich geparkt habe.',
      summaryDe: 'Ich weiß nicht, ob er heute kommt. Sie fragt, wann der Kurs beginnt. Kannst du mir sagen, wo der Bahnhof ist? Er will wissen, wie viel das Ticket kostet. Ich habe vergessen, wo ich geparkt habe.',
      summaryAr: 'السؤال غير المباشر: سؤال نعم/لا يُنقل بـob، وسؤال بأداة تُبقي أداته (wann وwo وwie viel)، وفي الجزء المنقول يقف الفعل أخيرًا بلا ترتيب السؤال المباشر، مع فاصلة قبله.',
      summaryRecap: 'سؤال غير مباشر: الفعل أخيرًا',
      hwHintDe: 'Die Kette: direkte Frage → indirekt: „Kommt er?" → ob er kommt · „Wann beginnt der Kurs?" → wann der Kurs beginnt. Das W-Wort bleibt, das Verb wandert ans Ende.'
    }),

  U('b1-u2-l7', 'B1', 'الظن والاحتمال: könnte وwohl وvielleicht — درجات اليقين', 'Vermutung: könnte, wohl, vielleicht — Sicherheit stufen', 'register',
    'Am Ende drückst du eine Vermutung in Stufen aus: könnte, wohl, vielleicht und wahrscheinlich',
    'في النهاية تعبّر عن ظنك بدرجات: könnte وwohl وvielleicht وwahrscheinlich.',
    [
      ['Er könnte noch unterwegs sein.', 'تخمن أنه ربما في الطريق بعد', 'könnte (صيغة التخفيف من können) تعلّم الاحتمال دون جزم، والمصدر sein يأتي في نهاية الجملة', 'Er könnte noch unterwegs ist.', 'بعد könnte يجيء المصدر sein أخيرًا لا ist المصرفة'],
      ['Sie ist wohl schon zu Hause.', 'تقول إنها في الغالب في البيت', 'wohl أداة تخفيف تجلس في وسط الجملة بعد الفعل مباشرة، فتخفف الخبر إلى ترجيح لا يقين', 'Sie wohl ist schon zu Hause.', 'الفعل ist ثانٍ ثم تجيء wohl: Sie ist wohl …'],
      ['Vielleicht kommt er morgen später.', 'تقول إنه ربما يأتي متأخرًا غدًا', 'Vielleicht في الموضع الأول كغيرها من الظروف فيقدَّم الفعل kommt على الفاعل er', 'Vielleicht er kommt morgen später.', 'بعد ظرف متقدم: الفعل قبل الفاعل (kommt er)'],
      ['Wahrscheinlich regnet es morgen den ganzen Tag.', 'تتوقع مطر الغد على الأرجح', 'Wahrscheinlich درجة أعلى من vielleicht، وتأخذ الموضع الأول مع تقديم الفعل regnet على es', 'Wahrscheinlich es regnet morgen den ganzen Tag.', 'الظرف المتقدم يشغل الموضع الأول فالفعل ثانٍ: regnet es']
    ],
    [
      ['Er könnte noch unterwegs sein.', 'ربما هو في الطريق بعد', 'Er könnte noch unterwegs ist.', 'könnte للظن والمصدر sein في النهاية', 'könnte'],
      ['Sie ist wohl schon zu Hause.', 'أغلب الظن أنها في البيت الآن', 'Sie wohl ist schon zu Hause.', 'الفعل ثانٍ وwohl بعده في الوسط', 'wohl'],
      ['Vielleicht kommt er morgen später.', 'ربما يأتي غدًا متأخرًا', 'Vielleicht er kommt morgen später.', 'بعد Vielleicht المتقدمة: الفعل قبل الفاعل', 'Vielleicht'],
      ['Wahrscheinlich regnet es morgen den ganzen Tag.', 'الأرجح أن يمطر غدًا طوال النهار', 'Wahrscheinlich es regnet morgen den ganzen Tag.', 'الظرف المتقدم ثم الفعل: regnet es', 'Wahrscheinlich']
    ],
    'Er könnte noch unterwegs sein.',
    'Ich vermute, dass sie den Zug verpasst hat.',
    'Wiederhole morgen die fünf Sätze: Er könnte noch unterwegs sein. Sie ist wohl schon zu Hause. Vielleicht kommt er morgen später. Wahrscheinlich regnet es morgen den ganzen Tag. Ich vermute, dass sie den Zug verpasst hat.',
    'غدًا أعد الجمل الخمس وقارن قوة كل علامة ظن.',
    {
      factFamilies: ['konjugation', 'wortstellung', 'wortstellung', 'wortstellung'],
      imitateNearMiss: 'können',
      transformHint: 'في جملة الختام يُدخَل الظن بفعل كامل: Ich vermute, dass … فيأتي المساعد hat في نهاية الجملة الثانوية بعد verpasst.',
      orderSentence: 'Vielleicht kommt er morgen später.',
      checkOrderSentence: 'Wahrscheinlich regnet es morgen den ganzen Tag.',
      orderAr: 'رتّب جملة الظن: ظرف الاحتمال Vielleicht أولًا ثم الفعل kommt في الموضع الثاني قبل الفاعل er.',
      orderPromptAr: 'رتّب الجملة واضعًا Vielleicht أولًا وkommt في الموضع الثاني.',
      orderHints: ['ظرف الاحتمال Vielleicht يشغل الموضع الأول.', 'الفعل kommt في الموضع الثاني قبل الفاعل er.'],
      writing: {
        zeigt: 'Fünf Sätze mit Vermutung in Stufen',
        erklaerung: 'اكتب الجمل الخمس كاملة: احتمال مع Er könnte والمصدر sein أخيرًا، وترجيح مع wohl بعد الفعل، وإمكان مع Vielleicht وقلب kommt er، وأرجحية مع Wahrscheinlich وregnet es، وتخمين بفعل كامل Ich vermute, dass … hat.',
        hinweise: ['اختر الدرجة الصادقة: könnte/vielleicht احتمال، وwohl/wahrscheinlich ترجيح أقوى.', 'الظرف متقدمًا يقلب الترتيب دائمًا: Vielleicht kommt er لا er kommt (وليست maybe الإنجليزية).'],
        prompt: 'اكتب جمل الظن الخمس المستهدفة من الذاكرة مع علامة الدرجة وترتيب الكلمات الصحيح.',
        promptDe: 'Er könnte noch unterwegs sein. · Sie ist wohl schon zu Hause. · Vielleicht kommt er morgen später. · Wahrscheinlich regnet es morgen den ganzen Tag. · Ich vermute, dass sie den Zug verpasst hat.',
        points: ['Er könnte noch unterwegs sein.', 'Sie ist wohl schon zu Hause.', 'Vielleicht kommt er morgen später.', 'Wahrscheinlich regnet es morgen den ganzen Tag.', 'Ich vermute, dass sie den Zug verpasst hat.'],
        minWords: 31,
        frage: 'اكتب جمل الظن الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Er könnte noch unterwegs sein. Sie ist wohl schon zu Hause. Vielleicht kommt er morgen später. Wahrscheinlich regnet es morgen den ganzen Tag. Ich vermute, dass sie den Zug verpasst hat.',
      summaryDe: 'Er könnte noch unterwegs sein. Sie ist wohl schon zu Hause. Vielleicht kommt er morgen später. Wahrscheinlich regnet es morgen den ganzen Tag. Ich vermute, dass sie den Zug verpasst hat.',
      summaryAr: 'الظن درجات: könnte + مصدر أخيرًا للاحتمال، وwohl بعد الفعل للترجيح، وVielleicht وWahrscheinlich متقدمتين مع تقديم الفعل على الفاعل، وich vermute, dass … بفعل أخير في الثانوية.',
      summaryRecap: 'ظن بدرجات: könnte، wohl، vielleicht',
      hwHintDe: 'Die Stufen: sicherlich · wahrscheinlich · wohl · vielleicht · kaum. Nicht „maybe" wie im Englischen; ohne wohl klingt „Sie ist zu Hause" wie eine sichere Nachricht — mit wohl bleibt es eine Vermutung.'
    }),

  U('b1-u2-l8', 'B1', 'وصف الإحصاء: الرقم والارتفاع والمقارنة', 'Statistik beschreiben: Zahl, Anstieg und Vergleich', 'pruefstrategie',
    'Am Ende beschreibst du eine Statistik in fünf Sätzen, ohne eine Ursache zu erfinden',
    'في النهاية تصف إحصاءً في خمس جمل كاملة دون أن تخترع سببًا.',
    [
      ['Die Grafik zeigt die Zahl der Gäste pro Monat.', 'تخبر بما يعرضه الرسم أصلًا', 'أولًا موضوع الرسم بالمضاف إليه Genitiv: die Zahl der Gäste (لا von die)', 'Die Grafik zeigt die Zahl von die Gäste pro Monat.', 'المضاف بالGenitiv: der Gäste لا von die Gäste'],
      ['Die Preise sind deutlich gestiegen.', 'تعلن ارتفاع الأسعار بوضوح', 'steigen فعل حركة يأخذ sein في الماضي: sind gestiegen، وdeutlich تبيان للحجم قبل أي تأويل', 'Die Preise haben deutlich gestiegen.', 'gestiegen مع sein لا haben'],
      ['Im Vergleich zum Vorjahr ist die Zahl kleiner.', 'تقارن الرقم بالعام الماضي', 'صيغة المقارنة الثابتة im Vergleich zum … تفتح الجملة، ثم ist قبل الفاعل، والصفة المقارنة kleiner', 'Im Vergleich zu Vorjahr ist die Zahl kleiner.', 'مع الاسم المعرفة: zum Vorjahr لا zu فقط'],
      ['Der Anteil der Frauen macht vierzig Prozent aus.', 'تقول كم يشكل نصيب النساء', 'النصيب مع ausmachen المنفصل: macht … aus، وProzent بعد الرقم بلا صيغة جمع', 'Der Anteil der Frauen macht vierzig Prozent.', 'بادئة ausmachen المنفصلة أخيرًا: macht … aus']
    ],
    [
      ['Die Grafik zeigt die Zahl der Gäste pro Monat.', 'يعرض الرسم عدد الضيوف في الشهر', 'Die Grafik zeigt die Zahl von die Gäste pro Monat.', 'الموضوع بالGenitiv: zeigt die Zahl der Gäste', 'zeigt'],
      ['Die Preise sind deutlich gestiegen.', 'ارتفعت الأسعار بوضوح', 'Die Preise haben deutlich gestiegen.', 'الارتفاع مع sein: sind gestiegen', 'gestiegen'],
      ['Im Vergleich zum Vorjahr ist die Zahl kleiner.', 'مقارنة بالعام السابق الرقم أصغر', 'Im Vergleich zu Vorjahr ist die Zahl kleiner.', 'صيغة المقارنة الثابتة: im Vergleich zum', 'Vergleich'],
      ['Der Anteil der Frauen macht vierzig Prozent aus.', 'يشكل نصيب النساء أربعين بالمئة', 'Der Anteil der Frauen macht vierzig Prozent.', 'النصيب مع macht … aus المنفصلة', 'aus']
    ],
    'Die Grafik zeigt die Zahl der Gäste pro Monat.',
    'Die Quelle nennt keine Ursache für den Rückgang.',
    'Wiederhole morgen die fünf Sätze: Die Grafik zeigt die Zahl der Gäste pro Monat. Die Preise sind deutlich gestiegen. Im Vergleich zum Vorjahr ist die Zahl kleiner. Der Anteil der Frauen macht vierzig Prozent aus. Die Quelle nennt keine Ursache für den Rückgang.',
    'غدًا أعد وصف الإحصاء كاملًا ولاحظ فعل كل تغيّر.',
    {
      factFamilies: ['kasus', 'konjugation', 'präposition', 'wortstellung'],
      imitateNearMiss: 'zeigen',
      transformHint: 'في جملة الختام الخاتمة الصادقة: Die Quelle nennt keine Ursache … — المصدر يُسمّى والسبب الغائب لا يُخترع، وحرف für يتبعه نصب: für den Rückgang.',
      orderSentence: 'Im Vergleich zum Vorjahr ist die Zahl kleiner.',
      checkOrderSentence: 'Im Vergleich zum Vorjahr stiegen die Preise leicht.',
      orderAr: 'رتّب جملة المقارنة: عبارة Im Vergleich zum Vorjahr أولًا ثم الفعل ist في الموضع الثاني قبل الفاعل die Zahl.',
      orderPromptAr: 'رتّب الجملة واضعًا Im Vergleich zum Vorjahr أولًا والفعل في الموضع الثاني قبل الفاعل.',
      orderHints: ['عبارة المقارنة Im Vergleich zum Vorjahr تشغل الموضع الأول.', 'الفعل ist في الموضع الثاني قبل الفاعل die Zahl.'],
      writing: {
        zeigt: 'Eine Statistik in fünf Sätzen',
        erklaerung: 'اكتب وصف الإحصاء في خمس جمل كاملة: موضوع الرسم بالمضاف إليه، وارتفاع مع sind gestiegen، ومقارنة مع im Vergleich zum Vorjahr والصفة المقارنة، ونصيب مع macht … aus، وخاتمة بالمصدر بلا سبب مخترع.',
        hinweise: ['الوصف قبل التأويل: ماذا يبين الرسم وكيف تغير الرقم ثم المقارنة — ولا سبب إن لم يذكره المصدر.', 'أفعال التغير تنقسم: gestiegen/gesunken مع sein، وzugenommen/abgenommen مع haben.'],
        prompt: 'اكتب جمل وصف الإحصاء الخمس المستهدفة من الذاكرة مع الأفعال المساعدة والبادئات الصحيحة.',
        promptDe: 'Die Grafik zeigt die Zahl der Gäste pro Monat. · Die Preise sind deutlich gestiegen. · Im Vergleich zum Vorjahr ist die Zahl kleiner. · Der Anteil der Frauen macht vierzig Prozent aus. · Die Quelle nennt keine Ursache für den Rückgang.',
        points: ['Die Grafik zeigt die Zahl der Gäste pro Monat.', 'Die Preise sind deutlich gestiegen.', 'Im Vergleich zum Vorjahr ist die Zahl kleiner.', 'Der Anteil der Frauen macht vierzig Prozent aus.', 'Die Quelle nennt keine Ursache für den Rückgang.'],
        minWords: 38,
        frage: 'اكتب جمل وصف الإحصاء الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Grafik zeigt die Zahl der Gäste pro Monat. Die Preise sind deutlich gestiegen. Im Vergleich zum Vorjahr ist die Zahl kleiner. Der Anteil der Frauen macht vierzig Prozent aus. Die Quelle nennt keine Ursache für den Rückgang.',
      summaryDe: 'Die Grafik zeigt die Zahl der Gäste pro Monat. Die Preise sind deutlich gestiegen. Im Vergleich zum Vorjahr ist die Zahl kleiner. Der Anteil der Frauen macht vierzig Prozent aus. Die Quelle nennt keine Ursache für den Rückgang.',
      summaryAr: 'وصف الإحصاء بخطوات: موضوع الرسم بالGenitiv، والتغيّر بفعل مساعد صحيح (sind gestiegen)، والمقارنة بـim Vergleich zum Vorjahr مع صفة مقارنة، والنصيب بـmacht … Prozent aus، وخاتمة تذكر المصدر بلا سبب مخترع.',
      summaryRecap: 'وصف الرقم قبل الحكم عليه',
      hwHintDe: 'Beschreibe zuerst, deute später. Nicht aus dem Englischen: kein „went up", sondern „ist gestiegen". Gesprochen hört man „von den Preisen", in der Beschreibung steht der Genitiv: die Entwicklung der Preise.'
    }),

  U('b1-u3-l1', 'B1', 'كتابة طلب العمل: التحية والمرفق وجملة الختام', 'Bewerbung schreiben: Anrede, Anhang und Schlusssatz', 'register',
    'Am Ende schreibst du eine Bewerbung in fünf Sätzen: Anrede, Anlage, Erfahrung, Vorstellung und Schlusssatz',
    'في النهاية تكتب طلب عمل كاملًا في خمس جمل: التحية والمرفق والخبرة والتقديم الذاتي وجملة الختام.',
    [
      ['Sehr geehrte Damen und Herren, ich bewerbe mich um die Stelle.', 'تفتح بالتحية الرسمية وتتقدّم إلى الوظيفة', 'التحية الرسمية Sehr geehrte وبعد الفاصلة يستمر الحرف صغيرًا، وإطار التقدم sich bewerben um لا für', 'Sehr geehrte Damen und Herren, ich bewerbe mich für die Stelle.', 'الإطار الثابت: bewerbe mich um لا für'],
      ['Anbei sende ich Ihnen meinen Lebenslauf.', 'تذكر المرفق وترسله', 'Anbei المتقدمة تشغل الموضع الأول فالفعل sende ثانٍ قبل الفاعل، وIhnen داتيف المخاطب الرسمي الكبير', 'Anbei ich sende Ihnen meinen Lebenslauf.', 'القلب بعد Anbei: Anbei sende ich لا ich قبله'],
      ['Ich bringe fünf Jahre Erfahrung mit.', 'تعلن سنوات خبرتك', 'mitbringen المنفصل: bringe … mit في نهاية الجملة، والكمية بلا أداة: fünf Jahre Erfahrung', 'Ich bringe fünf Jahre Erfahrung.', 'البادئة المنفصلة mit أخيرًا: bringe mit'],
      ['Gern stelle ich mich in einem Gespräch vor.', 'تعرض تقديم نفسك في المقابلة', 'sich vorstellen المنفصل: stelle … vor، وGern المتقدمة تجعل الفعل قبل الفاعل ich والانعكاسي mich', 'Gern stelle ich mich in einem Gespräch.', 'البادئة المنفصلة vor أخيرًا: stelle vor']
    ],
    [
      ['Sehr geehrte Damen und Herren, ich bewerbe mich um die Stelle.', 'السيدات والسادة المحترمون، أتقدم إلى الوظيفة', 'Sehr geehrte Damen und Herren, ich bewerbe mich für die Stelle.', 'التحية والإطار: bewerbe mich um die Stelle', 'bewerbe'],
      ['Anbei sende ich Ihnen meinen Lebenslauf.', 'أرفق لكم سيرتي الذاتية', 'Anbei ich sende Ihnen meinen Lebenslauf.', 'المرفق مع القلب: Anbei sende ich Ihnen', 'sende'],
      ['Ich bringe fünf Jahre Erfahrung mit.', 'أجلب معي خمس سنوات من الخبرة', 'Ich bringe fünf Jahre Erfahrung.', 'الخبرة مع mitbringen المنفصل', 'mit'],
      ['Gern stelle ich mich in einem Gespräch vor.', 'يسعدني تقديم نفسي في المقابلة', 'Gern stelle ich mich in einem Gespräch.', 'التقديم الذاتي مع stelle … vor المنفصل', 'vor']
    ],
    'Sehr geehrte Damen und Herren, ich bewerbe mich um die Stelle.',
    'Über eine Einladung zum Gespräch würde ich mich freuen.',
    'Wiederhole morgen die fünf Sätze: Sehr geehrte Damen und Herren, ich bewerbe mich um die Stelle. Anbei sende ich Ihnen meinen Lebenslauf. Ich bringe fünf Jahre Erfahrung mit. Gern stelle ich mich in einem Gespräch vor. Über eine Einladung zum Gespräch würde ich mich freuen.',
    'غدًا أعد طلب العمل كاملًا ولاحظ البادئات المنفصلة وموضع الفعل.',
    {
      factFamilies: ['präposition', 'wortstellung', 'wortstellung', 'wortstellung'],
      imitateNearMiss: 'bewerben',
      transformHint: 'في جملة الختام تحكم العبارة المتقدمة في الترتيب: Über eine Einladung zum Gespräch würde ich mich freuen — الفعل würde ثانٍ قبل ich والضمير الانعكاسي mich قبل المصدر freuen أخيرًا.',
      orderSentence: 'Anbei sende ich Ihnen meinen Lebenslauf.',
      checkOrderSentence: 'Gern stelle ich mich in einem Gespräch vor.',
      checkOrderRightBracket: 'vor.',
      orderAr: 'رتّب جملة المرفق: Anbei أولًا ثم الفعل sende ثانيًا قبل الفاعل ich وضمير الداتيف الرسمي Ihnen.',
      orderPromptAr: 'رتّب الجملة واضعًا الظرف أولًا والفعل في الموضع الثاني قبل الفاعل.',
      orderHints: ['Anbei تشغل الموضع الأول فالفعل يأتي قبل ich.', 'بقاء Ihnen رسميًا وكبيرًا بعد الفاعل.'],
      writing: {
        zeigt: 'Eine Bewerbung in fünf Sätzen',
        erklaerung: 'اكتب طلب عمل كاملًا في خمس جمل: تحية رسمية بعد فاصلتها حرف صغير، وتقدم بإطار um، ومرفق بقلب بعد Anbei، وسنوات خبرة بفعل منفصل، وتقديم ذاتي، وختام مهذب بعضو متقدم وفعل ثانٍ.',
        hinweise: ['القالب أولًا: التحية ثم التقديم ثم المرفق — وكل فعل منفصل يرسل بادئته إلى نهاية جملته.', 'أخطاء القالب الألماني الشائعة من العربية: für بدل um، وسقوط mit/vor، وغياب القلب بعد عضو متقدم.'],
        prompt: 'اكتب جمل طلب العمل الخمس المستهدفة من الذاكرة مع البادئات والقلب الصحيحين.',
        promptDe: 'Sehr geehrte Damen und Herren, ich bewerbe mich um die Stelle. · Anbei sende ich Ihnen meinen Lebenslauf. · Ich bringe fünf Jahre Erfahrung mit. · Gern stelle ich mich in einem Gespräch vor. · Über eine Einladung zum Gespräch würde ich mich freuen.',
        points: ['Sehr geehrte Damen und Herren, ich bewerbe mich um die Stelle.', 'Anbei sende ich Ihnen meinen Lebenslauf.', 'Ich bringe fünf Jahre Erfahrung mit.', 'Gern stelle ich mich in einem Gespräch vor.', 'Über eine Einladung zum Gespräch würde ich mich freuen.'],
        minWords: 40,
        frage: 'اكتب جمل طلب العمل الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Sehr geehrte Damen und Herren, ich bewerbe mich um die Stelle. Anbei sende ich Ihnen meinen Lebenslauf. Ich bringe fünf Jahre Erfahrung mit. Gern stelle ich mich in einem Gespräch vor. Über eine Einladung zum Gespräch würde ich mich freuen.',
      summaryDe: 'Sehr geehrte Damen und Herren, ich bewerbe mich um die Stelle. Anbei sende ich Ihnen meinen Lebenslauf. Ich bringe fünf Jahre Erfahrung mit. Gern stelle ich mich in einem Gespräch vor. Über eine Einladung zum Gespräch würde ich mich freuen.',
      summaryAr: 'طلب العمل قالب من خمس جمل: تحية رسمية يتقدم بها بـum، ومرفق يرسل بقلب بعد Anbei، وخبرة تعلنها بـmitbringen المنفصل، وتقديم ذاتي بـstelle … vor، وختام مهذب يبقي الفعل في الموضع الثاني بعد عضو متقدم.',
      summaryRecap: 'قالب الطلب الكامل بخمس جمل',
      hwHintDe: 'Schreibe es wie in der Firma: nicht „apply" oder „attached", sondern „ich bewerbe mich" und „Anbei sende ich Ihnen …". Nach dem Komma der Anrede geht es klein weiter: „Sehr geehrte Damen und Herren, ich …".'
    }),

  U('b1-u3-l2', 'B1', 'الشكوى الرسمية: الشكوى بالحرف والواقعة والمطلب', 'Beschwerde: beschweren über, Tatsache und Bitte um', 'register',
    'Am Ende schreibst du eine sachliche Beschwerde in fünf Sätzen: Grund, Tatsache, Bitte, Prüfung und Frist',
    'في النهاية تكتب شكوى رسمية كاملة في خمس جمل: السبب والواقعة والمطلب وطلب الفحص والأجل.',
    [
      ['Ich beschwere mich über die späte Lieferung.', 'تصرح بموضوع شكواك رسميًا', 'sich beschweren مربوط دائمًا بـüber + النصب والانعكاسي mich يلحق الفعل', 'Ich beschwere mich für die späte Lieferung.', 'حرف الشكوى الثابت: über لا für'],
      ['Die Ware kam zwei Wochen zu spät.', 'تثبت الواقعة بلا مبالغة', 'مقياس التأخر يأتي قبل الظرف: zwei Wochen zu spät، والماضي kam بلا ضمير موضوع', 'Die Ware kam zwei Wochen spät zu.', 'الترتيب الثابت: zwei Wochen zu spät'],
      ['Ich bitte Sie um eine Rückerstattung.', 'تطلب رد المبلغ بأدب صريح', 'bitten يأخذ مخاطبًا كبيرًا (Sie) ثم um + المطلوب: bitte Sie um', 'Ich bitte Sie für eine Rückerstattung.', 'إطار الطلب: bitten um لا für'],
      ['Bitte prüfen Sie den Fall noch einmal.', 'تطلب إعادة فحص ملفك', 'الأمر الرسمي: فعل أولًا prüfen ثم الضمير الكبير Sie ثانيًا: prüfen Sie', 'Bitte Sie prüfen den Fall noch einmal.', 'الأمر الرسمي يبدأ بالفعل: prüfen Sie لا الفاعل قبله']
    ],
    [
      ['Ich beschwere mich über die späte Lieferung.', 'أشتكي من التأخر في التسليم', 'Ich beschwere mich für die späte Lieferung.', 'الشكوى مع über أعلى الفعل', 'beschwere'],
      ['Die Ware kam zwei Wochen zu spät.', 'وصلت البضاعة متأخرة أسبوعين', 'Die Ware kam zwei Wochen spät zu.', 'الواقعة كاملة بمقياسها', 'spät'],
      ['Ich bitte Sie um eine Rückerstattung.', 'أطلب منكم رد المبلغ', 'Ich bitte Sie für eine Rückerstattung.', 'المطلب بأدب: bitte Sie um', 'bitte'],
      ['Bitte prüfen Sie den Fall noch einmal.', 'افحصوا ملفي من جديد', 'Bitte Sie prüfen den Fall noch einmal.', 'الأمر الرسمي: prüfen Sie den Fall', 'prüfen']
    ],
    'Ich beschwere mich über die späte Lieferung.',
    'Ich setze Ihnen eine Frist von zwei Wochen.',
    'Wiederhole morgen die fünf Sätze: Ich beschwere mich über die späte Lieferung. Die Ware kam zwei Wochen zu spät. Ich bitte Sie um eine Rückerstattung. Bitte prüfen Sie den Fall noch einmal. Ich setze Ihnen eine Frist von zwei Wochen.',
    'غدًا أعد الشكوى كاملة ولاحظ الحروف الثابتة وصيغة الأمر الرسمي.',
    {
      factFamilies: ['präposition', 'wortstellung', 'präposition', 'wortstellung'],
      imitateNearMiss: 'beschwerst',
      transformHint: 'في جملة الختام الأجل إعلان حاسم لا تهديد: Ich setze Ihnen eine Frist von zwei Wochen — المدة هنا مقدارًا بـvon، والنبرة تبقى مهنية بلا اتهام.',
      orderSentence: 'Bitte prüfen Sie den Fall noch einmal.',
      checkOrderSentence: 'Ich beschwere mich über die späte Lieferung.',
      orderAr: 'رتّب جملة الأمر الرسمي: Bitte أولًا ثم الفعل prüfen في الموضع الثاني قبل الضمير الكبير Sie.',
      orderPromptAr: 'رتّب الجملة واضعًا الظرف أولًا والفعل في الموضع الثاني قبل الفاعل.',
      orderHints: ['Bitte تشغل الموضع الأول فالفعل prüfen قبل Sie في الأمر الرسمي.', 'Sie تبقى كبيرة بعد الفعل دائمًا.'],
      writing: {
        zeigt: 'Eine Beschwerde in fünf Sätzen',
        erklaerung: 'اكتب شكوى كاملة في خمس جمل: سبب بحرف über الثابت، وواقعة مؤرخة بالمقياس، ومطلب بـ bitte Sie um، وأمر رسمي بـ prüfen Sie، وأجل حاسم بـ Frist von.',
        hinweise: ['الترتيب هو الرسالة: سبب، ثم واقعة، ثم مطلب، ثم فحص، ثم أجل — لا إهانة تبني حلًا.', 'حروف هذا الدرس ثابتة: beschweren über وbitten um وsetze eine Frist von.'],
        prompt: 'اكتب جمل الشكوى الخمس المستهدفة من الذاكرة مع الحروف الثابتة وصيغة الأمر الرسمية.',
        promptDe: 'Ich beschwere mich über die späte Lieferung. · Die Ware kam zwei Wochen zu spät. · Ich bitte Sie um eine Rückerstattung. · Bitte prüfen Sie den Fall noch einmal. · Ich setze Ihnen eine Frist von zwei Wochen.',
        points: ['Ich beschwere mich über die späte Lieferung.', 'Die Ware kam zwei Wochen zu spät.', 'Ich bitte Sie um eine Rückerstattung.', 'Bitte prüfen Sie den Fall noch einmal.', 'Ich setze Ihnen eine Frist von zwei Wochen.'],
        minWords: 35,
        frage: 'اكتب جمل الشكوى الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Ich beschwere mich über die späte Lieferung. Die Ware kam zwei Wochen zu spät. Ich bitte Sie um eine Rückerstattung. Bitte prüfen Sie den Fall noch einmal. Ich setze Ihnen eine Frist von zwei Wochen.',
      summaryDe: 'Ich beschwere mich über die späte Lieferung. Die Ware kam zwei Wochen zu spät. Ich bitte Sie um eine Rückerstattung. Bitte prüfen Sie den Fall noch einmal. Ich setze Ihnen eine Frist von zwei Wochen.',
      summaryAr: 'شكوى رسمية من خمس خطوات: موضوع الشكوى بـüber ثابتة، وواقعة بمقياس التأخر، ومطلب بـbitte Sie um، وأمر رسمي بالفعل قبل Sie، وأخيرًا أجل حاسم بمقدار von.',
      summaryRecap: 'الشكوى المهذبة بخمس خطوات',
      hwHintDe: 'Sachlich wirkt mehr als laut: Nicht „I demand ..." und kein Satz wie „Das ist eine Frechheit" ist schon eine Beschwerde. Die Beschwerde nennt den Grund, die Tatsache und die Bitte — sachlich und ohne Beleidigung.'
    }),

  U('b1-u3-l3', 'B1', 'البيئة: فرز النفايات والتوفير والاستغناء', 'Umwelt: Müll trennen, sparen und verzichten', 'lexik-kollokation',
    'Am Ende nennst du vier Umwelt-Gewohnheiten und eine Klimafolge in fünf Sätzen',
    'في النهاية تسمي أربع عادات بيئية ونتيجة مناخية في خمس جمل كاملة.',
    [
      ['Wir trennen den Müll in drei Tonnen.', 'تعلن فرز نفايات منزلك', 'فعل الفرز بأدواته هو trennen + النصب، ووصف الوعاء مع in + النصب لحاويات الفرز: in drei Tonnen', 'Wir trennen den Mülls in drei Tonnen.', 'النصب بلا نهاية ملكية: den Müll لا Mülls'],
      ['Der Plastik bleibt Jahrhunderte in der Natur.', 'تشير إلى بقاء البلاستيك الطويل', 'الادعاء بصيغة البقاء bleibt قبل مقدار الزمن Jahrhunderte والمكان بداتيف: in der Natur', 'Der Plastik bleiben Jahrhunderte in der Natur.', 'الفعل مفرد مع der: bleibt لا bleiben'],
      ['Beim Einkaufen verzichten wir auf Plastiktüten.', 'تعلن الاستغناء عن الأكياس عند التسوق', 'verzichten مرتبط بـauf + النصب، وعبارة الزمن المتقدمة Beim Einkaufen تضع الفعل قبل الفاعل wir', 'Beim Einkaufen verzichten wir Plastiktüten.', 'حرف الاستغناء لازم: verzichten auf لا بلا حرف'],
      ['So sparen wir Wasser und Strom.', 'تربط العادتين بنتيجة التوفير', 'So المتقدمة تحجز الموضع الأول فالفعل ثانيًا قبل الفاعل wir', 'So wir sparen Wasser und Strom.', 'القلب بعد So: So sparen wir لا نبدأ بالفاعل']
    ],
    [
      ['Wir trennen den Müll in drei Tonnen.', 'نفرز النفايات في ثلاث حاويات', 'Wir trennen den Mülls in drei Tonnen.', 'الفرز يعني trennen', 'trennen'],
      ['Der Plastik bleibt Jahrhunderte in der Natur.', 'يبقى البلاستيك قرونًا في الطبيعة', 'Der Plastik bleiben Jahrhunderte in der Natur.', 'البقاء الطويل بـbleibt مفردًا', 'bleibt'],
      ['Beim Einkaufen verzichten wir auf Plastiktüten.', 'عند التسوق نستغني عن الأكياس البلاستيكية', 'Beim Einkaufen verzichten wir Plastiktüten.', 'الاستغناء بحرف auf ثابت', 'auf'],
      ['So sparen wir Wasser und Strom.', 'هكذا نوفر الماء والكهرباء', 'So wir sparen Wasser und Strom.', 'التوفير بعد So بالقلب', 'sparen']
    ],
    'Wir trennen den Müll in drei Tonnen.',
    'Die Temperaturen steigen jedes Jahr weiter.',
    'Wiederhole morgen die fünf Sätze: Wir trennen den Müll in drei Tonnen. Der Plastik bleibt Jahrhunderte in der Natur. Beim Einkaufen verzichten wir auf Plastiktüten. So sparen wir Wasser und Strom. Die Temperaturen steigen jedes Jahr weiter.',
    'غدًا أعد سرد العادات والنتيجة مع الانتباه إلى القلب وحرف الاستغناء.',
    {
      factFamilies: ['kasus', 'konjugation', 'präposition', 'wortstellung'],
      imitateNearMiss: 'trennt',
      transformHint: 'في جملة الختام النتيجة حقيقة لا شعار: Die Temperaturen steigen jedes Jahr weiter — وفاق الفعل جمعًا فاعله الجمع.',
      orderSentence: 'So sparen wir Wasser und Strom.',
      checkOrderSentence: 'Der Plastik bleibt Jahrhunderte in der Natur.',
      orderAr: 'رتّب جملة التوفير: So أولًا ثم الفعل sparen في الموضع الثاني قبل الفاعل wir.',
      orderPromptAr: 'رتّب الجملة واضعًا الكلمة الأولى في الموضع الأول والفعل في الموضع الثاني قبل الفاعل.',
      orderHints: ['So تشغل الموضع الأول فالفعل قبل wir.', 'wir تأتي بعد الفعل رأسًا.'],
      writing: {
        zeigt: 'Umwelt in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل بيئية: عادة فرز بتريبها، وحقيقة بقاء البلاستيك، واستغناء بحرف ثابت عند التسوق، وسبب التوفير بالقلب بعد So، ونتيجة مناخية بفعل جمع.',
        hinweise: ['العادات لها أفعالها الأولى: trennen وsparen وverzichten auf — والنتيجة تضيء من دون شعار.', 'لا تخلط الإنجليزية: ليست „sorten" ولا „saven"؛ الفعل الألماني وحدته كاملة.'],
        prompt: 'اكتب جمل البيئة الخمس المستهدفة من الذاكرة مع القلب وحرف الاستغناء والاتساق العددي.',
        promptDe: 'Wir trennen den Müll in drei Tonnen. · Der Plastik bleibt Jahrhunderte in der Natur. · Beim Einkaufen verzichten wir auf Plastiktüten. · So sparen wir Wasser und Strom. · Die Temperaturen steigen jedes Jahr weiter.',
        points: ['Wir trennen den Müll in drei Tonnen.', 'Der Plastik bleibt Jahrhunderte in der Natur.', 'Beim Einkaufen verzichten wir auf Plastiktüten.', 'So sparen wir Wasser und Strom.', 'Die Temperaturen steigen jedes Jahr weiter.'],
        minWords: 32,
        frage: 'اكتب جمل البيئة الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Wir trennen den Müll in drei Tonnen. Der Plastik bleibt Jahrhunderte in der Natur. Beim Einkaufen verzichten wir auf Plastiktüten. So sparen wir Wasser und Strom. Die Temperaturen steigen jedes Jahr weiter.',
      summaryDe: 'Wir trennen den Müll in drei Tonnen. Der Plastik bleibt Jahrhunderte in der Natur. Beim Einkaufen verzichten wir auf Plastiktüten. So sparen wir Wasser und Strom. Die Temperaturen steigen jedes Jahr weiter.',
      summaryAr: 'البيئة في خمس جمل: فرز بفعل trennen، وحقيقة بقاء البلاستيك قرونًا، واستغناء عن الأكياس عند التسوق بحرفه الثابت auf، وتوفير يعلنه القلب بعد So، وارتفاع سنوي للحرارة كنتيجة مناخية.',
      summaryRecap: 'عادات بيئية بخمس خطوات',
      hwHintDe: 'Nicht aus dem Englischen: nicht „sort the trash" oder „sorten", sondern den Müll trennen; nicht „saven" und nicht „save money" wörtlich für Wasser — sparen. Und auch kein „throw away", „throwen" oder „wegthrowen": Das echte Verb heißt wegwerfen: Wirf weniger weg!'
    }),

  U('b1-u3-l4', 'B1', 'الإعلام: التقرير بالحرف ونسب الرأي وفحص المصدر', 'Medien: berichten über, meinen und Quellen prüfen', 'pruefstrategie',
    'Am Ende beschreibst du Medien in fünf Sätzen: Bericht, Meldung, Meinung, Quelle und Falschmeldung',
    'في النهاية تصف عالم الإعلام في خمس جمل: التقرير والخبر العاجل ونسب الرأي وفحص المصدر والخبر الكاذب.',
    [
      ['Die Medien berichten über die Wahlen.', 'تعرف بما تغطيه الوسائل', 'berichten مربوط بـ über + النصب والفاعل الجمع تليه الصيغة الجمع', 'Die Medien berichten für die Wahlen.', 'حرف التقرير الثابت: über لا für'],
      ['Im Radio kam die Meldung zuerst.', 'تحكي أول مذيع للخبر', 'العبارة المتقدمة Im Radio تشغل الموضع الأول فالفعل kam ثانيًا قبل الفاعل المؤنث', 'Im Radio die Meldung kam zuerst.', 'القلب بعد العبارة: kam die Meldung لا الفاعل قبل الفعل'],
      ['Der Autor meint, dass das riskant ist.', 'تنسب الرأي إلى صاحبه', 'meint ينسب الحكم، وفعل جملة dass في النهاية: dass das riskant ist بفعل أخير', 'Der Autor meint, dass das ist riskant.', 'بعد dass يقع الفعل أخيرًا: riskant ist'],
      ['Man muss jede Quelle prüfen.', 'تعلن قاعدة نقد المصدر', 'modal بوجوب عام: man muss + مصدر في النهاية prüfen', 'Man musst jede Quelle prüfen.', 'مع man مفرد غائب: muss لا musst']
    ],
    [
      ['Die Medien berichten über die Wahlen.', 'تغطي الوسائل الانتخابات', 'Die Medien berichten für die Wahlen.', 'التقرير مع über ثابت', 'berichten'],
      ['Im Radio kam die Meldung zuerst.', 'ورد الخبر العاجل في المذياع أولًا', 'Im Radio die Meldung kam zuerst.', 'الأسبقية مع القلب: kam die Meldung', 'kam'],
      ['Der Autor meint, dass das riskant ist.', 'يرى الكاتب أن هذا خطر', 'Der Autor meint, dass das ist riskant.', 'الرأي منسوب بـmeint مع فعل نهائي', 'meint'],
      ['Man muss jede Quelle prüfen.', 'يجب فحص كل مصدر', 'Man musst jede Quelle prüfen.', 'واجب الفحص بصيغة man muss', 'muss']
    ],
    'Die Medien berichten über die Wahlen.',
    'Die Falschmeldung verbreitete sich schnell.',
    'Wiederhole morgen die fünf Sätze: Die Medien berichten über die Wahlen. Im Radio kam die Meldung zuerst. Der Autor meint, dass das riskant ist. Man muss jede Quelle prüfen. Die Falschmeldung verbreitete sich schnell.',
    'غدًا أعد وصف الإعلام كاملًا ولاحظ القلب والفعل الأخير بعد dass.',
    {
      factFamilies: ['präposition', 'wortstellung', 'wortstellung', 'konjugation'],
      imitateNearMiss: 'berichtet',
      transformHint: 'في جملة الختام الفعل انعكاسي وبالسرد: Die Falschmeldung verbreitete sich schnell — الضمير sich لا يسقط وصيغة الماضي verbreitete.',
      orderSentence: 'Über den Unfall berichtet der Sender heute.',
      checkOrderSentence: 'Jede Quelle muss man prüfen.',
      orderAr: 'رتّب جملة التقرير: عبارة Über den Unfall المتقدمة أولًا ثم الفعل berichtet ثانيًا قبل الفاعل der Sender.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني قبل الفاعل.',
      orderHints: ['العبارة المتقدمة تشغل الموضع الأول فالفعل ثانيًا.', 'الفاعل المؤجل لا يسبق فعله.'],
      writing: {
        zeigt: 'Medien in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل عن الإعلام: خبر بـberichten وüber، وأسبقية إذاعية بقلب بعد im Radio، ورأي منسوب بفعل أخير بعد dass، وقاعدة فحص بصيغة man muss، وانتشار خبر كاذب بماضٍ وانعكاس.',
        hinweise: ['نقد وسيلة الإعلام يبدأ بتفكيكها: من يتولى التقرير؟ أين صدر أولًا؟ هل الرأي منسوب؟ ثم المصدر والخبر الكاذب.', 'ثوابت هذا الدرس: berichten über وواردات im وصيغة man muss وفعل أخير بعد dass.'],
        prompt: 'اكتب جمل الإعلام الخمس المستهدفة من الذاكرة مع الحرف الثابت والقلب والفعل الأخير بعد dass.',
        promptDe: 'Die Medien berichten über die Wahlen. · Im Radio kam die Meldung zuerst. · Der Autor meint, dass das riskant ist. · Man muss jede Quelle prüfen. · Die Falschmeldung verbreitete sich schnell.',
        points: ['Die Medien berichten über die Wahlen.', 'Im Radio kam die Meldung zuerst.', 'Der Autor meint, dass das riskant ist.', 'Man muss jede Quelle prüfen.', 'Die Falschmeldung verbreitete sich schnell.'],
        minWords: 29,
        frage: 'اكتب جمل الإعلام الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Medien berichten über die Wahlen. Im Radio kam die Meldung zuerst. Der Autor meint, dass das riskant ist. Man muss jede Quelle prüfen. Die Falschmeldung verbreitete sich schnell.',
      summaryDe: 'Die Medien berichten über die Wahlen. Im Radio kam die Meldung zuerst. Der Autor meint, dass das riskant ist. Man muss jede Quelle prüfen. Die Falschmeldung verbreitete sich schnell.',
      summaryAr: 'الإعلام في خمس خطوات: تقرير بحرف über ثابت، وخبر يصل أولًا بقلب بعد العبارة المكانية، ورأي منسوب إلى صاحبه بفعل أخير بعد dass، وقاعدة man muss قبل التصديق، وانتشار خبر كاذب بماضٍ وانعكاس sich.',
      summaryRecap: 'نقد الإعلام في خمس خطوات',
      hwHintDe: 'Nicht „irgendwo gelesen" — nenne die Quelle. Überprüfe, ob der Text eine Tatsache oder eine Meinung bringt, und trage die Reihenfolge nach: erst die Quelle prüfen, dann urteilen.'
    }),

  U('b1-u3-l5', 'B1', 'التكوين والدراسة: مقارنة مسارين', 'Ausbildung und Studium: zwei Wege vergleichen', 'lexik-kollokation',
    'Am Ende vergleichst du Ausbildung und Studium in fünf Sätzen und nennst einen Prüfungserfolg',
    'في النهاية تقارن التكوين والدراسة الجامعية في خمس جمل وتعلن نجاحًا في امتحان.',
    [
      ['Die Ausbildung dauert drei Jahre.', 'تذكر مدة التكوين المهني', 'قياس المدة يأتي بلا حرف جر: dauert drei Jahre لا für', 'Die Ausbildung dauert für drei Jahre.', 'المدة مباشرة: dauert + مقدار بلا حرف'],
      ['Das Studium beginnt im Oktober.', 'تعلن موعد بدء الدراسة', 'الشهر مع in المدموج في الأداة المعرفة: im Oktober لا in وحده', 'Das Studium beginnt in Oktober.', 'الشهر بـim لا بـin وحده'],
      ['Einerseits ist die Ausbildung praktisch.', 'تزن مزيتها العملية', 'Einerseits المتقدمة تشغل الموضع الأول فالفعل ist ثانيًا قبل الفاعل', 'Einerseits die Ausbildung ist praktisch.', 'القلب بعد Einerseits: ist قبل die Ausbildung'],
      ['Andererseits kostet das Studium viel Zeit.', 'تنبّه من كلفة الدراسة زمنًا', 'Andererseits المتقدمة تُحدث القلب نفسه: kostet قبل das Studium', 'Andererseits das Studium kostet viel Zeit.', 'القلب بعد Andererseits: kostet قبل das Studium']
    ],
    [
      ['Die Ausbildung dauert drei Jahre.', 'التكوين يستغرق ثلاث سنوات', 'Die Ausbildung dauert für drei Jahre.', 'المدة بلا حرف جر: dauert drei Jahre', 'dauert'],
      ['Das Studium beginnt im Oktober.', 'الدراسة تبدأ في أكتوبر', 'Das Studium beginnt in Oktober.', 'البداية في الشهر: im Oktober', 'beginnt'],
      ['Einerseits ist die Ausbildung praktisch.', 'من جهة التكوين عملي', 'Einerseits die Ausbildung ist praktisch.', 'من جهة مع القلب: Einerseits ist', 'Einerseits'],
      ['Andererseits kostet das Studium viel Zeit.', 'من جهة أخرى تبذل الدراسة وقتًا كثيرًا', 'Andererseits das Studium kostet viel Zeit.', 'من جهة أخرى مع القلب: kostet das Studium', 'Andererseits']
    ],
    'Die Ausbildung dauert drei Jahre.',
    'Ich habe die Prüfung bestanden.',
    'Wiederhole morgen die fünf Sätze: Die Ausbildung dauert drei Jahre. Das Studium beginnt im Oktober. Einerseits ist die Ausbildung praktisch. Andererseits kostet das Studium viel Zeit. Ich habe die Prüfung bestanden.',
    'غدًا قارن المسارين كاملًا وانتبه إلى القلب عند الرابطين.',
    {
      factFamilies: ['präposition', 'präposition', 'wortstellung', 'wortstellung'],
      imitateNearMiss: 'dauerst',
      transformHint: 'في جملة الختام الفعل المساعد يحكم الحكم على النجاح: Ich habe die Prüfung bestanden — النجاح مع hat لا مع bin.',
      orderSentence: 'Einerseits ist die Ausbildung praktisch.',
      checkOrderSentence: 'Andererseits kostet das Studium viel Zeit.',
      orderAr: 'رتّب شق المقارنة الأول: Einerseits أولًا ثم الفعل ist ثانيًا قبل الفاعل die Ausbildung.',
      orderPromptAr: 'رتّب الجملة واضعًا الرابط أولًا والفعل في الموضع الثاني قبل الفاعل.',
      orderHints: ['الرابط المتقدم يشغل الموضع الأول فيأتي الفعل قبله.', 'الفاعل يليه بعد الفعل في هذا الترتيب.'],
      writing: {
        zeigt: 'Zwei Wege in fünf Sätzen',
        erklaerung: 'اكتب مقارنة كاملة في خمس جمل: مدة التكوين بلا حرف جر، وبدء الدراسة بـim وشهر، وشقا الميزان برابطين متقدمين مع القلب، وختام بنتيجة امتحان بمساعد haben.',
        hinweise: ['المقارنة لا تبدأ بالرأي: مدة وبداية أولًا ثم الميزان بالرابطين — كل شق منهما يقلب الجملة.', 'الأفعال هنا من أسماء ثابتة: dauern وbeginnen وbestehen مع haben.'],
        prompt: 'اكتب جمل المقارنة الخمس المستهدفة من الذاكرة مع القلب وغياب حرف الجر عن المدة.',
        promptDe: 'Die Ausbildung dauert drei Jahre. · Das Studium beginnt im Oktober. · Einerseits ist die Ausbildung praktisch. · Andererseits kostet das Studium viel Zeit. · Ich habe die Prüfung bestanden.',
        points: ['Die Ausbildung dauert drei Jahre.', 'Das Studium beginnt im Oktober.', 'Einerseits ist die Ausbildung praktisch.', 'Andererseits kostet das Studium viel Zeit.', 'Ich habe die Prüfung bestanden.'],
        minWords: 26,
        frage: 'اكتب جمل المقارنة الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Ausbildung dauert drei Jahre. Das Studium beginnt im Oktober. Einerseits ist die Ausbildung praktisch. Andererseits kostet das Studium viel Zeit. Ich habe die Prüfung bestanden.',
      summaryDe: 'Die Ausbildung dauert drei Jahre. Das Studium beginnt im Oktober. Einerseits ist die Ausbildung praktisch. Andererseits kostet das Studium viel Zeit. Ich habe die Prüfung bestanden.',
      summaryAr: 'مقارنة المسارين في خمس جمل: مدة التكوين بصيغته بلا حرف جر، وبداية الدراسة في شهرها بـim، وشقّا وزن متقدمان يقلبان الفعل قبل الفاعل، وخاتمة بنتيجة امتحان بالمساعد haben.',
      summaryRecap: 'موازنة المسارين بخمس خطوات',
      hwHintDe: 'Nicht „die Formation", nicht „das Study" und nicht „on one hand / but also" wörtlich ins Deutsche tragen. Sage es so ab: Einerseits ist die Ausbildung praktisch, andererseits kostet das Studium viel Zeit.'
    }),

  U('b1-u3-l6', 'B1', 'المدينة: الموقع والنقل والحسنات والمساوئ', 'Stadt: Lage, Verkehr, Vorteil und Nachteil', 'lexik-kollokation',
    'Am Ende beschreibst du ein Stadtviertel in fünf Sätzen: Lage, Verkehr, Vorteil, Nachteil und Mieten',
    'في النهاية تصف حيًّا كاملًا في خمس جمل: الموقع والنقل والحسنة والمساوئ والإيجارات.',
    [
      ['Unser Viertel liegt am Stadtrand.', 'تحدد موقع حيك في المدينة', 'المكان بـan + الداتيف المدموج: am Stadtrand لا in عارية', 'Unser Viertel liegt in Stadtrand.', 'المكان الثابت: am Stadtrand لا in وحدها'],
      ['Der Bus fährt alle zehn Minuten.', 'تحكي عن تردد الحافلة', 'قياس التكرار يأتي مفعولًا زمنيًا بلا حرف جر: alle zehn Minuten لا in', 'Der Bus fährt in alle zehn Minuten.', 'قياس التكرار بلا حرف: alle zehn Minuten'],
      ['Der Vorteil ist die ruhige Lage.', 'تسمّي حسنة حيك', 'خارطة التعبير: Der Vorteil ist + مرفوع، والصفة بعد الأداة المعرفة المؤنثة تنتهي ضعيفة: ruhige', 'Der Vorteil ist die ruhigen Lage.', 'الصفة بعد die المفرد ضعيفة: ruhige لا ruhigen'],
      ['Der Nachteil ist die teure Miete.', 'تسمّي مساوئ الحي بصدق', 'القالب الناقد المشابه: Der Nachteil ist … والصفة مع اسم مؤنث مفرد قليلة النهاية: teure', 'Der Nachteil ist die teueres Miete.', 'الصفة بعد die ضعيفة: teure لا المحايدة teueres']
    ],
    [
      ['Unser Viertel liegt am Stadtrand.', 'حيّنا في أطراف المدينة', 'Unser Viertel liegt in Stadtrand.', 'المكان الثابت بـam Stadtrand', 'liegt'],
      ['Der Bus fährt alle zehn Minuten.', 'الحافلة تغادر كل عشر دقائق', 'Der Bus fährt in alle zehn Minuten.', 'قياس التكرار بلا حرف', 'fährt'],
      ['Der Vorteil ist die ruhige Lage.', 'الحسنة هي الموقع الهادئ', 'Der Vorteil ist die ruhigen Lage.', 'الحسنة بما يتصل بالموقع: ruhige Lage', 'ruhige'],
      ['Der Nachteil ist die teure Miete.', 'العيب هو الإيجار الغالي', 'Der Nachteil ist die teueres Miete.', 'العيب بما يتصل بالإيجار: teure Miete', 'teure']
    ],
    'Unser Viertel liegt am Stadtrand.',
    'Die Mietpreise steigen jedes Jahr stark.',
    'Wiederhole morgen die fünf Sätze: Unser Viertel liegt am Stadtrand. Der Bus fährt alle zehn Minuten. Der Vorteil ist die ruhige Lage. Der Nachteil ist die teure Miete. Die Mietpreise steigen jedes Jahr stark.',
    'غدًا أعد وصف الحي ولاحظ المواضع وصفة الصفة التالية للأداة.',
    {
      factFamilies: ['präposition', 'präposition', 'deklination', 'deklination'],
      imitateNearMiss: 'legen',
      transformHint: 'في جملة الختام ارتفاع الإيجار العام: Die Mietpreise steigen jedes Jahr stark — فاعل جمع بفعل جمع ومقياس زمني بلا حرف جر أيضًا.',
      orderSentence: 'Der Bus fährt alle zehn Minuten.',
      checkOrderSentence: 'Am Morgen ist der Verkehr sehr dicht.',
      orderAr: 'رتّب جملة الحافلة: الفاعل أولًا ثم الفعل fährt في الموضع الثاني قبل مقياس الوقت.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الموضع الثاني للفعل ثابت مهما بدأت الجملة.', 'مقاييس الوقت تأتي بلا حرف جر هنا.'],
      writing: {
        zeigt: 'Ein Viertel in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل عن حي: موقعه على الأطراف بـam، ومواعيد حافلة بلا حرف جر، ووصفين متعادلين (حسنة ومساوئ) بصفة صحيحة بعد الأداة، وختام باتجاه الإيجارات.',
        hinweise: ['وصف حي قابل للقياس: أين يقع؟ كيف تصل؟ ما حسنه وعيبه؟ أين يتجه السعر؟', 'الأوصاف بعد die ضعيفة النهاية: ruhige/teure لا تُكتب بالمفرد القوي.'],
        prompt: 'اكتب جمل الحي الخمس المستهدفة من الذاكرة مع موضع الفعل وصفة الصفة الصحيحة.',
        promptDe: 'Unser Viertel liegt am Stadtrand. · Der Bus fährt alle zehn Minuten. · Der Vorteil ist die ruhige Lage. · Der Nachteil ist die teure Miete. · Die Mietpreise steigen jedes Jahr stark.',
        points: ['Unser Viertel liegt am Stadtrand.', 'Der Bus fährt alle zehn Minuten.', 'Der Vorteil ist die ruhige Lage.', 'Der Nachteil ist die teure Miete.', 'Die Mietpreise steigen jedes Jahr stark.'],
        minWords: 29,
        frage: 'اكتب جمل الحي الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Unser Viertel liegt am Stadtrand. Der Bus fährt alle zehn Minuten. Der Vorteil ist die ruhige Lage. Der Nachteil ist die teure Miete. Die Mietpreise steigen jedes Jahr stark.',
      summaryDe: 'Unser Viertel liegt am Stadtrand. Der Bus fährt alle zehn Minuten. Der Vorteil ist die ruhige Lage. Der Nachteil ist die teure Miete. Die Mietpreise steigen jedes Jahr stark.',
      summaryAr: 'الحي في خمس جمل: موقع على الأطراف بتركيب am، ووتيرة مواصلات بلا حرف جر، وحسنة في موقع هادئ ومساوئ في إيجار غال بصفة ضعيفة النهاية، وأخيرًا اتجاه للإيجارات بصيغة الجمع.',
      summaryRecap: 'وصف الحي بخمس خطوات',
      hwHintDe: 'Sprich echt: nicht „the Advantage" oder „Disadvantage", nicht „die Location" und nicht „der Noise" — deutsch heißen die vier Dinge Vorteil, Nachteil, Lage und Lärm. Der Vorteil ist die Lage.'
    }),

  U('b1-u3-l7', 'B1', 'التأمين: العقد والقسط والتبليغ عن الضرر', 'Versicherung: Vertrag, Beitrag und Schadensmeldung', 'lexik-kollokation',
    'Am Ende schilderst du einen Schadensfall in fünf Sätzen: Pflichtversicherung, Deckung, Meldung, Haftung und Laufzeit',
    'في النهاية تسرد حالة ضرر في خمس جمل: التزام التأمين الصحي، والتغطية، والتبليغ، والمسؤولية، ومدة العقد.',
    [
      ['Die Krankenversicherung ist in Deutschland Pflicht.', 'تذكر نظام التأمين الإلزامي', 'الاسم المركّب طويل لكنه مفرد مؤنث: die Krankenversicherung ist، لا sind', 'Die Krankenversicherung sind in Deutschland Pflicht.', 'الاسم المركّب مفرد: ist لا sind'],
      ['Die Versicherung deckt den Schaden.', 'تحكي من يدفع الضرر عنك', 'decken متعدٍّ بمفعول مباشر بلا حرف جر: deckt den Schaden', 'Die Versicherung deckt für den Schaden.', 'decken خالٍ من الحرف: den Schaden'],
      ['Ich melde den Schaden sofort.', 'تبلّغ عن حادث في وقته', 'melden يأخذ الضرر مفعولًا في النصب: Ich melde den Schaden', 'Ich melde dem Schaden sofort.', 'مفعول melden بالنصب: den Schaden لا dem'],
      ['Der Fahrer haftet für den Schaden.', 'تسمّي المسؤول قانونًا عن الضرر', 'haften يطلب حرفًا ثابتًا: haftet für + نصب = مسؤول عن', 'Der Fahrer haftet den Schaden.', 'haften بلا حرف ناقص: haftet für den Schaden']
    ],
    [
      ['Die Krankenversicherung ist in Deutschland Pflicht.', 'التأمين الصحي إلزامي في ألمانيا', 'Die Krankenversicherung sind in Deutschland Pflicht.', 'التأمين الصحي مفرد: ist', 'ist'],
      ['Die Versicherung deckt den Schaden.', 'التأمين يغطّي الضرر', 'Die Versicherung deckt für den Schaden.', 'التغطية بلا حرف: deckt den Schaden', 'deckt'],
      ['Ich melde den Schaden sofort.', 'أبلّغ عن الضرر فورًا', 'Ich melde dem Schaden sofort.', 'التبليغ بالنصب: den Schaden', 'melde'],
      ['Der Fahrer haftet für den Schaden.', 'السائق مسؤول عن الضرر', 'Der Fahrer haftet den Schaden.', 'المسؤولية القانونية: haftet für', 'haftet']
    ],
    'Die Krankenversicherung ist in Deutschland Pflicht.',
    'Der Vertrag läuft bis 2027.',
    'Wiederhole morgen die fünf Sätze: Die Krankenversicherung ist in Deutschland Pflicht. Die Versicherung deckt den Schaden. Ich melde den Schaden sofort. Der Fahrer haftet für den Schaden. Der Vertrag läuft bis 2027.',
    'غدًا أعد جمل التأمين الخمس ولاحظ بلا حرف عند decken/melden وبحرف عند haften وانتهاء المدة بـbis.',
    {
      factFamilies: ['konjugation', 'kasus', 'kasus', 'präposition'],
      imitateNearMiss: 'sind',
      transformHint: 'في جملة الختام سريان العقد حتى سنة: Der Vertrag läuft bis 2027 — نهاية الزمن مع السنة بحرف bis لا zu.',
      orderSentence: 'Der Fahrer haftet für den Schaden.',
      checkOrderSentence: 'Die Versicherung deckt den Schaden.',
      orderAr: 'رتّب جملة المسؤولية: الفاعل أولًا ثم الفعل haftet في الموضع الثاني قبل عبارة المسؤولية.',
      orderPromptAr: 'رتّب الجملة واضعًا الفاعل أولًا والفعل في الموضع الثاني.',
      orderHints: ['الموضع الثاني للفعل المصرّف ثابت في الجملة الرئيسية.', 'عبارة للضرر تأتي كاملة بعد الفعل: für den Schaden.'],
      writing: {
        zeigt: 'Versicherung und Schadensfall in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل في قصة واحدة: إلزامية التأمين الصحي بفعل مفرد، ومن يغطّي الضرر بلا حرف، وتبليغك عنه فورًا بالنصب، والمسؤول قانونًا بحرف für، وسريان العقد حتى سنة بـbis.',
        hinweise: ['الحادث واحد لكن كل جملة تقيس تركيبًا مختلفًا.', 'غطِّ وأبلغ بلا حرف زائد، واكتب حرفَي haften وbis حيث يلزمان.'],
        prompt: 'اكتب جمل التأمين الخمس المستهدفة من الذاكرة مع حرفي für وbis في موضعيهما.',
        promptDe: 'Die Krankenversicherung ist in Deutschland Pflicht. · Die Versicherung deckt den Schaden. · Ich melde den Schaden sofort. · Der Fahrer haftet für den Schaden. · Der Vertrag läuft bis 2027.',
        points: ['Die Krankenversicherung ist in Deutschland Pflicht.', 'Die Versicherung deckt den Schaden.', 'Ich melde den Schaden sofort.', 'Der Fahrer haftet für den Schaden.', 'Der Vertrag läuft bis 2027.'],
        minWords: 27,
        frage: 'اكتب جمل التأمين الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Krankenversicherung ist in Deutschland Pflicht. Die Versicherung deckt den Schaden. Ich melde den Schaden sofort. Der Fahrer haftet für den Schaden. Der Vertrag läuft bis 2027.',
      summaryDe: 'Die Krankenversicherung ist in Deutschland Pflicht. Die Versicherung deckt den Schaden. Ich melde den Schaden sofort. Der Fahrer haftet für den Schaden. Der Vertrag läuft bis 2027.',
      summaryAr: 'التأمين في خمس جمل: التأمين الصحي إلزامي بفعل مفرد، ثم تغطية الضرر بلا حرف، وتبليغ عنه فورًا بالنصب، ومسؤولية قانونية بـhaften für، وعقد سارٍ حتى سنة بـbis.',
      summaryRecap: 'حادث واحد بخمس خطوات',
      hwHintDe: 'Nicht „die Registration“, nicht „die Insurance“ und nicht „das Formular ist not complete“ wörtlich ins Deutsche tragen: die Anmeldung heißt Anmeldung, die Versicherung bleibt Versicherung, und was im Formular fehlt, heißt unvollständig.'
    }),

  U('b1-u3-l8', 'B1', 'الاستهلاك: مقارنة الأسعار والشراء الذكي', 'Konsum: Preise vergleichen und klug kaufen', 'lexik-kollokation',
    'Am Ende begründest du eine Kaufentscheidung in fünf Sätzen: Preise, Nachfrage, Rabatt, Zahlung und Verbraucherblick',
    'في النهاية تعلّل قرار شراء في خمس جمل: ارتفاع الأسعار، والطلب مقابل العرض، والخصم، والدفع، وعين المستهلك.',
    [
      ['Die Preise sind stark gestiegen.', 'تستند إلى موجة غلاء', 'steigen فعل تغيّر: Perfekt مع sein وPartizip II في النهاية: sind gestiegen', 'Die Preise sind stark steigen.', 'بعد sind اسم المفعول: gestiegen لا المصدر steigen'],
      ['Die Nachfrage ist größer als das Angebot.', 'تقارن طلبًا بعرض', 'بعد صفة التفضيل نكتب في الألمانية القياسية als: größer als das Angebot', 'Die Nachfrage ist größer wie das Angebot.', 'أفعل التفضيل مع als لا wie'],
      ['Es gibt zehn Prozent Rabatt.', 'تذكر عرض خصم', 'مقياس النسبة يلي الاسم بلا حرف جر: zehn Prozent Rabatt', 'Es gibt zehn Prozent von Rabatt.', 'النسبة مربوطة بالاسم بلا von: Prozent Rabatt'],
      ['Ich zahle mit Karte.', 'تحدد وسيلة دفعك', 'الدفع بالبطاقة عبارة ثابتة بلا أداة: mit Karte zahlen', 'Ich zahle mit die Karte.', 'mit Karte عبارة كاملة؛ وبأداة يأتي الداتيف: mit der Karte']
    ],
    [
      ['Die Preise sind stark gestiegen.', 'الأسعار ارتفعت كثيرًا', 'Die Preise sind stark steigen.', 'سعر يصعد بـsein واسم مفعول: sind gestiegen', 'gestiegen'],
      ['Die Nachfrage ist größer als das Angebot.', 'الطلب أكبر من العرض', 'Die Nachfrage ist größer wie das Angebot.', 'المقارنة القياسية بـals', 'größer'],
      ['Es gibt zehn Prozent Rabatt.', 'يوجد خصم عشرة بالمئة', 'Es gibt zehn Prozent von Rabatt.', 'الخصم بالنسبة بلا von: Prozent Rabatt', 'Rabatt'],
      ['Ich zahle mit Karte.', 'أدفع بالبطاقة', 'Ich zahle mit die Karte.', 'عبارة الدفع الثابتة: mit Karte', 'Karte']
    ],
    'Die Preise sind stark gestiegen.',
    'Die Verbraucher achten auf den Preis.',
    'Wiederhole morgen die fünf Sätze: Die Preise sind stark gestiegen. Die Nachfrage ist größer als das Angebot. Es gibt zehn Prozent Rabatt. Ich zahle mit Karte. Die Verbraucher achten auf den Preis.',
    'غدًا أعد جمل الشراء الخمس ولاحظ أفعل التفضيل بـals والنسبة بلا von وحرف achten الثابت.',
    {
      factFamilies: ['konjugation', 'kasus', 'kasus', 'kasus'],
      imitateNearMiss: 'steigen',
      transformHint: 'في جملة الختام عين المستهلكين على السعر: Die Verbraucher achten auf den Preis — achten بحرف ثابت: auf + نصب.',
      orderSentence: 'Die Nachfrage ist größer als das Angebot.',
      checkOrderSentence: 'Die Verbraucher achten auf den Preis.',
      orderAr: 'رتّب جملة المقارنة: الفاعل أولًا ثم الفعل ist في الموضع الثاني قبل عبارة المقارنة.',
      orderPromptAr: 'رتّب الجملة واضعًا الفاعل أولًا والفعل في الموضع الثاني.',
      orderHints: ['الموضع الثاني للفعل المصرّف ثابت في الجملة الرئيسية.', 'عبارة المقارنة تأتي كاملة بعد الفعل: als das Angebot.'],
      writing: {
        zeigt: 'Eine Kaufentscheidung in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل تعلّل قرار شراء: أسعار صاعدة بـPerfekt مع sein، وطلب أكبر بمقارنة als، وخصم بلا von، ودفع بالعبارة الثابتة، وخاتمة بعين المستهلكين على السعر.',
        hinweise: ['كل جملة حجة واحدة في القرار.', 'راجع als بعد أفعل التفضيل وحذف von من الخصم.'],
        prompt: 'اكتب جمل الشراء الخمس المستهدفة من الذاكرة بالمقارنة والخصم والدفع الصحيحة.',
        promptDe: 'Die Preise sind stark gestiegen. · Die Nachfrage ist größer als das Angebot. · Es gibt zehn Prozent Rabatt. · Ich zahle mit Karte. · Die Verbraucher achten auf den Preis.',
        points: ['Die Preise sind stark gestiegen.', 'Die Nachfrage ist größer als das Angebot.', 'Es gibt zehn Prozent Rabatt.', 'Ich zahle mit Karte.', 'Die Verbraucher achten auf den Preis.'],
        minWords: 27,
        frage: 'اكتب جمل الشراء الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Preise sind stark gestiegen. Die Nachfrage ist größer als das Angebot. Es gibt zehn Prozent Rabatt. Ich zahle mit Karte. Die Verbraucher achten auf den Preis.',
      summaryDe: 'Die Preise sind stark gestiegen. Die Nachfrage ist größer als das Angebot. Es gibt zehn Prozent Rabatt. Ich zahle mit Karte. Die Verbraucher achten auf den Preis.',
      summaryAr: 'الاستهلاك في خمس جمل: أسعار ارتفعت بـsein واسم مفعول، وطلب أكبر بـals القياسية، وخصم بلا von، ودفع بلا أداة، وعين المستهلك بحرف achten الثابت.',
      summaryRecap: 'قرار شراء بخمس خطوات',
      hwHintDe: 'Nicht „ich can das leisten“, nicht „es ist worth“ und nicht „not only“ wörtlich tragen, und der Beleg ist kein „Receipt“: sich etwas leisten, es lohnt sich und nicht nur, sondern auch — so heißt es auf Deutsch.'
    }),

  U('b1-u4-l1', 'B1', 'التطوع: الالتزام والمشاركة والمساعدة', 'Ehrenamt: sich engagieren, teilnehmen und helfen', 'lexik-kollokation',
    'Am Ende stellst du deine Freiwilligenarbeit in fünf Sätzen vor: Engagement, Teilnahme, Hilfe, Sammeln und Dauer',
    'في النهاية تقدّم عملك التطوعي في خمس جمل: الالتزام بحرفه، والمشاركة بمنفصلها، والمساعدة بداتيفها، والجمع بغايته، ومدة جارية منذ بدئها.',
    [
      ['Sie engagiert sich für den Tierschutz.', 'تعلن التزام متطوّعة بقضية', 'الفعل انعكاسي بضميره وبحرفه: sich engagieren für + نصب، ولا يصح بلا ضمير الانعكاس', 'Sie engagiert für den Tierschutz.', 'الانعكاس والحرف معًا: engagiert sich für'],
      ['Ich nehme an dem Kurs teil.', 'تسجّل مشاركتك في نشاط', 'teilnehmen يقترن بحرف وداتيف ورأسه المنفصل أخيرًا: an dem Kurs teilnehmen، لا بمفعول نصب مباشر', 'Ich nehme den Kurs teil.', 'الشيء المشترك فيه: an + داتيف، والجزء المنفصل teil في الختام'],
      ['Wir helfen den Nachbarn beim Umzug.', 'تمدّ يدًا لجار عمليًا', 'helfen يجرّ متلقّي المساعدة بالداتيف لا النصب: den Nachbarn (جمع الداتيف)', 'Wir helfen die Nachbarn beim Umzug.', 'المساعَد مع helfen دائمًا داتيف: den Nachbarn'],
      ['Die Initiative sammelt Geld für Kinder.', 'تصف حملة تبرّعات ومستفيديها', 'المستفيد من الجمع بحرف الغاية والمستقبلين: sammeln für + نصب، لا zu', 'Die Initiative sammelt Geld zu Kindern.', 'جمع «من أجل» المستفيدين: für Kinder، لا zu']
    ],
    [
      ['Sie engagiert sich für den Tierschutz.', 'هي ملتزمة بحماية الحيوان', 'Sie engagiert für den Tierschutz.', 'الالتزام الانعكاسي بضميره: engagiert sich für', 'sich'],
      ['Ich nehme an dem Kurs teil.', 'أشارك في الدورة', 'Ich nehme den Kurs teil.', 'المشاركة مبنية: an dem Kurs teil', 'teil'],
      ['Wir helfen den Nachbarn beim Umzug.', 'نساعد الجيران في الانتقال', 'Wir helfen die Nachbarn beim Umzug.', 'المساعَد داتيف: den Nachbarn', 'den'],
      ['Die Initiative sammelt Geld für Kinder.', 'المبادرة تجمع المال للأطفال', 'Die Initiative sammelt Geld zu Kindern.', 'غاية الجمع بحرف المستفيدين: für Kinder', 'für']
    ],
    'Sie engagiert sich für den Tierschutz.',
    'Das Projekt läuft seit zwei Jahren.',
    'Wiederhole morgen die fünf Sätze: Sie engagiert sich für den Tierschutz. Ich nehme an dem Kurs teil. Wir helfen den Nachbarn beim Umzug. Die Initiative sammelt Geld für Kinder. Das Projekt läuft seit zwei Jahren.',
    'غدًا أعد جمل التطوّع الخمس ولاحظ ضمير الانعكاس وحرفي an وfür وداتيف المساعَد وseit للمدة الجارية.',
    {
      factFamilies: ['konjugation', 'präposition', 'kasus', 'präposition'],
      imitateNearMiss: 'uns',
      transformHint: 'في جملة الختام مدة مشروع لم تنتهِ بعد: Das Projekt läuft seit zwei Jahren — للمدة التي بدأت وما تزال جارية نستعمل seit مع فعل الحاضر.',
      orderSentence: 'Wir helfen den Nachbarn beim Umzug.',
      checkOrderSentence: 'Sie engagiert sich für den Tierschutz.',
      orderAr: 'رتّب جملة المساعدة: الفاعل أولًا ثم الفعل helfen في الموضع الثاني قبل متلقّي المساعدة بالداتيف.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الموضع الثاني للفعل المصرّف ثابت في الجملة الرئيسية.', 'متوسط الجملة يحمل متلقّي المساعدة: den Nachbarn.'],
      writing: {
        zeigt: 'Meine Freiwilligenarbeit in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل تقدّم عملك التطوعي: التزام قضية بضمير وحرف، ومشاركة برأس منفصل، ومساعدة بداتيف، وجمع بحرف غاية، وختام بمدة مشروع جارية.',
        hinweise: ['كل جملة تُثبت تركيبًا قابلًا للقياس: sich · an dem · den Nachbarn · für · seit.', 'لا تنصب متلقّي helfen ولا تحذف ضمير الالتزام الانعكاسي.'],
        prompt: 'اكتب جمل التطوّع الخمس المستهدفة من الذاكرة مع ضمير الالتزام وحرفَي المشاركة والغاية وسلامة الداتيف.',
        promptDe: 'Sie engagiert sich für den Tierschutz. · Ich nehme an dem Kurs teil. · Wir helfen den Nachbarn beim Umzug. · Die Initiative sammelt Geld für Kinder. · Das Projekt läuft seit zwei Jahren.',
        points: ['Sie engagiert sich für den Tierschutz.', 'Ich nehme an dem Kurs teil.', 'Wir helfen den Nachbarn beim Umzug.', 'Die Initiative sammelt Geld für Kinder.', 'Das Projekt läuft seit zwei Jahren.'],
        minWords: 30,
        frage: 'اكتب جمل التطوع الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Sie engagiert sich für den Tierschutz. Ich nehme an dem Kurs teil. Wir helfen den Nachbarn beim Umzug. Die Initiative sammelt Geld für Kinder. Das Projekt läuft seit zwei Jahren.',
      summaryDe: 'Sie engagiert sich für den Tierschutz. Ich nehme an dem Kurs teil. Wir helfen den Nachbarn beim Umzug. Die Initiative sammelt Geld für Kinder. Das Projekt läuft seit zwei Jahren.',
      summaryAr: 'التطوّع في خمس جمل: التزام انعكاسي بضمير وحرف للسبب، ومشاركة بـan وداتيف مع رأس منفصل ختامي، ومساعدة تلزم داتيف المتلقّي، وجمع بغاية بحرف für، ومشروع مستمر منذ عامين بـseit.',
      summaryRecap: 'تطوع موثّق بخمس خطوات',
      hwHintDe: 'Nicht „I work as a volunteer“, nicht „from my experience“ und nicht „I lived that“ wörtlich ins Deutsche tragen: ehrenamtlich arbeiten, aus eigener Erfahrung sagen und etwas selbst erlebt haben — so sagt man es auf Deutsch.'
    }),

  U('b1-u4-l2', 'B1', 'تخطيط الرحلة: الحجز والتبديل والوصول', 'Reiseplanung: buchen, umsteigen und ankommen', 'lexik-kollokation',
    'Am Ende beschreibst du eine komplexe Reise in fünf Sätzen: Buchung, Bestätigung, Abfahrt, Umstieg und Fahrtdauer',
    'في النهاية تصف رحلة مركّبة في خمس جمل: الحجز بمفعوله، وتأكيده باسم مفعول، وانطلاق بجزء منفصل، وتبديل بمساعد صحيح، ومدة بلا حرف جر.',
    [
      ['Ich buche den Flug online.', 'تحجز رحلتك الجوية', 'buchen متعدٍّ بمفعول مباشر في النصب، ولا تستعمل für لوصف الوسيلة: online وصف للحجز بلا حرف جر', 'Ich buche den Flug für online.', 'الحجز بمفعول مباشر: den Flug buchen'],
      ['Die Buchung ist bestätigt.', 'تُعلن تأكيد الحجز', 'وصف حالة الحجز يُبنى بـsein وPartizip II في النهاية: ist bestätigt، لا بالمصدر', 'Die Buchung ist bestätigen.', 'بعد ist اسم المفعول: bestätigt'],
      ['Der Zug fährt um sieben ab.', 'تسمّي موعد انطلاق القطار', 'abfahren فعل منفصل: جزؤه المصرّف في الموضع الثاني (fährt) وجزؤه ab في النهاية، ووقت الساعة مع um', 'Der Zug fährt in sieben ab.', 'وقت الساعة مع um: um sieben'],
      ['Wir sind in Frankfurt umgestiegen.', 'تحكي تبديلًا للقطار', 'umsteigen من عائلة steigen، وكلها في الماضي المركّب مع sein لا haben: sind umgestiegen', 'Wir haben in Frankfurt umgestiegen.', 'تبديل القطار حدث/حركة مع sein: sind']
    ],
    [
      ['Ich buche den Flug online.', 'أحجز الرحلة الجوية عبر الإنترنت', 'Ich buche den Flug für online.', 'الحجز بمفعول مباشر: den Flug buchen', 'buche'],
      ['Die Buchung ist bestätigt.', 'الحجز مؤكَّد', 'Die Buchung ist bestätigen.', 'حالة التأكيد باسم المفعول: bestätigt', 'bestätigt'],
      ['Der Zug fährt um sieben ab.', 'القطار ينطلق في السابعة', 'Der Zug fährt in sieben ab.', 'الانطلاق بجزء منفصل أخير ووقت مع um', 'ab'],
      ['Wir sind in Frankfurt umgestiegen.', 'بدّلنا القطار في فرانكفورت', 'Wir haben in Frankfurt umgestiegen.', 'التبديل بماضٍ مع sein: sind umgestiegen', 'sind']
    ],
    'Ich buche den Flug online.',
    'Die Fahrt dauert vier Stunden.',
    'Wiederhole morgen die fünf Sätze: Ich buche den Flug online. Die Buchung ist bestätigt. Der Zug fährt um sieben ab. Wir sind in Frankfurt umgestiegen. Die Fahrt dauert vier Stunden.',
    'غدًا أعد جمل الرحلة الخمس ولاحظ مفعول الحجز المباشر واسم مفعوله والجزء المنفصل أخيرًا وsein مع عائلة steigen.',
    {
      factFamilies: ['kasus', 'konjugation', 'präposition', 'konjugation'],
      imitateNearMiss: 'buchen',
      transformHint: 'في جملة الختام مدة الرحلة: Die Fahrt dauert vier Stunden — بعد dauern تأتي المدة قياسًا مباشرًا بلا حرف جر: dauert vier Stunden.',
      orderSentence: 'Ich buche den Flug online.',
      checkOrderSentence: 'Der Zug fährt um sieben ab.',
      orderAr: 'رتّب جملة الحجز: الفاعل أولًا ثم الفعل buche في الموضع الثاني قبل الرحلة المحجوزة.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الموضع الثاني للفعل المصرّف ثابت في الجملة الرئيسية.', 'مفعول الحجز المباشر في متوسط الجملة: den Flug.'],
      writing: {
        zeigt: 'Eine Reise in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل عن رحلة: حجز بمفعول مباشر، وتأكيد باسم مفعول، وانطلاق بجزء منفصل ووقت، وتبديل بماضٍ مع sein، وختام بمدة بلا حرف جر.',
        hinweise: ['كل جملة تُثبت تركيبًا قابلًا للقياس: den Flug · bestätigt · fährt … ab · sind umgestiegen.', 'لا تضع المصدر حيث يلزم اسم المفعول بعد ist، ولا haben مع عائلة steigen.'],
        prompt: 'اكتب جمل الرحلة الخمس المستهدفة من الذاكرة مع اسم المفعول والجزء المنفصل والمساعد الصحيح.',
        promptDe: 'Ich buche den Flug online. · Die Buchung ist bestätigt. · Der Zug fährt um sieben ab. · Wir sind in Frankfurt umgestiegen. · Die Fahrt dauert vier Stunden.',
        points: ['Ich buche den Flug online.', 'Die Buchung ist bestätigt.', 'Der Zug fährt um sieben ab.', 'Wir sind in Frankfurt umgestiegen.', 'Die Fahrt dauert vier Stunden.'],
        minWords: 25,
        frage: 'اكتب جمل الرحلة الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Ich buche den Flug online. Die Buchung ist bestätigt. Der Zug fährt um sieben ab. Wir sind in Frankfurt umgestiegen. Die Fahrt dauert vier Stunden.',
      summaryDe: 'Ich buche den Flug online. Die Buchung ist bestätigt. Der Zug fährt um sieben ab. Wir sind in Frankfurt umgestiegen. Die Fahrt dauert vier Stunden.',
      summaryAr: 'الرحلة في خمس جمل: حجز رحلة جوية بمفعول مباشر، وتأكيد باسم المفعول bestätigt، وانطلاق قطار بجزء منفصل ووقت um، وتبديل في فرانكفورت بماضٍ مع sein، ومدة Fahrt بلا حرف جر.',
      summaryRecap: 'رحلة موثقة بخمس خطوات',
      hwHintDe: 'Nicht mit „if“ die Bedingung beginnen (das heißt falls), der Zug „cancelt“ nicht und kann auch nicht „canceln“ — das heißt ausfallen; und aus „we need“ wird nicht „wir need“, sondern wir brauchen eine Alternative.'
    }),

  U('b1-u4-l3', 'B1', 'تعليل الرأي: الموقف والموازنة والاعتراض', 'Meinung begründen: Position, Abwägung und Widerspruch', 'pruefstrategie',
    'Am Ende begründest du eine Meinung in fünf Sätzen: Position, Abwägung, zwei Seiten und Widerspruch',
    'في النهاية تعلّل رأيًا في خمس جمل: موقف بصيغة ثابتة، وموازنة كاملة اللفظ، وجهتا كفة تقلبان الجملة، واعتراض بالداتيف.',
    [
      ['Meiner Meinung nach ist das falsch.', 'تعلن موقفك بصيغة ثابتة', 'عبارة الموقف ثابتة بالمضاف المحذوف خفيفًا: Meiner Meinung nach (صيغة ملكية)، ولا تبدأ بحرف جر', 'In meiner Meinung ist das falsch.', 'الموقف بصيغة ثابتة: Meiner Meinung nach'],
      ['Wir müssen die Vor- und Nachteile abwägen.', 'تفتح باب الموازنة قبل الحكم', 'abwägen فعل منفصل لكنه مع müssen يعود كلمة واحدة في المصدر بنهاية الجملة: müssen … abwägen', 'Wir müssen die Vor- und Nachteile wägen.', 'المصدر المنفصل مع ناقص موحّد: abwägen'],
      ['Einerseits ist es teuer.', 'تضع نصف الحجة الأول', 'الرابط المتقدّم يحتل الموضع الأول والفعل يتمسّك بالثاني قبل الفاعل: Einerseits ist es', 'Einerseits es ist teuer.', 'بعد الرابط المتقدم الفعل قبل الفاعل: ist es'],
      ['Andererseits spart es Zeit.', 'تضع النصف المقابل', 'القاعدة نفسها في الكفّة الأخرى: Andererseits spart es — الفاعل بعد الفعل', 'Andererseits es spart Zeit.', 'في النصف الآخر أيضًا: spart es']
    ],
    [
      ['Meiner Meinung nach ist das falsch.', 'في رأيي هذا خاطئ', 'In meiner Meinung ist das falsch.', 'الموقف بصيغة الملكية الثابتة: Meiner Meinung nach', 'Meinung'],
      ['Wir müssen die Vor- und Nachteile abwägen.', 'علينا أن نوازن المحاسن والمساوئ', 'Wir müssen die Vor- und Nachteile wägen.', 'المصدر المنفصل كاملًا بعد الناقص: abwägen', 'abwägen'],
      ['Einerseits ist es teuer.', 'من جهةٍ هو غالٍ', 'Einerseits es ist teuer.', 'الجهة الأولى تقلب الجملة: ist es', 'Einerseits'],
      ['Andererseits spart es Zeit.', 'ومن الجهة الأخرى يوفّر الوقت', 'Andererseits es spart Zeit.', 'الجهة الأخرى تبقي القلب: spart es', 'Andererseits']
    ],
    'Meiner Meinung nach ist das falsch.',
    'Ich muss dir widersprechen.',
    'Wiederhole morgen die fünf Sätze: Meiner Meinung nach ist das falsch. Wir müssen die Vor- und Nachteile abwägen. Einerseits ist es teuer. Andererseits spart es Zeit. Ich muss dir widersprechen.',
    'غدًا أعد جمل الحجاج الخمس ولاحظ صيغة الموقف الثابتة وقلب الجملتين وداتيف الاعتراض.',
    {
      factFamilies: ['register', 'wortstellung', 'wortstellung', 'wortstellung'],
      imitateNearMiss: 'Meinungen',
      transformHint: 'في جملة الختام اعتراض مهذّب حازم: Ich muss dir widersprechen — الاعتراض يتلقاه الشخص بداتيف dir لا بالنصب.',
      orderSentence: 'Meiner Meinung nach ist das falsch.',
      checkOrderSentence: 'Andererseits spart es Zeit.',
      orderAr: 'رتّب جملة الموقف: عبارة الموقف كاملة أولًا ثم الفعل ist في الموضع الثاني.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الموضع الثاني للفعل المصرّف ثابت في الجملة الرئيسية.', 'عبارة الموقف Meiner Meinung nach تبقى كتلة واحدة في المقدمة.'],
      writing: {
        zeigt: 'Eine Meinung in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل حجاج: موقف بصيغة ثابتة، ودعوة لموازنة بمصدر منفصل كامل، ووجهتان برابطين متقدمين يقلبان الجملة، واعتراضًا ختاميًا بداتيف.',
        hinweise: ['الرأي قبل الحجج، والحجج كفّتان لا قائمة.', 'احذر "in meiner Meinung": صيغة الموقف بالألمانية Meiner Meinung nach.'],
        prompt: 'اكتب جمل الحجاج الخمس المستهدفة من الذاكرة مع قلب مواضع النصفين وداتيف الاعتراض.',
        promptDe: 'Meiner Meinung nach ist das falsch. · Wir müssen die Vor- und Nachteile abwägen. · Einerseits ist es teuer. · Andererseits spart es Zeit. · Ich muss dir widersprechen.',
        points: ['Meiner Meinung nach ist das falsch.', 'Wir müssen die Vor- und Nachteile abwägen.', 'Einerseits ist es teuer.', 'Andererseits spart es Zeit.', 'Ich muss dir widersprechen.'],
        minWords: 25,
        frage: 'اكتب جمل الحجاج الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Meiner Meinung nach ist das falsch. Wir müssen die Vor- und Nachteile abwägen. Einerseits ist es teuer. Andererseits spart es Zeit. Ich muss dir widersprechen.',
      summaryDe: 'Meiner Meinung nach ist das falsch. Wir müssen die Vor- und Nachteile abwägen. Einerseits ist es teuer. Andererseits spart es Zeit. Ich muss dir widersprechen.',
      summaryAr: 'الحجاج في خمس جمل: موقف بصيغة الملكية الثابتة، ودعوة إلى الموازنة بمصدر منفصل كامل، ووجهتان بلفظي einerseits/andererseits المتقدمين مع قلب الفعل قبل الفاعل، واعتراض بداتيف الشخص.',
      summaryRecap: 'رأي موثّق بخمس خطوات',
      hwHintDe: 'Nicht „for example“ und nicht „I disagree“ wörtlich ins Deutsche tragen: „For example, this is wrong“ heißt „Das überzeugt mich nicht, weil …“ — mit Beispiel und Grund auf Deutsch.'
    }),

  U('b1-u4-l4', 'B1', 'التلخيص: الجوهري بكلماتك الخاصة', 'Zusammenfassung: das Wesentliche in eigenen Worten', 'pruefstrategie',
    'Am Ende fasst du einen Text in fünf Sätzen zusammen: Thema, Absätze, Hauptidee, Quelle und Schluss',
    'في النهاية تلخّص نصًا في خمس جمل: موقف المقدمة، وفقرة لكل فكرة، وموضع الفكرة، وذكر المصدر، وخاتمة تجمع الكل.',
    [
      ['Die Einleitung nennt das Thema.', 'تسمي وظيفة مقدمة النص', 'nennen متعدٍّ بمفعول نصب مباشر: nennt das Thema، والمقدمة تسمي لا تشرح', 'Die Einleitung nennt dem Thema.', 'مفعول nennen بالنصب: das Thema لا dem'],
      ['Jeder Absatz hat eine Hauptidee.', 'تختصر بنية الفقرات', 'كل فقرة تحمل فكرة رئيسية واحدة، والفكرة مؤنثة: eine Hauptidee', 'Jeder Absatz hat ein Hauptidee.', 'الفكرة مؤنثة: eine Hauptidee'],
      ['Die Hauptidee steht am Anfang.', 'تحدد أين تُقرأ الفكرة', 'الثبات المكاني بحرف مدموج: steht am Anfang، لا in عارية', 'Die Hauptidee steht in Anfang.', 'الموضع الثابت: am Anfang'],
      ['Geben Sie die Quelle an.', 'تُلزم بذكر مصدر النص', 'angeben منفصل: جزؤه المصرّف أولًا في الأمر المهذّب والجزء an في النهاية', 'Geben Sie die Quelle.', 'الذكر بجزء منفصل من الفعل: die Quelle an']
    ],
    [
      ['Die Einleitung nennt das Thema.', 'المقدمة تسمي الموضوع', 'Die Einleitung nennt dem Thema.', 'التسمية بمفعول مباشر: nennt das Thema', 'nennt'],
      ['Jeder Absatz hat eine Hauptidee.', 'كل فقرة لها فكرة رئيسية', 'Jeder Absatz hat ein Hauptidee.', 'فكرة واحدة للفقرة: eine Hauptidee', 'Hauptidee'],
      ['Die Hauptidee steht am Anfang.', 'الفكرة الرئيسية في البداية', 'Die Hauptidee steht in Anfang.', 'موضع الفكرة بالدمج: am Anfang', 'Anfang'],
      ['Geben Sie die Quelle an.', 'اذكر المصدر من فضلك', 'Geben Sie die Quelle.', 'الذكر بالجزء المنفصل أخيرًا: an', 'an']
    ],
    'Die Einleitung nennt das Thema.',
    'Der Schluss fasst alles zusammen.',
    'Wiederhole morgen die fünf Sätze: Die Einleitung nennt das Thema. Jeder Absatz hat eine Hauptidee. Die Hauptidee steht am Anfang. Geben Sie die Quelle an. Der Schluss fasst alles zusammen.',
    'غدًا أعد جمل التلخيص الخمس ولاحظ مفعول التسمية والفكرة المؤنثة والجزء المنفصل في الختام.',
    {
      factFamilies: ['kasus', 'deklination', 'präposition', 'wortstellung'],
      imitateNearMiss: 'nennen',
      transformHint: 'في جملة الختام الفائدة الأخيرة: Der Schluss fasst alles zusammen — zusammen جزء من الفعل نفسه ويغلق الجملة.',
      orderSentence: 'Jeder Absatz hat eine Hauptidee.',
      checkOrderSentence: 'Der Schluss fasst alles zusammen.',
      orderAr: 'رتّب جملة الفقرة: الفاعل أولًا ثم الفعل hat في الموضع الثاني قبل الفكرة.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الموضع الثاني للفعل المصرّف ثابت في الجملة الرئيسية.', 'مفعول الحيازة في متوسط الجملة: eine Hauptidee.'],
      writing: {
        zeigt: 'Ein Text in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل تلخص نصًا: مقدمة تسمي الموضوع، وفقرة تحمل فكرة مؤنثة واحدة، وفكرة في بدايتها، وأمر مهذّب لذكر المصدر، وخاتمة جامعة.',
        hinweise: ['الملخص محايد: بنية النص لا رأيك أنت.', 'اذكر المصدر ولا تنس الجزء المنفصل an في النهاية.'],
        prompt: 'اكتب جمل التلخيص الخمس المستهدفة من الذاكرة مع مفعول التسمية والجزء المنفصل في الختام.',
        promptDe: 'Die Einleitung nennt das Thema. · Jeder Absatz hat eine Hauptidee. · Die Hauptidee steht am Anfang. · Geben Sie die Quelle an. · Der Schluss fasst alles zusammen.',
        points: ['Die Einleitung nennt das Thema.', 'Jeder Absatz hat eine Hauptidee.', 'Die Hauptidee steht am Anfang.', 'Geben Sie die Quelle an.', 'Der Schluss fasst alles zusammen.'],
        minWords: 25,
        frage: 'اكتب جمل التلخيص الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Einleitung nennt das Thema. Jeder Absatz hat eine Hauptidee. Die Hauptidee steht am Anfang. Geben Sie die Quelle an. Der Schluss fasst alles zusammen.',
      summaryDe: 'Die Einleitung nennt das Thema. Jeder Absatz hat eine Hauptidee. Die Hauptidee steht am Anfang. Geben Sie die Quelle an. Der Schluss fasst alles zusammen.',
      summaryAr: 'التلخيص في خمس جمل: مقدمة تسمي الموضوع بمفعول مباشر، وفقرة بفكرة مؤنثة واحدة، وفكرة ثابتة في البداية بـam، وأمر مهذّب لذكر المصدر بجزء منفصل، وخاتمة تجمع الكل.',
      summaryRecap: 'نص موجز بخمس خطوات',
      hwHintDe: 'Nicht „in short“ und nicht „that means“ wörtlich ins Deutsche tragen: „In short, that means the text warns“ heißt auf Deutsch: Kurz gesagt warnt der Text — kurz gesagt statt in short, das heißt statt that means.'
    }),

  U('b1-u4-l5', 'B1', 'الحوار: الموافقة والاعتراض والاتفاق', 'Diskussion: zustimmen, widersprechen, sich einigen', 'register',
    'Am Ende führst du eine Diskussion in fünf Sätzen: zustimmen, Vorschlag, ausreden, sich einigen, sachlich bleiben',
    'في النهاية تدير حوارًا في خمس جمل: موافقة بداتيف، واقتراح آخر، واستكمال كلام، واتفاق، وبقاء موضوعي.',
    [
      ['Da stimme ich dir zu.', 'تعلن الموافقة على شخص بداتيف', 'zustimmen يأخذ الشخص داتيف ويغلق بقسيمته zu في النهاية: stimme dir … zu، والقلب بعد Da يبقي الفعل ثانيًا', 'Da stimme ich dich zu.', 'الموافقة بداتيف الشخص: dir لا dich'],
      ['Ich habe einen anderen Vorschlag.', 'تقدّم اقتراحًا بديلًا للمقبولية', 'المفعول مذكر نصب كامل: einen anderen Vorschlag، لا اختصار ولا رفع', 'Ich habe ein anderer Vorschlag.', 'النصب المذكر: einen anderen Vorschlag'],
      ['Lassen Sie mich bitte ausreden.', 'تحمي دورك في الكلام', 'lassen + محلول نصب + مصدر: mich ausreden، والأمر المهذّب برأس مصدر Lassen Sie', 'Lasst Sie mich bitte ausreden.', 'أمر Sie بالمصدر: Lassen Sie لا صيغة ihr'],
      ['Wir haben uns schnell geeinigt.', 'تعلن الاتفاق بعد الحوار', 'انعكاسي بالماضي: uns بعد المساعد ولا يُحذف الضمير: haben uns geeinigt', 'Wir uns haben schnell geeinigt.', 'القلب يضع المساعد ثانيًا: Wir haben uns']
    ],
    [
      ['Da stimme ich dir zu.', 'في هذا أوافقك', 'Da stimme ich dich zu.', 'الموافقة بداتيف: stimme dir zu', 'dir'],
      ['Ich habe einen anderen Vorschlag.', 'لدي اقتراح آخر', 'Ich habe ein anderer Vorschlag.', 'اقتراح آخر بنصب مذكر: einen anderen', 'anderen'],
      ['Lassen Sie mich bitte ausreden.', 'دعوني أكمل من فضلكم', 'Lasst Sie mich bitte ausreden.', 'استكمال الكلام بالمصدر: ausreden', 'ausreden'],
      ['Wir haben uns schnell geeinigt.', 'اتفقنا بسرعة', 'Wir uns haben schnell geeinigt.', 'الاتفاق بانعكاس النفع: haben uns geeinigt', 'geeinigt']
    ],
    'Da stimme ich dir zu.',
    'Bleiben wir bitte sachlich.',
    'Wiederhole morgen die fünf Sätze: Da stimme ich dir zu. Ich habe einen anderen Vorschlag. Lassen Sie mich bitte ausreden. Wir haben uns schnell geeinigt. Bleiben wir bitte sachlich.',
    'غدًا أعد جمل الحوار الخمس ولاحظ داتيف الموافقة والانعكاس والصفة بلا نهاية.',
    {
      factFamilies: ['kasus', 'deklination', 'konjugation', 'wortstellung'],
      imitateNearMiss: 'dich',
      transformHint: 'في جملة الختام الفائدة الأخيرة: Bleiben wir bitte sachlich — الصفة خبرية بعد bleiben فلا نهاية لها.',
      orderSentence: 'Da stimme ich dir zu.',
      checkOrderSentence: 'Wir haben uns schnell geeinigt.',
      orderAr: 'رتّب جملة الموافقة: Da أولًا ثم الفعل stimme في الموضع الثاني قبل ich وقبل القسيمة zu الخاتمة.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['تقدّم Da يقلب الفاعل والفعل فيبقى الفعل ثانيًا.', 'قسيمة zustimmen تغلق الجملة: stimme … zu.'],
      writing: {
        zeigt: 'Eine Diskussion in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل تدير حوارًا: موافقة بداتيف وقسيمة خاتمة، واقتراح آخر بنصب مذكر، وطلب استكمال كلام بصيغة مهذّبة، وإعلان اتفاق انعكاسي، وختام بصفة بلا نهاية.',
        hinweise: ['الموافقة والاعتراض على الأشخاص بالداتيف لا النصب.', 'الصفة الخبرية بعد bleiben لا تُعرب: sachlich.'],
        prompt: 'اكتب جمل الحوار الخمس المستهدفة من الذاكرة مع داتيف الموافقة والقسيمة الخاتمة.',
        promptDe: 'Da stimme ich dir zu. · Ich habe einen anderen Vorschlag. · Lassen Sie mich bitte ausreden. · Wir haben uns schnell geeinigt. · Bleiben wir bitte sachlich.',
        points: ['Da stimme ich dir zu.', 'Ich habe einen anderen Vorschlag.', 'Lassen Sie mich bitte ausreden.', 'Wir haben uns schnell geeinigt.', 'Bleiben wir bitte sachlich.'],
        minWords: 24,
        frage: 'اكتب جمل الحوار الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Da stimme ich dir zu. Ich habe einen anderen Vorschlag. Lassen Sie mich bitte ausreden. Wir haben uns schnell geeinigt. Bleiben wir bitte sachlich.',
      summaryDe: 'Da stimme ich dir zu. Ich habe einen anderen Vorschlag. Lassen Sie mich bitte ausreden. Wir haben uns schnell geeinigt. Bleiben wir bitte sachlich.',
      summaryAr: 'الحوار في خمس جمل: موافقة بداتيف الشخص وقسيمة zu خاتمة، واقتراح بنصب مذكر، واستكمال كلام بلطف رسمي، واتفاق بانعكاس uns، وختام بصفة خبرية بلا نهاية.',
      summaryRecap: 'حوار في خمس حركات',
      hwHintDe: 'Nicht „we find the middle“ und nicht „du liegst falsch“ als Waffe: sachlich heißt es „Wir finden einen Kompromiss“, und statt „du liegst immer falsch“ sagt man „Da stimme ich dir nicht zu“ — Widerspruch ohne Beleidigung.'
    }),

  U('b1-u4-l6', 'B1', 'الرسالة الرسمية: الموضوع والنداء والطلب والختام', 'Formeller Brief: Betreff, Anrede, Anliegen, Gruß', 'register',
    'Am Ende steht dein Brief in fünf Sätzen: Betreff, Bitte, Frist, Anhang und Dank',
    'في النهاية تقف رسالتك في خمس جمل: موضوع فوق النص، وطلب مهذّب، وموعد أخير، ومرفقات، وشكر بداتيف الشخص.',
    [
      ['Der Betreff steht über dem Text.', 'تعرف أين يقف موضوع الرسالة', 'الوقوف في المكان يثبّت الداتيف: steht über dem Text، والحرف فوقية خالصة لا داخلي', 'Der Betreff steht in dem Text.', 'موضع الموضوع بفوقية ثابتة: über dem لا داخل in'],
      ['Ich bitte Sie um einen Termin.', 'تطلب موعدًا بصيغة مهذّبة', 'الطلب يبنى بحرف ومفعول مذكر كامل: bitte Sie um einen Termin، لا الصورة العارية ein', 'Ich bitte Sie um ein Termin.', 'المذكر بنصب كامل: einen Termin'],
      ['Die Frist endet am Freitag.', 'تقرأ آخر موعد بيومه', 'بيوم الأسبوع تلتحم الأداة في الحرف: am Freitag، والفاعل مفرد بفعل مفرد endet', 'Die Frist enden am Freitag.', 'فاعل مفرد وفعل مفرد: endet'],
      ['Im Anhang finden Sie die Kopie.', 'تدل القارئ على المرفقات', 'الملحق مقدّمًا يقلب Sie: finden Sie، والدمج im يحل محل الحرف والأداة', 'Im Anhang Sie finden die Kopie.', 'القلب بعد تقديم الملحق: finden Sie لا Sie finden']
    ],
    [
      ['Der Betreff steht über dem Text.', 'الموضوع فوق النص', 'Der Betreff steht in dem Text.', 'الموضوع بفوقية ثابتة: über dem', 'Betreff'],
      ['Ich bitte Sie um einen Termin.', 'أرجو منكم موعدًا', 'Ich bitte Sie um ein Termin.', 'الطلب بحرف um: um einen Termin', 'Termin'],
      ['Die Frist endet am Freitag.', 'المهلة تنتهي الجمعة', 'Die Frist enden am Freitag.', 'اليوم بـam ملتحمة: am Freitag', 'Freitag'],
      ['Im Anhang finden Sie die Kopie.', 'في الملحق تجدون النسخة', 'Im Anhang Sie finden die Kopie.', 'الملحق بالدمج: Im Anhang', 'Anhang']
    ],
    'Der Betreff steht über dem Text.',
    'Ich danke Ihnen für Ihre Hilfe.',
    'Wiederhole morgen die fünf Sätze: Der Betreff steht über dem Text. Ich bitte Sie um einen Termin. Die Frist endet am Freitag. Im Anhang finden Sie die Kopie. Ich danke Ihnen für Ihre Hilfe.',
    'غدًا أعد جمل الرسالة الرسمية الخمس ولاحظ الفوقية والطلب بـum ودمجَي اليوم والملحق.',
    {
      factFamilies: ['präposition', 'genus', 'konjugation', 'wortstellung'],
      imitateNearMiss: 'Betreffe',
      transformHint: 'في جملة الختام الفائدة الأخيرة: Ich danke Ihnen für Ihre Hilfe — الشكر بداتيف الشخص قبل عائدته.',
      orderSentence: 'Im Anhang finden Sie die Kopie.',
      checkOrderSentence: 'Der Betreff steht über dem Text.',
      orderAr: 'رتّب جملة الملحق: Im Anhang أولًا ثم الفعل finden في الموضع الثاني قبل فاعله Sie.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['تقديم الملحق يقلب فاعله: finden Sie.', 'المفعول يختم الوسط: die Kopie.'],
      writing: {
        zeigt: 'Ein Brief in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل تبني رسالة رسمية: موضوع يقف بفوقية، وطلب مهذّب بـum ومفعول مذكر، ومهلة تنتهي بيوم وليس بتاريخ، ودلالة على ملحق مقدّم، وشكر بداتيف الشخص.',
        hinweise: ['الرسالة تبدأ بموضوع فوق النص لا بعبارة اعتيادية.', 'الشكر والطلب بداتيف/حرف: bitte Sie um وdanke Ihnen.'],
        prompt: 'اكتب جمل الرسالة الرسمية الخمس المستهدفة من الذاكرة مع الفوقية والطلب بـum والشكر بالداتيف.',
        promptDe: 'Der Betreff steht über dem Text. · Ich bitte Sie um einen Termin. · Die Frist endet am Freitag. · Im Anhang finden Sie die Kopie. · Ich danke Ihnen für Ihre Hilfe.',
        points: ['Der Betreff steht über dem Text.', 'Ich bitte Sie um einen Termin.', 'Die Frist endet am Freitag.', 'Im Anhang finden Sie die Kopie.', 'Ich danke Ihnen für Ihre Hilfe.'],
        minWords: 29,
        frage: 'اكتب جمل الرسالة الرسمية الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Der Betreff steht über dem Text. Ich bitte Sie um einen Termin. Die Frist endet am Freitag. Im Anhang finden Sie die Kopie. Ich danke Ihnen für Ihre Hilfe.',
      summaryDe: 'Der Betreff steht über dem Text. Ich bitte Sie um einen Termin. Die Frist endet am Freitag. Im Anhang finden Sie die Kopie. Ich danke Ihnen für Ihre Hilfe.',
      summaryAr: 'الرسالة الرسمية في خمس جمل: موضوع بفوقية ثابتة، وطلب مهذّب بـum ونصب مذكر، ومهلة بيوم أسبوعي، وملحق مقدّم بفعل ثانٍ، وشكر بداتيف الشخص.',
      summaryRecap: 'رسالة في خمس خطوات',
      hwHintDe: 'Nicht „I want you to reply“ wörtlich in den Brief tragen: statt want heißt es höflich „Ich bitte Sie um eine kurze Rückmeldung“ — want ist Alltagssprache, bitten um ist Briefform.'
    }),

  U('b1-u4-l7', 'B1', 'العرض: الهيكلة والإلقاء والردّ على الأسئلة', 'Präsentation: gliedern, vortragen, Fragen beantworten', 'pruefstrategie',
    'Am Ende gliederst du eine Präsentation in fünf Sätzen: Dauer, Schluss, Stimme, Fragen und Dank',
    'في النهاية تهيكل عرضًا في خمس جمل: المدة والملخص الختامي والصوت والردّ على الأسئلة والشكر.',
    [
      ['Die Präsentation dauert zehn Minuten.', 'تعلن مدة العرض بلا حرف جرّ', 'المدة تلي dauert بإعرابها من دون حرف جرّ: dauert zehn Minuten لا für ولا حرف آخر', 'Die Präsentation dauert für zehn Minuten.', 'المدة بلا حرف جرّ: dauert zehn Minuten'],
      ['Am Schluss fasse ich zusammen.', 'تلخّص في الختام بفعل منفصل وقلب', 'الختام مقدّمًا يقلب ich، وبآخر الجملة تلتحم القسيمة: fasse ich zusammen', 'Am Schluss ich fasse zusammen.', 'القلب بعد Am Schluss: fasse ich لا ich fasse'],
      ['Sprich deutlich und langsam.', 'تُسمع الكلام بوضوح', 'الأمر بصوت متبدّل وحاليتان بلا إعراب: sprich ثم deutlich und langsam', 'Spreche deutlich und langsam.', 'الأمر بتبديل الصوت: sprich'],
      ['Ich beantworte gern alle Fragen.', 'تبدي استعدادك للأسئلة', 'الإجابة فعلها متعدٍّ مباشرة من دون أداة ولا حرف: beantworte alle Fragen', 'Ich beantworte gern auf alle Fragen.', 'مفعول مباشر: alle Fragen لا حرف auf']
    ],
    [
      ['Die Präsentation dauert zehn Minuten.', 'العرض يدوم عشر دقائق', 'Die Präsentation dauert für zehn Minuten.', 'المدة بلا حرف جرّ: dauert', 'Präsentation'],
      ['Am Schluss fasse ich zusammen.', 'في الختام ألخّص', 'Am Schluss ich fasse zusammen.', 'تلخيص منفصل أخيرًا: zusammen', 'Schluss'],
      ['Sprich deutlich und langsam.', 'تحدّث بوضوح وبطء', 'Spreche deutlich und langsam.', 'الوضوح بلا نهاية: deutlich', 'deutlich'],
      ['Ich beantworte gern alle Fragen.', 'أجيب بيسر على كل الأسئلة', 'Ich beantworte gern auf alle Fragen.', 'كل الأسئلة بمفعول مباشر: Fragen', 'Fragen']
    ],
    'Die Präsentation dauert zehn Minuten.',
    'Vielen Dank für Ihre Aufmerksamkeit.',
    'Wiederhole morgen die fünf Sätze: Die Präsentation dauert zehn Minuten. Am Schluss fasse ich zusammen. Sprich deutlich und langsam. Ich beantworte gern alle Fragen. Vielen Dank für Ihre Aufmerksamkeit.',
    'غدًا أعد جمل العرض الخمس ولاحظ المدة بلا حرف جرّ والقلب بعد Am Schluss والمفعول المباشر.',
    {
      factFamilies: ['präposition', 'wortstellung', 'konjugation', 'kasus'],
      imitateNearMiss: 'Präsentationen',
      transformHint: 'في جملة الشكر الفائدة الأخيرة: Vielen Dank für Ihre Aufmerksamkeit — الملكية المؤنثة منصوبة Ihre.',
      orderSentence: 'Am Schluss fasse ich zusammen.',
      checkOrderSentence: 'Die Präsentation dauert zehn Minuten.',
      orderAr: 'رتّب جملة التلخيص الختامي: Am Schluss أولًا ثم الفعل fasse في الموضع الثاني قبل فاعله ich.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['تقديم Am Schluss يضع الفعل قبل فاعله: fasse ich.', 'قسيمة zusammenfassen تغلق الجملة: fasse … zusammen.'],
      writing: {
        zeigt: 'Eine Präsentation in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل تهيكل عرضًا: مدة من دون حرف مدة، وخلاصة في الختام بفعل منفصل مقلوب، وأمر لتوضيح الصوت وبطئه، ووعد بإجابة كل الأسئلة بمفعول مباشر، وشكر بختام صحيح الضمير.',
        hinweise: ['مدة العرض تُباشر: dauern لا für ولا in.', 'القلب بعد العناصر المقدّمة يحفظ موضع الفعل الثاني.'],
        prompt: 'اكتب جمل العرض الخمس المستهدفة من الذاكرة مع المدة بلا حرف جرّ والتلخيص المنفصل.',
        promptDe: 'Die Präsentation dauert zehn Minuten. · Am Schluss fasse ich zusammen. · Sprich deutlich und langsam. · Ich beantworte gern alle Fragen. · Vielen Dank für Ihre Aufmerksamkeit.',
        points: ['Die Präsentation dauert zehn Minuten.', 'Am Schluss fasse ich zusammen.', 'Sprich deutlich und langsam.', 'Ich beantworte gern alle Fragen.', 'Vielen Dank für Ihre Aufmerksamkeit.'],
        minWords: 24,
        frage: 'اكتب جمل العرض الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Präsentation dauert zehn Minuten. Am Schluss fasse ich zusammen. Sprich deutlich und langsam. Ich beantworte gern alle Fragen. Vielen Dank für Ihre Aufmerksamkeit.',
      summaryDe: 'Die Präsentation dauert zehn Minuten. Am Schluss fasse ich zusammen. Sprich deutlich und langsam. Ich beantworte gern alle Fragen. Vielen Dank für Ihre Aufmerksamkeit.',
      summaryAr: 'هيكل عرض في خمس جمل: مدة من دون حرف مدة، وتلخيص في الختام بفعل منفصل مقلوب، وصوت واضح بطيء بأمر متبدّل الصوت، وردّ على كل الأسئلة بمفعول مباشر، وشكر بضمير ملكية منصوبة.',
      summaryRecap: 'عرض في خمس حركات',
      hwHintDe: 'Gliedere laut vor der Prüfung: Einstieg, Höhepunkt, Schluss — und nenne die Dauer ohne für: „Die Präsentation dauert zehn Minuten“, nicht „für zehn Minuten“.'
    }),

  U('b1-u4-l8', 'B1', 'مقابلة العمل: التقديم والقوة والخبرة', 'Das Vorstellungsgespräch: vorstellen, Stärke und Erfahrung', 'hoerstrategie',
    'Am Ende führst du ein Vorstellungsgespräch in fünf Sätzen: vorstellen, Stärke, Erfahrung, Verantwortung und Dank',
    'في النهاية تدير مقابلة عمل في خمس جمل: تقدّم نفسك، وتذكر قوتك وخبرتك، وتتحمل المسؤولية، وتشكر.',
    [
      ['Ich stelle mich kurz vor.', 'تقدّم نفسك بفعل منفصل وانعكاس', 'التقديم يُبنى بقسيمة خاتمة وانعكاس: stelle mich … vor، والقسم vor لا يُحذف من المعنى', 'Ich stelle mich kurz.', 'القسم الأخير: mich … vor'],
      ['Meine Stärke ist die Geduld.', 'تسمي نقطة قوتك', 'فاعل مفرد وفعل مفرد: Meine Stärke ist، ولا يجمع الرابط بعد فاعل واحد', 'Meine Stärke sind die Geduld.', 'فاعل مفرد وفعل مفرد: ist'],
      ['Ich habe fünf Jahre Erfahrung.', 'تقرأ خبرتك بسنوات مباشرة', 'مدة الخبرة بحال بلا حرف: habe fünf Jahre Erfahrung، فالعدد والسنوات مفعول مباشر', 'Ich habe für fünf Jahre Erfahrung.', 'مدة الخبرة بلا für: fünf Jahre Erfahrung'],
      ['Ich übernehme gern Verantwortung.', 'تتحمل المسؤولية بمفعول مباشر', 'الفعل يتعدى مباشرة إلى المسؤولية من دون حرف: übernehme Verantwortung', 'Ich übernehme gern für Verantwortung.', 'مفعول مباشر: Verantwortung لا für']
    ],
    [
      ['Ich stelle mich kurz vor.', 'أقدّم نفسي باختصار', 'Ich stelle mich kurz.', 'التقديم الانعكاسي: mich … vor', 'vor'],
      ['Meine Stärke ist die Geduld.', 'قوتي هي الصبر', 'Meine Stärke sind die Geduld.', 'القوة المفردة: Meine Stärke', 'Stärke'],
      ['Ich habe fünf Jahre Erfahrung.', 'عندي خبرة خمس سنوات', 'Ich habe für fünf Jahre Erfahrung.', 'خبرة سنوات بلا حرف: Erfahrung', 'Erfahrung'],
      ['Ich übernehme gern Verantwortung.', 'أتولى المسؤولية بيسر', 'Ich übernehme gern für Verantwortung.', 'مسؤولية مباشرة: Verantwortung', 'Verantwortung']
    ],
    'Ich stelle mich kurz vor.',
    'Ich bedanke mich für das Gespräch.',
    'Wiederhole morgen die fünf Sätze: Ich stelle mich kurz vor. Meine Stärke ist die Geduld. Ich habe fünf Jahre Erfahrung. Ich übernehme gern Verantwortung. Ich bedanke mich für das Gespräch.',
    'غدًا أعد جمل مقابلة العمل الخمس ولاحظ التقديم الانعكاسي ومدة الخبرة العارية من الحروف.',
    {
      factFamilies: ['wortstellung', 'konjugation', 'präposition', 'kasus'],
      imitateNearMiss: 'vorstellen',
      transformHint: 'في جملة الختام الفائدة الأخيرة: Ich bedanke mich für das Gespräch — الانعكاس mich جزء من الفعل نفسه.',
      orderSentence: 'Ich stelle mich kurz vor.',
      checkOrderSentence: 'Meine Stärke ist die Geduld.',
      orderAr: 'رتّب جملة التقديم: ich أولًا ثم الفعل stelle في الموضع الثاني قبل انعكاس mich.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الموضع الثاني للفعل المصرّف ثابت في الجملة الرئيسية.', 'قسيمة vorstellen تغلق الجملة: stelle mich … vor.'],
      writing: {
        zeigt: 'Ein Interview in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل تدير مقابلة عمل: تقديمًا انعكاسيًا بقسيمة أخيرة، وادّعاء قوة بصفة مفردة، وخبرة بمدة بلا حرف جرّ، وتحمّل مسؤولية بمفعول مباشر، وشكر بانعكاس.',
        hinweise: ['التقديم والشكر انعكاسيان: stelle mich vor وbedanke mich.', 'المدة تتصل مباشرة: fünf Jahre بلا für.'],
        prompt: 'اكتب جمل مقابلة العمل الخمس المستهدفة من الذاكرة مع التقديم الانعكاسي والقسم الأخير.',
        promptDe: 'Ich stelle mich kurz vor. · Meine Stärke ist die Geduld. · Ich habe fünf Jahre Erfahrung. · Ich übernehme gern Verantwortung. · Ich bedanke mich für das Gespräch.',
        points: ['Ich stelle mich kurz vor.', 'Meine Stärke ist die Geduld.', 'Ich habe fünf Jahre Erfahrung.', 'Ich übernehme gern Verantwortung.', 'Ich bedanke mich für das Gespräch.'],
        minWords: 25,
        frage: 'اكتب جمل مقابلة العمل الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Ich stelle mich kurz vor. Meine Stärke ist die Geduld. Ich habe fünf Jahre Erfahrung. Ich übernehme gern Verantwortung. Ich bedanke mich für das Gespräch.',
      summaryDe: 'Ich stelle mich kurz vor. Meine Stärke ist die Geduld. Ich habe fünf Jahre Erfahrung. Ich übernehme gern Verantwortung. Ich bedanke mich für das Gespräch.',
      summaryAr: 'مقابلة العمل في خمس جمل: تقديم انعكاسي بقسيمة أخيرة، وقوة بصيغة رابط مفردة، وخبرة بمدة بلا حرف، ومسؤولية بمفعول مباشر، وشكر بانعكاس إلزامي.',
      summaryRecap: 'مقابلة في خمس جمل',
      hwHintDe: 'Ein unbekanntes Wort im Gespräch stoppt dich nicht: Stelle lieber eine Rückfrage — „Darf ich auch eine Frage stellen?“ zeigt Interesse und kostet keine Haltung.'
    }),

  U('b1-u5-l1', 'B1', 'نص الرأي: الواقعة والتقييم والشاهد', 'Kommentar: Tatsache, Wertung und Beleg', 'pruefstrategie',
    'Am Ende trennst du Tatsache, Wertung, Ton und Beleg in fünf Sätzen',
    'في النهاية تفصل الواقعة عن التقييم وتصف النبرة وتدلّ على الشاهد في خمس جمل.',
    [
      ['Das ist eine Tatsache.', 'تسمّي الواقعة القابلة للإثبات', 'الواقعة رابطها مفرد: Das ist eine Tatsache، والفاعل Das مفرد بفعل ist لا جمع sind', 'Das sind eine Tatsache.', 'رابط مفرد: Das ist'],
      ['Das ist eine Wertung.', 'تسمي التقييم النابع من رأي', 'التقييم اسم مؤنث: eine Wertung، لا صورة مذكّرة ein بعد das ist', 'Das ist ein Wertung.', 'مؤنث: eine Wertung'],
      ['Der Ton bleibt sachlich.', 'تصف لهجة النص بالموضوعية', 'الصفة خبرية بعد bleiben بلا إعراب: bleibt sachlich، لا نهاية صفة مبدئية قبل اسم قادم', 'Der Ton bleibt sachliche.', 'الخبر بلا نهاية: sachlich'],
      ['Ein Beispiel macht es greifbar.', 'يدل المثال على الدليل', 'ضمير es يأتي مباشرة قبل الوصف: macht es greifbar، ولا ينفصل عن فعله بالوصف في النهاية', 'Ein Beispiel macht greifbar es.', 'ضمير es قبل الوصف: es greifbar']
    ],
    [
      ['Das ist eine Tatsache.', 'هذه واقعة', 'Das sind eine Tatsache.', 'واقعة مثبتة برابط مفرد: ist eine Tatsache', 'Tatsache'],
      ['Das ist eine Wertung.', 'هذا تقييم', 'Das ist ein Wertung.', 'تقييم برأي: eine Wertung', 'Wertung'],
      ['Der Ton bleibt sachlich.', 'اللهجة تبقى موضوعية', 'Der Ton bleibt sachliche.', 'نبرة بلا مبالغة: sachlich', 'sachlich'],
      ['Ein Beispiel macht es greifbar.', 'مثال يجعله ملموسًا', 'Ein Beispiel macht greifbar es.', 'الملموس بمثال: Ein Beispiel', 'Beispiel']
    ],
    'Das ist eine Tatsache.',
    'Ohne Beleg bleibt es Meinung.',
    'Wiederhole morgen die fünf Sätze: Das ist eine Tatsache. Das ist eine Wertung. Der Ton bleibt sachlich. Ein Beispiel macht es greifbar. Ohne Beleg bleibt es Meinung.',
    'غدًا أعد جمل نص الرأي الخمس ولاحظ فروق الرابطة والجنس والصفة بلا نهاية وضمير es.',
    {
      factFamilies: ['konjugation', 'genus', 'deklination', 'wortstellung'],
      imitateNearMiss: 'Tatsachen',
      transformHint: 'في جملة الختام الفائدة الأخيرة: Ohne Beleg bleibt es Meinung — بدون أداة بعد ohne يبقى الادعاء رأيًا.',
      orderSentence: 'Ein Beispiel macht es greifbar.',
      checkOrderSentence: 'Der Ton bleibt sachlich.',
      orderAr: 'رتّب جملة المثال: Ein Beispiel أولًا ثم الفعل macht في الموضع الثاني قبل الضمير es.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفعل المصرّف وحيد في الموضع الثاني بعد Ein Beispiel.', 'ضمير es لا يبتعد عن فعله في وسط الجملة: macht es.'],
      writing: {
        zeigt: 'Meinungstext in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل تبني نص رأي منظمًا: واقعة برابط مفرد، وتقييم مؤنث، ولهجة موضوعية بلا نهاية للصفة، ومثال يجعله ملموسًا، وخاتمة بأن غياب الشاهد يبقيه رأيًا.',
        hinweise: ['اسند الرأي إلى الواقعة، ونصّف النبرة sachlich.', 'ضمير es بعد فعله مباشرة.'],
        prompt: 'اكتب جمل نص الرأي الخمس المستهدفة من الذاكرة مع فروق الرابطة والجنس والوصف بلا نهاية.',
        promptDe: 'Das ist eine Tatsache. · Das ist eine Wertung. · Der Ton bleibt sachlich. · Ein Beispiel macht es greifbar. · Ohne Beleg bleibt es Meinung.',
        points: ['Das ist eine Tatsache.', 'Das ist eine Wertung.', 'Der Ton bleibt sachlich.', 'Ein Beispiel macht es greifbar.', 'Ohne Beleg bleibt es Meinung.'],
        minWords: 22,
        frage: 'اكتب جمل نص الرأي الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Das ist eine Tatsache. Das ist eine Wertung. Der Ton bleibt sachlich. Ein Beispiel macht es greifbar. Ohne Beleg bleibt es Meinung.',
      summaryDe: 'Das ist eine Tatsache. Das ist eine Wertung. Der Ton bleibt sachlich. Ein Beispiel macht es greifbar. Ohne Beleg bleibt es Meinung.',
      summaryAr: 'نص رأي في خمس جمل: واقعة برابط مفرد، وتقييم مؤنث، ونبرة موضوعية بلا نهاية للصفة، ومثال ملموس في وسط الجملة، وخاتمة بأن الشاهد يرفع الرأي إلى حجة.',
      summaryRecap: 'واقعة وتقييم وشاهد أولًا',
      hwHintDe: 'Ein „Fakt“ verkauft sich schnell: Der Autor berichtet seine Wertung nie als Fakt — prüfe immer, ob ein Beleg folgt.'
    }),

  U('b1-u5-l2', 'B1', 'الشرط المهذب: الطلب والسؤال والشكر', 'Höfliche Bedingung: Bitte, Frage und Dank', 'register',
    'Am Ende bittest du höflich, fragst erlaubt, nennst eine Bedingung und dankst in fünf Sätzen',
    'في النهاية تطلب بأدب وتستأذن في السؤال وتسمّي شرطًا وتشكر في خمس جمل.',
    [
      ['Ich hätte eine Bitte.', 'تفتتح طلبك بأدب', 'الطلب المهذب بـhätte: Ich hätte eine Bitte، وأداة النكرة مؤنثة eine لا صورة مذكّرة ein', 'Ich hätte ein Bitte.', 'مؤنث: eine Bitte'],
      ['Könnten Sie das wiederholen?', 'تسأل بأدب أن يُعاد', 'السؤال المهذب بـkönnten وSie: Könnten Sie، ولا صورة أنتَ Kannst مع Sie', 'Kannst Sie das wiederholen?', 'الرسمي: Könnten Sie'],
      ['Dürfte ich kurz etwas fragen?', 'تستأذن قبل السؤال', 'بعد dürfte مصدر بلا zu: dürfte ich … fragen، والمصدر يغلق الجملة عاريًا', 'Dürfte ich kurz etwas zu fragen?', 'بلا zu: dürfte … fragen'],
      ['Falls es Ihnen passt, komme ich morgen.', 'تربط اقتراحك بشرط', 'في جملة falls الفعل أخيرًا (passt)، وفي الرئيسية ينقلب الترتيب: komme ich لا ich komme', 'Falls es Ihnen passt, ich komme morgen.', 'قلب بعد الشرط: komme ich']
    ],
    [
      ['Ich hätte eine Bitte.', 'عندي طلب', 'Ich hätte ein Bitte.', 'افتتاح مهذب: hätte eine Bitte', 'Bitte'],
      ['Könnten Sie das wiederholen?', 'هل تستطيعون إعادته؟', 'Kannst Sie das wiederholen?', 'طلب إعادة مهذب: Könnten Sie', 'Könnten'],
      ['Dürfte ich kurz etwas fragen?', 'هل لي أن أسأل شيئًا سريعًا؟', 'Dürfte ich kurz etwas zu fragen?', 'استئذان بلا zu: dürfte … fragen', 'Dürfte'],
      ['Falls es Ihnen passt, komme ich morgen.', 'إن ناسبكم آتي غدًا', 'Falls es Ihnen passt, ich komme morgen.', 'شرط بـfalls وقلب: komme ich', 'Falls']
    ],
    'Ich hätte eine Bitte.',
    'Ich wäre Ihnen sehr dankbar.',
    'Wiederhole morgen die fünf Sätze: Ich hätte eine Bitte. Könnten Sie das wiederholen? Dürfte ich kurz etwas fragen? Falls es Ihnen passt, komme ich morgen. Ich wäre Ihnen sehr dankbar.',
    'غدًا أعد جمل الشرط المهذب الخمس ولاحظ hätte وkönnten وdürfte بلا zu والقلب بعد falls والداتيف Ihnen.',
    {
      factFamilies: ['genus', 'konjugation', 'konjugation', 'wortstellung'],
      imitateNearMiss: 'Bitten',
      transformHint: 'في جملة الختام الفائدة الأخيرة: Ich wäre Ihnen sehr dankbar — الشكر المهذب يضع الشخص بالداتيف Ihnen لا بضمير رفع.',
      orderSentence: 'Ich wäre Ihnen sehr dankbar.',
      checkOrderSentence: 'Ich hätte eine Bitte.',
      orderAr: 'رتّب جملة الشكر: Ich أولًا ثم الفعل wäre في الموضع الثاني قبل Ihnen بالداتيف.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفعل المصرّف وحيد في الموضع الثاني بعد Ich.', 'ضمير الشخص يلي الفعل بالداتيف: wäre Ihnen.'],
      writing: {
        zeigt: 'Höflich bitten in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل تدير طلبًا مهذبًا: افتتاحًا بـhätte، وسؤالًا بـkönnten وSie، واستئذانًا بـdürfte ومصدر بلا zu، وشرطًا بـfalls مع قلب الرئيسية، وشكرًا بـwäre وداتيف Ihnen.',
        hinweise: ['المهذب لا يأمر: hätte وkönnten وdürfte بدل الأمر.', 'بعد falls الفعل أخيرًا في الشرط وأولًا في الرئيسية: komme ich.'],
        prompt: 'اكتب جمل الشرط المهذب الخمس المستهدفة من الذاكرة مع صيغ الأدب والقلب بعد falls.',
        promptDe: 'Ich hätte eine Bitte. · Könnten Sie das wiederholen? · Dürfte ich kurz etwas fragen? · Falls es Ihnen passt, komme ich morgen. · Ich wäre Ihnen sehr dankbar.',
        points: ['Ich hätte eine Bitte.', 'Könnten Sie das wiederholen?', 'Dürfte ich kurz etwas fragen?', 'Falls es Ihnen passt, komme ich morgen.', 'Ich wäre Ihnen sehr dankbar.'],
        minWords: 25,
        frage: 'اكتب جمل الشرط المهذب الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Ich hätte eine Bitte. Könnten Sie das wiederholen? Dürfte ich kurz etwas fragen? Falls es Ihnen passt, komme ich morgen. Ich wäre Ihnen sehr dankbar.',
      summaryDe: 'Ich hätte eine Bitte. Könnten Sie das wiederholen? Dürfte ich kurz etwas fragen? Falls es Ihnen passt, komme ich morgen. Ich wäre Ihnen sehr dankbar.',
      summaryAr: 'طلب مهذب في خمس جمل: افتتاح بـhätte، وسؤال مهذب بـkönnten، واستئذان بـdürfte بلا zu، وشرط بـfalls مع القلب، وشكر بالداتيف Ihnen.',
      summaryRecap: 'طلب مهذب بشرط أولًا',
      hwHintDe: 'Der Infinitiv steht am Ende des Hauptsatzes, und eine Bitte klingt nie wie ein Befehl: „Dürfte ich …?“ öffnet Türen, die ein Befehl schließt.'
    }),

  U('b1-u5-l3', 'B1', 'المقارنة: المقابلة والفرق والحد', 'Vergleich: Gegensatz, Unterschied und Grenze', 'pruefstrategie',
    'Am Ende vergleichst du zwei Systeme mit Gegensatz, während-Satz und genannter Grenze in fünf Sätzen',
    'في النهاية تقارن نظامين بالمقابلة وبجملة بينما وبحدٍّ مسمّى في خمس جمل.',
    [
      ['Im Gegensatz zu Tunesien ist die Versicherung Pflicht.', 'تقابل نظامين بإطار صريح', 'إطار المقابلة im Gegensatz zu لا mit، وبعده الفعل ثانٍ: ist die Versicherung قبل الفاعل', 'Im Gegensatz mit Tunesien ist die Versicherung Pflicht.', 'المقابلة بـzu: im Gegensatz zu'],
      ['Nicht alles ist gleich.', 'تنفي التطابق الكامل', 'alles فاعل مفرد بفعل مفرد: alles ist لا sind، والنفي قبل alles', 'Nicht alles sind gleich.', 'مفرد: alles ist'],
      ['Während die einen sparen, geben die anderen aus.', 'توازن سلوكين متقابلين', 'في جملة während الفعل أخيرًا (sparen)، وفي الرئيسية ينقلب الترتيب: geben die anderen وقسيمة aus تغلق الجملة', 'Während die einen sparen, die anderen geben aus.', 'قلب بعد بينما: geben die anderen'],
      ['Der Vergleich zeigt große Unterschiede.', 'تعلن نتيجة المقارنة', 'نتيجة المقارنة فروق جمع: große Unterschiede نهاية جمع لا اسم مفرد بعد große', 'Der Vergleich zeigt große Unterschied.', 'جمع: große Unterschiede']
    ],
    [
      ['Im Gegensatz zu Tunesien ist die Versicherung Pflicht.', 'على عكس تونس، التأمين واجب', 'Im Gegensatz mit Tunesien ist die Versicherung Pflicht.', 'مقابلة بإطار zu وقلب: ist die Versicherung', 'Versicherung'],
      ['Nicht alles ist gleich.', 'ليس كل شيء متطابقًا', 'Nicht alles sind gleich.', 'الحد من التعميم: Nicht alles ist', 'gleich'],
      ['Während die einen sparen, geben die anderen aus.', 'بينما يدّخر البعض ينفق الآخرون', 'Während die einen sparen, die anderen geben aus.', 'موازنة بـwährend وقسيمة أخيرة: geben … aus', 'aus'],
      ['Der Vergleich zeigt große Unterschiede.', 'المقارنة تُظهر فروقًا كبيرة', 'Der Vergleich zeigt große Unterschied.', 'نتيجة بجمع: große Unterschiede', 'Unterschiede']
    ],
    'Im Gegensatz zu Tunesien ist die Versicherung Pflicht.',
    'Die Grenze ist das Alter.',
    'Wiederhole morgen die fünf Sätze: Im Gegensatz zu Tunesien ist die Versicherung Pflicht. Nicht alles ist gleich. Während die einen sparen, geben die anderen aus. Der Vergleich zeigt große Unterschiede. Die Grenze ist das Alter.',
    'غدًا أعد جمل المقارنة الخمس ولاحظ القلب بعد التمهيد وalles ist والقلب بعد während وخبر sein في الرفع.',
    {
      factFamilies: ['präposition', 'konjugation', 'wortstellung', 'plural'],
      imitateNearMiss: 'Versicherungen',
      transformHint: 'في جملة الختام الفائدة الأخيرة: Die Grenze ist das Alter — خبر sein في الرفع، فالحدّ يُسمَّى باسم لا يُوصف بجملة.',
      orderSentence: 'Im Gegensatz zu Tunesien ist die Versicherung Pflicht.',
      checkOrderSentence: 'Die Grenze ist das Alter.',
      orderAr: 'رتّب جملة المقابلة: عبارة Im Gegensatz zu Tunesien أولًا ثم ist في الموضع الثاني قبل die Versicherung.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['العبارة المتقدّمة كاملة في الموضع الأول، والفعل وحيد في الثاني.', 'الفاعل يأتي بعد الفعل عند التقديم: ist die Versicherung.'],
      writing: {
        zeigt: 'Vergleich in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل تقارن نظامين بحدٍّ: مقابلة بـim Gegensatz zu وقلب، ونفي تطابق بـalles ist، وموازنة بـwährend مع قلب الرئيسية، ونتيجة بجمع Unterschiede، وحدٍّ يُسمّى بخبر sein رفعًا.',
        hinweise: ['إطار المقارنة بـzu لا mit، والفعل ثانٍ بعد كل تمهيد.', 'لا تعمّم: سمِّ الحدّ (Die Grenze ist …).'],
        prompt: 'اكتب جمل المقارنة الخمس المستهدفة من الذاكرة مع إطارات المقابلة والقلب والحد المسمّى.',
        promptDe: 'Im Gegensatz zu Tunesien ist die Versicherung Pflicht. · Nicht alles ist gleich. · Während die einen sparen, geben die anderen aus. · Der Vergleich zeigt große Unterschiede. · Die Grenze ist das Alter.',
        points: ['Im Gegensatz zu Tunesien ist die Versicherung Pflicht.', 'Nicht alles ist gleich.', 'Während die einen sparen, geben die anderen aus.', 'Der Vergleich zeigt große Unterschiede.', 'Die Grenze ist das Alter.'],
        minWords: 30,
        frage: 'اكتب جمل المقارنة الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Im Gegensatz zu Tunesien ist die Versicherung Pflicht. Nicht alles ist gleich. Während die einen sparen, geben die anderen aus. Der Vergleich zeigt große Unterschiede. Die Grenze ist das Alter.',
      summaryDe: 'Im Gegensatz zu Tunesien ist die Versicherung Pflicht. Nicht alles ist gleich. Während die einen sparen, geben die anderen aus. Der Vergleich zeigt große Unterschiede. Die Grenze ist das Alter.',
      summaryAr: 'مقارنة في خمس جمل: مقابلة بإطار zu والقلب، ونفي تطابق، وموازنة بـwährend، ونتيجة بفروق جمع، وحدٍّ مسمّى بخبر رفع.',
      summaryRecap: 'قارن بحدٍّ مسمى أولًا',
      hwHintDe: '„Compared to“ ist Englisch: Deutsch sagt „im Vergleich zu“. Die Beteiligung von den Bürgern zeigt: Ohne genannte Grenze bleibt jeder Vergleich eine Behauptung.'
    }),

  U('b1-u5-l4', 'B1', 'مشكلة عمل: العبء والحوار والحل الوسط', 'Arbeitsproblem: Belastung, Gespräch und Kompromiss', 'pruefstrategie',
    'Am Ende schlägst du zur Belastung einen Kompromiss vor und sicherst ihn in fünf Sätzen',
    'في النهاية تقترح للعبء حلًّا وسطًا وتثبّته في خمس جمل.',
    [
      ['Die Belastung ist zu hoch.', 'تسمّي العبء الزائد', 'العبء فاعل مفرد بفعل مفرد: Die Belastung ist لا sind، والوصف zu hoch ثابت', 'Die Belastung sind zu hoch.', 'مفرد: Die Belastung ist'],
      ['Ich spreche das Problem direkt an.', 'تخاطب المشكلة مباشرة', 'ansprechen منفصل: spreche … an وقسيمته an تغلق الجملة لا تلتصق بالفعل في المقدمة', 'Ich anspreche das Problem direkt.', 'منفصل أخيرًا: spreche … an'],
      ['So lösen wir den Konflikt.', 'تعلن طريق الحل', 'بعد So الفعل ثانٍ والفاعل بعده: lösen wir لا wir lösen، والمفعول den Konflikt مذكر منصوب', 'So wir lösen den Konflikt.', 'قلب بعد So: lösen wir'],
      ['Wir brauchen einen Kompromiss.', 'تختار الحل الوسط', 'المفعول مذكر منصوب: einen Kompromiss لا صورة رفع ein بعد brauchen', 'Wir brauchen ein Kompromiss.', 'نصب مذكر: einen Kompromiss']
    ],
    [
      ['Die Belastung ist zu hoch.', 'العبء عالٍ جدًّا', 'Die Belastung sind zu hoch.', 'تشخيص الحمل: Die Belastung ist', 'Belastung'],
      ['Ich spreche das Problem direkt an.', 'أخاطب المشكلة مباشرة', 'Ich anspreche das Problem direkt.', 'معالجة مباشرة منفصلة: spreche … an', 'Problem'],
      ['So lösen wir den Konflikt.', 'هكذا نحلّ النزاع', 'So wir lösen den Konflikt.', 'حل بقلب: lösen wir', 'lösen'],
      ['Wir brauchen einen Kompromiss.', 'نحتاج حلًّا وسطًا', 'Wir brauchen ein Kompromiss.', 'اختيار بنصب: einen Kompromiss', 'Kompromiss']
    ],
    'Die Belastung ist zu hoch.',
    'Die Vereinbarung gilt ab morgen.',
    'Wiederhole morgen die fünf Sätze: Die Belastung ist zu hoch. Ich spreche das Problem direkt an. So lösen wir den Konflikt. Wir brauchen einen Kompromiss. Die Vereinbarung gilt ab morgen.',
    'غدًا أعد جمل مشكلة العمل الخمس ولاحظ مفرد العبء وقسيمة an والقلب بعد So ونصب الحل الوسط وab morgen.',
    {
      factFamilies: ['konjugation', 'wortstellung', 'wortstellung', 'kasus'],
      imitateNearMiss: 'Belastungen',
      transformHint: 'في جملة الختام الفائدة الأخيرة: Die Vereinbarung gilt ab morgen — بدء السريان بـab لا von وحدها.',
      orderSentence: 'Ich spreche das Problem direkt an.',
      checkOrderSentence: 'Die Belastung ist zu hoch.',
      orderAr: 'رتّب جملة المخاطبة: Ich أولًا ثم spreche في الموضع الثاني وقسيمة an في النهاية.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفعل المصرّف spreche وحيد في الموضع الثاني بعد Ich.', 'قسيمة ansprechen تغلق الجملة: spreche … an.'],
      writing: {
        zeigt: 'Arbeitsproblem in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل تدير مشكلة عمل: عبء بفعل مفرد، ومخاطبة مباشرة بقسيمة أخيرة، وحلًّا بقلب بعد So، وحلًّا وسطًا بنصب مذكر، واتفاقًا يسري ab morgen.',
        hinweise: ['عيّن المشكلة قبل الحل واختر حلًّا وسطًا واحدًا.', 'قسيمة an أخيرًا وبدء السريان ab لا von.'],
        prompt: 'اكتب جمل مشكلة العمل الخمس المستهدفة من الذاكرة مع القسيمة والقلب والنصب.',
        promptDe: 'Die Belastung ist zu hoch. · Ich spreche das Problem direkt an. · So lösen wir den Konflikt. · Wir brauchen einen Kompromiss. · Die Vereinbarung gilt ab morgen.',
        points: ['Die Belastung ist zu hoch.', 'Ich spreche das Problem direkt an.', 'So lösen wir den Konflikt.', 'Wir brauchen einen Kompromiss.', 'Die Vereinbarung gilt ab morgen.'],
        minWords: 25,
        frage: 'اكتب جمل مشكلة العمل الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Belastung ist zu hoch. Ich spreche das Problem direkt an. So lösen wir den Konflikt. Wir brauchen einen Kompromiss. Die Vereinbarung gilt ab morgen.',
      summaryDe: 'Die Belastung ist zu hoch. Ich spreche das Problem direkt an. So lösen wir den Konflikt. Wir brauchen einen Kompromiss. Die Vereinbarung gilt ab morgen.',
      summaryAr: 'مشكلة عمل في خمس جمل: عبء عالٍ بفعل مفرد، ومخاطبة بقسيمة، وحل بقلب، وحلّ وسط بنصب، واتفاق يسري من الغد.',
      summaryRecap: 'مشكلة فحوار فحلّ أولًا',
      hwHintDe: '„I suggest“ ist Englisch: Auf Deutsch schlagen wir etwas vor — „Ich schlage vor, dass wir warten“ trägt weiter als jeder Vorwurf.'
    }),

  U('b1-u5-l5', 'B1', 'النظام الصحي: الموعد والإحالة والوصفة', 'Gesundheitssystem: Termin, Überweisung und Rezept', 'lexik-kollokation',
    'Am Ende gehst du den Weg des Patienten vom Termin bis zur Versicherung in fünf Sätzen',
    'في النهاية تسلك طريق المريض من الموعد إلى التأمين في خمس جمل.',
    [
      ['Ich brauche einen Termin.', 'تطلب موعدًا', 'المفعول مذكر منصوب: einen Termin لا ein بعد brauchen', 'Ich brauche ein Termin.', 'نصب مذكر: einen Termin'],
      ['Die Praxis öffnet um acht.', 'تذكر ساعة فتح العيادة', 'الساعة النقطية بـum: um acht لا in acht', 'Die Praxis öffnet in acht.', 'الساعة: um acht'],
      ['Ich brauche eine Überweisung zum Facharzt.', 'تطلب إحالة إلى المختص', 'الإحالة اتجاهها zu + داتيف مذكر مدموج: zum Facharzt لا zu den', 'Ich brauche eine Überweisung zu den Facharzt.', 'مدموج: zum Facharzt'],
      ['Ohne Rezept gibt es das nicht.', 'تشترط الوصفة', 'بعد ohne نصب لا داتيف: ohne (ein) Rezept، والأداة جائزة والعصمة في الحالة', 'Ohne einem Rezept gibt es das nicht.', 'نصب بعد ohne: ein Rezept']
    ],
    [
      ['Ich brauche einen Termin.', 'أحتاج موعدًا', 'Ich brauche ein Termin.', 'طلب بنصب مذكر: einen Termin', 'Termin'],
      ['Die Praxis öffnet um acht.', 'العيادة تفتح عند الثامنة', 'Die Praxis öffnet in acht.', 'ساعة بـum: um acht', 'Praxis'],
      ['Ich brauche eine Überweisung zum Facharzt.', 'أحتاج إحالة إلى المختص', 'Ich brauche eine Überweisung zu den Facharzt.', 'اتجاه مدموج: zum Facharzt', 'Überweisung'],
      ['Ohne Rezept gibt es das nicht.', 'بلا وصفة لا يُصرف', 'Ohne einem Rezept gibt es das nicht.', 'اشتراط بنصب: ohne Rezept', 'Rezept']
    ],
    'Ich brauche einen Termin.',
    'Die Versicherung ist Pflicht.',
    'Wiederhole morgen die fünf Sätze: Ich brauche einen Termin. Die Praxis öffnet um acht. Ich brauche eine Überweisung zum Facharzt. Ohne Rezept gibt es das nicht. Die Versicherung ist Pflicht.',
    'غدًا أعد جمل النظام الصحي الخمس ولاحظ النصب والساعة بـum والدمج zum والنصب بعد ohne ومؤنث التأمين.',
    {
      factFamilies: ['kasus', 'präposition', 'kasus', 'kasus'],
      imitateNearMiss: 'Termine',
      transformHint: 'في جملة الختام الفائدة الأخيرة: Die Versicherung ist Pflicht — التأمين مؤنث (كل -ung مؤنثة) ولا يُقال der.',
      orderSentence: 'Ohne Rezept gibt es das nicht.',
      checkOrderSentence: 'Die Versicherung ist Pflicht.',
      orderAr: 'رتّب جملة الاشتراط: Ohne Rezept أولًا ثم gibt في الموضع الثاني قبل es.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['العبارة المتقدّمة Ohne Rezept في الأول والفعل gibt وحيد في الثاني.', 'صيغة الإتاحة es gibt ثابتة بعد الفعل: gibt es.'],
      writing: {
        zeigt: 'Patientenweg in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل تسلك طريق المريض: موعدًا بنصب مذكر، وساعة فتح بـum، وإحالة بـzum مدمجة، واشتراط وصفة بنصب بعد ohne، وتأمينًا مؤنثًا واجبًا.',
        hinweise: ['النصب بعد brauchen وohne لا بعد zu المدمجة.', 'كل اسم بـ-ung مؤنث: die Versicherung.'],
        prompt: 'اكتب جمل النظام الصحي الخمس المستهدفة من الذاكرة مع النصب والدمج وساعة الفتح.',
        promptDe: 'Ich brauche einen Termin. · Die Praxis öffnet um acht. · Ich brauche eine Überweisung zum Facharzt. · Ohne Rezept gibt es das nicht. · Die Versicherung ist Pflicht.',
        points: ['Ich brauche einen Termin.', 'Die Praxis öffnet um acht.', 'Ich brauche eine Überweisung zum Facharzt.', 'Ohne Rezept gibt es das nicht.', 'Die Versicherung ist Pflicht.'],
        minWords: 25,
        frage: 'اكتب جمل النظام الصحي الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Ich brauche einen Termin. Die Praxis öffnet um acht. Ich brauche eine Überweisung zum Facharzt. Ohne Rezept gibt es das nicht. Die Versicherung ist Pflicht.',
      summaryDe: 'Ich brauche einen Termin. Die Praxis öffnet um acht. Ich brauche eine Überweisung zum Facharzt. Ohne Rezept gibt es das nicht. Die Versicherung ist Pflicht.',
      summaryAr: 'طريق المريض في خمس جمل: موعد بنصب، وفتح بـum acht، وإحالة zum، ووصفة شرط بنصب، وتأمين مؤنث واجب.',
      summaryRecap: 'طريق المريض أولًا',
      hwHintDe: '„Clinic“ und „Date“ sind Englisch: Die Praxis öffnet um acht, und ein Termin ist kein Date — sage: „Ich brauche einen Termin.“'
    }),

  U('b1-u5-l6', 'B1', 'مراجعة B1: المجهول وobwohl وجملة الصلة', 'Wiederholung B1: Passiv, obwohl und Relativsatz', 'pruefstrategie',
    'Am Ende reparierst du Passiv, obwohl, Relativsatz und damit in fünf Sätzen',
    'في النهاية تُصلح المجهول وobwohl وجملة الصلة وdamit في خمس جمل.',
    [
      ['Die Straße wird repariert.', 'تصف حدثًا مبنيًّا للمجهول', 'المجهول الحدثي: wird + Partizip II (repariert) لا المصدر reparieren بعد wird', 'Die Straße wird reparieren.', 'مجهول: wird repariert'],
      ['Obwohl es regnet, gehe ich.', 'تثبت رغم العائق', 'في جملة obwohl الفعل أخيرًا (regnet)، وفي الرئيسية ينقلب الترتيب: gehe ich لا ich gehe', 'Obwohl es regnet, ich gehe.', 'قلب بعد obwohl: gehe ich'],
      ['Der Mann, der dort wohnt, heißt Ali.', 'تصف شخصًا بجملة صلة', 'في الصلة الفعل أخيرًا بعد الضمير: der dort wohnt لا der wohnt dort، ثم يعود فعل الرئيسية', 'Der Mann, der wohnt dort, heißt Ali.', 'الصلة أخيرًا: der dort wohnt'],
      ['Ich erkläre es, damit sie es versteht.', 'تشرح ليحصل فهم غيرك', 'الغاية بفاعل جديد مع damit والفعل أخيرًا: damit sie es versteht — بفاعل واحد كنت ستقول um … zu', 'Ich erkläre es, damit sie versteht es.', 'فعل أخيرًا مع damit: versteht']
    ],
    [
      ['Die Straße wird repariert.', 'الشارع يُرمّم', 'Die Straße wird reparieren.', 'مجهول حدثي: wird repariert', 'wird'],
      ['Obwohl es regnet, gehe ich.', 'رغم المطر أذهب', 'Obwohl es regnet, ich gehe.', 'تحدٍّ بقلب: gehe ich', 'gehe'],
      ['Der Mann, der dort wohnt, heißt Ali.', 'الرجل الذي يسكن هناك اسمه علي', 'Der Mann, der wohnt dort, heißt Ali.', 'صلة بفعل أخير: der dort wohnt', 'wohnt'],
      ['Ich erkläre es, damit sie es versteht.', 'أشرحه كي تفهمه', 'Ich erkläre es, damit sie versteht es.', 'غاية بفاعل ثانٍ: damit … versteht', 'damit']
    ],
    'Die Straße wird repariert.',
    'Ich wiederhole die Regeln jeden Tag.',
    'Wiederhole morgen die fünf Sätze: Die Straße wird repariert. Obwohl es regnet, gehe ich. Der Mann, der dort wohnt, heißt Ali. Ich erkläre es, damit sie es versteht. Ich wiederhole die Regeln jeden Tag.',
    'غدًا أعد جمل المراجعة الخمس ولاحظ Partizip II والقلب بعد obwohl وفعل الصلة الأخير وdamit وظرف jeden Tag.',
    {
      factFamilies: ['konjugation', 'wortstellung', 'wortstellung', 'wortstellung'],
      imitateNearMiss: 'werden',
      transformHint: 'في جملة الختام الفائدة الأخيرة: jeden Tag ظرف تكرار بلا حرف جر — in هنا تخدعك كأنها مدة.',
      orderSentence: 'Obwohl es regnet, gehe ich.',
      checkOrderSentence: 'Ich wiederhole die Regeln jeden Tag.',
      orderAr: 'رتّب جملة التحدي: جملة Obwohl كلها أولًا ثم gehe في الموضع الثاني قبل ich.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الجملة الفرعية المتقدّمة كلها موضع أول واحد.', 'بعدها ينقلب الترتيب: gehe ich لا ich gehe.'],
      writing: {
        zeigt: 'Wiederholung in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل تراجع أهم تراكيب B1: مجهول بـwird وPartizip II، وobwohl بقلب الرئيسية، وصلة بفعل أخير، وغاية بـdamit لفاعل ثانٍ، وروتين بظرف jeden Tag بلا حرف.',
        hinweise: ['الثانويات (obwohl والصلة وdamit) فعلها أخيرًا دائمًا.', 'المجهول يحتاج werden لا sein وحده لحدث يُصنع الآن.'],
        prompt: 'اكتب جمل مراجعة B1 الخمس المستهدفة من الذاكرة مع المجهول والقلب والفعل الأخير.',
        promptDe: 'Die Straße wird repariert. · Obwohl es regnet, gehe ich. · Der Mann, der dort wohnt, heißt Ali. · Ich erkläre es, damit sie es versteht. · Ich wiederhole die Regeln jeden Tag.',
        points: ['Die Straße wird repariert.', 'Obwohl es regnet, gehe ich.', 'Der Mann, der dort wohnt, heißt Ali.', 'Ich erkläre es, damit sie es versteht.', 'Ich wiederhole die Regeln jeden Tag.'],
        minWords: 29,
        frage: 'اكتب جمل مراجعة B1 الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Straße wird repariert. Obwohl es regnet, gehe ich. Der Mann, der dort wohnt, heißt Ali. Ich erkläre es, damit sie es versteht. Ich wiederhole die Regeln jeden Tag.',
      summaryDe: 'Die Straße wird repariert. Obwohl es regnet, gehe ich. Der Mann, der dort wohnt, heißt Ali. Ich erkläre es, damit sie es versteht. Ich wiederhole die Regeln jeden Tag.',
      summaryAr: 'مراجعة B1 في خمس جمل: مجهول يصنع حدثًا، وقلب بعد obwohl، وصلة بفعل أخير، وغاية بـdamit، وروتين يومي بلا حرف.',
      summaryRecap: 'راجع التراكيب أولًا',
      hwHintDe: 'Drei Verb-Endstellungen schützen fast jeden Satz: obwohl …, der …, damit … — wer sie im Schlaf kann, verliert in der Prüfung keine Punkte mehr.'
    }),

  U('b1-u5-l7', 'B1', 'شكل امتحان B1: الأقسام والتعويض والوقت', 'Prüfungsform B1: Teile, Ausgleich und Zeit', 'pruefstrategie',
    'Am Ende kennst du die Form: vier Teile, kein Ausgleich, jeder Punkt und die feste Zeit in fünf Sätzen',
    'في النهاية تعرف الشكل: أربعة أقسام بلا تعويض ونقطة ومحتوى ووقت ثابت في خمس جمل.',
    [
      ['Die Prüfung besteht aus vier Teilen.', 'تعدّ أقسام الامتحان', 'مكوّن الشيء بـaus: besteht aus vier Teilen لا von التي للأصل', 'Die Prüfung besteht von vier Teilen.', 'المكوّن: besteht aus'],
      ['Ein Modul rettet das andere nicht.', 'تنفي إنقاذ قسمٍ قسمًا', 'ترتيب الخبر: فاعل ففعل فمفعول (rettet das andere) لا فعل أخير في الرئيسية', 'Ein Modul das andere rettet nicht.', 'الفعل ثانٍ: rettet das andere'],
      ['Jeder Inhaltspunkt zählt.', 'تؤكد قيمة كل نقطة', 'jeder فاعل مفرد بفعل مفرد: Jeder Inhaltspunkt zählt لا zählen', 'Jeder Inhaltspunkt zählen.', 'مفرد: Jeder … zählt'],
      ['Im Sprechen arbeitet man zu zweit.', 'تصف قسم التحدث', 'النشاط المؤسسي بـim مدمجة: Im Sprechen وبعدها الفعل ثانٍ: arbeitet man', 'In Sprechen arbeitet man zu zweit.', 'مدمج: Im Sprechen']
    ],
    [
      ['Die Prüfung besteht aus vier Teilen.', 'الامتحان يتألف من أربعة أقسام', 'Die Prüfung besteht von vier Teilen.', 'تأليف بـaus: besteht aus', 'Prüfung'],
      ['Ein Modul rettet das andere nicht.', 'قسم لا ينقذ الآخر', 'Ein Modul das andere rettet nicht.', 'لا تعويض بترتيب خبر: rettet das andere', 'nicht'],
      ['Jeder Inhaltspunkt zählt.', 'كل نقطة محتوى تُحسب', 'Jeder Inhaltspunkt zählen.', 'عدّ بمفرد: Inhaltspunkt zählt', 'zählt'],
      ['Im Sprechen arbeitet man zu zweit.', 'في التحدث يعمل المرء بشريك', 'In Sprechen arbeitet man zu zweit.', 'قسم مدمج وقلب: arbeitet man', 'Sprechen']
    ],
    'Die Prüfung besteht aus vier Teilen.',
    'Die Zeit wird nicht verlängert.',
    'Wiederhole morgen die fünf Sätze: Die Prüfung besteht aus vier Teilen. Ein Modul rettet das andere nicht. Jeder Inhaltspunkt zählt. Im Sprechen arbeitet man zu zweit. Die Zeit wird nicht verlängert.',
    'غدًا أعد جمل شكل الامتحان الخمس ولاحظ aus للمكوّن والفعل الثاني ومفرد jeder والدمج Im والمجهول wird verlängert.',
    {
      factFamilies: ['präposition', 'wortstellung', 'konjugation', 'präposition'],
      imitateNearMiss: 'Prüfungen',
      transformHint: 'في جملة الختام الفائدة الأخيرة: Die Zeit wird nicht verlängert — مجهول بلا فاعل، والوقت لا ينتظر أحدًا.',
      orderSentence: 'Im Sprechen arbeitet man zu zweit.',
      checkOrderSentence: 'Die Prüfung besteht aus vier Teilen.',
      orderAr: 'رتّب جملة قسم التحدث: Im Sprechen أولًا ثم arbeitet في الموضع الثاني قبل man.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['العبارة المتقدّمة Im Sprechen كلها موضع أول.', 'الفاعل man يأتي بعد الفعل عند التقديم: arbeitet man.'],
      writing: {
        zeigt: 'Prüfungsform in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل تصف شكل امتحان B1: تأليفًا بـaus وأربعة أقسام، ونفي تعويض بترتيب خبر، وقيمة كل نقطة بفعل مفرد، وتحدثًا بشريك مع دمج Im والقلب، ووقتًا لا يُمدّد بمجهول.',
        hinweise: ['المكوّنات بـaus لا von، وكل قسم يُقيَّم وحده.', 'الوقت يغلق الجمل بالمجهول: wird nicht verlängert.'],
        prompt: 'اكتب جمل شكل امتحان B1 الخمس المستهدفة من الذاكرة مع aus والترتيب والدمج والمجهول.',
        promptDe: 'Die Prüfung besteht aus vier Teilen. · Ein Modul rettet das andere nicht. · Jeder Inhaltspunkt zählt. · Im Sprechen arbeitet man zu zweit. · Die Zeit wird nicht verlängert.',
        points: ['Die Prüfung besteht aus vier Teilen.', 'Ein Modul rettet das andere nicht.', 'Jeder Inhaltspunkt zählt.', 'Im Sprechen arbeitet man zu zweit.', 'Die Zeit wird nicht verlängert.'],
        minWords: 26,
        frage: 'اكتب جمل شكل امتحان B1 الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Prüfung besteht aus vier Teilen. Ein Modul rettet das andere nicht. Jeder Inhaltspunkt zählt. Im Sprechen arbeitet man zu zweit. Die Zeit wird nicht verlängert.',
      summaryDe: 'Die Prüfung besteht aus vier Teilen. Ein Modul rettet das andere nicht. Jeder Inhaltspunkt zählt. Im Sprechen arbeitet man zu zweit. Die Zeit wird nicht verlängert.',
      summaryAr: 'شكل الامتحان في خمس جمل: أربعة أقسام بـaus، وبلا تعويض، وكل نقطة محسوبة، وتحدث بشريك، ووقت لا يمتد.',
      summaryRecap: 'الشكل قبل المحاكاة أولًا',
      hwHintDe: 'Wer einen Inhaltspunkt weglässt, verschenkt ihn: Lies die Aufgabe zu Ende — die Zeit dafür ist schon eingerechnet, und kein Modul kauft den Punkt zurück.'
    }),

  U('b1-u5-l8', 'B1', 'الجسر إلى B2: الحجة والمثال والموقف المقابل', 'Übergang zu B2: Argument, Beispiel und Gegenposition', 'pruefstrategie',
    'Am Ende sagst du ehrlich, was für B2 noch fehlt — in fünf Sätzen',
    'في النهاية تقول بصدق ما ينقصك لـ B2 في خمس جمل.',
    [
      ['Ein Argument braucht ein Beispiel.', 'تدعم الحجة بمثال', 'brauchen يأخذ مفعولًا محايدًا منصوبًا: ein Beispiel لا einem كأن الفعل داتيفي', 'Ein Argument braucht einem Beispiel.', 'نصب بعد brauchen: ein Beispiel'],
      ['Zuerst beschreibe ich die Grafik.', 'تصف قبل أن تفسّر', 'بعد Zuerst المتقدم ينقلب الترتيب — الفعل في الموضع الثاني ثم الفاعل: beschreibe ich لا ich beschreibe', 'Zuerst ich beschreibe die Grafik.', 'قلب بعد الظرف: beschreibe ich'],
      ['Ich nenne die Gegenposition.', 'تذكر الموقف المقابل', 'المفعول به مؤنث منصوب: die Gegenposition — der هنا مضافة أو داتيف لا مفعولًا', 'Ich nenne der Gegenposition.', 'نصب مؤنث: die Gegenposition'],
      ['Immer und nie sind schwach.', 'ترفض التعميم المطلق', 'فاعلان معطوفان فعلاهما جمع: Immer und nie sind لا ist', 'Immer und nie ist schwach.', 'جمع بالعطف: sind']
    ],
    [
      ['Ein Argument braucht ein Beispiel.', 'الحجة تحتاج مثالًا', 'Ein Argument braucht einem Beispiel.', 'سند بنصب محايد: ein Beispiel', 'Beispiel'],
      ['Zuerst beschreibe ich die Grafik.', 'أولًا أصف الرسم', 'Zuerst ich beschreibe die Grafik.', 'وصف بقلب: beschreibe ich', 'Grafik'],
      ['Ich nenne die Gegenposition.', 'أذكر الموقف المقابل', 'Ich nenne der Gegenposition.', 'مقابل بنصب: die Gegenposition', 'Gegenposition'],
      ['Immer und nie sind schwach.', 'دائمًا وأبدًا ضعيفان', 'Immer und nie ist schwach.', 'ضد المطلق بجمع: sind schwach', 'schwach']
    ],
    'Ein Argument braucht ein Beispiel.',
    'Die Argumentation muss schlüssig sein.',
    'Wiederhole morgen die fünf Sätze: Ein Argument braucht ein Beispiel. Zuerst beschreibe ich die Grafik. Ich nenne die Gegenposition. Immer und nie sind schwach. Die Argumentation muss schlüssig sein.',
    'غدًا أعد جمل الجسر إلى B2 الخمس ولاحظ النصب بعد brauchen والقلب بعد Zuerst ونصب المؤنث والعطف بالجمع.',
    {
      factFamilies: ['kasus', 'wortstellung', 'kasus', 'konjugation'],
      imitateNearMiss: 'Beispiele',
      transformHint: 'في جملة الختام الفائدة الأخيرة: Die Argumentation muss schlüssig sein — في B2 الحجة لا تُسمع بصوت مرتفع، بل تُثبت باتساقها الداخلي.',
      orderSentence: 'Zuerst beschreibe ich die Grafik.',
      checkOrderSentence: 'Ich nenne die Gegenposition.',
      orderAr: 'رتّب جملة الوصف: Zuerst أولًا ثم beschreibe في الموضع الثاني قبل ich.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الظرف المتقدّم Zuerst هو الموضع الأول وحده.', 'الفاعل ich يأتي بعد الفعل عند تقديم ظرف: beschreibe ich.'],
      writing: {
        zeigt: 'Brücke zu B2 in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل تعبر بك إلى B2: حجة بمثال بنصب محايد، ووصفًا قبل التأويل بقلب بعد Zuerst، وموقفًا مقابلًا بنصب مؤنث، ورفضًا للإطلاق بسندين معطوفين بفعل جمع، وخاتمة بأن الحجاج يجب أن يكون متماسكًا.',
        hinweise: ['كل موقف بلا مثال يُقرأ رأيًا؛ أرفقه بـBeispiel.', 'الترتيب المنهجي: وصفٌ ثم استدلالٌ ثم مقابلٌ ثم خلاصة متماسكة.'],
        prompt: 'اكتب جمل الجسر إلى B2 الخمس المستهدفة من الذاكرة مع النصب والقلب والعطف بالجمع.',
        promptDe: 'Ein Argument braucht ein Beispiel. · Zuerst beschreibe ich die Grafik. · Ich nenne die Gegenposition. · Immer und nie sind schwach. · Die Argumentation muss schlüssig sein.',
        points: ['Ein Argument braucht ein Beispiel.', 'Zuerst beschreibe ich die Grafik.', 'Ich nenne die Gegenposition.', 'Immer und nie sind schwach.', 'Die Argumentation muss schlüssig sein.'],
        minWords: 24,
        frage: 'اكتب جمل الجسر إلى B2 الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Ein Argument braucht ein Beispiel. Zuerst beschreibe ich die Grafik. Ich nenne die Gegenposition. Immer und nie sind schwach. Die Argumentation muss schlüssig sein.',
      summaryDe: 'Ein Argument braucht ein Beispiel. Zuerst beschreibe ich die Grafik. Ich nenne die Gegenposition. Immer und nie sind schwach. Die Argumentation muss schlüssig sein.',
      summaryAr: 'جسر B2 في خمس جمل: سندٌ بمثال، ووصفٌ يسبق التأويل، ومقابلٌ مذكور، ولا تعميم مطلق، وحجة متماسكة.',
      summaryRecap: 'اعبر بصدق إلى B2',
      hwHintDe: 'Ein Beispiel trägt weiter als „immer“ und „nie“: Beschreibe die Grafik, nenne die Tendenz — und prüfe am Ende, ob deine Schlussfolgerung wirklich folgt.'
    }),/* Unit 6 — amendment B1-L2 (DECISIONS-PENDING.md item 25). The sixth unit exists
   because of the B1 match: tools/goethe-b1-candidates.txt holds 219 entries the
   learner already MEETS in the material and no word list names. A B1 lesson holds
   40 words (the compiler's ceiling), so 219 + the 21 entries the new lessons carry
   in their own material are spread over six lessons of 40. The grammar of the unit
   is the B1 grammar the earlier five units did not name: Pronominaladverbien,
   Partizip als Adjektiv, zweiteilige Konnektoren, Passiv mit Modalverben,
   Nominalstil, Wortbildung. */
  U('b1-u6-l1', 'B1', 'الضمائر الظرفية: darauf وdaran وworüber', 'Pronominaladverbien: darauf, daran und worüber', 'präposition',
    'Am Ende fragst und antwortest du mit worüber, darauf und daran — in fünf Sätzen',
    'في النهاية تسأل وتجيب بـworüber وdarauf وdaran في خمس جمل.',
    [
      ['Ich warte darauf.', 'تشير إلى شيء مذكور بضمير ظرفي', 'warten auf + شيء مذكور يصبح darauf في كلمة واحدة — حرف الفعل نفسه لا ترجمة عربية', 'Ich warte auf das.', 'للشيء darauf لا auf das'],
      ['Worüber sprecht ihr gerade?', 'تسأل عن شيء بحرف جر', 'السؤال عن شيء: wo(r) + حرف — worüber، وتدخل r قبل حرف متحرك', 'Über was sprecht ihr gerade?', 'السؤال worüber لا Über was'],
      ['Ich denke oft daran.', 'تستبدل an + شيء بـdaran', 'denken an + شيء يصبح daran — حرف الفعل an يبقى داخل الضمير الظرفي', 'Ich denke oft an das.', 'daran لا an das'],
      ['Ich helfe ihm.', 'تستعمل الضمير الشخصي للأشخاص', 'للأشخاص لا يوجد ضمير ظرفي: helfen يأخذ شخصًا في الداتيف ihm — daran للأشياء فقط', 'Ich helfe daran.', 'للشخص ihm لا daran']
    ],
    [
      ['Ich warte darauf.', 'أنتظر ذلك', 'Ich warte auf das.', 'للشيء ضمير ظرفي: darauf.', 'darauf'],
      ['Worüber sprecht ihr gerade?', 'عن ماذا تتحدثون الآن؟', 'Über was sprecht ihr gerade?', 'السؤال worüber.', 'Worüber'],
      ['Ich denke oft daran.', 'أفكّر في ذلك غالبًا', 'Ich denke oft an das.', 'denken an يصبح daran.', 'daran'],
      ['Ich helfe ihm.', 'أساعده', 'Ich helfe daran.', 'للشخص ضمير شخصي: ihm.', 'ihm']
    ],
    'Ich warte darauf. Worüber sprecht ihr gerade?',
    'Darauf warte ich schon lange.',
    'Wiederhole morgen die fünf Sätze: Ich warte darauf. Worüber sprecht ihr gerade? Ich denke oft daran. Ich helfe ihm. Darauf warte ich schon lange.',
    'غدًا أعد جمل الضمائر الظرفية الخمس ولاحظ الفرق بين الشيء والشخص.',
    {
      factFamilies: ['präposition', 'präposition', 'präposition', 'kasus'],
      imitateNearMiss: 'worauf',
      transformHint: 'في جملة الختام الحركة الأخيرة: Darauf warte ich schon lange — الضمير الظرفي يستطيع افتتاح الجملة، وعندها يبقى الفعل ثانيًا ويأتي الفاعل بعده.',
      orderSentence: 'Darauf warte ich schon lange.',
      checkOrderSentence: 'Ich denke oft daran.',
      orderAr: 'رتّب جملة التقديم: Darauf أولًا ثم warte في الموضع الثاني قبل ich.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الضمير الظرفي المتقدّم Darauf هو الموضع الأول وحده.', 'الفاعل ich يأتي بعد الفعل عند التقديم: warte ich.'],
      writing: {
        zeigt: 'Pronominaladverbien in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: إشارة إلى شيء بـdarauf، وسؤالًا بـworüber، وتفكيرًا بـdaran، ومساعدة شخص بـihm، وخاتمة بتقديم الضمير الظرفي على الفعل.',
        hinweise: ['حرف الفعل يبقى داخل الضمير الظرفي: warten auf تصبح darauf.', 'للأشخاص ضمير شخصي لا ضمير ظرفي: ihm.'],
        prompt: 'اكتب جمل الضمائر الظرفية الخمس المستهدفة من الذاكرة مع السؤال والشخص والتقديم.',
        promptDe: 'Ich warte darauf. · Worüber sprecht ihr gerade? · Ich denke oft daran. · Ich helfe ihm. · Darauf warte ich schon lange.',
        points: ['Ich warte darauf.', 'Worüber sprecht ihr gerade?', 'Ich denke oft daran.', 'Ich helfe ihm.', 'Darauf warte ich schon lange.'],
        minWords: 19,
        frage: 'اكتب جمل الضمائر الظرفية الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Ich warte darauf. Worüber sprecht ihr gerade? Ich denke oft daran. Ich helfe ihm. Darauf warte ich schon lange.',
      summaryDe: 'Ich warte darauf. Worüber sprecht ihr gerade? Ich denke oft daran. Ich helfe ihm. Darauf warte ich schon lange.',
      summaryAr: 'للشيء da(r) + حرف، وللسؤال wo(r) + حرف، وللشخص ضمير شخصي — والضمير الظرفي يقدَّم مع بقاء الفعل ثانيًا.',
      summaryRecap: 'للشيء darauf وللشخص ihm',
      hwHintDe: 'Das Pronominaladverb ersetzt Präposition und Sache in einem Wort: Ich warte darauf, nicht auf das. Bei Personen bleibt das Personalpronomen: Ich warte auf ihn. Frage mit worüber und antworte mit darüber.'
    }),

  U('b1-u6-l2', 'B1', 'اسم الفاعل والمفعول كصفة: spannend وgespannt', 'Partizip als Adjektiv: spannend und gespannt', 'deklination',
    'Am Ende unterscheidest du spannend und gespannt und setzt die Endungen richtig — in fünf Sätzen',
    'في النهاية تميّز بين spannend وgespannt وتضع النهايات صحيحة في خمس جمل.',
    [
      ['Der Film ist spannend.', 'تصف من يُحدث الأثر', 'اسم الفاعل Partizip I (الفعل + d) يصف من يفعل الآن: الفيلم يُثير فهو spannend', 'Der Film ist gespannt.', 'المُحدِث spannend'],
      ['Das Kind ist gespannt.', 'تصف من يقع عليه الأثر', 'اسم المفعول Partizip II يصف من تلقّى الأثر: الطفل متلهّف منتظر فهو gespannt', 'Das Kind ist spannend.', 'المتلقّي gespannt'],
      ['Ich lese ein spannendes Buch.', 'تضع اسم الفاعل قبل الاسم بنهاية صفة', 'قبل الاسم المحايد بعد ein يأخذ اسم الفاعل نهاية الصفة: ein spannendes Buch', 'Ich lese ein spannend Buch.', 'قبل الاسم: spannendes'],
      ['Die beruhigte Mutter lächelt.', 'تضع اسم المفعول قبل الاسم بنهاية صفة', 'اسم المفعول قبل الاسم يتصرّف كصفة كاملة: die beruhigte Mutter لا beruhigt وحدها', 'Die beruhigt Mutter lächelt.', 'قبل الاسم: beruhigte']
    ],
    [
      ['Der Film ist spannend.', 'الفيلم مشوّق', 'Der Film ist gespannt.', 'المُحدِث للأثر: spannend.', 'spannend'],
      ['Das Kind ist gespannt.', 'الطفل متلهّف', 'Das Kind ist spannend.', 'المتلقّي للأثر: gespannt.', 'gespannt'],
      ['Ich lese ein spannendes Buch.', 'أقرأ كتابًا مشوّقًا', 'Ich lese ein spannend Buch.', 'قبل الاسم نهاية -es: spannendes.', 'spannendes'],
      ['Die beruhigte Mutter lächelt.', 'الأم المهدّأة تبتسم', 'Die beruhigt Mutter lächelt.', 'قبل الاسم نهاية صفة: beruhigte.', 'beruhigte']
    ],
    'Der Film ist spannend. Das Kind ist gespannt.',
    'Die Musik ist beruhigend.',
    'Wiederhole morgen die fünf Sätze: Der Film ist spannend. Das Kind ist gespannt. Ich lese ein spannendes Buch. Die beruhigte Mutter lächelt. Die Musik ist beruhigend.',
    'غدًا أعد جمل اسمَي الفاعل والمفعول الخمس ولاحظ من يفعل ومن يتلقّى والنهاية قبل الاسم وغيابها في الخبر.',
    {
      factFamilies: ['konjugation', 'konjugation', 'deklination', 'deklination'],
      imitateNearMiss: 'gespannt',
      transformHint: 'في جملة الختام القاعدة الأخيرة: Die Musik ist beruhigend — اسم الفاعل في الخبر بلا نهاية، فالنهاية لا تأتي إلا قبل الاسم.',
      orderSentence: 'Ich lese ein spannendes Buch.',
      checkOrderSentence: 'Der Film ist spannend.',
      orderAr: 'رتّب جملة القراءة: Ich أولًا ثم lese في الموضع الثاني قبل المفعول.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Ich هو الموضع الأول وحده.', 'المفعول ein spannendes Buch يأتي كتلة واحدة بعد الفعل.'],
      writing: {
        zeigt: 'Partizipien als Adjektive in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: مُحدِث أثر بـspannend، ومتلقٍّ بـgespannt، واسم فاعل قبل اسم بنهاية -es، واسم مفعول قبل اسم بنهاية صفة، وخاتمة باسم فاعل خبري بلا نهاية.',
        hinweise: ['اسأل دائمًا: من يُحدث الأثر؟ spannend. ومن يتلقّاه؟ gespannt.', 'النهاية قبل الاسم فقط؛ في الخبر تبقى الصفة بلا نهاية.'],
        prompt: 'اكتب جمل اسمَي الفاعل والمفعول الخمس المستهدفة من الذاكرة مع التمييز والنهايات.',
        promptDe: 'Der Film ist spannend. · Das Kind ist gespannt. · Ich lese ein spannendes Buch. · Die beruhigte Mutter lächelt. · Die Musik ist beruhigend.',
        points: ['Der Film ist spannend.', 'Das Kind ist gespannt.', 'Ich lese ein spannendes Buch.', 'Die beruhigte Mutter lächelt.', 'Die Musik ist beruhigend.'],
        minWords: 21,
        frage: 'اكتب جمل اسمَي الفاعل والمفعول الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Der Film ist spannend. Das Kind ist gespannt. Ich lese ein spannendes Buch. Die beruhigte Mutter lächelt. Die Musik ist beruhigend.',
      summaryDe: 'Der Film ist spannend. Das Kind ist gespannt. Ich lese ein spannendes Buch. Die beruhigte Mutter lächelt. Die Musik ist beruhigend.',
      summaryAr: 'اسم الفاعل للمُحدِث واسم المفعول للمتلقّي، والنهاية قبل الاسم فقط وبلا نهاية في الخبر.',
      summaryRecap: 'spannend يفعل وgespannt يتلقّى',
      hwHintDe: 'Das Partizip I bildest du mit -end und es beschreibt den Handelnden: Der Film ist spannend. Das Partizip II beschreibt den Betroffenen: Das Kind ist gespannt. Vor dem Nomen steht eine Endung, nach sein keine. Merke dir das Paar spannend und gespannt immer zusammen in einem Satz.'
    }),

  U('b1-u6-l3', 'B1', 'الروابط المزدوجة: entweder … oder وje … desto وsondern', 'Zweiteilige Konnektoren: entweder oder, je desto, sondern auch', 'wortstellung',
    'Am Ende verbindest du Sätze mit entweder oder, je desto und sondern — in fünf Sätzen',
    'في النهاية تربط الجمل بـentweder … oder وje … desto وsondern في خمس جمل.',
    [
      ['Entweder du rufst an oder du schreibst.', 'تعرض بديلين بشطرين كاملين', 'entweder لا يقف وحده: الشطر الثاني بـoder جزء من القاعدة لا زخرفة', 'Entweder du rufst an.', 'الشطر الثاني: oder'],
      ['Je mehr du übst, desto besser sprichst du.', 'تربط تناسبًا متدرّجًا', 'بعد je الفعل آخرًا في الشطر الفرعي، وبعد desto تأتي المقارنة ثم الفعل ثم الفاعل', 'Je mehr du übst, besser sprichst du.', 'desto قبل المقارنة'],
      ['Er ist nicht Lehrer, sondern Arzt.', 'تصحّح بعد نفي', 'بعد nicht يكون التصحيح بـsondern لا aber: aber تضيف ولا تلغي المنفي', 'Er ist nicht Lehrer, aber Arzt.', 'للتصحيح sondern'],
      ['Sie spricht sowohl Deutsch als auch Arabisch.', 'تجمع شيئين بزوج ثابت', 'شطر sowohl الثاني هو als auch لا und: الزوج وحدة واحدة', 'Sie spricht sowohl Deutsch und Arabisch.', 'als auch لا und']
    ],
    [
      ['Entweder du rufst an oder du schreibst.', 'إما أن تهاتف أو تكتب', 'Entweder du rufst an.', 'البديلان بشطرين كاملين: oder.', 'oder'],
      ['Je mehr du übst, desto besser sprichst du.', 'كلما تدربت أكثر تحدثت أفضل', 'Je mehr du übst, besser sprichst du.', 'الشطر الرئيسي يبدأ بـdesto.', 'desto'],
      ['Er ist nicht Lehrer, sondern Arzt.', 'ليس مدرسًا بل طبيبًا', 'Er ist nicht Lehrer, aber Arzt.', 'بعد النفي التصحيح sondern.', 'sondern'],
      ['Sie spricht sowohl Deutsch als auch Arabisch.', 'تتحدث الألمانية والعربية معًا', 'Sie spricht sowohl Deutsch und Arabisch.', 'زوج sowohl هو als auch.', 'Arabisch']
    ],
    'Entweder du rufst an oder du schreibst. Je mehr du übst, desto besser sprichst du.',
    'Nicht nur du lernst, sondern auch ich lerne.',
    'Wiederhole morgen die fünf Sätze: Entweder du rufst an oder du schreibst. Je mehr du übst, desto besser sprichst du. Er ist nicht Lehrer, sondern Arzt. Sie spricht sowohl Deutsch als auch Arabisch. Nicht nur du lernst, sondern auch ich lerne.',
    'غدًا أعد جمل الروابط المزدوجة الخمس ولاحظ أن كل رابط يحتاج شطره الثاني.',
    {
      factFamilies: ['wortstellung', 'wortstellung', 'lexik-kollokation', 'wortstellung'],
      imitateNearMiss: 'und',
      transformHint: 'في جملة الختام الزوج الأخير: Nicht nur du lernst, sondern auch ich lerne — شطر sondern auch يتمّ الزوج الذي بدأ بـnicht nur.',
      orderSentence: 'Sie spricht sowohl Deutsch als auch Arabisch.',
      checkOrderSentence: 'Er ist nicht Lehrer, sondern Arzt.',
      orderAr: 'رتّب جملة الجمع: Sie أولًا ثم spricht قبل زوج sowohl … als auch.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Sie هو الموضع الأول وحده.', 'الزوج sowohl … als auch يحتضن الاسمين بعد الفعل.'],
      writing: {
        zeigt: 'Zweiteilige Konnektoren in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: بديلين بـentweder … oder، وتناسبًا بـje … desto، وتصحيحًا بعد نفي بـsondern، وجمعًا بـsowohl … als auch، وخاتمة بـnicht nur … sondern auch.',
        hinweise: ['كل رابط مزدوج عقد من شطرين؛ لا تترك الشطر الثاني.', 'بعد النفي يُصحَّح بـsondern لا بـaber.'],
        prompt: 'اكتب جمل الروابط المزدوجة الخمس المستهدفة من الذاكرة مع الشطرين في كل جملة.',
        promptDe: 'Entweder du rufst an oder du schreibst. · Je mehr du übst, desto besser sprichst du. · Er ist nicht Lehrer, sondern Arzt. · Sie spricht sowohl Deutsch als auch Arabisch. · Nicht nur du lernst, sondern auch ich lerne.',
        points: ['Entweder du rufst an oder du schreibst.', 'Je mehr du übst, desto besser sprichst du.', 'Er ist nicht Lehrer, sondern Arzt.', 'Sie spricht sowohl Deutsch als auch Arabisch.', 'Nicht nur du lernst, sondern auch ich lerne.'],
        minWords: 36,
        frage: 'اكتب جمل الروابط المزدوجة الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Entweder du rufst an oder du schreibst. Je mehr du übst, desto besser sprichst du. Er ist nicht Lehrer, sondern Arzt. Sie spricht sowohl Deutsch als auch Arabisch. Nicht nur du lernst, sondern auch ich lerne.',
      summaryDe: 'Entweder du rufst an oder du schreibst. Je mehr du übst, desto besser sprichst du. Er ist nicht Lehrer, sondern Arzt. Sie spricht sowohl Deutsch als auch Arabisch. Nicht nur du lernst, sondern auch ich lerne.',
      summaryAr: 'الرابط المزدوج عقد من شطرين: بديل أو تناسب أو تصحيح بعد نفي أو جمع — ولا يقف شطر وحده أبدًا.',
      summaryRecap: 'كل شطر أول ينتظر شطره',
      hwHintDe: 'Ein zweiteiliger Konnektor ist ein Vertrag aus zwei Teilen: Entweder verlangt ein Oder, je verlangt ein desto und sowohl ein als auch. Wer den zweiten Teil vergisst, lässt den Satz unfertig in der Luft hängen.'
    }),

  U('b1-u6-l4', 'B1', 'المجهول مع أفعال المساعدة: muss repariert werden', 'Passiv mit Modalverben: muss repariert werden', 'konjugation',
    'Am Ende bildest du das Passiv mit muss, kann und werden — in fünf Sätzen',
    'في النهاية تكوّن المجهول بـmuss وkann وwerden في خمس جمل.',
    [
      ['Die Straße muss heute repariert werden.', 'تفرض إجراءً لازمًا بالمجهول', 'المساعد muss مصرّف في الموضع الثاني، واسم المفعول ثم werden آخرًا: muss … repariert werden', 'Die Straße muss heute reparieren werden.', 'اسم المفعول repariert لا المصدر'],
      ['Das Dach kann morgen saniert werden.', 'تصف إجراءً ممكنًا بالمجهول', 'kann كالمساعد muss: الفعل الرئيسي اسم مفعول قبل werden لا مصدرًا', 'Das Dach kann morgen sanieren werden.', 'saniert لا sanieren'],
      ['Man repariert die Straße.', 'تستعمل man بديلًا نشطًا للمجهول', 'man فاعل عام يأخذ فعلًا مفردًا دائمًا: Man repariert لا reparieren', 'Man reparieren die Straße.', 'man مع فعل مفرد'],
      ['Die Straße ist repariert.', 'تصف حالة منتهية لا حدثًا جاريًا', 'sein + اسم المفعول يصف الحالة الناتجة بعد انتهاء العمل لا الحدث نفسه', 'Die Straße ist reparieren.', 'للحالة: ist repariert']
    ],
    [
      ['Die Straße muss heute repariert werden.', 'الشارع يجب أن يُصلَح اليوم', 'Die Straße muss heute reparieren werden.', 'اسم المفعول قبل werden: repariert.', 'repariert'],
      ['Das Dach kann morgen saniert werden.', 'السقف يمكن ترميمه غدًا', 'Das Dach kann morgen sanieren werden.', 'اسم المفعول قبل werden: saniert.', 'saniert'],
      ['Man repariert die Straße.', 'يُصلَح الشارع (بصيغة man)', 'Man reparieren die Straße.', 'man تأخذ فعلًا مفردًا: repariert.', 'repariert'],
      ['Die Straße ist repariert.', 'الشارع مُصلَح (حالة)', 'Die Straße ist reparieren.', 'الحالة بـist + اسم المفعول.', 'ist']
    ],
    'Die Straße muss heute repariert werden. Das Dach kann morgen saniert werden.',
    'Die Rechnungen müssen heute bezahlt werden.',
    'Wiederhole morgen die fünf Sätze: Die Straße muss heute repariert werden. Das Dach kann morgen saniert werden. Man repariert die Straße. Die Straße ist repariert. Die Rechnungen müssen heute bezahlt werden.',
    'غدًا أعد جمل المجهول مع المساعدات الخمس ولاحظ اسم المفعول قبل werden.',
    {
      factFamilies: ['konjugation', 'konjugation', 'konjugation', 'konjugation'],
      imitateNearMiss: 'reparieren',
      transformHint: 'في جملة الختام الفائدة الأخيرة: Die Rechnungen müssen heute bezahlt werden — مع فاعل جمع يصبح المساعد müssen ويبقى اسم المفعول قبل werden.',
      orderSentence: 'Die Straße muss heute repariert werden.',
      orderRightBracket: ['repariert', 'werden.'],
      checkOrderSentence: 'Das Dach kann morgen saniert werden.',
      checkOrderRightBracket: ['saniert', 'werden.'],
      orderAr: 'رتّب جملة المجهول: الفاعل أولًا ثم muss ثم الظرف وأغلق بـrepariert werden.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Die Straße هو الموضع الأول وحده.', 'قفل الجملة اسم المفعول ثم werden آخرًا: repariert werden.'],
      writing: {
        zeigt: 'Passiv mit Modalverben in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: إلزامًا بـmuss، وإمكانًا بـkann، وبديل man النشط، وحالة منتهية بـist، وخاتمة بفاعل جمع مع müssen — واسم المفعول قبل werden دائمًا.',
        hinweise: ['المساعد مُصرّف في الموضع الثاني واسم المفعول + werden في النهاية.', 'للحالة المنتهية ist + اسم المفعول بلا werden.'],
        prompt: 'اكتب جمل المجهول مع المساعدات الخمس المستهدفة من الذاكرة مع اسم المفعول قبل werden.',
        promptDe: 'Die Straße muss heute repariert werden. · Das Dach kann morgen saniert werden. · Man repariert die Straße. · Die Straße ist repariert. · Die Rechnungen müssen heute bezahlt werden.',
        points: ['Die Straße muss heute repariert werden.', 'Das Dach kann morgen saniert werden.', 'Man repariert die Straße.', 'Die Straße ist repariert.', 'Die Rechnungen müssen heute bezahlt werden.'],
        minWords: 26,
        frage: 'اكتب جمل المجهول مع أفعال المساعدة الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Straße muss heute repariert werden. Das Dach kann morgen saniert werden. Man repariert die Straße. Die Straße ist repariert. Die Rechnungen müssen heute bezahlt werden.',
      summaryDe: 'Die Straße muss heute repariert werden. Das Dach kann morgen saniert werden. Man repariert die Straße. Die Straße ist repariert. Die Rechnungen müssen heute bezahlt werden.',
      summaryAr: 'المساعد يُصرَّف ثانيًا وتُقفل الجملة باسم المفعول ثم werden، وman بديل نشط، وist + اسم المفعول للحالة.',
      summaryRecap: 'اسم المفعول قبل werden دائمًا',
      hwHintDe: 'Das Modalverb steht an zweiter Stelle, das Partizip mit werden schließt den Satz: Die Straße muss heute repariert werden. Ist der Vorgang fertig, beschreibt ist repariert nur noch den Zustand danach.'
    }),

  U('b1-u6-l5', 'B1', 'الأسلوب الاسمي: beim Ausfüllen والإضافة', 'Nominalstil: beim Ausfüllen und Genitiv', 'kasus',
    'Am Ende ersetzt du die wenn-Konstruktion durch den Nominalstil — in fünf Sätzen',
    'في النهاية تستبدل جملة wenn بالأسلوب الاسمي في خمس جمل.',
    [
      ['Beim Ausfüllen des Formulars hilft die Sekretärin.', 'تختصر جملة ظرفية باسم حدث', 'beim + اسم مصدري بحرف كبير يختصر جملة wenn كاملة، ومفعوله يلحقه مضافًا: des Formulars — والفعل يبقى ثانيًا', 'Beim Ausfüllen des Formulars die Sekretärin hilft.', 'الفعل ثانٍ: hilft قبل الفاعل'],
      ['Die Höhe des Turms ist bekannt.', 'تربط اسمين بالإضافة', 'النص الرسمي يفضّل الإضافة على von: des Turms — وvon نفسها تطلب الداتيف لا الرفع', 'Die Höhe von das Turm ist bekannt.', 'الإضافة des Turms'],
      ['Der Schutz der Daten ist wichtig.', 'تسمّي مفهومًا رسميًا برأس واحد', 'رأس العبارة مفرد (Schutz) وجمع المضاف لا يغيّر اتفاق الفعل: ist لا sind', 'Der Schutz der Daten sind wichtig.', 'الرأس مفرد: ist'],
      ['Nach dem Prüfen kommt die Antwort.', 'ترتّب حدثًا بعد حدث باسمين', 'nach + اسم مصدري في الداتيف مع الأداة: nach dem Prüfen — الأداة لا تسقط', 'Nach Prüfen kommt die Antwort.', 'nach dem Prüfen']
    ],
    [
      ['Beim Ausfüllen des Formulars hilft die Sekretärin.', 'عند ملء الاستمارة تساعد السكرتيرة', 'Beim Ausfüllen des Formulars die Sekretärin hilft.', 'الفعل ثانٍ بعد الجار المتقدّم.', 'Formulars'],
      ['Die Höhe des Turms ist bekannt.', 'ارتفاع البرج معروف', 'Die Höhe von das Turm ist bekannt.', 'الإضافة: des Turms.', 'Turms'],
      ['Der Schutz der Daten ist wichtig.', 'حماية البيانات مهمة', 'Der Schutz der Daten sind wichtig.', 'الرأس مفرد: ist.', 'Daten'],
      ['Nach dem Prüfen kommt die Antwort.', 'بعد الفحص يأتي الجواب', 'Nach Prüfen kommt die Antwort.', 'الأداة لازمة: nach dem Prüfen.', 'Prüfen']
    ],
    'Beim Ausfüllen des Formulars hilft die Sekretärin. Die Höhe des Turms ist bekannt.',
    'Zur Anmeldung brauchen Sie ein Passwort.',
    'Wiederhole morgen die fünf Sätze: Beim Ausfüllen des Formulars hilft die Sekretärin. Die Höhe des Turms ist bekannt. Der Schutz der Daten ist wichtig. Nach dem Prüfen kommt die Antwort. Zur Anmeldung brauchen Sie ein Passwort.',
    'غدًا أعد جمل الأسلوب الاسمي الخمس ولاحظ الإضافة والفعل الثاني بعد الجار المتقدّم.',
    {
      factFamilies: ['wortstellung', 'kasus', 'konjugation', 'kasus'],
      imitateNearMiss: 'Formular',
      transformHint: 'في جملة الختام الصيغة الإدارية الأخيرة: Zur Anmeldung brauchen Sie ein Passwort — حرف الغاية zu مدمجًا مع اسم بـ-ung يختصر جملة غاية كاملة.',
      orderSentence: 'Nach dem Prüfen kommt die Antwort.',
      checkOrderSentence: 'Der Schutz der Daten ist wichtig.',
      orderAr: 'رتّب جملة التسلسل: Nach dem Prüfen أولًا ثم kommt قبل die Antwort.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الجار الاسمي المتقدّم Nach dem Prüfen هو الموضع الأول وحده.', 'الفاعل die Antwort يأتي بعد الفعل عند التقديم: kommt die Antwort.'],
      writing: {
        zeigt: 'Nominalstil in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل بالأسلوب الاسمي: حدث بـbeim + اسم مصدري وإضافة، وربط اسمين بالإضافة، ومفهومًا رسميًا برأس مفرد، وتسلسلًا بـnach dem، وخاتمة غاية بـzur مع اسم بـ-ung.',
        hinweise: ['الاسم المصدري يُكتب بحرف كبير: das Ausfüllen.', 'بعد جار متقدّم يبقى الفعل ثانيًا ويأتي الفاعل بعده.'],
        prompt: 'اكتب جمل الأسلوب الاسمي الخمس المستهدفة من الذاكرة مع الإضافة والأدوات الصحيحة.',
        promptDe: 'Beim Ausfüllen des Formulars hilft die Sekretärin. · Die Höhe des Turms ist bekannt. · Der Schutz der Daten ist wichtig. · Nach dem Prüfen kommt die Antwort. · Zur Anmeldung brauchen Sie ein Passwort.',
        points: ['Beim Ausfüllen des Formulars hilft die Sekretärin.', 'Die Höhe des Turms ist bekannt.', 'Der Schutz der Daten ist wichtig.', 'Nach dem Prüfen kommt die Antwort.', 'Zur Anmeldung brauchen Sie ein Passwort.'],
        minWords: 31,
        frage: 'اكتب جمل الأسلوب الاسمي الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Beim Ausfüllen des Formulars hilft die Sekretärin. Die Höhe des Turms ist bekannt. Der Schutz der Daten ist wichtig. Nach dem Prüfen kommt die Antwort. Zur Anmeldung brauchen Sie ein Passwort.',
      summaryDe: 'Beim Ausfüllen des Formulars hilft die Sekretärin. Die Höhe des Turms ist bekannt. Der Schutz der Daten ist wichtig. Nach dem Prüfen kommt die Antwort. Zur Anmeldung brauchen Sie ein Passwort.',
      summaryAr: 'النص الرسمي يختصر الجمل في أسماء: beim مع اسم مصدري، وإضافة بدل von، وفعلٌ ثانٍ بعد كل جار متقدّم.',
      summaryRecap: 'الاسم يحمل الحدث',
      hwHintDe: 'Die Verwaltung schreibt nominal: statt „wenn ich ausfülle“ heißt es Beim Ausfüllen des Formulars. Das Genitivattribut wie des Turms und der Daten ersetzt im Amtstext die von-Gruppe, und wer einem Verein beitreten will, beginnt mit der Anmeldung.'
    }),

  U('b1-u6-l6', 'B1', 'الاشتقاق: Autorin وBesserung وFreiheit', 'Wortbildung: Autorin, Besserung und Freiheit', 'orthographie',
    'Am Ende bildest du Berufsnamen mit -in und Nomen mit -ung und -heit — in fünf Sätzen',
    'في النهاية تصوغ أسماء المهن بـ-in والأسماء بـ-ung و-heit في خمس جمل.',
    [
      ['Die Autorin liest heute.', 'تصوغ مؤنث المهنة', 'مؤنث المهنة يأخذ -in مع الأداة die: der Autor → die Autorin', 'Die Autor liest heute.', 'المؤنثة بـ-in'],
      ['Die Autorinnen lesen heute.', 'تجمع مؤنث المهنة', 'جمع -in هو -innen ويأخذ فعل جمع: Die Autorinnen lesen', 'Die Autorinnen liest heute.', 'الجمع -innen بفعل جمع'],
      ['Die Besserung kommt langsam.', 'تشتق اسم حدث من فعل', 'لاحقة -ung تصنع من الفعل اسمًا مؤنثًا دائمًا: bessern → die Besserung', 'Der Besserung kommt langsam.', '-ung دائمًا die'],
      ['Die Freiheit ist wichtig.', 'تشتق اسمًا من صفة', 'لاحقة -heit تصنع من الصفة اسمًا مؤنثًا: frei → die Freiheit — والصفة وحدها لا تقوم اسمًا', 'Die Frei ist wichtig.', 'الاسم Freiheit لا Frei']
    ],
    [
      ['Die Autorin liest heute.', 'المؤلفة تقرأ اليوم', 'Die Autor liest heute.', 'مؤنث المهنة بـ-in: Autorin.', 'Autorin'],
      ['Die Autorinnen lesen heute.', 'المؤلفات يقرأن اليوم', 'Die Autorinnen liest heute.', 'الجمع -innen بفعل جمع: lesen.', 'Autorinnen'],
      ['Die Besserung kommt langsam.', 'التحسّن يأتي ببطء', 'Der Besserung kommt langsam.', 'أسماء -ung مؤنثة دائمًا: die.', 'Besserung'],
      ['Die Freiheit ist wichtig.', 'الحرية مهمة', 'Die Frei ist wichtig.', '-heit تصنع الاسم من الصفة.', 'Freiheit']
    ],
    'Die Autorin liest heute. Die Besserung kommt langsam.',
    'Viele Produkte heißen bio- oder öko-.',
    'Wiederhole morgen die fünf Sätze: Die Autorin liest heute. Die Autorinnen lesen heute. Die Besserung kommt langsam. Die Freiheit ist wichtig. Viele Produkte heißen bio- oder öko-.',
    'غدًا أعد جمل الاشتقاق الخمس ولاحظ -in و-innen و-ung و-heit والشرطة.',
    {
      factFamilies: ['orthographie', 'konjugation', 'kasus', 'orthographie'],
      imitateNearMiss: 'Autor',
      transformHint: 'في جملة الختام علامة القوائم الرسمية: Viele Produkte heißen bio- oder öko- — الشرطة جزء من كتابة السابقة حين تُذكر وحدها.',
      orderSentence: 'Die Autorin liest heute.',
      checkOrderSentence: 'Die Besserung kommt langsam.',
      orderAr: 'رتّب جملة المؤلفة: Die Autorin أولًا ثم liest في الموضع الثاني.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل بصيغة -in هو الموضع الأول وحده.', 'الظرف heute يغلق الجملة بعد الفعل.'],
      writing: {
        zeigt: 'Wortbildung in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: مؤنث مهنة بـ-in، وجمعها بـ-innen، واسم حدث بـ-ung، واسمًا من صفة بـ-heit، وخاتمة بسابقتين بشرطة.',
        hinweise: ['أسماء -ung و-heit مؤنثة دائمًا: die.', 'جمع مؤنث المهنة مضاعفة: -innen مع فعل جمع.'],
        prompt: 'اكتب جمل الاشتقاق الخمس المستهدفة من الذاكرة مع اللواحق والشرطات الصحيحة.',
        promptDe: 'Die Autorin liest heute. · Die Autorinnen lesen heute. · Die Besserung kommt langsam. · Die Freiheit ist wichtig. · Viele Produkte heißen bio- oder öko-.',
        points: ['Die Autorin liest heute.', 'Die Autorinnen lesen heute.', 'Die Besserung kommt langsam.', 'Die Freiheit ist wichtig.', 'Viele Produkte heißen bio- oder öko-.'],
        minWords: 22,
        frage: 'اكتب جمل الاشتقاق الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Autorin liest heute. Die Autorinnen lesen heute. Die Besserung kommt langsam. Die Freiheit ist wichtig. Viele Produkte heißen bio- oder öko-.',
      summaryDe: 'Die Autorin liest heute. Die Autorinnen lesen heute. Die Besserung kommt langsam. Die Freiheit ist wichtig. Viele Produkte heißen bio- oder öko-.',
      summaryAr: 'اللواحق تصنع الكلمات: -in للمؤنث و-innen لجمعها، و-ung و-heit لأسماء مؤنثة، والسابقة بشرطة عند ذكرها.',
      summaryRecap: 'اللاحقة تقرر الجنس',
      hwHintDe: 'Die weibliche Form endet auf -in, der Plural auf -innen. Aus bessern wird die Besserung, und ein Präfix wie bio- steht allein mit Bindestrich. Neue Wörter lassen sich so aus bekannten Bausteinen selbst zusammensetzen und sofort verstehen.'
    }),

/* Unit 7 — amendment B1-L3 (DECISIONS-PENDING.md item 27). The B1 pool (entries the
   learner meets in the material and no word list names) grew to 371 after the material
   step, and one unit holds 240 headword slots (6 x 40), so unit 7 carries 240 of them:
   Betrieb · Verkehr · Haus und Handwerk · Gesundheit und Gefühle · Geld, Geräte und
   Post · Kultur und Sprache. The remaining 131 wait in tools/goethe-b1-candidates.txt. */
  U('b1-u7-l1', 'B1', 'في المؤسسة: ausbilden وbesprechen وsich beteiligen', 'Im Betrieb: ausbilden, besprechen und sich beteiligen', 'lexik-kollokation',
    'Am Ende sprichst du über Ausbildung, Besprechung und Vertretung im Betrieb — in fünf Sätzen',
    'في النهاية تتحدث عن التدريب والاجتماع والتمثيل في المؤسسة في خمس جمل.',
    [
      ['Die Firma bildet jedes Jahr zwei Lehrlinge aus.', 'تصف تدريب المؤسسة للمتدرّبين', 'ausbilden فعل منفصل: bildet في الموضع الثاني وقسيمة aus تغلق الجملة في الآخر', 'Die Firma ausbildet jedes Jahr zwei Lehrlinge.', 'المنفصل: bildet … aus'],
      ['Wir besprechen den Plan am Montag.', 'تعلن مناقشة خطة في الاجتماع', 'besprechen يأخذ المفعول مباشرة: besprechen den Plan — بلا über قبله', 'Wir besprechen über den Plan am Montag.', 'besprechen بلا über'],
      ['Alle beteiligen sich an der Planung.', 'تقول إن الجميع يشارك في التخطيط', 'sich beteiligen يثبت مع an والداتيف: sich an der Planung beteiligen', 'Alle beteiligen sich die Planung.', 'an + داتيف: an der'],
      ['Der Betriebsrat vertritt uns.', 'تسمّي من يمثّلكم في المؤسسة', 'vertreten يأخذ من يمثّله مفعولًا مباشرًا: vertritt uns — بلا auf', 'Der Betriebsrat vertritt auf uns.', 'vertreten بلا auf']
    ],
    [
      ['Die Firma bildet jedes Jahr zwei Lehrlinge aus.', 'الشركة تدرّب متدرّبين كل عام', 'Die Firma ausbildet jedes Jahr zwei Lehrlinge.', 'الفعل المنفصل: bildet … aus.', 'bildet'],
      ['Wir besprechen den Plan am Montag.', 'نناقش الخطة يوم الاثنين', 'Wir besprechen über den Plan.', 'besprechen بمفعول مباشر، بلا über.', 'besprechen'],
      ['Alle beteiligen sich an der Planung.', 'يشارك الجميع في التخطيط', 'Alle beteiligen sich die Planung.', 'sich beteiligen an + داتيف: an der.', 'an der'],
      ['Der Betriebsrat vertritt uns.', 'مجلس العمال يمثّلنا', 'Der Betriebsrat vertritt auf uns.', 'vertreten بمفعول مباشر، بلا auf.', 'vertritt']
    ],
    'Die Firma bildet jedes Jahr zwei Lehrlinge aus. Alle beteiligen sich an der Planung.',
    'Ich bin für die Termine verantwortlich.',
    'Wiederhole morgen die fünf Sätze: Die Firma bildet jedes Jahr zwei Lehrlinge aus. Wir besprechen den Plan am Montag. Alle beteiligen sich an der Planung. Der Betriebsrat vertritt uns. Ich bin für die Termine verantwortlich.',
    'غدًا أعد جمل المؤسسة الخمس ولاحظ قسيمة aus وثبات حروف الجر.',
    {
      factFamilies: ['wortstellung', 'präposition', 'präposition', 'präposition'],
      imitateNearMiss: 'ausbildet',
      transformHint: 'في جملة الختام تقول عن نفسك: Ich bin für die Termine verantwortlich — صفة verantwortlich تثبت مع für والمفعول المنصوب.',
      orderSentence: 'Die Firma bildet jedes Jahr zwei Lehrlinge aus.',
      orderRightBracket: ['aus.'],
      checkOrderSentence: 'Wir besprechen den Plan am Montag.',
      orderAr: 'رتّب جملة التدريب: الفعل المصرّف bildet ثانيًا وقسيمة aus. تغلق الجملة في آخرها.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Die Firma هو الموضع الأول وحده.', 'القسيمة aus. لا تلتحم بالفعل؛ تغلق الجملة في الآخر.'],
      writing: {
        zeigt: 'Im Betrieb in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: تدريب بفعل منفصل، ومناقشة خطة بمفعول مباشر، ومشاركة بـan والداتيف، وتمثيل بمفعول مباشر، ومسؤولية بـverantwortlich für.',
        hinweise: ['القسيمة aus تغلق جملة ausbilden في آخرها.', 'sich beteiligen يثبت مع an والداتيف، وverantwortlich مع für والنصب.'],
        prompt: 'اكتب جمل المؤسسة الخمس المستهدفة من الذاكرة مع القسيمة وحروف الجر الصحيحة.',
        promptDe: 'Die Firma bildet jedes Jahr zwei Lehrlinge aus. · Wir besprechen den Plan am Montag. · Alle beteiligen sich an der Planung. · Der Betriebsrat vertritt uns. · Ich bin für die Termine verantwortlich.',
        points: ['Die Firma bildet jedes Jahr zwei Lehrlinge aus.', 'Wir besprechen den Plan am Montag.', 'Alle beteiligen sich an der Planung.', 'Der Betriebsrat vertritt uns.', 'Ich bin für die Termine verantwortlich.'],
        minWords: 30,
        frage: 'اكتب جمل المؤسسة الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Firma bildet jedes Jahr zwei Lehrlinge aus. Wir besprechen den Plan am Montag. Alle beteiligen sich an der Planung. Der Betriebsrat vertritt uns. Ich bin für die Termine verantwortlich.',
      summaryDe: 'Die Firma bildet jedes Jahr zwei Lehrlinge aus. Wir besprechen den Plan am Montag. Alle beteiligen sich an der Planung. Der Betriebsrat vertritt uns. Ich bin für die Termine verantwortlich.',
      summaryAr: 'أفعال المؤسسة تُحفظ مع بنائها: ausbilden بقسيمة منفصلة في الآخر، وbesprechen وvertreten بمفعول مباشر، وsich beteiligen an مع الداتيف، وverantwortlich für مع النصب.',
      summaryRecap: 'حرف الجر جزء من الفعل',
      hwHintDe: 'Trennbare Verben schieben ihre Vorsilbe ans Satzende: Die Firma bildet jedes Jahr zwei Lehrlinge aus. Verben wie besprechen und vertreten nehmen ihr Objekt direkt, sich beteiligen steht fest mit an und Dativ, und nach verantwortlich folgt für mit Akkusativ.'
    }),

  U('b1-u7-l2', 'B1', 'في الطريق: an die Küste وam Ufer', 'Unterwegs: an die Küste und am Ufer', 'präposition',
    'Am Ende beschreibst du Wege und Orte unterwegs mit an, auf und dem Dativ — in fünf Sätzen',
    'في النهاية تصف طرقًا وأماكن في الطريق بـan وauf والداتيف في خمس جمل.',
    [
      ['Wir fahren an die Küste.', 'تحدّد جهة سفر إلى الساحل', 'الجهة تسأل Wohin فتأخذ an مع النصب: an die Küste', 'Wir fahren an der Küste.', 'الجهة: an die'],
      ['Das Boot liegt am Ufer.', 'تحدّد موضع قارب عند الشاطئ', 'الموضع يسأل Wo فيأخذ an مع الداتيف مدمجة: am Ufer', 'Das Boot liegt an das Ufer.', 'الموضع: am'],
      ['Die Zuschauer warten auf den Anfang.', 'تقول إن المشاهدين ينتظرون البداية', 'warten يثبت مع auf والمفعول: warten auf den Anfang', 'Die Zuschauer warten den Anfang.', 'warten auf'],
      ['Ich winke dem Fahrer.', 'تلوّح لسائق', 'winken يأخذ الشخص بالداتيف بلا حرف جر: winke dem Fahrer', 'Ich winke auf den Fahrer.', 'winken + داتيف']
    ],
    [
      ['Wir fahren an die Küste.', 'نسافر إلى الساحل', 'Wir fahren an der Küste.', 'الجهة Wohin مع النصب: an die.', 'die'],
      ['Das Boot liegt am Ufer.', 'القارب راسٍ عند الشاطئ', 'Das Boot liegt an das Ufer.', 'الموضع Wo مع الداتيف: am.', 'am'],
      ['Die Zuschauer warten auf den Anfang.', 'المشاهدون ينتظرون البداية', 'Die Zuschauer warten den Anfang.', 'warten auf ثابتة مع الفعل.', 'auf'],
      ['Ich winke dem Fahrer.', 'ألوّح للسائق', 'Ich winke auf den Fahrer.', 'winken + داتيف بلا حرف.', 'dem']
    ],
    'Wir fahren an die Küste. Das Boot liegt am Ufer.',
    'Der Zug steht am Perron zwei.',
    'Wiederhole morgen die fünf Sätze: Wir fahren an die Küste. Das Boot liegt am Ufer. Die Zuschauer warten auf den Anfang. Ich winke dem Fahrer. Der Zug steht am Perron zwei.',
    'غدًا أعد جمل الطريق الخمس واسأل في كل واحدة: Wohin أم Wo؟',
    {
      factFamilies: ['kasus', 'kasus', 'präposition', 'kasus'],
      imitateNearMiss: 'der',
      transformHint: 'في جملة الختام لفظ سويسري للرصيف: Der Zug steht am Perron zwei — القطار ثابت فالداتيف مع an مدمجة am.',
      orderSentence: 'Wir fahren an die Küste.',
      checkOrderSentence: 'Die Zuschauer warten auf den Anfang.',
      orderAr: 'رتّب جملة الجهة إلى الساحل: الفعل fahren في الموضع الثاني وan die Küste. بعده.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Wir هو الموضع الأول وحده.', 'عبارة الجهة an die Küste. تغلق الجملة بعد الفعل.'],
      writing: {
        zeigt: 'Unterwegs in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: جهة بـan والنصب، وموضع بـan والداتيف، وانتظار بـwarten auf، وتلويح بداتيف الشخص، وقطار ثابت عند الرصيف السويسري.',
        hinweise: ['Wohin يعني النصب: an die.', 'Wo يعني الداتيف: am — وwarten يثبت مع auf.'],
        prompt: 'اكتب جمل الطريق الخمس المستهدفة من الذاكرة مع الحالة الصحيحة بعد an.',
        promptDe: 'Wir fahren an die Küste. · Das Boot liegt am Ufer. · Die Zuschauer warten auf den Anfang. · Ich winke dem Fahrer. · Der Zug steht am Perron zwei.',
        points: ['Wir fahren an die Küste.', 'Das Boot liegt am Ufer.', 'Die Zuschauer warten auf den Anfang.', 'Ich winke dem Fahrer.', 'Der Zug steht am Perron zwei.'],
        minWords: 26,
        frage: 'اكتب جمل الطريق الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Wir fahren an die Küste. Das Boot liegt am Ufer. Die Zuschauer warten auf den Anfang. Ich winke dem Fahrer. Der Zug steht am Perron zwei.',
      summaryDe: 'Wir fahren an die Küste. Das Boot liegt am Ufer. Die Zuschauer warten auf den Anfang. Ich winke dem Fahrer. Der Zug steht am Perron zwei.',
      summaryAr: 'في الطريق تفرّق الحالة: الجهة Wohin مع an والنصب، والموضع Wo مع an والداتيف (am)، وبعض الأفعال تثبت بحرفها أو بالداتيف.',
      summaryRecap: 'جهة نصب وموضع داتيف',
      hwHintDe: 'Richtung fragt Wohin und nimmt den Akkusativ: Wir fahren an die Küste. Ein Ort fragt Wo und nimmt den Dativ: Das Boot liegt am Ufer. Feste Verbindungen wie warten auf lernst du immer zusammen mit ihrem Verb, und der Person winkt man ohne Präposition im Dativ.'
    }),

  U('b1-u7-l3', 'B1', 'البيت والحرفة: gesperrt وim Keller', 'Haus und Handwerk: gesperrt und im Keller', 'kasus',
    'Am Ende beschreibst du Arbeiten und Orte im Haus mit Passiv und Dativ — in fünf Sätzen',
    'في النهاية تصف أعمالًا وأماكن في البيت بالمبني للمجهول والداتيف في خمس جمل.',
    [
      ['Der Rasen muss geschnitten werden.', 'تذكر عملًا لا بدّ منه بلا فاعل', 'المجهول مع المساعد: muss في الموضع الثاني وقوس geschnitten werden في الآخر — اسم مفعول لا مصدر', 'Der Rasen muss schneiden werden.', 'اسم المفعول geschnitten'],
      ['Die Einfahrt ist gesperrt.', 'تصف حالة مدخل مغلق', 'مجهول الحالة Zustandspassiv: sein المصرف مع اسم المفعول gesperrt يصف النتيجة', 'Die Einfahrt ist sperren.', 'gesperrt لا sperren'],
      ['Die Steckdose ist hinter dem Regal.', 'تحدّد موضع المقبس خلف الرف', 'hinter للموضع الثابت تسأل Wo فتأخذ الداتيف: hinter dem Regal', 'Die Steckdose ist hinter das Regal.', 'hinter + داتيف: dem'],
      ['Der Weg führt in ein kleines Tal.', 'تحدّد جهة طريق إلى وادٍ', 'الجهة تسأل Wohin فتأخذ in مع النصب: in ein kleines Tal', 'Der Weg führt in einem kleinen Tal hinein.', 'الجهة: in ein']
    ],
    [
      ['Der Rasen muss geschnitten werden.', 'العشب لا بدّ أن يُقَصّ', 'Der Rasen muss schneiden werden.', 'بعد المساعد اسم مفعول لا مصدر: geschnitten.', 'geschnitten'],
      ['Die Einfahrt ist gesperrt.', 'المدخل مغلق', 'Die Einfahrt ist sperren.', 'حالة ثابتة باسم المفعول: gesperrt.', 'gesperrt'],
      ['Die Steckdose ist hinter dem Regal.', 'المقبس خلف الرف', 'Die Steckdose ist hinter das Regal.', 'الموضع مع hinter بالداتيف: dem.', 'dem'],
      ['Der Weg führt in ein kleines Tal.', 'الطريق يقود إلى وادٍ صغير', 'Der Weg führt in einem kleinen Tal hinein.', 'الجهة مع in بالنصب: ein kleines Tal.', 'ein kleines Tal']
    ],
    'Der Rasen muss geschnitten werden. Die Steckdose ist hinter dem Regal.',
    'Der Kasten steht im Keller.',
    'Wiederhole morgen die fünf Sätze: Der Rasen muss geschnitten werden. Die Einfahrt ist gesperrt. Die Steckdose ist hinter dem Regal. Der Weg führt in ein kleines Tal. Der Kasten steht im Keller.',
    'غدًا أعد جمل البيت الخمس واسأل في كل واحدة: حالة أم حدث، وWo أم Wohin؟',
    {
      factFamilies: ['konjugation', 'konjugation', 'kasus', 'kasus'],
      imitateNearMiss: 'schneiden',
      transformHint: 'في جملة الختام مكان ثابت في القبو: Der Kasten steht im Keller — الثبات مع in بالداتيف مدمجة im.',
      orderSentence: 'Die Steckdose ist hinter dem Regal.',
      checkOrderSentence: 'Der Weg führt in ein kleines Tal.',
      orderAr: 'رتّب جملة المقبس: الفعل المصرف ist في الموضع الثاني وhinter dem Regal. بعده.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Die Steckdose هو الموضع الأول وحده.', 'عبارة الموضع hinter dem Regal. تغلق الجملة بعد الفعل.'],
      writing: {
        zeigt: 'Haus und Handwerk in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: عمل بمجهول المساعد، وحالة بمجهول الحالة، وموضع خلف شيء بالداتيف، وجهة بـin والنصب، ومكان ثابت في القبو.',
        hinweise: ['بعد muss/ist اسم مفعول لا مصدر.', 'Wo يعني الداتيف، وWohin يعني النصب.'],
        prompt: 'اكتب جمل البيت الخمس المستهدفة من الذاكرة مع اسم المفعول والحالة الصحيحة.',
        promptDe: 'Der Rasen muss geschnitten werden. · Die Einfahrt ist gesperrt. · Die Steckdose ist hinter dem Regal. · Der Weg führt in ein kleines Tal. · Der Kasten steht im Keller.',
        points: ['Der Rasen muss geschnitten werden.', 'Die Einfahrt ist gesperrt.', 'Die Steckdose ist hinter dem Regal.', 'Der Weg führt in ein kleines Tal.', 'Der Kasten steht im Keller.'],
        minWords: 27,
        frage: 'اكتب جمل البيت والحرفة الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Der Rasen muss geschnitten werden. Die Einfahrt ist gesperrt. Die Steckdose ist hinter dem Regal. Der Weg führt in ein kleines Tal. Der Kasten steht im Keller.',
      summaryDe: 'Der Rasen muss geschnitten werden. Die Einfahrt ist gesperrt. Die Steckdose ist hinter dem Regal. Der Weg führt in ein kleines Tal. Der Kasten steht im Keller.',
      summaryAr: 'في البيت يقف المبني للمجهول بالأعمال: مساعدٌ مع اسم مفعول، وحالةٌ ثابتة، ثم مواضع بالداتيف وجهة بالنصب.',
      summaryRecap: 'اسم مفعول وموضع داتيف',
      hwHintDe: 'Das Zustandspassiv zeigt das Ergebnis: Die Einfahrt ist gesperrt. Muss etwas getan werden, steht das Partizip II vor werden: Der Rasen muss geschnitten werden. Orte im Haus fragst du mit Wo und nimmst den Dativ: hinter dem Regal und im Keller.'
    }),

  U('b1-u7-l4', 'B1', 'الصحة والمشاعر: erkältet وHeimweh', 'Gesundheit und Gefühle: erkältet und Heimweh', 'konjugation',
    'Am Ende sprichst du über Krankheiten, Pflege und Gefühle — in fünf Sätzen',
    'في النهاية تتحدث عن الأمراض والرعاية والمشاعر في خمس جمل.',
    [
      ['Ich habe mich erkältet.', 'تقول إنك أصبت بالبرد', 'sich erkälten في الماضي المركّب: habe مع الضمير الانعكاسي mich واسم المفعول erkältet في الآخر', 'Ich habe mich erkälten.', 'اسم المفعول erkältet'],
      ['Die Pflegerin misst die Temperatur.', 'تصف قياس الممرضة للحرارة', 'messen يأخذ مقاسه مفعولًا مباشرًا: misst die Temperatur — بلا حرف قبله', 'Die Pflegerin misst auf die Temperatur.', 'messen بلا حرف'],
      ['Das Schmerzmittel hilft schnell.', 'تقول إن المسكّن ينفع بسرعة', 'اسم مركّب محايد مفرد يأخذ فعلًا مفردًا: Das Schmerzmittel hilft', 'Das Schmerzmittel helfen schnell.', 'المفرد: hilft'],
      ['Ich hatte Heimweh nach der Stadt.', 'تعبّر عن حنينك إلى المدينة', 'Heimweh يثبت مع nach: hatte Heimweh nach der Stadt', 'Ich hatte Heimweh zu der Stadt.', 'Heimweh nach']
    ],
    [
      ['Ich habe mich erkältet.', 'أصابني البرد', 'Ich habe mich erkälten.', 'الماضي المركّب باسم المفعول: erkältet.', 'erkältet'],
      ['Die Pflegerin misst die Temperatur.', 'الممرضة تقيس الحرارة', 'Die Pflegerin misst auf die Temperatur.', 'messen بمفعول مباشر، بلا auf.', 'misst'],
      ['Das Schmerzmittel hilft schnell.', 'المسكّن ينفع بسرعة', 'Das Schmerzmittel helfen schnell.', 'فاعل مفرد محايد: hilft.', 'hilft'],
      ['Ich hatte Heimweh nach der Stadt.', 'كان عندي حنين إلى المدينة', 'Ich hatte Heimweh zu der Stadt.', 'الحنين مع nach لا zu.', 'nach']
    ],
    'Ich habe mich erkältet. Das Schmerzmittel hilft schnell.',
    'Ihre Laune ist heute gut.',
    'Wiederhole morgen die fünf Sätze: Ich habe mich erkältet. Die Pflegerin misst die Temperatur. Das Schmerzmittel hilft schnell. Ich hatte Heimweh nach der Stadt. Ihre Laune ist heute gut.',
    'غدًا أعد جمل الصحة والمشاعر الخمس ولاحظ اسم المفعول والمفرد وnach.',
    {
      factFamilies: ['konjugation', 'präposition', 'konjugation', 'präposition'],
      imitateNearMiss: 'erkälten',
      transformHint: 'في جملة الختام مزاج اليوم: Ihre Laune ist heute gut — اسم مؤنث مفرد مع ist وصفة خبرية بلا نهاية.',
      orderSentence: 'Die Pflegerin misst die Temperatur.',
      checkOrderSentence: 'Das Schmerzmittel hilft schnell.',
      orderAr: 'رتّب جملة الممرضة: الفعل المصرف misst في الموضع الثاني والمفعول بعده.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Die Pflegerin هو الموضع الأول وحده.', 'المفعول die Temperatur. يغلق الجملة بعد الفعل.'],
      writing: {
        zeigt: 'Gesundheit und Gefühle in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: إصابة بالبرد في الماضي المركّب، وقياس حرارة بمفعول مباشر، ومسكّن بفعل مفرد، وحنين مع nach، ومزاج بـist وصفة بلا نهاية.',
        hinweise: ['الماضي المركّب يغلق باسم المفعول erkältet.', 'الأسماء المؤنثة والمحايدة المفردة تأخذ فعلًا مفردًا.'],
        prompt: 'اكتب جمل الصحة والمشاعر الخمس المستهدفة من الذاكرة.',
        promptDe: 'Ich habe mich erkältet. · Die Pflegerin misst die Temperatur. · Das Schmerzmittel hilft schnell. · Ich hatte Heimweh nach der Stadt. · Ihre Laune ist heute gut.',
        points: ['Ich habe mich erkältet.', 'Die Pflegerin misst die Temperatur.', 'Das Schmerzmittel hilft schnell.', 'Ich hatte Heimweh nach der Stadt.', 'Ihre Laune ist heute gut.'],
        minWords: 24,
        frage: 'اكتب جمل الصحة والمشاعر الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Ich habe mich erkältet. Die Pflegerin misst die Temperatur. Das Schmerzmittel hilft schnell. Ich hatte Heimweh nach der Stadt. Ihre Laune ist heute gut.',
      summaryDe: 'Ich habe mich erkältet. Die Pflegerin misst die Temperatur. Das Schmerzmittel hilft schnell. Ich hatte Heimweh nach der Stadt. Ihre Laune ist heute gut.',
      summaryAr: 'الصحة والمشاعر تحتاج ماضيًا مركّبًا باسم مفعول، ومفعولًا مباشرًا بعد messen، وفعلًا مفردًا للأسماء المفردة، وnach مع الحنين.',
      summaryRecap: 'اسم مفعول ومفرد وحنين',
      hwHintDe: 'Sich erkälten steht im Perfekt mit haben und Partizip: Ich habe mich erkältet. Die Pflegerin misst die Temperatur direkt, und Heimweh steht immer mit nach. Sage ehrlich, wie du dich fühlst, wenn dich jemand fragt.'
    }),

  U('b1-u7-l5', 'B1', 'المال والتقنية: EC-Karte وNetzwerk', 'Geld und Technik: EC-Karte und Netzwerk', 'konjugation',
    'Am Ende sprichst du über Karten, Konten und Gerätefehler — in fünf Sätzen',
    'في النهاية تتحدث عن البطاقات والحسابات وأعطال الأجهزة في خمس جمل.',
    [
      ['Meine EC-Karte ist gesperrt.', 'تقول إن بطاقتك موقوفة', 'die EC-Karte اسم مؤنث مفرد فيأخذ فعلًا مفردًا: ist لا sind', 'Meine EC-Karte sind gesperrt.', 'المفرد: ist'],
      ['Am Bancomat hole ich Geld ab.', 'تقول إنك تسحب المال من الصراف', 'abholen فعل منفصل: الفعل المصرف hole في الثاني وقسيمته ab في الآخر', 'Am Bancomat abhole ich Geld.', 'hole … ab منفصلة'],
      ['Das Netzwerk ist heute langsam.', 'تصف شبكة بطيئة اليوم', 'das Netzwerk اسم محايد مفرد فيأخذ ist — لا يُجمع كما في العربية', 'Das Netzwerk sind heute langsam.', 'المفرد: ist'],
      ['Vor dem Herunterfahren speichere ich alles.', 'تقول إنك تحفظ كل شيء قبل الإطفاء', 'المصدر اسمًا يُكتب كبيرًا: dem Herunterfahren، وبعد عبارة الجار يأتي الفعل ثانيًا: speichere ich', 'Vor dem Herunterfahren ich speichere alles.', 'قلب بعد الجار: speichere ich']
    ],
    [
      ['Meine EC-Karte ist gesperrt.', 'بطاقتي موقوفة', 'Meine EC-Karte sind gesperrt.', 'الفعل مفرد: ist.', 'ist'],
      ['Am Bancomat hole ich Geld ab.', 'أسحب المال من الصراف الآلي', 'Am Bancomat abhole ich Geld.', 'abholen منفصل: hole … ab.', 'ab'],
      ['Das Netzwerk ist heute langsam.', 'الشبكة بطيئة اليوم', 'Das Netzwerk sind heute langsam.', 'الفعل مفرد: ist.', 'ist'],
      ['Vor dem Herunterfahren speichere ich alles.', 'أحفظ كل شيء قبل الإطفاء', 'Vor dem Herunterfahren ich speichere alles.', 'بعد الجار الفعل ثانيًا: speichere ich.', 'speichere']
    ],
    'Meine EC-Karte ist gesperrt. Das Netzwerk ist heute langsam.',
    'Die Festplatte ist fast voll.',
    'Wiederhole morgen die fünf Sätze: Meine EC-Karte ist gesperrt. Am Bancomat hole ich Geld ab. Das Netzwerk ist heute langsam. Vor dem Herunterfahren speichere ich alles. Die Festplatte ist fast voll.',
    'غدًا أعد جمل المال والتقنية الخمس ولاحظ المفرد والفصل والمصدر الاسمي.',
    {
      factFamilies: ['konjugation', 'wortstellung', 'konjugation', 'wortstellung'],
      imitateNearMiss: 'sind',
      transformHint: 'في جملة الختام قرص ممتلئ تقريبًا: Die Festplatte ist fast voll — اسم مؤنث مفرد مع ist وصفة خبرية بلا نهاية.',
      orderSentence: 'Vor dem Herunterfahren speichere ich alles.',
      checkOrderSentence: 'Das Netzwerk ist heute langsam.',
      orderAr: 'رتّب جملة الإطفاء: عبارة الجار أولًا والفعل speichere في الموضع الثاني.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['عبارة الجار Vor dem Herunterfahren هي الموضع الأول وحده.', 'الضمير ich وalles. يغلقان الجملة بعد الفعل.'],
      writing: {
        zeigt: 'Geld und Technik in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: بطاقة موقوفة بـist، وسحب مال بـhole … ab، وشبكة بطيئة بمحايد مفرد، وحفظ قبل الإطفاء بمصدرٍ اسمًا وقلب، وقرص ممتلئ بـist.',
        hinweise: ['الأسماء المفردة تأخذ فعلًا مفردًا: ist.', 'abholen منفصل والمصدر الاسمي يُكتب كبيرًا.'],
        prompt: 'اكتب جمل المال والتقنية الخمس المستهدفة من الذاكرة.',
        promptDe: 'Meine EC-Karte ist gesperrt. · Am Bancomat hole ich Geld ab. · Das Netzwerk ist heute langsam. · Vor dem Herunterfahren speichere ich alles. · Die Festplatte ist fast voll.',
        points: ['Meine EC-Karte ist gesperrt.', 'Am Bancomat hole ich Geld ab.', 'Das Netzwerk ist heute langsam.', 'Vor dem Herunterfahren speichere ich alles.', 'Die Festplatte ist fast voll.'],
        minWords: 26,
        frage: 'اكتب جمل المال والتقنية الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Meine EC-Karte ist gesperrt. Am Bancomat hole ich Geld ab. Das Netzwerk ist heute langsam. Vor dem Herunterfahren speichere ich alles. Die Festplatte ist fast voll.',
      summaryDe: 'Meine EC-Karte ist gesperrt. Am Bancomat hole ich Geld ab. Das Netzwerk ist heute langsam. Vor dem Herunterfahren speichere ich alles. Die Festplatte ist fast voll.',
      summaryAr: 'المال والتقنية يحتاجان فعلًا مفردًا للأسماء المفردة، وفعلًا منفصلًا عند الصراف، ومصدرًا اسمًا كبيرًا قبل الإطفاء.',
      summaryRecap: 'مفرد وفصلٌ ومصدرٌ اسمي',
      hwHintDe: 'Substantivierung macht den Infinitiv zum Nomen: das Herunterfahren. Vor dem Herunterfahren speichere ich alles, und am Bancomat hole ich Geld ab.'
    }),

  U('b1-u7-l6', 'B1', 'الثقافة واللغة: Orchester وTermine', 'Kultur und Sprache: Orchester und Termine', 'wortstellung',
    'Am Ende sprichst du über ein Fest, ein Orchester und deinen Sprachkurs — in fünf Sätzen',
    'في النهاية تتحدث عن حفل وأوركسترا ودورة لغتك في خمس جمل.',
    [
      ['Das Orchester spielt im Hof.', 'تصف عزف الأوركسترا في الساحة', 'das Orchester اسم محايد مفرد — الفرقة واحدة ففعلها مفرد: spielt لا spielen', 'Das Orchester spielen im Hof.', 'المفرد: spielt'],
      ['Wir legen die Termine fest.', 'تقول إنكم تحدّدون المواعيد', 'festlegen فعل منفصل: legen في الموضع الثاني وقسيمته fest في الآخر', 'Wir festlegen die Termine.', 'legen … fest منفصلة'],
      ['Sie erfüllt jede Bedingung.', 'تقول إنها تستوفي كل شرط', 'erfüllen يأخذ مفعولًا مباشرًا منصوبًا بلا حرف: jede Bedingung', 'Sie erfüllt jeder Bedingung.', 'نصب مباشر: jede'],
      ['Die Künstlerin stellt im Herbst aus.', 'تقول إن الفنانة تعرض في الخريف', 'ausstellen فعل منفصل: stellt في الثاني وaus في الآخر', 'Die Künstlerin ausstellt im Herbst.', 'stellt … aus منفصلة']
    ],
    [
      ['Das Orchester spielt im Hof.', 'الأوركسترا تعزف في الساحة', 'Das Orchester spielen im Hof.', 'الفعل مفرد: spielt.', 'spielt'],
      ['Wir legen die Termine fest.', 'نحدّد المواعيد', 'Wir festlegen die Termine.', 'fest في الآخر.', 'fest'],
      ['Sie erfüllt jede Bedingung.', 'تستوفي كل شرط', 'Sie erfüllt jeder Bedingung.', 'مفعول مباشر: jede.', 'erfüllt'],
      ['Die Künstlerin stellt im Herbst aus.', 'الفنانة تعرض في الخريف', 'Die Künstlerin ausstellt im Herbst.', 'ausstellen منفصل: stellt … aus.', 'aus']
    ],
    'Das Orchester spielt im Hof. Die Künstlerin stellt im Herbst aus.',
    'Die Kursleiterin kommt aus Wien.',
    'Wiederhole morgen die fünf Sätze: Das Orchester spielt im Hof. Wir legen die Termine fest. Sie erfüllt jede Bedingung. Die Künstlerin stellt im Herbst aus. Die Kursleiterin kommt aus Wien.',
    'غدًا أعد جمل الثقافة واللغة الخمس ولاحظ المفرد والفعلَين المنفصلَين والمفعول المباشر.',
    {
      factFamilies: ['konjugation', 'wortstellung', 'kasus', 'wortstellung'],
      imitateNearMiss: 'spielen',
      transformHint: 'في جملة الختام منشّطة من فيينا: Die Kursleiterin kommt aus Wien — اسم مهنة مؤنث مفرد مع kommt وأصل بـaus.',
      orderSentence: 'Wir legen die Termine fest.',
      checkOrderSentence: 'Das Orchester spielt im Hof.',
      orderRightBracket: ['fest.'],
      orderAr: 'رتّب جملة المواعيد: الفعل legen ثانيًا وقسيمته fest. أخيرًا.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Wir هو الموضع الأول وحده.', 'قسيمة fest. تغلق القوس في آخر الجملة.'],
      writing: {
        zeigt: 'Kultur und Sprache in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: أوركسترا مفردة بـspielt، وتحديد مواعيد بـlegen … fest، واستيفاء شرط بمفعول مباشر، ومعرض بـstellt … aus، ومنشّطة دورة من فيينا بـkommt.',
        hinweise: ['الأسماء المفردة تأخذ فعلًا مفردًا.', 'الفعل المنفصل: الفعل ثانيًا والقسيمة أخيرًا.'],
        prompt: 'اكتب جمل الثقافة واللغة الخمس المستهدفة من الذاكرة.',
        promptDe: 'Das Orchester spielt im Hof. · Wir legen die Termine fest. · Sie erfüllt jede Bedingung. · Die Künstlerin stellt im Herbst aus. · Die Kursleiterin kommt aus Wien.',
        points: ['Das Orchester spielt im Hof.', 'Wir legen die Termine fest.', 'Sie erfüllt jede Bedingung.', 'Die Künstlerin stellt im Herbst aus.', 'Die Kursleiterin kommt aus Wien.'],
        minWords: 25,
        frage: 'اكتب جمل الثقافة واللغة الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Das Orchester spielt im Hof. Wir legen die Termine fest. Sie erfüllt jede Bedingung. Die Künstlerin stellt im Herbst aus. Die Kursleiterin kommt aus Wien.',
      summaryDe: 'Das Orchester spielt im Hof. Wir legen die Termine fest. Sie erfüllt jede Bedingung. Die Künstlerin stellt im Herbst aus. Die Kursleiterin kommt aus Wien.',
      summaryAr: 'الثقافة واللغة تحتاجان فعلًا مفردًا للأسماء المفردة، وفعلَين منفصلَين بقسيمة ختامية، ومفعولًا مباشرًا بلا حرف.',
      summaryRecap: 'مفرد وفصلان ومفعول',
      hwHintDe: 'Trennbare Verben schließen den Satz: Wir legen die Termine fest. Die Künstlerin stellt im Herbst aus. Erfüllen nimmt ein direktes Objekt: Sie erfüllt jede Bedingung. Übe auch die anderen Sätze laut: Das Orchester spielt im Hof, die Schauspielerin steht auf der Bühne, und in der Galerie hängt ein Bild. Eine Frau spielt Flöte, und die Sportlerin war besonders schnell. So bleiben die neuen Wörter lebendig, weil du sie in ganzen Sätzen hörst, sprichst und mehrmals wiederholst. Schreibe morgen noch drei eigene Sätze über ein Fest in deiner Stadt und über deinen Sprachkurs.'
    }),

  U('b1-u8-l1', 'B1', 'البيت والانتقال: Couch وEtage', 'Haus und Umzug: Couch und Etage', 'konjugation',
    'Am Ende beschreibst du eine Wohnung, ihr Quartier und einen Umzug — in fünf Sätzen',
    'في النهاية تصف شقة وحيّها وانتقالًا في خمس جمل.',
    [
      ['Die Couch steht im Wohnzimmer.', 'تصف مكان الأريكة', 'die Couch اسم مؤنث مفرد فيأخذ فعلًا مفردًا: steht لا stehen', 'Die Couch stehen im Wohnzimmer.', 'المفرد: steht'],
      ['Die Wohnung liegt in der dritten Etage.', 'تقول في أي طابق تقع الشقة', 'الطابق موضع ثابت يسأل Wo فيأخذ in مع الداتيف: in der dritten Etage', 'Die Wohnung liegt in die dritte Etage.', 'داتيف الموضع: in der'],
      ['Der Abwart hilft beim Umzug.', 'تقول إن قائم البناية يساعد عند الانتقال', 'der Abwart هو الاسم السويسري لـHausmeister، واسم مفرد بفعل مفرد: hilft', 'Der Abwart helfen beim Umzug.', 'المفرد: hilft'],
      ['Die Wohnung ist möbliert.', 'تقول إن الشقة مفروشة', 'الصفة الخبرية بعد ist بلا نهاية: möbliert', 'Die Wohnung ist möblierte.', 'بلا نهاية: möbliert']
    ],
    [
      ['Die Couch steht im Wohnzimmer.', 'الأريكة في غرفة الجلوس', 'Die Couch stehen im Wohnzimmer.', 'الفعل مفرد: steht.', 'steht'],
      ['Die Wohnung liegt in der dritten Etage.', 'الشقة في الطابق الثالث', 'Die Wohnung liegt in die dritte Etage.', 'موضع ثابت بالداتيف: in der.', 'liegt'],
      ['Der Abwart hilft beim Umzug.', 'القائم على البناية يساعد عند الانتقال', 'Der Abwart helfen beim Umzug.', 'الفعل مفرد: hilft.', 'hilft'],
      ['Die Wohnung ist möbliert.', 'الشقة مفروشة', 'Die Wohnung ist möblierte.', 'الصفة خبرًا بلا نهاية: möbliert.', 'möbliert']
    ],
    'Die Couch steht im Wohnzimmer. Die Wohnung liegt in der dritten Etage.',
    'Das Ehepaar wohnt über uns.',
    'Wiederhole morgen die fünf Sätze: Die Couch steht im Wohnzimmer. Die Wohnung liegt in der dritten Etage. Der Abwart hilft beim Umzug. Die Wohnung ist möbliert. Das Ehepaar wohnt über uns.',
    'غدًا أعد جمل البيت والانتقال الخمس ولاحظ المفرد وداتيف الموضع.',
    {
      factFamilies: ['konjugation', 'kasus', 'konjugation', 'deklination'],
      imitateNearMiss: 'stehen',
      transformHint: 'في جملة الختام زوجان يسكنان فوقكم: Das Ehepaar wohnt über uns — اسم جامع مفرد اللفظ مع wohnt.',
      orderSentence: 'Die Couch steht im Wohnzimmer.',
      checkOrderSentence: 'Die Wohnung liegt in der dritten Etage.',
      orderAr: 'رتّب جملة الأريكة: الفعل المصرف steht في الموضع الثاني وعبارة المكان بعده.',
      orderPromptAr: 'رتّب الجملة واضعًا العبارة الأولى أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Die Couch هو الموضع الأول وحده.', 'عبارة المكان im Wohnzimmer. تغلق الجملة بعد الفعل.'],
      writing: {
        zeigt: 'Haus und Umzug in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: أريكة بـsteht في غرفة الجلوس، وشقة في الطابق الثالث بـin der، وقائم بناية سويسري بـhilft عند الانتقال، وشقة مفروشة بصفة بلا نهاية، وزوجان فوقكم بـwohnt.',
        hinweise: ['الأسماء المفردة — ولو جامعة المعنى — تأخذ فعلًا مفردًا.', 'الموضع الثابت (Wo؟) يطلب الداتيف.'],
        prompt: 'اكتب جمل البيت والانتقال الخمس المستهدفة من الذاكرة.',
        promptDe: 'Die Couch steht im Wohnzimmer. · Die Wohnung liegt in der dritten Etage. · Der Abwart hilft beim Umzug. · Die Wohnung ist möbliert. · Das Ehepaar wohnt über uns.',
        points: ['Die Couch steht im Wohnzimmer.', 'Die Wohnung liegt in der dritten Etage.', 'Der Abwart hilft beim Umzug.', 'Die Wohnung ist möbliert.', 'Das Ehepaar wohnt über uns.'],
        minWords: 26,
        frage: 'اكتب جمل البيت والانتقال الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Couch steht im Wohnzimmer. Die Wohnung liegt in der dritten Etage. Der Abwart hilft beim Umzug. Die Wohnung ist möbliert. Das Ehepaar wohnt über uns.',
      summaryDe: 'Die Couch steht im Wohnzimmer. Die Wohnung liegt in der dritten Etage. Der Abwart hilft beim Umzug. Die Wohnung ist möbliert. Das Ehepaar wohnt über uns.',
      summaryAr: 'البيت يحتاج أثاثًا مفرد اللفظ بفعل مفرد، وموضعًا ثابتًا بالداتيف في الطابق، وصفة خبرية بلا نهاية.',
      summaryRecap: 'أثاث مفرد وموضع داتيف',
      hwHintDe: 'Namen für Zimmer und Möbel sind hier Singular: Die Couch steht im Wohnzimmer, der Spiegel hängt im Bad, und das Ehepaar wohnt über uns. Sage den Ort mit Wo und Dativ: Die Wohnung liegt in der dritten Etage. Beim Umzug hilft der Abwart, und die Mülltonne steht hinter dem Haus. Schreibe morgen fünf Sätze über deine Wohnung und dein Quartier.'
    }),

  U('b1-u8-l2', 'B1', 'المطبخ والسوق', 'Küche und Markt', 'lexik-kollokation',
    'Am Ende kaufst du auf dem Markt ein und kochst ein Menü',
    'في النهاية تتسوّق في السوق وتطبخ وجبة.',
    [
      ['In Österreich heißt die Tomate Paradeiser.', 'الكلمة النمساوية معروفة', 'Paradeiser = Tomate', 'In Österreich heißt die Tomate Paradeiser auf.', 'Paradeiser'],
      ['Der Rahm ist süß.', 'غير المعدود مفرد', 'der Rahm: Singular + ist', 'Der Rahm sind süß.', 'ist'],
      ['Das Menü besteht aus drei Teilen.', 'المفرد بفعل مفرد', 'das Menü: Singular + besteht', 'Das Menü bestehen aus drei Teilen.', 'besteht'],
      ['Ich streiche Margarine aufs Brot.', 'على الخبز aufs', 'auf + das = aufs', 'Ich streiche Margarine in das Brot.', 'aufs']
    ],
    [
      ['Der Erdapfel aus dem Garten schmeckt besser.', 'البطاطس النمساوية', 'Der Erdapfel aus dem Garten schmecken besser.', 'الفعل مفرد.', 'schmeckt'],
      ['Im Kaffeehaus sitzen wir lange.', 'في المقهى نجلس طويلًا', 'Im Kaffeehaus wir sitzen lange.', 'الفعل ثانٍ.', 'sitzen'],
      ['Der Knödel sättigt mehr als Brot.', 'كرة العجين تشبع', 'Der Knödel sättigen mehr als Brot.', 'الفعل مفرد.', 'sättigt'],
      ['Die Marille ist jetzt reif.', 'المشمش الآن ناضج', 'Die Marille sind jetzt reif.', 'الفعل مفرد.', 'ist']
    ],
    'Der Erdapfel aus dem Garten schmeckt besser. Der Rahm ist süß.',
    'Das Menü besteht aus drei Teilen.',
    'Schreibe morgen eine Einkaufsliste mit fünf Wörtern aus der Stunde.',
    'غدًا اكتب قائمة تسوّق بخمس كلمات من الدرس.'),

  U('b1-u8-l3', 'B1', 'الجسد والنفس', 'Körper und Seele', 'lexik-kollokation',
    'Am Ende sprichst du über Gesundheit und Gefühle',
    'في النهاية تتحدث عن الصحة والمشاعر.',
    [
      ['Ich war wütend auf mich selbst.', 'المشاعر بحرف ثابت', 'wütend auf + Person', 'Ich war wütend für mich selbst.', 'wütend auf'],
      ['Abends entspanne ich mich im Salon.', 'الفعل الانعكاسي بضميره', 'sich entspannen', 'Abends entspanne ich im Salon.', 'mich'],
      ['Jeder ist abhängig von Hilfe.', 'abhängig مع von', 'abhängig von + Dativ', 'Jeder ist abhängig auf Hilfe.', 'von'],
      ['Das Unglück war im Fernsehen.', 'الحدث مفرد بفعل مفرد', 'das Unglück: Singular + war', 'Das Unglück waren im Fernsehen.', 'war']
    ],
    [
      ['Die Therapie dauert drei Monate.', 'العلاج يستمر ثلاثة أشهر', 'Die Therapie dauern drei Monate.', 'الفعل مفرد.', 'dauert'],
      ['Der Notruf kommt sofort.', 'نداء الطوارئ فورًا', 'Der Notruf kommen sofort.', 'الفعل مفرد.', 'kommt'],
      ['Danke für dein Verständnis.', 'شكرًا لتفهمك', 'Danke für dein Verständnis auf.', 'بلا auf.', 'für'],
      ['Das Kind wirkt ängstlich.', 'الطفل يبدو خائفًا', 'Das Kind wirkt ängstlich gemacht.', 'الصفة تكفي.', 'ängstlich']
    ],
    'Ich war wütend auf mich selbst. Die Therapie dauert drei Monate.',
    'Danke für dein Verständnis.',
    'Schreibe morgen drei Sätze über einen Tag, an dem du erschöpft warst.',
    'غدًا اكتب ثلاث جمل عن يوم كنت فيه منهكًا.'),

  U('b1-u8-l4', 'B1', 'العمل والمكتب', 'Arbeit und Büro', 'lexik-kollokation',
    'Am Ende beschreibst du deine Arbeit und dein Büro',
    'في النهاية تصف عملك ومكتبك.',
    [
      ['Die Anwältin prüft den Vertrag.', 'المهن بفعل مفرد', 'die Anwältin: Singular + prüft', 'Die Anwältin prüfen den Vertrag.', 'prüft'],
      ['Ich schreibe die Nummer gleich auf.', 'aufschreiben منفصل', 'Trennbares Verb: schreibe … auf', 'Ich aufschreibe die Nummer gleich.', 'schreibe … auf'],
      ['Wir garantieren die Lieferung.', 'garantieren بلا حرف جر', 'kein für nach garantieren', 'Wir garantieren für die Lieferung.', 'garantieren'],
      ['Ich muss mich auf die Arbeit konzentrieren.', 'التركّز على شيء', 'sich konzentrieren auf + Akkusativ', 'Ich muss mich auf die Arbeit konzentrieren an.', 'auf die Arbeit']
    ],
    [
      ['Der Kopierer steht neben der Tür.', 'آلة النسخ بجانب الباب', 'Der Kopierer stehen neben der Tür.', 'الفعل مفرد.', 'steht'],
      ['Bitte kopieren Sie alle Seiten.', 'انسخ كل الصفحات', 'Bitte kopieren Sie auf alle Seiten.', 'بلا auf.', 'kopieren'],
      ['Die Industrie sucht Fachkräfte.', 'الصناعة تبحث عن خبراء', 'Die Industrie suchen Fachkräfte.', 'الفعل مفرد.', 'sucht'],
      ['Ich lösche die alten Dateien.', 'أمحو الملفات القديمة', 'Ich lösche auf die alten Dateien.', 'بلا auf.', 'lösche']
    ],
    'Die Anwältin prüft den Vertrag. Ich muss mich auf die Arbeit konzentrieren.',
    'Bitte kopieren Sie alle Seiten.',
    'Schreibe morgen fünf Sätze über deinen Arbeitsplatz.',
    'غدًا اكتب خمس جمل عن مكان عملك.'),

  U('b1-u8-l5', 'B1', 'الإدارة والتعليم', 'Verwaltung und Schule', 'wortstellung',
    'Am Ende füllst du einen Antrag aus und sprichst über die Ausbildung',
    'في النهاية تملأ طلبًا وتتحدث عن التعليم.',
    [
      ['Der Zivilstand ist im Formular anzugeben.', 'المصدر مع zu في الوسط', 'an-zu-geben', 'Der Zivilstand ist im Formular angeben.', 'anzugeben'],
      ['Wir schaffen einen Rechner an.', 'anschaffen منفصل', 'Trennbares Verb: schaffen … an', 'Wir anschaffen einen Rechner.', 'schaffen … an'],
      ['Das Heim nimmt neue Gäste auf.', 'aufnehmen منفصل', 'nimmt … auf', 'Das Heim aufnimmt neue Gäste.', 'nimmt … auf'],
      ['Die Teilnahme am Kurs ist freiwillig.', 'الاشتراك مفرد', 'die Teilnahme: Singular + ist', 'Die Teilnahme am Kurs sind freiwillig.', 'ist']
    ],
    [
      ['Die Kriminalpolizei übernimmt den Fall.', 'الشرطة الجنائية تتولى القضية', 'Die Kriminalpolizei übernehmen den Fall.', 'الفعل مفرد.', 'übernimmt'],
      ['Nach der Entlassung sucht er sofort.', 'بعد التسريح يبحث فورًا', 'Nach der Entlassung sucht er sofort auf.', 'بلا auf.', 'sucht'],
      ['Die Rechnung ist nächste Woche fällig.', 'الفاتورة مستحقة الأسبوع القادم', 'Die Rechnung ist nächste Woche fällig gemacht.', 'الصفة تكفي.', 'fällig'],
      ['Bitte unterstreichen Sie die Fehler.', 'ضع خطًّا تحت الأخطاء', 'Bitte unterstreichen Sie auf die Fehler.', 'بلا auf.', 'unterstreichen']
    ],
    'Der Zivilstand ist im Formular anzugeben. Wir schaffen einen Rechner an.',
    'Die Rechnung ist nächste Woche fällig.',
    'Fülle morgen einen einfachen Antrag aus und lies ihn laut vor.',
    'غدًا املأ طلبًا بسيطًا واقرأه بصوت عالٍ.'),

  U('b1-u8-l6', 'B1', 'الطبيعة والرياضة', 'Natur und Sport', 'wortstellung',
    'Am Ende berichtest du über Wetter, Ausflug und Sport',
    'في النهاية تحكي عن الطقس والرحلة والرياضة.',
    [
      ['Auf dem Weg begegne ich dem Trainer.', 'begegnen + داتيف', 'begegnen + Dativ', 'Auf dem Weg begegne ich den Trainer.', 'dem Trainer'],
      ['Es donnert seit einer Stunde.', 'الطقس بضمير es', 'es donnert, es gibt kein anderes Subjekt', 'Es donnern seit einer Stunde.', 'donnert'],
      ['Das Stadion war voll.', 'الأمكنة مفردة', 'das Stadion: Singular + war', 'Das Stadion waren voll.', 'war'],
      ['Golf spielt er nur im Sommer.', 'اللعبة بلا أداة', 'Golf spielen ohne Artikel', 'Er spielt das Golf nur im Sommer.', 'Golf']
    ],
    [
      ['Der Treffpunkt bleibt derselbe.', 'نقطة اللقاء نفسها', 'Der Treffpunkt bleiben derselbe.', 'الفعل مفرد.', 'bleibt'],
      ['Die Übernachtung kostet extra.', 'المبيت بتكلفة إضافية', 'Die Übernachtung kosten extra.', 'الفعل مفرد.', 'kostet'],
      ['Der Blitz kam vor dem Donner.', 'البرق سبق الرعد', 'Der Blitz kamen vor dem Donner.', 'الفعل مفرد.', 'kam'],
      ['Der Rekord fiel im letzten Versuch.', 'الرقم القياسي سُجّل في المحاولة الأخيرة', 'Der Rekord fielen im letzten Versuch.', 'الفعل مفرد.', 'fiel']
    ],
    'Auf dem Weg begegne ich dem Trainer. Es donnert seit einer Stunde.',
    'Das Stadion war voll.',
    'Berichte morgen über einen Ausflug bei schlechtem Wetter.',
    'غدًا احكِ عن رحلة في طقس سيئ.'),

  U('b1-u9-l1', 'B1', 'البيت والأجهزة', 'Haus und Geräte', 'lexik-kollokation',
    'Am Ende beschreibst du Geräte und Materialien im Haushalt',
    'في النهاية تصف أجهزة وموادّ في البيت.',
    [
      ['Der Abfalleimer steht unter der Spüle.', 'الأداة المنزلية مفردة', 'der Eimer: Singular + steht', 'Der Abfalleimer stehen unter der Spüle.', 'steht'],
      ['Ich will die Zeitung abonnieren.', 'abonnieren بلا حرف جر', 'kein auf nach abonnieren', 'Ich will die Zeitung abonnieren auf.', 'abonnieren'],
      ['Sämtliche Rechnungen sind bezahlt.', 'الجمع: sind', 'sämtlich im Plural', 'Sämtliche Rechnungen ist bezahlt.', 'sind'],
      ['Der Schmuck liegt im Safe.', 'المواد غير المعدودة مفردة', 'der Schmuck: Singular + liegt', 'Der Schmuck liegen im Safe.', 'liegt']
    ],
    [
      ['Die Fernbedienung liegt neben dem Sofa.', 'جهاز التحكم بجانب الأريكة', 'Die Fernbedienung liegen neben dem Sofa.', 'الفعل مفرد.', 'liegt'],
      ['Insgesamt zahle ich hundert Franken mehr.', 'إجمالًا أدفع أكثر', 'Insgesamt zahle ich hundert Franken mehr auf.', 'بلا auf.', 'Insgesamt'],
      ['Der Service war ausgezeichnet.', 'الخدمة كانت ممتازة', 'Der Service war ausgezeichnet gemacht.', 'الصفة تكفي.', 'ausgezeichnet'],
      ['Der Preis ist inklusive Heizung.', 'السعر شامل التدفئة', 'Der Preis ist inklusive von Heizung.', 'بلا von.', 'inklusive']
    ],
    'Der Abfalleimer steht unter der Spüle. Der Service war ausgezeichnet.',
    'Der Schmuck liegt im Safe.',
    'Beschreibe morgen drei Geräte in deiner Küche.',
    'غدًا صف ثلاثة أجهزة في مطبخك.'),

  U('b1-u9-l2', 'B1', 'المهن والعمل', 'Berufe und Betrieb', 'konjugation',
    'Am Ende stellst du Kolleginnen und Kollegen vor',
    'في النهاية تقدّم زميلات وزملاء العمل.',
    [
      ['Die Arbeiterin aus der Werkstatt hilft uns.', 'المهنة المؤنثة بفعل مفرد', 'die Arbeiterin: Singular + hilft', 'Die Arbeiterin aus der Werkstatt helfen uns.', 'hilft'],
      ['Die Firma will zehn Leute einstellen.', 'المصدر في الآخر', 'einstellen nach will', 'Die Firma will zehn Leute einstellen auf.', 'einstellen'],
      ['Die Personalie liegt beim Betriebsrat.', 'اصطلاح إداري', 'die Personalie: Singular + liegt', 'Die Personalie liegen beim Betriebsrat.', 'liegt'],
      ['Sie wollen morgen über den Plan abstimmen.', 'abstimmen + über', 'abstimmen über + Akkusativ', 'Sie wollen morgen über den Plan abstimmen auf.', 'über den Plan']
    ],
    [
      ['Der Fachmann von der Technik kommt gleich.', 'الخبير يأتي حالًا', 'Der Fachmann von der Technik kommen gleich.', 'الفعل مفرد.', 'kommt'],
      ['Der Streik beginnt am Montag.', 'الإضراب يبدأ الإثنين', 'Der Streik beginnen am Montag.', 'الفعل مفرد.', 'beginnt'],
      ['Am folgenden Montag beginnt die Schulung.', 'الإثنين التالي', 'Am folgend Montag beginnt die Schulung.', 'الصفة تُصرَّف.', 'folgenden'],
      ['Die Konkurrenz schläft nicht.', 'المنافسة لا تنام', 'Die Konkurrenz schlafen nicht.', 'الفعل مفرد.', 'schläft']
    ],
    'Die Arbeiterin aus der Werkstatt hilft uns. Der Streik beginnt am Montag.',
    'Die Firma will zehn Leute einstellen.',
    'Stelle morgen zwei Kolleginnen mit je einem Satz vor.',
    'غدًا قدّم زميلتين بجملة لكل واحدة.'),

  U('b1-u9-l3', 'B1', 'التعليم والدلائل', 'Bildung und Nachschlagen', 'konjugation',
    'Am Ende sprichst du über Lernen, Museen und Reisen',
    'في النهاية تتحدث عن التعلّم والمتاحف والرحلات.',
    [
      ['Das Alphabet hat sechsundzwanzig Buchstaben.', 'المفرد بفعل مفرد', 'das Alphabet: Singular + hat', 'Das Alphabet haben sechsundzwanzig Buchstaben.', 'hat'],
      ['Sie muss jedes neue Wort nachschlagen.', 'المصدر في الآخر', 'nachschlagen nach muss', 'Sie muss jedes neue Wort nachschlagen auf.', 'nachschlagen'],
      ['Das Denkmal steht auf dem Platz.', 'المفرد بفعل مفرد', 'das Denkmal: Singular + steht', 'Das Denkmal stehen auf dem Platz.', 'steht'],
      ['Das Problem ist technisch.', 'الصفة خبرًا', 'technisch ohne Endung', 'Das Problem ist technisch gemacht.', 'technisch']
    ],
    [
      ['Die Mensa öffnet um elf.', 'مطعم الجامعة يفتح', 'Die Mensa öffnen um elf.', 'الفعل مفرد.', 'öffnet'],
      ['Die Burg über dem Dorf ist alt.', 'القلعة قديمة', 'Die Burg über dem Dorf sind alt.', 'الفعل مفرد.', 'ist'],
      ['Das Gasthaus serviert bis zehn.', 'الفندق الريفي يقدّم', 'Das Gasthaus servieren bis zehn.', 'الفعل مفرد.', 'serviert'],
      ['Die Ausfahrt kommt gleich.', 'المخرج قادم', 'Die Ausfahrt kommen gleich.', 'الفعل مفرد.', 'kommt']
    ],
    'Sie muss jedes neue Wort nachschlagen. Das Denkmal steht auf dem Platz.',
    'Die Mensa öffnet um elf.',
    'Schreibe morgen fünf Sätze über deine Lernmethode.',
    'غدًا اكتب خمس جمل عن طريقة تعلّمك.'),

  U('b1-u9-l4', 'B1', 'السلوك والمشاعر', 'Verhalten und Gefühl', 'wortstellung',
    'Am Ende beschreibst du Verhalten und redest über Gefühle',
    'في النهاية تصف السلوك وتتحدث عن المشاعر.',
    [
      ['Im Kaffeehaus wollen wir uns amüsieren.', 'انعكاسي كامل', 'sich amüsieren, nicht amüsieren', 'Im Kaffeehaus wollen wir amüsieren.', 'uns amüsieren'],
      ['Weder der Vermieter noch die Nachbarn wissen es.', 'weder … noch مع جمع', 'weder noch + Plural', 'Weder der Vermieter noch die Nachbarn weiß es.', 'wissen'],
      ['Je mehr ich übe, desto besser.', 'تركيب je … desto', 'desto + Komparativ', 'Je mehr ich übe, desto besser auf.', 'desto besser'],
      ['Sie bleibt entschlossen und ruhig.', 'الصفة خبرًا', 'entschlossen ohne Zusatz', 'Sie bleibt entschlossen gemacht und ruhig.', 'entschlossen']
    ],
    [
      ['Ich bin gespannt auf das Ergebnis.', 'متشوّق للنتيجة', 'Ich bin gespannt für das Ergebnis.', 'gespannt auf.', 'auf'],
      ['Der Test bleibt bis Freitag geheim.', 'الاختبار سري', 'Der Test bleibt bis Freitag geheim gemacht.', 'الصفة تكفي.', 'geheim'],
      ['Entweder wir gehen, oder wir bleiben.', 'إما نذهب أو نبقى', 'Entweder wir gehen, oder bleiben wir.', 'الفعل ثانٍ بعد oder.', 'oder wir bleiben'],
      ['Sie will sich nicht weigern.', 'لا تريد أن ترفض', 'Sie will sich nicht weigern auf.', 'بلا auf.', 'weigern']
    ],
    'Im Kaffeehaus wollen wir uns amüsieren. Je mehr ich übe, desto besser.',
    'Ich bin gespannt auf das Ergebnis.',
    'Schreibe morgen drei Sätze über ein Verhalten, das dich überrascht hat.',
    'غدًا اكتب ثلاث جمل عن سلوك أدهشك.'),

  U('b1-u9-l5', 'B1', 'المرور والسفر', 'Verkehr und Reise', 'lexik-kollokation',
    'Am Ende berichtest du über eine Fahrt und einen Vorfall',
    'في النهاية تحكي عن رحلة وحادث.',
    [
      ['Wir müssen uns anschnallen, bevor der Flug startet.', 'انعكاسي مع müssen', 'sich anschnallen', 'Wir müssen uns anschnallen auf, bevor der Flug startet.', 'anschnallen'],
      ['In der Schweiz heißt das Fahrrad Velo.', 'الصيغة السويسرية', 'Velo = Fahrrad', 'In der Schweiz heißt das Fahrrad Velo auf.', 'Velo'],
      ['Die Polizei will den Täter verhaften.', 'المصدر في الآخر', 'verhaften nach will', 'Die Polizei will den Täter verhaften auf.', 'verhaften'],
      ['Das Verkehrszeichen ist neu.', 'المفرد بفعل مفرد', 'das Verkehrszeichen: Singular + ist', 'Das Verkehrszeichen sind neu.', 'ist']
    ],
    [
      ['Die Vorfahrt gilt hier.', 'الأولوية هنا', 'Die Vorfahrt gelten hier.', 'الفعل مفرد.', 'gilt'],
      ['Die Flucht dauerte zwei Tage.', 'الهروب استمر يومين', 'Die Flucht dauerten zwei Tage.', 'الفعل مفرد.', 'dauerte'],
      ['Der Strafzettel kam per Post.', 'المخالفة وصلت بالبريد', 'Der Strafzettel kamen per Post.', 'الفعل مفرد.', 'kam'],
      ['Die Bäche fließen zum Fluss.', 'الجداول تتدفق', 'Die Bäche fließen zum Fluss auf.', 'بلا auf.', 'fließen']
    ],
    'Wir müssen uns anschnallen. Die Vorfahrt gilt hier.',
    'In der Schweiz heißt das Fahrrad Velo.',
    'Berichte morgen über eine Fahrt mit einem Zwischenfall.',
    'غدًا احكِ عن رحلة وقع فيها أمر طارئ.'),

  U('b1-u9-l6', 'B1', 'الطعام والصحة', 'Essen und Gesundheit', 'lexik-kollokation',
    'Am Ende beschreibst du ein Gericht und sprichst über den Körper',
    'في النهاية تصف طبقًا وتتحدث عن الجسد.',
    [
      ['In Österreich heißt der Pilz Schwammerl.', 'الصيغة النمساوية', 'Schwammerl = Pilz', 'In Österreich heißt der Pilz Schwammerl auf.', 'Schwammerl'],
      ['Das Schlagobers ist süß.', 'العنصر مفرد', 'das Schlagobers: Singular + ist', 'Das Schlagobers sind süß.', 'ist'],
      ['Der Schlagrahm gehört auf den Kuchen.', 'الرهايم على الكيك', 'Der Schlagrahm gehören auf den Kuchen.', 'الفعل مفرد.', 'gehört'],
      ['Er will sich rasieren.', 'انعكاسي العناية', 'sich rasieren', 'Er will sich rasieren auf.', 'rasieren']
    ],
    [
      ['Man spürt den Wind am Abend.', 'نشعر بالريح', 'Man spürt auf den Wind am Abend.', 'بلا auf.', 'spürt'],
      ['Die Brust tut nach dem Husten weh.', 'الصدر يؤلم بعد الكحة', 'Die Brust tun nach dem Husten weh.', 'الفعل مفرد.', 'tut'],
      ['Die Zahnpasta ist schon alle.', 'معجون الأسنان انتهى', 'Die Zahnpasta sind schon alle.', 'الفعل مفرد.', 'ist'],
      ['Über den Tod spricht man selten.', 'نادرًا ما نتحدث عن الموت', 'Über den Tod sprechen man selten.', 'الفاعل man مفرد.', 'spricht']
    ],
    'Das Schlagobers ist süß. Man spürt den Wind am Abend.',
    'Über den Tod spricht man selten.',
    'Beschreibe morgen ein Gericht und einen Körperteil in je zwei Sätzen.',
    'غدًا صف طبقًا وعضوًا من الجسد في جملتين لكل منهما.'),

  U('b1-u10-l1', 'B1', 'الأمن والقانون', 'Sicherheit und Recht', 'konjugation',
    'Am Ende berichtest du über einen Vorfall und ein Gericht',
    'في النهاية تحكي عن حادث ومحكمة.',
    [
      ['Der Einbruch war im Winter.', 'الاسم مفرد بفعل مفرد', 'der Einbruch: Singular + war', 'Der Einbruch waren im Winter.', 'war'],
      ['Jemand wollte das Geld stehlen.', 'stehlen بلا حرف جر', 'kein von nach stehlen', 'Jemand wollte das Geld stehlen von.', 'stehlen'],
      ['Die Frau will sich scheiden lassen.', 'تركيب ثابت بانعكاسي', 'sich scheiden lassen', 'Die Frau will sich scheiden gelassen.', 'scheiden lassen'],
      ['Die Familie tut klug, sie nicht zu bestrafen.', 'المصدر مع zu في الآخر', 'zu bestrafen', 'Die Familie tut klug, sie nicht bestrafen.', 'zu bestrafen']
    ],
    [
      ['Der Täter stand vor dem Gericht.', 'الجاني أمام المحكمة', 'Der Täter standen vor dem Gericht.', 'الفعل مفرد.', 'stand'],
      ['Alle Nachbarn vermissen sie.', 'كل الجيران يفتقدونها', 'Alle Nachbarn vermissen auf sie.', 'بلا auf.', 'vermissen'],
      ['Alle Menschen sind gleichberechtigt.', 'الناس متساوون في الحقوق', 'Alle Menschen sind gleichberechtigt gemacht.', 'الصفة تكفي.', 'gleichberechtigt'],
      ['Man kann sich hier leicht irren.', 'يسهل الخطأ هنا', 'Man kann sich hier leicht irren auf.', 'بلا auf.', 'irren']
    ],
    'Der Einbruch war im Winter. Jemand wollte das Geld stehlen.',
    'Alle Menschen sind gleichberechtigt.',
    'Berichte morgen in fünf Sätzen über einen Vorfall in deiner Straße.',
    'غدًا احكِ في خمس جمل عن حادث في شارعك.'),

  U('b1-u10-l2', 'B1', 'الإدارة والمدرسة', 'Verwaltung und Schule', 'wortstellung',
    'Am Ende füllst du ein Formular aus und erzählst von Schule und Kunst',
    'في النهاية تملأ استمارة وتحكي عن المدرسة والفن.',
    [
      ['Man soll den Besuch vorher ankündigen.', 'ankündigen بلا حرف جر', 'kein auf nach ankündigen', 'Man soll den Besuch vorher ankündigen auf.', 'ankündigen'],
      ['Die Malerin stellt im Herbst aus.', 'المهنة المؤنثة بفعل مفرد', 'die Malerin: Singular + stellt', 'Die Malerin stellen im Herbst aus.', 'stellt'],
      ['Jeder Schritt ist klein.', 'der Schritt مفرد', 'der Schritt: Singular + ist', 'Jeder Schritt sind klein.', 'ist'],
      ['Man will den Grund herausfinden.', 'herausfinden بلا حرف جر', 'kein auf nach herausfinden', 'Man will den Grund herausfinden auf.', 'herausfinden']
    ],
    [
      ['Die Absenderin steht oben auf dem Brief.', 'المرسلة أعلى الرسالة', 'Die Absenderin stehen oben auf dem Brief.', 'الفعل مفرد.', 'steht'],
      ['Die Gratulation kommt von der Architektin.', 'التهنئة من المهندسة', 'Die Gratulation kommen von der Architektin.', 'الفعل مفرد.', 'kommt'],
      ['Die Linie drei fährt zum Bahnhof.', 'الخط ثلاثة إلى المحطة', 'Die Linie drei fahren zum Bahnhof.', 'الفعل مفرد.', 'fährt'],
      ['Zwei Personen sind heute abwesend.', 'شخصان غائبان اليوم', 'Zwei Personen sind heute abwesend gemacht.', 'الصفة تكفي.', 'abwesend']
    ],
    'Man soll den Besuch vorher ankündigen. Die Absenderin steht oben auf dem Brief.',
    'Jeder Schritt ist klein.',
    'Schreibe morgen drei Sätze über einen Behördengang.',
    'غدًا اكتب ثلاث جمل عن زيارة دائرة رسمية.'),

  U('b1-u10-l3', 'B1', 'البيئة والطبيعة', 'Umwelt und Natur', 'lexik-kollokation',
    'Am Ende sprichst du über Müll, Tiere und Formen',
    'في النهاية تتحدث عن النفايات والحيوانات والأشكال.',
    [
      ['Das Abgas von den Autos schadet allen.', 'المفرد بفعل مفرد', 'das Abgas: Singular + schadet', 'Das Abgas von den Autos schaden allen.', 'schadet'],
      ['Die Bilder stammen aus dem Süden.', 'stammen مع aus', 'stammen + aus', 'Die Bilder stammen von dem Süden.', 'aus'],
      ['Der Hund will fressen.', 'الحيوان يأكل fressen', 'fressen für Tiere', 'Der Hund will essen.', 'fressen'],
      ['Das Bild hängt schief.', 'الصفة خبرًا بلا تصريف', 'schief ohne Endung', 'Das Bild hängt schief gemacht.', 'schief']
    ],
    [
      ['Für das Faschierte brauche ich nur eine Zutat.', 'للحم المفروم مكوّن واحد', 'Für das Faschierte brauche ich nur einen Zutat.', 'Zutat مؤنثة.', 'eine Zutat'],
      ['Unser Haustier ist eine alte Katze.', 'حيواننا المنزلي قطة', 'Unser Haustier sind eine alte Katze.', 'الفعل مفرد.', 'ist'],
      ['Innen ist es warm und trocken.', 'في الداخل دافئ', 'Innen ist es warm und trocken auf.', 'بلا auf.', 'Innen'],
      ['Die städtische Schule ist groß.', 'مدرسة المدينة كبيرة', 'Die städtisch Schule ist groß.', 'الصفة تُصرَّف.', 'städtische']
    ],
    'Das Abgas von den Autos schadet allen. Die Bilder stammen aus dem Süden.',
    'Das Bild hängt schief.',
    'Beschreibe morgen fünf Dinge in deiner Küche.',
    'غدًا صف خمسة أشياء في مطبخك.'),

  U('b1-u10-l4', 'B1', 'الأفعال والظروف', 'Verben und Umstände', 'wortstellung',
    'Am Ende ordnest du Ereignisse in der Zeit und begründest Entscheidungen',
    'في النهاية ترتّب الأحداث زمنيًا وتبرّر القرارات.',
    [
      ['Zunächst lesen wir den Text.', 'الظرف أولًا والفعل ثانيًا', 'Verb an zweiter Stelle', 'Zunächst wir lesen den Text.', 'lesen wir'],
      ['Ich will nicht an der Werbung zweifeln.', 'zweifeln + an', 'zweifeln an + Akkusativ', 'Ich will nicht auf die Werbung zweifeln.', 'an der'],
      ['Über den Tod will man nicht nachdenken.', 'nachdenken + über', 'nachdenken über + Akkusativ', 'Über den Tod will man nicht nachdenken auf.', 'nachdenken'],
      ['Das Fleisch ist noch nicht gar.', 'الصفة خبرًا', 'gar ohne Zusatz', 'Das Fleisch ist noch nicht gar gemacht.', 'gar']
    ],
    [
      ['Die Regel gilt für alle.', 'القاعدة سارية على الجميع', 'Die Regel gelten für alle.', 'الفعل مفرد.', 'gilt'],
      ['Solche Fehler können oft vorkommen.', 'أخطاء كهذه تقع', 'Solche Fehler können oft vorkommen auf.', 'بلا auf.', 'vorkommen'],
      ['Zusätzlich zahle ich hundert Franken.', 'إضافة إلى ذلك أدفع', 'Zusätzlich zahle ich hundert Franken auf.', 'بلا auf.', 'Zusätzlich'],
      ['Es ist nichts mehr übrig.', 'لم يبقَ شيء', 'Es ist nichts mehr übrig gemacht.', 'الصفة تكفي.', 'übrig']
    ],
    'Zunächst lesen wir den Text. Die Regel gilt für alle.',
    'Solche Fehler können oft vorkommen.',
    'Erzähle morgen der Reihe nach, was du gestern gemacht hast.',
    'غدًا احكِ بالترتيب ما فعلته أمس.'),

  U('b1-u10-l5', 'B1', 'الأشياء والصفات', 'Dinge und Eigenschaften', 'deklination',
    'Am Ende beschreibst du Gegenstände, Formen und Materialien',
    'في النهاية تصف أشياء وأشكالًا وموادّ.',
    [
      ['Der Treffpunkt bleibt derselbe.', 'derselbe في الخبر بلا تصريف', 'derselbe als Prädikatsnomen', 'Der Treffpunkt bleibt derselber.', 'derselbe'],
      ['Wir gehen den Fluss entlang.', 'entlang بعد الاسم', 'entlang steht nach dem Nomen', 'Wir gehen entlang den Fluss.', 'Fluss entlang'],
      ['Für den Umtausch eignet sich nur die Rechnung.', 'انعكاسي كامل', 'sich eignen für', 'Für den Umtausch eignet nur die Rechnung.', 'eignet sich'],
      ['Die Wohnung ist komplett möbliert.', 'الصفة مع الفعل التام', 'komplett + Partizip', 'Die Wohnung ist komplett möbliert gemacht.', 'komplett möbliert']
    ],
    [
      ['In die Liste darf man einen Namen einfügen.', 'يجوز إدراج اسم', 'In die Liste darf man einen Namen einfügen auf.', 'بلا auf.', 'einfügen'],
      ['Die Schüssel steht im Regal.', 'السلطانية على الرف', 'Die Schüssel stehen im Regal.', 'الفعل مفرد.', 'steht'],
      ['Die Etiketten sind farbig.', 'اللصاقات ملوّنة', 'Die Etiketten sind farbig gemacht.', 'الصفة تكفي.', 'farbig'],
      ['Der Stoff ist künstlich.', 'القماش اصطناعي', 'Der Stoff ist künstlich gemacht.', 'الصفة تكفي.', 'künstlich']
    ],
    'Der Treffpunkt bleibt derselbe. Wir gehen den Fluss entlang.',
    'Die Wohnung ist komplett möbliert.',
    'Beschreibe morgen einen Gegenstand in deinem Zimmer mit Form und Farbe.',
    'غدًا صف شيئًا في غرفتك بشكله ولونه.'),

  U('b1-u10-l6', 'B1', 'الناس والمدينة', 'Menschen und Stadt', 'konjugation',
    'Am Ende stellst du Nachbarn vor und sprichst über das Alter',
    'في النهاية تقدّم الجيران وتتحدث عن الكبر.',
    [
      ['Im Feber beginnt der Fasching.', 'الصيغة النمساوية للشهر', 'der Feber = der Februar', 'Im Feber beginnen der Fasching.', 'beginnt'],
      ['Nichtraucher sitzen hier getrennt.', 'الجمع بلا أداة', 'Plural ohne Artikel', 'Nichtraucher sitzt hier getrennt.', 'sitzen'],
      ['Die Kinder spielen miteinander.', 'الضمير المدمج', 'miteinander = mit einander', 'Die Kinder spielen miteinander auf.', 'miteinander'],
      ['Der mittlere Teil bleibt leer.', 'الصفة تُصرَّف', 'mittlere mit Endung', 'Der mittlerer Teil bleibt leer.', 'mittlere']
    ],
    [
      ['Eine Bewohnerin erzählt von den Neuen.', 'ساكنة تحكي', 'Eine Bewohnerin erzählen von den Neuen.', 'الفعل مفرد.', 'erzählt'],
      ['Die Wirtin bringt die Suppe.', 'صاحبة المطعم تحضر الشوربة', 'Die Wirtin bringen die Suppe.', 'الفعل مفرد.', 'bringt'],
      ['Zeit ist wertvoll.', 'الوقت ثمين', 'Zeit ist wertvoll gemacht.', 'الصفة تكفي.', 'wertvoll'],
      ['Die Fragen sind zahlreich.', 'الأسئلة كثيرة العدد', 'Die Fragen sind zahlreich gemacht.', 'الصفة تكفي.', 'zahlreich']
    ],
    'Im Feber beginnt der Fasching. Die Kinder spielen miteinander.',
    'Nichtraucher sitzen hier getrennt.',
    'Stelle morgen zwei Nachbarn mit je zwei Sätzen vor.',
    'غدًا قدّم جارين بجملتين لكل واحد.'),

  U('b1-u10-l7', 'B1', 'الربط والتعميم', 'Verbindung und Allgemeines', 'wortstellung',
    'Am Ende verbindest du Sätze und ordnest Aussagen allgemein',
    'في النهاية تربط الجمل وتعمّم الأحكام.',
    [
      ['Die gesamte Verwaltung arbeitet langsam.', 'الصفة تُصرَّف أمام الاسم', 'gesamte mit Endung', 'Die gesamt Verwaltung arbeitet langsam.', 'gesamte'],
      ['Er liest sowohl Zeitungen als auch Magazine.', 'زوج الرابط كامل', 'sowohl … als auch', 'Er liest sowohl Zeitungen als auch Magazine auf.', 'als auch'],
      ['Man lernt, indem man übt.', 'indem ترسل الفعل للآخر', 'indem + Verb am Ende', 'Man lernt, indem man übt auf.', 'indem'],
      ['Über das Geschlecht diskutieren sie lange.', 'الجمع بفعل جمع', 'Plural: diskutieren', 'Über das Geschlecht diskutiert sie lange.', 'diskutieren']
    ],
    [
      ['Sowieso kommt sie mit.', 'على أي حال تأتي معنا', 'Sowieso kommt sie mit auf.', 'بلا auf.', 'Sowieso'],
      ['Nirgendwo ist es so ruhig.', 'لا مكان بهذا الهدوء', 'Nirgendwo ist es so ruhig auf.', 'بلا auf.', 'Nirgendwo'],
      ['Der Saal war ziemlich voll.', 'القاعة كانت ممتلئة إلى حد كبير', 'Der Saal war ziemlich voll gemacht.', 'الصفة تكفي.', 'ziemlich voll'],
      ['Diese Regel ist speziell für B1.', 'هذه القاعدة خاصة بـ B1', 'Diese Regel ist speziell für B1 gemacht.', 'الصفة تكفي.', 'speziell']
    ],
    'Die gesamte Verwaltung arbeitet langsam. Man lernt, indem man übt.',
    'Nirgendwo ist es so ruhig.',
    'Verbinde morgen fünf Sätze mit sowohl … als auch und indem.',
    'غدًا اربط خمس جمل بـ sowohl … als auch وindem.')
];

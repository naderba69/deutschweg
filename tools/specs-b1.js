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
    'غدًا قل ما ينقص لـ B2.'),/* Unit 6 — amendment B1-L2 (DECISIONS-PENDING.md item 25). The sixth unit exists
   because of the B1 match: tools/goethe-b1-candidates.txt holds 219 entries the
   learner already MEETS in the material and no word list names. A B1 lesson holds
   40 words (the compiler's ceiling), so 219 + the 21 entries the new lessons carry
   in their own material are spread over six lessons of 40. The grammar of the unit
   is the B1 grammar the earlier five units did not name: Pronominaladverbien,
   Partizip als Adjektiv, zweiteilige Konnektoren, Passiv mit Modalverben,
   Nominalstil, Wortbildung. */
  U('b1-u6-l1', 'B1', 'الضمائر الظرفية', 'Pronominaladverbien', 'präposition',
    'Am Ende benutzt du darauf und worüber statt auf das',
    'في النهاية تستعمل darauf وworüber بدل auf das.',
    [
      ['Ich warte darauf.', 'الضمير الظرفي يشير إلى شيء ذُكر', 'Präposition + Sache → da(r) + Präposition', 'Ich warte auf das.', 'للشيء darauf لا auf das'],
      ['Worüber sprecht ihr?', 'السؤال عن شيء: wo(r) + حرف', 'wo + Präposition → worüber', 'Über was sprecht ihr?', 'السؤال worüber'],
      ['Ich denke daran.', 'denken an يصبح daran', 'Verb + Präposition → Pronominaladverb', 'Ich denke an das.', 'daran'],
      ['Ich helfe ihm.', 'للأشخاص حرف + ضمير شخصي', 'Person → Präposition + Pronomen', 'Ich helfe daran.', 'الأشخاص an ihn']
    ],
    [
      ['Ich warte darauf.', 'أنتظر ذلك', 'Ich warte auf das.', 'للشيء ضمير ظرفي.', 'darauf'],
      ['Worüber sprecht ihr?', 'عن ماذا تتحدثون؟', 'Über was sprecht ihr als Frage?', 'السؤال worüber.', 'Worüber'],
      ['Ich denke daran.', 'أفكر في ذلك', 'Ich denke an das.', 'daran مع denken.', 'daran'],
      ['Ich helfe ihm.', 'أساعده', 'Ich helfe daran.', 'الأشخاص ضمير شخصي.', 'ihm']
    ],
    'Ich warte darauf. Worüber sprecht ihr?',
    'Ich denke oft daran.',
    'Notiere drei Sätze mit darauf.',
    'غدًا اكتب ثلاث جمل بـdarauf.'),

  U('b1-u6-l2', 'B1', 'اسم الفاعل والمفعول كصفة', 'Partizip als Adjektiv', 'deklination',
    'Am Ende beschreibst du mit spannend und gespannt richtig',
    'في النهاية تصف بـspannend وgespannt وصفًا سليمًا.',
    [
      ['Der Film ist spannend.', 'اسم الفاعل يصف من يفعل', 'Partizip I = aktiv und gleichzeitig', 'Der Film ist gespannt.', 'الفاعل spannend'],
      ['Das Kind ist gespannt.', 'اسم المفعول يصف من يقع عليه', 'Partizip II = passiv und vorher', 'Das Kind ist spannend.', 'المفعول gespannt'],
      ['ein spannendes Buch', 'كصفة تأخذ نهاية الصفة', 'Adjektivendung nach ein: -es', 'ein spannend Buch', 'نهاية الصفة'],
      ['die beruhigte Mutter', 'اسم المفعول كصفة للنقل', 'Partizip II als Adjektiv', 'die beruhigen Mutter', 'beruhigt + e']
    ],
    [
      ['Der Film ist spannend.', 'الفيلم مشوّق', 'Der Film ist gespannt.', 'الفاعل spannend.', 'spannend'],
      ['Das Kind ist gespannt.', 'الطفل متلهّف', 'Das Kind ist spannend.', 'المفعول gespannt.', 'gespannt'],
      ['ein spannendes Buch', 'كتاب مشوّق', 'ein spannend Buch', 'نهاية الصفة -es.', 'spannendes'],
      ['Die Musik ist beruhigend.', 'الموسيقى مهدّئة', 'Die Musik ist beruhigen.', 'كصفة: beruhigend.', 'beruhigend']
    ],
    'Der Film ist spannend. Das Kind ist gespannt.',
    'Die Musik ist beruhigend.',
    'Beschreibe zwei Dinge mit -end und zwei mit -t.',
    'غدًا صف شيئين بـ-end وشيئين بـ-t.'),

  U('b1-u6-l3', 'B1', 'الروابط المزدوجة', 'Zweiteilige Konnektoren', 'wortstellung',
    'Am Ende verbindest du zwei Teile mit entweder oder und je desto',
    'في النهاية تربط شطرين بـentweder … oder وje … desto.',
    [
      ['Entweder du rufst an oder du schreibst.', 'الشطران معًا', 'entweder … oder يعملان زوجًا', 'Entweder du rufst an.', 'الشطر الثاني لازم'],
      ['Je mehr du übst, desto besser sprichst du.', 'je في الفرعية وdesto في الرئيسية', 'je + Komparativ, desto + Komparativ', 'Je mehr du übst, besser sprichst du.', 'desto لازم'],
      ['Er ist nicht Lehrer, sondern Arzt.', 'sondern تصحّح بعد النفي', 'nicht … sondern', 'Er ist nicht Lehrer, aber Arzt.', 'التصحيح sondern'],
      ['Sie spricht sowohl Deutsch als auch Arabisch.', 'sowohl … als auch للجمع', 'sowohl … als auch', 'Sie spricht sowohl Deutsch und Arabisch.', 'als auch لا und']
    ],
    [
      ['Entweder du rufst an oder du schreibst.', 'إما أن تهاتف أو تكتب', 'Entweder du rufst an.', 'الشطر الثاني: oder.', 'oder'],
      ['Je mehr du übst, desto besser sprichst du.', 'كلّما تدرّبت أكثر تحدّثت أفضل', 'Je mehr du übst, besser sprichst du.', 'desto مع الأفعل.', 'desto'],
      ['Er ist nicht Lehrer, sondern Arzt.', 'هو ليس مدرّسًا بل طبيبًا', 'Er ist nicht Lehrer, aber Arzt.', 'بعد النفي sondern.', 'sondern'],
      ['Sie spricht sowohl Deutsch als auch Arabisch.', 'تتحدث الألمانية والعربية معًا', 'Sie spricht sowohl Deutsch und Arabisch.', 'als auch لا und.', 'als auch']
    ],
    'Entweder du rufst an oder du schreibst. Je mehr du übst, desto besser sprichst du.',
    'Nicht nur du lernst, sondern auch ich lerne.',
    'Schreibe drei Sätze mit entweder oder.',
    'غدًا اكتب ثلاث جمل بـentweder … oder.'),

  U('b1-u6-l4', 'B1', 'المجهول مع أفعال المساعدة', 'Passiv mit Modalverben', 'konjugation',
    'Am Ende sagst du muss repariert werden statt muss reparieren',
    'في النهاية تقول muss repariert werden لا muss reparieren.',
    [
      ['Die Straße muss repariert werden.', 'المساعد + اسم المفعول + werden', 'Modalverb + Partizip II + werden', 'Die Straße muss reparieren werden.', 'repariert لا reparieren'],
      ['Das Dach kann saniert werden.', 'kann للمكن', 'können + Partizip II + werden', 'Das Dach kann sanieren werden.', 'saniert'],
      ['Man repariert die Straße.', 'بديل المجهول: man', 'man + 3. Person Singular', 'Man reparieren die Straße.', 'man مع مفرد'],
      ['Die Straße ist repariert.', 'sein يصف الحالة لا الحدث', 'Zustandspassiv = sein + Partizip II', 'Die Straße wird repariert als Zustand', 'الحالة ist']
    ],
    [
      ['Die Straße muss repariert werden.', 'الشارع يجب أن يُرمَّم', 'Die Straße muss reparieren werden.', 'repariert werden.', 'repariert'],
      ['Das Dach kann saniert werden.', 'السقف يمكن ترميمه', 'Das Dach kann sanieren werden.', 'saniert werden.', 'saniert'],
      ['Man repariert die Straße.', 'يُرمَّم الشارع (بديل)', 'Man reparieren die Straße.', 'man مع الفعل المفرد.', 'repariert'],
      ['Die Straße ist repariert.', 'الشارع مُرمَّم (حالة)', 'Die Straße ist reparieren.', 'حالة: repariert.', 'repariert']
    ],
    'Die Straße muss repariert werden. Das Dach kann saniert werden.',
    'Die Rechnung muss bezahlt werden.',
    'Sage drei Sätze mit muss und werden.',
    'غدًا قل ثلاث جمل بـmuss … werden.'),

  U('b1-u6-l5', 'B1', 'الأسلوب الاسمي', 'Nominalstil', 'kasus',
    'Am Ende schreibst du beim Ausfüllen des Formulars statt einer wenn-Konstruktion',
    'في النهاية تكتب beim Ausfüllen des Formulars بدل جملة بـwenn.',
    [
      ['Beim Ausfüllen des Formulars hilft die Sekretärin.', 'الاسم يحمل الحدث', 'bei + Substantivierung + Genitiv', 'Wenn ich ausfülle hilft die Sekretärin ohne Komma', 'الصيغة الاسمية'],
      ['Die Höhe des Turms ist bekannt.', 'الجينيتيف يربط بدل von', 'Nomen + Genitiv statt von + Dativ', 'Die Höhe von dem Turm ist bekannt.', 'الإضافة'],
      ['Der Schutz der Daten gilt.', 'النص الرسمي يسمّي الحماية باسمها', 'Genitivattribut', 'Der Schutz von den Daten gilt.', 'der Daten'],
      ['Nach dem Prüfen kommt die Antwort.', 'nach + اسم مصدري', 'nach + Substantivierung', 'Nach dem wir prüfen kommt die Antwort.', 'nach dem Prüfen']
    ],
    [
      ['Beim Ausfüllen des Formulars hilft die Sekretärin.', 'عند ملء الاستمارة تساعد السكرتيرة', 'Wenn ich ausfülle hilft die Sekretärin.', 'الصيغة الاسمية beim + اسم.', 'Ausfüllen'],
      ['Die Höhe des Turms ist bekannt.', 'ارتفاع البرج معروف', 'Die Höhe von dem Turm ist bekannt.', 'الإضافة des Turms.', 'des Turms'],
      ['Der Schutz der Daten gilt.', 'حماية البيانات نافذة', 'Der Schutz von den Daten gilt.', 'der Daten لا von den.', 'der Daten'],
      ['Nach dem Prüfen kommt die Antwort.', 'بعد الفحص يأتي الجواب', 'Nach dem wir prüfen kommt die Antwort.', 'nach dem Prüfen.', 'Prüfen']
    ],
    'Beim Ausfüllen des Formulars hilft die Sekretärin. Die Höhe des Turms ist bekannt.',
    'Der Schutz der Daten ist wichtig.',
    'Schreibe drei Sätze im Nominalstil.',
    'غدًا اكتب ثلاث جمل بالأسلوب الاسمي.'),

  U('b1-u6-l6', 'B1', 'الاشتقاق', 'Wortbildung', 'orthographie',
    'Am Ende bildest du Berufsnamen und Nomen aus Verben',
    'في النهاية تصوغ أسماء المهن والأسماء من الأفعال.',
    [
      ['Die Autorin liest heute.', 'مؤنث المهنة بـ-in', 'weibliche Form -in, Plural -innen', 'Die Autorinnen liest heute.', 'الجمع -innen'],
      ['bessern und die Besserung', 'الاسم من الفعل بـ-ung', 'Verb + -ung = Nomen mit die', 'der Besserung', 'die Besserung'],
      ['frei und die Freiheit', 'الاسم من الصفة بـ-heit', 'Adjektiv + -heit = Nomen mit die', 'die Frei ohne -heit', 'die Freiheit'],
      ['bio- oder öko-', 'السابقة بشرطة', 'Präfix mit Bindestrich', 'bio oder öko ohne Bindestrich', 'bio-']
    ],
    [
      ['Die Autorin liest heute.', 'المؤلفة تقرأ اليوم', 'Die Autorin liest heute es.', 'لا ضمير زائد.', 'Autorin'],
      ['Die Besserung kommt langsam.', 'التحسّن يأتي ببطء', 'Die Besserung kommt langsam es.', 'لا ضمير زائد.', 'Besserung'],
      ['Die Freiheit ist wichtig.', 'الحرية مهمة', 'Die Freiheit ist wichtig gemacht.', 'الصفة تكفي.', 'Freiheit'],
      ['Viele Produkte heißen bio-.', 'منتجات كثيرة تُسمّى عضوية', 'Viele Produkte heißen bio.', 'السابقة بشرطة.', 'bio-']
    ],
    'Die Autorin liest heute. Die Besserung kommt langsam.',
    'Die Freiheit ist wichtig.',
    'Bilde fünf Berufsnamen mit -in.',
    'غدًا كوّن خمسة أسماء مهن بـ-in.'),

/* Unit 7 — amendment B1-L3 (DECISIONS-PENDING.md item 27). The B1 pool (entries the
   learner meets in the material and no word list names) grew to 371 after the material
   step, and one unit holds 240 headword slots (6 x 40), so unit 7 carries 240 of them:
   Betrieb · Verkehr · Haus und Handwerk · Gesundheit und Gefühle · Geld, Geräte und
   Post · Kultur und Sprache. The remaining 131 wait in tools/goethe-b1-candidates.txt. */
  U('b1-u7-l1', 'B1', 'في المؤسسة', 'Im Betrieb', 'lexik-kollokation',
    'Am Ende beschreibst du deine Arbeitsstelle und ihre Regeln',
    'في النهاية تصف مكان عملك وقواعده.',
    [
      ['Die Firma bildet jedes Jahr aus.', 'الفعل المنفصل في الآخر', 'Trennbares Verb: bildet … aus', 'Die Firma ausbildet jedes Jahr.', 'bildet … aus'],
      ['Wir besprechen den Plan.', 'besprechen بلا حرف جر', 'kein über nach besprechen', 'Wir besprechen über den Plan.', 'بلا über'],
      ['Sie beteiligt sich an der Planung.', 'sich beteiligen an', 'feste Präposition: an', 'Sie beteiligt sich die Planung.', 'an + داتيف'],
      ['Wer ist dafür verantwortlich?', 'verantwortlich dafür', 'verantwortlich für + Akkusativ', 'Wer ist verantwortlich für das?', 'dafür في السؤال']
    ],
    [
      ['Die Firma bildet zwei Lehrlinge aus.', 'الشركة تدرّب متدرّبين', 'Die Firma ausbildet zwei Lehrlinge.', 'bildet … aus.', 'aus'],
      ['Wir besprechen den Plan am Montag.', 'نناقش الخطة الاثنين', 'Wir besprechen über den Plan.', 'بلا über.', 'besprechen'],
      ['Sie beteiligt sich an der Planung.', 'تشارك في التخطيط', 'Sie beteiligt sich die Planung.', 'an + داتيف.', 'an der'],
      ['Der Betriebsrat vertritt uns.', 'مجلس العمال يمثّلنا', 'Der Betriebsrat vertritt auf uns.', 'بلا auf.', 'vertritt']
    ],
    'Die Firma bildet jedes Jahr zwei Lehrlinge aus. Wir besprechen den Plan.',
    'Ich bin für die Termine verantwortlich.',
    'Beschreibe morgen drei Regeln deiner Arbeitsstelle.',
    'غدًا صف ثلاث قواعد من مكان عملك.'),

  U('b1-u7-l2', 'B1', 'في الطريق', 'Unterwegs', 'präposition',
    'Am Ende beschreibst du einen Weg mit den richtigen Präpositionen',
    'في النهاية تصف طريقًا بحروف الجر الصحيحة.',
    [
      ['Wir fahren an die Küste.', 'الجهة إلى: an + Akkusativ', 'Richtung mit Akkusativ', 'Wir fahren an der Küste.', 'الجهة die Küste'],
      ['Das Boot liegt am Ufer.', 'الموضع: an + Dativ', 'Ort mit Dativ', 'Das Boot liegt an das Ufer.', 'الموضع dem Ufer'],
      ['Die Zuschauer warten auf den Anfang.', 'warten auf', 'feste Präposition: auf', 'Die Zuschauer warten den Anfang.', 'warten auf'],
      ['Der Zug steht am Perron.', 'Perron صيغة سويسرية', 'schweizerisch: Perron statt Bahnsteig', 'Der Zug steht auf Perron.', 'am Perron']
    ],
    [
      ['Wir fahren an die Küste.', 'نسافر إلى الساحل', 'Wir fahren an der Küste.', 'الجهة an die.', 'an die'],
      ['Das Boot liegt am Ufer.', 'القارب على الشاطئ', 'Das Boot liegt an das Ufer.', 'الموضع am.', 'am Ufer'],
      ['Ich winke dem Fahrer.', 'ألوّح للسائق', 'Ich winke auf den Fahrer.', 'winken + داتيف.', 'dem Fahrer'],
      ['Er bremst vor der Kreuzung.', 'يفرمل قبل التقاطع', 'Er bremst auf die Kreuzung.', 'bremsen بلا حرف.', 'bremst']
    ],
    'Wir fahren an die Küste. Das Boot liegt am Ufer.',
    'Der Radfahrer überholt mich.',
    'Beschreibe morgen deinen Weg zur Arbeit.',
    'غدًا صف طريقك إلى العمل.'),

  U('b1-u7-l3', 'B1', 'البيت والحرفة', 'Haus und Handwerk', 'kasus',
    'Am Ende beschreibst du eine Reparatur im Haus',
    'في النهاية تصف إصلاحًا في البيت.',
    [
      ['Der Kasten steht im Keller.', 'الموضع: in + Dativ', 'Ort mit Dativ statt auf', 'Der Kasten steht im Keller auf.', 'بلا auf'],
      ['Die Einfahrt ist gesperrt.', 'المجهول يصف العمل', 'Zustandspassiv mit sein', 'Die Einfahrt ist sperren.', 'gesperrt'],
      ['Wir heizen mit Gas.', 'heizen يحتاج mit للمادة', 'heizen mit + Dativ', 'Wir heizen auf Gas.', 'mit Gas'],
      ['Die Mauer wurde beschädigt.', 'الماضي المجهول', 'Passiv Präteritum: wurde + Partizip', 'Die Mauer wurde beschädigen.', 'beschädigt']
    ],
    [
      ['Der Kasten steht im Keller.', 'الخزانة في القبو', 'Der Kasten steht im Keller auf.', 'بلا auf.', 'im Keller'],
      ['Ich hänge die Mappe an die Wand.', 'أعلّق الملف على الحائط', 'Ich hänge die Mappe an der Wand.', 'الجهة an die Wand.', 'an die'],
      ['Die Mauer wurde beschädigt.', 'السور تضرّر', 'Die Mauer wurde beschädigen.', 'المجهول beschädigt.', 'beschädigt'],
      ['Wir reinigen die Fenster.', 'ننظّف النوافذ', 'Wir reinigen auf die Fenster.', 'بلا auf.', 'reinigen']
    ],
    'Der Kasten steht im Keller. Die Mauer wurde beschädigt.',
    'Die Einfahrt ist gesperrt.',
    'Beschreibe morgen eine Reparatur mit fünf Wörtern aus der Liste.',
    'غدًا صف إصلاحًا بخمس كلمات من القائمة.'),

  U('b1-u7-l4', 'B1', 'الصحة والمشاعر', 'Gesundheit und Gefühle', 'konjugation',
    'Am Ende sagst du was dir weh tut und wie du dich fühlst',
    'في النهاية تقول ما يؤلمك وكيف تشعر.',
    [
      ['Das Knie tut weh.', 'الألم بالفعل tun', 'wehtun: tut weh', 'Das Knie tut weh es.', 'tut weh'],
      ['Gegen Grippe hilft eine Spritze.', 'ضد: gegen', 'gegen + Akkusativ', 'Für Grippe hilft eine Spritze.', 'gegen Grippe'],
      ['Die Stimmung ist ruhig.', 'أسماء المشاعر مفردة بفعل مفرد', 'die Stimmung: Singular + ist', 'Die Stimmung sind ruhig.', 'ist'],
      ['Die Knochen werden alt.', 'الجمع مع werden', 'Plural: werden', 'Die Knochen wird alt.', 'werden']
    ],
    [
      ['Das Knie tut weh.', 'الركبة تؤلم', 'Das Knie tut weh es.', 'tut weh.', 'tut'],
      ['Gegen Grippe hilft eine Spritze.', 'ضد الإنفلونزا حقنة تنفع', 'Für Grippe hilft eine Spritze.', 'gegen لا für.', 'gegen'],
      ['Die Laune ist heute gut.', 'المزاج جيد اليوم', 'Die Laune sind heute gut.', 'الفعل مفرد.', 'ist'],
      ['Ich habe mich erkältet.', 'أصابني البرد', 'Ich habe mich erkältet gehabt.', 'الماضي: habe erkältet.', 'erkältet']
    ],
    'Das Knie tut weh. Gegen Grippe hilft eine Spritze.',
    'Ich friere am Morgen.',
    'Beschreibe morgen drei Gefühle mit je einem Satz.',
    'غدًا صف ثلاث مشاعر بجملة لكل واحدة.'),

  U('b1-u7-l5', 'B1', 'المال والأجهزة والبريد', 'Geld, Geräte und Post', 'lexik-kollokation',
    'Am Ende erklärst du einen Bank- oder Gerätefehler am Telefon',
    'في النهاية تشرح خللًا في البنك أو في جهاز عبر الهاتف.',
    [
      ['Meine EC-Karte ist gesperrt.', 'البطاقة مفرد بفعل مفرد', 'die Karte: Singular + ist', 'Meine EC-Karte sind gesperrt.', 'ist'],
      ['Am Bankomat hole ich Geld ab.', 'abholen منفصل', 'Trennbares Verb: hole … ab', 'Am Bankomat abhole ich Geld.', 'hole … ab'],
      ['Das Netzwerk ist langsam.', 'المحايد مفرد', 'das Netzwerk: Singular + ist', 'Das Netzwerk sind langsam.', 'ist'],
      ['Vor dem Herunterfahren speichere ich.', 'المصدر اسمًا في الآخر', 'Substantivierung: das Herunterfahren', 'Vor dem herunterfahren speichere ich.', 'Herunterfahren كبيرة']
    ],
    [
      ['Meine EC-Karte ist gesperrt.', 'بطاقتي موقوفة', 'Meine EC-Karte sind gesperrt.', 'الفعل مفرد.', 'ist'],
      ['Am Bankomat hole ich Geld ab.', 'أسحب المال من الصراف', 'Am Bankomat abhole ich Geld.', 'ab في الآخر.', 'ab'],
      ['Das Netzwerk ist langsam.', 'الشبكة بطيئة', 'Das Netzwerk sind langsam.', 'الفعل مفرد.', 'ist'],
      ['Die Festplatte ist fast voll.', 'القرص ممتلئ تقريبًا', 'Die Festplatte sind fast voll.', 'الفعل مفرد.', 'ist']
    ],
    'Meine EC-Karte ist gesperrt. Das Netzwerk ist langsam.',
    'Die Festplatte ist voll.',
    'Schreibe morgen drei Sätze über ein Gerät, das nicht funktioniert.',
    'غدًا اكتب ثلاث جمل عن جهاز لا يعمل.'),

  U('b1-u7-l6', 'B1', 'الثقافة واللغة', 'Kultur und Sprache', 'wortstellung',
    'Am Ende berichtest du über ein Fest und einen Sprachkurs',
    'في النهاية تحكي عن حفل ودورة لغة.',
    [
      ['Das Orchester spielt im Hof.', 'الأوركسترا مفرد بفعل مفرد', 'das Orchester: Singular + spielt', 'Das Orchester spielen im Hof.', 'spielt'],
      ['Wir legen die Termine fest.', 'festlegen منفصل', 'Trennbares Verb: legen … fest', 'Wir festlegen die Termine.', 'legen … fest'],
      ['Sie erfüllt jede Bedingung.', 'erfüllen بلا حرف جر', 'kein auf nach erfüllen', 'Sie erfüllt auf jede Bedingung.', 'بلا auf'],
      ['Die Künstlerin stellt im Herbst aus.', 'ausstellen منفصل', 'Trennbares Verb: stellt … aus', 'Die Künstlerin ausstellt im Herbst.', 'stellt … aus']
    ],
    [
      ['Das Orchester spielt im Hof.', 'الأوركسترا تعزف في الساحة', 'Das Orchester spielen im Hof.', 'الفعل مفرد.', 'spielt'],
      ['Wir legen die Termine fest.', 'نحدّد المواعيد', 'Wir festlegen die Termine.', 'fest في الآخر.', 'fest'],
      ['Sie erfüllt jede Bedingung.', 'تستوفي كل شرط', 'Sie erfüllt auf jede Bedingung.', 'بلا auf.', 'erfüllt'],
      ['Die Kursleiterin kommt aus Wien.', 'منشّطة الدورة من فيينا', 'Die Kursleiterin kommen aus Wien.', 'الفعل مفرد.', 'kommt']
    ],
    'Das Orchester spielt im Hof. Die Künstlerin stellt im Herbst aus.',
    'Wir legen die Termine fest.',
    'Berichte morgen über ein Fest in deiner Stadt.',
    'غدًا احكِ عن حفل في مدينتك.'),

  U('b1-u8-l1', 'B1', 'البيت والانتقال', 'Haus und Umzug', 'lexik-kollokation',
    'Am Ende beschreibst du eine Wohnung und einen Umzug',
    'في النهاية تصف شقة وانتقالًا.',
    [
      ['Die Couch steht im Wohnzimmer.', 'الأثاث مفرد بفعل مفرد', 'die Couch: Singular + steht', 'Die Couch stehen im Wohnzimmer.', 'steht'],
      ['Die Wohnung liegt in der dritten Etage.', 'الطابق بـ in + داتيف', 'in der Etage, nicht auf', 'Die Wohnung liegt auf der dritten Etage.', 'in der'],
      ['Der Abwart hilft beim Umzug.', 'الصيغة السويسرية معروفة', 'der Abwart = Hausmeister', 'Der Abwart helfen beim Umzug.', 'hilft'],
      ['Die Wohnung ist möbliert.', 'الصفة تكفي بلا gemacht', 'möbliert ohne Zusatz', 'Die Wohnung ist möbliert gemacht.', 'möbliert']
    ],
    [
      ['Die Fläche ist klein, aber hell.', 'المساحة صغيرة لكن مضيئة', 'Die Fläche sind klein, aber hell.', 'الفعل مفرد.', 'ist'],
      ['Die Mülltonne steht hinter dem Haus.', 'الحاوية خلف البيت', 'Die Mülltonne stehen hinter dem Haus.', 'الفعل مفرد.', 'steht'],
      ['Der Wohnsitz steht im Vertrag.', 'محل الإقامة في العقد', 'Der Wohnsitz stehen im Vertrag.', 'الفعل مفرد.', 'steht'],
      ['Das Ehepaar wohnt über uns.', 'الزوجان يسكنان فوقنا', 'Das Ehepaar wohnen über uns.', 'das Ehepaar مفرد.', 'wohnt']
    ],
    'Die Couch steht im Wohnzimmer. Die Wohnung liegt in der dritten Etage.',
    'Die Wohnung ist möbliert.',
    'Beschreibe morgen deine Wohnung in fünf Sätzen.',
    'غدًا صف شقتك في خمس جمل.'),

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

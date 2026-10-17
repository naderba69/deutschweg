function U(id, level, ar, de, fam, goalDe, goalAr, facts, lex, model, say, hwDe, hwAr, options) {
  return Object.assign({ id, level, ar, de, fam, goalDe, goalAr, facts, lex, model, say, hwDe, hwAr }, options || {});
}
module.exports = [
  U('a2-u1-l1', 'A2', 'حالة الداتيف', 'Dativ', 'kasus',
    'Am Ende verwendest du dem, der und den in fünf vollständigen Dativsätzen',
    'في النهاية تستعمل dem وder وden في خمس جمل داتيف كاملة.',
    [
      ['Ich helfe dem Nachbarn im Garten.', 'تستعمل dem مع الاسم المذكر بعد helfen', 'helfen يأخذ الداتيف، وNachbar يأخذ n: dem Nachbarn', 'Ich helfe die Nachbarn im Garten.', 'بعد helfen نحتاج هنا dem Nachbarn'],
      ['Ich danke der Lehrerin für ihre Hilfe.', 'تستعمل der مع الاسم المؤنث بعد danken', 'danken يأخذ الداتيف، والمؤنث يأخذ der', 'Ich danke die Lehrerin für ihre Hilfe.', 'بعد danken نقول der Lehrerin لا die Lehrerin'],
      ['Ich gebe dem Kind ein Buch.', 'تستعمل dem مع الاسم المحايد المستفيد من الإعطاء', 'الشخص المستفيد يأتي هنا في الداتيف: dem Kind', 'Ich gebe das Kind ein Buch.', 'المستفيد هو dem Kind لا das Kind'],
      ['Die Wohnung gefällt den Kindern.', 'تستعمل den مع جمع الداتيف وتضيف n إلى Kinder', 'جمع الداتيف هنا den Kindern', 'Die Wohnung gefällt die Kinder.', 'مع gefallen نحتاج جمع الداتيف den Kindern']
    ],
    [
      ['Ich helfe dem Nachbarn im Garten.', 'أساعد الجار في الحديقة', 'Ich helfe die Nachbarn im Garten.', 'بعد helfen نحتاج هنا dem Nachbarn', 'dem'],
      ['Ich danke der Lehrerin für ihre Hilfe.', 'أشكر المعلمة على مساعدتها', 'Ich danke die Lehrerin für ihre Hilfe.', 'بعد danken نستخدم الداتيف der Lehrerin', 'der'],
      ['Ich gebe dem Kind ein Buch.', 'أعطي الطفل كتابًا', 'Ich gebe das Kind ein Buch.', 'المستفيد يأتي في الداتيف dem Kind', 'dem'],
      ['Ich fahre mit dem Bus zur Arbeit.', 'أذهب إلى العمل بالحافلة', 'Ich fahre mit der Bus zur Arbeit.', 'mit يأخذ الداتيف، وBus مذكر: dem Bus', 'dem']
    ],
    'Ich gebe dem Kind ein Buch.',
    'Ich gebe dem Kind ein Buch.',
    'Wiederhole morgen die fünf Sätze: Ich helfe dem Nachbarn im Garten. Ich danke der Lehrerin für ihre Hilfe. Ich gebe dem Kind ein Buch. Die Wohnung gefällt den Kindern. Ich fahre mit dem Bus zur Arbeit.',
    'غدًا راجع الجمل الخمس مع dem وder وden.',
    {
      factFamilies: ['kasus', 'kasus', 'kasus', 'kasus'],
      writing: {
        zeigt: 'Fünf Dativsätze',
        erklaerung: 'اكتب الجمل الخمس كاملة مع المذكر والمؤنث والمحايد والجمع وحرف mit.',
        prompt: 'اكتب الجمل الخمس مستعملًا صيغ الداتيف الصحيحة.',
        promptDe: 'Ich helfe dem Nachbarn im Garten. · Ich danke der Lehrerin für ihre Hilfe. · Ich gebe dem Kind ein Buch. · Die Wohnung gefällt den Kindern. · Ich fahre mit dem Bus zur Arbeit.',
        points: ['Ich helfe dem Nachbarn im Garten.', 'Ich danke der Lehrerin für ihre Hilfe.', 'Ich gebe dem Kind ein Buch.', 'Die Wohnung gefällt den Kindern.', 'Ich fahre mit dem Bus zur Arbeit.'],
        minWords: 31,
        frage: 'اكتب الجمل الخمس كاملة مع dem Nachbarn وder Lehrerin وdem Kind وden Kindern وmit dem Bus.',
        familie: 'kasus',
        hinweise: ['راجع dem للمذكر والمحايد وder للمؤنث.', 'في الجمع استعمل den Kindern، وبعد mit استعمل dem Bus.']
      },
      imitateNearMiss: 'die',
      transformHint: 'المستفيد يأتي في الداتيف: dem Kind.',
      orderAr: 'رتّب جملة الإعطاء: ابدأ بـ Ich gebe ثم dem Kind ثم ein Buch.',
      orderHints: ['ابدأ بـ Ich وضع gebe في الموضع الثاني.', 'ضع المستفيد dem Kind قبل الشيء ein Buch.'],
      orderSentence: 'Ich gebe dem Kind ein Buch.',
      checkOrderSentence: 'Ich gebe dem Kind ein Buch.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة إعطاء صحيحة.',
      speakAr: 'سجّل عشرين ثانية: قل Ich helfe dem Nachbarn im Garten وIch danke der Lehrerin für ihre Hilfe وIch gebe dem Kind ein Buch وDie Wohnung gefällt den Kindern وIch fahre mit dem Bus zur Arbeit.',
      summaryDe: 'Ich helfe dem Nachbarn im Garten. · Ich danke der Lehrerin für ihre Hilfe. · Ich gebe dem Kind ein Buch. · Die Wohnung gefällt den Kindern. · Ich fahre mit dem Bus zur Arbeit.',
      summaryAr: 'راجع dem Nachbarn وder Lehrerin وdem Kind وden Kindern وmit dem Bus.',
      summaryRecap: 'dem der dem den mit'
    }),

  U('a2-u1-l2', 'A2', 'أفعال مع الداتيف', 'Verben mit Dativ', 'kasus',
    'Am Ende verwendest du fünf Verben mit Dativ in vollständigen Sätzen',
    'في النهاية تستعمل خمسة أفعال مع الداتيف في جمل كاملة.',
    [
      ['Kannst du mir bitte helfen?', 'تستعمل mir مع helfen', 'الشخص بعد helfen يأتي في الداتيف: mir', 'Kannst du mich bitte helfen?', 'بعد helfen نقول mir لا mich'],
      ['Das Buch gehört mir.', 'تستعمل mir مع gehören لتحديد المالك', 'المالك بعد gehören يأتي في الداتيف: mir', 'Das Buch gehört mich.', 'بعد gehören نقول mir لا mich'],
      ['Wir zeigen dem Kunden die Ware.', 'تستعمل dem Kunden للمستلم مع zeigen', 'المستلم داتيف، وKunde اسم مذكر ضعيف: dem Kunden', 'Wir zeigen dem Kunde die Ware.', 'نضيف n إلى Kunde هنا: dem Kunden'],
      ['Der Termin passt mir gut.', 'تستعمل mir مع passen للشخص الذي يناسبه الموعد', 'الشخص بعد passen يأتي في الداتيف: mir', 'Der Termin passt mich gut.', 'بعد passen نقول mir لا mich']
    ],
    [
      ['Ich gebe dir das Buch.', 'أعطيك الكتاب', 'Ich gebe dich das Buch.', 'المستلم يأتي في الداتيف: dir', 'dir'],
      ['Das Buch gehört mir.', 'الكتاب لي', 'Das Buch gehört mich.', 'المالك يأتي مع gehören في الداتيف: mir', 'mir'],
      ['Wir zeigen dem Kunden die Ware.', 'نُري العميل البضاعة', 'Wir zeigen den Kunde die Ware.', 'المستلم يأتي مع zeigen في الداتيف: dem Kunden', 'Kunden'],
      ['Kannst du mir bitte helfen?', 'هل تستطيع مساعدتي؟', 'Kannst du mich bitte helfen?', 'بعد helfen نستخدم mir', 'mir']
    ],
    'Das Buch gehört mir.',
    'Der Termin passt mir gut.',
    'Wiederhole morgen die fünf Sätze: Kannst du mir bitte helfen? Ich gebe dir das Buch. Das Buch gehört mir. Der Termin passt mir gut. Wir zeigen dem Kunden die Ware.',
    'غدًا راجع الجمل الخمس مع helfen وgeben وgehören وpassen وzeigen.',
    {
      factFamilies: ['kasus', 'kasus', 'deklination', 'kasus'],
      writing: {
        zeigt: 'Fünf Sätze mit Verben und Dativ',
        erklaerung: 'اكتب الجمل الخمس كاملة مع mir وdir وdem Kunden.',
        prompt: 'اكتب الجمل الخمس مستعملًا فعل الداتيف والصيغة الصحيحة.',
        promptDe: 'Kannst du mir bitte helfen? · Ich gebe dir das Buch. · Das Buch gehört mir. · Der Termin passt mir gut. · Wir zeigen dem Kunden die Ware.',
        points: ['Kannst du mir bitte helfen?', 'Ich gebe dir das Buch.', 'Das Buch gehört mir.', 'Der Termin passt mir gut.', 'Wir zeigen dem Kunden die Ware.'],
        minWords: 25,
        frage: 'اكتب الجمل الخمس كاملة مع mir وdir وdem Kunden.',
        familie: 'kasus',
        hinweise: ['بعد helfen وgehören وpassen استعمل mir.', 'مع geben استعمل dir، ومع zeigen استعمل dem Kunden.']
      },
      imitateNearMiss: 'dich',
      transformHint: 'الشخص بعد passen يأتي في الداتيف: mir.',
      orderAr: 'رتّب جملة الملكية: ابدأ بـ Das Buch ثم gehört ثم mir.',
      orderHints: ['ابدأ بالشيء Das Buch وضع gehört في الموضع الثاني.', 'ضع المالك mir بعد الفعل.'],
      orderSentence: 'Das Buch gehört mir.',
      checkOrderSentence: 'Das Buch gehört mir.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة ملكية صحيحة.',
      speakAr: 'سجّل عشرين ثانية: قل Kannst du mir bitte helfen وIch gebe dir das Buch وDas Buch gehört mir وDer Termin passt mir gut وWir zeigen dem Kunden die Ware.',
      summaryDe: 'Kannst du mir bitte helfen? · Ich gebe dir das Buch. · Das Buch gehört mir. · Der Termin passt mir gut. · Wir zeigen dem Kunden die Ware.',
      summaryAr: 'راجع mir مع helfen وgehören وpassen، وdir مع geben، وdem Kunden مع zeigen.',
      summaryRecap: 'helfen geben gehören passen zeigen'
    }),

  U('a2-u1-l3', 'A2', 'حروف الجرّ ثنائية الحالة', 'Wechselpräpositionen', 'präposition',
    'Am Ende verwendest du an, auf und in mit Dativ für Orte und Akkusativ für Ziele',
    'في النهاية تستعمل an وauf وin مع الداتيف للمكان ومع النصب للوجهة.',
    [
      ['Das Bild hängt an der Wand.', 'تستعمل an مع الداتيف لوصف مكان الصورة', 'السؤال Wo? والمكان مع an يحتاجان هنا an der Wand', 'Das Bild hängt an die Wand.', 'لوصف المكان نقول an der Wand'],
      ['Ich hänge das Bild an die Wand.', 'تستعمل an مع النصب عندما يكون الجدار وجهة الصورة', 'السؤال Wohin? والوجهة مع an يحتاجان هنا an die Wand', 'Ich hänge das Bild an den Wand.', 'Wand مؤنث؛ عندما يكون الجدار هو الوجهة نقول an die Wand'],
      ['Ich lege das Buch auf den Tisch.', 'تستعمل auf مع النصب عندما تكون الطاولة وجهة الكتاب', 'السؤال Wohin? والوجهة مع auf يحتاجان هنا auf den Tisch', 'Ich lege das Buch auf der Tisch.', 'Tisch مذكر؛ عندما تكون الطاولة هي الوجهة نقول auf den Tisch'],
      ['Ich stelle die Bücher ins Regal.', 'تستعمل in مع النصب عندما يكون الرف وجهة الكتب', 'ins اختصار in das، وهو نصب للوجهة هنا', 'Ich stelle die Bücher in den Regal.', 'Regal محايد؛ عندما يكون وجهة نقول in das Regal أو ins Regal']
    ],
    [
      ['Das Bild hängt an der Wand.', 'الصورة معلقة على الحائط', 'Das Bild hängt an die Wand.', 'المكان مع an يأتي هنا في الداتيف: an der Wand', 'der'],
      ['Ich hänge das Bild an die Wand.', 'أعلّق الصورة على الحائط', 'Ich hänge das Bild an den Wand.', 'Wand مؤنث؛ الوجهة مع an تأتي هنا في النصب: an die Wand', 'die'],
      ['Das Buch liegt auf dem Tisch.', 'الكتاب موجود على الطاولة', 'Das Buch liegt auf den Tisch.', 'المكان مع auf يأتي هنا في الداتيف: auf dem Tisch', 'dem'],
      ['Ich lege das Buch auf den Tisch.', 'أضع الكتاب على الطاولة', 'Ich lege das Buch auf der Tisch.', 'Tisch مذكر؛ الوجهة مع auf تأتي هنا في النصب: auf den Tisch', 'den']
    ],
    'Das Buch liegt auf dem Tisch.',
    'Ich stelle die Bücher ins Regal.',
    'Wiederhole morgen die fünf Sätze: Das Bild hängt an der Wand. Ich hänge das Bild an die Wand. Das Buch liegt auf dem Tisch. Ich lege das Buch auf den Tisch. Ich stelle die Bücher ins Regal.',
    'غدًا راجع الجمل الخمس التي تميّز المكان من الوجهة.',
    {
      factFamilies: ['präposition', 'präposition', 'präposition', 'präposition'],
      writing: {
        zeigt: 'Fünf Sätze mit Wechselpräpositionen',
        erklaerung: 'اكتب الجمل الخمس كاملة مع an وauf وin في الحالة الصحيحة.',
        prompt: 'اكتب الجمل الخمس مستعملًا الداتيف للمكان والنصب للوجهة.',
        promptDe: 'Das Bild hängt an der Wand. · Ich hänge das Bild an die Wand. · Das Buch liegt auf dem Tisch. · Ich lege das Buch auf den Tisch. · Ich stelle die Bücher ins Regal.',
        points: ['Das Bild hängt an der Wand.', 'Ich hänge das Bild an die Wand.', 'Das Buch liegt auf dem Tisch.', 'Ich lege das Buch auf den Tisch.', 'Ich stelle die Bücher ins Regal.'],
        minWords: 32,
        frage: 'اكتب الجمل الخمس كاملة: جملتا مكان وثلاث جمل وجهة.',
        familie: 'präposition',
        hinweise: ['اسأل Wo للمكان وWohin للوجهة.', 'راجع an der/an die وauf dem/auf den وins Regal.']
      },
      imitateNearMiss: 'die',
      transformHint: 'عندما يكون الرف هو الوجهة نقول ins Regal.',
      orderAr: 'رتّب جملة الوجهة: ابدأ بـ Ich lege ثم das Buch ثم auf den Tisch.',
      orderHints: ['ابدأ بـ Ich وضع lege في الموضع الثاني.', 'ضع الشيء das Buch قبل الوجهة auf den Tisch.'],
      orderSentence: 'Ich lege das Buch auf den Tisch.',
      checkOrderSentence: 'Ich lege das Buch auf den Tisch.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة وجهة صحيحة.',
      speakAr: 'سجّل عشرين ثانية: قل Das Bild hängt an der Wand وIch hänge das Bild an die Wand وDas Buch liegt auf dem Tisch وIch lege das Buch auf den Tisch وIch stelle die Bücher ins Regal.',
      summaryDe: 'Das Bild hängt an der Wand. · Ich hänge das Bild an die Wand. · Das Buch liegt auf dem Tisch. · Ich lege das Buch auf den Tisch. · Ich stelle die Bücher ins Regal.',
      summaryAr: 'راجع المكان an der Wand وauf dem Tisch، والوجهة an die Wand وauf den Tisch وins Regal.',
      summaryRecap: 'Wo Dativ Wohin Akkusativ'
    }),

  U('a2-u1-l4', 'A2', 'التعليل بـ weil', 'Gründe mit weil', 'wortstellung',
    'Am Ende bildest du weil-Sätze mit dem finiten Verb am Ende und unterscheidest sie von denn und deshalb mit Verbzweitstellung',
    'في النهاية تبني جمل weil بالفعل المصرف في النهاية وتميّزها عن denn وdeshalb مع الفعل في الموضع الثاني.',
    [
      ['Ich komme nicht, weil ich krank bin.', 'تربط السبب بـ weil ويأتي الفعل المصرف في نهاية الجملة الثانوية', 'في الجملة الثانوية البسيطة يأتي bin بعد krank', 'Ich komme nicht, weil ich bin krank.', 'بعد weil نقول weil ich krank bin'],
      ['Ich lerne viel, weil die Prüfung morgen ist.', 'يمكن أن يسبق الظرفُ الفعلَ المصرف في جملة weil', 'morgen يسبق ist، ويبقى ist في النهاية', 'Ich lerne viel, weil ist die Prüfung morgen.', 'بعد weil نقول weil die Prüfung morgen ist'],
      ['Der Bus kommt später, weil ein Verkehrsunfall passiert ist.', 'في Perfekt يأتي اسم المفعول قبل الفعل المساعد المصرف في النهاية', 'في هذا المثال الترتيب passiert ist', 'Der Bus kommt später, weil ein Verkehrsunfall ist passiert.', 'في جملة weil نقول passiert ist'],
      ['Ich komme nicht, denn ich bin krank.', 'denn تربط السبب من دون تحويل الجملة التالية إلى جملة ثانوية', 'بعد denn يبقى الفعل المصرف في الموضع الثاني: ich bin', 'Ich komme nicht, denn ich krank bin.', 'بعد denn نقول ich bin krank بترتيب الجملة الرئيسية']
    ],
    [
      ['Ich komme nicht, weil ich krank bin.', 'لا آتي لأنني مريض', 'Ich komme nicht, weil ich bin krank.', 'بعد weil يأتي الفعل المصرف bin في النهاية', 'bin'],
      ['Ich lerne viel, weil die Prüfung morgen ist.', 'أدرس كثيرًا لأن الامتحان غدًا', 'Ich lerne viel, weil ist die Prüfung morgen.', 'في جملة weil يأتي ist بعد morgen في النهاية', 'ist'],
      ['Er kommt früher, weil er pünktlich sein will.', 'يأتي أبكر لأنه يريد أن يكون في الموعد', 'Er kommt früher, weil will er pünktlich sein.', 'مع الفعل الناقص يأتي المصدر sein قبل الفعل المصرف will في النهاية', 'will'],
      ['Der Bus kommt später, weil ein Verkehrsunfall passiert ist.', 'تأتي الحافلة متأخرة لأن حادث مرور وقع', 'Der Bus kommt später, weil ein Verkehrsunfall ist passiert.', 'في Perfekt يأتي passiert قبل الفعل المساعد المصرف ist', 'ist']
    ],
    'Er kommt früher, weil er pünktlich sein will.',
    'Ich lerne viel, weil die Prüfung morgen ist.',
    'Wiederhole morgen die fünf Sätze: Ich komme nicht, weil ich krank bin. Ich lerne viel, weil die Prüfung morgen ist. Er kommt früher, weil er pünktlich sein will. Der Bus kommt später, weil ein Verkehrsunfall passiert ist. Ich komme nicht, denn ich bin krank.',
    'غدًا راجع الجمل الخمس مع weil وdenn.',
    {
      factFamilies: ['wortstellung', 'wortstellung', 'wortstellung', 'wortstellung'],
      writing: {
        zeigt: 'Fünf Gründe mit weil und denn',
        erklaerung: 'اكتب الجمل الخمس كاملة مع ترتيب الفعل الصحيح بعد weil وdenn.',
        prompt: 'اكتب الجمل الخمس: أربع جمل بـ weil وجملة واحدة بـ denn.',
        promptDe: 'Ich komme nicht, weil ich krank bin. · Ich lerne viel, weil die Prüfung morgen ist. · Er kommt früher, weil er pünktlich sein will. · Der Bus kommt später, weil ein Verkehrsunfall passiert ist. · Ich komme nicht, denn ich bin krank.',
        points: ['Ich komme nicht, weil ich krank bin.', 'Ich lerne viel, weil die Prüfung morgen ist.', 'Er kommt früher, weil er pünktlich sein will.', 'Der Bus kommt später, weil ein Verkehrsunfall passiert ist.', 'Ich komme nicht, denn ich bin krank.'],
        minWords: 39,
        frage: 'اكتب الجمل الخمس كاملة: أربع جمل سبب بـ weil وجملة سبب واحدة بـ denn.',
        familie: 'wortstellung',
        hinweise: ['بعد weil ضع الفعل المصرف في النهاية.', 'بعد denn أبقِ الفعل المصرف في الموضع الثاني.']
      },
      imitateNearMiss: 'ist',
      transformHint: 'مع الفعل الناقص يأتي sein قبل will في نهاية جملة weil.',
      orderAr: 'رتّب الجملة كاملة: الجملة الرئيسية أولًا، ثم weil، ثم passiert ist في النهاية.',
      orderHints: ['ابدأ بـ Der Bus kommt später ثم ضع الفاصلة.', 'بعد weil رتّب ein Verkehrsunfall passiert ist.'],
      orderSentence: 'Der Bus kommt später, weil ein Verkehrsunfall passiert ist.',
      checkOrderSentence: 'Der Bus kommt später, weil ein Verkehrsunfall passiert ist.',
      orderPromptAr: 'رتّب جملة السبب مع Perfekt ترتيبًا صحيحًا.',
      speakAr: 'سجّل عشرين ثانية: قل Ich komme nicht, weil ich krank bin وIch lerne viel, weil die Prüfung morgen ist وEr kommt früher, weil er pünktlich sein will وDer Bus kommt später, weil ein Verkehrsunfall passiert ist وIch komme nicht, denn ich bin krank.',
      summaryDe: 'Ich komme nicht, weil ich krank bin. · Ich lerne viel, weil die Prüfung morgen ist. · Er kommt früher, weil er pünktlich sein will. · Der Bus kommt später, weil ein Verkehrsunfall passiert ist. · Ich komme nicht, denn ich bin krank.',
      summaryAr: 'راجع أربع جمل weil بالفعل المصرف في النهاية، ثم قارنها بجملة denn ذات ترتيب الفعل في الموضع الثاني.',
      summaryRecap: 'weil Verbende denn Verbzweit'
    }),

  U('a2-u1-l5', 'A2', 'نقل الأقوال والأفكار بـ dass', 'Aussagen mit dass', 'wortstellung',
    'Am Ende leitest du einen dass-Satz ein und stellst das finite Verb ans Ende',
    'في النهاية تبدأ جملة بـ dass وتضع الفعل المصرف في نهايتها.',
    [
      ['Ich denke, dass die Idee gut ist.', 'تنقل الفكرة جملةً ثانوية بـ dass، ويأتي الفعل المصرف ist في نهايتها', 'بعد dass نقول die Idee gut ist', 'Ich denke, dass die Idee ist gut.', 'في جملة dass يأتي ist بعد gut في النهاية'],
      ['Ich weiß, dass der Termin morgen ist.', 'تفصل فاصلة بين الجملة الرئيسية وجملة dass اللاحقة، ويبقى ist في النهاية', 'الفاصلة تسبق dass، وmorgen يسبق ist', 'Ich weiß dass der Termin ist morgen.', 'نكتب فاصلة قبل dass ونضع ist بعد morgen'],
      ['Sie sagt, dass sie die Rechnung bezahlt hat.', 'في Perfekt يأتي اسم المفعول bezahlt قبل الفعل المساعد المصرف hat في النهاية', 'مجموعة Perfekt في هذا المثال هي bezahlt hat', 'Sie sagt, dass sie die Rechnung hat bezahlt.', 'في جملة dass نقول bezahlt hat'],
      ['Ich hoffe, dass du morgen anrufst.', 'يبقى الفعل المنفصل متصلًا في جملة dass ويأتي مصرفًا في النهاية', 'anrufen يصبح anrufst ولا ينفصل داخل جملة dass', 'Ich hoffe, dass du rufst morgen an.', 'بعد dass نقول dass du morgen anrufst']
    ],
    [
      ['Ich denke, dass die Idee gut ist.', 'أعتقد أن الفكرة جيدة', 'Ich denke, dass die Idee ist gut.', 'في جملة dass يأتي ist بعد gut في النهاية', 'ist'],
      ['Ich weiß, dass der Termin morgen ist.', 'أعرف أن الموعد غدًا', 'Ich weiß dass der Termin ist morgen.', 'نكتب فاصلة قبل dass ونضع ist بعد morgen', 'ist'],
      ['Er meint, dass wir warten sollen.', 'يرى أنه ينبغي لنا أن ننتظر', 'Er meint, dass wir sollen warten.', 'مع الفعل الناقص يأتي المصدر warten قبل الفعل المصرف sollen في النهاية', 'sollen'],
      ['Sie sagt, dass sie die Rechnung bezahlt hat.', 'تقول إنها دفعت الفاتورة', 'Sie sagt, dass sie die Rechnung hat bezahlt.', 'في Perfekt يأتي bezahlt قبل الفعل المساعد المصرف hat', 'hat']
    ],
    'Er meint, dass wir warten sollen.',
    'Er meint, dass wir warten sollen.',
    'Wiederhole morgen die fünf Sätze: Ich denke, dass die Idee gut ist. Ich weiß, dass der Termin morgen ist. Er meint, dass wir warten sollen. Sie sagt, dass sie die Rechnung bezahlt hat. Ich hoffe, dass du morgen anrufst.',
    'غدًا راجع جمل dass الخمس مع الفعل المصرف في النهاية.',
    {
      factFamilies: ['wortstellung', 'wortstellung', 'wortstellung', 'wortstellung'],
      writing: {
        zeigt: 'Fünf Aussagen mit dass',
        erklaerung: 'اكتب جمل dass الخمس كاملة مع ترتيب الفعل الصحيح.',
        prompt: 'اكتب الجمل الخمس: جملتان بسيطتان، وجملة modal، وجملة Perfekt، وجملة بفعل منفصل.',
        promptDe: 'Ich denke, dass die Idee gut ist. · Ich weiß, dass der Termin morgen ist. · Er meint, dass wir warten sollen. · Sie sagt, dass sie die Rechnung bezahlt hat. · Ich hoffe, dass du morgen anrufst.',
        points: ['Ich denke, dass die Idee gut ist.', 'Ich weiß, dass der Termin morgen ist.', 'Er meint, dass wir warten sollen.', 'Sie sagt, dass sie die Rechnung bezahlt hat.', 'Ich hoffe, dass du morgen anrufst.'],
        minWords: 34,
        frage: 'اكتب جمل dass الخمس كاملة بالفعل المصرف في النهاية.',
        familie: 'wortstellung',
        hinweise: ['ضع فاصلة قبل dass.', 'اختم الجملة الثانوية بـ ist أو sollen أو hat أو anrufst بحسب النموذج.']
      },
      imitateNearMiss: 'sind',
      transformHint: 'مع الفعل الناقص يأتي المصدر warten قبل sollen في نهاية جملة dass.',
      orderAr: 'رتّب الجملة كاملة: الجملة الرئيسية أولًا، ثم dass، ثم bezahlt hat في النهاية.',
      orderHints: ['ابدأ بـ Sie sagt ثم ضع الفاصلة.', 'بعد dass رتّب sie die Rechnung bezahlt hat.'],
      orderSentence: 'Sie sagt, dass sie die Rechnung bezahlt hat.',
      checkOrderSentence: 'Sie sagt, dass sie die Rechnung bezahlt hat.',
      orderPromptAr: 'رتّب جملة dass مع Perfekt ترتيبًا صحيحًا.',
      speakAr: 'سجّل عشرين ثانية: قل Ich denke, dass die Idee gut ist وIch weiß, dass der Termin morgen ist وEr meint, dass wir warten sollen وSie sagt, dass sie die Rechnung bezahlt hat وIch hoffe, dass du morgen anrufst.',
      summaryDe: 'Ich denke, dass die Idee gut ist. · Ich weiß, dass der Termin morgen ist. · Er meint, dass wir warten sollen. · Sie sagt, dass sie die Rechnung bezahlt hat. · Ich hoffe, dass du morgen anrufst.',
      summaryAr: 'راجع جمل dass الخمس: فعل بسيط وmodal وPerfekt وفعل منفصل، مع الفعل المصرف في النهاية.',
      summaryRecap: 'dass Komma Verbende'
    }),

  U('a2-u1-l6', 'A2', 'إذا', 'wenn', 'wortstellung',
    'Am Ende bildest du einen wenn-Satz mit Verb am Ende',
    'في النهاية تبني جملة wenn والفعل في الآخر.',
    [
      ['wenn plus Ende', 'wenn يرسل الفعل إلى الآخر', 'wenn ich habe Zeit خطأ', 'wenn ich habe Zeit', 'habe ليس ثانيًا'],
      ['wenn ist nicht wann', 'wann للسؤال وwenn للشرط', 'لا خلط', 'Wann ich Zeit habe, komme ich als Frage falsch', 'الشرط wenn'],
      ['Hauptsatz bleibt V2', 'الجملة الرئيسية تبقى V2', 'komme ich لا ich komme nach إذا تقدم الشرط', 'Wenn ich Zeit habe, ich komme', 'الفعل أول الرئيسية إن تقدم الشرط'],
      ['kein if', 'if ليست الأداة', 'wenn هي الأداة', 'If ich Zeit habe', 'if إنجليزية']
    ],
    [
      ['Wenn ich Zeit habe, komme ich.', 'إذا كان عندي وقت آتي', 'Wenn ich habe Zeit, komme ich', 'habe في الآخر', 'habe'],
      ['Wenn es regnet, bleibe ich.', 'إذا أمطرت أبقى', 'Wann es regnet, bleibe ich', 'الشرط wenn', 'Wenn'],
      ['Ich komme, wenn ich kann.', 'آتي إذا استطعت', 'Ich komme, wenn ich kann heute vor kann', 'kann في الآخر', 'kann'],
      ['Wenn du willst, gehen wir.', 'إذا أردت ذهبنا', 'If du willst, gehen wir', 'wenn لا if', 'willst']
    ],
    'Wenn ich Zeit habe, komme ich.',
    'Wenn es regnet, bleibe ich.',
    'Schreibe morgen einen wenn-Satz.',
    'غدًا اكتب جملة wenn.'),

  U('a2-u2-l1', 'A2', 'المقارنة', 'Komparativ', 'deklination',
    'Am Ende vergleichst du zwei Dinge mit als',
    'في النهاية تقارن شيئين بـ als.',
    [
      ['größer als', 'المقارنة als لا wie', 'wie للمساواة', 'größer wie', 'wie هنا خطأ'],
      ['gern, lieber', 'liebe المقارنة من gern هي lieber', 'لا gerner', 'gerner', 'الصيغة lieber'],
      ['gut, besser', 'gut تصبح besser', 'لا guter', 'guter als', 'الشاذ besser'],
      ['viel, mehr', 'viel تصبح mehr', 'لا vieler', 'vieler als', 'الشاذ mehr']
    ],
    [
      ['Das ist größer als meins.', 'هذا أكبر من الذي عندي', 'Das ist größer wie meins', 'المقارنة als', 'als'],
      ['Ich trinke lieber Tee.', 'أفضل الشاي', 'Ich trinke gerner Tee', 'المقارنة lieber', 'lieber'],
      ['Dieser Weg ist besser.', 'هذا الطريق أفضل', 'Dieser Weg ist guter', 'الشاذ besser', 'besser'],
      ['Ich habe mehr Zeit.', 'عندي وقت أكثر', 'Ich habe vieler Zeit', 'الشاذ mehr', 'mehr']
    ],
    'Das ist größer als meins, und ich trinke lieber Tee.',
    'Das ist größer als meins.',
    'Vergleiche morgen zwei Dinge mit als.',
    'غدًا قارن شيئين بـ als.'),

  U('a2-u2-l2', 'A2', 'صيغة التفضيل', 'Superlativ', 'deklination',
    'Am Ende bildest du den Superlativ mit am und sten',
    'في النهاية تبني صيغة التفضيل.',
    [
      ['am größten', 'التفضيل am plus sten', 'لا the größte als Prädikat so', 'das größte als Satz ohne am hier', 'الخبر am größten'],
      ['am besten', 'gut تصبح am besten', 'لا am gutsten', 'am gutsten', 'الشاذ besten'],
      ['am liebsten', 'أعلى gern هي am liebsten', 'لا am gernsten', 'am gernsten', 'الصيغة liebsten'],
      ['der höchste Berg', 'قبل الاسم الأداة والنهاية', 'لا am höchste Berg', 'am höchste Berg', 'قبل الاسم شكل مختلف']
    ],
    [
      ['Das gefällt mir am besten.', 'هذا أكثر ما يعجبني', 'Das gefällt mir am gutsten', 'الشاذ besten', 'besten'],
      ['Er ist am größten.', 'هو الأكبر', 'Er ist am großsten falsch ohne Umlaut', 'الحركة größten', 'größten'],
      ['Ich trinke am liebsten Wasser.', 'أفضل الماء أكثر شيء', 'Ich trinke am gernsten Wasser', 'الصيغة liebsten', 'liebsten'],
      ['Das ist der höchste Turm.', 'هذا أعلى برج', 'Das ist am höchste Turm', 'قبل الاسم der höchste', 'höchste']
    ],
    'Das gefällt mir am besten.',
    'Ich trinke am liebsten Wasser.',
    'Bilde morgen am besten und am liebsten.',
    'غدًا كوّن am besten وam liebsten.'),

  U('a2-u2-l3', 'A2', 'نهاية الصفة في الرفع', 'Adjektiv Nominativ', 'deklination',
    'Am Ende setzt du die Adjektivendung im Nominativ',
    'في النهاية تضع نهاية الصفة في الرفع.',
    [
      ['der kleine Mann', 'بعد der النهاية e', 'لا der kleiner Mann', 'der kleiner Mann', 'بعد der: e'],
      ['ein kleiner Mann', 'بعد ein النهاية er', 'لا ein kleine Mann', 'ein kleine Mann', 'بعد ein: er'],
      ['eine kleine Frau', 'بعد eine النهاية e', 'لا eine kleiner Frau', 'eine kleiner Frau', 'المؤنث e'],
      ['das kleine Kind', 'بعد das النهاية e', 'لا das kleiner Kind', 'das kleiner Kind', 'بعد das: e']
    ],
    [
      ['Der kleine Mann wartet.', 'الرجل الصغير ينتظر', 'Der kleiner Mann wartet', 'بعد der النهاية e', 'kleine'],
      ['Ein kleiner Mann wartet.', 'رجل صغير ينتظر', 'Ein kleine Mann wartet', 'بعد ein النهاية er', 'kleiner'],
      ['Eine kleine Frau wartet.', 'امرأة صغيرة تنتظر', 'Eine kleiner Frau wartet', 'المؤنث kleine', 'kleine'],
      ['Das kleine Kind wartet.', 'الطفل الصغير ينتظر', 'Das kleiner Kind wartet', 'بعد das النهاية e', 'kleine']
    ],
    'Der kleine Mann wartet. Ein kleiner Mann wartet.',
    'Ein kleiner Mann wartet.',
    'Schreibe morgen der kleine und ein kleiner.',
    'غدًا اكتب der kleine وein kleiner.'),

  U('a2-u2-l4', 'A2', 'نهاية الصفة في النصب', 'Adjektiv Akkusativ', 'deklination',
    'Am Ende setzt du die Adjektivendung im Akkusativ',
    'في النهاية تضع نهاية الصفة في النصب.',
    [
      ['den kleinen Mann', 'مذكر النصب en', 'den kleine Mann ناقص', 'den kleine Mann', 'النهاية en'],
      ['einen kleinen Mann', 'بعد einen أيضًا en', 'einen kleine Mann خطأ', 'einen kleine Mann', 'en بعد einen'],
      ['die kleine Frau', 'المؤنث يبقى e', 'die kleinen Frau خطأ', 'die kleinen Frau', 'المفرد e'],
      ['das kleine Kind', 'المحايد في النصب e', 'das kleinen Kind خطأ', 'das kleinen Kind', 'e لا en']
    ],
    [
      ['Ich sehe den kleinen Mann.', 'أرى الرجل الصغير', 'Ich sehe den kleine Mann', 'النصب kleinen', 'kleinen'],
      ['Ich sehe einen kleinen Mann.', 'أرى رجلًا صغيرًا', 'Ich sehe einen kleine Mann', 'بعد einen: kleinen', 'kleinen'],
      ['Ich sehe die kleine Frau.', 'أرى المرأة الصغيرة', 'Ich sehe die kleinen Frau', 'المؤنث kleine', 'kleine'],
      ['Ich sehe das kleine Kind.', 'أرى الطفل الصغير', 'Ich sehe das kleinen Kind', 'المحايد kleine', 'kleine']
    ],
    'Ich sehe den kleinen Mann und die kleine Frau.',
    'Ich sehe den kleinen Mann.',
    'Bilde morgen den kleinen und einen kleinen.',
    'غدًا كوّن den kleinen وeinen kleinen.'),

  U('a2-u2-l5', 'A2', 'الأفعال الانعكاسية', 'Reflexiv', 'konjugation',
    'Am Ende benutzt du mich und mir bei reflexiven Verben',
    'في النهاية تستعمل mich وmir مع الأفعال الانعكاسية.',
    [
      ['ich wasche mich', 'المفعول الشخص نفسه نصب', 'nicht ich wasche mir die Hände falsch hier', 'ich wasche mir allein', 'غسل النفس mich'],
      ['ich wasche mir die Hände', 'جزء الجسم يأخذ داتيف', 'mich die Hände خطأ', 'ich wasche mich die Hände', 'الجزء mir'],
      ['du freust dich', 'freuen يأخذ dich', 'dir هنا خطأ', 'du freust dir', 'freuen نصب'],
      ['kein Reflexiv vergessen', 'الضمير جزء من الفعل', 'ich freue auf dich ohne mich ناقص', 'ich freue auf dich', 'الضمير مفقود']
    ],
    [
      ['Ich wasche mich.', 'أغتسل', 'Ich wasche mir', 'غسل النفس mich', 'mich'],
      ['Ich wasche mir die Hände.', 'أغسل يدي', 'Ich wasche mich die Hände', 'جزء الجسم mir', 'mir'],
      ['Du freust dich.', 'أنت تفرح', 'Du freust dir', 'freuen مع dich', 'dich'],
      ['Ich interessiere mich für Musik.', 'أهتم بالموسيقى', 'Ich interessiere für Musik', 'الضمير مفقود', 'mich']
    ],
    'Ich wasche mir die Hände und ich interessiere mich für Musik.',
    'Ich wasche mir die Hände.',
    'Bilde morgen mich und mir je einmal.',
    'غدًا كوّن mich وmir مرة لكل.'),

  U('a2-u2-l6', 'A2', 'ماضي sein وhaben', 'Präteritum sein/haben', 'konjugation',
    'Am Ende benutzt du war und hatte für die Vergangenheit',
    'في النهاية تستعمل war وhatte للماضي.',
    [
      ['ich war', 'ماضي sein هو war', 'لا ich hatte sein', 'ich hatte bin', 'الخلط بين الفعلين'],
      ['du warst', 'مع du: warst', 'لا du war', 'du war müde', 'النهاية st'],
      ['ich hatte', 'ماضي haben هو hatte', 'لا ich war Zeit في هذا المعنى', 'ich war Zeit', 'الوقت hatte'],
      ['es gab', 'الوجود في الماضي gab', 'لا es war gibt', 'es war gibt ein Problem', 'الصيغة gab']
    ],
    [
      ['Ich war krank.', 'كنت مريضًا', 'Ich hatte krank', 'المرض مع war', 'war'],
      ['Du warst zu Hause.', 'كنت في البيت', 'Du war zu Hause', 'مع du: warst', 'warst'],
      ['Ich hatte Zeit.', 'كان عندي وقت', 'Ich war Zeit', 'الوقت hatte', 'hatte'],
      ['Es gab ein Problem.', 'كانت هناك مشكلة', 'Es war gibt ein Problem', 'الماضي gab', 'gab']
    ],
    'Ich war krank und ich hatte keine Zeit.',
    'Ich war krank.',
    'Sage morgen war und hatte.',
    'غدًا قل war وhatte.'),

  U('a2-u3-l1', 'A2', 'würde', 'Konjunktiv II würde', 'register',
    'Am Ende bittest du höflich mit würde',
    'في النهاية تطلب بأدب مع würde.',
    [
      ['ich würde', 'الأدب مع würde', 'will أقسى', 'ich will sofort Sie', 'المقام مكسور'],
      ['würden Sie', 'الرسمي würden Sie', 'würdest Sie خطأ', 'würdest Sie', 'Sie تأخذ würden'],
      ['würde plus Infinitiv', 'المصدر في الآخر', 'لا zu إجباري هنا', 'ich würde zu kommen', 'zu زائدة'],
      ['kein wäre für jede Bitte', 'الطلب العادي würde', 'wäre للخيال لا لكل طلب', 'ich wäre einen Kaffee', 'الطلب würde']
    ],
    [
      ['Ich hätte gerne einen Kaffee.', 'أود قهوة', 'Ich will sofort einen Kaffee von Ihnen', 'الأدب hätte gerne', 'hätte'],
      ['Würden Sie das wiederholen?', 'هل تعيدون ذلك؟', 'Würdest Sie das wiederholen?', 'الرسمي würden', 'Würden'],
      ['Ich würde bleiben.', 'سأبقى لو أمكن', 'Ich würde zu bleiben', 'بلا zu', 'würde'],
      ['Könnten Sie langsamer sprechen?', 'هل تتكلمون أبطأ؟', 'Kannst Sie langsamer sprechen?', 'الرسمي könnten', 'Könnten']
    ],
    'Würden Sie das wiederholen? Ich hätte gerne einen Kaffee.',
    'Würden Sie das wiederholen?',
    'Bitte morgen einmal mit würden Sie.',
    'غدًا اطلب مرة بـ würden Sie.'),

  U('a2-u3-l2', 'A2', 'فعل وحرف', 'Verben mit Präposition', 'präposition',
    'Am Ende lernst du vier Verben mit ihrer Präposition',
    'في النهاية تتعلم أربعة أفعال مع حرفها.',
    [
      ['warten auf', 'warten يأخذ auf', 'لا warten für', 'warten für den Bus', 'الحرف auf'],
      ['denken an', 'denken يأخذ an', 'لا denken über als einziges hier', 'denken über dich als Frame falsch', 'الإطار denken an'],
      ['sprechen mit', 'التحدث مع شخص mit', 'sprechen zu أضعف هنا', 'sprechen zu dir als Standard', 'مع الشخص mit'],
      ['sich freuen auf', 'الترقب auf', 'über للماضي لا للمستقبل هنا', 'freuen über morgen', 'الغد auf']
    ],
    [
      ['Ich warte auf den Bus.', 'أنتظر الحافلة', 'Ich warte für den Bus', 'الحرف auf', 'auf'],
      ['Ich denke an dich.', 'أفكر فيك', 'Ich denke über dich als Frame', 'الإطار an', 'an'],
      ['Ich spreche mit ihr.', 'أتحدث معها', 'Ich spreche zu ihr als Standard', 'مع الشخص mit', 'mit'],
      ['Ich freue mich auf morgen.', 'أتطلع إلى الغد', 'Ich freue mich über morgen', 'المستقبل auf', 'auf']
    ],
    'Ich warte auf den Bus und ich freue mich auf morgen.',
    'Ich warte auf den Bus.',
    'Bilde morgen warten auf und denken an.',
    'غدًا كوّن warten auf وdenken an.'),

  U('a2-u3-l3', 'A2', 'إضافة الأسماء', 'Genitiv der Namen', 'deklination',
    'Am Ende bildest du den Besitz mit s',
    'في النهاية تبني الملكية باسم العلم.',
    [
      ['Annas Tasche', 'اسم العلم يأخذ s', 'لا Anna ihre Tasche als Standard', 'Anna ihre Tasche', 'الإضافة Annas'],
      ['s nach dem Namen', 'الـ s ملاصقة', 'لا von كتعويض دائم في هذا الدرس', 'die Tasche von Anna als einzige Form', 'هنا الشكل Annas'],
      ['kein Apostroph', 'لا فاصلة علوية', 'الفاصلة العلوية إنجليزية', 'Anna Tasche mit Apostroph', 'بلا فاصلة'],
      ['Peters Buch', 'الاسم المذكر كذلك s', 'لا Peter Buch', 'Peter Buch ohne s', 'الـ s لازمة']
    ],
    [
      ['Annas Tasche ist hier.', 'حقيبة آنا هنا', 'Anna ihre Tasche ist hier', 'الإضافة Annas', 'Annas'],
      ['Peters Buch liegt da.', 'كتاب بيتر هناك', 'Peter Buch liegt da', 'الإضافة Peters', 'Peters'],
      ['Saras Schlüssel fehlt.', 'مفتاح سارة مفقود', 'Sara Schluessel mit Apostroph', 'بلا فاصلة', 'Saras'],
      ['Das ist Leilas Heft.', 'هذا دفتر ليلى', 'Das ist Leila ihr Heft', 'الإضافة Leilas', 'Leilas']
    ],
    'Annas Tasche ist hier. Peters Buch liegt da.',
    'Annas Tasche ist hier.',
    'Bilde morgen zwei Namen mit s.',
    'غدًا كوّن اسمين مع s.'),

  U('a2-u3-l4', 'A2', 'السفر', 'Reisen', 'lexik-kollokation',
    'Am Ende reservierst du und sagst eine Verspätung',
    'في النهاية تحجز وتقول إن هناك تأخيرًا.',
    [
      ['eine Fahrkarte', 'التذكرة Fahrkarte', 'لا ticket ككلمة وحيدة', 'ein Ticket bitte als einziges Wort', 'الكلمة Fahrkarte'],
      ['hin und zurück', 'الذهاب والإياب إطار', 'لا go and return', 'go und return', 'الإطار hin und zurück'],
      ['der Zug hat Verspätung', 'التأخير hat Verspätung', 'لا is late كترجمة', 'der Zug ist late', 'late إنجليزية'],
      ['umsteigen', 'التغيير umsteigen', 'لا change train خليط', 'den Zug change', 'الفعل umsteigen']
    ],
    [
      ['Eine Fahrkarte nach Berlin, bitte.', 'تذكرة إلى برلين', 'Ein Ticket nach Berlin als einziges', 'الكلمة Fahrkarte', 'Fahrkarte'],
      ['Hin und zurück, bitte.', 'ذهابًا وإيابًا', 'Go und return, bitte', 'الإطار Hin und zurück', 'zurück'],
      ['Der Zug hat Verspätung.', 'القطار متأخر', 'Der Zug ist late', 'التأخير Verspätung', 'Verspätung'],
      ['Wo steigen wir um?', 'أين نغيّر؟', 'Wo change wir den Zug?', 'الفعل umsteigen', 'steigen']
    ],
    'Eine Fahrkarte nach Berlin, hin und zurück.',
    'Der Zug hat Verspätung.',
    'Sage morgen eine Fahrkarte und eine Verspätung.',
    'غدًا قل تذكرة وتأخيرًا.'),

  U('a2-u3-l5', 'A2', 'الصحة', 'Gesundheit', 'lexik-kollokation',
    'Am Ende beschreibst du ein Symptom und eine Besserung',
    'في النهاية تصف عرضًا وتحسنًا.',
    [
      ['mir ist schlecht', 'الغثيان mir ist schlecht', 'لا ich bin schlecht بهذا المعنى', 'ich bin schlecht', 'المقام يغيّر المعنى'],
      ['ich habe Fieber', 'الحمى habe Fieber', 'لا ich bin Fieber', 'ich bin Fieber', 'Fieber مع habe'],
      ['die Praxis hat geschlossen', 'العيادة تغلق مع hat', 'لا is closed خليط', 'die Praxis ist closed', 'closed إنجليزية'],
      ['ich fühle mich besser', 'التحسن mich besser', 'لا ich fühle besser ohne mich', 'ich fühle besser', 'الضمير مفقود']
    ],
    [
      ['Mir ist schlecht.', 'أشعر بالغثيان', 'Ich bin schlecht', 'الغثيان mir ist schlecht', 'schlecht'],
      ['Ich habe Fieber.', 'عندي حمى', 'Ich bin Fieber', 'الحمى habe', 'Fieber'],
      ['Die Praxis hat geschlossen.', 'العيادة أغلقت', 'Die Praxis ist closed', 'الإغلاق hat geschlossen', 'geschlossen'],
      ['Ich fühle mich besser.', 'أشعر بتحسن', 'Ich fühle besser', 'الضمير mich', 'mich']
    ],
    'Mir ist schlecht. Ich habe Fieber.',
    'Ich fühle mich besser.',
    'Sage morgen ein Symptom.',
    'غدًا قل عرضًا واحدًا.'),

  U('a2-u3-l6', 'A2', 'العمل', 'Arbeit', 'lexik-kollokation',
    'Am Ende beschreibst du eine Arbeit in drei Sätzen',
    'في النهاية تصف عملًا في ثلاث جمل.',
    [
      ['ich arbeite halbtags', 'نصف الدوام halbtags', 'لا half job', 'ich arbeite half', 'half إنجليزية'],
      ['der Chef', 'الرئيس Chef لا طبّاخ بالضرورة', 'الصديق الكاذب', 'der Chef kocht immer', 'Chef هنا رئيس'],
      ['die Arbeit macht Spaß', 'المتعة macht Spaß', 'لا is fun', 'die Arbeit ist fun', 'fun إنجليزية'],
      ['ich suche eine Stelle', 'الوظيفة Stelle', 'لا job ككلمة وحيدة هنا', 'ich suche einen Job als einzige Form', 'الدرس يستعمل Stelle']
    ],
    [
      ['Ich arbeite halbtags.', 'أعمل نصف دوام', 'Ich arbeite half', 'نصف الدوام halbtags', 'halbtags'],
      ['Mein Chef ist nett.', 'رئيسي لطيف', 'Mein Chef kocht immer', 'Chef هنا رئيس', 'Chef'],
      ['Die Arbeit macht Spaß.', 'العمل ممتع', 'Die Arbeit ist fun', 'المتعة macht Spaß', 'Spaß'],
      ['Ich suche eine Stelle.', 'أبحث عن وظيفة', 'Ich suche einen Job nur so', 'الكلمة Stelle', 'Stelle']
    ],
    'Ich arbeite halbtags. Die Arbeit macht Spaß.',
    'Ich suche eine Stelle.',
    'Beschreibe morgen deine Arbeit in zwei Sätzen.',
    'غدًا صف عملك في جملتين.'),

  U('a2-u4-l1', 'A2', 'المدرسة', 'Schule', 'lexik-kollokation',
    'Am Ende sprichst du über einen Kurs',
    'في النهاية تتحدث عن دورة.',
    [
      ['der Kurs', 'الدورة Kurs', 'لا course', 'der Course', 'Course إنجليزية'],
      ['die Hausaufgabe', 'الواجب Hausaufgabe', 'لا homework', 'die Homework', 'Homework إنجليزية'],
      ['die Pause', 'الاستراحة Pause', 'لا break ككلمة وحيدة', 'die Break', 'Break إنجليزية'],
      ['ich verstehe das nicht', 'عدم الفهم إطار ثابت', 'لا I understand not', 'ich understand das nicht', 'understand إنجليزية']
    ],
    [
      ['Der Kurs beginnt um acht.', 'تبدأ الدورة في الثامنة', 'Der Course beginnt um acht', 'الدورة Kurs', 'Kurs'],
      ['Die Hausaufgabe ist lang.', 'الواجب طويل', 'Die Homework ist lang', 'الواجب Hausaufgabe', 'Hausaufgabe'],
      ['In der Pause trinke ich Wasser.', 'في الاستراحة أشرب ماء', 'In der Break trinke ich Wasser', 'الاستراحة Pause', 'Pause'],
      ['Ich verstehe das nicht.', 'لا أفهم هذا', 'Ich understand das nicht', 'الفهم verstehen', 'verstehe']
    ],
    'Der Kurs beginnt um acht. Ich verstehe das nicht.',
    'Ich verstehe das nicht.',
    'Sage morgen einen Satz über deinen Kurs.',
    'غدًا قل جملة عن دورتك.'),

  U('a2-u4-l2', 'A2', 'الأعياد', 'Feste', 'lexik-kollokation',
    'Am Ende lädst du ein und gratulierst',
    'في النهاية تدعو وتهنئ.',
    [
      ['Herzlichen Glückwunsch', 'التهنئة الإطار الكامل', 'لا happy birthday خليط', 'happy Geburtstag', 'happy إنجليزية'],
      ['ich lade dich ein', 'الدعوة laden ein', 'البادئة أخيرًا', 'ich einlade dich', 'البادئة في الآخر'],
      ['am Samstag', 'اليوم am', 'im Samstag خطأ', 'im Samstag', 'اليوم am'],
      ['leider kann ich nicht', 'الاعتذار leider', 'لا sorry I cannot', 'sorry, ich kann nicht kommen so', 'sorry ليست الإطار']
    ],
    [
      ['Herzlichen Glückwunsch!', 'مبروك', 'Happy Geburtstag!', 'التهنئة Herzlichen Glückwunsch', 'Glückwunsch'],
      ['Ich lade dich ein.', 'أدعوك', 'Ich einlade dich', 'ein في الآخر', 'ein'],
      ['Wir feiern am Samstag.', 'نحتفل السبت', 'Wir feiern im Samstag', 'اليوم am', 'am'],
      ['Leider kann ich nicht.', 'للأسف لا أستطيع', 'Sorry, ich kann nicht', 'الاعتذار Leider', 'Leider']
    ],
    'Ich lade dich ein. Wir feiern am Samstag.',
    'Herzlichen Glückwunsch!',
    'Lade morgen jemanden mit einem Satz ein.',
    'غدًا ادعُ شخصًا بجملة.'),

  U('a2-u4-l3', 'A2', 'الملابس', 'Kleidung', 'lexik-kollokation',
    'Am Ende beschreibst du was du anhast',
    'في النهاية تصف ما تلبس.',
    [
      ['ich ziehe an', 'اللبس ziehen an', 'البادئة أخيرًا', 'ich anziehe die Jacke', 'an في الآخر'],
      ['die Hose', 'البنطال Hose', 'لا pants ككلمة وحيدة', 'die Pants', 'Pants إنجليزية'],
      ['die Größe', 'المقاس Größe', 'لا size', 'die Size', 'Size إنجليزية'],
      ['das steht dir', 'يليق stehen', 'لا it suits كترجمة', 'das suits dir', 'suits إنجليزية']
    ],
    [
      ['Ich ziehe die Jacke an.', 'أرتدي السترة', 'Ich anziehe die Jacke', 'an في الآخر', 'an'],
      ['Die Hose ist blau.', 'البنطال أزرق', 'Die Pants ist blau', 'البنطال Hose', 'Hose'],
      ['Welche Größe haben Sie?', 'ما مقاسكم؟', 'Welche Size haben Sie?', 'المقاس Größe', 'Größe'],
      ['Das Kleid steht dir.', 'الفستان يليق بك', 'Das Kleid suits dir', 'يليق steht', 'steht']
    ],
    'Ich ziehe die Jacke an. Das steht dir.',
    'Welche Größe haben Sie?',
    'Beschreibe morgen ein Kleidungsstück.',
    'غدًا صف قطعة لباس.'),

  U('a2-u4-l4', 'A2', 'الطقس', 'Wetter', 'lexik-kollokation',
    'Am Ende sagst du drei Wettersätze',
    'في النهاية تقول ثلاث جمل طقس.',
    [
      ['es regnet', 'المطر es regnet', 'لا it rains', 'it regnet', 'it إنجليزية'],
      ['es ist bewölkt', 'الغيم bewölkt', 'لا cloudy ككلمة', 'es ist cloudy', 'cloudy إنجليزية'],
      ['im Sommer', 'الفصل im', 'am Sommer خطأ', 'am Sommer', 'الفصل im'],
      ['seit Stunden', 'منذ seit', 'لا since hours', 'since Stunden', 'since إنجليزية']
    ],
    [
      ['Es regnet.', 'تمطر', 'It regnet', 'المطر Es regnet', 'regnet'],
      ['Heute ist es bewölkt.', 'اليوم غائم', 'Heute ist es cloudy', 'الغيم bewölkt', 'bewölkt'],
      ['Im Sommer ist es heiß.', 'في الصيف الحر شديد', 'Am Sommer ist es heiß', 'الفصل im', 'Sommer'],
      ['Es regnet seit Stunden.', 'تمطر منذ ساعات', 'Es regnet since Stunden', 'منذ seit', 'seit']
    ],
    'Heute ist es bewölkt. Es regnet seit Stunden.',
    'Es regnet.',
    'Sage morgen drei Wettersätze.',
    'غدًا قل ثلاث جمل طقس.'),

  U('a2-u4-l5', 'A2', 'الدعوة', 'Einladung', 'register',
    'Am Ende nimmst du eine Einladung an und sagst ab',
    'في النهاية تقبل دعوة وتعتذر.',
    [
      ['kommst du mit', 'الدعوة القصيرة Kommst du mit', 'لا do you come', 'Do you come mit', 'Do إنجليزية'],
      ['ja gerne', 'القبول Ja, gerne', 'لا yes please كمقام وحيد', 'yes, please ich komme', 'yes إنجليزية'],
      ['leider', 'الاعتذار beginnt mit leider', 'لا sorry allein', 'sorry, nein', 'sorry ليست الإطار'],
      ['vielen Dank für die Einladung', 'الشكر على الدعوة إطار', 'لا thanks for invite', 'thanks for die Einladung', 'thanks إنجليزية']
    ],
    [
      ['Kommst du mit?', 'هل تأتي معنا؟', 'Do you come mit?', 'الدعوة Kommst du mit', 'Kommst'],
      ['Ja, gerne.', 'نعم بكل سرور', 'Yes, please', 'القبول Ja, gerne', 'gerne'],
      ['Leider kann ich nicht.', 'للأسف لا أستطيع', 'Sorry, nein', 'الاعتذار Leider', 'Leider'],
      ['Vielen Dank für die Einladung.', 'شكرًا على الدعوة', 'Thanks for die Einladung', 'الشكر Vielen Dank', 'Dank']
    ],
    'Kommst du mit? Leider kann ich nicht.',
    'Vielen Dank für die Einladung.',
    'Nimm morgen eine Einladung an oder sag ab.',
    'غدًا اقبل دعوة أو اعتذر.'),

  U('a2-u4-l6', 'A2', 'مشكلة صغيرة', 'Ein Problem', 'lexik-kollokation',
    'Am Ende sagst du dass etwas nicht funktioniert',
    'في النهاية تقول إن شيئًا لا يعمل.',
    [
      ['funktioniert nicht', 'العطل funktioniert nicht', 'لا works not', 'es works nicht', 'works إنجليزية'],
      ['ich habe es verloren', 'الضياع verloren', 'لا lost', 'ich habe es lost', 'lost إنجليزية'],
      ['können Sie das reparieren', 'الإصلاح reparieren', 'لا fix', 'können Sie das fixen', 'fix ليست الفعل هنا'],
      ['es tut mir leid', 'الاعتذار es tut mir leid', 'لا I am sorry كجملة وحيدة', 'ich bin sorry', 'sorry إنجليزية']
    ],
    [
      ['Das Gerät funktioniert nicht.', 'الجهاز لا يعمل', 'Das Gerät works nicht', 'العطل funktioniert', 'funktioniert'],
      ['Ich habe es verloren.', 'أضعته', 'Ich habe es lost', 'الضياع verloren', 'verloren'],
      ['Können Sie das reparieren?', 'هل تستطيعون إصلاحه؟', 'Können Sie das fixen?', 'الإصلاح reparieren', 'reparieren'],
      ['Es tut mir leid.', 'آسف', 'Ich bin sorry', 'الاعتذار Es tut mir leid', 'leid']
    ],
    'Das Gerät funktioniert nicht. Können Sie das reparieren?',
    'Das Gerät funktioniert nicht.',
    'Melde morgen ein kleines Problem in einem Satz.',
    'غدًا أبلغ عن مشكلة صغيرة بجملة.'),

  U('a2-u5-l1', 'A2', 'حكاية ماضٍ', 'Vergangenheit erzählen', 'konjugation',
    'Am Ende verbindest du drei Perfekt-Sätze',
    'في النهاية تربط ثلاث جمل ماضٍ.',
    [
      ['zuerst bin ich aufgestanden', 'الاستيقاظ مع sein', 'haben aufgestanden خطأ', 'zuerst habe ich aufgestanden', 'aufstehen يأخذ sein'],
      ['dann habe ich gefrühstückt', 'الفطور مع haben', 'sein gefrühstückt خطأ', 'dann bin ich gefrühstückt', 'frühstücken مع haben'],
      ['zum Schluss bin ich ausgegangen', 'الخروج مع sein', 'haben ausgegangen خطأ', 'zum Schluss habe ich ausgegangen', 'ausgehen يأخذ sein'],
      ['die Reihenfolge', 'الترتيب أولًا ثم أخيرًا', 'لا تقفز بلا رابط', 'ausgegangen zuerst ohne Ordnung', 'الرابط يحمل الترتيب']
    ],
    [
      ['Zuerst bin ich aufgestanden.', 'أولًا استيقظت', 'Zuerst habe ich aufgestanden', 'aufstehen مع sein', 'aufgestanden'],
      ['Dann habe ich gefrühstückt.', 'ثم فطرت', 'Dann bin ich gefrühstückt', 'الفطور مع haben', 'gefrühstückt'],
      ['Zum Schluss bin ich ausgegangen.', 'في النهاية خرجت', 'Zum Schluss habe ich ausgegangen', 'ausgehen مع sein', 'ausgegangen'],
      ['Danach habe ich gelernt.', 'بعد ذلك درست', 'Danach bin ich gelernt', 'lernen مع haben', 'gelernt']
    ],
    'Zuerst bin ich aufgestanden. Dann habe ich gefrühstückt.',
    'Zuerst bin ich aufgestanden.',
    'Erzähle morgen drei Sätze in der Vergangenheit.',
    'غدًا احكِ ثلاث جمل في الماضي.'),

  U('a2-u5-l2', 'A2', 'رأي بسيط', 'Einfache Meinung', 'lexik-kollokation',
    'Am Ende sagst du eine Meinung und eine Einschränkung',
    'في النهاية تقول رأيًا وتقييدًا.',
    [
      ['ich finde', 'الرأي ich finde', 'لا I find that خليط', 'ich find das gut', 'find إنجليزية'],
      ['meiner Meinung nach', 'الإطار الرسمي الخفيف', 'لا in my opinion كجملة', 'in my Meinung', 'الخليط خطأ'],
      ['das stimmt nicht ganz', 'التقييد nicht ganz', 'لا totally false', 'das ist totally falsch', 'totally إنجليزية'],
      ['das ist praktisch', 'الوصف praktisch', 'لا practical ككلمة', 'das ist practical', 'practical إنجليزية']
    ],
    [
      ['Ich finde das praktisch.', 'أجده عمليًا', 'Ich find das praktisch', 'الرأي finde', 'finde'],
      ['Meiner Meinung nach ist das gut.', 'في رأيي هذا جيد', 'In my Meinung ist das gut', 'الإطار Meiner Meinung nach', 'Meinung'],
      ['Das stimmt nicht ganz.', 'هذا ليس صحيحًا تمامًا', 'Das ist totally falsch', 'التقييد nicht ganz', 'ganz'],
      ['Ich finde das interessant.', 'أجده مثيرًا', 'Ich find das interesting', 'الصفة interessant', 'interessant']
    ],
    'Ich finde das praktisch. Das stimmt nicht ganz.',
    'Meiner Meinung nach ist das gut.',
    'Sage morgen eine Meinung mit ich finde.',
    'غدًا قل رأيًا مع ich finde.'),

  U('a2-u5-l3', 'A2', 'رسالة أطول', 'Ein kurzer Brief', 'register',
    'Am Ende schreibst du Anrede, Bitte und Gruß',
    'في النهاية تكتب تحية وطلبًا وختامًا.',
    [
      ['Sehr geehrte Frau', 'الرسمي يبدأ هكذا', 'Liebe Frau an eine Behörde ist falsch', 'Liebe Frau Behörde', 'المقام الرسمي Sehr geehrte'],
      ['ich schreibe Ihnen', 'الطلب Ihnen', 'dir في الرسالة الرسمية خطأ', 'ich schreibe dir, Frau Amt', 'الرسمي Ihnen'],
      ['mit freundlichen Grüßen', 'الختام الرسمي', 'Viele Grüße an das Amt ist zu leicht', 'Viele Grüße, das Amt', 'الختام Mit freundlichen Grüßen'],
      ['der Betreff fehlt nicht', 'الموضوع واضح', 'لا تبدأ بالطلب بلا مخاطبة', 'Bitte sofort ohne Anrede', 'التحية أولًا']
    ],
    [
      ['Sehr geehrte Frau Keller,', 'السيدة كيلر المحترمة', 'Liebe Frau Keller vom Amt,', 'الرسمي Sehr geehrte', 'geehrte'],
      ['Ich schreibe Ihnen wegen des Termins.', 'أكتب إليكم بخصوص الموعد', 'Ich schreibe dir wegen des Termins', 'الرسمي Ihnen', 'Ihnen'],
      ['Mit freundlichen Grüßen', 'مع أطيب التحيات', 'Viele Grüße ans Amt', 'الختام الرسمي', 'freundlichen'],
      ['Sara Ben Ali', 'الاسم في الآخر', 'Unterschrift fehlt nicht', 'الختام يحمل الاسم', 'Sara']
    ],
    'Sehr geehrte Frau Keller, ich schreibe Ihnen wegen des Termins.',
    'Ich schreibe Ihnen wegen des Termins.',
    'Schreibe morgen Anrede und Gruß.',
    'غدًا اكتب تحية وختامًا.'),

  U('a2-u5-l4', 'A2', 'الهاتف', 'Telefon', 'lexik-kollokation',
    'Am Ende führst du ein kurzes Telefongespräch',
    'في النهاية تجري مكالمة قصيرة.',
    [
      ['am Apparat', 'التعريف على الخط', 'لا this is speaking خليط', 'hier spricht als this is', 'الإطار am Apparat'],
      ['einen Moment', 'الانتظار einen Moment', 'لا one moment كخليط', 'one Moment bitte', 'one إنجليزية'],
      ['er ist nicht da', 'الغياب ist nicht da', 'لا he is not', 'er ist not da', 'not إنجليزية'],
      ['kann ich etwas ausrichten', 'تبليغ الرسالة ausrichten', 'لا tell him', 'kann ich ihm tell', 'tell إنجليزية']
    ],
    [
      ['Sara am Apparat.', 'سارة على الخط', 'Sara speaking hier', 'الإطار am Apparat', 'Apparat'],
      ['Einen Moment, bitte.', 'لحظة من فضلك', 'One Moment, bitte', 'الانتظار Einen Moment', 'Moment'],
      ['Er ist gerade nicht da.', 'هو ليس هنا الآن', 'Er ist not da', 'الغياب nicht da', 'nicht'],
      ['Kann ich etwas ausrichten?', 'هل أبلغ رسالة؟', 'Kann ich ihm tell?', 'التبليغ ausrichten', 'ausrichten']
    ],
    'Sara am Apparat. Einen Moment, bitte.',
    'Kann ich etwas ausrichten?',
    'Übe morgen vier Telefon-Sätze laut.',
    'غدًا تدرّب على أربع جمل هاتف.'),

  U('a2-u5-l5', 'A2', 'مراجعة A2', 'Wiederholung A2', 'pruefstrategie',
    'Am Ende reparierst du weil, Dativ und Perfekt',
    'في النهاية تُصلح weil والداتيف والماضي.',
    [
      ['weil am Ende', 'بعد weil الفعل آخرًا', 'V2 بعد weil خطأ', 'weil ich bin müde', 'الترتيب خطأ'],
      ['Dativ bei helfen', 'helfen يأخذ داتيف', 'den helfen خطأ', 'ich helfe den Mann', 'الحالة خطأ'],
      ['sein bei gehen', 'gehen يأخذ sein', 'haben gegangen خطأ', 'ich habe gegangen', 'المساعد خطأ'],
      ['auf plus Akkusativ bei Wohin', 'الحركة نصب', 'auf dem كهدف خطأ', 'ich lege es auf dem Tisch', 'الحركة den']
    ],
    [
      ['Ich bleibe, weil ich müde bin.', 'أبقى لأنني متعب', 'Ich bleibe, weil ich bin müde', 'bin في الآخر', 'bin'],
      ['Ich helfe dem Mann.', 'أساعد الرجل', 'Ich helfe den Mann', 'helfen مع dem', 'dem'],
      ['Ich bin gegangen.', 'ذهبت', 'Ich habe gegangen', 'gehen مع sein', 'bin'],
      ['Ich lege es auf den Tisch.', 'أضعه على الطاولة', 'Ich lege es auf dem Tisch', 'الحركة den', 'den']
    ],
    'Ich bleibe, weil ich müde bin. Ich helfe dem Mann.',
    'Ich helfe dem Mann.',
    'Korrigiere morgen einen weil-Satz.',
    'غدًا صحّح جملة weil.'),

  U('a2-u5-l6', 'A2', 'شكل امتحان A2', 'Prüfungsform A2', 'pruefstrategie',
    'Am Ende kennst du die Form und schreibst keinen Ausgleich',
    'في النهاية تعرف الشكل ولا تعوّض بين الأقسام.',
    [
      ['vier Module', 'أربعة أقسام مستقلة', 'لا درجة واحدة كلية تنقذ', 'eine Gesamtnote rettet', 'لا إنقاذ'],
      ['Schreiben ist eine Aufgabe mit Form', 'الكتابة لها شكل', 'ليست فقرة بلا مخاطبة', 'ein Text ohne Form reicht', 'الشكل جزء من الدرجة'],
      ['Hören einmal planen', 'لا تعتمد على إعادة غير موعودة', 'الخطة قبل الصوت', 'ich warte auf die dritte Wiederholung', 'لا تفترض التكرار'],
      ['Sprechen ist Dialog', 'التحدث حوار لا مونولوج فقط', 'الشريك جزء من المهمة', 'ich rede allein immer', 'الحوار مطلوب']
    ],
    [
      ['Ein Modul rettet das andere nicht.', 'قسم لا ينقذ الآخر', 'Eine Gesamtnote rettet alles', 'لا تعويض', 'nicht'],
      ['Die Form gehört zur Aufgabe.', 'الشكل جزء من المهمة', 'Ein Text ohne Form reicht', 'الشكل مطلوب', 'Form'],
      ['Plane das Hören vor dem Ton.', 'خطّط للسماع قبل الصوت', 'Ich warte auf die dritte Wiederholung', 'لا تفترض الإعادة', 'vor'],
      ['Sprechen ist auch Dialog.', 'التحدث حوار أيضًا', 'Ich rede allein immer', 'الحوار جزء من القسم', 'Dialog']
    ],
    'Vier Module. Kein Ausgleich. Sprechen ist Dialog.',
    'Ein Modul rettet das andere nicht.',
    'Sage morgen die Ausgleich-Regel.',
    'غدًا قل قاعدة عدم التعويض.'),

  U('a2-u6-l1', 'A2', 'الجسم والملابس', 'Körper und Kleidung', 'genus',
    'Am Ende benutzt du zehn neue Alltagswörter im Satz',
    'في النهاية تستعمل عشر كلمات يومية جديدة داخل جملة.',
    [
      ['das Gesicht waschen', 'الوجه يُغسل مع مفعول صريح لا ضمير انعكاسي', 'الضمير الانعكاسي الخطأ', 'Wasch dich das Gesicht', 'المفعول به: das Gesicht'],
      ['die Jeans passt', 'الجينز مؤنث في الألمانية', 'الجنس الخطأ', 'Der Jeans passt nicht', 'الأداة die تحدد الجنس'],
      ['einen Zettel für mich', 'Zettel مذكر، فالنصب einen', 'النصب الخطأ', 'ein Zettel für mich', 'مذكر: einen Zettel'],
      ['eine Creme für die Hände', 'الكريم مع für لا مع zu', 'الحرف الخطأ', 'eine Creme zu den Händen', 'الصيغة الثابتة: für die Hände']
    ],
    [
      ['Ich habe keine Ahnung.', 'ليست لدي فكرة', 'Ich habe keine Idee gehabt.', 'التعبير الثابت: keine Ahnung', 'Ahnung'],
      ['Das Parfüm riecht gut.', 'رائحة العطر طيبة', 'Die Parfüm riecht gut.', 'محايد: das Parfüm', 'Parfüm'],
      ['Ich merke mir die Zahlen gut.', 'أحفظ الأرقام جيدًا', 'Ich merke die Zahlen mir gut.', 'الترتيب: mir … merken', 'merke'],
      ['Rauchen ist schädlich für die Gesundheit.', 'التدخين ضار بالصحة', 'Rauchen ist schädlich zu der Gesundheit.', 'الحرف الثابت: für', 'schädlich']
    ],
    'Die Jeans passt mir nicht, ich brauche eine neue.',
    'Mein Anzug ist zu dick.',
    'Schreibe morgen drei Sätze über deine Kleidung.',
    'غدًا اكتب ثلاث جمل عن ملابسك.'),

  U('a2-u6-l2', 'A2', 'الطعام والموسيقى', 'Essen und Musik', 'lexik-kollokation',
    'Am Ende bestellst du ein Gericht und sprichst über Musik',
    'في النهاية تطلب طبقًا وتتحدث عن الموسيقى.',
    [
      ['Ein Glas Mineralwasser', 'الكمية تُذكر بلا حرف', 'حرف زائد', 'ein Glas von Mineralwasser', 'الكمية بلا حرف'],
      ['Ich esse kein Schweinefleisch', 'اللحم غير الحيوان: Schwein ثم Schweinefleisch', 'الخلط بين الحيوان واللحم', 'Ich esse kein Schwein', 'الطعام: Schweinefleisch'],
      ['Für das Konzert gibt es Karten', 'für مع النصب', 'الحالة الخطأ', 'Für dem Konzert gibt es Karten', 'für + النصب: das'],
      ['Er spielt in einer Band', 'في الداتيف einer Band', 'الحالة الخطأ', 'in ein Band', 'الداتيف: einer']
    ],
    [
      ['Ich nehme eine kleine Portion Eis.', 'آخذ حصة صغيرة من المثلجات', 'Ich nehme einen kleinen Portion Eis.', 'Portion مؤنث: eine kleine', 'Portion'],
      ['Den Rest gebe ich dir später.', 'البقية أعطيك إياها لاحقًا', 'Den Rest gebe ich dir später es.', 'بلا ضمير زائد', 'Rest'],
      ['Die Wurst ist mir zu fett.', 'النقانق دهنية أكثر من اللازم', 'Die Wurst ist mir zu dick.', 'للطعام fett لا dick', 'fett'],
      ['In der Bibliothek darf man nicht laut sprechen.', 'في المكتبة لا كلام بصوت عال', 'In die Bibliothek darf man nicht laut sprechen.', 'المكان: in der', 'Bibliothek']
    ],
    'Ich nehme eine kleine Portion Eis.',
    'Die Band spielt heute im Konzert.',
    'Bestelle morgen ein Gericht mit einer Portion.',
    'غدًا اطلب طبقًا مع حصة.'),

  U('a2-u6-l3', 'A2', 'الرياضة والطبيعة', 'Sport und Natur', 'präposition',
    'Am Ende sprichst du über Sport und einen Tag draußen',
    'في النهاية تتحدث عن الرياضة ويوم في الطبيعة.',
    [
      ['Er spielt Tennis', 'اللعبة بلا أداة عند الممارسة', 'أداة زائدة', 'Er spielt das Tennis', 'اللعبة بلا أداة'],
      ['Das Training ist auf dem Sportplatz', 'المكان: auf dem Sportplatz', 'حرف المكان الخطأ', 'Das Training ist in der Sportplatz', 'المكان: auf dem'],
      ['Im Urlaub bin ich am Strand', 'الشاطئ: am Strand', 'حرف خطأ', 'Ich bin in dem Strand', 'am Strand'],
      ['Sein Vater ist gestorben', 'sterben في الماضي مع sein', 'haben الخطأ', 'Sein Vater hat gestorben', 'sterben مع sein']
    ],
    [
      ['Wir trainieren einmal pro Woche.', 'نتدرب مرة كل أسبوع', 'Wir trainieren einmal in der Woche pro.', 'الترتيب: pro Woche', 'trainieren'],
      ['Abends mache ich einen Spaziergang.', 'مساءً أتنزه', 'Abends mache ich einen Spaziergang gehen.', 'التعبير: einen Spaziergang machen', 'Spaziergang'],
      ['Vorsicht, das Wasser ist tief!', 'انتبه، الماء عميق', 'Vorsicht, das Wasser ist tief gemacht!', 'صفة بلا gemacht', 'tief'],
      ['Der Himmel ist blau und es gibt keine Wolken.', 'السماء زرقاء ولا سحاب', 'Der Himmel sind blau und es gibt keine Wolken.', 'المفرد: ist', 'Himmel']
    ],
    'Wir trainieren auf dem Sportplatz.',
    'Im Urlaub bin ich am Strand.',
    'Schreibe morgen zwei Sätze über deinen Sport.',
    'غدًا اكتب جملتين عن رياضتك.'),

  U('a2-u6-l4', 'A2', 'السفر والمرور', 'Reisen und Verkehr', 'präposition',
    'Am Ende erzählst du von einer Reise und einem Termin auf der Straße',
    'في النهاية تحكي عن رحلة وموعد في الطريق.',
    [
      ['Ich habe die Führerscheinprüfung bestanden', 'التركيب يبقى كلمة واحدة', 'كلمتان منفصلتان', 'Ich habe die Prüfung von Führerschein bestanden', 'التركيب: Führerscheinprüfung'],
      ['Wir fahren mit dem Schiff nach Köln', 'المدن مع nach', 'حرف خطأ', 'Wir fahren mit dem Schiff zu Köln', 'المدن: nach'],
      ['Oskar fährt zur Arbeit', 'zur = zu der', 'الصيغة الكاملة', 'Oskar fährt zu der Arbeit', 'التعبير: zur Arbeit'],
      ['Das Spiel findet bei Regen statt', 'الفعل المنفصل: findet … statt', 'الفصل الخطأ', 'Das Spiel stattfindet bei Regen', 'statt في النهاية']
    ],
    [
      ['Ich habe den Zug verpasst.', 'فوّت القطار', 'Ich habe den Zug verpasst gemacht.', 'مركب كامل', 'verpasst'],
      ['Ich gehe gern auf den Flohmarkt.', 'أذهب إلى سوق المستعمل', 'Ich gehe gern in den Flohmarkt.', 'حرف المكان: auf', 'Flohmarkt'],
      ['Verreist ihr in den Ferien?', 'هل تسافرون في العطلة؟', 'Verreist ihr in die Ferien?', 'التعبير: in den Ferien', 'Verreist'],
      ['Welche Verkehrsmittel benutzen Sie oft?', 'أي وسائل نقل تستعملون كثيرًا؟', 'Welche Verkehrsmittel benutzen Sie oft mit?', 'بلا mit زائدة', 'Verkehrsmittel']
    ],
    'Wir fahren mit dem Schiff nach Köln.',
    'Ich habe den Zug verpasst.',
    'Schreibe morgen drei Sätze über deine letzte Reise.',
    'غدًا اكتب ثلاث جمل عن آخر رحلة لك.'),

  U('a2-u6-l5', 'A2', 'العمل والمكتب', 'Arbeit und Büro', 'lexik-kollokation',
    'Am Ende schreibst du eine Bewerbung in drei Sätzen',
    'في النهاية تكتب طلب تقديم في ثلاث جمل.',
    [
      ['Können Sie meine Frage beantworten?', 'الفعل بلا حرف جرّ', 'حرف زائد', 'Können Sie auf meine Frage beantworten?', 'beantworten بلا حرف'],
      ['Sie bekommt Bescheid.', 'التعبير: Bescheid bekommen', 'ترجمة حرفية', 'Sie bekommt einen Bescheid gegeben', 'التعبير الثابت'],
      ['Ich bewerbe mich um eine Stelle.', 'um مع التقديم على وظيفة', 'حرف خطأ', 'Ich bewerbe mich für eine Stelle', 'um eine Stelle'],
      ['Das ist das aktuelle Kinoprogramm.', 'الصفة قبل الاسم', 'الموضع الخطأ', 'Das ist das Kinoprogramm aktuell', 'الصفة قبل الاسم']
    ],
    [
      ['Können wir einen Termin vereinbaren?', 'هل يمكننا الاتفاق على موعد؟', 'Können wir einen Termin vereinbaren machen?', 'مركب كامل', 'vereinbaren'],
      ['Ich informiere mich über die Prüfung.', 'أستعلم عن الامتحان', 'Ich informiere über die Prüfung.', 'الضمير الانعكاسي: mich', 'informiere'],
      ['Luis chattet gern mit seinen Freunden.', 'لويس يدردش مع أصدقائه', 'Luis chattet gern zu seinen Freunden.', 'mit + الداتيف', 'chattet'],
      ['Was ist der Unterschied zwischen den Kursen?', 'ما الفرق بين الدورات؟', 'Was ist der Unterschied von den Kursen?', 'zwischen + الداتيف', 'Unterschied']
    ],
    'Ich bewerbe mich um eine Stelle.',
    'Können wir einen Termin vereinbaren?',
    'Schreibe morgen einen Satz mit Bescheid und einen mit Termin.',
    'غدًا اكتب جملة مع Bescheid وأخرى مع Termin.'),

  U('a2-u6-l6', 'A2', 'الناس والمشاعر', 'Menschen und Gefühle', 'deklination',
    'Am Ende beschreibst du Personen und deine Familie genau',
    'في النهاية تصف أشخاصًا وعائلتك بدقة.',
    [
      ['Er ist Angestellter', 'المذكر في الرفع ينتهي بـ er', 'نهاية خطأ', 'Er ist Angestellter bei einer Bank und Angestellte', 'المذكر: Angestellter'],
      ['ein berühmter Fußballspieler', 'الصفة قبل الاسم تُصرَّف', 'الصفة مجردة', 'ein berühmt Fußballspieler', 'مذكر رفع: berühmter'],
      ['Der Mechaniker repariert den Motor', 'الفاعل der والمفعول به den', 'الحالة الخطأ', 'Der Mechaniker repariert der Motor', 'النصب: den Motor'],
      ['Ich habe mich in sie verliebt', 'verlieben مع in', 'حرف خطأ', 'Ich habe mich für sie verliebt', 'in + النصب']
    ],
    [
      ['Meine Eltern sind geschieden.', 'والداي مطلقان', 'Meine Eltern haben geschieden.', 'geschieden مع sein', 'geschieden'],
      ['Fußball ist bei vielen Menschen beliebt.', 'كرة القدم محبوبة عند كثيرين', 'Fußball ist für viele Menschen beliebt.', 'beliebt bei', 'beliebt'],
      ['Sie ist Österreicherin und wohnt in Wien.', 'هي نمساوية وتسكن في فيينا', 'Sie ist eine Österreicherin Frau.', 'بلا Frau زائدة', 'Österreicherin'],
      ['Ich bin froh, dass du kommen kannst.', 'أنا مسرور أنك تستطيع القدوم', 'Ich habe froh, dass du kommen kannst.', 'froh مع sein', 'froh']
    ],
    'Meine Eltern sind geschieden.',
    'Mein Cousin ist ein berühmter Musiker.',
    'Schreibe morgen zwei Sätze über deine Familie.',
    'غدًا اكتب جملتين عن عائلتك.')
];

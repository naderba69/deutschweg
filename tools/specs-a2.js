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

  U('a2-u1-l6', 'A2', 'الشرط بـ wenn', 'Bedingungen mit wenn', 'wortstellung',
    'Am Ende bildest du fünf vollständige wenn-Sätze mit korrekter Verbstellung',
    'في النهاية تبني خمس جمل شرطية كاملة بـ wenn مع ترتيب الفعل الصحيح.',
    [
      ['Wenn ich Zeit habe, rufe ich dich an.', 'تضع الفعل habe في نهاية جملة wenn', 'في جملة wenn يأتي الفعل المصرف في النهاية: Zeit habe', 'Wenn ich habe Zeit, rufe ich dich an.', 'بعد wenn نقول ich Zeit habe لا ich habe Zeit'],
      ['Wenn es regnet, nehme ich den Bus.', 'تبدأ الجملة الرئيسية بالفعل nehme عندما تتقدم جملة wenn', 'جملة wenn المتقدمة تشغل الخانة الأولى؛ لذلك يأتي الفعل المصرف بعدها مباشرة', 'Wenn es regnet, ich nehme den Bus.', 'بعد الفاصلة نقول nehme ich لا ich nehme'],
      ['Wenn du Lust hast, können wir ins Kino gehen.', 'تحافظ على القوس الفعلي können … gehen في الجملة الرئيسية', 'بعد جملة wenn يأتي können قبل الفاعل، ويبقى المصدر gehen في نهاية الجملة الرئيسية', 'Wenn du Lust hast, wir können ins Kino gehen.', 'بعد الفاصلة نقول können wir، ويبقى gehen في النهاية'],
      ['Wenn ich alle Hausaufgaben gemacht habe, spiele ich.', 'تضع مجموعة Perfekt gemacht habe في نهاية جملة wenn', 'في جملة wenn يأتي اسم المفعول قبل الفعل المساعد المصرف: gemacht habe', 'Wenn ich alle Hausaufgaben habe gemacht, spiele ich.', 'في جملة wenn نقول gemacht habe لا habe gemacht']
    ],
    [
      ['Wenn ich Zeit habe, rufe ich dich an.', 'إذا كان لدي وقت أتصل بك', 'Wenn ich Zeit habe, ich rufe dich an.', 'بعد جملة wenn المتقدمة نقول rufe ich', 'habe'],
      ['Wenn es regnet, nehme ich den Bus.', 'إذا نزل المطر، أستقلّ الحافلة', 'Wann es regnet, nehme ich den Bus.', 'للشرط نستعمل wenn، أما wann فللسؤال عن الوقت', 'Wenn'],
      ['Wenn du Lust hast, können wir ins Kino gehen.', 'إذا رغبت يمكننا الذهاب إلى السينما', 'Wenn du Lust hast, kann wir ins Kino gehen.', 'مع wir نقول können، ويبقى gehen في النهاية', 'können'],
      ['Ich fahre mit dem Rad, wenn die Fahrkarte teuer ist.', 'أذهب بالدراجة إذا كانت التذكرة غالية', 'Ich fahre mit dem Rad, wenn die Fahrkarte teuer sind.', 'الفاعل المفرد die Fahrkarte يأخذ ist', 'ist']
    ],
    'Wenn ich Zeit habe, rufe ich dich an.',
    'Wenn du Lust hast, können wir ins Kino gehen.',
    'Wiederhole morgen die fünf Sätze: Wenn ich Zeit habe, rufe ich dich an. Wenn es regnet, nehme ich den Bus. Wenn du Lust hast, können wir ins Kino gehen. Wenn ich alle Hausaufgaben gemacht habe, spiele ich. Ich fahre mit dem Rad, wenn die Fahrkarte teuer ist.',
    'غدًا راجع جمل wenn الخمس مع الفعل النهائي وترتيب الجملة الرئيسية.',
    {
      factFamilies: ['wortstellung', 'wortstellung', 'wortstellung', 'wortstellung'],
      writing: {
        zeigt: 'Fünf Bedingungen mit wenn',
        erklaerung: 'اكتب جمل wenn الخمس كاملة مع ترتيب الفعل الصحيح في الجزأين.',
        prompt: 'اكتب الجمل الخمس: شرطًا بسيطًا، وطقسًا، وجملة modal، وجملة Perfekt، وجملة تبدأ بالجزء الرئيسي.',
        promptDe: 'Wenn ich Zeit habe, rufe ich dich an. · Wenn es regnet, nehme ich den Bus. · Wenn du Lust hast, können wir ins Kino gehen. · Wenn ich alle Hausaufgaben gemacht habe, spiele ich. · Ich fahre mit dem Rad, wenn die Fahrkarte teuer ist.',
        points: ['Wenn ich Zeit habe, rufe ich dich an.', 'Wenn es regnet, nehme ich den Bus.', 'Wenn du Lust hast, können wir ins Kino gehen.', 'Wenn ich alle Hausaufgaben gemacht habe, spiele ich.', 'Ich fahre mit dem Rad, wenn die Fahrkarte teuer ist.'],
        minWords: 42,
        frage: 'اكتب جمل wenn الخمس كاملة مع ترتيب الفعل الصحيح.',
        familie: 'wortstellung',
        hinweise: ['اختم جملة wenn بالفعل المصرف أو بمجموعة Perfekt gemacht habe.', 'إذا تقدمت جملة wenn فابدأ الجزء الرئيسي بالفعل المصرف ثم الفاعل.']
      },
      imitateNearMiss: 'hast',
      transformHint: 'بعد جملة wenn نقول können wir، ويبقى المصدر gehen في نهاية الجملة الرئيسية.',
      orderAr: 'رتّب الجملة كاملة: الجملة الرئيسية أولًا، ثم جملة wenn المنتهية بـ teuer ist.',
      orderHints: ['ابدأ بـ Ich fahre mit dem Rad ثم ضع الفاصلة.', 'بعد wenn رتّب die Fahrkarte teuer ist.'],
      orderSentence: 'Ich fahre mit dem Rad, wenn die Fahrkarte teuer ist.',
      checkOrderSentence: 'Ich fahre mit dem Rad, wenn die Fahrkarte teuer ist.',
      orderPromptAr: 'رتّب الجملة الرئيسية وجملة wenn ترتيبًا صحيحًا.',
      speakAr: 'سجّل عشرين ثانية: قل Wenn ich Zeit habe, rufe ich dich an وWenn es regnet, nehme ich den Bus وWenn du Lust hast, können wir ins Kino gehen وWenn ich alle Hausaufgaben gemacht habe, spiele ich وIch fahre mit dem Rad, wenn die Fahrkarte teuer ist.',
      summaryDe: 'Wenn ich Zeit habe, rufe ich dich an. · Wenn es regnet, nehme ich den Bus. · Wenn du Lust hast, können wir ins Kino gehen. · Wenn ich alle Hausaufgaben gemacht habe, spiele ich. · Ich fahre mit dem Rad, wenn die Fahrkarte teuer ist.',
      summaryAr: 'راجع جمل wenn الخمس: فعل نهائي، وجملة رئيسية تبدأ بالفعل، وmodal، وPerfekt، وترتيب يبدأ بالجملة الرئيسية.',
      summaryRecap: 'wenn Verbende dann Verb Subjekt'
    }),

  U('a2-u2-l1', 'A2', 'المقارنة بـ als وwie', 'Vergleiche mit als und wie', 'deklination',
    'Am Ende formulierst du fünf vollständige Vergleiche mit als und wie',
    'في النهاية تصوغ خمس مقارنات كاملة بـ als وwie.',
    [
      ['Der Zug ist schneller als der Bus.', 'تستعمل صيغة المقارنة schneller مع als لبيان الاختلاف', 'بعد صيغة المقارنة نستعمل als: schneller als', 'Der Zug ist schneller wie der Bus.', 'عند اختلاف الدرجتين نقول schneller als لا schneller wie'],
      ['Dieses Brot schmeckt besser als das andere.', 'تستعمل الصيغة الشاذة besser من gut', 'صيغة المقارنة من gut هي besser، وتتبعها als عند الاختلاف', 'Dieses Brot schmeckt guter als das andere.', 'نقول besser als، لا guter als'],
      ['Ich trinke lieber Tee als Kaffee.', 'تستعمل lieber للمفاضلة بين خيارين', 'صيغة المفاضلة من gern هي lieber: lieber Tee als Kaffee', 'Ich trinke gerner Tee als Kaffee.', 'نقول lieber لا gerner'],
      ['Mein Zimmer ist so groß wie dein Zimmer.', 'تستعمل so مع الصفة الأصلية وwie للتساوي', 'عند تساوي الدرجتين نقول so groß wie من دون صيغة المقارنة', 'Mein Zimmer ist so groß als dein Zimmer.', 'للتساوي نقول so groß wie لا so groß als']
    ],
    [
      ['Der Zug ist schneller als der Bus.', 'القطار أسرع من الحافلة', 'Der Zug ist schnell als der Bus.', 'نحتاج صيغة المقارنة schneller قبل als', 'schneller'],
      ['Dieses Brot schmeckt besser als das andere.', 'مذاق هذا الخبز أفضل من الآخر', 'Dieses Brot schmeckt guter als das andere.', 'صيغة المقارنة من gut هي besser', 'besser'],
      ['Ich trinke lieber Tee als Kaffee.', 'أفضّل الشاي على القهوة', 'Ich trinke gern Tee als Kaffee.', 'للمفاضلة بين الخيارين نحتاج lieber لا gern', 'lieber'],
      ['Mein Zimmer ist so groß wie dein Zimmer.', 'غرفتي بحجم غرفتك', 'Mein Zimmer ist so groß als dein Zimmer.', 'للتساوي نستعمل so … wie', 'wie']
    ],
    'Der Zug ist schneller als der Bus.',
    'Ich trinke lieber Tee als Kaffee.',
    'Wiederhole morgen die fünf Vergleiche: Der Zug ist schneller als der Bus. Die neue Wohnung ist heller als die alte. Dieses Brot schmeckt besser als das andere. Ich trinke lieber Tee als Kaffee. Mein Zimmer ist so groß wie dein Zimmer.',
    'غدًا راجع المقارنات الخمس مع als وso … wie والصيغ الشاذة.',
    {
      factFamilies: ['deklination', 'deklination', 'deklination', 'deklination'],
      writing: {
        zeigt: 'Fünf Vergleiche mit als und wie',
        erklaerung: 'اكتب المقارنات الخمس كاملة مع الصيغة والأداة الصحيحتين.',
        prompt: 'اكتب المقارنات الخمس: مقارنتين عاديتين، وbesser، وlieber، ومقارنة تساوٍ بـ so … wie.',
        promptDe: 'Der Zug ist schneller als der Bus. · Die neue Wohnung ist heller als die alte. · Dieses Brot schmeckt besser als das andere. · Ich trinke lieber Tee als Kaffee. · Mein Zimmer ist so groß wie dein Zimmer.',
        points: ['Der Zug ist schneller als der Bus.', 'Die neue Wohnung ist heller als die alte.', 'Dieses Brot schmeckt besser als das andere.', 'Ich trinke lieber Tee als Kaffee.', 'Mein Zimmer ist so groß wie dein Zimmer.'],
        minWords: 36,
        frage: 'اكتب المقارنات الخمس كاملة بـ als أو so … wie.',
        familie: 'deklination',
        hinweise: ['استعمل صيغة المقارنة مع als عند الاختلاف.', 'استعمل so مع الصفة الأصلية وwie عند التساوي.']
      },
      imitateNearMiss: 'schnell',
      transformHint: 'صيغة المفاضلة من gern هي lieber، وتتبعها als بين الخيارين.',
      orderAr: 'رتّب مقارنة الشقتين: الفعل ist في الموضع الثاني ثم heller als die alte.',
      orderHints: ['ابدأ بـ Die neue Wohnung وضع ist بعدها.', 'اختم بـ heller als die alte.'],
      orderSentence: 'Die neue Wohnung ist heller als die alte.',
      checkOrderSentence: 'Die neue Wohnung ist heller als die alte.',
      orderPromptAr: 'رتّب الكلمات لتكوين مقارنة كاملة بين الشقتين.',
      speakAr: 'سجّل عشرين ثانية: قل Der Zug ist schneller als der Bus وDie neue Wohnung ist heller als die alte وDieses Brot schmeckt besser als das andere وIch trinke lieber Tee als Kaffee وMein Zimmer ist so groß wie dein Zimmer.',
      summaryDe: 'Der Zug ist schneller als der Bus. · Die neue Wohnung ist heller als die alte. · Dieses Brot schmeckt besser als das andere. · Ich trinke lieber Tee als Kaffee. · Mein Zimmer ist so groß wie dein Zimmer.',
      summaryAr: 'راجع المقارنات الخمس: صيغة المقارنة مع als، والصيغتان besser وlieber، والتساوي بـ so … wie.',
      summaryRecap: 'Komparativ als so Grundform wie'
    }),

  U('a2-u2-l2', 'A2', 'التفضيل مع am وقبل الاسم', 'Superlativ mit am und vor Nomen', 'deklination',
    'Am Ende formulierst du fünf vollständige Superlative mit am oder vor einem Nomen',
    'في النهاية تصوغ خمس جمل تفضيل كاملة مع am أو قبل الاسم.',
    [
      ['Der ICE fährt am schnellsten.', 'تستعمل am schnellsten لوصف طريقة القيادة من دون اسم بعدها', 'في الاستعمال الخبري أو الظرفي يأتي غالبًا am مع صيغة -(e)sten', 'Der ICE fährt am schnellste.', 'بعد am نقول schnellsten لا schnellste'],
      ['Dieses Brot schmeckt am besten.', 'تستعمل الصيغة الشاذة am besten من gut', 'سلسلة gut هي gut – besser – am besten', 'Dieses Brot schmeckt am gutsten.', 'نقول am besten لا am gutsten'],
      ['Ich trinke am liebsten Tee.', 'تستعمل am liebsten لأعلى درجة من التفضيل', 'سلسلة gern هي gern – lieber – am liebsten', 'Ich trinke am gernsten Tee.', 'نقول am liebsten لا am gernsten'],
      ['Das ist der beste Film des Jahres.', 'تستعمل der beste قبل الاسم من دون am', 'قبل الاسم تأتي الصفة التفضيلية بنهاية توافق الجنس والحالة: der beste Film', 'Das ist am beste Film des Jahres.', 'قبل الاسم نقول der beste Film، لا am beste Film']
    ],
    [
      ['Der ICE fährt am schnellsten.', 'قطار ICE يسير بأعلى سرعة', 'Der ICE fährt am schnellste.', 'بعد am نحتاج schnellsten', 'schnellsten'],
      ['Dieses Brot schmeckt am besten.', 'مذاق هذا الخبز هو الأفضل', 'Dieses Brot schmeckt am gutsten.', 'صيغة التفضيل من gut هي am besten', 'besten'],
      ['Ich trinke am liebsten Tee.', 'أفضّل شرب الشاي أكثر من كل شيء', 'Ich trinke am gernsten Tee.', 'صيغة التفضيل من gern هي am liebsten', 'liebsten'],
      ['Das ist der beste Film des Jahres.', 'هذا أفضل فيلم في السنة', 'Das ist am beste Film des Jahres.', 'قبل الاسم نقول der beste Film من دون am', 'beste']
    ],
    'Dieses Brot schmeckt am besten.',
    'Ich trinke am liebsten Tee.',
    'Wiederhole morgen die fünf Sätze: Der ICE fährt am schnellsten. Dieses Brot schmeckt am besten. Ich trinke am liebsten Tee. Das Hotel hier ist am teuersten. Das ist der beste Film des Jahres.',
    'غدًا راجع جمل التفضيل الخمس مع am والصيغة التي تسبق الاسم.',
    {
      factFamilies: ['deklination', 'deklination', 'deklination', 'deklination'],
      writing: {
        zeigt: 'Fünf Superlative mit am und vor Nomen',
        erklaerung: 'اكتب جمل التفضيل الخمس كاملة بالصيغ الصحيحة.',
        prompt: 'اكتب الجمل الخمس: صيغتين منتظمتين مع am، وam besten، وam liebsten، وder beste قبل الاسم.',
        promptDe: 'Der ICE fährt am schnellsten. · Dieses Brot schmeckt am besten. · Ich trinke am liebsten Tee. · Das Hotel hier ist am teuersten. · Das ist der beste Film des Jahres.',
        points: ['Der ICE fährt am schnellsten.', 'Dieses Brot schmeckt am besten.', 'Ich trinke am liebsten Tee.', 'Das Hotel hier ist am teuersten.', 'Das ist der beste Film des Jahres.'],
        minWords: 28,
        frage: 'اكتب جمل التفضيل الخمس كاملة مع am أو قبل الاسم.',
        familie: 'deklination',
        hinweise: ['بعد am استعمل صيغة -(e)sten المناسبة.', 'قبل الاسم استعمل الأداة ونهاية الصفة المناسبة من دون am.']
      },
      imitateNearMiss: 'schnellste',
      transformHint: 'صيغة التفضيل من gern هي am liebsten.',
      orderAr: 'رتّب جملة الفندق: ابدأ بـ Das Hotel hier ثم ist ثم am teuersten.',
      orderHints: ['اجعل Das Hotel hier في الخانة الأولى.', 'ضع ist بعدها ثم am teuersten.'],
      orderSentence: 'Das Hotel hier ist am teuersten.',
      checkOrderSentence: 'Das Hotel hier ist am teuersten.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة تفضيل كاملة عن الفندق.',
      speakAr: 'سجّل عشرين ثانية: قل Der ICE fährt am schnellsten وDieses Brot schmeckt am besten وIch trinke am liebsten Tee وDas Hotel hier ist am teuersten وDas ist der beste Film des Jahres.',
      summaryDe: 'Der ICE fährt am schnellsten. · Dieses Brot schmeckt am besten. · Ich trinke am liebsten Tee. · Das Hotel hier ist am teuersten. · Das ist der beste Film des Jahres.',
      summaryAr: 'راجع الجمل الخمس: am schnellsten وam besten وam liebsten وam teuersten وder beste Film.',
      summaryRecap: 'am Superlativ der beste Film'
    }),

  U('a2-u2-l3', 'A2', 'نهايات الصفة في حالة الرفع', 'Adjektivendungen im Nominativ', 'deklination',
    'Am Ende verwendest du fünf Nominativgruppen mit den richtigen Adjektivendungen',
    'في النهاية تستعمل خمس مجموعات اسمية في حالة الرفع بنهايات الصفة الصحيحة.',
    [
      ['Der neue Kollege kommt aus Berlin.', 'تستعمل النهاية -e بعد أداة التعريف في المفرد المذكر', 'في الرفع مع der نقول der neue Kollege', 'Der neuer Kollege kommt aus Berlin.', 'بعد der نقول neue لا neuer'],
      ['Die kleinen Kinder spielen draußen.', 'تستعمل النهاية -en مع جمع أداة التعريف', 'في الرفع مع die للجمع نقول die kleinen Kinder', 'Die kleine Kinder spielen draußen.', 'مع جمع die نقول kleinen لا kleine'],
      ['Er ist ein guter Freund.', 'تستعمل النهاية -er مع ein والاسم المذكر في الرفع', 'لأن ein لا يُظهر علامة المذكر، تحملها الصفة: ein guter Freund', 'Er ist ein gute Freund.', 'في الرفع المذكر نقول ein guter Freund'],
      ['Das ist ein kleines Kind.', 'تستعمل النهاية -es مع ein والاسم المحايد في الرفع', 'لأن ein لا يُظهر علامة المحايد، تحملها الصفة: ein kleines Kind', 'Das ist ein kleine Kind.', 'في الرفع المحايد نقول ein kleines Kind']
    ],
    [
      ['Der neue Kollege kommt aus Berlin.', 'الزميل الجديد قادم من برلين', 'Der neuer Kollege kommt aus Berlin.', 'بعد der في الرفع نقول neue', 'neue'],
      ['Er ist ein guter Freund.', 'إنه صديق جيد', 'Er ist ein gute Freund.', 'في الرفع المذكر مع ein نقول guter', 'guter'],
      ['Das ist eine gute Idee.', 'هذه فكرة جيدة', 'Das ist eine guter Idee.', 'في الرفع المؤنث مع eine نقول gute', 'gute'],
      ['Das ist ein kleines Kind.', 'هذا طفل صغير', 'Das ist ein kleine Kind.', 'في الرفع المحايد مع ein نقول kleines', 'kleines']
    ],
    'Der neue Kollege kommt aus Berlin.',
    'Er ist ein guter Freund.',
    'Wiederhole morgen die fünf Sätze: Der neue Kollege kommt aus Berlin. Die kleinen Kinder spielen draußen. Er ist ein guter Freund. Das ist eine gute Idee. Das ist ein kleines Kind.',
    'غدًا راجع جمل الرفع الخمس مع -e و-en و-er و-es.',
    {
      factFamilies: ['deklination', 'deklination', 'deklination', 'deklination'],
      writing: {
        zeigt: 'Fünf Nominativgruppen mit Adjektiven',
        erklaerung: 'اكتب الجمل الخمس كاملة بنهايات الصفة الصحيحة.',
        prompt: 'اكتب الجمل الخمس: مفردًا مع der، وجمعًا مع die، ومذكرًا ومؤنثًا ومحايدًا مع ein/eine.',
        promptDe: 'Der neue Kollege kommt aus Berlin. · Die kleinen Kinder spielen draußen. · Er ist ein guter Freund. · Das ist eine gute Idee. · Das ist ein kleines Kind.',
        points: ['Der neue Kollege kommt aus Berlin.', 'Die kleinen Kinder spielen draußen.', 'Er ist ein guter Freund.', 'Das ist eine gute Idee.', 'Das ist ein kleines Kind.'],
        minWords: 26,
        frage: 'اكتب جمل الرفع الخمس كاملة بنهايات -e و-en و-er و-es.',
        familie: 'deklination',
        hinweise: ['بعد der في المفرد استعمل -e، ومع die للجمع استعمل -en.', 'مع ein/eine راجع guter وgute وkleines.']
      },
      imitateNearMiss: 'neuer',
      transformHint: 'في الرفع المذكر مع ein نقول ein guter Freund.',
      orderAr: 'رتّب الجملة: Das ثم ist ثم eine gute Idee.',
      orderHints: ['ابدأ بـ Das وضع ist في الموضع الثاني.', 'اختم بالمجموعة eine gute Idee.'],
      orderSentence: 'Das ist eine gute Idee.',
      checkOrderSentence: 'Das ist eine gute Idee.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة رفع صحيحة مع eine.',
      speakAr: 'سجّل عشرين ثانية: قل Der neue Kollege kommt aus Berlin وDie kleinen Kinder spielen draußen وEr ist ein guter Freund وDas ist eine gute Idee وDas ist ein kleines Kind.',
      summaryDe: 'Der neue Kollege kommt aus Berlin. · Die kleinen Kinder spielen draußen. · Er ist ein guter Freund. · Das ist eine gute Idee. · Das ist ein kleines Kind.',
      summaryAr: 'راجع نهايات الرفع: der neue، die kleinen، ein guter، eine gute، ein kleines.',
      summaryRecap: 'Nominativ e en er es'
    }),

  U('a2-u2-l4', 'A2', 'نهايات الصفة في حالة النصب', 'Adjektivendungen im Akkusativ', 'deklination',
    'Am Ende verwendest du fünf vollständige Akkusativgruppen mit den richtigen Adjektivendungen',
    'في النهاية تستعمل خمس مجموعات اسمية في حالة النصب بنهايات الصفة الصحيحة.',
    [
      ['Ich kenne den neuen Kollegen.', 'تستعمل -en بعد den مع المذكر المفرد في النصب', 'بعد den في المذكر المفرد تأتي الصفة بـ -en: den neuen Kollegen', 'Ich kenne den neue Kollegen.', 'بعد den نقول neuen لا neue'],
      ['Wir mieten die kleine Wohnung.', 'تستعمل -e بعد die مع المؤنث المفرد في النصب', 'مع die للمؤنث المفرد تأتي الصفة بـ -e: die kleine Wohnung', 'Wir mieten die kleinen Wohnung.', 'في المؤنث المفرد نقول die kleine Wohnung'],
      ['Wir kaufen das große Haus.', 'تستعمل -e بعد das مع المحايد المفرد في النصب', 'مع das للمحايد المفرد تأتي الصفة بـ -e: das große Haus', 'Wir kaufen das großen Haus.', 'في المحايد المفرد نقول das große Haus'],
      ['Ich sehe die alten Häuser.', 'تستعمل -en بعد die مع الجمع في النصب', 'مع die للجمع تأتي الصفة بـ -en: die alten Häuser', 'Ich sehe die alte Häuser.', 'في الجمع نقول die alten Häuser']
    ],
    [
      ['Ich kenne den neuen Kollegen.', 'أعرف الزميل الجديد', 'Ich kenne den neue Kollegen.', 'بعد den في المذكر المفرد نقول neuen', 'neuen'],
      ['Wir mieten die kleine Wohnung.', 'نستأجر الشقة الصغيرة', 'Wir mieten die kleinen Wohnung.', 'مع die للمؤنث المفرد نقول kleine', 'kleine'],
      ['Wir kaufen das große Haus.', 'نشتري البيت الكبير', 'Wir kaufen das großen Haus.', 'مع das للمحايد المفرد نقول große', 'große'],
      ['Ich sehe die alten Häuser.', 'أرى البيوت القديمة', 'Ich sehe die alte Häuser.', 'مع die للجمع نقول alten', 'alten']
    ],
    'Ich habe einen guten Freund.',
    'Ich habe einen guten Freund.',
    'Wiederhole morgen die fünf Sätze: Ich kenne den neuen Kollegen. Wir mieten die kleine Wohnung. Wir kaufen das große Haus. Ich sehe die alten Häuser. Ich habe einen guten Freund.',
    'غدًا راجع جمل النصب الخمس مع den/einen وdie وdas ونهايتَي -e و-en.',
    {
      factFamilies: ['deklination', 'deklination', 'deklination', 'deklination'],
      writing: {
        zeigt: 'Fünf Akkusativgruppen mit Adjektiven',
        erklaerung: 'اكتب الجمل الخمس كاملة بنهايات الصفة الصحيحة في حالة النصب.',
        prompt: 'اكتب الجمل الخمس: مذكرًا ومؤنثًا ومحايدًا وجمعًا مع أداة التعريف، ثم مذكرًا مع einen.',
        promptDe: 'Ich kenne den neuen Kollegen. · Wir mieten die kleine Wohnung. · Wir kaufen das große Haus. · Ich sehe die alten Häuser. · Ich habe einen guten Freund.',
        points: ['Ich kenne den neuen Kollegen.', 'Wir mieten die kleine Wohnung.', 'Wir kaufen das große Haus.', 'Ich sehe die alten Häuser.', 'Ich habe einen guten Freund.'],
        minWords: 25,
        frage: 'اكتب جمل النصب الخمس كاملة مع neuen وkleine وgroße وalten وguten.',
        familie: 'deklination',
        hinweise: ['في المذكر استعمل den/einen مع -en.', 'في المؤنث والمحايد المفردين استعمل -e، وفي الجمع استعمل -en.']
      },
      imitateNearMiss: 'neue',
      transformHint: 'مع einen في المذكر المفرد نقول einen guten Freund.',
      orderAr: 'رتّب الجملة: Ich ثم habe ثم einen guten Freund.',
      orderHints: ['ابدأ بـ Ich وضع habe في الموضع الثاني.', 'اختم بالمجموعة einen guten Freund.'],
      orderSentence: 'Ich habe einen guten Freund.',
      checkOrderSentence: 'Ich habe einen guten Freund.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة نصب صحيحة مع einen.',
      speakAr: 'سجّل عشرين ثانية: قل Ich kenne den neuen Kollegen وWir mieten die kleine Wohnung وWir kaufen das große Haus وIch sehe die alten Häuser وIch habe einen guten Freund.',
      summaryDe: 'Ich kenne den neuen Kollegen. · Wir mieten die kleine Wohnung. · Wir kaufen das große Haus. · Ich sehe die alten Häuser. · Ich habe einen guten Freund.',
      summaryAr: 'راجع نهايات النصب: den neuen، die kleine، das große، die alten، einen guten.',
      summaryRecap: 'Akkusativ e en'
    }),

  U('a2-u2-l5', 'A2', 'الأفعال الانعكاسية', 'Reflexivverben', 'kasus',
    'Am Ende verwendest du fünf vollständige Sätze mit reflexiven Pronomen im Akkusativ oder Dativ',
    'في النهاية تستعمل ضمائر انعكاسية في النصب أو الداتيف ضمن خمس جمل كاملة.',
    [
      ['Ich wasche mich jeden Morgen.', 'تستعمل mich عندما يعود الفعل إلى الفاعل ولا يوجد مفعول به آخر', 'مع ich ومن دون مفعول به آخر نقول ich wasche mich', 'Ich wasche mir jeden Morgen.', 'من دون مفعول به آخر نقول mich لا mir'],
      ['Ich wasche mir die Hände.', 'تستعمل mir عندما يكون جزء الجسم هو المفعول به في النصب', 'die Hände مفعول به في النصب، لذلك يأتي ضمير الشخص في الداتيف mir', 'Ich wasche mich die Hände.', 'مع die Hände نقول mir لا mich'],
      ['Wir treffen uns um sechs.', 'تطابق الضمير الانعكاسي مع الفاعل wir', 'مع wir يأتي الضمير uns: Wir treffen uns', 'Wir treffen sich um sechs.', 'مع wir نقول uns لا sich'],
      ['Ich ziehe mich schnell an.', 'تضع الضمير في الوسط وسابقة الفعل المنفصل في النهاية', 'في الجملة الرئيسية نقول ziehe mich ... an', 'Ich ziehe schnell mich an.', 'الترتيب الطبيعي هنا: Ich ziehe mich schnell an']
    ],
    [
      ['Ich wasche mich jeden Morgen.', 'أغتسل كل صباح', 'Ich wasche mir jeden Morgen.', 'من دون مفعول به آخر نقول mich', 'mich'],
      ['Ich wasche mir die Hände.', 'أغسل يديّ', 'Ich wasche mich die Hände.', 'لأن die Hände مفعول به في النصب نقول mir', 'mir'],
      ['Wir treffen uns um sechs.', 'نلتقي عند الساعة السادسة', 'Wir treffen sich um sechs.', 'مع wir نستخدم uns', 'uns'],
      ['Ich ziehe mich schnell an.', 'أرتدي ملابسي بسرعة', 'Ich ziehe schnell mich an.', 'يأتي mich قبل الظرف وقبل السابقة النهائية an', 'mich']
    ],
    'Ich freue mich auf den Urlaub.',
    'Ich freue mich auf den Urlaub.',
    'Wiederhole morgen die fünf Sätze: Ich wasche mich jeden Morgen. Ich wasche mir die Hände. Wir treffen uns um sechs. Ich ziehe mich schnell an. Ich freue mich auf den Urlaub.',
    'غدًا راجع الجمل الخمس مع mich وmir وuns والفعل المنفصل وحرف الجر الثابت.',
    {
      factFamilies: ['kasus', 'kasus', 'kasus', 'wortstellung'],
      writing: {
        zeigt: 'Fünf Sätze mit Reflexivpronomen',
        erklaerung: 'اكتب الجمل الخمس كاملة بالضمير والترتيب وحرف الجر الصحيح.',
        prompt: 'اكتب الجمل الخمس: mich من دون مفعول آخر، وmir مع جزء الجسم، وuns مع wir، وفعلًا منفصلًا، وsich freuen auf.',
        promptDe: 'Ich wasche mich jeden Morgen. · Ich wasche mir die Hände. · Wir treffen uns um sechs. · Ich ziehe mich schnell an. · Ich freue mich auf den Urlaub.',
        points: ['Ich wasche mich jeden Morgen.', 'Ich wasche mir die Hände.', 'Wir treffen uns um sechs.', 'Ich ziehe mich schnell an.', 'Ich freue mich auf den Urlaub.'],
        minWords: 26,
        frage: 'اكتب الجمل الخمس كاملة مع mich وmir وuns وan وauf.',
        familie: 'kasus',
        hinweise: ['طابق الضمير مع الفاعل، وميّز mich من mir عند وجود جزء من الجسم.', 'ضع سابقة الفعل المنفصل في النهاية واحفظ حرف الجر مع الفعل.']
      },
      imitateNearMiss: 'mir',
      transformHint: 'مع sich freuen على حدث منتظر نقول mich auf den Urlaub.',
      orderAr: 'رتّب الجملة: Wir ثم treffen ثم uns ثم um sechs.',
      orderHints: ['ابدأ بـ Wir وضع treffen في الموضع الثاني.', 'ضع uns بعد الفعل ثم اختم بـ um sechs.'],
      orderSentence: 'Wir treffen uns um sechs.',
      checkOrderSentence: 'Wir treffen uns um sechs.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة صحيحة مع wir وuns.',
      speakAr: 'سجّل عشرين ثانية: قل Ich wasche mich jeden Morgen وIch wasche mir die Hände وWir treffen uns um sechs وIch ziehe mich schnell an وIch freue mich auf den Urlaub.',
      summaryDe: 'Ich wasche mich jeden Morgen. · Ich wasche mir die Hände. · Wir treffen uns um sechs. · Ich ziehe mich schnell an. · Ich freue mich auf den Urlaub.',
      summaryAr: 'راجع الجمل الخمس: mich من دون مفعول آخر، وmir مع die Hände، وuns مع wir، وmich ... an، وmich auf den Urlaub.',
      summaryRecap: 'mich mir uns Reflexiv'
    }),

  U('a2-u2-l6', 'A2', 'ماضي sein وhaben البسيط', 'Präteritum von sein und haben', 'konjugation',
    'Am Ende verwendest du war, warst, waren, hatte und hatten in fünf vollständigen Sätzen',
    'في النهاية تستعمل war وwarst وwaren وhatte وhatten في خمس جمل كاملة.',
    [
      ['Gestern war ich krank.', 'تستعمل war مع ich وتضع الفعل في الموقع الثاني بعد Gestern', 'بعد العبارة الزمنية في البداية يأتي الفعل المصرف ثم الفاعل', 'Gestern ich war krank.', 'الترتيب الصحيح: Gestern war ich krank'],
      ['Du warst zu Hause.', 'صيغة sein في الماضي مع du هي warst', 'تأخذ صيغة du النهاية -st: du warst', 'Du war zu Hause.', 'مع du نقول warst لا war'],
      ['Wir waren im Kino.', 'صيغة sein في الماضي مع wir هي waren', 'يطابق الفعل الفاعل wir: wir waren', 'Wir war im Kino.', 'مع wir نقول waren لا war'],
      ['Ich hatte keine Zeit.', 'صيغة haben في الماضي مع ich هي hatte', 'مع الاسم Zeit نستعمل haben: Ich hatte keine Zeit', 'Ich hatten keine Zeit.', 'مع ich نقول hatte لا hatten']
    ],
    [
      ['Gestern war ich krank.', 'كنت مريضًا أمس', 'Gestern ich war krank.', 'بعد Gestern يأتي الفعل war ثم الفاعل ich', 'war'],
      ['Du warst zu Hause.', 'كنتَ / كنتِ في المنزل', 'Du war zu Hause.', 'مع du نقول warst', 'warst'],
      ['Wir waren im Kino.', 'كنا في السينما', 'Wir war im Kino.', 'مع wir نقول waren', 'waren'],
      ['Ich hatte keine Zeit.', 'لم يكن لديّ وقت', 'Ich hatten keine Zeit.', 'مع ich نقول hatte', 'hatte']
    ],
    'Gestern war ich krank. Du warst zu Hause. Wir waren im Kino. Ich hatte keine Zeit. Wir hatten viel Arbeit.',
    'Wir hatten viel Arbeit.',
    'Wiederhole morgen die fünf Sätze: Gestern war ich krank. Du warst zu Hause. Wir waren im Kino. Ich hatte keine Zeit. Wir hatten viel Arbeit.',
    'غدًا راجع الجمل الخمس مع war وwarst وwaren وhatte وhatten.',
    {
      factFamilies: ['wortstellung', 'konjugation', 'konjugation', 'konjugation'],
      writing: {
        zeigt: 'Fünf Sätze im Präteritum',
        erklaerung: 'اكتب الجمل الخمس كاملة مع صيغة الفعل والترتيب الصحيحين.',
        prompt: 'اكتب الجمل الخمس: war بعد Gestern، وwarst مع du، وwaren مع wir، وhatte مع ich، وhatten مع wir.',
        promptDe: 'Gestern war ich krank. · Du warst zu Hause. · Wir waren im Kino. · Ich hatte keine Zeit. · Wir hatten viel Arbeit.',
        points: ['Gestern war ich krank.', 'Du warst zu Hause.', 'Wir waren im Kino.', 'Ich hatte keine Zeit.', 'Wir hatten viel Arbeit.'],
        minWords: 20,
        frage: 'اكتب الجمل الخمس كاملة مع war وwarst وwaren وhatte وhatten.',
        familie: 'konjugation',
        hinweise: ['طابق صيغة الفعل مع ich وdu وwir.', 'إذا بدأت بعبارة زمنية، ضع الفعل المصرف في الموقع الثاني.']
      },
      imitateNearMiss: 'hatte',
      transformHint: 'مع wir نقول Wir hatten viel Arbeit.',
      orderAr: 'رتّب الجملة: Wir ثم waren ثم im Kino.',
      orderHints: ['ابدأ بـ Wir وضع waren في الموقع الثاني.', 'اختم بالمكان im Kino.'],
      orderSentence: 'Wir waren im Kino.',
      checkOrderSentence: 'Wir waren im Kino.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة صحيحة مع wir وwaren.',
      speakAr: 'سجّل عشرين ثانية: قل Gestern war ich krank وDu warst zu Hause وWir waren im Kino وIch hatte keine Zeit وWir hatten viel Arbeit.',
      summaryDe: 'Gestern war ich krank. · Du warst zu Hause. · Wir waren im Kino. · Ich hatte keine Zeit. · Wir hatten viel Arbeit.',
      summaryAr: 'راجع الجمل الخمس: war مع ich، وwarst مع du، وwaren مع wir، وhatte مع ich، وhatten مع wir.',
      summaryRecap: 'war warst waren hatte hatten'
    }),

  U('a2-u3-l1', 'A2', 'الطلبات المهذّبة بصيغة Konjunktiv II', 'Höfliche Bitten mit Konjunktiv II', 'register',
    'Am Ende verwendest du fünf höfliche Sätze mit würde, würden, könnten, hätten und wäre',
    'في النهاية تستعمل خمس جمل مهذّبة مع würde وwürden وkönnten وhätten وwäre.',
    [
      ['Ich würde gern einen Tisch reservieren.', 'تستعمل würde مع المصدر في نهاية الجملة للتعبير عن رغبة مهذّبة', 'بعد würde يأتي المصدر reservieren في النهاية من دون zu', 'Ich würde gern einen Tisch reservierte.', 'بعد würde نستخدم المصدر reservieren لا reservierte'],
      ['Würden Sie das bitte wiederholen?', 'تبدأ سؤال الطلب الرسمي بـ Würden Sie وتضع المصدر في النهاية', 'مع Sie الرسمية نقول Würden Sie، ويأتي wiederholen في النهاية', 'Würdest Sie das bitte wiederholen?', 'مع Sie الرسمية نقول Würden لا Würdest'],
      ['Könnten Sie bitte einen Arzt rufen?', 'تستعمل Könnten Sie لتلطيف طلب رسمي', 'مع Sie الرسمية نقول Könnten Sie، ويأتي المصدر rufen في النهاية', 'Könntest Sie bitte einen Arzt rufen?', 'مع Sie الرسمية نقول Könnten لا Könntest'],
      ['Hätten Sie noch ein Zimmer frei?', 'تستعمل Hätten Sie للسؤال المهذّب عن توافر شيء', 'مع Sie الرسمية نقول Hätten Sie', 'Hätte Sie noch ein Zimmer frei?', 'مع Sie الرسمية نقول Hätten لا Hätte']
    ],
    [
      ['Ich würde gern einen Tisch reservieren.', 'أودّ حجز طاولة', 'Ich würde gern einen Tisch reservierte.', 'بعد würde يأتي المصدر reservieren', 'würde'],
      ['Würden Sie das bitte wiederholen?', 'هل تتكرّمون بإعادة ذلك؟', 'Würdest Sie das bitte wiederholen?', 'مع Sie الرسمية نقول Würden', 'Würden'],
      ['Könnten Sie bitte einen Arzt rufen?', 'هل يمكنكم استدعاء طبيب من فضلكم؟', 'Könntest Sie bitte einen Arzt rufen?', 'مع Sie الرسمية نقول Könnten', 'Könnten'],
      ['Hätten Sie noch ein Zimmer frei?', 'هل لديكم غرفة شاغرة أخرى؟', 'Hätte Sie noch ein Zimmer frei?', 'مع Sie الرسمية نقول Hätten', 'Hätten']
    ],
    'Ich würde gern einen Tisch reservieren. Würden Sie das bitte wiederholen? Könnten Sie bitte einen Arzt rufen? Hätten Sie noch ein Zimmer frei? Das wäre sehr nett von Ihnen.',
    'Das wäre sehr nett von Ihnen.',
    'Wiederhole morgen die fünf Sätze: Ich würde gern einen Tisch reservieren. Würden Sie das bitte wiederholen? Könnten Sie bitte einen Arzt rufen? Hätten Sie noch ein Zimmer frei? Das wäre sehr nett von Ihnen.',
    'غدًا راجع الجمل الخمس المهذّبة مع würde وwürden وkönnten وhätten وwäre.',
    {
      factFamilies: ['konjugation', 'konjugation', 'konjugation', 'konjugation'],
      writing: {
        zeigt: 'Fünf höfliche Sätze im Konjunktiv II',
        erklaerung: 'اكتب الجمل الخمس كاملة مع صيغة Konjunktiv II والمصدر في موضعهما الصحيح.',
        prompt: 'اكتب الجمل الخمس: رغبة بـ würde، وطلبًا بـ Würden Sie، وطلبًا بـ Könnten Sie، وسؤالًا بـ Hätten Sie، وردًا بـ wäre.',
        promptDe: 'Ich würde gern einen Tisch reservieren. · Würden Sie das bitte wiederholen? · Könnten Sie bitte einen Arzt rufen? · Hätten Sie noch ein Zimmer frei? · Das wäre sehr nett von Ihnen.',
        points: ['Ich würde gern einen Tisch reservieren.', 'Würden Sie das bitte wiederholen?', 'Könnten Sie bitte einen Arzt rufen?', 'Hätten Sie noch ein Zimmer frei?', 'Das wäre sehr nett von Ihnen.'],
        minWords: 29,
        frage: 'اكتب الجمل الخمس كاملة مع würde وwürden وkönnten وhätten وwäre.',
        familie: 'register',
        hinweise: ['طابق صيغة الفعل مع ich أو Sie الرسمية.', 'في تراكيب würde وwürden وkönnten ضع المصدر في النهاية من دون zu.']
      },
      imitateNearMiss: 'würdest',
      transformHint: 'نقول Das wäre sehr nett von Ihnen بصيغة wäre.',
      orderAr: 'رتّب السؤال: Würden ثم Sie ثم das bitte ثم wiederholen.',
      orderHints: ['ابدأ بالفعل Würden لأن هذا سؤال نعم/لا.', 'ضع Sie بعده واختم بالمصدر wiederholen.'],
      orderSentence: 'Würden Sie das bitte wiederholen?',
      orderRightBracket: 'wiederholen?',
      checkOrderSentence: 'Würden Sie das bitte wiederholen?',
      checkOrderRightBracket: 'wiederholen?',
      orderPromptAr: 'رتّب الكلمات لتكوين سؤال طلب مهذّب مع Würden Sie.',
      speakAr: 'سجّل عشرين ثانية: قل Ich würde gern einen Tisch reservieren وWürden Sie das bitte wiederholen وKönnten Sie bitte einen Arzt rufen وHätten Sie noch ein Zimmer frei وDas wäre sehr nett von Ihnen.',
      summaryDe: 'Ich würde gern einen Tisch reservieren. · Würden Sie das bitte wiederholen? · Könnten Sie bitte einen Arzt rufen? · Hätten Sie noch ein Zimmer frei? · Das wäre sehr nett von Ihnen.',
      summaryAr: 'راجع الجمل الخمس: würde مع ich، وWürden/Könnten/Hätten مع Sie الرسمية، وwäre في الرد المهذّب.',
      summaryRecap: 'würde würden könnten hätten wäre'
    }),

  U('a2-u3-l2', 'A2', 'أفعال مع حروف جر ثابتة', 'Verben mit festen Präpositionen', 'präposition',
    'Am Ende verwendest du fünf Verben mit ihrer festen Präposition in vollständigen Sätzen',
    'في النهاية تستعمل خمسة أفعال مع حروف جرها الثابتة في جمل كاملة.',
    [
      ['Ich warte auf den Bus.', 'تستعمل warten auf مع مفعول في النصب', 'في هذا التركيب نقول auf den Bus', 'Ich warte für den Bus.', 'مع warten نقول auf den Bus لا für den Bus'],
      ['Ich denke oft an meine Familie.', 'تستعمل denken an عندما تفكر في شخص أو شيء', 'في هذا المعنى نقول an meine Familie', 'Ich denke oft meine Familie.', 'مع هذا المعنى نحتاج an: an meine Familie'],
      ['Wir sprechen über den Film.', 'تستعمل sprechen über لذكر موضوع الحديث', 'موضوع الحديث يأتي مع über: über den Film', 'Wir sprechen den Film.', 'لذكر الموضوع نقول über den Film'],
      ['Wir freuen uns auf den Urlaub.', 'تستعمل sich freuen auf مع شيء منتظر', 'مع wir يأتي uns، ومع الحدث القادم نقول auf den Urlaub', 'Wir freuen uns den Urlaub.', 'نحتاج الضمير uns والحرف auf']
    ],
    [
      ['Ich warte auf den Bus.', 'أنتظر الحافلة', 'Ich warte für den Bus.', 'مع warten نقول auf den Bus', 'auf'],
      ['Ich denke oft an meine Familie.', 'أفكر كثيرًا في عائلتي', 'Ich denke oft meine Familie.', 'في هذا المعنى نستخدم an', 'an'],
      ['Wir sprechen über den Film.', 'نتحدث عن الفيلم', 'Wir sprechen den Film.', 'موضوع الحديث يأتي مع über', 'über'],
      ['Wir freuen uns auf den Urlaub.', 'نتطلع إلى العطلة', 'Wir freuen uns den Urlaub.', 'مع الشيء المنتظر نستخدم auf', 'auf']
    ],
    'Ich warte auf den Bus. Ich denke oft an meine Familie. Wir sprechen über den Film. Wir freuen uns auf den Urlaub. Ich nehme am Kurs teil.',
    'Ich nehme am Kurs teil.',
    'Wiederhole morgen die fünf Sätze: Ich warte auf den Bus. Ich denke oft an meine Familie. Wir sprechen über den Film. Wir freuen uns auf den Urlaub. Ich nehme am Kurs teil.',
    'غدًا راجع الجمل الخمس مع auf وan وüber وauf وan مع الداتيف.',
    {
      factFamilies: ['präposition', 'präposition', 'präposition', 'präposition'],
      writing: {
        zeigt: 'Fünf Sätze mit festen Präpositionen',
        erklaerung: 'اكتب الجمل الخمس كاملة مع الفعل والحرف والحالة الصحيحة.',
        prompt: 'اكتب الجمل الخمس: warten auf، وdenken an، وsprechen über، وsich freuen auf، وteilnehmen an.',
        promptDe: 'Ich warte auf den Bus. · Ich denke oft an meine Familie. · Wir sprechen über den Film. · Wir freuen uns auf den Urlaub. · Ich nehme am Kurs teil.',
        points: ['Ich warte auf den Bus.', 'Ich denke oft an meine Familie.', 'Wir sprechen über den Film.', 'Wir freuen uns auf den Urlaub.', 'Ich nehme am Kurs teil.'],
        minWords: 27,
        frage: 'اكتب الجمل الخمس كاملة مع حروف الجر الصحيحة.',
        familie: 'präposition',
        hinweise: ['احفظ الفعل مع حرف الجر كوحدة واحدة.', 'انتبه إلى Akkusativ مع auf/an/über هنا وإلى Dativ في am Kurs.']
      },
      imitateNearMiss: 'für',
      transformHint: 'نقول Ich nehme am Kurs teil؛ am اختصار an dem.',
      orderAr: 'رتّب الجملة: Wir ثم sprechen ثم über den Film.',
      orderHints: ['ابدأ بـ Wir وضع sprechen في الموقع الثاني.', 'ضع موضوع الحديث بعد über.'],
      orderSentence: 'Wir sprechen über den Film.',
      checkOrderSentence: 'Wir sprechen über den Film.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة صحيحة مع sprechen über.',
      speakAr: 'سجّل عشرين ثانية: قل Ich warte auf den Bus وIch denke oft an meine Familie وWir sprechen über den Film وWir freuen uns auf den Urlaub وIch nehme am Kurs teil.',
      summaryDe: 'Ich warte auf den Bus. · Ich denke oft an meine Familie. · Wir sprechen über den Film. · Wir freuen uns auf den Urlaub. · Ich nehme am Kurs teil.',
      summaryAr: 'راجع الجمل الخمس: warten auf، وdenken an، وsprechen über، وsich freuen auf، وteilnehmen an مع am.',
      summaryRecap: 'auf an über auf an'
    }),

  U('a2-u3-l3', 'A2', 'حالة Genitiv للملكية ومع حروف الجر', 'Genitiv bei Besitz und Präpositionen', 'deklination',
    'Am Ende verwendest du fünf vollständige Genitivsätze mit Namen, Nomen und Präpositionen',
    'في النهاية تستعمل حالة Genitiv في خمس جمل كاملة مع أسماء الأشخاص والأسماء العامة وحروف الجر.',
    [
      ['Annas Tasche ist hier.', 'تضيف s إلى اسم الشخص العادي للدلالة على الملكية', 'في النص العادي نكتب Annas بلا فاصلة عليا', 'Anna Tasche ist hier.', 'نحتاج s الملكية: Annas Tasche'],
      ["Das ist Max' Fahrrad.", 'تستعمل الفاصلة العليا بعد اسم ينتهي بصوت s من دون s إضافية', "ينتهي Max بحرف x، لذلك نكتب Max' ولا نترك الاسم بلا علامة ملكية", 'Das ist Max Fahrrad.', "بعد Max نضع فاصلة عليا فقط: Max' Fahrrad"],
      ['Das Auto meines Vaters steht hier.', 'تستعمل meines مع الاسم المذكر وتضيف s إلى Vater', 'صيغة Genitiv هنا meines Vaters', 'Das Auto meines Vater steht hier.', 'بعد meines نحتاج هنا Vaters'],
      ['Die Namen der Gäste stehen hier.', 'تستعمل der مع جمع Genitiv', 'جمع Genitiv هنا der Gäste', 'Die Namen des Gäste stehen hier.', 'مع الجمع نقول der Gäste لا des Gäste']
    ],
    [
      ['Annas Tasche ist hier.', 'حقيبة آنا هنا', 'Anna Tasche ist hier.', 'نحتاج s الملكية: Annas Tasche', 'Annas'],
      ["Das ist Max' Fahrrad.", 'هذه دراجة ماكس', 'Das ist Max Fahrrad.', "بعد الاسم المنتهي بـ x نكتب Max'", "Max'"],
      ['Das Auto meines Vaters steht hier.', 'سيارة والدي هنا', 'Das Auto meines Vater steht hier.', 'نقول meines Vaters', 'Vaters'],
      ['Die Namen der Gäste stehen hier.', 'أسماء الضيوف مكتوبة هنا', 'Die Namen des Gäste stehen hier.', 'جمع Genitiv يأخذ der: der Gäste', 'der']
    ],
    "Annas Tasche ist hier. Das ist Max' Fahrrad. Das Auto meines Vaters steht hier. Die Namen der Gäste stehen hier. Wegen des Regens bleiben wir hier.",
    'Wegen des Regens bleiben wir hier.',
    "Wiederhole morgen die fünf Sätze: Annas Tasche ist hier. Das ist Max' Fahrrad. Das Auto meines Vaters steht hier. Die Namen der Gäste stehen hier. Wegen des Regens bleiben wir hier.",
    'غدًا راجع الجمل الخمس مع أسماء الأشخاص والأسماء العامة وwegen.',
    {
      factFamilies: ['deklination', 'deklination', 'kasus', 'kasus'],
      writing: {
        zeigt: 'Fünf Genitivsätze',
        erklaerung: 'اكتب الجمل الخمس كاملة مع Annas وMax’ وmeines Vaters وder Gäste وwegen des Regens.',
        prompt: 'اكتب الجمل الخمس مستعملًا صيغ Genitiv الصحيحة.',
        promptDe: "Annas Tasche ist hier. · Das ist Max' Fahrrad. · Das Auto meines Vaters steht hier. · Die Namen der Gäste stehen hier. · Wegen des Regens bleiben wir hier.",
        points: ['Annas Tasche ist hier.', "Das ist Max' Fahrrad.", 'Das Auto meines Vaters steht hier.', 'Die Namen der Gäste stehen hier.', 'Wegen des Regens bleiben wir hier.'],
        minWords: 26,
        frage: 'اكتب الجمل الخمس كاملة بصيغ الملكية وحرف الجر الصحيحة.',
        familie: 'deklination',
        hinweise: ['أضف s إلى Anna، لكن ضع فاصلة عليا فقط بعد Max.', 'راجع meines Vaters وder Gäste وwegen des Regens.']
      },
      imitateNearMiss: 'Anna',
      transformHint: 'بعد wegen ندرّب هنا الصيغة المعيارية des Regens.',
      orderAr: "رتّب الجملة: Das ist ثم Max' Fahrrad.",
      orderHints: ['ابدأ بـ Das وضع ist في الموضع الثاني.', "ضع Max' قبل Fahrrad."],
      orderSentence: "Das ist Max' Fahrrad.",
      checkOrderSentence: "Das ist Max' Fahrrad.",
      orderPromptAr: 'رتّب الكلمات لتكوين جملة ملكية صحيحة مع Max.',
      speakAr: "سجّل عشرين ثانية: قل Annas Tasche ist hier وDas ist Max' Fahrrad وDas Auto meines Vaters steht hier وDie Namen der Gäste stehen hier وWegen des Regens bleiben wir hier.",
      summaryDe: "Annas Tasche ist hier. · Das ist Max' Fahrrad. · Das Auto meines Vaters steht hier. · Die Namen der Gäste stehen hier. · Wegen des Regens bleiben wir hier.",
      summaryAr: 'راجع Annas بلا فاصلة، وMax’ بفاصلة عليا، وmeines Vaters وder Gäste وdes Regens.',
      summaryRecap: "Annas Max' meines der wegen"
    }),

  U('a2-u3-l4', 'A2', 'السفر: التذكرة وتغيير القطار والإقامة', 'Reisen: Fahrkarte, Umsteigen und Unterkunft', 'lexik-kollokation',
    'Am Ende verwendest du fünf vollständige Reisesätze für Fahrkarte, Verspätung, Umsteigen und Unterkunft',
    'في النهاية تستعمل خمس جمل سفر كاملة للتذكرة والتأخير وتغيير القطار والإقامة.',
    [
      ['Ich möchte eine Fahrkarte nach Berlin, bitte.', 'تطلب تذكرة إلى وجهة محددة بجملة مهذبة', 'Fahrkarte وTicket كلمتان صحيحتان؛ الجملة هنا تتدرّب على Fahrkarte', 'Ich möchte einen Fahrkarte nach Berlin, bitte.', 'Fahrkarte مؤنث؛ نقول eine Fahrkarte'],
      ['Ich möchte hin und zurück fahren.', 'تطلب رحلة ذهاب وإياب باستعمال hin und zurück', 'بعد möchte يأتي المصدر fahren في النهاية', 'Ich möchte hin und zurück fährt.', 'بعد möchte نحتاج المصدر fahren'],
      ['Der Zug hat zwanzig Minuten Verspätung.', 'تذكر مدة التأخير مع Verspätung haben', 'بعد zwanzig نستخدم الجمع Minuten', 'Der Zug hat zwanzig Minute Verspätung.', 'بعد العدد نقول zwanzig Minuten'],
      ['In Frankfurt müssen wir umsteigen.', 'تذكر مكان تغيير القطار مع müssen وumsteigen', 'بعد müssen يأتي المصدر المنفصل متصلًا: umsteigen', 'In Frankfurt müssen wir umgestiegen.', 'بعد müssen نحتاج المصدر umsteigen']
    ],
    [
      ['Ich möchte eine Fahrkarte nach Berlin, bitte.', 'أريد تذكرة إلى برلين من فضلك', 'Ich möchte einen Fahrkarte nach Berlin, bitte.', 'Fahrkarte مؤنث: eine Fahrkarte', 'Fahrkarte'],
      ['Ich möchte hin und zurück fahren.', 'أريد السفر ذهابًا وإيابًا', 'Ich möchte hin und zurück fährt.', 'بعد möchte يأتي المصدر fahren', 'fahren'],
      ['Der Zug hat zwanzig Minuten Verspätung.', 'القطار متأخر عشرين دقيقة', 'Der Zug hat zwanzig Minute Verspätung.', 'بعد العدد نستخدم Minuten', 'Minuten'],
      ['In Frankfurt müssen wir umsteigen.', 'علينا تغيير القطار في فرانكفورت', 'In Frankfurt müssen wir umgestiegen.', 'بعد müssen نستخدم المصدر umsteigen', 'umsteigen']
    ],
    'Die Reise nach Berlin war lang. Ich möchte eine Fahrkarte nach Berlin, bitte. Der Zug hat zwanzig Minuten Verspätung. In Frankfurt müssen wir umsteigen. Ich habe ein Einzelzimmer gebucht.',
    'Ich habe ein Einzelzimmer gebucht.',
    'Wiederhole morgen die fünf Sätze: Die Reise nach Berlin war lang. Ich möchte eine Fahrkarte nach Berlin, bitte. Der Zug hat zwanzig Minuten Verspätung. In Frankfurt müssen wir umsteigen. Ich habe ein Einzelzimmer gebucht.',
    'غدًا راجع الجمل الخمس عن الرحلة والتذكرة والتأخير وتغيير القطار والغرفة.',
    {
      factFamilies: ['genus', 'konjugation', 'plural', 'konjugation'],
      writing: {
        zeigt: 'Fünf vollständige Reisesätze',
        erklaerung: 'اكتب الجمل الخمس كاملة عن الرحلة والتذكرة والتأخير وتغيير القطار والإقامة.',
        prompt: 'اكتب الجمل الخمس مستعملًا العبارات الصحيحة في سياق السفر.',
        promptDe: 'Die Reise nach Berlin war lang. · Ich möchte eine Fahrkarte nach Berlin, bitte. · Der Zug hat zwanzig Minuten Verspätung. · In Frankfurt müssen wir umsteigen. · Ich habe ein Einzelzimmer gebucht.',
        points: ['Die Reise nach Berlin war lang.', 'Ich möchte eine Fahrkarte nach Berlin, bitte.', 'Der Zug hat zwanzig Minuten Verspätung.', 'In Frankfurt müssen wir umsteigen.', 'Ich habe ein Einzelzimmer gebucht.'],
        minWords: 29,
        frage: 'اكتب الجمل الخمس كاملة بصيغ السفر الصحيحة.',
        familie: 'lexik-kollokation',
        hinweise: ['استعمل eine Fahrkarte وzwanzig Minuten Verspätung.', 'بعد müssen استعمل umsteigen، وفي الجملة الأخيرة استعمل ein Einzelzimmer gebucht.']
      },
      imitateNearMiss: 'Fahrkarten',
      transformHint: 'في Perfekt نقول Ich habe ein Einzelzimmer gebucht.',
      orderAr: 'رتّب طلب التذكرة الكامل: Ich möchte ثم eine Fahrkarte ثم nach Berlin, bitte.',
      orderHints: ['ابدأ بـ Ich وضع möchte في الموضع الثاني.', 'ضع eine Fahrkarte قبل الوجهة nach Berlin.'],
      orderSentence: 'Ich möchte eine Fahrkarte nach Berlin, bitte.',
      checkOrderSentence: 'Ich möchte eine Fahrkarte nach Berlin, bitte.',
      orderPromptAr: 'رتّب الكلمات لتكوين طلب تذكرة مهذب وكامل.',
      speakAr: 'سجّل عشرين ثانية: قل Die Reise nach Berlin war lang وIch möchte eine Fahrkarte nach Berlin, bitte وDer Zug hat zwanzig Minuten Verspätung وIn Frankfurt müssen wir umsteigen وIch habe ein Einzelzimmer gebucht.',
      summaryDe: 'Die Reise nach Berlin war lang. · Ich möchte eine Fahrkarte nach Berlin, bitte. · Der Zug hat zwanzig Minuten Verspätung. · In Frankfurt müssen wir umsteigen. · Ich habe ein Einzelzimmer gebucht.',
      summaryAr: 'راجع Reise وeine Fahrkarte وMinuten Verspätung وmüssen wir umsteigen وEinzelzimmer gebucht.',
      summaryRecap: 'Reise Fahrkarte Verspätung umsteigen Einzelzimmer'
    }),

  U('a2-u3-l5', 'A2', 'الصحة: الأعراض وموعد الطبيب والأدوية', 'Gesundheit: Beschwerden, Arzttermin und Medikamente', 'lexik-kollokation',
    'Am Ende verwendest du fünf vollständige Gesundheitssätze für Beschwerden, Arzttermin, Praxiszeiten, Medikamenteneinnahme und Besserung',
    'في النهاية تستعمل خمس جمل صحية كاملة للأعراض وموعد الطبيب وإغلاق العيادة وتناول الدواء والتحسن.',
    [
      ['Mir ist schlecht und ich habe Fieber.', 'تصف عرضين شائعين بإطارَي mir ist وFieber haben', 'مع schlecht للدلالة على الغثيان نقول Mir ist schlecht، ومع Fieber نستعمل haben', 'Mir bin schlecht und ich bin Fieber.', 'نقول Mir ist schlecht وich habe Fieber'],
      ['Ich brauche einen Termin beim Arzt.', 'تطلب موعدًا عند الطبيب مع beim Arzt', 'beim اختصار bei dem مع Arzt المذكر؛ ومع Ärztin نقول bei der Ärztin', 'Ich brauche einen Termin bei der Arzt.', 'Arzt مذكر؛ نقول beim Arzt أو bei dem Arzt'],
      ['Die Praxis ist heute geschlossen.', 'توضح أن العيادة مغلقة اليوم باستعمال geschlossen', 'geschlossen هو اسم المفعول الصحيح؛ وتستعمل الألمانية أيضًا Die Praxis hat heute geschlossen', 'Die Praxis ist heute geschließen.', 'الكتابة الصحيحة هي geschlossen'],
      ['Ich fühle mich schon besser.', 'تصف التحسن بالفعل الانعكاسي sich fühlen', 'مع ich نحتاج الضمير mich، وschon يوضح أن التحسن بدأ', 'Ich fühle schon besser.', 'الفعل هنا انعكاسي: Ich fühle mich']
    ],
    [
      ['Mir ist schlecht.', 'أشعر بالغثيان', 'Mir bin schlecht.', 'مع Mir نستخدم ist في هذا التعبير', 'schlecht'],
      ['Ich brauche einen Termin beim Arzt.', 'أحتاج إلى موعد عند الطبيب', 'Ich brauche einen Termin bei der Arzt.', 'Arzt مذكر؛ نقول beim Arzt', 'Termin'],
      ['Nehmen Sie die Tabletten dreimal täglich.', 'تناول الأقراص ثلاث مرات يوميًا', 'Nehmen Sie die Tabletten dreimal Tag.', 'لبيان المعدل اليومي نقول dreimal täglich', 'Tabletten'],
      ['Ich fühle mich schon besser.', 'أشعر بتحسن الآن', 'Ich fühle schon besser.', 'الفعل الانعكاسي مع ich يحتاج mich', 'mich']
    ],
    'Mir ist schlecht und ich habe Fieber. Ich brauche einen Termin beim Arzt. Die Praxis ist heute geschlossen. Nehmen Sie die Tabletten dreimal täglich. Ich fühle mich schon besser.',
    'Ich fühle mich schon besser.',
    'Wiederhole morgen die fünf Sätze: Mir ist schlecht und ich habe Fieber. Ich brauche einen Termin beim Arzt. Die Praxis ist heute geschlossen. Nehmen Sie die Tabletten dreimal täglich. Ich fühle mich schon besser.',
    'غدًا راجع الجمل الخمس عن الأعراض والموعد والعيادة والدواء والتحسن.',
    {
      factFamilies: ['konjugation', 'präposition', 'orthographie', 'kasus'],
      writing: {
        zeigt: 'Fünf vollständige Gesundheitssätze',
        erklaerung: 'اكتب الجمل الخمس كاملة عن الأعراض وموعد الطبيب وإغلاق العيادة وتعليمات الدواء والتحسن.',
        prompt: 'اكتب الجمل الخمس مستعملًا التراكيب الصحية الصحيحة.',
        promptDe: 'Mir ist schlecht und ich habe Fieber. · Ich brauche einen Termin beim Arzt. · Die Praxis ist heute geschlossen. · Nehmen Sie die Tabletten dreimal täglich. · Ich fühle mich schon besser.',
        points: ['Mir ist schlecht und ich habe Fieber.', 'Ich brauche einen Termin beim Arzt.', 'Die Praxis ist heute geschlossen.', 'Nehmen Sie die Tabletten dreimal täglich.', 'Ich fühle mich schon besser.'],
        minWords: 30,
        frage: 'اكتب الجمل الصحية الخمس كاملة.',
        familie: 'lexik-kollokation',
        hinweise: ['استعمل Mir ist schlecht وFieber haben وbeim Arzt.', 'اكتب dreimal täglich ولا تنس mich مع fühle.']
      },
      imitateNearMiss: 'schlechte',
      transformHint: 'مع ich نقول Ich fühle mich schon besser.',
      orderAr: 'رتّب تعليمة الدواء: الفعل Nehmen أولًا، ثم Sie، ثم الجرعة.',
      orderHints: ['في الأمر الرسمي يبدأ الفعل المصرف Nehmen ثم يأتي Sie.', 'ضع die Tabletten قبل dreimal täglich.'],
      orderSentence: 'Nehmen Sie die Tabletten dreimal täglich.',
      checkOrderSentence: 'Nehmen Sie die Tabletten dreimal täglich.',
      orderPromptAr: 'رتّب الكلمات لتكوين تعليمة دواء رسمية كاملة.',
      speakAr: 'سجّل عشرين ثانية: قل Mir ist schlecht und ich habe Fieber وIch brauche einen Termin beim Arzt وDie Praxis ist heute geschlossen وNehmen Sie die Tabletten dreimal täglich وIch fühle mich schon besser.',
      summaryDe: 'Mir ist schlecht und ich habe Fieber. · Ich brauche einen Termin beim Arzt. · Die Praxis ist heute geschlossen. · Nehmen Sie die Tabletten dreimal täglich. · Ich fühle mich schon besser.',
      summaryAr: 'راجع Mir ist schlecht وFieber haben وbeim Arzt وgeschlossen وdreimal täglich وfühle mich besser.',
      summaryRecap: 'Beschwerden Termin Praxis Tabletten Besserung'
    }),

  U('a2-u3-l6', 'A2', 'العمل: البحث عن وظيفة والتقديم وساعات الدوام', 'Arbeit: Stellensuche, Bewerbung und Arbeitszeit', 'lexik-kollokation',
    'Am Ende verwendest du fünf vollständige Sätze für Stellensuche, Bewerbung, Vorstellungsgespräch, Arbeitsplatz und Arbeitszeit',
    'في النهاية تستعمل خمس جمل كاملة للبحث عن وظيفة والتقديم ومقابلة العمل ومكان العمل وساعات الدوام.',
    [
      ['Ich suche eine Stelle in Teilzeit.', 'تحدد أنك تبحث عن وظيفة بدوام جزئي', 'Stelle مؤنث، وتأتي in Teilzeit بلا أداة', 'Ich suche einen Stelle in Teilzeit.', 'نقول eine Stelle in Teilzeit'],
      ['Ich schreibe eine Bewerbung und schicke meinen Lebenslauf mit.', 'تذكر طلب التوظيف والسيرة الذاتية في جملة واحدة', 'Bewerbung مؤنث، وLebenslauf مذكر في النصب: meinen Lebenslauf', 'Ich schreibe ein Bewerbung und schicke meinen Lebenslauf mit.', 'نقول eine Bewerbung'],
      ['Das Vorstellungsgespräch ist morgen um zehn Uhr.', 'تحدد موعد مقابلة العمل باستعمال um مع الساعة', 'مع وقت الساعة المحدد نقول um zehn Uhr', 'Das Vorstellungsgespräch ist morgen an zehn Uhr.', 'نقول um zehn Uhr'],
      ['Ich arbeite bei einer Firma in der Abteilung Verkauf.', 'تصف جهة العمل والقسم بحالتي الداتيف المناسبتين', 'بعد bei نقول einer Firma، وللمكان داخل القسم نقول in der Abteilung', 'Ich arbeite bei eine Firma in der Abteilung Verkauf.', 'bei يأخذ الداتيف: bei einer Firma']
    ],
    [
      ['Ich suche eine Stelle in Teilzeit.', 'أبحث عن وظيفة بدوام جزئي', 'Ich suche einen Stelle in Teilzeit.', 'Stelle مؤنث؛ نقول eine Stelle', 'Teilzeit'],
      ['Ich schreibe eine Bewerbung und schicke meinen Lebenslauf mit.', 'أكتب طلب توظيف وأرفق سيرتي الذاتية', 'Ich schreibe ein Bewerbung und schicke meinen Lebenslauf mit.', 'Bewerbung مؤنث؛ نقول eine Bewerbung', 'Lebenslauf'],
      ['Das Vorstellungsgespräch ist morgen um zehn Uhr.', 'مقابلة العمل غدًا في الساعة العاشرة', 'Das Vorstellungsgespräch ist morgen an zehn Uhr.', 'مع الساعة المحددة نقول um zehn Uhr', 'um'],
      ['Ich arbeite bei einer Firma in der Abteilung Verkauf.', 'أعمل لدى شركة في قسم المبيعات', 'Ich arbeite bei eine Firma in der Abteilung Verkauf.', 'بعد bei نحتاج الداتيف: einer Firma', 'einer']
    ],
    'Ich suche eine Stelle in Teilzeit. Ich schreibe eine Bewerbung und schicke meinen Lebenslauf mit. Das Vorstellungsgespräch ist morgen um zehn Uhr. Ich arbeite bei einer Firma in der Abteilung Verkauf. Meine Arbeitszeit ist von neun bis fünf.',
    'Meine Arbeitszeit ist von neun bis fünf.',
    'Wiederhole morgen die fünf Sätze: Ich suche eine Stelle in Teilzeit. Ich schreibe eine Bewerbung und schicke meinen Lebenslauf mit. Das Vorstellungsgespräch ist morgen um zehn Uhr. Ich arbeite bei einer Firma in der Abteilung Verkauf. Meine Arbeitszeit ist von neun bis fünf.',
    'غدًا راجع الجمل الخمس عن الوظيفة وطلب التوظيف والمقابلة ومكان العمل وساعات الدوام.',
    {
      factFamilies: ['genus', 'genus', 'präposition', 'kasus'],
      writing: {
        zeigt: 'Fünf vollständige Sätze über Arbeit und Bewerbung',
        erklaerung: 'اكتب الجمل الخمس كاملة عن البحث عن وظيفة والتقديم والمقابلة ومكان العمل وساعات الدوام.',
        prompt: 'اكتب الجمل الخمس مستعملًا تراكيب العمل والتقديم الصحيحة.',
        promptDe: 'Ich suche eine Stelle in Teilzeit. · Ich schreibe eine Bewerbung und schicke meinen Lebenslauf mit. · Das Vorstellungsgespräch ist morgen um zehn Uhr. · Ich arbeite bei einer Firma in der Abteilung Verkauf. · Meine Arbeitszeit ist von neun bis fünf.',
        points: ['Ich suche eine Stelle in Teilzeit.', 'Ich schreibe eine Bewerbung und schicke meinen Lebenslauf mit.', 'Das Vorstellungsgespräch ist morgen um zehn Uhr.', 'Ich arbeite bei einer Firma in der Abteilung Verkauf.', 'Meine Arbeitszeit ist von neun bis fünf.'],
        minWords: 38,
        frage: 'اكتب جمل العمل والتقديم الخمس كاملة.',
        familie: 'lexik-kollokation',
        hinweise: ['استعمل eine Stelle in Teilzeit وeine Bewerbung وmeinen Lebenslauf.', 'استعمل um مع موعد المقابلة وvon … bis مع ساعات الدوام.']
      },
      imitateNearMiss: 'Vollzeit',
      transformHint: 'للفترة اليومية نقول von neun bis fünf.',
      orderAr: 'رتّب موعد المقابلة: الفعل ist في الموضع الثاني وum مع الساعة.',
      orderHints: ['ضع ist بعد Das Vorstellungsgespräch.', 'استعمل um zehn Uhr للساعة المحددة.'],
      orderSentence: 'Das Vorstellungsgespräch ist morgen um zehn Uhr.',
      checkOrderSentence: 'Das Vorstellungsgespräch ist morgen um zehn Uhr.',
      orderPromptAr: 'رتّب الكلمات لتكوين موعد مقابلة عمل كاملًا.',
      speakAr: 'سجّل عشرين ثانية: قل Ich suche eine Stelle in Teilzeit وIch schreibe eine Bewerbung und schicke meinen Lebenslauf mit وDas Vorstellungsgespräch ist morgen um zehn Uhr وIch arbeite bei einer Firma in der Abteilung Verkauf وMeine Arbeitszeit ist von neun bis fünf.',
      summaryDe: 'Ich suche eine Stelle in Teilzeit. · Ich schreibe eine Bewerbung und schicke meinen Lebenslauf mit. · Das Vorstellungsgespräch ist morgen um zehn Uhr. · Ich arbeite bei einer Firma in der Abteilung Verkauf. · Meine Arbeitszeit ist von neun bis fünf.',
      summaryAr: 'راجع Stelle in Teilzeit وBewerbung وLebenslauf وVorstellungsgespräch وbei einer Firma وvon … bis.',
      summaryRecap: 'Stelle Bewerbung Gespräch Arbeitsplatz Arbeitszeit'
    }),

  U('a2-u4-l1', 'A2', 'الدراسة: الدورة والدرس والواجب والامتحان', 'Lernen: Kurs, Unterricht, Hausaufgaben und Prüfung', 'lexik-kollokation',
    'Am Ende verwendest du fünf vollständige Sätze zu Kursbeginn, Unterrichtszeit, Hausaufgaben, einer Bitte und einem Prüfungsergebnis',
    'في النهاية تستعمل خمس جمل كاملة عن بداية الدورة ووقت الدرس والواجب وطلب الشرح ونتيجة الامتحان.',
    [
      ['Mein Kurs beginnt im September.', 'تحدد شهر بداية الدورة باستعمال im', 'مع اسم الشهر نقول im September', 'Mein Kurs beginnt in September.', 'نقول im September'],
      ['Der Unterricht beginnt um acht Uhr.', 'تحدد وقت بداية الدرس باستعمال um مع الساعة', 'مع الساعة المحددة نقول um acht Uhr', 'Der Unterricht beginnt an acht Uhr.', 'نقول um acht Uhr'],
      ['Ich schreibe die Hausaufgaben ins Heft.', 'تدوّن الواجبات داخل الدفتر باستعمال ins', 'ins اختصار in das ويعبّر هنا عن الاتجاه إلى داخل الدفتر', 'Ich schreibe die Hausaufgaben in den Heft.', 'Heft محايد؛ نقول ins Heft أو in das Heft'],
      ['Können Sie die Regel bitte noch einmal erklären?', 'تطلب شرح القاعدة مرة أخرى بصيغة مهذبة', 'بعد Können يأتي المصدر erklären في نهاية السؤال', 'Können Sie die Regel bitte noch einmal erklärt?', 'بعد modal نستخدم المصدر erklären']
    ],
    [
      ['Mein Kurs beginnt im September.', 'تبدأ دورتي في سبتمبر', 'Mein Kurs beginnt in September.', 'مع الشهر نقول im September', 'Kurs'],
      ['Der Unterricht beginnt um acht Uhr.', 'يبدأ الدرس في الساعة الثامنة', 'Der Unterricht beginnt an acht Uhr.', 'مع الساعة المحددة نقول um acht Uhr', 'Unterricht'],
      ['Ich schreibe die Hausaufgaben ins Heft.', 'أدوّن الواجبات في الدفتر', 'Ich schreibe die Hausaufgaben ins Hefte.', 'بعد ins يأتي هنا المفرد Heft', 'Hausaufgaben'],
      ['Können Sie die Regel bitte noch einmal erklären?', 'هل يمكنكم شرح القاعدة مرة أخرى من فضلكم؟', 'Können Sie die Regel bitte noch einmal erklärt?', 'بعد Können نستخدم المصدر erklären', 'erklären']
    ],
    'Mein Kurs beginnt im September. Der Unterricht beginnt um acht Uhr. Ich schreibe die Hausaufgaben ins Heft. Können Sie die Regel bitte noch einmal erklären? Ich habe die Prüfung bestanden.',
    'Ich habe die Prüfung bestanden.',
    'Wiederhole morgen die fünf Sätze: Mein Kurs beginnt im September. Der Unterricht beginnt um acht Uhr. Ich schreibe die Hausaufgaben ins Heft. Können Sie die Regel bitte noch einmal erklären? Ich habe die Prüfung bestanden.',
    'غدًا راجع الجمل الخمس عن الدورة والدرس والواجب وطلب الشرح ونتيجة الامتحان.',
    {
      factFamilies: ['präposition', 'präposition', 'kasus', 'konjugation'],
      writing: {
        zeigt: 'Fünf vollständige Sätze über Lernen und Prüfung',
        erklaerung: 'اكتب الجمل الخمس كاملة عن بداية الدورة ووقت الدرس والواجب وطلب الشرح والنجاح في الامتحان.',
        prompt: 'اكتب الجمل الخمس مستعملًا تراكيب الدراسة الصحيحة.',
        promptDe: 'Mein Kurs beginnt im September. · Der Unterricht beginnt um acht Uhr. · Ich schreibe die Hausaufgaben ins Heft. · Können Sie die Regel bitte noch einmal erklären? · Ich habe die Prüfung bestanden.',
        points: ['Mein Kurs beginnt im September.', 'Der Unterricht beginnt um acht Uhr.', 'Ich schreibe die Hausaufgaben ins Heft.', 'Können Sie die Regel bitte noch einmal erklären?', 'Ich habe die Prüfung bestanden.'],
        minWords: 30,
        frage: 'اكتب جمل الدراسة الخمس كاملة.',
        familie: 'lexik-kollokation',
        hinweise: ['استعمل im مع الشهر وum مع الساعة وins Heft مع الاتجاه.', 'ضع erklären بعد Können، واستعمل habe … bestanden للنجاح.']
      },
      imitateNearMiss: 'Kurse',
      transformHint: 'في Perfekt نقول Ich habe die Prüfung bestanden.',
      orderAr: 'رتّب وقت الدرس: الفعل beginnt في الموضع الثاني وum مع الساعة.',
      orderHints: ['ضع beginnt بعد Der Unterricht.', 'استعمل um acht Uhr للساعة المحددة.'],
      orderSentence: 'Der Unterricht beginnt um acht Uhr.',
      checkOrderSentence: 'Der Unterricht beginnt um acht Uhr.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة كاملة عن وقت الدرس.',
      speakAr: 'سجّل عشرين ثانية: قل Mein Kurs beginnt im September وDer Unterricht beginnt um acht Uhr وIch schreibe die Hausaufgaben ins Heft وKönnen Sie die Regel bitte noch einmal erklären وIch habe die Prüfung bestanden.',
      summaryDe: 'Mein Kurs beginnt im September. · Der Unterricht beginnt um acht Uhr. · Ich schreibe die Hausaufgaben ins Heft. · Können Sie die Regel bitte noch einmal erklären? · Ich habe die Prüfung bestanden.',
      summaryAr: 'راجع Kurs im September وUnterricht um acht Uhr وHausaufgaben ins Heft وKönnen Sie … erklären وPrüfung bestanden.',
      summaryRecap: 'Kurs Unterricht Hausaufgaben Erklärung Prüfung'
    }),

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

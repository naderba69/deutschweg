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

  U('a2-u4-l2', 'A2', 'المناسبات: التهنئة والدعوة والرد', 'Feste: gratulieren, einladen und antworten', 'lexik-kollokation',
    'Am Ende gratulierst du, lädst zu einer Feier ein und verwendest fünf vollständige Sätze zum Gratulieren, Einladen, Zusagen, Absagen und Nennen der Uhrzeit',
    'في النهاية تستعمل خمس جمل كاملة للتهنئة والدعوة والقبول والاعتذار وتحديد الوقت.',
    [
      ['Herzlichen Glückwunsch zum Geburtstag!', 'تهنئ شخصًا بعيد ميلاده بالصيغة الكاملة', 'في العبارة الثابتة نقول Herzlichen Glückwunsch zum Geburtstag', 'Herzliche Glückwunsch zum Geburtstag!', 'نقول Herzlichen Glückwunsch'],
      ['Ich lade dich am Samstag zu meiner Feier ein.', 'تدعو شخصًا إلى حفلك يوم السبت', 'einladen فعل منفصل؛ يأتي lade في الموضع الثاني وein في النهاية', 'Ich einlade dich am Samstag zu meiner Feier.', 'في الجملة الرئيسية نقول lade … ein'],
      ['Ich nehme die Einladung gern an.', 'تقبل الدعوة بالفعل المنفصل annehmen', 'في الجملة الرئيسية ينفصل annehmen: nehme … an', 'Ich annehme die Einladung gern.', 'نقول nehme … an'],
      ['Leider kann ich am Samstag nicht kommen.', 'تعتذر عن الحضور بجملة كاملة ومهذبة', 'بعد Leider يبقى الفعل المصرف في الموضع الثاني: kann ich', 'Leider ich kann am Samstag nicht kommen.', 'بعد Leider نقول kann ich']
    ],
    [
      ['Herzlichen Glückwunsch zum Geburtstag!', 'أطيب التهاني بعيد الميلاد', 'Herzliche Glückwunsch zum Geburtstag!', 'العبارة هي Herzlichen Glückwunsch', 'Glückwunsch'],
      ['Ich lade dich am Samstag zu meiner Feier ein.', 'أدعوك يوم السبت إلى حفلي', 'Ich einlade dich am Samstag zu meiner Feier.', 'الفعل المنفصل يأتي lade … ein', 'ein'],
      ['Ich nehme die Einladung gern an.', 'أقبل الدعوة بسرور', 'Ich annehme die Einladung gern.', 'الفعل المنفصل يأتي nehme … an', 'Einladung'],
      ['Leider kann ich am Samstag nicht kommen.', 'للأسف لا أستطيع الحضور يوم السبت', 'Leider kann ich am Samstag nicht kommt.', 'بعد kann يأتي المصدر kommen', 'Leider']
    ],
    'Herzlichen Glückwunsch zum Geburtstag! Ich lade dich am Samstag zu meiner Feier ein. Ich nehme die Einladung gern an. Leider kann ich am Samstag nicht kommen. Die Feier beginnt um sieben Uhr.',
    'Die Feier beginnt um sieben Uhr.',
    'Wiederhole morgen die fünf Sätze: Herzlichen Glückwunsch zum Geburtstag! Ich lade dich am Samstag zu meiner Feier ein. Ich nehme die Einladung gern an. Leider kann ich am Samstag nicht kommen. Die Feier beginnt um sieben Uhr.',
    'غدًا راجع الجمل الخمس عن التهنئة والدعوة والقبول والاعتذار ووقت الحفل.',
    {
      factFamilies: ['deklination', 'wortstellung', 'wortstellung', 'wortstellung'],
      writing: {
        zeigt: 'Fünf vollständige Sätze für eine Einladung',
        erklaerung: 'اكتب الجمل الخمس كاملة للتهنئة والدعوة وقبولها والاعتذار وذكر وقت الحفل.',
        prompt: 'اكتب الجمل الخمس مستعملًا تراكيب المناسبة الصحيحة.',
        promptDe: 'Herzlichen Glückwunsch zum Geburtstag! · Ich lade dich am Samstag zu meiner Feier ein. · Ich nehme die Einladung gern an. · Leider kann ich am Samstag nicht kommen. · Die Feier beginnt um sieben Uhr.',
        points: ['Herzlichen Glückwunsch zum Geburtstag!', 'Ich lade dich am Samstag zu meiner Feier ein.', 'Ich nehme die Einladung gern an.', 'Leider kann ich am Samstag nicht kommen.', 'Die Feier beginnt um sieben Uhr.'],
        minWords: 32,
        frage: 'اكتب جمل المناسبة الخمس كاملة.',
        familie: 'lexik-kollokation',
        hinweise: ['استعمل Herzlichen Glückwunsch وlade … ein وnehme … an.', 'ضع kann بعد Leider واستعمل um مع ساعة بدء الحفل.']
      },
      imitateNearMiss: 'Glückwünsche',
      transformHint: 'مع وقت الساعة المحدد نقول um sieben Uhr.',
      orderAr: 'رتّب الدعوة: lade في الموضع الثاني وein في نهاية الجملة.',
      orderHints: ['ضع lade بعد Ich.', 'ضع البادئة ein في النهاية.'],
      orderSentence: 'Ich lade dich am Samstag zu meiner Feier ein.',
      orderRightBracket: ['ein.'],
      checkOrderSentence: 'Ich lade dich am Samstag zu meiner Feier ein.',
      checkOrderRightBracket: ['ein.'],
      orderPromptAr: 'رتّب الكلمات لتكوين دعوة كاملة مع الفعل المنفصل.',
      speakAr: 'سجّل عشرين ثانية: قل Herzlichen Glückwunsch zum Geburtstag وIch lade dich am Samstag zu meiner Feier ein وIch nehme die Einladung gern an وLeider kann ich am Samstag nicht kommen وDie Feier beginnt um sieben Uhr.',
      summaryDe: 'Herzlichen Glückwunsch zum Geburtstag! · Ich lade dich am Samstag zu meiner Feier ein. · Ich nehme die Einladung gern an. · Leider kann ich am Samstag nicht kommen. · Die Feier beginnt um sieben Uhr.',
      summaryAr: 'راجع Herzlichen Glückwunsch وlade … ein وnehme … an وLeider kann ich وum sieben Uhr.',
      summaryRecap: 'Glückwunsch Einladung Zusage Absage Uhrzeit'
    }),

  U('a2-u4-l3', 'A2', 'الملابس: المقاس والقياس والاستبدال', 'Kleidung: Passform, Anprobe und Umtausch', 'lexik-kollokation',
    'Am Ende beschreibst du Kleidung mit fünf vollständigen Sätzen zum Anziehen, zur Passform, zur Größe, zum Anprobieren und zum Umtauschen',
    'في النهاية تصف الملابس بخمس جمل كاملة عن اللبس والمقاس والقياس والاستبدال.',
    [
      ['Ich ziehe heute die blaue Jacke an.', 'تصف قطعة تلبسها مع الفعل المنفصل anziehen', 'في الجملة الرئيسية ينفصل anziehen: يأتي ziehe في الموضع الثاني وan في النهاية', 'Ich anziehe heute die blaue Jacke.', 'في الجملة الرئيسية نقول ziehe … an'],
      ['Die Hose passt mir gut.', 'تقول إن مقاس البنطال يناسبك', 'الشخص مع passen يأتي في الداتيف: mir', 'Die Hose passt mich gut.', 'بعد passen نقول mir لا mich'],
      ['Welche Größe haben Sie?', 'تسأل بأدب عن المقاس', 'السؤال عن المقاس يستعمل الصيغة المؤنثة Welche Größe', 'Welchen Größe haben Sie?', 'Größe مؤنث؛ نقول Welche Größe لا Welchen Größe'],
      ['Ich möchte die Jacke bitte umtauschen.', 'تطلب استبدال السترة بأدب', 'بعد möchte يأتي المصدر غير المنفصل umtauschen في آخر الجملة', 'Ich möchte die Jacke bitte umtausche.', 'بعد möchte نحتاج المصدر umtauschen']
    ],
    [
      ['Ich ziehe heute die blaue Jacke an.', 'أرتدي اليوم السترة الزرقاء', 'Ich anziehe heute die blaue Jacke.', 'في الجملة الرئيسية ينفصل anziehen: ziehe … an', 'an'],
      ['Die Hose passt mir gut.', 'البنطال يناسبني جيدًا', 'Die Hose passt mich gut.', 'الشخص مع passen يأتي في الداتيف: mir', 'mir'],
      ['Welche Größe haben Sie?', 'ما مقاسكم؟', 'Welches Größe haben Sie?', 'Größe مؤنث؛ نقول Welche Größe', 'Größe'],
      ['Ich möchte die Jacke bitte umtauschen.', 'أود استبدال السترة من فضلك', 'Ich möchte die Jacke bitte umtausche.', 'بعد möchte يأتي المصدر umtauschen', 'umtauschen']
    ],
    'Ich ziehe heute die blaue Jacke an. Kann ich das Hemd anprobieren?',
    'Kann ich das Hemd anprobieren?',
    'Wiederhole morgen die fünf Sätze: Ich ziehe heute die blaue Jacke an. Die Hose passt mir gut. Welche Größe haben Sie? Kann ich das Hemd anprobieren? Ich möchte die Jacke bitte umtauschen. Beschreibe danach ein Kleidungsstück und vergleiche zwei Kleidungsstücke.',
    'غدًا راجع جمل اللبس والمقاس والقياس والاستبدال الخمس.',
    {
      factFamilies: ['wortstellung', 'kasus', 'deklination', 'wortstellung'],
      writing: {
        zeigt: 'Fünf vollständige Sätze im Kleidungsgeschäft',
        erklaerung: 'اكتب الجمل الخمس كاملة عن اللبس والمقاس والسؤال عن الحجم والقياس والاستبدال.',
        prompt: 'اكتب جمل الملابس الخمس كاملة.',
        promptDe: 'Ich ziehe heute die blaue Jacke an. · Die Hose passt mir gut. · Welche Größe haben Sie? · Kann ich das Hemd anprobieren? · Ich möchte die Jacke bitte umtauschen.',
        points: ['Ich ziehe heute die blaue Jacke an.', 'Die Hose passt mir gut.', 'Welche Größe haben Sie?', 'Kann ich das Hemd anprobieren?', 'Ich möchte die Jacke bitte umtauschen.'],
        minWords: 27,
        frage: 'اكتب الجمل الخمس كاملة في 27 كلمة على الأقل.',
        familie: 'lexik-kollokation',
        hinweise: ['افصل an في الجملة الأولى واستعمل mir مع passen.', 'بعد möchte وkann يبقى umtauschen وanprobieren مصدرين في النهاية.']
      },
      imitateNearMiss: 'anziehen',
      transformHint: 'بعد kann يأتي المصدر anprobieren كاملًا في نهاية السؤال.',
      orderAr: 'رتّب جملة اللبس: Ich ثم ziehe، وبعد الوسط ضع an في النهاية.',
      orderHints: ['ضع ziehe في الموضع الثاني بعد Ich.', 'أغلق الجملة بالبادئة an.'],
      orderSentence: 'Ich ziehe heute die blaue Jacke an.',
      orderRightBracket: ['an.'],
      checkOrderSentence: 'Ich ziehe heute die blaue Jacke an.',
      checkOrderRightBracket: ['an.'],
      orderPromptAr: 'رتّب الكلمات لتكوين جملة لبس صحيحة مع الفعل المنفصل.',
      speakAr: 'سجّل عشرين ثانية: قل Ich ziehe heute die blaue Jacke an وDie Hose passt mir gut وWelche Größe haben Sie وKann ich das Hemd anprobieren وIch möchte die Jacke bitte umtauschen.',
      summaryDe: 'Ich ziehe heute die blaue Jacke an. · Die Hose passt mir gut. · Welche Größe haben Sie? · Kann ich das Hemd anprobieren? · Ich möchte die Jacke bitte umtauschen.',
      summaryAr: 'راجع ziehe … an وpasst mir وWelche Größe وanprobieren وumtauschen.',
      summaryRecap: 'anziehen Passform Größe Anprobe Umtausch'
    }),

  U('a2-u4-l4', 'A2', 'الطقس: الحالة والمدة والحرارة والتوقع', 'Wetter: Zustand, Dauer, Temperatur und Vorhersage', 'lexik-kollokation',
    'Am Ende verwendest du fünf vollständige Wettersätze für Zustand, Dauer, Jahreszeit, Temperatur und Vorhersage',
    'في النهاية تستعمل خمس جمل طقس كاملة للحالة والمدة والفصل والحرارة والتوقع.',
    [
      ['Heute ist es bewölkt und windig.', 'تصف حالة الطقس اليوم بصفتين', 'وصف الطقس غير الشخصي يحتاج es، وبعد Heute يأتي الفعل في الموضع الثاني', 'Heute ist bewölkt und windig.', 'نقول Heute ist es … مع الضمير es'],
      ['Es regnet seit dem Morgen.', 'تحدد مدة المطر منذ الصباح', 'seit يأخذ الداتيف؛ Morgen مذكر فنقول seit dem Morgen', 'Es regnet seit den Morgen.', 'بعد seit نقول dem Morgen لا den Morgen'],
      ['Im Sommer ist es oft heiß.', 'تصف طقس فصل الصيف', 'مع أسماء الفصول نقول im Sommer', 'Am Sommer ist es oft heiß.', 'مع الفصل نقول im Sommer لا am Sommer'],
      ['Der Wetterbericht sagt für morgen Regen voraus.', 'تنقل توقع نشرة الطقس للغد', 'في الجملة الرئيسية ينفصل voraussagen: sagt … voraus', 'Der Wetterbericht voraussagt für morgen Regen.', 'في الجملة الرئيسية نقول sagt … voraus']
    ],
    [
      ['Heute ist es bewölkt und windig.', 'اليوم غائم وعاصف', 'Heute ist bewölkt und windig.', 'وصف الطقس يحتاج es: Heute ist es …', 'bewölkt'],
      ['Es regnet seit dem Morgen.', 'تمطر منذ الصباح', 'Es regnet seit den Morgen.', 'seit يأخذ الداتيف: seit dem Morgen', 'Morgen'],
      ['Im Sommer ist es oft heiß.', 'يكون الجو غالبًا حارًا في الصيف', 'In Sommer ist es oft heiß.', 'مع الفصل نقول im Sommer', 'Sommer'],
      ['Der Wetterbericht sagt für morgen Regen voraus.', 'تتوقع نشرة الطقس المطر غدًا', 'Der Wetterbericht voraussagt für morgen Regen.', 'في الجملة الرئيسية ينفصل voraussagen: sagt … voraus', 'voraus']
    ],
    'Heute ist es bewölkt und windig. Es regnet seit dem Morgen.',
    'Die Temperatur liegt bei zwanzig Grad.',
    'Wiederhole morgen die fünf Sätze: Heute ist es bewölkt und windig. Es regnet seit dem Morgen. Im Sommer ist es oft heiß. Die Temperatur liegt bei zwanzig Grad. Der Wetterbericht sagt für morgen Regen voraus.',
    'غدًا راجع جمل الطقس الخمس للحالة والمدة والفصل والحرارة والتوقع.',
    {
      factFamilies: ['wortstellung', 'kasus', 'präposition', 'wortstellung'],
      writing: {
        zeigt: 'Fünf vollständige Wettersätze',
        erklaerung: 'اكتب الجمل الخمس كاملة عن حالة الطقس ومدته والفصل والحرارة والتوقع.',
        prompt: 'اكتب جمل الطقس الخمس كاملة.',
        promptDe: 'Heute ist es bewölkt und windig. · Es regnet seit dem Morgen. · Im Sommer ist es oft heiß. · Die Temperatur liegt bei zwanzig Grad. · Der Wetterbericht sagt für morgen Regen voraus.',
        points: ['Heute ist es bewölkt und windig.', 'Es regnet seit dem Morgen.', 'Im Sommer ist es oft heiß.', 'Die Temperatur liegt bei zwanzig Grad.', 'Der Wetterbericht sagt für morgen Regen voraus.'],
        minWords: 30,
        frage: 'اكتب الجمل الخمس كاملة في 30 كلمة على الأقل.',
        familie: 'lexik-kollokation',
        hinweise: ['استعمل es في وصف الطقس وseit dem Morgen للمدة.', 'استعمل im Sommer وbei zwanzig Grad وافصل sagt … voraus.']
      },
      imitateNearMiss: 'bewölkte',
      transformHint: 'مع قيمة الحرارة نقول bei zwanzig Grad، وتبقى Grad بلا علامة جمع.',
      orderAr: 'رتّب جملة المطر: Es ثم regnet ثم seit dem Morgen.',
      orderHints: ['ابدأ بـEs وضع regnet في الموضع الثاني.', 'بعد seit استعمل dem Morgen.'],
      orderSentence: 'Es regnet seit dem Morgen.',
      checkOrderSentence: 'Es regnet seit dem Morgen.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة صحيحة عن مدة المطر.',
      speakAr: 'سجّل عشرين ثانية: قل Heute ist es bewölkt und windig وEs regnet seit dem Morgen وIm Sommer ist es oft heiß وDie Temperatur liegt bei zwanzig Grad وDer Wetterbericht sagt für morgen Regen voraus.',
      summaryDe: 'Heute ist es bewölkt und windig. · Es regnet seit dem Morgen. · Im Sommer ist es oft heiß. · Die Temperatur liegt bei zwanzig Grad. · Der Wetterbericht sagt für morgen Regen voraus.',
      summaryAr: 'راجع es ist bewölkt وseit dem Morgen وim Sommer وbei zwanzig Grad وsagt … voraus.',
      summaryRecap: 'Zustand Dauer Jahreszeit Temperatur Vorhersage'
    }),

  U('a2-u4-l5', 'A2', 'الدعوة: القبول والاعتذار والاستفسار', 'Einladung: zusagen, absagen und nachfragen', 'register',
    'Am Ende beantwortest du eine Einladung mit Dank, Zusage, begründeter Absage und zwei Rückfragen',
    'في النهاية تجيب عن دعوة بالشكر والقبول والاعتذار المعلّل وسؤالين عن التفاصيل.',
    [
      ['Vielen Dank für die Einladung!', 'تشكر على الدعوة بصيغة مهذبة', 'für يأخذ النصب؛ Einladung مؤنث فنقول für die Einladung', 'Vielen Dank für der Einladung!', 'بعد für نقول die Einladung لا der Einladung'],
      ['Ich sage für Samstag gern zu.', 'تقبل الدعوة ليوم السبت بالفعل المنفصل zusagen', 'في الجملة الرئيسية ينفصل zusagen: sage … zu، وfür Samstag يحدد اليوم الذي تقبله', 'Ich zusage für Samstag gern.', 'نقول sage … zu في الجملة الرئيسية'],
      ['Leider muss ich absagen, weil ich arbeiten muss.', 'تعتذر وتذكر سببًا واضحًا', 'بعد muss يأتي المصدر absagen، وفي جملة weil يأتي الفعل المصرف في النهاية', 'Leider muss ich absage, weil ich arbeiten muss.', 'بعد muss نقول absagen لا absage'],
      ['Um wie viel Uhr beginnt die Feier?', 'تسأل عن وقت بدء المناسبة', 'السؤال عن الساعة يبدأ بـ um wie viel Uhr، ثم يأتي الفعل المصرف', 'In wie viel Uhr beginnt die Feier?', 'السؤال عن الساعة يأخذ um لا in']
    ],
    [
      ['Vielen Dank für die Einladung!', 'شكرًا جزيلًا على الدعوة', 'Vielen Dank für der Einladung!', 'für يأخذ النصب: für die Einladung', 'Einladung'],
      ['Ich sage für Samstag gern zu.', 'أوافق بسرور على دعوة السبت', 'Ich zusage für Samstag gern.', 'في الجملة الرئيسية ينفصل zusagen: sage … zu', 'zu'],
      ['Leider muss ich absagen, weil ich arbeiten muss.', 'للأسف يجب أن أعتذر لأن عليّ العمل', 'Leider muss ich abgesagt, weil ich arbeiten muss.', 'بعد muss يأتي المصدر absagen لا اسم المفعول abgesagt', 'absagen'],
      ['Um wie viel Uhr beginnt die Feier?', 'في أي ساعة تبدأ المناسبة؟', 'In wie viel Uhr beginnt die Feier?', 'السؤال عن الساعة هو um wie viel Uhr', 'Uhr']
    ],
    'Vielen Dank für die Einladung! Ich sage für Samstag gern zu.',
    'Was soll ich zur Feier mitbringen?',
    'Wiederhole morgen die fünf Sätze: Vielen Dank für die Einladung! Ich sage für Samstag gern zu. Leider muss ich absagen, weil ich arbeiten muss. Um wie viel Uhr beginnt die Feier? Was soll ich zur Feier mitbringen?',
    'غدًا راجع جمل الشكر والقبول والاعتذار المعلّل والسؤال عن الوقت وما تحضره.',
    {
      factFamilies: ['kasus', 'wortstellung', 'konjugation', 'präposition'],
      writing: {
        zeigt: 'Fünf vollständige Sätze als Antwort auf eine Einladung',
        erklaerung: 'اكتب الجمل الخمس كاملة: الشكر والقبول والاعتذار مع السبب والسؤالان.',
        prompt: 'اكتب الجمل الخمس للرد على الدعوة كاملة.',
        promptDe: 'Vielen Dank für die Einladung! · Ich sage für Samstag gern zu. · Leider muss ich absagen, weil ich arbeiten muss. · Um wie viel Uhr beginnt die Feier? · Was soll ich zur Feier mitbringen?',
        points: ['Vielen Dank für die Einladung!', 'Ich sage für Samstag gern zu.', 'Leider muss ich absagen, weil ich arbeiten muss.', 'Um wie viel Uhr beginnt die Feier?', 'Was soll ich zur Feier mitbringen?'],
        minWords: 32,
        frage: 'اكتب الجمل الخمس كاملة في 32 كلمة على الأقل.',
        familie: 'register',
        hinweise: ['ابدأ بالشكر ثم استعمل sage … zu أو muss … absagen.', 'ضع muss في نهاية جملة weil، واستعمل um للسؤال عن الساعة.']
      },
      imitateNearMiss: 'Einladungen',
      transformHint: 'بعد soll يبقى الفعل المنفصل مصدرًا واحدًا في النهاية: mitbringen.',
      orderAr: 'رتّب جملة القبول: Ich ثم sage ثم für Samstag gern ثم zu.',
      orderHints: ['ابدأ بـ Ich وضع sage في الموضع الثاني.', 'ضع البادئة zu في القوس اليميني.'],
      orderSentence: 'Ich sage für Samstag gern zu.',
      orderRightBracket: ['zu.'],
      checkOrderSentence: 'Ich sage für Samstag gern zu.',
      checkOrderRightBracket: ['zu.'],
      orderPromptAr: 'رتّب الكلمات لتكوين جملة قبول صحيحة بالفعل المنفصل zusagen.',
      speakAr: 'سجّل عشرين ثانية: قل Vielen Dank für die Einladung وIch sage für Samstag gern zu وLeider muss ich absagen, weil ich arbeiten muss وUm wie viel Uhr beginnt die Feier وWas soll ich zur Feier mitbringen.',
      summaryDe: 'Vielen Dank für die Einladung! · Ich sage für Samstag gern zu. · Leider muss ich absagen, weil ich arbeiten muss. · Um wie viel Uhr beginnt die Feier? · Was soll ich zur Feier mitbringen?',
      summaryAr: 'راجع الشكر وsage … zu وmuss … absagen وweil والفعل النهائي وum wie viel Uhr وmitbringen.',
      summaryRecap: 'Dank Zusage Absage Grund Uhrzeit Mitbringsel'
    }),

  U('a2-u4-l6', 'A2', 'المشكلات: العطل والفقدان والاعتذار', 'Probleme: Defekt, Verlust und Entschuldigung', 'lexik-kollokation',
    'Am Ende meldest du einen Defekt oder Verlust, bittest um eine Reparatur, lässt eine Karte sperren und entschuldigst dich',
    'في النهاية تبلّغ عن عطل أو فقدان، وتطلب إصلاحًا، وتجعل البطاقة موقوفة، وتعتذر.',
    [
      ['Mein Handy funktioniert nicht.', 'تبلّغ عن عطل بجملة رئيسية يكون فيها funktioniert في الموضع الثاني', 'في الجملة الرئيسية يأتي الفعل المصرف funktioniert بعد الفاعل Mein Handy', 'Mein Handy nicht funktioniert.', 'نقول Mein Handy funktioniert nicht؛ الفعل المصرف في الموضع الثاني'],
      ['Ich habe meinen Schlüssel verloren.', 'تبلّغ عن شيء أضعته باستعمال haben + verloren', 'الفعل المتعدي verlieren يبني Perfekt مع haben، والمفعول المذكر هو meinen Schlüssel', 'Ich bin meinen Schlüssel verloren.', 'مع verlieren المتعدي نقول habe … verloren؛ أما Mein Schlüssel ist verloren gegangen فتركيب صحيح مختلف'],
      ['Können Sie das Fahrrad reparieren?', 'تطلب الإصلاح بأدب باستعمال können والمصدر في نهاية السؤال', 'بعد الفعل الناقص Können يبقى reparieren مصدرًا بلا zu في القوس اليميني', 'Können Sie das Fahrrad repariert?', 'بعد Können نحتاج المصدر reparieren لا اسم المفعول repariert'],
      ['Das tut mir leid.', 'تعتذر باستعمال الضمير في الداتيف mir', 'التعبير leidtun يأخذ الشخص في الداتيف: mir', 'Das tut mich leid.', 'نقول Das tut mir leid؛ الشخص المتأثر يأتي في الداتيف']
    ],
    [
      ['Mein Handy funktioniert nicht.', 'هاتفي لا يعمل', 'Mein Handy nicht funktioniert.', 'الفعل المصرف funktioniert يأتي في الموضع الثاني', 'funktioniert'],
      ['Ich habe meinen Schlüssel verloren.', 'أضعت مفتاحي', 'Ich bin meinen Schlüssel verloren.', 'verlieren المتعدي يبني Perfekt مع haben', 'verloren'],
      ['Können Sie das Fahrrad reparieren?', 'هل يمكنكم إصلاح الدراجة؟', 'Können Sie das Fahrrad zu reparieren?', 'بعد Können يأتي المصدر reparieren بلا zu', 'reparieren'],
      ['Ich lasse meine Karte sperren.', 'أجعل المصرف يوقف بطاقتي', 'Ich lasse meine Karte zu sperren.', 'بعد lassen يأتي المصدر sperren بلا zu', 'sperren']
    ],
    'Mein Handy funktioniert nicht. Können Sie es reparieren?',
    'Ich lasse meine Karte sperren.',
    'Wiederhole morgen die fünf Sätze: Mein Handy funktioniert nicht. Ich habe meinen Schlüssel verloren. Können Sie das Fahrrad reparieren? Ich lasse meine Karte sperren. Das tut mir leid.',
    'غدًا راجع الجمل الخمس: العطل والفقدان وطلب الإصلاح وإيقاف البطاقة والاعتذار.',
    {
      factFamilies: ['wortstellung', 'konjugation', 'konjugation', 'kasus'],
      writing: {
        zeigt: 'Fünf vollständige Sätze zu Problemen',
        erklaerung: 'اكتب الجمل الخمس كاملة: العطل والفقدان وطلب الإصلاح وإيقاف البطاقة والاعتذار.',
        prompt: 'اكتب الجمل الخمس العملية لحل المشكلة كاملة.',
        promptDe: 'Mein Handy funktioniert nicht. · Ich habe meinen Schlüssel verloren. · Können Sie das Fahrrad reparieren? · Ich lasse meine Karte sperren. · Das tut mir leid.',
        points: ['Mein Handy funktioniert nicht.', 'Ich habe meinen Schlüssel verloren.', 'Können Sie das Fahrrad reparieren?', 'Ich lasse meine Karte sperren.', 'Das tut mir leid.'],
        minWords: 23,
        frage: 'اكتب الجمل الخمس كاملة في 23 كلمة على الأقل.',
        familie: 'register',
        hinweise: ['استعمل habe … verloren وKönnen Sie … reparieren.', 'ضع sperren بعد lassen، وقل Das tut mir leid لا mich.']
      },
      imitateNearMiss: 'funktionieren',
      transformHint: 'بعد lassen يأتي المفعول meine Karte ثم المصدر sperren بلا zu.',
      orderAr: 'رتّب سؤال الإصلاح: Können ثم Sie ثم das Fahrrad ثم reparieren.',
      orderHints: ['ابدأ بالفعل المصرف Können ثم الفاعل Sie.', 'ضع المصدر reparieren في القوس اليميني.'],
      orderSentence: 'Können Sie das Fahrrad reparieren?',
      orderRightBracket: ['reparieren?'],
      checkOrderSentence: 'Können Sie das Fahrrad reparieren?',
      checkOrderRightBracket: ['reparieren?'],
      orderPromptAr: 'رتّب الكلمات لتكوين سؤال إصلاح مهذب بالفعل الناقص.',
      speakAr: 'سجّل عشرين ثانية: قل Mein Handy funktioniert nicht وIch habe meinen Schlüssel verloren وKönnen Sie das Fahrrad reparieren وIch lasse meine Karte sperren وDas tut mir leid.',
      summaryDe: 'Mein Handy funktioniert nicht. · Ich habe meinen Schlüssel verloren. · Können Sie das Fahrrad reparieren? · Ich lasse meine Karte sperren. · Das tut mir leid.',
      summaryAr: 'راجع funktioniert nicht وhabe … verloren وKönnen Sie … reparieren وlasse … sperren وtut mir leid.',
      summaryRecap: 'Defekt Verlust Reparatur Sperre Entschuldigung'
    }),

  U('a2-u5-l1', 'A2', 'سرد الماضي: الترتيب وPerfekt', 'Vergangenheit erzählen: Reihenfolge und Perfekt', 'konjugation',
    'Am Ende erzählst du fünf vergangene Ereignisse in einer klaren Reihenfolge mit Perfekt',
    'في النهاية تسرد خمسة أحداث ماضية بترتيب واضح مستعملًا Perfekt.',
    [
      ['Zuerst bin ich früh aufgestanden.', 'تبدأ الحكاية بـ zuerst وتبني Perfekt الفعل aufstehen مع sein', 'aufstehen فعل حركة وتغيّر حالة، ولذلك نقول bin … aufgestanden', 'Zuerst habe ich früh aufgestanden.', 'في هذا المعنى يبني aufstehen صيغة Perfekt مع sein: bin … aufgestanden'],
      ['Dann habe ich gefrühstückt.', 'تتابع الحكاية بـ dann وتبني Perfekt الفعل frühstücken مع haben', 'frühstücken نشاط بلا انتقال، ولذلك نقول habe … gefrühstückt', 'Dann bin ich gefrühstückt.', 'يبني frühstücken صيغة Perfekt مع haben: habe … gefrühstückt'],
      ['Danach bin ich zur Arbeit gefahren.', 'تستعمل danach ثم sein مع fahren الدال على الانتقال إلى وجهة', 'بعد danach يأتي الفعل المصرف ثانيًا، ومع الانتقال نقول bin … gefahren', 'Danach habe ich zur Arbeit gefahren.', 'عند الانتقال إلى وجهة نقول bin … gefahren؛ أما habe das Auto gefahren فتركيب متعدٍّ مختلف'],
      ['Zum Schluss bin ich nach Hause zurückgekommen.', 'تختم الحكاية بـ zum Schluss وتستعمل sein مع zurückkommen', 'zurückkommen فعل منفصل يبني Perfekt مع sein، واسم المفعول هو zurückgekommen', 'Zum Schluss habe ich nach Hause zurückgekommen.', 'يبني zurückkommen صيغة Perfekt مع sein: bin … zurückgekommen']
    ],
    [
      ['Zuerst bin ich früh aufgestanden.', 'أولًا استيقظت مبكرًا', 'Zuerst ich bin früh aufgestanden.', 'بعد zuerst يأتي الفعل المصرف bin ثم الفاعل ich', 'aufgestanden'],
      ['Dann habe ich gefrühstückt.', 'ثم تناولت الفطور', 'Dann ich habe gefrühstückt.', 'بعد dann يأتي الفعل المصرف habe ثم الفاعل ich', 'gefrühstückt'],
      ['Danach bin ich zur Arbeit gefahren.', 'بعد ذلك ذهبت إلى العمل', 'Danach ich bin zur Arbeit gefahren.', 'بعد danach يأتي الفعل المصرف bin في الموضع الثاني', 'gefahren'],
      ['Plötzlich hat es stark geregnet.', 'فجأة هطل المطر بغزارة', 'Plötzlich es hat stark geregnet.', 'بعد plötzlich يأتي الفعل المصرف hat ثم الفاعل es', 'geregnet']
    ],
    'Zuerst bin ich früh aufgestanden. Dann habe ich gefrühstückt. Danach bin ich zur Arbeit gefahren.',
    'Plötzlich hat es stark geregnet.',
    'Wiederhole morgen die fünf Sätze: Zuerst bin ich früh aufgestanden. Dann habe ich gefrühstückt. Danach bin ich zur Arbeit gefahren. Plötzlich hat es stark geregnet. Zum Schluss bin ich nach Hause zurückgekommen.',
    'غدًا راجع الجمل الخمس بالترتيب مع zuerst وdann وdanach وplötzlich وzum Schluss.',
    {
      factFamilies: ['konjugation', 'konjugation', 'konjugation', 'konjugation'],
      writing: {
        zeigt: 'Fünf geordnete Sätze im Perfekt',
        erklaerung: 'اكتب الجمل الخمس كاملة: الاستيقاظ والفطور والذهاب إلى العمل والمطر والعودة إلى البيت.',
        prompt: 'اكتب الحكاية القصيرة ذات الأحداث الخمسة بالترتيب.',
        promptDe: 'Zuerst bin ich früh aufgestanden. · Dann habe ich gefrühstückt. · Danach bin ich zur Arbeit gefahren. · Plötzlich hat es stark geregnet. · Zum Schluss bin ich nach Hause zurückgekommen.',
        points: ['Zuerst bin ich früh aufgestanden.', 'Dann habe ich gefrühstückt.', 'Danach bin ich zur Arbeit gefahren.', 'Plötzlich hat es stark geregnet.', 'Zum Schluss bin ich nach Hause zurückgekommen.'],
        minWords: 27,
        frage: 'اكتب الجمل الخمس كاملة في 27 كلمة على الأقل.',
        familie: 'konjugation',
        hinweise: ['استعمل sein مع aufgestanden وgefahren وzurückgekommen.', 'استعمل haben مع gefrühstückt وgeregnet، وضع الفعل المصرف بعد رابط الترتيب.']
      },
      imitateNearMiss: 'aufgestandet',
      transformHint: 'ابدأ بـ Plötzlich ثم ضع hat في الموضع الثاني، واجعل geregnet في القوس اليميني.',
      orderAr: 'رتّب الجملة: Danach ثم bin ثم ich ثم zur Arbeit ثم gefahren.',
      orderHints: ['ابدأ بـ Danach وضع bin في الموضع الثاني.', 'ضع اسم المفعول gefahren في القوس اليميني.'],
      orderSentence: 'Danach bin ich zur Arbeit gefahren.',
      orderRightBracket: ['gefahren.'],
      checkOrderSentence: 'Danach bin ich zur Arbeit gefahren.',
      checkOrderRightBracket: ['gefahren.'],
      orderPromptAr: 'رتّب الكلمات لتكوين الحدث الثالث في الحكاية بصيغة Perfekt.',
      speakAr: 'سجّل عشرين ثانية: قل Zuerst bin ich früh aufgestanden وDann habe ich gefrühstückt وDanach bin ich zur Arbeit gefahren وPlötzlich hat es stark geregnet وZum Schluss bin ich nach Hause zurückgekommen.',
      summaryDe: 'Zuerst bin ich früh aufgestanden. · Dann habe ich gefrühstückt. · Danach bin ich zur Arbeit gefahren. · Plötzlich hat es stark geregnet. · Zum Schluss bin ich nach Hause zurückgekommen.',
      summaryAr: 'راجع zuerst وdann وdanach وplötzlich وzum Schluss، واختر haben أو sein ثم ضع اسم المفعول في النهاية.',
      summaryRecap: 'zuerst dann danach plötzlich zum Schluss'
    }),

  U('a2-u5-l2', 'A2', 'التعبير عن الرأي: الموازنة والموافقة والاعتراض', 'Meinung äußern: abwägen, zustimmen und widersprechen', 'lexik-kollokation',
    'Am Ende äußerst du deine Meinung, wägst Vorteile und Nachteile ab und stimmst zu oder widersprichst',
    'في النهاية تعبّر عن رأيك، وتوازن بين جانبين، ثم توافق أو تعترض.',
    [
      ['Meiner Meinung nach ist der Plan sinnvoll.', 'تقدّم رأيك بالإطار meiner Meinung nach وتحافظ على الفعل ist في الموضع الثاني', 'الإطار كله يشغل مقدمة الجملة، ولذلك يأتي ist بعده مباشرة قبل الفاعل der Plan', 'Meiner Meinung nach der Plan ist sinnvoll.', 'بعد Meiner Meinung nach يأتي الفعل المصرف ist ثم الفاعل؛ لا نؤخر الفعل إلى ما بعد der Plan'],
      ['Der Plan ist einerseits praktisch, andererseits teuer.', 'توازن بين جانبين بالزوج einerseits … andererseits داخل جملة واحدة', 'يأتي الزوج هنا حول الصفتين praktisch وteuer بعد ist', 'Der Plan ist einerseits praktisch, andererseits er ist teuer.', 'في هذا البناء تنسّق andererseits الصفة الثانية مباشرة؛ والبديل الصحيح بجملتين هو Einerseits ist der Plan praktisch, andererseits ist er teuer'],
      ['Da stimme ich dir zu.', 'توافق باستعمال zustimmen مع الداتيف والفعل المنفصل', 'الشخص بعد zustimmen في الداتيف dir، والبادئة zu تأتي في القوس اليميني', 'Da stimme ich dich zu.', 'نقول jemandem zustimmen: dir في الداتيف، لا dich في النصب'],
      ['Trotzdem bin ich dafür.', 'تحافظ على موقفك بعد اعتراض باستعمال trotzdem وdafür', 'trotzdem رابط جملة رئيسية؛ يأتي بعده bin في الموضع الثاني، وdafür يعبّر عن التأييد', 'Trotzdem ich bin dafür.', 'بعد Trotzdem يأتي الفعل المصرف bin قبل الفاعل ich']
    ],
    [
      ['Meiner Meinung nach ist der Plan sinnvoll.', 'في رأيي الخطة منطقية', 'Meiner Meinung nach der Plan ist sinnvoll.', 'بعد إطار الرأي يأتي ist في الموضع الثاني', 'Meinung'],
      ['Ich muss dir leider widersprechen.', 'يجب أن أعترض عليك للأسف', 'Ich dir muss leider widersprechen.', 'في الجملة الرئيسية يأتي muss في الموضع الثاني بعد الفاعل Ich، ويبقى widersprechen في النهاية', 'widersprechen'],
      ['Der Plan ist einerseits praktisch, andererseits teuer.', 'الخطة عملية من جهة، لكنها غالية من جهة أخرى', 'Dem Plan ist einerseits praktisch, andererseits teuer.', 'الفاعل Plan يأتي في الرفع: der Plan، لا dem Plan', 'andererseits'],
      ['Da stimme ich dir zu.', 'أنا أوافقك في ذلك', 'Da stimme ich dich zu.', 'zustimmen يأخذ الداتيف dir، وتنفصل البادئة zu', 'zu']
    ],
    'Meiner Meinung nach ist der Plan sinnvoll. Der Plan ist einerseits praktisch, andererseits teuer. Trotzdem bin ich dafür.',
    'Ich muss dir leider widersprechen.',
    'Wiederhole morgen die fünf Sätze: Meiner Meinung nach ist der Plan sinnvoll. Der Plan ist einerseits praktisch, andererseits teuer. Trotzdem bin ich dafür. Da stimme ich dir zu. Ich muss dir leider widersprechen.',
    'غدًا راجع الجمل الخمس للرأي والموازنة والتأييد والموافقة والاعتراض.',
    {
      factFamilies: ['wortstellung', 'wortstellung', 'kasus', 'wortstellung'],
      writing: {
        zeigt: 'Fünf Sätze zu einer Meinung',
        erklaerung: 'اكتب الجمل الخمس كاملة: الرأي والجانبان والموقف والموافقة والاعتراض.',
        prompt: 'اكتب الجمل الخمس لمناقشة الخطة كاملة.',
        promptDe: 'Meiner Meinung nach ist der Plan sinnvoll. · Der Plan ist einerseits praktisch, andererseits teuer. · Trotzdem bin ich dafür. · Da stimme ich dir zu. · Ich muss dir leider widersprechen.',
        points: ['Meiner Meinung nach ist der Plan sinnvoll.', 'Der Plan ist einerseits praktisch, andererseits teuer.', 'Trotzdem bin ich dafür.', 'Da stimme ich dir zu.', 'Ich muss dir leider widersprechen.'],
        minWords: 29,
        frage: 'اكتب الجمل الخمس كاملة في 29 كلمة على الأقل.',
        familie: 'wortstellung',
        hinweise: ['ضع ist بعد Meiner Meinung nach، واستعمل الزوج einerseits … andererseits حول الصفتين.', 'ضع bin بعد Trotzdem، واستعمل dir مع zustimmen وwidersprechen، وضع zu في نهاية جملة الموافقة.']
      },
      imitateNearMiss: 'Meinunge',
      transformHint: 'بعد muss يأتي dir في الداتيف ثم المصدر widersprechen في القوس اليميني.',
      orderAr: 'رتّب الموازنة: Der Plan ثم ist ثم einerseits praktisch ثم andererseits teuer.',
      orderHints: ['ابدأ بالفاعل Der Plan ثم ضع ist بعده مباشرة.', 'ضع einerseits قبل praktisch وandererseits قبل teuer.'],
      orderSentence: 'Der Plan ist einerseits praktisch, andererseits teuer.',
      checkOrderSentence: 'Der Plan ist einerseits praktisch, andererseits teuer.',
      orderPromptAr: 'رتّب الكلمات لتكوين موازنة صحيحة بين كون الخطة عملية وكونها غالية.',
      speakAr: 'سجّل عشرين ثانية: قل Meiner Meinung nach ist der Plan sinnvoll وDer Plan ist einerseits praktisch, andererseits teuer وTrotzdem bin ich dafür وDa stimme ich dir zu وIch muss dir leider widersprechen.',
      summaryDe: 'Meiner Meinung nach ist der Plan sinnvoll. · Der Plan ist einerseits praktisch, andererseits teuer. · Trotzdem bin ich dafür. · Da stimme ich dir zu. · Ich muss dir leider widersprechen.',
      summaryAr: 'راجع إطار الرأي وeinerseits … andererseits وtrotzdem + V2 وdafür، ثم dir مع zustimmen وwidersprechen.',
      summaryRecap: 'Meinung Abwägung Haltung Zustimmung Widerspruch'
    }),

  U('a2-u5-l3', 'A2', 'البريد الإلكتروني الرسمي: النداء والطلب والختام', 'Formelle E-Mail: Anrede, Bitte und Gruß', 'register',
    'Am Ende schreibst du eine formelle E-Mail mit Anrede, Bitte, Dank, Gruß und Unterschrift',
    'في النهاية تكتب بريدًا إلكترونيًا رسميًا فيه نداء وطلب وشكر وختام وتوقيع.',
    [
      ['Sehr geehrte Damen und Herren,', 'تبدأ الرسالة الرسمية إلى جهة غير معروفة بنداء صحيح وفاصلة', 'تأخذ geehrte النهاية -e مع الجمع Damen und Herren، وتأتي فاصلة بعد النداء', 'Sehr geehrter Damen und Herren,', 'نقول Sehr geehrte Damen und Herren؛ النهاية -e، وبعد النداء فاصلة'],
      ['ich schreibe Ihnen wegen eines Termins.', 'تذكر سبب الرسالة بضمير المخاطب الرسمي وبـwegen + Genitiv', 'بعد فاصلة النداء تبدأ ich بحرف صغير؛ Ihnen رسمي، وبعد wegen نقول eines Termins في الأسلوب المعياري', 'ich schreibe Ihnen wegen einen Termin.', 'في الرسالة الرسمية المعيارية نقول wegen eines Termins؛ ويجوز wegen einem Termin في استعمال دارج، لا wegen einen Termin'],
      ['Könnten Sie mir bitte einen neuen Termin geben?', 'تطلب موعدًا جديدًا بأدب باستعمال könnten والمصدر في القوس اليميني', 'بعد Könnten يأتي Sie ثم mir في الداتيف، ويبقى geben مصدرًا بلا zu في النهاية', 'Könnten Sie mir bitte einen neuen Termin zu geben?', 'بعد Könnten يأتي المصدر geben بلا zu في القوس اليميني'],
      ['Vielen Dank für Ihre Antwort.', 'تشكر المخاطب الرسمي باستعمال Vielen Dank وIhre بحرف كبير', 'العبارة الثابتة Vielen Dank، والضمير الرسمي Ihre يبدأ بحرف كبير', 'Viele Dank für Ihre Antwort.', 'نقول Vielen Dank؛ تأخذ الصفة النهاية -en في هذه العبارة الثابتة']
    ],
    [
      ['Sehr geehrte Damen und Herren,', 'حضرات السادة المحترمين،', 'Sehr geehrte Damen und Herren.', 'بعد النداء الرسمي فاصلة لا نقطة', 'Herren'],
      ['ich schreibe Ihnen wegen eines Termins.', 'أكتب إليكم بخصوص موعد', 'ich schreibe Ihnen für eines Termins.', 'السبب يأتي هنا مع wegen + Genitiv: wegen eines Termins', 'Ihnen'],
      ['Könnten Sie mir bitte einen neuen Termin geben?', 'هل يمكنكم منحي موعدًا جديدًا من فضلكم؟', 'Könnten Sie mir bitte einen neuen Termin gibt?', 'بعد Könnten نحتاج المصدر geben', 'geben'],
      ['Mit freundlichen Grüßen\nSara Ben Ali', 'مع أطيب التحيات ثم التوقيع في السطر التالي', 'Mit freundlichen Grüßen,\nSara Ben Ali', 'لا فاصلة بعد صيغة الختام؛ يأتي الاسم في السطر التالي', 'freundlichen']
    ],
    'Sehr geehrte Damen und Herren, ich schreibe Ihnen wegen eines Termins. Könnten Sie mir bitte einen neuen Termin geben?',
    'Könnten Sie mir bitte einen neuen Termin geben?',
    'Wiederhole morgen diese formelle E-Mail:\nSehr geehrte Damen und Herren,\nich schreibe Ihnen wegen eines Termins.\nKönnten Sie mir bitte einen neuen Termin geben?\nVielen Dank für Ihre Antwort.\n\nMit freundlichen Grüßen\nSara Ben Ali',
    'غدًا راجع النداء والسبب والطلب والشكر والختام والتوقيع في البريد الرسمي.',
    {
      factFamilies: ['deklination', 'kasus', 'konjugation', 'deklination'],
      writing: {
        zeigt: 'Eine formelle E-Mail in fünf Bausteinen',
        erklaerung: 'اكتب اللبنات الخمس كاملة: النداء والسبب والطلب والشكر والختام مع التوقيع.',
        prompt: 'اكتب البريد الإلكتروني الرسمي كاملًا في خمسة أجزاء.',
        promptDe: 'Sehr geehrte Damen und Herren, · ich schreibe Ihnen wegen eines Termins. · Könnten Sie mir bitte einen neuen Termin geben? · Vielen Dank für Ihre Antwort. · Mit freundlichen Grüßen · Sara Ben Ali',
        points: ['Sehr geehrte Damen und Herren,', 'ich schreibe Ihnen wegen eines Termins.', 'Könnten Sie mir bitte einen neuen Termin geben?', 'Vielen Dank für Ihre Antwort.', 'Mit freundlichen Grüßen\nSara Ben Ali'],
        minWords: 30,
        frage: 'اكتب اللبنات الخمس مع التوقيع في 30 كلمة على الأقل.',
        familie: 'register',
        hinweise: ['ضع فاصلة بعد النداء ثم ابدأ ich بحرف صغير، واكتب Ihnen وIhre بحرف كبير.', 'ضع geben في النهاية بلا zu، ولا تضع فاصلة بعد Mit freundlichen Grüßen؛ اكتب الاسم في السطر التالي.']
      },
      imitateNearMiss: 'Herr',
      transformHint: 'بعد Könnten Sie يأتي mir في الداتيف، ثم einen neuen Termin، ثم المصدر geben بلا zu.',
      orderAr: 'رتّب الطلب: Könnten ثم Sie ثم mir bitte ثم einen neuen Termin ثم geben.',
      orderHints: ['ابدأ بالفعل المصرف Könnten ثم الفاعل Sie.', 'ضع المصدر geben في القوس اليميني بلا zu.'],
      orderSentence: 'Könnten Sie mir bitte einen neuen Termin geben?',
      orderRightBracket: ['geben?'],
      checkOrderSentence: 'Könnten Sie mir bitte einen neuen Termin geben?',
      checkOrderRightBracket: ['geben?'],
      orderPromptAr: 'رتّب الكلمات لتكوين طلب رسمي مهذب لموعد جديد.',
      speakAr: 'اقرأ البريد بصوت واضح: Sehr geehrte Damen und Herren، ثم ich schreibe Ihnen wegen eines Termins، ثم Könnten Sie mir bitte einen neuen Termin geben، ثم Vielen Dank für Ihre Antwort، وأخيرًا Mit freundlichen Grüßen وSara Ben Ali.',
      summaryDe: 'Sehr geehrte Damen und Herren, · ich schreibe Ihnen wegen eines Termins. · Könnten Sie mir bitte einen neuen Termin geben? · Vielen Dank für Ihre Antwort. · Mit freundlichen Grüßen · Sara Ben Ali',
      summaryAr: 'راجع فاصلة النداء وich الصغيرة وIhnen/Ihre الرسمية وwegen + Genitiv وKönnten Sie … geben وصيغة الختام بلا فاصلة.',
      summaryRecap: 'Anrede Anlass Bitte Dank Gruß Unterschrift'
    }),

  U('a2-u5-l4', 'A2', 'مكالمة رسمية: طلب شخص وطلب إعادة الاتصال', 'Formelles Telefonat: nach einer Person fragen und um Rückruf bitten', 'lexik-kollokation',
    'Am Ende führst du ein formelles Telefongespräch, fragst nach Herrn Bauer und bittest um einen Rückruf',
    'في النهاية تطلب التحدث إلى السيد باور هاتفيًا وتطلب منه إعادة الاتصال.',
    [
      ['Guten Tag, Sara Ben Ali am Apparat.', 'تفتتح المكالمة الرسمية بتحية ثم تعرّف بنفسك', 'في الهاتف تعني am Apparat أن المتكلم على الخط؛ ويصح أيضًا Hier spricht Sara Ben Ali', 'Guten Tag, Sara Ben Ali in Apparat.', 'التعبير الثابت هو am Apparat، أي an dem Apparat'],
      ['Könnte ich bitte Herrn Bauer sprechen?', 'تطلب التحدث إلى شخص بأدب باستعمال Konjunktiv II', 'بعد könnte يأتي الفاعل ich، ويبقى المصدر sprechen في النهاية؛ وHerr يأخذ -n في النصب: Herrn Bauer', 'Könnte ich bitte Herr Bauer sprechen?', 'نقول Herrn Bauer في النصب؛ Herr اسم مذكر ضعيف'],
      ['Herr Bauer ist gerade nicht da.', 'يبيّن موظف الاستقبال أن الشخص غير موجود الآن', 'الفاعل المفرد Herr Bauer يأخذ ist، والتعبير nicht da يعني غير موجود', 'Herr Bauer sind gerade nicht da.', 'مع Herr Bauer المفرد نقول ist لا sind'],
      ['Kann ich ihm etwas ausrichten?', 'يعرض موظف الاستقبال تبليغ رسالة للشخص الغائب', 'في jemandem etwas ausrichten يكون الشخص في الداتيف ihm، ويبقى المصدر ausrichten في النهاية بعد kann', 'Kann ich ihn etwas ausrichten?', 'المتلقي هنا داتيف: ihm؛ أما etwas فهو الشيء المبلّغ']
    ],
    [
      ['Guten Tag, Sara Ben Ali am Apparat.', 'مرحبًا، سارة بن علي على الخط', 'Guten Tag, Sara Ben Ali in Apparat.', 'نقول am Apparat؛ ويصح أيضًا Hier spricht Sara Ben Ali', 'Apparat'],
      ['Könnte ich bitte Herrn Bauer sprechen?', 'هل يمكنني التحدث إلى السيد باور من فضلك؟', 'Könnte ich bitte Herr Bauer sprechen?', 'Herr يأخذ -n في النصب: Herrn Bauer', 'Herrn'],
      ['Herr Bauer ist gerade nicht da.', 'السيد باور غير موجود الآن', 'Herr Bauer ist gerade kein da.', 'نفي الوجود هنا هو nicht da لا kein da', 'ist'],
      ['Kann ich ihm etwas ausrichten?', 'هل يمكنني أن أبلغه شيئًا؟', 'Kann ich ihn etwas ausrichten?', 'الشخص الذي نبلّغه يأخذ الداتيف: ihm', 'ihm']
    ],
    'Guten Tag, Sara Ben Ali am Apparat. Könnte ich bitte Herrn Bauer sprechen?',
    'Kann ich ihm etwas ausrichten?',
    'Übe morgen dieses formelle Telefonat:\nGuten Tag, Sara Ben Ali am Apparat.\nKönnte ich bitte Herrn Bauer sprechen?\nHerr Bauer ist gerade nicht da.\nKann ich ihm etwas ausrichten?\nJa, ich bitte um einen Rückruf.',
    'غدًا راجع التعريف بالنفس وطلب الشخص وذكر غيابه وعرض تبليغ رسالة وطلب إعادة الاتصال.',
    {
      factFamilies: ['präposition', 'deklination', 'konjugation', 'kasus'],
      writing: {
        zeigt: 'Ein formelles Telefonat in fünf Sätzen',
        erklaerung: 'اكتب الأدوار الخمسة كاملة: التعريف بالنفس وطلب الشخص وذكر غيابه وعرض تبليغ رسالة وطلب إعادة الاتصال.',
        prompt: 'اكتب المكالمة الرسمية في خمس جمل متتابعة.',
        promptDe: 'Guten Tag, Sara Ben Ali am Apparat. · Könnte ich bitte Herrn Bauer sprechen? · Herr Bauer ist gerade nicht da. · Kann ich ihm etwas ausrichten? · Ja, ich bitte um einen Rückruf.',
        points: ['Guten Tag, Sara Ben Ali am Apparat.', 'Könnte ich bitte Herrn Bauer sprechen?', 'Herr Bauer ist gerade nicht da.', 'Kann ich ihm etwas ausrichten?', 'Ja, ich bitte um einen Rückruf.'],
        minWords: 30,
        frage: 'اكتب الجمل الخمس في 30 كلمة على الأقل.',
        familie: 'register',
        hinweise: ['عرّف بنفسك بـam Apparat، ثم اطلب Herrn Bauer بصيغة könnte المهذبة.', 'استعمل ihm مع ausrichten وum einen Rückruf مع bitten.']
      },
      imitateNearMiss: 'Apparaten',
      transformHint: 'مع ausrichten يأتي الشخص في الداتيف ihm، ويبقى المصدر في نهاية سؤال modal.',
      orderAr: 'رتّب السؤال: Kann ثم ich ثم ihm ثم etwas ثم ausrichten.',
      orderHints: ['ابدأ بالفعل المصرف Kann ثم الفاعل ich.', 'ضع ihm في الداتيف، والمصدر ausrichten في القوس اليميني.'],
      orderSentence: 'Kann ich ihm etwas ausrichten?',
      orderRightBracket: ['ausrichten?'],
      checkOrderSentence: 'Könnte ich bitte Herrn Bauer sprechen?',
      checkOrderRightBracket: ['sprechen?'],
      orderPromptAr: 'رتّب الكلمات لتكوين سؤال هاتفي مهذب كامل.',
      speakAr: 'مثّل المكالمة كاملة بصوتين: Guten Tag, Sara Ben Ali am Apparat؛ Könnte ich bitte Herrn Bauer sprechen؛ Herr Bauer ist gerade nicht da؛ Kann ich ihm etwas ausrichten؛ Ja, ich bitte um einen Rückruf.',
      summaryDe: 'Guten Tag, Sara Ben Ali am Apparat. · Könnte ich bitte Herrn Bauer sprechen? · Herr Bauer ist gerade nicht da. · Kann ich ihm etwas ausrichten? · Ja, ich bitte um einen Rückruf.',
      summaryAr: 'راجع am Apparat وHerrn Bauer وnicht da وداتيف ihm وbitten um einen Rückruf.',
      summaryRecap: 'Vorstellung Person Abwesenheit Nachricht Rückruf'
    }),

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

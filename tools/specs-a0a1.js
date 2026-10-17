function U(id, level, ar, de, fam, goalDe, goalAr, facts, lex, model, say, hwDe, hwAr, options) {
  return Object.assign({ id, level, ar, de, fam, goalDe, goalAr, facts, lex, model, say, hwDe, hwAr }, options || {});
}
module.exports = [
  U('a0-u1-l2', 'A0', 'الأرقام والتهجئة', 'Zahlen und Buchstabieren', 'lexik-kollokation',
    'Am Ende zählst du von null bis zwanzig und buchstabierst deinen Namen',
    'في النهاية تعدّ من صفر إلى عشرين وتهجّئ اسمك.',
    [
      ['null eins zwei drei', 'الأعداد من صفر إلى ثلاثة', 'ابدأ بـ null ثم eins، لا بالكلمات الإنجليزية', 'zero one two three', 'هذه كلمات إنجليزية لا ألمانية'],
      ['elf zwölf dreizehn', 'أحد عشر واثنا عشر شكلان خاصان، ومن 13 يبدأ التركيب مع -zehn', 'احفظ elf وzwölf، ثم اربط drei بـ zehn في dreizehn', 'zehn drei', 'العدد 13 كلمة واحدة وترتيبه drei + zehn'],
      ['A wie Anna', 'يمكن توضيح الحرف بمثال: A wie Anna', 'يجوز قول اسم الحرف وحده؛ واستعمل wie مع كلمة مثال عند الحاجة إلى التوضيح', 'A like Anna', 'أداة المثال الألمانية هي wie لا like'],
      ['Ich bin zwanzig Jahre alt', 'العمر مع sein وJahre alt', 'قل Ich bin … Jahre alt، لا Ich habe', 'Ich habe zwanzig Jahre alt', 'العمر يُصاغ مع sein لا haben']
    ],
    [
      ['Ich bin zwanzig Jahre alt.', 'عمري عشرون سنة', 'Ich habe zwanzig Jahre alt.', 'العمر يُقال مع sein وJahre alt', 'zwanzig'],
      ['Meine Zahl ist drei.', 'رقمي ثلاثة', 'Meine Zahl ist three.', 'العدد يُقال بكلمة ألمانية', 'drei'],
      ['Bitte buchstabiere den Namen.', 'يرجى تهجئة الاسم', 'Bitte spell den Namen.', 'الفعل الألماني هو buchstabieren', 'buchstabiere'],
      ['A wie Anna.', 'A كما في Anna', 'A like Anna.', 'أداة المثال الألمانية هي wie', 'Anna']
    ],
    'Mein Name ist Omar.',
    'Ich bin zwanzig Jahre alt. Mein Name ist Omar: O wie Otto, M wie Martha, A wie Anton, R wie Richard.',
    'Zähle morgen laut von null bis zwanzig und buchstabiere deinen Namen.',
    'غدًا عدّ بصوت عالٍ من صفر إلى عشرين، ثم تهجّ اسمك.',
    {
      writing: {
        zeigt: 'Zahlen und Buchstabieren',
        erklaerung: 'اكتب عمرك واسمك، ثم وضّح ثلاثة أحرف على الأقل بصيغة wie.',
        prompt: 'اكتب عمرك واسمك، ثم تهجّ اسمك بثلاثة أمثلة على الأقل.',
        promptDe: 'Ich bin … Jahre alt. Mein Name ist …: A wie …, M wie …, R wie …',
        points: ['العمر مع Jahre alt', 'الاسم', 'ثلاثة أحرف بصيغة wie'],
        minWords: 12
      },
      speakAr: 'سجّل عشرين ثانية: قل عمرك، ثم اسمك، ثم تهجّه بأمثلة مثل A wie Anna.',
      orderSentence: 'Ich bin zwanzig Jahre alt.',
      hwHintDe: 'Schreib „Zähle“ mit ä, nicht „Zaehle“.',
      summaryDe: 'null bis zwanzig · A wie Anna · Ich bin … Jahre alt',
      summaryAr: 'تعدّ من صفر إلى عشرين، وتوضح الحروف بـ wie عند الحاجة، وتقول العمر مع sein وJahre alt.'
    }),

  U('a0-u1-l3', 'A0', 'أنا أكون واسمي', 'sein und heißen', 'konjugation',
    'Am Ende stellst du dich mit den Verben sein und heißen vor',
    'في النهاية تعرّف بنفسك باستعمال sein وheißen.',
    [
      ['Ich bin Sara', 'مع ich تأتي صيغة bin', 'يتغير sein مع الضمير: ich bin', 'Ich ist Sara', 'مع ich نقول bin، لا ist'],
      ['Du bist hier', 'مع du تأتي صيغة bist', 'لا تنقل صيغة ich إلى du: du bist', 'Du bin hier', 'مع du نقول bist، لا bin'],
      ['Er ist Lehrer', 'مع er تأتي صيغة ist', 'بعد sein تأتي المهنة عادةً بلا أداة في التعريف المحايد', 'Er ist eine Lehrer', 'Lehrer مذكر هنا؛ eine لا تطابقه'],
      ['Ich heiße Sara', 'heißen يجيب مباشرةً عن سؤال الاسم', 'نقول Ich heiße …؛ وIch bin … ممكنة أيضًا عند التعريف بالنفس', 'Ich bin heiße Sara', 'لا نجمع فعلين مصرّفين متتاليين بهذه الصورة']
    ],
    [
      ['Ich bin Sara.', 'أنا سارة', 'Ich ist Sara.', 'مع ich نقول bin، لا ist', 'bin'],
      ['Du bist hier.', 'أنت هنا', 'Du bin hier.', 'مع du نقول bist، لا bin', 'bist'],
      ['Er ist Lehrer.', 'هو معلّم', 'Er bin Lehrer.', 'مع er نقول ist، لا bin', 'ist'],
      ['Ich heiße Sara.', 'اسمي سارة', 'Ich heißt Sara.', 'مع ich نقول heiße، لا heißt', 'heiße']
    ],
    'Wie heißt du?',
    'Ich heiße Sara.',
    'Stell dich morgen mit „Ich heiße …“ vor. Ohne Gespräch: Schreib den Satz.',
    'غدًا عرّف بنفسك بجملة Ich heiße …، وإن لم تجد محادثة فاكتب الجملة.',
    {
      writing: {
        zeigt: 'sein und heißen',
        erklaerung: 'اكتب أربع جمل قصيرة تستعمل ich bin وdu bist وer أو sie ist وich heiße.',
        prompt: 'اكتب أربع جمل: عرّف بنفسك، خاطب شخصًا، عرّف بشخص ثالث، ثم اذكر اسمك.',
        promptDe: 'Ich bin … · Du bist … · Er/Sie ist … · Ich heiße …',
        points: ['ich bin', 'du bist', 'er/sie ist', 'ich heiße'],
        minWords: 12
      },
      speakAr: 'سجّل عشرين ثانية: استبدل Sara باسمك في Ich heiße …، ثم اسأل Wie heißt du? وأجب مرة أخرى.',
      orderSentence: 'Ich heiße Sara.',
      summaryDe: 'ich bin · du bist · er ist · ich heiße',
      summaryAr: 'مع ich نقول bin أو heiße، ومع du نقول bist، ومع er وsie نقول ist.'
    }),

  U('a0-u1-l4', 'A0', 'البلد واللغة', 'Länder und Sprachen', 'lexik-kollokation',
    'Am Ende sagst du, woher du kommst und welche Sprache du sprichst',
    'في النهاية تقول من أين أنت وأي لغة تتكلم.',
    [
      ['Ich komme aus Tunesien', 'مع بلد المنشأ نستعمل kommen aus', 'قل aus Tunesien، لا in Tunesien، عندما تذكر أصلك', 'Ich komme in Tunesien', 'in لا يعبّر عن بلد المنشأ هنا'],
      ['Ich komme aus Deutschland', 'Deutschland يأتي بلا أداة في هذه الجملة', 'لا تضف dem قبل Deutschland هنا', 'Ich komme aus dem Deutschland', 'اسم Deutschland لا يأخذ أداة في هذا الاستعمال'],
      ['Ich spreche Arabisch', 'اسم اللغة يأتي بلا أداة بعد sprechen هنا', 'في الجملة البسيطة نقول Arabisch بلا die', 'Ich spreche die Arabisch', 'die زائدة في هذا الاستعمال'],
      ['Ich spreche ein bisschen Deutsch', 'نستعمل ein bisschen لتحديد مقدار اللغة', 'قل ein bisschen Deutsch، لا تخلط الألمانية بالإنجليزية', 'Ich spreche little Deutsch', 'little كلمة إنجليزية لا ألمانية']
    ],
    [
      ['Ich komme aus Tunesien.', 'أنا من تونس', 'Ich komme in Tunesien.', 'بلد المنشأ يأتي مع aus', 'komme'],
      ['Ich komme aus Deutschland.', 'أنا من ألمانيا', 'Ich komme aus German.', 'اسم البلد الألماني هو Deutschland', 'Deutschland'],
      ['Ich spreche Arabisch.', 'أتكلم العربية', 'Ich spreche die Arabisch.', 'اسم اللغة هنا بلا أداة', 'spreche'],
      ['Ich spreche ein bisschen Deutsch.', 'أتكلم قليلًا من الألمانية', 'Ich spreche little Deutsch.', 'القليل هو ein bisschen', 'bisschen']
    ],
    'Woher kommst du?',
    'Ich komme aus Tunesien. Ich spreche Arabisch und ein bisschen Deutsch.',
    'Sag morgen, woher du kommst und welche Sprache du sprichst. Ohne Gespräch: Schreib zwei Sätze.',
    'غدًا قل من أين أنت وأي لغة تتكلم، وإن لم تجد محادثة فاكتب جملتين.',
    {
      writing: {
        zeigt: 'Herkunft und Sprachen',
        erklaerung: 'اكتب أربع جمل عن بلد المنشأ واللغات التي تتكلمها أو تتعلمها.',
        prompt: 'اكتب بلدك ولغتك الأولى ولغة تتعلمها ومقدار ما تتكلمه.',
        promptDe: 'Ich komme aus … · Ich spreche … · Ich lerne … · Ich spreche ein bisschen …',
        points: ['kommen aus', 'لغة بلا أداة', 'ein bisschen'],
        minWords: 16
      },
      speakAr: 'سجّل عشرين ثانية: قل من أين أنت، وما اللغة التي تتكلمها، وما اللغة التي تتعلمها.',
      orderSentence: 'Ich komme aus Tunesien.',
      summaryDe: 'Ich komme aus … · Ich spreche … · ein bisschen Deutsch',
      summaryAr: 'بلد المنشأ يأتي مع aus، واسم اللغة يأتي بلا أداة بعد sprechen في هذا الاستعمال.'
    }),

  U('a0-u1-l5', 'A0', 'العائلة والجنس', 'Familie und Genus', 'genus',
    'Am Ende nennst du vier Familienmitglieder mit dem richtigen Artikel',
    'في النهاية تسمّي أربعة من أفراد العائلة بالأداة الصحيحة.',
    [
      ['der Vater', 'Vater اسم مذكر', 'احفظ der مع Vater', 'die Vater', 'نقول der Vater، لا die Vater'],
      ['die Mutter', 'Mutter اسم مؤنث', 'احفظ die مع Mutter', 'der Mutter', 'نقول die Mutter، لا der Mutter'],
      ['das Kind', 'Kind اسم محايد', 'جنس الاسم النحوي لا يصف جنس الطفل', 'der Kind', 'نقول das Kind، لا der Kind'],
      ['die Schwester', 'Schwester اسم مؤنث', 'أداة Schwester هي die، وأداة Bruder هي der', 'der Schwester', 'نقول die Schwester، لا der Schwester']
    ],
    [
      ['Das ist der Vater.', 'هذا الأب', 'Das ist die Vater.', 'Vater يأخذ der', 'Vater'],
      ['Das ist die Mutter.', 'هذه الأم', 'Das ist der Mutter.', 'Mutter يأخذ die', 'Mutter'],
      ['Das ist das Kind.', 'هذا الطفل', 'Das ist der Kind.', 'Kind يأخذ das', 'Kind'],
      ['Das ist die Schwester.', 'هذه الأخت', 'Das ist der Schwester.', 'Schwester يأخذ die', 'Schwester']
    ],
    'Das ist meine Familie.',
    'Das ist die Mutter.',
    'Nenne morgen vier Familienmitglieder mit Artikel. Ohne Gespräch: Schreib die vier Wortgruppen.',
    'غدًا سمِّ أربعة من أفراد العائلة مع أدواتهم، وإن لم تجد محادثة فاكتب المجموعات الأربع.',
    {
      writing: {
        zeigt: 'Meine Familie',
        erklaerung: 'اكتب أربع جمل قصيرة، وفي كل جملة فرد من العائلة مع أداته الصحيحة.',
        prompt: 'اكتب أربع جمل تعرّف فيها بأربعة أفراد من العائلة.',
        promptDe: 'Das ist der … · Das ist die … · Das ist das … · Das sind die …',
        points: ['der', 'die', 'das', 'صيغة جمع واحدة'],
        minWords: 16
      },
      speakAr: 'سجّل عشرين ثانية: سمِّ أربعة من أفراد العائلة، واستعمل der وdie وdas مرةً على الأقل.',
      orderSentence: 'Das ist die Mutter.',
      summaryDe: 'der Vater · die Mutter · das Kind · die Schwester',
      summaryAr: 'احفظ أداة كل اسم معه: der Vater وdie Mutter وdas Kind وdie Schwester.'
    }),

  U('a0-u1-l6', 'A0', 'السؤال والجواب', 'Fragen', 'wortstellung',
    'Am Ende bildest du eine W-Frage und eine Ja/Nein-Frage',
    'في النهاية تبني سؤالًا بأداة استفهام وسؤال نعم/لا.',
    [
      ['Wie heißt du?', 'في سؤال W تأتي عبارة السؤال ثم الفعل المصرف', 'مع Wie المفردة يأتي الفعل بعدها مباشرةً: Wie heißt …?', 'Wie du heißt?', 'في السؤال المباشر نقول Wie heißt du?'],
      ['Woher kommst du?', 'بعد Woher يأتي الفعل ثم الفاعل', 'الترتيب هو Woher + kommst + du', 'Woher du kommst?', 'هذا ترتيب جملة تابعة، لا سؤال مباشر'],
      ['Bist du hier?', 'سؤال نعم/لا يبدأ بالفعل المصرف', 'الترتيب هو الفعل ثم الفاعل', 'Du bist hier?', 'هذه جملة خبر بعلامة سؤال؛ السؤال القياسي يبدأ بـBist'],
      ['Ich heiße Sara.', 'الجواب جملة خبر والفعل في الموضع الثاني', 'في الجواب يأتي الفاعل ثم الفعل هنا', 'Heiße ich Sara?', 'هذا سؤال نعم/لا، لا جواب']
    ],
    [
      ['Wie heißt du?', 'ما اسمك؟', 'Wie du heißt?', 'في السؤال المباشر يأتي heißt بعد Wie', 'heißt'],
      ['Woher kommst du?', 'من أين أنت؟', 'Woher du kommst?', 'في السؤال المباشر يأتي kommst بعد Woher', 'kommst'],
      ['Bist du hier?', 'هل أنت هنا؟', 'Du bist hier?', 'سؤال نعم/لا القياسي يبدأ بالفعل', 'Bist'],
      ['Ich heiße Sara.', 'اسمي سارة', 'Heiße ich Sara?', 'الجواب هنا يبدأ بالفاعل ثم الفعل', 'heiße']
    ],
    'Wie heißt du?',
    'Woher kommst du?',
    'Stell morgen eine W-Frage und eine Ja/Nein-Frage. Ohne Gespräch: Schreib beide Fragen.',
    'غدًا اطرح سؤالًا بأداة استفهام وسؤال نعم/لا، وإن لم تجد محادثة فاكتب السؤالين.',
    {
      writing: {
        zeigt: 'W-Frage und Ja/Nein-Frage',
        erklaerung: 'اكتب سؤالين بأداتي استفهام مختلفتين وسؤالين نعم/لا.',
        prompt: 'اكتب أربعة أسئلة صحيحة: سؤالين W وسؤالين نعم/لا.',
        promptDe: 'Wie …? · Woher …? · Bist du …? · Sprichst du …?',
        points: ['عبارة السؤال ثم الفعل', 'سؤال نعم/لا يبدأ بالفعل', 'علامة الاستفهام'],
        minWords: 12
      },
      speakAr: 'سجّل عشرين ثانية: اطرح سؤالًا بـWie أو Woher، ثم سؤال نعم/لا، وأجب عنهما بإيجاز.',
      orderSentence: 'Bist du hier?',
      orderAr: 'رتّب سؤال نعم/لا: يأتي الفعل المصرف أولًا ثم الفاعل.',
      orderHints: ['ابدأ بـBist، ثم ضع du.', 'علامة الاستفهام تبقى في نهاية السؤال.'],
      summaryDe: 'Wie heißt du? · Woher kommst du? · Bist du hier? · Ich heiße …',
      summaryAr: 'بعد عبارة W يأتي الفعل المصرف، أما سؤال نعم/لا فيبدأ بالفعل، والجواب جملة خبر.'
    }),

  U('a1-u1-l1', 'A1', 'المضارع المنتظم', 'Präsens', 'konjugation',
    'Am Ende konjugierst du regelmäßige Verben mit ich, du, er/sie/es und wir',
    'في النهاية تصرّف أفعالًا منتظمة مع ich وdu وer/sie/es وwir.',
    [
      ['ich wohne', 'مع ich نحذف -en من المصدر ونضيف -e', 'صيغة ich للفعل المنتظم تنتهي غالبًا بـ-e', 'ich wohnt', 'wohnt صيغة er/sie/es، لا ich'],
      ['du wohnst', 'مع du نحذف -en ونضيف -st', 'صيغة du للفعل المنتظم تنتهي غالبًا بـ-st', 'du wohne', 'wohne صيغة ich، لا du'],
      ['er wohnt', 'مع er/sie/es نحذف -en ونضيف -t', 'صيغة الغائب المفرد للفعل المنتظم تنتهي غالبًا بـ-t', 'er wohnst', 'wohnst صيغة du، لا er'],
      ['wir wohnen', 'مع wir يطابق الشكلُ المصدرَ في الكتابة', 'صيغة wir للفعل المنتظم تنتهي بـ-en', 'wir wohnt', 'wohnt لا تطابق wir']
    ],
    [
      ['Ich wohne in Sousse.', 'أسكن في سوسة', 'Ich wohnt in Sousse.', 'مع ich نقول wohne', 'wohne'],
      ['Du lernst Deutsch.', 'تتعلم الألمانية', 'Du lernen Deutsch.', 'مع du نقول lernst', 'lernst'],
      ['Er arbeitet heute.', 'هو يعمل اليوم', 'Er arbeiten heute.', 'مع er نقول arbeitet', 'arbeitet'],
      ['Wir lernen zusammen.', 'نتعلم معًا', 'Wir lernt zusammen.', 'مع wir نقول lernen', 'lernen']
    ],
    'Ich wohne in Sousse.',
    'Ich lerne Deutsch.',
    'Schreib morgen vier Sätze mit ich, du, er oder sie und wir.',
    'غدًا اكتب أربع جمل مع ich وdu وer أو sie وwir.',
    {
      writing: {
        zeigt: 'Ein regelmäßiges Verb im Präsens',
        erklaerung: 'اكتب أربع جمل بفعل منتظم واحد أو أكثر مع الضمائر الأربعة المستهدفة.',
        prompt: 'اكتب جملة مع ich وأخرى مع du وثالثة مع er أو sie ورابعة مع wir.',
        promptDe: 'Ich lerne … · Du lernst … · Er/Sie lernt … · Wir lernen …',
        points: ['ich: -e', 'du: -st', 'er/sie/es: -t', 'wir: -en'],
        minWords: 16
      },
      speakAr: 'سجّل عشرين ثانية: قل أربع جمل قصيرة بفعل منتظم مع ich وdu وer أو sie وwir.',
      orderSentence: 'Du lernst Deutsch.',
      summaryDe: 'ich wohne · du wohnst · er wohnt · wir wohnen',
      summaryAr: 'نهايات الفعل المنتظم هنا: ich -e، du -st، er/sie/es -t، wir -en.'
    }),

  U('a1-u1-l2', 'A1', 'النفي', 'nicht und kein', 'lexik-kollokation',
    'Am Ende verneinst du eine Handlung, eine Eigenschaft und ein Nomen mit nicht oder kein',
    'في النهاية تنفي فعلًا وصفةً واسمًا باستعمال nicht أو kein.',
    [
      ['Ich trinke nicht.', 'nicht ينفي الفعل هنا', 'في هذه الجملة البسيطة يأتي nicht بعد الفعل المصرف', 'Ich kein trinke.', 'kein لا ينفي الفعل، والفعل يبقى في الموضع الثاني'],
      ['Das ist nicht teuer.', 'nicht ينفي الصفة teuer', 'الصفة الخبرية تُنفى بـnicht، لا kein', 'Das ist kein teuer.', 'teuer صفة، لذلك نستعمل nicht'],
      ['Ich habe keinen Kaffee.', 'kein يتصرف مع الاسم؛ المذكر المنصوب يأخذ keinen', 'Kaffee مذكر ومفعول به، لذلك keinen', 'Ich habe kein Kaffee.', 'المذكر المنصوب يحتاج keinen، لا kein'],
      ['Ich habe keine Zeit.', 'Zeit مؤنث فتأخذ keine', 'kein يتبع جنس الاسم وحالته', 'Ich habe keinen Zeit.', 'Zeit مؤنث، لذلك نقول keine']
    ],
    [
      ['Ich trinke nicht.', 'لا أشرب', 'Ich trinke kein.', 'الفعل يُنفى بـnicht', 'nicht'],
      ['Das ist nicht teuer.', 'هذا ليس غاليًا', 'Das ist kein teuer.', 'الصفة تُنفى بـnicht', 'nicht'],
      ['Ich habe keinen Kaffee.', 'ليس عندي قهوة', 'Ich habe kein Kaffee.', 'Kaffee مذكر منصوب: keinen', 'keinen'],
      ['Ich habe keine Zeit.', 'ليس عندي وقت', 'Ich habe keinen Zeit.', 'Zeit مؤنث: keine', 'keine']
    ],
    'Ich habe keinen Kaffee.',
    'Ich habe keine Zeit.',
    'Verneine morgen: Schreib zwei Sätze mit nicht und zwei mit einer Form von kein.',
    'غدًا اكتب جملتين بـnicht وجملتين بإحدى صيغ kein.',
    {
      writing: {
        zeigt: 'nicht oder kein?',
        erklaerung: 'اكتب أربع جمل نفي: فعلًا وصفةً بـnicht، واسمين بصيغتين مناسبتين من kein.',
        prompt: 'اكتب جملة تنفي فعلًا، وأخرى تنفي صفة، وثالثة بـkeinen، ورابعة بـkeine أو kein.',
        promptDe: 'Ich … nicht. · Das ist nicht … · Ich habe keinen … · Ich habe keine …',
        points: ['فعل مع nicht', 'صفة مع nicht', 'اسم مع keinen', 'اسم مع kein أو keine'],
        minWords: 16
      },
      speakAr: 'سجّل عشرين ثانية: قل جملتين بـnicht وجملتين بصيغ مناسبة من kein.',
      orderSentence: 'Das ist nicht teuer.',
      summaryDe: 'Ich trinke nicht · nicht teuer · keinen Kaffee · keine Zeit',
      summaryAr: 'nicht ينفي فعلًا أو صفة هنا، وkein يتصرف قبل الاسم: kein أو keine أو keinen.'
    }),

  U('a1-u1-l3', 'A1', 'أدوات حالة النصب', 'Artikel im Akkusativ', 'kasus',
    'Am Ende verwendest du bei Akkusativobjekten die Artikelformen den, das, die und einen',
    'في النهاية تستعمل صيغ الأدوات den وdas وdie وeinen مع المفعول به في حالة النصب.',
    [
      ['Ich sehe den Mann.', 'أداة التعريف للمذكر المفرد تتغير من der إلى den في حالة النصب', 'Der Mann ist hier (Nominativ) · Ich sehe den Mann (Akkusativ)', 'Ich sehe der Mann.', 'Mann مذكر ومفعول به هنا، لذلك نقول den Mann'],
      ['Ich trinke das Wasser.', 'أداة التعريف للمحايد تبقى das في حالة النصب', 'das Wasser تبقى كما هي عندما تكون مفعولًا به', 'Ich trinke den Wasser.', 'Wasser محايد، لذلك نقول das Wasser'],
      ['Ich kaufe die Jacke.', 'أداة التعريف للمؤنث تبقى die في حالة النصب', 'die Jacke تبقى كما هي عندما تكون مفعولًا به', 'Ich kaufe den Jacke.', 'Jacke مؤنث، لذلك نقول die Jacke'],
      ['Ich habe einen Termin.', 'أداة التنكير للمذكر المفرد تتغير من ein إلى einen في حالة النصب', 'Ein Termin ist frei (Nominativ) · Ich habe einen Termin (Akkusativ)', 'Ich habe ein Termin.', 'Termin مذكر ومفعول به هنا، لذلك نقول einen Termin']
    ],
    [
      ['Ich sehe den Mann.', 'أرى الرجل', 'Ich sehe der Mann.', 'المفعول المذكر يأخذ den', 'den'],
      ['Ich trinke das Wasser.', 'أشرب الماء', 'Ich trinke den Wasser.', 'Wasser محايد، لذلك تبقى الأداة das', 'das'],
      ['Ich kaufe die Jacke.', 'أشتري السترة', 'Ich kaufe den Jacke.', 'Jacke مؤنث، لذلك تبقى الأداة die', 'die'],
      ['Ich habe einen Termin.', 'عندي موعد', 'Ich habe ein Termin.', 'المذكر النكرة يأخذ einen في النصب', 'einen']
    ],
    'Ich sehe den Mann.',
    'Ich habe einen Termin.',
    'Schreib morgen je einen Satz mit „den“, „das“, „die“ und „einen“.',
    'غدًا اكتب جملة واحدة مع كل صيغة: den وdas وdie وeinen.',
    {
      writing: {
        zeigt: 'Artikel im Akkusativ',
        erklaerung: 'اكتب أربع جمل بمفعول به: مذكرًا معرفًا ومحايدًا معرفًا ومؤنثًا أو جمعًا معرفًا ومذكرًا نكرة.',
        prompt: 'اكتب أربع جمل: واحدة بـden، وأخرى بـdas، وثالثة بـdie، ورابعة بـeinen.',
        promptDe: 'Ich sehe den … · Ich kaufe das … · Ich nehme die … · Ich habe einen …',
        points: ['den مع المذكر المعرف', 'das مع المحايد المعرف', 'die مع المؤنث أو الجمع المعرف', 'einen مع المذكر النكرة'],
        minWords: 16,
        frage: 'اكتب أربع جمل بمفعول به.',
        familie: 'kasus',
        hinweise: ['استعمل فعلًا متعديًا في كل جملة.', 'راجع جنس الاسم ثم اختر den أو das أو die أو einen.']
      },
      imitateNearMiss: 'der',
      orderAr: 'رتّب جملة المفعول به، واجعل الفعل المصرف في الموضع الثاني.',
      orderHints: ['ابدأ بـIch، ثم ضع habe في الموضع الثاني.', 'ضع einen Termin بعد الفعل.'],
      speakAr: 'سجّل عشرين ثانية: قل أربع جمل قصيرة بمفعول به، واستعمل den وdas وdie وeinen مرةً لكل منها.',
      orderSentence: 'Ich habe einen Termin.',
      summaryDe: 'der → den · das → das · die (feminin/Plural) → die · ein → einen (maskulin)',
      summaryAr: 'في نصب المفرد المذكر تتغير der إلى den وein إلى einen، بينما تبقى das وdie كما هما هنا.'
    }),

  U('a1-u1-l4', 'A1', 'ضمائر حالة النصب', 'Pronomen im Akkusativ', 'kasus',
    'Am Ende verwendest du die Akkusativpronomen mich, dich, ihn, sie, es, uns und euch',
    'في النهاية تستعمل ضمائر النصب mich وdich وihn وsie وes وuns وeuch.',
    [
      ['Siehst du mich?', 'ضمير ich يتحول إلى mich عندما يكون مفعولًا به', 'ich → mich في حالة النصب، أما mir فهو للداتيف', 'Siehst du mir?', 'sehen يأخذ هنا مفعولًا به في النصب، لذلك نقول mich لا mir'],
      ['Ich sehe dich.', 'ضمير du يتحول إلى dich عندما يكون مفعولًا به', 'du → dich في حالة النصب، أما dir فهو للداتيف', 'Ich sehe dir.', 'مفعول sehen هنا في النصب، لذلك نقول dich لا dir'],
      ['Ich sehe ihn.', 'ضمير er يتحول إلى ihn عندما يكون مفعولًا به', 'er → ihn في حالة النصب، أما ihm فهو للداتيف', 'Ich sehe ihm.', 'مفعول sehen هنا في النصب، لذلك نقول ihn لا ihm'],
      ['Ich sehe sie.', 'ضمير sie المؤنث يبقى sie عندما يكون مفعولًا به', 'sie → sie في حالة النصب، أما ihr فهو للداتيف في هذا السياق', 'Ich sehe ihr.', 'مفعول sehen هنا في النصب، لذلك نقول sie لا ihr']
    ],
    [
      ['Siehst du mich?', 'هل تراني؟', 'Siehst du mir?', 'ich تتحول إلى mich في النصب', 'mich'],
      ['Ich sehe dich.', 'أراك', 'Ich sehe dir.', 'du تتحول إلى dich في النصب', 'dich'],
      ['Ich sehe ihn.', 'أراه', 'Ich sehe ihm.', 'er تتحول إلى ihn في النصب', 'ihn'],
      ['Ich sehe sie.', 'أراها', 'Ich sehe ihr.', 'sie المؤنثة تبقى sie في النصب', 'sie']
    ],
    'Ich sehe ihn.',
    'Ich sehe dich.',
    'Schreib morgen sieben Sätze. Ersetze in jedem Satz ein Nomen durch eines dieser Pronomen und verwende jedes einmal: mich, dich, ihn, sie, es, uns, euch.',
    'غدًا اكتب سبع جمل. في كل جملة استبدل اسمًا بضمير مختلف من هذه الضمائر: mich وdich وihn وsie وes وuns وeuch.',
    {
      writing: {
        zeigt: 'Pronomen im Akkusativ',
        erklaerung: 'اكتب سبع جمل قصيرة، واستعمل في كل جملة ضمير نصب مختلفًا من قائمة الدرس.',
        prompt: 'اكتب جملة صحيحة مع كل من mich وdich وihn وsie وes وuns وeuch.',
        promptDe: 'Siehst du mich? · Ich sehe dich. · Ich kenne ihn. · Ich sehe sie. · Ich habe es. · Besuchst du uns? · Ich rufe euch an.',
        points: ['mich', 'dich', 'ihn', 'sie', 'es', 'uns', 'euch'],
        minWords: 21,
        frage: 'اكتب سبع جمل بضمائر نصب.',
        familie: 'kasus',
        hinweise: ['حدّد الفاعل والفعل أولًا، ثم اختر ضمير المفعول.', 'لا تستعمل mir أو dir أو ihm مكان ضمير النصب.']
      },
      imitateNearMiss: 'mir',
      orderAr: 'رتّب جملة المفعول به، واجعل الفعل المصرف في الموضع الثاني.',
      orderHints: ['ابدأ بـIch، ثم ضع sehe في الموضع الثاني.', 'ضع ضمير النصب dich بعد الفعل.'],
      speakAr: 'سجّل عشرين ثانية: قل جملة قصيرة مع كل من mich وdich وihn وsie وes وuns وeuch.',
      orderSentence: 'Ich sehe dich.',
      summaryDe: 'ich → mich · du → dich · er → ihn · sie → sie · es → es · wir → uns · ihr → euch',
      summaryAr: 'ضمائر النصب المستهدفة: mich وdich وihn وsie وes وuns وeuch؛ ولا نستبدلها بصيغ الداتيف mir أو dir أو ihm.',
      summaryRecap: 'سبعة ضمائر نصب في جمل كاملة'
    }),

  U('a1-u1-l5', 'A1', 'أدوات الملكية', 'Possessivartikel', 'deklination',
    'Am Ende verwendest du mein, meine und meinen sowie die formellen Formen Ihr und Ihre in kurzen Sätzen',
    'في النهاية تستعمل mein وmeine وmeinen، وكذلك Ihr وIhre في الخطاب الرسمي، داخل جمل قصيرة.',
    [
      ['Das ist mein Bruder.', 'مع الاسم المذكر في الرفع نستعمل mein', 'بعد ist يأتي Bruder هنا في الرفع: mein Bruder', 'Das ist meine Bruder.', 'Bruder مذكر وفي الرفع، لذلك نقول mein لا meine'],
      ['Das ist meine Schwester.', 'مع الاسم المؤنث في الرفع نستعمل meine', 'Schwester مؤنث، لذلك تأخذ meine', 'Das ist mein Schwester.', 'Schwester مؤنث، لذلك نقول meine لا mein'],
      ['Ich sehe meinen Bruder.', 'مع الاسم المذكر في النصب نستعمل meinen', 'Bruder مفعول به مذكر هنا، لذلك تتغير mein إلى meinen', 'Ich sehe mein Bruder.', 'المذكر في النصب يحتاج meinen في هذه الجملة'],
      ['Wie ist Ihre Nummer?', 'في خطاب الاحترام نستعمل Ihre مع Nummer', 'Ihr أو Ihre تدل على الملكية مع Sie الرسمية؛ والنهاية تتبع الاسم', 'Wie ist Sie Nummer?', 'Sie ضمير شخصي؛ أداة الملكية الرسمية الصحيحة هنا هي Ihre']
    ],
    [
      ['Das ist mein Bruder.', 'هذا أخي', 'Das ist meine Bruder.', 'Bruder مذكر في الرفع: mein', 'mein'],
      ['Das ist meine Schwester.', 'هذه أختي', 'Das ist mein Schwester.', 'Schwester مؤنث: meine', 'meine'],
      ['Ich sehe meinen Bruder.', 'أرى أخي', 'Ich sehe mein Bruder.', 'Bruder مذكر في النصب: meinen', 'meinen'],
      ['Wie ist Ihre Nummer?', 'ما رقم حضرتك؟', 'Wie ist Sie Nummer?', 'في خطاب الاحترام نقول Ihre Nummer', 'Ihre']
    ],
    'Das ist meine Schwester.',
    'Ich sehe meinen Bruder.',
    'Schreibe morgen sechs Sätze: Verwende mein mit einem maskulinen und einem neutralen Nomen sowie meine, meinen, Ihr und Ihre jeweils mindestens einmal. Achte auf die Großschreibung.',
    'غدًا اكتب ست جمل: استعمل mein مرةً مع اسم مذكر ومرةً مع اسم محايد، ثم استعمل meine وmeinen وIhr وIhre مرةً على الأقل، وانتبه إلى كتابة الصيغ الرسمية بحرف كبير.',
    {
      writing: {
        zeigt: 'Possessivartikel in kurzen Sätzen',
        erklaerung: 'اكتب ست جمل: استعمل mein مع اسم مذكر أو محايد، وmeine مع اسم مؤنث أو جمع، وmeinen مع مفعول مذكر، ثم Ihr وIhre في خطاب رسمي.',
        prompt: 'اكتب ست جمل صحيحة تغطي mein وmeine وmeinen وIhr وIhre.',
        promptDe: 'Das ist mein Bruder. · Das ist meine Schwester. · Mein Kind ist hier. · Ich sehe meinen Bruder. · Ihr Termin ist um zehn. · Wie ist Ihre Nummer?',
        points: ['mein مع اسم مذكر', 'mein مع اسم محايد', 'meine مع اسم مؤنث أو جمع', 'meinen في النصب المذكر', 'Ihr في الخطاب الرسمي', 'Ihre في الخطاب الرسمي'],
        minWords: 24,
        frage: 'اكتب ست جمل بأدوات الملكية المستهدفة.',
        familie: 'deklination',
        hinweise: ['اختر صاحب الشيء أولًا، ثم طابق نهاية أداة الملكية مع جنس الاسم وعدده وحالته.', 'في النصب المذكر استعمل meinen، واكتب Ihr وIhre بحرف كبير عند مخاطبة Sie.']
      },
      imitateNearMiss: 'meinen',
      orderAr: 'رتّب جملة فيها أداة ملكية ومفعول به، واجعل الفعل المصرف في الموضع الثاني.',
      orderHints: ['ابدأ بـIch، ثم ضع sehe في الموضع الثاني.', 'بعد الفعل ضع meinen Bruder بوصفه المفعول به.'],
      speakAr: 'سجّل عشرين ثانية: قل جملة مع mein، وأخرى مع meine، وثالثة مع meinen، ثم جملتين رسميتين مع Ihr وIhre.',
      orderSentence: 'Ich sehe meinen Bruder.',
      checkOrderSentence: 'Ihr Termin ist um zehn.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة صحيحة.',
      summaryDe: 'Nominativ: mein Bruder, mein Kind · meine Schwester, meine Eltern · Akkusativ: meinen Bruder · formell: Ihr Termin, Ihre Nummer',
      summaryAr: 'جذر أداة الملكية يحدد صاحب الشيء، أما النهاية فتتبع جنس الاسم وعدده وحالته: mein أو meine، وفي النصب المذكر meinen؛ ومع Sie الرسمية نكتب Ihr وIhre بحرف كبير.',
      summaryRecap: 'المالك أولًا ثم الجنس والحالة'
    }),

  U('a1-u1-l6', 'A1', 'أستطيع ويجب عليّ', 'können und müssen', 'konjugation',
    'Am Ende bildest du Aussagen mit „ich kann“, „du kannst“ und „ich muss“ sowie eine Frage mit „Kannst du ...?“.',
    'في النهاية تكوّن جملًا خبرية مع «ich kann» و«du kannst» و«ich muss»، وسؤالًا مع «Kannst du ...؟»',
    [
      ['Ich kann schwimmen.', 'مع ich نستعمل kann', 'الفعل können يتغير هنا إلى kann، ويبقى schwimmen مصدرًا', 'Ich kannst schwimmen.', 'مع ich نقول kann لا kannst'],
      ['Du kannst bleiben.', 'مع du نستعمل kannst', 'الفعل المصرف هو kannst، ويبقى bleiben مصدرًا في آخر الجملة', 'Du kann bleiben.', 'مع du نقول kannst لا kann'],
      ['Ich muss lernen.', 'في الإملاء القياسي الحديث نكتب muss بـss', 'muß كتابة قديمة؛ والصيغة الحالية هي muss', 'Ich muß lernen.', 'في الإملاء القياسي الحديث نكتب muss'],
      ['Sie muss heute arbeiten.', 'بعد الفعل الناقص يأتي المصدر في آخر الجملة بلا zu', 'muss هو الفعل المصرف وarbeiten هو المصدر', 'Sie muss heute zu arbeiten.', 'بعد müssen نستعمل المصدر مباشرةً: arbeiten بلا zu']
    ],
    [
      ['Ich kann schwimmen.', 'أستطيع السباحة', 'Ich kannst schwimmen.', 'مع ich نقول kann', 'kann'],
      ['Du kannst bleiben.', 'تستطيع البقاء', 'Du kann bleiben.', 'مع du نقول kannst', 'kannst'],
      ['Ich muss lernen.', 'يجب أن أدرس', 'Ich muß lernen.', 'الإملاء القياسي الحديث هو muss', 'muss'],
      ['Sie muss heute arbeiten.', 'يجب أن تعمل اليوم', 'Sie muss heute zu arbeiten.', 'بعد muss يأتي المصدر بلا zu', 'arbeiten']
    ],
    'Ich kann schwimmen.',
    'Ich muss lernen.',
    'Schreibe morgen vier Sätze. Beginne drei mit „Ich kann“, „Du kannst“ und „Ich muss“; der vierte ist eine Frage mit „Kannst du ...?“.',
    'غدًا اكتب أربع جمل: ابدأ ثلاثًا بـ«Ich kann» و«Du kannst» و«Ich muss»، واجعل الرابعة سؤالًا مع «Kannst du ...؟»',
    {
      writing: {
        zeigt: 'Aussagen und Fragen mit Modalverben',
        erklaerung: 'اكتب ست جمل: جملتين مع ich kann، وجملة مع du kannst، وسؤالًا مع Kannst du، وجملتين مع muss. ضع المصدر في آخر كل جملة.',
        prompt: 'اكتب ست جمل صحيحة تغطي kann وkannst وmuss، ومنها سؤال واحد.',
        promptDe: 'Ich kann schwimmen. · Ich kann heute nicht kommen. · Du kannst bleiben. · Kannst du mitkommen? · Ich muss heute lernen. · Sie muss heute arbeiten.',
        points: ['جملة مع ich kann', 'جملة منفية مع ich kann', 'جملة مع du kannst', 'سؤال مع Kannst du', 'جملة مع ich muss', 'جملة مع sie muss'],
        minWords: 20,
        frage: 'اكتب ست جمل بالفعل الناقص والمصدر.',
        familie: 'konjugation',
        hinweise: ['صرّف kann أو kannst أو muss حسب الفاعل.', 'ضع المصدر مثل schwimmen أو bleiben أو lernen في آخر الجملة بلا zu.']
      },
      imitateNearMiss: 'kannst',
      transformHint: 'مع ich نستعمل muss هنا، ويبقى lernen مصدرًا في النهاية.',
      orderAr: 'رتّب جملة خبرية مع muss، واجعل الفعل المصرف في الموضع الثاني والمصدر في النهاية.',
      orderHints: ['ابدأ بـIch، ثم ضع muss في الموضع الثاني.', 'ضع heute في الوسط وlernen في نهاية الجملة.'],
      orderSentence: 'Ich muss heute lernen.',
      checkOrderSentence: 'Kannst du mitkommen?',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة صحيحة.',
      speakAr: 'سجّل عشرين ثانية: قل جملة مع ich kann، وأخرى مع du kannst، وثالثة مع ich muss، ثم اسأل Kannst du ...؟',
      summaryDe: 'Aussage: Ich kann schwimmen. · Du kannst bleiben. · Ich muss lernen. · Frage: Kannst du mitkommen?',
      summaryAr: 'الفعل الناقص هو المصرف: ich kann وdu kannst وich muss؛ ويأتي المصدر في النهاية، وفي سؤال نعم/لا يبدأ السؤال بالفعل المصرف: Kannst du ...؟',
      summaryRecap: 'الفعل المصرف أولًا والمصدر أخيرًا'
    }),

  U('a1-u2-l1', 'A1', 'أريد وأود', 'wollen und möchten', 'register',
    'Am Ende formulierst du persönliche Wünsche mit „will/willst“ und höfliche Bitten oder Angebote mit „möchte/Möchten Sie ...?“.',
    'في النهاية تعبّر عن رغبات شخصية بـ«will/willst»، وعن طلبات أو عروض مهذبة بـ«möchte/Möchten Sie ...؟»',
    [
      ['Ich will zu Hause bleiben.', 'will يعبّر هنا عن رغبة أو نية شخصية مباشرة', 'في الخطة الشخصية يمكن استعمال will؛ وبعده يبقى bleiben مصدرًا', 'Ich willst zu Hause bleiben.', 'مع ich نقول will لا willst'],
      ['Ich möchte zahlen.', 'möchte صيغة مألوفة لطلب مهذب في المطعم', 'في طلب الخدمة تكون möchte عادةً ألطف من will، مع أن will صيغة نحوية', 'Ich möchtest zahlen.', 'مع ich نقول möchte لا möchtest'],
      ['Du willst heute kochen.', 'مع du نستعمل willst', 'will يتغير مع du إلى willst، ويبقى kochen مصدرًا في النهاية', 'Du will heute kochen.', 'مع du نقول willst لا will'],
      ['Möchten Sie etwas trinken?', 'في السؤال الرسمي نستعمل Möchten Sie', 'مع Sie الرسمية تأتي صيغة الجمع möchten، ثم المصدر trinken', 'Möchtest Sie etwas trinken?', 'مع Sie الرسمية نقول möchten لا möchtest']
    ],
    [
      ['Ich will zu Hause bleiben.', 'أريد البقاء في البيت', 'Ich willst zu Hause bleiben.', 'مع ich نقول will', 'will'],
      ['Ich möchte zahlen.', 'أودّ أن أدفع', 'Ich möchtest zahlen.', 'مع ich نقول möchte', 'möchte'],
      ['Du willst heute kochen.', 'تريد أن تطبخ اليوم', 'Du will heute kochen.', 'مع du نقول willst', 'willst'],
      ['Möchten Sie etwas trinken?', 'هل تودّون شرب شيء؟', 'Möchtest Sie etwas trinken?', 'مع Sie الرسمية نقول möchten', 'Möchten']
    ],
    'Ich will zu Hause bleiben.',
    'Ich möchte zahlen.',
    'Schreibe morgen vier Sätze: einen mit „ich will“, einen mit „du willst“, eine höfliche Bitte mit „ich möchte“ und eine formelle Frage mit „Möchten Sie ...?“.',
    'غدًا اكتب أربع جمل: واحدة مع «ich will»، وأخرى مع «du willst»، وطلبًا مهذبًا مع «ich möchte»، وسؤالًا رسميًا مع «Möchten Sie ...؟»',
    {
      factFamilies: ['konjugation', 'konjugation', 'konjugation', 'konjugation'],
      writing: {
        zeigt: 'Persönliche Wünsche, höfliche Bitten und Angebote',
        erklaerung: 'اكتب ست جمل: رغبتين شخصيتين مع will أو willst، وطلبين مهذبين مع möchte، وسؤالين رسميين مع Möchten Sie. ضع المصدر في النهاية عندما يوجد فعل ثانٍ.',
        prompt: 'اكتب ست جمل تميز الرغبة الشخصية من الطلب المهذب.',
        promptDe: 'Ich will zu Hause bleiben. · Du willst heute kochen. · Ich möchte einen Kaffee. · Ich möchte zahlen. · Möchten Sie etwas trinken? · Möchten Sie den Kuchen probieren?',
        points: ['رغبة شخصية مع ich will', 'رغبة شخصية مع du willst', 'طلب مع ich möchte واسم', 'طلب مع ich möchte ومصدر', 'سؤال رسمي مع Möchten Sie وtrinken', 'سؤال رسمي مع Möchten Sie وprobieren'],
        minWords: 24,
        frage: 'اكتب ست جمل بـwill وwillst وmöchte وMöchten Sie.',
        familie: 'register',
        hinweise: ['استعمل will أو willst لخطة أو رغبة شخصية مباشرة.', 'استعمل möchte أو Möchten Sie لطلب أو عرض مهذب، وضع المصدر في النهاية.']
      },
      imitateNearMiss: 'willst',
      transformHint: 'في طلب الدفع في المطعم نقول عادةً Ich möchte zahlen.',
      orderAr: 'رتّب طلبًا مهذبًا، واجعل möchte في الموضع الثاني.',
      orderHints: ['ابدأ بـIch، ثم ضع möchte في الموضع الثاني.', 'ضع einen Kaffee بعد الفعل المصرف.'],
      orderSentence: 'Ich möchte einen Kaffee.',
      checkOrderSentence: 'Du willst heute kochen.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة صحيحة.',
      speakAr: 'سجّل عشرين ثانية: قل رغبة مع ich will، وأخرى مع du willst، ثم طلبًا مع ich möchte، واسأل سؤالًا رسميًا مع Möchten Sie.',
      summaryDe: 'persönlich: Ich will zu Hause bleiben. · Du willst heute kochen. · höflich: Ich möchte zahlen. · Möchten Sie etwas trinken?',
      summaryAr: 'will وwillst يناسبان الرغبة أو النية الشخصية المباشرة؛ وفي طلب الخدمة أو تقديم عرض رسمي تكون möchte وMöchten Sie عادةً ألطف. وإذا وُجد فعل ثانٍ بقي مصدرًا في النهاية.',
      summaryRecap: 'رغبة مباشرة وطلب مهذب'
    }),

  U('a1-u2-l2', 'A1', 'الأفعال المنفصلة', 'Trennbare Verben', 'wortstellung',
    'Am Ende bildest du Hauptsätze mit „aufstehen“, „anrufen“ und „einkaufen“ und verwendest „aufstehen“ nach „muss“ als ungetrennten Infinitiv.',
    'في النهاية تكوّن جملًا رئيسية مع aufstehen وanrufen وeinkaufen، وتُبقي aufstehen مصدرًا متصلًا بعد muss.',
    [
      ['Ich stehe um sieben auf.', 'في الجملة الرئيسية ينفصل aufstehen: stehe في الموضع الثاني وauf في النهاية', 'الجزء المصرف يحمل النهاية، وتأتي البادئة المنفصلة في آخر الجملة', 'Ich aufstehe um sieben.', 'في الجملة الرئيسية نقول stehe ... auf لا aufstehe'],
      ['Du rufst mich an.', 'مع du نصرّف rufen إلى rufst ونضع an في النهاية', 'المفعول mich يأتي قبل البادئة an', 'Du anrufst mich.', 'نقول rufst ... an، ولا نبقي anrufen متصلًا هنا'],
      ['Um acht stehe ich auf.', 'إذا بدأنا بالوقت بقي الفعل المصرف ثانيًا والبادئة في النهاية', 'Um acht يملأ الموضع الأول، ثم stehe، ثم الفاعل ich، وتبقى auf أخيرًا', 'Um acht ich stehe auf.', 'بعد ظرف البداية يأتي الفعل المصرف مباشرةً'],
      ['Ich muss um sieben aufstehen.', 'بعد muss يبقى المصدر aufstehen متصلًا في نهاية الجملة', 'الفصل يخص الفعل المنفصل المصرف في الجملة الرئيسية؛ أما المصدر بعد muss فيبقى aufstehen', 'Ich muss um sieben stehe auf.', 'بعد muss نحتاج المصدر المتصل aufstehen']
    ],
    [
      ['Ich stehe um sieben auf.', 'أستيقظ في السابعة', 'Ich aufstehe um sieben.', 'الفعل المصرف ثانيًا والبادئة في النهاية', 'auf'],
      ['Du rufst mich an.', 'تتصل بي', 'Du anrufst mich.', 'مع du نقول rufst ... an', 'an'],
      ['Um acht stehe ich auf.', 'أستيقظ في الثامنة', 'Um acht ich stehe auf.', 'بعد الوقت يأتي الفعل المصرف ثم الفاعل', 'stehe'],
      ['Ich muss um sieben aufstehen.', 'يجب أن أستيقظ في السابعة', 'Ich muss um sieben stehe auf.', 'بعد muss يبقى المصدر aufstehen متصلًا', 'aufstehen']
    ],
    'Ich stehe um sieben auf.',
    'Du rufst mich an.',
    'Schreibe morgen vier Sätze: einen mit „aufstehen“, einen mit „anrufen“, einen mit „einkaufen“ und einen mit „muss ... aufstehen“.',
    'غدًا اكتب أربع جمل: واحدة مع aufstehen، وأخرى مع anrufen، وثالثة مع einkaufen، ورابعة مع muss ... aufstehen.',
    {
      writing: {
        zeigt: 'Trennbare Verben im Hauptsatz und nach muss',
        erklaerung: 'اكتب ست جمل: جملتين مع aufstehen، وجملة مع anrufen، وأخرى مع einkaufen، وخامسة مع aufräumen، وسادسة مع muss وaufstehen المتصل.',
        prompt: 'اكتب ست جمل صحيحة بالأفعال المنفصلة، ومنها جملة مصدر بعد muss.',
        promptDe: 'Ich stehe um sieben auf. · Um acht stehe ich auf. · Du rufst mich an. · Wir kaufen im Supermarkt ein. · Ich räume mein Zimmer auf. · Ich muss um sieben aufstehen.',
        points: ['aufstehen مع الفاعل أولًا', 'aufstehen مع الوقت أولًا', 'anrufen مع du', 'einkaufen مع wir', 'aufräumen مع ich', 'المصدر aufstehen متصلًا بعد muss'],
        minWords: 28,
        frage: 'اكتب ست جمل بالأفعال المنفصلة.',
        familie: 'wortstellung',
        hinweise: ['في الجملة الرئيسية ضع الفعل المصرف في الموضع الثاني والبادئة في النهاية.', 'بعد muss ضع المصدر المتصل مثل aufstehen في نهاية الجملة.']
      },
      imitateNearMiss: 'aufstehe',
      transformHint: 'مع du نقول rufst، ويأتي mich قبل البادئة an في النهاية.',
      orderAr: 'رتّب جملة تبدأ بالوقت: الفعل المصرف ثانيًا والبادئة في النهاية.',
      orderHints: ['ابدأ بـUm acht، ثم ضع stehe مباشرةً.', 'ضع ich بعد الفعل المصرف وauf في النهاية.'],
      orderSentence: 'Um acht stehe ich auf.',
      orderRightBracket: 'auf.',
      checkOrderSentence: 'Du rufst mich an.',
      checkOrderRightBracket: 'an.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة صحيحة.',
      speakAr: 'سجّل عشرين ثانية: قل جملة مع aufstehen، وأخرى مع anrufen، وثالثة مع einkaufen، ثم جملة مع muss وaufstehen المتصل.',
      summaryDe: 'Hauptsatz: Ich stehe auf. · Du rufst mich an. · Wir kaufen ein. · nach muss: Ich muss aufstehen.',
      summaryAr: 'في الجملة الرئيسية يتصرف الجزء الفعلي ويأتي في الموضع الثاني، وتذهب البادئة إلى النهاية. بعد muss يبقى الفعل المنفصل في صيغة المصدر متصلًا: aufstehen.',
      summaryRecap: 'المصرف ثانيًا والبادئة أخيرًا'
    }),

  U('a1-u2-l3', 'A1', 'الساعة', 'Uhrzeit', 'lexik-kollokation',
    'Am Ende nennst du 3:00, 3:15, 3:30 und 3:45 auf Deutsch, erfragst den Kursbeginn und antwortest mit einer Uhrzeit.',
    'في النهاية تقول 3:00 و3:15 و3:30 و3:45 بالألمانية، وتسأل عن وقت بدء الدورة وتجيب بوقت.',
    [
      ['Es ist drei Uhr.', 'للساعة التامة نضع العدد قبل Uhr', '3:00 = drei Uhr؛ أما Stunde فتدل على مدة', 'Es ist drei Stunde.', 'لوقت الساعة نقول drei Uhr؛ zwei Stunden مثلًا مدة'],
      ['Es ist Viertel nach drei.', '3:15 هي Viertel nach drei', 'Viertel يأتي قبل nach، ثم تأتي الساعة الحالية', 'Es ist drei nach Viertel.', 'الترتيب هو Viertel nach drei'],
      ['Es ist halb vier.', '3:30 هي halb vier لأننا نذكر الساعة القادمة', 'بعد halb نذكر الساعة القادمة: halb vier = 3:30', 'Es ist halb nach vier.', 'في قراءة الوقت نقول halb vier بلا nach'],
      ['Um wie viel Uhr beginnt der Kurs?', 'نسأل عن وقت الموعد بعبارة Um wie viel Uhr', 'عبارة السؤال كاملةً أولًا، ثم الفعل المصرف beginnt، ثم الفاعل', 'Wie viel Uhr beginnt der Kurs?', 'عند السؤال عن وقت الموعد نحتاج Um في البداية']
    ],
    [
      ['Es ist drei Uhr.', 'الساعة الثالثة', 'Es ist drei Stunde.', 'لوقت الساعة نقول Uhr، لا Stunde', 'Uhr'],
      ['Es ist Viertel nach drei.', 'الثالثة والربع', 'Es ist drei nach Viertel.', 'الترتيب هو Viertel nach drei', 'Viertel'],
      ['Es ist halb vier.', 'الثالثة والنصف', 'Es ist halb nach vier.', 'في قراءة الوقت نقول halb vier بلا nach', 'halb'],
      ['Um wie viel Uhr beginnt der Kurs?', 'في أي ساعة تبدأ الدورة؟', 'Wie viel Uhr beginnt der Kurs?', 'عند السؤال عن وقت الموعد نبدأ بـUm wie viel Uhr', 'Uhr']
    ],
    'Es ist drei Uhr.',
    'Es ist halb vier.',
    'Sage morgen vier Uhrzeiten laut und frage: „Um wie viel Uhr beginnt der Kurs?“',
    'غدًا قل أربع صيغ للوقت بصوت عالٍ، ثم اسأل: Um wie viel Uhr beginnt der Kurs؟',
    {
      factFamilies: ['lexik-kollokation', 'lexik-kollokation', 'lexik-kollokation', 'präposition'],
      writing: {
        zeigt: 'Uhrzeiten und ein Termin',
        erklaerung: 'اكتب ست جمل: أربعًا للأوقات 3:00 و3:15 و3:30 و3:45، ثم سؤالًا عن بداية الدورة وجوابًا بوقت الساعة.',
        prompt: 'اكتب الأوقات الأربعة، ثم سؤال الموعد وجوابه.',
        promptDe: 'Es ist drei Uhr. · Es ist Viertel nach drei. · Es ist halb vier. · Es ist Viertel vor vier. · Um wie viel Uhr beginnt der Kurs? · Der Kurs beginnt um acht Uhr.',
        points: ['3:00 مع Uhr', '3:15 مع Viertel nach', '3:30 مع halb والساعة القادمة', '3:45 مع Viertel vor', 'سؤال Um wie viel Uhr', 'جواب الموعد مع um'],
        minWords: 28,
        frage: 'اكتب أربع صيغ للوقت وسؤال موعد وجوابه.',
        familie: 'lexik-kollokation',
        hinweise: ['اكتب جملة كاملة لكل وقت.', 'في سؤال الموعد ابدأ بـUm wie viel Uhr.']
      },
      imitateNearMiss: 'Stunde',
      transformHint: 'لـ3:30 نقول halb vier لأن vier هي الساعة القادمة.',
      orderAr: 'رتّب سؤال الموعد: عبارة Um wie viel Uhr أولًا، ثم الفعل المصرف beginnt، ثم الفاعل.',
      orderHints: ['ابدأ بعبارة Um wie viel Uhr كاملةً.', 'ضع beginnt بعدها مباشرةً، ثم der Kurs.'],
      orderSentence: 'Um wie viel Uhr beginnt der Kurs?',
      checkOrderSentence: 'Es ist Viertel nach drei.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة وقت صحيحة.',
      speakAr: 'سجّل عشرين ثانية: قل 3:00 و3:15 و3:30 و3:45 بالألمانية، ثم اسأل عن بداية الدورة وأجب بوقت.',
      summaryDe: '3:00: drei Uhr · 3:15: Viertel nach drei · 3:30: halb vier · 3:45: Viertel vor vier · Termin: um acht Uhr',
      summaryAr: 'الساعة التامة مع Uhr، والربع بعد مع Viertel nach، والنصف مع الساعة القادمة، والربع قبل مع Viertel vor. نسأل عن الموعد بـUm wie viel Uhr ونجيب بـum.',
      summaryRecap: 'Uhr nach halb vor um'
    }),

  U('a1-u2-l4', 'A1', 'حروف الجر الزمنية', 'Temporale Präpositionen', 'präposition',
    'Am Ende verwendest du um acht Uhr, am Montag, am Abend, im Mai und im Sommer in vollständigen Sätzen.',
    'في النهاية تستعمل um acht Uhr وam Montag وam Abend وim Mai وim Sommer في جمل ألمانية كاملة.',
    [
      ['Der Kurs beginnt um acht Uhr.', 'وقت الساعة المحدد يأتي مع um', 'مع وقت الساعة المحدد نقول um acht Uhr', 'Der Kurs beginnt am acht Uhr.', 'مع الساعة الثامنة نقول um acht Uhr، لا am acht Uhr'],
      ['Der Kurs beginnt am Montag.', 'يوم الأسبوع يأتي مع am', 'مع اسم يوم الأسبوع نقول am Montag', 'Der Kurs beginnt im Montag.', 'مع Montag نقول am، لا im'],
      ['Der Kurs beginnt im Mai.', 'اسم الشهر يأتي مع im', 'مع اسم الشهر نقول im Mai', 'Der Kurs beginnt am Mai.', 'مع Mai نقول im، لا am'],
      ['Am Abend lerne ich Deutsch.', 'جزء اليوم Abend يأتي مع am', 'نقول am Abend في هذا التعبير الزمني', 'Im Abend lerne ich Deutsch.', 'نقول am Abend، لا im Abend']
    ],
    [
      ['Der Kurs beginnt um acht Uhr.', 'تبدأ الدورة في الساعة الثامنة', 'Der Kurs beginnt am acht Uhr.', 'وقت الساعة المحدد يأتي مع um', 'um'],
      ['Der Kurs beginnt am Montag.', 'تبدأ الدورة يوم الاثنين', 'Der Kurs beginnt im Montag.', 'يوم الأسبوع يأتي مع am', 'am'],
      ['Der Kurs beginnt im Mai.', 'تبدأ الدورة في مايو', 'Der Kurs beginnt am Mai.', 'اسم الشهر يأتي مع im', 'im'],
      ['Am Abend lerne ich Deutsch.', 'أدرس الألمانية مساءً', 'Im Abend lerne ich Deutsch.', 'نقول am Abend', 'Abend']
    ],
    'Der Kurs beginnt am Montag um acht Uhr.',
    'Im Mai beginnt der Kurs.',
    'Schreibe morgen fünf Sätze mit um acht Uhr, am Montag, am Abend, im Mai und im Sommer.',
    'غدًا اكتب خمس جمل تستعمل فيها um acht Uhr وam Montag وam Abend وim Mai وim Sommer.',
    {
      writing: {
        zeigt: 'Fünf Zeitangaben',
        erklaerung: 'اكتب خمس جمل كاملة: واحدة لوقت الساعة، وواحدة ليوم الأسبوع، وواحدة للمساء، وواحدة للشهر، وواحدة للفصل.',
        prompt: 'اكتب خمس جمل كاملة بحروف الجر الزمنية المطلوبة.',
        promptDe: 'Der Kurs beginnt um acht Uhr. · Der Kurs beginnt am Montag. · Am Abend lerne ich Deutsch. · Der Kurs beginnt im Mai. · Im Sommer ist es warm.',
        points: ['um مع وقت الساعة', 'am مع يوم الأسبوع', 'am مع Abend', 'im مع الشهر', 'im مع الفصل'],
        minWords: 24,
        frage: 'اكتب خمس جمل: للساعة واليوم والمساء والشهر والفصل.',
        familie: 'präposition',
        hinweise: ['اكتب جملة ألمانية كاملة لكل تعبير زمني.', 'لا تبدّل um وam وim بين السياقات الخمسة.']
      },
      imitateNearMiss: 'am',
      transformHint: 'مع اسم الشهر نقول im Mai.',
      orderAr: 'رتّب الجملة: عبارة Am Montag في الحقل الأول، ثم الفعل المصرف beginnt، ثم الفاعل وبقية الوقت.',
      orderHints: ['ابدأ بعبارة Am Montag كاملةً.', 'ضع beginnt بعدها مباشرةً، ثم der Kurs وum acht Uhr.'],
      orderSentence: 'Am Montag beginnt der Kurs um acht Uhr.',
      checkOrderSentence: 'Im Sommer ist es warm.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة زمنية صحيحة.',
      speakAr: 'سجّل عشرين ثانية: قل خمس جمل تستعمل um acht Uhr وam Montag وam Abend وim Mai وim Sommer.',
      summaryDe: 'um acht Uhr · am Montag · am Abend · im Mai · im Sommer',
      summaryAr: 'نستعمل um مع وقت الساعة، وam مع يوم الأسبوع وAbend، وim مع الشهر والفصل.',
      summaryRecap: 'Uhr Montag Abend Mai Sommer'
    }),

  U('a1-u2-l5', 'A1', 'حروف الجر المكانية', 'Lokale Präpositionen', 'präposition',
    'Am Ende verwendest du fünf Ortsangaben in vollständigen Sätzen: in der Stadt, an der Wand, auf dem Tisch, neben der Bank und neben dem Bett.',
    'في النهاية تستعمل خمس عبارات مكانية في جمل كاملة: in der Stadt وan der Wand وauf dem Tisch وneben der Bank وneben dem Bett.',
    [
      ['Ich wohne in der Stadt.', 'نصف مكان السكن بـin der Stadt', 'مع wohnen ووصف المكان الساكن نقول in der Stadt', 'Ich wohne in die Stadt.', 'مع wohnen نقول in der Stadt، لا in die Stadt'],
      ['Das Bild hängt an der Wand.', 'الصورة المعلّقة على سطح الجدار تأتي مع an der Wand', 'مع hängen ووصف الموضع الساكن نقول an der Wand', 'Das Bild hängt an die Wand.', 'مع حالة الصورة المعلّقة نقول an der Wand، لا an die Wand'],
      ['Das Buch liegt auf dem Tisch.', 'الكتاب الموجود على سطح الطاولة يأتي مع auf dem Tisch', 'مع liegen ووصف الموضع الساكن نقول auf dem Tisch', 'Das Buch liegt auf den Tisch.', 'مع liegen نقول auf dem Tisch، لا auf den Tisch'],
      ['Die Apotheke ist neben der Bank.', 'موقع الصيدلية بجانب المصرف يأتي مع neben der Bank', 'مع sein ووصف الموضع الساكن نقول neben der Bank', 'Die Apotheke ist neben die Bank.', 'مع موقع الصيدلية نقول neben der Bank، لا neben die Bank']
    ],
    [
      ['Ich wohne in der Stadt.', 'أسكن في المدينة', 'Ich wohne in die Stadt.', 'مع wohnen نقول in der Stadt', 'in'],
      ['Das Bild hängt an der Wand.', 'الصورة معلّقة على الجدار', 'Das Bild hängt an die Wand.', 'مع الصورة المعلّقة نقول an der Wand', 'an'],
      ['Das Buch liegt auf dem Tisch.', 'الكتاب موجود على الطاولة', 'Das Buch liegt auf den Tisch.', 'مع liegen نقول auf dem Tisch', 'auf'],
      ['Die Apotheke ist neben der Bank.', 'الصيدلية بجانب المصرف', 'Die Apotheke ist neben die Bank.', 'مع الموضع الساكن نقول neben der Bank', 'neben']
    ],
    'Das Buch liegt auf dem Tisch.',
    'Das Bild hängt an der Wand.',
    'Schreibe morgen je einen Satz mit „in der Stadt“, „an der Wand“, „auf dem Tisch“, „neben der Bank“ und „neben dem Bett“.',
    'غدًا اكتب جملة واحدة لكل من in der Stadt وan der Wand وauf dem Tisch وneben der Bank وneben dem Bett.',
    {
      writing: {
        zeigt: 'Fünf Ortsangaben',
        erklaerung: 'اكتب خمس جمل كاملة: مكان السكن، وصورة على الجدار، وكتابًا على الطاولة، وصيدلية بجانب المصرف، ومصباحًا بجانب السرير.',
        prompt: 'اكتب خمس جمل تصف مواضع ساكنة بحروف الجر والأدوات المطلوبة.',
        promptDe: 'Ich wohne in der Stadt. · Das Bild hängt an der Wand. · Das Buch liegt auf dem Tisch. · Die Apotheke ist neben der Bank. · Die Lampe steht neben dem Bett.',
        points: ['in der Stadt', 'an der Wand', 'auf dem Tisch', 'neben der Bank', 'neben dem Bett'],
        minWords: 27,
        frage: 'اكتب خمس جمل للمكان باستعمال العبارات الخمس.',
        familie: 'kasus',
        hinweise: ['اكتب جملة ألمانية كاملة لكل موضع.', 'هذه الجمل تصف مكانًا ساكنًا؛ راقب der وdem.']
      },
      imitateNearMiss: 'auf',
      transformHint: 'مع الصورة المعلّقة نقول an der Wand.',
      orderAr: 'رتّب الجملة: عبارة Auf dem Tisch في الحقل الأول، ثم الفعل المصرف liegt، ثم الفاعل.',
      orderHints: ['ابدأ بعبارة Auf dem Tisch كاملةً.', 'ضع liegt بعدها مباشرةً، ثم das Buch.'],
      orderSentence: 'Auf dem Tisch liegt das Buch.',
      checkOrderSentence: 'An der Wand hängt das Bild.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة مكان صحيحة.',
      speakAr: 'سجّل عشرين ثانية: قل خمس جمل تستعمل in der Stadt وan der Wand وauf dem Tisch وneben der Bank وneben dem Bett.',
      summaryDe: 'in der Stadt · an der Wand · auf dem Tisch · neben der Bank · neben dem Bett',
      summaryAr: 'في جمل الموقع الساكن هنا نستعمل der مع Stadt وWand وBank، وdem مع Tisch وBett.',
      summaryRecap: 'Stadt Wand Tisch Bank Bett'
    }),

  U('a1-u2-l6', 'A1', 'الجمع', 'Plural', 'plural',
    'Am Ende verwendest du fünf Pluralmuster in vollständigen Sätzen: Tage, Kinder, Mütter, Autos und Tomaten.',
    'في النهاية تستعمل خمسة أنماط للجمع في جمل كاملة: Tage وKinder وMütter وAutos وTomaten.',
    [
      ['Der Kurs dauert zwei Tage.', 'جمع Tag هو Tage بالنهاية -e.', 'احفظ الزوج der Tag وdie Tage', 'Der Kurs dauert zwei Tags.', 'بعد zwei نقول Tage، لا Tags'],
      ['Zwei Kinder spielen im Garten.', 'جمع Kind هو Kinder بالنهاية -er.', 'احفظ الزوج das Kind وdie Kinder', 'Zwei Kinds spielen im Garten.', 'بعد zwei نقول Kinder، لا Kinds'],
      ['Zwei Mütter warten vor der Schule.', 'جمع Mutter هو Mütter بالأوملاوت ومن دون نهاية إضافية.', 'احفظ الزوج die Mutter وdie Mütter', 'Zwei Mutters warten vor der Schule.', 'بعد zwei نقول Mütter، لا Mutters'],
      ['Vor dem Haus stehen zwei Autos.', 'جمع Auto هو Autos بالنهاية -s.', 'احفظ الزوج das Auto وdie Autos', 'Vor dem Haus stehen zwei Auten.', 'بعد zwei نقول Autos، لا Auten']
    ],
    [
      ['Der Kurs dauert zwei Tage.', 'تستغرق الدورة يومين', 'Der Kurs dauert zwei Tags.', 'جمع Tag هو Tage.', 'Tage'],
      ['Zwei Kinder spielen im Garten.', 'يلعب طفلان في الحديقة', 'Zwei Kinds spielen im Garten.', 'جمع Kind هو Kinder.', 'Kinder'],
      ['Zwei Mütter warten vor der Schule.', 'تنتظر أمّان أمام المدرسة', 'Zwei Mutters warten vor der Schule.', 'جمع Mutter هو Mütter.', 'Mütter'],
      ['Vor dem Haus stehen zwei Autos.', 'تقف سيارتان أمام المنزل', 'Vor dem Haus stehen zwei Auten.', 'جمع Auto هو Autos.', 'Autos']
    ],
    'Zwei Kinder spielen im Garten.',
    'Zwei Mütter warten vor der Schule.',
    'Schreibe morgen je einen Satz mit Tage, Kinder, Mütter, Autos und Tomaten.',
    'غدًا اكتب جملة واحدة لكل من Tage وKinder وMütter وAutos وTomaten.',
    {
      writing: {
        zeigt: 'Fünf Pluralmuster',
        erklaerung: 'اكتب خمس جمل كاملة تستعمل Tage وKinder وMütter وAutos وTomaten.',
        prompt: 'اكتب خمس جمل، وفي كل جملة صيغة جمع مستهدفة واحدة على الأقل.',
        promptDe: 'Der Kurs dauert zwei Tage. · Zwei Kinder spielen im Garten. · Zwei Mütter warten vor der Schule. · Vor dem Haus stehen zwei Autos. · Zwei Tomaten liegen auf dem Tisch.',
        points: ['Tage', 'Kinder', 'Mütter', 'Autos', 'Tomaten'],
        minWords: 28,
        frage: 'اكتب خمس جمل بصيغ الجمع الخمس.',
        familie: 'plural',
        hinweise: ['اكتب جملة ألمانية كاملة لكل جمع.', 'احفظ المفرد والجمع زوجًا واحدًا؛ لا تخمّن النهاية من جنس الاسم وحده.']
      },
      imitateNearMiss: 'Tags',
      transformHint: 'بعد zwei نقول Mütter، لا Mutters.',
      orderAr: 'رتّب الجملة: تبدأ عبارة Vor dem Haus في الحقل الأول، ثم stehen، ثم zwei Autos.',
      orderHints: ['ابدأ بعبارة Vor dem Haus كاملةً.', 'ضع stehen بعدها مباشرةً، ثم zwei Autos.'],
      orderSentence: 'Vor dem Haus stehen zwei Autos.',
      checkOrderSentence: 'Zwei Kinder bleiben zwei Tage in der Stadt.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة جمع صحيحة.',
      speakAr: 'سجّل عشرين ثانية: قل خمس جمل تستعمل Tage وKinder وMütter وAutos وTomaten.',
      summaryDe: 'Plurale: der Tag → die Tage · das Kind → die Kinder · die Mutter → die Mütter · das Auto → die Autos · die Tomate → die Tomaten',
      summaryAr: 'نرى هنا -e و-er و-n/-en و-s والجمع بلا نهاية إضافية؛ احفظ كل مفرد مع جمعه.',
      summaryRecap: 'Tage Kinder Mütter Autos Tomaten'
    }),

  U('a1-u3-l1', 'A1', 'الطعام', 'Essen', 'lexik-kollokation',
    'Am Ende verwendest du im Restaurant fünf vollständige Äußerungen: Ich möchte bestellen, die Speisekarte, den Salat, einen Kaffee ohne Zucker und die Rechnung.',
    'في النهاية تستعمل خمس عبارات كاملة في المطعم: Ich möchte bestellen وdie Speisekarte وden Salat وeinen Kaffee ohne Zucker وdie Rechnung.',
    [
      ['Ich möchte bestellen.', 'نستعمل möchte مع المصدر bestellen لبدء الطلب بأدب.', 'بعد möchte يأتي المصدر bestellen', 'Ich möchte bestelle.', 'بعد möchte نقول bestellen، لا bestelle'],
      ['Ich möchte die Speisekarte, bitte.', 'نطلب قائمة الطعام بعبارة كاملة مع die Speisekarte.', 'Speisekarte مؤنث وتبقى die هنا', 'Ich möchte der Speisekarte, bitte.', 'نقول die Speisekarte، لا der Speisekarte'],
      ['Ich nehme den Salat.', 'عند اختيار السلطة نقول den Salat لأنه مذكر منصوب.', 'Salat مذكر ويأخذ den هنا', 'Ich nehme der Salat.', 'بعد nehmen نقول den Salat، لا der Salat'],
      ['Ich möchte einen Kaffee ohne Zucker, bitte.', 'نستعمل ohne Zucker لطلب القهوة من دون سكر.', 'قل einen Kaffee ohne Zucker', 'Ich möchte einen Kaffee nicht Zucker, bitte.', 'نقول ohne Zucker، لا nicht Zucker']
    ],
    [
      ['Ich möchte bestellen.', 'أود أن أطلب', 'Ich möchte bestelle.', 'بعد möchte يأتي المصدر bestellen.', 'möchte'],
      ['Ich möchte die Speisekarte, bitte.', 'أود قائمة الطعام من فضلك', 'Ich möchte der Speisekarte, bitte.', 'نقول die Speisekarte.', 'Speisekarte'],
      ['Ich nehme den Salat.', 'سآخذ السلطة', 'Ich nehme der Salat.', 'نقول den Salat في هذه الجملة.', 'den'],
      ['Ich möchte einen Kaffee ohne Zucker, bitte.', 'أود قهوة من دون سكر من فضلك', 'Ich möchte einen Kaffee nicht Zucker, bitte.', 'نقول ohne Zucker.', 'ohne']
    ],
    'Ich möchte die Speisekarte, bitte.',
    'Ich möchte einen Kaffee ohne Zucker, bitte.',
    'Schreibe morgen fünf Sätze für eine Bestellung im Restaurant. Es geht um Essen und Getränke: Verwende bestellen, Speisekarte, Salat, Kaffee ohne Zucker und Rechnung.',
    'غدًا اكتب خمس جمل لطلب في المطعم عن الطعام والمشروبات، واستعمل bestellen وSpeisekarte وSalat وKaffee ohne Zucker وRechnung.',
    {
      writing: {
        zeigt: 'Fünf Äußerungen im Restaurant',
        erklaerung: 'اكتب خمس عبارات كاملة: بدء الطلب، وطلب القائمة، واختيار السلطة، وطلب قهوة بلا سكر، وطلب الحساب.',
        prompt: 'اكتب خمس عبارات ألمانية كاملة تستعمل الأطر الخمسة المستهدفة.',
        promptDe: 'Ich möchte bestellen. · Ich möchte die Speisekarte, bitte. · Ich nehme den Salat. · Ich möchte einen Kaffee ohne Zucker, bitte. · Ich möchte die Rechnung, bitte.',
        points: ['bestellen', 'Speisekarte', 'den Salat', 'Kaffee ohne Zucker', 'Rechnung'],
        minWords: 24,
        frage: 'اكتب العبارات الخمس في سياق مطعم.',
        familie: 'lexik-kollokation',
        hinweise: ['اكتب عبارة ألمانية كاملة لكل موقف.', 'استعمل bitte في الطلبات المناسبة.']
      },
      imitateNearMiss: 'bestelle',
      transformHint: 'للقهوة من دون سكر نقول ohne Zucker.',
      orderAr: 'رتّب الجملة: Ich ثم nehme ثم den Salat.',
      orderHints: ['ابدأ بـIch.', 'ضع nehme في الموضع الثاني، ثم den Salat.'],
      orderSentence: 'Ich nehme den Salat.',
      checkOrderSentence: 'Ich möchte die Rechnung, bitte.',
      orderPromptAr: 'رتّب الكلمات لتكوين طلب صحيح في المطعم.',
      speakAr: 'سجّل عشرين ثانية: قل العبارات الخمس مع bestellen وSpeisekarte وden Salat وKaffee ohne Zucker وRechnung.',
      summaryDe: 'Ich möchte bestellen. · Ich möchte die Speisekarte, bitte. · Ich nehme den Salat. · Ich möchte einen Kaffee ohne Zucker, bitte. · Ich möchte die Rechnung, bitte.',
      summaryAr: 'ابدأ الطلب بـmöchte، واستعمل den مع Salat، وohne Zucker، وbitte في الطلبات المناسبة.',
      summaryRecap: 'bestellen Speisekarte Salat Kaffee Rechnung'
    }),

  U('a1-u3-l2', 'A1', 'التسوق', 'Einkaufen', 'lexik-kollokation',
    'Am Ende verwendest du beim Einkaufen fünf vollständige Äußerungen: „Was kostet das?“ · „Das macht zehn Euro.“ · „Das ist mir zu teuer.“ · „Haben Sie das in Größe M?“ · „Darf ich das anprobieren?“',
    'في النهاية تستعمل عند التسوق خمس عبارات كاملة: Was kostet das? وDas macht zehn Euro. وDas ist mir zu teuer. وHaben Sie das in Größe M? وDarf ich das anprobieren?',
    [
      ['Was kostet das?', 'نسأل عن السعر بالفعل kostet، والفاعل das مفرد.', 'مع das نقول kostet', 'Was kosten das?', 'نقول Was kostet das، لا Was kosten das'],
      ['Das macht zehn Euro.', 'عند الصندوق يمكن أن يذكر البائع المجموع بـmacht.', 'الفاعل Das مفرد، لذلك نقول macht', 'Das machen zehn Euro.', 'نقول Das macht، لا Das machen'],
      ['Haben Sie das in Größe M?', 'نسأل عن المقاس بعبارة in Größe M.', 'نستعمل المفرد Größe قبل رمز المقاس', 'Haben Sie das in Größen M?', 'نقول in Größe M، لا in Größen M'],
      ['Das ist mir zu teuer.', 'نستعمل mir مع zu teuer لقول إن السعر مرتفع بالنسبة إليّ.', 'بعد هذا الإطار نقول mir لا mich', 'Das ist mich zu teuer.', 'نقول mir zu teuer، لا mich zu teuer']
    ],
    [
      ['Was kostet das?', 'بكم هذا؟', 'Was kosten das?', 'مع das المفرد نقول kostet.', 'kostet'],
      ['Das macht zehn Euro.', 'المجموع عشرة يورو', 'Das machen zehn Euro.', 'مع Das المفرد نقول macht.', 'macht'],
      ['Haben Sie das in Größe M?', 'هل لديكم هذا بمقاس M؟', 'Haben Sie das in Größen M?', 'نقول in Größe M.', 'Größe'],
      ['Das ist mir zu teuer.', 'هذا غالٍ جدًا بالنسبة إليّ', 'Das ist mich zu teuer.', 'نقول mir في هذا الإطار.', 'mir']
    ],
    'Was kostet das?',
    'Darf ich das anprobieren?',
    'Schreibe morgen fünf Sätze für einen Einkauf in einem Geschäft mit kostet, zehn Euro, zu teuer, Größe M und anprobieren.',
    'غدًا اكتب خمس جمل لموقف تسوق في متجر مع kostet وzehn Euro وzu teuer وGröße M وanprobieren.',
    {
      writing: {
        zeigt: 'Fünf Äußerungen beim Einkaufen',
        erklaerung: 'اكتب خمس عبارات كاملة: اسأل عن السعر، واذكر المجموع، وقل إن السعر غالٍ، واسأل عن مقاس M، واطلب تجربة القطعة.',
        prompt: 'اكتب خمس عبارات ألمانية كاملة لموقف تسوق واحد.',
        promptDe: 'Was kostet das? · Das macht zehn Euro. · Das ist mir zu teuer. · Haben Sie das in Größe M? · Darf ich das anprobieren?',
        points: ['kostet', 'zehn Euro', 'mir zu teuer', 'Größe M', 'anprobieren'],
        minWords: 23,
        frage: 'اكتب العبارات الخمس في سياق تسوق.',
        familie: 'lexik-kollokation',
        hinweise: ['اكتب عبارة ألمانية كاملة لكل موقف.', 'استعمل mir مع zu teuer وGröße قبل M.']
      },
      imitateNearMiss: 'kosten',
      transformHint: 'بعد Darf ich يأتي المصدر anprobieren.',
      orderAr: 'رتّب السؤال: Was ثم kostet ثم das.',
      orderHints: ['ابدأ بـWas.', 'ضع kostet بعد Was، ثم das.'],
      orderSentence: 'Was kostet das?',
      checkOrderSentence: 'Darf ich das anprobieren?',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة واحدة صحيحة في المتجر.',
      speakAr: 'سجّل عشرين ثانية: قل العبارات الخمس مع kostet وzehn Euro وmir zu teuer وGröße M وanprobieren.',
      summaryDe: 'Was kostet das? · Das macht zehn Euro. · Das ist mir zu teuer. · Haben Sie das in Größe M? · Darf ich das anprobieren?',
      summaryAr: 'اسأل بـWas kostet، واذكر المبلغ، واستعمل mir zu teuer وin Größe M، واطلب التجربة بـanprobieren.',
      summaryRecap: 'kostet Euro teuer Größe anprobieren'
    }),

  U('a1-u3-l3', 'A1', 'الروتين اليومي', 'Tagesablauf', 'wortstellung',
    'Am Ende erzählst du deinen Tagesablauf mit fünf vollständigen Sätzen: „Zuerst stehe ich um sieben Uhr auf.“ · „Dann putze ich die Zähne.“ · „Danach fahre ich mit der U-Bahn zur Arbeit.“ · „Nach der Arbeit ruhe ich mich aus.“ · „Zum Schluss gehe ich schlafen.“',
    'في النهاية تحكي روتينك اليومي بخمس جمل كاملة: Zuerst stehe ich um sieben Uhr auf. وDann putze ich die Zähne. وDanach fahre ich mit der U-Bahn zur Arbeit. وNach der Arbeit ruhe ich mich aus. وZum Schluss gehe ich schlafen.',
    [
      ['Zuerst stehe ich um sieben Uhr auf.', 'تأتي Zuerst في الموقع الأول، والفعل المصرف stehe ثانيًا، والبادئة auf في النهاية.', 'بعد Zuerst يأتي الفعل قبل ich', 'Zuerst ich stehe um sieben Uhr auf.', 'نقول Zuerst stehe ich، لا Zuerst ich stehe'],
      ['Dann putze ich die Zähne.', 'تملأ Dann الموقع الأول؛ لذلك يأتي الفعل putze قبل الفاعل ich.', 'بعد Dann يبقى الفعل المصرف في الموقع الثاني', 'Dann ich putze die Zähne.', 'نقول Dann putze ich، لا Dann ich putze'],
      ['Zum Schluss gehe ich schlafen.', 'بعد Zum Schluss يأتي الفعل المصرف gehe ثم الفاعل ich، ويأتي schlafen بلا zu.', 'نقول gehe ich schlafen', 'Zum Schluss ich gehe schlafen.', 'نقول Zum Schluss gehe ich، لا Zum Schluss ich gehe'],
      ['Danach fahre ich mit der U-Bahn zur Arbeit.', 'بعد Danach يأتي الفعل المصرف fahre قبل ich، ومع mit نستعمل der U-Bahn.', 'بعد Danach يأتي الفعل قبل ich', 'Danach ich fahre mit der U-Bahn zur Arbeit.', 'نقول Danach fahre ich، لا Danach ich fahre']
    ],
    [
      ['Zuerst stehe ich um sieben Uhr auf.', 'أولًا أستيقظ في الساعة السابعة', 'Zuerst ich stehe um sieben Uhr auf.', 'بعد Zuerst يأتي الفعل قبل ich، وتأتي auf في النهاية.', 'Zuerst'],
      ['Dann putze ich die Zähne.', 'ثم أنظف أسناني', 'Dann ich putze die Zähne.', 'بعد Dann نقول putze ich.', 'putze'],
      ['Zum Schluss gehe ich schlafen.', 'في النهاية أذهب للنوم', 'Zum Schluss ich gehe schlafen.', 'بعد Zum Schluss نقول gehe ich schlafen.', 'Schluss'],
      ['Danach fahre ich mit der U-Bahn zur Arbeit.', 'بعد ذلك أذهب إلى العمل بالمترو', 'Danach ich fahre mit der U-Bahn zur Arbeit.', 'بعد Danach نقول fahre ich، ومع mit نقول der U-Bahn.', 'Danach']
    ],
    'Zuerst stehe ich um sieben Uhr auf. Dann putze ich die Zähne.',
    'Danach fahre ich mit der U-Bahn zur Arbeit.',
    'Schreibe morgen fünf Sätze über den Ablauf deines Tages mit Zuerst, Dann, Danach, Nach der Arbeit und Zum Schluss.',
    'غدًا اكتب خمس جمل عن سير يومك مستعملًا Zuerst وDann وDanach وNach der Arbeit وZum Schluss.',
    {
      writing: {
        zeigt: 'Fünf Sätze vom Tagesbeginn bis zum Tagesende',
        erklaerung: 'اكتب خمس جمل كاملة ومرتبة: الاستيقاظ، وتنظيف الأسنان، والذهاب إلى العمل، والراحة بعد العمل، ثم النوم.',
        prompt: 'اكتب خمس جمل ألمانية كاملة عن روتين يومي واحد.',
        promptDe: 'Zuerst stehe ich um sieben Uhr auf. · Dann putze ich die Zähne. · Danach fahre ich mit der U-Bahn zur Arbeit. · Nach der Arbeit ruhe ich mich aus. · Zum Schluss gehe ich schlafen.',
        points: ['Zuerst', 'Dann', 'Danach', 'Nach der Arbeit', 'Zum Schluss'],
        minWords: 31,
        frage: 'اكتب الجمل الخمس بترتيب يومي واضح.',
        familie: 'wortstellung',
        hinweise: ['ابدأ كل مرحلة برابطها الزمني.', 'ضع الفعل المصرف مباشرة بعد الرابط، وافصل بادئة الفعل عند الحاجة.']
      },
      imitateNearMiss: 'Zuerste',
      transformHint: 'بعد Danach يأتي الفعل fahre قبل ich، ومع mit نقول der U-Bahn.',
      orderAr: 'رتّب جملة واحدة: Zuerst ثم stehe ثم ich، وضع auf في النهاية.',
      orderHints: ['ابدأ بـZuerst ثم ضع stehe في الموقع الثاني.', 'ضع ich بعد stehe، واترك auf في نهاية الجملة.'],
      orderSentence: 'Zuerst stehe ich um sieben Uhr auf.',
      checkOrderSentence: 'Zum Schluss gehe ich schlafen.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة يومية واحدة صحيحة.',
      speakAr: 'سجّل عشرين ثانية: قل خمس جمل عن يومك مع Zuerst وDann وDanach وNach der Arbeit وZum Schluss.',
      summaryDe: 'Zuerst stehe ich um sieben Uhr auf. · Dann putze ich die Zähne. · Danach fahre ich mit der U-Bahn zur Arbeit. · Nach der Arbeit ruhe ich mich aus. · Zum Schluss gehe ich schlafen.',
      summaryAr: 'رتّب اليوم باستعمال Zuerst وDann وDanach وNach der Arbeit وZum Schluss، وضع الفعل المصرف في الموقع الثاني.',
      summaryRecap: 'Zuerst Dann Danach Arbeit Schluss'
    }),

  U('a1-u3-l4', 'A1', 'الماضي مع haben', 'Perfekt mit haben', 'konjugation',
    'Am Ende bildest du fünf vollständige Sätze im Perfekt mit haben: „Ich habe die Hausaufgabe gemacht.“ · „Ich habe Deutsch gelernt.“ · „Ich habe den Film gesehen.“ · „Ich habe lange telefoniert.“ · „Hast du die Musik gehört?“',
    'في النهاية تكوّن خمس جمل كاملة بصيغة Perfekt مع haben: Ich habe die Hausaufgabe gemacht. وIch habe Deutsch gelernt. وIch habe den Film gesehen. وIch habe lange telefoniert. وHast du die Musik gehört?',
    [
      ['Ich habe die Hausaufgabe gemacht.', 'في جملة Perfekt الخبرية يأتي habe في الموقع الثاني، ويأتي Partizip II gemacht في النهاية.', 'استعمل habe ثم ضع gemacht في النهاية', 'Ich habe die Hausaufgabe machen.', 'نقول habe ... gemacht، لا habe ... machen'],
      ['Ich habe Deutsch gelernt.', 'الفعل المنتظم lernen يصوغ Partizip II هكذا: gelernt.', 'lernen يصبح gelernt', 'Ich habe Deutsch gelernen.', 'نقول gelernt، لا gelernen'],
      ['Ich habe den Film gesehen.', 'الفعل القوي sehen يصوغ Partizip II هكذا: gesehen.', 'احفظ sehen ← gesehen', 'Ich habe den Film geseht.', 'نقول gesehen، لا geseht'],
      ['Ich habe lange telefoniert.', 'الأفعال المنتهية بـ-ieren مثل telefonieren تصوغ Partizip II بلا ge-: telefoniert.', 'telefonieren يصبح telefoniert بلا ge-', 'Ich habe lange getelefoniert.', 'نقول telefoniert، لا getelefoniert']
    ],
    [
      ['Ich habe die Hausaufgabe gemacht.', 'أنجزت الواجب المنزلي', 'Ich habe die Hausaufgabe machen.', 'بعد habe نضع gemacht في النهاية.', 'gemacht'],
      ['Ich habe Deutsch gelernt.', 'تعلمت الألمانية', 'Ich habe Deutsch gelernen.', 'Partizip II من lernen هو gelernt.', 'gelernt'],
      ['Ich habe den Film gesehen.', 'شاهدت الفيلم', 'Ich habe den Film geseht.', 'Partizip II من sehen هو gesehen.', 'gesehen'],
      ['Ich habe lange telefoniert.', 'تحدثت هاتفيًا مدة طويلة', 'Ich habe lange getelefoniert.', 'الفعل المنتهي بـ-ieren يأتي بلا ge-.', 'telefoniert']
    ],
    'Ich habe die Hausaufgabe gemacht.',
    'Hast du die Musik gehört?',
    'Schreibe morgen fünf Perfekt-Sätze mit Hausaufgabe gemacht, Deutsch gelernt, Film gesehen, lange telefoniert und Musik gehört.',
    'غدًا اكتب خمس جمل Perfekt تتضمن Hausaufgabe gemacht وDeutsch gelernt وFilm gesehen وlange telefoniert وMusik gehört.',
    {
      writing: {
        zeigt: 'Fünf vollständige Sätze im Perfekt mit haben',
        erklaerung: 'اكتب خمس جمل كاملة: إنجاز الواجب، وتعلّم الألمانية، ومشاهدة فيلم، ومكالمة طويلة، وسؤالًا عما سمعه المخاطَب.',
        prompt: 'اكتب خمس جمل ألمانية كاملة بصيغة Perfekt مع haben.',
        promptDe: 'Ich habe die Hausaufgabe gemacht. · Ich habe Deutsch gelernt. · Ich habe den Film gesehen. · Ich habe lange telefoniert. · Hast du die Musik gehört?',
        points: ['Hausaufgabe gemacht', 'Deutsch gelernt', 'Film gesehen', 'lange telefoniert', 'Musik gehört'],
        minWords: 25,
        frage: 'اكتب الجمل الخمس بصيغة Perfekt صحيحة.',
        familie: 'konjugation',
        hinweise: ['صرّف haben مع الفاعل.', 'ضع Partizip II في نهاية كل جملة أو سؤال.']
      },
      imitateNearMiss: 'machen',
      transformHint: 'في سؤال نعم/لا يأتي Hast أولًا، ويأتي gehört في النهاية.',
      orderAr: 'رتّب جملة واحدة: Ich ثم habe، وضع gemacht في النهاية.',
      orderHints: ['ابدأ بـIch ثم ضع habe في الموقع الثاني.', 'ضع die Hausaufgabe في الوسط وgemacht في النهاية.'],
      orderSentence: 'Ich habe die Hausaufgabe gemacht.',
      orderRightBracket: 'gemacht.',
      checkOrderSentence: 'Hast du die Musik gehört?',
      checkOrderRightBracket: 'gehört?',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة أو سؤال Perfekt واحد صحيح.',
      speakAr: 'سجّل عشرين ثانية: قل الجمل الخمس مع Hausaufgabe gemacht وDeutsch gelernt وFilm gesehen وlange telefoniert وMusik gehört.',
      summaryDe: 'Ich habe die Hausaufgabe gemacht. · Ich habe Deutsch gelernt. · Ich habe den Film gesehen. · Ich habe lange telefoniert. · Hast du die Musik gehört?',
      summaryAr: 'استعمل haben المصرف، وضع Partizip II في النهاية، واحذف ge- من أفعال -ieren مثل telefoniert.',
      summaryRecap: 'gemacht gelernt gesehen telefoniert gehört'
    }),

  U('a1-u3-l5', 'A1', 'الماضي مع sein', 'Perfekt mit sein', 'konjugation',
    'Am Ende bildest du fünf vollständige Sätze im Perfekt mit sein: „Ich bin nach Hause gegangen.“ · „Ich bin zu Hause geblieben.“ · „Er ist spät gekommen.“ · „Wir sind nach Berlin gefahren.“ · „Was ist passiert?“',
    'في النهاية تكوّن خمس جمل كاملة بصيغة Perfekt مع sein: Ich bin nach Hause gegangen. وIch bin zu Hause geblieben. وEr ist spät gekommen. وWir sind nach Berlin gefahren. وWas ist passiert?',
    [
      ['Ich bin nach Hause gegangen.', 'الفعل gehen يصوغ Perfekt مع sein: bin ... gegangen.', 'استعمل bin مع gegangen', 'Ich habe nach Hause gegangen.', 'نقول bin ... gegangen، لا habe ... gegangen'],
      ['Ich bin zu Hause geblieben.', 'الفعل bleiben يصوغ Perfekt مع sein رغم عدم وجود حركة إلى مكان آخر.', 'احفظ bleiben مع sein', 'Ich habe zu Hause geblieben.', 'نقول bin ... geblieben، لا habe ... geblieben'],
      ['Wir sind nach Berlin gefahren.', 'عندما يدل fahren على الانتقال إلى مكان آخر نصوغ Perfekt هنا مع sein: sind ... gefahren.', 'مع wir نقول sind، ويأتي gefahren في النهاية', 'Wir haben nach Berlin gefahren.', 'في هذه الجملة نقول sind ... gefahren'],
      ['Was ist passiert?', 'الفعل passieren يصوغ Perfekt مع sein: ist passiert.', 'احفظ ist passiert', 'Was hat passiert?', 'نقول Was ist passiert، لا Was hat passiert']
    ],
    [
      ['Ich bin nach Hause gegangen.', 'ذهبت إلى البيت', 'Ich habe nach Hause gegangen.', 'gehen يصوغ Perfekt هنا مع sein.', 'gegangen'],
      ['Ich bin zu Hause geblieben.', 'بقيت في البيت', 'Ich habe zu Hause geblieben.', 'bleiben يصوغ Perfekt مع sein.', 'geblieben'],
      ['Wir sind nach Berlin gefahren.', 'ذهبنا إلى برلين', 'Wir haben nach Berlin gefahren.', 'مع الانتقال إلى برلين نقول sind gefahren.', 'gefahren'],
      ['Was ist passiert?', 'ماذا حدث؟', 'Was hat passiert?', 'passieren يصوغ Perfekt مع sein.', 'passiert']
    ],
    'Ich bin nach Hause gegangen.',
    'Er ist spät gekommen.',
    'Schreibe morgen fünf Perfekt-Sätze mit nach Hause gegangen, zu Hause geblieben, spät gekommen, nach Berlin gefahren und Was ist passiert?',
    'غدًا اكتب خمس جمل Perfekt تتضمن nach Hause gegangen وzu Hause geblieben وspät gekommen وnach Berlin gefahren وWas ist passiert?',
    {
      writing: {
        zeigt: 'Fünf vollständige Sätze im Perfekt mit sein',
        erklaerung: 'اكتب خمس جمل كاملة: الذهاب إلى البيت، والبقاء فيه، والوصول متأخرًا، والذهاب إلى برلين، والسؤال عما حدث.',
        prompt: 'اكتب خمس جمل ألمانية كاملة بصيغة Perfekt مع sein.',
        promptDe: 'Ich bin nach Hause gegangen. · Ich bin zu Hause geblieben. · Er ist spät gekommen. · Wir sind nach Berlin gefahren. · Was ist passiert?',
        points: ['nach Hause gegangen', 'zu Hause geblieben', 'spät gekommen', 'nach Berlin gefahren', 'Was ist passiert'],
        minWords: 25,
        frage: 'اكتب الجمل الخمس بصيغة Perfekt صحيحة.',
        familie: 'konjugation',
        hinweise: ['صرّف sein مع الفاعل.', 'ضع Partizip II في نهاية الجملة أو السؤال.']
      },
      imitateNearMiss: 'gehen',
      transformHint: 'مع er نقول ist، ويأتي gekommen في النهاية.',
      orderAr: 'رتّب جملة واحدة: Ich ثم bin، وضع gegangen في النهاية.',
      orderHints: ['ابدأ بـIch ثم ضع bin في الموقع الثاني.', 'ضع nach Hause في الوسط وgegangen في النهاية.'],
      orderSentence: 'Ich bin nach Hause gegangen.',
      orderRightBracket: 'gegangen.',
      checkOrderSentence: 'Er ist spät gekommen.',
      checkOrderRightBracket: 'gekommen.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة Perfekt واحدة صحيحة.',
      speakAr: 'سجّل عشرين ثانية: قل الجمل الخمس مع nach Hause gegangen وzu Hause geblieben وspät gekommen وnach Berlin gefahren وWas ist passiert?',
      summaryDe: 'Ich bin nach Hause gegangen. · Ich bin zu Hause geblieben. · Er ist spät gekommen. · Wir sind nach Berlin gefahren. · Was ist passiert?',
      summaryAr: 'استعمل sein المصرف مع هذه الأفعال المحددة، وضع Partizip II في النهاية.',
      summaryRecap: 'gegangen geblieben gekommen gefahren passiert'
    }),

  U('a1-u3-l6', 'A1', 'المواعيد', 'Termine', 'lexik-kollokation',
    'Am Ende verwendest du fünf vollständige Äußerungen für Termine: „Ich möchte einen Termin machen.“ · „Passt Ihnen Dienstag um zehn Uhr?“ · „Das passt mir.“ · „Können wir den Termin verschieben?“ · „Das tut mir leid, ich muss den Termin absagen.“',
    'في النهاية تستعمل خمس عبارات كاملة للمواعيد: Ich möchte einen Termin machen. وPasst Ihnen Dienstag um zehn Uhr? وDas passt mir. وKönnen wir den Termin verschieben? وDas tut mir leid, ich muss den Termin absagen.',
    [
      ['Ich möchte einen Termin machen.', 'بعد möchte يأتي المصدر machen في نهاية الجملة.', 'بعد möchte استعمل المصدر machen', 'Ich möchte einen Termin mache.', 'نقول möchte ... machen، لا möchte ... mache'],
      ['Das passt mir.', 'الفعل passen يأخذ الداتيف؛ لذلك نقول mir عند قبول الموعد.', 'مع passen نقول mir', 'Das passt mich.', 'نقول Das passt mir، لا Das passt mich'],
      ['Können wir den Termin verschieben?', 'في سؤال نعم/لا يأتي Können أولًا، ويأتي المصدر verschieben في النهاية.', 'بعد Können نضع wir، ونضع verschieben في النهاية', 'Können wir den Termin verschiebe?', 'نقول können ... verschieben، لا verschiebe'],
      ['Das tut mir leid, ich muss den Termin absagen.', 'بعد muss يأتي المصدر absagen في نهاية الجملة الثانية.', 'بعد muss استعمل المصدر absagen', 'Das tut mir leid, ich muss den Termin absage.', 'نقول muss ... absagen، لا absage']
    ],
    [
      ['Ich möchte einen Termin machen.', 'أريد تحديد موعد', 'Ich möchte einen Termin mache.', 'بعد möchte يأتي المصدر machen.', 'machen'],
      ['Das passt mir.', 'هذا الموعد يناسبني', 'Das passt mich.', 'الفعل passen يأخذ الداتيف mir.', 'mir'],
      ['Können wir den Termin verschieben?', 'هل يمكننا تأجيل الموعد؟', 'Können wir den Termin verschiebe?', 'بعد können يأتي المصدر verschieben.', 'verschieben'],
      ['Das tut mir leid, ich muss den Termin absagen.', 'يؤسفني ذلك، يجب أن ألغي الموعد', 'Das tut mir leid, ich muss den Termin absage.', 'بعد muss يأتي المصدر absagen.', 'absagen']
    ],
    'Ich möchte einen Termin machen.',
    'Passt Ihnen Dienstag um zehn Uhr?',
    'Schreibe morgen fünf Sätze und verwende: einen Termin machen, Passt Ihnen, Das passt mir, den Termin verschieben und den Termin absagen.',
    'غدًا اكتب خمس جمل تتضمن einen Termin machen وPasst Ihnen وDas passt mir وden Termin verschieben وden Termin absagen.',
    {
      writing: {
        zeigt: 'Fünf vollständige Äußerungen für Termine',
        erklaerung: 'اكتب خمس عبارات كاملة: اطلب موعدًا، واسأل إن كان الثلاثاء مناسبًا، واقبل، واطلب التأجيل، ثم اعتذر عن موعد.',
        prompt: 'اكتب خمس عبارات ألمانية كاملة لموقف مواعيد واحد.',
        promptDe: 'Ich möchte einen Termin machen. · Passt Ihnen Dienstag um zehn Uhr? · Das passt mir. · Können wir den Termin verschieben? · Das tut mir leid, ich muss den Termin absagen.',
        points: ['einen Termin machen', 'Passt Ihnen', 'Das passt mir', 'Termin verschieben', 'Termin absagen'],
        minWords: 29,
        frage: 'اكتب العبارات الخمس في سياق مواعيد واضح.',
        familie: 'lexik-kollokation',
        hinweise: ['استعمل الخطاب الرسمي Ihnen في السؤال.', 'بعد الأفعال الناقصة ضع المصدر في نهاية الجملة.']
      },
      imitateNearMiss: 'mache',
      transformHint: 'في سؤال نعم/لا يأتي Passt أولًا، ثم Ihnen، ثم وقت الموعد.',
      orderAr: 'رتّب سؤالًا واحدًا: Können ثم wir، وضع verschieben في النهاية.',
      orderHints: ['ابدأ بـKönnen ثم ضع wir.', 'ضع den Termin في الوسط وverschieben في النهاية.'],
      orderSentence: 'Können wir den Termin verschieben?',
      orderRightBracket: 'verschieben?',
      checkOrderSentence: 'Passt Ihnen Dienstag um zehn Uhr?',
      orderPromptAr: 'رتّب الكلمات لتكوين سؤال موعد واحد صحيح.',
      speakAr: 'سجّل عشرين ثانية: قل العبارات الخمس واستعمل einen Termin machen وPasst Ihnen وDas passt mir وden Termin verschieben وden Termin absagen.',
      summaryDe: 'Ich möchte einen Termin machen. · Passt Ihnen Dienstag um zehn Uhr? · Das passt mir. · Können wir den Termin verschieben? · Das tut mir leid, ich muss den Termin absagen.',
      summaryAr: 'اطلب الموعد، واسأل بـPasst Ihnen، واقبل بـpasst mir، واستعمل المصدر بعد können وmuss.',
      summaryRecap: 'Termin Passt mir verschieben absagen'
    }),

  U('a1-u4-l1', 'A1', 'السكن', 'Wohnen', 'lexik-kollokation',
    'Am Ende verwendest du fünf vollständige Sätze zum Wohnen: „Unsere Wohnung ist klein.“ · „Das Wohnzimmer ist hell.“ · „Es gibt ein Bett im Schlafzimmer.“ · „Wir wohnen im Erdgeschoss.“ · „Die Wohnung hat sechzig Quadratmeter Wohnfläche.“',
    'في النهاية تستعمل خمس جمل كاملة عن السكن: Unsere Wohnung ist klein. وDas Wohnzimmer ist hell. وEs gibt ein Bett im Schlafzimmer. وWir wohnen im Erdgeschoss. وDie Wohnung hat sechzig Quadratmeter Wohnfläche.',
    [
      ['Unsere Wohnung ist klein.', 'بعد ist تأتي الصفة الخبرية klein بلا نهاية.', 'بعد sein لا نضيف نهاية إلى الصفة الخبرية', 'Unsere Wohnung ist kleine.', 'نقول ist klein، لا ist kleine'],
      ['Das Wohnzimmer ist hell.', 'جنس الاسم المركب يتبع جزأه الأخير Zimmer، وهو محايد.', 'لأن Zimmer محايد نقول das Wohnzimmer', 'Der Wohnzimmer ist hell.', 'نقول das Wohnzimmer، لا der Wohnzimmer'],
      ['Es gibt ein Bett im Schlafzimmer.', 'بعد es gibt يأتي المفعول في النصب؛ Bett محايد فيبقى ein Bett.', 'استعمل es gibt ثم ein Bett', 'Es gibt einen Bett im Schlafzimmer.', 'Bett محايد؛ لذلك نقول ein Bett'],
      ['Wir wohnen im Erdgeschoss.', 'للموقع داخل الطابق نقول im، وهي اختصار in dem.', 'استعمل im Erdgeschoss للموقع', 'Wir wohnen in Erdgeschoss.', 'نقول im Erdgeschoss، لا in Erdgeschoss']
    ],
    [
      ['Unsere Wohnung ist klein.', 'شقتنا صغيرة', 'Unsere Wohnung ist kleine.', 'بعد ist تأتي klein بلا نهاية.', 'klein'],
      ['Das Wohnzimmer ist hell.', 'غرفة الجلوس مضيئة', 'Der Wohnzimmer ist hell.', 'Zimmer محايد؛ لذلك نقول das Wohnzimmer.', 'Wohnzimmer'],
      ['Es gibt ein Bett im Schlafzimmer.', 'يوجد سرير في غرفة النوم', 'Es gibt einen Bett im Schlafzimmer.', 'Bett محايد؛ لذلك نقول ein Bett.', 'Bett'],
      ['Wir wohnen im Erdgeschoss.', 'نسكن في الطابق الأرضي', 'Wir wohnen in Erdgeschoss.', 'للموقع نقول im Erdgeschoss.', 'Erdgeschoss']
    ],
    'Unsere Wohnung ist klein.',
    'Das Wohnzimmer ist hell.',
    'Schreibe morgen fünf Sätze nach diesen Mustern: Unsere Wohnung ist klein. Das Wohnzimmer ist hell. Es gibt ein Bett im Schlafzimmer. Wir wohnen im Erdgeschoss. Die Wohnung hat sechzig Quadratmeter Wohnfläche.',
    'غدًا اكتب خمس جمل على غرار: Unsere Wohnung ist klein. وDas Wohnzimmer ist hell. وEs gibt ein Bett im Schlafzimmer. وWir wohnen im Erdgeschoss. وDie Wohnung hat sechzig Quadratmeter Wohnfläche.',
    {
      factFamilies: ['deklination', 'genus', 'kasus', 'präposition'],
      writing: {
        zeigt: 'Fünf vollständige Sätze zum Wohnen',
        erklaerung: 'اكتب خمس جمل كاملة: صف الشقة وغرفة الجلوس، واذكر سريرًا في غرفة النوم، والطابق، والمساحة.',
        prompt: 'اكتب خمس جمل ألمانية كاملة تصف مسكنًا واحدًا.',
        promptDe: 'Unsere Wohnung ist klein. · Das Wohnzimmer ist hell. · Es gibt ein Bett im Schlafzimmer. · Wir wohnen im Erdgeschoss. · Die Wohnung hat sechzig Quadratmeter Wohnfläche.',
        points: ['unsere Wohnung ist klein', 'das Wohnzimmer ist hell', 'ein Bett im Schlafzimmer', 'im Erdgeschoss', 'sechzig Quadratmeter Wohnfläche'],
        minWords: 24,
        frage: 'صف المسكن في خمس جمل واضحة.',
        familie: 'lexik-kollokation',
        hinweise: ['استعمل ist مع صفتي klein وhell.', 'استعمل es gibt وim للموقع.']
      },
      imitateNearMiss: 'kleine',
      transformHint: 'Zimmer هو الجزء الأخير والمحايد؛ لذلك نقول das Wohnzimmer.',
      orderAr: 'رتّب جملة وجود واحدة: Es ثم gibt، وضع المكان im Schlafzimmer في النهاية.',
      orderHints: ['ابدأ بـEs ثم ضع gibt في الموقع الثاني.', 'ضع ein Bett قبل im Schlafzimmer.'],
      orderSentence: 'Es gibt ein Bett im Schlafzimmer.',
      checkOrderSentence: 'Es gibt ein Bett im Schlafzimmer.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة وجود واحدة صحيحة.',
      speakAr: 'سجّل عشرين ثانية: قل الجمل الخمس واستعمل unsere Wohnung ist klein وdas Wohnzimmer ist hell وein Bett im Schlafzimmer وim Erdgeschoss وsechzig Quadratmeter Wohnfläche.',
      summaryDe: 'Unsere Wohnung ist klein. · Das Wohnzimmer ist hell. · Es gibt ein Bett im Schlafzimmer. · Wir wohnen im Erdgeschoss. · Die Wohnung hat sechzig Quadratmeter Wohnfläche.',
      summaryAr: 'صف الشقة وغرفة الجلوس، واستعمل es gibt للأثاث، وim للطابق، وQuadratmeter للمساحة.',
      summaryRecap: 'Wohnung Wohnzimmer Bett Erdgeschoss Quadratmeter'
    }),

  U('a1-u4-l2', 'A1', 'عند الطبيب', 'Beim Arzt', 'lexik-kollokation',
    'Am Ende verwendest du fünf vollständige Sätze beim Arzt: „Mir tut der Kopf weh.“ · „Ich habe Schmerzen.“ · „Ich habe eine Erkältung.“ · „Ich brauche einen Termin.“ · „Mir geht es besser.“',
    'في النهاية تستعمل خمس جمل كاملة عند الطبيب: Mir tut der Kopf weh. وIch habe Schmerzen. وIch habe eine Erkältung. وIch brauche einen Termin. وMir geht es besser.',
    [
      ['Mir tut der Kopf weh.', 'الشخص المتألم يأتي في الداتيف mir، ويأتي جزء الجسم مع tut ... weh.', 'استعمل mir للشخص وtut ... weh للألم', 'Mich tut der Kopf weh.', 'نقول Mir tut der Kopf weh، لا Mich'],
      ['Ich habe Schmerzen.', 'Schmerzen صيغة جمع ثابتة في هذا التعبير.', 'استعمل Schmerzen بصيغة الجمع', 'Ich habe Schmerze.', 'نقول Schmerzen، لا Schmerze'],
      ['Ich habe eine Erkältung.', 'Erkältung مؤنث؛ لذلك تأتي بعد habe بصيغة eine Erkältung.', 'استعمل eine مع Erkältung', 'Ich habe ein Erkältung.', 'نقول eine Erkältung، لا ein Erkältung'],
      ['Ich brauche einen Termin.', 'Termin مذكر وفي النصب بعد brauche؛ لذلك نقول einen Termin.', 'استعمل einen Termin بعد brauche', 'Ich brauche ein Termin.', 'نقول einen Termin، لا ein Termin']
    ],
    [
      ['Mir tut der Kopf weh.', 'رأسي يؤلمني', 'Mich tut der Kopf weh.', 'الشخص المتألم يأتي في الداتيف mir.', 'Mir'],
      ['Ich habe Schmerzen.', 'لدي آلام', 'Ich habe Schmerze.', 'Schmerzen هي صيغة الجمع الصحيحة.', 'Schmerzen'],
      ['Ich habe eine Erkältung.', 'لدي زكام', 'Ich habe ein Erkältung.', 'Erkältung مؤنث؛ لذلك نقول eine.', 'Erkältung'],
      ['Ich brauche einen Termin.', 'أحتاج إلى موعد', 'Ich brauche ein Termin.', 'Termin مذكر منصوب؛ لذلك نقول einen Termin.', 'Termin']
    ],
    'Mir tut der Kopf weh.',
    'Ich brauche einen Termin.',
    'Schreibe morgen fünf Sätze nach diesen Mustern: Mir tut der Kopf weh. Ich habe Schmerzen. Ich habe eine Erkältung. Ich brauche einen Termin. Mir geht es besser.',
    'غدًا اكتب خمس جمل على غرار: Mir tut der Kopf weh. وIch habe Schmerzen. وIch habe eine Erkältung. وIch brauche einen Termin. وMir geht es besser.',
    {
      factFamilies: ['kasus', 'plural', 'genus', 'kasus'],
      writing: {
        zeigt: 'Fünf vollständige Sätze beim Arzt',
        erklaerung: 'اكتب خمس جمل كاملة: صف ألم الرأس، واذكر الآلام والزكام، واطلب موعدًا، ثم قل إن حالك أفضل.',
        prompt: 'اكتب خمس جمل ألمانية كاملة لموقف واحد عند الطبيب.',
        promptDe: 'Mir tut der Kopf weh. · Ich habe Schmerzen. · Ich habe eine Erkältung. · Ich brauche einen Termin. · Mir geht es besser.',
        points: ['Mir tut der Kopf weh', 'Ich habe Schmerzen', 'Ich habe eine Erkältung', 'Ich brauche einen Termin', 'Mir geht es besser'],
        minWords: 20,
        frage: 'اكتب الجمل الخمس في سياق طبي واضح.',
        familie: 'lexik-kollokation',
        hinweise: ['استعمل mir مع tut ... weh.', 'انتبه إلى Schmerzen وeine Erkältung وeinen Termin.']
      },
      imitateNearMiss: 'Mich',
      transformHint: 'Termin مذكر منصوب بعد brauche؛ لذلك نقول einen Termin.',
      orderAr: 'رتّب جملة ألم واحدة: Mir ثم tut، وضع weh في النهاية.',
      orderHints: ['ابدأ بـMir ثم ضع tut.', 'ضع der Kopf في الوسط وweh في النهاية.'],
      orderSentence: 'Mir tut der Kopf weh.',
      orderRightBracket: 'weh.',
      checkOrderSentence: 'Ich habe eine Erkältung.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة طبية واحدة صحيحة.',
      speakAr: 'سجّل عشرين ثانية: قل الجمل الخمس واستعمل Mir tut der Kopf weh وIch habe Schmerzen وIch habe eine Erkältung وIch brauche einen Termin وMir geht es besser.',
      summaryDe: 'Mir tut der Kopf weh. · Ich habe Schmerzen. · Ich habe eine Erkältung. · Ich brauche einen Termin. · Mir geht es besser.',
      summaryAr: 'استعمل mir مع tut ... weh، وhaben مع الأعراض، وeinen Termin للموعد، وes في Mir geht es besser.',
      summaryRecap: 'Kopf Schmerzen Erkältung Termin besser'
    }),

  U('a1-u4-l3', 'A1', 'وصف الطريق', 'Wegbeschreibung', 'lexik-kollokation',
    'Am Ende verwendest du fünf vollständige Sätze für eine Wegbeschreibung: „Gehen Sie geradeaus.“ · „Biegen Sie an der Ampel links ab.“ · „Nehmen Sie die erste Straße rechts.“ · „Überqueren Sie die Brücke.“ · „Die Apotheke ist auf der linken Seite.“',
    'في النهاية تستعمل خمس جمل كاملة لوصف الطريق: Gehen Sie geradeaus. وBiegen Sie an der Ampel links ab. وNehmen Sie die erste Straße rechts. وÜberqueren Sie die Brücke. وDie Apotheke ist auf der linken Seite.',
    [
      ['Gehen Sie geradeaus.', 'geradeaus ظرف اتجاه يُكتب كلمة واحدة.', 'اكتب geradeaus كلمة واحدة بعد Gehen Sie', 'Gehen Sie gerade aus.', 'نقول geradeaus كلمة واحدة في هذا السياق'],
      ['Biegen Sie an der Ampel links ab.', 'الفعل abbiegen منفصل في الأمر الرسمي: Biegen في البداية وab في النهاية.', 'ضع Biegen Sie أولًا وab في نهاية الجملة', 'Biegen Sie an der Ampel links.', 'لا تَحذف الجزء المنفصل ab من الفعل abbiegen'],
      ['Nehmen Sie die erste Straße rechts.', 'بعد die تأتي الصفة الترتيبية في النصب بصيغة erste.', 'استعمل die erste Straße، لا die erst Straße', 'Nehmen Sie die erst Straße rechts.', 'بعد die نقول erste Straße، لا erst Straße'],
      ['Überqueren Sie die Brücke.', 'الفعل überqueren يأخذ مفعولًا به في النصب؛ Brücke مؤنث فتبقى die Brücke.', 'استعمل die Brücke مفعولًا به بعد überqueren', 'Überqueren Sie der Brücke.', 'بعد überqueren نقول die Brücke، لا der Brücke']
    ],
    [
      ['Gehen Sie geradeaus.', 'تابع السير إلى الأمام مباشرةً', 'Gehen Sie gerade aus.', 'geradeaus كلمة واحدة في هذا السياق.', 'geradeaus'],
      ['Biegen Sie an der Ampel links ab.', 'انعطف يسارًا عند إشارة المرور', 'Biegen Sie an der Ampel links.', 'الفعل المنفصل abbiegen يحتاج ab في النهاية.', 'ab'],
      ['Nehmen Sie die erste Straße rechts.', 'اسلك الشارع الأول يمينًا', 'Nehmen Sie die erst Straße rechts.', 'بعد die نقول erste Straße.', 'erste'],
      ['Überqueren Sie die Brücke.', 'اعبر الجسر', 'Überqueren Sie der Brücke.', 'الفعل überqueren يأخذ die Brücke في النصب.', 'Brücke']
    ],
    'Gehen Sie geradeaus.',
    'Biegen Sie an der Ampel links ab.',
    'Erklären Sie morgen einen Weg mit diesen fünf Sätzen: Gehen Sie geradeaus. Biegen Sie an der Ampel links ab. Nehmen Sie die erste Straße rechts. Überqueren Sie die Brücke. Die Apotheke ist auf der linken Seite.',
    'غدًا اشرح طريقًا بهذه الجمل الخمس: Gehen Sie geradeaus. وBiegen Sie an der Ampel links ab. وNehmen Sie die erste Straße rechts. وÜberqueren Sie die Brücke. وDie Apotheke ist auf der linken Seite.',
    {
      factFamilies: ['orthographie', 'wortstellung', 'deklination', 'kasus'],
      writing: {
        zeigt: 'Fünf vollständige Sätze für eine Wegbeschreibung',
        erklaerung: 'اكتب خمس جمل كاملة: اطلب السير مستقيمًا، والانعطاف يسارًا عند الإشارة، وسلوك الشارع الأول يمينًا، وعبور الجسر، ثم حدّد جهة الصيدلية.',
        prompt: 'اكتب خمس جمل ألمانية كاملة تصف طريقًا واحدًا.',
        promptDe: 'Gehen Sie geradeaus. · Biegen Sie an der Ampel links ab. · Nehmen Sie die erste Straße rechts. · Überqueren Sie die Brücke. · Die Apotheke ist auf der linken Seite.',
        points: ['Gehen Sie geradeaus', 'Biegen Sie an der Ampel links ab', 'Nehmen Sie die erste Straße rechts', 'Überqueren Sie die Brücke', 'Die Apotheke ist auf der linken Seite'],
        minWords: 27,
        frage: 'اكتب إرشادات الطريق الخمس بترتيب واضح.',
        familie: 'lexik-kollokation',
        hinweise: ['استعمل صيغة الاحترام بالفعل أولًا في الإرشادات.', 'ضع ab في نهاية جملة abbiegen واستعمل auf der linken Seite للموقع.']
      },
      imitateNearMiss: 'gerade aus',
      transformHint: 'في الأمر الرسمي يبدأ الفعل بـBiegen Sie، ويأتي الجزء المنفصل ab في النهاية.',
      orderAr: 'رتّب جملة موقع واحدة: ابدأ بـDie Apotheke، وضع ist في الموقع الثاني وauf der linken Seite في النهاية.',
      orderHints: ['ابدأ بـDie Apotheke ثم ضع ist.', 'رتّب عبارة المكان هكذا: auf der linken Seite.'],
      orderSentence: 'Die Apotheke ist auf der linken Seite.',
      checkOrderSentence: 'Die Apotheke ist auf der linken Seite.',
      orderPromptAr: 'رتّب الكلمات لتكوين جملة واحدة تحدد جهة الصيدلية.',
      speakAr: 'سجّل عشرين ثانية: قل الجمل الخمس واستعمل Gehen Sie geradeaus وBiegen Sie an der Ampel links ab وNehmen Sie die erste Straße rechts وÜberqueren Sie die Brücke وDie Apotheke ist auf der linken Seite.',
      summaryDe: 'Gehen Sie geradeaus. · Biegen Sie an der Ampel links ab. · Nehmen Sie die erste Straße rechts. · Überqueren Sie die Brücke. · Die Apotheke ist auf der linken Seite.',
      summaryAr: 'ابدأ الإرشاد بالفعل في صيغة الاحترام، وافصل ab، واستعمل erste مع Straße وdie Brücke في النصب وauf der linken Seite للموقع.',
      summaryRecap: 'geradeaus links erste Brücke Seite'
    }),

  U('a1-u4-l4', 'A1', 'رسالة قصيرة', 'Kurze Nachricht', 'register',
    'Am Ende schreibst du eine kurze Nachricht mit fünf Teilen: „Liebe Anna, ich komme später.“ · „Ich komme später.“ · „Kannst du morgen kommen?“ · „Ich warte auf deine Antwort.“ · „Viele Grüße“ mit deinem Namen darunter',
    'في النهاية تكتب رسالة قصيرة من خمسة أجزاء: Liebe Anna, ich komme später. وIch komme später. وKannst du morgen kommen? وIch warte auf deine Antwort. وViele Grüße مع اسمك تحتها.',
    [
      ['Liebe Anna, ich komme später.', 'في مخاطبة صديقة نقول Liebe Anna، وتفصل الفاصلة النداء عن الجملة.', 'استعمل Liebe مع Anna، وضع فاصلة بعد الاسم', 'Lieber Anna, ich komme später.', 'مع Anna نقول Liebe، لا Lieber'],
      ['Ich komme später.', 'في الجملة الخبرية يأتي الفعل المصرف komme في الموقع الثاني.', 'ضع komme بعد Ich مباشرةً', 'Ich später komme.', 'في الجملة الرئيسية نقول Ich komme später'],
      ['Kannst du morgen kommen?', 'سؤال نعم/لا يبدأ بالفعل المصرف Kannst، ويأتي المصدر kommen في النهاية.', 'ابدأ بـKannst du وضع kommen في النهاية', 'Du kannst morgen kommen.', 'نحتاج سؤال نعم/لا هنا؛ لذلك يبدأ بالفعل Kannst'],
      ['Viele Grüße\nSara', 'صيغة الختام Viele Grüße بلا فاصلة أو نقطة، ويأتي الاسم في السطر التالي.', 'اكتب Viele Grüße ثم اسمك تحته بلا فاصلة بعد Grüße', 'Viele Grüße, Sara.', 'لا نضع فاصلة بعد صيغة الختام الألمانية؛ يأتي الاسم في سطر مستقل']
    ],
    [
      ['Liebe Anna, ich komme später.', 'عزيزتي آنا، سآتي لاحقًا', 'Lieber Anna, ich komme später.', 'مع Anna نقول Liebe، وبعد الاسم فاصلة.', 'Liebe'],
      ['Ich komme später.', 'سآتي لاحقًا', 'Ich später komme.', 'الفعل komme يأتي في الموقع الثاني.', 'komme'],
      ['Kannst du morgen kommen?', 'هل تستطيعين المجيء غدًا؟', 'Du kannst morgen kommen.', 'نحتاج سؤال نعم/لا هنا؛ لذلك يبدأ بالفعل Kannst.', 'Kannst'],
      ['Viele Grüße\nSara', 'مع تحيات كثيرة، ثم اسم سارة في السطر التالي', 'Viele Grüße, Sara.', 'صيغة الختام بلا فاصلة، والاسم في سطر مستقل.', 'Grüße']
    ],
    'Liebe Anna, ich komme später.',
    'Kannst du morgen kommen?',
    'Schreibe morgen diese kurze Nachricht mit deinem Namen:\nLiebe Anna, ich komme später.\nKannst du morgen kommen?\nIch warte auf deine Antwort.\nViele Grüße\n[dein Name]',
    'غدًا اكتب هذه الرسالة القصيرة باسمك: ابدأ بـLiebe Anna, ثم اكتب Ich komme später. وKannst du morgen kommen? وIch warte auf deine Antwort. واختم بـViele Grüße واكتب اسمك تحتها بلا علامة ترقيم.',
    {
      factFamilies: ['deklination', 'wortstellung', 'wortstellung', 'orthographie'],
      writing: {
        zeigt: 'Eine kurze freundschaftliche Nachricht',
        erklaerung: 'اكتب رسالة قصيرة إلى Anna: نداءً صحيحًا، ومعلومة أنك ستأتي لاحقًا، وسؤالًا عن الغد، وطلب انتظار الجواب، ثم Viele Grüße واسمك في سطر مستقل.',
        prompt: 'اكتب رسالة قصيرة من الأجزاء الخمسة، ثم ضع اسمك تحت صيغة الختام.',
        promptDe: 'Liebe Anna, ich komme später. · Ich komme später. · Kannst du morgen kommen? · Ich warte auf deine Antwort. · Viele Grüße\nSara',
        points: ['Liebe Anna', 'ich komme später', 'Kannst du morgen kommen', 'Ich warte auf deine Antwort', 'Viele Grüße'],
        minWords: 17,
        frage: 'اكتب الرسالة الودية القصيرة كاملة.',
        familie: 'register',
        hinweise: ['استعمل du مع صديقة، ولا تستعمل صيغة رسمية.', 'لا تضع فاصلة بعد Viele Grüße؛ اكتب الاسم في السطر التالي.']
      },
      imitateNearMiss: 'Lieber',
      transformHint: 'سؤال نعم/لا يبدأ بـKannst، ويأتي المصدر kommen في النهاية.',
      orderAr: 'رتّب سؤالًا واحدًا: ابدأ بـKannst ثم du، وضع kommen في النهاية.',
      orderHints: ['ابدأ بـKannst ثم ضع du.', 'ضع morgen في الوسط وkommen في النهاية.'],
      orderSentence: 'Kannst du morgen kommen?',
      orderRightBracket: 'kommen?',
      checkOrderSentence: 'Kannst du morgen kommen?',
      checkOrderRightBracket: 'kommen?',
      orderPromptAr: 'رتّب الكلمات لتكوين سؤال ودي واحد صحيح.',
      speakAr: 'سجّل عشرين ثانية: اقرأ الرسالة واستعمل Liebe Anna وich komme später وKannst du morgen kommen وIch warte auf deine Antwort وViele Grüße، ثم قل اسمك.',
      summaryDe: 'Liebe Anna, ich komme später. · Ich komme später. · Kannst du morgen kommen? · Ich warte auf deine Antwort. · Viele Grüße\nSara',
      summaryAr: 'ابدأ بنداء ودي مع فاصلة، واكتب المعلومة والسؤال وطلب الجواب، ثم اختم بـViele Grüße والاسم في السطر التالي بلا فاصلة.',
      summaryRecap: 'Liebe später Kannst Antwort Grüße'
    }),

  U('a1-u4-l5', 'A1', 'مراجعة A1', 'Wiederholung A1', 'pruefstrategie',
    'Am Ende reparierst du vier typische A1-Fehler',
    'في النهاية تُصلح أربعة أخطاء نموذجية من A1.',
    [
      ['den nicht der', 'مفعول مذكر den', 'der للرفع', 'Ich sehe der Mann', 'هذا خطأ الحالة'],
      ['bin nicht habe beim Alter', 'العمر مع bin', 'haben هنا خطأ', 'Ich habe zwanzig Jahre alt', 'alt لا يأتي هكذا'],
      ['Perfekt mit sein bei gehen', 'gehen يأخذ sein', 'haben gegangen خطأ', 'Ich habe gegangen', 'الفعل المساعد خطأ'],
      ['V2 nach dann', 'بعد dann الفعل ثاني', 'dann ich فعل يكسر القاعدة', 'Dann ich lerne', 'الضمير سبق الفعل']
    ],
    [
      ['Ich sehe den Mann.', 'أرى الرجل', 'Ich sehe der Mann', 'النصب den', 'den'],
      ['Ich bin zwanzig.', 'عمري عشرون', 'Ich habe zwanzig Jahre alt', 'العمر مع bin', 'bin'],
      ['Ich bin gegangen.', 'ذهبت', 'Ich habe gegangen', 'gehen مع sein', 'bin'],
      ['Dann lerne ich.', 'ثم أدرس', 'Dann ich lerne', 'الفعل ثانيًا', 'lerne']
    ],
    'Ich sehe den Mann. Dann lerne ich.',
    'Ich bin zwanzig.',
    'Korrigiere morgen einen eigenen Satz.',
    'غدًا صحّح جملة من عندك.'),

  U('a1-u4-l6', 'A1', 'شكل امتحان A1', 'Prüfungsform A1', 'pruefstrategie',
    'Am Ende kennst du die vier Teile und die Regel ohne Ausgleich',
    'في النهاية تعرف الأقسام الأربعة وقاعدة عدم التعويض.',
    [
      ['vier Teile', 'Hörverstehen Lesen Schreiben Sprechen', 'لا جزء واحد يغطي الباقي', 'nur Schreiben zählt', 'كل قسم قائم'],
      ['kein Ausgleich', 'درجة قسم لا تعوّض قسمًا', 'هذه قاعدة الشكل لا نصيحة', 'ein starkes Modul rettet', 'لا إنقاذ بين الأقسام'],
      ['Hören einmal', 'الاستماع يُسمَع حسب نظام الجزء', 'لا تعتمد على إعادة غير موجودة', 'ich höre dreimal immer', 'لا تفترض ثلاث إعادات'],
      ['buchstabieren im Sprechen', 'التهجئة جزء من التحدث في A1', 'ليست زينة', 'Buchstaben sind unwichtig', 'التهجئة تُمتحن']
    ],
    [
      ['Es gibt vier Teile.', 'هناك أربعة أقسام', 'Es gibt ein Teil nur', 'الشكل أربعة أقسام', 'vier'],
      ['Ein Teil rettet den anderen nicht.', 'قسم لا ينقذ الآخر', 'Ein starkes Modul rettet alles', 'لا تعويض', 'nicht'],
      ['Hören hat seine eigene Zeit.', 'للسماع وقته', 'Hören ist immer dreimal', 'لا تفترض التكرار', 'Zeit'],
      ['Buchstabieren gehört zum Sprechen.', 'التهجئة من التحدث', 'Buchstabieren ist unwichtig', 'التهجئة مطلوبة', 'Buchstabieren']
    ],
    'Vier Teile. Kein Ausgleich. Buchstabieren gehört dazu.',
    'Es gibt vier Teile.',
    'Sage morgen die vier Teile laut.',
    'غدًا سمِّ الأقسام الأربعة بصوت عالٍ.')
,

  U('a1-u5-l1', 'A1', 'البريد والهاتف', 'Post und Telefon', 'lexik-kollokation',
    'Am Ende schreibst du eine Postkarte und verstehst eine Ansage',
    'في النهاية تكتب بطاقة بريد وتفهم نداءً مسجّلًا.',
    [
      ['der Absender steht oben', 'المرسل أعلى البطاقة والمستلم تحتها', 'العكس يجعل الرسالة ترجع', 'der Empfänger steht oben', 'الترتيب ثابت في البريد الألماني'],
      ['anklicken am Ende', 'الفعل المنفصل يبقى قطعة واحدة', 'الفصل الخاطئ يُفقد المعنى', 'klicken an', 'anklicken لا تُقسَم في النهاية'],
      ['Auf Wiederhören am Telefon', 'في الهاتف تحية أخرى', 'Wiedersehen للوجوه فقط', 'Auf Wiedersehen am Telefon', 'التحية تتبع الوسيلة'],
      ['im Internet', 'الإنترنت يأخذ im', 'in dem ركيكة هنا', 'in dem Internet', 'im هي الصيغة الثابتة']
    ],
    [
      ['Ich schreibe eine E-Mail.', 'أكتب بريدًا إلكترونيًا', 'Ich schreibe ein E-Mail', 'E-Mail مؤنث: eine', 'eine'],
      ['Der Absender steht auf dem Brief.', 'المرسل على الرسالة', 'Der Sender steht auf dem Brief', 'Absender لا Sender', 'Absender'],
      ['Bitte kreuzen Sie an.', 'من فضلك علّم في المربع', 'Bitte klicken Sie an', 'ankreuzen للاستمارة', 'kreuzen'],
      ['Sprechen Sie auf den Anrufbeantworter.', 'تحدّث إلى جهاز الرد', 'Sprechen Sie auf dem Anrufbeantworter', 'الحركة: auf den', 'Anrufbeantworter']
    ],
    'Ich schreibe eine E-Mail und schicke ein Fax.',
    'Ich schreibe eine E-Mail.',
    'Schreibe morgen eine kurze E-Mail auf Deutsch.',
    'غدًا اكتب بريدًا إلكترونيًا قصيرًا بالألمانية.'),

  U('a1-u5-l2', 'A1', 'المصرف والعمل', 'Bank und Arbeit', 'präposition',
    'Am Ende erledigst du am Schalter und an der Kasse alles selbst',
    'في النهاية تنجز عند الشبّاك والدفع كل شيء بنفسك.',
    [
      ['bei der Firma', 'العمل عند مؤسسة يأخذ bei', 'in Firma خطأ شائع', 'in der Firma arbeiten', 'bei لا in مع جهة العمل'],
      ['am Schalter', 'عند الشبّاك am لا in', 'الموضع المحدد يأخذ an', 'in dem Schalter', 'am Schalter هي الصيغة'],
      ['auf das Konto', 'المال يذهب إلى الحساب بـ auf', 'in das Konto خطأ', 'in das Konto', 'auf das Konto'],
      ['ab acht Uhr offen', 'البداية من وقت: ab', 'seit للماضي المستمر', 'seit acht Uhr geöffnet', 'ab للمستقبل والفتح']
    ],
    [
      ['Ich arbeite bei Siemens.', 'أعمل في سيمنس', 'Ich arbeite in Siemens', 'bei للشركة', 'bei'],
      ['Ich gehe zum Schalter.', 'أذهب إلى الشبّاك', 'Ich gehe zu dem Schalter', 'zum هي الشائع', 'zum'],
      ['Ich fülle das Formular aus.', 'أملأ الاستمارة', 'Ich fülle das Formular', 'المنفصل يحتاج aus', 'aus'],
      ['Ich bin arbeitslos.', 'أنا عاطل عن العمل', 'Ich bin arbeitslos gemacht', 'الصفة تكفي', 'arbeitslos']
    ],
    'Ich arbeite bei einer Firma und gehe zum Schalter.',
    'Ich arbeite bei Siemens.',
    'Fülle morgen eine echte Adresse auf Deutsch aus.',
    'غدًا املأ عنوانًا حقيقيًا بالألمانية.'),

  U('a1-u5-l3', 'A1', 'المدرسة والوثائق', 'Schule und Papiere', 'kasus',
    'Am Ende füllst du ein Formular mit Namen, Geburtsort und Familienstand',
    'في النهاية تملأ استمارة بالاسم ومكان الميلاد والحالة العائلية.',
    [
      ['bei Familienstand', 'الاستمارة تسأل بـ bei', 'in Familienstand خطأ', 'in „Familienstand“', 'bei في الاستمارة'],
      ['das Geburtsjahr Ihres Sohnes', 'الإضافة بـ Genitiv', 'von Ihrem Sohn في الاستمارة أقل رسمية', 'das Geburtsjahr von Ihrem Sohn', 'Genitiv في الوثائق'],
      ['ich bin geboren', 'الميلاد بـ sein', 'habe geboren للمرأة لا للشخص', 'Ich habe in Tunis geboren', 'sein مع geboren'],
      ['ledig ohne Artikel', 'الحالة العائلية صفة', 'ein ledig خطأ', 'ein ledig', 'ledig صفة']
    ],
    [
      ['Ich bin in Tunis geboren.', 'وُلدت في تونس', 'Ich habe in Tunis geboren', 'sein لا haben', 'geboren'],
      ['Meine Schwester heiratet im Mai.', 'أختي تتزوج في ماي', 'Meine Schwester heiratet in Mai', 'الشهر im', 'im'],
      ['Der Kindergarten ist neu.', 'الروضة جديدة', 'Die Kindergarten ist neu', 'Kindergarten مذكر', 'der'],
      ['Das ist meine Ehefrau.', 'هذه زوجتي', 'Das ist mein Ehefrau', 'Frau مؤنث', 'meine']
    ],
    'Ich bin ledig und wohne in Nabeul.',
    'Ich bin ledig.',
    'Schreibe morgen deinen Familienstand in einem Satz.',
    'غدًا اكتب حالتك العائلية في جملة.'),

  U('a1-u5-l4', 'A1', 'البيت والجوار', 'Zuhause und Nachbarschaft', 'präposition',
    'Am Ende beschreibst du deine Wohnung und den Weg im Haus',
    'في النهاية تصف مسكنك والطريق داخل البيت.',
    [
      ['in Halle B ohne Artikel', 'أسماء القاعات بلا أداة', 'die Halle B خطأ في العنوان', 'in der Halle B', 'بلا أداة مع الرمز'],
      ['daneben ist die Bank', 'daneben كلمة واحدة', 'neben وحدها ناقصة', 'Neben ist die Bank', 'daneben لا neben'],
      ['im Kino und in die Disco', 'داخل المكان im، وإلى المكان in die', 'zu Disco خطأ', 'zu Disco', 'المكان يحدد حرف الجر'],
      ['ein Einzelzimmer', 'Zimmer محايد فيبقى ein', 'eine Einzelzimmer خطأ', 'eine Einzelzimmer', 'ein مع Zimmer']
    ],
    [
      ['Wir treffen uns in Halle B.', 'نتقابل في القاعة B', 'Wir treffen uns in der Halle B', 'بلا أداة مع B', 'Halle'],
      ['Die Heimat ist weit.', 'الوطن بعيد', 'Der Heimat ist weit', 'Heimat مؤنث', 'die'],
      ['Ich habe ein Doppelzimmer.', 'عندي غرفة مزدوجة', 'Ich habe eine Doppelzimmer', 'Zimmer محايد', 'ein'],
      ['Am Kiosk gibt es Zeitungen.', 'في الكشك صحف', 'In Kiosk gibt es Zeitungen', 'am Kiosk', 'am']
    ],
    'Ich wohne in einer Wohnung und gehe zum Kiosk.',
    'Ich wohne in einer Wohnung.',
    'Beschreibe morgen dein Zimmer in drei Sätzen.',
    'غدًا صف غرفتك في ثلاث جمل.'),

  U('a1-u5-l5', 'A1', 'السفر والطريق', 'Reisen und Verkehr', 'wortstellung',
    'Am Ende fragst du nach Abfahrt, Gleis und Ankunft und erzählst von einer Reise',
    'في النهاية تسأل عن الانطلاق والرصيف والوصول وتحكي عن رحلة.',
    [
      ['der Zug fährt ab', 'الفعل المنفصل في النهاية', 'abfahren verbunden خطأ', 'Der Zug abfährt', 'ab في النهاية'],
      ['auf welchem Bahnsteig', 'الرصيف يأخذ auf', 'in welchem Bahnsteig خطأ', 'in welchem Bahnsteig', 'auf dem Bahnsteig'],
      ['Grad ohne Endung', 'الإعلان عن الحرارة بلا e', 'dreißig Grade', 'dreißig Grade', 'Grad بلا جمع'],
      ['besichtigen die Stadt', 'المعالم تُزار بـ besichtigen', 'besuchen den Dom', 'besuchen den Dom', 'المعالم besichtigen']
    ],
    [
      ['Der Zug fährt um acht ab.', 'القطار يرحل في الثامنة', 'Der Zug abfährt um acht', 'المنفصل في النهاية', 'ab'],
      ['Wie viel kostet das Ticket?', 'كم ثمن التذكرة', 'Wie viel das Ticket kostet?', 'السؤال يقلب الفعل', 'kostet'],
      ['Die Sonne scheint.', 'الشمس تلمع', 'Die Sonne ist scheinen', 'scheinen فعل كامل', 'scheint'],
      ['Wir fahren zum See.', 'نذهب إلى البحيرة', 'Wir fahren zu See', 'zum See', 'zum']
    ],
    'Der Zug fährt ab und wir fahren zum See.',
    'Der Zug fährt um acht ab.',
    'Erzähle morgen eine echte Reise in zwei Sätzen.',
    'غدًا احكِ رحلة حقيقية في جملتين.'),

  U('a1-u5-l6', 'A1', 'مراجعة قائمة غوته A1', 'Wortliste A1', 'lexik-kollokation',
    'Am Ende kennst du die Wörter der amtlichen A1-Liste, die noch fehlten',
    'في النهاية تعرف كلمات قائمة A1 الرسمية التي كانت ناقصة.',
    [
      ['gratulieren dir', 'التهنئة تأخذ Dativ', 'dich خطأ', 'Ich gratuliere dich', 'gratulieren + Dativ'],
      ['gefallen mir', 'الإعجاب يأخذ Dativ', 'mich خطأ', 'Die Farbe gefällt mich', 'gefallen + Dativ'],
      ['Sport machen', 'الرياضة تُصنع بـ machen', 'Sport spielen خطأ', 'Sport spielen', 'machen مع Sport'],
      ['sich kümmern um', 'العناية تحتاج um', 'kümmern ohne um', 'Er kümmert die Kinder', 'sich kümmern um']
    ],
    [
      ['Ich gratuliere dir.', 'أهنّئك', 'Ich gratuliere dich', 'Dativ', 'dir'],
      ['Die Farbe gefällt mir.', 'اللون يعجبني', 'Die Farbe gefällt mich', 'Dativ', 'mir'],
      ['Ich mache Sport.', 'أمارس الرياضة', 'Ich spiele Sport', 'machen', 'Sport'],
      ['Sie kümmert sich um die Kinder.', 'تعتني بالأطفال', 'Sie kümmert die Kinder', 'um', 'um']
    ],
    'Ich gratuliere dir und wünsche dir viel Glück.',
    'Ich gratuliere dir.',
    'Schreibe morgen eine Glückwunschkarte in zwei Sätzen.',
    'غدًا اكتب بطاقة تهنئة في جملتين.')
];

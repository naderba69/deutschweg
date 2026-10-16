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

  U('a1-u1-l6', 'A1', 'أستطيع ويجب', 'können und müssen', 'konjugation',
    'Am Ende sagst du was du kannst und was du musst',
    'في النهاية تقول ما تستطيع وما يجب عليك.',
    [
      ['ich kann', 'kann بلا نهاية مع ich', 'kannst للمخاطب', 'ich kannst', 'النهاية الزائدة خطأ'],
      ['du kannst', 'du يأخذ kannst', 'kann وحدها لا تكفي', 'du kann', 'هذه صيغة ich أو er'],
      ['ich muss', 'muss بلا ss الزائدة في الكتابة الحديثة', 'muß قديمة', 'ich muß', 'الإملاء الحالي muss'],
      ['Modal plus Infinitiv', 'الفعل الثاني في الآخر بلا zu', 'لا to ولا zu', 'ich muss zu gehen', 'zu زائدة هنا']
    ],
    [
      ['Ich kann schwimmen.', 'أستطيع السباحة', 'Ich kannst schwimmen', 'مع ich: kann', 'kann'],
      ['Du kannst bleiben.', 'تستطيع البقاء', 'Du kann bleiben', 'مع du: kannst', 'kannst'],
      ['Ich muss lernen.', 'يجب أن أدرس', 'Ich muß lernen', 'الإملاء muss', 'muss'],
      ['Sie muss heute arbeiten.', 'يجب أن تعمل اليوم', 'Sie muss heute zu arbeiten', 'المصدر بلا zu', 'arbeiten']
    ],
    'Ich kann schwimmen, aber ich muss lernen.',
    'Ich muss lernen.',
    'Sage morgen einen Satz mit kann und einen mit muss.',
    'غدًا قل جملة مع kann وأخرى مع muss.'),

  U('a1-u2-l1', 'A1', 'أريد وأود', 'wollen und möchten', 'register',
    'Am Ende unterscheidest du wollen und möchten',
    'في النهاية تفرّق بين أريد وأود.',
    [
      ['ich will', 'will مباشر', 'في الطلب من غريب هو خشن', 'ich will bitte zahlen', 'المقام يحتاج möchten'],
      ['ich möchte', 'möchte ألطف', 'هي الصيغة التي تُستعمل في المقهى', 'ich möchtest', 'möchtest للمخاطب'],
      ['du willst', 'willst مع du', 'لا will مع du', 'du will', 'الضمير يحتاج willst'],
      ['möchten Sie', 'الرسمي möchten Sie', 'willst Sie مقام مكسور', 'willst Sie', 'Sie لا تأخذ willst']
    ],
    [
      ['Ich will bleiben.', 'أريد البقاء', 'Ich möchte bitte bleiben sofort', 'الجملة مخلوطة المقام', 'will'],
      ['Ich möchte zahlen.', 'أود أن أدفع', 'Ich will zahlen jetzt du', 'في الدفع möchten أسلم', 'möchte'],
      ['Du willst gehen.', 'تريد الذهاب', 'Du will gehen', 'مع du: willst', 'willst'],
      ['Möchten Sie Wasser?', 'هل تودون ماء؟', 'Willst Sie Wasser?', 'الرسمي möchten Sie', 'Möchten']
    ],
    'Ich möchte einen Kaffee. Ich will zu Hause bleiben.',
    'Ich möchte zahlen.',
    'Bestelle morgen etwas mit möchte.',
    'غدًا اطلب شيئًا بـ möchte.'),

  U('a1-u2-l2', 'A1', 'الأفعال المنفصلة', 'Trennbare Verben', 'wortstellung',
    'Am Ende trennst du aufstehen und anrufen im Präsens',
    'في النهاية تفصل الفعل في المضارع.',
    [
      ['ich stehe auf', 'البادئة في الآخر', 'لا تبقى ملتصقة في الجملة الرئيسية', 'ich aufstehe', 'هذا شكل القاموس لا الجملة'],
      ['du rufst an', 'st على الفعل والبادئة أخيرًا', 'anrufst كتلة واحدة خطأ', 'du anrufst', 'البادئة تأخرت عن موضعها'],
      ['Um acht stehe ich auf', 'البادئة تبقى أخيرة حتى مع ظرف أولًا', 'لا تعُد إلى الفعل', 'Um acht aufstehe ich', 'الفعل المصرف هو الثاني'],
      ['aufstehen im Infinitiv', 'في القاموس والواجب تبقى ملتصقة', 'الفصل للجملة الرئيسية المصرفة', 'bitte stehe aufstehen', 'خلط الصيغتين']
    ],
    [
      ['Ich stehe um sieben auf.', 'أستيقظ في السابعة', 'Ich aufstehe um sieben', 'البادئة في الآخر', 'auf'],
      ['Du rufst mich an.', 'تتصل بي', 'Du anrufst mich', 'an في الآخر', 'an'],
      ['Wir kaufen ein.', 'نتسوق', 'Wir einkaufen heute', 'ein في الآخر', 'ein'],
      ['Er steht früh auf.', 'يستيقظ باكرًا', 'Er aufsteht früh', 'auf في الآخر', 'auf']
    ],
    'Ich stehe um sieben auf und du rufst mich an.',
    'Ich stehe um sieben auf.',
    'Trenne morgen zwei Verben in einem Satz.',
    'غدًا افصل فعلين في جملة.'),

  U('a1-u2-l3', 'A1', 'الساعة', 'Uhrzeit', 'lexik-kollokation',
    'Am Ende sagst du eine Uhrzeit mit Uhr und eine mit Viertel',
    'في النهاية تقول ساعة تامة وربعًا.',
    [
      ['Es ist drei Uhr', 'الساعة التامة مع Uhr', 'لا hour', 'Es ist drei hour', 'hour إنجليزية'],
      ['Viertel nach drei', 'الربع بعد', 'لا quarter past كترجمة', 'quarter past drei', 'الخليط ليس ألمانيًا'],
      ['halb vier', 'النصف يُنسب إلى الساعة القادمة', 'halb drei ليست 3:30', 'halb drei bedeutet 3:30', 'halb drei تعني 2:30'],
      ['Um wie viel Uhr', 'السؤال عن الموعد مع Um', 'Wie viel Uhr allein ist knapp', 'Was Uhr ist', 'السؤال الناقص لا يُفهم']
    ],
    [
      ['Es ist drei Uhr.', 'الساعة الثالثة', 'Es ist drei hour', 'Uhr لا hour', 'Uhr'],
      ['Es ist Viertel nach drei.', 'الثالثة والربع', 'Es ist quarter past drei', 'الربع Viertel nach', 'Viertel'],
      ['Es ist halb vier.', 'الثالثة والنصف', 'Es ist halb drei', 'halb vier تعني 3:30', 'halb'],
      ['Um wie viel Uhr?', 'في أي ساعة؟', 'Was Uhr ist es?', 'السؤال Um wie viel Uhr', 'Uhr']
    ],
    'Um wie viel Uhr? Es ist halb vier.',
    'Es ist drei Uhr.',
    'Sage morgen zwei Uhrzeiten laut.',
    'غدًا قل ساعتين بصوت عالٍ.'),

  U('a1-u2-l4', 'A1', 'حروف الزمان', 'Temporale Präpositionen', 'präposition',
    'Am Ende benutzt du um am und im für die Zeit',
    'في النهاية تستعمل um وam وim للزمن.',
    [
      ['um acht', 'الساعة مع um', 'am لا للساعة', 'am acht Uhr', 'الثامنة تأخذ um'],
      ['am Montag', 'اليوم مع am', 'im لا ليوم الأسبوع', 'im Montag', 'Montag يأخذ am'],
      ['im Mai', 'الشهر مع im', 'am لا للشهر', 'am Mai', 'Mai يأخذ im'],
      ['am Abend', 'جزء اليوم غالبًا am', 'لا in Abend في هذا الإطار', 'in Abend', 'الإطار الثابت am Abend']
    ],
    [
      ['Der Kurs ist um acht.', 'الدورة في الثامنة', 'Der Kurs ist am acht', 'الساعة مع um', 'um'],
      ['Ich komme am Montag.', 'آتي الاثنين', 'Ich komme im Montag', 'اليوم مع am', 'am'],
      ['Im Mai ist es warm.', 'في مايو الجو دافئ', 'Am Mai ist es warm', 'الشهر مع im', 'Mai'],
      ['Am Abend lerne ich.', 'مساءً أدرس', 'In Abend lerne ich', 'الإطار am Abend', 'Abend']
    ],
    'Der Kurs ist um acht am Montag im Mai.',
    'Ich komme am Montag.',
    'Schreibe morgen um am und im je einmal.',
    'غدًا اكتب um وam وim مرة واحدة لكل.'),

  U('a1-u2-l5', 'A1', 'حروف المكان', 'Lokale Präpositionen', 'präposition',
    'Am Ende sagst du wo etwas ist mit in an oder auf',
    'في النهاية تقول أين الشيء بـ in أو an أو auf.',
    [
      ['in der Stadt', 'داخل المدينة in', 'auf der Stadt يعني على سطحها', 'auf der Stadt wohnen', 'السكن داخلها in'],
      ['an der Wand', 'على الجدار الملاصق an', 'in der Wand يعني داخل الجدار', 'in der Wand hängt', 'التعليق an'],
      ['auf dem Tisch', 'على السطح auf', 'an dem Tisch هنا أضعف', 'an dem Tisch liegt das Buch', 'الكتاب على السطح auf'],
      ['neben der Apotheke', 'بجانب neben', 'لا next der', 'next der Apotheke', 'next ليست حرفًا ألمانيًا']
    ],
    [
      ['Ich wohne in der Stadt.', 'أسكن في المدينة', 'Ich wohne auf der Stadt', 'الدخول في المكان in', 'in'],
      ['Das Bild hängt an der Wand.', 'الصورة على الجدار', 'Das Bild hängt in der Wand', 'التعليق an', 'an'],
      ['Das Buch liegt auf dem Tisch.', 'الكتاب على الطاولة', 'Das Buch liegt an dem Tisch', 'السطح الأفقي auf', 'auf'],
      ['Die Bank ist neben der Apotheke.', 'البنك بجانب الصيدلية', 'Die Bank ist next der Apotheke', 'بجانب هي neben', 'neben']
    ],
    'Das Buch liegt auf dem Tisch neben der Lampe.',
    'Das Buch liegt auf dem Tisch.',
    'Beschreibe morgen einen Ort mit auf oder neben.',
    'غدًا صف مكانًا بـ auf أو neben.'),

  U('a1-u2-l6', 'A1', 'الجمع', 'Plural', 'plural',
    'Am Ende bildest du vier häufige Plurale',
    'في النهاية تكوّن أربعة جموع شائعة.',
    [
      ['die Tage', 'Tag يأخذ -e', 'لا Tags', 'die Tags', 'الجمع Tage'],
      ['die Kinder', 'Kind يأخذ -er', 'لا Kinds', 'die Kinds', 'الجمع Kinder'],
      ['die Mütter', 'Mutter تأخذ حركة', 'لا Mutters في الفصحى هنا', 'die Mutters', 'الجمع Mütter'],
      ['die Autos', 'بعض الدخيل يأخذ -s', 'لا Auten', 'die Auten', 'الجمع Autos']
    ],
    [
      ['zwei Tage', 'يومان', 'zwei Tags', 'الجمع Tage', 'Tage'],
      ['zwei Kinder', 'طفلان', 'zwei Kinds', 'الجمع Kinder', 'Kinder'],
      ['zwei Mütter', 'أمّان', 'zwei Mutters', 'الجمع Mütter', 'Mütter'],
      ['zwei Autos', 'سيارتان', 'zwei Auten', 'الجمع Autos', 'Autos']
    ],
    'Ich habe zwei Kinder und zwei Autos.',
    'Ich habe zwei Kinder.',
    'Bilde morgen vier Plurale laut.',
    'غدًا كوّن أربعة جموع بصوت عالٍ.'),

  U('a1-u3-l1', 'A1', 'الطعام', 'Essen', 'lexik-kollokation',
    'Am Ende bestellst du ein Essen und ein Getränk',
    'في النهاية تطلب طعامًا وشرابًا.',
    [
      ['Ich möchte bestellen', 'الطلب يبدأ بـ möchte', 'will خشن مع النادل', 'Ich will sofort du', 'المقام والمبنى معًا خطأ'],
      ['die Speisekarte', 'قائمة الطعام Speisekarte', 'لا Menu كترجمة دائمة', 'das Menu bitte als Liste', 'Menu قد تعني وجبة ثابتة'],
      ['ohne Zucker', 'ohne تنفي المضاف', 'nicht Zucker أضعف هنا', 'nicht Zucker bitte im Kaffee', 'الإطار ohne Zucker'],
      ['Die Rechnung bitte', 'الحساب Rechnung', 'لا the bill', 'die Bill bitte', 'Bill ليست الكلمة']
    ],
    [
      ['Ich möchte bestellen.', 'أود أن أطلب', 'Ich will du bestellen', 'الطلب المهذب möchte', 'möchte'],
      ['Die Speisekarte, bitte.', 'قائمة الطعام من فضلك', 'Das Menu, bitte.', 'القائمة هنا Speisekarte', 'Speisekarte'],
      ['Einen Kaffee ohne Zucker.', 'قهوة بلا سكر', 'Einen Kaffee nicht Zucker', 'بلا سكر ohne', 'ohne'],
      ['Die Rechnung, bitte.', 'الحساب من فضلك', 'Die Bill, bitte.', 'الحساب Rechnung', 'Rechnung']
    ],
    'Ich möchte die Speisekarte. Einen Kaffee ohne Zucker, bitte.',
    'Die Rechnung, bitte.',
    'Bestelle morgen ein Getränk laut.',
    'غدًا اطلب شرابًا بصوت عالٍ.'),

  U('a1-u3-l2', 'A1', 'التسوق', 'Einkaufen', 'lexik-kollokation',
    'Am Ende fragst du nach dem Preis und der Größe',
    'في النهاية تسأل عن السعر والمقاس.',
    [
      ['Was kostet das', 'السعر مع kosten', 'لا What costs', 'What kostet das', 'السؤال ألماني من أوله'],
      ['Das macht zehn Euro', 'المبلغ مع machen في الصندوق', 'لا is ten', 'Das ist ten Euro', 'الرقم والعملة ألمانيان'],
      ['zu teuer', 'الغلاء zu teuer', 'too teuer خليط', 'too teuer für mich', 'too إنجليزية'],
      ['Haben Sie das in groß', 'المقاس في السؤال', 'لا size big', 'Haben Sie size big', 'المقاس groß']
    ],
    [
      ['Was kostet das?', 'بكم هذا؟', 'What kostet das?', 'السؤال Was kostet', 'kostet'],
      ['Das macht zehn Euro.', 'هذا بعشرة يورو', 'Das ist ten Euro', 'المبلغ macht zehn Euro', 'zehn'],
      ['Das ist mir zu teuer.', 'هذا غالٍ عليّ', 'Das ist mir too teuer', 'الغلاء zu teuer', 'teuer'],
      ['Haben Sie das in groß?', 'هل عندكم المقاس الكبير؟', 'Haben Sie das in big?', 'المقاس groß', 'groß']
    ],
    'Was kostet das? Das macht zehn Euro.',
    'Was kostet das?',
    'Frage morgen nach einem Preis.',
    'غدًا اسأل عن سعر.'),

  U('a1-u3-l3', 'A1', 'يومي', 'Tagesablauf', 'wortstellung',
    'Am Ende erzählst du drei Punkte deines Tages in der richtigen Reihenfolge',
    'في النهاية تحكي ثلاث نقاط من يومك بالترتيب.',
    [
      ['zuerst', 'أولًا zuerst', 'لا first dann خليط', 'first stehe ich', 'first ليست الرابط'],
      ['dann', 'ثم dann والفعل ثانيًا', 'dann ich stehe يكسر V2', 'dann ich stehe auf', 'الفعل يجب أن يكون ثانيًا'],
      ['danach', 'بعد ذلك danach', 'after das خليط', 'after das lerne ich', 'after إنجليزية'],
      ['zum Schluss', 'في النهاية zum Schluss', 'لا at the end', 'at the Schluss', 'الإطار zum Schluss']
    ],
    [
      ['Zuerst stehe ich auf.', 'أولًا أستيقظ', 'First stehe ich auf', 'أولًا zuerst', 'Zuerst'],
      ['Dann frühstücke ich.', 'ثم أفطر', 'Dann ich frühstücke', 'الفعل ثانيًا بعد Dann', 'frühstücke'],
      ['Danach lerne ich.', 'بعد ذلك أدرس', 'After das lerne ich', 'بعد ذلك danach', 'Danach'],
      ['Zum Schluss schlafe ich.', 'في النهاية أنام', 'At the Schluss schlafe ich', 'الإطار Zum Schluss', 'Schluss']
    ],
    'Zuerst stehe ich auf. Dann frühstücke ich.',
    'Zuerst stehe ich auf.',
    'Erzähle morgen drei Punkte mit zuerst und dann.',
    'غدًا احكِ ثلاث نقاط مع zuerst وdann.'),

  U('a1-u3-l4', 'A1', 'الماضي مع haben', 'Perfekt mit haben', 'konjugation',
    'Am Ende bildest du das Perfekt mit haben',
    'في النهاية تبني الماضي التام مع haben.',
    [
      ['ich habe gemacht', 'haben في الثاني والاسم المفعول أخيرًا', 'لا صنعتُ بفعل واحد في هذا الزمن', 'ich machte gemacht', 'خلط الزمنين'],
      ['Partizip am Ende', 'الاسم المفعول آخر الجملة', 'لا يبقى بعد habe مباشرة إن طال المفعول', 'ich habe gemacht das', 'das يتقدم على المفعول التام'],
      ['gelernt', 'lernen يأخذ ge- و -t', 'لا gelernen', 'ich habe gelernen', 'النهاية -t'],
      ['kein ge bei telefonieren', 'الفعل على -ieren بلا ge', 'لا getelefoniert خطأ الانتظار', 'ich habe getelefoniert', 'الصحيح telefoniert']
    ],
    [
      ['Ich habe das gemacht.', 'فعلت ذلك', 'Ich machte das gemacht', 'Perfekt: habe gemacht', 'gemacht'],
      ['Ich habe Deutsch gelernt.', 'تعلمت الألمانية', 'Ich habe Deutsch gelernen', 'الاسم المفعول gelernt', 'gelernt'],
      ['Hast du das gesehen?', 'هل رأيت ذلك؟', 'Hast du das sehen?', 'المفعول gesehen', 'gesehen'],
      ['Ich habe telefoniert.', 'اتصلت', 'Ich habe getelefoniert', 'telefonieren بلا ge', 'telefoniert']
    ],
    'Ich habe Deutsch gelernt und ich habe telefoniert.',
    'Ich habe das gemacht.',
    'Bilde morgen zwei Perfekt-Sätze mit haben.',
    'غدًا كوّن جملتي Perfekt مع haben.'),

  U('a1-u3-l5', 'A1', 'الماضي مع sein', 'Perfekt mit sein', 'konjugation',
    'Am Ende benutzt du sein bei Bewegung und bei bleiben',
    'في النهاية تستعمل sein مع الحركة ومع bleiben.',
    [
      ['ich bin gegangen', 'الحركة مع sein', 'haben gegangen خطأ شائع', 'ich habe gegangen', 'gehen يأخذ sein'],
      ['ich bin geblieben', 'bleiben يأخذ sein', 'ليس haben', 'ich habe geblieben', 'bleiben مع sein'],
      ['du bist gekommen', 'kommen مع sein', 'bist لا hast', 'du hast gekommen', 'kommen حركة'],
      ['Partizip am Ende', 'حتى مع sein يبقى المفعول أخيرًا', 'لا bin gegangen nach hinten falsch gestellt', 'ich bin nach Berlin gegangen richtig bleibt Ende', 'المفعول آخرًا وهذا سطر القاعدة']
    ],
    [
      ['Ich bin nach Hause gegangen.', 'ذهبت إلى البيت', 'Ich habe nach Hause gegangen', 'gehen مع sein', 'gegangen'],
      ['Ich bin zu Hause geblieben.', 'بقيت في البيت', 'Ich habe zu Hause geblieben', 'bleiben مع sein', 'geblieben'],
      ['Bist du gekommen?', 'هل أتيت؟', 'Hast du gekommen?', 'kommen مع sein', 'gekommen'],
      ['Wir sind gefahren.', 'سافرنا', 'Wir haben gefahren', 'fahren هنا مع sein', 'gefahren']
    ],
    'Ich bin nach Hause gegangen und ich bin geblieben.',
    'Ich bin nach Hause gegangen.',
    'Sage morgen einen Satz mit bin gegangen.',
    'غدًا قل جملة مع bin gegangen.'),

  U('a1-u3-l6', 'A1', 'الموعد', 'Termine', 'lexik-kollokation',
    'Am Ende schlägst du einen Termin vor und sagst ab',
    'في النهاية تقترح موعدًا وتعتذر عنه.',
    [
      ['Passt Ihnen der Termin', 'الاقتراح مع passen', 'لا Is the date ok خليط', 'Ist der Termin ok für Sie englisch', 'السؤال الألماني Passt'],
      ['Das passt mir', 'القبول Das passt mir', 'لا I agree', 'Ich agree', 'Agree ليست الفعل'],
      ['Das passt mir nicht', 'الرفض بهدوء', 'لا no way', 'No way der Termin', 'الرفض Das passt mir nicht'],
      ['Können wir verschieben', 'التأجيل verschieben', 'لا delay the Termin', 'Können wir delay', 'delay إنجليزية']
    ],
    [
      ['Passt Ihnen der Termin?', 'هل يناسبكم الموعد؟', 'Ist der Termin ok?', 'السؤال Passt Ihnen', 'Passt'],
      ['Das passt mir.', 'هذا يناسبني', 'Ich agree dem Termin', 'القبول passt mir', 'passt'],
      ['Das passt mir nicht.', 'هذا لا يناسبني', 'No way, der Termin', 'الرفض passt nicht', 'nicht'],
      ['Können wir verschieben?', 'هل نؤجل؟', 'Können wir delay?', 'التأجيل verschieben', 'verschieben']
    ],
    'Passt Ihnen Dienstag? Das passt mir nicht.',
    'Das passt mir.',
    'Schlage morgen einen Termin vor.',
    'غدًا اقترح موعدًا.'),

  U('a1-u4-l1', 'A1', 'السكن', 'Wohnen', 'lexik-kollokation',
    'Am Ende beschreibst du ein Zimmer mit zwei Möbeln',
    'في النهاية تصف غرفة بقطعتين.',
    [
      ['ein helles Zimmer', 'الوصف بعد الأداة في هذه الجملة البسيطة يأتي لاحقًا', 'نبدأ بالاسم ثم الموضع', 'helles ein Zimmer falsch gestellt', 'الترتيب أداة ثم صفة ثم اسم'],
      ['Es gibt ein Bett', 'الوجود مع es gibt', 'لا there gibt', 'There gibt ein Bett', 'There إنجليزية'],
      ['die Wohnung ist klein', 'الحجم مع sein', 'لا has small', 'die Wohnung hat klein', 'الصفة مع ist'],
      ['im Erdgeschoss', 'الطابق الأرضي إطار ثابت', 'لا in floor zero', 'im floor zero', 'الكلمة Erdgeschoss']
    ],
    [
      ['Das Zimmer ist hell.', 'الغرفة مضيئة', 'Das Zimmer hat hell', 'الصفة مع ist', 'hell'],
      ['Es gibt ein Bett.', 'هناك سرير', 'There gibt ein Bett', 'الوجود es gibt', 'gibt'],
      ['Die Wohnung ist klein.', 'الشقة صغيرة', 'Die Wohnung hat klein', 'الحجم مع ist', 'klein'],
      ['Ich wohne im Erdgeschoss.', 'أسكن في الطابق الأرضي', 'Ich wohne im floor', 'الطابق Erdgeschoss', 'Erdgeschoss']
    ],
    'Das Zimmer ist hell. Es gibt ein Bett.',
    'Das Zimmer ist hell.',
    'Beschreibe morgen dein Zimmer in zwei Sätzen.',
    'غدًا صف غرفتك في جملتين.'),

  U('a1-u4-l2', 'A1', 'عند الطبيب', 'Beim Arzt', 'lexik-kollokation',
    'Am Ende sagst du wo es wehtut und bittest um einen Termin',
    'في النهاية تقول أين الألم وتطلب موعدًا.',
    [
      ['Mir tut der Kopf weh', 'الألم mir tut weh', 'لا I have pain in head خليط', 'Ich habe pain im Kopf', 'pain إنجليزية'],
      ['Ich bin krank', 'المرض مع bin', 'لا ich habe krank', 'Ich habe krank', 'krank صفة مع bin'],
      ['Ich brauche einen Termin', 'الحاجة brauchen', 'لا I need', 'Ich need einen Termin', 'need إنجليزية'],
      ['beim Arzt', 'عند الطبيب beim', 'لا by the Arzt', 'by dem Arzt', 'by إنجليزية']
    ],
    [
      ['Mir tut der Kopf weh.', 'رأسي يؤلمني', 'Ich habe pain im Kopf', 'الألم tut weh', 'Kopf'],
      ['Ich bin krank.', 'أنا مريض', 'Ich habe krank', 'krank مع bin', 'krank'],
      ['Ich brauche einen Termin.', 'أحتاج موعدًا', 'Ich need einen Termin', 'الحاجة brauchen', 'brauche'],
      ['Ich gehe zum Arzt.', 'أذهب إلى الطبيب', 'Ich gehe by dem Arzt', 'الوجهة zum Arzt', 'Arzt']
    ],
    'Mir tut der Kopf weh. Ich brauche einen Termin.',
    'Ich brauche einen Termin.',
    'Sage morgen wo es wehtut.',
    'غدًا قل أين الألم.'),

  U('a1-u4-l3', 'A1', 'الطريق', 'Wegbeschreibung', 'lexik-kollokation',
    'Am Ende erklärst du einen kurzen Weg',
    'في النهاية تشرح طريقًا قصيرًا.',
    [
      ['gehen Sie geradeaus', 'مستقيم geradeaus', 'لا straight', 'gehen Sie straight', 'straight إنجليزية'],
      ['dann links', 'ثم يسار links', 'لا left', 'dann left', 'left إنجليزية'],
      ['die erste Straße', 'الشارع الأول erste', 'لا first street', 'die first Straße', 'first إنجليزية'],
      ['bis zur Ampel', 'حتى الإشارة bis zur', 'لا until the', 'until zur Ampel', 'until إنجليزية']
    ],
    [
      ['Gehen Sie geradeaus.', 'امضوا مستقيمًا', 'Gehen Sie straight', 'مستقيم geradeaus', 'geradeaus'],
      ['Dann links.', 'ثم يسارًا', 'Dann left', 'يسار links', 'links'],
      ['Die erste Straße.', 'الشارع الأول', 'Die first Straße', 'الأول erste', 'erste'],
      ['Bis zur Ampel.', 'حتى الإشارة', 'Until zur Ampel', 'حتى bis', 'Ampel']
    ],
    'Gehen Sie geradeaus. Dann links bis zur Ampel.',
    'Gehen Sie geradeaus.',
    'Erkläre morgen einen Weg mit links oder rechts.',
    'غدًا اشرح طريقًا بـ links أو rechts.'),

  U('a1-u4-l4', 'A1', 'رسالة قصيرة', 'Kurze Nachricht', 'register',
    'Am Ende schreibst du eine kurze Nachricht mit Anrede und Gruß',
    'في النهاية تكتب رسالة قصيرة بتحية وختام.',
    [
      ['Liebe Anna', 'للصديقة Liebe', 'Sehr geehrte für eine Freundin ist steif', 'Sehr geehrte Anna als Freundin', 'المقام الصديقي Liebe'],
      ['Kannst du kommen', 'الطلب المباشر بين الأصدقاء', 'لا Könnten Sie kommen an Anna privat', 'Könnten Sie kommen, Anna privat', 'مع الصديق du'],
      ['Viele Grüße', 'الختام بين المعارف Viele Grüße', 'لا Mit freundlichen Grüßen an die Freundin als einzige Form', 'Mit freundlichen Grüßen, Anna privat hart', 'الختام الأخف Viele Grüße'],
      ['der Name am Ende', 'الاسم في الآخر', 'لا تبدأ الرسالة بالاسم وحده', 'Sara, kommst du ohne Anrede', 'التحية أولًا']
    ],
    [
      ['Liebe Anna,', 'عزيزتي آنا', 'Sehr geehrte Anna,', 'للصديقة Liebe', 'Liebe'],
      ['Kannst du morgen kommen?', 'هل تستطيعين المجيء غدًا؟', 'Könnten Sie morgen kommen, Anna?', 'مع الصديقة du', 'Kannst'],
      ['Viele Grüße', 'مع تحياتي', 'Mit freundlichen Grüßen an Anna privat', 'بين الأصدقاء Viele Grüße', 'Grüße'],
      ['Sara', 'الاسم في الختام', 'Unterschrift fehlt hier nicht', 'الختام يحمل الاسم', 'Sara']
    ],
    'Liebe Anna, kannst du morgen kommen? Viele Grüße, Sara.',
    'Kannst du morgen kommen?',
    'Schreibe morgen drei Zeilen an eine Freundin.',
    'غدًا اكتب ثلاثة أسطر لصديقة.'),

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

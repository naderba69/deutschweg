/* Deutschweg — P3.2 lexical layer, slice 1: A0 (lessons 2–6).
   One row per headword:
     [ headword, plural/forms, Arabic gloss, example sentence,
       the sentence an Arabic speaker typically produces, why it is wrong,
       error family ]
   The example must contain the blankable core of the headword; the compiler
   refuses the lesson otherwise. Families are the families of §9.
   Tricks: three per lesson, tied to the form itself, never repeated verbatim
   in another lesson (tools/validate-lesson.js rejects a repetition). */

module.exports = {
  'a0-u1-l2': {
    items: [
      ['die Zahl', 'die Zahlen', 'العدد', 'Die Zahl ist drei.', 'Ich bin Zahl drei.', '‏«Zahl» اسم لا صفة: تحتاج أداة، ونقول die Zahl.', 'genus'],
      ['eins', '—', 'واحد', 'Eins, zwei, drei.', 'Ich bin eins Kind.', 'قبل الاسم تأتي ein بلا s؛ وeins تُستعمل وحدها في العدّ.', 'deklination'],
      ['zwei', '—', 'اثنان', 'Zwei Kaffee, bitte.', 'Ich trinke zwei Kaffees, bitte.', 'Kaffee اسم غير معدود هنا؛ لا تُضاف s بعد العدد.', 'plural'],
      ['drei', '—', 'ثلاثة', 'Der Zug kommt um drei.', 'Der Zug kommt in drei.', 'الساعة تأخذ um، وin تُستعمل للشهر أو الفصل.', 'präposition'],
      ['vier', '—', 'أربعة', 'Ich bleibe vier Nächte.', 'Ich bleibe vier Nacht.', 'بعد العدد فوق واحد يبقى الاسم جمعًا: Nächte.', 'plural'],
      ['fünf', '—', 'خمسة', 'Das kostet fünf Euro.', 'Das kostet fünf Euros.', 'Euro لا تُجمع بـ s في الألمانية المعيارية.', 'plural'],
      ['sechs', '—', 'ستة', 'Ich stehe um sechs auf.', 'Ich stehe um sechs auf morgens.', 'الظرف morgens يفتح الجملة أو يبقى على صيغته؛ والتكرار في الآخر ليس ألمانيًا.', 'wortstellung'],
      ['sieben', '—', 'سبعة', 'Sieben Tage sind eine Woche.', 'Sieben Tag sind eine Woche.', 'بعد العدد فوق واحد يأتي الجمع: Tage.', 'plural'],
      ['acht', '—', 'ثمانية', 'Der Kurs beginnt um acht.', 'Der Kurs beginnt in acht Uhr.', 'um للساعة، وin لا تدخل مع Uhr.', 'präposition'],
      ['neun', '—', 'تسعة', 'Um neun frühstücke ich.', 'Um neun ich frühstücke.', 'بعد الظرف يبقى الفعل في الموضع الثاني: Um neun frühstücke ich.', 'wortstellung'],
      ['zehn', '—', 'عشرة', 'Ich lerne zehn Wörter.', 'Ich lerne zehn Wort.', 'جمع Wort هو Wörter، والعشرة تأخذ جمعًا.', 'plural'],
      ['zwölf', '—', 'اثنا عشر', 'Es ist zwölf Uhr.', 'Es ist zwölf Stunde.', 'Uhr للقراءة على الساعة، وStunde للمدة.', 'lexik-kollokation'],
      ['sechzehn', '—', 'ستة عشر', 'Sie ist sechzehn Jahre alt.', 'Sie ist sechzehn Jahre.', 'العمر يحتاج alt في آخر الجملة.', 'lexik-kollokation'],
      ['zwanzig', '—', 'عشرون', 'Ich bin zwanzig Jahre alt.', 'Ich habe zwanzig Jahre.', 'العمر يُقال بـ sein لا بـ haben.', 'lexik-kollokation'],
      ['buchstabieren', 'buchstabiert · buchstabierte', 'يتهجّى', 'Bitte buchstabieren Sie Ihren Namen.', 'Bitte buchstabieren Sie Ihre Name.', 'Name مفرد مذكر في النصب: Ihren Name.', 'kasus'],
      ['vierzehn', '—', 'أربعة عشر', 'Sie ist vierzehn Jahre alt.', 'Sie ist vierzehn Jahre.', 'العمر يحتاج alt في آخر الجملة.', 'lexik-kollokation'],
      ['fünfzehn', '—', 'خمسة عشر', 'Der Zug fährt um fünfzehn Uhr.', 'Der Zug fährt um fünfzehn.', 'قراءة الساعة تحتاج Uhr: fünfzehn Uhr.', 'lexik-kollokation', 'fünfzehn'],
      ['neunzehn', '—', 'تسعة عشر', 'Mein Bruder ist neunzehn.', 'Mein Bruder hat neunzehn.', 'العمر بـ sein لا بـ haben.', 'lexik-kollokation'],
      ['zwanzig', '—', 'عشرون', 'Zwanzig plus zwanzig ist vierzig.', 'Zwanzig plus zwanzig ist vierzig Jahre.', 'الحساب لا يحتاج Jahre.', 'lexik-kollokation', 'vierzig'],
      ['einundzwanzig', '—', 'واحد وعشرون', 'Sie wohnt in Zimmer einundzwanzig.', 'Sie wohnt in Zimmer zwanzig eins.', 'الألمانية تقرأ الآحاد قبل العشرات: ein-und-zwanzig.', 'wortstellung', 'einundzwanzig'],
      ['siebzig', '—', 'سبعون', 'Meine Großmutter ist siebzig.', 'Meine Großmutter hat siebzig.', 'العمر بـ sein.', 'lexik-kollokation', 'siebzig'],
      ['neunzig', '—', 'تسعون', 'Das Buch hat neunzig Seiten.', 'Das Buch hat neunzig Seite.', 'بعد العدد جمع: Seiten.', 'plural', 'neunzig'],
      ['hundert', '—', 'مئة', 'Das kostet hundert Euro.', 'Das kostet hundert Euros.', 'Euro لا تُجمع بـ s.', 'plural', 'hundert'],
      ['tausend', '—', 'ألف', 'Die Stadt hat tausend Einwohner.', 'Die Stadt hat tausend Einwohner Leute.', 'Einwohner تكفي، ولا تُضاف Leute بعدها.', 'lexik-kollokation', 'tausend'],
      ['eine Million', '—', 'مليون', 'Die Stadt hat eine Million Einwohner.', 'Die Stadt hat ein Million Einwohner.', 'Million مؤنث: eine.', 'genus', 'Million'],
      ['eine Milliarde', '—', 'مليار', 'Eine Milliarde ist tausend Millionen.', 'Ein Milliarde ist tausend Million.', 'Milliarde مؤنث: eine، والجمع Millionen.', 'genus', 'Milliarde'],
      ['dreißig', '—', 'ثلاثون', 'Der Monat hat dreißig Tage.', 'Der Monat hat dreißig Tag.', 'بعد dreißig جمع: Tage.', 'plural'],
    ],
    tricks: [
      { trick: 'z = تس دائمًا', wie: 'قل «تس» ثم أكمل: تسايْت، تسڤاي، تسڤانتسيش.', warum: 'خطأ الناطق بالعربية الأول هو قراءة z زايًا؛ وهي تس في كل موضع.' , anchor: 'Zeit'},
      { trick: 'ثلاثة عشر إلى تسعة عشر تنتهي بـ -zehn', wie: 'sechzehn، siebzehn، achtzehn: الجذر ثم zehn.', warum: 'العشرات من عشرين إلى تسعين تنتهي بـ -zig، والخلط بينهما يعكس الرقم.' , anchor: 'sechzehn'},
      { trick: 'زمّ الأعداد كلمة واحدة', wie: 'drei + zehn = dreizehn، بلا فراغ ولا واو.', warum: 'العربية تكتب العدد المعطوف منفصلًا، والألمانية تدمجه، فيتوهّم المتعلم أنه رقمان.' , anchor: 'dreizehn'}
    ]
  },

  'a0-u1-l3': {
    items: [
      ['ich bin', '—', 'أنا أكون', 'Ich bin Sara.', 'Ich ist Sara.', 'مع ich نقول bin دائمًا.', 'konjugation'],
      ['du bist', '—', 'أنت تكون', 'Du bist hier.', 'Du bin hier.', 'صيغة bin لا تصاحب du.', 'konjugation'],
      ['er ist', 'sie ist · es ist', 'هو يكون', 'Er ist Lehrer.', 'Er bist Lehrer.', 'مع er/sie/es نقول ist.', 'konjugation'],
      ['wir sind', '—', 'نحن نكون', 'Wir sind aus Tunesien.', 'Wir ist aus Tunesien.', 'الجمع wir يأخذ sind.', 'konjugation'],
      ['ihr seid', '—', 'أنتم تكونون', 'Ihr seid im Kurs.', 'Ihr sind im Kurs.', 'ihr وحدها تأخذ seid، وهي الاستثناء في سلّم sein.', 'konjugation'],
      ['sie sind', '—', 'هم يكونون', 'Sie sind Studenten.', 'Sie ist Studenten.', 'الجمع يأخذ sind، والإفراد ist.', 'konjugation'],
      ['heißen', 'heißt · hieß · hat geheißen', 'يُسمّى', 'Wie heißt du?', 'Wie heiß du?', 'مع du يصير heißen ← heißt، ويُلفظ ß هنا صوتًا واحدًا.', 'konjugation', 'heißt'],
      ['der Name', 'die Namen', 'الاسم', 'Mein Name ist Sara.', 'Meine Name ist Sara.', 'Name مفرد مذكر: mein بلا e.', 'genus'],
      ['der Vorname', 'die Vornamen', 'الاسم الأول', 'Mein Vorname ist Sara.', 'Der Vorname ist Müller.', 'Vorname هو الأول، وما ينتهي بـ Müller هو اسم العائلة.', 'lexik-kollokation'],
      ['der Nachname', 'die Nachnamen', 'اسم العائلة', 'Mein Nachname ist Müller.', 'Mein Nachname ist Sara.', 'خلط الموضعين يقلب هويّة التعريف.', 'lexik-kollokation'],
      ['das Alter', '—', 'العمر', 'Ich bin zwanzig Jahre alt.', 'Ich habe zwanzig Jahre.', 'العمر بـ sein، وhaben للملكية لا للعمر.', 'lexik-kollokation', 'alt'],
      ['die Frau', 'die Frauen', 'السيدة · الزوجة', 'Guten Tag, Frau Klein.', 'Guten Tag, die Frau Klein.', 'نداء اللقب بلا أداة قبل الاسم.', 'register'],
      ['der Herr', 'die Herren', 'السيد', 'Guten Tag, Herr Klein.', 'Guten Tag, der Herr Klein.', 'النداء بلا أداة، وHerren جمع غير منتظم.', 'register'],
      ['kommen aus', 'kommt aus · kam aus', 'يأتي من', 'Ich komme aus Tunesien.', 'Ich komme von Tunesien.', 'البلد يأخذ aus، وvon للشخص أو الجهة.', 'präposition', 'komme'],
      ['wohnen', 'wohnt · wohnte', 'يسكن', 'Ich wohne in Sousse.', 'Ich wohne auf Sousse.', 'المدينة تأخذ in؛ auf للسطح أو للميدان.', 'präposition', 'wohne']
    ],
    tricks: [
      { trick: 'سلّم sein من الأعلى', wie: 'bin · bist · ist ثم sind · seid · sind: فرد، فرد، فرد، ثم جمع.', warum: 'مجموعة الجمع كلها sind، باستثناء واحد فقط هو seid، فتذكّر الاستثناء لا تكرّر القاعدة.' , anchor: 'Du bist hier.'},
      { trick: 'a يصير ä عند du', wie: 'heißen ← du heißt، fahren ← du fährst، schlafen ← du schläfst.', warum: 'النبرة تتغيّر مع du في أفعال بعينها، وحفظها صوتًا يمنع الخطأ قبل النحو.' , anchor: 'Wie heißt du?'},
      { trick: 'الأسماء الألمانية تُحفظ بالأداة', wie: 'لا تحفظ Name بل der Name، ولا تحفظ Frau بل die Frau.', warum: 'الجنس ليس في العربية، فالأداة هي الذاكرة الوحيدة لتصريف ما بعدها.' , anchor: 'Ich bin Sara.'}
    ]
  },

  'a0-u1-l4': {
    items: [
      ['Deutschland', '—', 'ألمانيا', 'Ich wohne in Deutschland.', 'Ich wohne in der Deutschland.', 'أسماء الدول بلا أداة، إلا قليلًا محفوظًا مثل die Schweiz.', 'genus'],
      ['Österreich', '—', 'النمسا', 'Sie kommt aus Österreich.', 'Sie kommt aus Osterreich.', 'حرف ä يغيّر النطق والكتابة معًا؛ بلا نقطتين تصير كلمة أخرى.', 'orthographie'],
      ['die Schweiz', '—', 'سويسرا', 'Er fährt in die Schweiz.', 'Er fährt nach Schweiz.', 'die Schweiz وحدها بين الجيران تأخذ أداة؛ ونقول in die Schweiz.', 'genus'],
      ['Tunesien', '—', 'تونس', 'Ich komme aus Tunesien.', 'Ich komme aus Tunis.', 'Tunesien هي الدولة، وTunis هي العاصمة.', 'lexik-kollokation'],
      ['Frankreich', '—', 'فرنسا', 'Sie lebt in Frankreich.', 'Sie lebt in Frankreich Land.', 'اسم الدولة لا يحتاج كلمة Land بعده.', 'lexik-kollokation'],
      ['die Sprache', 'die Sprachen', 'اللغة', 'Deutsch ist eine Sprache.', 'Deutsch ist ein Sprache.', 'Sprache مؤنث: eine Sprache.', 'genus'],
      ['Deutsch', '—', 'الألمانية', 'Ich spreche Deutsch.', 'Ich spreche die Deutsch.', 'أسماء اللغات بلا أداة عند sprechen.', 'register'],
      ['Arabisch', '—', 'العربية', 'Meine Muttersprache ist Arabisch.', 'Meine Muttersprache ist die Arabisch.', 'اسم اللغة بلا أداة، وهو محايد ولا يُصرّف.', 'register'],
      ['Englisch', '—', 'الإنجليزية', 'Ich lerne Englisch.', 'Ich lerne englisch.', 'أسماء اللغات تُكتب بحرف كبير في الألمانية، خلافًا للعربية.', 'orthographie'],
      ['sprechen', 'spricht · sprach · hat gesprochen', 'يتكلّم', 'Ich spreche ein wenig Deutsch.', 'Ich spreche ein klein Deutsch.', 'قبل اللغة يلزم ظرف: ein wenig أو etwas.', 'deklination', 'spreche'],
      ['die Muttersprache', 'die Muttersprachen', 'اللغة الأم', 'Meine Muttersprache ist Arabisch.', 'Meine Mutter Sprache ist Arabisch.', 'الكلمة مركّبة: Mutter + Sprache في كلمة واحدة بلا فراغ.', 'orthographie'],
      ['das Land', 'die Länder', 'البلد', 'Mein Land ist Tunesien.', 'Meine Land ist Tunesien.', 'Land محايد: mein Land.', 'genus'],
      ['die Hauptstadt', 'die Hauptstädte', 'العاصمة', 'Tunis ist die Hauptstadt.', 'Tunis ist die Stadt haupt.', 'التركيب يقلب الترتيب: Hauptstadt كلمة واحدة، وبجمع Hauptstädte.', 'orthographie'],
      ['Wie bitte?', '—', 'عفوًا؟ (أعد من فضلك)', 'Wie bitte? Noch einmal, bitte.', 'Wie?', '‏«Wie?» وحدها تبدو حادّة؛ Wie bitte? هي صيغة الأدب.', 'register'],
      ['langsam', '—', 'ببطء', 'Sprechen Sie bitte langsam.', 'Sprechen Sie bitte mit langsam.', 'langsam صفة حال؛ لا تحتاج حرف جر قبلها.', 'lexik-kollokation'],
      ['Europa', '—', 'أوروبا', 'Deutschland liegt in Europa.', 'Deutschland liegt in der Europa.', 'أسماء القارات بلا أداة.', 'genus'],
    ],
    tricks: [
      { trick: 'الدول المؤنثة قليلة ومحفوظة', wie: 'die Schweiz · die Türkei · die Slowakei · die Ukraine: كلها تنتهي بصوت ياء أو ei.', warum: 'قول «قليلة» يجعل المجموعة صغيرة تُحفظ؛ والباقي بلا أداة تلقائيًا.' , anchor: 'die Schweiz'},
      { trick: 'aus للوطن، von للشخص', wie: 'Ich komme aus Tunesien (بلد) · Ich komme von Sara (شخص).', warum: 'العربية تقول «من» في الحالتين، والألمانية تفصل، والفصل هو الخطأ المتكرر.' , anchor: 'Ich komme aus Tunesien.'},
      { trick: 'اسم اللغة عارٍ بلا أداة', wie: 'Ich spreche Deutsch · Ich lerne Arabisch.', warum: 'وجود أداة هنا خطأ مشهدي من الإنجليزية (the German language)، لا من الألمانية.' , anchor: 'Ich spreche Deutsch.'}
    ]
  },

  'a0-u1-l5': {
    items: [
      ['die Familie', 'die Familien', 'العائلة', 'Meine Familie ist groß.', 'Mein Familie ist groß.', 'Familie مؤنث: meine، والصفة بعدها groß بلا نهاية في هذا التركيب.', 'genus'],
      ['die Mutter', 'die Mütter', 'الأم', 'Meine Mutter wohnt in Sousse.', 'Meine Mutter wohnt in Sousse sie.', 'الضمير الزائد بعد الفعل ليس ألمانيًا.', 'wortstellung'],
      ['der Vater', 'die Väter', 'الأب', 'Mein Vater arbeitet hier.', 'Mein Vater arbeitet hier er.', 'تكرار الفاعل ضميرًا خطأ وارد من العربية.', 'wortstellung'],
      ['der Bruder', 'die Brüder', 'الأخ', 'Mein Bruder ist zehn.', 'Mein Bruder hat zehn.', 'العمر بـ sein لا بـ haben.', 'lexik-kollokation'],
      ['die Schwester', 'die Schwestern', 'الأخت', 'Meine Schwester lernt Deutsch.', 'Meine Schwester lernt Deutsch sie.', 'لا حاجة لضمير فاعل ثانٍ.', 'wortstellung'],
      ['das Kind', 'die Kinder', 'الطفل', 'Das Kind spielt im Hof.', 'Der Kind spielt im Hof.', 'Kind محايد: das Kind.', 'genus'],
      ['der Sohn', 'die Söhne', 'الابن', 'Mein Sohn ist fünf.', 'Mein Sohn ist fünf Jahre.', 'بعد الخمسة تأتي Jahre ثم alt، ولا تُترك الجملة ناقصة.', 'lexik-kollokation'],
      ['die Tochter', 'die Töchter', 'الابنة', 'Meine Tochter geht zur Schule.', 'Meine Tochter geht in die Schule zu.', 'الشائع: zur Schule gehen، بلا zu في الآخر.', 'präposition'],
      ['die Eltern', '—', 'الوالدان', 'Meine Eltern leben in Tunis.', 'Meine Eltern lebt in Tunis.', 'Eltern جمع فقط، والفعل جمع: leben.', 'plural'],
      ['die Geschwister', '—', 'الأشقاء', 'Ich habe zwei Geschwister.', 'Ich habe zwei Geschwister Leute.', 'Geschwister جمع فقط، بلا Leute بعدها.', 'plural'],
      ['die Großmutter', 'die Großmütter', 'الجدّة', 'Meine Großmutter ist achtzig.', 'Meine Groß Mutter ist achtzig.', 'التركيب كلمة واحدة: Großmutter، والجمع Großmütter.', 'orthographie'],
      ['die Großeltern', '—', 'الجدّان', 'Meine Großeltern wohnen in Nabeul.', 'Meine Großeltern wohnt in Nabeul.', 'Großeltern جمع، والفعل جمع: wohnen.', 'plural'],
      ['der Großvater', 'die Großväter', 'الجدّ', 'Mein Großvater kommt aus Nabeul.', 'Mein Groß Vater kommt aus Nabeul.', 'كلمة واحدة، والأداة der لأن Vater مذكر.', 'orthographie'],
      ['der Onkel', 'die Onkel', 'العمّ · الخال', 'Mein Onkel wohnt in Berlin.', 'Mein Onkel wohnt in Berlin hier.', 'الظرف لا يتكرر في آخر الجملة.', 'wortstellung'],
      ['die Tante', 'die Tanten', 'العمّة · الخالة', 'Meine Tante hat zwei Kinder.', 'Meine Tante hat zwei Kind.', 'بعد العدد فوق واحد يأتي الجمع: Kinder.', 'plural'],
      ['verheiratet', '—', 'متزوّج', 'Ich bin verheiratet.', 'Ich habe verheiratet.', 'الحالة بـ sein لا بـ haben.', 'lexik-kollokation'],
      ['ledig', '—', 'أعزب', 'Sie ist ledig.', 'Sie ist ein ledig.', 'ledig صفة حال، بلا أداة قبلها.', 'deklination']
    ],
    tricks: [
      { trick: 'الأداة تُحفظ مع الكلمة لا مع المعنى', wie: 'der Vater · die Mutter · das Kind: ثلاث كلمات من بيت واحد بثلاث أدوات.', warum: 'المعنى العربي (أب، أم، طفل) لا يعطي الجنس؛ الحفظ بالأداة هو الطريق الوحيد.' , anchor: 'der Vater'},
      { trick: 'التركيب يقلب رأس الكلمة', wie: 'Groß + Mutter = Großmutter، والنوع يتبع الجزء الثاني.', warum: 'الرأس في آخر المركّب، وهو الذي يحدّد الجنس والجمع، لا الجزء الأول.' , anchor: 'die Großmutter'},
      { trick: 'die Eltern لا مفرد لها في الكلام اليومي', wie: 'الأب والأم معًا die Eltern، والفعل جمع دائمًا.', warum: 'العربية تقول «الوالدان» وهي مثنّى، والألمانية ترى فيها جمعًا، فينكسر الفعل.' , anchor: 'die Eltern'}
    ]
  },

  'a0-u1-l6': {
    items: [
      ['die Frage', 'die Fragen', 'السؤال', 'Die Frage ist leicht.', 'Der Frage ist leicht.', 'Frage مؤنث: die Frage.', 'genus'],
      ['die Antwort', 'die Antworten', 'الجواب', 'Die Antwort ist kurz.', 'Die Antwort ist antwortet.', 'Antwort اسم، والجواب يُقال بـ sein لا بفعل مكرر.', 'lexik-kollokation'],
      ['wer', '—', 'مَن', 'Wer ist das?', 'Wer ist das er?', 'بعد فعل sein لا يُكرّر الفاعل ضميرًا.', 'wortstellung'],
      ['was', '—', 'ما · ماذا', 'Was ist das?', 'Was das ist?', 'في السؤال المباشر يأتي الفعل ثانيًا: Was ist das?', 'wortstellung'],
      ['wo', '—', 'أين', 'Wo wohnst du?', 'Wo du wohnst?', 'السؤال المباشر يقدّم الفعل: Wo wohnst du?', 'wortstellung'],
      ['woher', '—', 'من أين', 'Woher kommst du?', 'Von wo du kommst?', 'woher كلمة واحدة، والفعل ثانٍ بعدها.', 'wortstellung'],
      ['wohin', '—', 'إلى أين', 'Wohin gehst du?', 'Wohin du gehst?', 'الحركة إلى مكان تأخذ wohin، والفعل يليها مباشرة.', 'wortstellung'],
      ['wann', '—', 'متى', 'Wann kommst du?', 'Wenn kommst du?', 'wann للسؤال، وwenn للشرط أو «كلّما».', 'lexik-kollokation'],
      ['wie', '—', 'كيف', 'Wie geht es dir?', 'Wie du geht?', 'الفعل بعد wie في الموضع الثاني: Wie geht es dir?', 'wortstellung'],
      ['warum', '—', 'لماذا', 'Warum lernst du Deutsch?', 'Warum du lernst Deutsch?', 'بعد أداة السؤال يأتي الفعل ثم بقية الجملة.', 'wortstellung'],
      ['wie viele', '—', 'كم عدد', 'Wie viele Kinder hast du?', 'Wie viel Kinder hast du?', 'مع المعدود الجمع نقول wie viele، وwie viel لغير المعدود.', 'deklination'],
      ['die Ja/Nein-Frage', 'die Ja/Nein-Fragen', 'سؤال نعم/لا', 'Die Ja/Nein-Frage beginnt mit dem Verb.', 'Die Ja/Nein-Frage beginnt mit das Verb.', 'بعد حرف الجر أو الظرف لا تعود الأداة المعرفة.', 'kasus'],
      ['antworten', 'antwortet · antwortete · hat geantwortet', 'يجيب', 'Ich antworte kurz.', 'Ich antworte auf kurz.', 'antworten لا تحتاج auf إلا مع الرسالة أو السؤال صريحًا.', 'präposition', 'antworte'],
      ['fragen', 'fragt · fragte · hat gefragt', 'يسأل', 'Ich frage den Lehrer.', 'Ich frage der Lehrer.', 'الشخص المسؤول مفعول به: den Lehrer.', 'kasus', 'frage'],
      ['die Nachricht', 'die Nachrichten', 'الرسالة · الخبر', 'Ich schreibe eine Nachricht.', 'Ich schreibe ein Nachricht.', 'Nachricht مؤنث: eine Nachricht.', 'genus']
    ],
    tricks: [
      { trick: 'خريطة الأين الأربعة', wie: 'wo = أين ثابت · woher = من أين · wohin = إلى أين · wann = متى.', warum: 'العربية تجمعها في «أين» مع حرف، والألمانية تفصلها في كلمة واحدة لكل معنى.' , anchor: 'Woher kommst du?'},
      { trick: 'W-Frage: الفعل يطارد الكلمة الأولى', wie: 'Wann | kommst | du؟ الفعل مباشرة بعد أداة السؤال.', warum: 'قاعدة الموضع الثاني لا تُكسر في السؤال، والخطأ يأتي من ترتيب العربية.' , anchor: 'Wann kommst du?'},
      { trick: 'wann للسؤال وwenn للشرط', wie: 'Wann kommst du? · Wenn du kommst, lerne ich.', warum: 'حرف واحد يفصل بينهما، والمعنى يتغيّر كليًا، والخطأ هنا يفسد الجملة لا يجمّلها.' , anchor: 'Wie viele Kinder hast du?'}
    ]
  }
};

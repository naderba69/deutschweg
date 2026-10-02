/* Deutschweg — P3.2 lexical layer, A2 production unit 8 (PRODUCTION.md):
   a2-u3-l1 … a2-u3-l6. Same row format as vocab-a2-06.js. */

module.exports = {
  'a2-u3-l1': {
    items: [
      ['würde', 'würde · würdest · würden', 'صيغة الأدب والتمني', 'Ich würde gern bleiben.', 'Ich würde gern zu bleiben.', 'بعد würde مصدر بلا zu.', 'konjugation'],
      ['würden Sie', '—', 'هل تتفضلون', 'Würden Sie das bitte wiederholen?', 'Würdest Sie das bitte wiederholen?', 'مع Sie: würden.', 'konjugation', 'Würden'],
      ['hätte', 'hätte · hättest · hätten', 'أودّ (من haben)', 'Ich hätte gern einen Kaffee.', 'Ich wäre gern einen Kaffee.', 'الطلب: Ich hätte gern (haben)؛ wäre من sein.', 'konjugation'],
      ['wäre', 'wäre · wärst · wären', 'سيكون (من sein)', 'Das wäre nett.', 'Das würde nett.', 'sein ← wäre؛ لا würde وحدها.', 'konjugation'],
      ['könnte', 'könnte · könntest · könnten', 'يمكن (مهذبًا)', 'Könnten Sie langsamer sprechen?', 'Kannst Sie langsamer sprechen?', 'مع Sie: Könnten.', 'konjugation', 'Könnten'],
      ['dürfte', 'dürfte · dürftest · dürften', 'هل لي (مهذب جدًا)', 'Dürfte ich Sie etwas fragen?', 'Dürfte ich Sie etwas zu fragen?', 'بعد dürfte مصدر بلا zu.', 'konjugation'],
      ['gerne', '—', 'بسرور (صيغة gern)', 'Ich hätte gerne ein Wasser.', 'Ich hätte gernen ein Wasser.', 'gerne أو gern، لا gernen.', 'orthographie'],
      ['langsamer', 'langsam · langsamer', 'أبطأ', 'Könnten Sie bitte langsamer sprechen?', 'Könnten Sie bitte mehr langsam sprechen?', 'المقارنة بـ -er: langsamer.', 'deklination'],
      ['Entschuldigen Sie', '—', 'المعذرة (رسمي)', 'Entschuldigen Sie, wo ist der Bahnhof?', 'Entschuldigung Sie, wo ist der Bahnhof?', 'Entschuldigen Sie (فعل) أو Entschuldigung (اسم)، لا الخلط.', 'lexik-kollokation', 'Entschuldigen'],
      ['reservieren', 'reserviert · reservierte · hat reserviert', 'يحجز (طاولة)', 'Ich würde gern einen Tisch reservieren.', 'Ich würde gern ein Tisch reservieren.', 'Tisch مذكر: einen Tisch.', 'kasus', 'reservieren'],
      ['das Leitungswasser', '—', 'ماء الصنبور', 'Ich hätte gern ein Leitungswasser.', 'Ich hätte gern ein Leitungwasser.', 'Leitungs-wasser بـ s الوصل.', 'orthographie'],
      ['der Fensterplatz', 'die Fensterplätze', 'مقعد عند النافذة', 'Ich hätte gern einen Fensterplatz.', 'Ich hätte gern ein Fensterplatz.', 'Platz مذكر: einen Fensterplatz.', 'kasus'],
      ['der Moment', 'die Momente', 'اللحظة', 'Einen Moment, bitte.', 'Ein Moment, bitte.', 'في الطلب النصب: Einen Moment.', 'kasus'],
      ['aufschreiben', 'schreibt auf · schrieb auf · hat aufgeschrieben', 'يدوّن', 'Könnten Sie das bitte aufschreiben?', 'Könnten Sie das bitte schreiben auf?', 'مع könnten يبقى aufschreiben كاملًا.', 'wortstellung'],
      ['besetzt', '—', 'محجوز · مشغول', 'Ist der Platz noch frei? – Nein, besetzt.', 'Ist der Platz noch frei? – Nein, okkupiert.', 'occupé الفرنسية؛ besetzt.', 'falser-freund'],
      ['unhöflich', '—', 'غير مهذب', 'Ohne bitte klingt es unhöflich.', 'Ohne bitte klingt es unhöfflich.', 'höflich بـ f واحدة.', 'orthographie'],
      ['die Bedienung', 'die Bedienungen', 'الخدمة · النادلة', 'Die Bedienung war freundlich.', 'Der Bedienung war freundlich.', '-ung مؤنثة: die Bedienung.', 'genus'],
      ['noch etwas', '—', 'شيء آخر', 'Möchten Sie noch etwas?', 'Möchten Sie noch ein etwas?', 'etwas بلا أداة.', 'deklination', 'etwas'],
      ['stimmt so', '—', 'احتفظ بالباقي', 'Stimmt so!', 'Stimme so!', 'الصيغة الثابتة: Stimmt so.', 'konjugation', 'Stimmt'],
      ['die Bestellung', 'die Bestellungen', 'الطلبية', 'Ich möchte meine Bestellung ändern.', 'Ich möchte mein Bestellung ändern.', '-ung مؤنثة: meine Bestellung.', 'genus']
    ],
    tricks: [
      { trick: 'würde + المصدر: الطلب المهذب لأي فعل', wie: 'Ich würde gern bleiben. · Würden Sie das wiederholen?', warum: 'صيغة واحدة تحوّل كل فعل إلى رجاء؛ will وmöchte أقل أدبًا في الرسائل والمكاتب.', anchor: 'Würden Sie das bitte wiederholen?' },
      { trick: 'hätte لـ haben وwäre لـ sein وkönnte لـ können', wie: 'Ich hätte gern … · Das wäre nett. · Könnten Sie …?', warum: 'الأفعال الثلاثة لا تأخذ würde بل صيغتها الخاصة؛ würde haben تُفهم لكنها ثقيلة.', anchor: 'Ich hätte gern einen Kaffee.' },
      { trick: 'Könnten Sie؟ لا Kannst Sie', wie: 'Könnten Sie … (Sie) · Könntest du … (du).', warum: 'Sie تأخذ صيغة الجمع دائمًا؛ Kannst Sie أكثر خطأ في طلبات A2.', anchor: 'Könnten Sie langsamer sprechen?' }
    ],
    order: [
      { satz: 'Ich | hätte | gern einen Kaffee.', ar: 'أودّ قهوة.' },
      { satz: 'Ich | würde | gern einen Tisch | reservieren.', ar: 'أودّ حجز طاولة.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل مهذبة في مطعم: احجز طاولة بـ Ich würde gern، اطلب ماءً بـ Ich hätte gern، اطلب من النادل التحدث أبطأ بـ Könnten Sie، اسأل إن كان المقعد شاغرًا، واطلب الحساب.',
      promptDe: 'Ich würde gern einen Tisch … · Ich hätte gern … · Könnten Sie bitte …? · Ist der Platz noch frei? · Die Rechnung, bitte. Stimmt so!',
      points: ['würde + مصدر', 'hätte gern', 'Könnten Sie', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'konjugation'
    }
  },

  'a2-u3-l2': {
    items: [
      ['warten auf', 'wartet · wartete · hat gewartet', 'ينتظر', 'Ich warte auf den Bus.', 'Ich warte für den Bus.', 'warten auf + النصب.', 'präposition', 'warte'],
      ['denken an', 'denkt · dachte · hat gedacht', 'يفكر في', 'Ich denke an dich.', 'Ich denke über dich.', 'denken an + النصب.', 'präposition', 'denke'],
      ['sprechen mit', 'spricht · sprach · hat gesprochen', 'يتحدث مع', 'Ich spreche mit ihr.', 'Ich spreche zu ihr.', 'sprechen mit + داتيف.', 'präposition', 'spreche'],
      ['sich freuen auf', 'freut sich · freute sich · hat sich gefreut', 'يتطلّع إلى', 'Ich freue mich auf morgen.', 'Ich freue mich über morgen.', 'القادم: sich freuen auf.', 'präposition', 'auf'],
      ['sich freuen über', '—', 'يفرح بـ (حدث)', 'Ich freue mich über das Geschenk.', 'Ich freue mich von dem Geschenk.', 'sich freuen über + النصب.', 'präposition', 'über'],
      ['sprechen über', '—', 'يتحدث عن', 'Wir sprechen über das Wetter.', 'Wir sprechen von das Wetter.', 'sprechen über + النصب.', 'präposition', 'über'],
      ['träumen von', 'träumt · träumte · hat geträumt', 'يحلم بـ', 'Ich träume von einem Haus am Meer.', 'Ich träume über ein Haus am Meer.', 'träumen von + داتيف.', 'präposition', 'träume'],
      ['fragen nach', 'fragt · fragte · hat gefragt', 'يسأل عن', 'Ich frage nach dem Weg.', 'Ich frage für den Weg.', 'fragen nach + داتيف.', 'präposition', 'frage'],
      ['sich verabreden mit', 'verabredet sich · verabredete sich · hat sich verabredet', 'يتواعد مع', 'Ich verabrede mich mit Sara.', 'Ich verabrede mich zu Sara.', 'sich verabreden mit + داتيف.', 'präposition', 'verabrede'],
      ['anfangen mit', 'fängt an · fing an · hat angefangen', 'يبدأ بـ', 'Ich fange mit der Arbeit an.', 'Ich fange mit die Arbeit an.', 'mit + داتيف: der Arbeit.', 'kasus', 'fange'],
      ['glauben an', '—', 'يؤمن بـ', 'Ich glaube an dich.', 'Ich glaube in dich.', 'glauben an + النصب.', 'präposition'],
      ['gehören zu', '—', 'ينتمي إلى', 'Das gehört zu meinem Job.', 'Das gehört an meinem Job.', 'gehören zu + داتيف.', 'präposition'],
      ['lachen über', 'lacht · lachte · hat gelacht', 'يضحك على', 'Wir lachen über den Witz.', 'Wir lachen von dem Witz.', 'lachen über + النصب.', 'präposition', 'lachen'],
      ['der Witz', 'die Witze', 'النكتة', 'Der Witz ist lustig.', 'Die Witz ist lustig.', 'Witz مذكر: der Witz.', 'genus'],
      ['achten auf', 'achtet · achtete · hat geachtet', 'ينتبه إلى', 'Achte auf die Ampel!', 'Achte an die Ampel!', 'achten auf + النصب.', 'präposition', 'Achte'],
      ['danken für', '—', 'يشكر على', 'Ich danke dir für die Hilfe.', 'Ich danke dir um die Hilfe.', 'danken für + النصب.', 'präposition', 'für'],
      ['sich treffen mit', '—', 'يلتقي بـ', 'Ich treffe mich mit Freunden.', 'Ich treffe mich zu Freunden.', 'sich treffen mit + داتيف.', 'präposition', 'mit'],
      ['worauf', '—', 'على ماذا (سؤال)', 'Worauf wartest du?', 'Auf was wartest du?', 'السؤال عن الشيء: worauf.', 'lexik-kollokation'],
      ['woran', '—', 'في ماذا (سؤال)', 'Woran denkst du?', 'An was denkst du?', 'woran للشيء.', 'lexik-kollokation'],
      ['darauf', '—', 'على ذلك (إشارة)', 'Ich freue mich darauf.', 'Ich freue mich auf das.', 'الإشارة إلى شيء سبق: darauf.', 'lexik-kollokation']
    ],
    tricks: [
      { trick: 'الفعل يختار حرفه، لا المعنى', wie: 'warten auf · denken an · träumen von · sprechen mit — تُحفظ مع الفعل كوحدة.', warum: 'attendre وpenser à لا تساعدان؛ حرف الجر جزء من الفعل الألماني يُحفظ معه من اليوم الأول.', anchor: 'Ich warte auf den Bus.' },
      { trick: 'auf وan وüber مع هذه الأفعال: نصب', wie: 'warten auf den Bus · denken an dich · sprechen über das Wetter.', warum: 'الحروف المتغيّرة تأخذ النصب مع أفعال الجرّ غالبًا، فتسقط حيرة الداتيف هنا.', anchor: 'Ich denke an dich.' },
      { trick: 'freuen auf للقادم، freuen über لما حدث', wie: 'Ich freue mich auf morgen. · Ich freue mich über das Geschenk.', warum: 'الفعل نفسه بحرفين ومعنيين؛ الخلط يُفهم لكنه يُخصم.', anchor: 'Ich freue mich auf morgen.' }
    ],
    order: [
      { satz: 'Ich | warte | auf den Bus.', ar: 'أنتظر الحافلة.' },
      { satz: 'Wir | sprechen | über das Wetter.', ar: 'نتحدث عن الطقس.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن أسبوعك: ما تنتظره، ما تتطلّع إليه، فيمَ تفكر، مع من تتواعد، وعمّ تتحدث مع أصدقائك.',
      promptDe: 'Ich warte auf … · Ich freue mich auf … · Ich denke an … · Ich verabrede mich mit … · Wir sprechen über …',
      points: ['خمسة أفعال بحروفها', 'auf وan بالنصب', 'mit بالداتيف', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'präposition'
    }
  },

  'a2-u3-l3': {
    items: [
      ['Annas', '—', 'ملك آنا (-s بعد الاسم)', 'Annas Tasche ist hier.', 'Anna ihre Tasche ist hier.', 'الملكية بالاسم: Annas Tasche، لا Anna ihre.', 'kasus'],
      ['Peters', '—', 'ملك بيتر', 'Peters Buch liegt da.', 'Peter Buch liegt da.', '-s بعد الاسم: Peters.', 'kasus'],
      ['der Apostroph', 'die Apostrophe', 'الفاصلة العليا', 'Im Deutschen steht kein Apostroph: Saras Schlüssel.', "Im Deutschen steht ein Apostroph: Sara's Schlüssel.", 'لا فاصلة عليا: Saras.', 'orthographie'],
      ['von (Besitz)', '—', 'ملكية بـ von', 'Das ist die Tasche von Anna.', 'Das ist die Tasche von Annas.', 'بعد von يبقى الاسم بلا -s.', 'kasus', 'von'],
      ['wessen', '—', 'لمن؟ (ملكية)', 'Wessen Tasche ist das?', 'Wem Tasche ist das?', 'السؤال عن المالك: Wessen.', 'kasus'],
      ['der Cousin', 'die Cousins', 'ابن العم أو الخال', 'Alis Cousin wohnt in Sfax.', 'Ali Cousin wohnt in Sfax.', 'Alis Cousin: -s الملكية.', 'kasus'],
      ['die Cousine', 'die Cousinen', 'ابنة العم أو الخال', 'Saras Cousine studiert.', "Sara's Cousine studiert.", 'بلا فاصلة عليا: Saras.', 'orthographie'],
      ['die Nichte', 'die Nichten', 'ابنة الأخ أو الأخت', 'Omars Nichte ist fünf.', 'Omar Nichte ist fünf.', 'Omars: -s الملكية.', 'kasus'],
      ['der Neffe', 'die Neffen', 'ابن الأخ أو الأخت', 'Das ist Leilas Neffe.', 'Das ist Leila ihr Neffe.', 'Leilas Neffe.', 'kasus'],
      ['der Enkel', 'die Enkel', 'الحفيد', 'Omas Enkel heißt Tim.', 'Omas Enkel heißen Tim.', 'مفرد ← heißt.', 'konjugation'],
      ['die Enkelin', 'die Enkelinnen', 'الحفيدة', 'Die Enkelin von Herrn Braun ist hier.', 'Die Enkelin von Herr Braun ist hier.', 'von + داتيف: von Herrn Braun.', 'kasus'],
      ['der Schwiegervater', 'die Schwiegerväter', 'الحمو', 'Saras Schwiegervater ist Arzt.', 'Saras Schwiegervater ist ein Arzt.', 'المهنة بلا أداة: ist Arzt.', 'lexik-kollokation'],
      ['die Schwiegermutter', 'die Schwiegermütter', 'الحماة', 'Meine Schwiegermutter kocht gut.', 'Mein Schwiegermutter kocht gut.', 'Mutter مؤنثة ← meine.', 'genus'],
      ['der Ehemann', 'die Ehemänner', 'الزوج', 'Annas Ehemann heißt Jonas.', 'Anna Ehemann heißt Jonas.', 'Annas: -s الملكية.', 'kasus'],
      ['die Ehefrau', 'die Ehefrauen', 'الزوجة', 'Peters Ehefrau ist Lehrerin.', 'Peters Ehefrau ist eine Lehrerin.', 'المهنة بلا أداة: ist Lehrerin.', 'lexik-kollokation'],
      ['die Geschwister', 'nur Plural', 'الإخوة والأخوات', 'Hast du Geschwister?', 'Hast du Geschwistern?', 'Geschwister جمع بلا -n في الرفع والنصب.', 'plural'],
      ['der Laptop', 'die Laptops', 'الحاسوب المحمول', 'Das ist Alis Laptop.', "Das ist Ali's Laptop.", 'بلا فاصلة عليا: Alis.', 'orthographie'],
      ['die Telefonnummer', 'die Telefonnummern', 'رقم الهاتف', 'Hast du Saras Telefonnummer?', 'Hast du Sara Telefonnummer?', 'Saras: -s الملكية.', 'kasus'],
      ['das Auto von Hans', '—', 'سيارة هانس (اسم ينتهي بـ s)', 'Das ist das Auto von Hans.', 'Das ist Hanss Auto.', "الاسم المنتهي بـ s: von Hans أو Hans' Auto.", 'kasus', 'Hans'],
      ['verheiratet mit', '—', 'متزوج من', 'Anna ist mit Jonas verheiratet.', 'Anna ist zu Jonas verheiratet.', 'verheiratet mit + داتيف.', 'präposition', 'verheiratet']
    ],
    tricks: [
      { trick: 'الاسم + s بلا فاصلة عليا', wie: "Annas Tasche · Peters Buch · Alis Laptop — لا Anna's.", warum: "الإنجليزية تضع الفاصلة العليا والألمانية لا؛ الاسم المنتهي بـ s يأخذها وحده (Hans' Auto).", anchor: 'Annas Tasche ist hier.' },
      { trick: 'Anna ihre Tasche عامية مرفوضة', wie: 'Annas Tasche أو die Tasche von Anna — لا Anna ihre Tasche.', warum: 'الصيغة بالضمير تُسمع في الشارع وتُخصم في الامتحان؛ البديلان الصحيحان قصيران.', anchor: 'Das ist die Tasche von Anna.' },
      { trick: 'wessen للمالك، wem للمتلقي', wie: 'Wessen Tasche ist das? (لمن هذه؟) · Wem gehört die Tasche? (لمن تعود؟)', warum: 'سؤالان بمعنى واحد تقريبًا وبحالتين مختلفتين؛ wessen يفتح الإضافة وwem الداتيف.', anchor: 'Wessen Tasche ist das?' }
    ],
    order: [
      { satz: 'Annas Tasche | ist | hier.', ar: 'حقيبة آنا هنا.' },
      { satz: 'Das | ist | die Tasche von Anna.', ar: 'هذه حقيبة آنا.' }
    ],
    writing: {
      prompt: 'قدّم عائلة صديقك في خمس جمل بملكية الأسماء: زوجته، أطفالهما، ابن عمه، والداه، وشيء يخصّه (حاسوب، سيارة). استعمل -s مرتين وvon مرة.',
      promptDe: 'Alis Frau heißt … · Alis Kinder sind … · Der Cousin von Ali wohnt in … · Alis Eltern … · Das ist Alis …',
      points: ['-s الملكية مرتين بلا فاصلة عليا', 'von مرة', 'wessen أو كلمتان من العائلة', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'kasus'
    }
  },

  'a2-u3-l4': {
    items: [
      ['die Fahrkarte', 'die Fahrkarten', 'تذكرة السفر', 'Eine Fahrkarte nach Berlin, bitte.', 'Ein Fahrkarte nach Berlin, bitte.', 'Fahrkarte مؤنثة: eine.', 'genus'],
      ['hin und zurück', '—', 'ذهابًا وإيابًا', 'Hin und zurück, bitte.', 'Go und return, bitte.', 'hin und zurück.', 'falser-freund', 'zurück'],
      ['die einfache Fahrt', '—', 'رحلة ذهاب فقط', 'Eine einfache Fahrt, bitte.', 'Eine simple Fahrt, bitte.', 'simple إنجليزية؛ einfache Fahrt.', 'falser-freund', 'einfache'],
      ['die Verspätung', 'die Verspätungen', 'التأخير', 'Der Zug hat Verspätung.', 'Der Zug ist late.', 'late إنجليزية؛ hat Verspätung.', 'falser-freund'],
      ['umsteigen', 'steigt um · stieg um · ist umgestiegen', 'يبدّل القطار', 'Wo steigen wir um?', 'Wo change wir den Zug?', 'change إنجليزية؛ umsteigen.', 'falser-freund', 'steigen'],
      ['der Bahnsteig', 'die Bahnsteige', 'الرصيف', 'Der Zug fährt von Bahnsteig drei.', 'Der Zug fahrt von Bahnsteig drei.', 'fahren: fährt.', 'konjugation'],
      ['die Durchsage', 'die Durchsagen', 'الإعلان الصوتي', 'Achtung, eine Durchsage!', 'Achtung, ein Durchsage!', 'Durchsage مؤنثة.', 'genus'],
      ['der Schaffner', 'die Schaffner', 'المراقب في القطار', 'Der Schaffner kontrolliert die Fahrkarten.', 'Der Schaffner kontrolliert die Fahrkartes.', 'الجمع Fahrkarten.', 'plural'],
      ['der Sitzplatz', 'die Sitzplätze', 'مقعد محجوز', 'Ich möchte einen Sitzplatz reservieren.', 'Ich möchte ein Sitzplatz reservieren.', 'Platz مذكر: einen.', 'kasus'],
      ['der Rucksack', 'die Rucksäcke', 'حقيبة الظهر', 'Mein Rucksack ist schwer.', 'Meine Rucksack ist schwer.', 'Rucksack مذكر: mein.', 'genus'],
      ['die Fahrt', 'die Fahrten', 'الرحلة (بالقطار أو السيارة)', 'Die Fahrt dauert drei Stunden.', 'Der Fahrt dauert drei Stunden.', 'Fahrt مؤنثة.', 'genus'],
      ['der Flughafen', 'die Flughäfen', 'المطار', 'Wir fahren zum Flughafen.', 'Wir fahren zu Flughafen.', 'zum Flughafen.', 'präposition'],
      ['das Flugzeug', 'die Flugzeuge', 'الطائرة', 'Das Flugzeug startet um neun.', 'Der Flugzeug startet um neun.', 'Flugzeug محايد.', 'genus'],
      ['der Pass', 'die Pässe', 'جواز السفر', 'Hast du deinen Pass?', 'Hast du dein Pass?', 'Pass مذكر في النصب: deinen.', 'kasus'],
      ['der Zoll', '—', 'الجمارك', 'Am Zoll muss ich warten.', 'Am Zoll ich muss warten.', 'الفعل ثانيًا.', 'wortstellung'],
      ['das Ausland', '—', 'الخارج (البلاد الأجنبية)', 'Ich fahre ins Ausland.', 'Ich fahre in Ausland.', 'ins Ausland (in das).', 'präposition'],
      ['die Jugendherberge', 'die Jugendherbergen', 'بيت الشباب', 'Wir schlafen in der Jugendherberge.', 'Wir schlafen in die Jugendherberge.', 'أين؟ ← in der Jugendherberge.', 'kasus'],
      ['die Autobahn', 'die Autobahnen', 'الطريق السريع', 'Auf der Autobahn gibt es Stau.', 'Auf die Autobahn gibt es Stau.', 'أين؟ ← auf der Autobahn.', 'kasus'],
      ['tanken', 'tankt · tankte · hat getankt', 'يملأ الوقود', 'Wir müssen tanken.', 'Wir müssen tanken machen.', 'tanken فعل وحده.', 'lexik-kollokation'],
      ['der Reifen', 'die Reifen', 'الإطار', 'Der Reifen ist kaputt.', 'Die Reifen ist kaputt.', 'Reifen مذكر في المفرد.', 'genus']
    ],
    tricks: [
      { trick: 'Fahrkarte وhin und zurück وumsteigen: ثلاث كلمات للشبّاك', wie: 'Eine Fahrkarte nach Berlin, hin und zurück. Muss ich umsteigen?', warum: 'بثلاث عبارات يُدار حوار الشباك كاملًا؛ ticket وchange تُفهمان لكنهما تُخصمان.', anchor: 'Eine Fahrkarte nach Berlin, bitte.' },
      { trick: 'Verspätung haben، لا spät sein للقطار', wie: 'Der Zug hat Verspätung. · Ich bin zu spät. (الشخص)', warum: 'القطار «لديه» تأخير والشخص «متأخر»؛ late الإنجليزية تمحو الفرق.', anchor: 'Der Zug hat Verspätung.' },
      { trick: 'zum Flughafen، ins Ausland، in der Jugendherberge', wie: 'zum (zu dem) للمكان المذكر والمحايد · ins (in das) للدخول · in der للمكوث.', warum: 'ثلاثة دمجات تغطي معظم جمل السفر، والسؤال «إلى أين أم أين؟» يحسم.', anchor: 'Ich fahre ins Ausland.' }
    ],
    order: [
      { satz: 'Der Zug | hat | Verspätung.', ar: 'القطار متأخر.' },
      { satz: 'Wir | fahren | zum Flughafen.', ar: 'نذهب إلى المطار.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن رحلة بالقطار: ماذا تشتري في الشباك، هل تبدّل القطار، ماذا يحدث إن تأخر القطار، أين تنام، وماذا تأخذ معك.',
      promptDe: 'Ich kaufe eine Fahrkarte nach …, hin und zurück. · Ich muss in … umsteigen. · Wenn der Zug Verspätung hat, … · Ich schlafe in der … · Ich nehme meinen … mit.',
      points: ['Fahrkarte مع hin und zurück', 'umsteigen منفصلًا أو مع muss', 'Verspätung haben', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'lexik-kollokation'
    }
  },

  'a2-u3-l5': {
    items: [
      ['mir ist schlecht', '—', 'أشعر بالغثيان', 'Mir ist schlecht.', 'Ich bin schlecht.', 'الإحساس بالداتيف: Mir ist schlecht؛ Ich bin schlecht = أنا سيّئ.', 'kasus', 'Mir'],
      ['mir ist schwindelig', '—', 'أشعر بالدوار', 'Mir ist schwindelig.', 'Ich bin schwindelig.', 'بالداتيف: Mir ist schwindelig.', 'kasus', 'schwindelig'],
      ['der Schnupfen', '—', 'الرشح', 'Ich habe Schnupfen.', 'Ich bin Schnupfen.', 'العَرَض بـ haben.', 'lexik-kollokation'],
      ['die Kopfschmerzen', 'nur Plural', 'الصداع', 'Ich habe Kopfschmerzen.', 'Ich habe Kopfschmerz.', 'في الشكوى بالجمع: Kopfschmerzen.', 'plural'],
      ['die Halsschmerzen', 'nur Plural', 'ألم الحلق', 'Seit gestern habe ich Halsschmerzen.', 'Seit gestern ich habe Halsschmerzen.', 'الفعل ثانيًا.', 'wortstellung'],
      ['geschlossen', '—', 'مغلق', 'Die Praxis hat geschlossen.', 'Die Praxis ist closed.', 'closed إنجليزية؛ geschlossen.', 'falser-freund'],
      ['geöffnet', '—', 'مفتوح', 'Die Apotheke ist bis 20 Uhr geöffnet.', 'Die Apotheke ist bis 20 Uhr geöffnen.', 'المشارك: geöffnet.', 'konjugation'],
      ['die Salbe', 'die Salben', 'المرهم', 'Die Salbe hilft gegen die Schmerzen.', 'Die Salbe hilft für die Schmerzen.', 'helfen gegen + النصب.', 'präposition'],
      ['die Tropfen', 'nur Plural', 'القطرات (دواء)', 'Nehmen Sie die Tropfen dreimal täglich.', 'Nehmen Sie die Tropfen dreimals täglich.', 'dreimal بلا -s.', 'lexik-kollokation'],
      ['die Spritze', 'die Spritzen', 'الحقنة', 'Ich habe Angst vor der Spritze.', 'Ich habe Angst vor die Spritze.', 'Angst vor + داتيف.', 'kasus'],
      ['der Blutdruck', '—', 'ضغط الدم', 'Mein Blutdruck ist zu hoch.', 'Mein Blutdruck ist zu hohe.', 'بعد ist بلا نهاية: hoch.', 'deklination'],
      ['das Pflaster', 'die Pflaster', 'اللصقة الطبية', 'Ich brauche ein Pflaster.', 'Ich brauche eine Pflaster.', 'Pflaster محايد.', 'genus'],
      ['die Wunde', 'die Wunden', 'الجرح', 'Die Wunde ist klein.', 'Der Wunde ist klein.', 'Wunde مؤنثة.', 'genus'],
      ['verletzt', '—', 'مصاب', 'Er ist leicht verletzt.', 'Er hat leicht verletzt.', 'الحالة: ist verletzt.', 'konjugation'],
      ['der Notruf', 'die Notrufe', 'نداء الطوارئ', 'Der Notruf ist 112.', 'Die Notruf ist 112.', 'Notruf مذكر.', 'genus'],
      ['der Krankenwagen', 'die Krankenwagen', 'سيارة الإسعاف', 'Rufen Sie einen Krankenwagen!', 'Rufen Sie ein Krankenwagen!', 'Wagen مذكر: einen.', 'kasus'],
      ['das Krankenhaus', 'die Krankenhäuser', 'المستشفى', 'Sie liegt im Krankenhaus.', 'Sie liegt in Krankenhaus.', 'im Krankenhaus.', 'präposition'],
      ['die Allergie', 'die Allergien', 'الحساسية', 'Ich habe eine Allergie gegen Nüsse.', 'Ich habe eine Allergie für Nüsse.', 'Allergie gegen + النصب.', 'präposition'],
      ['die Diät', 'die Diäten', 'الحمية', 'Ich mache eine Diät.', 'Ich mache einen Diät.', 'Diät مؤنثة.', 'genus'],
      ['der Schlaf', '—', 'النوم', 'Schlaf ist wichtig.', 'Der Schlaf sind wichtig.', 'مفرد ← ist.', 'konjugation']
    ],
    tricks: [
      { trick: 'Mir ist schlecht: الإحساس الجسدي بالداتيف', wie: 'Mir ist schlecht. · Mir ist schwindelig. · Mir ist kalt.', warum: 'Ich bin schlecht تعني «أنا سيّئ الخلق»؛ الداتيف وحده ينقل الإحساس.', anchor: 'Mir ist schlecht.' },
      { trick: 'الأعراض بالجمع: -schmerzen', wie: 'Kopfschmerzen · Halsschmerzen · Bauchschmerzen — Ich habe Kopfschmerzen.', warum: 'العربية «صداع» مفرد، والألمانية تجمع الآلام دائمًا في الشكوى.', anchor: 'Ich habe Kopfschmerzen.' },
      { trick: 'gegen للدواء والحساسية، vor للخوف', wie: 'Salbe gegen Schmerzen · Allergie gegen Nüsse · Angst vor der Spritze.', warum: 'ثلاثة تراكيب صحية بحرفين ثابتين؛ für وde لا تدخلان.', anchor: 'Ich habe eine Allergie gegen Nüsse.' }
    ],
    order: [
      { satz: 'Seit gestern | habe | ich Halsschmerzen.', ar: 'منذ أمس لديّ ألم في الحلق.' },
      { satz: 'Die Praxis | hat | geschlossen.', ar: 'العيادة مغلقة.' }
    ],
    writing: {
      prompt: 'اتصل بالعيادة كتابةً في خمس جمل: ماذا تشعر (بالداتيف)، أي أعراض لديك بالجمع، منذ متى، أنك تحتاج موعدًا، وسؤال عن أوقات الفتح.',
      promptDe: 'Mir ist seit gestern schlecht. · Ich habe … und … · Seit … habe ich … · Ich brauche einen Termin. · Ist die Praxis am … geöffnet?',
      points: ['Mir ist …', 'عرضان بالجمع', 'Seit مع الزمن والفعل ثانيًا', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'kasus'
    }
  },

  'a2-u3-l6': {
    items: [
      ['halbtags', '—', 'بدوام نصفي', 'Ich arbeite halbtags.', 'Ich arbeite half.', 'half إنجليزية؛ halbtags.', 'falser-freund'],
      ['ganztags', '—', 'بدوام كامل', 'Meine Frau arbeitet ganztags.', 'Meine Frau arbeitet ganz Tag.', 'ganztags كلمة واحدة.', 'orthographie'],
      ['der Job', 'die Jobs', 'الوظيفة (عامية)', 'Ich suche einen Job.', 'Ich suche ein Job.', 'Job مذكر: einen Job.', 'kasus'],
      ['die Chefin', 'die Chefinnen', 'المديرة', 'Meine Chefin ist nett.', 'Mein Chefin ist nett.', 'Chefin مؤنثة: meine.', 'genus'],
      ['Spaß machen', 'macht Spaß · machte Spaß · hat Spaß gemacht', 'يُمتع', 'Die Arbeit macht Spaß.', 'Die Arbeit ist fun.', 'fun إنجليزية؛ macht Spaß.', 'falser-freund', 'Spaß'],
      ['das Team', 'die Teams', 'الفريق', 'Ich arbeite gern im Team.', 'Ich arbeite gern in Team.', 'im Team.', 'präposition'],
      ['die Firma', 'die Firmen', 'الشركة', 'Die Firma ist in Tunis.', 'Der Firma ist in Tunis.', 'Firma مؤنثة.', 'genus'],
      ['das Büro', 'die Büros', 'المكتب', 'Ich arbeite im Büro.', 'Ich arbeite in Büro.', 'im Büro.', 'präposition'],
      ['der Arbeitsplatz', 'die Arbeitsplätze', 'مكان العمل', 'Mein Arbeitsplatz ist im ersten Stock.', 'Mein Arbeitplatz ist im ersten Stock.', 'Arbeits-platz بـ s الوصل.', 'orthographie'],
      ['die Schicht', 'die Schichten', 'المناوبة', 'Meine Schicht beginnt um sechs.', 'Mein Schicht beginnt um sechs.', 'Schicht مؤنثة.', 'genus'],
      ['der Lohn', 'die Löhne', 'الأجر', 'Der Lohn ist niedrig.', 'Die Lohn ist niedrig.', 'Lohn مذكر.', 'genus'],
      ['verdienen', 'verdient · verdiente · hat verdient', 'يكسب (مالًا)', 'Ich verdiene 1500 Euro im Monat.', 'Ich verdiene 1500 Euros im Monat.', 'Euro بلا -s.', 'plural', 'verdiene'],
      ['der Urlaubstag', 'die Urlaubstage', 'يوم إجازة', 'Ich habe 25 Urlaubstage.', 'Ich habe 25 Urlaubstag.', 'الجمع Urlaubstage.', 'plural', 'Urlaubstage'],
      ['die Kaffeepause', 'die Kaffeepausen', 'استراحة القهوة', 'Um zehn machen wir Kaffeepause.', 'Um zehn wir machen Kaffeepause.', 'الفعل ثانيًا.', 'wortstellung'],
      ['die Kundin', 'die Kundinnen', 'الزبونة', 'Die Kundin wartet.', 'Die Kundin warten.', 'مفرد ← wartet.', 'konjugation'],
      ['bedienen', 'bedient · bediente · hat bedient', 'يخدم (زبونًا)', 'Ich bediene die Kunden.', 'Ich bediene zu den Kunden.', 'bedienen + النصب مباشرة.', 'präposition', 'bediene'],
      ['sich bewerben', 'bewirbt sich · bewarb sich · hat sich beworben', 'يتقدم بطلب', 'Ich bewerbe mich bei einer Firma.', 'Ich bewerbe bei einer Firma.', 'sich bewerben انعكاسي.', 'deklination', 'bewerbe'],
      ['der Arbeitsvertrag', 'die Arbeitsverträge', 'عقد العمل', 'Ich habe einen Arbeitsvertrag.', 'Ich habe ein Arbeitsvertrag.', 'Vertrag مذكر: einen.', 'kasus'],
      ['arbeitslos', '—', 'عاطل عن العمل', 'Mein Bruder ist arbeitslos.', 'Mein Bruder ist arbeitlos.', 'arbeitslos بـ s الوصل.', 'orthographie'],
      ['die Teilzeit', '—', 'الدوام الجزئي', 'Ich arbeite in Teilzeit.', 'Ich arbeite in Teil Zeit.', 'Teilzeit كلمة واحدة.', 'orthographie']
    ],
    tricks: [
      { trick: 'halbtags وganztags وTeilzeit: الدوام بكلمة واحدة', wie: 'Ich arbeite halbtags. · Ich arbeite in Teilzeit. · Sie arbeitet ganztags.', warum: 'half وpart-time تُترجمان حرفيًا خطأً؛ الألمانية تدمج الكلمتين.', anchor: 'Ich arbeite halbtags.' },
      { trick: 'Spaß machen لا fun sein', wie: 'Die Arbeit macht Spaß. · Das macht keinen Spaß.', warum: 'المتعة فعل machen مع اسم، لا صفة بعد sein؛ وfun لا تدخل الجملة الألمانية.', anchor: 'Die Arbeit macht Spaß.' },
      { trick: 'Arbeits- بـ s الوصل: Arbeitsplatz وArbeitsvertrag وarbeitslos', wie: 'Arbeit+s+platz · Arbeit+s+vertrag · arbeit+s+los.', warum: 'حرف الوصل يسقط عند المتعلم في كل مركّب من Arbeit؛ قاعدة واحدة للثلاثة.', anchor: 'Ich habe einen Arbeitsvertrag.' }
    ],
    order: [
      { satz: 'Die Arbeit | macht | Spaß.', ar: 'العمل ممتع.' },
      { satz: 'Ich | bewerbe | mich bei einer Firma.', ar: 'أتقدم بطلب لدى شركة.' }
    ],
    writing: {
      prompt: 'صف عملك أو عملًا تريده في خمس جمل: الدوام (halbtags أو ganztags)، أين تعمل (مكتب أو فريق)، متى تبدأ المناوبة، كم تكسب أو كم يوم إجازة لديك، وهل العمل ممتع.',
      promptDe: 'Ich arbeite … · Ich arbeite im … · Meine Schicht beginnt um … · Ich verdiene … · Die Arbeit macht …',
      points: ['halbtags أو ganztags أو Teilzeit', 'im Büro أو im Team', 'Spaß machen', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'lexik-kollokation'
    }
  }
};

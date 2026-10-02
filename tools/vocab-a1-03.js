/* Deutschweg — P3.2 lexical layer, A1 production unit 3 (PRODUCTION.md):
   a1-u2-l1 … a1-u2-l6. Same row format as vocab-a1-02.js. */

module.exports = {
  'a1-u2-l1': {
    items: [
      ['wollen', 'will · willst · wollen', 'يريد', 'Ich will zu Hause bleiben.', 'Ich wille zu Hause bleiben.', 'مع ich: will بلا نهاية.', 'konjugation', 'will'],
      ['möchten', 'möchte · möchtest · möchten', 'يودّ (مهذب)', 'Ich möchte einen Kaffee.', 'Ich möchtest einen Kaffee.', 'مع ich: möchte؛ möchtest مع du.', 'konjugation', 'möchte'],
      ['bleiben', 'bleibt · blieb · ist geblieben', 'يبقى', 'Wir wollen hier bleiben.', 'Wir wollen hier bleibt.', 'بعد wollen المصدر: bleiben.', 'konjugation'],
      ['zahlen', 'zahlt · zahlte · hat gezahlt', 'يدفع', 'Ich möchte zahlen, bitte.', 'Ich will zahlen, bitte.', 'في المطعم möchte مهذبة؛ will حادّة.', 'register', 'zahlen'],
      ['bestellen', 'bestellt · bestellte · hat bestellt', 'يطلب (في مطعم)', 'Möchten Sie bestellen?', 'Wollen Sie kommandieren?', 'commander الفرنسية؛ bestellen.', 'falser-freund'],
      ['die Rechnung', 'die Rechnungen', 'الحساب · الفاتورة', 'Die Rechnung, bitte.', 'Die Addition, bitte.', "l'addition الفرنسية؛ die Rechnung.", 'falser-freund'],
      ['der Tee', 'die Tees', 'الشاي', 'Möchtest du Tee oder Kaffee?', 'Möchtest du Thé oder Kaffee?', 'thé الفرنسية؛ Tee.', 'falser-freund'],
      ['das Eis', '—', 'المثلّجات', 'Die Kinder wollen ein Eis.', 'Die Kinder wollen einen Eis.', 'Eis محايد: ein Eis.', 'genus'],
      ['der Saft', 'die Säfte', 'العصير', 'Ich möchte einen Saft.', 'Ich möchte ein Saft.', 'Saft مذكر: einen Saft.', 'kasus'],
      ['die Suppe', 'die Suppen', 'الحساء', 'Ich möchte eine Suppe.', 'Ich möchte eine Soupe.', 'soupe الفرنسية؛ Suppe.', 'orthographie'],
      ['lieber', '—', 'بالأحرى · يفضّل', 'Ich möchte lieber Tee.', 'Ich möchte mehr gern Tee.', 'التفضيل بـ lieber (مقارنة gern).', 'lexik-kollokation'],
      ['ins Kino', '—', 'إلى السينما', 'Wir wollen ins Kino gehen.', 'Wir wollen in Kino gehen.', 'ins Kino (in das).', 'präposition', 'Kino'],
      ['der Urlaub', 'die Urlaube', 'الإجازة', 'Ich will im Sommer Urlaub machen.', 'Ich will im Sommer Vakanz machen.', 'vacances الفرنسية؛ der Urlaub.', 'falser-freund'],
      ['das Wochenende', 'die Wochenenden', 'عطلة نهاية الأسبوع', 'Was möchtest du am Wochenende machen?', 'Was möchtest du im Wochenende machen?', 'am Wochenende.', 'präposition'],
      ['schlafen', 'schläft · schlief · hat geschlafen', 'ينام', 'Ich will nur schlafen.', 'Ich will nur schlafe.', 'المصدر: schlafen.', 'konjugation'],
      ['essen', 'isst · aß · hat gegessen', 'يأكل', 'Möchtest du etwas essen?', 'Möchtest du etwas isst?', 'بعد möchtest المصدر: essen.', 'konjugation'],
      ['die Pizza', 'die Pizzen', 'البيتزا', 'Ich will eine Pizza.', 'Ich will ein Pizza.', 'Pizza مؤنثة: eine Pizza.', 'genus'],
      ['etwas', '—', 'شيء ما', 'Ich möchte etwas trinken.', 'Ich möchte eine etwas trinken.', 'etwas بلا أداة.', 'deklination'],
      ['bitte', '—', 'من فضلك', 'Einen Kaffee, bitte.', "Einen Kaffee, s'il vous plaît.", "s'il vous plaît الفرنسية؛ bitte.", 'falser-freund'],
      ['sofort', '—', 'فورًا', 'Ich will sofort zahlen.', 'Ich will zahlen sofort.', 'الظرف قبل المصدر: sofort zahlen.', 'wortstellung']
    ],
    tricks: [
      { trick: 'möchte للطلب المهذب، will للإرادة القوية', wie: 'Ich möchte zahlen. (مطعم) · Ich will zu Hause bleiben. (قرار)', warum: 'will في المطعم تُسمع أمرًا؛ möchte هي صيغة الطلب في كل حوار A1.', anchor: 'Ich möchte zahlen, bitte.' },
      { trick: 'ich will وer will بلا نهاية، مثل kann', wie: 'ich will · du willst · er will · wir wollen — وich möchte · du möchtest · er möchte.', warum: 'الفعلان يتبعان نمط الأفعال الناقصة؛ من حفظ kann يحفظ will.', anchor: 'Ich will zu Hause bleiben.' },
      { trick: 'في المطعم: bestellen وdie Rechnung وbitte — لا الفرنسية', wie: 'Ich möchte bestellen. · Die Rechnung, bitte. — لا commander ولا addition.', warum: 'مفردات المطعم أول ما يُستعار من الفرنسية، والنادل الألماني لا يفهمها.', anchor: 'Die Rechnung, bitte.' }
    ],
    order: [
      { satz: 'Ich | möchte | einen Kaffee.', ar: 'أودّ قهوة.' },
      { satz: 'Wir | wollen | ins Kino | gehen.', ar: 'نريد الذهاب إلى السينما.' }
    ],
    writing: {
      prompt: 'أنت في مقهى مع صديق. اكتب خمس جمل: ماذا تودّ أن تشرب، ماذا يريد صديقك أن يأكل، ماذا تفضّل، ماذا تريدان أن تفعلا في عطلة نهاية الأسبوع، وطلب الحساب.',
      promptDe: 'Ich möchte … · Mein Freund will … · Ich möchte lieber … · Am Wochenende wollen wir … · Die Rechnung, bitte.',
      points: ['möchte مرتين', 'will أو wollen مرة', 'المصدر في آخر الجملة', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'register'
    }
  },

  'a1-u2-l2': {
    items: [
      ['fernsehen', 'sieht fern · sah fern · hat ferngesehen', 'يشاهد التلفاز', 'Ich sehe abends fern.', 'Ich fernsehe abends.', 'منفصل: sehe … fern.', 'wortstellung', 'fern'],
      ['aufräumen', 'räumt auf · räumte auf · hat aufgeräumt', 'يرتّب', 'Ich räume mein Zimmer auf.', 'Ich aufräume mein Zimmer.', 'منفصل: räume … auf.', 'wortstellung', 'räume'],
      ['mitkommen', 'kommt mit · kam mit · ist mitgekommen', 'يأتي معه', 'Kommst du mit?', 'Mitkommst du?', 'في السؤال: Kommst du mit?', 'wortstellung', 'mit'],
      ['ausgehen', 'geht aus · ging aus · ist ausgegangen', 'يخرج للسهر', 'Wir gehen am Samstag aus.', 'Wir ausgehen am Samstag.', 'منفصل: gehen … aus.', 'wortstellung', 'aus'],
      ['anziehen', 'zieht an · zog an · hat angezogen', 'يرتدي', 'Ich ziehe eine Jacke an.', 'Ich anziehe eine Jacke.', 'منفصل: ziehe … an.', 'wortstellung', 'ziehe'],
      ['mitbringen', 'bringt mit · brachte mit · hat mitgebracht', 'يُحضر معه', 'Ich bringe Kuchen mit.', 'Ich bringe Kuchen.', 'mitbringen: السابقة mit في الآخر، وبلاها يتغيّر المعنى.', 'wortstellung', 'bringe'],
      ['zurückkommen', 'kommt zurück · kam zurück · ist zurückgekommen', 'يعود', 'Wann kommst du zurück?', 'Wann zurückkommst du?', 'منفصل: kommst … zurück.', 'wortstellung', 'zurück'],
      ['aufmachen', 'macht auf · machte auf · hat aufgemacht', 'يفتح', 'Mach bitte das Fenster auf.', 'Aufmach bitte das Fenster.', 'الأمر: Mach … auf.', 'wortstellung', 'Mach'],
      ['zumachen', 'macht zu · machte zu · hat zugemacht', 'يغلق', 'Ich mache die Tür zu.', 'Ich mache die Tür.', 'zumachen: zu في الآخر، وبلاها معنى آخر.', 'wortstellung', 'zu'],
      ['ankommen', 'kommt an · kam an · ist angekommen', 'يصل', 'Der Zug kommt um neun an.', 'Der Zug ankommt um neun.', 'منفصل: kommt … an.', 'wortstellung', 'an'],
      ['abfahren', 'fährt ab · fuhr ab · ist abgefahren', 'ينطلق · يغادر', 'Der Bus fährt um acht ab.', 'Der Bus abfährt um acht.', 'منفصل: fährt … ab.', 'wortstellung', 'ab'],
      ['vorbereiten', 'bereitet vor · bereitete vor · hat vorbereitet', 'يحضّر', 'Ich bereite das Essen vor.', 'Ich vorbereite das Essen.', 'منفصل: bereite … vor.', 'wortstellung', 'bereite'],
      ['aufpassen', 'passt auf · passte auf · hat aufgepasst', 'ينتبه', 'Pass bitte auf!', 'Aufpass bitte!', 'الأمر: Pass … auf!', 'wortstellung', 'Pass'],
      ['einsteigen', 'steigt ein · stieg ein · ist eingestiegen', 'يصعد إلى مركبة', 'Wir steigen in den Bus ein.', 'Wir einsteigen in den Bus.', 'منفصل: steigen … ein.', 'wortstellung', 'steigen'],
      ['aussteigen', 'steigt aus · stieg aus · ist ausgestiegen', 'ينزل من مركبة', 'Ich steige am Bahnhof aus.', 'Ich steige am Bahnhof.', 'aussteigen: aus في الآخر.', 'wortstellung', 'steige'],
      ['der Morgen', 'die Morgen', 'الصباح', 'Am Morgen stehe ich auf.', 'Am Morgen ich stehe auf.', 'بعد Am Morgen الفعل ثانيًا.', 'wortstellung'],
      ['der Abend', 'die Abende', 'المساء', 'Am Abend sehe ich fern.', 'Am Abend ich sehe fern.', 'الفعل ثانيًا: sehe ich.', 'wortstellung'],
      ['die Nacht', 'die Nächte', 'الليل', 'In der Nacht schlafe ich.', 'In die Nacht schlafe ich.', 'in der Nacht (داتيف).', 'kasus'],
      ['der Zug', 'die Züge', 'القطار', 'Der Zug fährt um sieben ab.', 'Der Train fährt um sieben ab.', 'train الفرنسية والإنجليزية؛ der Zug.', 'falser-freund'],
      ['das Fenster', 'die Fenster', 'النافذة', 'Ich mache das Fenster auf.', 'Ich mache die Fenster auf.', 'Fenster محايد: das Fenster في المفرد.', 'genus']
    ],
    tricks: [
      { trick: 'السابقة تطير إلى آخر الجملة', wie: 'auf|stehen ← Ich stehe um sieben auf. · an|rufen ← Du rufst mich an.', warum: 'الفعل المنفصل قوس: الجذر ثانيًا والسابقة آخرًا؛ من يلصقهما (ich aufstehe) يكسر الجملة.', anchor: 'Ich räume mein Zimmer auf.' },
      { trick: 'في السؤال والأمر أيضًا: السابقة آخرًا', wie: 'Kommst du mit? · Mach das Fenster auf! · Pass auf!', warum: 'الانفصال لا يخص الجملة الخبرية وحدها؛ كل جملة رئيسية تفصل.', anchor: 'Kommst du mit?' },
      { trick: 'بعد الفعل الناقص يعود المنفصل كلمة واحدة', wie: 'Ich muss früh aufstehen. · Ich will mitkommen. — المصدر لا ينفصل.', warum: 'المصدر في آخر الجملة يحتفظ بسابقته، فالقاعدة الوحيدة: ينفصل فقط حين يُصرَّف.', anchor: 'Ich will mitkommen.' }
    ],
    order: [
      { satz: 'Ich | sehe | abends | fern.', ar: 'أشاهد التلفاز في المساء.' },
      { satz: 'Der Zug | kommt | um neun | an.', ar: 'يصل القطار في التاسعة.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن يومك بأفعال منفصلة: متى تنهض، ماذا ترتدي، ماذا ترتّب، متى تعود إلى البيت، وماذا تفعل في المساء.',
      promptDe: 'Ich stehe um … auf. · Ich ziehe … an. · Ich räume … auf. · Um … komme ich zurück. · Am Abend sehe ich fern.',
      points: ['أربعة أفعال منفصلة والسابقة في الآخر', 'جملة تبدأ بظرف زمن والفعل ثانيًا', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'wortstellung'
    }
  },

  'a1-u2-l3': {
    items: [
      ['die Uhr', 'die Uhren', 'الساعة (التوقيت)', 'Es ist drei Uhr.', 'Es ist drei hour.', 'hour إنجليزية؛ Uhr.', 'falser-freund'],
      ['die Uhrzeit', 'die Uhrzeiten', 'الوقت بالساعة', 'Welche Uhrzeit passt dir?', 'Welche Uhrzeit passt dich?', 'passen + داتيف: dir.', 'kasus'],
      ['Viertel', '—', 'ربع', 'Es ist Viertel nach drei.', 'Es ist quarter past drei.', 'quarter past إنجليزية؛ Viertel nach.', 'falser-freund'],
      ['halb', '—', 'نصف (قبل الساعة التالية)', 'Es ist halb vier.', 'Es ist halb drei.', 'halb vier = 3:30، نصف الطريق إلى الرابعة.', 'lexik-kollokation'],
      ['nach', '—', 'بعد (في الوقت)', 'Es ist zehn nach acht.', 'Es ist acht und zehn.', 'الدقائق بعد الساعة: zehn nach acht.', 'lexik-kollokation'],
      ['vor', '—', 'قبل (في الوقت)', 'Es ist zehn vor neun.', 'Es ist neun weniger zehn.', 'moins الفرنسية لا تُترجم؛ zehn vor neun.', 'lexik-kollokation'],
      ['Wie spät ist es?', '—', 'كم الساعة؟', 'Wie spät ist es?', 'Was ist die Uhr?', 'السؤال الثابت: Wie spät ist es?', 'lexik-kollokation', 'spät'],
      ['um wie viel Uhr', '—', 'في أي ساعة', 'Um wie viel Uhr beginnt der Kurs?', 'Um welche Uhr beginnt der Kurs?', 'السؤال: Um wie viel Uhr.', 'lexik-kollokation', 'viel'],
      ['die Minute', 'die Minuten', 'الدقيقة', 'Der Bus kommt in fünf Minuten.', 'Der Bus kommt in fünf Minute.', 'الجمع Minuten.', 'plural', 'Minuten'],
      ['die Stunde', 'die Stunden', 'الساعة (مدة)', 'Der Kurs dauert zwei Stunden.', 'Der Kurs dauert zwei Uhr.', 'المدة بـ Stunden؛ Uhr للتوقيت.', 'lexik-kollokation', 'Stunden'],
      ['der Tag', 'die Tage', 'اليوم', 'Der Tag hat 24 Stunden.', 'Die Tag hat 24 Stunden.', 'Tag مذكر: der Tag.', 'genus'],
      ['die Woche', 'die Wochen', 'الأسبوع', 'Die Woche hat sieben Tage.', 'Die Woche hat sieben Tag.', 'الجمع Tage.', 'plural'],
      ['pünktlich', '—', 'في الموعد', 'Der Zug ist pünktlich.', 'Der Zug ist ponctuel.', 'ponctuel الفرنسية؛ pünktlich.', 'falser-freund'],
      ['dauern', 'dauert · dauerte · hat gedauert', 'يستغرق', 'Der Film dauert zwei Stunden.', 'Der Film dauern zwei Stunden.', 'مفرد ← dauert.', 'konjugation', 'dauert'],
      ['beginnen', 'beginnt · begann · hat begonnen', 'يبدأ', 'Der Unterricht beginnt um acht.', 'Der Unterricht beginnt an acht.', 'الساعة بـ um.', 'präposition', 'beginnt'],
      ['enden', 'endet · endete · hat geendet', 'ينتهي', 'Der Kurs endet um zwölf.', 'Der Kurs endet um zwölf Uhren.', 'Uhr بلا جمع في التوقيت.', 'plural', 'endet'],
      ['der Mittag', '—', 'الظهر', 'Um zwölf ist Mittag.', 'Um zwölf ist Midi.', 'midi الفرنسية؛ Mittag.', 'falser-freund'],
      ['die Mitternacht', '—', 'منتصف الليل', 'Um Mitternacht schlafe ich.', 'Um Mitternacht ich schlafe.', 'الفعل ثانيًا.', 'wortstellung'],
      ['ungefähr', '—', 'تقريبًا', 'Es ist ungefähr fünf Uhr.', 'Es ist ungefähr um fünf Uhr.', 'مع Es ist لا um: Es ist ungefähr fünf.', 'präposition'],
      ['gleich', '—', 'حالًا', 'Der Film beginnt gleich.', 'Der Film beginnt in gleich.', 'gleich ظرف بلا in.', 'präposition']
    ],
    tricks: [
      { trick: 'halb يسبق الساعة التالية', wie: 'halb vier = 3:30 · halb neun = 8:30 — النصف قبل الوصول.', warum: 'الفرنسية trois heures et demie والعربية «الثالثة والنصف» تسمّيان الساعة الماضية، والألمانية تسمّي القادمة.', anchor: 'Es ist halb vier.' },
      { trick: 'Uhr للتوقيت وStunde للمدة', wie: 'Es ist drei Uhr. · Der Kurs dauert zwei Stunden.', warum: 'كلمة «ساعة» واحدة في العربية، وكلمتان في الألمانية؛ الخلط يعكس المعنى.', anchor: 'Der Kurs dauert zwei Stunden.' },
      { trick: 'nach وvor وViertel: ثلاث كلمات تكفي للساعة', wie: 'zehn nach acht (8:10) · zehn vor neun (8:50) · Viertel nach drei (3:15) · Viertel vor vier (3:45).', warum: 'بهذه الثلاث يقال كل وقت في A1؛ moins الفرنسية وpast الإنجليزية لا تدخلان.', anchor: 'Es ist Viertel nach drei.' }
    ],
    order: [
      { satz: 'Der Kurs | beginnt | um acht.', ar: 'يبدأ الدرس في الثامنة.' },
      { satz: 'Es | ist | halb vier.', ar: 'الساعة الثالثة والنصف.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن مواعيد يومك بالساعة: متى تنهض، متى يبدأ العمل أو الدرس، كم يستغرق، متى تأكل الغداء، ومتى تنام. استعمل Uhr وhalb وViertel.',
      promptDe: 'Ich stehe um … Uhr auf. · Der Kurs beginnt um halb … · Er dauert … Stunden. · Um Viertel nach … esse ich. · Um … schlafe ich.',
      points: ['Uhr مرتين', 'halb مرة وViertel مرة', 'Stunden للمدة', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'lexik-kollokation'
    }
  },

  'a1-u2-l4': {
    items: [
      ['um', '—', 'في (الساعة)', 'Der Kurs ist um acht.', 'Der Kurs ist am acht.', 'الساعة بـ um.', 'präposition'],
      ['am', '—', 'في (اليوم أو جزء اليوم)', 'Ich komme am Montag.', 'Ich komme im Montag.', 'اليوم بـ am.', 'präposition'],
      ['im', '—', 'في (الشهر أو الفصل)', 'Im Mai ist es warm.', 'Am Mai ist es warm.', 'الشهر بـ im.', 'präposition'],
      ['der Montag', 'die Montage', 'الاثنين', 'Am Montag habe ich frei.', 'Am Montag ich habe frei.', 'الفعل ثانيًا: habe ich.', 'wortstellung'],
      ['der Dienstag', 'die Dienstage', 'الثلاثاء', 'Am Dienstag arbeite ich.', 'An Dienstag arbeite ich.', 'am Dienstag (an dem).', 'präposition'],
      ['der Freitag', 'die Freitage', 'الجمعة', 'Am Freitag gehe ich aus.', 'Am Vendredi gehe ich aus.', 'vendredi الفرنسية؛ Freitag.', 'falser-freund'],
      ['der Nachmittag', 'die Nachmittage', 'بعد الظهر', 'Am Nachmittag lerne ich.', 'Im Nachmittag lerne ich.', 'أجزاء اليوم بـ am (إلا in der Nacht).', 'präposition'],
      ['der Monat', 'die Monate', 'الشهر', 'Im nächsten Monat habe ich Urlaub.', 'In nächsten Monat habe ich Urlaub.', 'im nächsten Monat.', 'präposition'],
      ['das Jahr', 'die Jahre', 'السنة', 'Im Jahr 2026 lerne ich Deutsch.', 'In Jahr 2026 lerne ich Deutsch.', 'im Jahr.', 'präposition'],
      ['der Sommer', '—', 'الصيف', 'Im Sommer fahre ich nach Tunis.', 'Am Sommer fahre ich nach Tunis.', 'الفصول بـ im.', 'präposition'],
      ['der Winter', '—', 'الشتاء', 'Im Winter ist es kalt.', 'Im Winter es ist kalt.', 'الفعل ثانيًا: ist es.', 'wortstellung'],
      ['der Mai', '—', 'مايو', 'Im Mai habe ich Geburtstag.', 'Im Mai habe ich Anniversaire.', 'anniversaire الفرنسية؛ Geburtstag.', 'falser-freund'],
      ['der Geburtstag', 'die Geburtstage', 'عيد الميلاد', 'Mein Geburtstag ist am 3. Mai.', 'Mein Geburtstag ist am 3 Mai.', 'الترتيبي بنقطة: am 3. Mai.', 'orthographie'],
      ['die Verabredung', 'die Verabredungen', 'الموعد مع صديق', 'Ich habe eine Verabredung um sieben.', 'Ich habe ein Rendez-vous um sieben.', 'rendez-vous الفرنسية؛ Verabredung أو Termin.', 'falser-freund'],
      ['von … bis', '—', 'من … إلى', 'Ich arbeite von acht bis vier.', 'Ich arbeite von acht zu vier.', 'von … bis، لا zu.', 'präposition', 'bis'],
      ['ab', '—', 'ابتداءً من', 'Ab Montag habe ich Urlaub.', 'Ab Montag ich habe Urlaub.', 'بعد Ab Montag الفعل ثانيًا.', 'wortstellung'],
      ['der Feiertag', 'die Feiertage', 'يوم عطلة رسمية', 'Am Feiertag ist alles geschlossen.', 'Am Feiertag sind alles geschlossen.', 'alles مفرد ← ist.', 'konjugation'],
      ['frei haben', 'hat frei · hatte frei · hat frei gehabt', 'يكون في عطلة', 'Am Sonntag habe ich frei.', 'Am Sonntag bin ich frei.', 'frei haben للعطلة؛ frei sein يعني غير مرتبط.', 'lexik-kollokation', 'frei'],
      ['der Kalender', 'die Kalender', 'التقويم · المفكرة', 'Ich schreibe den Termin in den Kalender.', 'Ich schreibe den Termin in dem Kalender.', 'الحركة: in den Kalender.', 'kasus'],
      ['heute Abend', '—', 'هذا المساء', 'Heute Abend gehe ich ins Kino.', 'Heute Abend ich gehe ins Kino.', 'بعد Heute Abend الفعل ثانيًا.', 'wortstellung', 'Abend']
    ],
    tricks: [
      { trick: 'um للساعة، am لليوم، im للشهر والفصل', wie: 'um acht · am Montag · im Mai — من الأصغر إلى الأكبر.', warum: 'الفرنسية تقول à huit heures وlundi وen mai، فتختلط الثلاثة؛ قاعدة الحجم تحسمها.', anchor: 'Ich komme am Montag.' },
      { trick: 'أجزاء اليوم بـ am، إلا الليل', wie: 'am Morgen · am Nachmittag · am Abend · in der Nacht.', warum: 'الليل مؤنث ويأخذ in؛ الاستثناء الوحيد يُحفظ وحده فلا يُعمَّم.', anchor: 'Am Nachmittag lerne ich.' },
      { trick: 'التاريخ بنقطة بعد الرقم', wie: 'am 3. Mai (تُقرأ am dritten Mai) · am 1. Januar.', warum: 'النقطة تحوّل الرقم إلى ترتيبي؛ بلاها يقرأ الألماني «ثلاثة مايو» ويعدّه خطأ في الرسالة.', anchor: 'Mein Geburtstag ist am 3. Mai.' }
    ],
    order: [
      { satz: 'Am Montag | habe | ich frei.', ar: 'يوم الاثنين لديّ عطلة.' },
      { satz: 'Im Sommer | fahre | ich nach Tunis.', ar: 'في الصيف أسافر إلى تونس.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن أسبوعك: متى تعمل (من … إلى)، متى لديك عطلة، موعد مع صديق (اليوم والساعة)، متى عيد ميلادك، وماذا تفعل هذا المساء.',
      promptDe: 'Ich arbeite von … bis … · Am … habe ich frei. · Am … um … habe ich eine Verabredung. · Mein Geburtstag ist am … · Heute Abend …',
      points: ['um وam وim مرة لكل منها', 'von … bis', 'التاريخ بنقطة', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'präposition'
    }
  },

  'a1-u2-l5': {
    items: [
      ['in', '—', 'في (داخل)', 'Ich wohne in der Stadt.', 'Ich wohne auf der Stadt.', 'داخل المدينة: in der Stadt.', 'präposition'],
      ['an', '—', 'عند · على (جانبي)', 'Das Bild hängt an der Wand.', 'Das Bild hängt in der Wand.', 'على السطح العمودي: an der Wand.', 'präposition'],
      ['auf', '—', 'على (فوق سطح)', 'Das Buch liegt auf dem Tisch.', 'Das Buch liegt an dem Tisch.', 'فوق السطح الأفقي: auf dem Tisch.', 'präposition'],
      ['neben', '—', 'بجانب', 'Die Bank ist neben der Apotheke.', 'Die Bank ist next der Apotheke.', 'next إنجليزية؛ neben.', 'falser-freund'],
      ['unter', '—', 'تحت', 'Die Katze schläft unter dem Tisch.', 'Die Katze schläft unter den Tisch.', 'المكان (أين؟) بالداتيف: unter dem Tisch.', 'kasus'],
      ['über', '—', 'فوق (معلّق)', 'Die Lampe hängt über dem Tisch.', 'Die Lampe hängt über den Tisch.', 'أين؟ ← داتيف: über dem Tisch.', 'kasus'],
      ['hinter', '—', 'خلف', 'Das Auto steht hinter dem Haus.', 'Das Auto steht hinter das Haus.', 'أين؟ ← داتيف: hinter dem Haus.', 'kasus'],
      ['zwischen', '—', 'بين', 'Der Stuhl steht zwischen dem Tisch und dem Bett.', 'Der Stuhl steht zwischen dem Tisch oder dem Bett.', 'zwischen … und.', 'lexik-kollokation'],
      ['liegen', 'liegt · lag · hat gelegen', 'يكون موضوعًا أفقيًا', 'Das Handy liegt auf dem Bett.', 'Das Handy legt auf dem Bett.', 'liegen (أين؟) لا legen.', 'lexik-kollokation', 'liegt'],
      ['stehen', 'steht · stand · hat gestanden', 'يقف · يكون موضوعًا عموديًا', 'Der Schrank steht an der Wand.', 'Der Schrank liegt an der Wand.', 'الخزانة واقفة: steht.', 'lexik-kollokation', 'steht'],
      ['hängen', 'hängt · hing · hat gehangen', 'يكون معلّقًا', 'Die Jacke hängt an der Tür.', 'Die Jacke hängt an die Tür.', 'أين؟ ← داتيف: an der Tür.', 'kasus', 'hängt'],
      ['die Wand', 'die Wände', 'الجدار', 'Das Bild ist an der Wand.', 'Das Bild ist an dem Wand.', 'Wand مؤنثة: an der Wand.', 'genus'],
      ['das Bett', 'die Betten', 'السرير', 'Das Bett steht im Schlafzimmer.', 'Das Bett steht in Schlafzimmer.', 'im Schlafzimmer (in dem).', 'präposition'],
      ['der Schrank', 'die Schränke', 'الخزانة', 'Der Schrank ist neben dem Fenster.', 'Der Schrank ist neben das Fenster.', 'neben + داتيف للمكان: dem Fenster.', 'kasus'],
      ['die Küche', 'die Küchen', 'المطبخ', 'Ich bin in der Küche.', 'Ich bin in die Küche.', 'أين؟ ← in der Küche.', 'kasus'],
      ['das Bad', 'die Bäder', 'الحمّام', 'Das Bad ist links.', 'Das Bad ist à gauche.', 'à gauche الفرنسية؛ links.', 'falser-freund'],
      ['die Bank', 'die Banken', 'المصرف', 'Die Bank ist neben der Post.', 'Die Bank ist neben die Post.', 'neben + داتيف: der Post.', 'kasus'],
      ['die Post', '—', 'مكتب البريد', 'Die Post ist in der Hauptstraße.', 'Die Post ist in die Hauptstraße.', 'أين؟ ← in der Hauptstraße.', 'kasus'],
      ['die Stadt', 'die Städte', 'المدينة', 'Die Stadt ist schön.', 'Der Stadt ist schön.', 'Stadt مؤنثة: die Stadt.', 'genus'],
      ['zu Hause', '—', 'في البيت', 'Ich bin zu Hause.', 'Ich bin in Hause.', 'في البيت: zu Hause؛ ونحو البيت nach Hause.', 'präposition', 'Hause']
    ],
    tricks: [
      { trick: 'in داخل، auf فوق، an ملاصق', wie: 'in der Stadt · auf dem Tisch · an der Wand.', warum: 'الفرنسية sur وdans وà لا تطابق الثلاثة واحدًا لواحد، والصورة الذهنية (داخل، فوق، ملاصق) تحسم.', anchor: 'Das Buch liegt auf dem Tisch.' },
      { trick: 'أين؟ ← داتيف: dem وder', wie: 'auf dem Tisch · in der Küche · neben dem Fenster — لا den ولا die مع «أين».', warum: 'سؤال «أين» بلا حركة يأخذ الداتيف دائمًا في A1؛ النصب يأتي مع «إلى أين» لاحقًا.', anchor: 'Die Katze schläft unter dem Tisch.' },
      { trick: 'liegen وstehen وhängen بدل «يوجد»', wie: 'Das Buch liegt … · Die Flasche steht … · Die Jacke hängt …', warum: 'الألماني يصف وضع الشيء لا وجوده فقط؛ ist مقبولة لكن الأفعال الثلاثة علامة A1 حقيقي.', anchor: 'Die Jacke hängt an der Tür.' }
    ],
    order: [
      { satz: 'Das Buch | liegt | auf dem Tisch.', ar: 'الكتاب على الطاولة.' },
      { satz: 'Die Bank | ist | neben der Post.', ar: 'المصرف بجانب البريد.' }
    ],
    writing: {
      prompt: 'صف غرفتك في خمس جمل: أين السرير، أين الخزانة، ماذا يوجد على الطاولة، ماذا يُعلَّق على الجدار، وأين أنت الآن.',
      promptDe: 'Das Bett steht … · Der Schrank ist neben … · Auf dem Tisch liegt … · An der Wand hängt … · Ich bin jetzt …',
      points: ['in وauf وan مرة لكل منها', 'dem أو der بعد حرف المكان', 'liegen أو stehen أو hängen', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'präposition'
    }
  },

  'a1-u2-l6': {
    items: [
      ['der Brief', 'die Briefe', 'الرسالة', 'Ich schreibe zwei Briefe.', 'Ich schreibe zwei Briefs.', 'الجمع -e: Briefe.', 'plural', 'Briefe'],
      ['der Schuh', 'die Schuhe', 'الحذاء', 'Die Schuhe sind neu.', 'Die Schuhs sind neu.', 'الجمع Schuhe.', 'plural', 'Schuhe'],
      ['das Heft', 'die Hefte', 'الدفتر', 'Ich brauche drei Hefte.', 'Ich brauche drei Heft.', 'بعد العدد الجمع: Hefte.', 'plural', 'Hefte'],
      ['die Blume', 'die Blumen', 'الزهرة', 'Die Blumen sind schön.', 'Die Blumes sind schön.', 'المؤنث على -e يأخذ -n: Blumen.', 'plural', 'Blumen'],
      ['die Zeitung', 'die Zeitungen', 'الجريدة', 'Ich lese zwei Zeitungen.', 'Ich lese zwei Zeitung.', '-ung ← -en: Zeitungen.', 'plural', 'Zeitungen'],
      ['die Tür', 'die Türen', 'الباب', 'Das Haus hat zwei Türen.', 'Das Haus hat zwei Türe.', 'الجمع Türen.', 'plural', 'Türen'],
      ['die Straße', 'die Straßen', 'الشارع', 'Die Straßen sind leer.', 'Die Straßes sind leer.', 'الجمع Straßen.', 'plural', 'Straßen'],
      ['das Bild', 'die Bilder', 'الصورة · اللوحة', 'Die Bilder hängen an der Wand.', 'Die Bilds hängen an der Wand.', 'المحايد القصير -er: Bilder.', 'plural', 'Bilder'],
      ['das Ei', 'die Eier', 'البيضة', 'Ich kaufe sechs Eier.', 'Ich kaufe sechs Eis.', 'الجمع Eier (Eis = مثلجات).', 'plural', 'Eier'],
      ['das Glas', 'die Gläser', 'الكأس', 'Die Gläser sind sauber.', 'Die Glasen sind sauber.', 'الجمع Gläser بتغيير الحركة و-er.', 'plural', 'Gläser'],
      ['das Hotel', 'die Hotels', 'الفندق', 'Die Hotels sind teuer.', 'Die Hotele sind teuer.', 'الأسماء الدخيلة -s: Hotels.', 'plural', 'Hotels'],
      ['das Café', 'die Cafés', 'المقهى', 'In Tunis gibt es viele Cafés.', 'In Tunis gibt es viele Café.', 'الجمع Cafés.', 'plural', 'Cafés'],
      ['der Park', 'die Parks', 'الحديقة العامة', 'Die Parks sind groß.', 'Die Parke sind groß.', 'الجمع Parks.', 'plural', 'Parks'],
      ['der Garten', 'die Gärten', 'الحديقة المنزلية', 'Die Gärten sind grün.', 'Die Gartens sind grün.', 'تغيير الحركة فقط: Gärten.', 'plural', 'Gärten'],
      ['der Vogel', 'die Vögel', 'الطائر', 'Die Vögel singen.', 'Die Vogels singen.', 'تغيير الحركة فقط: Vögel.', 'plural', 'Vögel'],
      ['das Zimmer', 'die Zimmer', 'الغرفة', 'Die Wohnung hat drei Zimmer.', 'Die Wohnung hat drei Zimmern.', 'Zimmer لا يتغيّر في الجمع؛ Zimmern داتيف فقط.', 'plural'],
      ['das Mädchen', 'die Mädchen', 'الفتاة', 'Die Mädchen spielen.', 'Die Mädchens spielen.', '-chen لا يتغيّر في الجمع.', 'plural'],
      ['der Löffel', 'die Löffel', 'الملعقة', 'Ich brauche zwei Löffel.', 'Ich brauche zwei Löffeln.', '-el لا يتغيّر في الجمع.', 'plural'],
      ['viele', '—', 'كثير من', 'Ich habe viele Bücher.', 'Ich habe viel Bücher.', 'قبل الجمع المعدود: viele.', 'deklination'],
      ['die Leute', 'nur Plural', 'الناس', 'Die Leute sind nett.', 'Die Leute ist nett.', 'Leute جمع ← sind.', 'konjugation']
    ],
    tricks: [
      { trick: 'المؤنث على -e يأخذ -n، و-ung تأخذ -en', wie: 'Blume ← Blumen · Straße ← Straßen · Zeitung ← Zeitungen.', warum: 'نصف أسماء A1 مؤنثة، وهذه القاعدة الواحدة تغطيها كلها بلا استثناء تقريبًا.', anchor: 'Ich lese zwei Zeitungen.' },
      { trick: '-s للدخيل فقط: Hotels وCafés وParks', wie: 'Hotels · Cafés · Parks · Autos — لا Briefs ولا Schuhs.', warum: 'الفرنسية والإنجليزية تجمعان بـ s، فيعمّمها المتعلم؛ في الألمانية هي للكلمات المستعارة وحدها.', anchor: 'Die Hotels sind teuer.' },
      { trick: '-er و-el و-chen لا تتغيّر', wie: 'das Zimmer ← die Zimmer · der Löffel ← die Löffel · das Mädchen ← die Mädchen.', warum: 'الأداة وحدها تكشف الجمع هنا؛ إضافة نهاية تُنتج كلمة غير موجودة.', anchor: 'Die Wohnung hat drei Zimmer.' }
    ],
    order: [
      { satz: 'Ich | kaufe | sechs Eier.', ar: 'أشتري ست بيضات.' },
      { satz: 'Die Wohnung | hat | drei Zimmer.', ar: 'الشقة فيها ثلاث غرف.' }
    ],
    writing: {
      prompt: 'اكتب قائمة تسوق في خمس جمل بالجمع: ماذا تشتري (بيض، زهور، دفاتر)، كم عددها، ماذا يوجد في المدينة (مقاهٍ، حدائق)، وكم غرفة في شقتك.',
      promptDe: 'Ich kaufe sechs … · Ich brauche zwei … · In meiner Stadt gibt es viele … · Die Wohnung hat … Zimmer. · Die Leute sind …',
      points: ['خمسة أسماء في الجمع بنهاية صحيحة', 'جمع بـ -s لكلمة دخيلة', 'جمع بلا تغيير (Zimmer أو Löffel)', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'plural'
    }
  }
};

function U(id, ar, de, goalDe, goalAr, facts, lex, model, say, hwDe, hwAr) {
  return {
    id, level: 'B2', ar, de, fam: 'pruefstrategie', goalDe, goalAr, facts, lex, model, say, hwDe, hwAr,
    kind: 'workshop'
  };
}
module.exports = [
  U('b2-w01', 'تحليل نص', 'Textanalyse',
    'Am Ende trennst du Beschreibung und Deutung',
    'في النهاية تفصل الوصف عن التأويل.',
    [
      ['zuerst beschreiben', 'الوصف قبل الحكم', 'الحكم أولًا يخسر النص', 'ich deute zuerst', 'الترتيب خطأ'],
      ['dann deuten', 'التأويل بعد الشاهد', 'بلا شاهد يبقى رأيًا', 'die Deutung ohne Stelle', 'الشاهد ناقص'],
      ['die Stelle nennen', 'الموضع يُذكر', 'النص كله ليس شاهدًا', 'der ganze Text ist der Beleg', 'الشاهد محدد'],
      ['keine Ursache erfinden', 'السبب لا يُخترع', 'النص قد لا يقوله', 'der Text meint sicher die Ursache', 'السبب غير مذكور']
    ],
    [
      ['Zuerst beschreibe ich den Abschnitt.', 'أولًا أصف المقطع', 'Zuerst deute ich den Abschnitt', 'الوصف أولًا', 'beschreibe'],
      ['Dann deute ich die Stelle.', 'ثم أؤول الموضع', 'Dann erfinde ich die Ursache', 'التأويل بعد الشاهد', 'deute'],
      ['Die Stelle steht im zweiten Absatz.', 'الموضع في الفقرة الثانية', 'Der ganze Text ist der Beleg', 'الشاهد محدد', 'Stelle'],
      ['Die Quelle nennt keine Ursache.', 'المصدر لا يذكر سببًا', 'Der Text meint sicher die Ursache', 'لا سبب بلا نص', 'Ursache']
    ],
    'Zuerst beschreibe ich. Dann deute ich die Stelle.',
    'Die Quelle nennt keine Ursache.',
    'Analysiere morgen einen Absatz in zwei Sätzen.',
    'غدًا حلّل فقرة في جملتين.'),

  U('b2-w02', 'ورشة كتابة: موقف', 'Erörterung',
    'Am Ende schreibst du These, Argument und Beispiel',
    'في النهاية تكتب دعوى وحجة ومثالًا.',
    [
      ['die These', 'الدعوى جملة واحدة', 'مقدمة بلا دعوى فراغ', 'der Text beginnt ohne These', 'الدعوى لازمة'],
      ['ein Argument', 'حجة واحدة قوية', 'خمس حجج ضعيفة تخسر', 'fünf Argumente ohne Beispiel', 'حجة ثم مثال'],
      ['das Beispiel dient', 'المثال يخدم الدعوى', 'المثال البديل ليس حجة', 'ein Beispiel ersetzt die Begründung', 'المثال لا يغني'],
      ['der Schluss nimmt Stellung', 'الخاتمة موقف', 'التلخيص وحده لا يكفي', 'der Schluss wiederholt nur', 'الخاتمة تتّخذ موقفًا']
    ],
    [
      ['Die These lautet: Zeit ist knapp.', 'الدعوى: الوقت ضيق', 'Der Text beginnt ohne These', 'الدعوى لازمة', 'These'],
      ['Das Argument braucht ein Beispiel.', 'الحجة تحتاج مثالًا', 'Fünf Argumente ohne Beispiel', 'حجة ثم مثال', 'Argument'],
      ['Ein Beispiel ersetzt keine Begründung.', 'المثال لا يغني عن التعليل', 'Ein Beispiel reicht als Begründung', 'المثال يخدم فقط', 'Beispiel'],
      ['Der Schluss nimmt Stellung.', 'الخاتمة تتّخذ موقفًا', 'Der Schluss wiederholt nur', 'الخاتمة موقف', 'Stellung']
    ],
    'Die These lautet: Zeit ist knapp. Der Schluss nimmt Stellung.',
    'Ein Beispiel ersetzt keine Begründung.',
    'Schreibe morgen These und ein Argument.',
    'غدًا اكتب دعوى وحجة.'),

  U('b2-w03', 'نقاش', 'Diskussion',
    'Am Ende räumst du einen Punkt ein und bleibst bei deiner Sache',
    'في النهاية تقرّ بنقطة وتبقى عند جوهر موقفك.',
    [
      ['einräumen', 'الإقرار قوة', 'الرفض الكلي ضعيف', 'ich weise alles zurück', 'الإقرار أدق'],
      ['bedingt zustimmen', 'الموافقة المشروطة', 'نعم الكامل قد يكون كذبًا', 'ich stimme völlig zu ohne Grenze', 'الشرط يحمي الصدق'],
      ['in der Sache', 'الجوهر يُسمّى', 'الخلاف الشخصي ليس حجة', 'du verstehst mich nicht', 'الجوهر لا الشخص'],
      ['ausreden lassen', 'إكمال الكلام', 'المقاطعة ليست فوزًا', 'ich unterbreche sofort', 'الإكمال أولى']
    ],
    [
      ['Den Punkt gebe ich zu.', 'أسلّم بهذه النقطة', 'Ich weise alles zurück', 'الإقرار أدق', 'gebe'],
      ['Dem kann ich nur bedingt zustimmen.', 'لا أوافق إلا جزئيًا', 'Ich stimme völlig zu ohne Grenze', 'الموافقة مشروطة', 'bedingt'],
      ['In der Sache bleiben wir uneinig.', 'في الجوهر نبقى مختلفين', 'Du verstehst mich nicht', 'الجوهر لا الشخص', 'Sache'],
      ['Lassen Sie mich ausreden.', 'دعوني أكمل', 'Ich unterbreche sofort', 'الإكمال أولى', 'ausreden']
    ],
    'Den Punkt gebe ich zu. In der Sache bleiben wir uneinig.',
    'Dem kann ich nur bedingt zustimmen.',
    'Übe morgen Einräumen und Widerspruch.',
    'غدًا تدرّب على الإقرار والمعارضة.'),

  U('b2-w04', 'سماع محاضرة', 'Vortrag',
    'Am Ende fängst du Gliederung und eine Grenze',
    'في النهاية تلتقط الهيكل وحدًا.',
    [
      ['die Gliederung', 'الهيكل قبل التفاصيل', 'كلمة واحدة لا تكفي', 'ein Wort ist der Vortrag', 'الهيكل أولًا'],
      ['vor dem Hören', 'السؤال قبل الصوت', 'البلا سؤال يضيع', 'ich höre ohne Aufgabe', 'السؤال أولًا'],
      ['eine Grenze', 'ما لم يُقل يُعلَّم', 'لا تكمّل من عندك', 'ich ergänze die fehlende Ursache', 'النقص يُعلَّم لا يُملأ'],
      ['nach dem Hören', 'المراجعة على السؤال', 'الإحساس ليس جوابًا', 'ich antworte nach Gefühl', 'السؤال لا الإحساس']
    ],
    [
      ['Ich notiere die Gliederung.', 'أدوّن الهيكل', 'Ein Wort ist der Vortrag', 'الهيكل أولًا', 'Gliederung'],
      ['Ich lese die Aufgabe vor dem Hören.', 'أقرأ المطلوب قبل السماع', 'Ich höre ohne Aufgabe', 'السؤال أولًا', 'vor'],
      ['Was fehlt, ergänze ich nicht.', 'ما نقص لا أكمّله من عندي', 'Ich ergänze die fehlende Ursache', 'النقص يُعلَّم', 'fehlt'],
      ['Nach dem Hören prüfe ich die Frage.', 'بعد السماع أفحص السؤال', 'Ich antworte nach Gefühl', 'السؤال لا الإحساس', 'Frage']
    ],
    'Ich notiere die Gliederung. Was fehlt, ergänze ich nicht.',
    'Nach dem Hören prüfe ich die Frage.',
    'Höre morgen einen kurzen Vortrag und notiere drei Punkte.',
    'غدًا استمع إلى حديث قصير ودوّن ثلاث نقاط.'),

  U('b2-w05', 'تقنية الامتحان: قراءة', 'Lesetechnik',
    'Am Ende liest du die Aufgabe vor dem Text',
    'في النهاية تقرأ المطلوب قبل النص.',
    [
      ['Aufgabe zuerst', 'المطلوب يحدد القراءة', 'النص أولًا يضيّع الوقت', 'ich lese den Text blind', 'المطلوب أولًا'],
      ['Schlüsselwörter', 'الكلمات المفتاحية تُعلَّم', 'كل كلمة ليست مفتاحًا', 'ich markiere alles', 'التعليم انتقائي'],
      ['nicht übertragen', 'لا نقل من العربية', 'الجملة الألمانية تُعاد صياغتها', 'ich übersetze Wort für Wort', 'الصياغة لا النقل'],
      ['die Zeit teilen', 'الوقت يُقسَّم', 'جزء واحد لا يبتلع الكل', 'ein Teil nimmt alle Minuten', 'القسمة تحمي الأقسام']
    ],
    [
      ['Zuerst lese ich die Aufgabe.', 'أولًا أقرأ المطلوب', 'Ich lese den Text blind', 'المطلوب أولًا', 'Zuerst'],
      ['Ich markiere Schlüsselwörter.', 'أعلّم الكلمات المفتاحية', 'Ich markiere alles', 'التعليم انتقائي', 'Schlüsselwörter'],
      ['Ich übertrage nicht aus dem Arabischen.', 'لا أنقل من العربية', 'Ich übersetze Wort für Wort', 'الصياغة لا النقل', 'übertrage'],
      ['Ich teile die Zeit.', 'أقسّم الوقت', 'Ein Teil nimmt alle Minuten', 'القسمة تحمي الأقسام', 'teile']
    ],
    'Zuerst lese ich die Aufgabe. Ich teile die Zeit.',
    'Ich übertrage nicht aus dem Arabischen.',
    'Lies morgen eine Aufgabe und markiere drei Wörter.',
    'غدًا اقرأ مطلوبًا وعلّم ثلاث كلمات.'),

  U('b2-w06', 'ورشة كتابة: شكوى', 'Beschwerdebrief',
    'Am Ende schreibst du Tatsache, Folge und Bitte',
    'في النهاية تكتب واقعة ونتيجة وطلبًا.',
    [
      ['die Tatsache', 'الواقعة قابلة للتحقق', 'الإهانة ليست واقعة', 'Sie sind unfähig', 'الإهانة تخسر المهمة'],
      ['die Folge', 'النتيجة بعد الواقعة', 'الطلب بلا نتيجة ضعيف', 'ich bitte ohne Folge', 'النتيجة تسند الطلب'],
      ['die Bitte', 'الطلب محدد', 'الغضب ليس طلبًا', 'ich will Rache', 'الطلب حل'],
      ['der Ton', 'النبرة موضوعية', 'السخرية لا ترفع الدرجة', 'das ist lächerlich als einziger Satz', 'النبرة جزء من النص']
    ],
    [
      ['Die Lieferung kam zwei Tage zu spät.', 'وصل التسليم متأخرًا يومين', 'Sie sind unfähig', 'الواقعة لا الإهانة', 'spät'],
      ['Die Folge war ein verpasster Termin.', 'النتيجة موعد فائت', 'Ich bitte ohne Folge', 'النتيجة تسند الطلب', 'Folge'],
      ['Ich bitte um eine neue Lieferung.', 'أطلب تسليمًا جديدًا', 'Ich will Rache', 'الطلب حل', 'bitte'],
      ['Der Ton bleibt sachlich.', 'النبرة تبقى موضوعية', 'Das ist lächerlich', 'النبرة جزء من النص', 'sachlich']
    ],
    'Die Lieferung kam zu spät. Ich bitte um eine Lösung.',
    'Der Ton bleibt sachlich.',
    'Schreibe morgen Tatsache und Bitte.',
    'غدًا اكتب واقعة وطلبًا.'),

  U('b2-w07', 'نقاش: عمل', 'Arbeit diskutieren',
    'Am Ende nennst du Vorteil, Nachteil und Grenze',
    'في النهاية تسمّي حسنة ومساوئ وحدًا.',
    [
      ['einerseits', 'الحسنة تُسمّى', 'المدح وحده ليس نقاشًا', 'nur Vorteile', 'المساوئ لازمة'],
      ['andererseits', 'المساوئ تُسمّى', 'الذم وحده ليس نقاشًا', 'nur Nachteile', 'الحسنة لازمة'],
      ['die Grenze', 'أين لا يصلح الحل', 'الحل الكلي كسل', 'das gilt für alle Berufe', 'الحد لازم'],
      ['ein Beispiel aus der Arbeit', 'مثال عمل واحد', 'الشعار لا يكفي', 'Arbeit ist wichtig ohne Beispiel', 'المثال يسند']
    ],
    [
      ['Einerseits spart das Zeit.', 'من جهة هذا يوفّر وقتًا', 'Nur Vorteile zählen', 'المساوئ لازمة أيضًا', 'Einerseits'],
      ['Andererseits kostet es Kontrolle.', 'من جهة أخرى يكلف رقابة', 'Nur Nachteile zählen', 'الحسنة لازمة أيضًا', 'Andererseits'],
      ['Die Grenze ist das Team vor Ort.', 'الحد هو الفريق في المكان', 'Das gilt für alle Berufe', 'الحد لازم', 'Grenze'],
      ['Ein Beispiel ist die Nachtschicht.', 'مثال هو الوردية الليلية', 'Arbeit ist wichtig ohne Beispiel', 'المثال يسند', 'Beispiel']
    ],
    'Einerseits spart das Zeit. Andererseits kostet es Kontrolle.',
    'Die Grenze ist das Team vor Ort.',
    'Nenne morgen Vorteil, Nachteil und Grenze.',
    'غدًا سمِّ حسنة ومساوئ وحدًا.'),

  U('b2-w08', 'سماع لهجة', 'Dialekt',
    'Am Ende unterscheidest du und ahmst nicht nach',
    'في النهاية تميّز ولا تقلّد.',
    [
      ['verstehen nicht nachahmen', 'الفهم غير التقليد', 'التقليد في الامتحان مخاطرة', 'ich ahme den Dialekt nach', 'التمييز لا التقليد'],
      ['österreichisch', 'النمساوي يُعلَّم كفرق', 'لا كخطأ', 'das ist falsches Deutsch', 'الفرق ليس خطأً دراسيًا'],
      ['schweizerisch', 'السويسري يُعلَّم كفرق', 'لا كعجز', 'ich verstehe nichts und stoppe', 'فرق واحد يكفي للملاحظة'],
      ['Standard in der Prüfung', 'الامتحان على المعيار', 'اللهجة للتمييز فقط', 'ich antworte im Dialekt', 'الجواب معياري']
    ],
    [
      ['Ich verstehe, ich ahme nicht nach.', 'أفهم ولا أقلّد', 'Ich ahme den Dialekt nach', 'التمييز لا التقليد', 'ahme'],
      ['Das klingt österreichisch.', 'هذا يبدو نمساويًا', 'Das ist falsches Deutsch', 'الفرق ليس خطأً', 'österreichisch'],
      ['In der Schweiz sagt man oft Grüezi.', 'في سويسرا يُقال غالبًا Grüezi', 'Ich verstehe nichts und stoppe', 'ملاحظة لا توقف', 'Schweiz'],
      ['In der Prüfung bleibe ich beim Standard.', 'في الامتحان أبقى على المعيار', 'Ich antworte im Dialekt', 'الجواب معياري', 'Standard']
    ],
    'Ich verstehe, ich ahme nicht nach.',
    'In der Prüfung bleibe ich beim Standard.',
    'Markiere morgen einen Unterschied, ohne ihn nachzuahmen.',
    'غدًا علّم فرقًا بلا تقليد.'),

  U('b2-w09', 'تحليل رسم', 'Grafik',
    'Am Ende beschreibst du einen Unterschied bevor du deutest',
    'في النهاية تصف فرقًا قبل التأويل.',
    [
      ['die Grafik zeigt', 'الرسم يُظهر لا يُثبت السبب', 'السبب خطوة ثانية', 'die Grafik beweist warum', 'الرسم لا يُثبت السبب'],
      ['auffälliger Unterschied', 'الفرق اللافت يُسمّى', 'كل رقم ليس لافتًا', 'ich nenne jede Zahl', 'اللافت واحد'],
      ['im Vergleich', 'المقارنة إطار', 'الرقم العاري ضعيف', 'die Zahl steht allein', 'المقارنة لازمة'],
      ['dann deuten', 'التأويل بعد الوصف', 'العكس يخسر النقاط', 'ich deute zuerst', 'الوصف أولًا']
    ],
    [
      ['Die Grafik zeigt einen Anstieg.', 'الرسم يُظهر ارتفاعًا', 'Die Grafik beweist warum', 'الرسم لا يُثبت السبب', 'zeigt'],
      ['Auffällig ist der Unterschied.', 'اللافت هو الفرق', 'Ich nenne jede Zahl', 'اللافت واحد', 'Auffällig'],
      ['Im Vergleich zu Zweitausendzehn.', 'مقارنة بعام ألفين وعشرة', 'Die Zahl steht allein', 'المقارنة لازمة', 'Vergleich'],
      ['Danach deute ich vorsichtig.', 'بعد ذلك أؤول بحذر', 'Ich deute zuerst', 'الوصف أولًا', 'Danach']
    ],
    'Die Grafik zeigt einen Anstieg. Auffällig ist der Unterschied.',
    'Die Grafik zeigt einen Anstieg.',
    'Beschreibe morgen eine Grafik in zwei Sätzen.',
    'غدًا صف رسمًا في جملتين.'),

  U('b2-w10', 'ورشة كتابة: تلخيص', 'Zusammenfassung',
    'Am Ende fasst du zusammen ohne neue Wertung',
    'في النهاية تلخص بلا تقييم جديد.',
    [
      ['keine neue Wertung', 'التلخيص لا يحكم', 'الحكم مهمة أخرى', 'meiner Meinung nach im Summary', 'التقييم يخرج'],
      ['die Struktur behalten', 'ترتيب النص يُحفظ', 'الخلط يضيّع', 'ich sortiere nach meinem Geschmack', 'ترتيب النص أولًا'],
      ['kurz', 'أقصر من الأصل', 'النسخ ليس تلخيصًا', 'ich schreibe den Text ab', 'التلخيص أقصر'],
      ['das heißt', 'المعنى يُعاد', 'نفس الجمل نسخ', 'dieselben Sätze', 'الإعادة بأدوات أخرى']
    ],
    [
      ['Ich füge keine Wertung hinzu.', 'لا أضيف تقييمًا', 'Meiner Meinung nach ist das schlecht', 'التقييم يخرج من التلخيص', 'Wertung'],
      ['Ich behalte die Reihenfolge.', 'أحفظ الترتيب', 'Ich sortiere nach meinem Geschmack', 'ترتيب النص أولًا', 'Reihenfolge'],
      ['Die Zusammenfassung ist kürzer.', 'التلخيص أقصر', 'Ich schreibe den Text ab', 'النسخ ليس تلخيصًا', 'kürzer'],
      ['Das heißt, der Plan scheitert.', 'هذا يعني أن الخطة تفشل', 'Dieselben Sätze noch einmal', 'الإعادة بأدوات أخرى', 'heißt']
    ],
    'Ich füge keine Wertung hinzu. Die Zusammenfassung ist kürzer.',
    'Ich behalte die Reihenfolge.',
    'Fasse morgen einen Absatz ohne Wertung zusammen.',
    'غدًا لخّص فقرة بلا تقييم.'),

  U('b2-w11', 'نقاش: إعلام', 'Medien diskutieren',
    'Am Ende trennst du Reichweite und Wahrheit',
    'في النهاية تفصل الانتشار عن الصحة.',
    [
      ['Reichweite', 'الانتشار ليس صحة', 'الكثرة لا تُثبت', 'viele Leser machen es wahr', 'الكثرة ليست برهانًا'],
      ['Quelle', 'المصدر يُسأل', 'المنصة ليست مصدرًا', 'das Netz ist die Quelle', 'المصدر محدد'],
      ['Überschrift', 'العنوان قد يبالغ', 'لا تغنِ عن النص', 'die Überschrift reicht', 'العنوان وعد'],
      ['ein Gegenbeispiel', 'مثال مضاد واحد', 'التجاهل ضعف', 'ich ignoriere das Gegenbeispiel', 'المضاد يُذكر']
    ],
    [
      ['Viele Leser machen es nicht wahr.', 'كثرة القراء لا تجعله صحيحًا', 'Viele Leser machen es wahr', 'الكثرة ليست برهانًا', 'wahr'],
      ['Die Plattform ist nicht die Quelle.', 'المنصة ليست المصدر', 'Das Netz ist die Quelle', 'المصدر محدد', 'Quelle'],
      ['Die Überschrift reicht nicht.', 'العنوان لا يكفي', 'Die Überschrift reicht', 'العنوان وعد', 'Überschrift'],
      ['Ein Gegenbeispiel gehört dazu.', 'المثال المضاد جزء من النقاش', 'Ich ignoriere das Gegenbeispiel', 'المضاد يُذكر', 'Gegenbeispiel']
    ],
    'Viele Leser machen es nicht wahr. Die Überschrift reicht nicht.',
    'Die Plattform ist nicht die Quelle.',
    'Trenne morgen Reichweite und Wahrheit.',
    'غدًا افصل الانتشار عن الصحة.'),

  U('b2-w12', 'سماع مقابلة', 'Interview B2',
    'Am Ende fängst du Position und Einschränkung',
    'في النهاية تلتقط موقفًا وتقييدًا.',
    [
      ['die Position', 'الموقف جملة', 'الكلمة المفتاح ليست موقفًا', 'ein Wort ist die Position', 'الموقف جملة'],
      ['die Einschränkung', 'التقييد يُلتقط', 'المطلق قد يكون خطأ السمع', 'er sagt immer ohne Grenze', 'التقييد مهم'],
      ['zwei Durchgänge', 'السماع مرتان حسب الجزء', 'لا تعتمد على ثالثة غير موجودة', 'ich warte auf das dritte Mal', 'لا تفترض الثالثة'],
      ['Notiz nach der Frage', 'الملاحظة تخدم السؤال', 'النسخ يضيّع الموقف', 'ich schreibe jedes Wort', 'الملاحظة انتقائية']
    ],
    [
      ['Die Position ist ein Satz.', 'الموقف جملة', 'Ein Wort ist die Position', 'الموقف جملة', 'Position'],
      ['Die Einschränkung gehört dazu.', 'التقييد جزء من الجواب', 'Er sagt immer ohne Grenze', 'التقييد مهم', 'Einschränkung'],
      ['Ich plane zwei Durchgänge.', 'أخطّط لجولتَين', 'Ich warte auf das dritte Mal', 'لا تفترض الثالثة', 'zwei'],
      ['Ich notiere zur Frage.', 'أدوّن بما يخدم السؤال', 'Ich schreibe jedes Wort', 'الملاحظة انتقائية', 'notiere']
    ],
    'Die Position ist ein Satz. Die Einschränkung gehört dazu.',
    'Ich plane zwei Durchgänge.',
    'Höre morgen eine kurze Antwort und notiere Position und Grenze.',
    'غدًا استمع إلى جواب قصير ودوّن الموقف والحد.'),

  U('b2-w13', 'تقنية: كتابة موقوتة', 'Timed writing',
    'Am Ende planst du Gliederung vor dem ersten Satz',
    'في النهاية تخطّط للهيكل قبل الجملة الأولى.',
    [
      ['Gliederung zuerst', 'الهيكل قبل الكتابة', 'الجملة الأولى بلا خطة تضيّع', 'ich schreibe sofort los', 'الخطة أولًا'],
      ['zwei Argumente', 'حجتان لا خمس', 'الكثرة تضيّع الخاتمة', 'fünf Argumente in siebzig Minuten', 'حجتان'],
      ['Schluss im Kopf', 'الخاتمة تُجهَّز إن ضاق الوقت', 'الخاتمة المحذوفة تكلف', 'ich lasse den Schluss weg', 'الخاتمة لازمة'],
      ['Verbzweit prüfen', 'بعد الكتابة فحص الموضع', 'السرعة لا تعفي', 'ich prüfe nichts', 'الفحص جزء من الوقت']
    ],
    [
      ['Ich plane die Gliederung vor dem Text.', 'أخطّط للهيكل قبل النص', 'Ich schreibe sofort los', 'الخطة أولًا', 'plane'],
      ['Im Hauptteil zwei Argumente.', 'في المتن حجتان', 'Fünf Argumente in siebzig Minuten', 'حجتان تكفيان', 'zwei'],
      ['Den Schluss habe ich im Kopf.', 'الخاتمة جاهزة في ذهني', 'Ich lasse den Schluss weg', 'الخاتمة لازمة', 'Schluss'],
      ['Nach dem Schreiben prüfe ich Verbzweit.', 'بعد الكتابة أفحص موضع الفعل', 'Ich prüfe nichts', 'الفحص جزء من الوقت', 'prüfe']
    ],
    'Ich plane die Gliederung vor dem Text. Den Schluss habe ich im Kopf.',
    'Nach dem Schreiben prüfe ich Verbzweit.',
    'Schreibe morgen zwanzig Minuten mit Gliederung.',
    'غدًا اكتب عشرين دقيقة بهيكل.'),

  U('b2-w14', 'تحليل تعليق', 'Kommentaranalyse',
    'Am Ende markierst du Behauptung und Beleg',
    'في النهاية تعلّم الادعاء والشاهد.',
    [
      ['Behauptung', 'الادعاء يُعلَّم', 'لا يُصدَّق لأنه مكتوب', 'gedruckt heißt wahr', 'المكتوب ليس برهانًا'],
      ['Beleg', 'الشاهد يُسأل', 'المثال قد لا يسند', 'jedes Beispiel trägt', 'الشاهد يُفحص'],
      ['Unterstellung', 'الافتراض يُسمّى', 'لا يُمرَّر كخبر', 'der Autor weiß es sicher', 'الافتراض ليس خبرًا'],
      ['Ton', 'النبرة قد تخفي ضعف الحجة', 'السخرية ليست دليلًا', 'der Witz beweist es', 'النبرة ليست برهانًا']
    ],
    [
      ['Gedruckt heißt nicht wahr.', 'المطبوع لا يعني الصحيح', 'Gedruckt heißt wahr', 'المكتوب ليس برهانًا', 'nicht'],
      ['Nicht jedes Beispiel trägt.', 'ليس كل مثال يسند', 'Jedes Beispiel trägt', 'الشاهد يُفحص', 'trägt'],
      ['Der Autor unterstellt, dass alle zustimmen.', 'يفترض الكاتب أن الجميع يوافق', 'Der Autor weiß es sicher', 'الافتراض ليس خبرًا', 'unterstellt'],
      ['Der Witz beweist es nicht.', 'النكتة لا تُثبت', 'Der Witz beweist es', 'النبرة ليست برهانًا', 'beweist']
    ],
    'Gedruckt heißt nicht wahr. Der Witz beweist es nicht.',
    'Der Autor unterstellt, dass alle zustimmen.',
    'Markiere morgen Behauptung und Beleg.',
    'غدًا علّم ادعاءً وشاهدًا.'),

  U('b2-w15', 'نقاش: بيئة', 'Umwelt diskutieren',
    'Am Ende trennst du Maßnahme und Wirkung',
    'في النهاية تفصل الإجراء عن الأثر.',
    [
      ['die Maßnahme', 'الإجراء يُسمّى', 'الشعار ليس إجراءً', 'wir müssen etwas tun', 'الإجراء محدد'],
      ['die Wirkung', 'الأثر يُسأل', 'النية ليست أثرًا', 'die Absicht reicht', 'الأثر غير النية'],
      ['wer zahlt', 'الكلفة تُسمّى', 'الحل بلا كلفة ناقص', 'das kostet nichts und gilt für alle', 'الكلفة جزء من الحجة'],
      ['die Grenze', 'أين يفشل الإجراء', 'النجاح الكلي كسل', 'die Maßnahme löst alles', 'الحد لازم']
    ],
    [
      ['Die Maßnahme ist die Mülltrennung.', 'الإجراء هو فرز النفايات', 'Wir müssen etwas tun', 'الإجراء محدد', 'Maßnahme'],
      ['Die Absicht reicht nicht.', 'النية لا تكفي', 'Die Absicht reicht', 'الأثر غير النية', 'reicht'],
      ['Die Kosten gehören zur Frage.', 'الكلفة جزء من السؤال', 'Das kostet nichts und gilt für alle', 'الكلفة تُسمّى', 'Kosten'],
      ['Die Maßnahme löst nicht alles.', 'الإجراء لا يحل كل شيء', 'Die Maßnahme löst alles', 'الحد لازم', 'alles']
    ],
    'Die Maßnahme ist die Mülltrennung. Die Absicht reicht nicht.',
    'Die Kosten gehören zur Frage.',
    'Nenne morgen Maßnahme, Wirkung und Grenze.',
    'غدًا سمِّ إجراءً وأثرًا وحدًا.'),

  U('b2-w16', 'سماع أخبار', 'Nachrichten',
    'Am Ende trennst du Meldung und Kommentar',
    'في النهاية تفصل الخبر عن التعليق.',
    [
      ['die Meldung', 'الخبر ما حدث', 'التعليق ما يُراد', 'der Kommentar ist die Meldung', 'التعليق ليس خبرًا'],
      ['wer spricht', 'المتكلم يُعلَّم', 'الصوت ليس حقيقة', 'die Stimme beweist es', 'المتكلم يُذكر'],
      ['Zahl prüfen', 'الرقم يُراجع', 'الرقم الكبير قد يكون عنوانًا', 'die große Zahl reicht', 'الرقم يُفحص'],
      ['einmal reicht nicht immer', 'إن سُمح بسماع ثانٍ فللسؤال', 'لا للراحة', 'ich höre zum Genuss', 'السماع يخدم السؤال']
    ],
    [
      ['Die Meldung ist nicht der Kommentar.', 'الخبر ليس التعليق', 'Der Kommentar ist die Meldung', 'التعليق ليس خبرًا', 'Meldung'],
      ['Wer spricht, wird notiert.', 'المتكلم يُدوَّن', 'Die Stimme beweist es', 'المتكلم يُذكر', 'spricht'],
      ['Die große Zahl reicht nicht.', 'الرقم الكبير لا يكفي', 'Die große Zahl reicht', 'الرقم يُفحص', 'Zahl'],
      ['Ich höre zur Frage.', 'أسمع من أجل السؤال', 'Ich höre zum Genuss', 'السماع يخدم السؤال', 'Frage']
    ],
    'Die Meldung ist nicht der Kommentar. Ich höre zur Frage.',
    'Die große Zahl reicht nicht.',
    'Trenne morgen eine Meldung von einem Kommentar.',
    'غدًا افصل خبرًا عن تعليق.'),

  U('b2-w17', 'ورشة: رسالة رسمية', 'Formeller Brief B2',
    'Am Ende schreibst du Anlass, Bitte und Frist',
    'في النهاية تكتب المناسبة والطلب والأجل.',
    [
      ['der Anlass', 'المناسبة في السطر الأول', 'المقدمة الطويلة تضيّع', 'drei Höflichkeitssätze vor dem Anlass', 'المناسبة أولًا'],
      ['die Bitte', 'الطلب محدد', 'العتاب ليس طلبًا', 'ich bin enttäuscht als einzige Bitte', 'الطلب فعل'],
      ['die Frist', 'الأجل يُذكر', 'بلا أجل يبقى الطلب مفتوحًا', 'irgendwann reicht', 'الأجل محدد'],
      ['Sie bleiben Sie', 'المقام Sie حتى في الغضب', 'du يكسر الرسالة', 'du musst das sofort tun', 'الرسمي Sie']
    ],
    [
      ['Der Anlass steht im ersten Satz.', 'المناسبة في الجملة الأولى', 'Drei Höflichkeitssätze vor dem Anlass', 'المناسبة أولًا', 'Anlass'],
      ['Ich bitte um eine Antwort bis Freitag.', 'أطلب جوابًا حتى الجمعة', 'Ich bin enttäuscht als einzige Bitte', 'الطلب محدد', 'bitte'],
      ['Die Frist ist Freitag.', 'الأجل الجمعة', 'Irgendwann reicht', 'الأجل محدد', 'Freitag'],
      ['Sie bleiben Sie.', 'المخاطبة تبقى Sie', 'Du musst das sofort tun', 'الرسمي Sie', 'Sie']
    ],
    'Ich bitte um eine Antwort bis Freitag. Sie bleiben Sie.',
    'Die Frist ist Freitag.',
    'Schreibe morgen Anlass, Bitte und Frist.',
    'غدًا اكتب مناسبة وطلبًا وأجلًا.'),

  U('b2-w18', 'تقنية: تحدّث', 'Sprechtechnik',
    'Am Ende nutzt du drei Minuten mit Gliederung',
    'في النهاية تستعمل ثلاث دقائق بهيكل.',
    [
      ['drei Minuten', 'الوقت حد', 'عشر دقائق ليست أفضل', 'länger ist besser', 'الحد ثلاث'],
      ['Gliederung nennen', 'الهيكل يُقال', 'المستمع يحتاج خريطة', 'ich rede ohne Karte', 'الهيكل يُعلَن'],
      ['neu formulieren', 'التلعثم يُعاد لا يُكرَّر صمتًا', 'الصمت الطويل يكلف', 'ich schweige bis es kommt', 'الإعادة أولى'],
      ['das Wort bitten', 'طلب الكلام إطار', 'المقاطعة ليست دخولًا', 'ich falle ins Wort', 'طلب الكلام أولى']
    ],
    [
      ['Ich habe drei Minuten, nicht zehn.', 'عندي ثلاث دقائق لا عشر', 'Länger ist besser', 'الحد ثلاث', 'drei'],
      ['Ich nenne die Gliederung.', 'أذكر الهيكل', 'Ich rede ohne Karte', 'الهيكل يُعلَن', 'nenne'],
      ['Wenn ich stocke, formuliere ich neu.', 'إذا تلعثمت أعيد الصياغة', 'Ich schweige bis es kommt', 'الإعادة أولى', 'formuliere'],
      ['Ich bitte um das Wort.', 'أطلب الكلام', 'Ich falle ins Wort', 'طلب الكلام أولى', 'bitte']
    ],
    'Ich habe drei Minuten. Ich nenne die Gliederung.',
    'Wenn ich stocke, formuliere ich neu.',
    'Sprich morgen drei Minuten mit drei Teilen.',
    'غدًا تحدّث ثلاث دقائق بثلاثة أجزاء.'),

  U('b2-w19', 'نقاش: تعليم', 'Bildung',
    'Am Ende vergleichst du zwei Wege mit einer Grenze',
    'في النهاية تقارن مسارين بحد.',
    [
      ['zwei Wege', 'مساران لا عشرة', 'الكثرة تضيّع الحكم', 'zehn Modelle ohne Satz', 'مساران'],
      ['wer profitiert', 'من يستفيد يُسمّى', 'الجميع كلمة كسولة', 'alle profitieren gleich', 'المستفيد محدد'],
      ['wer zahlt', 'من يدفع يُسمّى', 'المجاني قد لا يكون مجانيًا', 'das ist kostenlos für alle', 'الكلفة تُسأل'],
      ['die Grenze', 'أين لا يصلح النموذج', 'التعميم يخسر', 'das gilt für jedes Land', 'الحد لازم']
    ],
    [
      ['Zwei Wege reichen.', 'مساران يكفيان', 'Zehn Modelle ohne Satz', 'مساران لا عشرة', 'Zwei'],
      ['Nicht alle profitieren gleich.', 'ليس الجميع يستفيد بالتساوي', 'Alle profitieren gleich', 'المستفيد محدد', 'gleich'],
      ['Wer zahlt, gehört zur Frage.', 'من يدفع جزء من السؤال', 'Das ist kostenlos für alle', 'الكلفة تُسأل', 'zahlt'],
      ['Das gilt nicht für jedes Land.', 'هذا لا يسري على كل بلد', 'Das gilt für jedes Land', 'الحد لازم', 'nicht']
    ],
    'Zwei Wege reichen. Das gilt nicht für jedes Land.',
    'Wer zahlt, gehört zur Frage.',
    'Vergleiche morgen zwei Bildungswege mit einer Grenze.',
    'غدًا قارن مسارين تعليميين بحد.'),

  U('b2-w20', 'تحليل موقفين', 'Pro und Kontra',
    'Am Ende stellst du beide Seiten vor dem Urteil dar',
    'في النهاية تعرض الجانبين قبل الحكم.',
    [
      ['beide Seiten', 'الجانبان قبل الحكم', 'الحكم أولًا يعمي', 'ich urteile zuerst', 'الجانبان أولًا'],
      ['das stärkere Argument', 'الحجة الأقوى تُسمّى', 'التساوي الكاذب ضعف', 'beide Seiten sind immer gleich', 'القوة تُسمّى'],
      ['ein Beispiel je Seite', 'مثال لكل جانب', 'الشعار لا يكفي', 'Pro ist gut, Kontra ist schlecht', 'المثال يسند'],
      ['das Urteil am Schluss', 'الحكم في الآخر', 'الحكم في الأول يُغلق القراءة', 'das Urteil steht in der ersten Zeile', 'الحكم أخيرًا']
    ],
    [
      ['Zuerst beide Seiten.', 'أولًا الجانبان', 'Ich urteile zuerst', 'الجانبان قبل الحكم', 'Zuerst'],
      ['Nicht beide Seiten sind gleich stark.', 'الجانبان ليسا بنفس القوة', 'Beide Seiten sind immer gleich', 'القوة تُسمّى', 'stark'],
      ['Jede Seite braucht ein Beispiel.', 'كل جانب يحتاج مثالًا', 'Pro ist gut, Kontra ist schlecht', 'المثال يسند', 'Beispiel'],
      ['Das Urteil steht am Schluss.', 'الحكم في الآخر', 'Das Urteil steht in der ersten Zeile', 'الحكم أخيرًا', 'Schluss']
    ],
    'Zuerst beide Seiten. Das Urteil steht am Schluss.',
    'Nicht beide Seiten sind gleich stark.',
    'Stelle morgen beide Seiten dar, dann urteile.',
    'غدًا اعرض الجانبين ثم احكم.')
];

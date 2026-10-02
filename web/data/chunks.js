/* 100 whole phrases per level. Memorised as units, not assembled in the mouth. */
(function (root) {
  function take(text) {
    return text.trim().split('\n').filter(Boolean).map(line => {
      const i = line.indexOf('|');
      return { de: line.slice(0, i), ar: line.slice(i + 1) };
    });
  }
  root.DW_CHUNKS = {
    A1: take(`
Guten Morgen!|صباح الخير
Guten Tag!|نهارك سعيد
Guten Abend!|مساء الخير
Gute Nacht!|تصبح على خير
Auf Wiedersehen!|إلى اللقاء
Tschüss!|سلام بين الأصدقاء
Wie heißt du?|ما اسمك؟
Ich heiße Sara.|أنا اسمي سارة
Woher kommst du?|من أين أنت؟
Ich komme aus Tunesien.|أنا من تونس
Wie geht es Ihnen?|كيف حالكم؟
Danke, gut.|شكرًا، بخير
Wie spät ist es?|كم الساعة؟
Es ist drei Uhr.|الساعة الثالثة
Um wie viel Uhr?|في أي ساعة؟
Ich habe Zeit.|عندي وقت
Ich habe keine Zeit.|ليس عندي وقت
Was kostet das?|بكم هذا؟
Das macht zehn Euro.|هذا بعشرة يورو
Ich möchte zahlen.|أود أن أدفع
Die Rechnung, bitte.|الحساب، من فضلك
Einen Kaffee, bitte.|قهوة، من فضلك
Ich nehme das.|سآخذ هذا
Haben Sie Milch?|هل عندكم حليب؟
Wo ist die Toilette?|أين المرحاض؟
Gehen Sie geradeaus.|امضِ مستقيمًا
Dann links.|ثم يسارًا
Hier ist es.|هنا هو
Ich wohne in Sousse.|أسكن في سوسة
Meine Adresse ist …|عنواني …
Wie ist Ihre Telefonnummer?|ما رقم هاتفكم؟
Können Sie das buchstabieren?|هل تستطيعون تهجئته؟
Sprechen Sie Deutsch?|هل تتكلم الألمانية؟
Ein bisschen.|قليلًا
Ich verstehe das nicht.|لا أفهم هذا
Noch einmal, bitte.|مرة أخرى، من فضلك
Langsamer, bitte.|أبطأ، من فضلك
Was bedeutet das?|ماذا يعني هذا؟
Ich bin krank.|أنا مريض
Mein Kopf tut weh.|رأسي يؤلمني
Ich brauche einen Arzt.|أحتاج طبيبًا
Haben Sie einen Termin?|هل لديكم موعد؟
Morgen um zehn.|غدًا في العاشرة
Das passt mir.|هذا يناسبني
Das passt mir nicht.|هذا لا يناسبني
Gehen wir?|هل نذهب؟
Ich komme mit.|سآتي معكم
Ich bleibe zu Hause.|سأبقى في البيت
Ich stehe um sieben auf.|أستيقظ في السابعة
Ich gehe zur Arbeit.|أذهب إلى العمل
Was machst du beruflich?|ماذا تعمل؟
Ich bin Student.|أنا طالب
Ich lerne Deutsch.|أتعلّم الألمانية
Das ist meine Familie.|هذه عائلتي
Ich habe zwei Kinder.|عندي طفلان
Mein Bruder wohnt in Tunis.|أخي يسكن في تونس
Wie alt bist du?|كم عمرك؟
Ich bin dreißig.|عمري ثلاثون
Freut mich.|تشرّفت
Willkommen!|أهلًا
Setzen Sie sich bitte.|تفضلوا بالجلوس
Möchten Sie etwas trinken?|هل تودّون أن تشربوا شيئًا؟
Ja, gerne.|نعم، بكل سرور
Nein, danke.|لا، شكرًا
Hilfe!|النجدة
Entschuldigung!|عفوًا
Kein Problem.|لا مشكلة
Es tut mir leid.|آسف
Alles Gute!|كل الخير
Herzlichen Glückwunsch!|مبروك
Gute Besserung!|سلامتك
Schönen Tag noch!|يومًا سعيدًا
Bis morgen!|إلى الغد
Bis später!|إلى اللقاء لاحقًا
Ich rufe dich an.|سأتصل بك
Schreiben Sie mir bitte.|اكتبوا لي من فضلكم
Ich schicke eine Nachricht.|سأرسل رسالة
Der Zug kommt um acht.|القطار يصل في الثامنة
Wo steigen wir um?|أين نغيّر القطار؟
Eine Fahrkarte nach Berlin, bitte.|تذكرة إلى برلين، من فضلك
Hin und zurück.|ذهابًا وإيابًا
Ist dieser Platz frei?|هل هذا المقعد فارغ؟
Ich suche den Bahnhof.|أبحث عن المحطة
Wie weit ist es?|كم يبعد؟
Zehn Minuten zu Fuß.|عشر دقائق مشيًا
Ich habe Hunger.|أنا جائع
Ich habe Durst.|أنا عطشان
Das schmeckt gut.|هذا طعمه طيّب
Die Speisekarte, bitte.|قائمة الطعام، من فضلك
Ich bin Vegetarier.|أنا نباتي
Ohne Zucker, bitte.|بلا سكّر، من فضلك
Kann ich mit Karte zahlen?|هل أدفع بالبطاقة؟
Haben Sie das in groß?|هل عندكم المقاس الكبير؟
Das ist mir zu teuer.|هذا غالٍ عليّ
Ich schaue mich nur um.|أتفرّج فقط
Wo kann ich Brot kaufen?|أين أشتري الخبز؟
Der Supermarkt ist neben der Apotheke.|السوق بجانب الصيدلية
Ich muss jetzt gehen.|يجب أن أذهب الآن
Wir sehen uns.|نراك
Pass auf!|انتبه
`),
    A2: take(`
Ich bin gestern angekommen.|وصلت أمس
Ich habe das schon gemacht.|فعلت ذلك بعد
Das war letztes Jahr.|كان ذلك العام الماضي
Wir sind nach Berlin gefahren.|سافرنا إلى برلين
Ich habe den Film gesehen.|شاهدت الفيلم
Es hat mir gefallen.|أعجبني
Es hat mir nicht gefallen.|لم يعجبني
Ich war krank, deshalb …|كنت مريضًا، لذلك
Kannst du mir helfen?|هل تستطيع مساعدتي؟
Ich helfe dir gerne.|أساعدك بكل سرور
Das gehört mir.|هذا لي
Ich schenke es dir.|أهديك إيّاه
Der Schlüssel liegt auf dem Tisch.|المفتاح على الطاولة
Ich hänge das Bild an die Wand.|أعلّق الصورة على الجدار
Ich gehe in die Stadt.|أذهب إلى المدينة
Ich bin in der Stadt.|أنا في المدينة
Ich bleibe, weil ich müde bin.|أبقى لأنني متعب
Ich denke, dass das stimmt.|أظن أن هذا صحيح
Wenn ich Zeit habe, komme ich.|إذا كان عندي وقت آتي
Das ist größer als meins.|هذا أكبر من الذي عندي
Am besten gefällt mir das.|هذا أكثر ما يعجبني
Ich wasche mir die Hände.|أغسل يدي
Ich interessiere mich für Musik.|أهتم بالموسيقى
Ich freue mich auf morgen.|أتطلّع إلى الغد
Früher war ich Lehrer.|سابقًا كنت معلّمًا
Ich hätte gerne einen Termin.|أود موعدًا
Würden Sie das wiederholen?|هل تعيدون ذلك؟
Ich warte auf den Bus.|أنتظر الحافلة
Das hängt vom Wetter ab.|هذا يتوقف على الطقس
Ich denke an dich.|أفكّر فيك
Annas Tasche ist hier.|حقيبة آنا هنا
Wir fahren ans Meer.|نذهب إلى البحر
Ich habe den Flug verpasst.|فاتتني الرحلة
Der Zug hat Verspätung.|القطار متأخر
Ich möchte ein Zimmer reservieren.|أود حجز غرفة
Für zwei Nächte, bitte.|لليلتين، من فضلك
Mir ist schlecht.|أشعر بالغثيان
Ich habe Fieber.|عندي حمّى
Nehmen Sie diese Tabletten.|خذوا هذه الأقراص
Ich fühle mich besser.|أشعر بتحسّن
Ich arbeite halbtags.|أعمل نصف دوام
Mein Chef ist nett.|رئيسي لطيف
Die Arbeit macht Spaß.|العمل ممتع
Ich suche eine Wohnung.|أبحث عن شقة
Die Wohnung ist hell.|الشقة مضيئة
Die Miete ist hoch.|الإيجار مرتفع
Ich teile die Wohnung.|أشارك السكن
Wann hast du Geburtstag?|متى عيد ميلادك؟
Wir feiern am Samstag.|نحتفل السبت
Kommst du mit?|هل تأتي معنا؟
Leider kann ich nicht.|للأسف لا أستطيع
Das Kleid steht dir gut.|الفستان يليق بك
Welche Größe haben Sie?|ما مقاسكم؟
Ich ziehe die Jacke an.|أرتدي السترة
Heute ist es bewölkt.|اليوم غائم
Es regnet seit Stunden.|تمطر منذ ساعات
Im Sommer ist es heiß.|في الصيف الحر شديد
Ich lade dich zum Essen ein.|أدعوك إلى الطعام
Vielen Dank für die Einladung.|شكرًا على الدعوة
Das Gerät funktioniert nicht.|الجهاز لا يعمل
Können Sie das reparieren?|هل تستطيعون إصلاحه؟
Ich habe es verloren.|أضعته
Zuerst bin ich aufgestanden.|أولًا استيقظت
Dann habe ich gefrühstückt.|ثم فطرت
Zum Schluss bin ich ausgegangen.|في النهاية خرجت
Ich finde das praktisch.|أجده عمليًا
Meiner Meinung nach …|في رأيي
Das stimmt nicht ganz.|هذا ليس صحيحًا تمامًا
Ich schreibe Ihnen bald.|سأكتب لكم قريبًا
Mit freundlichen Grüßen|مع أطيب التحيات
Am Apparat.|على الخط
Einen Moment, bitte.|لحظة، من فضلك
Er ist gerade nicht da.|هو ليس هنا الآن
Kann ich etwas ausrichten?|هل أبلّغ رسالة؟
Ich rufe später noch einmal an.|سأتصل لاحقًا مرة أخرى
Das habe ich nicht verstanden.|لم أفهم ذلك
Könnten Sie langsamer sprechen?|هل تتكلمون أبطأ؟
Ich bin umgezogen.|انتقلت إلى سكن جديد
Die Nachbarn sind laut.|الجيران صوتهم عالٍ
Wir treffen uns am Eingang.|نلتقي عند المدخل
Ich bringe etwas mit.|سأحضر معي شيئًا
Lass uns das verschieben.|لنؤجّل هذا
Ich habe den Bus verpasst.|فاتني الحافلة
Gibt es hier WLAN?|هل هنا إنترنت لاسلكي؟
Das Formular ist ausgefüllt.|الاستمارة معبّأة
Unterschreiben Sie hier.|وقّعوا هنا
Ich brauche eine Bescheinigung.|أحتاج شهادة
Die Praxis hat geschlossen.|العيادة مغلقة
Ich komme zu spät.|سأصل متأخرًا
Warte nicht auf mich.|لا تنتظرني
Es war eine lange Reise.|كانت رحلة طويلة
Nächstes Mal klappt es.|المرة القادمة تنجح
Ich gewöhne mich daran.|أعتاد على ذلك
Das kenne ich schon.|أعرف هذا بعد
Erzähl weiter!|أكمل الحكاية
Das reicht mir.|هذا يكفيني
Ich bin damit fertig.|انتهيت من هذا
Das dauert ungefähr eine Stunde.|هذا يستغرق نحو ساعة
Ich habe mich verfahren.|ضللت الطريق
Können Sie mir den Weg zeigen?|هل تدلّونني على الطريق؟
`),
    B1: take(`
Das wird hier recycelt.|هذا يُعاد تدويره هنا
Die Straße wird repariert.|الشارع يُرمَّم
Das Haus wurde verkauft.|بيع البيت
Der Mann, der dort wohnt, …|الرجل الذي يسكن هناك
Die Frau, der ich helfe, …|المرأة التي أساعدها
Obwohl es regnet, gehe ich.|رغم المطر أذهب
Es regnet. Trotzdem gehe ich.|تمطر. مع ذلك أذهب
Ich lerne Deutsch, damit ich arbeiten kann.|أتعلّم الألمانية كي أستطيع العمل
Ich lerne Deutsch, um zu arbeiten.|أتعلّم الألمانية لكي أعمل
Ich habe vor, umzuziehen.|أنوي الانتقال
Es wäre schön, wenn …|سيكون جميلًا لو
Wenn ich Zeit hätte, käme ich.|لو كان عندي وقت لجئت
Der Student hat die Prüfung bestanden.|نجح الطالب في الامتحان
Ich werde das morgen erledigen.|سأنهي هذا غدًا
Früher lebte sie auf dem Land.|سابقًا كانت تعيش في الريف
Wegen des Wetters bleiben wir.|بسبب الطقس نبقى
Trotz des Regens …|رغم المطر
Ein junger Mann hat angerufen.|اتّصل رجل شاب
Als ich klein war, …|عندما كنت صغيرًا، مرة
Wenn ich krank bin, bleibe ich.|كلما مرضت أبقى
Ich weiß nicht, ob er kommt.|لا أعرف إن كان سيأتي
Er könnte unterwegs sein.|ربما هو في الطريق
Die Zahl ist gestiegen.|الرقم ارتفع
Im Vergleich zum Vorjahr …|مقارنة بالعام السابق
Ich bewerbe mich um die Stelle.|أتقدّم إلى الوظيفة
Anbei sende ich meinen Lebenslauf.|أرفق سيرتي
Ich möchte mich beschweren.|أود أن أشتكي
Die Lieferung kam zu spät.|وصل التسليم متأخرًا
Ich bitte um eine Lösung.|أطلب حلًا
Meiner Ansicht nach ist das riskant.|في رأيي هذا محفوف
Einerseits spart das Zeit.|من جهة هذا يوفّر وقتًا
Andererseits kostet es Geld.|من جهة أخرى يكلّف مالًا
Ich fasse den Text zusammen.|ألخّص النص
Der Autor meint, dass …|يقصد الكاتب أن
Das sehe ich anders.|أرى الأمر بشكل مختلف
Da bin ich anderer Meinung.|أنا على رأي آخر
Könnten wir einen Kompromiss finden?|هل نجد حلًا وسطًا؟
Ich schlage vor, dass wir warten.|أقترح أن ننتظر
Es kommt darauf an, ob …|الأمر يتوقف على ما إذا
Im Großen und Ganzen …|في المجمل
Zum Beispiel in Tunesien …|على سبيل المثال في تونس
Das hat Vor- und Nachteile.|لهذا حسنات ومساوئ
Der Vorteil ist die Lage.|الحسنة هي الموقع
Der Nachteil ist der Lärm.|المساوئ هي الضجيج
Ich habe mich daran gewöhnt.|اعتدت على ذلك
Es fällt mir schwer, …|يصعب عليّ
Ich bin damit einverstanden, aber …|أوافق، ولكن
Nicht nur …, sondern auch …|ليس فقط، بل أيضًا
Je mehr ich übe, desto besser.|كلما تدرّبت تحسّنت
Sowohl die Miete als auch die Lage …|الإيجار والموقع كلاهما
Weder Zeit noch Geld.|لا وقت ولا مال
Ich muss mich beeilen.|يجب أن أسرع
Lassen Sie mich überlegen.|دعوني أفكّر
Das überzeugt mich nicht.|هذا لا يقنعني
Haben Sie einen Beleg?|هل عندكم إيصال؟
Ich möchte den Termin verschieben.|أود تأجيل الموعد
Die Versicherung übernimmt das.|التأمين يتحمّل هذا
Ich habe mich angemeldet.|سجّلت نفسي
Das Formular ist unvollständig.|الاستمارة ناقصة
Bitte füllen Sie das aus.|من فضلكم املؤوا هذا
Ich warte auf eine Antwort.|أنتظر جوابًا
In letzter Zeit …|في الآونة الأخيرة
Es hat sich viel verändert.|تغيّر الكثير
Früher war das anders.|سابقًا كان الأمر مختلفًا
Ich erinnere mich daran.|أتذكّر ذلك
Das habe ich selbst erlebt.|عشت هذا بنفسي
Aus eigener Erfahrung …|من تجربتي
Man sollte weniger wegwerfen.|ينبغي أن نرمِ أقل
Es lohnt sich, das zu versuchen.|يستحق المحاولة
Ich bin am Überlegen.|أنا أفكّر في الأمر
Kurz gesagt, …|باختصار
Mit anderen Worten, …|بعبارة أخرى
Das heißt, …|هذا يعني
Und zwar aus zwei Gründen.|وذلك لسببين
Erstens die Kosten.|أولًا الكلفة
Zweitens die Zeit.|ثانيًا الوقت
Zum Schluss möchte ich sagen, …|في الختام أود أن أقول
Vielen Dank für Ihre Aufmerksamkeit.|شكرًا على انتباهكم
Gibt es dazu Fragen?|هل هناك أسئلة؟
Ich komme noch einmal darauf zurück.|أعود إلى هذا مرة أخرى
Das führt dazu, dass …|هذا يؤدّي إلى
Die Folge wäre …|ستكون النتيجة
Unter diesen Umständen …|في هذه الظروف
Ich bin im Stress.|أنا تحت الضغط
Die Work-Life-Balance fehlt mir.|ينقصني التوازن
Ich arbeite oft Überstunden.|أعمل ساعات إضافية كثيرًا
Das Team unterstützt mich.|الفريق يدعمني
Wir haben die Frist verpasst.|فاتنا الأجل
Ich übernehme die Verantwortung.|أتحمّل المسؤولية
Das ist nicht meine Aufgabe.|هذه ليست مهمتي
Können wir das delegieren?|هل نفوّض هذا؟
Ich halte das für unrealistisch.|أرى هذا غير واقعي
Das Budget reicht nicht.|الميزانية لا تكفي
Wir brauchen eine Alternative.|نحتاج بديلًا
Ich informiere Sie schriftlich.|سأخبركم كتابة
Bleiben wir in Kontakt.|لنبقَ على تواصل
Ich möchte das schriftlich haben.|أريد هذا مكتوبًا
Das hängt von mehreren Faktoren ab.|هذا يتوقف على عوامل عدة
Ich sehe das differenzierter.|أرى الأمر بشكل أدق
Dazu kann ich noch nichts sagen.|لا أستطيع قول شيء بعد
`),
    B2: take(`
Meines Erachtens greift das zu kurz.|في تقديري هذا قاصر
Es lässt sich nicht bestreiten, dass …|لا يُنكر أن
Zwar ist das richtig, doch …|صحيح أن هذا حق، غير أن
Ich räume ein, dass …|أقرّ بأن
Dem kann ich nur bedingt zustimmen.|لا أوافق إلا جزئيًا
Dagegen spricht, dass …|يعارض ذلك أن
Hinzu kommt, dass …|يُضاف إلى ذلك أن
Folglich bleibt nur eine Möglichkeit.|إذن لا يبقى إلا احتمال
Im Gegensatz dazu …|خلافًا لذلك
Angesichts dieser Entwicklung …|نظرًا إلى هذا التطوّر
Hinsichtlich der Kosten …|فيما يخص الكلفة
Vorausgesetzt, dass die Daten stimmen, …|بشرط أن تصحّ البيانات
Die Grafik zeigt einen Anstieg.|الرسم يُظهر ارتفاعًا
Auffällig ist der Unterschied.|اللافت هو الفرق
Daraus lässt sich schließen, dass …|يمكن أن يُستنتج من ذلك أن
Die Quelle nennt keine Ursache.|المصدر لا يذكر سببًا
Man sollte Beschreibung und Deutung trennen.|ينبغي فصل الوصف عن التأويل
Die These lautet: …|الدعوى هي
Das Argument überzeugt nur mit einem Beispiel.|الحجة لا تقنع إلا بمثال
Ein Gegenargument wäre …|حجة مضادة ممكنة هي
Abschließend lässt sich sagen, …|ختامًا يمكن القول
Ich beziehe mich auf den Artikel.|أشير إلى المقال
Der Autor unterstellt, dass …|يفترض الكاتب أن
Diese Behauptung ist nicht belegt.|هذا الادعاء غير موثّق
In der Diskussion wurde deutlich, dass …|اتّضح في النقاش أن
Wir sollten die Ebenen nicht vermischen.|لا ينبغي خلط المستويات
Das ist eine Frage der Priorität.|هذه مسألة أولوية
Langfristig überwiegen die Nachteile.|على المدى البعيد ترجح المساوئ
Kurzfristig entlastet das den Haushalt.|على المدى القريب هذا يخفّف الميزانية
Die Maßnahme geht am Problem vorbei.|الإجراء لا يصيب المشكلة
Es fehlt an Verbindlichkeit.|ينقص الإلزام
Die Regelung ist zu unscharf.|التنظيم فضفاض
Ich plädiere für eine klare Grenze.|أدعو إلى حد واضح
Das lässt sich kaum durchsetzen.|هذا يصعب فرضه
Die Betroffenen kommen nicht zu Wort.|المتأثّرون لا يُمنحون الكلام
Man spricht über sie, nicht mit ihnen.|يُتحدَّث عنهم لا معهم
Das ist ein strukturelles Problem.|هذه مشكلة بنيوية
Einzelfälle belegen das nicht.|الحالات الفردية لا تثبت ذلك
Die Statistik allein entscheidet nicht.|الإحصاء وحده لا يحسم
Trotzdem ist der Trend eindeutig.|مع ذلك الاتجاه واضح
Ich würde es so formulieren: …|سأصوغه هكذا
Könnten Sie das präzisieren?|هل توضّحون ذلك؟
Das verstehe ich unter dem Begriff nicht.|ليس هذا ما أفهمه من المصطلح
Wir reden aneinander vorbei.|نحن لا نلتقي في الكلام
Lassen Sie mich ausreden.|دعوني أكمل
Ich unterbreche Sie ungern.|لا أحب مقاطعتكم
Darf ich kurz nachhaken?|هل أستوضح بإيجاز؟
Das ist ein berechtigter Einwand.|هذا اعتراض وجيه
Den Punkt gebe ich zu.|أسلّم بهذه النقطة
In der Sache bleiben wir uneinig.|في الجوهر نبقى مختلفين
Für die Prüfung heißt das: …|بالنسبة إلى الامتحان يعني هذا
Zuerst die Aufgabe lesen, dann schreiben.|أولًا قراءة المطلوب ثم الكتابة
Die Zeit reicht für zwei Durchgänge.|الوقت يكفي لجولتين
Ich plane die Gliederung vor dem Text.|أخطّط للهيكل قبل النص
Einleitung, Hauptteil, Schluss.|مقدمة ومتن وخاتمة
Im Hauptteil zwei Argumente, nicht fünf.|في المتن حجّتان لا خمس
Jedes Argument braucht ein Beispiel.|كل حجة تحتاج مثالًا
Der Schluss wiederholt nicht die Einleitung.|الخاتمة لا تعيد المقدمة
Beim Sprechen nenne ich die Gliederung.|في التحدّث أذكر الهيكل
Ich habe drei Minuten, nicht zehn.|عندي ثلاث دقائق لا عشر
Wenn ich stocke, formuliere ich neu.|إذا تلعثمت أُعيد الصياغة
Ich bitte um das Wort.|أطلب الكلام
Ich fasse Ihren Punkt zusammen.|ألخّص نقطتكم
Stimmt das so?|هل هذا صحيح هكذا؟
Dann ergänze ich.|ثم أضيف
Zum Dialekt: ich verstehe, ich ahme nicht nach.|في اللهجة: أفهم ولا أقلّد
Das klingt österreichisch, nicht standardsprachlich.|هذا يبدو نمساويًا لا فصيحًا معياريًا
In der Schweiz sagt man oft …|في سويسرا يُقال غالبًا
Ich markiere, was ich nicht kenne.|أعلّم ما لا أعرفه
Nach dem Hören prüfe ich die Frage, nicht das Gefühl.|بعد السماع أفحص السؤال لا الإحساس
Der Text ist Meinung, kein Bericht.|النص رأي لا تقرير
Die Überschrift verspricht mehr, als der Text hält.|العنوان يعد بأكثر مما يفي به النص
Ich zitiere kurz und kommentiere.|أقتبس بإيجاز ثم أعلّق
Ohne Beleg keine starke Aussage.|بلا شاهد لا قول قوي
Das würde ich in der Prüfung nicht riskieren.|هذا لا أخاطر به في الامتحان
Lieber ein klares Argument als fünf vage.|حجة واضحة خير من خمس غامضة
Ich bleibe beim Thema.|أبقى في الموضوع
Die Nebenfrage lasse ich weg.|أترك السؤال الجانبي
So gewinne ich Zeit für den Schluss.|هكذا أربح وقتًا للخاتمة
Haben wir das geklärt?|هل وضّحنا هذا؟
Ich schlage vor, hier zu schließen.|أقترح أن نختم هنا
Die Entscheidung liegt nicht bei mir.|القرار ليس بيدي
Ich kann nur die Folgen benennen.|لا أستطيع إلا تسمية النتائج
Das ist meine begründete Position.|هذا موقفي المعلّل
Mehr würde ich nicht behaupten.|أكثر من هذا لا أدّعي
Die Aufgabe verlangt eine Stellungnahme, keine Nacherzählung.|المطلوب موقف لا إعادة سرد
Ich nenne die Gegenposition, bevor ich sie widerlege.|أذكر الموقف المقابل قبل أن أردّ عليه
Ein Beispiel aus dem Alltag ersetzt keine Begründung.|مثال من الحياة لا يغني عن التعليل
Ich unterscheide zwischen Tatsache und Wertung.|أفرّق بين الواقعة والتقييم
Der Ton bleibt sachlich, auch wenn ich widerspreche.|النبرة تبقى موضوعية حتى وأنا أعارض
Ich vermeide absolute Wörter wie immer und nie.|أتجنّب كلمات مطلقة مثل دائمًا وأبدًا
Wenn die Zeit knapp wird, schreibe ich den Schluss zuerst im Kopf.|إذا ضاق الوقت أجهّز الخاتمة في ذهني أولًا
Beim Hörverstehen lese ich die Frage vor dem zweiten Hören.|في الاستماع أقرأ السؤال قبل السماع الثاني
In der Prüfung übertrage ich nicht aus dem Arabischen.|في الامتحان لا أنقل من العربية جملة جملة
Ich formuliere den deutschen Gedanken neu, nicht Wort für Wort.|أعيد صياغة الفكرة بالألمانية لا كلمة بكلمة
Die Einleitung nennt das Thema in einem Satz.|المقدمة تسمّي الموضوع في جملة
Der Schluss nimmt Stellung, er fasst nicht nur zusammen.|الخاتمة تتّخذ موقفًا ولا تكتفي بالتلخيص
Ich markiere Schlüsselwörter in der Aufgabenstellung.|أعلّم الكلمات المفتاحية في نص المطلوب
Nach dem Schreiben prüfe ich Verbzweit und Verbletzt.|بعد الكتابة أفحص موضع الفعل الثاني والأخير
Weniger behaupten, genauer belegen.|ادّعاء أقل، وتوثيق أدق
`)
  };
})(typeof window !== 'undefined' ? window : global);

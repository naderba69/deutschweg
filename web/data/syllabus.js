/* Deutschweg — syllabus map (PROMPT §13.9).
   Rows first. A lesson body may not exist before its row validates.
   Every row now has a lesson body. Status is authored only because the body exists. */
(function (root) {
  const L1 = [
    'cap.a0.lesson.goal', 'cap.a0.hoeren.greetings', 'cap.a0.einstieg.predict',
    'cap.a0.aussprache.umlaut', 'cap.a0.aussprache.w_v_z', 'cap.a0.aussprache.ei_ie',
    'cap.a0.aussprache.eu_ch_sch', 'cap.a0.aussprache.vowel_length',
    'cap.a0.wortschatz.guten_morgen', 'cap.a0.wortschatz.farewell_register',
    'cap.a0.wortschatz.ich_heisse', 'cap.a0.wortschatz.danke_bitte',
    'cap.a0.hoeren.dialog_intro', 'cap.a0.anwenden.transform_greeting',
    'cap.a0.aussprache.vater', 'cap.a0.wortschatz.guten_abend',
    'cap.a0.aussprache.w_v_z_recall', 'cap.a0.hoeren.wasser',
    'cap.a0.wortschatz.ich_heisse_produce', 'cap.a0.sprechen.greeting20',
    'cap.a0.aussprache.zeit', 'cap.a0.wortschatz.gute_nacht',
    'cap.a0.aussprache.ie_long', 'cap.a0.wortschatz.greetings_map'
  ];

  /* id, level, ar, de, theme, rec, prod, grammar, method, kind */
  const ROWS = [
    ['a0-u1-l1', 'A0', 'اليوم الأول: الأصوات والتحية', 'Laute und Grüße', 'التحية والأصوات', 16, 8, 'طول الحركة وw/v وei/ie', 'explicit', 'lesson'],
    ['a0-u1-l2', 'A0', 'الأرقام والتهجئة', 'Zahlen und Buchstabieren', 'الأرقام', 14, 6, 'الأرقام 0–20 والتهجئة', 'inductive', 'lesson'],
    ['a0-u1-l3', 'A0', 'أنا أكون واسمي', 'sein und heißen', 'الهوية', 16, 8, 'sein وheißen في الحاضر', 'inductive', 'lesson'],
    ['a0-u1-l4', 'A0', 'البلد واللغة', 'Länder und Sprachen', 'الأصل', 14, 6, 'kommen aus وsprechen', 'inductive', 'lesson'],
    ['a0-u1-l5', 'A0', 'العائلة والجنس', 'Familie und Genus', 'العائلة', 18, 8, 'der/die/das على أسماء العائلة', 'inductive', 'lesson'],
    ['a0-u1-l6', 'A0', 'السؤال والجواب', 'Fragen', 'السؤال', 12, 6, 'سؤال نعم/لا وسؤال W', 'explicit', 'lesson'],

    ['a1-u1-l1', 'A1', 'المضارع المنتظم', 'Präsens', 'الأفعال اليومية', 28, 10, 'تصريف المضارع المنتظم', 'inductive', 'lesson'],
    ['a1-u1-l2', 'A1', 'النفي', 'nicht und kein', 'النفي', 28, 10, 'nicht مقابل kein', 'inductive', 'lesson'],
    ['a1-u1-l3', 'A1', 'المفعول به في الأداة', 'Akkusativ Artikel', 'الأشياء', 28, 10, 'أداة النصب', 'explicit', 'lesson'],
    ['a1-u1-l4', 'A1', 'ضمائر حالة النصب', 'Pronomen im Akkusativ', 'الضمائر', 28, 10, 'ضمائر النصب', 'explicit', 'lesson'],
    ['a1-u1-l5', 'A1', 'أدوات الملكية', 'Possessivartikel', 'الملكية', 28, 10, 'أداة الملكية في الرفع والنصب', 'explicit', 'lesson'],
    ['a1-u1-l6', 'A1', 'أستطيع ويجب عليّ', 'können und müssen', 'القدرة والواجب', 28, 10, 'können وmüssen', 'explicit', 'lesson'],
    ['a1-u2-l1', 'A1', 'أريد وأود', 'wollen und möchten', 'الرغبة', 28, 10, 'wollen وmöchten', 'explicit', 'lesson'],
    ['a1-u2-l2', 'A1', 'الأفعال المنفصلة', 'Trennbare Verben', 'الروتين', 28, 10, 'الفعل المنفصل', 'inductive', 'lesson'],
    ['a1-u2-l3', 'A1', 'الساعة', 'Uhrzeit', 'الوقت', 28, 10, 'قول الساعة', 'inductive', 'lesson'],
    ['a1-u2-l4', 'A1', 'حروف الجر الزمنية', 'Temporale Präpositionen', 'المواعيد', 28, 10, 'um وam وim', 'inductive', 'lesson'],
    ['a1-u2-l5', 'A1', 'حروف الجر المكانية', 'Lokale Präpositionen', 'المكان', 28, 10, 'in وan وauf كقطع', 'inductive', 'lesson'],
    ['a1-u2-l6', 'A1', 'الجمع', 'Plural', 'الأشياء الكثيرة', 28, 10, 'أنماط الجمع الشائعة', 'inductive', 'lesson'],
    ['a1-u3-l1', 'A1', 'الطعام', 'Essen', 'الطعام', 28, 10, 'إطارات bestellen وmöchten', 'inductive', 'lesson'],
    ['a1-u3-l2', 'A1', 'التسوق', 'Einkaufen', 'التسوق', 28, 10, 'السعر والكمية', 'inductive', 'lesson'],
    ['a1-u3-l3', 'A1', 'الروتين اليومي', 'Tagesablauf', 'اليوم', 28, 10, 'ترتيب اليوم بالأفعال المنفصلة', 'inductive', 'lesson'],
    ['a1-u3-l4', 'A1', 'الماضي مع haben', 'Perfekt mit haben', 'الأحداث', 28, 10, 'Perfekt مع haben', 'explicit', 'lesson'],
    ['a1-u3-l5', 'A1', 'الماضي مع sein', 'Perfekt mit sein', 'الحركة', 28, 10, 'Perfekt مع sein', 'explicit', 'lesson'],
    ['a1-u3-l6', 'A1', 'المواعيد', 'Termine', 'المواعيد', 28, 10, 'طلب موعد وقبوله وتأجيله وإلغاؤه', 'inductive', 'lesson'],
    ['a1-u4-l1', 'A1', 'السكن', 'Wohnen', 'البيت', 28, 10, 'وصف الشقة والغرف والطابق والمساحة', 'inductive', 'lesson'],
    ['a1-u4-l2', 'A1', 'عند الطبيب', 'Beim Arzt', 'الجسم', 28, 10, 'وصف الأعراض وطلب موعد وذكر التحسن', 'inductive', 'lesson'],
    ['a1-u4-l3', 'A1', 'وصف الطريق', 'Wegbeschreibung', 'الاتجاه', 28, 10, 'إرشادات الطريق وتحديد جهة المكان', 'inductive', 'lesson'],
    ['a1-u4-l4', 'A1', 'رسالة قصيرة', 'Kurze Nachricht', 'الكتابة القصيرة', 28, 10, 'رسالة ودية بنداء ومعلومة وسؤال وختام', 'explicit', 'lesson'],
    ['a1-u4-l5', 'A1', 'مراجعة A1', 'Wiederholung A1', 'المراجعة', 20, 10, 'تصحيح الحالة والعمر والماضي وترتيب الفعل والمكان', 'explicit', 'lesson'],
    ['a1-u4-l6', 'A1', 'شكل امتحان A1', 'Prüfungsform A1', 'شكل الامتحان', 8, 0, 'مجالات Start Deutsch 1 ومجموع النجاح والسماع والمدة والتهجئة', 'explicit', 'lesson'],

    ['a1-u5-l1', 'A1', 'البريد والهاتف', 'Post und Telefon', 'المراسلة', 11, 4, 'بيانات المظروف والرمز البريدي ومفتاح الاتصال والرسالة الهاتفية', 'inductive', 'lesson'],
    ['a1-u5-l2', 'A1', 'المصرف والعمل', 'Bank und Arbeit', 'المصرف', 11, 4, 'جهة العمل والشبّاك والتحويل والاستمارة ووقت الفتح', 'inductive', 'lesson'],
    ['a1-u5-l3', 'A1', 'المدرسة والوثائق', 'Schule und Papiere', 'الوثائق', 11, 4, 'مكان الميلاد والحالة العائلية والروضة وسنة الميلاد والاستمارة', 'explicit', 'lesson'],
    ['a1-u5-l4', 'A1', 'البيت والجوار', 'Zuhause und Nachbarschaft', 'السكن والجوار', 11, 4, 'الشقة والموقد والكشك والسينما والضيوف', 'inductive', 'lesson'],
    ['a1-u5-l5', 'A1', 'السفر والمواصلات', 'Reisen und Verkehr', 'السفر', 11, 4, 'الانطلاق والرصيف والوصول والجمارك وزيارة المعالم', 'inductive', 'lesson'],
    ['a1-u5-l6', 'A1', 'مراجعة مفردات A1', 'Wortliste A1', 'المراجعة', 11, 4, 'التهنئة والإعجاب والرياضة والطلب والعناية', 'explicit', 'lesson']
  ];

  const A2 = [
    ['حالة الداتيف', 'Dativ', 'الإعطاء', 'المذكر والمؤنث والمحايد والجمع وحرف mit', 'explicit', 32, 13],
    ['أفعال مع الداتيف', 'Verben mit Dativ', 'المساعدة', 'helfen وgeben وgehören وpassen وzeigen', 'explicit', 31, 13],
    ['حروف الجرّ ثنائية الحالة', 'Wechselpräpositionen', 'المكان والوجهة', 'Wo + Dativ وWohin + Akkusativ مع an وauf وin', 'explicit', 31, 13],
    ['التعليل بـ weil', 'Gründe mit weil', 'السبب', 'weil: الفعل المصرف في النهاية · denn: ترتيب جملة رئيسية · deshalb: بعدها الفعل المصرف مباشرة', 'explicit', 31, 13],
    ['نقل الأقوال والأفكار بـ dass', 'Aussagen mit dass', 'الأقوال والأفكار', 'dass: الفعل المصرف في النهاية مع modal وPerfekt والفعل المنفصل', 'explicit', 31, 13],
    ['الشرط بـ wenn', 'Bedingungen mit wenn', 'الشروط والنتائج', 'wenn: الفعل النهائي · بعد جملة wenn المتقدمة يأتي فعل الجملة الرئيسية ثم الفاعل · modal وPerfekt', 'explicit', 30, 13],
    ['المقارنة بـ als وwie', 'Vergleiche mit als und wie', 'المقارنة والتساوي', 'Komparativ + als · so + Grundform + wie · besser/mehr/lieber', 'explicit', 33, 13],
    ['التفضيل مع am وقبل الاسم', 'Superlativ mit am und vor Nomen', 'التفضيل', 'am + -(e)sten · der/die/das + Superlativ قبل الاسم · am besten/am meisten/am liebsten', 'explicit', 29, 13],
    ['نهايات الصفة في حالة الرفع', 'Adjektivendungen im Nominativ', 'وصف الأشخاص والأشياء', 'der/die/das: -e مفرد و-en جمع · ein: -er/-e/-es · الصفة الخبرية بلا نهاية', 'explicit', 31, 13],
    ['نهايات الصفة في حالة النصب', 'Adjektivendungen im Akkusativ', 'وصف الأشخاص والأشياء', 'den/einen: -en · die/das مفرد: -e · die جمع: -en · ein محايد: -es', 'explicit', 31, 13],
    ['الأفعال الانعكاسية', 'Reflexivverben', 'العناية والروتين الشخصي', 'Reflexivpronomen: mich/dich/sich/uns · Akkusativ مقابل Dativ مع جزء الجسم · أفعال منفصلة وحروف ثابتة', 'explicit', 31, 13],
    ['ماضي sein وhaben البسيط', 'Präteritum von sein und haben', 'ذكريات وأحوال في الماضي', 'sein: war/warst/waren · haben: hatte/hatten · عبارة زمنية في الموقع الأول ثم الفعل المصرف', 'explicit', 30, 13],
    ['الطلبات المهذّبة بصيغة Konjunktiv II', 'Höfliche Bitten mit Konjunktiv II', 'الطلبات المهذّبة والخدمات', 'würde + Infinitiv · Würden/Könnten/Hätten Sie …? · Das wäre …', 'explicit', 29, 13],
    ['أفعال مع حروف جر ثابتة', 'Verben mit festen Präpositionen', 'التواصل والاهتمامات والمشاركة', 'warten auf + Akk. · denken an + Akk. · sprechen über + Akk. · sich freuen auf + Akk. · teilnehmen an + Dat.', 'explicit', 31, 13],
    ['حالة Genitiv للملكية ومع حروف الجر', 'Genitiv bei Besitz und Präpositionen', 'الملكية والانتماء وحروف الجر', 'Namen + -s / Apostroph nach s-Laut · des/meines + -(e)s · der/meiner · wegen/während/trotz/statt + Genitiv', 'explicit', 29, 13],
    ['السفر: التذكرة وتغيير القطار والإقامة', 'Reisen: Fahrkarte, Umsteigen und Unterkunft', 'السفر والمواصلات والإقامة', 'Fahrkarte/Ticket · hin und zurück · Verspätung haben · müssen + umsteigen · ein Zimmer buchen', 'explicit', 35, 13],
    ['الصحة: الأعراض وموعد الطبيب والأدوية', 'Gesundheit: Beschwerden, Arzttermin und Medikamente', 'الصحة والرعاية الطبية', 'Mir ist schlecht · Fieber haben · einen Termin beim Arzt brauchen · dreimal täglich · sich besser fühlen', 'explicit', 31, 13],
    ['العمل: البحث عن وظيفة والتقديم وساعات الدوام', 'Arbeit: Stellensuche, Bewerbung und Arbeitszeit', 'العمل والتقديم والتوظيف', 'eine Stelle in Teilzeit suchen · eine Bewerbung schreiben · den Lebenslauf mitschicken · um zehn Uhr · bei einer Firma/in der Abteilung · von … bis', 'explicit', 31, 13],
    ['الدراسة: الدورة والدرس والواجب والامتحان', 'Lernen: Kurs, Unterricht, Hausaufgaben und Prüfung', 'الدراسة وتنظيم الدورة والتقييم', 'im September · um acht Uhr · ins/in das Heft · Können Sie … erklären? · eine Prüfung bestehen', 'explicit', 36, 13],
    ['المناسبات: التهنئة والدعوة والرد', 'Feste: gratulieren, einladen und antworten', 'المناسبات والدعوات والاحتفال', 'Herzlichen Glückwunsch · lade … ein · nehme … an · Leider kann ich nicht · um sieben Uhr', 'explicit', 33, 13],
    ['الملابس: المقاس والقياس والاستبدال', 'Kleidung: Passform, Anprobe und Umtausch', 'الملابس والتسوق في متجر الأزياء', 'ziehe … an · passt mir · Welche Größe …? · anprobieren · umtauschen', 'explicit', 31, 13],
    ['الطقس: الحالة والمدة والحرارة والتوقع', 'Wetter: Zustand, Dauer, Temperatur und Vorhersage', 'الطقس والفصول والتوقعات', 'bewölkt und windig · seit dem Morgen · im Sommer · bei zwanzig Grad · sagt … voraus', 'explicit', 33, 13],
    ['الدعوة: القبول والاعتذار والاستفسار', 'Einladung: zusagen, absagen und nachfragen', 'الرد على الدعوة وتفاصيل المناسبة', 'Danke für … · sage … zu · muss … absagen, weil … · um wie viel Uhr · mitbringen', 'explicit', 29, 13],
    ['المشكلات: العطل والفقدان والاعتذار', 'Probleme: Defekt, Verlust und Entschuldigung', 'حل المشكلات والأشياء المفقودة', 'funktioniert nicht · habe … verloren · Können Sie … reparieren? · lasse … sperren · tut mir leid', 'explicit', 31, 13],
    ['سرد الماضي: الترتيب وPerfekt', 'Vergangenheit erzählen: Reihenfolge und Perfekt', 'سرد أحداث الماضي بترتيب واضح', 'zuerst/dann/danach/plötzlich/zum Schluss · Perfekt مع haben أو sein · الفعل في الموضع الثاني', 'explicit', 31, 13],
    ['التعبير عن الرأي: الموازنة والموافقة والاعتراض', 'Meinung äußern: abwägen, zustimmen und widersprechen', 'التعبير عن الرأي والموازنة بين الحجج', 'meiner Meinung nach + V2 · einerseits … andererseits · trotzdem + V2 · zustimmen/widersprechen + Dat.', 'explicit', 36, 13],
    ['البريد الإلكتروني الرسمي: النداء والطلب والختام', 'Formelle E-Mail: Anrede, Bitte und Gruß', 'كتابة بريد إلكتروني رسمي', 'Sehr geehrte …, · Ihnen/Ihre · wegen + Genitiv · Könnten Sie …? · Mit freundlichen Grüßen', 'explicit', 31, 13],
    ['مكالمة رسمية: طلب شخص وطلب إعادة الاتصال', 'Formelles Telefonat: nach einer Person fragen und um Rückruf bitten', 'إجراء مكالمة رسمية وطلب إعادة الاتصال', 'am Apparat · Könnte ich bitte Herrn … sprechen? · nicht da · jemandem etwas ausrichten · um Rückruf bitten', 'explicit', 34, 13],
    ['تدريب قواعد A2: ترتيب الجملة والحالات وPerfekt والمقارنة', 'A2-Grammatiktraining: Satzbau, Fälle, Perfekt und Vergleich', 'تصحيح خمس قواعد أساسية في A2', 'weil + Verb am Ende · helfen + Dativ · sein + gegangen · auf + Akk. bei Richtung · Komparativ + als', 'explicit', 31, 13],
    ['شهادة Goethe A2 للبالغين: الأقسام والمدة وقواعد النجاح', 'Goethe-Zertifikat A2 für Erwachsene: Teile, Dauer und Bestehensregeln', 'بنية امتحان Goethe A2 للبالغين وقواعد النجاح', 'vier Prüfungsteile · schriftlich ca. 90 Min. · Hören: Teil 2 einmal, sonst zweimal · 60/100 + 45/75 schriftlich + 15/25 mündlich · Sprechen zu zweit', 'explicit', 30, 13],
    /* The Goethe-A2-list unit: the words the official list carries and the app
       did not have yet (tools/goethe-a2-gap.txt). 35 words per lesson, then 2–4 more in the promotion round, so every
       row declares its own receptive count instead of the A2 default 26. */
    ['الجسم والملابس والعناية', 'Körper, Kleidung und Pflege', 'التحدث عن الجسم والملابس والعناية', 'sich (Dat.) das Gesicht waschen · passen + Dat. · einen Anzug tragen · für + Akk. · schädlich für', 'explicit', 40, 13],
    ['الطعام والموسيقى ووقت الفراغ', 'Essen, Musik und Freizeit', 'الطلب والحديث عن أنشطة وقت الفراغ', 'Mengenangabe ohne von · eine kleine Portion · in + Dat. am Ort · für + Akk. · Modalverb + Infinitiv', 'explicit', 40, 13],
    ['الرياضة والطبيعة: الأنشطة والسلامة', 'Sport und Natur: Aktivitäten und Sicherheit', 'الرياضة والأماكن في الطبيعة والسلامة', 'Sportart ohne Artikel · in/auf + Dat. am Ort · V2 nach Zeitangabe · Modalverb + Infinitiv', 'explicit', 40, 13],
    ['السفر والمرور: وسائل النقل والطريق والعودة', 'Reisen und Verkehr: Verkehrsmittel, Weg und Rückfahrt', 'وسائل النقل والسؤال عن الطريق والعودة', 'mit + Dat. beim Verkehrsmittel · nach/zu bei Zielen · fragen nach + Dat. · Perfekt · trennbares Verb', 'explicit', 40, 13],
    ['العمل والمكتب: التقديم والموعد والرد', 'Arbeit und Büro: Bewerbung, Termin und Rückmeldung', 'التقديم إلى وظيفة وتنظيم الموعد وتلقي الرد', 'sich informieren über + Akk. · sich bewerben um + Akk. · beantworten + Akk. · Bescheid bekommen · Modalverb + Infinitiv', 'explicit', 40, 13],
    ['وصف الناس: المهنة والأصل والعائلة والمشاعر', 'Menschen beschreiben: Beruf, Herkunft, Familie und Gefühle', 'وصف المهنة والأصل والعائلة والمشاعر', 'Beruf/Herkunft ohne Artikel · substantiviertes Adjektiv · Adjektivendung -er · sein + Adjektiv · dass + Verb am Ende', 'explicit', 40, 13]
  ];

  const B1 = [
    ['المبني للمجهول الحدثي: الحاضر والماضي البسيط والماضي المركّب', 'Vorgangspassiv: Präsens, Präteritum und Perfekt', 'وصف العمليات من دون إبراز الفاعل', 'werden + Partizip II · wurde · ist … worden · von + Dativ', 'explicit'],
    ['جمل الصلة: الحالة وحرف الجر والفعل في النهاية', 'Relativsätze: Kasus, Präpositionen und Verbendstellung', 'وصف الأشخاص والأشياء بدقة', 'Relativpronomen nach Genus und Kasus · Präposition + Relativpronomen · Verb am Ende', 'explicit'],
    ['جمل التنازل مع obwohl: الفعل في النهاية وقلب الجملة الرئيسية', 'Konzessivsätze mit obwohl: Verbendstellung und Hauptsatzinversion', 'التعبير عن تناقض بين ظرف ونتيجة', 'obwohl + Verb am Ende · vorangestellter Nebensatz + Verb zuerst · trotzdem/allerdings + V2 · trotz + Genitiv · zwar … aber / einerseits … andererseits', 'explicit'],
    ['النتيجة والسبب: موضع الفعل مع deshalb وdenn وweil', 'Folge und Grund: Verbstellung mit deshalb, denn und weil', 'ربط السبب بالنتيجة والتعليل', 'deshalb/deswegen/daher/folglich + V2 · denn في الموضع صفر بلا قلب · weil + Verb am Ende', 'explicit'],
    ['جمل الغاية مع um … zu وdamit: الفاعل نفسه أو فاعل جديد', 'Finalsätze mit um … zu und damit: gleiches oder neues Subjekt', 'التعبير عن الغاية والهدف', 'um … zu bei gleichem Subjekt · damit + Verb am Ende bei neuem Subjekt · zu im trennbaren Verb · vorangestellte Finalangabe + V2', 'explicit'],
    ['المصدر مع zu', 'Infinitiv mit zu', 'النية', 'Infinitiv mit zu', 'explicit'],
    ['لو كان', 'Irrealis', 'الخيال', 'Konjunktiv II irreal', 'explicit'],
    ['تصريف n', 'n-Deklination', 'الناس', 'n-Deklination', 'explicit'],
    ['المستقبل', 'Futur', 'الخطة', 'werden', 'explicit'],
    ['سرد الماضي', 'Präteritum erzählen', 'السرد', 'Präteritum السردي', 'explicit'],
    ['الإضافة', 'Genitiv', 'الانتماء', 'Genitiv', 'explicit'],
    ['الصفة كاملة', 'Adjektivdeklination', 'الوصف', 'نهايات الصفة الثلاثة', 'explicit'],
    ['als وwenn', 'als und wenn', 'الزمن', 'als مرة وwenn تكرار', 'explicit'],
    ['السؤال غير المباشر', 'Indirekte Frage', 'النقل', 'ob وW في الآخر', 'explicit'],
    ['الظن', 'Vermutung', 'الدرجة', 'könnte وwohl', 'explicit'],
    ['قراءة رقم', 'Statistik', 'الأرقام', 'قراءة رسم بسيط', 'explicit'],
    ['طلب عمل', 'Bewerbung', 'العمل', 'شكل الطلب', 'explicit'],
    ['شكوى', 'Beschwerde', 'الخدمة', 'شكوى مهذبة', 'explicit'],
    ['البيئة', 'Umwelt', 'البيئة', 'رأي في عادة بيئية', 'explicit'],
    ['الإعلام', 'Medien', 'الإعلام', 'تلخيص خبر', 'explicit'],
    ['التكوين', 'Ausbildung', 'التعلم', 'مقارنة مسارين', 'explicit'],
    ['المدينة', 'Stadt', 'السكن', 'ميزة وعيوب حي', 'explicit'],
    ['التأمين', 'Versicherung', 'البيروقراطية', 'Anmeldung بخط عريض', 'explicit'],
    ['الاستهلاك', 'Konsum', 'الشراء', 'قرار شراء معلّل', 'explicit'],
    ['التطوع', 'Ehrenamt', 'المجتمع', 'وصف تجربة', 'explicit'],
    ['رحلة معقدة', 'Reiseplanung', 'السفر', 'خطة ببدائل', 'explicit'],
    ['تعليل الرأي', 'Meinung begründen', 'الحجاج', 'لأن ومثال', 'explicit'],
    ['التلخيص', 'Zusammenfassung', 'القراءة', 'تلخيص فقرة', 'explicit'],
    ['الحوار', 'Diskussion', 'النقاش', 'موافقة جزئية', 'explicit'],
    ['الرسالة الرسمية', 'Formeller Brief', 'الكتابة', 'افتتاح رسمي', 'explicit'],
    ['عرض', 'Präsentation', 'التحدّث', 'هيكل ثلاث دقائق', 'explicit'],
    ['الاستماع لمقابلة', 'Interview', 'السماع', 'التقاط موقف', 'explicit'],
    ['نص رأي', 'Kommentar', 'القراءة', 'تمييز الواقعة من الرأي', 'explicit'],
    ['شرط مهذب', 'Höfliche Bedingung', 'الأدب', 'wenn + würde', 'explicit'],
    ['مقارنة أنظمة', 'Vergleich', 'المجتمع', 'مقارنة بلدين بحد', 'explicit'],
    ['مشكلة عمل', 'Arbeitsproblem', 'العمل', 'اقتراح حل', 'explicit'],
    ['صحة عامة', 'Gesundheitssystem', 'الصحة', 'موعد وتأمين بجملة', 'explicit'],
    ['مراجعة B1', 'Wiederholung B1', 'المراجعة', 'جمع الوصلات', 'explicit'],
    ['شكل امتحان B1', 'Prüfungsform B1', 'شكل الامتحان', 'شكل Goethe B1 لا محاكاة', 'explicit'],
    ['جسر إلى B2', 'Übergang', 'الحدود', 'ما لا يكفي لـ B2', 'explicit'],
    /* Unit 6 — amendment B1-L2: the B1 match found 219 entries the learner already
       meets in the material and no word list names (tools/goethe-b1-candidates.txt),
       and a B1 lesson holds 40 words, so the promotion needs its own six-lesson unit. */
    ['الضمائر الظرفية', 'Pronominaladverbien', 'الإشارة إلى شيء', 'da(r) + Präposition', 'explicit'],
    ['اسم الفاعل والمفعول كصفة', 'Partizip als Adjektiv', 'الوصف', 'Partizip I und II كصفة', 'explicit'],
    ['الروابط المزدوجة', 'Zweiteilige Konnektoren', 'الربط', 'entweder oder وje desto', 'explicit'],
    ['المجهول مع أفعال المساعدة', 'Passiv mit Modalverben', 'الحدث', 'muss werden', 'explicit'],
    ['الأسلوب الاسمي', 'Nominalstil', 'الكتابة الرسمية', 'beim Ausfüllen des Formulars', 'explicit'],
    ['الاشتقاق', 'Wortbildung', 'المفردات', 'in وung وheit', 'explicit'],
    /* Unit 7 — amendment B1-L3: the material step grew the promotion pool to 371
       entries and a unit holds 240 slots, so unit 7 carries the first 240. */
    ['في المؤسسة', 'Im Betrieb', 'العمل', 'bildet … aus und besprechen', 'explicit'],
    ['في الطريق', 'Unterwegs', 'المرور', 'an die Küste und am Ufer', 'explicit'],
    ['البيت والحرفة', 'Haus und Handwerk', 'السكن', 'im Keller und wurde beschädigt', 'explicit'],
    ['الصحة والمشاعر', 'Gesundheit und Gefühle', 'الصحة', 'tut weh und gegen Grippe', 'explicit'],
    ['المال والأجهزة والبريد', 'Geld, Geräte und Post', 'المال', 'EC-Karte und Netzwerk', 'explicit'],
    ['الثقافة واللغة', 'Kultur und Sprache', 'الثقافة', 'Das Orchester spielt und festlegen', 'explicit'],
    /* Unit 8 — amendment B1-L4: the third material round grew the promotion pool to
       471 entries, so unit 8 carries the next 240 (six lessons of forty). */
    ['البيت والانتقال', 'Haus und Umzug', 'السكن', 'Die Couch steht und in der Etage', 'explicit'],
    ['المطبخ والسوق', 'Küche und Markt', 'الطعام', 'Paradeiser und Der Rahm ist', 'explicit'],
    ['الجسد والنفس', 'Körper und Seele', 'الصحة', 'wütend auf und entspanne ich mich', 'explicit'],
    ['العمل والمكتب', 'Arbeit und Büro', 'المهنة', 'schreibe … auf und konzentrieren auf', 'explicit'],
    ['الإدارة والتعليم', 'Verwaltung und Schule', 'التعليم', 'anzugeben und schaffen … an', 'explicit'],
    ['الطبيعة والرياضة', 'Natur und Sport', 'الترفيه', 'begegne ich dem und Es donnert', 'explicit'],
    /* Unit 9 — amendment B1-L5: the fourth material round carried every entry the corpus
       lacked, so the pool (494) can be named; unit 9 carries 240 of it. */
    ['البيت والأجهزة', 'Haus und Geräte', 'السكن', 'Der Abfalleimer steht und abonnieren', 'explicit'],
    ['المهن والعمل', 'Berufe und Betrieb', 'المهنة', 'Die Arbeiterin hilft und einstellen', 'explicit'],
    ['التعليم والدلائل', 'Bildung und Nachschlagen', 'التعليم', 'Das Denkmal steht und nachschlagen', 'explicit'],
    ['السلوك والمشاعر', 'Verhalten und Gefühl', 'المشاعر', 'uns amüsieren und weder … noch', 'explicit'],
    ['المرور والسفر', 'Verkehr und Reise', 'المرور', 'anschnallen und verhaften', 'explicit'],
    ['الطعام والصحة', 'Essen und Gesundheit', 'الطعام', 'Das Schlagobers ist und spürt', 'explicit'],
    /* Unit 10 — amendment B1-L6: the last 253 pool entries are named, which closes the
       B1 match at 100% in both measures. Seven lessons (37 + 6 x 36) because 253 does
       not divide by the forty-word ceiling and a 13-word lesson would fall under the
       B1 floor of twenty; each row declares its own count (r[5], r[6]). */
    ['الأمن والقانون', 'Sicherheit und Recht', 'القانون', 'Der Einbruch war und stehlen', 'explicit', 37, 15],
    ['الإدارة والمدرسة', 'Verwaltung und Schule', 'الإدارة', 'ankündigen und herausfinden', 'explicit', 36, 15],
    ['البيئة والطبيعة', 'Umwelt und Natur', 'البيئة', 'Das Abgas schadet und stammen aus', 'explicit', 36, 15],
    ['الأفعال والظروف', 'Verben und Umstände', 'الزمن', 'Zunächst lesen wir und zweifeln an', 'explicit', 36, 15],
    ['الأشياء والصفات', 'Dinge und Eigenschaften', 'الوصف', 'derselbe und Fluss entlang', 'explicit', 36, 15],
    ['الناس والمدينة', 'Menschen und Stadt', 'المجتمع', 'Im Feber beginnt und miteinander', 'explicit', 36, 15],
    ['الربط والتعميم', 'Verbindung und Allgemeines', 'الربط', 'Die gesamte Verwaltung und indem', 'explicit', 36, 15]
  ];

  const B2 = [
    ['تحليل نص', 'Textanalyse', 'تحليل', 'text-analysis'],
    ['ورشة كتابة: موقف', 'Erörterung', 'حجاج', 'writing'],
    ['نقاش', 'Diskussion', 'نقاش', 'discussion'],
    ['سماع محاضرة', 'Vortrag', 'سماع', 'listening'],
    ['تقنية الامتحان: قراءة', 'Lesetechnik', 'امتحان', 'exam-technique'],
    ['ورشة كتابة: شكوى', 'Beschwerdebrief', 'شكوى رسمية', 'writing'],
    ['نقاش: عمل', 'Arbeit diskutieren', 'العمل', 'discussion'],
    ['سماع لهجة', 'Dialekt', 'تمييز لهجة', 'listening'],
    ['تحليل رسم', 'Grafik', 'تعليق على بيانات', 'text-analysis'],
    ['ورشة كتابة: تلخيص', 'Zusammenfassung', 'تلخيص', 'writing'],
    ['نقاش: إعلام', 'Medien diskutieren', 'الإعلام', 'discussion'],
    ['سماع مقابلة', 'Interview B2', 'مقابلة', 'listening'],
    ['تقنية: كتابة موقوتة', 'Timed writing', 'امتحان', 'exam-technique'],
    ['تحليل تعليق', 'Kommentaranalyse', 'رأي', 'text-analysis'],
    ['نقاش: بيئة', 'Umwelt diskutieren', 'البيئة', 'discussion'],
    ['سماع أخبار', 'Nachrichten', 'أخبار', 'listening'],
    ['ورشة: رسالة رسمية', 'Formeller Brief B2', 'مراسلة', 'writing'],
    ['تقنية: تحدّث', 'Sprechtechnik', 'امتحان', 'exam-technique'],
    ['نقاش: تعليم', 'Bildung', 'التعليم', 'discussion'],
    ['تحليل موقفين', 'Pro und Kontra', 'حجاج', 'text-analysis']
  ];

  const lessons = [];
  function push(id, level, ar, de, theme, rec, prod, grammar, method, kind, prereq, status) {
    const core = 'cap.' + id + '.core';
    lessons.push({
      id: id, level: level, kind: kind,
      title: { ar: ar, de: de }, theme: theme,
      words: { receptive: rec, productive: prod },
      grammar: { item: grammar, method: method },
      introduces: id === 'a0-u1-l1' ? L1.slice() : [core],
      prereqs: prereq ? [prereq] : [],
      status: status || 'mapped'
    });
  }
  ROWS.forEach((r, i) => {
    const prereq = i === 0 ? null : (i === 1 ? 'cap.a0.sprechen.greeting20' : 'cap.' + ROWS[i - 1][0] + '.core');
    push(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], prereq, 'authored');
  });
  let prev = 'cap.a1-u5-l6.core';
  A2.forEach((r, i) => {
    const id = 'a2-u' + (Math.floor(i / 6) + 1) + '-l' + ((i % 6) + 1);
    const rec = r[5] || 26;
    const prod = r[6] || (i === 29 ? 4 : 13);
    push(id, 'A2', r[0], r[1], r[2], rec, prod, r[3], r[4], 'lesson', prev, 'authored');
    prev = 'cap.' + id + '.core';
  });
  B1.forEach((r, i) => {
    /* The first five B1 units carry eight lessons each (40 rows). Amendments
       B1-L2 and B1-L3 added two six-lesson units (the Goethe B1 pool is promoted
       40 words per lesson, and a unit is what the map declares), so the id is
       built from the row's own unit: rows 0..39 → u1..u5 (8 each), rows 40..45 →
       u6 (6), rows 46..51 → u7 (6). The count is derived, never typed twice. */
    let unit, lesson;
    if (i < 40) { unit = Math.floor(i / 8) + 1; lesson = (i % 8) + 1; }
    else if (i < 46) { unit = 6; lesson = i - 40 + 1; }
    else if (i < 52) { unit = 7; lesson = i - 46 + 1; }
    else if (i < 58) { unit = 8; lesson = i - 52 + 1; }
    else if (i < 64) { unit = 9; lesson = i - 58 + 1; }
    else { unit = 10; lesson = i - 64 + 1; }
    const id = 'b1-u' + unit + '-l' + lesson;
    /* Rows may declare their own counts (unit 10 does: 37 and 36 receptive, 15
       productive each) so that a unit whose size does not divide by forty still
       keeps authored items and declared receptive slots equal. */
    push(id, 'B1', r[0], r[1], r[2], r[5] || 40, r[6] || 17, r[3], r[4], 'lesson', prev, 'authored');
    prev = 'cap.' + id + '.core';
  });
  B2.forEach((r, i) => {
    const id = 'b2-w' + String(i + 1).padStart(2, '0');
    push(id, 'B2', r[0], r[1], r[2], 90, 60, r[0], 'explicit', 'workshop', prev, 'authored');
    prev = 'cap.' + id + '.core';
  });

  function pairs(text) {
    return text.trim().split('\n').filter(Boolean).map(line => {
      const i = line.indexOf('|');
      return { de: line.slice(0, i), ar: line.slice(i + 1) };
    });
  }
  const chunks = root.DW_CHUNKS || { A1: [], A2: [], B1: [], B2: [] };

  function met(S, id) {
    const c = (S.capabilities || []).find(x => x.id === id);
    return !!(c && (c.evidence === 'E1' || c.evidence === 'E2' || c.evidence === 'E3'));
  }
  function next(S) {
    for (let i = 0; i < lessons.length; i++) {
      const lesson = lessons[i];
      const done = (S.progress || []).some(p => p.lessonId === lesson.id && p.state === 'completed');
      if (done) continue;
      const missing = (lesson.prereqs || []).filter(id => !met(S, id));
      if (missing.length) return { blocked: true, lesson: lesson, missing: missing };
      return lesson;
    }
    return null;
  }

  root.DW_SYLLABUS = {
    lessons: lessons,
    chunks: chunks,
    pairs: pairs,
    next: next,
    falseFriends: root.DW_FALSE_FRIENDS || {},
    reading: root.DW_READING || {},
    listening: root.DW_LISTENING || {},
    pronunciation: root.DW_PRONUNCIATION || {}
  };
})(typeof window !== 'undefined' ? window : global);

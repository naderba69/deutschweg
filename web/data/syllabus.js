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
    ['a1-u1-l4', 'A1', 'الضمائر في النصب', 'Akkusativ Pronomen', 'الضمائر', 28, 10, 'ضمائر النصب', 'explicit', 'lesson'],
    ['a1-u1-l5', 'A1', 'الملكية', 'Possessivartikel', 'الملكية', 28, 10, 'أداة الملكية في الرفع والنصب', 'explicit', 'lesson'],
    ['a1-u1-l6', 'A1', 'أستطيع ويجب', 'können und müssen', 'القدرة والواجب', 28, 10, 'können وmüssen', 'explicit', 'lesson'],
    ['a1-u2-l1', 'A1', 'أريد وأود', 'wollen und möchten', 'الرغبة', 28, 10, 'wollen وmöchten', 'explicit', 'lesson'],
    ['a1-u2-l2', 'A1', 'الأفعال المنفصلة', 'Trennbare Verben', 'الروتين', 28, 10, 'الفعل المنفصل', 'inductive', 'lesson'],
    ['a1-u2-l3', 'A1', 'الساعة', 'Uhrzeit', 'الوقت', 28, 10, 'قول الساعة', 'inductive', 'lesson'],
    ['a1-u2-l4', 'A1', 'حروف الزمان', 'Temporale Präpositionen', 'المواعيد', 28, 10, 'um وam وim', 'inductive', 'lesson'],
    ['a1-u2-l5', 'A1', 'حروف المكان', 'Lokale Präpositionen', 'المكان', 28, 10, 'in وan وauf كقطع', 'inductive', 'lesson'],
    ['a1-u2-l6', 'A1', 'الجمع', 'Plural', 'الأشياء الكثيرة', 28, 10, 'أنماط الجمع الشائعة', 'inductive', 'lesson'],
    ['a1-u3-l1', 'A1', 'الطعام', 'Essen', 'الطعام', 28, 10, 'إطارات bestellen وmöchten', 'inductive', 'lesson'],
    ['a1-u3-l2', 'A1', 'التسوق', 'Einkaufen', 'التسوق', 28, 10, 'السعر والكمية', 'inductive', 'lesson'],
    ['a1-u3-l3', 'A1', 'يومي', 'Tagesablauf', 'اليوم', 28, 10, 'ترتيب اليوم بالأفعال المنفصلة', 'inductive', 'lesson'],
    ['a1-u3-l4', 'A1', 'الماضي مع haben', 'Perfekt mit haben', 'الأحداث', 28, 10, 'Perfekt مع haben', 'explicit', 'lesson'],
    ['a1-u3-l5', 'A1', 'الماضي مع sein', 'Perfekt mit sein', 'الحركة', 28, 10, 'Perfekt مع sein', 'explicit', 'lesson'],
    ['a1-u3-l6', 'A1', 'الموعد', 'Termine', 'المواعيد', 28, 10, 'اقتراح موعد وقبوله', 'inductive', 'lesson'],
    ['a1-u4-l1', 'A1', 'السكن', 'Wohnen', 'البيت', 28, 10, 'وصف غرفة بسيط', 'inductive', 'lesson'],
    ['a1-u4-l2', 'A1', 'عند الطبيب', 'Beim Arzt', 'الجسم', 28, 10, 'ألم بسيط وطلب مساعدة', 'inductive', 'lesson'],
    ['a1-u4-l3', 'A1', 'الطريق', 'Wegbeschreibung', 'الاتجاه', 28, 10, 'rechts وlinks وgeradeaus', 'inductive', 'lesson'],
    ['a1-u4-l4', 'A1', 'رسالة قصيرة', 'Kurze Nachricht', 'الكتابة القصيرة', 28, 10, 'شكل الرسالة القصيرة', 'explicit', 'lesson'],
    ['a1-u4-l5', 'A1', 'مراجعة A1', 'Wiederholung A1', 'المراجعة', 20, 10, 'جمع الأنماط لا درسًا جديدًا', 'explicit', 'lesson'],
    ['a1-u4-l6', 'A1', 'شكل امتحان A1', 'Prüfungsform A1', 'شكل الامتحان', 8, 0, 'شكل Start Deutsch 1 لا محاكاة', 'explicit', 'lesson'],

    ['a1-u5-l1', 'A1', 'البريد والهاتف', 'Post und Telefon', 'المراسلة', 11, 4, 'أسماء البريد والهاتف في سياقها', 'inductive', 'lesson'],
    ['a1-u5-l2', 'A1', 'المصرف والعمل', 'Bank und Arbeit', 'المصرف', 11, 4, 'الخدمات وحروف جرها: bei · am · zur', 'inductive', 'lesson'],
    ['a1-u5-l3', 'A1', 'المدرسة والوثائق', 'Schule und Papiere', 'الوثائق', 11, 4, 'الاستمارة الرسمية: bei · Genitiv', 'explicit', 'lesson'],
    ['a1-u5-l4', 'A1', 'البيت والجوار', 'Zuhause und Nachbarschaft', 'السكن', 11, 4, 'أسماء الأماكن بلا أداة: in Halle B', 'inductive', 'lesson'],
    ['a1-u5-l5', 'A1', 'السفر والطريق', 'Reisen und Verkehr', 'السفر', 11, 4, 'المنفصل في السفر: abfahren · einsteigen', 'inductive', 'lesson'],
    ['a1-u5-l6', 'A1', 'مراجعة قائمة غوته A1', 'Wortliste A1', 'المراجعة', 11, 4, 'Dativ مع gratulieren وgefallen', 'explicit', 'lesson']
  ];

  const A2 = [
    ['داتيف', 'Dativ', 'الإعطاء', 'نظام الداتيف', 'explicit'],
    ['أفعال الداتيف', 'Dativverben', 'المساعدة', 'helfen وgeben', 'explicit'],
    ['حروف الاتجاهين', 'Wechselpräpositionen', 'المكان والحركة', 'Wechselpräpositionen', 'explicit'],
    ['لأن', 'weil', 'السبب', 'weil والفعل في الآخر', 'explicit'],
    ['أنّ', 'dass', 'النقل', 'dass', 'explicit'],
    ['إذا', 'wenn', 'الشرط البسيط', 'wenn', 'explicit'],
    ['المقارنة', 'Komparativ', 'المقارنة', 'صيغة -er', 'inductive'],
    ['صيغة التفضيل', 'Superlativ', 'التفضيل', 'am …sten', 'inductive'],
    ['نهاية الصفة في الرفع', 'Adjektiv Nominativ', 'الوصف', 'نهاية الصفة في الرفع', 'explicit'],
    ['نهاية الصفة في النصب', 'Adjektiv Akkusativ', 'الوصف', 'نهاية الصفة في النصب', 'explicit'],
    ['الأفعال الانعكاسية', 'Reflexiv', 'العناية', 'sich waschen', 'inductive'],
    ['ماضي sein وhaben', 'Präteritum sein/haben', 'الخلفية', 'war وhatte', 'explicit'],
    ['würde', 'Konjunktiv II würde', 'الأدب', 'würde', 'explicit'],
    ['فعل وحرف', 'Verben mit Präposition', 'الإطارات', 'warten auf', 'inductive'],
    ['إضافة الأسماء', 'Genitiv der Namen', 'الانتماء', 'Annas Buch', 'inductive'],
    ['السفر', 'Reisen', 'السفر', 'إطار الرحلة', 'inductive'],
    ['الصحة', 'Gesundheit', 'الصحة', 'وصف عرض', 'inductive'],
    ['العمل', 'Arbeit', 'العمل', 'وصف يوم عمل', 'inductive'],
    ['المدرسة', 'Schule', 'التعلم', 'حديث عن دورة', 'inductive'],
    ['الأعياد', 'Feste', 'الاحتفال', 'دعوة ورد', 'inductive'],
    ['الملابس', 'Kleidung', 'الملابس', 'وصف ما ألبس', 'inductive'],
    ['الطقس', 'Wetter', 'الطقس', 'جملة طقس', 'inductive'],
    ['الدعوة', 'Einladung', 'الدعوة', 'قبول واعتذار', 'inductive'],
    ['مشكلة صغيرة', 'Ein Problem', 'حل مشكلة', 'etwas funktioniert nicht', 'inductive'],
    ['حكاية ماضٍ', 'Vergangenheit erzählen', 'السرد', 'Perfekt متصل', 'explicit'],
    ['رأي بسيط', 'Einfache Meinung', 'الرأي', 'ich finde', 'inductive'],
    ['رسالة أطول', 'Ein kurzer Brief', 'الرسالة', 'افتتاح وخاتمة', 'explicit'],
    ['الهاتف', 'Telefon', 'الهاتف', 'إطار المكالمة', 'inductive'],
    ['مراجعة A2', 'Wiederholung A2', 'المراجعة', 'جمع A2', 'explicit'],
    ['شكل امتحان A2', 'Prüfungsform A2', 'شكل الامتحان', 'شكل Goethe A2 لا محاكاة', 'explicit'],
    /* The Goethe-A2-list unit: the words the official list carries and the app
       did not have yet (tools/goethe-a2-gap.txt). 35 words per lesson, so the
       row declares its own receptive count instead of the A2 default 26. */
    ['الجسم والملابس', 'Körper und Kleidung', 'الجسم واللباس', 'أسماء يومية بأدواتها', 'inductive', 35, 13],
    ['الطعام والموسيقى', 'Essen und Musik', 'الطعام والترفيه', 'الكمية والطلب', 'inductive', 35, 13],
    ['الرياضة والطبيعة', 'Sport und Natur', 'الرياضة والخارج', 'اللعبة والمكان', 'inductive', 35, 13],
    ['السفر والمرور', 'Reisen und Verkehr', 'السفر', 'إطار الرحلة والموعد', 'inductive', 35, 13],
    ['العمل والمكتب', 'Arbeit und Büro', 'العمل', 'إطار المكتب والطلب', 'inductive', 35, 13],
    ['الناس والمشاعر', 'Menschen und Gefühle', 'الناس', 'وصف الأشخاص', 'inductive', 35, 13]
  ];

  const B1 = [
    ['المبني للمجهول', 'Passiv', 'الحدث لا الفاعل', 'Vorgangspassiv', 'explicit'],
    ['جملة الصلة', 'Relativsatz', 'التحديد', 'Relativpronomen', 'explicit'],
    ['رغم أن', 'obwohl', 'التنازل', 'obwohl', 'explicit'],
    ['مع ذلك', 'trotzdem', 'التنازل', 'trotzdem وV2', 'explicit'],
    ['لكي', 'damit und um zu', 'الغاية', 'damit وum zu', 'explicit'],
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
    ['جسر إلى B2', 'Übergang', 'الحدود', 'ما لا يكفي لـ B2', 'explicit']
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
    const id = 'b1-u' + (Math.floor(i / 8) + 1) + '-l' + ((i % 8) + 1);
    push(id, 'B1', r[0], r[1], r[2], 40, 17, r[3], r[4], 'lesson', prev, 'authored');
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

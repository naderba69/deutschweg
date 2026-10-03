/* Deutschweg — P3.2 lexical layer, B1 production unit 17 (last):
   b1-u5-l5 … b1-u5-l8. Same row format as vocab-b1-11.js. */

module.exports = {
  'b1-u5-l5': {
    items: [
      ['die Praxis', 'die Praxen', 'العيادة', 'Die Praxis ist montags geschlossen.', 'Die Clinic ist montags geschlossen.', 'clinic إنجليزية؛ die Praxis (Klinik = مستشفى).', 'falser-freund'],
      ['der Hausarzt', 'die Hausärzte', 'طبيب العائلة', 'Zuerst gehe ich zum Hausarzt.', 'Zuerst gehe ich beim Hausarzt.', 'الذهاب: zum Hausarzt؛ beim للوجود هناك.', 'präposition'],
      ['der Facharzt', 'die Fachärzte', 'الطبيب المختص', 'Für den Facharzt brauche ich eine Überweisung.', 'Für den Facharzt brauche ich einen Überweisung.', 'Überweisung مؤنثة: eine Überweisung.', 'genus'],
      ['die Überweisung', 'die Überweisungen', 'الإحالة إلى مختص', 'Die Überweisung bekomme ich vom Hausarzt.', 'Die Überweisung bekomme ich von Hausarzt.', 'von + داتيف بالأداة: vom Hausarzt.', 'kasus'],
      ['die Sprechstunde', 'die Sprechstunden', 'ساعات الاستقبال', 'Die Sprechstunde ist von 8 bis 12 Uhr.', 'Die Sprechstunde ist von 8 bis 12 Uhren.', 'Uhr لا تُجمع في الساعة: 12 Uhr.', 'plural'],
      ['die Krankenkasse', 'die Krankenkassen', 'صندوق التأمين الصحي', 'Die Krankenkasse übernimmt die Kosten.', 'Die Krankenkasse übernimmt die Kosten über.', 'übernehmen غير منفصل.', 'wortstellung'],
      ['die Versichertenkarte', 'die Versichertenkarten', 'بطاقة التأمين', 'Bitte zeigen Sie Ihre Versichertenkarte.', 'Bitte zeigen Sie Ihren Versichertenkarte.', 'Karte مؤنثة: Ihre Versichertenkarte.', 'genus'],
      ['das Rezept', 'die Rezepte', 'الوصفة الطبية', 'Der Arzt hat mir ein Rezept ausgestellt.', 'Der Arzt hat mir ein Rezept ausgestellen.', 'Partizip II: ausgestellt.', 'konjugation'],
      ['verschreiben', 'verschreibt · verschrieb · hat verschrieben', 'يصف دواءً', 'Die Ärztin hat mir Tabletten verschrieben.', 'Die Ärztin hat mir Tabletten verschreibt.', 'Partizip II: verschrieben.', 'konjugation', 'verschrieben'],
      ['das Medikament', 'die Medikamente', 'الدواء', 'Das Medikament nehme ich zweimal täglich.', 'Das Medikament nehme ich zweimal pro täglich.', 'zweimal täglich أو zweimal pro Tag؛ لا الاثنان.', 'lexik-kollokation'],
      ['die Apotheke', 'die Apotheken', 'الصيدلية', 'Die Apotheke hat heute Notdienst.', 'Die Pharmacie hat heute Notdienst.', 'pharmacie الفرنسية؛ die Apotheke.', 'falser-freund'],
      ['die Krankschreibung', 'die Krankschreibungen', 'شهادة المرض', 'Ich brauche eine Krankschreibung für den Arbeitgeber.', 'Ich brauche eine Krankschreibung für dem Arbeitgeber.', 'für + النصب: für den Arbeitgeber.', 'kasus'],
      ['krankgeschrieben', '—', 'مُعفى بشهادة مرضية', 'Ich bin bis Freitag krankgeschrieben.', 'Ich bin bis Freitag krankschreiben.', 'الصيغة krankgeschrieben sein بالمشارك.', 'konjugation'],
      ['die Untersuchung', 'die Untersuchungen', 'الفحص', 'Die Untersuchung dauert zwanzig Minuten.', 'Die Untersuchung dauern zwanzig Minuten.', 'مفرد ← dauert.', 'konjugation'],
      ['die Behandlung', 'die Behandlungen', 'العلاج', 'Die Behandlung wird von der Kasse bezahlt.', 'Die Behandlung wird von die Kasse bezahlt.', 'von + داتيف: von der Kasse.', 'kasus'],
      ['die Notaufnahme', 'die Notaufnahmen', 'قسم الطوارئ', 'Im Notfall fahren Sie in die Notaufnahme.', 'Im Notfall fahren Sie in der Notaufnahme.', 'الحركة: in die Notaufnahme بالنصب.', 'kasus'],
      ['die Impfung', 'die Impfungen', 'التطعيم', 'Die Impfung ist kostenlos.', 'Der Impfung ist kostenlos.', '-ung مؤنثة: die Impfung.', 'genus'],
      ['die Vorsorge', '—', 'الفحص الوقائي', 'Zur Vorsorge gehe ich einmal im Jahr zum Arzt.', 'Zur Vorsorge gehe ich einmal im Jahr zu Arzt.', 'zum Arzt (zu dem).', 'präposition'],
      ['die Wartezeit', 'die Wartezeiten', 'مدة الانتظار', 'Die Wartezeit beim Facharzt ist lang.', 'Die Wartezeit beim Facharzt ist lange.', 'بعد ist الصفة lang؛ lange ظرف للمدة.', 'deklination'],
      ['warten auf', 'wartet · wartete · hat gewartet', 'ينتظر', 'Ich warte auf einen Termin beim Facharzt.', 'Ich warte für einen Termin beim Facharzt.', 'warten auf + النصب، لا für.', 'präposition', 'warte']
    ],
    tricks: [
      { trick: 'Hausarzt أولًا، ثم Überweisung، ثم Facharzt', wie: 'Zuerst zum Hausarzt · Überweisung bekommen · dann Termin beim Facharzt.', warum: 'النظام الألماني يمرّ عبر طبيب العائلة؛ من يذهب إلى المختص مباشرة ينتظر أشهرًا.', anchor: 'Für den Facharzt brauche ich eine Überweisung.' },
      { trick: 'Praxis عيادة، Klinik مستشفى، Apotheke صيدلية', wie: 'die Praxis (لا clinic) · die Klinik (مستشفى) · die Apotheke (لا pharmacie).', warum: 'الكلمات الثلاث تبدو مألوفة من الفرنسية والإنجليزية لكنها متبادلة المعنى في الألمانية.', anchor: 'Die Praxis ist montags geschlossen.' },
      { trick: 'warten auf بالنصب: لا für', wie: 'Ich warte auf einen Termin. · Ich warte auf den Bus. · Ich warte auf dich.', warum: 'attendre وwait for تُغريان بـ für، وauf + النصب هي الوحيدة الصحيحة.', anchor: 'Ich warte auf einen Termin beim Facharzt.' }
    ],
    order: [
      { satz: 'Zuerst | gehe | ich zum Hausarzt.', ar: 'أولًا أذهب إلى طبيب العائلة.' },
      { satz: 'Die Ärztin | hat | mir Tabletten | verschrieben.', ar: 'وصفت لي الطبيبة أقراصًا.' }
    ],
    writing: {
      prompt: 'أنت مريض في ألمانيا. اكتب خمس جمل: إلى أين تذهب أولًا، ماذا تُظهر في العيادة، ماذا وصف لك الطبيب، ما الذي تحتاجه لصاحب العمل، ومن يدفع العلاج.',
      promptDe: 'Zuerst gehe ich zum … · In der Praxis zeige ich … · Der Arzt hat mir … verschrieben. · Für den Arbeitgeber brauche ich … · Die Krankenkasse übernimmt …',
      points: ['zum Hausarzt أو beim Facharzt', 'verschreiben في Perfekt', 'Krankschreibung أو krankgeschrieben', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'präposition'
    }
  },

  'b1-u5-l6': {
    items: [
      ['das Passiv', '—', 'المبني للمجهول', 'Im Passiv steht werden mit dem Partizip.', 'Im Passiv steht sein mit dem Partizip.', 'مجهول الحدث بـ werden؛ sein للحالة الناتجة.', 'konjugation'],
      ['der Nebensatz', 'die Nebensätze', 'الجملة الفرعية', 'Im Nebensatz steht das Verb am Ende.', 'Im Nebensatz steht das Verb am zweiten Platz.', 'الفرعية: الفعل في الآخر؛ الموضع الثاني للرئيسية.', 'wortstellung'],
      ['der Hauptsatz', 'die Hauptsätze', 'الجملة الرئيسية', 'Nach dem Nebensatz beginnt der Hauptsatz mit dem Verb.', 'Nach dem Nebensatz beginnt der Hauptsatz mit dem Subjekt.', 'بعد الفرعية المتقدمة يأتي الفعل أولًا في الرئيسية.', 'wortstellung'],
      ['der Relativsatz', 'die Relativsätze', 'جملة الصلة', 'Der Relativsatz steht direkt nach dem Nomen.', 'Der Relativsatz steht direkt nach den Nomen.', 'nach + داتيف: nach dem Nomen.', 'kasus'],
      ['das Relativpronomen', 'die Relativpronomen', 'ضمير الصلة', 'Das Relativpronomen richtet sich nach dem Nomen.', 'Das Relativpronomen richtet sich an dem Nomen.', 'sich richten nach + داتيف.', 'präposition'],
      ['die Konjunktion', 'die Konjunktionen', 'أداة الربط', 'Obwohl ist eine Konjunktion mit Verb am Ende.', 'Obwohl ist ein Konjunktion mit Verb am Ende.', '-ion مؤنثة: eine Konjunktion.', 'genus'],
      ['das Partizip', 'die Partizipien', 'اسم المفعول', 'Das Partizip steht am Satzende.', 'Das Partizip steht am Satzanfang.', 'في Perfekt والمجهول يقف المشارك في الآخر.', 'wortstellung'],
      ['der Infinitiv', 'die Infinitive', 'المصدر', 'Nach Modalverben steht der Infinitiv ohne zu.', 'Nach Modalverben steht der Infinitiv mit zu.', 'بعد الأفعال الناقصة مصدر بلا zu.', 'konjugation'],
      ['das Modalverb', 'die Modalverben', 'الفعل الناقص', 'Das Modalverb steht auf Position zwei.', 'Der Modalverb steht auf Position zwei.', 'Verb محايد ← das Modalverb.', 'genus'],
      ['die Endung', 'die Endungen', 'النهاية الصرفية', 'Die Endung des Adjektivs hängt vom Artikel ab.', 'Die Endung des Adjektivs hängt von dem Artikel.', 'abhängen von منفصل: hängt … ab.', 'wortstellung'],
      ['die Zeitform', 'die Zeitformen', 'الزمن الصرفي', 'Im Bericht ist die Zeitform das Präteritum.', 'Im Bericht ist die Zeitform der Präteritum.', 'das Präteritum محايد.', 'genus'],
      ['die Regel', 'die Regeln', 'القاعدة', 'Die Regel gilt auch für Fragen.', 'Die Regel geltet auch für Fragen.', 'gelten: gilt.', 'konjugation'],
      ['der Fall', 'die Fälle', 'الحالة', 'In diesem Fall steht der Genitiv.', 'In diesen Fall steht der Genitiv.', 'in + داتيف: in diesem Fall.', 'kasus'],
      ['die Position', 'die Positionen', 'الموضع', 'Das Verb steht auf Position zwei.', 'Das Verb steht auf Position zweite.', 'Position zwei بالعدد الأصلي، أو an zweiter Stelle.', 'lexik-kollokation'],
      ['das Subjekt', 'die Subjekte', 'الفاعل', 'Im Passiv wird das Objekt zum Subjekt.', 'Im Passiv wird das Objekt zu Subjekt.', 'zum Subjekt (zu dem).', 'präposition'],
      ['das Objekt', 'die Objekte', 'المفعول', 'Das Objekt steht im Akkusativ oder Dativ.', 'Das Objekt steht in Akkusativ oder Dativ.', 'im Akkusativ بالأداة.', 'präposition'],
      ['die Korrektur', 'die Korrekturen', 'التصحيح', 'Nach der Korrektur lese ich den Text noch einmal.', 'Nach der Korrektur ich lese den Text noch einmal.', 'Nach der Korrektur في الموضع الأول ← lese ich.', 'wortstellung'],
      ['die Wiederholung', 'die Wiederholungen', 'المراجعة', 'Die Wiederholung festigt die Regel.', 'Die Wiederholung festigen die Regel.', 'مفرد ← festigt.', 'konjugation'],
      ['der Satzbau', '—', 'بناء الجملة', 'Der Satzbau ist das Wichtigste in B1.', 'Der Satzbau ist das wichtigste in B1.', 'الصفة المسمّاة بحرف كبير: das Wichtigste.', 'orthographie'],
      ['die Satzklammer', 'die Satzklammern', 'قوس الجملة', 'Die Satzklammer hält Verb und Partizip zusammen.', 'Die Satzklammer halt Verb und Partizip zusammen.', 'halten: hält (a ← ä).', 'konjugation']
    ],
    tricks: [
      { trick: 'أربع قواعد B1، لكلٍّ جملة نموذج واحدة', wie: 'Die Straße wird repariert. · Obwohl es regnet, gehe ich. · Der Mann, der dort wohnt … · …, damit sie es versteht.', warum: 'المراجعة بجملة نموذج لكل قاعدة أسرع من إعادة قراءة الفصول، والجملة تُستدعى في الامتحان.', anchor: 'Im Nebensatz steht das Verb am Ende.' },
      { trick: 'wird + Partizip حدث يجري، ist + Partizip حالة انتهت', wie: 'Die Straße wird repariert (الآن) · Die Straße ist repariert (انتهى).', warum: 'المساعد وحده يفرّق بين العملية والنتيجة، وهذا أول سؤال في قواعد B1.', anchor: 'Im Passiv steht werden mit dem Partizip.' },
      { trick: 'جملة الصلة تلتصق بالاسم وترسل الفعل إلى الآخر', wie: 'Der Mann, der dort wohnt, heißt Ali. — فاصلتان حول الجملة.', warum: 'الفاصلتان والفعل الأخير هما علامتا جملة الصلة، وغيابهما يحوّلها إلى جملتين رئيسيتين.', anchor: 'Der Relativsatz steht direkt nach dem Nomen.' }
    ],
    order: [
      { satz: 'Im Nebensatz | steht | das Verb am Ende.', ar: 'في الجملة الفرعية يقف الفعل في الآخر.' },
      { satz: 'obwohl | es heute | regnet.', clause: 'sub', ar: 'رغم أنها تمطر اليوم (الجملة الفرعية وحدها)' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل تراجع فيها قواعد B1، واحدة لكل قاعدة: مبني للمجهول، obwohl، جملة صلة، damit، وصفة قبل اسم بعد ein.',
      promptDe: 'Die Straße wird … · Obwohl …, … · Der Mann, der …, … · Ich …, damit … · Ich habe ein … Zimmer.',
      points: ['werden + Partizip', 'obwohl بالفعل في الآخر', 'جملة صلة بين فاصلتين', 'damit بفاعل آخر', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'wortstellung'
    }
  },

  'b1-u5-l7': {
    items: [
      ['das Modul', 'die Module', 'الوحدة الامتحانية', 'Die Prüfung hat vier Module.', 'Die Prüfung hat vier Moduls.', 'الجمع Module.', 'plural', 'Module'],
      ['der Prüfungsteil', 'die Prüfungsteile', 'جزء الامتحان', 'Jeder Prüfungsteil wird einzeln bewertet.', 'Jeder Prüfungsteil wird einzeln bewerten.', 'المجهول: wird + Partizip II: bewertet.', 'konjugation'],
      ['der Ausgleich', '—', 'التعويض بين الأجزاء', 'Es gibt keinen Ausgleich zwischen den Modulen.', 'Es gibt keine Ausgleich zwischen den Modulen.', 'Ausgleich مذكر: keinen Ausgleich.', 'genus'],
      ['die Mindestpunktzahl', 'die Mindestpunktzahlen', 'الحد الأدنى من النقاط', 'Die Mindestpunktzahl liegt bei 60 Prozent.', 'Die Mindestpunktzahl ist bei 60 Prozent.', 'liegen bei للقيمة.', 'lexik-kollokation'],
      ['der Inhaltspunkt', 'die Inhaltspunkte', 'نقطة المحتوى', 'Jeder Inhaltspunkt zählt.', 'Jeder Inhaltspunkt zählen.', 'jeder مفرد ← zählt.', 'konjugation'],
      ['die Aufgabe', 'die Aufgaben', 'المهمة', 'Lesen Sie zuerst die Aufgabe.', 'Lesen Sie zuerst den Aufgabe.', 'Aufgabe مؤنثة: die Aufgabe.', 'genus'],
      ['die Anweisung', 'die Anweisungen', 'التعليمة', 'Die Anweisung steht über dem Text.', 'Die Anweisung steht über den Text.', 'über + داتيف للمكان: über dem Text.', 'kasus'],
      ['der Antwortbogen', 'die Antwortbögen', 'ورقة الإجابة', 'Übertragen Sie die Lösungen auf den Antwortbogen.', 'Übertragen Sie die Lösungen auf dem Antwortbogen.', 'الحركة: auf den Antwortbogen بالنصب.', 'kasus'],
      ['übertragen', 'überträgt · übertrug · hat übertragen', 'ينقل (الإجابات)', 'Ich übertrage die Antworten am Ende.', 'Ich trage die Antworten am Ende über.', 'übertragen غير منفصل.', 'wortstellung', 'übertrage'],
      ['zu zweit', '—', 'اثنين معًا', 'Sprechen ist auch zu zweit.', 'Sprechen ist auch zu zwei.', 'zu zweit ظرف؛ لا zu zwei.', 'lexik-kollokation', 'zweit'],
      ['der Partner', 'die Partner', 'الشريك في المحادثة', 'Ich reagiere auf meinen Partner.', 'Ich reagiere auf mein Partner.', 'auf + النصب: meinen Partner.', 'kasus'],
      ['verlängern', 'verlängert · verlängerte · hat verlängert', 'يمدّد', 'Die Zeit wird nicht verlängert.', 'Die Zeit wird nicht verlängern.', 'المجهول: wird verlängert.', 'konjugation', 'verlängert'],
      ['die Bearbeitungszeit', 'die Bearbeitungszeiten', 'وقت الإنجاز', 'Die Bearbeitungszeit beträgt 65 Minuten.', 'Die Bearbeitungszeit beträgt 65 Minuten lang.', 'beträgt + العدد يكفي؛ lang زائدة.', 'lexik-kollokation'],
      ['der Teilnehmer', 'die Teilnehmer', 'المشارك', 'Jeder Teilnehmer bekommt einen Antwortbogen.', 'Jeder Teilnehmer bekommen einen Antwortbogen.', 'jeder مفرد ← bekommt.', 'konjugation'],
      ['das Ergebnis', 'die Ergebnisse', 'النتيجة', 'Das Ergebnis kommt nach vier Wochen.', 'Der Ergebnis kommt nach vier Wochen.', 'Ergebnis محايد (-nis).', 'genus'],
      ['das Zertifikat', 'die Zertifikate', 'الشهادة', 'Das Zertifikat gilt unbegrenzt.', 'Das Zertifikat geltet unbegrenzt.', 'gelten: gilt.', 'konjugation'],
      ['der Hörtext', 'die Hörtexte', 'النص المسموع', 'Jeden Hörtext hören Sie ein- oder zweimal.', 'Jeden Hörtext hören Sie ein- oder zweimals.', 'zweimal بلا -s.', 'lexik-kollokation'],
      ['die Wortzahl', 'die Wortzahlen', 'عدد الكلمات', 'Die Wortzahl ist ein Richtwert.', 'Die Wortzahl sind ein Richtwert.', 'مفرد ← ist.', 'konjugation'],
      ['die Prüfungsordnung', '—', 'نظام الامتحان', 'Die Prüfungsordnung erlaubt kein Wörterbuch.', 'Die Prüfungsordnung erlaubt keinen Wörterbuch.', 'Wörterbuch محايد: kein Wörterbuch.', 'genus'],
      ['die Anmeldefrist', 'die Anmeldefristen', 'مهلة التسجيل', 'Die Anmeldefrist endet vier Wochen vor der Prüfung.', 'Die Anmeldefrist endet vier Wochen vor die Prüfung.', 'vor + داتيف للزمن: vor der Prüfung.', 'kasus']
    ],
    tricks: [
      { trick: 'أربع وحدات، ولا تعويض بينها', wie: 'Lesen · Hören · Schreiben · Sprechen — كل وحدة تُجتاز وحدها بـ 60%.', warum: 'نتيجة ممتازة في وحدة لا تنقذ وحدة ساقطة؛ هذا يغيّر خطة المراجعة كلها.', anchor: 'Es gibt keinen Ausgleich zwischen den Modulen.' },
      { trick: 'كل نقطة محتوى تُكتب، لا تُلمَّح', wie: 'ثلاث نقاط في المهمة = ثلاث جمل واضحة، كل واحدة بكلمة من السؤال.', warum: 'المصحح يبحث عن كل نقطة بعلامة؛ النقطة الغائبة تكلّف أكثر من عشرة أخطاء نحوية.', anchor: 'Jeder Inhaltspunkt zählt.' },
      { trick: 'انقل الإجابات قبل انتهاء الوقت بخمس دقائق', wie: 'Übertragen Sie die Lösungen auf den Antwortbogen. — الوقت لا يُمدَّد للنقل.', warum: 'إجابة صحيحة على ورقة المسودة لا تُحتسب؛ خمس دقائق للنقل جزء من الزمن المحدد.', anchor: 'Die Zeit wird nicht verlängert.' }
    ],
    order: [
      { satz: 'Jeder Prüfungsteil | wird | einzeln | bewertet.', ar: 'يُقيَّم كل جزء من الامتحان على حدة.' },
      { satz: 'Die Zeit | wird | nicht | verlängert.', ar: 'لا يُمدَّد الوقت.' }
    ],
    writing: {
      prompt: 'اكتب خطة استعدادك لامتحان B1 في خمس جمل: الوحدات الأربع ولا تعويض، أي وحدة أضعف وماذا تفعل، كيف تضمن كل نقطة محتوى في الكتابة، كيف تتدرب على المحادثة باثنين، ومتى تنقل الإجابات.',
      promptDe: 'Die Prüfung hat vier Module und … · Mein schwächstes Modul ist … · Beim Schreiben … jeder Inhaltspunkt … · Sprechen übe ich zu zweit, … · Am Ende übertrage ich …',
      points: ['Modul وAusgleich', 'جملة مجهول بـ wird', 'zu zweit', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'pruefstrategie'
    }
  },

  'b1-u5-l8': {
    items: [
      ['die Gegenposition', 'die Gegenpositionen', 'الموقف المضاد', 'Ich nenne auch die Gegenposition.', 'Ich nenne auch der Gegenposition.', 'nennen + النصب: die Gegenposition.', 'kasus'],
      ['die Argumentation', 'die Argumentationen', 'الحِجاج', 'Eine gute Argumentation hat zwei Seiten.', 'Eine gute Argumentation hat zwei Seite.', 'zwei + جمع: Seiten.', 'plural'],
      ['die Deutung', 'die Deutungen', 'التأويل', 'Die Deutung kommt nach der Beschreibung.', 'Die Deutung kommt nach die Beschreibung.', 'nach + داتيف: nach der Beschreibung.', 'kasus'],
      ['die Beschreibung', 'die Beschreibungen', 'الوصف', 'Die Beschreibung bleibt sachlich.', 'Die Beschreibung bleiben sachlich.', 'مفرد ← bleibt.', 'konjugation'],
      ['deuten', 'deutet · deutete · hat gedeutet', 'يؤوّل', 'Zuerst beschreibe ich, dann deute ich.', 'Zuerst beschreibe ich, dann ich deute.', 'بعد dann يأتي الفعل: dann deute ich.', 'wortstellung', 'deute'],
      ['absolut', '—', 'مطلق', 'Absolute Wörter wie immer sind schwach.', 'Absolute Wörter wie immer sind schwache.', 'بعد sind بلا نهاية: schwach.', 'deklination', 'Absolute'],
      ['differenziert', '—', 'دقيق التفريق', 'Eine differenzierte Meinung überzeugt mehr.', 'Eine differenziert Meinung überzeugt mehr.', 'صفة قبل الاسم بنهاية: differenzierte.', 'deklination', 'differenzierte'],
      ['einräumen', 'räumt ein · räumte ein · hat eingeräumt', 'يُسلّم بـ · يعترف', 'Ich räume ein, dass das teuer ist.', 'Ich einräume, dass das teuer ist.', 'منفصل: räume … ein.', 'wortstellung', 'räume'],
      ['einschränken', 'schränkt ein · schränkte ein · hat eingeschränkt', 'يقيّد · يحدّ', 'Ich schränke meine Aussage ein.', 'Ich schränke meine Aussage.', 'einschränken منفصل: schränke … ein؛ بلا ein يتغيّر المعنى.', 'wortstellung', 'schränke'],
      ['die Einschränkung', 'die Einschränkungen', 'التحفظ · التقييد', 'Mit einer Einschränkung stimme ich zu.', 'Mit eine Einschränkung stimme ich zu.', 'mit + داتيف: mit einer Einschränkung.', 'kasus'],
      ['die Perspektive', 'die Perspektiven', 'المنظور', 'Aus der Perspektive der Eltern sieht das anders aus.', 'Aus der Perspektive von die Eltern sieht das anders aus.', 'الإضافة بالجمع: der Eltern.', 'kasus'],
      ['abwägen', 'wägt ab · wog ab · hat abgewogen', 'يوازن بين', 'Ich wäge Vor- und Nachteile ab.', 'Ich wäge Vor- und Nachteile.', 'abwägen منفصل: wäge … ab.', 'wortstellung', 'wäge'],
      ['folgern', 'folgert · folgerte · hat gefolgert', 'يستنتج', 'Daraus folgere ich, dass ein Plan nötig ist.', 'Daraus folgere ich, dass ein Plan ist nötig.', 'dass ← nötig ist في الآخر.', 'wortstellung', 'folgere'],
      ['die Stellungnahme', 'die Stellungnahmen', 'بيان الموقف', 'Die Stellungnahme endet mit einem Fazit.', 'Die Stellungnahme endet mit einen Fazit.', 'mit + داتيف: mit einem Fazit.', 'kasus'],
      ['Stellung nehmen zu', 'nimmt Stellung · nahm Stellung · hat Stellung genommen', 'يتخذ موقفًا من', 'Nehmen Sie Stellung zu dieser These.', 'Nehmen Sie Stellung zu diese These.', 'zu + داتيف: zu dieser These.', 'kasus', 'Stellung'],
      ['die Erörterung', 'die Erörterungen', 'المقالة الحِجاجية', 'In der Erörterung kommen beide Seiten vor.', 'In der Erörterung kommen beide Seiten.', 'vorkommen منفصل: kommen … vor.', 'wortstellung'],
      ['nachvollziehbar', '—', 'مفهوم المنطق', 'Das Argument ist nachvollziehbar.', 'Das Argument ist nachvollziehbare.', 'بعد ist بلا نهاية.', 'deklination'],
      ['der Maßstab', 'die Maßstäbe', 'المعيار', 'Welcher Maßstab gilt hier?', 'Welche Maßstab gilt hier?', 'Maßstab مذكر: welcher Maßstab.', 'genus'],
      ['gegenüberstellen', 'stellt gegenüber · stellte gegenüber · hat gegenübergestellt', 'يقابل بين', 'Ich stelle beide Positionen gegenüber.', 'Ich gegenüberstelle beide Positionen.', 'منفصل: stelle … gegenüber.', 'wortstellung', 'stelle'],
      ['der Übergang', 'die Übergänge', 'الانتقال', 'Der Übergang zu B2 verlangt differenzierte Sprache.', 'Der Übergang nach B2 verlangt differenzierte Sprache.', 'Übergang zu، لا nach.', 'präposition']
    ],
    tricks: [
      { trick: 'الحجة = رأي + سبب + مثال، ثم الموقف المضاد', wie: 'Ich finde … weil … Zum Beispiel … Allerdings sagen andere …', warum: 'B2 يبدأ حيث يُذكر الطرف الآخر؛ حجة بلا موقف مضاد تبقى في B1.', anchor: 'Ich nenne auch die Gegenposition.' },
      { trick: 'صف ثم أوّل: Beschreibung قبل Deutung', wie: 'Die Grafik zeigt … (وصف) · Das bedeutet … (تأويل).', warum: 'التأويل قبل الوصف يقرأه المصحح قفزًا إلى الاستنتاج، والترتيب نفسه يُطلب في الكتابة والكلام.', anchor: 'Zuerst beschreibe ich, dann deute ich.' },
      { trick: 'immer وnie وalle: استبدلها بـ oft وselten وviele', wie: 'oft statt immer · selten statt nie · viele statt alle.', warum: 'كلمة مطلقة واحدة تجعل الحجة قابلة للنقض بمثال واحد؛ التدرّج يحميها.', anchor: 'Absolute Wörter wie immer sind schwach.' }
    ],
    order: [
      { satz: 'Ich | wäge | Vor- und Nachteile | ab.', ar: 'أوازن بين المزايا والعيوب.' },
      { satz: 'Daraus | folgere | ich, | | dass ein Plan nötig ist.', ar: 'من ذلك أستنتج أن الخطة ضرورية.' }
    ],
    writing: {
      prompt: 'اكتب بيان موقف من خمس جمل حول العمل من البيت: رأي مع سبب، مثال، الموقف المضاد بـ Ich räume ein, dass، تحفظ بـ allerdings أو mit einer Einschränkung، واستنتاج بـ Daraus folgere ich.',
      promptDe: 'Ich bin der Meinung, dass …, weil … · Zum Beispiel … · Ich räume ein, dass … · Allerdings … · Daraus folgere ich, dass …',
      points: ['الموقف المضاد مذكور', 'einräumen أو einschränken منفصلًا', 'لا كلمات مطلقة مثل immer وnie وalle', 'استنتاج بـ dass والفعل في الآخر', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'wortstellung'
    }
  }
};

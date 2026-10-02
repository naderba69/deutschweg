/* Deutschweg — P3.2 lexical layer, slice 2: A1, unit 1 (lessons 1–6).

   One row per headword:
     [ headword, plural/forms, Arabic gloss, example sentence,
       the sentence an Arabic speaker typically produces, why it is wrong,
       error family, the surface form to blank when the example inflects ]

   Rules this file follows, and the compiler enforces:
     · the example must contain the blankable core of the headword;
     · no Arabic inside a German field (de / ex / err);
     · one idea per row: the example shows the form, the error is the one an
       Arabic speaker actually makes, the reason names the mechanism (article,
       case, ending, position, contraction), never "it is just wrong";
     · three tricks per lesson, tied to the form itself (the shape of the
       letter, the ending, the position, the contraction). A trick that could
       be pasted into another lesson is a slogan, and tools/validate-lesson.js
       refuses a trick whose text repeats verbatim in a second lesson.

   Counting: each A1 map row declares 28 receptive items. A ported lesson here
   carries 24 authored items = 86% of its own declaration, above the 80%
   per-lesson gate in tools/validate-syllabus.js. The map row is the promise;
   the gap is printed by the coverage table, not hidden. */

module.exports = {
  /* ---------------------------------------------------------------- l1 ---- */
  /* Theme: daily verbs. Grammar: regular present, inductive. The list gives the
     learner the ten verbs of a day plus the time words that carry the Vorfeld,
     so the position rule is met inside real sentences, not in a table. */
  'a1-u1-l1': {
    items: [
      ['wohnen', 'wohnt · wohnte · hat gewohnt', 'يسكن', 'Ich wohne in Sousse.', 'Ich wohne auf Sousse.', 'المدينة تُسكَن بـ in؛ وauf للسطح أو المكان المفتوح، فلا تصلح لعنوان سكن.', 'präposition', 'wohne'],
      ['lernen', 'lernt · lernte · hat gelernt', 'يتعلّم', 'Ich lerne jeden Tag Deutsch.', 'Ich lerne jeden Tag die Deutsch.', 'اسم اللغة بلا أداة بعد lernen؛ الـ die عادة من العربية حيث الاسم معرفة دائمًا.', 'register', 'lerne'],
      ['arbeiten', 'arbeitet · arbeitete · hat gearbeitet', 'يعمل', 'Er arbeitet jeden Tag.', 'Er arbeitet jeden Tagen.', 'jeden Tag ظرف زمني في النصب بلا نون؛ العربية تجرّ ما بعد «كل» بلا علامة.', 'deklination', 'arbeitet'],
      ['spielen', 'spielt · spielte · hat gespielt', 'يلعب', 'Die Kinder spielen im Hof.', 'Die Kinder spielt im Hof.', 'فاعل الجمع يأخذ spielen بلا t؛ التسكين على صيغة المفرد خطأ عربي شائع.', 'konjugation', 'spielen'],
      ['machen', 'macht · machte · hat gemacht', 'يفعل · يصنع', 'Was machst du am Abend?', 'Was du machst am Abend?', 'في سؤال Was يأتي الفعل ثانيًا مباشرة؛ تقديم الفاعل يجعله جملة خبر لا سؤالًا.', 'wortstellung', 'machst'],
      ['kaufen', 'kauft · kaufte · hat gekauft', 'يشتري', 'Ich kaufe zwei Brote.', 'Ich kaufe zwei Brot.', 'جمع Brot هو Brote؛ العربية تترك غير المعدود بلا جمع فينكسر العدد.', 'plural', 'kaufe'],
      ['trinken', 'trinkt · trank · hat getrunken', 'يشرب', 'Ich trinke einen Tee.', 'Ich trinke ein Tee.', 'der Tee مذكر، والمفعول به في النصب: einen Tee.', 'kasus', 'trinke'],
      ['essen', 'isst · aß · hat gegessen', 'يأكل', 'Wir essen um acht Uhr.', 'Wir esst um acht Uhr.', 'wir يأخذ essen، وesst لـ ihr وحدها؛ النهاية تُقلَّد من du.', 'konjugation', 'essen'],
      ['lesen', 'liest · las · hat gelesen', 'يقرأ', 'Sie liest einen Roman.', 'Sie lest einen Roman.', 'مع sie وer يصير lesen ← liest؛ lest صيغة ihr وحدها.', 'konjugation', 'liest'],
      ['schreiben', 'schreibt · schrieb · hat geschrieben', 'يكتب', 'Ich schreibe eine Nachricht.', 'Ich schreibe ein Nachricht.', 'die Nachricht مؤنث: eine؛ الجنس في الألمانية لا يُقاس على المعنى.', 'genus', 'schreibe'],
      ['hören', 'hört · hörte · hat gehört', 'يسمع', 'Ich höre Musik.', 'Ich höre zu Musik.', 'hören تأخذ المفعول مباشرة؛ zu تدخل مع zuhören حين يكون المعنى «ينصت لشخص».', 'präposition', 'höre'],
      ['sehen', 'sieht · sah · hat gesehen', 'يرى', 'Wir sehen heute einen Film.', 'Wir sehen gestern einen Film.', 'الظرف الماضي لا يجتمع مع المضارع؛ التصريف وحده يحمل الزمن في الألمانية.', 'konjugation', 'sehen'],
      ['gehen', 'geht · ging · ist gegangen', 'يذهب', 'Ich gehe zur Arbeit.', 'Ich gehe in die Arbeit.', 'zur Arbeit صيغة ثابتة؛ in die Arbeit تعني الدخول إلى مكان مغلق.', 'lexik-kollokation', 'gehe'],
      ['fahren', 'fährt · fuhr · ist gefahren', 'يسافر · يقود', 'Er fährt mit dem Bus.', 'Er fährt mit der Bus.', 'mit يحكم الجرّ دائمًا: dem Bus؛ الخطأ يأتي من تسكين الأداة.', 'kasus', 'fährt'],
      ['kommen', 'kommt · kam · ist gekommen', 'يأتي', 'Ich komme um acht nach Hause.', 'Ich komme um acht zu Hause.', 'الحركة إلى البيت nach Hause، والوجود في البيت zu Hause؛ الخلط يقلب المعنى.', 'lexik-kollokation', 'komme'],
      ['der Morgen', 'die Morgen', 'الصباح', 'Am Morgen trinke ich Kaffee.', 'In der Morgen trinke ich Kaffee.', 'الفترة الصباحية تأخذ am المدغمة (an + dem)، لا in.', 'präposition', 'Morgen'],
      ['der Abend', 'die Abende', 'المساء', 'Am Abend lerne ich Deutsch.', 'Am Abend ich lerne Deutsch.', 'بعد الظرف يبقى الفعل ثانيًا ثم يأتي الفاعل؛ العربية تبدأ بالفاعل بعد الظرف.', 'wortstellung', 'Abend'],
      ['die Arbeit', 'die Arbeiten', 'العمل', 'Die Arbeit beginnt um acht.', 'Der Arbeit beginnt um acht.', 'die Arbeit مؤنث؛ الجنس لا يُنقل من المعنى العربي.', 'genus', 'Arbeit'],
      ['die Schule', 'die Schulen', 'المدرسة', 'Mein Sohn geht zur Schule.', 'Mein Sohn geht in Schule.', 'zur Schule صيغة ثابتة بأداة مدغمة؛ حذف الأداة خطأ من العربية حيث «إلى المدرسة» جاهزة.', 'lexik-kollokation', 'Schule'],
      ['das Büro', 'die Büros', 'المكتب', 'Ich arbeite im Büro.', 'Ich arbeite in Büro.', 'im Büro = in + dem؛ المكان الثابت يأخذ Dativ، وحذف الأداة لا يصح.', 'kasus', 'Büro'],
      ['immer', '—', 'دائمًا', 'Ich trinke immer Tee.', 'Ich immer trinke Tee.', 'الظرف لا يزحزح الفعل من الموضع الثاني؛ «أنا دائمًا» ليست بنية ألمانية.', 'wortstellung', 'immer'],
      ['oft', '—', 'غالبًا', 'Er kommt oft zu spät.', 'Er kommt zu spät oft.', 'الظرف المتكرر يأتي قبل المكمّل (zu spät) لا بعده.', 'wortstellung', 'oft'],
      ['manchmal', '—', 'أحيانًا', 'Manchmal koche ich abends.', 'Manchmal ich koche abends.', 'إذا تقدّم الظرف إلى الأول، يأتي الفعل بعده مباشرةً.', 'wortstellung', 'manchmal'],
      ['jeden Tag', '—', 'كل يوم', 'Jeden Tag wiederhole ich zehn Wörter.', 'Jeden Tagen wiederhole ich zehn Wörter.', 'jeden Tag منصوب بلا نون؛ التعبير الزمني ليس جمعًا هنا.', 'deklination', 'Tag']
    ],
    tricks: [
      { trick: 'النهاية تحمل الفاعل', wie: 'wohne · wohnst · wohnt · wohnen: انظر إلى النهاية تعرف من يتكلّم.', warum: 'العربية تُصرّف الفعل أيضًا، لكن الألمانية تجعل النهاية القرينة الوحيدة؛ من حفظ الفعل صوتًا واحدًا أسقط t مع er.', anchor: 'du wohnst' },
      { trick: 'الفعل المصرّف ثانيًا في الجملة الرئيسية', wie: 'Am Morgen trinke ich Kaffee: الظرف أولًا، الفعل ثانيًا، الفاعل ثالثًا.', warum: 'العربية تبدأ بالفعل أو بالفاعل، والألمانية تحجز الموضع الثاني للفعل المصرّف دائمًا.', anchor: 'Am Morgen trinke ich Kaffee' },
      { trick: 'المنتظم جذره ثابت', wie: 'arbeiten · arbeitest · arbeitet: الجذر arbeit لا يتغير، والنهاية وحدها تتحرك.', warum: 'من حفظ الفعل الأول في المضارع بنى الباقي بالنهايات؛ وهذا لا يصح مع الأفعال الشاذة، فيُحفظ الشاذ وحده.', anchor: 'arbeitet' }
    ]
  },

  /* ---------------------------------------------------------------- l2 ---- */
  /* Theme: negation. The list separates the particle (nicht / kein / nie …)
     from the nouns that are typically negated, because the choice is made by
     what follows the verb, not by the meaning of the sentence. */
  'a1-u1-l2': {
    items: [
      ['nicht', '—', 'ليس · لا (نفي الفعل والصفة)', 'Ich arbeite heute nicht.', 'Ich nicht arbeite heute.', 'nicht يأتي بعد الفعل المصرّف؛ تقديمه موضعَ الفعل يقلب الجملة إلى بنية عربية.', 'wortstellung', 'nicht'],
      ['kein', '—', 'لا (نفي الاسم المذكر والمحايد)', 'Das ist kein Problem.', 'Das ist nicht Problem.', 'الاسم النكرة يُنفى بـ kein؛ nicht تنفي الفعل أو الصفة لا الاسم.', 'lexik-kollokation', 'kein'],
      ['keine', '—', 'لا (نفي المؤنث والجمع)', 'Ich habe keine Zeit.', 'Ich habe kein Zeit.', 'die Zeit مؤنث، فتأخذ keine؛ الجنس يحدّد شكل أداة النفي.', 'genus', 'keine'],
      ['keinen', '—', 'لا (نفي المذكر في النصب)', 'Ich trinke keinen Kaffee.', 'Ich trinke kein Kaffee.', 'der Kaffee مذكر في النصب، فيصير keinen؛ kein الساكنة لا تكفي.', 'kasus', 'keinen'],
      ['nichts', '—', 'لا شيء', 'Ich sage nichts.', 'Ich sage nicht etwas.', 'nichts ضمير نفي قائم بذاته؛ nicht etwas ليست صيغة ألمانية.', 'lexik-kollokation', 'nichts'],
      ['niemand', '—', 'لا أحد', 'Niemand ist hier.', 'Nicht jemand ist hier.', 'niemand كلمة واحدة تحمل النفي، ولا تُركَّب من nicht + jemand.', 'lexik-kollokation', 'niemand'],
      ['nie', '—', 'أبدًا · ولا مرّة', 'Ich trinke nie Kaffee.', 'Ich trinke nicht nie Kaffee.', 'نفي واحد يكفي؛ العربية تكرّر النفي للتوكيد والألمانية تقرأ الثاني إثباتًا.', 'lexik-kollokation', 'nie'],
      ['noch nicht', '—', 'ليس بعد', 'Er kommt noch nicht.', 'Er kommt nicht noch.', 'noch nicht وحدة واحدة بترتيب ثابت؛ القلب يغيّر المعنى أو يُفسده.', 'wortstellung', 'nicht'],
      ['nicht mehr', '—', 'لم يعد', 'Ich rauche nicht mehr.', 'Ich rauche mehr nicht.', 'nicht mehr صيغة واحدة لا تنفصل ولا تتبع ترتيب «لم يعد» العربي.', 'wortstellung', 'mehr'],
      ['nicht gern', '—', 'لا أحبّ أن (بعدم رضا)', 'Ich esse nicht gern Fisch.', 'Ich esse gern nicht Fisch.', 'nicht يسبق gern ويلتصق بها؛ المعنى: لا أستمتع، لا أنني لا آكل.', 'wortstellung', 'gern'],
      ['das Geld', '—', 'المال', 'Ich habe kein Geld.', 'Ich habe keine Geld.', 'das Geld محايد، فتأخذ kein بلا نهاية؛ الجنس يحكم الأداة.', 'genus', 'Geld'],
      ['die Zeit', '—', 'الوقت', 'Heute habe ich keine Zeit.', 'Heute habe ich nicht Zeit.', 'وقت بلا تعريف اسم نكرة، فيُنفى بـ keine؛ وليس كل ما يعنيه الوقت يُنفى بالفعل.', 'lexik-kollokation', 'Zeit'],
      ['der Hunger', '—', 'الجوع', 'Ich habe keinen Hunger.', 'Ich bin nicht Hunger.', 'الجوع في الألمانية حالة تُحمَل بـ haben؛ sein + اسم بلا أداة ليس بنية ألمانية.', 'lexik-kollokation', 'Hunger'],
      ['der Durst', '—', 'العطش', 'Ich habe keinen Durst.', 'Ich habe nicht Durst.', 'der Durst مذكر في النصب: keinen؛ ليس كل نفي معنوي يستدعي nicht.', 'kasus', 'Durst'],
      ['das Auto', '—', 'السيارة', 'Wir haben kein Auto.', 'Wir haben nicht Auto.', 'اسم نكرة ← kein، والفعل نفسه سليم فلا يُنفى بـ nicht.', 'lexik-kollokation', 'Auto'],
      ['das Handy', 'die Handys', 'الهاتف المحمول', 'Mein Handy ist nicht neu.', 'Mein Handy ist kein neu.', 'الصفة تُنفى بـ nicht؛ kein تخصّ الاسم لا الصفة.', 'deklination', 'Handy'],
      ['das Brot', 'die Brote', 'الخبز', 'Es gibt kein Brot mehr.', 'Es gibt nicht Brot mehr.', 'kein Brot mehr: النفي و‏mehr يتعلّقان بالاسم النكرة.', 'lexik-kollokation', 'Brot'],
      ['die Milch', '—', 'الحليب', 'Ich trinke keine Milch.', 'Ich trinke kein Milch.', 'die Milch مؤنث: keine، ولو كان المعنى غير معدود في العربية.', 'genus', 'Milch'],
      ['der Zucker', '—', 'السكر', 'Ich nehme keinen Zucker.', 'Ich nehme kein Zucker.', 'der Zucker مذكر في النصب: keinen.', 'kasus', 'Zucker'],
      ['die Arbeit', 'die Arbeiten', 'العمل', 'Er hat heute keine Arbeit.', 'Er hat heute nicht Arbeit.', 'الاسم النكرة يُنفى بـ kein؛ not Arbeit ينفي الفعل لا الاسم.', 'lexik-kollokation', 'Arbeit'],
      ['der Fisch', 'die Fische', 'السمك', 'Der Fisch ist nicht frisch.', 'Der Fisch ist kein frisch.', 'الصفة في الخبر تُنفى بـ nicht؛ kein لا تدخل على الصفة.', 'deklination', 'Fisch'],
      ['die Lust', '—', 'الرغبة · المزاج', 'Ich habe keine Lust.', 'Ich habe kein Lust.', 'die Lust مؤنث: keine؛ وشيوع «kein Lust» سببه أن الساكنة الأخيرة تسقط في النطق.', 'genus', 'Lust'],
      ['der Platz', 'die Plätze', 'المكان', 'Hier ist kein Platz.', 'Hier ist nicht Platz.', 'المكان نكرة ← kein Platz؛ nicht يعود على الفعل فيغيّر المعنى.', 'lexik-kollokation', 'Platz'],
      ['die Frage', 'die Fragen', 'السؤال', 'Ich habe keine Frage.', 'Ich habe kein Frage.', 'die Frage مؤنث: keine؛ الجمع Fragen يأخذ keine أيضًا.', 'genus', 'Frage']
    ],
    tricks: [
      { trick: 'اسأل: ماذا أنفي؟', wie: 'فعل أو صفة ← nicht · اسم نكرة ← kein: Ich trinke nicht · Ich habe kein Geld.', warum: 'العربية تنفي «لا» واحدة على الفعل والاسم معًا، والألمانية تختار الأداة بحسب ما بعدها، فالاختيار يسبق التركيب.', anchor: 'Ich trinke nicht.' },
      { trick: 'kein تحمل نهاية الأداة', wie: 'kein + der ← keinen Kaffee · kein + die ← keine Zeit · kein + das ← kein Geld.', warum: 'النهاية وحدها هي التي تُعلن الجنس والحالة؛ من حفظ kein ساكنة أنتج خطأ في كل اسم مذكر منصوب.', anchor: 'keine Zeit' },
      { trick: 'نفي واحد يكفي', wie: 'nie · niemand · nichts: كل كلمة تحمل نفيها معها، فلا تُضاف إليها nicht.', warum: 'العربية تكرّر النفي للتوكيد، والألمانية تعتبر النفي الثاني إثباتًا فينقلب المعنى.', anchor: 'Ich trinke nie Kaffee.' }
    ]
  },

  /* ---------------------------------------------------------------- l3 ---- */
  /* Theme: objects. Grammar: accusative article, explicit. Only the masculine
     moves; the lesson is built so the learner sees the one change next to the
     two non-changes instead of a paradigm table. */
  'a1-u1-l3': {
    items: [
      ['haben', 'hat · hatte · hat gehabt', 'يملك · عنده', 'Ich habe einen Bruder.', 'Ich habe ein Bruder.', 'der Bruder مذكر، والمفعول في النصب: einen؛ ein لا تُصرّف.', 'kasus', 'habe'],
      ['brauchen', 'braucht · brauchte · hat gebraucht', 'يحتاج', 'Ich brauche einen Stift.', 'Ich brauche ein Stift.', 'der Stift مذكر في النصب ← einen؛ الفعل المتعدّي وحده يكشف الحالة.', 'kasus', 'brauche'],
      ['suchen', 'sucht · suchte · hat gesucht', 'يبحث عن', 'Ich suche meinen Schlüssel.', 'Ich suche mein Schlüssel.', 'مع ضمير الملكية في النصب: meinen Schlüssel.', 'deklination', 'suche'],
      ['finden', 'findet · fand · hat gefunden', 'يجد', 'Ich finde den Schlüssel nicht.', 'Ich finde der Schlüssel nicht.', 'المفعول المعرفة في النصب den، لا der؛ der هنا تُقرأ فاعلًا.', 'kasus', 'finde'],
      ['nehmen', 'nimmt · nahm · hat genommen', 'يأخذ', 'Ich nehme den Bus.', 'Ich nehme der Bus.', 'der Bus في النصب ← den؛ وnehmen شاذة: nimmt مع du وer.', 'kasus', 'nehme'],
      ['kaufen', 'kauft · kaufte · hat gekauft', 'يشتري', 'Ich kaufe einen Tisch.', 'Ich kaufe ein Tisch.', 'der Tisch مذكر: ein في الرفع، einen في النصب.', 'kasus', 'kaufe'],
      ['sehen', 'sieht · sah · hat gesehen', 'يرى', 'Ich sehe den Lehrer.', 'Ich sehe der Lehrer.', 'المفعول المذكر المعرفة في النصب den؛ العربية لا تُظهر الحالة في الاسم.', 'kasus', 'sehe'],
      ['lesen', 'liest · las · hat gelesen', 'يقرأ', 'Ich lese die Zeitung.', 'Ich lese der Zeitung.', 'die Zeitung مؤنث، والمؤنث لا يتغير في النصب؛ der خطأ من Dativ.', 'genus', 'lese'],
      ['schreiben', 'schreibt · schrieb · hat geschrieben', 'يكتب', 'Ich schreibe einen Brief.', 'Ich schreibe ein Brief.', 'der Brief مذكر في النصب ← einen.', 'kasus', 'schreibe'],
      ['essen', 'isst · aß · hat gegessen', 'يأكل', 'Ich esse einen Apfel.', 'Ich esse ein Apfel.', 'der Apfel مذكر في النصب ← einen؛ النهاية هي الدليل.', 'kasus', 'esse'],
      ['der Tisch', 'die Tische', 'الطاولة', 'Ich stelle den Tisch ans Fenster.', 'Ich stelle der Tisch ans Fenster.', 'den للمذكر في النصب؛ der تجعل الطاولة فاعلًا فيغيب المفعول.', 'kasus', 'Tisch'],
      ['der Stuhl', 'die Stühle', 'الكرسي', 'Er nimmt den Stuhl.', 'Er nimmt der Stuhl.', 'الجمع Stühle بضمّة، والنصب den للمفرد المذكر.', 'plural', 'Stuhl'],
      ['der Schlüssel', 'die Schlüssel', 'المفتاح', 'Hast du den Schlüssel?', 'Hast du der Schlüssel?', 'المذكر المعرفة في النصب den؛ الجمع والمفرد متطابقان في الكتابة هنا.', 'kasus', 'Schlüssel'],
      ['der Computer', 'die Computer', 'الحاسوب', 'Ich nutze den Computer.', 'Ich nutze der Computer.', 'المفعول المذكر المعرفة في النصب den.', 'kasus', 'Computer'],
      ['der Kugelschreiber', 'die Kugelschreiber', 'القلم الجاف', 'Hast du einen Kugelschreiber?', 'Hast du ein Kugelschreiber?', 'der Kugelschreiber يأخذ einen في النصب.', 'kasus', 'Kugelschreiber'],
      ['die Tasche', 'die Taschen', 'الحقيبة', 'Ich trage die Tasche.', 'Ich trage der Tasche.', 'المؤنث لا يتغير في النصب: die؛ der هنا قراءة Dativ خاطئة.', 'kasus', 'Tasche'],
      ['die Flasche', 'die Flaschen', 'القنينة', 'Ich öffne die Flasche.', 'Ich öffne der Flasche.', 'المؤنث يبقى die في الرفع والنصب معًا.', 'kasus', 'Flasche'],
      ['die Brille', 'die Brillen', 'النظارة', 'Ich suche meine Brille.', 'Ich suche mein Brille.', 'مع المؤنث في النصب: meine Brille، لا mein.', 'deklination', 'Brille'],
      ['die Zeitung', 'die Zeitungen', 'الجريدة', 'Ich kaufe die Zeitung.', 'Ich kaufe dem Zeitung.', 'dem للمذكر وحده؛ المؤنث die في كل الحالات الظاهرة.', 'genus', 'Zeitung'],
      ['die Lampe', 'die Lampen', 'المصباح', 'Ich brauche eine Lampe.', 'Ich brauche ein Lampe.', 'die Lampe مؤنث: eine في الرفع والنصب.', 'genus', 'Lampe'],
      ['das Buch', 'die Bücher', 'الكتاب', 'Er liest das Buch.', 'Er liest der Buch.', 'das Buch محايد: das في الرفع والنصب، والجمع Bücher بضمّة.', 'plural', 'Buch'],
      ['das Heft', 'die Hefte', 'الدفتر', 'Ich nehme das Heft.', 'Ich nehme dem Heft.', 'dem للمذكر؛ المحايد يبقى das في النصب.', 'genus', 'Heft'],
      ['das Fenster', 'die Fenster', 'النافذة', 'Ich öffne das Fenster.', 'Ich öffne der Fenster.', 'das Fenster محايد، ونصبه كرفعه؛ der تُوهِم مؤنثًا.', 'genus', 'Fenster'],
      ['das Fahrrad', 'die Fahrräder', 'الدراجة', 'Ich habe ein Fahrrad.', 'Ich habe einen Fahrrad.', 'das Fahrrad محايد، فيأخذ ein لا einen؛ الجمع Fahrräder بضمّتين.', 'genus', 'Fahrrad']
    ],
    tricks: [
      { trick: 'الفعل يكشف الحالة', wie: 'haben · brauchen · kaufen · suchen: كلها تطلب مفعولًا في النصب، فالمذكر يصير einen.', warum: 'العربية تُبقي الأداة ثابتة، والألمانية تحرّكها مع وظيفة الكلمة، فالوظيفة تُقرأ من الفعل لا من المعنى.', anchor: 'Ich brauche einen Stift.' },
      { trick: 'المؤنث والمحايد لا يتحركان في النصب', wie: 'die Tasche ← die Tasche · das Heft ← das Heft: الحركة كلها في المذكر وحده.', warum: 'قاعدتان تُحفظان مرّة واحدة: ما لم يتغيّر اثنان، وما تغيّر واحد؛ الجدول كله يُختصر في هذا.', anchor: 'Ich öffne die Flasche.' },
      { trick: 'اسأل «ماذا؟» لتعرف النصب', wie: 'Ich kaufe den Tisch: ماذا أشتري؟ ← Tisch، فالأداة den.', warum: 'السؤال يكشف الوظيفة قبل حفظ الجدول، ومن فهم الوظيفة لا يحتاج أن يتذكّر الصف في الجدول.', anchor: 'Ich kaufe den Tisch.' }
    ]
  },

  /* ---------------------------------------------------------------- l4 ---- */
  /* Theme: pronouns. Grammar: accusative pronouns, explicit. The list pairs the
     pronoun with the verb that forces the case, because the pronoun alone is a
     shape without a trigger. */
  'a1-u1-l4': {
    items: [
      ['mich', '—', 'ـني · إيّاي', 'Kennst du mich?', 'Kennst du ich?', 'بعد الفعل المتعدّي يأتي الضمير في صيغة النصب mich؛ ich لا تصلح مفعولًا.', 'kasus', 'mich'],
      ['dich', '—', 'ـك · إيّاك', 'Ich sehe dich morgen.', 'Ich sehe du morgen.', 'dich صيغة النصب لـ du، والضمير يتغيّر شكله كاملًا.', 'kasus', 'dich'],
      ['ihn', '—', 'إيّاه (مذكر)', 'Ich sehe ihn.', 'Ich sehe er.', 'er في الرفع و ihn في النصب؛ العربية لا تُفرّق فتسقط er.', 'kasus', 'ihn'],
      ['sie', '—', 'إيّاها (مؤنث)', 'Ich frage sie.', 'Ich frage ihr.', 'ihr للـ Dativ؛ المفعول المباشر هنا sie.', 'kasus', 'sie'],
      ['es', '—', 'إيّاه (محايد)', 'Ich brauche es.', 'Ich brauche ihm.', 'المحايد لا يتحوّل إلى ihm في النصب؛ بقي es كما هو.', 'kasus', 'es'],
      ['uns', '—', 'إيّانا', 'Er besucht uns.', 'Er besucht wir.', 'wir في الرفع و uns في النصب.', 'kasus', 'uns'],
      ['euch', '—', 'إيّاكم', 'Ich rufe euch an.', 'Ich rufe ihr an.', 'ihr في الرفع و euch في النصب.', 'kasus', 'euch'],
      ['Sie', '—', 'حضرتك (صيغة الأدب)', 'Ich rufe Sie morgen an.', 'Ich rufe Ihnen morgen an.', 'صيغة الأدب تبقى Sie بحرف كبير في الرفع والنصب؛ Ihnen للـ Dativ.', 'register', 'Sie'],
      ['anrufen', 'ruft an · rief an · hat angerufen', 'يتّصل بـ', 'Ich rufe dich an.', 'Ich rufe dich.', 'anrufen فعل منفصل، والجزء an يبقى في آخر الجملة؛ حذفه يُفقد الفعل معناه.', 'wortstellung', 'rufe'],
      ['fragen', 'fragt · fragte · hat gefragt', 'يسأل', 'Ich frage dich etwas.', 'Ich frage dir etwas.', 'fragen تأخذ مفعولًا منصوبًا مباشرًا بلا حرف جر.', 'kasus', 'frage'],
      ['besuchen', 'besucht · besuchte · hat besucht', 'يزور', 'Wir besuchen unsere Oma.', 'Wir besuchen zu unserer Oma.', 'besuchen تأخذ المفعول مباشرة؛ «zu» ترجمة حرفية للعربية.', 'präposition', 'besuchen'],
      ['kennen', 'kennt · kannte · hat gekannt', 'يعرف (شخصًا)', 'Ich kenne ihn gut.', 'Ich kenne ihm gut.', 'kennen تأخذ النصب: ihn لا ihm.', 'kasus', 'kenne'],
      ['lieben', 'liebt · liebte · hat geliebt', 'يحبّ', 'Ich liebe dich.', 'Ich liebe du.', 'dich في النصب؛ الفاعل du لا يُستعمل مفعولًا.', 'kasus', 'liebe'],
      ['abholen', 'holt ab · holte ab · hat abgeholt', 'يستقبل · يأخذ معه', 'Ich hole dich ab.', 'Ich abhole dich.', 'الجزء ab يبقى في آخر الجملة؛ الفعل المنفصل لا يبقى موصولًا.', 'wortstellung', 'hole'],
      ['bringen', 'bringt · brachte · hat gebracht', 'يُحضر', 'Bringst du den Kaffee?', 'Bringst du der Kaffee?', 'der Kaffee في النصب ← den.', 'kasus', 'bringst'],
      ['grüßen', 'grüßt · grüßte · hat gegrüßt', 'يحيّي · يسلّم على', 'Ich grüße dich.', 'Ich grüße du.', 'الضمير بعد grüßen في النصب: dich.', 'kasus', 'grüße'],
      ['verstehen', 'versteht · verstand · hat verstanden', 'يفهم', 'Ich verstehe dich nicht.', 'Ich verstehe du nicht.', 'verstehen تأخذ ضمير النصب، والنفي لا يغيّر الحالة.', 'kasus', 'verstehe'],
      ['sehen', 'sieht · sah · hat gesehen', 'يرى', 'Wir sehen uns morgen.', 'Wir sehen wir morgen.', 'uns صيغة النصب؛ wir لا تكون مفعولًا أبدًا.', 'kasus', 'sehen'],
      ['der Freund', 'die Freunde', 'الصديق', 'Ich kenne deinen Freund.', 'Ich kenne dein Freund.', 'der Freund مذكر في النصب مع dein ← deinen.', 'deklination', 'Freund'],
      ['die Freundin', 'die Freundinnen', 'الصديقة', 'Ich rufe meine Freundin an.', 'Ich rufe mein Freundin an.', 'die Freundin مؤنث: meine في الرفع والنصب.', 'genus', 'Freundin'],
      ['das Kind', 'die Kinder', 'الطفل', 'Ich sehe das Kind.', 'Ich sehe dem Kind.', 'dem للـ Dativ؛ المفعول المباشر das Kind.', 'kasus', 'Kind'],
      ['die Leute', '—', 'الناس', 'Ich kenne die Leute.', 'Ich kenne den Leute.', 'جمع المؤنث المعرّف في النصب يبقى die؛ den للمذكر وحده.', 'plural', 'Leute'],
      ['der Lehrer', 'die Lehrer', 'المعلّم', 'Ich frage den Lehrer.', 'Ich frage dem Lehrer.', 'المذكر المنصوب den؛ dem تُفسد الوظيفة.', 'kasus', 'Lehrer'],
      ['die Eltern', '—', 'الوالدان', 'Ich besuche meine Eltern.', 'Ich besuche mein Eltern.', 'die Eltern جمع دائمًا، فتأخذ meine.', 'plural', 'Eltern']
    ],
    tricks: [
      { trick: 'الضمير المنصوب كلمة تُحفظ وحدها', wie: 'ich ← mich · du ← dich · er ← ihn · wir ← uns: الشكل يتغيّر كاملًا، لا تُضاف نهاية.', warum: 'العربية تُلصق الضمير بالفعل وتُبقيه واحدًا، والألمانية تجعله كلمة مستقلة بحالتين؛ ومن أعاد du مكان dich فقد نقل عادةً لا قاعدة.', anchor: 'Ich sehe ihn.' },
      { trick: 'anrufen يشقّ الجملة', wie: 'Ich rufe dich an: الجزء الأول يُصرّف، والضمير في الوسط، وan في الآخر.', warum: 'الفعل المنفصل يُحفظ منجزًا؛ حذف الجزء الثاني يغيّر المعنى أو يترك جملة ناقصة.', anchor: 'Ich rufe dich an.' },
      { trick: 'besuchen بلا حرف جر', wie: 'Ich besuche dich، لا «zu dir».', warum: 'العربية تقول «أزور إلى»، والألمانية تجعل الفعل متعدّيًا مباشرًا؛ الحرف الزائد خطأ ترجمة لا خطأ نحو.', anchor: 'Ich besuche dich.' }
    ]
  },

  /* ---------------------------------------------------------------- l5 ---- */
  /* Theme: possession. Grammar: possessive article, explicit. The rule the
     learner can carry away: the ending follows the thing owned, not the owner. */
  'a1-u1-l5': {
    items: [
      ['mein', '—', 'ـي (مع المذكر والمحايد)', 'Mein Vater arbeitet hier.', 'Meine Vater arbeitet hier.', 'der Vater مذكر: mein بلا e؛ e تُقحم من عادة المطابقة العربية.', 'deklination', 'mein'],
      ['meine', '—', 'ـي (مع المؤنث والجمع)', 'Meine Mutter wohnt in Tunis.', 'Mein Mutter wohnt in Tunis.', 'die Mutter مؤنث: meine؛ النهاية تتبع المملوك لا صاحب الملك.', 'deklination', 'meine'],
      ['dein', '—', 'ـك (مع المذكر والمحايد)', 'Ist das dein Handy?', 'Ist das deine Handy?', 'das Handy محايد: dein بلا e.', 'deklination', 'dein'],
      ['deine', '—', 'ـك (مع المؤنث والجمع)', 'Deine Tasche ist neu.', 'Dein Tasche ist neu.', 'die Tasche مؤنث: deine.', 'deklination', 'deine'],
      ['sein', '—', 'ـه (مع المذكر والمحايد)', 'Sein Bruder studiert.', 'Seine Bruder studiert.', 'der Bruder مذكر: sein.', 'deklination', 'sein'],
      ['ihre', '—', 'ـها (مع المؤنث والجمع)', 'Ihre Schwester arbeitet hier.', 'Ihr Schwester arbeitet hier.', 'die Schwester مؤنث: ihre؛ النهاية وحدها تُعلن الجنس.', 'deklination', 'ihre'],
      ['unser', '—', 'ـنا (مع المذكر والمحايد)', 'Unser Haus ist alt.', 'Unsere Haus ist alt.', 'das Haus محايد: unser بلا e.', 'deklination', 'unser'],
      ['euer', '—', 'ـكم (مع المذكر والمحايد)', 'Euer Garten ist schön.', 'Eure Garten ist schön.', 'euer للمذكر والمحايد، وeure للمؤنث والجمع؛ الخلط يقلب الجنس.', 'deklination', 'euer'],
      ['Ihr', '—', 'ـكم (صيغة الأدب)', 'Wie ist Ihr Name?', 'Wie ist Ihre Name?', 'der Name مذكر: Ihr بلا e في صيغة الأدب، والحرف كبير دائمًا.', 'register', 'Ihr'],
      ['das Haus', 'die Häuser', 'البيت', 'Unser Haus ist klein.', 'Unsere Haus ist klein.', 'das Haus محايد: unser Haus؛ والجمع Häuser بضمّة.', 'genus', 'Haus'],
      ['die Wohnung', 'die Wohnungen', 'الشقة', 'Meine Wohnung ist klein.', 'Mein Wohnung ist klein.', 'die Wohnung مؤنث: meine؛ النهاية -ung مؤنثة دائمًا.', 'genus', 'Wohnung'],
      ['das Zimmer', 'die Zimmer', 'الغرفة', 'Mein Zimmer ist groß.', 'Meine Zimmer ist groß.', 'das Zimmer محايد: mein؛ الجمع يبقى Zimmer بلا تغيير.', 'genus', 'Zimmer'],
      ['der Garten', 'die Gärten', 'الحديقة', 'Unser Garten ist grün.', 'Unser Garten sind grün.', 'الفاعل مفرد فيأخذ ist؛ والجمع Gärten بضمّة.', 'konjugation', 'Garten'],
      ['die Küche', 'die Küchen', 'المطبخ', 'Unsere Küche ist neu.', 'Unser Küche ist neu.', 'die Küche مؤنث: unsere؛ الجمع Küchen.', 'genus', 'Küche'],
      ['der Bruder', 'die Brüder', 'الأخ', 'Mein Bruder heißt Ali.', 'Meine Bruder heißt Ali.', 'der Bruder مذكر: mein؛ والجمع Brüder بضمّة.', 'plural', 'Bruder'],
      ['die Schwester', 'die Schwestern', 'الأخت', 'Meine Schwester lernt Medizin.', 'Mein Schwester lernt Medizin.', 'die Schwester مؤنث: meine؛ الجمع Schwestern منتظم.', 'genus', 'Schwester'],
      ['der Sohn', 'die Söhne', 'الابن', 'Sein Sohn ist zehn.', 'Seine Sohn ist zehn.', 'der Sohn مذكر: sein؛ والجمع Söhne بضمّة.', 'deklination', 'Sohn'],
      ['die Tochter', 'die Töchter', 'الابنة', 'Ihre Tochter geht zur Schule.', 'Ihr Tochter geht zur Schule.', 'die Tochter مؤنث: ihre؛ والجمع Töchter بضمّة.', 'deklination', 'Tochter'],
      ['das Kind', 'die Kinder', 'الطفل', 'Mein Kind schläft schon.', 'Meine Kind schläft schon.', 'das Kind محايد: mein؛ الجنس النحوي لا يتبع جنس الطفل.', 'genus', 'Kind'],
      ['die Eltern', '—', 'الوالدان', 'Meine Eltern leben in Sousse.', 'Mein Eltern leben in Sousse.', 'die Eltern جمع دائمًا، فتأخذ meine والفعل جمعًا.', 'plural', 'Eltern'],
      ['die Katze', 'die Katzen', 'القطة', 'Unsere Katze heißt Mizi.', 'Unser Katze heißt Mizi.', 'die Katze مؤنث: unsere.', 'genus', 'Katze'],
      ['der Hund', 'die Hunde', 'الكلب', 'Sein Hund ist groß.', 'Seine Hund ist groß.', 'der Hund مذكر: sein.', 'deklination', 'Hund'],
      ['das Handy', 'die Handys', 'الهاتف المحمول', 'Mein Handy ist kaputt.', 'Meine Handy ist kaputt.', 'das Handy محايد: mein، والجمع Handys بـ s.', 'plural', 'Handy'],
      ['die Nummer', 'die Nummern', 'الرقم', 'Meine Nummer ist neu.', 'Mein Nummer ist neu.', 'die Nummer مؤنث: meine، والجمع Nummern.', 'plural', 'Nummer']
    ],
    tricks: [
      { trick: 'الملكية تتبع الشيء المملوك', wie: 'mein Vater · meine Mutter · mein Kind: انظر إلى الاسم بعد الأداة، لا إلى صاحب الملك.', warum: 'العربية تُطابق «ـي» مع المالك في كل الحالات، والألمانية تُطابقها مع المملوك؛ فالخطأ يبدأ من هنا لا من النهاية.', anchor: 'Meine Mutter wohnt in Tunis.' },
      { trick: 'euer تُسقط e الداخلية', wie: 'euer Garten ← eure Küche · eure Eltern.', warum: 'هي الكلمة الوحيدة في هذا الباب التي تنقص حرفًا من وسطها؛ من حفظها بالصوت لا يخطئ فيها.', anchor: 'Eure Küche ist neu.' },
      { trick: 'الجمع يأخذ meine دائمًا', wie: 'meine Eltern · meine Brüder · meine Kinder: لا mein مع جمع.', warum: 'العربية لا تُفرّق بين مفرد وجمع في «ـي»، والألمانية تُلزم e في الجمع، فيسقطها من ينقل عادته.', anchor: 'Meine Eltern leben in Sousse.' }
    ]
  },

  /* ---------------------------------------------------------------- l6 ---- */
  /* Theme: ability and obligation. Grammar: können / müssen, explicit. The list
     teaches the sentence bracket: one finite verb, one infinitive at the end. */
  'a1-u1-l6': {
    items: [
      ['können', 'kann · konnte · hat gekonnt', 'يستطيع', 'Ich kann schwimmen.', 'Ich kann schwimme.', 'بعد können يأتي الفعل مصدرًا في آخر الجملة؛ تصريف الثاني خطأ بنيوي.', 'konjugation', 'kann'],
      ['ich kann', '—', 'أنا أستطيع', 'Ich kann gut kochen.', 'Ich könne gut kochen.', 'مع ich يصير können ← kann بلا نهاية؛ الشكل الشاذ يُحفظ كما هو.', 'konjugation', 'kann'],
      ['du kannst', '—', 'أنت تستطيع', 'Kannst du heute kommen?', 'Kannst du heute kommst?', 'الفعل الثاني مصدر: kommen لا kommst؛ التصريف للأول وحده.', 'konjugation', 'kannst'],
      ['er kann', '—', 'هو يستطيع', 'Er kann heute nicht kommen.', 'Er kann heute nicht kommt.', 'بعد er يبقى kann بلا t؛ können من الأفعال الناقصة التي لا تأخذ النهاية.', 'konjugation', 'kann'],
      ['müssen', 'muss · musste · hat gemusst', 'يجب عليه', 'Ich muss jetzt gehen.', 'Ich muss jetzt gehe.', 'بعد müssen مصدر في الآخر: gehen.', 'konjugation', 'muss'],
      ['ich muss', '—', 'يجب عليّ', 'Ich muss die Hausaufgabe machen.', 'Ich muss die Hausaufgabe mache.', 'الفعل الثاني مصدر مهما تغيّر الأول.', 'konjugation', 'muss'],
      ['du musst', '—', 'يجب عليك', 'Du musst mehr lernen.', 'Du musst mehr lernst.', 'du تُصرّف الفعل الأول، والثاني يبقى مصدرًا في الآخر.', 'konjugation', 'musst'],
      ['dürfen', 'darf · durfte · hat gedurft', 'يُسمح له', 'Darf ich hier sitzen?', 'Darf ich hier sitze?', 'سؤال الإذن بـ dürfen، والفعل الثاني مصدر: sitzen.', 'konjugation', 'darf'],
      ['wollen', 'will · wollte · hat gewollt', 'يريد', 'Ich will Deutsch lernen.', 'Ich will Deutsch lerne.', 'wollen تريد مصدرًا في آخر الجملة.', 'konjugation', 'will'],
      ['möchten', 'möchte · mochte · hat gemocht', 'أودّ', 'Ich möchte einen Kaffee, bitte.', 'Ich möchte einen Kaffee trinke.', 'مع möchten يكفي الاسم مفعولًا؛ إضافة فعل مصرّف تُفسد البنية.', 'konjugation', 'möchte'],
      ['die Hausaufgabe', 'die Hausaufgaben', 'الواجب المنزلي', 'Die Hausaufgabe ist schwer.', 'Der Hausaufgabe ist schwer.', 'die Hausaufgabe مؤنث، والجمع Hausaufgaben.', 'genus', 'Hausaufgabe'],
      ['die Übung', 'die Übungen', 'التمرين', 'Wir machen eine Übung.', 'Wir machen ein Übung.', 'die Übung مؤنث: eine؛ والجمع Übungen.', 'genus', 'Übung'],
      ['die Prüfung', 'die Prüfungen', 'الامتحان', 'Die Prüfung ist morgen.', 'Der Prüfung ist morgen.', 'die Prüfung مؤنث، وكل اسم ينتهي بـ -ung مؤنث.', 'genus', 'Prüfung'],
      ['das Wort', 'die Wörter', 'الكلمة', 'Ich muss die Wörter lernen.', 'Ich muss die Wörter lerne.', 'بعد müssen يبقى lernen مصدرًا، والجمع Wörter بضمّة.', 'konjugation', 'Wörter'],
      ['der Termin', 'die Termine', 'الموعد', 'Ich muss zum Termin gehen.', 'Ich muss zu der Termin gehen.', 'zu + dem = zum؛ والفصل خطأ في الكتابة والنطق معًا.', 'präposition', 'Termin'],
      ['helfen', 'hilft · half · hat geholfen', 'يساعد', 'Kannst du mir helfen?', 'Kannst du mich helfen?', 'helfen تأخذ Dativ: mir لا mich؛ فعل الخدمة ليس متعدّيًا مباشرًا.', 'kasus', 'helfen'],
      ['die Hilfe', 'die Hilfen', 'المساعدة', 'Ich brauche deine Hilfe.', 'Ich brauche dein Hilfe.', 'die Hilfe مؤنث: deine Hilfe.', 'deklination', 'Hilfe'],
      ['sprechen', 'spricht · sprach · hat gesprochen', 'يتكلّم', 'Ich kann ein bisschen Deutsch sprechen.', 'Ich kann ein bisschen Deutsch spreche.', 'المصدر في آخر الجملة: sprechen.', 'konjugation', 'sprechen'],
      ['aufstehen', 'steht auf · stand auf · ist aufgestanden', 'يستيقظ', 'Ich muss früh aufstehen.', 'Ich muss früh auf stehen.', 'الفعل المنفصل يُكتب في المصدر كلمة واحدة: aufstehen.', 'orthographie', 'aufstehen'],
      ['schlafen', 'schläft · schlief · hat geschlafen', 'ينام', 'Das Kind muss jetzt schlafen.', 'Das Kind muss jetzt schläft.', 'بعد müssen مصدر بلا تصريف: schlafen.', 'konjugation', 'schlafen'],
      ['arbeiten', 'arbeitet · arbeitete · hat gearbeitet', 'يعمل', 'Wir müssen morgen arbeiten.', 'Wir müsst morgen arbeiten.', 'wir تأخذ müssen بلا t؛ müsst للـ ihr وحدها.', 'konjugation', 'arbeiten'],
      ['lernen', 'lernt · lernte · hat gelernt', 'يتعلّم', 'Du musst jeden Tag lernen.', 'Du musst jeden Tag lernst.', 'الثاني مصدر، والتصريف للأول؛ تكرار النهاية خطأ شائع.', 'konjugation', 'lernen'],
      ['nicht können', '—', 'لا يستطيع', 'Ich kann heute nicht kommen.', 'Ich kann heute nicht komme.', 'nicht تنفي können، والمصدر الثاني يبقى كما هو.', 'konjugation', 'kann'],
      ['das Ziel', 'die Ziele', 'الهدف', 'Mein Ziel ist B2.', 'Mein Ziel ist die B2.', 'أسماء المستويات (B2) تُستعمل بلا أداة، كأسماء الأعلام.', 'register', 'Ziel']
    ],
    tricks: [
      { trick: 'الفعل الثاني يسكن آخر الجملة', wie: 'Ich kann schwimmen · Ich muss gehen: الأول يُصرّف، والثاني يبقى مصدرًا في الآخر.', warum: 'العربية تقول «أستطيع أن أسبح» بفعل مصرّف ثانٍ، والألمانية تبني قوسًا: فعل مصرّف في الموضع الثاني ومصدر في الأخير.', anchor: 'Ich muss jetzt gehen.' },
      { trick: 'können وmüssen بلا نهاية مع ich وer', wie: 'ich kann · er kann · ich muss · er muss: لا -e ولا -t.', warum: 'هذه الأفعال الناقصة تخالف القاعدة المنتظمة؛ من قاس عليها «er kannst» أخطأ في أهم فعلين في A1.', anchor: 'Er kann heute nicht kommen.' },
      { trick: 'helfen تريد Dativ', wie: 'Kannst du mir helfen؟ لا «mich».', warum: 'العربية لا تفرّق بين مفعولي «ساعد» و«رأى»، والألمانية تُلزم Dativ مع helfen؛ الخطأ يقع في الضمير وحده فيبقى خفيًّا.', anchor: 'Kannst du mir helfen?' }
    ]
  },

  /* ============================ UNIT 2 — a1-u2-l1…l6 ======================== */

  /* ---------------------------------------------------------------- l1 ---- */
  /* Theme: wollen / möchten. The list is built around one register decision
     (möchten for strangers, wollen for the close circle) and the sentence
     bracket it forces: modal finite, infinitive last. */
  'a1-u2-l1': {
    items: [
      ['wollen', 'will · wollte · hat gewollt', 'يريد', 'Ich will nach Hause gehen.', 'Ich will nach Hause gehe.', 'بعد wollen يأتي الفعل مصدرًا في آخر الجملة، لا مصرّفًا.', 'konjugation', 'will'],
      ['ich will', '—', 'أنا أريد', 'Ich will schlafen.', 'Ich wolle schlafen.', 'مع ich يصير wollen ← will بلا نهاية؛ woll- للماضي.', 'konjugation', 'will'],
      ['du willst', '—', 'أنت تريد', 'Willst du mitkommen?', 'Will du mitkommen?', 'مع du يصير will ← willst، والسؤال يبدأ بالفعل.', 'konjugation', 'willst'],
      ['er will', 'sie will · es will', 'هو يريد', 'Er will ein Eis.', 'Er willst ein Eis.', 'مع الغائب يبقى will بلا t؛ willst للمخاطب وحده.', 'konjugation', 'will'],
      ['wir wollen', '—', 'نريد', 'Wir wollen zahlen.', 'Wir willt zahlen.', 'wir تأخذ wollen بلا t؛ willt قياس خاطئ على ihr.', 'konjugation', 'wollen'],
      ['möchten', 'möchte · mochte', 'أودّ', 'Ich möchte einen Kaffee.', 'Ich möchte einen Kaffee trinke.', 'möchten تأخذ مفعولًا مباشرًا أو مصدرًا في الآخر، لا فعلًا مصرّفًا ثانيًا.', 'konjugation', 'möchte'],
      ['ich möchte', '—', 'أودّ', 'Ich möchte bitte zahlen.', 'Ich möchte bitte zahle.', 'بعد möchten إمّا اسم مفعول به أو مصدر في الآخر.', 'konjugation', 'möchte'],
      ['du möchtest', '—', 'تودّ', 'Möchtest du Tee?', 'Möcht du Tee?', 'مع du تأتي النهاية st كاملة: möchtest.', 'konjugation', 'möchtest'],
      ['er möchte', 'sie möchte · es möchte', 'هو يودّ', 'Er möchte die Rechnung.', 'Er möchtet die Rechnung.', 'möchte لا تأخذ t مع الغائب؛ صيغتها واحدة.', 'konjugation', 'möchte'],
      ['möchten Sie', '—', 'هل تودّون؟ (صيغة الأدب)', 'Möchten Sie noch etwas?', 'Willst Sie noch etwas?', 'مع Sie صيغة الأدب تأتي möchten؛ willst تكسر المقام.', 'register', 'Möchten'],
      ['bitte', '—', 'من فضلك', 'Einen Kaffee, bitte.', 'Bitte einen Kaffee ich will.', 'bitte تلحق الطلب في آخره ولا تُبنى بعدها جملة.', 'register', 'bitte'],
      ['gern', 'lieber · am liebsten', 'بسرور', 'Ich trinke gern Tee.', 'Ich trinke gern Tee du.', 'gern ظرف حال يتبع الفعل مباشرة، ولا حشو بعده.', 'wortstellung', 'gern'],
      ['lieber', '—', 'أفضّل', 'Ich möchte lieber Wasser.', 'Ich lieber möchte Wasser.', 'lieber يأتي بعد الفعل المصرّف لا قبله.', 'wortstellung', 'lieber'],
      ['der Kaffee', 'die Kaffees', 'القهوة', 'Ein Kaffee, bitte.', 'Eine Kaffee, bitte.', 'der Kaffee مذكر: ein؛ العربية تجعل القهوة مؤنثًا فينكسر الجنس.', 'genus', 'Kaffee'],
      ['der Tee', 'die Tees', 'الشاي', 'Ich möchte einen Tee.', 'Ich möchte ein Tee.', 'der Tee مذكر في النصب: einen.', 'kasus', 'Tee'],
      ['das Wasser', '—', 'الماء', 'Ein Wasser, bitte.', 'Eine Wasser, bitte.', 'das Wasser محايد: ein، ولا يُجمع في هذا الاستعمال.', 'genus', 'Wasser'],
      ['die Rechnung', 'die Rechnungen', 'الفاتورة', 'Die Rechnung, bitte.', 'Der Rechnung, bitte.', 'die Rechnung مؤنث، وكل اسم ينتهي بـ -ung مؤنث.', 'genus', 'Rechnung'],
      ['zahlen', 'zahlt · zahlte · hat gezahlt', 'يدفع', 'Ich möchte zahlen.', 'Ich möchte bezahle.', 'بعد möchten يبقى الفعل مصدرًا: zahlen.', 'konjugation', 'zahlen'],
      ['bestellen', 'bestellt · bestellte · hat bestellt', 'يطلب', 'Ich möchte eine Suppe bestellen.', 'Ich möchte eine Suppe bestelle.', 'المصدر في آخر الجملة بعد möchten.', 'konjugation', 'bestellen'],
      ['die Speisekarte', 'die Speisekarten', 'قائمة الطعام', 'Die Speisekarte, bitte.', 'Der Speisekarte, bitte.', 'die Speisekarte مؤنث، والتركيب Speise + Karte كلمة واحدة.', 'orthographie', 'Speisekarte'],
      ['die Suppe', 'die Suppen', 'الشوربة', 'Ich möchte eine Suppe.', 'Ich möchte ein Suppe.', 'die Suppe مؤنث: eine.', 'genus', 'Suppe'],
      ['das Brot', 'die Brote', 'الخبز', 'Möchten Sie Brot?', 'Möchten Sie ein Brotstück?', 'Brot يُستعمل هنا بلا لاحقة جزء؛ العربية تضيف «قطعة».', 'lexik-kollokation', 'Brot'],
      ['der Kuchen', 'die Kuchen', 'الكيك', 'Ich möchte ein Stück Kuchen.', 'Ich möchte eine Kuchen.', 'صيغة التقديم ein Stück Kuchen؛ الوحدة للجزء لا للكيك.', 'lexik-kollokation', 'Kuchen'],
      ['das Eis', '—', 'المثلجات', 'Möchtest du ein Eis?', 'Möchtest du ein Eises?', 'das Eis يبقى بلا نهاية في النصب.', 'deklination', 'Eis']
    ],
    tricks: [
      { trick: 'möchten مفتاح الأدب', wie: 'Ich möchte einen Kaffee · Möchten Sie noch etwas؟ — وich will تبقى للأهل والقرارات.', warum: 'العربية تقول «أريد» في كل مقام، والألمانية تحمل المقام في الصيغة نفسها؛ من قال will في المتجر بدا آمرًا لا طالبًا.', anchor: 'Ich möchte einen Kaffee.' },
      { trick: 'الغائب بلا نهاية في هذه الأفعال', wie: 'ich will · er will · ich möchte · er möchte: لا t مع الغائب.', warum: 'هذه الأفعال تُسقط النهاية في المفرد الغائب، وهي المخالفة الأبرز للقاعدة المنتظمة، فتعلّمها مرّة واحدة أرخص من تصحيحها مرّة كل جملة.', anchor: 'Er möchte die Rechnung.' },
      { trick: 'نيّة ثم مصدر في الآخر', wie: 'Ich möchte zahlen · Ich will nach Hause gehen.', warum: 'العربية تصل «أريد أن أدفع» بفعل مصرّف ثانٍ، والألمانية تضع المصدر في آخر الجملة؛ القوس هو البنية لا التفصيل.', anchor: 'Ich möchte zahlen.' }
    ]
  },

  /* ---------------------------------------------------------------- l2 ---- */
  /* Theme: separable verbs. One mechanic — the prefix leaves the verb and
     waits at the end — shown across routine verbs, then held constant when an
     adverb takes the first position. */
  'a1-u2-l2': {
    items: [
      ['aufstehen', 'steht auf · stand auf · ist aufgestanden', 'يستيقظ', 'Ich stehe um sieben auf.', 'Ich aufstehe um sieben.', 'في الجملة الرئيسية تنفصل البادئة وتذهب إلى آخر الجملة.', 'wortstellung', 'stehe'],
      ['anrufen', 'ruft an · rief an · hat angerufen', 'يتّصل بـ', 'Ich rufe dich an.', 'Ich anrufe dich.', 'البادئة an في آخر الجملة والفعل المصرّف ثانيًا.', 'wortstellung', 'rufe'],
      ['einkaufen', 'kauft ein · kaufte ein · hat eingekauft', 'يتسوّق', 'Wir kaufen heute ein.', 'Wir einkaufen heute.', 'ein تنفصل وتأتي في الآخر.', 'wortstellung', 'kaufen'],
      ['aufmachen', 'macht auf · machte auf · hat aufgemacht', 'يفتح', 'Mach bitte das Fenster auf.', 'Mach bitte das Fenster öffne.', 'aufmachen تنفصل: auf وحدها في الآخر، لا فعل ثانٍ.', 'wortstellung', 'mach'],
      ['zumachen', 'macht zu · machte zu · hat zugemacht', 'يغلق', 'Ich mache die Tür zu.', 'Ich zumache die Tür.', 'zu في آخر الجملة؛ لا يبقى الفعل ملتصقًا.', 'wortstellung', 'mache'],
      ['anfangen', 'fängt an · fing an · hat angefangen', 'يبدأ', 'Der Kurs fängt um acht an.', 'Der Kurs anfängt um acht.', 'an في الآخر والفعل المصرّف في الموضع الثاني.', 'wortstellung', 'fängt'],
      ['aufhören', 'hört auf · hörte auf · hat aufgehört', 'يتوقّف', 'Wir hören um neun auf.', 'Wir aufhören um neun.', 'auf في الآخر.', 'wortstellung', 'hören'],
      ['mitkommen', 'kommt mit · kam mit · ist mitgekommen', 'يأتي معنا', 'Kommst du mit?', 'Kommst du mitkommen?', 'في السؤال يُصرّف الفعل أولًا وتبقى البادئة في الآخر؛ لا مصدر مكرر.', 'wortstellung', 'Kommst'],
      ['fernsehen', 'sieht fern · sah fern · hat ferngesehen', 'يشاهد التلفاز', 'Abends sehe ich fern.', 'Abends ich fernsehe.', 'بعد الظرف يبقى الفعل ثانيًا والبادئة في الآخر.', 'wortstellung', 'sehe'],
      ['einsteigen', 'steigt ein · stieg ein · ist eingestiegen', 'يركب', 'Wir steigen in den Bus ein.', 'Wir einsteigen in den Bus.', 'ein في آخر الجملة.', 'wortstellung', 'steigen'],
      ['aussteigen', 'steigt aus · stieg aus · ist ausgestiegen', 'ينزل من', 'Ich steige hier aus.', 'Ich aussteige hier.', 'aus في الآخر.', 'wortstellung', 'steige'],
      ['mitbringen', 'bringt mit · brachte mit · hat mitgebracht', 'يجلب معه', 'Bringst du Kuchen mit?', 'Bringst du Kuchen mitbringen?', 'mit وحدها في الآخر، لا المصدر كاملًا.', 'wortstellung', 'Bringst'],
      ['umziehen', 'zieht um · zog um · ist umgezogen', 'ينتقل للسكن', 'Wir ziehen im Mai um.', 'Wir umziehen im Mai.', 'um في آخر الجملة.', 'wortstellung', 'ziehen'],
      ['anziehen', 'zieht an · zog an · hat angezogen', 'يلبس', 'Ich ziehe die Jacke an.', 'Ich anziehe die Jacke.', 'an في الآخر.', 'wortstellung', 'ziehe'],
      ['aufräumen', 'räumt auf · räumte auf · hat aufgeräumt', 'يرتّب', 'Ich räume das Zimmer auf.', 'Ich aufräume das Zimmer.', 'الجذر räum في الموضع الثاني وauf في الآخر.', 'wortstellung', 'räume'],
      ['der Wecker', 'die Wecker', 'المنبّه', 'Der Wecker klingelt um sechs.', 'Der Wecker klingelt in sechs.', 'الساعة تأخذ um؛ in للفترة الطويلة.', 'präposition', 'Wecker'],
      ['frühstücken', 'frühstückt · frühstückte · hat gefrühstückt', 'يتناول الفطور', 'Ich frühstücke um sieben.', 'Ich frühstücke in sieben.', 'الساعة مع um لا in.', 'präposition', 'frühstücke'],
      ['das Frühstück', '—', 'الفطور', 'Das Frühstück ist um acht.', 'Der Frühstück ist um acht.', 'das Frühstück محايد؛ الجنس لا يُنقل من المعنى العربي.', 'genus', 'Frühstück'],
      ['die Arbeit', 'die Arbeiten', 'العمل', 'Ich fange um neun mit der Arbeit an.', 'Ich anfange um neun mit der Arbeit.', 'an في آخر الجملة.', 'wortstellung', 'Arbeit'],
      ['der Bus', 'die Busse', 'الباص', 'Ich steige in den Bus ein.', 'Ich steige in der Bus ein.', 'الحركة إلى داخل الباص تأخذ النصب: den Bus.', 'kasus', 'Bus'],
      ['die Schule', 'die Schulen', 'المدرسة', 'Die Schule fängt um acht an.', 'Die Schule anfängt um acht.', 'an في الآخر.', 'wortstellung', 'Schule'],
      ['das Fenster', 'die Fenster', 'النافذة', 'Ich mache das Fenster auf.', 'Ich mache das Fenster aufmachen.', 'بعد الفعل المصرّف تأتي البادئة وحدها لا المصدر.', 'wortstellung', 'Fenster'],
      ['die Tür', 'die Türen', 'الباب', 'Mach die Tür zu, bitte.', 'Mach die Tür zumachen, bitte.', 'zu البادئة تكفي في آخر الجملة.', 'wortstellung', 'Tür'],
      ['spät', 'später · am spätesten', 'متأخّر', 'Ich stehe nie spät auf.', 'Ich stehe nie auf spät.', 'البادئة auf تبقى آخر الجملة والظرف قبلها.', 'wortstellung', 'spät']
    ],
    tricks: [
      { trick: 'البادئة تُقتلع من الفعل', wie: 'aufstehen ← Ich stehe … auf: الفعل يبقى ثانيًا والبادئة تسافر إلى آخر الجملة.', warum: 'العربية لا تفصل الفعل عن حرفه، والألمانية تفصله في الجملة الرئيسية؛ «Ich aufstehe» بنية قاموس نقلت إلى جملة.', anchor: 'Ich stehe um sieben auf.' },
      { trick: 'في القاموس وبعد modal تبقى ملتصقة', wie: 'aufstehen · anrufen · Ich möchte früh aufstehen: بلا فصل.', warum: 'الفصل يخصّ الفعل المصرّف في الجملة الرئيسية وحده؛ من فصل بعد möchten أخطأ في الصيغة لا في الموضع.', anchor: 'Ich möchte früh aufstehen.' },
      { trick: 'الظرف يتقدّم والبادئة تبقى أخيرة', wie: 'Abends sehe ich fern · Um acht stehe ich auf: الفعل ثانٍ والباء في الآخر.', warum: 'العربية تقول «مساءً أشاهد» بترتيب آخر؛ تقدّم الظرف لا يعطي البادئة حقّ الصعود إلى الموضع الثاني.', anchor: 'Abends sehe ich fern.' }
    ]
  },

  /* ---------------------------------------------------------------- l3 ---- */
  /* Theme: the clock. The list teaches how German names a time (halb is the
     trap: it counts towards the coming hour), plus the words around waiting
     and punctuality that the learner actually needs in Sousse or Berlin. */
  'a1-u2-l3': {
    items: [
      ['die Uhr', 'die Uhren', 'الساعة (الجهاز)', 'Die Uhr ist kaputt.', 'Die Stunde ist kaputt.', 'Uhr للجهاز وقراءة الساعة، وStunde للمدة.', 'lexik-kollokation', 'Uhr'],
      ['die Stunde', 'die Stunden', 'الساعة (مدة)', 'Der Kurs dauert zwei Stunden.', 'Der Kurs dauert zwei Uhren.', 'المدة بـ Stunde؛ Uhr لا تُستعمل للمدة.', 'lexik-kollokation', 'Stunden'],
      ['Es ist drei Uhr', '—', 'الساعة الثالثة', 'Es ist drei Uhr.', 'Es ist drei hour.', 'الكلمة هي Uhr، وhour إنجليزية.', 'falser-freund', 'drei'],
      ['Viertel nach drei', '—', 'الثالثة والربع', 'Es ist Viertel nach drei.', 'Es ist Viertel drei nach.', 'الترتيب ثابت: Viertel + nach + الساعة.', 'wortstellung', 'Viertel'],
      ['Viertel vor vier', '—', 'الرابعة إلا ربع', 'Es ist Viertel vor vier.', 'Es ist Viertel vier vor.', 'vor يسبق الساعة، والترتيب لا يُقلب.', 'wortstellung', 'vier'],
      ['halb vier', '—', 'الثالثة والنصف', 'Es ist halb vier.', 'Es ist halb drei.', 'halb تُنسب إلى الساعة القادمة: halb vier = 3:30، والعربية تنسبها إلى الماضية، فالخطأ ساعة كاملة.', 'falser-freund', 'halb'],
      ['Um wie viel Uhr', '—', 'في أي ساعة؟', 'Um wie viel Uhr beginnt der Kurs?', 'Was Uhr beginnt der Kurs?', 'السؤال الكامل Um wie viel Uhr، والفعل بعده ثانيًا.', 'wortstellung', 'viel'],
      ['um acht', '—', 'في الثامنة', 'Der Kurs beginnt um acht.', 'Der Kurs beginnt in acht.', 'الساعة تأخذ um لا in.', 'präposition', 'um'],
      ['gegen acht', '—', 'نحو الثامنة', 'Ich komme gegen acht.', 'Ich komme über acht.', 'التقريب في الزمن بـ gegen.', 'präposition', 'gegen'],
      ['der Mittag', 'die Mittage', 'الظهر', 'Am Mittag esse ich.', 'In der Mittag esse ich.', 'أجزاء اليوم تأخذ am (an + dem).', 'präposition', 'Mittag'],
      ['die Mitternacht', '—', 'منتصف الليل', 'Um Mitternacht ist es still.', 'In Mitternacht ist es still.', 'التوقيت بالساعة يأخذ um.', 'präposition', 'Mitternacht'],
      ['morgens', '—', 'صباحًا', 'Morgens trinke ich Kaffee.', 'In morgens trinke ich Kaffee.', 'الظرف بلا حرف جر؛ إضافة in ترجمة حرفية.', 'präposition', 'morgens'],
      ['abends', '—', 'مساءً', 'Abends lerne ich Deutsch.', 'Abends ich lerne Deutsch.', 'بعد الظرف يبقى الفعل ثانيًا.', 'wortstellung', 'abends'],
      ['nachts', '—', 'ليلًا', 'Nachts schlafe ich.', 'In nachts schlafe ich.', 'الظرف قائم بذاته بلا حرف جر.', 'präposition', 'nachts'],
      ['jetzt', '—', 'الآن', 'Ich komme jetzt.', 'Ich komme in jetzt.', 'حرف الجر لا يدخل على الظرف.', 'präposition', 'jetzt'],
      ['gleich', '—', 'بعد قليل', 'Ich komme gleich.', 'Ich gleich komme.', 'الفعل ثانيًا بعد الضمير.', 'wortstellung', 'gleich'],
      ['später', '—', 'لاحقًا', 'Ich rufe später an.', 'Ich später rufe an.', 'الظرف لا يزحزح الفعل، والفعل المنفصل يبقى مفصولًا.', 'wortstellung', 'später'],
      ['pünktlich', '—', 'في الموعد', 'Der Zug kommt pünktlich.', 'Der Zug kommt in pünktlich.', 'pünktlich ظرف حال بلا حرف جر.', 'präposition', 'pünktlich'],
      ['die Verspätung', 'die Verspätungen', 'التأخير', 'Der Zug hat zwanzig Minuten Verspätung.', 'Der Zug hat zwanzig Minuten verspätet.', 'Verspätung اسم يُستعمل مع haben؛ الصفة verspätet لا تصلح هنا.', 'lexik-kollokation', 'Verspätung'],
      ['warten', 'wartet · wartete · hat gewartet', 'ينتظر', 'Ich warte auf den Bus.', 'Ich warte den Bus.', 'warten تأخذ auf مع النصب: auf den Bus.', 'präposition', 'warte'],
      ['der Termin', 'die Termine', 'الموعد', 'Ich habe um zehn einen Termin.', 'Ich habe um zehn ein Termin.', 'der Termin مذكر في النصب: einen.', 'kasus', 'Termin'],
      ['die Minute', 'die Minuten', 'الدقيقة', 'Ich brauche zehn Minuten.', 'Ich brauche zehn Minute.', 'بعد العدد فوق واحد يأتي الجمع: Minuten.', 'plural', 'Minuten'],
      ['die Sekunde', 'die Sekunden', 'الثانية', 'Warte eine Sekunde, bitte.', 'Warte ein Sekunde, bitte.', 'die Sekunde مؤنث: eine.', 'genus', 'Sekunde'],
      ['die Pause', 'die Pausen', 'الاستراحة', 'Wir machen eine Pause.', 'Wir machen ein Pause.', 'die Pause مؤنث: eine.', 'genus', 'Pause']
    ],
    tricks: [
      { trick: 'halb تعني النصف إلى الساعة القادمة', wie: 'halb vier = 3:30 · halb neun = 8:30: احسب من الساعة القادمة.', warum: 'العربية تنسب النصف إلى الساعة الماضية («الثالثة والنصف») والألمانية إلى القادمة، فالخطأ هنا ساعة كاملة لا دقيقة.', anchor: 'Es ist halb vier.' },
      { trick: 'الحرف بحجم الوقت', wie: 'الساعة um acht · جزء اليوم am Abend · الشهر والفصل im Mai.', warum: 'العربية تقول «في» للجميع، والألمانية تُدغم الحرف مع الأداة (am = an dem، im = in dem) وتختار بحسب المدة، فالحفظ بالحجم يمنع الخطأ.', anchor: 'Der Kurs beginnt um acht.' },
      { trick: 'Viertel + nach/vor + الساعة', wie: 'Viertel nach drei · Viertel vor vier: الترتيب واحد لا يتبدّل.', warum: 'من قلب الترتيب اتبع بنية العربية؛ وهذا لا يُفسد الأسلوب فقط، بل يُلبس السامع الوقت الخطأ.', anchor: 'Viertel nach drei' }
    ]
  },

  /* ---------------------------------------------------------------- l4 ---- */
  /* Theme: temporal prepositions. One decision tree by the size of time
     (um → am → im), one exception (in der Nacht), and the case that seit, vor
     and nach force — because that is where the Arabic speaker actually slips. */
  'a1-u2-l4': {
    items: [
      ['um', '—', 'في (الساعة)', 'Der Film beginnt um neun.', 'Der Film beginnt am neun.', 'الساعة تأخذ um؛ am لأجزاء اليوم.', 'präposition', 'um'],
      ['am', '—', 'في (اليوم وجزء اليوم)', 'Am Montag habe ich frei.', 'Im Montag habe ich frei.', 'أيام الأسبوع تأخذ am.', 'präposition', 'am'],
      ['im', '—', 'في (الشهر والفصل)', 'Im Mai fahre ich nach Tunis.', 'Am Mai fahre ich nach Tunis.', 'الأشهر تأخذ im (in + dem).', 'präposition', 'im'],
      ['am Montag', '—', 'الاثنين', 'Am Montag arbeite ich.', 'In Montag arbeite ich.', 'اليوم باسمه يأخذ am.', 'präposition', 'Montag'],
      ['am Wochenende', '—', 'في نهاية الأسبوع', 'Am Wochenende schlafe ich lange.', 'Im Wochenende schlafe ich lange.', 'das Wochenende صيغة ثابتة مع am.', 'präposition', 'Wochenende'],
      ['im Januar', '—', 'في جانفي', 'Im Januar ist es kalt.', 'Am Januar ist es kalt.', 'الشهر يأخذ im.', 'präposition', 'Januar'],
      ['im Sommer', '—', 'في الصيف', 'Im Sommer fahren wir ans Meer.', 'Am Sommer fahren wir ans Meer.', 'الفصل يأخذ im.', 'präposition', 'Sommer'],
      ['am Morgen', '—', 'في الصباح', 'Am Morgen lerne ich.', 'Im Morgen lerne ich.', 'أجزاء اليوم تأخذ am.', 'präposition', 'Morgen'],
      ['in der Nacht', '—', 'في الليل', 'In der Nacht ist es still.', 'Am Nacht ist es still.', 'die Nacht استثناء: in der Nacht لا am.', 'präposition', 'Nacht'],
      ['um halb acht', '—', 'في السابعة والنصف', 'Wir treffen uns um halb acht.', 'Wir treffen uns in halb acht.', 'حتى مع halb يبقى التوقيت مع um.', 'präposition', 'halb'],
      ['von ... bis', '—', 'من ... إلى', 'Ich arbeite von acht bis fünf.', 'Ich arbeite ab acht zu fünf.', 'المدة بين حدّين: von + bis.', 'präposition', 'bis'],
      ['seit', '—', 'منذ', 'Ich lerne seit drei Monaten Deutsch.', 'Ich lerne für drei Monaten Deutsch.', 'seit للحال التي بدأت وتستمر، وهي تحكم Dativ: Monaten.', 'kasus', 'seit'],
      ['vor', '—', 'قبل', 'Vor dem Kurs trinke ich Kaffee.', 'Vor der Kurs trinke ich Kaffee.', 'der Kurs مذكر، وبعد vor في الزمن يأتي Dativ: dem Kurs.', 'kasus', 'vor'],
      ['nach', '—', 'بعد', 'Nach der Arbeit gehe ich heim.', 'Nach die Arbeit gehe ich heim.', 'بعد nach يأتي Dativ: der Arbeit.', 'kasus', 'nach'],
      ['der Monat', 'die Monate', 'الشهر', 'Der Monat hat dreißig Tage.', 'Die Monat hat dreißig Tage.', 'der Monat مذكر، والجمع Monate.', 'genus', 'Monat'],
      ['die Woche', 'die Wochen', 'الأسبوع', 'Diese Woche habe ich viel zu tun.', 'Diese Woche ich habe viel zu tun.', 'بعد المكوّن الأول يبقى الفعل ثانيًا.', 'wortstellung', 'Woche'],
      ['das Jahr', 'die Jahre', 'السنة', 'Ich lerne seit einem Jahr Deutsch.', 'Ich lerne seit ein Jahr Deutsch.', 'seit تحكم Dativ: einem Jahr.', 'kasus', 'Jahr'],
      ['der Tag', 'die Tage', 'اليوم (مدة)', 'Der Tag war lang.', 'Die Tag war lang.', 'der Tag مذكر؛ الجنس لا يُعلن في العربية فيسقط.', 'genus', 'Tag'],
      ['der Vormittag', 'die Vormittage', 'قبل الظهر', 'Am Vormittag arbeite ich.', 'In der Vormittag arbeite ich.', 'أجزاء اليوم تأخذ am.', 'präposition', 'Vormittag'],
      ['der Nachmittag', 'die Nachmittage', 'بعد الظهر', 'Am Nachmittag lerne ich Deutsch.', 'Am Nachmittag ich lerne Deutsch.', 'بعد الظرف يبقى الفعل ثانيًا.', 'wortstellung', 'Nachmittag'],
      ['der Abend', 'die Abende', 'المساء', 'Am Abend koche ich.', 'Im Abend koche ich.', 'der Abend يأخذ am.', 'präposition', 'Abend'],
      ['die Zeit', 'die Zeiten', 'الوقت', 'Ich habe keine Zeit.', 'Ich habe kein Zeit.', 'die Zeit مؤنث: keine.', 'genus', 'Zeit'],
      ['der Kalender', 'die Kalender', 'الرزنامة', 'Ich schreibe den Termin in den Kalender.', 'Ich schreibe den Termin in dem Kalender.', 'الحركة إلى داخل الشيء تأخذ النصب: in den Kalender.', 'kasus', 'Kalender'],
      ['das Datum', 'die Daten', 'التاريخ', 'Welches Datum ist heute?', 'Welche Datum ist heute?', 'das Datum محايد: welches.', 'genus', 'Datum']
    ],
    tricks: [
      { trick: 'افتح الحرف من حجم الوقت', wie: 'الساعة um · اليوم am · الشهر والفصل im.', warum: 'العربية تستعمل «في» للجميع، والألمانية تختار بحسب المدة وتُدغم الحرف مع الأداة؛ الحفظ بالحجم يمنع الخطأ قبل وقوعه.', anchor: 'Am Montag habe ich frei.' },
      { trick: 'الليل وحده يخالف المجموعة', wie: 'Am Morgen · am Abend · aber in der Nacht.', warum: 'من قاس الليل على أخويه قال «am Nacht»؛ الاستثناء الواحد أسهل من حفظ القاعدة مرّتين.', anchor: 'In der Nacht ist es still.' },
      { trick: 'seit وvor وnach تحكم Dativ', wie: 'seit einem Jahr · vor dem Kurs · nach der Arbeit: النهاية تُسمع.', warum: 'العربية لا تُظهر الحالة في الاسم، وهذه الحروف تُظهرها في الأداة؛ إسقاط النهاية هو الخطأ المنتظر من ناطق بالعربية.', anchor: 'Ich lerne seit einem Jahr Deutsch.' }
    ]
  },

  /* ---------------------------------------------------------------- l5 ---- */
  /* Theme: place (wo). Nine prepositions, one law: a fixed position takes
     Dativ. The list pairs each preposition with the object it typically
     describes, so the case is learned attached to a real picture. */
  'a1-u2-l5': {
    items: [
      ['in', '—', 'داخل', 'Ich wohne in der Stadt.', 'Ich wohne auf der Stadt.', 'السكن داخل المدينة in؛ auf للسطح.', 'präposition', 'in'],
      ['an', '—', 'ملاصق لـ', 'Das Bild hängt an der Wand.', 'Das Bild hängt in der Wand.', 'التعليق على الجدار an؛ in تعني داخل الجدار.', 'präposition', 'an'],
      ['auf', '—', 'على سطح', 'Das Buch liegt auf dem Tisch.', 'Das Buch liegt an dem Tisch.', 'السطح الأفقي auf.', 'präposition', 'auf'],
      ['neben', '—', 'بجانب', 'Die Bank ist neben der Apotheke.', 'Die Bank ist next der Apotheke.', '«بجانب» هي neben، وnext إنجليزية.', 'falser-freund', 'neben'],
      ['unter', '—', 'تحت', 'Die Katze schläft unter dem Bett.', 'Die Katze schläft unter das Bett.', 'الموضع الثابت (wo؟) يأخذ Dativ: unter dem Bett.', 'kasus', 'unter'],
      ['über', '—', 'فوق', 'Die Lampe hängt über dem Tisch.', 'Die Lampe hängt über den Tisch.', 'السكون فوق الشيء Dativ: über dem Tisch.', 'kasus', 'über'],
      ['vor', '—', 'أمام', 'Das Auto steht vor dem Haus.', 'Das Auto steht vor das Haus.', 'الموضع الثابت Dativ: vor dem Haus.', 'kasus', 'vor'],
      ['hinter', '—', 'خلف', 'Der Garten ist hinter dem Haus.', 'Der Garten ist hinter das Haus.', 'الموضع الثابت Dativ.', 'kasus', 'hinter'],
      ['zwischen', '—', 'بين', 'Die Apotheke ist zwischen der Bank und der Schule.', 'Die Apotheke ist zwischen die Bank und die Schule.', 'بين شيئين في موضع ثابت Dativ: der Bank.', 'kasus', 'zwischen'],
      ['die Stadt', 'die Städte', 'المدينة', 'Ich wohne in der Stadt.', 'Ich wohne in die Stadt.', 'الموضع الثابت Dativ: in der Stadt.', 'kasus', 'Stadt'],
      ['die Wand', 'die Wände', 'الجدار', 'Das Bild hängt an der Wand.', 'Das Bild hängt an die Wand.', 'التعليق الثابت an der Wand؛ an die Wand للحركة.', 'kasus', 'Wand'],
      ['der Tisch', 'die Tische', 'الطاولة', 'Auf dem Tisch liegt ein Buch.', 'Auf der Tisch liegt ein Buch.', 'der Tisch مذكر، وفي Dativ يصير dem.', 'kasus', 'Tisch'],
      ['der Stuhl', 'die Stühle', 'الكرسي', 'Die Tasche steht neben dem Stuhl.', 'Die Tasche steht neben den Stuhl.', 'الموضع الثابت Dativ: dem Stuhl.', 'kasus', 'Stuhl'],
      ['das Buch', 'die Bücher', 'الكتاب', 'Das Buch liegt auf dem Bett.', 'Das Buch liegt auf das Bett.', 'الوضع الثابت Dativ: auf dem Bett.', 'kasus', 'Buch'],
      ['das Fenster', 'die Fenster', 'النافذة', 'Die Blumen stehen am Fenster.', 'Die Blumen stehen an das Fenster.', 'am = an + dem؛ الموضع الثابت.', 'präposition', 'Fenster'],
      ['die Tür', 'die Türen', 'الباب', 'Der Schlüssel steckt in der Tür.', 'Der Schlüssel steckt in die Tür.', 'الموضع الثابت Dativ: in der Tür.', 'kasus', 'Tür'],
      ['die Küche', 'die Küchen', 'المطبخ', 'Wir essen in der Küche.', 'Wir essen in die Küche.', 'الأكل في مكان ثابت Dativ.', 'kasus', 'Küche'],
      ['das Bad', 'die Bäder', 'الحمّام', 'Das Handtuch hängt im Bad.', 'Das Handtuch hängt in das Bad.', 'im = in + dem؛ الموضع الثابت.', 'präposition', 'Bad'],
      ['der Schrank', 'die Schränke', 'الخزانة', 'Die Kleidung ist im Schrank.', 'Die Kleidung ist in der Schrank.', 'der Schrank مذكر: im Schrank (in + dem).', 'kasus', 'Schrank'],
      ['das Bett', 'die Betten', 'السرير', 'Die Katze liegt auf dem Bett.', 'Die Katze liegt auf das Bett.', 'الوضع الثابت Dativ.', 'kasus', 'Bett'],
      ['die Lampe', 'die Lampen', 'المصباح', 'Die Lampe steht neben dem Sofa.', 'Die Lampe steht neben das Sofa.', 'بجانب في موضع ثابت Dativ.', 'kasus', 'Lampe'],
      ['der Garten', 'die Gärten', 'الحديقة', 'Die Kinder spielen im Garten.', 'Die Kinder spielen in den Garten.', 'im = in + dem للموضع الثابت.', 'präposition', 'Garten'],
      ['das Bild', 'die Bilder', 'الصورة', 'Das Bild hängt über dem Sofa.', 'Das Bild hängt über das Sofa.', 'فوق في موضع ثابت Dativ.', 'kasus', 'Bild'],
      ['die Apotheke', 'die Apotheken', 'الصيدلية', 'Die Apotheke ist neben dem Café.', 'Die Apotheke ist neben das Café.', 'الموضع الثابت مع neben يأخذ Dativ.', 'kasus', 'Apotheke']
    ],
    tricks: [
      { trick: 'سؤال wo يعطي Dativ تلقائيًا', wie: 'Wo liegt das Buch؟ ← auf dem Tisch: السؤال «أين» يقفل الحالة.', warum: 'العربية لا تُظهر الحالة، والألمانية تفرّق بين موضع وحركة بالأداة وحدها؛ جعل wo إشارة يحوّل القاعدة إلى عادة.', anchor: 'Das Buch liegt auf dem Tisch.' },
      { trick: 'an للسطح الملاصق وauf للسطح الأفقي', wie: 'Das Bild an der Wand · das Buch auf dem Tisch.', warum: 'العربية تقول «على» في الحالتين؛ الفرق أن an يلتصق بجدار قائم وauf يستقر على سطح أفقي، والصورة تُثبّت الفرق.', anchor: 'Das Bild hängt an der Wand.' },
      { trick: 'im وam اختصارات تُحفظ ككلمة', wie: 'in dem ← im · an dem ← am: لا تُكتب مفصولة.', warum: 'الفصل («in dem Bad») ليس خطأً نحويًا في كل موضع لكنه نادر في الكلام اليومي؛ الحفظ المدمج يطابق ما يسمعه المتعلم.', anchor: 'Das Handtuch hängt im Bad.' }
    ]
  },

  /* ---------------------------------------------------------------- l6 ---- */
  /* Theme: the plural. Not a table of endings but five shaped bricks plus the
     umlaut rule, each carried by a noun the learner already uses daily. */
  'a1-u2-l6': {
    items: [
      ['der Tag', 'die Tage', 'اليوم', 'Zwei Tage sind genug.', 'Zwei Tags sind genug.', 'جمع Tag هو Tage؛ s ليست لاحقة جمع ألمانية هنا.', 'plural', 'Tage'],
      ['das Kind', 'die Kinder', 'الطفل', 'Zwei Kinder spielen hier.', 'Zwei Kinds spielen hier.', 'جمع Kind هو Kinder.', 'plural', 'Kinder'],
      ['die Mutter', 'die Mütter', 'الأم', 'Zwei Mütter warten.', 'Zwei Mutters warten.', 'جمع Mutter حركة داخلية فقط: Mütter بلا لاحقة.', 'plural', 'Mütter'],
      ['das Auto', 'die Autos', 'السيارة', 'Zwei Autos stehen dort.', 'Zwei Auten stehen dort.', 'الدخيل مثل Auto يأخذ s في الجمع.', 'plural', 'Autos'],
      ['das Buch', 'die Bücher', 'الكتاب', 'Die Bücher liegen hier.', 'Die Bucher liegen hier.', 'الجمع Bücher بحركة وer معًا.', 'plural', 'Bücher'],
      ['der Mann', 'die Männer', 'الرجل', 'Zwei Männer arbeiten.', 'Zwei Manner arbeiten.', 'الجمع Männer بحركة؛ بلا حركة يتغيّر المعنى.', 'plural', 'Männer'],
      ['die Frau', 'die Frauen', 'المرأة', 'Zwei Frauen sprechen.', 'Zwei Fraus sprechen.', 'جمع Frau هو Frauen بلاحقة en.', 'plural', 'Frauen'],
      ['das Haus', 'die Häuser', 'البيت', 'Die Häuser sind neu.', 'Die Hauser sind neu.', 'الجمع Häuser بحركة وer.', 'plural', 'Häuser'],
      ['der Stuhl', 'die Stühle', 'الكرسي', 'Die Stühle sind alt.', 'Die Stuhle sind alt.', 'الجمع Stühle بحركة وe.', 'plural', 'Stühle'],
      ['das Wort', 'die Wörter', 'الكلمة', 'Zehn Wörter pro Tag.', 'Zehn Worts pro Tag.', 'جمع Wort هو Wörter للكلمات المفردة؛ Worte لمعنى آخر.', 'plural', 'Wörter'],
      ['die Stadt', 'die Städte', 'المدينة', 'Zwei Städte, ein Weg.', 'Zwei Stadte, ein Weg.', 'الجمع Städte بحركة وe.', 'plural', 'Städte'],
      ['der Freund', 'die Freunde', 'الصديق', 'Meine Freunde kommen.', 'Meine Freunds kommen.', 'الجمع Freunde بلا s.', 'plural', 'Freunde'],
      ['die Schwester', 'die Schwestern', 'الأخت', 'Zwei Schwestern lernen zusammen.', 'Zwei Schwester lernen zusammen.', 'الجمع Schwestern بـ n، والعدد فوق واحد يطلب الجمع.', 'plural', 'Schwestern'],
      ['das Zimmer', 'die Zimmer', 'الغرفة', 'Alle Zimmer sind frei.', 'Alle Zimmern sind frei.', 'هذا الجمع لا يتغيّر: Zimmer بلا n.', 'plural', 'Zimmer'],
      ['der Apfel', 'die Äpfel', 'التفاحة', 'Zwei Äpfel, bitte.', 'Zwei Apfels, bitte.', 'الجمع Äpfel بحركة داخلية فقط.', 'plural', 'Äpfel'],
      ['die Blume', 'die Blumen', 'الزهرة', 'Die Blumen sind schön.', 'Die Blumes sind schön.', 'جمع Blume بـ n.', 'plural', 'Blumen'],
      ['das Foto', 'die Fotos', 'الصورة الفوتوغرافية', 'Die Fotos sind alt.', 'Die Fotoen sind alt.', 'Foto دخيل، جمعه بـ s.', 'plural', 'Fotos'],
      ['der Lehrer', 'die Lehrer', 'المعلّم', 'Die Lehrer arbeiten hier.', 'Die Lehrere arbeiten hier.', 'جمع Lehrer بلا لاحقة؛ المفرد والجمع متشابهان.', 'plural', 'Lehrer'],
      ['die Aufgabe', 'die Aufgaben', 'المهمة', 'Die Aufgaben sind schwer.', 'Die Aufgabes sind schwer.', 'جمع Aufgabe بـ n.', 'plural', 'Aufgaben'],
      ['der Preis', 'die Preise', 'السعر', 'Die Preise sind hoch.', 'Die Preisen sind hoch.', 'جمع Preis بـ e.', 'plural', 'Preise'],
      ['das Getränk', 'die Getränke', 'الشراب', 'Die Getränke stehen dort.', 'Die Getränks stehen dort.', 'جمع Getränk بـ e مع حركة.', 'plural', 'Getränke'],
      ['das Mädchen', 'die Mädchen', 'البنت', 'Zwei Mädchen spielen.', 'Zwei Mädchen spielt.', 'اسم ينتهي بـ -chen لا يتغيّر في الجمع، والفعل يكون جمعًا.', 'konjugation', 'Mädchen'],
      ['der Schüler', 'die Schüler', 'التلميذ', 'Die Schüler lesen.', 'Die Schüler liest.', 'فاعل الجمع يأخذ lesen؛ التسكين على صيغة المفرد خطأ.', 'konjugation', 'Schüler'],
      ['die Sprache', 'die Sprachen', 'اللغة', 'Viele Sprachen sind schwer.', 'Viele Sprache sind schwer.', 'بعد «كثير من» يأتي الجمع: Sprachen.', 'plural', 'Sprachen']
    ],
    tricks: [
      { trick: 'خمس لبنات للجمع', wie: '-e (Tage) · -er (Kinder) · -n/-en (Frauen) · -s (Autos) · بلا لاحقة (Lehrer).', warum: 'العربية تجمع بالسلامة أو بالكسر بلا لاحقة، والألمانية تربط اللاحقة بنوع الاسم؛ خمس لبنات تحوّل الحفظ إلى قرار.', anchor: 'die Kinder' },
      { trick: 'الحركة الداخلية تُحفظ مع الجمع', wie: 'Mutter ← Mütter · Apfel ← Äpfel · Stadt ← Städte · Buch ← Bücher.', warum: 'من نسي الحركة أنتج كلمة قريبة لكن غير صحيحة؛ والحركة لا تُستنتج من المفرد فتُحفظ ملتصقة بالجمع.', anchor: 'die Mütter' },
      { trick: '-chen يثبّت الجمع', wie: 'das Mädchen ← die Mädchen · das Brötchen ← die Brötchen.', warum: 'لاحقة التصغير تُلزم الاسم المحايد وتُبقي الجمع بلا تغيير؛ فكل اسم بهذه اللاحقة يُعفى من اللبنات الخمس.', anchor: 'die Mädchen' }
    ]
  }
};

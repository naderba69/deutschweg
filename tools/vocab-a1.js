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
  },

  /* ============================ UNIT 3 — a1-u3-l1…l6 ======================== */

  /* ---------------------------------------------------------------- l1 ---- */
  /* Theme: food. The list is what a learner orders with, plus the two states
     German carries with sein (hungrig / satt) and the cutlery set, which is
     three genders on one table. */
  'a1-u3-l1': {
    items: [
      ['das Gericht', 'die Gerichte', 'الطبق (الأكلة)', 'Das Gericht ist heute Suppe.', 'Der Gericht ist heute Suppe.', 'das Gericht محايد؛ الجنس لا يُنقل من «الطبق».', 'genus', 'Gericht'],
      ['die Vorspeise', 'die Vorspeisen', 'المقبلات', 'Als Vorspeise nehme ich Salat.', 'Als Vorspeise ich nehme Salat.', 'بعد المكوّن الأول يبقى الفعل ثانيًا.', 'wortstellung', 'Vorspeise'],
      ['die Pizza', 'die Pizzas', 'البيتزا', 'Ich bestelle eine Pizza.', 'Ich bestelle ein Pizza.', 'die Pizza مؤنث: eine.', 'genus', 'Pizza'],
      ['der Salat', 'die Salate', 'السلطة', 'Der Salat ist frisch.', 'Die Salat ist frisch.', 'der Salat مذكر.', 'genus', 'Salat'],
      ['das Hähnchen', 'die Hähnchen', 'الدجاج', 'Ich nehme das Hähnchen.', 'Ich nehme der Hähnchen.', 'das Hähnchen محايد.', 'genus', 'Hähnchen'],
      ['das Fleisch', '—', 'اللحم', 'Ich esse kein Fleisch.', 'Ich esse nicht Fleisch.', 'الاسم النكرة يُنفى بـ kein لا بـ nicht.', 'lexik-kollokation', 'Fleisch'],
      ['die Nudeln', '—', 'المعكرونة', 'Die Nudeln sind fertig.', 'Die Nudeln ist fertig.', 'Nudeln جمع فقط، والفعل جمع.', 'plural', 'Nudeln'],
      ['der Kellner', 'die Kellner', 'النادل', 'Der Kellner bringt das Wasser.', 'Der Kellner bringt das Wasser ihm.', 'المفعول المعرّف يكفي؛ الضمير المكرر زائد.', 'wortstellung', 'Kellner'],
      ['schmecken', 'schmeckt · schmeckte · hat geschmeckt', 'يكون طعمه', 'Die Suppe schmeckt gut.', 'Die Suppe schmeckst gut.', 'الفاعل مفرد غائب: schmeckt بلا st.', 'konjugation', 'schmeckt'],
      ['lecker', '—', 'لذيذ', 'Der Kuchen ist lecker.', 'Der Kuchen ist ein lecker.', 'الصفة في الخبر تأتي بلا أداة.', 'deklination', 'lecker'],
      ['satt', '—', 'شبعان', 'Ich bin satt.', 'Ich habe satt.', 'الشبع حالة تُحمَل بـ sein لا haben.', 'lexik-kollokation', 'satt'],
      ['hungrig', '—', 'جوعان', 'Ich bin hungrig.', 'Ich habe hungrig.', 'الجوع حالة بـ sein.', 'lexik-kollokation', 'hungrig'],
      ['das Mittagessen', 'die Mittagessen', 'الغداء', 'Das Mittagessen ist um zwölf.', 'Das Mittagessen ist in zwölf.', 'الساعة مع um.', 'präposition', 'Mittagessen'],
      ['das Abendessen', 'die Abendessen', 'العشاء', 'Das Abendessen ist fertig.', 'Der Abendessen ist fertig.', 'das Abendessen محايد، والتركيب كلمة واحدة.', 'genus', 'Abendessen'],
      ['kochen', 'kocht · kochte · hat gekocht', 'يطبخ', 'Ich koche heute Abend.', 'Ich koche in heute Abend.', 'الظرف بلا حرف جر.', 'präposition', 'koche'],
      ['probieren', 'probiert · probierte · hat probiert', 'يتذوّق', 'Möchten Sie die Suppe probieren?', 'Möchten Sie die Suppe probierst?', 'بعد möchten يبقى المصدر.', 'konjugation', 'probieren'],
      ['die Tasse', 'die Tassen', 'الفنجان', 'Eine Tasse Kaffee, bitte.', 'Ein Tasse Kaffee, bitte.', 'die Tasse مؤنث: eine.', 'genus', 'Tasse'],
      ['das Glas', 'die Gläser', 'الكأس', 'Ein Glas Wasser, bitte.', 'Eine Glas Wasser, bitte.', 'das Glas محايد: ein؛ والجمع Gläser بحركة.', 'genus', 'Glas'],
      ['der Teller', 'die Teller', 'الطبق (الإناء)', 'Der Teller ist heiß.', 'Die Teller ist heiß.', 'der Teller مذكر؛ والمفرد والجمع متشابهان في الكتابة.', 'genus', 'Teller'],
      ['die Gabel', 'die Gabeln', 'الشوكة', 'Die Gabel liegt links.', 'Der Gabel liegt links.', 'die Gabel مؤنث.', 'genus', 'Gabel'],
      ['das Messer', 'die Messer', 'السكين', 'Das Messer ist scharf.', 'Der Messer ist scharf.', 'das Messer محايد.', 'genus', 'Messer'],
      ['der Löffel', 'die Löffel', 'الملعقة', 'Ich brauche einen Löffel.', 'Ich brauche ein Löffel.', 'der Löffel مذكر في النصب: einen.', 'kasus', 'Löffel'],
      ['das Salz', '—', 'الملح', 'Gib mir bitte das Salz.', 'Gib mir bitte der Salz.', 'das Salz يبقى das في النصب.', 'kasus', 'Salz'],
      ['der Saft', 'die Säfte', 'العصير', 'Ein Saft, bitte.', 'Eine Saft, bitte.', 'der Saft مذكر: ein، والجمع Säfte بحركة.', 'plural', 'Saft']
    ],
    tricks: [
      { trick: 'النادل يسأل بالمقلوب', wie: 'Möchten Sie bestellen? · Möchten Sie probieren?', warum: 'صيغة الأدب تبدأ بالفعل ثم Sie؛ العربية تبدأ بالفاعل، فحفظ القالب هو ما يجعل الرد مؤدّبًا من أول مرة.', anchor: 'Möchten Sie die Suppe probieren?' },
      { trick: 'sein للجوع والشبع', wie: 'Ich bin hungrig · ich bin satt: لا «ich habe».', warum: 'العربية تقول «عندي جوع» و«شبعت»، فيترجمها المتعلم بـ haben؛ والألمانية تعتبرهما حالة تُحمَل بـ sein مثل المرض.', anchor: 'Ich bin satt.' },
      { trick: 'طقم المائدة بثلاث أدوات', wie: 'der Löffel · das Messer · die Gabel: ثلاثة أجيال على طبق واحد.', warum: 'لا رابط بين شكل الشيء وجنسه، وحفظ الطقم الواحد معًا أسهل من حفظ كل كلمة وحدها، وهو يُستعمل كل يوم.', anchor: 'der Löffel' }
    ]
  },

  /* ---------------------------------------------------------------- l2 ---- */
  /* Theme: shopping. Prices, quantities and paying. The list pairs each noun
     with the frame it lives in (an der Kasse, mit der Karte, ein Kilo Tomaten)
     because that is where the case is decided. */
  'a1-u3-l2': {
    items: [
      ['kosten', 'kostet · kostete · hat gekostet', 'يكلّف', 'Was kostet das?', 'Was kostet es das?', 'الفاعل das يكفي؛ تكرار الضمير خطأ من العربية.', 'wortstellung', 'kostet'],
      ['das Sonderangebot', 'die Sonderangebote', 'العرض الخاص', 'Heute ist das Sonderangebot.', 'Heute ist der Sonderangebot.', 'das Angebot محايد، والتركيب كلمة واحدة بلا فراغ.', 'orthographie', 'Sonderangebot'],
      ['der Preis', 'die Preise', 'السعر', 'Der Preis ist hoch.', 'Der Preis ist teuer.', 'السعر يرتفع (hoch) والسلعة تُكلّف (teuer).', 'lexik-kollokation', 'Preis'],
      ['teuer', 'teurer · am teuersten', 'غالي', 'Das Auto ist zu teuer.', 'Das Auto ist zu teuer Preis.', 'الصفة تكفي في الخبر بلا اسم بعدها.', 'deklination', 'teuer'],
      ['billig', 'billiger · am billigsten', 'رخيص', 'Das Brot ist billig.', 'Das Brot ist billig Preis.', 'الصفة لا تحتاج «Preis» بعدها.', 'deklination', 'billig'],
      ['günstig', '—', 'بسعر مناسب', 'Der Kurs ist günstig.', 'Der Kurs ist gunstig.', 'ü جزء من الكلمة؛ بلا نقطتين تصير كلمة غير قائمة.', 'orthographie', 'günstig'],
      ['die Kasse', 'die Kassen', 'الصندوق (الدفع)', 'Bitte zahlen Sie an der Kasse.', 'Bitte zahlen Sie in der Kasse.', 'الدفع عند الصندوق an der Kasse.', 'präposition', 'Kasse'],
      ['bezahlen', 'bezahlt · bezahlte · hat bezahlt', 'يدفع', 'Ich bezahle mit Karte.', 'Ich bezahle mit die Karte.', 'mit تحكم Dativ: der Karte.', 'kasus', 'bezahle'],
      ['die Karte', 'die Karten', 'البطاقة', 'Ich bezahle mit der Karte.', 'Ich bezahle mit die Karte.', 'بعد mit يأتي Dativ دائمًا: der Karte.', 'kasus', 'Karte'],
      ['das Kleingeld', '—', 'النقود المعدنية', 'Hast du Kleingeld?', 'Hast du klein Geld?', 'الكلمة مركّبة: Klein + Geld كلمة واحدة.', 'orthographie', 'Kleingeld'],
      ['der Euro', 'die Euro', 'اليورو', 'Das kostet fünf Euro.', 'Das kostet fünf Euros.', 'Euro لا تُجمع بـ s في الألمانية المعيارية.', 'plural', 'Euro'],
      ['die Tüte', 'die Tüten', 'الكيس', 'Eine Tüte, bitte.', 'Ein Tüte, bitte.', 'die Tüte مؤنث: eine.', 'genus', 'Tüte'],
      ['das Kilo', 'die Kilos', 'الكيلوغرام', 'Ein Kilo Tomaten, bitte.', 'Eine Kilo Tomaten, bitte.', 'das Kilo محايد: ein.', 'genus', 'Kilo'],
      ['das Pfund', 'die Pfund', 'الرطل (500 غرام)', 'Ein Pfund Kaffee, bitte.', 'Ein Pfund Kaffees, bitte.', 'المقدار مع الاسم غير المعدود بلا إضافة.', 'plural', 'Pfund'],
      ['die Flasche', 'die Flaschen', 'القنينة', 'Zwei Flaschen Wasser, bitte.', 'Zwei Flasche Wasser, bitte.', 'العدد فوق واحد يطلب الجمع: Flaschen.', 'plural', 'Flaschen'],
      ['die Dose', 'die Dosen', 'المعلّبة', 'Ich kaufe eine Dose Thunfisch.', 'Ich kaufe ein Dose Thunfisch.', 'die Dose مؤنث: eine.', 'genus', 'Dose'],
      ['das Stück', 'die Stücke', 'القطعة', 'Ein Stück Käse, bitte.', 'Ein Stuck Käse, bitte.', 'ü جزء من الكلمة؛ إسقاطها يترك كلمة غير صحيحة.', 'orthographie', 'Stück'],
      ['der Käse', '—', 'الجبن', 'Der Käse ist frisch.', 'Das Käse ist frisch.', 'der Käse مذكر.', 'genus', 'Käse'],
      ['das Obst', '—', 'الفواكه', 'Ich kaufe Obst.', 'Ich kaufe ein Obst.', 'das Obst جمعي يُستعمل بلا أداة هنا.', 'lexik-kollokation', 'Obst'],
      ['das Gemüse', '—', 'الخضر', 'Gemüse ist gesund.', 'Gemüse sind gesund.', 'das Gemüse مفرد جمعي، فيأخذ الفعل مفردًا.', 'konjugation', 'Gemüse'],
      ['die Tomate', 'die Tomaten', 'الطماطم', 'Die Tomaten sind rot.', 'Die Tomate sind rot.', 'الفاعل جمع، فيأتي الفعل جمعًا.', 'plural', 'Tomaten'],
      ['der Apfel', 'die Äpfel', 'التفاحة', 'Ich nehme drei Äpfel.', 'Ich nehme drei Apfel.', 'الجمع Äpfel بحركة، والعدد فوق واحد يطلبه.', 'plural', 'Äpfel'],
      ['die Quittung', 'die Quittungen', 'الوصل', 'Möchten Sie eine Quittung?', 'Möchten Sie ein Quittung?', 'die Quittung مؤنث، وكل ما ينتهي بـ -ung مؤنث.', 'genus', 'Quittung'],
      ['öffnen', 'öffnet · öffnete · hat geöffnet', 'يفتح', 'Ich öffne die Flasche.', 'Ich öffne die Flasche auf.', 'öffnen تأخذ المفعول مباشرة؛ auf مع aufmachen.', 'falser-freund', 'öffne']
    ],
    tricks: [
      { trick: 'السعر hoch والسلعة teuer', wie: 'Der Preis ist hoch · das Auto ist teuer.', warum: 'العربية تقول «غالي» للسعر والسلعة معًا؛ الألمانية تفصل: السعر يرتفع، والسلعة تُكلّف.', anchor: 'Der Preis ist hoch.' },
      { trick: 'mit يجرّ دائمًا', wie: 'mit der Karte · mit dem Bus · mit dem Freund.', warum: 'mit من الحروف التي تحكم Dativ بلا استثناء، وهي أول ما يُختبر في الملء؛ حفظ الحرف مع حالته يمنع الخطأ قبل وقوعه.', anchor: 'Ich bezahle mit der Karte.' },
      { trick: 'المقدار ثم الاسم بلا أداة', wie: 'ein Kilo Tomaten · ein Pfund Kaffee · eine Flasche Wasser.', warum: 'العربية تربط المعدود بالمعدود إليه بلا أداة، والألمانية تفعل مثلها هنا؛ فإضافة أداة («ein Kilo der Tomaten») تبدو ثقيلة في المتجر.', anchor: 'Ein Kilo Tomaten, bitte.' }
    ]
  },

  /* ---------------------------------------------------------------- l3 ---- */
  /* Theme: the day. The routine verbs carry the separable prefix that unit 2
     taught, now inside a real schedule, with the reflexive pronoun sitting
     between the verb and its prefix. */
  'a1-u3-l3': {
    items: [
      ['aufwachen', 'wacht auf · wachte auf · ist aufgewacht', 'يستيقظ (من النوم)', 'Ich wache um sechs auf.', 'Ich aufwache um sechs.', 'البادئة auf في آخر الجملة.', 'wortstellung', 'wache'],
      ['duschen', 'duscht · duschte · hat geduscht', 'يستحمّ', 'Ich dusche jeden Morgen.', 'Ich mich dusche jeden Morgen.', 'duschen بلا ضمير انعكاسي في هذا الاستعمال.', 'konjugation', 'dusche'],
      ['sich waschen', 'wäscht sich · wusch sich · hat sich gewaschen', 'يغسل (نفسه)', 'Ich wasche mich.', 'Ich wasche mir.', 'الغسل الكامل يطلب النصب: mich لا mir.', 'kasus', 'wasche'],
      ['sich anziehen', 'zieht sich an · zog sich an · hat sich angezogen', 'يلبس ثيابه', 'Ich ziehe mich an.', 'Ich anziehe mich.', 'الفعل الانعكاسي المنفصل: الفعل ثانيًا، الضمير بعده، an في الآخر.', 'wortstellung', 'ziehe'],
      ['losgehen', 'geht los · ging los · ist losgegangen', 'ينطلق', 'Ich gehe um acht los.', 'Ich losgehe um acht.', 'los في آخر الجملة.', 'wortstellung', 'gehe'],
      ['die Zähne putzen', 'putzt die Zähne · putzte die Zähne', 'ينظّف أسنانه', 'Ich putze die Zähne.', 'Ich putze mich die Zähne.', 'الفعل المتعدّي لا يحتاج ضميرًا مكررًا.', 'kasus', 'putze'],
      ['die Arbeit beginnen', 'beginnt die Arbeit · begann die Arbeit', 'يبدأ العمل', 'Ich beginne die Arbeit um neun.', 'Ich beginne die Arbeit in neun.', 'الساعة مع um.', 'präposition', 'beginne'],
      ['mittags', '—', 'ظهرًا', 'Mittags esse ich zu Hause.', 'In mittags esse ich zu Hause.', 'الظرف بلا حرف جر.', 'präposition', 'mittags'],
      ['nachmittags', '—', 'بعد الظهر', 'Nachmittags lerne ich Deutsch.', 'Nachmittags ich lerne Deutsch.', 'بعد الظرف يبقى الفعل ثانيًا.', 'wortstellung', 'nachmittags'],
      ['zu Abend essen', 'isst zu Abend · aß zu Abend', 'يتعشّى', 'Ich esse um acht zu Abend.', 'Ich esse zu Abend um acht.', 'الظرف الزمني قبل «zu Abend» في الترتيب الشائع.', 'wortstellung', 'Abend'],
      ['schlafen gehen', 'geht schlafen · ging schlafen', 'يذهب لينام', 'Ich gehe um elf schlafen.', 'Ich gehe schlafen um elf.', 'الظرف قبل schlafen في الموضع الأخير.', 'wortstellung', 'schlafen'],
      ['der Alltag', '—', 'اليومي · الروتين', 'Mein Alltag ist ruhig.', 'Meine Alltag ist ruhig.', 'der Alltag مذكر: mein.', 'genus', 'Alltag'],
      ['das Wochenende', 'die Wochenenden', 'نهاية الأسبوع', 'Am Wochenende schlafe ich lange.', 'Im Wochenende schlafe ich lange.', 'am Wochenende صيغة ثابتة.', 'präposition', 'Wochenende'],
      ['unter der Woche', '—', 'خلال أيام العمل', 'Unter der Woche arbeite ich viel.', 'In der Woche unter arbeite ich viel.', '«خلال الأسبوع» تُقال unter der Woche.', 'lexik-kollokation', 'Woche'],
      ['vorbereiten', 'bereitet vor · bereitete vor · hat vorbereitet', 'يُحضّر', 'Ich bereite das Frühstück vor.', 'Ich vorbereite das Frühstück.', 'vor في آخر الجملة.', 'wortstellung', 'bereite'],
      ['früh', 'früher · am frühesten', 'مبكّر', 'Ich stehe früh auf.', 'Ich stehe auf früh.', 'البادئة auf تبقى آخر الجملة.', 'wortstellung', 'früh'],
      ['müde', '—', 'متعب', 'Am Abend bin ich müde.', 'Am Abend ich bin müde.', 'بعد الظرف يبقى الفعل ثانيًا.', 'wortstellung', 'müde'],
      ['der Zahn', 'die Zähne', 'السنّ', 'Der Zahn tut weh.', 'Die Zahn tut weh.', 'der Zahn مذكر، والجمع Zähne بحركة.', 'genus', 'Zahn'],
      ['sauber', '—', 'نظيف', 'Die Küche ist sauber.', 'Die Küche ist sauber machen.', 'الصفة تكفي؛ لا فعل بعدها.', 'deklination', 'sauber'],
      ['die Routine', 'die Routinen', 'الروتين', 'Meine Routine beginnt um sechs.', 'Mein Routine beginnt um sechs.', 'die Routine مؤنث: meine.', 'genus', 'Routine'],
      ['halb sieben', '—', 'السادسة والنصف', 'Ich stehe um halb sieben auf.', 'Ich stehe um halb sechs auf.', 'halb sieben = 6:30، إلى الساعة القادمة.', 'falser-freund', 'halb'],
      ['rechtzeitig', '—', 'في الوقت المناسب', 'Ich komme rechtzeitig an.', 'Ich komme rechtzeitig an zu Hause.', 'ankommen تكفي؛ البادئة an في آخر الجملة.', 'wortstellung', 'rechtzeitig'],
      ['klingeln', 'klingelt · klingelte · hat geklingelt', 'يرنّ', 'Der Wecker klingelt um sechs.', 'Der Wecker klingelt in sechs.', 'الساعة مع um.', 'präposition', 'klingelt'],
      ['die Liste', 'die Listen', 'القائمة', 'Ich schreibe eine Liste.', 'Ich schreibe ein Liste.', 'die Liste مؤنث: eine.', 'genus', 'Liste']
    ],
    tricks: [
      { trick: 'الظرف أولًا والفعل ثانيًا', wie: 'Mittags esse ich · Nachmittags lerne ich: الظرف في الموضع الأول، الفعل يتبعه، الفاعل ثالثًا.', warum: 'العربية تقول «ظهرًا آكل» بالترتيب نفسه، لكن المتعلم يقدّم الفاعل عند إطالة الجملة؛ القاعدة تُقفل الموضع.', anchor: 'Nachmittags lerne ich Deutsch.' },
      { trick: 'الضمير الانعكاسي بين الفعل والبادئة', wie: 'Ich ziehe mich an · ich wasche mich.', warum: 'ثلاثة عناصر في مكان ضيق: الفعل، ثم الضمير، ثم البادئة في الآخر؛ ترتيبها ثابت ولا يُترك للسمع.', anchor: 'Ich ziehe mich an.' },
      { trick: 'البادئة تفرّق بين فعلين متقاربين', wie: 'aufwachen (من النوم) · aufstehen (من السرير) · losgehen (ينطلق).', warum: 'العربية تُفرّق بالسياق، والألمانية تعلّق الفرق بالبادئة؛ فحفظ الفعل ببادئته هو حفظ الفعل نفسه.', anchor: 'Ich wache um sechs auf.' }
    ]
  },

  /* ---------------------------------------------------------------- l4 ---- */
  /* Theme: the past with haben. Instead of a rule list, the list is the past
     participles the learner will actually need, each inside its own sentence,
     plus the particles (schon, noch nicht, nie) whose position makes the
     bracket hold. */
  'a1-u3-l4': {
    items: [
      ['gearbeitet', '—', 'عملتُ', 'Ich habe gestern gearbeitet.', 'Ich habe gestern arbeiten.', 'الماضي مع haben يحتاج اسم المفعول لا المصدر.', 'konjugation', 'gearbeitet'],
      ['gelernt', '—', 'تعلّمتُ', 'Ich habe viel gelernt.', 'Ich habe viel lernen.', 'نفس القاعدة: اسم المفعول في الآخر.', 'konjugation', 'gelernt'],
      ['gespielt', '—', 'لعبتُ', 'Wir haben Fußball gespielt.', 'Wir haben Fußball spielen.', 'اسم المفعول لا المصدر.', 'konjugation', 'gespielt'],
      ['gekauft', '—', 'اشتريتُ', 'Ich habe Brot gekauft.', 'Ich habe Brot kaufen.', 'اسم المفعول في الآخر.', 'konjugation', 'gekauft'],
      ['gemacht', '—', 'فعلتُ', 'Was hast du gestern gemacht?', 'Was hast du gestern machen?', 'في السؤال يبقى اسم المفعول في الآخر أيضًا.', 'konjugation', 'gemacht'],
      ['gegessen', 'isst · aß', 'أكلتُ', 'Ich habe Pizza gegessen.', 'Ich habe Pizza essen.', 'اسم المفعول gegessen، وفعله شاذ.', 'konjugation', 'gegessen'],
      ['getrunken', '—', 'شربتُ', 'Ich habe Tee getrunken.', 'Ich habe Tee trinken.', 'اسم المفعول getrunken.', 'konjugation', 'getrunken'],
      ['gesehen', '—', 'رأيتُ', 'Ich habe den Film gesehen.', 'Ich habe den Film sehen.', 'اسم المفعول gesehen.', 'konjugation', 'gesehen'],
      ['geschrieben', '—', 'كتبتُ', 'Ich habe eine Nachricht geschrieben.', 'Ich habe eine Nachricht schreiben.', 'اسم المفعول geschrieben.', 'konjugation', 'geschrieben'],
      ['gelesen', '—', 'قرأتُ', 'Ich habe das Buch gelesen.', 'Ich habe das Buch lesen.', 'اسم المفعول gelesen.', 'konjugation', 'gelesen'],
      ['gesprochen', '—', 'تكلّمتُ', 'Ich habe mit dem Lehrer gesprochen.', 'Ich habe mit dem Lehrer sprechen.', 'اسم المفعول؛ وsprechen تطلب mit + Dativ.', 'konjugation', 'gesprochen'],
      ['genommen', '—', 'أخذتُ', 'Ich habe den Bus genommen.', 'Ich habe den Bus nehmen.', 'اسم المفعول genommen.', 'konjugation', 'genommen'],
      ['gehört', '—', 'سمعتُ', 'Ich habe Musik gehört.', 'Ich habe Musik hören.', 'اسم المفعول gehört.', 'konjugation', 'gehört'],
      ['gesucht', '—', 'بحثتُ', 'Ich habe meinen Schlüssel gesucht.', 'Ich habe meinen Schlüssel suchen.', 'اسم المفعول gesucht؛ والمفعول في النصب meinen.', 'konjugation', 'gesucht'],
      ['gefunden', '—', 'وجدتُ', 'Ich habe den Schlüssel gefunden.', 'Ich habe den Schlüssel finden.', 'اسم المفعول gefunden.', 'konjugation', 'gefunden'],
      ['gestern', '—', 'أمس', 'Gestern habe ich gearbeitet.', 'Gestern ich habe gearbeitet.', 'إذا تقدّم الظرف يبقى الفعل المساعد ثانيًا.', 'wortstellung', 'gestern'],
      ['vorgestern', '—', 'أول أمس', 'Vorgestern war ich krank.', 'Vorgestern ich war krank.', 'الفعل ثانيًا بعد الظرف.', 'wortstellung', 'vorgestern'],
      ['letzte Woche', '—', 'الأسبوع الماضي', 'Letzte Woche habe ich viel gelernt.', 'Letzte Woche ich habe viel gelernt.', 'الفعل ثانيًا ولو طال المكوّن الأول.', 'wortstellung', 'Woche'],
      ['letztes Jahr', '—', 'السنة الماضية', 'Letztes Jahr war ich in Berlin.', 'Letzte Jahr war ich in Berlin.', 'das Jahr محايد: letztes Jahr.', 'deklination', 'Jahr'],
      ['schon', '—', 'بالفعل · سبق أن', 'Ich habe schon gegessen.', 'Ich habe gegessen schon.', 'schon تأتي قبل اسم المفعول لا بعده.', 'wortstellung', 'schon'],
      ['noch nicht', '—', 'لم بعد', 'Ich habe noch nicht gegessen.', 'Ich habe gegessen noch nicht.', 'الترتيب: noch nicht قبل اسم المفعول.', 'wortstellung', 'nicht'],
      ['nie', '—', 'أبدًا', 'Ich habe nie geraucht.', 'Ich habe geraucht nie.', 'ظرف النفي يأتي قبل اسم المفعول.', 'wortstellung', 'nie'],
      ['die Woche', 'die Wochen', 'الأسبوع', 'Diese Woche war lang.', 'Diese Woche waren lang.', 'الفاعل مفرد: war.', 'konjugation', 'Woche'],
      ['gestern Abend', '—', 'البارحة مساءً', 'Gestern Abend habe ich gekocht.', 'Gestern Abend ich habe gekocht.', 'الفعل ثانيًا ولو تعدّد الظرف.', 'wortstellung', 'Abend']
    ],
    tricks: [
      { trick: 'القوس: haben ثانيًا واسم المفعول أخيرًا', wie: 'Ich habe gestern gearbeitet: المساعد في الموضع الثاني واسم المفعول في الآخر.', warum: 'العربية تصرّف الماضي بكلمة واحدة، والألمانية تبني الزمن من قطعتين تفصل بينهما الجملة كلها؛ هذا أكبر تغيير بنيوي في A1.', anchor: 'Ich habe gestern gearbeitet.' },
      { trick: 'ge في الأول وt في الآخر', wie: 'gearbeitet · gelernt · gekauft · gemacht: قالب الأفعال المنتظمة.', warum: 'لبنة واحدة (ge + الجذر + t) تولّد ما لم يُحفظ؛ ومن حفظ الأفعال كلمة واحدة ضاع عليه القالب.', anchor: 'Ich habe Brot gekauft.' },
      { trick: 'schon وnoch nicht قبل اسم المفعول', wie: 'Ich habe schon gegessen · ich habe noch nicht gegessen · ich habe nie geraucht.', warum: 'العربية تضع «بالفعل» و«بعد» آخر الجملة، والألمانية تُلزمهما قبل اسم المفعول؛ تقديمهما يفكّ القوس.', anchor: 'Ich habe schon gegessen.' }
    ]
  },

  /* ---------------------------------------------------------------- l5 ---- */
  /* Theme: the past with sein. The list is movement and change of state, plus
     the travel nouns and the two-direction pair nach Hause / zu Hause. */
  'a1-u3-l5': {
    items: [
      ['gegangen', '—', 'ذهبتُ', 'Ich bin nach Hause gegangen.', 'Ich habe nach Hause gegangen.', 'الحركة تأخذ sein لا haben.', 'konjugation', 'gegangen'],
      ['gefahren', '—', 'سافرتُ', 'Wir sind nach Tunis gefahren.', 'Wir haben nach Tunis gefahren.', 'fahren فعل حركة يأخذ sein.', 'konjugation', 'gefahren'],
      ['gekommen', '—', 'جئتُ', 'Sie ist spät gekommen.', 'Sie hat spät gekommen.', 'kommen تأخذ sein.', 'konjugation', 'gekommen'],
      ['geflogen', '—', 'طرتُ', 'Ich bin nach Berlin geflogen.', 'Ich habe nach Berlin geflogen.', 'fliegen فعل حركة يأخذ sein.', 'konjugation', 'geflogen'],
      ['gereist', '—', 'سافرت (رحلة)', 'Wir sind viel gereist.', 'Wir haben viel gereist.', 'reisen تأخذ sein.', 'konjugation', 'gereist'],
      ['aufgestanden', '—', 'استيقظتُ', 'Ich bin früh aufgestanden.', 'Ich habe früh aufgestanden.', 'aufstehen فعل حركة يأخذ sein.', 'konjugation', 'aufgestanden'],
      ['eingestiegen', '—', 'صعدتُ (إلى الباص)', 'Ich bin in den Bus eingestiegen.', 'Ich habe in den Bus eingestiegen.', 'einsteigen تأخذ sein.', 'konjugation', 'eingestiegen'],
      ['ausgestiegen', '—', 'نزلتُ', 'Wir sind hier ausgestiegen.', 'Wir haben hier ausgestiegen.', 'aussteigen تأخذ sein.', 'konjugation', 'ausgestiegen'],
      ['geblieben', '—', 'بقيتُ', 'Ich bin zu Hause geblieben.', 'Ich habe zu Hause geblieben.', 'bleiben تغيّر موضع وإن لم تظهر حركة، ومع ذلك تأخذ sein.', 'konjugation', 'geblieben'],
      ['geworden', '—', 'أصبحتُ', 'Er ist Arzt geworden.', 'Er hat Arzt geworden.', 'werden تأخذ sein، والمهنة بلا أداة هنا.', 'konjugation', 'geworden'],
      ['gefallen', '—', 'أعجبه', 'Der Film hat mir gefallen.', 'Der Film hat mich gefallen.', 'gefallen تطلب Dativ: mir لا mich.', 'kasus', 'gefallen'],
      ['passiert', '—', 'حدث', 'Was ist passiert?', 'Was hat passiert?', 'passieren تأخذ sein.', 'konjugation', 'passiert'],
      ['die Reise', 'die Reisen', 'الرحلة', 'Die Reise war lang.', 'Der Reise war lang.', 'die Reise مؤنث.', 'genus', 'Reise'],
      ['der Zug', 'die Züge', 'القطار', 'Der Zug fährt um acht.', 'Der Zug fahrt um acht.', 'مع الغائب: fährt لا fahrt.', 'konjugation', 'Zug'],
      ['das Flugzeug', 'die Flugzeuge', 'الطائرة', 'Das Flugzeug ist gelandet.', 'Das Flugzeug ist landen.', 'في الماضي يأتي اسم المفعول gelandet.', 'konjugation', 'Flugzeug'],
      ['der Bahnhof', 'die Bahnhöfe', 'محطة القطار', 'Wir treffen uns am Bahnhof.', 'Wir treffen uns in Bahnhof.', 'المحطة an + dem = am Bahnhof.', 'präposition', 'Bahnhof'],
      ['der Flughafen', 'die Flughäfen', 'المطار', 'Ich fahre zum Flughafen.', 'Ich fahre in der Flughafen.', 'zu + dem = zum مع المطار.', 'präposition', 'Flughafen'],
      ['abfahren', 'fährt ab · fuhr ab · ist abgefahren', 'ينطلق (القطار)', 'Der Zug fährt um acht ab.', 'Der Zug abfährt um acht.', 'البادئة ab في الآخر.', 'wortstellung', 'fährt'],
      ['ankommen', 'kommt an · kam an · ist angekommen', 'يصل', 'Wann kommt der Zug an?', 'Wann ankommt der Zug?', 'في السؤال يبقى الفعل المصرّف أولًا وan في الآخر.', 'wortstellung', 'kommt'],
      ['die Fahrt', 'die Fahrten', 'الرحلة (بالسيارة أو القطار)', 'Die Fahrt dauert zwei Stunden.', 'Die Fahrt dauert zwei Uhren.', 'المدة بالساعات (Stunden) لا بالـ Uhren.', 'lexik-kollokation', 'Fahrt'],
      ['unterwegs', '—', 'في الطريق', 'Ich bin unterwegs.', 'Ich bin in unterwegs.', 'الظرف قائم بذاته بلا حرف جر.', 'präposition', 'unterwegs'],
      ['nach Hause', '—', 'إلى البيت', 'Ich gehe nach Hause.', 'Ich gehe zu Hause.', 'الحركة إلى البيت nach Hause، والوجود فيها zu Hause.', 'lexik-kollokation', 'Hause'],
      ['zu Hause', '—', 'في البيت', 'Ich bleibe zu Hause.', 'Ich bleibe nach Hause.', 'البقاء في البيت zu Hause؛ nach للحركة.', 'lexik-kollokation', 'Hause'],
      ['die Richtung', 'die Richtungen', 'الاتجاه', 'Die Richtung stimmt.', 'Der Richtung stimmt.', 'die Richtung مؤنث.', 'genus', 'Richtung']
    ],
    tricks: [
      { trick: 'sein للحركة وتغيّر الحال', wie: 'gegangen · gefahren · gekommen · geworden: كلها مع sein.', warum: 'العربية لا تُفرّق، والاختيار بين haben وsein هو الخطأ الأول في الماضي؛ القاعدة: حركة من نقطة إلى نقطة، أو تحوّل حال ← sein.', anchor: 'Ich bin nach Hause gegangen.' },
      { trick: 'الوجهة أم السكون', wie: 'Ich gehe nach Hause · ich bleibe zu Hause.', warum: 'العربية تقول «البيت» في الحالتين، وأداة واحدة تفصل حركةً من سكون؛ الخلط يقلب المعنى لا الأسلوب.', anchor: 'Ich gehe nach Hause.' },
      { trick: 'البادئة تبقى في الآخر في الماضي أيضًا', wie: 'Ich bin früh aufgestanden · der Zug ist um acht abgefahren.', warum: 'الفصل لا يسقط في الماضي: المساعد يحلّ في الموضع الثاني، وتبقى البادئة مع ge في الآخر.', anchor: 'Ich bin früh aufgestanden.' }
    ]
  },

  /* ---------------------------------------------------------------- l6 ---- */
  /* Theme: appointments. Suggesting, accepting, declining — the frames that
     make a learner able to make a date in German without translating Arabic
     politeness word for word. */
  'a1-u3-l6': {
    items: [
      ['die Verabredung', 'die Verabredungen', 'الموعد (بين شخصين)', 'Ich habe eine Verabredung.', 'Ich habe ein Verabredung.', 'die Verabredung مؤنث: eine.', 'genus', 'Verabredung'],
      ['treffen', 'trifft · traf · hat getroffen', 'يلتقي بـ', 'Wir treffen uns um acht.', 'Wir treffen um acht.', 'الالتقاء ببعضنا يحتاج الضمير الانعكاسي: uns.', 'kasus', 'treffen'],
      ['sich freuen', 'freut sich · freute sich', 'يفرح', 'Ich freue mich auf den Kurs.', 'Ich freue mich für den Kurs.', 'الترقّب المستقبلي مع auf + النصب: auf den Kurs.', 'präposition', 'freue'],
      ['passen', 'passt · passte · hat gepasst', 'يناسب', 'Passt dir der Montag?', 'Passt du der Montag?', 'passen تطلب Dativ للشخص: dir لا du.', 'kasus', 'Passt'],
      ['der Vorschlag', 'die Vorschläge', 'الاقتراح', 'Das ist ein guter Vorschlag.', 'Das ist ein gut Vorschlag.', 'الصفة قبل الاسم تأخذ نهاية: guter Vorschlag.', 'deklination', 'Vorschlag'],
      ['vorschlagen', 'schlägt vor · schlug vor · hat vorgeschlagen', 'يقترح', 'Ich schlage acht Uhr vor.', 'Ich vorschlage acht Uhr.', 'vor في آخر الجملة.', 'wortstellung', 'schlage'],
      ['Wie wäre es mit ...?', '—', 'ما رأيك بـ ...؟', 'Wie wäre es mit Freitag?', 'Wie ist mit Freitag du?', 'صيغة الاقتراح الثابتة: Wie wäre es mit + Dativ.', 'register', 'Freitag'],
      ['Hast du Zeit?', '—', 'هل عندك وقت؟', 'Hast du am Freitag Zeit?', 'Hast du Zeit am Freitag du?', 'في السؤال يبقى الفعل أولًا، والظرف بعد المفعول.', 'wortstellung', 'Zeit'],
      ['Es tut mir leid', '—', 'آسف', 'Es tut mir leid, ich kann nicht.', 'Es ist mir leid tut.', 'الصيغة ثابتة بهذا الترتيب ولا تُخلط بفعل آخر.', 'register', 'leid'],
      ['leider', '—', 'للأسف', 'Leider habe ich keine Zeit.', 'Leider ich habe keine Zeit.', 'بعد الظرف يبقى الفعل ثانيًا.', 'wortstellung', 'leider'],
      ['vielleicht', '—', 'ربّما', 'Vielleicht klappt es nächste Woche.', 'Vielleicht es klappt nächste Woche.', 'الفعل ثانيًا بعد الظرف.', 'wortstellung', 'vielleicht'],
      ['nächste Woche', '—', 'الأسبوع القادم', 'Nächste Woche habe ich Zeit.', 'Nächsten Woche habe ich Zeit.', 'die Woche مؤنث: nächste Woche.', 'deklination', 'Woche'],
      ['wann', '—', 'متى', 'Wann hast du Zeit?', 'Wann du hast Zeit?', 'بعد أداة السؤال يأتي الفعل مباشرة.', 'wortstellung', 'wann'],
      ['das Kino', 'die Kinos', 'السينما', 'Wir gehen ins Kino.', 'Wir gehen in Kino.', 'in + das = ins Kino.', 'präposition', 'Kino'],
      ['ins Restaurant gehen', 'geht ins Restaurant · ging ins Restaurant', 'يذهب إلى المطعم', 'Wir gehen ins Restaurant.', 'Wir gehen in Restaurant.', 'ins = in + das، والأداة لا تُحذف.', 'präposition', 'Restaurant'],
      ['das Café', 'die Cafés', 'المقهى', 'Wir treffen uns im Café.', 'Wir treffen uns in Café.', 'das Café محايد: im = in + dem.', 'präposition', 'Café'],
      ['absagen', 'sagt ab · sagte ab · hat abgesagt', 'يُلغي', 'Ich muss den Termin absagen.', 'Ich muss den Termin absage.', 'بعد müssen يبقى المصدر: absagen.', 'konjugation', 'absagen'],
      ['verschieben', 'verschiebt · verschob · hat verschoben', 'يؤجّل', 'Können wir das verschieben?', 'Können wir das verschiebst?', 'بعد können يبقى المصدر.', 'konjugation', 'verschieben'],
      ['bestätigen', 'bestätigt · bestätigte · hat bestätigt', 'يؤكّد', 'Ich bestätige den Termin.', 'Ich bestätige den Termin zu.', 'bestätigen تأخذ المفعول مباشرة بلا حرف جر.', 'präposition', 'bestätige'],
      ['die Uhrzeit', 'die Uhrzeiten', 'التوقيت', 'Welche Uhrzeit passt dir?', 'Welche Uhrzeit passt du?', 'passen تطلب Dativ: dir.', 'kasus', 'Uhrzeit'],
      ['morgen', '—', 'غدًا', 'Morgen habe ich keine Zeit.', 'Morgen ich habe keine Zeit.', 'بعد الظرف يبقى الفعل ثانيًا.', 'wortstellung', 'morgen'],
      ['übermorgen', '—', 'بعد غد', 'Übermorgen passt es besser.', 'Übermorgen es passt besser.', 'الفعل ثانيًا بعد الظرف.', 'wortstellung', 'übermorgen'],
      ['frei', '—', 'متفرّغ', 'Am Freitag bin ich frei.', 'Am Freitag ich bin frei.', 'بعد الظرف يبقى الفعل ثانيًا.', 'wortstellung', 'frei'],
      ['sich entschuldigen', 'entschuldigt sich · entschuldigte sich', 'يعتذر', 'Ich entschuldige mich für die Verspätung.', 'Ich entschuldige für die Verspätung.', 'entschuldigen تحتاج الضمير الانعكاسي mich.', 'kasus', 'entschuldige']
    ],
    tricks: [
      { trick: 'الاقتراح له قالب جاهز', wie: 'Wie wäre es mit Freitag? · Hast du am Freitag Zeit?', warum: 'العربية تقترح بجملة فعلية («ما رأيك أن نلتقي»)، والألمانية تقترح باسم أو سؤال مباشر؛ القالب المحفوظ يجعل الاقتراح مؤدّبًا من أول مرة.', anchor: 'Wie wäre es mit Freitag?' },
      { trick: 'الاعتذار عن شيء بـ für', wie: 'Ich entschuldige mich für die Verspätung.', warum: 'العربية تربط السبب بـ «عن»، والألمانية بـ für + النصب؛ الحرف يتبع المعنى الألماني لا الترجمة.', anchor: 'Ich entschuldige mich für die Verspätung.' },
      { trick: 'ظرف الرفض لا يزحزح الفعل', wie: 'Morgen habe ich keine Zeit · leider habe ich keine Zeit.', warum: 'في جملة الرفض يبقى الفعل ثانيًا، والعربية تبدأ بالفاعل فتُنتج «Morgen ich habe».', anchor: 'Morgen habe ich keine Zeit.' }
    ]
  },

  /* ---------------------------------------------------------------- l1 ---- */
  /* Theme: living. The room is described with two pieces of furniture, an
     adjective after ein and the fixed frame es gibt. Every position word here
     is a fixed place, so Dativ is not a rule to recall but the default the
     learner sees three times before it is named. */
  'a1-u4-l1': {
    items: [
      ['der Balkon', 'die Balkone', 'الشرفة', 'Wir trinken Kaffee auf dem Balkon.', 'Wir trinken Kaffee auf der Balkon.', 'der Balkon مذكر، والموضع الثابت Dativ: auf dem Balkon.', 'kasus', 'Balkon'],
      ['das Erdgeschoss', 'die Erdgeschosse', 'الطابق الأرضي', 'Ich wohne im Erdgeschoss.', 'Ich wohne in Erdgeschoss.', 'im = in + dem؛ الأداة لا تُحذف مع الطابق.', 'präposition', 'Erdgeschoss'],
      ['der Aufzug', 'die Aufzüge', 'المصعد', 'Der Aufzug ist kaputt.', 'Der Aufzug ist gebrochen.', 'kaputt للآلة العاطلة؛ gebrochen للعظم المكسور، والعربية تقول «مكسور» للاثنين.', 'falser-freund', 'Aufzug'],
      ['die Miete', 'die Mieten', 'الإيجار', 'Die Miete ist hoch.', 'Die Miete ist teuer.', 'الإيجار يُوصف بـ hoch؛ teuer للسلعة التي تُشترى، والعربية تستعمل «غالي» للحالتين.', 'falser-freund', 'Miete'],
      ['die Nebenkosten', '—', 'التكاليف الإضافية', 'Die Nebenkosten zahlen wir extra.', 'Die Nebenkosten zahlen wir mit Geld extra.', 'الكلمة جمع بنفسها وتكفي؛ إضافة «مال» ترجمة زائدة من العربية.', 'lexik-kollokation', 'Nebenkosten'],
      ['das Wohnzimmer', 'die Wohnzimmer', 'غرفة الجلوس', 'Das Wohnzimmer ist groß.', 'Das Wohnzimmer ist große.', 'بعد ist تبقى الصفة بلا نهاية؛ النهاية تأتي أمام الاسم وحده.', 'deklination', 'Wohnzimmer'],
      ['das Schlafzimmer', 'die Schlafzimmer', 'غرفة النوم', 'Im Schlafzimmer steht ein Bett.', 'In Schlafzimmer steht ein Bett.', 'das Schlafzimmer محايد: im = in + dem.', 'präposition', 'Schlafzimmer'],
      ['das Badezimmer', 'die Badezimmer', 'الحمّام', 'Das Badezimmer ist klein, aber hell.', 'Das Badezimmer ist klein, aber helle.', 'الصفة بعد aber تعود إلى ist فتبقى بلا نهاية.', 'deklination', 'Badezimmer'],
      ['der Schreibtisch', 'die Schreibtische', 'مكتب الكتابة', 'Auf dem Schreibtisch liegt ein Heft.', 'Auf der Schreibtisch liegt ein Heft.', 'المركّب يأخذ جنس كلمته الأخيرة: der Tisch ← der Schreibtisch، وفي Dativ dem.', 'genus', 'Schreibtisch'],
      ['das Regal', 'die Regale', 'الرف', 'Im Regal stehen viele Bücher.', 'In Regal stehen viele Bücher.', 'das Regal محايد: im Regal.', 'präposition', 'Regal'],
      ['der Teppich', 'die Teppiche', 'السجادة', 'Der Teppich liegt vor dem Sofa.', 'Der Teppich liegt vor das Sofa.', 'الموضع الثابت Dativ: vor dem Sofa.', 'kasus', 'Teppich'],
      ['die Heizung', 'die Heizungen', 'التدفئة', 'Die Heizung funktioniert nicht.', 'Die Heizung arbeitet nicht.', 'الآلة التي تعمل funktioniert؛ arbeiten للإنسان، والعربية تقول «لا تعمل» للاثنين.', 'falser-freund', 'Heizung'],
      ['die Steckdose', 'die Steckdosen', 'المقبس', 'Die Steckdose ist hinter dem Regal.', 'Die Steckdose ist hinter das Regal.', 'الموضع الثابت Dativ: hinter dem Regal.', 'kasus', 'Steckdose'],
      ['der Vorhang', 'die Vorhänge', 'الستارة', 'Der Vorhang hängt am Fenster.', 'Der Vorhang hängt an das Fenster.', 'الموضع الثابت am Fenster؛ an das Fenster للحركة.', 'kasus', 'Vorhang'],
      ['die Treppe', 'die Treppen', 'السلّم', 'Die Treppe ist steil.', 'Die Treppe ist hoch.', 'للدرج الذي يصعب صعوده steil؛ hoch للارتفاع، والعربية تقول «عالي».', 'falser-freund', 'Treppe'],
      ['die Adresse', 'die Adressen', 'العنوان', 'Wie ist deine Adresse?', 'Wie ist dein Adresse?', 'die Adresse مؤنث: deine، والعربية لا تُظهر المؤنث في «عنوانك».', 'genus', 'Adresse'],
      ['der Quadratmeter', 'die Quadratmeter', 'المتر المربع', 'Die Wohnung hat 60 Quadratmeter.', 'Die Wohnung hat 60 Quadratmetern.', 'بعد العدد تبقى الوحدة بلا نون: 60 Quadratmeter.', 'deklination', 'Quadratmeter'],
      ['es gibt', '—', 'يوجد', 'Es gibt einen Balkon.', 'Es gibt ein Balkon.', 'فاعل es gibt الحقيقي يأتي في النصب: einen Balkon.', 'kasus', 'gibt'],
      ['die Möbel', '—', 'الأثاث', 'Die Möbel sind neu.', 'Die Möbel ist neu.', 'die Möbel جمع في ألمانية اليوم، والفعل يكون جمعًا.', 'konjugation', 'Möbel'],
      ['gemütlich', 'gemütlicher · am gemütlichsten', 'مريح الجو', 'Das Wohnzimmer ist gemütlich.', 'Das Wohnzimmer ist bequem.', 'bequem للجسم والملابس، وgemütlich لجوّ المكان؛ العربية تستعمل «مريح» للاثنين.', 'falser-freund', 'gemütlich'],
      ['ruhig', 'ruhiger · am ruhigsten', 'هادئ', 'Die Straße ist ruhig.', 'Die Straße ist still.', 'ruhig للهدوء المسموع؛ still للصمت التام، و«شارع هادئ» = ruhig.', 'falser-freund', 'ruhig'],
      ['hell', 'heller · am hellsten', 'مضيء', 'Ein helles Zimmer ist teuer.', 'Ein hell Zimmer ist teuer.', 'بعد ein في المحايد تأخذ الصفة es: ein helles Zimmer.', 'deklination', 'helles'],
      ['dunkel', 'dunkler · am dunkelsten', 'معتم', 'Das Bad ist dunkel.', 'Das Bad ist dunkle.', 'بعد ist تبقى الصفة بلا نهاية: dunkel.', 'deklination', 'dunkel'],
      ['der Vermieter', 'die Vermieter', 'المالك المؤجّر', 'Der Vermieter kommt morgen.', 'Der Mieter kommt morgen.', 'der Vermieter يؤجّر وder Mieter يستأجر؛ العربية تستعمل «المالك» للحالتين فيلتبس الأمر.', 'falser-freund', 'Vermieter']
    ],
    tricks: [
      { trick: 'الصفة بعد ein تشير إلى الاسم القادم', wie: 'ein helles Zimmer · ein neues Regal · eine kleine Küche', warum: 'العربية تضع الصفة عارية («غرفة مضيئة»)، فأول ما يُنسى نهاية الصفة بعد ein؛ هذه النهاية تشير إلى جنس الاسم الذي سيأتي.', anchor: 'Ein helles Zimmer ist teuer.' },
      { trick: 'es gibt بوابة نصب', wie: 'Es gibt einen Balkon · Es gibt ein Regal · Es gibt keine Treppe', warum: '«يوجد» في العربية لا تُظهر إعرابًا؛ الألمانية تُظهره على المذكر: einen، فيُحفظ es gibt كبوابة نصب جاهزة.', anchor: 'Es gibt einen Balkon.' },
      { trick: 'الطابق له اسم لا رقم', wie: 'im Erdgeschoss · im ersten Stock · im dritten Stock', warum: 'العربية تعدّ الطوابق من الصفر تقريبًا، والألمانية لها Erdgeschoss ثم أول طابق؛ والاسم الأول أكثرها استعمالًا في العناوين.', anchor: 'Ich wohne im Erdgeschoss.' }
    ]
  },

  /* ---------------------------------------------------------------- l2 ---- */
  /* Theme: at the doctor. The pain frame is taught as a skeleton (Dativ person
     + tut/tun + body part + weh), because the Arabic learner builds it from
     "my head hurts" and puts the body part first. */
  'a1-u4-l2': {
    items: [
      ['der Arzt', 'die Ärzte', 'الطبيب', 'Ich gehe zum Arzt.', 'Ich gehe zu der Arzt.', 'zu + dem = zum؛ الفصل «zu der» غير مستعمل هنا.', 'präposition', 'Arzt'],
      ['die Ärztin', 'die Ärztinnen', 'الطبيبة', 'Die Ärztin hat heute Sprechstunde.', 'Die Ärztin hat heute Termin.', 'Sprechstunde هي ساعة استقبال الطبيب؛ Termin موعد يحصل عليه المريض عنده.', 'falser-freund', 'Ärztin'],
      ['die Praxis', 'die Praxen', 'العيادة', 'Die Praxis ist am Marktplatz.', 'Die Praxis ist auf dem Marktplatz.', 'العيادة تقع في ساحة: am Marktplatz؛ auf للمكان المفتوح.', 'präposition', 'Praxis'],
      ['die Sprechstunde', 'die Sprechstunden', 'ساعة الاستقبال', 'Die Sprechstunde beginnt um neun.', 'Die Sprechstunde beginnt in neun.', 'للساعة المحددة um؛ in للمدة أو المستقبل.', 'präposition', 'Sprechstunde'],
      ['der Schmerz', 'die Schmerzen', 'الألم', 'Ich habe starke Schmerzen.', 'Ich habe große Schmerzen.', 'الألم القوي stark؛ groß للحجم، والعربية تقول «ألم كبير».', 'falser-freund', 'Schmerzen'],
      ['das Fieber', '—', 'الحمّى', 'Ich habe Fieber.', 'Ich habe die Fieber.', 'das Fieber لا يأخذ أداة في هذا التعبير الثابت، والعربية تعرّفه دائمًا.', 'register', 'Fieber'],
      ['der Husten', '—', 'الكحّة', 'Ich habe Husten und Schnupfen.', 'Ich habe husten.', 'الاسم der Husten بحرف كبير؛ husten فعل، والخلط يقلب الجملة.', 'orthographie', 'Husten'],
      ['die Erkältung', 'die Erkältungen', 'الزكام', 'Ich habe eine Erkältung.', 'Ich habe ein Erkältung.', 'die Erkältung مؤنث: eine.', 'genus', 'Erkältung'],
      ['der Hals', 'die Hälse', 'الحلق · الرقبة', 'Mein Hals tut weh.', 'Mein Hals ist Schmerz.', 'الألم يُقال بـ tut weh؛ Schmerz اسم لا يصلح مع ist.', 'lexik-kollokation', 'Hals'],
      ['der Kopf', 'die Köpfe', 'الرأس', 'Mir tut der Kopf weh.', 'Ich habe Schmerz im Kopf.', 'التعبير الألماني يبدأ بصاحب الألم في Dativ ثم tut + العضو + weh، لا بـ haben.', 'lexik-kollokation', 'Kopf'],
      ['der Bauch', 'die Bäuche', 'البطن', 'Mir tut der Bauch weh.', 'Mein Bauch ist weh.', 'wehtun فعل منفصل: tut … weh، ولا تُستعمل weh وحدها.', 'konjugation', 'Bauch'],
      ['der Rücken', 'die Rücken', 'الظهر', 'Mir tut der Rücken weh.', 'Ich habe weh in dem Rücken.', 'الألم من tut weh مع صاحبه في Dativ، لا من haben وحرف جر.', 'lexik-kollokation', 'Rücken'],
      ['der Arm', 'die Arme', 'الذراع', 'Ich kann den Arm nicht bewegen.', 'Ich kann der Arm nicht bewegen.', 'المفعول المذكر في النصب: den Arm.', 'kasus', 'Arm'],
      ['das Bein', 'die Beine', 'الساق', 'Mir tun die Beine weh.', 'Mir tut die Beine weh.', 'الفاعل جمع فيكون الفعل tun لا tut.', 'konjugation', 'Beine'],
      ['die Nase', 'die Nasen', 'الأنف', 'Die Nase ist verstopft.', 'Die Nase ist geschlossen.', 'verstopft للأنف المسدود؛ geschlossen للباب المغلق.', 'falser-freund', 'Nase'],
      ['krank', 'kränker · am kränksten', 'مريض', 'Ich bin krank.', 'Ich habe krank.', 'krank صفة مع sein؛ haben للملكية.', 'lexik-kollokation', 'krank'],
      ['gesund', 'gesünder · am gesündesten', 'معافى', 'Bald bin ich wieder gesund.', 'Bald habe ich wieder gesund.', 'الصفة مع sein لا haben.', 'lexik-kollokation', 'gesund'],
      ['wehtun', 'tut weh · tat weh · hat wehgetan', 'يؤلم', 'Der Kopf tut weh.', 'Der Kopf tut Schmerz.', 'wehtun مركّب من tut + weh، ولا يُستبدل weh باسم.', 'konjugation', 'weh'],
      ['die Tablette', 'die Tabletten', 'القرص الدوائي', 'Nehmen Sie zwei Tabletten täglich.', 'Essen Sie zwei Tabletten täglich.', 'الدواء يُؤخذ nehmen؛ essen للطعام، والعربية تقول «يأخذ» للدواء و«يأكل» للطعام.', 'falser-freund', 'Tabletten'],
      ['das Rezept', 'die Rezepte', 'الوصفة الطبية', 'Der Arzt schreibt ein Rezept.', 'Der Arzt schreibt ein Rezept für Medikamente kaufen.', 'das Rezept تحمل الأمر بالدواء وحدها؛ جملة الغرض بعدها زائدة من العربية.', 'lexik-kollokation', 'Rezept'],
      ['die Medizin', 'die Medizinen', 'الدواء', 'Die Medizin hilft schnell.', 'Die Medizin arbeitet schnell.', 'الدواء hilft؛ arbeiten للإنسان.', 'falser-freund', 'Medizin'],
      ['sich ausruhen', 'ruht sich aus · ruhte sich aus · hat sich ausgeruht', 'يستريح', 'Du musst dich ausruhen.', 'Du musst ausruhen dich.', 'بعد müssen يبقى المصدر في الآخر، والضمير الانعكاسي يلتصق به فلا يتقدّم.', 'wortstellung', 'ausruhen'],
      ['das Krankenhaus', 'die Krankenhäuser', 'المستشفى', 'Er liegt im Krankenhaus.', 'Er liegt in Krankenhaus.', 'das Krankenhaus محايد: im = in + dem.', 'präposition', 'Krankenhaus'],
      ['die Grippe', 'die Grippen', 'الإنفلونزا', 'Sie hat die Grippe.', 'Sie hat Grippe mit Kälte.', 'die Grippe وحدها تكفي؛ «زكام بارد» ترجمة حرفية.', 'falser-freund', 'Grippe']
    ],
    tricks: [
      { trick: 'الألم يبدأ بصاحبه لا بالعضو', wie: 'Mir tut der Kopf weh · Mir tut der Bauch weh · Mir tut der Rücken weh', warum: 'العربية تبدأ بالعضو («رأسي يؤلمني»)؛ الألم في الألمانية يبدأ بمن يشعر به في Dativ، ثم العضو فاعلًا، ثم weh في الآخر.', anchor: 'Mir tut der Kopf weh.' },
      { trick: 'الجمع يحوّل tut إلى tun', wie: 'Mir tut der Kopf weh · Mir tun die Beine weh', warum: 'الفعل يتبع العضو لا الشخص: عضو مفرد ← tut، أعضاء جمع ← tun. العربية لا تُظهر هذا لأن الفعل واحد فيها.', anchor: 'Mir tun die Beine weh.' },
      { trick: 'krank وgesund صفتان مع sein', wie: 'Ich bin krank · Ich bin wieder gesund', warum: 'العربية تقول «عندي مرض»، فتُنتج Ich habe krank؛ الصفة الألمانية تحتاج sein، وhaben لا تعمل مع حالة الجسد.', anchor: 'Ich bin krank.' }
    ]
  },

  /* ---------------------------------------------------------------- l3 ---- */
  /* Theme: directions. The form is the Sie-imperative (verb first, Sie after),
     and Dativ after bis zu / gegenüber, because those are the two places an
     Arabic learner's sentence breaks while giving a route. */
  'a1-u4-l3': {
    items: [
      ['geradeaus', '—', 'إلى الأمام مباشرة', 'Gehen Sie geradeaus.', 'Gehen Sie gerade.', 'الطريق المستقيم geradeaus في كلمة واحدة؛ gerade تعني «حالًا» أو «تحديدًا».', 'falser-freund', 'geradeaus'],
      ['links', '—', 'يسارًا', 'Dann links.', 'Dann die linke Seite.', 'الاتجاه ظرف: links؛ linke Seite هي الجهة اليسرى نفسها لا الاتجاه.', 'lexik-kollokation', 'links'],
      ['rechts', '—', 'يمينًا', 'Biegen Sie rechts ab.', 'Biegen Sie nach rechts Seite ab.', 'rechts وحدها ظرف اتجاه ولا تحتاج Seite.', 'lexik-kollokation', 'rechts'],
      ['abbiegen', 'biegt ab · bog ab · ist abgebogen', 'ينعطف', 'Sie müssen an der Ampel abbiegen.', 'Sie müssen an der Ampel biegen.', 'abbiegen فعل منفصل؛ حذف البادئة يترك biegen «يثني» بدل «ينعطف».', 'konjugation', 'abbiegen'],
      ['die Straße', 'die Straßen', 'الشارع', 'Die Straße ist lang.', 'Die Straße ist lange.', 'بعد ist تبقى الصفة بلا نهاية.', 'deklination', 'Straße'],
      ['die Ampel', 'die Ampeln', 'إشارة المرور', 'Bis zur Ampel, dann rechts.', 'Bis die Ampel, dann rechts.', 'bis تحتاج حرف جر معها: bis zur Ampel؛ «حتى» في العربية تتصل بالاسم مباشرة.', 'präposition', 'Ampel'],
      ['die Kreuzung', 'die Kreuzungen', 'التقاطع', 'An der Kreuzung gehen Sie links.', 'In der Kreuzung gehen Sie links.', 'الموضع عند التقاطع an؛ in تعني داخله.', 'präposition', 'Kreuzung'],
      ['die Ecke', 'die Ecken', 'الناصية', 'Die Bank ist an der Ecke.', 'Die Bank ist in der Ecke.', 'ناصية الشارع an der Ecke؛ in der Ecke داخل زاوية غرفة.', 'falser-freund', 'Ecke'],
      ['gegenüber', '—', 'مقابل', 'Die Post ist dem Kino gegenüber.', 'Die Post ist gegenüber von das Kino.', 'gegenüber يجرّ Dativ ويمكن أن يأتي بعد الاسم: dem Kino gegenüber.', 'kasus', 'gegenüber'],
      ['bis', '—', 'حتى', 'Gehen Sie bis zum Platz.', 'Gehen Sie bis der Platz.', 'bis + zu + Dativ: bis zum Platz.', 'präposition', 'bis'],
      ['die Haltestelle', 'die Haltestellen', 'الموقف', 'Die Haltestelle ist vorne.', 'Die Haltestelle ist vorne Platz.', 'الموقف اسم واحد ولا يحتاج كلمة «مكان» بعده.', 'lexik-kollokation', 'Haltestelle'],
      ['die Brücke', 'die Brücken', 'الجسر', 'Über die Brücke und dann rechts.', 'Auf der Brücke und dann rechts.', 'العبور über + النصب؛ auf للوقوف فوقها.', 'präposition', 'Brücke'],
      ['der Weg', 'die Wege', 'الطريق · المسار', 'Der Weg ist kurz.', 'Der Weg ist klein.', 'الطريق القصير kurz؛ klein للحجم الصغير.', 'falser-freund', 'Weg'],
      ['zu Fuß', '—', 'على القدمين', 'Ich gehe zu Fuß.', 'Ich gehe mit Fuß.', 'التعبير الثابت zu Fuß لا يتغيّر ولا يقبل mit.', 'lexik-kollokation', 'Fuß'],
      ['die Mitte', 'die Mitten', 'الوسط', 'In der Mitte ist ein Brunnen.', 'In die Mitte ist ein Brunnen.', 'الموضع الثابت Dativ: in der Mitte.', 'kasus', 'Mitte'],
      ['sich verlaufen', 'verläuft sich · verlief sich · hat sich verlaufen', 'يضلّ الطريق', 'Ich habe mich verlaufen.', 'Ich habe verlaufen.', 'verlaufen تحتاج الضمير الانعكاسي mich في هذا المعنى.', 'kasus', 'verlaufen'],
      ['weit', 'weiter · am weitesten', 'بعيد', 'Ist es weit von hier?', 'Ist es fern von hier?', 'في الكلام اليومي weit للمسافة؛ fern تبقى للنصوص الرسمية والشعر.', 'register', 'weit'],
      ['nah', 'näher · am nächsten', 'قريب', 'Der Bahnhof ist ganz nah.', 'Der Bahnhof ist ganz kurz.', 'nah للمسافة؛ kurz للزمن والطول.', 'falser-freund', 'nah'],
      ['der Eingang', 'die Eingänge', 'المدخل', 'Der Eingang ist rechts.', 'Der Eingang ist rechte Seite.', 'الموضع يُقال rechts بلا Seite.', 'lexik-kollokation', 'Eingang'],
      ['der Ausgang', 'die Ausgänge', 'المخرج', 'Nehmen Sie den Ausgang links.', 'Nehmen Sie der Ausgang links.', 'المفعول المذكر: den Ausgang.', 'kasus', 'Ausgang'],
      ['erste', 'erste · zweite · dritte', 'الأول', 'Nehmen Sie die erste Straße.', 'Nehmen Sie die ein Straße.', 'الترتيب يُبنى بعد الأداة: die erste Straße؛ ein ليست ترتيبًا.', 'deklination', 'erste'],
      ['der Meter', 'die Meter', 'المتر', 'Es sind noch 200 Meter.', 'Es sind noch 200 Metern.', 'بعد العدد تبقى الوحدة بلا نون.', 'deklination', 'Meter'],
      ['der Verkehr', '—', 'المرور', 'Der Verkehr ist stark.', 'Der Verkehr ist groß.', 'المرور الكثيف stark؛ groß للحجم.', 'falser-freund', 'Verkehr'],
      ['die Autobahn', 'die Autobahnen', 'الطريق السريع', 'Wir fahren auf die Autobahn.', 'Die Autobahn fährt schnell.', 'الطريق لا يتحرك بنفسه؛ نحن ندخله بـ auf + النصب.', 'lexik-kollokation', 'Autobahn']
    ],
    tricks: [
      { trick: 'الأمر للغريب يأخذ Sie بعد الفعل', wie: 'Gehen Sie geradeaus · Biegen Sie links ab · Nehmen Sie die erste Straße', warum: 'العربية تُخاطب الغريب بصيغة الجماعة أو بالمصدر؛ الألمانية تُبقي Sie، والفعل يبدأ الجملة في الأمر فتُقرأ كتعليمة لا كخبر.', anchor: 'Gehen Sie geradeaus.' },
      { trick: 'bis يحتاج zu في الطريق', wie: 'bis zum Bahnhof · bis zur Ampel · bis zur Ecke', warum: '«حتى» في العربية تلتصق بالاسم مباشرة، فتُنتج Bis die Ampel؛ الألمانية تُمرّر معنى الانتهاء عبر zu + Dativ.', anchor: 'Bis zur Ampel, dann rechts.' },
      { trick: 'gegenüber يجوز بعد الاسم', wie: 'Die Post ist dem Kino gegenüber', warum: 'العربية تضع «مقابل» قبل الاسم دائمًا؛ الألمانية تقبل الاثنين، والصيغة الشائعة في الشرح تضع gegenüber بعد الاسم فيُسمع المعنى من آخره.', anchor: 'Die Post ist dem Kino gegenüber.' }
    ]
  },

  /* ---------------------------------------------------------------- l4 ---- */
  /* Theme: a short message. The register is the grammar here: the greeting and
     the closing must agree with du or Sie, and getting that wrong is the
     error that costs most in A1 Schreiben. */
  'a1-u4-l4': {
    items: [
      ['die Nachricht', 'die Nachrichten', 'الرسالة', 'Ich schreibe eine Nachricht.', 'Ich schreibe ein Nachricht.', 'die Nachricht مؤنث: eine.', 'genus', 'Nachricht'],
      ['die Anrede', 'die Anreden', 'التحية الافتتاحية', 'Die Anrede steht am Anfang.', 'Die Anrede steht im Ende.', '«في النهاية» am Ende لا im Ende.', 'präposition', 'Anrede'],
      ['der Gruß', 'die Grüße', 'التحية الختامية', 'Viele Grüße aus Sousse.', 'Vielen Grüße aus Sousse.', 'الختام الثابت Viele Grüße بلا نون.', 'deklination', 'Grüße'],
      ['Liebe Anna,', '—', 'عزيزتي آنا،', 'Liebe Anna, wie geht es dir?', 'Sehr geehrte Anna, wie geht es dir?', 'الصديقة تُنادى بـ Liebe؛ Sehr geehrte للرسمي وحده.', 'register', 'Liebe'],
      ['Sehr geehrte Frau Weber,', '—', 'حضرة السيدة فيبر،', 'Sehr geehrte Frau Weber, ich schreibe Ihnen.', 'Liebe Frau Weber, ich schreibe Ihnen.', 'المقام الرسمي يأخذ Sehr geehrte، ولا يتحوّل إلى Liebe إلا بعلاقة شخصية.', 'register', 'geehrte'],
      ['der Betreff', 'die Betreffe', 'موضوع الرسالة', 'Der Betreff steht oben.', 'Der Titel steht oben.', 'Betreff لسطر الموضوع؛ Titel لعنوان كتاب أو فيلم.', 'falser-freund', 'Betreff'],
      ['die Unterschrift', 'die Unterschriften', 'التوقيع', 'Der Brief braucht eine Unterschrift.', 'Der Brief braucht ein Unterschrift.', 'die Unterschrift مؤنث: eine.', 'genus', 'Unterschrift'],
      ['antworten', 'antwortet · antwortete · hat geantwortet', 'يجيب', 'Ich antworte dir morgen.', 'Ich antworte dich morgen.', 'antworten تطلب Dativ: dir.', 'kasus', 'antworte'],
      ['warten auf', 'wartet auf · wartete auf · hat gewartet', 'ينتظر', 'Ich warte auf deine Antwort.', 'Ich warte für deine Antwort.', 'warten على شيء بـ auf؛ für للسبب، فلا تُنقل «على» حرفيًا.', 'präposition', 'warte'],
      ['hoffen', 'hofft · hoffte · hat gehofft', 'يأمل', 'Ich hoffe, du kommst.', 'Ich hoffe dass du kommst ohne Komma.', 'الجملة بعد hoffe تُفصل بفاصلة، والفعل يبقى في موضعه.', 'wortstellung', 'hoffe'],
      ['zum Glück', '—', 'لحسن الحظ', 'Zum Glück ist es nicht weit.', 'Zu das Glück ist es nicht weit.', 'التعبير الثابت zum Glück = zu + dem.', 'präposition', 'Glück'],
      ['schade', '—', 'يا للأسف', 'Schade, dass du nicht kommst.', 'Es ist schade für du nicht kommst.', 'schade تعبير ثابت يتبعه dass، ولا يحتاج für.', 'lexik-kollokation', 'schade'],
      ['hoffentlich', '—', 'كما آمل', 'Hoffentlich geht es dir besser.', 'Ich hoffe hoffentlich geht es dir besser.', 'hoffentlich تحمل الأمل وحدها؛ جمعها مع hoffe تكرار.', 'register', 'hoffentlich'],
      ['bis bald', '—', 'إلى لقاء قريب', 'Bis bald und viele Grüße.', 'Bis später bald.', 'التعبير إما bis bald أو bis später، ولا يُدمجان.', 'lexik-kollokation', 'bald'],
      ['alles Gute', '—', 'كل التمنيات الطيبة', 'Alles Gute zum Geburtstag!', 'Alle gute zum Geburtstag!', 'التعبير الثابت alles Gute بنهاية e.', 'deklination', 'Gute'],
      ['Gute Besserung', '—', 'شفاءً عاجلًا', 'Gute Besserung, Anna!', 'Guten Besserung, Anna!', 'die Besserung مؤنث داخليًا فيأتي الوصف Gute بلا نون.', 'deklination', 'Gute'],
      ['Herzlichen Glückwunsch', '—', 'تهانينا القلبية', 'Herzlichen Glückwunsch zum Examen!', 'Herzliche Glückwunsch zum Examen!', 'التعبير الثابت في النصب: Herzlichen Glückwunsch.', 'kasus', 'Herzlichen'],
      ['die Einladung', 'die Einladungen', 'الدعوة', 'Danke für die Einladung.', 'Danke für den Einladung.', 'die Einladung مؤنث: die، وفي النصب تبقى die.', 'kasus', 'Einladung'],
      ['danken', 'dankt · dankte · hat gedankt', 'يشكر', 'Ich danke dir für die Hilfe.', 'Ich danke dich für die Hilfe.', 'danken تطلب Dativ: dir؛ «شكر» في العربية تنصب.', 'kasus', 'danke'],
      ['die Bitte', 'die Bitten', 'الطلب · الرجاء', 'Eine Bitte: Ruf mich an.', 'Ein Bitte: Ruf mich an.', 'die Bitte مؤنث: eine.', 'genus', 'Bitte'],
      ['der Brief', 'die Briefe', 'الرسالة الورقية', 'Ich schreibe einen Brief.', 'Ich schreibe ein Brief.', 'der Brief مذكر، وفي النصب einen.', 'kasus', 'Brief'],
      ['die E-Mail', 'die E-Mails', 'البريد الإلكتروني', 'Ich schreibe eine E-Mail.', 'Ich schreibe ein E-Mail.', 'die E-Mail مؤنث ولو كانت دخيلة.', 'genus', 'E-Mail'],
      ['kurz', 'kürzer · am kürzesten', 'قصير', 'Schreib mir kurz.', 'Schreib mir klein.', 'kurz للطول والزمن؛ klein للحجم.', 'falser-freund', 'kurz'],
      ['die Zeile', 'die Zeilen', 'السطر', 'Schreibe drei Zeilen.', 'Schreibe drei Linien.', 'die Zeile لسطر الكتابة؛ die Linie لخط الرسم.', 'falser-freund', 'Zeilen']
    ],
    tricks: [
      { trick: 'التحية تتبع القرب', wie: 'Liebe Anna · Sehr geehrte Frau Weber', warum: 'العربية تستعمل «عزيزي» في الرسمي أيضًا؛ الألمانية تفصل: Liebe للأصدقاء وSehr geehrte للجهات، والخطأ في هذا يكلّف في ورقة الكتابة.', anchor: 'Liebe Anna, wie geht es dir?' },
      { trick: 'الضمير يتبع التحية لا العكس', wie: 'Liebe Anna, kannst du … · Sehr geehrte Frau Weber, können Sie …', warum: 'من يكتب du يستمر بـ du في الطلب والختام، ومن يكتب Sie يستمر بـ Sie؛ التنقّل بينهما داخل رسالة واحدة خطأ مقام لا خطأ نحوي.', anchor: 'Kannst du morgen kommen?' },
      { trick: 'للختام درجتان لا واحدة', wie: 'Viele Grüße · Mit freundlichen Grüßen', warum: 'العربية تختم بـ «مع تحياتي» في كل المقامات؛ الألمانية تحتفظ بالصيغة الرسمية كاملة لمن لا تعرفه، والأخف للأصدقاء.', anchor: 'Viele Grüße, Sara.' }
    ]
  },

  /* ---------------------------------------------------------------- l5 ---- */
  /* Theme: repairing four A1 errors, then the tools for repairing them. The
     lesson is not a summary: each item is a pair (wrong form / mechanism), so
     the learner leaves with a checklist rather than with a feeling. */
  'a1-u4-l5': {
    items: [
      ['der Fehler', 'die Fehler', 'الخطأ', 'Dieser Fehler kommt oft.', 'Dieser Fehler kommt viel.', 'الخطأ المتكرر kommt oft؛ viel للكمية.', 'falser-freund', 'Fehler'],
      ['den', '—', 'أداة النصب للمذكر', 'Ich sehe den Mann.', 'Ich sehe der Mann.', 'المفعول المذكر في النصب den؛ der للفاعل وحده.', 'kasus', 'den'],
      ['alt', 'älter · am ältesten', 'عمر', 'Ich bin zwanzig Jahre alt.', 'Ich habe zwanzig Jahre alt.', 'العمر مع sein؛ وفي الكلام السريع يكفي Ich bin zwanzig.', 'lexik-kollokation', 'alt'],
      ['dann', '—', 'ثم', 'Dann lerne ich.', 'Dann ich lerne.', 'بعد dann يبقى الفعل في الموضع الثاني وينتقل الفاعل بعده.', 'wortstellung', 'dann'],
      ['weil', '—', 'لأنّ', 'Ich bleibe zu Hause, weil ich krank bin.', 'Ich bleibe zu Hause, weil ich bin krank.', 'weil ترسل الفعل المصرّف إلى آخر الجملة الفرعية.', 'wortstellung', 'weil'],
      ['denn', '—', 'لأنّ (والفعل ثانيًا)', 'Ich bleibe zu Hause, denn ich bin krank.', 'Ich bleibe zu Hause, denn ich krank bin.', 'denn لا تغيّر الترتيب: الفعل يبقى ثانيًا بعدها.', 'wortstellung', 'denn'],
      ['aber', '—', 'لكن', 'Ich bin müde, aber ich lerne.', 'Ich bin müde, aber lerne ich.', 'aber حرف ربط لا يزحزح الفعل؛ الجملة بعده خبرية عادية.', 'wortstellung', 'aber'],
      ['oder', '—', 'أو', 'Kommst du mit oder bleibst du hier?', 'Kommst du mit oder du bleibst hier?', 'في السؤال الثاني بعد oder يبقى ترتيب السؤال: الفعل أولًا.', 'wortstellung', 'oder'],
      ['wenn', '—', 'إذا · عندما', 'Wenn es regnet, bleibe ich zu Hause.', 'Wenn es regnet, ich bleibe zu Hause.', 'الشرط يبدأ بـ wenn والفعل في آخره، وبعد الفاصلة يبدأ الجواب بالفعل.', 'wortstellung', 'wenn'],
      ['dass', '—', 'أنّ', 'Ich glaube, dass du recht hast.', 'Ich glaube, dass du hast recht.', 'dass ترسل الفعل المصرّف إلى الآخر.', 'wortstellung', 'dass'],
      ['mit dem Bus', '—', 'بالحافلة', 'Ich fahre mit dem Bus.', 'Ich fahre mit der Bus.', 'der Bus مذكر، وفي Dativ بعد mit: dem Bus.', 'kasus', 'Bus'],
      ['der Satz', 'die Sätze', 'الجملة', 'Der Satz ist richtig.', 'Die Satz ist richtig.', 'der Satz مذكر: der.', 'genus', 'Satz'],
      ['besser', 'gut · besser · am besten', 'أفضل', 'Heute geht es mir besser.', 'Heute geht es mir mehr gut.', 'المقارنة تُبنى على الصفة نفسها؛ mehr لا تتقدّم على الصفة.', 'deklination', 'besser'],
      ['am besten', '—', 'الأفضل', 'Am besten lernst du morgens.', 'Am besten du lernst morgens.', 'بعد am besten يبقى الفعل ثانيًا.', 'wortstellung', 'besten'],
      ['mehr', 'viel · mehr · am meisten', 'أكثر', 'Ich brauche mehr Zeit.', 'Ich brauche mehr Zeiten.', 'mehr لا تجمع الاسم بعدها: mehr Zeit.', 'deklination', 'mehr'],
      ['richtig', '—', 'صحيح', 'Die Antwort ist richtig.', 'Die Antwort ist wahr.', 'richtig للجواب الصحيح؛ wahr للحقيقة الصادقة.', 'falser-freund', 'richtig'],
      ['falsch', '—', 'خطأ', 'Der Satz ist falsch.', 'Der Satz ist falsche.', 'بعد ist تبقى الصفة بلا نهاية.', 'deklination', 'falsch'],
      ['korrigieren', 'korrigiert · korrigierte · hat korrigiert', 'يصحّح', 'Ich korrigiere meinen Satz.', 'Ich korrigiere mein Satz.', 'المفعول المذكر في النصب: meinen Satz.', 'kasus', 'korrigiere'],
      ['die Regel', 'die Regeln', 'القاعدة', 'Diese Regel gilt immer.', 'Diese Regel arbeitet immer.', 'القاعدة «تسري» gilt؛ arbeiten للإنسان.', 'falser-freund', 'Regel'],
      ['die Ausnahme', 'die Ausnahmen', 'الاستثناء', 'Das ist eine Ausnahme.', 'Das ist ein Ausnahme.', 'die Ausnahme مؤنث: eine.', 'genus', 'Ausnahme'],
      ['wiederholen', 'wiederholt · wiederholte · hat wiederholt', 'يكرّر', 'Ich wiederhole die Regel.', 'Ich wiederhole mich die Regel.', 'wiederholen مع مفعول لا تحتاج mich؛ mich تجعلها «أعيد كلامي».', 'kasus', 'wiederhole'],
      ['üben', 'übt · übte · hat geübt', 'يتدرّب', 'Ich übe jeden Tag.', 'Ich übe jeden Tag mich.', 'üben لا تحتاج ضميرًا؛ «أتدرّب» في العربية فعل لازم.', 'kasus', 'übe'],
      ['das Beispiel', 'die Beispiele', 'المثال', 'Lies das Beispiel zuerst.', 'Lies der Beispiel zuerst.', 'das Beispiel محايد، وفي النصب يبقى das.', 'kasus', 'Beispiel'],
      ['sich merken', 'merkt sich · merkte sich · hat sich gemerkt', 'يحفظ في الذهن', 'Ich merke mir die Regel.', 'Ich merke die Regel mich.', 'الضمير هنا في Dativ (mir) ويأتي بعد الفعل مباشرة.', 'kasus', 'merke']
    ],
    tricks: [
      { trick: 'بعد weil وdass يسافر الفعل إلى الآخر', wie: 'weil ich krank bin · dass du recht hast', warum: 'العربية تبدأ الجملة الفرعية بالفعل أو بالاسم ولا تُظهر الفرق؛ الألمانية تعرف الجملة الفرعية بموضع فعلها الأخير، فالموضع هو العلامة.', anchor: 'Ich bleibe zu Hause, weil ich krank bin.' },
      { trick: 'denn لا تزحزح شيئًا', wie: 'denn ich bin krank · weil ich krank bin', warum: 'المعنى واحد والترتيب مختلف؛ من يحفظ weil بموضعها يستطيع أن يقرأ denn من موضع فعلها الثاني.', anchor: 'Ich bleibe zu Hause, denn ich bin krank.' },
      { trick: 'المقارنة تبدأ من الصفة', wie: 'gut · besser · am besten', warum: 'العربية تقول «أكثر جودة» فتنتج mehr gut؛ الألمانية تُبنى المقارنة من الصفة نفسها، وأشهرها تُحفظ ككلمة واحدة.', anchor: 'Heute geht es mir besser.' }
    ]
  },

  /* ---------------------------------------------------------------- l6 ---- */
  /* Theme: the shape of A1 and its strategy. The items are the words of the
     exam paper itself, and the three tricks are the three facts that change
     how the learner uses time in the room. */
  'a1-u4-l6': {
    items: [
      ['der Teil', 'die Teile', 'القسم', 'Jeder Teil hat seine eigene Zeit.', 'Jeder Teil hat seine eigenes Zeit.', 'der Teil مذكر: seine eigene Zeit.', 'deklination', 'Teil'],
      ['das Hören', '—', 'قسم الاستماع', 'Das Hören steht am Anfang.', 'Der Hören steht am Anfang.', 'das Hören محايد: das.', 'genus', 'Hören'],
      ['das Lesen', '—', 'قسم القراءة', 'Beim Lesen liest du zuerst die Aufgaben.', 'Im Lesen liest du zuerst die Aufgaben.', 'المهارة التي تُمارَس beim Lesen؛ im للداخل.', 'präposition', 'Lesen'],
      ['das Schreiben', '—', 'قسم الكتابة', 'Das Schreiben dauert 20 Minuten.', 'Das Schreiben hat 20 Minuten.', 'المدة تُقال dauern؛ haben للامتلاك.', 'lexik-kollokation', 'Schreiben'],
      ['das Sprechen', '—', 'قسم المحادثة', 'Im Sprechen stellst du dich vor.', 'Im Sprechen du stellst dich vor.', 'بعد الظرف يبقى الفعل ثانيًا.', 'wortstellung', 'Sprechen'],
      ['die Anweisung', 'die Anweisungen', 'التعليمة', 'Lies die Anweisung genau.', 'Lies die Anweisung gut.', 'genau للتفصيل الدقيق؛ gut للحُسن.', 'falser-freund', 'Anweisung'],
      ['die Punktzahl', 'die Punktzahlen', 'عدد النقاط', 'Die Punktzahl steht am Ende.', 'Die Punktzahl steht im Ende.', '«في النهاية» am Ende لا im Ende.', 'präposition', 'Punktzahl'],
      ['bestehen', 'besteht · bestand · hat bestanden', 'ينجح', 'Ich bestehe die Prüfung.', 'Ich bestehe in der Prüfung.', 'bestehen تأخذ المفعول مباشرة بلا حرف جر.', 'präposition', 'bestehe'],
      ['die Note', 'die Noten', 'الدرجة', 'Meine Note ist zwei.', 'Mein Note ist zwei.', 'die Note مؤنث: meine.', 'genus', 'Note'],
      ['ankreuzen', 'kreuzt an · kreuzte an · hat angekreuzt', 'يؤشّر في المربع', 'Du musst die richtige Antwort ankreuzen.', 'Du musst die richtige Antwort kreuzt an.', 'بعد müssen يبقى المصدر، والفعل المنفصل يبقى موصولًا في الآخر.', 'konjugation', 'ankreuzen'],
      ['ergänzen', 'ergänzt · ergänzte · hat ergänzt', 'يُكمل الفراغ', 'Ergänze die Lücke.', 'Mache die Lücke.', '«أكمل الفراغ» ergänzen؛ machen عامة لا تحمل معنى الإكمال.', 'lexik-kollokation', 'Ergänze'],
      ['zuordnen', 'ordnet zu · ordnete zu · hat zugeordnet', 'يُطابق بين شيئين', 'Du musst die Sätze den Bildern zuordnen.', 'Du musst die Sätze den Bildern ordnen.', 'ordnen «يرتّب»؛ zuordnen «يطابق»، وحذف zu يغيّر معنى المهمة.', 'konjugation', 'zuordnen'],
      ['die Lücke', 'die Lücken', 'الفراغ', 'In jeder Lücke steht ein Wort.', 'In jeder Lücke steht ein Wörter.', 'بعد ein يبقى الاسم مفردًا: ein Wort.', 'deklination', 'Lücke'],
      ['der Text', 'die Texte', 'النص', 'Lies den Text zweimal.', 'Lies der Text zweimal.', 'المفعول المذكر في النصب: den Text.', 'kasus', 'Text'],
      ['das Formular', 'die Formulare', 'الاستمارة', 'Das Formular ist kurz.', 'Der Formular ist kurz.', 'das Formular محايد: das.', 'genus', 'Formular'],
      ['ausfüllen', 'füllt aus · füllte aus · hat ausgefüllt', 'يملأ الاستمارة', 'Du musst das Formular ausfüllen.', 'Du musst das Formular füllst aus.', 'بعد müssen يبقى المصدر في الآخر مع بادئته.', 'konjugation', 'ausfüllen'],
      ['die Zahl', 'die Zahlen', 'الرقم', 'Schreibe die Zahl in Worten.', 'Schreibe die Nummer in Worten.', 'die Zahl رقم حسابي؛ die Nummer معرّف أو ترتيب.', 'falser-freund', 'Zahl'],
      ['buchstabieren', 'buchstabiert · buchstabierte · hat buchstabiert', 'يتهجّى', 'Sie müssen Ihren Namen buchstabieren.', 'Sie müssen Ihren Namen schreiben Buchstaben.', 'التهجئة فعل واحد buchstabieren، و«كتابة الحروف» ترجمة حرفية.', 'lexik-kollokation', 'buchstabieren'],
      ['die Aussprache', '—', 'النطق', 'Achte auf die Aussprache.', 'Höre die Aussprache an.', '«انتبه إلى» achten auf + النصب؛ hören an ليست فعلًا قائمًا هنا.', 'präposition', 'Aussprache'],
      ['laut', 'lauter · am lautesten', 'بصوت عالٍ', 'Lies bitte laut.', 'Lies bitte hoch.', 'laut للصوت؛ hoch للارتفاع.', 'falser-freund', 'laut'],
      ['die Reihenfolge', 'die Reihenfolgen', 'الترتيب المتتالي', 'Die Reihenfolge ist wichtig.', 'Die Reihe ist wichtig.', 'Reihenfolge ترتيب متتالٍ؛ Reihe صفّ أو سلسلة.', 'falser-freund', 'Reihenfolge'],
      ['der Bleistift', 'die Bleistifte', 'قلم الرصاص', 'Nimm einen Bleistift mit.', 'Nimm ein Bleistift mit.', 'der Bleistift مذكر، وفي النصب einen.', 'kasus', 'Bleistift'],
      ['das Wörterbuch', 'die Wörterbücher', 'القاموس', 'Das Wörterbuch hilft beim Lesen.', 'Die Wörterbuch hilft beim Lesen.', 'das Wörterbuch محايد: das.', 'genus', 'Wörterbuch'],
      ['der Kurs', 'die Kurse', 'الدورة', 'Der Kurs endet im Juni.', 'Der Kurs endet in Juni.', 'الشهر يأخذ im: im Juni.', 'präposition', 'Kurs']
    ],
    tricks: [
      { trick: 'لا تعويض بين الأقسام', wie: 'Ein starkes Schreiben rettet das Hören nicht', warum: 'العربية تنقل خبرة «المجموع يجبر الكسر»؛ ورقة A1 تحتفظ لكل قسم بدرجته وقاعدة النجاح فيه، فيُوزَّع الجهد بدل المراهنة على قسم واحد.', anchor: 'Ein Teil rettet den anderen nicht.' },
      { trick: 'الاستماع يُسمع بعدد محدّد', wie: 'Hören hat seine eigene Zeit · nicht dreimal immer', warum: 'من يفترض إعادة غير موجودة يؤجّل الفهم إلى المرة الثانية، ثم لا يجدها؛ معرفة النظام قبل الدخول توفّر القسم كله.', anchor: 'Hören hat seine eigene Zeit.' },
      { trick: 'التهجئة تُمتحن داخل التحدث', wie: 'Buchstabieren gehört zum Sprechen', warum: 'كثيرون يعدّون التهجئة زينة؛ هي بند يُنطق فيه الاسم حرفًا حرفًا، وتُدرَّب مع الكلام لا بعده.', anchor: 'Buchstabieren gehört zum Sprechen.' }
    ]
  }
};

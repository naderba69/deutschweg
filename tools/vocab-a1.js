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
  }
};

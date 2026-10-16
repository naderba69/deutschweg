/* Deutschweg — P3.2 lexical layer, A1 unit 1 (part a): a1-u1-l1 … a1-u1-l3.
   Row shape documented in tools/vocab-a1.js. Every example carries the word it
   asks for; verbs pass the inflected form as the eighth field, so the blank is
   the form the learner actually meets, not the dictionary headword. */

module.exports = {

  'a1-u1-l1': {
    items: [
      ['wohnen', 'wohnt · wohnte', 'يسكن', 'Ich wohne in Sousse.', 'Ich wohnen in Sousse.', 'مع ich يسقط n: ich wohne.', 'konjugation', 'wohne'],
      ['lernen', 'lernt · lernte', 'يتعلّم', 'Du lernst Deutsch.', 'Du lernen Deutsch.', 'صيغة du تنتهي بـ -st: du lernst.', 'konjugation', 'lernst'],
      ['arbeiten', 'arbeitet · arbeitete', 'يعمل', 'Er arbeitet heute.', 'Er arbeite heute.', 'مع er تبقى -et: er arbeitet.', 'konjugation', 'arbeitet'],
      ['kommen', 'kommt · kam', 'يأتي', 'Wir kommen aus Tunesien.', 'Wir kommt aus Tunesien.', 'الجمع wir يأخذ صيغة المصدر: wir kommen.', 'konjugation'],
      ['gehen', 'geht · ging', 'يذهب', 'Ich gehe zur Arbeit.', 'Ich gehe in die Arbeit.', 'في عبارة الذهاب إلى العمل نقول zur Arbeit.', 'präposition', 'gehe'],
      ['spielen', 'spielt · spielte', 'يلعب', 'Mein Sohn spielt Fußball.', 'Mein Sohn spielen Fußball.', 'الفاعل المفرد يأخذ -t: spielt.', 'konjugation', 'spielt'],
      ['trinken', 'trinkt · trank', 'يشرب', 'Ich trinke Tee am Morgen.', 'Ich trinke Tee in Morgen.', 'أوقات اليوم تأخذ am: am Morgen.', 'präposition', 'trinke'],
      ['essen', 'isst · aß', 'يأكل', 'Er isst Brot mit Käse.', 'Er esst Brot mit Käse.', 'essen فعل قوي؛ مع er نقول isst، لا esst.', 'konjugation', 'isst'],
      ['machen', 'macht · machte', 'يفعل', 'Was machst du am Wochenende?', 'Was du machst am Wochenende?', 'في سؤال W يأتي الفعل بعد الأداة.', 'wortstellung', 'machst'],
      ['hören', 'hört · hörte', 'يسمع', 'Ich höre Musik im Bus.', 'Ich höre Musik in Bus.', 'in + dem تصير im: im Bus.', 'präposition', 'höre'],
      ['kaufen', 'kauft · kaufte', 'يشتري', 'Wir kaufen Brot und Milch.', 'Wir kaufen Brot und Milch wir.', 'الفاعل لا يُعاد ضميرًا في الآخر.', 'wortstellung'],
      ['suchen', 'sucht · suchte', 'يبحث عن', 'Ich suche meinen Schlüssel.', 'Ich suche für meinen Schlüssel.', 'suchen تأخذ مفعولًا مباشرًا بلا حرف جر.', 'präposition', 'suche'],
      ['brauchen', 'braucht · brauchte', 'يحتاج', 'Ich brauche einen Termin.', 'Ich brauche ein Termin.', 'Termin مذكر، وفي النصب einen.', 'kasus', 'brauche'],
      ['sprechen', 'spricht · sprach', 'يتكلّم', 'Du sprichst gut Deutsch.', 'Du sprechst gut Deutsch.', 'مع du يتغيّر الجذر: du sprichst.', 'konjugation', 'sprichst'],
      ['fahren', 'fährt · fuhr', 'يسافر', 'Er fährt nach Berlin.', 'Er fahrt nach Berlin.', 'مع er يصير a إلى ä: er fährt.', 'konjugation', 'fährt'],
      ['schlafen', 'schläft · schlief', 'ينام', 'Sie schläft acht Stunden.', 'Sie schlaft acht Stunden.', 'مع sie يصير a إلى ä: sie schläft.', 'konjugation', 'schläft'],
      ['der Kurs', 'die Kurse', 'الدورة', 'Der Kurs beginnt um neun.', 'Der Kurs beginnt in neun.', 'الساعة تأخذ um لا in.', 'präposition'],
      ['die Schule', 'die Schulen', 'المدرسة', 'Die Schule ist neben dem Park.', 'Die Schule ist neben der Park.', 'neben تأخذ داتيف: neben dem Park.', 'kasus'],
      ['die Arbeit', 'die Arbeiten', 'العمل', 'Nach der Arbeit gehe ich nach Hause.', 'Nach die Arbeit gehe ich nach Hause.', 'nach تأخذ داتيف: nach der Arbeit.', 'kasus'],
      ['das Büro', 'die Büros', 'المكتب', 'Mein Büro ist im dritten Stock.', 'Mein Büro ist in dritte Stock.', 'im dritten Stock: داتيف مع صفة.', 'deklination'],
      ['der Tag', 'die Tage', 'اليوم', 'Jeden Tag lerne ich Deutsch.', 'Jede Tag lerne ich Deutsch.', 'jeden Tag منصوب: -en.', 'deklination'],
      ['der Morgen', 'die Morgen', 'الصباح', 'Am Morgen trinke ich Kaffee.', 'In Morgen trinke ich Kaffee.', 'am = an + dem، وهي لأوقات اليوم.', 'präposition'],
      ['der Abend', 'die Abende', 'المساء', 'Am Abend sehe ich fern.', 'Am Abend ich sehe fern.', 'بعد الظرف يبقى الفعل في الموضع الثاني.', 'wortstellung'],
      ['das Wochenende', 'die Wochenenden', 'نهاية الأسبوع', 'Am Wochenende arbeite ich nicht.', 'Am Wochenende ich arbeite nicht.', 'الظرف الأول لا يُخرج الفعل من الموضع الثاني.', 'wortstellung'],
      ['die Sprache', 'die Sprachen', 'اللغة', 'Deutsch ist eine Sprache mit Regeln.', 'Deutsch ist ein Sprache mit Regeln.', 'Sprache مؤنث: eine.', 'genus'],
      ['der Freund', 'die Freunde', 'الصديق', 'Mein Freund wohnt in Tunis.', 'Mein Freund wohnen in Tunis.', 'المفرد الغائب يأخذ -t: wohnt.', 'konjugation'],
      ['die Freundin', 'die Freundinnen', 'الصديقة', 'Meine Freundin arbeitet im Krankenhaus.', 'Meine Freundin arbeitet in Krankenhaus.', 'in + dem = im.', 'präposition'],
      ['zusammen', '—', 'معًا', 'Wir lernen zusammen Deutsch.', 'Wir zusammen lernen Deutsch.', 'الفعل ثانٍ: wir lernen zusammen.', 'wortstellung']
    ],
    extraCheck: {
      right: 'Du lernst Deutsch.',
      bad: 'Du lernen Deutsch.',
      why: 'مع du تنتهي صيغة الفعل المنتظم بـ-st: lernst.',
      family: 'konjugation',
      prereq: 'cap.a1-u1-l1.s05'
    },
    tricks: [
      { trick: 'ich يأخذ -e', wie: 'wohnen → ich wohne · lernen → ich lerne · arbeiten → ich arbeite.', warum: 'نحذف -en من المصدر المنتظم ونضيف -e مع ich؛ الصيغة ليست جذرًا بلا نهاية.', anchor: 'Ich wohne in Sousse.' },
      { trick: 'wir يطابق المصدر كتابةً', wie: 'wir kommen · wir lernen · wir kaufen: صيغة wir تنتهي بـ-en مثل المصدر.', warum: 'التطابق في الشكل لا يعني غياب التصريف؛ الضمير wir يطلب نهاية -en.', anchor: 'Wir kommen aus Tunesien.' },
      { trick: 'بعض الأفعال القوية تغيّر الحركة', wie: 'fahren → er fährt · schlafen → sie schläft؛ وهذا امتداد خارج النمط المنتظم.', warum: 'لا تعمم a→ä على كل فعل؛ احفظ تغير الحركة مع الفعل القوي نفسه.', anchor: 'Er fährt nach Berlin.' }
    ]
  },

  'a1-u1-l2': {
    items: [
      ['kein', 'keine', 'لا (قبل الاسم)', 'Ich habe kein Geld.', 'Ich habe nicht Geld.', 'في هذا الاستعمال يُنفى الاسم النكرة بلا أداة بـkein، لا بـnicht.', 'lexik-kollokation'],
      ['kein Problem', '—', 'لا مشكلة', 'Das ist kein Problem.', 'Das ist nicht Problem.', 'الاسم المفرد بلا أداة يُنفى بـ kein.', 'lexik-kollokation', 'kein'],
      ['nichts', '—', 'لا شيء', 'Ich sage nichts.', 'Ich sage nicht etwas.', 'nichts تنفي الشيء كله بكلمة واحدة.', 'lexik-kollokation'],
      ['nie', '—', 'أبدًا', 'Ich trinke nie Alkohol.', 'Ich trinke nicht nie Alkohol.', 'في النفي المحايد بمعنى «أبدًا» تكفي nie ولا نضيف nicht.', 'lexik-kollokation'],
      ['niemand', '—', 'لا أحد', 'Niemand ist hier.', 'Nicht jemand ist hier.', 'في الجملة المحايدة يستعمل niemand وحده بمعنى «لا أحد».', 'lexik-kollokation'],
      ['noch nicht', '—', 'ليس بعد', 'Er ist noch nicht da.', 'Er ist nicht noch da.', 'الترتيب ثابت: noch vor nicht.', 'wortstellung', 'nicht'],
      ['das Geld', '—', 'النقود', 'Ich habe das Geld nicht.', 'Ich habe den Geld nicht.', 'Geld محايد: das Geld.', 'genus'],
      ['die Zeit', 'die Zeiten', 'الوقت', 'Die Zeit ist knapp.', 'Der Zeit ist knapp.', 'Zeit مؤنث: die.', 'genus'],
      ['die Lust', '—', 'الرغبة', 'Ich habe keine Lust.', 'Ich habe nicht Lust.', 'Lust اسم بلا أداة هنا، لذلك نقول keine Lust.', 'lexik-kollokation'],
      ['die Idee', 'die Ideen', 'الفكرة', 'Das ist keine gute Idee.', 'Das ist nicht gute Idee.', 'مع الاسم يكون النفي keine.', 'lexik-kollokation'],
      ['der Hunger', '—', 'الجوع', 'Ich habe keinen Hunger.', 'Ich habe nicht Hunger.', 'Hunger مذكر، وفي النصب keinen.', 'kasus'],
      ['der Durst', '—', 'العطش', 'Hast du keinen Durst?', 'Hast du nicht Durst?', 'kein يُصرَّف كالأداة: keinen Durst.', 'kasus'],
      ['müde', '—', 'متعب', 'Ich bin nicht müde.', 'Ich bin kein müde.', 'الصفة تُنفى بـ nicht لا بـ kein.', 'deklination'],
      ['teuer', '—', 'غالٍ', 'Das ist nicht teuer.', 'Das ist kein teuer.', 'teuer صفة خبرية هنا، لذلك نقول nicht teuer.', 'lexik-kollokation'],
      ['billig', '—', 'رخيص', 'Das Brot ist nicht billig.', 'Das Brot ist kein billig.', 'billig صفة خبرية هنا، لذلك نقول nicht billig.', 'lexik-kollokation'],
      ['kaputt', '—', 'معطّل', 'Das Auto ist nicht kaputt.', 'Das Auto ist kein kaputt.', 'kaputt صفة خبرية هنا: nicht kaputt.', 'lexik-kollokation'],
      ['fertig', '—', 'جاهز', 'Ich bin noch nicht fertig.', 'Ich bin kein fertig.', 'الحال تُنفى بـ nicht.', 'lexik-kollokation'],
      ['der Unterricht', '—', 'الدرس', 'Heute ist kein Unterricht.', 'Heute ist nicht Unterricht.', 'اسم بلا أداة يُنفى بـ kein.', 'lexik-kollokation'],
      ['der Tee', 'die Tees', 'الشاي', 'Ich trinke keinen Tee.', 'Ich trinke nicht Tee.', 'في النفي المحايد للعبارة الاسمية نقول keinen Tee.', 'lexik-kollokation'],
      ['das Fleisch', '—', 'اللحم', 'Ich esse kein Fleisch.', 'Ich esse nicht Fleisch.', 'في النفي المحايد للاسم المادي نقول kein Fleisch.', 'lexik-kollokation'],
      ['helfen', 'hilft · half', 'يساعد', 'Ich kann dir nicht helfen.', 'Ich kann dir kein helfen.', 'الفعل يُنفى بـ nicht.', 'lexik-kollokation'],
      ['wissen', 'weiß · wusste', 'يعرف', 'Ich weiß es nicht.', 'Ich weiß es kein.', 'الأفعال تُنفى بـ nicht.', 'konjugation', 'weiß'],
      ['verstehen', 'versteht · verstand', 'يفهم', 'Ich verstehe die Frage nicht.', 'Ich nicht verstehe die Frage.', 'عند نفي الفهم كله يأتي nicht بعد المفعول هنا.', 'wortstellung', 'verstehe'],
      ['gefallen', 'gefällt · gefiel', 'يُعجب', 'Das gefällt mir nicht.', 'Das nicht gefällt mir.', 'في هذه الجملة يأتي nicht بعد المتمم mir.', 'wortstellung', 'gefällt'],
      ['leider', '—', 'للأسف', 'Leider habe ich keine Zeit.', 'Leider ich habe keine Zeit.', 'بعد leider يبقى الفعل في الموضع الثاني.', 'wortstellung'],
      ['mehr', '—', 'بعد · أكثر', 'Ich habe kein Geld mehr.', 'Ich habe nicht Geld mehr.', 'kein … mehr هو النفي الكامل.', 'lexik-kollokation'],
      ['überhaupt nicht', '—', 'لا على الإطلاق', 'Das passt mir überhaupt nicht.', 'Das passt mir nicht überhaupt.', 'تركيب ثابت: überhaupt nicht.', 'wortstellung', 'nicht'],
      ['nicht', '—', 'ليس · لا', 'Ich trinke nicht.', 'Ich kein trinke.', 'في هذه الجملة البسيطة ننفي الفعل بـnicht بعد الفعل المصرف؛ kein لا ينفي الفعل.', 'wortstellung'],
    ],
    extraCheck: {
      right: 'Das ist nicht teuer.',
      bad: 'Das ist kein teuer.',
      why: 'teuer صفة خبرية، لذلك تُنفى بـnicht.',
      family: 'lexik-kollokation',
      prereq: 'cap.a1-u1-l2.s05'
    },
    tricks: [
      { trick: 'nicht للفعل والصفة، وkein للاسم النكرة هنا', wie: 'nicht trinken · nicht teuer · kein Geld · keine Zeit.', warum: 'حدّد ما تنفيه: فعلًا أو صفةً، أم اسمًا نكرةً أو بلا أداة في هذا الاستعمال.', anchor: 'Ich habe keine Zeit.' },
      { trick: 'kein يلبس نهاية الأداة', wie: 'kein · keine · keinen: على جنس الاسم وحالته.', warum: 'kein ليس كلمة جامدة، بل أداة نكرة في ثوب النفي.', anchor: 'Ich trinke keinen Tee.' },
      { trick: 'موضع nicht يتبع نطاق النفي', wie: 'Die Regel „nicht vor dem Verbteil“ gilt nicht immer: Ich verstehe die Frage nicht · Das ist nicht teuer.', warum: 'لا توجد قاعدة «دائمًا في الآخر»: يأتي nicht حيث يوضح الفعل أو الصفة أو الجزء المنفي.', anchor: 'Ich verstehe die Frage nicht.' }
    ]
  },

  'a1-u1-l3': {
    items: [
      ['der Tisch', 'die Tische', 'الطاولة', 'Ich kaufe den Tisch.', 'Ich kaufe der Tisch.', 'المذكر في النصب den.', 'kasus'],
      ['der Stuhl', 'die Stühle', 'الكرسي', 'Er nimmt den Stuhl.', 'Er nimmt der Stuhl.', 'der يتحوّل إلى den.', 'kasus'],
      ['der Schrank', 'die Schränke', 'الخزانة', 'Ich öffne den Schrank.', 'Ich öffne der Schrank.', 'المفعول المذكر den.', 'kasus'],
      ['der Apfel', 'die Äpfel', 'التفاحة', 'Sie isst den Apfel.', 'Sie isst der Apfel.', 'في النصب المذكر تتحول der إلى den.', 'kasus'],
      ['der Schlüssel', 'die Schlüssel', 'المفتاح', 'Ich suche den Schlüssel.', 'Ich suche der Schlüssel.', 'في هذا المثال تتغيّر الأداة إلى den، ويبقى الاسم Schlüssel كما هو.', 'kasus'],
      ['der Film', 'die Filme', 'الفيلم', 'Wir sehen den Film.', 'Wir sehen der Film.', 'المفعول المذكر den.', 'kasus'],
      ['der Mantel', 'die Mäntel', 'المعطف', 'Ich nehme den Mantel.', 'Ich nehme der Mantel.', 'في النصب المذكر تتحول der إلى den.', 'kasus'],
      ['der Termin', 'die Termine', 'الموعد', 'Ich habe einen Termin.', 'Ich habe ein Termin.', 'النكرة المذكرة في النصب einen.', 'kasus'],
      ['der Lehrer', 'die Lehrer', 'المعلّم', 'Ich frage einen Lehrer.', 'Ich frage ein Lehrer.', 'einen للمذكر النكرة في النصب.', 'kasus'],
      ['der Kuchen', 'die Kuchen', 'الكعك', 'Ich backe einen Kuchen.', 'Ich backe ein Kuchen.', 'einen لا ein مع المنصوب المذكر.', 'kasus'],
      ['die Jacke', 'die Jacken', 'السترة', 'Ich kaufe die Jacke.', 'Ich kaufe den Jacke.', 'المؤنث يبقى die في النصب.', 'kasus'],
      ['die Tasche', 'die Taschen', 'الحقيبة', 'Ich nehme die Tasche.', 'Ich nehme den Tasche.', 'أداة التعريف المؤنثة تبقى die في النصب.', 'kasus'],
      ['die Zeitung', 'die Zeitungen', 'الجريدة', 'Ich lese die Zeitung.', 'Ich lese den Zeitung.', 'المؤنث لا يصير den.', 'kasus'],
      ['die Blume', 'die Blumen', 'الزهرة', 'Sie kauft die Blume.', 'Sie kauft dem Blume.', 'النصب المؤنث die لا dem.', 'kasus'],
      ['die Milch', '—', 'الحليب', 'Ich trinke die Milch.', 'Ich trinke der Milch.', 'die Milch مؤنث: die.', 'kasus'],
      ['die Suppe', 'die Suppen', 'الشوربة', 'Er isst die Suppe.', 'Er isst der Suppe.', 'المؤنث يبقى die.', 'kasus'],
      ['die Musik', '—', 'الموسيقى', 'Ich höre die Musik.', 'Ich höre der Musik.', 'المفعول المؤنث die.', 'kasus'],
      ['das Wasser', '—', 'الماء', 'Ich trinke das Wasser.', 'Ich trinke den Wasser.', 'المحايد لا يتغيّر: das.', 'kasus'],
      ['das Brot', 'die Brote', 'الخبز', 'Ich kaufe das Brot.', 'Ich kaufe den Brot.', 'das ثابت في النصب.', 'kasus'],
      ['das Buch', 'die Bücher', 'الكتاب', 'Ich lese das Buch.', 'Ich lese den Buch.', 'المحايد das.', 'kasus'],
      ['das Auto', 'die Autos', 'السيارة', 'Ich wasche das Auto.', 'Ich wasche den Auto.', 'das Auto محايد.', 'kasus'],
      ['das Handy', 'die Handys', 'الهاتف', 'Ich nehme das Handy.', 'Ich nehme den Handy.', 'المحايد das، وجمعه Handys.', 'plural'],
      ['das Foto', 'die Fotos', 'الصورة', 'Ich mache das Foto.', 'Ich mache den Foto.', 'Foto محايد، وجمعه بـ s.', 'plural'],
      ['das Zimmer', 'die Zimmer', 'الغرفة', 'Ich putze das Zimmer.', 'Ich putze den Zimmer.', 'أداة التعريف المحايدة تبقى das في النصب.', 'kasus'],
      ['das Fenster', 'die Fenster', 'النافذة', 'Er schließt das Fenster.', 'Er schließt den Fenster.', 'das يبقى das في النصب.', 'kasus'],
      ['die Schuhe', '—', 'الأحذية', 'Ich kaufe die Schuhe.', 'Ich kaufe den Schuhe.', 'الجمع في النصب die.', 'plural'],
      ['die Kinder', '—', 'الأطفال', 'Ich hole die Kinder ab.', 'Ich hole den Kinder ab.', 'جمع Kinder في النصب die.', 'plural'],
      ['die Bluse', 'die Blusen', 'البلوزة', 'Ich nehme die Bluse.', 'Ich nehme den Bluse.', 'المؤنث يبقى die في النصب.', 'kasus', 'die']
    ],
    extraCheck: {
      right: 'Ich trinke das Wasser.',
      bad: 'Ich trinke den Wasser.',
      why: 'Wasser محايد، لذلك تبقى أداة التعريف das في النصب.',
      family: 'kasus',
      prereq: 'cap.a1-u1-l3.s05'
    },
    tricks: [
      { trick: 'في أدوات التعريف تتغير der وحدها', wie: 'der → den، بينما تبقى die · das · die (جمع) كما هي في النصب.', warum: 'هذا خاص بأدوات التعريف هنا: لا تعمم den على المؤنث أو المحايد أو الجمع.', anchor: 'Ich kaufe den Tisch.' },
      { trick: 'ein تصير einen مع المذكر المنصوب', wie: 'ein Termin → Ich habe einen Termin · ein Kuchen → Ich backe einen Kuchen.', warum: 'مع الاسم المذكر النكرة يبيّن الحرف n في einen حالة النصب.', anchor: 'Ich habe einen Termin.' },
      { trick: 'حدّد الفاعل ثم المفعول به', wie: 'Ich | sehe | den Mann: ich هو الفاعل وden Mann هو المفعول به.', warum: 'معنى الفعل والجملة يحددان المفعول، ثم تُظهر الأداة جنسه وحالته؛ ليست الأداة العلامة الوحيدة.', anchor: 'Ich sehe den Mann.' }
    ]
  }

};

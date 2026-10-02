/* Deutschweg — P3.2 lexical layer, A1 production unit 2 (PRODUCTION.md):
   a1-u1-l1 … a1-u1-l6. Same row format as vocab-b1-11.js; 20 words per
   row (decision 14), three tricks, two annotated order sentences, a
   30-word writing task (Start Deutsch 1, Schreiben Teil 2). */

module.exports = {
  'a1-u1-l1': {
    items: [
      ['lernen', 'lernt · lernte · hat gelernt', 'يتعلّم', 'Ich lerne Deutsch.', 'Ich lernt Deutsch.', 'مع ich النهاية -e: ich lerne.', 'konjugation', 'lerne'],
      ['arbeiten', 'arbeitet · arbeitete · hat gearbeitet', 'يعمل', 'Er arbeitet in Tunis.', 'Er arbeit in Tunis.', 'الجذر ينتهي بـ t فتُضاف -et: er arbeitet.', 'konjugation', 'arbeitet'],
      ['machen', 'macht · machte · hat gemacht', 'يفعل · يصنع', 'Was machst du heute?', 'Was machen du heute?', 'مع du النهاية -st: du machst.', 'konjugation', 'machst'],
      ['spielen', 'spielt · spielte · hat gespielt', 'يلعب', 'Wir spielen Fußball.', 'Wir spielt Fußball.', 'مع wir المصدر كاملًا: wir spielen.', 'konjugation', 'spielen'],
      ['kaufen', 'kauft · kaufte · hat gekauft', 'يشتري', 'Sie kauft Brot.', 'Sie kaufst Brot.', 'مع sie (هي) النهاية -t: sie kauft.', 'konjugation', 'kauft'],
      ['trinken', 'trinkt · trank · hat getrunken', 'يشرب', 'Ich trinke Tee.', 'Ich trinkt Tee.', 'مع ich: trinke.', 'konjugation', 'trinke'],
      ['hören', 'hört · hörte · hat gehört', 'يسمع', 'Du hörst Musik.', 'Du hört Musik.', 'مع du: -st: du hörst.', 'konjugation', 'hörst'],
      ['schreiben', 'schreibt · schrieb · hat geschrieben', 'يكتب', 'Ich schreibe eine E-Mail.', 'Ich schreibe ein E-Mail.', 'E-Mail مؤنثة: eine E-Mail.', 'genus', 'schreibe'],
      ['kochen', 'kocht · kochte · hat gekocht', 'يطبخ', 'Meine Mutter kocht gut.', 'Meine Mutter koche gut.', 'مع er/sie النهاية -t: kocht.', 'konjugation', 'kocht'],
      ['brauchen', 'braucht · brauchte · hat gebraucht', 'يحتاج', 'Ich brauche einen Stift.', 'Ich brauche ein Stift.', 'Stift مذكر: einen Stift في النصب.', 'kasus', 'brauche'],
      ['suchen', 'sucht · suchte · hat gesucht', 'يبحث عن', 'Ich suche meinen Schlüssel.', 'Ich suche für meinen Schlüssel.', 'suchen متعدٍّ مباشر: suche meinen Schlüssel؛ لا für من chercher.', 'präposition', 'suche'],
      ['öffnen', 'öffnet · öffnete · hat geöffnet', 'يفتح', 'Sie öffnet das Fenster.', 'Sie öffnt das Fenster.', 'الجذر ينتهي بـ fn فتُضاف -et: öffnet.', 'konjugation', 'öffnet'],
      ['tanzen', 'tanzt · tanzte · hat getanzt', 'يرقص', 'Du tanzt gut.', 'Du tanzst gut.', 'بعد z تُدمج s: du tanzt.', 'konjugation', 'tanzt'],
      ['reisen', 'reist · reiste · ist gereist', 'يسافر', 'Du reist nach Berlin.', 'Du reisst nach Berlin.', 'الجذر ينتهي بـ s: du reist بـ t فقط.', 'konjugation', 'reist'],
      ['warten', 'wartet · wartete · hat gewartet', 'ينتظر', 'Ich warte hier.', 'Ich wartet hier.', 'مع ich: warte.', 'konjugation', 'warte'],
      ['heute', '—', 'اليوم', 'Heute lerne ich Deutsch.', 'Heute ich lerne Deutsch.', 'بعد Heute يأتي الفعل: Heute lerne ich.', 'wortstellung'],
      ['jetzt', '—', 'الآن', 'Jetzt arbeite ich.', 'Jetzt ich arbeite.', 'الفعل في الموضع الثاني: Jetzt arbeite ich.', 'wortstellung'],
      ['oft', '—', 'كثيرًا · غالبًا', 'Ich spiele oft Fußball.', 'Ich spiele Fußball oft.', 'الظرف قبل المفعول: oft Fußball.', 'wortstellung'],
      ['zusammen', '—', 'معًا', 'Wir lernen zusammen.', 'Wir lernen together.', 'together إنجليزية؛ zusammen.', 'falser-freund'],
      ['gern', '—', 'بسرور · يحبّ أن', 'Ich koche gern.', 'Ich mag kochen gern.', 'gern مع الفعل يكفي: Ich koche gern.', 'lexik-kollokation']
    ],
    tricks: [
      { trick: 'e · st · t · en: أربع نهايات تكفي', wie: 'ich lerne · du lernst · er lernt · wir lernen (وihr lernt، sie lernen).', warum: 'الفعل الألماني المنتظم لا يحتاج حفظًا لكل فعل؛ الجذر ثابت والنهايات أربع.', anchor: 'Ich lerne Deutsch.' },
      { trick: 'جذر على t أو d أو fn يأخذ e قبل النهاية', wie: 'arbeit-et · find-et · öffn-et · du arbeit-est.', warum: 'بلا الـ e لا يُنطق الحرفان معًا، والأذن الألمانية ترفض arbeitt قبل القاعدة.', anchor: 'Er arbeitet in Tunis.' },
      { trick: 'الفعل ثانيًا دائمًا، حتى بعد heute وjetzt', wie: 'Heute lerne ich. · Jetzt arbeite ich. — لا Heute ich lerne.', warum: 'العربية والفرنسية تضعان الفاعل بعد الظرف، والألمانية تضع الفعل؛ هذا أول خطأ ترتيب في A1.', anchor: 'Heute lerne ich Deutsch.' }
    ],
    order: [
      { satz: 'Heute | lerne | ich Deutsch.', ar: 'اليوم أتعلم الألمانية.' },
      { satz: 'Wir | spielen | oft Fußball.', ar: 'نلعب كرة القدم كثيرًا.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل قصيرة عن يومك: ماذا تتعلم، أين تعمل أو تدرس، ماذا تشرب في الصباح، ماذا تفعل كثيرًا، وماذا تحب أن تفعل (gern).',
      promptDe: 'Ich lerne … · Ich arbeite in … · Ich trinke … · Ich spiele oft … · Ich … gern.',
      points: ['خمسة أفعال بنهاية صحيحة', 'جملة تبدأ بـ Heute أو Jetzt والفعل ثانيًا', 'gern مع فعل', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'konjugation'
    }
  },

  'a1-u1-l2': {
    items: [
      ['nicht', '—', 'لا (نفي الفعل أو الصفة)', 'Ich trinke nicht.', 'Ich trinke kein.', 'نفي الفعل بـ nicht؛ kein لا يقف وحده.', 'lexik-kollokation'],
      ['kein', 'keine · keinen', 'لا (قبل اسم مذكر أو محايد)', 'Ich habe kein Auto.', 'Ich habe nicht Auto.', 'قبل الاسم النكرة kein: kein Auto.', 'lexik-kollokation'],
      ['keine', '—', 'لا (قبل اسم مؤنث أو جمع)', 'Ich habe keine Zeit.', 'Ich habe keinen Zeit.', 'Zeit مؤنثة: keine Zeit.', 'genus'],
      ['keinen', '—', 'لا (مذكر في النصب)', 'Ich trinke keinen Kaffee.', 'Ich trinke kein Kaffee.', 'Kaffee مذكر في النصب: keinen Kaffee.', 'kasus'],
      ['nie', '—', 'أبدًا', 'Ich rauche nie.', 'Ich rauche nie nicht.', 'nie تنفي وحدها؛ nicht زائدة.', 'lexik-kollokation'],
      ['nichts', '—', 'لا شيء', 'Ich verstehe nichts.', 'Ich verstehe keine.', 'لا شيء = nichts؛ keine تحتاج اسمًا بعدها.', 'lexik-kollokation'],
      ['niemand', '—', 'لا أحد', 'Niemand ist zu Hause.', 'Niemand ist nicht zu Hause.', 'niemand ينفي وحده.', 'lexik-kollokation'],
      ['noch nicht', '—', 'ليس بعد', 'Ich bin noch nicht fertig.', 'Ich bin nicht noch fertig.', 'الترتيب noch nicht.', 'wortstellung', 'nicht'],
      ['nicht mehr', '—', 'لم يعد', 'Er wohnt nicht mehr hier.', 'Er wohnt mehr nicht hier.', 'الترتيب nicht mehr.', 'wortstellung', 'mehr'],
      ['doch', '—', 'بلى (رد على سؤال منفي)', 'Hast du keine Zeit? – Doch!', 'Hast du keine Zeit? – Ja!', 'الرد الإيجابي على سؤال منفي: Doch، لا Ja.', 'lexik-kollokation', 'Doch'],
      ['teuer', '—', 'غالٍ', 'Das ist nicht teuer.', 'Das ist kein teuer.', 'نفي الصفة بـ nicht.', 'lexik-kollokation'],
      ['billig', '—', 'رخيص', 'Das Brot ist billig.', 'Das Brot ist billich.', 'billig بـ g في الآخر وتُنطق ـش.', 'orthographie'],
      ['das Auto', 'die Autos', 'السيارة', 'Das Auto ist neu.', 'Der Auto ist neu.', 'Auto محايد: das Auto.', 'genus'],
      ['die Zeit', '—', 'الوقت', 'Hast du Zeit?', 'Hast du die Zeit?', 'هل لديك وقت؟ بلا أداة: Hast du Zeit?', 'lexik-kollokation'],
      ['der Kaffee', '—', 'القهوة', 'Ich trinke Kaffee ohne Zucker.', 'Ich trinke Café ohne Zucker.', 'café الفرنسية؛ Kaffee (وCafé = مقهى).', 'falser-freund'],
      ['der Zucker', '—', 'السكر', 'Ich nehme keinen Zucker.', 'Ich nehme kein Zucker.', 'Zucker مذكر: keinen Zucker.', 'kasus'],
      ['das Geld', '—', 'المال', 'Ich habe kein Geld.', 'Ich habe keine Geld.', 'Geld محايد: kein Geld.', 'genus'],
      ['der Hunger', '—', 'الجوع', 'Ich habe keinen Hunger.', 'Ich habe nicht Hunger.', 'Hunger اسم نكرة ← keinen Hunger.', 'lexik-kollokation'],
      ['müde', '—', 'متعب', 'Ich bin nicht müde.', 'Ich bin kein müde.', 'الصفة تُنفى بـ nicht.', 'lexik-kollokation'],
      ['leider', '—', 'للأسف', 'Leider habe ich keine Zeit.', 'Leider ich habe keine Zeit.', 'بعد Leider الفعل: Leider habe ich.', 'wortstellung']
    ],
    tricks: [
      { trick: 'nicht للفعل والصفة، kein للاسم النكرة', wie: 'Ich trinke nicht. · Das ist nicht teuer. · Ich habe kein Auto.', warum: 'العربية تنفي بـ «لا» في كل موضع، والألمانية تختار الأداة حسب ما بعدها.', anchor: 'Ich habe kein Auto.' },
      { trick: 'kein يتصرّف مثل ein', wie: 'ein Auto ← kein Auto · eine Zeit ← keine Zeit · einen Kaffee ← keinen Kaffee.', warum: 'من يعرف ein يعرف kein؛ لا جدول جديدًا، فقط حرف k في الأول.', anchor: 'Ich trinke keinen Kaffee.' },
      { trick: 'نفي واحد يكفي: nie وnichts وniemand', wie: 'Ich rauche nie. · Ich verstehe nichts. · Niemand ist da. — بلا nicht إضافية.', warum: 'الفرنسية ne … jamais والعربية «لا … أبدًا» تضعان نفيين، والألمانية تضع واحدًا.', anchor: 'Ich rauche nie.' }
    ],
    order: [
      { satz: 'Ich | habe | keine Zeit.', ar: 'ليس لديّ وقت.' },
      { satz: 'Leider | habe | ich kein Geld.', ar: 'للأسف ليس لديّ مال.' }
    ],
    writing: {
      prompt: 'صديق يدعوك إلى المقهى. اكتب ردًا قصيرًا من خمس جمل: شكر، لماذا لا تستطيع (لا وقت، لا مال)، ماذا لا تشرب، متى تستطيع، وتحية.',
      promptDe: 'Danke für … · Leider habe ich keine Zeit. · Ich trinke keinen … · Ich habe kein … · Morgen habe ich Zeit. · Liebe Grüße',
      points: ['kein أو keine أو keinen مرة', 'nicht مرة', 'Leider بالفعل ثانيًا', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'lexik-kollokation'
    }
  },

  'a1-u1-l3': {
    items: [
      ['der Mann', 'die Männer', 'الرجل', 'Ich sehe den Mann.', 'Ich sehe der Mann.', 'المفعول المذكر: den Mann.', 'kasus'],
      ['die Jacke', 'die Jacken', 'السترة', 'Ich kaufe die Jacke.', 'Ich kaufe den Jacke.', 'المؤنث لا يتغيّر في النصب: die Jacke.', 'kasus'],
      ['das Wasser', '—', 'الماء', 'Ich trinke das Wasser.', 'Ich trinke den Wasser.', 'المحايد لا يتغيّر: das Wasser.', 'kasus'],
      ['der Termin', 'die Termine', 'الموعد', 'Ich habe einen Termin.', 'Ich habe ein Termin.', 'المذكر النكرة في النصب: einen Termin.', 'kasus'],
      ['der Tisch', 'die Tische', 'الطاولة', 'Ich brauche einen Tisch.', 'Ich brauche eine Tisch.', 'Tisch مذكر: einen Tisch.', 'genus'],
      ['der Stuhl', 'die Stühle', 'الكرسي', 'Wir kaufen einen Stuhl.', 'Wir kaufen ein Stuhl.', 'Stuhl مذكر في النصب: einen.', 'kasus'],
      ['das Buch', 'die Bücher', 'الكتاب', 'Ich lese das Buch.', 'Ich lese den Buch.', 'Buch محايد: das Buch.', 'genus'],
      ['die Tasche', 'die Taschen', 'الحقيبة', 'Sie hat eine Tasche.', 'Sie hat einen Tasche.', 'Tasche مؤنثة: eine Tasche.', 'genus'],
      ['der Schlüssel', 'die Schlüssel', 'المفتاح', 'Hast du den Schlüssel?', 'Hast du der Schlüssel?', 'مفعول مذكر: den Schlüssel.', 'kasus'],
      ['das Handy', 'die Handys', 'الهاتف المحمول', 'Ich suche mein Handy.', 'Ich suche mein Portable.', 'portable الفرنسية؛ الألمانية das Handy.', 'falser-freund'],
      ['der Computer', 'die Computer', 'الحاسوب', 'Er kauft einen Computer.', 'Er kauft ein Computer.', 'Computer مذكر: einen Computer.', 'kasus'],
      ['die Lampe', 'die Lampen', 'المصباح', 'Die Lampe ist kaputt.', 'Der Lampe ist kaputt.', 'Lampe مؤنثة: die Lampe.', 'genus'],
      ['der Apfel', 'die Äpfel', 'التفاحة', 'Ich esse einen Apfel.', 'Ich esse ein Apfel.', 'Apfel مذكر: einen Apfel.', 'kasus'],
      ['das Brot', 'die Brote', 'الخبز', 'Ich kaufe ein Brot.', 'Ich kaufe einen Brot.', 'Brot محايد: ein Brot.', 'genus'],
      ['die Flasche', 'die Flaschen', 'الزجاجة', 'Ich nehme eine Flasche Wasser.', 'Ich nehme eine Flasche von Wasser.', 'الكمية بلا von: eine Flasche Wasser.', 'präposition'],
      ['der Film', 'die Filme', 'الفيلم', 'Wir sehen einen Film.', 'Wir sehen ein Film.', 'Film مذكر: einen Film.', 'kasus'],
      ['das Fahrrad', 'die Fahrräder', 'الدراجة', 'Ich habe ein Fahrrad.', 'Ich habe ein Vélo.', 'vélo الفرنسية؛ das Fahrrad.', 'falser-freund'],
      ['der Kuchen', 'die Kuchen', 'الكعكة', 'Möchtest du den Kuchen?', 'Möchtest du der Kuchen?', 'مفعول مذكر: den Kuchen.', 'kasus'],
      ['sehen', 'sieht · sah · hat gesehen', 'يرى', 'Ich sehe den Bus.', 'Ich sehe der Bus.', 'sehen + النصب: den Bus.', 'kasus', 'sehe'],
      ['es gibt', '—', 'يوجد', 'Es gibt einen Park.', 'Es gibt ein Park.', 'es gibt + النصب: einen Park.', 'kasus', 'gibt']
    ],
    tricks: [
      { trick: 'المذكر وحده يتغيّر في النصب: der ← den، ein ← einen', wie: 'den Mann · einen Termin — أما die Jacke وdas Wasser فتبقيان.', warum: 'ثلاثة أرباع الجدول لا يتغيّر؛ من يحفظ den وeinen وحدهما يحفظ النصب كله في A1.', anchor: 'Ich sehe den Mann.' },
      { trick: 'الفعل يصنع المفعول: haben وkaufen وsehen وbrauchen', wie: 'Ich habe einen Termin. · Ich kaufe einen Tisch. · Ich sehe einen Film.', warum: 'بعد هذه الأفعال يأتي النصب دائمًا؛ معرفة الفعل تغني عن السؤال «من؟ ماذا؟».', anchor: 'Ich habe einen Termin.' },
      { trick: 'es gibt يطلب النصب', wie: 'Es gibt einen Park. · Es gibt keinen Bus.', warum: 'العربية تقول «يوجد حديقةٌ» بالرفع، والألمانية تعامل ما بعد es gibt مفعولًا.', anchor: 'Es gibt einen Park.' }
    ],
    order: [
      { satz: 'Ich | kaufe | die Jacke.', ar: 'أشتري السترة.' },
      { satz: 'Es | gibt | einen Park.', ar: 'يوجد حديقة.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن أشياء تحتاجها لغرفتك الجديدة: ماذا تشتري (طاولة، كرسي، مصباح)، ماذا لديك، وماذا لا تحتاج. استعمل einen وeine وein.',
      promptDe: 'Ich brauche einen … · Ich kaufe eine … · Ich habe ein … · Ich brauche keinen … · Es gibt …',
      points: ['einen مع اسم مذكر مرتين', 'eine وein مرة لكل منهما', 'جملة بـ es gibt', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'kasus'
    }
  },

  'a1-u1-l4': {
    items: [
      ['mich', '—', 'ـني (مفعول)', 'Hörst du mich?', 'Hörst du mir?', 'مفعول hören بالنصب: mich.', 'kasus'],
      ['dich', '—', 'ـكَ (مفعول)', 'Ich sehe dich.', 'Ich sehe dir.', 'مفعول مباشر: dich.', 'kasus'],
      ['ihn', '—', 'ـه (مفعول مذكر)', 'Ich sehe ihn.', 'Ich sehe ihm.', 'مفعول مذكر: ihn.', 'kasus'],
      ['sie', '—', 'ـها · ـهم (مفعول)', 'Ich sehe sie heute.', 'Ich sehe ihr heute.', 'sie تبقى sie في النصب.', 'kasus'],
      ['uns', '—', 'ـنا (مفعول)', 'Er besucht uns.', 'Er besucht wir.', 'مفعول: uns.', 'kasus'],
      ['euch', '—', 'ـكم (مفعول)', 'Ich rufe euch an.', 'Ich rufe ihr an.', 'مفعول: euch.', 'kasus'],
      ['Sie', '—', 'حضرتك (مفعول)', 'Ich verstehe Sie nicht.', 'Ich verstehe Ihnen nicht.', 'verstehen + النصب: Sie.', 'kasus'],
      ['besuchen', 'besucht · besuchte · hat besucht', 'يزور', 'Ich besuche dich morgen.', 'Ich besuche dir morgen.', 'besuchen + النصب: dich.', 'kasus', 'besuche'],
      ['anrufen', 'ruft an · rief an · hat angerufen', 'يتصل بـ', 'Ich rufe dich an.', 'Ich rufe dir an.', 'anrufen + النصب: dich؛ لا كالفرنسية téléphoner à.', 'kasus', 'rufe'],
      ['verstehen', 'versteht · verstand · hat verstanden', 'يفهم', 'Verstehst du mich?', 'Verstehst du mir?', 'verstehen + النصب: mich.', 'kasus', 'Verstehst'],
      ['kennen', 'kennt · kannte · hat gekannt', 'يعرف (شخصًا)', 'Ich kenne ihn.', 'Ich kenne ihm.', 'kennen + النصب: ihn.', 'kasus', 'kenne'],
      ['lieben', 'liebt · liebte · hat geliebt', 'يحبّ', 'Ich liebe dich.', 'Ich liebe dir.', 'lieben + النصب.', 'kasus', 'liebe'],
      ['finden', 'findet · fand · hat gefunden', 'يجد', 'Ich finde es nicht.', 'Ich finde ihm nicht.', 'الشيء المحايد: es.', 'kasus', 'finde'],
      ['abholen', 'holt ab · holte ab · hat abgeholt', 'يأتي لأخذ (شخص)', 'Ich hole dich um acht ab.', 'Ich hole dir um acht ab.', 'abholen + النصب: dich.', 'kasus', 'hole'],
      ['treffen', 'trifft · traf · hat getroffen', 'يلتقي بـ', 'Ich treffe sie morgen.', 'Ich treffe mit sie morgen.', 'treffen + النصب مباشرة: sie؛ لا mit.', 'präposition', 'treffe'],
      ['einladen', 'lädt ein · lud ein · hat eingeladen', 'يدعو', 'Ich lade euch ein.', 'Ich lade ihr ein.', 'einladen + النصب: euch.', 'kasus', 'lade'],
      ['der Freund', 'die Freunde', 'الصديق', 'Ich besuche meinen Freund.', 'Ich besuche mein Freund.', 'Freund مذكر في النصب: meinen Freund.', 'kasus'],
      ['die Freundin', 'die Freundinnen', 'الصديقة', 'Ich treffe meine Freundin.', 'Ich treffe meinen Freundin.', 'Freundin مؤنثة: meine Freundin.', 'genus'],
      ['morgen', '—', 'غدًا', 'Morgen besuche ich dich.', 'Morgen ich besuche dich.', 'بعد Morgen الفعل ثانيًا.', 'wortstellung'],
      ['natürlich', '—', 'طبعًا', 'Natürlich kenne ich ihn.', 'Natürlich ich kenne ihn.', 'بعد Natürlich الفعل: kenne ich.', 'wortstellung']
    ],
    tricks: [
      { trick: 'mich وdich وihn: النصب للشخص الذي يقع عليه الفعل', wie: 'Siehst du mich? · Ich sehe dich. · Ich sehe ihn.', warum: 'mir وdir وihm للداتيف في المرحلة التالية؛ في A1 كل أفعال اليوم تأخذ النصب.', anchor: 'Ich sehe dich.' },
      { trick: 'anrufen وbesuchen وtreffen: بلا حرف جر', wie: 'Ich rufe dich an. · Ich besuche dich. · Ich treffe sie.', warum: 'téléphoner à وrendre visite à تُغريان بحرف جر، والألمانية تضع المفعول مباشرة.', anchor: 'Ich rufe dich an.' },
      { trick: 'sie وSie وes لا تتغيّر في النصب', wie: 'Ich sehe sie. · Ich verstehe Sie. · Ich kaufe es.', warum: 'ثلاثة ضمائر من ثمانية لا تتغيّر، فالجهد كله على mich وdich وihn وuns وeuch.', anchor: 'Ich verstehe Sie nicht.' }
    ],
    order: [
      { satz: 'Ich | rufe | dich | an.', ar: 'أتصل بك.' },
      { satz: 'Morgen | besuche | ich dich.', ar: 'غدًا أزورك.' }
    ],
    writing: {
      prompt: 'اكتب رسالة قصيرة من خمس جمل إلى صديق: متى تزوره، متى تتصل به، أنك تدعوه إلى العشاء، أين تلتقيان، وتحية. استعمل dich وeuch أو ihn.',
      promptDe: 'Lieber …, · morgen besuche ich dich. · Ich rufe dich um … an. · Ich lade dich zum Essen ein. · Wir treffen uns … · Bis morgen!',
      points: ['dich مرتين على الأقل', 'فعل منفصل (anrufen أو einladen أو abholen)', 'Morgen بالفعل ثانيًا', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'kasus'
    }
  },

  'a1-u1-l5': {
    items: [
      ['mein', 'meine · meinen', 'ـي (ملكيتي، مذكر أو محايد)', 'Das ist mein Bruder.', 'Das ist meine Bruder.', 'Bruder مذكر: mein Bruder.', 'deklination'],
      ['meine', '—', 'ـي (مؤنث أو جمع)', 'Das ist meine Schwester.', 'Das ist mein Schwester.', 'Schwester مؤنثة: meine Schwester.', 'deklination'],
      ['meinen', '—', 'ـي (مذكر في النصب)', 'Ich sehe meinen Bruder.', 'Ich sehe mein Bruder.', 'النصب المذكر: meinen Bruder.', 'kasus'],
      ['dein', 'deine · deinen', 'ـكَ (مذكر أو محايد)', 'Ist das dein Handy?', 'Ist das deine Handy?', 'Handy محايد: dein Handy.', 'deklination'],
      ['deine', '—', 'ـكَ (مؤنث أو جمع)', 'Wie ist deine Adresse?', 'Wie ist dein Adresse?', 'Adresse مؤنثة: deine Adresse.', 'deklination'],
      ['sein', 'seine · seinen', 'ـه (ملكية المذكر)', 'Das ist sein Auto.', 'Das ist seine Auto.', 'Auto محايد: sein Auto.', 'deklination'],
      ['ihr', 'ihre · ihren', 'ـها (ملكية المؤنث)', 'Das ist ihr Mann.', 'Das ist sein Mann.', 'صاحبة الملك مؤنثة ← ihr Mann.', 'deklination'],
      ['unser', 'unsere · unseren', 'ـنا', 'Unser Lehrer kommt aus Wien.', 'Unsere Lehrer kommt aus Wien.', 'Lehrer مذكر مفرد: unser Lehrer.', 'deklination'],
      ['euer', 'eure · euren', 'ـكم', 'Ist das euer Haus?', 'Ist das euere Haus?', 'Haus محايد: euer Haus (وeure قبل المؤنث).', 'deklination'],
      ['Ihr / Ihre', 'Ihren', 'ـك (حضرتك، ملكية)', 'Wie ist Ihre Nummer?', 'Wie ist deine Nummer?', 'مع حضرتك: Ihre Nummer، لا deine.', 'register', 'Ihre'],
      ['die Nummer', 'die Nummern', 'الرقم', 'Meine Nummer ist 22 345 678.', 'Mein Nummer ist 22 345 678.', 'Nummer مؤنثة: meine Nummer.', 'genus'],
      ['die Adresse', 'die Adressen', 'العنوان', 'Meine Adresse ist Hauptstraße 5.', 'Meine Adress ist Hauptstraße 5.', 'Adresse بـ e في الآخر.', 'orthographie'],
      ['die E-Mail', 'die E-Mails', 'البريد الإلكتروني', 'Wie ist deine E-Mail?', 'Wie ist dein E-Mail?', 'E-Mail مؤنثة: deine E-Mail.', 'genus'],
      ['der Lehrer', 'die Lehrer', 'المعلّم', 'Unser Lehrer heißt Herr Braun.', 'Unser Lehrer heißt Monsieur Braun.', 'Herr لا Monsieur.', 'falser-freund'],
      ['das Haus', 'die Häuser', 'البيت', 'Unser Haus ist klein.', 'Unsere Haus ist klein.', 'Haus محايد: unser Haus.', 'deklination'],
      ['die Wohnung', 'die Wohnungen', 'الشقة', 'Ihre Wohnung ist groß.', 'Ihr Wohnung ist groß.', 'Wohnung مؤنثة: ihre Wohnung.', 'deklination'],
      ['der Chef', 'die Chefs', 'المدير', 'Mein Chef ist nett.', 'Meine Chef ist nett.', 'Chef مذكر: mein Chef.', 'deklination'],
      ['der Hund', 'die Hunde', 'الكلب', 'Sein Hund heißt Rex.', 'Seine Hund heißt Rex.', 'Hund مذكر: sein Hund.', 'deklination'],
      ['die Katze', 'die Katzen', 'القطة', 'Ihre Katze schläft.', 'Ihr Katze schläft.', 'Katze مؤنثة: ihre Katze.', 'deklination'],
      ['das Foto', 'die Fotos', 'الصورة', 'Hier ist mein Foto.', 'Hier ist meine Foto.', 'Foto محايد: mein Foto.', 'deklination']
    ],
    tricks: [
      { trick: 'mein يتصرّف مثل ein وkein', wie: 'ein Bruder ← mein Bruder · eine Schwester ← meine Schwester · einen Bruder ← meinen Bruder.', warum: 'جدول واحد لثلاث كلمات؛ من حفظ ein لا يحتاج جدولًا جديدًا للملكية.', anchor: 'Ich sehe meinen Bruder.' },
      { trick: 'sein للمالك المذكر، ihr للمالكة المؤنثة', wie: 'Ali: sein Auto · Sara: ihr Auto — الجنس للمالك لا للشيء.', warum: 'الفرنسية son وsa تتبعان الشيء، والألمانية تتبع المالك؛ هذا أكثر خطأ ملكية عند التونسيين.', anchor: 'Das ist ihr Mann.' },
      { trick: 'Ihre بحرف كبير = حضرتك', wie: 'Wie ist Ihre Nummer? (رسمي) · Wie ist deine Nummer? (صديق).', warum: 'الحرف الكبير وحده يفرّق بين «ملكها» و«ملك حضرتك»، والسياق الرسمي في A1 يطلب Ihre.', anchor: 'Wie ist Ihre Nummer?' }
    ],
    order: [
      { satz: 'Das | ist | meine Schwester.', ar: 'هذه أختي.' },
      { satz: 'Unser Lehrer | kommt | aus Wien.', ar: 'معلّمنا من فيينا.' }
    ],
    writing: {
      prompt: 'املأ بطاقة تعارف بخمس جمل: اسمك، رقمك، عنوانك، بريدك الإلكتروني، ومعلّمك أو مديرك. استعمل mein وmeine.',
      promptDe: 'Mein Name ist … · Meine Nummer ist … · Meine Adresse ist … · Meine E-Mail ist … · Mein Lehrer heißt …',
      points: ['mein مع مذكر أو محايد', 'meine مع مؤنث', 'الرقم والعنوان والبريد', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'deklination'
    }
  },

  'a1-u1-l6': {
    items: [
      ['können', 'kann · kannst · können', 'يستطيع', 'Ich kann schwimmen.', 'Ich kannst schwimmen.', 'مع ich: kann بلا نهاية.', 'konjugation', 'kann'],
      ['müssen', 'muss · musst · müssen', 'يجب', 'Ich muss lernen.', 'Ich muß lernen.', 'الكتابة الحديثة muss بـ ss.', 'orthographie', 'muss'],
      ['schwimmen', 'schwimmt · schwamm · ist geschwommen', 'يسبح', 'Kannst du schwimmen?', 'Kannst du schwimmst?', 'بعد kannst المصدر: schwimmen.', 'konjugation'],
      ['fahren', 'fährt · fuhr · ist gefahren', 'يقود · يذهب بمركبة', 'Ich kann Auto fahren.', 'Ich kann Auto fahre.', 'المصدر في الآخر: fahren.', 'konjugation'],
      ['singen', 'singt · sang · hat gesungen', 'يغنّي', 'Sie kann gut singen.', 'Sie kann gut singt.', 'المصدر: singen.', 'konjugation'],
      ['lesen', 'liest · las · hat gelesen', 'يقرأ', 'Er muss viel lesen.', 'Er muss viel zu lesen.', 'بعد müssen مصدر بلا zu.', 'konjugation'],
      ['zeichnen', 'zeichnet · zeichnete · hat gezeichnet', 'يرسم', 'Ich kann nicht zeichnen.', 'Ich kann zeichnen nicht.', 'nicht قبل المصدر في الآخر: nicht zeichnen.', 'wortstellung'],
      ['aufstehen', 'steht auf · stand auf · ist aufgestanden', 'ينهض', 'Ich muss früh aufstehen.', 'Ich muss früh stehen auf.', 'مع müssen يبقى المنفصل كاملًا: aufstehen.', 'wortstellung'],
      ['einkaufen', 'kauft ein · kaufte ein · hat eingekauft', 'يتسوّق', 'Wir müssen heute einkaufen.', 'Wir müssen heute kaufen ein.', 'المصدر المنفصل كاملًا في الآخر: einkaufen.', 'wortstellung'],
      ['die Hausaufgaben', 'nur Plural', 'الواجبات المنزلية', 'Ich muss Hausaufgaben machen.', 'Ich muss Hausaufgaben tun.', 'Hausaufgaben machen، لا tun.', 'lexik-kollokation'],
      ['der Führerschein', 'die Führerscheine', 'رخصة القيادة', 'Ich habe keinen Führerschein.', 'Ich habe kein Führerschein.', 'Führerschein مذكر: keinen.', 'kasus'],
      ['der Kurs', 'die Kurse', 'الدورة', 'Der Kurs beginnt um neun.', 'Der Kurs beginnt in neun.', 'الساعة بـ um.', 'präposition'],
      ['die Arbeit', 'die Arbeiten', 'العمل', 'Ich muss zur Arbeit.', 'Ich muss zu Arbeit.', 'zur Arbeit (zu der).', 'präposition'],
      ['früh', '—', 'مبكرًا', 'Ich stehe früh auf.', 'Ich stehe frühe auf.', 'الظرف früh بلا نهاية.', 'deklination'],
      ['spät', '—', 'متأخرًا', 'Es ist schon spät.', 'Es ist schon tard.', 'tard الفرنسية؛ spät.', 'falser-freund'],
      ['gut', '—', 'جيد · جيدًا', 'Ich kann gut kochen.', 'Ich kann gut koche.', 'المصدر في الآخر: kochen.', 'konjugation'],
      ['noch', '—', 'بعد · ما زال', 'Ich kann noch nicht gut Deutsch.', 'Ich kann nicht noch gut Deutsch.', 'الترتيب noch nicht.', 'wortstellung'],
      ['der Unterricht', '—', 'الحصة الدراسية', 'Der Unterricht beginnt um acht.', 'Die Unterricht beginnt um acht.', 'Unterricht مذكر: der Unterricht.', 'genus'],
      ['der Test', 'die Tests', 'الاختبار', 'Morgen habe ich einen Test.', 'Morgen ich habe einen Test.', 'بعد Morgen الفعل ثانيًا.', 'wortstellung'],
      ['unbedingt', '—', 'حتمًا · بالضرورة', 'Ich muss unbedingt lernen.', 'Ich muss unbedingt zu lernen.', 'بعد muss مصدر بلا zu.', 'konjugation']
    ],
    tricks: [
      { trick: 'ich kann وer kann بلا نهاية', wie: 'ich kann · du kannst · er kann · wir können — المفرد يغيّر الحركة ويُسقط النهاية في ich وer.', warum: 'الفعل الناقص يخالف قاعدة e وst وt، والخطأ kannst مع ich هو الأول في A1.', anchor: 'Ich kann schwimmen.' },
      { trick: 'الفعل الناقص ثانيًا والمصدر في الآخر: قوس', wie: 'Ich | muss | heute früh | aufstehen. — بلا zu وبلا تصريف.', warum: 'الفرنسية تلصق المصدر بالفعل (je dois apprendre)، والألمانية ترميه إلى آخر الجملة.', anchor: 'Ich muss früh aufstehen.' },
      { trick: 'muss بـ ss لا ß', wie: 'ich muss · du musst · er muss — الكتابة الحديثة بلا ß هنا.', warum: 'الكتب القديمة تكتب muß، والامتحان يعدّها خطأ إملائيًا منذ الإصلاح.', anchor: 'Ich muss lernen.' }
    ],
    order: [
      { satz: 'Ich | muss | früh | aufstehen.', ar: 'يجب أن أنهض مبكرًا.' },
      { satz: 'Sie | kann | gut | singen.', ar: 'هي تستطيع الغناء جيدًا.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل: شيئان تستطيع فعلهما جيدًا، شيء لا تستطيعه بعد، وشيئان يجب أن تفعلهما هذا الأسبوع.',
      promptDe: 'Ich kann gut … · Ich kann auch … · Ich kann noch nicht … · Ich muss diese Woche … · Ich muss unbedingt …',
      points: ['kann مرتين مع مصدر في الآخر', 'muss مرتين', 'noch nicht', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'konjugation'
    }
  }
};

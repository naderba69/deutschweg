/* Deutschweg — P3.2 lexical layer, A1 unit 2 (part b): a1-u2-l4 … a1-u2-l6. */

module.exports = {

  'a1-u2-l4': {
    items: [
      ['der Montag', 'die Montage', 'الاثنين', 'Am Montag habe ich frei.', 'In Montag habe ich frei.', 'اليوم يأخذ am.', 'präposition'],
      ['der Dienstag', 'die Dienstage', 'الثلاثاء', 'Am Dienstag kommt der Kurs.', 'In Dienstag kommt der Kurs.', 'am للتواريخ والأيام.', 'präposition'],
      ['der Mittwoch', 'die Mittwoche', 'الأربعاء', 'Am Mittwoch ist der Termin.', 'In Mittwoch ist der Termin.', 'am للأيام.', 'präposition'],
      ['der Donnerstag', 'die Donnerstage', 'الخميس', 'Am Donnerstag arbeite ich.', 'In Donnerstag arbeite ich.', 'اليوم يأخذ am.', 'präposition'],
      ['der Freitag', 'die Freitage', 'الجمعة', 'Am Freitag gehe ich einkaufen.', 'In Freitag gehe ich einkaufen.', 'am لا in.', 'präposition'],
      ['der Samstag', 'die Samstage', 'السبت', 'Am Samstag schlafe ich lange.', 'In Samstag schlafe ich lange.', 'اليوم يأخذ am.', 'präposition'],
      ['der Sonntag', 'die Sonntage', 'الأحد', 'Am Sonntag ist alles zu.', 'In Sonntag ist alles zu.', 'am للأيام.', 'präposition'],
      ['der Januar', 'die Januare', 'يناير', 'Im Januar ist es kalt.', 'In Januar ist es kalt.', 'الشهر يأخذ im.', 'präposition'],
      ['der Mai', 'die Maie', 'مايو', 'Im Mai ist es warm.', 'In Mai ist es warm.', 'الشهر يأخذ im.', 'präposition'],
      ['der Monat', 'die Monate', 'الشهر', 'Der Monat hat dreißig Tage.', 'Der Monat hat dreißig Tag.', 'بعد العدد جمع: Tage.', 'plural'],
      ['das Jahr', 'die Jahre', 'السنة', 'Das Jahr hat zwölf Monate.', 'Das Jahr hat zwölf Monat.', 'جمع Monat هو Monate.', 'plural'],
      ['der Sommer', 'die Sommer', 'الصيف', 'Im Sommer fahren wir ans Meer.', 'In Sommer fahren wir ans Meer.', 'الفصل يأخذ im.', 'präposition'],
      ['der Winter', 'die Winter', 'الشتاء', 'Im Winter schneit es.', 'In Winter schneit es.', 'الفصل يأخذ im.', 'präposition'],
      ['der Frühling', 'die Frühlinge', 'الربيع', 'Im Frühling sind die Tage lang.', 'In Frühling sind die Tage lang.', 'im للفصل.', 'präposition'],
      ['der Herbst', 'die Herbste', 'الخريف', 'Im Herbst regnet es oft.', 'In Herbst regnet es oft.', 'im لا in.', 'präposition'],
      ['der Mittag', 'die Mittage', 'الظهيرة', 'Zu Mittag esse ich in der Kantine.', 'In Mittag esse ich in der Kantine.', 'الظهيرة تأخذ zu: zu Mittag.', 'präposition'],
      ['der Vormittag', 'die Vormittage', 'قبل الظهر', 'Am Vormittag habe ich Deutsch.', 'In Vormittag habe ich Deutsch.', 'am Vormittag.', 'präposition'],
      ['der Nachmittag', 'die Nachmittage', 'بعد الظهر', 'Am Nachmittag lerne ich.', 'In Nachmittag lerne ich.', 'am Nachmittag.', 'präposition'],
      ['die Nacht', 'die Nächte', 'الليل', 'In der Nacht schlafe ich.', 'In der Nacht ich schlafe.', 'الفعل ثانٍ بعد الظرف.', 'wortstellung'],
      ['der Feiertag', 'die Feiertage', 'العطلة الرسمية', 'Am Feiertag ist die Bank zu.', 'In Feiertag ist die Bank zu.', 'اليوم يأخذ am.', 'präposition'],
      ['beginnen', 'beginnt · begann', 'يبدأ', 'Der Kurs beginnt am Montag.', 'Der Kurs beginnt in Montag.', 'الموعد يأخذ am.', 'präposition', 'beginnt'],
      ['geöffnet', '—', 'مفتوح', 'Am Sonntag ist das Geschäft nicht geöffnet.', 'In Sonntag ist das Geschäft nicht geöffnet.', 'am لليوم.', 'präposition'],
      ['geschlossen', '—', 'مغلق', 'Am Montag ist die Bank geschlossen.', 'In Montag ist die Bank geschlossen.', 'am لليوم.', 'präposition'],
      ['frei', '—', 'عاطل · حرّ', 'Am Freitag habe ich frei.', 'In Freitag habe ich frei.', 'frei مع اليوم بـ am.', 'präposition'],
      ['kalt', '—', 'بارد', 'Im Januar ist es sehr kalt.', 'In Januar ist es sehr kalt.', 'الشهر يأخذ im.', 'präposition'],
      ['warm', '—', 'دافئ', 'Im Mai ist es angenehm warm.', 'In Mai ist es angenehm warm.', 'im للشهر.', 'präposition'],
      ['lange', '—', 'طويلًا', 'Am Samstag schlafe ich lange.', 'Am Samstag ich schlafe lange.', 'الظرف الأول والفعل ثانٍ.', 'wortstellung'],
      ['regnen', 'regnet · regnete', 'تُمطر', 'Im Herbst regnet es viel.', 'In Herbst regnet es viel.', 'im للفصل.', 'präposition', 'regnet']
    ],
    tricks: [
      { trick: 'um للساعة وam لليوم وim للشهر والفصل', wie: 'um acht · am Montag · im Mai.', warum: 'قاعدة واحدة تجمع ثلاثة حروف، والخطأ فيها يُسمع في كل جملة.', anchor: 'Der Kurs ist um acht am Montag im Mai.' },
      { trick: 'am = an + dem', wie: 'am Montag · am Abend · am Wochenende.', warum: 'من يفكّك am يعرف من أين جاءت الميم، فلا يكتب an dem خطأً.', anchor: 'Ich komme am Montag.' },
      { trick: 'im = in + dem للشهر والفصل', wie: 'im Mai · im Sommer · im Winter.', warum: 'الشهر والفصل يأخذان im، وتبقى um للساعة وحدها.', anchor: 'Im Mai ist es warm.' }
    ]
  },

  'a1-u2-l5': {
    items: [
      ['in der Stadt', '—', 'في المدينة', 'Ich wohne in der Stadt.', 'Ich wohne in die Stadt.', 'مكان السكون يأخذ الداتيف: in der Stadt.', 'kasus', 'der'],
      ['auf dem Tisch', '—', 'على الطاولة', 'Das Buch liegt auf dem Tisch.', 'Das Buch liegt auf den Tisch.', 'liegen مع السكون: auf dem Tisch.', 'kasus', 'dem'],
      ['an der Wand', '—', 'على الحائط', 'Das Bild hängt an der Wand.', 'Das Bild hängt an die Wand.', 'hängen للسكون: an der Wand.', 'kasus', 'der'],
      ['neben dem Bett', '—', 'بجانب السرير', 'Die Lampe steht neben dem Bett.', 'Die Lampe steht neben das Bett.', 'stehen مع الداتيف: neben dem Bett.', 'kasus', 'dem'],
      ['unter dem Tisch', '—', 'تحت الطاولة', 'Die Katze schläft unter dem Tisch.', 'Die Katze schläft unter den Tisch.', 'السكون يأخذ dem.', 'kasus', 'dem'],
      ['über dem Sofa', '—', 'فوق الأريكة', 'Die Uhr hängt über dem Sofa.', 'Die Uhr hängt über das Sofa.', 'über مع السكون: dem.', 'kasus', 'dem'],
      ['vor der Tür', '—', 'أمام الباب', 'Ich warte vor der Tür.', 'Ich warte vor die Tür.', 'vor مع السكون: der.', 'kasus', 'der'],
      ['hinter dem Haus', '—', 'خلف البيت', 'Der Garten ist hinter dem Haus.', 'Der Garten ist hinter das Haus.', 'hinter مع السكون: dem.', 'kasus', 'dem'],
      ['zwischen den Stühlen', '—', 'بين الكراسي', 'Der Tisch steht zwischen den Stühlen.', 'Der Tisch steht zwischen die Stühlen.', 'zwischen مع الجمع: den.', 'kasus', 'den'],
      ['die Stadt', 'die Städte', 'المدينة', 'Die Stadt ist groß.', 'Das Stadt ist groß.', 'Stadt مؤنث: die.', 'genus'],
      ['das Dorf', 'die Dörfer', 'القرية', 'Mein Dorf ist klein.', 'Meine Dorf ist klein.', 'Dorf محايد: mein Dorf.', 'genus'],
      ['die Straße', 'die Straßen', 'الشارع', 'Die Straße ist lang.', 'Der Straße ist lang.', 'Straße مؤنث: die.', 'genus'],
      ['die Küche', 'die Küchen', 'المطبخ', 'Die Küche ist hell.', 'Der Küche ist hell.', 'Küche مؤنث: die.', 'genus'],
      ['das Bad', 'die Bäder', 'الحمّام', 'Das Bad ist klein.', 'Der Bad ist klein.', 'Bad محايد: das.', 'genus'],
      ['der Balkon', 'die Balkone', 'الشرفة', 'Der Balkon ist sonnig.', 'Das Balkon ist sonnig.', 'Balkon مذكر: der.', 'genus'],
      ['der Garten', 'die Gärten', 'الحديقة', 'Der Garten ist grün.', 'Die Garten ist grün.', 'Garten مذكر: der.', 'genus'],
      ['die Apotheke', 'die Apotheken', 'الصيدلية', 'Die Apotheke ist neben der Bank.', 'Die Apotheke ist neben die Bank.', 'neben مع السكون: der Bank.', 'kasus'],
      ['die Bank', 'die Banken', 'المصرف', 'Die Bank ist neben der Apotheke.', 'Die Bank ist neben die Apotheke.', 'السكون يأخذ der.', 'kasus'],
      ['der Bahnhof', 'die Bahnhöfe', 'محطة القطار', 'Der Bahnhof ist in der Nähe.', 'Der Bahnhof ist in die Nähe.', 'in der Nähe تعبير ثابت.', 'kasus'],
      ['die Post', '—', 'البريد', 'Wo ist die Post?', 'Wo die Post ist?', 'الفعل ثانٍ في السؤال.', 'wortstellung'],
      ['das Regal', 'die Regale', 'الرفّ', 'Die Bücher stehen im Regal.', 'Die Bücher stehen in Regal.', 'in + dem = im.', 'präposition'],
      ['der Kühlschrank', 'die Kühlschränke', 'الثلاجة', 'Die Milch ist im Kühlschrank.', 'Die Milch ist in Kühlschrank.', 'in + dem = im.', 'präposition'],
      ['das Sofa', 'die Sofas', 'الأريكة', 'Ich sitze auf dem Sofa.', 'Ich sitze auf das Sofa.', 'sitzen مع السكون: dem.', 'kasus'],
      ['die Lampe', 'die Lampen', 'المصباح', 'Die Lampe ist neben dem Sofa.', 'Die Lampe ist neben das Sofa.', 'neben مع السكون: dem.', 'kasus'],
      ['die Ecke', 'die Ecken', 'الزاوية', 'Der Laden ist an der Ecke.', 'Der Laden ist an die Ecke.', 'an der Ecke للسكون.', 'kasus'],
      ['stehen', 'steht · stand', 'يقف · يقع', 'Die Lampe steht neben dem Bett.', 'Die Lampe steht neben das Bett.', 'stehen مع المكان: داتيف.', 'kasus', 'steht'],
      ['hängen', 'hängt · hing', 'يتعلّق', 'Das Bild hängt an der Wand.', 'Das Bild hängt an die Wand.', 'hängen للسكون: an der Wand.', 'kasus', 'hängt'],
      ['sitzen', 'sitzt · saß', 'يجلس', 'Ich sitze auf dem Stuhl.', 'Ich sitze auf den Stuhl.', 'sitzen مع السكون: dem.', 'kasus', 'sitze']
    ],
    tricks: [
      { trick: 'السكون يأخذ الداتيف', wie: 'Wo? ← auf dem Tisch · an der Wand · in der Stadt.', warum: 'سؤال wo يُجاب عنه بالداتيف دائمًا، وهو أول ما يختلط مع النصب.', anchor: 'Das Buch liegt auf dem Tisch.' },
      { trick: 'dem للمذكر والمحايد وder للمؤنث', wie: 'auf dem Tisch · auf dem Sofa · an der Wand.', warum: 'الأداة وحدها تكشف الجنس، وحفظها مع الكلمة أرخص من حفظ الجنس مجرّدًا.', anchor: 'Das Bild hängt an der Wand.' },
      { trick: 'neben · unter · über لا تتغيّر مع السكون', wie: 'neben dem Bett · unter dem Tisch · über dem Sofa.', warum: 'كلها داتيف في السكون، وجمعها في صورة واحدة يمنع الخطأ المتكرر.', anchor: 'Die Lampe steht neben dem Bett.' }
    ]
  },

  'a1-u2-l6': {
    items: [
      ['das Haus', 'die Häuser', 'البيت', 'Zwei Häuser sind alt.', 'Zwei Haus sind alt.', 'جمع Haus هو Häuser.', 'plural', 'Häuser'],
      ['der Baum', 'die Bäume', 'الشجرة', 'Die Bäume sind grün.', 'Die Baum sind grün.', 'بعد die يأتي جمع: Bäume.', 'plural', 'Bäume'],
      ['die Hand', 'die Hände', 'اليد', 'Meine Hände sind kalt.', 'Meine Hande sind kalt.', 'الجمع Hände بالأوملاوت.', 'plural', 'Hände'],
      ['der Fuß', 'die Füße', 'القدم', 'Meine Füße sind müde.', 'Meine Fusse sind müde.', 'الجمع Füße بـ ü وبـ ß.', 'plural', 'Füße'],
      ['das Auge', 'die Augen', 'العين', 'Ihre Augen sind braun.', 'Ihre Auge sind braun.', 'جمع Auge هو Augen.', 'plural', 'Augen'],
      ['das Ohr', 'die Ohren', 'الأذن', 'Die Ohren tun weh.', 'Die Ohr tun weh.', 'جمع Ohr هو Ohren.', 'plural', 'Ohren'],
      ['der Zahn', 'die Zähne', 'السنّ', 'Die Zähne sind weiß.', 'Die Zahn sind weiß.', 'جمع Zahn هو Zähne.', 'plural', 'Zähne'],
      ['der Arm', 'die Arme', 'الذراع', 'Seine Arme sind stark.', 'Seine Arm sind stark.', 'جمع Arm هو Arme.', 'plural', 'Arme'],
      ['das Bein', 'die Beine', 'الساق', 'Die Beine sind lang.', 'Die Bein sind lang.', 'جمع Bein هو Beine.', 'plural', 'Beine'],
      ['der Kopf', 'die Köpfe', 'الرأس', 'Auf dem Bild sind zwei Köpfe.', 'Auf dem Bild sind zwei Kopf.', 'جمع Kopf هو Köpfe.', 'plural', 'Köpfe'],
      ['der Bauch', 'die Bäuche', 'البطن', 'Die Kinder haben volle Bäuche.', 'Die Kinder haben volle Bauch.', 'جمع Bauch هو Bäuche.', 'plural', 'Bäuche'],
      ['der Rücken', 'die Rücken', 'الظهر', 'Unsere Rücken tun weh.', 'Unsere Rucken tun weh.', 'الجمع Rücken بأوملاوت بلا نهاية.', 'plural', 'Rücken'],
      ['das Hemd', 'die Hemden', 'القميص', 'Die Hemden sind teuer.', 'Die Hemd sind teuer.', 'جمع Hemd هو Hemden.', 'plural', 'Hemden'],
      ['die Hose', 'die Hosen', 'البنطال', 'Zwei Hosen kosten fünfzig Euro.', 'Zwei Hose kosten fünfzig Euro.', 'جمع Hose هو Hosen.', 'plural', 'Hosen'],
      ['das Kleid', 'die Kleider', 'الفستان', 'Die Kleider sind schön.', 'Die Kleid sind schön.', 'جمع Kleid هو Kleider.', 'plural', 'Kleider'],
      ['der Rock', 'die Röcke', 'الجيبة', 'Die Röcke sind kurz.', 'Die Rock sind kurz.', 'جمع Rock هو Röcke.', 'plural', 'Röcke'],
      ['die Socke', 'die Socken', 'الجورب', 'Zwei Socken sind weiß.', 'Zwei Socke sind weiß.', 'بعد العدد جمع: Socken.', 'plural', 'Socken'],
      ['das T-Shirt', 'die T-Shirts', 'القميص القصير', 'Die T-Shirts sind neu.', 'Die T-Shirt sind neu.', 'الأجنبي يأخذ s في الجمع.', 'plural', 'T-Shirts'],
      ['das Ei', 'die Eier', 'البيضة', 'Sechs Eier, bitte.', 'Sechs Ei, bitte.', 'جمع Ei هو Eier.', 'plural', 'Eier'],
      ['die Kartoffel', 'die Kartoffeln', 'البطاطس', 'Zwei Kartoffeln sind hart.', 'Zwei Kartoffel sind hart.', 'جمع Kartoffel هو Kartoffeln.', 'plural', 'Kartoffeln'],
      ['die Tomate', 'die Tomaten', 'الطماطم', 'Die Tomaten sind rot.', 'Die Tomate sind rot.', 'الجمع Tomaten، وهو الذي يوافق الفعل.', 'plural', 'Tomaten'],
      ['die Banane', 'die Bananen', 'الموز', 'Ich kaufe drei Bananen.', 'Ich kaufe drei Banane.', 'بعد drei يأتي الجمع Bananen.', 'plural', 'Bananen'],
      ['die Orange', 'die Orangen', 'البرتقال', 'Die Orangen sind süß.', 'Die Orange sind süß.', 'الجمع Orangen مع الفعل الجمع.', 'plural', 'Orangen'],
      ['der Junge', 'die Jungen', 'الصبي', 'Die Jungen spielen Fußball.', 'Die Junge spielen Fußball.', 'الجمع Jungen، وهو الذي يوافق الفعل.', 'plural', 'Jungen'],
      ['das Mädchen', 'die Mädchen', 'الفتاة', 'Die Mädchen lernen Deutsch.', 'Die Mädchens lernen Deutsch.', 'Mädchen لا تتغيّر في الجمع.', 'plural', 'Mädchen'],
      ['der Hund', 'die Hunde', 'الكلب', 'Die Hunde bellen laut.', 'Die Hund bellen laut.', 'جمع Hund هو Hunde.', 'plural', 'Hunde'],
      ['die Katze', 'die Katzen', 'القطة', 'Die Katzen schlafen viel.', 'Die Katze schlafen viel.', 'الجمع Katzen يوافق الفعل الجمع.', 'plural', 'Katzen'],
      ['das Tier', 'die Tiere', 'الحيوان', 'Die Tiere sind im Garten.', 'Die Tier sind im Garten.', 'جمع Tier هو Tiere.', 'plural', 'Tiere']
    ],
    tricks: [
      { trick: 'خمس نهايات تكفي', wie: '-e · -er · -(e)n · -s · بلا نهاية: Tage · Häuser · Frauen · Autos · Zimmer.', warum: 'الجموع الألمانية ليست قاعدة واحدة، فحفظ النهاية مع الكلمة هو الطريق.', anchor: 'Ich habe zwei Kinder und zwei Autos.' },
      { trick: 'كلمات البيت والجسم تتحرّك غالبًا', wie: 'Haus ← Häuser · Kopf ← Köpfe · Fuß ← Füße.', warum: 'الحركة الصوتية تأتي مع الجمع في هذه العائلات، وهي خطأ المتعلم الأول.', anchor: 'Die Häuser sind alt.' },
      { trick: 'المؤنث يأخذ -n أو -en', wie: 'Frau ← Frauen · Kartoffel ← Kartoffeln · Katze ← Katzen.', warum: 'معظم الأسماء المؤنثة في هذه العائلة، وهي أسهل ما يُستنتج بلا حفظ.', anchor: 'Die Frauen arbeiten hier.' }
    ]
  }

};

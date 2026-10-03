/* Deutschweg — P3.5 lexical layer, A2 unit 2 (part b): a2-u2-l4 … a2-u2-l6.
   Adjektivendungen im Akkusativ, Reflexivverben, Präteritum von sein und haben. */

module.exports = {

  'a2-u2-l4': {
    items: [
      ['den neuen Kollegen', '—', 'الزميل الجديد (نصب)', 'Ich kenne den neuen Kollegen.', 'Ich kenne der neue Kollege.', 'النصب المذكر: den neuen.', 'kasus', 'neuen'],
      ['die kleine Wohnung', '—', 'الشقة الصغيرة (نصب)', 'Wir mieten die kleine Wohnung.', 'Wir mieten der kleine Wohnung.', 'die تبقى في النصب.', 'kasus', 'kleine'],
      ['das große Haus', '—', 'البيت الكبير (نصب)', 'Wir kaufen das große Haus.', 'Wir kaufen dem große Haus.', 'das تبقى في النصب.', 'kasus', 'große'],
      ['die alten Häuser', '—', 'البيوت القديمة (نصب)', 'Ich sehe die alten Häuser.', 'Ich sehe der alten Häuser.', 'الجمع في النصب: die.', 'kasus', 'alten'],
      ['einen guten Freund', '—', 'صديقًا جيدًا', 'Ich habe einen guten Freund.', 'Ich habe ein guter Freund.', 'النصب المذكر: einen guten.', 'kasus', 'guten'],
      ['eine gute Idee', '—', 'فكرة جيدة (نصب)', 'Ich habe eine gute Idee.', 'Ich habe einer gute Idee.', 'المؤنث في النصب: eine.', 'kasus', 'gute'],
      ['ein kleines Kind', '—', 'طفلًا صغيرًا', 'Ich sehe ein kleines Kind.', 'Ich sehe einem kleines Kind.', 'المحايد في النصب: ein.', 'kasus', 'kleines'],
      ['keinen freien Tag', '—', 'لا يوم فراغ', 'Ich habe keinen freien Tag.', 'Ich habe keine freie Tag.', 'المذكر في النصب: keinen.', 'kasus', 'freien'],
      ['meinen alten Nachbarn', '—', 'جاري القديم (نصب)', 'Ich besuche meinen alten Nachbarn.', 'Ich besuche mein alter Nachbar.', 'meinen alten.', 'kasus', 'alten'],
      ['den roten Pullover', '—', 'الكنزة الحمراء (نصب)', 'Ich nehme den roten Pullover.', 'Ich nehme der rote Pullover.', 'den roten.', 'kasus', 'roten'],
      ['die blaue Jacke', '—', 'الجاكيت الأزرق (نصب)', 'Ich kaufe die blaue Jacke.', 'Ich kaufe der blaue Jacke.', 'die للمؤنث في النصب.', 'kasus', 'blaue'],
      ['das weiße Hemd', '—', 'القميص الأبيض (نصب)', 'Ich nehme das weiße Hemd.', 'Ich nehme dem weiße Hemd.', 'das بلا تغيير.', 'kasus', 'weiße'],
      ['die schwarzen Schuhe', '—', 'الأحذية السوداء (نصب)', 'Ich kaufe die schwarzen Schuhe.', 'Ich kaufe der schwarzen Schuhe.', 'الجمع في النصب die.', 'kasus', 'schwarzen'],
      ['den freundlichen Verkäufer', '—', 'البائع الودود (نصب)', 'Ich frage den freundlichen Verkäufer.', 'Ich frage dem freundlicher Verkäufer.', 'den freundlichen.', 'kasus', 'freundlichen'],
      ['die ruhige Straße', '—', 'الشارع الهادئ (نصب)', 'Ich nehme die ruhige Straße.', 'Ich nehme der ruhige Straße.', 'die في النصب.', 'kasus', 'ruhige'],
      ['das billige Hotel', '—', 'الفندق الرخيص (نصب)', 'Wir nehmen das billige Hotel.', 'Wir nehmen dem billige Hotel.', 'das في النصب.', 'kasus', 'billige'],
      ['die frische Milch', '—', 'الحليب الطازج (نصب)', 'Ich kaufe die frische Milch.', 'Ich kaufe der frische Milch.', 'die للمؤنث.', 'kasus', 'frische'],
      ['den warmen Tee', '—', 'الشاي الساخن (نصب)', 'Ich trinke den warmen Tee.', 'Ich trinke der warme Tee.', 'den warmen.', 'kasus', 'warmen'],
      ['das kalte Wasser', '—', 'الماء البارد (نصب)', 'Ich nehme das kalte Wasser.', 'Ich nehme dem kalte Wasser.', 'das بلا تغيير.', 'kasus', 'kalte'],
      ['die leere Flasche', '—', 'القنينة الفارغة (نصب)', 'Ich bringe die leere Flasche mit.', 'Ich bringe der leere Flasche mit.', 'die في النصب.', 'kasus', 'leere'],
      ['den neuen Job', '—', 'العمل الجديد (نصب)', 'Sie sucht den neuen Job.', 'Sie sucht der neue Job.', 'den neuen.', 'kasus', 'neuen'],
      ['die letzte Chance', '—', 'الفرصة الأخيرة (نصب)', 'Ich nutze die letzte Chance.', 'Ich nutze der letzte Chance.', 'die في النصب.', 'kasus', 'letzte'],
      ['das erste Mal', '—', 'المرة الأولى (نصب)', 'Ich erlebe das erste Mal.', 'Ich erlebe dem erste Mal.', 'das في النصب.', 'kasus', 'erste'],
      ['die kleinen Kinder', '—', 'الأطفال الصغار (نصب)', 'Ich sehe die kleinen Kinder.', 'Ich sehe der kleinen Kinder.', 'الجمع die في النصب.', 'kasus', 'kleinen'],
      ['den guten Preis', '—', 'الثمن الجيد (نصب)', 'Er findet den guten Preis.', 'Er findet der gute Preis.', 'den guten.', 'kasus', 'guten'],
      ['die grüne Lampe', '—', 'المصباح الأخضر (نصب)', 'Ich kaufe die grüne Lampe.', 'Ich kaufe der grüne Lampe.', 'die في النصب.', 'kasus', 'grüne']
    ],
    tricks: [
      { trick: 'في النصب يتغيّر المذكر وحده: den neuen', wie: 'Ich kenne den neuen Kollegen. · Ich habe einen guten Freund. · Ich sehe ein kleines Kind.', warum: 'العربية لا تُظهر حالة المفعول، فالعلامة n في den neuen هي كل الفرق في الجملة.', anchor: 'den neuen Kollegen' },
      { trick: 'die وdas لا تتغيّران في النصب، والوصف يأخذ e', wie: 'die kleine Wohnung · das große Haus · die neuen Häuser.', warum: 'حفظ أن التغيير في المذكر وحده يمنع تعميم den على المؤنث والمحايد.', anchor: 'die kleine Wohnung' },
      { trick: 'الجمع مع die في النصب: الوصف en', wie: 'Ich sehe die alten Häuser. Ich kaufe die schwarzen Schuhe.', warum: 'الجمع يأخذ en في الرفع والنصب، فالقاعدة واحدة تُغني عن جدولين.', anchor: 'die alten Häuser' }
    ]
  },

  'a2-u2-l5': {
    items: [
      ['sich freuen', 'freut sich · freute sich · hat sich gefreut', 'يفرح', 'Ich freue mich auf den Urlaub.', 'Ich freue mich für den Urlaub.', 'الفرح المنتظر: auf.', 'präposition', 'freue'],
      ['sich interessieren', 'interessiert sich · interessierte sich · hat sich interessiert', 'يهتم بـ', 'Ich interessiere mich für Musik.', 'Ich interessiere Musik.', 'الاهتمام يحتاج für.', 'präposition', 'interessiere'],
      ['sich ärgern', 'ärgert sich · ärgerte sich · hat sich geärgert', 'يغضب', 'Er ärgert sich über den Lärm.', 'Er ärgert sich für den Lärm.', 'الغضب من شيء: über.', 'präposition', 'ärgert'],
      ['sich erinnern', 'erinnert sich · erinnerte sich · hat sich erinnert', 'يتذكّر', 'Ich erinnere mich an den Tag.', 'Ich erinnere mich den Tag.', 'التذكّر يحتاج an.', 'präposition', 'erinnere'],
      ['sich entscheiden', 'entscheidet sich · entschied sich · hat sich entschieden', 'يقرّر', 'Wir entscheiden uns für den Zug.', 'Wir entscheiden uns den Zug.', 'القرار لصالح شيء: für.', 'präposition', 'entscheiden'],
      ['sich treffen', 'trifft sich · traf sich · hat sich getroffen', 'يلتقي', 'Wir treffen uns um sechs.', 'Wir treffen um sechs.', 'الفعل الانعكاسي يحتاج uns.', 'konjugation', 'treffen'],
      ['sich setzen', 'setzt sich · setzte sich · hat sich gesetzt', 'يجلس', 'Setz dich bitte hierhin.', 'Setz bitte hierhin.', 'الضمير الانعكاسي dich لا يُحذف.', 'konjugation', 'Setz'],
      ['sich waschen', 'wäscht sich · wusch sich · hat sich gewaschen', 'يغتسل', 'Ich wasche mich morgens kalt.', 'Ich wasche morgens kalt.', 'الفعل يحتاج mich.', 'konjugation', 'wasche'],
      ['sich anziehen', 'zieht sich an · zog sich an · hat sich angezogen', 'يلبس', 'Ich ziehe mich schnell an.', 'Ich ziehe schnell an.', 'الضمير قبل الفعل المنفصل.', 'wortstellung', 'ziehe'],
      ['sich ausruhen', 'ruht sich aus · ruhte sich aus · hat sich ausgeruht', 'يستريح', 'Nach der Arbeit ruhe ich mich aus.', 'Nach der Arbeit ruhe ich aus.', 'الضمير mich ضروري.', 'konjugation', 'ruhe'],
      ['sich beeilen', 'beeilt sich · beeilte sich · hat sich beeilt', 'يستعجل', 'Beeil dich, der Zug fährt gleich!', 'Beeil, der Zug fährt gleich!', 'الأمر الانعكاسي يحتاج dich.', 'konjugation', 'Beeil'],
      ['sich langweilen', 'langweilt sich · langweilte sich · hat sich gelangweilt', 'يملّ', 'Die Kinder langweilen sich.', 'Die Kinder langweilen.', 'بدون sich يتغيّر المعنى إلى «يُمِلّ».', 'konjugation', 'langweilen'],
      ['sich vorstellen', 'stellt sich vor · stellte sich vor · hat sich vorgestellt', 'يقدّم نفسه', 'Darf ich mich vorstellen?', 'Darf ich vorstellen?', 'الضمير mich قبل الفعل.', 'wortstellung', 'vorstellen'],
      ['sich kümmern', 'kümmert sich · kümmerte sich · hat sich gekümmert', 'يعتني', 'Ich kümmere mich um die Kinder.', 'Ich kümmere die Kinder.', 'العناية بـ um.', 'präposition', 'kümmere'],
      ['sich verabreden', 'verabredet sich · verabredete sich · hat sich verabredet', 'يتواعد', 'Wir verabreden uns für morgen.', 'Wir verabreden für morgen.', 'الضمير uns.', 'konjugation', 'verabreden'],
      ['sich umziehen', 'zieht sich um · zog sich um · hat sich umgezogen', 'يبدّل ملابسه', 'Ich ziehe mich um.', 'Ich ziehe um.', 'بدون sich يتغيّر المعنى إلى «ينتقل سكنًا».', 'konjugation', 'ziehe'],
      ['sich fühlen', 'fühlt sich · fühlte sich · hat sich gefühlt', 'يشعر', 'Ich fühle mich gut.', 'Ich fühle gut.', 'الفعل يحتاج mich.', 'konjugation', 'fühle'],
      ['sich verletzen', 'verletzt sich · verletzte sich · hat sich verletzt', 'يجرح نفسه', 'Er hat sich beim Sport verletzt.', 'Er hat beim Sport verletzt.', 'الضمير sich ضروري.', 'konjugation', 'verletzt'],
      ['sich unterhalten', 'unterhält sich · unterhielt sich · hat sich unterhalten', 'يتحدّث ويتسامر', 'Wir unterhalten uns über den Film.', 'Wir unterhalten über den Film.', 'الضمير uns.', 'konjugation', 'unterhalten'],
      ['sich gewöhnen', 'gewöhnt sich · gewöhnte sich · hat sich gewöhnt', 'يعتاد', 'Ich gewöhne mich an das Wetter.', 'Ich gewöhne mich das Wetter.', 'التعوّد على: an.', 'präposition', 'gewöhne'],
      ['die Freizeit', '—', 'وقت الفراغ', 'In meiner Freizeit interessiere ich mich für Sport.', 'In meiner Freizeit interessiere ich für Sport.', 'الفعل الانعكاسي: mich.', 'konjugation', 'Freizeit'],
      ['die Musik', '—', 'الموسيقى', 'Ich interessiere mich für Musik.', 'Ich interessiere für Musik.', 'mich لا تُحذف.', 'konjugation', 'Musik'],
      ['der Sport', '—', 'الرياضة', 'Er interessiert sich für Sport.', 'Er interessiert für Sport.', 'sich ضرورية.', 'konjugation', 'Sport'],
      ['der Termin', 'die Termine', 'الموعد', 'Wir treffen uns für den Termin.', 'Wir treffen für den Termin.', 'uns ضرورية.', 'konjugation', 'Termin'],
      ['die Nachricht', 'die Nachrichten', 'الرسالة', 'Ich freue mich über die Nachricht.', 'Ich freue mich für die Nachricht.', 'الفرح الحاصل: über.', 'präposition', 'Nachricht'],
      ['der Urlaub', 'die Urlaube', 'العطلة', 'Ich freue mich auf den Urlaub.', 'Ich freue mich für den Urlaub.', 'المنتظر: auf.', 'präposition', 'Urlaub']
    ],
    tricks: [
      { trick: 'أفعال انعكاسية بحروف ثابتة: sich freuen auf · sich interessieren für · sich ärgern über', wie: 'Ich freue mich auf den Urlaub. Ich interessiere mich für Musik. Er ärgert sich über den Lärm.', warum: 'الحرف لا يُترجم من العربية («أهتم بالموسيقى» بحرف الباء)، فيُحفظ مع الفعل كوحدة.', anchor: 'sich freuen' },
      { trick: 'الضمير الانعكاسي يتبع الفاعل: ich mich · du dich · er sich', wie: 'Ich wasche mich. Wasch dich! Er wäscht sich. Wir waschen uns.', warum: 'العربية تقول «أغتسل» بلا ضمير، فالمتعلم يحذف mich فيصير الفعل ناقصًا.', anchor: 'sich waschen' },
      { trick: 'مع الفعل المنفصل يقف الضمير قبل an: ich ziehe mich an', wie: 'Ich ziehe mich an. Ich ruhe mich aus. Ich stelle mich vor.', warum: 'الضمير جزء من الفعل الانعكاسي، ولا يُترك في النهاية مع an.', anchor: 'sich anziehen' }
    ]
  },

  'a2-u2-l6': {
    items: [
      ['war', '—', 'كان (ماضي sein)', 'Gestern war ich zu Hause.', 'Gestern ich war zu Hause.', 'الفعل ثانٍ بعد الظرف.', 'wortstellung', 'war'],
      ['waren', '—', 'كانوا (ماضي sein)', 'Wir waren im Kino.', 'Wir sind im Kino gewesen gestern.', 'الماضي البسيط هنا: waren.', 'konjugation', 'waren'],
      ['hatte', '—', 'كان عنده (ماضي haben)', 'Ich hatte keine Zeit.', 'Ich habe keine Zeit gehabt gestern.', 'الألمانية تفضّل hatte هنا.', 'konjugation', 'hatte'],
      ['hatten', '—', 'كان عندهم (ماضي haben)', 'Wir hatten viel Arbeit.', 'Wir haben viel Arbeit gehabt.', 'الماضي البسيط: hatten.', 'konjugation', 'hatten'],
      ['die Kindheit', '—', 'الطفولة', 'Meine Kindheit war schön.', 'Meine Kindheit hat schön gewesen.', 'الوصف في الماضي: war.', 'konjugation', 'Kindheit'],
      ['gestern', '—', 'أمس', 'Gestern war das Wetter besser.', 'Gestern das Wetter war besser.', 'الفعل ثانٍ: war.', 'wortstellung', 'gestern'],
      ['früher', '—', 'سابقًا', 'Früher waren wir oft am Meer.', 'Früher wir waren oft am Meer.', 'الفعل ثانٍ.', 'wortstellung', 'früher'],
      ['das Wetter', '—', 'الطقس', 'Das Wetter war kalt.', 'Das Wetter hat kalt gewesen.', 'war لا hat gewesen.', 'konjugation', 'Wetter'],
      ['die Zeit', '—', 'الوقت', 'Ich hatte wenig Zeit.', 'Ich habe wenig Zeit gehabt.', 'hatte أفضل هنا.', 'konjugation', 'Zeit'],
      ['der Hunger', '—', 'الجوع', 'Wir hatten großen Hunger.', 'Wir waren großen Hunger.', 'الجوع مع haben لا sein.', 'konjugation', 'Hunger'],
      ['der Durst', '—', 'العطش', 'Ich hatte Durst.', 'Ich war Durst.', 'Durst مع haben.', 'konjugation', 'Durst'],
      ['die Angst', 'die Ängste', 'الخوف', 'Als Kind hatte ich Angst.', 'Als Kind war ich Angst.', 'الخوف مع haben.', 'konjugation', 'Angst'],
      ['müde', '—', 'متعب', 'Nach der Arbeit war ich müde.', 'Nach der Arbeit ich war müde.', 'الفعل ثانٍ بعد الظرف.', 'wortstellung', 'müde'],
      ['glücklich', '—', 'سعيد', 'Sie war sehr glücklich.', 'Sie hat sehr glücklich gewesen.', 'war لا hat gewesen.', 'konjugation', 'glücklich'],
      ['krank', '—', 'مريض', 'Letzte Woche war ich krank.', 'Letzte Woche ich war krank.', 'الفعل ثانٍ.', 'wortstellung', 'krank'],
      ['der Geburtstag', 'die Geburtstage', 'عيد الميلاد', 'Mein Geburtstag war am Montag.', 'Mein Geburtstag hat am Montag gewesen.', 'war للموعد.', 'konjugation', 'Geburtstag'],
      ['die Schule', 'die Schulen', 'المدرسة', 'Die Schule war klein.', 'Die Schule ist klein gewesen.', 'الماضي البسيط: war.', 'konjugation', 'Schule'],
      ['der Lehrer', 'die Lehrer', 'المعلم', 'Der Lehrer war streng.', 'Der Lehrer ist streng gewesen.', 'war.', 'konjugation', 'Lehrer'],
      ['die Arbeit', 'die Arbeiten', 'العمل', 'Die Arbeit war schwer.', 'Die Arbeit ist schwer gewesen.', 'war.', 'konjugation', 'Arbeit'],
      ['der Ort', 'die Orte', 'المكان', 'Der Ort war ruhig.', 'Der Ort ist ruhig gewesen.', 'war.', 'konjugation', 'Ort'],
      ['die Wohnung', 'die Wohnungen', 'الشقة', 'Die Wohnung war klein, aber schön.', 'Die Wohnung ist klein gewesen, aber schön.', 'war.', 'konjugation', 'Wohnung'],
      ['das Meer', 'die Meere', 'البحر', 'Das Meer war kalt.', 'Das Meer ist kalt gewesen.', 'war.', 'konjugation', 'Meer'],
      ['der Besuch', 'die Besuche', 'الزيارة', 'Der Besuch war lang.', 'Der Besuch ist lang gewesen.', 'war.', 'konjugation', 'Besuch'],
      ['die Reise', 'die Reisen', 'الرحلة', 'Die Reise war anstrengend.', 'Die Reise ist anstrengend gewesen.', 'war.', 'konjugation', 'Reise'],
      ['der Kaffee', '—', 'القهوة', 'Der Kaffee war heiß.', 'Der Kaffee ist heiß gewesen.', 'war.', 'konjugation', 'Kaffee'],
      ['die Stadt', 'die Städte', 'المدينة', 'Die Stadt war voll.', 'Die Stadt ist voll gewesen.', 'war.', 'konjugation', 'Stadt']
    ],
    tricks: [
      { trick: 'sein وhaben في الماضي البسيط: war · hatte', wie: 'Ich war krank. Ich hatte Fieber. Wir waren in Berlin. Sie hatten Zeit.', warum: 'الألمانية تستعمل الماضي البسيط لهذين الفعلين، والعربية تستعمل الماضي المركّب دائمًا فيترجمها المتعلم خطأً بـ bin gewesen.', anchor: 'war' },
      { trick: 'sein للأحوال وhaben للملك: Hunger · Durst · Angst · Zeit', wie: 'Ich hatte Hunger. Ich hatte Angst. Ich war müde. Ich war glücklich.', warum: 'العربية تقول «كنت جائعًا» بـ«كنت»، فيأتي المتعلم بـ war مع الجوع بدل hatte.', anchor: 'der Hunger' },
      { trick: 'بعد الظرف مباشرة: الفعل ثانٍ', wie: 'Gestern war ich zu Hause. Früher waren wir am Meer. Nach der Arbeit war ich müde.', warum: 'القاعدة نفسها في المضارع والماضي، والظرف الأول يزيح الفاعل بعد الفعل.', anchor: 'gestern' }
    ]
  }

};

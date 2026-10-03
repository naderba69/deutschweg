/* Deutschweg — P3.2 lexical layer, A1 unit 2 (part a): a1-u2-l1 … a1-u2-l3. */

module.exports = {

  'a1-u2-l1': {
    items: [
      ['wollen', 'will · wollte', 'يريد', 'Ich will zu Hause bleiben.', 'Ich will zu Hause bleibe.', 'بعد wollen يأتي المصدر.', 'konjugation', 'will'],
      ['möchten', 'möchte · mochte', 'يودّ', 'Ich möchte einen Kaffee.', 'Ich möchte ein Kaffee.', 'Kaffee مذكر، وفي النصب einen.', 'kasus', 'möchte'],
      ['will', '—', 'أريد', 'Er will nicht warten.', 'Er will nicht wartet.', 'المصدر بعد will.', 'konjugation', 'will'],
      ['möchte', '—', 'أودّ', 'Möchte er mitkommen?', 'Möchte er mitkommt?', 'بعد möchte مصدر: mitkommen.', 'konjugation', 'Möchte'],
      ['zahlen', 'zahlt · zahlte', 'يدفع الحساب', 'Ich möchte zahlen.', 'Ich möchte zahle.', 'المصدر في الآخر.', 'konjugation'],
      ['bestellen', 'bestellt · bestellte', 'يطلب', 'Wir möchten bestellen.', 'Wir möchten bestellt.', 'بعد möchten مصدر لا اسم مفعول.', 'konjugation'],
      ['nehmen', 'nimmt · nahm', 'يأخذ', 'Ich möchte den Kuchen nehmen.', 'Ich möchte den Kuchen nehme.', 'المصدر nehmen.', 'konjugation', 'nehmen'],
      ['das Glas', 'die Gläser', 'الكأس', 'Ich möchte ein Glas Wasser.', 'Ich möchte ein Glas von Wasser.', 'الكمية بلا von: ein Glas Wasser.', 'präposition'],
      ['die Tasse', 'die Tassen', 'الفنجان', 'Ich möchte eine Tasse Tee.', 'Ich möchte ein Tasse Tee.', 'Tasse مؤنث: eine.', 'genus'],
      ['das Stück', 'die Stücke', 'القطعة', 'Ich möchte ein Stück Kuchen.', 'Ich möchte eine Stück Kuchen.', 'Stück محايد: ein.', 'genus'],
      ['der Saft', 'die Säfte', 'العصير', 'Ich möchte einen Saft.', 'Ich möchte ein Saft.', 'Saft مذكر: einen.', 'kasus'],
      ['das Bier', 'die Biere', 'البيرة', 'Er möchte ein Bier.', 'Er möchte einen Bier.', 'Bier محايد: ein.', 'genus'],
      ['die Cola', 'die Colas', 'الكولا', 'Ich möchte eine Cola.', 'Ich möchte ein Cola.', 'Cola مؤنث: eine.', 'genus'],
      ['gern', '—', 'بسرور', 'Ich trinke gern Kaffee.', 'Ich gern trinke Kaffee.', 'gern بعد الفعل لا قبله.', 'wortstellung'],
      ['lieber', '—', 'أفضل', 'Ich trinke lieber Tee.', 'Ich lieber trinke Tee.', 'lieber بعد الفعل.', 'wortstellung'],
      ['zu Hause', '—', 'في البيت', 'Ich will zu Hause bleiben.', 'Ich will in Hause bleiben.', 'zu Hause تعبير ثابت.', 'präposition', 'Hause'],
      ['nach Hause', '—', 'إلى البيت', 'Ich will nach Hause gehen.', 'Ich will zu Hause gehen.', 'nach Hause للحركة، وzu Hause للسكون.', 'präposition', 'Hause'],
      ['heute Abend', '—', 'هذا المساء', 'Ich möchte heute Abend kommen.', 'Ich möchte heute Abend zu kommen.', 'بعد möchte مصدر بلا zu.', 'konjugation', 'Abend'],
      ['später', '—', 'لاحقًا', 'Ich möchte später zahlen.', 'Ich möchte später zahle.', 'المصدر zahlen.', 'konjugation'],
      ['der Kellner', 'die Kellner', 'النادل', 'Der Kellner bringt das Wasser.', 'Die Kellner bringt das Wasser.', 'Kellner مذكر: der.', 'genus'],
      ['probieren', 'probiert · probierte', 'يجرّب', 'Möchten Sie den Kuchen probieren?', 'Möchten Sie den Kuchen probiert?', 'المصدر probieren.', 'konjugation'],
      ['bekommen', 'bekommt · bekam', 'يحصل على', 'Ich bekomme einen Kaffee.', 'Ich bekomme ein Kaffee.', 'Kaffee مذكر: einen.', 'kasus', 'bekomme'],
      ['dauern', 'dauert · dauerte', 'يستغرق', 'Das dauert zehn Minuten.', 'Das dauern zehn Minuten.', 'الفاعل المفرد يأخذ -t.', 'konjugation', 'dauert'],
      ['noch', '—', 'بعد · ما زال', 'Möchten Sie noch etwas?', 'Möchten Sie etwas noch?', 'noch قبل etwas في هذا التركيب.', 'wortstellung'],
      ['schmecken', 'schmeckt · schmeckte', 'يُستساغ', 'Wie schmeckt der Kuchen?', 'Wie der Kuchen schmeckt?', 'الفعل ثانٍ بعد أداة السؤال.', 'wortstellung', 'schmeckt'],
      ['lecker', '—', 'لذيذ', 'Der Kuchen ist sehr lecker.', 'Der Kuchen ist sehr lecker schmeckt.', 'صفة واحدة تكفي، بلا فعل ثانٍ.', 'wortstellung'],
      ['das Frühstück', 'die Frühstücke', 'الفطور', 'Das Frühstück ist um acht.', 'Der Frühstück ist um acht.', 'Frühstück محايد: das.', 'genus'],
      ['das Mittagessen', 'die Mittagessen', 'الغداء', 'Das Mittagessen ist fertig.', 'Der Mittagessen ist fertig.', 'Mittagessen محايد: das.', 'genus']
    ],
    tricks: [
      { trick: 'wollen قوية ومöchten مؤدّبة', wie: 'Ich will bleiben. · Ich möchte zahlen.', warum: 'استعمال will في المطعم يبدو حادًّا؛ الأدب هنا جزء من المعنى لا زينة.', anchor: 'Ich möchte zahlen.' },
      { trick: 'möchten تُصرَّف مثل الفعل العادي', wie: 'ich möchte · du möchtest · wir möchten.', warum: 'شكلها يوهم بشذوذ الأفعال الناقصة، وهي أقرب إلى الفعل العادي.', anchor: 'Ich möchte einen Kaffee.' },
      { trick: 'ein Glas Wasser بلا von', wie: 'ein Glas Wasser · eine Tasse Tee · ein Stück Kuchen.', warum: 'العربية تقول «كأس من ماء»، والألمانية تسقط «من» في الكميات.', anchor: 'Ich möchte ein Glas Wasser.' }
    ]
  },

  'a1-u2-l2': {
    items: [
      ['aufstehen', 'steht auf · stand auf', 'يستيقظ', 'Ich stehe um sieben auf.', 'Ich aufstehe um sieben.', 'البادئة auf تعود إلى آخر الجملة.', 'wortstellung', 'auf'],
      ['anrufen', 'ruft an · rief an', 'يتّصل بـ', 'Er ruft seine Mutter an.', 'Er ruft an seine Mutter.', 'an في الآخر، والمفعول قبله.', 'wortstellung', 'an'],
      ['einkaufen', 'kauft ein · kaufte ein', 'يتسوّق', 'Wir kaufen im Supermarkt ein.', 'Wir einkaufen im Supermarkt.', 'في المضارع تُفصل: kaufen … ein.', 'wortstellung', 'ein'],
      ['anfangen', 'fängt an · fing an', 'يبدأ', 'Der Kurs fängt um neun an.', 'Der Kurs anfängt um neun.', 'البادئة an في الآخر.', 'wortstellung', 'an'],
      ['aufhören', 'hört auf · hörte auf', 'يتوقّف', 'Der Regen hört bald auf.', 'Der Regen aufhört bald.', 'الفصل واجب في المضارع.', 'wortstellung', 'auf'],
      ['mitbringen', 'bringt mit · brachte mit', 'يجلب معه', 'Bringst du den Kuchen mit?', 'Bringst du mit den Kuchen?', 'mit في آخر الجملة.', 'wortstellung', 'mit'],
      ['einsteigen', 'steigt ein · stieg ein', 'يركب', 'Wir steigen in den Bus ein.', 'Wir einsteigen in den Bus.', 'ein في الآخر.', 'wortstellung', 'ein'],
      ['aussteigen', 'steigt aus · stieg aus', 'ينزل', 'Er steigt an der Haltestelle aus.', 'Er aussteigt an der Haltestelle.', 'aus في الآخر.', 'wortstellung', 'aus'],
      ['fernsehen', 'sieht fern · sah fern', 'يشاهد التلفاز', 'Abends sehe ich fern.', 'Abends ich fernsehe.', 'المصرّف ثانيًا والبادئة في الآخر.', 'wortstellung', 'fern'],
      ['aufräumen', 'räumt auf · räumte auf', 'يرتّب', 'Ich räume mein Zimmer auf.', 'Ich aufräume mein Zimmer.', 'auf في الآخر.', 'wortstellung', 'auf'],
      ['aufmachen', 'macht auf · machte auf', 'يفتح', 'Mach bitte das Fenster auf.', 'Mach bitte auf das Fenster.', 'في الأمر تبقى البادئة في الآخر.', 'wortstellung', 'auf'],
      ['zumachen', 'macht zu · machte zu', 'يغلق', 'Ich mache die Tür zu.', 'Ich zumache die Tür.', 'zu في الآخر.', 'wortstellung', 'zu'],
      ['anziehen', 'zieht an · zog an', 'يلبس', 'Ich ziehe die Jacke an.', 'Ich anziehe die Jacke.', 'an في الآخر.', 'wortstellung', 'an'],
      ['ausziehen', 'zieht aus · zog aus', 'يخلع', 'Er zieht die Schuhe aus.', 'Er auszieht die Schuhe.', 'aus في الآخر.', 'wortstellung', 'aus'],
      ['vorbeikommen', 'kommt vorbei · kam vorbei', 'يمرّ بـ', 'Kommst du morgen vorbei?', 'Kommst du vorbei morgen?', 'vorbei في الآخر، والزمن قبله.', 'wortstellung', 'vorbei'],
      ['weggehen', 'geht weg · ging weg', 'يذهب بعيدًا', 'Ich gehe jetzt weg.', 'Ich weggehe jetzt.', 'weg في الآخر.', 'wortstellung', 'weg'],
      ['der Supermarkt', 'die Supermärkte', 'السوبرماركت', 'Wir kaufen im Supermarkt ein.', 'Wir kaufen in Supermarkt ein.', 'in + dem = im.', 'präposition'],
      ['der Fernseher', 'die Fernseher', 'التلفاز', 'Der Fernseher ist kaputt.', 'Das Fernseher ist kaputt.', 'Fernseher مذكر: der.', 'genus'],
      ['die Tür', 'die Türen', 'الباب', 'Ich mache die Tür zu.', 'Ich mache der Tür zu.', 'المؤنث في النصب die.', 'kasus'],
      ['der Sessel', 'die Sessel', 'الكرسي المريح', 'Der Sessel steht im Wohnzimmer.', 'Der Sessel steht in Wohnzimmer.', 'in + dem = im.', 'präposition'],
      ['der Zug', 'die Züge', 'القطار', 'Wir steigen in den Zug ein.', 'Wir steigen in der Zug ein.', 'الحركة تأخذ in + النصب: in den Zug.', 'kasus'],
      ['der Bus', 'die Busse', 'الحافلة', 'Er steigt in den Bus ein.', 'Er steigt in der Bus ein.', 'in den Bus للحركة.', 'kasus'],
      ['die Haltestelle', 'die Haltestellen', 'الموقف', 'Er steigt an der Haltestelle aus.', 'Er steigt in der Haltestelle aus.', 'الموقف يأخذ an: an der Haltestelle.', 'präposition'],
      ['pünktlich', '—', 'في الموعد', 'Der Bus kommt pünktlich.', 'Der Bus kommt in pünktlich.', 'pünktlich ظرف حال بلا حرف جر.', 'präposition'],
      ['der Regen', '—', 'المطر', 'Der Regen hört bald auf.', 'Der Regen hört bald.', 'البادئة auf لا تُحذف.', 'wortstellung', 'auf'],
      ['das Licht', 'die Lichter', 'الضوء', 'Mach das Licht an!', 'Mach an das Licht!', 'an في آخر الجملة.', 'wortstellung', 'an'],
      ['aufwachen', 'wacht auf · wachte auf', 'يستيقظ من النوم', 'Ich wache um sechs auf.', 'Ich aufwache um sechs.', 'auf في الآخر.', 'wortstellung', 'auf'],
      ['mitnehmen', 'nimmt mit · nahm mit', 'يأخذ معه', 'Nimm den Regenschirm mit.', 'Nimm mit den Regenschirm.', 'mit في الآخر.', 'wortstellung', 'mit']
    ],
    tricks: [
      { trick: 'الفعل المنفصل يعود إلى بيته في الآخر', wie: 'aufstehen ← Ich stehe um sieben auf.', warum: 'الجزء المصرّف في الموضع الثاني والبادئة تسافر؛ العربية تترك الفعل كتلة واحدة.', anchor: 'Ich stehe um sieben auf.' },
      { trick: 'مع an · auf · aus · ein ابحث عن القافلة', wie: 'anrufen · aufräumen · aussteigen · einkaufen.', warum: 'هذه البادئات أكثر البادئات فصلًا في A1، ومعرفتها بالصوت أسرع من القاعدة.', anchor: 'Wir kaufen im Supermarkt ein.' },
      { trick: 'الساعة قبل البادئة لا بعدها', wie: 'Um sieben stehe ich auf. · Ich stehe um sieben auf.', warum: 'الظرف الأول يقلب الفاعل والفعل، فيضيع مكان البادئة إن حُفظت الجملة كوحدة.', anchor: 'Um sieben stehe ich auf.' }
    ]
  },

  'a1-u2-l3': {
    items: [
      ['die Uhr', 'die Uhren', 'الساعة (الجهاز)', 'Es ist drei Uhr.', 'Es ist drei Stunde.', 'Uhr للقراءة على الساعة لا للمدة.', 'lexik-kollokation'],
      ['die Stunde', 'die Stunden', 'الساعة (المدة)', 'Der Kurs dauert zwei Stunden.', 'Der Kurs dauert zwei Uhr.', 'Stunde للمدة.', 'lexik-kollokation', 'Stunden'],
      ['die Minute', 'die Minuten', 'الدقيقة', 'Eine Minute, bitte.', 'Ein Minute, bitte.', 'Minute مؤنث: eine.', 'genus'],
      ['die Sekunde', 'die Sekunden', 'الثانية', 'Warte eine Sekunde.', 'Warte ein Sekunde.', 'Sekunde مؤنث: eine.', 'genus'],
      ['Viertel nach', '—', 'والربع', 'Es ist Viertel nach drei.', 'Es ist nach Viertel drei.', 'الربع يسبق الساعة: Viertel nach drei.', 'lexik-kollokation', 'Viertel'],
      ['Viertel vor', '—', 'إلا ربعًا', 'Es ist Viertel vor vier.', 'Es ist Viertel weniger vier.', 'قبل الساعة نقول Viertel vor.', 'lexik-kollokation', 'Viertel'],
      ['halb', '—', 'النصف', 'Es ist halb vier.', 'Es ist halb nach vier.', 'halb vier تعني 3:30، والعدّ نحو الساعة القادمة.', 'lexik-kollokation'],
      ['um', '—', 'في (الساعة)', 'Der Kurs beginnt um acht.', 'Der Kurs beginnt in acht.', 'الساعة تأخذ um لا in.', 'präposition'],
      ['die Uhrzeit', 'die Uhrzeiten', 'الوقت المحدّد', 'Wie ist die Uhrzeit?', 'Wie ist der Uhrzeit?', 'Uhrzeit مؤنث: die.', 'genus'],
      ['pünktlich', '—', 'في الموعد', 'Der Zug kommt pünktlich.', 'Der Zug kommt in pünktlich.', 'pünktlich ظرف بلا حرف جر.', 'präposition'],
      ['spät', '—', 'متأخرًا', 'Es ist schon spät.', 'Es ist schon spät Zeit.', 'spät ظرف، ولا تحتاج Zeit بعده.', 'lexik-kollokation'],
      ['früh', '—', 'مبكرًا', 'Es ist noch früh am Morgen.', 'Es ist noch früh in Morgen.', 'am Morgen لا in Morgen.', 'präposition'],
      ['die Pause', 'die Pausen', 'الاستراحة', 'Wir machen eine Pause.', 'Wir machen ein Pause.', 'Pause مؤنث: eine.', 'genus'],
      ['das Telefon', 'die Telefone', 'الهاتف', 'Das Telefon klingelt um acht.', 'Das Telefon klingelt in acht.', 'الساعة تأخذ um.', 'präposition'],
      ['der Wecker', 'die Wecker', 'المنبّه', 'Der Wecker klingelt um sechs.', 'Der Wecker klingelt in sechs.', 'um للساعة.', 'präposition'],
      ['der Kalender', 'die Kalender', 'التقويم', 'Der Kalender hängt an der Wand.', 'Das Kalender hängt an der Wand.', 'Kalender مذكر: der.', 'genus'],
      ['klingeln', 'klingelt · klingelte', 'يرنّ', 'Das Telefon klingelt.', 'Das Telefon klingeln.', 'الفاعل المفرد يأخذ -t.', 'konjugation', 'klingelt'],
      ['warten', 'wartet · wartete', 'ينتظر', 'Ich warte zehn Minuten.', 'Ich warte für zehn Minuten.', 'warten بلا حرف جر مع المدة.', 'präposition', 'warte'],
      ['enden', 'endet · endete', 'ينتهي', 'Der Kurs endet um zwölf.', 'Der Kurs endet in zwölf.', 'الساعة تأخذ um.', 'präposition', 'endet'],
      ['eine halbe Stunde', '—', 'نصف ساعة', 'Ich warte eine halbe Stunde.', 'Ich warte ein halbe Stunde.', 'halbe مع eine: النهاية -e.', 'deklination', 'halbe'],
      ['der Geburtstag', 'die Geburtstage', 'عيد الميلاد', 'Mein Geburtstag ist am Freitag.', 'Mein Geburtstag ist in Freitag.', 'اليوم يأخذ am.', 'präposition'],
      ['das Datum', 'die Daten', 'التاريخ', 'Welches Datum ist heute?', 'Welche Datum ist heute?', 'Datum محايد: welches.', 'genus'],
      ['gleich', '—', 'بعد قليل', 'Ich komme gleich.', 'Ich komme in gleich.', 'gleich ظرف بلا حرف جر.', 'präposition'],
      ['jetzt', '—', 'الآن', 'Jetzt ist es drei Uhr.', 'Jetzt es ist drei Uhr.', 'بعد الظرف يبقى الفعل ثانيًا.', 'wortstellung'],
      ['bald', '—', 'قريبًا', 'Der Bus kommt bald.', 'Der Bus kommt in bald.', 'bald ظرف.', 'präposition'],
      ['später', '—', 'لاحقًا', 'Wir essen später.', 'Wir essen in später.', 'später ظرف.', 'präposition'],
      ['mittags', '—', 'ظهرًا', 'Mittags esse ich in der Kantine.', 'Mittags ich esse in der Kantine.', 'الظرف الأول لا يزحزح الفعل.', 'wortstellung'],
      ['morgens', '—', 'صباحًا', 'Morgens lerne ich Deutsch.', 'Morgens ich lerne Deutsch.', 'الفعل ثانٍ بعد morgens.', 'wortstellung']
    ],
    tricks: [
      { trick: 'Uhr للقراءة وStunde للمدة', wie: 'Es ist drei Uhr. · Der Kurs dauert zwei Stunden.', warum: 'العربية تستعمل «ساعة» للاثنين، فالخطأ يمرّ بثقة.', anchor: 'Es ist drei Uhr.' },
      { trick: 'halb vier تعني قبل الرابعة بنصف ساعة', wie: 'halb vier = 3:30 · Viertel vor vier = 3:45.', warum: 'العدّ الألماني يسير نحو الساعة القادمة والعربية تسير من الحالية، فالوهم في الاتجاه.', anchor: 'Es ist halb vier.' },
      { trick: 'الوقت يأخذ um دائمًا', wie: 'Der Kurs beginnt um acht.', warum: 'in للمستقبل والشهر والفصل، ومع الساعة لا تدخل أبدًا.', anchor: 'Der Kurs beginnt um acht.' }
    ]
  }

};

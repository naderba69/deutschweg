/* Deutschweg — P3.2 lexical layer, B1 production unit 11: b1-u1-l1 … b1-u1-l6.
   Row: [ headword, plural/forms, Arabic gloss, example, the sentence an Arabic
          speaker typically produces, why it is wrong, family, (blank form) ]
   Twenty words per lesson, none repeated inside B1. Three tricks per lesson,
   never repeated verbatim anywhere. Two annotated order sentences and a
   B1 writing prompt per lesson. */

module.exports = {
  'b1-u1-l1': {
    items: [
      ['der Vorgang', 'die Vorgänge', 'العملية · مجرى الحدث', 'Der Vorgang dauert zwei Wochen.', 'Die Vorgang dauert zwei Wochen.', 'Vorgang مذكر: der Vorgang؛ النهاية -gang لا تدل على تأنيث.', 'genus'],
      ['renovieren', 'renoviert · renovierte · hat renoviert', 'يرمّم · يجدّد', 'Die Wohnung wird gerade renoviert.', 'Die Wohnung wird gerade renovieren.', 'المبني للمجهول يأخذ Partizip II: renoviert، لا المصدر.', 'konjugation', 'renoviert'],
      ['reparieren', 'repariert · reparierte · hat repariert', 'يصلح', 'Das Auto wird morgen repariert.', 'Das Auto ist morgen repariert.', 'wird للحدث الجاري أو القادم؛ ist repariert يصف حالة منتهية.', 'konjugation', 'repariert'],
      ['herstellen', 'stellt her · stellte her · hat hergestellt', 'يصنع · ينتج', 'Die Teile werden in Polen hergestellt.', 'Die Teile werden in Polen herstellen.', 'القوس الأيمن للمجهول هو Partizip II: hergestellt، والسابقة her- تلتصق به.', 'konjugation', 'hergestellt'],
      ['liefern', 'liefert · lieferte · hat geliefert', 'يسلّم · يوصّل', 'Das Paket wird morgen geliefert.', 'Das Paket wird morgen gelieferen.', 'Partizip II للفعل الضعيف: ge- + الجذر + -t = geliefert.', 'konjugation', 'geliefert'],
      ['die Lieferung', 'die Lieferungen', 'التسليم · الشحنة', 'Die Lieferung kommt am Montag.', 'Der Lieferung kommt am Montag.', 'الأسماء على -ung مؤنثة دائمًا: die Lieferung.', 'genus'],
      ['überprüfen', 'überprüft · überprüfte · hat überprüft', 'يراجع · يتحقق من', 'Die Daten werden regelmäßig überprüft.', 'Die Daten werden regelmäßig geüberprüft.', 'über- هنا سابقة غير منفصلة، فلا ge-: überprüft.', 'konjugation', 'überprüft'],
      ['die Werkstatt', 'die Werkstätten', 'الورشة', 'Das Auto steht in der Werkstatt.', 'Das Auto steht in die Werkstatt.', 'الموقع الثابت مع in يأخذ الداتيف: in der Werkstatt.', 'kasus'],
      ['die Baustelle', 'die Baustellen', 'موقع البناء', 'Auf der Baustelle wird viel gearbeitet.', 'Auf die Baustelle wird viel gearbeitet.', 'المكان الثابت بعد auf داتيف: auf der Baustelle.', 'kasus'],
      ['der Handwerker', 'die Handwerker', 'الحرفي · العامل الفني', 'Die Handwerker kommen um neun.', 'Die Handwerkers kommen um neun.', 'جمع -er بلا تغيير: die Handwerker؛ لا -s من الفرنسية أو الإنجليزية.', 'plural'],
      ['die Reparatur', 'die Reparaturen', 'الإصلاح', 'Die Reparatur kostet 200 Euro.', 'Der Reparatur kostet 200 Euro.', 'الأسماء على -ur القادمة من الفرنسية مؤنثة: die Reparatur.', 'genus'],
      ['bezahlen', 'bezahlt · bezahlte · hat bezahlt', 'يدفع', 'Die Rechnung wurde gestern bezahlt.', 'Die Rechnung war gestern bezahlt.', 'wurde يروي حدث الدفع؛ war bezahlt يصف حالة فقط.', 'konjugation', 'bezahlt'],
      ['abschaffen', 'schafft ab · schaffte ab · hat abgeschafft', 'يلغي', 'Die Gebühr wurde abgeschafft.', 'Die Gebühr wurde abschafft.', 'الفعل المنفصل يأخذ ge- بين السابقة والجذر: abgeschafft.', 'konjugation', 'abgeschafft'],
      ['einführen', 'führt ein · führte ein · hat eingeführt', 'يُدخل · يستحدث', 'Ein neues System wird eingeführt.', 'Ein neues System wird eingeführen.', 'Partizip II: eingeführt؛ المصدر لا يقف في القوس الأيمن للمجهول.', 'konjugation', 'eingeführt'],
      ['der Mitarbeiter', 'die Mitarbeiter', 'الموظف · الزميل في العمل', 'Der Mitarbeiter wird morgen informiert.', 'Der Mitarbeiter wird morgen informiert von dem Chef.', 'الفاعل مع von يقف في الحقل الأوسط قبل القوس الأيمن: wird vom Chef informiert.', 'wortstellung'],
      ['untersuchen', 'untersucht · untersuchte · hat untersucht', 'يفحص', 'Der Patient wird gerade untersucht.', 'Der Patient wird untersucht gerade.', 'الظرف gerade في الحقل الأوسط، والمشارك untersucht يغلق الجملة.', 'wortstellung', 'untersucht'],
      ['verbessern', 'verbessert · verbesserte · hat verbessert', 'يحسّن', 'Der Service wurde deutlich verbessert.', 'Der Service wurde deutlich gebessert.', 'ver- سابقة غير منفصلة فلا ge-: verbessert؛ وgebessert من فعل آخر.', 'konjugation', 'verbessert'],
      ['erledigen', 'erledigt · erledigte · hat erledigt', 'ينجز', 'Die Aufgabe wird bis Freitag erledigt.', 'Die Aufgabe wird bis am Freitag erledigt.', 'bis تقف وحدها مع اليوم: bis Freitag، بلا am.', 'präposition', 'erledigt'],
      ['eröffnen', 'eröffnet · eröffnete · hat eröffnet', 'يفتتح', 'Das Geschäft wurde im Mai eröffnet.', 'Das Geschäft wurde im Mai geöffnet.', 'eröffnen للافتتاح الأول؛ öffnen لفتح الباب كل صباح.', 'lexik-kollokation', 'eröffnet'],
      ['schließen', 'schließt · schloss · hat geschlossen', 'يغلق', 'Die Filiale wird nächstes Jahr geschlossen.', 'Die Filiale wird nächstes Jahr geschließt.', 'schließen فعل قوي: Partizip II هو geschlossen.', 'konjugation', 'geschlossen']
    ],
    tricks: [
      { trick: 'werden = الحدث يجري، sein = الحالة انتهت', wie: 'Das Auto wird repariert (في الورشة الآن) · Das Auto ist repariert (جاهز).', warum: 'العربية تقول «مُصلَح» للحالتين، والألمانية تفصل بين المساعدَين، وهنا أول خطأ في المبني للمجهول.', anchor: 'Das Auto wird morgen repariert.' },
      { trick: 'ge- يسقط بعد be- وver- وer- وüber-', wie: 'bezahlt · verbessert · erledigt · überprüft: كلها بلا ge-.', warum: 'حفظ القاعدة بالسوابق الأربع يمنع «gebezahlt» التي يولّدها القياس على gemacht.', anchor: 'Die Rechnung wurde gestern bezahlt.' },
      { trick: '-ung و-ur مؤنثتان بلا استثناء', wie: 'die Lieferung · die Reparatur · die Werkstatt (مؤنثة كذلك).', warum: 'النهاية هي مفتاح الجنس حين لا يسعفك المعنى، وهاتان النهايتان لا تخذلان أبدًا.', anchor: 'Die Lieferung kommt am Montag.' }
    ],
    order: [
      { satz: 'Das Auto | wird | morgen | repariert.', ar: 'السيارة تُصلَح غدًا.' },
      { satz: 'Die Rechnung | wurde | gestern | bezahlt.', ar: 'الفاتورة دُفعت أمس.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن بيتك أو حيّك: ما الذي يُرمَّم أو يُصلَح أو يُبنى الآن، وما الذي أُنجز العام الماضي. استعمل wird وwurde.',
      promptDe: 'In meiner Straße wird gerade … · Letztes Jahr wurde … · Die … werden von … geliefert.',
      points: ['حدث جارٍ بـ wird', 'حدث ماضٍ بـ wurde', 'فاعل بـ von مرة واحدة', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'konjugation'
    }
  },

  'b1-u1-l2': {
    items: [
      ['der Nachbar', 'die Nachbarn', 'الجار', 'Der Nachbar, der oben wohnt, ist Arzt.', 'Der Nachbar, der wohnt oben, ist Arzt.', 'في جملة الصلة يقف الفعل في الآخر: der oben wohnt.', 'wortstellung'],
      ['die Kollegin', 'die Kolleginnen', 'الزميلة', 'Die Kollegin, die neben mir sitzt, kommt aus Wien.', 'Die Kollegin, der neben mir sitzt, kommt aus Wien.', 'الضمير الموصول يتبع جنس الاسم: Kollegin مؤنث ← die.', 'genus'],
      ['der Bekannte', 'die Bekannten', 'أحد المعارف', 'Ein Bekannter, den ich aus Sousse kenne, besucht mich.', 'Ein Bekannter, der ich aus Sousse kenne, besucht mich.', 'الموصول هنا مفعول kennen، فيأخذ النصب: den.', 'kasus', 'Bekannter'],
      ['die Gegend', 'die Gegenden', 'المنطقة · الناحية', 'Die Gegend, in der ich wohne, ist ruhig.', 'Die Gegend, wo in ich wohne, ist ruhig.', 'حرف الجر يسبق الموصول: in der؛ أو wo وحدها للمكان.', 'präposition'],
      ['das Gebäude', 'die Gebäude', 'المبنى', 'Das Gebäude, das du siehst, ist die Bibliothek.', 'Das Gebäude, was du siehst, ist die Bibliothek.', 'بعد اسم محدد يأتي das لا was؛ was تأتي بعد alles وetwas ونحوهما.', 'deklination'],
      ['die Einrichtung', 'die Einrichtungen', 'المؤسسة · التجهيز', 'Die Einrichtung, die Kurse anbietet, heißt VHS.', 'Die Einrichtung, die anbietet Kurse, heißt VHS.', 'المفعول Kurse قبل الفعل الذي يغلق جملة الصلة: Kurse anbietet.', 'wortstellung'],
      ['das Angebot', 'die Angebote', 'العرض', 'Das Angebot, das ich bekommen habe, ist fair.', 'Das Angebot, das ich habe bekommen, ist fair.', 'في جملة الصلة يأتي المساعد habe بعد المشارك: bekommen habe.', 'wortstellung'],
      ['die Veranstaltung', 'die Veranstaltungen', 'الفعالية · المناسبة', 'Die Veranstaltung, zu der ich gehe, beginnt um acht.', 'Die Veranstaltung, zu die ich gehe, beginnt um acht.', 'zu تجرّ الداتيف دائمًا: zu der.', 'kasus'],
      ['der Gegenstand', 'die Gegenstände', 'الشيء · الغرض', 'Der Gegenstand, den ich suche, ist klein.', 'Der Gegenstand, der ich suche, ist klein.', 'suchen يأخذ النصب ← den، ولو كان الاسم مرفوعًا في الجملة الرئيسية.', 'kasus'],
      ['empfehlen', 'empfiehlt · empfahl · hat empfohlen', 'ينصح بـ · يوصي', 'Das Restaurant, das du empfohlen hast, war voll.', 'Das Restaurant, das du empfehlt hast, war voll.', 'empfehlen فعل قوي: Partizip II هو empfohlen، وempfiehlt للمضارع.', 'konjugation', 'empfohlen'],
      ['sich erinnern an', 'erinnert sich · erinnerte sich · hat sich erinnert', 'يتذكّر', 'Der Film, an den ich mich erinnere, ist alt.', 'Der Film, den ich mich erinnere, ist alt.', 'erinnern يحتاج an: an den ich mich erinnere.', 'präposition', 'erinnere'],
      ['besitzen', 'besitzt · besaß · hat besessen', 'يملك', 'Die Frau, die das Haus besitzt, ist Ärztin.', 'Die Frau, die besitzt das Haus, ist Ärztin.', 'الفعل المصرّف يغلق جملة الصلة: das Haus besitzt.', 'wortstellung', 'besitzt'],
      ['gehören', 'gehört · gehörte · hat gehört', 'يخصّ · يعود لـ', 'Das Auto, das meinem Bruder gehört, ist rot.', 'Das Auto, das meinen Bruder gehört, ist rot.', 'gehören يأخذ الداتيف: meinem Bruder.', 'kasus', 'gehört'],
      ['stattfinden', 'findet statt · fand statt · hat stattgefunden', 'يُقام · يجري', 'Das Fest, das im Juli stattfindet, ist bekannt.', 'Das Fest, das findet im Juli statt, ist bekannt.', 'في جملة الصلة لا ينفصل الفعل: stattfindet في الآخر.', 'wortstellung', 'stattfindet'],
      ['zuverlässig', '—', 'موثوق · يُعتمد عليه', 'Der Kollege, der zuverlässig ist, bekommt mehr Aufgaben.', 'Der Kollege, der ist zuverlässig, bekommt mehr Aufgaben.', 'ist يغلق جملة الصلة: der zuverlässig ist.', 'wortstellung'],
      ['berühmt', '—', 'مشهور', 'Die Stadt, die berühmt ist, hat viele Touristen.', 'Die Stadt, die ist famous, hat viele Touristen.', 'famous إنجليزية، وist تقف في آخر جملة الصلة: die berühmt ist.', 'falser-freund'],
      ['der Ort', 'die Orte', 'المكان', 'Der Ort, an dem wir uns treffen, ist das Café.', 'Der Ort, an den wir uns treffen, ist das Café.', 'اللقاء في مكان ثابت: an + داتيف ← an dem (أو wo).', 'kasus'],
      ['das Erlebnis', 'die Erlebnisse', 'تجربة معيشة · حدث', 'Das Erlebnis, von dem ich erzähle, war schön.', 'Das Erlebnis, dass ich erzähle, war schön.', 'dass أداة ربط لا ضمير موصول؛ هنا von dem لأن erzählen von.', 'orthographie'],
      ['der Vermieter', 'die Vermieter', 'المؤجّر · صاحب الشقة', 'Der Vermieter, dem die Wohnung gehört, wohnt in Tunis.', 'Der Vermieter, den die Wohnung gehört, wohnt in Tunis.', 'gehören + داتيف ← dem، ولو كان المؤجّر مذكرًا مرفوعًا.', 'kasus'],
      ['die Sehenswürdigkeit', 'die Sehenswürdigkeiten', 'المعلم السياحي', 'Die Sehenswürdigkeit, die wir besuchen, ist eine Moschee.', 'Die Sehenswurdigkeit, die wir besuchen, ist eine Moschee.', 'النقطتان على ü جزء من الكلمة: Sehenswürdigkeit.', 'orthographie']
    ],
    tricks: [
      { trick: 'الموصول هو الأداة، إلا denen وdessen وderen', wie: 'der/die/das تبقى كما هي؛ denen في داتيف الجمع، وdessen/deren للإضافة.', warum: 'ثلاثة استثناءات فقط تُحفظ، والباقي أداة تعرفها، فلا داعي لجدول جديد.', anchor: 'Die Gegend, in der ich wohne, ist ruhig.' },
      { trick: 'جنسه من الاسم، وحالته من فعل الصلة', wie: 'Der Gegenstand (مذكر) + suchen (نصب) = den ich suche.', warum: 'الخطأ المعتاد نسخ حالة الاسم من الجملة الرئيسية، بينما للصلة فعلها وحالتها.', anchor: 'Der Gegenstand, den ich suche, ist klein.' },
      { trick: 'الفاصلة تفتح، والفعل يقفل', wie: ', der oben wohnt, — فاصلة قبل الموصول، وفعل في آخر الصلة، ثم فاصلة.', warum: 'جملة الصلة الألمانية مقفولة من الطرفين، والعربية تتركها مفتوحة بلا فاصلة.', anchor: 'Der Nachbar, der oben wohnt, ist Arzt.' }
    ],
    order: [
      { satz: 'Der Nachbar, der oben wohnt, | ist | Arzt.', ar: 'الجار الذي يسكن في الأعلى طبيب.' },
      { satz: 'den | ich aus Sousse | kenne.', clause: 'sub', ar: 'الذي أعرفه من سوسة (جملة الصلة وحدها)' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل تعرّف فيها بأشخاص وأماكن من حياتك، في كل جملة جملة صلة واحدة: جارك، زميلة، المنطقة التي تسكنها، مبنى تعرفه، وشيء تملكه.',
      promptDe: 'Mein Nachbar, der … · Die Gegend, in der ich … · Das Gebäude, das … · Ein Gegenstand, den ich …',
      points: ['خمس جمل صلة', 'موصول في النصب مرة', 'حرف جر + موصول مرة', 'الفعل في آخر كل صلة'],
      minWords: 50, familie: 'wortstellung'
    }
  },

  'b1-u1-l3': {
    items: [
      ['der Regen', 'meist Singular', 'المطر', 'Obwohl der Regen stark ist, gehen wir raus.', 'Obwohl der Regen ist stark, gehen wir raus.', 'بعد obwohl يقف ist في آخر الجملة الفرعية: stark ist.', 'wortstellung'],
      ['das Gewitter', 'die Gewitter', 'العاصفة الرعدية', 'Obwohl ein Gewitter kommt, bleibt er draußen.', 'Obwohl ein Gewitter kommt, er bleibt draußen.', 'بعد الفرعية المتقدمة يأتي الفعل مباشرة: bleibt er.', 'wortstellung'],
      ['der Stau', 'die Staus', 'الازدحام المروري', 'Obwohl Stau war, kam sie pünktlich.', 'Obwohl Stau war, sie kam pünktlich.', 'الفرعية تحتل الموضع الأول، فالفعل kam يليها فورًا.', 'wortstellung'],
      ['die Verspätung', 'die Verspätungen', 'التأخير', 'Der Zug hat Verspätung, obwohl das Wetter gut ist.', 'Der Zug hat Verspätung, obwohl das Wetter ist gut.', 'ist في آخر جملة obwohl، لا بعد الفاعل مباشرة.', 'wortstellung'],
      ['anstrengend', '—', 'مُجهد · متعب', 'Obwohl die Arbeit anstrengend ist, macht sie Spaß.', 'Obwohl die Arbeit anstrengen ist, macht sie Spaß.', 'anstrengend صفة مشتقة من المشارك الأول بـ -d؛ anstrengen فعل.', 'lexik-kollokation'],
      ['gelingen', 'gelingt · gelang · ist gelungen', 'ينجح (الأمر)', 'Obwohl es schwer war, ist es mir gelungen.', 'Obwohl es schwer war, habe ich es gelungen.', 'gelingen يأخذ sein والشخص في الداتيف: es ist mir gelungen.', 'konjugation', 'gelungen'],
      ['aufgeben', 'gibt auf · gab auf · hat aufgegeben', 'يستسلم · يتخلى', 'Obwohl es schwer ist, gebe ich nicht auf.', 'Obwohl es schwer ist, ich gebe nicht auf.', 'الفعل بعد الفاصلة مباشرة، والسابقة auf في الآخر: gebe ich nicht auf.', 'wortstellung', 'gebe'],
      ['weitermachen', 'macht weiter · machte weiter · hat weitergemacht', 'يواصل', 'Sie macht weiter, obwohl sie müde ist.', 'Sie weitermacht, obwohl sie müde ist.', 'في الجملة الرئيسية ينفصل الفعل: macht … weiter.', 'wortstellung', 'weiter'],
      ['der Erfolg', 'die Erfolge', 'النجاح', 'Obwohl er wenig Zeit hatte, hatte er Erfolg.', 'Obwohl er wenig Zeit hatte, hatte er einen Erfolg.', 'Erfolg haben تعبير ثابت بلا أداة.', 'lexik-kollokation'],
      ['enttäuscht', '—', 'خائب الأمل', 'Obwohl sie verloren haben, sind sie nicht enttäuscht.', 'Obwohl sie verloren haben, sind sie nicht enttäuschen.', 'الحالة تُقال بالمشارك: enttäuscht؛ enttäuschen فعل.', 'deklination'],
      ['die Hoffnung', 'die Hoffnungen', 'الأمل', 'Obwohl es spät ist, gibt es noch Hoffnung.', 'Obwohl es spät ist, es gibt noch Hoffnung.', 'es gibt تنقلب بعد الفرعية: gibt es.', 'wortstellung'],
      ['zufrieden', '—', 'راضٍ', 'Ich bin zufrieden, obwohl ich wenig verdiene.', 'Ich bin zufrieden mit, obwohl ich wenig verdiene.', 'zufrieden وحدها تكفي؛ mit تحتاج مفعولًا بعدها: zufrieden mit der Arbeit.', 'präposition'],
      ['der Stress', 'meist Singular', 'الضغط · التوتر', 'Obwohl er Stress hat, bleibt er ruhig.', 'Obwohl er Stress hat, bleibt er ruhig trotzdem.', 'obwohl وtrotzdem لا يجتمعان في جملة واحدة؛ أحدهما يكفي.', 'lexik-kollokation'],
      ['schaffen', 'schafft · schaffte · hat geschafft', 'ينجز · يتمكن من', 'Obwohl die Zeit knapp war, haben wir es geschafft.', 'Obwohl die Zeit knapp war, wir haben es geschafft.', 'haben يلي الفاصلة مباشرة: haben wir es geschafft.', 'wortstellung', 'geschafft'],
      ['verzichten auf', 'verzichtet · verzichtete · hat verzichtet', 'يستغني عن', 'Obwohl ich Hunger habe, verzichte ich auf Süßes.', 'Obwohl ich Hunger habe, verzichte ich von Süßes.', 'verzichten auf + النصب، لا von.', 'präposition', 'verzichte'],
      ['sich beeilen', 'beeilt sich · beeilte sich · hat sich beeilt', 'يستعجل', 'Obwohl wir uns beeilt haben, kam der Bus nicht.', 'Obwohl wir beeilt haben, kam der Bus nicht.', 'sich beeilen انعكاسي: wir uns beeilt haben.', 'deklination', 'beeilt'],
      ['knapp', '—', 'شحيح · ضيق', 'Obwohl das Geld knapp ist, reisen sie.', 'Obwohl das Geld knapp ist, reisen sie trotz.', 'trotz حرف جر يحتاج اسمًا بعده؛ الجملة تامة بـ obwohl.', 'präposition'],
      ['die Mühe', 'die Mühen', 'الجهد · العناء', 'Obwohl es Mühe kostet, lohnt es sich.', 'Obwohl es Mühe kostet, lohnt es.', 'lohnen انعكاسي: es lohnt sich.', 'deklination'],
      ['erfolgreich', '—', 'ناجح', 'Obwohl sie jung ist, ist sie erfolgreich.', 'Obwohl sie jung ist, ist sie erfolgreichlich.', 'erfolgreich صفة جاهزة بـ -reich؛ لا تُضاف -lich.', 'orthographie'],
      ['die Ausnahme', 'die Ausnahmen', 'الاستثناء', 'Obwohl es eine Ausnahme ist, erlaubt er es.', 'Obwohl es ein Ausnahme ist, erlaubt er es.', 'Ausnahme مؤنثة: eine Ausnahme.', 'genus']
    ],
    tricks: [
      { trick: 'obwohl تدفع الفعل إلى الحائط', wie: 'Obwohl es regnet, … — الفعل regnet يلتصق بالفاصلة من اليسار.', warum: 'العربية تبقي الفعل بعد «رغم أنّ» مباشرة، فالصورة الحسية للحائط تكسر العادة.', anchor: 'Obwohl der Regen stark ist, gehen wir raus.' },
      { trick: 'بعد الفاصلة: فعل ثم فاعل، بلا استثناء', wie: 'Obwohl Stau war, | kam | sie | pünktlich. الفرعية كلها هي الموضع الأول.', warum: 'الفرعية المتقدمة تحجز الموضع الأول، فيصير الفعل الرئيسي ثانيًا وإن بدا أولًا.', anchor: 'Obwohl Stau war, kam sie pünktlich.' },
      { trick: 'obwohl أو trotzdem، لا الاثنتان معًا', wie: 'Obwohl er Stress hat, bleibt er ruhig. · Er hat Stress, trotzdem bleibt er ruhig.', warum: 'العربية تقول «رغم أنّ … إلا أنه» بعلامتين، والألمانية تكتفي بواحدة.', anchor: 'Obwohl er Stress hat, bleibt er ruhig.' }
    ],
    order: [
      { satz: 'Obwohl Stau war, | kam | sie pünktlich.', ar: 'رغم الازدحام وصلت في الوقت.' },
      { satz: 'Sie | macht | | weiter, | obwohl sie müde ist.', ar: 'تواصل رغم أنها متعبة.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن أسبوعك: شيء فعلته رغم التعب أو المطر أو الازدحام أو ضيق الوقت أو الضغط. كل جملة فيها obwohl، وتتقدم الفرعية مرتين على الأقل.',
      promptDe: 'Obwohl ich müde war, … · Ich …, obwohl … · Obwohl der Stau …',
      points: ['خمس جمل obwohl', 'الفرعية متقدمة مرتين', 'الفعل في آخر الفرعية', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'wortstellung'
    }
  },

  'b1-u1-l4': {
    items: [
      ['trotzdem', '—', 'مع ذلك', 'Es regnet, trotzdem gehen wir spazieren.', 'Es regnet, trotzdem wir gehen spazieren.', 'trotzdem ظرف يحتل الموضع الأول، فالفعل يليه: trotzdem gehen wir.', 'wortstellung'],
      ['dennoch', '—', 'ومع ذلك (أرسمية)', 'Der Weg ist weit, dennoch fahre ich mit dem Rad.', 'Der Weg ist weit, dennoch ich fahre mit dem Rad.', 'dennoch مثل trotzdem: الفعل بعده مباشرة.', 'wortstellung'],
      ['deshalb', '—', 'لذلك', 'Ich bin krank, deshalb bleibe ich zu Hause.', 'Ich bin krank, deshalb ich bleibe zu Hause.', 'deshalb في الموضع الأول ← الفعل ثانيًا: deshalb bleibe ich.', 'wortstellung'],
      ['deswegen', '—', 'بسبب ذلك', 'Der Bus kam nicht, deswegen nahm ich ein Taxi.', 'Der Bus kam nicht, wegen das nahm ich ein Taxi.', '«wegen das» ليست ألمانية؛ الظرف الجاهز deswegen أو deshalb.', 'lexik-kollokation'],
      ['außerdem', '—', 'علاوة على ذلك', 'Die Wohnung ist klein, außerdem ist sie teuer.', 'Die Wohnung ist klein, außerdem sie ist teuer.', 'außerdem يحتل الموضع الأول: außerdem ist sie teuer.', 'wortstellung'],
      ['allerdings', '—', 'غير أنّ', 'Das Angebot ist gut, allerdings fehlt die Garantie.', 'Das Angebot ist gut, allerdings die Garantie fehlt.', 'allerdings ظرف لا أداة مثل aber: الفعل بعده: allerdings fehlt die Garantie.', 'wortstellung'],
      ['sonst', '—', 'وإلا', 'Beeil dich, sonst verpassen wir den Zug.', 'Beeil dich, sonst wir verpassen den Zug.', 'sonst ظرف في الموضع الأول: sonst verpassen wir.', 'wortstellung'],
      ['jedoch', '—', 'لكن · بيد أنّ', 'Ich wollte kommen, jedoch hatte ich keine Zeit.', 'Ich wollte kommen, jedoch hatte ich nicht Zeit.', 'الاسم يُنفى بـ keine لا بـ nicht: keine Zeit (قياس على pas de temps).', 'lexik-kollokation'],
      ['zwar', '—', 'صحيحٌ أنّ (مع aber)', 'Zwar ist es teuer, aber es lohnt sich.', 'Zwar es ist teuer, aber es lohnt sich.', 'zwar في الموضع الأول ← الفعل ثانيًا: Zwar ist es teuer.', 'wortstellung'],
      ['die Entscheidung', 'die Entscheidungen', 'القرار', 'Die Entscheidung war schwer, trotzdem bereue ich sie nicht.', 'Der Entscheidung war schwer, trotzdem bereue ich sie nicht.', '-ung مؤنثة: die Entscheidung.', 'genus'],
      ['sich entscheiden für', 'entscheidet sich · entschied sich · hat sich entschieden', 'يقرّر · يختار', 'Ich habe mich trotzdem für den Kurs entschieden.', 'Ich habe trotzdem für den Kurs entschieden.', 'sich entscheiden انعكاسي: habe mich entschieden.', 'deklination', 'entschieden'],
      ['bereuen', 'bereut · bereute · hat bereut', 'يندم على', 'Ich bereue die Entscheidung nicht.', 'Ich bereue auf die Entscheidung nicht.', 'bereuen متعدٍّ مباشر بلا حرف جر.', 'präposition', 'bereue'],
      ['die Gefahr', 'die Gefahren', 'الخطر', 'Die Gefahr ist groß, trotzdem fährt er los.', 'Die Gefahr ist groß, trotzdem er fährt los.', 'V2 بعد trotzdem: fährt er los.', 'wortstellung'],
      ['das Risiko', 'die Risiken', 'المخاطرة', 'Das Risiko ist hoch, dennoch investiert sie.', 'Das Risiko ist hoch, dennoch investiert sie trotzdem.', 'dennoch وtrotzdem بالمعنى نفسه؛ لا يُكرَّر الرابط.', 'lexik-kollokation'],
      ['der Grund', 'die Gründe', 'السبب', 'Der Grund ist einfach: Ich habe keine Zeit.', 'Die Grund ist einfach: Ich habe keine Zeit.', 'Grund مذكر: der Grund، والجمع Gründe.', 'genus'],
      ['die Konsequenz', 'die Konsequenzen', 'العاقبة', 'Er kennt die Konsequenzen, trotzdem raucht er.', 'Er kennt die Konsequenzen, trotzdem er raucht.', 'بعد trotzdem الفعل أولًا: trotzdem raucht er.', 'wortstellung', 'Konsequenzen'],
      ['verschieben', 'verschiebt · verschob · hat verschoben', 'يؤجّل', 'Es ist spät, trotzdem verschieben wir nichts.', 'Es ist spät, trotzdem verschieben wir nichts auf.', 'verschieben غير منفصل؛ لا auf في الآخر (aufschieben فعل آخر).', 'lexik-kollokation'],
      ['die Müdigkeit', '—', 'التعب', 'Die Müdigkeit ist groß, trotzdem lernt sie.', 'Der Müdigkeit ist groß, trotzdem lernt sie.', '-keit مؤنثة دائمًا: die Müdigkeit.', 'genus'],
      ['die Lust', '—', 'الرغبة', 'Ich habe keine Lust, trotzdem gehe ich hin.', 'Ich habe keine Lust, trotzdem gehe ich dort.', 'الحركة إلى هناك: hin (dorthin)؛ dort للمكان الثابت.', 'lexik-kollokation'],
      ['die Laune', 'die Launen', 'المزاج', 'Sie hat schlechte Laune, trotzdem lacht sie.', 'Sie hat eine schlechte Laune, trotzdem lacht sie.', 'schlechte/gute Laune haben بلا أداة.', 'lexik-kollokation']
    ],
    tricks: [
      { trick: 'trotzdem يأخذ الكرسي الأول، والفعل الثاني', wie: 'Es regnet, | trotzdem | gehen | wir. الظرف يحجز الموضع الأول.', warum: 'trotzdem ظرف لا أداة، فيُعامَل كأي عنصر في الموضع الأول ويجرّ الفعل خلفه.', anchor: 'Es regnet, trotzdem gehen wir spazieren.' },
      { trick: 'aber في الموضع صفر، deshalb في الموضع واحد', wie: 'aber ich bleibe (بلا قلب) · deshalb bleibe ich (قلب).', warum: 'الأدوات الخمس und وaber وoder وdenn وsondern لا تُحسب، والظروف كلها تُحسب.', anchor: 'Ich bin krank, deshalb bleibe ich zu Hause.' },
      { trick: 'zwar يفتح الباب لـ aber', wie: 'Zwar ist es teuer, aber es lohnt sich: zwar بلا aber جملة معلّقة.', warum: 'العربية تقول «صحيح أنّ» وتُسقط «لكن» أحيانًا، والألمانية تنتظر aber حتمًا.', anchor: 'Zwar ist es teuer, aber es lohnt sich.' }
    ],
    order: [
      { satz: 'Trotzdem | gehen | wir spazieren.', ar: 'مع ذلك نذهب للنزهة.' },
      { satz: 'Deshalb | bleibe | ich heute zu Hause.', ar: 'لذلك أبقى اليوم في البيت.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل من حياتك اليومية بروابط V2: trotzdem وdeshalb وaußerdem وsonst وallerdings، رابط واحد في كل جملة، والفعل بعده مباشرة.',
      promptDe: 'Ich bin müde, trotzdem … · Deshalb … · Außerdem … · Beeil dich, sonst … · Allerdings …',
      points: ['خمسة روابط مختلفة', 'الفعل بعد الرابط مباشرة', 'جملتان عن قرار حقيقي اتخذته', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'wortstellung'
    }
  },

  'b1-u1-l5': {
    items: [
      ['das Ziel', 'die Ziele', 'الهدف', 'Ich lerne jeden Tag, um mein Ziel zu erreichen.', 'Ich lerne jeden Tag, um zu erreichen mein Ziel.', 'zu + المصدر يغلق جملة um: mein Ziel zu erreichen.', 'wortstellung'],
      ['erreichen', 'erreicht · erreichte · hat erreicht', 'يبلغ · يحقق', 'Was tust du, um das zu erreichen?', 'Was tust du, um das erreichen?', 'um … zu: لا تسقط zu قبل المصدر.', 'wortstellung', 'erreichen'],
      ['der Zweck', 'die Zwecke', 'الغرض', 'Zu welchem Zweck lernst du Deutsch?', 'Zu welchen Zweck lernst du Deutsch?', 'zu تجرّ الداتيف: zu welchem Zweck.', 'kasus'],
      ['die Absicht', 'die Absichten', 'النية', 'Ich habe die Absicht, nach Berlin zu ziehen.', 'Ich habe die Absicht, nach Berlin ziehen.', 'بعد الاسم تأتي جملة مصدرية بـ zu: zu ziehen.', 'wortstellung'],
      ['sich vorbereiten auf', 'bereitet sich vor · bereitete sich vor · hat sich vorbereitet', 'يستعد لـ', 'Ich lerne, um mich auf die Prüfung vorzubereiten.', 'Ich lerne, um mich auf die Prüfung zu vorbereiten.', 'في الفعل المنفصل تدخل zu بين السابقة والجذر: vorzubereiten.', 'wortstellung', 'vorzubereiten'],
      ['bestehen', 'besteht · bestand · hat bestanden', 'ينجح في (امتحان)', 'Sie übt viel, damit sie die Prüfung besteht.', 'Sie übt viel, damit sie besteht die Prüfung.', 'بعد damit يقف الفعل في الآخر: die Prüfung besteht.', 'wortstellung', 'besteht'],
      ['die Prüfung', 'die Prüfungen', 'الامتحان', 'Ich melde mich zur Prüfung an, um sicher zu sein.', 'Ich melde mich zum Prüfung an, um sicher zu sein.', 'Prüfung مؤنثة (-ung): zur Prüfung.', 'genus'],
      ['üben', 'übt · übte · hat geübt', 'يتمرّن', 'Ich übe täglich, damit mein Partner mich versteht.', 'Ich übe täglich, um zu mein Partner mich versteht.', 'فاعل جديد (mein Partner) يحتاج damit، لا um zu.', 'wortstellung', 'übe'],
      ['der Fortschritt', 'die Fortschritte', 'التقدّم', 'Ich übe täglich, um Fortschritte zu machen.', 'Ich übe täglich, um Progress zu machen.', 'Progress إنجليزية؛ الألمانية Fortschritt، والجمع Fortschritte.', 'falser-freund', 'Fortschritte'],
      ['die Zukunft', '—', 'المستقبل', 'Ich plane für die Zukunft, um sicher zu leben.', 'Ich plane für der Zukunft, um sicher zu leben.', 'für تجرّ النصب: für die Zukunft.', 'kasus'],
      ['sich konzentrieren auf', 'konzentriert sich · konzentrierte sich · hat sich konzentriert', 'يركّز على', 'Ich schalte das Handy aus, um mich zu konzentrieren.', 'Ich schalte das Handy aus, um zu konzentrieren.', 'sich konzentrieren انعكاسي: um mich zu konzentrieren.', 'deklination', 'konzentrieren'],
      ['der Wunsch', 'die Wünsche', 'الأمنية · الرغبة', 'Mein Wunsch ist es, in Deutschland zu arbeiten.', 'Mein Wunsch ist, in Deutschland arbeiten.', 'المصدر يحتاج zu: zu arbeiten.', 'wortstellung'],
      ['erfüllen', 'erfüllt · erfüllte · hat erfüllt', 'يحقّق (أمنية)', 'Ich arbeite viel, damit sich mein Wunsch erfüllt.', 'Ich arbeite viel, damit mein Wunsch erfüllt.', 'sich erfüllen انعكاسي: damit sich mein Wunsch erfüllt.', 'deklination', 'erfüllt'],
      ['die Chance', 'die Chancen', 'الفرصة', 'Ich nutze jede Chance, um Deutsch zu sprechen.', 'Ich nutze jede Chance, für Deutsch zu sprechen.', 'الغاية بـ um … zu، لا für … zu (قياس على pour الفرنسية).', 'präposition'],
      ['nutzen', 'nutzt · nutzte · hat genutzt', 'يستغل · يستفيد من', 'Ich nutze die Zeit, um zu lesen.', 'Ich benutze die Zeit, um zu lesen.', 'nutzen للفرصة والوقت؛ benutzen للأداة الملموسة.', 'lexik-kollokation', 'nutze'],
      ['der Traum', 'die Träume', 'الحلم', 'Mein Traum ist es, ein Café zu eröffnen.', 'Mein Dream ist es, ein Café zu eröffnen.', 'Dream إنجليزية؛ الألمانية der Traum.', 'falser-freund'],
      ['verwirklichen', 'verwirklicht · verwirklichte · hat verwirklicht', 'يحقّق (حلمًا)', 'Ich spare, um meinen Traum zu verwirklichen.', 'Ich spare, damit ich meinen Traum zu verwirklichen.', 'damit تأخذ فعلًا مصرّفًا لا zu + مصدر: damit ich … verwirkliche.', 'wortstellung'],
      ['teilnehmen an', 'nimmt teil · nahm teil · hat teilgenommen', 'يشارك في', 'Ich lerne, um am Kurs teilzunehmen.', 'Ich lerne, um an den Kurs teilzunehmen.', 'teilnehmen an + داتيف: am Kurs.', 'kasus', 'teilzunehmen'],
      ['die Weiterbildung', 'die Weiterbildungen', 'التكوين المستمر', 'Ich mache eine Weiterbildung, damit ich mehr verdiene.', 'Ich mache eine Weiterbildung, damit ich verdiene mehr.', 'الفعل المصرّف آخر جملة damit: mehr verdiene.', 'wortstellung'],
      ['rechtzeitig', '—', 'في الوقت المناسب', 'Ich gehe früh los, um rechtzeitig anzukommen.', 'Ich gehe früh los, um rechtzeitig zu ankommen.', 'ankommen منفصل: anzukommen.', 'wortstellung']
    ],
    tricks: [
      { trick: 'فاعل واحد ← um zu، فاعلان ← damit', wie: 'Ich lerne, um zu arbeiten (أنا/أنا) · Ich lerne, damit meine Kinder stolz sind (أنا/أولادي).', warum: 'عدّ الفاعلين أسرع من الترجمة، والعربية تقول «لكي» للحالتين.', anchor: 'Ich übe täglich, damit mein Partner mich versteht.' },
      { trick: 'zu تتسلّل إلى قلب الفعل المنفصل', wie: 'vor|zu|bereiten · teil|zu|nehmen · an|zu|kommen.', warum: 'العين ترى zu قبل الفعل في الإنجليزية (to prepare)، والألمانية تضعها بعد السابقة.', anchor: 'Ich gehe früh los, um rechtzeitig anzukommen.' },
      { trick: 'um … zu لا für … zu', wie: 'um Deutsch zu sprechen، وليس für Deutsch zu sprechen (pour parler).', warum: 'الفرنسية تستعمل pour + مصدر، والناقل منها يُنتج für، وهو حرف جر لا رابط غاية.', anchor: 'Ich nutze jede Chance, um Deutsch zu sprechen.' }
    ],
    order: [
      { satz: 'Ich | lerne | jeden Tag, | | um mein Ziel zu erreichen.', ar: 'أتعلم كل يوم لأحقق هدفي.' },
      { satz: 'damit | sie die Prüfung | besteht.', clause: 'sub', ar: 'لكي تنجح في الامتحان (جملة الغاية وحدها)' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن أهدافك مع الألمانية: ثلاث بـ um … zu وجملتان بـ damit مع فاعل مختلف. سمِّ هدفًا، وامتحانًا، وفرصة.',
      promptDe: 'Ich lerne Deutsch, um … zu … · Ich übe …, damit meine … · Mein Ziel ist es, … zu …',
      points: ['ثلاث جمل um … zu', 'جملتان damit بفاعل آخر', 'فعل منفصل مع zu في وسطه', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'wortstellung'
    }
  },

  'b1-u1-l6': {
    items: [
      ['vorhaben', 'hat vor · hatte vor · hat vorgehabt', 'ينوي', 'Ich habe vor, im Sommer zu reisen.', 'Ich habe vor im Sommer reisen.', 'vorhaben يتبعه zu + مصدر، وفاصلة قبل الجملة المصدرية.', 'wortstellung', 'vor'],
      ['versuchen', 'versucht · versuchte · hat versucht', 'يحاول', 'Ich versuche, weniger Kaffee zu trinken.', 'Ich versuche, weniger Kaffee trinken.', 'versuchen + zu: zu trinken.', 'wortstellung', 'versuche'],
      ['anfangen', 'fängt an · fing an · hat angefangen', 'يبدأ', 'Er fängt an, Deutsch zu lernen.', 'Er fängt an zu lernen Deutsch.', 'المفعول قبل zu + المصدر: Deutsch zu lernen.', 'wortstellung', 'fängt'],
      ['aufhören', 'hört auf · hörte auf · hat aufgehört', 'يتوقف عن', 'Sie hat aufgehört zu rauchen.', 'Sie hat aufgehört rauchen.', 'aufhören + zu: aufgehört zu rauchen.', 'wortstellung', 'aufgehört'],
      ['vergessen', 'vergisst · vergaß · hat vergessen', 'ينسى', 'Vergiss nicht, die Tür abzuschließen.', 'Vergiss nicht, die Tür zu abschließen.', 'abschließen منفصل: abzuschließen.', 'wortstellung', 'Vergiss'],
      ['beschließen', 'beschließt · beschloss · hat beschlossen', 'يقرّر بحزم', 'Wir haben beschlossen, umzuziehen.', 'Wir haben beschlossen, zu umziehen.', 'umziehen منفصل: umzuziehen.', 'wortstellung', 'beschlossen'],
      ['planen', 'plant · plante · hat geplant', 'يخطّط', 'Ich plane, nächstes Jahr zu heiraten.', 'Ich plane zu heiraten nächstes Jahr.', 'الزمن قبل zu + المصدر: nächstes Jahr zu heiraten.', 'wortstellung', 'plane'],
      ['hoffen', 'hofft · hoffte · hat gehofft', 'يأمل', 'Ich hoffe, dich bald zu sehen.', 'Ich hoffe, zu sehen dich bald.', 'zu sehen يغلق الجملة؛ dich bald قبلهما.', 'wortstellung', 'hoffe'],
      ['die Möglichkeit', 'die Möglichkeiten', 'الإمكانية', 'Ich habe die Möglichkeit, im Ausland zu arbeiten.', 'Ich habe die Möglichkeit im Ausland arbeiten.', 'بعد Möglichkeit تأتي جملة مصدرية بـ zu وفاصلة.', 'wortstellung'],
      ['die Gelegenheit', 'die Gelegenheiten', 'الفرصة المناسبة', 'Das ist eine gute Gelegenheit, Deutsch zu üben.', 'Das ist eine gute Occasion, Deutsch zu üben.', 'Occasion فرنسية؛ الألمانية Gelegenheit، وAngebot للعرض.', 'falser-freund'],
      ['sich freuen auf', 'freut sich · freute sich · hat sich gefreut', 'يتطلع إلى', 'Ich freue mich darauf, dich zu sehen.', 'Ich freue mich, dich zu sehen auf.', 'darauf يسبق الجملة المصدرية: freue mich darauf, … zu sehen.', 'präposition', 'freue'],
      ['sich gewöhnen an', 'gewöhnt sich · gewöhnte sich · hat sich gewöhnt', 'يعتاد على', 'Ich habe mich daran gewöhnt, früh aufzustehen.', 'Ich habe mich gewöhnt, früh aufzustehen.', 'an تُستبق بـ daran قبل الجملة المصدرية.', 'präposition', 'gewöhnt'],
      ['der Vorschlag', 'die Vorschläge', 'الاقتراح', 'Mein Vorschlag ist, früher anzufangen.', 'Meine Vorschlag ist, früher anzufangen.', 'Vorschlag مذكر: mein Vorschlag، والجمع Vorschläge.', 'genus'],
      ['notwendig', '—', 'ضروري', 'Es ist notwendig, einen Termin zu vereinbaren.', 'Es ist notwendig, einen Termin vereinbaren.', 'Es ist + صفة + zu + مصدر: zu vereinbaren.', 'wortstellung'],
      ['vereinbaren', 'vereinbart · vereinbarte · hat vereinbart', 'يتفق على (موعد)', 'Ich habe vergessen, einen Termin zu vereinbaren.', 'Ich habe vergessen, einen Termin zu vereinbart.', 'بعد zu يأتي المصدر لا المشارك: zu vereinbaren.', 'konjugation'],
      ['erlauben', 'erlaubt · erlaubte · hat erlaubt', 'يسمح', 'Meine Eltern erlauben mir, allein zu reisen.', 'Meine Eltern erlauben mich, allein zu reisen.', 'erlauben + داتيف الشخص: erlauben mir.', 'kasus'],
      ['verbieten', 'verbietet · verbot · hat verboten', 'يمنع', 'Es ist verboten, hier zu parken.', 'Es ist verbieten, hier zu parken.', 'الحالة بالمشارك verboten، لا بالمصدر.', 'konjugation', 'verboten'],
      ['sich bemühen', 'bemüht sich · bemühte sich · hat sich bemüht', 'يبذل جهدًا', 'Ich bemühe mich, pünktlich zu sein.', 'Ich bemühe, pünktlich zu sein.', 'sich bemühen انعكاسي: bemühe mich.', 'deklination', 'bemühe'],
      ['die Schwierigkeit', 'die Schwierigkeiten', 'الصعوبة', 'Ich habe Schwierigkeiten, das zu verstehen.', 'Ich habe Schwierigkeiten, das zu verstehen zu.', 'zu مرة واحدة قبل المصدر: das zu verstehen.', 'wortstellung', 'Schwierigkeiten'],
      ['ohne zu', '—', 'دون أن', 'Er ging, ohne ein Wort zu sagen.', 'Er ging, ohne zu sagen ein Wort.', 'المفعول يسبق zu + المصدر: ein Wort zu sagen.', 'wortstellung', 'ohne']
    ],
    tricks: [
      { trick: 'الأفعال الناقصة ترفض zu', wie: 'ich muss gehen · ich kann kommen · ich will bleiben — بلا zu بعد الستة.', warum: 'بعد versuchen وvorhaben تأتي zu، وبعد الناقصة لا؛ المجموعتان تُحفظان متقابلتين.', anchor: 'Ich muss gehen.' },
      { trick: 'الفاصلة تسبق جملة zu إن حملت شيئًا', wie: 'Ich habe vor, | im Sommer zu reisen. الفاصلة بعد الفعل الرئيسي.', warum: 'العربية بلا فاصلة هنا، والألمانية تضعها متى حملت الجملة المصدرية مفعولًا أو ظرفًا.', anchor: 'Ich habe vor, im Sommer zu reisen.' },
      { trick: 'daran وdarauf: الحرف يأتي مضغوطًا قبل الجملة', wie: 'Ich freue mich darauf, … · Ich habe mich daran gewöhnt, …', warum: 'الفعل الذي يحمل حرف جر لا يتخلى عنه أمام جملة مصدرية، بل يضغطه في da(r) + الحرف.', anchor: 'Ich freue mich darauf, dich zu sehen.' }
    ],
    order: [
      { satz: 'Ich | versuche, | | | weniger Kaffee zu trinken.', ar: 'أحاول أن أشرب قهوة أقل.' },
      { satz: 'Wir | haben | | beschlossen, | umzuziehen.', ar: 'قررنا أن ننتقل.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن نواياك لهذا الشهر: ما تنوي، وما تحاول، وما بدأت، وما توقفت عنه، وما تتطلع إليه. كل جملة بـ zu، ومرة واحدة على الأقل فعل منفصل.',
      promptDe: 'Ich habe vor, … zu … · Ich versuche, … · Ich habe angefangen, … · Ich höre auf, … · Ich freue mich darauf, …',
      points: ['خمس جمل مصدرية بـ zu', 'فعل منفصل بـ zu في وسطه', 'فاصلة قبل الجملة المصدرية', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'wortstellung'
    }
  }
};

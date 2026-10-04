/* Deutschweg — P3.5 lexical layer, A2 unit 1 (part a): a2-u1-l1 … a2-u1-l3.
   Dativ, Dativverben, Wechselpräpositionen. Same row shape as tools/vocab-a0a1.js.
   Every example contains the blankable core; the compiler refuses the lesson
   otherwise. 26 items per lesson — the count the map declares. */

module.exports = {

  'a2-u1-l1': {
    items: [
      ['helfen', 'hilft · half · hat geholfen', 'يساعد', 'Ich helfe dem Nachbarn.', 'Ich helfe den Nachbarn.', 'helfen يأخذ داتيف: dem.', 'kasus', 'helfe'],
      ['danken', 'dankt · dankte · hat gedankt', 'يشكر', 'Ich danke der Lehrerin.', 'Ich danke die Lehrerin.', 'الشكر داتيف: der.', 'kasus', 'danke'],
      ['gefallen', 'gefällt · gefiel · hat gefallen', 'يعجب', 'Die Wohnung gefällt meiner Frau.', 'Die Wohnung gefällt meine Frau.', 'gefallen داتيف: meiner.', 'kasus', 'gefällt'],
      ['gehören', 'gehört · gehörte · hat gehört', 'يملك لـ', 'Das Fahrrad gehört dem Kind.', 'Das Fahrrad gehört das Kind.', 'المالك داتيف.', 'kasus', 'gehört'],
      ['der Nachbar', 'die Nachbarn', 'الجار', 'Ich helfe dem Nachbarn im Garten.', 'Ich helfe den Nachbar im Garten.', 'Nachbar يأخذ n في الداتيف المفرد.', 'kasus', 'Nachbarn'],
      ['die Nachbarin', 'die Nachbarinnen', 'الجارة', 'Ich danke der Nachbarin.', 'Ich danke die Nachbarin.', 'المؤنث في الداتيف der.', 'kasus', 'Nachbarin'],
      ['der Kollege', 'die Kollegen', 'الزميل', 'Ich zeige dem Kollegen den Plan.', 'Ich zeige den Kollege den Plan.', 'Kollege يأخذ n في الداتيف.', 'kasus', 'Kollegen'],
      ['mit dem Bus', '—', 'بالباص', 'Ich fahre mit dem Bus zur Arbeit.', 'Ich fahre mit der Bus zur Arbeit.', 'mit يأخذ داتيف: dem Bus.', 'präposition', 'dem'],
      ['nach dem Essen', '—', 'بعد الأكل', 'Nach dem Essen trinken wir Tee.', 'Nach das Essen trinken wir Tee.', 'nach يأخذ داتيف: dem.', 'präposition', 'dem'],
      ['seit einem Jahr', '—', 'منذ سنة', 'Ich lerne seit einem Jahr Deutsch.', 'Ich lerne seit ein Jahr Deutsch.', 'seit يأخذ داتيف: einem.', 'präposition', 'einem'],
      ['von der Arbeit', '—', 'من العمل', 'Ich komme gerade von der Arbeit.', 'Ich komme gerade von die Arbeit.', 'von يأخذ داتيف: der.', 'präposition', 'der'],
      ['zu dem Termin', '—', 'إلى الموعد', 'Ich gehe zu dem Termin um zehn.', 'Ich gehe zu den Termin um zehn.', 'zu يأخذ داتيف: dem.', 'präposition', 'dem'],
      ['bei der Firma', '—', 'عند الشركة', 'Sie arbeitet bei der Firma Huber.', 'Sie arbeitet bei die Firma Huber.', 'bei يأخذ داتيف: der.', 'präposition', 'der'],
      ['aus der Schweiz', '—', 'من سويسرا', 'Meine Kollegin kommt aus der Schweiz.', 'Meine Kollegin kommt aus die Schweiz.', 'aus يأخذ داتيف: der.', 'präposition', 'der'],
      ['gegenüber', '—', 'مقابل', 'Die Bank ist gegenüber dem Bahnhof.', 'Die Bank ist gegenüber der Bahnhof.', 'gegenüber يأخذ داتيف: dem.', 'präposition', 'dem'],
      ['die Möglichkeit', 'die Möglichkeiten', 'الإمكانية', 'Diese Möglichkeit gefällt dem Chef.', 'Diese Möglichkeit gefällt der Chef.', 'Chef مذكر: dem.', 'kasus', 'Möglichkeit'],
      ['der Termin', 'die Termine', 'الموعد', 'Ich sage dem Termin ab.', 'Ich sage den Termin ab.', 'absagen يأخذ داتيف: dem Termin.', 'kasus', 'Termin'],
      ['die Antwort', 'die Antworten', 'الجواب', 'Die Antwort gefällt der Kundin.', 'Die Antwort gefällt die Kundin.', 'Kundin مؤنث داتيف: der.', 'kasus', 'Antwort'],
      ['das Ergebnis', 'die Ergebnisse', 'النتيجة', 'Das Ergebnis gehört der Gruppe.', 'Das Ergebnis gehört die Gruppe.', 'gehören داتيف.', 'kasus', 'Ergebnis'],
      ['der Kunde', 'die Kunden', 'العميل', 'Ich danke dem Kunden für die Geduld.', 'Ich danke den Kunde für die Geduld.', 'Kunde يأخذ n في الداتيف.', 'kasus', 'Kunden'],
      ['die Firma', 'die Firmen', 'الشركة', 'Ich schreibe der Firma eine E-Mail.', 'Ich schreibe die Firma eine E-Mail.', 'الفعل مع مفعولين: هنا داتيف.', 'kasus', 'Firma'],
      ['der Kollege aus Tunis', '—', 'الزميل من تونس', 'Der Kollege aus Tunis hilft mir oft.', 'Der Kollege aus Tunis hilft mich oft.', 'mir ضمير داتيف.', 'kasus', 'mir'],
      ['die Lehrerin', 'die Lehrerinnen', 'المعلمة', 'Ich antworte der Lehrerin auf Deutsch.', 'Ich antworte die Lehrerin auf Deutsch.', 'antworten داتيف.', 'kasus', 'Lehrerin'],
      ['der Chef', 'die Chefs', 'الرئيس في العمل', 'Das passt dem Chef gut.', 'Das passt den Chef gut.', 'Chef مذكر داتيف dem.', 'kasus', 'Chef'],
      ['das Geschenk', 'die Geschenke', 'الهدية', 'Das Geschenk gefällt der Familie.', 'Das Geschenk gefällt die Familie.', 'Familie مؤنث داتيف der.', 'kasus', 'Geschenk'],
      ['die Wohnung', 'die Wohnungen', 'الشقة', 'Die Wohnung gefällt den Kindern.', 'Die Wohnung gefällt die Kinder.', 'الجمع في الداتيف den + n.', 'kasus', 'Wohnung'],
      ['liefern', 'liefert · lieferte · hat geliefert', 'يوصّل', 'Der Bäcker liefert mir das Brot.', 'Der Bäcker liefert mich das Brot.', 'الشخص في الداتيف: mir.', 'kasus', 'liefert'],
      ['nennen', 'nennt · nannte · hat genannt', 'يسمّي', 'Kannst du mir den Namen nennen?', 'Kannst du mich den Namen nennen?', 'الشخص في الداتيف: mir.', 'kasus', 'nennen'],
      ['beschreiben', 'beschreibt · beschrieb · hat beschrieben', 'يصف', 'Beschreiben Sie mir bitte den Weg!', 'Beschreiben Sie mich bitte den Weg!', 'الشخص في الداتيف: mir.', 'kasus', 'Beschreiben'],
      ['der Comic', 'die Comics', 'الكوميك', 'Der Comic gehört meinem Bruder.', 'Der Comic gehört mein Bruder.', 'gehören يريد داتيف: meinem Bruder.', 'kasus', 'Comic'],
      ['die Notiz', 'die Notizen', 'الملاحظة', 'Die Notiz hilft meiner Schwester.', 'Die Notiz hilft meine Schwester.', 'helfen يريد داتيف: meiner Schwester.', 'kasus', 'Notiz'],
      ['das Paar', 'die Paare', 'الزوجان/الزوج', 'Ich gebe dem Paar ein Geschenk.', 'Ich gebe das Paar ein Geschenk.', 'المفعول غير المباشر داتيف: dem Paar.', 'kasus', 'Paar'],
    ],
    tricks: [
      { trick: 'الداتيف يعطي: dem · der · dem · den', wie: 'Ich gebe dem Mann (m) das Buch · Ich gebe der Frau (f) das Buch · Ich gebe dem Kind (n) das Buch · Ich gebe den Kindern (Pl.) das Buch.', warum: 'العربية تعبّر بـ«لـ» فتفلت علامة الحالة، والجدول القصير يثبّت الأداة قبل أن تُقال.', anchor: 'dem Mann' },
      { trick: 'سبعة حروف تستدعي الداتيف دائمًا: mit nach seit von zu bei aus', wie: 'mit dem Bus · nach dem Essen · seit einem Jahr · von der Arbeit · zu dem Termin · bei der Firma · aus der Schweiz.', warum: 'هذه الحروف لا تتحرك بين حالتين، وحفظها كسلسلة أسرع من استدعاء القاعدة في كل جملة.', anchor: 'mit dem Bus' },
      { trick: 'helfen وdanken وgefallen وgehören تريد داتيف لا نصبًا', wie: 'Ich helfe dir. Ich danke ihm. Das gefällt mir. Das gehört ihr.', warum: 'تراكيب «أساعدك» و«أشكرك» العربية تعطي الفعل مفعولًا بلا وسيط، فيقع المتعلم في dich بدل dir.', anchor: 'gehören' }
    ]
  },

  'a2-u1-l2': {
    items: [
      ['geben', 'gibt · gab · hat gegeben', 'يعطي', 'Ich gebe dir das Buch.', 'Ich gebe dich das Buch.', 'الشخص داتيف والشيء نصب.', 'kasus', 'gebe'],
      ['schenken', 'schenkt · schenkte · hat geschenkt', 'يهدي', 'Ich schenke ihr eine Blume.', 'Ich schenke sie eine Blume.', 'الآخذ داتيف: ihr.', 'kasus', 'schenke'],
      ['zeigen', 'zeigt · zeigte · hat gezeigt', 'يُري', 'Zeig mir bitte den Weg.', 'Zeig mich bitte den Weg.', 'mir داتيف.', 'kasus', 'Zeig'],
      ['bringen', 'bringt · brachte · hat gebracht', 'يجلب', 'Ich bringe dir einen Kaffee.', 'Ich bringe dich einen Kaffee.', 'dir داتيف.', 'kasus', 'bringe'],
      ['empfehlen', 'empfiehlt · empfahl · hat empfohlen', 'ينصح بـ', 'Können Sie mir ein Hotel empfehlen?', 'Können Sie mich ein Hotel empfehlen?', 'mir داتيف.', 'kasus', 'empfehlen'],
      ['erklären', 'erklärt · erklärte · hat erklärt', 'يشرح', 'Er erklärt uns die Regel.', 'Er erklärt wir die Regel.', 'uns داتيف.', 'kasus', 'erklärt'],
      ['wünschen', 'wünscht · wünschte · hat gewünscht', 'يتمنى', 'Ich wünsche dir viel Glück.', 'Ich wünsche dich viel Glück.', 'dir داتيف.', 'kasus', 'wünsche'],
      ['schicken', 'schickt · schickte · hat geschickt', 'يرسل', 'Ich schicke meiner Schwester ein Foto.', 'Ich schicke meine Schwester ein Foto.', 'الأخت داتيف.', 'kasus', 'schicke'],
      ['leihen', 'leiht · lieh · hat geliehen', 'يعير/يستعير', 'Kannst du mir zehn Euro leihen?', 'Kannst du mich zehn Euro leihen?', 'mir داتيف.', 'kasus', 'leihen'],
      ['verbieten', 'verbietet · verbot · hat verboten', 'يمنع', 'Der Arzt verbietet mir den Zucker.', 'Der Arzt verbietet mich den Zucker.', 'mir داتيف.', 'kasus', 'verbietet'],
      ['erlauben', 'erlaubt · erlaubte · hat erlaubt', 'يسمح', 'Die Mutter erlaubt dem Kind ein Eis.', 'Die Mutter erlaubt das Kind ein Eis.', 'الطفل داتيف.', 'kasus', 'erlaubt'],
      ['antworten', 'antwortet · antwortete · hat geantwortet', 'يجيب', 'Antworte mir bitte schnell.', 'Antworte mich bitte schnell.', 'mir داتيف.', 'kasus', 'Antworte'],
      ['folgen', 'folgt · folgte · ist gefolgt', 'يتبع', 'Folgen Sie mir bitte.', 'Folgen Sie mich bitte.', 'mir داتيف، والفعل يتحرك بـ sein.', 'kasus', 'Folgen'],
      ['passen', 'passt · passte · hat gepasst', 'يناسب', 'Der Termin passt mir gut.', 'Der Termin passt mich gut.', 'mir داتيف.', 'kasus', 'passt'],
      ['schmecken', 'schmeckt · schmeckte · hat geschmeckt', 'يَطيب', 'Die Suppe schmeckt dem Kind.', 'Die Suppe schmeckt das Kind.', 'الطفل داتيف.', 'kasus', 'schmeckt'],
      ['weh tun', 'tut weh · tat weh · hat weh getan', 'يؤلم', 'Der Rücken tut mir weh.', 'Der Rücken tut mich weh.', 'mir داتيف مع weh tun.', 'kasus', 'tut'],
      ['leidtun', 'tut leid · tat leid · hat leidgetan', 'يُؤسف', 'Das tut mir sehr leid.', 'Das tut mich sehr leid.', 'mir داتيف.', 'kasus', 'tut'],
      ['fehlen', 'fehlt · fehlte · hat gefehlt', 'ينقص', 'Mir fehlt noch ein Stuhl.', 'Ich fehle noch ein Stuhl.', 'الشخص داتيف: mir.', 'kasus', 'fehlt'],
      ['zustimmen', 'stimmt zu · stimmte zu · hat zugestimmt', 'يوافق', 'Ich stimme dir zu.', 'Ich stimme dich zu.', 'dir داتيف.', 'kasus', 'stimme'],
      ['der Kunde', 'die Kunden', 'العميل', 'Wir zeigen dem Kunden die Ware.', 'Wir zeigen den Kunde die Ware.', 'Kunde داتيف: dem Kunden.', 'kasus', 'Kunden'],
      ['die Kundin', 'die Kundinnen', 'العميلة', 'Ich bringe der Kundin den Kaffee.', 'Ich bringe die Kundin den Kaffee.', 'Kundin داتيف: der.', 'kasus', 'Kundin'],
      ['der Chef', 'die Chefs', 'المدير', 'Ich zeige dem Chef den Bericht.', 'Ich zeige den Chef den Bericht.', 'Chef داتيف: dem.', 'kasus', 'Chef'],
      ['die Sekretärin', 'die Sekretärinnen', 'السكرتيرة', 'Ich schicke der Sekretärin die Datei.', 'Ich schicke die Sekretärin die Datei.', 'داتيف مؤنث: der.', 'kasus', 'Sekretärin'],
      ['der Onkel', 'die Onkel', 'العم', 'Ich schenke dem Onkel ein Buch.', 'Ich schenke den Onkel ein Buch.', 'Onkel داتيف: dem.', 'kasus', 'Onkel'],
      ['die Tante', 'die Tanten', 'العمة', 'Ich empfehle der Tante ein Café.', 'Ich empfehle die Tante ein Café.', 'Tante داتيف: der.', 'kasus', 'Tante'],
      ['die Gäste', '—', 'الضيوف', 'Wir zeigen den Gästen die Stadt.', 'Wir zeigen die Gäste die Stadt.', 'جمع الداتيف den + n: Gästen.', 'kasus', 'Gästen'],
      ['auspacken', 'packt aus · packte aus · hat ausgepackt', 'يفتح الحزمة', 'Die Kinder packen die Geschenke aus.', 'Die Kinder auspacken die Geschenke.', 'الفصل: packen … aus.', 'wortstellung', 'aus'],
      ['austauschen', 'tauscht aus · tauschte aus · hat ausgetauscht', 'يتبادل', 'Wir tauschen die Geschenke aus.', 'Wir austauschen die Geschenke.', 'الفصل: tauschen … aus.', 'wortstellung', 'aus'],
      ['das Gerät', 'die Geräte', 'الجهاز', 'Das Gerät gehört dem Nachbarn.', 'Das Gerät gehört der Nachbar.', 'gehören + داتيف: dem Nachbarn.', 'kasus', 'Gerät'],
      ['die Kunst', 'die Künste', 'الفن', 'Die Kunst gefällt meiner Mutter.', 'Die Kunst gefällt meine Mutter.', 'gefallen يريد داتيف: meiner Mutter.', 'kasus', 'Kunst'],
      ['der Laptop', 'die Laptops', 'الحاسوب المحمول', 'Der Laptop gehört mir nicht.', 'Der Laptop gehört mich nicht.', 'gehören + داتيف: mir لا mich.', 'kasus', 'Laptop'],
    ],
    tricks: [
      { trick: 'الآخذ داتيف والشيء نصب: ترتيب ثابت', wie: 'Ich gebe dem Kind den Ball. Ich schenke der Frau die Blume. Person vor Sache.', warum: 'العربية تقول «أعطي الطفل الكرة» بلا علامة، فالترتيب وحده هو ما يفصل الفاعل من الآخذ.', anchor: 'geben' },
      { trick: 'أفعال المشاعر والجسد: weh tun · leidtun · schmecken · passen · fehlen', wie: 'Der Rücken tut mir weh. Das tut mir leid. Die Suppe schmeckt mir. Der Termin passt mir. Mir fehlt ein Stuhl.', warum: 'هذه الأفعال كلها تضع الشخص في الداتيف، وهي الأكثر خطأً لأن العربية تجعل الشخص مفعولًا مباشرًا.', anchor: 'weh tun' },
      { trick: 'الأسماء المذكرة الضعيفة تأخذ n في الداتيف: dem Kunden · dem Kollegen · dem Nachbarn', wie: 'Ich zeige dem Kunden die Ware. Ich helfe dem Kollegen. Ich danke dem Nachbarn.', warum: 'هذه مجموعة مغلقة من الأسماء المذكرة، وإضافتها إلى الداتيف هي ما يميّز A2 عن A1.', anchor: 'der Kunde' }
    ]
  },

  'a2-u1-l3': {
    items: [
      ['an der Wand', '—', 'على الحائط', 'Das Bild hängt an der Wand.', 'Das Bild hängt an die Wand.', 'المكان wo يأخذ داتيف: an der Wand.', 'präposition', 'der'],
      ['an die Wand', '—', 'إلى الحائط', 'Ich hänge das Bild an die Wand.', 'Ich hänge das Bild an der Wand.', 'الحركة wohin تأخذ نصبًا: an die Wand.', 'präposition', 'die'],
      ['auf dem Tisch', '—', 'على الطاولة', 'Der Schlüssel liegt auf dem Tisch.', 'Der Schlüssel liegt auf den Tisch.', 'السكون يأخذ داتيف.', 'präposition', 'dem'],
      ['auf den Tisch', '—', 'على الطاولة (حركة)', 'Ich lege den Schlüssel auf den Tisch.', 'Ich lege den Schlüssel auf dem Tisch.', 'الحركة تأخذ نصبًا.', 'präposition', 'den'],
      ['in der Küche', '—', 'في المطبخ', 'Wir essen in der Küche.', 'Wir essen in die Küche.', 'المكان داتيف.', 'präposition', 'der'],
      ['in die Küche', '—', 'إلى المطبخ', 'Ich gehe in die Küche.', 'Ich gehe in der Küche.', 'الاتجاه نصب.', 'präposition', 'die'],
      ['über dem Bett', '—', 'فوق السرير', 'Die Lampe hängt über dem Bett.', 'Die Lampe hängt über das Bett.', 'السكون داتيف.', 'präposition', 'dem'],
      ['unter dem Tisch', '—', 'تحت الطاولة', 'Der Koffer steht unter dem Tisch.', 'Der Koffer steht unter den Tisch.', 'السكون داتيف.', 'präposition', 'dem'],
      ['vor der Tür', '—', 'أمام الباب', 'Das Auto steht vor der Tür.', 'Das Auto steht vor die Tür.', 'السكون داتيف.', 'präposition', 'der'],
      ['hinter dem Haus', '—', 'خلف البيت', 'Der Garten ist hinter dem Haus.', 'Der Garten ist hinter das Haus.', 'السكون داتيف.', 'präposition', 'dem'],
      ['neben dem Sofa', '—', 'بجانب الأريكة', 'Die Lampe steht neben dem Sofa.', 'Die Lampe steht neben das Sofa.', 'السكون داتيف.', 'präposition', 'dem'],
      ['zwischen den Stühlen', '—', 'بين الكراسي', 'Die Tasche liegt zwischen den Stühlen.', 'Die Tasche liegt zwischen die Stühle.', 'الجمع داتيف: den + n.', 'präposition', 'den'],
      ['hängen', 'hängt · hing · hat gehangen', 'يتعلّق', 'Das Bild hängt an der Wand.', 'Das Bild hängt an die Wand.', 'hängen الساكن مع داتيف.', 'präposition', 'hängt'],
      ['legen', 'legt · legte · hat gelegt', 'يضع مستلقيًا', 'Ich lege das Buch auf den Tisch.', 'Ich lege das Buch auf dem Tisch.', 'legen يحرّك فالتاء نصب.', 'präposition', 'lege'],
      ['liegen', 'liegt · lag · hat gelegen', 'يرقد', 'Das Buch liegt auf dem Tisch.', 'Das Buch liegt auf den Tisch.', 'liegen ساكن فداتيف.', 'präposition', 'liegt'],
      ['stellen', 'stellt · stellte · hat gestellt', 'يضع منصوبًا', 'Ich stelle die Flasche in den Kühlschrank.', 'Ich stelle die Flasche in dem Kühlschrank.', 'stellen حركة فنصب.', 'präposition', 'stelle'],
      ['stehen', 'steht · stand · hat gestanden', 'يقف', 'Die Flasche steht im Kühlschrank.', 'Die Flasche steht in den Kühlschrank.', 'stehen سكون فـim.', 'präposition', 'steht'],
      ['setzen', 'setzt · setzte · hat gesetzt', 'يُجلس', 'Ich setze das Kind auf den Stuhl.', 'Ich setze das Kind auf dem Stuhl.', 'setzen حركة فنصب.', 'präposition', 'setze'],
      ['sitzen', 'sitzt · saß · hat gesessen', 'يجلس', 'Das Kind sitzt auf dem Stuhl.', 'Das Kind sitzt auf den Stuhl.', 'sitzen سكون فداتيف.', 'präposition', 'sitzt'],
      ['stecken', 'steckt · steckte · hat gesteckt', 'يُدخل/يعلق', 'Der Schlüssel steckt in der Tür.', 'Der Schlüssel steckt in die Tür.', 'stecken الساكن داتيف.', 'präposition', 'steckt'],
      ['der Schrank', 'die Schränke', 'الخزانة', 'Die Tassen stehen im Schrank.', 'Die Tassen stehen in den Schrank.', 'السكون في الشهر: im.', 'präposition', 'Schrank'],
      ['das Regal', 'die Regale', 'الرف', 'Ich stelle die Bücher ins Regal.', 'Ich stelle die Bücher in dem Regal.', 'الاتجاه إلى الرف: ins.', 'präposition', 'Regal'],
      ['der Teppich', 'die Teppiche', 'السجادة', 'Der Teppich liegt auf dem Boden.', 'Der Teppich liegt auf den Boden.', 'السجادة ساكنة: auf dem.', 'präposition', 'Teppich'],
      ['die Ecke', 'die Ecken', 'الزاوية', 'Der Stuhl steht in der Ecke.', 'Der Stuhl steht in die Ecke.', 'مكان ثابت: in der Ecke.', 'präposition', 'Ecke'],
      ['der Balkon', 'die Balkone', 'الشرفة', 'Die Blumen stehen auf dem Balkon.', 'Die Blumen stehen auf den Balkon.', 'السكون: auf dem.', 'präposition', 'Balkon'],
      ['der Boden', 'die Böden', 'الأرضية', 'Die Tasche liegt auf dem Boden.', 'Die Tasche liegt auf den Boden.', 'السكون: auf dem.', 'präposition', 'Boden'],
      ['drinnen', '—', 'في الداخل', 'Bei Regen bleiben wir drinnen.', 'Bei Regen wir bleiben drinnen.', 'الفعل ثانيًا: bleiben wir.', 'wortstellung', 'drinnen'],
      ['nebenan', '—', 'في الجوار', 'Der Nachbar nebenan hilft immer.', 'Der Nachbar nebenan hilft immer an.', 'بلا an زائدة.', 'lexik-kollokation', 'nebenan'],
      ['die Postkarte', 'die Postkarten', 'بطاقة البريد', 'Ich hänge die Postkarte an die Wand.', 'Ich hänge die Postkarte in die Wand.', 'على الجدار: an die Wand.', 'präposition', 'Postkarte'],
      ['die Schere', 'die Scheren', 'المقص', 'Die Schere liegt auf dem Tisch.', 'Die Schere liegt auf den Tisch.', 'مكان ساكن: auf dem Tisch.', 'präposition', 'Schere'],
      ['das Tablet', 'die Tablets', 'الجهاز اللوحي', 'Das Tablet steht neben dem Sofa.', 'Das Tablet steht neben das Sofa.', 'مكان ساكن: neben dem Sofa.', 'präposition', 'Tablet'],
    ],
    tricks: [
      { trick: 'سؤالان يفصلان الحالتين: Wohin? نصب · Wo? داتيف', wie: 'Wohin legst du das Buch? – Auf den Tisch. Wo liegt das Buch? – Auf dem Tisch.', warum: 'العربية لا تُظهر الحالة، فالسؤال بسؤالين هو أسرع مفتاح يحفظه المتعلم.', anchor: 'auf den Tisch' },
      { trick: 'الفعل المتحرك يأخذ نصبًا والساكن داتيفًا: legen/liegen · stellen/stehen · setzen/sitzen', wie: 'Ich lege das Buch hin. Das Buch liegt. Ich stelle die Flasche. Die Flasche steht.', warum: 'الأزواج مفردات متقابلة؛ تمييزها يمنع الخطأ الأشهر عند الناطق بالعربية وهو استعمال «يضع» لفعلين مختلفين.', anchor: 'legen' },
      { trick: 'في الداتيف: dem · der · dem · den', wie: 'an dem = am · in dem = im · an der Wand · auf dem Tisch · in den Kühlschrank.', warum: 'الدمج am وim يخفي الحالة، فرؤية الأصل (dem) تكشف الداتيف قبل الدمج.', anchor: 'an der Wand' }
    ]
  }

};

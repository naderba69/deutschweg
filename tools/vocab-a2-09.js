/* Deutschweg — P3.2 lexical layer, A2 production unit 9 (PRODUCTION.md):
   a2-u4-l1 … a2-u4-l6. Same row format as vocab-a2-06.js. */

module.exports = {
  'a2-u4-l1': {
    items: [
      ['der Sprachkurs', 'die Sprachkurse', 'دورة اللغة', 'Der Sprachkurs beginnt um acht.', 'Der Course beginnt um acht.', 'course إنجليزية؛ Kurs أو Sprachkurs.', 'falser-freund'],
      ['die Hausaufgabe', 'die Hausaufgaben', 'الواجب المنزلي', 'Die Hausaufgabe ist lang.', 'Die Homework ist lang.', 'homework إنجليزية؛ Hausaufgabe.', 'falser-freund'],
      ['die Pause', 'die Pausen', 'الاستراحة', 'In der Pause trinke ich Wasser.', 'In die Pause trinke ich Wasser.', 'أين؟ ← in der Pause.', 'kasus'],
      ['die Klasse', 'die Klassen', 'الصف', 'Unsere Klasse hat 15 Teilnehmer.', 'Unsere Klasse haben 15 Teilnehmer.', 'مفرد ← hat.', 'konjugation'],
      ['die Teilnehmerin', 'die Teilnehmerinnen', 'المشاركة', 'Die Teilnehmerin kommt aus Sfax.', 'Die Teilnehmerin kommt von Sfax.', 'الأصل: aus Sfax.', 'präposition'],
      ['die Klausur', 'die Klausuren', 'الامتحان الكتابي', 'Die Klausur ist am Freitag.', 'Der Klausur ist am Freitag.', 'Klausur مؤنثة.', 'genus'],
      ['durchfallen', 'fällt durch · fiel durch · ist durchgefallen', 'يرسب', 'Ich bin nicht durchgefallen.', 'Ich habe nicht durchgefallen.', 'durchfallen ← sein.', 'konjugation', 'durchgefallen'],
      ['auswendig lernen', 'lernt auswendig · hat auswendig gelernt', 'يحفظ عن ظهر قلب', 'Ich lerne die Wörter auswendig.', 'Ich lerne die Wörter bei Herz.', 'by heart لا تُترجم: auswendig.', 'falser-freund', 'auswendig'],
      ['nachschlagen', 'schlägt nach · schlug nach · hat nachgeschlagen', 'يبحث في القاموس', 'Ich schlage das Wort nach.', 'Ich nachschlage das Wort.', 'منفصل: schlage … nach.', 'wortstellung', 'schlage'],
      ['übersetzen', 'übersetzt · übersetzte · hat übersetzt', 'يترجم', 'Kannst du das übersetzen?', 'Kannst du das übersetzt?', 'بعد kannst المصدر: übersetzen.', 'konjugation'],
      ['die Übersetzung', 'die Übersetzungen', 'الترجمة', 'Die Übersetzung ist falsch.', 'Der Übersetzung ist falsch.', '-ung مؤنثة.', 'genus'],
      ['die Aussprache', '—', 'النطق', 'Meine Aussprache ist noch nicht gut.', 'Mein Aussprache ist noch nicht gut.', 'Aussprache مؤنثة.', 'genus'],
      ['der Fehler', 'die Fehler', 'الخطأ', 'Fehler sind normal.', 'Fehlers sind normal.', 'جمع -er ثابت: Fehler.', 'plural'],
      ['Fortschritte machen', 'macht Fortschritte · hat Fortschritte gemacht', 'يحرز تقدمًا', 'Ich mache Fortschritte.', 'Ich mache Fortschritt.', 'بالجمع: Fortschritte machen.', 'plural', 'Fortschritte'],
      ['der Wortschatz', '—', 'المفردات', 'Mein Wortschatz wird größer.', 'Mein Wortschatz wird mehr groß.', 'المقارنة: größer.', 'deklination'],
      ['die Seite', 'die Seiten', 'الصفحة', 'Öffnet das Buch auf Seite zehn.', 'Öffnet das Buch auf Seite zehnte.', 'Seite zehn بالعدد الأصلي.', 'lexik-kollokation'],
      ['der Kugelschreiber', 'die Kugelschreiber', 'قلم الحبر الجاف', 'Hast du einen Kugelschreiber?', 'Hast du ein Kugelschreiber?', 'Kugelschreiber مذكر: einen.', 'kasus'],
      ['die Stufe', 'die Stufen', 'المستوى · الدرجة', 'Ich bin auf Stufe A2.', 'Ich bin in Stufe A2.', 'auf Stufe A2.', 'präposition'],
      ['der Kursleiter', 'die Kursleiter', 'مدرّس الدورة', 'Der Kursleiter erklärt die Regel.', 'Der Kursleiter erklärt uns die Regel zu.', 'erklären بلا zu.', 'lexik-kollokation'],
      ['die Teilnahme', '—', 'المشاركة', 'Die Teilnahme ist kostenlos.', 'Die Teilnahme sind kostenlos.', 'مفرد ← ist.', 'konjugation']
    ],
    tricks: [
      { trick: 'كلمات الدرس ألمانية: Kurs وPause وHausaufgabe', wie: 'der Kurs · die Pause · die Hausaufgabe · die Klausur — لا course ولا break ولا homework.', warum: 'بيئة الدرس أول مكان يُستعار فيه الإنجليزي، والمدرّس يلاحظها قبل الأخطاء النحوية.', anchor: 'Der Sprachkurs beginnt um acht.' },
      { trick: 'auswendig lernen وnachschlagen وübersetzen: أفعال المتعلم الثلاثة', wie: 'Ich lerne auswendig. · Ich schlage nach. · Ich übersetze.', warum: 'ثلاث مهارات بثلاثة أفعال دقيقة؛ by heart وlook up لا تُترجمان حرفيًا.', anchor: 'Ich lerne die Wörter auswendig.' },
      { trick: 'Fehler وFortschritte: بالجمع', wie: 'Fehler sind normal. · Ich mache Fortschritte.', warum: 'الجمع Fehler بلا نهاية، وFortschritte لا تأتي إلا جمعًا مع machen.', anchor: 'Ich mache Fortschritte.' }
    ],
    order: [
      { satz: 'In der Pause | trinke | ich Wasser.', ar: 'في الاستراحة أشرب الماء.' },
      { satz: 'Ich | schlage | das Wort | nach.', ar: 'أبحث عن الكلمة في القاموس.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن دورتك اللغوية: متى تبدأ، كم مشاركًا في الصف، ماذا تفعل في الاستراحة، كيف تتعلم الكلمات، وما مستواك وأي تقدّم أحرزت.',
      promptDe: 'Mein Sprachkurs beginnt um … · Unsere Klasse hat … · In der Pause … · Ich lerne die Wörter auswendig und schlage … nach. · Ich bin auf Stufe … und mache Fortschritte.',
      points: ['Sprachkurs أو Klasse', 'فعل منفصل (nachschlagen)', 'Fortschritte machen', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'lexik-kollokation'
    }
  },

  'a2-u4-l2': {
    items: [
      ['Herzlichen Glückwunsch', '—', 'تهانينا الحارة', 'Herzlichen Glückwunsch zum Geburtstag!', 'Happy Birthday zum Geburtstag!', 'happy birthday إنجليزية؛ Herzlichen Glückwunsch.', 'falser-freund', 'Glückwunsch'],
      ['feiern', 'feiert · feierte · hat gefeiert', 'يحتفل', 'Wir feiern am Samstag.', 'Wir feiern im Samstag.', 'اليوم بـ am.', 'präposition', 'feiern'],
      ['das Fest', 'die Feste', 'العيد · الاحتفال', 'Das Fest beginnt um sieben.', 'Der Fest beginnt um sieben.', 'Fest محايد.', 'genus'],
      ['die Feier', 'die Feiern', 'الحفل', 'Die Feier war schön.', 'Die Feier hatte schön.', 'الحالة: war.', 'konjugation'],
      ['heiraten', 'heiratet · heiratete · hat geheiratet', 'يتزوج', 'Meine Schwester heiratet im Mai.', 'Meine Schwester heiratet mit Ali.', 'heiraten + النصب مباشرة: heiratet Ali.', 'präposition', 'heiratet'],
      ['die Torte', 'die Torten', 'التورتة', 'Zum Geburtstag gibt es eine Torte.', 'Zum Geburtstag gibt es ein Torte.', 'Torte مؤنثة.', 'genus'],
      ['die Kerze', 'die Kerzen', 'الشمعة', 'Auf der Torte sind zehn Kerzen.', 'Auf der Torte sind zehn Kerze.', 'الجمع Kerzen.', 'plural', 'Kerzen'],
      ['der Besuch', 'die Besuche', 'الزيارة · الزوّار', 'Wir bekommen Besuch.', 'Wir bekommen Besucht.', 'Besuch اسم بلا t.', 'orthographie'],
      ['Weihnachten', '—', 'عيد الميلاد المسيحي', 'Weihnachten ist am 25. Dezember.', 'Weihnachten ist am 25 Dezember.', 'الترتيبي بنقطة.', 'orthographie'],
      ['Ostern', '—', 'عيد الفصح', 'An Ostern haben wir frei.', 'In Ostern haben wir frei.', 'an Ostern (أو zu Ostern).', 'präposition'],
      ['Silvester', '—', 'ليلة رأس السنة', 'An Silvester gibt es Feuerwerk.', 'An Silvester es gibt Feuerwerk.', 'الفعل ثانيًا.', 'wortstellung'],
      ['das Neujahr', '—', 'رأس السنة', 'An Neujahr schlafen wir lange.', 'Am Neujahr schlafen wir lange.', 'الأعياد بـ an بلا أداة: an Neujahr.', 'präposition'],
      ['das Opferfest', '—', 'عيد الأضحى', 'Das Opferfest ist ein wichtiges Fest in Tunesien.', 'Das Opferfest ist ein wichtig Fest in Tunesien.', 'ein + محايد: wichtiges.', 'deklination'],
      ['der Ramadan', '—', 'رمضان', 'Im Ramadan fasten wir.', 'In Ramadan fasten wir.', 'im Ramadan.', 'präposition'],
      ['fasten', 'fastet · fastete · hat gefastet', 'يصوم', 'Ich faste einen Monat.', 'Ich faste für einen Monat.', 'المدة بالنصب بلا für.', 'präposition', 'faste'],
      ['das Feuerwerk', 'die Feuerwerke', 'الألعاب النارية', 'Das Feuerwerk war toll.', 'Die Feuerwerk war toll.', 'Feuerwerk محايد.', 'genus'],
      ['anstoßen', 'stößt an · stieß an · hat angestoßen', 'ينخب', 'Wir stoßen auf das neue Jahr an.', 'Wir anstoßen auf das neue Jahr.', 'منفصل: stoßen … an.', 'wortstellung', 'stoßen'],
      ['die Tradition', 'die Traditionen', 'التقليد', 'Das ist eine alte Tradition.', 'Das ist eine alte Traditione.', 'Tradition بلا e في الآخر.', 'orthographie'],
      ['schmücken', 'schmückt · schmückte · hat geschmückt', 'يزيّن', 'Wir schmücken das Haus.', 'Wir schmücken den Haus.', 'Haus محايد: das Haus.', 'genus', 'schmücken'],
      ['alles Gute', '—', 'كل التوفيق', 'Alles Gute zum Geburtstag!', 'Alle Gute zum Geburtstag!', 'alles Gute (محايد).', 'deklination', 'Gute']
    ],
    tricks: [
      { trick: 'Herzlichen Glückwunsch وAlles Gute: صيغتا التهنئة', wie: 'Herzlichen Glückwunsch zum Geburtstag! · Alles Gute zum neuen Jahr!', warum: 'happy birthday تُترجم حرفيًا خطأً؛ الصيغتان الألمانيتان تعملان لكل مناسبة.', anchor: 'Herzlichen Glückwunsch zum Geburtstag!' },
      { trick: 'الأعياد بـ an وبلا أداة، والأشهر بـ im', wie: 'an Weihnachten · an Ostern · an Silvester — im Ramadan · im Dezember.', warum: 'العيد الواحد يأخذ an (أو zu)، والفترة الطويلة تأخذ im؛ الخلط يُخصم في الرسائل.', anchor: 'An Ostern haben wir frei.' },
      { trick: 'feiern بـ am، وheiraten بلا mit', wie: 'Wir feiern am Samstag. · Sie heiratet Ali.', warum: 'يوم الاحتفال بـ am كأي يوم، والزواج فعل متعدٍّ مباشر خلافًا للعربية «تزوجت بـ».', anchor: 'Wir feiern am Samstag.' }
    ],
    order: [
      { satz: 'Wir | feiern | am Samstag.', ar: 'نحتفل يوم السبت.' },
      { satz: 'An Silvester | gibt | es Feuerwerk.', ar: 'في ليلة رأس السنة توجد ألعاب نارية.' }
    ],
    writing: {
      prompt: 'اكتب دعوة قصيرة لعيد ميلادك في خمس جمل: الافتتاحية، متى تحتفل، ماذا يوجد (تورتة، موسيقى)، ماذا يُحضر الضيوف، وطلب الرد.',
      promptDe: 'Liebe Freunde, · ich feiere am … meinen Geburtstag. · Es gibt eine Torte und … · Bringt bitte … mit. · Sagt mir bitte Bescheid!',
      points: ['feiern am', 'es gibt مع النصب', 'أمر بالجمع (Bringt أو Sagt)', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'präposition'
    }
  },

  'a2-u4-l3': {
    items: [
      ['ausziehen', 'zieht aus · zog aus · hat ausgezogen', 'يخلع', 'Zieh die Schuhe aus!', 'Ausziehe die Schuhe!', 'الأمر: Zieh … aus.', 'wortstellung', 'Zieh'],
      ['das steht dir', '—', 'يليق بك', 'Das Kleid steht dir.', 'Das Kleid suits dir.', 'suits إنجليزية؛ steht dir.', 'falser-freund', 'steht'],
      ['die Umkleidekabine', 'die Umkleidekabinen', 'غرفة القياس', 'Wo ist die Umkleidekabine?', 'Wo ist der Umkleidekabine?', 'Kabine مؤنثة.', 'genus'],
      ['die Bluse', 'die Blusen', 'البلوزة', 'Die Bluse ist aus Seide.', 'Der Bluse ist aus Seide.', 'Bluse مؤنثة.', 'genus'],
      ['der Anzug', 'die Anzüge', 'البدلة', 'Zur Hochzeit trage ich einen Anzug.', 'Zur Hochzeit trage ich ein Anzug.', 'Anzug مذكر: einen.', 'kasus'],
      ['die Krawatte', 'die Krawatten', 'ربطة العنق', 'Die Krawatte passt zum Anzug.', 'Die Krawatte passt mit dem Anzug.', 'passen zu + داتيف.', 'präposition'],
      ['der Gürtel', 'die Gürtel', 'الحزام', 'Der Gürtel ist aus Leder.', 'Die Gürtel ist aus Leder.', 'Gürtel مذكر.', 'genus'],
      ['die Socken', 'die Socke · die Socken', 'الجوارب', 'Ich brauche neue Socken.', 'Ich brauche neue Sockes.', 'الجمع Socken.', 'plural'],
      ['die Stiefel', 'der Stiefel · die Stiefel', 'الأحذية الطويلة', 'Im Winter trage ich Stiefel.', 'Im Winter trage ich Stiefeln.', 'الجمع Stiefel بلا -n في النصب.', 'plural'],
      ['der Schal', 'die Schals', 'الوشاح', 'Der Schal ist warm.', 'Das Schal ist warm.', 'Schal مذكر.', 'genus'],
      ['die Handschuhe', 'der Handschuh · die Handschuhe', 'القفازات', 'Ohne Handschuhe friere ich.', 'Ohne Handschuhen friere ich.', 'ohne + النصب: Handschuhe.', 'kasus'],
      ['aus Baumwolle', '—', 'من القطن', 'Das T-Shirt ist aus Baumwolle.', 'Das T-Shirt ist von Baumwolle.', 'المادة بـ aus.', 'präposition', 'Baumwolle'],
      ['aus Leder', '—', 'من الجلد', 'Die Schuhe sind aus Leder.', 'Die Schuhe sind in Leder.', 'المادة بـ aus.', 'präposition', 'Leder'],
      ['die Wolle', '—', 'الصوف', 'Der Pullover ist aus Wolle.', 'Der Pullover ist aus Wollen.', 'Wolle مفرد.', 'plural'],
      ['passen zu', '—', 'يتناسق مع', 'Die Schuhe passen zu der Hose.', 'Die Schuhe passen mit der Hose.', 'passen zu.', 'präposition', 'zu'],
      ['die Mode', '—', 'الموضة', 'Das ist jetzt Mode.', 'Das ist jetzt Modus.', 'Mode (الموضة) ≠ Modus (الوضع).', 'lexik-kollokation'],
      ['modisch', '—', 'عصري (موضة)', 'Die Jacke ist modisch.', 'Die Jacke ist modische.', 'بعد ist بلا نهاية.', 'deklination'],
      ['der Reißverschluss', 'die Reißverschlüsse', 'السحّاب', 'Der Reißverschluss ist kaputt.', 'Die Reißverschluss ist kaputt.', 'Reißverschluss مذكر.', 'genus'],
      ['der Knopf', 'die Knöpfe', 'الزرّ', 'Ein Knopf fehlt.', 'Ein Knopf fehlen.', 'مفرد ← fehlt.', 'konjugation'],
      ['das Schaufenster', 'die Schaufenster', 'واجهة المتجر', 'Im Schaufenster hängt ein Kleid.', 'In Schaufenster hängt ein Kleid.', 'im Schaufenster.', 'präposition']
    ],
    tricks: [
      { trick: 'المادة بـ aus: aus Wolle، aus Leder، aus Baumwolle', wie: 'ein Pullover aus Wolle · Schuhe aus Leder · ein T-Shirt aus Baumwolle.', warum: 'en coton الفرنسية تُغري بـ in، والألمانية تقول «من» المادة: aus.', anchor: 'Das T-Shirt ist aus Baumwolle.' },
      { trick: 'steht dir وpasst dir وpasst zu: ثلاثة أفعال للملابس', wie: 'Das Kleid steht dir (يليق) · Die Hose passt mir (المقاس) · Der Schal passt zum Mantel (التناسق).', warum: 'ثلاثة معانٍ بثلاثة تراكيب، وsuits وgoes with لا تُترجمان.', anchor: 'Das Kleid steht dir.' },
      { trick: 'الأزواج بالجمع: Socken وStiefel وHandschuhe', wie: 'neue Socken · Stiefel (بلا -n) · Handschuhe — ein Paar Schuhe.', warum: 'قطعتان = جمع في الألمانية؛ المفرد Socke وStiefel وHandschuh لقطعة واحدة.', anchor: 'Ich brauche neue Socken.' }
    ],
    order: [
      { satz: 'Das Kleid | steht | dir.', ar: 'الفستان يليق بك.' },
      { satz: 'Im Winter | trage | ich Stiefel.', ar: 'في الشتاء أرتدي أحذية طويلة.' }
    ],
    writing: {
      prompt: 'صف ملابسك للمناسبات في خمس جمل: ماذا ترتدي في الزفاف، ماذا في الشتاء، ممّ صُنعت قطعة ما (aus)، ماذا يليق بك، وماذا يتناسق مع ماذا.',
      promptDe: 'Zur Hochzeit trage ich … · Im Winter trage ich … · Mein … ist aus … · … steht mir gut. · Der … passt zu …',
      points: ['aus مع المادة', 'steht mir أو passt zu', 'قطعة بالجمع (Socken أو Stiefel أو Handschuhe)', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'präposition'
    }
  },

  'a2-u4-l4': {
    items: [
      ['bewölkt', '—', 'غائم', 'Heute ist es bewölkt.', 'Heute ist es cloudy.', 'cloudy إنجليزية؛ bewölkt.', 'falser-freund'],
      ['die Wolke', 'die Wolken', 'السحابة', 'Am Himmel sind viele Wolken.', 'Am Himmel sind viele Wolke.', 'الجمع Wolken.', 'plural', 'Wolken'],
      ['seit', '—', 'منذ', 'Es regnet seit Stunden.', 'Es regnet since Stunden.', 'since إنجليزية؛ seit + داتيف.', 'falser-freund'],
      ['der Schauer', 'die Schauer', 'زخّة مطر', 'Am Nachmittag gibt es Schauer.', 'Am Nachmittag gibt es Schauers.', 'الجمع Schauer بلا -s.', 'plural'],
      ['der Wind', 'die Winde', 'الريح', 'Der Wind ist stark.', 'Die Wind ist stark.', 'Wind مذكر.', 'genus'],
      ['windig', '—', 'عاصف', 'Heute ist es windig.', 'Heute ist es windisch.', 'windig بـ -ig.', 'orthographie'],
      ['der Nebel', '—', 'الضباب', 'Am Morgen gibt es Nebel.', 'Am Morgen gibt es Nebeln.', 'Nebel مفرد.', 'plural'],
      ['neblig', '—', 'ضبابي', 'Es ist neblig.', 'Es ist nebel.', 'الصفة neblig؛ Nebel اسم.', 'deklination'],
      ['das Grad', 'die Grad', 'الدرجة (حرارة)', 'Heute sind es 30 Grad.', 'Heute sind es 30 Grade.', 'Grad بلا جمع بعد العدد.', 'plural'],
      ['minus', '—', 'تحت الصفر', 'Es sind minus fünf Grad.', 'Es sind moins fünf Grad.', 'moins الفرنسية؛ minus.', 'falser-freund'],
      ['der Blitz', 'die Blitze', 'البرق', 'Ich habe Angst vor Blitzen.', 'Ich habe Angst vor Blitze.', 'vor + داتيف الجمع: Blitzen.', 'kasus', 'Blitzen'],
      ['der Donner', '—', 'الرعد', 'Der Donner war laut.', 'Das Donner war laut.', 'Donner مذكر.', 'genus'],
      ['der Sturm', 'die Stürme', 'العاصفة', 'Ein Sturm kommt.', 'Eine Sturm kommt.', 'Sturm مذكر: ein Sturm.', 'genus'],
      ['die Hitze', '—', 'الحرّ الشديد', 'Die Hitze ist schlimm.', 'Der Hitze ist schlimm.', 'Hitze مؤنثة.', 'genus'],
      ['die Kälte', '—', 'البرد الشديد', 'Die Kälte kommt im Januar.', 'Die Kälte kommen im Januar.', 'مفرد ← kommt.', 'konjugation'],
      ['trocken', '—', 'جاف', 'Der Sommer war trocken.', 'Der Sommer war trockene.', 'بعد war بلا نهاية.', 'deklination'],
      ['nass', '—', 'مبلّل', 'Meine Schuhe sind nass.', 'Meine Schuhe sind nasse.', 'بعد sind بلا نهاية.', 'deklination'],
      ['der Frühling', '—', 'الربيع', 'Im Frühling blühen die Blumen.', 'In Frühling blühen die Blumen.', 'im Frühling.', 'präposition'],
      ['der Herbst', '—', 'الخريف', 'Im Herbst fallen die Blätter.', 'Im Herbst fallen die Blatter.', 'الجمع Blätter مع Umlaut.', 'plural'],
      ['die Jahreszeit', 'die Jahreszeiten', 'فصل السنة', 'Welche Jahreszeit magst du?', 'Welcher Jahreszeit magst du?', 'Jahreszeit مؤنثة: welche.', 'genus']
    ],
    tricks: [
      { trick: 'es للطقس: Es regnet، Es ist bewölkt، Es sind 30 Grad', wie: 'Es regnet. · Es schneit. · Es ist windig. · Es sind minus fünf Grad.', warum: 'الفاعل الوهمي es إلزامي؛ it الإنجليزية لا تدخل، والعربية بلا فاعل تُغري بحذفه.', anchor: 'Heute ist es bewölkt.' },
      { trick: 'seit + داتيف للمدة الممتدة إلى الآن', wie: 'seit Stunden · seit gestern · seit zwei Tagen.', warum: 'since وdepuis تُترجمان إلى seit، لكن الاسم بعدها داتيف (Tagen) والفعل مضارع.', anchor: 'Es regnet seit Stunden.' },
      { trick: 'الاسم والصفة: Wind وwindig، Nebel وneblig، Wolke وbewölkt', wie: 'der Wind ← windig · der Nebel ← neblig · die Wolke ← bewölkt.', warum: 'كل ظاهرة لها اسم وصفة؛ es ist Nebel خلط بينهما.', anchor: 'Am Morgen gibt es Nebel.' }
    ],
    order: [
      { satz: 'Heute | ist | es bewölkt.', ar: 'اليوم الطقس غائم.' },
      { satz: 'Im Herbst | fallen | die Blätter.', ar: 'في الخريف تسقط الأوراق.' }
    ],
    writing: {
      prompt: 'اكتب نشرة طقس لمدينتك في خمس جمل: اليوم، درجة الحرارة، الريح أو الضباب، منذ متى (seit)، وفصلك المفضّل ولماذا.',
      promptDe: 'Heute ist es … · Es sind … Grad. · Es ist windig und … · Es regnet seit … · Meine Lieblingsjahreszeit ist der …, weil …',
      points: ['es للطقس ثلاث مرات', 'Grad بلا جمع', 'seit مع الداتيف', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'lexik-kollokation'
    }
  },

  'a2-u4-l5': {
    items: [
      ['die Zusage', 'die Zusagen', 'الموافقة على الدعوة', 'Danke für deine Zusage.', 'Danke für deiner Zusage.', 'für + النصب.', 'kasus'],
      ['die Absage', 'die Absagen', 'الاعتذار عن الدعوة', 'Ich muss dir leider eine Absage schicken.', 'Ich muss dir leider ein Absage schicken.', 'Absage مؤنثة.', 'genus'],
      ['vielen Dank', '—', 'شكرًا جزيلًا', 'Vielen Dank für die Einladung.', 'Thanks for die Einladung.', 'thanks إنجليزية؛ Vielen Dank für.', 'falser-freund', 'Dank'],
      ['Zeit haben', 'hat Zeit · hatte Zeit · hat Zeit gehabt', 'لديه وقت', 'Hast du am Samstag Zeit?', 'Hast du am Samstag die Zeit?', 'بلا أداة: Zeit haben.', 'lexik-kollokation', 'Zeit'],
      ['sollen', 'soll · sollst · sollen', 'ينبغي (عرض خدمة)', 'Soll ich etwas mitbringen?', 'Soll ich etwas mitzubringen?', 'بعد soll مصدر بلا zu.', 'konjugation', 'Soll'],
      ['losgehen', 'geht los · ging los · ist losgegangen', 'يبدأ (حفل)', 'Wann geht es los?', 'Wann losgeht es?', 'منفصل: geht … los.', 'wortstellung', 'los'],
      ['der Treffpunkt', 'die Treffpunkte', 'مكان اللقاء', 'Der Treffpunkt ist der Bahnhof.', 'Die Treffpunkt ist der Bahnhof.', 'Treffpunkt مذكر.', 'genus'],
      ['die Grillparty', 'die Grillpartys', 'حفلة شواء', 'Wir machen eine Grillparty.', 'Wir machen ein Grillparty.', 'Party مؤنثة.', 'genus'],
      ['grillen', 'grillt · grillte · hat gegrillt', 'يشوي', 'Am Sonntag grillen wir im Garten.', 'Am Sonntag wir grillen im Garten.', 'الفعل ثانيًا.', 'wortstellung', 'grillen'],
      ['der Nachtisch', '—', 'التحلية', 'Ich bringe den Nachtisch mit.', 'Ich bringe der Nachtisch mit.', 'مفعول مذكر: den Nachtisch.', 'kasus'],
      ['die Gastgeberin', 'die Gastgeberinnen', 'المضيفة', 'Die Gastgeberin begrüßt uns.', 'Der Gastgeberin begrüßt uns.', '-in مؤنثة.', 'genus'],
      ['begrüßen', 'begrüßt · begrüßte · hat begrüßt', 'يرحّب بـ', 'Er begrüßt die Gäste.', 'Er begrüßt zu den Gästen.', 'begrüßen + النصب مباشرة.', 'präposition', 'begrüßt'],
      ['etwas später', '—', 'متأخرًا قليلًا', 'Ich komme etwas später.', 'Ich komme etwas mehr spät.', 'später (مقارنة spät).', 'deklination', 'später'],
      ['vielleicht', '—', 'ربما', 'Vielleicht komme ich später.', 'Vielleicht ich komme später.', 'بعد Vielleicht الفعل ثانيًا.', 'wortstellung'],
      ['sehr gern', '—', 'بكل سرور', 'Kommst du mit? – Sehr gern!', 'Kommst du mit? – Very gern!', 'very إنجليزية؛ sehr gern.', 'falser-freund', 'gern'],
      ['nächstes Mal', '—', 'المرة القادمة', 'Nächstes Mal komme ich bestimmt.', 'Nächste Mal komme ich bestimmt.', 'Mal محايد: nächstes Mal.', 'deklination', 'Nächstes'],
      ['die Freude', '—', 'الفرح', 'Mit großer Freude komme ich.', 'Mit große Freude komme ich.', 'mit + داتيف: großer Freude.', 'kasus'],
      ['der Anlass', 'die Anlässe', 'المناسبة', 'Was ist der Anlass?', 'Was ist die Anlass?', 'Anlass مذكر.', 'genus'],
      ['das Konzert', 'die Konzerte', 'الحفل الموسيقي', 'Wir gehen ins Konzert.', 'Wir gehen im Konzert.', 'الاتجاه: ins Konzert.', 'präposition'],
      ['die Eintrittskarte', 'die Eintrittskarten', 'تذكرة الدخول', 'Ich habe zwei Eintrittskarten.', 'Ich habe zwei Eintrittskarte.', 'الجمع Eintrittskarten.', 'plural', 'Eintrittskarten']
    ],
    tricks: [
      { trick: 'الرد على الدعوة: شكر، ثم نعم أو لا، ثم سبب أو بديل', wie: 'Vielen Dank für die Einladung. Ja, sehr gern! — أو: Leider kann ich nicht, weil … Nächstes Mal bestimmt.', warum: 'امتحان A2 يقيّم الوظائف الثلاث؛ الرفض بلا شكر وبديل يُقرأ فظًّا.', anchor: 'Vielen Dank für die Einladung.' },
      { trick: 'Soll ich …؟ عرض المساعدة بـ sollen', wie: 'Soll ich etwas mitbringen? · Soll ich dich abholen?', warum: 'العرض المهذب في الألمانية بـ sollen لا بـ kann؛ Soll ich تُفهم «هل تريد أن…».', anchor: 'Soll ich etwas mitbringen?' },
      { trick: 'Wann geht es los؟ والمنفصل los في الآخر', wie: 'Wann geht es los? · Es geht um acht los. · Es fängt um acht an.', warum: 'losgehen أكثر أفعال الحفلات استعمالًا، وسابقته تُنسى لأنها كلمة قصيرة.', anchor: 'Wann geht es los?' }
    ],
    order: [
      { satz: 'Vielleicht | komme | ich später.', ar: 'ربما آتي لاحقًا.' },
      { satz: 'Am Sonntag | grillen | wir im Garten.', ar: 'يوم الأحد نشوي في الحديقة.' }
    ],
    writing: {
      prompt: 'صديقتك دعتك إلى حفلة شواء يوم السبت. اكتب ردًا من خمس جمل: شكر، هل تأتي (نعم أو اعتذار بسبب)، سؤال عن موعد البدء، عرض إحضار شيء بـ Soll ich، وختام.',
      promptDe: 'Liebe …, vielen Dank für die Einladung. · Ja, sehr gern! · Wann geht es los? · Soll ich … mitbringen? · Bis Samstag!',
      points: ['Vielen Dank für مع النصب', 'Soll ich مع مصدر', 'weil أو nächstes Mal', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'register'
    }
  },

  'a2-u4-l6': {
    items: [
      ['funktionieren', 'funktioniert · funktionierte · hat funktioniert', 'يعمل (جهاز)', 'Das Gerät funktioniert nicht.', 'Das Gerät works nicht.', 'works إنجليزية؛ funktioniert.', 'falser-freund', 'funktioniert'],
      ['das Gerät', 'die Geräte', 'الجهاز', 'Das Gerät ist neu.', 'Der Gerät ist neu.', 'Gerät محايد.', 'genus'],
      ['verlieren', 'verliert · verlor · hat verloren', 'يفقد', 'Ich habe meinen Schlüssel verloren.', 'Ich habe meinen Schlüssel lost.', 'lost إنجليزية؛ verloren.', 'falser-freund', 'verloren'],
      ['der Kundendienst', '—', 'خدمة ما بعد البيع', 'Ich rufe den Kundendienst an.', 'Ich rufe dem Kundendienst an.', 'anrufen + النصب: den Kundendienst.', 'kasus'],
      ['der Akku', 'die Akkus', 'البطارية القابلة للشحن', 'Der Akku ist leer.', 'Die Akku ist leer.', 'Akku مذكر.', 'genus'],
      ['aufladen', 'lädt auf · lud auf · hat aufgeladen', 'يشحن', 'Ich lade mein Handy auf.', 'Ich auflade mein Handy.', 'منفصل: lade … auf.', 'wortstellung', 'lade'],
      ['das Ladegerät', 'die Ladegeräte', 'الشاحن', 'Hast du ein Ladegerät?', 'Hast du einen Ladegerät?', 'Ladegerät محايد: ein.', 'kasus'],
      ['das Passwort', 'die Passwörter', 'كلمة المرور', 'Ich habe mein Passwort vergessen.', 'Ich habe meine Passwort vergessen.', 'Passwort محايد: mein.', 'genus'],
      ['das WLAN', '—', 'الواي فاي', 'Das WLAN funktioniert nicht.', 'Die WLAN funktioniert nicht.', 'WLAN محايد.', 'genus'],
      ['der Bildschirm', 'die Bildschirme', 'الشاشة', 'Der Bildschirm ist schwarz.', 'Der Bildschirm ist schwarze.', 'بعد ist بلا نهاية.', 'deklination'],
      ['zurückbringen', 'bringt zurück · brachte zurück · hat zurückgebracht', 'يُعيد إلى المتجر', 'Ich bringe das Gerät zurück.', 'Ich zurückbringe das Gerät.', 'منفصل: bringe … zurück.', 'wortstellung', 'bringe'],
      ['der Defekt', 'die Defekte', 'العطل', 'Das Gerät hat einen Defekt.', 'Das Gerät hat ein Defekt.', 'Defekt مذكر: einen.', 'kasus'],
      ['kaputtgehen', 'geht kaputt · ging kaputt · ist kaputtgegangen', 'يتعطّل', 'Mein Handy ist kaputtgegangen.', 'Mein Handy hat kaputtgegangen.', 'gehen ← sein.', 'konjugation', 'kaputtgegangen'],
      ['das Problem', 'die Probleme', 'المشكلة', 'Ich habe ein Problem mit dem Drucker.', 'Ich habe ein Problem mit den Drucker.', 'mit + داتيف: dem Drucker.', 'kasus'],
      ['der Drucker', 'die Drucker', 'الطابعة', 'Der Drucker druckt nicht.', 'Die Drucker druckt nicht.', 'Drucker مذكر.', 'genus'],
      ['ausdrucken', 'druckt aus · druckte aus · hat ausgedruckt', 'يطبع', 'Ich drucke das Formular aus.', 'Ich ausdrucke das Formular.', 'منفصل: drucke … aus.', 'wortstellung', 'drucke'],
      ['reklamieren', 'reklamiert · reklamierte · hat reklamiert', 'يقدّم شكوى عن سلعة', 'Ich möchte das Gerät reklamieren.', 'Ich möchte das Gerät reclaimen.', 'reclaim إنجليزية؛ reklamieren.', 'falser-freund'],
      ['die Störung', 'die Störungen', 'الخلل · الانقطاع', 'Es gibt eine Störung im Netz.', 'Es gibt ein Störung im Netz.', '-ung مؤنثة.', 'genus'],
      ['der Stecker', 'die Stecker', 'القابس', 'Der Stecker ist nicht drin.', 'Der Stecker ist nicht in drin.', 'drin ظرف بلا in.', 'präposition'],
      ['die Steckdose', 'die Steckdosen', 'مقبس الكهرباء', 'Wo ist eine Steckdose?', 'Wo ist ein Steckdose?', 'Steckdose مؤنثة.', 'genus']
    ],
    tricks: [
      { trick: 'funktioniert nicht، verloren، reparieren: ثلاثة أفعال للمشكلة', wie: 'Das Gerät funktioniert nicht. · Ich habe es verloren. · Können Sie das reparieren?', warum: 'works وlost وfixen أول ما يُستعار عند الضيق، والألمانية تملك الفعل الدقيق لكلٍّ.', anchor: 'Das Gerät funktioniert nicht.' },
      { trick: 'الأجهزة محايدة غالبًا: das Gerät، das Ladegerät، das WLAN، das Passwort', wie: 'das Gerät · das Ladegerät · das WLAN · das Passwort — لكن der Akku وder Drucker وder Stecker.', warum: 'المركّبات على -gerät محايدة؛ الاستثناءات الثلاثة تُحفظ وحدها.', anchor: 'Hast du ein Ladegerät?' },
      { trick: 'kaputtgehen بـ sein، وaufladen وausdrucken منفصلان', wie: 'Es ist kaputtgegangen. · Ich lade es auf. · Ich drucke es aus.', warum: 'ثلاثة أفعال تقنية بثلاث قواعد أساسية: المساعد sein، والسابقة في الآخر.', anchor: 'Mein Handy ist kaputtgegangen.' }
    ],
    order: [
      { satz: 'Das Gerät | funktioniert | nicht.', ar: 'الجهاز لا يعمل.' },
      { satz: 'Ich | lade | mein Handy | auf.', ar: 'أشحن هاتفي.' }
    ],
    writing: {
      prompt: 'هاتفك تعطّل. اكتب خمس جمل لخدمة الزبائن: ما المشكلة، منذ متى، ماذا جرّبت (شحن، إعادة تشغيل)، أن لديك فاتورة، وماذا تريد (إصلاح أو إرجاع).',
      promptDe: 'Mein Handy funktioniert nicht. · Seit … ist der Bildschirm schwarz. · Ich habe den Akku aufgeladen, aber … · Ich habe die Rechnung. · Können Sie das Gerät reparieren?',
      points: ['funktioniert nicht', 'فعل منفصل في Perfekt (aufgeladen)', 'Können Sie …?', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'lexik-kollokation'
    }
  }
};

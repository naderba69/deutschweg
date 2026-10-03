/* Deutschweg — P3.2 lexical layer, A1 production unit 5 (last A1 unit):
   a1-u4-l1 … a1-u4-l6. Same row format as vocab-a1-02.js. */

module.exports = {
  'a1-u4-l1': {
    items: [
      ['hell', '—', 'مضيء', 'Das Zimmer ist hell.', 'Das Zimmer hat hell.', 'الصفة بعد ist، لا hat.', 'lexik-kollokation'],
      ['dunkel', '—', 'مظلم', 'Der Flur ist dunkel.', 'Der Flur ist dunkle.', 'بعد ist بلا نهاية: dunkel.', 'deklination'],
      ['das Wohnzimmer', 'die Wohnzimmer', 'غرفة المعيشة', 'Das Wohnzimmer ist groß.', 'Der Wohnzimmer ist groß.', 'Zimmer محايد ← das Wohnzimmer.', 'genus'],
      ['das Schlafzimmer', 'die Schlafzimmer', 'غرفة النوم', 'Im Schlafzimmer steht ein Bett.', 'In Schlafzimmer steht ein Bett.', 'im Schlafzimmer.', 'präposition'],
      ['der Flur', 'die Flure', 'الممرّ', 'Der Flur ist lang.', 'Die Flur ist lang.', 'Flur مذكر: der Flur.', 'genus'],
      ['der Balkon', 'die Balkone', 'الشرفة', 'Die Wohnung hat einen Balkon.', 'Die Wohnung hat ein Balkon.', 'Balkon مذكر: einen Balkon.', 'kasus'],
      ['das Erdgeschoss', 'die Erdgeschosse', 'الطابق الأرضي', 'Ich wohne im Erdgeschoss.', 'Ich wohne im floor zero.', 'floor إنجليزية؛ Erdgeschoss.', 'falser-freund'],
      ['der Stock', 'die Stockwerke', 'الطابق', 'Wir wohnen im dritten Stock.', 'Wir wohnen in dritten Stock.', 'im dritten Stock.', 'präposition'],
      ['die Miete', 'die Mieten', 'الإيجار', 'Die Miete ist 500 Euro.', 'Die Miete ist 500 Euros.', 'Euro بلا -s.', 'plural'],
      ['das Sofa', 'die Sofas', 'الأريكة', 'Das Sofa ist bequem.', 'Der Sofa ist bequem.', 'Sofa محايد: das Sofa.', 'genus'],
      ['der Sessel', 'die Sessel', 'الكرسي المريح', 'Der Sessel steht am Fenster.', 'Der Sessel steht an Fenster.', 'am Fenster (an dem).', 'präposition'],
      ['der Kühlschrank', 'die Kühlschränke', 'الثلاجة', 'Der Kühlschrank ist in der Küche.', 'Der Kühlschrank ist in die Küche.', 'أين؟ ← in der Küche.', 'kasus'],
      ['der Herd', 'die Herde', 'الموقد', 'Der Herd ist neu.', 'Das Herd ist neu.', 'Herd مذكر: der Herd.', 'genus'],
      ['die Dusche', 'die Duschen', 'الدُّش', 'Das Bad hat eine Dusche.', 'Das Bad hat einen Dusche.', 'Dusche مؤنثة: eine Dusche.', 'genus'],
      ['die Toilette', 'die Toiletten', 'المرحاض', 'Wo ist die Toilette?', 'Wo ist die Toilet?', 'toilet إنجليزية؛ die Toilette.', 'falser-freund'],
      ['ruhig', '—', 'هادئ', 'Die Wohnung ist ruhig.', 'Die Wohnung ist ruhige.', 'بعد ist بلا نهاية.', 'deklination'],
      ['die Möbel', 'nur Plural', 'الأثاث', 'Die Möbel sind alt.', 'Die Möbel ist alt.', 'Möbel جمع ← sind.', 'konjugation'],
      ['mieten', 'mietet · mietete · hat gemietet', 'يستأجر', 'Ich miete eine Wohnung.', 'Ich miete ein Wohnung.', 'Wohnung مؤنثة: eine Wohnung.', 'genus', 'miete'],
      ['der Quadratmeter', 'die Quadratmeter', 'المتر المربع', 'Die Wohnung hat 60 Quadratmeter.', 'Die Wohnung hat 60 Quadratmeters.', 'Quadratmeter بلا -s في الجمع.', 'plural'],
      ['der Mitbewohner', 'die Mitbewohner', 'شريك السكن', 'Mein Mitbewohner ist nett.', 'Meine Mitbewohner ist nett.', 'Mitbewohner مذكر مفرد: mein.', 'deklination']
    ],
    tricks: [
      { trick: 'الوصف بـ ist والوجود بـ es gibt', wie: 'Das Zimmer ist hell. · Es gibt ein Bett. — لا Das Zimmer hat hell.', warum: 'العربية «الغرفة فيها نور» تُغري بـ hat؛ الصفة تحتاج ist والشيء يحتاج es gibt.', anchor: 'Das Zimmer ist hell.' },
      { trick: 'الطابق بـ im: im Erdgeschoss، im dritten Stock', wie: 'im Erdgeschoss · im ersten Stock · im dritten Stock.', warum: 'الطابق الأرضي صفر عند الألمان، والطابق الأول فوقه؛ وim ثابتة قبل الطابق.', anchor: 'Wir wohnen im dritten Stock.' },
      { trick: 'الغرف كلها محايدة بـ -zimmer', wie: 'das Wohnzimmer · das Schlafzimmer · das Kinderzimmer — وdie Küche وder Flur استثناء.', warum: 'الكلمة الأخيرة تحدد الجنس في المركّب؛ Zimmer محايدة فتسحب المركّب كله.', anchor: 'Das Wohnzimmer ist groß.' }
    ],
    order: [
      { satz: 'Die Wohnung | hat | einen Balkon.', ar: 'الشقة فيها شرفة.' },
      { satz: 'Im Schlafzimmer | steht | ein Bett.', ar: 'في غرفة النوم يوجد سرير.' }
    ],
    writing: {
      prompt: 'صف شقتك في خمس جمل: كم غرفة وفي أي طابق، كيف غرفة المعيشة (مضيئة أو هادئة)، ماذا يوجد في المطبخ، ماذا في الحمّام، وكم الإيجار.',
      promptDe: 'Meine Wohnung hat … Zimmer und ist im … Stock. · Das Wohnzimmer ist … · In der Küche gibt es … · Das Bad hat … · Die Miete ist … Euro.',
      points: ['ist مع صفة', 'es gibt أو hat مع einen أو eine أو ein', 'im مع الطابق', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'lexik-kollokation'
    }
  },

  'a1-u4-l2': {
    items: [
      ['wehtun', 'tut weh · tat weh · hat wehgetan', 'يؤلم', 'Mir tut der Kopf weh.', 'Ich habe pain im Kopf.', 'pain إنجليزية؛ wehtun بالداتيف: Mir tut … weh.', 'falser-freund', 'weh'],
      ['der Kopf', 'die Köpfe', 'الرأس', 'Mein Kopf tut weh.', 'Meine Kopf tut weh.', 'Kopf مذكر: mein Kopf.', 'genus'],
      ['der Bauch', 'die Bäuche', 'البطن', 'Mir tut der Bauch weh.', 'Mir tut das Bauch weh.', 'Bauch مذكر: der Bauch.', 'genus'],
      ['der Hals', 'die Hälse', 'الحلق · الرقبة', 'Mein Hals tut weh.', 'Mein Hals ist weh.', 'wehtun فعل: tut weh؛ لا ist weh.', 'lexik-kollokation'],
      ['der Rücken', 'die Rücken', 'الظهر', 'Mir tut der Rücken weh.', 'Mich tut der Rücken weh.', 'wehtun بالداتيف: Mir.', 'kasus'],
      ['krank', '—', 'مريض', 'Ich bin krank.', 'Ich habe krank.', 'الحالة بـ sein: bin krank.', 'lexik-kollokation'],
      ['gesund', '—', 'معافى', 'Ich bin wieder gesund.', 'Ich bin wieder gesünd.', 'gesund بلا نقطتين.', 'orthographie'],
      ['das Fieber', '—', 'الحمّى', 'Ich habe Fieber.', 'Ich habe Fever.', 'fever إنجليزية؛ Fieber.', 'falser-freund'],
      ['die Erkältung', 'die Erkältungen', 'الزكام', 'Ich habe eine Erkältung.', 'Ich habe ein Erkältung.', '-ung مؤنثة: eine Erkältung.', 'genus'],
      ['der Husten', '—', 'السعال', 'Ich habe Husten.', 'Ich bin Husten.', 'العَرَض بـ haben: Ich habe Husten.', 'lexik-kollokation'],
      ['die Tablette', 'die Tabletten', 'القرص (دواء)', 'Nehmen Sie zwei Tabletten.', 'Nehmen Sie zwei Tablette.', 'الجمع Tabletten.', 'plural', 'Tabletten'],
      ['der Arzt', 'die Ärzte', 'الطبيب', 'Ich gehe zum Arzt.', 'Ich gehe by dem Arzt.', 'by إنجليزية؛ zum Arzt.', 'falser-freund'],
      ['die Ärztin', 'die Ärztinnen', 'الطبيبة', 'Die Ärztin ist nett.', 'Die Ärztin ist nette.', 'بعد ist بلا نهاية.', 'deklination'],
      ['das Wartezimmer', 'die Wartezimmer', 'غرفة الانتظار', 'Bitte warten Sie im Wartezimmer.', 'Bitte warten Sie in Wartezimmer.', 'im Wartezimmer.', 'präposition'],
      ['die Krankmeldung', 'die Krankmeldungen', 'إشعار المرض', 'Ich brauche eine Krankmeldung.', 'Ich brauche einen Krankmeldung.', '-ung مؤنثة: eine Krankmeldung.', 'genus'],
      ['die Schmerzen', 'nur Plural', 'الآلام', 'Ich habe Schmerzen im Bein.', 'Ich habe Schmerz im Bein.', 'في الشكوى بالجمع: Schmerzen.', 'plural'],
      ['das Bein', 'die Beine', 'الساق', 'Mein Bein tut weh.', 'Meine Bein tut weh.', 'Bein محايد: mein Bein.', 'genus'],
      ['die Hand', 'die Hände', 'اليد', 'Meine Hand tut weh.', 'Mein Hand tut weh.', 'Hand مؤنثة: meine Hand.', 'genus'],
      ['sich ausruhen', 'ruht sich aus · ruhte sich aus · hat sich ausgeruht', 'يرتاح', 'Ruhen Sie sich aus!', 'Ruhen Sie aus!', 'sich ausruhen انعكاسي: Ruhen Sie sich aus.', 'deklination', 'Ruhen'],
      ['gute Besserung', '—', 'شفاءً عاجلًا', 'Gute Besserung!', 'Guten Besserung!', 'Besserung مؤنثة: Gute Besserung.', 'kasus', 'Gute']
    ],
    tricks: [
      { trick: 'Mir tut … weh: المريض داتيف والعضو فاعل', wie: 'Mir tut der Kopf weh. · Mir tun die Beine weh. · Tut dir der Bauch weh?', warum: 'العربية «رأسي يؤلمني» تجعل المتكلم مفعولًا؛ الألمانية تجعله داتيفًا، والفعل يتبع العضو.', anchor: 'Mir tut der Kopf weh.' },
      { trick: 'krank بـ sein، Fieber بـ haben', wie: 'Ich bin krank. · Ich habe Fieber. · Ich habe Husten. · Ich bin gesund.', warum: 'الحالة صفة فتأخذ sein، والعَرَض اسم فيأخذ haben؛ الخلط (Ich habe krank) أول خطأ في عيادة A1.', anchor: 'Ich bin krank.' },
      { trick: 'zum Arzt للذهاب، beim Arzt للوجود', wie: 'Ich gehe zum Arzt. · Ich bin beim Arzt. · Ich habe einen Termin beim Arzt.', warum: 'حرفان يفرّقان الحركة عن المكان، وby الإنجليزية لا تقابل أحدهما.', anchor: 'Ich gehe zum Arzt.' }
    ],
    order: [
      { satz: 'Mir | tut | der Kopf | weh.', ar: 'رأسي يؤلمني.' },
      { satz: 'Ich | gehe | zum Arzt.', ar: 'أذهب إلى الطبيب.' }
    ],
    writing: {
      prompt: 'أنت مريض. اكتب رسالة قصيرة من خمس جمل إلى معلّمك: أنك مريض، ماذا يؤلمك، أن لديك حمّى، أنك تذهب إلى الطبيب، وأنك لا تأتي اليوم.',
      promptDe: 'Liebe Frau …, · ich bin krank. · Mir tut … weh. · Ich habe Fieber. · Ich gehe heute zum Arzt. · Ich kann heute nicht kommen.',
      points: ['Mir tut … weh', 'bin krank وhabe Fieber', 'zum Arzt', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'kasus'
    }
  },

  'a1-u4-l3': {
    items: [
      ['geradeaus', '—', 'إلى الأمام مباشرة', 'Gehen Sie geradeaus.', 'Gehen Sie straight.', 'straight إنجليزية؛ geradeaus.', 'falser-freund'],
      ['links', '—', 'يسارًا', 'Dann gehen Sie links.', 'Dann gehen Sie left.', 'left إنجليزية؛ links.', 'falser-freund'],
      ['rechts', '—', 'يمينًا', 'Die Post ist rechts.', 'Die Post ist rechte.', 'rechts ظرف بلا نهاية.', 'deklination'],
      ['die Ampel', 'die Ampeln', 'إشارة المرور', 'Gehen Sie bis zur Ampel.', 'Gehen Sie until zur Ampel.', 'until إنجليزية؛ bis.', 'falser-freund'],
      ['die Kreuzung', 'die Kreuzungen', 'التقاطع', 'An der Kreuzung links.', 'An die Kreuzung links.', 'أين؟ ← an der Kreuzung.', 'kasus'],
      ['die erste Straße', '—', 'الشارع الأول', 'Nehmen Sie die erste Straße rechts.', 'Nehmen Sie die first Straße rechts.', 'first إنجليزية؛ erste.', 'falser-freund', 'erste'],
      ['die zweite Straße', '—', 'الشارع الثاني', 'Die zweite Straße links.', 'Die zwei Straße links.', 'الترتيبي zweite، لا zwei.', 'deklination', 'zweite'],
      ['bis zur', '—', 'حتى (إلى)', 'Gehen Sie bis zur Kirche.', 'Gehen Sie bis die Kirche.', 'bis zur Kirche: bis zu + داتيف.', 'präposition', 'zur'],
      ['die Kirche', 'die Kirchen', 'الكنيسة', 'Die Kirche ist in der Mitte.', 'Die Kirche ist im Mitte.', 'in der Mitte (Mitte مؤنثة).', 'kasus'],
      ['der Platz', 'die Plätze', 'الساحة', 'Der Platz ist groß.', 'Die Platz ist groß.', 'Platz مذكر: der Platz.', 'genus'],
      ['weit', '—', 'بعيد', 'Ist es weit?', 'Ist es weite?', 'بعد ist بلا نهاية: weit.', 'deklination'],
      ['nah', '—', 'قريب', 'Der Bahnhof ist ganz nah.', 'Der Bahnhof ist ganz nach.', 'nah (قريب) ≠ nach (إلى).', 'lexik-kollokation'],
      ['die Haltestelle', 'die Haltestellen', 'محطة الحافلة', 'Die Haltestelle ist dort.', 'Der Haltestelle ist dort.', 'Haltestelle مؤنثة.', 'genus'],
      ['dort', '—', 'هناك', 'Die Bank ist dort drüben.', 'Die Bank ist dort über.', 'dort drüben (هناك في الجهة الأخرى)؛ لا über.', 'lexik-kollokation'],
      ['hier', '—', 'هنا', 'Hier ist der Bahnhof.', 'Hier der Bahnhof ist.', 'الفعل ثانيًا: Hier ist.', 'wortstellung'],
      ['entlang', '—', 'على طول', 'Gehen Sie die Straße entlang.', 'Gehen Sie entlang die Straße.', 'entlang بعد الاسم: die Straße entlang.', 'wortstellung'],
      ['die Brücke', 'die Brücken', 'الجسر', 'Gehen Sie über die Brücke.', 'Gehen Sie über der Brücke.', 'الحركة عبر: über die Brücke بالنصب.', 'kasus'],
      ['abbiegen', 'biegt ab · bog ab · ist abgebogen', 'ينعطف', 'Biegen Sie rechts ab.', 'Abbiegen Sie rechts.', 'الأمر: Biegen Sie … ab.', 'wortstellung', 'Biegen'],
      ['Entschuldigung', '—', 'عفوًا (للسؤال)', 'Entschuldigung, wo ist der Bahnhof?', 'Pardon, wo ist der Bahnhof?', 'pardon الفرنسية؛ Entschuldigung.', 'falser-freund'],
      ['der Weg', 'die Wege', 'الطريق', 'Können Sie mir den Weg zeigen?', 'Können Sie mich den Weg zeigen?', 'zeigen + داتيف الشخص: mir.', 'kasus']
    ],
    tricks: [
      { trick: 'ثلاث كلمات تكفي للطريق: geradeaus وlinks وrechts', wie: 'Gehen Sie geradeaus. · Dann links. · Die erste Straße rechts.', warum: 'امتحان A1 يطلب وصف طريق قصير، والثلاث مع bis zur تغطي كل خريطة.', anchor: 'Gehen Sie geradeaus.' },
      { trick: 'bis zur للمؤنث، bis zum للمذكر والمحايد', wie: 'bis zur Ampel · bis zur Kirche · bis zum Bahnhof · bis zum Platz.', warum: 'bis zu يأخذ الداتيف، وzur وzum دمج الأداة؛ until وjusqu\'à لا تدخلان.', anchor: 'Gehen Sie bis zur Ampel.' },
      { trick: 'الأمر بـ Sie: الفعل أولًا ثم Sie', wie: 'Gehen Sie … · Nehmen Sie … · Biegen Sie … ab.', warum: 'صيغة الأمر الرسمية تقلب الترتيب وتضع المنفصل آخرًا؛ هي الصيغة الوحيدة في وصف الطريق لغريب.', anchor: 'Biegen Sie rechts ab.' }
    ],
    order: [
      { satz: 'Die Post | ist | rechts.', ar: 'البريد على اليمين.' },
      { satz: 'Dann | gehen | Sie links.', ar: 'ثم اذهب يسارًا.' }
    ],
    writing: {
      prompt: 'صديق يسألك عن الطريق من المحطة إلى بيتك. اكتب خمس جمل: إلى الأمام مباشرة، ثم يسارًا عند الإشارة، الشارع الثاني يمينًا، عبر الجسر، وبيتك على اليسار.',
      promptDe: 'Geh geradeaus. · An der Ampel links. · Dann die zweite Straße rechts. · Geh über die Brücke. · Mein Haus ist links.',
      points: ['geradeaus وlinks وrechts', 'bis zur أو an der', 'ترتيبي (erste أو zweite)', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'lexik-kollokation'
    }
  },

  'a1-u4-l4': {
    items: [
      ['Liebe', '—', 'عزيزتي (افتتاحية)', 'Liebe Anna,', 'Sehr geehrte Frau Anna,', 'للصديقة Liebe؛ Sehr geehrte للرسمي.', 'register'],
      ['Lieber', '—', 'عزيزي (افتتاحية)', 'Lieber Ali,', 'Liebe Ali,', 'للمذكر Lieber Ali.', 'deklination'],
      ['die SMS', 'die SMS', 'الرسالة القصيرة', 'Ich schreibe dir eine SMS.', 'Ich schreibe dir ein SMS.', 'SMS مؤنثة: eine SMS.', 'genus'],
      ['Viele Grüße', '—', 'تحيات كثيرة (ختام)', 'Viele Grüße', 'Viele Grüße,', 'لا فاصلة بعد Viele Grüße.', 'orthographie'],
      ['Liebe Grüße', '—', 'تحيات ودّية', 'Liebe Grüße aus Sousse', 'Liebe Grüße von Sousse', 'aus للمكان: Grüße aus Sousse.', 'präposition'],
      ['Bis bald', '—', 'إلى اللقاء قريبًا', 'Bis bald!', 'Bis bientôt!', 'bientôt الفرنسية؛ bald.', 'falser-freund', 'bald'],
      ['der Gruß', 'die Grüße', 'التحية', 'Der Gruß steht am Ende.', 'Der Gruß steht am Anfang.', 'التحية الختامية في الآخر.', 'lexik-kollokation'],
      ['Dein / Deine', '—', 'المخلص (توقيع ودّي)', 'Deine Sara', 'Dein Sara', 'المرسلة مؤنثة: Deine Sara.', 'deklination', 'Deine'],
      ['danke für', '—', 'شكرًا على', 'Danke für deine Nachricht.', 'Danke für deiner Nachricht.', 'für + النصب: deine Nachricht.', 'kasus', 'für'],
      ['zurückschreiben', 'schreibt zurück · schrieb zurück · hat zurückgeschrieben', 'يردّ كتابةً', 'Schreib mir bitte zurück.', 'Zurückschreib mir bitte.', 'الأمر: Schreib … zurück.', 'wortstellung', 'Schreib'],
      ['kannst du', '—', 'هل يمكنك (غير رسمي)', 'Kannst du morgen kommen?', 'Könnten Sie morgen kommen, Anna?', 'للصديقة du: Kannst du؛ Könnten Sie رسمية.', 'register', 'Kannst'],
      ['Lust haben', 'hat Lust · hatte Lust · hat Lust gehabt', 'يرغب في', 'Hast du Lust auf Kino?', 'Hast du Lust für Kino?', 'Lust auf + النصب.', 'präposition', 'Lust'],
      ['das Treffen', 'die Treffen', 'اللقاء', 'Unser Treffen ist um sechs.', 'Unsere Treffen ist um sechs.', 'Treffen محايد: unser Treffen.', 'deklination'],
      ['die Idee', 'die Ideen', 'الفكرة', 'Gute Idee!', 'Guter Idee!', 'Idee مؤنثة: Gute Idee.', 'deklination'],
      ["Wie geht's?", '—', 'كيف الحال؟', "Hallo Ali, wie geht's?", 'Hallo Ali, wie gehst?', "wie geht's = wie geht es؛ لا gehst.", 'konjugation', "geht's"],
      ['Bescheid sagen', 'sagt Bescheid · sagte Bescheid · hat Bescheid gesagt', 'يُخبر', 'Sag mir bitte Bescheid.', 'Sag mich bitte Bescheid.', 'Bescheid sagen + داتيف: mir.', 'kasus', 'Bescheid'],
      ['grüßen', 'grüßt · grüßte · hat gegrüßt', 'يسلّم على', 'Grüß deine Eltern von mir!', 'Grüß deine Eltern von mich!', 'von + داتيف: von mir.', 'kasus', 'Grüß'],
      ['Viel Spaß', '—', 'استمتع', 'Viel Spaß im Urlaub!', 'Viele Spaß im Urlaub!', 'Spaß لا يُعد: Viel Spaß.', 'deklination', 'Spaß'],
      ['kurz', '—', 'قصير · باختصار', 'Nur kurz: Ich komme später.', 'Nur kurze: Ich komme später.', 'kurz ظرف بلا نهاية.', 'deklination'],
      ['die Postkarte', 'die Postkarten', 'البطاقة البريدية', 'Ich schicke dir eine Postkarte.', 'Ich schicke dich eine Postkarte.', 'schicken + داتيف الشخص: dir.', 'kasus']
    ],
    tricks: [
      { trick: 'Liebe للصديقة، Lieber للصديق، Sehr geehrte للرسمي', wie: 'Liebe Anna, · Lieber Ali, · Sehr geehrte Frau Berg,', warum: 'الافتتاحية تحدد السجلّ كله؛ Sehr geehrte لصديق تُقرأ باردة أو ساخرة.', anchor: 'Liebe Anna,' },
      { trick: 'du مع الصديق حتى آخر الرسالة', wie: 'Kannst du …? · Hast du Lust …? · Schreib mir zurück. · Deine Sara', warum: 'الخلط بين du وSie داخل رسالة واحدة أكثر خطأ سجلّ في Start Deutsch 1.', anchor: 'Kannst du morgen kommen?' },
      { trick: 'الختام: Viele Grüße ثم الاسم، بلا فاصلة', wie: 'Viele Grüße | Sara · Liebe Grüße aus Sousse | Ali', warum: 'الختام والاسم سطران بلا فاصلة بينهما، والاسم وحده بلا توقيع رسمي.', anchor: 'Viele Grüße' }
    ],
    order: [
      { satz: 'Ich | schreibe | dir eine SMS.', ar: 'أكتب لك رسالة قصيرة.' },
      { satz: 'Unser Treffen | ist | um sechs.', ar: 'لقاؤنا في السادسة.' }
    ],
    writing: {
      prompt: 'اكتب رسالة قصيرة إلى صديقتك: افتتاحية ودّية، شكر على رسالتها، سؤال إن كانت تستطيع المجيء غدًا (بـ du)، اقتراح مكان وساعة، وختام باسمك.',
      promptDe: 'Liebe …, · danke für deine Nachricht. · Kannst du morgen kommen? · Wir treffen uns um … im … · Viele Grüße · Deine …',
      points: ['Liebe أو Lieber', 'du طوال الرسالة', 'ختام بلا فاصلة ثم الاسم', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'register'
    }
  },

  'a1-u4-l5': {
    items: [
      ['alt', '—', 'قديم · (عمره كذا)', 'Ich bin zwanzig Jahre alt.', 'Ich habe zwanzig Jahre alt.', 'العمر بـ sein: Ich bin … alt.', 'lexik-kollokation'],
      ['jung', '—', 'شاب · صغير السن', 'Meine Schwester ist jung.', 'Meine Schwester ist junge.', 'بعد ist بلا نهاية.', 'deklination'],
      ['neu', '—', 'جديد', 'Ich habe ein neues Handy.', 'Ich habe ein neu Handy.', 'صفة قبل اسم محايد بعد ein: neues.', 'deklination', 'neues'],
      ['schön', '—', 'جميل', 'Die Stadt ist sehr schön.', 'Die Stadt ist viel schön.', 'sehr قبل الصفة، لا viel.', 'lexik-kollokation'],
      ['richtig', '—', 'صحيح', 'Das ist richtig.', 'Das ist right.', 'right إنجليزية؛ richtig.', 'falser-freund'],
      ['falsch', '—', 'خاطئ', 'Die Antwort ist falsch.', 'Die Antwort ist falsche.', 'بعد ist بلا نهاية.', 'deklination'],
      ['wichtig', '—', 'مهم', 'Deutsch ist wichtig für mich.', 'Deutsch ist wichtig für mir.', 'für + النصب: für mich.', 'kasus'],
      ['die Übung', 'die Übungen', 'التمرين', 'Die Übung ist leicht.', 'Der Übung ist leicht.', '-ung مؤنثة: die Übung.', 'genus'],
      ['einfach', '—', 'سهل · بسيط', 'Die Aufgabe ist einfach.', 'Die Aufgabe ist einfache.', 'بعد ist بلا نهاية.', 'deklination'],
      ['schwer', '—', 'صعب', 'Deutsch ist nicht schwer.', 'Deutsch ist kein schwer.', 'الصفة تُنفى بـ nicht.', 'lexik-kollokation'],
      ['noch einmal', '—', 'مرة أخرى', 'Bitte noch einmal!', 'Bitte noch einmals!', 'einmal بلا -s.', 'orthographie', 'einmal'],
      ['erklären', 'erklärt · erklärte · hat erklärt', 'يشرح', 'Können Sie das bitte erklären?', 'Können Sie das bitte erklärt?', 'بعد können المصدر: erklären.', 'konjugation'],
      ['bedeuten', 'bedeutet · bedeutete · hat bedeutet', 'يعني', 'Was bedeutet das Wort?', 'Was bedeutet der Wort?', 'Wort محايد: das Wort.', 'genus', 'bedeutet'],
      ['das Wort', 'die Wörter', 'الكلمة', 'Das Wort ist neu für mich.', 'Das Wort ist neu für mir.', 'für + النصب: für mich.', 'kasus'],
      ['der Satz', 'die Sätze', 'الجملة', 'Der Satz hat ein Verb.', 'Die Satz hat ein Verb.', 'Satz مذكر: der Satz.', 'genus'],
      ['das Verb', 'die Verben', 'الفعل', 'Das Verb steht auf Position zwei.', 'Das Verb steht auf Position zweite.', 'Position zwei بالعدد الأصلي.', 'lexik-kollokation'],
      ['die Grammatik', '—', 'القواعد', 'Die Grammatik ist logisch.', 'Der Grammatik ist logisch.', '-ik مؤنثة: die Grammatik.', 'genus'],
      ['korrigieren', 'korrigiert · korrigierte · hat korrigiert', 'يصحّح', 'Bitte korrigieren Sie meinen Text.', 'Bitte korrigieren Sie mein Text.', 'Text مذكر في النصب: meinen Text.', 'kasus', 'korrigieren'],
      ['der Text', 'die Texte', 'النص', 'Der Text ist kurz.', 'Das Text ist kurz.', 'Text مذكر: der Text.', 'genus'],
      ['das Niveau', 'die Niveaus', 'المستوى', 'Mein Niveau ist A1.', 'Meine Niveau ist A1.', 'Niveau محايد: mein Niveau.', 'deklination']
    ],
    tricks: [
      { trick: 'أربعة أخطاء A1 تُصلَح بأربع جمل', wie: 'Ich sehe den Mann. · Ich bin zwanzig. · Ich bin gegangen. · Dann lerne ich.', warum: 'den لا der، وbin للعمر، وsein مع الحركة، والفعل ثانيًا: من يحفظ الجمل الأربع يحفظ نصف قواعد A1.', anchor: 'Ich bin zwanzig Jahre alt.' },
      { trick: 'الصفة بعد ist عارية، وقبل الاسم بنهاية', wie: 'Das Handy ist neu. · ein neues Handy · Die Stadt ist schön. · eine schöne Stadt.', warum: 'القاعدة الواحدة تفسّر كل أخطاء junge وfalsche بعد ist، وتُحضّر لنهايات الصفات في A2.', anchor: 'Ich habe ein neues Handy.' },
      { trick: 'ثلاث جمل تدير أي درس: Was bedeutet …? · Noch einmal, bitte. · Können Sie das erklären?', wie: 'Was bedeutet das Wort? · Noch einmal, bitte. · Können Sie das bitte erklären?', warum: 'بهذه الثلاث يُدار أي درس وامتحان شفوي بلا توقف، وهي أول ما يسأل عنه الممتحِن.', anchor: 'Was bedeutet das Wort?' }
    ],
    order: [
      { satz: 'Ich | bin | zwanzig Jahre alt.', ar: 'عمري عشرون سنة.' },
      { satz: 'Das Verb | steht | auf Position zwei.', ar: 'الفعل في الموضع الثاني.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن تعلّمك للألمانية: عمرك ومستواك، ما هو سهل وما هو صعب، كلمة جديدة تعلمتها هذا الأسبوع، ماذا تقول عندما لا تفهم، وماذا تعلمت أمس (Perfekt).',
      promptDe: 'Ich bin … Jahre alt und mein Niveau ist A1. · Die Grammatik ist … · Ein neues Wort ist … · Wenn ich nicht verstehe, sage ich: Noch einmal, bitte. · Gestern habe ich … gelernt.',
      points: ['bin … alt', 'صفة بعد ist بلا نهاية', 'جملة Perfekt صحيحة', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'pruefstrategie'
    }
  },

  'a1-u4-l6': {
    items: [
      ['die Prüfung', 'die Prüfungen', 'الامتحان', 'Die Prüfung hat vier Teile.', 'Die Prüfung hat vier Teilen.', 'الجمع Teile.', 'plural'],
      ['der Teil', 'die Teile', 'الجزء', 'Jeder Teil zählt.', 'Jeder Teil zählen.', 'jeder مفرد ← zählt.', 'konjugation'],
      ['das Lesen', '—', 'القراءة (جزء الامتحان)', 'Das Lesen dauert 25 Minuten.', 'Der Lesen dauert 25 Minuten.', 'المصدر المسمّى محايد: das Lesen.', 'genus'],
      ['das Schreiben', '—', 'الكتابة (جزء الامتحان)', 'Im Schreiben füllst du ein Formular aus.', 'Im Schreiben füllst du eine Formular aus.', 'Formular محايد: ein Formular.', 'genus'],
      ['das Sprechen', '—', 'المحادثة (جزء الامتحان)', 'Das Sprechen ist in der Gruppe.', 'Das Sprechen ist in die Gruppe.', 'أين؟ ← in der Gruppe.', 'kasus'],
      ['bestehen', 'besteht · bestand · hat bestanden', 'ينجح في امتحان', 'Ich habe die Prüfung bestanden.', 'Ich habe die Prüfung gebestanden.', 'be- بلا ge-: bestanden.', 'konjugation', 'bestanden'],
      ['das Anmeldeformular', 'die Anmeldeformulare', 'استمارة التسجيل', 'Fülle das Anmeldeformular aus.', 'Fülle das Anmeldeformular.', 'ausfüllen منفصل: Fülle … aus.', 'wortstellung'],
      ['das Kreuz', 'die Kreuze', 'علامة الاختيار', 'Mach ein Kreuz bei a, b oder c.', 'Mach ein Kreuz an a, b oder c.', 'ein Kreuz machen bei.', 'präposition'],
      ['das Alphabet', '—', 'الأبجدية', 'Lerne das Alphabet für das Buchstabieren.', 'Lerne das Alphabet für die Buchstabieren.', 'المصدر المسمّى محايد: das Buchstabieren.', 'genus'],
      ['die Aufforderung', 'die Aufforderungen', 'الطلب (في الامتحان)', 'Teil drei ist eine Aufforderung.', 'Teil drei ist ein Aufforderung.', '-ung مؤنثة: eine Aufforderung.', 'genus'],
      ['die Karte', 'die Karten', 'البطاقة', 'Du bekommst eine Karte mit einem Wort.', 'Du bekommst eine Karte mit ein Wort.', 'mit + داتيف: mit einem Wort.', 'kasus'],
      ['etwa', '—', 'حوالي', 'Die Prüfung dauert etwa 65 Minuten.', 'Die Prüfung dauert etwas 65 Minuten.', 'etwa (حوالي) ≠ etwas (شيء).', 'lexik-kollokation'],
      ['zweimal', '—', 'مرتين', 'Du hörst den Text zweimal.', 'Du hörst den Text zweimals.', 'zweimal بلا -s.', 'orthographie'],
      ['einmal', '—', 'مرة واحدة', 'Die Ansage hörst du nur einmal.', 'Die Ansage du hörst nur einmal.', 'الفعل ثانيًا: hörst du.', 'wortstellung'],
      ['die Urkunde', 'die Urkunden', 'الشهادة (وثيقة)', 'Nach der Prüfung bekommst du eine Urkunde.', 'Nach der Prüfung bekommst du ein Urkunde.', 'Urkunde مؤنثة: eine Urkunde.', 'genus'],
      ['der Prüfungstermin', 'die Prüfungstermine', 'موعد الامتحان', 'Der Prüfungstermin ist im Juni.', 'Der Prüfungstermin ist in Juni.', 'im Juni.', 'präposition'],
      ['der Ausweis', 'die Ausweise', 'بطاقة الهوية', 'Bring deinen Ausweis mit.', 'Bring dein Ausweis mit.', 'Ausweis مذكر في النصب: deinen.', 'kasus'],
      ['das Wörterbuch', 'die Wörterbücher', 'القاموس', 'Ein Wörterbuch ist nicht erlaubt.', 'Eine Wörterbuch ist nicht erlaubt.', 'Buch محايد ← das Wörterbuch.', 'genus'],
      ['der Stift', 'die Stifte', 'القلم', 'Schreib mit einem Stift.', 'Schreib mit einen Stift.', 'mit + داتيف: einem Stift.', 'kasus'],
      ['keine Angst', '—', 'لا تخف', 'Keine Angst, die Prüfung ist einfach.', 'Kein Angst, die Prüfung ist einfach.', 'Angst مؤنثة: keine Angst.', 'genus', 'Angst']
    ],
    tricks: [
      { trick: 'أربعة أجزاء، كل جزء وحده', wie: 'Hören · Lesen · Schreiben · Sprechen — لا يعوّض جزء جزءًا.', warum: 'Start Deutsch 1 يُحتسب مجموعًا، لكن الجزء الضعيف لا يُنقذه القوي؛ خطة المراجعة تبدأ من الأضعف.', anchor: 'Die Prüfung hat vier Teile.' },
      { trick: 'الاستماع مرة أو مرتين: اقرأ السؤال قبل الصوت', wie: 'Teil 1 zweimal · Ansagen nur einmal — السؤال أولًا ثم الأذن.', warum: 'الإعلانات تُسمع مرة واحدة؛ من يقرأ السؤال أثناء الصوت يفقد الجواب.', anchor: 'Du hörst den Text zweimal.' },
      { trick: 'التهجئة جزء من المحادثة', wie: 'Wie heißen Sie? Buchstabieren Sie bitte. — الاسم والعنوان بالأبجدية الألمانية.', warum: 'الممتحِن يطلب التهجئة في الجزء الأول دائمًا، وz وv وw وj تُنطق خلاف الفرنسية.', anchor: 'Lerne das Alphabet für das Buchstabieren.' }
    ],
    order: [
      { satz: 'Die Prüfung | hat | vier Teile.', ar: 'للامتحان أربعة أجزاء.' },
      { satz: 'Du | hörst | den Text zweimal.', ar: 'تسمع النص مرتين.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن امتحان A1: كم جزءًا فيه، كم يدوم تقريبًا، ماذا تُحضر معك، ماذا غير مسموح، وماذا تفعل في المحادثة.',
      promptDe: 'Die Prüfung hat … Teile. · Sie dauert etwa … Minuten. · Ich bringe meinen … mit. · Ein … ist nicht erlaubt. · Im Sprechen buchstabiere ich …',
      points: ['vier Teile', 'etwa مع المدة', 'mitbringen منفصل', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'pruefstrategie'
    }
  }
};

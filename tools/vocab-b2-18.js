/* Deutschweg — P3.2 lexical layer, B2 production unit 18 (decision 18):
   workshops b2-w01 … b2-w06. A B2 row is a glossary of 20 words derived
   from the workshop's text and task; the 80% lexical gate is not applied
   to B2 and B2 is never 'delivered' by it. Same row format as B1. */

module.exports = {
  'b2-w01': {
    items: [
      ['der Abschnitt', 'die Abschnitte', 'المقطع', 'Zuerst beschreibe ich den Abschnitt.', 'Zuerst deute ich den Abschnitt.', 'الوصف قبل التأويل: beschreiben ثم deuten.', 'lexik-kollokation'],
      ['die Textstelle', 'die Textstellen', 'الموضع في النص', 'Die Textstelle steht im zweiten Absatz.', 'Der Textstelle steht im zweiten Absatz.', 'Stelle مؤنثة ← die Textstelle.', 'genus'],
      ['belegen', 'belegt · belegte · hat belegt', 'يُثبت بموضع من النص', 'Ich belege meine Deutung mit einem Zitat.', 'Ich belege meine Deutung mit ein Zitat.', 'mit + داتيف: mit einem Zitat.', 'kasus', 'belege'],
      ['das Zitat', 'die Zitate', 'الاقتباس', 'Das Zitat steht in Anführungszeichen.', 'Der Zitat steht in Anführungszeichen.', 'Zitat محايد.', 'genus'],
      ['zitieren', 'zitiert · zitierte · hat zitiert', 'يقتبس', 'Ich zitiere die Stelle wörtlich.', 'Ich zitiere die Stelle wörtlich ab.', 'zitieren بلا سابقة.', 'lexik-kollokation', 'zitiere'],
      ['die Absicht', 'die Absichten', 'القصد (قصد الكاتب)', 'Die Absicht des Autors bleibt offen.', 'Die Absicht von Autor bleibt offen.', 'الإضافة: des Autors.', 'kasus'],
      ['andeuten', 'deutet an · deutete an · hat angedeutet', 'يلمّح', 'Der Autor deutet die Ursache nur an.', 'Der Autor andeutet die Ursache nur.', 'منفصل: deutet … an.', 'wortstellung', 'deutet'],
      ['die Interpretation', 'die Interpretationen', 'التفسير · التأويل', 'Jede Interpretation braucht einen Beleg.', 'Jede Interpretation braucht ein Beleg.', 'Beleg مذكر: einen.', 'kasus'],
      ['sachlich', '—', 'موضوعي', 'Die Beschreibung bleibt sachlich.', 'Die Beschreibung bleibt sachliche.', 'بعد bleiben بلا نهاية.', 'deklination'],
      ['die Aussageabsicht', 'die Aussageabsichten', 'المراد من القول', 'Die Aussageabsicht ist eine Warnung.', 'Die Aussageabsicht ist ein Warnung.', 'Warnung مؤنثة: eine.', 'genus'],
      ['der Erzähler', 'die Erzähler', 'الراوي', 'Der Erzähler ist nicht der Autor.', 'Der Erzähler ist nicht den Autor.', 'بعد ist رفع: der Autor.', 'kasus'],
      ['die Perspektive', 'die Perspektiven', 'المنظور', 'Aus welcher Perspektive wird erzählt?', 'Aus welche Perspektive wird erzählt?', 'aus + داتيف: welcher.', 'kasus'],
      ['der Wendepunkt', 'die Wendepunkte', 'نقطة التحوّل', 'Der Wendepunkt liegt in der Mitte.', 'Der Wendepunkt liegt in die Mitte.', 'أين؟ ← in der Mitte.', 'kasus'],
      ['die Stimmung', 'die Stimmungen', 'الجوّ · المزاج', 'Die Stimmung wird durch das Wetter angedeutet.', 'Die Stimmung wird durch dem Wetter angedeutet.', 'durch + النصب: das Wetter.', 'kasus'],
      ['sich beziehen auf', 'bezieht sich · bezog sich · hat sich bezogen', 'يشير إلى · يحيل على', 'Das Pronomen bezieht sich auf den Vater.', 'Das Pronomen bezieht sich auf dem Vater.', 'sich beziehen auf + النصب.', 'kasus', 'bezieht'],
      ['die Schlüsselstelle', 'die Schlüsselstellen', 'الموضع المفتاحي', 'Die Schlüsselstelle ist der letzte Satz.', 'Die Schlüsselstelle sind der letzte Satz.', 'مفرد ← ist.', 'konjugation'],
      ['vermuten lassen', 'lässt vermuten · ließ vermuten', 'يوحي بـ', 'Der Titel lässt eine Kritik vermuten.', 'Der Titel lässt eine Kritik zu vermuten.', 'بعد lassen مصدر بلا zu.', 'konjugation', 'vermuten'],
      ['offenlassen', 'lässt offen · ließ offen · hat offengelassen', 'يترك مفتوحًا', 'Der Text lässt das Ende offen.', 'Der Text offenlässt das Ende.', 'منفصل: lässt … offen.', 'wortstellung', 'offen'],
      ['die Deutungshypothese', 'die Deutungshypothesen', 'فرضية التأويل', 'Meine Deutungshypothese steht am Anfang.', 'Mein Deutungshypothese steht am Anfang.', '-these مؤنثة: meine.', 'genus'],
      ['erfinden', 'erfindet · erfand · hat erfunden', 'يختلق', 'Ich erfinde keine Ursache, die der Text nicht nennt.', 'Ich erfinde keine Ursache, die der Text nennt nicht.', 'في جملة الصلة الفعل في الآخر: nicht nennt.', 'wortstellung', 'erfinde']
    ],
    tricks: [
      { trick: 'وصف، ثم تأويل، ثم موضع: ثلاث خطوات لا تُقلب', wie: 'Zuerst beschreibe ich den Abschnitt. Dann deute ich die Stelle. Die Stelle steht im zweiten Absatz.', warum: 'التأويل قبل الوصف يُقرأ تخمينًا، والتأويل بلا موضع يُقرأ اختراعًا؛ الترتيب نفسه هو درجة التحليل.', anchor: 'Zuerst beschreibe ich den Abschnitt.' },
      { trick: 'كل تأويل يحتاج اقتباسًا بين علامتي تنصيص', wie: 'Ich belege meine Deutung mit einem Zitat. — الاقتباس حرفي، والسطر مذكور.', warum: 'في B2 يُقيَّم الربط بين الفكرة وموضعها؛ الفكرة الصحيحة بلا موضع تخسر النقطة.', anchor: 'Ich belege meine Deutung mit einem Zitat.' },
      { trick: 'ما لم يقله النص لا يقوله التحليل', wie: 'Die Quelle nennt keine Ursache. · Der Autor deutet die Ursache nur an.', warum: 'سدّ الفجوات من عندك أكثر خطأ تحليل؛ قول «النص يترك ذلك مفتوحًا» إجابة كاملة.', anchor: 'Der Text lässt das Ende offen.' }
    ],
    order: [
      { satz: 'Zuerst | beschreibe | ich den Abschnitt.', ar: 'أولًا أصف المقطع.' },
      { satz: 'Der Autor | deutet | die Ursache nur | an.', ar: 'الكاتب يلمّح إلى السبب فقط.' }
    ],
    writing: {
      prompt: 'حلّل مقطعًا قصيرًا (من مقالات B2 في المكتبة) في ستّ جمل: الوصف، الموضع بالاقتباس، فرضية التأويل، ما يلمّح إليه الكاتب، ما يتركه مفتوحًا، وجملة تقول إنك لا تختلق سببًا لم يُذكر.',
      promptDe: 'Zuerst beschreibe ich … · Die Textstelle steht in … · Meine Deutungshypothese: … · Der Autor deutet … an. · Der Text lässt … offen. · Ich erfinde keine Ursache, die …',
      points: ['وصف قبل تأويل', 'اقتباس بموضع', 'فرضية تأويل مصاغة', 'جملة عن حدود النص', 'أربع كلمات من قائمة اليوم'],
      minWords: 60, familie: 'lexik-kollokation'
    }
  },

  'b2-w02': {
    items: [
      ['die These', 'die Thesen', 'الأطروحة', 'Die These lautet: Zeit ist knapp.', 'Der These lautet: Zeit ist knapp.', 'These مؤنثة.', 'genus'],
      ['lauten', 'lautet · lautete · hat gelautet', 'يكون نصّه (الصياغة)', 'Meine These lautet, dass Zeit knapp ist.', 'Meine These lautet, dass Zeit ist knapp.', 'dass ← ist في الآخر.', 'wortstellung', 'lautet'],
      ['die Begründung', 'die Begründungen', 'التعليل', 'Ein Beispiel ersetzt keine Begründung.', 'Ein Beispiel ersetzt kein Begründung.', '-ung مؤنثة: keine.', 'genus'],
      ['ersetzen', 'ersetzt · ersetzte · hat ersetzt', 'يحلّ محلّ', 'Das Beispiel ersetzt das Argument nicht.', 'Das Beispiel ersetzt nicht das Argument sich.', 'ersetzen متعدٍّ بلا sich.', 'lexik-kollokation', 'ersetzt'],
      ['Stellung nehmen', 'nimmt Stellung · nahm Stellung', 'يتخذ موقفًا', 'Der Schluss nimmt Stellung.', 'Der Schluss nimmt eine Stellung.', 'Stellung nehmen بلا أداة.', 'lexik-kollokation', 'Stellung'],
      ['die Gegenthese', 'die Gegenthesen', 'الأطروحة المضادة', 'Die Gegenthese wird im zweiten Teil geprüft.', 'Die Gegenthese wird im zweiten Teil geprüfen.', 'المجهول: wird geprüft.', 'konjugation'],
      ['abwägen', 'wägt ab · wog ab · hat abgewogen', 'يوازن', 'Im Schluss wäge ich beide Seiten ab.', 'Im Schluss abwäge ich beide Seiten.', 'منفصل: wäge … ab.', 'wortstellung', 'wäge'],
      ['die Schlussfolgerung', 'die Schlussfolgerungen', 'الاستنتاج', 'Die Schlussfolgerung folgt aus den Argumenten.', 'Die Schlussfolgerung folgt aus die Argumente.', 'aus + داتيف: den Argumenten.', 'kasus'],
      ['überzeugend', '—', 'مقنع', 'Ein überzeugendes Argument hat ein Beispiel.', 'Ein überzeugend Argument hat ein Beispiel.', 'ein + محايد: -es.', 'deklination', 'überzeugendes'],
      ['widerlegen', 'widerlegt · widerlegte · hat widerlegt', 'يدحض', 'Ein Gegenbeispiel widerlegt die These.', 'Ein Gegenbeispiel widerlegt die These ab.', 'widerlegen غير منفصل.', 'lexik-kollokation', 'widerlegt'],
      ['das Gegenbeispiel', 'die Gegenbeispiele', 'المثال المضاد', 'Ein einziges Gegenbeispiel genügt.', 'Ein einzige Gegenbeispiel genügt.', 'ein + محايد: einziges.', 'deklination'],
      ['genügen', 'genügt · genügte · hat genügt', 'يكفي', 'Fünf Argumente ohne Beispiel genügen nicht.', 'Fünf Argumente ohne Beispiel genügt nicht.', 'جمع ← genügen.', 'konjugation', 'genügen'],
      ['einleitend', '—', 'في البداية (تمهيدًا)', 'Einleitend nenne ich die These.', 'Einleitend ich nenne die These.', 'الفعل ثانيًا.', 'wortstellung'],
      ['abschließend', '—', 'ختامًا', 'Abschließend nehme ich Stellung.', 'Abschließend ich nehme Stellung.', 'الفعل ثانيًا.', 'wortstellung'],
      ['die Gliederung', 'die Gliederungen', 'التقسيم', 'Die Gliederung hat drei Teile.', 'Die Gliederung hat drei Teilen.', 'الجمع في النصب Teile.', 'kasus'],
      ['der Aufbau', '—', 'البناء (بنية النص)', 'Der Aufbau folgt der These.', 'Der Aufbau folgt die These.', 'folgen + داتيف: der These.', 'kasus'],
      ['schlüssig', '—', 'متماسك منطقيًا', 'Die Argumentation ist schlüssig.', 'Die Argumentation ist schlüssige.', 'بعد ist بلا نهاية.', 'deklination'],
      ['zweifellos', '—', 'بلا شك', 'Zweifellos kostet das Zeit.', 'Zweifellos das kostet Zeit.', 'الفعل ثانيًا.', 'wortstellung'],
      ['allerdings', '—', 'غير أنّ', 'Allerdings fehlt oft das Geld.', 'Allerdings oft fehlt das Geld.', 'الفعل ثانيًا: fehlt.', 'wortstellung'],
      ['die Position', 'die Positionen', 'الموقف', 'Meine Position begründe ich mit zwei Argumenten.', 'Meine Position begründe ich mit zwei Argumente.', 'mit + داتيف الجمع: Argumenten.', 'kasus']
    ],
    tricks: [
      { trick: 'أطروحة، حجتان بمثال، أطروحة مضادة، موقف', wie: 'Die These lautet … · Erstens … zum Beispiel … · Allerdings … · Abschließend nehme ich Stellung.', warum: 'بنية الحِجاج في B2 تُقيَّم قبل اللغة؛ النص بلا أطروحة أو بلا موقف ختامي يخسر نصف الدرجة.', anchor: 'Die These lautet: Zeit ist knapp.' },
      { trick: 'المثال خادم الحجة لا بديلها', wie: 'Ein Beispiel ersetzt keine Begründung. — الحجة أولًا، ثم المثال يُظهرها.', warum: 'كثيرون يسردون أمثلة بلا تعليل؛ المصحح يبحث عن «لماذا» قبل «مثلًا».', anchor: 'Ein Beispiel ersetzt keine Begründung.' },
      { trick: 'مثال مضاد واحد يكفي للدحض', wie: 'Ein einziges Gegenbeispiel genügt. — لذلك لا تقل immer وalle.', warum: 'الأطروحة المطلقة تسقط بمثال واحد؛ التدرّج (oft، meistens) يحميها.', anchor: 'Ein einziges Gegenbeispiel genügt.' }
    ],
    order: [
      { satz: 'Abschließend | nehme | ich | Stellung.', ar: 'ختامًا أتخذ موقفًا.' },
      { satz: 'Im Schluss | wäge | ich beide Seiten | ab.', ar: 'في الخاتمة أوازن بين الجانبين.' }
    ],
    writing: {
      prompt: 'اكتب مقالًا حِجاجيًا قصيرًا (ستّ جمل فأكثر) عن «أسبوع عمل من أربعة أيام»: الأطروحة بـ lautet، حجتان كلٌّ بمثال، الأطروحة المضادة بـ allerdings، موازنة، وموقف ختامي.',
      promptDe: 'Meine These lautet, dass … · Erstens …, zum Beispiel … · Zweitens … · Allerdings … · Wägt man beide Seiten ab, … · Abschließend nehme ich Stellung: …',
      points: ['These lautet', 'حجتان بمثالين', 'allerdings للأطروحة المضادة', 'Stellung nehmen في الآخر', 'أربع كلمات من قائمة اليوم'],
      minWords: 60, familie: 'wortstellung'
    }
  },

  'b2-w03': {
    items: [
      ['zugeben', 'gibt zu · gab zu · hat zugegeben', 'يقرّ بـ', 'Den Punkt gebe ich zu.', 'Den Punkt zugebe ich.', 'منفصل: gebe … zu.', 'wortstellung', 'gebe'],
      ['bedingt', '—', 'بشرط · جزئيًا', 'Dem kann ich nur bedingt zustimmen.', 'Dem kann ich nur bedingt zustimmen zu.', 'zustimmen يحمل zu في داخله.', 'lexik-kollokation'],
      ['in der Sache', '—', 'في جوهر الأمر', 'In der Sache bleiben wir uneinig.', 'In die Sache bleiben wir uneinig.', 'in + داتيف: der Sache.', 'kasus', 'Sache'],
      ['uneinig', '—', 'مختلفان في الرأي', 'Wir sind uns uneinig.', 'Wir sind uneinig uns.', 'sich uneinig sein: uns قبل uneinig.', 'wortstellung'],
      ['zurückweisen', 'weist zurück · wies zurück · hat zurückgewiesen', 'يرفض (ادعاءً)', 'Diesen Vorwurf weise ich zurück.', 'Diesen Vorwurf zurückweise ich.', 'منفصل: weise … zurück.', 'wortstellung', 'weise'],
      ['der Vorwurf', 'die Vorwürfe', 'الاتهام · اللوم', 'Das ist ein Vorwurf, kein Argument.', 'Das ist eine Vorwurf, kein Argument.', 'Vorwurf مذكر.', 'genus'],
      ['unterbrechen', 'unterbricht · unterbrach · hat unterbrochen', 'يقاطع', 'Bitte unterbrechen Sie mich nicht.', 'Bitte unterbrechen Sie mir nicht.', 'unterbrechen + النصب.', 'kasus'],
      ['das Missverständnis', 'die Missverständnisse', 'سوء الفهم', 'Hier liegt ein Missverständnis vor.', 'Hier liegt ein Missverständnis.', 'vorliegen منفصل: liegt … vor.', 'wortstellung'],
      ['klarstellen', 'stellt klar · stellte klar · hat klargestellt', 'يوضّح', 'Ich möchte etwas klarstellen.', 'Ich möchte etwas klar stellen.', 'klarstellen كلمة واحدة.', 'orthographie'],
      ['der Einwand', 'die Einwände', 'الاعتراض', 'Ihr Einwand ist berechtigt.', 'Ihre Einwand ist berechtigt.', 'Einwand مذكر.', 'genus'],
      ['entkräften', 'entkräftet · entkräftete · hat entkräftet', 'يُضعف (حجة)', 'Dieses Beispiel entkräftet den Einwand.', 'Dieses Beispiel entkräftet der Einwand.', 'النصب: den Einwand.', 'kasus', 'entkräftet'],
      ['der Konsens', '—', 'التوافق', 'Wir suchen einen Konsens.', 'Wir suchen ein Konsens.', 'Konsens مذكر: einen.', 'kasus'],
      ['sich einigen auf', 'einigt sich · hat sich geeinigt', 'يتفق على', 'Wir haben uns auf einen Termin geeinigt.', 'Wir haben uns auf einem Termin geeinigt.', 'sich einigen auf + النصب.', 'kasus', 'geeinigt'],
      ['der Standpunkt', 'die Standpunkte', 'وجهة النظر', 'Ich verstehe Ihren Standpunkt.', 'Ich verstehe Ihr Standpunkt.', 'النصب المذكر: Ihren.', 'kasus'],
      ['vielmehr', '—', 'بل بالأحرى', 'Das ist kein Nachteil, vielmehr eine Chance.', 'Das ist kein Nachteil, mehr eine Chance.', 'vielmehr للتصحيح، لا mehr.', 'lexik-kollokation'],
      ['insofern', '—', 'من هذه الناحية', 'Insofern haben Sie recht.', 'Insofern Sie haben recht.', 'الفعل ثانيًا.', 'wortstellung'],
      ['sachlich bleiben', 'bleibt sachlich · blieb sachlich', 'يبقى موضوعيًا', 'Wir bleiben sachlich, auch wenn wir uneinig sind.', 'Wir bleiben sachlich, auch wenn wir sind uneinig.', 'auch wenn ← sind في الآخر.', 'wortstellung', 'sachlich'],
      ['das Argument', 'die Argumente', 'الحجة', 'Ihr Argument überzeugt mich nur zum Teil.', 'Ihr Argument überzeugt mir nur zum Teil.', 'überzeugen + النصب: mich.', 'kasus'],
      ['die Gesprächsleitung', '—', 'إدارة النقاش', 'Die Gesprächsleitung erteilt das Wort.', 'Die Gesprächsleitung erteilt den Wort.', 'Wort محايد: das Wort.', 'genus'],
      ['das Fazit ziehen', 'zieht ein Fazit · zog ein Fazit', 'يستخلص الخلاصة', 'Am Ende ziehen wir ein Fazit.', 'Am Ende ziehen wir ein Fazit aus.', 'ein Fazit ziehen بلا aus.', 'lexik-kollokation', 'Fazit']
    ],
    tricks: [
      { trick: 'أقرّ بالنقطة، ثم اختلف في الجوهر', wie: 'Den Punkt gebe ich zu. In der Sache bleiben wir uneinig.', warum: 'الإقرار الجزئي يفتح باب الحوار ويُظهر مستوى B2؛ الرفض الكلي يُقرأ عنادًا.', anchor: 'Den Punkt gebe ich zu.' },
      { trick: 'bedingt وvielmehr وinsofern: ثلاث كلمات للتدرّج', wie: 'Dem kann ich nur bedingt zustimmen. · Das ist vielmehr eine Chance. · Insofern haben Sie recht.', warum: 'التدرّج في الموافقة هو ما يميّز نقاش B2 عن نعم/لا في B1.', anchor: 'Dem kann ich nur bedingt zustimmen.' },
      { trick: 'الاتهام يُردّ، والاعتراض يُناقَش', wie: 'Diesen Vorwurf weise ich zurück. · Ihr Einwand ist berechtigt.', warum: 'التمييز بين Vorwurf وEinwand يحمي النبرة الموضوعية ويُقيَّم في الكلام.', anchor: 'Diesen Vorwurf weise ich zurück.' }
    ],
    order: [
      { satz: 'Den Punkt | gebe | ich | zu.', ar: 'بهذه النقطة أقرّ.' },
      { satz: 'In der Sache | bleiben | wir uneinig.', ar: 'في الجوهر نبقى مختلفين.' }
    ],
    writing: {
      prompt: 'اكتب ردّك في نقاش عن حظر الهواتف في المدارس في ستّ جمل: إقرار بنقطة، موافقة مشروطة بـ bedingt، اعتراض بـ Einwand، تصحيح بـ vielmehr، تحديد بـ insofern، وخلاصة بـ Fazit.',
      promptDe: 'Den Punkt gebe ich zu: … · Dem kann ich nur bedingt zustimmen, weil … · Mein Einwand: … · Das ist vielmehr … · Insofern … · Als Fazit …',
      points: ['zugeben منفصلًا', 'bedingt zustimmen', 'Einwand أو Vorwurf بالتمييز', 'vielmehr أو insofern', 'أربع كلمات من قائمة اليوم'],
      minWords: 60, familie: 'wortstellung'
    }
  },

  'b2-w04': {
    items: [
      ['die Gliederung notieren', 'notiert · notierte · hat notiert', 'يدوّن التقسيم', 'Ich notiere die Gliederung des Vortrags.', 'Ich notiere die Gliederung von den Vortrag.', 'الإضافة: des Vortrags.', 'kasus', 'notiere'],
      ['der Vortragende', 'die Vortragenden', 'المحاضِر', 'Der Vortragende nennt drei Punkte.', 'Der Vortragende nennen drei Punkte.', 'مفرد ← nennt.', 'konjugation'],
      ['ergänzen', 'ergänzt · ergänzte · hat ergänzt', 'يُكمل · يضيف', 'Was fehlt, ergänze ich nicht.', 'Was fehlt, ich ergänze nicht.', 'بعد الفرعية المتقدمة الفعل أولًا: ergänze ich.', 'wortstellung', 'ergänze'],
      ['vor dem Hören', '—', 'قبل الاستماع', 'Ich lese die Aufgabe vor dem Hören.', 'Ich lese die Aufgabe vor das Hören.', 'vor + داتيف للزمن: dem Hören.', 'kasus', 'Hören'],
      ['die Kernaussage', 'die Kernaussagen', 'الرسالة الجوهرية', 'Die Kernaussage kommt meist am Anfang.', 'Der Kernaussage kommt meist am Anfang.', 'Aussage مؤنثة.', 'genus'],
      ['der Übergang', 'die Übergänge', 'الانتقال (بين الأجزاء)', 'Der Übergang kündigt den nächsten Punkt an.', 'Der Übergang ankündigt den nächsten Punkt.', 'منفصل: kündigt … an.', 'wortstellung'],
      ['ankündigen', 'kündigt an · kündigte an · hat angekündigt', 'يعلن مسبقًا', 'Die Rednerin kündigt ein Beispiel an.', 'Die Rednerin kündigt ein Beispiel.', 'ankündigen: an في الآخر؛ kündigen وحدها معنى آخر.', 'wortstellung', 'kündigt'],
      ['die Rednerin', 'die Rednerinnen', 'المتحدثة', 'Die Rednerin spricht schnell, aber deutlich.', 'Die Rednerin spricht schnell, aber deutliche.', 'الظرف بلا نهاية.', 'deklination'],
      ['mitschreiben', 'schreibt mit · schrieb mit · hat mitgeschrieben', 'يدوّن أثناء الاستماع', 'Ich schreibe nur Stichwörter mit.', 'Ich mitschreibe nur Stichwörter.', 'منفصل: schreibe … mit.', 'wortstellung', 'schreibe'],
      ['das Signalwort', 'die Signalwörter', 'كلمة الإشارة', 'Signalwörter wie erstens zeigen die Struktur.', 'Signalwörter wie erstens zeigt die Struktur.', 'جمع ← zeigen.', 'konjugation', 'Signalwörter'],
      ['die Struktur', 'die Strukturen', 'البنية', 'Die Struktur des Vortrags ist klar.', 'Die Struktur des Vortrag ist klar.', 'des Vortrags.', 'deklination'],
      ['zusammenfassend', '—', 'تلخيصًا', 'Zusammenfassend nennt er zwei Folgen.', 'Zusammenfassend er nennt zwei Folgen.', 'الفعل ثانيًا.', 'wortstellung'],
      ['die Folie', 'die Folien', 'الشريحة', 'Auf der Folie steht nur ein Wort.', 'Auf die Folie steht nur ein Wort.', 'أين؟ ← auf der Folie.', 'kasus'],
      ['nach dem Hören', '—', 'بعد الاستماع', 'Nach dem Hören prüfe ich die Frage.', 'Nach das Hören prüfe ich die Frage.', 'nach + داتيف.', 'kasus', 'Hören'],
      ['nach Gefühl', '—', 'بالإحساس (بلا دليل)', 'Ich antworte nicht nach Gefühl.', 'Ich antworte nicht nach Gefühle.', 'nach Gefühl تعبير ثابت.', 'lexik-kollokation', 'Gefühl'],
      ['die Nebeninformation', 'die Nebeninformationen', 'المعلومة الثانوية', 'Nebeninformationen lenken ab.', 'Nebeninformationen ablenken.', 'منفصل: lenken … ab.', 'wortstellung', 'Nebeninformationen'],
      ['ablenken', 'lenkt ab · lenkte ab · hat abgelenkt', 'يشتّت', 'Ein unbekanntes Wort lenkt mich nicht ab.', 'Ein unbekanntes Wort ablenkt mich nicht.', 'منفصل: lenkt … ab.', 'wortstellung', 'lenkt'],
      ['die Hörnotiz', 'die Hörnotizen', 'ملاحظة الاستماع', 'Meine Hörnotiz hat drei Zeilen.', 'Mein Hörnotiz hat drei Zeilen.', 'Notiz مؤنثة: meine.', 'genus'],
      ['die Sprechgeschwindigkeit', '—', 'سرعة الكلام', 'Die Sprechgeschwindigkeit ist hoch.', 'Die Sprechgeschwindigkeit ist hohe.', 'بعد ist بلا نهاية: hoch.', 'deklination'],
      ['überprüfen', 'überprüft · überprüfte · hat überprüft', 'يتحقق', 'Ich überprüfe meine Antwort beim zweiten Hören.', 'Ich prüfe meine Antwort beim zweiten Hören über.', 'überprüfen غير منفصل.', 'wortstellung', 'überprüfe']
    ],
    tricks: [
      { trick: 'قبل الاستماع: المهمة؛ أثناءه: التقسيم؛ بعده: السؤال', wie: 'Vor dem Hören lese ich die Aufgabe. · Ich notiere die Gliederung. · Nach dem Hören prüfe ich die Frage.', warum: 'المحاضرة في B2 تُسمع مرة واحدة؛ من بلا خطة يكتب كل شيء ولا يجيب عن شيء.', anchor: 'Ich notiere die Gliederung des Vortrags.' },
      { trick: 'ما لم يُقَل لا يُكمَّل من عندك', wie: 'Was fehlt, ergänze ich nicht. — الإجابة «لم يُذكر» إجابة.', warum: 'سدّ الفراغ بالمعرفة العامة يُنتج أجوبة لم ترد في النص ويخسر النقطة.', anchor: 'Was fehlt, ergänze ich nicht.' },
      { trick: 'كلمات الإشارة خريطة المحاضرة', wie: 'erstens · zweitens · zusammenfassend · abschließend — عندها تتغيّر الفقرة.', warum: 'الأذن تلتقط البنية من هذه الكلمات قبل المضمون؛ بها يُعرف أين أنت في المحاضرة.', anchor: 'Signalwörter wie erstens zeigen die Struktur.' }
    ],
    order: [
      { satz: 'Nach dem Hören | prüfe | ich die Frage.', ar: 'بعد الاستماع أتحقق من السؤال.' },
      { satz: 'Ich | schreibe | nur Stichwörter | mit.', ar: 'أدوّن كلمات مفتاحية فقط.' }
    ],
    writing: {
      prompt: 'اكتب استراتيجيتك لسماع محاضرة قصيرة في ستّ جمل: ماذا قبل الاستماع، ماذا تدوّن، أي كلمات إشارة تنتظر، ماذا تفعل بالمعلومات الثانوية، ماذا بعد الاستماع، وما لا تفعله أبدًا.',
      promptDe: 'Vor dem Hören … · Während des Vortrags notiere ich … · Signalwörter wie … · Nebeninformationen … · Nach dem Hören … · Was fehlt, …',
      points: ['vor dem Hören / nach dem Hören بالداتيف', 'mitschreiben أو notieren', 'Signalwörter مسمّاة', 'ergänze ich nicht', 'أربع كلمات من قائمة اليوم'],
      minWords: 60, familie: 'hoerstrategie'
    }
  },

  'b2-w05': {
    items: [
      ['die Aufgabenstellung', 'die Aufgabenstellungen', 'صيغة المهمة', 'Zuerst lese ich die Aufgabenstellung.', 'Zuerst ich lese die Aufgabenstellung.', 'الفعل ثانيًا.', 'wortstellung'],
      ['das Schlüsselwort', 'die Schlüsselwörter', 'الكلمة المفتاحية', 'Ich markiere drei Schlüsselwörter, nicht alles.', 'Ich markiere drei Schlüsselwörtern, nicht alles.', 'النصب الجمع: Schlüsselwörter.', 'kasus', 'Schlüsselwörter'],
      ['übertragen', 'überträgt · übertrug · hat übertragen', 'ينقل حرفيًا', 'Ich übertrage nicht aus dem Arabischen.', 'Ich trage nicht aus dem Arabischen über.', 'übertragen غير منفصل.', 'wortstellung', 'übertrage'],
      ['Wort für Wort', '—', 'كلمة بكلمة', 'Wort für Wort zu übersetzen kostet Zeit.', 'Wort für Wort übersetzen kostet Zeit zu.', 'zu قبل المصدر: zu übersetzen.', 'wortstellung', 'Wort'],
      ['die Zeit einteilen', 'teilt ein · teilte ein · hat eingeteilt', 'يقسّم الوقت', 'Ich teile die Zeit auf die drei Teile ein.', 'Ich einteile die Zeit auf die drei Teile.', 'منفصل: teile … ein.', 'wortstellung', 'teile'],
      ['überfliegen', 'überfliegt · überflog · hat überflogen', 'يقرأ قراءة سريعة', 'Ich überfliege den Text zuerst.', 'Ich fliege den Text zuerst über.', 'überfliegen غير منفصل.', 'wortstellung', 'überfliege'],
      ['das Textverständnis', '—', 'فهم النص', 'Das Textverständnis wird in Teil zwei geprüft.', 'Der Textverständnis wird in Teil zwei geprüft.', 'Verständnis محايد.', 'genus'],
      ['die Lücke', 'die Lücken', 'الفراغ', 'In jede Lücke passt nur ein Satzteil.', 'In jede Lücke passen nur ein Satzteil.', 'مفرد ← passt.', 'konjugation'],
      ['der Satzteil', 'die Satzteile', 'جزء الجملة', 'Der Satzteil muss grammatisch passen.', 'Der Satzteil muss grammatisch passen zu.', 'passen بلا zu هنا.', 'lexik-kollokation'],
      ['der Kontext', 'die Kontexte', 'السياق', 'Aus dem Kontext erschließe ich das Wort.', 'Aus den Kontext erschließe ich das Wort.', 'aus + داتيف: dem Kontext.', 'kasus'],
      ['erschließen', 'erschließt · erschloss · hat erschlossen', 'يستنتج (معنى)', 'Unbekannte Wörter erschließe ich aus dem Satz.', 'Unbekannte Wörter erschließe ich aus den Satz.', 'aus + داتيف.', 'kasus', 'erschließe'],
      ['die Zuordnung', 'die Zuordnungen', 'المطابقة (مهمة)', 'Bei der Zuordnung bleibt ein Text übrig.', 'Bei die Zuordnung bleibt ein Text übrig.', 'bei + داتيف.', 'kasus'],
      ['übrig bleiben', 'bleibt übrig · blieb übrig · ist übrig geblieben', 'يتبقى', 'Ein Satz bleibt immer übrig.', 'Ein Satz bleibt immer über.', 'übrig لا über.', 'orthographie', 'übrig'],
      ['die Überschrift', 'die Überschriften', 'العنوان', 'Die Überschrift fasst den Absatz zusammen.', 'Die Überschrift fasst den Absatz zusammen auf.', 'zusammenfassen بلا auf.', 'lexik-kollokation'],
      ['richtig oder falsch', '—', 'صحيح أم خاطئ', 'Bei richtig oder falsch zählt nur der Text.', 'Bei richtig oder falsch zählt nur mein Wissen.', 'الحكم من النص لا من المعرفة العامة.', 'pruefstrategie', 'falsch'],
      ['steht nicht im Text', '—', 'غير وارد في النص', 'Diese Information steht nicht im Text.', 'Diese Information steht nicht in Text.', 'im Text.', 'präposition', 'Text'],
      ['die Minute pro Aufgabe', '—', 'الدقيقة لكل مهمة', 'Ich plane eine Minute pro Aufgabe.', 'Ich plane eine Minute pro Aufgaben.', 'pro + مفرد.', 'deklination', 'Aufgabe'],
      ['der Antwortbogen', 'die Antwortbögen', 'ورقة الإجابة', 'Am Ende übertrage ich alles auf den Antwortbogen.', 'Am Ende übertrage ich alles auf dem Antwortbogen.', 'الاتجاه: auf den.', 'kasus'],
      ['die Konzentration', '—', 'التركيز', 'Nach vierzig Minuten lässt die Konzentration nach.', 'Nach vierzig Minuten nachlässt die Konzentration.', 'منفصل: lässt … nach.', 'wortstellung'],
      ['raten', 'rät · riet · hat geraten', 'يخمّن', 'Lieber raten als eine Lücke lassen.', 'Lieber raten als eine Lücke zu lassen.', 'بعد als مصدر بلا zu هنا.', 'wortstellung']
    ],
    tricks: [
      { trick: 'المهمة قبل النص، والكلمات المفتاحية قبل القراءة', wie: 'Zuerst lese ich die Aufgabenstellung. Ich markiere drei Schlüsselwörter.', warum: 'النص بلا سؤال يُقرأ كله ولا يُحفظ منه شيء؛ السؤال يحدد ما تبحث عنه.', anchor: 'Zuerst lese ich die Aufgabenstellung.' },
      { trick: 'لا نقل من العربية، بل استنتاج من السياق', wie: 'Ich übertrage nicht aus dem Arabischen. · Aus dem Kontext erschließe ich das Wort.', warum: 'الترجمة كلمة بكلمة تأكل الوقت وتضلّل؛ السياق يعطي المعنى في ثوانٍ.', anchor: 'Ich übertrage nicht aus dem Arabischen.' },
      { trick: 'قسّم الوقت ولا تترك فراغًا', wie: 'Ich teile die Zeit ein. · Lieber raten als eine Lücke lassen.', warum: 'جزء واحد يبتلع كل الدقائق هو سبب الرسوب الأول في القراءة؛ والفراغ صفر مؤكد.', anchor: 'Lieber raten als eine Lücke lassen.' }
    ],
    order: [
      { satz: 'Zuerst | lese | ich die Aufgabenstellung.', ar: 'أولًا أقرأ صيغة المهمة.' },
      { satz: 'Aus dem Kontext | erschließe | ich das Wort.', ar: 'من السياق أستنتج الكلمة.' }
    ],
    writing: {
      prompt: 'اكتب خطتك لجزء القراءة في امتحان B2 في ستّ جمل: ترتيب المهمة والنص، الكلمات المفتاحية، ماذا تفعل بالكلمة المجهولة، تقسيم الوقت، النقل إلى ورقة الإجابة، والقاعدة عند الشك.',
      promptDe: 'Zuerst … · Ich markiere … · Unbekannte Wörter … · Ich teile die Zeit … · Am Ende übertrage ich … · Lieber raten als …',
      points: ['Aufgabenstellung قبل النص', 'erschließen aus dem Kontext', 'die Zeit einteilen', 'Antwortbogen', 'أربع كلمات من قائمة اليوم'],
      minWords: 60, familie: 'pruefstrategie'
    }
  },

  'b2-w06': {
    items: [
      ['die Tatsache', 'die Tatsachen', 'الواقعة', 'Die Tatsache: Die Lieferung kam zwei Tage zu spät.', 'Die Tatsache: Sie sind unfähig.', 'الواقعة تُسمّى، والشخص لا يُحكم عليه.', 'register'],
      ['die Folge', 'die Folgen', 'النتيجة', 'Die Folge war ein verpasster Termin.', 'Die Folge war ein verpasste Termin.', 'ein + مذكر: verpasster.', 'deklination'],
      ['die Bitte', 'die Bitten', 'الطلب', 'Meine Bitte: eine neue Lieferung bis Freitag.', 'Meine Bitte: Ich will Rache.', 'الطلب يُحدَّد بالشيء والمهلة.', 'register'],
      ['der Ton', '—', 'النبرة', 'Der Ton bleibt sachlich.', 'Der Ton bleibt lächerlich.', 'النبرة الموضوعية شرط القبول.', 'register'],
      ['hiermit', '—', 'بموجب هذا', 'Hiermit beschwere ich mich über die Lieferung.', 'Hiermit ich beschwere mich über die Lieferung.', 'الفعل ثانيًا.', 'wortstellung'],
      ['die Bestellnummer', 'die Bestellnummern', 'رقم الطلبية', 'Meine Bestellnummer lautet 4471.', 'Mein Bestellnummer lautet 4471.', 'Nummer مؤنثة: meine.', 'genus'],
      ['vereinbart', '—', 'متفق عليه', 'Der vereinbarte Termin war der 10. Mai.', 'Der vereinbart Termin war der 10. Mai.', 'بعد der: -e.', 'deklination', 'vereinbarte'],
      ['einhalten', 'hält ein · hielt ein · hat eingehalten', 'يلتزم بـ (موعد)', 'Sie haben den Termin nicht eingehalten.', 'Sie haben den Termin nicht einhalten.', 'Partizip II: eingehalten.', 'konjugation', 'eingehalten'],
      ['entstehen', 'entsteht · entstand · ist entstanden', 'ينشأ (ضرر)', 'Mir sind dadurch Kosten entstanden.', 'Mir haben dadurch Kosten entstanden.', 'entstehen ← sein.', 'konjugation', 'entstanden'],
      ['die Frist setzen', 'setzt eine Frist · setzte · hat gesetzt', 'يحدّد مهلة', 'Ich setze Ihnen eine Frist bis zum 20. Mai.', 'Ich setze Sie eine Frist bis zum 20. Mai.', 'jemandem eine Frist setzen: Ihnen.', 'kasus', 'Frist'],
      ['die Erstattung', 'die Erstattungen', 'الاسترداد', 'Ich erwarte die Erstattung der Kosten.', 'Ich erwarte die Erstattung von die Kosten.', 'الإضافة: der Kosten.', 'kasus'],
      ['andernfalls', '—', 'وإلا', 'Andernfalls wende ich mich an den Verbraucherschutz.', 'Andernfalls ich wende mich an den Verbraucherschutz.', 'الفعل ثانيًا.', 'wortstellung'],
      ['der Verbraucherschutz', '—', 'حماية المستهلك', 'Der Verbraucherschutz berät kostenlos.', 'Die Verbraucherschutz berät kostenlos.', 'Schutz مذكر.', 'genus'],
      ['beanstanden', 'beanstandet · beanstandete · hat beanstandet', 'يعترض على (عيبًا)', 'Ich beanstande außerdem die Verpackung.', 'Ich beanstande außerdem über die Verpackung.', 'beanstanden + النصب مباشرة.', 'präposition', 'beanstande'],
      ['der Sachverhalt', 'die Sachverhalte', 'مجريات الأمر', 'Ich schildere kurz den Sachverhalt.', 'Ich schildere kurz der Sachverhalt.', 'النصب: den Sachverhalt.', 'kasus'],
      ['schildern', 'schildert · schilderte · hat geschildert', 'يسرد (الوقائع)', 'Ich schildere die Tatsachen ohne Wertung.', 'Ich schildere die Tatsachen ohne Wertung ab.', 'schildern بلا سابقة.', 'lexik-kollokation', 'schildere'],
      ['die Kulanz', '—', 'التساهل التجاري', 'Aus Kulanz bieten Sie vielleicht einen Gutschein an.', 'Aus Kulanz anbieten Sie vielleicht einen Gutschein.', 'منفصل: bieten … an.', 'wortstellung'],
      ['der Gutschein', 'die Gutscheine', 'القسيمة', 'Einen Gutschein lehne ich ab.', 'Einen Gutschein lehne ich ab zu.', 'ablehnen: ab في الآخر فقط.', 'wortstellung'],
      ['um Stellungnahme bitten', 'bittet um · bat um · hat gebeten', 'يطلب ردًّا رسميًا', 'Ich bitte um eine Stellungnahme bis Freitag.', 'Ich bitte für eine Stellungnahme bis Freitag.', 'bitten um.', 'präposition', 'Stellungnahme'],
      ['die Unannehmlichkeit', 'die Unannehmlichkeiten', 'الإزعاج', 'Die Unannehmlichkeiten waren erheblich.', 'Die Unannehmlichkeiten war erheblich.', 'جمع ← waren.', 'konjugation', 'Unannehmlichkeiten']
    ],
    tricks: [
      { trick: 'واقعة، نتيجة، طلب: ثلاث فقرات للشكوى', wie: 'Die Lieferung kam zu spät (Tatsache). Die Folge war ein verpasster Termin. Ich bitte um eine neue Lieferung bis Freitag.', warum: 'الشكوى في B2 تُقيَّم ببنيتها؛ الغضب بلا طلب محدد لا يُجاب.', anchor: 'Die Folge war ein verpasster Termin.' },
      { trick: 'مهلة ثم «وإلا»: الطلب يصير فعّالًا', wie: 'Ich setze Ihnen eine Frist bis zum 20. Mai. Andernfalls wende ich mich an den Verbraucherschutz.', warum: 'الجملة الشرطية الختامية تُظهر الجدية بلا تهديد شخصي، وهي ما يميّز الرسالة الرسمية.', anchor: 'Ich setze Ihnen eine Frist bis zum 20. Mai.' },
      { trick: 'النبرة موضوعية: الوقائع تُسرد والأشخاص لا يُحكم عليهم', wie: 'Ich schildere die Tatsachen ohne Wertung. — لا Sie sind unfähig.', warum: 'حكم واحد على الموظف يحوّل الشكوى إلى إهانة ويُسقط النقاط.', anchor: 'Ich schildere die Tatsachen ohne Wertung.' }
    ],
    order: [
      { satz: 'Hiermit | beschwere | ich mich über die Lieferung.', ar: 'بموجب هذا أشتكي من التسليم.' },
      { satz: 'Andernfalls | wende | ich mich an den Verbraucherschutz.', ar: 'وإلا سألجأ إلى حماية المستهلك.' }
    ],
    writing: {
      prompt: 'اكتب رسالة شكوى رسمية (ستّ جمل فأكثر) عن تسليم متأخر ومعيب: رقم الطلبية، الواقعة بموعدها، النتيجة والتكاليف، اعتراض إضافي، طلب محدد بمهلة، وجملة «وإلا».',
      promptDe: 'Sehr geehrte Damen und Herren, · hiermit beschwere ich mich … (Bestellnummer …). · Der vereinbarte Termin war … · Die Folge … · Ich beanstande außerdem … · Ich setze Ihnen eine Frist bis … · Andernfalls … · Mit freundlichen Grüßen',
      points: ['Tatsache ثم Folge ثم Bitte', 'Frist setzen', 'andernfalls بالفعل ثانيًا', 'لا حكم على الأشخاص', 'أربع كلمات من قائمة اليوم'],
      minWords: 60, familie: 'register'
    }
  }
};

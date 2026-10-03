/* Deutschweg — P3.2 lexical layer, B2 production unit 19 (decision 18):
   workshops b2-w07 … b2-w12. Glossary rows, same format as vocab-b2-18.js. */

module.exports = {
  'b2-w07': {
    items: [
      ['das Homeoffice', '—', 'العمل من البيت', 'Einerseits spart das Homeoffice Zeit.', 'Einerseits spart das Homeoffice Zeit, nur Vorteile zählen.', 'einerseits يستدعي andererseits، لا «المزايا فقط».', 'lexik-kollokation'],
      ['die Kontrolle', 'die Kontrollen', 'الرقابة', 'Andererseits kostet es Kontrolle.', 'Andererseits es kostet Kontrolle.', 'الفعل ثانيًا.', 'wortstellung'],
      ['vor Ort', '—', 'في عين المكان', 'Die Grenze ist das Team vor Ort.', 'Die Grenze ist das Team auf Ort.', 'vor Ort تعبير ثابت.', 'präposition', 'Ort'],
      ['die Nachtschicht', 'die Nachtschichten', 'المناوبة الليلية', 'Ein Beispiel ist die Nachtschicht.', 'Ein Beispiel ist der Nachtschicht.', 'Schicht مؤنثة.', 'genus'],
      ['die Arbeitsbedingungen', 'nur Plural', 'ظروف العمل', 'Die Arbeitsbedingungen haben sich verändert.', 'Die Arbeitsbedingungen hat sich verändert.', 'جمع ← haben.', 'konjugation'],
      ['flexibel', '—', 'مرن', 'Flexible Arbeitszeiten helfen Eltern.', 'Flexibel Arbeitszeiten helfen Eltern.', 'صفة قبل الجمع: flexible.', 'deklination', 'Flexible'],
      ['die Vereinbarkeit', '—', 'التوفيق (بين العمل والأسرة)', 'Die Vereinbarkeit von Familie und Beruf ist das Ziel.', 'Der Vereinbarkeit von Familie und Beruf ist das Ziel.', '-keit مؤنثة.', 'genus'],
      ['die Produktivität', '—', 'الإنتاجية', 'Die Produktivität sinkt nicht automatisch.', 'Die Produktivität sinkt nicht automatisch ab.', 'sinken بلا ab.', 'lexik-kollokation'],
      ['der Austausch', '—', 'التبادل (بين الزملاء)', 'Der Austausch im Team fehlt zu Hause.', 'Die Austausch im Team fehlt zu Hause.', 'Austausch مذكر.', 'genus'],
      ['die Abgrenzung', 'die Abgrenzungen', 'الفصل (بين العمل والخصوصية)', 'Die Abgrenzung zwischen Arbeit und Freizeit fällt schwer.', 'Die Abgrenzung zwischen Arbeit und Freizeit fällt schwer aus.', 'schwerfallen بلا aus.', 'lexik-kollokation'],
      ['die Branche', 'die Branchen', 'القطاع', 'Nicht jede Branche erlaubt Homeoffice.', 'Nicht jede Branche erlauben Homeoffice.', 'مفرد ← erlaubt.', 'konjugation'],
      ['je nach', '—', 'بحسب', 'Je nach Beruf ist das anders.', 'Je nach Berufe ist das anders.', 'je nach + داتيف المفرد: Beruf.', 'kasus', 'nach'],
      ['die Regelung', 'die Regelungen', 'التنظيم (قاعدة متفق عليها)', 'Eine klare Regelung schützt beide Seiten.', 'Eine klar Regelung schützt beide Seiten.', 'eine + مؤنث: klare.', 'deklination'],
      ['vereinbaren', 'vereinbart · vereinbarte · hat vereinbart', 'يتفق على', 'Das Team vereinbart feste Zeiten.', 'Das Team vereinbart feste Zeiten ab.', 'vereinbaren بلا سابقة.', 'lexik-kollokation', 'vereinbart'],
      ['die Erreichbarkeit', '—', 'إمكانية الوصول', 'Ständige Erreichbarkeit macht krank.', 'Ständige Erreichbarkeit machen krank.', 'مفرد ← macht.', 'konjugation'],
      ['ständig', '—', 'دائم', 'Ständig online zu sein, ist kein Vorteil.', 'Ständig online sein, ist kein Vorteil.', 'المصدر مع zu: online zu sein.', 'wortstellung'],
      ['der Arbeitsweg', 'die Arbeitswege', 'طريق العمل', 'Der Arbeitsweg kostet täglich eine Stunde.', 'Der Arbeitsweg kosten täglich eine Stunde.', 'مفرد ← kostet.', 'konjugation'],
      ['pauschal', '—', 'بالجملة · بلا تمييز', 'Pauschal lässt sich das nicht sagen.', 'Pauschal lässt sich das nicht zu sagen.', 'بعد lassen مصدر بلا zu.', 'konjugation'],
      ['differenzieren', 'differenziert · differenzierte · hat differenziert', 'يميّز (بين الحالات)', 'Man muss nach Beruf differenzieren.', 'Man muss nach Beruf differenzieren zu.', 'بعد muss مصدر بلا zu.', 'konjugation', 'differenzieren'],
      ['die Betriebsvereinbarung', 'die Betriebsvereinbarungen', 'اتفاقية المؤسسة', 'Eine Betriebsvereinbarung regelt das Homeoffice.', 'Ein Betriebsvereinbarung regelt das Homeoffice.', '-ung مؤنثة.', 'genus']
    ],
    tricks: [
      { trick: 'einerseits/andererseits ثم الحدّ: Die Grenze ist …', wie: 'Einerseits spart das Zeit. Andererseits kostet es Kontrolle. Die Grenze ist das Team vor Ort.', warum: 'ذكر الجانبين بلا حدّ يبقى تعدادًا؛ الحدّ هو الحكم الذي يقيّمه B2.', anchor: 'Die Grenze ist das Team vor Ort.' },
      { trick: 'مثال ملموس واحد يزن أكثر من حكم عام', wie: 'Ein Beispiel ist die Nachtschicht: Homeoffice ist dort unmöglich.', warum: 'الجملة «العمل مهم» بلا مثال لا تُقيَّم؛ المثال يحوّل الرأي إلى حجة.', anchor: 'Ein Beispiel ist die Nachtschicht.' },
      { trick: 'Pauschal لا، je nach نعم', wie: 'Pauschal lässt sich das nicht sagen. Je nach Beruf ist das anders.', warum: 'التمييز بين الحالات (differenzieren) علامة B2 الأوضح في نقاش العمل.', anchor: 'Je nach Beruf ist das anders.' }
    ],
    order: [
      { satz: 'Andererseits | kostet | es Kontrolle.', ar: 'من جهة أخرى يكلّف ذلك رقابة.' },
      { satz: 'Je nach Beruf | ist | das anders.', ar: 'بحسب المهنة يختلف الأمر.' }
    ],
    writing: {
      prompt: 'ناقش العمل من البيت في ستّ جمل فأكثر: الجانبان بـ einerseits/andererseits، مثال ملموس، الحدّ، تمييز بـ je nach، وقاعدة مقترحة للفريق.',
      promptDe: 'Einerseits … · Andererseits … · Ein Beispiel ist … · Die Grenze ist … · Je nach Branche … · Deshalb sollte das Team … vereinbaren.',
      points: ['الجانبان', 'مثال ملموس', 'Die Grenze ist', 'je nach أو differenzieren', 'أربع كلمات من قائمة اليوم'],
      minWords: 60, familie: 'lexik-kollokation'
    }
  },

  'b2-w08': {
    items: [
      ['der Dialekt', 'die Dialekte', 'اللهجة', 'Ich verstehe den Dialekt, ich ahme ihn nicht nach.', 'Ich verstehe den Dialekt, ich ahme ihn nach.', 'الهدف الفهم لا التقليد.', 'pruefstrategie'],
      ['nachahmen', 'ahmt nach · ahmte nach · hat nachgeahmt', 'يقلّد', 'Den Dialekt ahme ich nicht nach.', 'Den Dialekt nachahme ich nicht.', 'منفصل: ahme … nach.', 'wortstellung', 'ahme'],
      ['österreichisch', '—', 'نمساوي', 'Das klingt österreichisch.', 'Das klingt österreichische.', 'بعد klingen بلا نهاية.', 'deklination'],
      ['schweizerisch', '—', 'سويسري', 'Grüezi ist schweizerisch.', 'Grüezi ist schweizerische.', 'بلا نهاية بعد ist.', 'deklination'],
      ['der Standard', '—', 'اللغة المعيارية', 'In der Prüfung bleibe ich beim Standard.', 'In der Prüfung bleibe ich bei Standard.', 'beim Standard (bei dem).', 'präposition'],
      ['das Hochdeutsch', '—', 'الألمانية الفصحى', 'Hochdeutsch versteht man überall.', 'Hochdeutsch verstehen man überall.', 'man مفرد ← versteht.', 'konjugation'],
      ['die Aussprache', 'die Aussprachen', 'النطق', 'Die Aussprache im Süden ist anders.', 'Der Aussprache im Süden ist anders.', 'Aussprache مؤنثة.', 'genus'],
      ['die Variante', 'die Varianten', 'الصيغة البديلة', 'Grüezi ist eine regionale Variante von Guten Tag.', 'Grüezi ist eine regional Variante von Guten Tag.', 'eine + مؤنث: regionale.', 'deklination'],
      ['regional', '—', 'إقليمي', 'Regionale Wörter stehen nicht im Lehrbuch.', 'Regional Wörter stehen nicht im Lehrbuch.', 'صفة قبل الجمع: regionale.', 'deklination', 'Regionale'],
      ['die Umgangssprache', '—', 'اللغة الدارجة', 'Die Umgangssprache ist schneller und kürzer.', 'Der Umgangssprache ist schneller und kürzer.', 'Sprache مؤنثة.', 'genus'],
      ['bairisch', '—', 'بافاري', 'Servus ist bairisch und österreichisch.', 'Servus ist bairische und österreichische.', 'بلا نهاية بعد ist.', 'deklination'],
      ['die Verständigung', '—', 'التفاهم', 'Die Verständigung gelingt trotz Dialekt.', 'Die Verständigung gelingt trotz Dialekts nicht nicht.', 'نفي واحد يكفي.', 'lexik-kollokation'],
      ['die Tonhöhe', 'die Tonhöhen', 'طبقة الصوت', 'Die Tonhöhe steigt am Satzende.', 'Die Tonhöhe steigt am Satzende an auf.', 'steigen وحدها تكفي.', 'lexik-kollokation'],
      ['der Sprecher', 'die Sprecher', 'المتحدث', 'Der Sprecher kommt wahrscheinlich aus Wien.', 'Der Sprecher kommt wahrscheinlich aus Wien her.', 'kommen aus بلا her.', 'lexik-kollokation'],
      ['die Herkunft', '—', 'الأصل (المنطقة)', 'Die Herkunft erkenne ich an der Aussprache.', 'Die Herkunft erkenne ich an die Aussprache.', 'erkennen an + داتيف.', 'kasus'],
      ['erkennen an', 'erkennt · erkannte · hat erkannt', 'يميّز بـ', 'Den Dialekt erkenne ich an einzelnen Wörtern.', 'Den Dialekt erkenne ich an einzelne Wörter.', 'an + داتيف الجمع: einzelnen Wörtern.', 'kasus', 'erkenne'],
      ['sich konzentrieren auf', 'konzentriert sich · hat sich konzentriert', 'يركّز على', 'Ich konzentriere mich auf den Inhalt.', 'Ich konzentriere mich auf dem Inhalt.', 'sich konzentrieren auf + النصب.', 'kasus', 'konzentriere'],
      ['der Inhalt', 'die Inhalte', 'المضمون', 'Der Inhalt zählt, nicht die Aussprache.', 'Der Inhalt zählen, nicht die Aussprache.', 'مفرد ← zählt.', 'konjugation'],
      ['stehen bleiben', 'bleibt stehen · blieb stehen · ist stehen geblieben', 'يتوقف (في الفهم)', 'Bei einem unbekannten Wort bleibe ich nicht stehen.', 'Bei einem unbekannten Wort stehenbleibe ich nicht.', 'bleibe … stehen.', 'wortstellung', 'stehen'],
      ['die Prüfungssprache', '—', 'لغة الامتحان', 'Die Prüfungssprache ist Hochdeutsch.', 'Die Prüfungssprache sind Hochdeutsch.', 'مفرد ← ist.', 'konjugation']
    ],
    tricks: [
      { trick: 'افهم اللهجة، تكلّم الفصحى', wie: 'Ich verstehe, ich ahme nicht nach. · In der Prüfung bleibe ich beim Standard.', warum: 'سماع B2 يختبر فهم اللهجات، والكلام يُقيَّم بالفصحى؛ التقليد يُنتج أخطاء بلا نقاط.', anchor: 'In der Prüfung bleibe ich beim Standard.' },
      { trick: 'اللهجة ألمانية صحيحة، لا «ألمانية خاطئة»', wie: 'Das klingt österreichisch. · Grüezi ist schweizerisch. — لا Das ist falsches Deutsch.', warum: 'الحكم على اللهجة بالخطأ يوقف الفهم؛ تسميتها يفتحه.', anchor: 'Das klingt österreichisch.' },
      { trick: 'التركيز على المضمون لا على النطق', wie: 'Ich konzentriere mich auf den Inhalt. Bei einem unbekannten Wort bleibe ich nicht stehen.', warum: 'الكلمة الغريبة تُستنتج من السياق؛ التوقف عندها يُفقد الجملة التالية.', anchor: 'Ich konzentriere mich auf den Inhalt.' }
    ],
    order: [
      { satz: 'In der Prüfung | bleibe | ich beim Standard.', ar: 'في الامتحان أبقى على اللغة المعيارية.' },
      { satz: 'Den Dialekt | ahme | ich nicht | nach.', ar: 'اللهجة لا أقلّدها.' }
    ],
    writing: {
      prompt: 'اكتب ستّ جمل عن تعاملك مع اللهجات في السماع: ماذا تفعل حين تسمع كلمة إقليمية، كيف تميّز أصل المتحدث، على ماذا تركّز، ما لا تفعله في الامتحان، ولماذا الفصحى في الكلام.',
      promptDe: 'Wenn ich ein regionales Wort höre, … · Die Herkunft erkenne ich an … · Ich konzentriere mich auf … · In der Prüfung … · Ich ahme … nicht nach, weil …',
      points: ['nachahmen منفصلًا', 'erkennen an بالداتيف', 'sich konzentrieren auf', 'Standard أو Hochdeutsch', 'أربع كلمات من قائمة اليوم'],
      minWords: 60, familie: 'hoerstrategie'
    }
  },

  'b2-w09': {
    items: [
      ['der Anstieg', 'die Anstiege', 'الارتفاع', 'Die Grafik zeigt einen Anstieg.', 'Die Grafik zeigt ein Anstieg.', 'Anstieg مذكر: einen.', 'kasus'],
      ['auffällig', '—', 'لافت', 'Auffällig ist der Unterschied zwischen den Gruppen.', 'Auffällig der Unterschied ist zwischen den Gruppen.', 'الفعل ثانيًا.', 'wortstellung'],
      ['im Vergleich zu', '—', 'مقارنةً بـ', 'Im Vergleich zu 2010 hat sich die Zahl verdoppelt.', 'Im Vergleich mit zu 2010 hat sich die Zahl verdoppelt.', 'im Vergleich zu.', 'präposition', 'Vergleich'],
      ['sich verdoppeln', 'verdoppelt sich · hat sich verdoppelt', 'يتضاعف', 'Die Zahl hat sich verdoppelt.', 'Die Zahl hat verdoppelt.', 'انعكاسي: sich verdoppelt.', 'deklination', 'verdoppelt'],
      ['vorsichtig deuten', 'deutet vorsichtig · deutete vorsichtig', 'يؤوّل بحذر', 'Danach deute ich vorsichtig.', 'Ich deute zuerst und beschreibe danach.', 'الوصف أولًا، ثم التأويل الحذر.', 'pruefstrategie', 'vorsichtig'],
      ['die Achse', 'die Achsen', 'المحور', 'Auf der linken Achse stehen die Prozente.', 'Auf die linke Achse stehen die Prozente.', 'أين؟ ← auf der linken Achse.', 'kasus'],
      ['die Säule', 'die Säulen', 'العمود (في الرسم)', 'Die höchste Säule zeigt das Jahr 2020.', 'Die höchste Säule zeigt den Jahr 2020.', 'Jahr محايد: das Jahr.', 'genus'],
      ['die Kurve', 'die Kurven', 'المنحنى', 'Die Kurve steigt bis 2015 und fällt danach.', 'Die Kurve steigt bis 2015 und danach fällt.', 'الفعل ثانيًا بعد und … danach: fällt danach.', 'wortstellung'],
      ['der Höchststand', 'die Höchststände', 'الذروة', 'Der Höchststand lag bei 42 Prozent.', 'Der Höchststand lag bei 42 Prozents.', 'Prozent بلا -s.', 'plural'],
      ['der Tiefstand', 'die Tiefstände', 'القاع', 'Der Tiefstand war 2008.', 'Der Tiefstand war in 2008.', 'السنة بلا in.', 'präposition'],
      ['knapp', '—', 'بالكاد · حوالي (أقل قليلًا)', 'Knapp ein Drittel ist dagegen.', 'Knapp ein Drittel sind dagegen.', 'ein Drittel مفرد ← ist.', 'konjugation'],
      ['rund', '—', 'حوالي', 'Rund 60 Prozent nutzen das Angebot.', 'Rund 60 Prozent nutzt das Angebot.', 'Prozent جمع هنا ← nutzen.', 'konjugation'],
      ['die Befragung', 'die Befragungen', 'الاستطلاع', 'Die Befragung stammt aus dem Jahr 2024.', 'Die Befragung stammt von dem Jahr 2024.', 'stammen aus.', 'präposition'],
      ['die Angabe', 'die Angaben', 'البيان (معطى)', 'Die Angaben sind in Prozent.', 'Die Angaben ist in Prozent.', 'جمع ← sind.', 'konjugation', 'Angaben'],
      ['die Tendenz', 'die Tendenzen', 'الاتجاه العام', 'Die Tendenz ist steigend.', 'Die Tendenz ist steigende.', 'بعد ist بلا نهاية.', 'deklination'],
      ['stagnieren', 'stagniert · stagnierte · hat stagniert', 'يركد', 'Seit 2018 stagniert die Zahl.', 'Seit 2018 die Zahl stagniert.', 'الفعل ثانيًا.', 'wortstellung', 'stagniert'],
      ['zurückgehen', 'geht zurück · ging zurück · ist zurückgegangen', 'يتراجع', 'Der Anteil ist deutlich zurückgegangen.', 'Der Anteil hat deutlich zurückgegangen.', 'zurückgehen ← sein.', 'konjugation', 'zurückgegangen'],
      ['die Deutung', 'die Deutungen', 'التأويل', 'Eine mögliche Deutung: Die Preise sind gestiegen.', 'Eine möglich Deutung: Die Preise sind gestiegen.', 'eine + مؤنث: mögliche.', 'deklination'],
      ['beweisen', 'beweist · bewies · hat bewiesen', 'يُثبت', 'Die Grafik beweist keine Ursache.', 'Die Grafik beweist warum.', 'الرسم يصف ولا يثبت السبب.', 'pruefstrategie', 'beweist'],
      ['die Einheit', 'die Einheiten', 'الوحدة (قياس)', 'Die Einheit steht unter der Grafik.', 'Die Einheit steht unter die Grafik.', 'أين؟ ← unter der Grafik.', 'kasus']
    ],
    tricks: [
      { trick: 'المصدر، ثم اللافت، ثم المقارنة، ثم التأويل الحذر', wie: 'Die Grafik zeigt … (Quelle, Jahr). Auffällig ist … Im Vergleich zu … Danach deute ich vorsichtig.', warum: 'وصف الرسم في B2 يُقيَّم بالترتيب؛ تعداد كل رقم أو التأويل أولًا يُخصم.', anchor: 'Die Grafik zeigt einen Anstieg.' },
      { trick: 'الرسم يصف ولا يُثبت السبب', wie: 'Die Grafik beweist keine Ursache. · Eine mögliche Interpretation: …', warum: 'الفرق بين zeigt وbeweist هو الفرق بين وصف وادّعاء؛ الامتحان يسأل عنه.', anchor: 'Die Grafik beweist keine Ursache.' },
      { trick: 'knapp وrund وdeutlich: تقريب بلا رقم مكرر', wie: 'knapp ein Drittel · rund 60 Prozent · deutlich zurückgegangen.', warum: 'ثلاث كلمات تغني عن قراءة كل رقم، وتُظهر فهم الاتجاه لا الجدول.', anchor: 'Rund 60 Prozent nutzen das Angebot.' }
    ],
    order: [
      { satz: 'Auffällig | ist | der Unterschied zwischen den Gruppen.', ar: 'اللافت هو الفرق بين المجموعتين.' },
      { satz: 'Seit 2018 | stagniert | die Zahl.', ar: 'منذ 2018 يركد العدد.' }
    ],
    writing: {
      prompt: 'صف رسمًا بيانيًا عن استعمال الدراجة في المدن بين 2010 و2024 في ستّ جمل: المصدر والوحدة، اللافت، المقارنة بـ im Vergleich zu، الذروة والقاع، الاتجاه، وتأويل حذر بلا ادعاء سبب.',
      promptDe: 'Die Grafik zeigt … · Die Angaben sind in … · Auffällig ist … · Im Vergleich zu 2010 … · Der Höchststand lag bei …, der Tiefstand … · Eine mögliche Interpretation: …, aber die Grafik beweist …',
      points: ['Auffällig ist', 'im Vergleich zu', 'Höchststand أو Tiefstand', 'beweist keine Ursache', 'أربع كلمات من قائمة اليوم'],
      minWords: 60, familie: 'lexik-kollokation'
    }
  },

  'b2-w10': {
    items: [
      ['die Wertung', 'die Wertungen', 'الحكم (التقييم)', 'Ich füge keine Wertung hinzu.', 'Ich füge keine Wertung zu.', 'hinzufügen: hinzu كاملة.', 'wortstellung'],
      ['die Reihenfolge', 'die Reihenfolgen', 'الترتيب', 'Ich behalte die Reihenfolge des Textes.', 'Ich behalte die Reihenfolge von Text.', 'الإضافة: des Textes.', 'kasus'],
      ['behalten', 'behält · behielt · hat behalten', 'يحتفظ بـ', 'Die Reihenfolge behalte ich bei.', 'Die Reihenfolge beibehalte ich.', 'beibehalten منفصل: behalte … bei.', 'wortstellung', 'behalte'],
      ['kürzer', 'kurz · kürzer · am kürzesten', 'أقصر', 'Die Zusammenfassung ist deutlich kürzer.', 'Die Zusammenfassung ist deutlich mehr kurz.', 'المقارنة: kürzer.', 'deklination'],
      ['das heißt', '—', 'أي', 'Das heißt, der Plan scheitert.', 'That means, der Plan scheitert.', 'that means إنجليزية.', 'falser-freund', 'heißt'],
      ['scheitern', 'scheitert · scheiterte · ist gescheitert', 'يفشل', 'Der Plan ist gescheitert.', 'Der Plan hat gescheitert.', 'scheitern ← sein.', 'konjugation', 'gescheitert'],
      ['abschreiben', 'schreibt ab · schrieb ab · hat abgeschrieben', 'ينسخ حرفيًا', 'Ich schreibe den Text nicht ab.', 'Ich abschreibe den Text nicht.', 'منفصل: schreibe … ab.', 'wortstellung', 'schreibe'],
      ['mit eigenen Worten', '—', 'بكلماتي الخاصة', 'Ich formuliere mit eigenen Worten.', 'Ich formuliere mit eigene Worte.', 'mit + داتيف الجمع: eigenen Worten.', 'kasus', 'Worten'],
      ['formulieren', 'formuliert · formulierte · hat formuliert', 'يصوغ', 'Ich formuliere jeden Gedanken neu.', 'Ich formuliere jeden Gedanken neu um.', 'formulieren بلا um هنا.', 'lexik-kollokation', 'formuliere'],
      ['die Hauptaussage', 'die Hauptaussagen', 'الفكرة الرئيسية', 'Jeder Absatz hat eine Hauptaussage.', 'Jeder Absatz hat ein Hauptaussage.', 'Aussage مؤنثة.', 'genus'],
      ['das Detail', 'die Details', 'التفصيل', 'Details lasse ich weg.', 'Details weglasse ich.', 'منفصل: lasse … weg.', 'wortstellung', 'Details'],
      ['der Verfasser', 'die Verfasser', 'الكاتب', 'Der Verfasser warnt vor den Folgen.', 'Der Verfasser warnt für die Folgen.', 'warnen vor + داتيف.', 'präposition'],
      ['die indirekte Rede', '—', 'الكلام غير المباشر', 'In der indirekten Rede steht der Konjunktiv.', 'In der indirekte Rede steht der Konjunktiv.', 'in der + داتيف: indirekten.', 'deklination', 'Rede'],
      ['laut', '—', 'حسب', 'Laut Verfasser sinkt die Zahl.', 'Laut dem Verfasser nach sinkt die Zahl.', 'laut وحدها، بلا nach.', 'präposition'],
      ['die Textsorte', 'die Textsorten', 'نوع النص', 'Die Textsorte ist ein Kommentar.', 'Der Textsorte ist ein Kommentar.', 'Sorte مؤنثة.', 'genus'],
      ['der Einleitungssatz', 'die Einleitungssätze', 'جملة الافتتاح', 'Der Einleitungssatz nennt Titel, Verfasser und Thema.', 'Der Einleitungssatz nennen Titel, Verfasser und Thema.', 'مفرد ← nennt.', 'konjugation'],
      ['die Gegenwart', '—', 'المضارع (الزمن)', 'Eine Zusammenfassung steht in der Gegenwart.', 'Eine Zusammenfassung steht in die Gegenwart.', 'in der Gegenwart.', 'kasus'],
      ['neutral', '—', 'محايد', 'Der Ton bleibt neutral.', 'Der Ton bleibt neutrale.', 'بعد bleiben بلا نهاية.', 'deklination'],
      ['der Umfang', '—', 'الحجم (طول النص)', 'Der Umfang beträgt ein Drittel.', 'Der Umfang betragt ein Drittel.', 'betragen: beträgt.', 'konjugation'],
      ['auf den Punkt bringen', 'bringt auf den Punkt · brachte', 'يوجز في لبّ الأمر', 'Ich bringe den Text auf den Punkt.', 'Ich bringe den Text auf dem Punkt.', 'auf den Punkt (نصب).', 'kasus', 'Punkt']
    ],
    tricks: [
      { trick: 'ثلاث ممنوعات في الملخص: حكم، ترتيب مقلوب، نسخ', wie: 'Ich füge keine Wertung hinzu. · Ich behalte die Reihenfolge. · Ich schreibe den Text nicht ab.', warum: 'الملخص يُقيَّم بالأمانة للنص؛ أي واحدة من الثلاث تُخصم كاملة.', anchor: 'Ich füge keine Wertung hinzu.' },
      { trick: 'بكلماتك، في المضارع، بحجم الثلث', wie: 'Ich formuliere mit eigenen Worten. · Eine Zusammenfassung steht in der Gegenwart. · Der Umfang beträgt ein Drittel.', warum: 'ثلاث قواعد شكل تجعل النص ملخصًا لا نسخة ولا مقالًا.', anchor: 'Ich formuliere mit eigenen Worten.' },
      { trick: 'das heißt لا that means', wie: 'Das heißt, der Plan scheitert. — فاصلة ثم جملة كاملة.', warum: 'العبارة الوحيدة المسموح بها للربط التفسيري في الملخص، والإنجليزية تُغري بنسخها.', anchor: 'Das heißt, der Plan scheitert.' }
    ],
    order: [
      { satz: 'Ich | behalte | die Reihenfolge | bei.', ar: 'أحافظ على الترتيب.' },
      { satz: 'Laut Verfasser | sinkt | die Zahl.', ar: 'حسب الكاتب ينخفض العدد.' }
    ],
    writing: {
      prompt: 'لخّص مقالًا من مكتبة B2 في ستّ جمل: جملة افتتاح بالعنوان والكاتب ونوع النص، الفكرة الرئيسية لكل فقرة بالترتيب، بكلماتك وفي المضارع، بلا حكم، وبحجم الثلث.',
      promptDe: 'Der Kommentar „…“ von … behandelt … · Laut Verfasser … · Das heißt, … · Der Verfasser warnt vor … · Abschließend …',
      points: ['Einleitungssatz كامل', 'Reihenfolge محفوظة', 'بلا Wertung', 'laut Verfasser أو indirekte Rede', 'أربع كلمات من قائمة اليوم'],
      minWords: 60, familie: 'register'
    }
  },

  'b2-w11': {
    items: [
      ['die Plattform', 'die Plattformen', 'المنصّة', 'Die Plattform ist nicht die Quelle.', 'Das Netz ist die Quelle.', 'المنصّة تنقل، والمصدر من يقف خلف الخبر.', 'pruefstrategie'],
      ['die Überschrift', 'die Überschriften', 'العنوان', 'Die Überschrift reicht nicht.', 'Die Überschrift reicht.', 'العنوان وعد، والنص هو الخبر.', 'pruefstrategie'],
      ['wahr machen', 'macht wahr · machte wahr', 'يحقّق (يجعل صحيحًا)', 'Viele Leser machen eine Aussage nicht wahr.', 'Viele Leser machen eine Aussage wahr.', 'كثرة القراء لا تحوّل الادعاء إلى حقيقة.', 'pruefstrategie', 'wahr'],
      ['die Glaubwürdigkeit', '—', 'المصداقية', 'Die Glaubwürdigkeit hängt von der Quelle ab.', 'Die Glaubwürdigkeit hängt von die Quelle ab.', 'abhängen von + داتيف.', 'kasus'],
      ['die Falschmeldung', 'die Falschmeldungen', 'الخبر الكاذب', 'Eine Falschmeldung verbreitet sich schnell.', 'Eine Falschmeldung verbreitet schnell.', 'sich verbreiten انعكاسي.', 'deklination'],
      ['sich verbreiten', 'verbreitet sich · hat sich verbreitet', 'ينتشر', 'Gerüchte verbreiten sich in Minuten.', 'Gerüchte verbreiten in Minuten.', 'انعكاسي: verbreiten sich.', 'deklination', 'verbreiten'],
      ['das Gerücht', 'die Gerüchte', 'الإشاعة', 'Das Gerücht hatte keine Quelle.', 'Der Gerücht hatte keine Quelle.', 'Gerücht محايد.', 'genus'],
      ['überprüfbar', '—', 'قابل للتحقق', 'Eine Angabe muss überprüfbar sein.', 'Eine Angabe muss überprüfbar zu sein.', 'بعد muss مصدر بلا zu.', 'konjugation'],
      ['die Primärquelle', 'die Primärquellen', 'المصدر الأولي', 'Ich suche die Primärquelle.', 'Ich suche nach die Primärquelle.', 'suchen + النصب مباشرة.', 'präposition'],
      ['der Algorithmus', 'die Algorithmen', 'الخوارزمية', 'Der Algorithmus zeigt, was gefällt.', 'Der Algorithmus zeigt, was gefällt uns.', 'الفعل في آخر الفرعية: was uns gefällt.', 'wortstellung'],
      ['die Reichweite', '—', 'مدى الانتشار', 'Reichweite ist kein Beweis.', 'Reichweite ist kein Beweise.', 'kein + مفرد: Beweis.', 'plural'],
      ['die Meinungsmache', '—', 'التلاعب بالرأي', 'Meinungsmache arbeitet mit Gefühlen.', 'Meinungsmache arbeiten mit Gefühlen.', 'مفرد ← arbeitet.', 'konjugation'],
      ['die Medienkompetenz', '—', 'الكفاءة الإعلامية', 'Medienkompetenz lernt man in der Schule.', 'Medienkompetenz lernen man in der Schule.', 'man ← lernt.', 'konjugation'],
      ['hinterfragen', 'hinterfragt · hinterfragte · hat hinterfragt', 'يتساءل نقديًا عن', 'Ich hinterfrage jede Schlagzeile.', 'Ich frage jede Schlagzeile hinter.', 'hinterfragen غير منفصل.', 'wortstellung', 'hinterfrage'],
      ['der Zusammenhang', 'die Zusammenhänge', 'السياق', 'Ein Zitat ohne Zusammenhang täuscht.', 'Ein Zitat ohne Zusammenhang täuscht ab.', 'täuschen بلا ab.', 'lexik-kollokation'],
      ['täuschen', 'täuscht · täuschte · hat getäuscht', 'يخدع', 'Bilder können täuschen.', 'Bilder können täuschen sich.', 'täuschen متعدٍّ هنا بلا sich.', 'lexik-kollokation', 'täuschen'],
      ['das Gegenbeispiel', 'die Gegenbeispiele', 'المثال المضاد', 'Ein Gegenbeispiel gehört zur Diskussion.', 'Ein Gegenbeispiel gehört zu der Diskussion dazu.', 'gehört zur Diskussion يكفي.', 'lexik-kollokation'],
      ['ignorieren', 'ignoriert · ignorierte · hat ignoriert', 'يتجاهل', 'Wer das Gegenbeispiel ignoriert, verliert.', 'Wer ignoriert das Gegenbeispiel, verliert.', 'في جملة wer الفعل في الآخر.', 'wortstellung', 'ignoriert'],
      ['seriös', '—', 'جدّي · موثوق', 'Eine seriöse Quelle nennt Autor und Datum.', 'Eine seriös Quelle nennt Autor und Datum.', 'eine + مؤنث: seriöse.', 'deklination', 'seriöse'],
      ['teilen', 'teilt · teilte · hat geteilt', 'يشارك (منشورًا)', 'Ich teile nichts, was ich nicht geprüft habe.', 'Ich teile nichts, was ich habe nicht geprüft.', 'الفرعية: geprüft habe في الآخر.', 'wortstellung', 'teile']
    ],
    tricks: [
      { trick: 'ثلاثة أسئلة قبل المشاركة: من؟ متى؟ أين الأصل؟', wie: 'Eine seriöse Quelle nennt Autor und Datum. Ich suche die Primärquelle.', warum: 'المصداقية تُفحص بالمصدر لا بعدد القراء؛ Reichweite ist kein Beweis.', anchor: 'Die Plattform ist nicht die Quelle.' },
      { trick: 'العنوان يَعِد والنص يُثبت أو لا', wie: 'Die Überschrift reicht nicht. — اقرأ الفقرة الأولى والأخيرة قبل الحكم.', warum: 'نصف النقاشات الإعلامية تدور حول عناوين لم يُقرأ نصها.', anchor: 'Die Überschrift reicht nicht.' },
      { trick: 'المثال المضاد جزء من الحجة لا عدوّها', wie: 'Ein Gegenbeispiel gehört zur Diskussion. Wer es ignoriert, verliert.', warum: 'في B2 يُقيَّم ذكر الطرف الآخر؛ تجاهله يُقرأ ضعفًا لا قوة.', anchor: 'Ein Gegenbeispiel gehört zur Diskussion.' }
    ],
    order: [
      { satz: 'Die Plattform | ist | nicht die Quelle.', ar: 'المنصّة ليست المصدر.' },
      { satz: 'Gerüchte | verbreiten | sich in Minuten.', ar: 'الإشاعات تنتشر في دقائق.' }
    ],
    writing: {
      prompt: 'اكتب تعليقًا من ستّ جمل عن خبر انتشر على منصّة: لماذا المنصّة ليست المصدر، ماذا تفحص قبل المشاركة، لماذا لا يكفي العنوان، مثال مضاد، وجملة عن الكفاءة الإعلامية.',
      promptDe: 'Die Plattform ist nicht die Quelle, weil … · Bevor ich etwas teile, prüfe ich … · Die Überschrift … · Ein Gegenbeispiel: … · Medienkompetenz heißt, …',
      points: ['Quelle vs Plattform', 'hinterfragen أو überprüfbar', 'Gegenbeispiel', 'جملة فرعية بالفعل في الآخر', 'أربع كلمات من قائمة اليوم'],
      minWords: 60, familie: 'pruefstrategie'
    }
  },

  'b2-w12': {
    items: [
      ['die Position', 'die Positionen', 'الموقف', 'Die Position ist ein Satz, kein Wort.', 'Die Position ist ein Wort.', 'الموقف يُصاغ جملة كاملة.', 'pruefstrategie'],
      ['die Einschränkung', 'die Einschränkungen', 'التحفظ', 'Die Einschränkung gehört zur Position.', 'Die Einschränkung gehört zu die Position.', 'zu + داتيف: zur.', 'kasus'],
      ['der Durchgang', 'die Durchgänge', 'الجولة (سماع)', 'Ich plane zwei Durchgänge.', 'Ich plane zwei Durchgang.', 'الجمع Durchgänge.', 'plural', 'Durchgänge'],
      ['zur Frage notieren', 'notiert · notierte · hat notiert', 'يدوّن بما يخص السؤال', 'Ich notiere nur zur Frage.', 'Ich notiere jedes Wort.', 'التدوين موجَّه بالسؤال.', 'hoerstrategie', 'notiere'],
      ['der Interviewte', 'die Interviewten', 'الشخص المُستجوَب', 'Der Interviewte schränkt seine Aussage ein.', 'Der Interviewte einschränkt seine Aussage.', 'منفصل: schränkt … ein.', 'wortstellung'],
      ['die Interviewerin', 'die Interviewerinnen', 'المحاوِرة', 'Die Interviewerin fragt nach einem Beispiel.', 'Die Interviewerin fragt für ein Beispiel.', 'fragen nach + داتيف.', 'präposition'],
      ['die Haltung', 'die Haltungen', 'الموقف العام', 'Die Haltung erkenne ich an Wörtern wie aber.', 'Die Haltung erkenne ich an Wörter wie aber.', 'an + داتيف الجمع: Wörtern.', 'kasus'],
      ['ohne Grenze', '—', 'بلا تحفظ', 'Er sagt es nie ohne Grenze.', 'Er sagt es immer ohne Grenze.', 'موقف B2 يحمل تحفظًا.', 'pruefstrategie', 'Grenze'],
      ['die Rückfrage', 'die Rückfragen', 'سؤال الاستيضاح', 'Eine Rückfrage zeigt Interesse.', 'Eine Rückfrage zeigen Interesse.', 'مفرد ← zeigt.', 'konjugation'],
      ['das Zögern', '—', 'التردد', 'Das Zögern verrät Unsicherheit.', 'Der Zögern verrät Unsicherheit.', 'المصدر المسمّى محايد.', 'genus'],
      ['verraten', 'verrät · verriet · hat verraten', 'يكشف (بلا قصد)', 'Der Ton verrät mehr als die Wörter.', 'Der Ton verrät mehr wie die Wörter.', 'mehr als.', 'lexik-kollokation', 'verrät'],
      ['die Kernfrage', 'die Kernfragen', 'السؤال الجوهري', 'Die Kernfrage kommt oft am Ende.', 'Der Kernfrage kommt oft am Ende.', 'Frage مؤنثة.', 'genus'],
      ['im ersten Durchgang', '—', 'في الجولة الأولى', 'Im ersten Durchgang höre ich nur die Struktur.', 'Im erste Durchgang höre ich nur die Struktur.', 'im + داتيف: ersten.', 'deklination', 'ersten'],
      ['im zweiten Durchgang', '—', 'في الجولة الثانية', 'Im zweiten Durchgang prüfe ich die Antworten.', 'Im zweite Durchgang prüfe ich die Antworten.', 'im + داتيف: zweiten.', 'deklination', 'zweiten'],
      ['die Stichwortnotiz', 'die Stichwortnotizen', 'ملاحظة بكلمات مفتاحية', 'Eine Stichwortnotiz reicht pro Frage.', 'Eine Stichwortnotiz reicht pro Fragen.', 'pro + مفرد.', 'deklination'],
      ['sich widersprechen', 'widerspricht sich · hat sich widersprochen', 'يناقض نفسه', 'Der Interviewte widerspricht sich nicht.', 'Der Interviewte widerspricht nicht.', 'انعكاسي هنا: sich widersprechen.', 'deklination', 'widerspricht'],
      ['die Tonlage', 'die Tonlagen', 'نبرة الصوت', 'An der Tonlage höre ich die Ironie.', 'An die Tonlage höre ich die Ironie.', 'an + داتيف.', 'kasus'],
      ['die Ironie', '—', 'السخرية', 'Ironie meint das Gegenteil.', 'Ironie meinen das Gegenteil.', 'مفرد ← meint.', 'konjugation'],
      ['die Gesprächsstrategie', 'die Gesprächsstrategien', 'استراتيجية الحوار', 'Jede Interviewerin hat eine Gesprächsstrategie.', 'Jede Interviewerin hat ein Gesprächsstrategie.', 'Strategie مؤنثة.', 'genus'],
      ['das dritte Mal', '—', 'المرة الثالثة', 'Auf das dritte Mal warte ich nicht.', 'Auf das dritte Mal warte ich nicht ab.', 'warten auf بلا ab.', 'lexik-kollokation', 'dritte']
    ],
    tricks: [
      { trick: 'الموقف جملة، والتحفظ جزء منها', wie: 'Die Position ist ein Satz. Die Einschränkung gehört dazu: Ich bin dafür, aber nur wenn …', warum: 'كلمة واحدة (dafür) ليست موقفًا في B2؛ الجملة بتحفظها هي ما يُسأل عنه في السماع.', anchor: 'Die Position ist ein Satz, kein Wort.' },
      { trick: 'جولتان: بنية ثم إجابات', wie: 'Im ersten Durchgang höre ich nur die Struktur. Im zweiten Durchgang prüfe ich die Antworten.', warum: 'المقابلة تُسمع مرتين؛ من يحاول الإجابة في الأولى يخسر الثانية.', anchor: 'Ich plane zwei Durchgänge.' },
      { trick: 'النبرة تكشف الموقف: aber وeigentlich والتردد', wie: 'Die Haltung erkenne ich an Wörtern wie aber. Der Ton verrät mehr als die Wörter.', warum: 'الموقف في المقابلة يُخفى خلف المجاملة، وتظهره الكلمات العاكسة والنبرة.', anchor: 'Der Ton verrät mehr als die Wörter.' }
    ],
    order: [
      { satz: 'Ich | plane | zwei Durchgänge.', ar: 'أخطط لجولتين.' },
      { satz: 'Im zweiten Durchgang | prüfe | ich die Antworten.', ar: 'في الجولة الثانية أتحقق من الإجابات.' }
    ],
    writing: {
      prompt: 'اكتب خطتك لسماع مقابلة في امتحان B2 في ستّ جمل: ماذا تفعل في الجولة الأولى والثانية، كيف تدوّن، كيف تعرف الموقف والتحفظ، على ماذا تنتبه في النبرة، وما لا تنتظره.',
      promptDe: 'Im ersten Durchgang … · Im zweiten Durchgang … · Ich notiere nur zur Frage: … · Die Position erkenne ich an …, die Einschränkung an … · Der Ton verrät … · Auf das dritte Mal …',
      points: ['Durchgänge', 'Position + Einschränkung', 'erkennen an بالداتيف', 'Stichwortnotiz', 'أربع كلمات من قائمة اليوم'],
      minWords: 60, familie: 'hoerstrategie'
    }
  }
};

/* Deutschweg — P3.2 lexical layer, B1 production unit 16:
   b1-u4-l7, b1-u4-l8, b1-u5-l1 … b1-u5-l4. Same row format as vocab-b1-11.js. */

module.exports = {
  'b1-u4-l7': {
    items: [
      ['die Präsentation', 'die Präsentationen', 'العرض التقديمي', 'Meine Präsentation dauert drei Minuten.', 'Mein Präsentation dauert drei Minuten.', '-ion مؤنثة: meine Präsentation.', 'genus'],
      ['der Vortrag', 'die Vorträge', 'العرض الشفوي · المحاضرة', 'Ich halte einen Vortrag über Tunesien.', 'Ich mache einen Vortrag über Tunesien.', 'einen Vortrag halten، لا machen.', 'lexik-kollokation'],
      ['das Thema', 'die Themen', 'الموضوع', 'Mein Thema ist das Leben in der Stadt.', 'Meine Thema ist das Leben in der Stadt.', 'Thema محايد: das Thema، والجمع Themen.', 'genus'],
      ['die Gliederung', 'die Gliederungen', 'الهيكل · التقسيم', 'Die Gliederung hat drei Teile.', 'Die Gliederung hat drei Teilen.', 'الجمع في النصب Teile؛ Teilen داتيف بعد حرف جر فقط.', 'kasus'],
      ['der Hauptteil', 'die Hauptteile', 'الجزء الرئيسي', 'Im Hauptteil nenne ich zwei Vorteile.', 'In Hauptteil nenne ich zwei Vorteile.', 'im Hauptteil بالأداة.', 'präposition'],
      ['zunächst', '—', 'في البداية', 'Zunächst stelle ich das Thema vor.', 'Zunächst ich stelle das Thema vor.', 'Zunächst في الموضع الأول ← stelle ich.', 'wortstellung'],
      ['anschließend', '—', 'بعد ذلك', 'Anschließend zeige ich ein Beispiel.', 'Anschließend zeige ich einen Beispiel.', 'Beispiel محايد: ein Beispiel.', 'genus'],
      ['abschließend', '—', 'ختامًا', 'Abschließend fasse ich zusammen.', 'Abschließend ich fasse zusammen.', 'Abschließend في الموضع الأول ← fasse ich.', 'wortstellung'],
      ['die Folie', 'die Folien', 'الشريحة', 'Auf der nächsten Folie sehen Sie eine Grafik.', 'Auf dem nächsten Folie sehen Sie eine Grafik.', 'Folie مؤنثة: auf der Folie.', 'genus'],
      ['das Publikum', '—', 'الجمهور', 'Das Publikum hat viele Fragen gestellt.', 'Das Publikum haben viele Fragen gestellt.', 'Publikum مفرد ← hat.', 'konjugation'],
      ['die Zuhörer', 'der Zuhörer · die Zuhörer', 'المستمعون', 'Ich schaue die Zuhörer an.', 'Ich schaue die Zuhörer.', 'anschauen منفصل: schaue … an.', 'wortstellung'],
      ['das Fazit', 'die Fazits', 'الخلاصة', 'Mein Fazit: Die Stadt hat mehr Vorteile.', 'Mein Fazit: Die Stadt hat mehr Vorteilen.', 'hat + النصب الجمع: Vorteile.', 'kasus'],
      ['die Stichpunkte', 'der Stichpunkt · die Stichpunkte', 'النقاط الموجزة', 'Ich spreche frei mit Stichpunkten.', 'Ich spreche frei mit Stichpunkte.', 'mit + داتيف الجمع: Stichpunkten.', 'kasus', 'Stichpunkten'],
      ['eingehen auf', 'geht ein · ging ein · ist eingegangen', 'يتناول · يردّ على', 'Gern gehe ich auf Ihre Frage ein.', 'Gern gehe ich auf Ihre Frage.', 'eingehen auf منفصل: gehe … ein؛ بلا ein يعني يذهب.', 'wortstellung', 'gehe'],
      ['die Frage stellen', 'stellt · stellte · hat gestellt', 'يطرح سؤالًا', 'Sie können jetzt Fragen stellen.', 'Sie können jetzt Fragen fragen.', 'eine Frage stellen، لا fragen.', 'lexik-kollokation', 'stellen'],
      ['die Aufmerksamkeit', '—', 'الانتباه', 'Vielen Dank für Ihre Aufmerksamkeit.', 'Vielen Dank für Ihre Attention.', 'attention إنجليزية؛ die Aufmerksamkeit.', 'falser-freund'],
      ['nervös', '—', 'متوتر', 'Vor dem Vortrag war ich nervös.', 'Vor den Vortrag war ich nervös.', 'vor + داتيف للزمن: vor dem Vortrag.', 'kasus'],
      ['die Zeit einhalten', 'hält ein · hielt ein · hat eingehalten', 'يلتزم بالوقت', 'Bitte halten Sie die Zeit ein.', 'Bitte halten Sie die Zeit.', 'einhalten منفصل: halten … ein.', 'wortstellung', 'halten'],
      ['der Zeitrahmen', 'die Zeitrahmen', 'الإطار الزمني', 'Der Zeitrahmen beträgt drei Minuten.', 'Der Zeitrahmen betragt drei Minuten.', 'betragen قوي: beträgt.', 'konjugation'],
      ['frei sprechen', 'spricht frei · sprach frei · hat frei gesprochen', 'يتحدث بلا قراءة', 'Ich spreche frei und lese nicht ab.', 'Ich spreche frei und lese nicht.', 'ablesen (يقرأ من الورقة) منفصل: lese … ab.', 'wortstellung', 'frei']
    ],
    tricks: [
      { trick: 'ثلاثة أجزاء في ثلاث دقائق', wie: 'Zunächst … (Einleitung) · Im Hauptteil … · Abschließend … — ثم: Gibt es dazu Fragen?', warum: 'امتحان الكلام يقيّم البنية قبل المضمون؛ ثلاث كلمات ربط تجعل البنية مسموعة.', anchor: 'Zunächst stelle ich das Thema vor.' },
      { trick: 'Vortrag halten وFrage stellen: الأفعال الثابتة', wie: 'einen Vortrag halten · eine Frage stellen · auf eine Frage eingehen.', warum: 'machen وfragen في مكانهما تُفهمان لكنهما تُنزلان الدرجة اللغوية فورًا.', anchor: 'Ich halte einen Vortrag über Tunesien.' },
      { trick: 'الجملة الأخيرة محفوظة: Vielen Dank für Ihre Aufmerksamkeit', wie: 'Abschließend … · Vielen Dank für Ihre Aufmerksamkeit. · Gibt es dazu Fragen?', warum: 'كثيرون يتوقفون فجأة بلا خاتمة؛ جملتان محفوظتان تنهيان كل عرض بأمان.', anchor: 'Vielen Dank für Ihre Aufmerksamkeit.' }
    ],
    order: [
      { satz: 'Zunächst | stelle | ich das Thema | vor.', ar: 'في البداية أقدّم الموضوع.' },
      { satz: 'Gern | gehe | ich auf Ihre Frage | ein.', ar: 'بكل سرور أردّ على سؤالك.' }
    ],
    writing: {
      prompt: 'اكتب مخطط عرض قصير (3 دقائق) عن مدينتك في خمس جمل: الموضوع، ما تفعله في البداية (zunächst)، الجزء الرئيسي بمثال، الخاتمة (abschließend)، وجملة الشكر وطلب الأسئلة.',
      promptDe: 'Mein Thema ist … · Zunächst … · Im Hauptteil … zum Beispiel … · Abschließend … · Vielen Dank für Ihre Aufmerksamkeit. Gibt es dazu Fragen?',
      points: ['zunächst وabschließend بالفعل ثانيًا', 'einen Vortrag halten أو das Thema vorstellen', 'جملة الشكر الختامية', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'wortstellung'
    }
  },

  'b1-u4-l8': {
    items: [
      ['die Haltung', 'die Haltungen', 'الموقف (اتجاه الرأي)', 'Ich suche die Haltung des Sprechers.', 'Ich suche die Haltung von Sprecher.', 'الإضافة: des Sprechers.', 'kasus'],
      ['der Sprecher', 'die Sprecher', 'المتحدث', 'Der Sprecher ist dafür.', 'Der Speaker ist dafür.', 'speaker إنجليزية؛ der Sprecher.', 'falser-freund'],
      ['das Interview', 'die Interviews', 'المقابلة الصحفية', 'Im Interview spricht eine Ärztin.', 'In Interview spricht eine Ärztin.', 'im Interview بالأداة.', 'präposition'],
      ['das Gespräch', 'die Gespräche', 'الحديث · المحادثة', 'Das Gespräch dauert vier Minuten.', 'Der Gespräch dauert vier Minuten.', 'Gespräch محايد: das Gespräch.', 'genus'],
      ['vorher', '—', 'مسبقًا · قبل ذلك', 'Ich lese die Fragen vorher.', 'Ich lese die Fragen vorher vor.', 'vorlesen (يقرأ بصوت عالٍ) فعل آخر؛ vorher ظرف.', 'lexik-kollokation'],
      ['das Hören', '—', 'الاستماع (المرة)', 'Vor dem zweiten Hören lese ich die Frage.', 'Vor das zweite Hören lese ich die Frage.', 'vor + داتيف للزمن: vor dem zweiten Hören.', 'kasus'],
      ['notieren', 'notiert · notierte · hat notiert', 'يدوّن', 'Ich notiere nur ein Wort.', 'Ich notiere nur ein Wort auf.', 'notieren بلا سابقة؛ aufschreiben فعل آخر.', 'lexik-kollokation', 'notiere'],
      ['die Notiz', 'die Notizen', 'الملاحظة', 'Eine kurze Notiz reicht.', 'Eine kurze Notiz reichen.', 'eine Notiz مفرد ← reicht.', 'konjugation'],
      ['das Stichwort', 'die Stichwörter', 'الكلمة المفتاحية', 'Ich höre auf Stichwörter wie aber und trotzdem.', 'Ich höre an Stichwörter wie aber und trotzdem.', 'hören auf + النصب.', 'präposition', 'Stichwörter'],
      ['das Gefühl', 'die Gefühle', 'الشعور · الإحساس', 'Ich antworte nicht nach Gefühl.', 'Ich antworte nicht nach Gefühle.', 'nach Gefühl تعبير ثابت بالمفرد.', 'lexik-kollokation'],
      ['die Aussage', 'die Aussagen', 'العبارة · التصريح', 'Welche Aussage ist richtig?', 'Welcher Aussage ist richtig?', 'Aussage مؤنثة: welche Aussage.', 'genus'],
      ['richtig oder falsch', '—', 'صحيح أم خاطئ', 'Kreuzen Sie richtig oder falsch an.', 'Kreuzen Sie richtig oder falsch an?', 'الأمر ينتهي بنقطة لا بعلامة استفهام.', 'orthographie', 'falsch'],
      ['ankreuzen', 'kreuzt an · kreuzte an · hat angekreuzt', 'يؤشّر في المربع', 'Ich kreuze die Antwort an.', 'Ich kreuze die Antwort.', 'ankreuzen منفصل: kreuze … an.', 'wortstellung', 'kreuze'],
      ['die Ansage', 'die Ansagen', 'الإعلان الصوتي', 'Die Ansage am Bahnhof war unverständlich.', 'Die Ansage am Bahnhof war unverständig.', 'unverständlich (غير مفهوم) ≠ unverständig (غير عاقل).', 'lexik-kollokation'],
      ['unbekannt', '—', 'غير معروف', 'Ein unbekanntes Wort stoppt mich nicht.', 'Ein unbekannt Wort stoppt mich nicht.', 'ein + محايد: -es: ein unbekanntes Wort.', 'deklination', 'unbekanntes'],
      ['der Zusammenhang', 'die Zusammenhänge', 'السياق', 'Ich verstehe das Wort aus dem Zusammenhang.', 'Ich verstehe das Wort aus den Zusammenhang.', 'aus + داتيف: aus dem Zusammenhang.', 'kasus'],
      ['der Hinweis', 'die Hinweise', 'الإشارة · التلميح', 'Der Hinweis steht oft am Anfang.', 'Die Hinweis steht oft am Anfang.', 'Hinweis مذكر: der Hinweis.', 'genus'],
      ['markieren', 'markiert · markierte · hat markiert', 'يُظلّل · يُعلّم', 'Ich markiere die Schlüsselwörter in der Frage.', 'Ich markiere die Schlüsselwörter in die Frage.', 'in + داتيف للمكان: in der Frage.', 'kasus', 'markiere'],
      ['die Pause', 'die Pausen', 'الوقفة · الاستراحة', 'In der Pause lese ich die nächste Frage.', 'In die Pause lese ich die nächste Frage.', 'in + داتيف: in der Pause.', 'kasus'],
      ['gelassen', '—', 'هادئ · رابط الجأش', 'Beim Hören bleibe ich gelassen.', 'Beim Hören bleibe ich relaxed.', 'relaxed إنجليزية؛ gelassen أو entspannt.', 'falser-freund']
    ],
    tricks: [
      { trick: 'اقرأ السؤال قبل السماع الثاني', wie: 'Vor dem zweiten Hören lese ich die Frage. — السماع الأول للفهم العام، والثاني للجواب.', warum: 'من يسمع بلا سؤال يسمع كل شيء ولا يلتقط شيئًا؛ السؤال يوجّه الأذن.', anchor: 'Vor dem zweiten Hören lese ich die Frage.' },
      { trick: 'الكلمة المجهولة لا توقفك: السياق يكفي', wie: 'Ein unbekanntes Wort stoppt mich nicht. · Ich verstehe es aus dem Zusammenhang.', warum: 'التوقف عند كلمة يُفقدك الجملتين التاليتين، وهما غالبًا حيث الجواب.', anchor: 'Ein unbekanntes Wort stoppt mich nicht.' },
      { trick: 'Haltung لا Gefühl: ابحث عن aber وtrotzdem', wie: 'dafür أم dagegen؟ الكلمات aber وtrotzdem وeigentlich تقلب الموقف.', warum: 'امتحان السماع يسأل عن موقف المتحدث، والجواب بالإحساس يقع في فخ الجملة الأولى.', anchor: 'Ich suche die Haltung des Sprechers.' }
    ],
    order: [
      { satz: 'Vor dem zweiten Hören | lese | ich die Frage.', ar: 'قبل السماع الثاني أقرأ السؤال.' },
      { satz: 'Ich | kreuze | die Antwort | an.', ar: 'أؤشّر على الجواب.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن استراتيجيتك في امتحان السماع: ماذا تفعل قبل السماع الأول، ماذا تدوّن، ماذا تفعل مع كلمة لا تعرفها، كيف تعرف موقف المتحدث، وكيف تبقى هادئًا.',
      promptDe: 'Vor dem ersten Hören … · Ich notiere nur … · Ein unbekanntes Wort … · Die Haltung erkenne ich an … · Ich bleibe gelassen, weil …',
      points: ['vor dem Hören بالداتيف', 'notieren أو markieren', 'aus dem Zusammenhang', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'hoerstrategie'
    }
  },

  'b1-u5-l1': {
    items: [
      ['die Tatsache', 'die Tatsachen', 'الحقيقة · الواقعة', 'Das ist eine Tatsache, keine Meinung.', 'Das ist eine Tatsache, keine Meinung nicht.', 'keine تكفي للنفي؛ nicht زائدة.', 'lexik-kollokation'],
      ['die Wertung', 'die Wertungen', 'الحكم · التقييم', 'Das ist eine Wertung des Autors.', 'Das ist eine Wertung von Autor.', 'الإضافة: des Autors.', 'kasus'],
      ['der Kommentar', 'die Kommentare', 'التعليق', 'Der Kommentar enthält viele Wertungen.', 'Das Kommentar enthält viele Wertungen.', 'Kommentar مذكر: der Kommentar.', 'genus'],
      ['belegen', 'belegt · belegte · hat belegt', 'يُثبت بدليل', 'Der Autor belegt seine These nicht.', 'Der Autor beleget seine These nicht.', 'belegt بلا e: er belegt.', 'konjugation', 'belegt'],
      ['die These', 'die Thesen', 'الأطروحة', 'Die These ist klar, aber unbelegt.', 'Der These ist klar, aber unbelegt.', 'These مؤنثة: die These.', 'genus'],
      ['der Titel', 'die Titel', 'العنوان', 'Der Titel reicht nicht als Beleg.', 'Der Titel reichen nicht als Beleg.', 'der Titel مفرد ← reicht.', 'konjugation'],
      ['bewerten', 'bewertet · bewertete · hat bewertet', 'يقيّم', 'Der Autor bewertet, er berichtet nicht.', 'Der Autor evaluiert, er berichtet nicht.', 'evaluieren للدراسات العلمية؛ في النص bewerten.', 'lexik-kollokation', 'bewertet'],
      ['objektiv', '—', 'موضوعي', 'Eine Nachricht sollte objektiv sein.', 'Eine Nachricht sollte objektiv zu sein.', 'بعد sollte مصدر بلا zu.', 'konjugation'],
      ['subjektiv', '—', 'ذاتي', 'Ein Kommentar ist immer subjektiv.', 'Ein Kommentar ist immer subjektive.', 'بعد ist بلا نهاية: subjektiv.', 'deklination'],
      ['behaupten', 'behauptet · behauptete · hat behauptet', 'يدّعي', 'Der Autor behauptet, dass die Zahl gestiegen ist.', 'Der Autor behauptet, dass die Zahl ist gestiegen.', 'dass ← gestiegen ist في الآخر.', 'wortstellung', 'behauptet'],
      ['die Übertreibung', 'die Übertreibungen', 'المبالغة', 'Immer und nie sind Zeichen für Übertreibung.', 'Immer und nie sind Zeichen von Übertreibung.', 'Zeichen für + النصب.', 'präposition'],
      ['übertreiben', 'übertreibt · übertrieb · hat übertrieben', 'يبالغ', 'Der Autor übertreibt.', 'Der Autor treibt über.', 'übertreiben غير منفصل.', 'wortstellung', 'übertreibt'],
      ['die Schlussfolgerung', 'die Schlussfolgerungen', 'الاستنتاج', 'Die Schlussfolgerung ist nicht belegt.', 'Der Schlussfolgerung ist nicht belegt.', '-ung مؤنثة: die Schlussfolgerung.', 'genus'],
      ['der Leser', 'die Leser', 'القارئ', 'Der Autor will den Leser überzeugen.', 'Der Autor will den Lesern überzeugen.', 'überzeugen + النصب: den Leser.', 'kasus'],
      ['die Wirkung', 'die Wirkungen', 'الأثر · التأثير', 'Starke Wörter haben eine starke Wirkung.', 'Starke Wörter haben einen starken Wirkung.', 'Wirkung مؤنثة: eine starke Wirkung.', 'genus'],
      ['kritisieren', 'kritisiert · kritisierte · hat kritisiert', 'ينتقد', 'Der Kommentar kritisiert die Regierung.', 'Der Kommentar kritisiert an die Regierung.', 'kritisieren + مفعول مباشر.', 'präposition', 'kritisiert'],
      ['die Kritik', 'die Kritiken', 'النقد', 'Die Kritik ist berechtigt.', 'Die Critique ist berechtigt.', 'critique الفرنسية؛ die Kritik.', 'falser-freund'],
      ['berechtigt', '—', 'مبرَّر · مشروع', 'Die Frage ist berechtigt.', 'Die Frage ist berechtigte.', 'بعد ist بلا نهاية.', 'deklination'],
      ['die Meinungsfreiheit', '—', 'حرية الرأي', 'Meinungsfreiheit gilt auch für Kommentare.', 'Meinungsfreiheit geltet auch für Kommentare.', 'gelten قوي: gilt.', 'konjugation'],
      ['unterscheiden', 'unterscheidet · unterschied · hat unterschieden', 'يميّز', 'Ich unterscheide Tatsache und Wertung.', 'Ich unterscheide zwischen Tatsache oder Wertung.', 'unterscheiden zwischen … und؛ لا oder.', 'lexik-kollokation', 'unterscheide']
    ],
    tricks: [
      { trick: 'Tatsache تُقاس، وWertung تُشعَر', wie: 'Die Zahl ist gestiegen (حقيقة) · Das ist eine Katastrophe (حكم).', warum: 'امتحان القراءة يسأل: ما الذي يقوله النص وما الذي يراه الكاتب؛ الفصل بينهما نصف الدرجة.', anchor: 'Das ist eine Wertung des Autors.' },
      { trick: 'immer وnie وalle: إشارات المبالغة', wie: 'Alle Politiker lügen. · Das passiert immer. — أحكام لا حقائق.', warum: 'كلمات الإطلاق تفضح الحكم خلف صيغة الخبر، وهي أسهل علامة يلتقطها القارئ.', anchor: 'Immer und nie sind Zeichen für Übertreibung.' },
      { trick: 'behaupten ليست belegen: الادعاء يحتاج دليلًا', wie: 'Der Autor behauptet … (يقول) · Der Autor belegt … (يُثبت بمصدر).', warum: 'الفعلان يبدآن بـ be- ويختلفان في القيمة؛ من يخلطهما يعطي الادعاء قوة الدليل.', anchor: 'Der Autor belegt seine These nicht.' }
    ],
    order: [
      { satz: 'Der Autor | belegt | seine These nicht.', ar: 'الكاتب لا يُثبت أطروحته.' },
      { satz: 'Ich | unterscheide | Tatsache und Wertung.', ar: 'أميّز بين الحقيقة والحكم.' }
    ],
    writing: {
      prompt: 'تخيّل تعليقًا صحفيًا عن حظر السيارات في وسط المدينة، واكتب خمس جمل: ما الحقيقة فيه، ما الحكم، أين المبالغة، هل الأطروحة مُثبتة، وما رأيك بجملة واحدة.',
      promptDe: 'Eine Tatsache im Text ist … · Eine Wertung ist … · Der Autor übertreibt, wenn er … · Die These ist nicht belegt, weil … · Ich finde …',
      points: ['Tatsache وWertung', 'behaupten أو belegen', 'جملة weil أو wenn بالفعل في الآخر', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'lexik-kollokation'
    }
  },

  'b1-u5-l2': {
    items: [
      ['könnten Sie', '—', 'هل يمكنكم (مهذبًا)', 'Könnten Sie das bitte prüfen?', 'Kannst Sie das bitte prüfen?', 'مع Sie: Könnten Sie؛ kannst مع du.', 'konjugation', 'Könnten'],
      ['würden Sie', '—', 'هل تتكرمون بـ', 'Würden Sie mir bitte helfen?', 'Würden Sie mir bitte zu helfen?', 'بعد würden مصدر بلا zu.', 'konjugation', 'Würden'],
      ['hätten Sie', '—', 'هل لديكم (مهذبًا)', 'Hätten Sie morgen Zeit?', 'Hatten Sie morgen Zeit?', 'الطلب المهذب بـ hätten (Konjunktiv II)؛ hatten ماضٍ.', 'konjugation', 'Hätten'],
      ['wäre es möglich', '—', 'هل يمكن (مهذبًا)', 'Wäre es möglich, den Termin zu verschieben?', 'Wäre es möglich, den Termin verschieben?', 'بعد möglich فاصلة ثم zu + مصدر.', 'wortstellung', 'Wäre'],
      ['der Befehl', 'die Befehle', 'الأمر', 'Das ist eine Bitte, kein Befehl.', 'Das ist eine Bitte, keine Befehl.', 'Befehl مذكر: kein Befehl.', 'genus'],
      ['prüfen', 'prüft · prüfte · hat geprüft', 'يتحقق · يفحص', 'Könnten Sie die Rechnung noch einmal prüfen?', 'Könnten Sie die Rechnung noch einmal geprüft?', 'بعد könnten مصدر: prüfen.', 'konjugation', 'prüfen'],
      ['der Gefallen', 'die Gefallen', 'المعروف · الخدمة', 'Könnten Sie mir einen Gefallen tun?', 'Könnten Sie mir einen Gefallen machen?', 'einen Gefallen tun، لا machen.', 'lexik-kollokation'],
      ['es wäre nett', '—', 'سيكون لطيفًا', 'Es wäre nett, wenn Sie früher kommen könnten.', 'Es wäre nett, wenn Sie könnten früher kommen.', 'في جملة wenn يقف könnten في الآخر: kommen könnten.', 'wortstellung', 'nett'],
      ['gegebenenfalls', '—', 'عند الاقتضاء', 'Gegebenenfalls melde ich mich noch einmal.', 'Gegebenenfalls ich melde mich noch einmal.', 'Gegebenenfalls في الموضع الأول ← melde ich.', 'wortstellung'],
      ['die Rücksprache', '—', 'التشاور', 'Nach Rücksprache mit dem Chef sage ich Bescheid.', 'Nach Rücksprache mit den Chef sage ich Bescheid.', 'mit + داتيف: mit dem Chef.', 'kasus'],
      ['Bescheid geben', 'gibt Bescheid · gab Bescheid · hat Bescheid gegeben', 'يُعلم · يُبلغ', 'Könnten Sie mir bis Freitag Bescheid geben?', 'Könnten Sie mich bis Freitag Bescheid geben?', 'Bescheid geben + داتيف: mir.', 'kasus', 'Bescheid'],
      ['ungern', '—', 'على مضض', 'Ich würde das nur ungern tun.', 'Ich würde das nur nicht gern tun.', 'ungern كلمة واحدة؛ لا nicht gern مع nur.', 'lexik-kollokation'],
      ['entgegenkommen', 'kommt entgegen · kam entgegen · ist entgegengekommen', 'يتساهل مع', 'Könnten Sie mir beim Preis entgegenkommen?', 'Könnten Sie mich beim Preis entgegenkommen?', 'entgegenkommen + داتيف: mir.', 'kasus', 'entgegenkommen'],
      ['der Umstand', 'die Umstände', 'الظرف', 'Wenn es keine Umstände macht, komme ich gern.', 'Wenn es keine Umstände macht, ich komme gern.', 'بعد الفرعية المتقدمة: komme ich.', 'wortstellung', 'Umstände'],
      ['sofern', '—', 'شريطة أن', 'Sofern Sie einverstanden sind, beginnen wir morgen.', 'Sofern Sie sind einverstanden, beginnen wir morgen.', 'sofern أداة فرعية: sind في الآخر.', 'wortstellung'],
      ['vorausgesetzt', '—', 'بشرط أن', 'Vorausgesetzt, es regnet nicht, grillen wir.', 'Vorausgesetzt, es regnet nicht, wir grillen.', 'بعد الشرط المتقدم: grillen wir.', 'wortstellung'],
      ['dürfte ich', '—', 'هل لي أن (مهذبًا جدًا)', 'Dürfte ich Sie kurz stören?', 'Dürfte ich Sie kurz zu stören?', 'بعد dürfte مصدر بلا zu.', 'konjugation', 'Dürfte'],
      ['sich bedanken für', 'bedankt sich · bedankte sich · hat sich bedankt', 'يشكر على', 'Ich bedanke mich für Ihre Hilfe.', 'Ich bedanke mich für Ihrer Hilfe.', 'für + النصب: Ihre Hilfe.', 'kasus', 'bedanke'],
      ['notfalls', '—', 'عند الضرورة', 'Notfalls komme ich auch am Samstag.', 'Im Notfalls komme ich auch am Samstag.', 'notfalls ظرف وحده؛ im Notfall بالاسم.', 'lexik-kollokation'],
      ['die Höflichkeit', '—', 'اللباقة', 'Höflichkeit kostet nichts.', 'Die Höflichkeit kosten nichts.', 'الفاعل مفرد ← kostet.', 'konjugation']
    ],
    tricks: [
      { trick: 'Könnten وWürden وHätten: ثلاثة مفاتيح للطلب', wie: 'Könnten Sie …? · Würden Sie …? · Hätten Sie …? — والمصدر في الآخر.', warum: 'الصيغة الشرطية تحوّل الأمر إلى رجاء؛ Können Sie مقبولة لكن الامتحان يكافئ Könnten.', anchor: 'Könnten Sie das bitte prüfen?' },
      { trick: 'الأمر مع bitte يبقى أمرًا', wie: 'Machen Sie das sofort! (أمر) · Könnten Sie das bitte bis Freitag machen? (رجاء)', warum: 'bitte لا تكفي لتخفيف صيغة الأمر في الرسائل؛ الفعل الشرطي وحده يفعل ذلك.', anchor: 'Das ist eine Bitte, kein Befehl.' },
      { trick: 'Es wäre nett, wenn … könnten: الشرط المهذب المزدوج', wie: 'Es wäre nett, wenn Sie früher kommen könnten. (wäre في الرأس، könnten في الذيل)', warum: 'صيغتان شرطيتان في جملة واحدة تعطيان أقصى درجات اللباقة، وهي صيغة B1 المفضلة في الرسائل.', anchor: 'Es wäre nett, wenn Sie früher kommen könnten.' }
    ],
    order: [
      { satz: 'Ich | würde | das nur ungern | tun.', ar: 'لن أفعل ذلك إلا على مضض.' },
      { satz: 'Gegebenenfalls | melde | ich mich noch einmal.', ar: 'عند الاقتضاء سأتواصل مرة أخرى.' }
    ],
    writing: {
      prompt: 'اكتب رسالة قصيرة إلى زميل ترجوه فيها تبديل مناوبة: افتح بطلب مهذب بـ Könnten Sie، اشرح السبب، اقترح بديلًا بـ Es wäre nett, wenn، اذكر شرطًا بـ sofern، واشكره مسبقًا.',
      promptDe: 'Könnten Sie … tauschen? · Leider … · Es wäre nett, wenn Sie … könnten. · Sofern das möglich ist, … · Ich bedanke mich im Voraus.',
      points: ['طلب بـ Könnten أو Würden', 'Es wäre nett, wenn … könnten', 'sofern بالفعل في الآخر', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'konjugation'
    }
  },

  'b1-u5-l3': {
    items: [
      ['der Vergleich', 'die Vergleiche', 'المقارنة', 'Der Vergleich zwischen Tunesien und Deutschland ist spannend.', 'Der Vergleich zwischen Tunesien oder Deutschland ist spannend.', 'zwischen … und، لا oder.', 'lexik-kollokation'],
      ['der Unterschied', 'die Unterschiede', 'الفرق', 'Es gibt einen großen Unterschied.', 'Es gibt eine große Unterschied.', 'Unterschied مذكر: einen großen Unterschied.', 'genus'],
      ['die Gemeinsamkeit', 'die Gemeinsamkeiten', 'القاسم المشترك', 'Eine Gemeinsamkeit ist das Familienleben.', 'Ein Gemeinsamkeit ist das Familienleben.', '-keit مؤنثة: eine Gemeinsamkeit.', 'genus'],
      ['gleich', '—', 'نفسه · متساوٍ', 'Nicht alles ist gleich.', 'Nicht alles ist gleiche.', 'بعد ist بلا نهاية: gleich.', 'deklination'],
      ['ähnlich', '—', 'مشابه', 'Das Essen ist ähnlich wie in Tunesien.', 'Das Essen ist ähnlich als in Tunesien.', 'التشابه بـ wie؛ als بعد المقارنة -er.', 'lexik-kollokation'],
      ['anders', '—', 'مختلف', 'In Deutschland ist das anders als bei uns.', 'In Deutschland ist das anders wie bei uns.', 'anders als، لا wie.', 'lexik-kollokation'],
      ['im Gegensatz zu', '—', 'على النقيض من', 'Im Gegensatz zu Tunis ist Berlin kalt.', 'Im Gegensatz zu Tunis Berlin ist kalt.', 'بعد العبارة المتقدمة: ist Berlin.', 'wortstellung', 'Gegensatz'],
      ['hingegen', '—', 'في المقابل', 'In Tunesien hingegen ist das Wetter mild.', 'In Tunesien hingegen das Wetter ist mild.', 'hingegen لا تحتل موضعًا: ist يبقى ثانيًا بعد الظرف.', 'wortstellung'],
      ['die Grenze', 'die Grenzen', 'الحدّ', 'Die Grenze des Vergleichs ist das Alter.', 'Die Grenze des Vergleich ist das Alter.', 'des Vergleichs: -s في الإضافة.', 'deklination'],
      ['sowohl … als auch', '—', 'كلٌّ من … و', 'Sowohl Tunesien als auch Deutschland haben Probleme.', 'Sowohl Tunesien und auch Deutschland haben Probleme.', 'sowohl … als auch، لا und auch.', 'lexik-kollokation', 'Sowohl'],
      ['weder … noch', '—', 'لا … ولا', 'Weder das Klima noch das Essen ist gleich.', 'Weder das Klima noch das Essen ist nicht gleich.', 'weder … noch تنفي وحدها؛ nicht زائدة.', 'lexik-kollokation', 'Weder'],
      ['je … desto', '—', 'كلما … كلما', 'Je älter man wird, desto schwerer ist der Vergleich.', 'Je älter man wird, desto schwerer der Vergleich ist.', 'بعد desto قلب: desto schwerer ist der Vergleich.', 'wortstellung', 'desto'],
      ['die Lebenshaltungskosten', 'nur Plural', 'تكاليف المعيشة', 'Die Lebenshaltungskosten sind in Deutschland höher.', 'Die Lebenshaltungskosten sind in Deutschland mehr hoch.', 'المقارنة بـ -er: höher.', 'deklination'],
      ['das Alter', '—', 'العمر', 'Das Alter spielt eine Rolle.', 'Die Alter spielt eine Rolle.', 'Alter محايد: das Alter.', 'genus'],
      ['eine Rolle spielen', 'spielt · spielte · hat gespielt', 'يلعب دورًا', 'Die Sprache spielt eine große Rolle.', 'Die Sprache macht eine große Rolle.', 'eine Rolle spielen، لا machen.', 'lexik-kollokation', 'spielt'],
      ['vergleichbar', '—', 'قابل للمقارنة', 'Die Preise sind nicht vergleichbar.', 'Die Preise sind nicht vergleichbare.', 'بعد sind بلا نهاية.', 'deklination'],
      ['die Hinsicht', 'die Hinsichten', 'الناحية', 'In dieser Hinsicht ist Tunesien besser.', 'In diese Hinsicht ist Tunesien besser.', 'in + داتيف: in dieser Hinsicht.', 'kasus'],
      ['überwiegen', 'überwiegt · überwog · hat überwogen', 'يغلب · يرجح', 'Die Gemeinsamkeiten überwiegen.', 'Die Gemeinsamkeiten wiegen über.', 'überwiegen غير منفصل.', 'wortstellung', 'überwiegen'],
      ['relativ', '—', 'نسبي', 'Teuer ist relativ.', 'Teuer ist relativ zu.', 'relativ وحدها كصفة؛ relativ zu يحتاج مكمّلًا.', 'präposition'],
      ['die Lebensweise', 'die Lebensweisen', 'نمط الحياة', 'Die Lebensweise ist anders.', 'Der Lebensweise ist anders.', 'Weise مؤنثة ← die Lebensweise.', 'genus']
    ],
    tricks: [
      { trick: 'wie للتشابه، als للفرق', wie: 'so groß wie · ähnlich wie · anders als · größer als.', warum: 'الفرنسية que تغطي الحالتين، فيكتب المتعلم als في كل مكان أو wie في كل مكان.', anchor: 'In Deutschland ist das anders als bei uns.' },
      { trick: 'قارن نقطة واحدة وسمِّ حدّها', wie: 'Im Vergleich zu Tunesien ist das anders. · Die Grenze ist das Alter.', warum: 'عشرة فروق بلا جملة لا تُقيَّم؛ نقطة واحدة بحدّ واضح تُظهر التفكير لا القائمة.', anchor: 'Die Grenze des Vergleichs ist das Alter.' },
      { trick: 'je … desto: الفعل مباشرة بعد desto والصفة', wie: 'Je älter man wird, desto schwerer ist der Vergleich.', warum: 'النصف الأول فرعية (الفعل آخرًا) والثاني رئيسية مقلوبة؛ من يساوي بينهما يخطئ في أحدهما حتمًا.', anchor: 'Je älter man wird, desto schwerer ist der Vergleich.' }
    ],
    order: [
      { satz: 'Im Gegensatz zu Tunis | ist | Berlin kalt.', ar: 'على النقيض من تونس، برلين باردة.' },
      { satz: 'In dieser Hinsicht | ist | Tunesien besser.', ar: 'من هذه الناحية تونس أفضل.' }
    ],
    writing: {
      prompt: 'قارن الحياة في تونس وألمانيا في خمس جمل: قاسم مشترك، فرق بـ im Gegensatz zu، جملة بـ sowohl … als auch أو weder … noch، نقطة واحدة بتفصيل، وحدّ المقارنة.',
      promptDe: 'Eine Gemeinsamkeit ist … · Im Gegensatz zu … · Sowohl … als auch … · In dieser Hinsicht … · Die Grenze des Vergleichs ist …',
      points: ['wie للتشابه وals للفرق', 'im Gegensatz zu بالفعل ثانيًا', 'زوج sowohl … als auch أو weder … noch', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'lexik-kollokation'
    }
  },

  'b1-u5-l4': {
    items: [
      ['das Problem', 'die Probleme', 'المشكلة', 'Das Problem ist die Frist.', 'Der Problem ist die Frist.', 'Problem محايد: das Problem.', 'genus'],
      ['die Schuld', '—', 'الذنب · اللوم', 'Das ist nicht meine Schuld.', 'Das ist nicht mein Schuld.', 'Schuld مؤنثة: meine Schuld.', 'genus'],
      ['der Fehler', 'die Fehler', 'الخطأ', 'Ich habe einen Fehler gemacht.', 'Ich habe einen Fehler getan.', 'einen Fehler machen، لا tun.', 'lexik-kollokation'],
      ['die Überstunden', 'nur Plural', 'الساعات الإضافية', 'Ich mache jede Woche Überstunden.', 'Ich mache jede Woche Überstunde.', 'Überstunden جمع في الاستعمال.', 'plural'],
      ['der Vorgesetzte', 'die Vorgesetzten · mein Vorgesetzter', 'الرئيس المباشر', 'Mein Vorgesetzter hat das genehmigt.', 'Mein Vorgesetzte hat das genehmigt.', 'بعد mein للمذكر: Vorgesetzter (صفة مسمّاة).', 'deklination', 'Vorgesetzter'],
      ['der Vertrag', 'die Verträge', 'العقد', 'Im Vertrag steht etwas anderes.', 'In Vertrag steht etwas anderes.', 'im Vertrag بالأداة.', 'präposition'],
      ['die Arbeitszeit', 'die Arbeitszeiten', 'وقت العمل', 'Die Arbeitszeit beträgt 40 Stunden.', 'Die Arbeitszeit betragen 40 Stunden.', 'مفرد ← beträgt.', 'konjugation'],
      ['kündigen', 'kündigt · kündigte · hat gekündigt', 'يستقيل · يفسخ العقد', 'Ich habe zum 31. März gekündigt.', 'Ich habe zum 31. März gekündet.', 'Partizip II: gekündigt.', 'konjugation', 'gekündigt'],
      ['die Kündigung', 'die Kündigungen', 'الاستقالة · إنهاء العقد', 'Die Kündigung muss schriftlich sein.', 'Die Kündigung muss schriftlich zu sein.', 'بعد muss مصدر بلا zu.', 'konjugation'],
      ['der Betriebsrat', 'die Betriebsräte', 'مجلس العمال', 'Der Betriebsrat hilft bei Konflikten.', 'Der Betriebsrat hilft mit Konflikten.', 'helfen bei + داتيف.', 'präposition'],
      ['der Konflikt', 'die Konflikte', 'النزاع', 'Wir haben einen Konflikt im Team.', 'Wir haben einen Konflikt in Team.', 'im Team بالأداة.', 'präposition'],
      ['ansprechen', 'spricht an · sprach an · hat angesprochen', 'يطرح موضوعًا', 'Ich spreche das Problem direkt an.', 'Ich anspreche das Problem direkt.', 'ansprechen منفصل: spreche … an.', 'wortstellung', 'spreche'],
      ['die Vereinbarung', 'die Vereinbarungen', 'الاتفاق', 'Wir haben eine Vereinbarung getroffen.', 'Wir haben eine Vereinbarung gemacht.', 'eine Vereinbarung treffen، لا machen.', 'lexik-kollokation'],
      ['der Abgabetermin', 'die Abgabetermine', 'موعد التسليم', 'Der Abgabetermin ist zu knapp.', 'Die Abgabetermin ist zu knapp.', 'Termin مذكر ← der Abgabetermin.', 'genus'],
      ['verantwortlich', '—', 'مسؤول', 'Ich bin für das Projekt verantwortlich.', 'Ich bin verantwortlich von dem Projekt.', 'verantwortlich für + النصب.', 'präposition'],
      ['der Druck', '—', 'الضغط', 'Der Druck im Team ist hoch.', 'Der Pression im Team ist hoch.', 'pression الفرنسية؛ der Druck.', 'falser-freund'],
      ['die Gehaltserhöhung', 'die Gehaltserhöhungen', 'زيادة الراتب', 'Ich bitte um eine Gehaltserhöhung.', 'Ich bitte für eine Gehaltserhöhung.', 'bitten um، لا für.', 'präposition'],
      ['lösen', 'löst · löste · hat gelöst', 'يحلّ', 'Wir müssen das Problem gemeinsam lösen.', 'Wir müssen das Problem gemeinsam auflösen.', 'ein Problem lösen؛ auflösen يعني يُذيب أو يفكّك.', 'lexik-kollokation', 'lösen'],
      ['der Ausweg', 'die Auswege', 'المخرج', 'Es gibt immer einen Ausweg.', 'Es gibt immer eine Ausweg.', 'Ausweg مذكر (der Weg).', 'genus'],
      ['sich krankmelden', 'meldet sich krank · meldete sich krank · hat sich krankgemeldet', 'يُبلغ عن مرضه', 'Ich habe mich heute krankgemeldet.', 'Ich habe heute krankgemeldet.', 'sich krankmelden انعكاسي: habe mich krankgemeldet.', 'deklination', 'krankgemeldet']
    ],
    tricks: [
      { trick: 'المشكلة أولًا، ثم الاقتراح، ثم البديل', wie: 'Das Problem ist die Frist. · Ich schlage vor, dass wir warten. · Alternativ könnten wir …', warum: 'حل بلا تسمية المشكلة يُفهم هروبًا، وثلاث أفكار بلا اختيار تُفهم ترددًا.', anchor: 'Das Problem ist die Frist.' },
      { trick: 'Fehler machen وVereinbarung treffen: لكل اسم فعله', wie: 'einen Fehler machen · eine Vereinbarung treffen · Überstunden machen · ein Problem lösen.', warum: 'الخلط بين machen وtun وtreffen أول ما يسمعه الرئيس في حوار المشكلة.', anchor: 'Ich habe einen Fehler gemacht.' },
      { trick: 'تحمّل المسؤولية بلا نفي الذنب', wie: 'Das war mein Fehler, ich kümmere mich darum. — لا Das ist nicht meine Schuld.', warum: 'نفي الذنب يُنهي الحوار، وتحمّل المسؤولية يفتح الحل؛ الامتحان يقيّم الثاني.', anchor: 'Das ist nicht meine Schuld.' }
    ],
    order: [
      { satz: 'Ich | spreche | das Problem direkt | an.', ar: 'أطرح المشكلة مباشرة.' },
      { satz: 'Wir | müssen | das Problem gemeinsam | lösen.', ar: 'علينا حلّ المشكلة معًا.' }
    ],
    writing: {
      prompt: 'موعد تسليم مشروعك قريب جدًا والفريق يعمل ساعات إضافية. اكتب خمس جمل لرئيسك: المشكلة، سببها بلا إلقاء لوم، اقتراح بـ Ich schlage vor, dass، بديل، وجملة تتحمّل فيها المسؤولية.',
      promptDe: 'Das Problem ist … · Der Grund ist … · Ich schlage vor, dass … · Alternativ könnten wir … · Ich übernehme die Verantwortung für …',
      points: ['المشكلة في الجملة الأولى', 'Ich schlage vor, dass بالفعل في الآخر', 'verantwortlich für أو Verantwortung übernehmen', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'lexik-kollokation'
    }
  }
};

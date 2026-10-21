function U(id, ar, de, goalDe, goalAr, facts, lex, model, say, hwDe, hwAr, options) {
  return Object.assign({
    id, level: 'B2', ar, de, fam: 'pruefstrategie', goalDe, goalAr, facts, lex, model, say, hwDe, hwAr,
    kind: 'workshop'
  }, options || {});
}
module.exports = [
  U('b2-w01', 'تحليل نص: الوصف والتأويل', 'Textanalyse: beschreiben und deuten',
    'Am Ende analysierst du einen Text mit Beschreibung, Deutung und Beleg — in fünf Sätzen',
    'في النهاية تحلّل نصًّا بوصف وتأويل ودليل في خمس جمل.',
    [
      ['Die Analyse des Romans beginnt mit dem Aufbau.', 'يفتتح التحليل بإضافة وذكر البنية', 'الاسم الثاني في الإضافة Genitiv: des Romans لا dem Roman', 'Die Analyse dem Roman beginnt mit dem Aufbau.', 'الإضافة: des Romans'],
      ['Die Beschreibung bleibt neutral und wertet nicht.', 'يصف بلا تقييم', 'النفي nicht جزء من المعنى: الوصف المحايد لا يقيّم', 'Die Beschreibung bleibt neutral und wertet.', 'nicht لازمة'],
      ['Die Deutung stützt sich auf eine Textstelle.', 'يسند التأويل إلى موضع نصي واحد', 'auf مع النصب والمؤنث eine: موضع محدد لا النص كله', 'Die Deutung stützt sich auf ein Textstelle.', 'eine Textstelle'],
      ['Diese Stelle belegt die Behauptung.', 'يقدّم الموضع دليلًا على دعوى', 'belegen يأخذ مفعولًا مباشرًا بلا حرف جر', 'Diese Stelle belegt für die Behauptung.', 'belegt بلا حرف']
    ],
    [
      ['Die Analyse des Romans beginnt mit dem Aufbau.', 'تحليل الرواية يبدأ ببنيتها', 'Die Analyse dem Roman beginnt mit dem Aufbau.', 'الإضافة Genitiv: des Romans.', 'beginnt'],
      ['Die Beschreibung bleibt neutral und wertet nicht.', 'الوصف يبقى محايدًا ولا يقيّم', 'Die Beschreibung bleibt neutral und wertet.', 'النفي لا يُحذف: nicht.', 'nicht'],
      ['Die Deutung stützt sich auf eine Textstelle.', 'التأويل يستند إلى موضع نصي', 'Die Deutung stützt sich auf ein Textstelle.', 'المؤنث في النصب: eine.', 'Textstelle'],
      ['Diese Stelle belegt die Behauptung.', 'هذا الموضع يثبت الدعوى', 'Diese Stelle belegt für die Behauptung.', 'belegen بلا حرف جر.', 'belegt']
    ],
    'Die Analyse des Romans beginnt mit dem Aufbau. Die Beschreibung bleibt neutral und wertet nicht.',
    'Die Einleitung nennt die Gattung und die Epoche.',
    'Wiederhole morgen die fünf Sätze: Die Analyse des Romans beginnt mit dem Aufbau. Die Beschreibung bleibt neutral und wertet nicht. Die Deutung stützt sich auf eine Textstelle. Diese Stelle belegt die Behauptung. Die Einleitung nennt die Gattung und die Epoche.',
    'غدًا أعد جمل تحليل النص الخمس ولاحظ الإضافة والدليل النصي.',
    {
      factFamilies: ['kasus', 'wortstellung', 'genus', 'kasus'],
      imitateNearMiss: 'beginnen',
      transformHint: 'في جملة الختام مقدمة تسمّي نوع النص وعصره: Die Einleitung nennt die Gattung und die Epoche — بلا ضمير زائد في الآخر.',
      orderSentence: 'Die Analyse des Romans beginnt mit dem Aufbau.',
      checkOrderSentence: 'Die Deutung stützt sich auf eine Textstelle.',
      orderAr: 'رتّب جملة التحليل: الفاعل Die Analyse des Romans كتلة واحدة أولًا والفعل beginnt بعده.',
      orderPromptAr: 'رتّب الجملة واضعًا كتلة الفاعل أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل الممتد حتى Romans يبقى معًا في المقدمة.', 'الجار والمجرور mit dem Aufbau. في الختام.'],
      writing: {
        zeigt: 'Textanalyse in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: تحليل يبدأ ببنية النص بإضافة Genitiv، ووصف محايد بلا تقييم، وتأويل يستند إلى موضع نصي، وموضع يثبت دعوى، ومقدمة تسمّي النوع والعصر.',
        hinweise: ['الإضافة بعد اسم التحليل: des Romans.', 'كل تأويل يحتاج موضعًا نصيًا مذكورًا.'],
        prompt: 'اكتب جمل تحليل النص الخمس المستهدفة من الذاكرة.',
        promptDe: 'Die Analyse des Romans beginnt mit dem Aufbau. · Die Beschreibung bleibt neutral und wertet nicht. · Die Deutung stützt sich auf eine Textstelle. · Diese Stelle belegt die Behauptung. · Die Einleitung nennt die Gattung und die Epoche.',
        points: ['Die Analyse des Romans beginnt mit dem Aufbau.', 'Die Beschreibung bleibt neutral und wertet nicht.', 'Die Deutung stützt sich auf eine Textstelle.', 'Diese Stelle belegt die Behauptung.', 'Die Einleitung nennt die Gattung und die Epoche.'],
        minWords: 35,
        frage: 'اكتب جمل تحليل النص الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Analyse des Romans beginnt mit dem Aufbau. Die Beschreibung bleibt neutral und wertet nicht. Die Deutung stützt sich auf eine Textstelle. Diese Stelle belegt die Behauptung. Die Einleitung nennt die Gattung und die Epoche.',
      summaryDe: 'Die Analyse des Romans beginnt mit dem Aufbau. Die Beschreibung bleibt neutral und wertet nicht. Die Deutung stützt sich auf eine Textstelle. Diese Stelle belegt die Behauptung. Die Einleitung nennt die Gattung und die Epoche.',
      summaryAr: 'تحليل النص يُروى بإضافة دقيقة ووصف محايد وتأويل مسنود إلى موضع.',
      summaryRecap: 'وصف ثم تأويل بدليل',
      hwHintDe: 'Zuerst beschreibe ich den Abschnitt, dann deute ich die Stelle. Die Quelle nennt keine Ursache, also erfinde ich keine Ursache. Am Ende trennst du Beschreibung und Deutung. Die Stelle steht im zweiten Absatz. Der ganze Text ist kein Beleg für eine Deutung. Analysiere morgen einen Absatz in zwei Sätzen.'
    }),

  U('b2-w02', 'ورشة كتابة: الأطروحة والدليل', 'Erörterung: These und Beleg',
    'Am Ende schreibst du eine Erörterung mit These, Beleg und Abwägung — in fünf Sätzen',
    'في النهاية تكتب مقالًا حجاجيًا بأطروحة ودليل وموازنة في خمس جمل.',
    [
      ['Die These ist die Kernaussage der Einleitung.', 'يفتتح المقال بأطروحة واحدة واضحة', 'الاسم الثاني في الإضافة Genitiv مؤنث: der Einleitung لا die Einleitung', 'Die These ist die Kernaussage die Einleitung.', 'الإضافة: der Einleitung'],
      ['Ohne Beleg bleibt die Behauptung leer.', 'يفرّق بين الادّعاء والدليل', 'الادّعاء بلا دليل يبقى فارغًا، وohne مع النصب: einen Beleg عند وجود أداة', 'Ohne ein Beleg bleibt die Behauptung leer.', 'المذكر نصب: einen'],
      ['Man muss die Vor- und Nachteile abwägen.', 'يوازن بين الوجهين قبل الحكم', 'الفعل abwägen منفصل في أصله، وبعد muss يبقى مصدرًا كاملًا في الختام', 'Man muss die Vor- und Nachteile wägen.', 'المصدر الكامل: abwägen'],
      ['Dieser Autor widerspricht der Mehrheit.', 'يعرض الرأي المخالف بدقة', 'widersprechen يأخذ Dativ: der Mehrheit لا die Mehrheit', 'Dieser Autor widerspricht die Mehrheit.', 'الداتيف: der Mehrheit']
    ],
    [
      ['Die These ist die Kernaussage der Einleitung.', 'الأطروحة هي فكرة المقدمة الأساسية', 'Die These ist die Kernaussage die Einleitung.', 'الإضافة Genitiv: der Einleitung.', 'Kernaussage'],
      ['Ohne Beleg bleibt die Behauptung leer.', 'بلا دليل يبقى الادّعاء فارغًا', 'Ohne ein Beleg bleibt die Behauptung leer.', 'المذكر في النصب بعد ohne: einen.', 'Beleg'],
      ['Man muss die Vor- und Nachteile abwägen.', 'يجب أن يوازن المرء بين المزايا والعيوب', 'Man muss die Vor- und Nachteile wägen.', 'الفعل المنفصل يبقى كاملًا بعد muss.', 'abwägen'],
      ['Dieser Autor widerspricht der Mehrheit.', 'هذا المؤلف يعارض الأكثرية', 'Dieser Autor widerspricht die Mehrheit.', 'widersprechen مع الداتيف.', 'widerspricht']
    ],
    'Die These ist die Kernaussage der Einleitung. Ohne Beleg bleibt die Behauptung leer.',
    'Die Argumentation muss schlüssig sein.',
    'Wiederhole morgen die fünf Sätze: Die These ist die Kernaussage der Einleitung. Ohne Beleg bleibt die Behauptung leer. Man muss die Vor- und Nachteile abwägen. Dieser Autor widerspricht der Mehrheit. Die Argumentation muss schlüssig sein. Die Entkräftung des Einwands gelingt mit einer Statistik. Die Verknüpfung durch Bindewort und Satzverbindung hält den Text zusammen. Objektivität und Subjektivität trennt man an der Wertung. Die Überarbeitung prüft die Fußnote und das Literaturverzeichnis. Der Belegtext nennt Quelle, Studie und Zitat genau. Differenzierung schlägt Pauschalisierung. Zwar nennt der Einwand eine Bedingung, doch die Widerlegung trägt. Die Argumentation bleibt sachlich, die Wertung bleibt sichtbar. Eine Erörterung braucht Kontext, These und Beleg. Schreibe morgen eine Erörterung mit Einleitung und Hauptteil.',
    'غدًا أعد جمل المقال الحجاجي الخمس ولاحظ الدليل والموازنة.',
    {
      factFamilies: ['kasus', 'kasus', 'wortstellung', 'kasus'],
      imitateNearMiss: 'Kernaussagen',
      transformHint: 'في جملة الختام حكم على البنية كلها: Die Argumentation muss schlüssig sein — الصفة بعد sein بلا نهاية.',
      orderSentence: 'Man muss die Vor- und Nachteile abwägen.',
      checkOrderSentence: 'Die These ist die Kernaussage der Einleitung.',
      orderAr: 'رتّب جملة الموازنة: الفاعل Man أولًا والفعل muss ثانيًا والمصدر abwägen أخيرًا.',
      orderPromptAr: 'رتّب الجملة واضعًا الفاعل أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Man في الموضع الأول.', 'المصدر الكامل abwägen. يغلق الجملة بعد muss.'],
      writing: {
        zeigt: 'Erörterung in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: أطروحة في المقدمة بإضافة Genitiv، وادّعاء فارغ بلا دليل، وموازنة بين المزايا والعيوب، ومعارضة بالداتيف، وحكم ختامي بصفة بلا نهاية.',
        hinweise: ['كل ادّعاء يحتاج دليلًا، لا رأيًا ثانيًا.', 'وازن الوجهين قبل أن تحكم.'],
        prompt: 'اكتب جمل المقال الحجاجي الخمس المستهدفة من الذاكرة.',
        promptDe: 'Die These ist die Kernaussage der Einleitung. · Ohne Beleg bleibt die Behauptung leer. · Man muss die Vor- und Nachteile abwägen. · Dieser Autor widerspricht der Mehrheit. · Die Argumentation muss schlüssig sein.',
        points: ['Die These ist die Kernaussage der Einleitung.', 'Ohne Beleg bleibt die Behauptung leer.', 'Man muss die Vor- und Nachteile abwägen.', 'Dieser Autor widerspricht der Mehrheit.', 'Die Argumentation muss schlüssig sein.'],
        minWords: 30,
        frage: 'اكتب جمل المقال الحجاجي الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die These ist die Kernaussage der Einleitung. Ohne Beleg bleibt die Behauptung leer. Man muss die Vor- und Nachteile abwägen. Dieser Autor widerspricht der Mehrheit. Die Argumentation muss schlüssig sein.',
      summaryDe: 'Die These ist die Kernaussage der Einleitung. Ohne Beleg bleibt die Behauptung leer. Man muss die Vor- und Nachteile abwägen. Dieser Autor widerspricht der Mehrheit. Die Argumentation muss schlüssig sein.',
      summaryAr: 'المقال الحجاجي يُروى بأطروحة معلنة ودليل لكل ادّعاء وموازنة قبل الحكم.',
      summaryRecap: 'أطروحة ودليل وموازنة',
    }),

  U('b2-w03', 'نقاش: الإقرار والموافقة المشروطة', 'Diskussion: einräumen und bedingt zustimmen',
    'Am Ende räumst du einen Punkt ein, stimmst bedingt zu und bleibst sachlich — in fünf Sätzen',
    'في النهاية تقرّ بنقطة وتوافق مشروطًا وتبقى موضوعيًا في خمس جمل.',
    [
      ['Ich räume Ihren Punkt ein und bleibe sachlich.', 'يقرّ بنقطة للطرف الآخر ويبقى موضوعيًا', 'einräumen فعل منفصل: البادئة ein في آخر الجملة، والمفعول Ihren Punkt في النصب', 'Ich einräume Ihren Punkt und bleibe sachlich.', 'ein في الختام'],
      ['Dem kann ich nur bedingt zustimmen.', 'يوافق موافقة مشروطة لا مطلقة', 'zustimmen يأخذ Dativ: Dem لا Das، والفعل kann في الموضع الثاني', 'Das kann ich nur bedingt zustimmen.', 'الداتيف: Dem'],
      ['In der Sache bleiben wir uneinig.', 'يبقى الخلاف في الموضوع لا في الشخص', 'المستوى الثابت in + Dativ: in der Sache لا in die Sache', 'In die Sache bleiben wir uneinig.', 'in der Sache'],
      ['Die Moderation muss auf Redezeit und Gesprächsführung achten.', 'يراعي مدير النقاش زمن الكلام وسير الحوار', 'achten يقترن بـauf لا für، والمصدر achten يغلق الجملة بعد muss', 'Die Moderation muss für Redezeit und Gesprächsführung achten.', 'achten على: auf']
    ],
    [
      ['Ich räume Ihren Punkt ein und bleibe sachlich.', 'أقرّ بنقطتك وأبقى موضوعيًا', 'Ich einräume Ihren Punkt und bleibe sachlich.', 'einräumen منفصل: ein في الختام.', 'Punkt'],
      ['Dem kann ich nur bedingt zustimmen.', 'لا أستطيع الموافقة على هذا إلا مشروطًا', 'Das kann ich nur bedingt zustimmen.', 'zustimmen مع الداتيف: Dem.', 'bedingt'],
      ['In der Sache bleiben wir uneinig.', 'في جوهر الموضوع نبقى مختلفين', 'In die Sache bleiben wir uneinig.', 'المستوى الثابت: in + داتيف.', 'Sache'],
      ['Die Moderation muss auf Redezeit und Gesprächsführung achten.', 'يجب أن تراعي الإدارة زمن الكلام وسير الحوار', 'Die Moderation muss für Redezeit und Gesprächsführung achten.', 'achten يقترن بـauf.', 'achten']
    ],
    'Ich räume Ihren Punkt ein und bleibe sachlich. Dem kann ich nur bedingt zustimmen.',
    'Lassen Sie mich bitte ausreden.',
    'Wiederhole morgen die fünf Sätze: Ich räume Ihren Punkt ein und bleibe sachlich. Dem kann ich nur bedingt zustimmen. In der Sache bleiben wir uneinig. Die Moderation muss auf Redezeit und Gesprächsführung achten. Lassen Sie mich bitte ausreden. Ich unterbreche niemanden mitten im Satz. Die Steigerung heißt nicht «scharfer», sondern «schärfer».',
    'غدًا أعد جمل النقاش الخمس ولاحظ الداتيف بعد zustimmen وحرف auf مع achten.',
    {
      factFamilies: ['wortstellung', 'kasus', 'präposition', 'präposition'],
      imitateNearMiss: 'Punktes',
      transformHint: 'في جملة الختام طلب مهذّب لإكمال الكلام: Lassen Sie mich bitte ausreden — الشخص بعد lassen في النصب: mich لا mir.',
      orderSentence: 'Die Moderation muss auf Redezeit und Gesprächsführung achten.',
      checkOrderSentence: 'Dem kann ich nur bedingt zustimmen.',
      orderAr: 'رتّب جملة الإدارة: الفاعل Die Moderation أولًا والفعل muss ثانيًا والمصدر achten أخيرًا.',
      orderPromptAr: 'رتّب الجملة واضعًا الفاعل أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Die Moderation في الموضع الأول.', 'المصدر achten يغلق الجملة بعد muss.'],
      writing: {
        zeigt: 'Diskussion in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: إقرار بنقطة بفعل منفصل، وموافقة مشروطة بالداتيف، وبقاء على مستوى الموضوع، وإدارة تراعي زمن الكلام، وطلب إكمال الكلام بالنصب.',
        hinweise: ['zustimmen مع الداتيف دائمًا: Dem stimmst du zu.', 'achten على الشيء: auf + نصب، لا für.'],
        prompt: 'اكتب جمل النقاش الخمس المستهدفة من الذاكرة.',
        promptDe: 'Ich räume Ihren Punkt ein und bleibe sachlich. · Dem kann ich nur bedingt zustimmen. · In der Sache bleiben wir uneinig. · Die Moderation muss auf Redezeit und Gesprächsführung achten. · Lassen Sie mich bitte ausreden.',
        points: ['Ich räume Ihren Punkt ein und bleibe sachlich.', 'Dem kann ich nur bedingt zustimmen.', 'In der Sache bleiben wir uneinig.', 'Die Moderation muss auf Redezeit und Gesprächsführung achten.', 'Lassen Sie mich bitte ausreden.'],
        minWords: 33,
        frage: 'اكتب جمل النقاش الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Ich räume Ihren Punkt ein und bleibe sachlich. Dem kann ich nur bedingt zustimmen. In der Sache bleiben wir uneinig. Die Moderation muss auf Redezeit und Gesprächsführung achten. Lassen Sie mich bitte ausreden.',
      summaryDe: 'Ich räume Ihren Punkt ein und bleibe sachlich. Dem kann ich nur bedingt zustimmen. In der Sache bleiben wir uneinig. Die Moderation muss auf Redezeit und Gesprächsführung achten. Lassen Sie mich bitte ausreden.',
      summaryAr: 'النقاش الناضج يُدار بإقرار صريح وموافقة مشروطة وبقاء على مستوى الموضوع.',
      summaryRecap: 'إقرار وموافقة وموضوعية',
    }),

  U('b2-w04', 'سماع محاضرة: الإنصات والتدوين', 'Vortrag: zuhören und mitschreiben',
    'Am Ende hörst du einen Vortrag mit Aufgabe, Stichwörtern und Grenze — in fünf Sätzen',
    'في النهاية تسمع محاضرة بمهمة واضحة وكلمات مدوّنة وحدٍّ لما لم يُقل في خمس جمل.',
    [
      ['Ich muss die Aufgabe vor dem Hören lesen.', 'يقرأ المطلوب قبل أن يبدأ الصوت', 'vor مع الداتيف هنا: vor dem Hören لا vor das Hören، والمصدر lesen يغلق الجملة بعد muss', 'Ich muss die Aufgabe vor das Hören lesen.', 'vor dem Hören'],
      ['Ich schreibe mit, ohne jedem Wort zu folgen.', 'يدوّن الهيكل ولا يطارد كل كلمة', 'mitschreiben فعل منفصل: schreibe في الموضع الثاني والبادئة mit في الختام', 'Ich mitschreibe, ohne jedem Wort zu folgen.', 'schreibe ... mit'],
      ['Was fehlt, ergänze ich nicht.', 'يعلّم النقص ولا يخترعه', 'الجملة المقدمة تحجز الموضع الأول، فيأتي الفعل ergänze قبل الفاعل ich', 'Was fehlt, ich ergänze nicht.', 'ergänze ich'],
      ['Dem Vortrag kann ich gut folgen.', 'يتابع المحاضرة بلا تعب', 'folgen يأخذ Dativ: Dem Vortrag لا Den Vortrag، والفعل kann في الموضع الثاني', 'Den Vortrag kann ich gut folgen.', 'الداتيف: Dem']
    ],
    [
      ['Ich muss die Aufgabe vor dem Hören lesen.', 'يجب أن أقرأ المطلوب قبل السماع', 'Ich muss die Aufgabe vor das Hören lesen.', 'vor مع الداتيف: vor dem Hören.', 'Aufgabe'],
      ['Ich schreibe mit, ohne jedem Wort zu folgen.', 'أكتب مع المحاضرة دون ملاحقة كل كلمة', 'Ich mitschreibe, ohne jedem Wort zu folgen.', 'mitschreiben منفصل: schreibe ... mit.', 'mit'],
      ['Was fehlt, ergänze ich nicht.', 'ما ينقص لا أكمّله من عندي', 'Was fehlt, ich ergänze nicht.', 'بعد الجملة المقدمة: ergänze ich.', 'ergänze'],
      ['Dem Vortrag kann ich gut folgen.', 'أستطيع متابعة المحاضرة جيدًا', 'Den Vortrag kann ich gut folgen.', 'folgen مع الداتيف: Dem Vortrag.', 'folgen']
    ],
    'Ich muss die Aufgabe vor dem Hören lesen. Ich schreibe mit, ohne jedem Wort zu folgen.',
    'Nach dem Hören prüfe ich die Frage.',
    'Wiederhole morgen die fünf Sätze: Ich muss die Aufgabe vor dem Hören lesen. Ich schreibe mit, ohne jedem Wort zu folgen. Was fehlt, ergänze ich nicht. Dem Vortrag kann ich gut folgen. Nach dem Hören prüfe ich die Frage.',
    'غدًا أعد جمل المحاضرة الخمس ولاحظ الداتيف بعد folgen والفعل المنفصل mitschreiben.',
    {
      factFamilies: ['kasus', 'wortstellung', 'wortstellung', 'kasus'],
      imitateNearMiss: 'Aufgaben',
      transformHint: 'في جملة الختام راجع على السؤال لا على الإحساس: Nach dem Hören prüfe ich die Frage — بعد الظرف الفعل قبل الفاعل.',
      orderSentence: 'Ich muss die Aufgabe vor dem Hören lesen.',
      checkOrderSentence: 'Dem Vortrag kann ich gut folgen.',
      orderAr: 'رتّب جملة البداية: الفاعل Ich أولًا والفعل muss ثانيًا والمصدر lesen أخيرًا.',
      orderPromptAr: 'رتّب الجملة واضعًا الفاعل أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Ich في الموضع الأول.', 'المصدر lesen يغلق الجملة بعد muss.'],
      writing: {
        zeigt: 'Vortrag in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: مهمة تُقرأ قبل السماع بالداتيف بعد vor، وتدوين بفعل منفصل، ونقص لا يُخترع، ومتابعة بالداتيف بعد folgen، ومراجعة بعد السماع بانعكاس صحيح.',
        hinweise: ['folgen مع الداتيف دائمًا: Dem Vortrag folgst du.', 'ما لم تسمعه لا تكتبه: Was fehlt, ergänze ich nicht.'],
        prompt: 'اكتب جمل المحاضرة الخمس المستهدفة من الذاكرة.',
        promptDe: 'Ich muss die Aufgabe vor dem Hören lesen. · Ich schreibe mit, ohne jedem Wort zu folgen. · Was fehlt, ergänze ich nicht. · Dem Vortrag kann ich gut folgen. · Nach dem Hören prüfe ich die Frage.',
        points: ['Ich muss die Aufgabe vor dem Hören lesen.', 'Ich schreibe mit, ohne jedem Wort zu folgen.', 'Was fehlt, ergänze ich nicht.', 'Dem Vortrag kann ich gut folgen.', 'Nach dem Hören prüfe ich die Frage.'],
        minWords: 34,
        frage: 'اكتب جمل المحاضرة الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Ich muss die Aufgabe vor dem Hören lesen. Ich schreibe mit, ohne jedem Wort zu folgen. Was fehlt, ergänze ich nicht. Dem Vortrag kann ich gut folgen. Nach dem Hören prüfe ich die Frage.',
      summaryDe: 'Ich muss die Aufgabe vor dem Hören lesen. Ich schreibe mit, ohne jedem Wort zu folgen. Was fehlt, ergänze ich nicht. Dem Vortrag kann ich gut folgen. Nach dem Hören prüfe ich die Frage.',
      summaryAr: 'المحاضرة تُسمع بمهمة قبل الصوت وتدوين للهيكل وحدٍّ صريح لما لم يُقل.',
      summaryRecap: 'مهمة وتدوين وحدّ',
    }),

  U('b2-w05', 'تقنية القراءة: المطلوب أولًا وتقسيم الوقت', 'Lesetechnik: Aufgabe zuerst, Zeit teilen',
    'Am Ende liest du die Aufgabe zuerst und teilst die Prüfungszeit — in fünf Sätzen',
    'في النهاية تقرأ المطلوب أولًا وتقسّم وقت الامتحان في خمس جمل.',
    [
      ['Zuerst muss ich die Aufgabe genau lesen.', 'يبدأ بالمطلوب قبل النص', 'بعد Zuerst المقدمة الفعل muss في الموضع الثاني ثم الفاعل ich، والمصدر lesen في الختام', 'Zuerst ich muss die Aufgabe genau lesen.', 'muss قبل ich'],
      ['Ich markiere höchstens fünf Wörter am Rand.', 'يعلّم القليل فقط ليُعاد قراءته', 'markieren يأخذ مفعولًا مباشرًا بلا حرف جر: fünf Wörter markieren', 'Ich markiere auf höchstens fünf Wörter am Rand.', 'بلا auf'],
      ['Die Aufgabenstellung ist kürzer als der Text.', 'يقارن حجم المطلوب بالنص', 'بعد صفة المقارنة الأداة als لا wie: kürzer als', 'Die Aufgabenstellung ist kürzer wie der Text.', 'als لا wie'],
      ['Die Einteilung der Zeit rettet den letzten Absatz.', 'يحمي الفقرة الأخيرة بتقسيم الوقت', 'الإضافة Genitiv مؤنث: der Zeit لا die Zeit', 'Die Einteilung die Zeit rettet den letzten Absatz.', 'der Zeit']
    ],
    [
      ['Zuerst muss ich die Aufgabe genau lesen.', 'يجب أولًا أن أقرأ المطلوب بدقة', 'Zuerst ich muss die Aufgabe genau lesen.', 'الفعل ثانٍ بعد الظرف: muss ich.', 'Aufgabe'],
      ['Ich markiere höchstens fünf Wörter am Rand.', 'أعلّم خمس كلمات كحد أقصى على الهامش', 'Ich markiere auf höchstens fünf Wörter am Rand.', 'markieren بلا حرف جر.', 'Wörter'],
      ['Die Aufgabenstellung ist kürzer als der Text.', 'نص المطلوب أقصر من النص', 'Die Aufgabenstellung ist kürzer wie der Text.', 'في المقارنة: als.', 'als'],
      ['Die Einteilung der Zeit rettet den letzten Absatz.', 'تقسيم الوقت ينقذ الفقرة الأخيرة', 'Die Einteilung die Zeit rettet den letzten Absatz.', 'الإضافة: der Zeit.', 'Einteilung']
    ],
    'Zuerst muss ich die Aufgabe genau lesen. Ich markiere höchstens fünf Wörter am Rand.',
    'Ein Rückschluss ohne Beleg ist geraten.',
    'Wiederhole morgen die fünf Sätze: Zuerst muss ich die Aufgabe genau lesen. Ich markiere höchstens fünf Wörter am Rand. Die Aufgabenstellung ist kürzer als der Text. Die Einteilung der Zeit rettet den letzten Absatz. Ein Rückschluss ohne Beleg ist geraten. Ich übersetze nicht Wort für Wort aus dem Arabischen.',
    'غدًا أعد جمل تقنية القراءة الخمس ولاحظ als في المقارنة وإضافة der Zeit.',
    {
      factFamilies: ['wortstellung', 'kasus', 'lexik-kollokation', 'kasus'],
      imitateNearMiss: 'Aufgaben',
      transformHint: 'في جملة الختام لا تخمين بلا موضع دليل: Ein Rückschluss ohne Beleg ist geraten — بلا أداة بعد ohne.',
      orderSentence: 'Zuerst muss ich die Aufgabe genau lesen.',
      checkOrderSentence: 'Die Aufgabenstellung ist kürzer als der Text.',
      orderAr: 'رتّب جملة البداية: الظرف Zuerst أولًا والفعل muss ثانيًا والمصدر lesen أخيرًا.',
      orderPromptAr: 'رتّب الجملة واضعًا الظرف أولًا والفعل في الموضع الثاني.',
      orderHints: ['الظرف Zuerst في الموضع الأول.', 'المصدر lesen يغلق الجملة بعد muss.'],
      writing: {
        zeigt: 'Lesetechnik in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: بداية بالمطلوب بعد ظرف مقدّم، وتعليم مباشر بلا حرف جر، ومقارنة بـals، وتقسيم وقت بإضافة Genitiv، واستنتاج لا يُخترع بلا دليل.',
        hinweise: ['المقارنة دائمًا بـals: kürzer als der Text.', 'المذكر بعد ohne إما بلا أداة أو einen: ohne Beleg / ohne einen Beleg.'],
        prompt: 'اكتب جمل تقنية القراءة الخمس المستهدفة من الذاكرة.',
        promptDe: 'Zuerst muss ich die Aufgabe genau lesen. · Ich markiere höchstens fünf Wörter am Rand. · Die Aufgabenstellung ist kürzer als der Text. · Die Einteilung der Zeit rettet den letzten Absatz. · Ein Rückschluss ohne Beleg ist geraten.',
        points: ['Zuerst muss ich die Aufgabe genau lesen.', 'Ich markiere höchstens fünf Wörter am Rand.', 'Die Aufgabenstellung ist kürzer als der Text.', 'Die Einteilung der Zeit rettet den letzten Absatz.', 'Ein Rückschluss ohne Beleg ist geraten.'],
        minWords: 35,
        frage: 'اكتب جمل تقنية القراءة الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Zuerst muss ich die Aufgabe genau lesen. Ich markiere höchstens fünf Wörter am Rand. Die Aufgabenstellung ist kürzer als der Text. Die Einteilung der Zeit rettet den letzten Absatz. Ein Rückschluss ohne Beleg ist geraten.',
      summaryDe: 'Zuerst muss ich die Aufgabe genau lesen. Ich markiere höchstens fünf Wörter am Rand. Die Aufgabenstellung ist kürzer als der Text. Die Einteilung der Zeit rettet den letzten Absatz. Ein Rückschluss ohne Beleg ist geraten.',
      summaryAr: 'قراءة الامتحان تبدأ بالمطلوب وتعلّم القليل وتقسّم الوقت ولا تخترع الإجابات.',
      summaryRecap: 'مطلوب أولًا ووقت مقسوم',
    }),

  U('b2-w06', 'خطاب شكوى: واقعة ونتيجة وطلب', 'Beschwerdebrief: Tatsache, Folge und Bitte',
    'Am Ende schreibst du eine Beschwerde mit Tatsache, Folge und Bitte — in fünf Sätzen',
    'في النهاية تكتب شكوى رسمية بواقعة ونتيجة وطلب في خمس جمل.',
    [
      ['Die Lieferung kam zwei Tage zu spät.', 'يفتتح الخطاب بواقعة قابلة للتحقق', 'الواقعة بفعل مفرد وماضٍ واضح: kam مع die Lieferung المفردة', 'Die Lieferung kamen zwei Tage zu spät.', 'المفرد: kam'],
      ['Die Bestellnummer steht oben im Betreff.', 'يضع الرقم المرجعي حيث يُرى فورًا', 'رقم الطلب مفرد: steht لا stehen', 'Die Bestellnummer stehen oben im Betreff.', 'المفرد: steht'],
      ['Die Folge war ein verpasster Termin.', 'يربط الواقعة بنتيجة محددة', 'بعد war يبقى الخبر في حالة الرفع: ein verpasster Termin', 'Die Folge war einen verpassten Termin.', 'الرفع بعد sein'],
      ['Ich muss um Ersatz oder eine Gutschrift bitten.', 'يطلب بديلًا محددًا بأدب وحزم', 'bitten يقترن بـum لا für، والمصدر bitten يغلق الجملة بعد muss', 'Ich muss für Ersatz oder eine Gutschrift bitten.', 'bitten um']
    ],
    [
      ['Die Lieferung kam zwei Tage zu spät.', 'وصل التسليم متأخرًا يومين', 'Die Lieferung kamen zwei Tage zu spät.', 'الفاعل مفرد: kam.', 'Lieferung'],
      ['Die Bestellnummer steht oben im Betreff.', 'رقم الطلب في الأعلى في سطر الموضوع', 'Die Bestellnummer stehen oben im Betreff.', 'المفرد: steht.', 'Betreff'],
      ['Die Folge war ein verpasster Termin.', 'كانت النتيجة موعدًا فائتًا', 'Die Folge war einen verpassten Termin.', 'الخبر رفع: ein verpasster Termin.', 'Folge'],
      ['Ich muss um Ersatz oder eine Gutschrift bitten.', 'يجب أن أطلب بديلًا أو إشعارًا دائنًا', 'Ich muss für Ersatz oder eine Gutschrift bitten.', 'bitten مع um.', 'Ersatz']
    ],
    'Die Lieferung kam zwei Tage zu spät. Die Folge war ein verpasster Termin.',
    'Der Ton bleibt sachlich.',
    'Wiederhole morgen die fünf Sätze: Die Lieferung kam zwei Tage zu spät. Die Bestellnummer steht oben im Betreff. Die Folge war ein verpasster Termin. Ich muss um Ersatz oder eine Gutschrift bitten. Der Ton bleibt sachlich. Die Absenderadresse steht oben links, darunter die Empfängeradresse. In der Betreffzeile stehen Sendungsnummer und Datum. Die Falschlieferung kam an die Lieferadresse. Ich bitte um Umtausch oder Nachlieferung. Die Zahlungsfrist läuft, sonst folgt eine Mahnung. Ich will keine Rache, ich will eine Lösung. Ein einziger sachlicher Satz hilft mehr als das Wort «lächerlich».',
    'غدًا أعد جمل خطاب الشكوى الخمس ولاحظ ترتيب الواقعة والنتيجة والطلب.',
    {
      factFamilies: ['konjugation', 'konjugation', 'kasus', 'präposition'],
      imitateNearMiss: 'Lieferungen',
      transformHint: 'في جملة الختام النبرة قبل كل شيء: Der Ton bleibt sachlich — الصفة بعد bleibt بلا نهاية.',
      orderSentence: 'Ich muss um Ersatz oder eine Gutschrift bitten.',
      checkOrderSentence: 'Die Bestellnummer steht oben im Betreff.',
      orderAr: 'رتّب جملة الطلب: الفاعل Ich أولًا والفعل muss ثانيًا والمصدر bitten أخيرًا.',
      orderPromptAr: 'رتّب الجملة واضعًا الفاعل أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Ich في الموضع الأول.', 'المصدر bitten يغلق الجملة بعد muss.'],
      writing: {
        zeigt: 'Beschwerdebrief in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: واقعة بفعل مفرد وماضٍ، ورقم طلب في سطر الموضوع، ونتيجة بخبر مرفوع، وطلب بديل بـum، ونبرة موضوعية بصفة بلا نهاية.',
        hinweise: ['bitten يقترن دائمًا بـum: um Ersatz bitten.', 'الواقعة قبل الحكم: رقم وموعد قبل أي رأي.'],
        prompt: 'اكتب جمل خطاب الشكوى الخمس المستهدفة من الذاكرة.',
        promptDe: 'Die Lieferung kam zwei Tage zu spät. · Die Bestellnummer steht oben im Betreff. · Die Folge war ein verpasster Termin. · Ich muss um Ersatz oder eine Gutschrift bitten. · Der Ton bleibt sachlich.',
        points: ['Die Lieferung kam zwei Tage zu spät.', 'Die Bestellnummer steht oben im Betreff.', 'Die Folge war ein verpasster Termin.', 'Ich muss um Ersatz oder eine Gutschrift bitten.', 'Der Ton bleibt sachlich.'],
        minWords: 31,
        frage: 'اكتب جمل خطاب الشكوى الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Lieferung kam zwei Tage zu spät. Die Bestellnummer steht oben im Betreff. Die Folge war ein verpasster Termin. Ich muss um Ersatz oder eine Gutschrift bitten. Der Ton bleibt sachlich.',
      summaryDe: 'Die Lieferung kam zwei Tage zu spät. Die Bestellnummer steht oben im Betreff. Die Folge war ein verpasster Termin. Ich muss um Ersatz oder eine Gutschrift bitten. Der Ton bleibt sachlich.',
      summaryAr: 'الشكوى وثيقة: واقعة برقم، ونتيجة واضحة، وطلب محدد، ونبرة هادئة.',
      summaryRecap: 'واقعة ونتيجة وطلب',
    }),

  U('b2-w07', 'العمل: حسنة ومساوئ وحدّ', 'Arbeit: Vorteil, Nachteil und Grenze',
    'Am Ende diskutierst du Arbeit mit Vorteil, Nachteil und Grenze — in fünf Sätzen',
    'في النهاية تناقش العمل بحسنة ومساوئ وحدّ في خمس جمل.',
    [
      ['Einerseits spart das Zeit.', 'يفتتح بجهة الحسنة المعلنة', 'الفاعل das مفرد: spart لا sparen', 'Einerseits sparen das Zeit.', 'المفرد: spart'],
      ['Andererseits kostet es Kontrolle.', 'يقابل بجهة المساوئ دون إلغاء الأولى', 'بعد andererseits الفعل ثانٍ قبل الفاعل: kostet es', 'Andererseits es kostet Kontrolle.', 'الفعل ثانٍ دائمًا'],
      ['Die Grenze ist das Team vor Ort.', 'يسمّي الحدّ الذي يتوقف عنده الحل', 'الخبر بعد ist رفع: das Team لا dem', 'Die Grenze ist dem Team vor Ort.', 'الخبر رفع بعد ist'],
      ['Ein Beispiel ist die Nachtschicht.', 'يسند الحكم بمثال من العمل نفسه', 'الفاعل Beispiel مفرد: ist لا sind', 'Ein Beispiel sind die Nachtschicht.', 'المفرد: ist']
    ],
    [
      ['Einerseits spart das Zeit.', 'من جهة يوفّر هذا وقتًا', 'Einerseits sparen das Zeit.', 'الفاعل das مفرد: spart.', 'Zeit'],
      ['Andererseits kostet es Kontrolle.', 'من جهة أخرى يكلّف هذا رقابة', 'Andererseits es kostet Kontrolle.', 'بعد andererseits الفعل ثانٍ.', 'Kontrolle'],
      ['Die Grenze ist das Team vor Ort.', 'الحدّ هو الفريق في المكان', 'Die Grenze ist dem Team vor Ort.', 'الخبر رفع: das Team.', 'Grenze'],
      ['Ein Beispiel ist die Nachtschicht.', 'مثال هو الوردية الليلية', 'Ein Beispiel sind die Nachtschicht.', 'المفرد: ist.', 'Beispiel']
    ],
    'Im Betrieb ist die Arbeitszeit der Streitpunkt. Einerseits spart Gleitzeit Wege, andererseits stört sie den Schichtdienst. Der Betriebsrat nennt eine Zahl: Die Produktivität sinkt nach acht Stunden. Die Belastung bleibt im Team der Abteilung ungleich. Der Tarifvertrag regelt die Pause, nicht die Erreichbarkeit. Wer im Homeoffice arbeitet, braucht klare Regeln. Die Abteilung testet ein Modell mit Vertrauensarbeitszeit. Die Kollegen melden Überforderung und Unterforderung zugleich. Die Weiterbildung fehlt, das Lob auch. Arbeitsplatzsicherheit und Flexibilität sind kein Widerspruch. In der Betriebsversammlung stehen die Überstundenregelung, die Zulage und die Schichtzulage. Der Arbeitgeber und der Arbeitnehmer streiten über die Gleichstellung. Die Arbeitsmittel stellt der Betrieb.',
    'Ich muss beide Seiten nennen.',
    'Wiederhole morgen die fünf Sätze: Einerseits spart das Zeit. Andererseits kostet es Kontrolle. Die Grenze ist das Team vor Ort. Ein Beispiel ist die Nachtschicht. Ich muss beide Seiten nennen. Die Abteilung testet ein Modell mit Vertrauensarbeitszeit. Die Kollegen melden Überforderung und Unterforderung zugleich. Die Weiterbildung fehlt, das Lob auch. Arbeitsplatzsicherheit und Flexibilität sind kein Widerspruch. Die Arbeitsmittel stellt der Betrieb. In der Betriebsversammlung stehen die Überstundenregelung, die Zulage und die Schichtzulage. Der Arbeitgeber und der Arbeitnehmer streiten über die Gleichstellung. Plane morgen eine kurze Debatte im Team: Sprich zuerst über die Gleitzeit, dann über den Schichtdienst und die Erreichbarkeit nach Feierabend. Nenne einen Vorteil, einen Nachteil und eine klare Grenze. Ein Beispiel aus der Nachtschicht macht die Debatte glaubhaft. Die Probezeit, die Kündigung und die Kündigungsfrist stehen nicht zur Debatte, aber das Gehalt und die Urlaubsregelung schon. Der Betriebsrat hört zu, und am Ende steht eine kurze Notiz. Die Vereinbarkeit von Familie und Beruf bleibt die offene Frage. Der Tarifvertrag regelt die Pause, die Betriebsvereinbarung die Gleitzeit.',
    'غدًا أعد جمل مناقشة العمل الخمس ولاحظ ترتيب الحسنة والمساوئ والحدّ والمثال.',
    {
      factFamilies: ['konjugation', 'wortstellung', 'kasus', 'konjugation'],
      imitateNearMiss: 'Zeiten',
      transformHint: 'في الجملة الختامية الجانبان معًا: Ich muss beide Seiten nennen — المصدر nennen يغلق الجملة بعد muss.',
      orderSentence: 'Ich muss beide Seiten nennen.',
      checkOrderSentence: 'Ein Beispiel ist die Nachtschicht.',
      orderAr: 'رتّب الجملة الختامية: الفاعل Ich أولًا والفعل muss ثانيًا والمصدر nennen أخيرًا.',
      orderPromptAr: 'رتّب الجملة واضعًا الفاعل أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Ich في الموضع الأول.', 'المصدر nennen يغلق الجملة بعد muss.'],
      writing: {
        zeigt: 'Arbeitsdebatte in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: حسنة بـEinerseits بفعل مفرد، ومساوئ بـAndererseits بفعل ثانٍ، وحدًّا بخبر مرفوع، ومثالًا بفعل مفرد، والتزامًا بالجانبين معًا.',
        hinweise: ['بعد Einerseits وAndererseits الفعل ثانٍ دائمًا.', 'الحدّ قبل الخلاصة: أين يتوقف الحل.'],
        prompt: 'اكتب جمل مناقشة العمل الخمس المستهدفة من الذاكرة.',
        promptDe: 'Einerseits spart das Zeit. · Andererseits kostet es Kontrolle. · Die Grenze ist das Team vor Ort. · Ein Beispiel ist die Nachtschicht. · Ich muss beide Seiten nennen.',
        points: ['Einerseits spart das Zeit.', 'Andererseits kostet es Kontrolle.', 'Die Grenze ist das Team vor Ort.', 'Ein Beispiel ist die Nachtschicht.', 'Ich muss beide Seiten nennen.'],
        minWords: 25,
        frage: 'اكتب جمل مناقشة العمل الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Einerseits spart das Zeit. Andererseits kostet es Kontrolle. Die Grenze ist das Team vor Ort. Ein Beispiel ist die Nachtschicht. Ich muss beide Seiten nennen.',
      summaryDe: 'Einerseits spart das Zeit. Andererseits kostet es Kontrolle. Die Grenze ist das Team vor Ort. Ein Beispiel ist die Nachtschicht. Ich muss beide Seiten nennen.',
      summaryAr: 'النقاش ميزان معلن: حسنة ومساوئ وحدّ ومثال، وجانبان معًا قبل الحكم.',
      summaryRecap: 'حسنة ومساوئ وحدّ',
    }),

  U('b2-w08', 'سماع لهجة: فهم بلا تقليد', 'Dialekt hören: verstehen, nicht nachahmen',
    'Am Ende hörst du Dialekt und bleibst beim Standard — in fünf Sätzen',
    'في النهاية تسمع لهجة وتفهمها وتبقى على الألمانية المعيارية في خمس جمل.',
    [
      ['Ich verstehe, aber ahme nichts nach.', 'يقرّر الفهم قبل الأداء', 'الفعل مع ich مفرد: ahme لا ahmen', 'Ich verstehe, aber ahmen nichts nach.', 'المفرد: ahme'],
      ['Das klingt österreichisch.', 'يسمّي التنوّع بمجرد سماعه', 'الصفة الإخبارية صغيرة الحرف: österreichisch', 'Das klingt Österreichisch.', 'الصفة صغيرة الحرف'],
      ['In der Schweiz sagt man oft Grüezi.', 'يثبّت مكان التحية في خريطة اللهجات', 'المكان الثابت جرّ: in der Schweiz', 'In die Schweiz sagt man oft Grüezi.', 'المكان جرّ: in der'],
      ['In der Prüfung bleibe ich beim Standard.', 'يلتزم المعياري في موقف التقييم', 'بعد عبارة المكان الفعل ثانٍ قبل الفاعل: bleibe ich', 'In der Prüfung ich bleibe beim Standard.', 'الفعل ثانٍ دائمًا']
    ],
    [
      ['Ich verstehe, aber ahme nichts nach.', 'أفهم دون أن أقلّد شيئًا', 'Ich verstehe, aber ahmen nichts nach.', 'الفعل ahme مع ich مفرد.', 'ahme'],
      ['Das klingt österreichisch.', 'هذا يبدو نمساويًّا', 'Das klingt Österreichisch.', 'الصفة بعد klingt صغيرة الحرف.', 'österreichisch'],
      ['In der Schweiz sagt man oft Grüezi.', 'في سويسرا يُقال غالبًا Grüezi', 'In die Schweiz sagt man oft Grüezi.', 'المكان الثابت بالجرّ: in der.', 'Schweiz'],
      ['In der Prüfung bleibe ich beim Standard.', 'في الامتحان أبقى على المعيار', 'In der Prüfung ich bleibe beim Standard.', 'الفعل bleibe ثانٍ قبل ich.', 'Standard']
    ],
    'Das Hörbeispiel kommt aus Wien und klingt österreichisch. Die Dialektfärbung ist stark, die Grammatik bleibt Hochdeutsch. In Zürich hört man Grüezi, in Bayern Servus, im Norden Moin. Jeder Sprachraum hat eine Sprachgrenze zum Nachbarn. Plattdeutsch und Bairisch liegen im Hörverstehen weit auseinander. Die Lautverschiebung erklärt manche Abweichung. Ich verstehe den Inhalt, aber ich ahme den Klang nicht nach. Der Wortschatz hilft, die Sprachmelodie nicht. Der Prüfer fragt nach dem Inhalt, nicht nach der Färbung. In der Prüfung bleibe ich beim Standard.',
    'Ein Dialekt ist kein Fehler.',
    'Wiederhole morgen die fünf Sätze: Ich verstehe, aber ahme nichts nach. Das klingt österreichisch. In der Schweiz sagt man oft Grüezi. In der Prüfung bleibe ich beim Standard. Ein Dialekt ist kein Fehler. Das Hörbeispiel kommt aus Zürich: Man hört Grüezi, in Bayern Servus und im Norden Moin. Der Schweizer und der Bayer klingen anders, aber beide sprechen Deutsch. Plattdeutsch und das Bairische liegen im Hörverstehen weit auseinander. Ich notiere die Sprachmelodie im Heft, ohne sie nachzuahmen. Du ahmst nichts nach, auch wenn ein Wort fremd klingt. Kein Klang ist falsches Deutsch, und ich stoppe beim ersten fremden Wort nicht.',
    'غدًا أعد جمل سماع اللهجة الخمس ولاحظ الفرق دون تقليد.',
    {
      factFamilies: ['konjugation', 'orthographie', 'kasus', 'wortstellung'],
      imitateNearMiss: 'ahmen',
      transformHint: 'في جملة الفصل الحكم قبل المشاعر: Ein Dialekt ist kein Fehler — الفاعل مفرد فيأخذ ist.',
      orderSentence: 'In der Schweiz sagt man oft Grüezi.',
      checkOrderSentence: 'Ein Dialekt ist kein Fehler.',
      orderAr: 'رتّب جملة التحية: عبارة المكان أولًا والفعل sagt ثانيًا قبل الفاعل man.',
      orderPromptAr: 'رتّب الجملة واضعًا عبارة المكان أولًا والفعل في الموضع الثاني.',
      orderHints: ['عبارة المكان In der Schweiz في الموضع الأول.', 'الفعل sagt ثانٍ، والفعال man بعده.'],
      writing: {
        zeigt: 'Dialekt hören in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: فهمًا بفعل مفرد، وتسمية للتنوّع بصفة صغيرة الحرف، وخريطة تحية بجرّ المكان، والتزامًا بالمعيار بفعل ثانٍ، وفصلًا بين اللهجة والخطأ.',
        hinweise: ['بعد عبارة المكان الفعل ثانٍ قبل الفاعل.', 'اللهجة تُسمّى ولا تُقلّد في الامتحان.'],
        prompt: 'اكتب جمل سماع اللهجة الخمس المستهدفة من الذاكرة.',
        promptDe: 'Ich verstehe, aber ahme nichts nach. · Das klingt österreichisch. · In der Schweiz sagt man oft Grüezi. · In der Prüfung bleibe ich beim Standard. · Ein Dialekt ist kein Fehler.',
        points: ['Ich verstehe, aber ahme nichts nach.', 'Das klingt österreichisch.', 'In der Schweiz sagt man oft Grüezi.', 'In der Prüfung bleibe ich beim Standard.', 'Ein Dialekt ist kein Fehler.'],
        minWords: 28,
        frage: 'اكتب جمل سماع اللهجة الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Ich verstehe, aber ahme nichts nach. Das klingt österreichisch. In der Schweiz sagt man oft Grüezi. In der Prüfung bleibe ich beim Standard. Ein Dialekt ist kein Fehler.',
      summaryDe: 'Ich verstehe, aber ahme nichts nach. Das klingt österreichisch. In der Schweiz sagt man oft Grüezi. In der Prüfung bleibe ich beim Standard. Ein Dialekt ist kein Fehler.',
      summaryAr: 'اللهجة تُفهم وتُسمّى؛ والجواب في الامتحان يبقى معياريًّا.',
      summaryRecap: 'فهم بلا تقليد',
    }),

  U('b2-w09', 'الرسم البياني: وصف ثم تأويل', 'Grafik: erst beschreiben, dann deuten',
    'Am Ende beschreibst du die Grafik, bevor du deutest — in fünf Sätzen',
    'في النهاية تصف الرسم قبل أن تؤول في خمس جمل.',
    [
      ['Die Grafik zeigt einen Anstieg.', 'يصف الحركة الظاهرة دون سبب', 'الفاعل Grafik مفرد: zeigt لا zeigen', 'Die Grafik zeigen einen Anstieg.', 'المفرد: zeigt'],
      ['Auffällig ist der Unterschied.', 'يسمّي الفرق اللافت وحده', 'Unterschied مذكر: der لا die', 'Auffällig ist die Unterschied.', 'المذكر: der Unterschied'],
      ['Im Vergleich zum Vorjahr steigt der Anteil.', 'يربط الرقم بمرجع زمني', 'بعد عبارة المقارنة الفعل ثانٍ قبل الفاعل: steigt der Anteil', 'Im Vergleich zum Vorjahr der Anteil steigt.', 'الفعل ثانٍ دائمًا'],
      ['Danach deute ich vorsichtig.', 'يؤول متأخرًا وبحذر معلن', 'الفعل مع ich مفرد: deute لا deuten', 'Danach deuten ich vorsichtig.', 'المفرد: deute']
    ],
    [
      ['Die Grafik zeigt einen Anstieg.', 'الرسم يُظهر ارتفاعًا', 'Die Grafik zeigen einen Anstieg.', 'الفاعل مفرد: zeigt.', 'Anstieg'],
      ['Auffällig ist der Unterschied.', 'اللافت هو الفرق', 'Auffällig ist die Unterschied.', 'المذكر: der Unterschied.', 'Unterschied'],
      ['Im Vergleich zum Vorjahr steigt der Anteil.', 'مقارنة بالعام الماضي ترتفع النسبة', 'Im Vergleich zum Vorjahr der Anteil steigt.', 'بعد المقارنة الفعل ثانٍ.', 'Vergleich'],
      ['Danach deute ich vorsichtig.', 'بعد ذلك أؤول بحذر', 'Danach deuten ich vorsichtig.', 'الفعل مع ich مفرد: deute.', 'vorsichtig']
    ],
    'Die Grafik zeigt den Zeitraum von zwei Jahren. Die x-Achse nennt die Monate, die y-Achse die Prozentangabe. Der Spitzenwert liegt im Juli, danach eine Schwankung. Die Trendlinie steigt, die Zahlenreihe bestätigt den Befund. Die Datenquelle fehlt, das schwächt jede Auswertung. Die Grafikunterschrift nennt die Quelle, die Achsenbeschriftung die Einheit. Ein Kreisdiagramm zeigt Anteile, ein Liniendiagramm den Verlauf. Der Farbverlauf der Farbskala ersetzt keine Wertachse. Die Einblendung erklärt den Stichtag. Die Vergleichsgruppe fehlt, die Hochrechnung bleibt eine Näherung.',
    'Ohne Quelle nenne ich keine Ursache.',
    'Wiederhole morgen die fünf Sätze: Die Grafik zeigt einen Anstieg. Auffällig ist der Unterschied. Im Vergleich zum Vorjahr steigt der Anteil. Danach deute ich vorsichtig. Ohne Quelle nenne ich keine Ursache. Die x-Achse nennt die Monate, die y-Achse die Prozentangabe. Der Spitzenwert liegt im Juli, danach kommt eine Schwankung. Die Trendlinie steigt, die Zahlenreihe bestätigt den Befund. Die Datenquelle fehlt, und die Vergleichsgruppe auch. Die Einblendung erklärt den Stichtag, die Grafikunterschrift die Einheit. Die Hochrechnung bleibt eine Näherung, die Auswertung eine Übung. Der Juli ist auffälliger als jeder andere Monat; der Vergleich mit Zweitausendzehn bleibt die Hausaufgabe.',
    'غدًا أعد جمل تحليل الرسم الخمس ولاحظ أن التأويل يأتي بعد الوصف.',
    {
      factFamilies: ['konjugation', 'genus', 'wortstellung', 'konjugation'],
      imitateNearMiss: 'Anstiegs',
      transformHint: 'في جملة الحذر النتيجة أوضح: Ohne Quelle nenne ich keine Ursache — المؤنث نصب keine.',
      orderSentence: 'Im Vergleich zum Vorjahr steigt der Anteil.',
      checkOrderSentence: 'Auffällig ist der Unterschied.',
      orderAr: 'رتّب جملة المقارنة: المرجع أولًا والفعل steigt ثانيًا قبل الفاعل der Anteil.',
      orderPromptAr: 'رتّب الجملة واضعًا عبارة المقارنة أولًا والفعل في الموضع الثاني.',
      orderHints: ['عبارة المقارنة Im Vergleich zum Vorjahr في الموضع الأول.', 'الفعل steigt ثانٍ، والفاعل der Anteil أخيرًا.'],
      writing: {
        zeigt: 'Grafikbeschreibung in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: حركة موصوفة بفعل مفرد، وفرقًا لافتًا بأداة مذكر صحيحة، ومقارنة بفعل ثانٍ، وتأويلًا حذرًا بفعل مفرد، ورفضًا للسبب بلا مصدر.',
        hinweise: ['الرسم يُظهر ولا يُثبت سببًا.', 'الفرق اللافت واحد، وبمرجع معلن.'],
        prompt: 'اكتب جمل تحليل الرسم الخمس المستهدفة من الذاكرة.',
        promptDe: 'Die Grafik zeigt einen Anstieg. · Auffällig ist der Unterschied. · Im Vergleich zum Vorjahr steigt der Anteil. · Danach deute ich vorsichtig. · Ohne Quelle nenne ich keine Ursache.',
        points: ['Die Grafik zeigt einen Anstieg.', 'Auffällig ist der Unterschied.', 'Im Vergleich zum Vorjahr steigt der Anteil.', 'Danach deute ich vorsichtig.', 'Ohne Quelle nenne ich keine Ursache.'],
        minWords: 26,
        frage: 'اكتب جمل تحليل الرسم الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Grafik zeigt einen Anstieg. Auffällig ist der Unterschied. Im Vergleich zum Vorjahr steigt der Anteil. Danach deute ich vorsichtig. Ohne Quelle nenne ich keine Ursache.',
      summaryDe: 'Die Grafik zeigt einen Anstieg. Auffällig ist der Unterschied. Im Vergleich zum Vorjahr steigt der Anteil. Danach deute ich vorsichtig. Ohne Quelle nenne ich keine Ursache.',
      summaryAr: 'الوصف قبل التأويل: لافت واحد بمقارنة معلنة، ولا سبب بلا مصدر.',
      summaryRecap: 'وصف ثم تأويل',
    }),

  U('b2-w10', 'التلخيص: أقصر وبترتيب النص وبلا تقييم', 'Zusammenfassung: kürzer, geordnet, ohne Wertung',
    'Am Ende fasst du den Text kürzer und ohne neue Wertung zusammen — in fünf Sätzen',
    'في النهاية تلخّص النص أقصر من أصله وبترتيبه وبلا تقييم جديد في خمس جمل.',
    [
      ['Ich füge keine Wertung hinzu.', 'يخرج الحكم من الملخّص', 'الفعل مع ich مفرد: füge لا fügen', 'Ich fügen keine Wertung hinzu.', 'المفرد: füge'],
      ['Ich behalte die Reihenfolge.', 'يحفظ ترتيب النص كما هو', 'Reihenfolge مؤنثة: die لا den', 'Ich behalte den Reihenfolge.', 'المؤنثة: die Reihenfolge'],
      ['Die Zusammenfassung ist kürzer.', 'يُلزم الملخّص بأن يقصر عن الأصل', 'الفاعل مفرد: ist لا sind', 'Die Zusammenfassung sind kürzer.', 'المفرد: ist'],
      ['Das heißt, der Plan scheitert.', 'يعيد الصياغة بكلمات أخرى', 'الفاعل Plan مفرد: scheitert لا scheiterten', 'Das heißt, der Plan scheiterten.', 'المفرد: scheitert']
    ],
    [
      ['Ich füge keine Wertung hinzu.', 'لا أضيف تقييمًا', 'Ich fügen keine Wertung hinzu.', 'الفعل مع ich مفرد: füge.', 'Wertung'],
      ['Ich behalte die Reihenfolge.', 'أحفظ الترتيب', 'Ich behalte den Reihenfolge.', 'المؤنثة: die Reihenfolge.', 'Reihenfolge'],
      ['Die Zusammenfassung ist kürzer.', 'الملخّص أقصر', 'Die Zusammenfassung sind kürzer.', 'الفاعل مفرد: ist.', 'kürzer'],
      ['Das heißt, der Plan scheitert.', 'هذا يعني أن الخطة تفشل', 'Das heißt, der Plan scheiterten.', 'الفاعل مفرد: scheitert.', 'heißt']
    ],
    'Die Inhaltsangabe folgt der Textvorlage, nicht dem eigenen Geschmack. Die Kurzfassung behält die Reihenfolge des Ausgangstextes. Ich streiche jeden Zusatz und jede Wiederholung. Der Nebensatz wird zum Hauptsatz, die Konjunktion darf bleiben. Anführungszeichen stehen nur um ein wörtliches Zitat. Am Rand notiere ich Stichpunkte. Am Ende prüfe ich die Vollständigkeit. Die Zeilenzahl und die Seitenzahl stehen in der Vorgabe. Ein Doppelpunkt kündigt die Aufzählung an, ein Semikolon trennt sie. Das Register und das Wörterverzeichnis helfen bei der Ergänzung. Die Regeln dafür stehen im Glossar. Jede Silbe, jede Ziffer und jeder Buchstabe zählt.',
    'Ich muss den Kern nennen.',
    'Wiederhole morgen die fünf Sätze: Ich füge keine Wertung hinzu. Ich behalte die Reihenfolge. Die Zusammenfassung ist kürzer. Das heißt, der Plan scheitert. Ich muss den Kern nennen. Die Inhaltsangabe folgt der Textvorlage, nicht dem Geschmack. Der Nebensatz wird zum Hauptsatz. Ein Doppelpunkt kündigt die Aufzählung an, ein Semikolon trennt sie. Am Ende prüfe ich die Vollständigkeit: Jede Silbe, jede Ziffer und jeder Buchstabe zählt. Ich sortiere die Kernsätze nicht nach eigenem Geschmack um; die Reihenfolge bleibt die des Ausgangstextes, Absatz für Absatz. So bleibt der Summary kürzer als die Vorlage. Wer einen Satz weglässt, prüft am Ende, ob der Leitgedanke noch steht. Die Inhaltsangabe endet ohne Kommentar; eine kurze Zeile zur Vollständigkeit genügt dem Leser. Auch die Kernsätze bleiben im Indikativ, und kein neuer Gedanke kommt hinzu.',
    'غدًا أعد جمل التلخيص الخمس ولاحظ أن الحكم يبقى خارجها.',
    {
      factFamilies: ['konjugation', 'genus', 'konjugation', 'konjugation'],
      imitateNearMiss: 'Wertungen',
      transformHint: 'في جملة الختام الهدف نفسه: Ich muss den Kern nennen — المصدر nennen يغلق الجملة بعد muss.',
      orderSentence: 'Ich muss den Kern nennen.',
      checkOrderSentence: 'Die Zusammenfassung ist kürzer.',
      orderAr: 'رتّب جملة الهدف: الفاعل Ich أولًا والفعل muss ثانيًا والمصدر nennen أخيرًا.',
      orderPromptAr: 'رتّب الجملة واضعًا الفاعل أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Ich في الموضع الأول.', 'المصدر nennen يغلق الجملة بعد muss.'],
      writing: {
        zeigt: 'Zusammenfassung in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: حكمًا مستبعدًا بفعل مفرد، وترتيبًا محفوظًا بأداة مؤنثة صحيحة، وقصرًا بفعل مفرد، وإعادة صياغة بادئة بـDas heißt، ونواة مسمّاة بالمصدر الأخير.',
        hinweise: ['الملخّص يقول ما قاله النص لا ما ظننته.', 'الترتيب الأصلي مقياس التصحيح.'],
        prompt: 'اكتب جمل التلخيص الخمس المستهدفة من الذاكرة.',
        promptDe: 'Ich füge keine Wertung hinzu. · Ich behalte die Reihenfolge. · Die Zusammenfassung ist kürzer. · Das heißt, der Plan scheitert. · Ich muss den Kern nennen.',
        points: ['Ich füge keine Wertung hinzu.', 'Ich behalte die Reihenfolge.', 'Die Zusammenfassung ist kürzer.', 'Das heißt, der Plan scheitert.', 'Ich muss den Kern nennen.'],
        minWords: 23,
        frage: 'اكتب جمل التلخيص الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Ich füge keine Wertung hinzu. Ich behalte die Reihenfolge. Die Zusammenfassung ist kürzer. Das heißt, der Plan scheitert. Ich muss den Kern nennen.',
      summaryDe: 'Ich füge keine Wertung hinzu. Ich behalte die Reihenfolge. Die Zusammenfassung ist kürzer. Das heißt, der Plan scheitert. Ich muss den Kern nennen.',
      summaryAr: 'التلخيص أمين: نواة النص بترتيبها وبكلمات جديدة، وبلا حكم.',
      summaryRecap: 'أقصر وبترتيب النص',
    }),

  U('b2-w11', 'الإعلام: الانتشار ليس حقيقة', 'Medien: Reichweite ist nicht Wahrheit',
    'Am Ende trennst du Reichweite und Wahrheit — in fünf Sätzen',
    'في النهاية تفصل بين الانتشار والحقيقة في خمس جمل.',
    [
      ['Viele Leser machen es nicht wahr.', 'ينزع البرهنة عن الكثرة', 'الفاعل جمع Leser: machen لا macht', 'Viele Leser macht es nicht wahr.', 'الجمع: machen'],
      ['Diese Plattform ist nicht die Quelle.', 'يفصل الناقل عن المصدر', 'الخبر بعد ist رفع: die Quelle لا der', 'Die Plattform ist nicht der Quelle.', 'الخبر رفع بعد ist'],
      ['Die Überschrift reicht nicht.', 'ينقص العنوانَ الاكتفاءَ', 'الفاعل مفرد: reicht لا reichen', 'Die Überschrift reichen nicht.', 'المفرد: reicht'],
      ['Ein Gegenbeispiel gehört dazu.', 'يفرض المثال المضاد على الحجة', 'الفاعل مفرد: gehört لا gehören', 'Ein Gegenbeispiel gehören dazu.', 'المفرد: gehört']
    ],
    [
      ['Viele Leser machen es nicht wahr.', 'كثرة القرّاء لا تجعله صحيحًا', 'Viele Leser macht es nicht wahr.', 'الفاعل جمع: machen.', 'wahr'],
      ['Diese Plattform ist nicht die Quelle.', 'المنصة ليست المصدر', 'Die Plattform ist nicht der Quelle.', 'الخبر رفع: die Quelle.', 'Quelle'],
      ['Die Überschrift reicht nicht.', 'العنوان لا يكفي', 'Die Überschrift reichen nicht.', 'الفاعل مفرد: reicht.', 'Überschrift'],
      ['Ein Gegenbeispiel gehört dazu.', 'المثال المضاد جزء من النقاش', 'Ein Gegenbeispiel gehören dazu.', 'الفاعل مفرد: gehört.', 'Gegenbeispiel']
    ],
    'Die Plattform verbreitet schneller als jede Zeitung. Die Reichweite wächst, die Glaubwürdigkeit wächst nicht mit. Die Schlagzeile ist ein Klickköder, der Faktencheck fehlt. Ohne Quellenkritik bleibt jede Meldung ein Gerücht. Die Redaktion prüft vor der Veröffentlichung, das Netz nicht.',
    'Ich muss Reichweite von Wahrheit trennen.',
    'Wiederhole morgen die fünf Sätze: Viele Leser machen es nicht wahr. Diese Plattform ist nicht die Quelle. Die Überschrift reicht nicht. Ein Gegenbeispiel gehört dazu. Ich muss Reichweite von Wahrheit trennen. Die Schlagzeile ist ein Klickköder, der Faktencheck fehlt. Ohne Quellenkritik bleibt jede Meldung ein Gerücht. Die Glaubwürdigkeit wächst nicht mit den Klicks. Das Netz verbreitet schneller als jede Zeitung. Ich ignoriere kein Gegenbeispiel; es gehört zur Debatte.',
    'غدًا أعد جمل نقاش الإعلام الخمس ولاحظ الفرق بين الانتشار والحقيقة.',
    {
      factFamilies: ['konjugation', 'kasus', 'konjugation', 'konjugation'],
      imitateNearMiss: 'wahrer',
      transformHint: 'في الجملة الختامية الفصل نفسه هو الموضوع: Ich muss Reichweite von Wahrheit trennen — المصدر trennen يغلق الجملة بعد muss.',
      orderSentence: 'Ich muss Reichweite von Wahrheit trennen.',
      checkOrderSentence: 'Diese Plattform ist nicht die Quelle.',
      orderAr: 'رتّب جملة الفصل: الفاعل Ich أولًا والفعل muss ثانيًا والمصدر trennen أخيرًا.',
      orderPromptAr: 'رتّب الجملة واضعًا الفاعل أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Ich في الموضع الأول.', 'المصدر trennen يغلق الجملة بعد muss.'],
      writing: {
        zeigt: 'Mediendebatte in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: كثرة بفعل جمع، وناقلًا بخبر مرفوع، وعنوانًا بفعل مفرد، ومثالًا مضادًا بفعل مفرد، وفصلًا بين الانتشار والحقيقة بـvon.',
        hinweise: ['الكثرة مقياس مسافة لا صواب.', 'المصدر يُطلب بالاسم لا بالمنصة.'],
        prompt: 'اكتب جمل نقاش الإعلام الخمس المستهدفة من الذاكرة.',
        promptDe: 'Viele Leser machen es nicht wahr. · Diese Plattform ist nicht die Quelle. · Die Überschrift reicht nicht. · Ein Gegenbeispiel gehört dazu. · Ich muss Reichweite von Wahrheit trennen.',
        points: ['Viele Leser machen es nicht wahr.', 'Diese Plattform ist nicht die Quelle.', 'Die Überschrift reicht nicht.', 'Ein Gegenbeispiel gehört dazu.', 'Ich muss Reichweite von Wahrheit trennen.'],
        minWords: 26,
        frage: 'اكتب جمل نقاش الإعلام الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Viele Leser machen es nicht wahr. Diese Plattform ist nicht die Quelle. Die Überschrift reicht nicht. Ein Gegenbeispiel gehört dazu. Ich muss Reichweite von Wahrheit trennen.',
      summaryDe: 'Viele Leser machen es nicht wahr. Diese Plattform ist nicht die Quelle. Die Überschrift reicht nicht. Ein Gegenbeispiel gehört dazu. Ich muss Reichweite von Wahrheit trennen.',
      summaryAr: 'الانتشار مقياس مسافة لا صحة: المصدر يُطلب بالاسم، والطرف الآخر يُسمع.',
      summaryRecap: 'الانتشار ليس حقيقة',
    }),

  U('b2-w12', 'سماع مقابلة: موقف وتقييد', 'Interview hören: Position und Einschränkung',
    'Am Ende hörst du Position und Einschränkung heraus — in fünf Sätzen',
    'في النهاية تلتقط الموقف والتقييد في المقابلة في خمس جمل.',
    [
      ['Die Position ist ein Satz.', 'يلخّص موقف المتكلم في جملة', 'الفاعل مفرد: ist لا sind', 'Die Position sind ein Satz.', 'المفرد: ist'],
      ['Die Einschränkung gehört dazu.', 'يضيف حدّ الموقف لا مطلقه', 'الفاعل مفرد: gehört لا gehören', 'Die Einschränkung gehören dazu.', 'المفرد: gehört'],
      ['Ich plane zwei Durchgänge.', 'يخطّط السماع بلا افتراض ثالثة', 'الفعل مع ich مفرد: plane لا planen', 'Ich planen zwei Durchgänge.', 'المفرد: plane'],
      ['Ich notiere zur Frage.', 'يدوّن بما يخدم السؤال فقط', 'بعد zu الجرّ المنقبض: zur Frage', 'Ich notiere zu die Frage.', 'الانقباض: zur']
    ],
    [
      ['Die Position ist ein Satz.', 'الموقف جملة واحدة', 'Die Position sind ein Satz.', 'الفاعل مفرد: ist.', 'Position'],
      ['Die Einschränkung gehört dazu.', 'التقييد جزء منه', 'Die Einschränkung gehören dazu.', 'الفاعل مفرد: gehört.', 'Einschränkung'],
      ['Ich plane zwei Durchgänge.', 'أخطّط لجولتَين', 'Ich planen zwei Durchgänge.', 'الفعل مع ich مفرد: plane.', 'zwei'],
      ['Ich notiere zur Frage.', 'أدوّن بما يخدم السؤال', 'Ich notiere zu die Frage.', 'بعد zu الجرّ: zur.', 'notiere']
    ],
    'Im Studio beginnt das Gespräch mit einer Vorstellung. Der Gesprächsleiter stellt die Leitfrage, danach folgt die Anschlussfrage. Ich höre zu und notiere nach dem O-Ton. Die Körpersprache verrät mehr als der Lebenslauf. Am Ende bleibt die Einschätzung, nicht das Zeugnis.',
    'Ich muss Position und Grenze hören.',
    'Wiederhole morgen die fünf Sätze: Die Position ist ein Satz. Die Einschränkung gehört dazu. Ich plane zwei Durchgänge. Ich notiere zur Frage. Ich muss Position und Grenze hören. Im Studio beginnt das Gespräch mit einer Vorstellung. Nach der Leitfrage folgt die Anschlussfrage. Die Körpersprache verrät mehr als der Lebenslauf. Ich notiere nach dem O-Ton, nicht nach dem Gefühl. Am Ende bleibt die Einschätzung. Du fängst jede Position ein, auch wenn die Stimme leise wird.',
    'غدًا أعد جمل سماع المقابلة الخمس ودوّن الموقف والحدّ معًا.',
    {
      factFamilies: ['konjugation', 'konjugation', 'konjugation', 'kasus'],
      imitateNearMiss: 'Positionen',
      transformHint: 'في الجملة الختامية المهمة كلها: Ich muss Position und Grenze hören — المصدر hören يغلق الجملة بعد muss.',
      orderSentence: 'Ich muss Position und Grenze hören.',
      checkOrderSentence: 'Die Position ist ein Satz.',
      orderAr: 'رتّب جملة السماع: الفاعل Ich أولًا والفعل muss ثانيًا والمصدر hören أخيرًا.',
      orderPromptAr: 'رتّب الجملة واضعًا الفاعل أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Ich في الموضع الأول.', 'المصدر hören يغلق الجملة بعد muss.'],
      writing: {
        zeigt: 'Interviewprotokoll in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: موقفًا بفعل مفرد، وتقييدًا بفعل مفرد، وجولتين بفعل مفرد، وتدوينًا بحرف جرّ صحيح، والالتزام بسماع الموقف والحدّ معًا.',
        hinweise: ['الموقف بلا تقييده نصف جواب.', 'خطّط لما هو موجود: مرورَين.'],
        prompt: 'اكتب جمل سماع المقابلة الخمس المستهدفة من الذاكرة.',
        promptDe: 'Die Position ist ein Satz. · Die Einschränkung gehört dazu. · Ich plane zwei Durchgänge. · Ich notiere zur Frage. · Ich muss Position und Grenze hören.',
        points: ['Die Position ist ein Satz.', 'Die Einschränkung gehört dazu.', 'Ich plane zwei Durchgänge.', 'Ich notiere zur Frage.', 'Ich muss Position und Grenze hören.'],
        minWords: 23,
        frage: 'اكتب جمل سماع المقابلة الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Die Position ist ein Satz. Die Einschränkung gehört dazu. Ich plane zwei Durchgänge. Ich notiere zur Frage. Ich muss Position und Grenze hören.',
      summaryDe: 'Die Position ist ein Satz. Die Einschränkung gehört dazu. Ich plane zwei Durchgänge. Ich notiere zur Frage. Ich muss Position und Grenze hören.',
      summaryAr: 'الموقف جملة، والحدّ جزء منها؛ والسماع مرتان لا مرة.',
      summaryRecap: 'موقف وتقييد',
    }),

  U('b2-w13', 'الكتابة على الوقت: خطة ونص ومراجعة', 'Schreiben auf Zeit: Plan, Text, Kontrolle',
    'Am Ende planst du, schreibst du und prüfst du — in fünf Sätzen',
    'في النهاية تخطّط وتكتب وتراجع قبل انتهاء الوقت في خمس جمل.',
    [
      ['Ich plane die Gliederung vor dem Text.', 'يضع الهيكل قبل أول جملة', 'الفعل مع ich مفرد: plane لا planen', 'Ich planen die Gliederung vor dem Text.', 'المفرد: plane'],
      ['Der Hauptteil trägt zwei Argumente.', 'يحمل متنُه حجتين لا خمسًا', 'الفاعل مفرد: trägt لا tragen', 'Der Hauptteil tragen zwei Argumente.', 'المفرد: trägt'],
      ['Den Schluss habe ich im Kopf.', 'يجهّز ختامه قبل أن يضيق الوقت', 'الفعل habe مفرد مع ich لا haben', 'Den Schluss haben ich im Kopf.', 'المفرد: habe'],
      ['Nach dem Schreiben prüfe ich Verbzweit.', 'يفحص موضع الفعل في النهاية', 'بعد عبارة البداية الفعل ثانٍ قبل الفاعل: prüfe ich', 'Nach dem Schreiben ich prüfe Verbzweit.', 'الفعل ثانٍ دائمًا']
    ],
    [
      ['Ich plane die Gliederung vor dem Text.', 'أخطّط للهيكل قبل النص', 'Ich planen die Gliederung vor dem Text.', 'الفعل مع ich مفرد: plane.', 'plane'],
      ['Der Hauptteil trägt zwei Argumente.', 'المتن يحمل حجتين', 'Der Hauptteil tragen zwei Argumente.', 'الفاعل مفرد: trägt.', 'zwei'],
      ['Den Schluss habe ich im Kopf.', 'الخاتمة جاهزة في ذهني', 'Den Schluss haben ich im Kopf.', 'الفعل مع ich: habe.', 'Schluss'],
      ['Nach dem Schreiben prüfe ich Verbzweit.', 'بعد الكتابة أفحص موضع الفعل', 'Nach dem Schreiben ich prüfe Verbzweit.', 'الفعل ثانٍ: prüfe ich.', 'prüfe']
    ],
    'Die Prüfungszeit ist in drei Blöcke geteilt. Der Entwurf steht auf dem Konzeptpapier. Die Reinschrift folgt in der zweiten Hälfte. Die Endkontrolle prüft die Kommasetzung und die Verbzweitstellung. Bei Zeitmangel entscheidet der Bewertungsbogen. Die Textproduktion beginnt mit der Schreibaufgabe. Die Themenstellung nennt den Umfang und die Mindestlänge. Der Absatzbau folgt der Argumentationslinie, der Übergangssatz verbindet. Die Textstruktur bleibt sichtbar, auch in der Reinschrift. Der Schlussgedanke steht schon im Entwurf. Ein Konnektor pro Satz genügt, die Konjunktion und das Adverb sparsam. Der Satzbau bleibt einfach, die Wortstellung klar. Die Zeitform bleibt einheitlich: Präteritum oder Perfekt, nicht beides. Passiv und Aktiv wechseln nur mit Grund. Der Konjunktiv gehört in die indirekte Rede. Jede Endung, jede Wortart, jede Grundform wird geprüft. Der Infinitiv, das Partizip und die Vergleichsform stehen im Merkzettel. Die Wortgruppe um die Satzklammer heißt Satzglied. Subjekt, Objekt und Attribut stehen im Nominativ, Akkusativ, Dativ oder Genitiv. Der Relativsatz hängt an der Präposition. Wortbildung heißt Ableitung oder Zusammensetzung, nie Zufall. Der Konzeptpapierbogen hat eine Randzeile für jede Minute. Zeitmanagement heißt: den Zwischenstand prüfen, bevor der Zeitverlust sichtbar wird. Der Zeitplan selbst ist einfach: zehn Minuten planen, fünfundvierzig Minuten schreiben, fünf Minuten kontrollieren. Wer das Konzeptpapier voll schreibt, hat die Reinschrift verloren. Der Entwurf darf hässlich sein, die Handschrift nicht. Zwei Argumente mit Beispiel sind stärker als fünf ohne Beleg. Der Übergangssatz steht zwischen Hauptteil und Schluss. Am Ende zählt der Prüfer die Gliederung, nicht die Ideen im Kopf. Der Schlusssatz steht im Kopf, bevor die Reinschrift beginnt. Wer in Minute fünfzig noch plant, schreibt ohne Ende.',
    'Ich muss die Zeit in Blöcke teilen.',
    'Wiederhole morgen die fünf Sätze: Ich plane die Gliederung vor dem Text. Der Hauptteil trägt zwei Argumente. Den Schluss habe ich im Kopf. Nach dem Schreiben prüfe ich Verbzweit. Ich muss die Zeit in Blöcke teilen. Der Entwurf steht auf dem Konzeptpapier, die Reinschrift folgt danach. Die Endkontrolle prüft Kommasetzung und Verbzweitstellung. Bei Zeitmangel entscheidet der fertige Schluss, nicht die fünfte Idee. So teile ich siebzig Minuten: Die ersten zehn Minuten gehören der Gliederung. Im Entwurf stehen nur Stichpunkte, kein ganzer Satz. Dann schreibe ich den Text bis Minute fünfundfünfzig. Der Schlussgedanke steht schon auf dem Konzeptpapier, ich übernehme ihn und prüfe danach. Fünf Minuten bleiben für die Endkontrolle: Verbzweit, Endungen und Kommas. Wer zu langsam wird, streicht ein Beispiel, nie den Schluss. Die Wortzahl zähle ich grob an den Zeilen, nicht Wort für Wort. Der Korrektor sieht zuerst, ob Einleitung, Hauptteil und Schluss da sind. Ein fehlender Schluss kostet mehr als ein Komma. Darum endet der Text, bevor die Zeit endet. Die Gliederung mache ich mit Bleistift, damit ich Zeilen streichen kann. Nach dreißig Minuten prüfe ich den Zwischenstand: Ist die Hälfte des Textes da?',
    'غدًا أعد جمل الكتابة على الوقت الخمس وراقب ساعتك لا خوفك.',
    {
      factFamilies: ['konjugation', 'konjugation', 'konjugation', 'wortstellung'],
      hwHintDe: 'Im Englischen heißt die Aufgabe timed writing. Auf dem Merkzettel stehen Verbzweit, Endungen und Kommas. Prüfe am Ende jeden Satz: Steht das Verb an zweiter Stelle? Ist das Nomen groß geschrieben? Fehlt ein Komma vor dass oder weil? Ein kurzer Satz ist kein Fehler, ein Schachtelsatz ohne Kontrolle schon.',
      imitateNearMiss: 'planen',
      transformHint: 'في الجملة الختامية النظام كله: Ich muss die Zeit in Blöcke teilen — المصدر teilen يغلق الجملة بعد muss.',
      orderSentence: 'Ich muss die Zeit in Blöcke teilen.',
      checkOrderSentence: 'Der Hauptteil trägt zwei Argumente.',
      orderAr: 'رتّب جملة توزيع الوقت: الفاعل Ich أولًا والفعل muss ثانيًا والمصدر teilen أخيرًا.',
      orderPromptAr: 'رتّب الجملة واضعًا الفاعل أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Ich في الموضع الأول.', 'المصدر teilen يغلق الجملة بعد muss.'],
      writing: {
        zeigt: 'Zeitmanagement in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: هيكلًا قبل النص بفعل مفرد، ومتنًا بحجتين وبفعل مفرد، وخاتمة جاهزة بفعل مفرد، وفحصًا أخيرًا بفعل ثانٍ، وتقسيمًا للوقت بمصدر أخير.',
        hinweise: ['الخطة توفّر ما تضيّعه إعادة الكتابة.', 'الدقائق الأخيرة للقواعد لا للأفكار.'],
        prompt: 'اكتب جمل الكتابة على الوقت الخمس المستهدفة من الذاكرة.',
        promptDe: 'Ich plane die Gliederung vor dem Text. · Der Hauptteil trägt zwei Argumente. · Den Schluss habe ich im Kopf. · Nach dem Schreiben prüfe ich Verbzweit. · Ich muss die Zeit in Blöcke teilen.',
        points: ['Ich plane die Gliederung vor dem Text.', 'Der Hauptteil trägt zwei Argumente.', 'Den Schluss habe ich im Kopf.', 'Nach dem Schreiben prüfe ich Verbzweit.', 'Ich muss die Zeit in Blöcke teilen.'],
        minWords: 31,
        frage: 'اكتب جمل الكتابة على الوقت الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Ich plane die Gliederung vor dem Text. Der Hauptteil trägt zwei Argumente. Den Schluss habe ich im Kopf. Nach dem Schreiben prüfe ich Verbzweit. Ich muss die Zeit in Blöcke teilen.',
      summaryDe: 'Ich plane die Gliederung vor dem Text. Der Hauptteil trägt zwei Argumente. Den Schluss habe ich im Kopf. Nach dem Schreiben prüfe ich Verbzweit. Ich muss die Zeit in Blöcke teilen.',
      summaryAr: 'الكتابة على الوقت خطة: هيكل أولًا، وحجتان، وختام جاهز، وفحص أخير.',
      summaryRecap: 'خطة ونص ومراجعة',
    }),

  U('b2-w14', 'التعليق: ادعاء بلا شاهد', 'Kommentar: Behauptung ohne Beleg',
    'Am Ende trennst du Behauptung und Beleg — in fünf Sätzen',
    'في النهاية تفصل بين الادعاء والشاهد في التعليق في خمس جمل.',
    [
      ['Gedruckt heißt nicht wahr.', 'يرفض برهان الطباعة', 'الصفة الإخبارية بلا نهاية: wahr', 'Gedruckt heißt nicht wahres.', 'الصفة بلا نهاية: wahr'],
      ['Nicht jedes Beispiel trägt.', 'يفحص حمل الشاهد للمثال', 'الفاعل مفرد: trägt لا tragen', 'Nicht jedes Beispiel tragen.', 'المفرد: trägt'],
      ['Der Autor unterstellt, dass alle zustimmen.', 'يسمّي افتراض الكاتب لا خبره', 'الفعل مع Autor مفرد: unterstellt', 'Der Autor unterstellen, dass alle zustimmen.', 'المفرد: unterstellt'],
      ['Der Witz beweist es nicht.', 'يميز النبرة من البرهان', 'الفاعل مفرد: beweist لا beweisen', 'Der Witz beweisen es nicht.', 'المفرد: beweist']
    ],
    [
      ['Gedruckt heißt nicht wahr.', 'المطبوع لا يعني الصحيح', 'Gedruckt heißt nicht wahres.', 'الصفة الإخبارية بلا نهاية.', 'nicht'],
      ['Nicht jedes Beispiel trägt.', 'ليس كل مثال يسند', 'Nicht jedes Beispiel tragen.', 'الفاعل مفرد: trägt.', 'trägt'],
      ['Der Autor unterstellt, dass alle zustimmen.', 'يفترض الكاتب أن الجميع يوافق', 'Der Autor unterstellen, dass alle zustimmen.', 'الفاعل مفرد: unterstellt.', 'unterstellt'],
      ['Der Witz beweist es nicht.', 'النكتة لا تُثبت', 'Der Witz beweisen es nicht.', 'الفاعل مفرد: beweist.', 'beweist']
    ],
    'Gedruckt heißt nicht wahr. Der Meinungsartikel lebt von der Grundthese. Nicht jedes Gegenbeispiel trägt die Beweislast. Die Zuspitzung ersetzt den Beweisgang nicht. Die Häme verrät die Absicht des Verfassers. Die Kommentarform verrät die Rubrik und den Anlass. Der Hintergrund, die Vorgeschichte und die Einordnung fehlen oft. Die Auslegung bleibt eine Lesart, keine Wahrheit. Die Stoßrichtung zeigt der Blickwinkel, nicht die Sichtweise. Die Zwischenzeile trägt die Pointe, das Wortspiel den Spott.',
    'Ich muss Behauptung und Beleg trennen.',
    'Wiederhole morgen die fünf Sätze: Gedruckt heißt nicht wahr. Nicht jedes Beispiel trägt. Der Autor unterstellt, dass alle zustimmen. Der Witz beweist es nicht. Ich muss Behauptung und Beleg trennen. Die Kommentarform verrät die Rubrik und den Anlass. Der Hintergrund fehlt, die Vorgeschichte auch. Die Stoßrichtung zeigt der Blickwinkel. Das Wortspiel trägt den Spott, die Zwischenzeile die Pointe. Die Auslegung bleibt eine Lesart. Du markierst die Behauptung mit einem Stift. Zur Kommentaranalyse gehört auch diese Einordnung.',
    'غدًا أعد جمل تحليل التعليق الخمس وعلّم كل ادعاء بلا شاهد.',
    {
      factFamilies: ['deklination', 'konjugation', 'konjugation', 'konjugation'],
      imitateNearMiss: 'nichts',
      transformHint: 'في الجملة الختامية المنهج كله: Ich muss Behauptung und Beleg trennen — المصدر trennen يغلق الجملة بعد muss.',
      orderSentence: 'Ich muss Behauptung und Beleg trennen.',
      checkOrderSentence: 'Nicht jedes Beispiel trägt.',
      orderAr: 'رتّب جملة المنهج: الفاعل Ich أولًا والفعل muss ثانيًا والمصدر trennen أخيرًا.',
      orderPromptAr: 'رتّب الجملة واضعًا الفاعل أولًا والفعل في الموضع الثاني.',
      orderHints: ['الفاعل Ich في الموضع الأول.', 'المصدر trennen يغلق الجملة بعد muss.'],
      writing: {
        zeigt: 'Kommentarlesen in fünf Sätzen',
        erklaerung: 'اكتب خمس جمل: ادعاءً بلا نهاية للصفة، ومثالًا يُفحص حمله، وافتراضًا مسلّمًا به بصيغة dass، ونبرة لا تثبت، وفصلًا بين الادعاء والشاهد.',
        hinweise: ['ابحث عن الأطروحة في الجمل الثلاث الأولى.', 'الحدّة والسخرية ليستا دليلًا.'],
        prompt: 'اكتب جمل تحليل التعليق الخمس المستهدفة من الذاكرة.',
        promptDe: 'Gedruckt heißt nicht wahr. · Nicht jedes Beispiel trägt. · Der Autor unterstellt, dass alle zustimmen. · Der Witz beweist es nicht. · Ich muss Behauptung und Beleg trennen.',
        points: ['Gedruckt heißt nicht wahr.', 'Nicht jedes Beispiel trägt.', 'Der Autor unterstellt, dass alle zustimmen.', 'Der Witz beweist es nicht.', 'Ich muss Behauptung und Beleg trennen.'],
        minWords: 25,
        frage: 'اكتب جمل تحليل التعليق الخمس كاملة.'
      },
      speakAr: 'سجّل ثلاثين ثانية وقل الجمل الخمس: Gedruckt heißt nicht wahr. Nicht jedes Beispiel trägt. Der Autor unterstellt, dass alle zustimmen. Der Witz beweist es nicht. Ich muss Behauptung und Beleg trennen.',
      summaryDe: 'Gedruckt heißt nicht wahr. Nicht jedes Beispiel trägt. Der Autor unterstellt, dass alle zustimmen. Der Witz beweist es nicht. Ich muss Behauptung und Beleg trennen.',
      summaryAr: 'في التعليق: أطروحة تسري، وادعاء يُفحص، ولا إثبات بالحدّة.',
      summaryRecap: 'ادعاء وشاهد',
    }),

  U('b2-w15', 'نقاش: بيئة', 'Umwelt diskutieren',
    'Am Ende trennst du Maßnahme und Wirkung',
    'في النهاية تفصل الإجراء عن الأثر.',
    [
      ['die Maßnahme', 'الإجراء يُسمّى', 'الشعار ليس إجراءً', 'wir müssen etwas tun', 'الإجراء محدد'],
      ['die Wirkung', 'الأثر يُسأل', 'النية ليست أثرًا', 'die Absicht reicht', 'الأثر غير النية'],
      ['wer zahlt', 'الكلفة تُسمّى', 'الحل بلا كلفة ناقص', 'das kostet nichts und gilt für alle', 'الكلفة جزء من الحجة'],
      ['die Grenze', 'أين يفشل الإجراء', 'النجاح الكلي كسل', 'die Maßnahme löst alles', 'الحد لازم']
    ],
    [
      ['Die Maßnahme ist die Mülltrennung.', 'الإجراء هو فرز النفايات', 'Wir müssen etwas tun', 'الإجراء محدد', 'Maßnahme'],
      ['Die Absicht reicht nicht.', 'النية لا تكفي', 'Die Absicht reicht', 'الأثر غير النية', 'reicht'],
      ['Die Kosten gehören zur Frage.', 'الكلفة جزء من السؤال', 'Das kostet nichts und gilt für alle', 'الكلفة تُسمّى', 'Kosten'],
      ['Die Maßnahme löst nicht alles.', 'الإجراء لا يحل كل شيء', 'Die Maßnahme löst alles', 'الحد لازم', 'alles']
    ],
    'Die Maßnahme ist die Mülltrennung, die Wirkung bleibt klein. Die Absicht reicht nicht, die Kosten gehören zur Frage. Die Solarzelle und die Windkraft ersetzen die Kohle langsam. Das Tempolimit und der Nahverkehr sparen mehr als jede Kampagne. Die Kreislaufwirtschaft braucht Rohstoffe und Ressourcen. Das Fahrrad, das Carsharing und die Mitfahrgelegenheit ersetzen keine Bahn.',
    'Die Kosten gehören zur Frage.',
    'Nenne morgen Maßnahme, Wirkung und Grenze.',
    'غدًا سمِّ إجراءً وأثرًا وحدًا.'),

  U('b2-w16', 'سماع أخبار', 'Nachrichten',
    'Am Ende trennst du Meldung und Kommentar',
    'في النهاية تفصل الخبر عن التعليق.',
    [
      ['die Meldung', 'الخبر ما حدث', 'التعليق ما يُراد', 'der Kommentar ist die Meldung', 'التعليق ليس خبرًا'],
      ['wer spricht', 'المتكلم يُعلَّم', 'الصوت ليس حقيقة', 'die Stimme beweist es', 'المتكلم يُذكر'],
      ['Zahl prüfen', 'الرقم يُراجع', 'الرقم الكبير قد يكون عنوانًا', 'die große Zahl reicht', 'الرقم يُفحص'],
      ['einmal reicht nicht immer', 'إن سُمح بسماع ثانٍ فللسؤال', 'لا للراحة', 'ich höre zum Genuss', 'السماع يخدم السؤال']
    ],
    [
      ['Die Meldung ist nicht der Kommentar.', 'الخبر ليس التعليق', 'Der Kommentar ist die Meldung', 'التعليق ليس خبرًا', 'Meldung'],
      ['Wer spricht, wird notiert.', 'المتكلم يُدوَّن', 'Die Stimme beweist es', 'المتكلم يُذكر', 'spricht'],
      ['Die große Zahl reicht nicht.', 'الرقم الكبير لا يكفي', 'Die große Zahl reicht', 'الرقم يُفحص', 'Zahl'],
      ['Ich höre zur Frage.', 'أسمع من أجل السؤال', 'Ich höre zum Genuss', 'السماع يخدم السؤال', 'Frage']
    ],
    'Die Meldung ist nicht der Kommentar, die Nachrichtensendung trennt beides nicht immer. Die Moderation führt durch die Sendung, der Korrespondent berichtet aus dem Ausland, die Korrespondentin aus dem Inland. Die Quelle bleibt im Beitrag oft ungenannt; die Agentur liefert den Text der Nachrichtenagentur. Ich höre die Sendung zweimal, wenn die Aufnahme es erlaubt, und notiere die Kernaussage. Der O-Ton ist kein Beweis, er ist eine Stimme; die Zusammenfassung am Ende bleibt die Übersicht. Die Wiederholung am nächsten Tag ändert die Meldung nicht, das Interview danach schon. Am Morgen prüfe ich die Ankündigung im Programm: Kanal, Sendetermin und Mediathek, danach der Abruf am Abend. Die Einschaltquote sagt nichts über die Hörerschaft, das Publikum, die Zielgruppe und die Umfrage sagen mehr. Die Übertragung einer Podiumsdiskussion, einer Talkrunde oder eines Streitgesprächs dauert länger als die Debatte im Studio. Der Nachrichtensprecher liest keine Titelseite; der Zeitungsartikel, der Leserbrief und das Abonnement tragen die Auflage. Die Statistik und die Grafik bleiben Hintergrund, bis der Faktencheck sie prüft.',
    'Die große Zahl reicht nicht.',
    'Trenne morgen eine Meldung von einem Kommentar.',
    'غدًا افصل خبرًا عن تعليق.'),

  U('b2-w17', 'ورشة: رسالة رسمية', 'Formeller Brief B2',
    'Am Ende schreibst du Anlass, Bitte und Frist',
    'في النهاية تكتب المناسبة والطلب والأجل.',
    [
      ['der Anlass', 'المناسبة في السطر الأول', 'المقدمة الطويلة تضيّع', 'drei Höflichkeitssätze vor dem Anlass', 'المناسبة أولًا'],
      ['die Bitte', 'الطلب محدد', 'العتاب ليس طلبًا', 'ich bin enttäuscht als einzige Bitte', 'الطلب فعل'],
      ['die Frist', 'الأجل يُذكر', 'بلا أجل يبقى الطلب مفتوحًا', 'irgendwann reicht', 'الأجل محدد'],
      ['Sie bleiben Sie', 'المقام Sie حتى في الغضب', 'du يكسر الرسالة', 'du musst das sofort tun', 'الرسمي Sie']
    ],
    [
      ['Der Anlass steht im ersten Satz.', 'المناسبة في الجملة الأولى', 'Drei Höflichkeitssätze vor dem Anlass', 'المناسبة أولًا', 'Anlass'],
      ['Ich bitte um eine Antwort bis Freitag.', 'أطلب جوابًا حتى الجمعة', 'Ich bin enttäuscht als einzige Bitte', 'الطلب محدد', 'bitte'],
      ['Die Frist ist Freitag.', 'الأجل الجمعة', 'Irgendwann reicht', 'الأجل محدد', 'Freitag'],
      ['Sie bleiben Sie.', 'المخاطبة تبقى Sie', 'Du musst das sofort tun', 'الرسمي Sie', 'Sie']
    ],
    'Der Briefkopf nennt Absender und Anschrift, die Betreffzeile den Vorgang, das Aktenzeichen die Sache. Die Anrede lautet Sehr geehrte Damen und Herren, die Grußformel bleibt kurz; die Höflichkeitsformel ersetzt kein Argument, die Floskel ersetzt keinen Beleg. Die Sachlichkeit bleibt, der Ton bleibt verbindlich, die Verbindlichkeit ist keine Unterwürfigkeit. Die Schriftform ist Pflicht, die Textform genügt nicht immer. Die Zuständigkeit liegt beim Sachbearbeiter im Amt; die Amtssprache der Verwaltung und die Bearbeitung des Vorgangs dauern. Der Bearbeitungsstand steht im Betreff; eine Fristverlängerung oder ein Aufschub braucht einen Grund. Gegen den Bescheid hilft das Rechtsmittel, gegen die Mahnung die Erinnerung an die Widerspruchsfrist. Die Zahlung braucht ein Zahlungsziel: der Zahlungseingang erfolgt per Überweisung auf das Konto, die Bankverbindung steht im Briefkopf. Die Vertragsnummer und die Kündigungsfrist gehören in jeden Antrag; der Verstoß, der Anspruch, die Gewährleistung und die Haftung sind Sache der Schadensmeldung an die Versicherung. Die Deckung prüft die Prüfung. Die Durchschrift bleibt in der Ablage im Ordner; der Postweg endet mit der Sendungsnummer, das Anschreiben mit der Empfangsbestätigung. Die Wiedervorlage, die Nachfrage, die Mahnstufe und der Verzug mit Verzugszinsen und Ratenzahlung stehen am Ende; eine Vollmacht braucht die Beglaubigung.',
    'Die Frist ist Freitag.',
    'Schreibe morgen Anlass, Bitte und Frist.',
    'غدًا اكتب مناسبة وطلبًا وأجلًا.'),

  U('b2-w18', 'تقنية: تحدّث', 'Sprechtechnik',
    'Am Ende nutzt du drei Minuten mit Gliederung',
    'في النهاية تستعمل ثلاث دقائق بهيكل.',
    [
      ['drei Minuten', 'الوقت حد', 'عشر دقائق ليست أفضل', 'länger ist besser', 'الحد ثلاث'],
      ['Gliederung nennen', 'الهيكل يُقال', 'المستمع يحتاج خريطة', 'ich rede ohne Karte', 'الهيكل يُعلَن'],
      ['neu formulieren', 'التلعثم يُعاد لا يُكرَّر صمتًا', 'الصمت الطويل يكلف', 'ich schweige bis es kommt', 'الإعادة أولى'],
      ['das Wort bitten', 'طلب الكلام إطار', 'المقاطعة ليست دخولًا', 'ich falle ins Wort', 'طلب الكلام أولى']
    ],
    [
      ['Ich habe drei Minuten, nicht zehn.', 'عندي ثلاث دقائق لا عشر', 'Länger ist besser', 'الحد ثلاث', 'drei'],
      ['Ich nenne die Gliederung.', 'أذكر الهيكل', 'Ich rede ohne Karte', 'الهيكل يُعلَن', 'nenne'],
      ['Wenn ich stocke, formuliere ich neu.', 'إذا تلعثمت أعيد الصياغة', 'Ich schweige bis es kommt', 'الإعادة أولى', 'formuliere'],
      ['Ich bitte um das Wort.', 'أطلب الكلام', 'Ich falle ins Wort', 'طلب الكلام أولى', 'bitte']
    ],
    'Ich habe drei Minuten, nicht zehn. Die Sprechtechnik beginnt beim Atem: der Brustkorb bleibt ruhig, das Zwerchfell arbeitet, die Kehle bleibt offen, der Kehlkopf tief. Zunge, Gaumen, Lippe und Kiefer bilden die Laute; die Mundöffnung entscheidet über die Klarheit. Die Tonhöhe bleibt tief, das Tempo ruhig, die Geschwindigkeit gleichmäßig. Eine Sinnpause und eine Atempause trennen die Gedanken; der Satzakzent trägt das Schlüsselwort. Das Füllwort und die Fülllaute streicht der Merksatz, das Räuspern, das Nuscheln und jede Stockung verschwinden mit der Sprechprobe; die Wiederaufnahme des Satzes ist besser als der Abbruch. Die Videoaufnahme oder die Aufzeichnung zeigt, was die Selbstwahrnehmung nicht merkt; die Resonanz der Zuhörer ist die ehrlichste Rückmeldung. Die Generalprobe braucht eine Zeitmessung, eine Minutenmarke und einen Zeitrahmen; bei einer Zeitüberschreitung hilft die Verkürzung, die Streichung oder die Kürzung. Zur Nachbereitung gehören Sitzordnung, Raum und Akustik: das Mikrofon und der Beamer gehören zur Technik. Der Leitfaden, die Zielsetzung und die Kernbotschaft bleiben sichtbar; die Überzeugungskraft wächst mit der Präsenz.',
    'Wenn ich stocke, formuliere ich neu.',
    'Sprich morgen drei Minuten mit drei Teilen.',
    'غدًا تحدّث ثلاث دقائق بثلاثة أجزاء.'),

  U('b2-w19', 'نقاش: تعليم', 'Bildung',
    'Am Ende vergleichst du zwei Wege mit einer Grenze',
    'في النهاية تقارن مسارين بحد.',
    [
      ['zwei Wege', 'مساران لا عشرة', 'الكثرة تضيّع الحكم', 'zehn Modelle ohne Satz', 'مساران'],
      ['wer profitiert', 'من يستفيد يُسمّى', 'الجميع كلمة كسولة', 'alle profitieren gleich', 'المستفيد محدد'],
      ['wer zahlt', 'من يدفع يُسمّى', 'المجاني قد لا يكون مجانيًا', 'das ist kostenlos für alle', 'الكلفة تُسأل'],
      ['die Grenze', 'أين لا يصلح النموذج', 'التعميم يخسر', 'das gilt für jedes Land', 'الحد لازم']
    ],
    [
      ['Zwei Wege reichen.', 'مساران يكفيان', 'Zehn Modelle ohne Satz', 'مساران لا عشرة', 'Zwei'],
      ['Nicht alle profitieren gleich.', 'ليس الجميع يستفيد بالتساوي', 'Alle profitieren gleich', 'المستفيد محدد', 'gleich'],
      ['Wer zahlt, gehört zur Frage.', 'من يدفع جزء من السؤال', 'Das ist kostenlos für alle', 'الكلفة تُسأل', 'zahlt'],
      ['Das gilt nicht für jedes Land.', 'هذا لا يسري على كل بلد', 'Das gilt für jedes Land', 'الحد لازم', 'nicht']
    ],
    'Zwei Wege reichen, zehn Modelle ohne Satz nicht. Die Grundschule endet mit der Empfehlung, danach teilt das Schulsystem die Jahrgangsstufe. Die Schulpflicht gilt, der Schulbesuch nicht immer; die Abbrecherquote bleibt. Zur Allgemeinbildung gehört mehr als der Schulabschluss, und der Bildungsabschluss entscheidet über den Ausbildungsplatz. Die Berufsausbildung führt über den Betrieb zur Kammer: Ausbildungsvergütung, Geselle, Meister, Übernahme. Die Erziehung beginnt in der Familie, die Pädagogik und der Erzieher arbeiten mit der Ganztagsschule, der Betreuung und der Schulzeit. Die Kernkompetenz trägt mehr als die Vergleichsgruppe; die Leistungsmessung der Schulleistungsstudie misst, was sie messen kann. Die Bildungsausgaben und der Bildungshaushalt entscheiden über die Schulausstattung; die Bildungsreform braucht Zeit. Die Integration gelingt mit der Sprachförderung, die Chancengerechtigkeit mit früher Förderung. Der Fachkräftebedarf trifft auf den Meister und die Fachkraft, die längst da sind; die Zuwanderung gehört zur Rechnung. Wer zahlt, gehört zur Frage: die Studiengebühr entscheidet über den Zugang wie die Wohnung.',
    'Wer zahlt, gehört zur Frage.',
    'Vergleiche morgen zwei Bildungswege mit einer Grenze.',
    'غدًا قارن مسارين تعليميين بحد.'),

  U('b2-w20', 'تحليل موقفين', 'Pro und Kontra',
    'Am Ende stellst du beide Seiten vor dem Urteil dar',
    'في النهاية تعرض الجانبين قبل الحكم.',
    [
      ['beide Seiten', 'الجانبان قبل الحكم', 'الحكم أولًا يعمي', 'ich urteile zuerst', 'الجانبان أولًا'],
      ['das stärkere Argument', 'الحجة الأقوى تُسمّى', 'التساوي الكاذب ضعف', 'beide Seiten sind immer gleich', 'القوة تُسمّى'],
      ['ein Beispiel je Seite', 'مثال لكل جانب', 'الشعار لا يكفي', 'Pro ist gut, Kontra ist schlecht', 'المثال يسند'],
      ['das Urteil am Schluss', 'الحكم في الآخر', 'الحكم في الأول يُغلق القراءة', 'das Urteil steht in der ersten Zeile', 'الحكم أخيرًا']
    ],
    [
      ['Zuerst beide Seiten.', 'أولًا الجانبان', 'Ich urteile zuerst', 'الجانبان قبل الحكم', 'Zuerst'],
      ['Nicht beide Seiten sind gleich stark.', 'الجانبان ليسا بنفس القوة', 'Beide Seiten sind immer gleich', 'القوة تُسمّى', 'stark'],
      ['Jede Seite braucht ein Beispiel.', 'كل جانب يحتاج مثالًا', 'Pro ist gut, Kontra ist schlecht', 'المثال يسند', 'Beispiel'],
      ['Das Urteil steht am Schluss.', 'الحكم في الآخر', 'Das Urteil steht in der ersten Zeile', 'الحكم أخيرًا', 'Schluss']
    ],
    'Zuerst beide Seiten, dann das Urteil. Die Gegenüberstellung von These und Gegenthese braucht die Gewichtung: nicht jede Priorität ist gleich. Der Gegensatz bleibt sichtbar, die Gegenprobe prüft die Folgerichtigkeit, die Stichhaltigkeit, die Haltbarkeit und die Tragfähigkeit. Die Parteilichkeit ist erlaubt, die Neutralität nicht Pflicht; die Distanz zur Sache bleibt, die Rhetorik und die Überredung ersetzen kein Gegenargument. Die Polemik, die Stimmungsmache, die Plattitüde und die Unterstellung stehen auf der Liste der Schwächen, nicht der Beweise. Die Tatsachenbehauptung und die Meinungsäußerung trennt der Prüfstein: die Beweislast, die Belegpflicht und die Kontrollfrage. Der Kurzschluss, die Fehlannahme und der Selbstwiderspruch sind Auslassungen; die Ambivalenz und die Dialektik sind keine. Zwischen den Seiten liegt die Spannung: der Interessenkonflikt, die Interessenlage, der Nutzen, der Schaden, die Nebenwirkung und die Nebenfolge. Die Ausgangslage, die Sachlage und die Faktenlage sind nicht dasselbe; die Randbedingung, die Voraussetzung und die Rahmenbedingung ändern die Antwort. Die Gegenfrage, die Rückfrage und die Zwischenfrage halten den Text offen, bis die Beurteilung und die Abwägung am Schluss stehen.',
    'Nicht beide Seiten sind gleich stark.',
    'Stelle morgen beide Seiten dar, dann urteile.',
    'غدًا اعرض الجانبين ثم احكم.')
];

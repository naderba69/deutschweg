/* Deutschweg — P3.2 lexical layer, B1 production unit 13:
   b1-u2-l5 … b1-u2-l8, b1-u3-l1, b1-u3-l2. Same row format as vocab-b1-11.js. */

module.exports = {
  'b1-u2-l5': {
    items: [
      ['als', '—', 'عندما (مرة واحدة في الماضي)', 'Als ich klein war, lebte ich in Sfax.', 'Wenn ich klein war, lebte ich in Sfax.', 'حدث واحد في الماضي ← als؛ wenn للتكرار أو الحاضر.', 'lexik-kollokation'],
      ['wenn', '—', 'عندما · كلما (تكرار أو حاضر)', 'Wenn ich müde bin, trinke ich Tee.', 'Als ich müde bin, trinke ich Tee.', 'الحاضر والعادة ← wenn؛ als للماضي مرة واحدة.', 'lexik-kollokation'],
      ['wann', '—', 'متى (سؤال)', 'Weißt du, wann der Kurs beginnt?', 'Weißt du, wenn der Kurs beginnt?', 'السؤال عن الزمن ← wann؛ wenn شرطية أو زمنية لا سؤالية.', 'lexik-kollokation'],
      ['immer wenn', '—', 'كلما', 'Immer wenn es regnet, nehme ich den Bus.', 'Immer als es regnet, nehme ich den Bus.', 'التكرار ← immer wenn؛ als لا تتكرر.', 'lexik-kollokation'],
      ['sobald', '—', 'حالما', 'Sobald ich ankomme, rufe ich dich an.', 'Sobald ich ankomme, ich rufe dich an.', 'بعد الفرعية المتقدمة يأتي الفعل مباشرة: rufe ich.', 'wortstellung'],
      ['bevor', '—', 'قبل أن', 'Bevor ich schlafen gehe, lese ich.', 'Bevor ich gehe schlafen, lese ich.', 'في جملة bevor يقف الفعل المصرّف في الآخر: schlafen gehe.', 'wortstellung'],
      ['nachdem', '—', 'بعد أن', 'Nachdem ich gegessen hatte, ging ich spazieren.', 'Nachdem ich gegessen habe, ging ich spazieren.', 'nachdem مع الماضي يحتاج Plusquamperfekt: gegessen hatte.', 'konjugation'],
      ['seitdem', '—', 'منذ أن', 'Seitdem ich hier wohne, lerne ich Deutsch.', 'Seitdem ich wohne hier, lerne ich Deutsch.', 'seitdem أداة فرعية: الفعل في الآخر: hier wohne.', 'wortstellung'],
      ['bis', '—', 'حتى (أن)', 'Warte, bis ich fertig bin.', 'Warte, bis ich bin fertig.', 'بعد bis الفعل في الآخر: fertig bin.', 'wortstellung'],
      ['solange', '—', 'ما دام', 'Solange es hell ist, bleiben wir draußen.', 'Solange es ist hell, bleiben wir draußen.', 'solange أداة فرعية: ist في الآخر.', 'wortstellung'],
      ['der Zeitpunkt', 'die Zeitpunkte', 'اللحظة · التوقيت', 'Zu diesem Zeitpunkt wusste ich nichts.', 'In diesem Zeitpunkt wusste ich nichts.', 'zu diesem Zeitpunkt تعبير ثابت، لا in.', 'präposition'],
      ['das Ereignis', 'die Ereignisse', 'الحدث', 'Die Hochzeit war ein großes Ereignis.', 'Die Hochzeit war eine große Ereignis.', 'Ereignis محايد (-nis): ein großes Ereignis.', 'genus'],
      ['der Unfall', 'die Unfälle', 'الحادث', 'Als ich den Unfall sah, rief ich die Polizei.', 'Wenn ich den Unfall sah, rief ich die Polizei.', 'حدث واحد في الماضي ← als.', 'lexik-kollokation'],
      ['die Hochzeit', 'die Hochzeiten', 'الزفاف', 'Bei unserer Hochzeit regnete es.', 'Bei unsere Hochzeit regnete es.', 'bei + داتيف: bei unserer Hochzeit.', 'kasus'],
      ['der Umzug', 'die Umzüge', 'الانتقال السكني', 'Nach dem Umzug fühlte ich mich fremd.', 'Nach den Umzug fühlte ich mich fremd.', 'nach + داتيف: nach dem Umzug.', 'kasus'],
      ['der Abschluss', 'die Abschlüsse', 'التخرج · الشهادة النهائية', 'Nach dem Abschluss suchte ich Arbeit.', 'Nachdem Abschluss suchte ich Arbeit.', 'nach dem (حرف جر وأداة) ≠ nachdem (أداة فرعية تحتاج فعلًا).', 'orthographie'],
      ['einschlafen', 'schläft ein · schlief ein · ist eingeschlafen', 'يغفو', 'Als ich einschlief, war es schon hell.', 'Als ich eingeschlafen, war es schon hell.', 'في Präteritum: einschlief؛ eingeschlafen مشارك يحتاج war.', 'konjugation', 'einschlief'],
      ['aufwachen', 'wacht auf · wachte auf · ist aufgewacht', 'يستيقظ', 'Wenn ich aufwache, trinke ich zuerst Wasser.', 'Wenn ich aufwache, ich trinke zuerst Wasser.', 'بعد الفرعية المتقدمة: trinke ich.', 'wortstellung', 'aufwache'],
      ['sich verletzen', 'verletzt sich · verletzte sich · hat sich verletzt', 'يُصاب', 'Als er sich verletzte, war niemand da.', 'Als er verletzte, war niemand da.', 'sich verletzen انعكاسي: er sich verletzte.', 'deklination', 'verletzte'],
      ['jedes Mal', '—', 'في كل مرة', 'Jedes Mal, wenn ich komme, schläft er.', 'Jedes Mal, als ich komme, schläft er.', 'jedes Mal + wenn للتكرار؛ als لا تتكرر.', 'lexik-kollokation', 'Mal']
    ],
    tricks: [
      { trick: 'als مرة واحدة في الماضي، wenn لكل الباقي', wie: 'Als ich 18 war … (مرة) · Wenn ich müde bin … (عادة) · Wenn ich Zeit habe … (مستقبل).', warum: 'العربية تقول «عندما» للجميع، والألمانية تفصل الحدث الواحد الماضي عن كل شيء آخر.', anchor: 'Als ich klein war, lebte ich in Sfax.' },
      { trick: 'wann للسؤال فقط، ولو كان غير مباشر', wie: 'Wann kommst du? · Ich weiß nicht, wann du kommst. — ولا wann بعد immer أو jedes Mal.', warum: 'الفرنسية quand تجمع المعاني الثلاثة، فيضع المتعلم wann حيث تلزم wenn.', anchor: 'Weißt du, wann der Kurs beginnt?' },
      { trick: 'nachdem يطلب زمنًا أبعد بدرجة', wie: 'Nachdem ich gegessen hatte, ging ich. (Plusquamperfekt ثم Präteritum)', warum: 'الجملة الفرعية تسبق الرئيسية زمنيًا، فتحتاج درجة أبعد في الماضي، وهذا ما يفحصه B1.', anchor: 'Nachdem ich gegessen hatte, ging ich spazieren.' }
    ],
    order: [
      { satz: 'Als ich klein war, | lebten | wir in Sfax.', ar: 'عندما كنت صغيرًا عشنا في صفاقس.' },
      { satz: 'bevor | ich schlafen | gehe.', clause: 'sub', ar: 'قبل أن أذهب إلى النوم (الجملة الفرعية وحدها)' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن حياتك: ثلاثة أحداث وقعت مرة واحدة بـ als (الطفولة، الانتقال، التخرج) وعادتان بـ wenn أو immer wenn.',
      promptDe: 'Als ich … war, … · Als wir nach … zogen, … · Wenn ich müde bin, … · Immer wenn …',
      points: ['ثلاث جمل als في الماضي', 'جملتا wenn للعادة', 'الفعل في آخر الفرعية ثم الفعل الرئيسي مباشرة', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'wortstellung'
    }
  },

  'b1-u2-l6': {
    items: [
      ['ob', '—', 'هل · إنْ (في السؤال غير المباشر)', 'Ich weiß nicht, ob der Zug pünktlich ist.', 'Ich weiß nicht, wenn der Zug pünktlich ist.', 'سؤال نعم/لا غير المباشر ← ob، لا wenn (قياس على si الفرنسية).', 'lexik-kollokation'],
      ['die Auskunft', 'die Auskünfte', 'الاستعلام · المعلومة', 'Können Sie mir Auskunft geben, wo der Bahnhof ist?', 'Können Sie mir Auskunft geben, wo ist der Bahnhof?', 'في السؤال غير المباشر يقف الفعل في الآخر: wo der Bahnhof ist.', 'wortstellung'],
      ['sich erkundigen nach', 'erkundigt sich · erkundigte sich · hat sich erkundigt', 'يستفسر عن', 'Ich erkundige mich, wann der Kurs anfängt.', 'Ich erkundige mich, wann fängt der Kurs an.', 'wann تجرّ الفعل إلى الآخر بلا انفصال: der Kurs anfängt.', 'wortstellung', 'erkundige'],
      ['der Schalter', 'die Schalter', 'شبّاك التذاكر', 'Fragen Sie am Schalter, ob es noch Tickets gibt.', 'Fragen Sie am Schalter, ob gibt es noch Tickets.', 'بعد ob الفعل آخرًا: ob es noch Tickets gibt.', 'wortstellung'],
      ['die Öffnungszeiten', 'nur Plural', 'أوقات الفتح', 'Wissen Sie, wie die Öffnungszeiten sind?', 'Wissen Sie, wie sind die Öffnungszeiten?', 'wie ثم الفاعل ثم الفعل في الآخر: wie die Öffnungszeiten sind.', 'wortstellung'],
      ['die Abfahrt', 'die Abfahrten', 'المغادرة · الانطلاق', 'Weißt du, wann die Abfahrt ist?', 'Weißt du, wann der Abfahrt ist?', 'Abfahrt مؤنثة: die Abfahrt، مثل die Fahrt.', 'genus'],
      ['die Ankunft', 'die Ankünfte', 'الوصول', 'Sag mir, wann deine Ankunft ist.', 'Sag mir, wann deine Ankunft ist?', 'السؤال غير المباشر بعد أمر أو خبر ينتهي بنقطة لا بعلامة استفهام.', 'orthographie'],
      ['das Gleis', 'die Gleise', 'الرصيف (رقم السكة)', 'Können Sie mir sagen, von welchem Gleis der Zug fährt?', 'Können Sie mir sagen, von welchem Gleis fährt der Zug?', 'الفعل fährt في الآخر بعد welchem Gleis.', 'wortstellung'],
      ['die Verbindung', 'die Verbindungen', 'الرحلة (قطار) · الاتصال', 'Ich frage, ob es eine direkte Verbindung gibt.', 'Ich frage, ob es gibt eine direkte Verbindung.', 'gibt في الآخر: ob es eine direkte Verbindung gibt.', 'wortstellung'],
      ['der Anschluss', 'die Anschlüsse', 'القطار الموصل · الربط', 'Weißt du, ob wir den Anschluss schaffen?', 'Weißt du, ob wir schaffen den Anschluss?', 'schaffen في الآخر: ob wir den Anschluss schaffen.', 'wortstellung'],
      ['nachfragen', 'fragt nach · fragte nach · hat nachgefragt', 'يستفسر مجددًا', 'Ich frage nach, ob der Termin noch gilt.', 'Ich nachfrage, ob der Termin noch gilt.', 'nachfragen منفصل في الرئيسية: frage … nach.', 'wortstellung', 'nach'],
      ['gelten', 'gilt · galt · hat gegolten', 'يسري · صالح', 'Ich weiß nicht, ob das Ticket noch gilt.', 'Ich weiß nicht, ob das Ticket noch geltet.', 'gelten قوي: gilt في المضارع.', 'konjugation', 'gilt'],
      ['die Ermäßigung', 'die Ermäßigungen', 'التخفيض', 'Ich möchte wissen, ob es eine Ermäßigung gibt.', 'Ich möchte wissen, ob es eine Ermäßigung gibt?', 'الجملة خبرية فتنتهي بنقطة رغم السؤال داخلها.', 'orthographie'],
      ['die Gebühr', 'die Gebühren', 'الرسم', 'Weißt du, wie hoch die Gebühr ist?', 'Weißt du, wie viel hoch die Gebühr ist?', 'wie hoch (كم يبلغ)؛ لا wie viel hoch.', 'lexik-kollokation'],
      ['sich melden', 'meldet sich · meldete sich · hat sich gemeldet', 'يتصل · يردّ', 'Ich frage, warum er sich nicht gemeldet hat.', 'Ich frage, warum er sich nicht hat gemeldet.', 'في الفرعية: المشارك ثم المساعد: gemeldet hat.', 'wortstellung', 'gemeldet'],
      ['beantworten', 'beantwortet · beantwortete · hat beantwortet', 'يجيب عن', 'Können Sie mir beantworten, ob das möglich ist?', 'Können Sie mir beantworten, ob ist das möglich?', 'بعد ob: الفاعل ثم الفعل في الآخر: ob das möglich ist.', 'wortstellung'],
      ['wissen', 'weiß · wusste · hat gewusst', 'يعرف (معلومة)', 'Ich weiß nicht, wo sie wohnt.', 'Ich kenne nicht, wo sie wohnt.', 'kennen للأشخاص والأشياء مباشرة؛ wissen قبل جملة فرعية.', 'lexik-kollokation', 'weiß'],
      ['die Richtung', 'die Richtungen', 'الاتجاه', 'Wissen Sie, in welche Richtung der Bus fährt?', 'Wissen Sie, in welchen Richtung der Bus fährt?', 'Richtung مؤنثة (-ung): in welche Richtung.', 'genus'],
      ['der Fahrplan', 'die Fahrpläne', 'جدول المواعيد', 'Schau nach, was im Fahrplan steht.', 'Schau nach, was steht im Fahrplan.', 'بعد was يقف steht في الآخر.', 'wortstellung'],
      ['erfahren', 'erfährt · erfuhr · hat erfahren', 'يعلم (خبرًا)', 'Ich möchte erfahren, ob ich bestanden habe.', 'Ich möchte erfahren, ob ich habe bestanden.', 'المشارك قبل المساعد في الآخر: bestanden habe.', 'wortstellung']
    ],
    tricks: [
      { trick: 'السؤال يفقد علامته ويرسل الفعل إلى الآخر', wie: 'Wo wohnt er? ← Ich weiß nicht, wo er wohnt. فاصلة، ثم كلمة الاستفهام، ثم الفعل آخرًا.', warum: 'الصيغة المباشرة تبقى في الرأس فينسخها المتعلم بعد الفاصلة؛ الفعل الأخير هو العلامة.', anchor: 'Ich weiß nicht, wo sie wohnt.' },
      { trick: 'ob لسؤال نعم/لا، وليس wenn', wie: 'Kommt er? ← Ich weiß nicht, ob er kommt. (si الفرنسية هنا = ob، لا wenn)', warum: 'si الفرنسية تغطي الشرط والسؤال، والألمانية تفصل: wenn للشرط، ob للسؤال.', anchor: 'Ich weiß nicht, ob der Zug pünktlich ist.' },
      { trick: 'علامة الجملة من رأسها لا من ذيلها', wie: 'Weißt du, wann er kommt? (الرأس سؤال) · Ich weiß nicht, wann er kommt. (الرأس خبر)', warum: 'الفرعية الاستفهامية لا تحدد العلامة؛ الجملة الرئيسية وحدها تحددها.', anchor: 'Sag mir, wann deine Ankunft ist.' }
    ],
    order: [
      { satz: 'Ich | weiß | nicht, | | ob der Zug pünktlich ist.', ar: 'لا أعرف إن كان القطار في موعده.' },
      { satz: 'wann | der Kurs | anfängt.', clause: 'sub', ar: 'متى يبدأ الدرس (السؤال غير المباشر وحده)' }
    ],
    writing: {
      prompt: 'اكتب خمسة أسئلة غير مباشرة لموظف الاستعلامات في المحطة: الرصيف، الانطلاق، التخفيض، الرحلة المباشرة، وأوقات الفتح. ابدأ بـ Können Sie mir sagen أو Ich möchte wissen.',
      promptDe: 'Können Sie mir sagen, wann …? · Ich möchte wissen, ob … · Wissen Sie, von welchem Gleis …?',
      points: ['خمسة أسئلة غير مباشرة', 'سؤالان بـ ob', 'الفعل في آخر كل فرعية', 'علامة الجملة من الرأس', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'wortstellung'
    }
  },

  'b1-u2-l7': {
    items: [
      ['vermutlich', '—', 'على الأرجح', 'Er ist vermutlich noch unterwegs.', 'Er ist vermutlich noch unterwegs, sicher.', 'vermutlich وsicher يتناقضان؛ درجة واحدة من اليقين في الجملة.', 'lexik-kollokation'],
      ['wohl', '—', 'على ما يبدو (تخمين)', 'Sie ist wohl schon zu Hause.', 'Sie ist gut schon zu Hause.', 'wohl هنا ظرف تخمين ولا تعني «جيدًا» (bien).', 'falser-freund'],
      ['vielleicht', '—', 'ربما', 'Vielleicht kommt er später.', 'Vielleicht er kommt später.', 'Vielleicht في الموضع الأول ← kommt ثانيًا.', 'wortstellung'],
      ['möglicherweise', '—', 'من المحتمل', 'Möglicherweise ist der Zug ausgefallen.', 'Möglicherweise der Zug ist ausgefallen.', 'الظرف في الموضع الأول يجرّ الفعل: Möglicherweise ist.', 'wortstellung'],
      ['vermuten', 'vermutet · vermutete · hat vermutet', 'يظنّ · يخمّن', 'Ich vermute, dass er krank ist.', 'Ich vermute, dass er ist krank.', 'في جملة dass يقف ist في الآخر.', 'wortstellung', 'vermute'],
      ['annehmen', 'nimmt an · nahm an · hat angenommen', 'يفترض', 'Ich nehme an, dass sie den Bus verpasst hat.', 'Ich annehme, dass sie den Bus verpasst hat.', 'annehmen منفصل في الرئيسية: nehme … an.', 'wortstellung', 'nehme'],
      ['schätzen', 'schätzt · schätzte · hat geschätzt', 'يقدّر (تخمينًا)', 'Ich schätze, er ist vierzig.', 'Ich schätze, dass er ist vierzig.', 'مع dass يقف ist في الآخر؛ أو بلا dass: er ist vierzig.', 'wortstellung', 'schätze'],
      ['die Vermutung', 'die Vermutungen', 'الظنّ · التخمين', 'Das ist nur eine Vermutung.', 'Das ist nur ein Vermutung.', '-ung مؤنثة: eine Vermutung.', 'genus'],
      ['zweifeln an', 'zweifelt · zweifelte · hat gezweifelt', 'يشكّ في', 'Ich zweifle an seiner Geschichte.', 'Ich zweifle in seiner Geschichte.', 'zweifeln an + داتيف، لا in.', 'präposition', 'zweifle'],
      ['der Zweifel', 'die Zweifel', 'الشكّ', 'Ich habe Zweifel, ob das stimmt.', 'Ich habe Zweifel, dass das stimmt.', 'الشك يفتح سؤالًا: Zweifel, ob؛ وdass بعد keinen Zweifel.', 'lexik-kollokation'],
      ['sich irren', 'irrt sich · irrte sich · hat sich geirrt', 'يخطئ · يغلط', 'Vielleicht irre ich mich.', 'Vielleicht irre ich.', 'sich irren انعكاسي: irre ich mich.', 'deklination', 'irre'],
      ['unsicher', '—', 'غير متأكد', 'Ich bin unsicher, ob das richtig ist.', 'Ich bin unsicher, wenn das richtig ist.', 'unsicher, ob (سؤال)؛ لا wenn.', 'lexik-kollokation'],
      ['eventuell', '—', 'ربما · محتمل', 'Eventuell komme ich später.', 'Eventually komme ich später.', 'eventuell الألمانية تعني «ربما»؛ eventually الإنجليزية تعني «في النهاية».', 'falser-freund'],
      ['scheinen', 'scheint · schien · hat geschienen', 'يبدو', 'Er scheint müde zu sein.', 'Er scheint müde sein.', 'scheinen + zu + مصدر: scheint … zu sein.', 'wortstellung', 'scheint'],
      ['anscheinend', '—', 'على ما يبدو (من الدلائل)', 'Anscheinend hat er den Termin vergessen.', 'Anscheinend er hat den Termin vergessen.', 'Anscheinend في الموضع الأول ← hat ثانيًا.', 'wortstellung'],
      ['offenbar', '—', 'من الواضح', 'Offenbar ist niemand zu Hause.', 'Offenbar ist niemand zu Hause, vielleicht.', 'offenbar شبه يقين وvielleicht شك؛ لا يجتمعان.', 'lexik-kollokation'],
      ['angeblich', '—', 'كما يُزعم', 'Angeblich war er krank.', 'Angeblich er war krank.', 'Angeblich في الموضع الأول ← war ثانيًا.', 'wortstellung'],
      ['kaum', '—', 'بالكاد · لا يكاد', 'Das ist kaum möglich.', 'Das ist kaum unmöglich.', 'kaum تنفي تقريبًا: kaum möglich = شبه مستحيل؛ kaum unmöglich تناقض.', 'lexik-kollokation'],
      ['sicher', '—', 'متأكد · بالتأكيد', 'Ich bin mir sicher, dass er kommt.', 'Ich bin sicher mich, dass er kommt.', 'sich sicher sein بالداتيف: bin mir sicher.', 'kasus'],
      ['die Wahrscheinlichkeit', 'die Wahrscheinlichkeiten', 'الاحتمال', 'Die Wahrscheinlichkeit ist hoch, dass es regnet.', 'Die Wahrscheinlichkeit ist stark, dass es regnet.', 'الاحتمال hoch أو groß، لا stark.', 'lexik-kollokation']
    ],
    tricks: [
      { trick: 'könnte وwohl وsicher: ثلاث درجات من اليقين', wie: 'Er könnte unterwegs sein (ممكن) · Er ist wohl unterwegs (مرجّح) · Er ist sicher unterwegs (يقين).', warum: 'الخبر بلا علامة شك يُفهم يقينًا، والامتحان يطلب تدرّجًا واضحًا.', anchor: 'Sie ist wohl schon zu Hause.' },
      { trick: 'علامة شك واحدة في الجملة', wie: 'vermutlich … sicher ✗ · offenbar … vielleicht ✗ — اختر درجة واحدة.', warum: 'تكديس الظروف يلغي بعضها بعضًا، والعربية تسمح بـ «ربما بالتأكيد» فتنتقل العادة.', anchor: 'Er ist vermutlich noch unterwegs.' },
      { trick: 'wohl ليست bien، وeventuell ليست eventually', wie: 'wohl = على ما يبدو · eventuell = ربما · gut = جيد · schließlich = في النهاية.', warum: 'الصديقان الكاذبان يقلبان معنى الجملة لا شكلها، فلا يلاحظهما المتعلم إلا بالحفظ المقابل.', anchor: 'Eventuell komme ich später.' }
    ],
    order: [
      { satz: 'Vielleicht | kommt | er später.', ar: 'ربما يأتي لاحقًا.' },
      { satz: 'Ich | vermute, | | | dass er krank ist.', ar: 'أظن أنه مريض.' }
    ],
    writing: {
      prompt: 'صديقك لم يأتِ إلى الموعد. اكتب خمس جمل تخمّن فيها السبب بدرجات مختلفة: vielleicht وwohl وvermutlich وIch nehme an وkönnte.',
      promptDe: 'Vielleicht hat er … · Er ist wohl … · Ich nehme an, dass … · Er könnte … sein. · Ich bin mir nicht sicher, ob …',
      points: ['خمس علامات شك مختلفة', 'جملة dass بالفعل في الآخر', 'könnte مع المصدر', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'lexik-kollokation'
    }
  },

  'b1-u2-l8': {
    items: [
      ['die Grafik', 'die Grafiken', 'الرسم البياني', 'Die Grafik zeigt die Zahl der Studenten.', 'Die Grafik zeigt die Zahl von die Studenten.', 'الإضافة بالجمع: der Studenten.', 'kasus'],
      ['die Statistik', 'die Statistiken', 'الإحصائية', 'Die Statistik stammt aus dem Jahr 2024.', 'Die Statistik stammt von dem Jahr 2024.', 'stammen aus للمصدر، لا von.', 'präposition'],
      ['die Quelle', 'die Quellen', 'المصدر', 'Die Quelle ist das Statistische Bundesamt.', 'Die Source ist das Statistische Bundesamt.', 'source إنجليزية؛ الألمانية die Quelle.', 'falser-freund'],
      ['der Anteil', 'die Anteile', 'النسبة · الحصة', 'Der Anteil der Frauen liegt bei 40 Prozent.', 'Der Anteil der Frauen ist bei 40 Prozent.', 'liegen bei للنسبة: liegt bei 40 Prozent.', 'lexik-kollokation'],
      ['das Prozent', 'die Prozente', 'بالمئة', 'Zwanzig Prozent der Befragten sind dagegen.', 'Zwanzig Prozents der Befragten sind dagegen.', 'Prozent بلا -s بعد الأرقام.', 'plural'],
      ['die Mehrheit', 'die Mehrheiten', 'الأغلبية', 'Die Mehrheit ist dafür.', 'Die Mehrheit sind dafür.', 'Mehrheit مفرد ← ist.', 'konjugation'],
      ['die Minderheit', 'die Minderheiten', 'الأقلية', 'Nur eine Minderheit nutzt das Angebot.', 'Nur eine Minderheit nutzen das Angebot.', 'eine Minderheit مفرد: nutzt.', 'konjugation'],
      ['zunehmen', 'nimmt zu · nahm zu · hat zugenommen', 'يزداد', 'Die Zahl der Nutzer hat zugenommen.', 'Die Zahl der Nutzer hat zugenehmen.', 'Partizip II: zugenommen.', 'konjugation', 'zugenommen'],
      ['abnehmen', 'nimmt ab · nahm ab · hat abgenommen', 'ينقص · يتراجع', 'Die Zahl der Raucher nimmt ab.', 'Die Zahl der Raucher abnimmt.', 'في الرئيسية ينفصل: nimmt … ab.', 'wortstellung', 'nimmt'],
      ['der Anstieg', 'die Anstiege', 'الارتفاع', 'Es gab einen starken Anstieg.', 'Es gab eine starke Anstieg.', 'Anstieg مذكر: einen starken Anstieg.', 'genus'],
      ['der Rückgang', 'die Rückgänge', 'التراجع', 'Der Rückgang betrug fünf Prozent.', 'Der Rückgang betrug fünf Prozent weniger.', 'betragen يسمّي القيمة؛ weniger زائدة.', 'lexik-kollokation'],
      ['im Vergleich zu', '—', 'مقارنةً بـ', 'Im Vergleich zum Vorjahr stieg die Zahl.', 'Im Vergleich mit zum Vorjahr stieg die Zahl.', 'im Vergleich zu (أو mit)، لا الاثنان معًا.', 'präposition', 'Vergleich'],
      ['das Vorjahr', 'die Vorjahre', 'العام السابق', 'Im Vorjahr lag der Wert bei 30 Prozent.', 'Im Vorjahr der Wert lag bei 30 Prozent.', 'Im Vorjahr في الموضع الأول ← lag ثانيًا.', 'wortstellung'],
      ['der Wert', 'die Werte', 'القيمة', 'Der höchste Wert war 2020.', 'Der höchste Wert war in 2020.', 'السنة بلا in: 2020 أو im Jahr 2020.', 'präposition'],
      ['der Durchschnitt', '—', 'المتوسط', 'Im Durchschnitt arbeiten sie 38 Stunden.', 'In Durchschnitt arbeiten sie 38 Stunden.', 'im Durchschnitt بالأداة.', 'präposition'],
      ['die Ursache', 'die Ursachen', 'السبب الجذري', 'Die Grafik nennt keine Ursache.', 'Die Grafik nennt keine Ursache für.', 'für تحتاج مفعولًا؛ keine Ursache تكفي.', 'präposition'],
      ['die Umfrage', 'die Umfragen', 'الاستطلاع', 'Die Umfrage wurde 2023 durchgeführt.', 'Die Umfrage wurde 2023 gemacht durch.', 'eine Umfrage durchführen؛ durch ليست سابقة منفصلة لـ machen.', 'lexik-kollokation'],
      ['die Befragten', 'nur Plural', 'المستطلَعون', 'Die Hälfte der Befragten ist zufrieden.', 'Die Hälfte der Befragten sind zufrieden.', 'Hälfte مفرد ← ist.', 'konjugation'],
      ['deutlich', '—', 'واضح · بشكل ملحوظ', 'Die Zahl ist deutlich gestiegen.', 'Die Zahl ist deutlich gestiegen hoch.', 'gestiegen يكفي؛ hoch زائدة.', 'lexik-kollokation'],
      ['leicht', '—', 'طفيف (في الإحصاء)', 'Der Wert ist leicht gesunken.', 'Der Wert ist leicht gesinkt.', 'sinken قوي: gesunken.', 'konjugation']
    ],
    tricks: [
      { trick: 'صف أولًا، فسّر ثانيًا، ولا تخترع سببًا', wie: 'Die Grafik zeigt … · Im Vergleich zum Vorjahr … · Die Quelle nennt keine Ursache.', warum: 'امتحان B1 يقيّم الوصف الدقيق؛ التفسير بلا مصدر يخصم نقاطًا ولا يضيفها.', anchor: 'Die Grafik nennt keine Ursache.' },
      { trick: 'الأربعة: steigen وsinken وzunehmen وabnehmen', wie: 'ist gestiegen · ist gesunken · hat zugenommen · hat abgenommen.', warum: 'فعلان بـ sein وفعلان بـ haben؛ حفظهما أزواجًا يمنع hat gestiegen.', anchor: 'Die Zahl der Nutzer hat zugenommen.' },
      { trick: 'Prozent وGrad وEuro بلا -s بعد العدد', wie: '20 Prozent · 30 Grad · 200 Euro — المقياس يبقى مفردًا.', warum: 'الفرنسية والإنجليزية تجمعان الوحدة، والألمانية تتركها مفردة بعد الرقم.', anchor: 'Zwanzig Prozent der Befragten sind dagegen.' }
    ],
    order: [
      { satz: 'Im Vergleich zum Vorjahr | stieg | die Zahl.', ar: 'مقارنةً بالعام السابق ارتفع العدد.' },
      { satz: 'Die Mehrheit | ist | dafür.', ar: 'الأغلبية مؤيدة.' }
    ],
    writing: {
      prompt: 'صف رسمًا بيانيًا عن استعمال الهاتف في تونس بين 2015 و2025 في خمس جمل: المصدر، أعلى قيمة، المقارنة بالعام السابق، النسبة، وجملة تقول إن المصدر لا يذكر السبب.',
      promptDe: 'Die Grafik zeigt … · Die Quelle ist … · Der höchste Wert … · Im Vergleich zu … · Die Quelle nennt keine Ursache.',
      points: ['المصدر والموضوع في الجملة الأولى', 'نسبة بـ Prozent بلا -s', 'فعل تغيّر واحد على الأقل', 'جملة بلا تفسير مخترَع', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'lexik-kollokation'
    }
  },

  'b1-u3-l1': {
    items: [
      ['sich bewerben um', 'bewirbt sich · bewarb sich · hat sich beworben', 'يتقدم بطلب لـ', 'Ich bewerbe mich um die Stelle als Verkäufer.', 'Ich bewerbe mich für die Stelle als Verkäufer.', 'sich bewerben um هو المعيار في الرسالة؛ für تُسمع لكنها ليست الأصل.', 'präposition', 'bewerbe'],
      ['die Bewerbung', 'die Bewerbungen', 'طلب التوظيف', 'Meine Bewerbung besteht aus Anschreiben und Lebenslauf.', 'Mein Bewerbung besteht aus Anschreiben und Lebenslauf.', '-ung مؤنثة: meine Bewerbung.', 'genus'],
      ['die Stelle', 'die Stellen', 'الوظيفة · المنصب', 'Die Stelle ist ab sofort frei.', 'Die Stelle ist von sofort frei.', 'ab sofort تعبير ثابت.', 'präposition'],
      ['das Anschreiben', 'die Anschreiben', 'رسالة التقديم', 'Das Anschreiben ist eine Seite lang.', 'Der Anschreiben ist eine Seite lang.', 'Anschreiben محايد (مصدر مسمّى): das Anschreiben.', 'genus'],
      ['der Lebenslauf', 'die Lebensläufe', 'السيرة الذاتية', 'Anbei sende ich Ihnen meinen Lebenslauf.', 'Anbei sende ich Ihnen mein CV.', 'في الرسالة الألمانية: der Lebenslauf؛ CV اختصار إنجليزي.', 'falser-freund'],
      ['anbei', '—', 'طيّه · مرفق', 'Anbei finden Sie meine Zeugnisse.', 'Attached finden Sie meine Zeugnisse.', 'attached إنجليزية؛ anbei أو im Anhang.', 'falser-freund'],
      ['das Zeugnis', 'die Zeugnisse', 'الشهادة (مدرسية أو عمل)', 'Mein letztes Zeugnis war sehr gut.', 'Mein letztes Zertifikat war sehr gut.', 'Zeugnis للشهادة المدرسية وشهادة العمل؛ Zertifikat لشهادات الدورات.', 'lexik-kollokation'],
      ['die Erfahrung', 'die Erfahrungen', 'الخبرة', 'Ich habe drei Jahre Erfahrung im Verkauf.', 'Ich habe drei Jahre Experienz im Verkauf.', 'expérience الفرنسية؛ الألمانية die Erfahrung.', 'falser-freund'],
      ['die Kenntnisse', 'nur Plural', 'المعارف · المهارات', 'Meine Kenntnisse in Excel sind gut.', 'Meine Kenntnis in Excel sind gut.', 'في السيرة الذاتية بالجمع: Kenntnisse.', 'plural'],
      ['die Fähigkeit', 'die Fähigkeiten', 'القدرة · المهارة', 'Teamarbeit ist eine wichtige Fähigkeit.', 'Teamarbeit ist ein wichtiger Fähigkeit.', '-keit مؤنثة: eine wichtige Fähigkeit.', 'genus'],
      ['das Studium', 'die Studiengänge', 'الدراسة الجامعية', 'Nach dem Studium habe ich als Praktikant gearbeitet.', 'Nach das Studium habe ich als Praktikant gearbeitet.', 'nach + داتيف: nach dem Studium.', 'kasus'],
      ['der Arbeitgeber', 'die Arbeitgeber', 'صاحب العمل', 'Mein letzter Arbeitgeber war eine Bank.', 'Mein letzte Arbeitgeber war eine Bank.', 'mein + مذكر رفع: -er: mein letzter Arbeitgeber.', 'deklination'],
      ['der Arbeitnehmer', 'die Arbeitnehmer', 'الأجير · الموظف', 'Als Arbeitnehmer habe ich Rechte.', 'Als ein Arbeitnehmer habe ich Rechte.', 'als + مهنة أو صفة بلا أداة: als Arbeitnehmer.', 'lexik-kollokation'],
      ['das Vorstellungsgespräch', 'die Vorstellungsgespräche', 'مقابلة العمل', 'Ich wurde zu einem Vorstellungsgespräch eingeladen.', 'Ich wurde zu einem Interview für Arbeit eingeladen.', 'مقابلة العمل: das Vorstellungsgespräch؛ Interview للصحافة.', 'lexik-kollokation'],
      ['einladen', 'lädt ein · lud ein · hat eingeladen', 'يدعو', 'Die Firma lädt mich zum Gespräch ein.', 'Die Firma ladet mich zum Gespräch ein.', 'laden قوي: lädt (a ← ä).', 'konjugation', 'lädt'],
      ['die Stärke', 'die Stärken', 'نقطة القوة', 'Meine Stärke ist Geduld.', 'Meine Stärke ist geduldig.', 'بعد Stärke ist يأتي اسم: Geduld؛ geduldig صفة.', 'lexik-kollokation'],
      ['die Schwäche', 'die Schwächen', 'نقطة الضعف', 'Meine Schwäche ist Ungeduld.', 'Mein Schwäche ist Ungeduld.', 'Schwäche مؤنثة: meine Schwäche.', 'genus'],
      ['Sehr geehrte', '—', 'حضرة (افتتاحية رسمية)', 'Sehr geehrte Frau Weber,', 'Sehr geehrte Frau Weber!', 'بعد التحية الرسمية فاصلة، والسطر التالي يبدأ بحرف صغير.', 'orthographie'],
      ['mit freundlichen Grüßen', '—', 'مع أطيب التحيات (ختام)', 'Mit freundlichen Grüßen', 'Mit freundlichen Grüßen,', 'لا فاصلة بعد Mit freundlichen Grüßen.', 'orthographie'],
      ['die Frist', 'die Fristen', 'المهلة · الأجل', 'Die Frist für die Bewerbung endet am 30. Juni.', 'Die Frist für die Bewerbung endet am 30 Juni.', 'الترتيبي بنقطة: am 30. Juni.', 'orthographie']
    ],
    tricks: [
      { trick: 'الرسالة الرسمية: Sehr geehrte … فاصلة، ثم حرف صغير', wie: 'Sehr geehrte Frau Weber, | hiermit bewerbe ich mich … (h صغيرة)', warum: 'الفاصلة بدل علامة التعجب والحرف الصغير بعدها علامتان يفحصهما المصحح أولًا.', anchor: 'Sehr geehrte Frau Weber,' },
      { trick: 'الخبرة ليست expérience، والسيرة ليست CV', wie: 'die Erfahrung · der Lebenslauf · das Anschreiben · die Kenntnisse.', warum: 'مفردات التوظيف الألمانية مختلفة كليًا عن الفرنسية، فلا ينفع الحدس هنا.', anchor: 'Ich habe drei Jahre Erfahrung im Verkauf.' },
      { trick: 'um للمنصب، وبلا أداة بعد als', wie: 'Ich bewerbe mich um die Stelle als Verkäufer.', warum: 'جملة ثابتة تغطي نصف رسالة التقديم، وحفظها كتلة واحدة أسرع من قاعدتين.', anchor: 'Ich bewerbe mich um die Stelle als Verkäufer.' }
    ],
    order: [
      { satz: 'Ich | bewerbe | mich um die Stelle als Verkäufer.', ar: 'أتقدم بطلب لوظيفة بائع.' },
      { satz: 'Anbei | sende | ich Ihnen meinen Lebenslauf.', ar: 'طيّه أرسل إليكم سيرتي الذاتية.' }
    ],
    writing: {
      prompt: 'اكتب رسالة تقديم قصيرة لوظيفة بائع أو مساعد مكتب: التحية الرسمية، لماذا تتقدم، خبرتك ومعارفك، ما المرفق، والختام.',
      promptDe: 'Sehr geehrte Damen und Herren, · hiermit bewerbe ich mich um … · Ich habe … Jahre Erfahrung … · Anbei sende ich … · Mit freundlichen Grüßen',
      points: ['التحية الرسمية بفاصلة وحرف صغير بعدها', 'sich bewerben um', 'جملة عن الخبرة وجملة عن المعارف', 'anbei والختام بلا فاصلة', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'register'
    }
  },

  'b1-u3-l2': {
    items: [
      ['sich beschweren über', 'beschwert sich · beschwerte sich · hat sich beschwert', 'يشتكي من', 'Ich möchte mich über die Lieferung beschweren.', 'Ich möchte mich von der Lieferung beschweren.', 'sich beschweren über + النصب، لا von.', 'präposition', 'beschweren'],
      ['die Beschwerde', 'die Beschwerden', 'الشكوى', 'Ich habe eine Beschwerde.', 'Ich habe eine Beschwerung.', 'الاسم die Beschwerde، لا Beschwerung.', 'lexik-kollokation'],
      ['die Lösung', 'die Lösungen', 'الحلّ', 'Ich bitte um eine schnelle Lösung.', 'Ich bitte für eine schnelle Lösung.', 'bitten um + النصب، لا für.', 'präposition'],
      ['bitten um', 'bittet · bat · hat gebeten', 'يطلب (برجاء)', 'Ich bitte Sie um eine Antwort bis Freitag.', 'Ich bitte Sie für eine Antwort bis Freitag.', 'bitten um؛ für قياس على demander pour.', 'präposition', 'bitte'],
      ['sachlich', '—', 'موضوعي', 'Der Ton bleibt sachlich.', 'Der Ton bleibt sachlich und frech.', 'sachlich وfrech ضدان؛ الشكوى الناجحة بلا وقاحة.', 'lexik-kollokation'],
      ['der Mangel', 'die Mängel', 'العيب · النقص', 'Das Gerät hat einen Mangel.', 'Das Gerät hat ein Mangel.', 'Mangel مذكر: einen Mangel، والجمع Mängel.', 'genus'],
      ['defekt', '—', 'معطّل', 'Das Gerät ist defekt.', 'Das Gerät ist defekte.', 'بعد ist لا نهاية للصفة: defekt.', 'deklination'],
      ['der Umtausch', '—', 'الاستبدال', 'Ich bitte um Umtausch oder Rückerstattung.', 'Ich bitte um Umtausch oder Rückgeld.', 'Rückerstattung استرداد المال؛ Rückgeld الباقي عند الدفع.', 'lexik-kollokation'],
      ['umtauschen', 'tauscht um · tauschte um · hat umgetauscht', 'يستبدل', 'Kann ich die Jacke umtauschen?', 'Kann ich die Jacke tauschen um?', 'مع الفعل الناقص يبقى المنفصل كاملًا في الآخر: umtauschen.', 'wortstellung'],
      ['die Rückerstattung', 'die Rückerstattungen', 'استرداد المال', 'Ich erwarte eine Rückerstattung innerhalb von 14 Tagen.', 'Ich erwarte eine Rückerstattung innerhalb 14 Tagen.', 'مع الأعداد بلا أداة: innerhalb von 14 Tagen.', 'präposition'],
      ['die Garantie', 'die Garantien', 'الضمان', 'Das Gerät hat noch Garantie.', 'Das Gerät hat noch Garanti.', 'Garantie بـ -ie في الآخر، مؤنثة.', 'orthographie'],
      ['der Kundenservice', '—', 'خدمة الزبائن', 'Der Kundenservice hat nicht geantwortet.', 'Der Kundenservice hat nicht geantwortet mich.', 'antworten + داتيف الشخص في الحقل الأوسط: hat mir nicht geantwortet.', 'kasus'],
      ['verärgert', '—', 'مستاء', 'Ich bin verärgert über den Service.', 'Ich bin verärgert von dem Service.', 'verärgert über + النصب.', 'präposition'],
      ['unzufrieden', '—', 'غير راضٍ', 'Ich bin mit der Qualität unzufrieden.', 'Ich bin unzufrieden mit der Qualität nicht.', 'unzufrieden تحمل النفي؛ nicht زائدة.', 'lexik-kollokation'],
      ['bis spätestens', '—', 'في موعد أقصاه', 'Bitte antworten Sie bis spätestens Montag.', 'Bitte antworten Sie bis am spätestens Montag.', 'bis spätestens Montag بلا am.', 'präposition', 'spätestens'],
      ['andernfalls', '—', 'وإلا', 'Andernfalls wende ich mich an den Verbraucherschutz.', 'Andernfalls ich wende mich an den Verbraucherschutz.', 'Andernfalls في الموضع الأول ← wende ich.', 'wortstellung'],
      ['sich wenden an', 'wendet sich · wandte sich · hat sich gewandt', 'يتوجه إلى · يلجأ إلى', 'Ich wende mich an Sie, weil die Ware beschädigt ist.', 'Ich wende mich zu Ihnen, weil die Ware beschädigt ist.', 'sich wenden an + النصب: an Sie.', 'präposition', 'wende'],
      ['beschädigt', '—', 'متضرر · تالف', 'Die Ware kam beschädigt an.', 'Die Ware kam beschädigen an.', 'الحالة بالمشارك: beschädigt.', 'deklination'],
      ['die Ware', 'die Waren', 'البضاعة', 'Die Ware war unvollständig.', 'Die Waren war unvollständig.', 'Die Ware مفرد مع war؛ أو Die Waren waren.', 'plural'],
      ['der Ton', 'die Töne', 'النبرة', 'Ein höflicher Ton hilft mehr als Drohungen.', 'Ein höfliche Ton hilft mehr als Drohungen.', 'ein + مذكر رفع: -er: ein höflicher Ton.', 'deklination']
    ],
    tricks: [
      { trick: 'الشكوى بثلاث جمل: ما حدث، ما أريد، حتى متى', wie: 'Die Lieferung kam zu spät. · Ich bitte um eine Lösung. · Bitte antworten Sie bis spätestens Montag.', warum: 'الهيكل الثلاثي يمنع الانزلاق إلى الشتيمة ويعطي المصحح كل ما يبحث عنه.', anchor: 'Ich bitte um eine schnelle Lösung.' },
      { trick: 'um بعد bitten، وüber بعد sich beschweren', wie: 'Ich bitte um … · Ich beschwere mich über … · Ich wende mich an …', warum: 'أفعال الشكوى الثلاثة بحروفها تُحفظ قالبًا واحدًا، ولا يُنقل pour أو de من الفرنسية.', anchor: 'Ich möchte mich über die Lieferung beschweren.' },
      { trick: 'الغضب في الاسم لا في النبرة', wie: 'Ich bin verärgert. (مسموح) · Das ist eine Frechheit! (يُخصم)', warum: 'قول المشاعر مقبول، أما الهجوم على المخاطب فيُفقد الرسالة هدفها ونقاطها.', anchor: 'Ich bin verärgert über den Service.' }
    ],
    order: [
      { satz: 'Ich | bitte | um eine schnelle Lösung.', ar: 'أرجو حلًا سريعًا.' },
      { satz: 'Andernfalls | wende | ich mich an den Verbraucherschutz.', ar: 'وإلا سألجأ إلى حماية المستهلك.' }
    ],
    writing: {
      prompt: 'اشتريت جهازًا وصل متضررًا. اكتب شكوى من خمس جمل: ما حدث، ما العيب، ما تطلبه (استبدال أو استرداد)، المهلة، وماذا ستفعل وإلا. النبرة موضوعية.',
      promptDe: 'Sehr geehrte Damen und Herren, · ich möchte mich über … beschweren. · Die Ware kam … an. · Ich bitte um … · Bitte antworten Sie bis spätestens … · Andernfalls …',
      points: ['sich beschweren über', 'bitten um', 'مهلة بـ bis spätestens', 'جملة andernfalls بالفعل ثانيًا', 'لا شتيمة ولا وقاحة', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 50, familie: 'register'
    }
  }
};

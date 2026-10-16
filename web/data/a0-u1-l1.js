/* ============================================================
   Deutschweg — lesson data
   Lesson a0-u1-l1 : Day 1 — Alphabet, sounds, first greetings
   Level A0 · 90 minutes · 32 steps · all 12 stages
   UI strings are Arabic. Learning content is German.
   ============================================================ */

const A0_U1_L1_WORDS = [
  { de: "Guten Morgen", pl: "—", ar: "صباح الخير", ex: "Guten Morgen, Frau Klein!", err: "Gute Morgen, Frau Klein!", why: "Morgen مذكر، وصيغة التحية الثابتة هي Guten Morgen.", fam: "deklination", blank: "Morgen" },
  { de: "Guten Tag", pl: "—", ar: "نهارك سعيد / مرحبًا", ex: "Guten Tag, Herr Ali!", err: "Gute Tag, Herr Ali!", why: "Tag مذكر، لذلك تأتي التحية الثابتة Guten Tag.", fam: "deklination", blank: "Tag" },
  { de: "Guten Abend", pl: "—", ar: "مساء الخير", ex: "Guten Abend, Sara!", err: "Gute Abend, Sara!", why: "Abend مذكر، وصيغة التحية هي Guten Abend.", fam: "deklination", blank: "Abend" },
  { de: "Auf Wiedersehen", pl: "—", ar: "إلى اللقاء", ex: "Auf Wiedersehen, Frau Doktor!", err: "Auf Wieder sehen, Frau Doktor!", why: "Wiedersehen اسم في هذه العبارة الثابتة، لذلك يُكتب كلمة واحدة وبحرف كبير.", fam: "orthografie", blank: "Wiedersehen" },
  { de: "Gute Nacht", pl: "—", ar: "تصبح على خير", ex: "Gute Nacht, bis morgen!", err: "Guten Nacht, bis morgen!", why: "Nacht مؤنث، لذلك نقول Gute Nacht بلا n.", fam: "deklination", blank: "Nacht" },
  { de: "Tschüss", pl: "—", ar: "وداعًا / سلام", ex: "Tschüss, bis morgen!", err: "Tschüss, Frau Präsidentin!", why: "Tschüss غير رسمية؛ في لقاء رسمي أول يكون Auf Wiedersehen أكثر أمانًا.", fam: "register", blank: "Tschüss" },
  { de: "Ich heiße …", pl: "—", ar: "اسمي…", ex: "Ich heiße Sara.", err: "Ich heiße bin Sara.", why: "heiße هو الفعل كاملًا مع ich؛ لا نضيف bin بعده.", fam: "konjugation", blank: "heiße" },
  { de: "Wie heißt du?", pl: "—", ar: "ما اسمك؟", ex: "Hallo! Wie heißt du?", err: "Wie du heißt?", why: "في السؤال المباشر يأتي الفعل heißt قبل الفاعل du.", fam: "wortstellung", blank: "heißt" },
  { de: "Mein Name ist …", pl: "—", ar: "اسمي هو…", ex: "Mein Name ist Omar.", err: "Meine Name ist Omar.", why: "Name مذكر، لذلك نقول mein لا meine.", fam: "genus", blank: "Name" },
  { de: "Danke", pl: "—", ar: "شكرًا", ex: "Danke für die Hilfe!", err: "Ich sage dich Danke.", why: "Danke تكفي وحدها؛ وإذا ذُكر الشخص نقول dir لا dich.", fam: "kasus", blank: "Danke" },
  { de: "Bitte", pl: "—", ar: "من فضلك / عفوًا / تفضل", ex: "Ein Wasser, bitte.", err: "Danke. — Bitte dich.", why: "الرد الثابت على Danke هو Bitte بلا ضمير.", fam: "lexik-kollokation", blank: "Bitte" },
  { de: "Freut mich", pl: "—", ar: "تشرفت / يسعدني", ex: "Freut mich, Anna.", err: "Ich freut mich, Anna.", why: "الصيغة القصيرة الثابتة هي Freut mich؛ ومع ich نحتاج صياغة أخرى.", fam: "konjugation", blank: "Freut" }
];

window.DW_LESSONS = {

"a0-u1-l1": {
  id: "a0-u1-l1",
  level: "A0",
  unit: "u1",
  title: { ar: "اليوم الأول: الأصوات والتحية الأولى" },
  minutes: 90,
  wortschatz: A0_U1_L1_WORDS,

  schritte: [

  /* ---------- 1. ZIEL ---------- */
  {
    id: "s01", phase: "Ziel", type: "mcq",
    zeigt: { de: "🎯 Am Ende dieser Lektion begrüßt du jemanden passend und liest geübte deutsche Wörter mit den Lautregeln vor." },
    erklaerung: "هدف اليوم محدد: تحية مناسبة، وقراءة الكلمات المتدرَّب عليها بقواعد الصوت. لا نَعِد بقراءة كل كلمة ألمانية من درس واحد.",
    recap: "هدف اليوم: تحية + قراءة صحيحة",
    frage: {
      ziel: "cap.a0.lesson.goal",
      art: "mcq",
      frage: "ما الشيء الذي ستستطيع فعله بعد 90 دقيقة؟",
      optionen: [
        { id: "a", text: "التحدّث بطلاقة مع الألمان" },
        { id: "b", text: "تحية شخص، وقراءة الكلمات المتدرَّب عليها بصوت صحيح" },
        { id: "c", text: "كتابة رسالة رسمية" }
      ],
      richtig: "b",
      misconceptionFamilies: { a: "register", c: "register" },
      feedback: {
        b: "بالضبط. الطلاقة هدف بعيد — ومكسب اليوم واضح ومحدّد.",
        a: "الطلاقة تأتي على مراحل. نبدأ بما يُبنى عليه كل شيء: الصوت.",
        c: "الرسالة الرسمية من أهداف B1. اليوم خطوة أصغر وأهمّ: الصوت والتحية."
      }
    }
  },

  /* ---------- 2. AUFWÄRMEN ---------- */
  {
    id: "s02", phase: "Aufwärmen", type: "hoeren",
    zeigt: { de: "🔊 Hör zu: vier Begrüßungen" },
    audio: ["Guten Morgen!", "Guten Tag!", "Guten Abend!", "Gute Nacht!"],
    erklaerung: "استمع إلى الأربع دون أن تقرأ. لا يهمّ أن تفهم — المطلوب أن تسمع الفرق.",
    recap: "أربع تحيات: الصباح، النهار، المساء، الليل",
    hinweise: ["الثلاث الأولى تبدأ Guten، أما الرابعة فتبدأ Gute.", "انتبه للكلمة الأخيرة، وانتبه أيضًا إلى Guten وGute."],
    frage: {
      ziel: "cap.a0.hoeren.greetings",
      art: "mcq",
      frage: "كم تحية مختلفة سمعت؟",
      optionen: [ { id: "a", text: "ثلاث" }, { id: "b", text: "أربع" }, { id: "c", text: "خمس" } ],
      richtig: "b",
      misconceptionFamilies: { a: "hoerstrategie", c: "hoerstrategie" },
      feedback: {
        b: "أربع عبارات؛ الثلاث الأولى للوقت، والرابعة عند النوم.",
        a: "أعِد الاستماع: الرابعة مختلفة قليلًا: Gute Nacht لا Guten.",
        c: "أربع فقط. ليس خمسًا — الجملة الأولى والثانية تختلفان في كلمة واحدة."
      }
    }
  },

  /* ---------- 3. EINSTIEG ---------- */
  {
    id: "s03", phase: "Einstieg", type: "mcq",
    zeigt: { de: "⚠ W · V · Z" },
    erklaerung: "الألمانية تُكتب بالحروف التي تعرفها… تقريبًا. ثلاثة حروف ستخدعك اليوم. تعرّف عليها الآن، ثم ثبّتها بالتدريب.",
    recap: "ثلاثة حروف خادعة: W V Z",
    frage: {
      ziel: "cap.a0.einstieg.predict",
      art: "mcq",
      frage: "أي حرف تظنّ أنه سيخدعك أكثر؟",
      beliebig: true,
      optionen: [
        { id: "a", text: "W" }, { id: "b", text: "V" }, { id: "c", text: "Z" }
      ],
      feedback: {
        a: "التوقّع الجيّد نصف التعلّم. سنتحقّق من تخمينك بعد قليل.",
        b: "التوقّع الجيّد نصف التعلّم. سنتحقّق من تخمينك بعد قليل.",
        c: "التوقّع الجيّد نصف التعلّم. سنتحقّق من تخمينك بعد قليل."
      }
    }
  },

  /* ---------- 4. ERKLÄRUNG 1 : alphabet ---------- */
  {
    id: "s04", phase: "Erklärung", type: "matching",
    zeigt: { de: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z + Ä Ö Ü ß" },
    erklaerung: "الأبجدية الأساسية فيها ستة وعشرون حرفًا لاتينيًا، وتظهر معها ä وö وü وß. النقطتان تغيّران صوت حرف العلة، وß يكتب صوت /s/ مثل ss.",
    audio: ["Mädchen", "schön", "über", "Straße"],
    vereinfachung: {
      beispiel: "ä → Mädchen · ö → schön · ü → über · ß → Straße",
      analogie: "هذه أصوات جديدة على كثير من المتعلمين؛ الأفضل تقليد المثال ببطء بدل استبدالها بأقرب حرف عربي.",
      regel: "ä في Mädchen قريبة من e مفتوحة · ö = قل e مع تدوير الشفتين · ü = قل i مع تدوير الشفتين · ß = صوت /s/ ويُكتب ss في سويسرا"
    },
    hinweise: ["النقطتان فوق الحرف ليستا زينة — تغيّران الصوت.", "ß لا تُستعمل في بداية الكلمة أبدًا."],
    recap: "الحروف + ä ö ü ß",
    frage: {
      ziel: "cap.a0.aussprache.umlaut",
      art: "matching",
      frage: "صِل كل حرف بالكلمة التي فيها صوته.",
      paare: [
        { links: "ä", rechts: "Mädchen", haken: "في Mädchen اسمع e مفتوحة، ثم ch رخوة؛ لا تحذف النقطتين." },
        { links: "ö", rechts: "schön", haken: "قل «e» وشفتاك مدوّرتان — هذا ö." },
        { links: "ü", rechts: "über", haken: "قل «i» وشفتاك مدوّرتان — هذا ü." },
        { links: "ß", rechts: "Straße", haken: "ß هنا صوت /s/ مثل ss، والكلمة تعني «شارع»." }
      ],
      feedback: { correct: "أربعة حروف، أربعة أصوات. هذه أذنك تبدأ العمل." }
    }
  },

  /* ---------- 5. ERKLÄRUNG 2 : the deceptive trio (star step) ---------- */
  {
    id: "s05", phase: "Erklärung", type: "mcq",
    zeigt: { de: "W = /v/ · V = /f/ in Vater · Z = /ts/" },
    erklaerung: "في الكلمات المتدرَّب عليها: w صوت /v/، وv في Vater وVogel وvon صوت /f/، وz يبدأ /ts/. توجد كلمات دخيلة مثل Video قد يُنطق فيها v مثل /v/.",
    audio: ["Wasser", "Vater", "Zeit"],
    vereinfachung: {
      beispiel: "w → Wasser · v → Vater / Vogel · z → Zeit",
      analogie: "اربط كل حرف بمثال ثابت: Wasser للصوت /v/، وVater للصوت /f/، وZeit للصوت /ts/.",
      regel: "في هذه الأمثلة: W=/v/ · V=/f/ · Z=/ts/. افحص الكلمات الدخيلة بدل تعميم V=/f/ على كل كلمة."
    },
    hinweise: ["الخدعة الأولى والأخطر: w.", "بعض الكلمات الدخيلة مثل Video وVase استثناء من V=/f/."],
    recap: "W=ڤ · V=ف · Z=تس",
    frage: {
      ziel: "cap.a0.aussprache.w_v_z",
      art: "mcq",
      frage: "كيف تُنطق Vogel؟",
      optionen: [
        { id: "a", text: "«فوگِل» — ف في البداية وg بصوت /g/" },
        { id: "b", text: "«ڤوگِل» — ببداية /v/" },
        { id: "c", text: "«فوغِل» — بالغين بدل /g/" },
        { id: "d", text: "«بوجل» — بالباء" }
      ],
      richtig: "a",
      feedback: {
        a: "في Vogel تبدأ v بصوت /f/، وg بصوت /g/. الكلمة تعني «طائر».",
        b: "في Vogel تحديدًا تُنطق v بصوت /f/؛ لا تعمم ذلك على كلمات دخيلة مثل Video.",
        c: "في Vogel الحرف g هو /g/، وليس صوت الغين.",
        d: "الباء لا تمثل v في هذه الكلمة؛ Vogel تبدأ بصوت /f/."
      },
      misconceptionFamilies: { b: "aussprache", c: "aussprache", d: "falser-freund" }
    }
  },

  /* ---------- 6. ERKLÄRUNG 3 : ei ≠ ie ---------- */
  {
    id: "s06", phase: "Erklärung", type: "mcq",
    zeigt: { de: "ei = /ai/   ↔   ie = /iː/" },
    audio: ["nein", "die"],
    erklaerung: "حرفان متشابهان، وصوتان معكوسان. ei تُنطق «آي»، وie تُنطق «إي» ممدودة.",
    vereinfachung: {
      beispiel: "ei → nein (ناين) · ie → die (دي)",
      analogie: "احفظ الزوجين مع مثالين ثابتين: nein للصوت «آي»، وdie للصوت «إي» الطويلة.",
      regel: "احفظهما كزوج: ei = «آي» · ie = «إي» طويلة."
    },
    hinweise: ["لا تفكّر في القاعدة، بل في الزوج.", "die و nein تظهران في كل صفحة ألمانية."],
    recap: "ei=آي · ie=إي طويلة",
    frage: {
      ziel: "cap.a0.aussprache.ei_ie",
      art: "mcq",
      frage: "كيف تُنطق heiß؟",
      optionen: [
        { id: "a", text: "«هايس»" },
        { id: "b", text: "«هيس»" },
        { id: "c", text: "«هَ-إِس» — حرفان منفصلان" }
      ],
      richtig: "a",
      feedback: {
        a: "صحيح. weiß و heiß و nein — كلها «آي».",
        b: "خلطتَ الزوج: ei ليست «إي». die فيها ie هي التي تُنطق «إي».",
        c: "ليست حرفين منفصلين — ei صوت واحد: «آي»."
      },
      misconceptionFamilies: { b: "aussprache", c: "aussprache" }
    }
  },

  /* ---------- 7. ERKLÄRUNG 4 : eu / ch / sch ---------- */
  {
    id: "s07", phase: "Erklärung", type: "matching",
    zeigt: { de: "eu = /ɔy/   ·   ch = /x/ oder /ç/   ·   sch = /ʃ/" },
    audio: ["heute", "ich", "Buch", "Schule"],
    erklaerung: "ثلاث مجموعات جديدة. ch له صوت خلفي أقوى بعد a وo وu وau مثل Buch، وصوت أمامي رخو بعد e وi وä وö وü مثل ich.",
    vereinfachung: {
      beispiel: "eu → heute (هويته) · ch → ich (إِخ خفيفة) · Buch (بوخ) · sch → Schule (شوله)",
      analogie: "ch في Buch قريبة من خاء رخوة، أما ch في ich فأمامية وأخف ولا يطابقها حرف عربي تمامًا.",
      regel: "sch = /ʃ/ · eu غالبًا /ɔʏ/ · ch الخلفية بعد a/o/u/au، والأمامية بعد e/i/ä/ö/ü."
    },
    hinweise: ["sch ثلاثة حروف، صوت واحد.", "يكفي الآن أن تميّز Buch الخلفية من ich الأمامية وتقلدهما."],
    recap: "eu=أوي · ch=خ خفيفة · sch=ش",
    frage: {
      ziel: "cap.a0.aussprache.eu_ch_sch",
      art: "matching",
      frage: "صِل كل مجموعة بالكلمة التي فيها صوتها.",
      paare: [
        { links: "eu", rechts: "heute", haken: "heute = اليوم، وتُنطق «هويته»." },
        { links: "ch", rechts: "ich", haken: "ich = أنا، والخاء هنا خفيفة جدًا." },
        { links: "sch", rechts: "Schule", haken: "Schule = المدرسة. sch = «ش»." }
      ],
      feedback: { correct: "ثلاثة أصوات جديدة في جيبك." }
    }
  },

  /* ---------- 8. ERKLÄRUNG 5 : vowel length ---------- */
  {
    id: "s08", phase: "Erklärung", type: "mcq",
    zeigt: { de: "Mitte (kurz)  ↔  Miete (lang)" },
    audio: ["Mitte", "Miete"],
    erklaerung: "الألمانية تميّز حرف العلة الطويل من القصير. غالبًا يدل تكرار الحرف الساكن بعده على القِصر، وتدل ie أو h بعد حرف العلة على الطول.",
    vereinfachung: {
      beispiel: "Mitte (قصير) ↔ Miete (طويل) · ihn (طويل) ↔ in (قصير)",
      analogie: "في العربية يغيّر طول الحركة المعنى أيضًا، مثل مَلَك ومالك؛ استعمل الأذن نفسها.",
      regel: "غالبًا: ساكن مكرر بعد الحركة = قصيرة · ie أو h بعد الحركة = طويلة."
    },
    hinweise: ["في العربية الفوكال الطويل يعني فرق معنى — هنا أيضًا.", "Miete = إيجار، Mitte = وسط. معنيان مختلفان تمامًا."],
    recap: "طويل ↔ قصير يغيّر الكلمة",
    frage: {
      ziel: "cap.a0.aussprache.vowel_length",
      art: "mcq",
      frage: "أي كلمة فيها الفوكال قصير؟",
      optionen: [ { id: "a", text: "Miete" }, { id: "b", text: "Mitte" } ],
      richtig: "b",
      feedback: {
        b: "صحيح: tt بعد الـi تجعلها قصيرة. Mitte = وسط.",
        a: "Miete فيها ie = فوكال طويل، ومعناها «إيجار». الفرق هنا يغيّر المعنى كاملًا."
      },
      misconceptionFamilies: { a: "aussprache" }
    }
  },

  /* ---------- 9. WORTSCHATZ 1 ---------- */
  {
    id: "s09", phase: "Wortschatz", type: "cloze",
    wortschatz: A0_U1_L1_WORDS.slice(0, 3),
    zeigt: { de: "Guten Morgen!  ·  Guten Tag!  ·  Guten Abend!" },
    audio: ["Guten Morgen, Anna!", "Guten Tag, Herr Ben Ali!"],
    erklaerung: "كلمة «gut» تعني «جيّد»، ومعها وقت اليوم. التركيب جاهز — تُبدّل كلمة واحدة فقط.",
    vereinfachung: {
      beispiel: "Guten Morgen, Anna! · Guten Tag, Herr Ben Ali!",
      analogie: "مثل «صباح الخير» و«مساء الخير»: القالب ثابت، والكلمة الأخيرة تتبدّل.",
      regel: "Guten + وقت اليوم = تحية ذلك الوقت."
    },
    hinweise: ["Morgen هنا = الصباح لا «غدًا».", "Tag تعني «نهار» و«يومًا طيبًا» في التحية."],
    recap: "Guten + وقت = تحية",
    frage: {
      ziel: "cap.a0.wortschatz.guten_morgen",
      art: "cloze",
      frage: "أكمل: Guten ____, es ist 8 Uhr.",
      antworten: ["Morgen"],
      nearMiss: { "Abend": "الكلمة صحيحة، لكن الوقت خاطئ: الثامنة صباحًا لا مساءً." },
      feedback: { correct: "Guten Morgen — التحية من الفجر حتى نحو الحادية عشرة." }
    }
  },

  /* ---------- 10. WORTSCHATZ 2 ---------- */
  {
    id: "s10", phase: "Wortschatz", type: "mcq",
    wortschatz: A0_U1_L1_WORDS.slice(3, 6),
    zeigt: { de: "Auf Wiedersehen!  ·  Gute Nacht!  ·  Tschüss!" },
    audio: ["Auf Wiedersehen, Frau Doktor!", "Tschüss, bis morgen!"],
    erklaerung: "Auf Wiedersehen وداع رسمي، وGute Nacht تُقال عند النوم، وTschüss وداع غير رسمي. تختلف العبارة بحسب الموقف، لا بحسب الرسمية وحدها.",
    vereinfachung: {
      beispiel: "Auf Wiedersehen, Frau Doktor! · Tschüss, bis morgen!",
      analogie: "مثل الفرق بين «إلى اللقاء» و«سلام»: المعنى واحد، والمقام مختلف.",
      regel: "wieder = مرّة أخرى · sehen = يرى ⇒ «أراك مرّة أخرى»."
    },
    hinweise: ["Gute Nacht تُقال عند الذهاب إلى النوم، لا عند المغادرة مساءً.", "في لقاء رسمي أول اختر Auf Wiedersehen؛ وقد تُستعمل Tschüss إذا كان أسلوب المكان غير رسمي."],
    recap: "رسمي: Auf Wiedersehen · أصدقاء: Tschüss",
    frage: {
      ziel: "cap.a0.wortschatz.farewell_register",
      art: "mcq",
      frage: "مع صديق مقرّب، ماذا تقول؟",
      optionen: [ { id: "a", text: "Auf Wiedersehen" }, { id: "b", text: "Tschüss" } ],
      richtig: "b",
      feedback: {
        b: "صحيح. Tschüss ودّية وبسيطة، وتُختتم بها محادثات غير رسمية كثيرة.",
        a: "صحيحة لغويًا لكنها رسمية مع صديق مقرّب؛ Tschüss أنسب في هذا الموقف."
      },
      misconceptionFamilies: { a: "register" }
    }
  },

  /* ---------- 11. WORTSCHATZ 3 ---------- */
  {
    id: "s11", phase: "Wortschatz", type: "cloze",
    wortschatz: A0_U1_L1_WORDS.slice(6, 9),
    zeigt: { de: "Ich heiße …   ·   Wie heißt du?   ·   Mein Name ist …" },
    audio: ["Ich heiße Mohamed.", "Wie heißt du?", "Mein Name ist Sara."],
    erklaerung: "هذا إطار لا جملة. غيّر الاسم فقط، واحفظ الإطار كما هو.",
    vereinfachung: {
      beispiel: "Ich heiße Mohamed. — Wie heißt du? — Ich heiße Sara.",
      analogie: "مثل «أنا اسمي…» في العربية: القالب ثابت، والاسم يتغيّر.",
      regel: "heißen = يُدعى · ich heiße = أنا اسمي · wie heißt du? = ما اسمك؟"
    },
    hinweise: ["heißen فعل شاذّ قليلًا: heißt وليس heisst.", "Mein Name ist أكثر رسمية قليلًا."],
    recap: "Ich heiße = أنا اسمي",
    frage: {
      ziel: "cap.a0.wortschatz.ich_heisse",
      art: "cloze",
      frage: "أكمل: Wie ____ du?",
      antworten: ["heißt", "heisst"],
      nearMiss: { "heißen": "الكلمة صحيحة، لكن التصريف خاطئ: مع du تصبح heißt." },
      feedback: { correct: "Wie heißt du? سؤال شائع عند التعارف غير الرسمي." }
    }
  },

  /* ---------- 12. WORTSCHATZ 4 ---------- */
  {
    id: "s12", phase: "Wortschatz", type: "matching",
    wortschatz: A0_U1_L1_WORDS.slice(9, 12),
    zeigt: { de: "Danke.  ·  Bitte.  ·  Freut mich." },
    audio: ["Danke!", "Bitte!", "Freut mich."],
    erklaerung: "كلمة واحدة تصلح لثلاثة مواضع: Bitte تعني «من فضلك»، و«تفضّل»، و«عفوًا». والسياق يحدّد.",
    vereinfachung: {
      beispiel: "Danke! — Bitte! · Freut mich, Anna.",
      analogie: "مثل «العفو» التي تصلح ردًّا على شكر واستقبالًا لطلب.",
      regel: "Bitte = مفتاح واحد لثلاثة أبواب · Freut mich = «يسعدني» عند التعرّف."
    },
    hinweise: ["Freut mich حرفيًا: «يُفرحني» — أي تشرّفت بمعرفتك.", "Bitte وحدها تكفي في أغلب المواقف، لا تقلق."],
    recap: "Danke · Bitte · Freut mich",
    frage: {
      ziel: "cap.a0.wortschatz.danke_bitte",
      art: "matching",
      frage: "صِل الكلمة بمعناها.",
      paare: [
        { links: "Danke", rechts: "شكرًا", haken: "تُقال بعد المساعدة." },
        { links: "Bitte", rechts: "من فضلك / عفوًا / تفضّل", haken: "مفتاح بثلاثة أبواب." },
        { links: "Freut mich", rechts: "يسعدني / تشرّفت", haken: "تُقال عند التعرّف." }
      ],
      feedback: { correct: "أدوات التعارف الأولى صارت جاهزة." }
    }
  },

  /* ---------- 13. ANWENDEN 1 : model ---------- */
  {
    id: "s13", phase: "Anwenden", type: "hoeren",
    zeigt: { de: "Guten Tag! — Guten Tag! — Ich heiße Sara. Wie heißt du? — Ich heiße Mohamed. Freut mich. — Freut mich." },
    audio: ["Guten Tag!", "Guten Tag!", "Ich heiße Sara. Wie heißt du?", "Ich heiße Mohamed. Freut mich.", "Freut mich."],
    erklaerung: "خمس جمل تكفي لمحادثة تعارف قصيرة وواضحة.",
    recap: "حوار التعارف: 5 جمل",
    hinweise: ["استمع مرّتين قبل أن تسأل.", "اسم «محمد» هنا هو نفسك — تخيّل الحوار معك."],
    frage: {
      ziel: "cap.a0.hoeren.dialog_intro",
      art: "mcq",
      frage: "كم مرّة قيل «Freut mich» في الحوار؟",
      optionen: [ { id: "a", text: "مرّة" }, { id: "b", text: "مرّتين" }, { id: "c", text: "ثلاثًا" } ],
      richtig: "b",
      misconceptionFamilies: { a: "hoerstrategie", c: "hoerstrategie" },
      feedback: {
        b: "مرّتين: قالها محمد ردًّا على سارة، ثم ردّت هي. كلا الطرفين ردّ بعبارة مهذبة.",
        a: "اسمعهما آخر مرّتين: كل واحد قالها للآخر.",
        c: "مرّتان فقط. الجملة الأولى والثانية تحية متبادلة، لا Freut mich."
      }
    }
  },

  /* ---------- 14. ANWENDEN 2 : imitate ---------- */
  {
    id: "s14", phase: "Anwenden", type: "verstehen",
    zeigt: { de: "Sprich jetzt laut: Guten Tag! Ich heiße … . Freut mich. Wie heißt du?" },
    erklaerung: "قل الحوار بصوت عالٍ مرّتين: مرّة بدور سارة ومرّة بدور محمد. التقليد ليس وقتًا ضائعًا — هو أسرع طريق لضبط الصوت.",
    audio: ["Guten Tag! Ich heiße Sara.", "Guten Tag! Ich heiße Mohamed. Freut mich.", "Wie heißt du?"],
    recap: "قل الحوار بصوت عالٍ مرّتين",
    hinweise: ["لا تقرأ بعينك فقط — الفم يعلّم الأذن.", "بطيء وواضح أفضل من سريع مبهم."]
  },

  /* ---------- 15. ANWENDEN 3 : transform ---------- */
  {
    id: "s15", phase: "Anwenden", type: "mcq",
    zeigt: { de: "Baue den Dialog um: anderer Name, andere Tageszeit, anderer Ton." },
    erklaerung: "تغيير الإطار يُثبت أنك لم تحفظ جملة، بل امتلكت تركيبة.",
    recap: "بدّل: الاسم · الوقت · الدرجة",
    hinweise: ["التحية والعبارة يجب أن تتوافقا: وقت ≠ آخر.", "درجة الرسمية تظهر في التحية؛ جملة التعريف نفسها لا تتغير."],
    frage: {
      ziel: "cap.a0.anwenden.transform_greeting",
      art: "mcq",
      frage: "الساعة الثامنة مساءً وتتعرّف على زميل جديد. أيّ تحية صحيحة؟",
      optionen: [
        { id: "a", text: "Guten Abend, ich heiße Sara." },
        { id: "b", text: "Gute Nacht, ich heiße Sara." },
        { id: "c", text: "Guten Morgen, ich heiße Sara." }
      ],
      richtig: "a",
      feedback: {
        a: "Guten Abend للتحية مساءً، ثم التعريف. تركيب سليم في موقعه.",
        b: "Gute Nacht تُقال عند الذهاب إلى النوم، لا عند التعرّف على زميل.",
        c: "الصباح في الثامنة صباحًا، لا مساءً. الوقت يحدّد التحية."
      },
      misconceptionFamilies: { b: "register", c: "register" }
    }
  },

  /* ---------- 16. ÜBUNG 1 ---------- */
  {
    id: "s16", phase: "Übungen", type: "mcq",
    zeigt: { de: "Übung 1" },
    erklaerung: "أوّل تمرين مستقلّ. لا تلميح هذه المرة — جرّب بنفسك.",
    recap: "تمرين: كيف تُنطق Vater",
    hinweise: ["اقرأ الحرف نفسه أوّلًا: ما هو v؟", "v = ف. جرّب مرة أخرى."],
    frage: {
      ziel: "cap.a0.aussprache.vater",
      art: "mcq",
      frage: "كيف تُنطق Vater؟",
      optionen: [
        { id: "a", text: "«فاتر»" },
        { id: "b", text: "«ڤاتر»" },
        { id: "c", text: "«فاتير»" }
      ],
      richtig: "a",
      feedback: {
        a: "v = ف. Vater = أب. وأنت قلت هذا من نفسك، بلا تلميح.",
        b: "ڤ هي w. لو رأيت الماء لقلت Wasser (ڤاسر).",
        c: "الحركة الأولى طويلة، لكن نهاية -er ليست «إير»: قل Vater لا فاتير."
      },
      misconceptionFamilies: { b: "aussprache", c: "aussprache" }
    }
  },

  /* ---------- 17. ÜBUNG 2 ---------- */
  {
    id: "s17", phase: "Übungen", type: "cloze",
    zeigt: { de: "Übung 2" },
    erklaerung: "الثانية: وقت المساء. تذكّر قصة الأربع تحيات.",
    recap: "تمرين: تحية المساء",
    hinweise: ["انظر أوّل حرف من الكلمة.", "الوقت مساء ⇒ الأبجدية: A…"],
    frage: {
      ziel: "cap.a0.wortschatz.guten_abend",
      art: "cloze",
      frage: "أكمل: Guten ____, es ist 9 Uhr abends.",
      antworten: ["Abend"],
      nearMiss: { "Nacht": "قريب جدًا: في التاسعة مساءً التحية Guten Abend. Gute Nacht عند النوم فقط." },
      feedback: { correct: "عند التاسعة مساءً نقول Guten Abend؛ أما Gute Nacht فعند الذهاب إلى النوم." }
    }
  },

  /* ---------- 18. ÜBUNG 3 ---------- */
  {
    id: "s18", phase: "Übungen", type: "matching",
    zeigt: { de: "Übung 3" },
    erklaerung: "ثالوث الخداع، من الذاكرة.",
    recap: "تمرين: الحروف الخادعة",
    hinweise: ["ابدأ بالأسهل: مثلّث الخداع الذي رسمته.", "W = ڤ · V = ف · Z = تس."],
    frage: {
      ziel: "cap.a0.aussprache.w_v_z_recall",
      art: "matching",
      frage: "صِل الحرف بصوته.",
      paare: [
        { links: "W", rechts: "ڤ", haken: "Wasser · Wohnung · wir — كلها ڤ." },
        { links: "V", rechts: "ف", haken: "Vater · Vogel · von — كلها ف." },
        { links: "Z", rechts: "تس", haken: "Zeit · Zug · zehn — كلها تس." }
      ],
      feedback: { correct: "الثلاثة لم تعد تخدعك." }
    }
  },

  /* ---------- 19. ÜBUNG 4 ---------- */
  {
    id: "s19", phase: "Übungen", type: "hoeren",
    zeigt: { de: "Übung 4" },
    audio: ["Wasser"],
    erklaerung: "استمع فقط. لا تقرأ قبل أن تجيب.",
    recap: "تمرين سماع: Wasser أم Vater؟",
    hinweise: ["استمع للصوت الأوّل فقط.", "ڤ أم ف؟ هذا هو الفرق كلّه."],
    frage: {
      ziel: "cap.a0.hoeren.wasser",
      art: "mcq",
      frage: "أيّ كلمة سمعت؟",
      optionen: [ { id: "a", text: "Wasser (ماء)" }, { id: "b", text: "Vater (أب)" } ],
      richtig: "a",
      feedback: {
        a: "صحيح: الڤ في أوّلها كشفها.",
        b: "كانت Wasser: البداية ڤ لا ف. الفرق صوت واحد يصنع المعنى."
      },
      misconceptionFamilies: { b: "aussprache" }
    }
  },

  /* ---------- 20. ÜBUNG 5 ---------- */
  {
    id: "s20", phase: "Übungen", type: "cloze",
    zeigt: { de: "Übung 5" },
    erklaerung: "الأخيرة في هذه المجموعة: التعريف بالنفس.",
    recap: "تمرين: Ich heiße",
    hinweise: ["هو فعل يُصرَّف: ich ⇒ …", "ليس heißen ولا heißt — مع ich تصبح …"],
    frage: {
      ziel: "cap.a0.wortschatz.ich_heisse_produce",
      art: "cloze",
      frage: "أكمل: Ich ____ Mohamed.",
      antworten: ["heiße", "heisse"],
      nearMiss: { "heißen": "الكلمة صحيحة، لكن التصريف خاطئ: أنا ⇒ ich heiße." },
      feedback: { correct: "Ich heiße Mohamed — جملتك الأولى عن نفسك." }
    }
  },

  {
    id: "s20b", phase: "Übungen", type: "mcq",
    zeigt: { de: "Danke" },
    erklaerung: "استدعِ المعنى قبل قلب البطاقة، ثم انطق الكلمة مرة واحدة.",
    recap: "بطاقة: Danke",
    hinweise: ["حاول من الذاكرة أولًا.", "تأتي بعد مساعدة أو خدمة."],
    frage: {
      ziel: "cap.a0.wortschatz.danke_card",
      art: "flashcard",
      direction: "receptive",
      de: "Danke",
      ar: "شكرًا",
      example: "Danke für die Hilfe!",
      familie: "lexik-kollokation",
      frage: "اقلب البطاقة: ما معنى Danke؟"
    }
  },

  /* ---------- 21. MERKHILFE 1 ---------- */
  {
    id: "s21", phase: "Merkhilfe", type: "verstehen",
    zeigt: { de: "🧠 Merkhilfe 1 — Das Dreieck der Täuschung" },
    erklaerung: "تخيّل مثلثًا: في قمّته W (ڤ)، وأسفل اليمين V (ف)، وأسفل اليسار Z (تس). ارسمه بيدك ثلاث مرّات وأنت تقول الصوت لا اسم الحرف.",
    merkhilfe: {
      trick: "إطاري — مثلّث الخداع",
      wie: "ارسم المثلّث على ورقة بيدك ثلاث مرّات، وقُل مع كل ضلع: ڤ · ف · تس.",
      warum: "الجمع بين الرسم والنطق يعطيك مسارين للتذكّر؛ كرره عند الحاجة من دون وعد بعدد ثابت."
    },
    recap: "مثلّث: W=ڤ · V=ف · Z=تس",
    hinweise: ["لا تحفظ الحروف بالاسم (ڤيه، ڤاو، تسيت) — احفظها بالصوت.", "ارسمها الآن فعلًا، لا في خيالك فقط."]
  },

  /* ---------- 22. MERKHILFE 2 ---------- */
  {
    id: "s22", phase: "Merkhilfe", type: "verstehen",
    zeigt: { de: "🧠 Merkhilfe 2 — ei vor ie" },
    audio: ["ei — ie", "nein — die", "heiß — sie"],
    erklaerung: "قل الزوج ببطء أربع مرات: «ei ← آي، ie ← إي»، ثم طبّقه في الكلمات.",
    merkhilfe: {
      trick: "صوتي — نشيد الزوج",
      wie: "أربع دورات بصوت مسموع: nein — die · heiß — sie · mein — wie.",
      warum: "الإيقاع يربط كل ترتيب بمثاله، ثم تكشف الكلمات إن كان التمييز ثابتًا."
    },
    recap: "ei=آي · ie=إي — بالتكرار",
    hinweise: ["التكرار بالصوت لا بالعين.", "أضف زوجًا من عندك بعد الثمانية."]
  },

  /* ---------- 23. MERKHILFE 3 ---------- */
  {
    id: "s23", phase: "Merkhilfe", type: "verstehen",
    zeigt: { de: "🧠 Merkhilfe 3 — Herr Gut und sein Mantel" },
    erklaerung: "رجل اسمه «غوت» يلبس معطفًا واحدًا طوال النهار، ويبدّل صفة المعطف مع كل وقت: Morgen، Tag، Abend. وفي الليل يخلعه وينام: Gute Nacht.",
    merkhilfe: {
      trick: "قصّة — السيد غوت ومعطفه",
      wie: "احكِ القصّة على نفسك وأنت تُبدّل التحيات، واربط كل تحية بصورة ذهنية لها.",
      warum: "القصة تجمع العبارات الأربع في تسلسل يوم واحد، فتمنحك علامة زمنية لاسترجاع كل عبارة."
    },
    recap: "السيد غوت يبدّل التحية بالوقت",
    hinweise: ["القصّة أداة تعليمية مقصودة، لا طفولة.", "Gute Nacht = خلع المعطف والنوم."]
  },

  /* ---------- 24. PRODUKTION ---------- */
  {
    id: "s24", phase: "Produktion", type: "sprechen",
    ziel: "cap.a0.sprechen.greeting20",
    zeigt: { de: "🎙 Sprich 20 Sekunden: Begrüßung + dein Name + eine Frage." },
    erklaerung: "سجّل 20 ثانية: تحية حسب وقتك الآن، ثم اسمك، ثم سؤال للطرف الآخر. هذا أوّل تسجيل في محفظتك.",
    recap: "تسجيل 20 ثانية: تحية واسم وسؤال",
    hinweise: ["لا تتردّد في التسجيل لأنه «ليس جيّدًا» — قيمته أنه أوّل واحد.", "بعد شهر ستستمع إليه وتسمع الفرق بنفسك."]
  },

  /* ---------- 25. ZUSAMMENFASSUNG ---------- */
  {
    id: "s25", phase: "Zusammenfassung", type: "verstehen",
    zeigt: { de: "📌 Laute: W/V/Z · ei/ie · Grüße · Name" },
    erklaerung: "راجع أصوات W/V/Z وei/ie وch/sch، ثم التحية والاسم والوداع. هذه خلاصة ما تدربت عليه.",
    recap: "W=ڤ V=ف Z=تس Guten+وقت",
    hinweise: ["إن نسيت شيئًا، ارجع إلى المثال الصوتي الخاص به.", "ستعود إليها في مراجعة الغد."]
  },

  /* ---------- 26–29. CHECK ---------- */
  {
    id: "s26", phase: "Check", type: "mcq",
    zeigt: { de: "✅ Check 1 / 5" },
    erklaerung: "فحص سريع من خمسة أسئلة. أربع إجابات صحيحة من خمس تساوي 80%.",
    recap: "فحص 1: كلمة Zeit",
    frage: {
      ziel: "cap.a0.aussprache.zeit",
      prereq: "cap.a0.aussprache.w_v_z",
      art: "mcq",
      frage: "كيف تُنطق Zeit؟",
      optionen: [ { id: "a", text: "«تسايت»" }, { id: "b", text: "«زايت»" }, { id: "c", text: "«زيت»" } ],
      richtig: "a",
      feedback: {
        a: "z = تس. Zeit تعني «وقت» — وفيها ei أيضًا: تسايت.",
        b: "هذا نطق إنجليزي. z الألمانية = تس.",
        c: "أخطر خيار: نطق صحيح للـei وسقوط كامل للـz."
      },
      misconceptionFamilies: { b: "aussprache", c: "aussprache" }
    }
  },
  {
    id: "s27", phase: "Check", type: "cloze",
    zeigt: { de: "✅ Check 2 / 5" },
    erklaerung: "",
    recap: "فحص 2: Gute ____",
    frage: {
      ziel: "cap.a0.wortschatz.gute_nacht",
      prereq: "cap.a0.wortschatz.guten_morgen",
      art: "cloze",
      frage: "أكمل: ____ Nacht!",
      antworten: ["Gute"],
      nearMiss: { "Guten": "قريب: مع Nacht نقول Gute بلا نون (المؤنث). مع Morgen نقول Guten." },
      feedback: { correct: "Gute Nacht — ومعها Gute بلا نون." }
    }
  },
  {
    id: "s28", phase: "Check", type: "mcq",
    zeigt: { de: "✅ Check 3 / 5" },
    erklaerung: "",
    recap: "فحص 3: ie الطويلة",
    frage: {
      ziel: "cap.a0.aussprache.ie_long",
      prereq: "cap.a0.aussprache.ei_ie",
      art: "mcq",
      frage: "أي كلمة فيها ie تُنطق «إي» طويلة؟",
      optionen: [ { id: "a", text: "die" }, { id: "b", text: "dein" } ],
      richtig: "a",
      feedback: {
        a: "die فيها ie = «إي» طويلة. وهذه أكثر كلمة ستقرأها في حياتك الألمانية.",
        b: "dein فيها ei = «آي». لا خلط."
      },
      misconceptionFamilies: { b: "aussprache" }
    }
  },
  {
    id: "s29", phase: "Check", type: "matching",
    zeigt: { de: "✅ Check 4 / 5" },
    erklaerung: "",
    recap: "فحص 4: التحيات وأوقاتها",
    frage: {
      ziel: "cap.a0.wortschatz.greetings_map",
      prereq: "cap.a0.wortschatz.farewell_register",
      art: "matching",
      frage: "صِل التحية بوقتها.",
      paare: [
        { links: "Guten Morgen", rechts: "صباح", haken: "تحية الصباح قبل انتقال الموقف إلى Guten Tag." },
        { links: "Guten Tag", rechts: "نهار", haken: "تحية النهار؛ يختلف وقت الانتقال بحسب المكان." },
        { links: "Guten Abend", rechts: "مساء", haken: "تحية المساء، وليست عبارة النوم." },
        { links: "Gute Nacht", rechts: "ليل / نوم", haken: "عند الذهاب إلى النوم فقط." }
      ],
      feedback: { correct: "أربع تحيات، أربعة مواقع. هذا كلّ الدرس." }
    }
  },

  {
    id: "s29b", phase: "Check", type: "mcq",
    zeigt: { de: "✅ Check 5 / 5" },
    erklaerung: "",
    recap: "فحص 5: الوداع عند النوم",
    frage: {
      ziel: "cap.a0.wortschatz.gute_nacht_context",
      prereq: "cap.a0.wortschatz.farewell_register",
      art: "mcq",
      frage: "أي عبارة تقولها لشخص ذاهب إلى النوم؟",
      optionen: [
        { id: "a", text: "Gute Nacht" },
        { id: "b", text: "Guten Abend" },
        { id: "c", text: "Guten Morgen" }
      ],
      richtig: "a",
      feedback: {
        a: "Gute Nacht تُقال عند الذهاب إلى النوم.",
        b: "Guten Abend تحية عند اللقاء مساءً، وليست عبارة النوم.",
        c: "Guten Morgen تحية الصباح."
      },
      misconceptionFamilies: { b: "register", c: "register" }
    }
  },

  /* ---------- 30. HAUSAUFGABE ---------- */
  {
    id: "s30", phase: "Hausaufgabe", type: "verstehen",
    zeigt: { de: "🏠 Hausaufgabe: begrüße morgen drei echte Menschen auf Deutsch." },
    erklaerung: "لا واجب ورقي. غدًا حيِّ ثلاثة أشخاص تعرفهم بالألمانية إن أمكن؛ وإن لم يتوفر الموقف، سجّل ثلاث تحيات لمواقف مختلفة ثم جملة Ich heiße …",
    recap: "3 تحيات أو محاكاة + تسجيل",
    hinweise: ["الاستعمال في موقف حقيقي أو محاكاة مسجلة يساعد على تثبيت العبارة.", "التسجيل ليس تقييمًا — هو نقطة البداية في محفظتك."]
  }

  ]
}

};

/* Deutschweg — P1 exercise bank.
   A0 material only: sounds, greetings, the heißen frame.
   The learner does not browse this file. The engine serves it. */
(function (DW) {
  function mcq(id, frage, correct, wrongs, ziel, familie, zielAr) {
    const optionen = [{ id: 'a', text: correct.t }].concat(wrongs.map((w, i) => ({ id: String.fromCharCode(98 + i), text: w.t })));
    const feedback = { a: correct.why };
    const misconceptionFamilies = {};
    wrongs.forEach((w, i) => {
      const oid = String.fromCharCode(98 + i);
      feedback[oid] = w.why;
      misconceptionFamilies[oid] = w.family || familie;
    });
    return {
      id, art: 'mcq', ziel, zielAr, familie, frage, optionen, richtig: 'a', feedback, misconceptionFamilies,
      rightText: correct.t
    };
  }

  /* 28 pronunciation items. Practice takes 5, measure takes the next 20. */
  const SOUND = [
    ['Wasser', 'ڤاسر', 'w', 'w = ڤ. Wasser تعني ماء.'],
    ['Wohnung', 'ڤونونغ', 'w', 'w = ڤ. Wohnung تعني سكنًا.'],
    ['wir', 'ڤير', 'w', 'w = ڤ حتى في أصغر كلمة: wir.'],
    ['Wein', 'ڤاين', 'w', 'w = ڤ، وei = آي. Wein تعني خمرًا.'],
    ['warm', 'ڤارم', 'w', 'w = ڤ. لا تقرأها واوًا عربية.'],
    ['Vater', 'فاتر', 'v', 'v = ف. في الفرنسية v = ڤ، وهنا الخدعة.'],
    ['Vogel', 'فوغل', 'v', 'v = ف. Vogel تعني طائرًا.'],
    ['viel', 'فيل', 'v', 'v = ف. viel تعني كثيرًا.'],
    ['vier', 'فير', 'v', 'v = ف، وie = إي طويلة. vier = أربعة.'],
    ['von', 'فون', 'v', 'v = ف. von تعني «من».'],
    ['Zeit', 'تسايت', 'z', 'z = تس، وei = آي. Zeit تعني وقتًا.'],
    ['Zug', 'تسوغ', 'z', 'z = تس. Zug تعني قطارًا.'],
    ['zehn', 'تسين', 'z', 'z = تس. zehn = عشرة.'],
    ['Zimmer', 'تسيمر', 'z', 'z = تس. Zimmer تعني غرفة.'],
    ['zwischen', 'تسڤيشن', 'z', 'z = تس، وw = ڤ. صوتان في كلمة واحدة.'],
    ['nein', 'ناين', 'ei', 'ei = آي. nein = لا.'],
    ['heiß', 'هايس', 'ei', 'ei = آي. heiß تعني ساخنًا.'],
    ['mein', 'ماين', 'ei', 'ei = آي. mein = لي.'],
    ['eins', 'آينس', 'ei', 'ei = آي. eins = واحد.'],
    ['klein', 'كلاين', 'ei', 'ei = آي. klein تعني صغيرًا.'],
    ['die', 'دي', 'ie', 'ie = إي طويلة. die = الـ للمؤنث والجمع.'],
    ['sie', 'زي', 'ie', 'ie = إي طويلة. sie = هي أو هم.'],
    ['wie', 'ڤي', 'ie', 'ie = إي طويلة، وw = ڤ. wie = كيف.'],
    ['Liebe', 'ليبه', 'ie', 'ie = إي طويلة. Liebe تعني حبًا.'],
    ['wieder', 'ڤيدر', 'ie', 'ie هنا إي، وw = ڤ. wieder = مرة أخرى.'],
    ['heute', 'هويته', 'eu', 'eu = أوي. heute = اليوم.'],
    ['ich', 'إخ', 'ch', 'ch بعد i خفيفة، كهمس الخاء. ich = أنا.'],
    ['Schule', 'شوله', 'sch', 'sch = ش دائمًا. Schule = المدرسة.']
  ];

  function traps(word, say, kind) {
    if (kind === 'w') return [
      { t: say.replace('ڤ', 'و'), why: 'قرأت w واوًا. في الألمانية w = ڤ.', family: 'aussprache' },
      { t: say.replace('ڤ', 'ف'), why: 'هذه ف، وهي صوت v لا w. ' + word + ' تبدأ بـ w.', family: 'aussprache' },
      { t: say.replace('ڤ', 'ب'), why: 'الباء ليست هذا الحرف. w = ڤ.', family: 'aussprache' }
    ];
    if (kind === 'v') return [
      { t: say.replace('ف', 'ڤ'), why: 'هذا نطق v الفرنسية. في الألمانية v = ف.', family: 'aussprache' },
      { t: say.replace('ف', 'ب'), why: 'ليست باء. v = ف: Vater، Vogel، von.', family: 'aussprache' },
      { t: say + 'ه', why: 'لا تُضف حركة زائدة. ' + say + ' تكفي.', family: 'aussprache' }
    ];
    if (kind === 'z') return [
      { t: say.replace('تس', 'ز'), why: 'هذا نطق إنجليزي أو عربي للـz. الألمانية z = تس.', family: 'aussprache' },
      { t: say.replace('تس', 'س'), why: 'السين وحدها ناقصة. z = تس.', family: 'aussprache' },
      { t: say.replace('تس', 'ت'), why: 'التاء وحدها نصف الصوت. z = تس.', family: 'aussprache' }
    ];
    if (kind === 'ei') return [
      { t: say.includes('آي') ? say.replace('آي', 'إي') : say.replace('اي', 'ي'), why: 'خلطت الزوج: ei = آي، وie = إي.', family: 'aussprache' },
      { t: 'هَ-' + say, why: 'ليست حرفين منفصلين. ei صوت واحد.', family: 'aussprache' },
      { t: say.slice(0, 2), why: 'الصوت ناقص. ' + word + ' = ' + say + '.', family: 'aussprache' }
    ];
    if (kind === 'ie') return [
      { t: say.replace('ي', 'اي'), why: 'هذا صوت ei لا ie. ie = إي طويلة.', family: 'aussprache' },
      { t: say + 'ه', why: 'لا تُضف هاء. المد داخل ie.', family: 'aussprache' },
      { t: 'أ' + say, why: 'لا همزة قبلها. ابدأ بالصوت مباشرة.', family: 'aussprache' }
    ];
    if (kind === 'eu') return [
      { t: 'أو', why: 'eu = أوي، لا أو وحدها. heute = هويته.', family: 'aussprache' },
      { t: 'إي', why: 'هذا ie لا eu.', family: 'aussprache' },
      { t: 'آي', why: 'هذا ei لا eu.', family: 'aussprache' }
    ];
    if (kind === 'ch') return [
      { t: 'إش', why: 'ش هي sch لا ch. ich خفيفة.', family: 'aussprache' },
      { t: 'إك', why: 'ليست كافًا. ch همس خفيف.', family: 'aussprache' },
      { t: 'إخخ', why: 'خاء عربية ثقيلة. ch أخف من ذلك.', family: 'aussprache' }
    ];
    return [
      { t: 'سكوله', why: 'sch = ش، لا س+ك.', family: 'aussprache' },
      { t: 'خوله', why: 'هذا ch لا sch.', family: 'aussprache' },
      { t: 'شول', why: 'النهاية -e تُنطق. Schule = شوله.', family: 'aussprache' }
    ];
  }

  function uniqueWrongs(correct, wrongs) {
    const seen = new Set([correct]);
    return wrongs.map(w => {
      let t = w.t;
      if (!t || seen.has(t)) {
        t = 'ليس ' + correct;
        while (seen.has(t)) t += '·';
      }
      seen.add(t);
      return Object.assign({}, w, { t });
    });
  }

  const aussprache = SOUND.map((row, i) => {
    const [word, say, kind, why] = row;
    return mcq(
      'aus-' + String(i + 1).padStart(2, '0'),
      'كيف تُنطق ' + word + '؟',
      { t: say, why },
      uniqueWrongs(say, traps(word, say, kind)),
      'cap.a0.aussprache.' + word.toLowerCase(),
      'aussprache',
      'أنطق ' + word + ' بالصوت الألماني لا بالقراءة الفرنسية أو العربية'
    );
  });

  const workshop = [
    mcq(
      'ws-mcq',
      'كيف تُنطق Wohnung؟',
      { t: 'ڤونونغ', why: 'w = ڤ. Wohnung تعني سكنًا، وستحتاجها في Anmeldung.' },
      [
        { t: 'وونونغ', why: 'قرأت w واوًا عربية. في الألمانية w = ڤ، كما في Wasser.', family: 'aussprache' },
        { t: 'فونونغ', why: 'ف هي صوت v (Vater). Wohnung تبدأ بـ w = ڤ.', family: 'aussprache' },
        { t: 'بونونغ', why: 'ليست باء. الحرف w لا يُنطق ب.', family: 'aussprache' }
      ],
      'cap.a0.aussprache.wohnung',
      'aussprache',
      'تمييز w من v في كلمة سكن'
    ),
    {
      id: 'ws-cloze', art: 'cloze', familie: 'konjugation',
      ziel: 'cap.a0.wortschatz.ich_heisse_produce',
      zielAr: 'إنتاج Ich heiße بالتصريف الصحيح',
      frage: 'أكمل: Ich ____ Mohamed.',
      antworten: ['heiße', 'heisse'],
      nearMiss: { heißen: 'الكلمة صحيحة، والتصريف غير صحيح. مع ich تصبح heiße.', heißt: 'الكلمة صحيحة، والتصريف لـ er/sie لا لـ ich.', heisst: 'الكلمة صحيحة، والتصريف لـ er/sie لا لـ ich.' },
      nearFamily: 'konjugation',
      feedback: { correct: 'Ich heiße Mohamed. الإطار ثابت، والاسم يتبدّل.' }
    },
    {
      id: 'ws-order', art: 'wortstellung', familie: 'wortstellung',
      ziel: 'cap.a0.wortstellung.weil.zeit',
      zielAr: 'وضع الفعل في آخر جملة weil',
      frage: 'رتّب: لماذا لا وقت لديك اليوم؟',
      promptDe: 'weil ich heute keine Zeit habe',
      tokens: ['weil', 'ich', 'habe', 'heute', 'keine', 'Zeit'],
      correct: ['weil', 'ich', 'heute', 'keine', 'Zeit', 'habe'],
      clause: 'sub',
      finite: 'habe',
      rightBracket: ['habe'],
      fields: {
        vorfeld: [],
        lsk: ['weil'],
        mittelfeld: ['ich', 'heute', 'keine', 'Zeit'],
        rsk: ['habe'],
        nachfeld: []
      },
      feedback: { correct: 'بعد weil يبقى الحقل الأوسط متّصلًا، والفعل في الآخر.' }
    },
    {
      id: 'ws-match', art: 'matching', familie: 'register',
      ziel: 'cap.a0.wortschatz.farewell_register',
      zielAr: 'تمييز درجة الوداع لا معناه فقط',
      frage: 'صِل الوداع بمقامه. كل زوج يشترك مع غيره في وقت أو معنى.',
      paare: [
        { links: 'Auf Wiedersehen', rechts: 'رسمي، عند المغادرة', haken: 'رسمي. يصلح مع Frau Doktor.', falle: 'المعنى «وداع» مشترك مع Tschüss، والمقام هو الفرق.' },
        { links: 'Tschüss', rechts: 'أصدقاء، عند المغادرة', haken: 'ودّي. لا يُقال لمدير.', falle: 'المعنى «وداع» مشترك مع Auf Wiedersehen، والدرجة مختلفة.' },
        { links: 'Gute Nacht', rechts: 'عند النوم فقط', haken: 'ليست تحية مساء. هي للنوم.', falle: 'الوقت الليلي مشترك مع Guten Abend، والوظيفة مختلفة.' },
        { links: 'Guten Abend', rechts: 'تحية المساء لا النوم', haken: 'تحية، لا وداع نوم.', falle: 'المساء مشترك مع Gute Nacht، لكن هذه تحية لا نوم.' }
      ],
      feedback: { correct: 'المعنى واحد تقريبًا. المقام هو ما يُخطئ فيه المتعلم العربي.' }
    },
    {
      id: 'ws-hoeren', art: 'hoeren', familie: 'aussprache',
      ziel: 'cap.a0.hoeren.wasser',
      zielAr: 'تمييز Wasser من Vater بالأذن',
      frage: 'أيّ كلمة سمعت؟',
      audio: ['Wasser'],
      audioSrc: 'audio/wasser.mp3',
      transcript: 'Wasser',
      highlight: 'Wasser',
      optionen: [
        { id: 'a', text: 'Wasser (ماء)' },
        { id: 'b', text: 'Vater (أب)' }
      ],
      richtig: 'a',
      feedback: {
        a: 'البداية ڤ لا ف. هذا كل الفرق.',
        b: 'كانت Wasser. البداية ڤ، لا ف التي في Vater.'
      },
      misconceptionFamilies: { b: 'aussprache' }
    },
    {
      id: 'ws-sprechen', art: 'sprechen', familie: 'aussprache',
      ziel: 'cap.a0.sprechen.greeting20',
      zielAr: 'تحية واسم وسؤال في تسجيل واحد',
      prompt: 'قل: تحية حسب وقتك، ثم Ich heiße …، ثم Wie heißt du?',
      promptDe: 'Guten Tag! Ich heiße … . Wie heißt du?',
      targetSeconds: 20
    },
    {
      id: 'ws-schreiben', art: 'schreiben', familie: 'orthographie',
      ziel: 'cap.a0.schreiben.greeting',
      zielAr: 'كتابة تحية وجملة اسم',
      prompt: 'اكتب جملتين: تحيتك الآن، ثم Ich heiße واسمك.',
      promptDe: 'Guten Abend. Ich heiße ….',
      minWords: 4,
      points: ['تحية تناسب الوقت', 'جملة Ich heiße'],
      minutes: 5
    },
    {
      id: 'ws-card', art: 'flashcard', familie: 'lexik-kollokation',
      ziel: 'cap.a0.lex.wasser',
      zielAr: 'إنتاج Wasser لا التعرّف عليها فقط',
      direction: 'receptive',
      de: 'Wasser',
      ar: 'ماء',
      example: 'Ich trinke Wasser.',
      chunk: false,
      note: 'بطاقة تعارف. لن تُحسب في سقف اليوم. غدًا تدخل الجدول.'
    }
  ];

  const STEP_CARDS = {
    s09: [
      { de: 'Guten Morgen', ar: 'صباح الخير', example: 'Guten Morgen, Anna!', chunk: true },
      { de: 'Guten Tag', ar: 'نهارك سعيد', example: 'Guten Tag, Herr Ben Ali!', chunk: true },
      { de: 'Guten Abend', ar: 'مساء الخير', example: 'Guten Abend!', chunk: true }
    ],
    s10: [
      { de: 'Auf Wiedersehen', ar: 'إلى اللقاء (رسمي)', example: 'Auf Wiedersehen, Frau Doktor!', chunk: true },
      { de: 'Tschüss', ar: 'سلام بين الأصدقاء', example: 'Tschüss, bis morgen!', chunk: true },
      { de: 'Gute Nacht', ar: 'تصبح على خير', example: 'Gute Nacht!', chunk: true }
    ],
    s11: [
      { de: 'Ich heiße …', ar: 'أنا اسمي…', example: 'Ich heiße Mohamed.', chunk: true },
      { de: 'Wie heißt du?', ar: 'ما اسمك؟', example: 'Wie heißt du?', chunk: true }
    ],
    s12: [
      { de: 'Danke', ar: 'شكرًا', example: 'Danke!', chunk: false },
      { de: 'Bitte', ar: 'من فضلك / عفوًا / تفضّل', example: 'Bitte!', chunk: true },
      { de: 'Freut mich', ar: 'تشرّفت', example: 'Freut mich.', chunk: true }
    ],
    s05: [
      { de: 'Wasser', ar: 'ماء', example: 'Ich trinke Wasser.', chunk: false },
      { de: 'Vater', ar: 'أب', example: 'Mein Vater heißt Ali.', chunk: false },
      { de: 'Zeit', ar: 'وقت', example: 'Ich habe Zeit.', chunk: false }
    ]
  };

  function drillItems(family) {
    if (family === 'aussprache') return aussprache.slice();
    return [];
  }

  DW.BANK = { workshop, aussprache, STEP_CARDS, drillItems };
})(window.DW = window.DW || {});

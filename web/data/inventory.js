/* Map inventories that are not lesson bodies. Counts are the §13 targets. */
(function (root) {
  function rows(text) {
    return text.trim().split('\n').filter(Boolean).map(line => {
      const p = line.split('|');
      return { de: p[0], other: p[1], ar: p[2], note: p[3] || '' };
    });
  }
  root.DW_FALSE_FRIENDS = {
    A1: rows(`
also|also|إذن لا «أيضًا»|إنجليزي
Gift|gift|سمّ لا هدية|إنجليزي
bekommen|become|يحصل على لا يصبح|إنجليزي
aktuell|actual|حالي لا فعلي|إنجليزي
eventuell|eventually|ربما لا في النهاية|إنجليزي
sensibel|sensible|حسّاس لا عاقل|إنجليزي
bald|bald|قريبًا لا أصلح|إنجليزي
fast|fast|تقريبًا لا سريع|إنجليزي
Rat|rat|نصيحة لا جرذ|إنجليزي
Gymnasium|gym|ثانوية لا نادي|إنجليزي
Chef|chef|رئيس لا طبّاخ بالضرورة|فرنسي
Menü|menu|قائمة ثابتة لا كل القائمة|فرنسي
Fabrik|fabric|مصنع لا قماش|إنجليزي
Hose|hose|بنطال لا خرطوم|إنجليزي
Mappe|map|حقيبة أوراق لا خريطة|إنجليزي
sympatisch|sympathetic|لطيف لا متعاطف|إنجليزي
brav|brave|مؤدّب لا شجاع|فرنسي
studieren|study|دراسة جامعية لا كل تعلّم|تداخل
lernen|learn|يتعلّم مهارة أو مدرسة|تداخل
kennen|know a person|يعرف شخصًا أو مكانًا|تداخل
wissen|know a fact|يعرف حقيقة|تداخل
Uhr|hour|ساعة آلة لا مدّة|تداخل
Stunde|hour duration|مدّة ستين دقيقة|تداخل
wann|when question|متى في السؤال|تداخل
wenn|if or whenever|إذا أو كلّما لا متى السؤال|تداخل
`),
    A2: rows(`
aktuell|actuel|حالي لا واقعي|فرنسي
sensibel|sensible|حسّاس|فرنسي
Bibliothek|bibliothèque|مكتبة إعارة لا كل مكتبة|فرنسي
Büro|bureau|مكتب|فرنسي
Chance|chance|فرصة لا حظ دائمًا|فرنسي
isoliert|isolé|معزول|فرنسي
Münze|monnaie|قطعة نقد لا العملة كلّها|فرنسي
breit|large|عريض لا كبير|فرنسي
sauber|propre|نظيف لا خاص|فرنسي
merken|réaliser|ينتبه لا يحقّق|فرنسي
warten|attendre|ينتظر|فرنسي
besuchen|visiter a person|يزور شخصًا|فرنسي
besichtigen|visiter a place|يزور مكانًا|فرنسي
bleiben|rester|يبقى|فرنسي
verlassen|quitter|يغادر|فرنسي
bestehen|passer un examen|ينجح في امتحان لا يمرّ فقط|فرنسي
Figur|figure|قوام أو شخصية لا وجه|فرنسي
Gesicht|visage|وجه|فرنسي
Ecke|coin|زاوية|فرنسي
Bus|car|حافلة لا سيارة|فرنسي
Keller|cave|قبو لا كهف|فرنسي
glücklich|heureux|سعيد لا محظوظ بالضرورة|فرنسي
Lucky|chanceux|المحظوظ هو Glück haben|تداخل
erst|seulement|فقط عند العدد لا أولًا دائمًا|تداخل
schon|déjà|بعدُ لا بالفعل بالمعنى الإنجليزي|إنجليزي
`),
    B1: rows(`
konsequent|consistent|ثابت على مبدأ لا متّسق إحصائيًا|تداخل
Termin|terme|موعد لا مصطلح|فرنسي
überhören|overhear|لا يسمع لا يسمع صدفة|إنجليزي
vermuten|présumer|يظن|فرنسي
kündigen|résilier|يفسخ عقدًا|فرنسي
sich bewerben|postuler|يتقدّم لوظيفة|فرنسي
die Bewerbung|candidature|طلب توظيف|فرنسي
das Praktikum|stage|تدريب عملي لا مسرح|فرنسي
die Note|note|درجة لا ملاحظة فقط|فرنسي
das Fach|matière|مادة دراسية|فرنسي
die Meinung|avis|رأي|فرنسي
begründen|justifier|يعلّل|فرنسي
trotzdem|pourtant|مع ذلك ويبقي V2|نحو
obwohl|bien que|رغم أن والفعل في الآخر|نحو
damit|pour que|لكي مع فاعل ثان|نحو
um zu|pour + inf|لكي مع الفاعل نفسه|نحو
werden Passiv|être + participe|يُبنى للمجهول بـ werden لا sein دائمًا|نحو
das Mitglied|membre|عضو|فرنسي
der Verein|association|جمعية|فرنسي
ehrenamtlich|bénévole|تطوّعي|فرنسي
die Umwelt|environnement|بيئة|فرنسي
der Müll|déchets|نفايات لا خردة عشوائية|فرنسي
sparen|épargner|يوفر|فرنسي
sich leisten|s'offrir|يقدر ماديًا|فرنسي
vergleichen|comparer|يقارن|فرنسي
`),
    B2: rows(`
einerseits|d'une part|من جهة|حجاج
andererseits|d'autre part|من جهة أخرى|حجاج
zwar|certes|صحيح أن، ويأتي الاستدراك|حجاج
dennoch|néanmoins|رغم ذلك|حجاج
folglich|par conséquent|إذن|حجاج
meines Erachtens|à mon avis|في تقديري، رسمي|مقام
im Gegensatz zu|contrairement à|خلافًا لـ|حجاج
vorausgesetzt|à condition|بشرط|حجاج
angesichts|au vu de|نظرًا إلى|حجاج
hinsichtlich|en ce qui concerne|فيما يخص|حجاج
die Erörterung|dissertation|مقالة موقف لا رواية|امتحان
die Stellungnahme|prise de position|موقف مكتوب|امتحان
die Grafik|graphique|رسم بياني|امتحان
beschreiben dann deuten|décrire puis interpréter|صف ثم أوّل، لا تعليق أولًا|امتحان
die These|thèse|دعوى|حجاج
das Argument|argument|حجة|حجاج
das Beispiel|exemple|مثال يخدم الدعوى|حجاج
einräumen|concéder|يقرّ بنقطة الخصم|حجاج
widersprechen|contredire|يعارض بحجة|حجاج
abschließen|conclure|يختم لا يغلق فقط|حجاج
der Dialekt|dialecte|لهجة تُميَّز لا تُقلَّد في الامتحان|سماع
österreichisch|autrichien|نمساوي للتمييز|سماع
schweizerisch|suisse|سويسري للتمييز|سماع
bairisch|bavarois|بافاري للتمييز|سماع
die Quelle|source|مصدر النص|تحليل
`)
  };

  root.DW_READING = {
    A1: ['بطاقة فندق', 'قائمة طعام قصيرة', 'رسالة إلى صديق', 'إعلان غرفة', 'لافتة قطار', 'ملاحظة على الثلاجة', 'دعوة عيد ميلاد', 'وصفة من أربع خطوات', 'جدول حافلة', 'بريد إلكتروني بثلاثة أسطر'],
    A2: ['يوم في برلين', 'عند الطبيب', 'رحلة نهاية الأسبوع', 'أول يوم عمل', 'شقة جديدة', 'حفلة الحي', 'الطقس يغيّر الخطة', 'ضياع الحقيبة', 'دورة مسائية', 'سوق السبت', 'مكالمة لم تُفهم', 'هدية خاطئة', 'جار مزعج بلطف', 'تذكرة خاطئة', 'وصفة ضاعت', 'عيد في تونس', 'محطة مغلقة', 'كلب الجيران', 'امتحان صغير', 'مفتاح ثانٍ'],
    B1: { texts: ['عمل وتوازن', 'مدينة بلا سيارة', 'تعلم متأخر', 'تأمين صحي بجملة', 'استهلاك ومناسبة', 'تطوّع في الحي', 'رحلة ببديلين', 'خبر قصير ورأي', 'شكوى من خدمة', 'مقارنة مسارين دراسيين'], magazine: 'مجلة مبسّطة: عدد واحد عن السكن والعمل، يُؤلَّف لا يُنسخ' },
    B2: { novel: 'نوفيلة أصلية: Das Zimmer in Sousse، ستة فصول. ليست رواية منشورة.', articles: ['العمل عن بعد', 'الإيجار', 'الهجرة اليومية', 'المدرسة والرقمنة', 'الصحة والوقاية', 'الاستهلاك السريع', 'النقل العام', 'الطاقة في البيت', 'الإعلام والعنوان', 'التطوّع', 'السياحة والمدينة', 'اللغة في العمل', 'الطعام والهدر', 'الرياضة والمال', 'الفن والدعم', 'الجيران والقانون', 'الوقت والشاشة', 'التقاعد المبكر', 'القرية والمدينة', 'امتحان وعدل'] }
  };

  root.DW_LISTENING = {
    A1: { target: 0.8, items: ['أرقام', 'طلبات', 'حوار بطيء'] },
    A2: { target: 0.75, items: ['خبر بطيء', 'موعد', 'إعلان محطة'] },
    B1: { target: 0.7, items: ['حديث بطيء', 'مقابلة قصيرة'] },
    B2: { target: 0.65, items: ['مقابلة', 'محاضرة', 'تمييز لهجة نمساوية وسويسرية وبافارية'] }
  };

  root.DW_PRONUNCIATION = {
    A1: ['طول الحركة', 'حروف المساعدة h', 'ei', 'ie', 'eu', 'ch', 'sch', 'w مقابل v'],
    A2: ['ä', 'ö', 'ü', 'ich-Laut وach-Laut', 'r', 'قساوة آخر الكلمة'],
    B1: ['الوقفة الحنجرية', 'نبر الكلمة', 'لحن الجملة', 'الملاحقة الصوتية'],
    B2: ['تمييز النمساوي', 'تمييز السويسري', 'تمييز البافاري']
  };
})(typeof window !== 'undefined' ? window : global);

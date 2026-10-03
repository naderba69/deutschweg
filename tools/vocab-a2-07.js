/* Deutschweg — P3.2 lexical layer, A2 production unit 7 (PRODUCTION.md):
   a2-u2-l1 … a2-u2-l6. Same row format as vocab-a2-06.js. */

module.exports = {
  'a2-u2-l1': {
    items: [
      ['als', '—', 'من (في المقارنة)', 'Das ist größer als meins.', 'Das ist größer wie meins.', 'بعد المقارنة -er تأتي als، لا wie.', 'lexik-kollokation'],
      ['größer', 'groß · größer · am größten', 'أكبر', 'Berlin ist größer als Tunis.', 'Berlin ist mehr groß als Tunis.', 'المقارنة باللاحقة -er مع Umlaut: größer.', 'deklination'],
      ['kleiner', 'klein · kleiner · am kleinsten', 'أصغر', 'Mein Zimmer ist kleiner als deins.', 'Mein Zimmer ist kleiner wie deins.', 'kleiner als.', 'lexik-kollokation'],
      ['besser', 'gut · besser · am besten', 'أفضل', 'Dieser Weg ist besser.', 'Dieser Weg ist guter.', 'gut شاذ: besser.', 'deklination'],
      ['lieber', 'gern · lieber · am liebsten', 'بالأحرى · يفضّل', 'Ich trinke lieber Tee als Kaffee.', 'Ich trinke gerner Tee als Kaffee.', 'gern شاذ: lieber.', 'deklination'],
      ['mehr', 'viel · mehr · am meisten', 'أكثر', 'Ich habe mehr Zeit als du.', 'Ich habe vieler Zeit als du.', 'viel شاذ: mehr.', 'deklination'],
      ['weniger', 'wenig · weniger · am wenigsten', 'أقل', 'Er arbeitet weniger als ich.', 'Er arbeitet wenigerer als ich.', 'weniger جاهزة؛ لا -er ثانية.', 'deklination'],
      ['höher', 'hoch · höher · am höchsten', 'أعلى', 'Der Turm ist höher als das Haus.', 'Der Turm ist hocher als das Haus.', 'hoch ← höher (تسقط c).', 'deklination'],
      ['teurer', 'teuer · teurer · am teuersten', 'أغلى', 'Das Hotel ist teurer als die Pension.', 'Das Hotel ist teuerer als die Pension.', 'teuer ← teurer (تسقط e).', 'deklination'],
      ['älter', 'alt · älter · am ältesten', 'أكبر سنًا', 'Mein Bruder ist älter als ich.', 'Mein Bruder ist alter als ich.', 'alt ← älter مع Umlaut.', 'deklination'],
      ['jünger', 'jung · jünger · am jüngsten', 'أصغر سنًا', 'Meine Schwester ist jünger als ich.', 'Meine Schwester ist mehr jung als ich.', 'plus jeune لا تُترجم: jünger.', 'deklination'],
      ['schneller', 'schnell · schneller · am schnellsten', 'أسرع', 'Der Zug ist schneller als der Bus.', 'Der Zug ist schneller wie der Bus.', 'schneller als.', 'lexik-kollokation'],
      ['genauso … wie', '—', 'مثل … تمامًا', 'Ali ist genauso groß wie Omar.', 'Ali ist genauso groß als Omar.', 'التساوي بـ wie: genauso … wie.', 'lexik-kollokation', 'genauso'],
      ['so … wie', '—', 'بقدر … مثل', 'Tee ist so teuer wie Kaffee.', 'Tee ist so teuer als Kaffee.', 'so … wie للتساوي.', 'lexik-kollokation', 'wie'],
      ['die Pension', 'die Pensionen', 'النُّزُل', 'Die Pension ist billiger als das Hotel.', 'Die Pension ist billiger wie das Hotel.', 'billiger als.', 'lexik-kollokation'],
      ['billiger', 'billig · billiger · am billigsten', 'أرخص', 'Hier ist alles billiger.', 'Hier ist alles mehr billig.', 'المقارنة بـ -er: billiger.', 'deklination'],
      ['dunkler', 'dunkel · dunkler · am dunkelsten', 'أكثر ظلمة', 'Im Winter ist es dunkler.', 'Im Winter ist es dunkeler.', 'dunkel ← dunkler (تسقط e).', 'deklination'],
      ['der Turm', 'die Türme', 'البرج', 'Der Turm ist hoch.', 'Die Turm ist hoch.', 'Turm مذكر: der Turm.', 'genus'],
      ['meins', '—', 'ملكي (ضمير)', 'Dein Auto ist größer als meins.', 'Dein Auto ist größer als mein.', 'الضمير بلا اسم: meins (محايد).', 'deklination'],
      ['deins', '—', 'ملكك (ضمير)', 'Mein Handy ist neuer als deins.', 'Mein Handy ist neuer als dein.', 'بلا اسم: deins.', 'deklination']
    ],
    tricks: [
      { trick: 'المقارنة باللاحقة -er دائمًا، لا mehr', wie: 'größer · kleiner · schneller · billiger — لا mehr groß.', warum: 'الفرنسية plus grand والعربية «أكثر كِبَرًا» تُغريان بـ mehr؛ الألمانية تلصق -er حتى بالصفات الطويلة.', anchor: 'Berlin ist größer als Tunis.' },
      { trick: 'als بعد -er، وwie بعد so وgenauso', wie: 'größer als · so groß wie · genauso groß wie.', warum: 'wie مع المقارنة خطأ منتشر حتى بين الألمان؛ الامتحان يعدّه خطأ.', anchor: 'Ali ist genauso groß wie Omar.' },
      { trick: 'أربع شاذة تُحفظ: besser وlieber وmehr وhöher', wie: 'gut ← besser · gern ← lieber · viel ← mehr · hoch ← höher.', warum: 'الأربع لا تتبع القاعدة وتتكرر في كل حوار؛ guter وgerner وvieler تفضح المتعلم فورًا.', anchor: 'Dieser Weg ist besser.' }
    ],
    order: [
      { satz: 'Berlin | ist | größer als Tunis.', ar: 'برلين أكبر من تونس.' },
      { satz: 'Ich | trinke | lieber Tee als Kaffee.', ar: 'أفضّل الشاي على القهوة.' }
    ],
    writing: {
      prompt: 'قارن مدينتك بمدينة أخرى في خمس جمل: أيهما أكبر، أيهما أغلى، أين الطقس أفضل، أين تفضّل السكن، وجملة تساوٍ بـ genauso … wie.',
      promptDe: 'Tunis ist größer als … · Das Leben in … ist teurer als … · Das Wetter ist besser in … · Ich wohne lieber in … · … ist genauso schön wie …',
      points: ['ثلاث مقارنات بـ -er … als', 'شاذة واحدة (besser أو lieber أو mehr)', 'تساوٍ بـ so أو genauso … wie', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'deklination'
    }
  },

  'a2-u2-l2': {
    items: [
      ['am besten', '—', 'الأفضل (خبرًا)', 'Das gefällt mir am besten.', 'Das gefällt mir am gutsten.', 'gut ← am besten.', 'deklination', 'besten'],
      ['am liebsten', '—', 'الأحبّ إليه', 'Ich trinke am liebsten Wasser.', 'Ich trinke am gernsten Wasser.', 'gern ← am liebsten.', 'deklination', 'liebsten'],
      ['am meisten', '—', 'الأكثر', 'Er arbeitet am meisten.', 'Er arbeitet am vielsten.', 'viel ← am meisten.', 'deklination', 'meisten'],
      ['am größten', '—', 'الأكبر', 'Berlin ist am größten.', 'Berlin ist am großsten.', 'groß ← am größten مع Umlaut.', 'deklination', 'größten'],
      ['am höchsten', '—', 'الأعلى', 'Dieser Berg ist am höchsten.', 'Dieser Berg ist am hochsten.', 'hoch ← am höchsten.', 'deklination', 'höchsten'],
      ['der höchste', '—', 'الأعلى (قبل اسم)', 'Das ist der höchste Turm.', 'Das ist am höchste Turm.', 'قبل الاسم: der höchste؛ am للخبر.', 'deklination', 'höchste'],
      ['der schönste', 'die schönste · das schönste', 'الأجمل (قبل اسم)', 'Das ist die schönste Stadt.', 'Das ist die schönsten Stadt.', 'بعد die في الرفع: -ste.', 'deklination', 'schönste'],
      ['am schnellsten', '—', 'الأسرع', 'Mit dem Zug ist man am schnellsten.', 'Mit dem Zug ist man am schnellste.', 'am + -sten.', 'deklination', 'schnellsten'],
      ['am ältesten', '—', 'الأكبر سنًا', 'Mein Opa ist am ältesten.', 'Mein Opa ist am altesten.', 'alt ← am ältesten (Umlaut و-esten بعد t).', 'deklination', 'ältesten'],
      ['am teuersten', '—', 'الأغلى', 'Das Hotel ist am teuersten.', 'Das Hotel ist am teurersten.', 'teuer ← am teuersten.', 'deklination', 'teuersten'],
      ['der Berg', 'die Berge', 'الجبل', 'Der Berg ist 2000 Meter hoch.', 'Die Berg ist 2000 Meter hoch.', 'Berg مذكر: der Berg.', 'genus'],
      ['der Fluss', 'die Flüsse', 'النهر', 'Der Rhein ist der längste Fluss.', 'Der Rhein ist der langste Fluss.', 'lang ← längste مع Umlaut.', 'deklination'],
      ['das Lieblingsessen', '—', 'الطعام المفضّل', 'Mein Lieblingsessen ist Couscous.', 'Meine Lieblingsessen ist Couscous.', 'Essen محايد ← mein Lieblingsessen.', 'genus'],
      ['der Lieblingsfilm', 'die Lieblingsfilme', 'الفيلم المفضّل', 'Mein Lieblingsfilm ist alt.', 'Mein Lieblings Film ist alt.', 'Lieblingsfilm كلمة واحدة.', 'orthographie'],
      ['die Welt', '—', 'العالم', 'Der Nil ist der längste Fluss der Welt.', 'Der Nil ist der längste Fluss von der Welt.', 'der Welt (إضافة).', 'kasus'],
      ['am wenigsten', '—', 'الأقل', 'Das kostet am wenigsten.', 'Das kostet am wenigstens.', 'am wenigsten؛ wenigstens تعني «على الأقل».', 'lexik-kollokation', 'wenigsten'],
      ['die meisten', '—', 'معظم', 'Die meisten Leute fahren mit dem Bus.', 'Die meiste Leute fahren mit dem Bus.', 'قبل الجمع: die meisten.', 'deklination', 'meisten'],
      ['mindestens', '—', 'على الأقل', 'Der Kurs dauert mindestens zwei Stunden.', 'Der Kurs dauert am mindesten zwei Stunden.', 'mindestens ظرف جاهز.', 'lexik-kollokation'],
      ['besonders', '—', 'خاصةً · جدًا', 'Das Essen war besonders gut.', 'Das Essen war besonder gut.', 'besonders بـ s.', 'orthographie'],
      ['der Rekord', 'die Rekorde', 'الرقم القياسي', 'Das ist ein neuer Rekord.', 'Das ist ein neues Rekord.', 'Rekord مذكر: ein neuer Rekord.', 'deklination']
    ],
    tricks: [
      { trick: 'am + -sten للخبر، der/die/das + -ste قبل الاسم', wie: 'Der Turm ist am höchsten. · Das ist der höchste Turm.', warum: 'صيغتان للتفضيل حسب الموضع؛ am höchste Turm خلط بينهما.', anchor: 'Das ist der höchste Turm.' },
      { trick: 'الشاذة نفسها في التفضيل: am besten وam liebsten وam meisten', wie: 'gut ← besser ← am besten · gern ← lieber ← am liebsten · viel ← mehr ← am meisten.', warum: 'من حفظ المقارنة الشاذة يكمل السلسلة؛ gutsten وgernsten تنكشفان فورًا.', anchor: 'Das gefällt mir am besten.' },
      { trick: 'Umlaut في المقارنة والتفضيل معًا', wie: 'groß ← größer ← am größten · alt ← älter ← am ältesten · hoch ← höher ← am höchsten.', warum: 'الصفة التي تأخذ Umlaut في -er تأخذه في -sten؛ لا تُحفظ مرتين.', anchor: 'Berlin ist am größten.' }
    ],
    order: [
      { satz: 'Ich | trinke | am liebsten Wasser.', ar: 'أفضّل شرب الماء.' },
      { satz: 'Das | ist | der höchste Turm.', ar: 'هذا أعلى برج.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن مفضّلاتك: الطعام الذي تحبه أكثر، المدينة الأجمل في بلدك، الفيلم المفضّل، أي وسيلة نقل الأسرع، وما الذي يعجبك أكثر في تعلّم الألمانية.',
      promptDe: 'Am liebsten esse ich … · Die schönste Stadt ist … · Mein Lieblingsfilm ist … · Am schnellsten ist … · Am besten gefällt mir …',
      points: ['am + -sten ثلاث مرات', 'der/die/das + -ste مرة', 'شاذة واحدة (am besten أو am liebsten)', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'deklination'
    }
  },

  'a2-u2-l3': {
    items: [
      ['nett', '—', 'لطيف', 'Der nette Mann wartet.', 'Der netter Mann wartet.', 'بعد der في الرفع: -e: der nette Mann.', 'deklination', 'nette'],
      ['freundlich', '—', 'ودود', 'Ein freundlicher Mann hilft mir.', 'Ein freundliche Mann hilft mir.', 'ein + مذكر رفع: -er.', 'deklination', 'freundlicher'],
      ['sympathisch', '—', 'لطيف الطبع', 'Eine sympathische Frau wohnt hier.', 'Eine sympathischer Frau wohnt hier.', 'eine + مؤنث: -e.', 'deklination', 'sympathische'],
      ['interessant', '—', 'مثير للاهتمام', 'Das interessante Buch liegt hier.', 'Das interessanter Buch liegt hier.', 'بعد das: -e.', 'deklination', 'interessante'],
      ['laut', '—', 'عالي الصوت', 'Die laute Musik stört mich.', 'Die laut Musik stört mich.', 'بعد die: -e.', 'deklination', 'laute'],
      ['sauber', '—', 'نظيف', 'Das saubere Zimmer ist frei.', 'Das sauber Zimmer ist frei.', 'بعد das: -e: das saubere Zimmer.', 'deklination', 'saubere'],
      ['schmutzig', '—', 'متّسخ', 'Der schmutzige Teller steht noch da.', 'Der schmutziger Teller steht noch da.', 'بعد der: -e.', 'deklination', 'schmutzige'],
      ['voll', '—', 'ممتلئ', 'Der volle Bus kommt.', 'Der voller Bus kommt.', 'بعد der: -e.', 'deklination', 'volle'],
      ['leer', '—', 'فارغ', 'Ein leeres Glas steht auf dem Tisch.', 'Ein leer Glas steht auf dem Tisch.', 'ein + محايد: -es: ein leeres Glas.', 'deklination', 'leeres'],
      ['stark', '—', 'قوي', 'Ein starker Kaffee hilft.', 'Ein starke Kaffee hilft.', 'ein + مذكر: -er.', 'deklination', 'starker'],
      ['süß', '—', 'حلو', 'Der süße Tee schmeckt gut.', 'Der süßer Tee schmeckt gut.', 'بعد der: -e.', 'deklination', 'süße'],
      ['lustig', '—', 'مرح · مضحك', 'Ein lustiger Film läuft heute.', 'Ein lustig Film läuft heute.', 'ein + مذكر: -er.', 'deklination', 'lustiger'],
      ['glücklich', '—', 'سعيد', 'Eine glückliche Familie wohnt nebenan.', 'Eine glücklich Familie wohnt nebenan.', 'eine + مؤنث: -e.', 'deklination', 'glückliche'],
      ['fleißig', '—', 'مجتهد', 'Die fleißige Studentin lernt viel.', 'Die fleißiger Studentin lernt viel.', 'بعد die: -e.', 'deklination', 'fleißige'],
      ['faul', '—', 'كسول', 'Der faule Hund schläft.', 'Der fauler Hund schläft.', 'بعد der: -e.', 'deklination', 'faule'],
      ['bunt', '—', 'ملوّن', 'Bunte Blumen stehen im Garten.', 'Bunten Blumen stehen im Garten.', 'جمع بلا أداة في الرفع: -e: bunte Blumen.', 'deklination', 'Bunte'],
      ['rot', '—', 'أحمر', 'Das rote Auto ist neu.', 'Das rot Auto ist neu.', 'بعد das: -e.', 'deklination', 'rote'],
      ['toll', '—', 'رائع', 'Das ist ein toller Film.', 'Das ist ein tolle Film.', 'ein + مذكر: -er: ein toller Film.', 'deklination', 'toller'],
      ['komisch', '—', 'غريب · مضحك', 'Ein komischer Mann steht vor der Tür.', 'Ein komisch Mann steht vor der Tür.', 'ein + مذكر رفع: -er.', 'deklination', 'komischer'],
      ['nebenan', '—', 'في الجوار', 'Die neuen Nachbarn wohnen nebenan.', 'Die neuen Nachbarn wohnen neben an.', 'nebenan كلمة واحدة.', 'orthographie']
    ],
    tricks: [
      { trick: 'بعد der وdie وdas في الرفع: -e دائمًا', wie: 'der nette Mann · die laute Musik · das saubere Zimmer.', warum: 'الأداة المعرّفة تحمل العلامة فتكتفي الصفة بـ -e؛ der netter خلط مع ein netter.', anchor: 'Der nette Mann wartet.' },
      { trick: 'بعد ein: الصفة تأخذ علامة الأداة (-er أو -e أو -es)', wie: 'ein netter Mann · eine nette Frau · ein nettes Kind.', warum: 'ein لا تكشف الجنس، فتكشفه الصفة؛ هذا هو الفرق الوحيد بين الجدولين في الرفع.', anchor: 'Ein freundlicher Mann hilft mir.' },
      { trick: 'الجمع: -e بلا أداة، -en بعد die', wie: 'bunte Blumen · die bunten Blumen · nette Leute · die netten Leute.', warum: 'الجمع يقلب القاعدة بوجود الأداة، وهو ما يُنسى أولًا.', anchor: 'Bunte Blumen stehen im Garten.' }
    ],
    order: [
      { satz: 'Der nette Mann | wartet | hier.', ar: 'الرجل اللطيف ينتظر هنا.' },
      { satz: 'Ein starker Kaffee | hilft | morgens.', ar: 'قهوة قوية تساعد في الصباح.' }
    ],
    writing: {
      prompt: 'صف جيرانك الجدد في خمس جمل بصفات في الرفع: الرجل، المرأة، الطفل، الكلب، والسيارة — مرة بـ der/die/das ومرة بـ ein/eine.',
      promptDe: 'Der … Mann heißt … · Eine … Frau wohnt … · Das … Kind spielt … · Ein … Hund … · Das … Auto ist …',
      points: ['خمس صفات في الرفع بنهاية صحيحة', 'بعد der/die/das: -e', 'بعد ein: -er أو -es', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'deklination'
    }
  },

  'a2-u2-l4': {
    items: [
      ['schnell', '—', 'سريع', 'Ich kaufe ein schnelles Auto.', 'Ich kaufe ein schnell Auto.', 'ein + محايد نصب: -es.', 'deklination', 'schnelles'],
      ['dick', '—', 'سميك · سمين', 'Ich brauche eine dicke Jacke.', 'Ich brauche eine dicken Jacke.', 'eine + مؤنث نصب: -e.', 'deklination', 'dicke'],
      ['dünn', '—', 'رقيق · نحيف', 'Er trägt einen dünnen Pullover.', 'Er trägt einen dünne Pullover.', 'einen + مذكر نصب: -en.', 'deklination', 'dünnen'],
      ['heiß', '—', 'ساخن', 'Ich trinke einen heißen Tee.', 'Ich trinke einen heiße Tee.', 'einen + مذكر: -en: einen heißen Tee.', 'deklination', 'heißen'],
      ['grün', '—', 'أخضر', 'Ich nehme den grünen Apfel.', 'Ich nehme den grüne Apfel.', 'den + مذكر نصب: -en.', 'deklination', 'grünen'],
      ['blau', '—', 'أزرق', 'Sie trägt das blaue Kleid.', 'Sie trägt das blauen Kleid.', 'das + محايد نصب: -e.', 'deklination', 'blaue'],
      ['schwarz', '—', 'أسود', 'Ich suche eine schwarze Hose.', 'Ich suche eine schwarzen Hose.', 'eine + مؤنث: -e.', 'deklination', 'schwarze'],
      ['weiß', '—', 'أبيض', 'Ich möchte das weiße Hemd.', 'Ich möchte das weißes Hemd.', 'das + محايد: -e.', 'deklination', 'weiße'],
      ['gelb', '—', 'أصفر', 'Ich kaufe die gelbe Tasche.', 'Ich kaufe die gelben Tasche.', 'die + مؤنث نصب: -e.', 'deklination', 'gelbe'],
      ['elegant', '—', 'أنيق', 'Sie trägt einen eleganten Mantel.', 'Sie trägt einen elegant Mantel.', 'einen + مذكر: -en.', 'deklination', 'eleganten'],
      ['der Mantel', 'die Mäntel', 'المعطف', 'Ich brauche einen warmen Mantel.', 'Ich brauche einen warmer Mantel.', 'einen + مذكر نصب: -en: einen warmen Mantel.', 'deklination'],
      ['das Kleid', 'die Kleider', 'الفستان', 'Sie kauft ein rotes Kleid.', 'Sie kauft ein rote Kleid.', 'ein + محايد نصب: -es: ein rotes Kleid.', 'deklination'],
      ['der Rock', 'die Röcke', 'التنورة', 'Sie trägt einen kurzen Rock.', 'Sie trägt einen kurze Rock.', 'einen + مذكر: -en.', 'deklination'],
      ['die Mütze', 'die Mützen', 'القبعة الصوفية', 'Ich habe eine warme Mütze.', 'Ich habe eine warmen Mütze.', 'eine + مؤنث: -e.', 'deklination'],
      ['die Brille', 'die Brillen', 'النظارة', 'Er trägt eine neue Brille.', 'Er trägt eine neues Brille.', 'eine + مؤنث نصب: -e: eine neue Brille.', 'deklination'],
      ['tragen', 'trägt · trug · hat getragen', 'يرتدي · يحمل', 'Ich trage einen blauen Pullover.', 'Ich trage einen blaue Pullover.', 'einen + مذكر: -en.', 'deklination', 'trage'],
      ['der Stoff', 'die Stoffe', 'القماش', 'Der Stoff ist weich.', 'Die Stoff ist weich.', 'Stoff مذكر: der Stoff.', 'genus'],
      ['gestreift', '—', 'مخطّط', 'Ich nehme das gestreifte Hemd.', 'Ich nehme das gestreifter Hemd.', 'das + محايد: -e.', 'deklination', 'gestreifte'],
      ['hübsch', '—', 'جميل المظهر', 'Das ist ein hübsches Kleid.', 'Das ist ein hübsche Kleid.', 'ein + محايد: -es.', 'deklination', 'hübsches'],
      ['die Lieblingsfarbe', 'die Lieblingsfarben', 'اللون المفضّل', 'Meine Lieblingsfarbe ist Blau.', 'Mein Lieblingsfarbe ist Blau.', 'Farbe مؤنثة: meine Lieblingsfarbe.', 'genus']
    ],
    tricks: [
      { trick: 'في النصب المذكر وحده يتغيّر: den أو einen + -en', wie: 'den grünen Apfel · einen heißen Tee — لكن die gelbe Tasche · das blaue Kleid.', warum: 'كما في الأداة، النصب يمسّ المذكر فقط؛ الصفة تتبع الأداة فتأخذ -en.', anchor: 'Ich trinke einen heißen Tee.' },
      { trick: 'المؤنث والمحايد في النصب كالرفع', wie: 'eine neue Brille (رفع ونصب) · ein rotes Kleid (رفع ونصب).', warum: 'نصف الجدول منسوخ من الدرس السابق؛ لا يُحفظ من جديد.', anchor: 'Sie kauft ein rotes Kleid.' },
      { trick: 'الألوان صفات عادية وتُصرَّف', wie: 'das blaue Kleid · einen grünen Apfel · die gelbe Tasche — لكن Blau كاسم بحرف كبير.', warum: 'اللون قبل الاسم يأخذ النهاية كأي صفة، ويصبح اسمًا محايدًا حين يقف وحده.', anchor: 'Meine Lieblingsfarbe ist Blau.' }
    ],
    order: [
      { satz: 'Ich | trage | einen blauen Pullover.', ar: 'أرتدي كنزة زرقاء.' },
      { satz: 'Sie | kauft | ein rotes Kleid.', ar: 'تشتري فستانًا أحمر.' }
    ],
    writing: {
      prompt: 'صف ما ترتديه اليوم وما تريد شراءه في خمس جمل بصفات في النصب: كنزة، بنطال، معطف، نظارة، وقطعة بلونك المفضّل.',
      promptDe: 'Ich trage einen … Pullover. · Ich suche eine … Hose. · Ich kaufe einen … Mantel. · Ich brauche eine … Brille. · Meine Lieblingsfarbe ist …',
      points: ['-en بعد einen أو den مرتين', 'صفة مؤنثة أو محايدة في النصب', 'لون واحد على الأقل كصفة', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'deklination'
    }
  },

  'a2-u2-l5': {
    items: [
      ['sich die Hände waschen', 'wäscht sich · wusch sich · hat sich gewaschen', 'يغسل يديه', 'Ich wasche mir die Hände.', 'Ich wasche mich die Hände.', 'مع جزء الجسم: الانعكاسي داتيف: mir.', 'kasus', 'mir'],
      ['sich interessieren für', 'interessiert sich · interessierte sich · hat sich interessiert', 'يهتم بـ', 'Ich interessiere mich für Musik.', 'Ich interessiere für Musik.', 'sich interessieren انعكاسي: mich.', 'deklination', 'interessiere'],
      ['sich ärgern über', 'ärgert sich · ärgerte sich · hat sich geärgert', 'يغتاظ من', 'Ich ärgere mich über den Stau.', 'Ich ärgere mir über den Stau.', 'الانعكاسي بالنصب: mich.', 'kasus', 'ärgere'],
      ['sich anziehen', 'zieht sich an · zog sich an · hat sich angezogen', 'يرتدي ملابسه', 'Ich ziehe mich an.', 'Ich ziehe mir an.', 'بلا مفعول: mich؛ مع ثوب: mir eine Jacke.', 'kasus', 'mich'],
      ['sich kämmen', 'kämmt sich · kämmte sich · hat sich gekämmt', 'يمشّط شعره', 'Ich kämme mich.', 'Ich kämme mir.', 'الانعكاسي وحده بالنصب: mich.', 'kasus', 'kämme'],
      ['sich die Zähne putzen', 'putzt sich · putzte sich · hat sich geputzt', 'ينظّف أسنانه', 'Ich putze mir die Zähne.', 'Ich putze mich die Zähne.', 'مع Zähne: mir.', 'kasus', 'mir'],
      ['sich rasieren', 'rasiert sich · rasierte sich · hat sich rasiert', 'يحلق ذقنه', 'Er rasiert sich jeden Morgen.', 'Er rasiert jeden Morgen.', 'sich rasieren انعكاسي: rasiert sich.', 'deklination', 'rasiert'],
      ['sich erholen', 'erholt sich · erholte sich · hat sich erholt', 'يستجمّ · يتعافى', 'Im Urlaub erhole ich mich.', 'Im Urlaub erhole ich.', 'sich erholen انعكاسي.', 'deklination', 'erhole'],
      ['sich treffen', 'trifft sich · traf sich · hat sich getroffen', 'يلتقي', 'Wir treffen uns um acht.', 'Wir treffen um acht.', 'sich treffen انعكاسي: treffen uns.', 'deklination', 'uns'],
      ['sich fühlen', 'fühlt sich · fühlte sich · hat sich gefühlt', 'يشعر', 'Ich fühle mich gut.', 'Ich fühle gut.', 'sich fühlen انعكاسي: fühle mich.', 'deklination', 'fühle'],
      ['sich entschuldigen', 'entschuldigt sich · entschuldigte sich · hat sich entschuldigt', 'يعتذر', 'Ich entschuldige mich für die Verspätung.', 'Ich entschuldige für die Verspätung.', 'sich entschuldigen انعكاسي.', 'deklination', 'entschuldige'],
      ['sich langweilen', 'langweilt sich · langweilte sich · hat sich gelangweilt', 'يشعر بالملل', 'Ich langweile mich.', 'Ich bin langweilig.', 'أشعر بالملل = Ich langweile mich؛ Ich bin langweilig = أنا مملّ.', 'lexik-kollokation', 'langweile'],
      ['sich hinlegen', 'legt sich hin · legte sich hin · hat sich hingelegt', 'يستلقي', 'Ich lege mich hin.', 'Ich lege mir hin.', 'بلا مفعول: mich.', 'kasus', 'lege'],
      ['sich unterhalten', 'unterhält sich · unterhielt sich · hat sich unterhalten', 'يتحادث', 'Wir unterhalten uns gern.', 'Wir unterhalten gern.', 'sich unterhalten انعكاسي: uns.', 'deklination', 'unterhalten'],
      ['die Zähne', 'der Zahn · die Zähne', 'الأسنان', 'Die Zähne putze ich zweimal am Tag.', 'Die Zahne putze ich zweimal am Tag.', 'الجمع Zähne مع Umlaut.', 'plural'],
      ['die Haare', 'das Haar · die Haare', 'الشعر', 'Ich wasche mir die Haare.', 'Ich wasche mich die Haare.', 'مع Haare: mir.', 'kasus'],
      ['das Gesicht', 'die Gesichter', 'الوجه', 'Ich wasche mir das Gesicht.', 'Ich wasche mir den Gesicht.', 'Gesicht محايد: das Gesicht.', 'genus'],
      ['die Seife', 'die Seifen', 'الصابون', 'Ich brauche Seife.', 'Ich brauche Savon.', 'savon الفرنسية؛ Seife.', 'falser-freund'],
      ['das Handtuch', 'die Handtücher', 'المنشفة', 'Wo ist mein Handtuch?', 'Wo ist meine Handtuch?', 'Handtuch محايد: mein Handtuch.', 'genus'],
      ['die Zahnbürste', 'die Zahnbürsten', 'فرشاة الأسنان', 'Ich habe meine Zahnbürste vergessen.', 'Ich habe mein Zahnbürste vergessen.', 'Zahnbürste مؤنثة: meine.', 'genus']
    ],
    tricks: [
      { trick: 'الانعكاسي وحده نصب، ومع جزء الجسم داتيف', wie: 'Ich wasche mich. · Ich wasche mir die Hände. · Ich putze mir die Zähne.', warum: 'حين يظهر مفعول (Hände) يتراجع الضمير إلى الداتيف؛ هذه القاعدة الوحيدة لـ mich وmir هنا.', anchor: 'Ich wasche mir die Hände.' },
      { trick: 'الضمير الانعكاسي لا يُحذف', wie: 'Ich interessiere mich für … · Ich fühle mich gut. · Wir treffen uns.', warum: 'العربية والفرنسية تُسقطانه أحيانًا، والألمانية لا تفهم الفعل بلا ضميره.', anchor: 'Ich interessiere mich für Musik.' },
      { trick: 'Ich langweile mich ليست Ich bin langweilig', wie: 'Ich langweile mich = أشعر بالملل · Ich bin langweilig = أنا مملّ.', warum: 'الصيغة غير الانعكاسية تقلب المعنى على المتكلم، وهي من أشهر زلات A2.', anchor: 'Ich langweile mich.' }
    ],
    order: [
      { satz: 'Ich | wasche | mir die Hände.', ar: 'أغسل يديّ.' },
      { satz: 'Wir | treffen | uns um acht.', ar: 'نلتقي في الثامنة.' }
    ],
    writing: {
      prompt: 'صف صباحك في خمس جمل بأفعال انعكاسية: الاستيقاظ والغسل، تنظيف الأسنان، ارتداء الملابس، كيف تشعر، وبماذا تهتم في وقت فراغك.',
      promptDe: 'Ich wasche mich und … · Ich putze mir die Zähne. · Ich ziehe mich an. · Ich fühle mich … · Ich interessiere mich für …',
      points: ['mich ثلاث مرات', 'mir مع جزء الجسم', 'sich interessieren für', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'kasus'
    }
  },

  'a2-u2-l6': {
    items: [
      ['war', 'sein · war · ist gewesen', 'كان', 'Ich war gestern krank.', 'Ich hatte gestern krank.', 'الحالة: war krank.', 'konjugation'],
      ['warst', '—', 'كنتَ', 'Wo warst du gestern?', 'Wo war du gestern?', 'مع du: warst.', 'konjugation'],
      ['waren', '—', 'كنّا · كانوا', 'Wir waren im Kino.', 'Wir war im Kino.', 'مع wir: waren.', 'konjugation'],
      ['wart', '—', 'كنتم', 'Wart ihr zu Hause?', 'Waren ihr zu Hause?', 'مع ihr: wart.', 'konjugation'],
      ['hatte', 'haben · hatte · hat gehabt', 'كان لديه', 'Ich hatte keine Zeit.', 'Ich war keine Zeit.', 'الملكية: hatte.', 'konjugation'],
      ['hattest', '—', 'كان لديك', 'Hattest du Hunger?', 'Hatte du Hunger?', 'مع du: hattest.', 'konjugation'],
      ['hatten', '—', 'كان لدينا · لديهم', 'Wir hatten viel Spaß.', 'Wir hatte viel Spaß.', 'مع wir: hatten.', 'konjugation'],
      ['es gab', '—', 'كان يوجد', 'Es gab ein Problem.', 'Es war ein Problem gibt.', 'كان يوجد: es gab.', 'konjugation', 'gab'],
      ['vor … Jahren', '—', 'قبل … سنوات', 'Vor zwei Jahren war ich in Berlin.', 'Vor zwei Jahre war ich in Berlin.', 'vor + داتيف الجمع: Jahren.', 'kasus', 'Jahren'],
      ['als Kind', '—', 'عندما كان طفلًا', 'Als Kind hatte ich einen Hund.', 'Als Kind ich hatte einen Hund.', 'بعد Als Kind الفعل ثانيًا.', 'wortstellung', 'Kind'],
      ['die Schulzeit', '—', 'فترة المدرسة', 'In meiner Schulzeit war ich faul.', 'In meine Schulzeit war ich faul.', 'in + داتيف: meiner Schulzeit.', 'kasus'],
      ['die Ferien', 'nur Plural', 'العطلة المدرسية', 'Die Ferien waren toll.', 'Die Ferien war toll.', 'Ferien جمع ← waren.', 'konjugation'],
      ['sonnig', '—', 'مشمس', 'Das Wetter war sonnig.', 'Das Wetter war sonnige.', 'بعد war بلا نهاية.', 'deklination'],
      ['die Party', 'die Partys', 'الحفلة', 'Die Party war super.', 'Die Party hatte super.', 'الحالة: war.', 'konjugation'],
      ['satt', '—', 'شبعان', 'Nach dem Essen war ich satt.', 'Nach dem Essen hatte ich satt.', 'الحالة: war satt.', 'konjugation'],
      ['Angst haben', 'hat Angst · hatte Angst · hat Angst gehabt', 'يخاف', 'Als Kind hatte ich Angst vor Hunden.', 'Als Kind war ich Angst vor Hunden.', 'Angst haben: hatte Angst.', 'konjugation', 'Angst'],
      ['Pech haben', 'hat Pech · hatte Pech · hat Pech gehabt', 'يسوء حظّه', 'Gestern hatte ich Pech.', 'Gestern war ich Pech.', 'Pech haben: hatte.', 'konjugation', 'Pech'],
      ['der Ärger', '—', 'المتاعب · الغضب', 'Es gab Ärger mit dem Chef.', 'Es gab Ärger mit den Chef.', 'mit + داتيف: dem Chef.', 'kasus'],
      ['letzten Monat', '—', 'الشهر الماضي', 'Letzten Monat waren wir in Tunis.', 'Letzten Monat wir waren in Tunis.', 'الفعل ثانيًا: waren wir.', 'wortstellung', 'Letzten'],
      ['noch nie', '—', 'لم … قط', 'Ich war noch nie in Berlin.', 'Ich war noch nie nicht in Berlin.', 'noch nie تنفي وحدها.', 'lexik-kollokation', 'nie']
    ],
    tricks: [
      { trick: 'war للحالة، hatte للملكية', wie: 'Ich war krank. · Ich hatte keine Zeit. · Ich war müde. · Ich hatte Hunger.', warum: 'الصفة بعد war، والاسم بعد hatte؛ Ich hatte krank أول خطأ ماضٍ في A2.', anchor: 'Ich war gestern krank.' },
      { trick: 'جدول war وhatte: الصيغتان الوحيدتان في Präteritum A2', wie: 'war · warst · war · waren · wart · waren — hatte · hattest · hatte · hatten · hattet · hatten.', warum: 'بقية الأفعال تُحكى بـ Perfekt في A2؛ هذان الفعلان فقط يُحكيان بالماضي البسيط.', anchor: 'Wir waren im Kino.' },
      { trick: 'es gab = كان يوجد', wie: 'Es gibt ein Problem. ← Es gab ein Problem.', warum: 'ماضي es gibt هو gab وليس war gibt؛ الصيغة واحدة ثابتة.', anchor: 'Es gab ein Problem.' }
    ],
    order: [
      { satz: 'Gestern | war | ich krank.', ar: 'أمس كنت مريضًا.' },
      { satz: 'Als Kind | hatte | ich einen Hund.', ar: 'عندما كنت طفلًا كان لديّ كلب.' }
    ],
    writing: {
      prompt: 'احكِ عن عطلتك الماضية في خمس جمل بـ war وhatte: أين كنت، كيف كان الطقس، هل كان لديك وقت، ماذا كان هناك (es gab)، وكيف كانت الحفلة أو الرحلة.',
      promptDe: 'Letzten Monat war ich in … · Das Wetter war … · Ich hatte viel Zeit. · Es gab … · Die Party war …',
      points: ['war ثلاث مرات', 'hatte مرة', 'es gab مرة', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'konjugation'
    }
  }
};

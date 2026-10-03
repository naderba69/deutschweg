/* Deutschweg — P3.2 lexical layer, A2 production unit 6 (PRODUCTION.md):
   a2-u1-l1 … a2-u1-l6. Same row format as vocab-a1-02.js; 20 words per
   row (decision 15), three tricks, two annotated order sentences, a
   40-word writing task (Goethe A2 Schreiben). */

module.exports = {
  'a2-u1-l1': {
    items: [
      ['dem', '—', 'أداة الداتيف للمذكر والمحايد', 'Ich helfe dem Mann.', 'Ich helfe den Mann.', 'helfen + داتيف: dem Mann.', 'kasus'],
      ['der (Dativ)', '—', 'أداة الداتيف للمؤنث', 'Ich danke der Frau.', 'Ich danke die Frau.', 'danken + داتيف: der Frau.', 'kasus', 'der'],
      ['den (Dativ Plural)', '—', 'أداة داتيف الجمع', 'Ich helfe den Kindern.', 'Ich helfe die Kindern.', 'داتيف الجمع: den Kindern.', 'kasus', 'den'],
      ['einem', '—', 'أداة نكرة داتيف مذكر ومحايد', 'Ich gebe einem Kind das Buch.', 'Ich gebe ein Kind das Buch.', 'داتيف النكرة: einem Kind.', 'kasus'],
      ['einer', '—', 'أداة نكرة داتيف مؤنث', 'Ich helfe einer Frau.', 'Ich helfe eine Frau.', 'داتيف المؤنث: einer Frau.', 'kasus'],
      ['helfen', 'hilft · half · hat geholfen', 'يساعد', 'Kannst du dem Mann helfen?', 'Kannst du den Mann helfen?', 'helfen + داتيف.', 'kasus', 'helfen'],
      ['danken', 'dankt · dankte · hat gedankt', 'يشكر', 'Ich danke dem Lehrer.', 'Ich danke den Lehrer.', 'danken + داتيف.', 'kasus', 'danke'],
      ['geben', 'gibt · gab · hat gegeben', 'يعطي', 'Ich gebe dem Kind einen Apfel.', 'Ich gebe das Kind einen Apfel.', 'المتلقي داتيف: dem Kind.', 'kasus', 'gebe'],
      ['schenken', 'schenkt · schenkte · hat geschenkt', 'يُهدي', 'Ich schenke der Mutter Blumen.', 'Ich schenke die Mutter Blumen.', 'المتلقية داتيف: der Mutter.', 'kasus', 'schenke'],
      ['zeigen', 'zeigt · zeigte · hat gezeigt', 'يُري', 'Ich zeige dem Gast die Stadt.', 'Ich zeige den Gast die Stadt.', 'zeigen + داتيف الشخص.', 'kasus', 'zeige'],
      ['gehören', 'gehört · gehörte · hat gehört', 'يخصّ · يعود لـ', 'Das Auto gehört dem Chef.', 'Das Auto gehört den Chef.', 'gehören + داتيف.', 'kasus', 'gehört'],
      ['bringen', 'bringt · brachte · hat gebracht', 'يُحضر لـ', 'Der Kellner bringt dem Gast die Suppe.', 'Der Kellner bringt den Gast die Suppe.', 'المتلقي داتيف: dem Gast.', 'kasus', 'bringt'],
      ['der Gast', 'die Gäste', 'الضيف', 'Wir geben dem Gast ein Zimmer.', 'Wir geben der Gast ein Zimmer.', 'Gast مذكر: dem Gast.', 'genus'],
      ['die Kinder', 'das Kind · die Kinder', 'الأطفال', 'Ich lese den Kindern vor.', 'Ich lese den Kinder vor.', 'داتيف الجمع يأخذ -n: den Kindern.', 'kasus', 'Kindern'],
      ['das Geschenk', 'die Geschenke', 'الهدية', 'Das Geschenk ist für dich.', 'Das Geschenk ist für dir.', 'für + النصب: für dich.', 'kasus'],
      ['die Nachbarin', 'die Nachbarinnen', 'الجارة', 'Ich helfe der Nachbarin.', 'Ich helfe die Nachbarin.', 'helfen + داتيف: der Nachbarin.', 'kasus'],
      ['der Opa', 'die Opas', 'الجدّ', 'Ich schenke dem Opa ein Buch.', 'Ich schenke den Opa ein Buch.', 'المتلقي داتيف: dem Opa.', 'kasus'],
      ['die Oma', 'die Omas', 'الجدّة', 'Das gehört der Oma.', 'Das gehört die Oma.', 'gehören + داتيف: der Oma.', 'kasus'],
      ['wem', '—', 'لمن؟', 'Wem gehört das Handy?', 'Wen gehört das Handy?', 'السؤال عن الداتيف: Wem.', 'kasus'],
      ['gratulieren', 'gratuliert · gratulierte · hat gratuliert', 'يهنّئ', 'Ich gratuliere dir zum Geburtstag.', 'Ich gratuliere dich zum Geburtstag.', 'gratulieren + داتيف: dir.', 'kasus', 'gratuliere']
    ],
    tricks: [
      { trick: 'الداتيف: dem للمذكر والمحايد، der للمؤنث، den مع -n للجمع', wie: 'dem Mann · dem Kind · der Frau · den Kindern.', warum: 'ثلاثة أشكال فقط، وder المؤنث هي الفخ لأنها تشبه رفع المذكر.', anchor: 'Ich danke der Frau.' },
      { trick: 'المتلقي داتيف والشيء نصب', wie: 'Ich gebe dem Kind (لمن؟) einen Apfel (ماذا؟).', warum: 'الفعلان geben وschenken يحملان مفعولين؛ من يسأل «لمن؟» قبل «ماذا؟» لا يخطئ.', anchor: 'Ich gebe dem Kind einen Apfel.' },
      { trick: 'helfen وdanken وgehören وgratulieren: مفعول واحد وداتيف', wie: 'Ich helfe dir. · Ich danke dir. · Das gehört dir. · Ich gratuliere dir.', warum: 'العربية تجعل مفعولها مباشرًا (أساعدك)، والألمانية تضعه داتيفًا؛ الأفعال الأربعة تُحفظ قائمة.', anchor: 'Das Auto gehört dem Chef.' }
    ],
    order: [
      { satz: 'Ich | helfe | dem Mann.', ar: 'أساعد الرجل.' },
      { satz: 'Ich | gebe | dem Kind einen Apfel.', ar: 'أعطي الطفل تفاحة.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن عيد ميلاد في عائلتك: لمن تُهدي ماذا، من تساعد في التحضير، من تشكر، لمن تُظهر الصور، ولمن تهنّئ. استعمل dem وder وden.',
      promptDe: 'Ich schenke meiner Mutter … · Ich helfe meinem Vater … · Ich danke … · Ich zeige den Gästen … · Ich gratuliere …',
      points: ['dem وder وden مرة لكل منها', 'فعل بمفعولين (geben أو schenken)', 'فعل داتيف واحد (helfen أو danken أو gratulieren)', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'kasus'
    }
  },

  'a2-u1-l2': {
    items: [
      ['dir', '—', 'لك (داتيف)', 'Ich gebe dir das Buch.', 'Ich gebe dich das Buch.', 'المتلقي داتيف: dir.', 'kasus'],
      ['ihm', '—', 'له (داتيف)', 'Ich helfe ihm.', 'Ich helfe ihn.', 'helfen + داتيف: ihm.', 'kasus'],
      ['ihr (Dativ)', '—', 'لها (داتيف)', 'Ich schenke ihr eine Blume.', 'Ich schenke sie eine Blume.', 'المتلقية داتيف: ihr.', 'kasus', 'ihr'],
      ['ihnen', '—', 'لهم (داتيف)', 'Ich danke ihnen.', 'Ich danke sie.', 'danken + داتيف الجمع: ihnen.', 'kasus'],
      ['uns (Dativ)', '—', 'لنا (داتيف)', 'Er hilft uns.', 'Er hilft wir.', 'داتيف: uns.', 'kasus', 'uns'],
      ['euch (Dativ)', '—', 'لكم (داتيف)', 'Ich zeige euch die Stadt.', 'Ich zeige euer die Stadt.', 'داتيف: euch.', 'kasus', 'euch'],
      ['fehlen', 'fehlt · fehlte · hat gefehlt', 'ينقص · يفتقده', 'Du fehlst mir.', 'Du fehlst mich.', 'fehlen + داتيف: mir.', 'kasus', 'fehlst'],
      ['glauben', 'glaubt · glaubte · hat geglaubt', 'يصدّق', 'Ich glaube dir.', 'Ich glaube dich.', 'glauben + داتيف الشخص: dir.', 'kasus', 'glaube'],
      ['folgen', 'folgt · folgte · ist gefolgt', 'يتبع', 'Folgen Sie mir, bitte.', 'Folgen Sie mich, bitte.', 'folgen + داتيف.', 'kasus', 'Folgen'],
      ['leihen', 'leiht · lieh · hat geliehen', 'يُعير', 'Kannst du mir dein Handy leihen?', 'Kannst du mich dein Handy leihen?', 'المتلقي داتيف: mir.', 'kasus', 'leihen'],
      ['wünschen', 'wünscht · wünschte · hat gewünscht', 'يتمنى لـ', 'Ich wünsche dir viel Glück.', 'Ich wünsche dich viel Glück.', 'wünschen + داتيف الشخص.', 'kasus', 'wünsche'],
      ['schicken', 'schickt · schickte · hat geschickt', 'يرسل', 'Ich schicke ihm eine E-Mail.', 'Ich schicke ihn eine E-Mail.', 'المتلقي داتيف: ihm.', 'kasus', 'schicke'],
      ['erzählen', 'erzählt · erzählte · hat erzählt', 'يحكي لـ', 'Erzähl mir die Geschichte!', 'Erzähl mich die Geschichte!', 'erzählen + داتيف الشخص.', 'kasus', 'Erzähl'],
      ['holen', 'holt · holte · hat geholt', 'يُحضر', 'Ich hole dir einen Kaffee.', 'Ich hole dich einen Kaffee.', 'المتلقي داتيف: dir.', 'kasus', 'hole'],
      ['das Glück', '—', 'الحظ · السعادة', 'Viel Glück!', 'Viele Glück!', 'Glück لا يُعد: Viel Glück.', 'deklination'],
      ['der Blumenstrauß', 'die Blumensträuße', 'باقة الزهور', 'Ich schenke ihr einen Blumenstrauß.', 'Ich schenke ihr ein Blumenstrauß.', 'Blumenstrauß مذكر: einen.', 'kasus'],
      ['die Hilfe', '—', 'المساعدة', 'Danke für deine Hilfe!', 'Danke für deiner Hilfe!', 'für + النصب: deine Hilfe.', 'kasus'],
      ['gern geschehen', '—', 'عفوًا (ردًا على الشكر)', 'Danke! – Gern geschehen.', 'Danke! – Nichts, bitte.', 'ردّ الشكر: Gern geschehen أو Bitte.', 'lexik-kollokation', 'geschehen'],
      ['die Überraschung', 'die Überraschungen', 'المفاجأة', 'Das ist eine Überraschung für dich.', 'Das ist eine Überraschung für dir.', 'für + النصب: für dich.', 'kasus'],
      ['bitten', 'bittet · bat · hat gebeten', 'يرجو · يطلب من', 'Ich bitte dich um Hilfe.', 'Ich bitte dir um Hilfe.', 'bitten + النصب (استثناء): dich.', 'kasus', 'bitte']
    ],
    tricks: [
      { trick: 'mir وdir وihm وihr وuns وeuch وihnen: جدول الداتيف للضمائر', wie: 'mich ← mir · dich ← dir · ihn ← ihm · sie ← ihr · sie ← ihnen.', warum: 'النصب حُفظ في A1؛ الداتيف يغيّر الحرف الأخير فقط (m أو r)، فيُبنى على ما سبق.', anchor: 'Ich gebe dir das Buch.' },
      { trick: 'الشخص داتيف في أفعال العطاء والكلام', wie: 'geben · schenken · schicken · erzählen · zeigen — الشخص mir أو dir، والشيء نصب.', warum: 'كل فعل فيه «لـ» ضمنية يأخذ الشخص داتيفًا؛ هذا يغطي عشرات الأفعال بقاعدة واحدة.', anchor: 'Ich schicke ihm eine E-Mail.' },
      { trick: 'bitten وfragen استثناء: النصب', wie: 'Ich bitte dich. · Ich frage dich. — لكن Ich antworte dir. · Ich danke dir.', warum: 'فعلا الطلب والسؤال يخالفان القاعدة، ويُحفظان معًا ضد danken وantworten.', anchor: 'Ich bitte dich um Hilfe.' }
    ],
    order: [
      { satz: 'Ich | schenke | ihr eine Blume.', ar: 'أهديها زهرة.' },
      { satz: 'Ich | wünsche | dir viel Glück.', ar: 'أتمنى لك حظًا سعيدًا.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل لصديق بعيد: أنه ينقصك، ماذا ترسل له، ماذا تحكي له، ماذا تتمنى له، وطلب بأن يردّ عليك.',
      promptDe: 'Du fehlst mir. · Ich schicke dir … · Ich erzähle dir … · Ich wünsche dir … · Ich bitte dich: Schreib mir zurück!',
      points: ['dir ثلاث مرات على الأقل', 'فعل واحد بالنصب (bitten)', 'الشخص داتيف والشيء نصب', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'kasus'
    }
  },

  'a2-u1-l3': {
    items: [
      ['wohin', '—', 'إلى أين', 'Wohin gehst du?', 'Wo gehst du?', 'الاتجاه: Wohin؛ wo للمكان.', 'lexik-kollokation'],
      ['legen', 'legt · legte · hat gelegt', 'يضع (أفقيًا)', 'Ich lege das Buch auf den Tisch.', 'Ich lege das Buch auf dem Tisch.', 'إلى أين؟ ← النصب: auf den Tisch.', 'kasus', 'lege'],
      ['stellen', 'stellt · stellte · hat gestellt', 'يضع (عموديًا)', 'Ich stelle die Flasche in den Kühlschrank.', 'Ich stelle die Flasche in dem Kühlschrank.', 'الحركة ← النصب: in den Kühlschrank.', 'kasus', 'stelle'],
      ['setzen', 'setzt · setzte · hat gesetzt', 'يُجلس', 'Ich setze das Kind auf den Stuhl.', 'Ich setze das Kind auf dem Stuhl.', 'النصب للاتجاه: auf den Stuhl.', 'kasus', 'setze'],
      ['sich setzen', 'setzt sich · setzte sich · hat sich gesetzt', 'يجلس (حركة)', 'Ich setze mich auf das Sofa.', 'Ich setze mich auf dem Sofa.', 'الجلوس حركة ← النصب: auf das Sofa.', 'kasus', 'mich'],
      ['sitzen', 'sitzt · saß · hat gesessen', 'يجلس (حالة)', 'Ich sitze auf dem Sofa.', 'Ich sitze auf das Sofa.', 'أين؟ ← داتيف: auf dem Sofa.', 'kasus', 'sitze'],
      ['stecken', 'steckt · steckte · hat gesteckt', 'يُدخل · يدسّ', 'Ich stecke den Schlüssel in die Tasche.', 'Ich stecke den Schlüssel in der Tasche.', 'الاتجاه ← النصب: in die Tasche.', 'kasus', 'stecke'],
      ['ins', '—', 'إلى داخل (in das)', 'Wir gehen ins Kino.', 'Wir gehen im Kino.', 'الاتجاه: ins (in das)؛ im للمكان.', 'präposition'],
      ['ans', '—', 'إلى (an das)', 'Wir fahren ans Meer.', 'Wir fahren am Meer.', 'الاتجاه: ans Meer؛ am Meer للمكان.', 'präposition'],
      ['aufs', '—', 'على (auf das)', 'Ich lege das Handy aufs Bett.', 'Ich lege das Handy auf dem Bett.', 'الاتجاه: aufs Bett.', 'präposition'],
      ['das Meer', 'die Meere', 'البحر', 'Im Sommer fahren wir ans Meer.', 'Im Sommer fahren wir an dem Meer.', 'الاتجاه ← النصب: ans Meer.', 'kasus'],
      ['der Boden', 'die Böden', 'الأرضية', 'Die Tasche steht auf dem Boden.', 'Die Tasche steht auf den Boden.', 'أين؟ ← داتيف: auf dem Boden.', 'kasus'],
      ['die Ecke', 'die Ecken', 'الزاوية', 'Stell den Stuhl in die Ecke.', 'Stell den Stuhl in der Ecke.', 'الحركة ← النصب: in die Ecke.', 'kasus'],
      ['die Schublade', 'die Schubladen', 'الدرج', 'Die Schlüssel sind in der Schublade.', 'Die Schlüssel sind in die Schublade.', 'أين؟ ← داتيف: in der Schublade.', 'kasus'],
      ['die Wiese', 'die Wiesen', 'المرج', 'Die Kinder spielen auf der Wiese.', 'Die Kinder spielen auf die Wiese.', 'أين؟ ← auf der Wiese.', 'kasus'],
      ['der See', 'die Seen', 'البحيرة', 'Wir gehen an den See.', 'Wir gehen an dem See.', 'الاتجاه ← an den See.', 'kasus'],
      ['die Garage', 'die Garagen', 'المرآب', 'Das Auto steht in der Garage.', 'Das Auto steht in die Garage.', 'أين؟ ← in der Garage.', 'kasus'],
      ['der Keller', 'die Keller', 'القبو', 'Ich bringe die Kartons in den Keller.', 'Ich bringe die Kartons in dem Keller.', 'الاتجاه ← in den Keller.', 'kasus'],
      ['die Tafel', 'die Tafeln', 'السبّورة', 'Der Lehrer schreibt an die Tafel.', 'Der Lehrer schreibt an der Tafel.', 'الكتابة على السبورة اتجاه: an die Tafel.', 'kasus'],
      ['unterwegs', '—', 'في الطريق', 'Ich bin gerade unterwegs.', 'Ich bin gerade unterweg.', 'unterwegs بـ s في الآخر.', 'orthographie']
    ],
    tricks: [
      { trick: 'wo؟ داتيف — wohin؟ نصب', wie: 'Ich bin in der Stadt (wo) · Ich gehe in die Stadt (wohin).', warum: 'الحرف نفسه بحالتين؛ السؤال الذي تطرحه على الجملة يحدد الأداة.', anchor: 'Ich lege das Buch auf den Tisch.' },
      { trick: 'legen وstellen وsetzen حركة، liegen وstehen وsitzen حالة', wie: 'Ich lege es auf den Tisch. ← Es liegt auf dem Tisch.', warum: 'الأزواج الثلاثة تعلّم الحالة من الفعل نفسه قبل حرف الجر؛ الفعل المتعدي يأخذ النصب.', anchor: 'Ich sitze auf dem Sofa.' },
      { trick: 'ins وans وaufs: دمج in وan وauf مع das للاتجاه', wie: 'ins Kino · ans Meer · aufs Bett — وim وam للمكان.', warum: 'الدمج يخفي الأداة، فمن يرى ins يعرف أنها نصب واتجاه بلا تفكير.', anchor: 'Wir gehen ins Kino.' }
    ],
    order: [
      { satz: 'Ich | lege | das Buch auf den Tisch.', ar: 'أضع الكتاب على الطاولة.' },
      { satz: 'Das Auto | steht | in der Garage.', ar: 'السيارة في المرآب.' }
    ],
    writing: {
      prompt: 'انتقلت إلى شقة جديدة. اكتب خمس جمل: أين تضع السرير (stellen)، أين تضع الكتب (legen)، أين تعلّق الصورة، أين تجلس في المساء، وإلى أين تذهب في عطلة نهاية الأسبوع.',
      promptDe: 'Ich stelle das Bett … · Ich lege die Bücher … · Ich hänge das Bild … · Am Abend sitze ich … · Am Wochenende gehen wir ins …',
      points: ['ثلاث جمل حركة بالنصب', 'جملتا مكان بالداتيف', 'legen أو stellen مقابل liegen أو sitzen', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'kasus'
    }
  },

  'a2-u1-l4': {
    items: [
      ['weil', '—', 'لأنّ', 'Ich bleibe zu Hause, weil ich müde bin.', 'Ich bleibe zu Hause, weil ich bin müde.', 'بعد weil الفعل في الآخر.', 'wortstellung'],
      ['deshalb', '—', 'لذلك', 'Ich bin müde, deshalb bleibe ich zu Hause.', 'Ich bin müde, deshalb ich bleibe zu Hause.', 'بعد deshalb الفعل مباشرة.', 'wortstellung'],
      ['denn', '—', 'لأنّ (بلا تغيير ترتيب)', 'Ich bleibe, denn ich bin müde.', 'Ich bleibe, denn ich müde bin.', 'denn أداة رئيسية: الفعل ثانيًا.', 'wortstellung'],
      ['erkältet', '—', 'مصاب بالزكام', 'Ich komme nicht, weil ich erkältet bin.', 'Ich komme nicht, weil ich erkältet.', 'جملة weil تحتاج فعلًا في الآخر: bin.', 'wortstellung'],
      ['zu viel', '—', 'كثير جدًا', 'Ich habe zu viel Arbeit.', 'Ich habe zu viele Arbeit.', 'Arbeit لا تُعد: zu viel.', 'deklination', 'viel'],
      ['kaputt', '—', 'معطّل', 'Ich komme zu Fuß, weil mein Auto kaputt ist.', 'Ich komme zu Fuß, weil mein Auto ist kaputt.', 'ist في الآخر.', 'wortstellung'],
      ['zu Fuß', '—', 'مشيًا', 'Ich gehe zu Fuß.', 'Ich gehe mit Fuß.', 'مشيًا: zu Fuß.', 'präposition', 'Fuß'],
      ['verpassen', 'verpasst · verpasste · hat verpasst', 'يفوّت (قطارًا)', 'Ich bin spät, weil ich den Bus verpasst habe.', 'Ich bin spät, weil ich habe den Bus verpasst.', 'في جملة weil: verpasst habe في الآخر.', 'wortstellung', 'verpasst'],
      ['darum', '—', 'لهذا', 'Es regnet, darum nehme ich den Bus.', 'Es regnet, darum ich nehme den Bus.', 'بعد darum الفعل ثانيًا.', 'wortstellung'],
      ['nämlich', '—', 'ذلك أنّ (تفسير)', 'Ich bleibe zu Hause, ich bin nämlich krank.', 'Ich bleibe zu Hause, nämlich ich bin krank.', 'nämlich لا تقف أولًا؛ تأتي بعد الفعل.', 'wortstellung'],
      ['das Wetter', '—', 'الطقس', 'Wir bleiben drinnen, weil das Wetter schlecht ist.', 'Wir bleiben drinnen, weil das Wetter ist schlecht.', 'ist في الآخر.', 'wortstellung'],
      ['drinnen', '—', 'في الداخل', 'Heute bleiben wir drinnen.', 'Heute bleiben wir in drinnen.', 'drinnen ظرف بلا in.', 'präposition'],
      ['draußen', '—', 'في الخارج', 'Es ist kalt draußen.', 'Es ist kalt in draußen.', 'draußen بلا in.', 'präposition'],
      ['also', '—', 'إذن', 'Ich habe Zeit, also komme ich.', 'Ich habe Zeit, also ich komme.', 'also = إذن (لا «أيضًا» كالإنجليزية)، وبعدها الفعل ثانيًا.', 'wortstellung'],
      ['die Grippe', 'die Grippen', 'الإنفلونزا', 'Er fehlt, weil er Grippe hat.', 'Er fehlt, weil er hat Grippe.', 'hat في الآخر.', 'wortstellung'],
      ['die Panne', 'die Pannen', 'عطل السيارة', 'Wir kommen später, weil wir eine Panne haben.', 'Wir kommen später, weil wir haben eine Panne.', 'haben في الآخر.', 'wortstellung'],
      ['eilig', '—', 'مستعجل', 'Ich habe es eilig.', 'Ich bin eilig.', 'es eilig haben: Ich habe es eilig.', 'lexik-kollokation'],
      ['der Grund', 'die Gründe', 'السبب', 'Der Grund ist das Wetter.', 'Die Grund ist das Wetter.', 'Grund مذكر: der Grund.', 'genus'],
      ['wieso', '—', 'لماذا (عامية)', 'Wieso kommst du nicht?', 'Wieso du kommst nicht?', 'بعد Wieso الفعل ثانيًا.', 'wortstellung'],
      ['die Erklärung', 'die Erklärungen', 'التفسير', 'Das ist keine Erklärung.', 'Das ist kein Erklärung.', '-ung مؤنثة: keine Erklärung.', 'genus']
    ],
    tricks: [
      { trick: 'weil ترسل الفعل إلى الآخر، deshalb تجذبه إلى الثاني', wie: 'Ich bleibe, weil ich müde bin. · Ich bin müde, deshalb bleibe ich.', warum: 'السبب نفسه بأداتين مختلفتين في الترتيب؛ من يخلطهما يخطئ في الجملتين معًا.', anchor: 'Ich bin müde, deshalb bleibe ich zu Hause.' },
      { trick: 'denn مثل weil في المعنى، مثل und في الترتيب', wie: 'Ich bleibe, denn ich bin müde. — الفعل ثانيًا كما في الجملة الرئيسية.', warum: 'denn مخرج آمن لمن لم يعتد الفعل الأخير بعد، لكنها لا تبدأ الجملة.', anchor: 'Ich bleibe, denn ich bin müde.' },
      { trick: 'فعلان في آخر weil: المشارك ثم المساعد', wie: '…, weil ich den Bus verpasst habe. · …, weil ich arbeiten muss.', warum: 'المساعد يذهب إلى الآخر الآخر؛ الترتيب habe verpasst داخل weil أكثر خطأ في A2.', anchor: 'Ich bin spät, weil ich den Bus verpasst habe.' }
    ],
    order: [
      { satz: 'weil | ich müde | bin.', clause: 'sub', ar: 'لأنني متعب (الجملة الفرعية وحدها)' },
      { satz: 'Deshalb | bleibe | ich zu Hause.', ar: 'لذلك أبقى في البيت.' }
    ],
    writing: {
      prompt: 'اعتذر لصديق في خمس جمل عن عدم المجيء: السبب بـ weil، سبب ثانٍ بـ denn أو nämlich، النتيجة بـ deshalb، ماذا تقترح بدلًا، وتحية.',
      promptDe: 'Ich kann nicht kommen, weil … · Ich bin nämlich … · Deshalb … · Wir können aber … · Viele Grüße',
      points: ['weil بالفعل في الآخر', 'deshalb أو darum بالفعل ثانيًا', 'denn أو nämlich', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'wortstellung'
    }
  },

  'a2-u1-l5': {
    items: [
      ['dass', '—', 'أنّ', 'Ich denke, dass das stimmt.', 'Ich denke, que das stimmt.', 'que الفرنسية وthat الإنجليزية؛ dass.', 'falser-freund'],
      ['denken', 'denkt · dachte · hat gedacht', 'يظنّ · يفكر', 'Ich denke, dass er kommt.', 'Ich denke, dass er kommen.', 'الفعل مصرّفًا في الآخر: kommt.', 'konjugation', 'denke'],
      ['meinen', 'meint · meinte · hat gemeint', 'يرى · يقصد', 'Ich meine, dass das zu teuer ist.', 'Ich meine, dass das ist zu teuer.', 'ist في الآخر.', 'wortstellung', 'meine'],
      ['wissen', 'weiß · wusste · hat gewusst', 'يعرف', 'Ich weiß, dass du kommst.', 'Ich weiß, dass du kommst heute.', 'الفعل آخر الجملة الفرعية: dass du heute kommst.', 'wortstellung', 'weiß'],
      ['hoffen', 'hofft · hoffte · hat gehofft', 'يأمل', 'Ich hoffe, dass es nicht regnet.', 'Ich hoffe, dass es regnet nicht.', 'nicht قبل الفعل الأخير: nicht regnet.', 'wortstellung', 'hoffe'],
      ['sagen', 'sagt · sagte · hat gesagt', 'يقول', 'Sie sagt, dass sie keine Zeit hat.', 'Sie sagt, dass sie hat keine Zeit.', 'hat في الآخر.', 'wortstellung', 'sagt'],
      ['stimmen', 'stimmt · stimmte · hat gestimmt', 'يكون صحيحًا', 'Das stimmt.', 'Das ist stimmt.', 'stimmen فعل: Das stimmt، لا ist stimmt.', 'lexik-kollokation', 'stimmt'],
      ['das Komma', 'die Kommas', 'الفاصلة', 'Vor dass steht ein Komma.', 'Vor dass steht eine Komma.', 'Komma محايد: ein Komma.', 'genus'],
      ['wirklich', '—', 'حقًا', 'Ich glaube, dass das wirklich stimmt.', 'Ich glaube, dass das stimmt wirklich.', 'الظرف قبل الفعل الأخير.', 'wortstellung'],
      ['froh', '—', 'مسرور', 'Ich bin froh, dass du da bist.', 'Ich bin froh, dass du bist da.', 'bist في الآخر.', 'wortstellung'],
      ['traurig', '—', 'حزين', 'Ich bin traurig, dass du gehst.', 'Ich bin traurig, dass du gehen.', 'مصرّف: gehst.', 'konjugation'],
      ['sich freuen', 'freut sich · freute sich · hat sich gefreut', 'يفرح', 'Ich freue mich, dass du kommst.', 'Ich freue, dass du kommst.', 'sich freuen انعكاسي: freue mich.', 'deklination', 'freue'],
      ['es tut mir leid', '—', 'آسف', 'Es tut mir leid, dass ich zu spät bin.', 'Es tut mich leid, dass ich zu spät bin.', 'leidtun بالداتيف: mir.', 'kasus', 'leid'],
      ['die Wahrheit', '—', 'الحقيقة', 'Ich sage dir die Wahrheit.', 'Ich sage dich die Wahrheit.', 'sagen + داتيف الشخص: dir.', 'kasus'],
      ['die Information', 'die Informationen', 'المعلومة', 'Die Information ist wichtig.', 'Der Information ist wichtig.', '-ion مؤنثة: die Information.', 'genus'],
      ['informieren', 'informiert · informierte · hat informiert', 'يُعلم', 'Ich informiere dich, dass der Kurs ausfällt.', 'Ich informiere dir, dass der Kurs ausfällt.', 'informieren + النصب: dich.', 'kasus', 'informiere'],
      ['die Lehrerin', 'die Lehrerinnen', 'المعلّمة', 'Die Lehrerin sagt, dass wir viel lernen.', 'Die Lehrerin sagt, dass wir lernen viel.', 'الفعل في الآخر: viel lernen.', 'wortstellung'],
      ['hoffentlich', '—', 'على أمل أن', 'Hoffentlich kommt er.', 'Hoffentlich er kommt.', 'بعد Hoffentlich الفعل ثانيًا.', 'wortstellung'],
      ['merken', 'merkt · merkte · hat gemerkt', 'يلاحظ', 'Ich merke, dass du müde bist.', 'Ich merke, dass du müde.', 'الفرعية تحتاج فعلًا: bist.', 'wortstellung', 'merke'],
      ['das Gegenteil', 'die Gegenteile', 'العكس', 'Ich glaube das Gegenteil.', 'Ich glaube der Gegenteil.', 'Gegenteil محايد: das Gegenteil.', 'genus']
    ],
    tricks: [
      { trick: 'dass: فاصلة قبلها وفعل في آخرها', wie: 'Ich denke, dass das stimmt. · Sie sagt, dass sie keine Zeit hat.', warum: 'الفاصلة والفعل الأخير علامتا الجملة الفرعية؛ that الإنجليزية لا تحمل أيًّا منهما.', anchor: 'Ich denke, dass das stimmt.' },
      { trick: 'الشعور + dass: froh وtraurig وes tut mir leid', wie: 'Ich bin froh, dass … · Ich bin traurig, dass … · Es tut mir leid, dass …', warum: 'ثلاث افتتاحيات تكفي للرسائل القصيرة في A2، وكلها تفتح فرعية بفعل أخير.', anchor: 'Ich bin froh, dass du da bist.' },
      { trick: 'dass بـ ss، وdas بـ s', wie: 'Ich weiß, dass das stimmt. — dass أداة ربط، das أداة تعريف أو ضمير.', warum: 'الكلمتان تُنطقان سواء، والإملاء وحده يفرّق؛ الاختبار: إن أمكن استبدالها بـ dieses فهي das.', anchor: 'Ich weiß, dass du kommst.' }
    ],
    order: [
      { satz: 'Ich | weiß, | | | dass du kommst.', ar: 'أعرف أنك قادم.' },
      { satz: 'dass | sie keine Zeit | hat.', clause: 'sub', ar: 'أنها لا تملك وقتًا (الجملة الفرعية وحدها)' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل لصديق عن خبر سمعته: ماذا تظن، ماذا تعرف، ماذا تأمل، أنك مسرور أو حزين، واعتذار بـ es tut mir leid. استعمل dass في كل جملة.',
      promptDe: 'Ich denke, dass … · Ich weiß, dass … · Ich hoffe, dass … · Ich bin froh, dass … · Es tut mir leid, dass …',
      points: ['خمس جمل dass', 'الفعل في آخر كل فرعية', 'فاصلة قبل dass', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'wortstellung'
    }
  },

  'a2-u1-l6': {
    items: [
      ['wenn', '—', 'إذا · عندما', 'Wenn ich Zeit habe, komme ich.', 'Wenn ich habe Zeit, komme ich.', 'في جملة wenn الفعل في الآخر: Zeit habe.', 'wortstellung'],
      ['regnen', 'regnet · regnete · hat geregnet', 'تمطر', 'Wenn es regnet, bleibe ich zu Hause.', 'Wenn es regnet, ich bleibe zu Hause.', 'بعد الفرعية المتقدمة: bleibe ich.', 'wortstellung', 'regnet'],
      ['schneien', 'schneit · schneite · hat geschneit', 'تُثلج', 'Wenn es schneit, fahren wir nicht.', 'Wann es schneit, fahren wir nicht.', 'الشرط wenn؛ wann للسؤال.', 'lexik-kollokation', 'schneit'],
      ['die Sonne', '—', 'الشمس', 'Wenn die Sonne scheint, gehen wir schwimmen.', 'Wenn die Sonne scheint, wir gehen schwimmen.', 'gehen wir بعد الفرعية.', 'wortstellung'],
      ['warm', '—', 'دافئ', 'Wenn es warm ist, essen wir draußen.', 'Wenn es ist warm, essen wir draußen.', 'ist في الآخر.', 'wortstellung'],
      ['kalt', '—', 'بارد', 'Wenn es kalt ist, ziehe ich eine Jacke an.', 'Wenn es kalt ist, ich ziehe eine Jacke an.', 'ziehe ich بعد الفرعية.', 'wortstellung'],
      ['der Regenschirm', 'die Regenschirme', 'المظلة', 'Nimm einen Regenschirm mit, wenn es regnet.', 'Nimm ein Regenschirm mit, wenn es regnet.', 'Regenschirm مذكر: einen.', 'kasus'],
      ['frieren', 'friert · fror · hat gefroren', 'يشعر بالبرد', 'Ich friere, wenn ich keine Jacke habe.', 'Ich friere, wenn ich habe keine Jacke.', 'habe في الآخر.', 'wortstellung', 'friere'],
      ['das Picknick', 'die Picknicks', 'النزهة', 'Wenn das Wetter gut ist, machen wir ein Picknick.', 'Wenn das Wetter gut ist, machen wir eine Picknick.', 'Picknick محايد: ein Picknick.', 'genus'],
      ['der Ausflug', 'die Ausflüge', 'الرحلة القصيرة', 'Wenn du willst, machen wir einen Ausflug.', 'Wenn du willst, machen wir ein Ausflug.', 'Ausflug مذكر: einen Ausflug.', 'kasus'],
      ['mitnehmen', 'nimmt mit · nahm mit · hat mitgenommen', 'يأخذ معه', 'Wenn du kommst, nimm bitte Brot mit.', 'Wenn du kommst, mitnimm bitte Brot.', 'الأمر: nimm … mit.', 'wortstellung', 'nimm'],
      ['auf jeden Fall', '—', 'على كل حال', 'Ich komme auf jeden Fall.', 'Ich komme auf jeden Falle.', 'auf jeden Fall بلا نهاية.', 'deklination', 'Fall'],
      ['klappen', 'klappt · klappte · hat geklappt', 'ينجح · يسير على ما يرام', 'Wenn es klappt, fahren wir am Samstag.', 'Wenn es klappt, wir fahren am Samstag.', 'fahren wir بعد الفرعية.', 'wortstellung', 'klappt'],
      ['fertig', '—', 'جاهز · منتهٍ', 'Wenn ich fertig bin, rufe ich dich an.', 'Wenn ich bin fertig, rufe ich dich an.', 'bin في الآخر.', 'wortstellung'],
      ['der Durst', '—', 'العطش', 'Wenn ich Durst habe, trinke ich Wasser.', 'Wenn ich Durst habe, ich trinke Wasser.', 'trinke ich بعد الفرعية.', 'wortstellung'],
      ['langweilig', '—', 'مملّ', 'Wenn der Film langweilig ist, gehen wir.', 'Wenn der Film ist langweilig, gehen wir.', 'ist في الآخر.', 'wortstellung'],
      ['spannend', '—', 'مشوّق', 'Der Film ist spannend.', 'Der Film ist spannende.', 'بعد ist بلا نهاية.', 'deklination'],
      ['bald', '—', 'قريبًا', 'Wenn du bald kommst, warten wir.', 'Wenn du kommst bald, warten wir.', 'الظرف قبل الفعل الأخير: bald kommst.', 'wortstellung'],
      ['der Himmel', '—', 'السماء', 'Der Himmel ist blau.', 'Die Himmel ist blau.', 'Himmel مذكر: der Himmel.', 'genus'],
      ['der Wetterbericht', 'die Wetterberichte', 'نشرة الطقس', 'Wenn der Wetterbericht Regen sagt, bleiben wir.', 'Wenn der Wetterbericht sagt Regen, bleiben wir.', 'sagt في الآخر.', 'wortstellung']
    ],
    tricks: [
      { trick: 'wenn في الأول: الفعل آخر الفرعية ثم أول الرئيسية', wie: 'Wenn ich Zeit habe, | komme ich. — فعل، فاصلة، فعل.', warum: 'الفعلان يلتقيان حول الفاصلة؛ هذه الصورة تمنع Wenn ich habe Zeit وich komme معًا.', anchor: 'Wenn ich Zeit habe, komme ich.' },
      { trick: 'wenn ليست if فقط، بل «عندما» أيضًا', wie: 'Wenn es regnet, bleibe ich. = إذا أو عندما تمطر.', warum: 'الإنجليزية تفرّق if وwhen، والألمانية تجمعهما في wenn؛ وwann للسؤال وحده.', anchor: 'Wenn es regnet, bleibe ich zu Hause.' },
      { trick: 'الرئيسية أولًا تحرّر الترتيب', wie: 'Ich komme, wenn ich Zeit habe. — الرئيسية عادية والفرعية تبقى بفعل أخير.', warum: 'ترتيب الجملتين حر، لكن قاعدة كل جملة ثابتة؛ البدء بالرئيسية أسهل للمبتدئ.', anchor: 'Ich friere, wenn ich keine Jacke habe.' }
    ],
    order: [
      { satz: 'Wenn es regnet, | bleibe | ich zu Hause.', ar: 'إذا أمطرت أبقى في البيت.' },
      { satz: 'wenn | ich Zeit | habe.', clause: 'sub', ar: 'إذا كان لديّ وقت (الجملة الفرعية وحدها)' }
    ],
    writing: {
      prompt: 'خطّط عطلة نهاية الأسبوع بخمس جمل شرطية: إذا أشرقت الشمس، إذا أمطرت، إذا كان لديك وقت، إذا كان صديقك جاهزًا، وإذا نجح كل شيء (klappen).',
      promptDe: 'Wenn die Sonne scheint, … · Wenn es regnet, … · Wenn ich Zeit habe, … · Wenn du fertig bist, … · Wenn alles klappt, …',
      points: ['خمس جمل wenn', 'الفعل في آخر الفرعية وأول الرئيسية', 'كلمتان من الطقس', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'wortstellung'
    }
  }
};

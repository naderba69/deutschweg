/* Deutschweg — P3.2 lexical layer, A1 production unit 4 (PRODUCTION.md):
   a1-u3-l1 … a1-u3-l6. Same row format as vocab-a1-02.js. */

module.exports = {
  'a1-u3-l1': {
    items: [
      ['die Speisekarte', 'die Speisekarten', 'قائمة الطعام', 'Die Speisekarte, bitte.', 'Das Menu, bitte.', 'menu الفرنسية؛ die Speisekarte (Menü = وجبة محددة).', 'falser-freund'],
      ['ohne', '—', 'بدون', 'Einen Kaffee ohne Zucker, bitte.', 'Einen Kaffee nicht Zucker, bitte.', 'بدون = ohne، لا nicht.', 'lexik-kollokation'],
      ['mit', '—', 'مع', 'Eine Pizza mit Käse, bitte.', 'Eine Pizza avec Käse, bitte.', 'avec الفرنسية؛ mit.', 'falser-freund'],
      ['das Getränk', 'die Getränke', 'المشروب', 'Was möchten Sie als Getränk?', 'Was möchten Sie als Getränke?', 'مشروب واحد: Getränk في المفرد.', 'plural'],
      ['das Gericht', 'die Gerichte', 'الطبق (وجبة)', 'Das Gericht ist sehr lecker.', 'Der Gericht ist sehr lecker.', 'Gericht محايد: das Gericht.', 'genus'],
      ['der Salat', 'die Salate', 'السلطة', 'Ich nehme einen Salat.', 'Ich nehme eine Salat.', 'Salat مذكر: einen Salat.', 'genus'],
      ['das Hähnchen', 'die Hähnchen', 'الدجاج (طبق)', 'Ich möchte das Hähnchen mit Reis.', 'Ich möchte das Poulet mit Reis.', 'poulet الفرنسية؛ Hähnchen.', 'falser-freund'],
      ['der Fisch', 'die Fische', 'السمك', 'Der Fisch ist frisch.', 'Das Fisch ist frisch.', 'Fisch مذكر: der Fisch.', 'genus'],
      ['das Fleisch', '—', 'اللحم', 'Ich esse kein Fleisch.', 'Ich esse keinen Fleisch.', 'Fleisch محايد: kein Fleisch.', 'genus'],
      ['die Kartoffel', 'die Kartoffeln', 'البطاطا', 'Ich nehme Kartoffeln.', 'Ich nehme Kartoffels.', 'الجمع Kartoffeln.', 'plural', 'Kartoffeln'],
      ['der Reis', '—', 'الأرز', 'Das Hähnchen kommt mit Reis.', 'Das Hähnchen kommt mit Reise.', 'Reis (أرز) ≠ Reise (رحلة).', 'lexik-kollokation'],
      ['das Gemüse', '—', 'الخضار', 'Ich esse viel Gemüse.', 'Ich esse viele Gemüse.', 'Gemüse لا يُعد: viel Gemüse.', 'deklination'],
      ['der Käse', '—', 'الجبن', 'Ein Brot mit Käse, bitte.', 'Ein Brot mit Fromage, bitte.', 'fromage الفرنسية؛ Käse.', 'falser-freund'],
      ['die Milch', '—', 'الحليب', 'Kaffee mit Milch, bitte.', 'Kaffee mit die Milch, bitte.', 'Milch بلا أداة في الطلب: mit Milch.', 'deklination'],
      ['schmecken', 'schmeckt · schmeckte · hat geschmeckt', 'يطيب · يكون لذيذًا', 'Das schmeckt mir gut.', 'Das schmeckt mich gut.', 'schmecken + داتيف: mir.', 'kasus', 'schmeckt'],
      ['lecker', '—', 'لذيذ', 'Die Suppe ist lecker.', 'Die Suppe ist leckere.', 'بعد ist بلا نهاية.', 'deklination'],
      ['der Kellner', 'die Kellner', 'النادل', 'Der Kellner bringt die Rechnung.', 'Der Kellner bringen die Rechnung.', 'مفرد ← bringt.', 'konjugation'],
      ['das Trinkgeld', 'die Trinkgelder', 'البقشيش', 'Ich gebe zwei Euro Trinkgeld.', 'Ich gebe zwei Euros Trinkgeld.', 'Euro بلا -s بعد العدد.', 'plural'],
      ['getrennt', '—', 'منفصل (الدفع)', 'Zusammen oder getrennt? – Getrennt, bitte.', 'Zusammen oder getrennt? – Separat, bitte.', 'séparé الفرنسية؛ getrennt.', 'falser-freund'],
      ['Guten Appetit', '—', 'بالهناء والشفاء', 'Guten Appetit!', 'Gute Appetit!', 'Appetit مذكر في النصب: Guten Appetit.', 'kasus', 'Guten']
    ],
    tricks: [
      { trick: 'ohne وmit تحكمان الطلب كله', wie: 'Kaffee ohne Zucker · Pizza mit Käse · Wasser ohne Gas.', warum: 'كلمتان تغنيان عن nicht وavec في كل طلب؛ وohne تأخذ النصب، mit الداتيف.', anchor: 'Einen Kaffee ohne Zucker, bitte.' },
      { trick: 'Speisekarte لا Menu، وHähnchen لا Poulet', wie: 'die Speisekarte · das Hähnchen · der Käse · das Getränk.', warum: 'في تونس تُطلب الأكلات بالفرنسية، وفي ألمانيا تُفهم الكلمة الفرنسية خطأً أو لا تُفهم.', anchor: 'Die Speisekarte, bitte.' },
      { trick: 'schmecken بالداتيف: Das schmeckt mir', wie: 'Das schmeckt mir. · Schmeckt es dir? · Es schmeckt uns gut.', warum: 'العربية تقول «أعجبني» بالمفعول، والألمانية تجعل الآكل داتيفًا؛ mich هنا خطأ متكرر.', anchor: 'Das schmeckt mir gut.' }
    ],
    order: [
      { satz: 'Ich | nehme | einen Salat.', ar: 'آخذ سلطة.' },
      { satz: 'Das Hähnchen | kommt | mit Reis.', ar: 'الدجاج يأتي مع الأرز.' }
    ],
    writing: {
      prompt: 'أنت في مطعم. اكتب خمس جمل: اطلب قائمة الطعام، اطلب طبقًا مع شيء، اطلب مشروبًا بدون شيء، قل إن الطعام لذيذ، واطلب الحساب منفصلًا.',
      promptDe: 'Die Speisekarte, bitte. · Ich nehme … mit … · Ein … ohne …, bitte. · Das schmeckt mir gut. · Getrennt, bitte.',
      points: ['mit وohne', 'einen أو eine في الطلب', 'schmecken بالداتيف', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'lexik-kollokation'
    }
  },

  'a1-u3-l2': {
    items: [
      ['kosten', 'kostet · kostete · hat gekostet', 'يكلّف', 'Was kostet das?', 'How much kostet das?', 'how much إنجليزية؛ Was kostet.', 'falser-freund', 'kostet'],
      ['der Euro', 'die Euro', 'اليورو', 'Das macht zehn Euro.', 'Das macht zehn Euros.', 'Euro بلا -s بعد العدد.', 'plural'],
      ['der Cent', 'die Cent', 'السنت', 'Das kostet 2 Euro 50 Cent.', 'Das kostet 2 Euro 50 Cents.', 'Cent بلا -s.', 'plural'],
      ['preiswert', '—', 'مناسب السعر', 'Das Hemd ist preiswert.', 'Das Hemd ist preiswerte.', 'بعد ist بلا نهاية.', 'deklination'],
      ['die Größe', 'die Größen', 'المقاس', 'Welche Größe haben Sie?', 'Welche Size haben Sie?', 'size إنجليزية؛ Größe.', 'falser-freund'],
      ['groß', '—', 'كبير', 'Haben Sie das in groß?', 'Haben Sie das in big?', 'big إنجليزية؛ groß.', 'falser-freund'],
      ['klein', '—', 'صغير', 'Das T-Shirt ist zu klein.', 'Das T-Shirt ist zu kleine.', 'بعد ist بلا نهاية: klein.', 'deklination'],
      ['das Hemd', 'die Hemden', 'القميص', 'Das Hemd kostet 20 Euro.', 'Der Hemd kostet 20 Euro.', 'Hemd محايد: das Hemd.', 'genus'],
      ['die Hose', 'die Hosen', 'البنطال', 'Die Hose ist zu lang.', 'Die Hosen ist zu lang.', 'بنطال واحد: die Hose في المفرد.', 'plural'],
      ['gefallen', 'gefällt · gefiel · hat gefallen', 'يعجب', 'Das Kleid gefällt mir.', 'Das Kleid gefällt mich.', 'gefallen + داتيف: mir.', 'kasus', 'gefällt'],
      ['der Pullover', 'die Pullover', 'الكنزة', 'Der Pullover ist aus Wolle.', 'Der Pull ist aus Wolle.', 'pull الفرنسية؛ Pullover.', 'falser-freund'],
      ['anprobieren', 'probiert an · probierte an · hat anprobiert', 'يقيس (ملابس)', 'Kann ich das anprobieren?', 'Kann ich das probieren an?', 'مع kann يبقى anprobieren كاملًا.', 'wortstellung'],
      ['eng', '—', 'ضيّق', 'Die Hose ist zu eng.', 'Die Hose ist zu enge.', 'بعد ist بلا نهاية: eng.', 'deklination'],
      ['die Kasse', 'die Kassen', 'الصندوق (الدفع)', 'Zahlen Sie bitte an der Kasse.', 'Zahlen Sie bitte an die Kasse.', 'أين؟ ← an der Kasse.', 'kasus'],
      ['die Tüte', 'die Tüten', 'الكيس', 'Brauchen Sie eine Tüte?', 'Brauchen Sie einen Tüte?', 'Tüte مؤنثة: eine Tüte.', 'genus'],
      ['der Supermarkt', 'die Supermärkte', 'السوبرماركت', 'Ich gehe in den Supermarkt.', 'Ich gehe in dem Supermarkt.', 'إلى أين؟ ← in den Supermarkt.', 'kasus'],
      ['reduziert', '—', 'مخفّض', 'Die Jacke ist reduziert.', 'Die Jacke ist reduzierte.', 'بعد ist بلا نهاية.', 'deklination'],
      ['das Kilo', 'die Kilo', 'الكيلو', 'Ein Kilo Äpfel, bitte.', 'Ein Kilo von Äpfel, bitte.', 'الكمية بلا von: ein Kilo Äpfel.', 'präposition'],
      ['das Wechselgeld', '—', 'الباقي (نقود)', 'Hier ist Ihr Wechselgeld.', 'Hier ist Ihre Wechselgeld.', 'Wechselgeld محايد: Ihr Wechselgeld.', 'genus'],
      ['die Farbe', 'die Farben', 'اللون', 'Welche Farbe möchten Sie?', 'Welcher Farbe möchten Sie?', 'Farbe مؤنثة: welche Farbe.', 'genus']
    ],
    tricks: [
      { trick: 'Was kostet das? وDas macht … Euro', wie: 'Was kostet das? · Das macht zehn Euro. · Das kostet 2 Euro 50.', warum: 'جملتان ثابتتان تغطيان كل حوار شراء في A1؛ what وten وcombien لا تدخلان.', anchor: 'Das macht zehn Euro.' },
      { trick: 'Euro وCent وKilo بلا جمع بعد العدد', wie: 'zehn Euro · fünfzig Cent · zwei Kilo — لا Euros.', warum: 'وحدات القياس تبقى مفردة بعد الرقم، والفرنسية euros تُغري بالـ s.', anchor: 'Ein Kilo Äpfel, bitte.' },
      { trick: 'passen وgefallen بالداتيف: mir لا mich', wie: 'Das Kleid gefällt mir. · Die Hose passt mir. · Das steht dir.', warum: 'أفعال الإعجاب والمقاس تجعل الشخص داتيفًا؛ العربية «يعجبني» تُغري بـ mich.', anchor: 'Das Kleid gefällt mir.' }
    ],
    order: [
      { satz: 'Das Hemd | kostet | 20 Euro.', ar: 'القميص يكلّف 20 يورو.' },
      { satz: 'Ich | gehe | in den Supermarkt.', ar: 'أذهب إلى السوبرماركت.' }
    ],
    writing: {
      prompt: 'أنت في متجر ملابس. اكتب خمس جمل: اسأل عن السعر، اسأل عن مقاس أكبر، اسأل إن كان يمكنك قياس القطعة، قل إن القطعة تعجبك أو لا تناسبك، واسأل عن اللون.',
      promptDe: 'Was kostet …? · Haben Sie das in …? · Kann ich das anprobieren? · Das gefällt mir. · Welche Farbe …?',
      points: ['Was kostet أو Das macht', 'Größe أو groß/klein', 'gefallen بالداتيف', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'lexik-kollokation'
    }
  },

  'a1-u3-l3': {
    items: [
      ['zuerst', '—', 'أولًا', 'Zuerst stehe ich auf.', 'First stehe ich auf.', 'first إنجليزية؛ zuerst.', 'falser-freund'],
      ['dann', '—', 'ثم', 'Dann frühstücke ich.', 'Dann ich frühstücke.', 'بعد Dann الفعل ثانيًا.', 'wortstellung'],
      ['danach', '—', 'بعد ذلك', 'Danach lerne ich.', 'After das lerne ich.', 'after إنجليزية؛ danach.', 'falser-freund'],
      ['zum Schluss', '—', 'في النهاية', 'Zum Schluss schlafe ich.', 'Zum Schluss ich schlafe.', 'بعد Zum Schluss الفعل ثانيًا.', 'wortstellung', 'Schluss'],
      ['frühstücken', 'frühstückt · frühstückte · hat gefrühstückt', 'يفطر', 'Ich frühstücke um sieben.', 'Ich frühstücke um sieben auf.', 'frühstücken غير منفصل؛ لا auf.', 'wortstellung', 'frühstücke'],
      ['das Frühstück', '—', 'الفطور', 'Das Frühstück ist um acht.', 'Der Frühstück ist um acht.', 'Frühstück محايد.', 'genus'],
      ['das Mittagessen', '—', 'الغداء', 'Zum Mittagessen esse ich Salat.', 'Zu Mittagessen esse ich Salat.', 'zum Mittagessen.', 'präposition'],
      ['das Abendessen', '—', 'العشاء', 'Das Abendessen ist um sieben.', 'Das Dinner ist um sieben.', 'dinner إنجليزية؛ Abendessen.', 'falser-freund'],
      ['duschen', 'duscht · duschte · hat geduscht', 'يستحم', 'Ich dusche am Morgen.', 'Ich dusche in Morgen.', 'am Morgen.', 'präposition', 'dusche'],
      ['sich waschen', 'wäscht sich · wusch sich · hat sich gewaschen', 'يغتسل', 'Ich wasche mich.', 'Ich wasche mir.', 'sich waschen بالنصب: mich (بلا جزء جسم).', 'kasus', 'wasche'],
      ['zur Arbeit', '—', 'إلى العمل', 'Um acht gehe ich zur Arbeit.', 'Um acht gehe ich zu Arbeit.', 'zur Arbeit (zu der).', 'präposition', 'Arbeit'],
      ['die Schule', 'die Schulen', 'المدرسة', 'Die Kinder gehen in die Schule.', 'Die Kinder gehen in der Schule.', 'إلى أين؟ ← in die Schule.', 'kasus'],
      ['die Mittagspause', 'die Mittagspausen', 'استراحة الغداء', 'Die Mittagspause dauert eine Stunde.', 'Die Mittagspause dauert eine Uhr.', 'المدة: eine Stunde.', 'lexik-kollokation'],
      ['nach Hause', '—', 'إلى البيت', 'Um fünf gehe ich nach Hause.', 'Um fünf gehe ich zu Hause.', 'نحو البيت nach Hause؛ في البيت zu Hause.', 'präposition'],
      ['das Essen', '—', 'الطعام', 'Das Essen ist fertig.', 'Die Essen ist fertig.', 'Essen محايد.', 'genus'],
      ['der Feierabend', '—', 'نهاية الدوام', 'Um sechs habe ich Feierabend.', 'Um sechs habe ich Feiertag.', 'Feierabend نهاية الدوام؛ Feiertag عطلة رسمية.', 'lexik-kollokation'],
      ['meistens', '—', 'غالبًا', 'Meistens schlafe ich um elf.', 'Meistens ich schlafe um elf.', 'الفعل ثانيًا.', 'wortstellung'],
      ['manchmal', '—', 'أحيانًا', 'Manchmal lese ich abends.', 'Sometimes lese ich abends.', 'sometimes إنجليزية؛ manchmal.', 'falser-freund'],
      ['immer', '—', 'دائمًا', 'Ich trinke immer Kaffee.', 'Ich trinke Kaffee immer.', 'الظرف قبل المفعول: immer Kaffee.', 'wortstellung'],
      ['der Alltag', '—', 'الحياة اليومية', 'Mein Alltag ist ruhig.', 'Meine Alltag ist ruhig.', 'Alltag مذكر: mein Alltag.', 'genus']
    ],
    tricks: [
      { trick: 'كلمة الترتيب أولًا، الفعل ثانيًا، الفاعل ثالثًا', wie: 'Zuerst stehe ich auf. · Dann frühstücke ich. · Danach lerne ich.', warum: 'الظرف يحتل الموضع الأول فيدفع الفاعل خلف الفعل؛ من يكتب Dann ich يخسر النقطة في كل جملة.', anchor: 'Dann frühstücke ich.' },
      { trick: 'nach Hause نحو البيت، zu Hause في البيت', wie: 'Ich gehe nach Hause. · Ich bin zu Hause.', warum: 'العربية «إلى البيت» و«في البيت» بحرفين مختلفين أيضًا، لكن الفرنسية à la maison واحدة فتختلطان.', anchor: 'Um fünf gehe ich nach Hause.' },
      { trick: 'Frühstück وMittagessen وAbendessen: ثلاث وجبات بـ zum', wie: 'zum Frühstück · zum Mittagessen · zum Abendessen.', warum: 'الوجبة تأخذ zum (zu dem) لأنها محايدة؛ وdinner وlunch لا تُستعاران.', anchor: 'Zum Mittagessen esse ich Salat.' }
    ],
    order: [
      { satz: 'Zuerst | stehe | ich | auf.', ar: 'أولًا أنهض.' },
      { satz: 'Um fünf | gehe | ich nach Hause.', ar: 'في الخامسة أذهب إلى البيت.' }
    ],
    writing: {
      prompt: 'اكتب يومك في خمس جمل مرتبة: zuerst وdann وdanach وzum Schluss، مع الفطور والعمل أو المدرسة والعودة إلى البيت.',
      promptDe: 'Zuerst stehe ich um … auf. · Dann frühstücke ich. · Danach gehe ich zur Arbeit. · Um … gehe ich nach Hause. · Zum Schluss …',
      points: ['أربع كلمات ترتيب والفعل ثانيًا', 'nach Hause أو zur Arbeit', 'وجبة بـ zum', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'wortstellung'
    }
  },

  'a1-u3-l4': {
    items: [
      ['gemacht', 'machen · hat gemacht', 'فعل (اسم المفعول)', 'Ich habe das gemacht.', 'Ich machte das gemacht.', 'Perfekt: habe + gemacht، لا machte معه.', 'konjugation'],
      ['gelernt', 'lernen · hat gelernt', 'تعلّم (اسم المفعول)', 'Ich habe Deutsch gelernt.', 'Ich habe Deutsch gelernen.', 'الفعل المنتظم: ge- + جذر + -t: gelernt.', 'konjugation'],
      ['gekauft', 'kaufen · hat gekauft', 'اشترى (اسم المفعول)', 'Wir haben Brot gekauft.', 'Wir haben gekauft Brot.', 'المشارك في آخر الجملة: Brot gekauft.', 'wortstellung'],
      ['gegessen', 'essen · hat gegessen', 'أكل (اسم المفعول)', 'Was hast du gegessen?', 'Was hast du geesst?', 'essen قوي: gegessen.', 'konjugation'],
      ['getrunken', 'trinken · hat getrunken', 'شرب (اسم المفعول)', 'Ich habe Tee getrunken.', 'Ich habe Tee getrinkt.', 'trinken قوي: getrunken.', 'konjugation'],
      ['gesehen', 'sehen · hat gesehen', 'رأى (اسم المفعول)', 'Hast du den Film gesehen?', 'Hast du den Film sehen?', 'المشارك gesehen، لا المصدر.', 'konjugation'],
      ['geschrieben', 'schreiben · hat geschrieben', 'كتب (اسم المفعول)', 'Ich habe eine E-Mail geschrieben.', 'Ich habe eine E-Mail geschreibt.', 'schreiben قوي: geschrieben.', 'konjugation'],
      ['gelesen', 'lesen · hat gelesen', 'قرأ (اسم المفعول)', 'Ich habe das Buch gelesen.', 'Ich habe das Buch gelest.', 'lesen قوي: gelesen.', 'konjugation'],
      ['gehört', 'hören · hat gehört', 'سمع (اسم المفعول)', 'Ich habe Musik gehört.', 'Ich habe Musik gehören.', 'hören منتظم: gehört.', 'konjugation'],
      ['gespielt', 'spielen · hat gespielt', 'لعب (اسم المفعول)', 'Wir haben Fußball gespielt.', 'Wir haben Fußball gespielen.', 'spielen منتظم: gespielt.', 'konjugation'],
      ['gearbeitet', 'arbeiten · hat gearbeitet', 'عمل (اسم المفعول)', 'Er hat gestern gearbeitet.', 'Er hat gestern gearbeit.', 'الجذر على t: gearbeit-et.', 'konjugation'],
      ['telefoniert', 'telefonieren · hat telefoniert', 'تكلّم بالهاتف (اسم المفعول)', 'Ich habe mit Ali telefoniert.', 'Ich habe mit Ali getelefoniert.', 'الأفعال على -ieren بلا ge-: telefoniert.', 'konjugation'],
      ['besucht', 'besuchen · hat besucht', 'زار (اسم المفعول)', 'Ich habe meine Oma besucht.', 'Ich habe meine Oma gebesucht.', 'be- لا تأخذ ge-: besucht.', 'konjugation'],
      ['gehabt', 'haben · hat gehabt', 'كان لديه (اسم المفعول)', 'Ich habe keine Zeit gehabt.', 'Ich habe keine Zeit gehaben.', 'haben: gehabt.', 'konjugation'],
      ['gesagt', 'sagen · hat gesagt', 'قال (اسم المفعول)', 'Was hat er gesagt?', 'Was hat er gesagen?', 'sagen منتظم: gesagt.', 'konjugation'],
      ['genommen', 'nehmen · hat genommen', 'أخذ (اسم المفعول)', 'Ich habe den Bus genommen.', 'Ich habe den Bus genehmt.', 'nehmen قوي: genommen.', 'konjugation'],
      ['gefunden', 'finden · hat gefunden', 'وجد (اسم المفعول)', 'Ich habe meinen Schlüssel gefunden.', 'Ich habe meinen Schlüssel gefindet.', 'finden قوي: gefunden.', 'konjugation'],
      ['gestern', '—', 'أمس', 'Gestern habe ich gearbeitet.', 'Gestern ich habe gearbeitet.', 'بعد Gestern الفعل المساعد ثانيًا.', 'wortstellung'],
      ['schon', '—', 'بالفعل · سبق أن', 'Ich habe schon gegessen.', 'Ich habe gegessen schon.', 'schon في الحقل الأوسط قبل المشارك.', 'wortstellung'],
      ['letzte Woche', '—', 'الأسبوع الماضي', 'Letzte Woche habe ich viel gelernt.', 'Letzte Woche ich habe viel gelernt.', 'بعد Letzte Woche الفعل ثانيًا.', 'wortstellung', 'Letzte']
    ],
    tricks: [
      { trick: 'haben ثانيًا، والمشارك آخرًا: قوس Perfekt', wie: 'Ich | habe | gestern Deutsch | gelernt.', warum: 'الماضي الألماني كلمتان متباعدتان؛ من يلصقهما (habe gelernt gestern) يكسر القوس.', anchor: 'Ich habe Deutsch gelernt.' },
      { trick: 'ge- … -t للمنتظم، ge- … -en للقوي', wie: 'gelernt · gemacht · gekauft — gesehen · getrunken · geschrieben.', warum: 'النهاية تكشف نوع الفعل؛ gelernen وgetrinkt خلط بين العائلتين.', anchor: 'Ich habe Tee getrunken.' },
      { trick: 'بلا ge-: الأفعال على -ieren وbe- وver-', wie: 'telefoniert · besucht · verstanden — لا getelefoniert.', warum: 'النبر لا يقع على المقطع الأول في هذه الأفعال، فلا مكان لـ ge-؛ قاعدة النبر تغني عن القائمة.', anchor: 'Ich habe mit Ali telefoniert.' }
    ],
    order: [
      { satz: 'Ich | habe | Deutsch | gelernt.', ar: 'تعلمت الألمانية.' },
      { satz: 'Gestern | habe | ich | gearbeitet.', ar: 'أمس عملت.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عمّا فعلته أمس بـ Perfekt مع haben: ماذا أكلت، ماذا اشتريت، ماذا شاهدت أو قرأت، مع من تكلمت بالهاتف، ومتى عملت أو تعلمت.',
      promptDe: 'Gestern habe ich … gegessen. · Ich habe … gekauft. · Ich habe … gesehen. · Ich habe mit … telefoniert. · Am Abend habe ich … gelernt.',
      points: ['خمسة مشاركات في آخر الجملة', 'فعل قوي وفعل منتظم', 'فعل بلا ge-', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'konjugation'
    }
  },

  'a1-u3-l5': {
    items: [
      ['gegangen', 'gehen · ist gegangen', 'ذهب (اسم المفعول)', 'Ich bin nach Hause gegangen.', 'Ich habe nach Hause gegangen.', 'gehen حركة ← sein: bin gegangen.', 'konjugation'],
      ['gekommen', 'kommen · ist gekommen', 'جاء (اسم المفعول)', 'Bist du gestern gekommen?', 'Hast du gestern gekommen?', 'kommen ← sein: bist gekommen.', 'konjugation'],
      ['gefahren', 'fahren · ist gefahren', 'ذهب بمركبة (اسم المفعول)', 'Wir sind nach Tunis gefahren.', 'Wir haben nach Tunis gefahren.', 'fahren حركة ← sein.', 'konjugation'],
      ['geblieben', 'bleiben · ist geblieben', 'بقي (اسم المفعول)', 'Ich bin zu Hause geblieben.', 'Ich habe zu Hause geblieben.', 'bleiben يأخذ sein رغم عدم الحركة.', 'konjugation'],
      ['geflogen', 'fliegen · ist geflogen', 'سافر بالطائرة (اسم المفعول)', 'Sie ist nach Berlin geflogen.', 'Sie hat nach Berlin geflogen.', 'fliegen حركة ← sein.', 'konjugation'],
      ['aufgestanden', 'aufstehen · ist aufgestanden', 'نهض (اسم المفعول)', 'Ich bin um sieben aufgestanden.', 'Ich habe um sieben aufgestanden.', 'aufstehen (تغيّر حالة) ← sein.', 'konjugation'],
      ['eingeschlafen', 'einschlafen · ist eingeschlafen', 'غفا (اسم المفعول)', 'Das Kind ist schnell eingeschlafen.', 'Das Kind hat schnell eingeschlafen.', 'einschlafen (تغيّر حالة) ← sein.', 'konjugation'],
      ['angekommen', 'ankommen · ist angekommen', 'وصل (اسم المفعول)', 'Der Zug ist pünktlich angekommen.', 'Der Zug hat pünktlich angekommen.', 'ankommen ← sein.', 'konjugation'],
      ['abgefahren', 'abfahren · ist abgefahren', 'انطلق (اسم المفعول)', 'Der Bus ist schon abgefahren.', 'Der Bus ist schon abfahren.', 'المشارك abgefahren: ge- بين السابقة والجذر.', 'konjugation'],
      ['gelaufen', 'laufen · ist gelaufen', 'مشى · ركض (اسم المفعول)', 'Wir sind viel gelaufen.', 'Wir haben viel gelaufen.', 'laufen حركة ← sein.', 'konjugation'],
      ['passiert', 'passieren · ist passiert', 'حدث (اسم المفعول)', 'Was ist passiert?', 'Was hat passiert?', 'passieren ← sein: ist passiert.', 'konjugation'],
      ['gewesen', 'sein · ist gewesen', 'كان (اسم المفعول)', 'Ich bin in Berlin gewesen.', 'Ich habe in Berlin gewesen.', 'sein يأخذ sein: bin gewesen.', 'konjugation'],
      ['geworden', 'werden · ist geworden', 'أصبح (اسم المفعول)', 'Es ist kalt geworden.', 'Es hat kalt geworden.', 'werden ← sein: ist geworden.', 'konjugation'],
      ['gereist', 'reisen · ist gereist', 'سافر (اسم المفعول)', 'Wir sind viel gereist.', 'Wir haben viel gereist.', 'reisen حركة ← sein.', 'konjugation'],
      ['umgezogen', 'umziehen · ist umgezogen', 'انتقل سكنًا (اسم المفعول)', 'Wir sind nach Sousse umgezogen.', 'Wir haben nach Sousse umgezogen.', 'umziehen حركة ← sein.', 'konjugation'],
      ['gestorben', 'sterben · ist gestorben', 'مات (اسم المفعول)', 'Mein Opa ist 2020 gestorben.', 'Mein Opa hat 2020 gestorben.', 'sterben (تغيّر حالة) ← sein.', 'konjugation'],
      ['die Reise', 'die Reisen', 'الرحلة', 'Die Reise war schön.', 'Der Reise war schön.', 'Reise مؤنثة: die Reise.', 'genus'],
      ['der Bahnhof', 'die Bahnhöfe', 'محطة القطار', 'Wir sind zum Bahnhof gegangen.', 'Wir sind zu Bahnhof gegangen.', 'zum Bahnhof (zu dem).', 'präposition'],
      ['letztes Jahr', '—', 'السنة الماضية', 'Letztes Jahr bin ich nach Tunis geflogen.', 'Letztes Jahr ich bin nach Tunis geflogen.', 'بعد Letztes Jahr الفعل ثانيًا.', 'wortstellung', 'Letztes'],
      ['zu spät', '—', 'متأخرًا عن الموعد', 'Ich bin zu spät gekommen.', 'Ich habe zu spät gekommen.', 'kommen ← sein: bin gekommen.', 'konjugation']
    ],
    tricks: [
      { trick: 'حركة أو تغيّر حالة ← sein', wie: 'gehen · kommen · fahren · fliegen (حركة) — aufstehen · einschlafen · sterben (تغيّر).', warum: 'سؤالان يحسمان المساعد: هل تحرّك من مكان؟ هل تغيّرت حالته؟ وإلا فـ haben.', anchor: 'Ich bin nach Hause gegangen.' },
      { trick: 'bleiben وsein وpassieren: ثلاثة استثناءات تأخذ sein', wie: 'Ich bin geblieben. · Ich bin gewesen. · Was ist passiert?', warum: 'الثلاثة بلا حركة لكنها مع sein؛ تُحفظ كقائمة قصيرة لأن القاعدة لا تغطيها.', anchor: 'Ich bin zu Hause geblieben.' },
      { trick: 'ge- يدخل بين السابقة والجذر', wie: 'auf-ge-standen · an-ge-kommen · ab-ge-fahren · ein-ge-schlafen.', warum: 'الفعل المنفصل يضع ge- في وسطه، ومن يكتب geaufstanden أو aufstanden يُخطئ شكل المشارك.', anchor: 'Der Zug ist pünktlich angekommen.' }
    ],
    order: [
      { satz: 'Ich | bin | nach Hause | gegangen.', ar: 'ذهبت إلى البيت.' },
      { satz: 'Der Zug | ist | pünktlich | angekommen.', ar: 'وصل القطار في موعده.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل عن رحلتك الأخيرة بـ Perfekt مع sein: إلى أين سافرت، متى انطلقت، متى وصلت، كم بقيت، ومتى عدت. استعمل أيضًا فعلًا مع haben.',
      promptDe: 'Letztes Jahr bin ich nach … gefahren. · Ich bin um … abgefahren. · Ich bin … angekommen. · Ich bin … Tage geblieben. · Ich habe viel gesehen.',
      points: ['أربعة أفعال مع sein', 'فعل واحد مع haben', 'المشارك في آخر الجملة', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'konjugation'
    }
  },

  'a1-u3-l6': {
    items: [
      ['passen', 'passt · passte · hat gepasst', 'يناسب', 'Dienstag passt mir gut.', 'Dienstag passt mich gut.', 'passen + داتيف: mir.', 'kasus', 'passt'],
      ['verschieben', 'verschiebt · verschob · hat verschoben', 'يؤجّل', 'Können wir den Termin verschieben?', 'Können wir den Termin delay?', 'delay إنجليزية؛ verschieben.', 'falser-freund'],
      ['absagen', 'sagt ab · sagte ab · hat abgesagt', 'يلغي (موعدًا)', 'Ich muss den Termin leider absagen.', 'Ich muss den Termin leider sagen ab.', 'مع muss يبقى absagen كاملًا في الآخر.', 'wortstellung'],
      ['Ihnen', '—', 'لحضرتك (داتيف)', 'Passt Ihnen der Termin?', 'Passt Sie der Termin?', 'داتيف حضرتك: Ihnen.', 'kasus'],
      ['mir', '—', 'لي (داتيف)', 'Das passt mir.', 'Das passt mich.', 'passen + داتيف: mir.', 'kasus'],
      ['der Vormittag', 'die Vormittage', 'قبل الظهر', 'Am Vormittag habe ich Zeit.', 'Am Vormittag ich habe Zeit.', 'الفعل ثانيًا: habe ich.', 'wortstellung'],
      ['ausmachen', 'macht aus · machte aus · hat ausgemacht', 'يتفق على موعد', 'Wir machen einen Termin aus.', 'Wir ausmachen einen Termin.', 'منفصل: machen … aus.', 'wortstellung', 'machen'],
      ['die Besprechung', 'die Besprechungen', 'الاجتماع', 'Die Besprechung ist um zehn.', 'Der Besprechung ist um zehn.', '-ung مؤنثة: die Besprechung.', 'genus'],
      ['schade', '—', 'يا للأسف', 'Schade, das passt mir nicht.', 'Dommage, das passt mir nicht.', 'dommage الفرنسية؛ schade.', 'falser-freund'],
      ['der Zahnarzt', 'die Zahnärzte', 'طبيب الأسنان', 'Ich habe einen Termin beim Zahnarzt.', 'Ich habe einen Termin bei Zahnarzt.', 'beim Zahnarzt (bei dem).', 'präposition'],
      ['vorbeikommen', 'kommt vorbei · kam vorbei · ist vorbeigekommen', 'يمرّ للزيارة', 'Kannst du morgen vorbeikommen?', 'Kannst du morgen kommen vorbei?', 'مع kannst يبقى vorbeikommen كاملًا.', 'wortstellung'],
      ['die Einladung', 'die Einladungen', 'الدعوة', 'Danke für die Einladung.', 'Danke für der Einladung.', 'für + النصب: die Einladung.', 'kasus'],
      ['in Ordnung', '—', 'حسنًا · موافق', 'Dienstag um drei? – In Ordnung.', 'Dienstag um drei? – In Order.', 'order إنجليزية؛ in Ordnung.', 'falser-freund', 'Ordnung'],
      ['beschäftigt', '—', 'مشغول', 'Am Montag bin ich beschäftigt.', 'Am Montag bin ich beschäftig.', 'beschäftigt بـ t في الآخر (مشارك).', 'orthographie'],
      ['der Arzttermin', 'die Arzttermine', 'موعد الطبيب', 'Ich habe am Freitag einen Arzttermin.', 'Ich habe am Freitag ein Arzttermin.', 'Termin مذكر: einen Arzttermin.', 'kasus'],
      ['später', '—', 'لاحقًا', 'Können wir später telefonieren?', 'Können wir mehr spät telefonieren?', 'لاحقًا = später (مقارنة spät).', 'deklination'],
      ['nächste Woche', '—', 'الأسبوع القادم', 'Nächste Woche habe ich Zeit.', 'Nächste Woche ich habe Zeit.', 'الفعل ثانيًا.', 'wortstellung', 'Nächste'],
      ['eintragen', 'trägt ein · trug ein · hat eingetragen', 'يسجّل في المفكرة', 'Ich trage den Termin ein.', 'Ich eintrage den Termin.', 'منفصل: trage … ein.', 'wortstellung', 'trage'],
      ['sich verspäten', 'verspätet sich · verspätete sich · hat sich verspätet', 'يتأخر', 'Ich verspäte mich zehn Minuten.', 'Ich verspäte zehn Minuten.', 'sich verspäten انعكاسي: verspäte mich.', 'deklination', 'verspäte'],
      ['bestätigen', 'bestätigt · bestätigte · hat bestätigt', 'يؤكّد', 'Ich bestätige den Termin.', 'Ich bestätige der Termin.', 'bestätigen + النصب: den Termin.', 'kasus', 'bestätige']
    ],
    tricks: [
      { trick: 'passen بالداتيف: mir وdir وIhnen', wie: 'Das passt mir. · Passt dir Montag? · Passt Ihnen der Termin?', warum: 'الموعد هو الفاعل والشخص داتيف؛ العربية «يناسبني» تُغري بـ mich.', anchor: 'Passt Ihnen der Termin?' },
      { trick: 'ثلاث جمل للموعد: اقتراح، قبول، اعتذار', wie: 'Passt Ihnen Dienstag? · Ja, das passt mir. · Schade, das passt mir nicht. Können wir verschieben?', warum: 'حوار الموعد في Start Deutsch 1 يُقيَّم بهذه الوظائف الثلاث، والجمل جاهزة للحفظ.', anchor: 'Können wir den Termin verschieben?' },
      { trick: 'absagen وverschieben وausmachen: لا canceln ولا delay', wie: 'einen Termin ausmachen · verschieben · absagen · bestätigen.', warum: 'أربعة أفعال تغطي حياة الموعد كلها؛ الإنجليزية تُفهم لكنها تُخصم.', anchor: 'Ich muss den Termin leider absagen.' }
    ],
    order: [
      { satz: 'Dienstag | passt | mir gut.', ar: 'الثلاثاء يناسبني.' },
      { satz: 'Ich | trage | den Termin | ein.', ar: 'أسجّل الموعد.' }
    ],
    writing: {
      prompt: 'صديق يقترح موعدًا يوم الاثنين. اكتب ردًا من خمس جمل: شكر على الدعوة، الاثنين لا يناسبك ولماذا، اقترح يومًا آخر بالساعة، اسأله إن كان يناسبه، وتحية.',
      promptDe: 'Danke für die Einladung. · Montag passt mir leider nicht, ich bin … · Passt dir Dienstag um …? · Wir können den Termin … · Bis dann!',
      points: ['passen بالداتيف مرتين', 'اقتراح بديل باليوم والساعة', 'verschieben أو absagen أو ausmachen', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 30, familie: 'kasus'
    }
  }
};

/* Deutschweg — P3.2 lexical layer, A2 production unit 10 (last A2 unit):
   a2-u5-l1 … a2-u5-l6. Same row format as vocab-a2-06.js. */

module.exports = {
  'a2-u5-l1': {
    items: [
      ['gefrühstückt', 'frühstücken · hat gefrühstückt', 'فطر (اسم المفعول)', 'Dann habe ich gefrühstückt.', 'Dann bin ich gefrühstückt.', 'frühstücken ← haben.', 'konjugation'],
      ['ausgegangen', 'ausgehen · ist ausgegangen', 'خرج للسهر (اسم المفعول)', 'Zum Schluss bin ich ausgegangen.', 'Zum Schluss habe ich ausgegangen.', 'ausgehen حركة ← sein.', 'konjugation'],
      ['eingekauft', 'einkaufen · hat eingekauft', 'تسوّق (اسم المفعول)', 'Am Samstag habe ich eingekauft.', 'Am Samstag habe ich einkauft.', 'ge- بين السابقة والجذر: eingekauft.', 'konjugation'],
      ['ferngesehen', 'fernsehen · hat ferngesehen', 'شاهد التلفاز (اسم المفعول)', 'Abends habe ich ferngesehen.', 'Abends habe ich fernsehen.', 'المشارك: ferngesehen.', 'konjugation'],
      ['getroffen', 'treffen · hat getroffen', 'التقى (اسم المفعول)', 'Ich habe Freunde getroffen.', 'Ich habe Freunde getreffen.', 'treffen قوي: getroffen.', 'konjugation'],
      ['geschlafen', 'schlafen · hat geschlafen', 'نام (اسم المفعول)', 'Ich habe lange geschlafen.', 'Ich bin lange geschlafen.', 'schlafen ← haben.', 'konjugation'],
      ['angerufen', 'anrufen · hat angerufen', 'اتصل (اسم المفعول)', 'Ich habe meine Mutter angerufen.', 'Ich habe meine Mutter angeruft.', 'rufen قوي: angerufen.', 'konjugation'],
      ['verstanden', 'verstehen · hat verstanden', 'فهم (اسم المفعول)', 'Ich habe alles verstanden.', 'Ich habe alles geverstanden.', 'ver- بلا ge-: verstanden.', 'konjugation'],
      ['bekommen', 'bekommen · hat bekommen', 'حصل على (اسم المفعول)', 'Ich habe ein Geschenk bekommen.', 'Ich habe ein Geschenk gebekommen.', 'be- بلا ge-: bekommen.', 'konjugation'],
      ['gewartet', 'warten · hat gewartet', 'انتظر (اسم المفعول)', 'Ich habe eine Stunde gewartet.', 'Ich habe eine Stunde gewarten.', 'warten منتظم: gewartet.', 'konjugation'],
      ['eingeladen', 'einladen · hat eingeladen', 'دعا (اسم المفعول)', 'Sie hat mich eingeladen.', 'Sie hat mich eingeladet.', 'laden قوي: eingeladen.', 'konjugation'],
      ['gebracht', 'bringen · hat gebracht', 'أحضر (اسم المفعول)', 'Ich habe Kuchen gebracht.', 'Ich habe Kuchen gebringt.', 'bringen مختلط: gebracht.', 'konjugation'],
      ['gewusst', 'wissen · hat gewusst', 'عرف (اسم المفعول)', 'Das habe ich nicht gewusst.', 'Das habe ich nicht gewissen.', 'wissen: gewusst.', 'konjugation'],
      ['gedacht', 'denken · hat gedacht', 'فكّر (اسم المفعول)', 'Ich habe an dich gedacht.', 'Ich habe an dich gedenkt.', 'denken: gedacht.', 'konjugation'],
      ['nachher', '—', 'بعدها', 'Nachher sind wir ins Kino gegangen.', 'Nachher wir sind ins Kino gegangen.', 'الفعل ثانيًا.', 'wortstellung'],
      ['am Anfang', '—', 'في البداية', 'Am Anfang war alles neu.', 'Am Anfang alles war neu.', 'الفعل ثانيًا.', 'wortstellung', 'Anfang'],
      ['am Ende', '—', 'في النهاية', 'Am Ende haben wir gelacht.', 'Am Ende haben wir gelachen.', 'lachen منتظم: gelacht.', 'konjugation', 'Ende'],
      ['auf einmal', '—', 'فجأة', 'Auf einmal hat es geregnet.', 'Auf einmal es hat geregnet.', 'الفعل ثانيًا.', 'wortstellung', 'einmal'],
      ['die Reihenfolge', 'die Reihenfolgen', 'الترتيب · التسلسل', 'Die Reihenfolge ist wichtig.', 'Der Reihenfolge ist wichtig.', 'Reihenfolge مؤنثة.', 'genus'],
      ['letztes Wochenende', '—', 'عطلة نهاية الأسبوع الماضية', 'Letztes Wochenende war ich am Meer.', 'Letzte Wochenende war ich am Meer.', 'Wochenende محايد: letztes.', 'deklination', 'Letztes']
    ],
    tricks: [
      { trick: 'الحكاية بالترتيب: Zuerst، Dann، Danach، Zum Schluss', wie: 'Zuerst bin ich aufgestanden. Dann habe ich gefrühstückt. Zum Schluss bin ich ausgegangen.', warum: 'امتحان A2 يقيّم التسلسل؛ أربع كلمات ربط تجعل الحكاية مفهومة حتى مع أخطاء صغيرة.', anchor: 'Dann habe ich gefrühstückt.' },
      { trick: 'الحركة sein والباقي haben، حتى في الحكاية الطويلة', wie: 'bin aufgestanden · bin ausgegangen — habe gefrühstückt · habe geschlafen.', warum: 'في الحكاية المتصلة يتعب المتعلم فيعمّم haben؛ السؤال «حركة؟» يُطرح عند كل فعل.', anchor: 'Zum Schluss bin ich ausgegangen.' },
      { trick: 'المشاركات المختلطة تُحفظ أربعًا: gebracht وgedacht وgewusst وgekannt', wie: 'bringen ← gebracht · denken ← gedacht · wissen ← gewusst · kennen ← gekannt.', warum: 'الأربعة تغيّر الجذر وتأخذ -t معًا، فلا تتبع قاعدة المنتظم ولا القوي.', anchor: 'Ich habe an dich gedacht.' }
    ],
    order: [
      { satz: 'Dann | habe | ich | gefrühstückt.', ar: 'ثم فطرت.' },
      { satz: 'Am Anfang | war | alles neu.', ar: 'في البداية كان كل شيء جديدًا.' }
    ],
    writing: {
      prompt: 'احكِ يومك أمس في خمس جمل مرتبة بـ Perfekt: zuerst، dann، danach، zum Schluss، مع فعلين مع sein وثلاثة مع haben.',
      promptDe: 'Zuerst bin ich … aufgestanden. · Dann habe ich … · Danach habe ich … · Am Nachmittag bin ich … · Zum Schluss habe ich …',
      points: ['أربع كلمات ترتيب', 'فعلان مع sein', 'ثلاثة أفعال مع haben', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'konjugation'
    }
  },

  'a2-u5-l2': {
    items: [
      ['ich finde', '—', 'أرى (رأي)', 'Ich finde das praktisch.', 'Ich find das praktisch.', 'مع ich: finde بالـ e.', 'konjugation', 'finde'],
      ['meiner Meinung nach', '—', 'في رأيي', 'Meiner Meinung nach ist das gut.', 'In my Meinung ist das gut.', 'in my إنجليزية؛ meiner Meinung nach.', 'falser-freund', 'Meinung'],
      ['unpraktisch', '—', 'غير عملي', 'Das ist unpraktisch.', 'Das ist unpractical.', 'unpractical إنجليزية؛ unpraktisch.', 'falser-freund'],
      ['nicht ganz', '—', 'ليس تمامًا', 'Das stimmt nicht ganz.', 'Das ist totally falsch.', 'nicht ganz للتخفيف؛ لا totally.', 'lexik-kollokation', 'ganz'],
      ['uninteressant', '—', 'غير مثير للاهتمام', 'Der Film war uninteressant.', 'Der Film war uninteressante.', 'بعد war بلا نهاية.', 'deklination'],
      ['ich glaube', '—', 'أعتقد', 'Ich glaube, das ist richtig.', 'Ich glaube, das ist right.', 'right إنجليزية؛ richtig.', 'falser-freund', 'glaube'],
      ['genau', '—', 'بالضبط (موافقة)', 'Genau, das finde ich auch.', 'Genau, das find ich auch.', 'finde بالـ e.', 'konjugation'],
      ['auch nicht', '—', 'أيضًا لا', 'Das finde ich auch nicht gut.', 'Das finde ich nicht auch gut.', 'الترتيب auch nicht.', 'wortstellung', 'nicht'],
      ['zu', '—', 'جدًا (أكثر من اللازم)', 'Das ist mir zu teuer.', 'Das ist mir too teuer.', 'too إنجليزية؛ zu.', 'falser-freund'],
      ['eher', '—', 'بالأحرى', 'Ich finde das eher langweilig.', 'Ich finde das mehr langweilig.', 'eher للترجيح والتخفيف.', 'lexik-kollokation'],
      ['ziemlich', '—', 'إلى حدٍّ ما', 'Das ist ziemlich teuer.', 'Das ist ziemlich teuere.', 'بعد ist بلا نهاية.', 'deklination'],
      ['total', '—', 'تمامًا (عامية)', 'Das ist total praktisch.', 'Das ist totale praktisch.', 'الظرف total بلا نهاية.', 'deklination'],
      ['der Geschmack', 'die Geschmäcker', 'الذوق', 'Über Geschmack kann man nicht streiten.', 'Über Geschmack kann man nicht streitet.', 'بعد kann المصدر: streiten.', 'konjugation'],
      ['mögen', 'mag · mochte · hat gemocht', 'يحبّ (شيئًا)', 'Ich mag diese Musik.', 'Ich möge diese Musik.', 'mögen: ich mag.', 'konjugation', 'mag'],
      ['das sehe ich auch so', '—', 'أرى ذلك أيضًا', 'Das sehe ich auch so.', 'Das sehe ich so auch.', 'الترتيب: auch so.', 'wortstellung', 'so'],
      ['das sehe ich anders', '—', 'أرى ذلك بشكل مختلف', 'Das sehe ich anders.', 'Das sehe ich different.', 'different إنجليزية؛ anders.', 'falser-freund', 'anders'],
      ['ehrlich gesagt', '—', 'بصراحة', 'Ehrlich gesagt finde ich das langweilig.', 'Ehrlich gesagt ich finde das langweilig.', 'بعد Ehrlich gesagt الفعل ثانيًا.', 'wortstellung', 'gesagt'],
      ['überhaupt nicht', '—', 'إطلاقًا لا', 'Das gefällt mir überhaupt nicht.', 'Das gefällt mir nicht überhaupt.', 'الترتيب überhaupt nicht.', 'wortstellung', 'überhaupt'],
      ['die Bewertung', 'die Bewertungen', 'التقييم', 'Das Restaurant hat gute Bewertungen.', 'Das Restaurant hat gute Bewertunge.', 'الجمع Bewertungen.', 'plural', 'Bewertungen'],
      ['die Empfehlung', 'die Empfehlungen', 'التوصية', 'Hast du eine Empfehlung?', 'Hast du einen Empfehlung?', '-ung مؤنثة.', 'genus']
    ],
    tricks: [
      { trick: 'Ich finde + مفعول + صفة: الرأي بلا dass', wie: 'Ich finde das praktisch. · Ich finde den Film langweilig.', warum: 'أقصر صيغة رأي في A2؛ وfinde بالـ e لأن المتعلم ينسخ find الإنجليزية.', anchor: 'Ich finde das praktisch.' },
      { trick: 'التخفيف: nicht ganz وeher وziemlich', wie: 'Das stimmt nicht ganz. · Das ist eher langweilig. · Das ist ziemlich teuer.', warum: 'الرأي المخفَّف يُقيَّم أعلى من totally falsch؛ ثلاث كلمات تكفي.', anchor: 'Das stimmt nicht ganz.' },
      { trick: 'Meiner Meinung nach ثم الفعل مباشرة', wie: 'Meiner Meinung nach ist das gut. — لا in my Meinung.', warum: 'العبارة تحتل الموضع الأول فيأتي الفعل بعدها؛ وهي الصيغة التي يسمعها الممتحِن في كل حوار رأي.', anchor: 'Meiner Meinung nach ist das gut.' }
    ],
    order: [
      { satz: 'Ich | finde | das praktisch.', ar: 'أجد ذلك عمليًا.' },
      { satz: 'Meiner Meinung nach | ist | das gut.', ar: 'في رأيي هذا جيد.' }
    ],
    writing: {
      prompt: 'اكتب رأيك في مطعم أو فيلم في خمس جمل: الرأي بـ Ich finde، سبب، تخفيف بـ nicht ganz أو ziemlich، ما يعجبك وما لا يعجبك، وتوصية.',
      promptDe: 'Ich finde das Restaurant … · Meiner Meinung nach … · Das Essen ist ziemlich … · Die Musik gefällt mir überhaupt nicht. · Meine Empfehlung: …',
      points: ['Ich finde مع صفة', 'meiner Meinung nach بالفعل ثانيًا', 'كلمة تخفيف (ziemlich أو eher أو nicht ganz)', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'lexik-kollokation'
    }
  },

  'a2-u5-l3': {
    items: [
      ['Sehr geehrte Damen und Herren', '—', 'السادة الكرام (افتتاحية عامة)', 'Sehr geehrte Damen und Herren,', 'Liebe Damen und Herren,', 'الافتتاحية الرسمية: Sehr geehrte.', 'register', 'geehrte'],
      ['Sehr geehrter Herr', '—', 'حضرة السيد', 'Sehr geehrter Herr Keller,', 'Sehr geehrte Herr Keller,', 'للمذكر: geehrter.', 'deklination', 'geehrter'],
      ['ich schreibe Ihnen', '—', 'أكتب إليكم', 'Ich schreibe Ihnen wegen des Termins.', 'Ich schreibe dir wegen des Termins, Frau Keller.', 'في الرسمي: Ihnen، لا dir.', 'register', 'Ihnen'],
      ['wegen', '—', 'بسبب (رسمي)', 'Ich schreibe wegen der Rechnung.', 'Ich schreibe wegen die Rechnung.', 'wegen + الإضافة: der Rechnung.', 'kasus'],
      ['Mit freundlichen Grüßen', '—', 'مع أطيب التحيات (رسمي)', 'Mit freundlichen Grüßen', 'Viele Grüße ans Amt', 'للرسمي: Mit freundlichen Grüßen.', 'register', 'freundlichen'],
      ['die Anfrage', 'die Anfragen', 'الاستفسار', 'Ich habe eine Anfrage.', 'Ich habe ein Anfrage.', 'Anfrage مؤنثة.', 'genus'],
      ['die Mahnung', 'die Mahnungen', 'التذكير بالدفع', 'Ich habe eine Mahnung bekommen.', 'Ich habe einen Mahnung bekommen.', '-ung مؤنثة.', 'genus'],
      ['das Abonnement', 'die Abonnements', 'الاشتراك', 'Ich möchte mein Abonnement kündigen.', 'Ich möchte meinen Abonnement kündigen.', 'Abonnement محايد: mein.', 'genus'],
      ['bis zum', '—', 'حتى (تاريخ)', 'Bitte antworten Sie bis zum 15. Mai.', 'Bitte antworten Sie bis zum 15 Mai.', 'الترتيبي بنقطة.', 'orthographie', 'zum'],
      ['zurückschicken', 'schickt zurück · schickte zurück · hat zurückgeschickt', 'يُعيد إرسال', 'Ich schicke das Formular zurück.', 'Ich zurückschicke das Formular.', 'منفصل: schicke … zurück.', 'wortstellung', 'schicke'],
      ['die Kopie', 'die Kopien', 'النسخة', 'Eine Kopie der Rechnung liegt bei.', 'Eine Kopie von der Rechnung liegt bei.', 'الإضافة: der Rechnung.', 'kasus'],
      ['beiliegen', 'liegt bei · lag bei · hat beigelegen', 'يكون مرفقًا', 'Die Kopie liegt bei.', 'Die Kopie beiliegt.', 'منفصل: liegt … bei.', 'wortstellung', 'liegt'],
      ['die Postleitzahl', 'die Postleitzahlen', 'الرمز البريدي', 'Die Postleitzahl von Berlin ist 10115.', 'Der Postleitzahl von Berlin ist 10115.', 'Zahl مؤنثة.', 'genus'],
      ['der Briefumschlag', 'die Briefumschläge', 'المظروف', 'Ich brauche einen Briefumschlag.', 'Ich brauche ein Briefumschlag.', 'Umschlag مذكر: einen.', 'kasus'],
      ['die Briefmarke', 'die Briefmarken', 'الطابع البريدي', 'Ich kaufe eine Briefmarke.', 'Ich kaufe eine Briefmark.', 'Briefmarke بـ e.', 'orthographie'],
      ['die Reklamation', 'die Reklamationen', 'شكوى عن سلعة', 'Ich schreibe wegen einer Reklamation.', 'Ich schreibe wegen eine Reklamation.', 'wegen + الإضافة: einer.', 'kasus'],
      ['die Formulierung', 'die Formulierungen', 'الصياغة', 'Diese Formulierung ist höflich.', 'Dieser Formulierung ist höflich.', '-ung مؤنثة.', 'genus'],
      ['der volle Name', '—', 'الاسم الكامل', 'Am Ende steht der volle Name.', 'Am Ende steht der voller Name.', 'بعد der: -e.', 'deklination', 'volle'],
      ['oben rechts', '—', 'أعلى اليمين', 'Das Datum steht oben rechts.', 'Das Datum steht oben recht.', 'rechts بـ s.', 'orthographie', 'rechts'],
      ['die Bestätigung', 'die Bestätigungen', 'التأكيد', 'Ich bitte um eine Bestätigung.', 'Ich bitte für eine Bestätigung.', 'bitten um.', 'präposition']
    ],
    tricks: [
      { trick: 'الرسمي: Sehr geehrte … وIhnen وMit freundlichen Grüßen', wie: 'Sehr geehrte Frau Keller, | ich schreibe Ihnen wegen … | Mit freundlichen Grüßen', warum: 'ثلاث علامات تحدد السجلّ الرسمي؛ خلط dir مع Sehr geehrte يخسر درجة السجلّ كاملة.', anchor: 'Ich schreibe Ihnen wegen des Termins.' },
      { trick: 'geehrte للمؤنث والجمع، geehrter للمذكر', wie: 'Sehr geehrte Frau Keller, · Sehr geehrter Herr Keller, · Sehr geehrte Damen und Herren,', warum: 'الصفة قبل الاسم بلا أداة تأخذ نهاية الأداة؛ geehrte Herr أكثر خطأ في افتتاحيات A2.', anchor: 'Sehr geehrter Herr Keller,' },
      { trick: 'wegen + الإضافة في الرسالة', wie: 'wegen des Termins · wegen der Rechnung · wegen einer Reklamation.', warum: 'في الكتابة الرسمية wegen تأخذ الإضافة؛ wegen dem تُسمع لكنها تُخصم.', anchor: 'Ich schreibe wegen der Rechnung.' }
    ],
    order: [
      { satz: 'Ich | schreibe | Ihnen wegen des Termins.', ar: 'أكتب إليكم بخصوص الموعد.' },
      { satz: 'Die Kopie | liegt | bei.', ar: 'النسخة مرفقة.' }
    ],
    writing: {
      prompt: 'اكتب رسالة رسمية قصيرة إلى شركة في خمس جمل: الافتتاحية الرسمية، سبب الكتابة بـ wegen، ما تطلبه (تأكيد أو إلغاء اشتراك)، مهلة بـ bis zum، والختام.',
      promptDe: 'Sehr geehrte Damen und Herren, · ich schreibe Ihnen wegen … · Ich möchte … kündigen und bitte um eine Bestätigung. · Bitte antworten Sie bis zum … · Mit freundlichen Grüßen',
      points: ['Sehr geehrte بفاصلة', 'Ihnen لا dir', 'wegen مع الإضافة', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'register'
    }
  },

  'a2-u5-l4': {
    items: [
      ['am Apparat', '—', 'على الخط (أنا المتكلم)', 'Sara am Apparat.', 'Sara speaking hier.', 'speaking إنجليزية؛ am Apparat.', 'falser-freund', 'Apparat'],
      ['Bleiben Sie dran', '—', 'ابقَ على الخط', 'Bleiben Sie bitte dran.', 'Bleiben Sie bitte an.', 'dranbleiben: dran.', 'lexik-kollokation', 'dran'],
      ['gerade', '—', 'الآن (في هذه اللحظة)', 'Er ist gerade nicht da.', 'Er ist gerade not da.', 'not إنجليزية؛ nicht.', 'falser-freund', 'gerade'],
      ['ausrichten', 'richtet aus · richtete aus · hat ausgerichtet', 'يبلّغ رسالة', 'Kann ich etwas ausrichten?', 'Kann ich etwas tellen?', 'tell إنجليزية؛ ausrichten.', 'falser-freund'],
      ['zurückrufen', 'ruft zurück · rief zurück · hat zurückgerufen', 'يعاود الاتصال', 'Ich rufe Sie zurück.', 'Ich zurückrufe Sie.', 'منفصل: rufe … zurück.', 'wortstellung', 'rufe'],
      ['verbinden', 'verbindet · verband · hat verbunden', 'يوصّل مكالمة', 'Ich verbinde Sie mit Frau Keller.', 'Ich verbinde Sie zu Frau Keller.', 'verbinden mit + داتيف.', 'präposition', 'verbinde'],
      ['die Durchwahl', 'die Durchwahlen', 'الرقم الفرعي', 'Die Durchwahl ist 23.', 'Der Durchwahl ist 23.', 'Durchwahl مؤنثة.', 'genus'],
      ['die Leitung', 'die Leitungen', 'الخط', 'Die Leitung ist besetzt.', 'Der Leitung ist besetzt.', '-ung مؤنثة.', 'genus'],
      ['sich verwählen', 'verwählt sich · verwählte sich · hat sich verwählt', 'يتصل برقم خاطئ', 'Entschuldigung, ich habe mich verwählt.', 'Entschuldigung, ich habe verwählt.', 'sich verwählen انعكاسي.', 'deklination', 'verwählt'],
      ['hinterlassen', 'hinterlässt · hinterließ · hat hinterlassen', 'يترك (رسالة)', 'Möchten Sie eine Nachricht hinterlassen?', 'Möchten Sie eine Nachricht hinterlegen?', 'hinterlassen (يترك رسالة)؛ hinterlegen (يودع شيئًا).', 'lexik-kollokation'],
      ['die Mailbox', 'die Mailboxen', 'البريد الصوتي', 'Sprechen Sie auf die Mailbox.', 'Sprechen Sie auf der Mailbox.', 'الاتجاه: auf die Mailbox.', 'kasus'],
      ['die Vorwahl', 'die Vorwahlen', 'رمز المنطقة', 'Die Vorwahl für Deutschland ist 0049.', 'Der Vorwahl für Deutschland ist 0049.', 'Vorwahl مؤنثة.', 'genus'],
      ['telefonieren mit', 'telefoniert · telefonierte · hat telefoniert', 'يتكلم بالهاتف مع', 'Ich telefoniere mit meiner Mutter.', 'Ich telefoniere meine Mutter.', 'telefonieren mit + داتيف.', 'präposition', 'telefoniere'],
      ['das Festnetz', '—', 'الهاتف الثابت', 'Ruf mich auf dem Festnetz an.', 'Ruf mich auf das Festnetz an.', 'auf dem Festnetz (أين؟).', 'kasus'],
      ['wählen', 'wählt · wählte · hat gewählt', 'يطلب الرقم', 'Wählen Sie die Null.', 'Wählen Sie der Null.', 'النصب: die Null.', 'kasus', 'Wählen'],
      ['auflegen', 'legt auf · legte auf · hat aufgelegt', 'يغلق الخط', 'Legen Sie bitte nicht auf.', 'Auflegen Sie bitte nicht.', 'منفصل: Legen … auf.', 'wortstellung', 'Legen'],
      ['abheben', 'hebt ab · hob ab · hat abgehoben', 'يردّ على الهاتف', 'Niemand hebt ab.', 'Niemand abhebt.', 'منفصل: hebt … ab.', 'wortstellung', 'hebt'],
      ['der Anruf', 'die Anrufe', 'المكالمة', 'Danke für Ihren Anruf.', 'Danke für Ihr Anruf.', 'Anruf مذكر في النصب: Ihren.', 'kasus'],
      ['erreichbar', '—', 'يمكن الوصول إليه', 'Ich bin ab 14 Uhr erreichbar.', 'Ich bin ab 14 Uhr erreichbare.', 'بعد bin بلا نهاية.', 'deklination'],
      ['Auf Wiederhören', '—', 'إلى اللقاء (هاتفيًا)', 'Auf Wiederhören!', 'Auf Wiedersehen!', 'في الهاتف: Auf Wiederhören؛ Wiedersehen للقاء وجهًا لوجه.', 'lexik-kollokation', 'Wiederhören']
    ],
    tricks: [
      { trick: 'افتتاحية الهاتف: الاسم + am Apparat', wie: 'Ben Ali am Apparat. · Hier ist Sara. — لا speaking.', warum: 'الألماني يسمّي نفسه أولًا عند الرد؛ الصيغة الثابتة تختصر الحرج.', anchor: 'Sara am Apparat.' },
      { trick: 'ثلاث جمل للمكالمة الفاشلة', wie: 'Er ist gerade nicht da. · Kann ich etwas ausrichten? · Ich rufe zurück.', warum: 'امتحان A2 يختبر الهاتف بهذه الوظائف الثلاث، وكلها بأفعال منفصلة أو ثابتة.', anchor: 'Kann ich etwas ausrichten?' },
      { trick: 'Auf Wiederhören في الهاتف، Auf Wiedersehen في اللقاء', wie: 'hören للهاتف (سمعتك) · sehen للقاء (رأيتك).', warum: 'الفعل داخل التحية يكشف الوسيلة؛ Wiedersehen في الهاتف مقبولة لكنها تفضح المبتدئ.', anchor: 'Auf Wiederhören!' }
    ],
    order: [
      { satz: 'Er | ist | gerade nicht da.', ar: 'هو ليس موجودًا الآن.' },
      { satz: 'Ich | rufe | Sie | zurück.', ar: 'سأعاود الاتصال بكم.' }
    ],
    writing: {
      prompt: 'اكتب حوار هاتف قصيرًا من خمس جمل: الرد باسمك، أن الشخص المطلوب غير موجود، عرض إبلاغ رسالة، وعد بمعاودة الاتصال، والختام الهاتفي.',
      promptDe: '… am Apparat. · Frau … ist gerade nicht da. · Kann ich etwas ausrichten? · Sie ruft Sie zurück. · Auf Wiederhören!',
      points: ['am Apparat', 'ausrichten أو hinterlassen', 'zurückrufen منفصلًا', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'lexik-kollokation'
    }
  },

  'a2-u5-l5': {
    items: [
      ['der Dativ', '—', 'حالة الداتيف', 'Nach helfen steht der Dativ.', 'Nach helfen steht den Dativ.', 'الفاعل بالرفع: der Dativ.', 'kasus'],
      ['der Akkusativ', '—', 'حالة النصب', 'Nach für steht der Akkusativ.', 'Nach für steht das Akkusativ.', 'Akkusativ مذكر.', 'genus'],
      ['der Nominativ', '—', 'حالة الرفع', 'Das Subjekt steht im Nominativ.', 'Das Subjekt steht in Nominativ.', 'im Nominativ.', 'präposition'],
      ['die Präposition', 'die Präpositionen', 'حرف الجر', 'Die Präposition bestimmt den Fall.', 'Die Präposition bestimmt der Fall.', 'bestimmen + النصب: den Fall.', 'kasus'],
      ['das Nomen', 'die Nomen', 'الاسم (نحو)', 'Jedes Nomen hat einen Artikel.', 'Jedes Nomen hat ein Artikel.', 'Artikel مذكر: einen.', 'kasus'],
      ['das Adjektiv', 'die Adjektive', 'الصفة', 'Das Adjektiv steht vor dem Nomen.', 'Das Adjektiv steht vor den Nomen.', 'vor + داتيف للمكان: dem Nomen.', 'kasus'],
      ['das Pronomen', 'die Pronomen', 'الضمير', 'Das Pronomen ersetzt das Nomen.', 'Das Pronomen ersetzt den Nomen.', 'Nomen محايد: das Nomen.', 'genus'],
      ['der Komparativ', 'die Komparative', 'صيغة المقارنة', 'Der Komparativ endet auf -er.', 'Der Komparativ enden auf -er.', 'مفرد ← endet.', 'konjugation'],
      ['der Superlativ', 'die Superlative', 'صيغة التفضيل', 'Der Superlativ steht mit am.', 'Der Superlativ steht mit an.', 'am + -sten.', 'lexik-kollokation'],
      ['das Perfekt', '—', 'الماضي المركّب', 'Das Perfekt braucht haben oder sein.', 'Der Perfekt braucht haben oder sein.', 'Perfekt محايد.', 'genus'],
      ['das Hilfsverb', 'die Hilfsverben', 'الفعل المساعد', 'Das Hilfsverb steht auf Position zwei.', 'Das Hilfsverb steht auf Position zweite.', 'Position zwei.', 'lexik-kollokation'],
      ['die Vorsilbe', 'die Vorsilben', 'السابقة', 'Die Vorsilbe steht am Ende.', 'Der Vorsilbe steht am Ende.', 'Vorsilbe مؤنثة.', 'genus'],
      ['trennbar', '—', 'منفصل (فعل)', 'aufstehen ist trennbar.', 'aufstehen ist trennbare.', 'بعد ist بلا نهاية.', 'deklination'],
      ['reflexiv', '—', 'انعكاسي', 'sich freuen ist reflexiv.', 'sich freuen ist reflexive.', 'بعد ist بلا نهاية: reflexiv.', 'deklination'],
      ['die Konjugation', 'die Konjugationen', 'التصريف', 'Die Konjugation von sein ist unregelmäßig.', 'Die Konjugation von sein ist unregelmäßige.', 'بعد ist بلا نهاية.', 'deklination'],
      ['unregelmäßig', '—', 'شاذ · غير منتظم', 'Viele Verben sind unregelmäßig.', 'Viele Verben sind irregular.', 'irregular إنجليزية؛ unregelmäßig.', 'falser-freund'],
      ['die Lernkarte', 'die Lernkarten', 'بطاقة التعلم', 'Ich lerne mit Lernkarten.', 'Ich lerne mit Lernkarte.', 'mit + داتيف الجمع: Lernkarten.', 'plural', 'Lernkarten'],
      ['die Strategie', 'die Strategien', 'الاستراتيجية', 'Meine Strategie ist einfach.', 'Mein Strategie ist einfach.', '-ie مؤنثة.', 'genus'],
      ['der Plural', 'die Plurale', 'الجمع', 'Der Plural von Kind ist Kinder.', 'Der Plural von Kind ist Kinds.', 'الجمع Kinder.', 'plural'],
      ['der Singular', '—', 'المفرد', 'Im Singular heißt es das Kind.', 'Im Singular heißt es die Kind.', 'Kind محايد: das Kind.', 'genus']
    ],
    tricks: [
      { trick: 'أربع قواعد A2 في أربع جمل', wie: 'Ich bleibe, weil ich müde bin. · Ich helfe dem Mann. · Ich bin gegangen. · Ich lege es auf den Tisch.', warum: 'weil والداتيف وsein والنصب مع الاتجاه: الجمل الأربع تُستدعى في الامتحان أسرع من القواعد.', anchor: 'Nach helfen steht der Dativ.' },
      { trick: 'الحالة يحددها الفعل أو حرف الجر، لا المعنى', wie: 'helfen ← Dativ · für ← Akkusativ · wo? ← Dativ · wohin? ← Akkusativ.', warum: 'السؤال «ماذا يطلب هذا الفعل أو الحرف؟» يحسم الحالة قبل التفكير في المعنى العربي.', anchor: 'Die Präposition bestimmt den Fall.' },
      { trick: 'Perfekt: Hilfsverb ثانيًا والمشارك آخرًا، وsein للحركة', wie: 'Ich | bin | gestern | gegangen. · Ich | habe | lange | geschlafen.', warum: 'قاعدة واحدة بشقّين تغطي كل ماضي A2؛ الفعل المساعد يُختار بسؤال الحركة.', anchor: 'Das Perfekt braucht haben oder sein.' }
    ],
    order: [
      { satz: 'Das Subjekt | steht | im Nominativ.', ar: 'الفاعل في حالة الرفع.' },
      { satz: 'Ich | lerne | mit Lernkarten.', ar: 'أتعلم ببطاقات التعلم.' }
    ],
    writing: {
      prompt: 'اكتب خمس جمل تراجع فيها قواعد A2: جملة weil، جملة بفعل داتيف، جملة Perfekt مع sein، جملة اتجاه بالنصب، وجملة مقارنة.',
      promptDe: 'Ich lerne Deutsch, weil … · Ich helfe … · Gestern bin ich … · Ich stelle … auf den … · Deutsch ist … als …',
      points: ['weil بالفعل في الآخر', 'داتيف بعد helfen أو danken', 'sein في Perfekt', 'مقارنة بـ -er als', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'pruefstrategie'
    }
  },

  'a2-u5-l6': {
    items: [
      ['der Hörteil', 'die Hörteile', 'جزء الاستماع', 'Der Hörteil dauert 30 Minuten.', 'Die Hörteil dauert 30 Minuten.', 'Teil مذكر.', 'genus'],
      ['die Gesamtnote', 'die Gesamtnoten', 'العلامة الإجمالية', 'Eine Gesamtnote rettet kein Modul.', 'Eine Gesamtnote retten kein Modul.', 'مفرد ← rettet.', 'konjugation'],
      ['retten', 'rettet · rettete · hat gerettet', 'ينقذ', 'Ein Modul rettet das andere nicht.', 'Ein Modul rettet den anderen nicht.', 'das andere (Modul محايد).', 'kasus', 'rettet'],
      ['die Form', 'die Formen', 'الشكل', 'Die Form gehört zur Aufgabe.', 'Die Form gehört zum Aufgabe.', 'Aufgabe مؤنثة: zur.', 'genus'],
      ['der Dialog', 'die Dialoge', 'الحوار', 'Sprechen ist auch Dialog.', 'Sprechen ist auch Dialoge.', 'مفرد هنا: Dialog.', 'plural'],
      ['die Aufnahme', 'die Aufnahmen', 'التسجيل الصوتي', 'Die Aufnahme läuft zweimal.', 'Die Aufnahme lauft zweimal.', 'laufen: läuft.', 'konjugation'],
      ['der Bogen', 'die Bögen', 'ورقة الإجابة (نموذج)', 'Schreib die Lösungen auf den Bogen.', 'Schreib die Lösungen auf dem Bogen.', 'الاتجاه: auf den Bogen.', 'kasus'],
      ['die Punktzahl', 'die Punktzahlen', 'عدد النقاط', 'Die Punktzahl steht auf dem Zertifikat.', 'Die Punktzahl stehen auf dem Zertifikat.', 'مفرد ← steht.', 'konjugation'],
      ['die Sprechzeit', 'die Sprechzeiten', 'وقت المحادثة', 'Die Sprechzeit ist kurz.', 'Der Sprechzeit ist kurz.', 'Zeit مؤنثة.', 'genus'],
      ['die Prüferin', 'die Prüferinnen', 'الممتحِنة', 'Die Prüferin stellt Fragen.', 'Die Prüferin fragt Fragen.', 'eine Frage stellen، لا fragen.', 'lexik-kollokation'],
      ['der Prüfer', 'die Prüfer', 'الممتحِن', 'Der Prüfer liest die Aufgabe vor.', 'Der Prüfer vorliest die Aufgabe.', 'منفصل: liest … vor.', 'wortstellung'],
      ['die Teilprüfung', 'die Teilprüfungen', 'الامتحان الجزئي', 'Jede Teilprüfung hat eigene Punkte.', 'Jede Teilprüfung haben eigene Punkte.', 'مفرد ← hat.', 'konjugation'],
      ['der Schreibteil', 'die Schreibteile', 'جزء الكتابة', 'Im Schreibteil gibt es zwei Aufgaben.', 'In Schreibteil gibt es zwei Aufgaben.', 'im Schreibteil.', 'präposition'],
      ['die Grußformel', 'die Grußformeln', 'صيغة التحية', 'Die Grußformel gehört zur Form.', 'Der Grußformel gehört zur Form.', 'Formel مؤنثة.', 'genus'],
      ['der Zeitplan', 'die Zeitpläne', 'الجدول الزمني', 'Mach dir einen Zeitplan.', 'Mach dir ein Zeitplan.', 'Plan مذكر: einen.', 'kasus'],
      ['die Vorbereitung', 'die Vorbereitungen', 'التحضير', 'Die Vorbereitung dauert zwei Monate.', 'Der Vorbereitung dauert zwei Monate.', '-ung مؤنثة.', 'genus'],
      ['trainieren', 'trainiert · trainierte · hat trainiert', 'يتدرّب', 'Ich trainiere das Hören jeden Tag.', 'Ich trainiere das Hören jeden Tage.', 'jeden Tag بالمفرد.', 'kasus', 'trainiere'],
      ['die Modellprüfung', 'die Modellprüfungen', 'الامتحان النموذجي', 'Mach eine Modellprüfung.', 'Mach ein Modellprüfung.', 'Prüfung مؤنثة: eine.', 'genus'],
      ['ruhig bleiben', 'bleibt ruhig · blieb ruhig · ist ruhig geblieben', 'يبقى هادئًا', 'Bleib ruhig!', 'Bleib ruhige!', 'بعد bleiben بلا نهاية: ruhig.', 'deklination', 'ruhig'],
      ['die Pünktlichkeit', '—', 'الالتزام بالوقت', 'Pünktlichkeit ist am Prüfungstag wichtig.', 'Pünktlichkeit sind am Prüfungstag wichtig.', 'مفرد ← ist.', 'konjugation']
    ],
    tricks: [
      { trick: 'Goethe A2: أربعة أجزاء ومجموع، لكن كل جزء يُحسب', wie: 'Hören · Lesen · Schreiben · Sprechen — Eine Gesamtnote rettet kein Modul.', warum: 'النجاح بالمجموع لا يُعفي من الأجزاء الضعيفة في التحضير؛ خطة الوقت تبدأ من الأضعف.', anchor: 'Eine Gesamtnote rettet kein Modul.' },
      { trick: 'الكتابة لها شكل: Anrede وGrußformel ونقاط المهمة', wie: 'Liebe …, | … | Viele Grüße — ثم النقاط الثلاث بجمل واضحة.', warum: 'نص بلا شكل يخسر نصف نقاط الكتابة حتى لو كانت لغته صحيحة.', anchor: 'Die Form gehört zur Aufgabe.' },
      { trick: 'Sprechen حوار: اسأل وأجب ولا تتحدث وحدك', wie: 'سؤال ← جواب ← سؤال متابعة. — Sprechen ist auch Dialog.', warum: 'الممتحِن يقيّم التفاعل؛ من يتحدث وحده طويلًا يفقد نقاط الحوار.', anchor: 'Sprechen ist auch Dialog.' }
    ],
    order: [
      { satz: 'Ein Modul | rettet | das andere nicht.', ar: 'جزء لا ينقذ الجزء الآخر.' },
      { satz: 'Die Aufnahme | läuft | zweimal.', ar: 'التسجيل يُشغَّل مرتين.' }
    ],
    writing: {
      prompt: 'اكتب خطة تحضيرك لامتحان A2 في خمس جمل: كم شهرًا تحضّر، أي جزء تتدرّب عليه يوميًا، كيف تتدرّب على الكتابة بشكلها، كيف تتدرّب على الحوار، وكيف تبقى هادئًا يوم الامتحان.',
      promptDe: 'Meine Vorbereitung dauert … · Jeden Tag trainiere ich … · Beim Schreiben achte ich auf die Form: … · Sprechen übe ich mit … als Dialog. · Am Prüfungstag bleibe ich ruhig und …',
      points: ['Vorbereitung أو Zeitplan', 'trainieren مع جزء', 'Form أو Grußformel', 'ruhig bleiben', 'ثلاث كلمات من قائمة اليوم'],
      minWords: 40, familie: 'pruefstrategie'
    }
  }
};

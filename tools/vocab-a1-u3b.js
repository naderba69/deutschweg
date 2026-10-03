/* Deutschweg — P3.2 lexical layer, A1 unit 3 (part b): a1-u3-l4 … a1-u3-l6. */

module.exports = {

  'a1-u3-l4': {
    items: [
      ['haben', 'hat · hatte', 'يملك (مساعد الماضي)', 'Ich habe das gemacht.', 'Ich bin das gemacht.', 'أفعال الحركة وحدها تأخذ sein.', 'konjugation', 'habe'],
      ['gemacht', '—', 'مفعول: فعل', 'Ich habe die Hausaufgabe gemacht.', 'Ich habe die Hausaufgabe machen.', 'اسم المفعول gemacht لا المصدر.', 'konjugation'],
      ['gelernt', '—', 'مفعول: تعلّم', 'Ich habe Deutsch gelernt.', 'Ich habe Deutsch lernen.', 'الاسم في آخر الجملة: gelernt.', 'konjugation'],
      ['gesehen', '—', 'مفعول: رأى', 'Ich habe den Film gesehen.', 'Ich habe den Film sieht.', 'sehen ← gesehen.', 'konjugation'],
      ['gehört', '—', 'مفعول: سمع', 'Ich habe die Musik gehört.', 'Ich habe die Musik höre.', 'hören ← gehört.', 'konjugation'],
      ['gekauft', '—', 'مفعول: اشترى', 'Ich habe Brot gekauft.', 'Ich habe Brot kaufe.', 'kaufen ← gekauft.', 'konjugation'],
      ['gegessen', '—', 'مفعول: أكل', 'Ich habe Reis gegessen.', 'Ich habe Reis esse.', 'essen ← gegessen.', 'konjugation'],
      ['getrunken', '—', 'مفعول: شرب', 'Ich habe Tee getrunken.', 'Ich habe Tee trinke.', 'trinken ← getrunken.', 'konjugation'],
      ['gearbeitet', '—', 'مفعول: عمل', 'Ich habe viel gearbeitet.', 'Ich habe viel arbeiten.', 'arbeiten ← gearbeitet.', 'konjugation'],
      ['telefoniert', '—', 'مفعول: هاتف', 'Ich habe lange telefoniert.', 'Ich habe lange getelefoniert.', 'الأفعال المنتهية بـ -ieren بلا ge.', 'konjugation'],
      ['studiert', '—', 'مفعول: درس جامعيًا', 'Ich habe in Tunis studiert.', 'Ich habe in Tunis gestudiert.', 'studieren بلا ge.', 'konjugation'],
      ['probiert', '—', 'مفعول: جرّب', 'Ich habe den Kuchen probiert.', 'Ich habe den Kuchen probiere.', 'proben? لا: probiert.', 'konjugation'],
      ['besucht', '—', 'مفعول: زار', 'Ich habe meine Tante besucht.', 'Ich habe meine Tante besuche.', 'besuchen ← besucht.', 'konjugation'],
      ['erzählt', '—', 'مفعول: حكى', 'Ich habe die Geschichte erzählt.', 'Ich habe die Geschichte erzähle.', 'erzählen ← erzählt.', 'konjugation'],
      ['gesagt', '—', 'مفعول: قال', 'Ich habe es nicht gesagt.', 'Ich habe es nicht sage.', 'sagen ← gesagt.', 'konjugation'],
      ['gefragt', '—', 'مفعول: سأل', 'Ich habe den Lehrer gefragt.', 'Ich habe den Lehrer frage.', 'fragen ← gefragt.', 'konjugation'],
      ['gesucht', '—', 'مفعول: بحث', 'Ich habe den Schlüssel gesucht.', 'Ich habe den Schlüssel suche.', 'suchen ← gesucht.', 'konjugation'],
      ['gespielt', '—', 'مفعول: لعب', 'Ich habe Fußball gespielt.', 'Ich habe Fußball spiele.', 'spielen ← gespielt.', 'konjugation'],
      ['gelesen', '—', 'مفعول: قرأ', 'Ich habe das Buch gelesen.', 'Ich habe das Buch lese.', 'lesen ← gelesen.', 'konjugation'],
      ['geschrieben', '—', 'مفعول: كتب', 'Ich habe eine Nachricht geschrieben.', 'Ich habe eine Nachricht schreibe.', 'schreiben ← geschrieben.', 'konjugation'],
      ['gestern', '—', 'أمس', 'Gestern habe ich gearbeitet.', 'Gestern ich habe gearbeitet.', 'الظرف الأول والفعل ثانٍ.', 'wortstellung'],
      ['letzte Woche', '—', 'الأسبوع الماضي', 'Letzte Woche habe ich viel gelernt.', 'Letzte Woche ich habe viel gelernt.', 'الفعل ثانٍ بعد الظرف.', 'wortstellung', 'Woche'],
      ['schon', '—', 'بالفعل', 'Ich habe das schon gemacht.', 'Ich habe gemacht das schon.', 'schon قبل اسم المفعول.', 'wortstellung'],
      ['noch nie', '—', 'لم يحدث قط', 'Ich habe noch nie getanzt.', 'Ich habe nie noch getanzt.', 'الترتيب noch nie ثابت.', 'wortstellung', 'nie'],
      ['putzen', 'putzt · putzte', 'ينظّف', 'Ich habe das Bad geputzt.', 'Ich habe das Bad geputze.', 'putzen ← geputzt.', 'konjugation', 'geputzt'],
      ['tanzen', 'tanzt · tanzte', 'يرقص', 'Ich habe getanzt.', 'Ich habe getanze.', 'tanzen ← getanzt.', 'konjugation', 'getanzt'],
      ['zuletzt', '—', 'في آخر مرة', 'Zuletzt habe ich ferngesehen.', 'Zuletzt ich habe ferngesehen.', 'الفعل ثانٍ بعد zuletzt.', 'wortstellung'],
      ['der Test', 'die Tests', 'الاختبار', 'Den Test habe ich bestanden.', 'Den Test ich habe bestanden.', 'المفعول في الأول والفعل بعده.', 'wortstellung']
    ],
    tricks: [
      { trick: 'المساعد ثانٍ واسم المفعول في الآخر', wie: 'machen ← Ich habe das gemacht.', warum: 'الترتيب ثابت كل مرة، والعربية تضع الماضي في موضعه المعتاد فيختل الترتيب.', anchor: 'Ich habe das gemacht.' },
      { trick: 'الأفعال المنتهية بـ -ieren بلا ge', wie: 'telefoniert · studiert · probiert.', warum: 'القاعدة الصغيرة تمنع «getelefoniert»، وهي من أشهر أخطاء A1.', anchor: 'Ich habe lange telefoniert.' },
      { trick: 'الشكل لا يشبه المصدر دائمًا', wie: 'sehen ← gesehen · essen ← gegessen · lesen ← gelesen.', warum: 'الأفعال القوية تغيّر جذرها، وحفظها صورةً أسرع من قاعدة لا تكفي.', anchor: 'Ich habe den Film gesehen.' }
    ]
  },

  'a1-u3-l5': {
    items: [
      ['sein', 'ist · war', 'يكون (مساعد الحركة)', 'Ich bin zu Hause gewesen.', 'Ich habe zu Hause gewesen.', 'sein نفسه يأخذ sein.', 'konjugation', 'bin'],
      ['gegangen', '—', 'مفعول: ذهب', 'Ich bin nach Hause gegangen.', 'Ich habe nach Hause gegangen.', 'gehen حركة: bin.', 'konjugation'],
      ['gekommen', '—', 'مفعول: جاء', 'Er ist spät gekommen.', 'Er hat spät gekommen.', 'kommen حركة: ist.', 'konjugation'],
      ['gefahren', '—', 'مفعول: سافر', 'Wir sind nach Berlin gefahren.', 'Wir haben nach Berlin gefahren.', 'fahren حركة: sind.', 'konjugation'],
      ['geflogen', '—', 'مفعول: سافر جوًا', 'Ich bin nach Frankfurt geflogen.', 'Ich habe nach Frankfurt geflogen.', 'fliegen حركة: bin.', 'konjugation'],
      ['geblieben', '—', 'مفعول: بقي', 'Ich bin zu Hause geblieben.', 'Ich habe zu Hause geblieben.', 'bleiben تأخذ sein.', 'konjugation'],
      ['gewesen', '—', 'مفعول: كان', 'Bist du schon in Berlin gewesen?', 'Hast du schon in Berlin gewesen?', 'sein ← gewesen مع bin.', 'konjugation'],
      ['geworden', '—', 'مفعول: صار', 'Er ist Arzt geworden.', 'Er hat Arzt geworden.', 'werden تأخذ sein.', 'konjugation'],
      ['aufgestanden', '—', 'مفعول: استيقظ', 'Ich bin früh aufgestanden.', 'Ich habe früh aufgestanden.', 'aufstehen حركة: bin.', 'konjugation'],
      ['eingestiegen', '—', 'مفعول: ركب', 'Wir sind in den Bus eingestiegen.', 'Wir haben in den Bus eingestiegen.', 'einsteigen حركة.', 'konjugation'],
      ['ausgestiegen', '—', 'مفعول: نزل', 'Er ist am Bahnhof ausgestiegen.', 'Er hat am Bahnhof ausgestiegen.', 'aussteigen حركة.', 'konjugation'],
      ['umgezogen', '—', 'مفعول: انتقل سكنًا', 'Ich bin nach Sousse umgezogen.', 'Ich habe nach Sousse umgezogen.', 'umziehen حركة.', 'konjugation'],
      ['passiert', '—', 'مفعول: حدث', 'Was ist passiert?', 'Was hat passiert?', 'passieren بالألمانية تأخذ sein.', 'konjugation'],
      ['gefallen', '—', 'مفعول: أعجب', 'Der Film hat mir gefallen.', 'Der Film ist mir gefallen.', 'gefallen تأخذ haben.', 'konjugation'],
      ['die Fahrkarte', 'die Fahrkarten', 'التذكرة', 'Ich habe die Fahrkarte gekauft.', 'Ich bin die Fahrkarte gekauft.', 'kaufen تأخذ haben.', 'konjugation'],
      ['der Koffer', 'die Koffer', 'الحقيبة', 'Ich habe den Koffer gepackt.', 'Ich bin den Koffer gepackt.', 'packen تأخذ haben.', 'konjugation'],
      ['das Flugzeug', 'die Flugzeuge', 'الطائرة', 'Das Flugzeug ist gelandet.', 'Das Flugzeug hat gelandet.', 'landen حركة: ist.', 'konjugation'],
      ['der Flughafen', 'die Flughäfen', 'المطار', 'Wir sind am Flughafen angekommen.', 'Wir haben am Flughafen angekommen.', 'ankommen حركة.', 'konjugation'],
      ['die Fahrt', 'die Fahrten', 'الرحلة', 'Die Fahrt hat zwei Stunden gedauert.', 'Die Fahrt ist zwei Stunden gedauert.', 'dauern تأخذ haben.', 'konjugation'],
      ['die Reise', 'die Reisen', 'السفر', 'Die Reise hat viel gekostet.', 'Die Reise ist viel gekostet.', 'kosten تأخذ haben.', 'konjugation'],
      ['der Urlaub', 'die Urlaube', 'العطلة', 'Der Urlaub ist schön gewesen.', 'Der Urlaub hat schön gewesen.', 'sein المساعد في gewesen.', 'konjugation'],
      ['das Hotel', 'die Hotels', 'الفندق', 'Wir haben im Hotel geschlafen.', 'Wir sind im Hotel geschlafen.', 'schlafen تأخذ haben.', 'konjugation'],
      ['das Meer', 'die Meere', 'البحر', 'Ich bin ans Meer gefahren.', 'Ich habe ans Meer gefahren.', 'fahren حركة.', 'konjugation'],
      ['der Berg', 'die Berge', 'الجبل', 'Wir sind auf den Berg gestiegen.', 'Wir haben auf den Berg gestiegen.', 'steigen حركة.', 'konjugation'],
      ['das Taxi', 'die Taxis', 'التاكسي', 'Ich bin mit dem Taxi gefahren.', 'Ich bin mit das Taxi gefahren.', 'mit تأخذ داتيف: dem.', 'kasus'],
      ['glücklich', '—', 'سعيد', 'Ich bin glücklich gewesen.', 'Ich habe glücklich gewesen.', 'gewesen مع bin.', 'konjugation'],
      ['letztes Wochenende', '—', 'نهاية الأسبوع الماضية', 'Letztes Wochenende sind wir gefahren.', 'Letztes Wochenende wir sind gefahren.', 'الفعل ثانٍ بعد الظرف.', 'wortstellung', 'Wochenende'],
      ['schon einmal', '—', 'مرّة من قبل', 'Bist du schon einmal geflogen?', 'Hast du schon einmal geflogen?', 'fliegen حركة: bist.', 'konjugation', 'einmal']
    ],
    tricks: [
      { trick: 'الحركة تأخذ sein لا haben', wie: 'Ich bin gegangen · ich bin gefahren · ich bin geflogen.', warum: 'المعيار حركة أو تغيّر حال، والعربية لا تعرف هذا التفريق فتحتاج قاعدة صريحة.', anchor: 'Ich bin nach Hause gegangen.' },
      { trick: 'bleiben وsein وwerden في القائمة نفسها', wie: 'Ich bin geblieben · ich bin gewesen · er ist geworden.', warum: 'لا حركة ظاهرة فيها، فتُحفظ قائمةً صغيرة لا تُنسى.', anchor: 'Ich bin zu Hause geblieben.' },
      { trick: 'وجود «رحلة» في الجملة لا يصنع حركة', wie: 'Die Fahrt hat gedauert · ich habe geschlafen.', warum: 'الحكم للفعل لا للموضوع؛ dauern وschlafen تبقى مع haben.', anchor: 'Die Fahrt hat zwei Stunden gedauert.' }
    ]
  },

  'a1-u3-l6': {
    items: [
      ['einen Termin machen', '—', 'يحدّد موعدًا', 'Ich möchte einen Termin machen.', 'Ich möchte einen Termin mache.', 'بعد möchte مصدر: machen.', 'konjugation', 'machen'],
      ['der Vorschlag', 'die Vorschläge', 'الاقتراح', 'Das ist ein guter Vorschlag.', 'Das ist ein gute Vorschlag.', 'المذكر مع ein ينتهي بـ -er.', 'deklination'],
      ['vorschlagen', 'schlägt vor · schlug vor', 'يقترح', 'Ich schlage Dienstag vor.', 'Ich vorschlage Dienstag.', 'الفصل: schlage … vor.', 'wortstellung', 'vor'],
      ['verschieben', 'verschiebt · verschob', 'يؤجّل', 'Können wir den Termin verschieben?', 'Können wir den Termin verschiebe?', 'بعد können مصدر.', 'konjugation'],
      ['absagen', 'sagt ab · sagte ab', 'يلغي', 'Ich muss den Termin absagen.', 'Ich muss den Termin absage.', 'بعد muss مصدر.', 'konjugation'],
      ['die Verabredung', 'die Verabredungen', 'الموعد الشخصي', 'Ich habe eine Verabredung.', 'Ich habe ein Verabredung.', 'Verabredung مؤنث: eine.', 'genus'],
      ['die Einladung', 'die Einladungen', 'الدعوة', 'Danke für die Einladung.', 'Danke für der Einladung.', 'für تأخذ النصب: die.', 'kasus'],
      ['nächste Woche', '—', 'الأسبوع القادم', 'Nächste Woche habe ich Zeit.', 'Nächste Woche ich habe Zeit.', 'الفعل ثانٍ بعد الظرف.', 'wortstellung', 'Woche'],
      ['besetzt', '—', 'محجوز · مشغول', 'Der Stuhl ist besetzt.', 'Der Stuhl ist besetzen.', 'اسم المفعول besetzt لا المصدر.', 'konjugation'],
      ['übermorgen', '—', 'بعد الغد', 'Übermorgen passt es mir.', 'Übermorgen es passt mir.', 'الفعل ثانٍ بعد الظرف.', 'wortstellung'],
      ['vorgestern', '—', 'أول أمس', 'Vorgestern war der Termin.', 'Vorgestern der Termin war.', 'الفعل ثانٍ، والظرف لا يزيحه إلى الآخر.', 'wortstellung'],
      ['das tut mir leid', '—', 'يؤسّفني ذلك', 'Das tut mir leid.', 'Das tut mich leid.', 'leidtun تأخذ mir.', 'kasus', 'leid'],
      ['der Anruf', 'die Anrufe', 'الاتصال', 'Ich habe einen Anruf bekommen.', 'Ich habe einen Anruf bekomme.', 'bekommen ← bekommen مع haben.', 'konjugation'],
      ['bestätigen', 'bestätigt · bestätigte', 'يؤكّد', 'Ich bestätige den Termin.', 'Ich bestätige der Termin.', 'المفعول المذكر den.', 'kasus', 'bestätige'],
      ['die Bestätigung', 'die Bestätigungen', 'التأكيد', 'Die Bestätigung kommt per E-Mail.', 'Der Bestätigung kommt per E-Mail.', 'Bestätigung مؤنث: die.', 'genus'],
      ['vormittags', '—', 'في الفترة الصباحية', 'Vormittags habe ich keine Zeit.', 'Vormittags ich habe keine Zeit.', 'الفعل ثانٍ بعد الظرف.', 'wortstellung'],
      ['nachmittags', '—', 'بعد الظهر', 'Nachmittags passt es mir.', 'Nachmittags es passt mir.', 'الفعل ثانٍ.', 'wortstellung'],
      ['abends', '—', 'في المساء', 'Abends habe ich Zeit.', 'Abends ich habe Zeit.', 'الفعل ثانٍ بعد abends.', 'wortstellung'],
      ['das Gespräch', 'die Gespräche', 'المحادثة', 'Das Gespräch dauert zwanzig Minuten.', 'Das Gespräch dauert zwanzig Minute.', 'بعد العدد جمع: Minuten.', 'plural'],
      ['die Besprechung', 'die Besprechungen', 'الاجتماع', 'Die Besprechung ist um zehn.', 'Der Besprechung ist um zehn.', 'Besprechung مؤنث: die.', 'genus'],
      ['der Chef', 'die Chefs', 'المدير', 'Mein Chef kommt später.', 'Meine Chef kommt später.', 'Chef مذكر: mein.', 'genus'],
      ['die Kollegin', 'die Kolleginnen', 'الزميلة', 'Meine Kollegin hat Zeit.', 'Mein Kollegin hat Zeit.', 'Kollegin مؤنث: meine.', 'deklination'],
      ['der Kollege', 'die Kollegen', 'الزميل', 'Mein Kollege ruft an.', 'Meine Kollege ruft an.', 'Kollege مذكر: mein.', 'deklination'],
      ['der Plan', 'die Pläne', 'الخطة', 'Der Plan ist voll.', 'Die Plan ist voll.', 'Plan مذكر: der.', 'genus'],
      ['telefonieren', 'telefoniert · telefonierte', 'يتحدّث هاتفيًا', 'Ich telefoniere um zwei.', 'Ich telefoniere in zwei.', 'الساعة تأخذ um.', 'präposition', 'telefoniere'],
      ['sich treffen', 'trifft sich · traf sich', 'يتقابل', 'Wir treffen uns um acht.', 'Wir treffen um acht.', 'treffen يحتاج الضمير uns.', 'kasus', 'treffen'],
      ['der Wochentag', 'die Wochentage', 'يوم الأسبوع', 'Welcher Wochentag passt Ihnen?', 'Welche Wochentag passt Ihnen?', 'Tag مذكر: welcher.', 'genus'],
      ['Wie wäre es mit', '—', 'ما رأيك بـ', 'Wie wäre es mit Dienstag?', 'Wie wäre es am Dienstag?', 'الاقتراح يأخذ mit + داتيف.', 'präposition', 'mit']
    ],
    tricks: [
      { trick: 'Termin يُصنع ويُؤجَّل ويُلغى', wie: 'einen Termin machen · verschieben · absagen.', warum: 'ثلاثة أفعال تدور حول الكلمة نفسها، وحفظها معها يمنع ترتيبًا عربيًا خاطئًا.', anchor: 'Ich möchte einen Termin machen.' },
      { trick: 'passen في المواعيد تأخذ mir', wie: 'Das passt mir. · Das passt mir nicht.', warum: 'القاعدة نفسها التي تعلّمتها مع الملابس؛ الخطأ فيها يقلب معنى الرد.', anchor: 'Das passt mir.' },
      { trick: 'ظرف الترتيب يفتح الجملة والفعل ثانٍ', wie: 'Vormittags habe ich keine Zeit. · Abends passt es mir.', warum: 'الظرف الأول لا يُلغي الموضع الثاني، وهو الخطأ الأشهر في ردود المواعيد.', anchor: 'Vormittags habe ich keine Zeit.' }
    ]
  }

};

/* Deutschweg — P3.2 lexical layer, A1 unit 1 (part b): a1-u1-l4 … a1-u1-l6. */

module.exports = {

  'a1-u1-l4': {
    items: [
      ['mich', '—', 'إيّاي', 'Siehst du mich?', 'Siehst du ich?', 'ضمير المتكلم في النصب mich.', 'kasus'],
      ['dich', '—', 'إيّاك', 'Ich sehe dich.', 'Ich sehe du.', 'du في النصب تصير dich.', 'kasus'],
      ['ihn', '—', 'إيّاه', 'Ich sehe ihn.', 'Ich sehe er.', 'er في النصب تصير ihn.', 'kasus'],
      ['sie', '—', 'إيّاها', 'Ich sehe sie.', 'Ich sehe ihr.', 'sie تبقى sie في النصب لا ihr.', 'kasus'],
      ['es', '—', 'إيّاه (محايد)', 'Ich habe es.', 'Ich habe ihn.', 'es تبقى es في النصب.', 'kasus'],
      ['uns', '—', 'إيّانا', 'Besuchst du uns?', 'Besuchst du wir?', 'wir في النصب تصير uns.', 'kasus'],
      ['euch', '—', 'إيّاكم', 'Ich rufe euch an.', 'Ich rufe ihr an.', 'ihr في النصب تصير euch.', 'kasus'],
      ['sehen', 'sieht · sah', 'يرى', 'Siehst du mich?', 'Du siehst mich?', 'في السؤال المباشر يتقدّم الفعل.', 'wortstellung', 'Siehst'],
      ['kennen', 'kennt · kannte', 'يعرف شخصًا', 'Kennst du ihn?', 'Kennst du er?', 'بعد الفعل يأتي ضمير النصب: ihn.', 'kasus', 'Kennst'],
      ['besuchen', 'besucht · besuchte', 'يزور', 'Ich besuche dich morgen.', 'Ich besuche zu dir morgen.', 'besuchen تأخذ مفعولًا بلا حرف جر.', 'kasus', 'besuche'],
      ['anrufen', 'ruft an · rief an', 'يتّصل بـ', 'Ich rufe dich an.', 'Ich rufe an dich.', 'البادئة an تبقى في الآخر.', 'wortstellung', 'an'],
      ['fragen', 'fragt · fragte', 'يسأل', 'Ich frage ihn.', 'Ich frage zu ihm.', 'fragen تأخذ مفعولًا مباشرًا: ihn.', 'kasus', 'frage'],
      ['abholen', 'holt ab · holte ab', 'يقلّ', 'Ich hole dich ab.', 'Ich hole ab dich.', 'ab في آخر الجملة، والضمير قبلها.', 'wortstellung', 'hole'],
      ['einladen', 'lädt ein · lud ein', 'يدعو', 'Ich lade dich ein.', 'Ich lade ein dich.', 'ein في الآخر، والفعل المصرّف ثانٍ.', 'wortstellung', 'lade'],
      ['lieben', 'liebt · liebte', 'يحب', 'Ich liebe dich.', 'Ich liebe du.', 'المفعول ضمير النصب dich.', 'kasus', 'liebe'],
      ['finden', 'findet · fand', 'يجد', 'Ich finde dich.', 'Ich finde du.', 'بعد الفعل dich لا du.', 'kasus', 'finde'],
      ['der Mann', 'die Männer', 'الرجل', 'Ich kenne den Mann.', 'Ich kenne der Mann.', 'المفعول المذكر den.', 'kasus'],
      ['die Nachbarin', 'die Nachbarinnen', 'الجارة', 'Ich sehe die Nachbarin.', 'Ich sehe den Nachbarin.', 'المؤنث في النصب die.', 'kasus'],
      ['das Mädchen', 'die Mädchen', 'الفتاة', 'Ich kenne das Mädchen.', 'Ich kenne den Mädchen.', 'المحايد في النصب das.', 'kasus'],
      ['die Leute', '—', 'الناس', 'Ich kenne die Leute.', 'Ich kenne den Leute.', 'الجمع في النصب die.', 'plural'],
      ['der Gast', 'die Gäste', 'الضيف', 'Ich begrüße den Gast.', 'Ich begrüße der Gast.', 'der ← den في النصب.', 'kasus'],
      ['begrüßen', 'begrüßt · begrüßte', 'يُحيّي', 'Ich begrüße dich.', 'Ich begrüße du.', 'المفعول ضمير نصب: dich.', 'kasus', 'begrüße'],
      ['das Geschenk', 'die Geschenke', 'الهدية', 'Ich kaufe das Geschenk.', 'Ich kaufe den Geschenk.', 'المحايد لا يتغيّر.', 'kasus'],
      ['die Karte', 'die Karten', 'البطاقة · التذكرة', 'Ich kaufe die Karte.', 'Ich kaufe den Karte.', 'المؤنث في النصب die.', 'kasus'],
      ['die Rechnung', 'die Rechnungen', 'الفاتورة', 'Ich bezahle die Rechnung.', 'Ich bezahle den Rechnung.', 'المؤنث يبقى die.', 'kasus'],
      ['bezahlen', 'bezahlt · bezahlte', 'يدفع', 'Ich bezahle das Essen.', 'Ich bezahle für das Essen.', 'bezahlen بلا حرف جر.', 'präposition', 'bezahle'],
      ['wirklich', '—', 'حقًا', 'Ich mag ihn wirklich.', 'Ich wirklich mag ihn.', 'الظرف لا يُخرج الفعل من الموضع الثاني.', 'wortstellung'],
      ['morgen', '—', 'غدًا', 'Ich besuche dich morgen.', 'Ich besuche morgen dich.', 'الظرف الزمني بعد المفعول الضميري.', 'wortstellung']
    ],
    tricks: [
      { trick: 'الضمير يلبس ثوب المفعول', wie: 'ich ← mich · du ← dich · er ← ihn · wir ← uns.', warum: 'المتعلم ينطق ضمير الرفع في موضع المفعول؛ السلّم الصغير يثبّت الشكل الجديد.', anchor: 'Ich sehe dich.' },
      { trick: 'sie لا تتغيّر في النصب', wie: 'Ich sehe sie. — هي هي، رفعًا ونصبًا.', warum: 'البحث عن شكل آخر لها ينتج ihr، وهي داتيف لا نصب.', anchor: 'Ich sehe sie.' },
      { trick: 'الفعل المنفصل: الضمير في الوسط', wie: 'Ich rufe dich an. · Ich lade dich ein.', warum: 'البادئة في الآخر والمفعول قبلها، والترتيب العربي يقلب الاثنين.', anchor: 'Ich rufe dich an.' }
    ]
  },

  'a1-u1-l5': {
    items: [
      ['mein Bruder', 'meine Brüder', 'أخي', 'Das ist mein Bruder.', 'Das ist meinen Bruder.', 'في الرفع mein بلا نهاية.', 'deklination', 'mein'],
      ['meine Schwester', 'meine Schwestern', 'أختي', 'Das ist meine Schwester.', 'Das ist mein Schwester.', 'Schwester مؤنث: meine.', 'deklination', 'meine'],
      ['mein Vater', 'die Väter', 'أبي', 'Mein Vater arbeitet hier.', 'Meinen Vater arbeitet hier.', 'الفاعل في الرفع: mein Vater.', 'kasus', 'Mein'],
      ['meine Mutter', 'die Mütter', 'أمي', 'Meine Mutter kocht gern.', 'Mein Mutter kocht gern.', 'المؤنث: meine Mutter.', 'deklination', 'Meine'],
      ['meine Eltern', '—', 'والداي', 'Meine Eltern wohnen in Tunis.', 'Mein Eltern wohnen in Tunis.', 'الجمع يأخذ meine.', 'plural', 'Meine'],
      ['mein Kind', 'meine Kinder', 'طفلي', 'Mein Kind spielt im Hof.', 'Meine Kind spielt im Hof.', 'Kind محايد: mein.', 'genus', 'Mein'],
      ['mein Auto', 'meine Autos', 'سيارتي', 'Mein Auto ist alt.', 'Meine Auto ist alt.', 'Auto محايد: mein.', 'genus', 'Mein'],
      ['mein Zimmer', 'meine Zimmer', 'غرفتي', 'Mein Zimmer ist klein.', 'Meine Zimmer ist klein.', 'Zimmer محايد: mein.', 'genus', 'Mein'],
      ['mein Handy', 'meine Handys', 'هاتفي', 'Mein Handy ist neu.', 'Meine Handy ist neu.', 'Handy محايد: mein.', 'genus', 'Mein'],
      ['meinen Bruder', '—', 'أخي (نصب)', 'Ich sehe meinen Bruder.', 'Ich sehe mein Bruder.', 'المذكر في النصب meinen.', 'deklination', 'meinen'],
      ['meine Tasche', 'meine Taschen', 'حقيبتي', 'Ich nehme meine Tasche.', 'Ich nehme meinen Tasche.', 'المؤنث في النصب يبقى meine.', 'deklination', 'meine'],
      ['mein Buch', 'meine Bücher', 'كتابي', 'Ich lese mein Buch.', 'Ich lese meinen Buch.', 'المحايد في النصب يبقى mein.', 'deklination', 'mein'],
      ['dein Name', 'deine Namen', 'اسمك', 'Wie ist dein Name?', 'Wie ist deinen Name?', 'في الرفع dein بلا نهاية.', 'deklination', 'dein'],
      ['deine Nummer', 'deine Nummern', 'رقمك', 'Wie ist deine Nummer?', 'Wie ist dein Nummer?', 'Nummer مؤنث: deine.', 'deklination', 'deine'],
      ['dein Freund', 'deine Freunde', 'صديقك', 'Ist das dein Freund?', 'Ist das deinen Freund?', 'بعد sein يأتي الرفع: dein Freund.', 'kasus', 'dein'],
      ['seine Frau', 'seine Frauen', 'زوجته', 'Seine Frau arbeitet im Büro.', 'Sein Frau arbeitet im Büro.', 'Frau مؤنث: seine.', 'deklination', 'Seine'],
      ['sein Sohn', 'seine Söhne', 'ابنه', 'Sein Sohn ist zehn.', 'Seine Sohn ist zehn.', 'Sohn مذكر: sein.', 'genus', 'Sein'],
      ['ihre Tochter', 'ihre Töchter', 'ابنتها', 'Ihre Tochter lernt Deutsch.', 'Ihr Tochter lernt Deutsch.', 'Tochter مؤنث: ihre.', 'deklination', 'Ihre'],
      ['unser Haus', 'unsere Häuser', 'بيتنا', 'Unser Haus ist groß.', 'Unsere Haus ist groß.', 'Haus محايد: unser.', 'genus', 'Unser'],
      ['unsere Wohnung', 'unsere Wohnungen', 'شقتنا', 'Unsere Wohnung ist klein.', 'Unser Wohnung ist klein.', 'Wohnung مؤنث: unsere.', 'deklination', 'Unsere'],
      ['euer Lehrer', 'eure Lehrer', 'معلّمكم', 'Euer Lehrer ist neu.', 'Eure Lehrer ist neu.', 'Lehrer مذكر: euer.', 'deklination', 'Euer'],
      ['Ihre Nummer', 'Ihre Nummern', 'رقم حضرتك', 'Wie ist Ihre Nummer?', 'Wie ist ihre Nummer?', 'خطاب الاحترام يبدأ بحرف كبير.', 'register', 'Ihre'],
      ['Ihr Termin', 'Ihre Termine', 'موعد حضرتك', 'Ihr Termin ist um zehn.', 'Ihre Termin ist um zehn.', 'Termin مذكر: Ihr بلا e.', 'register', 'Ihr'],
      ['mein Beruf', 'meine Berufe', 'مهنتي', 'Mein Beruf ist Lehrer.', 'Meine Beruf ist Lehrer.', 'Beruf مذكر: mein.', 'genus', 'Mein'],
      ['meine Arbeit', 'meine Arbeiten', 'عملي', 'Meine Arbeit macht mir Spaß.', 'Mein Arbeit macht mir Spaß.', 'Arbeit مؤنث: meine.', 'deklination', 'Meine'],
      ['mein Termin', 'meine Termine', 'موعدي', 'Mein Termin ist am Montag.', 'Meine Termin ist am Montag.', 'Termin مذكر: mein.', 'deklination', 'Mein'],
      ['deine Hilfe', '—', 'مساعدتك', 'Danke für deine Hilfe.', 'Danke für dein Hilfe.', 'Hilfe مؤنث: deine.', 'deklination', 'deine'],
      ['meine Freundin', 'meine Freundinnen', 'صديقتي', 'Meine Freundin kommt aus Berlin.', 'Mein Freundin kommt aus Berlin.', 'Freundin مؤنث: meine.', 'deklination', 'Meine']
    ],
    tricks: [
      { trick: 'أداة الملكية تتبع الشيء لا صاحبه', wie: 'mein Bruder · meine Schwester · mein Kind.', warum: 'الجنس للاسم المملوك، والعربية لا تُظهره فلا يجد المتعلم مرشدًا.', anchor: 'Das ist mein Bruder.' },
      { trick: 'في النصب يتحرّك المذكر وحده', wie: 'mein Bruder ← Ich sehe meinen Bruder، وmeine · mein ثابتتان.', warum: 'الحركة نفسها التي تعلّمها مع den، فتصلح هنا أيضًا.', anchor: 'Ich sehe meinen Bruder.' },
      { trick: 'Ihre بحرف كبير لحضرتك', wie: 'Wie ist Ihre Nummer? — الكبير يفصل الاحترام عن «رقمها».', warum: 'حرف واحد يفرّق بين خطاب الاحترام والغائب، والخطأ فيه يُلبس المعنى.', anchor: 'Wie ist Ihre Nummer?' }
    ]
  },

  'a1-u1-l6': {
    items: [
      ['können', 'kann · konnte', 'يستطيع', 'Ich kann schwimmen.', 'Ich kann schwimmen ich.', 'لا ضمير مكرّر في آخر الجملة.', 'wortstellung', 'kann'],
      ['müssen', 'muss · musste', 'يجب عليه', 'Ich muss lernen.', 'Ich muss lernen ich.', 'الضمير في الأول يكفي.', 'wortstellung', 'muss'],
      ['kann', '—', 'أستطيع', 'Ich kann heute nicht kommen.', 'Ich kann heute nicht komme.', 'بعد المساعد يأتي المصدر.', 'konjugation', 'kann'],
      ['muss', '—', 'يجب', 'Sie muss heute arbeiten.', 'Sie muss heute arbeitet.', 'بعد muss مصدر: arbeiten.', 'konjugation', 'muss'],
      ['dürfen', 'darf · durfte', 'يُسمح له', 'Darf ich hier rauchen?', 'Darf ich hier rauche?', 'المصدر بعد المساعد.', 'konjugation', 'Darf'],
      ['schwimmen', 'schwimmt · schwamm', 'يسبح', 'Ich kann schwimmen.', 'Ich kann schwimme.', 'schwimmen في الآخر لا تُصرَّف.', 'konjugation'],
      ['rauchen', 'raucht · rauchte', 'يدخّن', 'Hier darf man nicht rauchen.', 'Hier darf man nicht raucht.', 'بعد dürfen يأتي المصدر.', 'konjugation'],
      ['bleiben', 'bleibt · blieb', 'يبقى', 'Du kannst bleiben.', 'Du kannst bleibst.', 'المصدر بلا نهاية بعد kannst.', 'konjugation'],
      ['mitkommen', 'kommt mit · kam mit', 'يأتي مع', 'Kannst du mitkommen?', 'Kannst du mitkommst?', 'بعد kannst يبقى المصدر mitkommen.', 'wortstellung'],
      ['kochen', 'kocht · kochte', 'يطبخ', 'Ich muss heute kochen.', 'Ich muss heute koche.', 'المصدر في الآخر: kochen.', 'konjugation'],
      ['lesen', 'liest · las', 'يقرأ', 'Ich muss den Text lesen.', 'Ich muss den Text liest.', 'لا تصريف بعد muss.', 'konjugation'],
      ['schreiben', 'schreibt · schrieb', 'يكتب', 'Ich muss eine E-Mail schreiben.', 'Ich muss eine E-Mail schreibe.', 'المصدر في الآخر.', 'konjugation'],
      ['wiederholen', 'wiederholt · wiederholte', 'يعيد', 'Ich muss die Wörter wiederholen.', 'Ich muss die Wörter wiederhole.', 'بعد muss المصدر.', 'konjugation'],
      ['die Hausaufgabe', 'die Hausaufgaben', 'الواجب المنزلي', 'Ich muss die Hausaufgabe machen.', 'Ich muss die Hausaufgabe macht.', 'بعد muss مصدر: machen.', 'konjugation'],
      ['die Prüfung', 'die Prüfungen', 'الامتحان', 'Ich muss für die Prüfung lernen.', 'Ich muss für die Prüfung lerne.', 'المصدر lernen لا lerne.', 'konjugation'],
      ['der Text', 'die Texte', 'النص', 'Ich kann den Text lesen.', 'Ich kann den Text lese.', 'المصدر lesen.', 'konjugation'],
      ['das Wort', 'die Wörter', 'الكلمة', 'Ich muss das Wort lernen.', 'Ich muss das Wort ich lerne.', 'الفعل في الآخر بلا ضمير.', 'wortstellung'],
      ['das Fahrrad', 'die Fahrräder', 'الدراجة', 'Ich kann Fahrrad fahren.', 'Ich kann mit Fahrrad fahren.', 'مهارات مثل Fahrrad fahren بلا حرف جر.', 'präposition'],
      ['der Computer', 'die Computer', 'الحاسوب', 'Ich kann am Computer arbeiten.', 'Ich kann auf Computer arbeiten.', 'am Computer: am = an + dem.', 'präposition'],
      ['genug', '—', 'كافٍ', 'Ich habe nicht genug Zeit.', 'Ich habe nicht Zeit genug.', 'genug قبل الاسم هنا.', 'wortstellung'],
      ['allein', '—', 'وحده', 'Sie kann allein fahren.', 'Sie kann fährt allein.', 'بعد können مصدر: fahren.', 'konjugation'],
      ['der Job', 'die Jobs', 'العمل', 'Ich brauche den Job.', 'Ich brauche der Job.', 'المفعول المذكر den.', 'kasus'],
      ['die Hilfe', '—', 'المساعدة', 'Ich brauche deine Hilfe.', 'Ich brauche dein Hilfe.', 'Hilfe مؤنث: deine.', 'deklination'],
      ['der Satz', 'die Sätze', 'الجملة', 'Ich kann einen Satz schreiben.', 'Ich kann ein Satz schreiben.', 'النكرة المذكرة في النصب einen.', 'kasus'],
      ['die Übung', 'die Übungen', 'التمرين', 'Ich muss die Übung machen.', 'Ich muss die Übung mache.', 'بعد muss مصدر: machen.', 'konjugation'],
      ['das Beispiel', 'die Beispiele', 'المثال', 'Ich kann ein Beispiel geben.', 'Ich kann ein Beispiel gebe.', 'المصدر geben.', 'konjugation'],
      ['die Klasse', 'die Klassen', 'الصف', 'Meine Klasse ist groß.', 'Mein Klasse ist groß.', 'Klasse مؤنث: meine.', 'deklination'],
      ['die Woche', 'die Wochen', 'الأسبوع', 'Ich muss diese Woche viel arbeiten.', 'Ich muss diese Woche viel arbeite.', 'المصدر arbeiten.', 'konjugation']
    ],
    tricks: [
      { trick: 'المساعد يحمل التصريف والمصدر يقف في الآخر', wie: 'Ich kann schwimmen. · Sie muss arbeiten.', warum: 'العربية تصرّف الفعل الثاني، والألمانية تمنعه؛ والخطأ يسكن في نهاية الجملة.', anchor: 'Ich kann schwimmen.' },
      { trick: 'kann قدرة · muss واجب · darf إذن', wie: 'Ich kann lernen · ich muss lernen · ich darf lernen.', warum: 'استعمال kann لكل شيء يمحو الفرق بين القدرة والإلزام، وهو فرق يسمعه الألماني فورًا.', anchor: 'Ich muss lernen.' },
      { trick: 'في السؤال يتقدّم المساعد', wie: 'Kannst du mitkommen? · Darf ich rauchen?', warum: 'في سؤال نعم/لا يكون المصرّف أولًا، والمصدر في الآخر.', anchor: 'Kannst du mitkommen?' }
    ]
  }

};

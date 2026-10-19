/* Deutschweg — B1 lexical layer, unit 6 (part a): b1-u6-l1 · b1-u6-l2.
   The sixth unit is the B1 match's own amendment (B1-L2, DECISIONS-PENDING.md
   item 25): its six lessons carry the 219 entries that tools/goethe-b1-candidates.txt
   proved the learner already MEETS in the material while no word list names them.
   A lesson holds 40 words (the compiler's ceiling), so 6 × 40 carries the pool and
   the 21 entries beside it that the new lessons' own material introduces.
   Unit 6 is written in three modules of two lessons each (u6a l1–l2, u6b l3–l4,
   u6c l5–l6) so the batch that carries the pool lands in readable pieces. */

module.exports = {

  'b1-u6-l1': {
    items: [
      ['der Bildschirm', 'die Bildschirme', 'الشاشة', 'Der Bildschirm ist zu hell.', 'Der Bildschirm ist zu helle.', 'الصفة الخبرية بلا نهاية: hell.', 'deklination', 'Bildschirm'],
      ['die Tastatur', 'die Tastaturen', 'لوحة المفاتيح', 'Die Tastatur liegt unter dem Bildschirm.', 'Die Tastatur liegt unter den Bildschirm.', 'unter + داتيف في الوضع: dem.', 'kasus', 'Tastatur'],
      ['die Taste', 'die Tasten', 'الزرّ', 'Die Taste links ist kaputt.', 'Die Taste links sind kaputt.', 'فاعل مفرد: ist لا sind.', 'konjugation', 'Taste'],
      ['das Video', 'die Videos', 'الفيديو', 'Das Video dauert zwei Minuten.', 'Das Video dauert für zwei Minuten.', 'dauern بلا حرف جر.', 'präposition', 'Video'],
      ['installieren', '—', 'ينصّب (برنامجًا)', 'Ich installiere die neue App morgen.', 'Ich installiert die neue App morgen.', 'مع ich: installiere لا installiert.', 'konjugation', 'installiere'],
      ['bedienen', '—', 'يشغّل جهازًا', 'Er bedient das Gerät ohne Hilfe.', 'Er bedient auf das Gerät ohne Hilfe.', 'bedienen بلا حرف جر ويُصرّف مع er: bedient.', 'präposition', 'bedient'],
      ['klicken', '—', 'ينقر', 'Bitte klicke auf den grünen Knopf.', 'Bitte klicke den grünen Knopf.', 'klicken مع auf.', 'präposition', 'klicke'],
      ['der Klick', 'die Klicks', 'النقرة', 'Ein Klick öffnet die Seite.', 'Ein Klick öffnet auf die Seite.', 'öffnen بلا حرف جر.', 'präposition', 'Klick'],
      ['empfangen', '—', 'يستقبل', 'Ich empfange die Nachricht heute Abend.', 'Ich empfange der Nachricht heute Abend.', 'مفعول منصوب: die Nachricht لا der.', 'kasus', 'empfange'],
      ['das Kabel', 'die Kabel', 'الكابل', 'Das Kabel liegt hinter dem Tisch.', 'Das Kabel liegt hinter den Tisch.', 'hinter + داتيف في الوضع: dem.', 'kasus', 'Kabel'],
      ['digital', '—', 'رقمي', 'Die Schule arbeitet heute digital.', 'Die Schule arbeiten heute digital.', 'فاعل مفرد: arbeitet لا arbeiten.', 'konjugation', 'digital'],
      ['das Zeichen', 'die Zeichen', 'الإشارة', 'Das Zeichen oben bedeutet Stopp.', 'Das Zeichen oben bedeutet für Stopp.', 'bedeuten بلا حرف جر.', 'präposition', 'Zeichen'],
      ['der Ordner', 'die Ordner', 'المجلد', 'Der Ordner steht im Regal.', 'Der Ordner steht in das Regal.', 'الوضع مع in داتيف: im Regal لا in das.', 'kasus', 'Ordner'],
      ['die Liste', 'die Listen', 'القائمة', 'Die Liste ist noch offen.', 'Die Liste ist noch offene.', 'الصفة الخبرية بلا نهاية: offen.', 'deklination', 'Liste'],
      ['die Reihenfolge', 'die Reihenfolgen', 'الترتيب', 'Die Reihenfolge stimmt nicht.', 'Die Reihenfolge stimmen nicht.', 'فاعل مفرد: stimmt لا stimmen.', 'konjugation', 'Reihenfolge'],
      ['markieren', '—', 'يؤشّر على', 'Ich markiere die wichtige Zeile.', 'Ich markiere auf die wichtige Zeile.', 'markieren بلا حرف جر.', 'präposition', 'markiere'],
      ['ordnen', '—', 'يرتّب', 'Wir ordnen die Karten nach Farbe.', 'Wir ordnen die Karten in Farbe.', 'الترتيب بـ nach.', 'präposition', 'ordnen'],
      ['testen', '—', 'يختبر', 'Die Firma testet das neue Gerät.', 'Die Firma testet über das neue Gerät.', 'testen بلا حرف جر.', 'präposition', 'testet'],
      ['starten', '—', 'يبدأ', 'Der Kurs startet am Montag.', 'Der Kurs startet auf Montag.', 'مع الأيام: am.', 'präposition', 'startet'],
      ['stoppen', '—', 'يوقف', 'Der Fahrer stoppt an der Ecke.', 'Der Fahrer stoppt auf die Ecke.', 'an + داتيف: der Ecke.', 'kasus', 'stoppt'],
      ['die Form', 'die Formen', 'الشكل', 'Die Form ist einfach.', 'Die Form ist einfache.', 'الصفة الخبرية بلا نهاية: einfach.', 'deklination', 'Form'],
      ['das Detail', 'die Details', 'التفصيل', 'Ein Detail fehlt noch.', 'Ein Detail fehlen noch.', 'فاعل مفرد: fehlt لا fehlen.', 'konjugation', 'Detail'],
      ['die Schrift', 'die Schriften', 'الخطّ', 'Die Schrift ist zu klein.', 'Die Schrift ist zu kleine.', 'الصفة الخبرية بلا نهاية: klein.', 'deklination', 'Schrift'],
      ['verpacken', '—', 'يغلّف', 'Wir verpacken die Ware sorgfältig.', 'Wir verpacken auf die Ware sorgfältig.', 'verpacken بلا حرف جر.', 'präposition', 'verpacken'],
      ['funktionieren', '—', 'يؤدي وظيفته', 'Der Aufzug funktioniert wieder.', 'Der Aufzug funktionieren wieder.', 'فاعل مفرد: funktioniert لا المصدر.', 'konjugation', 'funktioniert'],
      ['die Kontrolle', 'die Kontrollen', 'المراقبة', 'Die Kontrolle dauert kurz.', 'Die Kontrolle dauert für kurz.', 'dauern بلا حرف جر.', 'präposition', 'Kontrolle'],
      ['die Klingel', 'die Klingeln', 'الجرس', 'Die Klingel ist laut.', 'Die Klingel sind laut.', 'فاعل مفرد: ist لا sind.', 'konjugation', 'Klingel'],
      ['der Dialog', 'die Dialoge', 'الحوار', 'Der Dialog war höflich.', 'Der Dialog war höfliche.', 'الصفة الخبرية بلا نهاية: höflich.', 'deklination', 'Dialog'],
      ['die Planung', 'die Planungen', 'التخطيط', 'Die Planung läuft seit Januar.', 'Die Planung laufen seit Januar.', 'فاعل مفرد: läuft لا laufen.', 'konjugation', 'Planung'],
      ['die Aktivität', 'die Aktivitäten', 'النشاط', 'Die Aktivität beginnt um acht.', 'Die Aktivität beginnt auf acht.', 'مع الساعة: um.', 'präposition', 'Aktivität'],
      ['die Station', 'die Stationen', 'المحطة', 'Die nächste Station heißt West.', 'Die nächste Station heißen West.', 'فاعل مفرد: heißt لا heißen.', 'konjugation', 'Station'],
      ['die Beschreibung', 'die Beschreibungen', 'الوصف', 'Die Beschreibung ist genau.', 'Die Beschreibung ist genaue.', 'الصفة الخبرية بلا نهاية: genau.', 'deklination', 'Beschreibung'],
      ['analysieren', '—', 'يحلّل', 'Wir analysieren den Text zusammen.', 'Wir analysieren über den Text zusammen.', 'analysieren بلا حرف جر.', 'präposition', 'analysieren'],
      ['die Studie', 'die Studien', 'الدراسة', 'Die Studie zeigt ein Ergebnis.', 'Die Studie zeigt über ein Ergebnis.', 'zeigen بلا حرف جر.', 'präposition', 'Studie'],
      ['die Biologie', '—', 'علم الأحياء', 'Biologie war sein Lieblingsfach.', 'Biologie war seine Lieblingsfach.', 'Fach محايد: sein لا seine.', 'deklination', 'Biologie'],
      ['erkennen', '—', 'يدرك', 'Ich erkenne das Problem sofort.', 'Ich erkenne auf das Problem sofort.', 'erkennen بلا حرف جر.', 'präposition', 'erkenne'],
      ['worüber', '—', 'عن ماذا', 'Worüber sprecht ihr gerade?', 'Über was sprecht ihr gerade?', 'للسؤال عن شيء wo(r)+حرف: Worüber لا Über was — وللجواب Darüber.', 'präposition', 'Worüber'],
      ['drin', '—', 'في الداخل', 'Der Schlüssel ist drin.', 'Der Schlüssel sind drin.', 'drin يكتفي بنفسه بلا حرف جر، والفاعل مفرد: ist لا sind.', 'konjugation', 'drin'],
      ['mitten', '—', 'في وسط', 'Das Café liegt mitten in der Stadt.', 'Das Café liegt mitten in die Stadt.', 'الوضع مع in داتيف: der Stadt لا die.', 'kasus', 'mitten'],
      ['Daten', '—', 'البيانات', 'Die Daten sind sicher.', 'Die Daten ist sicher.', 'Daten جمع: sind لا ist.', 'konjugation', 'Daten']
    ],
    tricks: [
      { trick: 'الضمير الظرفي: da(r) + حرف للشيء، wo(r) + حرف للسؤال', wie: 'Ich warte darauf. · Worüber sprecht ihr?', warum: 'العربية تقول «على ذلك» بلفظين، والألمانية تدمجهما في كلمة واحدة، فيبقى auf das خطأ شائعًا.', anchor: 'darauf' },
      { trick: 'للأشخاص حرف + ضمير، وللأشياء الضمير الظرفي', wie: 'Ich warte auf ihn. · Ich warte darauf.', warum: 'الفارق شخص/شيء لا وجود له في العربية بهذه الصورة، فيُستعمل daran للشخص.', anchor: 'daran' },
      { trick: 'الفعل يقرّر حرفه: warten auf · denken an · klicken auf', wie: 'Ich warte darauf. · Ich klicke auf den Knopf.', warum: 'حرف الجر ليس ترجمة للعربية بل جزء من الفعل، فيُحفظ معه في جملة.', anchor: 'warten auf' }
    ],
    strictClozeAnswers: true,
    wordClozeNearMisses: {
      'bedienen': 'bedienen',
      'das Detail': 'Details',
      'drin': 'in'
    },
    clozeItemIndex: 36,
    clozeNearMiss: 'Darüber',
    checkItemIndex: 6,
    extraCheck: {
      right: 'Darauf warte ich schon lange.',
      bad: 'Darauf ich warte schon lange.',
      why: 'الفعل ثانٍ بعد التقديم: Darauf warte ich لا Darauf ich warte.',
      family: 'wortstellung',
      prereq: 'cap.b1-u6-l1.s20',
      frage: 'أي جملة يبقى فيها الفعل ثانيًا بعد تقديم الضمير الظرفي؟'
    }
  },

  'b1-u6-l2': {
    items: [
      ['begeistert', '—', 'متحمّس', 'Die Zuschauer waren begeistert.', 'Die Zuschauer waren begeistern.', 'كصفة: begeistert.', 'konjugation', 'begeistert'],
      ['ärgerlich', '—', 'غاضب/مزعج', 'Der Fehler war ärgerlich.', 'Der Fehler war ärgern.', 'كصفة: ärgerlich.', 'konjugation', 'ärgerlich'],
      ['angenehm', '—', 'مريح/لطيف', 'Die Stimme ist angenehm.', 'Die Stimme ist angenehm gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'angenehm'],
      ['anstrengend', '—', 'مُتعب', 'Der Tag war anstrengend.', 'Der Tag war anstrengen.', 'كصفة: anstrengend.', 'konjugation', 'anstrengend'],
      ['aufmerksam', '—', 'منتبه', 'Sie hört aufmerksam zu.', 'Sie hört aufmerksam an.', 'zuhören فعل منفصل: zu.', 'präposition', 'aufmerksam'],
      ['beruhigen', '—', 'يهدّئ', 'Die Musik beruhigt mich.', 'Die Musik beruhigt auf mich.', 'beruhigen بلا حرف جر.', 'präposition', 'beruhigt'],
      ['neugierig', '—', 'فضولي', 'Das Kind ist neugierig.', 'Das Kind ist neugierig gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'neugierig'],
      ['überraschen', '—', 'يفاجئ', 'Die Nachricht überrascht mich.', 'Die Nachricht überrascht auf mich.', 'überraschen بلا حرف جر.', 'präposition', 'überrascht'],
      ['kritisch', '—', 'ناقد/حرج', 'Er liest kritisch.', 'Er liest kritisch gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'kritisch'],
      ['fair', '—', 'منصف', 'Die Bewertung war fair.', 'Die Bewertung war fair gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'fair'],
      ['realistisch', '—', 'واقعي', 'Der Plan ist realistisch.', 'Der Plan ist realistisch gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'realistisch'],
      ['erwachsen', '—', 'راشد', 'Die Kinder sind schon erwachsen.', 'Die Kinder sind schon erwachsen gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'erwachsen'],
      ['gemeinsam', '—', 'معًا', 'Wir lernen gemeinsam.', 'Wir lernen gemeinsam zusammen.', 'gemeinsam تكفي بلا zusammen.', 'lexik-kollokation', 'gemeinsam'],
      ['ständig', '—', 'باستمرار', 'Er kommt ständig zu spät.', 'Er kommt ständig spät.', 'zu spät لا spät.', 'lexik-kollokation', 'ständig'],
      ['wunderschön', '—', 'بديع', 'Der Garten ist wunderschön.', 'Der Garten ist wunderschön gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'wunderschön'],
      ['die Kälte', '—', 'البرد', 'Die Kälte macht mir nichts aus.', 'Die Kälte macht mir nichts für.', 'ausmachen: aus.', 'präposition', 'Kälte'],
      ['der Nerv', 'die Nerven', 'العصب', 'Der Nerv liegt am Zahn.', 'Der Nerv liegt auf dem Zahn.', 'an + داتيف: am.', 'kasus', 'Nerv'],
      ['reagieren', '—', 'يتفاعل', 'Sie reagiert schnell auf Kritik.', 'Sie reagiert schnell Kritik.', 'reagieren مع auf.', 'präposition', 'reagiert'],
      ['wirken', '—', 'يبدو/يؤثّر', 'Der Film wirkt ruhig.', 'Der Film wirkt ruhig es.', 'لا ضمير زائد.', 'wortstellung', 'wirkt'],
      ['wohl', '—', 'على الأرجح/بخير', 'Er fühlt sich wohl.', 'Er fühlt sich wohl gut.', 'sich wohlfühlen تكفي.', 'lexik-kollokation', 'wohl'],
      ['sichtbar', '—', 'مرئي', 'Der Unterschied ist sichtbar.', 'Der Unterschied ist sichtbar gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'sichtbar'],
      ['klagen', '—', 'يشتكي', 'Die Kundin klagt über den Lärm.', 'Die Kundin klagt den Lärm.', 'klagen مع über.', 'präposition', 'klagt'],
      ['verraten', '—', 'يفشي', 'Er verrät das Geheimnis nicht.', 'Er verrät auf das Geheimnis nicht.', 'verraten بلا حرف جر.', 'präposition', 'verrät'],
      ['warnen', '—', 'يحذّر', 'Die Polizei warnt vor dem Sturm.', 'Die Polizei warnt dem Sturm.', 'warnen مع vor.', 'präposition', 'warnt'],
      ['lohnen', '—', 'يستحق', 'Der Umweg lohnt sich.', 'Der Umweg lohnt sich für.', 'sich lohnen بلا حرف جر.', 'präposition', 'lohnt'],
      ['leisten', '—', 'يقدّم/يؤدي', 'Er leistet gute Arbeit.', 'Er leistet auf gute Arbeit.', 'leisten بلا حرف جر.', 'präposition', 'leistet'],
      ['behalten', '—', 'يحتفظ', 'Ich behalte den Beleg.', 'Ich behalte auf den Beleg.', 'behalten بلا حرف جر.', 'präposition', 'behalte'],
      ['erfahren', '—', 'يعلم/يكتسب خبرة', 'Wir erfahren die Nachricht heute.', 'Wir erfahren über die Nachricht heute.', 'erfahren بلا حرف جر.', 'präposition', 'erfahren'],
      ['erhalten', '—', 'يتلقّى', 'Sie erhält einen Brief.', 'Sie erhält auf einen Brief.', 'erhalten بلا حرف جر.', 'präposition', 'erhält'],
      ['getrennt', '—', 'منفصل', 'Die Betten sind getrennt.', 'Die Betten sind getrennt gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'getrennt'],
      ['extra', '—', 'بشكل خاص', 'Ich komme extra früher.', 'Ich komme extra früher an.', 'ankommen منفصل: an.', 'präposition', 'extra'],
      ['gratis', '—', 'مجانًا', 'Der Eintritt ist gratis.', 'Der Eintritt ist gratis gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'gratis'],
      ['flexibel', '—', 'مرن', 'Die Arbeitszeit ist flexibel.', 'Die Arbeitszeit ist flexibel gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'flexibel'],
      ['atmen', '—', 'يتنفّس', 'Bitte atmen Sie ruhig.', 'Bitte atmen Sie ruhig ein.', 'einatmen منفصل: ein.', 'präposition', 'atmen'],
      ['die Freude', '—', 'الفرح', 'Die Freude war groß.', 'Die Freude war groß gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Freude'],
      ['die Eile', '—', 'العجلة', 'In der Eile vergaß ich den Schlüssel.', 'In der Eile ich vergaß den Schlüssel.', 'الفعل ثانٍ: vergaß ich.', 'wortstellung', 'Eile'],
      ['der Atem', '—', 'النَفَس', 'Der Atem geht ruhig.', 'Der Atem geht ruhig es.', 'لا ضمير زائد.', 'wortstellung', 'Atem'],
      ['die Aufforderung', 'die Aufforderungen', 'الطلب/التعليمة', 'Die Aufforderung steht im Brief.', 'Die Aufforderung steht in dem Brief auf.', 'في = in + داتيف بلا auf.', 'präposition', 'Aufforderung'],
      ['die Auswahl', '—', 'الاختيار', 'Die Auswahl ist groß.', 'Die Auswahl ist groß gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Auswahl'],
      ['das Abenteuer', 'die Abenteuer', 'المغامرة', 'Das Abenteuer war anstrengend.', 'Das Abenteuer war anstrengend gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Abenteuer']
    ],
    tricks: [
      { trick: 'اسم الفاعل كصفة = الفعل + d: spannend · anstrengend · beruhigend', wie: 'Das Buch ist spannend. · Der Tag war anstrengend.', warum: 'العربية تستعمل فعلًا كاملًا في الوصف («الكتاب يُشوّق»)، والألمانية تكتفي بالصفة المشتقّة.', anchor: 'spannend' },
      { trick: 'اسم المفعول كصفة يأخذ نهايات الصفة: ein gespanntes Kind', wie: 'Das gespannte Kind wartet. · Die beruhigte Mutter lächelt.', warum: 'الناطق ينسى نهاية الصفة بعد ein، فيقول gespannt Kind بلا نهاية.', anchor: 'gespannte' },
      { trick: 'الفاعل spannend والمفعول gespannt: من يفعل ومن يفعل به', wie: 'Der Film ist spannend. · Das Kind ist gespannt.', warum: 'الفرق بين «مُشوّق» و«متحمّس» يضيع إذا حُفظ اللفظان ككلمتين منفصلتين.', anchor: 'gespannt' }
    ]
  }

};

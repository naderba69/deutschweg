/* Deutschweg — P3.5 lexical layer, A2 unit 4 (part b): a2-u4-l4 … a2-u4-l6.
   Wetter, Einladung, ein kleines Problem. 26 items per lesson. */

module.exports = {

  'a2-u4-l4': {
    items: [
      ['das Wetter', '—', 'الطقس', 'Wie ist das Wetter heute?', 'Wie ist das Wetter heute es?', 'لا ضمير في السؤال.', 'wortstellung', 'Wetter'],
      ['der Wetterbericht', 'die Wetterberichte', 'نشرة الطقس', 'Der Wetterbericht sagt Regen voraus.', 'Der Wetterbericht sagt Regen vorher.', 'voraussagen فعل واحد.', 'falser-freund', 'Wetterbericht'],
      ['die Sonne', '—', 'الشمس', 'Die Sonne scheint den ganzen Tag.', 'Die Sonne scheint den ganze Tag.', 'النصب: ganzen.', 'kasus', 'Sonne'],
      ['der Regen', '—', 'المطر', 'Bei Regen bleiben wir drinnen.', 'In Regen bleiben wir drinnen.', 'beim Regen أو bei Regen.', 'präposition', 'Regen'],
      ['der Schnee', '—', 'الثلج', 'Im Winter liegt Schnee.', 'Im Winter liegt der Schnee.', 'في الوصف العام بلا أداة.', 'kasus', 'Schnee'],
      ['der Wind', 'die Winde', 'الريح', 'Der Wind kommt aus Westen.', 'Der Wind kommt von Westen.', 'من الغرب: aus Westen.', 'präposition', 'Wind'],
      ['die Wolke', 'die Wolken', 'السحابة', 'Die Wolken sind dunkel.', 'Die Wolke sind dunkel.', 'الجمع: Wolken.', 'plural', 'Wolken'],
      ['der Nebel', '—', 'الضباب', 'Bei Nebel fahre ich langsam.', 'In Nebel fahre ich langsam.', 'bei للمناخ.', 'präposition', 'Nebel'],
      ['das Gewitter', 'die Gewitter', 'العاصفة الرعدية', 'Das Gewitter kommt am Abend.', 'Das Gewitter kommt in Abend.', 'في المساء: am Abend.', 'präposition', 'Gewitter'],
      ['der Sturm', 'die Stürme', 'العاصفة', 'Der Sturm war stark.', 'Der Sturm ist stark gewesen.', 'الماضي: war.', 'konjugation', 'Sturm'],
      ['die Temperatur', 'die Temperaturen', 'الحرارة', 'Die Temperatur steigt.', 'Die Temperatur steigert.', 'steigen فعل قوي: steigt.', 'konjugation', 'Temperatur'],
      ['der Grad', 'die Grade', 'الدرجة', 'Es sind zwanzig Grad.', 'Es sind zwanzig Grade.', 'بعد العدد تبقى Grad.', 'plural', 'Grad'],
      ['warm', '—', 'دافئ', 'Heute ist es warm.', 'Heute ist es warme.', 'بعد sein بلا نهاية.', 'deklination', 'warm'],
      ['kalt', '—', 'بارد', 'Im Winter ist es kalt.', 'Im Winter ist es kalte.', 'بلا نهاية.', 'deklination', 'kalt'],
      ['kühl', '—', 'بارد قليلًا', 'Am Morgen ist es kühl.', 'Am Morgen ist es kühle.', 'بلا نهاية.', 'deklination', 'kühl'],
      ['heiß', '—', 'حار جدًا', 'Im Sommer ist es heiß.', 'Im Sommer ist es heiße.', 'بلا نهاية.', 'deklination', 'heiß'],
      ['trocken', '—', 'جاف', 'Die Straße ist trocken.', 'Die Straße ist trocken gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'trocken'],
      ['feucht', '—', 'رطب', 'Die Luft ist feucht.', 'Die Luft ist feucht gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'feucht'],
      ['der Schirm', 'die Schirme', 'المظلة', 'Ich brauche einen Schirm.', 'Ich brauche ein Schirm.', 'Schirm مذكر: einen.', 'genus', 'Schirm'],
      ['die Regenjacke', 'die Regenjacken', 'جاكيت المطر', 'Nimm die Regenjacke mit!', 'Nimm die Regenjacke!', 'المنفصل: mit.', 'wortstellung', 'mit'],
      ['die Jahreszeit', 'die Jahreszeiten', 'الفصل', 'Der Herbst ist meine liebste Jahreszeit.', 'Der Herbst ist meine liebste Jahreszeit es.', 'لا ضمير.', 'wortstellung', 'Jahreszeit'],
      ['der Herbst', 'die Herbste', 'الخريف', 'Im Herbst regnet es viel.', 'In Herbst regnet es viel.', 'الفصل: im.', 'präposition', 'Herbst'],
      ['der Winter', 'die Winter', 'الشتاء', 'Im Winter schneit es.', 'In Winter schneit es.', 'im.', 'präposition', 'Winter'],
      ['schneien', 'schneit · schneite · hat geschneit', 'يُثلج', 'Es schneit seit gestern.', 'Es schneit für gestern.', 'منذ: seit.', 'präposition', 'schneit'],
      ['der Wetterumschwung', 'die Wetterumschwünge', 'تغيّر الطقس', 'Der Wetterumschwung kommt plötzlich.', 'Der Wetterumschwung kommt plötzlich es.', 'لا ضمير.', 'wortstellung', 'Wetterumschwung'],
      ['die Vorhersage', 'die Vorhersagen', 'التوقّع', 'Die Vorhersage ist gut.', 'Die Vorhersage ist gut gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Vorhersage'],
      ['bewölkt', '—', 'غائم', 'Heute ist es bewölkt.', 'Heute ist es bewölkt Wetter.', 'الجملة تامة بلا Wetter.', 'lexik-kollokation', 'bewölkt'],
      ['fallen', 'fällt · fiel · ist gefallen', 'يسقط', 'Im Herbst fallen die Blätter.', 'Im Herbst fallen die Blätter runter.', 'fallen تكفي.', 'lexik-kollokation', 'fallen'],
      ['der Müll', '—', 'القمامة', 'Bring bitte den Müll raus!', 'Bring bitte die Müll raus!', 'Müll مذكر: den.', 'genus', 'Müll'],
      ['der Wald', 'die Wälder', 'الغابة', 'Im Wald ist es kühl.', 'In der Wald ist es kühl.', 'المكان: im Wald.', 'präposition', 'Wald'],
      ['der Vogel', 'die Vögel', 'الطائر', 'Der Vogel singt am Morgen.', 'Die Vogel singt am Morgen.', 'مذكر: der Vogel.', 'genus', 'Vogel'],
      ['die Pflanze', 'die Pflanzen', 'النبتة', 'Die Pflanze braucht Wasser.', 'Der Pflanze braucht Wasser.', 'مؤنث: die Pflanze.', 'genus', 'Pflanze'],
    ],
    tricks: [
      { trick: 'المناخ بحرف bei: bei Regen · bei Nebel · bei Kälte', wie: 'Bei Regen bleiben wir drinnen. Bei Nebel fahre ich langsam.', warum: 'العربية تقول «في المطر»، والألمانية تستعمل bei للحالة الجوية.', anchor: 'der Regen' },
      { trick: 'الدرجات بلا جمع: zwanzig Grad', wie: 'Es sind zwanzig Grad. Es sind minus fünf Grad.', warum: 'العربية تجمع «درجات»، والألمانية تترك Grad بلا علامة بعد العدد.', anchor: 'der Grad' },
      { trick: 'الوصف الجوي بلا نهاية: es ist warm · es ist kalt', wie: 'Heute ist es warm. Im Winter ist es kalt. Es ist kühl.', warum: 'بعد sein يقف الوصف بلا علامة، وإضافة e هنا خطأ يسمعه الألماني فورًا.', anchor: 'warm' }
    ]
  },

  'a2-u4-l5': {
    items: [
      ['die Einladung', 'die Einladungen', 'الدعوة', 'Danke für die Einladung!', 'Danke für der Einladung!', 'für + نصب.', 'kasus', 'Einladung'],
      ['annehmen', 'nimmt an · nahm an · hat angenommen', 'يقبل', 'Ich nehme die Einladung an.', 'Ich nehme die Einladung.', 'المنفصل: an.', 'wortstellung', 'an'],
      ['ablehnen', 'lehnt ab · lehnte ab · hat abgelehnt', 'يرفض', 'Ich lehne die Einladung ab.', 'Ich ablehne die Einladung.', 'المنفصل في النهاية.', 'wortstellung', 'ab'],
      ['absagen', 'sagt ab · sagte ab · hat abgesagt', 'يعتذر عن الحضور', 'Ich muss den Termin absagen.', 'Ich muss den Termin sagen ab.', 'absagen كلمة واحدة.', 'wortstellung', 'absagen'],
      ['zusagen', 'sagt zu · sagte zu · hat zugesagt', 'يوافق على الحضور', 'Ich habe für Samstag zugesagt.', 'Ich habe für Samstag gesagt zu.', 'المنفصل قطعة واحدة في الماضي.', 'wortstellung', 'zugesagt'],
      ['die Zusage', 'die Zusagen', 'الموافقة', 'Die Zusage kam schnell.', 'Die Zusage ist schnell gekommen.', 'الماضي البسيط أفضل في التقرير.', 'konjugation', 'Zusage'],
      ['die Absage', 'die Absagen', 'الاعتذار', 'Die Absage war höflich.', 'Die Absage ist höflich gewesen.', 'war.', 'konjugation', 'Absage'],
      ['der Gastgeber', 'die Gastgeber', 'المضيف', 'Der Gastgeber begrüßt die Gäste.', 'Der Gastgeber begrüßt die Gäste es.', 'لا ضمير.', 'wortstellung', 'Gastgeber'],
      ['die Uhrzeit', 'die Uhrzeiten', 'الوقت', 'Die Uhrzeit steht auf der Karte.', 'Die Uhrzeit steht in der Karte.', 'على البطاقة: auf der.', 'präposition', 'Uhrzeit'],
      ['der Ort', 'die Orte', 'المكان', 'Der Ort steht auch auf der Karte.', 'Der Ort steht auch in der Karte.', 'auf der Karte.', 'präposition', 'Ort'],
      ['um wie viel Uhr', '—', 'في أي ساعة', 'Um wie viel Uhr beginnt die Feier?', 'In wie viel Uhr beginnt die Feier?', 'الساعة: um.', 'präposition', 'Uhr'],
      ['mitbringen', 'bringt mit · brachte mit · hat mitgebracht', 'يجلب معه', 'Was soll ich mitbringen?', 'Was soll ich bringen mit?', 'mitbringen كلمة واحدة.', 'wortstellung', 'mitbringen'],
      ['mitkommen', 'kommt mit · kam mit · ist mitgekommen', 'يأتي معنا', 'Kommst du mit?', 'Kommst du?', 'mit تغيّر المعنى.', 'wortstellung', 'mit'],
      ['sich freuen auf', 'freut sich auf · freute sich auf', 'يتشوّق', 'Ich freue mich auf die Feier.', 'Ich freue mich die Feier.', 'auf + نصب.', 'präposition', 'freue'],
      ['die Vorfreude', '—', 'الفرح المسبق', 'Die Vorfreude ist groß.', 'Die Vorfreude ist groß gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Vorfreude'],
      ['höflich', '—', 'مهذّب', 'Eine höfliche Absage ist wichtig.', 'Eine höflich Absage ist wichtig.', 'الوصف مع eine: höfliche.', 'deklination', 'höfliche'],
      ['unhöflich', '—', 'غير مهذّب', 'Es ist unhöflich, nicht zu antworten.', 'Es ist unhöflich, nicht antworten.', 'بعد nicht يأتي zu + مصدر.', 'wortstellung', 'unhöflich'],
      ['antworten', 'antwortet · antwortete · hat geantwortet', 'يجيب', 'Antworte bitte bis Freitag!', 'Antworte bitte bis Freitag es!', 'لا ضمير.', 'wortstellung', 'Antworte'],
      ['die Frist', 'die Fristen', 'الأجل', 'Die Frist ist der zehnte Mai.', 'Die Frist ist am zehnte Mai.', 'الموعد: am zehnten.', 'kasus', 'Frist'],
      ['der Kalender', 'die Kalender', 'التقويم', 'Ich schreibe es in den Kalender.', 'Ich schreibe es in dem Kalender.', 'الحركة: in den.', 'kasus', 'Kalender'],
      ['das Geschenk', 'die Geschenke', 'الهدية', 'Ein kleines Geschenk ist üblich.', 'Ein kleines Geschenk ist üblich gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Geschenk'],
      ['die Blumen', '—', 'الزهور', 'Ich bringe Blumen mit.', 'Ich bringe Blumen.', 'المنفصل يحتاج mit.', 'wortstellung', 'mit'],
      ['die Kleidung', '—', 'اللباس', 'Die Kleidung soll bequem sein.', 'Die Kleidung soll bequem ist.', 'بعد soll مصدر: sein.', 'konjugation', 'Kleidung'],
      ['der Anlass', 'die Anlässe', 'المناسبة', 'Der Anlass ist ein Geburtstag.', 'Der Anlass ist ein Geburtstag es.', 'لا ضمير.', 'wortstellung', 'Anlass'],
      ['die Tischkarte', 'die Tischkarten', 'بطاقة الجلوس', 'Die Tischkarte zeigt den Platz.', 'Die Tischkarte zeigt der Platz.', 'المفعول: den.', 'kasus', 'Tischkarte'],
      ['die Dankeskarte', 'die Dankeskarten', 'بطاقة شكر', 'Nach der Feier schreibe ich eine Dankeskarte.', 'Nach der Feier ich schreibe eine Dankeskarte.', 'الفعل ثانٍ بعد الظرف.', 'wortstellung', 'Dankeskarte'],
      ['der Teller', 'die Teller', 'الطبق', 'Der Teller steht auf dem Tisch.', 'Der Teller stehen auf dem Tisch.', 'مفرد: steht.', 'konjugation', 'Teller'],
      ['das Theater', 'die Theater', 'المسرح', 'Wir gehen heute ins Theater.', 'Wir gehen heute in Theater.', 'إلى المسرح: ins Theater.', 'präposition', 'Theater'],
      ['der Volleyball', 'die Volleyballs', 'الكرة الطائرة', 'Wir spielen am Strand Volleyball.', 'Wir spielen am Strand der Volleyball.', 'اللعب بلا أداة: Volleyball spielen.', 'lexik-kollokation', 'Volleyball'],
    ],
    tricks: [
      { trick: 'قبول الدعوة ورفضها: annehmen · absagen · zusagen', wie: 'Ich nehme die Einladung an. Ich muss leider absagen. Ich habe zugesagt.', warum: 'العربية تقول «أوافق» و«أعتذر» بفعلين عاديين، والألمانية تفصل البادئات إلى نهاية الجملة.', anchor: 'annehmen' },
      { trick: 'جواب الدعوة يحتاج zu + مصدر: Es ist unhöflich, nicht zu antworten', wie: 'Es ist höflich, schnell zu antworten. Es ist unhöflich, nicht zu antworten.', warum: 'التركيب zu + مصدر لا نظير له في العربية، فالمتعلم يحذف zu فيفسد المعنى.', anchor: 'unhöflich' },
      { trick: 'الساعة والموعد: um wie viel Uhr? · bis Freitag · am zehnten Mai', wie: 'Um wie viel Uhr beginnt es? Antworte bis Freitag! Der Termin ist am zehnten Mai.', warum: 'كل تعبير زمني له حرفه الثابت، والعربية تستعمل «في» أو لا شيء.', anchor: 'um wie viel Uhr' }
    ]
  },

  'a2-u4-l6': {
    items: [
      ['kaputt', '—', 'معطّل', 'Mein Handy ist kaputt.', 'Mein Handy ist kaputt gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'kaputt'],
      ['reparieren', 'repariert · reparierte · hat repariert', 'يصلح', 'Kannst du das Fahrrad reparieren?', 'Kannst du das Fahrrad reparieren machen?', 'reparieren فعل كامل.', 'lexik-kollokation', 'reparieren'],
      ['die Reparatur', 'die Reparaturen', 'التصليح', 'Die Reparatur kostet fünfzig Euro.', 'Die Reparatur kostet fünfzig Euros.', 'Euro لا تُجمع.', 'plural', 'Reparatur'],
      ['verlieren', 'verliert · verlor · hat verloren', 'يفقد', 'Ich habe meinen Schlüssel verloren.', 'Ich habe meinen Schlüssel verloren gegangen.', 'verlieren فعل كامل.', 'konjugation', 'verloren'],
      ['finden', 'findet · fand · hat gefunden', 'يجد', 'Ich habe den Schlüssel gefunden.', 'Ich habe den Schlüssel gefunden gehabt.', 'الماضي المركّب يكفي.', 'konjugation', 'gefunden'],
      ['verloren', '—', 'مفقود', 'Meine Tasche ist verloren.', 'Meine Tasche ist verlieren.', 'اسم المفعول: verloren.', 'konjugation', 'verloren'],
      ['suchen', 'sucht · suchte · hat gesucht', 'يبحث', 'Ich suche meine Brille.', 'Ich suche für meine Brille.', 'بلا حرف جر.', 'kasus', 'suche'],
      ['die Brille', 'die Brillen', 'النظارة', 'Meine Brille liegt auf dem Tisch.', 'Meine Brille liegt auf den Tisch.', 'السكون: auf dem.', 'präposition', 'Brille'],
      ['das Portemonnaie', 'die Portemonnaies', 'المحفظة', 'Ich habe mein Portemonnaie verloren.', 'Ich habe mein Portemonnaie verloren gehen.', 'verlieren يكفي.', 'konjugation', 'Portemonnaie'],
      ['die Bank anrufen', '—', 'الاتصال بالمصرف', 'Ich muss die Bank anrufen.', 'Ich muss die Bank rufen an.', 'المنفصل قطعة واحدة.', 'wortstellung', 'anrufen'],
      ['sperren', 'sperrt · sperrte · hat gesperrt', 'يوقف/يقفل', 'Ich lasse die Karte sperren.', 'Ich lasse die Karte sperren machen.', 'lassen + مصدر يكفي.', 'konjugation', 'sperren'],
      ['der Diebstahl', 'die Diebstähle', 'السرقة', 'Ich melde den Diebstahl der Polizei.', 'Ich melde die Diebstahl der Polizei.', 'Diebstahl مذكر: den.', 'genus', 'Diebstahl'],
      ['die Polizei', '—', 'الشرطة', 'Ich rufe die Polizei.', 'Ich rufe der Polizei.', 'المفعول: die.', 'kasus', 'Polizei'],
      ['melden', 'meldet · meldete · hat gemeldet', 'يبلّغ', 'Ich melde den Verlust.', 'Ich melde über den Verlust.', 'بلا حرف جر.', 'kasus', 'melde'],
      ['der Verlust', 'die Verluste', 'الفقدان', 'Der Verlust ist ärgerlich.', 'Der Verlust ist ärgerlich gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Verlust'],
      ['die Versicherung', 'die Versicherungen', 'التأمين', 'Die Versicherung zahlt den Schaden.', 'Die Versicherung bezahlt den Schaden immer.', 'zahlen تكفي.', 'lexik-kollokation', 'Versicherung'],
      ['der Schaden', 'die Schäden', 'الضرر', 'Der Schaden ist klein.', 'Der Schaden ist klein gemacht.', 'الصفة تكفي.', 'lexik-kollokation', 'Schaden'],
      ['die Schuld', '—', 'الذنب', 'Es ist nicht meine Schuld.', 'Es ist nicht mein Schuld.', 'Schuld مؤنث: meine.', 'genus', 'Schuld'],
      ['leidtun', 'tut leid · tat leid · hat leidgetan', 'يُؤسف', 'Das tut mir leid.', 'Das tut mich leid.', 'داتيف: mir.', 'kasus', 'tut'],
      ['der Fehler', 'die Fehler', 'الخطأ', 'Das war mein Fehler.', 'Das war mein Fehler es.', 'لا ضمير.', 'wortstellung', 'Fehler'],
      ['korrigieren', 'korrigiert · korrigierte · hat korrigiert', 'يصحّح', 'Ich korrigiere den Fehler.', 'Ich korrigiere dem Fehler.', 'المفعول: den.', 'kasus', 'korrigiere'],
      ['die Entschuldigung', 'die Entschuldigungen', 'الاعتذار', 'Ich schreibe eine Entschuldigung.', 'Ich schreibe ein Entschuldigung.', 'مؤنث: eine.', 'genus', 'Entschuldigung'],
      ['das Missverständnis', 'die Missverständnisse', 'سوء الفهم', 'Das war ein Missverständnis.', 'Das war eine Missverständnis.', 'محايد: ein.', 'genus', 'Missverständnis'],
      ['die Lösung', 'die Lösungen', 'الحل', 'Wir finden eine Lösung.', 'Wir finden ein Lösung.', 'مؤنث: eine.', 'genus', 'Lösung'],
      ['der Kundendienst', '—', 'خدمة العملاء', 'Der Kundendienst hilft weiter.', 'Der Kundendienst hilft weiter es.', 'لا ضمير.', 'wortstellung', 'Kundendienst'],
      ['die Beschwerde', 'die Beschwerden', 'الشكوى', 'Ich schreibe eine Beschwerde.', 'Ich schreibe ein Beschwerde.', 'مؤنث: eine.', 'genus', 'Beschwerde'],
      ['das Ding', 'die Dinge', 'الشيء', 'Das Ding ist schon wieder kaputt.', 'Die Ding ist schon wieder kaputt.', 'Ding محايد: das.', 'genus', 'Ding'],
      ['das Geschirr', '—', 'الأواني', 'Das Geschirr ist gespült.', 'Die Geschirr ist gespült.', 'Geschirr محايد: das.', 'genus', 'Geschirr'],
      ['austragen', 'trägt aus · trug aus · hat ausgetragen', 'يوزّع البريد', 'Der Bote trägt die Post aus.', 'Der Bote austrägt die Post.', 'الفصل: trägt … aus.', 'wortstellung', 'aus'],
      ['der Basketball', 'die Basketbälle', 'كرة السلة', 'Er spielt gern Basketball.', 'Er spielt gern den Basketball.', 'اللعبة بلا أداة: Basketball spielen.', 'lexik-kollokation', 'Basketball'],
      ['sogar', '—', 'حتى', 'Sogar der Chef war da.', 'Sogar war der Chef da.', 'بعد sogar يأتي الفاعل ثم الفعل.', 'wortstellung', 'sogar'],
    ],
    tricks: [
      { trick: 'verloren لا gegangen: الشيء يُفقد لا يذهب', wie: 'Ich habe den Schlüssel verloren. Meine Tasche ist verloren.', warum: 'العربية تقول «ضاع مني»، فيترجم المتعلم بـ gegangen ويجعل الجملة مضحكة.', anchor: 'verlieren' },
      { trick: 'melden وsuchen والاتصال بلا حرف جر زائد', wie: 'Ich melde den Verlust. Ich suche meine Brille. Ich rufe die Bank an.', warum: 'أفعال عربية تريد حرفًا («أبلّغ عن»، «أبحث عن») والألمانية تصلها بالمفعول مباشرة.', anchor: 'melden' },
      { trick: 'lassen + مصدر: ich lasse die Karte sperren', wie: 'Ich lasse die Karte sperren. Ich lasse das Auto reparieren.', warum: 'تركيب «يدع شيئًا يحدث» لا نظير له في العربية، وهو مطلوب في مواقف الضياع والتصليح.', anchor: 'sperren' }
    ]
  }

};

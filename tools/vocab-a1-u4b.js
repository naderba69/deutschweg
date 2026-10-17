/* Deutschweg — P3.2 lexical layer, A1 unit 4 (part b): a1-u4-l4 … a1-u4-l6.
   The last two rows carry fewer words because the map declares fewer: the
   review lesson re-uses patterns and the exam-format lesson re-uses everything. */

module.exports = {

  'a1-u4-l4': {
    items: [
      ['Liebe', '—', 'عزيزتي', 'Liebe Anna, ich komme später.', 'Lieber Anna, ich komme später.', 'مع اسم صديقة مثل Anna نقول Liebe، وبعد النداء فاصلة.', 'deklination', 'Liebe'],
      ['Lieber', '—', 'عزيزي', 'Lieber Tom, ich komme später.', 'Liebe Tom, ich komme später.', 'مع اسم صديق مثل Tom نقول Lieber، وبعد النداء فاصلة.', 'deklination', 'Lieber'],
      ['Hallo', '—', 'مرحبًا', 'Hallo Sara, ich komme später.', 'Hallo Sara ich komme später.', 'بعد النداء Hallo Sara نضع فاصلة قبل الجملة.', 'orthographie', 'Hallo'],
      ['die Anrede', 'die Anreden', 'صيغة النداء', 'Die Anrede steht am Anfang der Nachricht.', 'Der Anrede steht am Anfang der Nachricht.', 'Anrede مؤنث؛ لذلك نقول die Anrede.', 'genus', 'Anrede'],
      ['der Gruß', 'die Grüße', 'صيغة التحية / الختام', 'Der Gruß steht am Ende der Nachricht.', 'Das Gruß steht am Ende der Nachricht.', 'Gruß مذكر؛ لذلك نقول der Gruß.', 'genus', 'Gruß'],
      ['viele Grüße', '—', 'تحيات كثيرة', 'Viele Grüße\nSara', 'Viele Grüße, Sara.', 'بعد صيغة الختام Viele Grüße لا نضع فاصلة؛ يأتي الاسم في السطر التالي.', 'orthographie', 'Viele'],
      ['liebe Grüße', '—', 'تحيات ودّية', 'Liebe Grüße\nMila', 'Lieber Grüße\nMila', 'Grüße جمع؛ لذلك نقول Liebe Grüße، ثم يأتي الاسم في سطر مستقل.', 'deklination', 'Liebe'],
      ['bis bald', '—', 'إلى لقاء قريب', 'Bis bald\nSara', 'Bis bald, Sara.', 'عند استعمال Bis bald ختامًا يأتي الاسم في السطر التالي بلا فاصلة.', 'orthographie', 'bald'],
      ['alles Gute', '—', 'كل التوفيق', 'Alles Gute zum Geburtstag!', 'Alle Gute zum Geburtstag!', 'Alles Gute تعبير ثابت بهذه الصيغة.', 'deklination', 'Alles'],
      ['die E-Mail', 'die E-Mails', 'رسالة البريد الإلكتروني', 'Ich schreibe eine E-Mail.', 'Ich schreibe einen E-Mail.', 'في الاستعمال المعياري في ألمانيا E-Mail مؤنث؛ ويستعمل المحايد إقليميًا، لكن المذكر einen خطأ.', 'genus', 'E-Mail'],
      ['der Brief', 'die Briefe', 'الرسالة الورقية', 'Der Brief ist kurz.', 'Die Brief ist kurz.', 'Brief مذكر؛ لذلك نقول der Brief.', 'genus', 'Brief'],
      ['schicken', 'schickt · schickte', 'يرسل', 'Ich schicke dir ein Foto.', 'Ich schicke dir an ein Foto.', 'schicken يأخذ هنا الشخص في الداتيف والشيء في النصب بلا an.', 'präposition', 'schicke'],
      ['warten auf', 'wartet auf · wartete auf', 'ينتظر', 'Ich warte auf deine Antwort.', 'Ich warte für deine Antwort.', 'الفعل warten يأتي مع auf، لا für.', 'präposition', 'auf'],
      ['danke für', '—', 'شكرًا على', 'Danke für deine Nachricht.', 'Danke auf deine Nachricht.', 'بعد Danke نستعمل für: Danke für deine Nachricht.', 'präposition', 'für'],
      ['die Zeile', 'die Zeilen', 'السطر', 'Die Nachricht hat drei Zeilen.', 'Die Nachricht hat drei Zeile.', 'بعد drei نحتاج الجمع Zeilen.', 'plural', 'Zeilen'],
      ['der Stift', 'die Stifte', 'القلم', 'Ich schreibe mit einem Stift.', 'Ich schreibe mit einen Stift.', 'بعد mit يأتي الداتيف: mit einem Stift.', 'kasus', 'Stift'],
      ['der Umschlag', 'die Umschläge', 'المغلّف', 'Ich stecke den Brief in den Umschlag.', 'Ich stecke den Brief in dem Umschlag.', 'الحركة إلى داخل المغلف تأخذ النصب: in den Umschlag.', 'kasus', 'Umschlag'],
      ['die Briefmarke', 'die Briefmarken', 'الطابع البريدي', 'Die Briefmarke kostet einen Euro.', 'Die Briefmarke kostet ein Euro.', 'Euro مذكر، ومع السعر المحدد نقول einen Euro.', 'kasus', 'Briefmarke'],
      ['das Paket', 'die Pakete', 'الطرد', 'Das Paket ist schwer.', 'Der Paket ist schwer.', 'Paket محايد؛ لذلك نقول das Paket.', 'genus', 'Paket'],
      ['der Anfang', 'die Anfänge', 'البداية', 'Am Anfang steht die Anrede.', 'In Anfang steht die Anrede.', 'نقول am Anfang، لا in Anfang.', 'präposition', 'Anfang'],
      ['das Ende', 'die Enden', 'النهاية', 'Am Ende steht der Gruß.', 'In Ende steht der Gruß.', 'نقول am Ende، لا in Ende.', 'präposition', 'Ende'],
      ['die Unterschrift', 'die Unterschriften', 'التوقيع', 'Die Unterschrift steht unter dem Gruß.', 'Der Unterschrift steht unter dem Gruß.', 'Unterschrift مؤنث ومفرد هنا؛ لذلك نقول die Unterschrift.', 'genus', 'Unterschrift'],
      ['unterschreiben', 'unterschreibt · unterschrieb', 'يوقّع', 'Bitte unterschreiben Sie hier.', 'Bitte Sie unterschreiben hier.', 'في الطلب الرسمي يأتي الفعل أولًا: Unterschreiben Sie.', 'wortstellung', 'unterschreiben'],
      ['kurz', '—', 'قصير', 'Die Nachricht ist kurz.', 'Die Nachricht ist kurze.', 'بعد ist تأتي الصفة الخبرية kurz بلا نهاية.', 'deklination', 'kurz'],
      ['freundlich', '—', 'ودود', 'Der Gruß klingt freundlich.', 'Der Gruß klingt freundliche.', 'بعد klingt تأتي الصفة الخبرية freundlich بلا نهاية.', 'deklination', 'freundlich'],
      ['herzlich', '—', 'ودّي / حارّ', 'Herzliche Grüße\nSara', 'Herzlich Grüße\nSara', 'قبل Grüße الجمع تأخذ الصفة النهاية -e: Herzliche Grüße.', 'deklination', 'Herzliche'],
      ['grüßen', 'grüßt · grüßte', 'يبلّغ السلام إلى', 'Grüß deine Familie von mir.', 'Grüßen deine Familie von mir.', 'في أمر du نقول Grüß بلا ضمير ظاهر هنا، لا صيغة المصدر Grüßen.', 'wortstellung', 'Grüß'],
      ['die SMS', 'die SMS', 'الرسالة النصية', 'Die SMS ist kurz.', 'Der SMS ist kurz.', 'SMS مؤنث؛ لذلك نقول die SMS.', 'genus', 'SMS']
    ],
    strictClozeAnswers: true,
    wordClozeNearMisses: { 'viele Grüße': 'Viel', 'die Unterschrift': 'Unterschriften' },
    clozeItemIndex: 12,
    clozeNearMiss: 'für',
    extraCheck: {
      right: 'Ich komme später.',
      bad: 'Ich später komme.',
      why: 'في الجملة الرئيسية يأتي الفعل komme في الموقع الثاني.',
      family: 'wortstellung',
      prereq: 'cap.a1-u4-l4.s05',
      frage: 'أي جملة تنقل المعلومة بترتيب صحيح؟'
    },
    tricks: [
      { trick: 'نداء الصديقة يأخذ Liebe وفاصلة', wie: 'Liebe Anna, ich komme später. · Hallo Sara, ich komme später.', warum: 'تفصل الفاصلة النداء عن الجملة، وتأتي Liebe مع اسم الصديقة.', anchor: 'Liebe Anna, ich komme später.' },
      { trick: 'السؤال الودي يفتح بالفعل ويغلق بالمصدر', wie: 'Kannst du morgen kommen? · Kannst du heute schreiben?', warum: 'في سؤال نعم/لا يأتي Kannst أولًا، ويبقى المصدر في النهاية.', anchor: 'Kannst du morgen kommen?' },
      { trick: 'صيغة الختام بلا فاصلة والاسم تحتها', wie: 'Viele Grüße\nSara · Liebe Grüße\nMila', warum: 'في الرسالة الألمانية لا تأتي فاصلة بعد صيغة الختام، ويُكتب الاسم في السطر التالي.', anchor: 'Viele Grüße\nSara' }
    ]
  },

  'a1-u4-l5': {
    items: [
      ['der · den', '—', 'der مع Mann كفاعل · den معه كمفعول', 'Ich sehe den Mann.', 'Ich sehe der Mann.', 'Mann مفعول به مذكر هنا؛ لذلك نقول den Mann.', 'kasus', 'den'],
      ['ein · einen', '—', 'ein مع Termin كفاعل · einen معه كمفعول', 'Ich habe einen Termin.', 'Ich habe ein Termin.', 'Termin مفعول به مذكر؛ لذلك نقول einen Termin.', 'kasus', 'einen'],
      ['mein · meine', '—', 'أخي · أختي', 'Mein Bruder und meine Schwester kommen.', 'Mein Bruder und mein Schwester kommen.', 'Schwester اسم مؤنث؛ لذلك نقول meine Schwester.', 'deklination', 'meine'],
      ['ich wohne · du wohnst', '—', 'أنا أسكن · أنت تسكن', 'Ich wohne hier und du wohnst dort.', 'Ich wohne hier und du wohnen dort.', 'مع du ينتهي الفعل المنتظم هنا بـ-st: du wohnst.', 'konjugation', 'wohnst'],
      ['er arbeitet · wir arbeiten', '—', 'هو يعمل · نحن نعمل', 'Er arbeitet heute und wir arbeiten morgen.', 'Er arbeitet heute und wir arbeitet morgen.', 'مع wir نستعمل صيغة arbeiten المنتهية بـ-en.', 'konjugation', 'arbeiten'],
      ['mein · meinen', '—', 'أخي كفاعل · أخي كمفعول به', 'Ich sehe meinen Bruder.', 'Ich sehe mein Bruder.', 'Bruder مفعول به مذكر هنا؛ لذلك نقول meinen Bruder.', 'deklination', 'meinen'],
      ['ich bin · du bist', '—', 'أنا مع bin · أنت مع bist', 'Du bist hier und ich bin dort.', 'Du bist hier und ich bist dort.', 'مع ich نقول bin، لا bist.', 'konjugation', 'bin'],
      ['das Alter mit sein', '—', 'العمر مع sein', 'Ich bin zwanzig Jahre alt.', 'Ich habe zwanzig Jahre alt.', 'العمر في هذا التركيب يأتي مع bin وJahre alt.', 'lexik-kollokation', 'bin'],
      ['nicht teuer · kein Geld', '—', 'ليس غاليًا · لا أملك مالًا', 'Das ist nicht teuer, aber ich habe kein Geld.', 'Das ist kein teuer, aber ich habe nicht ein Geld.', 'في هذين المثالين ينفي nicht الصفة، وتأتي صيغة kein قبل الاسم.', 'lexik-kollokation', 'kein'],
      ['keinen Kaffee', '—', 'لا قهوة عندي (مفعول مذكر)', 'Ich trinke keinen Kaffee.', 'Ich trinke kein Kaffee.', 'Kaffee مفعول به مذكر؛ لذلك تأتي صيغة النفي keinen.', 'deklination', 'keinen'],
      ['gegangen mit sein', '—', 'gegangen مع sein', 'Ich bin nach Hause gegangen.', 'Ich habe nach Hause gegangen.', 'صيغة Perfekt من gehen تستعمل bin، لا habe.', 'konjugation', 'bin'],
      ['gemacht mit haben', '—', 'gemacht مع haben', 'Ich habe das gemacht.', 'Ich bin das gemacht.', 'صيغة Perfekt من machen تستعمل habe، لا bin.', 'konjugation', 'habe'],
      ['dann + Verb', '—', 'ثم يأتي الفعل المصرف', 'Dann lerne ich Deutsch.', 'Dann ich lerne Deutsch.', 'تشغل Dann الحقل الأول، ويأتي الفعل المصرف lerne بعدها.', 'wortstellung', 'lerne'],
      ['am Montag', '—', 'يوم الاثنين', 'Am Montag arbeite ich.', 'In Montag arbeite ich.', 'مع يوم الأسبوع نقول هنا am Montag.', 'präposition', 'Am'],
      ['im Mai', '—', 'في مايو', 'Im Mai ist es warm.', 'In Mai ist es warm.', 'مع الشهر نقول هنا im Mai.', 'präposition', 'Im'],
      ['um acht Uhr', '—', 'عند الساعة الثامنة', 'Der Kurs beginnt um acht Uhr.', 'Der Kurs beginnt am acht Uhr.', 'مع وقت الساعة المحدد نقول um acht Uhr.', 'präposition', 'um'],
      ['auf dem Tisch', '—', 'على الطاولة في موضع ثابت', 'Das Buch liegt auf dem Tisch.', 'Das Buch liegt auf den Tisch.', 'liegen يصف موقع الكتاب هنا؛ لذلك نقول auf dem Tisch.', 'kasus', 'dem'],
      ['mich · dich', '—', 'إيّاي · إيّاك في النصب', 'Siehst du mich? Ja, ich sehe dich.', 'Siehst du mir? Ja, ich sehe dir.', 'sehen يأخذ ضمير النصب هنا: mich وdich، لا mir وdir.', 'kasus', 'mich'],
      ['mir tut weh', '—', 'يؤلمني', 'Mir tut der Kopf weh.', 'Mich tut der Kopf weh.', 'الشخص المتألم يأتي في الداتيف هنا: Mir، لا Mich.', 'kasus', 'Mir'],
      ['geblieben mit sein', '—', 'geblieben مع sein', 'Ich bin zu Hause geblieben.', 'Ich habe zu Hause geblieben.', 'صيغة Perfekt من bleiben تستعمل bin، لا habe.', 'konjugation', 'bin']
    ],
    strictClozeAnswers: true,
    wordClozeNearMisses: { 'mein · meinen': 'mein' },
    clozeItemIndex: 10,
    clozeNearMiss: 'habe',
    extraCheck: {
      right: 'Ich bin zwanzig Jahre alt.',
      bad: 'Ich habe zwanzig Jahre alt.',
      why: 'العمر في هذا التركيب يأتي مع bin وJahre alt.',
      family: 'lexik-kollokation',
      prereq: 'cap.a1-u4-l5.s05',
      frage: 'أي جملة تعبّر عن العمر تعبيرًا صحيحًا؟'
    },
    tricks: [
      { trick: 'المفعول المذكر هنا: den وeinen', wie: 'der Mann → Ich sehe den Mann. · ein Termin → Ich habe einen Termin.', warum: 'احفظ den مع أداة التعريف وeinen مع أداة التنكير في هذين المثالين، من دون تعميمهما على المؤنث أو المحايد.', anchor: 'Ich sehe den Mann.' },
      { trick: 'احفظ المساعد مع صيغة Perfekt', wie: 'bin gegangen · bin geblieben · habe gemacht', warum: 'اختيار المساعد يُحفظ مع الفعل نفسه؛ ولا تكفي قاعدة عامة عن الحركة.', anchor: 'Ich bin nach Hause gegangen.' },
      { trick: 'بعد Dann يأتي الفعل المصرف', wie: 'Dann lerne ich Deutsch. · Am Montag arbeite ich.', warum: 'Dann أو عبارة الوقت تشغل الحقل الأول، لذلك يأتي الفعل المصرف في الموضع الثاني.', anchor: 'Dann lerne ich Deutsch.' }
    ]
  },

  'a1-u4-l6': {
    items: [
      ['der Teil', 'die Teile', 'القسم', 'Die Prüfung hat vier Teile.', 'Die Prüfung hat vier Teil.', 'بعد vier جمع: Teile.', 'plural', 'Teile'],
      ['das Hören', '—', 'الاستماع', 'Das Hören kommt zuerst.', 'Der Hören kommt zuerst.', 'المصدر اسمًا محايد: das.', 'genus'],
      ['das Lesen', '—', 'القراءة', 'Das Lesen ist nicht schwer.', 'Der Lesen ist nicht schwer.', 'das Lesen محايد.', 'genus'],
      ['das Schreiben', '—', 'الكتابة', 'Das Schreiben dauert zwanzig Minuten.', 'Der Schreiben dauert zwanzig Minuten.', 'das Schreiben محايد.', 'genus'],
      ['das Sprechen', '—', 'التحدّث', 'Das Sprechen ist mündlich.', 'Der Sprechen ist mündlich.', 'das Sprechen محايد.', 'genus'],
      ['der Punkt', 'die Punkte', 'النقطة', 'Sechzig Punkte sind genug.', 'Sechzig Punkt sind genug.', 'بعد العدد جمع: Punkte.', 'plural', 'Punkte'],
      ['bestehen', 'besteht · bestand', 'ينجح', 'Man muss die Prüfung bestehen.', 'Man muss die Prüfung besteht.', 'بعد muss مصدر: bestehen.', 'konjugation'],
      ['buchstabieren', 'buchstabiert · buchstabierte', 'يتهجّى', 'Im Sprechen müssen Sie buchstabieren.', 'Im Sprechen müssen Sie buchstabiert.', 'بعد müssen مصدر: buchstabieren.', 'konjugation'],
      ['die Aufgabe', 'die Aufgaben', 'المهمة', 'Die Aufgabe ist leicht.', 'Der Aufgabe ist leicht.', 'Aufgabe مؤنث: die.', 'genus'],
      ['das Ergebnis', 'die Ergebnisse', 'النتيجة', 'Das Ergebnis kommt per E-Mail.', 'Der Ergebnis kommt per E-Mail.', 'Ergebnis محايد: das.', 'genus'],
      ['mündlich', '—', 'شفوي', 'Der Teil ist mündlich.', 'Der Teil ist mündliche.', 'الصفة بعد sein بلا نهاية.', 'deklination'],
      ['schriftlich', '—', 'كتابي', 'Der schriftliche Teil ist lang.', 'Der schriftlich Teil ist lang.', 'الصفة قبل الاسم تأخذ -e.', 'deklination', 'schriftliche'],
      ['der Ausweis', 'die Ausweise', 'الهوية', 'Bringen Sie Ihren Ausweis mit.', 'Bringen Sie Ihre Ausweis mit.', 'المذكر في النصب: Ihren.', 'kasus'],
      ['die Note', 'die Noten', 'العلامة', 'Die Note ist gut.', 'Der Note ist gut.', 'Note مؤنث: die.', 'genus']
    ],
    tricks: [
      { trick: 'أربعة أقسام لا قسم واحد', wie: 'Hören · Lesen · Schreiben · Sprechen.', warum: 'الاستعداد لباب واحد لا يكفي، وهذه الخريطة أول ما يُحفظ.', anchor: 'Es gibt vier Teile.' },
      { trick: 'لا تعويض بين الأقسام', wie: 'قسم قوي لا يرفع قسمًا ضعيفًا.', warum: 'كل قسم له حدّه، والاعتقاد بالتعويض هو سبب الرسوب الأكثر شيوعًا.', anchor: 'Ein Teil rettet den anderen nicht.' },
      { trick: 'buchstabieren داخل Sprechen', wie: 'التهجئة تجيء في قسم التحدّث لا في قسم مستقل.', warum: 'معرفتها مقدّمًا توفّر دقائق التحضير، وهي دقائق تُحسب في الامتحان.', anchor: 'Buchstabieren gehört zum Sprechen.' }
    ]
  }

};

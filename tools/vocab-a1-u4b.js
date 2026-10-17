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
      ['ich wohne · du wohnst', '—', 'أنا أسكن · أنت تسكن', 'Ich wohne hier und du wohnst dort.', 'Ich wohne hier und du wohnen dort.', 'du يأخذ -st: du wohnst.', 'konjugation', 'wohnst'],
      ['er arbeitet · wir arbeiten', '—', 'هو يعمل · نحن نعمل', 'Er arbeitet heute, wir arbeiten morgen.', 'Er arbeitet heute, wir arbeitet morgen.', 'wir يأخذ صيغة المصدر: arbeiten.', 'konjugation', 'arbeiten'],
      ['der · den', '—', 'الرفع · النصب', 'Ich sehe den Mann.', 'Ich sehe der Mann.', 'المفعول المذكر den.', 'kasus', 'den'],
      ['ein · einen', '—', 'نكرة رفع · نكرة نصب', 'Ich habe einen Termin.', 'Ich habe ein Termin.', 'المذكر في النصب einen.', 'kasus', 'einen'],
      ['mein · meine', '—', 'مذكّر · مؤنث', 'Mein Bruder und meine Schwester kommen.', 'Mein Bruder und mein Schwester kommen.', 'Schwester مؤنث: meine.', 'deklination', 'meine'],
      ['mein · meinen', '—', 'ملكية رفع · نصب', 'Ich sehe meinen Bruder.', 'Ich sehe mein Bruder.', 'المذكر في النصب meinen.', 'deklination', 'meinen'],
      ['ich bin · du bist', '—', 'أنا · أنت مع sein', 'Du bist hier und ich bin dort.', 'Du bist hier und ich bist dort.', 'مع ich نقول bin.', 'konjugation', 'bin'],
      ['das Alter mit sein', '—', 'العمر بـ sein', 'Ich bin zwanzig.', 'Ich habe zwanzig.', 'العمر بـ sein لا بـ haben.', 'lexik-kollokation', 'bin'],
      ['nicht · kein', '—', 'نفي الفعل · نفي الاسم', 'Ich habe kein Geld und ich trinke nicht.', 'Ich habe nicht Geld und ich trinke kein.', 'kein للاسم وnicht للفعل.', 'lexik-kollokation', 'kein'],
      ['keinen Kaffee', '—', 'لا قهوة (نصب)', 'Ich trinke keinen Kaffee.', 'Ich trinke nicht Kaffee.', 'نفي الاسم المذكر في النصب keinen.', 'lexik-kollokation', 'keinen'],
      ['gegangen mit sein', '—', 'الذهاب بـ sein', 'Ich bin nach Hause gegangen.', 'Ich habe nach Hause gegangen.', 'gehen حركة: bin.', 'konjugation', 'bin'],
      ['gemacht mit haben', '—', 'الفعل العادي بـ haben', 'Ich habe das gemacht.', 'Ich bin das gemacht.', 'machen تأخذ haben.', 'konjugation', 'habe'],
      ['dann + Verb', '—', 'ثم + الفعل', 'Dann lerne ich.', 'Dann ich lerne.', 'دann تزيح الفاعل بعد الفعل.', 'wortstellung', 'lerne'],
      ['am Montag', '—', 'يوم الاثنين', 'Am Montag arbeite ich.', 'In Montag arbeite ich.', 'اليوم يأخذ am.', 'präposition', 'Am'],
      ['im Mai', '—', 'في مايو', 'Im Mai ist es warm.', 'In Mai ist es warm.', 'الشهر يأخذ im.', 'präposition', 'Im'],
      ['um acht', '—', 'عند الثامنة', 'Der Kurs beginnt um acht.', 'Der Kurs beginnt in acht.', 'الساعة تأخذ um.', 'präposition', 'um'],
      ['auf dem Tisch', '—', 'على الطاولة', 'Das Buch liegt auf dem Tisch.', 'Das Buch liegt auf den Tisch.', 'السكون يأخذ الداتيف.', 'kasus', 'dem'],
      ['mich · dich', '—', 'إيّاي · إيّاك', 'Siehst du mich? Ich sehe dich.', 'Siehst du ich? Ich sehe du.', 'ضمير النصب mich، ثم dich.', 'kasus', 'mich'],
      ['mir tut weh', '—', 'يؤلمني', 'Mir tut der Kopf weh.', 'Ich tut der Kopf weh.', 'المتألم في الداتيف: Mir.', 'kasus', 'Mir'],
      ['geblieben mit sein', '—', 'البقاء بـ sein', 'Ich bin zu Hause geblieben.', 'Ich habe zu Hause geblieben.', 'bleiben تأخذ sein.', 'konjugation', 'bin']
    ],
    tricks: [
      { trick: 'أربعة أخطاء تتكرر في A1', wie: 'den لا der · bin لا habe · gegangen مع sein · الفعل بعد dann.', warum: 'هذه الأربعة تظهر في كل تصحيح، وجمعها يجعل المراجعة أسرع.', anchor: 'Ich sehe den Mann.' },
      { trick: 'هل الجملة مكان أم حركة؟', wie: 'Ich bin gegangen · ich habe gelernt.', warum: 'سؤال واحد يحل اختيار المساعد، وهو أغلى خطأ في A1.', anchor: 'Ich bin nach Hause gegangen.' },
      { trick: 'فعل مصرّف واحد في الموضع الثاني', wie: 'Dann lerne ich. · Am Montag arbeite ich.', warum: 'قاعدة واحدة تكشف نصف أخطاء الترتيب في المراجعة.', anchor: 'Dann lerne ich.' }
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

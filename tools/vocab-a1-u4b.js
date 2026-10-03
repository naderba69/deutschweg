/* Deutschweg — P3.2 lexical layer, A1 unit 4 (part b): a1-u4-l4 … a1-u4-l6.
   The last two rows carry fewer words because the map declares fewer: the
   review lesson re-uses patterns and the exam-format lesson re-uses everything. */

module.exports = {

  'a1-u4-l4': {
    items: [
      ['Liebe', '—', 'عزيزتي', 'Liebe Anna, ich komme später.', 'Liebe Anna. Ich komme später.', 'بعد النداء فاصلة لا نقطة.', 'orthographie'],
      ['Lieber', '—', 'عزيزي', 'Lieber Tom, wie geht es dir?', 'Lieber Tom. wie geht es dir?', 'النداء يُغلق بفاصلة صغيرة.', 'orthographie'],
      ['Hallo', '—', 'أهلًا', 'Hallo Sara, ich komme später.', 'Hallo Sara ich komme später.', 'بعد النداء فاصلة تفصل الجملة.', 'orthographie'],
      ['die Anrede', 'die Anreden', 'النداء', 'Die Anrede steht am Anfang.', 'Der Anrede steht am Anfang.', 'Anrede مؤنث: die.', 'genus'],
      ['der Gruß', 'die Grüße', 'التحية', 'Viele Grüße am Ende.', 'Viele Grüße in Ende.', 'الختام يأخذ am: am Ende.', 'präposition', 'Grüße'],
      ['viele Grüße', '—', 'تحيات كثيرة', 'Viele Grüße, Sara.', 'Viel Grüße, Sara.', 'viele مع الجمع: viele Grüße.', 'deklination', 'viele'],
      ['liebe Grüße', '—', 'تحيات ودّية', 'Liebe Grüße an deine Familie.', 'Lieber Grüße an deine Familie.', 'Grüße جمع، فالصفة liebe.', 'deklination', 'Liebe'],
      ['bis bald', '—', 'إلى قريب', 'Bis bald, Sara.', 'Bis bald Sara,', 'الفاصلة تسبق الاسم في الختام.', 'orthographie', 'bald'],
      ['alles Gute', '—', 'كل التوفيق', 'Alles Gute zum Geburtstag!', 'Alle Gute zum Geburtstag!', 'alles Gute صيغة ثابتة.', 'deklination', 'Alles'],
      ['die E-Mail', 'die E-Mails', 'البريد الإلكتروني', 'Ich schreibe eine E-Mail.', 'Ich schreibe ein E-Mail.', 'E-Mail مؤنث: eine.', 'genus'],
      ['der Brief', 'die Briefe', 'الرسالة الورقية', 'Der Brief ist kurz.', 'Die Brief ist kurz.', 'Brief مذكر: der.', 'genus'],
      ['schicken', 'schickt · schickte', 'يُرسل', 'Ich schicke dir ein Foto.', 'Ich schicke dir an ein Foto.', 'schicken تأخذ مفعولين بلا حرف جر.', 'präposition', 'schicke'],
      ['warten auf', 'wartet auf · wartete auf', 'ينتظر', 'Ich warte auf deine Antwort.', 'Ich warte für deine Antwort.', 'warten auf لا warten für.', 'präposition', 'warte'],
      ['danke für', '—', 'شكرًا على', 'Danke für alles.', 'Danke für alle.', 'für تأخذ النصب: alles.', 'deklination', 'Danke'],
      ['die Zeile', 'die Zeilen', 'السطر', 'Drei Zeilen, bitte.', 'Drei Zeile, bitte.', 'بعد drei جمع: Zeilen.', 'plural', 'Zeilen'],
      ['der Stift', 'die Stifte', 'القلم', 'Der Stift ist leer.', 'Die Stift ist leer.', 'Stift مذكر: der.', 'genus'],
      ['der Umschlag', 'die Umschläge', 'المغلّف', 'Der Umschlag ist weiß.', 'Die Umschlag ist weiß.', 'Umschlag مذكر: der.', 'genus'],
      ['die Briefmarke', 'die Briefmarken', 'الطابع', 'Die Briefmarke kostet einen Euro.', 'Die Briefmarke kostet ein Euro.', 'المذكر المنصوب einen.', 'kasus'],
      ['das Paket', 'die Pakete', 'الطرد', 'Das Paket ist schwer.', 'Der Paket ist schwer.', 'Paket محايد: das.', 'genus'],
      ['der Anfang', 'die Anfänge', 'البداية', 'Am Anfang schreibe ich die Anrede.', 'In Anfang schreibe ich die Anrede.', 'am Anfang لا in Anfang.', 'präposition'],
      ['das Ende', 'die Enden', 'النهاية', 'Am Ende kommt der Gruß.', 'In Ende kommt der Gruß.', 'am Ende تعبير ثابت.', 'präposition'],
      ['die Unterschrift', 'die Unterschriften', 'التوقيع', 'Die Unterschrift fehlt.', 'Der Unterschrift fehlt.', 'Schrift مؤنث، فالمركّب مؤنث.', 'genus'],
      ['unterschreiben', 'unterschreibt · unterschrieb', 'يوقّع', 'Bitte unterschreiben Sie hier.', 'Bitte Sie unterschreiben hier.', 'في الطلب يتقدّم الفعل.', 'wortstellung'],
      ['kurz', '—', 'قصير', 'Die Nachricht ist kurz.', 'Die Nachricht ist kurze.', 'الصفة بعد sein بلا نهاية.', 'deklination'],
      ['freundlich', '—', 'ودود', 'Der Gruß ist freundlich.', 'Der Gruß ist freundliche.', 'freundlich بلا -e.', 'deklination'],
      ['herzlich', '—', 'قلبي · حارّ', 'Herzliche Grüße, Sara.', 'Herzlich Grüße, Sara.', 'الصفة قبل الجمع تأخذ -e.', 'deklination', 'Herzliche'],
      ['grüßen', 'grüßt · grüßte', 'يُسلّم على', 'Grüß deine Familie von mir.', 'Grüß du deine Familie von mir.', 'في الأمر بلا ضمير ظاهر.', 'wortstellung', 'Grüß'],
      ['die SMS', 'die SMS', 'الرسالة النصية', 'Die SMS ist kurz.', 'Der SMS ist kurz.', 'SMS مؤنث: die.', 'genus']
    ],
    tricks: [
      { trick: 'الرسالة الألمانية تعيش على الفاصلة', wie: 'Liebe Anna, … Viele Grüße, Sara.', warum: 'الفاصلة بعد النداء وقبل الختام، ونقل عادة النقطة العربية يُخرج الرسالة من شكلها.', anchor: 'Liebe Anna,' },
      { trick: 'Liebe للمرأة وLieber للرجل', wie: 'Liebe Anna, · Lieber Tom,', warum: 'الصفة تتبع المرسل إليه، وهو أول ما يراه القارئ في الرسالة.', anchor: 'Lieber Tom,' },
      { trick: 'ختام واحد لا ختامان', wie: 'Viele Grüße · Liebe Grüße · Bis bald.', warum: 'جمع تحيتين في ختام واحد يبدو غير ألماني، والعربية تجمعهما عادةً.', anchor: 'Viele Grüße,' }
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

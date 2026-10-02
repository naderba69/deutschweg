/* Original listening ladder. Device speech is not a human recording and not DW Langsam.
   Dialect items are print-only: no fake accent audio, and they do not enter R5. */
(function (root) {
  function item(id, level, kind, title, script, questions, target) {
    return { id: id, level: level, kind: kind, title: title, script: script, questions: questions, target: target, audio: true, r5: true };
  }
  function ask(prompt, options, key) {
    return { prompt: prompt, options: options, key: key };
  }
  const items = [
    item('l-a1-1', 'A1', 'أرقام', 'أرقام اليوم',
      'Der Bus kommt um neun. Der Zug kommt um acht. Der Termin ist um zehn.',
      [ask('متى يأتي القطار؟', ['acht', 'neun', 'zehn'], 'acht'), ask('متى الموعد؟', ['acht', 'neun', 'zehn'], 'zehn')], 0.8),
    item('l-a1-2', 'A1', 'طلبات', 'طلب قصير',
      'Einen Kaffee, bitte. Und ein Wasser. Die Rechnung, bitte.',
      [ask('ماذا يُطلب أولًا؟', ['Kaffee', 'Wasser', 'Rechnung'], 'Kaffee'), ask('ماذا في النهاية؟', ['Kaffee', 'Wasser', 'die Rechnung'], 'die Rechnung')], 0.8),
    item('l-a1-3', 'A1', 'حوار بطيء', 'في الفندق',
      'Guten Tag. Ich heiße Sara. Ich habe ein Zimmer für zwei Nächte.',
      [ask('ما اسمها؟', ['Sara', 'Anna', 'Leila'], 'Sara'), ask('كم ليلة؟', ['eine', 'zwei', 'drei'], 'zwei')], 0.8),
    item('l-a1-4', 'A1', 'أرقام', 'الحساب',
      'Das macht acht Euro. Ich habe zehn Euro. Das Wechselgeld ist zwei Euro.',
      [ask('كم الحساب؟', ['acht', 'zehn', 'zwei'], 'acht'), ask('كم الباقي؟', ['acht', 'zehn', 'zwei'], 'zwei')], 0.8),
    item('l-a2-1', 'A2', 'خبر بطيء', 'تأخير أصيل لا نشرة دويتشه فيله',
      'Der Zug nach Berlin hat zwanzig Minuten Verspätung. Gleis drei ist geschlossen. Der nächste Zug kommt um elf.',
      [ask('كم التأخير؟', ['عشر دقائق', 'عشرون دقيقة', 'ساعة'], 'عشرون دقيقة'), ask('أي رصيف مغلق؟', ['zwei', 'drei', 'elf'], 'drei')], 0.75),
    item('l-a2-2', 'A2', 'موعد', 'عند العيادة',
      'Ihr Termin ist am Montag um neun. Bitte bringen Sie die Karte mit. Die Praxis ist im Erdgeschoss.',
      [ask('أي يوم الموعد؟', ['Montag', 'Freitag', 'Samstag'], 'Montag'), ask('ماذا تُحضر؟', ['die Karte', 'das Geld', 'den Schlüssel'], 'die Karte')], 0.75),
    item('l-a2-3', 'A2', 'إعلان محطة', 'الحافلة',
      'Achtung. Der Bus nach Sousse fährt in fünf Minuten. Einsteigen an Haltestelle zwei.',
      [ask('كم دقيقة؟', ['fünf', 'zwei', 'zehn'], 'fünf'), ask('أي موقف؟', ['eins', 'zwei', 'drei'], 'zwei')], 0.75),
    item('l-a2-4', 'A2', 'حوار', 'وعكة',
      'Mir ist schlecht. Ich habe Fieber. Ich brauche einen Termin heute.',
      [ask('ماذا لديه؟', ['Fieber', 'einen Zug', 'keine Zeit'], 'Fieber'), ask('متى يريد الموعد؟', ['heute', 'morgen', 'Montag'], 'heute')], 0.75),
    item('l-b1-1', 'B1', 'حديث بطيء', 'العمل من البيت',
      'Einerseits spare ich den Weg. Andererseits fehlt die Grenze zwischen Arbeit und Abend. Ich arbeite vier Tage, nicht sieben.',
      [ask('ما العيب؟', ['لا حد بين العمل والمساء', 'الطريق طويل', 'لا عمل'], 'لا حد بين العمل والمساء'), ask('كم يومًا يعمل؟', ['أربعة', 'سبعة', 'خمسة'], 'أربعة')], 0.7),
    item('l-b1-2', 'B1', 'مقابلة قصيرة', 'لماذا تبقى',
      'Frage: Warum bleiben Sie? Antwort: Nicht weil alles gut ist, sondern weil ich den Ablauf kenne.',
      [ask('لماذا تبقى؟', ['لأنها تعرف مجرى اليوم', 'لأن كل شيء جيد', 'لأن القطار تأخر'], 'لأنها تعرف مجرى اليوم'), ask('هل تقول إن كل شيء جيد؟', ['نعم', 'لا', 'النص لا يُسمَع'], 'لا')], 0.7),
    item('l-b1-3', 'B1', 'شكوى مسموعة', 'التسليم',
      'Die Lieferung kam zu spät. Die Folge war ein verpasster Termin. Ich bitte um eine neue Uhrzeit, nicht nur um eine Entschuldigung.',
      [ask('ما النتيجة؟', ['موعد فائت', 'خصم', 'لا نتيجة'], 'موعد فائت'), ask('ماذا تطلب؟', ['موعدًا جديدًا', 'اعتذارًا فقط', 'إلغاء العقد'], 'موعدًا جديدًا')], 0.7),
    item('l-b1-4', 'B1', 'خطة', 'قطار وحافلة',
      'Falls der frühe Zug ausfällt, nehmen wir den Bus. Die Alternative steht im Plan, bevor wir am Bahnhof stehen.',
      [ask('ما البديل؟', ['الحافلة', 'البقاء', 'سيارة'], 'الحافلة'), ask('متى يُقرَّر البديل؟', ['قبل المحطة', 'بعد فوات القطار', 'لا يُقرَّر'], 'قبل المحطة')], 0.7),
    item('l-b2-1', 'B2', 'مقابلة', 'رقم لا سبب',
      'Die Zahl ist gestiegen. Das ist eine Tatsache. Dass das schlecht ist, sagt der Text nicht. Die Quelle nennt keine Ursache.',
      [ask('ما الحقيقة؟', ['الرقم ارتفع', 'الرقم سيئ', 'السبب معروف'], 'الرقم ارتفع'), ask('هل يُسمّى السبب؟', ['نعم', 'لا', 'يُسمّى شخص'], 'لا')], 0.65),
    item('l-b2-2', 'B2', 'محاضرة', 'إجراء بلا بديل',
      'Eine Maßnahme ohne Alternative scheitert am ersten Ausfall. Der Plan braucht einen zweiten Weg. Die Absicht allein ist kein Plan.',
      [ask('متى يفشل الإجراء؟', ['عند أول تعطّل بلا بديل', 'إن وُجد طريق ثان', 'لا يفشل'], 'عند أول تعطّل بلا بديل'), ask('هل النية خطة؟', ['نعم', 'لا', 'أحيانًا'], 'لا')], 0.65),
    item('l-b2-3', 'B2', 'نقاش', 'جانبان',
      'Die Stadt lebt vom Besuch. Und sie leidet unter ihm. Beide Seiten gehören in den Satz. Das Urteil kommt danach.',
      [ask('ماذا يحدث للمدينة أيضًا؟', ['تتضرر من الزيارة', 'لا تزورها أحد', 'تربح فقط'], 'تتضرر من الزيارة'), ask('متى الحكم؟', ['بعد الجانبين', 'قبلهما', 'بدلًا منهما'], 'بعد الجانبين')], 0.65)
  ];
  items.push({
    id: 'l-b2-dialect',
    level: 'B2',
    kind: 'تمييز لهجة',
    title: 'تمييز مكتوب لا تسجيل',
    audio: false,
    r5: false,
    note: 'لا تسجيل نمساوي أو سويسري أو بافاري. صوت الجهاز لا يُقدَّم كلكنة. هذا البند لا يدخل R5.',
    script: 'Grüezi ist eine schweizerische Begrüßung. Servus hört man im Süden. Das ist Schrift, kein Hörbeleg.',
    questions: [ask('لماذا لا يُحتسب هذا البند؟', ['لأنه ليس سماعًا', 'لأنه سهل', 'لأنه طويل'], 'لأنه ليس سماعًا')]
  });
  root.DW_LADDER = { items: items, voice: 'device', not: 'ليس تسجيلًا بشريًا، وليس نشرة DW Langsam، وليس Slow German.' };
})(typeof window !== 'undefined' ? window : global);

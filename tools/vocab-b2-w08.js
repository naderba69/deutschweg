/* Deutschweg — B2 lexical layer, workshop 8: b2-w08 Dialekt (سماع لهجة).
   Route C: 40 authored items + 50 material words = the 90 the row declares.
   Goal of the workshop: tell dialect from error, understand without imitating.
   The examples therefore never mock a variety — they name it. */

module.exports = {

  'b2-w08': {
    items: [
      ['der Dialekt', 'die Dialekte', 'اللهجة', 'Der Dialekt klingt in Österreich anders, ist aber Deutsch.', 'Der Dialekt klingen anders, ist aber Deutsch.', 'المفرد: klingt.', 'konjugation', 'Dialekt'],
      ['die Mundart', 'die Mundarten', 'اللهجة المحلية', 'Die Mundart pflegt man im Dorf.', 'Die Mundart pflegen man im Dorf.', '«gell» عامية.', 'register', 'Mundart'],
      ['der Akzent', 'die Akzente', 'اللكنة', 'Der Akzent verrät den Österreicher sofort.', 'Der Akzent verraten die Herkunft.', 'المفرد: verrät.', 'konjugation', 'Akzent'],
      ['die Aussprache', '—', 'النطق', 'Die Aussprache ändert sich von Region zu Region.', 'Die Aussprache ändern sich von Region zu Region.', 'المفرد: ändert.', 'konjugation', 'Aussprache'],
      ['die Herkunft', '—', 'الأصل', 'Die Herkunft hört man, nicht die Note.', 'Die Herkunft hören man, nicht die Schuld.', 'المفرد: hört.', 'konjugation', 'Herkunft'],
      ['die Region', 'die Regionen', 'المنطقة', 'In jeder Region klingt der Gruß anders, mit eigenem Stolz.', 'In jeder Region klingen der Gruß anders.', 'المفرد: klingt.', 'konjugation', 'Region'],
      ['der Gruß', 'die Grüße', 'التحية', 'Der Gruß verrät die Region.', 'Der Gruß verraten die Region.', 'المفرد: verrät.', 'konjugation', 'Gruß'],
      ['die Begrüßung', 'die Begrüßungen', 'التحية (فعل)', 'Die Begrüßung fällt in Wien herzlicher aus.', 'Die Begrüßung fallen in Wien herzlicher aus.', 'المفرد: fällt.', 'konjugation', 'Begrüßung'],
      ['der Abschied', 'die Abschiede', 'الوداع', 'Der Abschied klingt im Süden weicher.', 'Der Abschied klingen im Süden weicher.', 'المفرد: klingt.', 'konjugation', 'Abschied'],
      ['das Wort', 'die Wörter', 'الكلمة', 'Das Wort kennt man nur dort; ein Lehnwort kennt jeder.', 'Das Wort kennen man nur in der Region.', 'المفرد: kennt.', 'konjugation', 'Wort'],
      ['die Wendung', 'die Wendungen', 'التعبير', 'Diese Wendung verstehen der Zugezogene und die Einheimische sofort.', 'Diese Wendung verstehen man in Wien sofort.', 'المفرد: versteht.', 'konjugation', 'Wendung'],
      ['der Ausdruck', 'die Ausdrücke', 'الصيغة', 'Der Ausdruck klingt freundlich; den lernt man im Sprachkurs.', 'Der Ausdruck klingen freundlich, nicht grob.', 'المفرد: klingt.', 'konjugation', 'Ausdruck'],
      ['die Bedeutung', 'die Bedeutungen', 'المعنى', 'Die Bedeutung der Redewendung ändert sich mit dem Ort, nicht mit der Heimat.', 'Die Bedeutung ändern sich mit dem Ort.', 'المفرد: ändert.', 'konjugation', 'Bedeutung'],
      ['das Hochdeutsch', '—', 'الألمانية الفصحى', 'Hochdeutsch versteht jeder im Land, auch ohne Sprachschule.', 'Hochdeutsch verstehen jeder im Land.', 'المفرد: versteht.', 'konjugation', 'Hochdeutsch'],
      ['die Standardsprache', '—', 'اللغة المعيارية', 'Die Standardsprache gilt in der Prüfung.', 'Die Standardsprache gelten in der Prüfung.', 'المفرد: gilt.', 'konjugation', 'Standardsprache'],
      ['die Umgangssprache', '—', 'لغة الحديث اليومي', 'Die Umgangssprache des Österreichers erlaubt mehr als der Prüfer.', 'Die Umgangssprache erlauben mehr als der Prüfer.', 'المفرد: erlaubt.', 'konjugation', 'Umgangssprache'],
      ['die Schriftsprache', '—', 'اللغة الكتابية', 'Die Schriftsprache kennt keinen Regiolekt.', 'Die Schriftsprache kennen keine Dialektfärbung.', 'المفرد: kennt.', 'konjugation', 'Schriftsprache'],
      ['verstehen', 'versteht · verstand · hat verstanden', 'يفهم', 'Ich verstehe den Dialekt, ohne ihn zu sprechen.', 'Ich verstehe den Dialekt, ohne ihn sprechen.', 'ohne + zu.', 'wortstellung', 'verstehe'],
      ['nachahmen', 'ahmt nach · ahmte nach · hat nachgeahmt', 'يقلّد', 'Ich ahme den Dialekt nicht nach.', 'Ich nachahme den Dialekt nicht.', 'الفعل مع nach منفصل.', 'wortstellung', 'ahme'],
      ['nachsprechen', 'spricht nach · sprach nach · hat nachgesprochen', 'يردّد', 'Ich spreche die Wendung nach, aber ohne Färbung.', 'Ich nachspreche die Wendung, aber ohne Färbung.', 'الفعل مع nach منفصل.', 'wortstellung', 'spreche'],
      ['übertreiben', 'übertreibt · übertrieb · hat übertrieben', 'يبالغ', 'Wer den Dialekt übertreibt, wird unglaubwürdig.', 'Wer den Dialekt übertreiben, wird unglaubwürdig.', 'المفرد: übertreibt.', 'konjugation', 'übertreibt'],
      ['verfälschen', 'verfälscht · verfälschte · hat verfälscht', 'يشوّه', 'Ein falscher Vokal verfälscht das Wort; die Umschreibung hilft beim Verstehen.', 'Ein falscher Vokal verfälschen das Wort.', 'المفرد: verfälscht.', 'konjugation', 'verfälscht'],
      ['verwechseln', 'verwechselt · verwechselte · hat verwechselt', 'يخلط', 'Ich verwechsle den Dialekt nicht mit Fehlern; er ist Heimat.', 'Ich verwechsel den Dialekt nicht mit Fehlern.', 'المتكلّم: verwechsle.', 'konjugation', 'verwechsle'],
      ['der Fehler', 'die Fehler', 'الخطأ', 'Ein Dialekt ist kein Fehler, nur eine andere Verständigung.', 'Ein Dialekt sind kein Fehler.', 'المفرد: ist.', 'konjugation', 'Fehler'],
      ['die Abweichung', 'die Abweichungen', 'الانحراف عن القاعدة', 'Die Abweichung von der Norm ist erlaubt; eine Erklärung liefert die Lautverschiebung.', 'Die Abweichung von der Norm sind erlaubt.', 'المفرد: ist.', 'konjugation', 'Abweichung'],
      ['die Norm', 'die Normen', 'القاعدة', 'Die Norm steht im Wörterbuch; die Anpassung ist freiwillig.', 'Die Norm stehen im Wörterbuch.', 'المفرد: steht.', 'konjugation', 'Norm'],
      ['das Wörterbuch', 'die Wörterbücher', 'القاموس', 'Das Wörterbuch hilft bei der Übersetzung.', 'Das Wörterbuch helfen bei der Übersetzung.', 'المفرد: hilft.', 'konjugation', 'Wörterbuch'],
      ['die Grammatik', '—', 'القواعد', 'Die Grammatik bleibt gleich, die Vielfalt nicht.', 'Die Grammatik bleiben gleich.', 'المفرد: bleibt.', 'konjugation', 'Grammatik'],
      ['der Klang', 'die Klänge', 'الرنين', 'Der Klang ändert sich, die Identität nicht.', 'Der Klang ändern sich, die Regel nicht.', 'المفرد: ändert.', 'konjugation', 'Klang'],
      ['die Betonung', 'die Betonungen', 'النبر', 'Die Betonung sitzt im Schwäbischen anders; Sprachvielfalt ist kein Mangel.', 'Die Betonung sitzen im Schwäbischen anders.', 'المفرد: sitzt.', 'konjugation', 'Betonung'],
      ['der Vokal', 'die Vokale', 'الحرف الصوتي', 'Der Vokal wird im Alemannischen lang gesprochen.', 'Der Vokal werden lang gesprochen.', 'المفرد: wird.', 'konjugation', 'Vokal'],
      ['der Konsonant', 'die Konsonanten', 'الحرف الساكن', 'Der Konsonant verschwindet im Sächsischen am Wortende; das Bewertungskriterium bleibt der Inhalt.', 'Der Konsonant verschwinden am Wortende.', 'المفرد: verschwindet.', 'konjugation', 'Konsonant'],
      ['der Rhythmus', 'die Rhythmen', 'الإيقاع', 'Der Rhythmus verrät mehr als der Wortschatz.', 'Der Rhythmus verraten mehr als der Wortschatz.', 'المفرد: verrät.', 'konjugation', 'Rhythmus'],
      ['die Melodie', 'die Melodien', 'النغمة', 'Die Melodie des Satzes bleibt fremd; die Prüferin fragt nach dem Inhalt.', 'Die Melodie des Satzes bleiben fremd.', 'المفرد: bleibt.', 'konjugation', 'Melodie'],
      ['die Freundlichkeit', '—', 'الودّ', 'Die Freundlichkeit klingt im Dialekt größer.', 'Die Freundlichkeit klingen im Dialekt größer.', 'المفرد: klingt.', 'konjugation', 'Freundlichkeit'],
      ['die Verwirrung', 'die Verwirrungen', 'الالتباس', 'Die Verwirrung entsteht beim Sprechtempo, nicht beim Wort; in der Prüfungssituation zählt der Inhalt.', 'Die Verwirrung entstehen beim Tempo.', 'المفرد: entsteht.', 'konjugation', 'Verwirrung'],
      ['die Geschwindigkeit', 'die Geschwindigkeiten', 'السرعة', 'Die Geschwindigkeit macht das Verstehen schwer; die Punktzahl hängt trotzdem vom Inhalt ab.', 'Die Geschwindigkeit machen das Verstehen schwer.', 'المفرد: macht.', 'konjugation', 'Geschwindigkeit'],
      ['das Tempo', '—', 'الوتيرة', 'Das Tempo ist im Süden ruhiger.', 'Das Tempo sind im Süden ruhiger.', 'محايد ومفرد: ist.', 'konjugation', 'Tempo'],
      ['der Untertitel', 'die Untertitel', 'الترجمة المرئية', 'Der Untertitel hilft mehr als jede Vermutung.', 'Der Untertitel helfen mehr als jede Vermutung.', 'المفرد: hilft.', 'konjugation', 'Untertitel'],
      ['der Muttersprachler', 'die Muttersprachler', 'الناطق الأصلي', 'Ein Muttersprachler hört die Herkunft sofort; eine Sprachprobe genügt.', 'Ein Muttersprachler hören die Herkunft sofort.', 'المفرد: hört.', 'konjugation', 'Muttersprachler']
    ],
    material: [
      'die Schweiz', 'Österreich', 'Bayern', 'Wien',
      'Zürich', 'der Österreicher', 'der Schweizer', 'der Bayer',
      'das Grüezi', 'das Servus', 'das Moin', 'die Dialektfärbung',
      'die Sprachmelodie', 'das Sprechtempo', 'der Sprachraum', 'die Sprachgrenze',
      'der Regiolekt', 'das Plattdeutsch', 'das Bairische', 'das Schwäbische',
      'das Sächsische', 'das Alemannische', 'der Wortschatz', 'die Redewendung',
      'das Lehnwort', 'die Lautverschiebung', 'die Sprachprobe', 'das Hörbeispiel',
      'die Untertitelung', 'die Übersetzung', 'die Verständigung', 'die Anpassung',
      'die Identität', 'die Heimat', 'der Stolz', 'die Vielfalt',
      'die Sprachvielfalt', 'die Prüfungssituation', 'die Note', 'die Punktzahl',
      'der Prüfer', 'die Prüferin', 'das Bewertungskriterium', 'der Sprachkurs',
      'die Sprachschule', 'die Einheimische', 'der Zugezogene', 'das Hörverstehen',
      'die Umschreibung', 'die Erklärung'
    ],
    tricks: [
      { trick: 'افهم ولا تقلّد: verstehen, nicht nachahmen', wie: 'Ich verstehe den Inhalt, aber ich ahme den Klang nicht nach.', warum: 'التقليد في الامتحان يبدو سخرية أو خطأ؛ الفهم هو المقصود.', anchor: 'ahme den Klang nicht nach' },
      { trick: 'افصل اللهجة عن الخطأ: Dialekt ist kein Fehler', wie: 'Ein Dialekt ist kein Fehler; die Grammatik bleibt gleich.', warum: 'من يظن اللهجة خطأً يصحّح ما ليس خطأً فيخسر الوقت.', anchor: 'kein Fehler' },
      { trick: 'في الامتحان: المعيار لا اللهجة', wie: 'In der Prüfung bleibe ich beim Standard.', warum: 'الألمانية المعيارية هي المقيسة، والفهم يُختبر لا الأداء اللهجي.', anchor: 'beim Standard' }
    ]
  }

};

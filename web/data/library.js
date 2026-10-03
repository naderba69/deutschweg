/* Original reading library. No copied novel. Extensive mode has no dictionary. */
(function (root) {
  function text(id, level, title, body) {
    return { id: id, level: level, title: title, body: body, words: body.split(/\s+/).filter(Boolean).length };
  }
  const A1 = [
    ['a1-r1', 'بطاقة الفندق', 'Guten Tag. Ich heiße Sara. Ich habe ein Zimmer. Das Zimmer ist klein und hell. Ich bleibe zwei Nächte.'],
    ['a1-r2', 'قائمة قصيرة', 'Einen Kaffee, bitte. Ein Wasser, bitte. Die Rechnung, bitte. Das macht acht Euro.'],
    ['a1-r3', 'رسالة إلى صديق', 'Liebe Anna, ich komme am Montag. Ich wohne bei meiner Schwester. Viele Grüße, Sara.'],
    ['a1-r4', 'إعلان غرفة', 'Zimmer frei. Das Zimmer ist hell. Es gibt ein Bett. Die Wohnung ist klein. Preis: 300 Euro.'],
    ['a1-r5', 'لافتة قطار', 'Der Zug nach Berlin kommt um acht. Gleis zwei. Der Zug hat keine Verspätung.'],
    ['a1-r6', 'ملاحظة', 'Ich bin im Kurs. Ich komme um sechs nach Hause. Es gibt Brot auf dem Tisch.'],
    ['a1-r7', 'دعوة', 'Kommst du am Samstag? Wir feiern um sieben. Ja, gerne. Ich bringe Wasser mit.'],
    ['a1-r8', 'وصفة قصيرة', 'Zuerst das Wasser. Dann den Kaffee. Danach die Milch. Zum Schluss trinken.'],
    ['a1-r9', 'جدول', 'Der Bus kommt um neun. Dann um zehn. Die Fahrt dauert zwanzig Minuten.'],
    ['a1-r10', 'بريد قصير', 'Hallo, ich bin krank. Ich komme morgen. Ich brauche keinen Termin. Danke, Sara.']
  ].map(r => text(r[0], 'A1', r[1], r[2]));
  const A2 = [
    ['Der Tag in Berlin', 'Ich bin gestern angekommen. Der Zug hatte Verspätung. Ich habe ein Zimmer reserviert. Am Abend bin ich durch die Stadt gegangen.'],
    ['Beim Arzt', 'Mir ist schlecht. Ich habe Fieber. Die Praxis hatte noch einen Termin. Ich fühle mich heute besser.'],
    ['Das Wochenende', 'Wir sind ans Meer gefahren. Das Wetter war warm. Am Sonntag sind wir zu Hause geblieben.'],
    ['Der erste Arbeitstag', 'Ich arbeite halbtags. Mein Chef ist nett. Die Arbeit macht Spaß, aber ich bin müde.'],
    ['Die neue Wohnung', 'Die Wohnung ist hell. Ich wohne im Erdgeschoss. Die Nachbarn sind laut, aber die Lage ist gut.'],
    ['Das Fest', 'Ich lade dich am Samstag ein. Leider kann Peter nicht kommen. Wir feiern trotzdem.'],
    ['Der Regen', 'Es regnet seit Stunden. Deshalb bleiben wir zu Hause. Morgen fahren wir, wenn es nicht regnet.'],
    ['Die Tasche', 'Ich habe meine Tasche verloren. Sie war auf dem Sitz. Ein Mann hat sie gefunden.'],
    ['Der Abendkurs', 'Der Kurs beginnt um acht. Ich verstehe nicht alles. Trotzdem lerne ich weiter.'],
    ['Der Markt', 'Am Samstag kaufe ich Brot und Obst. Das ist mir nicht zu teuer. Ich zahle mit Karte.'],
    ['Das Telefon', 'Sara am Apparat. Einen Moment, bitte. Er ist gerade nicht da. Kann ich etwas ausrichten?'],
    ['Das Geschenk', 'Ich habe ein Buch gekauft. Es gehört meiner Schwester. Sie freut sich darauf.'],
    ['Der Nachbar', 'Der Nachbar ist laut. Ich habe höflich gesagt: Können Sie leiser sein? Er hat sich entschuldigt.'],
    ['Die falsche Karte', 'Ich habe die falsche Fahrkarte gekauft. Hin und zurück war richtig. Ich muss umsteigen.'],
    ['Das Rezept', 'Zuerst habe ich das Gemüse gewaschen. Dann habe ich Reis gekocht. Zum Schluss haben wir gegessen.'],
    ['Das Fest zu Hause', 'Wir feiern am Abend. Ich koche. Meine Mutter bringt Kuchen mit.'],
    ['Die geschlossene Station', 'Die Station ist geschlossen. Der Bus fährt trotzdem. Wir warten zehn Minuten.'],
    ['Der Hund', 'Der Hund der Nachbarn ist freundlich. Er wartet vor der Tür. Ich gebe ihm Wasser.'],
    ['Der kleine Test', 'Ich habe den Test gemacht. Nicht alles war richtig. Ich lerne die Fehler noch einmal.'],
    ['Der zweite Schlüssel', 'Ich habe den Schlüssel verloren. Meine Schwester hat einen zweiten. Das passt.'],
    ['Die Werkstatt und die Wohnung', 'Unsere Wohnung wird renoviert. Der Haushalt ist voll: Ich trage das Geschirr in den Schrank, gieße die Pflanze und koche Bohnen im Topf. Die Schere liegt auf dem Tisch, die Reinigung macht die Bluse sauber. Die Werkstatt nebenan repariert die Maschine, das ist dringend, und die Garage am Hof gehört der Vermieterin. Wir wollen sparen, deshalb kaufen wir preiswerte Möbel, aber die Qualität ist wichtig. Der Service im Laden ist gut und das Produkt günstig, einen Kredit brauchen wir nicht. Der Lärm stört uns manchmal, doch der Stress ist klein: Wir schaffen das. Endlich ist alles fertig. Wir müssen noch auspacken, ein Nachbar hilft beim Tragen, und im Juni wollen wir einziehen.'],
    ['Wer wohnt in unserer Straße?', 'In unserer Straße wohnen viele Berufe. Im ersten Haus arbeitet eine Ärztin, ihre Schwester ist Autorin. Daneben wohnt ein Journalist mit seiner Frau, einer Journalistin. Die Bäckerin öffnet um fünf, die Köchin kocht im Lokal an der Ecke, und die Friseurin schneidet Haare. Ein Techniker repariert Fahrräder, seine Frau, eine Technikerin, arbeitet im Büro. Ein Polizist und eine Polizistin wohnen oben, ein Musiker und eine Sängerin proben im Keller. Die Schauspielerin spielt im Theater, der Schauspieler im Film, ein Künstler und eine Künstlerin malen Bilder. Ein Handwerker baut ein Regal, eine Mechanikerin hilft ihm, eine Fahrerin fährt den Bus, eine Doktorin arbeitet im Krankenhaus, eine Rentnerin gießt die Blumen. Ein Kaufmann, eine Kauffrau, ein Koch, eine Kellnerin, ein Krankenpfleger und ein Babysitter fehlen noch.'],
    ['Mein Stundenplan', 'In der Schule habe ich viele Fächer: Biologie, Chemie, Physik und Mathematik am Morgen, danach Geografie, Geschichte und Sozialkunde. Französisch und Latein lerne ich freiwillig, Religion und Kunst sind meine Lieblingsfächer, und im Sport spiele ich Volleyball und Basketball. Nach dem Abitur möchte ich studieren. Meine Kenntnisse in Englisch sind gut, aber ich muss noch üben. Der Direktor hat die Klassenfahrt erlaubt, das Sekretariat sammelt das Geld. Die Prüferin korrigiert die Aufgaben, und ich notiere jeden Fehler in einer Notiz.'],
    ['Computer und Internet', 'Ich habe einen neuen Laptop und ein Tablet. Auf der Homepage der Schule muss ich Dateien herunterladen und speichern. Das Mobiltelefon ist immer dabei, und ein E-Book lese ich abends im Bett. Ich chatte mit Freunden, surfe im Internet und schreibe in meinem Blog über Bücher. Mein Passwort ist lang, das ist wichtig. Manchmal mache ich ein Quiz oder rate bei einem Rätsel mit. Der Kontakt zu meiner Familie ist so einfach: Wir wollen Fotos austauschen und oft telefonieren.'],
  ].map((r, i) => text('a2-r' + (i + 1), 'A2', r[0], r[1]));
  const B1 = [
    ['Arbeit und Zeit', 'Einerseits spart die kurze Woche Zeit. Andererseits fehlt dann Geld. Ich finde einen Kompromiss besser als ein absolutes Ja oder Nein. Zum Beispiel arbeite ich vier Tage und lerne am fünften.'],
    ['Stadt ohne Auto', 'Der Vorteil ist die Ruhe. Der Nachteil ist der Weg zur Arbeit. Nicht jede Stadt kann auf Autos verzichten. Die Grenze ist der Ort, an dem kein Bus fährt.'],
    ['Spät lernen', 'Obwohl ich spät angefangen habe, lerne ich Deutsch. Ich lerne, damit ich arbeiten kann. Wenn ich mehr Zeit hätte, käme ich öfter in den Kurs.'],
    ['Die Versicherung', 'Ich habe mich angemeldet. Die Versicherung übernimmt den Termin nicht ganz. Ich bitte um eine schriftliche Antwort. Das Formular war unvollständig.'],
    ['Kaufen oder warten', 'Ich kann mir das Gerät leisten. Es lohnt sich trotzdem nicht, weil das alte noch funktioniert. Nicht nur der Preis zählt, sondern auch die Folge für den Müll.'],
    ['Der Verein', 'Ich arbeite ehrenamtlich im Verein. Aus eigener Erfahrung sage ich: Die Zeit fehlt oft. Das habe ich selbst erlebt, als der Kurs ausfiel.'],
    ['Zwei Züge', 'Der Plan ist der frühe Zug. Falls er ausfällt, nehmen wir den Bus. Wir brauchen die Alternative, bevor wir am Bahnhof stehen.'],
    ['Nachricht und Meinung', 'Die Zahl ist gestiegen. Das ist eine Tatsache. Dass das schlecht ist, ist eine Wertung. Der Titel reicht nicht, weil der Text vorsichtiger ist.'],
    ['Die Beschwerde', 'Die Lieferung kam zu spät. Die Folge war ein verpasster Termin. Ich bitte um eine Lösung. Der Ton bleibt sachlich.'],
    ['Zwei Wege', 'Die Ausbildung dauert drei Jahre. Das Studium ist länger. Einerseits ist die Ausbildung praktisch. Andererseits fehlt danach oft die Theorie.']
  ].map((r, i) => text('b1-r' + (i + 1), 'B1', r[0], r[1]));
  const articles = [
    ['العمل عن بعد', 'Einerseits spart die Arbeit zu Hause den Weg. Andererseits fehlt die Grenze zwischen Tag und Abend. Die Maßnahme hilft nur, wenn das Team die Zeiten nennt. Sonst wird aus Freiheit Kontrolle.'],
    ['الإيجار', 'Die Miete steigt. Das ist die Zahl. Die Ursache nennt die Quelle nicht. Ein Vergleich mit dem Vorjahr zeigt den Anstieg, nicht die Schuld einer Person.'],
    ['الهجرة اليومية', 'Viele fahren jeden Tag in die Stadt. Der Vorteil ist die Arbeit. Der Nachteil ist die Zeit. Die Grenze ist der Ort ohne frühen Zug.'],
    ['المدرسة والرقمنة', 'Ein Gerät ersetzt keine Lehrkraft. Es kann Übung geben, aber keine Rückfrage. Wer zahlt, gehört zur Frage. Nicht jede Schule hat dasselbe Budget.'],
    ['الصحة والوقاية', 'Die Praxis ist voll. Ein früher Termin hilft nur, wenn die Versicherung klar ist. Die Absicht, gesund zu bleiben, reicht nicht als Plan.'],
    ['الاستهلاك', 'Nicht nur der Preis zählt. Ein billiges Gerät, das schnell kaputt ist, kostet später mehr. Der Beleg zeigt den Kauf, nicht die Qualität.'],
    ['النقل', 'Der Bus ist langsam, der Zug ist voll. Eine Maßnahme ohne Alternative scheitert am ersten Ausfall. Der Plan braucht einen zweiten Weg.'],
    ['الطاقة', 'Energie sparen ist eine Gewohnheit, keine Heldentat. Die Folge ist klein, aber sichtbar. Wer alles auf einmal will, bleibt beim Alten.'],
    ['العنوان', 'Die Überschrift verspricht mehr, als der Text hält. Viele Leser machen die Aussage nicht wahr. Die Plattform ist nicht die Quelle.'],
    ['التطوع', 'Ehrenamt trägt den Verein, solange die Zeit da ist. Aus eigener Erfahrung bricht es, wenn alle gleichzeitig arbeiten. Das ist eine Grenze, kein Vorwurf.'],
    ['السياحة', 'Die Stadt lebt vom Besuch und leidet unter ihm. Beide Seiten gehören in den Satz. Das Urteil kommt danach, nicht davor.'],
    ['اللغة في العمل', 'Ein Zertifikat öffnet die Tür nicht allein. Die Frage ist, ob die Person den Ablauf erklären kann. Ein Beispiel aus dem Tag sagt mehr als eine Note.'],
    ['الهدر', 'Weniger wegwerfen ist konkret. Der Satz «die Umwelt ist wichtig» reicht nicht. Die Folge muss in den Mülltonnen sichtbar sein, nicht nur im Satz.'],
    ['الرياضة والمال', 'Der Verein braucht Beitrag und Zeit. Kostenlos für alle ist selten wahr. Wer profitiert, und wer zahlt, sind zwei Fragen.'],
    ['الدعم الثقافي', 'Ein Zuschuss hilft, wenn die Frist klar ist. Ohne Beleg bleibt der Antrag schwach. Der Ton der Begründung bleibt sachlich.'],
    ['الجيران', 'Lärm ist eine Tatsache, wenn er gemessen wird. Die Wertung, dass der Nachbar rücksichtslos ist, braucht mehr. Eine Bitte kommt vor dem Vorwurf.'],
    ['الشاشة', 'Die Zeit an der Fläche steigt. Das zeigt die Zahl. Ob das schadet, ist eine Deutung. Die Quelle nennt keine Ursache für jede Stunde.'],
    ['التقاعد', 'Früher aufhören klingt gut und kostet Beitrag. Die Grenze ist das Einkommen, nicht der Wunsch. Ein Vergleich ohne Zahl bleibt ein Wunsch.'],
    ['القرية والمدينة', 'Im Vergleich zur Stadt ist die Miete niedrig. Nicht alles ist gleich: der Arzt ist weit. Die Grenze ist der Notfall, nicht der Einkauf.'],
    ['العدل في الامتحان', 'Ein Modul rettet das andere nicht. Das ist hart und klar. Wer einen Teil schwach lässt, besteht nicht durch einen starken anderen.']
  ].map((r, i) => text('b2-a' + (i + 1), 'B2', r[0], r[1]));
  const novel = {
    id: 'novelle-zimmer',
    title: 'Das Zimmer in Sousse',
    note: 'نوفيلة أصلية مكتملة، ليست رواية منشورة. الملك العام لم يُنسخ.',
    chapters: [
      ['الوصول', 'Sara kam am Abend in Sousse an. Der Zug hatte Verspätung, und der Schlüssel lag nicht unter der Matte, wie die Nachricht versprochen hatte. Sie stellte die Tasche ab und las den Zettel noch einmal. Die Wohnung war im Erdgeschoss. Das Licht im Flur brannte. Niemand öffnete.'],
      ['الجارة', 'Am nächsten Morgen klopfte eine Frau. Sie hieß Leila und wohnte über Sara. Der Schlüssel war bei ihr, weil der Vermieter die Stadt verlassen hatte. Leila sagte das ohne Drama. Sara bedankte sich und fragte nach dem Wasser. Es kam erst am Abend.'],
      ['العمل', 'Der Kurs begann um acht. Sara arbeitete halbtags in einem kleinen Büro und lernte danach. Einerseits reichte das Geld für die Miete. Andererseits fehlte die Zeit für den Markt. Sie schrieb die Grenze in ihr Heft: vier Abende, nicht sieben.'],
      ['الخطأ', 'Am Donnerstag kam die Lieferung zu spät. Der Termin mit dem Amt fiel aus. Sara schrieb eine kurze Beschwerde: Tatsache, Folge, Bitte. Sie nannte keine Schuld und kein Schimpfwort. Am Freitag lag eine neue Uhrzeit im Briefkasten.'],
      ['المطر', 'Im Winter regnete es drei Tage. Der Hof stand unter Wasser, und der Hund der Nachbarn wartete vor der Tür. Leila brachte Tee. Sie sprachen nicht über das Wetter als Gefühl, sondern über den Plan: wer ruft den Vermieter an, und bis wann.'],
      ['القرار', 'Im Mai war das Zimmer hell. Sara blieb. Nicht weil alles gut war, sondern weil sie den Ablauf kannte: Kurs, Arbeit, Markt, ein Abend frei. Sie legte den zweiten Schlüssel in die Schublade und schrieb Leila einen Satz. Der Satz war kurz und reichte.']
    ].map((c, i) => ({ n: i + 1, title: c[0], body: c[1] }))
  };
  root.DW_LIBRARY = {
    A1: A1,
    A2: A2,
    B1: { texts: B1, magazine: text('b1-mag', 'B1', 'مجلة السكن والعمل', B1.map(t => t.body).join(' ')) },
    B2: { novel: novel, articles: articles }
  };
})(typeof window !== 'undefined' ? window : global);

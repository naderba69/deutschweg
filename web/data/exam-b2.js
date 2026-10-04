/* Deutschweg — the B2 mock paper (PROMPT §12.1, §12.4 mock protocol).
 *
 * The official shape, part for part, is public: **Lesen** 65 minutes, 5 parts,
 * 30 items (9 · 6 · 6 · 6 · 3) — forum posts, a report with six sentences to
 * insert, a newspaper article with three-option items, opinions to match, and a
 * set of rules. **Hören** 40 minutes, 4 parts, 30 items (10 · 6 · 6 · 8) — short
 * everyday conversations, an interview, a discussion, a lecture.
 *
 * The paper is original: no text here comes from a Goethe paper, and the file
 * never claims to be one. `official: false` travels with it into every score the
 * engine prints, exactly as §12.5 requires.
 *
 * The map (DW_EXAM in inventory.js) declares the shape; this file is the
 * content, the way DW_READING declares the texts and DW_LIBRARY carries them.
 */
(function (root) {
  function item(id, prompt, options, key) {
    return { id: id, prompt: prompt, options: options, key: key, family: 'pruefstrategie' };
  }
  /* Teil 1 and Teil 4 are matching tasks: the options are the people, and the
     key is one of them. */
  function who(id, prompt, people, key) {
    return item(id, prompt, people, key);
  }
  function mcq(id, prompt, options, key) {
    return item(id, prompt, options, key);
  }
  function part(n, kind, minutes, goal, material, items) {
    return { n: n, kind: kind, minutes: minutes, goal: goal, material: material, items: items };
  }

  /* ---------- Lesen ---------- */

  const forumA = {
    id: 'a', name: 'Marlene',
    text: 'Ich habe vor zwei Jahren angefangen, meine Wohnung zu leeren. Nicht weil ich arm wäre, sondern weil ich gemerkt habe, wie viel Zeit das Verwalten von Dingen kostet. Heute besitze ich zwei Kisten mit Erinnerungen und sonst nur, was ich wirklich benutze. Beim Kaufen frage ich mich jedes Mal: Brauche ich das nächste Woche noch? Wenn die Antwort nein ist, bleibt es im Regal. Meine Freunde finden das streng, aber ich habe seitdem mehr Zeit für sie, und das ist mir mehr wert als jedes Möbelstück. Ich habe mir eine Regel gegeben: Jeden Monat verlasse eine Sache das Haus. Am Anfang war das leicht, weil ich vieles doppelt hatte; inzwischen dauert es länger, und ich überlege bei jedem Kauf zwei Nächte. Was bleibt, benutze ich wirklich, und ich putze weniger. Meine Freunde sagen, dass sie in meiner Wohnung ruhiger atmen.'
  };
  const forumB = {
    id: 'b', name: 'Tarek',
    text: 'Wegwerfen ist für mich die letzte Möglichkeit. Ich repariere seit zwanzig Jahren alles, was in meiner Werkstatt landet: Waschmaschinen, Fahrräder, einmal sogar eine Kaffeemaschine aus den Siebzigerjahren. Wenn ein Gerät kaputt ist, suche ich zuerst das Ersatzteil und nicht das Sonderangebot. Das ist oft teurer als ein neues Gerät, und ich verstehe jeden, der anders rechnet. Aber ich habe gelernt, dass ich die Dinge dann wirklich kenne: Ich weiß, wie sie funktionieren, und ich kann sie weitergeben, wenn ich sie nicht mehr brauche. Ich habe gelernt, dass Reparieren auch eine Rechnung ist: Ersatzteile kosten Geld und die Zeit fehlt. Deshalb prüfe ich zuerst, ob sich die Arbeit lohnt, und sage sonst ehrlich ab. Bei Waschmaschinen und Fahrrädern lohnt sie fast immer. Meine Werkstatt hat seit zehn Jahren dieselben Kunden, und die bringen ihre Sachen lieber zu mir als in den Laden.'
  };
  const forumC = {
    id: 'c', name: 'Jonas',
    text: 'Besitz sagt fast nichts über einen Menschen. Ich habe eine Matratze, einen Laptop, einen Rucksack und einen Vertrag für das Zimmer, das ich mit zwei Freunden teile. Was mich interessiert, sind Reisen und Menschen, und beides wird billiger, wenn man wenig mitnimmt. Meine Familie denkt, ich hätte kein Ziel im Leben; dabei habe ich nur kein Ziel, das man kaufen kann. Natürlich weiß ich, dass ich irgendwann anders leben werde. Aber solange ich entscheiden kann, entscheide ich gegen das Regal und für den Zug. Ich habe das nicht immer so gelebt. Nach dem Studium hatte ich ein Zimmer voller Möbel und am Ende keine Zeit, weil ich für alles arbeiten musste. Heute habe ich weniger und koche für Freunde, statt mich um Dinge zu kümmern. Wer das versucht, merkt schnell, dass es nicht um Verzicht geht, sondern um Entscheidungen: Was will ich wirklich behalten?'
  };
  const forumD = {
    id: 'd', name: 'Ruth',
    text: 'Ich kaufe selten, aber wenn ich kaufe, dann lange: Das Sofa hat mein Vater gebaut, die Jacke kommt aus einem Laden, der seine Wolle selbst einkauft. Bevor ich etwas kaufe, frage ich, wo es herkommt, wer es gemacht hat und was nach mir damit passiert. Das klingt umständlich, und es ist umständlich. Manche Angebote lasse ich liegen, weil die Herkunft unklar ist; dafür muss ich nichts wegwerfen, was ich später bereue. Meine Tochter nennt mich langsam. Ich nenne es vorausschauend. Ich kaufe wenige Sachen, aber ich kenne jedes davon. Wenn etwas kaputtgeht, bringe ich es zur Reparatur und nicht in den Müll, weil ich weiß, wer es gemacht hat. Das ist teurer am Anfang und billiger am Ende. Meine Tochter hat eine Jacke von mir, und sie ist zwanzig Jahre alt. So erzählt ein Ding eine Geschichte, und das finde ich schöner als ein Regal voller neuer Sachen.'
  };
  const PEOPLE = ['a Marlene', 'b Tarek', 'c Jonas', 'd Ruth'];

  const lesen1 = part(1, 'Zuordnung: Meinungen verstehen', 18,
    'تطابق تسع عبارات مع أربعة نصوص منتدى: موقف كل شخص من الاقتناء.',
    { type: 'forums', prompt: 'Vier Personen schreiben über Besitz. Ordnen Sie jeder Aussage die passende Person zu.',
      texts: [forumA, forumB, forumC, forumD] },
    [
      who('L1-1', 'Wer will nur die Dinge behalten, die wirklich nötig sind?', PEOPLE, 'a Marlene'),
      who('L1-2', 'Wer hat durch das Weniger an Besitz mehr Zeit gewonnen?', PEOPLE, 'a Marlene'),
      who('L1-3', 'Wer hält Reparieren für wichtiger als Neukaufen?', PEOPLE, 'b Tarek'),
      who('L1-4', 'Wer kennt seine Geräte genau, weil er sie selbst instand hält?', PEOPLE, 'b Tarek'),
      who('L1-5', 'Wer empfindet Besitz als unwichtig für einen Menschen?', PEOPLE, 'c Jonas'),
      who('L1-6', 'Wer entscheidet sich bewusst gegen Anschaffungen und für das Reisen?', PEOPLE, 'c Jonas'),
      who('L1-7', 'Wer rechnet damit, dass das eigene Leben später anders aussehen wird?', PEOPLE, 'c Jonas'),
      who('L1-8', 'Für wen ist die Herkunft eines Stücks wichtiger als der Preis?', PEOPLE, 'd Ruth'),
      who('L1-9', 'Wer denkt beim Kauf schon an die Zeit nach dem eigenen Gebrauch?', PEOPLE, 'd Ruth')
    ]);

  const GAP_SENTENCES = [
    { id: 'a', text: 'Für viele Reisende war das die bequemste Art, ans Ziel zu kommen.' },
    { id: 'b', text: 'Das kostet Geld, das viele Stationen nicht mehr haben.' },
    { id: 'c', text: 'Dahinter steckt aber mehr als ein ökologisches Argument.' },
    { id: 'd', text: 'Deshalb baut die Bahn ihre Bahnhöfe in den Städten seit Jahren um.' },
    { id: 'e', text: 'Sie sind grau und modern statt blau und alt.' },
    { id: 'f', text: 'Wer das nicht zahlen will, findet kaum eine günstige Alternative.' },
    { id: 'g', text: 'Im Winter fahren die Züge seltener, im Sommer täglich.' },
    { id: 'h', text: 'Die Auslastung muss über das ganze Jahr stimmen.' }
  ];
  const gabOptions = GAP_SENTENCES.map(s => s.id + ') ' + s.text);
  const REPORT = 'Wer in den Neunzigerjahren mit dem Zug nach Rom fuhr, konnte abends einsteigen und morgens ankommen. (1) ____ Zwanzig Jahre später war kaum eine dieser Verbindungen übrig, denn die Bahnen steckten ihr Geld lieber in schnelle Tagestrecken. Was blieb, waren wenige Linien, die vor allem im Sommer ausgebucht waren.\n\nSeit ein paar Jahren ändert sich die Lage: Mehrere Bahngesellschaften haben neue Nachtzüge bestellt. (2) ____ Die Nachfrage kommt nicht nur von Reisenden, die das Fliegen vermeiden wollen. (3) ____ Viele nennen auch den Preis: Wer nachts fährt, spart eine Hotelübernachtung und einen halben Tag.\n\nSo einfach ist die Rechnung trotzdem nicht. Ein Nachtzug hat viele Betten und wenige Sitze; deshalb kostet ein Platz im Liegewagen deutlich mehr als ein Sitz im Tagzug. (4) ____ Für Familien mit kleineren Kindern ist der Nachtzug trotzdem attraktiv, weil niemand morgens zwei Stunden im Stau stehen muss.\n\nFür die Bahnhöfe ist der Nachtzug ein Aufwand: Wo ein Zug um drei Uhr morgens hält, muss Personal bereit sein. (5) ____ In einigen Städten übernimmt diese Aufgabe inzwischen ein privater Anbieter, der die Wagen stellt und die Betten verkauft.\n\nOb der Aufschwung bleibt, hängt am Geld. (6) ____ Eine Verbindung, die nur in den Ferien voll ist, rechnet sich nicht; die Züge fahren aber das ganze Jahr.\n\nWer heute einen Platz sucht, findet ihn selten im Reisebüro um die Ecke, sondern im Netz. Dort sieht man die Strecke, den Preis und die freien Betten, und man bucht sieben Wochen vorher oder drei Tage vorher. Für die Bahnen hat das einen Vorteil: Sie wissen früher, wie viele Wagen sie brauchen. Für die Reisenden hat es einen Nachteil: Kurzfristig ist fast alles teurer, und wer wartet, zahlt am Ende mehr als der, der früh plant.\n\nFür die Zukunft gibt es zwei Wege. Der erste ist, mehr Wagen zu bestellen und die Strecken auf mehrere Länder zu verteilen; das dauert Jahre und kostet viel. Der zweite ist kleiner: Man fährt nur an den Wochenenden und in den Ferien und lässt die Züge im Winter stehen. Der zweite Weg ist billiger und für die Reisenden schlechter. Wer heute einsteigt, merkt davon nichts; wer in fünf Jahren einsteigen will, vielleicht schon.';

  const lesen2 = part(2, 'Sätze in Lücken einsetzen', 12,
    'إعادة بناء تقرير: ست جمل تُختار من ثمانٍ وتوضع في مواضعها المنطقية.',
    { type: 'article', prompt: 'Im Text fehlen sechs Sätze. Wählen Sie für jede Lücke den passenden Satz. Zwei Sätze bleiben übrig.',
      title: 'Der Nachtzug kehrt zurück', body: REPORT, options: gabOptions },
    [
      item('L2-1', 'Welcher Satz gehört in Lücke (1)?', gabOptions, 'a) Für viele Reisende war das die bequemste Art, ans Ziel zu kommen.'),
      item('L2-2', 'Welcher Satz gehört in Lücke (2)?', gabOptions, 'e) Sie sind grau und modern statt blau und alt.'),
      item('L2-3', 'Welcher Satz gehört in Lücke (3)?', gabOptions, 'c) Dahinter steckt aber mehr als ein ökologisches Argument.'),
      item('L2-4', 'Welcher Satz gehört in Lücke (4)?', gabOptions, 'f) Wer das nicht zahlen will, findet kaum eine günstige Alternative.'),
      item('L2-5', 'Welcher Satz gehört in Lücke (5)?', gabOptions, 'b) Das kostet Geld, das viele Stationen nicht mehr haben.'),
      item('L2-6', 'Welcher Satz gehört in Lücke (6)?', gabOptions, 'h) Die Auslastung muss über das ganze Jahr stimmen.')
    ]);

  const ARTICLE = 'Zehn Jahre lang war der Laden an der Hauptstraße geschlossen; heute stehen wieder Fahrräder davor. Was nach einer kleinen Geschichte klingt, ist Teil einer Bewegung: In mehreren Regionen eröffnen Dorfläden neu, oft getragen von Genossenschaften, in denen die Bewohner selbst Anteile kaufen. Das Geld reicht selten für große Umbauten, aber es reicht für den Anfang: Regale, eine Kühltheke, ein Kaffeeautomat.\n\nDie Rechnung ist einfach und hart. Ein Dorfladen verkauft weniger als ein Supermarkt, und er zahlt oft höhere Preise für dieselbe Ware, weil die Lieferungen klein sind. Wer nur die Preise vergleicht, kauft deshalb weiter im Supermarkt. Die Genossenschaften rechnen anders: Sie zählen auch die Wege, die Fahrten und die Zeit, die ein Einkauf auf dem Land kostet. Ein Laden, der zu Fuß erreichbar ist, spart Benzin und eine halbe Stunde.\n\nFür viele ist der Laden mehr als ein Geschäft. Er ist der Ort, an dem man erfährt, wer krank ist und wann das Fest stattfindet. Diese Aufgabe hat vorher die Post übernommen, dann die Bank, dann niemand. In einem Dorf in der Eifel hängt heute im Laden eine Liste, auf der sich die Bewohner für Fahrten zum Arzt eintragen.\n\nNicht überall funktioniert das Modell. Wo die Mieten steigen und im Sommer niemand da ist, bleibt die Genossenschaft auf ihren Kosten sitzen. Zwei Läden in der Region haben nach drei Jahren wieder geschlossen. Ihre Anteile wurden zurückgezahlt, und die Regale gingen an das nächste Dorf. Wer so etwas plant, sollte deshalb nicht mit Idealismus rechnen, sondern mit dem Kalender: Wie viele Menschen wohnen hier im Winter?\n\nFür die Gemeinden ist der Laden auch eine Rechnung, die nicht in der Kasse steht. Ein Dorf mit Laden behält seine Schule und seine Bushaltestelle länger; ein Dorf ohne Laden verliert beides schneller, als den Menschen lieb ist. Deshalb geben manche Gemeinden einen kleinen Zuschuss, andere stellen das Haus billiger. Das klingt nach Sonderfall, ist aber die Regel: Wer den Ort halten will, muss die Orte halten, an denen man sich trifft.\n\nAm Ende entscheidet nicht der Idealismus, sondern die Zahl der Einkäufe pro Tag. Ein Laden braucht etwa zweihundert Einkäufe in der Woche, um die Miete und eine Teilzeitkraft zu bezahlen. Das ist in einem Dorf mit sechshundert Menschen möglich, in einem mit zweihundert kaum. Wer rechnen kann, plant deshalb lieber einen kleinen Bus, der zweimal in der Woche zum Supermarkt fährt, als ein Geschäft, das nach zwei Jahren wieder schließt.';

  const lesen3 = part(3, 'Zeitungsartikel mit Auswahl', 12,
    'قراءة مقال صحفي والإجابة عن ستة أسئلة فهم تفصيلي بثلاثة خيارات.',
    { type: 'article', prompt: 'Lesen Sie den Artikel und wählen Sie bei jeder Aufgabe die richtige Antwort.',
      title: 'Der Dorfladen kommt zurück', body: ARTICLE },
    [
      mcq('L3-1', 'Worum geht es im Text?',
        ['um Dorfläden, die von den Bewohnern selbst getragen werden', 'um den Umbau großer Supermärkte auf dem Land', 'um neue Gesetze für den Handel in kleinen Orten'],
        'um Dorfläden, die von den Bewohnern selbst getragen werden'),
      mcq('L3-2', 'Warum verkauft ein Dorfladen oft teurer?',
        ['weil seine Lieferungen klein sind', 'weil die Bewohner mehr zahlen wollen', 'weil der Staat die Preise festlegt'],
        'weil seine Lieferungen klein sind'),
      mcq('L3-3', 'Wie rechnen die Genossenschaften nach dem Text?',
        ['Sie zählen auch Wege, Fahrten und Zeit.', 'Sie vergleichen nur den Preis der Ware.', 'Sie verlassen sich auf die Zahl der Touristen.'],
        'Sie zählen auch Wege, Fahrten und Zeit.'),
      mcq('L3-4', 'Welche zweite Aufgabe hat der Laden übernommen?',
        ['Er wird zum Ort für Informationen.', 'Er übernimmt die Postzustellung.', 'Er berät die Bewohner in Steuerfragen.'],
        'Er wird zum Ort für Informationen.'),
      mcq('L3-5', 'Wann funktioniert das Modell nach dem Text nicht?',
        ['wenn im Sommer kaum jemand im Ort wohnt', 'wenn die Regale zu klein sind', 'wenn die Bewohner keine Anteile kaufen wollen'],
        'wenn im Sommer kaum jemand im Ort wohnt'),
      mcq('L3-6', 'Was empfiehlt der Text den Planern?',
        ['mit der Zahl der Menschen im Winter zu rechnen', 'mit Idealismus zu rechnen', 'die Anteile schneller zurückzuzahlen'],
        'mit der Zahl der Menschen im Winter zu rechnen')
    ]);

  const opA = { id: 'a', name: 'Hanna', text: 'Die Vier-Tage-Woche ist keine Frage der Mode, sondern der Organisation. In unserem Betrieb verteilen wir die Arbeitszeit auf vier Tage und legen die Kundentermine auf diese Tage. Die Produktion ist gleich geblieben, und die Krankheitstage sind gesunken. Wer sie als freien Freitag versteht, wird enttäuscht: Die Arbeit wird nicht weniger, nur anders verteilt. Wir haben die Aufgaben zuerst gezählt und dann verteilt. Danach war die Woche kürzer, aber die Arbeit die gleiche. Wer das einführen will, muss wissen, welche Aufgabe wegfallen kann; sonst wird aus vier Tagen eine Woche mit fünf.' };
  const opB = { id: 'b', name: 'Bernd', text: 'Bei uns hängt die Arbeit am Auftrag und nicht an der Uhr. Wenn ein Kunde am Freitag anruft, muss jemand da sein. Wer selbstständig arbeitet und nur vier Tage erreichbar ist, verliert den fünften Tag an die Konkurrenz. Ich gönne jedem Angestellten den freien Tag; ich kann ihn nicht haben. Ich bin nicht gegen das Modell, ich bin gegen die Rechnung ohne Kunden. Wenn der Kunde am Freitag anruft und niemand da ist, verliert der Betrieb mehr als er spart. Deshalb haben wir eine Person für den Freitag und die anderen haben frei, im Wechsel.' };
  const opC = { id: 'c', name: 'Sofia', text: 'In der Kita geht es nicht um mich, sondern um die Kinder. Wir bräuchten mehr Personal, um mit vier Tagen dieselbe Betreuung zu schaffen. Der freie Tag wäre schön; ohne neue Stellen bleibt er eine Rechnung, die am Ende die Kolleginnen bezahlen. In der Kita brauchen wir am Morgen die meisten Hände. Eine Vier-Tage-Woche hieße: weniger Personal in der Zeit, in der die Eltern zur Arbeit müssen. Man kann es machen, aber nur mit mehr Kolleginnen und nicht mit weniger Geld.' };
  const opD = { id: 'd', name: 'Mehmet', text: 'Die Studien, die ich kenne, zeigen den Effekt in Büros mit klar verteilten Aufgaben. Auf der Baustelle oder in der Pflege lassen sich die Aufgaben nicht so leicht verschieben. Ich halte deshalb nichts von einer Regel für alle Berufe. Wer sie fordert, sollte sagen, für wen sie gilt. Ich würde nach der Arbeit fragen und nicht nach der Woche. In der Pflege und auf dem Bau entscheidet die Schicht, und da gibt es wenig zu verteilen. In unserem Büro funktioniert es dagegen gut, seit die Aufgaben klar sind und niemand abends anruft.' };
  const OPINIONS = ['a Hanna', 'b Bernd', 'c Sofia', 'd Mehmet'];

  const lesen4 = part(4, 'Standpunkte verstehen', 12,
    'تمييز مواقف أربعة أشخاص من «أسبوع العمل الرباعي».',
    { type: 'opinions', prompt: 'Vier Personen äußern sich zur Vier-Tage-Woche. Ordnen Sie jeder Aussage die passende Person zu.',
      texts: [opA, opB, opC, opD] },
    [
      who('L4-1', 'Wer hat die Vier-Tage-Woche im eigenen Betrieb bereits umgesetzt?', OPINIONS, 'a Hanna'),
      who('L4-2', 'Wer arbeitet selbstständig und hält das Modell deshalb für sich nicht möglich?', OPINIONS, 'b Bernd'),
      who('L4-3', 'Für wen entscheidet nicht der eigene Wunsch, sondern die Zahl der Stellen?', OPINIONS, 'c Sofia'),
      who('L4-4', 'Wer bezweifelt, dass sich der Effekt auf alle Berufe übertragen lässt?', OPINIONS, 'd Mehmet'),
      who('L4-5', 'Wer warnt davor, dass die Arbeit nicht kleiner wird, sondern anders verteilt?', OPINIONS, 'a Hanna'),
      who('L4-6', 'Wer denkt bei der Frage zuerst an die Kundschaft und nicht an die Freizeit?', OPINIONS, 'b Bernd')
    ]);

  const RULES = [
    { n: '§ 1 Öffnungszeiten', text: 'Die Bibliothek ist Montag bis Freitag von 10 bis 19 Uhr geöffnet, Samstag von 10 bis 14 Uhr. An Feiertagen bleibt sie geschlossen.' },
    { n: '§ 2 Leseausweis', text: 'Wer Medien ausleihen will, braucht einen Leseausweis. Er wird gegen Vorlage eines Ausweises ausgestellt und gilt zwei Jahre. Kinder unter zwölf Jahren brauchen die Unterschrift eines Erziehungsberechtigten.' },
    { n: '§ 3 Ausleihe', text: 'Es können höchstens zwanzig Medien gleichzeitig entliehen werden. Die Leihfrist beträgt vier Wochen und kann einmal um zwei Wochen verlängert werden, wenn das Medium nicht reserviert ist.' },
    { n: '§ 4 Säumnis', text: 'Wer die Frist überschreitet, zahlt für jedes Medium 0,50 Euro pro Woche. Bei mehr als zehn Euro Sperrgebühr ruht die Ausleihe, bis der Betrag bezahlt ist.' },
    { n: '§ 5 Arbeitsplätze', text: 'Die Arbeitsplätze im ersten Stock sind für stilles Arbeiten bestimmt. Telefongespräche sind im Foyer zu führen. Getränke sind erlaubt, Speisen nicht.' },
      { n: '§ 6 Rückgabe', text: 'Medien werden am Automaten im Erdgeschoss zurückgegeben. Beschädigte oder feuchte Medien bitte am Schalter abgeben; Schäden, die auf unsachgemäße Nutzung zurückgehen, werden ersetzt.' },
      { n: '§ 7 Veranstaltungen', text: 'Für Lesungen und Kurse öffnet die Bibliothek auch am Abend. Die Anmeldung ist kostenlos und online oder am Schalter möglich. Plätze werden zwei Tage vor der Veranstaltung freigegeben, wenn sie nicht bestätigt sind.' }
  ];

  const lesen5 = part(5, 'Regeln und Instruktionen verstehen', 6,
    'قراءة نظام استخدام مكتبة عامة والإجابة عن ثلاثة أسئلة قواعد.',
    { type: 'regulation', prompt: 'Lesen Sie die Benutzungsordnung und beantworten Sie die Aufgaben.',
      title: 'Benutzungsordnung der Stadtbibliothek', sections: RULES },
    [
      mcq('L5-1', 'Wie lange kann man ein Medium höchstens behalten, wenn es nicht reserviert ist?',
        ['sechs Wochen', 'vier Wochen', 'zwei Wochen'], 'sechs Wochen'),
      mcq('L5-2', 'Was passiert, wenn die Sperrgebühr über zehn Euro steigt?',
        ['Die Ausleihe ruht, bis der Betrag bezahlt ist.', 'Der Leseausweis wird sofort ungültig.', 'Die Gebühr wird halbiert.'],
        'Die Ausleihe ruht, bis der Betrag bezahlt ist.'),
      mcq('L5-3', 'Wo sind Telefongespräche zu führen?',
        ['im Foyer', 'am Arbeitsplatz im ersten Stock', 'gar nicht in der Bibliothek'],
        'im Foyer')
    ]);

  /* ---------- Hören ---------- */

  const GESPRAECHE = [
    { id: "g1", title: "Im Treppenhaus", text: "Guten Morgen, Frau Peters. Entschuldigen Sie die St\u00f6rung, wissen Sie, wann der Handwerker kommt? \u2014 Er wollte um neun da sein, aber er hat eben angerufen: Es wird halb elf. Er steckt im Stau, und er muss vorher noch zu einem anderen Termin. \u2014 Dann muss ich nicht warten. Ich lasse den Schl\u00fcssel beim Nachbarn, dritter Stock links. Er hat heute frei, das passt gut. \u2014 Gut, ich richte es ihm aus. Und die Rechnung schickt er Ihnen per Post, hat er gesagt. \u2014 Danke, das ist nett. Eine Frage noch: Muss ich die alte Dichtung aufbewahren? \u2014 Er bringt eine neue mit, Sie k\u00f6nnen alles andere wegwerfen. — Und wann kommen Sie mit dem Schlüssel? — Ich bin bis zwölf im Haus, danach können Sie den Schlüssel bei mir abholen. — Gut, dann rufe ich später noch einmal an. — Ja, machen Sie das. Wenn ich nicht da bin, liegt er im Briefkasten. — Und die Rechnung? — Die schicke ich Ihnen per Post, Sie müssen nichts bezahlen, das steht im Vertrag. — Gut. — Bis später dann. — Bis später, und danke für die Auskunft." },
    { id: "g2", title: "Beim B\u00e4cker", text: "Zwei Brote, bitte, und einmal den Kuchen da hinten. \u2014 Der mit Schokolade? \u2014 Nein, der mit \u00c4pfeln. Der Schokoladenkuchen ist f\u00fcr meinen Sohn, aber der kommt erst am Wochenende, und so lange h\u00e4lt er nicht. \u2014 Soll ich Ihnen die Brote schneiden? \u2014 Ja, bitte, d\u00fcnn. Wir essen am Abend nur zwei Scheiben, und der Rest trocknet sonst aus. \u2014 Dann wickle ich sie in Papier, das h\u00e4lt l\u00e4nger als die T\u00fcte. \u2014 Machen Sie das. Und was macht zusammen? \u2014 Elf Euro zwanzig. — Haben Sie auch kleine Brötchen? — Ja, vier Stück für einen Euro. — Dann nehme ich noch vier dazu. — Sonst noch etwas? — Nein, danke, das ist alles. — Hier bitte, die Karte geht nicht, das Gerät ist seit gestern kaputt. — Kein Problem, ich habe noch Kleingeld. — Dann sind es zwölf Euro zehn. — Bitte. — Danke, und einen schönen Tag. — Ihnen auch, bis zum nächsten Mal." },
    { id: "g3", title: "Am Bahnhof", text: "F\u00e4hrt der Zug nach Kiel heute noch? \u2014 Um sechzehn Uhr vierzig, aber nur mit Umstieg in Hamburg. Der direkte Zug f\u00e4llt aus, es gibt Bauarbeiten zwischen Bremen und Hamburg. \u2014 Wie lange dauert die Fahrt dann? \u2014 Vier Stunden zehn statt drei. Wenn Sie den Bus nehmen, sind Sie um zwanzig Uhr drei\u00dfig da, aber der f\u00e4hrt vom Zentralen Omnibusbahnhof, und dahin brauchen Sie vom Hauptbahnhof noch zwanzig Minuten. \u2014 Dann nehme ich den Zug. Ist der Umstieg knapp? \u2014 Sie haben zw\u00f6lf Minuten. Das reicht, wenn der erste Zug p\u00fcnktlich ist. — Und wenn er Verspätung hat? — Dann nehmen Sie den Bus ab Gleis fünf, der fährt alle halbe Stunde. — Kostet der extra? — Nein, das Ticket gilt für beide. — Danke, dann versuche ich es zuerst mit dem Zug. — Eine Frage noch: Fährt der Bus auch am Sonntag? — Ja, aber nur jede Stunde. — Dann nehme ich am Sonntag den Bus und am Montag den Zug. — So würde ich es auch machen. — Danke für die Auskunft, Sie haben mir sehr geholfen." },
    { id: "g4", title: "Im Sportverein", text: "Hast du schon geh\u00f6rt? Die Halle ist im Februar geschlossen, weil das Dach repariert wird. Die Arbeiten dauern drei Wochen, so hat es der Vorstand gesagt. \u2014 Und wo trainieren wir? \u2014 Der Verein hat die Turnhalle der Schule bekommen, aber nur dienstags und donnerstags. Freitags f\u00e4llt das Training aus, und samstags ist die Halle f\u00fcr die Spiele reserviert. \u2014 Dann schreibe ich das in die Gruppe. K\u00f6nnen wir sonst etwas machen? \u2014 Der Vorstand sucht noch eine Halle im Nachbarort. Wenn wir selbst anrufen und fragen, geht es vielleicht schneller. — Und wer schreibt den Brief? — Das mache ich heute Abend, ich schicke ihn an alle im Verein. — Dann können wir am Sonntag entscheiden. — Ja, und ich frage den Hausmeister, ob wir wenigstens bis Mai bleiben können. — Und wer informiert die Mitglieder? — Ich schreibe eine Nachricht in die Gruppe und hänge einen Zettel an die Tür. — Dann wissen es alle bis Dienstag. — Hoffentlich. — Wenn nicht, rufen wir die Älteren einzeln an, die lesen die Gruppe nicht." },
    { id: "g5", title: "Am Telefon", text: "Praxis Doktor Winter, guten Tag. \u2014 Guten Tag, ich m\u00f6chte einen Termin. Es geht um meine Schulter, sie tut seit zwei Wochen weh, besonders beim Heben. \u2014 Diese Woche ist alles voll. Ich h\u00e4tte Montag um acht Uhr oder Donnerstag um halb f\u00fcnf; Mittwoch g\u00e4be es noch eine L\u00fccke um sieben, aber das ist fr\u00fch. \u2014 Montag w\u00e4re gut, da habe ich ohnehin frei. \u2014 Dann nehme ich Sie auf. Bringen Sie bitte die \u00dcberweisung mit, sonst k\u00f6nnen wir nur privat abrechnen. Und kommen Sie zehn Minuten fr\u00fcher, das Formular muss ausgef\u00fcllt werden. — Ist die Ärztin denn morgen da? — Nein, morgen ist sie im Krankenhaus. Am Donnerstag wieder. — Dann komme ich am Donnerstag. — Passt das Ihrem Chef? — Ja, ich sage ihm Bescheid und arbeite am Abend länger. — Übrigens: Die Praxis ist am Freitag nur bis zwölf geöffnet. — Das passt mir, ich arbeite am Freitag erst ab zwei. — Dann sehen wir uns am Donnerstag um zehn. — Ja, und ich bringe die Karte und die Überweisung mit. — Sehr gut, dann ist alles vorbereitet." },
  ];

  const hoeren1 = part(1, 'Alltagsgespräche verstehen', 8,
    'خمس محادثات يومية قصيرة، سؤالان لكل محادثة (مجموع عشرة بنود).',
    { type: 'dialogues', prompt: 'Sie hören fünf kurze Gespräche. Jedes Gespräch hören Sie einmal.',
      scripts: GESPRAECHE.map(g => ({ id: g.id, title: g.title, text: g.text })) },
    [
      mcq('H1-1', 'Wann kommt der Handwerker?', ['um halb elf', 'um neun', 'am Nachmittag'], 'um halb elf'),
      mcq('H1-2', 'Was macht Frau Peters?', ['Sie lässt den Schlüssel beim Nachbarn.', 'Sie wartet im Treppenhaus.', 'Sie ruft den Handwerker an.'],
        'Sie lässt den Schlüssel beim Nachbarn.'),
      mcq('H1-3', 'Welchen Kuchen kauft der Kunde?', ['den mit Äpfeln', 'den mit Schokolade', 'keinen Kuchen'], 'den mit Äpfeln'),
      mcq('H1-4', 'Wie sollen die Brote geschnitten werden?', ['dünn', 'dick', 'gar nicht'], 'dünn'),
      mcq('H1-5', 'Warum dauert die Fahrt länger?', ['weil man in Hamburg umsteigen muss', 'weil der Bus Verspätung hat', 'weil es schneit'],
        'weil man in Hamburg umsteigen muss'),
      mcq('H1-6', 'Wann fährt der Bus ab?', ['Er fährt vom Zentralen Omnibusbahnhof.', 'Er fährt von Gleis zwei.', 'Er fährt nicht mehr heute.'],
        'Er fährt vom Zentralen Omnibusbahnhof.'),
      mcq('H1-7', 'Warum ist die Halle geschlossen?', ['weil das Dach repariert wird', 'weil die Schule renoviert wird', 'weil der Verein kein Geld hat'],
        'weil das Dach repariert wird'),
      mcq('H1-8', 'An welchem Tag fällt das Training aus?', ['freitags', 'dienstags', 'donnerstags'], 'freitags'),
      mcq('H1-9', 'Welchen Termin nimmt die Anruferin?', ['Montag um acht', 'Donnerstag um halb fünf', 'Dienstag um neun'], 'Montag um acht'),
      mcq('H1-10', 'Was muss sie mitbringen?', ['die Überweisung', 'den Ausweis', 'den Terminzettel'], 'die Überweisung')
    ]);

  const INTERVIEW = 'Interviewerin: Herr Kalb, Sie bauen seit fünfzehn Jahren Holzhäuser. Warum Holz? — Kalb: Weil ich es selbst bearbeiten kann. Beton muss ich bestellen und warten; eine Wand aus Holz plane ich am Abend und stelle sie am nächsten Tag. Das klingt romantisch, ist aber vor allem eine Frage der Zeit. Wenn ich drei Handwerker und einen Kran für einen Tag bezahle, will ich, dass an diesem Tag gearbeitet wird.\n\nInterviewerin: Und der Preis? — Kalb: Bei kleinen Häusern sind wir inzwischen günstiger als der Betonbau, weil wir trocken bauen und die Wände aus dem Werk kommen. Bei großen nicht: Da braucht es Statik, Brandschutz und manchmal ein zweites Gutachten, und das kostet. Ich sage den Leuten immer, sie sollen beide Angebote vergleichen, nicht die Bilder.\n\nInterviewerin: Man hört viel über Baufehler. — Kalb: Die meisten Fehler, die ich sehe, kommen nicht vom Material, sondern von der Eile. Wer ein Holzhaus in drei Monaten will, bekommt ein feuchtes. Wir planen mindestens sechs Monate Vorlauf, und wenn der Rohbau nicht steht, bauen wir im Winter gar nicht. Das ist unbequem und manchmal teuer für mich: In den zwei Wintermonaten entlasse ich niemanden, ich beschäftige die Leute im Werk.\n\nInterviewerin: Was raten Sie Bauherren? — Kalb: Besuchen Sie ein Haus, das zehn Jahre steht, und klopfen Sie an die Wand. Wer nur neugebaute Häuser ansieht, sieht Fassaden und keine Erfahrung. Fragen Sie nach der Heizung: Ein Holzhaus ist kein Passivhaus, es braucht eine Heizung wie jedes andere. Und fragen Sie, wer die Garantie gibt, wenn der Betrieb verkauft wird. Das ist die Frage, die niemand stellt. — Sie sagen also: nicht nur den Preis vergleichen. — Genau. Fragen Sie nach dem Dach, nach der Heizung und nach dem Grundstück. — Und woran merkt man, dass eine Baustelle gut ist? — Am Aufräumen. Wer jeden Abend das Holz sortiert, arbeitet auch am Tag sauber. — Und was sagen Sie Kunden, die wenig Geld haben? — Ich sage ihnen die Wahrheit: Ein Holzhaus ist am Anfang nicht billiger, aber es braucht weniger Heizung. Wer hundert Jahre rechnet, fährt mit Holz besser; wer in zehn Jahren verkauft, muss genauer rechnen. — Was würden Sie heute anders machen? — Ich habe damals die Fenster zu klein geplant und die Treppe zu steil gebaut. Ein Haus verzeiht keine Fehler, die man im Plan macht, und darum zeichnet man heute länger.';

  const hoeren2 = part(2, 'Informationen im Interview verstehen', 10,
    'مقابلة: ستة أسئلة فهم تفصيلي بثلاثة خيارات.',
    { type: 'interview', prompt: 'Sie hören ein Interview mit einem Bauunternehmer. Sie hören es einmal.',
      scripts: [{ id: 'interview', title: 'Interview: Häuser aus Holz', text: INTERVIEW }] },
    [
      mcq('H2-1', 'Warum arbeitet Herr Kalb gern mit Holz?',
        ['weil er es selbst bearbeiten kann', 'weil es billiger als Beton ist', 'weil es modern aussieht'],
        'weil er es selbst bearbeiten kann'),
      mcq('H2-2', 'Wie ist der Preis bei kleinen Häusern?',
        ['günstiger als im Betonbau', 'genauso teuer wie im Betonbau', 'deutlich teurer als im Betonbau'],
        'günstiger als im Betonbau'),
      mcq('H2-3', 'Was ist bei großen Häusern das Problem?',
        ['die Statik kostet Geld', 'es gibt kein Holz', 'die Kunden wollen Beton'],
        'die Statik kostet Geld'),
      mcq('H2-4', 'Woher kommen nach seiner Erfahrung die meisten Fehler?',
        ['von der Eile', 'vom Material', 'von den Bauherren'],
        'von der Eile'),
      mcq('H2-5', 'Was rät er Bauherren, sich anzusehen?',
        ['ein Haus, das zehn Jahre steht', 'ein neugebautes Haus', 'eine Fabrik für Holzwände'],
        'ein Haus, das zehn Jahre steht'),
      mcq('H2-6', 'Was sagt er über die Heizung?',
        ['Ein Holzhaus ist kein Passivhaus.', 'Ein Holzhaus braucht keine Heizung.', 'Ein Holzhaus heizt mit Holz.'],
        'Ein Holzhaus ist kein Passivhaus.')
    ]);

  const DISKUSSION = 'Moderatorin: Die Stadt will die Innenstadt autofrei machen. Drei Stimmen dazu, und nach jeder Runde eine Zahl. — Frau Ivers, Sie sprechen für den Einzelhandel.\n\nIvers: Ich habe nichts gegen eine ruhige Straße, im Gegenteil. Aber meine Kundschaft kommt mit dem Auto, und sie kommt nicht aus Neugier, sondern um zu kaufen, oft für die ganze Woche. Wenn ich die Parkplätze verliere und keine Lieferzone bekomme, verliere ich die Hälfte der Lieferungen; der Lieferant stellt nicht ab, wenn er nicht halten darf. Deshalb sage ich: erst die Zufahrt regeln, dann das Verbot. Und ich sage auch, was ich nicht brauche: keine sechzig Parkplätze, sondern zwanzig, aber an der richtigen Stelle.\n\nModeratorin: Herr Sander, Sie wohnen in der Straße. — Sander: Ich wohne seit dreißig Jahren dort und habe drei Wechsel erlebt: erst die Fußgängerzone, dann die Fahrradstraße, dann die Poller. Jedes Mal wurde gesagt, die Geschäfte sterben. Sie sind nicht gestorben, aber die Kinder spielen jetzt auf dem Gehweg, und in zehn Jahren wurde kein Kind auf dieser Straße angefahren. Für mich ist das der wichtigste Gewinn, wichtiger als Parkplätze. Was mich ärgert, ist nicht das Verbot, sondern die Kontrolle: Die Poller wurden dreimal angefahren, und niemand zahlte dafür.\n\nModeratorin: Frau Lucic, Sie planen für die Stadt. — Lucic: Beide haben recht, und deshalb reicht ein Verbot nicht. Wir planen in drei Etappen: zuerst die Durchfahrt begrenzen, dann die Parkplätze umlegen, dann die Straße umbauen. Wichtig sind die Zahlen davor und danach, sonst streiten wir über Gefühle. Wir zählen die Passanten, die Lieferzeiten und die Fahrräder, und wir veröffentlichen die Zahlen jedes Jahr.\n\nModeratorin: Wer kontrolliert das? — Lucic: Die Stadt, aber mit einer Auflage: Wenn die Frequenz im Handel nach zwei Jahren sinkt, wird die Zufahrt neu geregelt. Das steht im Beschluss, und darauf kann sich Frau Ivers berufen. — Ivers: Dann will ich die erste Zahl im Dezember sehen. — Lucic: Die kommt im Januar. — Moderatorin: Damit sind wir am Ende. Was würden Sie in den ersten sechs Monaten messen? — Kern: Die Zahl der Fahrten und die Zahl der Beschwerden. — Ivers: Den Lärm am Morgen und die Luft an der Schule. — Lucic: Die Fahrzeiten der Handwerker und die Plätze am Rand. — Moderatorin: Drei Zahlen, drei Pläne. Wir berichten im Frühling. — Kern: Eine Frage noch an Sie alle: Was passiert, wenn die Stadt nach zwei Jahren die Zahlen nicht erreicht? — Lucic: Dann kehren wir zum alten Plan zurück, aber ohne Vorwürfe. — Ivers: Und wir schreiben vorher auf, was dann gilt, damit niemand im Herbst neu streitet. — Kern: Genau das ist der Unterschied zwischen einem Versuch und einer Entscheidung. — Moderatorin: Damit danke ich Ihnen und schließe die Runde.';

  const hoeren3 = part(3, 'Aussagen in einer Diskussion verstehen', 7,
    'نقاش بثلاثة أصوات: ستة بنود تميّز من قال ماذا.',
    { type: 'discussion', prompt: 'Sie hören eine Diskussion über die autofreie Innenstadt. Sie hören sie einmal.',
      scripts: [{ id: 'diskussion', title: 'Diskussion: Autofreie Innenstadt', text: DISKUSSION }] },
    [
      mcq('H3-1', 'Was fordert Frau Ivers zuerst?',
        ['eine geregelte Zufahrt', 'das Ende des Einzelhandels', 'mehr Parkplätze in der ganzen Stadt'],
        'eine geregelte Zufahrt'),
      mcq('H3-2', 'Was fürchtet Frau Ivers?',
        ['dass die Lieferungen sie nicht mehr erreichen', 'dass die Mieten steigen', 'dass die Straße zu laut wird'],
        'dass die Lieferungen sie nicht mehr erreichen'),
      mcq('H3-3', 'Was sagt Herr Sander über die Geschäfte?',
        ['Sie haben die Veränderung überlebt.', 'Sie sind alle geschlossen worden.', 'Sie sind umgezogen.'],
        'Sie haben die Veränderung überlebt.'),
      mcq('H3-4', 'Was ist für Herrn Sander der wichtigste Gewinn?',
        ['die Sicherheit der Kinder', 'die neuen Parkplätze', 'die Ruhe am Abend'],
        'die Sicherheit der Kinder'),
      mcq('H3-5', 'Wie will Frau Lucic vorgehen?',
        ['in Schritten', 'sofort mit dem Verbot', 'gar nicht, sie lehnt den Plan ab'],
        'in Schritten'),
      mcq('H3-6', 'Wann wird die Zufahrt neu geregelt?',
        ['wenn die Frequenz im Handel sinkt', 'wenn die Kinder sich beschweren', 'nach sechs Monaten auf jeden Fall'],
        'wenn die Frequenz im Handel sinkt')
    ]);

  const VORTRAG = 'Ich spreche heute über das Schlafen, genauer: über die Frage, warum unsere Nächte kürzer geworden sind. Zwei Gründe werden immer genannt: das Licht und die Geräte. Beide sind richtig, aber sie erklären nicht alles. In einer Untersuchung mit achthundert Personen wurde nicht die Schlafdauer gemessen, sondern der Rhythmus. Das Ergebnis war überraschend: Die Personen schliefen im Schnitt sieben Stunden, also genug. Was fehlte, war die Regelmäßigkeit. Wer an fünf Tagen um sechs aufsteht und am Wochenende um zehn, verliert jeden Montag zwei Stunden — nicht Schlaf, sondern Schlafdruck.\n\nDer zweite Punkt ist die Temperatur. Ein kühler Raum hilft beim Einschlafen; wer bei dreiundzwanzig Grad schläft, wacht häufiger auf. Das ist keine neue Erkenntnis, aber sie wird selten angewandt: Wir heizen die Wohnung abends, wie wir sie tagsüber brauchen. Ein Grad weniger am Abend kostet nichts und wirkt in derselben Nacht.\n\nDer dritte Punkt betrifft die Gewohnheit. Das Bett ist zum Schlafen da, nicht zum Arbeiten und nicht zum Fernsehen. Wer im Bett die Mails liest, lernt dem Bett eine andere Bedeutung an; danach braucht er länger, um einzuschlafen. Das ist keine Moral, sondern eine Messung: In den Studien, die ich kenne, war der Unterschied nach zwei Wochen deutlich.\n\nWas folgt daraus? Erstens: Regelmäßigkeit schlägt Dauer. Zweitens: Licht am Morgen ist wirksamer als Dunkelheit am Abend. Drittens: Wer nachts aufwacht und wach bleibt, sollte aufstehen. Und viertens: Ein kurzes Nickerchen am Nachmittag ist kein Fehler, solange es vor vier Uhr endet.\n\nZum Schluss eine Warnung. Die Zahlen, die ich genannt habe, kommen aus kleinen Untersuchungen. Sie zeigen Richtungen, keine Gesetze. Wer nach zwei schlechten Nächten zum Arzt geht, bekommt kein Medikament, aber vielleicht einen Rat: feste Zeiten für zwei Wochen. Mehr verspreche ich nicht, und mehr braucht es meistens auch nicht. Zum Schluss noch eine Zahl: Wer sieben Stunden schläft, braucht am Morgen zwanzig Minuten weniger, um in Gang zu kommen. Das sind über das Jahr fast zwei Arbeitstage. Wer also sagt, für Schlaf habe er keine Zeit, verliert genau die Zeit, die er sparen will. Noch ein Wort zum Licht: Wer abends zwei Stunden vor dem Bildschirm sitzt, schläft später ein, auch wenn er müde ist. Das Licht sagt dem Körper, dass der Tag noch nicht zu Ende ist. Am einfachsten ist eine Regel: eine halbe Stunde vor dem Schlafen kein Bildschirm, und das Gerät bleibt außerhalb des Zimmers. Wer das zwei Wochen durchhält, merkt den Unterschied. Und wenn es nicht klappt, hilft kein Medikament, sondern ein anderer Abend. Ich danke Ihnen.';

  const hoeren4 = part(4, 'Vorträge verstehen', 10,
    'محاضرة: ثمانية بنود فهم تفصيلي.',
    { type: 'lecture', prompt: 'Sie hören einen Vortrag über das Schlafen. Sie hören ihn einmal.',
      scripts: [{ id: 'vortrag', title: 'Vortrag: Über das Schlafen', text: VORTRAG }] },
    [
      mcq('H4-1', 'Worüber spricht der Vortragende?',
        ['darüber, warum die Nächte kürzer geworden sind', 'über neue Medikamente gegen Schlaflosigkeit', 'über die Geschichte des Schlafens'],
        'darüber, warum die Nächte kürzer geworden sind'),
      mcq('H4-2', 'Was wurde in der Untersuchung gemessen?',
        ['der Rhythmus', 'nur die Schlafdauer', 'die Temperatur im Schlafzimmer'],
        'der Rhythmus'),
      mcq('H4-3', 'Was war das Ergebnis der Untersuchung?',
        ['Die Dauer reichte, die Regelmäßigkeit fehlte.', 'Alle schliefen zu wenig.', 'Licht spielte keine Rolle.'],
        'Die Dauer reichte, die Regelmäßigkeit fehlte.'),
      mcq('H4-4', 'Was passiert nach dem Vortrag jeden Montag?',
        ['Man verliert zwei Stunden Schlafdruck.', 'Man schläft besser als am Wochenende.', 'Man wird krank.'],
        'Man verliert zwei Stunden Schlafdruck.'),
      mcq('H4-5', 'Was ist die zweite Ursache?',
        ['die Temperatur', 'das Essen', 'der Lärm'],
        'die Temperatur'),
      mcq('H4-6', 'Was ist nach dem Vortrag wirksamer?',
        ['Licht am Morgen', 'Dunkelheit am Abend', 'ein warmes Zimmer'],
        'Licht am Morgen'),
      mcq('H4-7', 'Was soll man tun, wenn man nachts wach liegt?',
        ['aufstehen', 'im Bett bleiben und atmen', 'etwas essen'],
        'aufstehen'),
      mcq('H4-8', 'Wie ordnet der Vortragende seine Zahlen ein?',
        ['als Richtung, nicht als Gesetz', 'als sichere Regel', 'als unwichtig für den Alltag'],
        'als Richtung, nicht als Gesetz')
    ]);

  root.DW_EXAM_BANK = root.DW_EXAM_BANK || {};
  root.DW_EXAM_BANK.B2 = {
    level: 'B2',
    official: false,
    note: 'أوراق أصلية بشكل الامتحان، ليست أوراق غوته.',
    lesen: { module: 'lesen', minutes: 65, official: false, parts: [lesen1, lesen2, lesen3, lesen4, lesen5] },
    hoeren: { module: 'hoeren', minutes: 40, official: false, parts: [hoeren1, hoeren2, hoeren3, hoeren4] }
  };
})(typeof window !== 'undefined' ? window : global);

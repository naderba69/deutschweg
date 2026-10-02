/* Deutschweg — bounded local writing checker (PROMPT §9.2, D16, T56).
   Thirty high-precision patterns. Never rewrites. Never claims completeness.
   A false positive is as serious as a false negative — patterns stay closed-list. */
(function (DW) {
  function boundaryWord(word, flags) {
    return new RegExp('(^|[^\\p{L}\\p{N}])(' + word + ')(?=[^\\p{L}\\p{N}]|$)', flags || 'giu');
  }
  function hitsFrom(re, text, expect) {
    const out = [];
    re.lastIndex = 0;
    let m;
    const r = new RegExp(re.source, re.flags);
    while ((m = r.exec(text))) {
      out.push({ snippet: m[2] || m[1] || m[0], expect });
      if (!r.global) break;
    }
    return out;
  }

  const NOUNS = ['Zeit', 'Wasser', 'Vater', 'Name', 'Tag', 'Abend', 'Nacht', 'Schule', 'Straße', 'Mädchen', 'Buch', 'Herr', 'Frau', 'Mann', 'Kind', 'Jahr', 'Woche', 'Monat', 'Stunde', 'Deutschland', 'Zimmer', 'Wohnung', 'Vogel', 'Freund'];
  /* Morgen excluded on purpose: "morgen" is the adverb "tomorrow". */

  const SS_TO_SZ = {
    strasse: 'Straße', gross: 'groß', fuss: 'Fuß', heiss: 'heiß', weiss: 'weiß',
    gruss: 'Gruß', spass: 'Spaß', aussen: 'außen', draussen: 'draußen',
    schliessen: 'schließen', heissen: 'heißen'
  };
  const SZ_TO_SS = {
    muß: 'muss', daß: 'dass', fluß: 'Fluss', schloß: 'Schloss', naß: 'nass',
    kuß: 'Kuss', schluß: 'Schluss', riß: 'Riss', biß: 'Biss'
  };
  const UMLAUT = {
    madchen: 'Mädchen', maedchen: 'Mädchen', fur: 'für', uber: 'über', fuer: 'für',
    zuruck: 'zurück', fuenf: 'fünf', schoen: 'schön', koennen: 'können', muessen: 'müssen',
    wuerde: 'würde', hoeren: 'hören', oeffnen: 'öffnen', natuerlich: 'natürlich',
    aerger: 'Ärger', moegen: 'mögen', waere: 'wäre', aendern: 'ändern', gruessen: 'grüßen',
    spaet: 'spät', zaehlen: 'zählen'
  };
  const FINITE = new Set('bin bist ist sind seid habe hast hat haben habt gehe gehst geht gehen komme kommst kommt kommen heiße heißt heißen heisse heisst wohne wohnst wohnt wohnen mache machst macht machen lerne lernst lernt lernen trinke trinkst trinkt trinken kann kannst können muss musst müssen'.split(' '));
  const THIRD = 'hat|ist|geht|kommt|macht|spielt|wohnt|arbeitet|spricht|trinkt|isst|sieht|gibt|nimmt|fährt|liest|schreibt|lernt|bleibt|heißt|heisst';
  const INF = 'heißen|heissen|gehen|kommen|sein|haben|machen|wohnen|lernen|sprechen|trinken|essen|sehen|geben|nehmen|fahren|lesen|schreiben|bleiben|spielen|arbeiten';
  const V2VERBS = 'bin|bist|ist|sind|seid|habe|hast|hat|haben|habt|gehe|gehst|geht|gehen|komme|kommst|kommt|kommen|heiße|heißt|heißen|heisse|heisst|wohne|wohnst|wohnt|wohnen|mache|machst|macht|machen';

  const PATTERNS = [
    {
      id: 'orth.noun.lower', family: 'orthographie',
      rule: 'اسم معروف كُتب صغيرًا. الأسماء في الألمانية تُكتب كبيرة.',
      find(text) {
        const hits = [];
        NOUNS.forEach(n => {
          const re = boundaryWord(n.toLowerCase(), 'gu');
          let m;
          while ((m = re.exec(text))) hits.push({ snippet: m[2], expect: n });
        });
        return hits;
      }
    },
    {
      id: 'orth.sentence.lower', family: 'orthographie',
      rule: 'الجملة تبدأ بحرف صغير. أول حرف بعد النقطة كبير.',
      find(text) {
        const hits = [];
        const t = text.trim();
        if (/^\p{Ll}/u.test(t)) hits.push({ snippet: t.slice(0, 16), expect: 'حرف كبير في أول الجملة' });
        const re = /[.!?]\s+(\p{Ll}\p{L}*)/gu;
        let m;
        while ((m = re.exec(text))) {
          const before = text.slice(0, m.index);
          const token = (before.match(/(\S+)$/) || [''])[0];
          if (token.includes('.') || token.replace(/[.!?]+$/, '').length <= 2) continue;
          hits.push({ snippet: m[0], expect: 'حرف كبير بعد نهاية الجملة' });
        }
        return hits;
      }
    },
    {
      id: 'orth.ich.midcap', family: 'orthographie',
      rule: '«Ich» وسط الجملة تُكتب صغيرة. ليست اسمًا.',
      find(text) {
        const hits = [];
        const re = /(\S)\s+Ich(?=[^\p{L}]|$)/gu;
        let m;
        while ((m = re.exec(text))) {
          if ('.!?'.includes(m[1])) continue;
          hits.push({ snippet: m[0], expect: 'ich' });
        }
        return hits;
      }
    },
    {
      id: 'orth.ss.for.sz', family: 'orthographie',
      rule: 'في إملاء Goethe هذه الكلمة تُكتب بـ ß لا بـ ss.',
      find(text) {
        const hits = [];
        Object.keys(SS_TO_SZ).forEach(w => {
          const re = boundaryWord(w);
          let m;
          while ((m = re.exec(text))) hits.push({ snippet: m[2], expect: SS_TO_SZ[w] });
        });
        return hits;
      }
    },
    {
      id: 'orth.sz.for.ss', family: 'orthographie',
      rule: 'بعد الحركة القصيرة تُكتب ss. صورة ß هنا إملاء قديم.',
      find(text) {
        const hits = [];
        Object.keys(SZ_TO_SS).forEach(w => {
          const re = boundaryWord(w);
          let m;
          while ((m = re.exec(text))) hits.push({ snippet: m[2], expect: SZ_TO_SS[w] });
        });
        return hits;
      }
    },
    {
      id: 'orth.umlaut.missing', family: 'orthographie',
      rule: 'الكلمة على قائمة المدّ، والنقطتان (ä ö ü) ناقصتان.',
      find(text) {
        const hits = [];
        Object.keys(UMLAUT).forEach(w => {
          const re = boundaryWord(w);
          let m;
          while ((m = re.exec(text))) hits.push({ snippet: m[2], expect: UMLAUT[w] });
        });
        return hits;
      }
    },
    {
      id: 'dekl.guten.nacht', family: 'deklination',
      rule: 'مع Nacht نقول Gute لا Guten. التحية هنا مؤنثة.',
      find(text) {
        const re = /(^|[^\p{L}])(Guten\s+Nacht)(?=[^\p{L}]|$)/gu;
        return hitsFrom(re, text, 'Gute Nacht');
      }
    },
    {
      id: 'dekl.gute.daypart', family: 'deklination',
      rule: 'مع Morgen وTag وAbend نقول Guten لا Gute.',
      find(text) {
        const re = /(^|[^\p{L}])(Gute\s+(?:Morgen|Tag|Abend))(?=[^\p{L}]|$)/gu;
        return hitsFrom(re, text, 'Guten + وقت اليوم');
      }
    },
    {
      id: 'syntax.v2.adverb', family: 'wortstellung',
      rule: 'الفعل المصرّف هو الثاني. الظرف لا يقف بينهما هنا.',
      find(text) {
        const re = new RegExp('(^|[.!?]\\s+)(Ich|Du|Er|Sie|Es|Wir|Ihr)\\s+(heute|morgen|jetzt|nicht|immer|gern|oft)\\s+(' + V2VERBS + ')\\b', 'gu');
        const hits = [];
        let m;
        while ((m = re.exec(text))) hits.push({ snippet: m[0].trim(), expect: 'الفاعل ثم الفعل ثم الظرف' });
        return hits;
      }
    },
    {
      id: 'syntax.sub.verb.final', family: 'wortstellung',
      rule: 'بعد weil أو dass أو wenn أو obwohl الفعل المصرّف أخيرًا.',
      find(text) {
        const hits = [];
        const re = /\b(weil|dass|wenn|obwohl)\b([^.,!?]*)/giu;
        let m;
        while ((m = re.exec(text))) {
          const clause = m[2].trim();
          if (/\b(und|oder|aber|denn)\b/i.test(clause)) continue;
          const tokens = clause.split(/\s+/).filter(Boolean);
          if (tokens.length < 2) continue;
          const clean = tokens.map(t => t.replace(/[«»"“”]+/g, '').toLowerCase());
          const finIdx = clean.findIndex(t => FINITE.has(t));
          if (finIdx === -1) continue;
          if (finIdx !== clean.length - 1) hits.push({ snippet: (m[1] + ' ' + clause).slice(0, 90), expect: 'الفعل المصرّف في آخر الجملة التابعة' });
        }
        return hits;
      }
    },
    {
      id: 'orth.comma.sub', family: 'orthographie',
      rule: 'قبل weil وdass وwenn وobwohl توضع فاصلة.',
      find(text) {
        const hits = [];
        const re = /\b(weil|dass|wenn|obwohl)\b/giu;
        let m;
        while ((m = re.exec(text))) {
          if (m.index === 0) continue;
          const before = text.slice(0, m.index);
          if (/[,(\n]\s*$/.test(before) || /^\s*$/.test(before)) continue;
          hits.push({ snippet: text.slice(Math.max(0, m.index - 14), m.index + m[1].length).trim(), expect: 'فاصلة قبل ' + m[1] });
        }
        return hits;
      }
    },
    {
      id: 'praep.seit.temporal', family: 'präposition',
      rule: 'seit الزمنية تحكم الجر: Jahren لا Jahre.',
      find(text) {
        const re = /(^|[^\p{L}])(seit\s+(?:\S+\s+){0,3}(Jahre|Tage|Monate|Stunden|Minuten))(?=[^\p{L}]|$)/giu;
        return hitsFrom(re, text, 'صيغة الجر: Jahren / Tagen / Monaten');
      }
    },
    {
      id: 'praep.vor.temporal', family: 'präposition',
      rule: 'vor الزمنية تحكم الجر: Tagen لا Tage.',
      find(text) {
        const re = /(^|[^\p{L}])(vor\s+(?:\S+\s+){0,3}(Jahre|Tage|Monate|Stunden|Minuten))(?=[^\p{L}]|$)/giu;
        return hitsFrom(re, text, 'صيغة الجر: Tagen / Jahren');
      }
    },
    {
      id: 'praep.dative.article', family: 'präposition',
      rule: 'هذا الحرف يحكم الجر، والمقالة هنا ليست للجر.',
      find(text) {
        const re = /(^|[^\p{L}])((?:mit|von|zu|bei|nach|aus|seit|außer)\s+(?:die|das|einen|ein|eine))(?=[^\p{L}]|$)/giu;
        return hitsFrom(re, text, 'مقالة جر: dem / der / einem / einer');
      }
    },
    {
      id: 'praep.acc.article', family: 'präposition',
      rule: 'هذا الحرف يحكم النصب، والمقالة هنا للجر.',
      find(text) {
        const re = /(^|[^\p{L}])((?:für|durch|gegen|ohne|um)\s+(?:dem|einem|einer))(?=[^\p{L}]|$)/giu;
        return hitsFrom(re, text, 'مقالة نصب: den / die / das / einen');
      }
    },
    {
      id: 'konj.ich.third', family: 'konjugation',
      rule: 'بعد ich لا تأتي صيغة الغائب. ich hat ليست ألمانية.',
      find(text) {
        const re = new RegExp('(^|[^\\p{L}])(ich\\s+(?:' + THIRD + '))(?=[^\\p{L}]|$)', 'giu');
        return hitsFrom(re, text, 'صيغة ich: habe / bin / gehe / heiße');
      }
    },
    {
      id: 'konj.ich.inf', family: 'konjugation',
      rule: 'بعد ich لا يأتي المصدر. صرّف الفعل مع ich.',
      find(text) {
        const re = new RegExp('(^|[^\\p{L}])(ich\\s+(?:' + INF + '))(?=[^\\p{L}]|$)', 'giu');
        return hitsFrom(re, text, 'صيغة مصرّفة مع ich');
      }
    },
    {
      id: 'konj.du.inf', family: 'konjugation',
      rule: 'بعد du لا يأتي المصدر. صرّف الفعل مع du.',
      find(text) {
        const re = new RegExp('(^|[^\\p{L}])(du\\s+(?:' + INF + '))(?=[^\\p{L}]|$)', 'giu');
        return hitsFrom(re, text, 'صيغة مصرّفة مع du');
      }
    },
    {
      id: 'konj.wir.third', family: 'konjugation',
      rule: 'بعد wir لا تأتي صيغة المفرد الغائب.',
      find(text) {
        const re = /(^|[^\p{L}])(wir\s+(?:hat|ist|geht|kommt|macht|heißt|heisst|wohnt))(?=[^\p{L}]|$)/giu;
        return hitsFrom(re, text, 'wir haben / sind / gehen');
      }
    },
    {
      id: 'genus.impossible', family: 'genus',
      rule: 'هذه المقالة لا تجتمع مع هذا الاسم. الجنس خاطئ.',
      find(text) {
        const pairs = [
          ['der Mädchen', 'das Mädchen'], ['das Frau', 'die Frau'], ['das Mann', 'der Mann'],
          ['das Vater', 'der Vater'], ['die Vater', 'der Vater'], ['der Wasser', 'das Wasser'],
          ['die Wasser', 'das Wasser'], ['das Tag', 'der Tag'], ['die Tag', 'der Tag'],
          ['der Buch', 'das Buch'], ['die Buch', 'das Buch'], ['das Schule', 'die Schule'],
          ['das Nacht', 'die Nacht'], ['die Kind', 'das Kind'], ['der Kind', 'das Kind'],
          ['das Zeit', 'die Zeit'], ['den Zeit', 'die Zeit']
        ];
        const hits = [];
        pairs.forEach(([bad, good]) => {
          const re = new RegExp('(^|[^\\p{L}])(' + bad.replace(' ', '\\s+') + ')(?=[^\\p{L}]|$)', 'gu');
          let m;
          while ((m = re.exec(text))) hits.push({ snippet: m[2], expect: good });
        });
        return hits;
      }
    },
    {
      id: 'kasus.esgibt', family: 'kasus',
      rule: 'es gibt يتبعه النصب، لا مقالة الجر.',
      find(text) {
        const re = /(^|[^\p{L}])(es\s+gibt\s+(?:dem|einem|einer))(?=[^\p{L}]|$)/giu;
        return hitsFrom(re, text, 'es gibt + den / einen / eine');
      }
    },
    {
      id: 'dekl.ein.adje', family: 'deklination',
      rule: 'بعد ein لا تنتهي الصفة بـ e. النهاية -er أو -es.',
      find(text) {
        const re = /(^|[^\p{L}])(ein\s+(?:schöne|gute|alte|neue|kleine|große|nette|deutsche|interessante|junge|lange|kurze|müde))(?=[^\p{L}]|$)/giu;
        return hitsFrom(re, text, 'ein schöner / ein schönes');
      }
    },
    {
      id: 'plural.cardinal', family: 'plural',
      rule: 'بعد العدد من اثنين يأتي الجمع، لا المفرد.',
      find(text) {
        const re = /(^|[^\p{L}])((?:zwei|drei|vier|fünf|sechs|sieben|acht|neun|zehn)\s+(?:Kind|Jahr|Tag|Buch|Frau|Mann|Name|Schule|Vater|Nacht))(?=[^\p{L}]|$)/giu;
        return hitsFrom(re, text, 'صيغة الجمع: Kinder / Jahre / Tage');
      }
    },
    {
      id: 'wortstellung.wfrage', family: 'wortstellung',
      rule: 'سؤال البداية: الفعل ثانيًا، لا بعد الضمير مباشرة.',
      find(text) {
        const re = /(^|[.!?]\s+)((?:Wie|Was|Wo|Wer|Wann|Woher|Wohin)\s+(?:ich|du|er|sie|es|wir|ihr)\s+(?:heiße|heißt|heisse|heisst|bin|bist|ist|habe|hast|hat|gehe|gehst|geht))(?=[^\p{L}]|$)/gu;
        return hitsFrom(re, text, 'Wie heißt du?');
      }
    },
    {
      id: 'syntax.two.finite', family: 'konjugation',
      rule: 'فعلان مصرّفان متجاوران. هذا بناء غير ممكن هنا.',
      find(text) {
        const re = /(^|[^\p{L}])((?:bin|ist|sind|habe|hat|haben)\s+(?:bin|ist|sind|habe|hat|haben|gehe|geht|gehen))(?=[^\p{L}]|$)/giu;
        const hits = [];
        let m;
        while ((m = re.exec(text))) {
          const after = text.slice(m.index + m[0].length).trim();
          if (/^(wollen|können|müssen|sollen|dürfen)\b/i.test(after)) continue;
          hits.push({ snippet: m[2], expect: 'فعل مصرّف واحد في هذا الموضع' });
        }
        return hits;
      }
    },
    {
      id: 'praep.mit.kein', family: 'präposition',
      rule: 'بعد mit يأتي keinem أو keiner، لا kein وحدها.',
      find(text) {
        const re = /(^|[^\p{L}])(mit\s+kein)(?=[^\p{L}]|$)/giu;
        return hitsFrom(re, text, 'mit keinem / mit keiner');
      }
    },
    {
      id: 'konj.ihr.third', family: 'konjugation',
      rule: 'بعد ihr لا تأتي صيغة هو. الصيغة seid أو habt.',
      find(text) {
        const re = /(^|[^\p{L}])(ihr\s+(?:hat|ist|geht|kommt|macht|wohnt))(?=[^\p{L}]|$)/giu;
        return hitsFrom(re, text, 'ihr seid / ihr habt / ihr geht');
      }
    },
    {
      id: 'orth.sz.initial', family: 'orthographie',
      rule: 'ß لا تبدأ بها كلمة ألمانية. هي بديل داخل الكلمة.',
      find(text) {
        const re = /(^|[^\p{L}])(ß\p{L}+)/gu;
        return hitsFrom(re, text, 'لا تبدأ الكلمة بـ ß');
      }
    },
    {
      id: 'kasus.mit.acc', family: 'kasus',
      rule: 'بعد mit الضمير في الجر: mir لا mich.',
      find(text) {
        const re = /(^|[^\p{L}])(mit\s+(?:mich|dich|ihn))(?=[^\p{L}]|$)/giu;
        return hitsFrom(re, text, 'mit mir / mit dir / mit ihm');
      }
    },
    {
      id: 'praep.seit.acc', family: 'präposition',
      rule: 'seit لا يتبعه ضمير نصب ولا مقالة نصب.',
      find(text) {
        const re = /(^|[^\p{L}])(seit\s+(?:mich|dich|ihn|einen|die|das))(?=[^\p{L}]|$)/giu;
        return hitsFrom(re, text, 'seit + جر: seit dem / seit einem Jahr');
      }
    }
  ];

  function check(text) {
    const src = String(text || '');
    const hits = [];
    PATTERNS.forEach(p => {
      (p.find(src) || []).forEach(h => hits.push({
        id: p.id, family: p.family, rule: p.rule, snippet: h.snippet, expect: h.expect
      }));
    });
    return hits;
  }

  function framing(n) {
    const num = Number(n) || 0;
    return 'فحصتُ هذه الأنماط الثلاثين. وجدتُ ' + num + '. أي شيء خارج هذه القائمة لم أفحصه.';
  }

  DW.checker = { PATTERNS, check, framing, COUNT: PATTERNS.length };
})(window.DW = window.DW || {});

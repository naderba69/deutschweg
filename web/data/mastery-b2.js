/* Deutschweg — the §12.5 mastery tasks (B2).
 *
 * The readiness gate reads six evidences out of the portfolio (DW.exam
 * .masteryEvidence). Four of them are not an exam paper and not a lesson: a
 * three-to-four-minute summary of the novella, a twenty-minute discussion, a
 * 400-word essay and a formal letter, and a ninety-second explanation of a rule
 * without notes. This file declares those tasks — their prompts, their floors and
 * what each one feeds — so the screen, the engine and the measure read one list.
 *
 * These tasks are **not** a Goethe paper and are never presented as one. */
(function (root) {
  const M = {
    level: 'B2',
    official: false,
    note: 'مهام الإتقان شواهد على الجهوزية (§12.5)، وليست ورقة امتحان ولا درجة رسمية. الفاحص المحلي يعدّ ما يجده ولا يصحّح النص.',
    tasks: [
      {
        id: 'b2-m1', kind: 'novel-summary', tag: 'novel-summary', title: 'ملخّص النوفيلة',
        prompt: 'Erzählen Sie „Das Zimmer in Sousse“ nach: die sechs Kapitel in drei bis vier Minuten.',
        ar: 'لخّص فصول «Das Zimmer in Sousse» الستة من ذاكرتك، ثلاث إلى أربع دقائق، بلا ملاحظات.',
        seconds: [180, 240], notes: false
      },
      {
        id: 'b2-m2', kind: 'discussion', tag: 'discussion', title: 'مناقشة عشرون دقيقة',
        prompt: 'Halten Ihre Argumente zwanzig Minuten? Wählen Sie ein Thema aus dem Sprechbank und sprechen Sie durch.',
        ar: 'موضوع من بنك المناقشة، وعشرون دقيقة كاملة بعباراتك. وقفة طويلة في الوسط تُلغي الشاهد: الشاهد قدرة على الاستمرار، لا مقطع محفوظ.',
        seconds: [1200, null]
      },
      {
        id: 'b2-m3', kind: 'essay', tag: 'essay', title: 'مقال أربع مئة كلمة',
        prompt: 'Erörtern Sie: Soll der öffentliche Verkehr in den Städten kostenlos sein?',
        ar: 'أربع نقاط محتوى، وأربع مئة كلمة على الأقل، وخمس وأربعون دقيقة كحدّ أقصى. الفاحص يعدّ أنواع الجمل التابعة والأخطاء، ونقاط المحتوى تشطبها أنت: لا أحد يصحّح نصك عنك.',
        minutes: 45, minWords: 400, points: [
          'die eigene Position in einem Satz',
          'ein Argument mit Beispiel',
          'einen Einwand entkräften',
          'ein Fazit, das die Position wiederholt'
        ]
      },
      {
        id: 'b2-m4', kind: 'formal-letter', tag: 'formal-letter', title: 'رسالة رسمية',
        prompt: 'Beschweren Sie sich formell über eine falsche Rechnung und fordern Sie eine Korrektur mit Frist.',
        ar: 'رسالة رسمية مئة كلمة على الأقل. الغرض محقَّق إن طلبت التصحيح وسندته وحدّدت مهلة. محور واحد عند الصفر يُصفّر المهمة (§12.1).',
        minWords: 100, points: [
          'der Grund der Beschwerde mit Beleg',
          'die Forderung',
          'die Frist'
        ]
      },
      {
        id: 'b2-m5', kind: 'explain-rule', tag: 'explain-rule', title: 'اشرح قاعدة بلا ملاحظات',
        prompt: 'Erklären Sie den Unterschied zwischen Passiv und Zustandspassiv — ohne Notizen, mindestens neunzig Sekunden.',
        ar: 'اشرح قاعدة من قواعدك بكلماتك، تسعين ثانية على الأقل، وبلا ملاحظات. الورقة تُلغي الشاهد؛ الشرح من الذاكرة هو القدرة.',
        seconds: [90, null], notes: false
      }
    ]
  };
  root.DW_MASTERY = { B2: M };
})(typeof window !== 'undefined' ? window : global);

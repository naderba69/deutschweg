# AGENTS.md — قواعد العمل لأي وكيل يدخل هذا المستودع

> **English summary:** operating rules for agents. Read this, then `HANDOFF.md`, then run the package commands. Push to the session branch after every completed change and report the hash. Never merge without the owner's explicit word «ادمج». Quality and the gates come before speed.

## الترتيب عند الدخول

1. اقرأ هذا الملف، ثم [`HANDOFF.md`](HANDOFF.md) (الحالة الحالية وما يلي)، ثم [`PRODUCTION.md`](PRODUCTION.md) (جدول الشحن) و[`DECISIONS-PENDING.md`](DECISIONS-PENDING.md) (القرارات المسجّلة).
2. المواصفة الكاملة في [`PROMPT.md`](PROMPT.md). §22 منها يحكم: لا تسأل المتعلم أسئلة بيداغوجية — قرّر، سجّل في `DECISIONS-PENDING.md`، وواصل.
3. نفّذ أوامر الحزمة قبل أي تعديل، لتعرف خط الأساس:

```bash
npm i                 # مرة واحدة (jsdom للاختبارات فقط)
npm run build         # يولّد web/data/catalog.js من المواصفات؛ يجب ألا يغيّر git status
npm run validate      # §19 على الدرس الأول وعلى الكتالوج + بوابة الخريطة
npm test              # كل الاختبارات: الوحدات + jsdom
```

## قواعد git (ملزمة)

- العمل على فرع الجلسة فقط (`arena/<id>-deutschweg`). لا فروع أخرى.
- **بعد كل تعديل مكتمل:** `git add -A && git commit` ثم `git push origin HEAD`، وأبلغ المالك بالـ hash **بلا استئذان**.
- «تعديل مكتمل» = البناء أخضر (`npm run build` ثم `npm run validate` ثم `npm test`) ولا ملفات مولَّدة غير متزامنة مع مواصفاتها.
- PR واحد مفتوح من فرع الجلسة إلى `main`. يبقى مفتوحًا. **لا دمج إلا إذا قال المالك «ادمج» حرفيًا.**
- `node_modules/` خارج git. `web/data/catalog.js` مولَّد لكنه مُلتزَم (التطبيق يقرأه مباشرة بلا بناء على الخادم).

## قواعد المحتوى (ملزمة)

- **الجودة والبوابة قبل السرعة.** درس لا يمر على `validate-lesson.js` لا يُشحن. مستوى لا يمر على بوابة التغطية لا يُوصف بأنه مسلَّم.
- الكلمة لا تُحفظ وحدها: كل عنصر معجمي يحمل الأداة والجمع (أو التصريف)، والمعنى، ومثالًا ألمانيًا، والخطأ الذي ينتجه الناطق بالعربية، وسبب الخطأ، وعائلته (§10.1).
- حيلة الذاكرة مربوطة بالصيغة نفسها، ولا تتكرر حرفيًا في درس آخر؛ الفاحص يرفض التكرار.
- لا تغذية راجعة عامة. كل خطأ له تفسيره.
- العربية لا تدخل `zeigt.de` ولا الأمثلة الألمانية. الألمانية لا تدخل الشرح إلا كشاهد.
- صف الخريطة (`web/data/syllabus.js`) لا يُعدَّل لتجميل رقم. إن اقتضى تعديلٌ تصريحَ صفٍّ، يُسجَّل في `DECISIONS-PENDING.md` برقم وسبب قبل التعديل.
- لا نص منسوخ من كتاب أو موقع. النصوص والجمل تُؤلَّف.
- رقم بلا مصدر لا يُطبع ولا يُعرض.

## وحدة الإنتاج

وحدة الشحن ستة دروس كما في `PRODUCTION.md`. كل وحدة: مواصفة ← `npm run build` ← `npm run validate` ← `npm test` ← commit ← push ← الإبلاغ بالـ hash ← تحديث `HANDOFF.md`.

## ما لا يُبنى

لا خادم، لا حساب، لا تتبّع، لا شبكة أثناء الدراسة، لا نقاط ولا شارات ولا سلاسل، لا نسبة دروس مكتملة، لا «B2 في ستة أشهر». التفصيل في `PROMPT.md` §5 و§18.

# محفّز الاستمرار الاحترافي — PROFESSIONAL_CONTINUATION_PROMPT_AR

> **كيف يُستعمل هذا الملف:** اقرأه كاملًا قبل أي عمل. هو المرجع الوحيد المحدَّث لحالة مشاريع `deutschweg`. كل إيداع في المستودع يُرفَق بتحديث هذا الملف **داخل نفس الـ commit** — أي أن أي commit تراه في الفرع هو نقطة استئناف صحيحة. إن انقطعت الجلسة، ابدأ من «§2 الحالة الدقيقة» ثم «§5 إجراء الجولة» ثم «§4 المرشحون للأدوار القادمة».
>
> أوامر الإقصاء السريع:
> ```bash
> cd /home/user/deutschweg
> git status            # المتوقع: نظيف
> npm install --silent && npm test   # المتوقع: 393/0
> npm start             # معاينة: python http.server 8080 --bind 0.0.0.0 --directory web
> ```

---

## §0 هوية المشروع والمهام القائمة

`naderba69/deutschweg` — تطبيق **Deutschweg**: محلي أول، يعمل دون اتصال (PWA)، يُقرِّب متعلّمًا واحدًا من A0 إلى B2 بالألمانية؛ واجهة عربية ومحتوى ألماني؛ بلا خادم ولا حساب ولا تلمترية ولا شبكة أثناء الدراسة. التقدّم قائم على القدرة (E1/E1a/E2/E3؛ البوابة تُفتح عند E3 فقط؛ الإجابة المكشوفة بالتلميح تُسجَّل E1a ولا تُحتسب). الوحدات 6 دروس، ولا تُفتح وحدة قبل إغلاق بوابة السابقة، والمحتوى المُؤلَّف غير المُتقَّم ≥18 درسًا أمام المتعلم، ودرس التالي مشروط بـ E1+ دون مساعدة.

**الفرع:** `arena/01a10089-deutschweg` (عمل هذا مقيَّد به — لا تُبدِّل فرعًا ولا تَدمج ولا تُسوِّي قسريًا). **Origin:** `https://github.com/naderba69/deutschweg.git`.
**ال_instruction الثابت:** «كل إضافة أو تعديل ارفعها مباشرة» — commit + push لكل جولة خضراء فورًا، **مصحوبًا بتحديث هذا الملف في نفس الـ commit**، ثم تصلح PR #7 إن لزم.

## §1 قواعد العمل الثابتة (لا تُخالف)

1. **إيداع فوري:** جولة خضراء = commit + push مباشرة. لا تُجمِّع جولتين. لا تانتظِر أمرًا جديدًا.
2. **متزامنة الملف:** كل commit يُحدِّث `PROFESSIONAL_CONTINUATION_PROMPT_AR.md` (§2 الأرقام، §4 المرشحون، §5.4 ذيل السجل) قبل الإرسال.
3. **الأرضيات أرضية صعود** (ratchet): تُكتب على قياس أخضر فقط، وبالترتيب: `b2-reading` ← `reading-levels` ← `corpus`؛ و`ladder` مستقلة. كل measure يرفض `--write-floor` عند `fail > 0`.
4. **فحص قبل كتابة:** كل كلمة جديدة تُفحص بمستواها (`tools/known.js` للقراءة والسلّم، القياس الصارم لـ B2) — **لا مجهول جديد** في أي نص. ارفض ما ترفضه القوائم (§7) واستبدِله بكلمة معلومة، ولا تُصرِّ على المرفوض.
5. **تمديد لا استبدال:** ال anchored على ذيل النص منسوخ حرفيًا (capitalization مهمة)، وتأكد أن الـ anchor يظهر مرة واحدة (`count===1`) قبل الاستبدال. اقتباس المكتبة مختلط (`'` و `"`): لا تضع علامة الاقتباس الافتتاحية في الـ anchor أبدًا.
6. **الخزّان:** كل تعديل لملف في `ASSETS` يرفع `CACHE` في `web/sw.js` بدرجة واحدة (`deutschweg-vN`) — المثبَّت لا يعيد التحقق من البايتات المخزَّنة.
7. **لا تُحتسب الكلمات المضافة بالحساب — بالقياس:** عدّ الكلمات بـ`wc` بعد الكتابة؛ الأرضية = أصغر طول فعلي.
8. **النوفيلة:** «Ich bleibe noch.» تبقى آخر كلمات النوفيلة؛ أي تمديد للفصل الأخير يحدث **قبل فقرته الأخيرة**.
9. **AUDIT.md:** قسم عربي جديد لكل جولة في نهاية الملف، بأرقام مقروءة من `tools/*-floor.json` المكتوبة حديثًا (لا تتنبّأ بأرقام لم تُكتب).
10. **PR #7:** بعد كل جولة: `gh pr view 7 --json body -q .body > /tmp/pr7.md` ثم استبدالات محسوبة العدد (assert count==1) ثم `gh api -X PATCH repos/naderba69/deutschweg/pulls/7 --input /tmp/pr7.json`. لا تستخدم `gh pr edit`.
11. **`/tmp` يموت مع كل دوران:** أعد بناء المساعدات عند البدء (§6.3).

## §2 الحالة الدقيقة (آخر تحقّق: بعد جولة مقالات 301، شجرة نظيفة، origin مطابق، التطبيق 200)

| البوابة | القيمة |
|---|---|
| **npm test** | **393/0** = 66 · 58 · 39 · **158** · 14 · 45 · 13 |
| **المكتبة** | **32,435 كلمة / 136 نصًا** (A1 20 · A2 30 · B1 60 · B2 26) |
| **قراءة أقصر نص** | **A1 206** (4,169 w · 1000‰) · **A2 207** (6,310 · 990‰) · **B1 208** (12,852 · 990‰) · **B2 301** (9,104 · 1000‰) |
| **b2-reading** | مقالات 20 · أقصر **301** · مجموع **6,020** (العشرون كلها 301) · فصول 6 · أقصر **514** · مجموع **3,084** (الستة عند 514) · 1000‰/1000‰ |
| **سلّم السماع** | A1 **728 w / 91** · A2 **736 / 92** · B1 **872 / 109** · B2 **1,000 / 125** · 33 بندًا (32 صوتًا · 8/مستوى) · أسئلة 64 · تسلسل صاعد **91 < 92 < 109 < 125** |
| **المعجم (corpus)** | مميّز **9,683** · تراكمي **365,629** · مفقود 0 |
| **الخزّان** | `deutschweg-v76` |
| **98% rule** | محقّق في المستويات الأربعة (أدنى: A1 100% · A2 99.1% · B1 99% · B2 100%) |
| **الأرضيات المكتوبة** | `reading-levels {A1 20/4169/206/1000, A2 30/6310/207/990, B1 60/12852/208/990, B2 26/9104/301/1000}` · `b2-reading {301, 514, 6020, 3084, 1000, 1000}` · `corpus {9683, 365629}` · `ladder {33, 32, 8/8/8/8, 728/91, 736/92, 872/109, 1000/125}` · `b2-exam {…2053, 2176…}` |
| **PR** | **#7 مفتوح** — «Deutschweg — B1 مغلق (100%) · B2: قراءة وسماع بمقاس حقيقي · §12.5 قابلة للفتح (393 فحصًا)» — body ≈4,860 حرفًا، محدَّث مع كل جولة |
| **المعاينة** | `npm start` → `deutschweg-app-*` (puerto 8080، اربط `0.0.0.0`) |

**حالة المخرجات التعليمية (لم تتغيّر):** A0 90/90 · A1 818/710 · A2 1,183 = معلَن 100% · **B1 مغلق** 2,813 = 100% (71 درسًا) · B2 قيد الإنتاج — شكل **(C)**: 20 ورشة × (40 مؤلَّة + 50 مادة) = 1,800 مقاسًا · authored 800 (سقف القالب) · خيارات 60 · ورقة امتحان 60 بندًا (lesen 2,053 / hören 2,176).

## §3 ما أُنجز (سجل مكثَّف)

- إغلاق A0/A1/A2/B1 (المعلن 100% لكل منها) وبوابة B1 مغلقة بقدرات.
- بناء B2 بالشكل (C) بعد قرار المالك عبر ask_user (20 ورشة، 800 مؤلَّة + 1,000 مادة = 1,800).
- مكتبة قراءة 136 نصًا / 32,171 كلمة بقاعدة 98% في المستويات الأربعة.
- سلّم استماع حقيقي 33 بندًا (كان 9–27 كلمة) بالتسلسل الصاعد المفحوص.
- قفلات (guards): كل measure العشرة يرفض `--write-floor` على فشل — أُثبت حقنًا.
- خزّان offline حتى v47 مع ASSETS مكتملة (انظر §9 لقصة v10→v11).
- 393 فحصًا أخضر، وPR #7 مفتوح ومحدَّث مع كل إيداع.
- جولات هذا الفرع (الأحدث أولًا): `ff21135` فصول 514 · `5c6a22e` قراءة 206/207/208 · `b070c8e` فصول 513 · `a522ae5` مقالات 300 · `9e3f4bb` سلّم B1 109 · B2 125 · `00c42fc` سلّم A2 92 · `8de933a` سلّم A1 91 · `d5fb0d1` فصول 512 · `0efd3aa` مقالات 299 · `12801f6` سلّم A2 91 · `8a9cce1` سلّم A1 90 · `1832f04` فصول 511 · `6c12aef` سلّم B1 108 · B2 124 · `c13534f` سلّم A2 90 · `3d86dfd` سلّم A1 89 · `667bae7` مقالات 298 · `02d04b4` مزامنة الملف · `b817256` فصول 510 · `9548bf7` سلّم A2 89 · `d6f6cdd` سلّم A1 88 · B1 107 · B2 123 · `f6041dd` مقالات 297 · `131a951` فصول 509 · `b2999fc` قراءة 205/206/207 · `50cf017` سلّم B1 106 · B2 122 · `4475ace` فصول 508 · `b5e25f3` مقالات 296 · `afdc6d5` سلّم A2 88 · `6dd50e5` سلّم A1 87 · `17d1ee9` فصول 507 · `7d5f6eb` محفّز الاستمرار · `9a299af` نوفيلة 505→506 · `c1471e8` قراءة 204/205/206 (35 نصًا) · `a14efdc` سلّم B1 105 · B2 121 · `33a343c` نوفيلة 504→505 · `faa99d4` تصحيح AUDIT · `d0c9d09` مقالات 294→295 · `7af6a8c` سلّم A1 86 · A2 87 · `822be93` نوفيلة 503→504 · `bbbf447` قراءة 203/204/205 · `fabd5f9` نوفيلة 502→503 · `14c7fe0` سلّم A1 85 · B1 104 · B2 120 · `81c1583` مقالات 293→294 · `925d71e` نوفيلة 501→502 · `05a9b3e` قراءة 202/203/204 · `7eadf7d` سلّم A1 84 · B2 119 · `4a01b9f` نوفيلة 497→501 · `0a5f4ef` مقالات 290→293 · `9241b9e` قراءة 201/202/203.

## §4 ما يبقى في طور الإنجاز + المرشحون للأدوار القادمة

**المفتوح دائمًا:** رفع **أضعف عمود مقيس** ثم إيداع فوري. الأعمدة الأربعة: قراءة ثلاثية (A1/A2/B1) · مقالات B2 · فصول B2 · سلّم السماع. البِنى تتضخّم أسفل الحد (كل جولة +1 ترفع مجموعة كاملة فتندمج مع المجموعة التالية) — لذلك تُقارن الجولات الكبيرة بجولات الخفيفة (سلّم/فصول) للحفاظ على الإيقاع.

**مرشحون جاهزون (قياس طازج بعد جولة فصول 512):**

| الدورة | الحجم | التفاصيل |
|---|---|---|
| فصول →515 | **6 نصوص** | الستة كلها 514 → +1 لكل منها؛ «Ich bleibe noch.» تبقى الخاتمة |
| مقالات →302 | **20 مقالًا** | العشرون كلها 301 → +1 لكل منها |
| سلّم B1 →109 · B2 →125 | 4+4 سكربتات | B1: أربعة عند 108 · B2: أربعة عند 124 — حافظ على التسلسل بعد هبوطها |
| سلّم A1 →92 · A2 →93 | 8+8 سكربتات | الثمانية في A1 كلها 91 وفي A2 كلها 92 — أي رفع الآن يرفع المستوى كله؛ يُعاد التقييم بعد جولات القراءة |
| قراءة الدورة التالية | **67 نصًا** (الأثقل — تضخّمت) | A1 →207 = 15 · A2 →208 = 19 · B1 →209 = 33 — راجع §10: بدِّل بأدوار خفيفة أو اقفز +2 |

**ترتيب التفضيل المعتاد:** خفيف أولًا (فصول/سلّم) ⇄ مقالات ⇄ قراءة كبيرة، مع الحفاظ على `A1 < A2 < B1 < B2` صارمًا في القراءة والتسلسل الصاعد للسلّم (تعادل مسموح historically عند `80 = 80`، والأفضل تفاديته).

## §5 إجراء الجولة خطوة بخطوة (الوصيلة)

1. **تازيم طازج** للأعمدة (سكربت قراءة المكتبة + `tools/ladder-floor.json` + b2-reading) — لا تعتمد تازيمًا قديمًا.
2. **اقرأ الذيل** لكل النصوص المرشحة (آخر ~90 حرفًا) — لا تخمّن الذيل أبدًا.
3. **اكتب المرشحات** (+1/+جملة) ثم **اصقِنها** في إجراء واحد: `count===1` لكل anchor + فحص مجهول جديد عند المستوى + delta ≥ المطلوب.
4. **طبّق** بسكربت node (assert قبل الكتابة) + `node --check` على كل ملف JS.
5. **الأرضيات** بالترتيب (§6.2) ثم **ارفع CACHE** درجة.
6. **`npm test`** — يجب 393/0. إن فشل: توقّف وأصلِح (لا تحمل فشلًا أبدًا).
7. **اقرأ الأرقام المكتوبة فعليًا** من `tools/*-floor.json` + `grep -c` لأي عدد تذكّره — ثم اكتب قسم AUDIT.
8. **حدِّث هذا الملف** (§2 + §4 + §5.4).
9. **commit (مع AUDIT + هذا الملف) + push فورًا.**
10. **رقّم PR #7** (استبدالات assert-count) وتحقق بـ `grep` بعد الـ PATCH.

### §5.4 ذيل السجل (آخر إيداع: `ff21135` — وهذا الملف يُرفق بكل ما بعده)

`ff21135 5c6a22e b070c8e 00c42fc 8de933a d5fb0d1 0efd3aa 12801f6 8a9cce1 1832f04 6c12aef c13534f 3d86dfd 667bae7 02d04b4 b817256 9548bf7 d6f6cdd f6041dd 131a951 b2999fc 50cf017 4475ace b5e25f3 afdc6d5 6dd50e5 17d1ee9 7d5f6eb 9a299af c1471e8 a14efdc 33a343c faa99d4 d0c9d09 7af6a8c 822be93 bbbf447 fabd5f9 14c7fe0 81c1583 925d71e 05a9b3e 7eadf7d 4a01b9f 0a5f4ef 9241b9e`

## §6 الأدوات والأرضيات والمساعدات

### §6.1 measures (عشرة، في `tools/`) — كلها ترفض `--write-floor` عند فشل
`measure-reading-levels.js` · `measure-b2-reading.js` · `measure-corpus.js` · `measure-ladder.js` · `measure-b2-exam.js` (+productive · readiness · وفحوص p3/p4). `npm test` = 7 مجموعات (66·58·39·158·14·45·13).

### §6.2 ترتيب كتابة الأرضيات
`b2-reading` ← `reading-levels` ← `corpus` (ترابط: b2-reading يقرأ نفسه في reading-levels) · `ladder` مستقلة · إن لم يتغيّر شيء (سلّم خارج corpus) فلا تكتب.

### §6.3 مساعدات `/tmp` (تعيد بناؤها بعد أي restore أو بداية جلسة)
```bash
# 1) فاحص التغطية (قراءة بأربعة مستويات)
cat > /tmp/cover.js <<'EOF'
const fs=require('fs'),path=require('path');
const root='/home/user/deutschweg';
const win={};
['web/data/inventory.js','web/data/chunks.js','web/data/syllabus.js','web/data/a0-u1-l1.js',
 'web/data/catalog.js','web/data/library.js','web/data/comprehension.js']
 .forEach(f=>new Function('window',fs.readFileSync(path.join(root,f),'utf8'))(win));
const K=require(path.join(root,'tools/known.js'));
function check(text,lv){
  const set=K.knownWords(win,{upto:lv});
  const c=K.coverage(set,text);
  return {tokens:c.tokens,permille:Math.round(c.ratio*1000),unknown:c.unknown};
}
module.exports={win,K,check};
EOF
# 2) القياس الصارم لـ B2 (أشدّ على المشاريع، أشدّ من known.js)
node -e "
const fs=require('fs');
const src=fs.readFileSync('tools/measure-b2-reading.js','utf8');
const cut=src.indexOf('const B2 = win.DW_LIBRARY.B2;');
let head=src.slice(0,cut);
head=head.replace(/require\('\.\//g,\"require('/home/user/deutschweg/tools/\");
head=head.replace(\"path.resolve(__dirname, '..')\",\"'/home/user/deutschweg'\");
fs.writeFileSync('/tmp/b2known.js',head+'\nmodule.exports={unknownWords,KNOWN,STOP};');
console.log('b2known ok');"
# 3) جسم PR
gh pr view 7 --json body -q .body > /tmp/pr7.md
```

### §6.4 قياسات نصية مفيدة
- المكتبة: اقرأ الذيل من الـdump ثم `tail+',` أو `tail+",` (مختلط) — **لا تذيل الاقتباس الافتتاحي**.
- `measure-b2-reading.js --json` غير موجود؛ استخرج الأطوال بسكربت قراءة `DW_LIBRARY` في نافذة stub (انظر §6.3).
- فحص مجهول B2 للمرشح: `require('/tmp/b2known.js').unknownWords(نص)` → يجب `[]`.

## §7 قوائم الرفض (لا تُعدَّل إليها — استبدل المرفوض)

- **A1:** versorgt · packe · tragen · fest · zettel · montagmorgen · sorgen · dran · vorher · **froh** · **bereit** · **still** · **gemeinsam**(لا عند A1/A2).
- **A2 (بالإضافة):** hütte · leise · bildschirm · tastatur · streichen · hinein · solche · darum · klopfen · aufgehängt · wände · gestrichen · gehängt · hineingelegt · aufgeschrieben · denselben · gekocht · seitdem · hinfahren · stolz · geholt · jederzeit · app · diesmal · achtzehn · bäckerin · dahin · fast · winkt · wärmer · **still** · **gemeinsam** · jederzeit.
- **B1 (بالإضافة):** stellplätze · innenstadt · darin · büroarbeit · dazukommen · ausprobiert · faden · annimmt · zurückzuschauen · nachweis · wiederkommen · öffnungszeiten · lüftet · drauf · tor · wochenlang · beilegen · handgepäck · beutel · samstagmorgen · getestet · weglassen · abgeheftet · freundlichkeit · akte · investition · redakteur · streuen · waschbecken · ablage · gelöscht · geordnet · sortiert · abgelegt · busfahrer · halbjahr · prüfbar · einzug · küchentür · rückzahlung · taktik · schiefgong · sonnenaufgang · kopfschmerzen · beeren · verteilen · verbreiten · vorhänge · bohrer · **geklopft** · vorher.
- **B2 صارم (بالإضافة):** herum · seither · erhoben · zeitraum · gezählt · schichten · verändert · damals · gehängt · absicht · verwandelt · erspart · angewöhnt · sonntagabend · anzusehen · montagmorgen · ergibt · überschrift · verdient · not · zusagen · ansehen · bewerbungsgespräch · arbeitstag · gemessen · unangenehm · aushält · gewonnen · beitrag · unspektakulär · geklingelt · gegrüßt · eingeschaltet · unbequem · vorsatz · ansehe · ausreden · aussieht · planbar · ferienwohnungen · bürgermeister · achtzehn · ungewohnt · gereicht · durchgestrichen · versprach · **Formalität** · **weiterhin** · **gemeinsam**.
- **النوفيلة:** roch · schuhgeschäft · heimweg · freitagabend · vierten · umzugstag · obersten · theke · monatsgeldes · geräusche · tor · samstagmorgen · aßen · verließ · zwischenzeit · brett · feuchtigkeit · stempelte · tropfte.
- **أخرى:** أسماء مخترعة (hamburg · wolf · bello ليست في A1؛ berlin · frankfurt · meier موجودة). كلمات جديدة مكتسبة حتى الآن مُدقَّقة: `besitzt` `dünner` `lache` `schaffe` `festen` `kalten` `all` `braune` `runden` `späten` `grauen` (كلها صيغ/عائلات معلَنة).

## §8 القرارات المُثبَتة (لا تُعاد مناقشتها)

- **B2 = شكل (C)** (قرار المالك): 40 كلمة مؤلَّة في قائمة الورشة + الباقي يحمله مادة الورشة ويُقاس بقياس المادة. ليس (A) توسيع الخريطة ولا (B) رفع نطاق الخطوة.
- **Goethe A1:** «انتِجها كلها» — أُنجزت كل النتائج المتبقية (`156bb23`). ملف PDF إن أعاد أحدهم تشغيل المطابقة.
- التقدّم قدراتي (E1/E1a/E2/E3) — لا نسب تقدّم بالوقت.
- محتوى ألماني فقط في نصوص المتعلم؛ العربية للواجهة والتوجيه.
- الكلمات المادّية لا تدخل `wortschatz`.
- AUDIT أقسام تاريخية لا تُعدَّل إلا للخطأ الصريح (erratum).
- `VOCAB_CEIL` = 40 · الورشة على سقف القالب (DECISIONS 34).

## §9 الاستعادة بعد خلل (Restores — سُجِّل 15 حتى الآن؛ الأخير #15 في 2026-10-06 (الإمضاء الكامل: HEAD عند `268c599` · 148 غير ملتزم · node_modules و`/tmp` ممسوحتان · الخادم معطّل)؛ وقبلها #14 منتصف الجولة — HEAD عند `268c599` · /tmp ممسوحة · الخادم معطّل، وتعديلات الجولة غير الملتزم بها بقيت على القرص؛ `fetch` ثم `reset --mixed` إلى origin حفظها كاملة))

الـ restore يُرجِّع شجرة العمل للخلف وقد يمسح ref و`/tmp` ويقتل السيرفر:
```bash
cd /home/user/deutschweg
git fetch origin        # أولاً — restore #4 حذف ref التتبّع فشل reset بـ unknown revision
git reset --mixed -q origin/arena/01a10089-deutschweg
git status --short      # إن كان نظيفًا فالشجرة مطابقة أصلًا (وإن كان خلف: git checkout origin/… -- <ملفات قديمة>)
npm install --silent && npm test    # 393/0
npm start               # السيرفر ميّت عادةً
# أعد بناء المساعدات §6.3 ثم جسم PR §6.3-3
```
لا تَدمج ولا تُسوِّي قسريًا أبدًا. الأسماء المكتسبة الجديدة تبقى في الملفات المكتوبة (الأرضيات جزء من الـ commit).

## §10 فخاخ موثّقة (مرَّ بها فعليًا)

- **رقم الخزّان في PR لا يُحدَّث تلقائيًا** (مرَّ في جولات السلّم الأربع 2026-10-06): جولات السلّم رفعت الخزّان v68→v71 ورقّعت سطر السلّم فقط، فبقي الـ PR يقول v68 حتى صُحِّح مع جولة المقالات (v72). القاعدة: كل رقعة PR تتحقق بـgrep من الـ body الجديد أن `**v<N>**` و`v12–v<N>` يطابقان `web/sw.js` الحالي، وأن لا v-قديم بقيت.
- أرضية خُفِضت في جولة فاشلة → صار كل measure يرفض الكتابة على فشل.
- `coverage()` النتيجة الفارغة تبدو صحيحة: احكِم بـ`permille===1000` أو `String(c.unknown)`.
- الـ anchor الناقص أو المكسور: «لا شيء يُكتب إذا خرجت المشاكل قبل الكتابة» — assert دائمًا.
- استبدال ≠ تمديد؛ والأرضية تُحسب بالقياس لا بالجمع.
- `"\n"` خام في استبدال بايثون = سطر حقيقي داخل نص JS → `node --check` بعد كل وصلات.
- اقتباس مختلط في `library.js` — جرّب الذيل مع `',` ثم `",`.
- `gh pr edit` لا يُحدِّث إلا باستدعاء `gh api -X PATCH`.
- خطوط الأنابيب إلى `tail` تبتلع رمز الخروج — لا تَمرِر بوابة عبر `tail`.
- قياسان مختلفان: شروِع B2 بالقياس الصارم نفسه، وA1/A2/B1 بـ`known.js`.
- AUDIT ينبّأ بأرقام لم تُكتب (مرَّ مرتين) → اقرأ الـ floor المكتوب حديثًا دائمًا.
- الخزّان: 18 إيداعًا كانت مرئية فقط بعد v11 — ارفع CACHE مع كل تعديل مُدرَج في ASSETS.
- تضخّم المجموعات أسفل الحدّ: جولة قراءة واحدة قد تصبح 46 نصًا — بدِّل بأدوار خفيفة أو اقفز +2/+3.
- تعديل منتصف الجملة: `n.slice(o.length)` يزاحم عندما يختلف الطرفان — احسب delta على النصّين كاملين.
- **فشل بايثون لتحديث هذا الملف لا يوقف سلسلة الـ commit** (بلا set -e) — راقب سطر PROBLEMS قبل `git commit`؛ وإن فاتك ذلك أصلِح الملف في commit تالٍ فورًا (حدث في `b817256`).
- `wäschst`/المشاريع: استخدم القياس الصارم على الكلمات المضافة لا على الطرفين فقط.

## §11 الاختبارات والمعاينة والمخرجات

- **npm test** = 393/0 شرط أي إيداع (7 مجموعات — عدّها كما في §2).
- **المعاينة:** `npm start` (يربط 0.0.0.0:8080)؛ الرابط يُقدَّم للمستخدم تلقائيًا.
- **الاختبارات p3-unit = 158** تفحص بنية الوحدات؛ p4-unit = 39.
- **PR #7** هو واجهة العمل العامة — بقيته المرقّمة يجب أن تعكس الأرقام بعد كل جولة.

---
*آخر تحديث للملف: مع جولة مقالات 301 (393/0 · 32,435 · قراءة 206/207/208/301 · فصول 514 · سلّم 91/92/109/125 · 9,683/365,629 · v76 · استعادات 15).

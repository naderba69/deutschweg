# مطابقة قائمة غوته A1 — قياس، لا ادّعاء (2026-10-03)

الملف الرسمي `Goethe-Zertifikat A1 Start Deutsch 1 — Wortliste` **لم يُدخل المستودع**: هو
منشور محمي بحقوق غوته-إنستيتوت. الأداة تقرأ نسخة نصّية خارج المستودع، والوحيد الذي
يُسجَّل هنا هو **الفجوة**: ما لا يحمله التطبيق.

```bash
GOETHE_A1_LIST=/path/a1_headwords.txt GOETHE_A1_GROUPS=/path/a1_groups.txt \
  node tools/match-goethe-a1.js --write-gap
```

## مقياسان، وكلاهما مطبوع

| المقياس | معناه |
|---|---|
| **headword** | البند موجود ككلمة مؤلَّفة في قائمة كلمات (واجهة الاستقبال، مع معناها وعلّة خطئها) |
| **material** | البند يُلقاه المتعلم في جملة: مثال كلمة، أو سؤال، أو سماع، أو نصّ قراءة A1 |

الثاني أوسع من الأول عن قصد: قائمة غوته تشترط فهمًا **استقباليًا** فقط («Alle aufgeführten
Wörter sollten passiv verstanden werden»)، فظهورُ الكلمة في جملة يقرؤها المتعلم استقبالٌ
حقيقي — لكنه ليس حفظًا موجّهًا، ولذلك لا يُدمج المقياسان في رقم واحد.

## النتيجة المقيسة

| المجموعة | البنود | كلمة مؤلَّفة | تُلقى في مادة | لا تُلقى |
|---|---|---|---|---|
| القائمة الأبجدية | 678 نصًّا | **384 (57%)** | **482 (71%)** | 196 (29%) |
| مجموعات الكلمات (أرقام، أيام، أشهر، فصول، ألوان، جهات، مقاييس) | 95 | 56 (59%) | **95 (100%)** | 0 |
| **المجموع** | **773** | 440 (57%) | **577 (75%)** | **196 (25%)** |

> **حدّ الكتابة:** 678 هو عدد السطور في النسخة النصّية التي قُرئت، والملف الرسمي يقول «circa
> 650». الفرق (~4%) ناتج عن الترقيم الضمني للنسخة؛ الرقم المعتمد في الجدول هو ما قِيس، لا ما
> ادّعاه الملف.

## ما أُغلق في هذه الجولة

مجموعات الكلمات كانت **59%**، وصارت **100%**:

- **الأرقام** (14 · 15 · 19 · 20-40-70-90 · 100 · 1000 · Million · Milliarde · dreißig)
  دخلت درس الأرقام `a0-u1-l2` ككلمات مؤلَّفة بأداة ومعنى وعلّة خطأ. صار الدرس 27 كلمة،
  وA0 كله **90/90 = 100%** من تصريح خريطته.
- **الأشهر والفصول** (Feb–Dez · Frühjahr · Sonnabend) دخلت أمثلة `a1-u2-l4` في جملها
  نفسها: «Der Monat Februar hat achtundzwanzig Tage.» · «Im September beginnt der Herbst.»
- **المقاييس** (Gramm · Pfund · Kilo · Liter · Prozent · Meter · Kilometer) دخلت أمثل
  الطعام والتسوّق والطريق.
- **الألوان** (blau · schwarz · gelb · grau) دخلت درس الجمع والملابس `a1-u2-l6`.
- **الجهات** (Norden · Süden · Westen · Osten) دخلت درس الطريق `a1-u4-l3`.
- **Europa** و**Geschwister** و**Großeltern** دخلت `a0-u1-l4` و`a0-u1-l5` ككلمات مؤلَّفة.

## الفجوة الباقية — 196 بندًا في القائمة الأبجدية

محفوظة سطرًا سطرًا في [`tools/goethe-a1-gap.txt`](goethe-a1-gap.txt). لا يُقال «A1 مطابق
لقائمة غوته» قبل أن تنزل هذه إلى ما يمكن الدفاع عنه. التوزيع يبيّن أين ينبغي أن يعمل
المحتوى التالي:

| الثيمة في القائمة | أمثلة من الفجوة | البيت المناسب |
|---|---|---|
| البريد والاتصال | der Absender · die Postleitzahl · der Anrufbeantworter · die Vorwahl · die Durchsage · die Ansage · der Anschluss | درس جديد: البريد والهاتف |
| الخدمات والمصارف | das Konto · überweisen · der Automat · die Auskunft · die Anzeige · der Prospekt · die Rezeption · das Praktikum | درس جديد: في المكتب والمصرف |
| المدرسة والتعلّم | der Kindergarten · der Schüler · das Studium · der Student · die Information · die Aufgabe (مؤلفة) | وحدة A1: التعلّم |
| السكن | das Apartment · der Aufzug · der Herd · die Größe (مؤلفة) · die Ordnung · die Möbel (مؤلفة) | توسعة `a1-u4-l1` |
| المطعم والطعام | das Restaurant · das Lokal · der Schinken · die Pommes frites | توسعة `a1-u3-l1` |
| الحواس والجسم | das Haar · der Mund · die Farbe | توسعة `a1-u4-l2` |
| صفات ومرادفات شائعة | bekannt · böse · lustig · wichtig · möglich · einfach · klar · falsch · glauben · vielleicht | تُوزَّع على دروس A1 القائمة |
| السفر والقِطارات | der Bahnsteig · das Gleis · die S-Bahn · die Straßenbahn · die Autobahn · der Lkw · das Ticket · abfliegen · der Abflug · die Ankunft · der Ausflug | توسعة `a1-u4-l3` ودرس السفر |

**قيد بنيوي معلَن:** كل درس A1 عنده 28 كلمة و7 خطوات Wortschatz و31–33 خطوة من 36. إدخال
الـ196 كلمة مؤلَّفة يحتاج إمّا خطوات Wortschatz إضافية (سقف جديد للخطوات) أو وحدة A1 جديدة
على الخريطة، أو إدخالها أمثلةً وموادَّ كما فُعل بمجموعات الكلمات. القرار للمالك، وهو مسجّل في
[`DECISIONS-PENDING.md`](../DECISIONS-PENDING.md).

## البوابة

`tools/match-goethe-a1.js` يطبع ثلاث بوابات ويفشل تحتها (`FLOOR` في الملف):
57% كلمة مؤلَّفة · 75% مجموع المادة · 100% مجموعات. الأرقام لا تُخفَّض لتُنجح البناء؛
تُرفع فقط. والأداة لا تعمل في CI بلا الملف، لذا ليست داخل `npm test`: تُشغَّل يدويًا قبل أي
إعلان عن التغطية.

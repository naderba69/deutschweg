# نشر الموقع على GitHub Pages

الموقع ملفات ساكنة داخل `web/`. لا بناء، ولا خادم، ولا قاعدة بيانات. النشر يستغرق دقيقة.

## الطريق الأول — بلا أي ملف جديد (الأسرع)

1. افتح: `https://github.com/naderba69/deutschweg/settings/pages`
2. عند **Build and deployment → Source** اختر: **Deploy from a branch**.
3. عند **Branch** اختر: `main` و **Folder**: `/web` ثم **Save**.

بعد دقيقة يصير الموقع على:

**https://naderba69.github.io/deutschweg/**

كل دمج في `main` يعيد النشر وحده. هذا الطريق لا يحتاج أي صلاحية خاصة.

## الطريق الثاني — عبر GitHub Actions

استعمله إن أردت لوحة نشر وسجلّ نشر. أنشئ الملف `.github/workflows/pages.yml` بهذا النص من واجهة GitHub (Add file → Create new file):

```yaml
name: Publish to GitHub Pages

on:
  push:
    branches: [main]
    paths:
      - 'web/**'
      - '.github/workflows/pages.yml'
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - name: Configure Pages
        uses: actions/configure-pages@v5
        with:
          enablement: true
      - name: Upload web/ as the site
        uses: actions/upload-pages-artifact@v3
        with:
          path: web
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

ثم: `Settings → Pages → Source: GitHub Actions`.

> لماذا لا يوجد هذا الملف في المستودع؟ لأن رمز تطبيق GitHub المستخدم في هذه الجلسة لا يملك صلاحية `workflows`، فيرفض النظام رفع ملفات داخل `.github/workflows/`. النص جاهز أعلاه، ولصقه من المتصفح يملك كل الصلاحيات.

## بعد النشر

- **أندرويد:** افتح الرابط في كروم ← ⋮ ← «تثبيت التطبيق».
- **آيفون:** افتحه في سفاري ← زر المشاركة ← «إضافة إلى الشاشة الرئيسية».

بعد التثبيت يعمل التطبيق دون إنترنت. أول تشغيل يحتاج الشبكة مرة واحدة فقط.

## تحذير النسخة القديمة

كان `sw.js` يخزّن الصفحة أولًا (cache-first)، فمن ثبّت نسخة قديمة قد يبقى عليها. الآن الصفحة تُجلب من الشبكة أولًا (`network-first`) وتُخزَّن للتشغيل دون إنترنت، وبقية الملفات cache-first. ورمز الذاكرة `CACHE` يُرفع مع كل تغيير في `web/` حتى لا يعلق المتصفح.

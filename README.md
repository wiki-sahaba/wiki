<div dir="rtl" align="right">

# 📖 دانشنامه صحابه

> **دانشنامه‌ای جامع درباره صحابه رسول خدا ﷺ —基于 Astro + TypeScript + SCSS**

سایت دانشنامه صحابه، یک دانشنامهٔ متن‌محور و پاسخ‌گرا است که با فریم‌ورک **Astro** ساخته شده. هدف آن ارائهٔ اطلاعات موثق دربارهٔ صحابه پیامبر اسلام صلی الله علیه وسلم به شکلی مدرن، سریع و زیبا است.

---

## ✨ ویژگی‌ها

| ویژگی | توضیح |
|-------|-------|
| ⚡ **سرعت بالا** | استاتیک‌سایت با Astro — بدون جاوااسکریپت اضافه |
| 🌓 **حالت شب/روز** | دکمهٔ تغییر تم در نوار کناری |
| 📱 **طراحی واکنش‌گرا** | دسکتاپ و موبایل با چیدمان کاملاً متفاوت |
| 🎨 **رنگ‌بندی اختصاصی** | تم کرمـز و طلایی با متغیرهای CSS |
| ♿ **دسترسی‌پذیری** | تگ‌های معنایی، RTL کامل برای فارسی/عربی |
| 🧩 **قابل توسعه** | کامپوننت‌های مدولار Astro |

---

## 🏗 ساختار پروژه

```
sahaba/
├── src/
│   ├── components/          # کامپوننت‌های Astro
│   │   └── icons/           # آیکون‌های SVG (وکتور، ذخیره‌شده در پروژه)
│   │       ├── MoonIcon.astro
│   │       ├── SunIcon.astro
│   │       ├── HeadsetIcon.astro
│   │       ├── LayersIcon.astro
│   │       └── QuestionIcon.astro
│   ├── layouts/
│   │   └── MainLayout.astro # قالب اصلی با هدر و فوتر
│   ├── pages/
│   │   └── index.astro      # صفحهٔ اصلی
│   └── styles/
│       └── global.scss      # متغیرهای رنگ، استایل کارت، RTL
├── public/                   # فایل‌های استاتیک
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 راه‌اندازی

### پیش‌نیازها

- **Node.js** ≥ 18
- **npm** یا **pnpm**

### نصب و اجرا

```bash
# کلون کردن مخزن
git clone https://github.com/your-username/sahaba.git
cd sahaba

# نصب وابستگی‌ها
npm install

# اجرای سرور توسعه
npm run dev
```

مرورگر را در `http://localhost:4321` باز کنید.

### ساخت نسخهٔ نهایی

```bash
npm run build
npm run preview
```

خروجی در پوشهٔ `dist/` قرار می‌گیرد — آمادهٔ استقرار روی **Vercel**، **Netlify** یا هر هاست استاتیک.

---

## 🎨 تم و رنگ‌بندی

رنگ‌ها در `src/styles/global.scss` با متغیرهای CSS تعریف شده‌اند:

| متغیر | مقدار | کاربرد |
|-------|-------|--------|
| `--color-crimson` | `#5a0d0d` | پس‌زمینهٔ بدنه (قرمز تیره) |
| `--color-background` | `#fafafa` | پس‌زمینهٔ کارت (سفید گرم) |
| `--color-foreground` | `#171717` | رنگ متن اصلی |
| `--color-gold` | `#d4af37` | رنگ طلایی برای آیکون‌ها و عنوان‌ها |

طرح **دسکتاپ**: کارت سفید با حاشیه‌های گرد (۲۴px) و نوار کرمـز در دو طرف. نوار کناری سمت چپ با آیکون‌های طلایی.

طرح **موبایل**: کارت تمام‌عرض، بدون حاشیه و بدون نوار کناری.

---

## 🧭 نوار کناری (SideNav)

سه گزینه در نوار کناری سمت چپ:

| # | عنوان | آیکون | توضیح |
|---|-------|-------|-------|
| ۱ | **شب/روز** | 🌙→☀️ | تغییر تم با هاور (ماه→خورشید) |
| ۲ | **تماس با ما** | 🎧 | هدست با میکروفون |
| ۳ | **پروژه‌های دیگر** | 📚 | لینک به پروژه‌های مرتبط (تب جدید) |
| ۴ | **درباره دانشنامه** | ❔ | اطلاعات دربارهٔ دانشنامه |

تولتیپ‌ها با فلش به سمت آیکون و متنی که به صورت CSS خالص تغییر می‌کند.

---

## 🌐 استقرار (Deployment)

### گزینه‌های پیشنهادی

| پلتفرم | دستور build | پوشهٔ خروجی |
|--------|-------------|-------------|
| [Vercel](https://vercel.com) | `npm run build` | `dist/` |
| [Netlify](https://netlify.com) | `npm run build` | `dist/` |
| [Cloudflare Pages](https://pages.cloudflare.com) | `npm run build` | `dist/` |

### استقرار روی Vercel

```bash
npm i -g vercel
vercel --prod
```

یا از Vercel Dashboard → Import Project استفاده کنید.

---

## 🛠 تکنولوژی‌ها

<div align="center">

| | تکنولوژی | کاربرد |
|---|----------|--------|
| ![astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=fff) | **Astro 5** | فریم‌ورک اصلی — build-time rendering |
| ![typescript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff) | **TypeScript** | تایپ‌سیفتی و توسعهٔ امن |
| ![scss](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=fff) | **SCSS** | استایل‌نویسی پیشرفته با nesting و variables |

</div>

---

## 📄 مجوز

این پروژه برای استفادهٔ شخصی و عمومی منتشر شده است.

---

<div align="center">

**دانشنامه صحابه** — یادمان یاران رسول خدا ﷺ

</div>

</div>

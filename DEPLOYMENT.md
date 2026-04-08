# 🚀 نشر BrandOlogy على Vercel

## المتطلبات
- حساب على [Vercel](https://vercel.com)
- حساب على [Supabase](https://supabase.com)
- الكود مرفوع على GitHub

---

## خطوات النشر

### 1️⃣ ربط المشروع بـ Vercel
1. اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard)
2. اضغط **Add New Project**
3. اختر **Import Git Repository**
4. ابحث عن `BrandOlogy` واختره
5. اضغط **Import**

### 2️⃣ إضافة متغيرات البيئة (البرامج البيئية)
1. بعد استيراد المشروع، اضغط على **Settings**
2. اختر **Environment Variables** من القائمة اليسرى
3. أضف المتغيرات التالية:

#### المتغير الأول:
- **Name:** `NEXT_PUBLIC_SUPABASE_URL`
- **Value:** ضع رابط Supabase الخاص بك
  - مثال: `https://hvnkcilglwflkiaghcjb.supabase.co`
- اضغط **Save**

#### المتغير الثاني:
- **Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value:** ضع المفتاح الخاص بك من Supabase Settings → API
- اضغط **Save**

### 3️⃣ النشر الأول
1. اضغط **Deploy**
2. انتظر حتى ينتهي البناء (Build)
3. سيتم إنشاء رابط مؤقت مثل: `https://brandology.vercel.app`

### 4️⃣ (اختياري) ربط نطاق مخصص
1. في Settings → Domains
2. أضف نطاقك الخاص (مثل: `brandology.com`)

---

## ✅ التحقق من النشر

زر الموقع على الرابط الذي قدمه Vercel:
- ✓ هل تحميل الصفحة الرئيسية يعمل؟
- ✓ هل النماذج (Forms) تعمل؟
- ✓ هل الـ Database (Supabase) يحفظ البيانات؟

اذا كان كل شيء يعمل ✅، معناه النشر نجح!

---

## 🔧 استكشاف الأخطاء

إذا ظهرت أخطاء:

### خطأ: "supabaseUrl is required"
- ✓ تأكد أنك أضفت `NEXT_PUBLIC_SUPABASE_URL` في Environment Variables
- ✓ تأكد من أن القيمة صحيحة (بدون مسافات)
- ✓ أعد النشر بعد الإضافة

### خطأ: "تحويل البيانات فشل"
- ❌ قد تكون مفاتيح Supabase خاطئة
- ✓ تحقق من أن `NEXT_PUBLIC_SUPABASE_ANON_KEY` صحيح

---

## 📚 المراجع
- [Vercel Docs](https://vercel.com/docs)
- [Supabase Setup](https://supabase.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

**آخر تحديث:** April 8, 2026

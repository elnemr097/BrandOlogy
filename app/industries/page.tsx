import type { Metadata } from "next";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GradientText from "@/components/shared/GradientText";
import GlassCard from "@/components/ui/GlassCard";
import LeadForm from "@/components/ui/LeadForm";
import { INDUSTRIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "القطاعات",
  description: "نخدم أكثر من 9 قطاعات في المملكة العربية السعودية بحلول رقمية متكاملة",
};

const industryDetails: Record<
  string,
  { bullets: string[] }
> = {
  "الشركات المؤسسية": {
    bullets: [
      "أتمتة العمليات الداخلية وتوفير الوقت",
      "لوحات تحكم وتقارير ذكية للإدارة",
      "حلول CRM مخصصة لفرق المبيعات",
    ],
  },
  "العقارات": {
    bullets: [
      "أتمتة واتساب لمتابعة العملاء المحتملين",
      "CRM مخصص لإدارة الصفقات والعقارات",
      "إعلانات تستهدف المشترين والمستثمرين",
    ],
  },
  "المطاعم والكافيهات": {
    bullets: [
      "إدارة السوشيال ميديا وزيادة الحجوزات",
      "محتوى فيديو وصور احترافية لزيادة الطلب",
      "نظام حجوزات تلقائي عبر واتساب",
    ],
  },
  "العيادات الطبية": {
    bullets: [
      "أتمتة المواعيد والتذكيرات التلقائية",
      "تقليل نسبة الغياب وإدارة قوائم الانتظار",
      "تسويق رقمي موجّه لاستقطاب مرضى جدد",
    ],
  },
  "اللوجستيك والشحن": {
    bullets: [
      "بوت واتساب لتتبع الشحنات تلقائياً",
      "أتمتة التواصل مع العملاء والموردين",
      "تقليل تكاليف التشغيل بأتمتة المهام اليدوية",
    ],
  },
  "المتاجر الإلكترونية": {
    bullets: [
      "إعادة بناء المتجر لرفع معدل التحويل",
      "حملات إعلانية مستهدفة على Meta وGoogle",
      "أتمتة استرداد سلة الشراء المهجورة",
    ],
  },
  "المراكز التعليمية": {
    bullets: [
      "تسويق رقمي لزيادة التسجيلات",
      "بوت واتساب للرد على الاستفسارات تلقائياً",
      "إدارة محتوى سوشيال ميديا تعليمي جذاب",
    ],
  },
  "شركات المقاولات": {
    bullets: [
      "بناء هوية رقمية احترافية وموقع متكامل",
      "توليد عملاء محتملين عبر الإعلانات المدفوعة",
      "أتمتة متابعة العروض والعقود",
    ],
  },
  "رواد الأعمال": {
    bullets: [
      "إطلاق منتجاتك رقمياً بأسرع وقت",
      "بناء البراند الشخصي وزيادة المتابعين",
      "أدوات أتمتة تتيح لك التركيز على النمو",
    ],
  },
};

export default function IndustriesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 hero-glow text-center">
        <div className="max-w-4xl mx-auto">
          <GradientText as="h1" className="text-4xl md:text-6xl font-bold mb-6">
            القطاعات التي نخدمها
          </GradientText>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            خبرة عميقة في أكثر من 9 قطاعات — حلول مصمّمة لطبيعة كل صناعة
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => {
            const detail = industryDetails[industry.label];
            return (
              <GlassCard key={industry.label} className="p-8 flex flex-col gap-4" hover>
                <div className="text-5xl mb-2">{industry.icon}</div>
                <h2 className="text-xl font-bold text-[#f0f9ff]">{industry.label}</h2>
                {detail && (
                  <ul className="flex flex-col gap-2 mt-1">
                    {detail.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm text-[#94a3b8]"
                      >
                        <span className="text-[#00d4c8] mt-0.5 shrink-0">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </GlassCard>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Lead Form */}
      <SectionWrapper>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#f0f9ff]">
            هل قطاعك في القائمة؟ تواصل معنا
          </h2>
          <LeadForm source="industries" />
        </div>
      </SectionWrapper>
    </div>
  );
}

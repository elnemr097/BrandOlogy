import type { Metadata } from "next";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GradientText from "@/components/shared/GradientText";
import GlassCard from "@/components/ui/GlassCard";
import LeadForm from "@/components/ui/LeadForm";
import { METRICS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "أعمالنا",
  description: "أرقام حقيقية من عملاء حقيقيين — نتائج موثّقة عبر قطاعات متعددة",
};

const caseStudies = [
  {
    category: "عقارات",
    title: "أتمتة مبيعات شركة عقارية كبرى",
    result: "+40% صفقات",
    description:
      "ربطنا بوت واتساب ذكي بنظام CRM مخصص لتتبع العملاء المحتملين تلقائياً — تضاعفت الصفقات المُغلقة خلال 3 أشهر.",
    color: "#00d4c8",
  },
  {
    category: "مطاعم وكافيهات",
    title: "سوشيال ميديا لسلسلة كافيهات",
    result: "+60% متابعين",
    description:
      "أطلقنا استراتيجية محتوى متكاملة مع ريلز احترافية أسبوعية — تضاعف المتابعون وارتفعت الحجوزات بشكل ملحوظ.",
    color: "#f59e0b",
  },
  {
    category: "متاجر إلكترونية",
    title: "إعادة بناء متجر إلكتروني",
    result: "1% → 8% تحويل",
    description:
      "أعدنا تصميم المتجر وبنيته التقنية بالكامل — ارتفع معدل التحويل 8 أضعاف خلال الشهر الأول من الإطلاق.",
    color: "#8b5cf6",
  },
  {
    category: "عيادات طبية",
    title: "أتمتة المواعيد لعيادة متخصصة",
    result: "‑70% no-shows",
    description:
      "نظام تذكير تلقائي عبر واتساب مع إدارة ذكية للمواعيد — تراجعت نسبة الغياب وارتفعت كفاءة الكوادر الطبية.",
    color: "#ef4444",
  },
  {
    category: "لوجستيك وشحن",
    title: "بوت واتساب لشركة لوجستيك",
    result: "3 موظفين وفّرنا",
    description:
      "بوت ذكي يتولى الرد على استفسارات التتبع والشحن تلقائياً — وفّرنا تكلفة 3 موظفين دعم عملاء كاملة.",
    color: "#3b82f6",
  },
  {
    category: "مراكز تعليمية",
    title: "تسويق رقمي لمركز تعليمي",
    result: "+120% تسجيلات",
    description:
      "حملة إعلانية مدفوعة مع محتوى سوشيال ميديا مستهدف — تضاعفت التسجيلات أكثر من مرتين خلال فصل دراسي واحد.",
    color: "#10b981",
  },
] as const;

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 hero-glow text-center">
        <div className="max-w-4xl mx-auto">
          <GradientText as="h1" className="text-4xl md:text-6xl font-bold mb-6">
            أعمالنا ونتائجنا
          </GradientText>
          <p className="text-xl text-[#94a3b8]">
            أرقام حقيقية من عملاء حقيقيين
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="rounded-2xl p-[1px] gradient-border"
              style={{ boxShadow: `0 0 24px ${cs.color}22` }}
            >
              <GlassCard className="rounded-2xl p-6 flex flex-col gap-4 h-full" hover={false}>
                {/* Category Badge */}
                <span
                  className="self-start text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: `${cs.color}22`, color: cs.color }}
                >
                  {cs.category}
                </span>

                {/* Title */}
                <h2 className="text-lg font-bold text-[#f0f9ff] leading-snug">
                  {cs.title}
                </h2>

                {/* Result */}
                <p
                  className="text-3xl font-extrabold"
                  style={{ color: cs.color }}
                >
                  {cs.result}
                </p>

                {/* Description */}
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {cs.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Metrics Row */}
      <SectionWrapper>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {METRICS.map((metric) => (
            <GlassCard key={metric.label} className="p-6" hover={false}>
              <p className="text-4xl font-extrabold gradient-text mb-2">
                {metric.value}
                {metric.suffix}
              </p>
              <p className="text-sm text-[#94a3b8]">{metric.label}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Lead Form */}
      <SectionWrapper>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#f0f9ff]">
            هل أنت التالي في قائمة النجاحات؟
          </h2>
          <LeadForm source="case-studies" />
        </div>
      </SectionWrapper>
    </div>
  );
}

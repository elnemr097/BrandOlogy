import type { Metadata } from "next";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GradientText from "@/components/shared/GradientText";
import GlassCard from "@/components/ui/GlassCard";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "التسويق الرقمي",
  description:
    "نضع علامتك أمام الجمهور الصح في الوقت الصح — سوشيال ميديا، إعلانات مدفوعة، SEO، محتوى، وتحليل بيانات",
};

const features = [
  {
    icon: "📱",
    title: "إدارة السوشيال ميديا",
    description:
      "محتوى يومي، تصاميم احترافية، جدولة وتفاعل — نبني حضوراً رقمياً يجذب ويحوّل",
  },
  {
    icon: "💰",
    title: "الإعلانات المدفوعة",
    description:
      "Meta Ads, Google Ads, Snapchat Ads — حملات مستهدفة بدقة لأقصى عائد على الإنفاق",
  },
  {
    icon: "🔍",
    title: "تحسين محركات البحث (SEO)",
    description:
      "ظهور عضوي في Google — نحسّن موقعك ليصل لأعلى النتائج ويجذب زيارات مجانية مستمرة",
  },
  {
    icon: "✍️",
    title: "إنشاء المحتوى",
    description:
      "مقالات، كوبي رايتينج، سكريبتات — محتوى يبني الثقة ويدفع الجمهور للتصرف",
  },
  {
    icon: "📊",
    title: "تحليل البيانات",
    description:
      "تقارير شهرية مفصّلة وقرارات مبنية على أرقام حقيقية — لا تخمين ولا هدر للميزانية",
  },
];

export default function DigitalMarketingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 hero-glow text-center">
        <SectionWrapper>
          <GradientText as="h1" className="text-4xl md:text-6xl font-bold mb-4">
            التسويق الرقمي
          </GradientText>
          <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
            نضع علامتك أمام الجمهور الصح في الوقت الصح
          </p>
        </SectionWrapper>
      </section>

      {/* Features Grid */}
      <SectionWrapper>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#0f172a]">
          خدمات التسويق الرقمي
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => (
            <GlassCard key={feat.title} className="p-6 flex flex-col gap-3">
              <div className="text-3xl">{feat.icon}</div>
              <h3 className="text-lg font-bold text-[#3b82f6]">{feat.title}</h3>
              <p className="text-sm text-[#64748b]">{feat.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Lead Form */}
      <SectionWrapper>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#0f172a]">
            ضاعف مبيعاتك رقمياً
          </h2>
          <LeadForm source="digital-marketing" />
        </div>
      </SectionWrapper>
    </div>
  );
}

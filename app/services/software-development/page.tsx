import type { Metadata } from "next";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GradientText from "@/components/shared/GradientText";
import GlassCard from "@/components/ui/GlassCard";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "تطوير البرمجيات",
  description:
    "نبني الأدوات الرقمية التي تعمل لحسابك — مواقع، متاجر إلكترونية، منصات SaaS، وتكاملات API",
};

const features = [
  {
    icon: "🌐",
    title: "مواقع تعريفية وصفحات الهبوط",
    description:
      "سريعة، جميلة، ومحسّنة للتحويل — تصاميم احترافية تبني الثقة وتحوّل الزوار لعملاء",
  },
  {
    icon: "🛒",
    title: "متاجر إلكترونية",
    description:
      "تجربة شراء سلسة تحوّل الزوار لمشترين — متاجر مبنية بأحدث التقنيات ومحسّنة للأداء",
  },
  {
    icon: "☁️",
    title: "منصات SaaS",
    description:
      "تطبيقات ويب متكاملة لأعمالك — من الفكرة للإنتاج بتصميم UX احترافي وكود نظيف",
  },
  {
    icon: "🔌",
    title: "تكاملات API",
    description:
      "ربط أنظمتك الموجودة ببعضها — اجعل أدواتك تتحدث مع بعض وتعمل كمنظومة واحدة",
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 hero-glow text-center">
        <SectionWrapper>
          <GradientText as="h1" className="text-4xl md:text-6xl font-bold mb-4">
            تطوير البرمجيات
          </GradientText>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            نبني الأدوات الرقمية التي تعمل لحسابك
          </p>
        </SectionWrapper>
      </section>

      {/* Features Grid */}
      <SectionWrapper>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#f0f9ff]">
          ماذا نبني لك
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat) => (
            <GlassCard key={feat.title} className="p-6 flex gap-4">
              <div className="text-3xl shrink-0">{feat.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-[#8b5cf6] mb-2">{feat.title}</h3>
                <p className="text-sm text-[#94a3b8]">{feat.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Lead Form */}
      <SectionWrapper>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#f0f9ff]">
            ابنِ حضورك الرقمي
          </h2>
          <LeadForm source="software-development" />
        </div>
      </SectionWrapper>
    </div>
  );
}

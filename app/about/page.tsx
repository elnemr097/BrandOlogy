import type { Metadata } from "next";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GradientText from "@/components/shared/GradientText";
import GlassCard from "@/components/ui/GlassCard";
import LeadForm from "@/components/ui/LeadForm";
import { METRICS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "من نحن",
  description: "Brandology — وكالة رقمية سعودية متخصصة في الأتمتة والتسويق والتطوير. نبني. نؤتمت. ننمو.",
};

const values = [
  {
    icon: "🔍",
    title: "الشفافية",
    description: "نتحدث بصدق ونلتزم بما نعد به — تعرف دائماً أين يذهب كل ريال.",
  },
  {
    icon: "💡",
    title: "الابتكار",
    description: "نستخدم أحدث التقنيات لخدمة أعمالك — من الذكاء الاصطناعي إلى الأدوات الرقمية المتقدمة.",
  },
  {
    icon: "📊",
    title: "النتائج",
    description: "نقيس كل شيء ولا نقبل بأقل من التميز — أهدافك هي معيارنا.",
  },
  {
    icon: "🤝",
    title: "الشراكة",
    description: "نتعامل مع عملائنا كشركاء لا عملاء — نجاحك هو نجاحنا.",
  },
] as const;

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 hero-glow text-center">
        <div className="max-w-4xl mx-auto">
          <GradientText as="h1" className="text-4xl md:text-6xl font-bold mb-4">
            من نحن
          </GradientText>
          <p className="text-2xl font-semibold text-[#0f172a] mt-2">
            نبني. نؤتمت. ننمو.
          </p>
        </div>
      </section>

      {/* Story */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <GlassCard className="p-10" hover={false}>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
              قصتنا
            </h2>
            <div className="flex flex-col gap-5 text-[#64748b] leading-relaxed text-base">
              <p>
                Brandology وكالة رقمية سعودية أُسست بهدف واحد: تقديم نتائج حقيقية، لا مجرد وعود. نؤمن بأن كل عمل — صغيراً كان أو كبيراً — يستحق حلولاً رقمية تعمل فعلاً وتصنع فرقاً ملموساً.
              </p>
              <p>
                بدأنا من رؤية واضحة: المشهد الرقمي في المملكة العربية السعودية يتطور بسرعة، والشركات تحتاج شريكاً تقنياً يفهم السوق المحلي ويواكب أحدث التقنيات العالمية. نجمع بين الأتمتة الذكية، التسويق الرقمي المبني على البيانات، وتطوير البرمجيات العالي الأداء — تحت سقف واحد.
              </p>
              <p>
                فريقنا من خبراء التسويق، المطورين، ومصممي تجربة المستخدم، يعمل كامتداد لفريقك الداخلي. لا نبيع خدمات جاهزة — نبني معك منظومة متكاملة مصممة لأهدافك وجمهورك.
              </p>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <h2 className="text-2xl font-bold text-center text-[#0f172a] mb-10">
          قيمنا
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <GlassCard key={value.title} className="p-6 flex flex-col gap-3 text-center" hover>
              <div className="text-4xl mx-auto">{value.icon}</div>
              <h3 className="text-lg font-bold text-[#0f172a]">{value.title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">{value.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {METRICS.map((metric) => (
            <GlassCard key={metric.label} className="p-6" hover={false}>
              <p className="text-4xl font-extrabold gradient-text mb-2">
                {metric.value}
                {metric.suffix}
              </p>
              <p className="text-sm text-[#64748b]">{metric.label}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Lead Form */}
      <SectionWrapper>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#0f172a]">
            هل تريد أن تكون جزءاً من قصة نجاحنا؟
          </h2>
          <LeadForm source="about" />
        </div>
      </SectionWrapper>
    </div>
  );
}

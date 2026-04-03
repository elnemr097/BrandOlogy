import type { Metadata } from "next";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GradientText from "@/components/shared/GradientText";
import GlassCard from "@/components/ui/GlassCard";
import LeadForm from "@/components/ui/LeadForm";
import ROICalculator from "@/components/ui/ROICalculator";
import { PRICING_TIERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "أتمتة الذكاء الاصطناعي",
  description:
    "نحوّل عملياتك إلى ماكينة تعمل وحدها 24/7 — بوت واتساب ذكي، أتمتة CRM، وكلاء ذكاء اصطناعي، تكامل الأنظمة",
};

const features = [
  {
    icon: "💬",
    title: "بوت واتساب ذكي",
    description: "رد آلي على العملاء 24/7 — يجيب، يحجز، ويحوّل بدون تدخل بشري",
  },
  {
    icon: "🗃️",
    title: "أتمتة CRM",
    description: "إدارة العملاء والمتابعة تلقائياً — لا يضيع عميل ولا فرصة",
  },
  {
    icon: "🤖",
    title: "وكلاء ذكاء اصطناعي",
    description: "يتعاملون مع استفسارات العملاء كإنسان — بالسياق والذكاء",
  },
  {
    icon: "🔗",
    title: "تكامل الأنظمة",
    description: "ربط جميع أدواتك في منظومة واحدة — واتساب، CRM، موقعك، وأكثر",
  },
];

export default function AIAutomationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 hero-glow text-center">
        <SectionWrapper>
          <GradientText as="h1" className="text-4xl md:text-6xl font-bold mb-4">
            أتمتة الذكاء الاصطناعي
          </GradientText>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            نحوّل عملياتك إلى ماكينة تعمل وحدها 24/7
          </p>
        </SectionWrapper>
      </section>

      {/* Features 2x2 Grid */}
      <SectionWrapper>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#f0f9ff]">
          ماذا نقدم لك
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat) => (
            <GlassCard key={feat.title} className="p-6 flex gap-4">
              <div className="text-3xl shrink-0">{feat.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-[#00d4c8] mb-2">{feat.title}</h3>
                <p className="text-sm text-[#94a3b8]">{feat.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* ROI Calculator */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <ROICalculator />
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#f0f9ff]">
          باقات الأتمتة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_TIERS.aiAutomation.map((tier) => (
            <GlassCard
              key={tier.name}
              className={`p-6 flex flex-col gap-4 ${
                tier.popular ? "border border-[#00d4c8]" : ""
              }`}
            >
              {tier.popular && (
                <span className="self-start text-xs font-bold px-3 py-1 rounded-full bg-[#00d4c8] text-[#060d14]">
                  الأكثر طلباً
                </span>
              )}
              <div>
                <p className="text-sm text-[#64748b]">{tier.name}</p>
                <h3 className="text-2xl font-bold text-[#f0f9ff]">{tier.nameAr}</h3>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-[#00d4c8]">{tier.price}</span>
                {tier.period && (
                  <span className="text-sm text-[#64748b]">{tier.period}</span>
                )}
              </div>
              <ul className="flex flex-col gap-2 flex-1">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-[#f0f9ff]/80">
                    <span className="text-[#00d4c8] mt-0.5 shrink-0">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Lead Form */}
      <SectionWrapper>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#f0f9ff]">
            ابدأ الأتمتة الآن
          </h2>
          <LeadForm source="ai-automation" />
        </div>
      </SectionWrapper>
    </div>
  );
}

import type { Metadata } from "next";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GradientText from "@/components/shared/GradientText";
import GlassCard from "@/components/ui/GlassCard";
import LeadForm from "@/components/ui/LeadForm";
import { PRICING_TIERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "الأسعار",
  description: "باقات واضحة بدون مفاجآت — أتمتة الذكاء الاصطناعي، التسويق الرقمي، وتطوير المواقع",
};

const marketingTiers = [
  {
    name: "Basic",
    nameAr: "الأساسي",
    price: "2,500",
    period: "ريال/شهر",
    features: [
      "إدارة منصتين اجتماعيتين",
      "12 منشور شهرياً",
      "تقرير أداء شهري",
      "دعم عبر البريد الإلكتروني",
    ],
    popular: false,
  },
  {
    name: "Growth",
    nameAr: "النمو",
    price: "5,500",
    period: "ريال/شهر",
    features: [
      "إدارة 4 منصات اجتماعية",
      "إعلانات Meta أو Google",
      "30 منشور شهرياً + ريلز",
      "تقارير أسبوعية",
      "دعم أولوية",
    ],
    popular: true,
  },
  {
    name: "Pro",
    nameAr: "الاحترافي",
    price: "10,000",
    period: "ريال/شهر",
    features: [
      "كل منصات السوشيال ميديا",
      "إعلانات Meta + Google + Snapchat",
      "محتوى يومي + فيديو احترافي",
      "SEO + مدونة",
      "مدير حساب مخصص",
    ],
    popular: false,
  },
] as const;

const webTiers = [
  {
    name: "Landing Page",
    nameAr: "صفحة الهبوط",
    price: "3,000",
    period: "دفعة واحدة",
    features: [
      "تصميم احترافي بالكامل",
      "مُحسَّنة للتحويل",
      "نموذج عملاء محتملين",
      "تسليم خلال 5 أيام",
    ],
    popular: false,
  },
  {
    name: "Business",
    nameAr: "الموقع المؤسسي",
    price: "8,000",
    period: "دفعة واحدة",
    features: [
      "موقع متعدد الصفحات",
      "لوحة تحكم للمحتوى",
      "تحسين SEO أساسي",
      "تسليم خلال 2-3 أسابيع",
      "دعم لمدة شهر بعد التسليم",
    ],
    popular: true,
  },
  {
    name: "Custom",
    nameAr: "المشاريع المخصصة",
    price: "مخصص",
    period: "",
    features: [
      "تطوير كامل حسب الطلب",
      "منصات SaaS وتطبيقات",
      "تكاملات API معقدة",
      "متجر إلكتروني متكامل",
      "دعم مستمر بعد التسليم",
    ],
    popular: false,
  },
] as const;

type PricingTier = {
  name: string;
  nameAr: string;
  price: string;
  period: string;
  features: readonly string[];
  popular: boolean;
};

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`rounded-2xl p-[1px] ${tier.popular ? "glow-accent" : ""}`}
      style={
        tier.popular
          ? { boxShadow: "0 0 40px rgba(0, 212, 200, 0.3)" }
          : undefined
      }
    >
      <GlassCard
        className={`rounded-2xl p-6 flex flex-col gap-4 h-full ${tier.popular ? "border border-[#00d4c8]/40" : ""}`}
        hover
      >
        {tier.popular && (
          <span className="self-start text-xs font-bold px-3 py-1 rounded-full bg-[#00d4c8] text-[#060d14]">
            الأكثر طلباً
          </span>
        )}
        <div>
          <h3 className="text-lg font-bold text-[#0f172a]">{tier.nameAr}</h3>
          <p className="text-xs text-[#64748b]">{tier.name}</p>
        </div>
        <div>
          <span
            className={`text-4xl font-extrabold ${tier.popular ? "gradient-text" : "text-[#0f172a]"}`}
          >
            {tier.price}
          </span>
          {tier.period && (
            <span className="text-sm text-[#64748b] mr-1">{tier.period}</span>
          )}
        </div>
        <ul className="flex flex-col gap-2 flex-1">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-[#64748b]">
              <span className="text-[#00d4c8] mt-0.5 shrink-0">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-[#0f172a] mb-8 text-center">
      {children}
    </h2>
  );
}

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 hero-glow text-center">
        <div className="max-w-4xl mx-auto">
          <GradientText as="h1" className="text-4xl md:text-6xl font-bold mb-6">
            باقات واضحة بدون مفاجآت
          </GradientText>
          <p className="text-xl text-[#64748b]">
            اختر ما يناسب أعمالك — ويمكنك الترقية في أي وقت
          </p>
          <p className="mt-4 text-sm text-[#64748b]">
            كل الأسعار بالريال السعودي، وتشمل الضريبة
          </p>
        </div>
      </section>

      {/* AI Automation */}
      <SectionWrapper>
        <SectionTitle>أتمتة الذكاء الاصطناعي</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_TIERS.aiAutomation.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </SectionWrapper>

      {/* Digital Marketing */}
      <SectionWrapper>
        <SectionTitle>التسويق الرقمي</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marketingTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </SectionWrapper>

      {/* Web Development */}
      <SectionWrapper>
        <SectionTitle>تطوير المواقع</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {webTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </SectionWrapper>

      {/* Lead Form */}
      <SectionWrapper>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-[#0f172a]">
            هل تحتاج مساعدة في الاختيار؟
          </h2>
          <p className="text-center text-[#64748b] mb-8">
            نصمّم لك باقة مخصصة تناسب ميزانيتك وأهدافك
          </p>
          <LeadForm source="pricing" />
        </div>
      </SectionWrapper>
    </div>
  );
}

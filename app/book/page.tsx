import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GradientText from "@/components/shared/GradientText";
import GlassCard from "@/components/ui/GlassCard";
import LeadForm from "@/components/ui/LeadForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "احجز استشارة مجانية",
  description: "احجز استشارة مجانية مع خبير Brandology — 30 دقيقة بدون أي التزام",
};

const expectations = [
  {
    icon: "🔍",
    text: "تحليل وضعك الحالي وفرص النمو",
  },
  {
    icon: "📋",
    text: "خطة عمل مخصصة مبنية على أهدافك",
  },
  {
    icon: "⚡",
    text: "توصيات فورية يمكنك تطبيقها اليوم",
  },
] as const;

export default function BookPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 hero-glow text-center">
        <div className="max-w-4xl mx-auto">
          <GradientText as="h1" className="text-4xl md:text-6xl font-bold mb-4">
            استشارة مجانية 100%
          </GradientText>
          <p className="text-xl text-[#94a3b8] mt-4">
            30 دقيقة مع خبير — بدون أي التزام
          </p>
        </div>
      </section>

      {/* What to expect */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-xl font-bold text-[#f0f9ff] text-center mb-8">
            ماذا ستحصل في الاستشارة؟
          </h2>
          <div className="flex flex-col gap-4">
            {expectations.map((item) => (
              <GlassCard key={item.text} className="p-5" hover={false}>
                <div className="flex items-center gap-4">
                  <span className="text-3xl shrink-0">{item.icon}</span>
                  <p className="text-[#f0f9ff] font-medium">{item.text}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Lead Form — prominent */}
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2 text-[#f0f9ff]">
            احجز الآن — المقاعد محدودة
          </h2>
          <p className="text-center text-[#94a3b8] mb-8 text-sm">
            أرسل بياناتك وسنتواصل معك خلال ساعات
          </p>
          <LeadForm source="book" />
        </div>

        {/* WhatsApp alternative */}
        <div className="mt-10 text-center">
          <p className="text-[#94a3b8] mb-4">أو تواصل مباشرة عبر واتساب</p>
          <Link
            href={CONTACT.whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#fff" }}
          >
            <span>💬</span>
            <span>واتساب — احجز الآن</span>
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}

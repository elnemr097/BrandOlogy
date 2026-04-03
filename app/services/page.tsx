import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GradientText from "@/components/shared/GradientText";
import GlassCard from "@/components/ui/GlassCard";
import LeadForm from "@/components/ui/LeadForm";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "خدماتنا",
  description:
    "منظومة متكاملة لنمو أعمالك — أتمتة الذكاء الاصطناعي، التسويق الرقمي، تطوير البرمجيات، التصميم والإنتاج الإبداعي",
};

const serviceDetails: Record<
  string,
  { features: string[] }
> = {
  "ai-automation": {
    features: [
      "بوت واتساب ذكي يرد 24/7",
      "أتمتة CRM ومتابعة العملاء تلقائياً",
      "وكلاء ذكاء اصطناعي بمستوى بشري",
    ],
  },
  "digital-marketing": {
    features: [
      "إدارة السوشيال ميديا يومياً",
      "إعلانات Meta وGoogle وSnapchat",
      "تقارير شهرية مبنية على بيانات حقيقية",
    ],
  },
  "software-development": {
    features: [
      "مواقع وصفحات هبوط محسّنة للتحويل",
      "متاجر إلكترونية ومنصات SaaS",
      "تكاملات API لربط أنظمتك",
    ],
  },
  "graphic-design": {
    features: [
      "هوية بصرية متكاملة وبراند بوك",
      "تصاميم سوشيال ميديا وموشن جرافيك",
      "تصوير وإنتاج فيديو احترافي",
    ],
  },
  "video-editing": {
    features: [
      "ريلز وفيديوهات ترويجية",
      "مونتاج احترافي وتلوين",
      "إنتروهات وانيميشن",
    ],
  },
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 hero-glow text-center">
        <SectionWrapper>
          <GradientText as="h1" className="text-4xl md:text-6xl font-bold mb-4">
            خدماتنا
          </GradientText>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            منظومة متكاملة لنمو أعمالك
          </p>
        </SectionWrapper>
      </section>

      {/* Services Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const detail = serviceDetails[service.id];
            return (
              <div
                key={service.id}
                className="rounded-2xl p-[1px]"
                style={{ background: service.color }}
              >
                <GlassCard className="rounded-2xl p-6 flex flex-col gap-4 h-full" hover>
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h2
                      className="text-xl font-bold mb-1"
                      style={{ color: service.color }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-xs text-[#64748b] mb-2">{service.titleEn}</p>
                    <p className="text-sm text-[#94a3b8] font-medium mb-2">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-[#64748b]">{service.description}</p>
                  </div>
                  {detail && (
                    <ul className="flex flex-col gap-1">
                      {detail.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2 text-sm text-[#f0f9ff]/80"
                        >
                          <span className="text-[#00d4c8] mt-0.5">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto pt-2">
                    <Link
                      href={service.href}
                      className="inline-block px-4 py-2 rounded-lg text-sm font-semibold text-[#060d14] transition-opacity hover:opacity-90"
                      style={{ backgroundColor: service.color }}
                    >
                      اعرف أكثر
                    </Link>
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Lead Form */}
      <SectionWrapper>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#f0f9ff]">
            ابدأ رحلتك معنا
          </h2>
          <LeadForm source="services-page" />
        </div>
      </SectionWrapper>
    </div>
  );
}

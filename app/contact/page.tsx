import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GradientText from "@/components/shared/GradientText";
import GlassCard from "@/components/ui/GlassCard";
import LeadForm from "@/components/ui/LeadForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "تواصل مع فريق Brandology — واتساب، بريد إلكتروني، أو السوشيال ميديا",
};

const contactCards = [
  {
    icon: "💬",
    title: "واتساب",
    value: CONTACT.whatsapp,
    href: CONTACT.whatsappURL,
    cta: "ابدأ محادثة",
    color: "#25D366",
  },
  {
    icon: "✉️",
    title: "البريد الإلكتروني",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    cta: "راسلنا",
    color: "#00d4c8",
  },
  {
    icon: "📸",
    title: "إنستغرام",
    value: "@brandology.store",
    href: CONTACT.instagram,
    cta: "تابعنا",
    color: "#E1306C",
  },
  {
    icon: "🎵",
    title: "تيك توك",
    value: "@brandology.store",
    href: CONTACT.tiktok,
    cta: "شاهد محتوانا",
    color: "#69C9D0",
  },
  {
    icon: "📘",
    title: "فيسبوك",
    value: "Brandology",
    href: CONTACT.facebook,
    cta: "زر صفحتنا",
    color: "#1877F2",
  },
] as const;

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 hero-glow text-center">
        <div className="max-w-4xl mx-auto">
          <GradientText as="h1" className="text-4xl md:text-6xl font-bold mb-6">
            تواصل معنا
          </GradientText>
          <p className="text-xl text-[#94a3b8]">
            نرد خلال دقائق — جرّب الواتساب أو أرسل لنا رسالة
          </p>
        </div>
      </section>

      {/* Main content */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-[#f0f9ff]">
              طرق التواصل
            </h2>
            <div className="flex flex-col gap-4">
              {contactCards.map((card) => (
                <GlassCard key={card.title} className="p-5" hover>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                      style={{ backgroundColor: `${card.color}22` }}
                    >
                      {card.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#64748b] mb-0.5">{card.title}</p>
                      <p className="text-sm font-semibold text-[#f0f9ff] truncate">
                        {card.value}
                      </p>
                    </div>
                    <Link
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-xs font-bold px-4 py-2 rounded-lg transition-opacity hover:opacity-80"
                      style={{ backgroundColor: card.color, color: "#060d14" }}
                    >
                      {card.cta}
                    </Link>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Map placeholder */}
            <GlassCard className="p-6 flex flex-col items-center justify-center gap-3 min-h-[150px]" hover={false}>
              <span className="text-4xl">📍</span>
              <p className="text-[#94a3b8] text-sm font-medium">
                الرياض، المملكة العربية السعودية
              </p>
            </GlassCard>
          </div>

          {/* Right: Lead Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#f0f9ff] mb-6">
              أرسل رسالة
            </h2>
            <LeadForm source="contact" />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

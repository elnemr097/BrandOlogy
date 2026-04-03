import SectionWrapper from '@/components/shared/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/shared/GradientText'
import { PRICING_TIERS, CONTACT } from '@/lib/constants'

export default function PricingTeaser() {
  const tiers = PRICING_TIERS.aiAutomation

  return (
    <SectionWrapper id="pricing">
      <div className="text-center mb-12">
        <GradientText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
          باقات الأتمتة
        </GradientText>
        <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
          حلول تناسب كل حجم من الأعمال — من الشركات الناشئة إلى المؤسسات
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {tiers.map((tier) => (
          <GlassCard
            key={tier.name}
            className={`p-6 flex flex-col gap-5 relative ${
              tier.popular ? 'ring-2 ring-[#00d4c8] glow-accent' : ''
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3 right-1/2 translate-x-1/2">
                <span className="bg-[#00d4c8] text-[#060d14] text-xs font-bold px-3 py-1 rounded-full">
                  الأكثر طلباً
                </span>
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-[#f0f9ff] mb-1">{tier.nameAr}</h3>
              <p className="text-sm text-[#94a3b8]">{tier.name}</p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[#00d4c8]">{tier.price}</span>
              {tier.period && (
                <span className="text-[#94a3b8] text-sm">{tier.period}</span>
              )}
            </div>

            <ul className="flex flex-col gap-2 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-[#f0f9ff]">
                  <span className="text-[#00d4c8] font-bold flex-shrink-0">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>

      <div className="text-center">
        <a
          href={CONTACT.whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00d4c8] text-[#060d14] font-bold px-8 py-4 text-base transition-all hover:bg-[#00f5e8] hover:shadow-[0_0_20px_rgba(0,212,200,0.4)] active:scale-95"
        >
          احجز استشارة للتسعير
        </a>
      </div>
    </SectionWrapper>
  )
}

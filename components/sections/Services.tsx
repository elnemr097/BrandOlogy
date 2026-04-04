import Link from 'next/link'
import SectionWrapper from '@/components/shared/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/shared/GradientText'
import { SERVICES } from '@/lib/constants'

export default function Services() {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-12">
        <GradientText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
          خدماتنا
        </GradientText>
        <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
          منظومة متكاملة من الخدمات الرقمية — كل ما تحتاجه تحت سقف واحد
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="rounded-2xl overflow-hidden"
            style={{ borderRight: `3px solid ${service.color}` }}
          >
            <GlassCard className="p-6 flex flex-col gap-4 h-full rounded-none bg-white border border-[#e2e8f0] shadow-sm">
              <div className="text-4xl">{service.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-1">{service.title}</h3>
                <p className="text-sm font-medium text-[#00d4c8] mb-2">{service.tagline}</p>
                <p className="text-sm text-[#64748b] leading-relaxed">{service.description}</p>
              </div>
              <Link
                href={service.href}
                className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#00d4c8] hover:text-[#00f5e8] transition-colors"
              >
                اكتشف المزيد →
              </Link>
            </GlassCard>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

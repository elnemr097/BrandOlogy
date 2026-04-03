import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientText from '@/components/shared/GradientText'
import { INDUSTRIES } from '@/lib/constants'

export default function Industries() {
  return (
    <SectionWrapper id="industries">
      <div className="text-center mb-12">
        <GradientText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
          القطاعات التي نخدمها
        </GradientText>
        <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
          خبرة عملية في أكثر القطاعات نشاطاً في السوق السعودي
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {INDUSTRIES.map((industry) => (
          <div
            key={industry.label}
            className="inline-flex items-center gap-3 glass rounded-full px-5 py-3 border border-[rgba(0,212,200,0.2)] hover:border-[rgba(0,212,200,0.5)] hover:bg-[rgba(0,212,200,0.05)] transition-all cursor-default"
          >
            <span className="text-2xl">{industry.icon}</span>
            <span className="text-[#f0f9ff] font-medium">{industry.label}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

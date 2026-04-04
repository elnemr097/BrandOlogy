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
        <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
          خبرة عملية في أكثر القطاعات نشاطاً في السوق السعودي
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {INDUSTRIES.map((industry) => (
          <div
            key={industry.label}
            className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-3 border border-[#e2e8f0] shadow-sm hover:border-[#00d4c8] hover:shadow-md transition-all cursor-default"
          >
            <span className="text-2xl">{industry.icon}</span>
            <span className="text-[#0f172a] font-medium">{industry.label}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

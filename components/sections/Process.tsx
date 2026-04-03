import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientText from '@/components/shared/GradientText'
import { PROCESS_STEPS } from '@/lib/constants'

export default function Process() {
  return (
    <SectionWrapper id="process">
      <div className="text-center mb-12">
        <GradientText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
          كيف نعمل؟
        </GradientText>
        <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
          4 خطوات واضحة من الاستشارة إلى تحقيق النتائج
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row gap-0 md:gap-0 items-stretch">
        {PROCESS_STEPS.map((step, index) => (
          <div key={step.number} className="flex md:flex-1 flex-col md:flex-row items-center">
            {/* Step card */}
            <div className="flex-1 w-full glass rounded-2xl p-6 flex flex-col gap-3 text-center">
              {/* Number badge */}
              <div className="w-10 h-10 rounded-full bg-[rgba(0,212,200,0.15)] border border-[rgba(0,212,200,0.3)] flex items-center justify-center mx-auto">
                <span className="text-[#00d4c8] font-bold text-sm">{step.number}</span>
              </div>
              {/* Icon */}
              <div className="text-3xl">{step.icon}</div>
              {/* Content */}
              <h3 className="text-lg font-bold text-[#f0f9ff]">{step.title}</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">{step.description}</p>
            </div>

            {/* Arrow connector — hidden on mobile, hidden after last item */}
            {index < PROCESS_STEPS.length - 1 && (
              <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0">
                <div className="text-[#00d4c8] text-xl opacity-50">←</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

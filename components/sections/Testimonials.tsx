import SectionWrapper from '@/components/shared/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/shared/GradientText'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <div className="text-center mb-12">
        <GradientText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
          ماذا يقول عملاؤنا
        </GradientText>
        <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
          نتائج حقيقية، عملاء حقيقيون، قصص نجاح موثّقة
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial) => (
          <GlassCard key={testimonial.name} className="p-6 flex flex-col gap-4">
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400">⭐</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-[#0f172a] leading-relaxed flex-1">
              &quot;{testimonial.content}&quot;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10 rounded-full bg-[rgba(0,212,200,0.1)] border border-[rgba(0,212,200,0.25)] flex items-center justify-center flex-shrink-0">
                <span className="text-[#00d4c8] font-bold">{testimonial.avatar}</span>
              </div>
              <div>
                <p className="font-semibold text-[#0f172a] text-sm">{testimonial.name}</p>
                <p className="text-[#64748b] text-xs">{testimonial.role}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  )
}

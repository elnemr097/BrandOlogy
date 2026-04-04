import SectionWrapper from '@/components/shared/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/shared/GradientText'
import { CheckCircle, BarChart3, Target, Users } from 'lucide-react'

const reasons = [
  {
    icon: CheckCircle,
    title: 'منظومة متكاملة',
    description: 'فريق واحد يغطي كل احتياجاتك الرقمية',
  },
  {
    icon: BarChart3,
    title: 'مدفوع بالبيانات',
    description: 'كل قرار مبني على أرقام وتحليلات حقيقية',
  },
  {
    icon: Target,
    title: 'نتائج مضمونة',
    description: 'نلتزم بمؤشرات أداء واضحة قبل بدء أي مشروع',
  },
  {
    icon: Users,
    title: 'فريق سعودي',
    description: 'نفهم السوق المحلي والثقافة والعميل السعودي',
  },
]

export default function WhyUs() {
  return (
    <div className="bg-[#f8fafc]">
    <SectionWrapper id="why-us">
      <div className="text-center mb-12">
        <GradientText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
          لماذا Brandology؟
        </GradientText>
        <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
          ليس مجرد وكالة — نحن شريكك الاستراتيجي في النمو الرقمي
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {reasons.map((reason) => {
          const Icon = reason.icon
          return (
            <GlassCard key={reason.title} className="p-8 flex flex-col gap-4">
              <Icon className="w-8 h-8" style={{ color: '#00d4c8' }} />
              <div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">{reason.title}</h3>
                <p className="text-[#64748b] leading-relaxed">{reason.description}</p>
              </div>
            </GlassCard>
          )
        })}
      </div>
    </SectionWrapper>
    </div>
  )
}

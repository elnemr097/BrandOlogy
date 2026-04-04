import Link from 'next/link'
import SectionWrapper from '@/components/shared/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/shared/GradientText'
import { Badge } from '@/components/ui/badge'

const caseStudies = [
  {
    category: 'عقارات',
    title: 'أتمتة مبيعات عقارية',
    result: '+40% صفقات مغلقة',
    description: 'أتمتة الواتساب وCRM وفّرت 3 موظفين وضاعفت إغلاق الصفقات',
  },
  {
    category: 'مطاعم وكافيهات',
    title: 'نمو سوشيال ميديا متسارع',
    result: '+60% متابعين',
    description: 'محتوى استراتيجي ضاعف المتابعين وزاد الحجوزات في 3 أشهر',
  },
  {
    category: 'تجارة إلكترونية',
    title: 'إعادة بناء متجر إلكتروني',
    result: '1% → 8% معدل تحويل',
    description: 'موقع جديد محسّن للتحويل رفع المبيعات 8 أضعاف',
  },
]

export default function CaseStudies() {
  return (
    <SectionWrapper id="case-studies">
      <div className="text-center mb-12">
        <GradientText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
          من أعمالنا
        </GradientText>
        <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
          نتائج حقيقية لعملاء حقيقيين
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {caseStudies.map((item) => (
          <GlassCard key={item.title} className="gradient-border p-6 flex flex-col gap-4">
            <Badge variant="secondary">{item.category}</Badge>
            <div className="text-2xl font-bold text-[#00d4c8]">{item.result}</div>
            <h3 className="text-lg font-bold text-[#0f172a]">{item.title}</h3>
            <p className="text-[#64748b] text-sm leading-relaxed">{item.description}</p>
          </GlassCard>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/case-studies"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f172a] text-white font-bold px-8 py-4 text-base transition-all hover:bg-[#1e293b] active:scale-95"
        >
          شاهد جميع الأعمال
        </Link>
      </div>
    </SectionWrapper>
  )
}

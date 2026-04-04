import SectionWrapper from '@/components/shared/SectionWrapper'
import GradientText from '@/components/shared/GradientText'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQ() {
  return (
    <SectionWrapper id="faq">
      <div className="text-center mb-12">
        <GradientText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
          الأسئلة الشائعة
        </GradientText>
        <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
          إجابات على أكثر الأسئلة شيوعاً قبل البدء معنا
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion className="bg-white border border-[#e2e8f0] shadow-sm rounded-2xl divide-y divide-[#e2e8f0]">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={index} value={String(index)} className="px-6">
              <AccordionTrigger className="py-5 text-[#0f172a] font-semibold text-base hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#64748b] leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  )
}

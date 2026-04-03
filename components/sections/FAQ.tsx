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
        <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
          إجابات على أكثر الأسئلة شيوعاً قبل البدء معنا
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion className="glass rounded-2xl divide-y divide-[rgba(0,212,200,0.1)]">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={index} value={String(index)} className="px-6">
              <AccordionTrigger className="py-5 text-[#f0f9ff] font-semibold text-base hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#94a3b8] leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  )
}

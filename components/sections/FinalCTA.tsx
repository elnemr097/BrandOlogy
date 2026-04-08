import GradientText from '@/components/shared/GradientText'
import { CONTACT } from '@/lib/constants'

export default function FinalCTA() {
  return (
    <section
      className="w-full py-24 px-4 text-center relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0, 212, 200, 0.08) 0%, transparent 70%), #f8fafc',
      }}
    >
      {/* Subtle border lines top/bottom */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,200,0.2)] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,200,0.2)] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
        <GradientText as="h2" className="text-4xl md:text-5xl font-bold leading-tight">
          جاهز تضاعف نتائجك؟
        </GradientText>

        <p className="text-[#64748b] text-lg max-w-xl leading-relaxed">
          خذ الخطوة الأولى — استشارة مجانية بدون أي التزام
        </p>

        <a
          href={CONTACT.whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] text-white font-bold px-10 py-5 text-lg transition-all hover:bg-[#1e293b] active:scale-95 mt-2"
        >
          ابدأ الآن عبر واتساب
        </a>

        <p className="text-[#64748b] text-sm">
          أو راسلنا على{' '}
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-[#00d4c8] hover:text-[#00f5e8] transition-colors"
          >
            {CONTACT.email}
          </a>
        </p>
      </div>
    </section>
  )
}

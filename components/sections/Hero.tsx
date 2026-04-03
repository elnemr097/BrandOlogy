'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import GradientText from '@/components/shared/GradientText'
import { CONTACT } from '@/lib/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-glow">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-[#94a3b8] border border-[rgba(0,212,200,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#00d4c8] animate-pulse" />
              وكالة رقمية متكاملة — السعودية
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#f0f9ff] leading-tight">
              نحوّل أعمالك إلى
            </h1>
            <GradientText
              as="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              ماكينة نمو لا تتوقف
            </GradientText>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#94a3b8] max-w-2xl leading-relaxed"
          >
            وكالة رقمية متكاملة — أتمتة، تسويق، تصميم، برمجة. كل ما تحتاجه في مكان واحد.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <a
              href={CONTACT.whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00d4c8] text-[#060d14] font-bold px-8 py-4 text-base transition-all hover:bg-[#00f5e8] hover:shadow-[0_0_20px_rgba(0,212,200,0.4)] active:scale-95"
            >
              احجز استشارة مجانية
            </a>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-xl glass border border-[rgba(0,212,200,0.3)] text-[#f0f9ff] font-semibold px-8 py-4 text-base transition-all hover:border-[rgba(0,212,200,0.6)] hover:bg-[rgba(0,212,200,0.05)] active:scale-95"
            >
              شاهد أعمالنا
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 mt-4 text-sm text-[#94a3b8]"
          >
            <span className="flex items-center gap-2">
              <span className="text-[#00d4c8]">✓</span>
              50+ مشروع منجز
            </span>
            <span className="w-px h-4 bg-[rgba(0,212,200,0.2)]" />
            <span className="flex items-center gap-2">
              <span className="text-[#00d4c8]">✓</span>
              98% رضا عملاء
            </span>
            <span className="w-px h-4 bg-[rgba(0,212,200,0.2)]" />
            <span className="flex items-center gap-2">
              <span className="text-[#00d4c8]">✓</span>
              24/7 دعم متواصل
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

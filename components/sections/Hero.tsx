'use client'

import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import GradientText from '@/components/shared/GradientText'
import { CONTACT } from '@/lib/constants'

// Disable SSR for orbit to prevent hydration mismatch with Framer Motion styles
const OrbitScene = dynamic(() => Promise.resolve(OrbitSceneInner), { ssr: false })

/* ── Cards data ── */
const CARDS = [
  {
    id: 1,
    label: 'نمو المبيعات',
    value: '+300%',
    sub: 'متوسط زيادة المبيعات',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&q=80',
    angle: 270, // top
  },
  {
    id: 2,
    label: 'أتمتة ذكية',
    value: '24/7',
    sub: 'عمل بدون توقف',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=320&q=80',
    angle: 342, // top-right
  },
  {
    id: 3,
    label: 'معدل التحويل',
    value: '×8',
    sub: 'ارتفاع المبيعات',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=320&q=80',
    angle: 54, // bottom-right
  },
  {
    id: 4,
    label: 'رضا العملاء',
    value: '98%',
    sub: 'نسبة الرضا',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=320&q=80',
    angle: 126, // bottom-left
  },
  {
    id: 5,
    label: 'مشاريع منجزة',
    value: '50+',
    sub: 'مشروع ناجح',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=320&q=80',
    angle: 198, // top-left
  },
]

const RADIUS = 185 // distance from center to card center
const ORBIT_SIZE = 480 // total orbit container size

/* ── Single card ── */
function OrbitCard({ card, index }: { card: typeof CARDS[0]; index: number }) {
  const rad = (card.angle * Math.PI) / 180
  const cx = Math.cos(rad) * RADIUS
  const cy = Math.sin(rad) * RADIUS

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        x: cx - 70, // half card width
        y: cy - 55, // half card height
      }}
      className="w-[140px]"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3 + index * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.4,
        }}
        className="rounded-2xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-[#e2e8f0]"
      >
        {/* Image */}
        <div className="relative w-full h-[80px]">
          <Image
            src={card.img}
            alt={card.label}
            fill
            className="object-cover"
            sizes="140px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        {/* Content */}
        <div className="px-3 py-2 bg-white">
          <p className="text-base font-bold text-[#0f172a] leading-none">{card.value}</p>
          <p className="text-[9px] text-[#64748b] mt-0.5 leading-tight">{card.sub}</p>
          <p className="text-[9px] font-semibold text-[#0f172a] mt-1 leading-tight">{card.label}</p>
          <div className="mt-1.5 h-0.5 w-6 rounded-full bg-gradient-to-r from-[#00d4c8] to-[#00a89f]" />
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Orbit scene ── */
function OrbitSceneInner() {
  return (
    <div
      className="relative flex-shrink-0"
      style={{ width: ORBIT_SIZE, height: ORBIT_SIZE }}
    >
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="rounded-full border border-dashed"
          style={{
            width: RADIUS * 2 + 140,
            height: RADIUS * 2 + 140,
            borderColor: 'rgba(0,212,200,0.18)',
          }}
        />
        <div
          className="absolute rounded-full border"
          style={{
            width: RADIUS * 2 - 40,
            height: RADIUS * 2 - 40,
            borderColor: 'rgba(0,212,200,0.08)',
          }}
        />
      </div>

      {/* Rotating glow dot */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative" style={{ width: RADIUS * 2 + 140, height: RADIUS * 2 + 140 }}>
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
            style={{
              background: '#00d4c8',
              boxShadow: '0 0 12px 4px rgba(0,212,200,0.6)',
            }}
          />
        </div>
      </motion.div>

      {/* Center logo mark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-16 h-16 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,212,200,0.2)] border border-[rgba(0,212,200,0.2)] flex items-center justify-center"
        >
          <span className="text-2xl font-extrabold gradient-text">B</span>
        </motion.div>
      </div>

      {/* Cards */}
      {CARDS.map((card, i) => (
        <OrbitCard key={card.id} card={card} index={i} />
      ))}
    </div>
  )
}

/* ── Animation variants ── */
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

/* ── Hero ── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 30% 50%, rgba(0,212,200,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Main layout: two columns */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* ── Right column: Text (RTL = first in DOM) ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col items-start gap-6 text-start lg:max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#64748b] bg-[#f1f5f9] border border-[#e2e8f0]">
                <span className="w-2 h-2 rounded-full bg-[#00d4c8] animate-pulse flex-shrink-0" />
                وكالة رقمية متكاملة — السعودية
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={item} className="flex flex-col gap-1">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#0f172a] leading-[1.15]">
                نحوّل أعمالك إلى
              </h1>
              <GradientText as="h1" className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.15]">
                ماكينة نمو لا تتوقف
              </GradientText>
            </motion.div>

            {/* Subtext */}
            <motion.p variants={item} className="text-lg text-[#64748b] leading-relaxed max-w-lg">
              وكالة رقمية متكاملة — أتمتة، تسويق، تصميم، برمجة. كل ما تحتاجه في مكان واحد.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] text-white font-bold px-7 py-3.5 text-base transition-all hover:bg-[#1e293b] hover:shadow-lg active:scale-95"
              >
                احجز استشارة مجانية
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00d4c8] text-[#0f172a] text-xs font-bold flex-shrink-0">↗</span>
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] text-[#0f172a] font-semibold px-7 py-3.5 text-base transition-all hover:border-[#00d4c8] hover:bg-[#f8fafc] active:scale-95"
              >
                شاهد أعمالنا
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={item} className="flex flex-wrap gap-5 text-sm text-[#64748b]">
              {['50+ مشروع منجز', '98% رضا عملاء', '24/7 دعم متواصل'].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="text-[#00d4c8] font-bold text-base">✓</span>
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Star rating */}
            <motion.div variants={item} className="flex items-center gap-2 text-sm text-[#64748b]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#f59e0b] text-base">★</span>
                ))}
              </div>
              <span>تقييم 4.9/5 من أكثر من 50 عميل</span>
            </motion.div>
          </motion.div>

          {/* ── Left column: Orbital scene ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="hidden lg:flex items-center justify-center flex-shrink-0"
          >
            <OrbitScene />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

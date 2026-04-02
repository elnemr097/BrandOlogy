'use client'

import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl ${className}`}
      whileHover={
        hover
          ? {
              boxShadow: '0 0 24px rgba(0, 212, 200, 0.25), 0 0 60px rgba(0, 212, 200, 0.08)',
            }
          : undefined
      }
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

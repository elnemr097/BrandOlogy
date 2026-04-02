'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="gradient-text text-xl md:text-2xl font-extrabold tracking-tight">
            Brandology
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'text-[#00d4c8]'
                      : 'text-[#94a3b8] hover:text-[#f0f9ff]'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-[#00d4c8]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/book"
            className="px-5 py-2 rounded-xl text-sm font-bold bg-[#00d4c8] text-[#060d14] hover:bg-[#00f5e8] transition-colors duration-200 shadow-[0_0_20px_rgba(0,212,200,0.3)] hover:shadow-[0_0_28px_rgba(0,212,200,0.5)]"
          >
            احجز استشارة مجانية
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#94a3b8] hover:text-[#f0f9ff] hover:bg-white/5 transition-colors"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden glass border-t border-[rgba(0,212,200,0.12)]"
          >
            <ul className="flex flex-col px-4 py-3 gap-1">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = pathname === href
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-[#00d4c8] bg-[rgba(0,212,200,0.08)]'
                          : 'text-[#94a3b8] hover:text-[#f0f9ff] hover:bg-white/5'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
              <li className="pt-2 pb-1">
                <Link
                  href="/book"
                  className="block text-center px-4 py-2.5 rounded-xl text-sm font-bold bg-[#00d4c8] text-[#060d14] hover:bg-[#00f5e8] transition-colors duration-200"
                >
                  احجز استشارة مجانية
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

'use client'
import { useEffect, useState } from 'react'

export default function LanguageSwitch() {
  const [locale, setLocale] = useState('ar')

  useEffect(() => {
    // Read from cookie first, fallback to html lang attribute
    const match = document.cookie.match(/(?:^|;\s*)locale=([^;]+)/)
    const fromCookie = match?.[1]
    const fromHtml = document.documentElement.lang
    const detected = fromCookie ?? fromHtml
    setLocale(['ar', 'en'].includes(detected) ? detected : 'ar')
  }, [])

  const toggle = () => {
    const next = locale === 'ar' ? 'en' : 'ar'
    // Set cookie — expires in 1 year
    const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()
    document.cookie = `locale=${next}; path=/; expires=${expires}; SameSite=Lax`
    // Hard navigate to force server re-render with new locale
    window.location.href = window.location.href
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-[#e2e8f0] text-[#64748b] hover:border-[#00d4c8] hover:text-[#00d4c8] transition-all duration-200 bg-white"
      aria-label="Switch language"
    >
      <span className="text-base leading-none">🌐</span>
      {locale === 'ar' ? 'EN' : 'عربي'}
    </button>
  )
}

import Link from 'next/link'
import { Mail } from 'lucide-react'
import { CONTACT, NAV_LINKS } from '@/lib/constants'

// Simple SVG social icons (Lucide doesn't include Facebook/Instagram/TikTok)
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z" />
    </svg>
  )
}

const SERVICES_LINKS = [
  { label: 'أتمتة الذكاء الاصطناعي', href: '/services/ai-automation' },
  { label: 'التسويق الرقمي', href: '/services/digital-marketing' },
  { label: 'تطوير البرمجيات', href: '/services/software-development' },
  { label: 'التصميم والفيديو', href: '/services/creative' },
]

const QUICK_LINKS = NAV_LINKS.filter(
  (l) => !['/'].includes(l.href)
)

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="gradient-text text-2xl font-extrabold tracking-tight">
                Brandology
              </span>
            </Link>
            <p className="text-[#64748b] text-sm leading-relaxed mb-6">
              نبني. نؤتمت. ننمو.
              <br />
              وكالة رقمية متكاملة تجمع الأتمتة، التسويق، التصميم، والتطوير في منظومة واحدة.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#f1f5f9] text-[#64748b] hover:text-[#00d4c8] hover:bg-[rgba(0,212,200,0.06)] transition-colors duration-200"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#f1f5f9] text-[#64748b] hover:text-[#00d4c8] hover:bg-[rgba(0,212,200,0.06)] transition-colors duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={CONTACT.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#f1f5f9] text-[#64748b] hover:text-[#00d4c8] hover:bg-[rgba(0,212,200,0.06)] transition-colors duration-200"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-[#0f172a] font-semibold mb-5 text-sm uppercase tracking-widest">
              الخدمات
            </h3>
            <ul className="space-y-3">
              {SERVICES_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#64748b] text-sm hover:text-[#00d4c8] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links column */}
          <div>
            <h3 className="text-[#0f172a] font-semibold mb-5 text-sm uppercase tracking-widest">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#64748b] text-sm hover:text-[#00d4c8] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-[#0f172a] font-semibold mb-5 text-sm uppercase tracking-widest">
              تواصل معنا
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={CONTACT.whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#64748b] text-sm hover:text-[#00d4c8] transition-colors duration-200 group"
                >
                  {/* WhatsApp SVG */}
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-[rgba(37,211,102,0.1)] text-[#25D366] flex-shrink-0 group-hover:bg-[rgba(37,211,102,0.2)] transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.526 5.854L0 24l6.336-1.503A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.013-1.374l-.36-.214-3.727.884.916-3.618-.235-.372A9.818 9.818 0 1 1 12 21.818z"/>
                    </svg>
                  </span>
                  <span className="ltr" dir="ltr">{CONTACT.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-[#64748b] text-sm hover:text-[#00d4c8] transition-colors duration-200 group"
                >
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-[rgba(0,212,200,0.08)] text-[#00d4c8] flex-shrink-0 group-hover:bg-[rgba(0,212,200,0.15)] transition-colors">
                    <Mail size={15} />
                  </span>
                  <span className="ltr" dir="ltr">{CONTACT.email}</span>
                </a>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/book"
                className="inline-block w-full text-center px-4 py-2.5 rounded-full text-sm font-bold bg-[#0f172a] text-white hover:bg-[#1e293b] transition-colors duration-200"
              >
                احجز استشارة مجانية
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#94a3b8] text-xs">
            © {new Date().getFullYear()} Brandology. جميع الحقوق محفوظة.
          </p>
          <p className="text-[#94a3b8] text-xs">
            مملكة العربية السعودية 🇸🇦
          </p>
        </div>
      </div>
    </footer>
  )
}

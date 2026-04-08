import { getRequestConfig } from 'next-intl/server'
import { cookies, headers } from 'next/headers'

export default getRequestConfig(async () => {
  const cookieStore = await cookies()
  const headersList = await headers()

  // Try header first (set by proxy.ts), fallback to cookie, then default 'ar'
  const headerLocale = headersList.get('x-next-intl-locale')
  const cookieLocale = cookieStore.get('locale')?.value
  const raw = headerLocale ?? cookieLocale ?? 'ar'
  const locale = ['ar', 'en'].includes(raw) ? raw : 'ar'

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})

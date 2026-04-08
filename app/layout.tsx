import type { Metadata } from "next";
import { Cairo, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { NextIntlClientProvider } from "next-intl";
import { headers } from "next/headers";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Brandology | وكالة الأتمتة والتسويق الرقمي في السعودية",
    template: "%s | Brandology",
  },
  description:
    "Brandology — وكالة رقمية متكاملة في السعودية. أتمتة بالذكاء الاصطناعي، تسويق رقمي، تصميم، فيديو، وتطوير مواقع. نحوّل أعمالك ونضاعف نتائجك.",
  keywords: [
    "وكالة تسويق رقمي السعودية",
    "أتمتة الأعمال",
    "ذكاء اصطناعي",
    "تصميم مواقع",
    "brandology",
  ],
  openGraph: {
    locale: "ar_SA",
    type: "website",
    siteName: "Brandology",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read locale from the header set by proxy.ts (bypasses next-intl plugin dependency)
  const headersList = await headers();
  const locale = headersList.get("x-next-intl-locale") ?? "ar";
  const isRTL = locale === "ar";

  let messages = {};
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch {
    messages = (await import("../messages/ar.json")).default;
  }

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${cairo.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0f172a]">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

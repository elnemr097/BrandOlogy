import type { Metadata } from "next";
import { Cairo, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#060d14] text-[#f0f9ff]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

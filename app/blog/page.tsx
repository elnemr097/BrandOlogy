import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GradientText from "@/components/shared/GradientText";
import GlassCard from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "المدونة",
  description: "مدونة Brandology — أفكار وأدلة عملية لنمو أعمالك في المملكة العربية السعودية",
};

const posts = [
  {
    slug: "whatsapp-bot-sales",
    category: "أتمتة",
    categoryColor: "#00d4c8",
    title: "كيف تضاعف مبيعاتك باستخدام بوت واتساب الذكي",
    excerpt:
      "اكتشف كيف يمكن لبوت واتساب المُدرَّب على الذكاء الاصطناعي أن يتابع العملاء المحتملين، يجيب على الأسئلة، ويُغلق الصفقات — على مدار الساعة.",
    readTime: "5 دقائق",
  },
  {
    slug: "meta-ads-guide-2025",
    category: "تسويق",
    categoryColor: "#3b82f6",
    title: "دليل إعلانات ميتا 2025 للشركات السعودية",
    excerpt:
      "كل ما تحتاجه لإطلاق حملات Meta فعّالة في السوق السعودي — من الاستهداف الصحيح، إلى إبداعات الإعلان، إلى قياس العائد.",
    readTime: "8 دقائق",
  },
  {
    slug: "website-conversion-guide",
    category: "تطوير",
    categoryColor: "#8b5cf6",
    title: "لماذا 90% من المواقع لا تحوّل الزوار لعملاء",
    excerpt:
      "الأسباب التقنية والتصميمية التي تجعل موقعك يستقطب الزوار لكن لا يحوّلهم — وكيف تصلحها خلال أسبوع.",
    readTime: "6 دقائق",
  },
] as const;

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 hero-glow text-center">
        <div className="max-w-4xl mx-auto">
          <GradientText as="h1" className="text-4xl md:text-6xl font-bold mb-6">
            مدونة Brandology
          </GradientText>
          <p className="text-xl text-[#64748b]">
            أفكار وأدلة عملية لنمو أعمالك
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <GlassCard key={post.slug} className="p-6 flex flex-col gap-4" hover>
              {/* Category badge */}
              <span
                className="self-start text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  backgroundColor: `${post.categoryColor}22`,
                  color: post.categoryColor,
                }}
              >
                {post.category}
              </span>

              {/* Title */}
              <h2 className="text-lg font-bold text-[#0f172a] leading-snug">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-sm text-[#64748b] leading-relaxed flex-1">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-xs text-[#64748b]">
                  وقت القراءة: {post.readTime}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-[#00d4c8] hover:underline"
                >
                  اقرأ المزيد →
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Coming soon note */}
        <div className="mt-16 text-center">
          <GlassCard className="inline-block px-8 py-4" hover={false}>
            <p className="text-[#64748b] text-sm">
              قريباً — المزيد من المقالات
            </p>
          </GlassCard>
        </div>
      </SectionWrapper>
    </div>
  );
}

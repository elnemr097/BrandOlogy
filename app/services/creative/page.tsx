import type { Metadata } from "next";
import SectionWrapper from "@/components/shared/SectionWrapper";
import GradientText from "@/components/shared/GradientText";
import GlassCard from "@/components/ui/GlassCard";
import LeadForm from "@/components/ui/LeadForm";

export const metadata: Metadata = {
  title: "التصميم والإنتاج الإبداعي",
  description:
    "هويتك البصرية هي أول ما يراه عميلك — هوية بصرية، تصاميم سوشيال ميديا، موشن جرافيك، تصوير، وإنتاج فيديو",
};

const features = [
  {
    icon: "🎨",
    title: "الهوية البصرية",
    description:
      "شعار، ألوان، typography، brand book — هوية تعكس قيمك وتترك أثراً لا يُنسى",
  },
  {
    icon: "📸",
    title: "تصاميم السوشيال ميديا",
    description:
      "بوستات، ستوريز، قوالب — تصاميم تتوقف عندها العين وتدفع التفاعل",
  },
  {
    icon: "✨",
    title: "موشن جرافيك",
    description:
      "انيميشن وإنتروهات احترافية — محتوى متحرك يجذب الانتباه ويرسّخ العلامة",
  },
  {
    icon: "🎬",
    title: "تصوير وإنتاج فيديو",
    description:
      "ريلز، إعلانات، فيديوهات ترويجية — إنتاج احترافي يحكي قصتك بالشكل الصح",
  },
  {
    icon: "🎞️",
    title: "مونتاج احترافي",
    description:
      "تحرير وتلوين وإخراج فني — نحوّل المشاهد الخام لمحتوى فيرال يحوّل المشاهدين",
  },
];

export default function CreativePage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 hero-glow text-center">
        <SectionWrapper>
          <GradientText as="h1" className="text-4xl md:text-6xl font-bold mb-4">
            التصميم والإنتاج الإبداعي
          </GradientText>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            هويتك البصرية هي أول ما يراه عميلك
          </p>
        </SectionWrapper>
      </section>

      {/* Features Grid */}
      <SectionWrapper>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#f0f9ff]">
          خدمات الإبداع البصري
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => (
            <GlassCard key={feat.title} className="p-6 flex flex-col gap-3">
              <div className="text-3xl">{feat.icon}</div>
              <h3 className="text-lg font-bold text-[#f59e0b]">{feat.title}</h3>
              <p className="text-sm text-[#94a3b8]">{feat.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Lead Form */}
      <SectionWrapper>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#f0f9ff]">
            اجعل علامتك لا تُنسى
          </h2>
          <LeadForm source="creative" />
        </div>
      </SectionWrapper>
    </div>
  );
}

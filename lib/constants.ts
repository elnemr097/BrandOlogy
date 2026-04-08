export const CONTACT = {
  whatsapp: "+966506207049",
  whatsappURL:
    "https://wa.me/966506207049?text=مرحباً%20Brandology%20👋%20أريد%20معرفة%20المزيد%20عن%20خدماتكم",
  email: "hello@brandology.store",
  facebook: "https://www.facebook.com/share/18Qo441n7X/",
  instagram: "https://www.instagram.com/brandology.store",
  tiktok: "https://www.tiktok.com/@brandology.store",
} as const;

export const NAV_LINKS = [
  { label: "الرئيسية", href: "/" },
  { label: "الخدمات", href: "/services" },
  { label: "القطاعات", href: "/industries" },
  { label: "أعمالنا", href: "/case-studies" },
  { label: "الأسعار", href: "/pricing" },
  { label: "من نحن", href: "/about" },
  { label: "المدونة", href: "/blog" },
] as const;

export const SERVICES = [
  {
    id: "ai-automation",
    icon: "🤖",
    title: "أتمتة الذكاء الاصطناعي",
    titleEn: "AI Automation",
    tagline: "نحوّل عملياتك إلى ماكينة تعمل وحدها",
    description:
      "من أتمتة الواتساب إلى وكلاء دعم العملاء الذكيين — نبني منظومة تعمل 24/7 بدونك",
    href: "/services/ai-automation",
    color: "#00d4c8",
  },
  {
    id: "digital-marketing",
    icon: "📱",
    title: "التسويق الرقمي",
    titleEn: "Digital Marketing",
    tagline: "نضع علامتك أمام الجمهور الصح في الوقت الصح",
    description:
      "إعلانات مدفوعة، سوشيال ميديا، SEO — كل شيء مبني على بيانات وموجّه للتحويل",
    href: "/services/digital-marketing",
    color: "#3b82f6",
  },
  {
    id: "software-development",
    icon: "💻",
    title: "تطوير البرمجيات",
    titleEn: "Software Development",
    tagline: "نبني الأدوات الرقمية التي تعمل لحسابك",
    description:
      "مواقع، متاجر، منصات SaaS — مبنية على أحدث التقنيات ومحسّنة للأداء والتحويل",
    href: "/services/software-development",
    color: "#8b5cf6",
  },
  {
    id: "graphic-design",
    icon: "🎨",
    title: "التصميم الجرافيكي",
    titleEn: "Graphic Design",
    tagline: "هويتك البصرية هي أول ما يراه عميلك",
    description:
      "هوية بصرية، تصاميم سوشيال ميديا، موشن جرافيك — تصاميم تتوقف عندها العين",
    href: "/services/creative",
    color: "#f59e0b",
  },
  {
    id: "video-editing",
    icon: "🎬",
    title: "المونتاج والفيديو",
    titleEn: "Video Editing",
    tagline: "محتوى فيديو يجعل جمهورك يتوقف ويتحوّل",
    description:
      "ريلز، إعلانات، موشن جرافيك — فيديوهات تمشي فيرال وتحوّل المشاهدين لمشترين",
    href: "/services/creative",
    color: "#ef4444",
  },
] as const;

export const METRICS = [
  { value: 300, suffix: "%", label: "متوسط زيادة المبيعات" },
  { value: 20, suffix: "+", label: "ساعة توفير أسبوعي لكل عميل" },
  { value: 50, suffix: "+", label: "مشروع أتمتة منجز" },
  { value: 98, suffix: "%", label: "نسبة رضا العملاء" },
] as const;

export const INDUSTRIES = [
  { icon: "🏢", label: "الشركات المؤسسية" },
  { icon: "🏠", label: "العقارات" },
  { icon: "🍽️", label: "المطاعم والكافيهات" },
  { icon: "🏥", label: "العيادات الطبية" },
  { icon: "🚚", label: "اللوجستيك والشحن" },
  { icon: "🛍️", label: "المتاجر الإلكترونية" },
  { icon: "📚", label: "المراكز التعليمية" },
  { icon: "🔨", label: "شركات المقاولات" },
  { icon: "💼", label: "رواد الأعمال" },
] as const;

export const TESTIMONIALS = [
  {
    name: "محمد العتيبي",
    role: "مدير شركة عقارية",
    avatar: "م",
    content:
      "Brandology حوّلت طريقة شغلنا كلياً. الأوتوماتيك على الواتساب وفّر علينا 3 موظفين وزاد إغلاق الصفقات بنسبة 40%",
    rating: 5,
  },
  {
    name: "نورة الشمري",
    role: "صاحبة سلسلة كافيهات",
    avatar: "ن",
    content:
      "المحتوى اللي تصمّمه Brandology خلّى صفحتنا تتضاعف متابعينها في 3 أشهر والحجوزات زادت 60%",
    rating: 5,
  },
  {
    name: "عبدالرحمن القحطاني",
    role: "مدير متجر إلكتروني",
    avatar: "ع",
    content:
      "المتجر الجديد اللي بنوه غيّر اللعبة — معدل التحويل وصل 8% وكنا على 1% قبل",
    rating: 5,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "هل تعملون مع الشركات الصغيرة؟",
    answer:
      "نعم — لدينا حلول تبدأ من أصغر الأعمال وتصل للمؤسسات الكبرى. نصمم الحل على حسب حجمك وميزانيتك.",
  },
  {
    question: "كم يستغرق تسليم المشروع؟",
    answer:
      "يعتمد على المشروع — صفحة الهبوط في 5 أيام، الموقع الكامل في 2-3 أسابيع، منظومة الأتمتة في 1-4 أسابيع.",
  },
  {
    question: "هل تقدمون ضمان على النتائج؟",
    answer:
      "نعم — نلتزم بمؤشرات أداء واضحة قبل بدء أي مشروع ونتابع النتائج معك باستمرار.",
  },
  {
    question: "هل يمكنني التواصل معكم عبر الواتساب؟",
    answer:
      "بالتأكيد — تواصل معنا مباشرة على +966506207049 وسنرد عليك خلال دقائق.",
  },
  {
    question: "ما الفرق بينكم وبين الوكالات الأخرى؟",
    answer:
      "نحن لا نقدم خدمة واحدة — نبني لك منظومة متكاملة تجمع الأتمتة، التسويق، التصميم، والتطوير. فريق واحد، رؤية واحدة، نتائج متكاملة.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "استشارة مجانية",
    description: "نحلل وضعك الحالي ونفهم أهدافك بدون أي التزام",
    icon: "💬",
  },
  {
    number: "02",
    title: "خطة عمل مخصصة",
    description: "نصمم لك خطة عمل واضحة مع مؤشرات أداء قابلة للقياس",
    icon: "📋",
  },
  {
    number: "03",
    title: "التنفيذ والبناء",
    description: "فريقنا ينفّذ بأعلى معايير الجودة وفق الجدول الزمني المتفق",
    icon: "⚙️",
  },
  {
    number: "04",
    title: "النتائج والنمو",
    description: "نقيس كل شيء ونحسّن باستمرار لضمان أفضل عائد على الاستثمار",
    icon: "📈",
  },
] as const;

export const PRICING_TIERS = {
  aiAutomation: [
    {
      name: "Starter",
      nameAr: "الأساسي",
      price: "3,000",
      period: "ريال/شهر",
      features: [
        "1 workflow أتمتة",
        "بوت واتساب",
        "دعم عبر البريد الإلكتروني",
        "تقرير شهري",
      ],
      popular: false,
    },
    {
      name: "Growth",
      nameAr: "النمو",
      price: "7,000",
      period: "ريال/شهر",
      features: [
        "3 workflows أتمتة",
        "بوت واتساب + CRM",
        "وكيل ذكاء اصطناعي",
        "دعم أولوية",
        "تقارير أسبوعية",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      nameAr: "المؤسسات",
      price: "مخصص",
      period: "",
      features: [
        "workflows غير محدودة",
        "كل مزايا Growth",
        "مدير حساب مخصص",
        "تكاملات مخصصة",
        "SLA مضمون",
      ],
      popular: false,
    },
  ],
} as const;

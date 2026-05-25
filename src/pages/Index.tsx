import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  Camera,
  CheckCircle,
  Flame,
  Home,
  KeyRound,
  Laptop,
  Network,
  Phone,
  ScanLine,
  ShieldAlert,
  ShieldOff,
  Star,
  Volume2,
} from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import MapBlock from "@/components/MapBlock";
import Navbar from "@/components/Navbar";
import PartnersMarquee from "@/components/PartnersMarquee";
import { useLanguage } from "@/lib/language";

const localAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1557597774-9d273605dfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1100",
  "https://images.unsplash.com/photo-1585367437379-e0b71bb18156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1100",
  "https://images.unsplash.com/photo-1614519473079-44574d3f4389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1100",
  "https://images.unsplash.com/photo-1523121766138-78320028206b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1100",
  "https://images.unsplash.com/photo-1571680301128-d9344ac2da15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1100",
  "https://images.unsplash.com/photo-1580674287405-80cd77a2fee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1100",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1100",
  localAsset("realisations/realisation-12.jpeg"),
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1100",
  "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1100",
];

const SERVICES = [
  { icon: Camera, title: "Videosurveillance", desc: "Installation et fourniture de cameras HD, IP, dome, PTZ. Stockage NVR/DVR et acces mobile.", img: SERVICE_IMAGES[0] },
  { icon: ShieldAlert, title: "Systeme Anti-Intrusion", desc: "Alarmes perimetrique, detecteurs de mouvement, sirenes et alertes en temps reel.", img: SERVICE_IMAGES[1] },
  { icon: Flame, title: "Detection Incendie", desc: "Centrales incendie, detecteurs de fumee et thermiques conformes aux normes.", img: SERVICE_IMAGES[2] },
  { icon: KeyRound, title: "Controle d'Acces", desc: "Badges RFID, biometrie, reconnaissance faciale et interphone video.", img: SERVICE_IMAGES[3] },
  { icon: ScanLine, title: "Scanner Corporel", desc: "Portiques de detection metaux et scanners corporels pour sites securises.", img: SERVICE_IMAGES[4] },
  { icon: ShieldOff, title: "Securite Anti-Vol", desc: "Systemes EAS, tags securises et portiques pour commerces et entrepots.", img: SERVICE_IMAGES[5] },
  { icon: Volume2, title: "Sonorisation & AV", desc: "Systemes audiovisuels, salles de conference et affichage dynamique.", img: SERVICE_IMAGES[6] },
  { icon: Network, title: "Reseaux Informatiques", desc: "Cablage Cat6, fibre optique, Wi-Fi entreprise et baies de brassage.", img: SERVICE_IMAGES[7] },
  { icon: Laptop, title: "Fourniture Materiel IT", desc: "Ordinateurs, imprimantes, onduleurs, consommables et materiel bureautique pour entreprises.", img: SERVICE_IMAGES[8] },
  { icon: Home, title: "Domotique & Automatisation", desc: "Batiments intelligents : eclairage, HVAC, securite integres.", img: SERVICE_IMAGES[9] },
];

const STATS = [
  { value: "500+", label: "Clients satisfaits" },
  { value: "15+", label: "Annees d'experience" },
  { value: "1 200+", label: "Projets realises" },
  { value: "24/7", label: "Support & maintenance" },
];

const TESTIMONIALS = [
  { name: "Karim Bensalem", role: "Directeur General, Hotel Panorama", text: "GSV a installe un systeme complet de videosurveillance dans notre hotel. Travail impeccable, equipe tres professionnelle." },
  { name: "Samira Ouali", role: "Responsable Securite, Centre Commercial Atlas", text: "Leur systeme anti-intrusion a considerablement renforce notre securite. Reactifs et de confiance. Je recommande vivement." },
  { name: "Ahmed Meziane", role: "PDG, Groupe Industriel Meziane", text: "Partenaire depuis 5 ans. Interventions rapides, materiel de qualite et equipe toujours disponible. Satisfaction totale." },
];

const HOME_TEXT = {
  fr: {
    services: [
      ["Videosurveillance", "Installation et fourniture de cameras HD, IP, dome, PTZ. Stockage NVR/DVR et acces mobile."],
      ["Systeme Anti-Intrusion", "Alarmes perimetrique, detecteurs de mouvement, sirenes et alertes en temps reel."],
      ["Detection Incendie", "Centrales incendie, detecteurs de fumee et thermiques conformes aux normes."],
      ["Controle d'Acces", "Badges RFID, biometrie, reconnaissance faciale et interphone video."],
      ["Scanner Corporel", "Portiques de detection metaux et scanners corporels pour sites securises."],
      ["Securite Anti-Vol", "Systemes EAS, tags securises et portiques pour commerces et entrepots."],
      ["Sonorisation & AV", "Systemes audiovisuels, salles de conference et affichage dynamique."],
      ["Reseaux Informatiques", "Cablage Cat6, fibre optique, Wi-Fi entreprise et baies de brassage."],
      ["Fourniture Materiel IT", "Ordinateurs, imprimantes, onduleurs, consommables et materiel bureautique pour entreprises."],
      ["Domotique & Automatisation", "Batiments intelligents : eclairage, HVAC, securite integres."],
    ],
    stats: ["Clients satisfaits", "Annees d'experience", "Projets realises", "Support & maintenance"],
    why: ["Entreprise fondee en 2020", "Diagnostic pousse pour determiner vos besoins", "Services adaptes a chaque client", "Approche innovante et installation professionnelle", "Solutions fiables pour ameliorer la securite de votre site"],
    testimonials: TESTIMONIALS,
  },
  en: {
    services: [
      ["Video surveillance", "Supply and installation of HD, IP, dome and PTZ cameras with NVR/DVR storage and mobile access."],
      ["Intrusion alarm system", "Perimeter alarms, motion detectors, sirens and real-time alerts."],
      ["Fire detection", "Fire panels, smoke detectors and heat detectors compliant with safety requirements."],
      ["Access control", "RFID badges, biometrics, facial recognition and video intercom systems."],
      ["Body scanner", "Metal detection gates and body scanners for secure sites."],
      ["Anti-theft security", "EAS systems, security tags and gates for shops and warehouses."],
      ["Sound & AV systems", "Professional audiovisual systems, meeting rooms and digital signage."],
      ["Computer networks", "Cat6 cabling, fiber optics, business Wi-Fi and network cabinets."],
      ["Office & IT equipment", "Computers, printers, UPS units, consumables and office IT equipment for companies."],
      ["Smart automation", "Smart buildings: lighting, HVAC and integrated security control."],
    ],
    stats: ["Satisfied clients", "Years of experience", "Completed projects", "Support & maintenance"],
    why: ["Company founded in 2020", "Detailed diagnosis to identify your needs", "Services adapted to each client", "Innovative approach and professional installation", "Reliable solutions to improve your site's security"],
    testimonials: [
      { name: "Karim Bensalem", role: "General Manager, Hotel Panorama", text: "GSV installed a full video surveillance system in our hotel. Clean work and a very professional team." },
      { name: "Samira Ouali", role: "Security Manager, Atlas Shopping Center", text: "Their intrusion alarm system greatly strengthened our security. Responsive and trustworthy. Highly recommended." },
      { name: "Ahmed Meziane", role: "CEO, Meziane Industrial Group", text: "A partner for 5 years. Fast interventions, quality equipment and a team that is always available." },
    ],
  },
  ar: {
    services: [
      ["المراقبة بالفيديو", "توريد وتركيب كاميرات HD و IP وقبة و PTZ مع تخزين NVR/DVR ووصول عبر الهاتف."],
      ["نظام مكافحة التسلل", "إنذارات محيطية وكواشف حركة وصفارات وتنبيهات فورية."],
      ["كشف الحرائق", "لوحات إنذار حريق وكواشف دخان وحرارة مطابقة لمتطلبات السلامة."],
      ["التحكم في الدخول", "بطاقات RFID وبصمة وتعرف على الوجه وأنظمة إنترفون بالفيديو."],
      ["الماسح الجسدي", "بوابات كشف المعادن وماسحات جسدية للمواقع الحساسة."],
      ["الحماية من السرقة", "أنظمة EAS وبطاقات حماية وبوابات للمتاجر والمخازن."],
      ["الصوتيات والأنظمة السمعية البصرية", "أنظمة صوت وصورة احترافية وقاعات اجتماعات وشاشات عرض."],
      ["الشبكات المعلوماتية", "كابلات Cat6 وألياف بصرية و Wi-Fi للمؤسسات وخزائن شبكات."],
      ["تجهيزات مكتبية ومعلوماتية", "حواسيب وطابعات ومزودات طاقة وملحقات وتجهيزات مكتبية للشركات."],
      ["الأتمتة والبيت الذكي", "مبان ذكية: إضاءة وتكييف وتحكم أمني مدمج."],
    ],
    stats: ["عميل راض", "سنوات خبرة", "مشروع منجز", "دعم وصيانة"],
    why: ["شركة تأسست سنة 2020", "تشخيص دقيق لتحديد احتياجاتكم", "خدمات مناسبة لكل عميل", "نهج مبتكر وتركيب احترافي", "حلول موثوقة لتحسين أمن موقعكم"],
    testimonials: [
      { name: "كريم بن سالم", role: "المدير العام، فندق بانوراما", text: "قامت GSV بتركيب نظام مراقبة كامل في فندقنا. عمل نظيف وفريق محترف جداً." },
      { name: "سميرة والي", role: "مسؤولة الأمن، مركز أطلس التجاري", text: "نظام مكافحة التسلل عزز أمننا بشكل كبير. فريق سريع وموثوق. أنصح بهم." },
      { name: "أحمد مزيان", role: "المدير التنفيذي، مجمع مزيان الصناعي", text: "شريك منذ 5 سنوات. تدخلات سريعة، معدات ذات جودة وفريق متاح دائماً." },
    ],
  },
} as const;

const TRUST_TEXT = {
  fr: {
    approvedTitle: "Agree et accompagne",
    approvedText: "GSV s'engage a respecter les exigences techniques de chaque site avec des installations propres, documentees et suivies.",
    satisfactionLabel: "Satisfaction garantie",
  },
  en: {
    approvedTitle: "Approved and supported",
    approvedText: "GSV is committed to meeting each site's technical requirements with clean, documented and monitored installations.",
    satisfactionLabel: "Guaranteed satisfaction",
  },
  ar: {
    approvedTitle: "اعتماد ومرافقة",
    approvedText: "تلتزم GSV باحترام المتطلبات التقنية لكل موقع من خلال تركيبات نظيفة وموثقة ومتابعة.",
    satisfactionLabel: "رضا مضمون",
  },
};

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const }}>
      {children}
    </motion.div>
  );
}

export default function Index() {
  const { language, t } = useLanguage();
  const homeText = HOME_TEXT[language];
  const trustText = TRUST_TEXT[language];
  const services = SERVICES.map((service, index) => ({
    ...service,
    title: homeText.services[index][0],
    desc: homeText.services[index][1],
  }));
  const stats = STATS.map((stat, index) => ({ ...stat, label: homeText.stats[index] }));

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      <section className="relative min-h-[760px] overflow-hidden bg-gray-950 pt-40 pb-24">
        <img
          src={`${import.meta.env.BASE_URL}hero/gsv-home-hero.png`}
          alt="Maison securisee par GSV"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/82 via-gray-950/48 to-gray-950/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/48 via-transparent to-gray-950/18" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/70" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight text-white mb-5">{t("heroTitle")}</h1>
            <p className="text-lg text-white/76 leading-relaxed mb-8 max-w-xl">{t("heroText")}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="gsv-gradient-button inline-flex items-center justify-center px-7 py-3 rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200">{t("quoteButton")}</Link>
              <Link to="/services" className="inline-flex items-center justify-center px-7 py-3 rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200 border border-white/35 bg-white/12 text-white backdrop-blur-md hover:bg-white/20">{t("servicesButton")}</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10 border-t border-white/18">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/65 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-12" dir="ltr">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="flex flex-col items-center gap-5 border-y border-gray-100 py-8 text-center sm:flex-row sm:text-left">
              <img
                src={`${import.meta.env.BASE_URL}badges/agree-etat.png`}
                alt="Agree par l'etat"
                className="h-28 w-auto shrink-0 object-contain sm:h-32"
                loading="lazy"
              />
              <div className="max-w-xl" dir={language === "ar" ? "rtl" : "ltr"}>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">{t("certified")}</p>
                <h2 className="text-2xl font-bold text-gray-900">{trustText.approvedTitle}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{trustText.approvedText}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white" dir="ltr">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative min-h-[440px]">
            <div className="lg:absolute lg:right-0 lg:top-0 lg:w-[56%]">
              <div className="border-t-4 border-sky-300 border-r-4 border-r-rose-300 shadow-xl shadow-gray-200/80">
                <img
                  src={`${import.meta.env.BASE_URL}about/gsv-office.png`}
                  alt="Bureau GLOBAL SECURITY VISION"
                  className="h-[360px] w-full object-cover"
                />
              </div>
            </div>
            <div className="relative z-10 mt-[-60px] lg:mt-16 lg:w-[56%] border-l-4 border-sky-300 bg-white p-7 sm:p-10 shadow-2xl shadow-gray-200" dir={language === "ar" ? "rtl" : "ltr"}>
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-3">{t("aboutUs")}</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">GLOBAL SECURITY VISION</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {t("aboutPreviewText")}
              </p>
              <Link to="/about" className="gsv-gradient-button inline-flex items-center rounded-2xl px-6 py-3 text-sm font-semibold">
                {t("readMore")}
                <ArrowRight size={15} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" dir="ltr">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1fr] lg:items-start">
            <FadeIn>
              <div className="relative min-h-[520px]">
                <img
                  src={`${import.meta.env.BASE_URL}realisations/realisation-10.jpeg`}
                  alt="Installation reseau GSV"
                  className="h-[330px] w-[76%] object-cover shadow-xl shadow-gray-200"
                />
                <img
                  src={`${import.meta.env.BASE_URL}realisations/realisation-16.jpeg`}
                  alt="Systeme de videosurveillance GSV"
                  className="absolute bottom-0 right-0 h-[290px] w-[76%] object-cover shadow-2xl shadow-gray-200"
                />
              </div>
            </FadeIn>
            <FadeIn>
              <div className="pt-4" dir={language === "ar" ? "rtl" : "ltr"}>
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-3">{t("whyEyebrow")}</p>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900 mb-5">{t("whyTitle")}</h2>
                <p className="text-gray-500 leading-relaxed mb-7 max-w-xl">{t("whyText")}</p>
                <ul className="space-y-3 max-w-xl">
                  {homeText.why.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-sky-600 shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link to="/about" className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 bg-white border border-gray-200 hover:border-sky-200">
                    {t("navAbout")} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24" dir="ltr">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mx-auto mb-12 h-24 w-px bg-gray-300" />
          <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
            <FadeIn>
              <div className="text-center lg:text-left" dir={language === "ar" ? "rtl" : "ltr"}>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">{t("servicesTitle")}</h2>
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">{t("servicesEyebrow")}</p>
                <p className="mt-5 text-sm leading-relaxed text-gray-500 lg:max-w-xs">{t("homeServicesText")}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <img
                src={`${import.meta.env.BASE_URL}realisations/realisation-09.jpeg`}
                alt="Travaux GSV"
                className="h-[360px] w-full object-cover shadow-xl shadow-gray-200"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.05}>
                <Link to="/services" className="group block h-full">
                  <div className="h-full rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md transition-all duration-200">
                    <div className="overflow-hidden h-60 sm:h-64"><img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                    <div className="p-5">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="gsv-accent-icon w-8 h-8 rounded-lg flex items-center justify-center shrink-0 group-hover:text-rose-500 transition-colors"><s.icon size={15} /></div>
                        <h3 className="font-semibold text-gray-900 text-sm">{s.title}</h3>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                      <div className="flex items-center gap-1 mt-3 text-xs font-medium text-sky-600 group-hover:text-rose-500 transition-colors">{t("learnMore")} <ArrowRight size={11} /></div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <PartnersMarquee />

      <MapBlock />

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{t("testimonialsEyebrow")}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{t("testimonialsTitle")}</h2>
              </div>
              <img
                src={`${import.meta.env.BASE_URL}badges/satisfaction.png`}
                alt={trustText.satisfactionLabel}
                className="h-28 w-auto object-contain sm:h-32"
                loading="lazy"
              />
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {homeText.testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.08}>
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <div className="flex gap-0.5 mb-4">{Array.from({ length: 5 }).map((_, j) => <Star key={j} size={13} className="fill-yellow-400 text-yellow-400" />)}</div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{`"${t.text}"`}</p>
                  <div><div className="text-sm font-semibold text-gray-900">{t.name}</div><div className="text-xs text-gray-400 mt-0.5">{t.role}</div></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn><div><p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{t("faqEyebrow")}</p><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("faqTitle")}</h2><p className="text-gray-500 text-sm leading-relaxed max-w-xs">{t("faqText")}</p></div></FadeIn>
            <FadeIn delay={0.1}><FaqAccordion /></FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-28" style={{ background: "radial-gradient(circle at 25% 35%, rgba(90,168,232,0.34), transparent 28%), radial-gradient(circle at 78% 45%, rgba(224,91,99,0.24), transparent 24%)" }} />
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("finalCtaTitle")}</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">{t("finalCtaText")}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-2xl text-sm font-semibold bg-white text-gray-950"><Phone size={16} className="mr-2" />{t("contactUs")}</Link>
                <Link to="/services" className="inline-flex items-center justify-center px-8 py-3 rounded-2xl text-sm font-semibold border border-white/20 text-white">{t("servicesButton")}</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}

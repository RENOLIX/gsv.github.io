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

const SERVICES = [
  { icon: Camera, title: "Videosurveillance", desc: "Installation et fourniture de cameras HD, IP, dome, PTZ. Stockage NVR/DVR et acces mobile.", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: ShieldAlert, title: "Systeme Anti-Intrusion", desc: "Alarmes perimetrique, detecteurs de mouvement, sirenes et alertes en temps reel.", img: "https://images.unsplash.com/photo-1585367437379-e0b71bb18156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: Flame, title: "Detection Incendie", desc: "Centrales incendie, detecteurs de fumee et thermiques conformes aux normes.", img: "https://images.unsplash.com/photo-1614519473079-44574d3f4389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: KeyRound, title: "Controle d'Acces", desc: "Badges RFID, biometrie, reconnaissance faciale et interphone video.", img: "https://images.unsplash.com/photo-1523121766138-78320028206b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: ScanLine, title: "Scanner Corporel", desc: "Portiques de detection metaux et scanners corporels pour sites securises.", img: "https://images.unsplash.com/photo-1571680301128-d9344ac2da15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: ShieldOff, title: "Securite Anti-Vol", desc: "Systemes EAS, tags securises et portiques pour commerces et entrepots.", img: "https://images.unsplash.com/photo-1580674287405-80cd77a2fee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: Volume2, title: "Sonorisation & AV", desc: "Systemes audiovisuels, salles de conference et affichage dynamique.", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: Network, title: "Reseaux Informatiques", desc: "Cablage Cat6, fibre optique, Wi-Fi entreprise et baies de brassage.", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: Laptop, title: "Fourniture Materiel IT", desc: "Ordinateurs, imprimantes, onduleurs, consommables et materiel bureautique pour entreprises.", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: Home, title: "Domotique & Automatisation", desc: "Batiments intelligents : eclairage, HVAC, securite integres.", img: "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
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
    why: ["Techniciens certifies par les fabricants", "Materiel de marques internationales", "Etude technique et devis gratuits", "Maintenance preventive et corrective 24/7", "Garantie pieces et main-d'oeuvre"],
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
    why: ["Technicians certified by manufacturers", "International brand equipment", "Free technical study and quote", "Preventive and corrective maintenance 24/7", "Parts and labor warranty"],
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
    why: ["تقنيون معتمدون من المصنعين", "معدات من علامات عالمية", "دراسة تقنية وعرض سعر مجاني", "صيانة وقائية وتصحيحية 24/7", "ضمان على القطع واليد العاملة"],
    testimonials: [
      { name: "كريم بن سالم", role: "المدير العام، فندق بانوراما", text: "قامت GSV بتركيب نظام مراقبة كامل في فندقنا. عمل نظيف وفريق محترف جداً." },
      { name: "سميرة والي", role: "مسؤولة الأمن، مركز أطلس التجاري", text: "نظام مكافحة التسلل عزز أمننا بشكل كبير. فريق سريع وموثوق. أنصح بهم." },
      { name: "أحمد مزيان", role: "المدير التنفيذي، مجمع مزيان الصناعي", text: "شريك منذ 5 سنوات. تدخلات سريعة، معدات ذات جودة وفريق متاح دائماً." },
    ],
  },
} as const;

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
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={`${import.meta.env.BASE_URL}hero/gsv-hero-mobile.mp4`} media="(max-width: 767px)" type="video/mp4" />
          <source src={`${import.meta.env.BASE_URL}hero/gsv-hero.mp4`} media="(min-width: 768px)" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/88 via-gray-950/55 to-gray-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/55 via-transparent to-gray-950/45" />
        <div className="absolute -bottom-1 left-0 right-0 h-28 bg-white" style={{ clipPath: "polygon(0 54%, 12% 46%, 25% 60%, 41% 42%, 58% 55%, 74% 36%, 88% 48%, 100% 30%, 100% 100%, 0 100%)" }} />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/12 rounded-full px-4 py-1.5 mb-6 ring-1 ring-white/20 backdrop-blur-md">
              <span className="gsv-red-dot w-1.5 h-1.5 rounded-full" />
              <span className="text-xs font-semibold text-white/85">{t("heroBadge")}</span>
            </div>
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

      <section className="bg-white py-7" dir="ltr" aria-label="Badges GSV">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-8 px-6 sm:gap-14">
          <img
            src={`${import.meta.env.BASE_URL}badges/satisfaction.png`}
            alt="Satisfaction garantie"
            className="h-20 w-auto object-contain sm:h-24"
            loading="eager"
          />
          <img
            src={`${import.meta.env.BASE_URL}badges/agree-etat.png`}
            alt="Agree par l'etat"
            className="h-20 w-auto object-contain sm:h-24"
            loading="eager"
          />
        </div>
      </section>

      <section className="py-20 bg-white" dir="ltr">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative min-h-[440px]">
            <div className="lg:absolute lg:right-0 lg:top-0 lg:w-[56%]">
              <div className="border-t-4 border-blue-500 border-r-4 border-r-red-500 shadow-xl shadow-gray-200/80">
                <img
                  src={`${import.meta.env.BASE_URL}about/gsv-office.png`}
                  alt="Bureau GLOBAL SECURITY VISION"
                  className="h-[360px] w-full object-cover"
                />
              </div>
            </div>
            <div className="relative z-10 mt-[-60px] lg:mt-16 lg:w-[56%] border-l-4 border-blue-500 bg-white p-7 sm:p-10 shadow-2xl shadow-gray-200" dir={language === "ar" ? "rtl" : "ltr"}>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">{t("aboutUs")}</p>
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

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{t("servicesEyebrow")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{t("servicesTitle")}</h2>
              <p className="text-gray-500 max-w-xl">{t("homeServicesText")}</p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.05}>
                <Link to="/services" className="group block h-full">
                  <div className="h-full rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md transition-all duration-200">
                    <div className="overflow-hidden h-44"><img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                    <div className="p-5">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="gsv-accent-icon w-8 h-8 rounded-lg flex items-center justify-center shrink-0 group-hover:text-red-600 transition-colors"><s.icon size={15} /></div>
                        <h3 className="font-semibold text-gray-900 text-sm">{s.title}</h3>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                      <div className="flex items-center gap-1 mt-3 text-xs font-medium text-blue-600 group-hover:text-red-600 transition-colors">{t("learnMore")} <ArrowRight size={11} /></div>
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

      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{t("whyEyebrow")}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">{t("whyTitle")}</h2>
                <p className="text-gray-500 leading-relaxed mb-8">{t("whyText")}</p>
                <ul className="space-y-3">
                  {homeText.why.map((item) => (
                    <li key={item} className="flex items-center gap-3"><CheckCircle size={16} className="text-gray-900 shrink-0" /><span className="text-sm text-gray-600">{item}</span></li>
                  ))}
                </ul>
                <div className="mt-8"><Link to="/about" className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 bg-white border border-gray-200">{t("navAbout")} <ArrowRight size={14} /></Link></div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}><div className="rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" alt="Installation camera" className="w-full h-[420px] object-cover" /></div></FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn><div className="mb-12"><p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{t("testimonialsEyebrow")}</p><h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{t("testimonialsTitle")}</h2></div></FadeIn>
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
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 25% 35%, rgba(11,143,255,0.45), transparent 28%), radial-gradient(circle at 78% 45%, rgba(255,31,45,0.35), transparent 24%)" }} />
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

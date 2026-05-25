import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle, Eye, LockKeyhole, Settings, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import MapBlock from "@/components/MapBlock";
import Navbar from "@/components/Navbar";
import RealisationsMarquee from "@/components/RealisationsMarquee";
import { useLanguage } from "@/lib/language";

const EXPERTISES = [
  { icon: Eye, title: "Videosurveillance", desc: "Supervision claire de vos espaces avec des cameras adaptees a chaque site." },
  { icon: LockKeyhole, title: "Controle d'acces", desc: "Gestion securisee des entrees, zones sensibles et historiques de passage." },
  { icon: ShieldCheck, title: "Anti-intrusion", desc: "Alarmes, detecteurs et alertes pour proteger vos biens en continu." },
  { icon: Settings, title: "Automatisation", desc: "Solutions intelligentes pour rendre votre site plus simple a piloter." },
];

const EXPERTISES_TEXT = {
  fr: [
    { title: "Videosurveillance", desc: "Supervision claire de vos espaces avec des cameras adaptees a chaque site." },
    { title: "Controle d'acces", desc: "Gestion securisee des entrees, zones sensibles et historiques de passage." },
    { title: "Anti-intrusion", desc: "Alarmes, detecteurs et alertes pour proteger vos biens en continu." },
    { title: "Automatisation", desc: "Solutions intelligentes pour rendre votre site plus simple a piloter." },
  ],
  en: [
    { title: "Video surveillance", desc: "Clear monitoring of your spaces with cameras adapted to each site." },
    { title: "Access control", desc: "Secure management of entrances, sensitive areas and access history." },
    { title: "Intrusion protection", desc: "Alarms, detectors and alerts to protect your assets continuously." },
    { title: "Automation", desc: "Smart solutions that make your site easier to manage." },
  ],
  ar: [
    { title: "المراقبة بالفيديو", desc: "متابعة واضحة لمساحاتكم بكاميرات مناسبة لكل موقع." },
    { title: "التحكم في الدخول", desc: "إدارة آمنة للمداخل والمناطق الحساسة وسجل المرور." },
    { title: "الحماية من التسلل", desc: "إنذارات وحساسات وتنبيهات لحماية ممتلكاتكم بشكل مستمر." },
    { title: "الأتمتة", desc: "حلول ذكية تجعل موقعكم أسهل في التحكم والتسيير." },
  ],
};

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const }}>
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const { language, t } = useLanguage();
  const expertises = EXPERTISES.map((item, index) => ({
    ...item,
    ...EXPERTISES_TEXT[language][index],
  }));
  const bullets = {
    fr: ["Entreprise fondee en 2020", "Diagnostic pousse avant chaque proposition", "Solutions adaptees aux besoins reels de chaque client", "Approche innovante et installation professionnelle"],
    en: ["Company founded in 2020", "Detailed diagnosis before every proposal", "Solutions adapted to each client's real needs", "Innovative approach and professional installation"],
    ar: ["شركة تأسست سنة 2020", "تشخيص دقيق قبل كل اقتراح", "حلول مناسبة للاحتياجات الحقيقية لكل عميل", "نهج مبتكر وتركيب احترافي"],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      <section className="relative overflow-hidden bg-gray-950 pt-28 pb-12 text-white">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-sky-300/18 blur-3xl" />
        <div className="absolute right-0 top-8 h-32 w-32 rounded-full bg-rose-300/20 blur-3xl" />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">{t("navAbout")}</p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">{t("aboutHeroTitle")}</h1>
            <p className="text-white/70 text-base max-w-2xl">{t("aboutHeroText")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-14 items-center">
            <FadeIn>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{t("missionEyebrow")}</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("missionTitle")}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{t("aboutFullText")}</p>
                <ul className="mt-7 space-y-3">
                  {bullets[language].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-sky-600 shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-gradient-to-br from-sky-300/18 to-rose-300/18" />
                <img
                  src={`${import.meta.env.BASE_URL}about/gsv-office.png`}
                  alt="Bureau GLOBAL SECURITY VISION"
                  className="relative h-[420px] w-full rounded-2xl object-cover shadow-xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <RealisationsMarquee />

      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{t("expertiseEyebrow")}</p>
              <h2 className="text-3xl font-bold text-gray-900">{t("expertiseTitle")}</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertises.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.07}>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="gsv-accent-icon w-10 h-10 rounded-lg flex items-center justify-center mb-4"><item.icon size={18} /></div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <MapBlock compact />
      <Footer />
    </div>
  );
}

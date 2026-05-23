import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle, Eye, LockKeyhole, Settings, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import MapBlock from "@/components/MapBlock";
import Navbar from "@/components/Navbar";
import RealisationsMarquee from "@/components/RealisationsMarquee";

const ABOUT_TEXT =
  "GLOBAL SECURITY VISION, fondee en 2020, est une entreprise specialisee dans les solutions de securite integrees. Nous offrons des services de videosurveillance, systemes anti-intrusion, alarmes incendie, automatisation, controle d'acces, et bien plus encore. Nous realisons un diagnostic pousse afin de determiner vos besoins et proposons des services parfaitement adaptes a chaque client pour ameliorer la securite de votre site. Grace a notre expertise et a notre approche innovante, nous protegeons vos espaces avec des solutions fiables et efficaces.";

const EXPERTISES = [
  { icon: Eye, title: "Videosurveillance", desc: "Supervision claire de vos espaces avec des cameras adaptees a chaque site." },
  { icon: LockKeyhole, title: "Controle d'acces", desc: "Gestion securisee des entrees, zones sensibles et historiques de passage." },
  { icon: ShieldCheck, title: "Anti-intrusion", desc: "Alarmes, detecteurs et alertes pour proteger vos biens en continu." },
  { icon: Settings, title: "Automatisation", desc: "Solutions intelligentes pour rendre votre site plus simple a piloter." },
];

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
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      <section className="relative overflow-hidden bg-gray-950 pt-28 pb-12 text-white">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 top-8 h-32 w-32 rounded-full bg-red-500/25 blur-3xl" />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">A propos</p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">GLOBAL SECURITY VISION</h1>
            <p className="text-white/70 text-base max-w-2xl">Solutions de securite integrees, diagnostic pousse et accompagnement adapte a chaque client.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-14 items-center">
            <FadeIn>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Notre mission</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Proteger vos espaces avec des solutions fiables et efficaces</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{ABOUT_TEXT}</p>
                <ul className="mt-7 space-y-3">
                  {["Entreprise fondee en 2020", "Diagnostic pousse avant chaque proposition", "Solutions adaptees aux besoins reels de chaque client", "Approche innovante et installation professionnelle"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-blue-600 shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-red-500/20" />
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
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Expertise</p>
              <h2 className="text-3xl font-bold text-gray-900">Ce que nous faisons</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERTISES.map((item, i) => (
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

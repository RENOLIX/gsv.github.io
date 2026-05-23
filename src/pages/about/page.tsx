import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, CheckCircle, Shield, Users, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const VALUES = [
  { icon: Shield, title: "Fiabilite", desc: "Uniquement du materiel de marques certifiees, installe conformement aux normes en vigueur." },
  { icon: Zap, title: "Reactivite", desc: "Intervention rapide pour toute urgence, avec une equipe disponible 24h/24, 7j/7." },
  { icon: Award, title: "Excellence", desc: "Techniciens certifies et formes par les fabricants pour garantir la qualite de chaque installation." },
  { icon: Users, title: "Proximite", desc: "Accompagnement personnalise de l'etude technique jusqu'a la maintenance annuelle." },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const }}>{children}</motion.div>;
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <div className="pt-28 pb-14 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">A Propos</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Global Security Vision</h1>
            <p className="text-gray-500 text-lg max-w-2xl">Depuis plus de 15 ans, nous protegeons entreprises, institutions et particuliers avec les meilleures solutions de securite.</p>
          </motion.div>
        </div>
      </div>
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Notre Histoire</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pionniers de la securite electronique</h2>
              <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                <p>Fondee en 2009, GSV - Global Security Vision est nee de la conviction que chaque individu et chaque entreprise merite une protection fiable.</p>
                <p>Notre equipe de plus de 30 techniciens certifies a realise plus de 1 200 projets a travers le pays, des petites boutiques aux grandes usines, hotels, banques et institutions publiques.</p>
                <p>Aujourd'hui, GSV couvre 9 domaines d'expertise et s'appuie sur les meilleures marques mondiales pour offrir des solutions durables, evolutives et parfaitement adaptees.</p>
              </div>
              <ul className="mt-6 space-y-2.5">
                {["Partenaire officiel Hikvision, Bosch, Dahua, Honeywell", "Certifie CNPE - conformite normes EN 50131", "Couverture nationale : 48 wilayas"].map((item) => <li key={item} className="flex items-center gap-3"><CheckCircle size={15} className="text-gray-700 shrink-0" /><span className="text-sm text-gray-600">{item}</span></li>)}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}><div className="rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/photo-1685720543547-cc4873188c75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" alt="GSV team" className="w-full h-[420px] object-cover" /></div></FadeIn>
        </div>
      </section>
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn><div className="mb-12"><p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Nos Valeurs</p><h2 className="text-3xl font-bold text-gray-900">Ce qui nous guide</h2></div></FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => <FadeIn key={v.title} delay={i * 0.07}><div className="bg-white rounded-xl border border-gray-200 p-6"><div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4"><v.icon size={18} className="text-gray-700" /></div><h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3><p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p></div></FadeIn>)}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

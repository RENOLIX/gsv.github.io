import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { ArrowRight, Camera, CheckCircle, Flame, Home, KeyRound, Network, Phone, ScanLine, ShieldAlert, ShieldOff, Star, Volume2 } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PartnersMarquee from "@/components/PartnersMarquee";

const SERVICES = [
  { icon: Camera, title: "Videosurveillance", desc: "Installation et fourniture de cameras HD, IP, dome, PTZ. Stockage NVR/DVR et acces mobile.", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: ShieldAlert, title: "Systeme Anti-Intrusion", desc: "Alarmes perimetrique, detecteurs de mouvement, sirenes et alertes en temps reel.", img: "https://images.unsplash.com/photo-1585367437379-e0b71bb18156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: Flame, title: "Detection Incendie", desc: "Centrales incendie, detecteurs de fumee et thermiques conformes aux normes.", img: "https://images.unsplash.com/photo-1614519473079-44574d3f4389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: KeyRound, title: "Controle d'Acces", desc: "Badges RFID, biometrie, reconnaissance faciale et interphone video.", img: "https://images.unsplash.com/photo-1523121766138-78320028206b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: ScanLine, title: "Scanner Corporel", desc: "Portiques de detection metaux et scanners corporels pour sites securises.", img: "https://images.unsplash.com/photo-1571680301128-d9344ac2da15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: ShieldOff, title: "Securite Anti-Vol", desc: "Systemes EAS, tags securises et portiques pour commerces et entrepots.", img: "https://images.unsplash.com/photo-1580674287405-80cd77a2fee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: Volume2, title: "Sonorisation & AV", desc: "Systemes audiovisuels, salles de conference et affichage dynamique.", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { icon: Network, title: "Reseaux Informatiques", desc: "Cablage Cat6, fibre optique, Wi-Fi entreprise et baies de brassage.", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
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
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <section className="pt-36 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-1.5 mb-6 ring-1 ring-blue-100">
                <span className="gsv-red-dot w-1.5 h-1.5 rounded-full" />
                <span className="text-xs font-medium text-gray-600">Fourniture · Pose · Maintenance</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-5">Solutions de securite completes pour votre entreprise</h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">GSV accompagne entreprises, administrations et particuliers avec des systemes de securite fiables et durables. Expertise certifiee depuis 2009.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="gsv-gradient-button inline-flex items-center justify-center px-7 py-3 rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200">Demander un devis gratuit</Link>
                <Link to="/services" className="gsv-outline-button inline-flex items-center justify-center px-7 py-3 rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200">Voir nos services</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10 border-t border-gray-100">
                {STATS.map((s) => <div key={s.label}><div className="text-2xl font-bold text-gray-900">{s.value}</div><div className="text-xs text-gray-500 mt-0.5">{s.label}</div></div>)}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900" alt="Cameras de surveillance GSV" className="w-full h-[480px] object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex items-center gap-3">
                <div className="gsv-accent-icon w-10 h-10 rounded-lg flex items-center justify-center shrink-0"><CheckCircle size={20} /></div>
                <div><div className="text-sm font-semibold text-gray-900">Certifie & Agree</div><div className="text-xs text-gray-500">Normes EN 50131</div></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn><div className="mb-12"><p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Nos Services</p><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">9 domaines d'expertise securite</h2><p className="text-gray-500 max-w-xl">De la videosurveillance a la domotique, nous couvrons l'ensemble des besoins en securite electronique.</p></div></FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.05}>
                <Link to="/services" className="group block h-full">
                  <div className="h-full rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md transition-all duration-200">
                    <div className="overflow-hidden h-44"><img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                    <div className="p-5"><div className="flex items-center gap-2.5 mb-2"><div className="gsv-accent-icon w-8 h-8 rounded-lg flex items-center justify-center shrink-0 group-hover:text-red-600 transition-colors"><s.icon size={15} /></div><h3 className="font-semibold text-gray-900 text-sm">{s.title}</h3></div><p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p><div className="flex items-center gap-1 mt-3 text-xs font-medium text-blue-600 group-hover:text-red-600 transition-colors">En savoir plus <ArrowRight size={11} /></div></div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <PartnersMarquee />
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn><div><p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Pourquoi GSV</p><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">Une expertise reconnue depuis 15 ans</h2><p className="text-gray-500 leading-relaxed mb-8">Fondee en 2009, GSV s'est imposee comme reference nationale en solutions de securite integrees. Plus de 1 200 projets realises a travers le pays.</p><ul className="space-y-3">{["Techniciens certifies par les fabricants", "Materiel de marques internationales", "Etude technique et devis gratuits", "Maintenance preventive et corrective 24/7", "Garantie pieces et main-d'oeuvre"].map((item) => <li key={item} className="flex items-center gap-3"><CheckCircle size={16} className="text-gray-900 shrink-0" /><span className="text-sm text-gray-600">{item}</span></li>)}</ul><div className="mt-8"><Link to="/about" className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 bg-white border border-gray-200">A propos de GSV <ArrowRight size={14} /></Link></div></div></FadeIn>
            <FadeIn delay={0.1}><div className="rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" alt="Installation camera" className="w-full h-[420px] object-cover" /></div></FadeIn>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn><div className="mb-12"><p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Temoignages</p><h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ce que disent nos clients</h2></div></FadeIn>
          <div className="grid md:grid-cols-3 gap-6">{TESTIMONIALS.map((t, i) => <FadeIn key={t.name} delay={i * 0.08}><div className="border border-gray-200 rounded-xl p-6 bg-white"><div className="flex gap-0.5 mb-4">{Array.from({ length: 5 }).map((_, j) => <Star key={j} size={13} className="fill-yellow-400 text-yellow-400" />)}</div><p className="text-sm text-gray-600 leading-relaxed mb-5">{`"${t.text}"`}</p><div><div className="text-sm font-semibold text-gray-900">{t.name}</div><div className="text-xs text-gray-400 mt-0.5">{t.role}</div></div></div></FadeIn>)}</div>
        </div>
      </section>
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6"><div className="grid lg:grid-cols-2 gap-16 items-start"><FadeIn><div><p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">FAQ</p><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Questions ?</h2><p className="text-gray-500 text-sm leading-relaxed max-w-xs">Obtenez des reponses claires sur nos installations de securite et notre support technique.</p></div></FadeIn><FadeIn delay={0.1}><FaqAccordion /></FadeIn></div></div>
      </section>
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 25% 35%, rgba(11,143,255,0.45), transparent 28%), radial-gradient(circle at 78% 45%, rgba(255,31,45,0.35), transparent 24%)" }} />
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn><div className="relative"><h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Pret a securiser votre site ?</h2><p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Contactez-nous pour une etude gratuite et un devis personnalise adapte a vos besoins.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-2xl text-sm font-semibold bg-white text-gray-950"><Phone size={16} className="mr-2" />Nous contacter</Link><Link to="/services" className="inline-flex items-center justify-center px-8 py-3 rounded-2xl text-sm font-semibold border border-white/20 text-white">Voir les services</Link></div></div></FadeIn>
        </div>
      </section>
      <Footer />
    </div>
  );
}

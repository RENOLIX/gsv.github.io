import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { ArrowRight, Camera, Flame, Home, KeyRound, Network, ScanLine, ShieldAlert, ShieldOff, Volume2 } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const SERVICES = [
  { icon: Camera, title: "Videosurveillance (CCTV)", subtitle: "Cameras HD, IP & Thermiques", description: "Nous assurons la fourniture et l'installation de systemes de videosurveillance adaptes a tous types de sites. Cameras dome, bullet, PTZ, thermiques. Stockage NVR/DVR et cloud avec acces distant via smartphone.", features: ["Cameras HD 4K", "Vision nocturne", "Acces a distance", "Stockage cloud & NVR", "Analyse video intelligente"] },
  { icon: ShieldAlert, title: "Systeme Anti-Intrusion", subtitle: "Alarme & Perimetrique", description: "Protegez vos locaux 24h/24 avec nos systemes d'alarme de derniere generation. Detecteurs de mouvement PIR, contacts magnetiques, sirenes et notification immediate sur smartphone.", features: ["Detecteurs PIR", "Contacts magnetiques", "Alerte SMS & appel", "Sirenes interieure & exterieure", "Centrale multi-zones"] },
  { icon: Flame, title: "Detection d'Incendie", subtitle: "Protection & Alerte incendie", description: "Installation de systemes de detection incendie conformes aux normes. Detecteurs de fumee, chaleur, CO2, centrale d'alarme incendie et systemes d'extinction automatique.", features: ["Detecteurs de fumee", "Detecteurs thermiques", "Centrale incendie", "Alarme d'evacuation", "Rapport & maintenance"] },
  { icon: KeyRound, title: "Controle d'Acces", subtitle: "Badges, Biometrie & Interphone", description: "Gerez et securisez vos zones sensibles avec nos solutions. Lecteurs RFID, empreintes digitales, reconnaissance faciale et systemes d'interphone video.", features: ["Lecteurs RFID", "Biometrie", "Interphone video", "Gestion des droits d'acces", "Journal des passages"] },
  { icon: ScanLine, title: "Scanner Corporel", subtitle: "Portiques de securite", description: "Solutions professionnelles pour sites a haute securite. Portiques de detection de metaux, scanners corporels pour banques, aeroports et institutions.", features: ["Portiques detection metaux", "Detecteurs manuels", "Scanners corporels", "Faible rayonnement", "Certifies CE"] },
  { icon: ShieldOff, title: "Securite Anti-Vol Avancee", subtitle: "EAS & Protection des biens", description: "Protegez vos marchandises avec nos systemes anti-vol EAS. Tags souples et rigides, portiques AM/RF/RFID pour commerces, supermarches et entrepots.", features: ["Portiques AM & RF", "Tags EAS securises", "Desactivateurs", "RFID pour inventaire", "Alarme discrete"] },
  { icon: Volume2, title: "Sonorisation & Systemes AV", subtitle: "Audio, Video & Multimedia Pro", description: "Conception et installation de systemes audiovisuels. Sonorisation d'ambiance, salles de reunion, auditoriums et affichage dynamique.", features: ["Sonorisation d'ambiance", "Salles de conference AV", "Affichage dynamique", "Systemes de diffusion", "Cablage audio pro"] },
  { icon: Network, title: "Reseaux Informatiques", subtitle: "Infrastructure IT & Cablage", description: "Infrastructure reseau fiable et performante. Cablage structure Cat6/Cat6A, fibre optique, Wi-Fi entreprise, baies de brassage et administration reseau.", features: ["Cablage structure Cat6/6A", "Fibre optique", "Wi-Fi entreprise", "Baies de brassage", "Maintenance & supervision"] },
  { icon: Home, title: "Domotique & Automatisation", subtitle: "Batiments & Maisons intelligentes", description: "Transformez votre espace en environnement intelligent. Gestion centralisee de l'eclairage, stores, chauffage, climatisation et securite.", features: ["Eclairage intelligent", "Stores motorises", "Gestion HVAC", "Integration securite", "App mobile de controle"] },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const }}>{children}</motion.div>;
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <div className="pt-28 pb-14 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Nos Services</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Solutions de securite completes</h1>
            <p className="text-gray-500 text-lg max-w-2xl">9 domaines d'expertise pour proteger ce qui compte le plus pour vous.</p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-5">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.04}>
            <div className="border border-gray-200 rounded-xl p-6 sm:p-8 bg-white hover:border-gray-400 transition-colors">
              <div className="grid md:grid-cols-[56px_1fr_auto] gap-6 items-start">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center shrink-0"><s.icon size={24} className="text-gray-700" /></div>
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">{s.subtitle}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.description}</p>
                  <div className="flex flex-wrap gap-2">{s.features.map((f) => <span key={f} className="text-xs bg-gray-100 text-gray-600 rounded-md px-3 py-1 font-medium">{f}</span>)}</div>
                </div>
                <Link to="/contact" className="shrink-0 inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 bg-white border border-gray-200 shadow-sm">
                  Devis <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      <Footer />
    </div>
  );
}

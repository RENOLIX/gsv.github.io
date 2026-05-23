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
  ScanLine,
  ShieldAlert,
  ShieldCheck,
  ShieldOff,
  Volume2,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const SERVICES = [
  {
    icon: Camera,
    title: "Videosurveillance (CCTV)",
    subtitle: "Cameras IP, HD, thermiques et acces mobile",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    description: "Systemes de surveillance fiables pour magasins, entreprises, residences, entrepots et sites industriels.",
    features: ["Cameras 4K", "Vision nocturne", "NVR / Cloud", "Acces smartphone"],
  },
  {
    icon: ShieldAlert,
    title: "Systeme Anti-Intrusion",
    subtitle: "Alarmes, detecteurs, sirenes et alertes instantanees",
    image: "https://images.unsplash.com/photo-1585367437379-e0b71bb18156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    description: "Protection active contre les intrusions avec detection de mouvement, contacts magnetiques et notification rapide.",
    features: ["Detecteurs PIR", "Alerte SMS", "Sirene exterieure", "Centrale multi-zones"],
  },
  {
    icon: Flame,
    title: "Detection Incendie",
    subtitle: "Centrales incendie, detecteurs et evacuation",
    image: "https://images.unsplash.com/photo-1614519473079-44574d3f4389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    description: "Installation de dispositifs incendie adaptes aux bureaux, commerces, hotels, usines et etablissements publics.",
    features: ["Detecteurs fumee", "Detecteurs chaleur", "Sirene evacuation", "Maintenance"],
  },
  {
    icon: KeyRound,
    title: "Controle d'Acces",
    subtitle: "Badges, biometrie, interphone et droits utilisateurs",
    image: "https://images.unsplash.com/photo-1523121766138-78320028206b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    description: "Gestion simple et securisee des entrees, zones sensibles, horaires d'acces et historiques de passage.",
    features: ["RFID", "Biometrie", "Interphone video", "Journal des passages"],
  },
  {
    icon: ScanLine,
    title: "Scanner Corporel",
    subtitle: "Portiques de detection et controle securise",
    image: "https://images.unsplash.com/photo-1571680301128-d9344ac2da15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    description: "Solutions professionnelles pour les sites exigeants : aeroports, institutions, banques et evenements.",
    features: ["Portiques metaux", "Detecteurs manuels", "Controle flux", "Installation pro"],
  },
  {
    icon: ShieldOff,
    title: "Securite Anti-Vol",
    subtitle: "Portiques EAS, tags et protection marchandises",
    image: "https://images.unsplash.com/photo-1580674287405-80cd77a2fee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    description: "Protection discrete et efficace des commerces, supermarches, showrooms et entrepots.",
    features: ["Portiques AM/RF", "Tags antivol", "Desactivation", "Audit magasin"],
  },
  {
    icon: Volume2,
    title: "Sonorisation & AV",
    subtitle: "Audio professionnel, affichage et salles de reunion",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    description: "Conception de systemes audiovisuels pour espaces commerciaux, salles de conference et lieux publics.",
    features: ["Audio ambiance", "Conference", "Affichage dynamique", "Cablage pro"],
  },
  {
    icon: Network,
    title: "Reseaux Informatiques",
    subtitle: "Cablage, baie, fibre optique et Wi-Fi entreprise",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    description: "Infrastructure reseau stable, organisee et prete pour vos cameras, serveurs, postes et applications.",
    features: ["Cat6 / Cat6A", "Fibre optique", "Baie brassage", "Wi-Fi pro"],
  },
  {
    icon: Laptop,
    title: "Fourniture Materiel Bureautique & IT",
    subtitle: "Ordinateurs, imprimantes, accessoires et consommables",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    description: "Fourniture de materiels bureautiques et informatiques pour entreprises : postes de travail, imprimantes, onduleurs, accessoires, consommables et equipements reseau.",
    features: ["PC & laptops", "Imprimantes", "Onduleurs", "Consommables"],
  },
  {
    icon: Home,
    title: "Domotique & Automatisation",
    subtitle: "Batiments intelligents et pilotage centralise",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    description: "Automatisation de l'eclairage, stores, acces, climatisation et securite depuis une interface simple.",
    features: ["Eclairage", "Stores", "HVAC", "Application mobile"],
  },
];

const PROCESS = [
  "Etude technique",
  "Devis clair",
  "Installation propre",
  "Formation utilisateur",
  "Maintenance 24/7",
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const }}
    >
      {children}
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 mb-6 ring-1 ring-blue-100">
                <ShieldCheck size={14} className="text-blue-600" />
                <span className="text-xs font-semibold text-gray-600">Fourniture · Pose · Maintenance</span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Nos Services</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-gray-900 mb-5">
                Des solutions de securite completes, installees proprement
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                GSV accompagne les entreprises, commerces, institutions et particuliers avec des systemes fiables, evolutifs et faciles a utiliser au quotidien.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link to="/contact" className="gsv-gradient-button inline-flex items-center justify-center rounded-2xl px-7 py-3 text-sm font-semibold">
                  Demander un devis
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                <a href="#services-grid" className="gsv-outline-button inline-flex items-center justify-center rounded-2xl px-7 py-3 text-sm font-semibold">
                  Voir les services
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }}>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?auto=format&fit=crop&w=900&q=80"
                  alt="Installation de solutions de securite"
                  className="h-[360px] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-6">
                  <div className="grid grid-cols-3 gap-3 text-white">
                    <div>
                      <div className="text-2xl font-bold">10</div>
                      <div className="text-xs text-white/75">Domaines</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-xs text-white/75">Support</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-xs text-white/75">Annees</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services-grid" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Expertises</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Chaque besoin a sa solution</h2>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                Choisissez un service, expliquez-nous votre site, puis notre equipe vous propose une solution adaptee a votre budget et vos contraintes.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.04}>
                <article className="group h-full overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute left-5 bottom-5 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/92 text-gray-950 shadow-sm backdrop-blur">
                        <service.icon size={21} />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">{service.subtitle}</p>
                        <h3 className="text-lg font-bold text-white leading-tight">{service.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span key={feature} className="rounded-md bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link to="/contact" className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-red-600">
                      Demander ce service
                      <ArrowRight size={15} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <FadeIn>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Methode</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Un projet propre du diagnostic a la maintenance</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Notre equipe analyse votre site, recommande le bon materiel, realise une installation nette, puis reste disponible pour les reglages, extensions et maintenances.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-5 gap-3">
              {PROCESS.map((step, index) => (
                <FadeIn key={step} delay={index * 0.05}>
                  <div className="h-full rounded-xl border border-gray-200 bg-white p-4">
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg gsv-gradient-button text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm font-semibold text-gray-900 leading-snug">{step}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-35" style={{ background: "radial-gradient(circle at 18% 40%, rgba(11,143,255,0.55), transparent 30%), radial-gradient(circle at 82% 35%, rgba(255,31,45,0.42), transparent 24%)" }} />
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/45 mb-3">Devis gratuit</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Vous avez un site a securiser ?</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                Envoyez-nous votre besoin, meme approximatif. Nous vous aidons a choisir le bon systeme sans surdimensionner votre installation.
              </p>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-3 text-sm font-semibold text-gray-950">
              Contacter GSV
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

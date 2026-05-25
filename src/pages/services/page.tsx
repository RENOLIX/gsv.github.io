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
  ShieldOff,
  Volume2,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/lib/language";

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

const SERVICES_TEXT = {
  fr: {
    metrics: ["Domaines", "Support", "Annees"],
    process: PROCESS,
    services: SERVICES.map((service) => ({
      title: service.title,
      subtitle: service.subtitle,
      description: service.description,
      features: service.features,
    })),
  },
  en: {
    metrics: ["Areas", "Support", "Years"],
    process: ["Technical study", "Clear quote", "Clean installation", "User training", "24/7 maintenance"],
    services: [
      { title: "Video surveillance (CCTV)", subtitle: "IP, HD, thermal cameras and mobile access", description: "Reliable surveillance systems for shops, companies, homes, warehouses and industrial sites.", features: ["4K cameras", "Night vision", "NVR / Cloud", "Smartphone access"] },
      { title: "Intrusion alarm system", subtitle: "Alarms, detectors, sirens and instant alerts", description: "Active protection against intrusion with motion detection, magnetic contacts and fast notifications.", features: ["PIR detectors", "SMS alert", "Outdoor siren", "Multi-zone panel"] },
      { title: "Fire detection", subtitle: "Fire panels, detectors and evacuation", description: "Installation of fire safety systems for offices, shops, hotels, factories and public buildings.", features: ["Smoke detectors", "Heat detectors", "Evacuation siren", "Maintenance"] },
      { title: "Access control", subtitle: "Badges, biometrics, intercom and user permissions", description: "Simple and secure management of entrances, sensitive areas, access schedules and passage logs.", features: ["RFID", "Biometrics", "Video intercom", "Access logs"] },
      { title: "Body scanner", subtitle: "Detection gates and secure screening", description: "Professional solutions for demanding sites: airports, institutions, banks and events.", features: ["Metal gates", "Hand detectors", "Flow control", "Pro installation"] },
      { title: "Anti-theft security", subtitle: "EAS gates, tags and merchandise protection", description: "Discreet and effective protection for shops, supermarkets, showrooms and warehouses.", features: ["AM/RF gates", "Anti-theft tags", "Deactivation", "Store audit"] },
      { title: "Sound & AV systems", subtitle: "Professional audio, display and meeting rooms", description: "Design of audiovisual systems for commercial spaces, conference rooms and public venues.", features: ["Ambient audio", "Conference", "Digital signage", "Pro cabling"] },
      { title: "Computer networks", subtitle: "Cabling, cabinets, fiber optics and business Wi-Fi", description: "Stable and organized network infrastructure ready for cameras, servers, workstations and applications.", features: ["Cat6 / Cat6A", "Fiber optics", "Patch cabinet", "Pro Wi-Fi"] },
      { title: "Office & IT equipment supply", subtitle: "Computers, printers, accessories and consumables", description: "Supply of office and IT equipment for companies: workstations, printers, UPS units, accessories, consumables and network equipment.", features: ["PC & laptops", "Printers", "UPS units", "Consumables"] },
      { title: "Smart automation", subtitle: "Smart buildings and centralized control", description: "Automation of lighting, blinds, access, air conditioning and security from a simple interface.", features: ["Lighting", "Blinds", "HVAC", "Mobile app"] },
    ],
  },
  ar: {
    metrics: ["مجالات", "دعم", "سنوات"],
    process: ["دراسة تقنية", "عرض واضح", "تركيب نظيف", "تكوين المستخدم", "صيانة 24/7"],
    services: [
      { title: "المراقبة بالفيديو (CCTV)", subtitle: "كاميرات IP و HD وحرارية ووصول عبر الهاتف", description: "أنظمة مراقبة موثوقة للمتاجر والشركات والمنازل والمخازن والمواقع الصناعية.", features: ["كاميرات 4K", "رؤية ليلية", "NVR / Cloud", "وصول بالهاتف"] },
      { title: "نظام مكافحة التسلل", subtitle: "إنذارات وكواشف وصفارات وتنبيهات فورية", description: "حماية فعالة ضد التسلل مع كواشف حركة وملامسات مغناطيسية وتنبيهات سريعة.", features: ["كواشف PIR", "تنبيه SMS", "صفارة خارجية", "لوحة متعددة المناطق"] },
      { title: "كشف الحرائق", subtitle: "لوحات حريق وكواشف وإخلاء", description: "تركيب أنظمة حريق مناسبة للمكاتب والمتاجر والفنادق والمصانع والمؤسسات العمومية.", features: ["كواشف دخان", "كواشف حرارة", "صفارة إخلاء", "صيانة"] },
      { title: "التحكم في الدخول", subtitle: "بطاقات وبصمة وإنترفون وصلاحيات مستخدمين", description: "إدارة سهلة وآمنة للمداخل والمناطق الحساسة وأوقات الدخول وسجلات المرور.", features: ["RFID", "بصمة", "إنترفون فيديو", "سجل المرور"] },
      { title: "الماسح الجسدي", subtitle: "بوابات كشف ومراقبة آمنة", description: "حلول احترافية للمواقع الحساسة: مطارات، مؤسسات، بنوك وفعاليات.", features: ["بوابات معادن", "كواشف يدوية", "تنظيم التدفق", "تركيب احترافي"] },
      { title: "الحماية من السرقة", subtitle: "بوابات EAS وبطاقات حماية للبضائع", description: "حماية فعالة وغير مزعجة للمتاجر والسوبرماركت وقاعات العرض والمخازن.", features: ["بوابات AM/RF", "بطاقات مضادة للسرقة", "إلغاء التفعيل", "تدقيق المتجر"] },
      { title: "الصوتيات والأنظمة السمعية البصرية", subtitle: "صوت احترافي وعرض وقاعات اجتماعات", description: "تصميم أنظمة صوت وصورة للمساحات التجارية وقاعات الاجتماعات والأماكن العامة.", features: ["صوت محيطي", "اجتماعات", "عرض رقمي", "كابلات احترافية"] },
      { title: "الشبكات المعلوماتية", subtitle: "كابلات وخزائن وألياف بصرية و Wi-Fi للمؤسسات", description: "بنية شبكية مستقرة ومنظمة جاهزة للكاميرات والخوادم والأجهزة والتطبيقات.", features: ["Cat6 / Cat6A", "ألياف بصرية", "خزانة شبكات", "Wi-Fi احترافي"] },
      { title: "توريد معدات مكتبية ومعلوماتية", subtitle: "حواسيب وطابعات وملحقات ومستهلكات", description: "توريد معدات مكتبية ومعلوماتية للشركات: أجهزة عمل، طابعات، UPS، ملحقات، مستهلكات وتجهيزات شبكة.", features: ["حواسيب ومحمولة", "طابعات", "UPS", "مستهلكات"] },
      { title: "الأتمتة والبيت الذكي", subtitle: "مبان ذكية وتحكم مركزي", description: "أتمتة الإضاءة والستائر والدخول والتكييف والأمن من واجهة بسيطة.", features: ["إضاءة", "ستائر", "تكييف", "تطبيق هاتف"] },
    ],
  },
} as const;

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
  const { language, t } = useLanguage();
  const localized = SERVICES_TEXT[language];
  const services = SERVICES.map((service, index) => ({ ...service, ...localized.services[index] }));

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      <section className="pt-28 pb-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 px-6 py-10 text-white shadow-xl shadow-gray-200/80 sm:px-10"
          >
            <div className="absolute inset-0 opacity-75" style={{ background: "linear-gradient(120deg, rgba(90,168,232,0.22), transparent 34%), radial-gradient(circle at 88% 20%, rgba(224,91,99,0.2), transparent 24%)" }} />
            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-200 mb-3">{t("servicesEyebrow")}</p>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("servicesHeroTitle")}</h1>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">{t("servicesHeroText")}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                <Link to="/contact" className="gsv-gradient-button inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold">
                  {t("requestQuote")}
                  <ArrowRight size={15} className="ml-2" />
                </Link>
                <a href="#services-grid" className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/16">
                  {t("servicesButton")}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services-grid" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{t("expertiseEyebrow")}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{t("expertiseServicesTitle")}</h2>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                {t("expertiseServicesText")}
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
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
                        <span key={feature} className="rounded-md bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link to="/contact" className="mt-6 inline-flex items-center text-sm font-semibold text-sky-600 group-hover:text-rose-500">
                      {t("requestThisService")}
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
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{t("methodEyebrow")}</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("methodTitle")}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {t("methodText")}
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-5 gap-3">
              {localized.process.map((step, index) => (
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
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 18% 40%, rgba(90,168,232,0.34), transparent 30%), radial-gradient(circle at 82% 35%, rgba(224,91,99,0.24), transparent 24%)" }} />
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/45 mb-3">{t("freeQuoteEyebrow")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t("siteSecureTitle")}</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                {t("siteSecureText")}
              </p>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-3 text-sm font-semibold text-gray-950">
              {t("contactUs")}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

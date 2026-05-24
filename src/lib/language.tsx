import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "fr" | "en" | "ar";

const dictionaries = {
  fr: {
    navHome: "Accueil",
    navServices: "Services",
    navAbout: "A Propos",
    navContact: "Contact",
    freeQuote: "Devis Gratuit",
    heroBadge: "Fourniture - Pose - Maintenance",
    heroTitle: "Solutions de securite completes pour votre entreprise",
    heroText: "GSV accompagne entreprises, administrations et particuliers avec des systemes de securite fiables et durables.",
    quoteButton: "Demander un devis gratuit",
    servicesButton: "Voir nos services",
    aboutUs: "A propos de nous",
    readMore: "Lire plus",
    servicesEyebrow: "Nos Services",
    servicesTitle: "10 domaines d'expertise securite & IT",
    contact: "Contact",
    footerText: "Votre partenaire de confiance pour des solutions de securite completes. Expertise, fiabilite et protection 24/7.",
    rights: "Tous droits reserves.",
    certified: "Certifie & Agree",
  },
  en: {
    navHome: "Home",
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    freeQuote: "Free Quote",
    heroBadge: "Supply - Installation - Maintenance",
    heroTitle: "Complete security solutions for your business",
    heroText: "GSV supports companies, institutions and individuals with reliable, long-lasting security systems.",
    quoteButton: "Request a free quote",
    servicesButton: "View services",
    aboutUs: "About us",
    readMore: "Read more",
    servicesEyebrow: "Our Services",
    servicesTitle: "10 security & IT areas of expertise",
    contact: "Contact",
    footerText: "Your trusted partner for complete security solutions. Expertise, reliability and 24/7 protection.",
    rights: "All rights reserved.",
    certified: "Certified & Approved",
  },
  ar: {
    navHome: "الرئيسية",
    navServices: "الخدمات",
    navAbout: "من نحن",
    navContact: "اتصل بنا",
    freeQuote: "طلب عرض سعر",
    heroBadge: "توريد - تركيب - صيانة",
    heroTitle: "حلول أمنية متكاملة لحماية مؤسستك",
    heroText: "ترافقكم GSV بحلول أمنية موثوقة ومستدامة للشركات والمؤسسات والأفراد.",
    quoteButton: "اطلب عرض سعر مجاني",
    servicesButton: "عرض الخدمات",
    aboutUs: "من نحن",
    readMore: "اقرأ المزيد",
    servicesEyebrow: "خدماتنا",
    servicesTitle: "10 مجالات خبرة في الأمن وتقنية المعلومات",
    contact: "اتصل بنا",
    footerText: "شريككم الموثوق لحلول أمنية متكاملة، بخبرة عالية وحماية متواصلة على مدار الساعة.",
    rights: "جميع الحقوق محفوظة.",
    certified: "معتمد ومرخص",
  },
} as const;

type DictionaryKey = keyof typeof dictionaries.fr;

type LanguageContextValue = {
  dir: "ltr" | "rtl";
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: DictionaryKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("gsv-language");
    return saved === "en" || saved === "ar" || saved === "fr" ? saved : "fr";
  });
  const dir = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    localStorage.setItem("gsv-language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [dir, language]);

  const value = useMemo(
    () => ({
      dir,
      language,
      setLanguage,
      t: (key: DictionaryKey) => dictionaries[language][key],
    }),
    [dir, language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return value;
}

export const languageOptions = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
  { value: "ar", label: "العربية" },
] satisfies Array<{ value: Language; label: string }>;

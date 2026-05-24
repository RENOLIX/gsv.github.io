import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/lib/language";

const services = {
  fr: [
    "Videosurveillance (CCTV)",
    "Systeme Anti-Intrusion",
    "Detection Incendie",
    "Controle d'Acces",
    "Scanner Corporel",
    "Securite Anti-Vol",
    "Sonorisation & AV",
    "Reseaux Informatiques",
    "Fourniture Materiel Bureautique & IT",
    "Domotique & Automatisation",
  ],
  en: [
    "CCTV Video Surveillance",
    "Intrusion Alarm System",
    "Fire Detection",
    "Access Control",
    "Body Scanner",
    "Anti-Theft Security",
    "Sound & AV Systems",
    "Computer Networks",
    "Office & IT Equipment Supply",
    "Smart Automation",
  ],
  ar: [
    "المراقبة بالفيديو (CCTV)",
    "نظام مكافحة التسلل",
    "كشف الحرائق",
    "التحكم في الدخول",
    "الماسح الجسدي",
    "أنظمة مكافحة السرقة",
    "الصوتيات والأنظمة السمعية البصرية",
    "الشبكات المعلوماتية",
    "توفير تجهيزات المكاتب والإعلام الآلي",
    "الأتمتة والمباني الذكية",
  ],
};

export default function Footer() {
  const { language, t } = useLanguage();
  const serviceLinks = services[language];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={`${import.meta.env.BASE_URL}brand/gsv-logo.png`} alt="GSV Global Security Vision" className="gsv-logo-mark -ml-8 h-24 w-64 object-contain" />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t("footerText")}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">{t("navServices")}</h4>
            <ul className="space-y-2">
              {serviceLinks.slice(0, 5).map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4 md:opacity-0">{t("navServices")}</h4>
            <ul className="space-y-2">
              {serviceLinks.slice(5).map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">{t("contact")}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-gray-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-500">
                  GLOBAL SECURITY VISION, {language === "ar" ? "الجزائر" : language === "en" ? "Algeria" : "Algerie"}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-gray-400 shrink-0" />
                <a href="tel:0559400855" dir="ltr" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">0559 40 08 55</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-gray-400 shrink-0" />
                <a href="mailto:contact.gsv.dz@gmail.com" dir="ltr" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">contact.gsv.dz@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">© {year} GSV - Global Security Vision. {t("rights")}</p>
          <p className="text-xs text-gray-400">{t("certified")}</p>
        </div>
      </div>
    </footer>
  );
}

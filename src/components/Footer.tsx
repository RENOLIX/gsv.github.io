import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const services = [
  "Videosurveillance (CCTV)",
  "Systeme Anti-Intrusion",
  "Detection Incendie",
  "Controle d'Acces",
  "Scanner Corporel",
  "Securite Anti-Vol",
  "Sonorisation & AV",
  "Reseaux Informatiques",
  "Domotique & Automatisation",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="https://hercules-cdn.com/file_y2M8OIO0ft489F10wIOm8fT3" alt="GSV" className="w-7 h-7 object-contain" />
              <span className="font-bold text-gray-900">GSV</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Votre partenaire de confiance pour des solutions de securite completes. Expertise, fiabilite et protection 24/7.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 5).map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4 md:opacity-0">Services</h4>
            <ul className="space-y-2">
              {services.slice(5).map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-gray-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-500">123 Avenue de la Securite, Alger, Algerie</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-gray-400 shrink-0" />
                <a href="tel:+213555000000" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">+213 555 000 000</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-gray-400 shrink-0" />
                <a href="mailto:contact@gsv-securite.com" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">contact@gsv-securite.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">© {year} GSV - Global Security Vision. Tous droits reserves.</p>
          <p className="text-xs text-gray-400">Certifie & Agree</p>
        </div>
      </div>
    </footer>
  );
}

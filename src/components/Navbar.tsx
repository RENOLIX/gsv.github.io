import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "A Propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const headerStyle: React.CSSProperties = scrolled
    ? {
        backdropFilter: "blur(28px) saturate(180%)",
        WebkitBackdropFilter: "blur(28px) saturate(180%)",
        background: "rgba(255,255,255,0.78)",
        borderBottom: "1px solid rgba(255,255,255,0.85)",
        boxShadow: "0 4px 32px rgba(11,143,255,0.10), 0 2px 20px rgba(255,31,45,0.06)",
      }
    : {
        backdropFilter: "blur(18px) saturate(160%)",
        WebkitBackdropFilter: "blur(18px) saturate(160%)",
        background: "rgba(255,255,255,0.58)",
        borderBottom: "1px solid rgba(255,255,255,0.55)",
      };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={headerStyle}>
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-18 sm:h-20">
          <Link to="/" className="-ml-4 flex items-center sm:-ml-8">
            <img src={`${import.meta.env.BASE_URL}brand/gsv-logo.png`} alt="GSV Global Security Vision" className="gsv-logo-mark h-20 w-52 object-contain sm:h-24 sm:w-64" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className={`text-sm font-medium transition-colors ${location.pathname === link.href ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link to="/contact" className="gsv-gradient-button inline-flex items-center px-5 py-2 text-sm font-semibold rounded-xl cursor-pointer transition-all duration-200">
              Devis Gratuit
            </Link>
          </div>
          <button className="md:hidden p-2 cursor-pointer text-gray-700" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} style={{ backdropFilter: "blur(28px) saturate(180%)", WebkitBackdropFilter: "blur(28px) saturate(180%)", background: "rgba(255,255,255,0.82)", borderTop: "1px solid rgba(255,255,255,0.70)" }}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)} className={`text-sm font-medium py-1.5 ${location.pathname === link.href ? "text-gray-900" : "text-gray-500"}`}>
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="gsv-gradient-button inline-flex justify-center items-center mt-2 px-5 py-2.5 text-sm font-semibold rounded-xl cursor-pointer transition-all duration-200">
                Devis Gratuit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

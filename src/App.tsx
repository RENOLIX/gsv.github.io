import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "@/pages/about/page";
import ContactPage from "@/pages/contact/page";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import ServicesPage from "@/pages/services/page";

export default function App() {
  const basename = import.meta.env.BASE_URL === "/" ? "/" : import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

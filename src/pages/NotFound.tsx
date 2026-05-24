import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";

const copy = {
  fr: {
    title: "Page introuvable",
    text: "Cette page n'existe pas.",
    action: "Retour a l'accueil",
  },
  en: {
    title: "Page not found",
    text: "This page does not exist.",
    action: "Return home",
  },
  ar: {
    title: "الصفحة غير موجودة",
    text: "هذه الصفحة غير متوفرة.",
    action: "العودة إلى الرئيسية",
  },
};

export default function NotFound() {
  const location = useLocation();
  const { language } = useLanguage();
  const content = copy[language];

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 px-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
          <h2 className="text-2xl font-semibold">{content.title}</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">{content.text}</p>
        <div className="pt-4">
          <Button asChild>
            <Link to="/">{content.action}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

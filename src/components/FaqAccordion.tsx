import { useState } from "react";
import { Plus, X } from "lucide-react";
import { useLanguage } from "@/lib/language";

const FAQS = {
  fr: [
    { q: "Proposez-vous la telesurveillance a distance ?", a: "Oui, nos systemes de surveillance integrent une supervision en temps reel via application mobile avec alertes instantanees." },
    { q: "Votre systeme de detection incendie est-il certifie ?", a: "Oui. Nos equipements incendie respectent les normes de securite adaptees aux sites professionnels." },
    { q: "Combien de temps prend une installation ?", a: "Selon l'envergure du projet, une installation standard prend entre 1 et 5 jours ouvrables." },
    { q: "Proposez-vous un contrat de maintenance ?", a: "Oui, nous proposons une maintenance preventive et corrective pour garantir la continuite de votre securite." },
    { q: "Travaillez-vous avec des entreprises ?", a: "Nous intervenons pour particuliers, commerces, PME, grandes entreprises, institutions et sites industriels." },
  ],
  en: [
    { q: "Do you offer remote monitoring?", a: "Yes, our surveillance systems include real-time supervision through mobile apps with instant alerts." },
    { q: "Is your fire detection system compliant?", a: "Yes. Our fire safety equipment follows the safety requirements suitable for professional sites." },
    { q: "How long does an installation take?", a: "Depending on the project size, a standard installation takes between 1 and 5 working days." },
    { q: "Do you offer maintenance contracts?", a: "Yes, we offer preventive and corrective maintenance to keep your security running reliably." },
    { q: "Do you work with businesses?", a: "We work with individuals, shops, SMEs, large companies, institutions and industrial sites." },
  ],
  ar: [
    { q: "هل توفرون المراقبة عن بعد؟", a: "نعم، تتضمن أنظمة المراقبة لدينا متابعة فورية عبر تطبيق الهاتف مع تنبيهات مباشرة." },
    { q: "هل نظام كشف الحريق مطابق للمعايير؟", a: "نعم، معدات الحريق لدينا تراعي متطلبات السلامة المناسبة للمواقع المهنية." },
    { q: "كم تستغرق عملية التركيب؟", a: "حسب حجم المشروع، تستغرق عملية التركيب عادة من يوم إلى خمسة أيام عمل." },
    { q: "هل توفرون عقود صيانة؟", a: "نعم، نوفر صيانة وقائية وتصحيحية لضمان استمرار عمل أنظمة الحماية." },
    { q: "هل تعملون مع الشركات؟", a: "نخدم الأفراد والمتاجر والمؤسسات الصغيرة والكبيرة والهيئات والمواقع الصناعية." },
  ],
};

const glassCard: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.80)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(0, 0, 0, 0.07)",
  boxShadow: "0 2px 16px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255,255,255,1)",
};

const glassBtn: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.55)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.8)",
  boxShadow: "0 2px 8px rgba(100,120,200,0.10)",
};

export default function FaqAccordion() {
  const { language } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {FAQS[language].map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.q}
            className="rounded-2xl overflow-hidden cursor-pointer select-none transition-all duration-200"
            style={glassCard}
            onClick={() => setOpen(isOpen ? null : i)}
          >
            <div className="flex items-center justify-between px-5 py-4 gap-4">
              <span className="text-sm font-semibold text-gray-800">{faq.q}</span>
              <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200" style={glassBtn}>
                {isOpen ? <X size={14} className="text-gray-600" /> : <Plus size={14} className="text-gray-500" />}
              </div>
            </div>
            {isOpen && (
              <div className="px-5 pb-4">
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

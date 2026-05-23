import { useState } from "react";
import { Plus, X } from "lucide-react";

const FAQS = [
  {
    q: "Proposez-vous la telesurveillance a distance ?",
    a: "Oui, nos systemes de surveillance integrent une supervision en temps reel via application mobile avec alertes instantanees.",
  },
  {
    q: "Votre systeme de detection incendie est-il certifie ?",
    a: "Absolument. Tous nos equipements incendie sont conformes aux normes EN 54 et agrees par les organismes de securite nationaux.",
  },
  {
    q: "Combien de temps prend une installation ?",
    a: "Selon l'envergure du projet, une installation standard prend entre 1 et 5 jours ouvrables. Un planning precis est etabli lors du devis.",
  },
  {
    q: "Proposez-vous un contrat de maintenance ?",
    a: "Oui, nous offrons des contrats de maintenance preventive et corrective 24h/24 et 7j/7 pour garantir la continuite de votre securite.",
  },
  {
    q: "Travaillez-vous avec des grandes entreprises ?",
    a: "Nous intervenons aussi bien pour les PME que pour les grandes entreprises, hotels, universites et sites industriels a travers tout le pays.",
  },
];

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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => {
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

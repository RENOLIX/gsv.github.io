const PARTNERS = [
  { name: "Aeroport d'Alger", img: "https://hercules-cdn.com/file_wd8FbD2ovGtDdaUqMGuRUNdr" },
  { name: "CMTB", img: "https://hercules-cdn.com/file_9pqAuu22K7hHcQbqc0x6Fkcc" },
  { name: "Kheyar Superette", img: "https://hercules-cdn.com/file_s9wTCLp8ijTCy0zAwnPr8zO4" },
  { name: "Casa Medica Shop", img: "https://hercules-cdn.com/file_uNQ5rKNcRWVtLjkFZmV5MRep" },
  { name: "Universite de Boumerdes", img: "https://hercules-cdn.com/file_IAWhLXo52XGQnyob6LHESxp1" },
  { name: "GSV Partner", img: "https://hercules-cdn.com/file_DLBbd3mjCTQxVJ940o7BHCw3" },
];

const TRACK = [...PARTNERS, ...PARTNERS];

export default function PartnersMarquee() {
  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Partenaires</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ils nous font confiance</h2>
        <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
          Nous sommes fiers de collaborer avec des leaders de l'industrie grace a nos solutions de securite integrees.
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-28 z-10" style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-28 z-10" style={{ background: "linear-gradient(to left, white, transparent)" }} />
        <div className="flex gap-6 marquee-track items-center">
          {TRACK.map((partner, i) => (
            <img key={`${partner.name}-${i}`} src={partner.img} alt={partner.name} className="shrink-0 h-14 w-auto object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}

const mediaItems = [
  ...Array.from({ length: 26 }, (_, index) => ({
    type: "image" as const,
    src: `realisations/realisation-${String(index + 1).padStart(2, "0")}.jpeg`,
    title: "Installation GSV",
  })),
  ...Array.from({ length: 3 }, (_, index) => ({
    type: "video" as const,
    src: `realisations/realisation-video-${String(index + 1).padStart(2, "0")}.mp4`,
    title: "Realisation en video",
  })),
];

const track = [...mediaItems, ...mediaItems];

export default function RealisationsMarquee() {
  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">Nos realisations</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Des installations realisees sur le terrain</h2>
        <p className="text-gray-500 max-w-2xl text-sm leading-relaxed">
          Quelques exemples de nos travaux en videosurveillance, reseaux, controle et equipements de securite.
        </p>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-28"
          style={{ background: "linear-gradient(to right, white, transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-28"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
        />

        <div className="realisations-track flex items-stretch gap-4 sm:gap-5">
          {track.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="relative h-64 w-48 shrink-0 overflow-hidden rounded-xl bg-gray-100 shadow-sm sm:h-80 sm:w-64"
            >
              {item.type === "image" ? (
                <img
                  src={`${import.meta.env.BASE_URL}${item.src}`}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <video
                  src={`${import.meta.env.BASE_URL}${item.src}`}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              )}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

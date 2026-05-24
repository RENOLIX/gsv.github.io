import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language";

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

export default function RealisationsMarquee() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const item = mediaItems[current];

  const previous = () => setCurrent((value) => (value === 0 ? mediaItems.length - 1 : value - 1));
  const next = () => setCurrent((value) => (value === mediaItems.length - 1 ? 0 : value + 1));

  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">{t("realisationsEyebrow")}</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{t("realisationsTitle")}</h2>
        <p className="text-gray-500 max-w-2xl text-sm leading-relaxed">
          {t("realisationsText")}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-5 lg:grid-cols-[1fr_220px] lg:items-stretch">
          <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-xl shadow-gray-200/80">
            <div className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]">
              {item.type === "image" ? (
                <img
                  key={item.src}
                  src={`${import.meta.env.BASE_URL}${item.src}`}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <video
                  key={item.src}
                  src={`${import.meta.env.BASE_URL}${item.src}`}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              )}
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-16 text-white">
              <span className="text-sm font-semibold">{t("realisation")} <span dir="ltr">{current + 1} / {mediaItems.length}</span></span>
              <span className="text-xs text-white/75">{item.type === "video" ? t("video") : t("photo")}</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 lg:flex-col lg:justify-center">
            <button
              type="button"
              onClick={previous}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 shadow-sm transition hover:border-blue-500 hover:text-blue-600"
              aria-label={t("previousRealisation")}
            >
              <ChevronLeft size={22} />
            </button>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">{String(current + 1).padStart(2, "0")}</p>
              <p className="text-xs uppercase tracking-wider text-gray-400">{t("outOf")} <span dir="ltr">{mediaItems.length}</span></p>
            </div>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 shadow-sm transition hover:border-red-500 hover:text-red-600"
              aria-label={t("nextRealisation")}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

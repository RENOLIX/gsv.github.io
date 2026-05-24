import { ExternalLink, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language";

const mapsUrl = "https://maps.app.goo.gl/gCb6Yn4nzgerwLC79";
const embedUrl = "https://www.google.com/maps?q=GLOBAL%20SECURITY%20VISION%20Algerie&z=15&output=embed";

export default function MapBlock({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();

  return (
    <section className={compact ? "py-14" : "py-20 bg-white"}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{t("locationEyebrow")}</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("locationTitle")}</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              {t("locationText")}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="gsv-gradient-button inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold"
            >
              <MapPin size={16} className="mr-2" />
              {t("openRoute")}
              <ExternalLink size={15} className="ml-2" />
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl shadow-blue-950/10">
            <iframe
              title="GLOBAL SECURITY VISION map"
              src={embedUrl}
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

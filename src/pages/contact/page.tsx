import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import Footer from "@/components/Footer";
import MapBlock from "@/components/MapBlock";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/lib/language";

const SERVICES_LIST = {
  fr: ["Videosurveillance (CCTV)", "Systeme Anti-Intrusion", "Detection Incendie", "Controle d'Acces", "Scanner Corporel", "Securite Anti-Vol", "Sonorisation & AV", "Reseaux Informatiques", "Fourniture Materiel Bureautique & IT", "Domotique & Automatisation", "Autre"],
  en: ["CCTV Video Surveillance", "Intrusion Alarm System", "Fire Detection", "Access Control", "Body Scanner", "Anti-Theft Security", "Sound & AV Systems", "Computer Networks", "Office & IT Equipment Supply", "Smart Automation", "Other"],
  ar: ["المراقبة بالفيديو (CCTV)", "نظام مكافحة التسلل", "كشف الحرائق", "التحكم في الدخول", "الماسح الجسدي", "أنظمة مكافحة السرقة", "الصوتيات والأنظمة السمعية البصرية", "الشبكات المعلوماتية", "توفير تجهيزات المكاتب والإعلام الآلي", "الأتمتة والمباني الذكية", "أخرى"],
};

const contactDetails = {
  fr: {
    namePlaceholder: "Jean Dupont",
    emailPlaceholder: "exemple@email.com",
    country: "Algerie",
    week: "Lun - Ven : 08:00 - 18:00",
    saturday: "Sam : 08:00 - 13:00",
  },
  en: {
    namePlaceholder: "John Smith",
    emailPlaceholder: "example@email.com",
    country: "Algeria",
    week: "Mon - Fri: 08:00 - 18:00",
    saturday: "Sat: 08:00 - 13:00",
  },
  ar: {
    namePlaceholder: "الاسم الكامل",
    emailPlaceholder: "example@email.com",
    country: "الجزائر",
    week: "الأحد - الخميس : 08:00 - 18:00",
    saturday: "السبت : 08:00 - 13:00",
  },
};

type FormState = { name: string; customerType: "Entreprise" | "Particulier"; company: string; email: string; phone: string; service: string; message: string };

export default function ContactPage() {
  const { language, t } = useLanguage();
  const details = contactDetails[language];
  const serviceOptions = SERVICES_LIST[language];
  const [form, setForm] = useState<FormState>({ name: "", customerType: "Entreprise", company: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const set = (field: keyof FormState, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error(t("requiredError"));
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <div className="pt-32 pb-14 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{t("contactHeroEyebrow")}</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{t("contactHeroTitle")}</h1>
            <p className="text-gray-500 text-lg max-w-xl">{t("contactHeroText")}</p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_340px] gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="border border-gray-200 rounded-xl p-8 bg-white">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="gsv-accent-icon w-14 h-14 rounded-full flex items-center justify-center mb-5"><CheckCircle size={28} /></div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{t("sentTitle")}</h3>
                  <p className="text-gray-500 text-sm max-w-xs">{t("sentText")}</p>
                  <button className="mt-7 inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-semibold cursor-pointer bg-white border border-gray-200 shadow-sm" onClick={() => { setSubmitted(false); setForm({ name: "", customerType: "Entreprise", company: "", email: "", phone: "", service: "", message: "" }); }}>{t("newRequest")}</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div><h2 className="text-lg font-semibold text-gray-900 mb-1">{t("formTitle")}</h2><p className="text-sm text-gray-400">{t("requiredText")}</p></div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5"><label className="text-xs font-medium text-gray-500">{t("nameLabel")} <span className="text-red-500">*</span></label><Input placeholder={details.namePlaceholder} value={form.name} onChange={(e) => set("name", e.target.value)} /></div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-500">{t("customerTypeLabel")}</label>
                      <div className="grid grid-cols-2 gap-2 rounded-md bg-gray-100 p-1">
                        {(["Entreprise", "Particulier"] as const).map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => set("customerType", type)}
                            className={`h-9 rounded-md text-sm font-semibold transition-all ${
                              form.customerType === type
                                ? "gsv-gradient-button"
                                : "bg-transparent text-gray-500 hover:text-gray-900"
                            }`}
                          >
                            {type === "Entreprise" ? t("companyType") : t("individualType")}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5"><label className="text-xs font-medium text-gray-500">{t("companyLabel")}</label><Input placeholder={t("companyType")} value={form.company} onChange={(e) => set("company", e.target.value)} /></div>
                    <div className="space-y-1.5"><label className="text-xs font-medium text-gray-500">{t("emailLabel")} <span className="text-red-500">*</span></label><Input dir="ltr" type="email" placeholder={details.emailPlaceholder} value={form.email} onChange={(e) => set("email", e.target.value)} /></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5"><label className="text-xs font-medium text-gray-500">{t("phoneLabel")}</label><Input dir="ltr" type="tel" placeholder="0559 40 08 55" value={form.phone} onChange={(e) => set("phone", e.target.value)} /></div>
                    <div className="space-y-1.5"><label className="text-xs font-medium text-gray-500">{t("serviceLabel")}</label><Select onValueChange={(v) => set("service", v)}><SelectTrigger><SelectValue placeholder={t("selectService")} /></SelectTrigger><SelectContent>{serviceOptions.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent></Select></div>
                  </div>
                  <div className="space-y-1.5"><label className="text-xs font-medium text-gray-500">{t("messageLabel")} <span className="text-red-500">*</span></label><Textarea placeholder={t("messagePlaceholder")} rows={5} value={form.message} onChange={(e) => set("message", e.target.value)} className="resize-none" /></div>
                  <button type="submit" disabled={loading} className="gsv-gradient-button w-full inline-flex items-center justify-center h-11 px-6 rounded-xl text-sm font-semibold disabled:opacity-60 cursor-pointer transition-all duration-200">{loading ? t("sending") : <><Send size={15} className="mr-2" />{t("sendRequest")}</>}</button>
                </form>
              )}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="space-y-3">
            {[
              { icon: Phone, title: t("phoneLabel"), lines: ["0559 40 08 55"], ltr: true },
              { icon: Mail, title: t("emailLabel"), lines: ["contact.gsv.dz@gmail.com"], ltr: true },
              { icon: MapPin, title: t("address"), lines: ["GLOBAL SECURITY VISION", details.country] },
              { icon: Clock, title: t("hours"), lines: [details.week, details.saturday] },
            ].map((info) => <div key={info.title} className="border border-gray-200 rounded-xl p-5 flex items-start gap-4 bg-white"><div className="gsv-accent-icon w-9 h-9 rounded-lg flex items-center justify-center shrink-0"><info.icon size={16} /></div><div><p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">{info.title}</p>{info.lines.map((line) => <p key={line} dir={info.ltr ? "ltr" : undefined} className="text-sm font-medium text-gray-800">{line}</p>)}</div></div>)}
          </motion.div>
        </div>
      </div>
      <MapBlock compact />
      <Footer />
    </div>
  );
}

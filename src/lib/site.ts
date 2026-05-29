export const siteContact = {
  storeName: "GSV",
  email: "contact.gsv.dz@gmail.com",
  emailLabel: "Nous contacter par email",
  siteUrl: "https://gsv-dz.com/",
  mobile: "0559400855",
  landline: "",
  whatsapp: "213559400855",
  address: "GLOBAL SECURITY VISION, Algerie",
  mapsUrl: "https://maps.app.goo.gl/gCb6Yn4nzgerwLC79",
  socialLinks: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
};

export function buildWhatsAppUrl(message?: string) {
  const baseUrl = `https://wa.me/${siteContact.whatsapp}`;
  if (!message) return baseUrl;
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

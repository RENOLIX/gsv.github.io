export const siteContact = {
  storeName: "GSV",
  email: "contact@gsv-securite.com",
  emailLabel: "Nous contacter par email",
  siteUrl: "https://renolix.github.io/gsv.github.io/",
  mobile: "+213555000000",
  landline: "+21321000000",
  whatsapp: "213555000000",
  address: "123 Avenue de la Securite, Alger, Algerie",
  mapsUrl: "https://maps.google.com/?q=Alger%20Algerie",
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

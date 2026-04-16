// Static JSON-LD structured data for local SEO
// Safe usage: all content is hardcoded company data with no user input
const jsonLdData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MVR - Remodelações e Eletricidade",
  description:
    "Serviços profissionais de eletricidade e remodelação em Lisboa e arredores.",
  telephone: "+351927769445",
  email: "geral.mvreletricidade@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Padre Cruz Nº49",
    addressLocality: "Famões",
    addressRegion: "Lisboa",
    addressCountry: "PT",
  },
  areaServed: [
    "Lisboa",
    "Famões",
    "Odivelas",
    "Amadora",
    "Sintra",
    "Loures",
    "Cascais",
    "Oeiras",
  ],
  serviceType: [
    "Instalações Elétricas",
    "Remodelação de Apartamentos",
    "Remodelação de Cozinhas",
    "Remodelação de Casas de Banho",
    "Iluminação",
    "Reparações Elétricas",
  ],
});

export default function JsonLd() {
  // dangerouslySetInnerHTML is safe here: jsonLdData is a compile-time
  // constant derived entirely from hardcoded literals above.
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdData }}
    />
  );
}

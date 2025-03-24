// Costanti SEO per il sito SolariX Business

export const SEO_CONSTANTS = {
  // Informazioni di base sul sito
  SITE_NAME: 'solariXbusiness',
  SITE_URL: 'https://www.solarixbusiness.it',
  
  // Metadati di default
  DEFAULT_TITLE: 'solariXbusiness - Soluzioni energetiche per aziende',
  DEFAULT_DESCRIPTION: 'Soluzioni fotovoltaiche personalizzate per aziende in tutta Italia. Massimizza il risparmio energetico e riduci i costi operativi con i nostri impianti industriali.',
  DEFAULT_KEYWORDS: 'fotovoltaico aziende, pannelli solari industriali, energia solare business, impianti fotovoltaici aziendali, risparmio energetico',
  DEFAULT_OG_IMAGE: '/images/og-image.jpg',
  
  // Informazioni sull'azienda
  COMPANY_NAME: 'SolariX Business',
  COMPANY_LEGAL_NAME: 'solarixbusiness S.r.l.',
  COMPANY_LOGO: '/images/logo.png',
  COMPANY_PHONE: '+39-3470087833',
  COMPANY_EMAIL: 'info@solarixbusiness.it',
  
  // Indirizzi social
  SOCIAL_FACEBOOK: 'https://www.facebook.com/solarixbusiness',
  SOCIAL_INSTAGRAM: 'https://www.instagram.com/solarixbusiness',
  SOCIAL_LINKEDIN: 'https://www.linkedin.com/company/solarixbusiness',
  
  // Indirizzo fisico
  ADDRESS: {
    STREET: 'Via Roma 123',
    CITY: 'Milano',
    POSTAL_CODE: '20100',
    REGION: 'MI',
  },
};

// Funzione per generare l'URL completo
export function getFullUrl(path: string): string {
  return `${SEO_CONSTANTS.SITE_URL}${path}`;
}

// Funzione per generare i dati strutturati dell'organizzazione
export function getOrganizationSchema(): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_CONSTANTS.COMPANY_NAME,
    legalName: SEO_CONSTANTS.COMPANY_LEGAL_NAME,
    logo: SEO_CONSTANTS.COMPANY_LOGO,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SEO_CONSTANTS.COMPANY_PHONE,
      email: SEO_CONSTANTS.COMPANY_EMAIL,
      contactType: 'customer service',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SEO_CONSTANTS.ADDRESS.STREET,
      addressLocality: SEO_CONSTANTS.ADDRESS.CITY,
      addressRegion: SEO_CONSTANTS.ADDRESS.REGION,
      postalCode: SEO_CONSTANTS.ADDRESS.POSTAL_CODE,
      addressCountry: 'IT',
    },
    sameAs: [
      SEO_CONSTANTS.SOCIAL_FACEBOOK,
      SEO_CONSTANTS.SOCIAL_INSTAGRAM,
      SEO_CONSTANTS.SOCIAL_LINKEDIN,
    ],
  };
}

// Funzione per generare i dati strutturati del sito web
export function getWebsiteSchema(): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SEO_CONSTANTS.SITE_NAME,
    url: SEO_CONSTANTS.SITE_URL,
    description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
    publisher: getOrganizationSchema(),
  };
}

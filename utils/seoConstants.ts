// Costanti SEO per il sito SolariX Business

export const SEO_CONSTANTS = {
  // Informazioni di base sul sito
  SITE_NAME: 'solariXbusiness',
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.solarixbusiness.it',
  
  // Metadati di default
  DEFAULT_TITLE: 'solariXbusiness - Soluzioni energetiche per aziende',
  DEFAULT_DESCRIPTION: 'Soluzioni fotovoltaiche personalizzate per aziende in tutta Italia. Massimizza il risparmio energetico e riduci i costi operativi con i nostri impianti industriali.',
  DEFAULT_KEYWORDS: 'fotovoltaico aziende, pannelli solari industriali, energia solare business, impianti fotovoltaici aziendali, risparmio energetico',
  DEFAULT_OG_IMAGE: '/images/og-image.jpg',
  
  // Informazioni sull'azienda
  COMPANY_NAME: 'SolariX Business',
  COMPANY_LEGAL_NAME: 'FILY Impianti S.r.l.',
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
    COUNTRY: 'IT',
    COUNTRY_NAME: 'Italia',
  },
  
  // Coordinate geografiche
  GEO: {
    LATITUDE: 45.4642,
    LONGITUDE: 9.1900,
  },
  
  // Lingue supportate
  LANGUAGES: ['it', 'en'],
  DEFAULT_LANGUAGE: 'it',
  
  // Tag per i motori di ricerca
  ROBOTS: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  
  // Schema.org types
  SCHEMA_TYPES: {
    ORGANIZATION: 'Organization',
    LOCAL_BUSINESS: 'LocalBusiness',
    WEBSITE: 'WebSite',
    BREADCRUMB_LIST: 'BreadcrumbList',
    PRODUCT: 'Product',
    SERVICE: 'Service',
    FAQ_PAGE: 'FAQPage',
    QUESTION: 'Question',
    ANSWER: 'Answer',
  },
};

// Funzione per generare l'URL completo
export function getFullUrl(path: string): string {
  return `${SEO_CONSTANTS.SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

// Funzione per generare i dati strutturati dell'organizzazione
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': SEO_CONSTANTS.SCHEMA_TYPES.ORGANIZATION,
    name: SEO_CONSTANTS.COMPANY_NAME,
    legalName: SEO_CONSTANTS.COMPANY_LEGAL_NAME,
    url: SEO_CONSTANTS.SITE_URL,
    logo: getFullUrl(SEO_CONSTANTS.COMPANY_LOGO),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SEO_CONSTANTS.COMPANY_PHONE,
      email: SEO_CONSTANTS.COMPANY_EMAIL,
      contactType: 'customer service',
      availableLanguage: ['Italian', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SEO_CONSTANTS.ADDRESS.STREET,
      addressLocality: SEO_CONSTANTS.ADDRESS.CITY,
      postalCode: SEO_CONSTANTS.ADDRESS.POSTAL_CODE,
      addressRegion: SEO_CONSTANTS.ADDRESS.REGION,
      addressCountry: SEO_CONSTANTS.ADDRESS.COUNTRY,
    },
    sameAs: [
      SEO_CONSTANTS.SOCIAL_FACEBOOK,
      SEO_CONSTANTS.SOCIAL_INSTAGRAM,
      SEO_CONSTANTS.SOCIAL_LINKEDIN,
    ],
  };
}

// Funzione per generare i dati strutturati del sito web
export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': SEO_CONSTANTS.SCHEMA_TYPES.WEBSITE,
    name: SEO_CONSTANTS.SITE_NAME,
    url: SEO_CONSTANTS.SITE_URL,
    description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
    inLanguage: SEO_CONSTANTS.DEFAULT_LANGUAGE,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SEO_CONSTANTS.SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

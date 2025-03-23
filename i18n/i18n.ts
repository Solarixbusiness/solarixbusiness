// Configurazione per l'internazionalizzazione
import { createContext, useContext } from 'react';

export type Locale = 'it' | 'en';

export interface Translations {
  [key: string]: string;
}

export interface I18nContextType {
  locale: Locale;
  translations: Translations;
  t: (key: string, params?: Record<string, string>) => string;
  changeLocale: (newLocale: Locale) => void;
}

// Traduzioni predefinite (italiano)
export const defaultTranslations: Record<Locale, Translations> = {
  it: {
    // Navbar
    'nav.home': 'HOME',
    'nav.about': 'CHI SIAMO',
    'nav.services': 'SERVIZI',
    'nav.faq': 'FAQ',
    'nav.contact': 'CONTATTI',
    
    // Servizi dropdown
    'nav.services.photovoltaic': 'Fotovoltaico per Aziende',
    'nav.services.community': 'Comunità Energetiche',
    'nav.services.thermal': 'Conto Termico 3.0',
    
    // Hero Section
    'hero.title': 'L\'energia per il tuo business',
    'hero.subtitle': 'L\'incentivo più adatto al tuo settore',
    'hero.cta': 'Scopri di più',
    
    // Form
    'form.title': 'Richiedi una consulenza gratuita',
    'form.subtitle': 'Compila il form per ricevere informazioni sugli incentivi disponibili per la tua azienda',
    'form.name': 'Nome e Cognome',
    'form.email': 'Email',
    'form.phone': 'Telefono',
    'form.company.size': 'Dimensione Azienda',
    'form.interests': 'Sono interessato a:',
    'form.interests.national': 'Incentivi Nazionali',
    'form.interests.regional': 'Incentivi Regionali',
    'form.interests.sectoral': 'Incentivi Settoriali',
    'form.interests.consulting': 'Consulenza Personalizzata',
    'form.message': 'Messaggio',
    'form.submit': 'Invia Richiesta',
    'form.success': 'Grazie per la tua richiesta! Ti contatteremo al più presto.',
    'form.error': 'Si è verificato un errore. Riprova più tardi o contattaci direttamente.',
    
    // Footer
    'footer.rights': 'Tutti i diritti riservati',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Termini e Condizioni',
    'footer.cookies': 'Cookie Policy',
  },
  en: {
    // Navbar
    'nav.home': 'HOME',
    'nav.about': 'ABOUT US',
    'nav.services': 'SERVICES',
    'nav.faq': 'FAQ',
    'nav.contact': 'CONTACT',
    
    // Servizi dropdown
    'nav.services.photovoltaic': 'Photovoltaic for Business',
    'nav.services.community': 'Energy Communities',
    'nav.services.thermal': 'Thermal Account 3.0',
    
    // Hero Section
    'hero.title': 'Energy for your business',
    'hero.subtitle': 'The most suitable incentive for your sector',
    'hero.cta': 'Learn more',
    
    // Form
    'form.title': 'Request a free consultation',
    'form.subtitle': 'Fill out the form to receive information on available incentives for your company',
    'form.name': 'Full Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.company.size': 'Company Size',
    'form.interests': 'I am interested in:',
    'form.interests.national': 'National Incentives',
    'form.interests.regional': 'Regional Incentives',
    'form.interests.sectoral': 'Sector Incentives',
    'form.interests.consulting': 'Personalized Consulting',
    'form.message': 'Message',
    'form.submit': 'Send Request',
    'form.success': 'Thank you for your request! We will contact you as soon as possible.',
    'form.error': 'An error occurred. Please try again later or contact us directly.',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms and Conditions',
    'footer.cookies': 'Cookie Policy',
  }
};

// Funzione di traduzione
export function translate(
  key: string, 
  translations: Translations, 
  params?: Record<string, string>
): string {
  let text = translations[key] || key;
  
  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(new RegExp(`{{${param}}}`, 'g'), value);
    });
  }
  
  return text;
}

// Context per l'internazionalizzazione
export const I18nContext = createContext<I18nContextType>({
  locale: 'it',
  translations: defaultTranslations.it,
  t: (key: string) => key,
  changeLocale: () => {}
});

// Hook per utilizzare le traduzioni
export function useTranslation() {
  const context = useContext(I18nContext);
  
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  
  return context;
}

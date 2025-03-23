// Configurazione per l'internazionalizzazione
import { createContext, useContext } from 'react';

export type Locale = 'it' | 'en' | 'fr' | 'de';

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
  },
  fr: {
    // Navbar
    'nav.home': 'ACCUEIL',
    'nav.about': 'À PROPOS DE NOUS',
    'nav.services': 'SERVICES',
    'nav.faq': 'FAQ',
    'nav.contact': 'CONTACT',
    
    // Servizi dropdown
    'nav.services.photovoltaic': 'Photovoltaïque pour les entreprises',
    'nav.services.community': 'Communautés énergétiques',
    'nav.services.thermal': 'Compte thermique 3.0',
    
    // Hero Section
    'hero.title': 'L\'énergie pour votre entreprise',
    'hero.subtitle': 'L\'incitation la plus adaptée à votre secteur',
    'hero.cta': 'En savoir plus',
    
    // Form
    'form.title': 'Demander une consultation gratuite',
    'form.subtitle': 'Remplissez le formulaire pour recevoir des informations sur les incitations disponibles pour votre entreprise',
    'form.name': 'Nom et prénom',
    'form.email': 'Email',
    'form.phone': 'Téléphone',
    'form.company.size': 'Taille de l\'entreprise',
    'form.interests': 'Je suis intéressé par:',
    'form.interests.national': 'Incitations nationales',
    'form.interests.regional': 'Incitations régionales',
    'form.interests.sectoral': 'Incitations sectorielles',
    'form.interests.consulting': 'Consultation personnalisée',
    'form.message': 'Message',
    'form.submit': 'Envoyer la demande',
    'form.success': 'Merci pour votre demande ! Nous vous contacterons dès que possible.',
    'form.error': 'Une erreur est survenue. Veuillez réessayer plus tard ou nous contacter directement.',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions et termes',
    'footer.cookies': 'Politique de cookies',
  },
  de: {
    // Navbar
    'nav.home': 'STARTSEITE',
    'nav.about': 'ÜBER UNS',
    'nav.services': 'DIENSTLEISTUNGEN',
    'nav.faq': 'FAQ',
    'nav.contact': 'KONTAKT',
    
    // Servizi dropdown
    'nav.services.photovoltaic': 'Photovoltaik für Unternehmen',
    'nav.services.community': 'Energiegemeinschaften',
    'nav.services.thermal': 'Thermokonto 3.0',
    
    // Hero Section
    'hero.title': 'Energie für Ihr Unternehmen',
    'hero.subtitle': 'Die am besten geeignete Anreiz für Ihren Sektor',
    'hero.cta': 'Mehr erfahren',
    
    // Form
    'form.title': 'Kostenlose Beratung anfordern',
    'form.subtitle': 'Füllen Sie das Formular aus, um Informationen über verfügbare Anreize für Ihr Unternehmen zu erhalten',
    'form.name': 'Vollständiger Name',
    'form.email': 'Email',
    'form.phone': 'Telefon',
    'form.company.size': 'Unternehmensgröße',
    'form.interests': 'Ich bin an folgendem interessiert:',
    'form.interests.national': 'Nationale Anreize',
    'form.interests.regional': 'Regionale Anreize',
    'form.interests.sectoral': 'Sektorale Anreize',
    'form.interests.consulting': 'Persönliche Beratung',
    'form.message': 'Nachricht',
    'form.submit': 'Anfrage senden',
    'form.success': 'Vielen Dank für Ihre Anfrage! Wir werden uns so schnell wie möglich bei Ihnen melden.',
    'form.error': 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns direkt.',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.privacy': 'Datenschutzbestimmungen',
    'footer.terms': 'Allgemeine Geschäftsbedingungen',
    'footer.cookies': 'Cookie-Richtlinie',
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

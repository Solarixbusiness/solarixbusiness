'use client';

import { ReactNode, useState, useEffect } from 'react';
import { I18nContext, Locale, defaultTranslations, translate } from './i18n';

interface I18nProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export default function I18nProvider({ 
  children, 
  initialLocale = 'it' 
}: I18nProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  
  // Funzione per cambiare la lingua
  const changeLocale = (newLocale: Locale) => {
    try {
      setLocale(newLocale);
      
      // Verifica se siamo in ambiente browser
      if (typeof window === 'undefined' || !document) return;
      
      // Salva la preferenza nel localStorage
      try {
        localStorage.setItem('preferred-locale', newLocale);
      } catch (error) {
        console.error('Errore durante il salvataggio della lingua nel localStorage:', error);
      }
      
      // Imposta l'attributo lang sull'elemento html
      try {
        if (document.documentElement) {
          document.documentElement.lang = newLocale;
        }
      } catch (error) {
        console.error('Errore durante l\'impostazione dell\'attributo lang:', error);
      }
    } catch (error) {
      console.error('Errore durante il cambio di lingua:', error);
    }
  };
  
  // Funzione di traduzione
  const t = (key: string, params?: Record<string, string>) => {
    return translate(key, defaultTranslations[locale], params);
  };
  
  // Inizializzazione: controlla se c'è una lingua preferita salvata
  useEffect(() => {
    // Verifica se siamo in ambiente browser
    if (typeof window === 'undefined' || !document) return;
    
    try {
      let detectedLocale: Locale | null = null;
      
      // Prova a recuperare la lingua salvata nel localStorage
      try {
        const savedLocale = localStorage.getItem('preferred-locale') as Locale | null;
        if (savedLocale && Object.keys(defaultTranslations).includes(savedLocale)) {
          detectedLocale = savedLocale;
        }
      } catch (error) {
        console.error('Errore durante il recupero della lingua dal localStorage:', error);
      }
      
      // Se non c'è una lingua salvata, prova a rilevare la lingua del browser
      if (!detectedLocale) {
        try {
          const browserLocale = navigator.language.split('-')[0] as Locale;
          if (Object.keys(defaultTranslations).includes(browserLocale)) {
            detectedLocale = browserLocale;
          }
        } catch (error) {
          console.error('Errore durante il rilevamento della lingua del browser:', error);
        }
      }
      
      // Imposta la lingua rilevata
      if (detectedLocale) {
        setLocale(detectedLocale);
        
        // Imposta l'attributo lang sull'elemento html
        try {
          if (document.documentElement) {
            document.documentElement.lang = detectedLocale;
          }
        } catch (error) {
          console.error('Errore durante l\'impostazione dell\'attributo lang:', error);
        }
      }
    } catch (error) {
      console.error('Errore durante l\'inizializzazione della lingua:', error);
    }
  }, []);
  
  return (
    <I18nContext.Provider 
      value={{
        locale,
        translations: defaultTranslations[locale],
        t,
        changeLocale
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useTranslation, Locale } from '@/i18n/i18n';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { locale, changeLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  
  useEffect(() => {
    // Ottieni l'URL corrente solo lato client
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);
  
  const languages: { code: Locale; label: string; flag: string; useGoogleTranslate?: boolean }[] = [
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'en', label: 'English', flag: '🇬🇧', useGoogleTranslate: true },
    { code: 'fr', label: 'Français', flag: '🇫🇷', useGoogleTranslate: true },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪', useGoogleTranslate: true }
  ];
  
  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];
  
  const handleLanguageChange = (newLocale: Locale, useGoogleTranslate?: boolean) => {
    if (useGoogleTranslate && currentUrl) {
      // Reindirizza a Google Translate
      const googleTranslateUrl = `https://translate.google.com/translate?sl=auto&tl=${newLocale}&u=${encodeURIComponent(currentUrl)}`;
      window.open(googleTranslateUrl, '_blank');
    } else {
      // Usa il sistema di traduzione interno
      changeLocale(newLocale);
    }
    setIsOpen(false);
  };
  
  return (
    <div className={styles.languageSwitcher}>
      <button 
        className={styles.languageButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Seleziona lingua"
      >
        <span className={styles.flag}>{currentLanguage.flag}</span>
        <span className={styles.label}>{currentLanguage.code.toUpperCase()}</span>
      </button>
      
      {isOpen && (
        <ul 
          className={styles.languageDropdown}
          role="listbox"
          aria-label="Lingue disponibili"
        >
          {languages.map(lang => (
            <li 
              key={lang.code}
              role="option"
              aria-selected={locale === lang.code}
              className={`${styles.languageOption} ${locale === lang.code ? styles.active : ''}`}
              onClick={() => handleLanguageChange(lang.code, lang.useGoogleTranslate)}
            >
              <span className={styles.flag}>{lang.flag}</span>
              <span className={styles.label}>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

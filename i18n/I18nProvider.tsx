'use client';

import React, { useState, useCallback } from 'react';
import { I18nContext, defaultTranslations, Locale, Translations } from './i18n';
import { translate } from './i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocale] = useState<Locale>('it');
  const [translations, setTranslations] = useState<Translations>(defaultTranslations.it);

  const changeLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    setTranslations(defaultTranslations[newLocale]);
  }, []);

  const t = useCallback((key: string, params?: Record<string, string>) => {
    return translate(key, translations, params);
  }, [translations]);

  return (
    <I18nContext.Provider value={{ locale, translations, t, changeLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

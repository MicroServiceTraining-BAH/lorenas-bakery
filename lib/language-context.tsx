'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import t, { type Lang } from './translations';

type LanguageContextType = {
  lang: Lang;
  toggle: () => void;
  t: (typeof t)[Lang];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'es') setLang(stored);
  }, []);

  const toggle = () => {
    setLang((l) => {
      const next = l === 'en' ? 'es' : 'en';
      localStorage.setItem('lang', next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}

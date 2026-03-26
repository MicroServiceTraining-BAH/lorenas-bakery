'use client';

import { createContext, useContext, useState } from 'react';
import t, { type Lang } from './translations';

type LanguageContextType = {
  lang: Lang;
  toggle: () => void;
  t: (typeof t)[Lang];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  return (
    <LanguageContext.Provider value={{ lang, toggle: () => setLang((l) => (l === 'en' ? 'es' : 'en')), t: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}

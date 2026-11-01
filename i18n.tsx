import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { CONTENT } from './content';
import { Content, Lang } from './types';

const STORAGE_KEY = 'lang';

interface LangState {
  lang: Lang;
  t: Content;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangState | null>(null);

// English is the default; ?lang=it (shareable link) or a previous choice switches to Italian.
function initialLang(): Lang {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl === 'it' || fromUrl === 'en') {
      window.localStorage.setItem(STORAGE_KEY, fromUrl);
      return fromUrl;
    }
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'it' || saved === 'en') return saved;
  } catch {
    /* storage can be unavailable (private mode): fall back to English */
  }
  return 'en';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.querySelector('meta[name="description"]')?.setAttribute('content', CONTENT[lang].meta.description);
  }, [lang]);

  const value = useMemo(() => ({ lang, t: CONTENT[lang], setLang }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export function useLang(): LangState {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}

/** Sets the browser tab title for the current page. */
export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

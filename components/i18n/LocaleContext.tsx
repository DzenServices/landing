"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

export type Locale = "ru" | "en";

type LocaleContextValue = {
  lang: Locale;
  setLang: (lang: Locale) => void;
};

const LocaleContext = React.createContext<LocaleContextValue | undefined>(undefined);

export const useLocale = (): LocaleContextValue => {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
};

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialFromPath = pathname?.startsWith("/en") ? "en" : "ru";
  const initialFromQuery = (searchParams.get("lang")?.toLowerCase() === "en" ? "en" : "ru") as Locale;
  const initial = (initialFromPath || initialFromQuery) as Locale;
  const [lang, setLang] = React.useState<Locale>(initial);

  React.useEffect(() => {
    const byPath = pathname?.startsWith("/en") ? "en" : "ru";
    const byQuery = (searchParams.get("lang")?.toLowerCase() === "en" ? "en" : "ru") as Locale;
    const next = (byPath || byQuery) as Locale;
    setLang(next);
  }, [pathname, searchParams]);

  React.useEffect(() => {
    // Update <html lang> on client for a11y and SEO hints, and persist cookie
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", lang);
    }
    try {
      document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`;
    } catch {}
  }, [lang]);

  const value = React.useMemo(() => ({ lang, setLang }), [lang]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

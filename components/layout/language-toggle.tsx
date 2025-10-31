"use client";

import * as React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const LANG_STORAGE_KEY = "lang";

type Lang = "en" | "ru";

export const LanguageToggle: React.FC = () => {
  const [lang, setLang] = React.useState<Lang>("en");

  React.useEffect(() => {
    const stored = (typeof window !== "undefined"
      ? (localStorage.getItem(LANG_STORAGE_KEY) as Lang | null)
      : null) || (typeof document !== "undefined" ? (document.documentElement.lang as Lang) : null);
    if (stored === "ru" || stored === "en") {
      setLang(stored);
      if (typeof document !== "undefined") document.documentElement.lang = stored;
    }
  }, []);

  const handleValueChange = (value: string) => {
    if (value !== "ru" && value !== "en") return;
    setLang(value);
    if (typeof document !== "undefined") document.documentElement.lang = value;
    if (typeof localStorage !== "undefined") localStorage.setItem(LANG_STORAGE_KEY, value);
  };

  return (
    <ToggleGroup
      type="single"
      value={lang}
      onValueChange={handleValueChange}
      aria-label="Select language"
      className="ml-1"
    >
      <ToggleGroupItem value="en" aria-label="English" className="min-w-10">
        EN
      </ToggleGroupItem>
      <ToggleGroupItem value="ru" aria-label="Russian" className="min-w-10">
        RU
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

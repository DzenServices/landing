"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "@/components/i18n/LocaleContext";

export const LanguageToggle: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { lang, setLang } = useLocale();
  const isRu = lang !== "en";

  const handleSet = (next: "ru" | "en") => {
    const params = new URLSearchParams(searchParams.toString());
    // Remove explicit lang query if present; we'll switch via path prefix
    params.delete("lang");

    const basePath = pathname.startsWith("/en") ? pathname.replace(/^\/en(?=\/|$)/, "") || "/" : pathname;
    const nextPath = next === "en" ? (basePath === "/" ? "/en" : `/en${basePath}`) : basePath;
    const query = params.toString();
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const url = query ? `${nextPath}?${query}${hash}` : `${nextPath}${hash}`;
    router.push(url, { scroll: false });
    setLang(next);
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-full border bg-background p-1 text-xs">
      <button
        type="button"
        onClick={() => handleSet("ru")}
        className={[
          "px-2 py-1 rounded-full",
          isRu ? "bg-primary text-primary-foreground" : "hover:bg-muted",
        ].join(" ")}
        aria-pressed={isRu}
        aria-label="Русский"
      >
        RU
      </button>
      <button
        type="button"
        onClick={() => handleSet("en")}
        className={[
          "px-2 py-1 rounded-full",
          !isRu ? "bg-primary text-primary-foreground" : "hover:bg-muted",
        ].join(" ")}
        aria-pressed={!isRu}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

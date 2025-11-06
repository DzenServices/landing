import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/en",
    languages: {
      ru: "/",
      en: "/en",
      "x-default": "/",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  // Простой прокси-лейаут для /en, использует корневой layout и провайдеры
  return children;
}

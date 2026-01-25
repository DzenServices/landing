import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;
export const dynamic = 'error';

export async function generateMetadata(): Promise<Metadata> {
  const title = "Правила пользования | Dzen VPS";
  const description = "Публичная оферта Dzen VPS: условия предоставления доступа, тариф, списание средств, возвраты и поддержка.";
  const languages = { ru: "/terms", en: "/en/terms" } as const;
  return {
    title,
    description,
    alternates: { canonical: languages.ru, languages },
    openGraph: {
      title,
      description,
      locale: "ru_RU",
      alternateLocale: ["ru_RU", "en_US"],
      images: [
        {
          url: "/logos/web-app-manifest-512x512.png",
          width: 512,
          height: 512,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logos/web-app-manifest-512x512.png"],
    },
    robots: { index: false, follow: false },
  };
}

export default function TermsPage() {
  notFound();
}

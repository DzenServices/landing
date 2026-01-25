import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Политика конфиденциальности | Dzen VPS";
  const description = "Политика конфиденциальности Telegram-бота VPS Dzen: какие данные обрабатываются, цели и способы связи со службой поддержки.";
  const languages = { ru: "/privacy", en: "/en/privacy" } as const;
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

export default function PrivacyPage() {
  notFound();
}

import type { Metadata } from "next";
import { PrivacyContent, ru } from "@/components/privacy/PrivacyContent";

export const revalidate = 3600;
export const dynamic = 'error';

export async function generateMetadata(): Promise<Metadata> {
  const title = "Политика конфиденциальности | Dzen VPN";
  const description = "Политика конфиденциальности Telegram-бота VPN Dzen: какие данные обрабатываются, цели и способы связи со службой поддержки.";
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
  };
}

export default function PrivacyPage() {
  return <PrivacyContent t={ru} lang="ru" />;
}

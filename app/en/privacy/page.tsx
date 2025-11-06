import type { Metadata } from "next";
import { PrivacyContent, en } from "@/components/privacy/PrivacyContent";

export const revalidate = 3600;
export const dynamic = 'error';

export async function generateMetadata(): Promise<Metadata> {
  const title = "Privacy Policy | Dzen VPN";
  const description = "Privacy policy of the VPN Dzen Telegram bot: what data is processed, purposes and how to contact support.";
  const languages = { ru: "/privacy", en: "/en/privacy" } as const;
  return {
    title,
    description,
    alternates: { canonical: languages.en, languages },
    openGraph: {
      title,
      description,
      locale: "en_US",
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

export default function PrivacyEnPage() {
  return <PrivacyContent t={en} lang="en" />;
}

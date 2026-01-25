import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Privacy Policy | Dzen VPS";
  const description = "Privacy policy of the VPS Dzen Telegram bot: what data is processed, purposes and how to contact support.";
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
    robots: { index: false, follow: false },
  };
}

export default function PrivacyEnPage() {
  notFound();
}

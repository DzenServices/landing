import type { Metadata } from "next";
import { TermsContent, en } from "@/components/terms/TermsContent";

export const revalidate = 3600;
export const dynamic = 'error';

export async function generateMetadata(): Promise<Metadata> {
  const title = "Terms of Use | Dzen VPN";
  const description = "Dzen VPN public offer: service access conditions, rate, charging, refunds and support.";
  const languages = { ru: "/terms", en: "/en/terms" } as const;
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

export default function TermsEnPage() {
  return <TermsContent t={en} lang="en" />;
}

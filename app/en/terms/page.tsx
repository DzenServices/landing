import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Terms of Use | Dzen VPS";
  const description = "Dzen VPS public offer: service access conditions, rate, charging, refunds and support.";
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
    robots: { index: false, follow: false },
  };
}

export default function TermsEnPage() {
  notFound();
}

import type { Metadata } from "next";
import Script from "next/script";
import { BenefitsSection } from "@/components/layout/sections/benefits";
// import { CommunitySection } from "@/components/layout/sections/community";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
// import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { HowItWorksSection } from "@/components/layout/sections/how-it-works";
import { getDictionary } from "@/components/i18n/dictionary";
import { LazyFAQSection, LazySponsorsSection } from "@/components/layout/sections/lazy-sections";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Fast and secure VPS | Dzen VPS";
  const description = "Dzen VPS is a virtual private network service designed to provide secure access to the internet and reach restricted resources. Connection is started via a Telegram bot in under a minute. Traffic is encrypted and activity logs are not kept; apps are available for iPhone, Android, Windows, macOS, and Smart TV. Suitable for everyday browsing, travel, and remote work.";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dzenvps.com";
  const keywords = [
    "vps",
    "virtual private network",
    "traffic encryption",
    "secure connection",
    "bypass restrictions",
    "online privacy",
    "secure internet",
    "no logs vps",
    "telegram vps",
    "connect vps via telegram",
    "vps for iphone",
    "vps for ipad",
    "vps for android",
    "vps for windows",
    "vps for macos",
    "vps for smart tv",
    "vps for laptop",
    "fast vps",
    "reliable vps",
    "stable vps",
    "wireguard vps",
    "dns and vps",
    "vps subscription",
    "buy vps",
    "dzen vps"
  ];
  const languages = { ru: "/", en: "/en" } as const;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: languages.en, languages },
    openGraph: {
      type: "website",
      title,
      description,
      locale: "en_US",
      alternateLocale: ["ru_RU", "en_US"],
      url: `${siteUrl}/en`,
      siteName: "Dzen VPS",
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

export default async function HomeEn() {
  const lang = "en" as const;
  const dict = getDictionary(lang);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dzenvps.com";
  const mainPlan = dict.home.pricing.plans[0];
  const faqEntities = dict.home.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  }));
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dzen VPS",
    serviceType: "VPS access via Telegram",
    description:
      "Fast and secure VPS access with encrypted traffic, no logs, and instant setup via a Telegram bot.",
    provider: {
      "@type": "Organization",
      name: "Dzen VPS",
      url: siteUrl,
      logo: `${siteUrl}/logos/favicon.svg`,
      sameAs: ["https://t.me/vpn_dzen_bot"],
    },
    areaServed: dict.home.sponsors.countries.map((country) => ({
      "@type": "Country",
      name: country.name,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: mainPlan.price,
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/en`,
    },
  };
  return (
    <>
      <HeroSection lang={lang} />
      <LazySponsorsSection lang={lang} />
      <BenefitsSection lang={lang} />
      <FeaturesSection lang={lang} />
      <HowItWorksSection lang={lang} />
      <PricingSection lang={lang} />
      {/* <TestimonialSection /> */}
      {/* <CommunitySection /> */}
      <LazyFAQSection lang={lang} />
      <Script id="ld-faq-en" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqEntities,
        }) }}
      />
      <Script id="ld-service-en" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <FooterSection lang={lang} />
    </>
  );
}

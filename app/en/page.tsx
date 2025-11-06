import type { Metadata } from "next";
import Script from "next/script";
import { BenefitsSection } from "@/components/layout/sections/benefits";
// import { CommunitySection } from "@/components/layout/sections/community";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
// import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { HowItWorksSection } from "@/components/layout/sections/how-it-works";
import { getDictionary } from "@/components/i18n/dictionary";

export const revalidate = 3600;
export const dynamic = 'error';

export async function generateMetadata(): Promise<Metadata> {
  const title = "Fast and secure VPN | Dzen VPN";
  const description = "Connect in 1 minute via Telegram. Fast and secure VPN with no logs. Works on iPhone, Android, Windows, macOS and Smart TV.";
  const languages = { ru: "/", en: "/en" } as const;
  return {
    title,
    description,
    alternates: { canonical: languages.en, languages },
    openGraph: {
      type: "website",
      title,
      description,
      locale: "en_US",
      alternateLocale: ["ru_RU", "en_US"],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function HomeEn() {
  const lang = "en" as const;
  const dict = getDictionary(lang);
  const faqEntities = dict.home.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  }));
  return (
    <>
      <HeroSection lang={lang} />
      <SponsorsSection lang={lang} />
      <BenefitsSection lang={lang} />
      <FeaturesSection lang={lang} />
      <HowItWorksSection lang={lang} />
      <PricingSection lang={lang} />
      {/* <TestimonialSection /> */}
      {/* <CommunitySection /> */}
      <FAQSection lang={lang} />
      <Script id="ld-faq-en" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqEntities,
        }) }}
      />
      <FooterSection />
    </>
  );
}

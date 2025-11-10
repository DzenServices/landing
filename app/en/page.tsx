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
  const description = "Dzen VPN is a virtual private network service designed to provide secure access to the internet and reach restricted resources. Connection is started via a Telegram bot in under a minute. Traffic is encrypted and activity logs are not kept; apps are available for iPhone, Android, Windows, macOS, and Smart TV. Suitable for everyday browsing, travel, and remote work.";
  const keywords = [
    "vpn",
    "virtual private network",
    "traffic encryption",
    "secure connection",
    "bypass restrictions",
    "online privacy",
    "secure internet",
    "no logs vpn",
    "telegram vpn",
    "connect vpn via telegram",
    "vpn for iphone",
    "vpn for ipad",
    "vpn for android",
    "vpn for windows",
    "vpn for macos",
    "vpn for smart tv",
    "vpn for laptop",
    "fast vpn",
    "reliable vpn",
    "stable vpn",
    "wireguard vpn",
    "dns and vpn",
    "vpn subscription",
    "buy vpn",
    "dzen vpn"
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
    },
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

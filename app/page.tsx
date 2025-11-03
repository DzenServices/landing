import type { Metadata } from "next";
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

export async function generateMetadata({ searchParams }: { searchParams?: Record<string, string | string[] | undefined> }): Promise<Metadata> {
  const lang = (typeof searchParams?.lang === "string" ? searchParams?.lang : Array.isArray(searchParams?.lang) ? searchParams?.lang[0] : "ru")?.toLowerCase();
  const isEn = lang === "en";
  const title = isEn ? "Fast and secure VPN | Dzen VPN" : "Быстрый и безопасный VPN | Dzen VPN";
  const description = isEn
    ? "Connect via @vpn_dzen_bot in 1 minute. Fast and secure VPN with VLESS+REALITY, no logs. Works with Telegram, streaming and AI services on iOS, Android, Windows, macOS and Smart TV."
    : "Подключение через @vpn_dzen_bot за 1 минуту. Быстрый и безопасный VPN с VLESS+REALITY, без логов. Работает с Telegram, стримингом и AI‑сервисами на iOS, Android, Windows, macOS и Smart TV.";
  const languages = {
    ru: "/",
    en: "/en",
  } as const;
  return {
    title,
    description,
    alternates: {
      canonical: isEn ? languages.en : languages.ru,
      languages,
    },
    openGraph: {
      type: "website",
      title,
      description,
      locale: isEn ? "en_US" : "ru_RU",
      alternateLocale: ["ru_RU", "en_US"],
      images: [{ url: "/hero-image-light.jpeg", width: 1200, height: 630, alt: isEn ? "Dzen VPN — fast and secure VPN" : "Dzen VPN — быстрый и безопасный VPN" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero-image-light.jpeg"],
    },
  };
}

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Home({ searchParams }: PageProps) {
  const lang = (typeof searchParams?.lang === "string" ? searchParams?.lang : Array.isArray(searchParams?.lang) ? searchParams?.lang[0] : "ru")?.toLowerCase();
  return (
    <>
      <HeroSection lang={lang} />
      <SponsorsSection lang={lang} />
      <BenefitsSection lang={lang} />
      <FeaturesSection lang={lang} />
      <HowItWorksSection lang={lang} />
      <PricingSection lang={lang} />
      <FAQSection lang={lang} />
      <FooterSection />
    </>
  );
}


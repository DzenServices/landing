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
  const title = "Быстрый и безопасный VPS | Dzen VPS";
  const description = "Dzen VPS — сервис виртуальной частной сети, который помогает безопасно подключаться к интернету и получать доступ к заблокированным ресурсам. Подключение выполняется через Telegram‑бота за одну минуту без лишних данных. Трафик шифруется, журналы активности не ведутся; приложения доступны для iPhone, Android, Windows, macOS и Smart TV. Подходит для повседневного использования, путешествий и удалённой работы.";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dzenvps.com";
  const keywords = [
    "vps",
    "виртуальная частная сеть",
    "шифрование трафика",
    "защита соединения",
    "обход блокировок",
    "конфиденциальность онлайн",
    "безопасный интернет",
    "vps без логов",
    "no logs vps",
    "telegram vps",
    "подключение vps через telegram",
    "vps для iphone",
    "vps для ipad",
    "vps для android",
    "vps для windows",
    "vps для macos",
    "vps для smart tv",
    "vps для ноутбука",
    "скоростной vps",
    "надёжный vps",
    "стабильный vps",
    "впс россия",
    "впс для путешествий",
    "впс для работы",
    "проксирование трафика",
    "dns и vps",
    "wireguard vps",
    "подписка vps",
    "купить vps",
    "dzen vps"
  ];
  const languages = { ru: "/", en: "/en" } as const;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: languages.ru, languages },
    openGraph: {
      type: "website",
      title,
      description,
      locale: "ru_RU",
      alternateLocale: ["ru_RU", "en_US"],
      url: `${siteUrl}/`,
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

export default async function Home() {
  const lang = "ru" as const;
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
    serviceType: "VPS доступ через Telegram",
    description:
      "Быстрый и безопасный VPS-доступ с шифрованием трафика, без логов и подключением через Telegram-бота.",
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
      url: `${siteUrl}/`,
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
      <Script id="ld-faq" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqEntities,
        }) }}
      />
      <Script id="ld-service" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <FooterSection lang={lang} />
    </>
  );
}

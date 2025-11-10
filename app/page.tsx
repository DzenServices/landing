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
  const title = "Быстрый и безопасный VPN | Dzen VPN";
  const description = "Dzen VPN — сервис виртуальной частной сети, который помогает безопасно подключаться к интернету и получать доступ к заблокированным ресурсам. Подключение выполняется через Telegram‑бота за одну минуту без лишних данных. Трафик шифруется, журналы активности не ведутся; приложения доступны для iPhone, Android, Windows, macOS и Smart TV. Подходит для повседневного использования, путешествий и удалённой работы.";
  const keywords = [
    "vpn",
    "виртуальная частная сеть",
    "шифрование трафика",
    "защита соединения",
    "обход блокировок",
    "конфиденциальность онлайн",
    "безопасный интернет",
    "vpn без логов",
    "no logs vpn",
    "telegram vpn",
    "подключение vpn через telegram",
    "vpn для iphone",
    "vpn для ipad",
    "vpn для android",
    "vpn для windows",
    "vpn для macos",
    "vpn для smart tv",
    "vpn для ноутбука",
    "скоростной vpn",
    "надёжный vpn",
    "стабильный vpn",
    "впн россия",
    "впн для путешествий",
    "впн для работы",
    "проксирование трафика",
    "dns и vpn",
    "wireguard vpn",
    "подписка vpn",
    "купить vpn",
    "dzen vpn"
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
    },
  };
}

export default async function Home() {
  const lang = "ru" as const;
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
      <Script id="ld-faq" type="application/ld+json"
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

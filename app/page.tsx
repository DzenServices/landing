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

export const metadata = {
  title: "Быстрый и безопасный VPN | Dzen VPN",
  description:
    "Подключение через @vpn_dzen_bot за 1 минуту. Быстрый и безопасный VPN с VLESS+REALITY, без логов. Работает с Telegram, стримингом и AI‑сервисами на iOS, Android, Windows, macOS и Smart TV.",
  openGraph: {
    type: "website",
    title: "Быстрый и безопасный VPN | Dzen VPN",
    description:
      "Подключение через @vpn_dzen_bot за 1 минуту. Быстрый и безопасный VPN с VLESS+REALITY, без логов. Работает с Telegram, стримингом и AI‑сервисами на iOS, Android, Windows, macOS и Smart TV.",
    images: [
      {
        url: "/hero-image-light.jpeg",
        width: 1200,
        height: 630,
        alt: "Dzen VPN — быстрый и безопасный VPN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Быстрый и безопасный VPN | Dzen VPN",
    description:
      "Подключение через @vpn_dzen_bot за 1 минуту. Быстрый и безопасный VPN с VLESS+REALITY, без логов. Работает с Telegram, стримингом и AI‑сервисами на iOS, Android, Windows, macOS и Smart TV.",
    images: ["/hero-image-light.jpeg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}

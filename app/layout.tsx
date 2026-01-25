import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { LocaleProvider } from "@/components/i18n/LocaleContext";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dzenvps.com"),
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  title: "Быстрый и безопасный VPS | Dzen VPS",
  description:
    "Dzen VPS — сервис виртуальной частной сети для безопасного доступа к интернету и работы с ограниченными ресурсами. Подключение запускается через Telegram‑бота за минуту, трафик шифруется, журналы активности не ведутся. Клиенты доступны для iPhone, Android, Windows, macOS и Smart TV; решение подходит для повседневного использования, поездок и удалённой работы.",
  keywords: [
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
    "wireguard vps",
    "dns и vps",
    "подписка vps",
    "купить vps",
    "dzen vps"
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/logos/site.webmanifest",
  icons: {
    icon: [
      { url: "/logos/favicon.svg", type: "image/svg+xml" },
      { url: "/logos/favicon.ico" },
      { url: "/logos/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/logos/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/logos/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/logos/apple-touch-icon.png", rel: "apple-touch-icon" },
    ],
    shortcut: [{ url: "/logos/favicon.ico" }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <Suspense fallback={null}>
          <LocaleProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              {children}
            </ThemeProvider>
          </LocaleProvider>
        </Suspense>
        {/* JSON-LD structured data */}
        <Script id="ld-org" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Dzen VPS',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dzenvps.com',
            logo: (process.env.NEXT_PUBLIC_SITE_URL || 'https://dzenvps.com') + '/logos/favicon.svg',
            sameAs: ['https://t.me/vpn_dzen_bot']
          }) }}
        />
        <Script id="ld-website" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Dzen VPS',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dzenvps.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: (process.env.NEXT_PUBLIC_SITE_URL || 'https://dzenvps.com') + '/?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }) }}
        />
      </body>
    </html>
  );
}


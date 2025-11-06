import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { LocaleProvider } from "@/components/i18n/LocaleContext";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  title: "Быстрый и безопасный VPN | Dzen VPN",
  description:
    "Подключение за 1 минуту через Telegram. Быстрый и безопасный VPN без логов. Работает на iPhone, Android, Windows, macOS и Smart TV.",
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
        {/* JSON-LD structured data */}
        <Script id="ld-org" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Dzen VPN',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
            logo: (process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com') + '/logos/favicon.svg',
            sameAs: ['https://t.me/vpn_dzen_bot']
          }) }}
        />
        <Script id="ld-website" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Dzen VPN',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: (process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com') + '/?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }) }}
        />
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { LocaleProvider } from "@/components/i18n/LocaleContext";
import { cookies } from "next/headers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Быстрый и безопасный VPN | Dzen VPN",
  description:
    "Подключение через @vpn_dzen_bot за 1 минуту. Быстрый и безопасный VPN с VLESS+REALITY, без логов. Работает на iOS, Android, Windows, macOS и Smart TV.",
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
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStorePromise = cookies();
  const cookieStore = await cookieStorePromise;
  const langCookie = cookieStore.get("lang")?.value;
  const htmlLang = langCookie === "en" ? "en" : "ru";
  return (
    <html lang={htmlLang} className="scroll-smooth" suppressHydrationWarning>
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
      </body>
    </html>
  );
}

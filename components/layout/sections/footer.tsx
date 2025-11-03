"use client";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { useLocale } from "@/components/i18n/LocaleContext";
import { getDictionary } from "@/components/i18n/dictionary";

export const FooterSection = () => {
  const { lang } = useLocale();
  const isEn = lang === "en";
  const base = isEn ? "/en" : "/";
  const dict = getDictionary(isEn ? "en" : "ru");
  const t = dict.footer;
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8 items-start">
          <div className="col-span-full xl:col-span-2 order-1">
            <Link href={base} className="flex font-bold items-center">
              <Logo className="w-9 h-9 mr-2 text-primary" />
              <h3 className="text-2xl">Dzen VPN</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2 order-2 xl:col-start-5">
            <h3 className="font-bold text-lg">{t.contacts}</h3>
            <div>
              <Link href="https://t.me/vpn_dzen_bot_support" target="_blank" className="opacity-60 hover:opacity-100">
                {t.support}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-end text-right order-4 col-span-2 md:col-span-1 xl:col-span-1 xl:col-start-6">
            <h3 className="font-bold text-lg">{t.help}</h3>
            <div>
              <Link href={`${base}#faq`} className="opacity-60 hover:opacity-100">
                {t.faq}
              </Link>
            </div>
            <div>
              <Link href={isEn ? "/en/privacy" : "/privacy"} className="opacity-60 hover:opacity-100">
                {t.privacy}
              </Link>
            </div>
            <div>
              <Link href={isEn ? "/en/terms" : "/terms"} className="opacity-60 hover:opacity-100">
                {t.terms}
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2025 Dzen VPN. {t.rights}
          </h3>
        </section>
      </div>
    </footer>
  );
};

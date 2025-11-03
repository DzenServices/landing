"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/components/i18n/dictionary";

type Props = { lang?: string };

export const HeroSection = ({ lang }: Props) => {
  const dict = getDictionary(lang === "en" ? "en" : "ru");
  const t = dict.home.hero;
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              {t.titleStart}
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                {t.titleMid}
              </span>
              {t.titleEnd}
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {t.desc}
          </p>

          <div className="flex justify-center">
            <Button asChild className="w-full sm:w-auto px-6 py-3 font-bold group/arrow">
              <Link
                href="https://t.me/vpn_dzen_bot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.aria}
              >
                {t.cta}
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};


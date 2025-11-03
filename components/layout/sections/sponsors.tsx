"use client";

import Marquee from "react-fast-marquee";
import { getDictionary } from "@/components/i18n/dictionary";
interface CountryItem {
  emoji: string;
  name: string;
}

type Props = { lang?: string };

export const SponsorsSection = ({ lang }: Props) => {
  const dict = getDictionary(lang === "en" ? "en" : "ru");
  const t = dict.home.sponsors;
  return (
    <section id="sponsors" className="relative max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">{t.title}</h2>

      <div className="relative mx-auto">
        {/* Left gradient overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-12 bg-gradient-to-r from-background to-transparent z-10"
        />
        {/* Right gradient overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-12 bg-gradient-to-l from-background to-transparent z-10"
        />

        <Marquee pauseOnHover speed={30} gradient={false}>
          <div className="flex items-center gap-[3rem]">
            {t.countries.map(({ emoji, name }) => (
              <div
                key={name}
                className="flex items-center text-xl md:text-2xl font-medium"
              >
                <span className="mr-2" aria-hidden>
                  {emoji}
                </span>
                {name}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};


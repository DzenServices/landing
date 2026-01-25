"use client";

import dynamic from "next/dynamic";

type Props = { lang?: string };

const FAQSection = dynamic(
  () => import("@/components/layout/sections/faq").then((mod) => mod.FAQSection),
  { ssr: false, loading: () => <div className="container py-24 sm:py-32" /> }
);

const SponsorsSection = dynamic(
  () => import("@/components/layout/sections/sponsors").then((mod) => mod.SponsorsSection),
  { ssr: false, loading: () => <div className="container pb-24 sm:pb-32" /> }
);

export const LazyFAQSection = ({ lang }: Props) => <FAQSection lang={lang} />;

export const LazySponsorsSection = ({ lang }: Props) => <SponsorsSection lang={lang} />;

"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/i18n/LocaleContext";
import { getDictionary } from "@/components/i18n/dictionary";

export default function NotFound() {
  const { lang } = useLocale();
  const dict = getDictionary(lang === "en" ? "en" : "ru");
  const t = dict.notFound;
  const base = lang === "en" ? "/en" : "/";
  return (
    <section className="container py-24 sm:py-32 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h1>
      <p className="text-muted-foreground">{t.description}</p>
      <div className="mt-6 flex justify-center">
        <Button asChild>
          <Link href={base}>{t.cta}</Link>
        </Button>
      </div>
    </section>
  );
}

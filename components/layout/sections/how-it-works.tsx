import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getDictionary } from "@/components/i18n/dictionary";

interface StepProps { step: number; title: string; description: string }
type Props = { lang?: string };

export const HowItWorksSection = ({ lang }: Props) => {
  const dict = getDictionary(lang === "en" ? "en" : "ru");
  const t = dict.home.howItWorks;
  return (
    <section id="how-it-works" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        {t.kicker}
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-8">
        {t.title}
      </h2>

      <div className="grid sm:grid-cols-3 gap-4">
        {t.steps.map(({ step, title, description }) => (
          <Card key={step} className="h-full bg-background border-0 shadow-none">
            <CardHeader>
              <div className="text-5xl font-bold text-primary/80 mb-2">0{step}</div>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{description}</CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button asChild className="font-bold">
          <Link href="https://t.me/vpn_dzen_bot" target="_blank" rel="noopener noreferrer" aria-label={t.aria}>
            {t.cta}
          </Link>
        </Button>
      </div>
    </section>
  );
};


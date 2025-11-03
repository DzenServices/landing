import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { getDictionary } from "@/components/i18n/dictionary";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  buttonAria: string;
  benefitList: string[];
}

type Props = { lang?: string };

export const PricingSection = ({ lang }: Props) => {
  const dict = getDictionary(lang === "en" ? "en" : "ru");
  const t = dict.home.pricing;
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        {t.kicker}
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        {t.title}
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        {t.sub}
      </h3>

      <div className="grid grid-cols-1 place-items-center gap-8">
        {t.plans.map(
          ({ title, popular, price, description, buttonText, buttonAria, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">{price}₽</span>
                  <span className="text-muted-foreground">{t.currencySuffix}</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  variant={popular === PopularPlan?.YES ? "default" : "secondary"}
                  className="w-full"
                >
                  <a
                    href="https://t.me/vpn_dzen_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={buttonAria}
                  >
                    {buttonText}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};


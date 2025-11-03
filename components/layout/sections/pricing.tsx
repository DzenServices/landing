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
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Один простой тариф",
    popular: PopularPlan.YES,
    price: 3,
    description:
      "У нас нет тарифов — всё просто: 3 ₽ в сутки за подключённое устройство.",
    buttonText: "Подключить в Telegram",
    benefitList: [
      "Скорость до 10 Gbps",
      "Заморозка подписки в любой момент",
      "Персональные настройки навигации",
      "Много геолокаций по всему миру",
      "YouTube без рекламы и доступ к AI",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Тарифы
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Всё просто
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Платите только за подключённые устройства и дни использования — без скрытых условий.
      </h3>

      <div className="grid grid-cols-1 place-items-center gap-8">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
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
                  <span className="text-muted-foreground"> / сутки</span>
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
                    aria-label="Подключить Dzen VPN в Telegram"
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

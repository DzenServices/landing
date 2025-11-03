import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface StepProps {
  step: number;
  title: string;
  description: string;
}

const steps: StepProps[] = [
  {
    step: 1,
    title: "Откройте @vpn_dzen_bot",
    description: "Запустите бота в Telegram — всё управление внутри.",
  },
  {
    step: 2,
    title: "Создайте устройство (~1 минута)",
    description: "Получите готовые настройки для вашего устройства.",
  },
  {
    step: 3,
    title: "Установите приложение и примените настройки",
    description: "Поддержка iOS, Android, Windows, macOS и Smart TV.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Как это работает
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-8">
        Подключение за 1 минуту в 3 шага
      </h2>

      <div className="grid sm:grid-cols-3 gap-4">
        {steps.map(({ step, title, description }) => (
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
          <Link href="https://t.me/vpn_dzen_bot" target="_blank" rel="noopener noreferrer" aria-label="Подключиться к Dzen VPN в Telegram">
            Подключиться в Telegram
          </Link>
        </Button>
      </div>
    </section>
  );
};

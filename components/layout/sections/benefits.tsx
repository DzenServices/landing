import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Tv",
    title: "Стриминг и Smart TV",
    description:
      "Смотрите фильмы и сериалы на смартфоне, ноутбуке и Smart TV без сложной настройки.",
  },
  {
    icon: "Wifi",
    title: "Путешествия и публичный Wi‑Fi",
    description:
      "Защищённое подключение в отелях, аэропортах и кафе.",
  },
  {
    icon: "Briefcase",
    title: "Работа и банки",
    description:
      "Доступ к корпоративным ресурсам и сервисам из любой точки мира.",
  },
  {
    icon: "Brain",
    title: "Учёба и AI‑сервисы",
    description:
      "Свободный доступ к обучающим платформам и инструментам ИИ.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Преимущества</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ваш путь к комфорту</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Собственное приложение внутри Telegram — подключайте и управляйте в пару кликов.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

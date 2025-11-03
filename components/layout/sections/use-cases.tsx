import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface UseCaseProps {
  icon: string;
  title: string;
  description: string;
}

const useCases: UseCaseProps[] = [
  {
    icon: "Send",
    title: "VPN для Telegram",
    description:
      "Сообщения, каналы и боты — стабильный доступ и удобное управление через @vpn_dzen_bot.",
  },
  {
    icon: "Tv",
    title: "Стриминг и Smart TV",
    description:
      "Смотрите фильмы и сериалы на смартфоне, ноутбуке и Smart TV без сложной настройки.",
  },
  {
    icon: "Globe",
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

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Сценарии использования
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-8">
        Для работы, общения и развлечений
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {useCases.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex items-center">
                <Icon
                  name={icon as keyof typeof icons}
                  size={28}
                  color="hsl(var(--primary))"
                  className="text-primary mb-4"
                />
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Иван Петров",
    userName: "Маркетолог",
    comment:
      "Подключение заняло меньше минуты в Telegram. Скорость стабильная, YouTube без рекламы — то, что нужно!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Софья Ковалёва",
    userName: "Аналитик ИБ",
    comment:
      "VLESS + REALITY внушают доверие. Доступ к рабочим сервисам из любой точки мира без сбоев.",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Адам Журавлёв",
    userName: "CTO",
    comment:
      "Очень удобное управление в боте: пауза, продление, смена страны за пару кликов. Рекомендую команде.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Егор Парфёнов",
    userName: "Data Scientist",
    comment:
      "Доступ ко всем AI‑сервисам без ограничений. Скорость отличная для загрузки датасетов и стриминга.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Анна Митина",
    userName: "PM",
    comment:
      "Много геолокаций: нашла нужные страны для рекламных кабинетов. Всё работает стабильно.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Изабелла Рид",
    userName: "DevOps",
    comment:
      "10 Gbps сервера тянут CI/CD и видеосозвоны без лагов. Отличный уровень сервиса.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Отзывы
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Что говорят наши клиенты
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

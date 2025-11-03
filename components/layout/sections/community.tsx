import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <Image
                  src="/telegram.svg"
                  alt="Telegram"
                  width={48}
                  height={48}
                  className="mb-2"
                />
                <div>
                  Готовы присоединиться к
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    Telegram?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Присоединяйтесь к нашему Telegram‑сообществу: общайтесь, делитесь опытом и получайте помощь в один клик. 🚀
            </CardContent>

            <CardFooter>
              <Button asChild>
                <a
                  href="https://t.me/dzen_services"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Открыть Telegram-сообщество Dzen Services"
                >
                  Присоединиться в Telegram
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};

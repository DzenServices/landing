"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Быстрый и безопасный
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                VPN
              </span>
              для всех ваших устройств
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Подключение через @vpn_dzen_bot за 1 минуту. VLESS + REALITY, без логов. Работает на iOS, Android, Windows, macOS и Smart TV.
          </p>

          <div className="flex justify-center">
            <Button asChild className="w-full sm:w-auto px-6 py-3 font-bold group/arrow">
              <Link
                href="https://t.me/vpn_dzen_bot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Открыть бота Dzen VPN в Telegram"
              >
                Подключиться в Telegram
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

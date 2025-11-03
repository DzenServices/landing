import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/icons/logo";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8 items-start">
          <div className="col-span-full xl:col-span-2 order-1">
            <Link href="/" className="flex font-bold items-center">
              <Logo className="w-9 h-9 mr-2 text-primary" />
              <h3 className="text-2xl">Dzen VPN</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2 order-2 xl:col-start-4">
            <h3 className="font-bold text-lg">Контакты</h3>
            <div>
              <Link href="https://t.me/vpn_dzen_bot_support" target="_blank" className="opacity-60 hover:opacity-100">
                Поддержка в Telegram
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 order-3 xl:col-start-5">
            <h3 className="font-bold text-lg">Разделы</h3>
            <div>
              <Link href="#sponsors" className="opacity-60 hover:opacity-100">
                Страны подключения
              </Link>
            </div>
            <div>
              <Link href="#benefits" className="opacity-60 hover:opacity-100">
                Преимущества
              </Link>
            </div>
            <div>
              <Link href="#features" className="opacity-60 hover:opacity-100">
                Особенности
              </Link>
            </div>
            <div>
              <Link href="#how-it-works" className="opacity-60 hover:opacity-100">
                Как это работает
              </Link>
            </div>
            <div>
              <Link href="#pricing" className="opacity-60 hover:opacity-100">
                Тарифы
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-end text-right order-4 col-span-2 md:col-span-1 xl:col-span-1 xl:col-start-6">
            <h3 className="font-bold text-lg">Помощь</h3>
            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2025 Dzen VPN. Все права защищены.
          </h3>
        </section>
      </div>
    </footer>
  );
};

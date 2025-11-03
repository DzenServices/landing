"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import { Logo } from "../icons/logo";
import { LanguageToggle } from "@/components/i18n/LanguageToggle";
import { useLocale } from "@/components/i18n/LocaleContext";
import { getDictionary } from "@/components/i18n/dictionary";

interface RouteProps { hash: string; label: string }

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { lang } = useLocale();
  const dict = getDictionary(lang === "en" ? "en" : "ru");
  const t = dict.nav;
  const routeList: RouteProps[] = [
    { hash: "sponsors", label: t.sponsors },
    { hash: "benefits", label: t.benefits },
    { hash: "features", label: t.features },
    { hash: "how-it-works", label: t.how },
    { hash: "pricing", label: t.pricing },
    { hash: "faq", label: t.faq },
  ];
  const base = lang === "en" ? "/en" : "/";
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href={base} className="font-bold text-lg flex items-center">
        <Logo className="w-9 h-9 mr-2 text-primary" />
        Dzen VPN
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href={base} className="flex items-center">
                    <Logo className="w-9 h-9 mr-2 text-primary" />
                    Dzen VPN
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ hash, label }) => (
                  <Button
                    key={hash}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={`${base}#${hash}`}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <div className="mb-2"><LanguageToggle /></div>
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            {routeList.map(({ hash, label }) => (
              <NavigationMenuLink key={hash} asChild>
                <Link href={`${base}#${hash}`} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

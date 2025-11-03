import type { Metadata } from "next";

export async function generateMetadata({ searchParams }: { searchParams?: Record<string, string | string[] | undefined> }): Promise<Metadata> {
  const lang = (typeof searchParams?.lang === "string" ? searchParams?.lang : Array.isArray(searchParams?.lang) ? searchParams?.lang[0] : "ru")?.toLowerCase();
  const isEn = lang === "en";
  const title = isEn ? "Privacy Policy | Dzen VPN" : "Политика конфиденциальности | Dzen VPN";
  const description = isEn
    ? "Privacy policy of the VPN Dzen Telegram bot: what data is processed, purposes and how to contact support."
    : "Политика конфиденциальности Telegram-бота VPN Dzen: какие данные обрабатываются, цели и способы связи со службой поддержки.";
  const languages = { ru: "/privacy", en: "/en/privacy" } as const;
  return {
    title,
    description,
    alternates: { canonical: isEn ? languages.en : languages.ru, languages },
    openGraph: {
      title,
      description,
      locale: isEn ? "en_US" : "ru_RU",
      alternateLocale: ["ru_RU", "en_US"],
    },
  };
}

import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";
import { PrivacyToc } from "@/components/privacy/PrivacyToc";

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

const ru = {
  breadcrumbsHome: "Главная",
  pageTitle: "Политика конфиденциальности Telegram-бота «VPN Dzen»",
  updatedLabel: "Дата обновления",
  intro:
    "Администрация Telegram-бота VPN Dzen обязуется сохранять вашу конфиденциальность. Настоящая политика основана на требованиях GDPR и законодательства РФ и описывает, какие данные обрабатываются и с какой целью.",
  s1: "1. Сбор и использование персональных данных",
  s1_p1: "Мы обрабатываем данные только при вашем добровольном согласии и исключительно для работы сервиса:",
  s1_li1: "Telegram ID;",
  s1_li2: "username, имя и фамилия (если указаны в Telegram);",
  s1_li3: "адрес электронной почты (при обращении в поддержку или для уведомлений по услугам).",
  s1_p2: "Обработка ведётся в соответствии с действующим законодательством РФ и ЕС.",
  s2: "2. Хранение, изменение и удаление данных",
  s2_p1:
    "Данные хранятся на период предоставления услуг и удаляются по завершении основной деятельности бота либо по вашему запросу. Вы имеете право на изменение, удаление данных и отзыв согласия.",
  s2_p2_prefix: "Запросы на доступ, изменение или удаление данных направляйте через поддержку внутри бота",
  s3: "3. Технические данные при использовании бота",
  s3_p1:
    "Через Telegram API мы получаем техническую информацию, необходимую для работы сервиса (например, ваш Telegram ID и события взаимодействия внутри бота). Эти данные не позволяют идентифицировать вас вне экосистемы Telegram.",
  s4: "4. Передача данных третьим лицам",
  s4_p1:
    "Мы не передаём ваши данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законом.",
  s5: "5. Дети",
  s5_p1:
    "Использование бота несовершеннолетними допускается только с согласия родителей или законных представителей. Если вы являетесь родителем/опекуном и считаете, что ребёнок предоставил данные без вашего согласия, свяжитесь с нами через поддержку — мы удалим информацию.",
  s6: "6. Cookie и сторонние сервисы",
  s6_p1: "Бот не использует cookie и сторонние аналитические сервисы (Google Analytics, Яндекс Метрика и т. п.).",
  s7: "7. Внешние ссылки",
  s7_p1:
    "Бот может содержать ссылки на внешние ресурсы (например, платёжные сервисы). Мы не контролируем их политику конфиденциальности. Рекомендуем знакомиться с условиями на соответствующих сайтах.",
  s8: "8. Обновления политики",
  s8_p1:
    "Мы можем обновлять данную политику. Актуальная версия публикуется в боте. Существенные изменения могут быть дополнительно анонсированы в уведомлениях.",
  s9: "9. Контакты",
  s9_p1_prefix: "По вопросам конфиденциальности свяжитесь с нами через поддержку в боте",
  s9_p1_suffix: "Если вы не согласны с данной политикой, не используйте услуги бота.",
  toc: [
    { id: "s1", label: "1. Сбор и использование" },
    { id: "s2", label: "2. Хранение и удаление" },
    { id: "s3", label: "3. Технические данные" },
    { id: "s4", label: "4. Передача третьим лицам" },
    { id: "s5", label: "5. Дети" },
    { id: "s6", label: "6. Cookie и сервисы" },
    { id: "s7", label: "7. Внешние ссылки" },
    { id: "s8", label: "8. Обновления политики" },
    { id: "s9", label: "9. Контакты" },
  ],
};

const en = {
  breadcrumbsHome: "Home",
  pageTitle: "Privacy Policy of the Telegram bot ‘VPN Dzen’",
  updatedLabel: "Last updated",
  intro:
    "The administration of the VPN Dzen Telegram bot is committed to protecting your privacy. This policy is based on GDPR and Russian law and describes what data we process and for what purposes.",
  s1: "1. Collection and use of personal data",
  s1_p1: "We process data only with your voluntary consent and solely to operate the service:",
  s1_li1: "Telegram ID;",
  s1_li2: "username, first and last name (if provided in Telegram);",
  s1_li3: "email address (when contacting support or for service notifications).",
  s1_p2: "Processing is carried out in accordance with applicable laws of the Russian Federation and the EU.",
  s2: "2. Storage, modification and deletion of data",
  s2_p1:
    "Data is stored for the duration of service provision and deleted upon termination of the bot’s core activities or upon your request. You have the right to modify, delete data and withdraw consent.",
  s2_p2_prefix: "Send requests for access, modification or deletion via in-bot support",
  s3: "3. Technical data when using the bot",
  s3_p1:
    "Through the Telegram API, we receive technical information required for the service to work (e.g., your Telegram ID and interaction events within the bot). This data does not allow us to identify you outside of the Telegram ecosystem.",
  s4: "4. Transfer of data to third parties",
  s4_p1:
    "We do not transfer your data to third parties without your consent, except as required by law.",
  s5: "5. Children",
  s5_p1:
    "Use of the bot by minors is allowed only with the consent of parents or legal guardians. If you are a parent/guardian and believe a child provided data without your consent, contact us via support — we will delete the information.",
  s6: "6. Cookies and third‑party services",
  s6_p1: "The bot does not use cookies or third‑party analytics (Google Analytics, Yandex Metrica, etc.).",
  s7: "7. External links",
  s7_p1:
    "The bot may contain links to external resources (e.g., payment services). We do not control their privacy policies. Please review the terms on the respective sites.",
  s8: "8. Policy updates",
  s8_p1:
    "We may update this policy. The current version is published in the bot. Material changes may be additionally announced in notifications.",
  s9: "9. Contacts",
  s9_p1_prefix: "For privacy inquiries, contact us via support in the bot",
  s9_p1_suffix: "If you do not agree with this policy, do not use the bot’s services.",
  toc: [
    { id: "s1", label: "1. Collection and use" },
    { id: "s2", label: "2. Storage and deletion" },
    { id: "s3", label: "3. Technical data" },
    { id: "s4", label: "4. Third‑party transfer" },
    { id: "s5", label: "5. Children" },
    { id: "s6", label: "6. Cookies & services" },
    { id: "s7", label: "7. External links" },
    { id: "s8", label: "8. Policy updates" },
    { id: "s9", label: "9. Contacts" },
  ],
};

export default function PrivacyPage({ searchParams }: PageProps) {
  const lang = (typeof searchParams?.lang === "string" ? searchParams?.lang : Array.isArray(searchParams?.lang) ? searchParams?.lang[0] : "ru")?.toLowerCase();
  const t = lang === "en" ? en : ru;
  const updatedAt = "03.11.2025";

  return (
    <>
      <section id="top" className="container py-10 sm:py-16">
        {/* Хиро-блок */}
        <div className="mx-auto max-w-3xl text-center">
          <nav className="mb-4 text-sm text-muted-foreground" aria-label="Breadcrumbs">
            <ol className="inline-flex items-center gap-1">
              <li>
                <Link href={lang === "en" ? "/en" : "/"} className="hover:text-foreground/80 transition-colors">{t.breadcrumbsHome}</Link>
              </li>
              <li aria-hidden className="px-1">/</li>
              <li className="text-foreground">{t.pageTitle}</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">{t.pageTitle}</h1>
          <div className="mt-3 inline-flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{t.updatedLabel}</span>
            <span className="text-xs rounded-full border bg-background px-2.5 py-1 text-muted-foreground">
              {updatedAt}
            </span>
          </div>
        </div>

        {/* Контент с оглавлением */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Основной контент */}
          <article className="lg:col-span-8 xl:col-span-9">
            <div className="rounded-2xl border bg-background/50 backdrop-blur shadow-sm p-6 sm:p-10">
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none leading-relaxed prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:scroll-mt-24 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4 prose-ul:my-4 prose-li:my-1.5">
                <p className="lead">
                  {t.intro.split("VPN Dzen")[0]}
                  <a href="https://t.me/vpn_dzen_bot" target="_blank" rel="noopener noreferrer">VPN Dzen</a>
                  {t.intro.split("VPN Dzen")[1] ?? ""}
                </p>

                <h2 id="s1" className="scroll-mt-24">{t.s1}</h2>
                <p>{t.s1_p1}</p>
                <ul>
                  <li>{t.s1_li1}</li>
                  <li>{t.s1_li2}</li>
                  <li>{t.s1_li3}</li>
                </ul>
                <p>{t.s1_p2}</p>

                <h2 id="s2" className="scroll-mt-24">{t.s2}</h2>
                <p>{t.s2_p1}</p>
                <p>
                  {t.s2_p2_prefix}{" "}
                  <a href="https://t.me/vpn_dzen_bot" target="_blank" rel="noopener noreferrer">@vpn_dzen_bot</a>.
                </p>

                <h2 id="s3" className="scroll-mt-24">{t.s3}</h2>
                <p>{t.s3_p1}</p>

                <h2 id="s4" className="scroll-mt-24">{t.s4}</h2>
                <p>{t.s4_p1}</p>

                <h2 id="s5" className="scroll-mt-24">{t.s5}</h2>
                <p>{t.s5_p1}</p>

                <h2 id="s6" className="scroll-mt-24">{t.s6}</h2>
                <p>{t.s6_p1}</p>

                <h2 id="s7" className="scroll-mt-24">{t.s7}</h2>
                <p>{t.s7_p1}</p>

                <h2 id="s8" className="scroll-mt-24">{t.s8}</h2>
                <p>{t.s8_p1}</p>

                <h2 id="s9" className="scroll-mt-24">{t.s9}</h2>
                <p>
                  {t.s9_p1_prefix}{" "}
                  <a href="https://t.me/vpn_dzen_bot" target="_blank" rel="noopener noreferrer">VPN Dzen</a>.
                  {" "}
                  {t.s9_p1_suffix}
                </p>

                <div className="not-prose mt-8 rounded-xl border bg-muted/40 p-4 sm:p-5 text-sm text-muted-foreground">
                  <p>
                    Подсказка: используйте оглавление справа, чтобы быстро перейти к нужному разделу. Нажмите
                    <a className="ml-1 text-primary underline underline-offset-4" href="#top">вверх</a>, чтобы вернуться к началу страницы.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Оглавление (правый сайдбар) */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <PrivacyToc items={t.toc} />
          </aside>
        </div>
      </section>
      <FooterSection />
    </>
  );
}


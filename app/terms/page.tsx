import type { Metadata } from "next";
import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";
import { PrivacyToc } from "@/components/privacy/PrivacyToc";

export async function generateMetadata({ searchParams }: { searchParams?: Promise<Record<string, string | string[] | undefined>> }): Promise<Metadata> {
  const sp = (await searchParams) ?? undefined;
  const lang = (typeof sp?.lang === "string" ? sp?.lang : Array.isArray(sp?.lang) ? sp?.lang[0] : "ru")?.toLowerCase();
  const isEn = lang === "en";
  const title = isEn ? "Terms of Use | Dzen VPN" : "Правила пользования | Dzen VPN";
  const description = isEn
    ? "Dzen VPN public offer: service access conditions, rate, charging, refunds and support."
    : "Публичная оферта Dzen VPN: условия предоставления доступа, тариф, списание средств, возвраты и поддержка.";
  const languages = { ru: "/terms", en: "/en/terms" } as const;
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

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const ru = {
  breadcrumbsHome: "Главная",
  pageTitle: "Правила пользования / Публичная оферта",
  updatedLabel: "Дата обновления",
  s1: "1. Общие положения",
  s1_p1_prefix:
    "Владелец сервиса (далее — «Продавец») публикует настоящую публичную оферту о предоставлении доступа к VPN-сервису через Telegram-бота",
  s1_p2:
    "В соответствии со статьёй 437 ГК РФ данный документ является публичной офертой. Оплата услуг является акцептом оферты (ст. 438 ГК РФ) и означает заключение Договора.",
  s1_p3: "Если вы не согласны с условиями, не используйте сервис и не производите оплату.",
  s1_list: [
    "Оферта — публичное предложение Продавца заключить Договор на указанных условиях.",
    "Покупатель / Пользователь — физическое лицо, принявшее условия Оферты и пополнившее баланс в боте.",
    "Товар (Доступ) — услуга предоставления VPN-соединения через программное обеспечение Продавца.",
    "Баланс — денежные средства Пользователя в сервисе, с которых ежедневно списывается плата за использование.",
    "Заказ — пополнение баланса на выбранную сумму.",
  ],
  s2: "2. Предмет договора",
  s2_p1: "Продавец предоставляет доступ к VPN-сервису при условии наличия положительного баланса на аккаунте Пользователя.",
  s2_p2_prefix: "Текущий тариф:",
  s2_p2_value: "3 рубля в день за 1 устройство",
  s2_p3: "Услуга активна до тех пор, пока на счёте есть достаточная сумма для списания.",
  s3: "3. Пополнение баланса",
  s3_p1_prefix: "Пополнение осуществляется в Telegram-боте",
  s3_p2: "Баланс увеличивается на внесённую сумму за вычетом комиссии платёжных систем (если применимо).",
  s3_p3: "Все расчёты ведутся в рублях РФ.",
  s4: "4. Списание средств",
  s4_list: [
    "Списание производится ежедневно из расчёта 3 ₽/день/1 устройство.",
    "Если на балансе недостаточно средств, доступ приостанавливается до следующего пополнения.",
    "При повторном пополнении доступ восстанавливается автоматически.",
  ],
  s5: "5. Бесплатный пробный период",
  s5_p1_prefix: "Всем новым Пользователям предоставляется стартовый бонус —",
  s5_p1_value1: "9 ₽ на баланс",
  s5_p1_value2: "3 дням бесплатного использования",
  s5_p1_suffix: "на одно устройство.",
  s6: "6. Возвраты и ограничения",
  s6_list: [
    "Денежные средства, внесённые на баланс, возврату не подлежат.",
    "Продавец не несёт ответственности за проблемы со связью, оборудованием или провайдерами Пользователя.",
  ],
  s7: "7. Программа лояльности «Пригласите друга»",
  s7_list: [
    "Пользователь может пригласить новых участников по своей реферальной ссылке.",
    "Пригласивший получает 10% от каждого пополнения баланса приглашённого.",
    "Вознаграждение начисляется на баланс и может использоваться для оплаты услуг.",
  ],
  s8: "8. Права, обязанности и ответственность",
  s8_p1: "Пользователь обязан использовать сервис только в законных целях.",
  s8_p2: "Запрещается:",
  s8_list: [
    "использовать торренты;",
    "злоупотреблять реферальной системой;",
    "рассылать спам, заниматься мошенничеством, фишингом;",
    "проводить DDoS-атаки, взломы, сканирование портов;",
    "использовать сервис для противоправной деятельности;",
    "перегружать сервера массовыми автоматическими запросами;",
    "передавать или перепродавать доступ третьим лицам без согласия Продавца.",
  ],
  s8_p3: "Нарушение правил может привести к блокировке аккаунта и списанию средств без возврата.",
  s9: "9. Поддержка и претензии",
  s9_p1_prefix: "Обращения и претензии принимаются через поддержку в Telegram-боте",
  s9_p2: "Ответ предоставляется в разумный срок.",
  toc: [
    { id: "s1", label: "1. Общие положения" },
    { id: "s2", label: "2. Предмет договора" },
    { id: "s3", label: "3. Пополнение баланса" },
    { id: "s4", label: "4. Списание средств" },
    { id: "s5", label: "5. Бесплатный период" },
    { id: "s6", label: "6. Возвраты и ограничения" },
    { id: "s7", label: "7. Пригласите друга" },
    { id: "s8", label: "8. Права и ответственность" },
    { id: "s9", label: "9. Поддержка и претензии" },
  ],
};

const en = {
  breadcrumbsHome: "Home",
  pageTitle: "Terms of Use / Public Offer",
  updatedLabel: "Last updated",
  s1: "1. General provisions",
  s1_p1_prefix:
    "The service owner (the “Seller”) publishes this public offer to provide access to the VPN service via the Telegram bot",
  s1_p2:
    "In accordance with Article 437 of the Civil Code of the Russian Federation, this document is a public offer. Payment for services constitutes acceptance (Art. 438 of the Civil Code) and means the conclusion of a Contract.",
  s1_p3: "If you do not agree with the terms, do not use the service and do not make payments.",
  s1_list: [
    "Offer — a public proposal by the Seller to conclude a Contract on the specified terms.",
    "Buyer / User — an individual who accepted the Offer terms and topped up the balance in the bot.",
    "Product (Access) — the service of providing a VPN connection through the Seller's software.",
    "Balance — the User's funds in the service from which the daily fee is charged.",
    "Order — topping up the balance for the selected amount.",
  ],
  s2: "2. Subject of the contract",
  s2_p1: "The Seller provides access to the VPN service subject to a positive account balance.",
  s2_p2_prefix: "Current rate:",
  s2_p2_value: "3 RUB per day per 1 device",
  s2_p3: "The service remains active as long as there are sufficient funds for charging.",
  s3: "3. Balance top-up",
  s3_p1_prefix: "Top-up is performed in the Telegram bot",
  s3_p2: "The balance increases by the deposited amount minus payment system fees (if applicable).",
  s3_p3: "All settlements are made in Russian rubles.",
  s4: "4. Charges",
  s4_list: [
    "Charges are made daily at a rate of 3 RUB/day/1 device.",
    "If there are insufficient funds, access is suspended until the next top-up.",
    "Upon recharging, access is restored automatically.",
  ],
  s5: "5. Free trial period",
  s5_p1_prefix: "All new Users are granted a starting bonus —",
  s5_p1_value1: "9 RUB to the balance",
  s5_p1_value2: "3 days of free use",
  s5_p1_suffix: "for one device.",
  s6: "6. Refunds and limitations",
  s6_list: [
    "Funds deposited to the balance are non-refundable.",
    "The Seller is not responsible for issues with the User’s connectivity, equipment or providers.",
  ],
  s7: "7. Loyalty program “Invite a friend”",
  s7_list: [
    "A User can invite new participants using their referral link.",
    "The inviter receives 10% of each top-up made by the invitee.",
    "Rewards are credited to the balance and can be used to pay for services.",
  ],
  s8: "8. Rights, obligations and liability",
  s8_p1: "The User must use the service only for lawful purposes.",
  s8_p2: "Prohibited:",
  s8_list: [
    "use torrents;",
    "abuse the referral system;",
    "send spam, engage in fraud or phishing;",
    "carry out DDoS attacks, hacking or port scanning;",
    "use the service for illegal activities;",
    "overload servers with massive automated requests;",
    "transfer or resell access to third parties without the Seller’s consent.",
  ],
  s8_p3: "Violation of the rules may result in account blocking and deduction of funds without refund.",
  s9: "9. Support and claims",
  s9_p1_prefix: "Inquiries and claims are accepted via support in the Telegram bot",
  s9_p2: "A response is provided within a reasonable time.",
  toc: [
    { id: "s1", label: "1. General provisions" },
    { id: "s2", label: "2. Subject of the contract" },
    { id: "s3", label: "3. Balance top-up" },
    { id: "s4", label: "4. Charges" },
    { id: "s5", label: "5. Free trial" },
    { id: "s6", label: "6. Refunds & limitations" },
    { id: "s7", label: "7. Invite a friend" },
    { id: "s8", label: "8. Rights & liability" },
    { id: "s9", label: "9. Support & claims" },
  ],
};

export default async function TermsPage({ searchParams }: PageProps) {
  const sp = (await searchParams) ?? undefined;
  const lang = (typeof sp?.lang === "string" ? sp?.lang : Array.isArray(sp?.lang) ? sp?.lang[0] : "ru")?.toLowerCase();
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

        <h2 id="s1" className="scroll-mt-24">{t.s1}</h2>
        <p>
          {t.s1_p1_prefix}{" "}
          <a href="https://t.me/vpn_dzen_bot" target="_blank" rel="noopener noreferrer">VPN Dzen</a>.
        </p>
        <p>{t.s1_p2}</p>
        <p>{t.s1_p3}</p>
        <ul>
          {t.s1_list.map((item, i) => (
            <li key={i}><b>{item.split(" — ")[0]}</b>{item.includes(" — ") ? ` — ${item.split(" — ")[1]}` : ""}</li>
          ))}
        </ul>

        <h2 id="s2" className="scroll-mt-24">{t.s2}</h2>
        <p>{t.s2_p1}</p>
        <p>
          {t.s2_p2_prefix} <b>{t.s2_p2_value}</b>.
        </p>
        <p>{t.s2_p3}</p>

        <h2 id="s3" className="scroll-mt-24">{t.s3}</h2>
        <p>
          {t.s3_p1_prefix}{" "}
          <a href="https://t.me/vpn_dzen_bot" target="_blank" rel="noopener noreferrer">@vpn_dzen_bot</a> {" "}
          {"("}{lang === "en" ? "bank cards, SBP, etc." : "банковские карты, СБП и др."}{")"}.
        </p>
        <p>{t.s3_p2}</p>
        <p>{t.s3_p3}</p>

        <h2 id="s4" className="scroll-mt-24">{t.s4}</h2>
        <ul>
          {t.s4_list.map((item, i) => (
            <li key={i}>{item.replace("3 ₽/день/1 устройство", lang === "en" ? "3 RUB/day/1 device" : "3 ₽/день/1 устройство")}</li>
          ))}
        </ul>

        <h2 id="s5" className="scroll-mt-24">{t.s5}</h2>
        <p>
          {t.s5_p1_prefix} <b>{t.s5_p1_value1}</b>, {lang === "en" ? "which corresponds to" : "что соответствует"} <b>{t.s5_p1_value2}</b> {t.s5_p1_suffix}
        </p>

        <h2 id="s6" className="scroll-mt-24">{t.s6}</h2>
        <ul>
          {t.s6_list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 id="s7" className="scroll-mt-24">{t.s7}</h2>
        <ul>
          {t.s7_list.map((item, i) => (
            <li key={i}>{item.replace("10%", lang === "en" ? "10%" : "10%")}</li>
          ))}
        </ul>

        <h2 id="s8" className="scroll-mt-24">{t.s8}</h2>
        <p>{t.s8_p1}</p>
        <p>{t.s8_p2}</p>
        <ul>
          {t.s8_list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>{t.s8_p3}</p>

        <h2 id="s9" className="scroll-mt-24">{t.s9}</h2>
        <p>
          {t.s9_p1_prefix}{" "}
          <a href="https://t.me/vpn_dzen_bot" target="_blank" rel="noopener noreferrer">@vpn_dzen_bot</a>.
        </p>
        <p>{t.s9_p2}</p>
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


import type { Metadata } from "next";
import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";
import { PrivacyToc } from "@/components/privacy/PrivacyToc";

export const metadata: Metadata = {
  title: "Правила пользования | Dzen VPN",
  description:
    "Публичная оферта Dzen VPN: условия предоставления доступа, тариф, списание средств, возвраты и поддержка.",
};

export default function TermsPage() {
  const updatedAt = "03.11.2025";

  return (
    <>
      <section id="top" className="container py-10 sm:py-16">
        {/* Хиро-блок */}
        <div className="mx-auto max-w-3xl text-center">
          <nav className="mb-4 text-sm text-muted-foreground" aria-label="Хлебные крошки">
            <ol className="inline-flex items-center gap-1">
              <li>
                <Link href="/" className="hover:text-foreground/80 transition-colors">Главная</Link>
              </li>
              <li aria-hidden className="px-1">/</li>
              <li className="text-foreground">Правила пользования</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Правила пользования / Публичная оферта
          </h1>
          <div className="mt-3 inline-flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Дата обновления</span>
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

        <h2 id="s1" className="scroll-mt-24">1. Общие положения</h2>
        <p>
          Владелец сервиса (далее — «Продавец») публикует настоящую публичную оферту о предоставлении доступа к VPN-сервису через Telegram-бота {" "}
          <a href="https://t.me/vpn_dzen_bot" target="_blank" rel="noopener noreferrer">VPN Dzen</a>.
        </p>
        <p>В соответствии со статьёй 437 ГК РФ данный документ является публичной офертой. Оплата услуг является акцептом оферты (ст. 438 ГК РФ) и означает заключение Договора.</p>
        <p>Если вы не согласны с условиями, не используйте сервис и не производите оплату.</p>
        <ul>
          <li><b>Оферта</b> — публичное предложение Продавца заключить Договор на указанных условиях.</li>
          <li><b>Покупатель / Пользователь</b> — физическое лицо, принявшее условия Оферты и пополнившее баланс в боте.</li>
          <li><b>Товар (Доступ)</b> — услуга предоставления VPN-соединения через программное обеспечение Продавца.</li>
          <li><b>Баланс</b> — денежные средства Пользователя в сервисе, с которых ежедневно списывается плата за использование.</li>
          <li><b>Заказ</b> — пополнение баланса на выбранную сумму.</li>
        </ul>

        <h2 id="s2" className="scroll-mt-24">2. Предмет договора</h2>
        <p>Продавец предоставляет доступ к VPN-сервису при условии наличия положительного баланса на аккаунте Пользователя.</p>
        <p>
          Текущий тариф: <b>3 рубля в день за 1 устройство</b>.
        </p>
        <p>Услуга активна до тех пор, пока на счёте есть достаточная сумма для списания.</p>

        <h2 id="s3" className="scroll-mt-24">3. Пополнение баланса</h2>
        <p>
          Пополнение осуществляется в Telegram-боте {" "}
          <a href="https://t.me/vpn_dzen_bot" target="_blank" rel="noopener noreferrer">@vpn_dzen_bot</a> доступными способами оплаты (банковские карты, СБП и др.).
        </p>
        <p>Баланс увеличивается на внесённую сумму за вычетом комиссии платёжных систем (если применимо).</p>
        <p>Все расчёты ведутся в рублях РФ.</p>

        <h2 id="s4" className="scroll-mt-24">4. Списание средств</h2>
        <ul>
          <li>Списание производится ежедневно из расчёта <b>3 ₽/день/1 устройство</b>.</li>
          <li>Если на балансе недостаточно средств, доступ приостанавливается до следующего пополнения.</li>
          <li>При повторном пополнении доступ восстанавливается автоматически.</li>
        </ul>

        <h2 id="s5" className="scroll-mt-24">5. Бесплатный пробный период</h2>
        <p>
          Всем новым Пользователям предоставляется стартовый бонус — <b>9 ₽ на баланс</b>, что соответствует <b>3 дням бесплатного использования</b> на одно устройство.
        </p>

        <h2 id="s6" className="scroll-mt-24">6. Возвраты и ограничения</h2>
        <ul>
          <li>Денежные средства, внесённые на баланс, возврату не подлежат.</li>
          <li>Продавец не несёт ответственности за проблемы со связью, оборудованием или провайдерами Пользователя.</li>
        </ul>

        <h2 id="s7" className="scroll-mt-24">7. Программа лояльности «Пригласите друга»</h2>
        <ul>
          <li>Пользователь может пригласить новых участников по своей реферальной ссылке.</li>
          <li>
            Пригласивший получает <b>10% от каждого пополнения баланса приглашённого</b>.
          </li>
          <li>Вознаграждение начисляется на баланс и может использоваться для оплаты услуг.</li>
        </ul>

        <h2 id="s8" className="scroll-mt-24">8. Права, обязанности и ответственность</h2>
        <p>Пользователь обязан использовать сервис только в законных целях.</p>
        <p>Запрещается:</p>
        <ul>
          <li>использовать торренты;</li>
          <li>злоупотреблять реферальной системой;</li>
          <li>рассылать спам, заниматься мошенничеством, фишингом;</li>
          <li>проводить DDoS-атаки, взломы, сканирование портов;</li>
          <li>использовать сервис для противоправной деятельности;</li>
          <li>перегружать сервера массовыми автоматическими запросами;</li>
          <li>передавать или перепродавать доступ третьим лицам без согласия Продавца.</li>
        </ul>
        <p>Нарушение правил может привести к блокировке аккаунта и списанию средств без возврата.</p>

        <h2 id="s9" className="scroll-mt-24">9. Поддержка и претензии</h2>
        <p>
          Обращения и претензии принимаются через поддержку в Telegram-боте {" "}
          <a href="https://t.me/vpn_dzen_bot" target="_blank" rel="noopener noreferrer">@vpn_dzen_bot</a>.
        </p>
        <p>Ответ предоставляется в разумный срок.</p>
              </div>
            </div>
          </article>

          {/* Оглавление (правый сайдбар) */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <PrivacyToc
              items={[
                { id: "s1", label: "1. Общие положения" },
                { id: "s2", label: "2. Предмет договора" },
                { id: "s3", label: "3. Пополнение баланса" },
                { id: "s4", label: "4. Списание средств" },
                { id: "s5", label: "5. Бесплатный период" },
                { id: "s6", label: "6. Возвраты и ограничения" },
                { id: "s7", label: "7. Пригласите друга" },
                { id: "s8", label: "8. Права и ответственность" },
                { id: "s9", label: "9. Поддержка и претензии" },
              ]}
            />
          </aside>
        </div>
      </section>
      <FooterSection />
    </>
  );
}


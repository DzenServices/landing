import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Dzen VPN",
  description:
    "Политика конфиденциальности Telegram-бота VPN Dzen: какие данные обрабатываются, цели и способы связи со службой поддержки.",
};

import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";
import { PrivacyToc } from "@/components/privacy/PrivacyToc";

export default function PrivacyPage() {
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
              <li className="text-foreground">Политика конфиденциальности</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Политика конфиденциальности Telegram-бота «VPN Dzen»
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
                <p className="lead">
                  Администрация Telegram-бота{" "}
                  <a href="https://t.me/vpn_dzen_bot" target="_blank" rel="noopener noreferrer">
                    VPN Dzen
                  </a>{" "}
                  обязуется сохранять вашу конфиденциальность. Настоящая политика основана на требованиях GDPR и законодательства РФ и описывает, какие данные обрабатываются и с какой целью.
                </p>

                <h2 id="s1" className="scroll-mt-24">1. Сбор и использование персональных данных</h2>
                <p>Мы обрабатываем данные только при вашем добровольном согласии и исключительно для работы сервиса:</p>
                <ul>
                  <li>Telegram ID;</li>
                  <li>username, имя и фамилия (если указаны в Telegram);</li>
                  <li>адрес электронной почты (при обращении в поддержку или для уведомлений по услугам).</li>
                </ul>
                <p>Обработка ведётся в соответствии с действующим законодательством РФ и ЕС.</p>

                <h2 id="s2" className="scroll-mt-24">2. Хранение, изменение и удаление данных</h2>
                <p>
                  Данные хранятся на период предоставления услуг и удаляются по завершении основной деятельности бота либо по вашему запросу. Вы имеете право на изменение, удаление данных и отзыв согласия.
                </p>
                <p>
                  Запросы на доступ, изменение или удаление данных направляйте через поддержку внутри бота{" "}
                  <a href="https://t.me/vpn_dzen_bot" target="_blank" rel="noopener noreferrer">@vpn_dzen_bot</a>.
                </p>

                <h2 id="s3" className="scroll-mt-24">3. Технические данные при использовании бота</h2>
                <p>
                  Через Telegram API мы получаем техническую информацию, необходимую для работы сервиса (например, ваш Telegram ID и события взаимодействия внутри бота). Эти данные не позволяют идентифицировать вас вне экосистемы Telegram.
                </p>

                <h2 id="s4" className="scroll-mt-24">4. Передача данных третьим лицам</h2>
                <p>Мы не передаём ваши данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законом.</p>

                <h2 id="s5" className="scroll-mt-24">5. Дети</h2>
                <p>
                  Использование бота несовершеннолетними допускается только с согласия родителей или законных представителей. Если вы являетесь родителем/опекуном и считаете, что ребёнок предоставил данные без вашего согласия, свяжитесь с нами через поддержку — мы удалим информацию.
                </p>

                <h2 id="s6" className="scroll-mt-24">6. Cookie и сторонние сервисы</h2>
                <p>Бот не использует cookie и сторонние аналитические сервисы (Google Analytics, Яндекс Метрика и т. п.).</p>

                <h2 id="s7" className="scroll-mt-24">7. Внешние ссылки</h2>
                <p>
                  Бот может содержать ссылки на внешние ресурсы (например, платёжные сервисы). Мы не контролируем их политику конфиденциальности. Рекомендуем знакомиться с условиями на соответствующих сайтах.
                </p>

                <h2 id="s8" className="scroll-mt-24">8. Обновления политики</h2>
                <p>
                  Мы можем обновлять данную политику. Актуальная версия публикуется в боте. Существенные изменения могут быть дополнительно анонсированы в уведомлениях.
                </p>

                <h2 id="s9" className="scroll-mt-24">9. Контакты</h2>
                <p>
                  По вопросам конфиденциальности свяжитесь с нами через поддержку в боте{" "}
                  <a href="https://t.me/vpn_dzen_bot" target="_blank" rel="noopener noreferrer">VPN Dzen</a>.
                  Если вы не согласны с данной политикой, не используйте услуги бота.
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
            <PrivacyToc
              items={[
                { id: "s1", label: "1. Сбор и использование" },
                { id: "s2", label: "2. Хранение и удаление" },
                { id: "s3", label: "3. Технические данные" },
                { id: "s4", label: "4. Передача третьим лицам" },
                { id: "s5", label: "5. Дети" },
                { id: "s6", label: "6. Cookie и сервисы" },
                { id: "s7", label: "7. Внешние ссылки" },
                { id: "s8", label: "8. Обновления политики" },
                { id: "s9", label: "9. Контакты" },
              ]}
            />
          </aside>
        </div>
      </section>
      <FooterSection />
    </>
  );
}


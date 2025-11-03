import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Как подключиться к Dzen VPN?",
    answer:
      "Откройте @vpn_dzen_bot и создайте устройство — ~1 минута. Доступ активируется сразу. Установите Happ и добавьте настройки.",
    value: "item-1",
  },
  {
    question: "Сколько устройств можно подключить?",
    answer: "Без ограничений по количеству устройств.",
    value: "item-2",
  },
  {
    question: "Какая скорость?",
    answer:
      "Инфраструктура до 10 Gbps. Реальная скорость зависит от вашего провайдера и выбранной локации.",
    value: "item-3",
  },
  {
    question: "Можно ли заморозить подписку?",
    answer:
      "Да. Заморозка доступна прямо в боте в один клик. Оплата — только за фактические дни использования.",
    value: "item-4",
  },
  {
    question: "На каких платформах работает?",
    answer:
      "iOS, Android, Windows, macOS, Smart TV. Доступны конфигурации для популярных клиентов.",
    value: "item-5",
  },
  {
    question: "Будет YouTube без рекламы и доступ к AI?",
    answer:
      "Да. Видео без рекламы и доступ ко всем AI‑сервисам после подключения.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Вопросы и ответы
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Часто задаваемые вопросы
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getDictionary } from "@/components/i18n/dictionary";

interface FAQProps { question: string; answer: string; value: string }
type Props = { lang?: string };

export const FAQSection = ({ lang }: Props) => {
  const dict = getDictionary(lang === "en" ? "en" : "ru");
  const t = dict.home.faq;
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">{t.kicker}</h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">{t.title}</h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {t.items.map(({ question, answer, value }) => (
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


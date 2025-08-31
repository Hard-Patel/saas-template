import { ComponentIcon } from "lucide-react";
import { FAQCollapsible } from "../common/FaqCollapsible";
import { IconLabel } from "../common/IconLabel";
import { HeadingText } from "./HeadingText";

const faqs = [
  {
    question: "How long is the free trial?",
    answer:
      "You get full access to all Pro features for 14 days—no credit card required.",
  },
  {
    question: "What happens after my trial ends?",
    answer:
      "You can choose a paid plan or continue with the free version with limited features.",
  },
  {
    question: "Do you offer an annual billing discount?",
    answer: "Yes, we offer up to 20% discount on annual subscriptions.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, Of Course, We use 256 bit encryption methods and follow indutry level best practices to secure the data",
  },
];

export function Faqs() {
  return (
    <div className="flex flex-col gap-4 my-16 px-4 sm:px-8 xl:px-[var(--horizontal-padding)]">
      <div className="flex self-center my-2">
        <IconLabel label="Faqs" icon={ComponentIcon} bgColor="bg-green-300" />
      </div>

      <HeadingText>Frequently Asked Questions</HeadingText>

      <div className="my-12">
        {faqs.map((faq, idx) => (
          <FAQCollapsible
            key={idx}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
}

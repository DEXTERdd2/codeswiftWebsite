"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How does the pricing work for teams",
    answer: "We tailor pricing based on scope, timeline, and team size, ensuring the best value for your project."
  },
  {
    question: "How does the pricing work for teams",
    answer: "We tailor pricing based on scope, timeline, and team size, ensuring the best value for your project."
  },
  {
    question: "How does the pricing work for teams",
    answer: "We tailor pricing based on scope, timeline, and team size, ensuring the best value for your project."
  },
  {
    question: "How does the pricing work for teams",
    answer: "We tailor pricing based on scope, timeline, and team size, ensuring the best value for your project."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Frequently asked questions</h2>
        </div>

        <div className="max-w-4xl space-y-1">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-white/10">
              <button
                className="w-full py-5 text-left flex justify-between items-center text-white"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 text-gray-300 ${activeIndex === index ? 'max-h-40 pb-4' : 'max-h-0'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

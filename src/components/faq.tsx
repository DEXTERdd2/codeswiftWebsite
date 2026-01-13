"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What services does CodeSwift offer?",
    answer: "CodeSwift provides end-to-end digital solutions including custom software development, web and mobile applications, AI-driven solutions, UI/UX design, cloud services, and ongoing product support. From idea to scale, we help businesses build technology that actually works for them."
  },
  {
    question: "How does CodeSwift ensure project quality?",
    answer: "Quality is built into our process. Every project goes through structured planning, disciplined engineering, regular testing, and continuous client feedback. Our teams follow best practices in code standards, performance optimization, security, and scalability to ensure reliable, high-quality outcomes."
  },
  {
    question: "How do I start a project with CodeSwift?",
    answer: "Getting started is simple. Reach out to us with your idea or challenge, and we’ll schedule a discovery call. From there, we define requirements, timelines, and scope, followed by a clear proposal. Once aligned, our team begins execution with regular updates and collaboration."
  },
  {
    question: "Can CodeSwift support projects after launch?",
    answer: "Yes. CodeSwift offers ongoing post-launch support including maintenance, performance optimization, feature enhancements, monitoring, and scaling as your business grows. We aim to be a long-term technology partner, not just a one-time development vendor."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-20 pb-20 bg-transparent">
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

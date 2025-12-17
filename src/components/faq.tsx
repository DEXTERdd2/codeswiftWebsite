"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp, MessageSquare, Mail, Phone } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing solutions tailored to your business needs."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on complexity and requirements. A simple website might take 4-6 weeks, while more complex applications can take several months. We'll provide a detailed timeline after discussing your specific needs."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team options. We'll work with you to determine the most cost-effective approach for your project."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally after launch."
  },
  {
    question: "What technologies do you work with?",
    answer: "Our team is proficient in a wide range of technologies including React, Node.js, Python, Flutter, and more. We choose the best tech stack based on your project requirements."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Frequently Asked </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and more.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full px-5 py-4 pl-14 pr-12 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  {activeIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
                >
                  <div className="text-gray-300">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-400">No questions found matching "{searchTerm}"</p>
            </div>
          )}
        </div>

        {/* Still have questions? */}
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 md:p-10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mb-6">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Still have a question?</h3>
            <p className="text-gray-300 mb-8">
              Can't find the answer you're looking for? Our team is happy to answer your questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:contact@example.com" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-colors duration-200"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

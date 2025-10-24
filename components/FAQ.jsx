"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const faqs = [
  {
    question: "How long does it take to set up a business in Dubai?",
    answer: "The timeline varies depending on the type of business and license. Typically, mainland company setup takes 2-3 weeks, while free zone companies can be established in 3-5 business days. We streamline the entire process to ensure the fastest possible setup."
  },
  {
    question: "What are the costs involved in setting up a business?",
    answer: "Costs depend on several factors including business activity, license type, office space requirements, and visa needs. We provide transparent pricing and customized packages to suit your budget. Contact us for a detailed quote tailored to your specific requirements."
  },
  {
    question: "Do I need a local sponsor for my business?",
    answer: "For mainland companies, 100% foreign ownership is now allowed in most business activities. Free zone companies have always offered 100% foreign ownership. We'll guide you through the best structure for your specific business needs."
  },
  {
    question: "What types of visas can I obtain?",
    answer: "We assist with various visa types including investor visas, employee visas, partner visas, and dependent visas. The number of visas depends on your license type and office space. We handle the entire visa processing from application to Emirates ID."
  },
  {
    question: "Can you help with office space and PRO services?",
    answer: "Yes! We offer comprehensive services including office space solutions (physical offices, flexi-desks, virtual offices), PRO services for government documentation, and ongoing business support to ensure smooth operations."
  },
  {
    question: "What ongoing support do you provide after setup?",
    answer: "We provide continuous support including accounting and bookkeeping, license renewals, visa renewals, PRO services, legal compliance, and business consulting. We're your long-term partner in success."
  }
];

export default function FAQ() {
  useEffect(() => {
    const cards = document.querySelectorAll('[data-lordicon-target]');
    cards.forEach(card => {
      const icon = card.querySelector('lord-icon');
      if (icon) {
        card.addEventListener('mouseenter', () => {
          icon.playerInstance?.playFromBeginning();
        });
      }
    });
  }, []);

  return (
    <section className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 bg-[#ea6a61]/5">
      <div className="text-center mb-4 sm:mb-6 space-y-2 sm:space-y-3">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl px-2 sm:px-0">
          Frequently Asked Questions
        </h2>
        <p className="body-lg max-w-2xl mx-auto text-sm sm:text-base px-2 sm:px-0">
          Find answers to common questions about setting up your business in Dubai
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="bg-white/80 backdrop-blur-sm border-2 border-[#e85a4f]/30 hover:border-[#e85a4f] hover:shadow-lg rounded-lg px-3 sm:px-4 md:px-6 transition-all" data-lordicon-target>
              <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base md:text-lg font-semibold py-3 sm:py-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <lord-icon
                    src="https://cdn.lordicon.com/gqfozvrp.json"
                    trigger="morph"
                    colors="primary:#ee6d66"
                    style={{width: '24px', height: '24px'}}
                    className="flex-shrink-0">
                  </lord-icon>
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm md:text-base pb-3 sm:pb-4 text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

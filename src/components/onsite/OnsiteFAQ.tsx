"use client";

import { useState } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/faqData";

export function OnsiteFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#FCFAF7] py-20 md:py-28 border-t border-[#E8E1D7]">
      <div className="max-w-[840px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] font-light text-[#262626] leading-[1.12]">
              Frequently Asked Questions <br />
              <em className="italic font-normal text-[#5E7052]">about our onsite wellness programs.</em>
            </h2>
            <p className="font-sans text-base text-[#6D6D6D] leading-relaxed mt-4 max-w-[540px] mx-auto">
              Clear, direct answers regarding property requirements, instructor credentials, equipment setup, and program logistics.
            </p>
          </div>
        </FadeIn>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={item.question} delay={index * 0.05}>
                <div className="bg-[#F8F5EF]/80 border border-[#E8E1D7] rounded-2xl overflow-hidden transition-colors duration-200">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5E7052] rounded-2xl"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-serif text-lg md:text-xl font-light text-[#262626] pr-4">
                      {item.question}
                    </h3>
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full border border-[#E8E1D7] text-[#5E7052] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#FCFAF7]" : "bg-transparent"
                      }`}
                    >
                      <ChevronDown size={18} strokeWidth={2} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 border-t border-[#E8E1D7]/50 mt-2">
                      <p className="font-sans text-sm md:text-base text-[#6D6D6D] leading-[1.8] pt-4">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

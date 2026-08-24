"use client";

import { FadeIn } from "@/components/shared/FadeIn";

const steps = [
  {
    num: "01",
    title: "Property Consultation",
    description: "Submit a brief inquiry detailing your property type, guest demographics, and preferred space configuration.",
  },
  {
    num: "02",
    title: "Program Curation",
    description: "We design a customized class schedule (morning, travel recovery, or evening) aligned with guest habits.",
  },
  {
    num: "03",
    title: "Turnkey Service Launch",
    description: "Our certified RYT instructor arrives on-site with all sanitized mats and props, managing setup and teardown completely.",
  },
  {
    num: "04",
    title: "Guest Relaxation & Impact",
    description: "Guests enjoy guided restorative sessions, elevating property review scores and guest loyalty.",
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="bg-[#FCFAF7] py-20 md:py-28 border-t border-[#E8E1D7]">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="max-w-[680px] mb-12 md:mb-16">
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-light text-[#262626] leading-[1.12]">
              How does the property onboarding <br />
              <em className="italic font-normal text-[#5E7052]">process work?</em>
            </h2>
            <p className="font-sans text-base text-[#6D6D6D] leading-relaxed mt-4">
              Four structured steps to launch a fully managed wellness program at your property within 5 to 7 days.
            </p>
          </div>
        </FadeIn>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <FadeIn key={step.num} delay={index * 0.1}>
              <div className="space-y-4">
                <span className="block font-serif text-5xl lg:text-6xl font-light text-[#E8E1D7] select-none">
                  {step.num}
                </span>
                <h3 className="font-serif text-xl font-light text-[#262626] pt-2">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-[#6D6D6D] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}


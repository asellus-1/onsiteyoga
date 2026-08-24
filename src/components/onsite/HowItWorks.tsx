"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeader } from "@/components/shared/SectionHeader";

const steps = [
  {
    num: "01",
    title: "Property Consultation",
    description: "Submit a brief inquiry detailing your property, guest profile, and preferred space configuration.",
  },
  {
    num: "02",
    title: "Program Curation",
    description: "We design a customized class schedule (morning, travel recovery, or evening) aligned with guest habits.",
  },
  {
    num: "03",
    title: "Seamless Onsite Launch",
    description: "Our certified RYT instructor arrives with all sanitized props, managing room setup, check-in, and cleanup.",
  },
  {
    num: "04",
    title: "Guest Relaxation",
    description: "Your guests enjoy guided restorative yoga, elevating review scores and guest satisfaction.",
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="bg-[#FCFAF7] py-20 md:py-36 border-t border-[#E8E1D7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">

        {/* Header */}
        <SectionHeader
          eyebrow="The Process"
          title="Four simple steps"
          italicTitle="to launch."
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <FadeIn key={step.num} delay={index * 0.1}>
              <div className="space-y-4 relative">
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

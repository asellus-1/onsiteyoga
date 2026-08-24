"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Elevate Guest Satisfaction",
    description: "Provide travelers with an authentic restorative experience that elevates guest satisfaction scores.",
  },
  {
    title: "Distinctive Wellness Amenity",
    description: "Differentiate luxury boutique hotels and resorts from standard properties with guided restorative yoga.",
  },
  {
    title: "Zero Property Staff Overhead",
    description: "Eliminate administrative burden—our service includes complete instructor scheduling, setup, and cleanup.",
  },
  {
    title: "On-Demand Guest Convenience",
    description: "Guests access guided wellness sessions directly on-property without off-site transit or third-party bookings.",
  },
  {
    title: "Flexible Circadian Scheduling",
    description: "Align class timings with guest needs, from early morning flows to evening winding-down sessions.",
  },
  {
    title: "Zero Prop Capital Expense",
    description: "We supply, clean, sanitize, and maintain all commercial-grade mats, blocks, and alignment straps.",
  },
];

export function WhyHotels() {
  return (
    <section id="why-hotels" className="bg-[#F8F5EF] py-20 md:py-36 border-t border-[#E8E1D7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">

        {/* Header */}
        <SectionHeader
          eyebrow="The Value"
          title="Why properties offer"
          italicTitle="onsite restorative yoga."
        />

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-12">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 0.1}>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#5E7052]/10 text-[#5E7052] shrink-0">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-light text-[#262626]">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-sm text-[#6D6D6D] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}

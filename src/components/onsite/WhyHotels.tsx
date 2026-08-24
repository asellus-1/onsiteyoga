"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Elevate Guest Satisfaction Ratings",
    description: "Provide hotel guests and travelers with an authentic restorative experience that elevates guest satisfaction scores and positive online reviews.",
  },
  {
    title: "Distinctive Amenity Differentiation",
    description: "Differentiate luxury boutique hotels and resorts from standard properties by offering guided restorative yoga that surpasses conventional hotel gyms.",
  },
  {
    title: "Zero Property Staff Overhead",
    description: "Eliminate administrative burden for concierges and staff—our service includes complete instructor scheduling, equipment transport, setup, and cleanup.",
  },
  {
    title: "On-Demand Guest Convenience",
    description: "Guests access professionally guided wellness sessions directly on-property without requiring off-site transportation or third-party bookings.",
  },
  {
    title: "Flexible Circadian Scheduling",
    description: "Schedule sessions to match hotel occupancy and traveler arrival times, ranging from early sunrise flows to evening decompression sessions.",
  },
  {
    title: "Zero Equipment Capital Expense",
    description: "Avoid capital outlays on props—Onsite Yoga & Restore supplies, cleans, sanitizes, and maintains all commercial-grade mats, blocks, and straps.",
  },
];

export function WhyHotels() {
  return (
    <section id="why-hotels" className="bg-[#F8F5EF] py-20 md:py-28 border-t border-[#E8E1D7]">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="max-w-[780px] mb-12 md:mb-16">
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-light text-[#262626] leading-[1.12]">
              Why do hospitality properties partner with <br />
              <em className="italic font-normal text-[#5E7052]">Onsite Yoga &amp; Restore?</em>
            </h2>
          </div>
        </FadeIn>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 lg:gap-x-14">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 0.08}>
              <div className="space-y-4">
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


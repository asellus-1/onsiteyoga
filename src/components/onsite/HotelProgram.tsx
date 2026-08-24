"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { Sunrise, Sunset, Plane } from "lucide-react";

const programs = [
  {
    icon: Sunrise,
    title: "Morning Gentle Yoga",
    time: "60 Minutes · Early Morning / Sunrise",
    description:
      "A slow, warming sequence designed to activate circulation, relieve morning joint stiffness, and establish calm mental clarity for hotel guests starting their day.",
  },
  {
    icon: Plane,
    title: "Travel Recovery & Reset",
    time: "60 Minutes · Arrival Hours / Flexible",
    description:
      "Specifically engineered for guests recovering from long-haul flights or travel fatigue. Target areas include spine decompression, hip opening, and nervous system recalibration.",
  },
  {
    icon: Sunset,
    title: "Evening Restorative",
    time: "60 Minutes · Sunset / Pre-Dinner",
    description:
      "A deeply relaxing practice utilizing supportive bolsters and blocks. Extended passive postures trigger parasympathetic relaxation to improve guest sleep quality.",
  },
];

export function HotelProgram() {
  return (
    <section id="program-details" className="bg-[#FCFAF7] py-20 md:py-28 border-t border-[#E8E1D7]">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <FadeIn>
          <div className="max-w-[720px] mb-12 md:mb-16">
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-light text-[#262626] leading-[1.12]">
              What turnkey wellness programs <br />
              <em className="italic font-normal text-[#5E7052]">are available for hotel guests?</em>
            </h2>
            <p className="font-sans text-base text-[#6D6D6D] leading-relaxed mt-4">
              We deliver three specialized 60-minute restorative class formats structured around traveler flight schedules, circadian rhythms, and physical recovery.
            </p>
          </div>
        </FadeIn>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {programs.map((prog, index) => {
            const IconComponent = prog.icon;
            return (
              <FadeIn key={prog.title} delay={index * 0.1}>
                <div className="flex flex-col h-full bg-[#F8F5EF]/60 border border-[#E8E1D7] rounded-3xl p-8 md:p-10 hover:border-[#5E7052]/40 transition-colors duration-300">
                  <div className="mb-8 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FCFAF7] border border-[#E8E1D7] text-[#5E7052]">
                    <IconComponent size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-serif text-2xl font-light text-[#262626]">
                      {prog.title}
                    </h3>
                    <span className="block font-sans text-xs tracking-wider text-[#5E7052] font-medium">
                      {prog.time}
                    </span>
                    <p className="font-sans text-sm text-[#6D6D6D] leading-[1.8] pt-2">
                      {prog.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}


"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Sunrise, Sunset, Plane } from "lucide-react";

const programs = [
  {
    icon: Sunrise,
    title: "Morning Gentle Yoga",
    time: "60 Minutes · Morning",
    description:
      "A slow, warming sequence designed to gently wake the body, improve circulation, and establish a calm focus for the day ahead.",
  },
  {
    icon: Plane,
    title: "Travel Recovery & Reset",
    time: "60 Minutes · Flexible Schedule",
    description:
      "Specifically structured for travelers recovering from long flights and jet lag. Replaces back compression and grounds the nervous system.",
  },
  {
    icon: Sunset,
    title: "Evening Restorative",
    time: "60 Minutes · Sunset / Evening",
    description:
      "A deeply relaxing practice utilizing supportive props to trigger parasympathetic relaxation and improve guest sleep quality.",
  },
];

export function HotelProgram() {
  return (
    <section id="program-details" className="bg-[#FCFAF7] py-20 md:py-36 border-t border-[#E8E1D7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">

        {/* Section Header */}
        <SectionHeader
          eyebrow="The Hotel Program"
          title="A premium wellness amenity"
          italicTitle="for your guests."
          description="Incorporate restorative yoga directly into your hotel's guest experience with specialized class formats structured around traveler schedules."
        />

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {programs.map((prog, index) => {
            const IconComponent = prog.icon;
            return (
              <FadeIn key={prog.title} delay={index * 0.15}>
                <div className="group relative flex flex-col h-full bg-[#F8F5EF]/60 border border-[#E8E1D7] rounded-[28px] p-8 md:p-10 hover:border-[#5E7052]/40 transition-all duration-500">
                  <div className="mb-8 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FCFAF7] border border-[#E8E1D7] text-[#5E7052]">
                    <IconComponent size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="font-serif text-2xl font-light text-[#262626]">
                      {prog.title}
                    </h3>
                    <span className="block font-sans text-xs tracking-wider text-[#5E7052] font-medium">
                      {prog.time}
                    </span>
                    <p className="font-sans text-sm text-[#6D6D6D] leading-[1.8]">
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

"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Sparkles, Calendar, ClipboardCheck, Dumbbell, ShieldCheck } from "lucide-react";

const inclusions = [
  {
    icon: ShieldCheck,
    title: "Certified RYT Instructors",
    description: "Experienced, fully insured professional yoga guidance focused on safety and guest recovery.",
  },
  {
    icon: Dumbbell,
    title: "Commercial Props & Mats",
    description: "High-density non-slip yoga mats, supportive cork blocks, and cotton straps provided for all attendees.",
  },
  {
    icon: ClipboardCheck,
    title: "Setup & Breakdown",
    description: "Complete preparation of the practice space beforehand and clearing it post-session.",
  },
  {
    icon: Sparkles,
    title: "Medical-Grade Cleaning",
    description: "Strict post-session cleaning and sanitization of all mats and equipment.",
  },
  {
    icon: Calendar,
    title: "$2M Liability Coverage",
    description: "Full $2,000,000 commercial general liability insurance protecting your property.",
  },
];

export function WhatsIncluded() {
  return (
    <section id="services" className="bg-[#FCFAF7] py-20 md:py-36 border-t border-[#E8E1D7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">

        {/* Header */}
        <SectionHeader
          eyebrow="The Service"
          title="Everything provided."
          italicTitle="Effortlessly managed."
        />

        {/* List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {inclusions.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="space-y-4">
                  <div className="text-[#5E7052]">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg font-light text-[#262626] border-b border-[#E8E1D7]/60 pb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[13.5px] text-[#6D6D6D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}

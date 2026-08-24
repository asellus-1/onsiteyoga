"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { Sparkles, Calendar, ClipboardCheck, Dumbbell, ShieldCheck } from "lucide-react";

const inclusions = [
  {
    icon: ShieldCheck,
    title: "Certified RYT Instructors",
    description: "Experienced RYT-200/500 certified yoga instructors with Yoga Alliance registration and specialized travel recovery training.",
  },
  {
    icon: Dumbbell,
    title: "Commercial Props & Mats",
    description: "High-density non-slip yoga mats, supportive cork blocks, and woven cotton alignment straps supplied for all attendees.",
  },
  {
    icon: ClipboardCheck,
    title: "Setup & Breakdown",
    description: "Complete space layout preparation 30 minutes prior to session start and immediate clearing post-session.",
  },
  {
    icon: Sparkles,
    title: "Medical-Grade Sanitization",
    description: "Strict sanitization of all mats and props following eco-friendly hospitality cleanliness standards.",
  },
  {
    icon: Calendar,
    title: "$2M Liability Coverage",
    description: "Full $2,000,000 commercial general liability insurance protecting your property and guests during every session.",
  },
];

export function WhatsIncluded() {
  return (
    <section id="services" className="bg-[#FCFAF7] py-20 md:py-28 border-t border-[#E8E1D7]">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="max-w-[740px] mb-12 md:mb-16">
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-light text-[#262626] leading-[1.12]">
              What equipment, insurance, and management <br />
              <em className="italic font-normal text-[#5E7052]">services are included?</em>
            </h2>
          </div>
        </FadeIn>

        {/* List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {inclusions.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="space-y-4">
                  <div className="text-[#5E7052]">
                    <Icon size={22} strokeWidth={1.5} />
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


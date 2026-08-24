"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CalendarCheck, ShieldCheck, HeartHandshake } from "lucide-react";

const journeySteps = [
  {
    stage: "01. Guest Discovery",
    title: "Seamless Schedule Access",
    desc: "Guests view scheduled sessions via room key cards, concierge desks, or mobile QR displays without complex registration steps.",
    icon: CalendarCheck,
  },
  {
    stage: "02. Turnkey Setup",
    title: "Instructor Prep & Arrival",
    desc: "Our RYT certified teacher arrives 30 mins early with medical-grade sanitized mats, blocks, and straps, establishing the quiet space.",
    icon: ShieldCheck,
  },
  {
    stage: "03. Decompression",
    title: "60-Min Restorative Session",
    desc: "Guests experience tailored travel recovery or gentle circulation flows, leaving refreshed with heightened property satisfaction.",
    icon: HeartHandshake,
  },
];

export function GuestExperienceJourney() {
  return (
    <section id="guest-experience" className="bg-[#F8F5EF] py-20 md:py-28 border-t border-[#E8E1D7]">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Operational Delivery"
          title="The Turnkey Guest Journey"
          italicTitle="from Arrival to Decompression."
          description="Designed to fit seamlessly into guest schedules and hotel operations without requiring a single minute of staff intervention."
        />

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journeySteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.stage} delay={index * 0.1}>
                <div className="relative flex flex-col justify-between h-full bg-[#FCFAF7] border border-[#E8E1D7] rounded-3xl p-8 hover:border-[#5E7052]/40 transition-colors shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-sans text-xs uppercase tracking-widest font-semibold text-[#5E7052]">
                        {item.stage}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-[#F8F5EF] border border-[#E8E1D7] flex items-center justify-center text-[#5E7052]">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-[#262626] mb-3">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-[#6D6D6D] leading-relaxed">
                      {item.desc}
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

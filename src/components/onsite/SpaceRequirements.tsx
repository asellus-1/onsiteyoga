"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Sun, Building, Compass, Layers } from "lucide-react";

const spaces = [
  {
    icon: Sun,
    title: "Outdoor Lawns & Courtyards",
    specs: "Ideal for sunrise & morning flows",
    desc: "Open-air green spaces, pool decks, and garden courtyards.",
  },
  {
    icon: Building,
    title: "Boutique Lounges & Studios",
    specs: "Year-round indoor comfort",
    desc: "Unused amenity rooms, executive lounges, or dedicated studios.",
  },
  {
    icon: Compass,
    title: "Rooftop Terraces",
    specs: "Elevated sunset experiences",
    desc: "Panoramic property views paired with twilight decompression.",
  },
  {
    icon: Layers,
    title: "Multi-Purpose Function Rooms",
    specs: "Quick 30-min setup transform",
    desc: "Conference rooms and event spaces seamlessly converted.",
  },
];

export function SpaceRequirements() {
  return (
    <section id="space-versatility" className="bg-[#F8F5EF] py-20 md:py-28 border-t border-[#E8E1D7]">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Spatial Adaptability"
          title="Flexible Spatial Requirements"
          italicTitle="for Any Property Layout."
          description="We transform any quiet 25 sq ft per attendee into a premium restorative studio space—no permanent physical buildout required."
        />

        {/* Grid of Spaces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="flex flex-col justify-between h-full bg-[#FCFAF7] border border-[#E8E1D7] rounded-3xl p-6 hover:border-[#5E7052]/40 transition-all duration-300 shadow-xs">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-[#F8F5EF] border border-[#E8E1D7] flex items-center justify-center text-[#5E7052] mb-5">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-lg font-light text-[#262626] mb-1">
                      {item.title}
                    </h3>
                    <span className="block font-sans text-xs font-semibold text-[#5E7052] mb-3">
                      {item.specs}
                    </span>
                    <p className="font-sans text-xs text-[#6D6D6D] leading-relaxed">
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

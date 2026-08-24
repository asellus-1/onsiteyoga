"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeader } from "@/components/shared/SectionHeader";

const metrics = [
  {
    value: "0 Mins",
    label: "Property Staff Burden",
    detail: "100% managed by our certified instructor team",
  },
  {
    value: "100%",
    label: "Prop Logistics Included",
    detail: "Commercial mats delivered, sanitized, and stored",
  },
  {
    value: "$2,000,000",
    label: "General Liability Coverage",
    detail: "Full commercial insurance protection per session",
  },
  {
    value: "5–7 Days",
    label: "Onboarding Launch Time",
    detail: "Rapid property setup for immediate availability",
  },
];

export function PropertyMetrics() {
  return (
    <section className="bg-[#262626] text-[#FCFAF7] py-20 md:py-28 border-t border-[#E8E1D7]">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Operational Performance"
          title="Built for Luxury Hospitality Standards."
          align="center"
          theme="dark"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {metrics.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.08}>
              <div className="pt-6 sm:pt-0 sm:px-6 text-center space-y-2">
                <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#FCFAF7]">
                  {item.value}
                </span>
                <p className="font-sans text-sm font-medium text-[#A3A3A3]">
                  {item.label}
                </p>
                <p className="font-sans text-xs text-[#737373]">
                  {item.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}

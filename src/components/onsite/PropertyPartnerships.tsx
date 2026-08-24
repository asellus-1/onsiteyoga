"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { Building2, Briefcase } from "lucide-react";

export function PropertyPartnerships() {
  return (
    <section id="partnerships" className="bg-[#F8F5EF] py-20 md:py-28 border-t border-[#E8E1D7]">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="max-w-[780px] mb-12 md:mb-16">
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-light text-[#262626] leading-[1.12]">
              How do residential communities &amp; workplaces <br />
              <em className="italic font-normal text-[#5E7052]">benefit from onsite yoga?</em>
            </h2>
            <p className="font-sans text-base text-[#6D6D6D] leading-relaxed mt-4">
              Onsite Yoga &amp; Restore delivers customized wellness programming to luxury apartment residences, multi-family developments, and corporate office spaces.
            </p>
          </div>
        </FadeIn>

        {/* Partnerships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">

          {/* Card 1: Apartments */}
          <FadeIn>
            <div className="flex flex-col h-full bg-[#FCFAF7] border border-[#E8E1D7] rounded-3xl p-8 md:p-12 hover:border-[#5E7052]/40 transition-colors duration-300">
              <div className="mb-8 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#F8F5EF] border border-[#E8E1D7] text-[#5E7052]">
                <Building2 size={20} strokeWidth={1.5} />
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-light text-[#262626]">
                  Residential Communities
                </h3>
                <span className="block font-sans text-xs tracking-wider text-[#5E7052] font-medium">
                  For Apartment Buildings &amp; Condominiums
                </span>
                <p className="font-sans text-sm text-[#6D6D6D] leading-[1.8] pt-2">
                  Enhance your community&apos;s resident amenity package. We deliver scheduled group sessions tailored to all resident experience levels right in your building&apos;s amenity lounge or studio space.
                </p>
                <ul className="space-y-2 pt-4 font-sans text-xs text-[#6D6D6D]" role="list">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5E7052]" />
                    Weekly, bi-weekly, or seasonal schedule options
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5E7052]" />
                    Multiple class styles (Gentle Vinyasa, Restorative, Mobility)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5E7052]" />
                    Accessible programming for all resident experience levels
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Workplaces */}
          <FadeIn delay={0.15}>
            <div className="flex flex-col h-full bg-[#FCFAF7] border border-[#E8E1D7] rounded-3xl p-8 md:p-12 hover:border-[#5E7052]/40 transition-colors duration-300">
              <div className="mb-8 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#F8F5EF] border border-[#E8E1D7] text-[#5E7052]">
                <Briefcase size={20} strokeWidth={1.5} />
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-light text-[#262626]">
                  Workplace Corporate Wellness
                </h3>
                <span className="block font-sans text-xs tracking-wider text-[#5E7052] font-medium">
                  For Teams &amp; Commercial Office Buildings
                </span>
                <p className="font-sans text-sm text-[#6D6D6D] leading-[1.8] pt-2">
                  Support employee posture, mental focus, and stress reduction. We conduct low-impact sessions designed for conference spaces and office wellness rooms to alleviate desk-bound spinal tension.
                </p>
                <ul className="space-y-2 pt-4 font-sans text-xs text-[#6D6D6D]" role="list">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5E7052]" />
                    Mid-day wellness breaks or post-work unwind sessions
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5E7052]" />
                    Ergonomic neck, back, and shoulder stress relief
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5E7052]" />
                    Boosts team morale, retention, and corporate wellness perks
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}


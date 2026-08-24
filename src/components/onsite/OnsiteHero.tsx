"use client";

import { FadeIn } from "@/components/shared/FadeIn";

export function OnsiteHero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center bg-[#FCFAF7] pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="relative z-10 max-w-[840px] mx-auto px-6 text-center">
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] font-light text-[#262626] leading-[1.08] tracking-tight mb-8">
            Onsite Restorative Yoga &amp; Travel Recovery <br className="hidden sm:block" />
            <em className="italic font-normal text-[#5E7052]">for Luxury Hotels &amp; Properties.</em>
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="font-sans text-base md:text-lg text-[#6D6D6D] leading-relaxed max-w-[620px] mx-auto mb-10 font-normal">
            Onsite Yoga &amp; Restore provides fully managed turnkey wellness programming—including Yoga Alliance certified instructors, premium equipment setups, and sanitization—for hotels, luxury residences, and corporate workplaces.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#property-inquiry"
              className="inline-flex items-center justify-center h-[46px] px-8 rounded-full font-sans text-xs tracking-wider uppercase font-semibold bg-[#262626] text-[#FCFAF7] hover:bg-[#5E7052] active:scale-[0.97] transition-all duration-200"
            >
              Partner With Us
            </a>

            <a
              href="#program-details"
              className="inline-flex items-center justify-center h-[46px] px-8 rounded-full font-sans text-xs tracking-wider uppercase font-semibold border border-[#E8E1D7] text-[#262626] hover:bg-[#F8F5EF] active:scale-[0.97] transition-all duration-200"
            >
              Explore Programs
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}


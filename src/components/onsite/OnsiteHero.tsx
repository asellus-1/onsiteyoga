"use client";

import { FadeIn } from "@/components/shared/FadeIn";

export function OnsiteHero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center bg-[#FCFAF7] overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      {/* Subtle vertical center divider line (Yogi Manu style) */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#E8E1D7]/70 -translate-x-1/2 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <FadeIn delay={0.1}>
          <span className="block font-sans text-[10px] tracking-[0.25em] uppercase text-[#5E7052] mb-4 font-semibold">
            Onsite Yoga &amp; Restore
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light text-[#262626] leading-[1.12] tracking-tight mb-8">
            Bring restorative wellness <br />
            directly to your <em className="italic font-normal text-[#5E7052]">property</em>.
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="font-sans text-base md:text-lg text-[#6D6D6D] leading-relaxed max-w-[580px] mx-auto mb-10 font-normal">
            Professional yoga instruction, commercial equipment setup, and tailored restorative programs for luxury hotels, residential communities, and workplaces.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#property-inquiry"
              className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full font-sans text-xs tracking-wider uppercase font-semibold bg-[#262626] text-[#FCFAF7] hover:bg-[#5E7052] active:scale-[0.98] transition-all duration-300"
            >
              Partner With Us
            </a>

            <a
              href="#program-details"
              className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full font-sans text-xs tracking-wider uppercase font-semibold border border-[#E8E1D7] text-[#262626] hover:bg-[#F8F5EF] active:scale-[0.98] transition-all duration-300"
            >
              Explore Program
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

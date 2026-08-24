"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Image from "next/image";

export function OnsiteConcept() {
  return (
    <section id="concept" className="bg-[#F8F5EF] py-20 md:py-36 border-t border-[#E8E1D7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              eyebrow="The Concept"
              title="Turnkey property wellness,"
              italicTitle="seamlessly managed."
            />

            <FadeIn delay={0.1}>
              <div className="space-y-5 font-sans text-base text-[#6D6D6D] leading-relaxed">
                <p>
                  Onsite Yoga &amp; Restore is a turnkey wellness service that brings certified yoga instructors, high-density non-slip mats, and restorative props directly to hotels, luxury apartment communities, and corporate offices.
                </p>
                <p>
                  We eliminate hotel staff overhead by handling 100% of room setup, participant check-in, instructor scheduling, post-session prop cleaning, and equipment maintenance.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.15}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden max-w-[500px] mx-auto lg:mx-0 border border-[#E8E1D7] shadow-xs">
                <Image
                  src="/yoga2.jpeg"
                  alt="Certified restorative onsite yoga class hosted at a luxury property"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

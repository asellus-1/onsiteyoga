"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import Image from "next/image";

export function OnsiteConcept() {
  return (
    <section id="concept" className="bg-[#F8F5EF] py-20 md:py-28 border-t border-[#E8E1D7]">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn>
              <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-light text-[#262626] leading-[1.12] tracking-tight">
                What is Onsite Yoga &amp; Restore? <br />
                <em className="italic font-normal text-[#5E7052]">Fully managed property wellness.</em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-4">
                <p className="font-sans text-base text-[#6D6D6D] leading-[1.8]">
                  Onsite Yoga &amp; Restore is a turnkey wellness service that brings certified yoga instructors, high-density non-slip mats, and restorative props directly to hotels, luxury apartment communities, and corporate offices.
                </p>
                <p className="font-sans text-base text-[#6D6D6D] leading-[1.8]">
                  We eliminate hotel staff overhead by handling 100% of room setup, participant check-in, instructor scheduling, post-session prop cleaning, and equipment maintenance.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.15}>
              <div className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] rounded-3xl overflow-hidden max-w-[500px] mx-auto lg:mx-0 border border-[#E8E1D7] shadow-xs">
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


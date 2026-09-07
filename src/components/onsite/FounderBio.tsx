"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Image from "next/image";
import { ExternalLink, Music } from "lucide-react";

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function FounderBio() {
  return (
    <section id="about-founder" className="bg-[#F8F5EF] py-20 md:py-36 border-t border-[#E8E1D7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <SectionHeader
          eyebrow="About the Founder"
          title="Why I started Onsite Yoga & Restore,"
          italicTitle="born from real travel."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text / Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn delay={0.1}>
              <div className="space-y-5 font-sans text-base text-[#5A5A5A] leading-relaxed">
                <p className="text-lg text-[#262626] font-normal leading-relaxed">
                  Hi, I’m Mark Vajen — known as Yogi Manu in the yoga community. I didn’t need an international flight to feel wiped out on vacation — recent trips to North Carolina and Florida left me foggy and drained, right when I should have been present with my wife and two kids. They deserve a version of me that isn’t running on empty.
                </p>
                <p>
                  I knew yoga helped, but there was a problem: trying to practice quietly in a hotel room while everyone else was still asleep never really worked. It’s hard to actually settle into a practice when you’re half-focused on not waking your family up. What actually made a difference was having a real space to go to, led by an instructor — not trying to squeeze in a quiet stretch alone in the dark.
                </p>
                <p>
                  That’s the real reason I started Onsite Yoga &amp; Restore, right here in Ohio. You shouldn’t have to choose between recovering from travel and not disturbing the people you’re traveling with. My goal is to bring a real, guided recovery space directly to travelers and business guests during their stay — so everyone gets a better version of their trip, family included.
                </p>
                <p className="text-[#262626] font-medium">
                  If you’re a guest hoping to actually feel good during your stay — or a hotel looking to offer something genuinely different — I’d love to have you join a class.
                </p>
              </div>

              {/* Signature & Channels */}
              <div className="pt-6 border-t border-[#E8E1D7] mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h4 className="font-serif text-xl font-light text-[#262626]">
                    Mark Vajen <span className="font-sans text-sm text-[#5E7052] font-normal">(Yogi Manu)</span>
                  </h4>
                  <p className="font-sans text-xs text-[#737373] tracking-wider uppercase mt-1">
                    Founder, Onsite Yoga &amp; Restore • A Yogi Manu LLC Company
                  </p>
                </div>

                {/* External Social / Music Links */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.youtube.com/@YogiManuAwakens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FCFAF7] border border-[#E8E1D7] hover:border-[#5E7052] text-xs font-sans text-[#262626] hover:text-[#5E7052] transition-colors"
                  >
                    <YoutubeIcon className="w-4 h-4 text-red-600" />
                    <span>Yogi Manu Awakens</span>
                    <ExternalLink size={12} className="opacity-50" />
                  </a>
                  <a
                    href="https://www.youtube.com/@YogiManuMusic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FCFAF7] border border-[#E8E1D7] hover:border-[#5E7052] text-xs font-sans text-[#262626] hover:text-[#5E7052] transition-colors"
                  >
                    <Music size={14} className="text-[#5E7052]" />
                    <span>Yogi Manu Music</span>
                    <ExternalLink size={12} className="opacity-50" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Image Column - Goddess Pose */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.15}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden max-w-[440px] mx-auto lg:mx-0 border border-[#E8E1D7] shadow-xs group">
                <Image
                  src="/yoga2.jpeg"
                  alt="Mark Vajen (Yogi Manu) practicing goddess pose outdoors"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-sans tracking-wide">
                  <span className="font-semibold block">Mark Vajen (Yogi Manu)</span>
                  <span className="opacity-80 text-[11px]">Restorative alignment &amp; mindfulness practice</span>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}

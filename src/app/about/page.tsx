import type { Metadata } from "next";
import { FadeIn } from "@/components/shared/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Users, HeartHandshake } from "lucide-react";
import { safeJsonLd } from "@/lib/jsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://onsiteyoga.com";

export const metadata: Metadata = {
  title: "About Us & Instructor Standards | Onsite Yoga & Restore",
  description:
    "Learn about Onsite Yoga & Restore's mission, Yoga Alliance certified RYT-200/500 instructor standards, $2M liability insurance, and turnkey hospitality wellness management.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: `${siteUrl}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen pt-32 pb-24 md:pt-40 md:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={safeJsonLd(breadcrumbSchema)}
      />
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <FadeIn>
          <div className="max-w-[800px]">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#5E7052] font-semibold block mb-3">
              About Onsite Yoga &amp; Restore
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#262626] leading-[1.15]">
              Elevating Property Wellness <br />
              <em className="italic font-normal text-[#5E7052]">Through Turnkey Instruction.</em>
            </h1>
            <p className="font-sans text-lg text-[#6D6D6D] leading-relaxed mt-6">
              Onsite Yoga &amp; Restore was founded to solve a major gap in modern hospitality: guests want authentic restorative wellness, but property management teams lack the bandwidth to recruit instructors, maintain equipment, and manage scheduling logistics.
            </p>
          </div>
        </FadeIn>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <FadeIn>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#262626]">
                Rigorous Instructor &amp; Safety Standards
              </h2>
              <p className="font-sans text-base text-[#6D6D6D] leading-relaxed">
                Every teacher on our platform is minimum <strong>RYT-200 or RYT-500 certified</strong> through Yoga Alliance with specialized training in restorative postures, travel recovery, and trauma-informed breathwork.
              </p>
              <p className="font-sans text-base text-[#6D6D6D] leading-relaxed">
                We maintain active <strong>$2,000,000 commercial general liability insurance</strong> per session, conduct complete background checks, and uphold strict eco-friendly mat sanitization after every class.
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-6">
            <FadeIn delay={0.15}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E8E1D7] shadow-xs">
                <Image
                  src="/yoga.jpeg"
                  alt="Certified RYT yoga instructor leading restorative session"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Pillars of Excellence */}
        <div className="space-y-10">
          <FadeIn>
            <h2 className="font-serif text-3xl font-light text-[#262626] text-center">
              Our Core Operational Pillars
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-8 bg-[#F8F5EF] rounded-3xl border border-[#E8E1D7] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FCFAF7] border border-[#E8E1D7] flex items-center justify-center text-[#5E7052]">
                  <Award size={22} />
                </div>
                <h3 className="font-serif text-xl font-light text-[#262626]">Yoga Alliance RYT</h3>
                <p className="font-sans text-sm text-[#6D6D6D] leading-relaxed">
                  Only highly experienced RYT-200 and RYT-500 teachers guide our guest sessions.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="p-8 bg-[#F8F5EF] rounded-3xl border border-[#E8E1D7] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FCFAF7] border border-[#E8E1D7] flex items-center justify-center text-[#5E7052]">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="font-serif text-xl font-light text-[#262626]">$2M Insurance Policy</h3>
                <p className="font-sans text-sm text-[#6D6D6D] leading-relaxed">
                  Full commercial general liability protection covering all sessions and property spaces.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-8 bg-[#F8F5EF] rounded-3xl border border-[#E8E1D7] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FCFAF7] border border-[#E8E1D7] flex items-center justify-center text-[#5E7052]">
                  <Users size={22} />
                </div>
                <h3 className="font-serif text-xl font-light text-[#262626]">Zero Staff Burden</h3>
                <p className="font-sans text-sm text-[#6D6D6D] leading-relaxed">
                  100% turnkey logistics management, equipment delivery, space setup, and teardown.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="p-8 bg-[#F8F5EF] rounded-3xl border border-[#E8E1D7] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FCFAF7] border border-[#E8E1D7] flex items-center justify-center text-[#5E7052]">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="font-serif text-xl font-light text-[#262626]">Hospitality Focus</h3>
                <p className="font-sans text-sm text-[#6D6D6D] leading-relaxed">
                  Tailored class scheduling aligned with traveler circadian rhythms and flight arrivals.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="bg-[#262626] text-[#FCFAF7] rounded-3xl p-10 md:p-14 text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Ready to introduce onsite wellness to your property?
            </h2>
            <p className="font-sans text-base text-[#A3A3A3] max-w-[560px] mx-auto">
              Schedule a consultation with our program managers to discuss schedule customization and property proposals.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[46px] px-8 rounded-full font-sans text-xs tracking-wider uppercase font-semibold bg-[#FCFAF7] text-[#262626] hover:bg-[#5E7052] hover:text-[#FCFAF7] transition-all duration-200"
              >
                Request Proposal
              </Link>
            </div>
          </div>
        </FadeIn>

      </div>
    </main>
  );
}

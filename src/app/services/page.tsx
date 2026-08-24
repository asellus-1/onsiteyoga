import type { Metadata } from "next";
import { FadeIn } from "@/components/shared/FadeIn";
import { HotelProgram } from "@/components/onsite/HotelProgram";
import { WhatsIncluded } from "@/components/onsite/WhatsIncluded";
import { PropertyPartnerships } from "@/components/onsite/PropertyPartnerships";
import { ComparisonTable } from "@/components/onsite/ComparisonTable";
import Link from "next/link";
import { safeJsonLd } from "@/lib/jsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://onsiteyoga.com";

export const metadata: Metadata = {
  title: "Onsite Wellness Programs & Services | Hotel, Residential & Workplace Yoga",
  description:
    "Explore our complete range of turnkey restorative yoga programs, travel recovery reset sessions, residential amenities, workplace wellness, and commercial equipment management.",
  alternates: {
    canonical: `${siteUrl}/services`,
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
      name: "Services & Programs",
      item: `${siteUrl}/services`,
    },
  ],
};

export default function ServicesPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen pt-32 pb-24 md:pt-40 md:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={safeJsonLd(breadcrumbSchema)}
      />
      
      {/* Services Hero Header */}
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8 mb-16">
        <FadeIn>
          <div className="max-w-[800px]">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#5E7052] font-semibold block mb-3">
              Services &amp; Solutions
            </span>
            <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-light text-[#262626] leading-[1.1]">
              Fully managed yoga &amp; restorative programs <br />
              <em className="italic font-normal text-[#5E7052]">tailored to your property ecosystem.</em>
            </h1>
            <p className="font-sans text-lg text-[#6D6D6D] leading-relaxed mt-6">
              Whether you manage a boutique luxury hotel, a residential apartment tower, or a corporate headquarters, Onsite Yoga &amp; Restore delivers customized certified instruction, equipment setups, and sanitization protocols.
            </p>
          </div>
        </FadeIn>
      </div>

      <HotelProgram />
      <WhatsIncluded />
      <PropertyPartnerships />
      <ComparisonTable />

      {/* Action Banner */}
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8 mt-20">
        <FadeIn>
          <div className="bg-[#F8F5EF] border border-[#E8E1D7] rounded-3xl p-10 md:p-14 text-center space-y-6">
            <h2 className="font-serif text-3xl font-light text-[#262626]">
              Need a custom schedule or multi-property partnership?
            </h2>
            <p className="font-sans text-base text-[#6D6D6D] max-w-[560px] mx-auto">
              Our program management team can structure multi-location scheduling, custom class frequencies, and branded amenity packages.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[46px] px-8 rounded-full font-sans text-xs tracking-wider uppercase font-semibold bg-[#262626] text-[#FCFAF7] hover:bg-[#5E7052] transition-all duration-200"
              >
                Inquire For Custom Proposal
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}

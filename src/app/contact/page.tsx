import type { Metadata } from "next";
import { FadeIn } from "@/components/shared/FadeIn";
import { OnsiteContact } from "@/components/onsite/OnsiteContact";
import { safeJsonLd } from "@/lib/jsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://onsiteyoga.com";

export const metadata: Metadata = {
  title: "Request a Property Proposal & Contact Us | Onsite Yoga & Restore",
  description:
    "Get in touch with Onsite Yoga & Restore to discuss turnkey wellness options, custom class schedules, equipment delivery, and property proposals for hotels and luxury residences.",
  alternates: {
    canonical: `${siteUrl}/contact`,
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
      name: "Contact Us",
      item: `${siteUrl}/contact`,
    },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Onsite Yoga & Restore",
  url: `${siteUrl}/contact`,
  description: "Request a custom property proposal for hotel, residential, or workplace onsite yoga programs.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen pt-32 pb-24 md:pt-40 md:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={safeJsonLd(breadcrumbSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={safeJsonLd(contactPageSchema)}
      />
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8 mb-12 text-center">
        <FadeIn>
          <div className="max-w-[760px] mx-auto">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#5E7052] font-semibold block mb-3">
              Partner With Us
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#262626] leading-[1.15]">
              Request a Custom Proposal <br />
              <em className="italic font-normal text-[#5E7052]">for Your Property.</em>
            </h1>
          </div>
        </FadeIn>
      </div>

      <OnsiteContact />
    </main>
  );
}

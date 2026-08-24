import type { Metadata } from "next";
import { FadeIn } from "@/components/shared/FadeIn";
import { OnsiteFAQ } from "@/components/onsite/OnsiteFAQ";
import Link from "next/link";
import { safeJsonLd } from "@/lib/jsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://onsiteyoga.com";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Onsite Yoga & Restore",
  description:
    "Get clear, direct answers about property space requirements, RYT instructor credentials, $2M liability insurance, prop sanitization, and launch timelines.",
  alternates: {
    canonical: `${siteUrl}/faq`,
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
      name: "Frequently Asked Questions",
      item: `${siteUrl}/faq`,
    },
  ],
};

export default function FAQPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen pt-32 pb-24 md:pt-40 md:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={safeJsonLd(breadcrumbSchema)}
      />
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8 mb-12">
        <FadeIn>
          <div className="max-w-[800px]">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#5E7052] font-semibold block mb-3">
              FAQ &amp; Knowledge Base
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#262626] leading-[1.15]">
              Clear Answers &amp; Insights <br />
              <em className="italic font-normal text-[#5E7052]">for Property Managers.</em>
            </h1>
          </div>
        </FadeIn>
      </div>

      <OnsiteFAQ />

      <div className="max-w-[1140px] mx-auto px-6 lg:px-8 mt-16 text-center">
        <FadeIn>
          <div className="p-10 bg-[#F8F5EF] border border-[#E8E1D7] rounded-3xl space-y-4">
            <h2 className="font-serif text-2xl font-light text-[#262626]">
              Have additional questions not listed here?
            </h2>
            <p className="font-sans text-sm text-[#6D6D6D]">
              Our team is ready to answer specific questions about space setups, insurance certificates, or custom scheduling.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[42px] px-6 rounded-full font-sans text-xs tracking-wider uppercase font-semibold bg-[#262626] text-[#FCFAF7] hover:bg-[#5E7052] transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}

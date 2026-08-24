import type { Metadata } from "next";
import { FadeIn } from "@/components/shared/FadeIn";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://onsiteyoga.com";

export const metadata: Metadata = {
  title: "Terms of Service | Onsite Yoga & Restore",
  description: "Terms of service and service agreements for Onsite Yoga & Restore property partners and website visitors.",
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
};

export default function TermsPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8 space-y-8 text-[#262626]">
        <FadeIn>
          <h1 className="font-serif text-4xl font-light mb-4">Terms of Service</h1>
          <p className="font-sans text-xs text-[#6D6D6D] uppercase tracking-wider mb-8">
            Last Updated: January 2026
          </p>

          <div className="space-y-6 font-sans text-sm text-[#6D6D6D] leading-[1.8]">
            <h2 className="font-serif text-2xl text-[#262626]">1. Acceptance of Terms</h2>
            <p>
              By accessing our website or engaging Onsite Yoga &amp; Restore for property wellness programming, you agree to comply with these Terms of Service.
            </p>

            <h2 className="font-serif text-2xl text-[#262626]">2. Turnkey Services Overview</h2>
            <p>
              Onsite Yoga &amp; Restore provides certified restorative yoga instruction, prop delivery, sanitization, and instructor management under formal master service agreements executed with property partners.
            </p>

            <h2 className="font-serif text-2xl text-[#262626]">3. Insurance &amp; Liability</h2>
            <p>
              All sessions are covered under our $2,000,000 commercial general liability policy. Property partners agree to provide safe, accessible space for class execution.
            </p>

            <h2 className="font-serif text-2xl text-[#262626]">4. Intellectual Property</h2>
            <p>
              All content, branding, logos, and materials on this site are owned by Onsite Yoga &amp; Restore. Unattributed copying is prohibited.
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}

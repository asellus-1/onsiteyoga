import type { Metadata } from "next";
import { FadeIn } from "@/components/shared/FadeIn";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://onsiteyoga.com";

export const metadata: Metadata = {
  title: "Privacy Policy | Onsite Yoga & Restore",
  description: "Privacy Policy and data protection terms for Onsite Yoga & Restore website users and property partners.",
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8 space-y-8 text-[#262626]">
        <FadeIn>
          <h1 className="font-serif text-4xl font-light mb-4">Privacy Policy</h1>
          <p className="font-sans text-xs text-[#6D6D6D] uppercase tracking-wider mb-8">
            Last Updated: January 2026
          </p>

          <div className="space-y-6 font-sans text-sm text-[#6D6D6D] leading-[1.8]">
            <h2 className="font-serif text-2xl text-[#262626]">1. Overview</h2>
            <p>
              Onsite Yoga &amp; Restore (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or submit property inquiries.
            </p>

            <h2 className="font-serif text-2xl text-[#262626]">2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide when submitting inquiry forms, including your name, email address, property name, property type, and message details.
            </p>

            <h2 className="font-serif text-2xl text-[#262626]">3. How We Use Information</h2>
            <p>
              We use collected information strictly to respond to property inquiries, schedule consultations, provide custom proposals, and improve our turnkey wellness services. We do not sell or rent personal information to third parties.
            </p>

            <h2 className="font-serif text-2xl text-[#262626]">4. Data Security</h2>
            <p>
              We implement appropriate technical and administrative safeguards to protect personal data against unauthorized access, disclosure, or alteration.
            </p>

            <h2 className="font-serif text-2xl text-[#262626]">5. Contact Us</h2>
            <p>
              If you have questions regarding this Privacy Policy, please contact us via our website inquiry form.
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}

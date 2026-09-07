import type { Metadata } from "next";
import { FadeIn } from "@/components/shared/FadeIn";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://onsiteyoga.com";

export const metadata: Metadata = {
  title: "Privacy Policy | Onsite Yoga & Restore",
  description:
    "Privacy Policy for Yogi Manu LLC d/b/a Onsite Yoga & Restore. Learn how we collect, use, and protect your information when you use our website or book a class.",
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-[840px] mx-auto px-6 lg:px-8 space-y-10 text-[#262626]">
        <FadeIn>
          <div className="border-b border-[#E8E1D7] pb-8 mb-8">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#5E7052] font-semibold block mb-2">
              Legal &amp; Compliance
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#262626] mb-3">
              Privacy Policy
            </h1>
            <p className="font-sans text-xs text-[#737373] tracking-wide">
              Effective Date: 2026 • Yogi Manu LLC d/b/a Onsite Yoga &amp; Restore
            </p>
          </div>

          <div className="space-y-8 font-sans text-[15px] text-[#5A5A5A] leading-relaxed">
            <p className="text-base text-[#262626]">
              This Privacy Policy describes how Yogi Manu LLC, doing business as Onsite Yoga &amp; Restore (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), collects, uses, and protects your information when you use our website or book a class.
            </p>

            {/* 1. Information We Collect */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-light text-[#262626]">
                1. Information We Collect
              </h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong className="text-[#262626]">Contact information:</strong> name, email address, phone number
                </li>
                <li>
                  <strong className="text-[#262626]">Booking details:</strong> hotel property, room number, class type, date and time
                </li>
                <li>
                  <strong className="text-[#262626]">Waiver and consent information:</strong> including parental/guardian consent for minors where applicable
                </li>
                <li>
                  <strong className="text-[#262626]">Payment information:</strong> for paid private sessions, processed through our third-party booking platform (currently Jotform) and its integrated payment processor — Company does not directly store full payment card details
                </li>
              </ul>
            </div>

            {/* 2. How We Collect Information */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-light text-[#262626]">
                2. How We Collect Information
              </h2>
              <p>
                Information is collected directly from you when you complete our booking and waiver form (currently hosted through Jotform), and may also be collected through standard website analytics or cookies if used on our site.
              </p>
            </div>

            {/* 3. How We Use Your Information */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-light text-[#262626]">
                3. How We Use Your Information
              </h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>To process class bookings and confirm your liability waiver</li>
                <li>To communicate with you about your class, scheduling changes, or account questions</li>
                <li>To maintain waiver records so returning guests are not required to re-sign at a later date or a different participating hotel</li>
                <li>For marketing purposes, only where you have separately consented (e.g., class recordings, testimonials)</li>
              </ul>
            </div>

            {/* 4. Third-Party Service Providers */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-light text-[#262626]">
                4. Third-Party Service Providers
              </h2>
              <p>
                We use third-party services to operate our booking and payment systems, currently including Jotform and its integrated payment processors. These providers have access to information as necessary to perform their services and are subject to their own privacy policies. We do not sell your personal information to third parties.
              </p>
            </div>

            {/* 5. Children's Privacy */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-light text-[#262626]">
                5. Children&apos;s Privacy
              </h2>
              <p>
                Our services may be used by minors only with parental or guardian consent as described in our Terms of Service. We do not knowingly collect personal information from children beyond what is provided by a parent or guardian as part of the waiver and booking process.
              </p>
            </div>

            {/* 6. Data Retention & Security */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-light text-[#262626]">
                6. Data Retention &amp; Security
              </h2>
              <p>
                We retain waiver and booking records for as long as necessary to operate our services, including allowing returning guests to skip re-signing a waiver, and take reasonable measures to protect your information. No method of electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* 7. Your Rights */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-light text-[#262626]">
                7. Your Rights
              </h2>
              <p>
                You may request to review, correct, or delete your personal information on file by contacting us using the contact information below.
              </p>
            </div>

            {/* 8. Cookies & Website Analytics */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-light text-[#262626]">
                8. Cookies &amp; Website Analytics
              </h2>
              <p>
                Our website may use cookies or similar technologies to understand site usage and improve visitor navigation and performance.
              </p>
            </div>

            {/* 9. Changes to This Policy */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-light text-[#262626]">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Continued use of our services after changes are posted constitutes acceptance of the updated Policy.
              </p>
            </div>

            {/* 10. Contact Us */}
            <div className="space-y-3 pt-4 border-t border-[#E8E1D7]">
              <h2 className="font-serif text-2xl font-light text-[#262626]">
                10. Contact Us
              </h2>
              <p>
                Questions about this Privacy Policy or your personal information can be directed to Yogi Manu LLC d/b/a Onsite Yoga &amp; Restore via our{" "}
                <Link href="/contact" className="text-[#5E7052] underline hover:text-[#262626] transition-colors font-medium">
                  Contact &amp; Inquiry page
                </Link>
                .
              </p>
            </div>

          </div>
        </FadeIn>
      </div>
    </main>
  );
}

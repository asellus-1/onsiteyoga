import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { faqItems } from "@/lib/faqData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://onsiteyoga.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Onsite Yoga & Restore | Turnkey Wellness Programs for Hotels & Properties",
  description:
    "Turnkey restorative yoga instruction, travel recovery reset sessions, and premium equipment setups delivered directly to hotels, residential luxury communities, and corporate workplaces.",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "onsite yoga for hotels",
    "hotel wellness amenities",
    "travel recovery yoga",
    "restorative yoga program",
    "residential property wellness",
    "corporate workplace yoga",
    "turnkey hotel yoga instruction",
  ],
  openGraph: {
    title: "Onsite Yoga & Restore | Turnkey Wellness Programs for Hotels & Properties",
    description:
      "Turnkey restorative yoga instruction, travel recovery reset sessions, and premium equipment setups delivered directly to hotels, residential luxury communities, and corporate workplaces.",
    url: siteUrl,
    siteName: "Onsite Yoga & Restore",
    type: "website",
    images: [
      {
        url: "/images/onsite sharing.png",
        width: 1200,
        height: 630,
        alt: "Onsite Yoga & Restore Turnkey Hotel & Property Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onsite Yoga & Restore | Turnkey Wellness Programs for Hotels & Properties",
    description:
      "Turnkey restorative yoga instruction, travel recovery reset sessions, and premium equipment setups delivered directly to hotels, residential luxury communities, and corporate workplaces.",
    images: ["/images/onsite sharing.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Onsite Yoga & Restore",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Fully managed turnkey wellness programming, equipment setup, and certified restorative yoga instruction for hospitality properties, residential communities, and workplaces.",
  knowsAbout: [
    "Restorative Yoga",
    "Travel Recovery & Reset",
    "Hotel Amenity Management",
    "Residential Wellness Programs",
    "Corporate Workplace Wellness",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Onsite Wellness & Restorative Yoga Programming",
  provider: {
    "@type": "Organization",
    name: "Onsite Yoga & Restore",
    url: siteUrl,
  },
  areaServed: "United States",
  description:
    "Fully managed onsite yoga instruction, travel recovery reset classes, equipment delivery, sanitization, and instructor management for hotels, apartments, and corporate offices.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FCFAF7] text-[#262626]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


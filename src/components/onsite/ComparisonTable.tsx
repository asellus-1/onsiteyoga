"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Check, X, Minus } from "lucide-react";

export function ComparisonTable() {
  const features = [
    {
      feature: "Certified RYT Instructors",
      onsite: "Yoga Alliance Certified (200/500 HR)",
      inHouse: "Varies / Non-specialized staff",
      apps: "Virtual video audio only",
      onsiteCheck: true,
      inHouseCheck: "partial",
      appsCheck: false,
    },
    {
      feature: "Commercial Equipment & Props",
      onsite: "High-density mats, blocks & straps included",
      inHouse: "Property must purchase & store",
      apps: "Guest must bring own equipment",
      onsiteCheck: true,
      inHouseCheck: false,
      appsCheck: false,
    },
    {
      feature: "Prop Cleaning & Medical Sanitization",
      onsite: "Fully managed post-session sanitization",
      inHouse: "Added load on housekeeping staff",
      apps: "None provided",
      onsiteCheck: true,
      inHouseCheck: false,
      appsCheck: false,
    },
    {
      feature: "Commercial Liability Insurance",
      onsite: "$2,000,000 policy included",
      inHouse: "Property assumes full liability",
      apps: "User self-assumption of risk",
      onsiteCheck: true,
      inHouseCheck: false,
      appsCheck: false,
    },
    {
      feature: "Hotel Staff Overhead",
      onsite: "Zero staff effort (Turnkey service)",
      inHouse: "High recruitment & management load",
      apps: "Zero staff effort",
      onsiteCheck: true,
      inHouseCheck: false,
      appsCheck: true,
    },
    {
      feature: "Travel Recovery & Circadian Focus",
      onsite: "Tailored 60-min arrival & flight reset sequences",
      inHouse: "Generic fitness instruction",
      apps: "Generic pre-recorded videos",
      onsiteCheck: true,
      inHouseCheck: false,
      appsCheck: false,
    },
    {
      feature: "Guest Review & Satisfaction Impact",
      onsite: "High (Delightful luxury amenity)",
      inHouse: "Moderate",
      apps: "Low engagement",
      onsiteCheck: true,
      inHouseCheck: "partial",
      appsCheck: false,
    },
  ];

  return (
    <section id="comparison" className="bg-[#F8F5EF] py-20 md:py-36 border-t border-[#E8E1D7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Market Comparison"
          title="Comparing property"
          italicTitle="wellness solutions."
        />

        {/* Semantic Comparison Table */}
        <FadeIn delay={0.1}>
          <div className="overflow-x-auto rounded-3xl border border-[#E8E1D7] bg-[#FCFAF7] shadow-xs">
            <table className="w-full text-left border-collapse font-sans text-sm">
              <thead>
                <tr className="border-b border-[#E8E1D7] bg-[#FCFAF7]">
                  <th className="py-5 px-6 font-serif text-lg font-normal text-[#262626] w-1/3">
                    Wellness Solution Features
                  </th>
                  <th className="py-5 px-6 font-serif text-lg font-normal text-[#5E7052] bg-[#5E7052]/10 w-1/4">
                    Onsite Yoga &amp; Restore
                  </th>
                  <th className="py-5 px-6 font-serif text-lg font-normal text-[#262626] w-1/4">
                    In-House Staffing
                  </th>
                  <th className="py-5 px-6 font-serif text-lg font-normal text-[#262626] w-1/6">
                    Digital Apps / Gyms
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E1D7]">
                {features.map((item) => (
                  <tr key={item.feature} className="hover:bg-[#F8F5EF]/60 transition-colors">
                    <td className="py-4 px-6 font-medium text-[#262626]">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 bg-[#5E7052]/5 text-[#262626]">
                      <div className="flex items-center gap-2">
                        {item.onsiteCheck && (
                          <div className="w-4 h-4 rounded-full bg-[#5E7052] text-[#FCFAF7] flex items-center justify-center shrink-0">
                            <Check size={10} strokeWidth={3} />
                          </div>
                        )}
                        <span>{item.onsite}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[#6D6D6D]">
                      <div className="flex items-center gap-2">
                        {item.inHouseCheck === true && (
                          <div className="w-4 h-4 rounded-full bg-[#5E7052] text-[#FCFAF7] flex items-center justify-center shrink-0">
                            <Check size={10} strokeWidth={3} />
                          </div>
                        )}
                        {item.inHouseCheck === "partial" && (
                          <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
                            <Minus size={10} strokeWidth={3} />
                          </div>
                        )}
                        {item.inHouseCheck === false && (
                          <div className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                            <X size={10} strokeWidth={3} />
                          </div>
                        )}
                        <span>{item.inHouse}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[#6D6D6D]">
                      <div className="flex items-center gap-2">
                        {item.appsCheck === true && (
                          <div className="w-4 h-4 rounded-full bg-[#5E7052] text-[#FCFAF7] flex items-center justify-center shrink-0">
                            <Check size={10} strokeWidth={3} />
                          </div>
                        )}
                        {item.appsCheck === false && (
                          <div className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                            <X size={10} strokeWidth={3} />
                          </div>
                        )}
                        <span>{item.apps}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

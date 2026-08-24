"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { useState } from "react";

export function OnsiteContact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <section id="property-inquiry" className="bg-[#F8F5EF] py-20 md:py-28 border-t border-[#E8E1D7]">
      <div className="max-w-[760px] mx-auto px-6">
        
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-light text-[#262626] leading-[1.12] mb-4">
              How can properties request <br />
              <em className="italic font-normal text-[#5E7052]">a partnership proposal?</em>
            </h2>
            <p className="font-sans text-base text-[#6D6D6D] leading-relaxed max-w-[500px] mx-auto">
              Get in touch with our program management team to discuss customized class formats, schedule frequencies, and property pricing.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          {status === "success" ? (
            <div className="text-center p-12 bg-[#FCFAF7] border border-[#E8E1D7] rounded-3xl shadow-xs">
              <p className="font-serif text-2xl text-[#262626] mb-3">Thank you.</p>
              <p className="font-sans text-sm text-[#6D6D6D]">
                Your partnership inquiry has been received. We will contact you soon to discuss creating a custom wellness program.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 bg-[#FCFAF7]/60 border border-[#E8E1D7] rounded-3xl p-6 md:p-12 shadow-xs">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-sans text-xs tracking-widest uppercase text-[#6D6D6D] font-medium">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-transparent border-b border-[#E8E1D7] py-3 text-[#262626] font-sans text-base focus:outline-none focus:border-[#5E7052] transition-colors duration-200 disabled:opacity-50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="property" className="block font-sans text-xs tracking-widest uppercase text-[#6D6D6D] font-medium">
                    Property / Organization Name
                  </label>
                  <input
                    type="text"
                    id="property"
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-transparent border-b border-[#E8E1D7] py-3 text-[#262626] font-sans text-base focus:outline-none focus:border-[#5E7052] transition-colors duration-200 disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-sans text-xs tracking-widest uppercase text-[#6D6D6D] font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    disabled={status === "submitting"}
                    className="w-full bg-transparent border-b border-[#E8E1D7] py-3 text-[#262626] font-sans text-base focus:outline-none focus:border-[#5E7052] transition-colors duration-200 disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="propertyType" className="block font-sans text-xs tracking-widest uppercase text-[#6D6D6D] font-medium">
                    Property Type
                  </label>
                  <div className="relative">
                    <select
                      id="propertyType"
                      required
                      defaultValue=""
                      disabled={status === "submitting"}
                      className="w-full bg-transparent border-b border-[#E8E1D7] py-3 text-[#6D6D6D] font-sans text-base focus:outline-none focus:border-[#5E7052] transition-colors duration-200 disabled:opacity-50 appearance-none rounded-none cursor-pointer"
                    >
                      <option value="" disabled>Select property type...</option>
                      <option value="hotel">Hotel / Resort / Hospitality</option>
                      <option value="apartment">Residential / Apartment Community</option>
                      <option value="workplace">Corporate / Workplace Office</option>
                      <option value="other">Other Space</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#6D6D6D]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-sans text-xs tracking-widest uppercase text-[#6D6D6D] font-medium">
                  Inquiry Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us about your property, space availability, estimated class frequencies, or any questions..."
                  disabled={status === "submitting"}
                  className="w-full bg-transparent border-b border-[#E8E1D7] py-3 text-[#262626] font-sans text-base placeholder-[#6D6D6D]/45 resize-none focus:outline-none focus:border-[#5E7052] transition-colors duration-200 disabled:opacity-50"
                />
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center h-[46px] px-8 font-sans text-xs tracking-wider uppercase font-semibold bg-[#262626] text-[#FCFAF7] rounded-full hover:bg-[#5E7052] active:scale-[0.97] transition-all duration-200 disabled:opacity-50 cursor-pointer"
                >
                  {status === "submitting" ? "Sending Inquiry..." : "Submit Inquiry"}
                </button>
              </div>

            </form>
          )}
        </FadeIn>

      </div>
    </section>
  );
}

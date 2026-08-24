"use client";

import { FadeIn } from "@/components/shared/FadeIn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  italicTitle?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  italicTitle,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <FadeIn>
      <div
        className={`mb-14 md:mb-20 ${
          isCenter ? "text-center max-w-[640px] mx-auto" : "max-w-[620px]"
        } ${className}`}
      >
        {eyebrow && (
          <span
            className={`font-sans text-[10px] tracking-[0.25em] uppercase font-semibold block mb-3 ${
              isDark ? "text-[#A3A3A3]" : "text-[#5E7052]"
            }`}
          >
            {eyebrow}
          </span>
        )}

        <h2
          className={`font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-light leading-[1.15] ${
            isDark ? "text-[#FCFAF7]" : "text-[#262626]"
          }`}
        >
          {title}{" "}
          {italicTitle && (
            <>
              <br className="hidden sm:block" />
              <em className="italic font-normal">
                {italicTitle}
              </em>
            </>
          )}
        </h2>

        {description && (
          <p
            className={`font-sans text-base leading-relaxed mt-5 ${
              isCenter ? "mx-auto" : ""
            } ${isDark ? "text-[#A3A3A3]" : "text-[#6D6D6D]"}`}
          >
            {description}
          </p>
        )}
      </div>
    </FadeIn>
  );
}

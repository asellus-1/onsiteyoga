"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FCFAF7]/85 backdrop-blur-xl border-b border-[#E8E1D7]/80 py-3.5 shadow-2xs"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center active:scale-[0.98] transition-transform duration-150">
          <Image
            src="/logo.png"
            alt="Onsite Yoga & Restore Logo"
            width={180}
            height={100}
            className="h-14 md:h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-xs tracking-wider uppercase text-[#6D6D6D] hover:text-[#262626] transition-colors duration-200 font-medium active:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[38px] px-5 rounded-full font-sans text-xs tracking-wider uppercase font-semibold bg-[#262626] text-[#FCFAF7] hover:bg-[#5E7052] active:scale-[0.97] transition-all duration-200"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#262626] hover:text-[#5E7052] active:scale-[0.95] transition-all"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#FCFAF7]/95 backdrop-blur-xl border-b border-[#E8E1D7] px-6 py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-sans text-xs tracking-wider uppercase text-[#262626] py-2 font-medium active:opacity-70"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#E8E1D7]">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center h-[42px] py-3 rounded-full font-sans text-xs tracking-wider uppercase font-semibold bg-[#262626] text-[#FCFAF7] active:scale-[0.98] transition-transform"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

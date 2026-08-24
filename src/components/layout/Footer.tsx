import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#262626] text-[#FCFAF7] py-20 md:py-28 border-t border-[#3A3A3A]">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="group inline-block">
              <Image
                src="/logo.png"
                alt="Onsite Yoga & Restore Logo"
                width={180}
                height={100}
                className="h-16 md:h-18 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
            </Link>
            <p className="font-sans text-sm text-[#A3A3A3] leading-relaxed max-w-[380px]">
              Turnkey wellness programming, equipment setup, and restorative yoga instruction for hospitality properties, residential communities, and workplaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[#5E7052] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 font-sans text-sm text-[#A3A3A3]">
              <li><Link href="/" className="hover:text-[#FCFAF7] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#FCFAF7] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#FCFAF7] transition-colors">Services &amp; Programs</Link></li>
              <li><Link href="/faq" className="hover:text-[#FCFAF7] transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-[#FCFAF7] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[#5E7052] font-semibold">
              Inquiries &amp; Bookings
            </h4>
            <p className="font-sans text-sm text-[#A3A3A3] leading-relaxed">
              Interested in introducing turnkey wellness to your hotel guests, residence, or workplace?
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[40px] px-6 rounded-full font-sans text-xs tracking-wider uppercase font-semibold border border-[#5E7052] text-[#FCFAF7] hover:bg-[#5E7052] transition-colors duration-500"
              >
                Inquire Now
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3A3A3A] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-[#737373]">
          <p>© {new Date().getFullYear()} Onsite Yoga &amp; Restore. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-[#A3A3A3]">
            <Link href="/privacy" className="hover:text-[#FCFAF7] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#FCFAF7] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

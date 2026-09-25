import Link from "next/link";
import Image from "next/image";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

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
            <div className="space-y-1 font-sans text-sm text-[#A3A3A3] pt-1">
              <div>
                <a
                  href="mailto:hello@onsiteyogaandrestore.com"
                  className="hover:text-[#FCFAF7] transition-colors"
                >
                  hello@onsiteyogaandrestore.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+16145268419"
                  className="hover:text-[#FCFAF7] transition-colors"
                >
                  (614) 526-8419
                </a>
              </div>
            </div>
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
          <p>©️ 2026 Onsite Yoga &amp; Restore, a Yogi Manu LLC company. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-[#A3A3A3]">
            <a
              href="https://www.youtube.com/@Onsiteyogaandrestore"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FCFAF7] transition-colors inline-flex items-center gap-1.5"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
              <span>YouTube</span>
            </a>
            <a
              href="https://www.instagram.com/onsiteyogaandrestore"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FCFAF7] transition-colors inline-flex items-center gap-1.5"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <Link href="/privacy" className="hover:text-[#FCFAF7] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#FCFAF7] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

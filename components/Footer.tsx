import Link from "next/link";
import { Mark } from "./Logo";
import { CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70 pt-20 pb-8" id="contact">
      <div className="max-w-container mx-auto px-6 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 lg:gap-12 pb-14 border-b border-white/15">
          <div>
            <Link href="/" className="flex items-center gap-3 text-white mb-4.5">
              <Mark className="w-9 h-9" />
              <span className="font-display font-bold text-[15px] leading-tight">
                Dekunle Homes
                <span className="block font-normal text-[10.5px] tracking-[0.14em] text-gold-soft uppercase mt-0.5">
                  &amp; Properties
                </span>
              </span>
            </Link>
            <p className="text-[14px] leading-[1.7] max-w-[280px] text-white/55">
              An engineering-driven construction, real estate development,
              property management and investment firm building lasting value.
            </p>
          </div>

          <div>
            <h5 className="text-white font-display text-[14px] mb-5">Company</h5>
            {[
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/about#services" },
              { label: "Projects", href: "/projects" },
              { label: "Investment", href: "/investment" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="block text-[14px] py-1.5 text-white/60 hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <h5 className="text-white font-display text-[14px] mb-5">Services</h5>
            {[
              "Construction",
              "Property Management",
              "Land Banking",
              "Engineering Consultancy",
            ].map((s) => (
              <Link key={s} href="/about#services" className="block text-[14px] py-1.5 text-white/60 hover:text-gold transition-colors">
                {s}
              </Link>
            ))}
          </div>

          <div>
            <h5 className="text-white font-display text-[14px] mb-5">Get In Touch</h5>
            <p className="text-[14px] mb-3 text-white/60 leading-[1.6]">
              <b className="block text-white text-[12.5px] tracking-wide uppercase mb-1">Office</b>
              {CONTACT.address}
            </p>
            <p className="text-[14px] mb-3 text-white/60 leading-[1.6]">
              <b className="block text-white text-[12.5px] tracking-wide uppercase mb-1">Phone / WhatsApp</b>
              {CONTACT.phone}
            </p>
            <p className="text-[14px] mb-3 text-white/60 leading-[1.6]">
              <b className="block text-white text-[12.5px] tracking-wide uppercase mb-1">Email</b>
              {CONTACT.email}
            </p>
            <p className="text-[14px] mb-3 text-white/60 leading-[1.6]">
              <b className="block text-white text-[12.5px] tracking-wide uppercase mb-1">Office Hours</b>
              {CONTACT.hours}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-3.5 pt-6">
          <p className="text-[12.5px] text-white/40">
            © 2026 Dekunle Homes and Properties. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="text-[12.5px] text-white/50 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-[12.5px] text-white/50 hover:text-white">Terms of Service</Link>
            <Link href="/faqs" className="text-[12.5px] text-white/50 hover:text-white">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

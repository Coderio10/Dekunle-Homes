import Link from "next/link";
import { CONTACT } from "@/lib/data";

export default function MobileCta() {
  return (
    <div className="lg:hidden fixed left-0 right-0 bottom-0 z-[900] bg-white flex items-center justify-between gap-3 px-4 py-3 shadow-[0_-6px_24px_rgba(17,17,17,0.1)]">
      <a
        href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
        className="flex-1 text-center rounded-full min-h-[48px] flex items-center justify-center font-semibold text-[13.5px] text-navy border border-navy/20"
      >
        Call Us
      </a>
      <Link
        href="/contact"
        className="flex-1 text-center rounded-full min-h-[48px] flex items-center justify-center font-semibold text-[13.5px] bg-gold-dark text-white"
      >
        Partner With Us
      </Link>
    </div>
  );
}

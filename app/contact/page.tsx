import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/data";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Dekunle Homes & Properties",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Let's talk about your next project."
        description="Whether you're buying, investing, building or looking for property management, our team responds within one business day."
      />
      <section className="py-20 md:py-28">
        <div className="max-w-container mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-14">
          <div>
            <h2 className="text-[22px] font-bold text-navy mb-8">Reach us directly</h2>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <b className="block text-[13px] uppercase tracking-wide text-slate2 mb-1">Office</b>
                  <p className="text-[15px] text-navy">{CONTACT.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <b className="block text-[13px] uppercase tracking-wide text-slate2 mb-1">Phone / WhatsApp</b>
                  <p className="text-[15px] text-navy">{CONTACT.phone}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <b className="block text-[13px] uppercase tracking-wide text-slate2 mb-1">Email</b>
                  <p className="text-[15px] text-navy">{CONTACT.email}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <b className="block text-[13px] uppercase tracking-wide text-slate2 mb-1">Office Hours</b>
                  <p className="text-[15px] text-navy">{CONTACT.hours}</p>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-2xl overflow-hidden bg-paper flex items-center justify-center">
              <iframe
                title="Office location map"
                className="w-full h-full grayscale contrast-125"
                src="https://www.google.com/maps?q=Lagos%20Nigeria&output=embed"
                loading="lazy"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}

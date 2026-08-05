import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Dekunle Homes & Properties",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero title="Privacy Policy." />
      <section className="py-20 md:py-28">
        <div className="max-w-container mx-auto px-6 md:px-8 max-w-3xl space-y-8 text-[15px] leading-[1.8] text-slate2">
          <p>
            This placeholder policy should be replaced with legal copy
            prepared by counsel before launch. It should describe what
            personal data Dekunle Homes and Properties collects, why it is
            collected, how it is stored, and the rights visitors and clients
            have over their own data.
          </p>
          <div>
            <h2 className="text-[19px] font-semibold text-navy mb-2">Information we collect</h2>
            <p>Contact details submitted through enquiry forms, and standard analytics data collected when browsing this site.</p>
          </div>
          <div>
            <h2 className="text-[19px] font-semibold text-navy mb-2">How we use it</h2>
            <p>To respond to enquiries, manage client and investor relationships, and improve this website.</p>
          </div>
          <div>
            <h2 className="text-[19px] font-semibold text-navy mb-2">Contact</h2>
            <p>Questions about this policy can be sent to info@dekunlehomes.com.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

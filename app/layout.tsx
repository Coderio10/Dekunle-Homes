import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";

export const metadata: Metadata = {
  title: "Dekunle Homes & Properties | Engineering-Led Real Estate Development",
  description:
    "Dekunle Homes and Properties is an engineering-driven construction, real estate development, property management and investment firm building lasting value.",
  metadataBase: new URL("https://www.dekunlehomes.com"),
  openGraph: {
    title: "Dekunle Homes & Properties",
    description: "Engineering Better Communities. Building Lasting Value.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}

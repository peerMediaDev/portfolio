import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding Services",
  description:
    "Complete branding services by PeerMedia. We develop comprehensive brand strategies, visual identities, and brand guidelines that make your business unforgettable.",
  keywords: [
    "branding",
    "brand strategy",
    "brand identity",
    "brand guidelines",
    "visual identity",
    "brand development",
    "brand design",
    "corporate identity",
  ],
  openGraph: {
    title: "Branding Services | PeerMedia",
    description:
      "Build a brand that resonates. Comprehensive brand strategy and identity development.",
    url: "https://peermedia.co/services/branding",
    type: "website",
  },
};

export default function BrandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

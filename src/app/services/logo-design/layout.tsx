import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo Design Services",
  description:
    "Professional logo design services by PeerMedia. We create memorable, versatile logos that capture your brand essence and stand out from the competition.",
  keywords: [
    "logo design",
    "brand identity",
    "custom logos",
    "professional logo design",
    "logo designer",
    "brand mark",
    "visual identity",
    "logo creation",
  ],
  openGraph: {
    title: "Logo Design Services | PeerMedia",
    description:
      "Memorable logos that tell your story. Professional logo design that captures your brand essence.",
    url: "https://peermedia.co/services/logo-design",
    type: "website",
  },
};

export default function LogoDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services",
  description:
    "Custom web development services by PeerMedia. We build fast, SEO-optimized websites using Next.js, React, and TypeScript. From landing pages to complex web applications.",
  keywords: [
    "web development",
    "custom websites",
    "Next.js development",
    "React development",
    "TypeScript",
    "SEO optimization",
    "responsive design",
    "web applications",
  ],
  openGraph: {
    title: "Web Development Services | PeerMedia",
    description:
      "Custom websites that perform. Fast, accessible, and SEO-optimized websites that convert visitors into customers.",
    url: "https://peermedia.co/services/web-development",
    type: "website",
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

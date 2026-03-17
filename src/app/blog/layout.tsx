import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Web Development, Design & Branding Insights",
  description:
    "Expert tips, trends, and insights on web development, logo design, and branding. Learn from PeerMedia's experience building successful digital products.",
  keywords: [
    "web development blog",
    "design blog",
    "branding tips",
    "web design trends",
    "logo design tips",
    "digital marketing",
    "Next.js tutorials",
    "React development",
  ],
  openGraph: {
    title: "Blog | PeerMedia",
    description:
      "Expert insights on web development, design, and branding to help your business grow.",
    url: "https://peermedia.co/blog",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

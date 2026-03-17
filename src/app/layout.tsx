import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PeerMedia | Web Development, Logo Design & Branding Agency",
    template: "%s | PeerMedia",
  },
  description:
    "PeerMedia is a creative digital agency specializing in custom web development, logo design, and branding. We build fast, modern websites and create memorable brand identities that drive results.",
  keywords: [
    "web development",
    "web design",
    "logo design",
    "branding agency",
    "digital agency",
    "custom websites",
    "Next.js development",
    "React development",
    "brand identity",
    "UI/UX design",
    "creative agency",
    "website design",
    "SEO optimization",
    "modern web design",
  ],
  authors: [{ name: "PeerMedia" }],
  creator: "PeerMedia",
  publisher: "PeerMedia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://peermedia.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PeerMedia | Web Development, Logo Design & Branding Agency",
    description:
      "We build fast, modern websites and create memorable brand identities that convert visitors into customers. Get a free quote today.",
    url: "https://peermedia.co",
    siteName: "PeerMedia",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PeerMedia - Creative Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeerMedia | Web Development, Logo Design & Branding",
    description:
      "Custom websites, stunning logos & brand identities that drive results. Modern design, fast sites, real results.",
    images: ["/og-image.png"],
    creator: "@peermedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#09090b" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

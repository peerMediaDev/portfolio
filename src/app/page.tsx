import {
  Navigation,
  HeroSection,
  LogoShowcase,
  ServicesSection,
  SaaSSpotlight,
  ContactSection,
  Footer,
} from "@/components";

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PeerMedia",
  url: "https://peermedia.co",
  logo: "https://peermedia.co/logo.png",
  description:
    "Creative digital agency specializing in custom web development, logo design, and branding services.",
  sameAs: [
    "https://twitter.com/peermedia",
    "https://linkedin.com/company/peermedia",
    "https://instagram.com/peermedia",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@peermedia.co",
  },
  offers: {
    "@type": "AggregateOffer",
    offerCount: 3,
    offers: [
      {
        "@type": "Offer",
        name: "Web Development",
        description: "Custom websites built with Next.js, React, and modern technologies",
      },
      {
        "@type": "Offer",
        name: "Logo Design",
        description: "Professional logo design and visual identity creation",
      },
      {
        "@type": "Offer",
        name: "Branding",
        description: "Complete brand strategy and identity development",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-zinc-950">
        <Navigation />
        <HeroSection />
        <LogoShowcase />
        <ServicesSection />
        <SaaSSpotlight />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

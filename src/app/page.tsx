import {
  Navigation,
  HeroSection,
  LogoShowcase,
  ServicesSection,
  SaaSSpotlight,
  BlogPreview,
  ContactSection,
  Footer,
} from "@/components";

// JSON-LD structured data for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://peermedia.co/#organization",
  name: "PeerMedia",
  url: "https://peermedia.co",
  logo: {
    "@type": "ImageObject",
    url: "https://peermedia.co/logo.png",
    width: 512,
    height: 512,
  },
  image: "https://peermedia.co/og-image.png",
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
    availableLanguage: "English",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@id": "https://peermedia.co/#organization",
  },
  serviceType: "Digital Agency Services",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description:
            "Custom websites built with Next.js, React, and modern technologies. Fast, SEO-optimized, and accessible.",
          url: "https://peermedia.co/services/web-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Logo Design",
          description:
            "Professional logo design and visual identity creation that makes your brand memorable.",
          url: "https://peermedia.co/services/logo-design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Branding",
          description:
            "Complete brand strategy and identity development to make your business stand out.",
          url: "https://peermedia.co/services/branding",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most websites take 4-8 weeks from start to launch, depending on complexity. This includes design, development, testing, and deployment phases.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you use for web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use modern technologies including Next.js, React, TypeScript, and Tailwind CSS. We also work with Node.js, PostgreSQL, and various CMS platforms like Sanity and Contentful.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! All our projects include 30 days of post-launch support. We also offer ongoing maintenance and support packages for long-term partnerships.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a logo design cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Logo design pricing varies based on your needs. We offer packages starting from basic logo design to complete brand identity systems. Contact us for a custom quote.",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PeerMedia",
  url: "https://peermedia.co",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://peermedia.co/?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            servicesSchema,
            faqSchema,
            websiteSchema,
          ]),
        }}
      />
      <main className="min-h-screen bg-zinc-950">
        <Navigation />
        <HeroSection />
        <LogoShowcase />
        <ServicesSection />
        <SaaSSpotlight />
        <BlogPreview />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

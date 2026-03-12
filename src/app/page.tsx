import {
  Navigation,
  HeroSection,
  LogoShowcase,
  ServicesSection,
  SaaSSpotlight,
  ContactSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navigation />
      <HeroSection />
      <LogoShowcase />
      <ServicesSection />
      <SaaSSpotlight />
      <ContactSection />
      <Footer />
    </main>
  );
}

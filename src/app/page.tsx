"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Globe,
  Palette,
  Sparkles,
  Code,
  Layers,
  Zap,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ChevronDown,
  Rocket,
  BarChart3,
  Users,
  Shield,
} from "lucide-react";

// ============================================================================
// NAVIGATION COMPONENT
// ============================================================================
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Our Software", href: "#software" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            {/* 
              ============================================================
              [LOGO PLACEHOLDER] - Replace with your company logo
              Example: <Image src="/logo.svg" alt="Company Logo" width={40} height={40} />
              ============================================================
            */}
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">
              Peer<span className="text-blue-500">Media</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-zinc-800/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors duration-300 text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 mt-2"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection() {
  return (
    <section className="min-h-screen pt-20 lg:pt-0 flex items-center bg-zinc-950 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-zinc-400">Crafting Digital Excellence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Building the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
                Digital Future
              </span>{" "}
              of Your Brand
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We transform visionary ideas into stunning digital experiences. From captivating websites to iconic brand identities, we create what matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Primary CTA - Agency */}
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/25 hover:-translate-y-0.5"
              >
                Explore Our Work
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* Secondary CTA - SaaS */}
              <a
                href="#software"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-600 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300"
              >
                <Rocket className="w-5 h-5 text-blue-500" />
                Discover Our SaaS
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-zinc-800/50">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">150+</div>
                <div className="text-sm text-zinc-500">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-zinc-500">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">5+</div>
                <div className="text-sm text-zinc-500">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative">
            {/* 
              ============================================================
              [HERO IMAGE PLACEHOLDER] - Replace with your high-res hero shot
              Recommended: A mockup of your work, team photo, or abstract design
              Example: <Image src="/hero-image.png" alt="Hero" fill className="object-cover" />
              ============================================================
            */}
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/5 rounded-3xl" />
              <div className="absolute inset-4 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center overflow-hidden">
                {/* Decorative elements representing work */}
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute top-8 left-8 w-32 h-32 bg-blue-600/20 rounded-2xl" />
                  <div className="absolute top-20 right-12 w-24 h-24 bg-blue-500/20 rounded-xl" />
                  <div className="absolute bottom-16 left-16 w-40 h-20 bg-blue-400/20 rounded-xl" />
                  <div className="absolute bottom-8 right-8 w-28 h-28 bg-blue-600/30 rounded-2xl" />
                </div>
                <div className="relative z-10 text-center p-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mb-4">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-zinc-500 text-sm">Hero Image Placeholder</p>
                  <p className="text-zinc-600 text-xs mt-1">1200 x 1200px recommended</p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-600/30 animate-pulse">
                <Code className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700">
                <Palette className="w-8 h-8 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// LOGO SHOWCASE - BENTO GRID
// ============================================================================
function LogoShowcase() {
  const logos = [
    { id: 1, name: "TechVision", description: "Fintech startup branding", size: "large" },
    { id: 2, name: "GreenLeaf", description: "Sustainable products", size: "medium" },
    { id: 3, name: "Nexus", description: "Real estate platform", size: "medium" },
    { id: 4, name: "Pulse", description: "Health & fitness app", size: "small" },
    { id: 5, name: "Aether", description: "Cloud solutions", size: "small" },
    { id: 6, name: "Nova", description: "E-commerce brand", size: "medium" },
  ];

  return (
    <section id="work" className="py-24 lg:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-500 font-semibold text-sm tracking-wider uppercase mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Selected Brand Identities
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A curated collection of logos and brand systems we&apos;ve crafted for visionary companies.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {/* Large item - spans 2 columns and 2 rows */}
          <div className="col-span-2 row-span-2 group">
            {/* 
              ============================================================
              [LOGO PLACEHOLDER 1] - Large featured logo
              Replace with your best logo work
              Example: <Image src="/logos/logo1.png" alt="TechVision Logo" fill className="object-contain p-12" />
              ============================================================
            */}
            <div className="relative h-full min-h-[300px] lg:min-h-[400px] bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden transition-all duration-500 hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-600/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center justify-center h-full p-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-zinc-800 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500">
                    <span className="text-4xl font-bold text-blue-500">TV</span>
                  </div>
                  <p className="text-zinc-600 text-sm">Logo Placeholder</p>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-lg">{logos[0].name}</h3>
                <p className="text-zinc-400 text-sm">{logos[0].description}</p>
              </div>
            </div>
          </div>

          {/* Medium items */}
          {logos.slice(1, 3).map((logo) => (
            <div key={logo.id} className="col-span-1 group">
              {/* 
                ============================================================
                [LOGO PLACEHOLDER] - Medium logo
                Replace with your logo work
                ============================================================
              */}
              <div className="relative aspect-square bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden transition-all duration-500 hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center justify-center h-full p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-500">
                      <span className="text-xl font-bold text-blue-500">{logo.name.slice(0, 2)}</span>
                    </div>
                    <p className="text-zinc-600 text-xs">Placeholder</p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-semibold text-sm">{logo.name}</h3>
                  <p className="text-zinc-400 text-xs">{logo.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Small items */}
          {logos.slice(3, 5).map((logo) => (
            <div key={logo.id} className="col-span-1 group">
              {/* 
                ============================================================
                [LOGO PLACEHOLDER] - Small logo
                Replace with your logo work
                ============================================================
              */}
              <div className="relative aspect-square bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden transition-all duration-500 hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center justify-center h-full p-4">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-zinc-800 rounded-lg flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-500">
                      <span className="text-lg font-bold text-blue-500">{logo.name.slice(0, 2)}</span>
                    </div>
                    <p className="text-zinc-600 text-xs hidden sm:block">Placeholder</p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-semibold text-xs">{logo.name}</h3>
                  <p className="text-zinc-400 text-xs truncate">{logo.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Last medium item - spans 2 columns on mobile */}
          <div className="col-span-2 md:col-span-2 group">
            {/* 
              ============================================================
              [LOGO PLACEHOLDER 6] - Wide logo showcase
              Replace with your logo work
              ============================================================
            */}
            <div className="relative h-48 bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden transition-all duration-500 hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center justify-center h-full p-6">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-500">
                    <span className="text-2xl font-bold text-blue-500">{logos[5].name.slice(0, 2)}</span>
                  </div>
                  <p className="text-zinc-600 text-sm">Logo Placeholder</p>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-semibold">{logos[5].name}</h3>
                <p className="text-zinc-400 text-sm">{logos[5].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SERVICES SECTION
// ============================================================================
function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites and web applications built with cutting-edge technologies. From responsive landing pages to complex platforms.",
      features: ["Next.js & React", "Performance Optimized", "SEO Ready", "Mobile First"],
    },
    {
      icon: Palette,
      title: "Logo Design",
      description:
        "Distinctive visual identities that capture your brand essence. Memorable logos that stand the test of time.",
      features: ["Custom Typography", "Brand Guidelines", "Vector Files", "Multiple Concepts"],
    },
    {
      icon: Layers,
      title: "Branding Strategy",
      description:
        "Comprehensive brand development from positioning to visual systems. Build a cohesive identity that resonates.",
      features: ["Brand Positioning", "Visual Systems", "Messaging Framework", "Brand Book"],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-500 font-semibold text-sm tracking-wider uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Services That Elevate
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            We offer end-to-end creative solutions to help your business stand out in the digital landscape.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900 rounded-2xl border border-zinc-800 p-8 transition-all duration-500 hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors duration-500">
                <service.icon className="w-7 h-7 text-blue-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-zinc-500">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SAAS SPOTLIGHT SECTION
// ============================================================================
function SaaSSpotlight() {
  const features = [
    { icon: BarChart3, title: "Analytics Dashboard", description: "Real-time insights and metrics" },
    { icon: Users, title: "Team Collaboration", description: "Work together seamlessly" },
    { icon: Shield, title: "Enterprise Security", description: "Bank-level data protection" },
    { icon: Zap, title: "Lightning Fast", description: "Optimized for performance" },
  ];

  return (
    <section id="software" className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 rounded-full px-4 py-2 mb-6">
            <Rocket className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-blue-400 font-medium">Our Innovation Lab</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Introducing <span className="text-blue-500">CloudFlow</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Born from our agency experience, we&apos;ve built a powerful SaaS platform that streamlines creative workflows and project management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Features */}
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-blue-600/30 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-600 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
              >
                View Documentation
              </a>
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="order-1 lg:order-2">
            {/* 
              ============================================================
              [DASHBOARD PREVIEW PLACEHOLDER] - Replace with your SaaS product screenshot
              Recommended: A polished screenshot or mockup of your dashboard
              Example: <Image src="/dashboard-preview.png" alt="CloudFlow Dashboard" fill className="object-cover rounded-xl" />
              ============================================================
            */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-blue-600/20 rounded-3xl blur-xl" />
              <div className="relative bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
                {/* Mock browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/50 border-b border-zinc-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-zinc-700 rounded-md px-3 py-1 text-xs text-zinc-400 max-w-xs mx-auto text-center">
                      app.cloudflow.io
                    </div>
                  </div>
                </div>

                {/* Dashboard content placeholder */}
                <div className="p-6 min-h-[300px] lg:min-h-[400px]">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-zinc-800 rounded-lg p-4">
                      <div className="text-xs text-zinc-500 mb-1">Projects</div>
                      <div className="text-2xl font-bold text-white">24</div>
                    </div>
                    <div className="bg-zinc-800 rounded-lg p-4">
                      <div className="text-xs text-zinc-500 mb-1">Tasks</div>
                      <div className="text-2xl font-bold text-blue-500">142</div>
                    </div>
                    <div className="bg-zinc-800 rounded-lg p-4">
                      <div className="text-xs text-zinc-500 mb-1">Team</div>
                      <div className="text-2xl font-bold text-white">8</div>
                    </div>
                  </div>

                  <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm text-zinc-400">Project Progress</div>
                      <div className="text-xs text-blue-500">78%</div>
                    </div>
                    <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-800 rounded-lg p-4 h-24" />
                    <div className="bg-zinc-800 rounded-lg p-4 h-24" />
                  </div>

                  <p className="text-center text-zinc-600 text-sm mt-6">Dashboard Preview Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CONTACT FORM SECTION
// ============================================================================
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <div>
            <span className="inline-block text-blue-500 font-semibold text-sm tracking-wider uppercase mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Let&apos;s Start Your Project
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Ready to transform your digital presence? We&apos;d love to hear about your project. Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-zinc-500 text-sm">Email us at</div>
                  <a href="mailto:hello@peermedia.com" className="text-white font-medium hover:text-blue-500 transition-colors">
                    hello@peermedia.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-zinc-500 text-sm">Call us at</div>
                  <a href="tel:+1234567890" className="text-white font-medium hover:text-blue-500 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-zinc-500 text-sm">Located in</div>
                  <span className="text-white font-medium">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Project Inquiry</h3>

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Service Type Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-zinc-400 mb-2">
                    Service Type
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors cursor-pointer"
                    >
                      <option value="" disabled className="text-zinc-500">
                        Select a service
                      </option>
                      <option value="web-development">Web Development</option>
                      <option value="logo-design">Logo Design</option>
                      <option value="branding">Branding Strategy</option>
                      <option value="saas">SaaS Product Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 flex items-center justify-center gap-2"
                >
                  Send Inquiry
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FOOTER
// ============================================================================
function Footer() {
  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const serviceLinks = [
    { name: "Web Development", href: "#services" },
    { name: "Logo Design", href: "#services" },
    { name: "Branding", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
  ];

  const productLinks = [
    { name: "CloudFlow", href: "#software" },
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Changelog", href: "#" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              {/* 
                ============================================================
                [LOGO PLACEHOLDER] - Replace with your company logo
                ============================================================
              */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-white">
                Peer<span className="text-blue-500">Media</span>
              </span>
            </a>
            <p className="text-zinc-500 text-sm mb-6 max-w-xs">
              A high-end creative agency building the digital future. Websites, logos, and innovative software solutions.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-zinc-500 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-zinc-500 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-zinc-500 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} PeerMedia. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
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

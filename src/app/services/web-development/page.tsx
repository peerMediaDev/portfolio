"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Palette, Code, TestTube, Rocket, CheckCircle } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const phases = [
  {
    id: "design",
    title: "Design",
    icon: Palette,
    description: "We start by understanding your vision and translating it into stunning visual designs.",
    details: [
      "Discovery call to understand your goals, target audience, and brand identity",
      "Wireframing and user flow mapping to plan the optimal user experience",
      "High-fidelity mockups in Figma with multiple revision rounds",
      "Mobile-first responsive design ensuring perfect display on all devices",
      "Design system creation for consistent visual language",
    ],
    duration: "1-2 weeks",
  },
  {
    id: "code",
    title: "Development",
    icon: Code,
    description: "Our engineers bring your designs to life with clean, performant code.",
    details: [
      "Modern tech stack: Next.js, React, TypeScript, and Tailwind CSS",
      "Component-based architecture for maintainability and scalability",
      "Performance optimization from the ground up",
      "SEO best practices baked into every page",
      "Accessibility compliance (WCAG 2.1 standards)",
      "CMS integration if needed (Sanity, Contentful, or custom)",
    ],
    duration: "2-4 weeks",
  },
  {
    id: "test",
    title: "Testing",
    icon: TestTube,
    description: "Rigorous testing ensures your website works flawlessly across all scenarios.",
    details: [
      "Cross-browser testing (Chrome, Safari, Firefox, Edge)",
      "Device testing on mobile, tablet, and desktop",
      "Performance audits using Lighthouse and Core Web Vitals",
      "User acceptance testing with your team",
      "Security vulnerability scanning",
      "Load testing for high-traffic scenarios",
    ],
    duration: "1 week",
  },
  {
    id: "deploy",
    title: "Deploy",
    icon: Rocket,
    description: "We launch your site with confidence and provide ongoing support.",
    details: [
      "Deployment to production-grade infrastructure (Vercel, AWS, or your preferred host)",
      "SSL certificate setup and security hardening",
      "Analytics and tracking implementation",
      "Performance monitoring setup",
      "Documentation and training for your team",
      "30-day post-launch support included",
    ],
    duration: "2-3 days",
  },
];

export default function WebDevelopmentPage() {
  const [activePhase, setActivePhase] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the timeline section
      const scrollStart = windowHeight * 0.3;
      const scrollEnd = -timelineHeight + windowHeight * 0.7;
      
      if (timelineTop <= scrollStart && timelineTop >= scrollEnd) {
        const progress = (scrollStart - timelineTop) / (scrollStart - scrollEnd);
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
        
        // Determine active phase based on progress
        const phaseIndex = Math.min(
          Math.floor(progress * phases.length),
          phases.length - 1
        );
        setActivePhase(phaseIndex);
      } else if (timelineTop > scrollStart) {
        setScrollProgress(0);
        setActivePhase(0);
      } else {
        setScrollProgress(1);
        setActivePhase(phases.length - 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block text-blue-500 font-semibold text-sm tracking-wider uppercase mb-4">
              Web Development
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Custom Websites That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
                Perform
              </span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              From stunning landing pages to complex web applications, we build fast, 
              accessible, and SEO-optimized websites that convert visitors into customers.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/25"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-500 font-semibold text-sm tracking-wider uppercase mb-4">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              How We Build Your Website
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              A proven four-phase process that ensures quality, transparency, and results.
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              {/* Left - Progress Bar (sticky) */}
              <div className="hidden lg:block lg:col-span-1">
                <div className="sticky top-32 h-[400px]">
                  {/* Background track */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-zinc-800 rounded-full" />
                  
                  {/* Animated progress fill */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full transition-all duration-300 ease-out"
                    style={{ height: `${scrollProgress * 100}%` }}
                  />

                  {/* Phase dots */}
                  {phases.map((phase, index) => {
                    const dotPosition = (index / (phases.length - 1)) * 100;
                    const isActive = index <= activePhase;
                    const isCurrent = index === activePhase;

                    return (
                      <div
                        key={phase.id}
                        className="absolute left-1/2 -translate-x-1/2 transition-all duration-300"
                        style={{ top: `${dotPosition}%` }}
                      >
                        <div
                          className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                            isActive
                              ? "bg-blue-600 border-blue-600 scale-125"
                              : "bg-zinc-900 border-zinc-700"
                          } ${isCurrent ? "ring-4 ring-blue-600/30" : ""}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right - Phase Cards */}
              <div className="lg:col-span-11 space-y-8">
                {phases.map((phase, index) => {
                  const isActive = index <= activePhase;
                  const isCurrent = index === activePhase;

                  return (
                    <div
                      key={phase.id}
                      ref={(el) => { phaseRefs.current[index] = el; }}
                      className={`relative bg-zinc-900 rounded-2xl border p-8 lg:p-10 transition-all duration-500 ${
                        isCurrent
                          ? "border-blue-600/50 shadow-2xl shadow-blue-600/10"
                          : isActive
                          ? "border-zinc-700"
                          : "border-zinc-800 opacity-60"
                      }`}
                    >
                      {/* Mobile progress indicator */}
                      <div className="lg:hidden flex items-center gap-3 mb-6">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                            isActive ? "bg-blue-600" : "bg-zinc-800"
                          }`}
                        >
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-blue-600 transition-all duration-500 ${
                              isActive ? "w-full" : "w-0"
                            }`}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Icon */}
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                            isActive ? "bg-blue-600/20" : "bg-zinc-800"
                          }`}
                        >
                          <phase.icon
                            className={`w-8 h-8 transition-colors ${
                              isActive ? "text-blue-500" : "text-zinc-500"
                            }`}
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                            <span className="text-sm text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
                              {phase.duration}
                            </span>
                          </div>
                          <p className="text-zinc-400 text-lg mb-6">{phase.description}</p>

                          {/* Details */}
                          <ul className="space-y-3">
                            {phase.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-3">
                                <CheckCircle
                                  className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors ${
                                    isActive ? "text-blue-500" : "text-zinc-600"
                                  }`}
                                />
                                <span className="text-zinc-300">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              We work with modern, battle-tested technologies to build fast and reliable websites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "PostgreSQL",
              "Vercel",
              "AWS",
              "Figma",
              "Sanity",
              "Stripe",
              "Prisma",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center hover:border-blue-600/50 transition-colors"
              >
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Let&apos;s discuss your project and create a website that drives results.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/25"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}

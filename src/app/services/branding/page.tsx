"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Compass, Target, Paintbrush, BookOpen, CheckCircle } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const phases = [
  {
    id: "strategy",
    title: "Strategy",
    icon: Compass,
    description: "We define your brand's foundation—who you are and what you stand for.",
    details: [
      "Brand audit and competitive landscape analysis",
      "Mission, vision, and values definition",
      "Brand personality and voice development",
      "Target audience personas and insights",
      "Unique value proposition crafting",
      "Brand positioning statement",
    ],
    duration: "1-2 weeks",
  },
  {
    id: "identity",
    title: "Visual Identity",
    icon: Target,
    description: "We create the visual language that brings your brand to life.",
    details: [
      "Logo design with multiple concepts",
      "Color palette selection with psychology insights",
      "Typography system (primary and secondary fonts)",
      "Photography and illustration style direction",
      "Iconography and graphic elements",
      "Pattern and texture library",
    ],
    duration: "2-3 weeks",
  },
  {
    id: "application",
    title: "Application",
    icon: Paintbrush,
    description: "We show how your brand comes to life across all touchpoints.",
    details: [
      "Business card and stationery design",
      "Social media templates and guidelines",
      "Email signature and presentation templates",
      "Signage and environmental graphics direction",
      "Packaging design concepts (if applicable)",
      "Website design direction",
    ],
    duration: "1-2 weeks",
  },
  {
    id: "guidelines",
    title: "Brand Book",
    icon: BookOpen,
    description: "You receive a comprehensive guide to maintain brand consistency.",
    details: [
      "Complete brand guidelines document (50+ pages)",
      "Logo usage rules and clear space requirements",
      "Color specifications (HEX, RGB, CMYK, Pantone)",
      "Typography hierarchy and usage examples",
      "Tone of voice guidelines with writing examples",
      "Do's and don'ts with visual examples",
      "Digital asset library with all source files",
    ],
    duration: "1 week",
  },
];

export default function BrandingPage() {
  const [activePhase, setActivePhase] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const windowHeight = window.innerHeight;

      const scrollStart = windowHeight * 0.3;
      const scrollEnd = -timelineHeight + windowHeight * 0.7;

      if (timelineTop <= scrollStart && timelineTop >= scrollEnd) {
        const progress = (scrollStart - timelineTop) / (scrollStart - scrollEnd);
        setScrollProgress(Math.min(Math.max(progress, 0), 1));

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
              Branding Strategy
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Brands That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
                Resonate
              </span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              A great brand is more than a logo. We create comprehensive brand identities 
              that connect with your audience and differentiate you from the competition.
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
              How We Build Your Brand
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              A strategic approach that ensures your brand is cohesive, memorable, and effective.
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              {/* Left - Progress Bar */}
              <div className="hidden lg:block lg:col-span-1">
                <div className="sticky top-32 h-[400px]">
                  <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-zinc-800 rounded-full" />
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full transition-all duration-300 ease-out"
                    style={{ height: `${scrollProgress * 100}%` }}
                  />

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

                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                            <span className="text-sm text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
                              {phase.duration}
                            </span>
                          </div>
                          <p className="text-zinc-400 text-lg mb-6">{phase.description}</p>

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

      {/* Brand Elements Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What&apos;s Included in Your Brand
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              A complete brand identity system that covers every touchpoint.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Brand Strategy",
                items: ["Mission & Vision", "Brand Values", "Positioning", "Voice & Tone"],
              },
              {
                title: "Visual Identity",
                items: ["Logo Suite", "Color System", "Typography", "Imagery Style"],
              },
              {
                title: "Applications",
                items: ["Business Cards", "Social Templates", "Presentations", "Stationery"],
              },
              {
                title: "Guidelines",
                items: ["Brand Book", "Usage Rules", "Asset Library", "Quick Reference"],
              },
            ].map((category) => (
              <div
                key={category.title}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
              >
                <h3 className="text-white font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-zinc-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Build a Brand That Lasts?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Let&apos;s create a cohesive brand identity that tells your story and connects with your audience.
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

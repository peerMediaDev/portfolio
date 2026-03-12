"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Search, PenTool, Layers, Send, CheckCircle } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const phases = [
  {
    id: "discover",
    title: "Discovery",
    icon: Search,
    description: "We dive deep into your brand to understand what makes you unique.",
    details: [
      "Brand questionnaire to understand your vision, values, and goals",
      "Competitor analysis to identify opportunities for differentiation",
      "Target audience research to ensure your logo resonates",
      "Mood board creation to align on visual direction",
      "Industry trend analysis while maintaining timeless appeal",
    ],
    duration: "3-5 days",
  },
  {
    id: "concept",
    title: "Concept",
    icon: PenTool,
    description: "We explore multiple creative directions to find your perfect mark.",
    details: [
      "Hand-sketching initial concepts and ideas",
      "3-5 unique logo concepts presented",
      "Typography exploration and custom lettering options",
      "Color palette recommendations with psychology insights",
      "Feedback session to refine direction",
    ],
    duration: "1-2 weeks",
  },
  {
    id: "refine",
    title: "Refinement",
    icon: Layers,
    description: "We polish your chosen concept to pixel-perfect precision.",
    details: [
      "Detailed refinement of the selected concept",
      "Typography fine-tuning and kerning adjustments",
      "Color variations (full color, black, white, grayscale)",
      "Size testing from favicon to billboard scale",
      "Up to 3 rounds of revisions included",
    ],
    duration: "1 week",
  },
  {
    id: "deliver",
    title: "Delivery",
    icon: Send,
    description: "You receive a complete brand asset package ready for any use.",
    details: [
      "Vector files (AI, EPS, SVG) for infinite scalability",
      "Raster files (PNG, JPG) in multiple sizes",
      "Brand guidelines document with usage rules",
      "Color codes (HEX, RGB, CMYK, Pantone)",
      "Favicon and social media optimized versions",
      "Source files for future modifications",
    ],
    duration: "2-3 days",
  },
];

export default function LogoDesignPage() {
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
              Logo Design
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Logos That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
                Stand Out
              </span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              Your logo is the face of your brand. We create distinctive, memorable marks 
              that capture your essence and leave a lasting impression.
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
              How We Create Your Logo
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              A thoughtful design process that ensures your logo is both beautiful and strategic.
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

      {/* What You Get Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What&apos;s Included
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Every logo package comes with everything you need to launch your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Vector Files",
                description: "AI, EPS, and SVG formats for perfect scaling at any size",
              },
              {
                title: "Web-Ready Files",
                description: "PNG and JPG in multiple resolutions for digital use",
              },
              {
                title: "Brand Guidelines",
                description: "Documentation on proper logo usage and spacing",
              },
              {
                title: "Color Variations",
                description: "Full color, black, white, and grayscale versions",
              },
              {
                title: "Social Media Kit",
                description: "Optimized versions for all major social platforms",
              },
              {
                title: "Favicon Pack",
                description: "Browser icons in all required sizes",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-600/50 transition-colors"
              >
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for a Logo That Represents You?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Let&apos;s create a mark that tells your story and stands the test of time.
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

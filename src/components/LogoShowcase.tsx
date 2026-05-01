"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Logo {
  id: number;
  name: string;
  description: string;
  size: string;
  initials: string;
  details: string;
  services: string[];
  year: string;
  image?: string;
}

export default function LogoShowcase() {
  const [selectedLogo, setSelectedLogo] = useState<Logo | null>(null);

  const logos: Logo[] = [
    { 
      id: 1, 
      name: "Fiddlers Coffee", 
      description: "Logo stickers and branding", 
      size: "large",
      initials: "FC",
      details: "Complete brand identity for a local artisan coffee roaster, focusing on warmth and craftsmanship.",
      services: ["Logo Design", "Sticker Design", "Brand Guidelines", "Packaging Design"],
      year: "2024",
      image: "/logos/fiddlers-coffee.jpg"
    },
    { 
      id: 2, 
      name: "Classic Fabrication and Auto", 
      description: "Custom shirt logos and banners", 
      size: "medium",
      initials: "CF",
      details: "Bold automotive branding for a custom fabrication shop specializing in classic car restoration.",
      services: ["Logo Design", "Shirt Printing", "Banner Design", "Vehicle Wraps"],
      year: "2024"
    },
    { 
      id: 3, 
      name: "Create and Fabricate", 
      description: "Branding and design services", 
      size: "medium",
      initials: "CF",
      details: "Modern maker-space branding that celebrates creativity and hands-on craftsmanship.",
      services: ["Brand Identity", "Logo Design", "Marketing Materials", "Social Media Assets"],
      year: "2023"
    },
    { 
      id: 4, 
      name: "South Sound Paint Pros", 
      description: "Residential and commercial painting", 
      size: "small",
      initials: "SS",
      details: "Professional painting contractor branding with a focus on trust and quality workmanship.",
      services: ["Logo Design", "Business Cards", "Vehicle Graphics", "Signage"],
      year: "2023"
    },
    { 
      id: 5, 
      name: "Tutorflit", 
      description: "SaaS Logo design and branding", 
      size: "small",
      initials: "TF",
      details: "Dynamic SaaS platform branding for an innovative tutoring marketplace connecting students with educators.",
      services: ["Logo Design", "Brand Strategy", "UI/UX Design", "Marketing Website"],
      year: "2024"
    },
    { 
      id: 6, 
      name: "E-commerce Brand", 
      description: "E-commerce brand", 
      size: "small",
      initials: "EC",
      details: "Sleek e-commerce identity designed for scalability and digital-first customer experience.",
      services: ["Logo Design", "Brand Guidelines", "Packaging", "Website Design"],
      year: "2023"
    },
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
          <div className="col-span-2 row-span-2 group cursor-pointer" onClick={() => setSelectedLogo(logos[0])}>
            {/* 
              ============================================================
              [LOGO PLACEHOLDER 1] - Large featured logo
              Replace with your best logo work
              Example: <Image src="/logos/logo1.png" alt="TechVision Logo" fill className="object-contain p-12" />
              ============================================================
            */}
            <div className="relative h-full min-h-[300px] lg:min-h-[400px] bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden transition-all duration-500 hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-600/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {logos[0].image ? (
                <Image
                  src={logos[0].image}
                  alt={logos[0].name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="flex items-center justify-center h-full p-8">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-zinc-800 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500">
                      <span className="text-4xl font-bold text-blue-500">{logos[0].initials}</span>
                    </div>
                    <p className="text-zinc-600 text-sm">Click to view details</p>
                  </div>
                </div>
              )}
              {/* Hover overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-lg">{logos[0].name}</h3>
                <p className="text-zinc-400 text-sm">{logos[0].description}</p>
              </div>
            </div>
          </div>

          {/* Medium items */}
          {logos.slice(1, 3).map((logo) => (
            <div key={logo.id} className="col-span-1 group cursor-pointer" onClick={() => setSelectedLogo(logo)}>
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
                      <span className="text-xl font-bold text-blue-500">{logo.initials}</span>
                    </div>
                    <p className="text-zinc-600 text-xs">Click to view</p>
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
            <div key={logo.id} className="col-span-1 group cursor-pointer" onClick={() => setSelectedLogo(logo)}>
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
                      <span className="text-lg font-bold text-blue-500">{logo.initials}</span>
                    </div>
                    <p className="text-zinc-600 text-xs hidden sm:block">Click to view</p>
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
          <div className="col-span-2 md:col-span-2 group cursor-pointer" onClick={() => setSelectedLogo(logos[5])}>
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
                    <span className="text-2xl font-bold text-blue-500">{logos[5].initials}</span>
                  </div>
                  <p className="text-zinc-600 text-sm">Click to view details</p>
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

      {/* Modal */}
      {selectedLogo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm"
          onClick={() => setSelectedLogo(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl shadow-blue-600/10 animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedLogo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-zinc-800/80 hover:bg-zinc-700 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top half - Logo Display */}
            <div className="relative h-48 sm:h-64 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
              {selectedLogo.image ? (
                <Image
                  src={selectedLogo.image}
                  alt={`${selectedLogo.name} logo design by PeerMedia`}
                  fill
                  className="object-contain p-4"
                />
              ) : (
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-zinc-800 rounded-2xl flex items-center justify-center border border-zinc-700">
                  <span className="text-4xl sm:text-5xl font-bold text-blue-500">{selectedLogo.initials}</span>
                </div>
              )}
            </div>

            {/* Bottom half - Info */}
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{selectedLogo.name}</h3>
                  <p className="text-blue-500 text-sm font-medium">{selectedLogo.year}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                {selectedLogo.details}
              </p>

              {/* Services - Bullet Points */}
              <div>
                <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Services Provided</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {selectedLogo.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-zinc-800">
                <a
                  href="#contact"
                  onClick={() => setSelectedLogo(null)}
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors"
                >
                  Start a similar project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

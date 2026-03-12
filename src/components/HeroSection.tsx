import { ArrowRight, Rocket } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero_section.png"
          alt="PeerMedia Hero"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient fade at bottom - blends into zinc-950 */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-zinc-950/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Building the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
              Digital Future
            </span>{" "}
            of Your Brand
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            We transform visionary ideas into stunning digital experiences. From captivating websites to iconic brand identities, we create what matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/25 hover:-translate-y-0.5"
            >
              Explore Our Work
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#software"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900/80 backdrop-blur-sm hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-600 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300"
            >
              <Rocket className="w-5 h-5 text-blue-500" />
              Discover Our SaaS
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

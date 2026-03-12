import { Globe, Palette, Layers } from "lucide-react";

export default function ServicesSection() {
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

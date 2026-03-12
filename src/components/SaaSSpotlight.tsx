import { ArrowRight, Rocket, BarChart3, Users, Shield, Zap } from "lucide-react";

export default function SaaSSpotlight() {
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
            Introducing <span className="text-blue-500">tutorflit</span>
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
                href="https://www.tutorflit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
              {/* <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-600 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
              >
                View Documentation
              </a> */}
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="order-1 lg:order-2">
            {/* 
              ============================================================
              [DASHBOARD PREVIEW PLACEHOLDER] - Replace with your SaaS product screenshot
              Recommended: A polished screenshot or mockup of your dashboard
              Example: <Image src="/dashboard-preview.png" alt="tutorflit Dashboard" fill className="object-cover rounded-xl" />
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
                      app.tutorflit.io
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

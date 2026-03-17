import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// This would typically come from a CMS or database
const blogPosts = [
  {
    slug: "why-next-js-is-perfect-for-business-websites",
    title: "Why Next.js is Perfect for Business Websites in 2026",
    excerpt:
      "Discover why Next.js has become the go-to framework for building fast, SEO-friendly business websites that convert visitors into customers.",
    image: "/blog/nextjs-business.jpg",
    category: "Web Development",
    author: "Mason Caird",
    date: "March 10, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "logo-design-trends-2026",
    title: "Logo Design Trends to Watch in 2026",
    excerpt:
      "From minimalist designs to dynamic logos, explore the top logo design trends shaping brand identities this year.",
    image: "/blog/logo-trends.jpg",
    category: "Logo Design",
    author: "Krista Caird",
    date: "March 5, 2026",
    readTime: "4 min read",
    featured: true,
  },
  {
    slug: "building-brand-identity-from-scratch",
    title: "Building a Brand Identity from Scratch: A Complete Guide",
    excerpt:
      "Learn the step-by-step process of creating a cohesive brand identity that resonates with your target audience.",
    image: "/blog/brand-identity.jpg",
    category: "Branding",
    author: "Krista Caird",
    date: "February 28, 2026",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "website-speed-optimization-tips",
    title: "10 Website Speed Optimization Tips That Actually Work",
    excerpt:
      "Boost your website performance with these proven optimization techniques that improve user experience and SEO rankings.",
    image: "/blog/speed-optimization.jpg",
    category: "Web Development",
    author: "Mason Caird",
    date: "February 20, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "importance-of-responsive-design",
    title: "Why Responsive Design is Non-Negotiable in 2026",
    excerpt:
      "With mobile traffic dominating the web, responsive design isn't just nice to have—it's essential for business success.",
    image: "/blog/responsive-design.jpg",
    category: "Web Development",
    author: "Mason Caird",
    date: "February 15, 2026",
    readTime: "4 min read",
    featured: false,
  },
  {
    slug: "color-psychology-in-branding",
    title: "Color Psychology in Branding: How Colors Influence Perception",
    excerpt:
      "Understand how different colors evoke emotions and learn to choose the perfect palette for your brand.",
    image: "/blog/color-psychology.jpg",
    category: "Branding",
    author: "Krista Caird",
    date: "February 10, 2026",
    readTime: "5 min read",
    featured: false,
  },
];

const categories = ["All", "Web Development", "Logo Design", "Branding"];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-zinc-950 pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-blue-500 font-semibold text-sm tracking-wider uppercase mb-4">
                Our Blog
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Insights &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
                  Resources
                </span>
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed">
                Tips, trends, and insights on web development, design, and
                branding to help your business grow.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:border-blue-600/50 transition-all duration-300"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-zinc-600 text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-blue-500 text-sm font-medium mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-zinc-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">
              Recent Articles
            </h2>
            <div className="text-center py-12">
              <p className="text-zinc-400">
                More articles coming soon. Check back later!
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-zinc-400 mb-8">
              Get the latest insights on web development, design, and branding
              delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-600 transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const recentPosts = [
  {
    slug: "why-next-js-is-perfect-for-business-websites",
    title: "Why Next.js is Perfect for Business Websites in 2026",
    excerpt:
      "Discover why Next.js has become the go-to framework for building fast, SEO-friendly business websites.",
    category: "Web Development",
    date: "March 10, 2026",
    readTime: "5 min read",
  },
  {
    slug: "logo-design-trends-2026",
    title: "Logo Design Trends to Watch in 2026",
    excerpt:
      "From minimalist designs to dynamic logos, explore the top logo design trends shaping brand identities.",
    category: "Logo Design",
    date: "March 5, 2026",
    readTime: "4 min read",
  },
  {
    slug: "building-brand-identity-from-scratch",
    title: "Building a Brand Identity from Scratch",
    excerpt:
      "Learn the step-by-step process of creating a cohesive brand identity that resonates with your audience.",
    category: "Branding",
    date: "February 28, 2026",
    readTime: "8 min read",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 lg:py-32 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-500 font-semibold text-sm tracking-wider uppercase mb-4">
            From Our Blog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Tips, trends, and insights on web development, design, and branding
            to help your business grow.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden hover:border-blue-600/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-colors" />
                <div className="absolute bottom-3 left-3">
                  <span className="inline-block bg-blue-600/90 text-white text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-zinc-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-semibold transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

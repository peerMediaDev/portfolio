import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Metadata } from "next";

// This would typically come from a CMS
const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}> = {
  "why-next-js-is-perfect-for-business-websites": {
    title: "Why Next.js is Perfect for Business Websites in 2026",
    excerpt: "Discover why Next.js has become the go-to framework for building fast, SEO-friendly business websites that convert visitors into customers.",
    content: `
## Introduction

In the ever-evolving landscape of web development, choosing the right framework can make or break your online presence. Next.js has emerged as the clear leader for business websites, and for good reason.

## Speed That Converts

Studies show that a 1-second delay in page load time can result in a 7% reduction in conversions. Next.js delivers:

- **Automatic code splitting** - Only load what's needed
- **Image optimization** - Built-in next/image component
- **Static generation** - Pre-rendered pages at build time
- **Edge caching** - Content delivered from the nearest server

## SEO Built-In

Unlike traditional React apps, Next.js provides:

### Server-Side Rendering
Search engines can crawl your content immediately, without waiting for JavaScript to execute.

### Metadata API
Easily manage titles, descriptions, and Open Graph tags with the built-in Metadata API.

### Automatic Sitemaps
Generate sitemaps dynamically with just a few lines of code.

## Developer Experience

Next.js makes developers more productive with:

1. **File-based routing** - No complex router configuration
2. **API routes** - Build your backend in the same project
3. **TypeScript support** - First-class TypeScript integration
4. **Hot reloading** - See changes instantly

## Real-World Performance

Our clients have seen remarkable improvements after switching to Next.js:

- **40% faster page loads** on average
- **25% improvement** in Core Web Vitals scores
- **15% increase** in organic search traffic

## Conclusion

For businesses looking to create a fast, SEO-friendly, and maintainable website, Next.js is the clear choice. Its combination of performance, developer experience, and built-in optimizations make it perfect for modern business needs.

Ready to build your Next.js website? [Contact us](/contact) for a free consultation.
    `,
    category: "Web Development",
    author: "Mason Caird",
    date: "March 10, 2026",
    readTime: "5 min read",
  },
  "logo-design-trends-2026": {
    title: "Logo Design Trends to Watch in 2026",
    excerpt: "From minimalist designs to dynamic logos, explore the top logo design trends shaping brand identities this year.",
    content: `
## The Evolution of Logo Design

Logo design continues to evolve with technology and cultural shifts. Here are the trends defining 2026.

## 1. Minimalist Geometry

Clean geometric shapes are dominating brand identities. Think simple circles, squares, and triangles that convey complex ideas through simplicity.

## 2. Dynamic Logos

Static logos are giving way to adaptive designs that:
- Change based on context
- Animate for digital platforms
- Maintain recognition across variations

## 3. Gradient Renaissance

Gradients are back, but more sophisticated:
- Subtle color transitions
- 3D depth effects
- Brand-specific color journeys

## 4. Negative Space Mastery

The clever use of negative space creates:
- Hidden meanings
- Visual intrigue
- Memorable marks

## 5. Hand-Drawn Elements

Authenticity matters. Hand-drawn logos convey:
- Human touch
- Craftsmanship
- Uniqueness

## Applying These Trends

Not every trend suits every brand. The key is finding what resonates with your audience and values.

[Get a custom logo design](/services/logo-design) that stands the test of time.
    `,
    category: "Logo Design",
    author: "Krista Caird",
    date: "March 5, 2026",
    readTime: "4 min read",
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-zinc-950 pt-32 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
            <p className="text-zinc-400 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/blog" className="text-blue-500 hover:text-blue-400">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-zinc-950 pt-24">
        <article className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category */}
            <span className="inline-block text-blue-500 font-semibold text-sm tracking-wider uppercase mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-8 pb-8 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-ul:text-zinc-300 prose-ol:text-zinc-300 prose-li:marker:text-blue-500">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-bold text-white mt-8 mb-3">{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('- **')) {
                  return (
                    <li key={index} className="text-zinc-300 ml-4 list-disc">
                      <strong className="text-white">{paragraph.match(/\*\*(.*?)\*\*/)?.[1]}</strong>
                      {paragraph.replace(/- \*\*.*?\*\*/, '').replace(' - ', ' — ')}
                    </li>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return <li key={index} className="text-zinc-300 ml-4 list-disc">{paragraph.replace('- ', '')}</li>;
                }
                if (paragraph.match(/^\d\. /)) {
                  return <li key={index} className="text-zinc-300 ml-4 list-decimal">{paragraph.replace(/^\d\. /, '')}</li>;
                }
                if (paragraph.trim() === '') return null;
                return <p key={index} className="text-zinc-300 leading-relaxed mb-4">{paragraph}</p>;
              })}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-zinc-800">
              <div className="flex items-center gap-4">
                <span className="text-zinc-400 text-sm">Share this article:</span>
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-700 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-700 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-700 transition-colors">
                    <LinkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-zinc-400 mb-6">
              Let&apos;s discuss how we can help bring your vision to life.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

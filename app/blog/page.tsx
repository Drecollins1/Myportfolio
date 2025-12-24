// app/blog/page.tsx
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, AlertCircle } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      title: "React 19.0.0-rc Pulled: What Happened and Lessons Learned",
      description:
        "A critical security vulnerability was discovered in the React 19 release candidate, leading to an immediate yank from npm. Here's what went wrong and how the React team responded.",
      date: "Dec 20, 2025",
      readTime: "7 min read",
      highlight: true,
    },
    {
      title: "Next.js 15: The Biggest Changes You Need to Know",
      description:
        "Partial Prerendering, improved caching, React 19 support, and Turbopack advancements — breaking down what's new and how it affects your apps.",
      date: "Dec 10, 2025",
      readTime: "10 min read",
    },
    {
      title: "The State of Web Performance in 2025",
      description:
        "Core Web Vitals updates, INP replacing FID, real-world data from millions of sites, and practical tips to stay ahead in Google's rankings.",
      date: "Dec 5, 2025",
      readTime: "9 min read",
    },
    {
      title: "Building Truly Accessible Forms: Beyond ARIA Labels",
      description:
        "Real-world patterns for error handling, focus management, live regions, and testing accessibility with screen readers in modern React apps.",
      date: "Nov 28, 2025",
      readTime: "8 min read",
    },
    {
      title: "Tailwind CSS in 2025: New Features and Best Practices",
      description:
        "Oxide engine, container queries support, improved IntelliSense, and advanced animation techniques using only Tailwind classes.",
      date: "Nov 15, 2025",
      readTime: "6 min read",
    },
    {
      title: "Why Your Lighthouse Score Lies (And What to Measure Instead)",
      description:
        "The gap between lab data and field data, why TTFB matters more than ever, and tools to measure real user experience.",
      date: "Nov 8, 2025",
      readTime: "11 min read",
    },
  ];

  return (
    <main className="container relative mx-auto max-w-5xl px-6 py-16 md:py-24">
      {/* Back to Home */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="size-4" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      {/* Header */}
      <div className="mb-12">
        <h1 className="bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl mb-4">
          Blog
        </h1>
        <p className="text-lg text-zinc-300/90 max-w-3xl">
          Thoughts on React, Next.js, performance, accessibility, and the future of frontend development.
        </p>
      </div>

      {/* Featured Alert for React Hack */}
      <div className="mb-10 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 backdrop-blur">
        <div className="flex items-start gap-4">
          <AlertCircle className="size-6 text-amber-400 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-white mb-1">Security Alert</h3>
            <p className="text-zinc-300 text-sm">
              React 19.0.0-rc was temporarily pulled from npm due to a vulnerability in the new automatic batching behavior. 
              The issue has been fixed in subsequent releases. Always verify package integrity before upgrading.
            </p>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post, index) => (
          <Card
            key={index}
            className={`
              group overflow-hidden border-white/10 bg-white/5 backdrop-blur 
              transition-all duration-300 hover:border-white/20 hover:bg-white/10 
              hover:shadow-xl hover:shadow-emerald-500/10
              ${post.highlight ? "ring-2 ring-emerald-500/50" : ""}
            `}
          >
            <CardHeader className="pb-4">
              {post.highlight && (
                <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-300 bg-emerald-500/20 rounded-full mb-3">
                  Latest
                </span>
              )}
              <CardTitle className="line-clamp-3 text-xl leading-tight text-white group-hover:text-emerald-300 transition-colors">
                {post.title}
              </CardTitle>
              <CardDescription className="line-clamp-3 mt-3 text-zinc-300">
                {post.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex items-center gap-4 text-sm text-zinc-400 mb-5">
                <div className="flex items-center gap-1">
                  <Calendar className="size-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="size-4" />
                  {post.readTime}
                </div>
              </div>

              <span className="inline-flex items-center gap-2 text-emerald-400 font-medium group-hover:translate-x-2 transition-transform">
                Read article
                <ArrowLeft className="size-4 rotate-180" />
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-16 text-center">
        <p className="text-zinc-500 text-sm">
          More in-depth articles coming soon. Currently focused on shipping great products.
        </p>
      </div>
    </main>
  );
}
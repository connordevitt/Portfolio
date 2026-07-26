import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { POSTS, postUrl } from "../../content/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Essays and longer-form thoughts from Connor Devitt on software development, platforms, security, and the open web.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "Blog | Connor Devitt",
    description:
      "Essays and longer-form thoughts from Connor Devitt on software development, platforms, security, and the open web.",
    url: "/blog/",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 pb-20">
        <section>
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-10">
              Blog
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed mb-10">
              Essays and longer-form thoughts on software development, security,
              and the open web.
            </p>

            <div className="space-y-6">
              {POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="bg-background/60 border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <p className="text-sm text-foreground/60 mb-2">
                    {post.date} · {post.readTime}
                  </p>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    {post.title}
                  </h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={postUrl(post)}
                    className="text-primary font-medium hover:underline"
                  >
                    Read post →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

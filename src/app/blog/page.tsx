import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
              Essays and longer-form thoughts on software development, platforms,
              and the open web.
            </p>

            <div className="space-y-6">
              <article className="bg-background/60 border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <p className="text-sm text-foreground/60 mb-2">
                  March 2026 · 5 min read
                </p>
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Why Can&apos;t I Just Build One App?
                </h2>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  The hidden cost of Apple and Google&apos;s walled gardens, and
                  why developers still have to build the same app twice.
                </p>
                <Link
                  href="/blog/walled-gardens"
                  className="text-primary font-medium hover:underline"
                >
                  Read essay →
                </Link>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

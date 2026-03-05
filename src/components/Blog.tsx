import Link from "next/link";

interface BlogPost {
  title: string;
  description: string;
  url: string;
  date: string;
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      title: "Why Can't I Just Build One App?",
      description:
        "An essay on walled gardens, mobile platforms, and why developers still rebuild the same app twice.",
      url: "/blog/walled-gardens",
      date: "March 2026 · 5 min read",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Blog
        </h2>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-background/50 border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <p className="text-sm text-foreground/60 mb-2">{post.date}</p>
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {post.title}
              </h3>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                {post.description}
              </p>
              <Link
                href={post.url}
                target={post.url.startsWith("http") ? "_blank" : undefined}
                rel={
                  post.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-primary font-medium hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


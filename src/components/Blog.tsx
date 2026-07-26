import Link from "next/link";
import { POSTS, postUrl } from "../content/posts";

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-background/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Blog
        </h2>

        <div className="space-y-6">
          {POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-background/50 border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <p className="text-sm text-foreground/60 mb-2">
                {post.date} · {post.readTime}
              </p>
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {post.title}
              </h3>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                href={postUrl(post)}
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

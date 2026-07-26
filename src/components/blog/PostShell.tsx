"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import ThemeToggle from "../ThemeToggle";
import BlockRenderer from "./BlockRenderer";
import type { Block, PostMeta } from "../../content/posts";

interface PostShellProps {
  post: PostMeta;
  blocks: readonly Block[];
}

export default function PostShell({ post, blocks }: PostShellProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    let frame = 0;
    const update = () => {
      frame = 0;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0
      );
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="blog-post">
      <div
        className="blog-progress"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollProgress)}
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="blog-nav">
        <Link href="/" className="blog-nav-logo">
          CD
        </Link>
        <div className="blog-nav-right">
          <Link href="/blog" className="blog-nav-back">
            ← All Posts
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      <header className={`blog-hero ${isVisible ? "visible" : ""}`}>
        <p className="blog-hero-label">{post.category}</p>
        <h1 className="blog-hero-title">{post.title}</h1>
        {post.subtitle && (
          <p className="blog-hero-subtitle">{post.subtitle}</p>
        )}
        <div className="blog-hero-rule" />
        <div className="blog-hero-meta">
          <span>Connor Devitt</span>
          <span className="dot" />
          <span>{post.date}</span>
          <span className="dot" />
          <span>{post.readTime}</span>
        </div>
      </header>

      <article className="blog-article">
        <BlockRenderer blocks={blocks} />
      </article>

      <Footer />
    </div>
  );
}

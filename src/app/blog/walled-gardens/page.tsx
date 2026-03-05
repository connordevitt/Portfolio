"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import ThemeToggle from "../../../components/ThemeToggle";

const post = {
  title: "Why Can\u2019t I Just Build One App?",
  subtitle: "The Walled Gardens Nobody Talks About",
  author: "Connor Devitt",
  date: "March 2026",
  readTime: "5 min read",
  content: [
    {
      type: "intro",
      text: "One of those questions stopped me in my tracks recently: why do developers have to build the same app twice?",
    },
    {
      type: "paragraph",
      text: "Let me explain what I mean.",
    },
    {
      type: "heading",
      text: "The Double Build Problem",
    },
    {
      type: "paragraph",
      text: "If you want your app on both the Apple App Store and the Google Play Store (and let\u2019s be honest, you do) you\u2019re looking at building two entirely separate versions of the same product.",
    },
    {
      type: "paragraph",
      text: "Apple\u2019s ecosystem runs on Swift. Google\u2019s runs on Kotlin. Two different languages, two different codebases, two different teams. The app looks identical to the person using it, but behind the scenes it has been rebuilt from the ground up. Twice.",
    },
    {
      type: "paragraph",
      text: "Coming from a web background, this felt bizarre to me. On the web, you write your HTML, CSS, and JavaScript once. It runs on Chrome, Firefox, Safari, and Edge, on a Mac, a PC, or a phone. The open standard of the web means you build it once and it just works.",
    },
    {
      type: "paragraph",
      text: "So why is mobile so different?",
    },
    {
      type: "heading",
      text: "Walled Gardens and Who Benefits",
    },
    {
      type: "paragraph",
      text: "The answer, when you dig into it, isn\u2019t really technical. It\u2019s financial.",
    },
    {
      type: "paragraph",
      text: "Apple and Google built their mobile platforms independently, with different architectures and different philosophies. That\u2019s fair enough, competition drives innovation. But here\u2019s the thing: they have very little incentive to change the status quo, because the status quo makes them an enormous amount of money.",
    },
    {
      type: "paragraph",
      text: "Apple\u2019s App Store facilitates hundreds of billions in transactions every year. They take between 15 to 30% of every purchase made through it. If developers could easily build one app that bypassed the need for native development, the tight grip Apple and Google hold over their ecosystems would loosen significantly. Developers might stop caring which platform their users are on. And that would cost both companies dearly.",
    },
    {
      type: "paragraph",
      text: "There\u2019s even a technology called Progressive Web Apps (PWAs), essentially websites that can be installed on your phone and behave like native apps, no app store required. Google has embraced them reasonably well. Apple? They\u2019ve quietly and consistently limited PWA capabilities on iOS for years. Draw your own conclusions.",
    },
    {
      type: "heading",
      text: "The Frameworks Trying to Fix It",
    },
    {
      type: "paragraph",
      text: "To be fair, the developer community hasn\u2019t just accepted this sitting down. Frameworks like Flutter (by Google) and React Native (by Meta) exist precisely to solve this problem: write your app once, deploy it to both platforms.",
    },
    {
      type: "paragraph",
      text: "Flutter uses a language called Dart. React Native lets you use JavaScript and TypeScript, languages millions of web developers already know. Together, they account for over 80% of the cross-platform development market, and their popularity keeps growing.",
    },
    {
      type: "paragraph",
      text: "But even these solutions are workarounds, not fixes. You\u2019re still operating inside Apple and Google\u2019s rules. You still need their approval. You still pay their cut. The walls are just slightly easier to navigate.",
    },
    {
      type: "heading",
      text: "The Web Was Built Differently, On Purpose",
    },
    {
      type: "paragraph",
      text: "Here\u2019s what really puts this in perspective for me: the inventor of the World Wide Web, Tim Berners-Lee, gave it away for free. He could have patented it, owned it, monetised it, and become one of the wealthiest people in history. Instead he made it an open standard so that everyone, every developer, every user, every country, could benefit equally.",
    },
    {
      type: "paragraph",
      text: "That spirit is still alive today in the open source community. Linux powers most of the internet. Python, React, Flutter, and React Native are all free and open source, built by developers who wanted to solve real problems and share the solutions. These tools have genuinely changed the world, not because they made someone rich, but because they were built to be useful.",
    },
    {
      type: "quote",
      text: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
      attribution: "Linus Torvalds, creator of Linux",
    },
    {
      type: "paragraph",
      text: "That\u2019s the culture that built the modern web. Not quarterly earnings targets. Not shareholder reports. Just people who loved building things and wanted to share them.",
    },
    {
      type: "callout",
      text: "Tech should be built for the people, not the shareholders.",
    },
    {
      type: "heading",
      text: "A Better Way Forward",
    },
    {
      type: "paragraph",
      text: "I don\u2019t think Apple and Google are going anywhere. But I do think the tide is slowly turning.",
    },
    {
      type: "paragraph",
      text: "The open source community keeps building better tools. Developers keep pushing for open standards. Regulators in the EU are already forcing Apple to allow alternative app stores. The conversation around platform monopolies is louder than it\u2019s ever been.",
    },
    {
      type: "paragraph",
      text: "And at the end of the day, the best technology in history has always come from people who wanted to make something great, not from boardrooms optimizing for revenue. The developers who built the tools we rely on every day largely still believe that. It\u2019s just a matter of time before the platforms catch up.",
    },
    {
      type: "paragraph",
      text: "In the meantime, I\u2019ll keep learning, keep building, and keep asking the questions that don\u2019t have comfortable answers.",
    },
  ] as const,
};

export default function BlogPost() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .blog-post {
          --accent: #c4421a;
          --muted: #8a7968;
          --rule: #e2ddd6;
          --quote-bg: #f0ebe3;
          --body-text: #2a2018;
          --nav-bg: rgba(255, 255, 255, 0.92);
          font-family: 'Source Serif 4', Georgia, serif;
          font-weight: 300;
          line-height: 1.8;
        }

        html[data-theme="dark"] .blog-nav { background: rgba(10,10,10,0.92); border-color: #3a3a3a; }
        html[data-theme="dark"] .blog-nav-back { color: #e2dbd3; }
        html[data-theme="dark"] .blog-nav-back:hover { color: #e8653e; }
        html[data-theme="dark"] .blog-hero-label { color: #e8653e; }
        html[data-theme="dark"] .blog-hero-subtitle { color: #e2dbd3; }
        html[data-theme="dark"] .blog-hero-meta { color: #e2dbd3; }
        html[data-theme="dark"] .blog-hero-meta .dot { background: #3a3a3a; }
        html[data-theme="dark"] .blog-hero-rule { background: #e8653e; }
        html[data-theme="dark"] .blog-article p { color: #ebe8e5; }
        html[data-theme="dark"] .blog-article p.intro { color: #ebe8e5; border-color: #e8653e; }
        html[data-theme="dark"] .blog-article blockquote { background: #1a1a1a; border-color: #e8653e; }
        html[data-theme="dark"] .blog-article blockquote cite { color: #e2dbd3; }
        html[data-theme="dark"] .blog-article h2::before { background: #e8653e; }
        html[data-theme="dark"] .blog-callout { border-color: #3a3a3a; }
        html[data-theme="dark"] .blog-callout p { color: #e8653e; }
        html[data-theme="dark"] .blog-progress { background: #e8653e; }

        @media (prefers-color-scheme: dark) {
          html:not([data-theme="light"]) .blog-nav { background: rgba(10,10,10,0.92); border-color: #3a3a3a; }
          html:not([data-theme="light"]) .blog-nav-back { color: #e2dbd3; }
          html:not([data-theme="light"]) .blog-nav-back:hover { color: #e8653e; }
          html:not([data-theme="light"]) .blog-hero-label { color: #e8653e; }
          html:not([data-theme="light"]) .blog-hero-subtitle { color: #e2dbd3; }
          html:not([data-theme="light"]) .blog-hero-meta { color: #e2dbd3; }
          html:not([data-theme="light"]) .blog-hero-meta .dot { background: #3a3a3a; }
          html:not([data-theme="light"]) .blog-hero-rule { background: #e8653e; }
          html:not([data-theme="light"]) .blog-article p { color: #ebe8e5; }
          html:not([data-theme="light"]) .blog-article p.intro { color: #ebe8e5; border-color: #e8653e; }
          html:not([data-theme="light"]) .blog-article blockquote { background: #1a1a1a; border-color: #e8653e; }
          html:not([data-theme="light"]) .blog-article blockquote cite { color: #e2dbd3; }
          html:not([data-theme="light"]) .blog-article h2::before { background: #e8653e; }
          html:not([data-theme="light"]) .blog-callout { border-color: #3a3a3a; }
          html:not([data-theme="light"]) .blog-callout p { color: #e8653e; }
          html:not([data-theme="light"]) .blog-progress { background: #e8653e; }
        }

        .blog-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: var(--accent);
          z-index: 100;
          transition: width 0.1s linear;
        }

        .blog-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 1.2rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--nav-bg);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--rule);
          z-index: 50;
        }

        .blog-nav-logo {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 1.1rem;
          color: var(--foreground);
          text-decoration: none;
          letter-spacing: -0.02em;
        }

        .blog-nav-right {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .blog-nav-back {
          font-size: 0.78rem;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .blog-nav-back:hover { color: var(--accent); }

        .blog-hero {
          padding: 9rem 2rem 4rem;
          max-width: 720px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .blog-hero.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .blog-hero-label {
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1.4rem;
          font-weight: 400;
        }

        .blog-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--foreground);
          margin-bottom: 0.6rem;
        }

        .blog-hero-subtitle {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 700;
          font-style: italic;
          color: var(--muted);
          margin-bottom: 2.4rem;
          line-height: 1.3;
        }

        .blog-hero-rule {
          width: 48px;
          height: 2px;
          background: var(--accent);
          margin-bottom: 1.6rem;
        }

        .blog-hero-meta {
          display: flex;
          gap: 1.6rem;
          font-size: 0.78rem;
          color: var(--muted);
          letter-spacing: 0.05em;
          align-items: center;
        }

        .blog-hero-meta span { display: flex; align-items: center; gap: 0.4rem; }

        .blog-hero-meta .dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--rule);
          display: inline-block;
        }

        .blog-article {
          max-width: 680px;
          margin: 0 auto;
          padding: 0 2rem 6rem;
        }

        .blog-article p {
          margin-bottom: 1.6rem;
          font-size: 1rem;
          color: var(--body-text);
        }

        .blog-article p.intro {
          font-size: 1.15rem;
          font-style: italic;
          color: var(--foreground);
          border-left: 3px solid var(--accent);
          padding-left: 1.2rem;
          margin-bottom: 2.4rem;
          line-height: 1.7;
        }

        .blog-article p.bold-para {
          font-weight: 600;
          font-size: 1.05rem;
        }

        .blog-article h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--foreground);
          margin: 3rem 0 1.2rem;
          letter-spacing: -0.02em;
          line-height: 1.25;
        }

        .blog-article h2::before {
          content: '';
          display: block;
          width: 24px;
          height: 2px;
          background: var(--accent);
          margin-bottom: 0.8rem;
        }

        .blog-article blockquote {
          background: var(--quote-bg);
          border-left: 4px solid var(--accent);
          padding: 1.6rem 1.8rem;
          margin: 2.4rem 0;
          border-radius: 0 4px 4px 0;
        }

        .blog-article blockquote p {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.1rem;
          color: var(--foreground);
          margin-bottom: 0.8rem !important;
          line-height: 1.6;
        }

        .blog-article blockquote cite {
          font-size: 0.78rem;
          color: var(--muted);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-style: normal;
        }

        .blog-callout {
          text-align: center;
          padding: 2.4rem 2rem;
          margin: 2.8rem 0;
          border-top: 1px solid var(--rule);
          border-bottom: 1px solid var(--rule);
        }

        .blog-callout p {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          font-weight: 700;
          font-style: italic;
          color: var(--accent);
          margin: 0 !important;
          line-height: 1.3;
        }

        @media (max-width: 600px) {
          .blog-nav { padding: 1rem 1.2rem; }
          .blog-hero { padding: 7rem 1.2rem 3rem; }
          .blog-article { padding: 0 1.2rem 4rem; }
        }
      `}</style>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap"
        rel="stylesheet"
      />

      <div className="blog-post">
        <div
          className="blog-progress"
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
          <p className="blog-hero-label">Essay · Technology</p>
          <h1 className="blog-hero-title">{post.title}</h1>
          <p className="blog-hero-subtitle">{post.subtitle}</p>
          <div className="blog-hero-rule" />
          <div className="blog-hero-meta">
            <span>{post.author}</span>
            <span className="dot" />
            <span>{post.date}</span>
            <span className="dot" />
            <span>{post.readTime}</span>
          </div>
        </header>

        <article className="blog-article">
          {post.content.map((block, i) => {
            if (block.type === "intro") {
              return (
                <p key={i} className="intro">
                  {block.text}
                </p>
              );
            }
            if (block.type === "heading") {
              return <h2 key={i}>{block.text}</h2>;
            }
            if (block.type === "quote") {
              return (
                <blockquote key={i}>
                  <p>{block.text}</p>
                  <cite>{block.attribution}</cite>
                </blockquote>
              );
            }
            if (block.type === "callout") {
              return (
                <div className="blog-callout" key={i}>
                  <p>{block.text}</p>
                </div>
              );
            }
            return (
              <p
                key={i}
                className={
                  "bold" in block && block.bold ? "bold-para" : ""
                }
              >
                {block.text}
              </p>
            );
          })}
        </article>

        <Footer />
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation<HTMLElement>();
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>();
  const { ref: contentRef, isVisible: contentVisible } =
    useScrollAnimation<HTMLDivElement>({
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });
  const { ref: imageRef, isVisible: imageVisible } =
    useScrollAnimation<HTMLDivElement>({
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });

  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Digital Ocean",
    "Git",
    "Tailwind CSS",
    "Bootstrap",
    "SQL",
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-20 bg-background/50 scroll-animate animate-fade-in-up ${
        sectionVisible ? "visible" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-center text-foreground mb-16 scroll-animate animate-fade-in-up ${
              titleVisible ? "visible" : ""
            }`}
          >
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              ref={contentRef}
              className={`scroll-animate animate-slide-in-left ${
                contentVisible ? "visible" : ""
              }`}
            >
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                I&apos;m a passionate full-stack developer with a love for
                creating innovative digital solutions. With experience in modern
                web technologies, I enjoy building applications that make a
                difference.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new
                technologies, playing video games, or watching sports!
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div
              ref={imageRef}
              className={`relative scroll-animate animate-slide-in-right ${
                imageVisible ? "visible" : ""
              }`}
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                  <Image
                    src="./images/ME.jpg"
                    alt="Connor Devitt"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

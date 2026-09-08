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
    "SQL",
    "Burp Suite",
    "Splunk / SIEM",
    "TLS & PKI",
    "CSP & Security Headers",
    "Threat Modeling",
    "Incident Response",
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

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div
              ref={contentRef}
              className={`scroll-animate animate-slide-in-left ${
                contentVisible ? "visible" : ""
              }`}
            >
              <p className="text-foreground/80 mb-4 leading-relaxed">
                I&apos;m a Software Engineer and Technical Support Engineer II.
                I ship production web applications and secure them to
                enterprise standards, treating both as the same job.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                I take on both sides as client work: building applications
                from the ground up, and assessing live ones the way an attacker
                would approach them.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Away from the keyboard, I&apos;m usually chasing down new tech,
                playing video games, or watching sports.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
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
              <div className="w-full aspect-square max-h-[26rem] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="w-4/5 aspect-square bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
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

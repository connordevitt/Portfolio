"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  live: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <div
      ref={ref}
      className={`h-full flex flex-col bg-background/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate animate-fade-in-up ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="h-64 shrink-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground mb-3 min-h-[3.5rem]">
          {project.title}
        </h3>

        <p className="text-foreground/80 mb-4 leading-relaxed line-clamp-4 min-h-[6.5rem]">
          {project.description}
        </p>

        <div className="flex flex-wrap content-start gap-2 mb-6 min-h-[4rem]">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation<HTMLElement>();
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>();

  const projects: Project[] = [
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
      technologies: ["React", "Node.js", "Bootstrap"],
      image: "./images/connors-webpage.png",
      live: "https://connors-webpage.com/landing",
    },
    {
      title: "MLB Standings Tracker",
      description:
        "Whether you're cheering for the Yankees, Cubs, or any other team, you'll find all the information you need right here.",
      technologies: ["React", "TypeScript", "Chart.js", "Bootstrap"],
      image: "./images/MLB_Standings.jpg",
      live: "https://connordevitt.github.io/Reactoria/",
    },
    {
      title: "Headers.sec",
      description:
        "A security scanner that checks a site's TLS certificate and grades the seven response headers that harden it.",
      technologies: ["TypeScript", "Cloudflare Workers", "TLS", "Web Security"],
      image: "./images/headers-sec.svg",
      live: "https://headers-sec.headersecurity.workers.dev/",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`py-20 bg-background scroll-animate animate-slide-in-left ${
        sectionVisible ? "visible" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-center text-foreground mb-16 scroll-animate animate-fade-in-up ${
              titleVisible ? "visible" : ""
            }`}
          >
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

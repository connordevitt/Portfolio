"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function ProjectCard({ project, index }: { project: any; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <div
      ref={ref}
      className={`bg-background/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate animate-fade-in-up ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3">
          {project.title}
        </h3>

        <p className="text-foreground/80 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            href={project.live}
            className="flex-1 text-center py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Project
          </Link>
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

  const projects = [
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
      technologies: ["React", "Node.js", "Bootstrap"],
      image: "/images/connors-webpage.png",
      live: "https://example.com",
    },
    {
      title: "MLB Standings Tracker",
      description:
        "Whether you're cheering for the Yankees, Cubs, or any other team, you'll find all the information you need right here.",
      technologies: ["React", "TypeScript", "Chart.js", "Bootstrap"],
      image: "/images/MLB_Standings.jpg",
      live: "https://connordevitt.github.io/Reactoria/",
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

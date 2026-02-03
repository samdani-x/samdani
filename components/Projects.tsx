'use client';

import Link from 'next/link';
import Reveal from './Reveal';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern shopping experience built with Next.js and Stripe integration.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
      link: '#',
      image: '/project1.jpg'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates.',
      tech: ['React', 'Firebase', 'Redux', 'Material UI'],
      link: '#',
      image: '/project2.jpg'
    },
    {
      title: 'AI Image Generator',
      description: 'Generate unique artwork using OpenAI DALL-E API.',
      tech: ['Python', 'FastAPI', 'React', 'OpenAI'],
      link: '#',
      image: '/project3.jpg'
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto w-full">
        <Reveal>
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--foreground)] mb-6">
              Selected Work
            </h2>
            <div className="h-px w-full bg-[var(--border)]" />
          </div>
        </Reveal>

        <div className="grid gap-20">
          {projects.map((project, index) => (
            <Reveal key={index} delay={0.3}>
              <div className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-6 order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-light text-[var(--foreground)] group-hover:opacity-60 transition-opacity duration-300">
                    <Link href={project.link}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed font-light text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium tracking-wider text-[var(--foreground)] border border-[var(--border)] px-3 py-1 rounded-full uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative aspect-video bg-[var(--muted)]/10 overflow-hidden order-1 md:order-2">
                  <div className="absolute inset-0 bg-[var(--muted)]/20 transition-colors duration-500 group-hover:bg-transparent" />
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--muted)] opacity-20 text-4xl font-thin">
                    Image
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

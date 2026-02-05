'use client';

import Link from 'next/link';
import Reveal from './Reveal';

export default function Projects() {
  const projects = [
    {
      title: 'Price Tracker',
      description: 'A smart price tracking application to monitor product prices and get alerts.',
      tech: ['Next.js', 'PostgreSQL', 'Redis', 'TypeScript'],
      link: 'https://pricev2.vercel.app/',
      image: '/samdani/price_tkr.png'
    },
    {
      title: 'Smart Parking Management',
      description: 'Intelligent parking management system for efficient space utilization.',
      tech: ['Vite.js', 'SQLite', 'JavaScript'],
      link: 'https://smart-parking.minhajul0152.workers.dev/',
      image: '/samdani/parkign.png'
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto w-full">
        <Reveal>
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--foreground)] mb-6">
              Projects Completed
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
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

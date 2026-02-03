'use client';

import Reveal from './Reveal';

export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'FastAPI'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto w-full">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--foreground)] mb-6">
              Skills
            </h2>
            <div className="h-px w-full bg-[var(--border)]" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((skillGroup, index) => (
            <Reveal key={skillGroup.category} delay={0.2 + index * 0.1}>
              <div className="space-y-6">
                <h3 className="text-lg font-light tracking-tight text-[var(--muted)]">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item) => (
                    <li
                      key={item}
                      className="text-xl md:text-2xl font-light text-[var(--foreground)] hover:text-[var(--muted)] transition-colors duration-300 cursor-default"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], animation: 'slide-right' },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'FastAPI'], animation: 'slide-left' },
    { category: 'Cybersecurity', items: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'OWASP'], animation: 'fade-up' },
    { category: 'Digital Forensics', items: ['Autopsy', 'Wireshark', 'Volatility', 'FTK Imager'], animation: 'fade-down' },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'], animation: 'scale' },
    { category: 'Tools', items: ['Git', 'Docker', 'Linux', 'Burp Suite'], animation: 'rotate' },
  ];

  const SkillItem = ({ item, animation, delay }: { item: string; animation: string; delay: number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLLIElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay * 100);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [delay]);

    const getAnimationClass = () => {
      const base = 'transition-all duration-700 ease-out';
      if (!isVisible) {
        switch (animation) {
          case 'slide-right': return `${base} opacity-0 -translate-x-8`;
          case 'slide-left': return `${base} opacity-0 translate-x-8`;
          case 'fade-up': return `${base} opacity-0 translate-y-4`;
          case 'fade-down': return `${base} opacity-0 -translate-y-4`;
          case 'scale': return `${base} opacity-0 scale-75`;
          case 'rotate': return `${base} opacity-0 rotate-12`;
          default: return `${base} opacity-0`;
        }
      }
      return `${base} opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0`;
    };

    return (
      <li
        ref={ref}
        className={`text-xl md:text-2xl font-light text-[var(--foreground)] hover:text-[var(--muted)] hover:translate-x-2 transition-all duration-300 cursor-default ${getAnimationClass()}`}
      >
        {item}
      </li>
    );
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto w-full">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[var(--foreground)] mb-6 hover:tracking-wide transition-all duration-500">
              Skills
            </h2>
            <div className="h-px w-full bg-[var(--border)]" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skillGroup, index) => (
            <Reveal key={skillGroup.category} delay={0.1 + index * 0.1}>
              <div className="space-y-6 group">
                <h3 className="text-lg font-light tracking-tight text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors duration-300">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item, itemIndex) => (
                    <SkillItem
                      key={item}
                      item={item}
                      animation={skillGroup.animation}
                      delay={itemIndex}
                    />
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

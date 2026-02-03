'use client';

import { useState, useEffect } from 'react';
import Reveal from './Reveal';

export default function Hero() {
  const [text, setText] = useState('');
  const roles = ['CSE Undergraduate', 'Full Stack Developer', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const currentRole = roles[roleIndex];

    const timer = setInterval(() => {
      if (index <= currentRole.length) {
        setText(currentRole.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-5xl mx-auto w-full">
        <Reveal>
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-[var(--foreground)] leading-[1.1]">
                Samdani
              </h1>
              <p className="text-xl md:text-2xl text-[var(--muted)] font-light tracking-wide h-8">
                {text}
              </p>
            </div>

            <p className="text-base md:text-lg text-[var(--muted)] max-w-2xl leading-relaxed font-light">
              A design-focused developer specializing in creating emotionally resonant digital experiences.
              Building scalable applications with clarity and craft.
            </p>

            <div className="flex gap-6 pt-4">
              <a
                href="#projects"
                className="text-[var(--foreground)] border-b-2 border-[var(--foreground)] pb-1 hover:opacity-60 transition-opacity duration-300 font-light tracking-wide"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="text-[var(--muted)] border-b-2 border-transparent hover:border-[var(--muted)] pb-1 transition-all duration-300 font-light tracking-wide"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

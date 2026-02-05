'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';

export default function Hero() {
  const [text, setText] = useState('');
  const roles = ['CSE Undergraduate', 'Full-Stack Developer', 'Cybersecurity Researcher', 'Digital Forensics Analyst', 'Landscape Photographer'];
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
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <Reveal>
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[var(--foreground)] leading-[1.1]">
                  Md. Mahbub E Samdani
                </h1>
                <p className="text-lg md:text-xl text-[var(--muted)] font-light tracking-wide h-7">
                  {text}
                </p>
              </div>

              <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed font-light">
                CSE undergraduate passionate about cybersecurity, digital forensics, and building secure full-stack applications. Capturing landscapes through the lens when not coding.
              </p>

              <div className="flex gap-6 pt-2">
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

          {/* Right Column - Image */}
          <Reveal delay={0.2}>
            <div className="flex justify-center md:justify-end">
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] relative">
                <Image
                  src="/profile.jpg"
                  alt="Md. Mahbub E Samdani"
                  fill
                  className="object-cover"
                  style={{
                    maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

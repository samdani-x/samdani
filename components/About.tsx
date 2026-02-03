'use client';

import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Column - Title & Description */}
          <div className="space-y-8">
            <Reveal width="100%">
              <h2 className="text-5xl md:text-6xl font-light tracking-tight text-[var(--foreground)]">
                About Me
              </h2>
            </Reveal>

            <Reveal delay={0.2} width="100%">
              <div className="space-y-6 text-lg text-[var(--muted)] leading-relaxed font-light">
                <p>
                  I'm a Computer Science and Engineering undergraduate passionate about building 
                  digital experiences that make a difference. My journey in tech is driven by 
                  curiosity and a love for solving complex problems.
                </p>
                <p>
                  I specialize in full-stack development, working with modern frameworks and 
                  technologies to create scalable, performant applications. Every project is 
                  an opportunity to learn something new and push the boundaries of what's possible.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open source, or sharing knowledge with the developer community.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column - Expertise */}
          <div className="space-y-12">
            <Reveal delay={0.3} width="100%">
              <div className="space-y-6">
                <h3 className="text-sm font-medium tracking-widest text-[var(--muted)] uppercase">
                  What I Do
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-[var(--border)] pl-4 py-2 hover:border-[var(--foreground)] transition-colors">
                    <h4 className="text-lg font-light text-[var(--foreground)] mb-1">Full-Stack Development</h4>
                    <p className="text-sm text-[var(--muted)] font-light">
                      Building end-to-end solutions with React, Next.js, Node.js, and modern databases
                    </p>
                  </div>
                  <div className="border-l-2 border-[var(--border)] pl-4 py-2 hover:border-[var(--foreground)] transition-colors">
                    <h4 className="text-lg font-light text-[var(--foreground)] mb-1">UI/UX Design</h4>
                    <p className="text-sm text-[var(--muted)] font-light">
                      Crafting intuitive interfaces with attention to detail and user experience
                    </p>
                  </div>
                  <div className="border-l-2 border-[var(--border)] pl-4 py-2 hover:border-[var(--foreground)] transition-colors">
                    <h4 className="text-lg font-light text-[var(--foreground)] mb-1">System Architecture</h4>
                    <p className="text-sm text-[var(--muted)] font-light">
                      Designing scalable, maintainable systems that grow with your needs
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

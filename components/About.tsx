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
              <h2 className="text-5xl md:text-6xl font-light tracking-tight text-[var(--foreground)] hover:tracking-wide transition-all duration-500">
                About Me
              </h2>
            </Reveal>

            <Reveal delay={0.2} width="100%">
              <div className="space-y-6 text-lg text-[var(--muted)] leading-relaxed font-light">
                <p className="hover:text-[var(--foreground)] transition-colors duration-300">
                  I'm a Computer Science and Engineering undergraduate with a deep passion for 
                  cybersecurity and digital forensics. My journey in tech is driven by curiosity 
                  about how systems work—and how to protect them from threats.
                </p>
                <p className="hover:text-[var(--foreground)] transition-colors duration-300">
                  I specialize in full-stack development while actively researching cybersecurity 
                  vulnerabilities and conducting digital forensics investigations. Every project 
                  is an opportunity to build secure, scalable applications.
                </p>
                <p className="hover:text-[var(--foreground)] transition-colors duration-300">
                  Beyond the digital world, I'm a landscape photographer who finds peace in 
                  capturing nature's beauty. This creative outlet balances my technical pursuits 
                  and inspires fresh perspectives in problem-solving.
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
                  <Reveal delay={0.1}>
                    <div className="border-l-2 border-[var(--border)] pl-4 py-2 hover:border-[var(--foreground)] hover:pl-6 hover:bg-[var(--card)] transition-all duration-300 group">
                      <h4 className="text-lg font-light text-[var(--foreground)] mb-1 group-hover:translate-x-1 transition-transform duration-300">Full-Stack Development</h4>
                      <p className="text-sm text-[var(--muted)] font-light group-hover:text-[var(--foreground)] transition-colors duration-300">
                        Building secure, scalable applications with React, Next.js, Node.js, and modern databases
                      </p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="border-l-2 border-[var(--border)] pl-4 py-2 hover:border-[var(--foreground)] hover:pl-6 hover:bg-[var(--card)] transition-all duration-300 group">
                      <h4 className="text-lg font-light text-[var(--foreground)] mb-1 group-hover:translate-x-1 transition-transform duration-300">Cybersecurity Research</h4>
                      <p className="text-sm text-[var(--muted)] font-light group-hover:text-[var(--foreground)] transition-colors duration-300">
                        Identifying vulnerabilities, penetration testing, and implementing security best practices
                      </p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.3}>
                    <div className="border-l-2 border-[var(--border)] pl-4 py-2 hover:border-[var(--foreground)] hover:pl-6 hover:bg-[var(--card)] transition-all duration-300 group">
                      <h4 className="text-lg font-light text-[var(--foreground)] mb-1 group-hover:translate-x-1 transition-transform duration-300">Digital Forensics</h4>
                      <p className="text-sm text-[var(--muted)] font-light group-hover:text-[var(--foreground)] transition-colors duration-300">
                        Investigating digital evidence, incident response, and forensic analysis
                      </p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <div className="border-l-2 border-[var(--border)] pl-4 py-2 hover:border-[var(--foreground)] hover:pl-6 hover:bg-[var(--card)] transition-all duration-300 group">
                      <h4 className="text-lg font-light text-[var(--foreground)] mb-1 group-hover:translate-x-1 transition-transform duration-300">Landscape Photography</h4>
                      <p className="text-sm text-[var(--muted)] font-light group-hover:text-[var(--foreground)] transition-colors duration-300">
                        Capturing nature's beauty through creative composition and post-processing
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

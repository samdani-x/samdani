'use client';

import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto w-full text-center">
        <Reveal width="100%">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-[var(--foreground)] mb-8">
            Let's work together
          </h2>
        </Reveal>

        <Reveal delay={0.3} width="100%">
          <p className="text-xl text-[var(--muted)] font-light mb-12 max-w-xl mx-auto">
            I'm always interested in new projects and opportunities. But mostly I just want to say hi.
            Send me an email and let's discuss how we can create something impactful.
          </p>
        </Reveal>

        <Reveal delay={0.4} width="100%">
          <a
            href="mailto:contact@samdani.com"
            className="inline-block text-2xl md:text-3xl text-[var(--foreground)] border-b text-center border-[var(--border)] pb-2 hover:border-[var(--foreground)] transition-colors duration-300 font-light"
          >
            contact@samdani.com
          </a>
        </Reveal>
      </div>
    </section>
  );
}

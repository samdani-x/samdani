'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen">
      {loading && (
        <LoadingScreen onComplete={() => setLoading(false)} />
      )}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

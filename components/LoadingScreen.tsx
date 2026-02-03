'use client';

import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [text, setText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const fullText = 'samdani.com';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setIsTypingDone(true);
        // Wait for fade out animation (500ms) before unmounting
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 600);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)] transition-opacity duration-500 ${isTypingDone ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center">
        <h1 className={`text-4xl md:text-6xl font-light tracking-tight text-[var(--foreground)] transition-transform duration-300 ${isTypingDone ? 'scale-105' : ''}`}>
          {text}
          <span className={`font-thin ${isTypingDone ? 'opacity-0' : 'animate-pulse'}`}>|</span>
        </h1>
      </div>
    </div>
  );
}

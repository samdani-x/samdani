'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleHoverStart = () => setIsHovered(true);
        const handleHoverEnd = () => setIsHovered(false);

        window.addEventListener('mousemove', moveCursor);

        // Attach listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        // Mutation observer to handle dynamically added elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    const newElements = document.querySelectorAll('a, button, input, textarea');
                    newElements.forEach((el) => {
                        el.removeEventListener('mouseenter', handleHoverStart);
                        el.removeEventListener('mouseleave', handleHoverEnd);
                        el.addEventListener('mouseenter', handleHoverStart);
                        el.addEventListener('mouseleave', handleHoverEnd);
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
            observer.disconnect();
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            {/* Arrow cursor */}
            <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="mix-blend-difference"
                style={{
                    scale: isHovered ? 1.3 : 1,
                    rotate: isHovered ? 45 : 0,
                }}
                initial={{ scale: 1 }}
                animate={{ scale: isHovered ? 1.3 : 1, rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.2 }}
            >
                <path
                    d="M4 4L20 12L12 14L10 20L4 4Z"
                    fill="var(--foreground)"
                    stroke="var(--foreground)"
                    strokeWidth="1"
                    strokeLinejoin="round"
                />
            </motion.svg>
        </motion.div>
    );
}

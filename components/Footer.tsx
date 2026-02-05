'use client';

import Reveal from './Reveal';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--background)] border-t border-[var(--border)] py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-[var(--muted)]">
                <Reveal>
                    <p>&copy; {currentYear} Md. Mahbub E Samdani. All rights reserved.</p>
                </Reveal>
                <Reveal delay={0.1}>
                    <div className="flex gap-8">
                        <a href="mailto:23201101@uap-bd.edu" className="hover:text-[var(--foreground)] transition-colors">
                            23201101@uap-bd.edu
                        </a>
                    </div>
                </Reveal>
            </div>
        </footer>
    );
}

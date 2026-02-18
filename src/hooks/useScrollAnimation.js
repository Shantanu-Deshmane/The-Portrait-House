import { useEffect } from 'react';

/**
 * Attaches IntersectionObserver to all .scroll-animate elements.
 * Once an element becomes visible, it is unobserved immediately —
 * this avoids keeping observers alive for elements that have already animated.
 */
export function useScrollAnimation(containerRef = null) {
    useEffect(() => {
        const root = containerRef?.current ?? document;
        const elements = root.querySelectorAll('.scroll-animate');

        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Stop observing once animated — no need to keep watching
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [containerRef]);
}

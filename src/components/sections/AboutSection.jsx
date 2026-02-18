import { Link } from 'react-router-dom';

/**
 * "Our Signature Style" about section — used on Home page.
 */
export default function AboutSection() {
    return (
        <section className="py-24 px-6 bg-white dark:bg-zinc-950" id="about">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 scroll-animate animate-fade-right">
                    <span className="text-primary tracking-[0.4em] uppercase text-xs font-semibold">
                        Our Signature Style
                    </span>
                    <h2 className="font-display text-4xl md:text-6xl leading-tight dark:text-white">
                        Where tradition meets modern{' '}
                        <span className="italic font-normal">refinement.</span>
                    </h2>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-md">
                        We believe every face tells a story. At The Portrait House, we specialize in
                        high-end monochrome portraiture that strips away the distractions of color to
                        reveal the raw, elegant character of our subjects.
                    </p>
                    <div className="pt-4">
                        <Link
                            to="/about"
                            className="text-sm border-b border-stone-900 dark:border-stone-100 pb-1 tracking-widest uppercase hover:text-primary hover:border-primary transition-all"
                        >
                            Learn more about us
                        </Link>
                    </div>
                </div>

                <div className="relative group overflow-hidden scroll-animate animate-scale-up">
                    <img
                        alt="Signature Portrait"
                        className="w-full grayscale brightness-90 group-hover:scale-105 transition-transform duration-700 lazy-img"
                        src="/assets/engagement/img2.webp"
                        loading="lazy"
                        decoding="async"
                        width="4000"
                        height="6000"
                        onLoad={(e) => e.currentTarget.classList.add('loaded')}
                    />
                    <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}

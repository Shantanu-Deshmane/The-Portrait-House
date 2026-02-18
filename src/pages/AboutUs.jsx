import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const STATS = [
    { value: '500+', label: 'Sessions Completed' },
    { value: '8+', label: 'Years of Excellence' },
    { value: '100%', label: 'Client Satisfaction' },
];

export default function AboutUs() {
    useScrollAnimation();

    useEffect(() => {
        document.title = 'About Us | The Portrait House';
    }, []);

    return (
        <main id="main-content" className="pt-20 bg-background-light dark:bg-background-dark">
            {/* Page Header */}
            <header className="pt-40 pb-20 px-8 md:px-24 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-12 items-end">
                    <div className="md:col-span-7 scroll-animate animate-fade-right">
                        <span className="silver-text font-display italic text-xl md:text-2xl mb-4 block">
                            Capturing the Soul
                        </span>
                        <h1 className="text-6xl md:text-8xl leading-tight mb-8 dark:text-white">
                            The Art of the <br />Permanent Moment.
                        </h1>
                        <p className="text-lg md:text-xl font-light leading-relaxed text-stone-600 dark:text-stone-400 max-w-xl">
                            Founded on the principles of timeless elegance and emotional resonance, The Portrait
                            House is a sanctuary for those who value legacy over trends.
                        </p>
                    </div>
                    <div className="md:col-span-5 relative scroll-animate animate-fade-left">
                        <div className="aspect-[4/5] overflow-hidden image-container">
                            <img
                                alt="High-end professional portrait camera equipment in studio"
                                className="w-full h-full object-cover image-reveal lazy-img"
                                src="/assets/wedding/03.webp"
                                loading="lazy"
                                decoding="async"
                                onLoad={(e) => e.currentTarget.classList.add('loaded')}
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Philosophy Section */}
            <section className="py-32 px-8 md:px-24 bg-stone-50 dark:bg-stone-900/30">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
                    <div className="scroll-animate animate-fade-right">
                        <div className="aspect-square overflow-hidden image-container">
                            <img
                                alt="Studio philosophy — dramatic lighting portrait"
                                className="w-full h-full object-cover image-reveal lazy-img"
                                src="/assets/outdoor/4.webp"
                                loading="lazy"
                                decoding="async"
                                onLoad={(e) => e.currentTarget.classList.add('loaded')}
                            />
                        </div>
                    </div>
                    <div className="scroll-animate animate-fade-left">
                        <span className="text-primary tracking-[0.4em] uppercase text-xs font-semibold block mb-6">
                            Our Philosophy
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl mb-8 dark:text-white">
                            Light is the language. <br />
                            <span className="italic font-normal">Shadow is the story.</span>
                        </h2>
                        <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                            We approach every session as a collaboration between artist and subject. Our
                            process begins long before the shutter clicks — with deep conversations about
                            your story, your essence, and the legacy you wish to leave.
                        </p>
                        <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                            The result is not just a photograph. It is a permanent record of a moment that
                            will outlast trends, technology, and time itself.
                        </p>
                    </div>
                </div>
            </section>

            {/* Craft Section */}
            <section className="py-32 px-8 md:px-24 bg-white dark:bg-background-dark">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
                    <div className="order-2 md:order-1 scroll-animate animate-fade-right">
                        <span className="text-primary tracking-[0.4em] uppercase text-xs font-semibold block mb-6">
                            The Craft
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl mb-8 dark:text-white">
                            Monochrome Mastery.
                        </h2>
                        <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                            We specialize in high-end monochrome portraiture because we believe black and
                            white photography is the purest form of visual storytelling. Without the
                            distraction of color, the viewer is drawn directly to emotion, texture, and truth.
                        </p>
                        <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                            Every image is meticulously crafted in post-production, with a focus on tonal
                            range, grain structure, and the interplay of light and shadow that defines our
                            signature aesthetic.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 scroll-animate animate-fade-left">
                        <div className="aspect-[4/5] overflow-hidden image-container">
                            <img
                                alt="Monochrome portrait craft — detailed studio work"
                                className="w-full h-full object-cover image-reveal lazy-img"
                                src="/assets/bride/(1).webp"
                                loading="lazy"
                                decoding="async"
                                onLoad={(e) => e.currentTarget.classList.add('loaded')}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-24 px-8 md:px-24 bg-stone-50 dark:bg-stone-900/30">
                <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 text-center">
                    {STATS.map(({ value, label }) => (
                        <div key={label} className="scroll-animate animate-fade-up">
                            <p className="font-display text-5xl md:text-7xl mb-4 dark:text-white">{value}</p>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-8 text-center bg-white dark:bg-background-dark">
                <h2 className="font-display text-4xl md:text-6xl mb-8 dark:text-white">
                    Ready to begin your story?
                </h2>
                <Link
                    to="/contact"
                    className="inline-block border border-stone-900 dark:border-white text-stone-900 dark:text-white px-12 py-5 text-xs tracking-[0.3em] uppercase hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                >
                    Book a Session
                </Link>
            </section>
        </main>
    );
}

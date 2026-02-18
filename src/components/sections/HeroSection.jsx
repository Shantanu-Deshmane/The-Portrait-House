import { Link } from 'react-router-dom';

/**
 * Hero section with video banner (falls back to image).
 * Uses the video from /assets/video/ folder.
 */
export default function HeroSection() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Video Banner */}
            <video
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/engagement/img1.webp"
            >
                <source src="/assets/video/video1.mp4" type="video/mp4" />
                {/* Fallback image if video fails */}
                <img
                    src="/assets/engagement/img1.webp"
                    alt="Luxury B&W Portrait"
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
                    fetchpriority="high"
                />
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 hero-gradient" />

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6">
                <h1 className="font-display text-5xl md:text-8xl text-white mb-6 italic">
                    The Art of Essence
                </h1>
                <p className="text-stone-300 tracking-[0.3em] uppercase text-xs md:text-sm font-light max-w-lg mx-auto leading-loose">
                    Capturing the timeless soul through sophisticated light and shadow.
                </p>
                <div className="mt-12">
                    <Link
                        to="/gallery"
                        className="inline-block border border-white text-white px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all"
                    >
                        View Gallery
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
                <span className="material-icons-outlined">expand_more</span>
            </div>
        </section>
    );
}

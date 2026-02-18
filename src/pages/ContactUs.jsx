import { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useWhatsAppForm } from '../hooks/useWhatsAppForm';
import { STUDIO, INQUIRY_TYPES } from '../constants/site';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import SuccessModal from '../components/ui/SuccessModal';

const STUDIO_INFO = [
    {
        icon: 'location_on',
        title: 'Address',
        content: (
            <>
                {STUDIO.address.line1}
                <br />
                {STUDIO.address.line2}
            </>
        ),
    },
    {
        icon: 'phone',
        title: 'Phone',
        content: STUDIO.phone,
    },
    {
        icon: 'schedule',
        title: 'Hours',
        content: (
            <>
                {STUDIO.hours.weekdays}
                <br />
                {STUDIO.hours.weekend}
            </>
        ),
    },
];

export default function ContactUs() {
    const { handleSubmit, isLoading, showModal, closeModal } = useWhatsAppForm('full-contact-form');
    useScrollAnimation();

    useEffect(() => {
        document.title = 'Contact Us | The Portrait House';
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <main id="main-content" className="max-w-7xl mx-auto px-6 py-16 md:py-24 pt-32">
                {/* Page Header */}
                <header className="mb-16 md:mb-24 text-center scroll-animate animate-fade-up">
                    <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-tight dark:text-white">
                        Begin Your Story
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-light">
                        Every portrait is a collaboration. We invite you to reach out and share your vision with us.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                    {/* Booking Inquiry Form */}
                    <section className="scroll-animate animate-fade-right">
                        <h2 className="font-display text-3xl mb-8 border-b border-gray-100 dark:border-studio-grey pb-4 dark:text-white">
                            Booking Inquiry
                        </h2>
                        <form id="full-contact-form" className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                                        Full Name
                                    </label>
                                    <input
                                        id="full-name"
                                        required
                                        className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-stone-700 focus:ring-0 focus:border-primary px-0 py-2 transition-colors text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-600"
                                        placeholder="Kedar Kumbhar"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                                        Email Address
                                    </label>
                                    <input
                                        id="full-email"
                                        required
                                        className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-stone-700 focus:ring-0 focus:border-primary px-0 py-2 transition-colors text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-600"
                                        placeholder="hello@example.com"
                                        type="email"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                                        Inquiry Type
                                    </label>
                                    <select
                                        id="inquiry-type"
                                        className="w-full bg-white dark:bg-zinc-900 border-0 border-b border-gray-300 dark:border-stone-700 focus:ring-0 focus:border-primary px-0 py-2 transition-colors text-stone-900 dark:text-white"
                                    >
                                        {INQUIRY_TYPES.map((type) => (
                                            <option key={type} className="dark:bg-zinc-900 dark:text-white">
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                                        Preferred Date
                                    </label>
                                    <input
                                        id="preferred-date"
                                        className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-stone-700 focus:ring-0 focus:border-primary px-0 py-2 transition-colors text-stone-900 dark:text-white dark:[color-scheme:dark]"
                                        type="date"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                                    The Vision
                                </label>
                                <textarea
                                    id="vision"
                                    required
                                    className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-stone-700 focus:ring-0 focus:border-primary px-0 py-2 transition-colors resize-none text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-600"
                                    placeholder="Tell us about the atmosphere and style you're imagining..."
                                    rows="4"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`silver-gradient w-full py-5 text-black font-medium uppercase tracking-[0.3em] text-xs transition-all duration-300 hover:shadow-xl ${isLoading ? 'btn-loading' : ''}`}
                            >
                                Send Inquiry
                            </button>
                        </form>
                    </section>

                    {/* Studio Info */}
                    <section className="space-y-16 scroll-animate animate-fade-left">
                        <div>
                            <h2 className="font-display text-3xl mb-8 border-b border-gray-100 dark:border-studio-grey pb-4 dark:text-white">
                                The Studio
                            </h2>
                            <div className="space-y-6">
                                {STUDIO_INFO.map(({ icon, title, content }) => (
                                    <div key={title} className="flex items-start space-x-4">
                                        <span className="material-icons-outlined text-primary">{icon}</span>
                                        <div>
                                            <h3 className="font-medium text-lg dark:text-white">{title}</h3>
                                            <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                                                {content}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="relative aspect-video bg-gray-100 dark:bg-studio-grey overflow-hidden group">
                            <img
                                alt="Map abstract and architectural studio details"
                                className="w-full h-full object-cover grayscale opacity-50 transition-transform duration-700 group-hover:scale-105 lazy-img"
                                src="/assets/engagement/img6.webp"
                                loading="lazy"
                                decoding="async"
                                onLoad={(e) => e.currentTarget.classList.add('loaded')}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/90 dark:bg-black/90 p-6 shadow-2xl backdrop-blur-sm border border-gray-200 dark:border-studio-grey">
                                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                                        Our Location
                                    </p>
                                    <p className="font-display text-xl dark:text-white">Karad, Maharashtra</p>
                                    <a
                                        href={STUDIO.mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 text-[10px] uppercase tracking-widest border-b border-primary pb-1 inline-block text-stone-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                                    >
                                        Open in Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Testimonials */}
                <div className="mt-32 border-t border-gray-100 dark:border-stone-800 pt-24">
                    <TestimonialsSection limit={4} columns={2} />
                </div>

                <SuccessModal isOpen={showModal} onClose={closeModal} />
            </main>
        </div>
    );
}


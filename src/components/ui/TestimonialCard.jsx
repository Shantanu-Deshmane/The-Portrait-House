/**
 * Reusable testimonial card.
 * Used in TestimonialsSection (Home) and ContactUs page.
 */
export default function TestimonialCard({ quote, name, category, initial, className = '' }) {
    return (
        <div className={`bg-stone-50 dark:bg-stone-900/50 p-8 relative group hover:shadow-lg transition-shadow scroll-animate animate-fade-up ${className}`}>
            <span className="material-icons-outlined text-4xl text-primary/30 absolute top-4 left-4">
                format_quote
            </span>
            <div className="pt-8">
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed italic mb-6">
                    &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-display text-xl">{initial}</span>
                    </div>
                    <div>
                        <h4 className="font-medium dark:text-white">{name}</h4>
                        <span className="text-[10px] uppercase tracking-widest text-stone-400">{category}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * Reusable section header with optional label, title, and decorative divider.
 * Used across Home, Gallery, Contact pages.
 */
export default function SectionHeader({ label, title, italic = false, centered = true }) {
    return (
        <div className={`mb-16 scroll-animate animate-fade-up ${centered ? 'text-center' : ''}`}>
            {label && (
                <span className="text-primary tracking-[0.4em] uppercase text-xs font-semibold">
                    {label}
                </span>
            )}
            <h2 className={`font-display text-4xl md:text-5xl dark:text-white mt-4 mb-4 ${italic ? 'italic' : ''}`}>
                {title}
            </h2>
            <div className={`w-16 h-px bg-primary ${centered ? 'mx-auto' : ''}`} />
        </div>
    );
}

import TestimonialCard from '../ui/TestimonialCard';
import SectionHeader from '../ui/SectionHeader';
import { TESTIMONIALS } from '../../data/testimonials';

/**
 * Testimonials section — reusable across Home and ContactUs pages.
 * @param {number} limit - max number of testimonials to show (default: all)
 * @param {number} columns - grid columns (default: 3)
 */
export default function TestimonialsSection({ limit, columns = 3 }) {
    const items = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

    const gridClass = {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2',
    }[columns] ?? 'grid-cols-1 md:grid-cols-3';

    const delays = ['', 'delay-100', 'delay-200', 'delay-300'];

    return (
        <section className="py-24 px-6 bg-white dark:bg-zinc-950" id="reviews">
            <div className="max-w-7xl mx-auto">
                <SectionHeader label="Testimonials" title="What Our Clients Say" italic />
                <div className={`grid ${gridClass} gap-8`}>
                    {items.map((t, i) => (
                        <TestimonialCard
                            key={t.id}
                            quote={t.quote}
                            name={t.name}
                            category={t.category}
                            initial={t.initial}
                            className={delays[i] ?? ''}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

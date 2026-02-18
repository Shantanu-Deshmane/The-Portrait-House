import { useState, useEffect, useMemo } from 'react';
import GalleryItem from '../components/ui/GalleryItem';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';

const ITEMS_PER_PAGE = 9;

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

    useScrollAnimation();

    useEffect(() => {
        document.title = 'Gallery | The Portrait House';
        // Reset visible count when filter changes
        setVisibleCount(ITEMS_PER_PAGE);
    }, [activeFilter]);

    // Memoize filtering — only recomputes when activeFilter changes
    const filtered = useMemo(() =>
        activeFilter === 'all'
            ? GALLERY_ITEMS
            : GALLERY_ITEMS.filter(item => item.category === activeFilter),
        [activeFilter]
    );

    const visible = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;

    return (
        <main id="main-content" className="pt-20 bg-background-light dark:bg-background-dark min-h-screen">
            {/* Page Header */}
            <header className="py-20 px-6 text-center scroll-animate animate-fade-up">
                <span className="text-primary tracking-[0.4em] uppercase text-xs font-semibold">
                    The Portfolio
                </span>
                <h1 className="font-display text-5xl md:text-7xl mt-4 mb-6 dark:text-white">
                    Our Work
                </h1>
                <div className="w-16 h-px bg-primary mx-auto" />
            </header>

            {/* Filter Bar */}
            <section className="max-w-7xl mx-auto px-6 mb-12">
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 border-b border-black/5 dark:border-white/10 pb-6">
                    {GALLERY_CATEGORIES.map(({ label, value }) => (
                        <button
                            key={value}
                            onClick={() => setActiveFilter(value)}
                            className={`filter-btn text-[10px] uppercase tracking-[0.4em] font-medium transition-all hover:text-gold ${activeFilter === value
                                ? 'active text-stone-900 dark:text-white'
                                : 'text-slate-500 dark:text-stone-400'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Masonry Grid */}
            <section className="max-w-7xl mx-auto px-6 pb-32">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                    {visible.map((item, index) => (
                        <GalleryItem
                            key={`${item.src}-${index}`}
                            src={item.src}
                            alt={item.alt}
                            category={item.category}
                            title={item.title}
                            type={item.type}
                            poster={item.poster}
                        />
                    ))}
                </div>

                {/* Load More */}
                {hasMore && (
                    <div className="mt-20 text-center">
                        <button
                            id="load-more-btn"
                            onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
                            className="px-12 py-4 border border-stone-800 dark:border-stone-200 text-stone-900 dark:text-white text-[10px] tracking-[0.3em] uppercase hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-black transition-all"
                        >
                            Load More Masterpieces
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}

import { Link } from 'react-router-dom';
import GalleryItem from '../ui/GalleryItem';
import SectionHeader from '../ui/SectionHeader';
import { FEATURED_GALLERY } from '../../data/gallery';

/**
 * Featured gallery grid — 9 items shown on Home page.
 * Links to full Gallery page.
 */
export default function FeaturedGallery() {
    return (
        <section className="py-24 px-6 bg-stone-50 dark:bg-black" id="gallery">
            <div className="max-w-7xl mx-auto">
                <SectionHeader title="Featured Gallery" italic />

                <div className="masonry">
                    {FEATURED_GALLERY.map((item, index) => (
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

                <div className="mt-16 text-center">
                    <Link
                        to="/gallery"
                        className="inline-block px-12 py-4 border border-stone-800 dark:border-stone-200 text-stone-900 dark:text-white text-[10px] tracking-[0.3em] uppercase hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-black transition-all"
                    >
                        Explore Full Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
}

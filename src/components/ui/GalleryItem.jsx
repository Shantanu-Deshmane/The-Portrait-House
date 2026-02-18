import { memo, useState, useRef, useEffect } from 'react';

/**
 * Reusable gallery card with hover overlay.
 * Supports both image and video items via the `type` prop.
 * Wrapped in React.memo to prevent re-renders when parent state changes.
 */
const GalleryItem = memo(function GalleryItem({
    src, alt, category, title, className = '',
    priority = false, type = 'image', poster
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (type === 'video' && videoRef.current) {
            if (isPlaying) {
                videoRef.current.play().catch(error => {
                    console.error("Video playback failed:", error);
                    setIsPlaying(false);
                });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying, type]);

    return (
        <div
            className={`gallery-item mb-6 break-inside-avoid relative overflow-hidden group cursor-pointer bg-neutral-200 dark:bg-neutral-900 ${className}`}
            onClick={() => {
                if (type === 'video' && !isPlaying) {
                    setIsPlaying(true);
                }
            }}
        >
            {type === 'video' ? (
                <div className="relative aspect-video flex items-center justify-center">
                    <video
                        ref={videoRef}
                        className={`w-full h-full object-cover loaded ${isPlaying ? '' : 'pointer-events-none'}`}
                        muted
                        loop
                        playsInline
                        controls={isPlaying}
                        aria-label={alt}
                        preload="metadata"
                        poster={poster}
                    >
                        <source src={`${src}#t=0.001`} type="video/mp4" />
                    </video>
                    {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-500">
                            <div className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                                <span className="material-icons-outlined text-white text-3xl ml-1">play_arrow</span>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    className="w-full transition-all duration-700 ease-in-out transform group-hover:scale-105 lazy-img"
                    loading={priority ? 'eager' : 'lazy'}
                    decoding={priority ? 'sync' : 'async'}
                    fetchpriority={priority ? 'high' : 'auto'}
                    onLoad={(e) => e.currentTarget.classList.add('loaded')}
                />
            )}
            <div className={`overlay absolute inset-0 bg-black/40 transition-opacity duration-500 flex flex-col justify-end p-8 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-0'}`}>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{category}</span>
                <h3 className="font-display text-2xl text-white">{title}</h3>
            </div>
        </div>
    );
});

export default GalleryItem;

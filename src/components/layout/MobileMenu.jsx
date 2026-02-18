import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../constants/site';

export default function MobileMenu({ isOpen, onClose }) {
    const { pathname } = useLocation();

    return (
        <>
            {/* Backdrop Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-500 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Side Drawer */}
            <div
                id="mobile-menu"
                className={`fixed top-0 right-0 h-screen w-[75vw] max-w-[320px] bg-white dark:bg-[#0a0a0a] z-[100] transition-transform duration-500 md:hidden border-l border-stone-200 dark:border-stone-800 shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className="p-6 flex justify-between items-center border-b border-stone-100 dark:border-stone-900">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-stone-400">Menu</span>
                    <button
                        onClick={onClose}
                        className="p-2 text-stone-800 dark:text-stone-200 hover:text-primary transition-colors"
                        aria-label="Close menu"
                    >
                        <span className="material-icons-outlined text-2xl">close</span>
                    </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col p-8 space-y-8 text-base tracking-[0.3em] uppercase font-light">
                    {NAV_LINKS.map(({ label, path }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={onClose}
                            className={`hover:text-primary transition-colors relative group w-fit ${pathname === path ? 'text-primary' : 'text-stone-800 dark:text-stone-200'
                                }`}
                        >
                            {label}
                        </Link>
                    ))}

                    <div className="pt-8 border-t border-stone-100 dark:border-stone-900">
                        <Link
                            to="/contact"
                            onClick={onClose}
                            className="block w-full text-center border border-stone-800 dark:border-stone-200 text-stone-900 dark:text-stone-100 px-6 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                        >
                            Book a Session
                        </Link>
                    </div>
                </div>

                {/* Bottom Watermark */}
                <div className="absolute bottom-10 left-8">
                    <p className="text-[10px] tracking-[0.4em] text-stone-300 dark:text-stone-800 uppercase vertical-text">
                        The Portrait House
                    </p>
                </div>
            </div>
        </>
    );
}

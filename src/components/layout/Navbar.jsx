import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { NAV_LINKS } from '../../constants/site';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    const { isDark, toggleTheme } = useTheme();
    const { pathname } = useLocation();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
            <nav
                className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800"
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            alt="The Portrait House Logo"
                            className="h-12 w-auto invert dark:invert-0"
                            src="/assets/logo.png"
                            width="938"
                            height="1001"
                        />
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex space-x-10 text-xs tracking-[0.2em] uppercase font-medium text-stone-800 dark:text-stone-200">
                        {NAV_LINKS.map(({ label, path }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`hover:text-primary transition-colors ${pathname === path ? 'nav-link-active' : ''}`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-6">
                        <button
                            className="p-2 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-full transition-colors theme-toggle-btn text-stone-800 dark:text-stone-200"
                            onClick={toggleTheme}
                            aria-label="Toggle dark mode"
                        >
                            <span className="material-icons-outlined">
                                {isDark ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2 text-stone-800 dark:text-stone-200"
                            onClick={() => setIsMobileOpen(true)}
                            aria-label="Open menu"
                        >
                            <span className="material-icons-outlined text-2xl">menu</span>
                        </button>

                        {/* Desktop CTA */}
                        <Link
                            to="/gallery"
                            className="hidden md:block border border-stone-900 dark:border-white text-stone-900 dark:text-white px-8 py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                        >
                            View Gallery
                        </Link>
                    </div>
                </div>
            </nav>

            <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
        </>
    );
}

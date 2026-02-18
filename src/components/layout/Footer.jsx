import { Link } from 'react-router-dom';
import { STUDIO } from '../../constants/site';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-stone-100 dark:bg-black py-20 px-6 border-t border-stone-200 dark:border-stone-900">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <Link to="/" className="mb-12">
                    <img
                        alt="The Portrait House Logo"
                        className="h-20 w-auto invert dark:invert-0 opacity-50"
                        src="/assets/logo.png"
                        width="938"
                        height="1001"
                    />
                </Link>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full text-center md:text-left border-b border-stone-200 dark:border-stone-800 pb-16">
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-primary">
                            Quick Links
                        </h4>
                        <nav className="flex flex-col space-y-3 text-sm text-stone-600 dark:text-stone-400 font-light">
                            {[
                                { label: 'Home', to: '/' },
                                { label: 'Gallery', to: '/gallery' },
                                { label: 'About Us', to: '/about' },
                                { label: 'Contact', to: '/contact' },
                            ].map(({ label, to }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    className="hover:text-primary transition-colors"
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Studio Address */}
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-primary">
                            The Studio
                        </h4>
                        <p className="text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                            {STUDIO.address.line1}
                            <br />
                            {STUDIO.address.line2}
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-primary">
                            Contact
                        </h4>
                        <p className="text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                            {STUDIO.phone}
                            <br />
                            {STUDIO.email}
                        </p>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-primary">
                            Follow Information
                        </h4>
                        <div className="flex justify-center md:justify-start space-x-8 text-[10px] uppercase tracking-widest text-stone-600 dark:text-stone-400">
                            <a
                                href={STUDIO.instagram}
                                className="hover:text-primary transition-colors"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 text-[10px] tracking-[0.2em] text-stone-500 uppercase flex flex-col items-center space-y-2">
                    <p>© {currentYear} THE PORTRAIT HOUSE. ALL RIGHTS RESERVED.</p>
                    <p className="opacity-50">
                        DEVELOPED BY{' '}
                        <a
                            href={STUDIO.developer.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            {STUDIO.developer.name.toUpperCase()}
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

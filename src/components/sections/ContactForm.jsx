import SuccessModal from '../ui/SuccessModal';
import { useWhatsAppForm } from '../../hooks/useWhatsAppForm';

/**
 * Mini contact/inquiry form — used on Home page.
 * Full booking form is in ContactUs page (full-contact-form).
 */
export default function ContactForm() {
    const { handleSubmit, isLoading, showModal, closeModal } = useWhatsAppForm('contact-form');

    return (
        <section
            className="py-32 px-6 bg-white dark:bg-background-dark border-t border-stone-100 dark:border-stone-900"
            id="contact"
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-display text-4xl md:text-6xl mb-12 dark:text-white">
                    Start your legacy.
                </h2>

                <form
                    id="contact-form"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
                    onSubmit={handleSubmit}
                >
                    <div className="space-y-2">
                        <label className="text-[10px] tracking-widest uppercase font-semibold text-stone-500">
                            Name
                        </label>
                        <input
                            id="name"
                            required
                            className="w-full bg-transparent border-0 border-b border-stone-300 dark:border-stone-700 focus:ring-0 focus:border-primary px-0 py-3 dark:text-white"
                            placeholder="Kedar Kumbhar"
                            type="text"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] tracking-widest uppercase font-semibold text-stone-500">
                            Email Address
                        </label>
                        <input
                            id="email"
                            required
                            className="w-full bg-transparent border-0 border-b border-stone-300 dark:border-stone-700 focus:ring-0 focus:border-primary px-0 py-3 dark:text-white"
                            type="email"
                        />
                    </div>

                    <div className="md:col-span-2 space-y-2 pt-4">
                        <label className="text-[10px] tracking-widest uppercase font-semibold text-stone-500">
                            Inquiry Details
                        </label>
                        <textarea
                            id="message"
                            required
                            className="w-full bg-transparent border-0 border-b border-stone-300 dark:border-stone-700 focus:ring-0 focus:border-primary px-0 py-3 dark:text-white"
                            rows="3"
                        />
                    </div>

                    <div className="md:col-span-2 text-center pt-8">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`bg-stone-900 dark:bg-white text-white dark:text-black px-16 py-5 text-xs tracking-[0.3em] uppercase hover:bg-primary dark:hover:bg-primary transition-colors ${isLoading ? 'btn-loading' : ''}`}
                        >
                            Send Inquiry
                        </button>
                    </div>
                </form>
            </div>

            <SuccessModal isOpen={showModal} onClose={closeModal} />
        </section>
    );
}

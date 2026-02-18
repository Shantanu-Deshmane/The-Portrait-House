/**
 * Success modal shown after WhatsApp form submission.
 * Controlled by isOpen prop. Closes on backdrop click or button click.
 */
export default function SuccessModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div
            className="success-modal active"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div className="modal-content">
                <div className="success-icon">
                    <span className="material-icons-outlined text-white text-3xl">check</span>
                </div>
                <h3 className="text-2xl font-display mb-2">Thank You!</h3>
                <p className="text-stone-500 mb-6">
                    Your inquiry has been sent successfully. We&apos;ll get back to you soon.
                </p>
                <button
                    onClick={onClose}
                    className="px-8 py-3 bg-stone-900 dark:bg-white text-white dark:text-black text-xs uppercase tracking-widest hover:bg-primary transition-colors"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

import { useState, useCallback } from 'react';
import { STUDIO } from '../constants/site';

/**
 * Reusable WhatsApp form hook.
 * Handles validation, message building, and WhatsApp redirect.
 * Used by both the mini contact form (Home) and full booking form (ContactUs).
 *
 * @param {'contact-form' | 'full-contact-form'} formType
 * @returns {{ handleSubmit, isLoading, showModal, closeModal }}
 */
export function useWhatsAppForm(formType) {
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const showFieldError = (field, message) => {
        field.classList.add('form-error');
        // Remove existing error message if any
        const existing = field.parentNode.querySelector('.error-message');
        if (existing) existing.remove();
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    };

    const clearErrors = (form) => {
        form.querySelectorAll('.form-error').forEach((el) => el.classList.remove('form-error'));
        form.querySelectorAll('.error-message').forEach((el) => el.remove());
    };

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const form = e.currentTarget;
        clearErrors(form);

        let isValid = true;
        let message = `*New Inquiry from The Portrait House*\n\n`;

        if (formType === 'contact-form') {
            const name = form.querySelector('#name');
            const email = form.querySelector('#email');
            const inquiry = form.querySelector('#message');

            if (!name.value.trim()) { showFieldError(name, 'Please enter your name'); isValid = false; }
            if (!email.value.trim()) { showFieldError(email, 'Please enter your email'); isValid = false; }
            else if (!validateEmail(email.value)) { showFieldError(email, 'Please enter a valid email'); isValid = false; }
            if (!inquiry.value.trim()) { showFieldError(inquiry, 'Please enter your inquiry'); isValid = false; }

            if (isValid) {
                message += `*Name:* ${name.value}\n`;
                message += `*Email:* ${email.value}\n`;
                message += `*Inquiry:* ${inquiry.value}`;
            }
        } else if (formType === 'full-contact-form') {
            const name = form.querySelector('#full-name');
            const email = form.querySelector('#full-email');
            const type = form.querySelector('#inquiry-type');
            const date = form.querySelector('#preferred-date');
            const vision = form.querySelector('#vision');

            if (!name.value.trim()) { showFieldError(name, 'Please enter your name'); isValid = false; }
            if (!email.value.trim()) { showFieldError(email, 'Please enter your email'); isValid = false; }
            else if (!validateEmail(email.value)) { showFieldError(email, 'Please enter a valid email'); isValid = false; }
            if (!vision.value.trim()) { showFieldError(vision, 'Please describe your vision'); isValid = false; }

            if (isValid) {
                message += `*Name:* ${name.value}\n`;
                message += `*Email:* ${email.value}\n`;
                message += `*Inquiry Type:* ${type.value}\n`;
                message += `*Preferred Date:* ${date.value || 'Not specified'}\n`;
                message += `*Vision:* ${vision.value}`;
            }
        }

        if (isValid) {
            setIsLoading(true);
            const encoded = encodeURIComponent(message);
            window.open(`https://wa.me/${STUDIO.whatsapp}?text=${encoded}`, '_blank');
            setTimeout(() => {
                setIsLoading(false);
                setShowModal(true);
                form.reset();
            }, 500);
        }
    }, [formType]);

    const closeModal = useCallback(() => setShowModal(false), []);

    return { handleSubmit, isLoading, showModal, closeModal };
}

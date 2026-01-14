// Navigation Active State
function updateActiveLinks() {
    const currentPage = window.location.pathname.split('/').pop().split('.')[0] || 'index';
    const links = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
    links.forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('text-primary');
            // Mobile specific active state
            const underline = link.querySelector('span');
            if (underline) underline.classList.add('w-full');
        }
    });
}

function updateYear() {
    const yearEls = document.querySelectorAll('.current-year');
    yearEls.forEach(el => el.textContent = new Date().getFullYear());
}

// Theme Management
function initTheme() {
    // Core theme class application is handled by head script to prevent FOUC.
    // Here we just ensure the icons are updated correctly on load.
    updateThemeIcon();

    // Toggle listener - attach to all possible toggle buttons
    const toggleButtons = document.querySelectorAll('#mode-toggle, .theme-toggle-btn');
    toggleButtons.forEach(btn => {
        // Remove old listener if any and add new one
        btn.onclick = null;
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleTheme();
        });
    });
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const icons = document.querySelectorAll('.theme-toggle-btn span, #mode-toggle span');
    const isDark = document.documentElement.classList.contains('dark');
    icons.forEach(icon => {
        if (icon) {
            icon.innerText = isDark ? 'light_mode' : 'dark_mode';
        }
    });
}

// Gallery Filtering and Load More
let currentVisibleItems = 9;
const itemsPerLoad = 9;

function updateGalleryVisibility() {
    const items = document.querySelectorAll('.gallery-item');
    const loadMoreBtn = document.getElementById('load-more-btn');

    if (!items.length) return;

    items.forEach((item, index) => {
        if (index < currentVisibleItems) {
            item.style.display = 'block';
            setTimeout(() => item.style.opacity = '1', 10);
        } else {
            item.style.display = 'none';
            item.style.opacity = '0';
        }
    });

    if (loadMoreBtn) {
        loadMoreBtn.style.display = currentVisibleItems >= items.length ? 'none' : 'inline-block';
    }
}

function initGallery() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const loadMoreBtn = document.getElementById('load-more-btn');

    updateGalleryVisibility();

    loadMoreBtn?.addEventListener('click', () => {
        currentVisibleItems += itemsPerLoad;
        updateGalleryVisibility();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update button states
            filterBtns.forEach(b => {
                b.classList.remove('active', 'text-slate-900', 'dark:text-white');
                b.classList.add('text-slate-500');
            });
            btn.classList.add('active', 'text-slate-900', 'dark:text-white');
            btn.classList.remove('text-slate-500');

            // Get filter category from button text
            const filterText = btn.innerText.trim().toLowerCase();
            const items = document.querySelectorAll('.gallery-item');

            items.forEach(item => {
                const categorySpan = item.querySelector('.overlay span');
                const category = categorySpan ? categorySpan.innerText.trim().toLowerCase() : '';

                // Check if should show this item
                const shouldShow = filterText === 'all works' ||
                    category.includes(filterText) ||
                    filterText.includes(category);

                if (shouldShow) {
                    item.style.display = 'block';
                    setTimeout(() => { item.style.opacity = '1'; }, 50);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => { item.style.display = 'none'; }, 300);
                }
            });
        });
    });
}

// Form Validation and WhatsApp Handling
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeSuccessModal() {
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function clearValidationErrors(form) {
    form.querySelectorAll('.form-error').forEach(el => el.classList.remove('form-error'));
    form.querySelectorAll('.error-message').forEach(el => el.remove());
}

function showFieldError(field, message) {
    field.classList.add('form-error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function handleWhatsAppSubmit(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearValidationErrors(form);

        let isValid = true;
        const adminWhatsapp = "919511236233";
        let message = `*New Inquiry from The Portrait House*\n\n`;

        if (formId === 'contact-form') {
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const inquiryField = document.getElementById('message');

            if (!nameField.value.trim()) {
                showFieldError(nameField, 'Please enter your name');
                isValid = false;
            }
            if (!emailField.value.trim()) {
                showFieldError(emailField, 'Please enter your email');
                isValid = false;
            } else if (!validateEmail(emailField.value)) {
                showFieldError(emailField, 'Please enter a valid email');
                isValid = false;
            }
            if (!inquiryField.value.trim()) {
                showFieldError(inquiryField, 'Please enter your inquiry');
                isValid = false;
            }

            if (isValid) {
                message += `*Name:* ${nameField.value}\n`;
                message += `*Email:* ${emailField.value}\n`;
                message += `*Inquiry:* ${inquiryField.value}`;
            }
        } else if (formId === 'full-contact-form') {
            const nameField = document.getElementById('full-name');
            const emailField = document.getElementById('full-email');
            const typeField = document.getElementById('inquiry-type');
            const dateField = document.getElementById('preferred-date');
            const visionField = document.getElementById('vision');

            if (!nameField.value.trim()) {
                showFieldError(nameField, 'Please enter your name');
                isValid = false;
            }
            if (!emailField.value.trim()) {
                showFieldError(emailField, 'Please enter your email');
                isValid = false;
            } else if (!validateEmail(emailField.value)) {
                showFieldError(emailField, 'Please enter a valid email');
                isValid = false;
            }
            if (!visionField.value.trim()) {
                showFieldError(visionField, 'Please describe your vision');
                isValid = false;
            }

            if (isValid) {
                message += `*Name:* ${nameField.value}\n`;
                message += `*Email:* ${emailField.value}\n`;
                message += `*Inquiry Type:* ${typeField.value}\n`;
                message += `*Preferred Date:* ${dateField.value || 'Not specified'}\n`;
                message += `*Vision:* ${visionField.value}`;
            }
        }

        if (isValid) {
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${adminWhatsapp}?text=${encodedMessage}`, '_blank');
            showSuccessModal();
            form.reset();
        }
    });
}

// Close modal on backdrop click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('success-modal')) {
        closeSuccessModal();
    }
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!mobileMenuBtn || !mobileMenu) return;

    const toggleMenu = (show) => {
        if (show) {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        }
    };

    mobileMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu(true);
    });
    closeMenuBtn?.addEventListener('click', () => toggleMenu(false));
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });
}

function initLazyImages() {
    const images = document.querySelectorAll('.lazy-img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
}

// Animated Counter Numbers
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const animateCounter = (counter) => {
        const target = parseInt(counter.dataset.count) || 0;
        const suffix = counter.dataset.suffix || '';
        const duration = 2000; // 2 seconds
        const startTime = performance.now();

        const formatNumber = (num) => {
            if (num >= 1000) {
                return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'k';
            }
            return num.toString();
        };

        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);
            const currentValue = Math.floor(easedProgress * target);

            counter.textContent = formatNumber(currentValue) + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = formatNumber(target) + suffix;
            }
        };

        requestAnimationFrame(updateCounter);
    };

    // Use Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Scroll Reveal Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animate');
    if (!animatedElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize UI features directly
    initTheme();
    initMobileMenu();
    updateActiveLinks();
    updateYear();

    try {
        initLazyImages();
        initCounters();
        initScrollAnimations();
    } catch (e) {
        console.error("Error initializing lazy images:", e);
    }

    try {
        initGallery();
    } catch (e) {
        console.error("Error initializing gallery:", e);
    }

    handleWhatsAppSubmit('contact-form');
    handleWhatsAppSubmit('full-contact-form');
});

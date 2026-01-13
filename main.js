// Theme Management
function initTheme() {
    const theme = localStorage.getItem('theme');
    const isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    updateThemeIcon();

    // Toggle listener for specific ID if it exists
    document.getElementById('mode-toggle')?.addEventListener('click', toggleTheme);
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
            filterBtns.forEach(b => {
                b.classList.remove('active', 'text-slate-900', 'dark:text-white');
                b.classList.add('text-slate-500');
            });
            btn.classList.add('active', 'text-slate-900', 'dark:text-white');
            btn.classList.remove('text-slate-500');

            const items = document.querySelectorAll('.gallery-item');
            items.forEach(item => {
                item.style.opacity = '0';
                setTimeout(() => { item.style.opacity = '1'; }, 100);
            });
        });
    });
}

// WhatsApp Form Handling
function handleWhatsAppSubmit(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const adminWhatsapp = "919511236233";
        let message = `*New Inquiry from The Portrait House*\n\n`;

        if (formId === 'contact-form') {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const inquiry = document.getElementById('message').value;

            message += `*Name:* ${name}\n`;
            message += `*Email:* ${email}\n`;
            message += `*Inquiry:* ${inquiry}`;
        } else if (formId === 'full-contact-form') {
            const name = document.getElementById('full-name').value;
            const email = document.getElementById('full-email').value;
            const type = document.getElementById('inquiry-type').value;
            const date = document.getElementById('preferred-date').value;
            const vision = document.getElementById('vision').value;

            message += `*Name:* ${name}\n`;
            message += `*Email:* ${email}\n`;
            message += `*Inquiry Type:* ${type}\n`;
            message += `*Preferred Date:* ${date || 'Not specified'}\n`;
            message += `*Vision:* ${vision}`;
        }

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${adminWhatsapp}?text=${encodedMessage}`, '_blank');
    });
}

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

    mobileMenuBtn.addEventListener('click', () => toggleMenu(true));
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

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    try {
        initTheme();
        initLazyImages();
    } catch (e) {
        console.error("Error initializing theme:", e);
    }

    try {
        initGallery();
    } catch (e) {
        console.error("Error initializing gallery:", e);
    }

    try {
        initMobileMenu();
    } catch (e) {
        console.error("Error initializing mobile menu:", e);
    }

    handleWhatsAppSubmit('contact-form');
    handleWhatsAppSubmit('full-contact-form');

    // Attach theme toggle to all buttons with relevant class or inline handlers
    // This is a safety measure to catch any buttons across different pages
    const toggleButtons = document.querySelectorAll('#mode-toggle, .theme-toggle-btn, [onclick*="classList.toggle(\'dark\')"]');
    toggleButtons.forEach(btn => {
        if (!btn.classList.contains('theme-toggle-btn')) {
            btn.classList.add('theme-toggle-btn');
        }
        btn.removeAttribute('onclick');
        // Avoid adding multiple listeners if already added in initTheme
        if (btn.id !== 'mode-toggle') {
            btn.addEventListener('click', toggleTheme);
        }
    });
});

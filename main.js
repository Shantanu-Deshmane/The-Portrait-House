// Component Injection
async function injectComponents() {
    const components = document.querySelectorAll('[data-include]');
    const promises = Array.from(components).map(async (el) => {
        const componentName = el.getAttribute('data-include');
        try {
            console.log(`Fetching component: ${componentName}`);
            const response = await fetch(`components/${componentName}.html`);
            if (response.ok) {
                const html = await response.text();
                el.innerHTML = html;
                el.removeAttribute('data-include');
                console.log(`Successfully injected ${componentName}`);
            } else {
                console.error(`Failed to load component ${componentName}: ${response.status} ${response.statusText}`);
                if (window.location.protocol === 'file:') {
                    el.innerHTML = `<div style="padding: 20px; text-align: center; background: #fee2e2; color: #991b1b; border: 1px solid #f87171; border-radius: 8px; margin: 10px;">
                        <strong>CORS Error:</strong> Browsers block 'fetch' for local files. 
                        <br>Please run <code>npm run dev</code> to view the header/footer.
                    </div>`;
                }
            }
        } catch (e) {
            console.error(`Error loading component ${componentName}:`, e);
            if (window.location.protocol === 'file:') {
                el.innerHTML = `<div style="padding: 20px; text-align: center; background: #fee2e2; color: #991b1b; border: 1px solid #f87171; border-radius: 8px; margin: 10px;">
                        <strong>Loading Error:</strong> ${e.message}
                        <br>This usually happens when opening files directly (file://). 
                        <br>Please run <code>npm run dev</code> in your terminal.
                    </div>`;
            }
        }
    });

    await Promise.all(promises);

    // Once components are injected, re-initialize their specific features
    initTheme();
    initMobileMenu();
    updateActiveLinks();
    updateYear();
}

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

// Initialize everything
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Inject components first
    await injectComponents();

    // 2. Initialize UI features
    try {
        initLazyImages();
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

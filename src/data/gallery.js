// All gallery items — single source of truth
// To add a new image: add an entry here with the correct category
// Categories: 'wedding' | 'pre-wedding' | 'engagement' | 'outdoor' | 'bride' | 'cinematography'

export const GALLERY_ITEMS = [
    // Wedding
    { src: '/assets/wedding/01.webp', alt: 'Wedding: Sacred Moment', category: 'wedding', title: 'The Sacred Ritual' },
    { src: '/assets/wedding/02.webp', alt: 'Wedding: Timeless Vow', category: 'wedding', title: 'Timeless Vow' },
    { src: '/assets/wedding/03.webp', alt: 'Wedding: Joyful Union', category: 'wedding', title: 'Joyful Union' },
    { src: '/assets/wedding/04.webp', alt: 'Wedding: Eternal Flame', category: 'wedding', title: 'Eternal Flame' },
    { src: '/assets/wedding/05.webp', alt: 'Wedding: Sacred Bond', category: 'wedding', title: 'Sacred Bond' },
    { src: '/assets/wedding/06.webp', alt: 'Wedding: Grand Entrance', category: 'wedding', title: 'Grand Entrance' },
    { src: '/assets/wedding/07.webp', alt: 'Wedding: Pure Emotion', category: 'wedding', title: 'Pure Emotion' },

    // Pre-Wedding
    { src: '/assets/pre-wedding/(1).webp', alt: 'Pre-Wedding: Garden Serenity', category: 'pre-wedding', title: 'Garden Serenity' },
    { src: '/assets/pre-wedding/(2).webp', alt: 'Pre-Wedding: Ethereal Light', category: 'pre-wedding', title: 'Ethereal Light' },
    { src: '/assets/pre-wedding/(3).webp', alt: 'Pre-Wedding: Urban Romance', category: 'pre-wedding', title: 'Urban Romance' },
    { src: '/assets/pre-wedding/(4).webp', alt: 'Pre-Wedding: Enchanted Love', category: 'pre-wedding', title: 'Enchanted Love' },
    { src: '/assets/pre-wedding/(5).webp', alt: 'Pre-Wedding: Dreamy Sunset', category: 'pre-wedding', title: 'Romantic Sunset Bliss' },
    { src: '/assets/pre-wedding/(6).webp', alt: 'Pre-Wedding: Golden Moments', category: 'pre-wedding', title: 'Golden Moments' },

    // Bride
    { src: '/assets/bride/(1).webp', alt: 'Bride: Radiant Grace', category: 'bride', title: 'Radiant Bridal Grace' },
    { src: '/assets/bride/(2).webp', alt: 'Bride: Elegance Redefined', category: 'bride', title: 'Elegance Redefined' },
    { src: '/assets/bride/(3).webp', alt: 'Bride: Bridal Glow', category: 'bride', title: 'Stunning Bridal Glow' },
    { src: '/assets/bride/(4).webp', alt: 'Bride: Majestic Beauty', category: 'bride', title: 'Majestic Bridal Portraits' },
    { src: '/assets/bride/(5).webp', alt: 'Bride: Timeless Grace', category: 'bride', title: 'Timeless Bridal Grace' },
    { src: '/assets/bride/(6).webp', alt: 'Bride: Divine Aura', category: 'bride', title: 'Divine Bridal Aura' },
    { src: '/assets/bride/(7).webp', alt: 'Bride: Captivating Soul', category: 'bride', title: 'Captivating Bridal Soul' },

    // Outdoor
    { src: '/assets/outdoor/1.webp', alt: 'Outdoor: Nature\'s Embrace', category: 'outdoor', title: "Nature's Embrace" },
    { src: '/assets/outdoor/2.webp', alt: 'Outdoor: Golden Hour', category: 'outdoor', title: 'Golden Hour' },
    { src: '/assets/outdoor/3.webp', alt: 'Outdoor: Sunset Dreams', category: 'outdoor', title: 'Sunset Nature Serenity' },
    { src: '/assets/outdoor/4.webp', alt: 'Outdoor: Rural Charm', category: 'outdoor', title: 'Rural Charm' },
    { src: '/assets/outdoor/5.webp', alt: 'Outdoor: Evening Mist', category: 'outdoor', title: 'Evening Mist' },

    // Engagement
    { src: '/assets/engagement/img1.webp', alt: 'Engagement: Forever Begins', category: 'engagement', title: 'Forever Begins' },
    { src: '/assets/engagement/img2.webp', alt: 'Engagement: Sweet Promises', category: 'engagement', title: 'Sweet Promises' },
    { src: '/assets/engagement/img3.webp', alt: 'Engagement: The Promise', category: 'engagement', title: 'The Promise' },
    { src: '/assets/engagement/img4.webp', alt: 'Engagement: Hand in Hand', category: 'engagement', title: 'Hand in Hand' },
    { src: '/assets/engagement/img5.webp', alt: 'Engagement: The Celebration', category: 'engagement', title: 'The Celebration' },
    { src: '/assets/engagement/img6.webp', alt: 'Engagement: Together Forever', category: 'engagement', title: 'Together Forever' },

    // Cinematography
    { src: '/assets/video/video1.mp4', type: 'video', alt: 'Cinematography: The Story Untold', category: 'cinematography', title: 'The Story Untold' },
];

// Featured items shown on the Home page (9 items, one per category)
export const FEATURED_GALLERY = [
    GALLERY_ITEMS.find(i => i.category === 'wedding' && i.src.includes('02')),
    GALLERY_ITEMS.find(i => i.category === 'pre-wedding' && i.src.includes('(3)')),
    GALLERY_ITEMS.find(i => i.category === 'bride' && i.src.includes('(2)')),
    GALLERY_ITEMS.find(i => i.category === 'outdoor' && i.src.includes('2')),
    GALLERY_ITEMS.find(i => i.category === 'engagement' && i.src.includes('img5')),
    GALLERY_ITEMS.find(i => i.category === 'bride' && i.src.includes('(7)')),
    GALLERY_ITEMS.find(i => i.category === 'wedding' && i.src.includes('03')),
    GALLERY_ITEMS.find(i => i.category === 'bride' && i.src.includes('(5)')),
    GALLERY_ITEMS.find(i => i.category === 'outdoor' && i.src.includes('5')),
].filter(Boolean);

// All unique categories for the filter bar
export const GALLERY_CATEGORIES = [
    { label: 'All Works', value: 'all' },
    { label: 'Wedding', value: 'wedding' },
    { label: 'Pre-Wedding', value: 'pre-wedding' },
    { label: 'Engagement', value: 'engagement' },
    { label: 'Outdoor', value: 'outdoor' },
    { label: 'Bride', value: 'bride' },
    { label: 'Cinematography', value: 'cinematography' },
];

// Single source of truth for all studio information
// Update here and it reflects everywhere in the app

export const STUDIO = {
    name: 'The Portrait House',
    phone: '+91 95112 36233',
    whatsapp: '919511236233',
    email: 'theportraithouse15@gmail.com',
    address: {
        line1: 'A/p Karad, Tal-Karad,',
        line2: 'Dist-Satara, Maharashtra, 415110',
    },
    instagram: 'https://www.instagram.com/theportraithouse15/',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Karad+Maharashtra+415110',
    hours: {
        weekdays: 'Tuesday – Saturday: 10:00 AM – 6:00 PM',
        weekend: 'Sunday & Monday: By Appointment Only',
    },
    developer: {
        name: 'ChaarTech Technologies Pvt. Ltd',
        url: 'https://chaartech.in',
    },
};

export const NAV_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
];

export const INQUIRY_TYPES = [
    'Wedding Photography',
    'Pre-Wedding',
    'Engagement',
    'Outdoor Photography',
    'Cinematography',
    'Other',
];

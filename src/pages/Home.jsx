import { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import FeaturedGallery from '../components/sections/FeaturedGallery';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactForm from '../components/sections/ContactForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Home() {
    useScrollAnimation();

    useEffect(() => {
        document.title = 'The Portrait House | Luxury Photography Studio';
    }, []);

    return (
        <main id="main-content">
            <HeroSection />
            <AboutSection />
            <FeaturedGallery />
            <TestimonialsSection limit={3} columns={3} />
            <ContactForm />
        </main>
    );
}

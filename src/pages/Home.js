import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import GamesSection from '../components/GamesSection';
import DevelopersSection from '../components/DevelopersSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GamesSection />
      <DevelopersSection />
      <ContactBanner />
    </div>
  );
}

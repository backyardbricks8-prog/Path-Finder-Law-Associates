import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PracticeAreas from '@/components/PracticeAreas';
import WhyChooseUs from '@/components/WhyChooseUs';
import ReviewsSection from '@/components/ReviewsSection';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import SiteFooter from '@/components/SiteFooter';
import BciModal from '@/components/BciModal';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111]">
      <BciModal />
      <SiteHeader />
      <main className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <PracticeAreas />
        <WhyChooseUs />
        <ReviewsSection />
        <LocationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

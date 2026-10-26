import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceAreaBanner } from './components/ServiceAreaBanner';
import { RealWorkGallery } from './components/RealWorkGallery';
import { EstimateCalculator } from './components/EstimateCalculator';
import { AboutSection } from './components/AboutSection';
import { ServicesBento } from './components/ServicesBento';
import { ReviewsSection } from './components/ReviewsSection';
import { HoursAndLocationSection } from './components/HoursAndLocationSection';
import { QuoteBookingForm } from './components/QuoteBookingForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [preloadedEstimate, setPreloadedEstimate] = useState<{
    service: string;
    scope: string;
    isEmergency: boolean;
    priceRange: string;
  } | null>(null);

  const scrollToContact = (servicePreload?: string) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreloadEstimate = (estimate: {
    service: string;
    scope: string;
    isEmergency: boolean;
    priceRange: string;
  }) => {
    setPreloadedEstimate(estimate);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 pb-16 lg:pb-0 selection:bg-red-600 selection:text-white">
      {/* Top Navbar with Pure Official Logo Emblem (no side text) & Key West Direct Contacts */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Official Logo Emblem & Direct Calling */}
        <Hero />

        {/* 2. Monroe County & Lower Florida Keys Service Island Banner */}
        <ServiceAreaBanner />

        {/* 3. Real Work & Equipment Gallery (Actual Photos from User & Facebook) */}
        <RealWorkGallery />

        {/* 4. Interactive Online Plumbing & Drain Estimate Calculator */}
        <EstimateCalculator
          onPreloadEstimate={handlePreloadEstimate}
        />

        {/* 5. Meet Daniel & Nene's 20-Year Family Plumbing Heritage */}
        <AboutSection />

        {/* 6. Verified Service Offerings (Drains, Commercial Restaurant Grease, Water Heaters, Toilets) */}
        <ServicesBento
          onSelectService={() => scrollToContact()}
        />

        {/* 7. 100% Real Verified Google Reviews (4.9 ★ Rating) */}
        <ReviewsSection />

        {/* 8. Operating Hours & Key West Dispatch Base (1510 Josephine St) */}
        <HoursAndLocationSection />

        {/* 9. Local Service Request & Emergency Dispatch Form */}
        <QuoteBookingForm
          preloadedEstimate={preloadedEstimate}
          onClearPreload={() => setPreloadedEstimate(null)}
        />

        {/* 10. Local Key West Homeowner & Commercial FAQ */}
        <FaqSection />
      </main>

      {/* Pure Logo & Operating Hours Footer */}
      <Footer />

      {/* Mobile Sticky Quick Bar */}
      <MobileQuickBar />
    </div>
  );
}

import React from 'react';
import NavBar from '@/components/NavBar';
import HowItWorks from '@/components/HowItWorks';
import BenefitsSection from '@/components/BenefitsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-16">
        <header className="relative py-16 md:py-24">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <p className="text-theme-blue uppercase tracking-[0.3em] text-xs mb-4">Hoe werkt het?</p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Uw kwaliteit, onze zorg. Zo gaan we te werk.</h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Van offerte-aanvraag tot rapportage en optimalisatie: wij koppelen uw vraag aan de juiste specialisten en leveren direct toepasbaar advies.
            </p>
          </div>
        </header>
        <HowItWorks />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;

import React, { useEffect, useRef } from 'react';
import CyberCard from '@/components/CyberCard';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  // Added version param to force cache refresh
  const videoSrc = '/video/brains.mp4?v=2';
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {
        // ignore autoplay errors
      });
    }
  }, []);

  return (
    <header className="vvc-theme relative py-16 md:py-24 overflow-hidden">
      <div className="vvc-aurora">
        <div className="vvc-blob vvc-blob-1" />
        <div className="vvc-blob vvc-blob-2" />
        <div className="vvc-blob vvc-blob-3" />
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-start justify-between relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 space-y-6"
        >
          <div className="vvc-title-card inline-block mt-6 sm:mt-8">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-glow flex flex-col gap-1 items-center lg:items-start">
              <span>Verdienende</span>
              <span>Vrienden</span>
              <span className="accent-text mt-1">Club</span>
            </h1>
          </div>

          <div className="vvc-divider" />

          <div className="vvc-text-card text-lg md:text-xl text-white/85 max-w-xl mx-auto lg:mx-0 space-y-3 mt-80 sm:mt-96">
            <p>Wij optimaliseren bedrijfsprocessen en klantcontact met unieke strategie, technologie en uitvoering.</p>
            <p>Processen lopen efficiënter, fouten nemen af en klantinteracties worden consistenter en beter gestuurd.</p>
            <p>Organisaties werken sneller, besparen kosten en bieden een klantbeleving die zichtbaar professioneler en betrouwbaarder is.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#cta"
              className="vvc-glass-btn inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              Offerte aanvragen
            </a>
            <a
              href="#about"
              className="vvc-glass-btn inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-2xl text-lg font-medium opacity-90 hover:opacity-100"
            >
              Wat wij doen
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="lg:w-1/2 w-full mt-4 sm:mt-6"
        >
          <div className="vvc-glass-panel p-4 sm:p-6 rounded-3xl">
            <div className="aspect-video bg-black/50 rounded-2xl overflow-hidden border border-white/10">
              <video
                ref={videoRef}
                key={videoSrc}
                className="w-full h-full object-cover scale-[1.1]"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={() => {
                  const v = videoRef.current;
                  if (v) {
                    v.muted = true;
                    v.play().catch(() => {});
                  }
                }}
              >
                <source src={videoSrc} type="video/mp4" />
                Je browser ondersteunt deze video niet.
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;

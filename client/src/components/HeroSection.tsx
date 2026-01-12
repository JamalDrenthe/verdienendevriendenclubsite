import React, { useEffect, useRef } from 'react';
import CyberCard from '@/components/CyberCard';
import { motion } from 'framer-motion';
import brainsVideo from '/video/brains.mp4';

const HeroSection: React.FC = () => {
  const videoSrc = brainsVideo || '/video/brains.mp4';
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
    <header className="relative py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welkom bij de
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light mt-2">Verdienende Vrienden Club (VVC)</span>
          </h1>
          <p className="text-xl mb-8 text-white/80 max-w-lg">
            Specialisten in kwaliteitscontrole & optimalisatie. Wij helpen organisaties hun processen, producten en klantcontact naar het hoogste niveau te tillen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#cta" className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl hover:bg-white/30 transition-all duration-200 font-medium">
              Offerte aanvragen
            </a>
            <a href="#about" className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-200 font-medium">
              Wat wij doen
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="lg:w-1/2"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="aspect-video bg-black/40 rounded-2xl overflow-hidden border border-white/10">
              <video
                ref={videoRef}
                key={videoSrc}
                className="w-full h-full object-cover"
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

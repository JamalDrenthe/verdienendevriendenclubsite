import React from 'react';
import CyberCard from '@/components/CyberCard';

const HeroSection: React.FC = () => {
  return (
    <header className="relative overflow-hidden py-12 md:py-20">
      {/* Background with a dark futuristic digital grid with neon blue and green lines */}
      <div className="absolute inset-0 bg-cyber-dark" style={{backgroundImage: "url('https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.4}}></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/80 to-cyber-dark"></div>
      
      <div className="relative container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="block text-white">Verdienende</span>
            <span className="text-cyber-green relative">
              Vrienden Club
              <span className="absolute -inset-1 bg-cyber-green/20 blur-xl -z-10"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl mx-auto lg:mx-0">
            Een futuristisch platform voor jongeren om samen geld te verdienen, via missies, referrals en persoonlijke groei.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#cta" className="bg-gradient-to-r from-cyber-green to-cyber-blue px-6 py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-neon-green transition-all duration-300 hover:scale-105">
              Word Lid
            </a>
            <a href="#how-it-works" className="bg-cyber-gray border border-cyber-green/50 px-6 py-3 rounded-lg font-bold text-lg hover:bg-cyber-green/10 transition-all duration-300">
              Ontdek Meer
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <CyberCard />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple"></div>
      <div className="absolute bottom-1 left-0 w-full h-px bg-gradient-to-r from-cyber-green/50 via-cyber-blue/50 to-cyber-purple/50"></div>
    </header>
  );
};

export default HeroSection;

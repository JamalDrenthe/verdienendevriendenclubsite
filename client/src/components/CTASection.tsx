import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-theme-light-bg/60 backdrop-blur-[1px]"></div>
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-theme-white rounded-3xl shadow-xl p-8 md:p-12 border border-theme-gray/20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-theme-text-primary mb-6">
                Interesse in een <span className="text-theme-blue">samenwerking</span>?
              </h2>
              <p className="text-xl mb-8 text-theme-text-secondary max-w-2xl mx-auto leading-relaxed">
                Wilt u de kwaliteit binnen uw organisatie waarborgen? Vraag onderaan deze pagina vrijblijvend een offerte aan.
              </p>
              
              <a href="mailto:info@vvc-club.nl?subject=Offerte%20aanvraag%20VVC" className="inline-block bg-theme-blue text-theme-white px-8 py-4 rounded-xl font-medium text-lg shadow-md hover:bg-theme-blue/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-theme-white">
                Offerte aanvragen
              </a>
              
              <p className="mt-6 text-sm text-theme-text-muted">
                Vrijblijvend. We denken graag met je mee.
              </p>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="text-center p-6 bg-theme-light-bg rounded-2xl">
                  <div className="text-3xl font-bold text-theme-blue mb-2">360°</div>
                  <div className="text-sm text-theme-text-secondary">Aanpak</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              >
                <div className="text-center p-6 bg-theme-light-bg rounded-2xl">
                  <div className="text-3xl font-bold text-theme-purple mb-2">3</div>
                  <div className="text-sm text-theme-text-secondary">Niveaus</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              >
                <div className="text-center p-6 bg-theme-light-bg rounded-2xl">
                  <div className="text-3xl font-bold text-theme-text-primary mb-2">4</div>
                  <div className="text-sm text-theme-text-secondary">Sectoren</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

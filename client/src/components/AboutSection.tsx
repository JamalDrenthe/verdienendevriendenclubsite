import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Wat is <span className="text-white/90">VVC</span>?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Een netwerk dat staat voor kwaliteit. Wij helpen organisaties hun processen, producten en klantcontact naar het hoogste niveau te tillen.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-2 md:order-1"
          >
            <div className="vvc-glass-panel rounded-3xl p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    Wat wij doen
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    Wij bieden diepgaande kwaliteitscontroles, variërend van digitale audits tot fysieke inspecties. Onze focus ligt op kwaliteitscontrole, systeem- & workflowtesten en mystery shopping.
                  </p>
                  <ul className="mt-6 space-y-3 text-white/80 leading-relaxed text-lg">
                    <li>
                      <span className="font-semibold text-white">Kwaliteitscontrole:</span> grondige checks van reviews en productspecificaties.
                    </li>
                    <li>
                      <span className="font-semibold text-white">Systeem- & Workflowtesten:</span> analyseren en optimaliseren van interne bedrijfsprocessen.
                    </li>
                    <li>
                      <span className="font-semibold text-white">Mystery Shopping:</span> echte klantervaringen in kaart brengen.
                    </li>
                  </ul>
                </div>
                
                <div className="vvc-glass-panel rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-3 text-white">Onze Methode</h4>
                  <p className="text-white/80 leading-relaxed">
                    Wij geloven in een 360-graden aanpak. Daarom voeren wij onze controles uit op drie niveaus: digitaal (online audits en systeemchecks), fysiek (locatiebezoeken en productinspecties) en telefonisch (klantenservice- en sales-audits).
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-medium border border-white/10">
                      FI
                    </div>
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-medium border border-white/10">
                      VA
                    </div>
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-medium border border-white/10">
                      IT
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    <span className="font-semibold text-white">Actief in 4 sectoren</span> waar kwaliteit het verschil maakt
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden vvc-glass-panel p-0 border-none">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
                  alt="Team dat samenwerkt aan kwaliteitscontrole" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="absolute -bottom-4 -left-4 vvc-glass-panel rounded-2xl p-4">
                <p className="text-2xl font-bold">360°</p>
                <p className="text-sm text-white/80">aanpak</p>
              </div>
              
              <div className="absolute -top-4 -right-4 vvc-glass-panel rounded-2xl p-4">
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-white/80">niveaus</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

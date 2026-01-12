import React from 'react';
import { Clock, Mail, MapPin, MessageCircle, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-theme-light-bg/60 backdrop-blur-[1px]"></div>
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-2xl font-semibold text-theme-text-primary mb-4">
                VVC
              </div>
              <p className="text-theme-text-secondary mb-6 leading-relaxed max-w-sm">
                Verdienende Vrienden Club - het platform waar jongeren samen groeien en verdienen.
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Telefoon" className="group relative w-10 h-10 rounded-full bg-theme-gray/10 flex items-center justify-center hover:bg-theme-blue/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-theme-white">
                  <Smartphone aria-hidden="true" className="w-5 h-5 text-theme-text-secondary group-hover:text-theme-blue" />
                </a>
                <a href="#" aria-label="Chat" className="group relative w-10 h-10 rounded-full bg-theme-gray/10 flex items-center justify-center hover:bg-theme-blue/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-theme-white">
                  <MessageCircle aria-hidden="true" className="w-5 h-5 text-theme-text-secondary group-hover:text-theme-blue" />
                </a>
                <a href="#" aria-label="E-mail" className="group relative w-10 h-10 rounded-full bg-theme-gray/10 flex items-center justify-center hover:bg-theme-blue/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-theme-white">
                  <Mail aria-hidden="true" className="w-5 h-5 text-theme-text-secondary group-hover:text-theme-blue" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-theme-text-primary">
                Links
              </h3>
              <ul className="space-y-3 text-theme-text-secondary">
                <li><a href="#about" className="hover:text-theme-blue transition-colors duration-200">Over VVC</a></li>
                <li><a href="#how-it-works" className="hover:text-theme-blue transition-colors duration-200">Hoe het werkt</a></li>
                <li><a href="#benefits" className="hover:text-theme-blue transition-colors duration-200">Voordelen</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-theme-text-primary">
                Contact
              </h3>
              <ul className="space-y-3 text-theme-text-secondary">
                <li className="flex items-center">
                  <MapPin aria-hidden="true" className="mr-3 w-4 h-4 text-theme-blue" />
                  <span>Amsterdam, Nederland</span>
                </li>
                <li className="flex items-center">
                  <Mail aria-hidden="true" className="mr-3 w-4 h-4 text-theme-blue" />
                  <span>info@vvc-club.nl</span>
                </li>
                <li className="flex items-center">
                  <Clock aria-hidden="true" className="mr-3 w-4 h-4 text-theme-blue" />
                  <span>Ma-Vr: 9:00 - 17:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-theme-gray/20 text-center text-theme-text-muted text-sm">
            <p>© 2025 Verdienende Vrienden Club – Alle rechten voorbehouden.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

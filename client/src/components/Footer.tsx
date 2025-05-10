import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-gray border-t border-cyber-green/30 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold text-cyber-green mb-4 relative inline-block">
              VVC
              <div className="absolute -bottom-1 left-0 w-full h-px bg-cyber-green"></div>
            </div>
            <p className="text-gray-400 mb-6">
              Verdienende Vrienden Club - het platform waar jongeren samen groeien en verdienen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cyber-dark flex items-center justify-center hover:bg-cyber-green/20 transition-colors">
                <span className="text-xl">📱</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cyber-dark flex items-center justify-center hover:bg-cyber-green/20 transition-colors">
                <span className="text-xl">💬</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cyber-dark flex items-center justify-center hover:bg-cyber-green/20 transition-colors">
                <span className="text-xl">📧</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-cyber-green transition-colors">Over VVC</a></li>
              <li><a href="#how-it-works" className="hover:text-cyber-green transition-colors">Hoe het werkt</a></li>
              <li><a href="#benefits" className="hover:text-cyber-green transition-colors">Voordelen</a></li>
              <li><a href="#" className="hover:text-cyber-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyber-green transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="mr-2 text-cyber-green">📍</span>
                Amsterdam, Nederland
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-cyber-green">📧</span>
                info@vvc-club.nl
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-cyber-green">⏰</span>
                Ma-Vr: 9:00 - 17:00
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-cyber-green/10 text-center text-gray-500 text-sm">
          <p>© 2025 Verdienende Vrienden Club – Alle rechten voorbehouden.</p>
        </div>
      </div>
      
      {/* Decorative grid lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple opacity-50"></div>
    </footer>
  );
};

export default Footer;

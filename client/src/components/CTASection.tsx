import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="py-20 relative">
      {/* A futuristic cityscape with neon lights */}
      <div className="absolute inset-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-gray/90"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto bg-cyber-dark/80 border border-cyber-green/30 rounded-xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-green/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyber-blue/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-cyber-green/40"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-cyber-blue/40"></div>
          
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om te <span className="text-cyber-green">starten</span>?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-xl mx-auto">
              Word vandaag nog lid van de Verdienende Vrienden Club en begin met het bouwen aan jouw financiële toekomst samen met gelijkgestemde jongeren.
            </p>
            
            <a href="#" className="inline-block bg-gradient-to-r from-cyber-green to-cyber-blue px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-neon-green transition-all duration-300 hover:scale-105 relative group">
              <span className="relative z-10">Word Nu Lid</span>
              <div className="absolute inset-0 rounded-lg bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
            </a>
            
            <p className="mt-6 text-sm text-gray-400">
              Geen verplichtingen. Start wanneer je wilt.
            </p>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-cyber-gray/30 rounded-lg border border-cyber-green/20">
              <div className="text-3xl font-bold text-cyber-green mb-2">500+</div>
              <div className="text-sm text-gray-400">Actieve Leden</div>
            </div>
            <div className="text-center p-4 bg-cyber-gray/30 rounded-lg border border-cyber-blue/20">
              <div className="text-3xl font-bold text-cyber-blue mb-2">€250K+</div>
              <div className="text-sm text-gray-400">Uitbetaald</div>
            </div>
            <div className="text-center p-4 bg-cyber-gray/30 rounded-lg border border-cyber-purple/20">
              <div className="text-3xl font-bold text-cyber-purple mb-2">50+</div>
              <div className="text-sm text-gray-400">Beschikbare Missies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

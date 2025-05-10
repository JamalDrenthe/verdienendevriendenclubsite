import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-gray"></div>
      
      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(0, 255, 170, 0.5) 25%, rgba(0, 255, 170, 0.5) 26%, transparent 27%, transparent 74%, rgba(0, 255, 170, 0.5) 75%, rgba(0, 255, 170, 0.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 170, 0.5) 25%, rgba(0, 255, 170, 0.5) 26%, transparent 27%, transparent 74%, rgba(0, 255, 170, 0.5) 75%, rgba(0, 255, 170, 0.5) 76%, transparent 77%, transparent)", backgroundSize: "50px 50px"}}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold relative">
            Wat is <span className="text-cyber-green">VVC</span>?
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyber-green to-cyber-blue"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-cyber-gray/50 border border-cyber-green/20 rounded-xl p-6 backdrop-blur-sm relative group transform transition-all duration-500 hover:shadow-neon-green/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 to-cyber-blue/5 rounded-xl -z-10"></div>
              
              <h3 className="text-cyber-green text-xl font-bold mb-4">Jouw Financiële Vriend</h3>
              <p className="text-gray-300 mb-4">
                VVC is een platform voor jongeren (16-35 jaar) die elkaar helpen met het opbouwen van financiële vrijheid. Geen saaie gesprekken of theoretische concepten, maar concrete acties die direct geld opleveren.
              </p>
              
              <h3 className="text-cyber-green text-xl font-bold mb-4">Onze Missie</h3>
              <p className="text-gray-300">
                Wij geloven dat jongeren elkaar kunnen motiveren en samen sterker staan. Bij VVC bouw je niet alleen een financiële toekomst, maar ook een netwerk van gelijkgestemde vrienden die samen willen groeien.
              </p>
              
              {/* Decorative corner glows */}
              <div className="absolute top-0 left-0 w-3 h-3 bg-cyber-green/50 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-cyber-blue/50 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            {/* A group of diverse young people collaborating on a project with digital overlays */}
            <div className="rounded-xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" alt="Jongeren die samenwerken" className="w-full h-auto rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-50"></div>
              <div className="absolute inset-0 bg-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Cyber overlay effect */}
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="w-full h-1 bg-cyber-green/50 absolute top-1/4 left-0 transform -skew-y-3"></div>
                <div className="w-full h-1 bg-cyber-purple/50 absolute top-3/4 left-0 transform skew-y-3"></div>
                <div className="w-1 h-full bg-cyber-blue/50 absolute top-0 left-1/3 transform -skew-x-3"></div>
                <div className="w-1 h-full bg-cyber-green/50 absolute top-0 right-1/4 transform skew-x-3"></div>
                
                {/* Scan line animation */}
                <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-cyber-green/10 to-transparent animate-scanline"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

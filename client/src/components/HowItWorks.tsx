import React from 'react';

const StepCard: React.FC<{
  number: number;
  icon: string;
  title: string;
  description: string;
  footer: string;
  color: string;
  hoverShadow: string;
}> = ({ number, icon, title, description, footer, color, hoverShadow }) => {
  return (
    <div className={`bg-cyber-dark/80 border border-${color}/30 rounded-xl p-6 relative group hover:${hoverShadow}/30 transition-all duration-500 transform hover:-translate-y-2`}>
      <div className={`absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-br from-${color} to-cyber-blue flex items-center justify-center text-xl font-bold`}>{number}</div>
      
      <div className="text-center pt-4">
        <div className={`w-20 h-20 mx-auto mb-6 bg-${color}/20 rounded-full flex items-center justify-center`}>
          <i className={`text-3xl text-${color}`}>{icon}</i>
        </div>
        
        <h3 className={`text-xl font-bold mb-4 text-${color}`}>{title}</h3>
        <p className="text-gray-300">
          {description}
        </p>
        
        <div className={`mt-6 pt-6 border-t border-${color}/20`}>
          <span className={`text-xs text-${color}/70`}>{footer}</span>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className={`absolute top-0 right-0 w-6 h-6 border-t border-r border-${color}/40`}></div>
      <div className={`absolute bottom-0 left-0 w-6 h-6 border-b border-l border-${color}/40`}></div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 relative bg-cyber-gray">
      {/* A futuristic tech pattern background with glowing elements */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold relative">
            Hoe <span className="text-cyber-blue">Werkt</span> Het?
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple"></div>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            In slechts drie eenvoudige stappen kun je beginnen met het opbouwen van jouw financiële toekomst samen met anderen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <StepCard 
            number={1}
            icon="📱"
            title="Maak een Account"
            description="Registreer je voor VVC in minder dan 2 minuten. Vul alleen de belangrijkste gegevens in en je kunt meteen beginnen."
            footer="Tijdsduur: < 2 minuten"
            color="cyber-blue"
            hoverShadow="shadow-neon-blue"
          />
          
          {/* Step 2 */}
          <StepCard 
            number={2}
            icon="🎯"
            title="Voer Missies Uit"
            description="Kies uit verschillende missies die passen bij jouw interesses en vaardigheden. Elke voltooide missie levert direct een beloning op."
            footer="Verdien: €10 - €500 per missie"
            color="cyber-purple"
            hoverShadow="shadow-neon-purple"
          />
          
          {/* Step 3 */}
          <StepCard 
            number={3}
            icon="💸"
            title="Groei & Verdien"
            description="Nodig vrienden uit, bouw een netwerk, en verdien commissies op hun activiteiten. Hoe groter je netwerk, hoe meer je verdient."
            footer="Passief inkomen via referrals"
            color="cyber-green"
            hoverShadow="shadow-neon-green"
          />
        </div>
        
        {/* Connector lines between cards (visible on desktop) */}
        <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green"></div>
      </div>
    </section>
  );
};

export default HowItWorks;

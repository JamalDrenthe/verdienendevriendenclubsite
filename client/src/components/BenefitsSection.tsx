import React from 'react';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="bg-cyber-gray/50 backdrop-blur-sm border border-cyber-green/20 rounded-xl p-6 relative group hover:bg-cyber-gray/80 transition-all duration-300">
      <div className={`absolute -top-3 -right-3 w-6 h-6 bg-${color} rounded-br-xl opacity-70`}></div>
      
      <div className={`bg-${color}/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:shadow-neon-${color}/30 transition-all duration-300`}>
        <span className="text-2xl">{icon}</span>
      </div>
      
      <h3 className={`text-xl font-bold mb-3 text-${color}`}>{title}</h3>
      <p className="text-gray-300">
        {description}
      </p>
      
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${color}/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-20 relative bg-cyber-dark">
      {/* A futuristic digital network background */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold relative">
            Waarom <span className="text-cyber-green">Meedoen</span>?
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyber-purple to-cyber-green"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Benefit 1 */}
          <BenefitCard 
            icon="✅"
            title="Geen Verplichtingen"
            description="Jij bepaalt wanneer en hoeveel tijd je besteedt. Geen targets of deadlines, alleen mogelijkheden."
            color="cyber-green"
          />
          
          {/* Benefit 2 */}
          <BenefitCard 
            icon="🔄"
            title="Verdienmodel via Referral"
            description="Verdien niet alleen van je eigen acties maar ook als je netwerk groeit. Het systeem werkt ook als jij dat niet doet."
            color="cyber-blue"
          />
          
          {/* Benefit 3 */}
          <BenefitCard 
            icon="🚀"
            title="Ontwikkel Je Talenten"
            description="Verbeter je vaardigheden terwijl je verdient. Van digitale marketing tot sales, leer de skills die niet op school worden aangeleerd."
            color="cyber-purple"
          />
          
          {/* Benefit 4 */}
          <div className="bg-cyber-gray/50 backdrop-blur-sm border border-cyber-green/20 rounded-xl p-6 relative group hover:bg-cyber-gray/80 transition-all duration-300">
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-cyber-blue to-cyber-green rounded-br-xl opacity-70"></div>
            
            <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:shadow-neon-green/30 transition-all duration-300">
              <span className="text-2xl">👥</span>
            </div>
            
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">Netwerk & Vrienden</h3>
            <p className="text-gray-300">
              Ontmoet gelijkgestemde jongeren die ook willen groeien. Bouw waardevolle contacten voor de toekomst.
            </p>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-green/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </div>
        </div>
        
        {/* Testimonial Section */}
        <div className="mt-20 relative">
          {/* A group of diverse young people in a casual business setting */}
          <div className="relative rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600" alt="VVC Community" className="w-full h-64 md:h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/80 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="bg-cyber-dark/80 backdrop-blur-md border border-cyber-blue/30 rounded-xl p-6 md:p-8 max-w-3xl">
                <div className="flex flex-col items-center text-center">
                  <div className="text-5xl mb-4">💬</div>
                  <p className="text-xl md:text-2xl italic mb-6 text-gray-200">
                    "Via VVC heb ik niet alleen een extra inkomen kunnen genereren, maar ook vrienden gemaakt die me blijven motiveren. Het is meer dan een platform, het is een community."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4 w-12 h-12 rounded-full bg-cyber-blue/30 flex items-center justify-center text-xl">
                      NV
                    </div>
                    <div className="text-left">
                      <p className="font-bold">Nick Vermeeren</p>
                      <p className="text-sm text-gray-400">VVC-lid sinds 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

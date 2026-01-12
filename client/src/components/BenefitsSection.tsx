import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, MessageCircle, RefreshCw, Rocket, Users } from 'lucide-react';
import { motion } from 'framer-motion';

type BenefitColor = 'theme-blue' | 'theme-purple' | 'theme-gray';

const BENEFIT_STYLES: Record<
  BenefitColor,
  {
    bg: string;
    iconBg: string;
    iconColor: string;
    titleColor: string;
  }
> = {
  'theme-blue': {
    bg: 'bg-theme-blue/5',
    iconBg: 'bg-theme-blue/10',
    iconColor: 'text-theme-blue',
    titleColor: 'text-theme-blue',
  },
  'theme-purple': {
    bg: 'bg-theme-purple/5',
    iconBg: 'bg-theme-purple/10',
    iconColor: 'text-theme-purple',
    titleColor: 'text-theme-purple',
  },
  'theme-gray': {
    bg: 'bg-theme-gray/10',
    iconBg: 'bg-theme-gray/20',
    iconColor: 'text-theme-gray',
    titleColor: 'text-theme-text-primary',
  },
};

interface BenefitCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: BenefitColor;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, color }) => {
  const styles = BENEFIT_STYLES[color];
  const Icon = icon;

  return (
    <div className="group relative">
      <div className="relative bg-theme-white border border-theme-gray/20 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Icon container */}
        <div className={`relative w-16 h-16 ${styles.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
          <Icon aria-hidden="true" className={`w-8 h-8 ${styles.iconColor}`} />
        </div>
        
        <h3 className={`text-xl font-semibold mb-3 ${styles.titleColor}`}>
          {title}
        </h3>
        
        <p className="text-theme-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-theme-light-bg/60 backdrop-blur-[1px]"></div>
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-theme-text-primary mb-4">
            Waarom <span className="text-theme-blue">VVC</span>?
          </h2>
          <p className="text-theme-text-secondary max-w-2xl mx-auto">
            Ontdek hoe VVC jouw organisatie helpt om kwaliteit te borgen en processen te optimaliseren.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Benefit 1 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <BenefitCard 
              icon={CheckCircle}
              title="Onafhankelijke kwaliteitscontrole"
              description="Objectieve checks van reviews, productspecificaties en klantcontact, met heldere verbeterpunten."
              color="theme-blue"
            />
          </motion.div>
          
          {/* Benefit 2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <BenefitCard 
              icon={RefreshCw}
              title="Proces- & workflowtesten"
              description="We analyseren interne processen en systemen en adviseren concrete optimalisaties die direct resultaat geven."
              color="theme-purple"
            />
          </motion.div>
          
          {/* Benefit 3 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <BenefitCard 
              icon={Rocket}
              title="Mystery shopping & klantbeleving"
              description="We meten de echte klantervaring: online, op locatie en telefonisch. Zo zie je wat er echt gebeurt."
              color="theme-gray"
            />
          </motion.div>
          
          {/* Benefit 4 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          >
            <BenefitCard 
              icon={Users}
              title="Heldere rapportage"
              description="Praktische inzichten, prioriteiten en acties zodat teams snel kunnen bijsturen en verbeteren."
              color="theme-blue"
            />
          </motion.div>
        </div>
        
        {/* Testimonial section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-20"
        >
          <div className="bg-theme-white rounded-2xl p-8 shadow-sm border border-theme-gray/20">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-theme-blue rounded-full flex items-center justify-center text-theme-white font-semibold flex-shrink-0">
                JD
              </div>
              <div>
                <p className="text-theme-text-secondary mb-4 italic">
                  "Dankzij VVC kregen we eindelijk helder inzicht in waar het misging. De verbeterpunten waren concreet en direct toepasbaar - onze klantbeleving is zichtbaar gestegen."
                </p>
                <p className="font-semibold text-theme-text-primary">- Jan de Vries</p>
                <p className="text-sm text-theme-text-muted">Samenwerking sinds 2023</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;

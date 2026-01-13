import React from 'react';
import { cn } from '@/lib/utils';
import { FileCheck2, Users2, ShieldCheck, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

type StepColor = 'theme-blue' | 'theme-purple' | 'theme-gray';

const STEP_STYLES: Record<
  StepColor,
  {
    iconBg: string;
    iconColor: string;
    titleColor: string;
    badgeBg: string;
  }
> = {
  'theme-blue': {
    iconBg: 'bg-theme-blue/20',
    iconColor: 'text-theme-blue',
    titleColor: 'text-theme-blue',
    badgeBg: 'bg-theme-blue',
  },
  'theme-purple': {
    iconBg: 'bg-theme-purple/20',
    iconColor: 'text-theme-purple',
    titleColor: 'text-theme-purple',
    badgeBg: 'bg-theme-purple',
  },
  'theme-gray': {
    iconBg: 'bg-white/10',
    iconColor: 'text-white/80',
    titleColor: 'text-white',
    badgeBg: 'bg-white/20',
  },
};

const StepCard: React.FC<{
  number: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  footer?: string;
  bullets?: string[];
  color: StepColor;
}> = ({ number, icon, title, description, footer, bullets, color }) => {
  const styles = STEP_STYLES[color];
  const Icon = icon;

  return (
    <div className="group relative">
      <div className="vvc-glass-panel relative rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
        {/* Step number */}
        <div className={`absolute -top-4 left-8 w-8 h-8 ${styles.badgeBg} text-white rounded-full flex items-center justify-center text-sm font-semibold`}>
          {number}
        </div>
        
        {/* Icon */}
        <div className={`relative w-16 h-16 ${styles.iconBg} rounded-2xl flex items-center justify-center mb-6 mt-4`}>
          <Icon className={`w-8 h-8 ${styles.iconColor}`} />
        </div>
        
        {/* Content */}
        <h3 className={`text-xl font-semibold mb-3 ${styles.titleColor}`}>
          {title}
        </h3>
        
        <p className="text-white/80 leading-relaxed mb-4">{description}</p>

        {bullets && (
          <ul className="space-y-2 text-white/80 mb-4 list-disc list-inside">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        
        {footer && <p className="text-sm text-white/60">{footer}</p>}
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Uw kwaliteit, onze zorg. <span className="text-theme-blue">Zo gaan we te werk.</span>
          </h2>
          <p className="text-white/80 mt-4 max-w-2xl mx-auto text-lg">
            Van aanvraag tot optimalisatie: we koppelen uw vraag aan de juiste specialisten en leveren direct toepasbaar advies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <StepCard 
              number={1}
              icon={FileCheck2}
              title="De Aanvraag"
              description="Heeft u behoefte aan inzicht in uw reviews, workflows of klantbeleving? Vraag onderaan deze pagina of via 'Vrienden worden' een offerte aan."
              footer="Offerte-aanvraag voor reviews, workflows en klantbeleving"
              color="theme-blue"
            />
          </motion.div>
          
          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <StepCard 
              number={2}
              icon={Users2}
              title="De Match"
              description="Wij koppelen uw vraagstuk aan de juiste specialisten binnen onze club. Zoekt u IT-kwaliteitscontrole of een Mystery Shopper in de vastgoedsector? Wij hebben de expert in huis."
              footer="Selectie van domeinexperts voor uw case"
              color="theme-purple"
            />
          </motion.div>
          
          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <StepCard 
              number={3}
              icon={ShieldCheck}
              title="De Check"
              description="Onze 'vrienden' gaan aan de slag. Dit gebeurt discreet en professioneel."
              bullets={[
                'Workflow tests & systeem checks',
                'Productkennis toetsing',
                'Review verificatie',
              ]}
              color="theme-gray"
            />
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          >
            <StepCard 
              number={4}
              icon={BarChart3}
              title="Rapportage & Optimalisatie"
              description="U ontvangt een gedetailleerde rapportage van onze bevindingen. Niet alleen de pijnpunten, maar direct toepasbaar advies om uw business te verbeteren."
              footer="Heldere rapportage + concrete verbeteracties"
              color="theme-blue"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/vrienden-worden"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-theme-blue text-white font-semibold shadow-lg hover:bg-theme-blue/90 transition-colors"
          >
            Vraag nu een offerte aan
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

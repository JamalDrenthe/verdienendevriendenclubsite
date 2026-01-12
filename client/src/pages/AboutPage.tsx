import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Users, Coins, Rocket, Star, Target, Trophy, Eye, Heart, Gem, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { label: 'Gemiddeld OTE', value: '€50k - €95k', icon: Coins },
    { label: 'Klanttevredenheid', value: '9.8/10', icon: Star },
    { label: 'Sectoren', value: 'Elite focus', icon: Gem },
    { label: 'Netwerk', value: '500+ vrienden', icon: Users },
  ];

  const culture = [
    {
      title: 'Vriendschap',
      text: 'Loyaal, eerlijk en gedreven door gedeeld succes. Geen politiek, alleen pure samenwerking.',
      icon: Heart,
    },
    {
      title: 'Executie',
      text: 'Resultaat is de enige waarheid. Wij praten niet, wij leveren. Elke actie telt.',
      icon: Target,
    },
    {
      title: 'Eigenaarschap',
      text: 'Wees de CEO van je eigen route. De vrijheid om te winnen met de rugdekking van de club.',
      icon: Trophy,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-16">
        {/* Hero */}
        <header className="relative py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-r from-theme-blue/40 via-theme-purple/40 to-theme-blue/30 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-white/5 mix-blend-overlay" />
              <div className="absolute -left-24 -top-24 w-64 h-64 bg-theme-blue/30 blur-3xl rounded-full" />
              <div className="absolute -right-16 bottom-0 w-56 h-56 bg-theme-purple/25 blur-3xl rounded-full" />

              <div className="relative px-8 md:px-12 py-14 text-center max-w-4xl mx-auto">
                <p className="text-theme-blue uppercase tracking-[0.35em] text-xs mb-5">Over ons</p>
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">De kwaliteitsclub voor kritische bedrijven</h1>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                  Verdienende Vrienden Club is het snijvlak tussen vriendschap en ongekende groei. Wij herschrijven de regels van succes voor organisaties die scherper willen worden.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Missie & Visie */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-lg">
                <Rocket className="text-theme-blue mb-4" size={36} />
                <h2 className="text-3xl font-semibold text-white mb-4">Missie</h2>
                <p className="text-white/75 text-lg leading-relaxed">
                  Kwaliteit transformeren tot de hoogste valuta. Wij elimineren ruis en valideren workflows om organisaties naar hun absolute top te brengen.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-lg">
                <Eye className="text-theme-purple mb-4" size={36} />
                <h2 className="text-3xl font-semibold text-white mb-4">Visie</h2>
                <p className="text-white/75 text-lg leading-relaxed">
                  Een netwerk waar expertise wordt beloond met groei. Wij bouwen autoriteit in digitale en fysieke controleprocessen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cultuur */}
        <section className="py-16">
          <div className="container mx-auto px-6 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-theme-blue uppercase tracking-[0.3em] text-xs mb-3">Cultuur</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">De fundamenten van de Verdienende Vrienden Club</h2>
              </div>
              <p className="text-white/60 uppercase tracking-[0.25em] text-xs md:text-right">
                Loyaliteit. Executie. Eigenaarschap.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {culture.map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-lg hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <item.icon className="text-theme-blue" size={24} />
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Belofte */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-r from-theme-blue/20 via-theme-purple/20 to-theme-blue/15 backdrop-blur-xl shadow-2xl p-10 md:p-14 text-center">
              <div className="absolute inset-0 bg-white/5 mix-blend-overlay" />
              <div className="relative">
                <div className="mx-auto mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/15">
                  <Award className="text-theme-gold" size={28} />
                </div>
                <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">De VVC Belofte</h2>
                <div className="space-y-4 text-white/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                  <p>"Ongekende scherpte voor onze klanten."</p>
                  <p>"Gegarandeerde groei voor onze vrienden."</p>
                </div>
                <div className="mt-10 inline-flex items-center px-6 py-3 rounded-xl border border-white/20 text-white font-semibold bg-white/10">
                  Wij verliezen nooit.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 border-t border-white/10">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-md">
                <div className="mb-4 flex justify-center">
                  <stat.icon className="text-theme-blue/80" size={24} />
                </div>
                <div className="text-2xl font-semibold text-white mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

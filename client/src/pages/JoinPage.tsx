import React from 'react';
import NavBar from '@/components/NavBar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const JoinPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-16">
        <header className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-20 -top-16 w-64 h-64 bg-theme-blue/15 blur-3xl rounded-full" />
            <div className="absolute right-0 bottom-0 w-72 h-72 bg-theme-purple/15 blur-3xl rounded-full" />
          </div>
          <div className="container mx-auto px-6 text-center max-w-4xl relative">
            <p className="text-theme-blue uppercase tracking-[0.3em] text-xs mb-4">Vrienden worden?</p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Sluit je aan bij de Verdienende Vrienden Club.</h1>
            <p className="text-white/75 text-lg md:text-xl leading-relaxed">
              Kies jouw route: als partner (bedrijf) gebruikmaken van onze kwaliteitscontroles of als talent lid worden en je route opbouwen.
            </p>
          </div>
        </header>

        <section className="pb-16">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
            {/* Optie A: Voor bedrijven */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-lg relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-theme-blue/10 blur-3xl rounded-full" />
              <div className="relative space-y-4">
                <p className="text-theme-blue uppercase tracking-[0.25em] text-xs">Optie A</p>
                <h2 className="text-3xl font-semibold text-white">Voor Bedrijven (Partner worden)</h2>
                <p className="text-white/75 leading-relaxed">
                  Wilt u gebruik maken van onze kwaliteitscontroles? Vraag vrijblijvend een offerte aan. Krijg toegang tot onze database van professionals en verhoog uw klanttevredenheid.
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-1" htmlFor="company">
                      Bedrijfsnaam
                    </label>
                    <input
                      id="company"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-theme-blue/60"
                      placeholder="Uw bedrijf"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1" htmlFor="contact">
                      Contactpersoon
                    </label>
                    <input
                      id="contact"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-theme-blue/60"
                      placeholder="Naam contactpersoon"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1" htmlFor="sector">
                      Sector
                    </label>
                    <input
                      id="sector"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-theme-blue/60"
                      placeholder="Bijv. Finance, Vastgoed, IT"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1" htmlFor="requestType">
                      Type aanvraag
                    </label>
                    <input
                      id="requestType"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-theme-blue/60"
                      placeholder="Offerte / Informatie / Demo"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-theme-blue text-white py-3 rounded-xl font-semibold hover:bg-theme-blue/90 transition-all duration-200 shadow-md"
                  >
                    Vraag offerte aan
                  </button>
                </form>
              </div>
            </div>

            {/* Optie B: Voor talent */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-lg relative overflow-hidden">
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-theme-purple/10 blur-3xl rounded-full" />
              <div className="relative space-y-4">
                <p className="text-theme-purple uppercase tracking-[0.25em] text-xs">Optie B</p>
                <h2 className="text-3xl font-semibold text-white">Voor Talent (Lid worden)</h2>
                <p className="text-white/75 leading-relaxed">
                  Wil jij werken in een omgeving waar je betaald wordt naar prestatie en passief inkomen opbouwt? Bekijk de openstaande vacatures en start jouw onboarding.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  <a
                    href="/vacatures"
                    className="inline-flex items-center justify-center gap-2 bg-theme-white/10 text-white px-4 py-3 rounded-xl font-medium hover:bg-white/20 transition-all"
                  >
                    Bekijk vacatures
                  </a>
                  <a
                    href="/hoe-werkt-het"
                    className="inline-flex items-center justify-center gap-2 bg-theme-purple text-white px-4 py-3 rounded-xl font-medium hover:bg-theme-purple/90 transition-all"
                  >
                    Start onboarding
                  </a>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-1" htmlFor="name">
                      Naam
                    </label>
                    <input
                      id="name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-theme-purple/60"
                      placeholder="Jouw naam"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1" htmlFor="phone">
                      Telefoonnummer
                    </label>
                    <input
                      id="phone"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-theme-purple/60"
                      placeholder="+31 6 12345678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1" htmlFor="linkedin">
                      LinkedIn profiel
                    </label>
                    <input
                      id="linkedin"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-theme-purple/60"
                      placeholder="https://www.linkedin.com/in/..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1" htmlFor="interest">
                      Interesse in functie
                    </label>
                    <input
                      id="interest"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-theme-purple/60"
                      placeholder="Bijv. Senior Consultant, Double Team"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-theme-purple text-white py-3 rounded-xl font-semibold hover:bg-theme-purple/90 transition-all duration-200 shadow-md"
                  >
                    Verstuur aanmelding
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default JoinPage;

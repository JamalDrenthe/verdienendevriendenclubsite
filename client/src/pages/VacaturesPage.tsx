import React, { useRef, useState } from 'react';
import NavBar from '@/components/NavBar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import VVCCalculator from '@/components/VVCCalculator';
import {
  Check,
  Users,
  Trophy,
  Target,
  Briefcase,
  Zap,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Upload,
  FileText,
  Send,
  MapPin,
  X,
} from 'lucide-react';
import { motion } from 'framer-motion';

type NullableBoolean = boolean | null;
type FormDataState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  livesInNL: NullableBoolean;
  city: string;
  housing: string;
  permanentContract: NullableBoolean;
  freelance: NullableBoolean;
  hasFriends: NullableBoolean;
  friendsCount: string;
  hasDiploma: NullableBoolean;
  experienceYears: string;
  salaryRange: string;
  salesExperience: NullableBoolean;
  reason: string;
  cv: string | null;
  motivation: string | null;
};

type ErrorState = Partial<Record<keyof FormDataState, string>>;

const VacaturesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<ErrorState>({});
  const formRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState<FormDataState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    livesInNL: null,
    city: '',
    housing: '',
    permanentContract: null,
    freelance: null,
    hasFriends: null,
    friendsCount: '',
    hasDiploma: null,
    experienceYears: '',
    salaryRange: '',
    salesExperience: null,
    reason: '',
    cv: null,
    motivation: null,
  });

  const totalSteps = 14;

  const handleInputChange = (field: keyof FormDataState, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileUpload = (field: 'cv' | 'motivation', e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, [field]: file.name }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    }
  };

  const validateStep = () => {
    const currentErrors: ErrorState = {};

    if (step === 0) {
      if (!formData.firstName) currentErrors.firstName = 'Voornaam is verplicht';
      if (!formData.lastName) currentErrors.lastName = 'Achternaam is verplicht';
      if (!formData.email) currentErrors.email = 'E-mail is verplicht';
      if (!formData.phone) currentErrors.phone = 'Telefoonnummer is verplicht';
      if (!formData.dob) currentErrors.dob = 'Geboortedatum is verplicht';
    } else if (step === 1 && formData.livesInNL === null) {
      currentErrors.livesInNL = 'Maak een keuze';
    } else if (step === 2 && !formData.city) {
      currentErrors.city = 'Stad is verplicht';
    } else if (step === 3 && !formData.housing) {
      currentErrors.housing = 'Maak een keuze';
    } else if (step === 4 && formData.permanentContract === null) {
      currentErrors.permanentContract = 'Maak een keuze';
    } else if (step === 5 && formData.freelance === null) {
      currentErrors.freelance = 'Maak een keuze';
    } else if (step === 6 && formData.hasFriends === null) {
      currentErrors.hasFriends = 'Maak een keuze';
    } else if (step === 7 && formData.hasFriends === true && !formData.friendsCount) {
      currentErrors.friendsCount = 'Maak een keuze';
    } else if (step === 8 && formData.hasDiploma === null) {
      currentErrors.hasDiploma = 'Maak een keuze';
    } else if (step === 9 && !formData.experienceYears) {
      currentErrors.experienceYears = 'Maak een keuze';
    } else if (step === 10 && !formData.salaryRange) {
      currentErrors.salaryRange = 'Maak een keuze';
    } else if (step === 11 && formData.salesExperience === null) {
      currentErrors.salesExperience = 'Maak een keuze';
    } else if (step === 12 && !formData.reason) {
      currentErrors.reason = 'Vertel ons waarom je hier wilt werken';
    } else if (step === 13) {
      if (!formData.cv) currentErrors.cv = 'CV upload is verplicht';
      if (!formData.motivation) currentErrors.motivation = 'Motivatiebrief is verplicht';
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    let next = step + 1;
    if (step === 6 && formData.hasFriends === false) {
      next = 8;
    }
    setStep(next);
    formRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    let prev = step - 1;
    if (step === 8 && formData.hasFriends === false) {
      prev = 6;
    }
    setStep(prev);
    formRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submitForm = () => {
    setIsSubmitted(true);
  };

  const progress = ((step + 1) / (totalSteps + 1)) * 100;

  const closeModal = () => {
    setIsModalOpen(false);
    setStep(0);
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-16">
        <header className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-32 -top-10 w-64 h-64 rounded-full bg-theme-blue/10 blur-3xl" />
            <div className="absolute right-0 top-10 w-72 h-72 rounded-full bg-theme-purple/10 blur-3xl" />
          </div>
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl">
              <p className="text-theme-blue uppercase tracking-[0.3em] text-xs mb-4">Carrière</p>
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
                Word onderdeel van de Club
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
                Geen bazen, maar partners. Geen kantooruren, maar resultaten. Kies je route, werk met warme leads en bouw aan jouw eigen succesverhaal.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#senior"
                  className="inline-flex items-center gap-2 bg-theme-blue text-white px-5 py-3 rounded-xl font-medium hover:bg-theme-blue/90 transition-all"
                >
                  Bekijk Senior rol <ArrowRight size={16} />
                </a>
                <a
                  href="#duo"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-3 rounded-xl font-medium hover:bg-white/20 transition-all"
                >
                  Pilot Double Team
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-4xl">
              {[
                { label: 'Onbeperkte leads', value: 'Warm netwerk' },
                { label: 'Model', value: '€30/u + €300 per plaatsing' },
                { label: 'Passief inkomen', value: '€25 p/m per kandidaat' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="vvc-glass-panel rounded-2xl p-4"
                >
                  <p className="text-sm text-white/60 mb-1">{item.label}</p>
                  <p className="text-white font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Senior Consultant Vacancy */}
        <section id="senior" className="py-10">
          <div className="container mx-auto px-6">
            <div className="vvc-glass-panel rounded-3xl p-8 md:p-12 mb-12">
              <div className="flex flex-col xl:flex-row gap-10 items-start">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-theme-blue/10 text-theme-blue px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <Trophy size={16} />
                    <span>Senior Consultant</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Senior Consultant (Headhunting & Begeleiding)</h2>
                  <p className="text-theme-blue font-medium text-lg mb-6">Verdien €50k - €95k OTE | Onbeperkte Leads</p>
                  
                  <div className="prose max-w-none text-white/80 space-y-6">
                    <p className="text-lg leading-relaxed">
                      Ben jij klaar met de traditionele kantoorcultuur? Bij de Verdienende Vrienden Club (VVC) werken we niet voor een baas, maar mét elkaar. Wij zijn op zoek naar Senior Consultants die hun eigen succesroute willen bepalen.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="vvc-glass-panel rounded-2xl p-5">
                        <h3 className="text-white text-lg font-semibold mb-3">Jouw rol</h3>
                        <p className="m-0">
                          Als Senior Consultant ben jij de spin in het web. Je vindt toptalent en begeleidt hen door het volledige onboarding-proces bij onze partnerbedrijven. Je krijgt een vaste route en wij begeleiden jou naar succes.
                        </p>
                      </div>
                      <div className="vvc-glass-panel rounded-2xl p-5">
                        <h3 className="text-white text-lg font-semibold mb-3">Wie zoeken wij?</h3>
                        <p className="m-0">
                          Een netwerker pur sang die schakelt met diverse bedrijven en directe impact maakt. Gedreven, zelfstandig en klaar om te scoren.
                        </p>
                      </div>
                    </div>

                    <h3 className="text-white text-xl font-semibold mt-6">Wat wij bieden</h3>
                    <ul className="space-y-3 mb-4 list-none pl-0">
                      <li className="flex gap-3">
                        <Check className="text-theme-blue flex-shrink-0 mt-1" />
                        <span className="text-white/80"><strong className="text-white">Verdienmodel:</strong> €30,- per uur (tijdens bellen) + €300,- bonus per plaatsing.</span>
                      </li>
                      <li className="flex gap-3">
                        <Check className="text-theme-blue flex-shrink-0 mt-1" />
                        <span className="text-white/80"><strong className="text-white">Passief Inkomen:</strong> €25,- per maand per geplaatste kandidaat, zolang je onderdeel bent van de club.</span>
                      </li>
                      <li className="flex gap-3">
                        <Check className="text-theme-blue flex-shrink-0 mt-1" />
                        <span className="text-white/80"><strong className="text-white">Warm Netwerk:</strong> Oneindige warme leads, geen koud bellen.</span>
                      </li>
                      <li className="flex gap-3">
                        <Check className="text-theme-blue flex-shrink-0 mt-1" />
                        <span className="text-white/80"><strong className="text-white">Vrijheid & Zekerheid:</strong> Start flexibel, na succes een jaarcontract van 40 uur.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="w-full xl:w-80 flex-shrink-0">
                  <div className="vvc-glass-panel rounded-2xl p-6 sticky top-24 space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-theme-blue mb-2">Interesse?</p>
                      <h4 className="text-white font-semibold mb-1">Solliciteer direct</h4>
                      <p className="text-sm text-white/60">Stuur je CV en motivatie</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="block w-full bg-theme-blue text-white text-center py-4 rounded-xl font-medium hover:bg-theme-blue/90 transition-all shadow-md"
                    >
                      Direct Solliciteren
                    </button>
                    <div className="border-t border-white/10 pt-3 space-y-2 text-sm text-white/80">
                      <div className="flex items-center gap-2">
                        <Check className="text-theme-blue w-4 h-4" />
                        <span>Onbeperkte warme leads</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="text-theme-blue w-4 h-4" />
                        <span>Persoonlijke begeleiding</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pilot Vacancy */}
            <div className="vvc-glass-panel rounded-3xl p-8 md:p-12">
              <div className="flex flex-col xl:flex-row gap-10 items-start">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-theme-purple/10 text-theme-purple px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <Zap size={16} />
                    <span>Pilot Project</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Junior Recruiter & Senior Closer (Duo-baan)</h2>
                  <p className="text-theme-purple font-medium text-lg mb-6">Teamwork makes the dream work | Verdien samen</p>
                  
                  <div className="prose max-w-none text-white/80">
                    <p className="text-lg leading-relaxed mb-6">
                      Bij VVC geloven we in innovatie. Onderzoek toont aan dat twee perfect op elkaar ingespeelde verkopers effectiever zijn dan één. Daarom starten wij een uniek pilot-project: Double Team.
                    </p>
                    
                    <h3 className="text-white text-xl font-semibold mt-8 mb-4">Het Concept</h3>
                    <p className="mb-4 text-white/80">Jullie solliciteren als duo of worden door ons gematcht.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 my-6">
                      <div className="vvc-glass-panel rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Users className="text-theme-purple" />
                          <h4 className="text-white font-semibold m-0">De Netwerker</h4>
                        </div>
                        <p className="text-sm m-0 text-white/80">Jij hebt de gunfactor. Jij legt het eerste contact, bouwt de relatie en opent de deur.</p>
                      </div>
                      <div className="vvc-glass-panel rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Briefcase className="text-theme-purple" />
                          <h4 className="text-white font-semibold m-0">De Killer Closer</h4>
                        </div>
                        <p className="text-sm m-0 text-white/80">Jij kopt hem in. Zodra de relatie er is, zorg jij voor de deal en de handtekening.</p>
                      </div>
                    </div>

                    <h3 className="text-white text-xl font-semibold mt-8 mb-4">Wat levert het op?</h3>
                    <ul className="space-y-4 mb-6 list-none pl-0">
                      <li className="flex gap-3">
                        <Check className="text-theme-purple flex-shrink-0 mt-1" />
                        <span className="text-white/80"><strong className="text-white">Verdiensten:</strong> Een gemiddeld inkomen van €4.000,- per persoon per maand.</span>
                      </li>
                      <li className="flex gap-3">
                        <Check className="text-theme-purple flex-shrink-0 mt-1" />
                        <span className="text-white/80"><strong className="text-white">Missie:</strong> 1 Team, 1 Taak. Samen veroveren jullie de markt als visitekaartje van VVC.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="w-full xl:w-80 flex-shrink-0">
                  <div className="vvc-glass-panel rounded-2xl p-6 sticky top-24 space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-theme-purple mb-2">Pilot</p>
                      <h4 className="text-white font-semibold mb-1">Double Team</h4>
                      <p className="text-sm text-white/60">Aanmelden als duo of laat je matchen.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="block w-full bg-theme-purple text-white text-center py-4 rounded-xl font-medium hover:bg-theme-purple/90 transition-all shadow-md"
                    >
                      Aanmelden als Duo
                    </button>
                    <div className="border-t border-white/10 pt-3 space-y-2 text-sm text-white/80">
                      <div className="flex items-center gap-2">
                        <Check className="text-theme-purple w-4 h-4" />
                        <span>Gemiddeld €4.000 p.p. p/m</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="text-theme-purple w-4 h-4" />
                        <span>1 Team, 1 Taak</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-14 bg-slate-950">
          <div className="container mx-auto px-6 space-y-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-theme-blue uppercase tracking-[0.3em] text-xs mb-2">Verdiensten</p>
                <h3 className="text-3xl font-semibold text-white mb-2">Bereken je inkomsten</h3>
                <p className="text-white/70 max-w-2xl">
                  Speel met uren en plaatsingen en zie direct je basis, bonus en passieve stroom.
                </p>
              </div>
              <a href="#senior" className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-3 rounded-xl hover:bg-white/20 transition-all">
                Terug naar rollen <ArrowRight size={16} />
              </a>
            </div>
            <VVCCalculator />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />

      {/* Sollicitatie overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl vvc-glass-panel rounded-3xl shadow-2xl overflow-hidden">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
              aria-label="Sluiten"
            >
              <X size={20} />
            </button>

            {isSubmitted ? (
              <div className="p-10 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-theme-blue/20 flex items-center justify-center">
                  <Check className="text-theme-blue" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Bedankt, {formData.firstName || 'kandidaat'}!</h3>
                <p className="text-theme-text-secondary">
                  Je aanvraag is ontvangen. We bekijken je antwoorden en nemen contact op via {formData.email || 'je e-mail'}.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-3 bg-theme-blue text-white rounded-xl font-semibold hover:bg-theme-blue/90 transition"
                >
                  Sluiten
                </button>
              </div>
            ) : (
              <div className="flex flex-col max-h-[90vh]">
                <div className="px-8 pt-8 pb-4 border-b border-white/10">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <p className="text-theme-blue uppercase tracking-[0.25em] text-xs mb-1">Kandidaten Toelating</p>
                      <h3 className="text-xl font-semibold text-white">Stap {step + 1} van {totalSteps}</h3>
                    </div>
                    <div className="w-40 h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-theme-blue"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(progress, 100)}%` }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </div>

                <div ref={formRef} className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
                  {step === 0 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Laten we beginnen met de basis</h4>
                      <p className="text-theme-text-secondary">Vul je persoonlijke gegevens in.</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {(['firstName','lastName'] as const).map((field) => (
                          <div key={field}>
                            <label className="block text-sm text-theme-text-muted mb-1">
                              {field === 'firstName' ? 'Voornaam' : 'Achternaam'}
                            </label>
                            <input
                              type="text"
                              placeholder={field === 'firstName' ? 'Voornaam' : 'Achternaam'}
                              title={field === 'firstName' ? 'Voornaam' : 'Achternaam'}
                              value={(formData as any)[field]}
                              onChange={(e) => handleInputChange(field as keyof FormDataState, e.target.value)}
                              className={`w-full px-3 py-2 rounded-xl bg-white/5 border ${errors[field as keyof FormDataState] ? 'border-red-400' : 'border-white/10'} text-white`}
                            />
                            {errors[field as keyof FormDataState] && (
                              <p className="text-red-400 text-xs mt-1">{errors[field as keyof FormDataState]}</p>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-theme-text-muted mb-1">E-mail</label>
                          <input
                            type="email"
                            placeholder="jij@voorbeeld.nl"
                            title="E-mail"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={`w-full px-3 py-2 rounded-xl bg-white/5 border ${errors.email ? 'border-red-400' : 'border-white/10'} text-white`}
                          />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-sm text-theme-text-muted mb-1">Telefoon</label>
                          <input
                            type="tel"
                            placeholder="0612345678"
                            title="Telefoonnummer"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className={`w-full px-3 py-2 rounded-xl bg-white/5 border ${errors.phone ? 'border-red-400' : 'border-white/10'} text-white`}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-theme-text-muted mb-1">Geboortedatum</label>
                        <input
                          type="date"
                          title="Geboortedatum"
                          value={formData.dob}
                          onChange={(e) => handleInputChange('dob', e.target.value)}
                          className={`w-full px-3 py-2 rounded-xl bg-white/5 border ${errors.dob ? 'border-red-400' : 'border-white/10'} text-white`}
                        />
                        {errors.dob && <p className="text-red-400 text-xs mt-1">{errors.dob}</p>}
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Woon je momenteel in Nederland?</h4>
                      <div className="space-y-3">
                        <SquareOption label="Ja" selected={formData.livesInNL === true} onClick={() => handleInputChange('livesInNL', true)} />
                        <SquareOption label="Nee" selected={formData.livesInNL === false} onClick={() => handleInputChange('livesInNL', false)} />
                      </div>
                      {errors.livesInNL && <p className="text-red-400 text-xs">{errors.livesInNL}</p>}
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">In welke stad woon je?</h4>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-theme-text-muted" size={18} />
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className={`w-full pl-9 px-3 py-3 rounded-xl bg-white/5 border ${errors.city ? 'border-red-400' : 'border-white/10'} text-white`}
                          placeholder="Bijv. Amsterdam"
                        />
                      </div>
                      {errors.city && <p className="text-red-400 text-xs">{errors.city}</p>}
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Wat is je woonsituatie?</h4>
                      <div className="space-y-3">
                        {['Ik huur een kamer', 'Ik huur een woning (zelfstandig)', 'Inwonend (bij ouders/vrienden)'].map((label, idx) => {
                          const value = ['kamer', 'woning', 'inwonend'][idx];
                          return (
                            <OptionButton key={value} label={label} selected={formData.housing === value} onClick={() => handleInputChange('housing', value)} />
                          );
                        })}
                      </div>
                      {errors.housing && <p className="text-red-400 text-xs">{errors.housing}</p>}
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Heb je ooit een vast contract gehad?</h4>
                      <div className="flex gap-3">
                        <SquareOption label="Ja" selected={formData.permanentContract === true} onClick={() => handleInputChange('permanentContract', true)} />
                        <SquareOption label="Nee" selected={formData.permanentContract === false} onClick={() => handleInputChange('permanentContract', false)} />
                      </div>
                      {errors.permanentContract && <p className="text-red-400 text-xs">{errors.permanentContract}</p>}
                    </div>
                  )}

                  {step === 5 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Heb je eerder freelance werk gedaan?</h4>
                      <div className="flex gap-3">
                        <SquareOption label="Ja" selected={formData.freelance === true} onClick={() => handleInputChange('freelance', true)} />
                        <SquareOption label="Nee" selected={formData.freelance === false} onClick={() => handleInputChange('freelance', false)} />
                      </div>
                      {errors.freelance && <p className="text-red-400 text-xs">{errors.freelance}</p>}
                    </div>
                  )}

                  {step === 6 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Heb je vrienden?</h4>
                      <p className="text-theme-text-secondary text-sm">Een ongebruikelijke vraag, maar we zijn benieuwd naar je sociale cirkel.</p>
                      <div className="flex gap-3">
                        <SquareOption label="Ja" selected={formData.hasFriends === true} onClick={() => handleInputChange('hasFriends', true)} />
                        <SquareOption label="Nee" selected={formData.hasFriends === false} onClick={() => handleInputChange('hasFriends', false)} />
                      </div>
                      {errors.hasFriends && <p className="text-red-400 text-xs">{errors.hasFriends}</p>}
                    </div>
                  )}

                  {step === 7 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Hoeveel vrienden heb je ongeveer?</h4>
                      <div className="space-y-3">
                        <OptionButton label="Minder dan 10" selected={formData.friendsCount === '<10'} onClick={() => handleInputChange('friendsCount', '<10')} />
                        <OptionButton label="Meer dan 10" selected={formData.friendsCount === '>10'} onClick={() => handleInputChange('friendsCount', '>10')} />
                      </div>
                      {errors.friendsCount && <p className="text-red-400 text-xs">{errors.friendsCount}</p>}
                    </div>
                  )}

                  {step === 8 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Heb je een diploma?</h4>
                      <div className="flex gap-3">
                        <SquareOption label="Ja" selected={formData.hasDiploma === true} onClick={() => handleInputChange('hasDiploma', true)} />
                        <SquareOption label="Nee" selected={formData.hasDiploma === false} onClick={() => handleInputChange('hasDiploma', false)} />
                      </div>
                      {errors.hasDiploma && <p className="text-red-400 text-xs">{errors.hasDiploma}</p>}
                    </div>
                  )}

                  {step === 9 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Hoeveel jaar werkervaring heb je?</h4>
                      <div className="space-y-3">
                        <OptionButton label="Minder dan 5 jaar" selected={formData.experienceYears === '<5'} onClick={() => handleInputChange('experienceYears', '<5')} />
                        <OptionButton label="Meer dan 5 jaar" selected={formData.experienceYears === '>5'} onClick={() => handleInputChange('experienceYears', '>5')} />
                      </div>
                      {errors.experienceYears && <p className="text-red-400 text-xs">{errors.experienceYears}</p>}
                    </div>
                  )}

                  {step === 10 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Wat is je hoogst genoten salaris per maand geweest?</h4>
                      <div className="space-y-3">
                        <OptionButton label="Minder dan €5000" selected={formData.salaryRange === '<5000'} onClick={() => handleInputChange('salaryRange', '<5000')} />
                        <OptionButton label="Meer dan €5000" selected={formData.salaryRange === '>5000'} onClick={() => handleInputChange('salaryRange', '>5000')} />
                      </div>
                      {errors.salaryRange && <p className="text-red-400 text-xs">{errors.salaryRange}</p>}
                    </div>
                  )}

                  {step === 11 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Heb je sales ervaring?</h4>
                      <div className="flex gap-3">
                        <SquareOption label="Ja" selected={formData.salesExperience === true} onClick={() => handleInputChange('salesExperience', true)} />
                        <SquareOption label="Nee" selected={formData.salesExperience === false} onClick={() => handleInputChange('salesExperience', false)} />
                      </div>
                      {errors.salesExperience && <p className="text-red-400 text-xs">{errors.salesExperience}</p>}
                    </div>
                  )}

                  {step === 12 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Waarom wil je hier werken?</h4>
                      <p className="text-theme-text-secondary text-sm">Overtuig ons in een paar zinnen.</p>
                      <textarea
                        value={formData.reason}
                        onChange={(e) => handleInputChange('reason', e.target.value)}
                        className="w-full h-32 px-3 py-3 rounded-xl bg-white/5 border border-white/10 text-white resize-none"
                        placeholder="Ik wil hier werken omdat..."
                      />
                      {errors.reason && <p className="text-red-400 text-xs">{errors.reason}</p>}
                    </div>
                  )}

                  {step === 13 && (
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold text-white">Documenten</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {([
                          { field: 'cv', label: 'Upload CV' },
                          { field: 'motivation', label: 'Upload Motivatiebrief' },
                        ] as { field: 'cv' | 'motivation'; label: string }[]).map(({ field, label }) => {
                          const hasFile = formData[field];
                          return (
                            <label
                              key={field}
                              className={`relative border-2 border-dashed rounded-xl p-5 flex flex-col items-center justify-center gap-2 cursor-pointer transition ${hasFile ? 'border-theme-blue/60 bg-theme-blue/5' : 'border-white/15 hover:border-theme-blue/40 bg-white/5'}`}
                            >
                              <input
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={(e) => handleFileUpload(field, e)}
                                accept=".pdf,.doc,.docx"
                              />
                              {hasFile ? (
                                <>
                                  <FileText className="text-theme-blue" />
                                  <span className="text-white text-sm">{hasFile}</span>
                                  <span className="text-theme-text-muted text-xs">Klik om te wijzigen</span>
                                </>
                              ) : (
                                <>
                                  <Upload className="text-theme-text-muted" />
                                  <span className="text-white text-sm">{label}</span>
                                  <span className="text-theme-text-muted text-xs">PDF of Word</span>
                                </>
                              )}
                              {errors[field] && (
                                <p className="text-red-400 text-xs">{errors[field]}</p>
                              )}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {step === 14 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Overzicht</h4>
                      <p className="text-theme-text-secondary text-sm">Controleer je gegevens voordat je verstuurt.</p>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2 max-h-64 overflow-y-auto">
                        <SummaryRow label="Naam" value={`${formData.firstName} ${formData.lastName}`} />
                        <SummaryRow label="E-mail" value={formData.email} />
                        <SummaryRow label="Woonplaats" value={formData.city} />
                        <SummaryRow label="Woning" value={formData.housing} />
                        <SummaryRow label="Vrienden" value={formData.hasFriends ? `Ja (${formData.friendsCount || '-'})` : 'Nee'} />
                        <SummaryRow label="Ervaring" value={formData.experienceYears} />
                        <SummaryRow label="Salaris indicatie" value={formData.salaryRange} />
                        <SummaryRow label="Sales ervaring" value={formData.salesExperience === null ? '-' : formData.salesExperience ? 'Ja' : 'Nee'} />
                        <SummaryRow label="CV" value={formData.cv} />
                        <SummaryRow label="Motivatie" value={formData.motivation} />
                      </div>
                      <p className="text-xs text-theme-text-muted text-center">Door op versturen te klikken ga je akkoord met onze voorwaarden.</p>
                    </div>
                  )}
                </div>

                <div className="px-8 py-6 border-t border-white/10 flex items-center justify-between gap-4 bg-black/20">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={step === 0}
                    className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition ${step === 0 ? 'opacity-40 cursor-not-allowed text-theme-text-muted' : 'bg-white/5 text-white hover:bg-white/10'}`}
                  >
                    <ChevronLeft size={18} /> Vorige
                  </button>

                  {step === 14 ? (
                    <button
                      type="button"
                      onClick={submitForm}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-theme-blue text-white font-semibold hover:bg-theme-blue/90"
                    >
                      Versturen <Send size={16} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-theme-blue text-white font-semibold hover:bg-theme-blue/90"
                    >
                      Volgende <ChevronRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VacaturesPage;

const OptionButton: React.FC<{
  label: string;
  selected: boolean;
  onClick: () => void;
}> = ({ label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full text-left p-4 rounded-xl border-2 transition flex items-center justify-between ${selected ? 'border-theme-blue bg-theme-blue/10 text-theme-text-primary' : 'border-white/10 hover:border-theme-blue/40 text-theme-text-secondary'}`}
  >
    <span className="font-medium">{label}</span>
    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected ? 'border-theme-blue' : 'border-white/20'}`}>
      {selected && <div className="w-2.5 h-2.5 bg-theme-blue rounded-full" />}
    </div>
  </button>
);

const SquareOption: React.FC<{
  label: string;
  selected: boolean;
  onClick: () => void;
}> = ({ label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex-1 p-5 rounded-xl border-2 transition text-center font-medium text-lg ${selected ? 'border-theme-blue bg-theme-blue/10 text-theme-text-primary' : 'border-white/10 hover:border-theme-blue/40 text-theme-text-secondary'}`}
  >
    {label}
  </button>
);

const SummaryRow: React.FC<{ label: string; value: string | number | null }> = ({ label, value }) => (
  <div className="flex justify-between border-b border-white/10 pb-2 last:border-0 text-sm">
    <span className="text-theme-text-muted">{label}</span>
    <span className="font-medium text-white text-right truncate max-w-[200px]">{value || '-'}</span>
  </div>
);

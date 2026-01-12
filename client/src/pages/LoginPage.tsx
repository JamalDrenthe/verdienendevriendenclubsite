import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ShieldCheck, KeyRound, User } from 'lucide-react';

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#030b1b] text-white relative overflow-hidden">
      {/* Animated background grid + particles feel */}
      <div className="absolute inset-0 opacity-60 bg-login-grid" />
      <div className="absolute inset-0 opacity-35 pointer-events-none bg-login-lines" />
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-login-particles" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#051025] via-[#071a36] to-[#041022] opacity-90" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-20 w-72 h-72 bg-cyan-500/15 blur-[120px]" />
        <div className="absolute right-10 bottom-0 w-72 h-72 bg-indigo-500/15 blur-[120px]" />
        <div className="absolute inset-0 animate-pulse-slow bg-login-glow" />
      </div>

      <NavBar />
      <main className="flex-grow flex items-center justify-center px-5 sm:px-6 py-12 sm:py-16">
        <div className="relative w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="text-center lg:text-left max-w-xl z-10">
            <p className="text-cyan-400 uppercase tracking-[0.35em] text-xs mb-4">VVC Mainframe v2.4</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">System Access</h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Geautoriseerde toegang voor VVC medewerkers en klanten. Meld je aan om rapportages, validaties en audit-logs te openen.
            </p>
          </div>

          <div className="relative z-10 w-full max-w-md">
            <div className="rounded-[28px] border border-cyan-500/25 bg-[#051022]/70 backdrop-blur-md shadow-[0_0_30px_rgba(0,200,255,0.2)] overflow-hidden">
              <div className="p-6 border-b border-cyan-500/15 bg-gradient-to-b from-cyan-500/10 to-transparent flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300">VVC Mainframe v2.4</p>
                  <p className="text-white font-semibold text-sm">System Access</p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div className="space-y-2">
                  <label className="text-sm text-cyan-100/80 uppercase tracking-[0.15em]">Identification</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-cyan-300/70" size={18} />
                    <input
                      type="email"
                      placeholder="user@vvc.club"
                      className="w-full bg-[#0b1a33] border border-cyan-500/30 rounded-xl px-11 py-3 text-white placeholder-cyan-200/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-cyan-100/80 uppercase tracking-[0.15em]">Security Key</label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-3 text-cyan-300/70" size={18} />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full bg-[#0b1a33] border border-cyan-500/30 rounded-xl px-11 py-3 text-white placeholder-cyan-200/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
                    />
                  </div>
                  <div className="text-right">
                    <a href="/wachtwoord-vergeten" className="text-xs text-cyan-200/70 hover:text-cyan-100">Recover Access?</a>
                  </div>
                </div>

                <button className="w-full py-3 rounded-xl bg-cyan-500 text-[#031023] font-semibold tracking-wide hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(0,200,255,0.35)]">
                  Initialize Session
                </button>

                <div className="text-center text-[11px] text-cyan-100/70 uppercase tracking-[0.2em]">
                  No credentials found?
                </div>
                <button className="w-full py-3 rounded-xl border border-cyan-400/50 text-cyan-100 font-semibold tracking-wide hover:bg-cyan-400/10 transition">
                  Request Access
                </button>
              </div>

              <div className="px-6 py-4 border-t border-cyan-500/15 text-[10px] text-cyan-200/60 tracking-[0.2em] uppercase text-center">
                Secure Connection Established — ICP: 4172.AX — Node: VVC-MAIN-4
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;

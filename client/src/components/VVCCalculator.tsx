import React, { useState, useMemo } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Calculator, Users, Phone, TrendingUp, Info, Wallet } from 'lucide-react';

const VVCCalculator = () => {
  // State voor user inputs
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [placementsPerMonth, setPlacementsPerMonth] = useState(10); // Standaard op 10 gezet voor demo

  // Constanten volgens de VVC regels
  const HOURLY_RATE = 30; // Euro per uur tijdens bellen
  const PLACEMENT_BONUS = 300; // Euro per plaatsing
  const PASSIVE_INCOME_PER_USER = 25; // Euro per maand passief

  // Berekeningen
  const monthlyBaseSalary = hoursPerWeek * 4 * HOURLY_RATE;
  const monthlyBonus = placementsPerMonth * PLACEMENT_BONUS;
  
  // Data genereren voor de grafiek (12 maanden projectie)
  const chartData = useMemo(() => {
    let data = [];
    let accumulatedPlacements = 0;

    for (let month = 1; month <= 12; month++) {
      accumulatedPlacements += placementsPerMonth;
      
      const passiveIncome = accumulatedPlacements * PASSIVE_INCOME_PER_USER;
      const totalMonthlyIncome = monthlyBaseSalary + monthlyBonus + passiveIncome;

      data.push({
        name: `Mnd ${month}`,
        Uurloon: monthlyBaseSalary,
        Bonussen: monthlyBonus,
        Passief: passiveIncome,
        Totaal: totalMonthlyIncome,
        Accumulated: accumulatedPlacements
      });
    }
    return data;
  }, [hoursPerWeek, placementsPerMonth, monthlyBaseSalary, monthlyBonus]);

  // Totalen na 1 jaar
  const yearEndMonthlyIncome = chartData[11].Totaal;
  const totalYearEarnings = chartData.reduce((acc, curr) => acc + curr.Totaal, 0);
  const totalVrienden = placementsPerMonth * 12;

  // Helper voor valuta opmaak
  const formatEuro = (amount: number) => {
    return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className="w-full bg-slate-950 text-white font-sans p-4 md:p-8 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Ondertitel verwijderd op verzoek */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-500 mb-2 tracking-tight">Verdiensten Calculator</h1>
          <p className="text-slate-400">Bereken je potentiële inkomsten bij VVC</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-white">
          
          {/* Linkerkolom: Inputs */}
          <div className="bg-slate-900 p-6 rounded-3xl shadow-2xl border border-slate-800 flex flex-col gap-8">
            <h2 className="text-xl font-bold flex items-center text-yellow-500">
              <Calculator className="mr-2" /> Parameters
            </h2>

            {/* Input: Uren Bellen */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="flex items-center text-slate-300 font-medium text-sm">
                  <Phone size={18} className="mr-2 text-yellow-500" /> BELUREN PER WEEK
                </label>
                <span className="text-2xl font-bold text-white tracking-tighter">{hoursPerWeek}u</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                step="1"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                aria-label="Beluren per week"
                title="Beluren per week"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                <span>0u</span>
                <span>40u</span>
              </div>
            </div>

            {/* Input: Plaatsingen */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="flex items-center text-slate-300 font-medium text-sm">
                  <Users size={18} className="mr-2 text-yellow-500" /> PLAATSINGEN PER MAAND
                </label>
                <span className="text-2xl font-bold text-white tracking-tighter">{placementsPerMonth}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={placementsPerMonth}
                onChange={(e) => setPlacementsPerMonth(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                aria-label="Plaatsingen per maand"
                title="Plaatsingen per maand"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                <span>0</span>
                <span>100</span>
              </div>
            </div>

            <div className="mt-auto bg-slate-800/40 p-5 rounded-2xl border border-slate-700/50">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">Maandelijkse Cashflow (Maand 1)</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-medium">Uurloon basis:</span>
                  <span className="font-semibold">{formatEuro(monthlyBaseSalary)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-medium">Bonussen:</span>
                  <span className="font-semibold">{formatEuro(monthlyBonus)}</span>
                </div>
                <div className="h-px bg-slate-700 my-2" />
                <div className="flex justify-between text-lg font-black text-yellow-500">
                  <span>TOTAAL:</span>
                  <span>{formatEuro(monthlyBaseSalary + monthlyBonus)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Midden & Rechts: Grafieken en Resultaten */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-500 p-6 rounded-3xl shadow-lg text-slate-950 flex flex-col justify-between">
                <div>
                  <div className="text-slate-900/60 text-xs font-black uppercase tracking-widest mb-1">Inkomen in Maand 12</div>
                  <div className="text-4xl font-black">{formatEuro(yearEndMonthlyIncome)}</div>
                </div>
                <div className="mt-4 flex items-center text-sm font-bold bg-white/20 px-3 py-1 rounded-full w-fit">
                  <TrendingUp size={16} className="mr-2" />
                  {formatEuro(chartData[11].Passief)} passief per maand
                </div>
              </div>

              <div className="bg-slate-900 p-6 rounded-3xl shadow-lg border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Jaartotaal (Jaar 1)</div>
                  <div className="text-4xl font-black text-white">{formatEuro(totalYearEarnings)}</div>
                </div>
                <div className="mt-4 flex items-center text-sm font-bold text-yellow-500">
                  <Wallet size={16} className="mr-2" />
                  Netwerk van {totalVrienden} vrienden
                </div>
              </div>
            </div>

            {/* Grafiek */}
            <div className="bg-slate-900 p-6 rounded-3xl shadow-2xl border border-slate-800 flex-grow flex flex-col min-h-[400px]">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-white">Inkomensgroei & Sneeuwbaleffect</h3>
                <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest">
                  <div className="flex items-center"><div className="w-3 h-1 bg-slate-600 mr-2 rounded"></div> Basis</div>
                  <div className="flex items-center"><div className="w-3 h-1 bg-cyan-500 mr-2 rounded"></div> Bonussen</div>
                  <div className="flex items-center"><div className="w-3 h-1 bg-yellow-500 mr-2 rounded"></div> Passief</div>
                </div>
              </div>

              <div className="flex-grow">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="gradPassief" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#EAB308" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="#EAB308" stopOpacity={0.05}/>
                      </linearGradient>
                      <linearGradient id="gradBase" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1e293b" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#0f172a" stopOpacity={1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="0" stroke="#1e293b" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      stroke="#475569" 
                      fontSize={10} 
                      fontWeight="bold" 
                      axisLine={false} 
                      tickLine={false}
                      dy={10}
                    />
                    <YAxis 
                      stroke="#475569" 
                      fontSize={10} 
                      fontWeight="bold" 
                      axisLine={false} 
                      tickLine={false}
                      tickFormatter={(value) => `€${value/1000}k`}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '12px' }}
                      itemStyle={{ fontWeight: 'bold', fontSize: '12px' }}
                      labelStyle={{ color: '#94a3b8', fontWeight: 'bold', marginBottom: '8px' }}
                      formatter={(value: number) => formatEuro(value)}
                    />
                    <Area type="monotone" dataKey="Uurloon" stackId="1" stroke="none" fill="#1e293b" name="Uurloon" />
                    <Area type="monotone" dataKey="Bonussen" stackId="1" stroke="none" fill="#0891b2" name="Bonussen" />
                    <Area type="monotone" dataKey="Passief" stackId="1" stroke="#EAB308" strokeWidth={3} fill="url(#gradPassief)" name="Passief Inkomen" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 bg-slate-900/40 p-6 rounded-3xl border border-slate-800 flex items-start gap-4">
          <div className="bg-yellow-500/10 p-2 rounded-xl">
            <Info className="text-yellow-500" size={20} />
          </div>
          <div className="text-xs leading-relaxed text-slate-500 max-w-4xl">
            <p className="font-bold text-slate-400 mb-1">HOE DIT MODEL WERKT:</p>
            Bij VVC bouw je een persoonlijk portfolio op. Elke plaatsing levert je niet alleen een direct succes-fee op van <span className="text-slate-300 font-bold">€300,-</span>, maar genereert ook een doorlopende stroom van <span className="text-slate-300 font-bold">€25,- per maand</span>. 
            Bij <span className="text-yellow-500 font-bold">{placementsPerMonth} plaatsingen per maand</span> groeit je passieve inkomen met <span className="text-yellow-500 font-bold">{formatEuro(placementsPerMonth * 25)}</span> per maand. 
            Na 12 maanden bedraagt je cumulatieve passieve inkomen alleen al <span className="text-yellow-500 font-bold">{formatEuro(placementsPerMonth * 12 * 25)} per maand</span>, bovenop je beluren en nieuwe bonussen.
          </div>
        </div>

      </div>
    </div>
  );
};

export default VVCCalculator;

import React, { useState } from 'react';
import { 
  Calculator, 
  DollarSign, 
  Sparkles, 
  AlertCircle, 
  Check, 
  ArrowRight, 
  Clock, 
  Layers, 
  Sliders, 
  TrendingUp,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { ServiceTier, EarningScenario } from '../data/portfolioData';

interface EarningCalculatorSectionProps {
  servicePricing: ServiceTier[];
  earningScenarios: EarningScenario[];
  calendlyUrl: string;
  onSelectTierForContact?: (tierTitle: string) => void;
}

export const EarningCalculatorSection: React.FC<EarningCalculatorSectionProps> = ({
  servicePricing,
  earningScenarios,
  calendlyUrl,
  onSelectTierForContact,
}) => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(1); // Default to $1,000

  // Interactive custom calculator state
  const [basicCount, setBasicCount] = useState(1);
  const [intermediateCount, setIntermediateCount] = useState(1);
  const [advancedCount, setAdvancedCount] = useState(0);
  const [maintenanceCount, setMaintenanceCount] = useState(2);

  // Compute calculated estimate
  const estimatedBasicTotal = basicCount * 325; // mid of 150-500
  const estimatedIntermediateTotal = intermediateCount * 750; // mid of 500-1000
  const estimatedAdvancedTotal = advancedCount * 1800; // mid of 1000-3000+
  const estimatedMaintenanceTotal = maintenanceCount * 200; // mid of 100-300
  const monthlyTotal = estimatedBasicTotal + estimatedIntermediateTotal + estimatedAdvancedTotal + estimatedMaintenanceTotal;

  return (
    <section id="pricing" className="py-20 bg-[#0B0F19] relative">
      {/* Background glow halos */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Service Pricing & Scenarios</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Illustrative Service Pricing & Earning Scenarios
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Transparent market pricing tiers for custom AI agents and workflow automations, alongside illustrative monthly earning potential models.
          </p>
        </div>

        {/* Mandatory Transparency Disclaimer Banner */}
        <div className="mt-8 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200/90 flex items-start gap-3.5 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-300">ESTIMATED EARNING SCENARIOS DISCLAIMER: </span>
            The monthly figures and service pricing ranges shown below are illustrative models and market-based scenarios. They are designed to assist clients in budgeting project deliverables and estimating freelance capacity. They do <strong className="text-amber-100 font-bold">NOT</strong> represent guaranteed or actual personal earnings.
          </div>
        </div>

        {/* Part 1: Illustrative Service Pricing Grid */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Service Pricing Tiers
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Standard scope ranges for bespoke AI developments and ongoing retainers
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePricing.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative ${
                  tier.popular
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-blue-500/80 shadow-xl shadow-blue-900/20'
                    : 'bg-slate-900/70 border border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-[10px] font-bold text-white uppercase tracking-wider shadow-md">
                    Most Requested
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-bold text-white">{tier.title}</h4>
                  
                  {/* Price */}
                  <div className="mt-4 mb-2">
                    <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      {tier.priceRange}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-blue-400 font-medium mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Est. Turnaround: {tier.turnaround}</span>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {tier.idealFor}
                  </p>

                  {/* Deliverables list */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Deliverables:
                    </p>
                    {tier.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <a
                    href="#contact"
                    onClick={() => onSelectTierForContact?.(tier.title)}
                    className={`w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      tier.popular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    <span>Select & Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Monthly Earning Milestone Scenarios ($500, $1,000, $2,000, $5,000+) */}
        <div className="mt-20 pt-16 border-t border-slate-800/80">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Illustrative Monthly Earning Scenarios
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Examining project volumes required to achieve target monthly revenue tiers ($500, $1,000, $2,000, $5,000+)
            </p>
            <p className="text-[11px] text-amber-400/90 font-medium mt-1">
              *Clearly labeled as estimated earning scenarios, not actual earnings.
            </p>
          </div>

          {/* Scenario Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto mb-8">
            {earningScenarios.map((scenario, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedScenarioIndex(idx)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  selectedScenarioIndex === idx
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{scenario.milestone}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/30 font-normal">
                  {scenario.label}
                </span>
              </button>
            ))}
          </div>

          {/* Active Scenario Card */}
          {earningScenarios[selectedScenarioIndex] && (
            <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    Target Scenario: {earningScenarios[selectedScenarioIndex].label}
                  </span>
                  <h4 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                    {earningScenarios[selectedScenarioIndex].milestone}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {earningScenarios[selectedScenarioIndex].overview}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-right">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                    Scenario Model
                  </p>
                  <p className="text-sm font-bold text-emerald-400">
                    Estimated Revenue Plan
                  </p>
                </div>
              </div>

              {/* Scenario Deliverable Breakdown */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Illustrative Project Mix to Reach This Target:
                </p>
                
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 mb-6 font-mono text-xs text-blue-300">
                  {earningScenarios[selectedScenarioIndex].breakdown}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                    <p className="text-2xl font-bold text-white">
                      {earningScenarios[selectedScenarioIndex].deliverablesMix.basic}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Basic Projects ($150-$500)</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                    <p className="text-2xl font-bold text-white">
                      {earningScenarios[selectedScenarioIndex].deliverablesMix.intermediate}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Mid Solutions ($500-$1,000)</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                    <p className="text-2xl font-bold text-white">
                      {earningScenarios[selectedScenarioIndex].deliverablesMix.advanced}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Adv Agents ($1,000-$3,000+)</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                    <p className="text-2xl font-bold text-white">
                      {earningScenarios[selectedScenarioIndex].deliverablesMix.maintenance}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Retainers ($100-$300/mo)</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Part 3: Interactive Custom Scope / Earning Calculator */}
          <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-blue-500/30 p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    Interactive Project Scope Simulator
                  </h4>
                  <p className="text-xs text-slate-400">
                    Adjust project deliverables to simulate estimated project investment and earning models
                  </p>
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl bg-blue-950/60 border border-blue-800/60 text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Simulated Monthly Total:
                </span>
                <p className="text-2xl font-extrabold text-blue-400">
                  ${monthlyTotal.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Sliders Grid */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Slider 1: Basic AI Projects */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Basic AI Projects ($150–$500)
                  </label>
                  <span className="text-xs font-bold text-blue-400 font-mono">
                    {basicCount} {basicCount === 1 ? 'project' : 'projects'} (~${estimatedBasicTotal})
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="1"
                  value={basicCount}
                  onChange={(e) => setBasicCount(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>0</span>
                  <span>5 projects</span>
                </div>
              </div>

              {/* Slider 2: Intermediate Solutions */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Intermediate AI Solutions ($500–$1,000)
                  </label>
                  <span className="text-xs font-bold text-indigo-400 font-mono">
                    {intermediateCount} {intermediateCount === 1 ? 'project' : 'projects'} (~${estimatedIntermediateTotal})
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={intermediateCount}
                  onChange={(e) => setIntermediateCount(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>0</span>
                  <span>4 projects</span>
                </div>
              </div>

              {/* Slider 3: Advanced AI Agents */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Advanced AI Agents ($1,000–$3,000+)
                  </label>
                  <span className="text-xs font-bold text-purple-400 font-mono">
                    {advancedCount} {advancedCount === 1 ? 'agent' : 'agents'} (~${estimatedAdvancedTotal})
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="3"
                  step="1"
                  value={advancedCount}
                  onChange={(e) => setAdvancedCount(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>0</span>
                  <span>3 agents</span>
                </div>
              </div>

              {/* Slider 4: Monthly Maintenance */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Maintenance Clients ($100–$300/mo)
                  </label>
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {maintenanceCount} {maintenanceCount === 1 ? 'client' : 'clients'} (~${estimatedMaintenanceTotal})
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="8"
                  step="1"
                  value={maintenanceCount}
                  onChange={(e) => setMaintenanceCount(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>0</span>
                  <span>8 retainers</span>
                </div>
              </div>

            </div>

            {/* Bottom Action */}
            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400">
                Want to configure an exact scope tailored to your company's sales pipeline?
              </p>
              
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center gap-2 transition-all shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Strategy Call to Discuss Scope</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

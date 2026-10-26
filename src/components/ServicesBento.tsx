import React from 'react';
import { SERVICES, ServiceItem } from '../data/businessInfo';
import { ArrowRight, Check, Droplets, Wrench, Shield, AlertTriangle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface ServicesBentoProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-red-600 tracking-wide uppercase mb-2">
            Verified Service Scope
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Complete Drain, Sewer & Plumbing Care for Key West.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Backed by heavy-duty motorized snaking machinery, pressure washing gear, and over 20 years of island plumbing experience. Here is how Daniel solves common Keys plumbing problems:
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Drain Clearing (Marquee: 7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between hover:border-red-300 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  01. Drain & Sewer Clearing
                </span>
                <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                  Same-Day Dispatch
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Motorized Mechanical Drain & Mainline Rooting
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Persistent hair clogs, kitchen grease backups, shower water pooling, or whole-house gurgling? Daniel uses professional motorized cable rooters to scour lines from your cleanouts, cutting through stubborn buildup without damaging older Key West pipes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Kitchen sinks, showers & tubs cleared fast</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Main cleanout snaking for whole-home backups</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Clear explanation of root cause to prevent return</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Reviews cite typical small fixes $100–$200</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">Meticulous post-job cleanup guaranteed</span>
              <button
                onClick={() => onSelectService("Drain & Clog Clearing")}
                className="flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 cursor-pointer"
              >
                <span>Select This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Commercial Restaurant Maintenance (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                  02. Commercial Specialty
                </span>
                <span className="text-xs font-semibold text-slate-300">
                  Monthly / Bi-Monthly
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Restaurant Sewer & Grease Line Maintenance
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Prevent disastrous kitchen shutdowns during Friday night dinner service. Nene’s provides recurring maintenance agreements for Key West restaurants and bars to scour grease lines and floor drains regularly.
              </p>

              <div className="space-y-2 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Scheduled monthly or bi-monthly preventative cleaning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Bar floor drains, mop sinks & grease line flushing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Emergency rapid response if a line backs up on service</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Tailored commercial contracts</span>
              <button
                onClick={() => onSelectService("Restaurant Grease Line Maintenance")}
                className="flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-white cursor-pointer"
              >
                <span>Select for Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Toilet Repairs & Floods (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between hover:border-red-300 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  03. Toilet Emergencies
                </span>
                <span className="text-xs font-bold text-red-600">
                  Weekend Emergency
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Toilet Unclogging, Flange & Flooding Repair
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Toddler flushed a toy? Toilet gurgling and backing up into the shower? Daniel responds on Sunday evenings and holidays to safely clear blockages, replace damaged wax rings, and install brand-new water-saving toilets.
              </p>

              <div className="space-y-2 mb-6 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fast relief for overflows and foreign object clogs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Wax ring leak sealing, fill valve rebuilds & installs</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">Same-day toilet replacements</span>
              <button
                onClick={() => onSelectService("Toilet Repair & Unclogging")}
                className="flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 cursor-pointer"
              >
                <span>Select for Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Water Heaters, Cisterns & Leak Detection (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between hover:border-red-300 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  04. Water Heaters & Piping
                </span>
                <span className="text-xs font-bold text-red-600">
                  Residential & Commercial
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Hot Water Heaters, Leak Detection & Cistern Piping
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                When water heaters blow or hidden leaks run up hundreds on your Keys water bill, Daniel troubleshoots the root cause. From specialized cistern sprinkler feed lines to shower valve replacements and hot water heater installs with hurricane straps.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Sunday & weekend water heater emergency swaps</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Rain cistern & gutter pump integration repairs</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Shower temperature valve & faucet rebuilds</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Exterior pressure washing for drain areas & decks</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">Upfront quotes before work starts</span>
              <button
                onClick={() => onSelectService("Water Heater & Leak Repair")}
                className="flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 cursor-pointer"
              >
                <span>Select for Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

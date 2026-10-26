import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Sparkles, Clock, AlertTriangle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface EstimateSummary {
  service: string;
  scope: string;
  isEmergency: boolean;
  priceRange: string;
}

interface EstimateCalculatorProps {
  onPreloadEstimate: (summary: EstimateSummary) => void;
}

export const EstimateCalculator: React.FC<EstimateCalculatorProps> = ({ onPreloadEstimate }) => {
  const [serviceCategory, setServiceCategory] = useState<'drain' | 'toilet' | 'grease' | 'heater' | 'leak'>('drain');
  const [scopeTier, setScopeTier] = useState<'standard' | 'major' | 'commercial'>('standard');
  const [isEmergencyTime, setIsEmergencyTime] = useState<boolean>(false);
  const [cameraInspection, setCameraInspection] = useState<boolean>(false);

  const { low, high, timeEstimate, description } = useMemo(() => {
    let baseLow = 120;
    let baseHigh = 195;
    let time = "45 mins to 1.5 Hours";
    let desc = "Single sink, tub or shower drain mechanical snaking.";

    if (serviceCategory === 'drain') {
      if (scopeTier === 'standard') {
        baseLow = 110;
        baseHigh = 185;
        time = "45 mins to 1.5 Hours";
        desc = "Single fixture clog (kitchen sink, tub, or shower drain snaking).";
      } else if (scopeTier === 'major') {
        baseLow = 220;
        baseHigh = 340;
        time = "1.5 to 2.5 Hours";
        desc = "Whole-home mainline sewer blockage snaked from exterior cleanout.";
      } else {
        baseLow = 350;
        baseHigh = 550;
        time = "2 to 4 Hours";
        desc = "Heavy commercial root/grease obstruction with motorized cutting head.";
      }
    } else if (serviceCategory === 'toilet') {
      if (scopeTier === 'standard') {
        baseLow = 95;
        baseHigh = 165;
        time = "30 mins to 1 Hour";
        desc = "Urgent toilet unclogging or foreign object retrieval (toys/wipes).";
      } else if (scopeTier === 'major') {
        baseLow = 185;
        baseHigh = 280;
        time = "1.5 to 2 Hours";
        desc = "Toilet rebuild, fill valve, wax ring seal replacement & leak stop.";
      } else {
        baseLow = 275;
        baseHigh = 420;
        time = "2 to 3 Hours";
        desc = "Complete removal of old toilet & fresh new porcelain toilet installation.";
      }
    } else if (serviceCategory === 'grease') {
      if (scopeTier === 'standard') {
        baseLow = 195;
        baseHigh = 290;
        time = "1.5 to 2 Hours";
        desc = "Routine commercial floor drain and kitchen mop sink cleaning.";
      } else if (scopeTier === 'major') {
        baseLow = 320;
        baseHigh = 480;
        time = "2 to 3.5 Hours";
        desc = "Commercial sewer line hydro-jetting & main restaurant grease pipe flush.";
      } else {
        baseLow = 450;
        baseHigh = 750;
        time = "Scheduled Agreement";
        desc = "Recurring monthly or bi-monthly preventative restaurant maintenance agreement.";
      }
    } else if (serviceCategory === 'heater') {
      if (scopeTier === 'standard') {
        baseLow = 145;
        baseHigh = 240;
        time = "1 to 1.5 Hours";
        desc = "Thermostat, heating element, or pressure relief valve diagnostics & swap.";
      } else if (scopeTier === 'major') {
        baseLow = 380;
        baseHigh = 580;
        time = "2.5 to 4 Hours";
        desc = "Complete water heater tank replacement labor with hurricane strapping.";
      } else {
        baseLow = 590;
        baseHigh = 950;
        time = "Half Day";
        desc = "Full replacement including new energy-efficient tank unit & system flush.";
      }
    } else if (serviceCategory === 'leak') {
      if (scopeTier === 'standard') {
        baseLow = 110;
        baseHigh = 185;
        time = "1 to 1.5 Hours";
        desc = "Exposed pipe joint repair, shutoff valve replacement, or dripping faucet.";
      } else if (scopeTier === 'major') {
        baseLow = 220;
        baseHigh = 360;
        time = "2 to 3 Hours";
        desc = "In-wall shower valve replacement, copper torch soldering, or cistern line fix.";
      } else {
        baseLow = 380;
        baseHigh = 600;
        time = "3 to 5 Hours";
        desc = "Complex hidden leak detection under structure or rain cistern feed repair.";
      }
    }

    if (isEmergencyTime) {
      baseLow += 45;
      baseHigh += 75;
    }

    if (cameraInspection) {
      baseLow += 65;
      baseHigh += 95;
    }

    return { low: baseLow, high: baseHigh, timeEstimate: time, description: desc };
  }, [serviceCategory, scopeTier, isEmergencyTime, cameraInspection]);

  const handleApplyEstimate = () => {
    let serviceName = "Drain & Clog Snaking";
    if (serviceCategory === 'toilet') serviceName = "Toilet Repair & Flooding";
    if (serviceCategory === 'grease') serviceName = "Restaurant Grease Line Jetting";
    if (serviceCategory === 'heater') serviceName = "Water Heater Repair/Install";
    if (serviceCategory === 'leak') serviceName = "Plumbing Leak Detection & Pipe Repair";

    onPreloadEstimate({
      service: serviceName,
      scope: scopeTier,
      isEmergency: isEmergencyTime,
      priceRange: `$${low} to $${high}`
    });
  };

  return (
    <section id="estimate" className="py-16 lg:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-red-400 tracking-wide uppercase mb-2">
            Transparent Honest Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Key West Online Plumbing & Drain Cost Estimator.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            No high-pressure franchise markups. Select your service below to see Daniel’s typical ballpark pricing reported in our 4.9-star Google customer reviews.
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="bg-slate-800/90 rounded-3xl border border-slate-700 p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Service Category */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                Step 1: Choose Service Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'drain', label: 'Drain Snaking' },
                  { id: 'toilet', label: 'Toilet Floods / Rep' },
                  { id: 'grease', label: 'Restaurant Jetting' },
                  { id: 'heater', label: 'Water Heater' },
                  { id: 'leak', label: 'Leak / Cistern Pipe' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setServiceCategory(item.id as any)}
                    className={`p-3 text-xs font-extrabold rounded-xl transition-all cursor-pointer text-center ${
                      serviceCategory === item.id
                        ? 'bg-red-600 text-white shadow-md ring-2 ring-red-400'
                        : 'bg-slate-750 text-slate-300 hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Scope of Job */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                Step 2: Scope or Severity Level
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'standard', title: 'Standard / Minor', desc: 'Single fixture or quick repair' },
                  { id: 'major', title: 'Mainline / Rebuild', desc: 'Whole-house or complex in-wall' },
                  { id: 'commercial', title: 'Commercial / Full', desc: 'Commercial line or replacement' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setScopeTier(item.id as any)}
                    className={`p-3.5 text-left rounded-xl transition-all cursor-pointer ${
                      scopeTier === item.id
                        ? 'bg-white text-slate-950 ring-2 ring-red-500 shadow-md'
                        : 'bg-slate-750 text-slate-300 hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.title}</div>
                    <div className={`text-[11px] mt-1 ${scopeTier === item.id ? 'text-slate-600' : 'text-slate-400'}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Urgent / Emergency Conditions */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                Step 3: Service Timing & Add-ons
              </label>
              <div className="space-y-2">
                <div
                  onClick={() => setIsEmergencyTime(!isEmergencyTime)}
                  className={`p-3 rounded-xl border transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                    isEmergencyTime
                      ? 'border-red-500 bg-red-950/40 text-red-200'
                      : 'border-slate-700 bg-slate-750/50 hover:bg-slate-700/50 text-slate-300'
                  }`}
                >
                  <div className="text-xs">
                    <div className="font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                      <span>Sunday or Active Overflow Emergency Dispatch (+ $45 to $75)</span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Priority immediate response for flooded bathrooms or backed-up restaurants
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                    isEmergencyTime ? 'bg-red-600 border-red-500 text-white' : 'border-slate-600'
                  }`}>
                    {isEmergencyTime && <Check className="w-3.5 h-3.5 stroke-3" />}
                  </div>
                </div>

                <div
                  onClick={() => setCameraInspection(!cameraInspection)}
                  className={`p-3 rounded-xl border transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                    cameraInspection
                      ? 'border-red-500 bg-red-950/40 text-red-200'
                      : 'border-slate-700 bg-slate-750/50 hover:bg-slate-700/50 text-slate-300'
                  }`}
                >
                  <div className="text-xs">
                    <div className="font-bold">Include Video Camera Inspection Reel (+ $65 to $95)</div>
                    <div className="text-[11px] text-slate-400">
                      High-definition sewer line probe to pinpoint root intrusions or cracked pipe sections
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                    cameraInspection ? 'bg-red-600 border-red-500 text-white' : 'border-slate-600'
                  }`}>
                    {cameraInspection && <Check className="w-3.5 h-3.5 stroke-3" />}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Result Card Column (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                Typical Estimated Range
              </span>
              <span className="text-[11px] text-red-400 font-mono font-bold">KEY WEST FAIR PRICING</span>
            </div>

            {/* Price Numbers */}
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white tabular-nums tracking-tight">
                ${low} to ${high}
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Fair, upfront local rates without corporate franchise markups. Final firm quote confirmed before turning a wrench.
              </p>
            </div>

            {/* Scope Details */}
            <div className="space-y-2.5 text-xs text-slate-300 bg-slate-800 p-4 rounded-xl border border-slate-700/70">
              <div className="flex justify-between">
                <span className="text-slate-400">Expected Time on Site:</span>
                <span className="font-semibold text-white">{timeEstimate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Owner-Operated:</span>
                <span className="font-semibold text-emerald-400">Daniel Pumar on Dispatch</span>
              </div>
              <div className="pt-2 border-t border-slate-700 text-[11px] text-slate-400">
                {description}
              </div>
            </div>

            {/* Action Button */}
            <div className="space-y-2">
              <button
                onClick={handleApplyEstimate}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs sm:text-sm font-black text-white bg-red-600 hover:bg-red-700 rounded-xl transition-all cursor-pointer shadow-lg"
              >
                <span>Book This Estimate With Daniel</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-slate-400">
                Transfers details directly into the service request form
              </div>
            </div>

            {/* Direct Call shortcut */}
            <div className="pt-3 border-t border-slate-800 text-center">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-xs font-bold text-slate-300 hover:text-white inline-flex items-center gap-1.5"
              >
                <span>Or Call Directly:</span>
                <span className="text-red-400 font-black">(305) 797-6477</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { MapPin, Phone, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const ServiceAreaBanner: React.FC = () => {
  return (
    <section className="py-14 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-bold text-red-400 uppercase tracking-widest flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Monroe County Coverage</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Proudly Serving Key West & The Lower Florida Keys.
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Based at <strong className="text-white">1510 Josephine Street in Key West</strong>, Daniel provides reliable on-island and Lower Keys mobile dispatch. Whether your business is on Duval Street or your home is on Sugarloaf Key, Nene's gets there when promised.
            </p>

            {/* List of Keys Communities (Unboxed with separators) */}
            <div className="pt-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Active Service Communities:
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-200">
                {BUSINESS_INFO.serviceAreas.map((area, idx) => (
                  <React.Fragment key={area}>
                    <span className="bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-md">
                      {area}
                    </span>
                    {idx < BUSINESS_INFO.serviceAreas.length - 1 && (
                      <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Fast Contact Card (5 cols) */}
          <div className="lg:col-span-5 bg-slate-800 rounded-2xl p-6 border border-slate-700 space-y-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Emergency & Scheduled Dispatch
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400 shrink-0" />
                <span>Regular Hours: Mon–Fri 9AM–4PM | Sat–Sun 9AM–5PM</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Emergency Response for Overflows & Floods</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Commercial Restaurant Grease-Trap Contracts Available</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-extrabold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Daniel: (305) 797-6477</span>
              </a>
              <div className="text-center text-[11px] text-slate-400 mt-2">
                Physical Office: 1510 Josephine St, Key West, FL 33040
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

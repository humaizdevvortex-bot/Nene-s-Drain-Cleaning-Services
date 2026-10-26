import React from 'react';
import { Phone, Calculator, AlertTriangle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-white pt-8 pb-14 lg:pt-14 lg:pb-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Business Story & Direct Action (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
              Key West’s Trusted Drain Clearing & Emergency Plumbing.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              From sudden toilet floods and stubborn mainline sewer blockages to commercial restaurant grease lines and water heater installations. Operated by <strong className="text-slate-900 font-bold">Daniel Pumar</strong>, continuing a 20+ year family tradition of honest, punctual, and reliable plumbing across Key West and the Lower Florida Keys.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-7 py-4 text-sm font-black text-white bg-red-600 hover:bg-red-700 rounded-2xl transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Daniel: (305) 797-6477</span>
              </a>

              <a
                href="#estimate"
                className="flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-2xl transition-colors whitespace-nowrap"
              >
                <Calculator className="w-4 h-4 text-red-600" />
                <span>Calculate Cost Estimate</span>
              </a>
            </div>

            {/* Emergency Notice Box */}
            <div className="p-4 rounded-2xl bg-red-50/90 border border-red-200 text-xs text-red-950 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-red-900 font-bold">Have an active plumbing emergency in Key West?</strong>
                <span className="text-red-800">
                  Toilet overflows, gurgling sewer lines, and broken water heaters handled promptly. Daniel answers emergency calls directly 7 days a week.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Real Fleet Showcase Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl group bg-slate-900">
              {/* High-Impact Real Service Van Photo */}
              <img
                src="/assets/aistudio/imgi_3_2IIJpMyPgW_b984b9b7.webp"
                alt="Nene's Drain Cleaning Service Fleet Sprinter Van Key West"
                className="w-full h-auto aspect-4/3 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay & Information Card */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <span className="bg-red-600 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    Owner-Operated Fleet
                  </span>
                  <span className="bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                    Key West, FL
                  </span>
                </div>

                <div className="space-y-2">
                  <div>
                    <h3 className="text-white text-base sm:text-lg font-black tracking-tight">
                      Nene's Heavy-Duty Drain & Jetting Van
                    </h3>
                    <p className="text-slate-300 text-xs">
                      1510 Josephine St, Key West · Direct Dispatch: (305) 797-6477
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-white/15">
                    <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Ready for 24/7 Dispatch</span>
                    </span>
                    <a
                      href="#gallery"
                      className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-red-300 transition-colors"
                    >
                      <span>Explore Real Job Photos</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Stat Proof Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-red-600 tabular-nums">4.9 ★</div>
            <div className="text-xs text-slate-600 font-medium">49+ Verified Google Customer Reviews</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tabular-nums">20+ Yrs</div>
            <div className="text-xs text-slate-600 font-medium">Family-Owned Florida Keys Legacy</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tabular-nums">7 Days</div>
            <div className="text-xs text-slate-600 font-medium">Open 7 Days + 24/7 Emergency</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tabular-nums">100%</div>
            <div className="text-xs text-slate-600 font-medium">Direct Owner Communication (Daniel)</div>
          </div>
        </div>

      </div>
    </section>
  );
};

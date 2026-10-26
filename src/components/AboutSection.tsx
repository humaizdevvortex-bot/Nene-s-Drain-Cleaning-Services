import React from 'react';
import { Phone, CheckCircle2, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Real Photo of Daniel in Service Van (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-red-200 shadow-xl bg-white">
              {/* Real Photo of Daniel in his Nene's Van */}
              <img
                src="/assets/aistudio/imgi_21_HLfJ6Vamum_8f79cdf4.webp"
                alt="Daniel Pumar in his Nene's Drain Cleaning Service Van Key West"
                className="w-full h-auto object-cover aspect-4/3 sm:aspect-square"
              />

              {/* Owner Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-black text-base text-white">Daniel Pumar</div>
                    <div className="text-xs text-red-400 font-bold">Owner & Lead Plumber · Key West</div>
                  </div>
                  <div className="flex items-center gap-1 bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold px-2.5 py-1 rounded-lg">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>2nd Gen Plumber</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Address Badge */}
            <div className="mt-4 flex items-center justify-between px-2 text-xs text-slate-500 font-medium">
              <span>Born & Raised in the Keys</span>
              <span aria-hidden="true">·</span>
              <span>1510 Josephine St</span>
              <span aria-hidden="true">·</span>
              <span>Direct Cell: (305) 797-6477</span>
            </div>
          </div>

          {/* Right Column: Story & Personal Pledge (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold text-red-600 tracking-wide uppercase">
              Meet Daniel Pumar
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              A 20-Year Family Tradition of Honest Island Plumbing.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Started over two decades ago by his father Nene, <strong className="text-slate-900">Daniel Pumar</strong> has carried on Nene’s Drain Cleaning with the exact same values that built their local reputation: prompt arrival, respectful communication, fair pricing, and getting the job done right the first time.
            </p>

            {/* Real Review Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-sm text-slate-700 italic leading-relaxed shadow-xs">
              "Daniel was exceptionally thoughtful as well as very professional. He even took our grandchild’s naptime into consideration which went above and beyond regular service calls! Solved our issues in no time."
              <span className="block not-italic font-bold text-slate-900 text-xs mt-2">
                — Liz Goldstone, Verified Key West Homeowner Review
              </span>
            </div>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Direct Owner Access:</strong> Speak directly to Daniel—no call centers or salesmen.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Old-Fashioned Honest Rates:</strong> Reviews consistently highlight 1/3 the cost of franchises.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Emergency & Sunday Service:</strong> Available 7 days a week when toilets or water heaters fail.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Commercial Contracts:</strong> Trusted by Key West restaurants for grease line maintenance.</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-black text-white bg-red-600 hover:bg-red-700 rounded-xl transition-all shadow-md"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Daniel Directly: (305) 797-6477</span>
              </a>

              <a
                href="#estimate"
                className="px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors text-center"
              >
                Calculate Cost Estimate
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

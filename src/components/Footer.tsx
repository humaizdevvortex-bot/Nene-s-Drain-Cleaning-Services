import React from 'react';
import { Phone, MapPin, Clock, Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 py-12 lg:py-16 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#home" className="inline-block group">
              <Logo size="lg" className="drop-shadow-md" />
            </a>
            <p className="text-sm text-slate-200 leading-relaxed max-w-md">
              Key West & Lower Florida Keys premier drain clearing, commercial restaurant grease line maintenance, water heater repair, and plumbing services. Family-owned and operated for over 20 years by Daniel Pumar.
            </p>
            <div className="text-sm text-slate-200 space-y-2 pt-1 font-medium">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-white">{BUSINESS_INFO.address}, {BUSINESS_INFO.cityStateZip}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-200">{BUSINESS_INFO.experienceYears} · Monroe County, FL</span>
              </div>
            </div>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-sm font-bold text-white uppercase tracking-wider">
              Services
            </div>
            <ul className="text-sm space-y-2.5 text-slate-200">
              <li><a href="#services" className="hover:text-red-400 transition-colors">Drain & Sewer Snaking</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Commercial Restaurant Grease Lines</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Toilet Repairs & Flood Rescue</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Water Heater Installations</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Leak Detection & Cistern Piping</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Exterior Pressure Washing</a></li>
            </ul>
          </div>

          {/* Direct Dispatch & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-sm font-bold text-white uppercase tracking-wider">
              Contact & Hours
            </div>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-white hover:text-red-400 transition-colors font-extrabold text-base"
              >
                <Phone className="w-5 h-5 text-red-500 shrink-0 fill-current" />
                <span>Call Daniel: (305) 797-6477</span>
              </a>
              <div className="text-slate-200">
                <span className="text-slate-400">Alternate Line:</span> {BUSINESS_INFO.legacyPhone}
              </div>
              <div className="text-slate-200">
                <span className="text-slate-400">Hours:</span> {BUSINESS_INFO.hours}
              </div>
              <div className="text-red-400 font-bold">
                24/7 Emergency Dispatch for Floods & Backups
              </div>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-xl text-sm font-semibold transition-all hover:border-slate-500 shadow-sm"
                >
                  <Star className="w-4 h-4 fill-current text-amber-400" />
                  <span>4.9 Rating on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-300">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Key West, FL 33040</span>
            <span aria-hidden="true">·</span>
            <span>Lower Florida Keys</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

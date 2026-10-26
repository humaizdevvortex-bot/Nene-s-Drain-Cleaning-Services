import React from 'react';
import { Phone, MapPin, Clock, Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 lg:py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-block">
              <Logo size="md" />
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Key West & Lower Florida Keys premier drain clearing, commercial restaurant grease line maintenance, water heater repair, and plumbing services. Family-owned and operated for over 20 years by Daniel Pumar.
            </p>
            <div className="text-xs text-slate-400 space-y-1.5 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>{BUSINESS_INFO.address}, {BUSINESS_INFO.cityStateZip}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{BUSINESS_INFO.experienceYears} · Monroe County, FL</span>
              </div>
            </div>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Services
            </div>
            <ul className="text-xs space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Drain & Sewer Snaking</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Restaurant Grease Lines</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Toilet Repairs & Flood Rescue</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Water Heater Installations</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Leak Detection & Cistern Piping</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Exterior Pressure Washing</a></li>
            </ul>
          </div>

          {/* Direct Dispatch & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Hours
            </div>
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-white hover:text-red-400 transition-colors font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-red-500 shrink-0 fill-current" />
                <span>Call Daniel: (305) 797-6477</span>
              </a>
              <div className="text-slate-400">
                Alternate Line: {BUSINESS_INFO.legacyPhone}
              </div>
              <div className="text-slate-400">
                Hours: {BUSINESS_INFO.hours}
              </div>
              <div className="text-red-400 font-semibold">
                24/7 Emergency Dispatch for Floods & Backups
              </div>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-lg text-xs transition-colors"
                >
                  <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                  <span>4.9 Rating on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Key West, FL 33040</span>
            <span aria-hidden="true">·</span>
            <span>Lower Florida Keys</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

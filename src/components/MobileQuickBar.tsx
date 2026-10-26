import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-colors shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>Call (305) 797-6477</span>
        </a>

        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5 text-red-400" />
          <span>Request Service</span>
        </a>
      </div>
    </div>
  );
};

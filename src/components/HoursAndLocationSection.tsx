import React from 'react';
import { Clock, MapPin, Navigation, Phone, CheckCircle2, Star, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const HoursAndLocationSection: React.FC = () => {
  const schedule = [
    { day: "Monday", hours: "9:00 a.m. to 4:00 p.m." },
    { day: "Tuesday", hours: "9:00 a.m. to 4:00 p.m." },
    { day: "Wednesday", hours: "9:00 a.m. to 4:00 p.m." },
    { day: "Thursday", hours: "9:00 a.m. to 4:00 p.m." },
    { day: "Friday", hours: "9:00 a.m. to 4:00 p.m." },
    { day: "Saturday", hours: "9:00 a.m. to 5:00 p.m." },
    { day: "Sunday", hours: "9:00 a.m. to 5:00 p.m." },
  ];

  // Determine current day of week
  const todayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  const currentDayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][todayIndex];

  return (
    <section id="hours" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-red-600 tracking-wide uppercase mb-2">
            Key West Location & Schedule
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Operating Hours & On-Island Dispatch Base.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Open 7 days a week for routine appointments, with dedicated 24/7 emergency priority dispatch for toilet floods, sewer backups, and broken water heaters.
          </p>
        </div>

        {/* 2-Column Schedule & Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hours Card (6 cols) */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-black text-slate-900">
                  Weekly Operating Hours
                </h3>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>Open 7 Days a Week</span>
              </span>
            </div>

            {/* Daily Hours List */}
            <div className="space-y-2.5 text-xs sm:text-sm">
              {schedule.map((item) => {
                const isToday = item.day === currentDayName;
                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-2 px-3 rounded-xl transition-colors ${
                      isToday
                        ? 'bg-red-50 text-red-950 font-bold border border-red-200'
                        : 'text-slate-700 hover:bg-slate-100/70'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{item.day}</span>
                      {isToday && (
                        <span className="text-[10px] font-extrabold uppercase bg-red-600 text-white px-1.5 py-0.5 rounded">
                          Today
                        </span>
                      )}
                    </span>
                    <span className="font-mono tabular-nums">{item.hours}</span>
                  </div>
                );
              })}
            </div>

            {/* 24/7 Emergency Dispatch Notice */}
            <div className="p-4 rounded-2xl bg-red-600 text-white space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 fill-current text-white" />
                <span>24/7 Emergency Weekend & Evening Dispatch</span>
              </div>
              <p className="text-xs text-red-100 leading-relaxed">
                Plumbing emergencies don't wait for business hours. When pipes burst or toilets overflow, Daniel answers calls directly 24/7.
              </p>
              <div className="pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs font-black bg-white text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Call Emergency Dispatch: (305) 797-6477</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Location Card (6 cols) */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-black text-slate-900">
                  Location & Map Details
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                Monroe County, FL
              </span>
            </div>

            {/* Physical Address Details */}
            <div className="space-y-2">
              <div className="text-base font-extrabold text-slate-900">
                1510 Josephine Street
              </div>
              <div className="text-xs text-slate-600">
                Key West, FL 33040, United States
              </div>
              <div className="text-xs text-slate-500">
                Mobile plumbing & drain fleet providing rapid dispatch to Old Town, Midtown, New Town, Stock Island, and Sugarloaf Key.
              </div>
            </div>

            {/* Google Map Real Verification Screenshot from User */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-sm bg-white aspect-16/9 flex items-center justify-center group">
              <img
                src="/assets/aistudio/image_99c4dfb3.png"
                alt="Google Maps Location 1510 Josephine St Key West FL"
                className="w-full h-full object-cover object-left"
              />

              {/* Overlay Directions Link */}
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-slate-900 font-bold text-xs px-3.5 py-2 rounded-xl shadow-md border border-slate-200 flex items-center gap-1.5 transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-blue-600" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>On-Site Mobile Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Online Estimates Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Accepts Major Credit Cards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>20+ Years at this Address</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

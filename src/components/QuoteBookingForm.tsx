import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, AlertCircle, MapPin, Calendar, Clock, Star, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface PreloadedEstimate {
  service: string;
  scope: string;
  isEmergency: boolean;
  priceRange: string;
}

interface QuoteBookingFormProps {
  preloadedEstimate?: PreloadedEstimate | null;
  onClearPreload?: () => void;
}

export const QuoteBookingForm: React.FC<QuoteBookingFormProps> = ({ preloadedEstimate, onClearPreload }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    area: 'Key West',
    service: 'Emergency Drain & Clog Clearing',
    isEmergency: false,
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [referenceId, setReferenceId] = useState('');

  // Sync if calculator sends data
  useEffect(() => {
    if (preloadedEstimate) {
      setFormData(prev => ({
        ...prev,
        service: preloadedEstimate.service,
        isEmergency: preloadedEstimate.isEmergency,
        details: `Calculated Estimate: ${preloadedEstimate.priceRange} (${preloadedEstimate.scope} scope).`
      }));
    }
  }, [preloadedEstimate]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number.';
    }
    if (!formData.address.trim()) {
      errs.address = 'Please provide your street address or business name.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const generatedId = `KW-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceId(generatedId);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold text-red-600 tracking-wide uppercase">
              Direct Contact & Scheduling
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Request Plumbing or Drain Service in Key West.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Need a stubborn drain cleared, a toilet unblocked, or scheduled grease line maintenance for your restaurant? Fill out the quick form or call Daniel directly for immediate assistance.
            </p>

            {/* Preloaded estimate banner if active */}
            {preloadedEstimate && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs space-y-1">
                <div className="flex items-center justify-between font-bold text-red-950">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-red-600" />
                    Estimate Calculator Applied
                  </span>
                  <span className="tabular-nums text-sm font-black text-red-600">{preloadedEstimate.priceRange}</span>
                </div>
                <div className="text-red-900">
                  Selected: {preloadedEstimate.service} ({preloadedEstimate.scope})
                </div>
                {onClearPreload && (
                  <button
                    onClick={onClearPreload}
                    className="text-[11px] text-red-600 underline hover:text-red-800 cursor-pointer pt-1"
                  >
                    Clear prefilled estimate
                  </button>
                )}
              </div>
            )}

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-xs text-slate-700">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>Nene's Drain Cleaning Services</span>
              </div>

              <div className="space-y-1.5 text-slate-600">
                <div><strong>Address:</strong> 1510 Josephine Street, Key West, FL 33040</div>
                <div><strong>Direct Cell / Dispatch:</strong> <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-red-600 font-bold hover:underline">(305) 797-6477</a></div>
                <div><strong>Alternate Line:</strong> (305) 294-8936</div>
                <div><strong>Regular Hours:</strong> Mon-Fri 9 AM to 4 PM | Sat-Sun 9 AM to 5 PM</div>
                <div className="text-red-700 font-bold">24/7 Emergency Dispatch for Floods & Sewer Backups</div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-black text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call (305) 797-6477 Directly</span>
                </a>
              </div>
            </div>

            {/* Owner Note */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 italic">
              "I answer calls personally and make sure you receive honest, punctual, and reliable service at a fair price without surprise charges."
              <span className="block not-italic font-bold text-slate-800 mt-1">Daniel Pumar, Owner</span>
            </div>
          </div>

          {/* Right Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-md">
            
            {submitted ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Service Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Daniel has received your request for <strong className="text-slate-900">{formData.address}, {formData.area}</strong>.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 inline-block text-xs text-slate-700 space-y-1.5 max-w-md mx-auto text-left w-full">
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-500">Dispatch Reference:</span>
                    <span className="font-mono font-bold text-slate-900">{referenceId}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-500">Requested Service:</span>
                    <span className="font-semibold text-slate-800">{formData.service}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-500">Status:</span>
                    <span className="font-bold text-red-600">{formData.isEmergency ? 'Urgent Emergency Request' : 'Standard Priority'}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-full sm:w-auto px-6 py-3.5 text-xs font-black text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Call Daniel Now to Confirm</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        address: '',
                        area: 'Key West',
                        service: 'Emergency Drain & Clog Clearing',
                        isEmergency: false,
                        details: ''
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Emergency Checkbox */}
                <div 
                  onClick={() => setFormData({ ...formData, isEmergency: !formData.isEmergency })}
                  className={`p-3.5 rounded-xl border transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                    formData.isEmergency 
                      ? 'bg-red-50 border-red-300 text-red-950' 
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5 text-xs font-bold">
                    <AlertCircle className={`w-4 h-4 ${formData.isEmergency ? 'text-red-600' : 'text-slate-400'}`} />
                    <span>This is an active plumbing emergency (overflow / leak)</span>
                  </div>
                  <div className={`w-5 h-5 rounded flex items-center justify-center border text-xs font-bold ${
                    formData.isEmergency ? 'bg-red-600 border-red-600 text-white' : 'border-slate-400 bg-white'
                  }`}>
                    {formData.isEmergency && '✓'}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jennifer Howe"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-red-500'
                      }`}
                    />
                    {errors.name && <p className="text-red-600 text-[11px] mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="(305) 555-0199"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-red-500'
                      }`}
                    />
                    {errors.phone && <p className="text-red-600 text-[11px] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Street Address & Florida Keys Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Street Address or Business Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1510 Josephine St"
                      value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.address ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-red-500'
                      }`}
                    />
                    {errors.address && <p className="text-red-600 text-[11px] mt-1">{errors.address}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Island / Area in the Keys *
                    </label>
                    <select
                      value={formData.area}
                      onChange={e => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-slate-800"
                    >
                      {BUSINESS_INFO.serviceAreas.map(area => (
                        <option key={area} value={area}>{area}, FL</option>
                      ))}
                      <option value="Other Lower Keys">Other Lower Keys Location</option>
                    </select>
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-slate-800"
                  >
                    <option value="Emergency Drain & Clog Clearing">Emergency Drain & Clog Clearing (Sinks, Showers, Cleanout)</option>
                    <option value="Sewer Line & Commercial Grease Maintenance">Commercial Restaurant Sewer & Grease Line Maintenance</option>
                    <option value="Toilet Unclogging, Repair & Install">Toilet Overflow, Toy Retrieval, or Toilet Installation</option>
                    <option value="Hot Water Heater Replacement/Repair">Hot Water Heater Replacement or Repair</option>
                    <option value="Plumbing Leak Detection & Cistern Piping">Plumbing Leak Detection & Cistern / Pipe Repair</option>
                    <option value="Faucets, Disposals & Pressure Washing">Faucet Repair, Garbage Disposal or Pressure Washing</option>
                  </select>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Details of the Issue
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Shower backing up when washer runs; or restaurant floor drain slow."
                    value={formData.details}
                    onChange={e => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-slate-800 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-sm font-extrabold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Service Request to Daniel</span>
                  </button>
                  <div className="text-center text-[11px] text-slate-400 mt-2">
                    For active floods, please call directly at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-red-600 font-bold hover:underline">(305) 797-6477</a>.
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, ShieldAlert, CheckCircle2, ClipboardList, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface PitchChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PitchChecklistModal: React.FC<PitchChecklistModalProps> = ({ isOpen, onClose }) => {
  const [copiedPitch, setCopiedPitch] = useState(false);
  const [copiedBdNotes, setCopiedBdNotes] = useState(false);

  if (!isOpen) return null;

  const bdIntelligenceNotes = `### BD TEAM INTELLIGENCE DOSSIER: NENE'S DRAIN CLEANING SERVICES
Status: Verified Public Record Match (Key West, FL)

1. Identity & Contact:
   - Business Name: Nene's Drain Cleaning Services (also NeNe's Drain Cleaning & Plumbing)
   - Owner / Operator: Daniel Pumar (2nd generation plumber; father "Nene" founded the business)
   - Physical Address: 1510 Josephine Street, Key West, FL 33040
   - Primary Phone: (305) 797-6477 (direct mobile/dispatch)
   - Alternate Legacy Phone: (305) 294-8936

2. Identity Conflict Resolution:
   - Note: The previous lead sheet listed Andrew with (508) 280-2970 for Handy Andy in Sarasota.
   - Nene's is located in Key West, Monroe County, FL with (305) 797-6477 operated by Daniel Pumar.
   - All reviews and services on this site now exclusively represent Daniel and Nene's in Key West.

3. Verified Service Offerings:
   - Motorized mechanical drain & mainline sewer cleaning
   - Commercial restaurant grease line maintenance (monthly & bi-monthly agreements)
   - Toilet emergency flooding & foreign object removal (Sunday & evening calls)
   - Hot water heater replacements & repairs
   - Plumbing leak detection & cistern rainwater piping
   - Faucet installations, garbage disposals & exterior pressure washing

4. Reviews & Proof:
   - Google Rating: 4.9 ★ across 49+ verified reviews
   - Real customers: Jennifer Howe, Liz Goldstone, Roger Suarez, Becky Cobo (Property Manager), Cameron Scott, Jordan Lydamore

5. Next Steps for BD Team:
   - Share this live Key West demo URL with Daniel Pumar.
   - If Daniel provides his original 23 job photos, replace gallery slots.`;

  const copyBdNotes = () => {
    navigator.clipboard.writeText(bdIntelligenceNotes);
    setCopiedBdNotes(true);
    setTimeout(() => setCopiedBdNotes(false), 2000);
  };

  const copyPitch = () => {
    const text = `Hey Daniel! We put together an updated custom website demo for Nene's Drain Cleaning Services in Key West. It includes your official circular logo, 1510 Josephine Street address, 24/7 emergency dispatch for toilet floods & grease lines, and 100% real Google Maps reviews from your local clients like Jennifer Howe and Becky Cobo. Check it out here!`;
    navigator.clipboard.writeText(text);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold text-red-600 uppercase tracking-wider flex items-center gap-1.5">
              <ClipboardList className="w-4 h-4 text-red-600" />
              Verified Lead Intelligence & Client Dossier
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              Nene's Drain Cleaning Services (Key West, FL)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resolved Identity Alert */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-amber-950">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Lead Identity Clarification & Correction:</span>
          </div>
          <p>
            The previous lead record referenced a Sarasota pressure washing company (Handy Andy / (508) area code). The verified Key West business is <strong>Nene's Drain Cleaning Services</strong>, owned and operated by <strong>Daniel Pumar</strong> at <strong>1510 Josephine Street, Key West, FL 33040</strong> with primary phone <strong>(305) 797-6477</strong>. This demo is now built with 100% verified real data for Daniel & Nene's.
          </p>
        </div>

        {/* BD Intelligence Card */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Verified Data Points Included in This Demo:
            </h4>
            <button
              onClick={copyBdNotes}
              className="flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-900 bg-red-50 hover:bg-red-100 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
            >
              {copiedBdNotes ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedBdNotes ? 'Copied to Clipboard!' : 'Copy BD Dossier'}</span>
            </button>
          </div>

          <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div><strong>Real Logo Used:</strong> Official circular red & black plumber emblem provided in attachment.</div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div><strong>Owner / Operator:</strong> Daniel Pumar (son of founder Nene, 2nd generation plumber).</div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div><strong>Location:</strong> 1510 Josephine Street, Key West, FL 33040.</div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div><strong>Direct Phone:</strong> (305) 797-6477 | Alternate: (305) 294-8936.</div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div><strong>Google Reviews:</strong> 4.9 ★ (49 reviews) with real customer quotes (Jennifer Howe, Liz Goldstone, Roger Suarez, Becky Cobo).</div>
            </div>
          </div>
        </div>

        {/* Pitch Script */}
        <div className="p-4 rounded-xl bg-slate-900 text-slate-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white">Direct Pitch Message for Daniel:</span>
            <button
              onClick={copyPitch}
              className="flex items-center gap-1 text-[11px] font-bold text-red-400 hover:text-white cursor-pointer"
            >
              {copiedPitch ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPitch ? 'Copied!' : 'Copy Script'}</span>
            </button>
          </div>
          <p className="text-xs text-slate-300 italic leading-relaxed">
            "Hey Daniel! We put together an updated custom website demo for Nene's Drain Cleaning Services in Key West. It includes your official circular logo, 1510 Josephine Street address, 24/7 emergency dispatch for toilet floods & grease lines, and 100% real Google Maps reviews from your local clients like Jennifer Howe and Becky Cobo."
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors cursor-pointer"
          >
            Close & View Website
          </button>
        </div>

      </div>
    </div>
  );
};

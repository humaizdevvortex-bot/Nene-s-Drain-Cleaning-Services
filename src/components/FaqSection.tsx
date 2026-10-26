import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Are you available for evening, Sunday, or holiday plumbing emergencies in Key West?",
    answer: "Yes. Daniel regularly answers emergency calls 7 days a week. As our customer reviews highlight (such as Roger Suarez calling on a Sunday evening when his toilet flooded, or Jennifer Howe calling for an urgent RV client), Nene's prioritizes real plumbing emergencies so water damage is stopped immediately."
  },
  {
    question: "Do you offer recurring maintenance for Key West restaurants and bars?",
    answer: "Yes. Commercial restaurants and hospitality kitchens in Key West face heavy grease and sewer strain. Nene's provides scheduled monthly and bi-monthly preventative cleaning contracts to scour kitchen grease lines and floor drains, keeping establishments odor-free and code-compliant without costly mid-dinner shutdowns."
  },
  {
    question: "Which areas of the Florida Keys do you service?",
    answer: "Our physical shop is located at 1510 Josephine Street in Key West, FL 33040. We regularly service Key West, Stock Island, Key Haven, Sugarloaf Key, Cudjoe Key, Summerland Key, and Big Pine Key throughout the Lower Florida Keys."
  },
  {
    question: "What plumbing services does Daniel handle in addition to drain cleaning?",
    answer: "While drain and sewer cleaning is our core specialty, Daniel is an experienced second-generation plumber who handles water heater installations and emergency repairs, toilet replacements, stubborn leaks, cistern and rain gutter piping, kitchen faucet and garbage disposal installations, and exterior pressure washing."
  },
  {
    question: "Why do local Key West property managers and Airbnb hosts rely on Nene's?",
    answer: "Property managers like Becky Cobo (19-review Google Local Guide) highlight that Daniel answers his phone directly, shows up immediately, communicates clearly with both owners and guests, and leaves the job site spotless."
  },
  {
    question: "How do your prices compare to corporate plumbing franchises?",
    answer: "Nene's is an independent family-owned business with over 20 years in the Keys. We have low overhead and believe in honest island pricing. Verified Google reviews frequently note that Daniel charged a fraction (often 1/3) of what large corporate competitors quoted."
  }
];

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-red-600 tracking-wide uppercase mb-2">
            Local FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions.
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Real answers regarding Key West response times, commercial grease contracts, and Lower Keys service radius.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div className={`p-1 text-slate-500 rounded-md transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-red-600' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

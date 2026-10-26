import React from 'react';
import { Star, ShieldCheck, Quote, ExternalLink, CheckCircle } from 'lucide-react';
import { REAL_REVIEWS, BUSINESS_INFO } from '../data/businessInfo';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Aggregate Rating from Google Maps */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold text-red-600 tracking-wide uppercase mb-2">
              Verified Google Business Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Real Words From Real Florida Keys Neighbors.
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              100% authentic customer feedback published on Nene's Google Maps profile by homeowners, vacation rental property managers, and Key West residents.
            </p>
          </div>

          {/* Aggregate Rating Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 shrink-0">
            <div className="text-4xl font-black text-slate-900 tabular-nums">4.9</div>
            <div>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs font-bold text-slate-700 mt-1">
                49+ Verified Google Reviews
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-0.5"
              >
                <span>Read all on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Real Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                {/* Rating stars & time */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{rev.timeAgo}</span>
                </div>

                {/* Services or Price Tag if reported */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {rev.servicesListed?.map((svc, i) => (
                    <span key={i} className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {svc}
                    </span>
                  ))}
                  {rev.priceTag && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {rev.priceTag}
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.content}"
                </p>

                {/* Owner Reply if existed in review data */}
                {rev.ownerReply && (
                  <div className="mt-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-600">
                    <strong className="text-slate-900 block font-semibold">Response from Daniel (Owner):</strong>
                    "{rev.ownerReply}"
                  </div>
                )}
              </div>

              {/* Author & Badge */}
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{rev.author}</div>
                  <div className="text-[11px] text-slate-500">{rev.badge}</div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Google Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View on Google Maps Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900">
              Want to see all 49+ reviews on Google Maps?
            </h3>
            <p className="text-xs text-slate-500">
              Nene's Drain Cleaning Services maintains a 4.9-star average from verified local Florida Keys customers.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>Open Google Maps Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

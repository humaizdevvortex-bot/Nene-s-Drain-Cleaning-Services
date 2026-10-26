import React, { useState } from 'react';
import { Camera, MapPin, CheckCircle2, Eye, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'fleet' | 'commercial' | 'snaking' | 'plumbing';
  src: string;
  location: string;
  description: string;
  tag: string;
}

const ALL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "van-daniel",
    title: "Daniel In The Service Van (Ready for Dispatch)",
    category: "fleet",
    src: "/assets/aistudio/imgi_21_HLfJ6Vamum_8f79cdf4.webp",
    location: "Key West, FL",
    description: "Daniel Pumar heading out on emergency service call with full mobile inventory and motorized snakers.",
    tag: "Owner Dispatch"
  },
  {
    id: "sprinter-van",
    title: "Nene's High-Roof Jetting & Drain Fleet Van",
    category: "fleet",
    src: "/assets/aistudio/imgi_3_2IIJpMyPgW_b984b9b7.webp",
    location: "Key West, FL",
    description: "Fully equipped with commercial hydro-jetting, sewer inspection camera reels, and mechanical cable machines.",
    tag: "Commercial Fleet"
  },
  {
    id: "butcher-jetting",
    title: "Commercial Drain Jetting at The Local Butcher & Market",
    category: "commercial",
    src: "/assets/aistudio/imgi_9_qp3WFWFV1o_89fdffed.webp",
    location: "1202 White St, Key West",
    description: "Operating heavy-duty sewer jetting machine to flush exterior commercial grease and floor drain lines.",
    tag: "Commercial Jetting"
  },
  {
    id: "mangia-mangia",
    title: "Routine Restaurant Sewer Maintenance at Mangia Mangia",
    category: "commercial",
    src: "/assets/aistudio/imgi_10_YcRLxpRLDw_7d2aa824.webp",
    location: "Southard St, Key West",
    description: "Scheduled preventative grease line and sewer clearing to prevent dining room odors and kitchen downtime.",
    tag: "Restaurant Contract"
  },
  {
    id: "shower-valve-ba",
    title: "Shower Fixture & Valve Replacement (Before & After)",
    category: "plumbing",
    src: "/assets/aistudio/image_7d1cf9cb.png",
    location: "Key West Residential",
    description: "Replaced seized, corroded coastal shower handles and spout with brand-new chrome 3-handle tub system.",
    tag: "Before & After"
  },
  {
    id: "torch-pipe-repair",
    title: "Copper Pipe Torch Soldering & Shower Valve Rebuild",
    category: "plumbing",
    src: "/assets/aistudio/imgi_16_oWSrEkV7xg_5902a54e.webp",
    location: "Key West Home",
    description: "Precision in-wall copper pipe soldering for hot/cold mixing valve replacement inside tub enclosure.",
    tag: "Torch Soldering"
  },
  {
    id: "torch-mixing-close",
    title: "In-Wall Valve Soldering & Plumbing Line Fitting",
    category: "plumbing",
    src: "/assets/aistudio/imgi_15_zJOYkl29PW_f193dc0d.webp",
    location: "Key West Bathroom Repair",
    description: "Replacing damaged brass fittings and copper supply lines behind tile wall to resolve hidden shower leaks.",
    tag: "Pipe Repair"
  },
  {
    id: "parking-drain-snake",
    title: "Parking Structure Main Drain Cleanout Rooting",
    category: "snaking",
    src: "/assets/aistudio/imgi_11_g50hqBvrEX_da179582.webp",
    location: "Key West Commercial Plaza",
    description: "Using motorized sewer machine in Nene's uniform to clear backed-up storm drainage and waste stack.",
    tag: "Drain Snaking"
  },
  {
    id: "roof-vent-snake",
    title: "Rooftop Plumbing Vent Stack Mechanical Clearing",
    category: "snaking",
    src: "/assets/aistudio/imgi_8_XvPcNv5bX2_a251975b.webp",
    location: "Old Town Key West",
    description: "Snaking plumbing vent stacks directly from commercial flat roof to clear stubborn bird/debris air locks.",
    tag: "Roof Stack Rooter"
  },
  {
    id: "condo-service-van",
    title: "Nene's Van On-Site at Residential Condominiums",
    category: "fleet",
    src: "/assets/aistudio/imgi_17_Cq7WOKkvBU_5b7e8b28.webp",
    location: "Key West, FL",
    description: "Nene's Drain Cleaning van on site handling multi-unit lavatories, tubs, and main sewer line backups.",
    tag: "Residential Service"
  },
  {
    id: "toilet-bidet",
    title: "Fresh Toilet & Modern Bidet Attachment Installation",
    category: "plumbing",
    src: "/assets/aistudio/imgi_2_ZezpKQkEuw_6b5bc4df.webp",
    location: "Key West Home",
    description: "Completed clean new Glacier Bay toilet installation with dual-temperature bidet attachment.",
    tag: "Fixture Install"
  },
  {
    id: "island-heritage",
    title: "Born & Raised in Key West: Local Florida Keys Roots",
    category: "fleet",
    src: "/assets/aistudio/imgi_5_iYeRVHhNH5_017883fd.webp",
    location: "Key West Sandbar, FL",
    description: "Daniel Pumar enjoying the local island waters. True lifelong Monroe County resident serving the local community.",
    tag: "Local Island Native"
  }
];

export const RealWorkGallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fleet' | 'commercial' | 'snaking' | 'plumbing'>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all' 
    ? ALL_GALLERY_ITEMS 
    : ALL_GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-bold text-red-600 tracking-wide uppercase mb-2">
            100% Real On-The-Job Photography
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            See Daniel & Nene’s Fleet In Action Across Key West.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Every photo shown below is from actual Key West job sites: commercial restaurant jetting on White & Southard St, bathroom valve torch soldering, parking stack rooting, and service vans.
          </p>
        </div>

        {/* Filter Buttons in a Single Clean Line (as requested: 'isko single line me kro') */}
        <div className="mb-8 overflow-x-auto no-scrollbar">
          <div className="inline-flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl whitespace-nowrap min-w-full sm:min-w-0">
            {[
              { id: 'all', label: 'All Photos (12)' },
              { id: 'fleet', label: 'Vans & Daniel' },
              { id: 'commercial', label: 'Restaurant Jetting' },
              { id: 'snaking', label: 'Drain & Roof Snaking' },
              { id: 'plumbing', label: 'Plumbing & Soldering' }
            ].map(btn => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer shrink-0 ${
                  filter === btn.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of All Real Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-red-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Photo Frame */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Tag Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/10">
                  {item.tag}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5">
                  <Eye className="w-4 h-4" />
                  <span>Click to Enlarge</span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-red-600">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mt-0.5 line-clamp-1 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verified Nene's Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeModalItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs cursor-pointer"
            onClick={() => setActiveModalItem(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col cursor-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative aspect-16/10 bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src={activeModalItem.src}
                  alt={activeModalItem.title}
                  className="max-w-full max-h-full object-contain"
                />
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors cursor-pointer"
                  aria-label="Close photo preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                    {activeModalItem.location}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {activeModalItem.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeModalItem.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

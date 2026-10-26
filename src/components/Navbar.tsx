import React, { useState } from 'react';
import { Phone, Menu, X, Star, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Bar: Clean Uniform Styling (No Multi-colors as requested) */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-3 text-center sm:text-left justify-center sm:justify-start text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <Star className="w-3.5 h-3.5 fill-current text-slate-400" />
              <span>{BUSINESS_INFO.rating} Rating (49+ Verified Google Reviews)</span>
            </span>
            <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>1510 Josephine St, Key West, FL 33040</span>
            </span>
            <span aria-hidden="true" className="text-slate-600 hidden md:inline">·</span>
            <span className="flex items-center gap-1.5 font-medium hidden md:inline-flex">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Open 7 Days a Week + 24/7 Emergency</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a 
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-white hover:text-red-400 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500 fill-current" />
              <span>(305) 797-6477</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar with Increased Logo Size & To-The-Point Menu Links */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 h-22 sm:h-24">
        {/* Zone 1: Pure Official Logo with Increased Prominent Size */}
        <a 
          href="#home" 
          className="shrink-0 focus-visible:outline-none flex items-center py-1 group"
          aria-label="Nene's Drain Cleaning Home"
        >
          <Logo size="nav" />
        </a>

        {/* Zone 2: Navigation Links (To The Point) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-bold text-slate-700">
          <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
          <a href="#gallery" className="hover:text-red-600 transition-colors">Gallery</a>
          <a href="#estimate" className="hover:text-red-600 transition-colors">Estimate</a>
          <a href="#about" className="hover:text-red-600 transition-colors">About</a>
          <a href="#reviews" className="hover:text-red-600 transition-colors">Reviews</a>
          <a href="#hours" className="hover:text-red-600 transition-colors">Hours</a>
          <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
        </nav>

        {/* Zone 3: 1 Primary Action Call Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-2 px-5 py-3 text-xs font-black uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-xl transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call (305) 797-6477</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center justify-center p-2.5 text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors shadow-xs"
            aria-label="Call Nene's Drain Cleaning"
          >
            <Phone className="w-4 h-4 fill-current" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-base font-bold text-slate-800">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-red-600 transition-colors"
            >
              Services
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-red-600 transition-colors"
            >
              Gallery
            </a>
            <a 
              href="#estimate" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-red-600 transition-colors text-red-600"
            >
              Estimate
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-red-600 transition-colors"
            >
              About
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-red-600 transition-colors"
            >
              Reviews
            </a>
            <a 
              href="#hours" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-red-600 transition-colors"
            >
              Hours
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-red-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-3.5 text-center text-sm font-black text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Daniel: (305) 797-6477</span>
            </a>
            <div className="text-center text-xs text-slate-500">
              1510 Josephine Street, Key West, FL 33040
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'nav' | 'lg' | 'hero';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'nav' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    nav: 'w-16 h-16 sm:w-20 sm:h-20',
    lg: 'w-24 h-24 sm:w-28 sm:h-28',
    hero: 'w-36 h-36 sm:w-44 sm:h-44'
  };

  return (
    <div className={`inline-flex items-center justify-center shrink-0 select-none ${className}`}>
      {/* Pure Circular Official Logo Emblem */}
      <img
        src="/logo.png"
        alt="Nene's Drain Cleaning Official Logo"
        className={`${sizeClasses[size]} object-contain drop-shadow-sm transition-transform hover:scale-105 duration-200`}
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/assets/aistudio/Image_804cc944.png';
        }}
      />
    </div>
  );
};

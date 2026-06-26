import React from 'react';

interface CompanyLogoProps {
  className?: string;
  showText?: boolean;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function CompanyLogo({
  className = '',
  showText = true,
  theme = 'light',
  size = 'md'
}: CompanyLogoProps) {
  // Size mappings
  const sizeClasses = {
    sm: 'h-10 md:h-12 w-auto object-contain',
    md: 'h-14 md:h-16 w-auto object-contain',
    lg: 'h-24 md:h-28 w-auto object-contain',
    xl: 'h-36 md:h-44 w-auto object-contain'
  };

  const selectedSizeClass = sizeClasses[size] || sizeClasses.md;

  // On dark backgrounds, wrap in a beautiful, clean, white rounded container to preserve logo colors perfectly
  if (theme === 'dark') {
    return (
      <div className={`inline-flex items-center bg-white p-1.5 px-3 rounded-xl border border-slate-200/10 shadow-sm select-none ${className}`}>
        <img
          src="/src/assets/images/fixio_logo_1782456605771.jpg"
          alt="FIXIO Logo"
          className={`${selectedSizeClass} mix-blend-multiply`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // On light backgrounds, render it directly
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/src/assets/images/fixio_logo_1782456605771.jpg"
        alt="FIXIO Logo"
        className={`${selectedSizeClass}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}



import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Shield, MapPin, Mail, Clock } from 'lucide-react';
import CompanyLogo from './CompanyLogo';

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
  onOpenAdmin: () => void;
}

export default function Navbar({ onScrollTo, onOpenAdmin }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const menuItems = [
    { label: 'HOME', target: 'home' },
    { label: 'SERVICES', target: 'services' },
    { label: 'RENOVATION', target: 'about' },
    { label: 'AMC PLANS', target: 'amc' },
    { label: 'PROJECTS', target: 'projects' },
    { label: 'ABOUT US', target: 'about' },
    { label: 'CONTACT US', target: 'contact' },
  ];

  const handleItemClick = (label: string, target: string) => {
    setActiveItem(label);
    onScrollTo(target);
    setIsOpen(false);
  };

  const formattedWhatsAppUrl = 'https://api.whatsapp.com/send?phone=971527804738&text=Hi%20Fixio%20Home%2520Maintenance%2c%20I%20would%20like%20to%20inquire%20about%20your%20services%2e';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-slate-100 bg-white">
      {/* Top Utility Bar - modeled exactly on premium template headers */}
      <div className="bg-[#0C1E35] text-white text-[11px] font-bold py-2.5 px-4 hidden lg:block select-none border-b border-slate-800">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#EAB308]" /> Dubai, United Arab Emirates
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-[#EAB308]" /> infofixiohome@gmail.com
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#EAB308]" /> Sat - Sun: 8:00 AM - 10:00 PM
            </span>
          </div>
          <div className="flex items-center gap-3.5 text-slate-300">
            <span>Follow Us:</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#EAB308] transition">Facebook</a>
            <span className="text-slate-700">•</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#EAB308] transition">Instagram</a>
            <span className="text-slate-700">•</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#EAB308] transition">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Main Main Menu bar */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
        
        {/* Brand Logo - replica */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); handleItemClick('HOME', 'home'); }}
          className="flex items-center gap-2 group shrink-0"
          id="brand-logo"
        >
          <CompanyLogo size="md" showText={true} theme="light" />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-6">
          {menuItems.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <button
                key={item.label}
                onClick={() => handleItemClick(item.label, item.target)}
                className={`text-[13px] font-bold tracking-wide transition-all relative py-2 px-1 cursor-pointer ${
                  isActive ? 'text-[#EAB308]' : 'text-slate-700 hover:text-[#EAB308]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#EAB308]" 
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right CTA Callouts (Call 24/7 Phone details & Whatsapp trigger) */}
        <div className="hidden md:flex items-center gap-5 shrink-0">
          
          {/* Phone block */}
          <a
            href="tel:+971527804738"
            className="flex items-center gap-3 bg-transparent select-none group"
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#0C1E35] text-white group-hover:bg-[#EAB308] group-hover:text-[#0C1E35] transition duration-300 shrink-0">
              <Phone className="w-5 h-5 fill-current" />
            </div>
            <div className="text-left">
              <p className="text-[11px] font-bold text-slate-500 leading-tight">Call Us 24/7</p>
              <p className="text-[16px] font-extrabold text-[#0C1E35] tracking-tight leading-snug group-hover:text-[#EAB308] transition duration-200">
                +971 52 780 4738
              </p>
            </div>
          </a>

          {/* Solid Green WhatsApp circle */}
          <a
            href={formattedWhatsAppUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] text-white hover:bg-[#12b057] transition-all duration-300 hover:scale-105 shadow-md shrink-0"
            title="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.7 1.45 5.4 0 9.8-4.4 9.8-9.8s-4.4-9.8-9.8-9.8-9.8 4.4-9.8 9.8c0 2 .5 3.9 1.5 5.6l-.3.9-.9 3.3 3.4-.9 1-.5zm10.7-3.6c-.3-.2-1.7-1-2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L8 7.3c-.3-.8-.7-.8-.9-.8H6.5c-.3 0-.7.1-1.1.5C5 7.4 4 8.5 4 10.6s1.5 4.3 1.7 4.6c.2.3 3 4.6 7.3 6.5 1 .4 1.8.7 2.4.9 1 .3 2 .3 2.7.2.8-.1 2.5-1 2.9-2 .4-1 .4-1.9.3-2.1-.1-.1-.4-.2-.7-.4z"/>
            </svg>
          </a>

        </div>

        {/* Mobile Hamburger Menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden flex items-center justify-center p-2.5 rounded-lg border border-slate-200 text-slate-800 hover:bg-slate-50 transition"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Animated Dropdown Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="xl:hidden border-b border-slate-100 bg-white absolute w-full left-0 right-0 overflow-hidden shadow-xl z-50"
          >
            <div className="px-5 py-6 space-y-4">
              <div className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleItemClick(item.label, item.target)}
                    className="w-full text-left py-3 px-4 rounded-xl text-sm font-bold text-slate-700 hover:text-[#EAB308] hover:bg-slate-50 uppercase tracking-wider transition"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Utility Section / Call-out in Mobile Drawer */}
              <div className="pt-6 border-t border-slate-100 space-y-3.5">
                <a
                  href="tel:+971527804738"
                  className="flex items-center gap-3.5 w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0C1E35] text-white">
                    <Phone className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">OFFICE PHONE NUMBER</p>
                    <p className="text-sm font-extrabold text-[#0C1E35] font-sans mt-0.5">+971 52 780 4738</p>
                  </div>
                </a>

                <a
                  href={formattedWhatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#12b057] text-sm font-bold text-white transition shadow-md"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.7 1.45 5.4 0 9.8-4.4 9.8-9.8s-4.4-9.8-9.8-9.8-9.8 4.4-9.8 9.8c0 2 .5 3.9 1.5 5.6l-.3.9-.9 3.3 3.4-.9 1-.5zm10.7-3.6c-.3-.2-1.7-1-2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L8 7.3c-.3-.8-.7-.8-.9-.8H6.5c-.3 0-.7.1-1.1.5C5 7.4 4 8.5 4 10.6s1.5 4.3 1.7 4.6c.2.3 3 4.6 7.3 6.5 1 .4 1.8.7 2.4.9 1 .3 2 .3 2.7.2.8-.1 2.5-1 2.9-2 .4-1 .4-1.9.3-2.1-.1-.1-.4-.2-.7-.4z"/>
                  </svg>
                  Chat Instantly on WhatsApp
                </a>

                <div className="flex items-center justify-between text-[11px] text-slate-500 px-1 pt-1">
                  <span>Sat - Sun 8:00 AM - 10:00 PM</span>
                  <button
                    onClick={() => { setIsOpen(false); onOpenAdmin(); }}
                    className="flex items-center gap-1.5 text-slate-500 hover:text-[#EAB308] select-none transition font-bold"
                  >
                    <Shield className="w-3.5 h-3.5 text-yellow-500" /> Bookings Admin
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Phone, Check, Clock, Award, ShieldAlert, BadgeCheck } from 'lucide-react';
import { DUBAI_AREAS, SERVICES } from '../data';
import { Booking } from '../types';

interface HeroProps {
  onSubmitBooking: (bookingData: Omit<Booking, 'id' | 'status' | 'createdAt'>) => Promise<void> | void;
  selectedServicePreset: string;
  setSelectedServicePreset: (srv: string) => void;
}

export default function Hero({ onSubmitBooking, selectedServicePreset, setSelectedServicePreset }: HeroProps) {
  // Input Form States
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [service, setService] = useState('AC SERVICES');
  const [area, setArea] = useState('Dubai Marina');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  // Form errors state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Trigger form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    const curErrors: Record<string, string> = {};
    if (!name.trim()) curErrors.name = 'Your name is required';
    if (!mobile.trim()) {
      curErrors.mobile = 'Mobile number is required';
    } else if (!/^\+?([0-9\s-]{7,15})$/.test(mobile.trim())) {
      curErrors.mobile = 'Enter a valid mobile number';
    }
    if (!date) curErrors.date = 'Preferred date is required';

    if (Object.keys(curErrors).length > 0) {
      setErrors(curErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await onSubmitBooking({
        name: name.trim(),
        mobile: mobile.trim(),
        service,
        area,
        date,
        message: message.trim()
      });

      // Reset fields on success
      setName('');
      setMobile('');
      setMessage('');
    } catch (err) {
      console.error('Submission failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Sync preset from selection
  useEffect(() => {
    if (selectedServicePreset) {
      setService(selectedServicePreset);
    }
  }, [selectedServicePreset]);

  // Set default appointment date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const formattedWhatsAppUrl = 'https://api.whatsapp.com/send?phone=971527804738&text=Hi%20Fixio%20Home%2520Maintenance%2c%20I%20would%20like%2520to%20book%20a%20service%2e';

  // Smooth scroll helper
  const scrollToForm = () => {
    const el = document.getElementById('booking-card-wrapper');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const bulletServices = ['AC', 'Plumbing', 'Electrical', 'Painting', 'Handyman', 'Renovation'];

  const bottomTrustBadges = [
    { label: 'Same Day Service', icon: Clock },
    { label: 'Trained Professionals', icon: Award },
    { label: '90-Day Warranty', icon: BadgeCheck },
    { label: 'Transparent Pricing0', icon: ShieldAlert } // We can display a custom currency/pricing label
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-slate-950 flex flex-col justify-center pt-32 pb-16 lg:pt-24 lg:pb-12 xl:pt-32 overflow-hidden"
    >
      {/* Background Graphic / Realistic AC Repair backdrop */}
      <div className="absolute inset-0 z-0 select-none">
        <motion.img 
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.82, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          src="/images/hero_bg_1781962213766.jpg" 
          alt="Fixio Premium Home Maintenance Dubai background with Burj Khalifa and certified technician" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Layered dark gradients precisely supporting high legibility on the left text and bright visual element clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/10" />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 z-10 flex flex-col justify-between flex-grow">
        
        {/* Mid Hero Section Grid layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto pt-4 md:pt-8 lg:pt-12">
          
          {/* Left Text / CTAs column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Main Punchy Big Typography Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[44px] sm:text-5xl md:text-[62px] font-black tracking-tight leading-[1.08] text-white uppercase font-sans"
            >
              ONE CALL.<br />
              EVERY <span className="text-[#EAB308]">SOLUTION.</span>
            </motion.h1>

            {/* Description Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-slate-200 font-sans max-w-2xl leading-relaxed font-semibold filter drop-shadow-sm"
            >
              Professional Home Maintenance &amp; Renovation <br />
              Services Across Dubai
            </motion.p>

            {/* Horizontal List of bullets exactly as shown in the picture */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-3.5"
            >
              {bulletServices.map((srv) => (
                <div key={srv} className="flex items-center gap-1.5 select-none">
                  <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border border-[#EAB308]/60 bg-[#EAB308]/10 text-[#EAB308] shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-white text-sm font-bold tracking-wide font-sans">{srv}</span>
                </div>
              ))}
            </motion.div>

            {/* Solid and Outlined Action buttons exactly as displayed */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={scrollToForm}
                className="py-4 px-8 text-sm font-black uppercase tracking-wider text-[#0C1E35] rounded-lg bg-[#EAB308] hover:bg-[#d9a307] active:scale-98 transition shadow-lg shadow-yellow-500/10 text-center cursor-pointer"
              >
                BOOK A SERVICE →
              </button>

              <a
                href={formattedWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="py-4 px-8 text-sm font-black uppercase tracking-wider text-white rounded-lg border border-slate-400 bg-[#0C1E35]/40 hover:bg-slate-900 active:scale-98 transition flex items-center justify-center gap-2.5 shadow-md"
              >
                {/* Standard WhatsApp logo vector */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.7 1.45 5.4 0 9.8-4.4 9.8-9.8s-4.4-9.8-9.8-9.8-9.8 4.4-9.8 9.8c0 2 .5 3.9 1.5 5.6l-.3.9-.9 3.3 3.4-.9 1-.5zm10.7-3.6c-.3-.2-1.7-1-2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L8 7.3c-.3-.8-.7-.8-.9-.8H6.5c-.3 0-.7.1-1.1.5C5 7.4 4 8.5 4 10.6s1.5 4.3 1.7 4.6c.2.3 3 4.6 7.3 6.5 1 .4 1.8.7 2.4.9 1 .3 2 .3 2.7.2.8-.1 2.5-1 2.9-2 .4-1 .4-1.9.3-2.1-.1-.1-.4-.2-.7-.4z"/>
                </svg>
                WHATSAPP NOW
              </a>
            </motion.div>

          </div>

          {/* Right column Form Card matches exactly the dark navy template */}
          <div id="booking-card-wrapper" className="lg:col-span-5 flex justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-[420px] rounded-2xl bg-[#031124] border border-slate-800/80 p-7 shadow-2xl relative"
            >
              {/* Gold Top line highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#EAB308] rounded-t-2xl" />

              <div className="text-center mb-6">
                <h2 className="text-[20px] font-extrabold text-white tracking-widest uppercase">
                  BOOK A SERVICE
                </h2>
                <p className="text-[12px] text-slate-400 mt-1 font-sans">
                  We will contact you shortly
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-3.5 border border-slate-700/60 bg-[#061B33]/80 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] transition disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Mobile */}
                <div className="relative">
                  <input
                    type="tel"
                    required
                    disabled={isSubmitting}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3.5 border border-slate-700/60 bg-[#061B33]/80 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] transition font-mono disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="relative">
                  <select
                    disabled={isSubmitting}
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value);
                      setSelectedServicePreset(e.target.value);
                    }}
                    className="w-full px-4 py-3.5 border border-slate-700/60 bg-[#061B33]/80 rounded-lg text-sm text-white focus:outline-none focus:border-[#EAB308] transition appearance-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="BRONZE PLAN">BRONZE PLAN</option>
                    <option value="SILVER PLAN">SILVER PLAN</option>
                    <option value="GOLD PLAN">GOLD PLAN</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>

                {/* Area Dropdown */}
                <div className="relative">
                  <select
                    disabled={isSubmitting}
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-4 py-3.5 border border-slate-700/60 bg-[#061B33]/80 rounded-lg text-sm text-white focus:outline-none focus:border-[#EAB308] transition appearance-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {DUBAI_AREAS.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>

                {/* Preferred Date */}
                <div className="relative">
                  <span className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </span>
                  <input
                    type="date"
                    required
                    disabled={isSubmitting}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-4 pr-10 py-3.5 border border-slate-700/60 bg-[#061B33]/80 rounded-lg text-sm text-white focus:outline-none focus:border-[#EAB308] transition disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Your Message */}
                <div className="relative">
                  <textarea
                    rows={2}
                    disabled={isSubmitting}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    className="w-full px-4 py-3.5 border border-slate-700/60 bg-[#061B33]/80 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#EAB308] transition resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Submission CTA matches visual gold exactly */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-sm font-black uppercase tracking-wider text-[#0C1E35] bg-[#EAB308] hover:bg-[#d9a307] active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed transition duration-200 rounded-lg font-sans mt-3 shadow cursor-pointer text-center flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-[#0C1E35]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      SUBMITTING...
                    </>
                  ) : (
                    'SUBMIT REQUEST'
                  )}
                </button>

              </form>
            </motion.div>
          </div>

        </div>

        {/* Footer badges row inside hero section at the very bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 py-5 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
        >
          {bottomTrustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            
            // Render beautiful custom icons corresponding to the trust items
            let customIconElement;
            if (badge.label === 'Same Day Service') {
              customIconElement = (
                <svg className="w-6 h-6 text-[#EAB308]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              );
            } else if (badge.label === 'Trained Professionals') {
              customIconElement = (
                <svg className="w-6 h-6 text-[#EAB308]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <polyline points="16 11 18 13 22 9" />
                </svg>
              );
            } else if (badge.label === '90-Day Warranty') {
              customIconElement = (
                <svg className="w-6 h-6 text-[#EAB308]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              );
            } else {
              // Transparent Pricing
              customIconElement = (
                <svg className="w-6 h-6 text-[#EAB308]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              );
            }

            return (
              <div key={idx} className="flex items-center gap-3 select-none">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#EAB308]/10 border border-[#EAB308]/20 shrink-0">
                  {customIconElement}
                </div>
                <div>
                  <span className="text-white text-sm font-bold tracking-wide font-sans block leading-tight">
                    {badge.label === 'Transparent Pricing0' ? 'Transparent Pricing' : badge.label}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

import React from 'react';
import { Phone, Mail, Clock, MapPin, Shield, MessageSquare, Heart } from 'lucide-react';
import { DUBAI_AREAS } from '../data';
import CompanyLogo from './CompanyLogo';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
  onOpenAdmin: () => void;
}

export default function Footer({ onScrollTo, onOpenAdmin }: FooterProps) {
  
  const handleLinkClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    onScrollTo(target);
  };

  const quickLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About Us', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Projects', target: 'projects' },
    { label: 'AMC Plans', target: 'amc' }
  ];

  const servicesLinks = [
    'AC Services',
    'Plumbing',
    'Electrical',
    'Painting',
    'Handyman',
    'Renovation'
  ];

  const featuredAreas = DUBAI_AREAS.slice(0, 6);

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-20 pb-8 text-left relative overflow-hidden">
      
      {/* Background neon strip */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500" />
      
      <div className="w-full max-w-7xl mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-slate-900/60">
          
          {/* Logo & About column */}
          <div className="lg:col-span-3 space-y-5">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); onScrollTo('home'); }}
              className="flex items-center gap-2 group"
            >
              <CompanyLogo size="md" showText={true} theme="dark" />
            </a>

            <p className="text-xs text-slate-400 leading-relaxed font-sans font-normal">
              One call for all your home maintenance, repair, and renovation needs in Dubai. We maintain. You relax. We provide certified professionals with fully-stocked vans ready to deploy 24/7.
            </p>

            <div className="pt-2 flex flex-col gap-1 border-t border-slate-900 text-slate-400">
              <span className="text-[9px] font-black tracking-widest text-[#EAB308] uppercase">OFFICIAL PARTNER COMPANY</span>
              <p className="text-[11px] font-bold text-slate-200 font-sans leading-snug">
                RTS Riyaz Ahmad Technical Services LLC
              </p>
            </div>

            {/* Social channels */}
            <div className="pt-2 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:bg-[#3b5998] hover:text-white hover:border-[#3b5998] transition-all duration-300 shadow-sm"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
                title="Instagram"
              >
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm"
                title="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?phone=971527804738"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 shadow-sm"
                title="WhatsApp Support"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.004 2c-5.51 0-9.99 4.47-9.99 9.99 0 2.08.64 4.12 1.84 5.85L2 22l4.31-1.13c1.67.91 3.53 1.39 5.43 1.39 5.51 0 10-4.48 10-10C21.74 6.47 17.26 2 12.004 2zm5.72 13.98c-.24.68-1.2 1.25-1.65 1.29-.42.04-.97.06-2.52-.55-1.95-.76-3.19-2.73-3.29-2.87-.09-.13-.78-.93-.78-1.78s.44-1.27.6-1.43c.16-.16.35-.2.47-.2.12 0 .24 0 .34.01.11 0 .25-.04.39.29.15.36.51 1.23.55 1.32.04.09.07.2.01.32-.06.12-.1.2-.2.32-.1.12-.21.27-.3.37-.1.1-.21.21-.09.42.12.21.52.85 1.11 1.38.76.68 1.4.89 1.6.99.2.1.32.09.44-.05.12-.14.51-.59.65-.8.14-.2.27-.16.46-.1.19.06 1.19.56 1.39.66.2.1.33.15.38.23.05.08.05.47-.19 1.15z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href="#"
                    onClick={(e) => handleLinkClick(e, link.target)}
                    className="text-xs text-slate-400 hover:text-yellow-500 transition-colors capitalize cursor-pointer flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-800 group-hover:bg-yellow-500 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services list */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              OUR SERVICES
            </h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((srv) => (
                <li key={srv}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onScrollTo('services');
                    }}
                    className="text-xs text-slate-400 hover:text-yellow-500 transition-colors cursor-pointer flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-800 group-hover:bg-yellow-500 transition-colors" />
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dubai Service Areas */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              SERVICE AREAS
            </h4>
            <ul className="space-y-2.5">
              {featuredAreas.map((area) => (
                <li key={area}>
                  <span className="text-xs text-slate-400 hover:text-white transition-colors cursor-default flex items-center gap-1.5 font-sans">
                    <MapPin className="w-3 h-3 text-yellow-500/60 grow-0 shrink-0" />
                    {area}
                  </span>
                </li>
              ))}
              <li>
                <span className="text-xs text-yellow-500 font-bold font-sans">
                  ✓ Serving All Areas in Dubai
                </span>
              </li>
            </ul>
          </div>

          {/* Contacts + Stylized Dubai Map mirroring photo */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              CONTACT US
            </h4>
            <ul className="space-y-3 font-sans">
              
              <li className="flex items-start gap-2.5 text-xs text-slate-400">
                <Phone className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-bold">24/7 Phone Support</span>
                  <a href="tel:+971527804738" className="hover:text-yellow-500 font-bold text-white font-mono transition mt-0.5 block">+971 52 780 4738</a>
                </div>
              </li>

              <li className="flex items-start gap-2.5 text-xs text-slate-400">
                <Mail className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-bold">Official E-mail</span>
                  <a href="mailto:infofixiohome@gmail.com" className="hover:text-yellow-500 text-white font-mono font-medium transition mt-0.5 block break-all">infofixiohome@gmail.com</a>
                </div>
              </li>

              <li className="flex items-start gap-2.5 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-bold">Office Address</span>
                  <p className="text-white font-medium block mt-0.5 leading-relaxed">
                    48 # Office Breeze Business Center Al Hamza Building (Office Tower) 3rd Floor Karama Next to Ansar Galary
                  </p>
                  <a href="tel:042312900" className="hover:text-yellow-500 font-bold text-yellow-500 font-mono transition mt-1.5 block">
                    Tel 04-2312900
                  </a>
                </div>
              </li>

            </ul>

            {/* A stylized placeholder map precisely mimicking the map in the photo footer */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-900 aspect-[16/9] w-full bg-slate-950/80 shadow">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115611.83445582962!2d55.143241031919806!3d25.04753556094038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbcc143056d08000!2sDubai%20Marina%20-%20Dubai!5e0!3m2!1sen!2sae!4v1718873024842!5m2!1sen!2sae" 
                className="absolute inset-0 w-full h-full border-0 opacity-40 hover:opacity-75 transition-opacity" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Fixio Service Coverage Area Dubai"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Brand Copyright & Administrative Console access details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-550">
          <p className="font-sans leading-none">
            © {new Date().getFullYear()} <span className="text-slate-400 font-semibold font-sans">Fixio Home Maintenance</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-default">Privacy Policy</span>
            <span className="text-slate-800">•</span>
            <span className="hover:text-slate-400 transition-colors cursor-default">Terms & Conditions</span>
            <span className="text-slate-800">•</span>
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1 text-slate-600 hover:text-yellow-500 transition-all font-semibold uppercase tracking-wider select-none"
              title="Stakeholder Booking Records Console"
            >
              <Shield className="w-3.5 h-3.5 text-yellow-500/60" /> Admin Console
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

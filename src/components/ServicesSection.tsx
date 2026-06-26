import { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import ServiceDetailsModal from './ServiceDetailsModal';

interface ServicesSectionProps {
  onSelectService: (srvTitle: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleCardClick = (id: string) => {
    setSelectedServiceId(id);
    setIsModalOpen(true);
  };

  const handleBookService = (title: string) => {
    onSelectService(title);
    const formCard = document.getElementById('booking-card-wrapper');
    if (formCard) {
      formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const richServices = [
    {
      id: 'ac',
      displayTitle: 'AC SERVICES',
      bookingTitle: 'AC SERVICES',
      imageUrl: '/src/assets/images/ac_indian_worker_1782468674434.jpg',
      bulletText: 'Installation, repair, and chemical coil/filter cleaning of all AC units.'
    },
    {
      id: 'plumbing',
      displayTitle: 'PLUMBING SERVICES',
      bookingTitle: 'PLUMBING',
      imageUrl: '/src/assets/images/plumbing_indian_worker_1782468717739.jpg',
      bulletText: 'Leak repairs, pipe fittings, water heater installations and drain unclogging.'
    },
    {
      id: 'electrical',
      displayTitle: 'ELECTRICAL SERVICES',
      bookingTitle: 'ELECTRICAL',
      imageUrl: '/src/assets/images/electrical_indian_worker_1782468687655.jpg',
      bulletText: 'Circuit troubleshooting, smart light fittings, wiring, and DB board solutions.'
    },
    {
      id: 'painting',
      displayTitle: 'PROFESSIONAL PAINTING',
      bookingTitle: 'PAINTING',
      imageUrl: '/src/assets/images/painting_work_1781960268492.jpg',
      bulletText: 'Flawless interior/exterior wall painting with premium materials and custom finishes.'
    },
    {
      id: 'handyman',
      displayTitle: 'HANDYMAN SERVICES',
      bookingTitle: 'HANDYMAN',
      imageUrl: '/src/assets/images/handyman_indian_worker_1782468700697.jpg',
      bulletText: 'Aesthetic TV mounting, customized furniture assembly, curtains, and repairs.'
    },
    {
      id: 'renovation',
      displayTitle: 'LUXURY RENOVATIONS',
      bookingTitle: 'RENOVATION',
      imageUrl: '/src/assets/images/renovation_work_service_1781963082831.jpg',
      bulletText: 'Bespoke design, high-end kitchen, bathroom, and complete luxury villa renovations.'
    }
  ];

  // Custom icon map inside the gold-bordered box
  const getCustomServiceIcon = (id: string) => {
    switch(id) {
      case 'ac':
        return (
          <svg className="w-5.5 h-5.5 text-[#EAB308]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="5" width="20" height="9" rx="1.5" stroke="currentColor" strokeWidth="2" />
            <line x1="5" y1="14" x2="5" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="19" y1="14" x2="19" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <rect x="6" y="8" width="12" height="3" rx="0.5" fill="currentColor" fillOpacity="0.2" />
            <path d="M7 19 Q12 16 10 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <path d="M12 19 Q17 16 15 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </svg>
        );
      case 'plumbing':
        return (
          <svg className="w-5.5 h-5.5 text-[#EAB308]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 14 C17 17.5 14 19 12 21 C10 19 7 17.5 7 14 C7 11.239 9.239 9 12 9 C14.761 9 17 11.239 17 14 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
            <path d="M6 3 H14 V6 H6 Z" stroke="currentColor" strokeWidth="2" />
            <path d="M10 6 V9" stroke="currentColor" strokeWidth="2" />
            <path d="M14 4.5 Q18 4.5 18 8 V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'electrical':
        return (
          <svg className="w-5.5 h-5.5 text-[#EAB308]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 3 L4 13 H11 L10 21 L19 11 H12 L13 3 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        );
      case 'painting':
        return (
          <svg className="w-5.5 h-5.5 text-[#EAB308]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="3" width="16" height="7" rx="1" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
            <path d="M12 10 V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 16 H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 16 V21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M15 5 H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 'handyman':
        return (
          <svg className="w-5.5 h-5.5 text-[#EAB308]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 12.5 L20.5 6.5 C21.5 5.5 21.5 4 20.5 3 C19.5 2 18 2 17 3 L11 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M3.5 20.5 L9.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6.5 11.5 L12.5 17.5" stroke="currentColor" strokeWidth="2" />
            <circle cx="12.5" cy="11.5" r="2.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      default: // renovation
        return (
          <svg className="w-5.5 h-5.5 text-[#EAB308]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10 L12 3 L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="5" y="10" width="14" height="11" rx="1" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
            <rect x="9" y="14" width="6" height="7" stroke="currentColor" strokeWidth="2" />
          </svg>
        );
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-b border-slate-100 relative select-none">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 z-10 relative">
        
        {/* Section Heading matches EXACTLY */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-black tracking-[0.25em] text-[#EAB308] uppercase">
            OUR SERVICES
          </span>
          <h2 className="text-[34px] sm:text-[40px] font-black font-sans text-[#0C1E35] tracking-tight mt-2.5">
            Complete Property Care Solutions
          </h2>
          <div className="w-12 h-1 bg-[#EAB308] mx-auto mt-5 rounded-full" />
        </div>

        {/* 3x2 Grid on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {richServices.map((srv, index) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => handleCardClick(srv.id)}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              {/* Top Section: Media Image */}
              <div className="aspect-[4/3] w-full overflow-hidden relative border-b border-slate-100 bg-slate-50">
                <img
                  src={srv.imageUrl}
                  alt={srv.displayTitle}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle soft dark overlay on hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Middle Section: Dark Blue Bar containing Boxed Gold Icon & White Title */}
              <div className="bg-[#0C1E35] p-5 flex items-center gap-3.5 select-none border-b border-[#0C1E35]">
                <div className="flex items-center justify-center w-11 h-11 rounded-lg border border-[#EAB308] bg-transparent text-[#EAB308] shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {getCustomServiceIcon(srv.id)}
                </div>
                <h3 className="text-[14.5px] sm:text-[16px] font-black font-sans text-white tracking-wide uppercase leading-tight">
                  {srv.displayTitle}
                </h3>
              </div>

              {/* Bottom Section: Bullet Description on white background */}
              <div className="p-6 bg-white flex-grow flex flex-col justify-start">
                <div className="flex items-start gap-3">
                  {/* Soft rounded Gold bullet dot */}
                  <span className="text-[#EAB308] text-base leading-none select-none shrink-0 mt-0.5">•</span>
                  <p className="text-[13.5px] leading-relaxed text-slate-600 font-sans font-medium text-left">
                    {srv.bulletText}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Service Details Modal with Direct Calls, WhatsApp & Booking */}
      <ServiceDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceId={selectedServiceId}
        onBookNow={handleBookService}
      />
    </section>
  );
}

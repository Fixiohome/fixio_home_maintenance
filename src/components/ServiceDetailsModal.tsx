import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, MessageSquare, Check, ShieldCheck, Clock, Award } from 'lucide-react';

interface ServiceDetail {
  id: string;
  displayTitle: string;
  bookingTitle: string;
  imageUrl: string;
  description: string;
  longDescription: string;
  priceStart: string;
  guarantee: string;
  features: string[];
}

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string | null;
  onBookNow: (bookingTitle: string) => void;
}

const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  ac: {
    id: 'ac',
    displayTitle: 'AC SERVICES',
    bookingTitle: 'AC SERVICES',
    imageUrl: '/src/assets/images/ac_indian_worker_1782468674434.jpg',
    description: 'Expert diagnostics, heavy maintenance, and prompt split or ducted AC system restoration.',
    longDescription: 'Our certified HVAC experts ensure your cooling systems are at maximum efficiency, crucial for Dubai\'s extreme heat. We handle everything from basic chemical filter cleaning to complex compressor troubleshooting, refrigerant leak repair, fan motor replacements, and precise thermostat integration.',
    priceStart: 'AED 150',
    guarantee: '30-Day Work Warranty',
    features: [
      'Full chemical coil & tray sanitization',
      'Gas top-up & pressure leak testing',
      'Thermostat diagnostics & wiring fixes',
      'Drain line unclogging to prevent leaks',
      'Noise reduction & fan motor lubrication',
      'Prompt 24/7 emergency response dispatch'
    ]
  },
  plumbing: {
    id: 'plumbing',
    displayTitle: 'PLUMBING SERVICES',
    bookingTitle: 'PLUMBING',
    imageUrl: '/src/assets/images/plumbing_indian_worker_1782468717739.jpg',
    description: 'Rapid leak prevention, premium sanitary installation, pump repairs, and drain clearing.',
    longDescription: 'From high-pressure water pump failures to hidden wall leaks, our master plumbers utilize advanced visual sensors to locate and repair issues without structural damage. We install premium fixtures, solve persistent water heater errors, clear deep drain blockages, and ensure perfect water pressure.',
    priceStart: 'AED 120',
    guarantee: '100% Leak-Free Guarantee',
    features: [
      'Hidden pipeline leak acoustic detection',
      'Water pump repair, replacement & pressure tuning',
      'Water heater safety check & unit replacements',
      'Sinks, mixers, and premium toilet installations',
      'Kitchen/bathroom drain blockages clearing',
      'Fully equipped vans for same-day resolution'
    ]
  },
  electrical: {
    id: 'electrical',
    displayTitle: 'ELECTRICAL SERVICES',
    bookingTitle: 'ELECTRICAL',
    imageUrl: '/src/assets/images/electrical_indian_worker_1782468687655.jpg',
    description: 'Safe circuit troubleshooting, DB board servicing, custom light fixtures and smart switches.',
    longDescription: 'Safety first. Our qualified DEWA-compliant residential electricians run thorough thermal checks on your distribution board (DB board) to prevent short circuits and electrical hazards. We assist with custom lighting setups, smart home dimmers, elegant chandelier mountings, power sockets, and full wiring updates.',
    priceStart: 'AED 130',
    guarantee: 'DEWA Safety Standard Compliant',
    features: [
      'Circuit breaker fault diagnostics & restoration',
      'Main DB Board repairs, load balancing & testing',
      'Custom chandelier, spotlights & LED strips fitting',
      'Smart home switches & Nest thermostat install',
      'Outdoor garden landscape safe lighting setup',
      'Emergency short-circuit restoration 24/7'
    ]
  },
  painting: {
    id: 'painting',
    displayTitle: 'PROFESSIONAL PAINTING',
    bookingTitle: 'PAINTING',
    imageUrl: '/src/assets/images/painting_work_1781960268492.jpg',
    description: 'Sleek, pristine interior and exterior wall transformations with zero mess or odors.',
    longDescription: 'We provide top-tier painting finishes using premium Jotun, Fenomastic, or National brand paints. Our skilled painters prepare every wall meticulously with dust-free sanding, filling wall cracks with tough filler, applying dynamic base coats, and executing pristine, uniform topcoats. We provide premium floor and furniture protective covering.',
    priceStart: 'AED 400',
    guarantee: 'Flawless Finish Guarantee',
    features: [
      'Interior walls, ceilings & full villa painting',
      'Durable exterior water-resistant acrylic coats',
      'Wall crack repairs, plastering & seamless sanding',
      'Accent walls, stucco textures, & custom styles',
      'Complete furniture & floor protective wrapping',
      'Meticulous post-job cleaning & waste disposal'
    ]
  },
  handyman: {
    id: 'handyman',
    displayTitle: 'HANDYMAN SERVICES',
    bookingTitle: 'HANDYMAN',
    imageUrl: '/src/assets/images/handyman_indian_worker_1782468700697.jpg',
    description: 'Precise heavy TV wall mounting, IKEA furniture assembly, blind fittings, and repairs.',
    longDescription: 'No job is too small. Our fully equipped handyman technicians arrive with specialized drills, anchor bolts, and spirit levels to secure heavy fixtures safely. We construct furniture with speed, hang premium curtains/blinds perfectly level, mount heavy artwork, and replace old door locks.',
    priceStart: 'AED 99',
    guarantee: 'Secure Mounting Guarantee',
    features: [
      'Heavy flat-screen TV bracket wall mounting',
      'Detailed IKEA & custom home furniture assembly',
      'Premium curtains, rods & Venetian blinds install',
      'Wall shelving, mirrors, & heavy artwork hanging',
      'Door locks, handles & hydraulic hinges replacement',
      'Same-day express service appointments'
    ]
  },
  renovation: {
    id: 'renovation',
    displayTitle: 'LUXURY RENOVATIONS',
    bookingTitle: 'RENOVATION',
    imageUrl: '/src/assets/images/renovation_work_service_1781963082831.jpg',
    description: 'Bespoke high-end kitchen, bathroom, and complete residential property structural upgrades.',
    longDescription: 'Transform your property with our premium renovation division. We coordinate modern design consulting, custom vanity carpentry, luxury marble tiling, wooden floor installations, premium sanitaryware integrations, and complete spatial layout upgrades. Led by dedicated, professional project managers.',
    priceStart: 'Custom Quote',
    guarantee: 'Dedicated Project Manager',
    features: [
      'Bespoke kitchen counter & cabinet modeling',
      'Luxury bathroom floor & marble vanity tiling',
      'Italian design bathroom sanitaries & glass enclosures',
      'Engineered wood and porcelain tile flooring',
      'False ceilings, modern gypsum coving & light design',
      'End-to-end execution with full regulatory permits'
    ]
  }
};

export default function ServiceDetailsModal({
  isOpen,
  onClose,
  serviceId,
  onBookNow
}: ServiceDetailsModalProps) {
  if (!isOpen || !serviceId) return null;

  const service = SERVICE_DETAILS[serviceId];
  if (!service) return null;

  // Phone and WhatsApp URLs
  const phoneNumber = '+971527804738';
  const whatsappNumber = '971527804738';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    `Hi Fixio, I am interested in inquiring about your ${service.displayTitle}. Please provide more details.`
  )}`;

  const handleBookClick = () => {
    onBookNow(service.bookingTitle);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          className="relative w-full max-w-2xl overflow-hidden border border-slate-200 rounded-2xl bg-white shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header image cover */}
          <div className="relative aspect-[16/7] w-full overflow-hidden shrink-0 bg-slate-100">
            <img
              src={service.imageUrl}
              alt={service.displayTitle}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Elegant overlay to enhance readability on title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            {/* Header badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-[#0C1E35] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider border border-slate-700">
                {service.priceStart === 'Custom Quote' ? 'Renovations' : `Starts at ${service.priceStart}`}
              </span>
              <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Certified Techs
              </span>
            </div>

            {/* Title */}
            <div className="absolute bottom-5 left-6 right-6">
              <span className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.2em] block mb-1">
                FIXIO PREMIUM SERVICES
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight uppercase font-sans">
                {service.displayTitle}
              </h3>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute p-1.5 transition-all bg-black/60 rounded-full top-4 right-4 text-white hover:bg-black/90 active:scale-95 border border-white/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable */}
          <div className="p-6 overflow-y-auto space-y-5 text-left font-sans flex-grow">
            <div>
              <p className="text-sm font-bold text-slate-800 leading-relaxed">
                {service.description}
              </p>
              <p className="text-xs text-slate-650 mt-2 leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            {/* Technical Highlights / What's Covered */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0C1E35] flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                <Award className="w-4 h-4 text-amber-500" /> WHAT IS COVERED:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs text-slate-750 font-medium font-sans">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Assurance Details info bar */}
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                <div>
                  <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-bold">REACTION TIME</span>
                  <span className="text-xs font-extrabold text-[#0C1E35]">Within 30 Mins</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 border-l border-slate-200 pl-4">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                <div>
                  <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-bold">WARRANTY</span>
                  <span className="text-xs font-extrabold text-[#0C1E35]">{service.guarantee}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Footer CTAs */}
          <div className="p-4 bg-slate-50 border-t border-slate-150 shrink-0 flex flex-col sm:flex-row gap-2.5 items-center justify-between">
            {/* Price section on left */}
            <div className="text-center sm:text-left">
              <span className="block text-[9px] text-slate-500 uppercase tracking-wider font-bold">ESTIMATED PRICE</span>
              <span className="text-[17px] font-black text-[#0C1E35] leading-none mt-0.5 block font-sans">
                {service.priceStart}
              </span>
            </div>

            {/* Actions group on right */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto">
              {/* WhatsApp direct support */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 px-4 py-3 bg-[#25D366] hover:bg-[#1bbd57] text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 active:scale-97 select-none w-full sm:w-auto text-center"
              >
                <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                WhatsApp Us
              </a>

              {/* Direct phone call */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-1.5 px-4 py-3 bg-[#0C1E35] hover:bg-[#142d4c] text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 active:scale-97 select-none w-full sm:w-auto text-center"
              >
                <Phone className="w-4 h-4 fill-current text-white" />
                Call Now
              </a>

              {/* Booking Trigger */}
              <button
                onClick={handleBookClick}
                className="flex items-center justify-center px-5 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 active:scale-97 select-none w-full sm:w-auto cursor-pointer"
              >
                Book This Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

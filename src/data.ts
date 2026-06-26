import { ServiceItem, AmcPlan, ProjectItem, TestimonialItem } from './types';

export const DUBAI_AREAS = [
  'Dubai Marina',
  'Jumeirah',
  'Arabian Ranches',
  'Downtown Dubai',
  'Palm Jumeirah',
  'Jumeirah Lakes Towers (JLT)',
  'Business Bay',
  'Dubai Hills Estate',
  'Mirdif',
  'Al Barsha',
  'Jumeirah Beach Residence (JBR)',
  'Jumeirah Golf Estates',
  'The Greens & Views',
  'Motor City',
  'Damac Hills',
  'Al Furjan',
  'Dubai Sports City',
  'Town Square',
  'Silicon Oasis',
  'Other / All Areas in Dubai'
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ac',
    title: 'AC SERVICES',
    description: 'Installation, repair & maintenance of all types of AC units.',
    longDescription: 'Ensure high performance, energy-efficiency, and clean breathing air for your household. Our certified specialists perform full HVAC system cleaning, compressor repairs, thermostat replacements, duct sanitization, and eco-friendly gas recharges, keeping your indoor air perfectly cooled all year round.',
    iconName: 'Wind',
    benefits: ['Compressor & Fan Repair', 'Duct Sanitization & Deep Cleaning', 'Refrigerant Gas Leak Detection', 'Thermostat Calibration']
  },
  {
    id: 'plumbing',
    title: 'PLUMBING',
    description: 'Leak repair, pipe fitting, drain cleaning, water heater & more.',
    longDescription: 'From high-pressure pipe repairs and unblocking deep structural drains to installing sleek bathroom fixtures and water filtration blocks, our professional plumbers deliver robust solutions that protect your property of major leaks and emergency overflows.',
    iconName: 'Droplet',
    benefits: ['Emergency Leak Spotting & Fixes', 'Blocked Drain Hydro-jetting', 'Water Heater Replacement', 'Fixture & Pump Installation']
  },
  {
    id: 'electrical',
    title: 'ELECTRICAL',
    description: 'Wiring, re-wiring, circuit fixing, light installation & all electrical work.',
    longDescription: 'Safe, certified solutions to keep your electrical systems functioning without trips or fire hazards. We manage full home wiring retrofits, DB board changes, custom LED lighting installations, smart home smart-switch fittings, and deep electrical inspections with DEWA compliance checks.',
    iconName: 'Zap',
    benefits: ['Distribution Board Upgrades', 'Short Circuit Diagnosis', 'High-end Chandelier Fittings', 'Smart Switches & Outlets']
  },
  {
    id: 'painting',
    title: 'PAINTING',
    description: 'Interior & exterior painting with premium quality finishes.',
    longDescription: 'Experience pristine surfaces with dust-free sanding, premium Jotun stucco preparation, and double-coat deluxe paint colors of your choosing. Our painters mask everything beautifully, covering nail holes and cracks, to leave your walls with clean edges and flawless transitions.',
    iconName: 'Paintbrush',
    benefits: ['Wall Scratch & Crack Filling', 'Premium Zero-Odor Jotun Paints', 'Detailed Accent Wall Design', 'Clean Post-Job Masking Cleanup']
  },
  {
    id: 'handyman',
    title: 'HANDYMAN',
    description: 'General repairs, furniture fixing, TV mounting & more.',
    longDescription: 'Never worry about tedious household tasks again. Whether mounting your new 85-inch flat screen, installing wall shelves, assembling complex designer Italian furniture, or adjusting squeaky cabinets, our neat handyman has the exact tools to complete tasks promptly.',
    iconName: 'Wrench',
    benefits: ['Heavy TV Wall Mounting', 'Designer Wardrobe & Bed Assembly', 'Curtain & Blinds Installation', 'Door Hinge & Cabinet Repairs']
  },
  {
    id: 'renovation',
    title: 'RENOVATION',
    description: 'Complete home, bathroom, kitchen & villa renovations.',
    longDescription: 'Transform your villa or apartment into your absolute dream space. We provide space-planning, professional tiling, demolition, dry-wall custom construction, deluxe marble installation, bespoke cabinetry, and complete architectural makeovers that skyrocket your property valuation.',
    iconName: 'Home',
    benefits: ['Luxury Bathrooms & Tile Lying', 'Modern High-contrast Kitchen Blocks', 'Flooring: Wooden Parquet & Marble', 'Full Villa/Apartment Demolition & Rebuild']
  }
];

export const AMC_PLANS: AmcPlan[] = [
  {
    id: 'bronze',
    name: 'BRONZE PLAN',
    price: 999,
    period: '/Year',
    popular: false,
    color: 'from-amber-700/20 to-amber-900/10 border-amber-500/30',
    benefits: [
      '1 AC Complete Service (Split Units)',
      '1 Plumbing Inspection & Emergency Fix',
      '1 Electrical Safety Inspection',
      'Standard Support (React within 4 Hours)'
    ],
    features: [
      'Preventative system cleaning',
      'Water pressure checking',
      'Standard switch & DB board test',
      'Priority scheduling'
    ]
  },
  {
    id: 'silver',
    name: 'SILVER PLAN',
    price: 1999,
    period: '/Year',
    popular: true,
    color: 'from-slate-400/20 to-slate-600/10 border-slate-400/50 shadow-lg shadow-white/5',
    benefits: [
      '2 AC Complete Services (Split Units)',
      '2 Plumbing Inspections & Checks',
      '2 Electrical Safety Inspections',
      'Free Minor Repairs & Fittings Included',
      'Priority Support (React within 2 Hours)'
    ],
    features: [
      'AC coil wash & pressure check',
      'Drain tray & tube flushing',
      'Full water heater inspection',
      'Free materials under AED 100/incident'
    ]
  },
  {
    id: 'gold',
    name: 'GOLD PLAN',
    price: 2999,
    period: '/Year',
    popular: false,
    color: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/50',
    benefits: [
      '4 AC Complete Services (Yearly Cycles)',
      '4 Plumbing Checks & Drain Flushing',
      '4 Electrical Diagnostics & Inspections',
      'Free Unlimited Minor Repairs',
      'Priority Support (React within 1 Hour)',
      '24/7 Dedicated Emergency Support'
    ],
    features: [
      'Full HVAC blower deep cleaning',
      'Pump check & tank status diagnostics',
      'Free minor replacement breakers',
      'Guaranteed emergency technician'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'AC Compressor Replacement & Multi-Split Duct Sanitization',
    category: 'ac',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
    location: 'Dubai Marina Penthouse'
  },
  {
    id: 'proj-2',
    title: 'Luxury Bathroom Marble Tiling & Smart Rainfall Shower Fitting',
    category: 'renovation',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    location: 'Palm Jumeirah Villa'
  },
  {
    id: 'proj-3',
    title: 'Full Apartment Jotun Silk Stucco & Contrast Accent Painting',
    category: 'painting',
    // We can also reference our painting_work image
    imageUrl: '/src/assets/images/painting_work_1781960268492.jpg',
    location: 'Downtown Dubai Apartment'
  },
  {
    id: 'proj-4',
    title: 'Custom Modern Island Kitchen Demolition & Quartz Fitting',
    category: 'renovation',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop',
    location: 'Arabian Ranches'
  },
  {
    id: 'proj-5',
    title: 'Complete Smart Dimmer & Recessed High-End Chandelier Electrical Fit-out',
    category: 'electrical',
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b354bc25edac?q=80&w=800&auto=format&fit=crop',
    location: 'Jumeirah Golf Estates'
  },
  {
    id: 'proj-6',
    title: 'Structural Copper Drain Installation & Underground High-Pressure Leak Stop',
    category: 'plumbing',
    // We can reference our plumbing_work image
    imageUrl: '/src/assets/images/plumbing_work_1781960251877.jpg',
    location: 'Dubai Hills Villa'
  },
  {
    id: 'proj-7',
    title: 'Complete Multi-Zone AC Thermostat Smart Home Setup',
    category: 'ac',
    imageUrl: '/src/assets/images/ac_work_1781960285432.jpg',
    location: 'Dubai Hills Estate'
  },
  {
    id: 'proj-8',
    title: 'High-End Curved TV Art-Panel Mounting & Floating Shelf Fitting',
    category: 'handyman',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    location: 'Jumeirah Lakes Towers'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Ahmed R.',
    role: 'Homeowner',
    location: 'Dubai Marina',
    rating: 5,
    comment: 'Excellent service! Technician was punctual, professional and fixed my AC perfectly. Highly recommended FIXIO!',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 't-2',
    name: 'Sarah K.',
    role: 'Villa Owner',
    location: 'Arabian Ranches',
    rating: 5,
    comment: 'Very reliable team. They renovated our kitchen beautifully. Everything was on time and within budget.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 't-3',
    name: 'Imron M.',
    role: 'Property Manager',
    location: 'Jumeirah Park',
    rating: 5,
    comment: 'We are using their AMC for our villa. Very convenient and their response is super fast.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 't-4',
    name: 'Priya S.',
    role: 'Apartment Owner',
    location: 'Downtown Dubai',
    rating: 5,
    comment: 'Best maintenance company in Dubai. Transparent pricing and quality work.',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop'
  }
];

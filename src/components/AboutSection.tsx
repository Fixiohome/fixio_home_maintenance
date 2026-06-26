import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

interface AboutSectionProps {
  onSelectService: (srvTitle: string) => void;
}

export default function AboutSection({ onSelectService }: AboutSectionProps) {
  
  const handleBookNow = () => {
    onSelectService('AC SERVICES');
    const formCard = document.getElementById('booking-card-wrapper');
    if (formCard) {
      formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const values = [
    { title: 'Skilled & Verified Technicians' },
    { title: 'Quality Workmanship' },
    { title: 'On-Time Service' },
    { title: 'Transparent Pricing' },
    { title: '90-Day Service Warranty' }
  ];

  return (
    <section id="about" className="py-24 bg-white border-b border-slate-100 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Modern Image Collage replica */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            
            {/* Left large column plumber */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-slate-100 shadow-lg"
            >
              <img 
                src="/images/plumbing_indian_worker_1782468717739.jpg" 
                alt="Fixio high-quality plumbing sink piping repair" 
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
              {/* Overlaid 100% Satisfaction Guaranteed badge matches photo EXACTLY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E35]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#031124] text-white flex flex-col items-center justify-center text-center shadow-2xl select-none">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EAB308] text-[#0C1E35] mb-2 font-bold text-lg">
                  ★
                </div>
                <h4 className="text-[17px] font-black font-sans uppercase tracking-wider text-white">100%</h4>
                <p className="text-[11px] font-bold text-slate-200 mt-0.5 uppercase tracking-wider">Satisfaction Guaranteed</p>
              </div>
            </motion.div>

            {/* Right column containing top AC work and bottom Painting work images */}
            <div className="flex flex-col gap-4 justify-between h-full">
              
              {/* Right Top split-AC electronic board work */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl overflow-hidden aspect-[4/3] border border-slate-100 shadow-sm"
              >
                <img 
                  src="/images/ac_indian_worker_1782468674434.jpg" 
                  alt="Fixio certified split AC diagnostics" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Right Bottom painter rolling modern cream paint */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl overflow-hidden aspect-[4/3] border border-slate-100 shadow-sm"
              >
                <img 
                  src="/images/painting_work_1781960268492.jpg" 
                  alt="Fixio deluxe wall painting roll out" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

            </div>

          </div>

          {/* Right Side: Copy Content */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center pl-0 lg:pl-4">
            <span className="text-[11px] font-black tracking-[0.25em] text-[#EAB308] uppercase self-start">
              ABOUT FIXIO
            </span>
            <h2 className="text-[34px] sm:text-[40px] font-black font-sans text-[#0C1E35] tracking-tight leading-tight mt-2.5">
              Your Trusted Partner in<br />Home Maintenance
            </h2>
            
            <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed font-sans font-medium mt-5">
              At <strong className="text-[#0C1E35] font-extrabold">FIXIO</strong>, we believe in delivering more than just services—we deliver peace of mind. With a team of skilled, certified professionals and a prompt response, we ensure your home or business is always in the best hands.
            </p>

            {/* Official Partner Alert/Badge */}
            <div className="mt-5 p-4 rounded-xl border border-amber-100 bg-amber-50/40 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EAB308] animate-pulse shrink-0" />
              <div>
                <span className="block text-[10px] font-black text-[#DFAD2E] tracking-widest uppercase">Official Partner Company</span>
                <span className="text-xs font-extrabold text-[#0C1E35] block mt-0.5">RTS Riyaz Ahmad Technical Services LLC</span>
              </div>
            </div>

            {/* Checklist of core tenets */}
            <div className="mt-6 space-y-3.5">
              {values.map((val, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EAB308]/15 text-[#EAB308] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-bold text-[#0C1E35]">{val.title}</span>
                </div>
              ))}
            </div>

            {/* Action button */}
            <div className="mt-8">
              <button
                onClick={handleBookNow}
                className="py-4 px-7 text-xs font-black uppercase tracking-wider text-white rounded-md bg-[#DFAD2E] hover:bg-[#d9a307] transition hover:scale-102 flex items-center gap-2 cursor-pointer shadow-md shadow-yellow-500/10"
              >
                LEARN MORE ABOUT US <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

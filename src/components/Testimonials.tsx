import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const formattedWhatsAppUrl = 'https://api.whatsapp.com/send?phone=971527804738&text=Hi%20Fixio%20Home%2520Maintenance%2c%20I%20would%20like%20to%20inquire%20about%20your%20services%2e';

  return (
    <section className="py-20 bg-[#031124] relative overflow-hidden select-none">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 z-10 relative">
        
        {/* Section Heading matches EXACTLY */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-black tracking-[0.25em] text-[#EAB308] uppercase">
            Need Maintenance? CLIENTS SAY
          </span>
          <h2 className="text-[34px] sm:text-[40px] font-black font-sans text-white tracking-tight mt-2.5">
            We're Just One Call Away Across Dubai
          </h2>
          <div className="w-12 h-1 bg-[#EAB308] mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic Grid: Left Tech Image, Right Testimonial card stack */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Technician Picture replica */}
          <div className="lg:col-span-3 hidden lg:block h-full min-h-[440px] relative select-none">
            <img
              src="/images/testimonial_indian_technician_1782468661323.jpg"
              alt="Fixio smiling professional Indian technician"
              className="absolute bottom-0 left-0 w-full h-[120%] object-cover object-bottom rounded-t-2xl select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right testimonial content */}
          <div className="lg:col-span-9">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
              {TESTIMONIALS.map((tes, index) => (
                <motion.div
                  key={tes.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="bg-white rounded-xl p-5 shadow-lg flex flex-col justify-between hover:-translate-y-1 transition duration-300 relative text-left"
                >
                  <div>
                    {/* Stars bar */}
                    <div className="flex items-center gap-0.5 mb-3.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#DFAD2E] text-[#DFAD2E]" />
                      ))}
                    </div>

                    {/* Comment text */}
                    <p className="text-[12px] text-slate-600 font-medium leading-relaxed font-sans mt-1">
                      "{tes.comment}"
                    </p>
                  </div>

                  {/* Profile section at local card bottom */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2.5">
                    <img
                      src={tes.avatarUrl}
                      alt={tes.name}
                      className="w-9 h-9 rounded-full object-cover bg-slate-100 shrink-0 select-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="leading-none">
                      <h4 className="text-[12px] font-extrabold text-[#0C1E35] font-sans">
                        {tes.name}
                      </h4>
                      <p className="text-[9px] text-[#EAB308] font-bold mt-1 tracking-wider uppercase">
                        {tes.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Carousel dots indicator exactly as shown */}
            <div className="mt-8 flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#EAB308]" />
              <span className="w-2 h-2 rounded-full bg-slate-600 opacity-40" />
              <span className="w-2 h-2 rounded-full bg-slate-600 opacity-40" />
            </div>
          </div>

        </div>

      </div>

      {/* Floating WhatsApp Action in test page margin matching image exactly */}
      <a
        href={formattedWhatsAppUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#12b057] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 md:flex"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.7 1.45 5.4 0 9.8-4.4 9.8-9.8s-4.4-9.8-9.8-9.8-9.8 4.4-9.8 9.8c0 2 .5 3.9 1.5 5.6l-.3.9-.9 3.3 3.4-.9 1-.5zm10.7-3.6c-.3-.2-1.7-1-2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L8 7.3c-.3-.8-.7-.8-.9-.8H6.5c-.3 0-.7.1-1.1.5C5 7.4 4 8.5 4 10.6s1.5 4.3 1.7 4.6c.2.3 3 4.6 7.3 6.5 1 .4 1.8.7 2.4.9 1 .3 2 .3 2.7.2.8-.1 2.5-1 2.9-2 .4-1 .4-1.9.3-2.1-.1-.1-.4-.2-.7-.4z"/>
        </svg>
      </a>
    </section>
  );
}

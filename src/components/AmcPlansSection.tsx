import { motion } from 'motion/react';
import { Check, Flame } from 'lucide-react';
import { AMC_PLANS } from '../data';

interface AmcPlansSectionProps {
  onSelectPlan: (planName: string) => void;
}

export default function AmcPlansSection({ onSelectPlan }: AmcPlansSectionProps) {
  
  const handleSelectPlan = (name: string) => {
    onSelectPlan(name);
    const formCard = document.getElementById('booking-card-wrapper');
    if (formCard) {
      formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="amc" className="py-24 bg-slate-50 border-b border-slate-100 relative select-none">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-black tracking-[0.25em] text-[#EAB308] uppercase">
            AMC PLANS
          </span>
          <h2 className="text-[34px] sm:text-[40px] font-black font-sans text-[#0C1E35] tracking-tight mt-2.5">
            Annual Maintenance Contracts
          </h2>
          <div className="w-12 h-1 bg-[#EAB308] mx-auto mt-5 rounded-full" />
        </div>

        {/* 4-Column Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
          
          {/* Bronze, Silver (Popular), Gold Plans */}
          {AMC_PLANS.map((plan, index) => {
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`flex flex-col justify-between border rounded-2xl p-7 relative transition-all duration-300 ${
                  plan.popular 
                    ? 'border-[#EAB308] bg-[#031124] text-white shadow-2xl scale-103 z-10' 
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                {/* Popular Diagonal/Ribbon badge precisely styled */}
                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-[#EAB308] text-[#0C1E35] text-[9px] font-black tracking-widest px-3 py-1 rounded-full uppercase flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-current" />
                    Popular
                  </span>
                )}

                <div>
                  {/* Name */}
                  <span className={`text-[12px] font-black tracking-widest uppercase block ${
                    plan.popular ? 'text-[#EAB308]' : 'text-slate-400'
                  }`}>
                    {plan.name}
                  </span>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-1 font-sans">
                    <span className={`text-[11px] font-black ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>AED</span>
                    <span className={`text-[40px] font-black leading-none ${plan.popular ? 'text-white' : 'text-[#0C1E35]'}`}>{plan.price}</span>
                    <span className={`text-[11px] font-bold ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>{plan.period}</span>
                  </div>

                  {/* Divider */}
                  <div className={`my-6 border-t ${plan.popular ? 'border-slate-800' : 'border-slate-100'}`} />

                  {/* Core Benefits */}
                  <ul className="space-y-4">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-[#EAB308]' : 'text-slate-400'}`} />
                        <span className={plan.popular ? 'text-slate-200 font-medium' : 'text-slate-600 font-medium'}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit action button */}
                <div className="mt-8">
                  <button
                    onClick={() => handleSelectPlan(plan.name)}
                    className={`w-full py-3.5 rounded-lg text-center text-xs font-black uppercase tracking-widest transition cursor-pointer ${
                      plan.popular
                        ? 'bg-[#EAB308] hover:bg-[#d9a307] text-[#0C1E35] shadow-lg shadow-yellow-500/10'
                        : 'border border-slate-200 text-slate-800 bg-white hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    CHOOSE PLAN
                  </button>
                </div>
              </motion.div>
            );
          })}

          {/* 4th Column: Custom Contract matches template exactly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-col justify-between border border-slate-200 rounded-2xl p-7 bg-[#031124] text-white shadow-xl hover:border-slate-700 transition duration-300"
          >
            <div>
              <span className="text-[12px] font-black tracking-widest uppercase block text-[#EAB308]">
                CUSTOM PLAN
              </span>

              <h4 className="text-[20px] font-black font-sans uppercase tracking-tight mt-3 leading-snug">
                For Villas & Commercial Properties
              </h4>

              <div className="my-6 border-t border-slate-800" />

              <p className="text-[13px] text-slate-300 font-sans leading-relaxed">
                Get a customized plan as per your property requirements. We supply tailor-made checklists, responsive emergency callouts and robust preventative actions.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={() => handleSelectPlan('CUSTOM PLAN')}
                className="w-full py-4 rounded-lg bg-[#EAB308] hover:bg-[#d9a307] text-[#0C1E35] font-black uppercase text-xs tracking-wider transition cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-lg shadow-yellow-500/10"
              >
                REQUEST A QUOTE <span>→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

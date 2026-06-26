import { motion } from 'motion/react';
import { Users, ClipboardList, Building, Award } from 'lucide-react';

export default function StatsRow() {
  const stats = [
    {
      icon: Users,
      value: '2500+',
      label: 'Happy Clients'
    },
    {
      icon: ClipboardList,
      value: '5000+',
      label: 'Projects Completed'
    },
    {
      icon: Building,
      value: '150+',
      label: 'Properties Under AMC'
    },
    {
      icon: Award,
      value: '10+',
      label: 'Years of Experience'
    }
  ];

  return (
    <section className="bg-[#0C1E35] py-14 border-t border-b border-slate-800 relative z-10 select-none">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-center divide-x-0 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col items-center justify-center text-center p-3 md:px-6"
              >
                {/* Gold Outline Icon wrapper */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#EAB308]/40 bg-[#EAB308]/10 text-[#EAB308] hover:scale-110 transition duration-300">
                  <IconComponent className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Number in Gold */}
                <span className="text-3xl sm:text-4xl font-extrabold font-sans text-[#EAB308] tracking-tight mt-3">
                  {stat.value}
                </span>

                {/* Label in White */}
                <span className="text-xs sm:text-[13px] font-bold tracking-wide text-white mt-1 uppercase font-sans">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

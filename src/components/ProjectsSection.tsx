import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowRight, Eye, X, CheckSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectService: (srvTitle: string) => void;
}

export default function ProjectsSection({ onSelectService }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ac' | 'plumbing' | 'electrical' | 'renovation' | 'painting'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { label: 'ALL', id: 'all' },
    { label: 'AC SERVICES', id: 'ac' },
    { label: 'PLUMBING', id: 'plumbing' },
    { label: 'ELECTRICAL', id: 'electrical' },
    { label: 'RENOVATION', id: 'renovation' },
    { label: 'PAINTING', id: 'painting' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const handleBookSimilar = (proj: ProjectItem) => {
    let serviceMapping = 'AC SERVICES';
    if (proj.category === 'plumbing') serviceMapping = 'PLUMBING';
    else if (proj.category === 'electrical') serviceMapping = 'ELECTRICAL';
    else if (proj.category === 'painting') serviceMapping = 'PAINTING';
    else if (proj.category === 'handyman') serviceMapping = 'HANDYMAN';
    else if (proj.category === 'renovation') serviceMapping = 'RENOVATION';

    onSelectService(serviceMapping);
    setSelectedProject(null);

    const formCard = document.getElementById('booking-card-wrapper');
    if (formCard) {
      formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleViewAllClick = () => {
    const formCard = document.getElementById('booking-card-wrapper');
    if (formCard) {
      formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="projects" className="py-24 bg-white border-b border-slate-100 relative select-none">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 z-10 relative">
        
        {/* Section Heading matches EXACTLY */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] font-black tracking-[0.25em] text-[#EAB308] uppercase">
            OUR PROJECTS
          </span>
          <h2 className="text-[34px] sm:text-[40px] font-black font-sans text-[#0C1E35] tracking-tight mt-2.5">
            Some of Our Recent Work
          </h2>
          <div className="w-12 h-1 bg-[#EAB308] mx-auto mt-5 rounded-full" />
        </div>

        {/* Filter Tabs matches image EXACTLY */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as any)}
              className={`px-5 py-3.5 rounded-md text-[11px] font-black uppercase tracking-wider transition cursor-pointer border ${
                activeFilter === f.id
                  ? 'bg-[#EAB308] border-[#EAB308] text-white shadow-md'
                  : 'bg-[#F1F5F9] border-transparent text-[#0C1E35] hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Carousel-style block */}
        <div className="relative">
          {/* Arrow Overlays exactly like in the picture */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 hidden md:block">
            <button className="w-11 h-11 rounded-full bg-[#031124] hover:bg-[#EAB308] text-white hover:text-[#0C1E35] flex items-center justify-center transition shadow-lg">
              <ChevronLeft className="w-5 h-5 line-clamp-1" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 hidden md:block">
            <button className="w-11 h-11 rounded-full bg-[#031124] hover:bg-[#EAB308] text-white hover:text-[#0C1E35] flex items-center justify-center transition shadow-lg">
              <ChevronRight className="w-5 h-5 line-clamp-1" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-xl overflow-hidden relative aspect-[4/3] flex flex-col justify-end cursor-pointer shadow-sm hover:shadow-md transition"
                  onClick={() => setSelectedProject(proj)}
                >
                  {/* Media Image */}
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Deep overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E35]/90 via-[#0C1E35]/30 to-transparent" />

                  {/* Card Info */}
                  <div className="p-4 z-10 text-left">
                    <span className="text-[9px] font-black tracking-widest text-[#EAB308] uppercase">
                      {proj.category}
                    </span>

                    <h3 className="text-xs font-black font-sans text-white uppercase tracking-tight mt-1 truncate">
                      {proj.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-[10px] text-slate-300 mt-1">
                      <MapPin className="w-3 h-3 text-slate-300 shrink-0" />
                      <span className="truncate">{proj.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* View All Projects button at the very bottom matches image exactly */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleViewAllClick}
            className="py-4 px-8 text-xs font-black uppercase tracking-wider text-white rounded-md bg-[#DFAD2E] hover:bg-[#d9a307] transition hover:scale-102 flex items-center gap-2 cursor-pointer shadow-lg shadow-yellow-500/10"
          >
            VIEW ALL PROJECTS <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>

      {/* Modern Pop-up Detail zoom modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl overflow-hidden border border-slate-200 rounded-2xl bg-white shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute p-2.5 transition rounded-full top-4 right-4 text-slate-400 hover:text-slate-800 hover:bg-slate-100 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16:9] w-full relative overflow-hidden">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                
                <span className="absolute bottom-4 left-6 bg-[#EAB308] text-[#0C1E35] text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
                  {selectedProject.category}
                </span>
              </div>

              <div className="p-6 text-left">
                <h3 className="text-lg sm:text-xl font-bold font-sans text-[#0C1E35] uppercase tracking-tight">
                  {selectedProject.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                  <MapPin className="w-4 h-4 text-[#EAB308] shrink-0" />
                  <span>{selectedProject.location} • Dubai High-Quality Standards</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed font-sans">
                  Prudently delivered project compliant with modern standards in Dubai. Safe, clean, zero hassle.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleBookSimilar(selectedProject)}
                    className="flex-1 py-4 text-xs font-bold uppercase tracking-wider text-white rounded-md bg-[#EAB308] hover:bg-[#d9a307] transition cursor-pointer text-center flex items-center justify-center gap-2 shadow"
                  >
                    <CheckSquare className="w-4 h-4" /> Request Similar Service
                  </button>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="py-3.5 px-6 rounded-md border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition cursor-pointer"
                  >
                    Close Portfolio View
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

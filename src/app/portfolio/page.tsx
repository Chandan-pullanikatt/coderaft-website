"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Restaurant", "Education", "Automotive"];

const projects = [
  {
    id: "network-masters",
    title: "Network Masters Hub",
    category: "Education",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    shortDesc: "A complete Learning Management System scaling tech education.",
    fullDesc: "Network Masters needed a platform to onboard and train hundreds of students efficiently. We built a robust LMS featuring video streaming, assignments, instructor portals, and automated certification. The system is engineered to handle massive parallel connections without dropping performance.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Mux Video"],
    results: ["500+ Active Students", "Zero Downtime", "Automated Workflows"],
  },
  {
    id: "tabletreats",
    title: "TableTreats QR",
    category: "Restaurant",
    image: "https://images.unsplash.com/photo-1623356302008-01124df55d9d?q=80&w=1760&auto=format&fit=crop",
    shortDesc: "Instant table-side ordering system for modern dining.",
    fullDesc: "Eliminating wait times for diners. Diners scan a QR code on their table to browse a rich, interactive menu and place orders directly to the kitchen. TableTreats speeds up table turnover rates by 30% while giving restaurants deep analytics on popular dishes.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Socket.io"],
    results: ["30% Faster Turnover", "Reduced Waiter Errors", "Real-time Metrics"],
  },
  {
    id: "tetla-motors",
    title: "Tetla Motors",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop",
    shortDesc: "Premium web showcase & OS interface for next-gen EVs.",
    fullDesc: "Tetla Motors required a digital presence as striking as their vehicles. We crafted a highly immersive web experience with 3D model rendering and smooth scrolling. Furthermore, we designed the core UI/UX for their in-car dashboard system, prioritizing driver safety and dark-mode elegance.",
    tech: ["Three.js", "Framer Motion", "Next.js", "Figma"],
    results: ["Award-winning UI", "Immersive 3D Exp", "Seamless OS Integrations"],
  }
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <div className="flex flex-col gap-24 pb-32 overflow-hidden selection:bg-[#00D4FF] selection:text-[#0A2540]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-24 md:mt-32 text-center relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00D4FF] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#00D4FF]/40 bg-[#00D4FF]/10 backdrop-blur-xl mb-8 text-[#00D4FF] text-sm md:text-base font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(0,212,255,0.2)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-100"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D4FF]"></span>
          </span>
          Our Recent Craft
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tighter mb-8 leading-[1.1] text-white"
        >
          Proof of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] drop-shadow-[0_0_30px_rgba(0,212,255,0.4)]">Excellence</span>
        </motion.h1>
      </section>

      {/* Filter Bar */}
      <section className="container mx-auto px-4 relative z-10 mb-8 flex flex-wrap justify-center gap-4">
         {categories.map((cat) => (
            <button
               key={cat}
               onClick={() => setFilter(cat)}
               className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase transition-all duration-300 border backdrop-blur-md ${
                 filter === cat 
                 ? "bg-[#00D4FF]/20 border-[#00D4FF] text-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.4)]" 
                 : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10"
               }`}
            >
               {cat}
            </button>
         ))}
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 max-w-screen-xl relative z-10 min-h-[500px]">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layoutId={`card-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  boxShadow: "0 40px 80px -10px rgba(0, 212, 255, 0.4)", 
                  borderColor: "rgba(0, 212, 255, 0.6)" 
                }}
                onClick={() => setSelectedId(project.id)}
                className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden cursor-pointer group flex flex-col"
              >
                <div className="w-full h-64 overflow-hidden relative border-b border-white/10">
                  <div className="absolute inset-0 bg-[#0A2540]/40 group-hover:bg-transparent transition-colors z-10"></div>
                  <motion.img 
                    layoutId={`img-${project.id}`}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-4 inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70 font-semibold tracking-wider font-heading uppercase">
                    {project.category}
                  </div>
                  <motion.h3 layoutId={`title-${project.id}`} className="font-heading text-2xl font-bold mb-3 text-white group-hover:text-[#00D4FF] transition-colors">
                    {project.title}
                  </motion.h3>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base flex-grow">
                    {project.shortDesc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-[#0A2540]/90 backdrop-blur-2xl z-40 pointer-events-auto"
            />
            <div className="fixed inset-0 grid place-items-center z-50 pointer-events-none p-4 md:p-10">
                <motion.div 
                  layoutId={`card-${selectedProject.id}`}
                  className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-[#00D4FF]/30 bg-black/80 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,212,255,0.2)] pointer-events-auto flex flex-col md:flex-row hide-scrollbar"
                >
                  {/* Close button */}
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-black/50 border border-white/10 text-white hover:bg-[#00D4FF] hover:border-[#00D4FF] hover:text-[#0A2540] transition-colors z-50"
                  >
                     <X className="w-5 h-5" />
                  </button>

                  <div className="w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden relative">
                     <motion.img 
                        layoutId={`img-${selectedProject.id}`}
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover" 
                      />
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 hidden md:block"></div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent block md:hidden"></div>
                  </div>

                  <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                      <div className="mb-4 inline-block px-3 py-1 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 text-xs text-[#00D4FF] font-bold tracking-wider font-heading uppercase w-max">
                        {selectedProject.category}
                      </div>
                      <motion.h3 layoutId={`title-${selectedProject.id}`} className="font-heading text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
                        {selectedProject.title}
                      </motion.h3>
                      
                      <p className="text-white/80 leading-relaxed text-base md:text-lg mb-8">
                        {selectedProject.fullDesc}
                      </p>

                      <div className="space-y-8 mb-10">
                         <div>
                            <p className="flex items-center gap-2 text-sm text-white/50 font-bold uppercase tracking-widest mb-3">
                               <Code2 className="w-4 h-4 text-[#00D4FF]"/> Tech Stack
                            </p>
                            <div className="flex flex-wrap gap-2">
                               {selectedProject.tech.map(t => (
                                 <span key={t} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/90">
                                    {t}
                                 </span>
                               ))}
                            </div>
                         </div>
                         <div>
                            <p className="text-sm text-white/50 font-bold uppercase tracking-widest mb-3">Key Results</p>
                            <ul className="space-y-2">
                               {selectedProject.results.map((r, i) => (
                                 <li key={i} className="flex items-center gap-3 text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] shadow-[0_0_8px_rgba(0,212,255,1)]"></div>
                                    {r}
                                 </li>
                               ))}
                            </ul>
                         </div>
                      </div>

                      <button className="bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] text-[#0A2540] font-black h-14 px-8 text-lg rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,212,255,0.4)] w-full sm:w-max">
                         View Live Demo <ExternalLink className="w-5 h-5" />
                      </button>
                  </div>
                </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

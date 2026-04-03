"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Hexagon, Triangle, CircleDashed } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32 overflow-hidden selection:bg-[#00D4FF] selection:text-[#0A2540]">
      {/* Hero Section (Two-Column Layout) */}
      <section className="container mx-auto px-4 mt-16 md:mt-24 lg:mt-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-20">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#00D4FF]/40 bg-[#00D4FF]/10 backdrop-blur-xl mb-8 text-[#00D4FF] text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(0,212,255,0.2)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-100"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D4FF]"></span>
              </span>
              Digital Craftsmanship Engineered to Scale
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tighter mb-8 leading-[1.1] text-white"
            >
              Coderaft – Calicut's <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#00D4FF] to-[#06B6D4] drop-shadow-[0_0_30px_rgba(0,212,255,0.4)]">Premier Tech Consultancy</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed"
            >
              UI/UX • Web & Mobile Apps • QR Systems • POS • Attendance Solutions
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto"
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0,212,255,0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] text-[#0A2540] font-black h-16 md:h-14 px-10 text-lg rounded-full shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all flex items-center justify-center gap-2 relative overflow-hidden group w-full sm:w-auto"
              >
                <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                Get Free Consultation
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0,212,255,0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] text-[#0A2540] font-black h-16 md:h-14 px-10 text-lg rounded-full shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all flex items-center justify-center gap-2 relative overflow-hidden group w-full sm:w-auto"
              >
                <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                View Our Work
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Hero Visuals Collage */}
          <motion.div 
             initial={{ opacity: 0, x: 40 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.3 }}
             className="relative z-10 w-full h-[350px] sm:h-[450px] md:h-[600px] flex justify-center items-center lg:justify-end"
          >
             {/* Center Strong Glow Behind Image */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#00D4FF] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
             
             {/* Dashboard Center */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               className="absolute w-[80%] md:w-[85%] h-[250px] md:h-[400px] z-20"
             >
               <motion.div 
                 whileHover={{ y: -15, scale: 1.02, boxShadow: "0 40px 100px -10px rgba(0, 212, 255, 0.6)" }}
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
                 className="w-full h-full rounded-2xl md:rounded-3xl border border-white/20 bg-[#0A2540]/80 backdrop-blur-3xl shadow-2xl overflow-hidden cursor-pointer"
                 style={{ boxShadow: "0 25px 60px -10px rgba(0, 212, 255, 0.3)" }}
               >
                 <div className="h-10 md:h-12 bg-black/60 border-b border-white/10 flex items-center px-6 gap-3">
                   <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                   <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="w-full h-full relative">
                   <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Dashboard" className="w-full h-full object-cover opacity-90 mix-blend-screen" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent"></div>
                 </div>
               </motion.div>
             </motion.div>

             {/* TableTreats Mobile Left */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
               className="absolute left-[5%] md:left-0 lg:left-[-2%] top-[10%] md:top-[12%] w-[110px] md:w-[200px] h-[220px] md:h-[400px] z-30 rotate-[-12deg]"
             >
               <motion.div 
                 whileHover={{ y: -20, rotate: 0, scale: 1.05, boxShadow: "-30px 30px 80px rgba(0,212,255,0.5)", borderColor: "#00D4FF" }}
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
                 className="w-full h-full rounded-[1.2rem] md:rounded-[2.2rem] border-4 border-gray-800 bg-black shadow-2xl overflow-hidden cursor-pointer"
                 style={{ boxShadow: "-20px 20px 50px rgba(0,212,255,0.15)" }}
               >
                   <img src="https://images.unsplash.com/photo-1623356302008-01124df55d9d?q=80&w=1760&auto=format&fit=crop" alt="TableTreats QR" className="w-full h-full object-cover opacity-100" />
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 flex items-end p-4">
                      <p className="text-white text-[10px] md:text-sm font-bold shadow-sm border-b-2 border-[#00D4FF] pb-1">TableTreats QR</p>
                   </div>
               </motion.div>
             </motion.div>

             {/* Tetla Motors Right */}
             <motion.div 
               animate={{ y: [0, -8, 0] }}
               transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
               className="absolute right-[5%] md:right-0 bottom-[10%] md:bottom-[15%] w-[140px] md:w-[280px] h-[180px] md:h-[320px] z-30 rotate-[8deg]"
             >
               <motion.div 
                 whileHover={{ y: -20, rotate: 0, scale: 1.05, boxShadow: "30px 30px 80px rgba(0,212,255,0.5)", borderColor: "#00D4FF" }}
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
                 className="w-full h-full rounded-xl md:rounded-2xl border border-white/20 bg-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden p-3 md:p-5 flex flex-col justify-between cursor-pointer"
                 style={{ boxShadow: "20px 20px 50px rgba(0,212,255,0.15)" }}
               >
                  <div className="w-full h-[55%] md:h-[60%] rounded-lg overflow-hidden border border-white/10 relative">
                   <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop" alt="Tetla Motors EV" className="w-full h-full object-cover opacity-100" />
                  </div>
                  <div className="mt-2">
                    <p className="text-white text-[10px] md:text-sm font-bold truncate">Tetla Motors OS</p>
                    <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                       <div className="w-[70%] h-full bg-[#00D4FF]"></div>
                    </div>
                  </div>
               </motion.div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="container mx-auto px-4 py-8 border-y border-[#00D4FF]/20 bg-gradient-to-b from-[#00D4FF]/5 to-transparent relative">
        <p className="text-center text-sm text-[#00D4FF] font-bold mb-10 uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]">
          Trusted by Innovative Companies in Kerala
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-100">
          <motion.div 
            whileHover={{ scale: 1.1, color: "#00D4FF", textShadow: "0 0 20px rgba(0,212,255,0.8)", filter: "drop-shadow(0 0 10px rgba(0,212,255,0.8))" }} 
            className="text-white/60 hover:text-[#00D4FF] transition-all font-heading font-extrabold text-2xl md:text-3xl tracking-tighter cursor-pointer flex items-center gap-3"
          >
            <Hexagon className="w-8 h-8 md:w-10 md:h-10" />
            <span className="sr-only">Network Masters Hub</span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1, color: "#00D4FF", textShadow: "0 0 20px rgba(0,212,255,0.8)", filter: "drop-shadow(0 0 10px rgba(0,212,255,0.8))" }} 
            className="text-white/60 hover:text-[#00D4FF] transition-all font-heading font-extrabold text-2xl md:text-3xl tracking-tighter cursor-pointer flex items-center gap-3"
          >
            <CircleDashed className="w-8 h-8 md:w-10 md:h-10" />
            <span className="sr-only">TableTreats</span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1, color: "#00D4FF", textShadow: "0 0 20px rgba(0,212,255,0.8)", filter: "drop-shadow(0 0 10px rgba(0,212,255,0.8))" }} 
            className="text-white/60 hover:text-[#00D4FF] transition-all font-heading font-extrabold text-2xl md:text-3xl tracking-tighter flex items-center gap-3 cursor-pointer"
          >
            <Triangle className="w-8 h-8 md:w-10 md:h-10" />
            <span className="sr-only">Tetla Motors</span>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Coderaft */}
      <section className="container mx-auto px-4 max-w-screen-xl relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#00D4FF] opacity-[0.07] blur-[150px] rounded-full pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative z-10"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Why Choose Coderaft?</h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            We don't just build software. We craft intelligent, deeply-integrated, <span className="text-[#00D4FF] font-medium">conversion-focused digital systems</span> that give you an unfair advantage.
          </p>
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
        >
          {[
            { 
              title: "Conversion-Focused", 
              desc: "Aesthetics backed by psychology. Every pixel designed to engage users.",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            },
            { 
              title: "Lightning Fast", 
              desc: "Time is revenue. Our agile sprints guarantee rapid, reliable deployment.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            },
            { 
              title: "Scalable Systems", 
              desc: "From 100 to 1,000,000 users. We build robust tech that never buckles.",
              image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            },
            { 
              title: "Dedicated Elite", 
              desc: "Based in Calicut, providing world-class engineering with local trust.",
              image: "https://images.unsplash.com/photo-1522071820081-019f0129c71c?q=80&w=2070&auto=format&fit=crop"
            }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                boxShadow: "0 30px 60px -10px rgba(0, 212, 255, 0.5)", 
                borderColor: "#00D4FF",
                backgroundColor: "rgba(0, 212, 255, 0.08)"
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-colors cursor-pointer group relative overflow-hidden flex flex-col"
            >
              <div className="w-full h-40 overflow-hidden relative">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] to-transparent"></div>
              </div>
              
              <div className="p-8 pt-0 relative z-10">
                <h3 className="font-heading text-2xl font-bold mb-4 text-white group-hover:text-[#00D4FF] transition-colors drop-shadow-sm">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed text-base">{feature.desc}</p>
              </div>

              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00D4FF]/20 blur-[40px] rounded-full group-hover:bg-[#00D4FF]/40 transition-colors pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Project Cost Estimator */}
      <section className="container mx-auto px-4 max-w-5xl relative z-10 mb-20 overflow-visible">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           whileHover={{ 
             y: -10, 
             boxShadow: "0 40px 100px -10px rgba(0, 212, 255, 0.5)", 
             borderColor: "rgba(0, 212, 255, 0.8)" 
           }}
           className="p-10 md:p-16 rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-3xl relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-default transition-shadow"
        >
          {/* Intense glow behind estimator */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#00D4FF]/30 to-transparent blur-[100px] rounded-full group-hover:opacity-100 transition-opacity opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#06B6D4]/30 to-transparent blur-[100px] rounded-full group-hover:opacity-100 transition-opacity opacity-40 translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-12 text-center relative z-10 drop-shadow-sm">Project Cost Estimator</h2>
          <form className="space-y-10 relative z-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-sm md:text-base font-bold text-white/90 tracking-wide uppercase">Select Project Type</label>
                <select className="w-full p-5 rounded-2xl bg-white/5 border border-white/20 text-white font-medium text-lg focus:ring-4 focus:ring-[#00D4FF]/50 focus:border-[#00D4FF] focus:bg-[#0A2540] outline-none transition-all appearance-none cursor-pointer hover:border-white/40">
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>E-Commerce</option>
                  <option>Landing Page / Website</option>
                  <option>QR / POS System</option>
                </select>
              </div>
              <div className="space-y-4">
                <label className="text-sm md:text-base font-bold text-white/90 tracking-wide uppercase">Select Timeline</label>
                <select className="w-full p-5 rounded-2xl bg-white/5 border border-white/20 text-white font-medium text-lg focus:ring-4 focus:ring-[#00D4FF]/50 focus:border-[#00D4FF] focus:bg-[#0A2540] outline-none transition-all appearance-none cursor-pointer hover:border-white/40">
                  <option>1-2 Months (Rush)</option>
                  <option>3-4 Months (Standard)</option>
                  <option>5+ Months (Complex)</option>
                </select>
              </div>
            </div>
            
            <div className="pt-12 mt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <p className="text-sm md:text-base text-white/60 mb-2 uppercase tracking-widest font-bold">Estimated Investment</p>
                <p className="text-5xl md:text-6xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] drop-shadow-[0_0_20px_rgba(0,212,255,0.6)]">
                  $5,000 - $10,000
                </p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0,212,255,0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] text-[#0A2540] font-black border-0 h-16 md:h-16 px-12 text-xl rounded-full transition-all shadow-[0_0_30px_rgba(0,212,255,0.4)]"
              >
                 Get Detailed Quote
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
}

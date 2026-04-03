"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
               className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#00D4FF]/40 bg-[#00D4FF]/10 backdrop-blur-xl mb-8 text-[#00D4FF] text-sm md:text-base font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(0,212,255,0.2)]"
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
              className="font-heading text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tighter mb-8 leading-[1.1] text-white"
            >
              Coderaft – Calicut's <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#00D4FF] to-[#06B6D4] drop-shadow-[0_0_30px_rgba(0,212,255,0.4)]">Premier Tech Consultancy</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed"
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
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,212,255,0.1)", borderColor: "#00D4FF", boxShadow: "0 0 30px rgba(0,212,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-black/20 border-2 border-[#00D4FF]/40 text-white font-bold h-16 md:h-14 px-10 text-lg rounded-full backdrop-blur-md transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                View Our Work
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Hero Visuals Collage */}
          <motion.div 
             initial={{ opacity: 0, x: 40 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.3 }}
             className="relative z-10 w-full h-[450px] md:h-[600px] flex justify-center items-center"
          >
             {/* Center Strong Glow Behind Image */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#00D4FF] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
             
             {/* Dashboard Center */}
             <motion.div 
               whileHover={{ y: -15, scale: 1.02, boxShadow: "0 40px 80px -12px rgba(0, 212, 255, 0.4)" }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
               className="absolute w-[90%] md:w-[85%] h-[300px] md:h-[450px] rounded-2xl md:rounded-3xl border border-white/20 bg-[#0A2540]/80 backdrop-blur-3xl shadow-2xl overflow-hidden z-20 cursor-pointer"
               style={{ boxShadow: "0 25px 50px -12px rgba(0, 212, 255, 0.2)" }}
             >
               <div className="h-10 md:h-12 bg-black/60 border-b border-white/10 flex items-center px-6 gap-3">
                 <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                 <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                 <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
               </div>
               <div className="w-full h-full relative">
                 <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Dashboard" className="w-full h-full object-cover opacity-100 mix-blend-screen" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent"></div>
               </div>
             </motion.div>

             {/* TableTreats Mobile Left */}
             <motion.div 
               whileHover={{ y: -20, rotate: 0, scale: 1.05, boxShadow: "-30px 30px 60px rgba(0,212,255,0.4)", borderColor: "#00D4FF" }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
               className="absolute left-[-5%] md:left-[-10%] top-[10%] md:top-[15%] w-[130px] md:w-[220px] h-[260px] md:h-[450px] rounded-[1.5rem] md:rounded-[2.5rem] border-4 border-gray-800 bg-black shadow-2xl z-30 overflow-hidden rotate-[-12deg] cursor-pointer"
               style={{ boxShadow: "-20px 20px 40px rgba(0,0,0,0.6)" }}
             >
                 <img src="https://images.unsplash.com/photo-1623356302008-01124df55d9d?q=80&w=1760&auto=format&fit=crop" alt="TableTreats QR" className="w-full h-full object-cover opacity-100" />
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 flex items-end p-5">
                    <p className="text-white text-sm md:text-base font-bold shadow-sm border-b-2 border-[#00D4FF] pb-1">TableTreats QR</p>
                 </div>
             </motion.div>

             {/* Tetla Motors Right */}
             <motion.div 
               whileHover={{ y: -20, rotate: 0, scale: 1.05, boxShadow: "30px 30px 60px rgba(0,212,255,0.4)", borderColor: "#00D4FF" }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
               className="absolute right-[-2%] md:right-[-5%] bottom-[10%] md:bottom-[15%] w-[160px] md:w-[320px] h-[200px] md:h-[350px] rounded-xl md:rounded-2xl border border-white/20 bg-white/10 backdrop-blur-3xl shadow-2xl z-30 rotate-[8deg] overflow-hidden p-3 md:p-5 flex flex-col justify-between cursor-pointer"
               style={{ boxShadow: "20px 20px 40px rgba(0,0,0,0.6)" }}
             >
                <div className="w-full h-[55%] md:h-[60%] rounded-lg overflow-hidden border border-white/10 relative">
                   <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop" alt="Tetla Motors EV" className="w-full h-full object-cover opacity-100" />
                   <div className="absolute top-2 right-2 flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_5px_rgba(0,212,255,1)]"></div>
                   </div>
                </div>
                <div className="mt-2 md:mt-4 space-y-3 md:space-y-4">
                   <p className="text-white text-sm md:text-lg font-bold font-heading">Tetla Motors OS</p>
                   <div className="w-full h-2 md:h-3 bg-black/50 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] rounded-full shadow-[0_0_10px_rgba(0,212,255,0.8)]"
                      ></motion.div>
                   </div>
                </div>
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
          <motion.div whileHover={{ scale: 1.1, color: "#00D4FF", textShadow: "0 0 20px rgba(0,212,255,0.8)" }} className="text-white/60 hover:text-[#00D4FF] transition-all font-heading font-extrabold text-2xl md:text-3xl tracking-tighter cursor-pointer">Network Masters Hub</motion.div>
          <motion.div whileHover={{ scale: 1.1, color: "#00D4FF", textShadow: "0 0 20px rgba(0,212,255,0.8)" }} className="text-white/60 hover:text-[#00D4FF] transition-all font-heading font-extrabold text-2xl md:text-3xl tracking-tighter cursor-pointer">TableTreats</motion.div>
          <motion.div whileHover={{ scale: 1.1, color: "#00D4FF", textShadow: "0 0 20px rgba(0,212,255,0.8)" }} className="text-white/60 hover:text-[#00D4FF] transition-all font-heading font-extrabold text-2xl md:text-3xl tracking-tighter flex items-center gap-2 cursor-pointer">
            <span className="text-[#00D4FF] drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]">⭍</span> Tetla Motors
          </motion.div>
        </div>
      </section>

      {/* Why Choose Coderaft */}
      <section className="container mx-auto px-4 max-w-screen-xl relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#00D4FF] opacity-[0.07] blur-[150px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-20 relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Why Choose Coderaft?</h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            We don't just build software. We craft intelligent, deeply-integrated, <span className="text-[#00D4FF] font-medium">conversion-focused digital systems</span> that give you an unfair advantage.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {[
            { 
              title: "Conversion-Focused", 
              desc: "Aesthetics backed by psychology. Every pixel designed to engage users.",
              icon: "✨"
            },
            { 
              title: "Lightning Fast", 
              desc: "Time is revenue. Our agile sprints guarantee rapid, reliable deployment.",
              icon: "⚡"
            },
            { 
              title: "Scalable Systems", 
              desc: "From 100 to 1,000,000 users. We build robust tech that never buckles.",
              icon: "🏗️"
            },
            { 
              title: "Dedicated Elite", 
              desc: "Based in Calicut, providing world-class engineering with local trust.",
              icon: "🤝"
            }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                boxShadow: "0 30px 60px -10px rgba(0, 212, 255, 0.5)", 
                borderColor: "#00D4FF",
                backgroundColor: "rgba(0, 212, 255, 0.08)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="p-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-colors cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00D4FF]/20 blur-[40px] rounded-full group-hover:bg-[#00D4FF]/40 transition-colors"></div>
              
              <div className="text-5xl mb-8 group-hover:scale-125 group-hover:-rotate-6 transition-transform origin-bottom-left drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{feature.icon}</div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-white group-hover:text-[#00D4FF] transition-colors drop-shadow-sm">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed md:text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Cost Estimator */}
      <section className="container mx-auto px-4 max-w-5xl relative z-10 mb-20">
        <motion.div 
           whileHover={{ 
             y: -10, 
             boxShadow: "0 40px 80px -10px rgba(0, 212, 255, 0.4)", 
             borderColor: "rgba(0, 212, 255, 0.8)" 
           }}
           transition={{ type: "spring", stiffness: 300, damping: 20 }}
           className="p-10 md:p-16 rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-3xl relative overflow-hidden group shadow-2xl cursor-default"
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

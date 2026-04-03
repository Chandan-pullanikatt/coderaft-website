"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32 overflow-hidden selection:bg-[#00D4FF] selection:text-[#0A2540]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-20 lg:mt-32 text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 backdrop-blur-md mb-8 text-[#00D4FF] text-sm font-medium tracking-wide uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]"></span>
          </span>
          Digital Craftsmanship Engineered to Scale
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight mb-6 leading-tight max-w-5xl"
        >
          Coderaft – Calicut's <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] drop-shadow-[0_0_20px_rgba(0,212,255,0.2)]">Premier Tech Consultancy</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-12 leading-relaxed"
        >
          UI/UX • Web & Mobile Apps • QR Systems • POS • Attendance Solutions
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 mb-24 z-20 relative"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,212,255,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] text-[#0A2540] font-bold h-14 px-10 text-lg rounded-full shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all flex items-center justify-center gap-2"
          >
            Get Free Consultation
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "#00D4FF" }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-white/20 hover:border-[#00D4FF] text-white font-bold h-14 px-10 text-lg rounded-full backdrop-blur-sm transition-all flex items-center justify-center gap-2"
          >
            View Our Work
          </motion.button>
        </motion.div>

        {/* Hero Visuals Collage - Flex/Grid approach for impact */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.4 }}
           className="w-full max-w-6xl relative z-10 mx-auto px-4"
        >
           {/* Center Strong Glow Behind Image */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#00D4FF] opacity-10 blur-[100px] rounded-full"></div>
           
           <div className="relative flex justify-center items-center h-[350px] md:h-[650px] w-full">
              {/* Dashboard Center */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="absolute w-[80%] md:w-[70%] h-[280px] md:h-[550px] rounded-2xl md:rounded-3xl border border-white/10 bg-[#0A2540]/60 backdrop-blur-xl shadow-2xl overflow-hidden z-20"
                style={{ boxShadow: "0 25px 50px -12px rgba(0, 212, 255, 0.2)" }}
              >
                <div className="h-8 md:h-12 bg-black/40 border-b border-white/10 flex items-center px-6 gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="w-full h-full relative">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Dashboard" className="w-full h-full object-cover opacity-90 mix-blend-screen" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent"></div>
                </div>
              </motion.div>

              {/* TableTreats Mobile Left */}
              <motion.div 
                whileHover={{ y: -15, rotate: 0 }}
                className="absolute left-0 md:left-[5%] top-10 md:top-20 w-[110px] md:w-[220px] h-[220px] md:h-[450px] rounded-[1.5rem] md:rounded-[2.5rem] border-4 border-gray-800 bg-black shadow-2xl z-30 overflow-hidden rotate-[-8deg] transition-all"
                style={{ boxShadow: "-20px 20px 40px rgba(0,0,0,0.5)" }}
              >
                  <img src="https://images.unsplash.com/photo-1623356302008-01124df55d9d?q=80&w=1760&auto=format&fit=crop" alt="TableTreats QR" className="w-full h-full object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 flex items-end p-4">
                     <p className="text-white text-xs md:text-sm font-bold shadow-sm">TableTreats QR</p>
                  </div>
              </motion.div>

              {/* Tetla Motors Right */}
              <motion.div 
                whileHover={{ y: -15, rotate: 0 }}
                className="absolute right-0 md:right-[2%] top-20 md:top-32 w-[140px] md:w-[300px] h-[190px] md:h-[350px] rounded-xl md:rounded-2xl border border-white/20 bg-white/5 backdrop-blur-2xl shadow-2xl z-30 rotate-[6deg] overflow-hidden p-2 md:p-4 flex flex-col justify-between"
                style={{ boxShadow: "20px 20px 40px rgba(0,0,0,0.5)" }}
              >
                 <div className="w-full h-[60%] rounded-lg overflow-hidden border border-white/10">
                    <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop" alt="Tetla Motors EV" className="w-full h-full object-cover opacity-90" />
                 </div>
                 <div className="mt-2 md:mt-4 space-y-2 md:space-y-3">
                    <p className="text-white text-xs md:text-base font-bold font-heading">Tetla Motors OS</p>
                    <div className="w-3/4 h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
                       <div className="w-[80%] h-full bg-[#00D4FF] rounded-full"></div>
                    </div>
                 </div>
              </motion.div>
           </div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="container mx-auto px-4 py-8 border-y border-white/5 bg-gradient-to-b from-background to-white/[0.02] relative">
        <p className="text-center text-sm text-[#00D4FF] font-medium mb-10 uppercase tracking-widest">
          Trusted by Innovative Companies in Kerala
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-70">
          <motion.div whileHover={{ scale: 1.05, opacity: 1 }} className="grayscale hover:grayscale-0 hover:text-[#00D4FF] transition-all font-heading font-extrabold text-xl md:text-3xl tracking-tighter cursor-pointer">Network Masters Hub</motion.div>
          <motion.div whileHover={{ scale: 1.05, opacity: 1 }} className="grayscale hover:grayscale-0 hover:text-[#00D4FF] transition-all font-heading font-extrabold text-xl md:text-3xl tracking-tighter cursor-pointer">TableTreats</motion.div>
          <motion.div whileHover={{ scale: 1.05, opacity: 1 }} className="grayscale hover:grayscale-0 hover:text-[#00D4FF] transition-all font-heading font-extrabold text-xl md:text-3xl tracking-tighter flex items-center gap-2 cursor-pointer">
            <span className="text-[#00D4FF] text-3xl">⭍</span> Tetla Motors
          </motion.div>
        </div>
      </section>

      {/* Why Choose Coderaft */}
      <section className="container mx-auto px-4 max-w-screen-xl relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#00D4FF]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-20 relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Why Choose Coderaft?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We don't just build software. We craft intelligent, glassmorphic, conversion-focused digital systems that give you an unfair advantage.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {[
            { 
              title: "Conversion-Focused", 
              desc: "Aesthetics backed by psychology. Every pixel is designed to engage users and maximize your ROI.",
              icon: "✨"
            },
            { 
              title: "Lightning Fast", 
              desc: "Time is revenue. Our agile sprints and Next.js architecture guarantee rapid, reliable deployment.",
              icon: "⚡"
            },
            { 
              title: "Scalable Systems", 
              desc: "From your first 100 users to your first million. We build robust tech that never buckles.",
              icon: "🏗️"
            },
            { 
              title: "Dedicated Elite", 
              desc: "Based in Calicut, providing world-class engineering with the trust of a local partner.",
              icon: "🤝"
            }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              whileHover={{ 
                y: -12, 
                boxShadow: "0 20px 40px -10px rgba(0, 212, 255, 0.4)", 
                borderColor: "rgba(0, 212, 255, 0.5)",
                backgroundColor: "rgba(0, 212, 255, 0.05)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-colors cursor-pointer group"
            >
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform origin-bottom-left">{feature.icon}</div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-white group-hover:text-[#00D4FF] transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Cost Estimator */}
      <section className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div 
           whileHover={{ 
             y: -8, 
             boxShadow: "0 25px 50px -12px rgba(0, 212, 255, 0.3)", 
             borderColor: "rgba(0, 212, 255, 0.4)" 
           }}
           transition={{ type: "spring", stiffness: 300, damping: 20 }}
           className="p-8 md:p-14 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl relative overflow-hidden group"
        >
          {/* Intense glow behind estimator */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#00D4FF]/20 to-transparent blur-[80px] rounded-full group-hover:opacity-100 transition-opacity opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#06B6D4]/20 to-transparent blur-[80px] rounded-full group-hover:opacity-100 transition-opacity opacity-50 translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 relative z-10">Project Cost Estimator</h2>
          <form className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-medium text-white/80">Select Project Type</label>
                <select className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white focus:ring-2 focus:ring-[#00D4FF] focus:border-[#00D4FF] outline-none transition-all appearance-none cursor-pointer">
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>E-Commerce</option>
                  <option>Landing Page / Website</option>
                  <option>QR / POS System</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium text-white/80">Select Timeline</label>
                <select className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white focus:ring-2 focus:ring-[#00D4FF] focus:border-[#00D4FF] outline-none transition-all appearance-none cursor-pointer">
                  <option>1-2 Months (Rush)</option>
                  <option>3-4 Months (Standard)</option>
                  <option>5+ Months (Complex)</option>
                </select>
              </div>
            </div>
            
            <div className="pt-10 mt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Estimated Investment</p>
                <p className="text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] drop-shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                  $5,000 - $10,000
                </p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,212,255,0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] text-[#0A2540] hover:opacity-90 font-bold border-0 h-14 px-10 text-lg rounded-full transition-all"
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

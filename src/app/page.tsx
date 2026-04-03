"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-20 text-center flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6 mt-4"
        >
          Coderaft – Calicut's <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#06B6D4]">Premier Tech Consultancy</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed"
        >
          UI/UX • Web & Mobile Apps • QR Systems • POS • Attendance Solutions <br className="hidden md:block" />
          <span className="font-medium text-foreground/80 mt-2 block">Digital craftsmanship engineered to scale.</span>
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 mb-20"
        >
          <Button size="lg" className="bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] text-[#0A2540] hover:opacity-90 font-bold border-0 h-14 px-8 text-lg rounded-full shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all hover:scale-105">
            Get Free Consultation
          </Button>
          <Button size="lg" className="bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] text-[#0A2540] hover:opacity-90 font-bold border-0 h-14 px-8 text-lg rounded-full shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all hover:scale-105">
            View Our Work
          </Button>
        </motion.div>

        {/* Hero Visuals Collage */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.3 }}
           className="w-full max-w-6xl relative h-[400px] md:h-[600px] mt-4"
        >
          {/* Main Dashboard (Center) */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[80%] h-[350px] md:h-[500px] rounded-2xl border border-white/20 bg-[#0A2540] shadow-2xl overflow-hidden z-10 flex flex-col">
            <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-[#0A2540] to-black/50 p-8 flex items-center justify-center">
              {/* Dummy Image for Dashboard */}
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Dashboard Mockup" className="w-full h-full object-cover rounded-lg opacity-60" />
            </div>
          </div>
          
          {/* TableTreats QR Mobile (Left) */}
          <div className="absolute top-32 md:top-40 left-4 md:left-[10%] w-[120px] md:w-[180px] h-[240px] md:h-[360px] rounded-3xl border-4 border-gray-800 bg-white shadow-2xl z-20 flex items-center justify-center overflow-hidden rotate-[-5deg]">
             <img src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=1887&auto=format&fit=crop" alt="QR App Mockup" className="w-full h-full object-cover" />
          </div>

          {/* Tetla Motors App/Card (Right) */}
          <div className="absolute top-20 md:top-24 right-4 md:right-[5%] w-[160px] md:w-[280px] h-[200px] md:h-[280px] rounded-2xl border border-white/20 bg-black/80 backdrop-blur-md shadow-2xl z-10 p-4 rotate-[5deg] flex flex-col justify-between">
             <div className="h-32 w-full rounded-lg overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop" alt="EV Bike Interface" className="w-full h-full object-cover opacity-80" />
             </div>
             <div className="space-y-2">
                <div className="h-2 w-2/3 bg-white/20 rounded"></div>
                <div className="h-2 w-1/2 bg-[#00D4FF] rounded"></div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="container mx-auto px-4 py-12 border-y border-border bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none"></div>
        <p className="text-center text-sm text-cyan-400 font-medium mb-8 uppercase tracking-widest">
          Trusted by Innovative Companies in Kerala
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-80 z-0 relative">
          <motion.div whileHover={{ scale: 1.1, color: "#00D4FF" }} className="font-heading font-extrabold text-2xl tracking-tighter text-white/80 transition-colors">Network Masters Hub</motion.div>
          <motion.div whileHover={{ scale: 1.1, color: "#00D4FF" }} className="font-heading font-extrabold text-2xl tracking-tighter text-white/80 transition-colors">TableTreats</motion.div>
          <motion.div whileHover={{ scale: 1.1, color: "#00D4FF" }} className="font-heading font-extrabold text-2xl tracking-tighter text-white/80 transition-colors flex items-center gap-2">
            <span className="text-[#00D4FF]">⭍</span> Tetla Motors
          </motion.div>
        </div>
      </section>

      {/* Why Choose Coderaft */}
      <section className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Why Choose Coderaft?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg pt-2">
            We don't just build software. We craft intelligent, conversion-focused digital systems that give you an unfair advantage.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Conversion-Focused UI/UX", 
              desc: "Aesthetics backed by psychology. Every pixel is designed to engage users and maximize your ROI.",
              icon: "✨"
            },
            { 
              title: "Lightning Fast Delivery", 
              desc: "Time is revenue. Our agile sprints and Next.js architecture guarantee rapid, reliable go-to-market strategies.",
              icon: "⚡"
            },
            { 
              title: "Scalable Architecture", 
              desc: "From your first 100 users to your first million. We build robust systems that never buckle under pressure.",
              icon: "🏗️"
            },
            { 
              title: "Dedicated Local Elite", 
              desc: "Based in Calicut, providing world-class engineering with the trust and accessibility of a local partner.",
              icon: "🤝"
            }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              whileHover={{ 
                y: -10, 
                boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)", 
                borderColor: "#00D4FF" 
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] transition-colors relative group"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="font-heading text-xl font-bold mb-3 text-white group-hover:text-[#00D4FF] transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Cost Estimator */}
      <section className="container mx-auto px-4 max-w-3xl">
        <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur relative overflow-hidden">
          {/* Subtle glow behind estimator */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#00D4FF] opacity-[0.03] blur-3xl rounded-full"></div>
          
          <h2 className="font-heading text-3xl font-bold mb-8 text-center relative z-10">Project Cost Estimator</h2>
          <form className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Project Type</label>
                <select className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-foreground focus:ring-2 focus:ring-[#00D4FF] outline-none transition-all">
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>E-Commerce</option>
                  <option>Landing Page / Website</option>
                  <option>QR / POS System</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Timeline</label>
                <select className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-foreground focus:ring-2 focus:ring-[#00D4FF] outline-none transition-all">
                  <option>1-2 Months (Rush)</option>
                  <option>3-4 Months (Standard)</option>
                  <option>5+ Months (Complex)</option>
                </select>
              </div>
            </div>
            
            <div className="pt-8 mt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Estimated Cost</p>
                <p className="text-4xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] drop-shadow-[0_0_10px_rgba(0,212,255,0.3)]">
                  $5,000 - $10,000
                </p>
              </div>
              <Button size="lg" className="w-full md:w-auto bg-white text-black hover:bg-gray-200 font-bold border-0 h-14 px-8 text-lg rounded-full">
                Get Detailed Quote
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

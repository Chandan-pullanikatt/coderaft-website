"use client";

import { motion } from "framer-motion";
import { Paintbrush, Smartphone, QrCode, MonitorSmartphone, CalendarClock, PenTool, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "UI/UX Design",
    description: "We craft intuitive, conversion-optimized interfaces that balance breathtaking aesthetics with seamless human-computer interaction.",
    icon: <Paintbrush className="w-6 h-6 text-[#00D4FF]" />,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563de42?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Web & Mobile Apps",
    description: "High-performance applications built on scalable architectures. From sleek single-page apps to complex native mobile ecosystems.",
    icon: <Smartphone className="w-6 h-6 text-[#00D4FF]" />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Table QR Systems",
    description: "Revolutionize dining with our instant QR ordering systems. Let your customers scan, explore menus, and order instantly without a waiter.",
    icon: <QrCode className="w-6 h-6 text-[#00D4FF]" />,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "POS Systems",
    description: "Robust, blazing-fast Point of Sale software engineered for modern retail and F&B businesses looking to streamline transactions.",
    icon: <MonitorSmartphone className="w-6 h-6 text-[#00D4FF]" />,
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Attendance Solutions",
    description: "Automated, highly accurate employee tracking. Integrating biometric and location-based tech to modernize your HR operations.",
    icon: <CalendarClock className="w-6 h-6 text-[#00D4FF]" />,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Logo & Branding",
    description: "Your brand is your promise. We design striking visual identities that immediately communicate authority and premium quality.",
    icon: <PenTool className="w-6 h-6 text-[#00D4FF]" />,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-32 pb-32 overflow-hidden selection:bg-[#00D4FF] selection:text-[#0A2540]">
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
          Our Services
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tighter mb-8 leading-[1.1] text-white"
        >
          Our Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] drop-shadow-[0_0_30px_rgba(0,212,255,0.4)]">Solutions</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
        >
          Engineered to give your business an unfair advantage. We design and build software that commands attention and drives growth.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                boxShadow: "0 30px 60px -10px rgba(0, 212, 255, 0.4)", 
                borderColor: "#00D4FF",
                backgroundColor: "rgba(0, 212, 255, 0.05)"
              }}
              className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-3xl transition-all cursor-pointer group relative overflow-hidden flex flex-col items-start"
            >
              {/* Image Header */}
              <div className="w-full h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute top-6 left-6 z-20 p-2.5 rounded-xl bg-black/60 border border-white/10 group-hover:border-[#00D4FF]/30 group-hover:bg-[#00D4FF]/20 transition-all shadow-lg">
                  {service.icon}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-heading text-2xl font-bold mb-4 text-white group-hover:text-[#00D4FF] transition-colors">{service.title}</h3>
                <p className="text-white/70 leading-relaxed text-base mb-8 flex-grow">{service.description}</p>
                
                <div className="mt-auto flex items-center gap-2 text-[#00D4FF] font-bold text-sm tracking-widest uppercase opacity-80 group-hover:opacity-100 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00D4FF]/20 blur-[40px] rounded-full group-hover:bg-[#00D4FF]/40 transition-colors pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 max-w-4xl relative z-10 text-center mb-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="p-12 md:p-16 rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#00D4FF]/10 to-[#0A2540]/50 backdrop-blur-3xl relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-sm">Ready to Elevate Your Tech?</h2>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Book a free strategy session with our elite engineers and designers today.
          </p>
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0,212,255,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] text-[#0A2540] font-black h-16 md:h-16 px-12 text-xl rounded-full transition-all shadow-[0_0_30px_rgba(0,212,255,0.5)]"
            >
              Start Your Project
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

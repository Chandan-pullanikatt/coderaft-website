"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-20 pb-32 overflow-hidden selection:bg-[#00D4FF] selection:text-[#0A2540]">
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
          Get In Touch
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tighter mb-8 leading-[1.1] text-white"
        >
          Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] drop-shadow-[0_0_30px_rgba(0,212,255,0.4)]">Together</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          Have a vision? We have the engineers. Fill out the form below or reach out directly to start a conversation about your tech infrastructure.
        </motion.p>
      </section>

      <section className="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-3xl shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00D4FF]/20 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
             
             <h3 className="font-heading text-3xl font-extrabold mb-8 text-white">Send a Message</h3>
             
             <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-white/70 tracking-wide uppercase">Full Name</label>
                     <input type="text" placeholder="John Doe" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#00D4FF] focus:bg-[#0A2540] focus:ring-2 focus:ring-[#00D4FF]/30 outline-none transition-all" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-white/70 tracking-wide uppercase">Company</label>
                     <input type="text" placeholder="Acme Inc." className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#00D4FF] focus:bg-[#0A2540] focus:ring-2 focus:ring-[#00D4FF]/30 outline-none transition-all" />
                   </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-white/70 tracking-wide uppercase">Email Address</label>
                     <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#00D4FF] focus:bg-[#0A2540] focus:ring-2 focus:ring-[#00D4FF]/30 outline-none transition-all" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-white/70 tracking-wide uppercase">Phone</label>
                     <input type="tel" placeholder="+91 90000 00000" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#00D4FF] focus:bg-[#0A2540] focus:ring-2 focus:ring-[#00D4FF]/30 outline-none transition-all" />
                   </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/70 tracking-wide uppercase">Business Type</label>
                  <select className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#00D4FF] focus:bg-[#0A2540] focus:ring-2 focus:ring-[#00D4FF]/30 outline-none transition-all appearance-none">
                    <option className="bg-[#0A2540]">Food & Beverage (Restaurant/Cafe)</option>
                    <option className="bg-[#0A2540]">Retail & E-commerce</option>
                    <option className="bg-[#0A2540]">Education / EdTech</option>
                    <option className="bg-[#0A2540]">Automotive</option>
                    <option className="bg-[#0A2540]">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/70 tracking-wide uppercase">Project Details</label>
                  <textarea rows={4} placeholder="Tell us about what you want to build..." className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#00D4FF] focus:bg-[#0A2540] focus:ring-2 focus:ring-[#00D4FF]/30 outline-none transition-all resize-none"></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,212,255,0.6)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] text-[#0A2540] font-black h-16 text-lg rounded-xl flex items-center justify-center gap-3 transition-all mt-4"
                >
                  Send Message <Send className="w-5 h-5" />
                </motion.button>
             </form>
          </motion.div>

          {/* Right: Direct Contact & Maps */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {[
                  { icon: <MessageCircle />, title: "WhatsApp Us", desc: "+91 90000 00000", bg: "hover:bg-[#25D366]/20", border: "hover:border-[#25D366]", hoverText: "text-[#25D366]" },
                  { icon: <Phone />, title: "Call Us", desc: "+91 90000 00000", bg: "hover:bg-[#00D4FF]/20", border: "hover:border-[#00D4FF]", hoverText: "text-[#00D4FF]" },
                  { icon: <Mail />, title: "Email Us", desc: "hello@coderaft.io", bg: "hover:bg-[#00D4FF]/20", border: "hover:border-[#00D4FF]", hoverText: "text-[#00D4FF]" },
                  { icon: <MapPin />, title: "Visit Us", desc: "Cyberpark, Calicut", bg: "hover:bg-[#00D4FF]/20", border: "hover:border-[#00D4FF]", hoverText: "text-[#00D4FF]" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer transition-colors group ${item.bg} ${item.border}`}
                  >
                     <div className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-white/20 ${item.hoverText}`}>
                        {item.icon}
                     </div>
                     <h4 className="font-bold text-white mb-1 group-hover:text-white">{item.title}</h4>
                     <p className="text-white/60 text-sm group-hover:text-white/90">{item.desc}</p>
                  </motion.div>
                ))}
             </div>

             {/* Google Maps Placeholder/Embed */}
             <div className="w-full h-[300px] md:h-full min-h-[300px] rounded-3xl border border-white/10 bg-white/5 overflow-hidden relative shadow-lg group">
                {/* Fallback styling for the embed */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors pointer-events-none z-10 flex items-center justify-center">
                   <div className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-white/80 font-medium flex items-center gap-2">
                     <MapPin className="w-4 h-4 text-[#00D4FF]"/> Calicut, Kerala
                   </div>
                </div>
                {/* actual iframe mapping to Calicut Cyberpark */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15651.189518063!2d75.83151975!3d11.27643525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bff4608c027%3A0xc3cf333ed8a8de80!2sCyberpark%20Kozhikode!5e0!3m2!1sen!2sin!4v1714555800000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(80%) grayscale(50%)" }} // Dark mode map filter hack
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

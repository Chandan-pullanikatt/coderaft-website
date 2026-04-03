"use client";

import { motion } from "framer-motion";
import { Search, PenTool, LayoutDashboard, Code, ShieldCheck, Rocket, Headset } from "lucide-react";
import Link from "next/link";

const timeline = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We start by deeply understanding your business, your target users, and the core problem. We analyze competitors and define the project scope.",
    icon: <Search className="w-8 h-8 text-[#0A2540]" />,
  },
  {
    step: "02",
    title: "UI/UX Design",
    desc: "Our designers craft user flows and high-fidelity wireframes. We prototype interactive mockups so you can feel the app before we write a single line of code.",
    icon: <PenTool className="w-8 h-8 text-[#0A2540]" />,
  },
  {
    step: "03",
    title: "Technical Planning",
    desc: "We architect the database schema, select the optimal tech stack, and map out the API endpoints to ensure scalable and secure foundations.",
    icon: <LayoutDashboard className="w-8 h-8 text-[#0A2540]" />,
  },
  {
    step: "04",
    title: "Agile Development",
    desc: "Our engineers build the frontend and backend in concurrent sprints. You get regular updates and access to staging environments as we build.",
    icon: <Code className="w-8 h-8 text-[#0A2540]" />,
  },
  {
    step: "05",
    title: "Rigorous Testing",
    desc: "We perform automated and manual testing, covering edge cases, performance benchmarks, and security audits to guarantee zero critical bugs.",
    icon: <ShieldCheck className="w-8 h-8 text-[#0A2540]" />,
  },
  {
    step: "06",
    title: "Deployment",
    desc: "We configure CI/CD pipelines, optimize for production, and handle the seamless release of your product to your custom domain or app stores.",
    icon: <Rocket className="w-8 h-8 text-[#0A2540]" />,
  },
  {
    step: "07",
    title: "Post-Launch Support",
    desc: "We don't just launch and leave. We monitor app performance, fix emerging issues, and integrate new features as you gather live user feedback.",
    icon: <Headset className="w-8 h-8 text-[#0A2540]" />,
  },
];

export default function ProcessPage() {
  return (
    <div className="flex flex-col gap-24 pb-32 overflow-hidden selection:bg-[#00D4FF] selection:text-[#0A2540]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-24 md:mt-32 text-center relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00D4FF] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
        
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
          How We Work
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tighter mb-8 leading-[1.1] text-white"
        >
          An Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] drop-shadow-[0_0_30px_rgba(0,212,255,0.4)]">Masterclass</span>
        </motion.h1>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
             <motion.div 
               initial={{ height: "0%" }}
               whileInView={{ height: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 3, ease: "linear" }}
               className="w-full bg-gradient-to-b from-[#00D4FF] via-[#06B6D4] to-transparent shadow-[0_0_15px_rgba(0,212,255,0.8)]"
             ></motion.div>
          </div>

          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex items-center justify-between mb-20 md:mb-32 last:mb-0 w-full group ${!isEven ? "md:flex-row-reverse" : ""}`}>
                
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-black border-4 border-[#0A2540] flex items-center justify-center z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-[#00D4FF] group-hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-500">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#00D4FF] to-[#06B6D4] flex items-center justify-center scale-75 group-hover:scale-90 transition-transform">
                       {item.icon}
                    </div>
                </div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  className={`w-full md:w-[45%] pl-24 md:pl-0 ${isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}
                >
                  <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl group-hover:bg-white/10 group-hover:border-[#00D4FF]/30 transition-colors shadow-2xl relative overflow-hidden">
                     <div className={`text-6xl md:text-8xl font-black text-white/5 absolute -top-4 select-none group-hover:text-[#00D4FF]/10 transition-colors ${isEven ? "-left-2" : "-right-2"}`}>
                        {item.step}
                     </div>
                     <h3 className="font-heading text-2xl md:text-3xl font-extrabold mb-4 text-white group-hover:text-[#00D4FF] transition-colors relative z-10">
                        {item.title}
                     </h3>
                     <p className="text-white/70 leading-relaxed relative z-10 text-base md:text-lg">
                        {item.desc}
                     </p>
                  </div>
                </motion.div>
                
                {/* Empty Space for the other side (Desktop only) */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why It Works */}
      <section className="container mx-auto px-4 max-w-5xl relative z-10 mt-10">
         <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-6">Why Our Process Works</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">We've refined this methodology across dozens of successful projects to eliminate risk and maximize ROI.</p>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Zero Surprises", 
                desc: "Transparent milestones keep you completely informed.",
                image: "https://images.unsplash.com/photo-1454165833267-0c1534801ad6cf?q=80&w=2070&auto=format&fit=crop"
              },
              { 
                title: "Rapid Iteration", 
                desc: "Constant feedback loops ensure we build what you actually need.",
                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
              },
              { 
                title: "Scalable Output", 
                desc: "Future-proof architecture prevents technical debt on day one.",
                image: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl border border-white/10 bg-black/40 overflow-hidden hover:border-[#00D4FF]/50 transition-colors group flex flex-col"
               >
                 <div className="w-full h-32 overflow-hidden relative">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 </div>
                 
                 <div className="p-8 pt-0 relative z-10 text-center -mt-6">
                    <div className="w-12 h-12 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center mx-auto mb-4 backdrop-blur-md group-hover:bg-[#00D4FF]/20 transition-colors">
                       <ShieldCheck className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h4 className="font-heading text-xl font-bold mb-3 text-white group-hover:text-[#00D4FF] transition-colors">{feature.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
                 </div>
              </motion.div>
            ))}
         </div>
         
         <div className="mt-20 text-center">
            <Link href="/contact">
               <motion.button 
                 whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0,212,255,0.8)" }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] text-[#0A2540] font-black h-16 px-12 text-lg rounded-full shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all inline-flex items-center gap-3"
               >
                 Start Your Journey <Rocket className="w-5 h-5"/>
               </motion.button>
            </Link>
         </div>
      </section>
    </div>
  );
}

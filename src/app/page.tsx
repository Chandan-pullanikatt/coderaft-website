import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-20 text-center flex flex-col items-center">
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6 mt-4">
          Empowering Your Business <br className="hidden md:block" />
          with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#06B6D4]">Next-Gen Tech</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
          Calicut’s top tech consultancy for UI/UX, Web/Mobile Apps, QR Systems, POS, and Attendance solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Button size="lg" className="bg-gradient-to-r from-[#00D4FF] to-[#06B6D4] text-[#0A2540] hover:opacity-90 font-medium border-0 h-12 px-8 text-lg rounded-full shadow-[0_0_15px_rgba(0,212,255,0.5)]">
            Start a Project
          </Button>
          <Button variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full backdrop-blur-sm border-white/20">
            View Portfolio
          </Button>
        </div>

        {/* Hero Visuals Placeholder */}
        <div className="w-full max-w-5xl h-64 md:h-96 rounded-2xl border border-border bg-white/5 flex items-center justify-center backdrop-blur shadow-2xl relative overflow-hidden">
          <div className="text-muted-foreground p-6 text-center">
            [Hero Visuals Placeholder: TableTreats QR + Dashboard + EV bike]
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="container mx-auto px-4 py-8 border-y border-border bg-white/5">
        <p className="text-center text-sm text-muted-foreground font-medium mb-6 uppercase tracking-widest">Trusted By Innovative Companies</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale filter">
          <div className="font-heading font-bold text-xl">Network Masters Hub</div>
          <div className="font-heading font-bold text-xl">TableTreats</div>
          <div className="font-heading font-bold text-xl">Tetla Motors</div>
        </div>
      </section>

      {/* Why Choose Coderaft */}
      <section className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Why Choose Coderaft?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">We deliver scalable, premium, and performant solutions.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Premium UI/UX", desc: "We design experiences that wow users and drive conversions." },
            { title: "Fast Delivery", desc: "Agile methodologies ensure you go to market quickly." },
            { title: "Scalable Tech", desc: "Built on Next.js, our solutions grow with your business." },
            { title: "Local Expertise", desc: "Calicut's finest engineers right at your doorstep." }
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl border border-border bg-white/5 hover:bg-white/10 transition-colors">
              <h3 className="font-heading text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Cost Estimator */}
      <section className="container mx-auto px-4 max-w-3xl">
        <div className="p-8 rounded-3xl border border-border bg-gradient-to-b from-white/5 to-transparent backdrop-blur">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">Project Cost Estimator</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Project Type</label>
                <select className="w-full p-3 rounded-lg bg-black/20 border border-border text-foreground">
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>E-Commerce</option>
                  <option>Landing Page</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Timeline</label>
                <select className="w-full p-3 rounded-lg bg-black/20 border border-border text-foreground">
                  <option>1-2 Months (Rush)</option>
                  <option>3-4 Months (Standard)</option>
                  <option>5+ Months (Complex)</option>
                </select>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Estimated Cost</p>
                <p className="text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#06B6D4]">$5,000 - $10,000</p>
              </div>
              <Button size="lg" className="w-full md:w-auto">Get Detailed Quote</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const skillsRow1 = ['SEO', 'Social Media Analytics', 'Content Strategy', 'UX/UI Design', 'Motion Graphics', 'Network Troubleshooting'];
const skillsRow2 = ['Google Suite', 'Adobe Suite', 'MS Office', 'HubSpot', 'Jira', 'Hootsuite', 'AI Tools', 'Figma', 'Webflow'];
const skillsRow3 = ['WordPress', 'Canva', 'Salesforce', 'Zoom', 'Gong', 'Oracle', 'Account Management', 'CRM', 'Lead Generation', 'Mentoring'];

function MarqueeRow({ items, direction = 1, speed = 20 }: { items: string[], direction?: number, speed?: number }) {
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <div 
      className="flex w-full overflow-hidden py-3"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
    >
      <motion.div
        className="flex gap-4 min-w-max"
        animate={{ x: direction === 1 ? ["0%", "-33.333333%"] : ["-33.333333%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {duplicatedItems.map((item, index) => (
          <div 
            key={index} 
            className="glass-card px-6 py-3 font-semibold text-slate-700 shadow-sm border-black/5 flex-shrink-0 hover:bg-white hover:scale-105 hover:shadow-md transition-all cursor-default bg-white/60"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function InfiniteSkills() {
  return (
    <div className="relative w-full h-[300px] lg:h-[500px] flex flex-col justify-center gap-2 overflow-hidden mt-8 lg:mt-0">
      <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 -rotate-2 scale-100 lg:scale-105">
        <MarqueeRow items={skillsRow1} direction={1} speed={25} />
        <MarqueeRow items={skillsRow2} direction={-1} speed={30} />
        <MarqueeRow items={skillsRow3} direction={1} speed={28} />
      </div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Animation Timeline for Awwwards-style entry
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(".hero-anim", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2
      });
      
      tl.from(".hero-photo", {
        scale: 0.5,
        opacity: 0,
        rotation: -10,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      }, "-=1.2");
      
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12" ref={containerRef}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pointer-events-none">
        <div className="max-w-2xl pointer-events-auto">
          {/* Seamless Photo Integration */}
          <div className="mb-8 relative inline-block hero-photo">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-110 animate-pulse"></div>
            <img 
              src="/profile.jpg" 
              alt="Raunaq Saluja" 
              className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-[2rem] shadow-2xl shadow-blue-500/20 border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>

          <div className="overflow-hidden mb-2">
            <h2 className="text-xl text-slate-500 font-semibold tracking-wide uppercase hero-anim">Hi, I'm</h2>
          </div>
          <div className="overflow-hidden mb-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 drop-shadow-sm hero-anim">
              Raunaq Saluja
            </h1>
          </div>
          <div className="overflow-hidden mb-6">
            <h3 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 hero-anim pb-2">
              Digital Strategist & Tech Problem-Solver
            </h3>
          </div>
          <div className="overflow-hidden mb-10">
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium hero-anim">
              I spent the last 8+ years transforming complex technical challenges into high-converting campaigns.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 hero-anim">
            <a href="#projects" className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:scale-105 hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/20">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Infinite Marquee Skills Animation on the Right */}
        <div className="hero-anim pointer-events-auto">
          <InfiniteSkills />
        </div>
      </div>
    </section>
  );
}

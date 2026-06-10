import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-white/70 backdrop-blur-md py-4 border-slate-200 shadow-sm' : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-black bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">
          RS
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500 tracking-wide uppercase">
          <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
            Resume
          </a>
          <a href="#contact" className="px-5 py-2 rounded-full bg-white border border-slate-200 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

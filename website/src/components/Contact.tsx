import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-outfit relative z-10 text-slate-900">Let's Connect</h2>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto mb-16 relative z-10">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative z-10">
            <motion.a 
              href="mailto:rsaluja363@gmail.com"
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex flex-col items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl min-w-[240px] hover:bg-slate-50 transition-colors shadow-lg shadow-slate-200/50"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <Mail />
              </div>
              <span className="font-bold text-lg text-slate-800">rsaluja363@gmail.com</span>
            </motion.a>

            <motion.a 
              href="tel:2365123686"
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex flex-col items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl min-w-[240px] hover:bg-slate-50 transition-colors shadow-lg shadow-slate-200/50"
            >
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                <Phone />
              </div>
              <span className="font-bold text-lg text-slate-800">236-512-3686</span>
            </motion.a>

            <motion.div 
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex flex-col items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl min-w-[240px] hover:bg-slate-50 transition-colors cursor-default shadow-lg shadow-slate-200/50"
            >
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <MapPin />
              </div>
              <span className="font-bold text-lg text-slate-800">Burnaby, Canada</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

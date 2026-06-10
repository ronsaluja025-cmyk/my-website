import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'PG Diploma in Global Business',
    school: 'Kwantlen Polytechnic University',
    date: 'Sept 2020 – Apr 2022'
  },
  {
    degree: 'BBA in Logistics and Supply Chain',
    school: 'University of Petroleum and Energy Studies',
    date: 'Jul 2015 – May 2018'
  }
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-12 font-outfit text-slate-900">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl group-hover:bg-blue-200 transition-colors" />
              <h3 className="text-2xl font-bold mb-2 relative z-10 text-slate-900">{item.degree}</h3>
              <h4 className="text-lg text-slate-600 font-medium mb-6 relative z-10">{item.school}</h4>
              <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-full text-sm font-bold relative z-10 shadow-sm">
                {item.date}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

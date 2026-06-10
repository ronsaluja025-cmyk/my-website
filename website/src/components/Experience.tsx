import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Digital Marketing Manager',
    company: 'Dopesauce',
    date: '2023 – 2026',
    y: 80,
    bullets: ['Driven 45% increase in qualified leads.', 'Managed 6-figure budget with 3.5x ROAS.']
  },
  {
    id: 2,
    title: 'Tech Consultant',
    company: 'Rogers',
    date: '2024 – 2025',
    y: 0,
    bullets: ['Resolved 95% of escalated issues.', 'Directed software rollouts.']
  },
  {
    id: 3,
    title: 'Marketing Lead',
    company: 'Designline',
    date: '2021 – 2024',
    y: 40,
    bullets: ['30% increase in first-year sales.', 'Expanded active customer base by 20%.']
  },
  {
    id: 4,
    title: 'Marketing Coordinator',
    company: '5amarketing',
    date: '2018 – 2020',
    y: 120,
    bullets: ['25% lift in engagement.', 'Grew audience base by 50%.']
  }
];

function MobileDeck() {
  const [cards, setCards] = useState(experiences);
  
  const handleTap = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const first = newCards.shift();
      if (first) newCards.push(first);
      return newCards;
    });
  };

  return (
    <div className="md:hidden relative h-[450px] w-full flex items-center justify-center overflow-hidden perspective-1000">
      {cards.map((exp, index) => {
        const isTop = index === 0;
        return (
          <motion.div
            key={exp.id}
            layout
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ 
              scale: 1 - index * 0.05, 
              y: index * 20, 
              opacity: index > 2 ? 0 : 1 - index * 0.2,
              zIndex: cards.length - index,
              rotateX: index * 5
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute w-full max-w-sm glass-card p-6 shadow-2xl cursor-pointer"
            onClick={isTop ? handleTap : undefined}
          >
            <div className="text-blue-600 font-bold mb-1">{exp.date}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
            <div className="text-slate-600 font-medium mb-4">{exp.company}</div>
            <ul className="text-sm text-slate-500 space-y-2 list-disc pl-4 mb-4">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            {isTop && (
              <div className="mt-6 text-xs font-bold text-center text-blue-600 uppercase tracking-widest animate-pulse flex justify-center items-center gap-2">
                Tap for next
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-12 font-outfit text-slate-900">Experience Graph</h2>
        
        {/* Desktop View: Horizontal Graph */}
        <div className="relative w-full h-[600px] bg-white rounded-3xl border border-slate-200 p-8 hidden md:block overflow-x-auto overflow-y-hidden custom-scrollbar shadow-lg shadow-slate-200/50">
          <div className="relative w-[1200px] h-full mx-auto">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.path
                d="M 150,230 C 300,230 300,150 450,150 C 600,150 600,190 750,190 C 900,190 900,270 1050,270"
                fill="none"
                stroke="rgba(59, 130, 246, 0.5)"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>

            {experiences.map((exp, index) => {
              // X positions: 150, 450, 750, 1050
              const xPos = 150 + index * 300;
              // Y positions for line: 230, 150, 190, 270
              const lineYPos = index === 0 ? 230 : index === 1 ? 150 : index === 2 ? 190 : 270;
              // Node dot is at (xPos, lineYPos)
              // We position the card above or below the dot slightly
              
              return (
                <motion.div
                  key={exp.id}
                  className="absolute glass-card w-64 p-5 cursor-pointer z-10"
                  style={{
                    left: `${xPos - 128}px`,
                    top: `${lineYPos - 120}px`
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  <div className="w-4 h-4 bg-blue-600 rounded-full absolute -bottom-2 left-1/2 -translate-x-1/2 shadow-[0_0_15px_#2563eb]" />
                  <div className="text-blue-600 font-bold mb-1">{exp.date}</div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-1">{exp.title}</h3>
                  <div className="text-slate-500 font-medium mb-3">{exp.company}</div>
                  <ul className="text-sm text-slate-500 space-y-1 list-disc pl-4">
                    {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Deck of Flashcards */}
        <MobileDeck />
        
      </motion.div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { 
    name: 'Prota Ventures', 
    link: 'https://protaventures.webflow.io/', 
    image: 'https://cdn.prod.website-files.com/646f774f9649a1117c41dfaf/6943f57854d7bd6349c8666f_prota-capital.jpg',
    metrics: [
      { label: 'Conversions', value: 'Boosted venture form submissions by 28% via UI redesign.' },
      { label: 'Speed', value: 'Reduced core web vitals interaction time by 1.4 seconds.' },
      { label: 'Leads', value: 'Captured 35% more founder pitches using HubSpot integrations.' }
    ]
  },
  { 
    name: 'Studio-5B', 
    link: 'https://www.studio-5b.com/', 
    image: 'https://cdn.prod.website-files.com/646f774f9649a1117c41dfaf/686a431fc6a95c70143f516b_studio-5b.jpg',
    metrics: [
      { label: 'SEO', value: 'Increased organic search traffic by 40% with a targeted audit.' },
      { label: 'Engagement', value: 'Raised average dwell time from 1.2 to 3.5 minutes.' },
      { label: 'Retention', value: 'Dropped bounce rate by 18% by restructuring site navigation.' }
    ]
  },
  { 
    name: 'Night Owl Bars', 
    link: 'https://www.nightowlbars.ca/', 
    image: 'https://cdn.prod.website-files.com/646f774f9649a1117c41dfaf/686a43202c73e82da8f76287_nightowlbars.jpg',
    metrics: [
      { label: 'Local Leads', value: 'Drove a 55% surge in reservations via geo-targeted pages.' },
      { label: 'Mobile UX', value: 'Accelerated mobile conversion rates by 22%.' },
      { label: 'Ads', value: 'Achieved a 3.2x ROAS on weekend promotions using tracking pixels.' }
    ]
  },
  { 
    name: 'HopperHQ', 
    link: 'https://www.hopperhq.com/', 
    image: 'https://cdn.prod.website-files.com/646f774f9649a1117c41dfaf/686a431fe26af9bea3d30e09_hopperhq.jpg',
    metrics: [
      { label: 'Sign-ups', value: 'Lifted free-trial sign-ups by 15% through funnel optimization.' },
      { label: 'A/B Testing', value: 'Decreased pricing-page drop-off rates by 12%.' },
      { label: 'Acquisition', value: 'Lowered CPA by 14% with high-converting custom landing pages.' }
    ]
  },
  { 
    name: 'Alitheon', 
    link: 'https://alitheon-avi.webflow.io/', 
    image: 'https://cdn.prod.website-files.com/646f774f9649a1117c41dfaf/686a431f2c73e82da8f7622f_alitheon-avi.jpg',
    metrics: [
      { label: 'B2B Leads', value: 'Boosted enterprise whitepaper downloads by 45%.' },
      { label: 'Interaction', value: 'Increased feature engagement by 30% using custom scroll animations.' },
      { label: 'Analytics', value: 'Tracked complex demo clicks with 100% data accuracy in GA4.' }
    ]
  },
  { 
    name: 'Soen Audio', 
    link: 'https://soen-audio.webflow.io/', 
    image: 'https://cdn.prod.website-files.com/646f774f9649a1117c41dfaf/686a431f575db0cce5e07f8d_soen-audio.jpg',
    metrics: [
      { label: 'E-commerce', value: 'Elevated add-to-cart actions by 24% by optimizing checkout.' },
      { label: 'Performance', value: 'Boosted page load speeds by 35% by compressing 3D assets.' },
      { label: 'Retention', value: 'Grew the newsletter subscriber base by 40% in 60 days.' }
    ]
  },
  { 
    name: 'H20 Studio', 
    link: 'https://h20studio.webflow.io/', 
    image: 'https://cdn.prod.website-files.com/646f774f9649a1117c41dfaf/686a45510228fa3d7de9f08c_galaxy%20irl%20shopping.jpg',
    metrics: [
      { label: 'Workflows', value: 'Sped up client response times by 50% using automated CRM triggers.' },
      { label: 'Inquiries', value: 'Grew high-ticket consultation requests by 20% through layout redesigns.' },
      { label: 'Mobile', value: 'Stabilized mobile conversions by resolving cross-browser bugs.' }
    ]
  },
  { 
    name: 'Dendron', 
    link: 'https://www.dendron.so/', 
    image: 'https://cdn.prod.website-files.com/646f774f9649a1117c41dfaf/686a431fb2915c76d2afa03f_dendron.jpg',
    metrics: [
      { label: 'Support', value: 'Decreased documentation-related tickets by 30% by improving search.' },
      { label: 'Growth', value: 'Lifted tool installations by 25% with developer-focused product pages.' },
      { label: 'Core Vitals', value: 'Improved desktop performance scores to 95+ on Google PageSpeed Insights.' }
    ]
  }
];

function DesktopProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block glass-card overflow-hidden relative h-[400px] cursor-default rounded-3xl shadow-2xl"
    >
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />
      </div>
      
      {/* Default Overlay visible before hover */}
      <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
      
      {/* Default Title visible before hover */}
      <div className={`absolute bottom-0 left-0 p-6 z-20 transition-all duration-500 ${isHovered ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
        <h3 className="text-2xl font-bold text-white drop-shadow-md">{project.name}</h3>
      </div>

      {/* Slide-up Drawer on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 z-30 bg-white/90 backdrop-blur-xl p-6 flex flex-col justify-between border-t border-slate-200"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">{project.name}</h3>
              <div className="space-y-4">
                {project.metrics.map((m, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1) }}
                    className="text-sm text-slate-600"
                  >
                    <span className="font-bold text-blue-600 block mb-1 tracking-wide uppercase text-xs">{m.label}</span>
                    <p className="leading-relaxed font-medium">{m.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 w-full py-3 bg-slate-900 text-white font-bold rounded-xl text-center hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/20"
            >
              View Live Site &rarr;
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function MobileProjectDeck() {
  const [cards, setCards] = useState(projects);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const first = newCards.shift();
        if (first) newCards.push(first);
        return newCards;
      });
    }, 150);
  };

  const handleTap = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="md:hidden flex flex-col items-center mt-8">
      <div className="relative h-[480px] sm:h-[420px] w-full max-w-sm flex items-center justify-center overflow-hidden perspective-1000">
        {cards.map((project, index) => {
          const isTop = index === 0;
          return (
            <motion.div
              key={project.name}
              layout
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ 
                scale: 1 - index * 0.05, 
                y: index * 20, 
                opacity: index > 2 ? 0 : 1 - index * 0.2,
                zIndex: cards.length - index,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`absolute w-full max-w-[300px] sm:max-w-xs h-[400px] sm:h-[350px] ${isTop ? 'cursor-pointer' : 'cursor-default'}`}
              style={{ pointerEvents: isTop ? 'auto' : 'none' }}
              onClick={isTop ? handleTap : undefined}
            >
              <motion.div
                className="w-full h-full relative preserve-3d"
                animate={{ rotateY: isTop && isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden glass-card overflow-hidden shadow-2xl rounded-3xl border border-black/5 bg-white">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10" />
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{project.name}</h3>
                    <div className="mx-auto w-max px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest border border-white/30 animate-pulse shadow-md">
                      Tap to flip
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div 
                  className="absolute inset-0 backface-hidden glass-card shadow-2xl rounded-3xl border border-slate-200 p-6 flex flex-col justify-between"
                  style={{ transform: "rotateY(180deg)", backgroundColor: "rgba(255, 255, 255, 0.95)" }}
                >
                  <div className="overflow-y-auto custom-scrollbar pr-2 pb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">{project.name}</h3>
                    <div className="space-y-4">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="text-sm text-slate-600">
                          <span className="font-bold text-blue-600 block mb-1 text-xs uppercase tracking-wide">{m.label}</span>
                          <p className="leading-tight font-medium">{m.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-center transition-colors flex-shrink-0 shadow-lg shadow-blue-600/20"
                  >
                    Visit Website &rarr;
                  </a>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      <button 
        onClick={handleNext}
        className="mt-6 px-10 py-4 rounded-full bg-white border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 active:scale-95 transition-all flex items-center gap-2 z-50 uppercase tracking-widest text-xs shadow-md"
      >
        Next Project
      </button>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 font-outfit text-slate-900">Selected Projects</h2>
            <p className="text-slate-600 text-lg max-w-xl font-medium">A showcase of projects I contributed to, highlighting the measurable impact and results delivered.</p>
          </div>
          <div className="hidden md:block px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-bold">
            Hover cards for details
          </div>
        </div>
        
        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <DesktopProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* Mobile View: Flashcard Deck */}
        <MobileProjectDeck />

      </motion.div>
    </section>
  );
}

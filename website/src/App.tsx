import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Scene from './components/Scene';
import Lenis from 'lenis';

function App() {
  React.useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500/30">
      <CustomCursor />
      
      {/* Global 3D Background */}
      <Scene />

      <Navbar />
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 space-y-32">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center text-slate-500 border-t border-black/5">
        <p>&copy; {new Date().getFullYear()} Raunaq Saluja. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MouseTrail() {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let id = 0;
    const handleMouseMove = (e: MouseEvent) => {
      setTrail((prev) => [
        ...prev.slice(-20), // Keep last 20 positions
        { x: e.clientX, y: e.clientY, id: id++ },
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {trail.map((point) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute w-4 h-4 bg-blue-500 rounded-full blur-[2px] mix-blend-screen"
            style={{
              left: point.x - 8,
              top: point.y - 8,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

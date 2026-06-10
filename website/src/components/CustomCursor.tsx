import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable custom cursor on devices with a fine pointer (desktops)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    // Use gsap.quickTo for highly performant mouse following
    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    
    const xToFollower = gsap.quickTo(follower, "x", { duration: 0.4, ease: "power3" });
    const yToFollower = gsap.quickTo(follower, "y", { duration: 0.4, ease: "power3" });

    // Initial center position (avoids snapping from 0,0)
    xToCursor(window.innerWidth / 2);
    yToCursor(window.innerHeight / 2);
    xToFollower(window.innerWidth / 2);
    yToFollower(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    const handleMouseDown = () => {
      gsap.to(cursor, { scale: 0.5, duration: 0.2 });
      gsap.to(follower, { scale: 0.8, duration: 0.2 });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(follower, { scale: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // MutationObserver to attach hover events to dynamically added links/buttons
    const attachHoverEvents = () => {
      const interactables = document.querySelectorAll('a, button, input, textarea');
      
      const handleMouseEnter = () => {
        gsap.to(follower, { scale: 2.5, backgroundColor: "rgba(255, 255, 255, 0.1)", duration: 0.3 });
        gsap.to(cursor, { opacity: 0, duration: 0.3 });
      };

      const handleMouseLeave = () => {
        gsap.to(follower, { scale: 1, backgroundColor: "transparent", duration: 0.3 });
        gsap.to(cursor, { opacity: 1, duration: 0.3 });
      };

      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    attachHoverEvents();

    const observer = new MutationObserver(attachHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"
      />
    </>
  );
}

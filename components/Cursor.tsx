'use client'
import React, { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const isSmallViewport = window.innerWidth <= 640; // Adjust the breakpoint (640px) as needed for small viewports

    if (!isSmallViewport) {
      // Add the custom cursor styles to the body
      document.body.classList.add('cursor-none');
      document.body.style.cursor = 'none'; // set cursor style to 'none'

      const moveCursor = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      }

      // When the component mounts, we listen for mouse move events
      window.addEventListener("mousemove", moveCursor);

      // When the component unmounts, we remove the event listener
      return () => window.removeEventListener("mousemove", moveCursor);
    }
  }, []);

  return (
    <div 
      className="bg-black w-4 h-4 absolute pointer-events-none rounded z-[500000] hidden sm:block" 
      style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`, 
          transform: 'translate(-50%, -50%)' ,
          opacity: 0.6  
      }}
    />
  );
}

'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    handleViewportChange(); // Check initial viewport size
    window.addEventListener('resize', handleViewportChange); // Add event listener for viewport changes
    return () => {
      window.removeEventListener('resize', handleViewportChange); // Remove event listener on component unmount
    };
  }, []);

  const handleViewportChange = () => {
    setIsSmallViewport(window.innerWidth <= 640); // Adjust the breakpoint (640px) as needed for small viewports
  };

  return (
    <nav className={`font-Manrope flex items-center justify-between w-full p-6 bg-custom-gray text-lg sm:text-base ${isSmallViewport ? 'text-xs' : 'xs:text-sm'} z-5000 ${isMounted ? 'animate-fadeIn' : ''}`}>
      <Link href="/">
        
          <img
            src={isSmallViewport ? '/Blok_small.png' : '/Blok-logo2.png'}
            alt="LOGO"
            className={`w-[18vw]  ${isSmallViewport ? 'w-[6vw]' : ''} cursor-pointer hover:opacity-50 transition-all`} // Adjust the width and height for the logo
          />
        
      </Link>
      <div className="font-Manrope flex space-x-4 text-black cursor-pointer hover:opacity-50 invertedText">
      <Link href="/Portfolio">
        <div>Work</div>
        </Link>
        <Link href="/Team">
          <div>Team</div>
        </Link>
        <Link href="/ContactUs">
          <div>Contact Us</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

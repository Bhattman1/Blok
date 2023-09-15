'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar2 = () => {
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    handleViewportChange();
    window.addEventListener('resize', handleViewportChange);
    
    // Set the navbar to fade in after 3 seconds
    setTimeout(() => {
      setIsNavbarVisible(true);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleViewportChange);
    };
  }, []);

  const handleViewportChange = () => {
    setIsSmallViewport(window.innerWidth <= 640);
  };

  return (
<nav className={`font-Manrope flex items-center justify-between w-full p-6 text-xs sm:text-base fixed top-0 left-0 z-[10001] animate-fadeIn`}>
    <div className={`flex items-center`}>
        <Link href="/">
            <img
                src={isSmallViewport ? '/smallLogoScreen.svg' : '/Blok-logo2.png'}
                alt="LOGO"
                className={`w-[16vw] ${isSmallViewport ? 'w-[5vw]' : 'cursor-pointer hover:opacity-50 transition-all'}`}
            />
        </Link>
    </div>
    <div className={`fixed top-5 right-7 flex space-x-3 text-sm cursor-pointer hover:opacity-50 z-[10001] text-black`}>
        <Link href="/Portfolio">Work</Link>
        <Link href="/Team">Team</Link>
        <Link href="/ContactUs">Contact Us</Link>
    </div>
</nav>

  );
}

export default Navbar2;

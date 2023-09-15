'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  useEffect(() => {
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

export default Navbar;

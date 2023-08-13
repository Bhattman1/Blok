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
    <nav className={`font-Manrope flex items-center justify-between w-full p-6 bg-custom-gray text-lg sm:text-base ${isSmallViewport ? 'text-xs' : 'xs:text-sm'} fixed top-0 left-0 blackText2 z-[70000] transition-opacity duration-500 ${isNavbarVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Link href="/">
        <img
          src={isSmallViewport ? '/Blok_small.png' : '/Blok-logo2.png'}
          alt="LOGO"
          className={`w-[18vw] ${isSmallViewport ? 'w-[6vw]' : ''} cursor-pointer hover:opacity-50 transition-all `}
        />
      </Link>
      <div className="font-Manrope flex space-x-4 text-black cursor-pointer hover:opacity-50">
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

export default Navbar2;

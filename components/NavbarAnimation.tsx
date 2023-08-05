
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const NavbarAnimation = () => {
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
    <>
      <div
        className={`fixed inset-0 bg-black z-[5999] ${isMounted ? 'animate-slide-up' : ''}`}
      ></div>
      <nav
        className={`flex items-center justify-between w-full p-6 bg-custom-gray text-lg sm:text-base ${isSmallViewport ? 'text-xs' : 'xs:text-sm'} z-[6000] transition-all`}
        style={{
          color: isMounted ? '#000' : '#d3d3d3',
          transition: 'color 1s',
        }}
      >
        <Link href="/">
          <img
            src={isSmallViewport ? '/Blok_small.png' : '/Blok-logo2.png'}
            alt="LOGO"
            className={`w-[30vw]  ${isSmallViewport ? 'w-[4vw]' : ''} cursor-pointer hover:opacity-50 transition-all`} // Adjust the width and height for the logo
            style={{
              filter: isMounted ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 1s',
            }}
          />
        </Link>
        <div className="flex space-x-4 text-black cursor-pointer hover:opacity-50">
        <Link href="/Portfolio">
        <div>Portfolio</div>
        </Link>
          <Link href="/Team">
            <div>Team</div>
          </Link>
          <Link href="/ContactUs">
            <div>Contact Us</div>
          </Link>
        </div>
      </nav>
      <div className="fixed top-[60px] bottom-0 left-0 right-0 flex items-center justify-center bg-custom-gray z-0">
        <div className="aspect-w-16 aspect-h-9 max-w-full w-full">
          <video className="object-cover pointer-events-none" src="/catchphraseCropped.mp4" autoPlay loop muted />
        </div>
      </div>
    </>
  );
};

export default NavbarAnimation;

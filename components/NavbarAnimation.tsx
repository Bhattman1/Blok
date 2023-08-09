
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const NavbarAnimation = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    handleViewportChange();
    window.addEventListener('resize', handleViewportChange);

    // A timeout to change the navbar color after the animation. 
    // Assuming the animation takes 1s. Adjust this based on your animation's duration.
    setTimeout(() => {
      setIsAnimationComplete(true);
    }, 1000);

    return () => {
      window.removeEventListener('resize', handleViewportChange);
    };
  }, []);

  const handleViewportChange = () => {
    setIsSmallViewport(window.innerWidth <= 640);
  };

  return (
    <>
      <div
       // className={`fixed inset-0 bg-black z-[1] ${isMounted ? 'animate-slide-up z-[1]' : ''}`}
        className={`fixed inset-0 bg-black z-[1] ${isMounted ? 'animate-slide-up z-[1]' : ''}`}
      ></div>

<nav className={`flex`}>
<div className="fixed top-6 left-6 z-[10001] animate-fadeIn invertedLogo">
  <Link href="/YourDesiredLink" className="cursor-pointer hover:opacity-50 transition-all">
      <img
          src={isSmallViewport ? '/Blok_small.png' : '/Blok-logo2.png'}
          alt="LOGO"
          className={`w-[18vw] ${isSmallViewport ? 'w-[6vw]' : ''} invertedLogo`} // Added the invertedLogo class here
      />
  </Link>
</div>


            <div className="font-manrope fixed top-6 right-6 flex space-x-4 cursor-pointer hover:opacity-50 z-[10001] invertedText animate-fadeIn">  
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

      <div className="fixed top-[60px] bottom-0 left-0 right-0 flex items-center justify-center bg-custom-gray z-60000 ">
        <div className="aspect-w-16 aspect-h-9 max-w-full w-full z-600">
          <video className="object-cover pointer-events-none z-600" src="/catchphraseCropped.mp4" autoPlay loop muted />
        </div>
      </div>
    </>
  );
};

export default NavbarAnimation;




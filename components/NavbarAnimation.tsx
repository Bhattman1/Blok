'use client'
'use client'
// NavbarAnimation.tsx
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const NavbarAnimation = () => {
  const blackScreenRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  const [blackScreenAnimationCompleted, setBlackScreenAnimationCompleted] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const replacementWords = ["ACTUALLY ","ACTUALLY ", "TRULY", "SURELY", "HONESTLY","ACTUALLY ", "TRULY", "SURELY", "HONESTLY","ACTUALLY ", "TRULY", "SURELY", "HONESTLY","ACTUALLY ", "TRULY", "SURELY", "HONESTLY","ACTUALLY ", "TRULY", "SURELY", "HONESTLY", "ACTUALLY ","ACTUALLY ", "TRULY", "SURELY", "HONESTLY","ACTUALLY ", "TRULY", "SURELY", "HONESTLY","ACTUALLY ", "TRULY", "SURELY", "HONESTLY","ACTUALLY ", "TRULY", "SURELY", "HONESTLY","ACTUALLY ", "TRULY", "SURELY", "HONESTLY", "ACTUALLY ","ACTUALLY ", "TRULY", "SURELY", "HONESTLY","ACTUALLY ", "TRULY", "SURELY", "HONESTLY","ACTUALLY ", "TRULY", "SURELY", "HONESTLY","ACTUALLY ", "TRULY", "SURELY", "HONESTLY","ACTUALLY ", "TRULY", "SURELY", "HONESTLY","__________"];

  const longestWordLength = Math.max(...replacementWords.map(word => word.length));
 
 
 
  const handleViewportChange = () => {
    setIsSmallViewport(window.innerWidth <= 640);
  };

  useEffect(() => {
    setCurrentWordIndex(0);
    const curtainDelay = 2000;

    setTimeout(() => {
      setIsMounted(true);
    }, curtainDelay);

    handleViewportChange();

    const handleAnimationEnd = () => {
      setBlackScreenAnimationCompleted(true);
    };

    window.addEventListener('resize', handleViewportChange);
    if (blackScreenRef.current) {
      blackScreenRef.current.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      window.removeEventListener('resize', handleViewportChange);
      if (blackScreenRef.current) {
        blackScreenRef.current.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (blackScreenAnimationCompleted) {
      intervalId = setInterval(() => {
        setCurrentWordIndex(prev => (prev + 1) % replacementWords.length);
      }, 2000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [blackScreenAnimationCompleted]);



  return (
    <>
      <div ref={blackScreenRef} className={`fixed inset-0 bg-black z-10 ${isMounted ? 'animate-slide-up2' : ''}`}>
      <div className={`fixed inset-0 flex items-center justify-center z-50 opacity-100  animate-fadeIn`}>
  <img src="/smallLogoScreen.svg" alt="Small Logo" className="text-4xl invert w-1/6"/>
</div>

      </div>
      


      <nav className={`font-Manrope flex items-center justify-between w-full p-6 text-xs`}>
    <div className={`flex items-center justify-between w-full p-6 top-0 left-0 fixed z-[10001] element-to-fade invertedLogo`}>
        <Link href="/">
            <img
                src={isSmallViewport ? '/smallLogoScreen.svg' : '/Blok-logo2.png'}
                alt="LOGO"
                className={`w-[16vw] ${isSmallViewport ? 'w-[5vw]' : ''}`}
            />
        </Link>
    </div>
    <div className={`fixed top-5 right-7 flex space-x-3 text-sm cursor-pointer hover:opacity-50 z-[10001] invertedText element-to-fade`}>
        <Link href="/Portfolio">Work</Link>
        <Link href="/Team">Team</Link>
        <Link href="/ContactUs">Contact Us</Link>
    </div>
</nav>




<div className={`text-black font-Manrope fixed top-[60px] bottom-0 left-0 right-0 flex items-center justify-center animate-fadeIn z-0 mt-[-70px]`}>
    <div className={`${isSmallViewport ? 'text-2xl' : 'text-sm'} sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-center w-full`}>
        <span className={`${isSmallViewport ? 'text-base' : ''}`}>WEBDESIGN THAT</span>
        <br />
        <div className={`inline-flex items-center justify-between ${isSmallViewport ? '' : 'mt-[20px]'} `}>
    <div style={{ minWidth: `${longestWordLength}ch` }} className={`${isSmallViewport ? 'mr-1.5 text-right moved-up-sm' : 'mr-5 text-right'}`}>
        <span className={`always-black ${isSmallViewport ? 'text-base' : ''}`}>
            {blackScreenAnimationCompleted && replacementWords[currentWordIndex]}
        </span>
    </div>
    <span className={`always-black ${isSmallViewport ? 'text-base' : ''}`}>LOOKS GOOD</span>
</div>

    </div>
</div>
    </>
);
  
};

export default NavbarAnimation;




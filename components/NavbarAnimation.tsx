
'use client'
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const NavbarAnimation = () => {
  const blackScreenRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  const [blackScreenAnimationCompleted, setBlackScreenAnimationCompleted] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const replacementWords = [" ", "ACTUALLY", "TRULY", "SURELY"];
  const longestWordLength = Math.max(...replacementWords.map(word => word.length));

  const handleViewportChange = () => {
    setIsSmallViewport(window.innerWidth <= 640);
  };

  useEffect(() => {
    setIsMounted(true);
    handleViewportChange();
    
    const handleAnimationEnd = () => {
      console.log("Animation ended!");
      setBlackScreenAnimationCompleted(true);
    };
    
    const intervalId = setInterval(() => {
      setCurrentWordIndex(prev => (prev + 1) % replacementWords.length);
    }, 1000);

    window.addEventListener('resize', handleViewportChange);
    blackScreenRef.current.addEventListener('animationend', handleAnimationEnd);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleViewportChange);
      if (blackScreenRef.current) {
        blackScreenRef.current.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, []);
  return (
    <>
      <div ref={blackScreenRef} className={`fixed inset-0 bg-black z-10 ${isMounted ? 'animate-slide-up' : ''}`}></div>

      <nav className={`font-Manrope flex items-center justify-between w-full p-6 text-lg sm:text-base ${isSmallViewport ? 'text-xs' : 'xs:text-sm'}`}>
        <div className={`font-Manrope flex items-center justify-between w-full p-6 top-0 left-0 fixed z-[10001] animate-fadeIn ${blackScreenAnimationCompleted ? 'blackLogo' : 'invertedLogo'}`}>
          <Link href="/">
            <img
              src={isSmallViewport ? '/Blok_small.png' : '/Blok-logo2.png'}
              alt="LOGO"
              className={`w-[18vw] ${isSmallViewport ? 'w-[6vw]' : ''} cursor-pointer hover:opacity-50 transition-all`}
            />
          </Link>
        </div>
        
        <div className={`font-Manrope fixed top-6 right-6 flex space-x-4 cursor-pointer hover:opacity-50 z-[10001] ${blackScreenAnimationCompleted ? 'noBlend' : 'invertedText'} font-bold animate-fadeIn text-black`}>
          <Link href="/Portfolio">Work</Link>
          <Link href="/Team">Team</Link>
          <Link href="/ContactUs">Contact Us</Link>
        </div>
      </nav>

      <div className={`font-Manrope fixed top-[60px] bottom-0 left-0 right-0 flex items-center justify-center bg-transparent animate-fadeIn z-[50] ${blackScreenAnimationCompleted ? 'noBlend' : 'invertedText'}`}>
    <div className="max-w-full w-full text-center text-base xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl">
        WEBDESIGN THAT <br />
        <div className="inline-flex items-center">
            <div style={{ width: `${longestWordLength}ch`, textAlign: 'right', marginRight: '0.75ch' }}>
                {replacementWords[currentWordIndex]}
            </div>
            <div> LOOKS GOOD</div>
        </div>
    </div>
</div>

    </>
  );
};

export default NavbarAnimation;

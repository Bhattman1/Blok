
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const NavbarAnimation = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  

  useEffect(() => {
    setIsMounted(true);
    handleViewportChange();
    window.addEventListener('resize', handleViewportChange);

    // A timeout to change the navbar color after the animation. 
    // Assuming the animation takes 1s. Adjust this based on your animation's duration.
    

    return () => {
      window.removeEventListener('resize', handleViewportChange);
    };
  }, []);

  const handleViewportChange = () => {
    setIsSmallViewport(window.innerWidth <= 640);
  };


//

const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const replacementWords = [" ","ACTUALLY", "TRULY", "SURELY", "CLEARLY", "REALLY", "RIGHTLY", "ONLY", "FULLY", "ACTUALLY", "TRULY", "SURELY", "CLEARLY", "REALLY", "RIGHTLY", "DECIDEDLY", "DEFINITELY","ACTUALLY", "TRULY", "SURELY", "CLEARLY", "REALLY", "RIGHTLY", "DECIDEDLY", "DEFINITELY"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % replacementWords.length);
    }, 1000);

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, []);


  const longestWordLength = Math.max(...replacementWords.map(word => word.length));


//


// Assuming default background is black. Change the default value as needed.



  return (
    <>
       <div className={`fixed inset-0 bg-black z-10 ${isMounted ? 'animate-slide-up' : ''}`}></div>

<nav className={`flex`}>
<div className="fixed top-6 left-6 z-[10001] animate-fadeIn invertedLogo">
  <Link href="/" className="cursor-pointer hover:opacity-50 transition-all">
      <img
          src={isSmallViewport ? '/Blok_small.png' : '/Blok-logo2.png'}
          alt="LOGO"
          className={`w-[18vw] ${isSmallViewport ? 'w-[6vw]' : ''} invertedLogo`} // Added the invertedLogo class here
      />
  </Link>
</div>


            <div className="font-manrope fixed top-6 right-6 flex space-x-4 cursor-pointer hover:opacity-50 z-[10001] invertedText animate-fadeIn text-black">  
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

        <div className=" font-manrope fixed top-[60px] bottom-0 left-0 right-0 flex items-center justify-center bg-transparent animate-fadeIn z-[50] blackText text-black">
    <div className=" max-w-full w-full text-center text-base xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl blackText text-black">
        WEBDESIGN THAT <br />
        <div className="inline-flex items-center ">
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




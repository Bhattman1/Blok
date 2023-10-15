'use client';
import React, { useState, useEffect } from 'react';
import '../app/Team.css';

const Team = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isLoaded, setLoaded] = useState(false);
  const [isBlackScreenDone, setBlackScreenDone] = useState(false);
  const [isTextVisible, setTextVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false); // New state for content visibility
  const [fadeOutText, setFadeOutText] = useState(false);




  useEffect(() => {
    setTimeout(() => {
      setTextVisible(true);
      setTimeout(() => {
        setLoaded(true);
        setTimeout(() => {
          setBlackScreenDone(true);
          setFadeOutText(true);  // Initiate the text fade out immediately after black screen is done
          setTimeout(() => {
            setShowOverlay(false);
            setTimeout(() => {
              setContentVisible(true);
            }, 10);
          }, 1000);
        }, 2000);
      }, 1000);
    }, 2000);
  }, []);



  return (
    <>
      {showOverlay && (
        <>
          {!isBlackScreenDone && (
            <div
              className={`font-Manrope fixed inset-0 bg-black z-100 flex justify-center items-center ${
                isLoaded ? "animate-slideOut" : "animate-slideDown"
              }`}
            ></div>
          )}

<div
          className={`font-Manrope fixed inset-0 flex justify-center items-center z-60 transition-colors duration-500 ${
            isLoaded ? "text-black" : "text-custom-gray"
          } pointer-events-none`}
        >
          <p
  className={`
    text-sm sm:text-base md:text-lg lg:text-xl xl:text-4xl text-center m-6 ${
      fadeOutText ? "animate-fadeOut" : isTextVisible ? "transition-opacity duration-500 opacity-100" : "opacity-0"
    } whitespace-nowrap`}
>


              Come meet the team.
            </p>
          </div>
        </>
      )}

<div className={`flex flex-col lg:flex-row-reverse justify-center w-full max-w-screen-lg mx-auto lg:mx-0 ${contentVisible ? "transition-opacity duration-500 opacity-100" : "opacity-0"}`}>
    {/* Image container */}
    <div className="w-full lg:w-1/3 h-48 md:h-64 lg:h-auto lg:mr-2 mb-8 lg:mb-0"> {/* Increased margin-bottom to move image further down on mobile */}
        <img src="/Milind-and-Andre.png" alt="MeDre" className="w-full h-full object-contain lg:object-cover" />
    </div>

    {/* Text container */}
    <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start justify-center text-left text-black px-4 lg:pl-0 lg:pr-10">
        <h2 className="text-lg md:text-3xl lg:text-6xl mb-4 text-center lg:text-left">WE ARE<br />BLOK STUDIOS</h2> {/* Adjusted text size for mobile */}
        <p className="text-black text-xs text-transform: uppercase md:text-base lg:text-base text-transform: uppercase;"> {/* Adjusted text size for mobile */}
            Welcome to Blok, the digital architects shaping the future of web design and development. 
            <br /> <br />
            We are a team of dynamic innovators, creators, and builders who take pride in crafting pixel-perfect websites and delivering top-notch web solutions that stand out in today's digital landscape. 
            <br /><br />
            Established in 2023, our mission has been to empower businesses by providing them with unique, high-quality, and responsive web solutions that resonate with their brand identity, engage their audience, and catalyse their growth in the digital marketplace. 
            <br /><br />
            At Blok, we value innovation and creativity above all.
        </p>
        
        {/* Line with names */}
        <div className="mt-10 lg:mt-16 text-center lg:text-left w-full">
            <hr className="border-t border-gray-300 mb-2"/>
            <p>- Milind Bhatt & Andre Dao</p>
        </div>
    </div>
</div>



    </>
  );
};


export default Team;

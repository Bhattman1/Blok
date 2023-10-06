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
          setTimeout(() => {
            setFadeOutText(true);  // Initiate the text fade out
            setTimeout(() => {
              setShowOverlay(false);
              setTimeout(() => {
                setContentVisible(true);
              }, 10);
            }, 2000);
          }, 2000);
        }, 1000);
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

<div className={`flex justify-center items-center h-screen ${contentVisible ? "transition-opacity duration-500 opacity-100" : "opacity-0"}`}>
                <div className="flex flex-col md:flex-row-reverse justify-center w-full max-w-screen-lg mx-auto">
                    {/* Image container */}
                    <div className="w-full md:w-1/4 h-64 md:h-auto md:ml-4 mb-4 md:mb-0">
                        <img src="/Milind-and-Andre.png" alt="MeDre" className="w-full h-full object-contain md:object-cover" />
                    </div>

                    {/* Text container */}
<div className="w-full md:w-1/2 flex items-center justify-center md:justify-start text-left text-black ">
    <p className="uppercase text-black mx-10">Welcome to Blok, the digital architects shaping the future of web design and development. We are a team of dynamic innovators, creators, and builders who take pride in crafting pixel-perfect websites and delivering top-notch web solutions that stand out in today's digital landscape. Established in 2023, our mission has been to empower businesses by providing them with unique, high-quality, and responsive web solutions that resonate with their brand identity, engage their audience, and catalyse their growth in the digital marketplace. At Blok, we value innovation and creativity above all.</p>
</div>

                </div>
            </div>
    </>
  );
};

export default Team;

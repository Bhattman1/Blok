'use client'
import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [isBlackScreenDone, setBlackScreenDone] = useState(false);
  const [isTextVisible, setTextVisible] = useState(false);
  const [isWorkVisible, setWorkVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextVisible(true);
      setTimeout(() => {
        setWorkVisible(true);
        setTimeout(() => {
          setLoaded(true);
          setTimeout(() => {
            setBlackScreenDone(true);
          }, 1000); // duration of your slide out animation
        }, 2000);
      }, 1000); 
    }, 2000);
  }, []);

  return (
    <>
      { !isBlackScreenDone &&
        <div className={`font-manrope fixed inset-0 bg-black z-100 flex justify-center items-center
            ${isLoaded ? "animate-slideOut" : "animate-slideDown"}`}>
        </div>
      }
      <div className={`font-manrope fixed inset-0 flex justify-center items-center z-60 transition-colors duration-500 
            ${isLoaded ? "text-black" : "text-custom-gray"} pointer-events-none`}>
        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl text-center m-6
          ${isTextVisible ? "transition-opacity duration-500 opacity-100" : "opacity-0"}`}>
          A select Collection of BLOK STUDIOS work
        </p>
      </div>
      <p className={`font-manrope fixed bottom-0 left-0 text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-9xl text-black m-6
        ${isWorkVisible ? "transition-opacity duration-500 opacity-100" : "opacity-0"}`}>
        "1. WORK"
      </p>
    </>
  );
};
export default Loading;

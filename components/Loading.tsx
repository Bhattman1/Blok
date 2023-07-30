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
        <div className={`fixed inset-0 bg-black z-100 flex justify-center items-center
            ${isLoaded ? "animate-slideOut" : "animate-slideDown"}`}>
        </div>
      }
      <div className={`fixed inset-0 flex justify-center items-center z-60 transition-colors duration-500 
            ${isLoaded ? "text-black" : "text-custom-gray"} pointer-events-none`}>
        <p className={`text-4xl text-center 
          ${isTextVisible ? "transition-opacity duration-500 opacity-100" : "opacity-0"}`}>
          A select Collection of BLOK STUDIOS work
        </p>
      </div>
      <p className={`fixed bottom-0 left-0 text-black text-9xl
        ${isWorkVisible ? "transition-opacity duration-500 opacity-100" : "opacity-0"}`}>
        "1. WORK"
      </p>
    </>
  );
};

export default Loading;

'use client'
import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [isBlackScreenDone, setBlackScreenDone] = useState(false);
  const [isTextVisible, setTextVisible] = useState(false);
  const [isWorkVisible, setWorkVisible] = useState(false);

  const [isComingVisible, setComingVisible] = useState(false);
  const [isSoonVisible, setSoonVisible] = useState(false);

  const [isFadingOut, setFadingOut] = useState(false);


  setTimeout(() => {
    setComingVisible(true);
    setTimeout(() => {
      setSoonVisible(true);
    }, 500); // delay for the "soon" animation
  }, 500); // delay for the "coming" animation
  


  useEffect(() => {
    setTimeout(() => {
      setTextVisible(true);
      setTimeout(() => {
        setWorkVisible(true);
        setTimeout(() => {
          setLoaded(true);
          setTimeout(() => {
            setBlackScreenDone(true);
            setTimeout(() => {
              setFadingOut(true); // start the fade out
              setTimeout(() => {
                setComingVisible(true); // 'coming' fades in
                setTimeout(() => {
                  setSoonVisible(true); // 'soon' fades in and the animation sequence continues
                }, 500);
              }, 500); // half a second after 'A select Collection of BLOK STUDIOS work' fades in
            }, 2000); // set a delay for fade out
          }, 1000); // duration of your slide out animation
        }, 2000);
      }, 1000);
    }, 2000);
  }, []);
  

  

  return (
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
          isBlackScreenDone ? "opacity-0 " : isTextVisible ? (isFadingOut ? "transition-opacity duration-500 opacity-0" : "transition-opacity duration-500 opacity-100") : "opacity-0"
        } whitespace-nowrap`}
      >
        A select Collection of BLOK STUDIOS work
      </p>
    </div>
  
      <p
    className={`font-manrope fixed bottom-0 left-0 text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-9xl text-black m-6 ${
    isBlackScreenDone ? "opacity-0" : isWorkVisible ? (isFadingOut ? "transition-opacity duration-500 opacity-0" : "transition-opacity duration-500 opacity-100") : "opacity-0"
    }`}
  >
        




</p>

  
<div
  className={`font-Manrope fixed inset-0 flex justify-center items-center z-60 transition-colors duration-500 ${
    isLoaded ? "text-black" : "text-custom-gray"
  }`}
>
  <div className="flex flex-row space-x-4 pointer-events-none flex-wrap-nowrap"> {/* added flex-wrap-nowrap */}
  <p
  className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-7xl text-center m-2 transform ${
    isBlackScreenDone && isComingVisible ? "fade-in-opacity transition-transform duration-500 transform translate-y-0" : "fade-out-opacity translate-y-full"
}`}
>
  COMING
</p>
<p
  className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-7xl text-center m-2 transform ${
    isBlackScreenDone && isSoonVisible ? "fade-in-opacity transition-transform duration-500 transform translate-y-0" : "fade-out-opacity -translate-y-full"
}`}
>
  SOON
</p>


  </div>
</div>

    </>
  );
  
};
export default Loading;

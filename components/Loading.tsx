'use client';
import React, { useState, useEffect } from 'react';
import '../app/Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Loading = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isLoaded, setLoaded] = useState(false);
  const [isBlackScreenDone, setBlackScreenDone] = useState(false);
  const [isTextVisible, setTextVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false); 
  const [fadeOutText, setFadeOutText] = useState(false);

  const [showInstaText, setShowInstaText] = useState(false);

  useEffect(() => {
    const runAnimation = async () => {
        await new Promise(r => setTimeout(r, 2000));
        setTextVisible(true);

        await new Promise(r => setTimeout(r, 1000));
        setLoaded(true);

        await new Promise(r => setTimeout(r, 2000));
        setBlackScreenDone(true);
        setFadeOutText(true);

        await new Promise(r => setTimeout(r, 1000));
        setShowOverlay(false);

        await new Promise(r => setTimeout(r, 1000));
        setContentVisible(true);

        await new Promise(r => setTimeout(r, 1000));
        setShowInstaText(true);
    }

    runAnimation();
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
              A select Collection of BLOK STUDIOS work
            </p>
          </div>
        </>
      )}

      <div className={`font-Manrope fixed inset-0 flex justify-center items-center z-[250] transition-colors duration-500 text-custom-gray ${contentVisible ? "transition-opacity duration-500 opacity-100" : "opacity-0"}`}>
        <div className="flex flex-col items-center">
            <p 
                className="text-lg text-black md:text-3xl lg:text-6xl"
            >
                COMING SOON
            </p>
            <a href="https://www.instagram.com/blok.studios/" target="_blank" rel="noopener noreferrer">
                <div 
                    className={`transition-opacity text-black duration-500 mt-4 flex items-center space-x-2 text-sm md:text-base ${showInstaText ? "opacity-100" : "opacity-0"}`}
                >
                    <FontAwesomeIcon icon={faInstagram} />
                    <span style={{ marginLeft: '8px' }}>Follow us on Instagram for updates: blok.studios</span>
                </div>
            </a>
        </div>
      </div>
    </>
  );
};

export default Loading;

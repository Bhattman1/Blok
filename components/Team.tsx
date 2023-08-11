'use client';

import React from 'react';

const Team = () => {
  return (
    <>
      <div className="fixed inset-0 z-10"></div>
      
      <div className="flex justify-center items-center h-screen">
        
        {/* This wrapper centers the two inner items horizontally */}
        <div className="flex justify-center w-full max-w-screen-lg mx-auto">

          {/* This is the image container */}
          <div className="w-1/2 h-auto mr-4"> {/* mr-4 is to give some margin to the right of the image */}
            <img src="/MeDre.png" alt="MeDre" className="w-full h-full object-contain" />
          </div>

          {/* This is the text container */}
          <div className="w-1/2 flex items-center justify-start text-black">
            <p>Welcome to Blok, the digital architects shaping the future of web design and development. We are a team of dynamic innovators, creators, and builders who take pride in crafting pixel-perfect websites and delivering top-notch web solutions that stand out in today's digital landscape. Established in 2023, our mission has been to empower businesses by providing them with unique, high-quality, and responsive web solutions that resonate with their brand identity, engage their audience, and catalyse their growth in the digital marketplace. At Blok, we value innovation and creativity above all.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

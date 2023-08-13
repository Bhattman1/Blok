'use client';

import React from 'react';

const Team = () => {
  return (
    <>
      

      <div className="flex justify-center items-center h-screen">

        <div className="flex flex-col md:flex-row justify-center w-full max-w-screen-lg mx-auto">

          {/* This is the image container */}
          <div className="w-full md:w-1/2 h-64 md:h-auto md:mr-4 mb-4 md:mb-0">
            <img src="/MeDre.png" alt="MeDre" className="w-full h-full object-cover" />
          </div>

          {/* This is the text container */}
          <div className="w-full md:w-1/2 flex items-center justify-center text-center text-black">
            <p>Welcome to Blok, the digital architects shaping the future of web design and development. We are a team of dynamic innovators, creators, and builders who take pride in crafting pixel-perfect websites and delivering top-notch web solutions that stand out in today's digital landscape. Established in 2023, our mission has been to empower businesses by providing them with unique, high-quality, and responsive web solutions that resonate with their brand identity, engage their audience, and catalyse their growth in the digital marketplace. At Blok, we value innovation and creativity above all.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

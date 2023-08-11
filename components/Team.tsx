'use client';

import React from 'react';

const Team = () => {
  return (
    <>
      <div className="fixed inset-0 z-10"></div>
      
      <div className="flex justify-center items-center h-screen">
        
        <div className="flex justify-start w-1/2">
          <div className="w-1/2 h-auto">
            <img src="/MeDre.png" alt="MeDre" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="flex justify-end w-1/2">
          <p>Your text here</p>
        </div>
      </div>
    </>
  );
};

export default Team;

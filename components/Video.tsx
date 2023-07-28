import React from 'react'

const Video = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-custom-gray"> 
        <div className="aspect-w-16 aspect-h-9 max-w-full w-full">
          <video className="object-cover" src="/catchphraseCropped.mp4" autoPlay loop muted />
        </div>
      </div>
    )
}

export default Video

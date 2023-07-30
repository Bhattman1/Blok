import React from 'react'

const Video = () => {
    return (
        <div className="fixed top-[60px] bottom-0 left-0 right-0 flex items-center justify-center bg-custom-gray z-0">
            <div className="aspect-w-16 aspect-h-9 max-w-full w-full">
                <video className="object-cover pointer-events-none" src="/catchphraseCropped.mp4" autoPlay loop muted />
            </div>
        </div>
    )
}

export default Video

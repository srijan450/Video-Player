import React from 'react'

function Player({ src }) {
    return (
        <div className="">
            <video src={src} poster="./video.JPG" className="video w-100 border shadow" controlsList="nodownload" controls autoPlay>
                your browser doesn't support video
            </video>
        </div>

    )
}

export default Player

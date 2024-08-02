import React, { useState, useRef } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import contact_video from "../assets/video/contact_video.webm";

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-[85%] lg:w-2/3 h-auto flex justify-center m-auto font-montserrat text-white">
      <video
        ref={videoRef}
        src={contact_video}
        width="300"
        height="200"
        // controls
        className="lg:w-[1000px] lg:h-auto"
      />
      <div
        className="absolute inset-0 flex justify-start cursor-pointer ml-5 mt-5"
        onClick={handlePlayPause}
      >
        {isPlaying ? (
          <div className="flex flex-col items-center opacity-30 ">
            <CiPause1 size="3em" />
            <span>Pause</span>
          </div>
        ) : (
          <div className="flex flex-col items-center ">
            <CiPlay1 size="3em" />
            <span>Play</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoComponent;

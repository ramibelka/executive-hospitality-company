import React from "react";

const BgVideo = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 z-0 h-screen w-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute top-0 z-10 h-screen w-screen bg-black opacity-40" />
    </div>
  );
};

export default BgVideo;

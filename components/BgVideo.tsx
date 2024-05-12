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
      <div
        className="absolute top-0 z-10 h-screen w-screen"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)",
        }}
      />
    </div>
  );
};

export default BgVideo;

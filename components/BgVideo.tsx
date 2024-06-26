import { HoverContext } from "@/context/HoverContext";
import React, { useContext, useEffect } from "react";

const BgVideo = () => {
  const { setIsLoading, isLoading } = useContext(HoverContext);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 30000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-0 z-0 h-screen w-screen overflow-hidden">
        <video
          preload="none"
          id="bgVideo"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          onLoadedData={() => setIsLoading(false)}
          onCanPlayThrough={() => setIsLoading(false)}
          onCanPlay={() => setIsLoading(false)}
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className="absolute top-0 z-10 h-screen w-screen"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
};

export default BgVideo;

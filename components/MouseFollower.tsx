import React, { useContext, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { HoverContext } from "@/context/HoverContext";

const MouseFollower = () => {
  const { cursorSize } = useContext(HoverContext);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const followerX = useMotionValue(0);
  const followerY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // followerX.set(cursorPosition.x - cursorSize / 2);
    followerX.set(cursorPosition.x);
    followerY.set(cursorPosition.y);
  }, [cursorPosition, cursorSize]);

  return (
    <motion.div
      style={{
        width: cursorSize,
        height: cursorSize,
        top: followerY,
        left: followerX,
        zIndex: 999,
        opacity: 0.7,
      }}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
      className="fixed rounded-full bg-white mix-blend-difference"
    />
  );
};

export default MouseFollower;

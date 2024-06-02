import React, { useContext, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { HoverContext } from "@/context/HoverContext";

const MouseFollower = () => {
  const { cursorSize } = useContext(HoverContext);
  const cursorPosition = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  const followerX = useSpring(0, { stiffness: 500, damping: 40 });
  const followerY = useSpring(0, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      cursorPosition.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      followerX.set(cursorPosition.current.x - cursorSize / 2);
      followerY.set(cursorPosition.current.y - cursorSize / 2);
      requestRef.current = requestAnimationFrame(updatePosition);
    };

    requestRef.current = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [cursorSize, followerX, followerY]);

  return (
    <motion.div
      style={{
        width: cursorSize,
        height: cursorSize,
        top: followerY,
        left: followerX,
        zIndex: 999,
        opacity: 0.7,
        pointerEvents: "none",
      }}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed flex cursor-default items-center justify-center rounded-full bg-white font-league text-3xl mix-blend-difference"
    >
      {cursorSize > 50 ? "Explore" : <></>}
    </motion.div>
  );
};

export default MouseFollower;

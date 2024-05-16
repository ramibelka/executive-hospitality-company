import React, { useContext } from "react";
import BeginImg from "../public/images/BeginImg.png";
import Image from "next/image";
import ArrowIcon from "@/public/icons/ArrowIcon";
import Link from "next/link";
import { useSpring, useTransform, motion, useScroll } from "framer-motion";
import { HoverContext } from "@/context/HoverContext";

const Begin = () => {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 1], [-1500, 200]); //change  this to scale////////
  const physics = { damping: 15, mass: 0.27, stiffness: 100 };
  const spring = useSpring(translateX, physics);
  const { setCursorSize } = useContext(HoverContext);
  return (
    <section className="relative z-10 h-screen w-screen overflow-hidden">
      <Link href={"/"}>
        <div className="absolute inset-0 -z-50 h-full w-full">
          <div className="absolute inset-0 w-full bg-white"></div>
          <div className="absolute inset-0 w-1/2 bg-stone-950"></div>
        </div>
        <div className="relative z-10 flex h-full w-full items-center justify-center ">
          <motion.div className="relative" style={{ x: spring }}>
            <Image
              src={BeginImg}
              alt="Begin"
              height={700}
              width={1190}
              className="scale-[0.6]"
            />
            <div
              className="absolute bottom-64 left-80 flex items-center justify-center"
              onMouseEnter={() => {
                setCursorSize(100);
              }}
              onMouseLeave={() => {
                setCursorSize(8);
              }}
            >
              <h1 className="font-league text-8xl capitalize text-stone-100">
                <span className="flex items-center gap-4">
                  Begin Your <br />
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-stone-100 p-[20px]">
                    <ArrowIcon className="scale-[1.3] overflow-visible" />
                  </span>
                </span>
                Journey With Us
              </h1>
            </div>
          </motion.div>
        </div>
      </Link>
    </section>
  );
};

export default Begin;

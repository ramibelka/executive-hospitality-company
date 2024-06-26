import React, { useContext } from "react";
import BeginImg from "../public/images/BeginImg.webp";
import BeginMobile from "../public/images/BeginMobile.webp";
import Image from "next/image";
import ArrowIcon from "@/public/icons/ArrowIcon";
import Link from "next/link";
import { useSpring, useTransform, motion, useScroll } from "framer-motion";
import { HoverContext } from "@/context/HoverContext";

const Begin = () => {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 1], [-1500, 200]); // change this to scale////////
  const physics = { damping: 15, mass: 0.27, stiffness: 100 };
  const spring = useSpring(translateX, physics);
  const { setCursorSize, isMobile } = useContext(HoverContext);

  return (
    <section className="relative z-10 h-[450px] w-screen overflow-hidden md:h-screen">
      <Link href={"/"}>
        <div className="absolute inset-0 -z-50 h-full w-full">
          <div className="absolute inset-0 h-full bg-white md:h-auto md:w-full"></div>
          <div className="absolute inset-0 h-1/2 bg-stone-950 md:h-auto md:w-1/2"></div>
        </div>
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          {!isMobile ? (
            <motion.div
              className="relative"
              style={{ x: spring }}
              onMouseEnter={() => {
                setCursorSize(100);
              }}
              onMouseLeave={() => {
                setCursorSize(8);
              }}
            >
              <Image
                src={BeginImg}
                alt="Begin"
                height={700}
                width={1190}
                className="scale-[0.6]"
              />
              <div className="absolute bottom-20 left-10 flex items-center justify-center md:bottom-64 md:left-80">
                <h1 className="font-league text-2xl capitalize text-stone-100 md:text-8xl">
                  <span className="flex items-center gap-4">
                    Begin Your <br />
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-stone-100 p-[10px] md:h-20 md:w-20 md:p-[20px]">
                      <ArrowIcon className="scale-[0.7] overflow-visible md:scale-[1.3]" />
                    </span>
                  </span>
                  Journey With Us
                </h1>
              </div>
            </motion.div>
          ) : (
            <div className="relative">
              <Image
                src={BeginMobile}
                alt="Begin"
                height={700}
                width={1190}
                className="scale-[0.9] md:scale-[0.8]"
              />
              <div className="absolute bottom-20 left-20 flex items-center justify-center md:bottom-64 md:left-80">
                <h1 className="font-league text-6xl capitalize text-stone-100 md:text-8xl">
                  <span className="flex items-center gap-4">
                    Begin Your <br />
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-stone-100 p-[10px] md:h-20 md:w-20 md:p-[20px]">
                      <ArrowIcon className="scale-[0.7] overflow-visible md:scale-[1.3]" />
                    </span>
                  </span>
                  Journey With Us
                </h1>
              </div>
            </div>
          )}
        </div>
      </Link>
    </section>
  );
};

export default Begin;

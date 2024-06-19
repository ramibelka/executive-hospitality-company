import React, { useContext, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import InsideCar from "../public/images/InsideCar.png";
import Image from "next/image";
import ArrowIcon from "@/public/icons/ArrowIcon";
import { HoverContext } from "@/context/HoverContext";

const Journey = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 1], [-100, 500]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(translateX, physics);
  const { setCursorSize, isMobile } = useContext(HoverContext);

  return (
    <section
      className="relative w-screen overflow-hidden bg-white md:block md:h-screen"
      ref={ref}
    >
      <div className="absolute top-0 h-[180px] w-full bg-stone-950 md:h-full md:w-3/12"></div>
      <div className="z-50 flex flex-col items-center justify-center py-8 md:h-full md:flex-row">
        {!isMobile && (
          <motion.div
            style={{ x: spring }}
            className="h-[400px] w-[300px] overflow-hidden md:h-auto md:w-auto"
          >
            <Image
              src={InsideCar}
              alt="inside a car"
              height={700}
              width={525.26}
              className="scale-[0.8] md:scale-75"
            />
          </motion.div>
        )}
        {isMobile && (
          <div className="h-[400px] w-[300px] overflow-hidden md:h-auto md:w-auto">
            <Image
              src={InsideCar}
              alt="inside a car"
              height={700}
              width={525.26}
              className="scale-[0.8] md:scale-75"
            />
          </div>
        )}
        <div className="flex h-full flex-col items-start justify-center gap-3 px-20 md:w-[680px]">
          <h1 className="break-words font-league text-5xl capitalize text-stone-950 md:w-[400px] md:text-7xl">
            Our Journey of Luxury and Precision
          </h1>
          <p className="font-manrope text-sm text-stone-700 md:w-8/12 md:text-base md:leading-[28.80px]">
            Founded in the heart of London, VIP Choice has redefined luxury
            travel with over a decade of industry-leading experience. Our
            founders’ innovative approach to chauffeur services, personal
            security, and concierge solutions ensures every detail is
            meticulously managed to deliver unparalleled service
          </p>
          <div
            className="inline-flex items-center justify-center gap-[15px]"
            onMouseEnter={() => {
              setCursorSize(50);
            }}
            onMouseLeave={() => {
              setCursorSize(8);
            }}
          >
            <button className="flex w-full items-center justify-center gap-[15px] font-manrope text-[28px] font-medium capitalize  text-stone-950">
              <span className="font-league text-3xl font-normal uppercase text-stone-950 md:text-4xl">
                Contact us
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-stone-950 p-4 md:h-10 md:w-10 md:p-[20px]">
                <ArrowIcon
                  fill={"black"}
                  className="scale-[0.5] overflow-visible md:scale-[0.7]"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

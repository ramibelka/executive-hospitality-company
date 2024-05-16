import React, { useContext, useRef, useState } from "react";
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
  const { setCursorSize } = useContext(HoverContext);

  return (
    <section className="relative h-screen w-screen overflow-hidden" ref={ref}>
      <div className="absolute top-0 h-full w-3/12 bg-stone-950"></div>
      <div className="flex h-full items-center justify-center bg-white">
        <motion.div style={{ x: spring }}>
          <Image
            src={InsideCar}
            alt="inside a car"
            height={700}
            width={525.26}
            className="scale-75"
          />
        </motion.div>
        <div className="inline-flex h-full w-[680px] flex-col items-start justify-center gap-3">
          <h1 className="w-[680px] font-league text-7xl font-normal capitalize text-stone-950">
            Our Journey of <br /> Luxury and Precision
          </h1>
          <p className="w-8/12 font-manrope text-base font-normal leading-[28.80px] text-stone-700">
            Founded in the heart of London, Executive Hospitality Company has
            redefined luxury travel with over a decade of industry-leading
            experience. Our founders’ innovative approach to chauffeur services,
            personal security, and concierge solutions ensures every detail is
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
              <span className="font-league text-4xl font-normal uppercase text-stone-950">
                Contact us
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-stone-950 p-[20px]">
                <ArrowIcon
                  fill={"black"}
                  className="scale-[0.7] overflow-visible"
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

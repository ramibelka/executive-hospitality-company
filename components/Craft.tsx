import React, { useContext } from "react";
import CraftImg from "../public/images/Craft.webp";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { HoverContext } from "@/context/HoverContext";

const Craft = () => {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  const physics = { damping: 15, mass: 0.4, stiffness: 55 };
  const spring = useSpring(translateX, physics);
  const { isMobile } = useContext(HoverContext);

  return (
    <section className="relative z-10 h-[1000px] w-screen md:h-screen">
      <div className="absolute inset-0 -z-50 h-full w-full">
        <div className="absolute inset-0 h-full bg-stone-950 md:h-auto md:w-full"></div>
        <div className="absolute inset-0 h-2/5 bg-white md:h-auto md:w-3/12"></div>
      </div>
      <div className="z-10 flex h-full flex-col items-center md:flex-row md:gap-9">
        {!isMobile ? (
          <motion.div style={{ x: spring }}>
            <Image
              src={CraftImg}
              alt="inside a car"
              className="scale-[0.8] lg:scale-75"
              priority
            />
          </motion.div>
        ) : (
          <div className="w-[450.22px]">
            <Image
              src={CraftImg}
              alt="inside a car"
              className="scale-[0.65] lg:scale-75"
              priority
            />
          </div>
        )}

        <div className="flex h-full flex-col items-start gap-3 px-8 md:w-[680px] md:justify-center">
          <h1 className="font-league text-7xl font-normal capitalize text-stone-100 md:w-[680px] md:text-8xl ">
            Crafting <br /> Unforgettable <br /> Experiences
          </h1>
          <p className="font-manrope text-sm font-normal text-stone-100 md:w-8/12 md:text-base md:leading-[28.80px]">
            With extensive experience in managing and executing elite events, we
            ensure every occasion is memorable. Stay tuned for updates on
            upcoming events and insights into our impeccably managed past
            engagements
          </p>
        </div>
      </div>
    </section>
  );
};

export default Craft;

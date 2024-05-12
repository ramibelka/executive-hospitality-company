import React from "react";
import CraftImg from "../public/images/Craft.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const Craft = () => {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 1], [-600, 500]);
  const physics = { damping: 15, mass: 0.4, stiffness: 55 };
  const spring = useSpring(translateX, physics);

  return (
    <section className="relative z-10 h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 -z-50 h-full w-full">
        <div className="absolute inset-0 w-full bg-stone-950"></div>
        <div className="absolute inset-0 w-3/12 bg-white"></div>
      </div>
      <div className="z-10 flex h-full items-center justify-center gap-9">
        <motion.div style={{ x: spring }}>
          <Image
            src={CraftImg}
            alt="inside a car"
            height={700}
            width={525.26}
            className="scale-75"
          />
        </motion.div>
        <div className="flex h-full w-[680px] flex-col items-start justify-center gap-3">
          <h1 className="w-[680px] font-league text-8xl font-normal capitalize text-stone-100 ">
            Crafting <br /> Unforgettable <br /> Experiences
          </h1>
          <p className="w-8/12 font-manrope text-base font-normal leading-[28.80px] text-stone-100">
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

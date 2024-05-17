import React, { useContext } from "react";
import BgVideo from "./BgVideo";
import ArrowIcon from "@/public/icons/ArrowIcon";
import { HoverContext } from "@/context/HoverContext";

const Hero = () => {
  const { setCursorSize } = useContext(HoverContext);
  return (
    <section className="h-screen w-screen overflow-hidden">
      <BgVideo />
      <div className="relative z-10 inline-flex h-full w-full flex-col items-start justify-center gap-5 pl-8 md:pl-[70px]">
        <h1 className="font-league text-6xl font-normal capitalize text-stone-100 md:text-8xl">
          Elevate Your Journey <br /> with Unmatched Luxury
        </h1>
        <p className="w-9/12 font-manrope text-sm text-stone-200 md:w-5/12 md:text-base md:leading-[28.80px]">
          Discover bespoke Chauffeur, Security, and Concierge services tailored
          for Discerning clients in the UK and internationally. Experience the
          pinnacle of sophistication and service with Executive Hospitality
          Company.
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
          <button className="flex w-full items-center justify-center gap-[15px] text-[28px] font-medium capitalize  text-stone-100">
            <span className="font-league text-4xl font-normal uppercase text-stone-100">
              Contact us
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-stone-100 p-[20px]">
              <ArrowIcon className="scale-[0.7] overflow-visible" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

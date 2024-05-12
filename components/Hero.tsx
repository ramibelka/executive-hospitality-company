import React from "react";
import BgVideo from "./BgVideo";
import ArrowIcon from "@/public/icons/ArrowIcon";

const Hero = () => {
  return (
    <section className="h-screen w-screen overflow-hidden">
      <BgVideo />
      <div className="relative z-10 ml-20 inline-flex h-full w-full flex-col items-start justify-center gap-5">
        <h1 className="font-league text-8xl font-normal capitalize leading-[120px] text-stone-100">
          Elevate Your Journey <br /> with Unmatched Luxury
        </h1>
        <p className="w-5/12 font-manrope text-base font-normal leading-[28.80px] text-stone-200">
          Discover bespoke Chauffeur, Security, and Concierge services tailored
          for Discerning clients in the UK and internationally. Experience the
          pinnacle of sophistication and service with Executive Hospitality
          Company.
        </p>
        <div className="inline-flex items-center justify-center gap-[15px]">
          <button className="flex w-full items-center justify-center gap-[15px] text-[28px] font-medium capitalize  text-stone-100">
            <span className="font-league text-4xl font-normal uppercase leading-[58.50px] text-stone-100">
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

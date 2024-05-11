import Image from "next/image";
import React from "react";
import ArrowIcon from "../public/icons/ArrowIcon.svg";
import BgVideo from "./BgVideo";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="h-screen w-screen overflow-hidden">
      <Navbar />
      <BgVideo />
      <div className="content relative z-10 ml-[50px] inline-flex h-full w-full flex-col items-start justify-center gap-7">
        <h1 className="font-league text-[120px] font-normal capitalize leading-[120px] text-stone-100">
          Elevate Your Journey <br /> with Unmatched Luxury
        </h1>
        <p className="w-6/12 font-manrope text-xl font-normal leading-[28.80px] text-stone-200">
          Discover bespoke Chauffeur, Security, and Concierge services tailored
          for Discerning clients in the UK and internationally. Experience the
          pinnacle of sophistication and service with Executive Hospitality
          Company.
        </p>
        <div className="inline-flex h-[65px] w-[233.08px] items-center justify-center gap-[15px] rounded-[100px] border-2 border-stone-100 px-[23px] py-5">
          <button className="flex w-full items-center justify-center gap-[15px] font-['Manrope'] text-[28px] font-medium capitalize  text-stone-100">
            <span className="font-manrope text-2xl font-medium capitalize leading-[25.20px] text-stone-100">
              Contact us
            </span>
            <Image src={ArrowIcon} alt="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import InsideCar from "../public/images/InsideCar.png";
import Image from "next/image";
import ArrowIcon from "../public/icons/ArrowIcon.svg";

const Journey = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <div className="absolute top-0 -z-10 h-full w-3/12 bg-stone-950"></div>
      <div className="flex h-full justify-center">
        <div className="scale-75">
          <Image
            src={InsideCar}
            alt="inside a car"
            height={700}
            width={525.26}
          />
        </div>
        <div className="inline-flex h-full w-[680px] flex-col items-start justify-center gap-7">
          <h1 className="w-[680px] font-league text-[120px] font-normal capitalize leading-[108px] text-stone-950">
            Our Journey of <br /> Luxury and Precision
          </h1>
          <p className="w-[638px] font-manrope text-2xl font-normal leading-[28.80px] text-stone-700">
            Founded in the heart of London, Executive Hospitality Company has
            redefined luxury travel with over a decade of industry-leading
            experience. Our founders’ innovative approach to chauffeur services,
            personal security, and concierge solutions ensures every detail is
            meticulously managed to deliver unparalleled service
          </p>
          <div className="inline-flex h-[65px] w-[233.08px] items-center justify-center gap-[15px] rounded-[100px] border-2 border-stone-950  px-[23px] py-5">
            <button className="flex w-full items-center justify-center gap-[15px] font-['Manrope'] text-[28px] font-medium capitalize  text-stone-950 ">
              <span className="font-manrope text-2xl font-medium capitalize leading-[25.20px] text-stone-950 ">
                Contact us
              </span>
              <Image src={ArrowIcon} alt="arrow" className="dark:invert" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

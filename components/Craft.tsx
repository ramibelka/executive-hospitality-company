import React from "react";
import CraftImg from "../public/images/Craft.png";
import Image from "next/image";

const Craft = () => {
  return (
    <section className="relative z-10 h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 -z-50 h-full w-full">
        <div className="absolute inset-0 w-full bg-stone-950"></div>
        <div className="absolute inset-0 w-3/12 bg-white"></div>
      </div>
      <div className="z-10 flex h-full justify-center">
        <div className="scale-75">
          <Image
            src={CraftImg}
            alt="inside a car"
            height={700}
            width={525.26}
          />
        </div>
        <div className="inline-flex h-full w-[680px] flex-col items-start justify-center gap-7">
          <h1 className="w-[680px] font-league text-[120px] font-normal capitalize leading-[108px] text-stone-100 ">
            Our Craft of <br /> Luxury and Precision
          </h1>
          <p className="w-[638px] font-manrope text-2xl font-normal leading-[28.80px] text-stone-100">
            Founded in the heart of London, Executive Hospitality Company has
            redefined luxury travel with over a decade of industry-leading
            experience. Our founders’ innovative approach to chauffeur services,
            personal security, and concierge solutions ensures every detail is
            meticulously managed to deliver unparalleled service
          </p>
        </div>
      </div>
    </section>
  );
};

export default Craft;

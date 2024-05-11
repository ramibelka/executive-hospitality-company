import React from "react";
import BeginImg from "../public/images/BeginImg.png";
import Image from "next/image";

const Begin = () => {
  return (
    <section className="relative z-10 h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 -z-50 h-full w-full">
        <div className="absolute inset-0 w-full bg-white"></div>
        <div className="absolute inset-0 w-1/2 bg-stone-950"></div>
      </div>
      <div className="relative z-10 flex h-full w-full items-center justify-center ">
        <div className="relative">
          <Image
            src={BeginImg}
            alt="Begin"
            height={700}
            width={1190}
            className="scale-75"
          />
          <div className="absolute bottom-52 left-64 flex items-center justify-center">
            <h1 className="font-league text-9xl font-normal capitalize leading-[153px] text-stone-100">
              Begin Your <br /> Journey With Us
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Begin;

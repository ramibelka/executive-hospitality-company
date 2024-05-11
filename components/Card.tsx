import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="flex w-[600px] flex-col gap-16 border-l border-stone-100 px-16">
      <div className="flex flex-col items-center gap-7">
        <h1 className="self-start font-league text-5xl font-normal capitalize leading-[72px] text-stone-100">
          NOW OPEN Downtown Toronto
        </h1>
        <p className="self-start font-manrope text-base font-normal text-stone-200">
          We are now open in downtown Toronto! <br /> Visit us at 570 Adelaide
          Street East, Toronto, Ontario
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          href={"/"}
          className=" font-manrope text-lg font-bold capitalize leading-[25.20px] text-white underline"
        >
          See Event
        </Link>
        <div className="h-[250px] w-full bg-zinc-300" />
      </div>
    </div>
  );
};

export default Card;

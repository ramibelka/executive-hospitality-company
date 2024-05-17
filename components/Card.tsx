import { HoverContext } from "@/context/HoverContext";
import ArrowIcon from "@/public/icons/ArrowIcon";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useContext } from "react";

const Card = () => {
  const { setCursorSize } = useContext(HoverContext);
  return (
    <article className="mt-5 flex flex-col gap-16 overflow-hidden border-l border-stone-100 px-8 md:w-[600px] md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center gap-7">
          <h1 className="self-start font-league text-5xl capitalize text-stone-100">
            NOW OPEN Downtown Toronto
          </h1>
          <p className="self-start font-manrope text-base text-stone-200">
            We are now open in downtown Toronto! <br /> Visit us at 570 Adelaide
            Street East, Toronto, Ontario
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            href={"/"}
            className="flex items-center gap-5"
            onMouseEnter={() => {
              setCursorSize(50);
            }}
            onMouseLeave={() => {
              setCursorSize(8);
            }}
          >
            <h2 className="font-league text-4xl uppercase text-stone-100">
              See Event
            </h2>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-stone-100 p-[17px]">
              <ArrowIcon className="scale-[0.6] overflow-visible" />
            </span>
          </Link>
          <div className="h-[250px] w-full bg-zinc-300" />
        </div>
      </motion.div>
    </article>
  );
};

export default Card;

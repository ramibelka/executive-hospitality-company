import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ArrowIcon from "@/public/icons/ArrowIcon";
import { HoverContext } from "@/context/HoverContext";

interface Props {
  title: {
    titleP1: string;
    titleP2: string;
  };
  desc: string;
  image: any;
  mobileImage: any;
}

const Article: React.FC<Props> = ({ title, desc, image, mobileImage }) => {
  const { setCursorSize, isMobile } = useContext(HoverContext);

  return (
    <section className="flex h-[90vh] items-center justify-center overflow-hidden bg-white px-8 md:h-screen md:w-[1100px] md:p-28">
      <Link href={"/link"}>
        <div
          className="flex flex-col items-center justify-center gap-5"
          onMouseEnter={() => {
            setCursorSize(100);
          }}
          onMouseLeave={() => {
            setCursorSize(8);
          }}
        >
          <div className="flex w-full flex-col items-start justify-between gap-4 md:w-[750] md:flex-row md:items-center md:gap-0">
            <h1 className="font-league text-5xl font-normal capitalize text-stone-950">
              {title.titleP1}
              <span className="flex items-center gap-2 ">
                {title.titleP2}
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-stone-700 p-[17px]">
                  <ArrowIcon
                    className="scale-[0.7] overflow-visible"
                    fill="#110F0"
                  />
                </span>
              </span>
            </h1>
            <p className="w-5/6 text-justify font-manrope text-xs font-normal text-stone-700 md:w-5/12">
              {desc}
            </p>
          </div>
          <div className="overflow-hidden">
            {!isMobile ? (
              <motion.div
                initial={{ scale: 1.3 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2 }}
              >
                <Image
                  src={image}
                  alt="Chaufeur service"
                  height={1000}
                  width={1000}
                  className="scale-150 md:scale-100"
                />
              </motion.div>
            ) : (
              <div className="h-auto">
                <Image
                  src={mobileImage}
                  alt="Chaufeur service"
                  height={1000}
                  width={1000}
                  className="scale-100 md:scale-100"
                />
              </div>
            )}
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Article;

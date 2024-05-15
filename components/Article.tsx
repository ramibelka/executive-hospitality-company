import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ArrowIcon from "@/public/icons/ArrowIcon";

interface Props {
  title: {
    titleP1: string;
    titleP2: string;
  };
  desc: string;
  image: any;
}

const Article: React.FC<Props> = ({ title, desc, image }) => {
  return (
    <section className="flex h-screen w-[1100px] items-center justify-center overflow-hidden bg-white p-28">
      <Link href={"/link"}>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex w-[750] items-center justify-between ">
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
            <p className="w-5/12 text-justify font-manrope text-xs font-normal text-stone-700">
              {desc}
            </p>
          </div>
          <div className="overflow-hidden">
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
              />
            </motion.div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Article;

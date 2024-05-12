import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: JSX.Element;
  desc: string;
  image: any;
}

const Article: React.FC<Props> = ({ title, desc, image }) => {
  return (
    <section className="flex h-screen w-[1100px] items-center justify-center overflow-hidden p-28">
      <Link href={"/link"}>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex w-[750] items-center justify-between ">
            <h1 className="font-league text-5xl font-normal capitalize text-stone-950">
              {title}
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

import Image from "next/image";
import React from "react";

interface Props {
  title: JSX.Element;
  desc: string;
  image: any;
}

const Article: React.FC<Props> = ({ title, desc, image }) => {
  return (
    <section className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex place-content-center items-center gap-16">
          <h1 className="font-league text-7xl font-normal capitalize leading-[72px] text-stone-950">
            {title}
          </h1>
          <p className="w-1/3 font-manrope text-base font-normal text-stone-700">
            {desc}
          </p>
        </div>
        <div className="">
          <Image src={image} alt="Chaufeur service" height={500} width={950} />
        </div>
      </div>
    </section>
  );
};

export default Article;

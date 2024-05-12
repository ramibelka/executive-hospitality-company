import React from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "../public/icons/MenuIcon.js";
import ArrowIcon from "../public/icons/ArrowIcon.js";
import Logo from "../public/images/Logo";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 inline-flex w-screen flex-1 items-center justify-between px-[70px]">
      <Link href="/contact" className="flex items-center gap-4">
        <span className="font-league text-2xl font-normal uppercase leading-[58.50px] text-stone-100 bg-blend-difference">
          Contact us
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-stone-100 p-[17px]">
          <ArrowIcon className="scale-[0.6] overflow-visible" />
        </div>
      </Link>
      <Link href={"/"} className="relative h-20 w-[67px]">
        <Logo className="scale-[0.6] bg-blend-difference" />
      </Link>
      <button aria-label="Toggle Menu" className="flex items-center">
        <span className="font-manrope text-xl font-bold capitalize text-stone-100">
          Menu
        </span>
        <MenuIcon className="scale-[0.6]" />
      </button>
    </nav>
  );
};

export default Navbar;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "../public/icons/MenuIcon.js";
import ArrowIcon from "../public/icons/ArrowIcon.js";
import Logo from "../public/images/Logo";
import Menu from "@/components/Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Menu toggleMenu={toggleMenu} isOpen={isOpen} />
      <nav className="fixed left-0 top-0 z-40 inline-flex w-screen flex-1 items-center justify-between px-[70px]">
        <Link href="/contact" className="flex items-center gap-4">
          <span className="bg-transparent font-league text-3xl font-normal uppercase text-stone-100 bg-blend-difference">
            Contact us
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-stone-100 p-[17px]">
            <ArrowIcon className="scale-[0.6] overflow-visible" />
          </div>
        </Link>
        <Link href={"/"} className="relative h-20 w-[67px]">
          <Logo className="scale-[0.6]" />
        </Link>
        <button
          aria-label="Toggle Menu"
          className="flex items-center"
          onClick={toggleMenu}
        >
          <span className="font-league text-3xl uppercase text-stone-100">
            Menu
          </span>
          <MenuIcon className="scale-[0.6]" />
        </button>
      </nav>
    </>
  );
};

export default Navbar;

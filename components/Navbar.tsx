"use client";

import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "../public/icons/MenuIcon.js";
import ArrowIcon from "../public/icons/ArrowIcon.js";
import Logo from "../public/images/Logo";
import Menu from "@/components/Menu";
import { motion } from "framer-motion";
import CloseIcon from "@/public/icons/CloseIcon.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Menu toggleMenu={toggleMenu} isOpen={isOpen} />
      <nav className="fixed left-0 top-0 z-40 inline-flex w-screen flex-1 items-center justify-between px-[70px] mix-blend-difference">
        <Link href="/contact" className="flex items-center gap-2">
          <span className="font-league text-2xl font-normal uppercase text-stone-50">
            Contact us
          </span>
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-[1px] border-stone-100 p-[17px]">
            <ArrowIcon className="scale-[0.6] overflow-visible" />
          </div>
        </Link>
        <Link href={"/"} className="h-18 relative w-[67px]">
          <Logo className="scale-[0.5]" />
        </Link>
        <button
          aria-label="Toggle Menu"
          className="flex items-center"
          onClick={toggleMenu}
        >
          <span className="font-league text-2xl uppercase text-stone-100">
            Menu
          </span>
          <motion.div
            initial={{ scale: 1, rotate: 0 }}
            animate={{ scale: isOpen ? 0.6 : 1, rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <CloseIcon className="scale-[0.55]" />
            ) : (
              <MenuIcon className="scale-[0.55]" />
            )}
          </motion.div>
        </button>
      </nav>
    </>
  );
};

export default Navbar;

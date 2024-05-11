import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/Logo.svg";
import MenuIcon from "../public/icons/MenuIcon.svg";
import ContactIcon from "../public/icons/ContactIcon.svg";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 inline-flex w-screen flex-1 items-center justify-between px-[70px] py-[25px]">
      <Link href="/contact" className="flex items-center gap-4">
        <span className="font-manrope text-2xl font-bold capitalize leading-[25.20px] text-stone-100">
          Contact Us
        </span>
        <Image alt="menu icon" src={ContactIcon} width={50} height={50} />
      </Link>
      <div className="relative">
        <Image alt="logo" src={Logo} width={47} height={60} />
      </div>
      <button
        aria-label="Toggle Menu"
        className="flex items-center  gap-[15px]"
      >
        <span className="font-['Manrope'] text-2xl font-bold capitalize leading-[25.20px] text-stone-100">
          Menu
        </span>
        <Image alt="menu icon" src={MenuIcon} width={50} height={50} />
      </button>
    </nav>
  );
};

export default Navbar;

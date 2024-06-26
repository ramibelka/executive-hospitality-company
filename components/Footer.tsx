import React from "react";
import Link from "next/link";
import Logo from "../public/images/Logo";

const Footer = () => {
  return (
    <footer className="h-screen w-screen overflow-hidden bg-white px-4 py-10 md:px-20 md:pb-10 md:pt-20">
      <div className="flex h-full w-full flex-col items-center justify-around">
        <div className="flex w-full flex-col">
          <div className="flex flex-col gap-4 border-t-[1px] border-stone-700 py-2 md:flex-row md:gap-32 md:py-10">
            <h1 className="w-full font-league text-xl font-normal capitalize text-stone-950 md:w-32 md:text-3xl">
              Address
            </h1>
            <p className="font-manrope text-base font-normal text-stone-700 md:w-1/3 md:text-3xl">
              188 Sutton Court Road Chiswick W4 3HR
            </p>
          </div>
          <div className="flex flex-col gap-4 border-t-[1px] border-stone-700 py-2 md:flex-row md:gap-32 md:py-10">
            <h1 className="w-full font-league text-xl font-normal capitalize text-stone-950 md:w-32 md:text-3xl">
              Phone
            </h1>
            <p className="font-manrope text-base font-normal text-stone-700 md:text-3xl">
              +44 208 996 2964
            </p>
          </div>
          <div className="flex flex-col gap-4 border-t-[1px] border-stone-700 py-2 md:flex-row md:gap-32 md:py-10">
            <h1 className="w-full font-league text-xl font-normal capitalize text-stone-950 md:w-32 md:text-3xl">
              Fax
            </h1>
            <p className="font-manrope text-base font-normal text-stone-700 md:text-3xl">
              +44 208 996 2965
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex h-32 w-full flex-col flex-wrap gap-2 font-manrope text-base font-normal text-stone-950 md:h-auto md:flex-row md:justify-between md:gap-0 md:text-lg">
            <Link href="/contact">Home</Link>
            <Link href="/contact">About us</Link>
            <Link href="/contact">Chauffeur Drive</Link>
            <Link href="/contact">Personal Security</Link>
            <Link href="/contact">Personal Concierge</Link>
            <Link href="/contact">Events</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className="flex w-full flex-col items-center md:block">
            <Logo fill="#110F0" className="block scale-[0.6] md:hidden" />
            <div className="flex w-full items-center justify-between gap-2 border-t-[1px] border-stone-300 pt-6 text-center text-[10px] md:gap-0 md:pt-0 md:text-sm">
              <h3 className="font-manrope text-stone-950 opacity-75">
                © 2019 Lift Media. All rights reserved.
              </h3>
              <Logo fill="#110F0" className="hidden scale-[0.6] md:block" />
              <h3 className="flex gap-3 font-manrope text-stone-950">
                <Link href="/contact">Terms of Service</Link>
                <Link href="/contact">Privacy Policy</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

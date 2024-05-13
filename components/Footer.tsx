import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "../public/images/Logo";

const Footer = () => {
  return (
    <footer className="h-screen w-screen overflow-hidden px-20 py-16">
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <div className="flex w-full flex-col">
          <div className="flex gap-32 border-t-[1px] border-stone-700 py-10">
            <h1 className="w-32 font-league text-3xl font-normal capitalize text-stone-950">
              Address
            </h1>
            <p className="font-manrope text-3xl font-normal text-stone-700">
              188 Sutton Court Road
              <br />
              Chiswick W4 3HR
            </p>
          </div>
          <div className="flex gap-32 border-t-[1px] border-stone-700 py-10">
            <h1 className="w-32 font-league text-3xl font-normal capitalize text-stone-950">
              Phone
            </h1>
            <p className="font-manrope text-3xl font-normal text-stone-700">
              +44 208 996 2964
            </p>
          </div>
          <div className="flex gap-32 border-t-[1px] border-stone-700 py-10">
            <h1 className="w-32 font-league text-3xl font-normal capitalize text-stone-950">
              Fax
            </h1>
            <p className=" font-manrope text-3xl font-normal text-stone-700">
              +44 208 996 2965
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between font-manrope text-base font-normal text-stone-950">
          <Link href="/contact">Home</Link>
          <Link href="/contact">About us</Link>
          <Link href="/contact">Chauffeur Drive</Link>
          <Link href="/contact">Personal Security</Link>
          <Link href="/contact">Personal Concierge</Link>
          <Link href="/contact">Events</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="flex w-full items-center justify-between text-sm">
          <h3 className="font-manrope  font-normal text-stone-950 opacity-75">
            © 2019 Lift Media. All rights reserved.
          </h3>
          <Logo fill="#110F0" className="scale-[0.6]" />
          <h3 className="flex gap-3 font-manrope font-normal text-stone-950">
            <Link href="/contact">Terms of Service</Link>
            <Link href="/contact">Privacy Policy</Link>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

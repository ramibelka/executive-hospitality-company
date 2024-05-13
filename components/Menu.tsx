import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/public/images/Logo";
import CloseIcon from "@/public/icons/CloseIcon";
import Link from "next/link";
import ArrowIcon from "@/public/icons/ArrowIcon";
import { useEffect } from "react";

interface Props {
  toggleMenu: () => void;
  isOpen: boolean;
}

const Menu: React.FC<Props> = ({ toggleMenu, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed z-50 flex h-screen w-screen overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="h-full w-1/3"
            initial={{ backdropFilter: "blur(0)" }}
            animate={{ backdropFilter: "blur(7px)" }}
            transition={{ duration: 2 }}
            onClick={toggleMenu}
          ></motion.div>
          <motion.div
            className="flex h-full w-2/3 flex-col justify-between bg-slate-50 px-16 py-2"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 150, damping: 25 }}
          >
            <div className="flex items-center justify-between">
              <Logo fill="#110F0" className="scale-[0.6]" />
              <button
                className="flex items-center font-manrope text-[28px] font-bold capitalize text-stone-950"
                onClick={toggleMenu}
              >
                <span>Menu</span>
                <CloseIcon className="scale-[0.6]" />
              </button>
            </div>

            <div className="flex flex-col gap-2 pl-3">
              <Link
                href={"/HOME"}
                className="flex items-center gap-2 font-league text-5xl font-normal uppercase text-stone-950"
              >
                <span>HOME</span>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-stone-950 p-[20px]">
                  <ArrowIcon
                    fill="#110F0E"
                    className="scale-[0.6] overflow-visible"
                  />
                </div>
              </Link>
              <Link
                href={"/ABOUT"}
                className="font-league text-5xl font-normal uppercase text-stone-950"
              >
                ABOUT
              </Link>
              <Link
                href={"/chauffeur"}
                className="font-league text-5xl font-normal uppercase text-stone-950"
              >
                chauffeur drive
              </Link>
              <Link
                href={"/personal"}
                className="font-league text-5xl font-normal uppercase text-stone-950"
              >
                personal Concierge
              </Link>
              <Link
                href={"/EVENTS"}
                className="font-league text-5xl font-normal uppercase text-stone-950"
              >
                EVENTS
              </Link>
              <Link
                href={"/CONTACT-US"}
                className="font-league text-5xl font-normal uppercase text-stone-950"
              >
                CONTACT US
              </Link>
            </div>
            <div className="ml-3 flex items-start justify-between border-t border-stone-700 py-5">
              <div className="flex flex-col items-start justify-start gap-2">
                <h1 className="font-league text-2xl capitalize text-stone-950">
                  Address
                </h1>
                <p className="flex flex-col items-start justify-start font-manrope text-sm text-stone-700">
                  188 Sutton Court Road
                  <br />
                  Chiswick W4 3HR
                </p>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h1 className="font-league text-2xl capitalize text-stone-950">
                  Phone
                </h1>
                <p className="flex flex-col items-start justify-start font-manrope text-sm text-stone-700">
                  +44 208 996 2964
                </p>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h1 className="font-league text-2xl capitalize text-stone-950">
                  Fax
                </h1>
                <p className="flex flex-col items-start justify-start font-manrope text-sm text-stone-700">
                  +44 208 996 2964
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;

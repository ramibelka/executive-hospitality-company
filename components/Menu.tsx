import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/public/images/Logo";
import CloseIcon from "@/public/icons/CloseIcon";
import Link from "next/link";
import ArrowIcon from "@/public/icons/ArrowIcon";
import { useState } from "react";

interface Props {
  toggleMenu: () => void;
  isOpen: boolean;
}

const Menu: React.FC<Props> = ({ toggleMenu, isOpen }) => {
  const [hoveredLinks, setHoveredLinks] = useState<string[]>([]);

  const handleHover = (href: string) => {
    setHoveredLinks((prev) => [...prev, href]);
  };

  const handleHoverExit = (href: string) => {
    setHoveredLinks((prev) => prev.filter((link) => link !== href));
  };

  const isLinkHovered = (href: string) => hoveredLinks.includes(href);

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
              <Link href={"/HOME"}>
                <motion.a
                  className="flex items-center gap-2 font-league text-3xl font-normal uppercase text-stone-950 md:text-5xl"
                  whileHover={{ scale: 1.1, color: "#FF69B4" }}
                  onMouseEnter={() => handleHover("/HOME")}
                  onMouseLeave={() => handleHoverExit("/HOME")}
                >
                  <span>HOME</span>
                  {isLinkHovered("/HOME") && (
                    <motion.div
                      className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-stone-950 p-[20px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowIcon
                        fill="#110F0E"
                        className="scale-[0.6] overflow-visible"
                      />
                    </motion.div>
                  )}
                </motion.a>
              </Link>
              <Link href={"/ABOUT"}>
                <motion.a
                  className="flex items-center gap-2 font-league text-3xl font-normal uppercase text-stone-950 md:text-5xl"
                  whileHover={{ scale: 1.1, color: "#FF69B4" }}
                  onMouseEnter={() => handleHover("/ABOUT")}
                  onMouseLeave={() => handleHoverExit("/ABOUT")}
                >
                  ABOUT
                  {isLinkHovered("/ABOUT") && (
                    <motion.div
                      className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-stone-950 p-[20px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowIcon
                        fill="#110F0E"
                        className="scale-[0.6] overflow-visible"
                      />
                    </motion.div>
                  )}
                </motion.a>
              </Link>
              <Link href={"/chauffeur"}>
                <motion.a
                  className="flex items-center gap-2 font-league text-3xl font-normal uppercase text-stone-950 md:text-5xl"
                  whileHover={{ scale: 1.1, color: "#FF69B4" }}
                  onMouseEnter={() => handleHover("/chauffeur")}
                  onMouseLeave={() => handleHoverExit("/chauffeur")}
                >
                  chauffeur drive
                  {isLinkHovered("/chauffeur") && (
                    <motion.div
                      className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-stone-950 p-[20px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowIcon
                        fill="#110F0E"
                        className="scale-[0.6] overflow-visible"
                      />
                    </motion.div>
                  )}
                </motion.a>
              </Link>
              <Link href={"/personal"}>
                <motion.a
                  className="flex items-center gap-2 font-league text-3xl font-normal uppercase text-stone-950 md:text-5xl"
                  whileHover={{ scale: 1.1, color: "#FF69B4" }}
                  onMouseEnter={() => handleHover("/personal")}
                  onMouseLeave={() => handleHoverExit("/personal")}
                >
                  personal Concierge
                  {isLinkHovered("/personal") && (
                    <motion.div
                      className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-stone-950 p-[20px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowIcon
                        fill="#110F0E"
                        className="scale-[0.6] overflow-visible"
                      />
                    </motion.div>
                  )}
                </motion.a>
              </Link>
              <Link href={"/EVENTS"}>
                <motion.a
                  className="flex items-center gap-2 font-league text-3xl font-normal uppercase text-stone-950 md:text-5xl"
                  whileHover={{ scale: 1.1, color: "#FF69B4" }}
                  onMouseEnter={() => handleHover("/EVENTS")}
                  onMouseLeave={() => handleHoverExit("/EVENTS")}
                >
                  EVENTS
                  {isLinkHovered("/EVENTS") && (
                    <motion.div
                      className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-stone-950 p-[20px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowIcon
                        fill="#110F0E"
                        className="scale-[0.6] overflow-visible"
                      />
                    </motion.div>
                  )}
                </motion.a>
              </Link>
              <Link href={"/CONTACT-US"}>
                <motion.a
                  className="flex items-center gap-2 font-league text-3xl font-normal uppercase text-stone-950 md:text-5xl"
                  whileHover={{ scale: 1.1, color: "#FF69B4" }}
                  onMouseEnter={() => handleHover("/CONTACT-US")}
                  onMouseLeave={() => handleHoverExit("/CONTACT-US")}
                >
                  CONTACT US
                  {isLinkHovered("/CONTACT-US") && (
                    <motion.div
                      className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-stone-950 p-[20px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowIcon
                        fill="#110F0E"
                        className="scale-[0.6] overflow-visible"
                      />
                    </motion.div>
                  )}
                </motion.a>
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

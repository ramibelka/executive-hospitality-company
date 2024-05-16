"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Article from "@/components/Article";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { articlesData } from "@/data";
import Craft from "@/components/Craft";
import Begin from "@/components/Begin";
import CardsList from "@/components/CardsList";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useHorizScroll } from "@/hooks/useHorizScroll";
import MouseFollower from "@/components/MouseFollower";
import { HoverContext } from "@/context/HoverContext";

export default function Home() {
  useSmoothScroll();
  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < 768;
  }

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const ghostRef = useRef<HTMLDivElement | null>(null);
  const { spring, scrollRange } = useHorizScroll(scrollRef);
  const [cursorSize, setCursorSize] = useState(8);

  return (
    <HoverContext.Provider
      value={{
        cursorSize,
        setCursorSize,
      }}
    >
      <main className="relative h-[1700vh] scroll-smooth">
        <MouseFollower />
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div ref={scrollRef} style={{ x: spring }} className="flex">
            <Hero />
            <Journey />
            {articlesData.map(({ title, desc, image }, index) => (
              <Article key={index} title={title} desc={desc} image={image} />
            ))}
            <Craft />
            <CardsList />
            <Begin />
            <Footer />
          </motion.div>
          <div
            ref={ghostRef}
            style={{ height: scrollRange }}
            className="hidden"
          />
        </div>
      </main>
    </HoverContext.Provider>
  );
}

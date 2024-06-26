"use client";

import React, { useState, useMemo } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Article from "@/components/Article";
import { motion } from "framer-motion";
import { useRef } from "react";
import { articlesData } from "@/data";
import Craft from "@/components/Craft";
import Begin from "@/components/Begin";
import CardsList from "@/components/CardsList";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useHorizScroll } from "@/hooks/useHorizScroll";
import MouseFollower from "@/components/MouseFollower";
import { HoverContext } from "@/context/HoverContext";
import LoadingScreen from "./loading";

export default function Home() {
  useSmoothScroll();

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const ghostRef = useRef<HTMLDivElement | null>(null);
  const { spring, scrollRange, isMobile } = useHorizScroll(scrollRef);
  const [cursorSize, setCursorSize] = useState(8);
  const [isLoading, setIsLoading] = useState(true);

  const hoverContextValue = {
    cursorSize,
    setCursorSize,
    isMobile,
    setIsLoading,
  };

  return (
    <HoverContext.Provider value={hoverContextValue}>
      <main className="scroll-smooth md:relative md:h-[1700vh]">
        <LoadingScreen isLoading={isLoading} />
        {!isMobile && <MouseFollower />}
        <div className="flex items-center md:sticky md:top-0 md:h-screen md:overflow-hidden">
          {!isMobile ? (
            <motion.div ref={scrollRef} style={{ x: spring }} className="flex">
              <Hero />
              <Journey />
              {articlesData.map(
                ({ title, desc, image, mobileImage }, index) => (
                  <Article
                    key={index}
                    title={title}
                    desc={desc}
                    image={image}
                    mobileImage={mobileImage}
                  />
                ),
              )}
              <Craft />
              <CardsList />
              <Begin />
              <Footer />
            </motion.div>
          ) : (
            <div className="overflow-hidden">
              <Hero />
              <Journey />
              {articlesData.map(
                ({ title, desc, image, mobileImage }, index) => (
                  <Article
                    key={index}
                    title={title}
                    desc={desc}
                    image={image}
                    mobileImage={mobileImage}
                  />
                ),
              )}
              <Craft />
              <CardsList />
              <Begin />
              <Footer />
            </div>
          )}
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

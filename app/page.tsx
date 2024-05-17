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
import LoadingScreen from "./loading";

export default function Home() {
  useSmoothScroll();

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const ghostRef = useRef<HTMLDivElement | null>(null);
  const { spring, scrollRange, isMobile, isLoading } =
    useHorizScroll(scrollRef);
  const [cursorSize, setCursorSize] = useState(8);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <HoverContext.Provider
      value={{
        cursorSize,
        setCursorSize,
        isMobile,
      }}
    >
      <main className="scroll-smooth md:relative md:h-[1700vh]">
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
            <div>
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

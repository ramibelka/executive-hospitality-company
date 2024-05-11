"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Article from "@/components/Article";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { articlesData } from "@/data";
import Craft from "@/components/Craft";
import Begin from "@/components/Begin";
import CardsList from "@/components/CardsList";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const ghostRef = useRef<HTMLDivElement | null>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  const onResize = (entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  };

  useLayoutEffect(() => {
    scrollRef.current && setScrollRange(scrollRef.current?.scrollWidth);
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef?.current as Element);
    return () => resizeObserver.disconnect();
  }, [scrollRef]);

  const { scrollYProgress } = useScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <main className="relative h-[300vh] scroll-smooth">
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
          className="h-screen"
        />
      </div>
    </main>
  );
}

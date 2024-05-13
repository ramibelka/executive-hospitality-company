"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Article from "@/components/Article";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { articlesData } from "@/data";
import Craft from "@/components/Craft";
import Begin from "@/components/Begin";
import CardsList from "@/components/CardsList";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const ghostRef = useRef<HTMLDivElement | null>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useEffect(() => {
    setViewportW(window.innerWidth);
    function handleResize() {
      setViewportW(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    scrollRef?.current && setScrollRange(scrollRef?.current.scrollWidth);
  }, [scrollRef]);

  const { scrollYProgress } = useScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW],
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 100 };
  const spring = useSpring(transform, physics);
  console.log("heeeeeeeeeer" + viewportW);

  return (
    <main className="relative h-[1700vh] scroll-smooth">
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
  );
}

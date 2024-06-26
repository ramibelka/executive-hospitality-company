import { useScroll, useSpring, useTransform } from "framer-motion";
import { MutableRefObject, useEffect, useLayoutEffect, useState } from "react";

export const useHorizScroll = (
  scrollRef: MutableRefObject<HTMLDivElement | null>,
) => {
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setViewportW(window.innerWidth);
    setIsMobile(screen.width < 768);
    const updateViewport = () => {
      setViewportW(window.innerWidth);
      setIsMobile(screen.width < 768 || window.innerWidth < 768);
    };

    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useLayoutEffect(() => {
    scrollRef?.current && setScrollRange(scrollRef?.current.scrollWidth);
  }, [scrollRef?.current?.scrollWidth]);

  const { scrollYProgress } = useScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW],
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 100 };
  const spring = useSpring(transform, physics);

  return { spring, scrollRange, isMobile };
};

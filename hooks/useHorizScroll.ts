import { useScroll, useSpring, useTransform } from "framer-motion";
import { MutableRefObject, useEffect, useLayoutEffect, useState } from "react";

export const useHorizScroll = (
  scrollRef: MutableRefObject<HTMLDivElement | null>,
) => {
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
  }, [scrollRef?.current]);

  const { scrollYProgress } = useScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW],
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 100 };
  const spring = useSpring(transform, physics);
  return { spring, scrollRange };
};

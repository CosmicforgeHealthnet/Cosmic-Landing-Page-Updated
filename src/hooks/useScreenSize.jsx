"use client";
import { useState, useEffect } from "react";

// Tailwind CSS breakpoints
const breakpoints = {
  sm: 640, // @media (min-width: 640px)
  md: 768, // @media (min-width: 768px)
  lg: 1024, // @media (min-width: 1024px)
  xl: 1280, // @media (min-width: 1280px)
  "2xl": 1536, // @media (min-width: 1536px)
};

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("xs"); // Default to xs (below sm)
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width on client side
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      // Determine screen size based on Tailwind breakpoints
      if (width >= breakpoints["2xl"]) {
        setScreenSize("2xl");
      } else if (width >= breakpoints.xl) {
        setScreenSize("xl");
      } else if (width >= breakpoints.lg) {
        setScreenSize("lg");
      } else if (width >= breakpoints.md) {
        setScreenSize("md");
      } else if (width >= breakpoints.sm) {
        setScreenSize("sm");
      } else {
        setScreenSize("xs");
      }
    };

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper functions for convenience
  const isXs = screenSize === "xs";
  const isSm = screenSize === "sm";
  const isMd = screenSize === "md";
  const isLg = screenSize === "lg";
  const isXl = screenSize === "xl";
  const is2Xl = screenSize === "2xl";

  // Min-width checks (mobile-first approach like Tailwind)
  const isSmUp = windowWidth >= breakpoints.sm;
  const isMdUp = windowWidth >= breakpoints.md;
  const isLgUp = windowWidth >= breakpoints.lg;
  const isXlUp = windowWidth >= breakpoints.xl;
  const is2XlUp = windowWidth >= breakpoints["2xl"];

  return {
    screenSize,
    windowWidth,
    // Exact matches
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    // Min-width checks (useful for responsive logic)
    isSmUp,
    isMdUp,
    isLgUp,
    isXlUp,
    is2XlUp,
  };
};

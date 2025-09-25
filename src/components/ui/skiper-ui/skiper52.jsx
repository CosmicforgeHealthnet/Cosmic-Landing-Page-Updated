"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";

const Skiper52 = () => {
  const images = [
    {
      src: "/images/x.com/13.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/32.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/20.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/21.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/19.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/1.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/2.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/3.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/4.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3]">
      <HoverExpand_001 className="" images={images} />{" "}
    </div>
  );
};

export { Skiper52 };

const HoverExpand_001 = ({ images, className }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full px-5", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {/* Mobile: Horizontal scrollable with click to expand */}
        {isMobile ? (
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-2 w-max px-2">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`relative cursor-pointer overflow-hidden rounded-3xl flex-shrink-0 ${
                    activeImage !== index && "brightness-75"
                  }`}
                  initial={{ width: "4rem", height: "20rem" }}
                  animate={{
                    width: activeImage === index ? "16rem" : "4rem",
                    height: "20rem",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onClick={() => setActiveImage(index)}
                >
                  <AnimatePresence>
                    {activeImage === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute h-full w-full bg-gradient-to-t from-[#272EA7]/80 to-transparent z-10"
                      />
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {activeImage === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.1 }}
                        className="absolute flex h-full w-full flex-col items-start justify-end p-3 z-20"
                      >
                        <h1 className="text-left text-white text-lg font-bold mb-1">
                          {image.title}
                        </h1>
                        <p className="text-left text-sm text-white/90 mb-1">
                          {image.description}
                        </p>
                        <p className="text-left text-xs text-white/50">
                          {image.code}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <img
                    src={image.src}
                    className="size-full object-cover"
                    alt={image.alt}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* Desktop: Original hover expand behavior */
          <div className="flex w-full items-center justify-center gap-1">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`relative cursor-pointer overflow-hidden rounded-3xl ${
                  activeImage !== index && "blur-[2px]"
                }`}
                initial={{ width: "2.5rem", height: "20rem" }}
                animate={{
                  width: activeImage === index ? "40rem" : "15rem",
                  height: activeImage === index ? "24rem" : "24rem",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={() => setActiveImage(index)}
                onHoverStart={() => setActiveImage(index)}
              >
                <AnimatePresence>
                  {activeImage === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute h-full w-full bg-gradient-to-t from-[#272EA7]/80 to-transparent"
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {activeImage === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute flex h-full w-full flex-col items-start justify-end p-4"
                    >
                      <h1 className="text-left text-white text-2xl font-bold">
                        {image.title}
                      </h1>
                      <p className="text-left text-medium text-white/90">
                        {image.description}
                      </p>
                      {/* <p className="text-left text-xs text-white/50">
                        {image.code}
                      </p> */}
                    </motion.div>
                  )}
                </AnimatePresence>
                <img
                  src={image.src}
                  className="size-full object-cover"
                  alt={image.alt}
                />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export { HoverExpand_001 };

/**
 * Skiper 52 HoverExpand_001 — React + Framer Motion
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */

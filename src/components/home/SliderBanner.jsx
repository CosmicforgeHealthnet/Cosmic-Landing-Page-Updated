"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/banners/AR_VR.png",
    alt: "AR & VR Coming Soon",
  },
  {
    id: 2,
    image: "/banners/Pharmacy.png",
    alt: "Pharmacy Coming Soon",
  },
  {
    id: 3,
    image: "/banners/Lab.png",
    alt: "Lab Coming Soon",
  },
  {
    id: 4,
    image: "/banners/Shop.png",
    alt: "Shop Coming Soon",
  },
];

export default function HealthcareSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Animation variants for images
  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 15 : -15,
    }),
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary- rounded-full filter blur-3xl"></div>
      </div>

      {/* Main Slider Container */}
      <div className="relative container mx-auto px-6 py-16 lg:py-24">
        <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
          {/* Background Glow Effect */}
          {/* <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl filter blur-2xl scale-110"
            animate={{
              rotate: 360,
              scale: [1.05, 1.15, 1.05],
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          /> */}

          {/* Image Slider */}
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { type: "spring", stiffness: 200, damping: 20 },
                }}
                className="absolute inset-0 w-full h-full"
                style={{ perspective: "1000px" }}
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  {/* Image with overlay gradient for better contrast */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 z-10" /> */}

                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].alt}
                    fill
                    className="object-cover"
                    priority={currentSlide === 0}
                    quality={90}
                  />

                  {/* Optional: Add a subtle animated border */}
                  {/* <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.3) 50%, transparent 60%)`,
                      backgroundSize: "200% 200%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  /> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Counter/Indicator */}
          {/* <motion.div
            className="absolute top-6 right-6 z-20 bg-black/30 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {currentSlide + 1} / {slides.length}
          </motion.div> */}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8">
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <motion.button
              onClick={goToPrevious}
              className="group w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-white transition-colors" />
            </motion.button>
            <motion.button
              onClick={goToNext}
              className="group w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-white transition-colors" />
            </motion.button>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "transition-all duration-300 rounded-full relative overflow-hidden",
                  currentSlide === index
                    ? "w-12 h-3 bg-gradient-to-r from-primary to-primary"
                    : "w-3 h-3 bg-white/30 hover:bg-white/50"
                )}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {currentSlide === index && (
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Auto-play Indicator
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <motion.div
              className={cn(
                "w-3 h-3 rounded-full transition-colors relative",
                isAutoPlaying ? "bg-green-400" : "bg-gray-500"
              )}
              animate={isAutoPlaying ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {isAutoPlaying && (
                <motion.div
                  className="absolute inset-0 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>
            <span className="font-medium">
              {isAutoPlaying ? "Auto" : "Manual"}
            </span>
          </div> */}
        </div>
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div> */}

      {/* Loading State for Images */}
      <AnimatePresence>
        {slides.map((slide, index) => {
          if (Math.abs(index - currentSlide) <= 1) {
            return (
              <div key={slide.id} className="hidden">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={1200}
                  height={600}
                  priority={index === 0}
                />
              </div>
            );
          }
          return null;
        })}
      </AnimatePresence>
    </section>
  );
}

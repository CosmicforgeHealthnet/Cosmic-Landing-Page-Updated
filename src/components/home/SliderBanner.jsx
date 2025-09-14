"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "SMART WEARABLE.",
    subtitle: "Best Deal Online on smart watches",
    description:
      "Revolutionize Your Health & Lifestyle with the Ultimate IoT Smartwatch! Stay ahead of the game with our IoT-compatible Smartwatch, designed to seamlessly connect with your devices and elevate your daily life. Whether you're tracking fitness, monitoring health, or staying connected on the go, this smartwatch brings intelligence, precision, and convenience to your wrist.",
    price: "$50.00",
    image: "/smartwatch.png",
    features: [
      "UP to 90% OFF",
      "IoT Compatible",
      "Health Monitoring",
      "Fitness Tracking",
    ],
  },
  {
    id: 2,
    title: "HEALTH MONITOR.",
    subtitle: "Advanced health tracking device",
    description:
      "Transform your wellness journey with our cutting-edge Health Monitor. Featuring real-time vitals tracking, sleep analysis, and personalized health insights. Connect seamlessly with your healthcare provider and take control of your health data like never before.",
    price: "$75.00",
    image: "/health-monitor.png",
    features: [
      "Real-time Monitoring",
      "Sleep Analysis",
      "Health Insights",
      "Provider Integration",
    ],
  },
  {
    id: 3,
    title: "FITNESS TRACKER.",
    subtitle: "Your personal fitness companion",
    description:
      "Achieve your fitness goals with our comprehensive Fitness Tracker. Advanced workout detection, calorie tracking, and performance analytics help you stay motivated and reach new heights in your fitness journey.",
    price: "$45.00",
    image: "/fitness-tracker.png",
    features: [
      "Workout Detection",
      "Calorie Tracking",
      "Performance Analytics",
      "Goal Setting",
    ],
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
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotate: direction > 0 ? 15 : -15,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotate: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      rotate: direction < 0 ? 15 : -15,
    }),
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Content Side */}
          <div className="space-y-6 z-10 relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.3 },
                }}
                className="space-y-6"
              >
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <p className="text-blue-400 font-medium text-sm tracking-wider uppercase">
                    {slides[currentSlide].subtitle}
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {slides[currentSlide].title}
                    <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                      {slides[currentSlide].features[0]}
                    </span>
                  </h2>
                </motion.div>

                <motion.p
                  className="text-gray-300 text-lg leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Features */}
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial="hidden"
                  animate="visible"
                >
                  {slides[currentSlide].features
                    .slice(1)
                    .map((feature, index) => (
                      <motion.span
                        key={feature}
                        custom={index}
                        variants={featureVariants}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20"
                      >
                        {feature}
                      </motion.span>
                    ))}
                </motion.div>

                {/* Price and CTA */}
                <motion.div
                  className="flex items-center gap-6 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <motion.div
                    className="text-4xl font-bold text-white"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  >
                    {slides[currentSlide].price}
                  </motion.div>
                  <motion.button
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Shop Now
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Side */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-2xl scale-110"
                animate={{
                  rotate: 360,
                  scale: [1.1, 1.2, 1.1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              ></motion.div>

              {/* Product Image */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`image-${currentSlide}`}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    rotate: { type: "spring", stiffness: 200, damping: 20 },
                  }}
                  className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center border border-gray-700 shadow-2xl"
                >
                  <div className="text-gray-500 text-center">
                    <motion.div
                      className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <span className="text-white text-4xl font-bold">
                        {slides[currentSlide].id}
                      </span>
                    </motion.div>
                    <motion.p
                      className="text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Product Image
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-12">
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={goToPrevious}
              className="group w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
            </button>
            <button
              onClick={goToNext}
              className="group w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  currentSlide === index
                    ? "w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-500"
                    : "w-3 h-3 bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                isAutoPlaying ? "bg-green-400" : "bg-gray-500"
              )}
            ></div>
            <span>{isAutoPlaying ? "Auto" : "Manual"}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>
    </section>
  );
}

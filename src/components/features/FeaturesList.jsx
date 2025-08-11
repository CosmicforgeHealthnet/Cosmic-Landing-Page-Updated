import { Features } from "@/data/features";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function FeaturesList({ setStep, setSelectedFeature }) {
  const handleFeatureSelect = (feature) => {
    setSelectedFeature(feature);
    setStep("features-detail");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 1.2,
      opacity: 0,
      x: 30,
    },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const blurVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: 20,
    },
    visible: {
      opacity: 0.7,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  return (
    <motion.section
      className="max-w-[1100px] grid md:grid-cols-2 gap-5 mx-auto px-4 mt-20 mb-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      {Features.map((feature, index) => (
        <motion.div
          key={feature.id}
          variants={cardVariants}
          onClick={() => handleFeatureSelect(feature)}
          className="cursor-pointer sm:h-[300px] h-[400px] w-[500px] sm:w-[400px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[450px] xl:h-[400px] xl:w-[500px] relative overflow-hidden space-x-2 backdrop-blur-2xl bg-gradient-to-bl to-60% from-20% from-white to-[#9096F829] border-r-0 border-[#DBDDF5] border-l-3 border-b-3 rounded-2xl px-4"
          whileHover={{
            x: -5,
            boxShadow: "0 20px 40px rgba(144, 150, 248, 0.15)",
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 },
          }}
          style={{
            transformPerspective: 1000,
          }}
        >
          {/* Animated blur effect */}
          <motion.div
            className="h-full w-2/5 bg-white absolute z-10 -right-10 blur-xl border"
            variants={blurVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Animated image */}
          <motion.img
            src={feature.img}
            alt=""
            width={450}
            height={450}
            className="absolute -top-5 -right-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 },
            }}
          />

          {/* Animated text content */}
          <motion.div
            className="bottom-3 absolute"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="font-semibold text-3xl"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              {feature.title}
            </motion.h1>
            <motion.p
              className="max-w-4/5"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.6,
                },
              }}
            >
              {feature.subtitle}
            </motion.p>
          </motion.div>

          {/* Subtle animated border glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-transparent"
            whileHover={{
              borderColor: "rgba(144, 150, 248, 0.3)",
              boxShadow: "inset 0 0 20px rgba(144, 150, 248, 0.1)",
              transition: { duration: 0.3 },
            }}
          />
        </motion.div>
      ))}
    </motion.section>
  );
}

export default FeaturesList;

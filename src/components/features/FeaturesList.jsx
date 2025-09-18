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
      className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 mx-auto px-4 mt-20 mb-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      {Features.map((feature, index) => (
        <motion.div
          key={feature.id}
          variants={cardVariants}
          // onClick={() => handleFeatureSelect(feature)}
          className="group cursor-pointer relative overflow-hidden bg-gradient-to-bl to-60% from-20% from-white to-[#9096F829] border-r-0 border-[#DBDDF5] border-l-4 border-b-4 rounded-2xl min-h-[350px] pb-6"
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
            className="absolute top-0 right-0 w-[80%] h-1/2 bg-[#08109C66] blur-xl z-10"
            variants={blurVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Image container with responsive positioning */}
          <div className="absolute top-0 right-0 w-[90%] h-[40%] md:h-[40%] lg:h-1/2 overflow-hidden rounded-bl-2xl z-20">
            <motion.img
              src={feature.img}
              alt={feature.title}
              className="w-full h-full object-cover transition-transform duration-300"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.05,
                rotate: 1,
                transition: { duration: 0.3 },
              }}
            />
          </div>

          {/* Content container - positioned to allow card expansion */}
          <motion.div
            className="relative z-30 mt-[55%] p-4 sm:p-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.h1
                className="font-semibold text-xl sm:text-2xl lg:text-3xl text-primary leading-tight"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                {feature.title}
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-[90%]"
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
            </div>
          </motion.div>

          {/* Decorative gradient overlay for better text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/90 via-white/60 to-transparent pointer-events-none z-10" />

          {/* Subtle animated border glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
            whileHover={{
              borderColor: "rgba(144, 150, 248, 0.3)",
              boxShadow: "inset 0 0 20px rgba(144, 150, 248, 0.1)",
              transition: { duration: 0.3 },
            }}
          />

          {/* Interactive hover indicator */}
          <motion.div
            className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 20px rgba(144, 150, 248, 0.6)",
            }}
          />
        </motion.div>
      ))}
    </motion.section>
  );
}

export default FeaturesList;

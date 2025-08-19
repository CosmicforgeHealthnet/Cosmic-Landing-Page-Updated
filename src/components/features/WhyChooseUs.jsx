import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

function WhyChooseUs() {
  const router = useRouter();
  const whyChooseUs = [
    {
      id: 1,
      title: "Qualified Medical Professionals",
      description:
        "Our physicians are certified and licensed professionals who provide patients with standard medical care and expertise.",
    },
    {
      id: 2,
      title: "Advanced Technology Solutions",
      description:
        "State-of-the-art telemedicine platform with AI-driven diagnostics for accurate and efficient healthcare delivery.",
    },
    {
      id: 3,
      title: "24/7 Accessible Healthcare",
      description:
        "Round-the-clock medical support ensuring you get care whenever you need it, from anywhere in the world.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Special image variants with floating and pulsing effects
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      rotateY: 25,
      x: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    },
  };

  // Floating animation for the image
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotateX: [0, 2, 0],
      rotateY: [0, -2, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  // Glowing effect variants
  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(144, 150, 248, 0.3)",
        "0 0 40px rgba(144, 150, 248, 0.6)",
        "0 0 20px rgba(144, 150, 248, 0.3)",
      ],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="bg-[#010F42]  overflow-hidden">
      <motion.div
        className="grid md:flex md:justify-between  items-center justify-center gap-15 max-w-[1100px] mx-auto py-20 px-10 pt-10 md:pt-60"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Content */}
        <div className="flex flex-col gap-4 text-white">
          <motion.h1
            className="text-5xl mb-10 font-bold"
            variants={titleVariants}
          >
            Why <span className="text-[#DBDDF5]">Choose Us</span>
          </motion.h1>

          {whyChooseUs.map((reasons, index) => (
            <motion.div
              key={reasons.id}
              className="mb-4"
              variants={itemVariants}
              whileHover={{
                x: 10,
                transition: { duration: 0.3 },
              }}
            >
              <motion.h2
                className="text-lg md:text-2xl font-semibold  mb-2"
                whileHover={{
                  color: "#DBDDF5",
                  transition: { duration: 0.3 },
                }}
              >
                {reasons.title}
              </motion.h2>
              <motion.p
                className="text-white/50 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.5,
                  transition: {
                    delay: 0.2 * (index + 1),
                    duration: 0.6,
                  },
                }}
              >
                {reasons.description}
              </motion.p>
            </motion.div>
          ))}

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href={
                "https://dashboard.cosmicforge-healthnet.com/auth/register?user_type=doctor"
              }
              className="bg-primary hover:bg-primary/80 text-white font-semibold py-4 px-8 text-center rounded-full transition-colors duration-300 min-w-[200px]"
            >
              Join as Doctor
            </Link>
            <Link
              href={
                "https://dashboard.cosmicforge-healthnet.com/auth/register?user_type=patient"
              }
              className="z-20 bg-transparent hover:bg-gray-100 hover:text-primary text-white font-semibold py-4 px-8 text-center rounded-full border-2 border-white transition-colors duration-300 min-w-[200px]"
            >
              Join as Patient
            </Link>
          </div>
        </div>

        {/* Right Image with Special Effects */}
        <motion.div
          className="relative flex justify-center items-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#9096F8] rounded-full opacity-30"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
          <motion.img
            src="/features/featuresDevice.png"
            alt="Medical Device"
            className="w-[200px] scale-120 mt-20 md:-mt-5 lg:scale-180 lg:w-[350px] xl:scale-125 xl:w-[500px] relative z-10"
            variants={floatingVariants}
            animate="animate"
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.5 },
            }}
            style={{
              filter: "drop-shadow(0 10px 30px rgba(144, 150, 248, 0.3))",
              transformStyle: "preserve-3d",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WhyChooseUs;

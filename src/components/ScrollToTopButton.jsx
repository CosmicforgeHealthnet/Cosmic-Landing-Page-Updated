import { useAnimatedScrollButton } from "@/hooks/useAnimatedScrollButton";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export const ScrollToTopButton = ({ isButtonVisible, scrollToTop }) => {
  // Animation variants for the button
  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: 20,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: 20,
      rotate: 180,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Floating animation
  const floatingVariants = {
    animate: {
      y: [-3, 3, -3],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  // Pulse animation for the arrow
  const arrowVariants = {
    animate: {
      y: [-2, 2, -2],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <>
      {/* Animated Scroll to Top Button */}
      <AnimatePresence>
        {isButtonVisible && (
          <motion.div
            className="fixed bottom-20 right-5 z-50"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div variants={floatingVariants} animate="animate">
              <Button
                variant={"default"}
                className="cursor-pointer rounded-full p-5 text-white relative overflow-hidden group shadow-lg"
                onClick={scrollToTop}
                asChild
              >
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "rgb(59, 130, 246)", // Blue on hover
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  {/* Background ripple effect */}
                  <motion.div
                    className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20"
                    initial={{ scale: 0 }}
                    whileHover={{
                      scale: 1,
                      opacity: [0, 0.2, 0],
                      transition: { duration: 0.6 },
                    }}
                  />

                  {/* Animated Arrow */}
                  <motion.div variants={arrowVariants} animate="animate">
                    <ArrowUp className="w-6 h-6" />
                  </motion.div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                    animate={{
                      x: ["-100%", "100%"],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                </motion.button>
              </Button>
            </motion.div>

            {/* Tooltip */}
            <motion.div
              className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 pointer-events-none whitespace-nowrap"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              Scroll to top
              <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-800"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

import { useEffect, useState } from "react";

export const useAnimatedScrollButton = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  // Check window scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return { scrollToTop, isButtonVisible };
};

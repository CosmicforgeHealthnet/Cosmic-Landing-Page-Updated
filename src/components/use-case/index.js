"use client";
import React from "react";
import PageHeader from "../shared/Pageheader";
import { ScrollToTopButton } from "../ScrollToTopButton";
import { useAnimatedScrollButton } from "@/hooks/useAnimatedScrollButton";
import UseCaseComponent from "./UseCaseComponent";

const UseCaseIndex = () => {
  const { scrollToTop, isButtonVisible } = useAnimatedScrollButton();

  return (
    <div>
      <PageHeader
        title="Use Case"
        gradient="from-blue-400 via-purple-400 to-green-300"
      />
      <UseCaseComponent />
      <ScrollToTopButton
        scrollToTop={scrollToTop}
        isButtonVisible={isButtonVisible}
      />
    </div>
  );
};

export default UseCaseIndex;

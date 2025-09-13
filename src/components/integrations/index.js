"use client";
import React from "react";
import PageHeader from "../shared/Pageheader";
import { ScrollToTopButton } from "../ScrollToTopButton";
import { useAnimatedScrollButton } from "@/hooks/useAnimatedScrollButton";
import IntegrationsContent from "./Integrations";

const IntegrationsIndex = () => {
  const { scrollToTop, isButtonVisible } = useAnimatedScrollButton();

  return (
    <div>
      <PageHeader
        title="Terms and Conditions"
        gradient="from-blue-400 via-purple-400 to-green-300"
      />
      <IntegrationsContent />
      {/*<WhyChooseUs /> */}
      <ScrollToTopButton
        scrollToTop={scrollToTop}
        isButtonVisible={isButtonVisible}
      />
    </div>
  );
};

export default IntegrationsIndex;

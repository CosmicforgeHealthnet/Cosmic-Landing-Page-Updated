"use client";
import React, { useEffect, useState } from "react";
import PageHeader from "../shared/Pageheader";
import TermsAndConditionsContent from "./TermsAndConditionsContent";
import { ScrollToTopButton } from "../ScrollToTopButton";
import { useAnimatedScrollButton } from "@/hooks/useAnimatedScrollButton";

const TermsAndConditionsIndex = () => {
  const { scrollToTop, isButtonVisible } = useAnimatedScrollButton();

  return (
    <div>
      <PageHeader
        title="Terms and Conditions"
        gradient="from-blue-400 via-purple-400 to-green-300"
      />
      <TermsAndConditionsContent />
      {/*<WhyChooseUs /> */}
      <ScrollToTopButton
        scrollToTop={scrollToTop}
        isButtonVisible={isButtonVisible}
      />
    </div>
  );
};

export default TermsAndConditionsIndex;

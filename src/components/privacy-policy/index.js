"use client";
import React from "react";
import PageHeader from "../shared/Pageheader";
import PrivacyPolicyContent from "./PrivacyPolicyContent";
import { ScrollToTopButton } from "../ScrollToTopButton";
import { useAnimatedScrollButton } from "@/hooks/useAnimatedScrollButton";

const PrivacyPolicyIndex = () => {
  const { scrollToTop, isButtonVisible } = useAnimatedScrollButton();

  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        gradient="from-blue-400 via-purple-400 to-green-300"
      />
      <PrivacyPolicyContent />
      <ScrollToTopButton
        scrollToTop={scrollToTop}
        isButtonVisible={isButtonVisible}
      />
    </div>
  );
};

export default PrivacyPolicyIndex;

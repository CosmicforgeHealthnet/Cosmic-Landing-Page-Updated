"use client";
import React from "react";
import PageHeader from "../shared/Pageheader";
import { ScrollToTopButton } from "../ScrollToTopButton";
import { useAnimatedScrollButton } from "@/hooks/useAnimatedScrollButton";
import ComplianceContent from "./ComplianceContent";

const ComplianceIndex = () => {
  const { scrollToTop, isButtonVisible } = useAnimatedScrollButton();

  return (
    <div>
      <PageHeader
        title="PCI Compliance Statement"
        gradient="from-blue-400 via-purple-400 to-green-300"
      />
      <ComplianceContent />
      <ScrollToTopButton
        scrollToTop={scrollToTop}
        isButtonVisible={isButtonVisible}
      />
    </div>
  );
};

export default ComplianceIndex;

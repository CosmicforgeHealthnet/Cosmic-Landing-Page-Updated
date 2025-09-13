"use client";
import React from "react";
import PageHeader from "../shared/Pageheader";
import { ScrollToTopButton } from "../ScrollToTopButton";
import { useAnimatedScrollButton } from "@/hooks/useAnimatedScrollButton";
import StatusPageContent from "./StatusPage";

const StatusPageIndex = () => {
  const { scrollToTop, isButtonVisible } = useAnimatedScrollButton();

  return (
    <div>
      <PageHeader
        title="Status Page"
        gradient="from-blue-400 via-purple-400 to-green-300"
      />
      <StatusPageContent />
      <ScrollToTopButton
        scrollToTop={scrollToTop}
        isButtonVisible={isButtonVisible}
      />
    </div>
  );
};

export default StatusPageIndex;

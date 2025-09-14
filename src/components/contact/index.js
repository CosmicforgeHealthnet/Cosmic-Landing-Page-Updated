"use client";
import React from "react";
import PageHeader from "../shared/Pageheader";
import { ScrollToTopButton } from "../ScrollToTopButton";
import { useAnimatedScrollButton } from "@/hooks/useAnimatedScrollButton";
import ContactUsComponent from "./ContactUsComponent";

const ContactUsIndex = () => {
  const { scrollToTop, isButtonVisible } = useAnimatedScrollButton();

  return (
    <div>
      <PageHeader
        title="Get in"
        styledTitle="Touch"
        subtitle="Have questions about our healthcare platform? We're here to help you navigate your healthcare journey."
      />
      <ContactUsComponent />
      <ScrollToTopButton
        scrollToTop={scrollToTop}
        isButtonVisible={isButtonVisible}
      />
    </div>
  );
};

export default ContactUsIndex;

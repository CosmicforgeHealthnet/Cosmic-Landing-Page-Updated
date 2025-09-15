import ContactUsComponent from "@/components/contact/ContactUsComponent";
import FAQSection from "@/components/home/FAQSection";
import HealthcareCTASection from "@/components/home/HealthcareCTASection";
import HeroNew from "@/components/home/HeroNew";
import PricingSection from "@/components/home/Pricing";
import HealthcareSlider from "@/components/home/SliderBanner";
import SpecialistSection from "@/components/home/Specialists";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroNew />
      <HealthcareSlider />
      <SpecialistSection />
      <HealthcareCTASection />
      <PricingSection />
      <FAQSection />
      <ContactUsComponent />
    </div>
  );
};

export default HomePage;

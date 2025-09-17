import ContactUsComponent from "@/components/contact/ContactUsComponent";
import { ExpandOnHoverFeatures } from "@/components/home/ExpandOnHoverFeatures";
import FAQSection from "@/components/home/FAQSection";
import HealthcareCTASection from "@/components/home/HealthcareCTASection";
import HeroNew from "@/components/home/HeroNew";
import PricingSection from "@/components/home/Pricing";
import SpecialistSection from "@/components/home/Specialists";
import { LogoCloudSimple } from "@/components/home/Trusted";
import WhoCanUsePlatform from "@/components/home/WhoCanUsePlatform";
import React from "react";

const HomePage = () => {
  return (
    <div className="md:overflow-x-visible overflow-hidden">
      <HeroNew />
      <ExpandOnHoverFeatures />
      <SpecialistSection />
      <HealthcareCTASection />
      <WhoCanUsePlatform />
      <PricingSection />
      <FAQSection />
      <LogoCloudSimple />
      <ContactUsComponent isHomeScreen={true} />
    </div>
  );
};

export default HomePage;

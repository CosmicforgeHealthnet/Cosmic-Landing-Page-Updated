import FAQSection from "@/components/home/FAQSection";
import HealthcareCTASection from "@/components/home/HealthcareCTASection";
import HeroNew from "@/components/home/HeroNew";
import PricingSection from "@/components/home/Pricing";
import SpecialistSection from "@/components/home/Specialists";
import React from "react";

const HomePage = () => {
   return (
      <div>
         <HeroNew />
         <SpecialistSection />
         <HealthcareCTASection />
         <PricingSection />
         <FAQSection />
      </div>
   );
};

export default HomePage;

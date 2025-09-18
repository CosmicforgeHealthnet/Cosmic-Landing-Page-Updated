"use client";
import React, { useEffect, useState } from "react";
// import OurStorySection from "./OurStorySection";
// import MissionVisionImpactSection from "./MissionVisionImpactSection";
import PageHeader from "../shared/Pageheader";
import FeaturesList from "./FeaturesList";
import WhyChooseUs from "./WhyChooseUs";
import FeatureDetail from "./FeatureDetail";

const FeaturesIndex = () => {
  const [step, setStep] = useState("features-list");
  const [selectedFeature, setSelectedFeature] = useState(null);
  useEffect(() => {
    console.log(selectedFeature);
    console.log(step);
  }, [selectedFeature]);

  return (
    <div>
      {step == "features-list" ? (
        <PageHeader
          title={`Our Features`}
          gradient="from-blue-400 via-purple-400 to-green-300"
        />
      ) : (
        <PageHeader
          title={selectedFeature.title}
          gradient="from-blue-400 via-purple-400 to-green-300"
          backButton={{
            label: "Go back",
            function: () => setStep("features-list"),
          }}
        />
      )}

      {step == "features-list" ? (
        <FeaturesList
          setStep={setStep}
          setSelectedFeature={setSelectedFeature}
        />
      ) : (
        <FeatureDetail selectedFeature={selectedFeature} setStep={setStep} />
      )}
      <WhyChooseUs />
    </div>
  );
};

export default FeaturesIndex;

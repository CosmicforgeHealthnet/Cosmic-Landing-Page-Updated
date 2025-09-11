import React from "react";
import OurStorySection from "./OurStorySection";
import MissionVisionImpactSection from "./MissionVisionImpactSection";
import PageHeader from "../shared/Pageheader";
import AboutUsConclusion from "./AboutUsConclusion";

const AboutIndex = () => {
  return (
    <div>
      <PageHeader
        title="About Us"
        gradient="from-blue-400 via-purple-400 to-green-300"
      />
      <OurStorySection />
      <MissionVisionImpactSection />
      <AboutUsConclusion />
    </div>
  );
};

export default AboutIndex;

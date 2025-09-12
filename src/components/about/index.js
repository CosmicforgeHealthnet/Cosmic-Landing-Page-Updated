import React from "react";
import OurStorySection from "./OurStorySection";
import MissionVisionImpactSection from "./MissionVisionImpactSection";
import PageHeader from "../shared/Pageheader";

const AboutIndex = () => {
   return (
      <div>
         <PageHeader
            title="About Us"
            gradient="from-blue-400 via-purple-400 to-green-300"
         />
         <OurStorySection />
         <MissionVisionImpactSection />
      </div>
   );
};

export default AboutIndex;

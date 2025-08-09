import React from "react";
import PageHeader from "../shared/Pageheader";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

const PrivacyPolicyIndex = () => {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        gradient="from-blue-400 via-purple-400 to-green-300"
      />
      <PrivacyPolicyContent />
      {/*<WhyChooseUs /> */}
    </div>
  );
};

export default PrivacyPolicyIndex;

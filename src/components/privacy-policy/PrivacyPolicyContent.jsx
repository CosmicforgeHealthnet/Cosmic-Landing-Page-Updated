import React from "react";
import {
  DashedCategoryLabel,
  Description,
  Header,
} from "../shared/LegalDocument";

function PrivacyPolicyContent() {
  const DataUsePoints = [
    {
      id: 1,
      title: "Deliver care",
      description: `connect you with licensed clinicians, store medical notes, issue prescriptions.
Operate & secure the Service – authenticate log-ins, prevent fraud, detect security incidents.`,
    },
    {
      id: 2,
      title: "Improve features",
      description: `connect you with licensed clinicians, store medical notes, issue prescriptions.
Operate & secure the Service – authenticate log-ins, prevent fraud, detect security incidents.`,
    },
    {
      id: 3,
      title: "Payments & billing ",
      description: `connect you with licensed clinicians, store medical notes, issue prescriptions.
Operate & secure the Service – authenticate log-ins, prevent fraud, detect security incidents.`,
    },
    {
      id: 4,
      title: "Marketing (optional) ",
      description: `connect you with licensed clinicians, store medical notes, issue prescriptions.
Operate & secure the Service – authenticate log-ins, prevent fraud, detect security incidents.`,
    },
  ];
  return (
    <section className="max-w-[1100px] mx-auto py-10">
      <div>
        <Description
          description="[Company Name] (“we,” “our,” or “the Platform”) provides virtual
          medical consultations and related digital health services through the
          website [domain] and our mobile apps (together, the “Service”). We are
          incorporated in [Jurisdiction] with registered office at [Address]."
        />
        <Header header={"How we use your data"} className="mt-5 text-2xl" />
        <DashedCategoryLabel
          points={DataUsePoints}
          className="flex flex-col gap-5"
        />
      </div>
    </section>
  );
}

export default PrivacyPolicyContent;

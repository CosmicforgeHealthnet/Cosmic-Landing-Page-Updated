import React from "react";
import { Description } from "../shared/LegalDocument";

const StatusPageData = [
  {
    id: "p1",
    header: "Service Status Overview",
    description:
      "Cosmicforge HealthNet keeps you informed about the availability and performance of our services. We post real-time updates on system status, scheduled maintenance, and any disruptions affecting telemedicine, patient management, or partner services.",
  },
  {
    id: "p2",
    header: "Monitoring and Response",
    description:
      "Our engineering and support teams monitor performance continuously and act quickly to resolve issues. If an incident occurs, we provide clear timelines and resolution steps. You can trust that every update reflects our commitment to transparency and reliability.",
  },
  {
    id: "p3",
    header: "Our Commitment",
    description:
      "At Cosmicforge HealthNet, we value your trust and work to ensure uninterrupted access to the healthcare tools you rely on every day.",
  },
];

function StatusPageContent() {
  const HeaderStyle = "mt-5 text-2xl font-bold pb-2";

  return (
    <section className="max-w-[1100px] mx-auto py-10 px-4 xl:px-0">
      <div>
        {/* Refund Policy */}

        {StatusPageData.map((data) => (
          <Description
            className={"mb-4"}
            isLink={data.isLink ? data.isLink : false}
            link={data.link && data.link}
            linkType={data.linkType && data.linkType}
            key={data.id}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
}

export default StatusPageContent;

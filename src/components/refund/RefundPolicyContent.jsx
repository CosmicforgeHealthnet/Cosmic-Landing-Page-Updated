import React from "react";
import { Description } from "../shared/LegalDocument";

const RefundPolicyData = [
  {
    id: "p1",
    description:
      "At Cosmicforge HealthNet, we believe healthcare transactions should be fair and transparent. Our refund policy protects both patients and doctors while ensuring trust in our platform.",
  },
  {
    id: "p2",
    description:
      "Patients are eligible for a full refund if a doctor cancels or fails to attend an appointment, if technical issues prevent a consultation from taking place, or if incorrect charges are applied. Refund requests must be submitted within 7 days of the scheduled consultation.",
  },
  {
    id: "p3",
    description:
      "You can cancel your appointment up to 24 hours before the scheduled time for a full refund or reschedule. Cancellations made less than 24 hours before may not qualify for a refund, depending on the doctor’s policy. Missed appointments without notice are non-refundable.",
  },
  {
    id: "p4",
    description:
      "Refunds are processed within 10 business days from the original or initial payment date. Doctors do not receive payment for canceled consultations that result in refunds.",
  },
  {
    id: "p5",
    description:
      "If you are dissatisfied with an outcome but the consultation was delivered as agreed, refunds do not apply. Disputes can be raised through our Support Center and are resolved within 14 business days.",
  },
  {
    id: "p6",
    isLink: true,
    linkType: "email",
    link: "support@cosmicforge-healthnet.com",
    description: `For assistance, contact us at support@cosmicforge-healthnet.com or through live chat during business hours.`,
  },
];

function RefundPolicyContent() {
  const HeaderStyle = "mt-5 text-2xl font-bold pb-2";

  return (
    <section className="max-w-[1100px] mx-auto py-10 px-4 xl:px-0">
      <div>
        {/* Refund Policy */}

        {RefundPolicyData.map((data) => (
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

export default RefundPolicyContent;

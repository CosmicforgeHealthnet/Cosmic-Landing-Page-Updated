import React from "react";
import {
  AlphaCategoryLabel,
  BulletCategoryLabel,
  DashedCategoryLabel,
  DecimalCategoryLabel,
  Description,
  Header,
} from "../shared/LegalDocument";
import {
  BreachNotificationContent,
  DataBreachSteps,
  DataUsePoints,
  HowWeUseSurveyInformation,
  InformationWeCollectPoints,
  PersonalDataDisclosure,
  TechUsedForAutoDataCollection,
  ThirdPartyUndertakings,
} from "@/data/privacyPolicy";

function RefundPolicyContent() {
  const HeaderStyle = "mt-5 text-2xl font-bold pb-2";

  return (
    <section className="max-w-[1100px] mx-auto py-10 px-4 xl:px-0">
      <div>
        {/* Refund Policy */}
        <Header header={"OverView"} className={HeaderStyle} />
        <Description
          description="CosmicForge HealthNet is dedicated to maintaining transparency and fairness in all financial 
transactions. This policy defines the terms under which refunds can be requested and services 
canceled, while emphasizing a model that avoids additional charges for patients."
        />

        {/* Eligibility for Refunds */}
        <Header header={"Eligibility for Refunds"} className={HeaderStyle} />
        <Description
          description={"Refunds are applicable under the following conditions:"}
          className={"pb-2"}
        />
        <BulletCategoryLabel
          points={[
            {
              description:
                "Provider Cancellations: If the healthcare provider cancels or fails to attend the scheduled consultation.",
            },
            {
              description:
                "Platform Errors:Technical issues or disruptions on the platform that prevent the consultation from occurring.",
            },
            {
              description:
                "Incorrect Charges: If a patient is charged due to a system error, a full refund will be issued.",
            },
          ]}
          className="flex flex-col gap-2"
        />
        <Description
          description={`
        Refund requests must be submitted within 7 days of the consultation date
            `}
        />
        {/* Cancellation Policy */}
        <Header header={"Cancellation Policy"} className={HeaderStyle} />
        <Description
          description={"For Patients"}
          className={"pb-2 font-semibold"}
        />
        <BulletCategoryLabel
          points={[
            {
              description: `Free Cancellations:
Patients may cancel appointments up to 24 hours before the scheduled time for 
a full refund or rescheduling option.`,
            },
            {
              description: `Late Cancellations:
Cancellations made less than 24 hours before the appointment may not be 
eligible for a refund, depending on the provider’s policy.`,
            },
            {
              description: `No-Shows:
Patients who miss their scheduled consultation without prior cancellation will 
not receive a refund`,
            },
          ]}
          className="flex flex-col gap-2"
        />
        <Description
          description={"For Providers"}
          className={"pb-2 font-semibold"}
        />
        <BulletCategoryLabel
          points={[
            {
              description: `Providers are expected to honor all booked appointments unless unavoidable 
circumstances arise.`,
            },
            {
              description: `Providers who cancel or fail to attend will forfeit their consultation fee, and patients will 
receive a full refund.`,
            },
          ]}
          className="flex flex-col gap-2"
        />
        <Header header={"Processing Refunds"} className={HeaderStyle} />
        <BulletCategoryLabel
          points={[
            {
              description: `Refund Timeline:
Approved refunds will be processed within 10 business days via the original 
payment method.`,
            },
            {
              description: `Provider Earnings:
If a refund is issued, the provider will not receive payment for the canceled 
consultation.`,
            },
            {
              description: `Platform Fees:
No additional transaction or platform fees are charged to patients, ensuring full 
refunds reflect the amount paid`,
            },
          ]}
          className="flex flex-col gap-2"
        />
        <Header header={"Commission Model"} className={HeaderStyle} />
        <BulletCategoryLabel
          points={[
            {
              description: `CosmicForge HealthNet deducts a commission fee from the provider’s consultation 
payment before transferring the balance.`,
            },
            {
              description: `This commission fee does not affect patient refunds and is only applied after a 
completed consultation.`,
            },
          ]}
          className="flex flex-col gap-2"
        />
        <Header header={"Disputes"} className={HeaderStyle} />
        <BulletCategoryLabel
          points={[
            {
              description: `Patients and providers can escalate unresolved refund disputes to the platform’s 
Support Center`,
            },
            {
              description: `All disputes will be reviewed and resolved within 14 business days, with both parties 
allowed to submit evidence for consideration.`,
            },
          ]}
          className="flex flex-col gap-2"
        />
        <Header header={"Exceptions"} className={HeaderStyle} />
        <Description
          description={"Refunds are not provided in the following cases:"}
        />
        <BulletCategoryLabel
          points={[
            {
              description: `Dissatisfaction with the consultation outcome if the provider delivered the service as 
described.`,
            },
            {
              description: `Patient cancellations made outside the provider’s specified timeframe, unless under 
exceptional and verified circumstances.`,
            },
          ]}
          className="flex flex-col gap-2"
        />
        <Header header={"Contact Information"} className={HeaderStyle} />
        <Description
          description={
            "For questions or assistance with refunds and cancellations, please contact:"
          }
        />
        <Description description={"Email: support@cosmicforgehealthnet.com"} />
        <Description
          description={
            "Live Chat: Available on the platform during business hours."
          }
        />

        <Header header={"Policy Updates"} className={HeaderStyle} />
        <Description
          description={
            "This policy is subject to periodic updates. Users will be notified of significant changes via email or platform notifications."
          }
        />
      </div>
    </section>
  );
}

export default RefundPolicyContent;

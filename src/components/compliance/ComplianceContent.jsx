import React from "react";
import {
  AlphaCategoryLabel,
  BulletCategoryLabel,
  DashedCategoryLabel,
  DecimalCategoryLabel,
  Description,
  Header,
} from "../shared/LegalDocument";

function ComplianceContent() {
  const HeaderStyle = "mt-5 text-2xl font-bold pb-2";

  return (
    <section className="max-w-[1100px] mx-auto py-10 px-4 xl:px-0">
      <div>
        {/* Refund Policy */}
        <Header header={"Introduction"} className={HeaderStyle} />
        <Description
          description={`CosmicForge HealthNet Limited ("the Company") is a digital health technology 
platform that connects patients with licensed healthcare professionals for virtual 
consultations and related health services. While the platform facilitates secure 
online payments, it does not collect, store, or process cardholder data directly`}
        />
        <Header
          header={"Use of PCI-Certified Payment Gateways"}
          className={HeaderStyle}
        />
        <Description
          description={`All financial transactions on the platform are processed exclusively through PCI-DSS 
Level 1 certified third-party payment service providers, including:`}
        />
        <DashedCategoryLabel
          points={[
            {
              id: 1,
              description: "Paystack",
            },
            {
              id: 2,
              description: "Flutterwave",
            },
          ]}
        />
        <Description
          description={`These providers manage the complete payment workflow, including card data input, 
authorization, transaction processing, and disbursement.`}
        />

        <Header
          header={"Platform Integration & Security Measures"}
          className={HeaderStyle}
        />
        <Description
          description={`CosmicForge HealthNet Limited ensures a secure payment environment through the 
following controls:`}
          className={"pb-2"}
        />
        <DashedCategoryLabel
          points={[
            {
              id: 1,
              description: `No credit card numbers, CVVs, or other sensitive payment data are stored, logged, or 
processed by the platform.`,
            },
            {
              id: 2,
              description: `All payment interactions occur via HTTPS-encrypted sessions, using redirects or 
secure embedded interfaces provided by the payment gateways.`,
            },
            {
              id: 3,
              description: `Platform sessions are protected by SSL/TLS encryption, and internal system access is 
controlled via role-based permissions.`,
            },
            {
              id: 4,
              description: `Only non-sensitive transaction metadata (e.g., reference IDs, status, user IDs) is 
retained for reconciliation and reporting`,
            },
            {
              id: 5,
              description: `Access to financial records is restricted and monitored to prevent unauthorized use.`,
            },
          ]}
        />

        <Header header={"Compliance Standing"} className={HeaderStyle} />
        <Description
          description={`As a business that does not handle card data directly and relies exclusively on PCIcertified processors, CosmicForge HealthNet Limited qualifies as a Level 4 PCI-DSS 
merchant and is not required to maintain independent PCI certification. Nonetheless, 
the Company upholds PCI-DSS best practices by:`}
          className={"pb-2"}
        />

        <DashedCategoryLabel
          points={[
            {
              id: 1,
              description: `Ensuring all payment flows are secured and encrypted`,
            },
            {
              id: 2,
              description: `Avoiding storage of sensitive payment information`,
            },
            {
              id: 3,
              description: `Working only with compliant and certified gateway providers`,
            },
          ]}
        />

        <Header header={"Ongoing Commitment"} className={HeaderStyle} />
        <Description
          description={`The Company performs regular internal security assessments and compliance reviews 
to maintain data integrity and e`}
          className={"pb-2"}
        />
        <Description
          description={`This statement is provided to affirm CosmicForge HealthNet Limited's commitment to 
PCI-DSS compliance via certified gateway integrations and is available for use during 
audits, vendor onboarding, or due diligence procedures.`}
          className={"pb-2"}
        />

        <hr className="mt-5 mb-2" />
        <p className="italic">Last updated: June 2025</p>
      </div>
    </section>
  );
}

export default ComplianceContent;

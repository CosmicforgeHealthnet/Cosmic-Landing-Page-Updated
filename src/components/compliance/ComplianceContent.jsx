import React from "react";
import {
  AlphaCategoryLabel,
  BulletCategoryLabel,
  DashedCategoryLabel,
  DecimalCategoryLabel,
  Description,
  Header,
} from "../shared/LegalDocument";
import { OurPlatFormEnsures } from "@/data/TermsAndConditions";

const ComplianceData = [
  {
    id: "p1",
    isHeader: false,
    description:
      "At Cosmicforge HealthNet, we take compliance seriously. We design every part of our platform to meet strict global standards for your payment security and trust.",
  },
  {
    id: "p2",
    isHeader: false,
    description:
      "We do not collect or store your credit card data. All financial transactions are processed through our PCI DSS Level 1 certified partners, including Paystack and Flutterwave. Our partners handle card entry, authorization, and disbursement securely.",
  },
  {
    id: "p3",
    isHeader: false,
    description: "Our platform ensures:",
    isList: true,
    List: (
      <BulletCategoryLabel
        points={OurPlatFormEnsures}
        className="flex flex-col gap-2 mb-4"
      />
    ),
  },
  {
    id: "p4",
    isHeader: false,
    description:
      "As a brand that does not handle card data directly, Cosmicforge HealthNet qualifies as a Level 4 PCI-DSS merchant. While we are not required to hold independent PCI certification, we uphold the same best practices. ",
  },
  {
    id: "p5",
    isHeader: false,
    description:
      "We commit to working only with certified providers, to maintain security, and to avoid storage of sensitive information.",
  },
  {
    id: "p6",
    isHeader: false,
    description:
      "We also perform regular internal reviews and security assessments to protect your data and maintain our alignment with global standards. Our compliance framework ensures safe, reliable payments for both patients and doctors on our platform.",
  },
];

function ComplianceContent() {
  const HeaderStyle = "mt-5 text-2xl font-bold pb-2";

  return (
    <section className="max-w-[1100px] mx-auto py-10 px-4 xl:px-0">
      <div>
        {/* Refund Policy */}
        <div>
          {/* Terms and conditions */}
          {ComplianceData.map((data) => (
            <React.Fragment key={data.key}>
              {data.isHeader && (
                <Header header={data.header} className={HeaderStyle} />
              )}
              <Description description={data.description} className={"pb-2"} />
              {data.isSubDescriptions &&
                data.subDescription.map((subDes) => (
                  <Description
                    key={subDes.id}
                    isLink={subDes.isLink ? subDes.isLink : false}
                    link={subDes.link && subDes.link}
                    linkType={subDes.linkType && subDes.linkType}
                    description={subDes.description}
                    className={"pb-2"}
                  />
                ))}
              {data.isList && data.List}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComplianceContent;

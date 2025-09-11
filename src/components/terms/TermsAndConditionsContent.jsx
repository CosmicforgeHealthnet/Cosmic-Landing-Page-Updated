import React from "react";
import {
  BulletCategoryLabel,
  Description,
  Header,
} from "../shared/LegalDocument";
import { userResponsibilities } from "@/data/TermsAndConditions";
import { LegalDocumentContainer } from "../shared/LegalDocumentContainer";

const TermsData = [
  {
    id: "p1",
    isHeader: true,
    header: "Introduction",
    description:
      "Welcome to Cosmicforge HealthNet. By using our platform, you agree to these Terms of Use. Please read them carefully. They explain how you engage with our services, how we protect your information, and what we expect from you as a member of our digital healthcare community.",
  },
  {
    id: "p2",
    isHeader: true,
    header: "1. Eligibility and Account Responsibilities",
    description:
      "You must be at least 18 years old to use our services. You are responsible for keeping your login credentials secure and for all activity under your account. If you suspect any unauthorized access, please notify us immediately.",
  },
  {
    id: "p3",
    isHeader: true,
    header: "2. Service Provided",
    description:
      "Cosmicforge HealthNet connects you with licensed doctors for virtual consultations, labs for test order management, registered pharmacies for prescription management, and offers patient management and related digital health services.",
    isSubDescriptions: true,
    subDescription: [
      {
        id: "sub1",
        description:
          "We do not provide emergency care. For urgent medical needs, contact local emergency services.",
      },
    ],
  },
  {
    id: "p4",
    isHeader: true,
    header: "3. Your Responsibilities",
    description: "You agree to: ",
    isList: true,
    List: (
      <BulletCategoryLabel
        points={userResponsibilities}
        className="flex flex-col gap-5"
      />
    ),
  },
  {
    id: "p5",
    isHeader: true,
    header: "4. Privacy and Data Protection",
    description:
      "We take privacy seriously. Our Privacy Policy explains how we collect, use, and protect your data. By using our platform, you consent to this policy. We collect only what is necessary for healthcare delivery, patient management, secure payments, and platform improvements. Sensitive medical data is handled with strict safeguards and is shared only with authorized doctors, hospitals, or trusted partners under secure conditions.",
  },
  {
    id: "p6",
    isHeader: true,
    header: "5. Payments and Billing",
    description:
      "All payments are processed through PCI DSS Level 1 certified gateways, including Paystack and Flutterwave. We do not store card details. We retain only non-sensitive transaction metadata for reconciliation and reporting.",
  },
  {
    id: "p7",
    isHeader: true,
    header: "6. Intellectual Property",
    description:
      "All platform content, branding, and technology belong to Cosmicforge HealthNet or its licensors. You receive a limited license to use the platform for personal healthcare purposes. Unauthorized reproduction, distribution, or reverse-engineering of our platform is prohibited.",
  },
  {
    id: "p8",
    isHeader: true,
    header: "7. Limitation of Liability",
    description:
      "Cosmicforge HealthNet provides digital healthcare services in accordance with applicable standards. We do not guarantee uninterrupted access or outcomes from consultations. We are not liable for damages arising from service interruptions, user misuse, or third-party system failures.",
  },
  {
    id: "p9",
    isHeader: true,
    header: "8. Dispute Resolution",
    description:
      "If a dispute arises, you agree to first attempt informal resolution with us. If unresolved, disputes will be settled by binding arbitration in Nigeria. You retain the right to bring claims to a small claims court. We may seek injunctive relief for data security or intellectual property concerns.",
  },
  {
    id: "p10",
    isHeader: true,
    header: "9. Governing Law",
    description:
      "These terms are governed by the laws of the Federal Republic of Nigeria. By using our platform, you consent to the jurisdiction of Nigerian courts.",
  },
  {
    id: "p11",
    isHeader: true,
    header: "10. Updates to Terms",
    description:
      "We may update these Terms from time to time. If material changes occur, we will notify you through the platform. Your continued use after updates means you accept the revised Terms.",
  },
  {
    id: "p12",
    isHeader: true,
    header: "11. Contact Us",
    description: "For questions about these Terms, you can reach us at:",
    isSubDescriptions: true,
    subDescription: [
      {
        id: "sub1",
        isLink: true,
        link: "info@cosmicforge-healthnet.com",
        linkType: "email",
        description: "Email: info@cosmicforge-healthnet.com",
      },
      {
        id: "sub1",
        description:
          "Address: Plot 8, Providence Street, Lekki Phase 1, Lagos State, Nigeria.",
      },
    ],
  },
];

function TermsAndConditionsContent() {
  const HeaderStyle = "mt-5 text-2xl font-bold pb-2";

  return (
    <section className="max-w-[1100px] mx-auto py-10 px-4 xl:px-0">
      <div>
        {/* Terms and conditions */}
        <LegalDocumentContainer title="Security Policy" sections={TermsData} />
        {/* {TermsData.map((data) => (
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
        ))} */}
      </div>
    </section>
  );
}

export default TermsAndConditionsContent;
